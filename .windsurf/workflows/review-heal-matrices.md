---
description: "Provides a standardized protocol for critically reviewing the two HEAL matrix slides (Departmental and Shafts & Winders) to ensure data segregation and visual integrity."
---

## HEAL Matrix Review Protocol

This workflow is mandatory for reviewing the departmental and Shafts & Winders HEAL slides to prevent data mixing and layout issues as well as to ensure that the content meets the requirements of presentation to an executive audience.

### **Phase 1: Capture Slides**

1.  **Run Capture Script**: Use the standard `/review-slides` workflow, which executes `node capture-slides.js`, to generate fresh screenshots of all slides.

### **Phase 2: Critical Review Checklist**

Review the captured screenshots for Slide 3 and Slide 4 against the following non-negotiable rules:

**Slide 3: Departmental Overview (HEAL)**

*   **[ ] Data Segregation Check**: Confirm this slide contains **ONLY** data from the underground sites (N2, N3, Gloria). It **MUST NOT** contain any data from Shafts & Winders.
*   **[ ] Layout & Overflow Check**: Verify that all text in the Highlights, Lowlights, Emerging Issues, and Priorities quadrants fits within the designated boxes. There must be **NO** overflow, or truncation.
*   **[ ] Content Check**: Verify that the contents are suitable for an executive audience. Summarise and rephrase as necessary especially if there are many points to capture. Summarise details into higher level items as necessary

**Slide 4: Shafts & Winders (HEAL)**

*   **[ ] Data Segregation Check**: Confirm this slide contains **ONLY** data from Shafts & Winders.
*   **[ ] Layout & Overflow Check**: Verify all text fits within the designated boxes without any overflow or truncation issues.
*   **[ ] Content Check**: Verify that the contents are suitable for an executive audience. Summarise and rephrase as necessary especially if there are many points to capture. Summarise details into higher level items as necessary

### **Phase 3: Remediation**

*   If any rule is violated, the root cause is incorrect data in `reportData.ts`.
*   **To Fix**: Edit the `heal` and `shaftsAndWinders` objects in `reportData.ts` to be more concise or to remove data from the incorrect section. The primary goal is to ensure 100% compliance with the data segregation and layout rules. Als