# Loan module: UAT scripts (Phase 6)

**Status:** draft for review, 2026-11-01.

**Where to run:** on a **restored copy** of the customer's database, after the runbook staging-safety step 2b. Never on production.

**Expected GL entries:** every "Expected GL" block was taken from real journals produced by the automated test suite in the local sandbox (`dcommerce_loan_test`, run of 2026-11-01, 133/133 passed), by reading `ln_journal_posting` read-only. Amounts in the examples are those test amounts. In UAT, check the **pattern**:
- the same roles on the same sides;
- amounts that follow the stated rule;
- debits = credits in the contract currency, and in base (LAK).

Account numbers are the **proposed** ones from `loan_propose_accounts.js`. Replace them with the customer's confirmed accounts (runbook step 8.1). The cash/bank line uses the GL account of the bank account chosen (in the sandbox: 1105 LAK bank, 1106 USD bank).

---

## 1. Roles and groups (to create in the POS security screen; not seeded)
Create these four groups in **Security → User Group Access Rights** (`/admin/security/grants`) and assign the testers. An optional idempotent seed can create them later, after UAT, if you want one.

| Grant (function: actions) | LOAN_CASHIER | LOAN_MANAGER | LOAN_CHECKER | LOAN_ACCOUNTANT |
|---|---|---|---|---|
| LN_ACCOUNT: VIEW | ✓ | ✓ | ✓ | ✓ |
| LN_ACCOUNT: CREATE (book an approved application) | | ✓ | | |
| LN_TRANSACTION: VIEW | ✓ | ✓ | ✓ | |
| LN_TRANSACTION: CREATE (payments; also requests for every other kind, see security checklist G1) | ✓ | ✓ | | |
| LN_TRANSACTION: AUTHORIZE | | | ✓ | |
| LN_APPLICATION: VIEW, CREATE, EDIT | | ✓ | VIEW | |
| LN_APPLICATION: AUTHORIZE | | | ✓ | |
| LN_DOCUMENT: VIEW, CREATE | VIEW | ✓ | VIEW | |
| LN_COLLECTION: VIEW | ✓ | ✓ | ✓ | ✓ |
| LN_REPORT: VIEW (portfolio, aging, NPL, provisions, GL tie-out) | | ✓ | ✓ | ✓ |
| LN_VAT_REPORT: VIEW | | ✓ | ✓ | ✓ |
| LN_TAX_PROFILE: VIEW | | | | ✓ |
| LN_EOD: VIEW | | ✓ | ✓ | |
| LN_EOD: CREATE (run EOD) | | ✓ | | |
| LN_EXCHANGE_RATE: VIEW, CREATE | VIEW | ✓ | VIEW | |
| LN_EXCHANGE_RATE: AUTHORIZE | | | ✓ | |
| Parameter functions (LN_PRODUCT, LN_FEE, LN_ENTRY_RULE, LN_GL_MAPPING, LN_PRINT_TEMPLATE, …): VIEW, CREATE, EDIT | | ✓ (parameter maker) | VIEW | |
| Same parameter functions: AUTHORIZE | | | ✓ | |
| LN_AUDIT_LOG: VIEW | | ✓ | ✓ | ✓ |

**LOAN_ACCOUNTANT** is view-only: the loan reports, the VAT report, the GL tie-out and the tax profile, for reconciliation and tax work. It makes no changes and authorizes nothing.

**Kept on SUPER_ADMIN only** (no role above holds them): **LN_CHECKLIST** (the go-live checklist), **LN_ACCOUNTING_SETUP**, and the **LN_TAX_PROFILE** change actions **EDIT and AUTHORIZE** (the accountant gets LN_TAX_PROFILE VIEW only; confirming or editing the tax profile stays with SUPER_ADMIN). *(If the tax profile should not be visible to the accountant at all, drop the LN_TAX_PROFILE: VIEW row above — then LN_TAX_PROFILE is wholly SUPER_ADMIN.)*

