---
description: Guides Cascade through the process of updating the weekly engineering report with new data.
---

## Weekly Report Update Main Workflow

This workflow orchestrates the entire weekly report update process, from data extraction to final slide verification, incorporating all best practices and tool updates.

### **Phase 1: Initialization**

1.  **Create New Branch:**
    *   Invoke the `/initialize-report` workflow to create a new, clean branch for the week's update.

### **Phase 2: Automated Data Extraction**

1.  **Confirm Source Files (PDF-First for BEV):**
    *   **For BEV Data:** Prioritize the Epiroc PDF report (`BRMO weekly report...`) as the primary source for breakdowns and battery/charger themes. Use CSV data to supplement information for days not covered by the PDF (typically Friday-Sunday).
    *   **For Other Sites:** Use CSV files in `weekly-report-generator/data-extract/` as the primary source of truth. If CSVs are not present, fall back to report images in `public/images/Week<N>/`.

2.  **Run Consolidated Data Extraction:**
    *   Invoke the `/update-all-data-sources` workflow to extract data for all sites, which will handle the CSV-first logic and update `reportData.ts`.

### **Phase 3: Automated Slide Review**

1.  **Run Review Workflow:**
    *   Invoke the `/review-slides` workflow, which uses the `capture-slides.js` script to automatically capture screenshots of all slides for verification.

2.  **Verify Data Rendering:**
    *   Review the captured screenshots, paying close attention to sections that are populated from `reportData.ts` (e.g., Key Breakdowns, HEAL points, BEV themes).
    *   **Crucially, if data appears correct in the file but is missing or truncated on the slide, investigate the corresponding `.tsx` component file for hardcoded presentation logic.**

### **Phase 4: HEAL Matrix Validation**

1.  **Invoke HEAL Review Workflow:**
    *   Invoke the `/review-heal-matrices` workflow to perform a full, standardized review of the Departmental and Shafts & Winders HEAL slides. This workflow covers all data segregation, layout, and content curation checks.

### **Phase 5: Finalization**

1.  **Confirm Approval:**
    *   Ask the user for final approval on the visual state of the report based on the screenshots and checklist.

2.  **Create Summary:**
    *   Create a new Markdown summary file for the week (e.g., `Week_XX_Update_Summary.md`) detailing the automated updates and any manual fixes applied.

3.  **Commit & PR:**
    *   Commit all changes to the branch and notify the user that the report is ready for the final pull request.