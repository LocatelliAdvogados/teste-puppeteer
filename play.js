const playwright = require('playwright');

async function generatePDFfromHTML(htmlContent, outputPath) {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);

  await page.emulateMedia({ media: 'screen' });
  
  await page.pdf({ path: outputPath });
  console.log('PDF generated successfully');
  await browser.close();
}

// Usage
const htmlContent = '<p>Hello World. This is custom HTML content.</p>';
generatePDFfromHTML(htmlContent, 'custom.pdf');
