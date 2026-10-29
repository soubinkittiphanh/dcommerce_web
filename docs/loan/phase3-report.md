# Loan Module: Phase 3 Report (calculation engines)

Date: 2026-10-29. Branch `feature/loan-module` in `dc_api` and `dc_web`, not pushed. Everything was built and tested against **local databases only** (`dcommerce_loan_dev`, `dcommerce_loan_test`). **No GL posting** was added, and no existing POS code was changed. Phase 4 has not been started.

The decisions in the approved plan were applied with the recommended options:
- **D1:** the borrower is a POS `client`.
- **D2:** repayment method, grace and the first-period window are product parameters.
- **D3:** `ln_account.accountStage` (BOOKED / DISBURSED / CLOSED) is kept separate from the classification status.
- **D4:** cure rules are seeded PENDING.
- **D5:** statuses without waterfall rows use the NORMAL order.
- **D6:** `UPFRONT_SIMPLE` is treated as flat; ACTUARIAL is refused on FLAT products.
- **D7:** the only new screen is the Simulation tab.
- **D8:** application approval is single-level maker-checker.
- **D9:** penalty = overdue installment × `PENALTY_RATE` / days in year, capped by `PENALTY_CAP_PCT`; `GRACE_DAYS` only waives the penalty within grace.

## 1. What was built

### Engines (`dc_api/src/loan/engine/`, pure functions, no DB, no floats)
| File | What it does |
|---|---|
| `num.js` | Exact BigInt rationals; half-up rounding; decimal strings in and out |
| `dates.js`, `dayCount.js`, `calendar.js` | UTC day arithmetic with end-of-month anchoring; 30E/360, ACTUAL_360/365, ACTUAL_ACTUAL (ISDA); weekend days plus holiday dates with next/previous working day |
| `rounding.js` | Rounder per `ln_currency_rule` (half-up, at most 2 decimals, because the POS GL stores 2) |
| `schedule.js` | Equal principal, equal installment (exact annuity, optional balloon) and flat. Interest-only or full (capitalized) grace. Optional first due date within the product window (broken period by day count). Holiday roll of the payment date only. Residue goes to the last installment. |
| `interest.js` | Due-date `ACCR` / `ACCR_SUSP` / nothing, by status treatment and recognition (DUE_DATE, DAILY as a pro-rata of billed interest, CASH); memo penalty |
| `prepayment.js` | Payoff quote, `PREPAY` tags with `TRUE_UP`/`TRUE_UP_REV` for ACTUARIAL_PRO_RATA, RULE_OF_78 and NONE; suspended interest goes to `LIQD_SUSP` |
| `allocation.js` | Waterfall allocation (installment-major or component-major), with `LIQD`, `LIQD_SUSP` and `OVERPAY` tags. The advance is used before cash, but never for suspended interest. Partial principal prepayment is supported. |
| `status.js`, `provision.js` | DPD bands (live), downgrades, cure rules (`STCH` / `STCH_CURE` with PREVIOUS/NEW qualifiers); provision on net exposure with haircut (`PROVISION` / `PROV_WB`) |
| `fees.js`, `snapshot.js`, `state.js` | Upfront fees and FEE_COLLECT/DISB events per fee mode; the frozen account snapshot (spec §4.1); the account state model |

### Services and API (dc_api)
- **Migration `20261031_loan_phase3`** (reversible; the rollback refuses while applications or accounts exist):
  - `ln_currency_rule`, `ln_lookup_repayment_method`;
  - new product, application, account and calendar columns.
- **`seed_loan_phase3.js`** (idempotent):
  - repayment methods;
  - currency rules PENDING (LAK 0, USD 2, THB 2);
  - `CAR-LOAN-FLAT` → FLAT;
  - cure rules PENDING;
  - functions `LN_APPLICATION`, `LN_ACCOUNT`, `LN_CURRENCY_RULE`.
- **`POST /api/loan/products/:id/simulate`** (`LN_PRODUCT` VIEW):
  - returns the schedule, fees, disbursement tags and the journal preview from the entry rules, with validator results;
  - runs in preview mode while the product or currency rule is still PENDING.
