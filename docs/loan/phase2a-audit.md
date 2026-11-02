# Loan Module Phase 2A — Audit of Antigravity Work (Step 0 + Step B)

Date: 2026-10-29. Auditor: Claude Code. Status: **audit only, nothing fixed yet.** Waiting for your review before Step C.

Severity: **S1** = blocks go-live / data-safety risk, **S2** = spec or control gap that must be fixed in 2A, **S3** = quality / consistency.

---

## 0. Read this first

### 0.1 The migration and seeds almost certainly ran on a REMOTE database (S1)
- The handover says "Local MariaDB 127.0.0.1, `dcommerce_demo`". **This is wrong.** `dc_api/src/config/dbClient.js:182` (`env_auto`, the config used by `src/config/env.js` → `src/models/index.js`) points to **host `150.95.31.23`**, database `dcommerce_demo`. Before my change, only `DB_NAME` could be overridden.
- Both seed scripts load `./src/models` and therefore use that host.
- Your local MariaDB has **no `dcommerce_demo` database and had no `ln_*` tables** in any schema before I started.
- So the remote `dcommerce_demo` probably now has: 66 `ln_*` tables, `chart_of_account.accountType` widened to include `'Off-Balance'`, about 190 loan seed rows, and a `LOAN` menu header with 4 menu lines.
- As you decided, **I did not connect to the remote at all**, so this is unverified. What to do with it is your call. Step C will deliver a DOWN script you can review and run there yourself.
- Also: any `node src/index.js` or any script that `require`s `src/models` **without** `NO_SYNC=true` runs `preSyncDataCleanup` (deletes orphan rows) and `sync({ alter })` against that remote host (`src/models/index.js:985-1004, 1072`).

