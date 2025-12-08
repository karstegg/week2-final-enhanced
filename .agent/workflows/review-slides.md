---
description: Automate the capture and review of report slides.
---

# Review Slides Workflow

## Purpose
To visually verify the generated report slides by capturing screenshots and inspecting them.

## Steps

1.  **Start Dev Server**:
    - Ensure `npm run dev` is running.

2.  **Capture Slides**:
    - Run the capture script:
    - // turbo
    - `node capture-slides.js`

3.  **Review Screenshots**:
    - Inspect the generated screenshots in the `screenshots/` directory.
    - Check for:
        - Text overflow.
        - Missing images.
        - Incorrect color coding (Green/Amber/Red).
        - Layout alignment.

4.  **Report Findings**:
    - Summarize any visual issues found.
