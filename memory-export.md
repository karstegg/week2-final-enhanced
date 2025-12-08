# Cascade Memory Export

## 1. Critical Learnings from Week 17 Update
- **Tags**: weekly_report, bev, trend_charts, heal
- **Summary**: Establishes source-of-truth priorities and formatting conventions for weekly updates.
- **Details**:
  - Use CSV files as the authoritative source for BEV availability/delays; regenerate from CSVs whenever corrected.
  - Trend charts must be validated first and treated as ground truth before populating HEAL or reportData.ts.
  - Only Nchwaning 3 uses explicit Diesel vs BEV labels (DT-Diesel/FL-Diesel vs DT BEV/FL BEV).
  - Avoid apostrophes inside single-quoted strings to prevent esbuild failures.
  - Adopt consistent image naming `{Site} Weekly Availability Chart Week{N}.png`.
  - Markdown extraction is acceptable when PDFs cannot be read.
  - Follow the pre-capture checklist covering charts, HEAL alignment, BEV CSV sourcing, N3 labeling, service compliance, breakdowns, and apostrophe-free strings.

## 2. Key Learnings from Week 20 Update
- **Tags**: bev_slide, color_coding, safety_status, validation
- **Summary**: Documents slide component expectations and data validation rules from Week 20 retro.
- **Details**:
  - BEV breakdown rendering expects specific prefixes; simplify parsers when simplifying data.
  - Provide concise BEV critical issue summaries (3-4 bullets) from Epiroc reports.
  - Battery themes must stay short and action-focused.
  - Availability color thresholds: Green ≥85%, Amber 80-84%, Red <80% (implemented via `target - 5`).
  - Safety status should reflect actual incidents (use "Caution" when MTCs occur).
  - Trend charts remain mandatory validation prior to reporting.
  - Use placeholders when charts are unreliable and document HEAL removals when irrelevant.
  - Ensure component styling supports safety statuses and keep BEV data simple.

## 3. BEV Breakdown Source Rule
- **Tags**: bev, data_source, component_contract
- **Summary**: Defines primary sources and formatting for BEV breakdown content in `reportData.ts`.
- **Details**:
  - Use the Epiroc Weekly Report (PDF/MD) as the primary source for detailed BEV breakdowns; CSVs fall back when needed.
  - Preserve `Top causes:` and `Top machines:` prefixes so `BevPerformanceSlide` displays correctly.
  - Include concise issue descriptions with durations per machine.

## 4. Session Learnings from Week 18 Update
- **Tags**: workflows, trend_charts, heal, placeholders
- **Summary**: Captures Week 18 operational lessons.
- **Details**:
  - Request trend charts before all other data to avoid rework; treat them as ground truth.
  - TrendChartSlide handles missing assets via placeholder text blocks.
  - HEAL data provided as text files reduces parsing friction—prefer this input.
  - Clarified BEV data source priorities (CSV for availability; Epiroc for narrative) and maintained N3 Diesel/BEV labeling.
  - Keep HEAL items concise (≤120 chars) and manageable (≤3-4 items per quadrant).
  - Reconfirm that dev server + capture script two-terminal flow works reliably.
  - Added validation checklist for chart vs data alignment.

## 5. Week 18 Completion Status
- **Tags**: status, validation, slides
- **Summary**: Week 18 branch `week-18` committed (hash `dcc19af`).
- **Details**:
  - All trend chart values validated (site-specific percentages listed for Gloria, N2, N3, BEV, Shafts & Winders).
  - HEAL updated with CAS L9 priorities and 65CV01 issue; 11/11 slides verified.
  - `Week_18_Update_Summary.md` created; ready for PDF & merge.

## 6. Week 19 Session Learnings – Data Refinement & File Structure
- **Tags**: file_paths, bev_slide, heal_text, safety_box
- **Summary**: Highlights pitfalls uncovered in Week 19 update.
- **Details**:
  - Two `reportData.ts` copies exist; only `weekly-report-generator/src/data/reportData.ts` is active.
  - BEV slide parsing requires `Total delay/Top causes/Top machines` prefixes—no free-form text.
  - HEAL entries truncate beyond ~90-100 chars; keep concise.
  - Safety box reserved strictly for incidents; operational notes go into blue comment ribbon.
  - Distinguish N3 Diesel vs BEV datasets explicitly.
  - Restart dev server if data changes do not hot-reload.

