---
description: Extracts weekly data for N3 UG mine site.
---

# Update N3 UG Mine Site Workflow

## Purpose
Specific data extraction logic for Nchwaning 3 (N3), which may have unique data formats or requirements.

## Steps

1.  **Identify Data Source**:
    - Look for N3-specific CSVs or images.

2.  **Extract Data**:
    - Extract availability, compliance, and breakdown data.
    - **Note**: N3 often has specific BEV (Battery Electric Vehicle) data mixed in. Ensure this is correctly separated if needed, or cross-referenced with the BEV section.

3.  **Update Report Data**:
    - Update the `n3` section in `src/data/reportData.ts`.
