# EPIROC BEV WEEKLY REPORT - WEEK 23
**Report Period:** 28 November - 4 December 2025
**Reported By:** Phillip Moller
**Submitted To:** Sello Taku and Sipho

---

## GENERAL SUMMARY

The purpose of this report is to give an overview of all the Epiroc activities at Black Rock Mine Operations (BRMO).

---

## BEV - CRITICAL BREAKDOWN SUMMARY

### Battery Issues (5 batteries on breakdown start of week)

**Front Loader Batteries (2):**
- **VPY00011** - PSB (charging PC board) changed, need to upload parameters
- **VPY00049** - Level 3 fault on a sub pack. Scania reset sub pack ✅ RESOLVED

**Dump Truck Batteries (3):**
- **VPX00023** - Level 3 fault on a sub pack. Scania reset sub pack ✅ RESOLVED
- **VPX00026** - Level 3 fault on a sub pack. Waiting on Scania ⚠️ ONGOING
- **VPX00031** - Level 3 fault on a sub pack. Waiting on Scania ⚠️ ONGOING

**Root Cause:** Software bug locking out battery subpacks due to over-current fault. Scania assisting in unlocking sub packs and analyzing data before resetting.

### Infrastructure Issues

- **Battery bay crane breakdown** since 02/12/2025 (Tuesday)
  - Waiting on brake parts
  - Operating with crane but very slow
  - Started using crane 03/12/2025 (Wednesday) at 14:00

### Equipment Long Downs

- **DT149 and DT146** - Long downs due to Strata breakdowns (3rd party supplier)

### Outstanding Audits

- DT162
- FL113

---

## BEV DAILY EXCEPTIONS (ONLY EQUIPMENT WITH BREAKDOWNS/DELAYS)

### Friday 28 November 2025
- **DT146** - 3rd party supplier fault – Strata (1H34min)
- **DT149** - Morning: 3rd party supplier fault - Strata (3H37min) | Night: Strata (9H18min)
- **DT163** - 3rd party supplier fault - Strata (2H26min)

### Saturday 29 November 2025
- **FL112** - 3rd party supplier fault - Strata (43min)

### Sunday 30 November 2025
- **FL112** - 3rd party supplier fault - Strata (23H02min)
- **DT163** - 3rd party supplier fault - Strata (19H19min)

### Monday 01 December 2025
- **FL99** - Mechanical breakdown – Brake system – No feedback (55min)
- **FL113** - Tyre Bay breakdown – Changed tyre (4H34min)
- **DT146** - 3rd party supplier fault - Strata (36min)
- **DT149** - 3rd party supplier fault - Strata (1D3H29min)

### Tuesday 02 December 2025
- **FL98** - Electrical breakdown – TCU error. Reset tripped fuse (1H02min)
- **DT149** - 3rd party supplier fault - Strata (2H30min)

### Wednesday 03 December 2025
- **FL98** - Mechanical breakdown – Auto phasing fault. Did ID runs (3H41min)
- **FL107** - 3rd party supplier fault – Strata (2H47min)
- **FL112** - Tyre-bay breakdown – Replaced tyre (1D13H57min)
- **DT146** - 3rd party supplier fault - Strata (8H26min)
- **DT149** - Afternoon: Strata (3H41min) | Morning: Strata (4H40min)
- **DT150** - 3rd party supplier fault – Strata (5H29min)

### Thursday 04 December 2025
- **DT149** - 3rd party supplier fault - Ongoing fault (1D13H57min)

---

## PLANNED WORK & MAINTENANCE SCHEDULE

### Re-occurring Issues
1. **Strata** (3rd party supplier) - Dominant cause of equipment delays

### Improvement Actions and Campaigns

1. **DCDC Campaign** - Reduce charger interruptions (Ongoing)
   - 4 batteries remaining to be converted this week

2. **CCS Connector Cables Replacement**
   - Post 3, 6 and 7 CCS connector cables need replacement (Cause of high pin temp)
   - Status: Parts ordered (see Open Order Report below)

3. **Auxiliary Motor Spline Grease TSNB**
   - Not yet done - need to schedule machines to complete campaign
   - Grease already on site
   - **Action Required:** BR to schedule machines (raised multiple times)

4. **Connector Audits**
   - Almost done - 2 machines remaining (FL113 and DT162)
   - Will replace connectors as needed