**Rules:**
- Nobody holds CREATE and AUTHORIZE for the same function, unless the customer accepts it in writing.
- `LOAN_ALLOW_SELF_AUTHORIZE` stays `false`.
- Keep SUPER_ADMIN for setup only.
- The seeded generic **ADMIN** group holds CREATE *and* AUTHORIZE on loan functions (it is granted every loan function). Review and tighten it before go-live — see the go-live checklist item.

---

## 2. How to read a script
Each script has:
- **ID**;
- **Role**;
- **Before**: data that must exist;
- **Steps**: screen actions. *API* marks kinds that have no screen yet; see the appendix;
- **Expect on screen**;
- **Expect GL**: role, account and side, with the amount rule;
- **Also check**: AR, bank and other side effects.

After each posted transaction, the tester also checks:
- the **GL tie-out** tab (`/admin/loan/reports`) still shows *balanced*;
- the transaction appears on the account's **Transactions** tab with the maker and checker names.

Result line at the end of each script: `PASS / FAIL — tester initials — date — remarks`.

**Common preconditions (set up once by the manager and checker):**
- **P1:** one authorized LAK product (e.g. a flat-rate car loan) and one product offering USD with limits and fixed amounts;
- **P2:** a POS credit sale of a vehicle with an open AR invoice (LAK), and one in USD for the FX scripts;
- **P3:** a LAK bank account and a USD bank account in POS;
- **P4:** an authorized USD rate for today (exchange-rate screen: copy POS rate, then a checker authorizes);
- **P5:** switch `LOAN_POSTING_ENABLED = true` **on the UAT copy only**.

---

## 3. Manager scripts
### M1. Application → approval → booking → disbursement
- **Role:** Manager (maker) and Checker.
- **Before:** P1, P2, P5.
- **Steps:**
  1. Manager: **Loan Applications** (`/admin/loan/applications`) → New. Choose the customer, product and the POS sale (the financing proposal fills the amounts) → Save → Submit.
  2. Checker: same screen → open the application → Approve.
  3. Manager: Book (creates the loan account).
  4. Manager: *API* DISB request (appendix A.1).
  5. Checker: **Loan Transactions to Authorize** (`/admin/loan/pending`) → Authorize the DISB.
- **Expect on screen:**
  - the application goes Draft → Submitted → Approved → Booked;
  - the account shows stage DISBURSED and a schedule;
  - the maker cannot authorize their own DISB (button disabled; the API refuses too).
- **Expect GL (DISB, LAK; sandbox tx 12, principal 240,000,000):**

  | Side | Role | Account | Rule |
  |---|---|---|---|
  | Dr | LOAN_PORTFOLIO (NORMAL) | 1211 | financed principal |
  | Cr | SALE_RECEIVABLE | 1201 (POS AR, `GL_MAP_AR_ACC`) | same amount; settles the AR invoice |

  When a documentation fee or insurance is financed, more legs follow the addendum §2 (Dr LOAN_PORTFOLIO, Cr FEE_INCOME / INSURANCE_PAYABLE).
- **Also check:**
  - the AR invoice shows a receipt for the financed amount and is paid (or partly paid if a down payment is still open);
  - no bank entry (DISB to an invoice moves no cash).

### M2. Late payment with penalty
- **Role:** Cashier takes the payment; Manager checks the result.
- **Before:** an account with an installment past due (run EOD past the due date on the UAT copy, see M7).
- **Steps:**
  1. Cashier: account page → **Payment** → Repayment, amount = the amount due including the penalty, LAK bank account → **Preview**: the waterfall shows the penalty first → Submit.
- **Expect on screen:** the overdue chip clears; DPD goes back to 0 (after the next EOD); Print → Receipt.
- **Expect GL (LIQD with penalty; sandbox tx 44, cash 22,223,230):**

  | Side | Role | Account | Rule |
  |---|---|---|---|
  | Dr | CASH_BANK | bank's GL (1105) | cash received |
  | Cr | PENALTY_INCOME | 4202 | penalty paid in cash (`PEN_CASH`, 220,032). Under the default MEMO_ONLY treatment the penalty is income only when paid |
  | Cr | INTEREST_RECEIVABLE | 1221 | interest due (3,323,952) |
  | Cr | LOAN_PORTFOLIO (current class) | 1211 | principal due (18,679,246) |
