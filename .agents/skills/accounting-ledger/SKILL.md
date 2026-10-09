---
name: accounting-ledger
description: Manages double-entry bookkeeping, Chart of Accounts (COA), General Ledger, Journal entries, Expenses, Incomes, and Profit & Loss (P&L) statements.
---

# Accounting & General Ledger Skill

This skill governs the **Accounting**, **Chart of Accounts (COA)**, **General Ledger**, and **Financial Statements** in `dc_web`.

---

## 1. Key Domain Directories & Files

- **General Ledger**: [pages/admin/generalLedger](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/generalLedger)
- **Chart of Accounts (COA)**: [pages/admin/chartAccount](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/chartAccount)
- **Income & Expense Entries**: [pages/admin/income](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/income), [pages/admin/expense](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/expense)
- **Profit & Loss (P&L)**: [pages/admin/pl](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/pl)
- **Bank Accounts & Ministries/Cost Centers**: [pages/admin/bankAccount](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/bankAccount), [pages/admin/ministry](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/ministry)
- **Accounting Components**: [components/accounting](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/accounting)

---

## 2. Core Business Logic & Workflows

### A. Chart of Accounts (COA) Structure
Standard Lao accounting classification:
- `1000 - 1999`: Assets (`ຊັບສິນ` - Cash, Bank, Receivables, Inventory)
- `2000 - 2999`: Liabilities (`ໜີ້ສິນ` - Payables, Loans)
- `3000 - 3999`: Equity / Capital (`ທຶນ`)
- `4000 - 4999`: Revenue / Income (`ລາຍຮັບ` - Sales, Service fees, Tuition)
- `5000 - 5999`: Cost of Goods Sold / Direct Cost (`ຕົ້ນທຶນ`)
- `6000 - 6999`: Operating Expenses (`ລາຍຈ່າຍບໍລິຫານ/ດຳເນີນງານ`)

### B. Double-Entry Rules
- Every journal transaction must maintain balanced debits and credits:
  $$\sum \text{Debit} = \sum \text{Credit}$$
- Support multi-currency booking with base exchange rate logging.

### C. Ministry & Cost Center Allocation
- Every expense and money advance should link to an operational division or Ministry (`ministry_id`) for segmental reporting.
