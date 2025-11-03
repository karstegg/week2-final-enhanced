# Session Learnings - Week 18 Updates
**Date**: November 3, 2025
**Duration**: ~2 hours
**Focus**: Title slide image updates, HEAL updates, BEV data alignment, Weekly executive summary workflow

---

## Session Summary

This session focused on:
1. Adding Winder image to title slide
2. Updating HEAL slide with production insights from daily reports
3. Aligning BEV breakdowns with Epiroc weekly report
4. Creating weekly executive summary from daily production reports
5. Establishing workflow for future weekly summaries

---

## Key Accomplishments

### 1. Title Slide Image Update ✅
**Task**: Add Winder image to represent Shafts & Winders section on title slide

**Process**:
- Initial attempt: Headgear.png (too tall, overlapped with ST14 loader)
- Solution: Switched to Winder.png with proper sizing
- Iterations: Reduced size from 40% → 30% → 22% due to overlap
- Final: Switched back to 40% width when using Winder.png (better aspect ratio)

**Learning**: 
- Image aspect ratio matters significantly for layout
- Winder.png has better proportions than Headgear.png for this use case
- Always test image sizing with actual content before finalizing
- Use `w-[40%]` for horizontal equipment, `w-[22-30%]` for vertical structures

**Code Changes**:
```typescript
// reportData.ts - cover.images
{ src: '/images/Winder.png', alt: 'Winder - Shafts & Winders', 
  className: 'absolute top-[70%] -translate-y-1/2 right-[5%] w-[40%] ...' }
```

**Outcome**: Title slide now represents all operational areas (UG mines + Shafts & Winders)

---

### 2. HEAL Slide Updates from Daily Production Reports ✅
**Task**: Add critical issues and safety incidents from daily production analysis

**Updates Made**:

**Lowlights**:
- **Gloria**: "DT0153 belly plate damage; Production 30% below target; RT at 76%"
- **N2**: "Vent door damaged Strata proxmod; Compressor failure; DT availability 77%"
- **N3**: (Kept existing BEV and belt issues)

**Emerging Issues**:
- **N2**: "Barlows support required" (new)
- **N3**: "EMI on BEV" (new)

**Priorities**:
- **N3**: "EMI test report actions" (added as first priority)
- **All Sites**: "CAS L9 implementation for all support equipment" (kept)

**Learning**:
- Daily production reports provide rich context for HEAL updates
- Production shortfalls (30% below target) are critical lowlights
- Infrastructure failures (compressor, vent door) belong in lowlights
- Safety incidents must be documented even if property damage only
- Keep HEAL items concise but specific (include unit IDs, percentages)

**Outcome**: HEAL slide now reflects actual Week 18 operational challenges

---

### 3. Safety Status Updates on Performance Slides ✅
**Task**: Add safety incidents to site performance overview slides

**Updates Made**:
- **Gloria**: Changed from "Good" to "Incident" - "DT0153 belly plate damage (property damage)"
- **N2**: Changed from "Good" to "Incident" - "Vent door damaged Strata proxmod (property damage)"
- **N3**: Remained "Good" (zero incidents for week)

**Learning**:
- Safety status is binary: "Good" or "Incident" (no partial credit)
- Property damage counts as incident (not just injuries)
- Safety incidents should appear on both HEAL slide and performance slide
- Specificity matters: Include unit ID and damage type

**Code Changes**:
```typescript
// reportData.ts - sites
gloria: {
  safety: { status: 'Incident', details: 'DT0153 belly plate damage (property damage)' }
}
n2: {
  safety: { status: 'Incident', details: 'Vent door damaged Strata proxmod (property damage)' }
}
```

**Outcome**: Performance slides accurately reflect safety performance

---

### 4. BEV Data Alignment with Epiroc Report ✅
**Task**: Review and align BEV breakdowns with Epiroc weekly BEV MD report

