---
description: Guides Cascade through the process of updating the weekly engineering report with new data.
---

## Weekly Report Update Main Workflow

This workflow orchestrates the entire weekly report update process, from data extraction to final slide verification, incorporating all best practices and tool updates.

### **Phase 1: Initialization**

1.  **Create New Branch:**
    *   Invoke the `/initialize-report` workflow to create a new, clean branch for the week's update.

### **Phase 2: Automated Data Extraction**

1.  **Confirm Source Files:**
    *   Confirm with the user that all new report images for the week have been uploaded to the `public/images/Week<N>/` folder.

2.  **Process Sites with Updated Workflows:**
    *   Use `claude` for all image analysis by invoking the updated, specific workflows for each site. The standard command structure pipes a prompt into the tool:
        ```bash
        echo "Your data extraction question about a specific image." | claude --print --add-dir "public/images/Week<N>"
        ```
    *   Invoke `/update-std-ug-mine-site` for **Nchwaning 2**.
    *   Invoke `/update-std-ug-mine-site` for **Gloria**.
    *   Invoke `/update-n3-ug-mine-site` for **Nchwaning 3** (Standard & BEV).
    *   Invoke `/update-shafts-winders-data` for **Shafts & Winders**.

3.  **Update `reportData.ts`:**
    *   Gather the JSON output from each workflow and carefully update the main `reportData.ts` file.

### **Phase 3: Automated Slide Review**

1.  **Run Review Workflow:**
    *   Invoke the `/review-slides-updated` workflow, which uses the `capture-slides.js` script to automatically capture screenshots of all slides for verification.

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