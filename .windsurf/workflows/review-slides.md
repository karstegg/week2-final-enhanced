---
description: "Runs a full, automated visual review of the report slides using a Node.js script to capture screenshots for final verification."
---

## Automated Slide Review Protocol

This workflow uses the `capture-slides.js` script to automatically navigate through the weekly report presentation, capture screenshots of each slide, and save them for verification. This is the new standard and replaces the previous manual Puppeteer process.

### Key Steps:

This process requires **two separate terminals**.

1.  **Terminal 1: Ensure the Dev Server is Running**: The dev server automatically updates when `reportData.ts` changes, so you don't need to restart it for every change.
    - **Check if it's running**: Use the following command to see if port 5173 is in use. If a process is `LISTENING`, the server is active.
      ```bash
      netstat -ano | findstr :5173
      ```
    - **If not running, start it**: From the `weekly-report-generator/` directory, start the dev server and leave it running.
      ```bash
      npm run dev
      ```

2.  **Terminal 2: Run the Capture Script**: In a new terminal, navigate to the **project root** directory (`Weekly Report Generator Cloned from Github/`) and execute the `capture-slides.js` script. The `--verbose` flag is included for detailed output.
    ```bash
    // turbo
    node capture-slides.js --verbose
    ```

3.  **Verify**: Review the captured screenshots in the `screenshots/review` folder to confirm data accuracy and correct rendering.
