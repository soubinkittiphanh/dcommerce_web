# Loan Phase 5, Part A: multi-currency posting (report, STOP 2)

Branch `feature/loan-module`, local sandbox only, nothing pushed. Date: 2026-10-31.

## 1. Commits (dc_api)
| Step | Commit | What |
|---|---|---|
| A0 | `7ce313b` | `DCOMMERCE_DB_*` rename (old `DB_*` names still read as a fallback). Closes Phase 4 |
| defect #9 evidence | `f6c2f7e` | sandbox test proving POS defect 9 (POS code unchanged) |
| A3 | `df66cbe` | `ln_exchange_rate`; FX roles and tags and `EOD_FX_REVAL` seeded **PENDING**; FX switches; proposed FX accounts (sandbox `--apply` only); posting refuses a PENDING role |
| A4 | `1e45d56` | pure `src/loan/accounting/fx.js` with the addendum §8.8 fixtures |
| A5 | `da45039` | rate service (rate for the booking date, 3-day limit, warning), "copy POS rate" as PENDING, `fxrate` field type, financing proposal route |
| A6 | `6106324` | `validateBase`; base-only legs keep their base |
| A7–A11 | `26bc151` | posting, settlement, EOD, revaluation, COB rules, balance-sheet check, integration tests |

dc_web (docs): `53f10c1c0`, `034653ff0`, `d5bf002ae`, `d628b4a7e`, plus this report's commit.

## 2. What was built
- **Rates (D1, D2):**
  - `ln_exchange_rate` (`rate` = base units per 1 unit, 8 decimals) is the Parameter Studio entity `exchange-rate`, with maker-checker. `LOAN_ALLOW_SELF_AUTHORIZE` applies, and a self-authorization is audited (`SELF_AUTH`).
  - `POST /api/loan/exchange-rates/copy-pos` normalizes the POS `currency.rate` by `exchangeDirection` and creates a **PENDING** row.
  - `GET /api/loan/exchange-rates/effective` returns the rate used for a date and its warning.
  - **Rule:** a transaction uses the latest authorized rate on or before its booking date, at most `LOAN_FX_MAX_RATE_AGE_DAYS` = **3** days old. When the rate is not the booking date's own, the warning is in the response and in `ln_transaction.fxWarning`. An older rate is refused.
  - **Manual rate:** off by default (`LOAN_FX_OVERRIDE_TOLERANCE_PCT` = 0). When enabled, it must be within the tolerance and always goes to a checker.
- **Base on every leg:** `ln_journal_posting.baseAmount`, `exchangeRate` and the new `isBaseOnly`. `ln_transaction` stores `exchangeRate`, `exchangeRateDate`, `fxWarning` and `baseAmount`.
- **Carrying base and realized FX (D3, D4):**
  - **Carrying base:** each bucket's base is its weighted-average carrying base, derived from the account's own journal legs, so reversals and revaluations are included automatically.
  - **Relief:** a leg that relieves a bucket takes that carrying base; the difference to the transaction rate is posted as `FX_DIFF` to `FX_GAIN_REALIZED` or `FX_LOSS_REALIZED`.
  - **Status changes** move the base between qualifiers with no FX.
  - **Rounding:** any leftover after FX goes to `ROUND_DIFF`, capped at `LOAN_FX_MAX_ROUND_DIFF` (1) per line; above the cap the posting is refused.
- **DISB settlement (D6, D12):**
  - The invoice base is carried over, so there is **no FX at DISB**.
  - A USD or THB loan may settle the **LAK invoice** of a POS sale through `CCY_POSITION`, which nets to zero in base; a validator enforces it.
  - The contract principal is proposed from the sale line (`GET /api/loan/sales/:id/financing-proposal`).
  - The implied rate must be within `LOAN_FX_IMPLIED_RATE_TOLERANCE_PCT` (1.00%) of both the sale line rate and the rate table.
  - **Outside the tolerance:** refused by default. With `CHECKER_OVERRIDE`, the maker must give a reason and the checker must send `acceptRateDeviation: true`; the acceptance is audited.
  - **AR receipt:** created in the invoice currency.
- **Bank:** the bank account must be in the loan currency, otherwise refused (Phase 4 check). Amounts move in that currency.
- **EOD:**
  - **Rates:** foreign accounts post at the EOD date's rate. EOD batches for a foreign currency are summarized with their local amounts, and FX or base corrections become base-only rows.
  - **Revaluation (D5):** job `EOD_FX_REVAL` runs at month-end, carry forward. It needs `LOAN_FX_REVAL_ENABLED = 'true'` **and** the job enabled and authorized (seeded PENDING and disabled). EOD now runs only jobs that are enabled **and** AUTHORIZED.
- **Close of business (D7, D8, approved):**
  - `USE_BUSINESS_DATE = Y`: loan EOD for D runs only when the POS date is **strictly later** than D.
  - `N`: it runs only when the Vientiane calendar date is later than D, and loan bank entries carry the loan date.
  - The refusal names the mode. `GET /eod/status` shows the mode, both dates, whether EOD can run, the reason, and the warning that the microfinance EOD also moves the POS date. Loan EOD never moves the POS date (tested).
- **Balance sheet (switch on):** the loan reconciliation gains `currencyPosition` (GL base balance of the `CCY_POSITION` accounts; expected 0).

## 3. Test results (local `dcommerce_loan_test`)
**Full suite 123 passed, 0 failed. Engine tests 30 passed, 0 failed. Protected files unchanged** (see §6 for `logs.log`).

