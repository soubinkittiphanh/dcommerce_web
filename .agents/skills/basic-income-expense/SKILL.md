---
name: basic-income-expense
description: Governs the simple traditional basic income (direct cash in / receipt vouchers) and expense (direct cash out / payment vouchers) single-voucher bookkeeping module, including annual expense budget tracking and funding source impact (Budget vs POS Operation), separate from the advanced invoicing AR/AP modules.
---

# Simple Traditional Basic Income & Expense Skill

This skill governs the **Simple Traditional Basic Income** and **Basic Expense** modules in `dc_web` and `dc_api`, including **Annual Expense Budget Tracking & Source Impact**.

---

## 1. Architectural Boundary: Basic Income/Expense vs. Advanced AR/AP

It is critical to distinguish between these two separate accounting modules:

| Feature / Aspect | Simple Traditional Income & Expense (This Skill) | Advanced Accounts Receivable (AR) & Accounts Payable (AP) |
|---|---|---|
| **Web UI Pages** | [pages/admin/income/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/income/index.vue)<br>[pages/admin/expense/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/expense/index.vue)<br>[pages/admin/expenseBudget/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/expenseBudget/index.vue) | `pages/admin/accounting/ar/invoice`<br>`pages/admin/accounting/ar/receive`<br>`pages/admin/accounting/ap/invoice`<br>`pages/admin/accounting/ap/invoiceSettlement` |
| **Components** | [components/accounting/ArReceivable.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/accounting/ArReceivable.vue)<br>[components/accounting/ApPayment.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/accounting/ApPayment.vue) | Dedicated AR/AP invoicing, line-item grid, settlement matching components |
| **Backend API** | `dc_api/src/income/` (`/api/finanicial/ar/header`)<br>`dc_api/src/payment/header/` (`/api/finanicial/ap/header`)<br>`dc_api/src/expenseBudget/` (`/api/expense-budget`) | `dc_api/src/AR/` (`/api/ar/invoice`, `/api/ar/receive`)<br>`dc_api/src/AP/` (`/api/ap/invoice`, `/api/ap/settlement`) |
| **Transaction Nature** | **Direct single-voucher cash transactions**: Immediate cash in / cash out recording without invoicing. | **Accrual / Multi-stage Invoicing**: Invoices, line items, credit terms, partial settlements, vendor bills, 3-way matching, aging schedules. |
| **Voucher Structure** | Single header record with DR account, CR account, currency, funding source (`POS_SALE` vs `BUDGET`), and total amount. | Multi-line invoices linked to customer/vendor accounts, tax lines, and payment allocations. |

---

## 2. Key Domain Directories & Files

### Frontend (`dc_web`)
- **Income View (Direct Cash In)**: [pages/admin/income/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/income/index.vue)
- **Expense View (Direct Cash Out)**: [pages/admin/expense/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/expense/index.vue)
- **Annual Budget Setup & Analytics**: [pages/admin/expenseBudget/index.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/pages/admin/expenseBudget/index.vue)
- **Income Receipt Dialog**: [components/accounting/ArReceivable.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/accounting/ArReceivable.vue)
- **Expense Payment Dialog (with Source & Headroom)**: [components/accounting/ApPayment.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/accounting/ApPayment.vue)
- **Directives & Utilities**: 
  - [plugins/comma-thousand.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/plugins/comma-thousand.js)
  - [util/myUtil.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/util/myUtil.js)
  - [common/index.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/common/index.js)

### Backend (`dc_api`)
- **Basic Income Module**:
  - Router & Controller: [src/income/router.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/income/router.js), [src/income/controller.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/income/controller.js)
  - Model: [src/income/model.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/income/model.js) (`ar_receive_header`)
  - Route Mount: `/api/finanicial/ar/header`
- **Basic Expense Module**:
  - Router & Controller: [src/payment/header/router.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/payment/header/router.js), [src/payment/header/controller.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/payment/header/controller.js)
  - Model: [src/payment/header/model.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/payment/header/model.js) (`payment_header` / `apPaymentHeader`)
  - Route Mount: `/api/finanicial/ap/header`
- **Annual Expense Budget Module**:
  - Router, Controller & Model: [src/expenseBudget/router.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/expenseBudget/router.js), [src/expenseBudget/controller.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/expenseBudget/controller.js), [src/expenseBudget/model.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/expenseBudget/model.js)
  - Route Mount: `/api/expense-budget`
