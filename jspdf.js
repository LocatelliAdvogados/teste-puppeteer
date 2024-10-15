const { jsPDF } = require("jspdf"); // will automatically load the node version

function generatePDFfromHTML(htmlContent, outputPath) {
  const doc = new jsPDF();
  doc.text(htmlContent, 10, 10);
  doc.save(outputPath);
  console.log('PDF generated successfully');
}

// Usage
const htmlContent = `<table style="">
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
                    </table>`
generatePDFfromHTML(htmlContent, 'custom.pdf');
