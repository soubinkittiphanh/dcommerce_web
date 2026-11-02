# Task for Claude Code: Loan Module, Phase 2A (Parameter Layer)

You are working in my POS project on my Mac. Project root: `/Users/soubinkittiphanh/Desktop/Pro/dcommerce`.

Folder map (this is the `ls` of the root):
- **Backend: `dc_api`** (`/Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api`). All loan API code, migrations, models and seeds go here.
- **Frontend: `dc_web`** (`/Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web`). All loan screens go here.
- Do NOT touch the other folders: `dc_api_draft`, `dc_api_reg`, `dc_cleaning_api`, `dc_cleaning_app`, `dc_mobile`, `dc_pos`, `dc_web.bfg-report`, `logs.log`. Read them only if you need to understand a convention, and tell me if you do.
- First check whether `dc_api` and `dc_web` are separate git repositories or one repo at the root (`git rev-parse --show-toplevel` in each). If they are separate repos, create the branch `feature/loan-module` in each and commit separately.

The spec says Node/Sequelize/MariaDB and Nuxt 2/Vuetify 2, but verify this in the code. I am building a parameter-driven, FLEXCUBE-style loan module for a car dealership in Laos (micro SME) that finances its own vehicle sales on installment.

## 0. Ground rules
- Only create or edit files inside `dc_api` and `dc_web` (plus the `docs/loan/` notes). Work on a new git branch `feature/loan-module`. Commit in small steps. Never force-push, never reset/delete existing work, never run destructive DB commands against a non-local database.
- Additive only: do not change or break existing POS features. Migrations must be reversible.
- Follow existing conventions exactly (folder layout, naming, validation, error handling, auth/RBAC, i18n, Vuetify patterns). Do not add a new framework unless unavoidable.
- No hard-coding: business rules, rates, formulas, GL accounts, statuses, frequencies, waterfall order all live in DB tables. Money = DECIMAL(20,4), rates = DECIMAL(9,6), exchange rates = DECIMAL(20,8). Never use floats for money.
- Use plan mode first. Show me your plan before writing code.

## 0.5 HANDOVER FROM ANTIGRAVITY (read first, this changes the task)
Another AI tool (Antigravity) already built part of Phase 2A and left everything UNCOMMITTED on branch `main` in both `dc_api` and `dc_web`. Read `docs/loan/handover-antigravity.md` first. Your job is to AUDIT and COMPLETE this work, not rebuild it.

Step A: snapshot safely. WARNING: `dc_web` already has about 130 UNRELATED files staged and many more modified (parking, commission, restaurant POS, school, money advance, `.nuxt` build output, deleted `.bak` files), and `dc_api` has unrelated changes (`logs.log`, `src/parking/*`, `.agents/`). That is my other work and must stay exactly as it is.
- NEVER use `git add -A`, `git add .`, `git commit -a`, or a bare `git commit`. NEVER unstage, stash, reset, checkout, clean or delete anything.
- In each repo create `feature/loan-module` (the working tree comes along), then commit ONLY the loan files using path-limited commands.
  - `dc_web`: `git add -- pages/admin/loan docs/loan` then `git commit -m "WIP: Antigravity loan Phase 2A snapshot (unreviewed)" -- pages/admin/loan docs/loan`.
  - `dc_api`: add `20261028_create_loan_module_phase2a_tables.sql`, `seed_loan_menus.js`, `seed_loan_phase2a_data.js`, `src/loan/`. For the three modified core files (`src/app.js`, `src/models/index.js`, `src/router/index.js`), review `git diff` and stage only the loan hunks (`git add -p`); the parking work may be mixed in. Leave `logs.log`, `src/parking/*` and `.agents/` alone.
- Afterwards run `git status` in each repo and show me that the unrelated changes are unchanged.
- Before auditing, read the existing conventions in `.agents/skills/` (for example `dc-api-core`) and any CLAUDE.md or AGENTS.md.