## 7. `.windsurf/workflows` Directory Location
- **Tags**: workflows, filesystem
- **Summary**: Workflow files live at repo root `.windsurf/workflows/`, not under `weekly-report-generator/`.
- **Details**:
  - Reference workflow files using root-relative paths (e.g., `.windsurf/workflows/initialize-report.md`).

## 8. Onboarding Summary – Weekly Report Generator
- **Tags**: onboarding, project_overview
- **Summary**: Provides project purpose, slide list, key rules, and workflow steps.
- **Details**:
  - Entire report driven by `weekly-report-generator/src/data/reportData.ts`.
  - Eleven-slide structure enumerated; key components and shared utilities listed.
  - Core rules: CSV-first, trend charts as truth, N3 Diesel/BEV naming, BEV service compliance source, HEAL site prefixes, file path.
  - Standard workflow: /initialize-report → data placement → /weekly-report-update → /review-slides → /review-heal-matrices → commit.

## 9. Active Data File Path Reminder
- **Tags**: file_paths
- **Summary**: Always edit `weekly-report-generator/src/data/reportData.ts`; ignore root `src/data/reportData.ts`.
- **Details**:
  - Start dev server from `weekly-report-generator/`.

## 10. Raw Data Storage Convention
- **Tags**: data_management
- **Summary**: Raw weekly data lives in `weekly-report-generator/public/images/WeekXX/`.
- **Details**:
  - Copy (not move) CSVs to `weekly-report-generator/data-extract/` when necessary to preserve originals.

## 11. HEAL Slide Capacity Rule
- **Tags**: heal_slide, ui_limits
- **Summary**: HEAL quadrants safely display ~5-6 bullet items each.
- **Details**:
  - Consolidate items rather than shorten text to avoid overflow.

## 12. Slide Copy Concision Practice
- **Tags**: content_style
- **Summary**: Keep BEV themes and breakdown text tight to prevent overflow; limit lists to 4-5 bullets.
- **Details**:
  - After extracting complex data, summarize for user confirmation before editing `reportData.ts`.

## 13. CSV-First for Structured Fields
- **Tags**: data_source
- **Summary**: Prefer CSV inputs for availability, breakdowns, service compliance, replacements.
- **Details**:
  - Use images only for narratives not captured in CSV; CSV is source-of-truth when both exist.

## 14. Gemini CLI PDF Support
- **Tags**: tooling, gemini
- **Summary**: `gemini-cli` can ingest PDFs directly in addition to images.

## 15. WhatsApp MCP Server Usage
- **Tags**: data_sources, whatsapp
- **Summary**: WhatsApp MCP server available for extracting engineer updates (e.g., Sello Sease at `27726353694@s.whatsapp.net`).
- **Details**:
  - Use for retrieving daily reports, status updates, discrepancies.

## 16. Cascade-First Extraction Rules
- **Tags**: extraction, tooling
- **Summary**: Use Cascade image/file reading first; avoid external CLIs unless needed.
- **Details**:
  - Reference files inline using `@relative/path`.
  - Prefer minified JSON only when specifically requested; ensure BEV service compliance sourced from N3 maintenance.

## 17. Tooling Priority & Slide Generation Process
- **Tags**: tooling, bev, workflows
- **Summary**: Establishes Gemini CLI as primary extraction tool, Claude as fallback.
- **Details**:
  - Commands for Gemini/Claude provided; use service compliance from N3 maintenance, set null if unscheduled.
  - HEAL content needs structured technical root causes.
  - Slide capture: run dev server from `weekly-report-generator/`; run capture script from repo root.

