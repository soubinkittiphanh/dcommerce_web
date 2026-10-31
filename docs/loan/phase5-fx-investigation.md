# Phase 5, Part A1: how the POS stores currencies and exchange rates, and how its business date works

Investigated read-only on 2026-10-31, on branch `feature/loan-module`, using local `dcommerce_loan_dev` (a copy of `dcommerce_dev`) and the code. No POS file was changed. Line numbers refer to dc_api / dc_web on this branch.

## 1. Exchange rates

### 1.1 `currency` table (`dc_api/src/currency/model.js`)
| Column | Type | Meaning |
|---|---|---|
| `code`, `name`, `symbol` | string | LAK, USD, THB… |
| `rate` | **DOUBLE** | the **current** rate only |
| `exchangeDirection` | ENUM `local_to_foreign` / `foreign_to_local` | how to read `rate`: `foreign_to_local` = base units per 1 foreign unit (LAK per USD); `local_to_foreign` = foreign units per 1 base unit |
| `isLocalCCY` | boolean | the base currency |
| `isActive` | boolean | |

**Local data:** LAK rate 1, `isLocalCCY` = 1. USD 21,200 and THB 670, both `foreign_to_local`.

**Gaps:**
- There is **no decimals or minor-unit column**. The loan keeps decimals in `ln_currency_rule`; see `rounding-policy.md`.
- There is **no rate history and no rate date.** `CurrencyAudit` (`src/currency/auditModel.js`) keeps JSON snapshots of create, update and delete for audit (3 rows locally). It is not a dated rate source: there is no rate type, no effective date, and no maker-checker.

### 1.2 How POS converts amounts
`convertToHomeCurrency` is copied in four places:
- `src/GL/adbReportController.js:445`;
- `src/GL/accountingPostingService.js:93`;
- `src/sales/controller.js:1307`;
- `src/shippingOrder/controller.js:258`.

In every copy it uses the **current** `currency.rate` with both directions, assumes LAK as the database base, then converts LAK to the local currency. A balance converted today therefore uses today's rate, whatever the rate was when it was booked.

### 1.3 `general_ledger` (`src/GL/model.js`)
| Column | Type | Holds |
|---|---|---|
| `debit`, `credit` | DECIMAL(15,2) | amount in the **transaction currency** |
| `localDebit`, `localCredit` | DECIMAL(15,2) | amount in the **base currency** |
| `rate` | DECIMAL(15,6) | base units per 1 transaction unit |
| `currencyId` | INT, nullable | transaction currency |

**Evidence in local data:**
- Manual GL row: `debit` 50.00 / `localDebit` 1,060,000.00 at rate 21,200.
- Fixed-asset rows: 66.67 / 1,400,070.00 at rate 21,000.
- POS bank revaluation rows: `debit = credit = 0`, local amounts only (for example 20,000,000 at rate 20,000).

**Base-only rows are an existing POS pattern** (`src/currency/revaluationService.js`, `POST /api/currency/revalue`). That service:
- revalues one foreign bank account at a closing rate;
- compares the GL base balance of the bank's chart account with balance × rate;
- posts the difference to auto-created accounts **4008 Unrealized Exchange Gain** or **5108 Unrealized Exchange Loss**, with `debit = credit = 0`.

### 1.4 Documents carry their own rate (corrected 2026-10-31 after the owner's review)
| Document | Currency | Rate column | How POS posts it |
|---|---|---|---|
| `saleHeader` | `currencyId` (**base** from the POS screen) | `exchangeRate` DOUBLE | `local = total × rate` (`accountingPostingService.js:56–66`) |
| `saleLine` | `currencyId` (**the product's `saleCurrencyId`**) | `exchangeRate` DOUBLE (the currency's rate at sale time) | not posted per line; the header total is already in base |
| `arInvoiceHeader` | `currencyId` | `exchangeRate` **DECIMAL(15,2)** | `local = lineTotal × rate` per line, 2 decimals (`postingService.js:176`) |
| `arInvoiceLine` | **no currency column** | none | uses the header's rate |
| AR receipt / AP settlement | `currencyId` | `exchangeRate` | `cashPostingService.js:77, 122, 156, 264` |

**Direction:** every document rate is used as **base per 1 document unit** (multiply). That matches `foreign_to_local`. A `local_to_foreign`-style rate would be wrong on documents. On an invoice it would also be cut to 2 decimals (for example 0.000047 becomes 0.00).

