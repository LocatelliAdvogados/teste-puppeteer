// const puppeteer = require('puppeteer');

// const username = process.env.USERNAME || 'ebidel';
// const searchable = process.argv.includes('--searchable');

(async() => {

  // const browser = await puppeteer.launch({
  //   executablePath: '/usr/bin/chromium-browser'
  // })

  let browser = await puppeteer.launch({ 
    executablePath: '/usr/bin/chromium-browser', 
    args: [ '--disable-gpu', '--disable-setuid-sandbox', '--no-sandbox', '--no-zygote' ]
  }) 

  console.log('browser', browser)

// const browser = await puppeteer.launch();

// const page = await browser.newPage();
// await page.setViewport({width: 1200, height: 800, deviceScaleFactor: 2});
// await page.goto(`https://twitter.com/${username}`);

// // Can't use elementHandle.click() because it clicks the center of the element
// // with the mouse. On tweets like https://twitter.com/ebidel/status/915996563234631680
// // there is an embedded card link to another tweet that it clicks.
// await page.$eval(`.tweet[data-screen-name="${username}"]`, tweet => tweet.click());
// await page.waitForSelector('.tweet.permalink-tweet', {visible: true});

// const overlay = await page.$('.tweet.permalink-tweet');
// const screenshot = await overlay.screenshot({path: 'tweet.png'});

// if (searchable) {
//   await page.evaluate(tweet => {
//     const width = getComputedStyle(tweet).width;
//     tweet = tweet.cloneNode(true);
//     tweet.style.width = width;
//     document.body.innerHTML = `
//       <div style="display:flex;justify-content:center;align-items:center;height:100vh;">;
//         ${tweet.outerHTML}
//       </div>
//     `;
//   }, overlay);
// } else {
//   await page.setContent(`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <style>
//           html, body {
//             height: 100vh;
//             margin: 0;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             background: #fafafa;
//           }
//           img {
//             max-width: 60%;
//             box-shadow: 3px 3px 6px #eee;
//             border-radius: 6px;
//           }
//         </style>
//       </head>
//       <body>
//         <img src="data:img/png;base64,${screenshot.toString('base64')}">
//       </body>
//     </html>
//   `);
// }

// await page.pdf({path: 'tweet.pdf', printBackground: true});

// await browser.close();

})();




// const puppeteer = require('puppeteer');
// const fs = require('fs');

// async function run () {
//   const browser = await puppeteer.launch({
//     executablePath: '/usr/bin/google-chrome-stable',
//     args: ['--no-sandbox'],
//     defaultViewport: {width: 1920, height: 1080}
//   });
//   const page = await browser.newPage();
//   await page.goto('https://www.google.com');
//   await sleep(3000);

//   await page.screenshot({path: 'screenshot.png'});
//   const html = await page.content();
//   fs.writeFileSync('source.htm', html);

//   browser.close();
// }
// run();

// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// } 




// const puppeteer = require('puppeteer');

// // module.exports = {
// //     generatePdfFromHtml,
// // }

// (async() => {
//     const pdf = await generatePdfFromHtml()
//     console.log('pdf', pdf)
//  })()

// async function generatePdfFromHtml() {
//     let os = require('os')
//     console.log(os.userInfo());

//     console.log('__dirname', __dirname)

//     // const browser = await puppeteer.launch();

//     const browser = await puppeteer.launch({
//       executablePath: '/usr/bin/chromium-browser'
//     })

//     console.log('browser', browser)

//     // const browser = await puppeteer.launch({
//     //     executablePath: __dirname + '/../../chromium-browser'
//     // })

//     // const {executablePath} = require('puppeteer')
    
//     // const browser = await puppeteer.launch({
//     //     headless:false,
//     //     args: ["--no-sandbox"],
//     //     executablePath: executablePath(),
//     // });

//     // Create a new page
//     const page = await browser.newPage();

//     console.log('page', page)

//     // Get HTML content from HTML file
//     const html = `
//         <!DOCTYPE html>
//             <html>
//                 <head>
//                     <title>HTML content</title>

//                     <link rel="preconnect" href="https://fonts.googleapis.com">
//                     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//                     <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">

//                     <style>
                        

//                         table {
//                             margin: 0;
//                             border-collapse: collapse;
//                         }

//                         td, th {
//                             background: lightblue;
//                             border: 3px solid white;
//                             padding: 10px;
//                             text-align: left;
//                         }

//                         body {
//                             font-family: "Source Sans 3", sans-serif;
//                             margin: 0;
//                             -webkit-print-color-adjust: exact;
//                         }

//                         div {
//                             background: lightblue;
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <table style="">
//                         <tr>
//                             <th>aaaaaaaaaaa</th>
//                             <th>b</th>
//                         </tr>

//                         <tr>
//                             <th>bbbbbb</th>
//                             <td>1b</td>
//                         </tr>

//                         <tr>
//                             <td>2a</td>
//                             <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
//                         </tr>
//                     </table>



//                     <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>


                
//                 </body>
//             </html>
//     `
//     await page.setContent(html, { waitUntil: 'domcontentloaded' });
//     await page.emulateMediaType('screen');

//     // Downlaod the PDF
//     const pdf = await page.pdf({
//         // path: 'result.pdf',
//         // margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
//         printBackground: true,

//         format: 'A4',
//         // displayHeaderFooter: true,
//         // footerTemplate: `
//         //     <div>footer</div>
//         // `,
//         // headerTemplate: `
//         //     header
//         // `,

//         displayHeaderFooter: true,
//         // prevent default header from being displayed
//         headerTemplate: `
//             <style>
//                 .header {
//                     font-size: 12px;
//                     background: lightblue;
//                     -webkit-print-color-adjust: exact;
//                     width: 100%;
//                     margin-top: -20px;
//                 }
//             </style>

//             <div class="header">
//                 Page <span class="pageNumber"></span> of <span class="totalPages"></span>
//             </div>
//         `,
//         // NOTE: font size must be specified
//         footerTemplate: `
//             <style>
//                 .footer {
//                     font-size: 12px;
//                     background: yellow;
//                     -webkit-print-color-adjust: exact;
//                     width: 100%;
//                     margin-bottom: -20px;
//                 }
//             </style>

//             <div class="footer">
//                 Page <span class="pageNumber"></span> of <span class="totalPages"></span>
//             </div>
//         `,
//     })

//     // Close the browser instance
//     await browser.close();



//     // const pdfData = await report.generate(
//     //     req.params.clientId,
//     //     req.query.dev === '',
//     //     null,
//     //     false,
//     // )

//     return pdf
// }
