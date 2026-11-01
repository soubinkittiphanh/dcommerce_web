# Loan module: boarding existing installment contracts (Phase 6 design)

**Status:** design for review, 2026-11-01. No code yet: this is tool T2, built only after separate approval.

**Decisions taken by the owner (2026-11-01):**
- **D-BOARD-GL:** the opening journal credits a new role `BOARDING_CLEARING`. Its balance is shown in the GL tie-out, and a go-live check requires it to be 0 after the accountant's reclassification journal.
- **D-BOARD-SCHED:** when the customer supplies the remaining schedule (principal/interest split per installment), import it as given. Regenerate only to fill gaps. Always show a comparison against a regenerated schedule, and flag differences for manager review.
- Accountant questions **Q35** (where the clearing account is mapped and how it is cleared) and **Q36** (opening provisions for past-due boarded accounts) are added to the addendum §9.

---

## 1. Goal and limits
Bring live installment contracts that were managed outside the loan module (a spreadsheet, the POS AR invoice, another system) into the loan module **as of a cut-over business date**. From then on they behave like any loan: EOD, payments, statements, reports.

**Rules:**
- **No backdating.** The opening transaction (new kind `BOARD`) is dated the **current loan business date** (the cut-over). `LOAN_MAX_BACKDATE_DAYS` is not changed. Contract dates before the cut-over are stored on the account as history only (`valueDate`, `firstDueDate`, the paid installments). No events are replayed for the past.
- **Maker, manager review, checker.** The maker uploads. A manager acknowledges every flagged difference. A checker, different from the maker, authorizes.
- **Dry run first.** Nothing is created until the checker authorizes. The dry run builds every account, schedule and journal in memory and rolls back.
- **Posting must be on** (`LOAN_POSTING_ENABLED = true`) for the authorize step. The upload, validation, comparison and dry run work with posting off, so the data can be prepared before go-live.
- **In scope:** contracts that are live (outstanding principal > 0), in a currency the product offers, on an authorized product.
- **Out of scope for the first version:**
  - written-off contracts (they could be boarded memo-only later);
  - contracts in legal recovery with a repossessed vehicle;
  - contracts whose terms changed mid-life in ways the product can't express (several rate changes, restructures). These are refused with a clear reason and handled manually or by a later version.

---

## 2. Input
Two CSV templates (UTF-8, comma separated, one header row) are uploaded on the boarding screen. Both are also downloadable from that screen, pre-filled with the column names and one example row.

### 2.1 Contracts: one row per contract (required)
| Column | Required | Rules |
|---|---|---|
| `externalRef` | yes | the old contract number; unique across all boarding batches (idempotency) |
| `customerId` | yes | an existing POS `client.id` (customers are created in POS first) |
| `productCode` | yes | an AUTHORIZED loan product |
| `currency` | yes | offered by the product, within its per-currency min/max for the original principal |
| `branchId` | no | default 1 |
| `contractDate`, `valueDate`, `firstDueDate` | yes | ≤ cut-over; `firstDueDate` > `valueDate` |
| `tenorMonths`, `originalPrincipal`, `interestRate` (annual %), `repaymentMethod` | yes | as the product allows |
| `balloonAmount`, `downPaymentAmount` | no | |
| `installmentsPaid` | yes | count of installments fully paid before the cut-over |
| `outstandingPrincipal` | yes | as of the cut-over, in the contract currency |
| `interestDueUnpaid` | yes | interest of installments already due and not paid |
| `accruedInterestNotDue` | no | only for products that recognize interest daily; else must be 0 or empty |
| `feesDueUnpaid` | no | only when billed fees are enabled |
| `penaltyMemo` | no | penalty owed (memo only under MEMO_ONLY; no GL) |
| `advanceBalance` | no | money paid in advance and not yet applied |
| `oldestUnpaidDueDate` | no | if given, compared with the date computed from the schedule |
| `statusGiven` | no | the old system's class (e.g. NORMAL / WATCH / SUBSTANDARD …), compared with the computed one |
| `saleHeaderId`, `invoiceNumber` | no | link to the POS sale or AR invoice, if the contract came from one (information; see §5.3) |
| `collateralRef`, `vehicleChassisNo` | no | stored as collateral |
| `remarks` | no | |

