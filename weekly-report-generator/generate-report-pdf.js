import puppeteer from 'puppeteer';

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log('Navigating to http://localhost:5173...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  console.log('Waiting for application to load...');
  await page.waitForSelector('#root:not(:empty)');

  console.log('Clicking Print to PDF button...');
  await page.evaluate(() => {
    const printButton = Array.from(document.querySelectorAll('button')).find(el => el.textContent.trim() === 'Print to PDF');
    if (printButton) {
      printButton.click();
    } else {
      throw new Error('Print to PDF button not found');
    }
  });

  console.log('Waiting for print layout to render...');
  await page.waitForSelector('#print-container', { timeout: 5000 });

  console.log('Generating PDF...');
  await page.pdf({
    path: 'screenshots/review/report-review-final.pdf',
    format: 'A4',
    printBackground: true,
    width: '1920px',
    height: '1080px',
    pageRanges: '1-11'
  });

  console.log('PDF generated successfully!');
  await browser.close();
})().catch(e => console.error('An error occurred:', e));