## 18. PDF & Screenshot Workflow
- **Tags**: pdf_generation, capture
- **Summary**: Describes two-step process (capture slides via `capture-slides.js`, then assemble PDF with `create-pdf-from-existing-screenshots.js`).
- **Details**:
  - Device scale factor 2 for high-res output; outputs to `screenshots/review` before PDF assembly.

## 19. Footer Height Options
- **Tags**: ui_layout
- **Summary**: Footer component supports variable heights via Tailwind classes.
- **Details**:
  - Default `h-32` for most slides; `h-20` for site performance, trend charts, BEV; set via `footerHeight` in `reportData.ts`.

## 20. HEAL Site Prefix Requirement
- **Tags**: heal_slide
- **Summary**: Each HEAL item must include site prefixes (`Gloria`, `N2`, `N3`, `All`).

## 21. Footer Positioning Constraint
- **Tags**: ui_layout
- **Summary**: Footer uses `absolute -bottom-4`; do not change to `bottom-0`. Use screenshot-based PDF generation instead of print CSS tweaks.

## 22. HEAL UG-Only Content
- **Tags**: heal_slide
- **Summary**: Shafts & Winders items removed from HEAL; component filters them defensively.

## 23. HEAL Content Summarization
- **Tags**: heal_slide, content_style
- **Summary**: Summarize HEAL bullets before slide capture to avoid overflow; focus on executive-level statements.

## 24. Gemini CLI Command Pattern
- **Tags**: tooling, gemini
- **Summary**: Use `gemini` command with quoted prompt and `@"<path>"` attachment for non-interactive runs.

## 25. CLI Attachment Strategy (Gemini via npx)
- **Tags**: tooling, gemini
- **Summary**: Preferred structure `echo "<prompt> @'<path>'" | npx @google/gemini-cli` for non-interactive processing.

## 26. Claude CLI Attachment Strategy
- **Tags**: tooling, claude
- **Summary**: Pipe prompt into `claude --add-dir <directory>` with `--print json` when structured output required.

## 27. Future Improvement – Editor Panel
- **Tags**: future_work
- **Summary**: Documented idea for right-side editor panel to modify active slide data (file `Future-Improvement-EditorPanel.md`).

## 28. WhatsApp MCP Reminder
- **Tags**: data_sources
- **Summary**: Use WhatsApp MCP for retrieving site engineer updates; server confirmed running.

## 29. Gemini CLI Reliability Caveat
- **Tags**: tooling
- **Summary**: Gemini CLI may fail silently on PDFs; if so, request alternate summaries or text input.

## 30. CSV Naming & Placement Guidance
- **Tags**: data_management
- **Summary**: Place weekly CSVs in `weekly-report-generator/data-extract/` with descriptive filenames; latest file assumed current unless noted.

## 31. Service Compliance & Battery Mapping
- **Tags**: bev, data_source
- **Summary**: BEV service compliance comes strictly from N3 Weekly Maintenance compliance; map charger faults/themes per provided sources.

## 32. BEV Detail Prefix Enforcement
- **Tags**: bev_slide
- **Summary**: `keyBreakdowns.details` strings must begin with `Top causes:` or `Top machines:` for Slide 11 parser compatibility.

## 33. BEV Presentation Style
- **Tags**: bev_slide, ux
- **Summary**: Keep BEV bullets concise (3 per fleet), include total delay, top causes, top machines; cap battery themes at four with `+N more` if needed.

## 34. BEV Unit Identification
- **Tags**: bev_slide
- **Summary**: Include unit IDs in BEV key breakdown bullet text for clarity (e.g., DT0171 hydraulic leak).

## 35. BEV Slide Overflow Handling
- **Tags**: bev_slide
- **Summary**: If Slide 11 overflows, drop least-critical theme (e.g., audits) before altering layout; keep ≤4 bullets.

## 36. Memory on Branch Status
- **Tags**: workflow_status
- **Summary**: Branch `week-08` currently active; awaiting images/date range before running /weekly-report-update.

## 37. Slide Capture Output Convention
- **Tags**: capture
- **Summary**: `capture-slides.js` saves to `weekly-report-generator/screenshots/review/slide-X.png` (non-zero-padded).

