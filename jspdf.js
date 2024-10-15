const { jsPDF } = require("jspdf"); // will automatically load the node version

function generatePDFfromHTML(htmlContent, outputPath) {
  const doc = new jsPDF();
  doc.text(htmlContent, 10, 10);
  doc.save(outputPath);
  console.log('PDF generated successfully');
}

// Usage
const htmlContent = 'Hello World. This is custom HTML content.';
generatePDFfromHTML(htmlContent, 'custom.pdf');