Step B: audit what exists and report findings to me BEFORE fixing:
1. Database: the migration was a raw SQL file (`20261028_create_loan_module_phase2a_tables.sql`) run manually on local MariaDB `dcommerce_demo`. Check how this project normally does migrations. Provide a matching, reversible way to apply it (and a DOWN/rollback script). Confirm nothing was run against any non-local database.
2. Tables: Antigravity reports 54 tables created, but `spec-rev4.md` lists about 64. Compare the real DB against the spec list table by table and tell me exactly which tables are missing or renamed.
3. Core files modified: review the diffs of `src/models/index.js`, `src/router/index.js`, `src/app.js`. Confirm they are purely additive and that existing POS routes and models still work (run the app and existing tests).
4. Backend quality: check for maker-checker (`makerId != checkerId`, engines read only AUTHORIZED rows), effective-dating, RBAC on every `/api/loan` route, input validation, money as DECIMAL(20,4) with no floats, unique keys on MariaDB (no COALESCE in unique keys), `ln_idempotency`, `ln_gl_batch`, `ln_tax_profile` fields, `branchId` and `resolverType` additions from `rev5-decisions.md` section 5.
5. Frontend: only `pages/admin/loan/studio/index.vue` exists. Check it against the spec's Parameter Studio (product tabs, and CRUD for the other parameter tables). List what is missing. Check i18n (Lao + English) and that dropdowns come from the API.
6. Tests: none were reported. List what tests exist.
7. Seed data: verify the seed is idempotent (run twice), that the VAT rate came from the POS tax table and not a literal, that provision rates are labeled "management policy", and that `ln_accounting_entry_rule` and `ln_role_gl_mapping` are still empty.
8. Schema source of truth: the app runs a global Sequelize `sync()` at startup (Antigravity used `NO_SYNC=true` for its scripts). Check whether starting the app would create or alter the `ln_*` tables, and whether it would revert the `chart_of_account.accountType` ENUM (the SQL added `'Off-Balance'`, but `src/account/model.js` was not changed). Make the Sequelize models and the SQL DDL match exactly, tell me which path a production deploy would use, and confirm `src/config/env.js` points to the local database. Verify trial balance, balance sheet and P&L still work with the new ENUM value.
9. Role names: the Rev 5 accounting (handover section 4) uses `LOAN_PRINCIPAL_CURRENT`, `REPOSSESSED_ASSET` and `CUSTOMER_DEPOSIT_ACCOUNT`, while the spec uses `LOAN_PORTFOLIO` (with a status qualifier) and `REPOSSESSED_VEHICLE_ASSET`. It also shows `TAX_PAYABLE` as account `2002`, which is not in the known account list. List the 31 seeded roles against every role used in the spec and Rev 5 and report mismatches. `TAX_PAYABLE` must resolve from the POS tax setting, not an invented account.
10. Events: only 12 events are seeded, but Rev 4/5 use more (`ACCR_SUSP`, `LIQD_SUSP`, `INT_WAIVE`, `STCH_CURE`, `INS_REMIT`, `OVERPAY`, `PREPAY_PARTIAL`, `VEH_DISPOSE`, `PROV_WB`, and others). Compare and list the gaps.
11. VAT rate: it was copied into `ln_tax_profile.defaultVatRate`. The spec wants rates effective-dated in `ln_tax_master` and the POS tax record reused. Store a reference to the POS tax record and read the rate from there so it cannot drift.
12. Maker-checker and RBAC: the handover mentions only `validateToken`. Verify `makerId != checkerId`, AUTHORIZED-only reads, and per-function permissions (view/create/edit/authorize/delete).
13. Status names: the seed uses `NORMAL`/`WATCHLIST`/... while the spec uses `ACTIVE`/`PAST_DUE`/`WATCH`/.... Make them consistent with the GL status qualifiers.

Step C: after I review your audit, fix the gaps in small commits, add reversible migration/rollback, add tests, complete missing tables and screens. Keep Phase 2B held.