5. **Regeneration Knob Campaign**
   - Set to 100% to be started this week

### Maintenance Schedule December 2025

| Monday 8-Dec | Tuesday 9-Dec | Wednesday 10-Dec | Thursday 11-Dec | Friday 12-Dec |
|--------------|---------------|------------------|-----------------|---------------|
| DT0109 | DT0147 | DT0148 | DT0149 | |
| FL0099 | FL0090 | | DZ0011 | |
| HD0049 | HD0050 | HD0051 | HD0052 | HD0055 |

### Open Order Report (12 November 2025)

| Order Date | Order Number | Item Number | Description | Qty | Status | ETA |
|------------|--------------|-------------|-------------|-----|--------|-----|
| 2025/11/13 | 25001480/07/MW | 9464900654 | GROMMET | 3 | Open | 2025/12/05 |
| 2025/11/13 | 25001480/07/MW | 3180004087 | SET,SPRING | 3 | Open | 2025/12/05 |
| 2025/11/13 | 25001480/07/MW | 3180004088 | HOLDER | 3 | Open | 2025/12/05 |
| 2025/11/13 | 25001480/07/MW | 3180004092 | KIT,SERVICE | 3 | Open | 2025/12/09 |

---

## BATTERY AND CHARGER STATUS REPORT

### Battery Pack Summary

**ST14 – B4 battery packs:**
- 10 x ST14 – B4 battery packs available
- 6 x ST14 machines operational underground
- Ratio: 1.6 batteries per machine ✅ (meets commitment)

**MT42 – B5 battery packs:**
- 12 x MT42 – B5 battery packs operational underground
- Ratio: Above committed 1.6 batteries per machine ✅

### Battery Pack Status Table

| Battery Type | Battery ID | Status | Comment |
|--------------|------------|--------|---------|
| B4 - ST14 | VPY-00011 | ❌ Breakdown | Changed PSB – Need to load software. T-link cable needed. |
| B4 - ST14 | VPY-00031 | ✅ Working | |
| B4 - ST14 | VPY-00051 | ✅ Working | |
| B4 - ST14 | VPY-00048 | ✅ Working | |
| B4 - ST14 | VPY-00049 | ✅ Working | Was on breakdown – Scania reset level 3 fault |
| B4 - ST14 | VPY-00088 | ✅ Working | |
| B4 - ST14 | VPY-00086 | ✅ Working | |
| B4 - ST14 | VPY-00076 | ✅ Working | |
| B4 - ST14 | VPY-00083 | ✅ Working | |
| B4 - ST14 | VPY-00041 | ✅ Working | |
| B5 - MT42 | VPX-00016 | ✅ Working | |
| B5 - MT42 | VPX-00015 | ✅ Working | |
| B5 - MT42 | VPX-00023 | ✅ Working | Was on breakdown – Scania reset level 3 fault |
| B5 - MT42 | VPX-00017 | ✅ Working | |
| B5 - MT42 | VPX-00010 | ✅ Working | |
| B5 - MT42 | VPX-00050 | ✅ Working | |
| B5 - MT42 | VPX-00031 | ❌ Breakdown | VPC fault (4) - waiting feedback from Scania |
| B5 - MT42 | VPX-00036 | ✅ Working | |
| B5 - MT42 | VPX-00028 | ✅ Working | |
| B5 - MT42 | VPX-00026 | ⚠️ Working | Need to change subpack |
| B5 - MT42 | VPX-00024 | ✅ Working | |
| B5 - MT42 | VPX-00048 | ✅ Working | |
| B5 - MT42 | VPX-00044 | 🟡 Surface | On machine: 8997901500 |

**Summary:**
- **Total Batteries:** 23
- **Working:** 19 (83%)
- **Breakdown:** 2 (9%)
- **Surface:** 1 (4%)
- **Needs Attention:** 1 (4%)

### 160 kW Charger Status

**General Issues:**
- Post 3, 6 and 7 CCS connector cables need replacement
- New 300A cables ordered and received
- Need to order upgraded spring set (Piet ordered upgrade kit - waiting parts)
- More charger stops noted - investigating worn out charger and CCS battery inlet connectors
- DCDC campaign initiated (5 batteries remaining)

**Charger Status by Post:**

**BRM 1 (K0021267) - SW V3.4.7**
- Missing 2X power modules (charging power reduced)
- Modules need to be replaced
- Currently running with no faults
- Uptime: 5d 12h

