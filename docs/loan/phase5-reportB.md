# Loan Phase 5, Part B: per-currency amounts and operational screens (report, STOP 3)

Branch `feature/loan-module`, local sandbox only, nothing pushed. Date: 2026-10-31.

## 1. Commits
| Step | Repo | Commit | What |
|---|---|---|---|
| B0 | dc_api | `70054e5` | per-currency limits and fixed amounts; product check blocks authorization; Part B schema groundwork |
| B1–B8 API | dc_api | `d46eb16`, fix `f0d5e27` | screen APIs, documents, print templates, menus, tests |
| B0/B2–B8 screens | dc_web | `2a9757178` | screens, print components, product form, configs |
| docs | dc_web | this commit | this report, defect 9/10 impact query |

**No existing POS file was changed in Part B** (dc_api or dc_web); `phase5-pos-diffs.patch` from Part A is still complete.

## 2. B0: amounts per currency (your addition 1)
**Data**
- `ln_product_currency.minAmount` / `maxAmount`: limits in that currency (NULL = not set).
- `ln_product_amount` (product child, maker-checker with the product version): a value per currency for
  - components with a fixed-amount formula (`FIXED_CONTRACT_FEE`), and
  - product UDEs whose UDE `dataType` is `AMOUNT`.
- `currencyId` added to `ln_rate_tier` (required for AMOUNT tiers), `ln_fee_master` and `ln_approval_matrix` (NULL = base).
- Migration `20261102_loan_phase5_ccy_limits` with DOWN; the DOWN refuses while non-base per-currency values exist.
- Base currency backfilled from the existing product values (they were LAK amounts), with the child's own authorization state. Other currencies stay unset.

**Every fixed-amount item reviewed**
| Item | Before | Now |
|---|---|---|
| Product amount limits | `ln_product.minAmount/maxAmount`, one currency | per offered currency on `ln_product_currency`; the product columns are no longer read (and are hidden on the form) |
| `FIXED_CONTRACT_FEE` (documentation fee) | one `defaultValue`, used as-is in any currency (a USD loan would have charged USD 300,000) | value per currency in `ln_product_amount`; the fee engine refuses a missing one |
| `UPFRONT_PCT`, interest, penalty rate, principal | percentages | unchanged (currency-free) |
| Penalty floor | none exists: rate + `PENALTY_CAP_PCT` (percentage) | unchanged |
| Insurance premium | entered per contract (application/transaction) in the contract currency | unchanged; no product amount |
| Repossession expense, sale proceeds | entered per transaction in the contract currency | unchanged |
| UDE of dataType AMOUNT | none seeded | per currency in `ln_product_amount` if one is added |
| Rate tier with basis AMOUNT | not used by an engine | must name an offered currency |
| Fee master, approval matrix | not read by any engine | `currencyId` column (NULL = base) |
| Unclassified formula code | n/a | blocks authorization (it could hide a fixed amount) |

**Blocking**
- `GET /products/:id/accounting-check` now returns `ruleErrors` and `currencyErrors`; `errors` has both.
- Authorizing a product refuses with e.g. `CAR-LOAN-BALLOON v1 cannot be authorized: 2 currency amount problem(s) (set the limits and fixed amounts for every offered currency)` and lists:
  `USD: amount limits (minAmount, maxAmount) are not set`, `USD: DOCUMENTATION_FEE (FIXED_CONTRACT_FEE) has no fixed amount in this currency`.
- Booking runs the same check. Posting on existing accounts does not (their amounts are frozen in the snapshot).
- Applications and the simulation use the contract currency's limits (`Amount must be between USD 1000.0000 and 150000.0000`) and fixed fee (USD 15.00, not LAK 300,000).
- Product form: tab "Currencies & limits" (min/max per currency), new tab "Fixed amounts", accounting check split into entry-rule and currency problems.

## 3. Screens (B2–B8) and conversions (your addition 2)
All screens are new loan files under `pages/admin/loan/**` and `components/loan/**`, with Lao + English labels. Each page checks its own permission, and the API enforces every call. The menus are seeded rows (`seed_loan_menus.js`).

