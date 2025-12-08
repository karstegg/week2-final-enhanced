---
description: Orchestrates the end-to-end process of updating the weekly report with new data.
---

# Weekly Report Update Workflow

This workflow guides you through the process of updating the report for a new week.

## Phase 1: Data Ingestion

1.  **Request Data:**
    *   Ask the user to provide the raw data for the new week. This usually comes in the form of text, CSVs, or images pasted into the chat.
    *   **Reminder:** "Please provide the data for the new week (Production, Availability, Safety, HEAL points, etc.)."

2.  **Update Data Source:**
    *   Once the user provides the data, update `src/data/reportData.ts`.
    *   **IMPORTANT:** Do not partially update. Ensure all fields (Week Number, Date Range, Cover Images, HEAL, Sites, etc.) are considered.
    *   If specific data is missing, ask the user for clarification or use placeholders if agreed upon.

## Phase 2: Verification & Review

1.  **Visual Verification:**
    *   If the development server is running, use the browser tool to preview the report.
    *   If not, you can rely on reading the code or asking the user to run `npm run dev`.

2.  **Review Slides:**
    *   Run the `review-slides` workflow to capture screenshots and verify the visual output.
    *   // turbo
    *   `@[.agent/workflows/review-slides.md]`

3.  **Review HEAL Matrices:**
    *   Run the `review-heal-matrices` workflow to ensure the text content is concise and correctly categorized.
    *   // turbo
    *   `@[.agent/workflows/review-heal-matrices.md]`

## Phase 3: Finalization

1.  **User Approval:**
    *   Present the changes to the user.
    *   Ask: "Does the report look correct for this week?"

2.  **Documentation:**
    *   Create a summary of the updates in a new file: `Week_[Number]_Update_Summary.md`.
