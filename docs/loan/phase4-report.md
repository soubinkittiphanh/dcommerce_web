# Loan Module: Phase 4 Report (payments, posting and EOD)

Date: 2026-10-30. Branch `feature/loan-module` in `dc_api` and `dc_web`, not pushed. Everything was built and tested against **local databases only** (`dcommerce_loan_dev`, `dcommerce_loan_test`). The remote database was not touched.

All posting sits behind the master switch **`LOAN_POSTING_ENABLED`**, seeded `'false'`. The balance-sheet loan section sits behind **`BS_INCLUDE_LOAN_BOOK`**, also seeded `'false'`. Both are `'false'` in `dcommerce_loan_dev`.

Decisions applied: the recommended options D1–D11, with your changes.
- **D1:** `AccountingPostingService.postJournalPairs` is purely additive and runs inside the caller's DB transaction (it refuses to run without one). No existing method was changed.
- **D2:** `transactionEntry` TOPUP/REFUND are read by POS code (school report, see §5), so dedicated **`LOAN_IN` / `LOAN_OUT`** types were added.
- **D4:** these kinds need a second person: DISB, FEE_REFUND, **INS_REMIT**, **ADV_REFUND**, WAIVE / INT_WAIVE, WRITE_OFF, REPOSSESS, VEH_DISPOSE and REVERSAL.
  - `LOAN_ALLOW_SELF_AUTHORIZE` applies.
  - A self-authorization is audited as `SELF_AUTH`.
- **D8:** EOD refuses to run past the POS business date, with a message that says why and what to do (§3).

## 1. What was built (dc_api)

| Area | Files |
|---|---|
| Schema | `20261030_loan_phase4.sql` + `_down`; `20261030_pos_transaction_entry_loan_types.js` (JS migration, see §4); `loan_migrate.js` runs JS migrations |
| Exact decimals | `src/loan/db/exact.js`: `CAST(col AS CHAR)` reads for DECIMAL columns, loan code only. The global driver and POS model types are unchanged. |
| Engine additions | `schedule.regenerateAfterPrepayment` (REDUCE_INSTALLMENT / REDUCE_TENOR); `engine/events.js` (waiver, insurance remittance, advance refund, fee refund, write-off, recovery, repossession, disposal) |
| Posting | `src/loan/posting/`:<br>- `guards`: switch, tax gate, dates, idempotency, test hook<br>- `glResolver`: role → chart account; exact bank match, no fuzzy fallback<br>- `pairing`: multi-leg journal → POS Dr/Cr pairs<br>- `journalWriter`: 2B validators before any write<br>- `posAdapters`: bank LOAN_IN/LOAN_OUT, AR settlement and void<br>- `accountState`: exact state and an effects recorder for reversal<br>- `handlers`: one per kind<br>- `transactionService`: pipeline, maker-checker, LIFO reversal |
| EOD | `src/loan/eod/eodService.js`: ACCRUAL, PENALTY, STATUS, PROVISION (month-end). One DB transaction per account and job, with idempotency key `EOD:<job>`; summarized GL per batch; `ln_batch_lock`; date roll |
| Balance sheet | `src/loan/reports/balanceSheetSection.js` + a guarded block in POS `getBalanceSheet` Mode B |
| Seed / security | `seed_loan_phase4.js`:<br>- SPF `LOAN_POSTING_ENABLED`, `BS_INCLUDE_LOAN_BOOK`, `LOAN_MAX_BACKDATE_DAYS` (= 0); never overwritten<br>- functions `LN_TRANSACTION` and `LN_EOD` (SUPER_ADMIN, ADMIN)<br>- `LN_GL_MAPPING` (SUPER_ADMIN full, ADMIN view) |
| API | `GET/POST /api/loan/accounts/:id/transactions`, `POST /api/loan/transactions/:txId/authorize` and `/reject`, `GET /api/loan/eod/status`, `POST /api/loan/eod/run`. API only, no new screens (D11). |
| Sandbox helper | `loan_propose_accounts.js --apply --yes`: creates the proposed chart accounts and PENDING global mappings. Local DB only; refused on any collision (D10). |

**dc_web:** one line. The GL-mapping screen now uses function `LN_GL_MAPPING` (it was `LN_ACCOUNTING_SETUP`, view only).

