# Data Source Hierarchy for Weekly Report

## Equipment Availability Data

**Priority Order:**
1. **Trend Chart Images** (Ground Truth)
   - Weekly average percentages from trend charts
   - Source of truth for final weekly numbers
   - Example: `Gloria Weekly Availability Chart Week18.png`

2. **Daily Production Reports** (Operational Context)
   - Day-by-day availability percentages
   - Equipment breakdown details with unit IDs
   - Root cause analysis
   - Location: `C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\YYYY-MM\DD\`

3. **CSV Files** (Backup/Validation)
   - Daily availability data
   - Compliance percentages
   - Location: `weekly-report-generator/data-extract/`

**Rule**: Always validate CSV averages against trend chart final values before finalizing reportData.ts

---

## BEV Data

**Priority Order:**
1. **Epiroc Weekly BEV Report** (Ground Truth for Breakdowns)
   - Daily exceptions with equipment IDs and breakdown hours
   - Battery and charger status
   - Battery themes with delivery status and timing
   - Format: Markdown (.md)
   - Location: `weekly-report-generator/data-extract/Epiroc_BEV_Weekly_Report_Week[N].md`

2. **N3 BEV CSV Files** (Availability Percentages)
   - DT BEV and FL BEV availability percentages
   - Service compliance percentages
   - Location: `weekly-report-generator/data-extract/`

3. **Daily Production Reports** (Operational Context)
   - Day-by-day BEV performance
   - Operational issues and themes
   - Location: `C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\YYYY-MM\DD\`

**Rule**: Always cross-check BEV breakdowns with Epiroc report before finalizing. Verify daily exceptions match breakdown hours.

---

## HEAL Data

**Priority Order:**
1. **Daily Production Reports** (Critical Issues and Themes)
   - Safety incidents with details
   - Production shortfalls with root causes
   - Equipment failures with impact analysis
   - Infrastructure issues
   - Location: `C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\YYYY-MM\DD\`

2. **HEAL PowerPoints/Text Files** (Structured HEAL Data)
   - Highlights, lowlights, emerging issues, priorities
   - Site-specific HEAL sections
   - Format: PowerPoint or text files

3. **Epiroc Report** (BEV-Specific HEAL Items)
   - BEV critical issues
   - CAS L9 implementation status
   - Battery and charger themes

**Rule**: Extract critical issues from daily reports for lowlights/emerging issues. Keep items ≤120 characters.

---

## Production Data

**Priority Order:**
1. **Daily Production Reports** (Day-by-Day Detail)
   - ROM, Decline, Product tonnage
   - Load & Haul performance by shift
   - Blast performance
   - Location: `C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\YYYY-MM\DD\`

2. **CSV Files** (Weekly Aggregates)
   - Weekly totals and averages
   - Location: `weekly-report-generator/data-extract/`

**Rule**: Sum daily values for weekly totals. Calculate variance as (Actual - Target) / Target × 100%.

---

## Safety Data

**Priority Order:**
1. **Daily Production Reports** (Incident Details)
   - Safety status (Clear/Incident/Near-miss)
   - Incident descriptions with dates
   - Corrective actions
   - Property damage incidents
   - Location: `C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\YYYY-MM\DD\`

2. **Site-Specific Reports** (Additional Context)
   - Investigation reports
   - Safety meeting minutes

**Rule**: Safety status is binary (Incident or Clear). Property damage counts as incident.

---

## Validation Checklist

Before finalizing reportData.ts:

- [ ] Equipment availability matches trend chart values
- [ ] BEV breakdowns cross-checked with Epiroc report
- [ ] BEV battery themes include delivery status and timing
- [ ] HEAL items extracted from daily production reports
- [ ] Safety incidents documented on both HEAL and performance slides
- [ ] Production variance calculated correctly
- [ ] All unit IDs and percentages verified

---

**Last Updated**: Week 18 (Nov 3, 2025)
**Maintained By**: Engineering Reporting Team
