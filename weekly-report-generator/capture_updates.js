
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

    // Helper to click next
    const clickNext = async (count) => {
        for (let i = 0; i < count; i++) {
            await page.evaluate(() => {
                const nextButton = Array.from(document.querySelectorAll('button')).find(el => el.textContent.trim() === 'Next');
                if (nextButton) nextButton.click();
            });
            await new Promise(r => setTimeout(r, 500));
        }
        await new Promise(r => setTimeout(r, 1000)); // Settle
    };

    // Capture Slide 3 (HEAL) - 2 clicks from start
    await clickNext(2);
    await page.screenshot({ path: `${outputDir}/slide-3-final.png` });
    console.log('Captured Slide 3');

    // Capture Slide 5 (Gloria) - 2 more clicks (total 4)
    await clickNext(2);
    await page.screenshot({ path: `${outputDir}/slide-5-final.png` });
    console.log('Captured Slide 5');

    // Capture Slide 7 (N3) - 2 more clicks (total 6)
    await clickNext(2);
    await page.screenshot({ path: `${outputDir}/slide-7-final.png` });
    console.log('Captured Slide 7');

    await browser.close();
})();
