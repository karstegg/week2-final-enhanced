# Week 14 Update Session - Key Learnings & Best Practices

**Date:** 6 October 2025  
**Session Focus:** Week 14 report update (29 Sept - 4 Oct 2025)  
**Status:** Critical learnings for future sessions

---

## 🎯 Major Improvements Implemented

### 1. **Equipment Breakdown Summary Reports (NEW)**
**File Created:** `Equipment_Breakdown_Summary_Week_29Sep-4Oct_2025.md`

**Key Learning:**
- Creating a **supplementary breakdown summary document** before updating slides provides invaluable context
- This document should analyze:
  - **Persistent issues** (equipment down for multiple consecutive days)
  - **Systematic failures** (multiple units affected simultaneously)
  - **Availability trends** (day-by-day progression)
  - **Root cause categories** (mechanical, electrical, telemetry, safety)

**Benefits:**
- Enables more accurate and detailed Key Breakdowns sections
- Identifies patterns not visible in raw CSV data
- Provides duration context (e.g., "6 days unresolved")
- Highlights systematic issues requiring investigation

**Future Action:**
- **ALWAYS create this summary document first** before updating reportData.ts
- Use it to inform both Key Breakdowns AND Week Summary headlines

---

### 2. **Week Summary Headlines (NEW STANDARD)**
**Implementation:** All site performance slides (Gloria, N2, N3) now include executive-level summary banners

**Key Learning:**
- Executive summaries should be **data-driven**, not generic
- Must include:
  - Specific equipment IDs (DT128, FL0101, etc.)
  - Duration indicators (6 days, 4+ days)
  - Severity markers (safety critical, unresolved)
  - Systematic issue identification (Strata failures across 4 units)

**Format:**
```typescript
trendChart: {
  src: '/images/Week14/...',
  comment: 'Week Summary: [120 char executive headline]',
}
```

**Future Action:**
- Generate headlines AFTER creating breakdown summary document
- Use breakdown summary to identify top 1-2 critical issues per site
- Keep ≤120 characters but prioritize critical information

---

### 3. **BEV Battery Themes - Mandatory Epiroc PDF Extraction**
**Critical Rule Established:** Battery themes MUST come from Epiroc PDF, NOT synthesized from CSV data

**Key Learning:**
- CSV delay data shows **symptoms** (e.g., "battery not connecting")
- Epiroc PDF shows **infrastructure issues** (e.g., "Charger 4 Module 1 faulty")
- Infrastructure issues are what operations needs for planning

**Extraction Command:**
```powershell
echo "Extract the 'Key Battery & Charger Themes' or 'Battery Status' section from this PDF. Provide a concise bullet list (3-4 items max, each ≤120 chars) of the key battery and charger issues for the week. @'weekly-report-generator/data-extract/BRMO weekly report LIVE...pdf'" | npx @google/gemini-cli
```

**Future Action:**
- NEVER skip Epiroc PDF extraction for BEV battery themes
- Document extraction in markdown file for audit trail
- Include specific technical IDs (C4-M1, VPY-00088, Post 3, etc.)

---

### 4. **Correct Screenshot Directory**
**Issue Discovered:** Was reading from wrong screenshot folder

**Key Learning:**
- `capture-slides.js` runs from **project root**
- Screenshots save to: `screenshots/review/` (relative to project root)
- NOT: `weekly-report-generator/screenshots/review/`

**Correct Path:**
```
c:\Users\10064957\Documents\OneDrive\AI Projects\Weekly Report Generator Cloned from Github\screenshots\review\slide-X.png
```

**Future Action:**
- Always verify screenshot path before reviewing slides
- Remember: capture script runs from root, dev server runs from weekly-report-generator/

---

### 5. **Detailed Breakdown Data with Duration Context**
**Enhancement:** Added duration and persistence indicators to Key Breakdowns

**Key Learning:**
- Generic breakdowns: "DT128 - Input shaft bearing" ❌
- Enhanced breakdowns: "DT128 - Input shaft bearing (6 days unresolved)" ✅

**Benefits:**
- Communicates urgency and priority
- Identifies chronic vs. one-time issues
- Helps operations plan interventions

**Future Action:**
- Always include duration for issues lasting >2 days
- Mark unresolved issues explicitly
- Identify equipment requiring OEM/specialist intervention

---

### 6. **Systematic Issue Identification**
**Discovery:** Strata telemetry failures affected 6 units simultaneously on Oct 2-3

**Key Learning:**
- Look for **patterns across multiple units** on same day
- Systematic issues suggest infrastructure/network problems, not individual equipment failures
- These require different response (investigation) vs. individual repairs

**Indicators of Systematic Issues:**
- Multiple units with same fault type on same day
- Failures across different sites (N2 and N3)
- Communication/telemetry related issues

**Future Action:**
- When extracting breakdown data, look for temporal clustering
- Flag systematic issues in both Key Breakdowns AND Week Summary
- Use language like "systematic", "across X units", "requiring investigation"

---

### 7. **Data Source Hierarchy Clarity**
**Established Priority:**

1. **Availability & Numeric Data:** CSV files (primary source of truth)
2. **BEV Battery Themes:** Epiroc PDF (mandatory)
3. **HEAL Content:** Text files or images (narrative data)
4. **Trend Charts:** PNG images (visual reference)