### 2.2 Remaining schedule: one row per installment (optional, recommended)
| Column | Rules |
|---|---|
| `externalRef` | matches a contract row |
| `installmentNo` | 1..n over the **whole** contract (paid ones may be included or left out) |
| `dueDate` | strictly increasing |
| `principal`, `interest` | the installment's split, in the contract currency |
| `fees`, `insurance` | optional |
| `principalPaid`, `interestPaid` | what was already paid on this installment (partial payments) |

---

## 3. Schedule: imported as given, regenerated only to fill gaps
For each contract, the tool builds two schedules:

1. **Regenerated:** the engine's schedule from the contract terms (product method, rate, tenor, first due date, balloon), the same code that books new loans. Installments 1..`installmentsPaid` are marked paid.
2. **Effective:** the one the account will carry:
   - **Imported rows exist:** they are used as given for every installment they cover. Gaps are filled from the regenerated schedule:
     - missing installment numbers;
     - a missing interest/principal split (only a total given);
     - installments after the last imported one, regenerated from the remaining principal so the schedule still runs to maturity.
   - **No imported rows:** the regenerated schedule is used.
   - The source is kept per installment (`IMPORTED` / `REGENERATED`) and shown on the screen.

**Comparison (always shown):** effective vs regenerated, installment by installment, plus contract-level checks:

| Flag | Raised when | Default verdict |
|---|---|---|
| `DIFF_PRINCIPAL`, `DIFF_INTEREST` | an imported installment differs from the regenerated one by more than the tolerance | WARN (manager review) |
| `DIFF_DUE_DATE` | dates differ | WARN |
| `GAP_FILLED` | some installments were regenerated to fill gaps | WARN |
| `SUM_PRINCIPAL` | Σ unpaid principal of the effective schedule ≠ `outstandingPrincipal` | **ERROR**: the schedule must explain the balance |
| `SUM_INTEREST_DUE` | Σ unpaid interest of installments due on or before the cut-over ≠ `interestDueUnpaid` | **ERROR** |
| `OLDEST_DUE` | computed oldest unpaid due date ≠ `oldestUnpaidDueDate` | WARN |
| `STATUS_DIFF` | class computed from DPD and the authorized status rules ≠ `statusGiven` | WARN. The computed class is used, never the given one |
| `RATE_IMPLIED` | the imported interest doesn't match the stated rate on the regenerated basis beyond the tolerance (e.g. a rate change) | WARN, or ERROR if above 10× tolerance |
| `MATURITY_DIFF` | the effective last due date ≠ the contract's maturity | WARN |

- **Tolerance:** SPF `LOAN_BOARDING_SCHED_TOLERANCE` (default: 1 currency minor unit per installment, i.e. 1 kip for LAK and 0.01 for USD/THB).
- **ERROR** rows cannot be boarded until the input is corrected and re-uploaded.
- **WARN** rows need a manager's acknowledgement with a note (§4, step 3). Rows with no flags need none.

---

## 4. Flow and states
```
Batch:  UPLOADED → VALIDATED → REVIEWED → DRY_RUN_OK → PENDING_AUTH → POSTED
                                                     ↘ REJECTED (checker)    ↘ (per-row REVERSED, §7)
Row:    OK | WARN | ERROR   ·   review: NOT_NEEDED | PENDING | ACKNOWLEDGED   ·   result: — | BOARDED | REVERSED
```

1. **Upload (maker, `LN_BOARDING` CREATE):**
   - choose the cut-over (always the current loan business date) and upload the CSVs;
   - rows above SPF `LOAN_BOARDING_MAX_ROWS` (default 500) are refused, so split into batches;
   - an `externalRef` already boarded or in an open batch is refused.
