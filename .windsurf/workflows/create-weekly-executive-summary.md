---
description: Create weekly executive summary from daily production reports
---

# Create Weekly Executive Summary from Daily Production Reports

This workflow guides you through extracting data from daily production reports and creating a comprehensive weekly executive summary for integration into the weekly engineering report.

## Prerequisites

- Daily production reports available for the target week (7 days)
- Reports located in: `C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\YYYY-MM\DD\`
- Week number and date range confirmed
- Dev server running (if updating slides)

## Step 1: Identify Week and Data Sources

1. Confirm week number (e.g., Week 18)
2. Confirm date range (e.g., October 25-31, 2025)
3. Verify daily reports exist for all 7 days across all sites:
   - Gloria Daily Report.md
   - Nchwaning 2 Daily Report.md
   - Nchwaning 3 Daily Report.md
   - Shafts & Winders Daily Report.md (if applicable)

**Note**: Some days may be missing reports (weekends, etc.). Document which days are missing.

## Step 2: Read All Daily Reports

// turbo
For each site (Gloria, N2, N3), read all 7 daily reports using the MCP filesystem tool:

```
Read files from: C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\2025-10\25\
Read files from: C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\2025-10\26\
... (continue for all 7 days)
```

**Key data to extract from each daily report:**
- Production metrics: ROM, Decline, Product tonnage
- Load & Haul performance: Loads per shift
- Equipment availability: DT, FL, HD, RT, SR percentages
- Current breakdowns: Unit IDs and issues
- Safety status: Incidents, near-misses
- Infrastructure issues: Compressor, fire alarms, plant blockages

## Step 3: Aggregate Data by Site

For each site (Gloria, N2, N3), calculate:

### Production Aggregation
- **Weekly totals**: Sum ROM, Decline, Product for all 7 days
- **Weekly average**: Divide by 7 (or number of days with data)
- **Variance vs target**: (Actual - Target) / Target × 100%
- **Days below target**: List specific dates with variance

### Equipment Availability Aggregation
- **Weekly average**: Average daily availability for each equipment type (DT, FL, HD, RT, SR)
- **Trend analysis**: Identify improving/declining/stable trends
- **Persistent issues**: Equipment appearing in breakdowns >3 days
- **Flag below target**: Any equipment <85% avg availability

### Breakdown Analysis
- **List all unique breakdowns**: Equipment unit ID + issue description
- **Days affected**: Count how many days each breakdown was active
- **Recurring issues**: Same unit appearing multiple days
- **Categorize by type**: DT, FL, HD, RT, SR, Support Equipment

### Safety Analysis
- **Overall status**: Clear / Incident / Near-miss
- **Incident count**: Total incidents for week
- **Incident details**: Date, description, corrective actions
- **Patterns**: Any recurring safety themes

## Step 4: Identify Critical Issues and Themes

For each site, identify:

### Critical Issues (Add to Lowlights/Emerging Issues)
- Production shortfalls >20% below target
- Equipment availability <75% for any fleet
- Safety incidents (property damage, injuries)
- Infrastructure failures (compressor, fire alarms, etc.)
- Persistent equipment breakdowns (>3 days)

### Positive Performance (Add to Highlights)
- Production above target
- Equipment availability >90%
- Zero safety incidents
- Successful maintenance completions
- Operational improvements

### Equipment Reliability Trends
- Best performers: Equipment consistently >85%
- Worst performers: Equipment consistently <85%
- Root causes: Common failure modes across multiple units

## Step 5: Cross-Site Analysis

Compare performance across all three sites:

### Common Issues
- Equipment types failing across multiple sites (e.g., DT fleet)
- Infrastructure vulnerabilities (compressor, fire alarms)
- Support equipment gaps (DZ11, GD11, etc.)

### Performance Ranking
- Rank sites by production variance vs target
- Identify best and worst performing sites
- Analyze root causes for differences

### Equipment Benchmarks
- Compare equipment availability across sites
- Identify best practices from high-performing sites
- Flag systemic issues requiring cross-site coordination

## Step 6: Generate Executive Summary Document

Create markdown file: `Weekly_Executive_Summary_Week[N]_[Date_Range].md`

**Location**: `C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\YYYY-MM\`

**Structure**:

```markdown
# Weekly Executive Summary - Week [N]
## [Date Range]

## EXECUTIVE OVERVIEW
- Overall status table (all sites)
- Key insight (primary constraint)

## [SITE NAME] - PERFORMANCE INSIGHTS
### Production Summary
- ROM, Decline, Product, Loads vs target

### 📊 ITEMS TO ADD TO [SITE] PERFORMANCE SLIDE
#### Critical Issues (Add to Lowlights/Emerging Issues)
- List 3-5 critical issues with impact and action required

#### Positive Performance (Add to Highlights)
- List 2-3 positive achievements

#### Equipment Reliability Trends
- Below target: List equipment
- Above target: List equipment

## CROSS-SITE ANALYSIS
### Common Critical Issues
- DT fleet, infrastructure, support equipment

### Equipment Performance Benchmarks
- Best performers, worst performers

### Safety Performance
- Incidents by site

## RECOMMENDATIONS FOR WEEKLY REPORT
### HEAL Slide Updates
- Highlights to Add (3-5 items)
- Lowlights to Add (3-5 items)
- Emerging Issues to Add (3-5 items)
- Priorities to Add (3-5 items)

### Site-Specific Performance Slide Updates
- Gloria Slide - Add: [specific items]
- N2 Slide - Add: [specific items]
- N3 Slide - Add: [specific items]