- **Also check:** a bank `transactionEntry` row of type `LOAN_IN` for the cash.

### M3. Waiver request
- **Role:** Manager (maker) and Checker.
- **Steps:**
  1. Manager: *API* WAIVE (appendix A.6), component INTEREST or a fee, with a reason.
  2. Checker authorizes in the pending queue.
- **Expect GL:**
  - **Interest waived on a suspended (non-performing) account** (sandbox tx 58, 1,000,000): Dr SUSPENDED_INTEREST 2141; Cr INTEREST_RECEIVABLE 1221.
  - **Interest waived on a performing account:** Dr INTEREST_WAIVER_EXPENSE 5713; Cr INTEREST_RECEIVABLE 1221.
  - **Fee waived:** Dr FEE_WAIVER_EXPENSE; Cr FEE_RECEIVABLE, only when billed fees are enabled.
  - **Penalty waiver under MEMO_ONLY:** no GL, the memo is reduced.
- **Also check:** the schedule shows the waived amount; the audit log has the reason.

### M4. Repossession and vehicle disposal
- **Role:** Manager (maker) and Checker.
- **Steps:**
  1. *API* REPOSSESS with the appraised value (A.7), then authorize.
  2. Later, *API* VEH_DISPOSE with the sale price and bank account (A.8), then authorize.
- **Expect GL, REPOSSESS** (sandbox tx 68, outstanding principal 240,000,000, appraised 200,000,000, no provision held):

  | Side | Role | Account | Rule |
  |---|---|---|---|
  | Dr | REPOSSESSED_VEHICLE_ASSET | 1311 | appraised value |
  | Dr | PROVISION_RESERVE | 1229 | provision held, if any (`RESERVE_ABS`) |
  | Dr | LOAN_LOSS_SHORTFALL | 5702 | outstanding − appraised − provision (40,000,000) |
  | Cr | LOAN_PORTFOLIO (current class) | 1211/1213 | outstanding principal |
  | Dr/Cr | SUSPENDED_INTEREST / INTEREST_RECEIVABLE, INTEREST_INCOME | 2141 / 1221 / 4201 | clears accrued interest (suspended or uncollected), when present |
- **Expect GL, VEH_DISPOSE at a loss** (sandbox tx 70, sale 190,000,000 VAT inclusive, carrying 200,000,000):

  | Side | Role | Account | Rule |
  |---|---|---|---|
  | Dr | CASH_BANK | 1105 | sale price |
  | Dr | LOSS_ON_REPOSSESSED_ASSET | 5731 | carrying − (sale − VAT) (27,272,727) |
  | Cr | REPOSSESSED_VEHICLE_ASSET | 1311 | carrying value |
  | Cr | TAX_PAYABLE | 2131 | output VAT on the sale (17,272,727), **only if the confirmed tax profile says so** |

  A sale above the carrying value credits GAIN_ON_REPOSSESSED_ASSET 4301 instead of the loss leg.

### M5. Write-off and recovery
- **Role:** Manager (maker) and Checker.
- **Steps:**
  1. *API* WRITE_OFF (A.9) on a non-performing account → authorize.
  2. Later, *API* RECOVERY with an amount and bank account (A.10). RECOVERY needs no checker.
