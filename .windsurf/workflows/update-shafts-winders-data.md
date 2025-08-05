---
description: "Extracts all weekly data for the Shafts & Winders section from its two report images and prepares it for updating reportData.ts."
---

## Shafts & Winders Data Extraction Protocol

This workflow uses `claude` to analyze the two weekly report images for the Shafts & Winders section and extract the necessary data points.

### Key Steps & Learnings:

1.  **Identify Source Images**: Locate the two weekly report images for Shafts & Winders in the `public/images/Week<N>` folder.

2.  **Use `claude` for Analysis**: For each image, use the `claude` CLI tool to extract the relevant data (Tons Per Hour, RW Availability, highlights, lowlights, etc.).

    *   **Example Command**:
        // turbo
        ```bash
        echo "From the Shafts & Winders report image, extract the values for 'Tons Per Hour' and 'RW Availability', including both the actual value and the target. Also extract the lists of highlights and lowlights." | claude --print --add-dir "public/images/Week<N>"
        ```

3.  **Consolidate Data**: Gather all the extracted values and text.

4.  **Update `reportData.ts`**: Carefully transfer the consolidated data into the `shaftsAndWinders` object within the `reportData.ts` file.