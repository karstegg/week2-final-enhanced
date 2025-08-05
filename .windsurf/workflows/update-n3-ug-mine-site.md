---
description: "Extracts all weekly data for the Nchwaning 3 site, including both standard and BEV fleets, and prepares it for updating reportData.ts."
---

## Nchwaning 3 Data Extraction Protocol

This workflow uses `claude` to analyze the various weekly report images for the Nchwaning 3 site and extract the necessary data points.

### **Phase 1: Standard Fleet Data**

1.  **Identify Source Images**: Locate the standard fleet report images for N3 in `public/images/Week<N>`:
    *   `N3 Weekly Availability Chart - Week<N>.png`
    *   `N3 Primary Equipment Daily Availabilities - Week<N>.png`

2.  **Extract Standard Data**: Use `claude` to extract all availability and performance data for the standard (non-BEV) fleets.
    *   **Example Command**:
        // turbo
        ```bash
        echo "From the image 'N3 Weekly Availability Chart - Week4.png', extract the weekly availability percentage for all listed fleets. Return the data in JSON format." | claude --print --add-dir "public/images/Week4"
        ```

### **Phase 2: BEV Fleet Data (Critical Details)**

1.  **Identify BEV Source Images**:
    *   `N3 BEV Weekly Dashboard - Week<N>.png`
    *   `N3 Weekly Maintenance Compliance - Week<N>.png`

2.  **Extract BEV Availability & Breakdowns**:
    *   From the BEV Dashboard, extract the weekly availability, breakdown reasons, and battery themes.
    *   **Curation Rule:** **DO NOT** include routine operational notes as "breakdowns". For example, "Multiple battery change requests" is **not** a valid issue. Focus only on abnormal faults.
    *   **Example Command**:
        // turbo
        ```bash
        echo "From 'N3 BEV Weekly Dashboard - Week4.png', extract availability, breakdowns, and battery themes. Exclude routine notes like battery swaps." | claude --print --add-dir "public/images/Week4"
        ```

3.  **Extract Maintenance Compliance (IMPORTANT)**:
    *   From the Maintenance Compliance chart, extract the 'Weekly Compliance %' for 'DT BEV' and 'FL BEV'.
    *   **Rule:** If a fleet shows no data because no maintenance was scheduled, the `value` in `reportData.ts` **must be set to `null`**.
    *   **Example Command**:
        // turbo
        ```bash
        echo "From 'N3 Weekly Maintenance Compliance - Week4.png', what is the Weekly Compliance % for DT BEV and FL BEV? Note if any fleet had no scheduled maintenance." | claude --print --add-dir "public/images/Week4"
        ```

### **Phase 3: Consolidation**

1.  **Update `reportData.ts`**: Carefully transfer all consolidated data into the `sites.n3` and `bev` objects within the `reportData.ts` file, ensuring the BEV rules above are followed.