### Pipeline of one loan transaction (one DB transaction, all or nothing)
1. **Locks and claim:**
   - lock the account row (`FOR UPDATE`);
   - claim the `Idempotency-Key`. A replay of the same body returns the stored response; a different body returns 409.
2. **Guards:**
   - the switch;
   - the tax-profile gate for DISB and FEE_COLLECT;
   - base currency only;
   - value date: not in the future, backdating at most `LOAN_MAX_BACKDATE_DAYS`. A value date before `periodLockDate` is calculated at the value date and booked on the business date (`valueDatedAdjustment`).
3. **Handler:** the engine produces events and tags. Subledger changes are recorded as effects, which REVERSAL undoes.
4. **Journal and GL:**
   - product rule check, then role resolution, then the Phase 2B validators. If any check fails, nothing is written.
   - Then `ln_journal_posting`, followed by the POS `general_ledger` pairs written through `postJournalPairs`.
5. **POS subledgers:**
   - bank `transactionEntry` LOAN_IN / LOAN_OUT plus the `bankAccount.balance` change;
   - for DISB: an AR receipt (`glPostingStatus = 'posted'`, so the POS cash batch skips it), allocation lines, and the invoice status update;
   - every POS row is recorded in `ln_pos_link`.
6. **Checker kinds:** at creation the whole pipeline runs as a dry run inside a savepoint, which is then discarded, and the transaction is saved as `PENDING_AUTH`. Authorization runs it for real.

## 2. Test results
See the final message for the full output. All suites run against `dcommerce_loan_test`, which is rebuilt from `dcommerce_dev` on every run:
- pure engine tests;
- API/DB tests, including the earlier phases and all Phase 4 posting tests;
- crash/rollback at every step (`TEST_FAIL_AT`, honoured only when `LOAN_TEST_HOOKS=1` and the DB name ends in `_test`);
- tampered-journal rejection;
- double submit (same key and concurrent) and concurrent payments with different keys;
- EOD re-run and crash-resume;
- the NPL path;
- period lock and backdating;
- balance sheet unchanged with the switch off, compared against `main`'s original controller.

### Follow-ups from review
- **Who approved a schedule amendment.** `ln_amendment_history.approvedBy` is now nullable. Each row also carries `source` (`TRANSACTION`), `transactionId` and `makerId`.
  - `approvedBy` is set **only** when a checker authorized the transaction (for example DISB on a different date, which regenerates the schedule). A self-authorization under `LOAN_ALLOW_SELF_AUTHORIZE` records that user, and the audit records it as `SELF_AUTH`.
  - It stays NULL for single-step kinds: a cashier's REPAYMENT with a partial principal prepayment is recorded with the maker, not as "approved".
  - This is part of the unreleased `20261030_loan_phase4` migration; the DOWN reverses it.
- **Advance over-refund, tested in isolation.** Run with `LOAN_POSTING_ONLY='^isolated:'`: a freshly rebuilt test DB, the posting setup, and only this test, on a fresh loan.
  - With an advance of exactly 1,000,000, an ADV_REFUND of 2,000,000 is refused: HTTP 400, "Refund 2000000 exceeds the customer advance of 1000000".
  - Nothing is written: no pending transaction, journal, GL row, bank entry, link or idempotency row; the bank balance and the advance are unchanged.
  - 1,000,001 is also refused. Exactly 1,000,000 is accepted through maker-checker, and the advance becomes 0.

## 3. D8: business dates
EOD refuses when the POS business date is behind the loan date. The message:

> Loan EOD for D cannot run: the POS business date is P, which is behind the loan business date. Run the POS close of business (COB batch: POST /api/accountDailyBalance/batch) until the POS business date reaches D, then run the loan EOD again.

In `dcommerce_loan_dev`, the POS date copied from dev is 2026-04-09 and the loan date is 2026-10-30. EOD will therefore refuse there until the POS date catches up. That is expected.

## 4. Deployment note: `transactionEntry.transactionType` (LOAN_IN / LOAN_OUT)

