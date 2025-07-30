---
description: "Analyzes a site's weekly availability chart to extract key data, identify trends, and generate a narrative summary."
---

## Availability Chart Analysis Protocol

This workflow uses `claude` to analyze a site's weekly availability chart image, extract key data points, and generate a narrative summary for the `reportData.ts` file.

### Key Steps & Learnings:

1.  **Identify Source Image**: Locate the weekly availability chart for the target site in the `public/images/Week<N>` folder.

2.  **Use `claude` for Analysis**: Use the `claude` CLI tool to extract the weekly average availability and generate a summary comment.

    *   **Example Command**:
        ```bash
        echo "From the weekly availability chart, extract the 'Weekly Avg.' percentage and generate a brief, one-sentence comment on the performance trend shown." | claude --print --add-dir "public/images/Week<N>"
        ```

3.  **Update `reportData.ts`**: Carefully transfer the extracted percentage and the generated comment into the `trendChart` object for the correct site in `reportData.ts`.