2. **Validate (automatic, on upload):** each row gets OK / WARN / ERROR and messages:
   - product AUTHORIZED, with the accounting check clean;
   - currency offered, limits, fixed amounts;
   - customer exists;
   - dates ≤ cut-over;
   - amounts ≥ 0 and rounded to the currency;
   - the comparison flags (§3).
3. **Manager review (`LN_BOARDING` EDIT):**
   - for each WARN row, the comparison is shown side by side (imported vs regenerated, differences highlighted);
   - the manager acknowledges with a note, or excludes the row from the batch;
   - the batch becomes REVIEWED when no row is PENDING.
4. **Dry run (maker):**
   - for every row, in one DB transaction that is rolled back: create the application, account, schedule, balances and the BOARD transaction with its journal, running every validator (balance in currency and in base, role mapping, entry rules);
   - **shows:** counts and totals per product, currency and class; the opening GL per role and account, with the `BOARDING_CLEARING` total; any row that failed, with the reason;
   - writes nothing except the result on the batch;
   - the batch becomes DRY_RUN_OK only if every remaining row passed. Changing any row resets the batch to VALIDATED.
5. **Submit (maker):** the batch becomes PENDING_AUTH and appears in the pending queue.
6. **Authorize (checker, `LN_BOARDING` AUTHORIZE, checker ≠ maker; also ≠ the reviewer unless the customer accepts it):**
   - re-runs the dry-run checks;
   - posts **one DB transaction per contract**, so one bad row can't leave a half-boarded contract. A row that fails at this point is marked and reported, and the others continue;
   - the batch becomes POSTED with per-row results.
   - Reject: the batch becomes REJECTED with a reason, and nothing is created.

Every step writes `ln_audit_log` (entity `boarding-batch` / `boarding-row`, with user and IP).

---

## 5. What authorizing a row creates
### 5.1 Records
- `ln_application`: status `BOARDED` (new status value), linked to the batch row; no approval workflow (the batch authorization is the approval).
- `ln_account`:
  - stage `DISBURSED`;
  - historical `valueDate`, `firstDueDate`, `maturityDate`;
  - `disbursedAmount = originalPrincipal`;
  - status = the computed class;
  - `currentDpd` from the oldest unpaid due date;
  - `statusSince` = cut-over;
  - `lastEodDate` = the previous loan business date, so the first EOD after boarding processes the cut-over day;
  - a parameter snapshot of the product as today.
- `ln_schedule` / `ln_schedule_component`:
  - the effective schedule;
  - paid installments carry `amountPaid = amountDue` (memo history; no cash moves now);
  - partly paid installments carry what was paid;
  - interest on installments due by the cut-over is `amountRecognized` and in the bucket matching the class (BOOKED or SUSPENDED).
- `ln_account_balance` per component: outstanding = the opening amounts; `totalPaid` = the history paid.
- For foreign currency: base amounts on the balances at the **cut-over date rate** (the carrying base starts there).
- `ln_accrual_ledger`: for daily-recognition products, one opening row with `accruedInterestNotDue` as the cumulative amount.
- Collateral row, if given.
- The `BOARD` transaction (`ln_transaction`):
  - value, booking and posting date = cut-over;
  - source `BOARDING`, `requestJson` = the row input;
  - maker = the batch maker, checker = the batch checker.