**Issues Found**:
- DT BEV breakdowns referenced incorrect issues (traction motor temp, oil leak)
- FL BEV breakdowns included FL0098 (not in Epiroc daily exceptions)
- Battery themes lacked detail on cable delivery and DCDC timing

**Corrections Made**:

**DT BEV Breakdowns**:
- **Before**: "Rear traction motor temp sensor (DT0162, 36.9 hrs); Oil leak (DT0150, 37.2 hrs)"
- **After**: "Battery connection issues (DT0147, 9.6 hrs); Brake system/regenerative braking (DT0162, 8.9 hrs)"
- **Top machines**: DT0146 (battery cut-off, 15.1 hrs); DT0150 (junction block valve, 37.2 hrs); DT0162 (brake/regen braking, 8.9 hrs)

**FL BEV Breakdowns**:
- **Before**: "Flat battery charging (FL0098, 40.5 hrs)"
- **After**: "Half arrows boilermaker (FL0113, 51.8 hrs; FL0112, 3.8 hrs); Strata faults (FL0107, 4.9 hrs)"

**Battery Themes**:
- Added: "new 300A cables received" (delivery status)
- Changed: "DCDC campaign to start" → "DCDC campaign to kick off once technicians onboarded" (timing clarity)
- Added: "spare parts at BR" for VPY00088 (location detail)

**Learning**:
- **Epiroc report is ground truth for BEV data** (similar to trend charts for availability)
- Daily exceptions in Epiroc report provide accurate breakdown hours
- Battery themes should include delivery status and timing details
- Cross-reference all BEV data with Epiroc report before finalizing
- Regenerative braking issues are critical (operator set to 0%)

**Data Source Priority for BEV**:
1. **Epiroc weekly report** (primary for breakdowns, battery themes)
2. **N3 BEV CSVs** (secondary for availability percentages)
3. **Daily production reports** (tertiary for operational context)

**Outcome**: BEV slide now accurately reflects Week 18 BEV performance per Epiroc

---

### 5. Weekly Executive Summary Creation ✅
**Task**: Create executive summary from daily production reports for Week 18

**Process**:
1. Read 15 daily reports (5 days × 3 sites, some days missing)
2. Aggregate production data (ROM, Decline, Product, Loads)
3. Calculate equipment availability averages
4. Identify critical issues and themes
5. Perform cross-site analysis
6. Generate structured markdown report

**Key Findings from Week 18**:

**Production Performance**:
- Gloria: -29.4% below target (best of three, but still significant)
- N2: -39.1% below target (worst)
- N3: -35.9% below target

**Common Critical Issue**: DT fleet reliability (76-80% avg across all sites)

**Site-Specific Issues**:
- **Gloria**: Blast planning failure (Oct 28: 4 vs 11 faces = 36% completion)
- **N2**: Compressor breakdown (cascaded to 33% product performance)
- **N3**: DZ11 support equipment down all week (0% availability)

**Safety Performance**:
- Gloria: 1 incident (DT0153 belly plate)
- N2: 1 incident (vent door failure)
- N3: 0 incidents (best safety record)

**Equipment Benchmarks**:
- **Best performers**: SR (95-96%), HD (89-93%), RT (76-93%)
- **Worst performers**: DT (76-80%), Support equipment (DZ11 at 0%)

**Learning**:
- Daily production reports contain rich operational detail not in CSVs
- Production shortfalls have specific root causes (blast failure, compressor, equipment)
- Cross-site comparison reveals systemic issues (DT fleet across all sites)
- Executive summary provides context for HEAL and performance slide updates
- Missing daily reports (2/7 days for some sites) require documentation

**Outcome**: Comprehensive executive summary document created with actionable insights

---

### 6. Workflow Creation for Weekly Summaries ✅
**Task**: Create reusable workflow for generating weekly executive summaries