- **Menu Seed Script**:
  - [seed_expense_budget_menus.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/seed_expense_budget_menus.js) (Seeds `EXP_BUD` Menu Header and menu lines for Budget, Expense, and Income)

---

## 3. Expense Funding Source & Budget Tracking Architecture

When creating or editing an expense in [ApPayment.vue](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/components/accounting/ApPayment.vue), users select between two funding impact sources:

```
                  ┌─────────────────────────────────────────┐
                  │       Expense Voucher (ApPayment)       │
                  └────────────────────┬────────────────────┘
                                       │
                     ┌─────────────────┴─────────────────┐
                     ▼                                   ▼
        ┌─────────────────────────┐         ┌─────────────────────────┐
        │  POS_SALE (Operational) │         │  BUDGET (Annual Source) │
        ├─────────────────────────┤         ├─────────────────────────┤
        │ • Deducts from store/   │         │ • Linked to             │
        │   POS daily sales flow  │         │   annual_expense_budget │
        │ • Does not hit annual   │         │ • Real-time headroom    │
        │   budget allocations    │         │   consumption check     │
        │ • Teal badge in table   │         │ • Purple badge in table │
        └─────────────────────────┘         └─────────────────────────┘
```

### A. Annual Budget Headroom Calculation
$$\text{Remaining Headroom} = \text{Allocated Amount} - \sum \text{Payments where } (\text{expenseSource} = \text{'BUDGET'} \land \text{isActive} = \text{true})$$
$$\text{Post-Payment Headroom} = \text{Remaining Headroom} - \text{Current Proposed Amount}$$

### B. Visual Status & Over-Budget Warning
- **Safe** ($< 80\%$ utilization): Green indicator.
- **Warning** ($\ge \text{thresholdWarningPercent}\%$): Amber alert.
- **Over-Budget** ($\text{Post-Payment Headroom} < 0$): Red banner warning with SweetAlert confirmation dialog before saving.

---

## 4. Core Bookkeeping & DR/CR Account Rules

This module records single-voucher cash receipts and disbursements directly to the Chart of Accounts (COA):

### A. Income Transactions (Direct Cash In / Receipt Voucher)
- **Debit (`drAccountId`)**: Cash on Hand or Bank Account (`Asset` type - account receiving cash).
- **Credit (`crAccountId`)**: Revenue Account (`Revenue` type - e.g. Sales, Service, Tuition, Other Revenue).
- **Default Voucher Numbering**: `REC{YY}{MM}{DD}{timestamp_last4}` (e.g. `REC2610081234`).

### B. Expense Transactions (Direct Cash Out / Payment Voucher)
- **Debit (`drAccountId`)**: Expense Account (`Expense` / `Cost` type - account incurring the cost).
- **Credit (`crAccountId`)**: Cash on Hand or Bank Account (`Asset` type - account disbursing cash).
- **Default Voucher Numbering**: `PAY{YY}{MM}{DD}{timestamp_last4}` or `EXP{YY}{MM}{DD}{timestamp_last4}`.

---

## 5. Multi-Currency & Rate Handling

1. **Auto-Populating Rate**:
   - Selecting a currency (`currencyId`) triggers `currencyChange()`, auto-populating `form.header.rate` with the currency's standard exchange rate.
2. **Base Currency (LAK) Conversion Preview**:
   - Real-time conversion display in Lao Kip (LAK):
     $$\text{Total LAK} = \text{totalAmount} \times \text{rate}$$
3. **Summary Metric Cards**:
   - Both pages calculate summary totals grouped by currency code (`paymentCurrencyGrouping`):
     - Displays distinct cards for each active currency (e.g. `LAK Net`, `THB Net`, `USD Net`, `CNY Net`).

---

## 6. API Specification & Payloads

### A. Annual Expense Budget Endpoints (`/api/expense-budget`)
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/find?year=2026&isActive=true` | Query active annual budgets with spent/remaining calculations |
| `GET` | `/find/:id` | Fetch single budget by ID with drilldown payment vouchers list |
| `GET` | `/summary/:year` | Summary analytics (total allocated, total budget spent, remaining, POS op-ex) |
| `GET` | `/check-headroom?budgetId=1&amount=500000` | Real-time headroom verification before saving payment |
| `POST` | `/create` | Create new annual budget allocation |
| `PUT` | `/update/:id` | Update budget allocation amount or settings |
| `PATCH` | `/toggle-status/:id` | Toggle active/inactive status |

### B. Income Endpoints (`/api/finanicial/ar/header`)
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/findByDate?date={"startDate":"...","endDate":"..."}` | Query receipts in date range with associations |
| `GET` | `/find/:id` | Fetch single receipt voucher by ID |
| `POST` | `/create` | Create new income receipt voucher |
| `PUT` | `/update/:id` | Update existing income receipt voucher |
| `DELETE` | `/delete/:id` | Soft delete / toggle active state |