**The model change alters the column at startup on every customer.** `src/transactionEntry/model.js` now declares `ENUM(..., 'LOAN_IN', 'LOAN_OUT')`. The POS app runs `sequelize.sync({ alter: true })` at startup. So the first start of this build on **every** customer database rewrites the `transactionEntry.transactionType` column to include the two values, whether or not the loan module is used.
- It only adds values. Existing rows, the default and the collation stay as they are.
- On a large `transactionEntry` table the ALTER can take time, and it locks the table while it runs. **Start the new build outside business hours.**
- The JS migration `20261030_pos_transaction_entry_loan_types.js` does the same change explicitly:
  - it reads the live column definition from `information_schema` and appends only LOAN_IN and LOAN_OUT;
  - it keeps the default and collation;
  - it is idempotent.

**Rollback:**
1. Make sure no loan cash rows exist. `node loan_migrate.js down` (run from a scratch directory) refuses while any `LOAN_IN` / `LOAN_OUT` row exists. Rows must first be reversed and then moved out of those types by an accountant's decision; the script never deletes them.
2. Revert the one-line change in `src/transactionEntry/model.js`. If you skip this, the next startup's `sync` adds the values again.
3. Run the DOWN step. It rebuilds the ENUM from the live definition without the two values and keeps the default and collation.
4. Restart the POS app.

## 5. D2 investigation (readers of TOPUP / REFUND)
- **The school report** filters `transactionType IN ('TOPUP','REFUND')` and treats `TOPUP` with debit > 0 as cash in. Loan rows would have polluted it, hence the new types.
- **`accountDailyBalance` (COB snapshot) and the account statement** use `getLedgerEffect`, which falls back to in = credit, out = debit for types it doesn't know.
  - LOAN_IN is written as a credit and LOAN_OUT as a debit, so both read correctly.
  - The real functions were tested: LOAN_IN of X raised the snapshot and the statement by X, and LOAN_OUT lowered them.
- **dc_web** (`accountStatement`, `staffActivity`): unknown types fall back to the default label and colour, so they render safely.
- **dc_mobile:** no code reads `transactionType`.

## 6. POS defects found (reported, not changed)
1. **`ReceiveHeader.syncInvoiceStatus` does nothing.** It looks up `sequelize.models.arInvoiceHeader`, but the model is registered as `ARInvoiceHeader`. The log says "arInvoiceHeader model not found for status sync". The loan code still calls it, then applies the same rule itself inside its transaction:
   - receipts ≥ total → paid;
   - a paid invoice that is no longer covered → overdue or sent.
   
   POS AR receipts entered through the POS screens are affected too: their invoices are probably never marked paid automatically.
2. **The invoice `beforeUpdate` audit hook runs outside the caller's transaction.**
   - It writes its audit row outside the caller's DB transaction. When the caller holds the invoice row lock (as every correct transactional update does), the audit insert waits on that lock until the socket times out, about 17 minutes in the test run.
   - The loan code therefore updates the invoice status with `hooks: false`. The change is recorded in `ln_transaction` and `ln_pos_link`, not in the POS invoice audit.
3. **The AR receipt `afterCreate` audit hook re-reads the row outside the transaction.** It cannot see the uncommitted row, so it writes no audit for receipts created inside a transaction (loan or otherwise).
4. **The invoice `afterCreate` audit hook logs "Include unexpected"** (bad include). It is harmless, but it means no audit row on invoice creation.

## 7. Limitations (by design for this phase)
- Posting supports **base-currency loans only**; other currencies are refused.
- REVERSAL is **LIFO over ONLINE transactions only**. EOD postings are not reversible through the API.
- `general_ledger.glBatchId` has a foreign key to the POS `gl_posting_batch`. Loan GL rows therefore leave it empty and carry the loan transaction number, or the EOD batch number, in `postingReference`.
- The multi-level `ln_approval_matrix` is not used yet; there is a single checker.
- **No screens for payments or EOD** yet (D11).
- GL mappings, entry rules and the tax profile remain **sandbox values** until the accountant confirms the chart accounts. With `LOAN_POSTING_ENABLED = 'false'`, nothing posts at a customer.

## 8. The AR receipt created at DISB: what it is and who counts it (investigated 2026-10-31, read-only)

### 8.1 What the receipt carries
`posAdapters.settleInvoice` creates one `ARReceiveHeader` per DISB with target SALE_INVOICE_SETTLEMENT:

