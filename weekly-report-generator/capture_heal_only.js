
import puppeteer from 'puppeteer';
import fs from 'fs';

const outputDir = 'screenshots/review';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });
    await page.setViewport({ width: 1920, height: 1080 });

    await page.waitForSelector('#root:not(:empty)');
    await new Promise(r => setTimeout(r, 2000));

    // Navigate to Slide 3 (2 clicks)
    for (let i = 0; i < 2; i++) {
        await page.evaluate(() => {
            const nextButton = Array.from(document.querySelectorAll('button')).find(el => el.textContent.trim() === 'Next');
            if (nextButton) nextButton.click();
        });
        await new Promise(r => setTimeout(r, 500));
    }

    // Wait for slide to settle
    await new Promise(r => setTimeout(r, 1000));

    const slideContainer = await page.$('.w-full.max-w-screen-xl > .w-full');
    if (slideContainer) {
        await slideContainer.screenshot({
            path: `${outputDir}/slide-3-xs.png`
        });
        console.log('Screenshot saved for slide 3');
    } else {
        console.error('Could not find slide container');
    }

    await browser.close();
})();