### C. Expense Endpoints (`/api/finanicial/ap/header`)
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/findByDate?date={"startDate":"...","endDate":"..."}&expenseSource=BUDGET` | Query payments with optional source filter and budget association |
| `GET` | `/find/:id` | Fetch single payment voucher by ID with budget details |
| `POST` | `/create` | Create new expense payment voucher |
| `PUT` | `/update/:id` | Update existing expense payment voucher |
| `POST` | `/upload` | Bulk upload payment vouchers |
| `DELETE` | `/delete/:id` | Soft delete / toggle active state |

### D. Standard Expense Voucher Payload Structure
```json
{
  "bookingDate": "2026-10-08",
  "paymentNumber": "PAY2610085678",
  "payee": "Vendor / Department Name",
  "notes": "Annual Marketing Campaign Q4",
  "totalAmount": 1500000,
  "currencyId": 1,
  "rate": 1,
  "paymentId": 1,
  "drAccountId": 15,
  "crAccountId": 1,
  "expenseSource": "BUDGET",
  "budgetId": 1,
  "budgetImpactYear": 2026,
  "isActive": true,
  "update_user": 1
}
```

---

## 7. UI/UX Patterns & Guidelines

1. **Form Modal Lifecycle Pattern**:
   - Increment form key (`arFormKey += 1` or `apFormKey += 1`) when opening dialogs (`triggerDialog`, `editItem`) to ensure full component re-initialization and clear residual state.
2. **Number Formatting**:
   - Use `v-comma-thousand` directive in form input fields to display formatted numbers while typing.
   - Always strip commas (`totalAmount.toString().replace(/,/g, '')`) before submitting to the backend API.
   - Backend controllers ensure comma sanitization prior to database persistence.
3. **Date Range Defaulting**:
   - Default `startDate` to the first day of the current month (`getFirstDayOfMonth()`) and `endDate` to today (`new Date().toISOString().substr(0, 10)`).
   - Use watchers on `date` and `date2` to automatically trigger data re-fetching upon date selection.
4. **Source Filtering & Badges**:
   - Use `sourceFilter` to isolate `ALL`, `BUDGET`, or `POS_SALE` vouchers.
   - Display purple badge with budget tooltip for `BUDGET` and teal badge for `POS_SALE`.
5. **Mandatory Field Indicators & Validation**:
   - Explicitly append `*` to all mandatory field labels (e.g., `ເລກເອກະສານອ້າງອີງ *`, `ວັນທີ *`, `ຜູ້ຮັບການຊຳລະ *`, `ເນື້ອໃນການຊຳລະ *`, `ຈຳນວນເງິນ *`, `ສະກຸນເງິນ *`, `ອັດຕາແລກປ່ຽນ *`, `ປະເພດການຊຳລະ *`, `DR Account *`, `CR Account *`).
   - Use descriptive placeholders (e.g., `PAY261008001`, `0`, `ລະບຸລາຍລະອຽດການຈ່າຍ`) to guide user input.
6. **Defensive Dropdown/List Handling**:
   - Ensure all list getters/endpoints (`findAllCurrency`, `/api/ministries`, `/api/account/find`) unpack array data defensively with pure array fallback `[]` to prevent Vuetify `items` type check warnings (`Expected Array, got Object`).
7. **Printable Reports & Statements**:
   - **Basic Expense Report**: [common/basicExpensePrintTemplate.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/common/basicExpensePrintTemplate.js) generates an A4 landscape report with company header, date range filter info, KPI summary cards (All Net, Budget Sourced, POS OpEx), detailed transaction list, DR/CR accounts, and official signatures.
   - **Annual Budget Performance Report**: [common/annualBudgetPrintTemplate.js](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/common/annualBudgetPrintTemplate.js) generates an A4 landscape report summarizing annual budget allocations, spent amounts, remaining headroom, and status alerts.
   - **Single Budget Drilldown Statement**: Generates an A4 portrait itemized voucher statement for single-budget audits.