Also still open from Antigravity: the customer tax invoice print template (needs a Vue template in `dc_web/common/printTemplates.js`), and `.agents/skills/loan-engine/SKILL.md` (not created; create it only after Phase 2A is approved).

## 1. Spec files (I will save them in `docs/loan/`)
- `docs/loan/spec-rev4.md`: the Phase 1 design (Rev 4). It is the source of truth for tables and accounting.
- `docs/loan/rev5-decisions.md`: the decisions below (copy section 3 into it).

## 2. Step 0: verify before building (report findings, then continue unless blocked)
Check each claim in the spec against the real code and tell me which are wrong:
1. `GL_MAP_AR_ACC`, `GL_MAP_CASH_ACC`, `GL_MAP_BANK_ACC` in `src/GL/accountingPostingService.js`.
2. `chart_of_account.accountType` ENUM in `src/account/model.js` and what adding `'Off-Balance'` would affect in `src/GL/adbReportController.js` (balance sheet, P&L, trial balance).
3. `saleHeader` fields (`isPostedToAR`, `arPostedAt`) and how AR receipts are stored (spec mentions `ARReceiveLine`).
4. Existing currency model and how the base currency is chosen.
5. Existing tax/VAT configuration, payment methods, bank accounts, branches, users/RBAC, customer model.
6. Any existing "mf" (microfinance) loan code in the repo (the gap analysis mentions `scheduleEngine.js`, `mfJournalEntry`). Decide reuse vs. leave alone; do not delete it.

## 3. Decisions (Rev 5 addendum)
- Customer is a Lao micro SME; assume simple local accounting, NOT full IFRS 9.
- Fee defaults: `feeFinancingMode = UPFRONT`, `deferredFeePresentation = IMMEDIATE` (fee goes to income when charged). Keep `LIABILITY` and `CONTRA_ASSET_NET` available as advanced options, off by default. Insurance is a pass-through collected upfront.
- Provision rates and DPD ranges are company policy, editable, marked "to be set by management" (do not claim they are legally mandated).
- VAT is a parameter, never hard-coded:
  - `ln_tax_profile`: `companyVatRegistered` (default from existing POS tax setting), `confirmationStatus` (`UNCONFIRMED`/`CONFIRMED`), `confirmedBy`, `confirmedAt`.
  - Per component: `taxable`, `taxCode`, `taxInclusive`, `taxPointEvent` (`DISB`/`BILL`/`COLLECTION`). Rates are effective-dated in `ln_tax_master`; reuse the POS rate and tax-payable account; do not assume 7% or 10%.
  - Starting values (VAT-registered): fees taxable; repossession-sale proceeds taxable; interest, penalty, insurance not taxable. All shown as UNCONFIRMED.
  - While UNCONFIRMED: show a warning banner on loan screens and block production disbursement and fee/interest billing (the blocking is implemented in Phase 4; in 2A just store the profile and show the banner).
- Add a "Go-live checklist" screen listing unconfirmed parameters (tax profile, fee treatment, provision rates, DPD ranges, GL mappings) with confirm actions.

## 4. Spec corrections to apply while building
- Table count: the doc says 54 but lists about 64. Use the real list.
- MariaDB: do not put COALESCE expressions in the UNIQUE key of `ln_role_gl_mapping`; use persistent generated columns or code-level validation.
- Add `branchId` to `ln_application`, `ln_account`, `ln_transaction`.
- Add `resolverType` to `ln_accounting_role` (`MAPPING_TABLE`/`SYSTEM_PARAM`/`BANK_ACCOUNT`); add `paymentMethodId` and `bankAccountId` to `ln_transaction`.
- `ln_transaction` must not carry a global unique `idempotencyKey`; use the `ln_idempotency` table with unique `(endpoint, accountId, idempotencyKey)`.
- `ln_journal_posting.transactionId` nullable; `ln_accrual_ledger` links to `ln_gl_batch`.
- Add `IMMEDIATE` to `deferredFeePresentation`.
- Seed account numbers (1050-1061, 2050-2054, 4050-4059, 6050-6058, 9001/9002) are proposals only; do not seed GL accounts or mappings in 2A.