### 5.2 Opening journal: event `BOARD` (new; entry rules seeded PENDING; the accountant confirms them)
| Tag | Dr | Cr | Amount |
|---|---|---|---|
| `OPEN_PRIN` | LOAN_PORTFOLIO (qualifier = computed class) | **BOARDING_CLEARING** | outstanding principal |
| `OPEN_INT` | INTEREST_RECEIVABLE | BOARDING_CLEARING | interest due unpaid (+ accrued not due, daily recognition), **performing accounts** |
| `OPEN_INT_SUSP` | INTEREST_RECEIVABLE | SUSPENDED_INTEREST | the same, **non-performing accounts**: kept in receivable but suspended, as the status rules would have done |
| `OPEN_FEE` | FEE_RECEIVABLE / INSURANCE_RECEIVABLE | BOARDING_CLEARING | billed fees due (only if billed fees are on) |
| `OPEN_ADV` | BOARDING_CLEARING | CUSTOMER_ADVANCE_LIAB | advance balance |
| `OPEN_PROV` | BOARDING_CLEARING | PROVISION_RESERVE | opening provision, **only if the accountant chooses option A of Q36** |

- **Penalty:** memo only under MEMO_ONLY, so no GL. The memo amount is set on the account.
- **Foreign-currency contracts:** every line in the contract currency at the cut-over rate. Base = round(amount × rate). There are no FX legs at boarding. The clearing account holds the same base.
- **Validators:** the journal must balance in the contract currency and in base, exactly like every other loan journal.
- **POS GL:** the journal is written into POS `general_ledger` through the same journal writer and pairing as other loan transactions. One GL batch per boarding batch and currency (`BOARD-<batchNo>-C<currency>`).

### 5.3 Contracts that came from a POS AR invoice
If the old contract is still an open POS AR invoice (the car was sold on credit and the instalments were being receipted against the invoice), the accountant's reclassification must also settle that invoice, or the receivable would be counted twice: once on the AR invoice and once in LOAN_PORTFOLIO.

The boarding screen lists every row with `saleHeaderId` / `invoiceNumber`, with the invoice's open amount, so the accountant can do this. Q35 asks how. The tool doesn't settle invoices automatically in the first version, because the owner chose clearing over invoice settlement.

---

