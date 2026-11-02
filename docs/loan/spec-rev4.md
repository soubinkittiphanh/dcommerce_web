# Phase 1: Parameter-Driven Loan Module (FLEXCUBE-Style)
## Architecture & Technical Design Specification (Revision 4 - Definitive Master Specification)

> **Domain Specialization**: Car Dealership Vehicle Financing & Hire Purchase.  
> **Core Architectural Doctrine**: Complete Parameter-Driven Product Factory. Zero hard-coded rates, formulas, GL accounts, statuses, waterfall priorities, or calculation bases.

---

## 1. Executive Summary & Codebase Ground Truth

### 1.1 Codebase Ground Truth & Evidence (Requirement 21 & 22)

Inspection of the actual `dc_api` and `dc_web` codebase confirms the following concrete facts:

1. **`SALE_RECEIVABLE` Integration**:
   - In [`dc_api/src/GL/accountingPostingService.js:38-39`](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/GL/accountingPostingService.js#L38-L39), POS credit sales post their debit to the account configured under system parameter code `GL_MAP_AR_ACC`.
   - In [`dc_api/src/account/service.js:28-33`](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/account/service.js#L28-L33), the default seed for this receivable is Account **`1005`** (*Accounts Receivable*, `Asset`).
   - In [`dc_api/src/sales/model.js:50-59`](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/sales/model.js#L50-L59), the POS sale header already supports `isPostedToAR` and `arPostedAt`.
   - **Conclusion**: The role `SALE_RECEIVABLE` uses `resolverType = 'SYSTEM_PARAM'` referencing `GL_MAP_AR_ACC` (Account `1005`), ensuring that loan disbursement directly clears the trade sale receivable without duplicating receivables or creating dummy liabilities.
2. **`CASH_BANK` Dynamic Resolution**:
   - In [`dc_api/src/GL/accountingPostingService.js:27-44`](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/GL/accountingPostingService.js#L27-L44), cash transactions resolve to `GL_MAP_CASH_ACC` (Account **`1000`** *Cash on Hand*), and electronic/bank payments resolve to `GL_MAP_BANK_ACC` (Account **`1002`** *BCEL Saving LAK*).
   - In [`dc_api/src/bankAccount/model.js:5-13`](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/bankAccount/model.js#L5-L13), individual bank accounts store their matching `accountNumber` corresponding to [`chart_of_account`](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/account/model.js).
   - **Conclusion**: The role `CASH_BANK` uses `resolverType = 'BANK_ACCOUNT'` resolving dynamically from `paymentMethodId` / `bankAccountId` passed in the repayment/disbursement payload.
3. **Account Number Collision Verification**:
   - The active accounts in `dc_api/src/account/service.js` are:
     `1000, 1001, 1002, 1005, 1006, 1007, 1200, 2000, 2005, 2100, 3000, 3100, 4000, 4005, 5000, 5005, 5100`.
   - Proposed default seed numbers:
     - `1050 - 1061` (Loan Portfolio, Receivables, Contra Fees): **Clean, 0 collisions**.
     - `2050 - 2054` (Deferred Fees, Suspended Interest, Payables, Advances): **Clean, 0 collisions**.
     - `4050 - 4059` (Loan Interest, Penalty, Fees, Repossession Gains): **Clean, 0 collisions**.
     - `6050 - 6058` (Provision, Shortfall, Waivers, Repossession Losses): **Clean, 0 collisions**.
4. **Behavior of `accountType: 'Off-Balance'` in Financial Reports (Requirement 22)**:
   - In [`dc_api/src/GL/adbReportController.js:525-535`](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/GL/adbReportController.js#L525-L535):
     ```javascript
     Object.values(accountBalances).forEach(acc => {
         if (Math.abs(acc.balance) < 0.01) return;
         if (acc.accountType === 'Asset') {
             assets.push(acc);
         } else if (acc.accountType === 'Liability') {
             liabilities.push(acc);
         } else if (acc.accountType === 'Equity') {
             equity.push(acc);
         }
     });
     ```
   - **Conclusion**: The financial report engine iterates over account balances and **only pushes accounts to the Balance Sheet if `accountType` explicitly equals `'Asset'`, `'Liability'`, or `'Equity'`**.
   - If an account has `accountType = 'Off-Balance'`, it is **completely excluded from Balance Sheet assets, liabilities, and equity calculations**, preventing any distortion of balance sheet totals while enabling memorandum tracking for written-off loans (`9001/9002`). We will include a migration to expand `chart_of_account.accountType` ENUM to include `'Off-Balance'`.

---

## 2. Comprehensive Accounting Engine & Master Event Matrix

Every financial event resolves dynamically through:
$$\text{EVENT} \quad \longrightarrow \quad \text{ENTRY RULES (with } \text{qualifierSource)} \quad \longrightarrow \quad \text{ROLE} \quad \longrightarrow \quad \text{COA ACCOUNT ID}$$
Pre-Commit Balance Rule: $\sum \text{Debit} == \sum \text{Credit}$ (exact per currency; rounding differences absorbed by `ROUNDING_DIFF`).

---

### 2.1 Loan Disbursement (`DISB`) Accounting & Numeric Examples (Requirement 2 & 18)

#### Baseline Vehicle Financing Scenario:
- **Vehicle Price**: $30,000.0000
- **Down Payment (20%)**: $6,000.0000
  - Pre-Disbursement POS Cash Receipt:
    $$\text{DR CASH\_BANK } 6,000.0000 \quad / \quad \text{CR SALE\_RECEIVABLE } 6,000.0000$$
  - Outstanding on [`saleHeader`](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/sales/model.js): **$24,000.0000**
- **Documentation Fee**: $300.0000
- **Comprehensive Vehicle Insurance**: $700.0000

---

#### Mode 1: `CAPITALIZED` (Fee & Insurance Added to Loan Principal)
- **Sanctioned Loan Principal**: $\$24,000.0000 + \$300.0000 + \$700.0000 = \mathbf{\$25,000.0000}$.
- **DISB Journal Entries**:
  - **DR** `LOAN_PORTFOLIO` (qualifier: `NORMAL`): **$25,000.0000**
  - **CR** `SALE_RECEIVABLE` (clears vehicle invoice): **$24,000.0000**
  - **CR** `DEFERRED_FEE` (or `UNAMORTIZED_FEE_CONTRA`): **$300.0000**
  - **CR** `INSURANCE_PAYABLE`: **$700.0000**
  - **Debits = $25,000.0000 | Credits = $25,000.0000** *(Balanced)*
- **CRITICAL SCHEDULE RULE**: Capitalized fees/insurance become principal installments. They must **NOT** also be billed to `FEE_RECEIVABLE` or `INSURANCE_RECEIVABLE` in schedule lines!

---

#### Mode 2: `DEDUCTED` (Net Payout - Deducted from Proceeds)
- Applicable **only** when `disbursementTarget` is `CUSTOMER_ACCOUNT` or `CASH_BANK`.
- **Sanctioned Loan Principal**: **$24,000.0000**
- **Net Cash Disbursed to Borrower**: $\$24,000.0000 - \$300.0000 - \$700.0000 = \mathbf{\$23,000.0000}$.
- **Fee Credit Rule (Requirement 18)**:
  - If `isEIRAmortized == true` and `presentation == 'LIABILITY'`: Credit `DEFERRED_FEE`.
  - If `isEIRAmortized == true` and `presentation == 'CONTRA_ASSET_NET'`: Credit `UNAMORTIZED_FEE_CONTRA`.
  - If `isEIRAmortized == false`: Credit `FEE_INCOME` directly.
- **DISB Journal Entries (assuming EIR Amortized Liability)**:
  - **DR** `LOAN_PORTFOLIO` (qualifier: `NORMAL`): **$24,000.0000**
  - **CR** `CASH_BANK` (or `CUSTOMER_ACCOUNT` Net Payout): **$23,000.0000**
  - **CR** `DEFERRED_FEE` (Account 2050): **$300.0000**
  - **CR** `INSURANCE_PAYABLE` (Account 2052): **$700.0000**
  - **Debits = $24,000.0000 | Credits = $24,000.0000** *(Balanced)*
- **Invoice Settlement Flow for `CUSTOMER_ACCOUNT`**: When loan is disbursed to `CUSTOMER_ACCOUNT`, the customer uses their savings balance to settle the POS sale invoice via standard cashier checkout:
  $$\text{DR CUSTOMER\_ACCOUNT } 24,000.0000 \quad / \quad \text{CR SALE\_RECEIVABLE } 24,000.0000$$

---

#### Mode 3: `UPFRONT` (Customer Pays Fees Separately in Cash)
- **Sanctioned Loan Principal**: **$24,000.0000**
- Customer pays fees at cashier prior to disbursement (`FEE_COLLECT`):
  - **DR** `CASH_BANK`: **$1,000.0000**
  - **CR** `DEFERRED_FEE` (or `FEE_INCOME`): **$300.0000**
  - **CR** `INSURANCE_PAYABLE`: **$700.0000**
- **DISB Journal Entries**:
  - **DR** `LOAN_PORTFOLIO` (qualifier: `NORMAL`): **$24,000.0000**
  - **CR** `SALE_RECEIVABLE`: **$24,000.0000**
  - **Debits = $24,000.0000 | Credits = $24,000.0000** *(Balanced)*

---

#### Validation Matrix (`feeFinancingMode` $\times$ `disbursementTarget`):

| `disbursementTarget` | `feeFinancingMode` | Status | Rationale |
| :--- | :--- | :--- | :--- |
| **`SALE_INVOICE_SETTLEMENT`** | **`CAPITALIZED`** | **VALID** | Principal covers invoice ($24k) + fees ($1k). Invoice fully settled. |
| **`SALE_INVOICE_SETTLEMENT`** | **`UPFRONT`** | **VALID** | Borrower pays fees in cash; principal clears invoice ($24k) 100%. |
| **`SALE_INVOICE_SETTLEMENT`** | **`DEDUCTED`** | **INVALID (REJECT)** | **Illegal Combination**: Cannot deduct $1k fees from a $24k invoice settlement without leaving an unpaid $1k trade AR balance! |
| **`CUSTOMER_ACCOUNT`** | *(All 3 modes)* | **VALID** | Borrower account receives net or gross proceeds as configured. |
| **`CASH_BANK`** | *(All 3 modes)* | **VALID** | Direct cash/bank disbursement. |

---

### 2.2 Master Event Accounting Matrix (Requirement 12, 13, 14, 15, 16, 17, 19, 20)

| Event Code | Event Description & Trigger | Amount Tag | Dr / Cr | Accounting Role | Qualifier Source | Purpose & Details |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`DISB`** | Loan Disbursement (Vehicle Settlement) | `PRINCIPAL` | **DR** | `LOAN_PORTFOLIO` | `CURRENT` | Loan Principal Asset (`NORMAL`: 1050) |
| | | `PRINCIPAL` | **CR** | `SALE_RECEIVABLE` | *(None)* | Clears POS Vehicle Sale Invoice (1005) |
| *(Capitalized Fee)*| Upfront fee added to loan | `FEE_DOC` | **CR** | `DEFERRED_FEE` | *(None)* | Deferred Fee Liability (2050) |
| *(Contra Fee Mode)*| If Option B selected | `FEE_DOC` | **CR** | `UNAMORTIZED_FEE_CONTRA`| *(None)*| Contra-Asset Netting Loan (1061) |
| *(Capitalized Ins.)*| Insurance added to loan | `INS_PREM` | **CR** | `INSURANCE_PAYABLE` | *(None)* | Payable to Insurance Co (2052) |
| **`ACCR`** | Daily Accrual (Performing Loan) | `INT_ACCR` | **DR** | `INTEREST_RECEIVABLE` | *(None)* | Accrued Interest Asset (1055) |
| | | `INT_ACCR` | **CR** | `INTEREST_INCOME` | *(None)* | Interest Revenue (4050) |
| **`ACCR_SUSP`** | Daily Accrual while Suspended (NPL) | `INT_ACCR` | **DR** | `INTEREST_RECEIVABLE` | *(None)* | Accrued Interest Asset (1055) |
| | *(Requirement 13)* | `INT_ACCR` | **CR** | `SUSPENDED_INTEREST` | *(None)* | Offset Suspended Liability (2051) |
| **`EIR_AMORT`** | Periodic Amortization of Upfront Fee | `EIR_AMORT`| **DR** | `DEFERRED_FEE` | *(None)* | Decreases Deferred Fee Liability |
| | *(or Contra Mode)* | `EIR_AMORT`| **DR** | `UNAMORTIZED_FEE_CONTRA`| *(None)*| Decreases Contra-Asset |
| | | `EIR_AMORT`| **CR** | `FEE_INCOME` | *(None)* | Recognizes Fee Income (4052) |
| **`BILL`** | Overdue Penalty Application | `PENALTY` | **DR** | `PENALTY_RECEIVABLE` | *(None)* | Penalty Asset (1056) |
| | | `PENALTY` | **CR** | `PENALTY_INCOME` | *(None)* | Penalty Revenue (4051) |
| **`BILL_NON_CAP`** | Recurring Fee / Insurance Billing | `FEE_BILL` | **DR** | `FEE_RECEIVABLE` | *(None)* | Fee Receivable Asset (1057) |
| | | `FEE_BILL` | **CR** | `FEE_INCOME` | *(None)* | Fee Income (4052) |
| | | `INS_BILL` | **DR** | `INSURANCE_RECEIVABLE`| *(None)* | Insurance Receivable (1058) |
| | | `INS_BILL` | **CR** | `INSURANCE_PAYABLE` | *(None)* | Payable to Underwriter (2052) |
| **`LIQD`** | Waterfall Repayment Collection | `TOTAL_PAID`| **DR** | `CASH_BANK` | *(None)* | Resolved from payment method/bank |
| | *Waterfall 1: Penalty* | `PENALTY` | **CR** | `PENALTY_RECEIVABLE` | *(None)* | Clears Penalty Receivable |
| | *Waterfall 2: Fees* | `FEE_DOC` | **CR** | `FEE_RECEIVABLE` | *(None)* | Clears Fee Receivable |
| | *Waterfall 3: Insurance* | `INS_PREM` | **CR** | `INSURANCE_RECEIVABLE`| *(None)* | Clears Insurance Receivable |
| | *Waterfall 4: Interest* | `INT_PAID` | **CR** | `INTEREST_RECEIVABLE` | *(None)* | Clears Accrued Interest |
| | *Waterfall 5: Principal* | `PRIN_PAID`| **CR** | `LOAN_PORTFOLIO` | `CURRENT` | Reduces Principal (1050) |
| **`LIQD_SUSP`** | Suspended Interest Repayment (NPL) | `SUSP_PAID`| **DR** | `CASH_BANK` | *(None)* | Cash collected |
| | *(Requirement 1)* | `SUSP_PAID`| **CR** | `INTEREST_RECEIVABLE` | *(None)* | Clears accrued interest asset |
| | Simultaneous Revenue Realization | `SUSP_PAID`| **DR** | `SUSPENDED_INTEREST` | *(None)* | Clears suspended liability (2051) |
| | | `SUSP_PAID`| **CR** | `INTEREST_INCOME` | *(None)* | Realizes revenue on cash basis (4050) |
| **`OVERPAY`** | Excess Unallocated Payment | `OVERPAY` | **DR** | `CASH_BANK` | *(None)* | Cash received |
| | | `OVERPAY` | **CR** | `CUSTOMER_ADVANCE_LIAB`| *(None)* | Customer Advance Liability (2054) |
| **`INS_REMIT`** | Remit Insurance to Underwriter | `REMIT_AMT`| **DR** | `INSURANCE_PAYABLE` | *(None)* | Clears payable (2052) |
| | | `REMIT_AMT`| **CR** | `CASH_BANK` | *(None)* | Bank transfer |
| **`WAIVE`** | Penalty / Fee Waiver | `PEN_WAIVE`| **DR** | `PENALTY_WAIVER_EXPENSE`| *(None)*| Waiver Expense (6052) |
| | | `PEN_WAIVE`| **CR** | `PENALTY_RECEIVABLE` | *(None)* | Clears Penalty Receivable (1056) |
| | | `FEE_WAIVE`| **DR** | `FEE_WAIVER_EXPENSE` | *(None)* | Waiver Expense (6053) |
| | | `FEE_WAIVE`| **CR** | `FEE_RECEIVABLE` | *(None)* | Clears Fee Receivable (1057) |
| **`INT_WAIVE`** | Interest Waiver (Performing) | `INT_WAIVE`| **DR** | `INTEREST_WAIVER_EXPENSE`|*(None)*| Waiver Expense (6058) |
| | *(Requirement 20)* | `INT_WAIVE`| **CR** | `INTEREST_RECEIVABLE` | *(None)* | Clears Accrued Interest (1055) |
| *(If Suspended)*| Interest Waiver (Suspended / NPL) | `INT_WAIVE`| **DR** | `SUSPENDED_INTEREST` | *(None)* | Reverses suspended liability (2051) |
| | *(Zero P&L impact)* | `INT_WAIVE`| **CR** | `INTEREST_RECEIVABLE` | *(None)* | Clears Accrued Interest (1055) |
| **`STCH`** | Status Change: Reclass to NPL | `OUT_PRIN` | **DR** | `LOAN_PORTFOLIO` | `NEW` | E.g. `SUBSTANDARD` Asset (1052) |
| | *(Requirement 5)* | `OUT_PRIN` | **CR** | `LOAN_PORTFOLIO` | `PREVIOUS`| E.g. `NORMAL` Asset (1050) |
| *(Suspend Accruals)*| Move accrued interest to suspended | `UNCOL_INT`| **DR** | `INTEREST_INCOME` | *(None)* | Reverses income (4050) |
| | | `UNCOL_INT`| **CR** | `SUSPENDED_INTEREST` | *(None)* | Moves to Suspended Liability (2051) |
| **`STCH_CURE`** | Account Cured from NPL to Normal | `OUT_PRIN` | **DR** | `LOAN_PORTFOLIO` | `NEW` | `NORMAL` Asset (1050) |
| | *(Requirement 13)* | `OUT_PRIN` | **CR** | `LOAN_PORTFOLIO` | `PREVIOUS`| E.g. `SUBSTANDARD` Asset (1052) |
| *(Re-instate Int.)*| Reinstate suspended interest | `SUSP_REV` | **DR** | `SUSPENDED_INTEREST` | *(None)* | Clears Suspended Liability (2051) |
| | | `SUSP_REV` | **CR** | `INTEREST_INCOME` | *(None)* | Reinstates Interest Revenue (4050) |
| **`PROVISION`** | Expected Credit Loss Addition | `PROV_EXP` | **DR** | `PROVISION_EXPENSE` | *(None)* | Provision Expense (6050) |
| | | `PROV_EXP` | **CR** | `PROVISION_RESERVE` | *(None)* | Allowance Reserve (1059) |
| **`PROV_WB`** | Provision Write-Back (Account Cured) | `PROV_WB` | **DR** | `PROVISION_RESERVE` | *(None)* | Decreases Reserve (1059) |
| | | `PROV_WB` | **CR** | `PROVISION_EXPENSE` | *(None)* | Reverses Provision Expense (6050) |
| **`WRITE_OFF`** | Debt Write-Off (Reserve $\ge$ Principal) | `PRIN_WO` | **DR** | `PROVISION_RESERVE` | *(None)* | Absorbed by Reserve (1059) |
| | *(Requirement 19)* | `PRIN_WO` | **CR** | `LOAN_PORTFOLIO` | `CURRENT` | Clears Asset in current status |
| *(Shortfall)* | If Reserve < Principal | `SHORTFALL`| **DR** | `LOAN_LOSS_SHORTFALL`| *(None)* | Direct P&L Shortfall Expense (6051) |
| | | `SHORTFALL`| **CR** | `LOAN_PORTFOLIO` | `CURRENT` | Clears remaining Asset |
| *(Clear Suspended)*| Cancel accrued & suspended interest | `SUSP_CLR` | **DR** | `SUSPENDED_INTEREST` | *(None)* | Clears Suspended Liability (2051) |
| | | `SUSP_CLR` | **CR** | `INTEREST_RECEIVABLE` | *(None)* | Clears Accrued Interest (1055) |
| *(Clear Penalty)* | Penalty write-off (not waiver!) | `PEN_WO` | **DR** | `PENALTY_WRITEOFF_EXPENSE`|*(None)*| Penalty Write-Off Expense (6056) |
| | | `PEN_WO` | **CR** | `PENALTY_RECEIVABLE` | *(None)* | Clears Penalty Receivable (1056) |
| *(Clear Fee)* | Fee write-off (not waiver!) | `FEE_WO` | **DR** | `FEE_WRITEOFF_EXPENSE`| *(None)* | Fee Write-Off Expense (6057) |
| | | `FEE_WO` | **CR** | `FEE_RECEIVABLE` | *(None)* | Clears Fee Receivable (1057) |
| *(Release Fee)* | Release unamortized deferred fee | `FEE_REL` | **DR** | `DEFERRED_FEE` | *(None)* | Reverses deferred liability (2050) |
| | *(Requirement 14)* | `FEE_REL` | **CR** | `FEE_INCOME` | *(None)* | Recognized fee income (4052) |
| *(Off-Balance Memo)*| Memorandum off-balance tracking | `MEMO_WO` | **DR** | `WRITTEN_OFF_MEMO_DR`| *(None)* | Memo Asset (9001) |
| | | `MEMO_WO` | **CR** | `WRITTEN_OFF_MEMO_CR`| *(None)* | Memo Contra (9002) |
| **`RECOVERY`** | Post-Write-Off Cash Recovery | `REC_AMT` | **DR** | `CASH_BANK` | *(None)* | Cash recovered |
| | | `REC_AMT` | **CR** | `BAD_DEBT_RECOVERY` | *(None)* | Recovery Income (4059) |
| *(Memo Reduction)*| Reduce memorandum tracking balance | `REC_AMT` | **DR** | `WRITTEN_OFF_MEMO_CR`| *(None)* | Reduces Memo Contra (9002) |
| | *(Requirement 12)* | `REC_AMT` | **CR** | `WRITTEN_OFF_MEMO_DR`| *(None)* | Reduces Memo Asset (9001) |
| **`PREPAY`** | Full Early Payoff Settlement | `PAYOFF_CASH`| **DR** | `CASH_BANK` | *(None)* | Total payoff cash collected |
| | *(Requirement 14 & 15)*| `EARLY_FEE` | **CR** | `FEE_INCOME` | *(None)* | Early termination fee revenue |
| | | `OUT_PRIN` | **CR** | `LOAN_PORTFOLIO` | `CURRENT` | Clears Outstanding Principal |
| | | `EARNED_INT`| **CR** | `INTEREST_RECEIVABLE` | *(None)* | Clears earned accrued interest |
| | | `PENALTY` | **CR** | `PENALTY_RECEIVABLE` | *(None)* | Clears billed penalty receivable |
| | | `FEES` | **CR** | `FEE_RECEIVABLE` | *(None)* | Clears billed fee receivable |
| | Release Unamortized Deferred Fee | `UNAMORT` | **DR** | `DEFERRED_FEE` | *(None)* | Clears unamortized fee (2050) |
| | | `UNAMORT` | **CR** | `FEE_INCOME` | *(None)* | Recognizes full fee income (4052) |
| *(Rebate True-up)* | If accrued != rebate (Req 15) | `TRUE_UP` | **DR/CR**| `INTEREST_INCOME` / `INTEREST_RECEIVABLE` | *(None)* | Exact true-up adjustment leg |
| **`REPOSSESS`** | Vehicle Seizure (Asset Taken) | `APPRAISED` | **DR** | `REPOSSESSED_VEHICLE_ASSET`|*(None)*| Repossessed Inventory Asset (1060) |
| | *(Requirement 16)* | `RESERVE_ABS`| **DR** | `PROVISION_RESERVE` | *(None)* | Loss absorbed by reserve (1059) |
| *(Shortfall)* | If Reserve < Loss | `SHORTFALL`| **DR** | `LOAN_LOSS_SHORTFALL`| *(None)* | Shortfall Expense (6051) |
| | | `OUT_PRIN` | **CR** | `LOAN_PORTFOLIO` | `CURRENT` | Removes Loan Principal Asset |
| *(Clear Suspended)*| Cancel accrued & suspended interest | `SUSP_CLR` | **DR** | `SUSPENDED_INTEREST` | *(None)* | Clears Suspended Liability (2051) |
| | | `SUSP_CLR` | **CR** | `INTEREST_RECEIVABLE` | *(None)* | Clears Accrued Interest (1055) |
| *(Release Fee)* | Release unamortized deferred fee | `UNAMORT` | **DR** | `DEFERRED_FEE` | *(None)* | Clears unamortized fee (2050) |
| | | `UNAMORT` | **CR** | `FEE_INCOME` | *(None)* | Recognizes fee income (4052) |
| **`VEH_DISPOSE`** | Repossessed Vehicle Resale (Gain) | `SALE_PRICE`| **DR** | `CASH_BANK` | *(None)* | Sale proceeds |
| | | `CARRYING` | **CR** | `REPOSSESSED_VEHICLE_ASSET`|*(None)*| Clears carrying asset (1060) |
| | | `GAIN` | **CR** | `GAIN_ON_REPOSSESSED_ASSET`|*(None)*| Non-operating Gain (4053) |
| *(If Loss on Resale)*| Repossessed Vehicle Resale (Loss) | `SALE_PRICE`| **DR** | `CASH_BANK` | *(None)* | Sale proceeds |
| | | `LOSS` | **DR** | `LOSS_ON_REPOSSESSED_ASSET`|*(None)*| Disposal Loss Expense (6055) |
| | | `CARRYING` | **CR** | `REPOSSESSED_VEHICLE_ASSET`|*(None)*| Clears carrying asset (1060) |
| **`REVERSAL`** | Transaction Void / Reversal | *Inverted* | **DR/CR**| *Mirrors original transaction* | Exact balanced contra-postings |

---

### 2.3 Detailed Vehicle Repossession & Disposal Numeric Examples (Requirement 16)

#### Baseline Scenario:
- Outstanding Loan Principal: **$20,000.0000** (Account 1052 *Substandard Loans*).
- Accrued Interest: **$1,500.0000** (Account 1055).
- Suspended Interest: **$1,500.0000** (Account 2051).
- Vehicle Seized & Appraised Value: **$16,000.0000**.
- Net Principal Loss to Absorb: $\$20,000.0000 - \$16,000.0000 = \mathbf{\$4,000.0000}$.

---

#### Case A: Provision Reserve $\ge$ Shortfall (Booked Reserve = $5,000.0000$)
- **`REPOSSESS` Entries**:
  - **DR** `REPOSSESSED_VEHICLE_ASSET` (Account 1060): **$16,000.0000**
  - **DR** `PROVISION_RESERVE` (Account 1059): **$4,000.0000**
  - **CR** `LOAN_PORTFOLIO` (Account 1052): **$20,000.0000**
  - Debits = $20,000 | Credits = $20,000 *(Balanced)*
- **Clear Suspended Interest**:
  - **DR** `SUSPENDED_INTEREST` (Account 2051): **$1,500.0000**
  - **CR** `INTEREST_RECEIVABLE` (Account 1055): **$1,500.0000**
  - Debits = $1,500 | Credits = $1,500 *(Balanced)*
- **Excess Reserve Release (`PROV_WB`)**:
  - Remaining $1,000 provision reserve is written back:
  - **DR** `PROVISION_RESERVE` (Account 1059): **$1,000.0000**
  - **CR** `PROVISION_EXPENSE` (Account 6050): **$1,000.0000**

---

#### Case B: Provision Reserve < Shortfall (Booked Reserve = $2,500.0000$, Shortfall = $1,500.0000$)
- **`REPOSSESS` Entries**:
  - **DR** `REPOSSESSED_VEHICLE_ASSET` (Account 1060): **$16,000.0000**
  - **DR** `PROVISION_RESERVE` (Account 1059): **$2,500.0000**
  - **DR** `LOAN_LOSS_SHORTFALL` (Account 6051): **$1,500.0000**
  - **CR** `LOAN_PORTFOLIO` (Account 1052): **$20,000.0000**
  - Debits = $20,000 | Credits = $20,000 *(Balanced)*
- **Clear Suspended Interest**:
  - **DR** `SUSPENDED_INTEREST` (Account 2051): **$1,500.0000**
  - **CR** `INTEREST_RECEIVABLE` (Account 1055): **$1,500.0000**
  - Debits = $1,500 | Credits = $1,500 *(Balanced)*

---

#### Vehicle Resale / Disposal Events (`VEH_DISPOSE`):
- **Scenario 1: Sold at Gain ($17,000.0000 cash)**:
  - **DR** `CASH_BANK`: **$17,000.0000**
  - **CR** `REPOSSESSED_VEHICLE_ASSET` (Account 1060): **$16,000.0000**
  - **CR** `GAIN_ON_REPOSSESSED_ASSET` (Account 4053): **$1,000.0000**
- **Scenario 2: Sold at Loss ($14,500.0000 cash)**:
  - **DR** `CASH_BANK`: **$14,500.0000**
  - **DR** `LOSS_ON_REPOSSESSED_ASSET` (Account 6055): **$1,500.0000**
  - **CR** `REPOSSESSED_VEHICLE_ASSET` (Account 1060): **$16,000.0000**

---

### 2.4 Prepayment Engine & Accrual Method Matrix (Requirement 15)

1. **Exact Day Count Rule**: `DAILY_OUTSTANDING` accrual strictly evaluates:
   $$\text{Daily Interest} = \text{Outstanding Principal} \times \frac{\text{Annual Rate}}{\text{Days In Year (from dayCount Code)}}$$
   Where Days In Year is dynamically derived from `dayCountCode`:
   - `30_360`: 360 days.
   - `ACT_360`: 360 days.
   - `ACT_365`: 365 days (or 366 in leap year if ACT/ACT).
2. **Rebate vs Accrual True-Up Leg**:
   $$\text{True-Up} = \text{Rebated Earned Contract Interest} - \text{Cumulative Booked Accrued Interest to Date}$$
   - If True-Up $>$ 0 (catch-up accrual needed):
     $$\text{DR } \text{INTEREST\_RECEIVABLE} \quad / \quad \text{CR } \text{INTEREST\_INCOME} \quad (\text{True-Up Amount})$$
   - If True-Up $<$ 0 (reversal of over-accrual needed):
     $$\text{DR } \text{INTEREST\_INCOME} \quad / \quad \text{CR } \text{INTEREST\_RECEIVABLE} \quad (\text{True-Up Amount})$$
3. **Compatibility Matrix (`accrualMethod` $\times$ `earlySettlementRebateMethod`)**:
   - `RULE_OF_78` accrual + `RULE_OF_78` rebate: **Perfect Match** (True-Up = 0).
   - `STRAIGHT_LINE` accrual + `RULE_OF_78` rebate: **Valid** (True-Up calculated and posted).
   - `DAILY_OUTSTANDING` + `ACTUARIAL`: **Perfect Match** (Compound day-count alignment).
   - `DAILY_OUTSTANDING` + `NONE`: **Valid** (No rebate; borrower pays full unearned interest).

---

## 3. Complete Schema Architecture (54 Normalized Tables)

All tables use `DECIMAL(20,4)` for amounts, `DECIMAL(9,6)` for rates/fractions, and `DECIMAL(20,8)` for exchange rates.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              SCHEMA PARTITION DIRECTORY                                │
├─────────────────────────┬─────────────────────────┬────────────────────────────────────┤
│ 1. Lookups (9 tables)   │ 2. Product Factory (11) │ 3. Status & Provision (5 tables)   │
│ 4. Governance & Doc (6) │ 5. Accounting Setup (6) │ 6. Collateral & Security (3 tables)│
│ 7. Accounts & Ledgers(9)│ 8. Lifecycle & Hist (3) │ 9. Batch & Concurrency (2 tables)  │
└─────────────────────────┴─────────────────────────┴────────────────────────────────────┘
```

### Partition 1: Business Rule Lookup Tables (No Hardcoded ENUMs)
1. **`ln_lookup_loan_type`**: `code` (PK, VARCHAR(30)), `name`, `description`.
2. **`ln_lookup_frequency`**: `code` (PK, VARCHAR(30)), `name`, `daysInterval`, `periodsPerYear` (DECIMAL(9,6)).
3. **`ln_lookup_disbursement_target`**: `code` (PK, VARCHAR(30)), `name`.
4. **`ln_lookup_holiday_handling`**: `code` (PK, VARCHAR(30)), `name`.
5. **`ln_lookup_day_count`**: `code` (PK, VARCHAR(30)), `name`.
6. **`ln_lookup_rebate_method`**: `code` (PK, VARCHAR(30)), `name`.
7. **`ln_lookup_accrual_method`**: `code` (PK, VARCHAR(30)), `name`.
8. **`ln_lookup_collateral_type`** (Requirement 6): `code` (PK, VARCHAR(30)), `name`, `description`.
9. **`ln_lookup_loan_purpose`** (Requirement 6): `code` (PK, VARCHAR(30)), `name`, `description`.

### Partition 2: Product Factory & User Defined Elements (UDE)
10. **`ln_product_category`**: `id` (PK), `code` (UNIQUE), `name`, `description`, `authStatus`, `makerId`, `checkerId`.
11. **`ln_product`**:
    - `id` (PK, INT AUTO_INCREMENT), `productCode` (VARCHAR(30)), `version` (INT, default 1).
    - `name` (VARCHAR(100)), `categoryId` (FK), `effectiveDate`, `expiryDate` (nullable).
    - `loanTypeCode` (FK), `minAmount`, `maxAmount` (DECIMAL(20,4)), `minTenorMonths`, `maxTenorMonths` (INT).
    - `minInterestRate`, `maxInterestRate` (DECIMAL(9,6)), `minDownPaymentPct` (DECIMAL(9,6)), `maxLtvPct` (DECIMAL(9,6)).
    - `disbursementTargetCode` (FK), `feeFinancingMode` (`'CAPITALIZED'`, `'UPFRONT'`, `'DEDUCTED'`).
    - `deferredFeePresentation` (`'LIABILITY'`, `'CONTRA_ASSET_NET'`), `earlySettlementRebateMethod` (FK).
    - `accrualMethodCode` (FK), `dayCountCode` (FK), `defaultFrequencyCode` (FK), `holidayHandlingCode` (FK).
    - `partialPrepayOption` (`'REDUCE_INSTALLMENT'`, `'REDUCE_TENOR'`) (Requirement 4).
    - `overpaymentTreatment` (`'CUSTOMER_ADVANCE'`, `'AUTO_FUTURE_INSTALLMENTS'`, `'PRINCIPAL_PREPAY'`) (Requirement 4).
    - `oldestInstallmentFirst` (BOOLEAN, default true) (Requirement 4).
    - `allowRateOverride`, `allowScheduleOverride`, `allowPrepayment`, `allowTopUp`, `allowReschedule`, `allowBackdatedDisbursement` (BOOLEAN).
    - `requireCollateral`, `requireGuarantor` (BOOLEAN), `authStatus`, `makerId`, `checkerId`, `status`, `optLockVersion`.
    - UNIQUE constraint on `(productCode, version)`.
12. **`ln_product_currency`**: `id`, `productId`, `currencyId`, `isDefault`.
13. **`ln_component`**: `id`, `componentCode` (UNIQUE), `name`, `componentType`, `calculationBasis`, `liquidationMode`, `allowPrepay`, `authStatus`.
14. **`ln_product_component`**: `id`, `productId`, `componentId`, `formulaCode`, `defaultValue` (DECIMAL(20,4)), `minValue`, `maxValue`, `timing`, `isAmendableAtAccount`, `isEIRAmortized`, `authStatus`.
15. **`ln_ude`**: `id`, `udeCode` (UNIQUE), `name`, `dataType` (`'RATE'`, `'AMOUNT'`, `'DAYS'`, `'COUNT'`), `description`.
16. **`ln_product_ude`**: `id`, `productId`, `udeCode`, `defaultValue` (DECIMAL(20,4)), `minValue`, `maxValue`, `isAmendableAtAccount`, `authStatus`.
17. **`ln_rate_index`**: `id`, `rateCode` (UNIQUE), `name`, `resetFrequencyCode`, `authStatus`, `makerId`, `checkerId`.
18. **`ln_rate_index_value`**: `id`, `rateIndexId`, `effectiveDate`, `baseRate` (DECIMAL(9,6)), `optLockVersion`.
19. **`ln_rate_tier`**: `id`, `productComponentId`, `tierBasis` (`'AMOUNT'`, `'TENOR'`), `fromValue`, `toValue`, `tierRate` (DECIMAL(9,6)).
20. **`ln_waterfall_rule`**: `id`, `productId`, `accountStatus`, `priorityOrder`, `componentId`, `authStatus`.

### Partition 3: Calendars, Fees & Taxes
21. **`ln_holiday_calendar`**: `id`, `calendarCode` (UNIQUE), `branchId`, `description`.
22. **`ln_holiday_date`**: `id`, `calendarId`, `holidayDate`, `description`, `isWeekend`.
23. **`ln_fee_master`**: `id`, `feeCode` (UNIQUE), `componentId` (FK), `feeType`, `calcMethod`, `basisAmountType`, `minAmount`, `maxAmount` (DECIMAL(20,4)), `isEirAmortized`, `taxApplicable`, `triggerEventCode`, `accountingRoleCode`, `authStatus`.
24. **`ln_tax_master`**: `id`, `taxCode` (UNIQUE), `componentId` (FK), `taxRate` (DECIMAL(9,6)), `accountingRoleCode`, `effectiveFrom`, `effectiveTo`, `authStatus`.

### Partition 4: Status Movement, Regulatory Class, Provision & Cure Rules
25. **`ln_regulatory_class`**: `id`, `classCode` (UNIQUE), `name`, `glQualifier` (`'NORMAL'`, `'WATCH'`, `'SUBSTANDARD'`, `'DOUBTFUL'`, `'LOSS'`), `authStatus`.
26. **`ln_status_master`**: `id`, `statusCode` (UNIQUE), `name`, `regulatoryClassCode` (FK), `interestTreatment`, `penaltyTreatment`, `authStatus`.
27. **`ln_status_movement_rule`**: `id`, `fromStatus`, `toStatus`, `minDpd`, `maxDpd`, `conditionFormula`, `effectiveFrom`, `effectiveTo`, `authStatus`.
28. **`ln_status_cure_rule`** (Requirement 11): `id`, `fromStatus`, `toStatus`, `consecutiveOnTimeInstallmentsRequired` (INT), `observationMonthsRequired` (INT), `authStatus`.
29. **`ln_provision_rule`**: `id`, `regulatoryClassCode`, `productId` (nullable), `categoryId` (nullable), `provisionRate` (DECIMAL(9,6)), `collateralHaircutPct` (DECIMAL(9,6)), `provisionBase` (`'NET_EXPOSURE'`, `'TOTAL_OUTSTANDING'`), `effectiveFrom`, `effectiveTo`, `authStatus`.
30. **`ln_provision_ledger`**: `id`, `loanAccountId`, `evaluationDate`, `outstandingPrincipal` (DECIMAL(20,4)), `eligibleCollateralValue` (DECIMAL(20,4)), `netExposure` (DECIMAL(20,4)), `provisionRate` (DECIMAL(9,6)), `requiredProvision` (DECIMAL(20,4)), `bookedProvision` (DECIMAL(20,4)), `deltaProvision` (DECIMAL(20,4)), `glBatchId`, `status`.

### Partition 5: Governance, Approvals & Documentation (Requirement 6)
31. **`ln_approval_matrix`**: `id`, `entityType` (`'APPLICATION'`, `'WRITE_OFF'`, `'AMENDMENT'`), `minAmount`, `maxAmount` (DECIMAL(20,4)), `requiredLevel` (INT), `approverRoleId` (INT), `authStatus`.
32. **`ln_approval_log`**: `id`, `entityType`, `entityId`, `approvalLevel`, `approverUserId`, `action` (`'APPROVED'`, `'REJECTED'`, `'RETURNED'`), `comments`, `timestamp`.
33. **`ln_document_checklist`**: `id`, `productId`, `documentTypeCode`, `documentName`, `isMandatory`, `authStatus`.
34. **`ln_application_document`**: `id`, `applicationId`, `documentTypeCode`, `fileUrl`, `fileName`, `isVerified`, `verifiedBy`, `verifiedAt`.
35. **`ln_audit_log`**: `id`, `entityName`, `entityId`, `actionType` (`'CREATE'`, `'UPDATE'`, `'DELETE'`, `'AUTH'`), `oldValuesJson`, `newValuesJson`, `userId`, `ipAddress`, `timestamp`.

### Partition 6: Accounting Setup & GL Batch (Requirement 2, 5, 7, 9)
36. **`ln_accounting_role`**: `id`, `roleCode` (UNIQUE), `name`, `expectedType`, `resolverType` (`'MAPPING_TABLE'`, `'SYSTEM_PARAM'`, `'BANK_ACCOUNT'`), `authStatus`.
37. **`ln_amount_tag`**: `id`, `tagCode` (UNIQUE), `name`.
38. **`ln_event_master`**: `id`, `eventCode` (UNIQUE), `name`, `description`.
39. **`ln_accounting_entry_rule`**: `id`, `productId`, `categoryId`, `eventCode`, `amountTag`, `drCr`, `roleCode`, `qualifierSource` (`'CURRENT'`, `'PREVIOUS'`, `'NEW'`), `effectiveFrom`, `effectiveTo`, `authStatus`.
40. **`ln_role_gl_mapping`**: `id`, `productId`, `categoryId`, `branchId`, `currencyId`, `statusQualifier` (nullable), `roleCode`, `chartAccountId`, `effectiveFrom`, `effectiveTo`, `isSeedDefault`, `authStatus`, `makerId`, `checkerId`.
    - UNIQUE constraint on `(COALESCE(productId,0), COALESCE(categoryId,0), COALESCE(branchId,0), COALESCE(currencyId,0), COALESCE(statusQualifier,'*'), roleCode, effectiveFrom)`.
41. **`ln_gl_batch`** (Requirement 5): `id`, `batchNumber` (UNIQUE), `businessDate`, `batchType` (`'EOD_ACCRUAL'`, `'CONSOLIDATED_JOURNAL'`), `totalDebit` (DECIMAL(20,4)), `totalCredit` (DECIMAL(20,4)), `currencyId`, `branchId`, `status`.

### Partition 7: Collateral, Application & Account
42. **`ln_collateral_master`**: `id`, `collateralNo` (UNIQUE), `collateralTypeCode` (FK), `customerId`, `appraisedValue` (DECIMAL(20,4)), `appraisedDate`, `currencyId`, `status`.
43. **`ln_collateral_vehicle`**: `id`, `collateralId` (UNIQUE), `vinChassisNo` (INDEX), `engineNo`, `licensePlate`, `registrationBookRef`, `brand`, `model`, `year`, `color`, `insurancePolicyNo`, `insuranceCompany`, `insuranceExpiryDate`, `insuranceCoverageAmount` (DECIMAL(20,4)).
44. **`ln_application`**: `id`, `appNo` (UNIQUE), `branchId` (INT, default 1), `customerId`, `productId`, `currencyId`, `vehicleSaleHeaderId`, `vehiclePrice` (DECIMAL(20,4)), `downPaymentAmount` (DECIMAL(20,4)), `downPaymentPct` (DECIMAL(9,6)), `requestedAmount` (DECIMAL(20,4)), `tenorMonths`, `interestRate` (DECIMAL(9,6)), `balloonAmount` (DECIMAL(20,4)), `purposeCode` (FK), `status`, `currentApprovalLevel`, `createdBy`, `approvedBy`.
45. **`ln_guarantor`**: `id`, `applicationId`, `loanAccountId`, `fullName`, `idCardPassport`, `phone`, `relationship`, `address`, `monthlyIncome` (DECIMAL(20,4)), `employerName`.
46. **`ln_loan_collateral`**: `id`, `loanAccountId`, `collateralId`, `allocatedValue` (DECIMAL(20,4)), `ltvPct` (DECIMAL(9,6)).
47. **`ln_account`**:
    - `id`, `accountNo` (UNIQUE), `branchId` (INT, default 1), `applicationId`, `customerId`, `productId`, `productVersion`, `currencyId`, `saleHeaderId`.
    - `sanctionedAmount` (DECIMAL(20,4)), `disbursedAmount` (DECIMAL(20,4)), `downPaymentAmount` (DECIMAL(20,4)), `downPaymentCollected` (BOOLEAN).
    - `interestRate` (DECIMAL(9,6)), `rateIndexId` (INT, nullable), `spread` (DECIMAL(9,6), default 0), `effectiveInterestRate` (DECIMAL(9,6)), `balloonAmount` (DECIMAL(20,4), default 0).
    - `tenorMonths`, `firstDueDate` (DATEONLY), `valueDate` (DATEONLY), `maturityDate` (DATEONLY), `disbursementTarget` (VARCHAR(30)).
    - `status` (VARCHAR(30)), `regulatoryClass` (VARCHAR(30)), `currentDpd` (INT, default 0), `closedAt` (DATETIME, nullable), `optLockVersion` (INT, default 1).
48. **`ln_account_param_snapshot`**: `id`, `loanAccountId` (UNIQUE), `productVersion`, `snapshotJson` (LONGTEXT).
49. **`ln_account_ude`**: `id`, `loanAccountId`, `udeCode`, `udeValue` (DECIMAL(20,4)).
50. **`ln_account_balance`**: `id`, `loanAccountId`, `componentId`, `outstandingAmount`, `totalAccrued`, `totalBilled`, `totalPaid`, `totalWaived` (all DECIMAL(20,4)), `optLockVersion`.
51. **`ln_schedule`**: `id`, `loanAccountId`, `installmentNo`, `dueDate`, `originalDueDate`, `status`, `optLockVersion`.
52. **`ln_schedule_component`**: `id`, `scheduleId`, `componentId`, `amountDue`, `amountPaid`, `amountWaived` (all DECIMAL(20,4)), `status`.
53. **`ln_accrual_ledger`**: `id`, `loanAccountId`, `componentId`, `accrualDate`, `dailyAmount` (DECIMAL(20,4)), `cumulativeAmount` (DECIMAL(20,4)), `isSuspended` (BOOLEAN), `glBatchId` (FK to `ln_gl_batch`).

### Partition 8: Transactions, Journals & History
54. **`ln_transaction`** (Requirement 1, 2, 11):
    - `id`, `txNo` (UNIQUE), `branchId` (INT, default 1), `loanAccountId`, `eventCode`, `valueDate`, `postingDate`, `amount` (DECIMAL(20,4)), `currencyId`, `exchangeRate` (DECIMAL(20,8)), `baseAmount` (DECIMAL(20,4)), `paymentMethod` (VARCHAR(30)), `paymentMethodId` (INT, nullable), `bankAccountId` (INT, nullable), `isReversed` (BOOLEAN), `reversalOfTxId` (INT), `authStatus`, `makerId`, `checkerId`, `authorizedAt`.
55. **`ln_transaction_allocation`**: `id`, `transactionId`, `scheduleComponentId`, `componentId`, `allocatedAmount` (DECIMAL(20,4)).
56. **`ln_journal_posting`**: `id`, `transactionId` (INT, nullable), `glBatchId` (VARCHAR(50), nullable), `loanAccountId` (INT, nullable), `eventCode`, `amountTag`, `roleCode`, `chartAccountId`, `drCr`, `amount` (DECIMAL(20,4)), `baseAmount` (DECIMAL(20,4)), `exchangeRate` (DECIMAL(20,8)), `glRecordId`.
57. **`ln_status_history`**: `id`, `loanAccountId`, `oldStatus`, `newStatus`, `changeReason`, `triggeredBy`, `approvalUserId`, `effectiveDate`.
58. **`ln_amendment_history`**: `id`, `loanAccountId`, `amendmentType`, `effectiveDate`, `oldValuesJson`, `newValuesJson`, `approvedBy`.

### Partition 9: Concurrency, Idempotency & System State
59. **`ln_idempotency`** (Requirement 3): `id`, `endpoint` (VARCHAR(100)), `accountId` (INT, nullable), `idempotencyKey` (VARCHAR(100)), `requestHash` (VARCHAR(64)), `responseBody` (LONGTEXT), `status` (INT), `createdAt` (DATETIME).
    - UNIQUE constraint on `(endpoint, accountId, idempotencyKey)`.
60. **`ln_system_date`**: `id`, `branchId`, `currentBusinessDate`, `prevBusinessDate`, `nextBusinessDate`, `periodLockDate` (DATEONLY), `status` (`'OPEN'`, `'CLOSED'`, `'EOD_PROCESSING'`).
61. **`ln_numbering_sequence`**: `id`, `sequenceCode` (UNIQUE), `prefix`, `nextNumber`, `paddingLength`, `formatPattern`.
62. **`ln_batch_job`**: `id`, `jobCode` (UNIQUE), `name`, `executionOrder`, `isEnabled`, `lastRunDate`, `lastStatus`.
63. **`ln_batch_log`**: `id`, `businessDate`, `jobCode`, `status`, `recordsProcessed`, `recordsFailed`, `logMessage`, `executionTimeMs`.
64. **`ln_batch_lock`**: `lockName` (PK, VARCHAR(50)), `acquiredAt`, `acquiredBy`, `expiresAt`.

---

## 4. Governance, Policies & Controls

### 4.1 Frozen in Snapshot vs Read Live (Requirement 10)
- **Frozen in `ln_account_param_snapshot`**:
  - Calculation formula key (`ANNUITY_EMI`, `FLAT_MONTHLY`, etc.)
  - Base interest rate and contractual spread/margin
  - Day count convention (`30_360`, `ACT_365`, etc.)
  - Amortization schedule dates and installment amounts
  - Fee financing mode (`CAPITALIZED`, `DEDUCTED`, `UPFRONT`)
  - Early settlement rebate method (`RULE_OF_78`, `ACTUARIAL`, `NONE`)
  - Initial EIR yield
- **Read Live (Effective-Dated)**:
  - Role &rarr; Chart of Accounts mapping (`ln_role_gl_mapping`)
  - Delinquency rules and DPD thresholds (`ln_status_movement_rule`)
  - Provision percentages and haircuts (`ln_provision_rule`)
  - Holiday calendar dates (`ln_holiday_date`)
  - Floating Rate Index resets (`ln_rate_index_value`)

### 4.2 Accounting Period Lock & Backdated Policy (Requirement 8)
- Every transaction checks: `valueDate < ln_system_date.periodLockDate`.
- If value date falls in a closed/locked period:
  - Default policy parameter `backdatedPastLockPolicy = 'POST_IN_CURRENT_PERIOD'`.
  - Accrual and interest recalculations honor historical value-dates, but GL entries are stamped with `bookingDate = currentBusinessDate` and `description = 'Value-dated adjustment for YYYY-MM-DD'`.

### 4.3 Rigorous Disbursement Pre-Validation (Requirement 21)
Before executing `DISB`:
1. **Invoice Verification**: System verifies linked [`saleHeader`](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/sales/model.js) exists and `isPostedToAR == true` for the full vehicle purchase price.
2. **Down Payment Verification**: Queries [`ARReceiveLine`](file:///Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_api/src/AR/receive/line/model.js) payments allocated against the invoice lines. Verifies:
   $$\sum \text{allocatedAmount} \ge \text{requiredDownPaymentAmount}$$
3. **Open Balance Match**: Verifies remaining uncollected invoice balance ($\text{total} - \sum \text{allocatedAmount}$) **exactly equals** the requested loan financed principal.

---

## 5. Seed Chart of Accounts Reference (4-Digit Standard Format)

| Accounting Role | Resolver Type | Status Qualifier | Seed Number | Account Name (English) | Lao Account Name (`ບັນຊີ`) | Type |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `LOAN_PORTFOLIO` | `MAPPING_TABLE` | `NORMAL` | `1050` | Vehicle Installment Loans (Normal) | ເງິນກູ້ຊື້ລົດຜ່ອນ (ປົກກະຕິ) | Asset |
| `LOAN_PORTFOLIO` | `MAPPING_TABLE` | `WATCH` | `1051` | Vehicle Loans (Special Mention) | ເງິນກູ້ຊື້ລົດ (ຄວນເອົາໃຈໃສ່) | Asset |
| `LOAN_PORTFOLIO` | `MAPPING_TABLE` | `SUBSTANDARD`| `1052` | Vehicle Loans (Substandard - NPL) | ເງິນກູ້ຊື້ລົດ (ຕ່ຳກວ່າມາດຕະຖານ) | Asset |
| `LOAN_PORTFOLIO` | `MAPPING_TABLE` | `DOUBTFUL` | `1053` | Vehicle Loans (Doubtful - NPL) | ເງິນກູ້ຊື້ລົດ (ໜີ້ສົງໄສ) | Asset |
| `LOAN_PORTFOLIO` | `MAPPING_TABLE` | `LOSS` | `1054` | Vehicle Loans (Loss - NPL) | ເງິນກູ້ຊື້ລົດ (ໜີ້ສູນ) | Asset |
| `SALE_RECEIVABLE`| `SYSTEM_PARAM`  | *(None)* | `1005` | Accounts Receivable (POS Vehicle Sale) | ລູກໜີ້ການຄ້າ (ຂາຍລົດ) | Asset *(Existing)* |
| `INTEREST_RECEIVABLE`| `MAPPING_TABLE`| *(None)* | `1055` | Accrued Loan Interest Receivable | ດອກເບ້ຍເງິນກູ້ຄ້າງຮັບ | Asset |
| `PENALTY_RECEIVABLE` | `MAPPING_TABLE`| *(None)* | `1056` | Accrued Penalty Receivable | ດອກເບ້ຍປັບໄໝຄ້າງຮັບ | Asset |
| `FEE_RECEIVABLE`     | `MAPPING_TABLE`| *(None)* | `1057` | Accrued Loan Fees Receivable | ຄ່າທຳນຽມເງິນກູ້ຄ້າງຮັບ | Asset |
| `INSURANCE_RECEIVABLE`| `MAPPING_TABLE`| *(None)*| `1058` | Accrued Vehicle Insurance Receivable | ຄ່າປະກັນໄພລົດຄ້າງຮັບ | Asset |
| `PROVISION_RESERVE`  | `MAPPING_TABLE`| *(None)* | `1059` | Allowance for Expected Credit Losses | ຄັງສຳຮອງໜີ້ເສຍເງິນກູ້ | Contra-Asset |
| `REPOSSESSED_VEHICLE_ASSET`| `MAPPING_TABLE`| *(None)*| `1060` | Repossessed Vehicle Inventory Asset | ຊັບສິນລົດຍຶດລໍຖ້າຂາຍ | Asset |
| `UNAMORTIZED_FEE_CONTRA`| `MAPPING_TABLE`| *(None)*| `1061` | Unamortized Loan Fee (Carrying Netting) | ຄ່າທຳນຽມລໍຖ້າຕັດຈ່າຍ (ຫຼຸດມູນຄ່າເງິນກູ້) | Contra-Asset |
| `DEFERRED_FEE`       | `MAPPING_TABLE`| *(None)* | `2050` | Deferred Loan Documentation Fees | ລາຍຮັບຄ່າທຳນຽມລໍຖ້າຮັບຮູ້ (EIR) | Liability |
| `SUSPENDED_INTEREST` | `MAPPING_TABLE`| *(None)* | `2051` | Suspended Interest on NPL Loans | ດອກເບ້ຍໂຈະຮັບ (ໜີ້ NPL) | Liability |
| `INSURANCE_PAYABLE`  | `MAPPING_TABLE`| *(None)* | `2052` | Vehicle Insurance Premium Payable | ເງິນຄ່າປະກັນໄພລົດຄ້າງຈ່າຍ | Liability |
| `TAX_PAYABLE`        | `MAPPING_TABLE`| *(None)* | `2053` | Value Added Tax Payable | ອາກອນມູນຄ່າເພີ່ມຄ້າງຈ່າຍ | Liability |
| `CUSTOMER_ADVANCE_LIAB`| `MAPPING_TABLE`| *(None)*| `2054` | Customer Loan Advance Payments | ເງິນຈ່າຍລ່ວງໜ້າຂອງລູກຄ້າ | Liability |
| `INTEREST_INCOME`    | `MAPPING_TABLE`| *(None)* | `4050` | Loan Interest Income | ລາຍຮັບດອກເບ້ຍເງິນກູ້ | Revenue |
| `PENALTY_INCOME`     | `MAPPING_TABLE`| *(None)* | `4051` | Loan Late Penalty Income | ລາຍຮັບຄ່າປັບໄໝຊັກຊ້າ | Revenue |
| `FEE_INCOME`         | `MAPPING_TABLE`| *(None)* | `4052` | Loan Documentation & Origination Fee | ລາຍຮັບຄ່າທຳນຽມສັນຍາເງິນກູ້ | Revenue |
| `GAIN_ON_REPOSSESSED_ASSET`| `MAPPING_TABLE`| *(None)*| `4053`| Gain on Repossessed Vehicle Resale | ລາຍຮັບກຳໄລຈາກການຂາຍລົດຍຶດ | Revenue |
| `BAD_DEBT_RECOVERY`  | `MAPPING_TABLE`| *(None)* | `4059` | Bad Debt Recovery Income | ລາຍຮັບຈາກການທວງໜີ້ເສຍຄືນ | Revenue |
| `PROVISION_EXPENSE`  | `MAPPING_TABLE`| *(None)* | `6050` | Loan Loss Provision Expense | ລາຍຈ່າຍສຳຮອງໜີ້ເສຍເງິນກູ້ | Expense |
| `LOAN_LOSS_SHORTFALL`| `MAPPING_TABLE`| *(None)* | `6051` | Unprovisioned Loan Loss Shortfall | ລາຍຈ່າຍໜີ້ສູນສ່ວນທີ່ບໍ່ມີຄັງສຳຮອງ | Expense |
| `PENALTY_WAIVER_EXPENSE`| `MAPPING_TABLE`| *(None)*| `6052`| Waived Loan Penalties Expense | ລາຍຈ່າຍຍົກເວັ້ນຄ່າປັບໄໝ | Expense |
| `FEE_WAIVER_EXPENSE`| `MAPPING_TABLE` | *(None)* | `6053` | Waived Loan Fees Expense | ລາຍຈ່າຍຍົກເວັ້ນຄ່າທຳນຽມ | Expense |
| `ROUNDING_DIFF`      | `MAPPING_TABLE`| *(None)* | `6054` | Multi-Currency Rounding Differences | ຜົນຕ່າງເສດເສດເງິນຈາກການປ່ຽນສະກຸນ | Expense/Rev |
| `LOSS_ON_REPOSSESSED_ASSET`| `MAPPING_TABLE`| *(None)*| `6055`| Loss on Repossessed Vehicle Resale | ລາຍຈ່າຍຂາດທຶນຈາກການຂາຍລົດຍຶດ | Expense |
| `PENALTY_WRITEOFF_EXPENSE`| `MAPPING_TABLE`| *(None)*| `6056`| Written-off Loan Penalty Expense | ລາຍຈ່າຍຕັດໜີ້ສູນຄ່າປັບໄໝ | Expense |
| `FEE_WRITEOFF_EXPENSE`| `MAPPING_TABLE`| *(None)* | `6057`| Written-off Loan Fees Expense | ລາຍຈ່າຍຕັດໜີ້ສູນຄ່າທຳນຽມ | Expense |
| `INTEREST_WAIVER_EXPENSE`| `MAPPING_TABLE`| *(None)*| `6058`| Waived Loan Interest Expense | ລາຍຈ່າຍຍົກເວັ້ນດອກເບ້ຍເງິນກູ້ | Expense |
| `CASH_BANK`          | `BANK_ACCOUNT` | *(None)* | `1000` | Cash on Hand / Cash Drawer | ເງິນສົດໃນມື/ຄັງເງິນສົດ | Asset *(Existing)* |
| `WRITTEN_OFF_MEMO_DR`| `MAPPING_TABLE`| *(None)* | `9001` | Off-Balance Written-Off Loan Asset | ບັນຊີຕິດຕາມໜີ້ສູນນອກຜັງ (ຊັບສິນ) | Off-Balance *(Memo)* |
| `WRITTEN_OFF_MEMO_CR`| `MAPPING_TABLE`| *(None)* | `9002` | Off-Balance Written-Off Loan Contra | ບັນຊີຕິດຕາມໜີ້ສູນນອກຜັງ (ກົງກັນຂ້າມ) | Off-Balance *(Memo)* |

---

## 6. Phase 2 Scope & Implementation Plan

With Phase 1 Rev 4 established as the definitive architecture, **Phase 2** execution is divided into two controlled deliverables:

1. **Phase 2A (Immediate Execution)**:
   - DDL Migrations & Sequelize models for:
     - All 9 Lookup tables (`ln_lookup_*`).
     - Product Factory, Currencies, Components, and UDEs (`ln_product`, `ln_component`, `ln_product_component`, `ln_ude`, `ln_product_ude`, etc.).
     - Calendars, Holidays, Fee Master, Tax Master.
     - Regulatory classes, Status Master, Status Movement rules, Status Cure rules, Provision rules.
     - Collateral Master, Vehicle Collateral, Loan Collateral link table.
     - Application, Guarantors, Approval Matrix & Logs, Document Checklist & Files, Audit Log.
     - Core Accounts, Snapshots, Account UDEs, Account Balances, Schedules, Schedule Components, Accrual Ledger.
     - System Dates, Numbering Sequences, Batch Jobs, Batch Logs, Mutex Locks, and Idempotency table (`ln_idempotency`).
     - Seed script for Lookups, UDE definitions, default Regulatory classes, Statuses, and default car loan products (`CAR-LOAN-DB`, `CAR-LOAN-FLAT`, `CAR-LOAN-BALLOON`).
     - Vuetify Parameter Studio UI (`pages/admin/loan/studio/`).
2. **Phase 2B (Held pending explicit confirmation)**:
   - Seeding of `ln_accounting_entry_rule` and `ln_role_gl_mapping`.

---
*Ready for confirmation to initiate Phase 2A.*