## 38. Slide Capture Terminal Requirement
- **Tags**: capture, dev_server
- **Summary**: Keep dev server running in one terminal (`weekly-report-generator/`); run capture script from repo root in a second terminal.

## 39. Week Number & Branch (Historical)
- **Tags**: workflow_status
- **Summary**: Week number 6 noted with branch `week-06`; next step was /weekly-report-update (context-specific).

## 40. PDF Viewing Guidance
- **Tags**: tooling
- **Summary**: Use CLI tools (preferably Gemini) to view PDFs when needed.

## 41. Blue Ribbon Styling Notes
- **Tags**: ui_style
- **Summary**: Standard vs overlay ribbon styles documented for performance vs trend chart slides (padding, font size differences).

## 42. Project Component Map
- **Tags**: architecture
- **Summary**: Maps data file, assembly components, slides, shared components, and entry points.

## 43. Availability Threshold Consistency
- **Tags**: color_coding
- **Summary**: All slides standardized to ≥85 green, 80-84 amber, <80 red; S&W slide uses target & 94% thresholds.

## 44. Trend Chart Cross-Verification Mandate
- **Tags**: validation
- **Summary**: Before finalizing, cross-check weekly averages and individual fleet percentages against trend chart images.

## 45. BEV Safety Messaging Rule
- **Tags**: content_style
- **Summary**: Avoid redundant "availability below target" phrasing; focus on root causes.

## 46. N3 Availability Target Reminder
- **Tags**: targets
- **Summary**: Standard availability target for N2, N3, Gloria is 85% (overall and per fleet).

## 47. Missing Breakdown Placeholder
- **Tags**: data_rules
- **Summary**: If below-target fleet lacks breakdown data, add "No major breakdowns reported" instead of leaving blank.

## 48. Weekly Average Alignment Rule
- **Tags**: validation
- **Summary**: Site performance "Weekly Avg" values must match final trend chart datapoints.

## 49. AvailabilityBar & Component Map Reminder
- **Tags**: architecture
- **Summary**: Reference map for where data flows into slides/components.

## 50. Consistent Color Coding Implementation
- **Tags**: ui_consistency
- **Summary**: Reinforces same thresholds across site slides, S&W, and BEV logic adjustments.

## 51. Data Verification Discipline
- **Tags**: validation
- **Summary**: Verify *all* corresponding data points between related slides (trend vs performance) before concluding review.

## 52. Dev Server HMR Note
- **Tags**: dev_process
- **Summary**: No need to restart dev server between `reportData.ts` edits when using HMR; ensure port 5173 already running before restarting.

## 53. HEAL Text Summaries
- **Tags**: heal_slide
- **Summary**: Raw HEAL text tends to overflow; summarize proactively for executive readability.

## 54. Minimal CSV Schemas
- **Tags**: data_extract
- **Summary**: Defines schemas for `bev-themes.csv`, `bev-breakdowns.csv`, `service-compliance.csv`, `replacements.csv`; missing columns require clarification.

## 55. Gemini CLI Non-Interactive Usage
- **Tags**: tooling
- **Summary**: Follow `gemini "<prompt>" @"<path>"` pattern; pass full path with `@` prefix.

## 56. Cascade-First Extraction Mandate
- **Tags**: extraction
- **Summary**: Prefer Cascade built-in image reading; rely on WhatsApp MCP when engineers send data outside repo.

## 57. Trend Chart Data Confirmation
- **Tags**: validation
- **Summary**: Weekly averages and equipment percentages must align with trend chart data across slides.

## 58. Standard Workflow Overview
- **Tags**: workflows
- **Summary**: Recaps full report workflow (initialize → update → review → capture/PDF).

## 59. Footer Style Consistency
- **Tags**: ui_style
- **Summary**: All slides share consistent color thresholds & layout specifics; footers align with predetermined classes.

## 60. Safety Box Usage Guidance
- **Tags**: safety_reporting
- **Summary**: Use "Good" or "Caution" statuses; include incident descriptions when applicable.
