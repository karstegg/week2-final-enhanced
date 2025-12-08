---
description: Initialize a new weekly report by copying the previous week's data.
---

# Initialize Report Workflow

## Purpose
To prepare the `src/data/reportData.ts` file for a new week by rolling over the previous week's structure and clearing out specific data points while keeping static configuration.

## Steps

1.  **Update Week Number & Date**:
    - Increment `weekNumber`.
    - Update `dateRange` to the new week.

2.  **Reset Performance Metrics**:
    - Keep the structure but reset values that are likely to change significantly (e.g., specific breakdown details).
    - **Keep** target values (e.g., `target: 85`).

3.  **Clear Narrative Fields**:
    - Clear `highlights`, `lowlights`, `emergingIssues`, and `priorities` in the HEAL sections.
    - Clear `keyBreakdowns` details.

4.  **Verify**:
    - Ensure the file is valid TypeScript and the structure matches the `ReportData` interface.
