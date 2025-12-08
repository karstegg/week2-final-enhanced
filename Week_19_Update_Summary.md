# Week 19 Report Update Summary

**Report Period:** 1 - 7 November 2025  
**Week Number:** 19  
**Status:** ✅ Complete

## Data Sources Incorporated

### 1. HEAL Pages (Text Extracts)
- Gloria HEAL Page Week19.txt
- N2 HEAL Page Week19.txt
- N3 HEAL Page Week19.txt
- Shafts & Winders HEAL Page Week19.txt

### 2. Availability CSVs
- Gloria Primary Equipment Daily Availabilities - Week19.csv
- N2 Primary Equipment Daily Availabilities - Week19.csv
- N3 Primary Equipment Daily Availabilities - Week19.csv
- Shafts and Winders Availability - Week19.csv
- N3 BEV DTe Weekly Availabilities - Week19.csv
- N3 BEV FLe Weekly Availabilities - Week19.csv

### 3. Maintenance Compliance CSVs
- Gloria Maintenance Compliance - Week19.csv
- N2 Maintenance Compliance - Week19.csv
- N3 Maintenance Compliance - Week19.csv

### 4. BEV Breakdown Details
- N3 BEV DTe Delays - Week19.csv
- N3 BEV FLe Delays - Week19.csv
- Epiroc_BEV_Weekly_Report_Week19_Extracted.md (Detailed breakdown analysis)

## Data Updates Summary

### Cover & Metadata
- Week Number: 19
- Date Range: 1 - 7 November

### HEAL Overview (Departmental)
**Highlights:**
- Gloria: CAS Level 9 machines completed (UV0065, UV0136, UV0129, LD0600)
- N2: 47 TMM tested by 3rd party for quarterly brake testing (06 Nov)
- N3: Strong schedule compliance; Diesel fleet availability improved; Positive production trend

**Lowlights:**
- Gloria: TMM availability 84%; DT0153 linbore, HD0066 bulkhead, RT0045 compressor motor issues
- N2: Repetitive DT121 breakdowns (moving out of gear, park brake, overspeeding)
- N3: BEV DT major breakdowns; HD fleet electrical cable/panel box failures; 60CV01 belt tear 260m

**Emerging Issues:**
- Gloria: Labour shortage (Shift Foreman, Boilermaker Chargehand interviews 07 Nov)
- N2: JDE Appshare login issues; Inconsistent Qlikview/PowerBI data
- N3: Low work attendance (<85%); CAS L9 implementation pressure; Battery charging schedule review needed

**Priorities:**
- Gloria: AARD/Mine spec Cruiser/Fermel Level 9 compliance; H tail pulley lagging & belt splicing (08-09 Nov)
- N2: CAS L9 schedule adherence; Remove scrap machines from decline laydown
- N3: CAS L9 implementation (Dec target); Improve BEV DT availability (focus DT0171); Rip detector installation; Silo discharge belt replacement

### Shafts & Winders
- Production: 288 tons/hr (Target: 523)
- Winder Availability: 89% (Target: 95%)
- Highlights: Plumbing Team making good impact on Changehouse Maintenance
- Lowlights: Services Supervisor Position Declined; Loading Station 3-7 Level Cylinder Failure
- Priorities: Shaft Repair Work (Weekend 15); Employee Engagement/Resignations; Safety Campaign; Shaft Exam; BM Team changing Bunton 13

### Site Performance

#### Gloria
- Weekly Average: 84% (Target: 85%)
- Equipment Availability: DT 74%, FL 90%, HD 83%, RT 71%, SR 95%
- Safety: Good (CV55 damage delayed afternoon shift 03 Nov)
- Service Compliance: Issues (DT 100%, HD 50%, RT 100%, SR n/a, Support Equip 66.7%)
- Key Breakdowns: DT0153 articulation issue; RT0045 compressor motor failure

#### Nchwaning 2
- Weekly Average: 90% (Target: 85%)
- Equipment Availability: DT 81%, FL 88%, HD 93%, RT 95%, SR 95%
- Safety: Good (47 TMM tested by 3rd party for quarterly brake testing 06 Nov)
- Service Compliance: Issues (DT 66.7%, FL 100%, HD 50%, RT 100%, SR 0%, Support Equip 6%)
- Key Breakdowns: DT121 repetitive breakdowns; No major FL breakdowns

#### Nchwaning 3
- Weekly Average: 87% (Target: 85%)
- Equipment Availability: DT-Diesel 82%, FL-Diesel 95%, HD 88%, RT 95%, SR 83%
- Safety: Good
- Service Compliance: Issues (DT Diesel 100%, FL Diesel 100%, FL BEV 100%, DT BEV 100%, HD 50%, RT 100%, SR 100%)
- Key Breakdowns: HD50 SWD box (new location, no operator); HD49 electrical box handle; SR auto-related issues

### BEV Fleet Performance

#### Availability
- DT BEV: 76% (Target: 85%)
- FL BEV: 95% (Target: 85%)

#### Service Compliance
- DT BEV: 100%
- FL BEV: 100%

#### Critical Issues (from Epiroc Report)
- **DT171:** A-frame bearing damaged (19D23H30min); bearing replaced over weekend, machine almost ready
- **VPY00011 & VPY00088:** On breakdown
- **VPX00016:** Needs new sub pack

#### Top Breakdowns by Machine
**DT BEV:**
- DT147: Suspension/cab issues (6H25min + 19H13min)
- DT149: Strata/wipers (11H58min + 2H42min)
- DT163: RH window loose (19H41min)

**FL BEV:**
- FL113: Low hydraulic oil (2H42min)
- FL107: Strata fault (1H11min)
- FL098: Red stop lamp TCU error (48min)

#### Battery & Charger Status
- **ST14-B4:** 10 units (1.6 ratio, 6 machines operational)
- **MT42-B5:** 12 units (above 1.6 ratio)
- **Charger 7 & 8:** Modules tripped, charging at 75% capacity
- **CCS Cables:** Posts 3, 6, 7 need replacement (300A cables received, spring set on order)
- **DCDC Campaign:** Starts 17 Nov 2025
- **Battery Overheat:** VPX00016 overheating incident (44°C); monitoring ongoing

#### Ongoing Audits & Initiatives
- Battery disconnects compatibility audit
- Regenerative braking knobs override to 100% (tested DT163 successful)
- S2 project support
- CAS L9 implementation for BEV fleet (all except BEV machines currently operating on CAS L9)

## Files Updated
- `weekly-report-generator/src/data/reportData.ts` - Complete Week 19 data

## Verification
- ✅ All HEAL data extracted and populated
- ✅ Site availability percentages cross-checked with trend charts
- ✅ BEV data incorporated from Epiroc detailed report
- ✅ Service compliance data populated
- ✅ Key breakdowns and battery themes documented
- ✅ Shafts & Winders production and availability updated

## Next Steps
- Review slides in browser preview to confirm visual rendering
- Generate PDF export for final review
- Commit changes to git
- Create pull request for merge to main branch