| Screen | Path | Permission | Notes |
|---|---|---|---|
| Applications (D9) | `/admin/loan/applications` | LN_APPLICATION, LN_ACCOUNT CREATE to book | create (customer, product, currency with its limits, optional POS sale + **financing proposal** for a cross-currency loan), submit, approve/reject (not the maker), book |
| Accounts | `/admin/loan/accounts` | LN_ACCOUNT VIEW | search by account number, customer name or phone; status and stage filters |
| Account page | `/admin/loan/accounts/:id` | LN_ACCOUNT VIEW (+ LN_TRANSACTION, LN_DOCUMENT per tab) | summary cards, schedule, transactions, statement, history, documents; Payment; Print |
| Payment dialog | on the account page | LN_TRANSACTION CREATE | repayment or full prepayment (amount from the payoff quote); bank accounts filtered to the loan currency; preview of allocation and journal; one Idempotency-Key per submit, reused on retry |
| Pending queue | `/admin/loan/pending` | LN_TRANSACTION VIEW / AUTHORIZE | maker shown, own items cannot be authorized, reject needs a reason, checker can accept an implied-rate deviation |
| EOD | `/admin/loan/eod` | LN_EOD VIEW / CREATE | loan date, POS date, Vientiane date, COB mode and the refusal reason, **rates EOD will use** with warnings, jobs (enabled + authorized), logs, GL batches; microfinance warning |
| Collection | `/admin/loan/collection` | LN_COLLECTION VIEW | DPD, aging bucket, overdue in contract + base, phone (tap to call), last payment |
| Reports | `/admin/loan/reports` | LN_REPORT VIEW | portfolio, aging, NPL, provisions, GL tie-out |
| Exchange rates | `/admin/loan/exchange-rates` | LN_EXCHANGE_RATE | rate table (maker-checker), **copy POS rate** (creates PENDING), "rate a booking date uses" with the age warning |
| Prints (D11) | from the account page | LN_ACCOUNT VIEW | receipt, contract summary (authorized template only), statement; tax invoice shown as held |

**Conversions.** Wherever an amount is converted (account summary cards, payment preview, prepayment quote, statement, pending queue, collection, reports, EOD), the screen shows: the contract amount, the base amount, the rate, the rate date, and a chip with the rate-age warning, for example `USD 14,101.37 ≈ LAK 300,359,181 @ 21,300.00 (2028-01-30)` with the chip `Rate 2 days old`. Two kinds are kept apart and labelled:
- **posted** (transactions, statement rows, receipts): the rate and base stored on the transaction, with its `fxWarning`;
- **indicative** (open balances, previews, reports): the latest authorized rate for the business date. When no rate is within `LOAN_FX_MAX_RATE_AGE_DAYS`, the base amount is empty and the warning says why.

**Browser check** (local Nuxt + API on `dcommerce_loan_test` after the suite, headless Chrome, 1280 px; screenshots `scratchpad/ui/b-<role>-*.png`):
- SUPER_ADMIN: every screen renders; payment preview, contract print and GL tie-out ("ties to the GL") checked.
- ADMIN: accounts, account, pending, EOD, rates and applications render; collection and reports show "No VIEW permission"; the documents tab is disabled.
- CASHIER: every screen shows "No VIEW permission".
- No page errors. The only failed request is `404 /dc.jpeg`, a POS layout image, not a loan file.
- The first run found a bug: the account summary returned a Sequelize instance spread, so `valueDate` and `accountStage` were missing (statement 400, Payment button hidden). Fixed, with a test assertion added (§5.5).

## 4. Test results (local `dcommerce_loan_test`)
**Full suite 133 passed, 0 failed** (125 after B0; 133 with the screen APIs), engine tests included. Protected files unchanged; `logs.log` matches the refreshed baseline.

New tests:
- B0: USD offered without limits and fee → authorization refused with both problems; min > max refused; a THB amount on a product not offering THB flagged; after fixing, authorized with its children; USD simulation fee 15.00, USD limit warning, LAK limits and fee unchanged; USD application below the USD minimum refused; THB not offered refused. Migration DOWN/UP restores the schema exactly; seed idempotent.
- B1: permissions per role; account search; USD summary `USD 14,101.37 = LAK 300,359,181 at 21,300 (2028-01-30)` with warning `Rate of 2028-01-30 used for booking date 2028-02-01 (2 days old)`; no rate → empty base and the reason; statement closing principal = journal portfolio, each movement with its posted rate; EOD rates; collection DPD 40 / bucket 31-60 with base at 21,400; portfolio and aging cover every disbursed account; GL tie-out balanced in currency and base; documents (type, signature, size limit 413, random name, private folder, no personal data, ADMIN 403, audit); print template refused until authorized, unknown placeholder refused; every maker-checker posting appears in the pending queue with its maker.

