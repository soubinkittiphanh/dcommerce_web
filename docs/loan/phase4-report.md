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
