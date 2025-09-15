# Future Improvement: Export to PowerPoint (editable slides)

## Summary
Provide a "Export to PowerPoint" option that generates a PPTX with fully editable objects (text boxes, shapes, charts), enabling post‑export edits in PowerPoint. Prefer programmatic PPTX generation over SVG/image export so text remains editable.

## Recommendation
- Use PptxGenJS (JS/TS library) to build slides programmatically with editable elements.
- Alternative (brand‑template approach): `pptx-templates` with named placeholders in a master PPTX.
- Avoid SVG/HTML converters for this goal: text often becomes paths or rasterized and is not truly editable.

## Architecture
- New module: `weekly-report-generator/src/export/exportPptx.ts`
  - Builds a deck; one slide per app slide.
  - Adds text boxes, shapes, tables, and charts from `reportData`.
  - Saves `Weekly-Report-Week${reportData.weekNumber}.pptx`.
- UI trigger: Add "Export to PowerPoint" button in `weekly-report-generator/src/App.tsx`.
- Slide size: 960×720 px in app ≈ 10×7.5 inches (4:3). Use 10"×7.5" in PPTX for consistent layout.

## Slide mapping (data → PPTX)
- TitleSlide → Title, subtitle/date, branding footer (text boxes).
- IndexSlide → Section titles list (text boxes / bullets).
- HealSlide → Four quadrants as grouped text boxes; bullets per list.
- Shafts & Winders → Text sections and bullets.
- TrendChartSlide (N3/N2/Gloria) → Prefer PPTX chart using series data; fallback to image if data not available.
- SitePerformanceSlide (N3/N2/Gloria) →
  - Safety/compliance/weekly avg cards → shapes + text.
  - Availability bars → shapes with width proportional to percentage + labels.
  - Key breakdowns → bullets.
- BEVPerformanceSlide →
  - Availability and service compliance → shapes + text.
  - Breakdowns + battery themes → bullets.

## Data considerations
- To make charts editable: store numeric series in `reportData` (e.g., arrays for weekly values) rather than only image paths.
- Centralize theme (fonts, colors) in constants to keep PPT styling consistent with the app.

## Phased implementation
1. POC (1–2 slides)
   - Implement TitleSlide + one SitePerformance slide via PptxGenJS.
   - Validate fonts, sizes, margins, and export flow.
2. Full slide coverage
   - Map all slide types; factor common helpers (text box, card, bar, bullet list).
3. Charts
   - Add trend series to `reportData` and render PPT charts instead of images.
4. UI integration
   - Add "Export to PowerPoint" button in `App.tsx`; disable during print.
5. Theming & polish
   - Slide masters, brand colors, consistent typography, footer image.

## Dependencies
- Add `pptxgenjs` to dependencies (no immediate install until implementation).

## Risks & notes
- Manual coordinate mapping from React layout to PPT inches required; create layout helpers and constants.
- Font substitution may occur on machines without the chosen font; consider specifying standard fonts.
- If a slide is highly dynamic, template‑based (`pptx-templates`) may be easier for brand fidelity but less flexible for layout changes.

## Alternative: `pptx-templates`
- Create a master PPTX with named placeholders.
- Script replaces placeholders with text/tables/images.
- Best when layouts are fixed and branding is strict; less ideal for dynamic grids and charts without pre‑defined placeholders.

## Next steps
- Proceed with Phase 1 POC using PptxGenJS.
- If POC is accepted, extend to all slides and add chart data to `reportData` for editable charts.