## 6. `BOARDING_CLEARING` in the tie-out and at go-live
- **New role** `BOARDING_CLEARING` (catalog, seeded PENDING). The accountant maps it, e.g. to a temporary "loan migration clearing" liability or suspense account (Q35).
- **GL tie-out screen** (`/admin/loan/reports`, GL tie-out tab): a dedicated line *Boarding clearing* shows:
  - the journal total credited to the role;
  - the GL balance of the mapped account (all sources, so it includes the accountant's manual reclassification);
  - the difference.

  The line is informational. It doesn't make the tie-out "unbalanced", because the reclassification is a POS manual journal by design.
- **Go-live check** (runbook step 10, and an item in the Studio go-live checklist): *the GL balance of the BOARDING_CLEARING account is 0 after the accountant's reclassification journal*. The item can be confirmed only when the balance is 0 in base and in each currency.
- After all batches are posted and cleared, the role may be left mapped (inactive use) for audit.

---

## 7. Rollback
- **One contract:** a REVERSAL of its `BOARD` transaction (checker) is allowed while the account has **no other transaction** and **EOD has not run since boarding**.
  - The reversal mirrors the opening journal exactly, closes the account with status `BOARD_REVERSED`, and frees its `externalRef` for a corrected re-upload.
  - After EOD or any payment, reverse those first, or correct with normal transactions.
- **Whole batch:** the screen offers "reverse all reversible rows" (each still a REVERSAL with a checker). The batch shows *reversible* until the first EOD after posting.
- **Before authorization,** nothing exists to roll back: reject the batch, or exclude rows.

---

## 8. Data model (new migration, reversible; its DOWN refuses while any row is BOARDED)
| Table | Key columns |
|---|---|
| `ln_boarding_batch` | `id`, `batchNo` (unique), `cutoverDate`, `status`, `rowCount`, `okCount`, `warnCount`, `errorCount`, `dryRunJson` (totals), `makerId`, `reviewerId`, `checkerId`, `authStatus`, `rejectReason`, timestamps |
| `ln_boarding_row` | `id`, `batchId`, `rowNo`, `externalRef` (unique while not REVERSED/EXCLUDED), `inputJson`, `verdict`, `flagsJson`, `comparisonJson`, `reviewStatus`, `reviewNote`, `reviewerId`, `excluded`, `loanAccountId`, `transactionId`, `result`, `resultMessage` |
| `ln_boarding_schedule_line` | `rowId`, `installmentNo`, `dueDate`, `principal`, `interest`, `fees`, `insurance`, `principalPaid`, `interestPaid`, `source` (IMPORTED / REGENERATED) |

**Catalog and settings (seeded PENDING / defaults):**
- event `BOARD`, kind `BOARD` (checker);
- tags `OPEN_PRIN`, `OPEN_INT`, `OPEN_INT_SUSP`, `OPEN_FEE`, `OPEN_ADV`, `OPEN_PROV`;
- role `BOARDING_CLEARING`;
- application status `BOARDED`, account status `BOARD_REVERSED`;
- function `LN_BOARDING` (VIEW, CREATE, EDIT, AUTHORIZE; SUPER_ADMIN only by default);
- SPF `LOAN_BOARDING_MAX_ROWS = 500`, `LOAN_BOARDING_SCHED_TOLERANCE = 1` (minor units).

**API** (all `LN_BOARDING`; the same patterns as the other loan routes):
- `GET /boarding/templates/:name`;
- `POST /boarding/batches` (upload);
- `GET /boarding/batches`, `GET /boarding/batches/:id`, `GET /boarding/rows/:id`;
- `POST /boarding/rows/:id/review`, `/exclude`;
- `POST /boarding/batches/:id/dry-run`, `/submit`, `/authorize`, `/reject`, `/reverse-reversible`.

**Screen** `pages/admin/loan/boarding`:
- batch list → batch page (upload results, filters by verdict, totals);
- row page with the side-by-side comparison;
- review dialog;
- dry-run summary with the opening GL per account;
- authorize/reject for the checker (also listed in the pending queue).

---

## 9. Tests planned with T2
- **Pure:** the comparison flags on crafted schedules (equal, off by 1 minor unit, off by more, missing installments, missing split, extra installments, a rate change); gap filling keeps Σ principal = outstanding; DPD and class from the oldest due date.
- **Integration** (`dcommerce_loan_test`):
  - a LAK performing contract, a non-performing one (OPEN_INT_SUSP), one with an advance, a USD contract at the cut-over rate;
  - the journal balances in currency and base;
  - `BOARDING_CLEARING` total = Σ opening lines;
  - the first EOD after boarding accrues from the cut-over only (no catch-up of past days);
  - payments after boarding allocate against the imported schedule;
  - REVERSAL restores everything and frees `externalRef`; a second upload of the same `externalRef` is refused while BOARDED.
- **Refusals:** maker = checker; ERROR rows; an un-reviewed WARN; posting off at authorize; more rows than the limit; product not authorized; currency not offered; `SUM_PRINCIPAL` mismatch.
- **Regression:** the full existing suite; no change to `LOAN_MAX_BACKDATE_DAYS`; LAK journals of other kinds byte-identical.

---

## 10. Accountant questions (added to `rev5-accounting-addendum.md` §9)
- **Q35. Boarding clearing account:**
  - Which account should `BOARDING_CLEARING` map to?
  - How will it be cleared: against the old receivable account, against retained earnings or opening-balance equity, or against open POS AR invoices for contracts that came from a POS credit sale (§5.3)?
  - Who posts the reclassification journal, and by when after each boarding batch?
- **Q36. Opening provisions for past-due boarded accounts:**
  - **A:** book the provision at boarding against the clearing account (`OPEN_PROV`: Dr BOARDING_CLEARING / Cr PROVISION_RESERVE), so the provision built up in the old books carries over and the first loan provision run expenses only the change.
  - **B:** book no opening provision and let the first month-end provision run expense the whole amount (P&L impact in the boarding month).
  - If A: from which figure (the old books' provision, or the loan module's rules applied at the cut-over)?