## 5. Phase 2A scope (audit what already exists, then complete the missing parts)
Backend (`dc_api`):
1. Migrations + Sequelize models for: all `ln_lookup_*` tables; product category, product (unique `(productCode, version)`), product currency, component, product component, UDE, product UDE, rate index and values, rate tiers, waterfall rule; holiday calendar and dates; fee master, tax master, tax profile; regulatory class, status master, status movement rule, status cure rule, provision rule; collateral master, vehicle collateral, loan-collateral link; application, guarantor; approval matrix and log, document checklist, application document, audit log; account, param snapshot, account UDE, account balance, schedule, schedule component, accrual ledger; system date, numbering sequence, batch job, batch log, batch lock, idempotency; accounting role/tag/event tables (structure only).
2. CRUD APIs under `/api/loan/...` for the parameter tables, with pagination, validation, RBAC, maker-checker (`authStatus`, `makerId != checkerId` before AUTHORIZED; engines read only AUTHORIZED, effective-dated rows).
3. Idempotent seed script for: lookups, UDE definitions, default regulatory classes and statuses (editable, unconfirmed), and three car-loan products `CAR-LOAN-DB`, `CAR-LOAN-FLAT`, `CAR-LOAN-BALLOON` using the decisions above. Reference currency by looking up the base currency, never a literal code.
4. Do NOT seed `ln_accounting_entry_rule` or `ln_role_gl_mapping`. Do NOT build the calculation engines, transactions, EOD, or reports (later phases).

Frontend (`dc_web`):
5. Parameter Studio under `pages/admin/loan/studio/` (product list + multi-tab form per the spec; the simulation tab can be a placeholder until Phase 3), plus screens for the other parameter tables and the Go-live checklist. Lookups come from the API, no hard-coded dropdown values. Lao + English labels using the existing i18n approach.

## 6. Definition of done
- Migrations run up and down cleanly on a local/dev database; seed runs twice without duplicates.
- Existing POS tests and pages still work; new tests cover validation, maker-checker, effective-dating, and the seed.
- A short `docs/loan/phase2a-report.md`: what was built, files changed, how to run migrations/seeds/tests, spec corrections applied, open questions, and any spec claim that turned out to be wrong.
- Stop after Phase 2A and wait for my review.

## 7. Before Phase 2B (do NOT seed; prepare a corrected Rev 5 accounting addendum for my review)
The Rev 5 accounting section from Antigravity needs these corrections first:
1. Use the spec role codes consistently (`LOAN_PORTFOLIO` + qualifier, `REPOSSESSED_VEHICLE_ASSET`). Define the `CUSTOMER_DEPOSIT_ACCOUNT` role and how it maps to the POS wallet/deposit, or remove it.
2. `TAX_PAYABLE` comes from the POS tax configuration, not a fixed number.
3. `DEDUCTED` flow: the customer receives the net amount (7,670 in the example) but the invoice is 8,000. Specify the customer top-up (330) and its entries.
4. `WAIVE`: reversing VAT on a waived fee normally needs a credit note under tax rules. Make this a parameter (`reverseTaxOnWaiver`, default off) pending the accountant. The same question applies to write-offs.
5. `PREPAY`: give the full entries (accrued interest, penalty and fee receivables, rebate or true-up). VAT applies only to the early-settlement fee.
6. `COLLECTION` tax point: compute VAT per allocated component on partial payments, and define reversal behavior.
7. Add the insurance upfront entries (Dr cash / Cr `INSURANCE_PAYABLE`) and the remittance example.
8. Show how a `taxInclusive = true` fee changes the disbursement entries.
9. Provide the full event list from Rev 4 with a numeric example for each.