**POS sale: lines vs header (corrects the earlier claim that "POS sales are always in the base currency").**
- **Each sale line has its own currency and rate.** In `dc_web/layouts/pos.vue` `generateSaleLine` (≈1470–1505), a line takes `currencyId = product.saleCurrencyId` and `exchangeRate = currency.rate`. `price` and `total` are in **that line's currency**. One sale can mix currencies (for example a USD car and LAK accessories).
- **The sale header is in base.** Its `total` is `grandTotal` (≈1562): the sum of each line converted to local with `CurrencyHelper.convertToLocal` at the line currency's current rate and direction. The header has `currencyId = local` and `exchangeRate = local rate` (≈2880, marked TODO).
- **The server stores what the client sends.** `sales/controller.js` (`createSaleHeader`, `createSaleHeaderV3`, `createSaleHeaderOnly`, `createSaleLineOnly`, `completeSaleWithLines`) does not recompute the header total or convert lines.
- **AR invoice from a POS credit order** (`AR/invoice/header/controller.js:684–732`):
  - the header copies the sale's base `total`, currency and rate;
  - each **invoice line copies the sale line's `price` and `total` in the line's own currency**, but invoice lines have **no currency column**.
  
  So for a USD car, the invoice header says LAK 315,000,000 while its line says 15,000.00. This is a POS defect (`pos-defects.md` #9). It matters to the loan: receipt allocations to invoice lines cannot use line amounts for a mixed or foreign-line invoice (see 1.4.1).
- **Manual AR invoices** (`components/accounting/ar/invoice/maintain`) have a currency and a rate on the header. A USD invoice is possible there.

#### 1.4.1 Other ways sales are created (checked 2026-10-31)
| Client | Endpoint | Header currency / rate | Line currency / rate |
|---|---|---|---|
| dc_web POS screen (`layouts/pos.vue`) | `POST /api/sale/create-header-only`, `create-line-only`, `complete-sale` (multi-payment), `/api/sale/create` | local / local rate | product `saleCurrencyId` / currency rate |
| dc_web `composables/pos/usePaymentProcessing.js` | `/api/sale/...` | `currencyId: 1` hard-coded (≈ lines 63, 93) | as sent by the cart |
| dc_web other forms (`OrderDetailPosCRUD`, quotation/reservation converters, `mixins/posHelpers.js`) | `/api/sale/...` | as sent (not inspected line by line) | as sent (not inspected line by line) |
| **dc_pos** (Flutter, `lib/service/sale_service.dart` → `POST api/sale/create`; screens `restaurant_pos_screen.dart:696–702`, `merchant_pos_screen.dart:707`) | `/api/sale/create` | `currencyId = the app's active currency`, **`exchangeRate: 1`** | **no currency or rate fields** on `SaleLine` (`lib/models/sale_line.dart`), so the DB defaults apply (rate 1, currency empty) |
| dc_mobile | — | **not present in this workspace** (`/dcommerce` contains Archieve, dc_api, dc_pos, dc_web, docs) | — |

**Findings:**
- A dc_pos sale in a non-base active currency carries rate 1 on the header, so `local = total × 1` would be wrong. This is a pre-existing dc_pos behaviour, and it is noted in `pos-defects.md` #9.
- The server never validates currency consistency between the header and its lines.

**Consequences for the loan (feeds addendum §8.4):**
- The vehicle's contract-currency price is on the **sale line** (`currencyId`, `price`/`total`, `exchangeRate`). The invoice open balance is in **base** (the header).
- A USD or THB loan can therefore settle a base-currency (LAK) invoice:
  - the principal's carrying base is the invoice base relieved;
  - the contract principal is proposed from the vehicle line's currency amount minus the down payment converted at the line rate;
  - the implied rate (base / contract) is checked against the line rate and the rate table.
- **Loan receipt allocations** must work off the invoice header's base, because line amounts can be in another currency. The AR receipt lines are allocated in proportion to the base of each invoice line, at the header rate for base lines and at the sale line's rate for foreign lines. Otherwise a single allocation line is used. That is a Phase 5 A8 implementation detail.
- **Normalizing line rates:** a sale line stores the raw `currency.rate`, whose meaning depends on that currency's `exchangeDirection`. The loan normalizes it to base per 1 unit with the currency's direction and records the normalized value.

### 1.5 Bank accounts
`bankAccount.currency` is an ENUM (LAK, USD, THB, CNY, EUR) and `balance` is a **DOUBLE** in the account's own currency. Locally there are 10 LAK and 2 USD accounts. `transactionEntry` (`debit`/`credit` DOUBLE) is always in the bank account's currency; it has no currency or rate column.

### 1.6 What the loan schema already has
- `ln_transaction` and `ln_journal_posting`: `currencyId`, `amount`, `baseAmount`, `exchangeRate`. Phase 4 writes rate `1` and base = amount.
- `ln_product_currency`: currencies allowed per product.
- `ln_currency_rule`: decimals and rounding mode per currency (LAK 0, USD 2, THB 2 by default).
- The catalog already has role `ROUNDING_DIFF` and tag `ROUND_DIFF`.
- `ln_gl_batch` keys EOD batches by currency.
- Phase 4 refuses non-base loans in `transactionService.baseCurrency()` (`src/loan/posting/transactionService.js:42`).

### 1.7 Conclusions for the design
1. The POS has **no dated, authorized rate**, so the loan needs its own: proposed `ln_exchange_rate` (addendum §8.2). The POS current rate can be copied into it as a PENDING row.
2. GL rows can carry everything we need: foreign amount, base amount, rate and currency. Base-only rows for FX and rounding follow an existing POS precedent.
3. POS screens that convert balances at today's rate (balance sheet Mode B for foreign bank accounts) will differ from GL base balances that were booked at historical rates. This is a POS-wide property, not caused by the loan. The loan reconciliation line will show it.
4. The loan writes document rates as base per 1 unit, like the POS documents. It never writes a `local_to_foreign` rate onto a POS document.
5. POS sales mix currencies by line, with the header in base. A foreign-currency loan may settle a base-currency invoice, as addendum §8.4 (revised) sets out.

## 2. Business date and manual close of business

### 2.1 The switch
SPF **`USE_BUSINESS_DATE`** (Y/N), seeded `N` at startup (`src/models/index.js:1027–1044`; remark "Enable POS Business Date tracking and Daily Open/Close check [Y/N]"). It is read only by the dc_web POS screen (`layouts/pos.vue:1170`). No dc_api code reads it.

### 2.2 The `businessDate` table (`src/businessDate/*`)
- **Rows:** `currentDate`, `lastWorkingDate`, `status` (OPEN/CLOSED). The latest row by `id` is "the" business date. It is created on first read from the last bank entry's date, or today.
- **What moves it:**
  - **COB:** `POST /api/accountDailyBalance/batch` (`accountDailyBalance/controller.js runCOBBatch`). It snapshots every active bank account's day into `accountDailyBalance` and **inserts the next date row**. It is started by hand from `pages/admin/reports/endOfDay` ("Run COB Batch"). No cron.
  - `POST /api/businessDate/advance`: inserts the next row with no snapshot.
  - **The microfinance module EOD** (`src/microfinance/batch/controller.js:225–236`): updates the OPEN row's `currentDate` to the next day. **This is a second, independent writer.**
- **`CLOSED` is never set** by any backend code (the only `'CLOSED'` writes are in `school/shift`).
- **Readers:**
  - `transactionEntry` controllers (the bank entry's `businessDate` column);
  - the COB daily snapshot;
  - the POS sale screen (booking date and the CLOSED block);
  - the loan module (Phase 4 bank adapter and the D8 EOD guard).

### 2.3 Behaviour with the switch on and off
| | `USE_BUSINESS_DATE = Y` (manual COB) | `USE_BUSINESS_DATE = N` (default) |
|---|---|---|
| POS sale booking date | `businessDate.currentDate` | calendar date |
| POS sale blocked | when status is `CLOSED` (never set by the backend today) | never |
| Who advances the POS date | COB by hand (and microfinance EOD, if used) | nobody, unless COB is run anyway |
| Bank entries' `businessDate` | the POS date | still the POS date, so it **goes stale** |
| Phase 4 loan EOD (D8: refuse while POS date < loan date) | works once COB has been run up to the loan date | **blocks permanently** once the loan date passes the stale POS date (`dcommerce_loan_dev`: POS 2026-04-09, loan 2026-10-29) |

### 2.4 Rules (plan A.6, decisions D7 and D8): **approved 2026-10-31**
- **`Y`:** loan EOD for loan date D runs only when the POS date is **later than** D, which means POS COB has closed day D, so no POS cash for D can still arrive. Today's check also accepts *equal* (D7).
- **`N`:** loan EOD for D runs when the calendar date in `Asia/Vientiane` is later than D. The POS date is ignored, and the loan's bank entries carry the loan business date (D8).
- **Both modes:**
  - loan EOD never advances the POS date;
  - the refusal message names the mode;
  - the EOD screen shows both dates and warns that the microfinance EOD also moves the POS date.