**Key Learning:**
- Different data types have different authoritative sources
- Never mix sources for the same data type
- Document which source was used for audit trail

---

### 8. **Workflow Documentation Discipline**
**Practice Established:** Update workflows, PRD, and protocol documents in real-time

**Key Learning:**
- Workflows are living documents
- When a new requirement emerges (like Week Summary headlines), update:
  1. The workflow file (process)
  2. The PRD (product requirements)
  3. A protocol document (detailed how-to)
  4. Memory/learnings file (context)

**Future Action:**
- Don't defer documentation to "later"
- Update all related documents in same session
- Create protocol documents for complex new requirements

---

### 9. **Executive vs. Technical Detail Balance**
**Insight:** Different slide sections serve different audiences

**Key Learning:**
- **Week Summary headline:** Executive-level (what and why)
- **Key Breakdowns list:** Technical-level (specific equipment and issues)
- **Battery Themes:** Infrastructure-level (chargers, cables, battery packs)

**Balance Guidelines:**
- Headlines: High-level, prioritized, ≤120 chars
- Breakdowns: Detailed, technical, with unit IDs
- Themes: Actionable, specific, with component IDs

---

### 10. **Gemini CLI for PDF Extraction**
**Tool Mastery:** Gemini CLI can process PDFs directly

**Command Pattern:**
```powershell
echo "Extract [specific section]. Format: [requirements]. @'path/to/file.pdf'" | npx @google/gemini-cli
```

**Key Learning:**
- Gemini CLI is now primary tool for all extractions
- Can handle PDFs, images, and multiple files
- Provides structured output when requested
- Faster than manual PDF reading

**Future Action:**
- Use Gemini CLI for all Epiroc PDF extractions
- Request specific format (bullet list, JSON, etc.)
- Save extraction output as markdown for documentation

---

## 📊 Process Improvements

### Before This Session:
1. Extract CSV data → Update reportData.ts
2. Review slides
3. Done

### After This Session:
1. **Create breakdown summary document** (analyze patterns, duration, systematic issues)
2. Extract CSV data → Update reportData.ts with enhanced details
3. **Extract BEV themes from Epiroc PDF** (mandatory)
4. **Generate Week Summary headlines** (using breakdown summary)
5. Review slides from **correct screenshot directory**
6. **Document extraction sources** (audit trail)
7. Done

---

## 🎓 Meta-Learnings (Process)

### 1. **User Feedback is Gold**
- User caught missing PowerBI issue → removed it
- User requested battery theme source → discovered Epiroc PDF requirement
- User asked for headlines → created new standard feature

**Takeaway:** Always confirm with user before finalizing

### 2. **Iterative Refinement Works**
- Started with basic data extraction
- Added duration context
- Added systematic issue identification
- Added executive summaries
- Each iteration improved quality

**Takeaway:** Don't aim for perfection in first pass; iterate based on needs

### 3. **Documentation Prevents Rework**
- Creating protocol documents ensures consistency
- Future sessions can reference these documents
- Reduces cognitive load and decision fatigue

**Takeaway:** Invest time in documentation during the session, not after

---

## 🚀 Recommended Session Workflow (Future)

### Pre-Update Preparation
1. Create breakdown summary document from raw data
2. Identify persistent issues, systematic failures, patterns
3. Note critical equipment IDs and durations

### Data Extraction Phase
1. Extract numeric data from CSVs
2. Extract BEV themes from Epiroc PDF (save as markdown)
3. Extract HEAL content from text/images
4. Cross-reference with breakdown summary

### Data Application Phase
1. Update reportData.ts with enhanced details (include durations)
2. Generate Week Summary headlines (≤120 chars, data-driven)
3. Verify all three sites have headlines

### Verification Phase
1. Start dev server (from weekly-report-generator/)
2. Run capture script (from project root)
3. Review screenshots from **correct directory**
4. Verify data rendering, especially new elements

### Finalization Phase
1. User review and feedback
2. Make adjustments
3. Document any new learnings
4. Commit changes

---

## 📝 Quick Reference Checklist

**For Every Weekly Update:**
- [ ] Create breakdown summary document first
- [ ] Extract BEV themes from Epiroc PDF (not CSV)
- [ ] Include duration context in Key Breakdowns (e.g., "6 days")
- [ ] Generate Week Summary headlines for all 3 sites
- [ ] Look for systematic issues (multiple units, same day)
- [ ] Verify screenshot directory path before review
- [ ] Document extraction sources for audit trail
- [ ] Update workflows if new requirements emerge

---

## 🔄 Continuous Improvement

This document should be updated after each weekly session with new learnings. The goal is to build institutional knowledge that makes each subsequent update faster and more accurate.

**Next Session Goals:**
1. Test the new workflow end-to-end
2. Measure time savings from breakdown summary document
3. Evaluate quality improvement from Week Summary headlines
4. Identify any remaining pain points

---

**Session Duration:** ~2 hours  
**Slides Updated:** 11 (all slides)  
**New Standards Created:** 2 (Week Summary headlines, BEV theme extraction)  
**Protocol Documents Created:** 3  
**Workflows Updated:** 2
