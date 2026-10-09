---
name: reporting-export
description: Standardizes Excel and PDF report generation, financial aggregations, multi-currency reporting, and interactive chart visualizations.
---

# Reporting & Data Export Skill

This skill provides guidelines and patterns for generating **Excel spreadsheets**, **PDF documents**, and **Visual Dashboards** in `dc_web`.

---

## 1. Key Libraries & Tools

- **Excel Export**: `exceljs`, `xlsx`
- **PDF Generation**: `jspdf-invoice-template`, `html2canvas`
- **Charts & Visualization**: `apexcharts` / `vue-apexcharts`, `echarts` / `vue-echarts`, `chart.js`
- **Date Range Selection**: `moment`, `vue2-datepicker`, `v-calendar`

---

## 2. Common Export & Reporting Patterns

### A. Excel Export Best Practices (using `exceljs` / `xlsx`)
- Include company header, report title, date range filter info, and generated timestamp at the top of the spreadsheet.
- Style summary/total rows with distinct background fill and bold text.
- Format numerical columns explicitly (currency, quantity, percentage) instead of plain strings.
- Auto-calculate column widths based on maximum cell content length.

### B. PDF Documents & Thermal Receipts
- Maintain responsive print stylesheets (`@media print`).
- For A4/A5 invoices: Standardize margins, page breaks (`page-break-inside: avoid`), company tax/contact header, and signature blocks.
- Ensure Lao fonts (e.g. `Noto Sans Lao`, `Phetsarath OT`) render properly when generating canvas/PDF.

### C. Multi-Currency Summary Aggregations
- When aggregating financial reports across currencies (LAK, THB, USD, CNY):
  - Always group totals by currency first (e.g. Total LAK: ..., Total THB: ..., Total USD: ...).
  - Provide an optional converted total in base currency (LAK) using the exchange rates of the report period.
