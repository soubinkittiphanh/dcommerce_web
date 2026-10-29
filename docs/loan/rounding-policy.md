# Loan Module: Rounding Policy (UNCONFIRMED)

Status: **approved as the default (2026-10-29), still UNCONFIRMED by the customer's accountant.** Phase 3 implements it, including the loan-owned per-currency decimals setting (`ln_currency_rule`, §3). The accountant can still change it before go-live.

## 1. What the code has today (checked 2026-10-29)

| Item | Finding | Consequence |
|---|---|---|
| POS `currency` table | Columns: `id, code, name, rate, isActive, isLocalCCY, exchangeDirection, symbol`. **No decimals / minor-unit field.** | The number of decimals per currency must come from a new loan parameter (§3). It must never be hard-coded. |
| `currency.rate` | `DOUBLE` (floating point) | The loan module must turn the rate into a decimal string (DECIMAL(20,8)) once, at capture, and store it on the posting (`ln_journal_posting.exchangeRate`). Floats are never used for money. |
| Loan amounts | DECIMAL(20,4) everywhere | The engine computes at 4 decimals internally. |
| POS `general_ledger` | `debit`, `credit`, `localDebit`, `localCredit` are DECIMAL(15,2) | Anything posted to the POS GL must already be rounded to at most 2 decimals, or the GL would truncate it silently. With the default below (LAK 0, USD/THB 2) nothing is lost. |

## 2. Default policy

1. **Round every billable or postable amount to the currency's decimals at schedule or billing time, half-up.** This covers installment principal and interest, fees, insurance, penalty, early-settlement fee, VAT and payoff amounts. The rounded amount is what the customer sees, pays and what is posted. Unrounded 4-decimal values never reach a journal.
2. **The last installment absorbs the residue.** Each installment's principal is rounded. The last installment's principal = outstanding principal − the sum of the rounded principal already scheduled, so the schedule repays the loan exactly. Interest is rounded per installment. For flat-rate products, the total interest residue also goes to the last installment.
3. **VAT is rounded per line, half-up.**
   - Tax-exclusive: VAT = round(base × rate).
   - Tax-inclusive: VAT = round(gross × rate / (1 + rate)), and net = gross − VAT, so net + VAT = gross exactly.
4. **`ROUND_DIFF` is only for foreign-currency conversion.** When a foreign-currency journal is converted to the base currency line by line, each base amount is rounded half-up to the base decimals. A residue of one base minor unit or more can then remain, and it is posted to `ROUNDING_DIFF` with tag `ROUND_DIFF`. Same-currency journals never use it: they balance exactly or are refused.
5. **Daily accrual (`DAILY` recognition, optional):** daily interest is kept at 4 decimals in `ln_accrual_ledger` and is not posted day by day at 4 decimals. The posted ACCR for a period is rounded. On the due date, the recognized total is trued up to the rounded billed interest. Under the recommended `DUE_DATE` recognition, ACCR equals the rounded billed interest, so no true-up is needed.
6. **Penalty (memo-only default):** computed at 4 decimals in the memo ledger, and rounded when it is billed or collected (`PEN_CASH`).
7. **The validators stay exact:** no tolerance. Rounding happens before journals are built, never by the validator.

## 3. Proposed parameter (Phase 3)

The POS `currency` table is left alone. A loan-owned table, maker-checker and effective-dated, holds the rounding rules:

| Column | Example | Notes |
|---|---|---|
| `currencyId` | 1 | POS `currency.id`, no FK (same convention as the other loan tables) |
| `decimalPlaces` | 0 | Must be ≤ 2 while posting into the POS GL (DECIMAL(15,2)) |
| `roundingMode` | `HALF_UP` | Lookup; `HALF_UP` is the default. `HALF_EVEN`, `UP` and `DOWN` are possible later options. |
| `effectiveFrom` / `effectiveTo` | | |

Proposed starting values (**UNCONFIRMED**):
- LAK: 0 decimals (kip is used without a minor unit in practice);
- USD: 2;
- THB: 2.

## 4. Examples (illustrative)

- **Schedule residue (LAK, 0 decimals):** principal 100,000,000 over 3 equal-principal installments. Installments 1 and 2 are 33,333,333 each, and installment 3 is 100,000,000 − 66,666,666 = **33,333,334**.
- **VAT per line, tax-inclusive (LAK, illustrative 5% rate, never the real one):** fee 3,000,000 including VAT. VAT = round(142,857.14) = **142,857**; net = **2,857,143**. Net + VAT = 3,000,000.
- **FX residue to `ROUND_DIFF`:** a USD receipt of 150.20 allocated to interest 100.10 and principal 50.10, at rate 21,215.
  - Base lines: cash 150.20 × 21,215 = 3,186,493.0 → **3,186,493**; interest 100.10 × 21,215 = 2,123,621.5 → **2,123,622**; principal 50.10 × 21,215 = 1,062,871.5 → **1,062,872**.
  - The base credits come to 3,186,494 against a base debit of 3,186,493, so `ROUND_DIFF` Dr **1** LAK.
  - The USD amounts balance exactly; only the base currency has a residue.

## 5. Open questions for the accountant

1. Is LAK posted with 0 decimals? Should amounts round to the nearest kip, or to a larger cash unit (e.g. 500 or 1,000 kip) for cash collections?
2. Is half-up acceptable, or is another mode required by the tax office (e.g. for VAT)?
3. Should VAT be rounded per line (proposed) or per invoice total?
4. Should the schedule residue go to the last installment (proposed) or the first?
5. Should `ROUNDING_DIFF` be one expense account that may carry a credit balance (proposed 5901), or separate gain and loss accounts?
