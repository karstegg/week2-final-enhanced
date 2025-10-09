# Future Improvement: Right‑side Editor Panel for Slide‑Specific Edits

## Summary
Add a right‑docked editor panel next to the slide preview to manually tweak the data for the currently visible slide. Changes apply live to the preview and can be saved as overrides or written back to `reportData.ts` in dev mode.

## Goals
- Fast manual touch‑ups after automated compilation.
- Safe, reversible edits with validation and undo.
- Zero impact on print output (panel hidden during print).

## Active slide → data path mapping
Use `currentSlide` from `weekly-report-generator/src/App.tsx` to determine which slice of `reportData` to edit.
- TitleSlide → `reportData.cover`
- IndexSlide → `reportData.sites`
- HealSlide → `reportData.heal`
- ShaftsWindersSlide → `reportData.shaftsAndWinders`
- TrendChartSlide (N3/N2/Gloria) → `reportData.sites.<site>.trendChart`
- SitePerformanceSlide (N3/N2/Gloria) → `reportData.sites.<site>`
- BevPerformanceSlide → `reportData.bev`

## UX design
- Right‑docked panel with toggle button; resizable split.
- Tabs: "Structured" (forms) and "Raw" (JSON/TS view).
- Auto‑hide while printing.
- Actions: Save, Undo, Redo, Copy JSON Patch, Download `overrides.json`.

## Editing modes
- Structured forms per slide type:
  - HEAL: `highlights`, `lowlights`, `emergingIssues`, `priorities` (add/remove rows).
  - Site Performance: `weeklyAverage`, `serviceCompliance`, `availability[]`, `keyBreakdowns[]`.
  - BEV: `availability[]`, `serviceCompliance`, `breakdowns[]`, `batteryThemes[]`.
- Raw editor: Monaco‑based JSON editor limited to the active data slice.

## Persistence strategy
- Non‑destructive by default:
  - Merge `overrides.json` over `reportData.ts` at runtime.
  - Dev‑only save endpoint to write `overrides.json` (disabled in prod builds).
- Optional (opt‑in) direct TS write in dev:
  - Use `ts-morph` + Prettier to update `weekly-report-generator/src/data/reportData.ts` safely.

## Validation & safety
- Zod schemas aligned with `reportData` types.
- Diff preview before save; reject invalid updates.
- Local undo/redo using `localStorage` snapshots.

## Dev UX
- Live preview updates after edits; HMR for TS writes.
- Keyboard shortcuts: toggle panel, save, undo/redo.

## Print workflow
- Panel automatically hidden when printing to PDF.
- Optional "Reprint PDF" quick action after saving changes.

## Security & environment
- Dev‑only file write endpoints; no writes in production builds.
- Input size limits and strict schema validation on any POST body.

## Phased implementation plan
1. Phase 1 – Read‑only: Add `EditorPanel` and show read‑only JSON for the active slice.
2. Phase 2 – Local edits: Enable edits in memory with validation and localStorage autosave.
3. Phase 3 – Overrides: Add `overrides.json` merge and dev‑only save API.
4. Phase 4 – Direct TS write (optional): Implement `ts-morph` writer with Prettier.
5. Phase 5 – Structured forms: HEAL, Site Performance, BEV dynamic forms (add/remove rows).

## Files to touch
- `weekly-report-generator/src/App.tsx` – toggle, layout, slide context mapping.
- `weekly-report-generator/src/components/shared/EditorPanel.tsx` – new component.
- `weekly-report-generator/src/lib/overrides.ts` – merge utility (new).
- `weekly-report-generator/src/data/reportData.ts` – source data (read; optional write in dev).
- `weekly-report-generator/dev-save-server.js` (or Vite dev middleware) – dev‑only save API.

## Stretch goals
- Field‑level audit trail per slide.
- Inline help/tooltips with examples per field.
- Multi‑user merge support if hosted.