**Workflow Components**:
1. **9-step process**: From data identification to archiving
2. **Data extraction rules**: Production, equipment, safety, breakdowns
3. **Aggregation rules**: Weekly totals, averages, variance calculations
4. **Reporting rules**: Conciseness, specificity, actionability
5. **Cross-site rules**: Common issues, benchmarking, coordination
6. **Troubleshooting guide**: Missing reports, inconsistent data, overflow
7. **Example execution**: Week 18 walkthrough

**Learning**:
- Structured workflow ensures consistency across weeks
- Rules prevent common errors (wrong variance formula, missing unit IDs)
- Troubleshooting section addresses real issues encountered
- Example execution provides template for future weeks
- Automation opportunities identified for future enhancement

**Outcome**: Repeatable process for weekly executive summary generation

---

## Technical Learnings

### 1. Font Size Management
**Issue**: BEV slide "Key BEV & Battery Themes" section had text overflow

**Solution**: Reduced font size from `text-sm` to `text-xs` (1 point smaller)

**Learning**:
- Tailwind CSS text sizes: `text-xs` < `text-sm` < `text-base` < `text-lg`
- Font size reduction is often better than content reduction for dense data
- Always test font changes with actual content (not placeholder text)
- BEV slide has dense content requiring smaller fonts

**Code Change**:
```tsx
// BevPerformanceSlide.tsx
<div className="flex-grow overflow-hidden pr-2 text-xs mt-3">
  <h3 className="text-xl font-bold mb-1 text-center">Key BEV & Battery Themes</h3>
  ...
</div>
```

---

### 2. MCP Filesystem Tool Usage
**Success**: Used MCP filesystem tool to read 15+ daily production reports

**Commands Used**:
- `mcp1_read_file`: Read individual daily reports
- `mcp1_write_file`: Create executive summary document
- `mcp1_list_directory`: Explore folder structure

**Learning**:
- MCP tools work well for reading markdown reports from Google Drive
- Batch reading multiple files is efficient (parallel tool calls)
- Some files may be missing (weekends) - handle gracefully
- File paths must use exact Google Drive sync path