- **Expect GL, WRITE_OFF** (sandbox tx 60, principal 240,000,000, provision 48,000,000, suspended interest 8,967,715):

  | Side | Role | Account | Rule |
  |---|---|---|---|
  | Dr | PROVISION_RESERVE | 1229 | provision used (48,000,000) |
  | Dr | LOAN_LOSS_SHORTFALL | 5702 | principal not covered (192,000,000) |
  | Cr | LOAN_PORTFOLIO (SUBSTANDARD/…) | 1213 | outstanding principal, in two legs (PRIN_WO + SHORTFALL) |
  | Dr | SUSPENDED_INTEREST | 2141 | suspended interest cleared |
  | Cr | INTEREST_RECEIVABLE | 1221 | same |
  | Dr | WRITTEN_OFF_MEMO_DR | 9001 (off-balance) | principal + interest written off (248,967,715) |
  | Cr | WRITTEN_OFF_MEMO_CR | 9002 (off-balance) | same |
- **Expect GL, RECOVERY** (sandbox tx 61, 10,000,000):
  - Dr CASH_BANK 1105; Cr BAD_DEBT_RECOVERY 4302;
  - Dr WRITTEN_OFF_MEMO_CR 9002; Cr WRITTEN_OFF_MEMO_DR 9001 (the memo goes down by the recovered amount).

### M6. Documents
- **Role:** Manager.
- **Steps:** account page → **Documents** tab → choose a type and a PDF/JPG/PNG under 5 MB → Upload → Open.
- **Expect:**
  - the file opens;
  - a 6 MB file and a `.exe` renamed to `.pdf` are refused with a clear message;
  - the Cashier can open but has no Upload button;
  - a user without `LN_DOCUMENT` VIEW sees "No VIEW permission".
- **Also check (server):** the file is in `LOAN_DOCUMENT_DIR` with a random 32-character name, and not under `uploads/`.

### M7. End of day (both POS business-date modes)
- **Role:** Manager runs it; Checker views it.
- **Steps:** **Loan End of Day** (`/admin/loan/eod`): read both dates and the mode → Run.
  - **Case A, `USE_BUSINESS_DATE = N`:** the run is allowed once the Vientiane calendar date is later than the loan date. A stale POS business date does not block it.
  - **Case B, `USE_BUSINESS_DATE = Y`:** refused with a message naming POS COB until POS COB has moved the POS date **past** the loan date. Run POS COB (Reports → End of Day → Run COB Batch), then the loan EOD runs.
- **Expect on screen:**
  - the job log lists the accrual, penalty, status classification and provision jobs (month-end only), with counts and times;
  - the loan date moves to the next business day;
  - a second Run while one is running → "already running".
- **Expect GL:**
  - **Accrual** (sandbox tx 13, LAK): Dr INTEREST_RECEIVABLE 1221; Cr INTEREST_INCOME 4201. For a non-performing account, ACCR_SUSP: Dr 1221 / Cr SUSPENDED_INTEREST 2141.
  - **Status change to non-performing** (sandbox tx 53): Dr LOAN_PORTFOLIO DOUBTFUL 1213 / Cr LOAN_PORTFOLIO NORMAL 1211 (the outstanding principal moves class). Dr INTEREST_INCOME 4201 / Cr SUSPENDED_INTEREST 2141 (uncollected interest suspended). A cure reverses it (STCH_CURE).
  - **Penalty (MEMO_ONLY):** no GL; the memo penalty grows.
- **Also check:**
  - EOD postings are summarized per batch (job, branch, currency) into POS `general_ledger`;
  - the tie-out stays balanced.

### M8. Month-end
- **Role:** Manager.
- **Steps:** run EOD for the last business day of a month (Case A or B as configured).
- **Expect GL:**
  - **Provision** (sandbox tx 55, LAK, 120,000,000): Dr PROVISION_EXPENSE 5701; Cr PROVISION_RESERVE 1229 (rate × base from the provision rules). A lower need gives PROV_WB: Dr 1229 / Cr 5701.
  - **FX revaluation:** only if switched on (`LOAN_FX_REVAL_ENABLED` and the `EOD_FX_REVAL` job). See F4.
- **Also check:** reports → Provisions and NPL match the classification; the balance sheet loan section (if `BS_INCLUDE_LOAN_BOOK` is on) equals the GL.

