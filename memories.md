    # Project Memories

This file contains persistent learnings and context for the Weekly Report Generator project.
It is read by the `onboard-assistant` workflow at the start of every session.

## 1. Data Source & Integrity
- **Single Source of Truth**: `weekly-report-generator/src/data/reportData.ts` is the ONLY active data file. Ignore the one in the root `src/data`.
- **CSV Priority**: Use CSV files (in `weekly-report-generator/data-extract/`) as the authoritative source for structured data (Availability, Breakdowns, Service Compliance).
- **Trend Charts**: Treat trend charts as "ground truth" for validation. Always cross-check weekly averages and fleet percentages against the charts before finalizing.
- **BEV Data**:
    - **Source**: Use Epiroc Weekly Report (PDF/MD) for narrative breakdowns; CSVs for availability.
    - **Naming**: Only Nchwaning 3 uses explicit "DT-Diesel" vs "DT BEV" labels.
    - **Formatting**: `keyBreakdowns.details` must start with `Top causes:` or `Top machines:` for the parser to work.
- **Service Compliance**: Source strictly from N3 Weekly Maintenance compliance.

## 2. Workflow & Process
- **Onboarding**: Always run `onboard-assistant` at the start of a chat.
- **Data Ingestion**: Copy (don't move) CSVs to `data-extract/`.
- **Validation**:
    - Verify color coding: Green ≥85%, Amber 80-84% (`target - 5`), Red <80%.
    - Check for text overflow in HEAL and BEV slides.
    - Ensure site performance "Weekly Avg" matches trend chart datapoints.

## 3. Content & Style Rules
- **HEAL Slides**:
    - **Capacity**: Max ~5-6 bullet items per quadrant.
    - **Prefixes**: Must include site prefixes (`[Gloria]`, `[N2]`, `[N3]`) for every item.
    - **Summarization**: Focus on executive-level statements. The 120-char guideline is conservative; visual review shows quadrants can handle 150-160 chars comfortably.
    - **UG Only**: Shafts & Winders items are filtered out of the main HEAL slide.
- **Safety Box**: Use "Good" or "Caution" (for MTCs). Operational notes go in the blue comment ribbon, not the safety box.
- **BEV Slides**:
    - Keep bullets concise (3 per fleet).
    - Cap battery themes at 4 items.
- **Apostrophes**: Avoid apostrophes inside single-quoted strings to prevent build errors.

## 4. Tooling & Environment
- **Dev Server**: Run `npm run dev` from `weekly-report-generator/`.
- **Slide Capture**: Run capture script from the repo root while the dev server is running.
- **Native Capabilities**: Use Antigravity's native file reading for PDFs and images. (Replaces old CLI workflows).
