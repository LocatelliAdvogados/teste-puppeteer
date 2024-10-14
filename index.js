const puppeteer = require('puppeteer')

module.exports = {
    generatePdfFromHtml,
}

const pdf = generatePdfFromHtml()
console.log('pdf', pdf)

async function generatePdfFromHtml() {
    let os = require('os')
    console.log(os.userInfo());

    console.log('__dirname', __dirname)

    // const browser = await puppeteer.launch();

    // const browser = await puppeteer.launch({
    //   executablePath: '/usr/bin/chromium-browser'
    // })
    // const browser = await puppeteer.launch({
    //     executablePath: __dirname + '/../../chromium-browser'
    // })
    
    const browser = await puppeteer.launch({
        headless:false,
        args: ["--no-sandbox"]
    });

    // Create a new page
    const page = await browser.newPage();

    console.log('page', page)

    // Get HTML content from HTML file
    const html = `
        <!DOCTYPE html>
            <html>
                <head>
                    <title>HTML content</title>

                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">

                    <style>
                        

                        table {
                            margin: 0;
                            border-collapse: collapse;
                        }

                        td, th {
                            background: lightblue;
                            border: 3px solid white;
                            padding: 10px;
                            text-align: left;
                        }

                        body {
                            font-family: "Source Sans 3", sans-serif;
                            margin: 0;
                            -webkit-print-color-adjust: exact;
                        }

                        div {
                            background: lightblue;
                        }
                    </style>
                </head>
                <body>
                    <table style="">
                        <tr>
                            <th>aaaaaaaaaaa</th>
                            <th>b</th>
                        </tr>

                        <tr>
                            <th>bbbbbb</th>
                            <td>1b</td>
                        </tr>

                        <tr>
                            <td>2a</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                        </tr>
                    </table>



                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>


                
                </body>
            </html>
    `
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await page.emulateMediaType('screen');

    // Downlaod the PDF
    const pdf = await page.pdf({
        // path: 'result.pdf',
        // margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
        printBackground: true,

        format: 'A4',
        // displayHeaderFooter: true,
        // footerTemplate: `
        //     <div>footer</div>
        // `,
        // headerTemplate: `
        //     header
        // `,

        displayHeaderFooter: true,
        // prevent default header from being displayed
        headerTemplate: `
            <style>
                .header {
                    font-size: 12px;
                    background: lightblue;
                    -webkit-print-color-adjust: exact;
                    width: 100%;
                    margin-top: -20px;
                }
            </style>

            <div class="header">
                Page <span class="pageNumber"></span> of <span class="totalPages"></span>
            </div>
        `,
        // NOTE: font size must be specified
        footerTemplate: `
            <style>
                .footer {
                    font-size: 12px;
                    background: yellow;
                    -webkit-print-color-adjust: exact;
                    width: 100%;
                    margin-bottom: -20px;
                }
            </style>

            <div class="footer">
                Page <span class="pageNumber"></span> of <span class="totalPages"></span>
            </div>
        `,
    })

    // Close the browser instance
    await browser.close();



    // const pdfData = await report.generate(
    //     req.params.clientId,
    //     req.query.dev === '',
    //     null,
    //     false,
    // )

    return pdf
}