- **Applications:**
  - `GET/POST /applications`, `GET/PUT /applications/:id`, `POST /applications/:id/submit|approve|reject`;
  - checks: product limits, down payment, LTV, and a schedule trial;
  - maker-checker approval, audited.
- **`POST /applications/:id/book`** (`LN_ACCOUNT` CREATE), in one transaction:
  - creates the account (stage BOOKED, number from `ln_numbering_sequence`), the frozen snapshot, the schedule rows and components, and zero balances;
  - refuses unless the product's entry rules and the currency rule are AUTHORIZED;
  - no GL rows.
- **Read-only previews:** `GET /accounts`, `GET /accounts/:id`, and `POST /accounts/:id/preview/due-date|payment|prepayment|status`. Each returns tags + journal + validator results. Nothing is persisted.

### Screen (dc_web)
- **Product form → Simulation tab:** inputs, schedule table, totals, upfront fees, and the disbursement journal with a balanced badge plus preview warnings.
- **Product form, new fields:** repayment method, max grace periods, first-period min/max days.
- **Master data:** the repayment-method lookup and currency rounding rules.

### Documents
- `rev5-accounting-addendum.md`: Phase 4 balance-sheet requirement; Examples 9 (annuity) and 10 (flat).
- `rounding-policy.md`: approved as the default (UNCONFIRMED).
- `phase2b-report.md`: §3.1 decision.
- This report.

## 2. Verification (what was actually run)

