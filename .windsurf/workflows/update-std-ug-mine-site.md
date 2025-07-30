---
description: "Extracts all weekly data from the four standard report images for a UG site (N2, Gloria) and prepares it for updating reportData.ts."
---

## Standard UG Mine Site Data Extraction Protocol

This workflow uses `claude` to analyze the four standard weekly report images for an underground site (like N2 or Gloria) and extract the necessary data points.

### Key Steps & Learnings:

1.  **Identify Source Images**: Locate the four standard weekly report images for the site in the `public/images/Week<N>` folder. This typically includes:
    *   Weekly Availability Chart
    *   HEAL Page
    *   Daily Availability & Delays
    *   Weekly Maintenance Compliance

2.  **Use `claude` for Analysis**: For each of the four images, use the `claude` CLI tool to extract the relevant data. The correct syntax pipes a prompt to the command.

    *   **Example for Weekly Availability Chart**:
        ```bash
        echo "From the Weekly Availability Chart, extract the weekly availability percentage for all listed fleets. Return as JSON." | claude --print --add-dir "public/images/Week<N>"
        ```

    *   **Example for HEAL Page**:
        ```bash
        echo "From the HEAL page, extract the values for LTI, Section 54s, and other key safety metrics." | claude --print --add-dir "public/images/Week<N>"
        ```

    *   **Example for Daily Availability**:
        ```bash
        echo "From the Daily Availability image, identify the top 3 reasons for delays or downtime this week." | claude --print --add-dir "public/images/Week<N>"
        ```

    *   **Example for Maintenance Compliance**:
        ```bash
        echo "From the Weekly Maintenance Compliance chart, extract the compliance percentage for the HD, LHD, and Drill Rig fleets." | claude --print --add-dir "public/images/Week<N>"
        ```

3.  **Consolidate Data**: Gather all extracted data points from the four images.

4.  **Update `reportData.ts`**: Carefully transfer the consolidated data into the correct site object within the `reportData.ts` file.