---
description: Extract equipment and plant performance facts from daily production reports
---

# Extract Daily Performance Facts Workflow

This workflow extracts relevant equipment and plant performance facts from the daily production reports in the GDVault repository to create narrative context for the weekly report.

## Purpose

Extract key facts about equipment breakdowns, performance issues, recovery actions, and root causes from daily production reports to build comprehensive weekly narratives for each site.

## Prerequisites

- Daily production reports exist in: `C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\YYYY-MM\DD\`
- Week number and date range are known
- CSV data and HEAL pages have already been processed

## Workflow Steps

### 1. Identify Report Week Date Range

Determine the exact dates for the report week (typically Sunday to Saturday).

**Example:** Week 16 = Oct 13-19, 2025

### 2. Locate Daily Reports for Each Site

For each site (Gloria, Nchwaning 2, Nchwaning 3, Shafts & Winders), locate daily reports:

```
C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\2025-10\13\2025-10-13 – [Site Name] Daily Report.md
...
```

### 3. Extract Performance Facts for Each Site

For each site, read all 7 daily reports and extract:

#### Equipment Performance Facts:
- **Persistent failures**: Equipment down for multiple consecutive days (3+ days)
- **Critical breakdowns**: Equipment affecting production targets
- **Root causes**: Specific failure modes (e.g., "check valve failure → water/oil mixing")
- **Recovery actions**: Repairs completed, parts installed.

### 4. Update Report Data

Update `src/data/reportData.ts` with the extracted narratives, specifically in the `keyBreakdowns` or `serviceCompliance` details sections.
