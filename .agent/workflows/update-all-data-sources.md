---
description: Master workflow to update all data sources for the weekly report.
---

# Update All Data Sources Workflow

## Purpose
To orchestrate the update of all individual data components: Standard UG Sites, N3, Shafts & Winders, and BEV.

## Steps

1.  **Update Standard UG Sites**:
    - // turbo
    - `@[.agent/workflows/update-std-ug-mine-site.md]`

2.  **Update N3 UG Site**:
    - // turbo
    - `@[.agent/workflows/update-n3-ug-mine-site.md]`

3.  **Update Shafts & Winders**:
    - // turbo
    - `@[.agent/workflows/update-shafts-winders-data.md]`

4.  **Extract Daily Performance Facts**:
    - // turbo
    - `@[.agent/workflows/extract-daily-performance-facts.md]`
