---
description: Extracts weekly data for a standard UG site (Gloria, N2).
---

# Update Standard UG Mine Site Workflow

## Purpose
Standardized data extraction for Gloria and Nchwaning 2.

## Steps

1.  **Identify Data Source**:
    - Check for CSV files first (e.g., `Gloria Weekly Availabilities.csv`).
    - Fallback to images in `public/images/Week<N>/`.

2.  **Extract Data**:
    - **Availability**: Extract percentages for DT, FL, HD, RT, SR.
    - **Compliance**: Service compliance status and details.
    - **HEAL**: Extract from HEAL page image or text.

3.  **Update Report Data**:
    - Update the corresponding site section in `src/data/reportData.ts`.
