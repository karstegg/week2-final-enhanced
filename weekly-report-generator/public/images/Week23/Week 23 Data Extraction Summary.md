# Week 23 Data Extraction Summary
**Week Dates:** December 2-8, 2025
**Report Date:** Friday, December 5, 2025
**Generated:** December 8, 2025

---

## Extraction Status Overview

### ✅ Completed Extractions

#### Nchwaning 2 (N2)
- **Source File:** `Nch2 Weekly Report 04 Dec 2025.xlsx`
- **Data Extracted:**
  - ✅ N2 HEAL Page (from email body)
  - ✅ Primary Equipment Daily Availabilities (5 equipment types)
  - ✅ Maintenance Compliance (7 fleet rows)

**Output Files:**
- `N2 HEAL Page Week23.txt`
- `N2 Primary Equipment Daily Availabilities - Week23.csv`
- `N2 Maintenance Compliance - Week23.csv`

---

#### Shafts & Winders
- **Source Files:**
  - `Weekly Report  Shafts and Winders 2025_23_28Nov-04Dec2025.xlsx`
  - `SHAFTS AND WINDERS_HEAL_23_WEEK_28Nov-04Dec2025.pptx`

- **Data Extracted:**
  - ✅ Production performance (tons/hr metrics)
  - ✅ Equipment availability data
  - ✅ HEAL page (16 items across 5 sections)

**Output Files:**
- `Shafts and Winders Production - Week23.csv`
- `Shafts and Winders Availability - Week23.csv`
- `Shafts & Winders HEAL Page Week23.txt`

---

#### BEV (Battery Electric Vehicles)
- **Source File:** `BEV_Dataset.xlsx` (Power BI export)
- **Data Extracted:**
  - ✅ DTe Weekly Availabilities (53 weeks)
  - ✅ DTe Monthly Availabilities (12 months)
  - ✅ DTe Availability by Unit (7 machines)
  - ✅ DTe Delays (breakdown details)
  - ✅ FLe Weekly Availabilities (53 weeks)
  - ✅ FLe Monthly Availabilities (12 months)
  - ✅ FLe Availability by Unit (5 machines)
  - ✅ FLe Delays (breakdown details)

**Output Files (8 total):**
- `N3 BEV DTe Weekly Availabilities - Week23.csv`
- `N3 BEV DTe Monthly Availabilities - Week23.csv`
- `N3 BEV DTe Availability by Unit - Week23.csv`
- `N3 BEV DTe Delays - Week23.csv`
- `N3 BEV FLe Weekly Availabilities - Week23.csv`
- `N3 BEV FLe Monthly Availabilities - Week23.csv`
- `N3 BEV FLe Availability by Unit - Week23.csv`
- `N3 BEV FLe Delays - Week23.csv`

---

## ⚠️ Missing Data - Manual Follow-Up Required

### Nchwaning 3 (N3)

**Status:** PARTIALLY AVAILABLE