## 5. Deviations from the plan
1. **Account documents are not stored in the POS `uploads/` folder.** That folder is served publicly by `express.static('/uploads')` with no login, which would bypass the separate document permission (D10). Documents go to a private folder (`LOAN_DOCUMENT_DIR`, default `./private/loan-documents` under the API working directory) and are streamed only through `GET /api/loan/documents/:id/file` after the `LN_DOCUMENT VIEW` check. Upload uses multer memory storage in the loan controller; the POS multer config is not used and not changed.
2. **Contract wording template** (D11) is a new maker-checker table `ln_print_template` (migration `20261104`), edited in the Parameter Studio (`LN_PRINT_TEMPLATE`, SUPER_ADMIN). A DRAFT contract summary is seeded PENDING; printing is refused until a checker authorizes wording. Only listed placeholders are allowed; the body is rendered as plain text.
3. **GL tie-out**: REVERSAL journal legs are not stamped with their GL row id (`glRecordId`), although the reversal writes and links its GL rows in `ln_pos_link`. The tie-out reads both. Not fixed (Phase 4 posting code); noted for a later cleanup.
4. `GET /api/loan/accounts` now takes filters and returns customer and product (it was a plain list used by no screen).
5. Fix after the browser check: the account summary's `account` block is now plain values (dates as `YYYY-MM-DD`).
6. The POS admin layout leaves a wide blank band beside the menu at 1280 px. It does the same on the existing Phase 3 pages, so I left it as it is.

## 6. Sandbox state
- `dcommerce_loan_dev` is migrated (`20261102` limits, `20261103` documents, `20261104` print templates) and seeded (Phase 5B and menus, 14 loan menu lines).
- Switches are unchanged and off: `LOAN_POSTING_ENABLED`, `BS_INCLUDE_LOAN_BOOK` and `LOAN_FX_REVAL_ENABLED` are `false`; `LOAN_FX_OVERRIDE_TOLERANCE_PCT` = 0; `LOAN_FX_IMPLIED_RATE_BREACH` = REFUSE; `USE_BUSINESS_DATE` = N; `LOAN_DOC_MAX_MB` = 5.
- The contract template is PENDING (draft wording); the products' LAK limits were copied from the products (PENDING, like the products).

## 8. POS defects 9 and 10: impact query
`docs/loan/pos-defect-9-impact.sql` holds SELECT statements only (no CTEs, for MariaDB 10.2+). It is meant to run on one customer database at a time, optionally inside `START TRANSACTION READ ONLY` … `ROLLBACK`.
- **Q1 / Q2 (defect 9):** POS-order invoices with a sale line in another currency. For each: line currencies with their rates, the expected base, the header total, what the AR batch posts (`lineTotal × header rate`), the AR GL rows and their base, how much is understated, and a verdict:
  - `DEFECT 9`: posted at line amounts;
  - `AT RISK`: not posted yet;
  - `CHECK`: marked posted but has no AR GL rows.
- **Q3 / Q4 (defect 10):** `overdue` invoices never posted, including whether the invoice was already overdue when it was created.
- I ran it only on the local sandbox (`dcommerce_loan_test`):

| invoice | verdict | line | expected base | AR batch posted | understated |
|---|---|---|---|---|---|
| AR-INV-2026-00023 (defect-9 test) | DEFECT 9 | USD 15,000.00 @ 21,000 | 315,000,000 | 15,000 | 314,985,000 |
| INV-USD-1 / INV-USD-2 (FX test fixtures) | CHECK | USD 15,000.00 @ 21,000 | 315,000,000 | no AR rows | – |

- The two `CHECK` rows are test fixtures that were inserted as already posted. On a customer database, `CHECK` means you should look at how the invoice reached `posted`.
- Q3/Q4 return no rows in the sandbox. The query ran without error.

## 7. Incidents
- `dc_api/logs.log`: baseline refreshed to the current content as you asked (sha1 `142735ba…`). It contains a further 6-line append at **21:05** (14:05Z: logger demo lines and "client_db Connection established"), made before I started this part; not from my commands. Unchanged since.
