import puppeteer from 'puppeteer';
import fs from 'fs';

const outputDir = 'screenshots/review';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await page.setViewport({ width: 1920, height: 1080 });

  await page.waitForSelector('#root:not(:empty)');
  await new Promise(r => setTimeout(r, 1000));

  const totalSlides = 11;

  for (let i = 0; i < totalSlides; i++) {
    const slideNumber = i + 1;
    console.log(`Capturing slide ${slideNumber}...`);

    await page.waitForFunction(
      `document.body.innerText.includes("Slide ${slideNumber} of ${totalSlides}")`
    );

    const slideContainer = await page.$('.w-full.max-w-screen-xl > .w-full');
    if (slideContainer) {
      await slideContainer.screenshot({
        path: `${outputDir}/slide-${slideNumber}.png`
      });
      console.log(`Screenshot saved for slide ${slideNumber}`);
    } else {
      console.error(`Could not find slide container for slide ${slideNumber}`);
    }

    if (i < totalSlides - 1) {
      await page.evaluate(() => {
        const nextButton = Array.from(document.querySelectorAll('button')).find(el => el.textContent.trim() === 'Next');
        if (nextButton) nextButton.click();
      });
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log('All slides captured.');
  await browser.close();
})().catch(e => console.error('An error occurred:', e));