**Best Practice**: Read all files first, then analyze (don't alternate reading/analysis)

---

### 3. Data Source Hierarchy
**Established Priority**:

**For Equipment Availability**:
1. **Trend chart images** (ground truth)
2. **Daily production reports** (operational context)
3. **CSVs** (backup/validation)

**For BEV Data**:
1. **Epiroc weekly report** (ground truth for breakdowns)
2. **N3 BEV CSVs** (availability percentages)
3. **Daily production reports** (operational context)

**For HEAL Data**:
1. **Daily production reports** (critical issues, themes)
2. **HEAL PowerPoints/text files** (structured HEAL data)
3. **Epiroc report** (BEV-specific HEAL items)

**Learning**:
- Always establish data source hierarchy before extraction
- Ground truth sources prevent rework (like Week 18 trend chart issue)
- Multiple sources provide validation and context
- Document which source was used for each data point

---

## Process Improvements

### 1. Daily Production Report Integration
**New Process**: Use daily production reports to supplement weekly engineering report

**Benefits**:
- Provides operational context for availability numbers
- Identifies specific root causes (blast failure, compressor breakdown)
- Captures safety incidents with detail
- Reveals day-by-day performance trends
- Highlights shift-specific issues (day shift vs night shift)

**Implementation**:
- Create weekly executive summary from daily reports
- Extract critical issues for HEAL slide
- Add safety incidents to performance slides
- Use production variance data for lowlights

**Recommendation**: Make daily production report review a standard step in /weekly-report-update workflow

---

### 2. BEV Data Validation Process
**New Rule**: Always cross-check BEV data with Epiroc weekly report before finalizing

**Validation Steps**:
1. Read Epiroc weekly BEV report
2. Extract daily exceptions (equipment breakdowns with hours)
3. Compare with BEV CSVs (availability percentages)
4. Update reportData.ts BEV section with Epiroc data
5. Verify battery themes include delivery status and timing

**Outcome**: Prevents BEV data misalignment (like initial Week 18 issue)

---

### 3. Image Sizing Guidelines
**New Guidelines for Title Slide Images**:

**Horizontal Equipment** (trucks, loaders):
- Width: `w-[40%]`
- Positioning: `top-[35%]` or `top-[70%]`

**Vertical Structures** (headgear, winders):
- Width: `w-[22-30%]` (depends on aspect ratio)
- Positioning: `top-[60-70%]` (avoid overlap with top row)

**Testing Process**:
1. Add image at 40% width
2. Capture screenshot
3. Check for overlaps
4. Reduce width by 10% if overlap exists
5. Adjust vertical position if needed
6. Re-capture and verify

**Outcome**: Systematic approach to image sizing prevents trial-and-error

---

## Challenges Encountered

### 1. Missing Daily Reports
**Issue**: Some days (Oct 26, Oct 31) had missing reports for N2 and N3

**Impact**: Weekly aggregations based on 5/7 days instead of 7/7 days

**Solution**:
- Document missing days in executive summary
- Calculate averages using actual days (5 instead of 7)
- Note data coverage: "Data Coverage: 5/7 days"

**Learning**: Always document data completeness; adjust calculations accordingly

---

### 2. PowerShell vs Node.js Script Execution
**Issue**: Inline Node.js scripts failed in PowerShell due to syntax conflicts

**Solution**: Create separate .js file, then execute with `node filename.js`

**Learning**:
- PowerShell interprets `()`, `<`, `>` as operators
- Complex scripts should be in separate files
- Use existing `capture-slides.js` script when possible

---

### 3. ES Module vs CommonJS
**Issue**: Created capture script used `require()` but project uses ES modules

**Solution**: Use existing `capture-slides.js` which is already configured correctly

**Learning**:
- Check package.json for `"type": "module"` before creating scripts
- Use `.cjs` extension for CommonJS scripts in ES module projects
- Leverage existing scripts when possible

---

## Recommendations for Future Sessions

### Immediate Actions

1. **Update /weekly-report-update workflow**:
   - Add step: "Review daily production reports for critical issues"
   - Add step: "Cross-check BEV data with Epiroc weekly report"
   - Add step: "Create weekly executive summary"

2. **Create pre-update checklist**:
   - [ ] Trend charts available (3 images)
   - [ ] All CSVs present (availability, compliance, BEV delays)
   - [ ] Epiroc BEV weekly report available
   - [ ] Daily production reports available (7 days × 3-4 sites)
   - [ ] HEAL data provided (text or image)
   - [ ] Week number and date range confirmed

3. **Document data source hierarchy**:
   - Create reference guide for which source to use for each data type
   - Include in /onboard-assistant workflow

### Process Improvements

1. **Automate weekly executive summary**:
   - Create Node.js script to read daily reports
   - Parse production metrics, equipment availability, breakdowns
   - Generate markdown template with aggregated data
   - Reduce manual effort from 2 hours to 30 minutes

2. **Establish BEV data validation step**:
   - Make Epiroc report review mandatory before BEV slide finalization
   - Create checklist: Daily exceptions match? Battery themes complete? Timing details included?

3. **Create image sizing guide**:
   - Document aspect ratio guidelines for title slide images
   - Include examples: Winder (good), Headgear (too tall)
   - Add to /onboard-assistant workflow

### Monitoring

1. **Track daily report availability**:
   - Log which days have missing reports
   - Identify patterns (weekends, holidays)
   - Request consistent daily reporting

2. **Monitor HEAL item count**:
   - Current: 3-4 items per quadrant (safe)
   - Alert if approaching 5+ items (overflow risk)
   - Prioritize most critical items

3. **Track BEV data discrepancies**:
   - Log differences between Epiroc report and CSVs
   - Identify data quality issues
   - Improve data collection process

---

## Session Metrics

- **Duration**: ~2 hours
- **Data Sources**: 15 daily production reports, 1 Epiroc BEV report, 3 trend charts (from previous session)
- **Files Modified**: 3 (reportData.ts, BevPerformanceSlide.tsx, Weekly_Executive_Summary)
- **Workflows Created**: 1 (create-weekly-executive-summary.md)
- **Slides Verified**: 11/11 ✅
- **Issues Encountered**: 3 (image sizing, missing reports, BEV data alignment)
- **Rework Required**: 1 (BEV breakdowns realignment)

---

## Key Takeaways

### 1. Daily Production Reports Are Valuable
Daily production reports provide operational context that CSVs and trend charts cannot. They reveal:
- Specific root causes (blast failure, compressor breakdown)
- Day-by-day performance trends
- Shift-specific issues
- Safety incidents with detail
- Infrastructure failures

**Recommendation**: Integrate daily production report review into standard weekly update process.

### 2. Data Source Hierarchy Prevents Rework
Establishing clear data source priority (trend charts for availability, Epiroc for BEV) prevents misalignment and rework.

**Recommendation**: Document data source hierarchy and enforce during data extraction.

### 3. Weekly Executive Summary Adds Value
The executive summary bridges daily operations and weekly engineering report, providing:
- Context for HEAL updates
- Justification for lowlights/highlights
- Cross-site insights
- Actionable recommendations

**Recommendation**: Make weekly executive summary a standard deliverable.

### 4. Automation Opportunities Exist
Several manual steps could be automated:
- Daily report data extraction (JSON parsing)
- Weekly aggregation calculations
- Executive summary template generation
- BEV data validation

**Recommendation**: Prioritize automation of data extraction and aggregation.

### 5. Consistency Through Workflows
Structured workflows ensure:
- Repeatable processes
- Consistent quality
- Reduced errors
- Knowledge transfer

**Recommendation**: Continue creating workflows for common tasks.

---

## Next Steps

1. ✅ Title slide updated with Winder image
2. ✅ HEAL slide updated with Week 18 critical issues
3. ✅ BEV data aligned with Epiroc report
4. ✅ Weekly executive summary created
5. ✅ Workflow documented for future weeks
6. ⏳ **Next**: Commit all changes to week-18 branch
7. ⏳ **Next**: Generate PDF for Week 18 report
8. ⏳ **Next**: Merge week-18 branch to main
9. ⏳ **Future**: Automate weekly executive summary generation
10. ⏳ **Future**: Create Node.js script for daily report parsing

---

## Additional Learnings from Final Validation (9:10-9:25 PM)

### 7. HEAL Page Validation Against Trend Charts is Critical ✅
**Issue**: During final sign-off, discovered HEAL page percentages didn't match trend chart values:
- Gloria RT: HEAL said 76%, trend chart showed 80%
- N2 DT: HEAL said 77%, trend chart showed 80%
- N3 HD, RT, SR: HEAL said 92.6%, 94.2%, 91.8%, trend charts showed 96%, 97%, 97%

**Root Cause**: HEAL percentages were extracted from different data sources (CSVs, daily reports) instead of trend charts.

**Learning**: 
- **Trend charts are ground truth for ALL availability percentages**, including HEAL page
- HEAL validation must be a mandatory step AFTER trend chart extraction
- N3 trend charts show combined Diesel+BEV for DT and FL (not separate)

**Action Taken**:
- Updated Gloria RT: 76% → 80%
- Updated N2 DT: 77% → 80%
- Updated N3 HD, RT, SR: 92.6%, 94.2%, 91.8% → 96%, 97%, 97%
- Kept N3 DT-Diesel 85%, FL-Diesel 74% (combined with BEV on trend chart)

**Recommendation**: Add HEAL validation step to /weekly-report-update workflow:
```
After trend chart extraction:
1. Extract trend chart percentages
2. Update site performance slides
3. Validate HEAL page percentages match trend charts
4. Update HEAL if discrepancies found
```

---

### 8. HEAL Highlights Must Match Performance Criteria ✅
**Issue**: N2 FL was listed as highlight ("FL availability above 85%") but actual value was 81% (below target).

**Root Cause**: Highlight was added based on assumption without verifying actual percentage.

**Learning**:
- Highlights should only include equipment **above** target (≥85%)
- Always verify percentages before adding to highlights
- Below-target equipment should be in lowlights or omitted

**Action Taken**: Removed N2 FL from highlights (81% is below 85% target)

**Rule**: 
- **Highlights**: Equipment ≥85% AND noteworthy achievement
- **Lowlights**: Equipment <85% OR critical issues
- **Omit**: Equipment near target (83-87%) with no special context

---

### 9. Key Breakdowns Should Explain Below-Target Performance ✅
**Issue**: N2 FL was at 81% (below target) but had no breakdowns listed on performance slide.

**Root Cause**: Only DT breakdowns were added; FL breakdowns were overlooked.

**Learning**:
- **Any equipment below target should have breakdowns listed** to explain the shortfall
- Breakdowns provide context for availability percentages
- Missing breakdowns leave questions unanswered

**Action Taken**: Added FL breakdowns to N2 performance slide:
- FL106 upbox
- FL102 seat
- FL87 powerless
- FL66 seat

**Rule**: 
- If equipment <85%, add key breakdowns to performance slide
- If equipment ≥85%, breakdowns optional (only if noteworthy)
- Breakdowns should include unit IDs and issue descriptions

---

### 10. Final Validation Checklist Prevents Last-Minute Issues ✅
**Success**: Final validation caught 3 critical issues before sign-off:
1. HEAL percentages misaligned with trend charts
2. Incorrect highlight (N2 FL)
3. Missing breakdowns (N2 FL)

**Learning**:
- Always perform final validation before sign-off
- Validation should be systematic, not ad-hoc
- Catching issues early prevents rework after PDF generation

**Recommended Final Validation Checklist**:
```
Before PDF generation:
[ ] All HEAL percentages match trend charts
[ ] All highlights are ≥85% (or special achievements)
[ ] All lowlights are <85% (or critical issues)
[ ] All below-target equipment has breakdowns listed
[ ] Safety incidents on both HEAL and performance slides
[ ] BEV data aligned with Epiroc report
[ ] No text overflow on any slide
[ ] All 11 slides captured and reviewed
```

---

## Updated Session Metrics

- **Duration**: ~2.5 hours (including final validation)
- **Data Sources**: 15 daily production reports, 1 Epiroc BEV report, 3 trend charts
- **Files Modified**: 9 files
- **Workflows Created/Updated**: 2
- **Memories Created**: 3
- **Slides Verified**: 11/11 ✅
- **Issues Encountered**: 7 (all resolved)
- **Rework Required**: 2 (BEV breakdowns, HEAL validation)
- **Final Validation Issues**: 3 (HEAL percentages, incorrect highlight, missing breakdowns)

---

## Key Takeaways (Updated)

### 1. Data Source Hierarchy Must Be Enforced
Trend charts → Epiroc report → Daily reports → CSVs. Always validate against ground truth.

### 2. HEAL Validation is Mandatory
HEAL percentages must match trend charts. Add validation step to workflow.

### 3. Highlights Must Be Accurate
Only include equipment ≥85% or special achievements. Verify before adding.

### 4. Breakdowns Explain Performance
Any equipment <85% should have breakdowns listed on performance slide.

### 5. Final Validation Prevents Rework
Systematic final validation checklist catches issues before PDF generation.

### 6. Weekly Executive Summary Adds Value
Daily production reports provide operational context that CSVs cannot.

### 7. Automation Opportunities Exist
Data extraction, aggregation, and validation could be automated.

### 8. Consistency Through Workflows
Structured workflows and memories ensure repeatable, high-quality processes.

---

**Session Completed**: November 3, 2025, 9:25 PM
**Status**: ✅ All objectives achieved, final validation complete
**Ready for**: PDF generation and branch merge