### M9. Reports and collection
- **Role:** Manager; the Cashier for the collection list.
- **Steps:**
  1. **Collection List** (`/admin/loan/collection`): filter by DPD bucket.
  2. **Loan Reports**: Portfolio, Aging, NPL, Provisions, GL tie-out.
- **Expect:**
  - collection rows show the customer phone, amount due and last payment;
  - aging buckets add up to the portfolio;
  - the GL tie-out is *balanced* for every role and account, in contract currency and base;
  - a user without `LN_REPORT` sees the permission message.

---

## 4. Cashier scripts
| ID | Script | Steps | Expect on screen | Expect GL |
|---|---|---|---|---|
| C1 | On-time repayment | account → Payment → Repayment, amount = installment due, LAK bank, today → Preview → Submit → Print Receipt | waterfall: interest then principal; posted at once (no checker); receipt prints | sandbox tx 17: Dr CASH_BANK 1105 22,003,198; Cr INTEREST_RECEIVABLE 1221 3,600,000; Cr LOAN_PORTFOLIO 1211 18,403,198 |
| C2 | Partial payment | amount below the installment | the preview shows what stays due; the installment remains partly due | same legs; amounts follow the waterfall (penalty → fees → interest → principal, per product) |
| C3 | Overpayment to advance | amount above everything due | the preview shows the excess as an advance; the account shows an advance balance | sandbox tx 18: the LIQD legs for what is due, plus OVERPAY: Dr CASH_BANK 1105 1,000,000 / Cr CUSTOMER_ADVANCE_LIAB 2111 1,000,000. The next due installment uses the advance (Dr 2111, tag ADV_APPLIED) |
| C4 | Prepayment (payoff) | Payment → Prepayment → the quote fills the payoff amount → Preview → Submit | the account closes (or the principal is reduced for a partial prepayment, per product) | sandbox tx 45: Dr CASH_BANK 205,136,406; Cr LOAN_PORTFOLIO 1211 202,917,556; Cr INTEREST_RECEIVABLE 1221 2,218,850; the interest true-up pair Dr 1221 / Cr INTEREST_INCOME 4201 2,218,850 (and the reverse pair when the payoff interest is lower than accrued). Early-settlement fee and VAT legs follow if the product has them |
| C5 | Fee collection | *API* FEE_COLLECT (A.2) | fee and insurance shown as paid | sandbox tx 9: Dr CASH_BANK 9,970,000; Cr FEE_INCOME 4203 2,700,000; Cr INSURANCE_PAYABLE 2121 7,000,000; Cr TAX_PAYABLE 2131 270,000 (VAT 10% on the fee, only if VAT is confirmed) |
| C6 | Refusals | (a) USD bank account for a LAK loan; (b) value date tomorrow; (c) value date yesterday with `LOAN_MAX_BACKDATE_DAYS = 0`; (d) amount 0; (e) a Cashier tries to authorize in the pending queue | (a) "Bank account <name> is USD; the loan is LAK"; (b) refused: no future value dates; (c) "… at most 0 allowed (SPF LOAN_MAX_BACKDATE_DAYS)"; (d) refused; (e) 403 (no AUTHORIZE) | no GL |
| C7 | Double click | press Submit twice quickly on a payment | one transaction only (Idempotency-Key) | one journal |
| C8 | Receipt and statement print | Print → Receipt (Transactions tab) and Print → Statement | receipt shows contract currency, base, rate and rate date for foreign loans; statement opening + movements = closing | none |

---

