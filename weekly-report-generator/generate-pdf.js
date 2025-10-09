import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

    // Override the window.print function to prevent the print dialog from appearing
    await page.evaluate(() => {
      window.print = () => {};
    });

    // Click the 'Print to PDF' button to trigger the print layout
    const printButtonSelector = 'button.bg-green-600';
    await page.waitForSelector(printButtonSelector);
    await page.click(printButtonSelector);

    // Wait for the print layout to be rendered
    await page.waitForSelector('#print-container', { timeout: 5000 });
    // Add a small delay for all content to finish rendering inside the print container
    await new Promise(r => setTimeout(r, 2000));

    // Generate the PDF from the print container
    await page.pdf({
      path: './Weekly-Report.pdf',
      format: 'A4',
      printBackground: true,
      margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
    });

    console.log('PDF generated successfully: Weekly-Report.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  } finally {
    await browser.close();
  }
})();