| Field | Value |
|---|---|
| `receiptNumber` | `LN-<txNo>` (POS receipts use the `AR-RCP` prefix, so they cannot collide) |
| `paymentMethod` (POS ENUM `cash / check / bank_transfer / credit_card / other`) | **`other`** |
| `paymentId` (FK to the POS `payment` table: CASH, CREDIT, TRANSFER_BCEL, …) | **not set (NULL)** |
| `status` | `active` |
| `glPostingStatus` / `glBatchId` | `posted` / `<txNo>` (the loan posts its own GL: Dr LOAN_PORTFOLIO / Cr SALE_RECEIVABLE) |
| `referenceNumber`, `notes` | `<txNo>`, "Settled by loan disbursement `<txNo>`" |
| Lines | `ARReceiveLine` allocations to the invoice lines |

DISB creates **no bank entry**: no `transactionEntry` row and no `bankAccount.balance` change. No cash moves, because the finance company is the dealer itself.

### 8.2 Which POS reports and batches count it
| Report / batch you named | Exists in POS? | Does it count the loan receipt as cash received? |
|---|---|---|
| Daily collection | No report of that name. The nearest are the AR receipt list summary cards (below) and the bank daily balance (COB). | **No.** COB and the bank statement read only `transactionEntry`, and DISB writes none. |
| Cash flow | No cash-flow report in dc_api or dc_web. The balance sheet (Mode B) takes cash from bank balances. | **No.** Bank balances are not changed. |
| Shift close | Only `school/shift` and the POS ticket/shift code. Neither reads AR receipts. | **No.** |
| AR receipt list (`/admin/accounting/ar/receive`) | Yes | **Listed and included in "Total received", under the "Other" card, not "Cash" or "Bank transfer".** The cards classify by `payment.payment_code` or by `paymentMethod`; `other` with no `paymentId` lands in "Other". |
| Customer statement | No AR customer statement exists. The account statement is for bank accounts; there is also a money-advance statement. | **No.** |
| GL cash posting batch (`cashPostingService`, module AR_RECEIPT) | Yes | **No.** It picks only `glPostingStatus = 'unposted'`, which is tested. **Caution:** if a user ever reset the flag to `unposted`, the batch would post Dr *Bank Account 1002* / Cr AR, because it treats every method other than `cash` as bank. That would be a second, wrong posting. |

**Also affected (not in your list, but they count it as money received):** five POS P&L screens add **every active AR receipt, whatever its payment method**, to income as "ໃບຮັບເງິນ (AR Receive)", inside "Other Income":
- `pages/admin/pl`, `pages/admin/plCommission`, `pages/admin/saleCost`, `pages/admin/saleCostCommission`, `pages/reports/financial/pl`;
- plus `components/reports/ProfitLossReport.vue` (via `/api/ar-receive-headers/pl`), used by `pages/reports/profit-loss.vue`.

These screens filter only on status (voided and cancelled are excluded), never on method. Their sales figure (`/api/sale/findDetailByDate`) already includes the vehicle sale, credit or not.
- **Effect:** for a 300,000,000 vehicle sale with a 60,000,000 down payment and a 240,000,000 loan, these screens show 300m sales + 60m + 240m "AR Receive" = **600m income**.
- The 60m down-payment double count is pre-existing POS behaviour for any AR-settled POS sale. **The loan receipt adds the 240m.**
- The posted GL is correct: the loan posts Dr LOAN_PORTFOLIO / Cr SALE_RECEIVABLE, with no revenue. The GL-based P&L and trial balance are not affected.

### 8.3 Proposed fix: shown for approval, NOT implemented
A dedicated payment method alone would **not** fix the P&L screens, because they ignore the method. And it is not small:
- The POS `paymentMethod` ENUM is defined in four backend places:
  - the model;
  - `models/index.js` addColIfMissing;
  - `helper/sqlExecutor.js`;
  - the controller's `resolvePaymentMethodEnum` allow-list.
  
  That allow-list rewrites unknown values on every edit.
- A row in the POS `payment` table would appear in the POS payment pickers.

