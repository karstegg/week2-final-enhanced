# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Navigate to the React application directory first
cd weekly-report-generator

npm run dev     # Start development server (opens at http://localhost:5173)
npm run build   # Build for production (TypeScript check + Vite build)
npm run lint    # Run ESLint with strict TypeScript rules
npm run preview # Preview production build locally

# PDF conversion utility (from root directory)
node convert-pdf-to-images.js "<input.pdf>" "<output/dir>" "<base-name>"

# Slide capture for review (from root directory)
node capture-slides.js  # Requires dev server to be running
```

## Architecture Overview

This is a **React + TypeScript + Vite** application that generates multi-slide weekly engineering reports for mining operations. The architecture is designed around a **data-driven, single-source-of-truth** pattern.

### Core Design Pattern

**Data → Components → Slides → Print/PDF**

The entire application revolves around `src/data/reportData.ts` which contains all report content. Components automatically reflect changes to this data file without requiring code modifications.

### Key Files Structure

```
src/
├── data/reportData.ts          # SINGLE SOURCE OF TRUTH - edit this to update reports
├── App.tsx                     # Main orchestrator, handles navigation & print
├── components/
│   ├── slides/                 # Individual report slides (7 slides total)
│   │   ├── TitleSlide.tsx      # Cover page with equipment images
│   │   ├── IndexSlide.tsx      # Table of contents
│   │   ├── HealSlide.tsx       # Highlights/Emerging/Actions/Lowlights
│   │   ├── SitePerformanceSlide.tsx  # Individual site metrics
│   │   ├── ShaftsWindersSlide.tsx    # Shafts & Winders performance
│   │   ├── BevPerformanceSlide.tsx   # Battery Electric Vehicle data
│   │   └── TrendChartSlide.tsx       # Reusable chart display
│   └── shared/                 # Reusable components
│       ├── AvailabilityBar.tsx # Color-coded percentage bars
│       ├── Footer.tsx          # Consistent footer across slides
│       └── PrintLayout.tsx     # Special layout for PDF generation
```

### Data Structure (reportData.ts)

The `ReportData` interface defines the complete structure:

- **Week metadata**: `weekNumber`, `dateRange`
- **Cover images**: Equipment photos with positioning
- **HEAL data**: Highlights, Emerging issues, Actions, Lowlights (by site)
- **Shafts & Winders**: Performance metrics and commentary
- **Sites**: Nchwaning 2, Nchwaning 3, Gloria (each with availability, breakdowns, trends)
- **BEV**: Battery Electric Vehicle performance data and operator scores

### Image Organization

Images are organized by week in `/public/images/Week-XX/` folders:
- Trend charts and performance dashboards
- Equipment photos for cover page
- Footer and logo images

Image paths in `reportData.ts` use `/images/Week-XX/filename.png` format.

### Weekly Update Workflow

To generate a new weekly report:

1. **Update reportData.ts**: Change week number, dates, and all content
2. **Add new images**: Create `/public/images/Week-XX/` folder with new charts/screenshots
3. **Update image paths**: Modify image references in reportData.ts to point to new week folder
4. **No code changes needed**: Component architecture automatically reflects data changes

### Print/PDF Generation

- Application includes print-optimized CSS (`print-styles.css`)
- All slides sized at 960px × 720px for consistency
- Print button in UI renders all slides in `PrintLayout` component
- Colors and layouts optimized for PDF output

### Component Data Flow

```
reportData.ts → App.tsx → Slide Components → Shared Components
     ↓
Static images from /public/images/Week-XX/
```

Each slide component receives relevant data via props and renders using shared components like `AvailabilityBar` for consistent styling.

### Technology Stack

- **React 18.2** with **TypeScript** (strict mode)
- **Vite 5.2** for fast development and building  
- **Tailwind CSS 3.4** for styling with custom print styles
- **Lucide React** for icons
- **ESLint** with TypeScript rules for code quality

### TypeScript Interfaces

Strong typing prevents data errors:
- `ReportData`: Main data structure
- `SitePerformance`: Individual site metrics
- `Availability`: Equipment availability with targets

### Development Notes

- Hot reload via Vite for instant feedback during data updates
- Modular slide system makes adding/removing slides straightforward
- All slides are responsive and print-ready
- Image handling includes error states for missing assets
- Consistent footer and navigation across all slides

The architecture prioritizes maintainability and ease of weekly updates, requiring only data file modifications for new reports.

## Project Structure

This repository contains:
- **weekly-report-generator/**: React application for generating reports
- **convert-pdf-to-images.js**: Utility for converting PDF dashboards to PNG images
- **capture-slides.js**: Automated screenshot capture tool for slide verification  
- **.windsurf/workflows/**: Automated workflows for report updates and validation
- **cascade_directives.md**: Core principles and validation rules for report generation

## Automation Workflows

The project includes several automated workflows in `.windsurf/workflows/`:
- **weekly-report-update.md**: Main orchestration workflow for weekly updates
- **update-all-data-sources.md**: Consolidated data extraction from CSV files and images
- **review-slides.md**: Automated slide screenshot capture and verification
- **review-heal-matrices.md**: HEAL slide validation with strict formatting rules

## Data Sources and Extraction

Report data comes from two sources:
1. **Primary**: CSV files in `weekly-report-generator/data-extract/` (n3.csv, bev.csv, gloria.csv, etc.)
2. **Fallback**: Manual image analysis from `public/images/Week-XX/` folders

Data extraction follows CSV-first logic with image fallback when CSV files are unavailable.

## Critical Business Rules

- **Data Segregation**: Main HEAL slide must never contain Shafts & Winders data
- **BEV Isolation**: BEV data exclusively appears on the BEV Performance slide
- **Content Curation**: All HEAL matrix content must fit within fixed-size boxes without scrollbars
- **Color Coding**: Availability bars use precise thresholds (Green: ≥85%, Yellow: 80-84.9%, Red: <80%)
- **BEV Service Compliance**: Values must be sourced from Nchwaning 3's maintenance compliance results

## Branch Strategy

Weekly updates should be performed on dedicated branches following the pattern `week-XX` for organized development and review.