## 5. Checker scripts
| ID | Script | Steps | Expect |
|---|---|---|---|
| K1 | Authorize every checker kind | in the pending queue, authorize one each of DISB, WAIVE, WRITE_OFF, REPOSSESS, VEH_DISPOSE, REVERSAL, FEE_REFUND, ADV_REFUND, INS_REMIT (requests made by the Manager through the screens or the appendix calls) | posted; GL as in the related script (FEE_REFUND sandbox tx 73 mirrors FEE_COLLECT; ADV_REFUND tx 21: Dr CUSTOMER_ADVANCE_LIAB 2111 / Cr CASH_BANK; INS_REMIT tx 23: Dr INSURANCE_PAYABLE 2121 / Cr CASH_BANK) |
| K2 | Reject with reason | reject one request with a reason | the status shows REJECTED, the reason is in the audit log, and no GL is posted |
| K3 | Maker ≠ checker | the Manager tries to authorize their own request (UI and API) | button disabled; the API refuses |
| K4 | Parameter change | the Manager edits an authorized product (e.g. max amount) → the Checker reviews **Pending Approvals** (Studio → changes) → authorize, then repeat with reject | before/after values are shown; the product uses the new value only after authorization |
| K5 | Exchange rate | the Manager uses "copy POS rate" for USD → the Checker authorizes | a USD payment is refused before authorization (no rate) and accepted after |
| K6 | Print template | the Manager edits the contract wording → the Checker authorizes | Contract summary print uses the authorized wording; before authorization, printing is refused |
| K7 | Application | approve and reject one application each | an approved application can be booked; a rejected one cannot |

---

## 6. Foreign-currency scripts (USD; repeat for THB if offered)
- **Before:** P1–P5 with the USD product, a USD AR invoice or a LAK invoice for a USD-priced vehicle, a USD bank account, and today's USD rate authorized.

