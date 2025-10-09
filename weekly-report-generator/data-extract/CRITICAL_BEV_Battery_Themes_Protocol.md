# CRITICAL: BEV Battery Themes Extraction Protocol

**Status:** MANDATORY for all weekly updates  
**Last Updated:** 6 October 2025  
**Applies To:** Slide 11 (BEV Performance) - Battery Themes Section

---

## ⚠️ CRITICAL RULE

**BEV battery themes MUST be extracted from the Epiroc weekly report PDF.**

❌ **DO NOT:**
- Synthesize themes from CSV data
- Infer themes from breakdown patterns
- Create generic summaries

✅ **DO:**
- Extract directly from Epiroc PDF report
- Use specific technical details (module IDs, post numbers, battery pack IDs)
- Document extraction in a markdown file

---

## Extraction Command

```powershell
echo "Extract the 'Key Battery & Charger Themes' or 'Battery Status' section from this PDF. Provide a concise bullet list (3-4 items max, each ≤120 chars) of the key battery and charger issues for the week. @'weekly-report-generator/data-extract/BRMO weekly report LIVE...pdf'" | npx @google/gemini-cli
```

**Run from:** Project root directory

---

## Required Steps

1. **Extract from Epiroc PDF** using Gemini CLI command above
2. **Save extraction** as `BEV_Battery_Themes_Week<N>_Extract.md` in `data-extract/`
3. **Apply to reportData.ts** → `bev.batteryThemes` array
4. **Verify format:** 3-4 bullets, each ≤120 characters

---

## Example Output (Week 14)

```typescript
batteryThemes: [
  'Faulty charger modules: C4-M1 and C5-M4 require replacement.',
  'Chargers 7 & 8: Modules switched off due to tripping mini sub breaker.',
  'CCS connector cables for Posts 3, 6, and 7 need replacement.',
  'Battery pack VPY-00088 (B4-ST14) out of service: TMS/Subpack/VCB connector issue.',
],
```

---

## Technical Details to Include

- **Charger Module IDs:** C4-M1, C5-M4, C7, C8, etc.
- **Post Numbers:** Post 3, Post 6, Post 7, etc.
- **Battery Pack IDs:** VPY-00088, VPX-00015, etc.
- **Root Causes:** TMS/Subpack/VCB connector, mini sub breaker tripping, etc.

---

## Workflow Integration

This protocol is documented in:
- `.windsurf/workflows/update-n3-ug-mine-site.md` → Phase 2, Step 3

---

## Rationale

The Epiroc PDF contains official battery and charger status information that is:
- Reviewed by battery specialists
- Contains specific technical identifiers
- Includes root cause analysis
- Provides actionable maintenance items

CSV delay data only shows symptoms (e.g., "battery not connecting") but lacks the infrastructure-level issues (faulty charger modules, cable replacements, etc.) that are critical for operations planning.
