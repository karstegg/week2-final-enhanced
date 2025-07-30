---
description: "Runs a full, automated visual review of the report slides using a Node.js script to capture screenshots for final verification."
---

## Automated Slide Review Protocol

This workflow uses the `capture-slides.js` script to automatically navigate through the weekly report presentation, capture screenshots of each slide, and save them for verification. This is the new standard and replaces the previous manual Puppeteer process.

### Key Steps:

1.  **Start the Server**: Ensure the local development server is running before initiating the review.
    ```bash
    npm run dev
    ```

2.  **Run the Capture Script**: Execute the `capture-slides.js` script from the `weekly-report-generator` directory. This script handles all browser automation, navigation, and screenshotting.
    ```bash
    // turbo
    node capture-slides.js
    ```

3.  **Verify**: Review the captured screenshots in the `screenshots/review` folder to confirm data accuracy and correct rendering.