**Option A (recommended, smallest; no POS schema change):**
1. Mark the receipt explicitly. Keep `paymentMethod = 'other'` and add a fixed marker: `notes` and `referenceNumber` stay, and `receiptNumber` stays `LN-<txNo>`. The authoritative link already exists in `ln_pos_link` (`posTable = 'ARReceiveHeader'`).
2. Back end: **one new optional query flag** on the two list endpoints `GET /api/ar-receive-headers` and `/pl`: `excludeLoanSettlement=1`. When set, it adds `id NOT IN (SELECT posId FROM ln_pos_link WHERE posTable = 'ARReceiveHeader')`. Without the flag, nothing changes.
   - Touches `src/AR/receive/header/controller.js`, about 6 lines.
3. Front end: the six P&L consumers pass `excludeLoanSettlement: 1`. That is one parameter per call, in six POS dc_web files.

**Option B (what you suggested): dedicated method `loan_settlement`.**
- Add `'loan_settlement'` in the four backend ENUM/allow-list places. The model change alters `ARReceiveHeader.paymentMethod` at startup on every customer, the same deployment caveat as LOAN_IN/LOAN_OUT.
- Exclude it in the six P&L screens.
- Optionally make `cashPostingService` skip it.
- More POS files are touched than in A, and a migration is needed. Its advantage: the method is visible in the AR list ("Loan settlement" instead of "Other").

Either option also needs the protections in 8.4. **I recommend A + 8.4 (2).** Waiting for your decision.

### 8.4 How the existing POS AR receipt screen behaves with loan-settled invoices
Read from `pages/admin/accounting/ar/receive/index.vue` and `components/accounting/ar/receive/maintain/index.vue`, without editing either. Both files carry your unrelated local changes.

1. **List and view.** The receipt appears as `LN-<txNo>`, method "ອື່ນໆ / Other", status active, with its allocation lines. It is counted in "Total received" and "Other" (8.2).
2. **New receipts.** The invoice picker loads only invoices with status `draft` or `sent`. A loan-settled invoice is `paid`, so it **cannot be picked again**, and a second receipt cannot be entered through the screen.
   - The invoice is `paid` because the loan applies the status itself (POS defect §6.1).
   - Side note, pre-existing: `overdue` invoices cannot be picked either.
3. **Actions the screen offers on an active loan receipt: Edit, Void, Cancel.** Delete is refused by the API because the receipt has lines. Nothing in POS knows the receipt belongs to a loan:
   - **Void / Cancel** (and later **Reactivate**):
     - the receipt changes status;
     - POS `syncInvoiceStatus` is a no-op (§6.1), so the invoice **stays `paid`**;
     - the loan account stays DISBURSED, and the GL still shows Dr portfolio / Cr AR.
     
     The subledger and the loan disagree silently. A later loan REVERSAL of that DISB is then **refused** (409 "AR receipt … is voided"). That is safe, but it needs manual repair.
   - **Edit:** a user can change the amount, date, method or allocations, or the invoice.
     - After saving, if the invoice is linked to a POS sale and is `paid`, the screen offers to change the **sale's** payment from credit to the receipt's `paymentId`. The loan receipt has none, so the screen falls back to **`paymentId = 1`**.
     - In the local copy there is no payment id 1. At a customer it can be any method; if it is CASH, the vehicle sale would then show as a cash sale.
4. **Balance sheet after a loan REVERSAL (pre-existing POS defect, affects us).** Mode B computes AR as invoice total minus **all** linked receipts, with **no status filter**. After a DISB reversal:
   - the loan receipt is voided and the invoice is back to sent or overdue;
   - but the voided 240m receipt is still subtracted, so the report's AR is understated by 240m.
   
   With `BS_INCLUDE_LOAN_BOOK = 'true'`, the loan reconciliation line shows this as a GL-vs-subledger difference.

**Proposed protection (part of the fix, not implemented):**
- (1) The loan code already refuses its own reversal when the receipt was changed outside the loan.
- (2) A small guard in the POS AR receipt API: `update`, `void`, `cancel` and `reactivate` refuse a receipt that has an `ln_pos_link` row, with the message "This receipt settles loan `<txNo>`; reverse it from the loan module." That is one check in `src/AR/receive/header/controller.js`. The screen keeps working and just shows the API message.
- (3) Optionally, hide those menu items in the screen for `LN-` receipts.

## 9. Decisions on §8 (2026-10-31): implemented, plus the DISB reversal proposal