- **`npm run test:loan`: 79 passed, 0 failed** (local test DB rebuilt from `dcommerce_dev`). New in Phase 3:
  - **Pure engine tests (18), also runnable alone with `node test/loan/engineTests.js`:**
    - the no-float guard;
    - calendar and day-count cases;
    - Loan A schedule;
    - annuity, balloon, grace (interest-only and full), broken first period, flat, ACT/ACT across a leap year, Rule of 78 and NONE, all checked against values computed independently with Python decimal;
    - schedule properties over 135 term sets × 2 currencies (270 runs) (principal sums exactly, last balance 0, amounts at the currency's decimals);
    - Examples 1–5 reproduced from engine output (FEE_COLLECT/DISB, ACCR 3,600,000, the Example 2 and 3 LIQD with memo penalty 233,000, the Loan D PREPAY of 82,200,000, and the Loan B STCH with UNCOL_INT 6,000,000);
    - provision for Loans B and C.
    - **Every engine output was turned into journals with the 2B catalog rules and passed the 2B validators.**
  - **DB/API:**
    - migration round trip over three migrations;
    - Phase 3 seed idempotent (2A/2B re-runs keep it);
    - model/DB parity;
    - simulate (preview flag, then authorized; payment 22,003,198 equals the fixture; balanced; CASHIER refused);
    - application (limits, down payment, unknown field, CASHIER refused, maker cannot approve their own, audit CREATE/SUBMIT/AUTH);
    - booking (account number, stage BOOKED, 24 schedule components matching the engine, booking twice refused, no `general_ledger` or `ln_journal_posting` rows, snapshot unchanged after a later product edit);
    - previews (ACCR, LIQD, PREPAY, and STCH + PROVISION at DPD 61, all journals balanced; the account still NORMAL/0 afterwards).
- **ESLint:** 0 problems on the changed dc_web files. **Nuxt:** client and server compile; the same 6 warnings as before.
- **Browser check:** headless installed Google Chrome with a temporary profile, because the browser tool's bundled Chromium had been removed. Local API on `dcommerce_loan_dev`; every API call went to `127.0.0.1:18888`.
  - Product CAR-LOAN-DB → Simulation tab: row 1 is 18,403,198 + 3,600,000 = 22,003,198; the journal is "Balanced"; the preview warnings show (product and currency rule PENDING).
  - A clipped button was fixed and re-checked.
- **Dev sandbox:** Phase 3 migration and seed applied; no accounts booked there.
- Your three uncommitted dc_api files match their baseline hashes; the two unrelated dc_web files were not touched.

## 3. Known limits and open items
- **Frequencies:** only month-based ones (MONTHLY, QUARTERLY, SEMI_ANNUALLY, ANNUALLY) are scheduled; weekly, bi-weekly and daily are refused with a clear message.
- **Restrictions:** FLAT has no grace; a balloon is only supported with EQUAL_INSTALLMENT.
- **Partial principal prepayment:** the allocation engine reports `partialPrepayment`, but **regenerating the schedule** per `partialPrepayOption` (REDUCE_INSTALLMENT / REDUCE_TENOR) is not implemented. It belongs with persisted payments in Phase 4.
- **RULE_OF_78:** never refunds interest already billed (the earned share is clamped at 0).
- **DAILY recognition:** a pro-rata of the billed installment interest (month-end accrual plus the remainder on the due date), so it never drifts from what is billed.
- **Previews assume no payments**, since none are persisted in Phase 3: the advance is 0 and the on-time streak for cure is 0.
- **Driver decimals:** the DB driver returns DECIMAL columns as JS numbers. They are turned into strings at the DB boundary (`loanContext.dec`). Values above about 9×10^11 at 4 decimals would already lose precision in the driver, so Phase 4 should switch the dialect to return decimals as strings.
- **Currency rule dates:** the seeded rules are effective from the seed date. Migrated loans with earlier value dates need an earlier rule (one maker-checker entry).
- **Still open from earlier phases:** the accountant questions (VAT, account numbers, rounding); the remote `dcommerce_demo` decision; balance-sheet option A in Phase 4.

## 4. How to click through locally
Start the API and the web app as in `phase2b-report.md` §4: API from a directory outside `dc_api` against `dcommerce_loan_dev`; Nuxt with a build directory outside the repo and `BASE_URL=http://127.0.0.1:18888`. Use the **local binary** `dc_web/node_modules/.bin/nuxt`: a bare `npx nuxt` may download the new Nuxt CLI, which fails on Node 16. Then:

1. Run the migration and seeds once (from the same directory and with the same DB variables): `node …/dc_api/loan_migrate.js up`, then `node …/dc_api/seed_loan_phase3.js`.
2. **Simulation:** Parameter Studio → Products → a product → **Simulation** tab. Enter an amount and rate, then click Simulate. While the product or the LAK rounding rule is PENDING, the result is marked as a preview. Authorize the rule under Master data → Rates, fees & tax → *Currency rounding rules* with a second user.
3. **Application → account** (API only in Phase 3). With a token for user A (maker) and user B (checker):
   - `POST /api/loan/applications` with `{ customerId, productId, currencyId, vehiclePrice, downPaymentAmount, requestedAmount, tenorMonths, interestRate }`; then `POST /applications/:id/submit` (A) and `POST /applications/:id/approve` (B).
   - `POST /applications/:id/book` creates the account. It needs an AUTHORIZED product version, authorized entry rules and an authorized currency rule.
   - Previews: `POST /api/loan/accounts/:id/preview/payment` with `{ "date": "YYYY-MM-DD", "amount": "..." }`, and likewise `due-date`, `prepayment` and `status`.
4. **Tests:** from a directory outside `dc_api`, `npm --prefix …/dc_api run test:loan` (all) or `node …/dc_api/test/loan/engineTests.js` (pure engines only, no DB).

## 5. Commits (Phase 3)
dc_api:
```
461be52 test(loan): Phase 3 seed, simulation, application, booking and preview tests
baa7040 feat(loan): applications, account booking, previews and product simulation
93ec1e4 test(loan): pure engine tests with Loan A-D fixtures and independent values
72fb11a feat(loan): schedule, interest, prepayment, allocation, status and provision engines
9efdc00 feat(loan): engine core with exact decimal arithmetic
e99309a feat(loan): Phase 3 seed, registry and security
b6ae667 feat(loan): Phase 3 schema for engines (currency rounding rule, repayment method, grace, account stage)
```
dc_web:
```
68ada536b feat(loan): Simulation tab on the product form
ce2a4aaff docs(loan): record balance-sheet Phase 4 requirement and rounding approval
```
The docs commit for this report and addendum Examples 9–10 follows these.
