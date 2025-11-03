# BEV Data Validation Rules

## Mandatory Validation Steps

Before finalizing BEV slide data in reportData.ts, **ALWAYS** perform these validation steps:

### Step 1: Read Epiroc Weekly BEV Report
- **Location**: `weekly-report-generator/data-extract/Epiroc_BEV_Weekly_Report_Week[N].md`
- **Format**: Markdown file with daily exceptions and battery status
- **Sections to review**:
  - BEV Daily Exceptions (Equipment with Issues Only)
  - Battery and Charger Status Report
  - General Issues

### Step 2: Extract Daily Exceptions Data

For each day of the week, extract:
- **Equipment ID** (e.g., DT0146, FL0113)
- **Issue description** (e.g., "Battery not connecting", "Half arrows")
- **Breakdown hours** (e.g., "15H07min" = 15.1 hours)
- **Breakdown category** (Electrical, Mechanical, 3rd party supplier, Boilermaker)

### Step 3: Aggregate Breakdown Data

**For DT BEV:**
- Sum total hours for each unique issue type
- Identify top 3 causes by total hours
- Identify top 3 machines by total breakdown hours
- Format: "Top causes: [Issue 1]; [Issue 2]; [Issue 3]"
- Format: "Top machines: [Unit ID] ([issue], [hours]); ..."

**For FL BEV:**
- Sum total hours for each unique issue type
- Identify top 3 causes by total hours
- Identify top 3 machines by total breakdown hours
- Same formatting as DT BEV

### Step 4: Extract Battery Themes

From "Battery and Charger Status Report" section:

**Charger Status:**
- Module status (e.g., "Charger 7: One Module is switch off")
- Capacity impact (e.g., "Charging at 75% capacity")
- Mini sub-breaker issues

**CCS Connector Cables:**
- Posts requiring replacement (e.g., "Posts 3, 6, 7")
- Cable delivery status (e.g., "New 300A cables received")
- Parts on order (e.g., "Upgraded spring set on order")

**General Issues:**
- Connector wear issues
- DCDC campaign status and timing (e.g., "to kick off once technicians onboarded")
- Battery pack issues with specific IDs (e.g., "VPY00088 breakdown")
- Spare parts location (e.g., "spare parts at BR")

**Battery Ratio:**
- ST14-B4 count and ratio (e.g., "10 ST14-B4 (1.6 ratio)")
- MT42-B5 count and ratio (e.g., "12 MT42-B5 (above 1.6 ratio)")

### Step 5: Compare with reportData.ts

**Check BEV Breakdowns:**
```typescript
breakdowns: [
  {
    equipment: 'DT BEV',
    details: [
      'Top causes: [verify matches Epiroc]',
      'Top machines: [verify matches Epiroc]'
    ]
  },
  {
    equipment: 'FL BEV',
    details: [
      'Top causes: [verify matches Epiroc]',
      'Top machines: [verify matches Epiroc]'
    ]
  }
]
```

**Check Battery Themes:**
```typescript
batteryThemes: [
  'Charger 7 & 8: [verify status and capacity]',
  'CCS connector cables: [verify posts, delivery status, parts]',
  'Charger/battery inlet connector: [verify issue and campaign timing]',
  'Battery ratio: [verify counts and ratios]; [verify breakdown with location]'
]
```

### Step 6: Update if Discrepancies Found

If any discrepancies exist:
1. Update reportData.ts with Epiroc data
2. Document what was changed in commit message
3. Note discrepancy in session learnings

---

## Common Issues to Watch For

### Issue 1: Incorrect Breakdown Hours
**Problem**: CSV data may have different hours than Epiroc daily exceptions
**Solution**: Use Epiroc daily exceptions as ground truth

### Issue 2: Missing Equipment IDs
**Problem**: Breakdowns listed without specific unit IDs
**Solution**: Extract unit IDs from Epiroc daily exceptions

### Issue 3: Incomplete Battery Themes
**Problem**: Missing delivery status or timing details
**Solution**: Extract from "General Issues" section in Epiroc report

### Issue 4: Wrong Breakdown Categories
**Problem**: Mechanical issues labeled as electrical or vice versa
**Solution**: Use breakdown category from Epiroc daily exceptions

### Issue 5: Missing Spare Parts Location
**Problem**: Battery breakdown listed without spare parts status
**Solution**: Check "Battery Pack Status" table for location details

---

## Validation Checklist

Before finalizing BEV slide:

- [ ] Epiroc weekly BEV report read and reviewed
- [ ] Daily exceptions extracted for all 7 days
- [ ] DT BEV top causes match Epiroc data
- [ ] DT BEV top machines match Epiroc data with correct hours
- [ ] FL BEV top causes match Epiroc data
- [ ] FL BEV top machines match Epiroc data with correct hours
- [ ] Charger status includes capacity percentage
- [ ] CCS connector cables include delivery status
- [ ] DCDC campaign includes timing detail
- [ ] Battery ratio counts verified
- [ ] Battery breakdown includes spare parts location
- [ ] All equipment IDs verified against Epiroc report

---

## Example: Week 18 Validation

**Before Validation:**
```typescript
// DT BEV - INCORRECT
'Top causes: Rear traction motor temp sensor (DT0162, 36.9 hrs); Oil leak (DT0150, 37.2 hrs)'
```

**After Validation (from Epiroc):**
```typescript
// DT BEV - CORRECT
'Top causes: Strata faults (DT0146, DT0149, DT0150, DT0162, DT0163); Battery connection issues (DT0147, 9.6 hrs); Brake system/regenerative braking (DT0162, 8.9 hrs)'
```

**Before Validation:**
```typescript
// Battery Themes - INCOMPLETE
'CCS connector cables (Posts 3, 6, 7) need replacement; upgraded spring set on order.'
```

**After Validation (from Epiroc):**
```typescript
// Battery Themes - COMPLETE
'CCS connector cables (Posts 3, 6, 7) need replacement; new 300A cables received, upgraded spring set on order.'
```

---

## Time Conversion Reference

Epiroc format → Decimal hours:
- "15H07min" = 15.1 hrs
- "1D13hrs14min" = 37.2 hrs
- "2D03H49min" = 51.8 hrs
- "9H36min" = 9.6 hrs
- "8H51min" = 8.9 hrs

---

**Rule**: Epiroc weekly BEV report is ground truth for BEV data. Always validate before finalizing.

**Last Updated**: Week 18 (Nov 3, 2025)
**Maintained By**: Engineering Reporting Team
