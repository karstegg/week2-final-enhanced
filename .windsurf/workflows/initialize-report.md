---
description: Prepares the repository for a new weekly report by creating a new branch.
---

## Initialize Weekly Report Workflow

This workflow sets up the environment for a new weekly report.

### **Phase 1: Branch Creation**

1.  **Get Week Number:** Ask the user for the new week number (e.g., 53).

2.  **Create New Branch:**
    *   // turbo
    *   Execute the command `git checkout -b week-XX` where `XX` is the new week number provided by the user. This creates and switches to the new branch, ready for the week's updates.

### **Phase 2: Data Preparation**

1.  **Confirmation:** Inform the user that the branch `week-XX` has been created and is ready.

2.  **Create Image Directory:**
    *   // turbo
    *   Create the directory for the week's images at `weekly-report-generator/public/images/WeekXX`, where `XX` is the current week number.

3.  **Request Data:** Prompt the user to upload the weekly data, reminding them of the correct locations:
    *   For structured data (availability, breakdowns), place CSV files in `weekly-report-generator/data-extract/`.
    *   For images (trend charts, etc.), place files in the newly created `weekly-report-generator/public/images/WeekXX/` directory.

4.  **Next Steps:** Once the data is uploaded, advise the user to confirm so the `/weekly-report-update` workflow can begin.