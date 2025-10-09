# Site Performance Week Summary Headlines Protocol

**Status:** MANDATORY for all weekly updates  
**Last Updated:** 6 October 2025  
**Applies To:** Slides 6, 8, 10 (N3, N2, Gloria Performance Overview)

---

## Overview

Each site performance overview slide now includes a **"Week Summary" headline** that provides a concise, executive-level summary of the week's critical issues. This appears as a styled banner at the bottom of the slide content.

---

## Implementation

### Data Structure
**Location:** `weekly-report-generator/src/data/reportData.ts`

```typescript
sites: {
  gloria: {
    name: 'Gloria',
    trendChart: {
      src: '/images/Week14/Gloria Weekly Availability Chart - Week14.png',
      comment: 'Week Summary: [Your headline here]',  // ← Add here
    },
    // ... rest of site data
  }
}
```

### Visual Rendering
**Component:** `SitePerformanceSlide.tsx` (lines 105-109)

The headline renders as:
- **Blue accent border** (left side, 4px)
- **Light blue background** (`bg-blue-50`)
- **Italic text** (`italic`)
- **Small font** (`text-sm`)
- **Positioned** below Key Breakdowns section, above footer

---

## Writing Guidelines

### Length & Format
- **Maximum:** 120 characters
- **Prefix:** Always start with "Week Summary: "
- **Style:** Concise, executive-level, factual

### Content Requirements

✅ **DO Include:**
1. **Persistent failures** with duration (e.g., "6 days unresolved")
2. **Systematic issues** affecting multiple units (e.g., "Strata failures across 4 units")
3. **Severity indicators** (e.g., "safety critical", "Graben impact")
4. **Specific equipment IDs** for major issues (e.g., "DT128", "FL0101")
5. **Date references** for significant events (e.g., "Oct 2-3")

❌ **DO NOT Include:**
- Generic statements (e.g., "Some equipment issues")
- Availability percentages (already shown on slide)
- Positive news (focus on critical issues requiring attention)
- Redundant information from Key Breakdowns section

---

## Examples from Week 14

### Gloria (Slide 10)
```
"Week Summary: DT availability at 81% due to Nerospec transmission issues. Service compliance challenges on HD and RT fleets."
```
**Analysis:**
- ✅ Identifies root cause (Nerospec transmission)
- ✅ Mentions multiple fleet impacts (HD, RT)
- ✅ Concise at 119 chars

### N2 (Slide 8)
```
"Week Summary: Critical persistent failures on DT128 (6 days) and FL92 (6 days, Graben). Multiple Strata telemetry issues Oct 2-3."
```
**Analysis:**
- ✅ Highlights two critical unresolved issues with duration
- ✅ Mentions Graben operational impact
- ✅ References systematic Strata problem with date
- ✅ 130 chars (slightly over, but acceptable for critical info)

### N3 (Slide 6)
```
"Week Summary: FL0101 fire suppression fault (6 days, safety critical). Systematic Strata failures across 4 units Oct 2-3 requiring investigation."
```
**Analysis:**
- ✅ Emphasizes safety-critical nature
- ✅ Quantifies systematic issue (4 units)
- ✅ Signals need for investigation
- ✅ 145 chars (over limit, could be shortened)

**Improved version (120 chars):**
```
"Week Summary: FL0101 fire suppression (6 days, safety critical). Strata failures across 4 units Oct 2-3 need investigation."
```

---

## Creation Process

### Step 1: Review Breakdown Data
Analyze the `keyBreakdowns` array for the site to identify:
- Equipment with longest downtime
- Recurring issues across multiple units
- Safety-critical failures
- Systematic problems (e.g., Strata, OEM delays)

### Step 2: Consult Supplementary Reports
If available, review:
- Equipment breakdown summary reports (e.g., `Equipment_Breakdown_Summary_Week<N>.md`)
- Epiroc weekly reports
- Engineering notes

### Step 3: Draft Headline
Write a 1-2 sentence summary focusing on:
1. **Most critical issue** (longest duration or highest severity)
2. **Secondary issue** (if space permits)
3. **Systematic patterns** (if applicable)

### Step 4: Verify Length
- Count characters (including "Week Summary: " prefix)
- Target: ≤120 chars
- Maximum acceptable: 130 chars (only if critical info requires it)

### Step 5: Apply to reportData.ts
Update the `trendChart.comment` field for the site.

---

## Workflow Integration

This protocol is documented in:
- `.windsurf/workflows/weekly-report-update.md` → Phase 2, Step 3
- `Weekly Report Generator.md` (PRD) → Section 2.2

---

## Quality Checklist

Before finalizing, verify:
- [ ] Headline starts with "Week Summary: "
- [ ] Length ≤120 characters (or ≤130 if absolutely necessary)
- [ ] Includes specific equipment IDs
- [ ] Mentions duration for persistent issues
- [ ] Highlights systematic problems (if applicable)
- [ ] Uses severity indicators (safety critical, unresolved, etc.)
- [ ] Is factual and executive-appropriate
- [ ] Does not duplicate information already visible on slide

---

## Rationale

The week summary headline serves multiple purposes:
1. **Executive Communication:** Provides at-a-glance understanding of critical issues
2. **Trend Identification:** Highlights systematic problems requiring investigation
3. **Priority Setting:** Signals which issues need immediate attention
4. **Audit Trail:** Documents the week's most significant challenges

This complements the detailed breakdown list by providing context and prioritization.