### 9.1 Consumer check before flipping the default
**Every caller** of `GET /api/ar-receive-headers` and `GET /api/ar-receive-headers/pl` was searched in dc_web, dc_mobile, dc_pos and dc_api:

| Consumer | Needs loan receipts? |
|---|---|
| `pages/admin/accounting/ar/receive/index.vue` (AR receipt list) | **Yes**: passes `includeLoanSettlement=1` (see 9.2, screen patch) |
| `pages/admin/pl`, `plCommission`, `saleCost`, `saleCostCommission`, `reports/financial/pl` | No: P&L income (they must *not* see them, §8.2) |
| `components/reports/ProfitLossReport.vue` (`/pl`) | No: P&L income |
| `ordersFromPosCredit`, AR receipt maintain dialog | They call only `/sequence` and `POST`: not affected |
| dc_mobile, dc_pos | No calls to these endpoints |
| Server side: balance sheet, AR invoice controller, cash posting batch, income, MOU | They read the models directly, not the endpoints: not affected |
| Balances, AR statements, dashboards | None of them use these endpoints (there is no AR customer statement, §8.2) |

No consumer other than the AR list screen needs the loan receipts, so **the default is flipped as you decided** (the opt-in fallback was not needed). `/search`, `/statistics` and `/by-invoice` are unchanged.

### 9.2 What was implemented
**Back end:** `src/loan/posting/posReceiptLink.js` (new, loan code) plus small hooks in two POS files:
- **POS file 3** `src/AR/receive/header/controller.js`: `findAll` and `findAllForPL` add `id NOT IN (SELECT posId FROM ln_pos_link WHERE posTable = 'ARReceiveHeader' AND role = 'AR_SETTLEMENT')` unless `includeLoanSettlement=1` (or `true`). With the flag, every returned row carries `loanSettlementTxNo` (the DISB transaction number, or `null`).
  - On a database without the loan tables, nothing changes: the existence of `ln_pos_link` is checked first and cached.
  - The reversal's `AR_VOID` link points at the same receipt, so the filter keys on `AR_SETTLEMENT` only.
- **POS file 4** `src/AR/receive/header/router.js`: the middleware `refuseLoanReceipt` runs before `PUT /:id`, `DELETE /:id`, `POST /:id/void`, `/cancel` and `/reactivate`. It answers 409 "This receipt settles loan `<txNo>`; reverse it from the loan module."
  - **Delete is included too**: it was already refused for receipts with lines, and this makes the message clear.
  - The loan's own reversal changes the receipt through the model, not the API, so it is unaffected.

**Screen (NOT applied):** `pages/admin/accounting/ar/receive/index.vue` is one of the two files you told me never to edit or commit, and it carries someone's uncommitted local change. So the screen change is prepared as a patch, not applied:
- `fetchReceipts` passes `includeLoanSettlement: 1`;
- the method chip shows **"Loan settlement"** (deep-purple) for rows with `loanSettlementTxNo` or an `LN-` receipt number;
- Edit, the divider, Void, Cancel and Reactivate are hidden for those rows.

The patch was built against the committed file. `git apply --check` passes on the working copy (it applies on top of the uncommitted local change), and the patched template compiles with no errors. **Until it is applied, the AR list screen no longer shows loan settlement receipts.** The summary cards are unchanged (loan receipts would still count under "Other" once the patch is applied). A separate "Loan settlement" card is possible if you want one.

**Tests (new, both pass alone and in the full suite):**
- *POS AR receipt API: loan settlement receipts …*
  - both endpoints return only the down payment by default, and the down payment plus the loan receipt with `includeLoanSettlement=1`;
  - `loanSettlementTxNo` = txNo on the loan receipt and `null` on the down payment;
  - all five mutating calls answer 409 with the exact message; receipt and invoice unchanged;
  - an ordinary receipt passes the guard.
- *DISB reversal: balance sheet AR line and loan reconciliation* (9.3).

Full suite **105 passed, 0 failed**; protected-file hashes OK.

### 9.3 DISB reversal and the balance sheet: current behaviour (tested) and proposal (NOT implemented)
**What the test shows** (deltas against just before the DISB; the test database is a copy of `dcommerce_dev`, whose POS GL and subledger already differ, so only the deltas mean anything):

