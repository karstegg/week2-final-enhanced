# Week 16 Workflow Enhancement - Daily Performance Facts Extraction

**Date:** October 20, 2025  
**Type:** Workflow Addition  
**Impact:** Automated narrative generation from daily production reports

---

## Summary

Added a new workflow (`/extract-daily-performance-facts`) to automatically extract equipment and plant performance facts from daily production reports in GDVault, replacing the manual "Generate Week Summary Headlines" step in the main workflow.

---

## Changes Made

### 1. New Workflow Created

**File:** `.windsurf/workflows/extract-daily-performance-facts.md`

**Purpose:** Extract relevant equipment and plant performance facts from daily production reports to create narrative context for the weekly report.

**Key Features:**
- Analyzes 7 days of daily production reports per site
- Extracts persistent failures, root causes, recovery actions
- Builds structured narratives (Week Summary → Weekend Update → Recovery Plan → Current Status)
- Integrates with existing `reportData.ts` structure

### 2. Main Workflow Updated

**File:** `.windsurf/workflows/weekly-report-update.md`

**Change:** Phase 2, Step 3 - Replaced manual headline generation with automated extraction workflow

**Before:**
```
3. Generate Week Summary Headlines (MANDATORY):
   - Manually create executive-level summary headlines
   - Add to trendChart.comment field
```

**After:**
```
3. Extract Daily Performance Facts (NEW):
   - Invoke /extract-daily-performance-facts workflow
   - Primary Source: GDVault daily production reports
   - Automated narrative generation
```

---

## Key Principles Established

### Data Source Hierarchy

1. **Primary Source:** Daily production reports in `C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\data\YYYY-MM\DD\`
2. **Supplementary:** BEV weekly summaries and status reports
3. **Cross-reference:** CSV data for availability percentages

### Content Guidelines

**DO:**
- ✅ Extract specific equipment IDs (HD62, FL98, DT162)
- ✅ Include durations for persistent issues (7+ days, 14+ days)
- ✅ Document root causes (check valve failure, ECU, EMI)
- ✅ Show recovery actions and preventive measures
- ✅ Include weekend updates and Monday morning status
- ✅ Be concise (≤200 characters for comments)

**DON'T:**
- ❌ Include diesel vs BEV comparisons
- ❌ Verify discrepancies with engineers directly
- ❌ Make assumptions - use data as documented
- ❌ Use vague descriptions - be specific

### Narrative Structure

```
Week Summary: [Overall performance vs target]. [Primary fleet issues with specifics].
Weekend Update: [Saturday/Sunday status]. [Key changes from Friday].
Recovery Plan: [Actions taken]. [Specific repairs/installations]. [Preventive measures].
Current Status: [Monday morning readiness]. [Units operational/down].
```

---

## Example Application (Week 16)

### N3 Site Narrative

**Extracted from:** 7 daily reports (Oct 13-19) + Monday morning update (Oct 20)

**Generated Comment:**
```
Week Summary: Below target at 81%. HD fleet critical at 64% (water/oil mixing, ECU failures).
Weekend Update (Oct 19-20): SR improved to 86%, DT to 93%. HD remains critical at 66%.
Recovery Plan (Oct 20): Major HD issues resolved - HD62 check valve fixed with preventive 
shift inspections, HD56 ECU installed (Deutz setup Wed), HD52 back in operation, HD69 
commissioning in progress. FL fleet recovered - FL108/113 bucket repairs complete, FL91 
harness done, FL121 returned to production.
```

### BEV Fleet Narrative

**Extracted from:** BEV Weekly Summary + BEV Status Report (Oct 20 AM)

**Generated Comment:**
```
Week 16: DT 91%, FL 76%. Critical: DT162 traction motor 7+ days; FL98 Strata 14+ days 
(EMI - loaders affect trucks >80m). FL98 still down for testing; FL107 & FL113 also 
affected. Mon AM: 85% (11/13). EMI expert on site this week.
```

---

## Integration with Existing Workflows

### Workflow Invocation Order

1. `/initialize-report` - Create branch
2. `/update-all-data-sources` - Extract CSV/image data
3. **`/extract-daily-performance-facts`** ← NEW
4. `/review-slides` - Capture screenshots
5. `/review-heal-matrices` - Validate HEAL slides

### Data Flow

```
Daily Production Reports (GDVault)
    ↓
extract-daily-performance-facts workflow
    ↓
Site narratives extracted
    ↓
reportData.ts updated (trendChart.comment fields)
    ↓
Components render blue ribbon comments
    ↓
Slide capture for verification
```

---

## Benefits

1. **Consistency:** Standardized narrative structure across all sites
2. **Efficiency:** Automated extraction vs manual headline writing
3. **Completeness:** Captures week-long context, not just snapshot
4. **Traceability:** All facts sourced from documented daily reports
5. **Executive Focus:** Concise, action-oriented narratives
6. **Root Cause Visibility:** Shows not just problems but causes and solutions

---

## Technical Implementation Notes

### Component Support

All relevant components now support `comment` prop for blue ribbon display:

- `TrendChartSlide.tsx` - Site weekly availability trends
- `SitePerformanceSlide.tsx` - Site performance overview
- `BevPerformanceSlide.tsx` - BEV fleet performance

### Layout Optimization

Blue ribbon styling standardized:
```typescript
<div className="mt-2 mr-28 bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
  <p className="text-sm text-blue-800 font-medium italic leading-relaxed">
    {data.comment}
  </p>
</div>
```

---

## Future Enhancements

### Potential Additions

1. **Automated Root Cause Categorization:** Group issues by type (mechanical, electrical, telematics)
2. **Trend Detection:** Identify improving/declining patterns automatically
3. **Alert Thresholds:** Flag equipment down >5 days for escalation
4. **Recovery Timeline Tracking:** Monitor if actions are completed on schedule
5. **Cross-Site Pattern Recognition:** Identify systematic issues affecting multiple sites

### Data Source Expansion

- Integration with WhatsApp MCP for real-time engineer updates
- Automated extraction from Epiroc PDF reports
- Link to maintenance system for parts availability status

---

## Lessons Learned (Week 16 Session)

### Data Verification
- Always prioritize weekly overview data over daily reports for metrics
- Cross-reference multiple sources (daily reports, weekly summaries, WhatsApp)
- Don't assume - verify discrepancies with source data

### Narrative Development
- Tell complete story: Week → Issues → Actions → Status → Outlook
- Include specific equipment IDs and durations
- Show proactive management, not just problems
- Root causes matter more than symptoms

### Visual Design
- Blue ribbons need proper spacing (mr-28, p-3)
- Text size matters for executive audience (text-sm with leading-relaxed)
- Verify with slide captures before finalizing

### WhatsApp MCP Integration
- Powerful for getting engineer explanations and root causes
- Use `mcp6_search_contacts`, `mcp6_list_messages`, `mcp6_get_last_interaction`
- Key contact: Sello Sease (27726353694@s.whatsapp.net) for N3

---

## Documentation References

- **New Workflow:** `.windsurf/workflows/extract-daily-performance-facts.md`
- **Updated Workflow:** `.windsurf/workflows/weekly-report-update.md`
- **Data Source:** `C:\Users\10064957\My Drive\GDVault\ProductionData\daily_production\`
- **Target File:** `weekly-report-generator/src/data/reportData.ts`

---

**Status:** ✅ Implemented and tested in Week 16 report  
**Next Review:** Week 17 report generation