### 0.2 What I changed (only these)
| Where | Change |
| :--- | :--- |
| git `dc_api`, `dc_web` | New branch `feature/loan-module` from `BEFORE CLAUDE` (`1f63709` / `7be510864`). `git status` was clean before and after. |
| `dc_api` commit `30c3baa` | `env_auto` reads `DB_HOST`/`DB_PORT`/`DB_USER`/`DB_PASSWORD`, with the old values as defaults (so behaviour is unchanged when they aren't set). |
| Local MariaDB | New DB `dcommerce_loan_dev` (clone of local `dcommerce_dev`) and new local user `loan_dev`, limited to that DB. A temporary `dcommerce_loan_synccheck` DB was created and dropped again. |
| `dc_api/logs.log` | The app logger appended about 3.5k lines during my local runs. It is tracked, so it shows as modified. I didn't revert it (no checkout/reset, per your rules). |

Every DB command went through a guard that printed the resolved host and aborted unless it was `127.0.0.1 dcommerce_loan_dev`. The local DB now also contains my audit test writes (described in B.4); it will be rebuilt in Step C.

### 0.3 Handover claims that are wrong
| Handover says | Reality |
| :--- | :--- |
| Local DB `127.0.0.1` | Remote `150.95.31.23` (see 0.1) |
| 54 tables | **66** `ln_*` tables (all 64 spec tables + `ln_tax_profile` + `ln_lookup_deferred_fee_presentation`) |
| productService does "versioning" | No versioning. `PUT /products/:id` edits the authorized row in place, including `productCode` and `version` |
| "Any mutation flips tax profile back to UNCONFIRMED" | `PUT /tax-profile` with `confirmationStatus: "CONFIRMED"` confirms it directly (tested) |
| Git: unstaged changes | You committed everything as `BEFORE CLAUDE` on `main` |
| `models/index.js` lines 248–310 / 319 | Actually one spread at ~319 and a second factory call at ~377 (see B.3) |

---

## Step 0 — spec claims checked against code

| # | Spec claim | Verdict | Evidence |
| :--- | :--- | :--- | :--- |
| 0.1 | `GL_MAP_AR_ACC`, `GL_MAP_CASH_ACC`, `GL_MAP_BANK_ACC` in `accountingPostingService.js` | **True** | `src/GL/accountingPostingService.js:37-42`. Other params: `GL_MAP_REV_ACC`, `GL_MAP_COGS_ACC`, `GL_MAP_INV_ACC`, `GL_MAP_AP_ACC`. **There is no tax/VAT param.** |
| 0.2 | `accountType` ENUM; `'Off-Balance'` excluded from balance sheet | **True, with caveats** | Model `src/account/model.js:15-16` has 5 values (no `'Off-Balance'`). Only the DB was altered. BS (`src/GL/adbReportController.js:525-535`) skips it. **Tested locally:** posted a 1,000 Dr 9001 / Cr 9002 memo entry → TB still balanced (both sides +1,000) and listed both memo rows; BS totals unchanged; P&L page (`dc_web/pages/reports/financial/pl`) is built from sales/AR/AP, not `accountType`, so it is unaffected. UI gaps: `dc_web/components/AccountForm.vue:63` hard-codes the 5 types, so Off-Balance accounts can't be created in the UI; the TB page has no label for the type. |
| 0.3 | `saleHeader.isPostedToAR/arPostedAt`; `ARReceiveLine` | **True** | `src/sales/model.js:50,56`; `src/AR/receive/line/model.js:8` (`allocatedAmount`). |
| 0.4 | Base currency | **The spec doesn't say; code uses `currency.isLocalCCY`** | `src/currency/model.js:23`; used by `shippingOrder`, `carcare`. **The seed doesn't use it**: it binds `currency.findAll({limit:3})` and makes the first row the default (LAK only because of id order). |
| 0.5 | Tax / VAT, "reuse POS tax-payable account" | **Partly wrong** | `tax` table (`src/tax/model.js`): `code`, `rate DECIMAL(5,4)`, `taxType`, `isDefault`, `isActive`, **`effectiveFrom`/`effectiveTo`**. **No GL account field, no `GL_MAP_*` for VAT, and POS posting does not post VAT.** There is no POS tax-payable account to reuse; one must be defined (Phase 2B decision). |
| 0.5 | Payment methods, bank accounts, branches, users/RBAC, customer | **Facts** | Payment methods = model `payment` (`src/paymentMethod/model.js`). Bank accounts = `bankAccount` (has `accountNumber`). **There is no branch table**: POS uses `location` (`saleHeader.locationId`), so spec `branchId` has no target table. RBAC = `role` (`level`, `permissions` JSON) + `user.roleId/groupId`; per-route check exists only in parking (`src/parking/validation.js:18` `checkRole`). Customer = `dynamicCustomer` model registered as `customer`. |
| 0.6 | Existing "mf" loan code | **Exists, leave alone** | `src/microfinance/` (cif, groups, collateral, products, accounts + `scheduleEngine.js`, journal, batch) is wired in `src/router/index.js:115+`. `scheduleEngine.js` uses floats, percent rates and 2-dp rounding, which conflicts with DECIMAL(20,4) and the no-float rule. Don't reuse it or touch it. |

---

## Step B — audit findings

### B.1 Migrations (S2)
- The repo convention (`.agents/skills/dc-api-core`) is a dated raw SQL file in the `dc_api` root, applied manually with `mysql … < file.sql`, plus Sequelize `sync` at startup. There is no migration tool and no DOWN scripts anywhere.
- The SQL applied **cleanly** to a fresh local clone: 66 tables, 0 errors. There are no `USE`/`DROP` statements and **0 foreign keys**.
- **Not reversible:** no DOWN script exists, and the `ALTER chart_of_account` has no undo.
- Proposed (Step C): keep the convention. `…_up.sql` (idempotent) + `…_down.sql` (drop `ln_*` in dependency order, restore the ENUM only if no `'Off-Balance'` rows exist), plus a tiny `scripts/loan_migrate.js up|down` that refuses non-local hosts unless `ALLOW_REMOTE=1`.

### B.2 Tables vs spec (OK)
- All 64 spec tables exist with the spec names. Nothing is missing or renamed.
- Extras: `ln_tax_profile` (Rev 5) and `ln_lookup_deferred_fee_presentation` (holds `IMMEDIATE`/`LIABILITY`/`CONTRA_ASSET_NET`).
- Sequelize models vs DDL: all 66 tables match on column names, types and nullability. I scripted the check; only `INTEGER`/`int(11)` formatting noise showed up.

### B.3 Core files (S2: one real bug)
- The diffs to `src/app.js`, `src/router/index.js` and `src/models/index.js` are additive (mount `/api/loan`, export router, register models).
- **Bug:** `src/models/index.js` calls `require("../loan/models")(sequelize, DataTypes)` **twice** (models at ~319, associations at ~377). Every loan model is defined twice. **Verified:** `db.lnProduct` is a different object from the one Sequelize has registered, and the registered copy has 0 associations. Fix: call the factory once.
- On local, with sync enabled, the app started; existing routes return 200: `/api/currency/findAll`, `/api/paymentMethod/find`, `/api/unit/find`, `/api/product/find`, `/api/user/find`, `/api/account/findAll`, `/api/gl/reports/trial-balance`, `/api/gl/reports/balance-sheet`. All 13 loan GET routes return 200. Unauthenticated request → 401.

### B.4 + B.12 Backend controls (S1/S2). All were tested by real requests on the local app.
| Control | Finding | Test result |
| :--- | :--- | :--- |
| Maker-checker on create | Missing. `createProduct` writes `authStatus:'AUTHORIZED'` immediately (`productService.js` create) | Created `AUDIT-T1` → `AUTHORIZED`, `makerId=1`, `checkerId=null` |
| Maker-checker on update | Missing. Authorized row edited in place; the editor is written as `checkerId` | `PUT /products/1 {"productCode":"HACKED","version":9}` → saved, `checkerId=1` |
| Mass assignment | `...data` is spread into create/update | Client could set `productCode`, `version`, `authStatus` |
| `makerId != checkerId` | Never checked anywhere | — |
| Maker/checker columns | Only 6 tables have them (`ln_product`, `ln_product_category`, `ln_component`, `ln_rate_index`, `ln_role_gl_mapping`, `ln_transaction`). Missing on `ln_provision_rule`, `ln_status_*`, `ln_regulatory_class`, `ln_tax_master`, `ln_fee_master`, `ln_waterfall_rule`, `ln_product_component`, `ln_product_ude`, `ln_accounting_role`, `ln_accounting_entry_rule`, `ln_approval_matrix`, `ln_document_checklist` | — |
| AUTHORIZED / effective-dated reads | None. `masterService` returns all rows regardless of `authStatus` / `effectiveFrom` / `effectiveTo` | — |
| RBAC | Only `validateToken`. No role or permission check on any of the 26 routes; the existing `role.permissions` / `checkRole` pattern is unused | Any logged-in user can confirm tax and edit provision rates |
| Input validation | None (no express-validator; the repo uses it). DB errors are returned to the client **with raw SQL** | `minAmount:"abc"` → 400 with full INSERT text; product with `categoryId:999`, `loanTypeCode:"NOPE"` → **created**; `provisionRate:5`, `collateralHaircutPct:-2` → saved; `defaultVatRate:7` (700%) → saved |
| Tax confirmation | `PUT /tax-profile` accepts `confirmationStatus:"CONFIRMED"` (no `confirmedBy`/`At`). `confirmTaxProfile` has no role or 4-eyes check | Confirmed via PUT, `confirmedBy=NULL` |
| Checklist | Items 2–4 show **CONFIRMED purely from row counts** (≥1 product, ≥5 provision rules, ≥4 DPD rules), so they show confirmed straight after the seed. `confirmItem` only handles `TAX_PROFILE` and silently does nothing for the rest. Rates and DPD ranges are hard-coded into description strings (`checklistService.js`) | `POST /checklist/PROVISION_POLICY/confirm` → 200, nothing stored |
| Audit log | `ln_audit_log` is never written | 0 rows after all the writes above |
| Optimistic lock | `optLockVersion` is incremented but never compared | — |
| Error swallowing | `.catch(() => [])` / fallback queries hide failures (`getVatReport`, `getProvisionRules`, `getHolidayCalendars`) | — |
| VAT report | Queries columns that don't exist (`txnNumber`, `businessDate`, `accountId`, `reversalStatus`; the model has `txNo`, `valueDate`, `loanAccountId`, `isReversed`). The error is swallowed, so it always returns empty | 200 with empty data |
| Money types | DDL uses DECIMAL(20,4) / (9,6) / (20,8) correctly. Code uses `parseFloat` for comparisons (product validation) and literals like `0.100000` / `0.1` as VAT fallbacks | — |
| Unique keys | Good: `(productCode,version)`, `uk_endpoint_account_key (endpoint,accountId,idempotencyKey)`, `batchNumber`, `txNo`. **Missing:** `ln_role_gl_mapping` has **no unique key at all** (Rev 5 asks for generated columns or code validation). `ln_accounting_entry_rule` has none. **`ln_tax_master` is unique on `taxCode` alone, so a rate cannot be effective-dated** (needs `(taxCode, effectiveFrom)`). No COALESCE in any key. | — |
| Rev 5 §5 columns | Present: `branchId` on application/account/transaction; `resolverType`; `paymentMethodId`/`bankAccountId`; no `idempotencyKey` on `ln_transaction`; `ln_journal_posting.transactionId` nullable; `IMMEDIATE` lookup. **Inconsistent:** `glBatchId` is `VARCHAR(50)` in journal/accrual tables but `ln_gl_batch.id` is INT | — |
| `ln_tax_profile` | Has `companyVatRegistered`, `confirmationStatus`, `confirmedBy/At`, `defaultVatRate`, `taxPayableAccountId`, `warningBannerActive`. **No reference to the POS `tax` row** (see B.11) | — |
| Response envelope | Loan uses `{status:true}`; the skill blueprint says `{success:true}` (the repo is mixed) | S3 |

### B.5 Frontend (S2)
`dc_web/pages/admin/loan/studio/index.vue` (1,146 lines, 5 tabs: Checklist, Tax, Products, Provisioning, System).
- **Present:** warning banner (this page only, as it's the only loan page), checklist with tax confirm, component tax edit, product list with a read-only detail dialog (General / Components / Waterfall), clone, provision rate edit, read-only status rules / sequences / accounting roles. `?tab=` deep links from the menu seed work.
- **Missing vs scope:** product **create/edit** multi-tab form (no create button; detail is read-only), UDE tab, simulation placeholder; CRUD screens for lookups, UDE master, components, fee master, tax master, holiday calendars/dates, rate index/values/tiers, waterfall rules, regulatory classes, status master/movement/cure rules, approval matrix, document checklist, numbering sequences, batch jobs; authorize/reject (checker) actions anywhere; confirm actions for the 4 non-tax checklist items.
- Dropdowns: `/api/loan/lookups` is **never called**. One hard-coded list: `taxPointEvent` `['DISB','BILL','COLLECTION']` (line 626).
- i18n: inline bilingual Lao + English strings. This **matches the repo convention** (192 pages inline vs 4 using `$t`).
- No `layout: 'admin'` / `middleware: 'auths'`; parking pages use both (126 of 212 admin pages have the middleware).

### B.6 Tests
- `npm test` is a stub. There are ad-hoc scripts only: `test_parking_services.js`, `test_packaging_services.js`, `test_platform_services.js`, `test_bcel_auth.js`, `test_bcel_qr.js`, `test.js`, `test-student*.js`. **No loan tests.**
- I did **not** run the existing scripts. The three `*_services.js` scripts `require('./src/models')`, which honour my local override, but the BCEL ones call external payment APIs. I can run the three service scripts locally in Step C if you want.

### B.7 Seed
| Check | Result |
| :--- | :--- |
| Idempotent (run twice) | **Pass.** Identical row counts per table after runs 1 and 2 (both seeds) |
| `ln_accounting_entry_rule`, `ln_role_gl_mapping` empty | **Pass**, 0 rows |
| VAT rate read from POS `tax` | **Partly.** Read from `tax` (`isDefault`, `isActive`) → 0.100000, but it is **copied**, with literal fallbacks `0.100000` and `'LTAX'` if none is found. `ln_tax_master.effectiveFrom='2025-01-01'` is a literal |
| Provision rates labelled "management policy" | **Fail in data.** `ln_provision_rule` has no description/label column. The label only exists as text in the checklist service and the regulatory class names. All rows are seeded `AUTHORIZED`, not "unconfirmed" |
| Base currency | **Fail.** First 3 currencies by id, not `isLocalCCY` |
| Component taxability | Fees taxable (`LTAX`, exclusive, `DISB`); interest/penalty/insurance not taxable ✓. **No repossession-sale component** (only `REPOSSESSION_EXPENSE`, non-taxable). `PREPAYMENT_PENALTY` has tax point `DISB` (should be a prepay event). No per-component confirmation state. All rows `AUTHORIZED` with `makerId=NULL` |
| Products | 3 products, `UPFRONT`/`IMMEDIATE`/`SALE_INVOICE_SETTLEMENT` ✓; `AUTHORIZED` with no maker/checker. No insurance-mode parameter on the product |
| Menus | Idempotent. 1 header + 4 lines; **all 4 lines point at the same page** with different `?tab=` |
| Literal rates in seed | Interest 0.12, penalty 0.18, down payment 0.20, haircut 0.30 etc. Acceptable as **seed defaults**, but they are seeded as AUTHORIZED rather than "to be confirmed" |

### B.8 Schema source of truth (S1)
- **On a DB that already ran the SQL:** starting the app (sync + alter) visited `chart_of_account` and all 66 `ln_*` tables and issued **no ALTER on any of them**. The `'Off-Balance'` ENUM was **not reverted** and `ln_*` didn't change. I tested by snapshotting the schema before and after: 0 column differences. (Sequelize 6.37.7. Both sync passes then abort at a **pre-existing** `SPF` "Too many keys (64)" error, unrelated to loan.)
- **On a DB that never ran the SQL** (what a customer deploy gets if only the code ships): `sync` creates `ln_*` from the models, which have **no composite unique keys and no column defaults**. Tested on a scratch DB: `ln_product` came out **without `(productCode,version)` unique** and with an extra FK index, and the create stopped at a foreign-key error on `ln_product_currency`. That error is partly an artifact of the empty scratch DB having no `currency` table. Also, whether `ln_*` gets created at all depends on table order relative to the `SPF` failure.
- `chart_of_account` model lacks `'Off-Balance'`. Sequelize currently doesn't revert it, but the model and DB disagree.
- **Recommendation:** the SQL file is the source of truth. Models declare the same indexes and defaults, and the account model gains `'Off-Balance'`. Alternative (my preference, but it's your call): an `isOffBalance` flag instead of a new ENUM value, which needs no ENUM change on customer DBs.
- `src/config/env.js` → `env_auto` → **remote by default**. Local only when `DB_HOST` is set (my commit).

### B.9 Roles: 31 seeded vs spec (S2, needs fixing before 2B)
| Status | Roles |
| :--- | :--- |
| Match (22) | SALE_RECEIVABLE, INTEREST_RECEIVABLE, PENALTY_RECEIVABLE, FEE_RECEIVABLE, INSURANCE_RECEIVABLE, UNAMORTIZED_FEE_CONTRA, SUSPENDED_INTEREST*, INSURANCE_PAYABLE, TAX_PAYABLE**, INTEREST_INCOME, PENALTY_INCOME, FEE_INCOME, GAIN_ON_REPOSSESSED_ASSET, BAD_DEBT_RECOVERY, PROVISION_EXPENSE, LOAN_LOSS_SHORTFALL, PENALTY_WAIVER_EXPENSE, FEE_WAIVER_EXPENSE, LOSS_ON_REPOSSESSED_ASSET, CASH_BANK, WRITTEN_OFF_MEMO_DR, WRITTEN_OFF_MEMO_CR |
| Renamed (8 seeded → 4 spec) | `LOAN_PRINCIPAL_CURRENT/_WATCHLIST/_SUBSTANDARD/_DOUBTFUL/_LOSS` → spec `LOAN_PORTFOLIO` + status qualifier; `LOAN_LOSS_PROVISION` → `PROVISION_RESERVE`; `REPOSSESSED_ASSET` → `REPOSSESSED_VEHICLE_ASSET`; `CUSTOMER_ADVANCE` → `CUSTOMER_ADVANCE_LIAB` |
| Not in spec (1) | `CUSTOMER_DEPOSIT_ACCOUNT` (spec §2.1 says `CUSTOMER_ACCOUNT` and never defines it as a role) |
| Missing (5) | `DEFERRED_FEE`, `ROUNDING_DIFF` (required by Rev 5 §5.10), `PENALTY_WRITEOFF_EXPENSE`, `FEE_WRITEOFF_EXPENSE`, `INTEREST_WAIVER_EXPENSE` |

\* `SUSPENDED_INTEREST` is seeded as `Contra-Asset`; spec §5 says `Liability` (2051).
\** `TAX_PAYABLE` is `MAPPING_TABLE`. The Rev 5 text uses account `2002`, which isn't in the spec account list, and **POS has no tax-payable account or param** (Step 0.5). Needs a `SYSTEM_PARAM` (for example a new `GL_MAP_VAT_PAYABLE_ACC`) or a link on the POS `tax` row. Decide in 2B.

### B.10 Events: 12 seeded vs 22 in spec §2.2 (S2)
- Match (9): DISB, ACCR, LIQD, LIQD_SUSP, BILL_NON_CAP, PREPAY, VEH_DISPOSE, WAIVE, REVERSAL.
- Renamed (3): `VEH_REPOSSESS` → `REPOSSESS`, `PROV` → `PROVISION`, `WRITEOFF` → `WRITE_OFF`.
- Missing from spec (10): ACCR_SUSP, EIR_AMORT, BILL, OVERPAY, INS_REMIT, INT_WAIVE, STCH, STCH_CURE, PROV_WB, RECOVERY.
- Also referenced elsewhere: FEE_COLLECT (spec §2.1 mode 3), PREPAY_PARTIAL (prompt).
- Amount tags (21) don't match the spec tags either (for example `PRINCIPAL_DISBURSED` vs `PRINCIPAL`, `INTEREST_ACCRUED` vs `INT_ACCR`). They'll be reconciled together with the events.

### B.11 VAT rate (S2)
- The rate is copied into `ln_tax_profile.defaultVatRate` and `ln_tax_master.taxRate`, and both can drift from POS. The POS `tax` table is **already effective-dated**.
- Proposal: add `posTaxId` (FK → `tax.id`) to `ln_tax_profile` and `ln_tax_master`. The resolver reads the rate from `tax` for the event date. `ln_tax_master` keeps loan-specific overrides only, unique `(taxCode, effectiveFrom)`. Drop `defaultVatRate`, or keep it as a display-only cache.

### B.13 Status names (S2)
- Spec-rev4 doesn't use `ACTIVE`/`PAST_DUE` (the prompt's premise). The real mismatches:
  - Regulatory class `glQualifier` is seeded as `NORMAL, WATCHLIST, NPL, NPL, LOSS`. The spec uses `NORMAL, WATCH, SUBSTANDARD, DOUBTFUL, LOSS`. With **both C and D as `NPL`**, accounts 1052 and 1053 can't be told apart.
  - Status master codes are `NORMAL/WATCHLIST/SUBSTANDARD/DOUBTFUL/LOSS/WRITTEN_OFF/REPOSSESSED/CLOSED`.
  - `ln_account.status` defaults to `'ACTIVE'`, which isn't in `ln_status_master`.
- Proposal: status codes = `NORMAL, WATCH, SUBSTANDARD, DOUBTFUL, LOSS` (+ `WRITTEN_OFF`, `REPOSSESSED`, `CLOSED`). The qualifier equals the class qualifier, one-to-one. `ln_account.status` defaults to `NORMAL`.

### Other observations (not loan, not fixing)
- The JWT secret is hard-coded in `src/config/env.js` and depends on `PORT`. The DB passwords are hard-coded in the tracked `dbClient.js`.
- Pre-existing `SPF` "too many keys" error on every sync (the repo has several `toomanykey*.sql` attempts).

---

## Proposed Step C (small commits on `feature/loan-module`; nothing done yet)
1. `fix(loan): register loan models once`.
2. `chore(loan): refuse non-local DB in loan seeds/scripts unless ALLOW_REMOTE=1`.
3. `feat(loan): reversible migration`: split into up/down SQL + `loan_migrate.js`, and fix `ln_tax_master` / `ln_role_gl_mapping` unique keys (generated columns), the `glBatchId` type, maker/checker columns on all parameter tables, and a provision/description policy label.
4. `fix(loan): models match DDL`: indexes, defaults, and the `Off-Balance` decision (ENUM in model vs `isOffBalance`).
5. `feat(loan): RBAC + maker-checker + validation`: a `loanPermission(fn)` middleware built on `role.permissions` (`loan.<entity>.view/create/edit/authorize/delete`); generic param service with pending → AUTHORIZED, `makerId != checkerId`, no in-place edit of AUTHORIZED rows (new version/row), optimistic lock check, audit log; express-validator; sanitized errors; effective-dated AUTHORIZED-only reader for engines.
6. `fix(loan): tax profile`: POS `tax` FK, confirm-only via endpoint with permission, checklist confirmations stored per item.
7. `fix(loan): seed`: base currency via `isLocalCCY`, no literal VAT fallback (fail loudly), statuses/qualifiers per B.13, roles/events/tags per B.9/B.10 (still **no** entry rules or GL mappings), seeded parameters `UNCONFIRMED`/pending rather than AUTHORIZED, repossession-sale component.
8. `test(loan)`: lightweight runner (node `assert`, no new framework) on the local DB covering validation, maker-checker, effective-dating, seed idempotency.
9. `feat(web/loan)`: product create/edit multi-tab form with simulation placeholder, CRUD screens for the other parameter tables, authorize actions, checklist confirms, lookups from the API, `layout`/`middleware`.
10. `docs/loan/phase2a-report.md`.

Still held: Phase 2B seeding, the corrected Rev 5 accounting addendum (prompt §7), the print template, and the `loan-engine` SKILL.md.

## Decisions I need from you
1. **Remote `dcommerce_demo`:** leave it, or have me prepare a reviewed DOWN script for you to run there?
2. **Off-Balance:** keep the ENUM value (and update the model + AccountForm), or switch to an `isOffBalance` flag?
3. **Branch:** map `branchId` to the existing `location` table?
4. **Status codes:** OK to use `WATCH` (spec) instead of `WATCHLIST`?
5. **Seed defaults as unconfirmed:** OK to seed products/rules as pending (needing a checker) rather than AUTHORIZED?