| Step | AR line (Mode B) | Portfolio 1211 | Recon AR: GL | Recon AR: subledger | Recon AR: difference |
|---|---|---|---|---|---|
| after DISB | −240,000,000 | +240,000,000 | −240,000,000 | −240,000,000 | 0 |
| after REVERSAL of the DISB | **−240,000,000** | 0 | 0 | **−240,000,000** | **+240,000,000** |

After the reversal the invoice is back to `sent`; its receipts are the down payment (`active`, 60m) and the loan receipt (`voided`, 240m). Mode B still subtracts the voided receipt (POS defect, `pos-defects.md` #6), so the AR line stays 240m low and the loan reconciliation line shows the 240m difference. The test asserts today's numbers, so it fails as soon as the behaviour changes and must then be updated to the expected zeros.

**Options**

| | Option | Effect | Verdict |
|---|---|---|---|
| R1 | **POS fix:** Mode B counts only active receipts: `include: [{ …, where: { status: 'active' } }]` in `adbReportController.js` (already a touched POS file; one line) | AR line and reconciliation return to 0 after the reversal; manual POS voids are fixed too | **Recommended** |
| R2 | Loan-only: on reversal, instead of voiding, add an offsetting receipt of −240m (active, `posted`, linked) | Mode B nets to the right figure without a POS change, but a negative receipt shows in the AR list and would need exclusions in the P&L screens and the cash batch | Not recommended |
| R3 | Loan-only: on reversal, zero the voided receipt's amount and lines | Fixes the number but destroys the record of what was settled | Rejected |
| R4 | Loan-only report adjustment: the reconciliation adds back voided loan receipts on open invoices | The reconciliation line looks clean, but the POS AR line is still wrong | Rejected |

**With R1:**
- **Expected test result:** after the reversal, all five deltas are 0.
- **Reversal procedure:** unchanged. The receipt is voided, the invoice reopens, and the GL is mirrored.
- **Switch-OFF test:** the test that compares the switch-OFF balance sheet with `main` would then differ wherever a voided receipt sits on an open invoice. It would compare against `main` plus the R1 line instead.
- **As-of dates:** a receipt voided *after* the as-of date would also stop counting for earlier as-of dates, because receipts have no void date, only `updatedAt`. Fixing that needs a void-date column; it is a separate decision.

Waiting for your decision on R1.

## 10. Decision on R1 (2026-10-31): implemented behind the loan switch
- **Code (POS file `src/GL/adbReportController.js`, dc_api `155fe1d`):**
  - `BS_INCLUDE_LOAN_BOOK` is now read once, before the AR step.
  - **Switch on:** only `active` receipts reduce an open invoice (`include … where: { status: 'active' }`).
  - **Switch off:** the include is exactly the original, so customers without the loan section see no change.
  - The loan section block reuses the same flag.
- **Test** *DISB reversal: with the loan section on, … return to zero; with it off, the output is identical to main*:

  | Step (switch on, deltas against before DISB) | AR line | Portfolio | Recon GL | Recon subledger | Recon difference |
  |---|---|---|---|---|---|
  | after DISB | −240,000,000 | +240,000,000 | −240,000,000 | −240,000,000 | 0 |
  | after REVERSAL | **0** | 0 | 0 | **0** | **0** |

  Then the test turns the switch off, checks the fixture (the invoice is open and has a `voided` 240m receipt), and compares the whole response with the controller loaded from `main`: **identical**. With the switch off the original behaviour remains: the AR line is lower by every voided receipt on open invoices (480m in the full run, because an earlier test also reversed a DISB).
- **Earlier test still in place:** *balance sheet: switch OFF returns exactly what the original POS code returns …* (both tests now share one loader for `main`'s controller).
- **Caveat** (also in `pos-defects.md` #6): receipts have no void date. With the switch on, a receipt voided after an as-of date also stops counting for that earlier date.
- **Results:** full suite **105 passed, 0 failed**; protected-file hashes OK.
- **Files for review:**
  - `docs/loan/ar-receive-screen.patch`: the AR receipt screen patch, **not applied**;
  - `docs/loan/phase4-pos-diffs.patch`: complete diffs against `main` of every existing POS file changed on this branch (dc_api and dc_web), plus the new non-loan files that plug into the POS app, with the file list at the top. Password literals in `src/config/dbClient.js` are redacted there.