**BRM 2 (K0021363) - SW V3.4.7**
- Missing 2X power modules (charging power reduced)
- Modules need to be replaced
- Currently running with no faults
- Uptime: 17d 0h

**BRM 3 (K0021364) - SW V3.4.7**
- Missing 2X power modules (charging power reduced)
- Modules need to be replaced
- Currently running with no faults
- Uptime: 9d 16h

**BRM 4 (K0021268) - SW V3.4.7**
- Missing 2X power modules (charging power reduced)
- Modules need to be replaced
- Currently running with no faults
- Uptime: 15d 0h

**BRM 5 (K0021266) - SW V3.4.7**
- Missing 2X power modules (charging power reduced)
- Charger with defective fan on power module (highlighted yellow)
- Charger fan needs to be replaced
- Uptime: 2h 59m

**BRM 6 (K0021365) - SW V3.4.7**
- Currently running with no faults
- Uptime: 9d 18h

**BRM 7 (K0028147) - SW V3.4.7**
- Currently running with no faults
- Uptime: 45m

**BRM 8 (K0028146) - SW V3.4.7**
- Missing 2X power modules (charging power reduced)
- Modules need to be replaced
- Currently running with no faults
- Uptime: 12d 7h

**BRM 9 (K0032320) - SW V3.4.7**
- Power module failure or module switched off
- Charger output reduced by 25KW
- Power module needs to be replaced if defective
- Uptime: 15d 11h

**BRM 10 (K0032321) - SW V2.4.20**
- Charger not connected to the Grid and offline
- On old software - needs upgrade to SW V3.4.7
- Uptime: 9m

---

## BATTERY OVERHEAT REPORT

No battery overheat incidents reported this week.

---

## CRITICAL ISSUES

### BEV Critical Issues

1. **Re-occurring Issue: Strata (3rd party supplier)**
   - Dominant cause of equipment delays throughout the week
   - DT149 experienced multiple extended downtimes across all days

2. **Battery Subpack Lockouts**
   - Software bug causing over-current faults
   - Requires Scania intervention to unlock and reset
   - 2 batteries still waiting on Scania (VPX00026, VPX00031)

3. **Battery Bay Crane Breakdown**
   - Down since 02/12/2025
   - Waiting on brake parts
   - Operating slowly since 03/12/2025 14:00

4. **Charger Infrastructure**
   - Multiple chargers missing 2X power modules (reduced charging capacity)
   - CCS connector cables on Posts 3, 6, 7 need replacement (high pin temperature)
   - BRM 10 offline and needs software upgrade to V3.4.7
   - BRM 5 has defective fan needing replacement

5. **Outstanding Campaigns**
   - Auxiliary motor spline grease TSNB not completed - requires scheduling
   - 4 batteries remaining for DCDC conversion
   - 2 machines pending connector audits (FL113, DT162)

### CAS L9 Implementation - Critical Issues

- **Status:** Done, in sign off stage
- All machines on CAS Level 9
- Project in sign off phase

### Certiq & Mobilaris - Critical Issues

**Passport 360 Compliance:**
- BEV Technicians: 96% ✅
- CASL9 (Gloria): 100% ✅
- CASL9 (Nch2): 98% ✅
- CAS L9 (Nch3): 98% ✅
- Certiq & Mobilaris N2: 92% ✅
- Certiq & Mobilaris Gloria: 83% ⚠️ (Below target)

---

## FIELD SERVICE SUMMARY

**On Site Personnel:**

**BEV Team:**
- Ivan Phiri (morning shift)
- Lukas Serumola (night shift)
- Patrick Yoko (Service Tech Assistant - Batteries)
- Frikkie van der Walt (Specialist - Batteries)
- Note: Service Tech absent 04 Dec and Friday 05 Dec for funeral

**Field Service:**
- Mathews Mosemane - Assisting at BEV workshop
- Lucas Slaffa
- Pontsho - Commissioning of HD0070 (New S2)
- Julius Manamela - Fault finding on FL0092

**CAS Project:**
- Wisani Shilenge (Team Leader)
- Phineas Sibanda
- Julius Manamela
- Joseph Mampa

**Certiq Project:**
- Segunda Fernado (Team Leader)

**Mobilaris:**
- Rupert Grobler (Team Leader)

---

**Report End**
