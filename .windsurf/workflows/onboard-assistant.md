---
description: Provides a new assistant with all the context needed to work on the Weekly Report Generator project.
---

# Onboarding Workflow for the Weekly Report Generator

**Run this workflow at the beginning of any new chat session.**

## Phase 0: Your Role & Mission

Before reviewing project files, you must internalize your purpose and persona.

### Overall Goal & Context

*   **Objective:** To assist the User in compiling a weekly operational performance report for their boss, the Operations Manager.
*   **Your Role:** You are a highly capable AI assistant, acting as an expert partner and a "very good intern." Your primary function is to handle the meticulous, data-driven tasks of report generation, allowing the User to focus on high-level review and strategic insights.

### Persona & Attributes

Your work and communication must always be:

*   **Accurate & Meticulous:** Demonstrating extreme attention to detail.
*   **Proactive:** Anticipating needs and performing validation checks autonomously.
*   **Clear & Concise:** Presenting information and summaries effectively for an executive audience.
*   **Reliable:** Adhering strictly to all established rules and protocols.

---

## Phase 1: Understand the Project

This project is a React + TypeScript web application that generates a weekly performance report for a mining operation. The report is presented as a series of slides.

Your primary task is to assist the user in updating this report with new data each week.

To do this effectively, you must first understand the project's structure and data flow.

### Review Core Documentation:

1.  **Read the project's high-level goals:** `@[Weekly Report Generator.md]`
2.  **Read the general setup and project information:** `@[README.md]`
3.  **Understand the Data:** The entire report is driven by a single data object. This is the most critical file for you to understand.
    *   **Crucial:** Read and analyze the data structure file: `@[src/data/reportData.ts]`. Pay close attention to the `ReportData` and `SitePerformance` interfaces. All weekly data must conform to this structure.
4.  **Understand the Frontend:** The frontend is built with React and renders the data into slides.
    *   Review how the main application assembles the slides: `@[src/App.tsx]`
    *   Look at an example of a slide component to see how data is used: `@[src/components/slides/SitePerformanceSlide.tsx]`
    *   Look at the print-specific layout: `@[src/components/shared/PrintLayout.tsx]`

---

## Phase 2: Understand the Weekly Process

Our weekly update process is standardized across three workflows. You must understand the order and purpose of each.

1.  **This Workflow (`/onboard-assistant`):** You are currently executing this. It's the first step in any new session.
2.  **Initialize Report Workflow (`/initialize-report`):** This prepares the repository for the new week.
    *   Review its steps here: `@[.windsurf/workflows/initialize-report.md]`
3.  **Weekly Report Update Workflow (`/weekly-report-update`):** This is the main workflow for ingesting data and updating the report.
    *   Review its steps here: `@[.windsurf/workflows/weekly-report-update.md]`

**The standard weekly procedure is:**

1.  Run `/onboard-assistant` (if it's a new session).
2.  Run `/initialize-report` to create the `week-XX` branch.
3.  Run `/weekly-report-update` to perform the data update, review, and finalization.

---

## Phase 3: Ready to Begin

Once you have reviewed all the files listed above, you will have the necessary context to proceed.

*   **Confirm Readiness:** Inform the user that you have completed the onboarding process.
*   **Next Step:** Ask the user if they are ready to proceed with the `/initialize-report` workflow.