Key outputs:

**X2 (DISB):** the warning read "Implied rate 21,000.00 differs from the table rate 21,150.00 for 2027-03-01 by 0.71% (tolerance 1.00%)". The GL rows:

| Dr > Cr | Currency | Amount | LAK | Rate |
|---|---|---|---|---|
| 1211 > 1990 | USD | 12,000.00 | 252,000,000.00 | 21,000.000000 |
| 1990 > 1201 | LAK | 252,000,000.00 | 252,000,000.00 | 1.000000 |

`CCY_POSITION` nets to 0 in base, and the invoice is paid.

**U2 (repayment):** the journal matches the addendum, with the realized gain 460,080. The GL rows:

| Dr > Cr | Amount | LAK |
|---|---|---|
| 1221 > 4201 | 180.00 | 3,870,000 |
| 1106 > 1211 | 920.16 | 19,783,440 |
| 1106 > 1221 | 180.00 | 3,870,000 |
| 1211 > 4901 (base-only) | 0.00 | 460,080 |

The reversal restores the carrying base exactly.

**X3 (wrong principal):** "Implied rate 21,913.04 (LAK 252,000,000 / USD 11,500.00) differs from the sale line rate 21,000.00 by 4.35% and from the table rate 21,000.00 by 4.35% (tolerance 1.00%). Check the principal: proposed USD 12,000.00."

**Revaluation at 20,800 (month-end):** Dr `FX_LOSS_UNREALIZED` 2,400,000 / Cr `LOAN_PORTFOLIO` 2,400,000; Dr `FX_LOSS_UNREALIZED` 32,000 / Cr `INTEREST_RECEIVABLE` 32,000. The summarized GL rows are base-only.

**Also tested:**
- a 4-day-old rate refused; a 2-day-old rate posts with "Rate of … used for booking date … (2 days old)";
- a LAK bank account for a USD loan refused;
- manual rate: off, out of tolerance, within tolerance only through a checker;
- trial balance balanced throughout;
- the balance-sheet currency position check is 0;
- **LAK journals unchanged by Phase 5** (no base-only legs, base = amount, rate 1), and all 105 earlier tests still pass.

**POS defect #9:** confirmed in the sandbox. Critical: a USD 15,000 car (LAK 315,000,000) was posted by the AR batch as LAK 15,000 and marked posted. POS defect #10 found: overdue invoices are never posted. Both are in `pos-defects.md`; no POS code was changed.

## 4. Deviations from the approved plan (for your review)
1. **No base columns on `ln_account_balance`.** The carrying base is derived from `ln_journal_posting`, one source of truth that cannot drift. An index `idx_jp_account_role` was added.
2. **POS file `accountingPostingService.js` needed no change in Part A.** `postJournalPairs` already accepts separate contract and local amounts, a rate and a currency. The only POS file changed in Phase 5 Part A is `src/config/dbClient.js` (A0). Full diffs are in `phase5-pos-diffs.patch`.
3. **Wider carrying-base set** (addendum §8.3 updated): suspended interest, insurance payable, provision reserve, deferred fee, unamortized fee and repossessed vehicle also carry their base, so no LAK residue remains on a zero contract balance. Revaluation stays limited to principal, receivables and the advance.
4. **The `accounting-role` entity moved from the view-only `LN_ACCOUNTING_SETUP` to `LN_GL_MAPPING`.** That lets a checker authorize the PENDING FX roles alongside their mappings, and avoids conflicting with the 2A seed. ADMIN still cannot edit roles (tested).
5. **Cross-currency DISB:**
   - The Phase 4 down-payment check (in the loan currency) is replaced by the implied-rate check: an unpaid down payment makes the implied rate breach.
   - The AR receipt is allocated as one header-balance line, because POS invoice lines can hold amounts in another currency (defect #9).
6. **Product amount limits are single-currency.** `ln_product.minAmount` is LAK 5,000,000, so a USD 12,000 loan fails it. The tests lower `minAmount` on the test product only. **Decision needed:** add per-currency limits (for example on `ln_product_currency`) before USD or THB products go live.

## 5. Sandbox state
- `dcommerce_loan_dev` is migrated (`20261101_loan_phase5_fx`) and seeded with Phase 5.
- Switches: `LOAN_POSTING_ENABLED`, `BS_INCLUDE_LOAN_BOOK` and `LOAN_FX_REVAL_ENABLED` are `false`; `LOAN_FX_OVERRIDE_TOLERANCE_PCT` = 0; `LOAN_FX_IMPLIED_RATE_BREACH` = REFUSE.
- `EOD_FX_REVAL` is PENDING and disabled; the FX roles and tags are PENDING. No GL account or mapping exists in dev.

## 6. Incidents to report
- **DB passwords printed twice** in this session's tool output (a failed redaction and a grep on `dbClient.js`). `src/config` is now excluded from every search. The patch files redact them.
- **`dc_api/logs.log`:**
  - At 18:50 something started the API from inside dc_api; you have not said whether it was you.
  - At **19:58 a `node -e` syntax check I ran from inside dc_api appended 5 logger demo lines (497 bytes).** That was my mistake, against your rule.
  - Removing exactly those bytes was blocked as an irreversible change, so the file still has them. Tell me whether to remove the 497 bytes (I can show they are only my 5 lines first), or leave the file as it is.
  - Every later run used the scratch directory, and the file is unchanged since.