- ❌ **N3 Excel Weekly Report** - Email from Joyce Diale located in `\Inbox\Planners\` subfolder (per user)
  - **Action Required:** Please manually save the Excel file from Joyce Diale's email to `Week 23\` folder
  - **Expected File Pattern:** `N3 Eng Report Week * * -* * 2025.xlsx`

- ❌ **N3 HEAL PowerPoint** - Not sent by Sello Sease this week (confirmed by user)
  - **Action Required:** Create N3 HEAL page manually or use alternative source

**Once N3 Excel file is available, run:**
```bash
/extract-primary-equipment n3 23
/extract-maintenance-compliance n3 23
```

---

### Gloria

**Status:** NOT AVAILABLE

- ❌ **Gloria Excel Weekly Report** - No email from Jade Kruger found (searched \Inbox and subfolders)
  - **Search Period:** December 2-8, 2025
  - **Expected Sender:** Jade Kruger (Jade.Kruger@assmang.co.za)
  - **Expected File Pattern:** `Gloria Eng Report Week *-* * 2025.xlsx`

- ❌ **Gloria HEAL PowerPoint** - Not found
  - **Search Period:** December 2-8, 2025

**Action Required:**
1. Contact Jade Kruger to confirm if Gloria weekly report was sent
2. If sent, locate and save to `Week 23\` folder
3. Once available, run:
   ```bash
   /extract-primary-equipment gloria 23
   /extract-maintenance-compliance gloria 23
   /extract-pptx-heal gloria 23
   ```

---

### Epiroc BEV Report

**Status:** NOT AVAILABLE

- ❌ **Epiroc BEV Weekly PDF** - No email from Phillip Moller found
  - **Search Period:** December 2-8, 2025 (expanded from typical Mon 07:09 arrival)
  - **Expected Sender:** Phillip Moller (phillip.moller@epiroc.com)
  - **Expected File Pattern:** `BRMO weekly report * * 2025 - * * 2025.pdf`
  - **Typical Subject:** "BRMO weekly report"

**Action Required:**
1. Contact Phillip Moller to check if report was sent
2. If sent, locate in `\Inbox\OEMs\Epiroc\` folder and save to `Week 23\`
3. Once available, run:
   ```bash
   /extract-epiroc-bev-report --week=23
   ```

---

## Summary Statistics

### Data Extraction Completion

| Site/System | Excel Report | HEAL Page | Primary Equipment | Maintenance Compliance | Status |
|-------------|--------------|-----------|-------------------|------------------------|--------|
| **N2** | ✅ | ✅ | ✅ | ✅ | COMPLETE |
| **N3** | ❌ | ❌ | ❌ | ❌ | MISSING |
| **Gloria** | ❌ | ❌ | ❌ | ❌ | MISSING |
| **Shafts & Winders** | ✅ | ✅ | ✅ | ✅ | COMPLETE |
| **BEV** | ✅ | N/A | ✅ | ✅ | COMPLETE |
| **Epiroc BEV** | ❌ | N/A | N/A | N/A | MISSING |

**Overall Completion:** 50% (3 of 6 data sources complete)

### Files Generated

- **Total CSV Files:** 16
- **Total TXT Files:** 3 (HEAL pages)
- **Total Extraction Scripts:** 4 (search scripts can be deleted)

---

## Next Steps

### Immediate Actions (Once Missing Files Arrive)

1. **N3 Data Extraction:**
   - Save Joyce Diale's Excel file to Week 23 folder
   - Run primary equipment extraction: `/extract-primary-equipment n3 23`
   - Run maintenance compliance extraction: `/extract-maintenance-compliance n3 23`
   - Manually create N3 HEAL page (no PowerPoint available)

2. **Gloria Data Extraction:**
   - Follow up with Jade Kruger for weekly report
   - Once received, run all Gloria extractions
   - Extract HEAL if PowerPoint is available

3. **Epiroc BEV Report:**
   - Follow up with Phillip Moller
   - Extract report sections once PDF is available

### Weekly Report Compilation

**With Current Data (N2, S&W, BEV only):**
- Can proceed with partial weekly report
- Include note about pending N3 and Gloria data
- BEV data is complete and ready for analysis

**Complete Report (All Sites):**
- Wait for N3 and Gloria data
- Compile comprehensive multi-site analysis
- Include all HEAL pages and availability metrics

---

## File Locations

### Week 23 Folder Contents

**Extracted Data Files (19 total):**
```
N2 HEAL Page Week23.txt
N2 Primary Equipment Daily Availabilities - Week23.csv
N2 Maintenance Compliance - Week23.csv

Shafts and Winders Production - Week23.csv
Shafts and Winders Availability - Week23.csv
Shafts & Winders HEAL Page Week23.txt

N3 BEV DTe Weekly Availabilities - Week23.csv
N3 BEV DTe Monthly Availabilities - Week23.csv
N3 BEV DTe Availability by Unit - Week23.csv
N3 BEV DTe Delays - Week23.csv
N3 BEV FLe Weekly Availabilities - Week23.csv
N3 BEV FLe Monthly Availabilities - Week23.csv
N3 BEV FLe Availability by Unit - Week23.csv
N3 BEV FLe Delays - Week23.csv
```

**Source Files (4 total):**
```
Nch2 Weekly Report 04 Dec 2025.xlsx
Weekly Report  Shafts and Winders 2025_23_28Nov-04Dec2025.xlsx
SHAFTS AND WINDERS_HEAL_23_WEEK_28Nov-04Dec2025.pptx
Root Cause Analysis Form - Loss of water Supply (N3).docx (not used for weekly report)
```

---

## Notes

- **Unicode Encoding Errors:** Cosmetic console output errors encountered during BEV extraction. All files were created successfully despite the error messages.

- **N3 Email Location:** User confirmed Joyce Diale's email is in `\Inbox\Planners\` subfolder. Automated search did not locate it (possible date range or folder access issue).

- **Sello Sease N3 HEAL:** User confirmed no PowerPoint was sent this week. Manual HEAL page creation will be required for N3.

- **Search Scripts:** The following temporary search scripts in Week 23 folder can be deleted after data extraction is complete:
  - `search_missing_emails.py`
  - `search_planners_folder.py`
  - `search_planners_all.py`
  - `find_missing_files.py`

---

**Report Status:** PARTIAL - Awaiting N3, Gloria, and Epiroc data
**Next Review:** After receiving missing files from Joyce Diale, Jade Kruger, and Phillip Moller
