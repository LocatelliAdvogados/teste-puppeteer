const { jsPDF } = require("jspdf"); // will automatically load the node version

function generatePDFfromHTML(htmlContent, outputPath) {
  const doc = new jsPDF();
  doc.text(htmlContent, 10, 10);
  doc.save(outputPath);
  console.log('PDF generated successfully');
}

// Usage
const htmlContent = `

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
                    
                </body>
            </html>

`
generatePDFfromHTML(htmlContent, 'custom.pdf');
