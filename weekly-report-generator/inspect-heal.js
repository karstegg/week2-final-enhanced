
import puppeteer from 'puppeteer';
import fs from 'fs';

const outputDir = 'screenshots/heal_detail';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });
    await page.setViewport({ width: 1920, height: 1080 });

    // Navigate to Slide 3
    // Assuming we start at Slide 1. Click Next twice.
    await page.waitForSelector('button');

    // Helper to click next
    const clickNext = async () => {
        await page.evaluate(() => {
            const nextButton = Array.from(document.querySelectorAll('button')).find(el => el.textContent.trim() === 'Next');
            if (nextButton) nextButton.click();
        });
        await new Promise(r => setTimeout(r, 1000));
    };

    await clickNext(); // To Slide 2
    await clickNext(); // To Slide 3

    console.log('Navigated to Slide 3');

    // Select quadrants
    // Based on the layout, we expect 4 main sections. We'll try to identify them by text content or structure.
    // Usually HEAL has: Highlights (TL), Lowlights (TR), Emerging Issues (BL), Priorities (BR) or similar.
    // Let's find the containers based on the headers.

    const quadrants = [
        { name: 'Highlights', selector: 'text=Highlights' }, // Pseudo-selector logic, will implement real one below
        { name: 'Lowlights', selector: 'text=Lowlights' },
        { name: 'Emerging Issues', selector: 'text=Emerging Issues' },
        { name: 'Priorities', selector: 'text=Priorities' }
    ];

    const results = {};

    for (const q of quadrants) {
        // Find the header element
        const headerHandle = await page.evaluateHandle((text) => {
            const allDivs = Array.from(document.querySelectorAll('div, h2, h3'));
            return allDivs.find(el => el.textContent.trim() === text);
        }, q.name);

        if (headerHandle.asElement()) {
            // Assuming the content is in a sibling or parent container. 
            // In many grid layouts, the header is inside a box. Let's get the parent of the header.
            const containerHandle = await page.evaluateHandle(el => el.parentElement, headerHandle);

            // Check for overflow
            const overflowInfo = await page.evaluate(el => {
                return {
                    scrollHeight: el.scrollHeight,
                    clientHeight: el.clientHeight,
                    isOverflowing: el.scrollHeight > el.clientHeight,
                    text: el.innerText
                };
            }, containerHandle);

            results[q.name] = overflowInfo;
            console.log(`${q.name}: Overflow? ${overflowInfo.isOverflowing} (${overflowInfo.scrollHeight} vs ${overflowInfo.clientHeight})`);

            // Screenshot
            await containerHandle.screenshot({ path: `${outputDir}/${q.name.replace(' ', '_')}.png` });
        } else {
            console.log(`Could not find header for ${q.name}`);
        }
    }

    console.log('Inspection complete.');
    console.log(JSON.stringify(results, null, 2));

    await browser.close();
})();