| ID | Script | Expect GL (sandbox) |
|---|---|---|
| F1 | DISB settling the invoice (rate differs from the invoice rate) | tx 92, USD 12,000, invoice base LAK 252,000,000 (D6: DISB carries the invoice's base, no FX at DISB): Dr LOAN_PORTFOLIO 1211 USD 12,000 / base 252,000,000. Cr CCY_POSITION 1990 USD 12,000 / base 252,000,000. Dr CCY_POSITION 1990 LAK 252,000,000. Cr SALE_RECEIVABLE 1201 LAK 252,000,000. CCY_POSITION nets to 0 in base (Q34). A DISB whose implied rate is more than 1.00% from the day's rate is refused unless the setting allows the checker to accept it (`rateDeviationReason`) |
| F2 | Repayment at a higher rate | tx 93, USD 1,100.16 at 21,500: Dr CASH_BANK 1106 USD 1,100.16 / base 23,653,440. Cr INTEREST_RECEIVABLE 1221 USD 180.00 / 3,870,000. Cr LOAN_PORTFOLIO 1211 USD 920.16 / 19,323,360 (relieved at the carrying rate). **Cr FX_GAIN_REALIZED 4901 base-only 460,080** (the difference). A same-day accrual pair Dr 1221 / Cr 4201 USD 180.00 is also part of the transaction |
| F3 | Stale or missing rate | rate older than `LOAN_FX_MAX_RATE_AGE_DAYS` (3) or none → refused, with a message naming the currency and date; the screen shows a rate-age chip before submit |
| F4 | Month-end revaluation (only if switched on) | tx 128, at 20,800: Dr FX_LOSS_UNREALIZED 5903 base-only 2,400,000; Cr LOAN_PORTFOLIO base-only 2,400,000. Same for interest receivable (32,000). The carrying base moves (carry forward, D5) |
| F5 | Reversal of a USD repayment | tx 95 mirrors tx 93 exactly at the original rate (Dr LOAN_PORTFOLIO, Dr INTEREST_RECEIVABLE, Cr CASH_BANK, Dr FX_GAIN_REALIZED 460,080 base-only); balances in USD and base return to before |
| F6 | Accrual on a USD loan | tx 108: Dr 1221 / Cr 4201 USD 973.41 at the EOD-date rate (base 20,246,928) |
| F7 | Screens | account page, payment preview, statement and receipt show `USD x ≈ LAK y @ rate (date)` with a rate-age warning when the rate isn't today's; posted lines show their posted rate, and open balances say "indicative" |

---

## 7. Reversal scripts
| ID | Script | Expect GL |
|---|---|---|
| R1 | Reverse a repayment (Manager *API* REVERSAL A.11 → Checker authorizes) | sandbox tx 35 reversing tx 33 (LAK 50,000,000): Cr CASH_BANK 1105 50,000,000 / Dr LOAN_PORTFOLIO 1211 50,000,000. Every original leg is mirrored with its original rate. The schedule and balances return to before; a bank `LOAN_OUT` entry is written |
| R2 | Reverse a DISB | sandbox tx 78 reversing tx 76: Cr LOAN_PORTFOLIO 1211 240,000,000 / Dr SALE_RECEIVABLE 1201 240,000,000. The AR invoice is open again |
| R3 | Reverse twice | a second reversal of the same transaction is refused |
| R4 | Reverse out of order (LIFO) | with two repayments posted, reverse the **older** one first | refused while the later one stands; reverse the later one first, then the older one |

---

## 8. Permission matrix (negative tests)
Each role tries each forbidden action once, from the screen when it exists, otherwise by calling the API with that user's token.

| Action | Cashier | Manager | Checker |
|---|---|---|---|
| Authorize a transaction | 403 | 403 | allowed (not their own) |
| Run EOD | 403 | allowed | 403 |
| Upload a document | 403 | allowed | 403 |
| View reports | 403 | allowed | allowed |
| Approve an application | 403 | 403 | allowed |
| Book an account | 403 | allowed | 403 |
| Authorize a parameter change | 403 | 403 | allowed |
| Authorize an exchange rate | 403 | 403 | allowed |

---

## Appendix A: API calls for kinds without a screen
Only Repayment and Prepayment have an entry screen today (account page → Payment). The other kinds are requested through the API by the maker's own login. A screen for each is a go-live item (runbook step 10, security checklist G11).

**Call:**

```
POST /api/loan/accounts/<accountId>/transactions
Authorization: Bearer <the maker's token>
Idempotency-Key: <new random value per request>
Content-Type: application/json
```

Amounts are strings in the contract currency. Kinds marked *checker* go to the pending queue.

| # | Kind | Body (example) | Checker |
|---|---|---|---|
| A.1 | DISB | `{ "kind": "DISB" }`, or for a foreign loan with a rate deviation: `{ "kind": "DISB", "rateDeviationReason": "…" }` | yes |
| A.2 | FEE_COLLECT | `{ "kind": "FEE_COLLECT", "bankAccountId": <id> }` | no |
| A.3 | FEE_REFUND | `{ "kind": "FEE_REFUND", "bankAccountId": <id> }` | yes |
| A.4 | ADV_REFUND | `{ "kind": "ADV_REFUND", "amount": "2000000", "bankAccountId": <id> }` | yes |
| A.5 | INS_REMIT | `{ "kind": "INS_REMIT", "amount": "7000000", "bankAccountId": <id> }` | yes |
| A.6 | WAIVE | `{ "kind": "WAIVE", "component": "INTEREST", "amount": "1000000", "remarks": "reason" }` | yes |
| A.7 | REPOSSESS | `{ "kind": "REPOSSESS", "appraisedValue": "200000000" }` | yes |
| A.8 | VEH_DISPOSE | `{ "kind": "VEH_DISPOSE", "salePrice": "190000000", "bankAccountId": <id> }` | yes |
| A.9 | WRITE_OFF | `{ "kind": "WRITE_OFF" }` | yes |
| A.10 | RECOVERY | `{ "kind": "RECOVERY", "amount": "10000000", "bankAccountId": <id> }` | no |
| A.11 | REVERSAL | `{ "kind": "REVERSAL", "targetTransactionId": <transaction id> }` | yes |

There is no preview call for these kinds: `POST /api/loan/accounts/<id>/preview/<name>` covers only `due-date`, `payment`, `prepayment` and `status`. Kinds that need a checker are dry-run when requested, though: every guard, engine step and validator runs inside a savepoint that is rolled back. So an invalid request is refused right away, and a valid one waits in the pending queue with nothing posted.