## KEY METRICS SUMMARY
[Comparison table across sites]
```

## Step 7: Extract Items for Weekly Engineering Report

From the executive summary, extract specific items to add to:

### HEAL Slide (reportData.ts)
```typescript
heal: {
  highlights: [
    { site: 'Gloria', text: '[extracted from summary]' },
    { site: 'N2', text: '[extracted from summary]' },
    { site: 'N3', text: '[extracted from summary]' },
  ],
  lowlights: [
    { site: 'Gloria', text: '[extracted from summary]' },
    { site: 'N2', text: '[extracted from summary]' },
    { site: 'N3', text: '[extracted from summary]' },
  ],
  emergingIssues: [
    { site: 'Gloria', text: '[extracted from summary]' },
    { site: 'N2', text: '[extracted from summary]' },
    { site: 'N3', text: '[extracted from summary]' },
  ],
  priorities: [
    { site: 'Gloria', text: '[extracted from summary]' },
    { site: 'N2', text: '[extracted from summary]' },
    { site: 'N3', text: '[extracted from summary]' },
  ],
}
```

### Site Performance Slides (reportData.ts)
```typescript
sites: {
  gloria: {
    safety: { status: 'Incident', details: '[from summary]' },
    // Add other relevant fields
  },
  n2: {
    safety: { status: 'Incident', details: '[from summary]' },
    // Add other relevant fields
  },
  n3: {
    safety: { status: 'Good', details: '' },
    // Add other relevant fields
  },
}
```

## Step 8: Validate and Review

1. **Cross-check data**: Verify aggregated numbers match daily reports
2. **Review recommendations**: Ensure actionable and specific
3. **Check formatting**: Markdown renders correctly
4. **Verify completeness**: All sites covered, all critical issues identified

## Step 9: Archive and Document

1. Save executive summary in production data folder
2. Update tracking spreadsheet (if applicable)
3. Create memory/note of key learnings for next week

---

## Key Rules and Guidelines

### Data Extraction Rules

1. **Production Metrics**:
   - Always sum daily values for weekly totals
   - Calculate variance as: (Actual - Target) / Target × 100%
   - Flag any day >20% below target

2. **Equipment Availability**:
   - Average daily percentages for weekly average
   - Flag any equipment <85% average
   - Track equipment appearing in breakdowns >3 days

3. **Safety Status**:
   - Binary: Incident or Clear (no partial credit)
   - Document all incidents with date and description
   - Include property damage as incidents

4. **Breakdown Analysis**:
   - Include unit ID + issue description
   - Count days affected (not just occurrence count)
   - Categorize by equipment type

### Aggregation Rules

1. **Weekly Totals**: Sum all daily values (ROM, Decline, Product, Loads)
2. **Weekly Averages**: Divide by number of days with data (not always 7)
3. **Variance Calculation**: Always use (Actual - Target) / Target × 100%
4. **Trend Analysis**: Compare to previous weeks if available

### Reporting Rules

1. **Conciseness**: Keep HEAL items ≤120 characters
2. **Specificity**: Include unit IDs, percentages, and dates
3. **Actionability**: Every critical issue must have "Action Required"
4. **Balance**: Include both positive and negative performance

### Cross-Site Rules

1. **Common Issues**: Identify issues appearing at 2+ sites
2. **Root Cause Focus**: Look for systemic problems, not isolated incidents
3. **Benchmarking**: Compare equipment performance across sites
4. **Coordination**: Flag issues requiring cross-site action

---

## Automation Opportunities

### Future Enhancements
1. **Node.js Script**: Automate data extraction from JSON files
2. **Template Generation**: Auto-populate markdown template
3. **Statistical Analysis**: Calculate trends, correlations
4. **Integration**: Link to weekly engineering report generation

### Current Manual Steps
- Reading daily reports (MCP filesystem tool)
- Aggregating metrics (manual calculation)
- Identifying themes (manual analysis)
- Writing summary (manual composition)

---

## Troubleshooting

### Missing Daily Reports
- Document which days are missing
- Note in executive summary: "Data Coverage: 5/7 days"
- Adjust calculations accordingly (divide by actual days, not 7)

### Inconsistent Data
- Cross-check CSV vs daily report data
- Use trend charts as ground truth when available
- Document discrepancies in summary

### Overflow Issues
- Keep HEAL items concise (≤120 chars)
- Prioritize most critical issues
- Use abbreviations where appropriate

---

## Example Workflow Execution

**Week 18 (Oct 25-31, 2025)**:

1. ✅ Confirmed week number and date range
2. ✅ Read 5/7 daily reports for Gloria (Oct 26, 31 missing)
3. ✅ Read 5/7 daily reports for N2 (Oct 26, 31 missing)
4. ✅ Read 5/7 daily reports for N3 (Oct 26, 31 missing)
5. ✅ Aggregated production data (ROM -29.4% Gloria, -39.1% N2, -35.9% N3)
6. ✅ Aggregated equipment availability (DT 76-80% across sites)
7. ✅ Identified critical issues (DT fleet systemic failure, compressor breakdown, safety incidents)
8. ✅ Generated executive summary document
9. ✅ Extracted items for HEAL slide (4 highlights, 4 lowlights, 4 emerging issues, 5 priorities)
10. ✅ Updated reportData.ts with safety incidents
11. ✅ Validated data against daily reports

**Result**: Comprehensive executive summary ready for integration into weekly engineering report.

---

**Workflow Version**: 1.0
**Last Updated**: Week 18 (Nov 3, 2025)
**Maintained By**: Engineering Reporting Team
