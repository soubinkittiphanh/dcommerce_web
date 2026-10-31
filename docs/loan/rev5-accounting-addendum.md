# Loan Module: Rev 5 Accounting Addendum (DRAFT, UNCONFIRMED)

Status: **accepted with changes (revision 2); account numbers and VAT still to be confirmed by the customer's accountant.** Phase 2B seeds the catalog additions (§7) and `ln_accounting_entry_rule` as PENDING. `ln_role_gl_mapping` stays empty and no GL accounts are created until the accountant confirms §5.

Revision 3 draft (2026-10-31): new §8 Multi-currency (UNCONFIRMED). Reviewed the same day; changes applied: DISB carries over the invoice base; rate age 3 days with a warning; self-authorize applies to rates; USD examples from the engine schedule. Owner's correction (same day): POS sale lines carry their own currency, so a foreign-currency loan may settle a base-currency invoice (implied-rate tolerance, currency position, examples X1–X3).

Revision 2 changes:
- penalties default to MEMO_ONLY (cash basis);
- two portfolio accounts by default;
- new FEE_REFUND event;
- Example 4 moved to its own loan;
- system-parameter and collision-check notes in §5;
- contra-asset report check (§5.1).

Precedence: `rev5-decisions.md` > this addendum > `spec-rev4.md` §2 and §5. Once this addendum is confirmed it replaces spec-rev4 §2.2 (event matrix) and §5 (seed chart of accounts).

Role, event, amount-tag and status codes below are the ones seeded in Phase 2A (31 roles, 22 events, 42 tags, 8 statuses). Anything *not* in the seeded catalog is marked **[NEW]**; it is a proposal for Phase 2B, collected in §7.

---

## 0. Conventions

- **Rule key.** One rule row = (`eventCode`, `amountTag`, `drCr`, `roleCode`, `qualifierSource`), optionally scoped to a product or category and effective-dated. The same tag may map to different roles in different events.
- **A leg posts only when its tag amount is non-zero.** The engine computes every tag for the transaction; amounts are always positive and the side comes from the rule. Conditions in the tables below therefore mean "the engine computes this tag as non-zero only when…". Where the same tag would need different roles in the same event, a separate tag is proposed instead (no condition column is needed).
- **Parameter-dependent legs.** Legs that depend on a product parameter (`feeFinancingMode`, `deferredFeePresentation`, `disbursementTargetCode`) carry filter columns on the rule (`feeModeFilter`, `presentationFilter`, `targetFilter`, each `ANY` or one code). A rule applies to a product only when every filter matches. Rules can still be scoped to a product or category to override the global set for an event. A validator checks that a product's resolved rule set matches its parameters (§7).
- **Active flag.** `isActive = 0` rules are kept but never used: the deferred-fee rules, and under the default MEMO_ONLY penalty every leg that touches `PENALTY_RECEIVABLE` (BILL `PENALTY`, LIQD and PREPAY `PENALTY`, WAIVE `PEN_WAIVE`, WRITE_OFF and REPOSSESS `PEN_WO`).
- **Status qualifier.** Only `LOAN_PORTFOLIO` is qualified. The account status resolves through `ln_status_master.regulatoryClassCode` → `ln_regulatory_class.glQualifier` → `ln_role_gl_mapping.statusQualifier`:

  | Account status | Regulatory class | GL qualifier | Interest | Penalty |
  |---|---|---|---|---|
  | NORMAL | CLASS_A | NORMAL | accrue | memo only |
  | WATCH | CLASS_B | WATCH | accrue | memo only |
  | SUBSTANDARD | CLASS_C | SUBSTANDARD | suspend | memo only |
  | DOUBTFUL | CLASS_D | DOUBTFUL | suspend | memo only |
  | LOSS | CLASS_E | LOSS | stop | memo only |
  | WRITTEN_OFF / REPOSSESSED | CLASS_E | LOSS | stop | stop |
  | CLOSED | CLASS_A | NORMAL | stop | stop |

  Penalty is **memo only** for every active status by default: it is computed and tracked, and recognized in income only when collected (LIQD `PEN_CASH`). Penalty accrual (`ACCRUE` + BILL) stays available as an option. The terminal statuses compute no penalty.

  `qualifierSource`: `CURRENT` = status at posting time, **before** this event changes it; `NEW` / `PREVIOUS` = target / source status of a status change (STCH, STCH_CURE only). WRITTEN_OFF, REPOSSESSED and CLOSED never hold a portfolio balance: the event that moves an account into them clears the principal first. "—" = not qualified.
- **Balance rule.** Debits = credits exactly, per currency, with no tolerance. Off-balance legs (`WRITTEN_OFF_MEMO_*`) must balance among themselves, separately from on-balance legs. Base-currency rounding on foreign-currency loans goes to `ROUNDING_DIFF` (tag `ROUND_DIFF` **[NEW]**).
- **Total-cash tags.** `TOTAL_PAID` (LIQD, FEE_COLLECT), `PAYOFF_CASH` (PREPAY) and `REFUND_AMT` (FEE_REFUND) are one cash line equal to the sum of the one-sided tags on the other side of that event; the validator checks the equality before commit.
- Amounts in examples are LAK at engine precision (DECIMAL(20,4)); `.0000` is omitted for whole amounts.

---

## 1. Defaults

| Setting | Default | Where | Notes |
|---|---|---|---|
| `feeFinancingMode` | `UPFRONT` | product, frozen in snapshot | Customer pays fees and insurance at signing (FEE_COLLECT). `CAPITALIZED` and `DEDUCTED` stay available. |
| `deferredFeePresentation` | `IMMEDIATE` | product, frozen | Fee goes to `FEE_INCOME` when collected. `LIABILITY` / `CONTRA_ASSET_NET` stay available; their rules (DEFERRED_FEE, UNAMORTIZED_FEE_CONTRA, EIR_AMORT, FEE_REL, UNAMORT) are seeded **inactive** in 2B. |
| Insurance | pass-through | product | Collected upfront → `INSURANCE_PAYABLE`, paid to the insurer by INS_REMIT. Never income. |
| Accounting basis | simple local accrual accounting | — | Not IFRS 9 effective-interest. No EIR amortization by default. |
| Penalty treatment | **`MEMO_ONLY`** for all active statuses | `ln_status_master.penaltyTreatment` | Cash basis: penalty is tracked, and recognized only when collected (LIQD `PEN_CASH`). BILL accrual rules seeded **inactive**; switching a status to `ACCRUE` and activating them needs no code change. |
| Interest recognition | **`DUE_DATE` (recommended)** | product parameter `interestRecognitionCode` **[NEW]**, frozen | See below. |
| Provision rates / DPD bands | company policy, editable | `ln_provision_rule`, `ln_status_movement_rule` | Seeded bands: NORMAL 0–30, WATCH 31–60, SUBSTANDARD 61–90, DOUBTFUL 91–180, LOSS 181+. "To be set by management", not regulation. |

### Interest recognition parameter

`interestRecognitionCode` decides **when** interest is recognized. It is independent of `accrualMethodCode` (DAILY_OUTSTANDING / MONTHLY_FLAT / UPFRONT_SIMPLE), which decides **how much**.

| Value | ACCR posts | Pros | Cons |
|---|---|---|---|
| `DUE_DATE` (recommended) | once per installment, on its due date, for that installment's interest | One entry per installment, equal to what the customer is billed. No dependency on a daily EOD batch. Natural for flat-rate products. Overdue interest sits in `INTEREST_RECEIVABLE`, so DPD, suspension and waivers still work. | Interest earned between the last due date and month-end isn't booked until the next due date. The effect is small and consistent month to month for monthly installments. Prepayment needs a true-up (PREPAY `TRUE_UP`). |
| `DAILY` | every day, by the EOD batch | Most accurate period cut-off. | Needs a reliable EOD run every day; many small entries. |
| `CASH` | only when interest is received (LIQD as `INT_CASH` **[NEW]**) | Simplest. | Not accrual accounting; hides overdue interest; suspension and aging lose meaning. Not recommended. |

**Recommendation: `DUE_DATE`.** It matches how a micro-SME dealer bills and collects, gives accrual-basis results without depending on a daily batch the dealer may not run, and keeps the receivable-based controls (DPD, suspension, waiver). `DAILY` can be switched on per product later without code changes. The accountant must confirm that `DUE_DATE` is acceptable for the statutory accounts (open question Q7).

---

## 2. Entry rules per event

Legend: **Dr/Cr**; Qual. = `qualifierSource` for `LOAN_PORTFOLIO`; "inactive" = rule seeded inactive under the defaults.

### FEE_COLLECT **[NEW event, not in the seeded 22]** — fees and insurance paid upfront
Applies when `feeFinancingMode = UPFRONT`, at signing, before DISB.

| Tag | Dr/Cr | Role | Qual. | Applies when |
|---|---|---|---|---|
| TOTAL_PAID | Dr | CASH_BANK | — | always (= FEE_DOC + INS_PREM + VAT_OUT) |
| FEE_DOC | Cr | FEE_INCOME | — | `IMMEDIATE` (default) |
| FEE_DOC | Cr | DEFERRED_FEE | — | `LIABILITY` (inactive) |
| FEE_DOC | Cr | UNAMORTIZED_FEE_CONTRA | — | `CONTRA_ASSET_NET` (inactive) |
| INS_PREM | Cr | INSURANCE_PAYABLE | — | insurance collected |
| VAT_OUT **[NEW]** | Cr | TAX_PAYABLE | — | fee component taxable, company VAT-registered (UNCONFIRMED, §3) |

`FEE_DOC` is the sum of all upfront FEE components (PROCESSING_FEE + DOCUMENTATION_FEE).

### FEE_REFUND **[NEW event]** — deal cancelled before disbursement
Applies when a deal is cancelled after FEE_COLLECT and before DISB, and the fees and insurance are refunded. Amounts are at most what was collected for that application.

| Tag | Dr/Cr | Role | Qual. | Applies when |
|---|---|---|---|---|
| FEE_DOC | Dr | FEE_INCOME | — | `IMMEDIATE` (default) |
| FEE_DOC | Dr | DEFERRED_FEE | — | `LIABILITY` (inactive) |
| FEE_DOC | Dr | UNAMORTIZED_FEE_CONTRA | — | `CONTRA_ASSET_NET` (inactive) |
| VAT_OUT **[NEW]** | Dr | TAX_PAYABLE | — | VAT was booked at FEE_COLLECT |
| INS_PREM | Dr | INSURANCE_PAYABLE | — | premium not yet remitted to the insurer |
| REFUND_AMT **[NEW]** | Cr | CASH_BANK | — | always (= FEE_DOC + VAT_OUT + INS_PREM) |

If the premium was already remitted, the refund depends on getting it back from the insurer (Q22). Whether fees are refundable in full is a policy question (Q22).

### DISB — disbursement
| Tag | Dr/Cr | Role | Qual. | Applies when |
|---|---|---|---|---|
| PRINCIPAL | Dr | LOAN_PORTFOLIO | CURRENT (= NORMAL) | always |
| PRINCIPAL | Cr | SALE_RECEIVABLE | — | target `SALE_INVOICE_SETTLEMENT` (default) |
| PRINCIPAL | Cr | CASH_BANK | — | target `CASH_BANK` (product-scoped) |
| FEE_DOC | Dr | LOAN_PORTFOLIO | CURRENT | `CAPITALIZED` (product-scoped) |
| FEE_DOC | Cr | FEE_INCOME / DEFERRED_FEE / UNAMORTIZED_FEE_CONTRA | — | `CAPITALIZED` or `DEDUCTED`, by presentation (product-scoped; deferred modes inactive) |
| FEE_DOC | Dr | CASH_BANK | — | `DEDUCTED` (fee kept from the payout) |
| INS_PREM | Dr | LOAN_PORTFOLIO | CURRENT | `CAPITALIZED` |
| INS_PREM | Dr | CASH_BANK | — | `DEDUCTED` |
| INS_PREM | Cr | INSURANCE_PAYABLE | — | `CAPITALIZED` or `DEDUCTED` |

Correction to spec-rev4 §2.1: in CAPITALIZED mode, `PRINCIPAL` is the vehicle amount financed (the invoice balance). The capitalized fee and insurance are debited to the portfolio under their own tags, so each tag balances by itself. In the spec, PRINCIPAL was debited at 25,000 but credited at 24,000. `DEDUCTED` is valid only with target `CASH_BANK` (net cash out = PRINCIPAL − FEE_DOC − INS_PREM).

**Gap:** target `CUSTOMER_ACCOUNT` has no accounting role, because `CUSTOMER_DEPOSIT_ACCOUNT` was removed in 2A. Keep that target disabled until a role is agreed (Q21).

### ACCR — interest recognition, performing
Applies when the status `interestTreatment = CONTINUE_ACCRUAL` (NORMAL, WATCH). Timing per `interestRecognitionCode`.

| Tag | Dr/Cr | Role | Qual. |
|---|---|---|---|
| INT_ACCR | Dr | INTEREST_RECEIVABLE | — |
| INT_ACCR | Cr | INTEREST_INCOME | — |

### ACCR_SUSP — interest recognition, suspended
Applies when `interestTreatment = SUSPEND_ACCRUAL` (SUBSTANDARD, DOUBTFUL). Under `STOP_ACCRUAL` (LOSS and later) nothing is posted; interest is tracked in the schedule only.

| Tag | Dr/Cr | Role | Qual. |
|---|---|---|---|
| INT_ACCR | Dr | INTEREST_RECEIVABLE | — |
| INT_ACCR | Cr | SUSPENDED_INTEREST | — |

### EIR_AMORT — fee amortization (inactive under defaults)
| Tag | Dr/Cr | Role | Applies when |
|---|---|---|---|
| EIR_AMORT | Dr | DEFERRED_FEE | presentation `LIABILITY` |
| EIR_AMORT | Dr | UNAMORTIZED_FEE_CONTRA | presentation `CONTRA_ASSET_NET` |
| EIR_AMORT | Cr | FEE_INCOME | either |

### BILL — late-payment penalty (option; rules **inactive** by default)
Applies only to a status whose `penaltyTreatment = ACCRUE`. Under the default `MEMO_ONLY`, nothing is posted: the penalty is tracked and, when collected, goes to income via LIQD `PEN_CASH`. Under `STOP_ACCRUAL` no penalty is computed.

| Tag | Dr/Cr | Role | Qual. |
|---|---|---|---|
| PENALTY | Dr | PENALTY_RECEIVABLE | — |
| PENALTY | Cr | PENALTY_INCOME | — |

Penalty is not taxable in the starting tax profile; no VAT leg.

### BILL_NON_CAP — recurring fee / insurance billed in installments
Applies only if the product has recurring (non-upfront) fee or insurance components. Not used under the defaults.

| Tag | Dr/Cr | Role | Applies when |
|---|---|---|---|
| FEE_BILL | Dr | FEE_RECEIVABLE | fee billed |
| FEE_BILL | Cr | FEE_INCOME | fee billed |
| INS_BILL | Dr | INSURANCE_RECEIVABLE | insurance billed |
| INS_BILL | Cr | INSURANCE_PAYABLE | insurance billed |
| VAT_OUT **[NEW]** | Dr | FEE_RECEIVABLE | fee taxable and `taxPointEvent = BILL` |
| VAT_OUT **[NEW]** | Cr | TAX_PAYABLE | same |

If `taxPointEvent = COLLECTION` for a billed fee, VAT is not yet due at billing, and a "VAT not yet due" role would be needed. That's open (Q3).

### LIQD — repayment through the waterfall
Applies to a repayment allocated by the waterfall. Seeded order: PENALTY → PROCESSING_FEE → DOCUMENTATION_FEE → INTEREST → PRINCIPAL. Insurance isn't in the seeded waterfall; add it if BILL_NON_CAP insurance is used.

| Tag | Dr/Cr | Role | Qual. | Applies when |
|---|---|---|---|---|
| TOTAL_PAID | Dr | CASH_BANK | — | cash allocated by this event |
| ADV_APPLIED **[NEW]** | Dr | CUSTOMER_ADVANCE_LIAB | — | an earlier advance (OVERPAY) is applied |
| PEN_CASH **[NEW]** | Cr | PENALTY_INCOME | — | memo-only penalty paid (default) |
| PENALTY | Cr | PENALTY_RECEIVABLE | — | booked penalty paid (BILL option only; inactive by default) |
| FEE_DOC | Cr | FEE_RECEIVABLE | — | billed fees paid |
| INS_PREM | Cr | INSURANCE_RECEIVABLE | — | billed insurance paid |
| INT_PAID | Cr | INTEREST_RECEIVABLE | — | performing interest paid |
| INT_CASH **[NEW]** | Cr | INTEREST_INCOME | — | interest not booked (`CASH` recognition, or `STOP_ACCRUAL` status) paid |
| PRIN_PAID | Cr | LOAN_PORTFOLIO | CURRENT | principal paid (incl. partial prepayment) |

`TOTAL_PAID` + `ADV_APPLIED` = sum of the credit tags. Cash for suspended interest is posted by LIQD_SUSP, and cash for any excess by OVERPAY, **in the same transaction**. `TOTAL_PAID` excludes both, so cash is never counted twice (a gap in spec-rev4). Under `DAILY` recognition, the engine first posts a catch-up ACCR to the payment date.

### LIQD_SUSP — suspended interest paid
Applies when interest held in `SUSPENDED_INTEREST` is paid (SUBSTANDARD, DOUBTFUL, or LOSS with old suspended balances). Cash basis.

| Tag | Dr/Cr | Role | Qual. |
|---|---|---|---|
| SUSP_PAID | Dr | CASH_BANK | — |
| SUSP_PAID | Cr | INTEREST_RECEIVABLE | — |
| SUSP_PAID | Dr | SUSPENDED_INTEREST | — |
| SUSP_PAID | Cr | INTEREST_INCOME | — |

### OVERPAY — excess payment
Applies when cash exceeds what is due and `overpaymentTreatment` keeps it as an advance, or when a payment arrives before the due date under `DUE_DATE` recognition. If the product treats excess as principal reduction, it posts as LIQD `PRIN_PAID` instead.

| Tag | Dr/Cr | Role |
|---|---|---|
| OVERPAY | Dr | CASH_BANK |
| OVERPAY | Cr | CUSTOMER_ADVANCE_LIAB |

Refunding an advance in cash uses `ADV_REFUND` **[NEW]**: `REFUND_AMT` Dr CUSTOMER_ADVANCE_LIAB / Cr CASH_BANK.

### INS_REMIT — premium paid to the insurer
| Tag | Dr/Cr | Role | Applies when |
|---|---|---|---|
| REMIT_AMT | Dr | INSURANCE_PAYABLE | payment to insurer; ≤ payable balance per account |
| REMIT_AMT | Cr | CASH_BANK | same |

### WAIVE — penalty or fee waiver
Applies after approval (approval matrix); amount ≤ receivable. Under the default MEMO_ONLY penalty, a penalty waiver only reduces the memo balance and posts nothing; the `PEN_WAIVE` legs apply only with the BILL option.

| Tag | Dr/Cr | Role |
|---|---|---|
| PEN_WAIVE | Dr | PENALTY_WAIVER_EXPENSE (BILL option; inactive) |
| PEN_WAIVE | Cr | PENALTY_RECEIVABLE (BILL option; inactive) |
| FEE_WAIVE | Dr | FEE_WAIVER_EXPENSE |
| FEE_WAIVE | Cr | FEE_RECEIVABLE |

Waiving a taxable fee whose VAT was already booked needs a VAT reversal (credit note); open (Q10).

### INT_WAIVE — interest waiver
| Tag | Dr/Cr | Role | Applies when |
|---|---|---|---|
| INT_WAIVE | Dr | INTEREST_WAIVER_EXPENSE | waived interest was recognized in income (performing) |
| INT_WAIVE | Cr | INTEREST_RECEIVABLE | same |
| INT_WAIVE_SUSP **[NEW]** | Dr | SUSPENDED_INTEREST | waived interest is suspended; no P&L effect |
| INT_WAIVE_SUSP **[NEW]** | Cr | INTEREST_RECEIVABLE | same |

A separate tag replaces spec-rev4's two roles on the same `INT_WAIVE` tag. Waiving future, unrecognized interest is a schedule amendment, with no GL entry.

### STCH — status change
Applies when the DPD rules or a manual change move the account to another status. Moves into REPOSSESSED / WRITTEN_OFF / CLOSED post nothing here, because those events clear the balances first.

| Tag | Dr/Cr | Role | Qual. | Applies when |
|---|---|---|---|---|
| OUT_PRIN | Dr | LOAN_PORTFOLIO | NEW | qualifiers differ (e.g. WATCH → SUBSTANDARD) |
| OUT_PRIN | Cr | LOAN_PORTFOLIO | PREVIOUS | same |
| UNCOL_INT | Dr | INTEREST_INCOME | — | moving from an accruing to a suspended or stopped status; amount = unpaid recognized interest |
| UNCOL_INT | Cr | SUSPENDED_INTEREST | — | same |

Between two NPL statuses (e.g. SUBSTANDARD → DOUBTFUL) only `OUT_PRIN` posts. If several qualifiers map to the same GL account, the two `OUT_PRIN` lines hit the same account and net to zero. They are still posted, as the audit trail of the reclassification.

### STCH_CURE — cure from NPL to performing
Applies when a cure rule (`ln_status_cure_rule`) moves a suspended account back to an accruing status.

| Tag | Dr/Cr | Role | Qual. |
|---|---|---|---|
| OUT_PRIN | Dr | LOAN_PORTFOLIO | NEW |
| OUT_PRIN | Cr | LOAN_PORTFOLIO | PREVIOUS |
| SUSP_REV | Dr | SUSPENDED_INTEREST | — |
| SUSP_REV | Cr | INTEREST_INCOME | — |

`SUSP_REV` = the suspended balance still unpaid; the receivable becomes performing. The provision change follows as PROV_WB.

### PROVISION — provision top-up
Applies at the periodic run (month-end) when required provision > booked provision. Required = policy rate for the class × provision base (Q11).

| Tag | Dr/Cr | Role |
|---|---|---|
| PROV_EXP | Dr | PROVISION_EXPENSE |
| PROV_EXP | Cr | PROVISION_RESERVE |

### PROV_WB — provision write-back
Applies when required < booked: repayment, cure, or reserve left over after repossession or write-off.

| Tag | Dr/Cr | Role |
|---|---|---|
| PROV_WB | Dr | PROVISION_RESERVE |
| PROV_WB | Cr | PROVISION_EXPENSE |

### WRITE_OFF — write-off
Applies after approval, normally at LOSS. Any `CUSTOMER_ADVANCE_LIAB` balance is applied first (LIQD `ADV_APPLIED`). Status → WRITTEN_OFF.

| Tag | Dr/Cr | Role | Qual. | Applies when |
|---|---|---|---|---|
| PRIN_WO | Dr | PROVISION_RESERVE | — | = min(reserve, principal) |
| PRIN_WO | Cr | LOAN_PORTFOLIO | CURRENT | same |
| SHORTFALL | Dr | LOAN_LOSS_SHORTFALL | — | principal > reserve |
| SHORTFALL | Cr | LOAN_PORTFOLIO | CURRENT | same |
| SUSP_CLR | Dr | SUSPENDED_INTEREST | — | suspended interest exists |
| SUSP_CLR | Cr | INTEREST_RECEIVABLE | — | same |
| UNCOL_INT | Dr | INTEREST_INCOME | — | non-suspended interest receivable exists (rare) |
| UNCOL_INT | Cr | INTEREST_RECEIVABLE | — | same |
| PEN_WO | Dr | PENALTY_WRITEOFF_EXPENSE | — | penalty receivable exists (BILL option; inactive by default) |
| PEN_WO | Cr | PENALTY_RECEIVABLE | — | same |
| FEE_WO | Dr | FEE_WRITEOFF_EXPENSE | — | fee receivable exists |
| FEE_WO | Cr | FEE_RECEIVABLE | — | same |
| FEE_REL | Dr | DEFERRED_FEE | — | deferred presentation only (inactive) |
| FEE_REL | Cr | FEE_INCOME | — | same |
| MEMO_WO | Dr | WRITTEN_OFF_MEMO_DR | — | always; amount = total claim written off (Q12) |
| MEMO_WO | Cr | WRITTEN_OFF_MEMO_CR | — | always |

Reserve left over for the account → PROV_WB.

### RECOVERY — cash recovered after write-off
Status stays WRITTEN_OFF.

| Tag | Dr/Cr | Role | Applies when |
|---|---|---|---|
| REC_AMT | Dr | CASH_BANK | always |
| REC_AMT | Cr | BAD_DEBT_RECOVERY | always |
| REC_AMT | Dr | WRITTEN_OFF_MEMO_CR | memo reduction, capped at the memo balance |
| REC_AMT | Cr | WRITTEN_OFF_MEMO_DR | same |

### PREPAY — full early settlement
Applies when `allowPrepayment` is set and the account is settled in full. Status → CLOSED. Partial prepayment posts as LIQD `PRIN_PAID`.

| Tag | Dr/Cr | Role | Qual. | Applies when |
|---|---|---|---|---|
| TRUE_UP | Dr | INTEREST_RECEIVABLE | — | earned interest (per rebate method) > interest already recognized |
| TRUE_UP | Cr | INTEREST_INCOME | — | same |
| TRUE_UP_REV **[NEW]** | Dr | INTEREST_INCOME | — | recognized > earned (over-accrual) |
| TRUE_UP_REV **[NEW]** | Cr | INTEREST_RECEIVABLE | — | same |
| PAYOFF_CASH | Dr | CASH_BANK | — | always |
| ADV_APPLIED **[NEW]** | Dr | CUSTOMER_ADVANCE_LIAB | — | advance balance exists |
| OUT_PRIN | Cr | LOAN_PORTFOLIO | CURRENT | always |
| EARNED_INT | Cr | INTEREST_RECEIVABLE | — | = receivable after true-up |
| PEN_CASH **[NEW]** | Cr | PENALTY_INCOME | — | memo-only penalty paid in the payoff (default) |
| PENALTY | Cr | PENALTY_RECEIVABLE | — | booked penalty outstanding (BILL option; inactive by default) |
| FEES | Cr | FEE_RECEIVABLE | — | billed fees outstanding |
| EARLY_FEE | Cr | FEE_INCOME | — | early-settlement fee charged (PREPAYMENT_PENALTY) |
| VAT_OUT **[NEW]** | Cr | TAX_PAYABLE | — | early fee taxable (UNCONFIRMED) |
| UNAMORT | Dr | DEFERRED_FEE | — | deferred presentation only (inactive) |
| UNAMORT | Cr | FEE_INCOME | — | same |

A separate `TRUE_UP_REV` tag replaces spec-rev4's "DR/CR depending on sign" leg. If the account is in a suspended status, its suspended interest settles through LIQD_SUSP in the same transaction, and `PAYOFF_CASH` excludes it.

### REPOSSESS — vehicle repossessed
Applies when the vehicle is seized or surrendered and appraised. Status → REPOSSESSED.

| Tag | Dr/Cr | Role | Qual. | Applies when |
|---|---|---|---|---|
| APPRAISED | Dr | REPOSSESSED_VEHICLE_ASSET | — | always; capped at OUT_PRIN (surplus: Q13) |
| RESERVE_ABS | Dr | PROVISION_RESERVE | — | = min(reserve, OUT_PRIN − APPRAISED) |
| SHORTFALL | Dr | LOAN_LOSS_SHORTFALL | — | loss > reserve |
| OUT_PRIN | Cr | LOAN_PORTFOLIO | CURRENT | always (= APPRAISED + RESERVE_ABS + SHORTFALL) |
| SUSP_CLR | Dr / Cr | SUSPENDED_INTEREST / INTEREST_RECEIVABLE | — | suspended interest exists |
| UNCOL_INT | Dr / Cr | INTEREST_INCOME / INTEREST_RECEIVABLE | — | account still accruing (e.g. voluntary surrender) |
| PEN_WO | Dr / Cr | PENALTY_WRITEOFF_EXPENSE / PENALTY_RECEIVABLE | — | penalty receivable exists (BILL option; inactive by default) |
| FEE_WO | Dr / Cr | FEE_WRITEOFF_EXPENSE / FEE_RECEIVABLE | — | fee receivable exists |
| UNAMORT | Dr / Cr | DEFERRED_FEE / FEE_INCOME | — | deferred presentation only (inactive) |

Spec-rev4 left the penalty and fee receivables open at repossession, which would stop the account from ever closing; the `PEN_WO` / `FEE_WO` legs fix that when those receivables are used. Reserve left over → PROV_WB. Whether to book a memo for the deficiency is open (Q13).

### VEH_DISPOSE — repossessed vehicle sold
Definitions: `SALE_PRICE` = cash received (gross); net = SALE_PRICE − VAT_OUT; `GAIN` = max(net − CARRYING, 0); `LOSS` = max(CARRYING − net, 0).

| Tag | Dr/Cr | Role | Applies when |
|---|---|---|---|
| SALE_PRICE | Dr | CASH_BANK | always |
| CARRYING | Cr | REPOSSESSED_VEHICLE_ASSET | always |
| GAIN | Cr | GAIN_ON_REPOSSESSED_ASSET | net > carrying |
| LOSS | Dr | LOSS_ON_REPOSSESSED_ASSET | net < carrying |
| VAT_OUT **[NEW]** | Cr | TAX_PAYABLE | REPOSSESSION_SALE taxable (starting value: taxable, UNCONFIRMED) |

Whether the resale goes through the POS sale flow instead is open (Q14).

### REVERSAL — void a transaction
Posts the exact mirror of every journal line of the original transaction: Dr and Cr swapped, same amount, same `chartAccountId` (no re-resolution, so the **original** status qualifier is kept even if the status changed since), same currency, exchange rate and base amount. Off-balance lines are mirrored too, and subledger balances (schedule, accrual and provision ledgers) are restored. Only the latest non-reversed financial transaction of the account can be reversed (LIFO); the period-lock and backdating rules of spec-rev4 §4.2 apply. No rule rows are needed: `ln_journal_posting` already stores `chartAccountId` per line.

---

## 3. VAT (all UNCONFIRMED)

- **Amount tag:** `VAT_OUT` **[NEW]** = output VAT on the taxable components of the transaction. The rate comes from the POS `tax` row (`ln_tax_profile.posTaxId` or `ln_tax_master.posTaxId`) effective on the event date; it is never a literal.
  - Tax-exclusive price: VAT = base × rate.
  - Tax-inclusive price (`taxInclusive`): VAT = gross × rate / (1 + rate), net = gross − VAT, so net + VAT = gross exactly.
- **Starting tax profile** (rev5 §4): fees and repossession-sale proceeds taxable; interest, penalty and insurance not taxable. Nothing is applied while `ln_tax_profile` is UNCONFIRMED. Phase 4 blocks production fee billing until it is confirmed.
- **Taxable fee entries:**
  - FEE_COLLECT (upfront fee): `VAT_OUT` Cr TAX_PAYABLE, with cash = fee + insurance + VAT.
  - BILL_NON_CAP (billed fee, tax point BILL): `VAT_OUT` Dr FEE_RECEIVABLE / Cr TAX_PAYABLE.
  - PREPAY early fee: `VAT_OUT` Cr TAX_PAYABLE.
  - VEH_DISPOSE: `VAT_OUT` Cr TAX_PAYABLE out of the gross sale price.
- **Tax point COLLECTION** for billed items would need an extra "VAT not yet due" liability role. It isn't proposed until the accountant answers Q3. Under the UPFRONT default, fees are collected in cash at signing, so DISB, BILL and COLLECTION are the same moment.
- **VAT payable account: OPEN DECISION.** POS has no output-VAT account or `GL_MAP_*` parameter. `TAX_PAYABLE` (`resolverType = SYSTEM_PARAM`) will read a new SPF parameter, proposed `GL_MAP_VAT_OUTPUT_ACC`, set in Phase 2B once the accountant names the account (§5 proposes 2131).
- **Rounding:** examples use engine precision (4 dp). Whether VAT is rounded to whole kip, and per line or per invoice, is open (Q16).

---

## 4. Worked examples (all balance exactly; these are the Phase 2B validator test fixtures)

Illustrative figures only; rates and fees are placeholders, not policy. The base examples have **VAT off** (profile UNCONFIRMED). Where VAT is shown, it uses an **illustrative 5% rate, chosen so it cannot be mistaken for the real Lao rate**; the engine reads the POS rate.

**Loan A** (Examples 1, 2, 3 and 7): vehicle 300,000,000; down payment 60,000,000 (paid at the POS sale; not a loan event); principal 240,000,000; 12 monthly installments; 18% p.a., 30/360 (1.5% a month) on the declining balance; equal principal of 20,000,000 a month; processing fee 1,000,000 + documentation fee 2,000,000; insurance 7,000,000; UPFRONT, IMMEDIATE, DUE_DATE recognition, target SALE_INVOICE_SETTLEMENT.

### Example 1: Disbursement with fee and insurance

FEE_COLLECT (at signing)
| | Role | Dr | Cr |
|---|---|---:|---:|
| TOTAL_PAID | CASH_BANK | 10,000,000 | |
| FEE_DOC | FEE_INCOME | | 3,000,000 |
| INS_PREM | INSURANCE_PAYABLE | | 7,000,000 |
| | **Total** | **10,000,000** | **10,000,000** |

DISB
| | Role | Dr | Cr |
|---|---|---:|---:|
| PRINCIPAL | LOAN_PORTFOLIO [NORMAL] | 240,000,000 | |
| PRINCIPAL | SALE_RECEIVABLE | | 240,000,000 |
| | **Total** | **240,000,000** | **240,000,000** |

The POS invoice balance (300,000,000 − 60,000,000 = 240,000,000) is fully settled.

INS_REMIT (premium paid to the insurer)
| | Role | Dr | Cr |
|---|---|---:|---:|
| REMIT_AMT | INSURANCE_PAYABLE | 7,000,000 | |
| REMIT_AMT | CASH_BANK | | 7,000,000 |

*VAT variant 1a (fee taxable, tax-exclusive, illustrative 5%):* VAT_OUT = 3,000,000 × 5% = 150,000.
| | Role | Dr | Cr |
|---|---|---:|---:|
| TOTAL_PAID | CASH_BANK | 10,150,000 | |
| FEE_DOC | FEE_INCOME | | 3,000,000 |
| VAT_OUT | TAX_PAYABLE | | 150,000 |
| INS_PREM | INSURANCE_PAYABLE | | 7,000,000 |
| | **Total** | **10,150,000** | **10,150,000** |

*VAT variant 1b (fee price 3,000,000 tax-inclusive, illustrative 5%):* VAT = 3,000,000 × 5/105 = 142,857.1429; net fee = 2,857,142.8571.
| | Role | Dr | Cr |
|---|---|---:|---:|
| TOTAL_PAID | CASH_BANK | 10,000,000.0000 | |
| FEE_DOC | FEE_INCOME | | 2,857,142.8571 |
| VAT_OUT | TAX_PAYABLE | | 142,857.1429 |
| INS_PREM | INSURANCE_PAYABLE | | 7,000,000.0000 |
| | **Total** | **10,000,000.0000** | **10,000,000.0000** |

### Example 2: Installment 1 received on time
Interest = 240,000,000 × 1.5% = 3,600,000; installment = 23,600,000.

ACCR (due date 1)
| | Role | Dr | Cr |
|---|---|---:|---:|
| INT_ACCR | INTEREST_RECEIVABLE | 3,600,000 | |
| INT_ACCR | INTEREST_INCOME | | 3,600,000 |

LIQD (same day)
| | Role | Dr | Cr |
|---|---|---:|---:|
| TOTAL_PAID | CASH_BANK | 23,600,000 | |
| INT_PAID | INTEREST_RECEIVABLE | | 3,600,000 |
| PRIN_PAID | LOAN_PORTFOLIO [NORMAL] | | 20,000,000 |
| | **Total** | **23,600,000** | **23,600,000** |

After: portfolio 220,000,000; interest receivable 0. Under `DAILY` recognition, ACCR would post 120,000 a day for 30 days instead: the same 3,600,000.

### Example 3: Installment 2 paid 20 days late, with a penalty
Interest = 220,000,000 × 1.5% = 3,300,000; installment = 23,300,000. DPD 20 stays NORMAL (WATCH starts at 31), so there is no STCH. Penalty (placeholder policy: 0.05% a day on the overdue installment) = 23,300,000 × 0.05% × 20 = 233,000. It is tracked memo-only (no BILL entry) and recognized when collected.

ACCR (due date 2)
| | Role | Dr | Cr |
|---|---|---:|---:|
| INT_ACCR | INTEREST_RECEIVABLE | 3,300,000 | |
| INT_ACCR | INTEREST_INCOME | | 3,300,000 |

LIQD (23,533,000 received; waterfall: penalty → fees → interest → principal)
| | Role | Dr | Cr |
|---|---|---:|---:|
| TOTAL_PAID | CASH_BANK | 23,533,000 | |
| PEN_CASH | PENALTY_INCOME | | 233,000 |
| INT_PAID | INTEREST_RECEIVABLE | | 3,300,000 |
| PRIN_PAID | LOAN_PORTFOLIO [NORMAL] | | 20,000,000 |
| | **Total** | **23,533,000** | **23,533,000** |

After: portfolio 200,000,000; interest receivable 0; memo penalty 0. *With the BILL option active,* BILL would post Dr PENALTY_RECEIVABLE / Cr PENALTY_INCOME 233,000 first, and LIQD would credit PENALTY_RECEIVABLE instead.

### Example 4: Prepayment (full early settlement), Loan D
**Loan D**, a separate account with the same terms as Loan A but principal 120,000,000 (equal principal 10,000,000 a month). Installments 1–4 were paid on time, leaving 80,000,000. The customer settles 15 days after due date 4. Rebate method ACTUARIAL_PRO_RATA: interest earned to the settlement date = 80,000,000 × 1.5% × 15/30 = 600,000. Recognized so far for this period (DUE_DATE) = 0, so TRUE_UP = 600,000. Early-settlement fee (placeholder: 2% of principal) = 1,600,000. PAYOFF_CASH = 80,000,000 + 600,000 + 1,600,000 = 82,200,000.

| | Role | Dr | Cr |
|---|---|---:|---:|
| TRUE_UP | INTEREST_RECEIVABLE | 600,000 | |
| TRUE_UP | INTEREST_INCOME | | 600,000 |
| PAYOFF_CASH | CASH_BANK | 82,200,000 | |
| OUT_PRIN | LOAN_PORTFOLIO [NORMAL] | | 80,000,000 |
| EARNED_INT | INTEREST_RECEIVABLE | | 600,000 |
| EARLY_FEE | FEE_INCOME | | 1,600,000 |
| | **Total** | **82,800,000** | **82,800,000** |

Status → CLOSED, and every balance is 0. Under `DAILY` recognition, 600,000 would already be booked (40,000 a day × 15), so TRUE_UP would be 0. *VAT variant (early fee taxable, exclusive, illustrative 5%):* VAT_OUT 80,000 Cr TAX_PAYABLE, and PAYOFF_CASH becomes 82,280,000.

### Example 5: NPL, repossession, and sale at a loss
**Loan B**, a different account. At DPD 61 it moves WATCH → SUBSTANDARD with principal 150,000,000 and 6,000,000 of recognized but unpaid interest.

STCH (WATCH → SUBSTANDARD)
| | Role | Dr | Cr |
|---|---|---:|---:|
| OUT_PRIN | LOAN_PORTFOLIO [SUBSTANDARD] (NEW) | 150,000,000 | |
| OUT_PRIN | LOAN_PORTFOLIO [WATCH] (PREVIOUS) | | 150,000,000 |
| UNCOL_INT | INTEREST_INCOME | 6,000,000 | |
| UNCOL_INT | SUSPENDED_INTEREST | | 6,000,000 |
| | **Total** | **156,000,000** | **156,000,000** |

ACCR_SUSP over the following months: 3,000,000 (Dr INTEREST_RECEIVABLE / Cr SUSPENDED_INTEREST). Penalties are memo-only (1,200,000 tracked, nothing booked). The provision reserve for the account is 30,000,000. Position at repossession: portfolio 150,000,000; interest receivable 9,000,000 (all suspended); memo penalty 1,200,000. The vehicle is appraised at 125,000,000, so the loss on principal is 25,000,000, which is within the reserve: RESERVE_ABS = 25,000,000 and SHORTFALL = 0.

REPOSSESS
| | Role | Dr | Cr |
|---|---|---:|---:|
| APPRAISED | REPOSSESSED_VEHICLE_ASSET | 125,000,000 | |
| RESERVE_ABS | PROVISION_RESERVE | 25,000,000 | |
| OUT_PRIN | LOAN_PORTFOLIO [SUBSTANDARD] (CURRENT) | | 150,000,000 |
| SUSP_CLR | SUSPENDED_INTEREST | 9,000,000 | |
| SUSP_CLR | INTEREST_RECEIVABLE | | 9,000,000 |
| | **Total** | **159,000,000** | **159,000,000** |

The memo penalty of 1,200,000 is closed in the subledger with no GL entry (`PEN_WO` applies only with the BILL option).

PROV_WB (reserve left over: 30,000,000 − 25,000,000)
| | Role | Dr | Cr |
|---|---|---:|---:|
| PROV_WB | PROVISION_RESERVE | 5,000,000 | |
| PROV_WB | PROVISION_EXPENSE | | 5,000,000 |

VEH_DISPOSE (sold for 118,000,000; VAT off)
| | Role | Dr | Cr |
|---|---|---:|---:|
| SALE_PRICE | CASH_BANK | 118,000,000 | |
| LOSS | LOSS_ON_REPOSSESSED_ASSET | 7,000,000 | |
| CARRYING | REPOSSESSED_VEHICLE_ASSET | | 125,000,000 |
| | **Total** | **125,000,000** | **125,000,000** |

*VAT variant (sale taxable, price 118,000,000 tax-inclusive, illustrative 5%):* VAT = 118,000,000 × 5/105 = 5,619,047.6190; net = 112,380,952.3810; LOSS = 125,000,000 − 112,380,952.3810 = 12,619,047.6190.
| | Role | Dr | Cr |
|---|---|---:|---:|
| SALE_PRICE | CASH_BANK | 118,000,000.0000 | |
| LOSS | LOSS_ON_REPOSSESSED_ASSET | 12,619,047.6190 | |
| CARRYING | REPOSSESSED_VEHICLE_ASSET | | 125,000,000.0000 |
| VAT_OUT | TAX_PAYABLE | | 5,619,047.6190 |
| | **Total** | **130,619,047.6190** | **130,619,047.6190** |

### Example 6: Write-off, then recovery
**Loan C** at LOSS (DPD 200): portfolio 80,000,000; interest receivable 6,000,000 (all suspended); memo penalty 800,000 (not booked); fee receivable 0; reserve 60,000,000, so the shortfall is 20,000,000.

WRITE_OFF
| | Role | Dr | Cr |
|---|---|---:|---:|
| PRIN_WO | PROVISION_RESERVE | 60,000,000 | |
| PRIN_WO | LOAN_PORTFOLIO [LOSS] (CURRENT) | | 60,000,000 |
| SHORTFALL | LOAN_LOSS_SHORTFALL | 20,000,000 | |
| SHORTFALL | LOAN_PORTFOLIO [LOSS] (CURRENT) | | 20,000,000 |
| SUSP_CLR | SUSPENDED_INTEREST | 6,000,000 | |
| SUSP_CLR | INTEREST_RECEIVABLE | | 6,000,000 |
| | **On-balance total** | **86,000,000** | **86,000,000** |
| MEMO_WO | WRITTEN_OFF_MEMO_DR | 86,000,000 | |
| MEMO_WO | WRITTEN_OFF_MEMO_CR | | 86,000,000 |
| | **Off-balance total** | **86,000,000** | **86,000,000** |

Status → WRITTEN_OFF. All on-balance balances are 0. The memo is 86,000,000 (principal 80,000,000 + booked interest 6,000,000). Whether to add the unbooked memo penalty of 800,000 is open (Q12).

RECOVERY (10,000,000 received later)
| | Role | Dr | Cr |
|---|---|---:|---:|
| REC_AMT | CASH_BANK | 10,000,000 | |
| REC_AMT | BAD_DEBT_RECOVERY | | 10,000,000 |
| | **On-balance total** | **10,000,000** | **10,000,000** |
| REC_AMT | WRITTEN_OFF_MEMO_CR | 10,000,000 | |
| REC_AMT | WRITTEN_OFF_MEMO_DR | | 10,000,000 |
| | **Off-balance total** | **10,000,000** | **10,000,000** |

The memo balance afterwards is 76,000,000.

### Example 7: Reversal
Three days after Example 2, and before installment 2 is due, the installment-1 receipt of Loan A is voided (the cheque bounced). The original LIQD lines are mirrored onto the same GL accounts:

| | Role (same chartAccountId as original) | Dr | Cr |
|---|---|---:|---:|
| INT_PAID | INTEREST_RECEIVABLE | 3,600,000 | |
| PRIN_PAID | LOAN_PORTFOLIO [NORMAL] (original line's account) | 20,000,000 | |
| TOTAL_PAID | CASH_BANK | | 23,600,000 |
| | **Total** | **23,600,000** | **23,600,000** |

After: portfolio 240,000,000 and interest receivable 3,600,000, so installment 1 is overdue again and DPD counts from due date 1. The ACCR isn't reversed, because the interest was earned. If installment 2 had already been received, it would have to be reversed first (LIFO).

### Example 8: Deal cancelled before disbursement (FEE_REFUND)
**Loan E** has the same fee and insurance amounts as Loan A. FEE_COLLECT was posted as in Example 1 (10,000,000), the premium hasn't been remitted yet, and the customer cancels before DISB with a full refund.

| | Role | Dr | Cr |
|---|---|---:|---:|
| FEE_DOC | FEE_INCOME | 3,000,000 | |
| INS_PREM | INSURANCE_PAYABLE | 7,000,000 | |
| REFUND_AMT | CASH_BANK | | 10,000,000 |
| | **Total** | **10,000,000** | **10,000,000** |

*VAT variant (VAT booked as in 1a, illustrative 5%):*
| | Role | Dr | Cr |
|---|---|---:|---:|
| FEE_DOC | FEE_INCOME | 3,000,000 | |
| VAT_OUT | TAX_PAYABLE | 150,000 | |
| INS_PREM | INSURANCE_PAYABLE | 7,000,000 | |
| REFUND_AMT | CASH_BANK | | 10,150,000 |
| | **Total** | **10,150,000** | **10,150,000** |

The application is cancelled; no loan account is opened.

### Example 9: Equal installment (annuity), Phase 3 schedule
Loan A terms (240,000,000; 12 months; 18% a year; 30/360, so 1.5% a month), repaid as a declining-balance annuity, in LAK with 0 decimals (rounding-policy.md).
- Payment = P·r·(1+r)^12 / ((1+r)^12 − 1) = **22,003,198**, computed exactly and rounded once.
- Installment 1: principal 18,403,198 + interest 3,600,000.
- Installment 2: principal 18,679,246 + interest 3,323,952.
- Installment 12 (absorbs the residue): principal 21,678,030 + interest 325,170 = 22,003,200.
- Total interest 24,038,378; total principal exactly 240,000,000.

Each installment's accounting is the same as in Examples 2 and 3 (ACCR on the due date, LIQD on receipt).

### Example 10: Flat rate, Phase 3 schedule
The same terms with FLAT repayment (accrual MONTHLY_FLAT).
- Total interest = 240,000,000 × 18% × 12/12 = 43,200,000.
- 12 installments of 20,000,000 principal + 3,600,000 interest.
- The last installment absorbs any rounding residue.
- An early settlement uses RULE_OF_78 or NONE. ACTUARIAL_PRO_RATA is refused for FLAT products (decision D6).

These values were computed independently (Python decimal, precision 60, half-up) and are test fixtures in `dc_api/test/loan/fixtures/engineFixtures.js`.

---

## 5. Proposed role → GL mapping (PROPOSALS ONLY)

**Every account number below is a proposal**, to be matched against the customer's real chart of accounts before anything is seeded. The numbers follow the pattern of the POS chart in the local development copy (1101 cash, 1102 bank, 1201 AR, 1301 inventory, 2101 AP, 4101 sales, 5xxx expenses), which may not be the customer's live chart. They replace the spec-rev4 §5 numbers (1050–1061, 2050–2054, 4050–4059, 6050–6058), which used 6xxx for expenses, unlike the POS chart. `accountType` must be one of the existing values (Asset, Liability, Equity, Revenue, Expense, Off-Balance). There is no contra type, so contra-assets are Asset accounts carrying a credit balance (see §5.1).

**Existing accounts are resolved by system parameter, not by number.** 1201, 1101 and 1102 are the values found in the local development copy. `SALE_RECEIVABLE` resolves through SPF `GL_MAP_AR_ACC`, and `CASH_BANK` through the payment method or bank account, falling back to `GL_MAP_CASH_ACC` / `GL_MAP_BANK_ACC`. Whatever numbers those parameters hold in the customer's database are the ones used; the numbers in this table are only examples.

**Portfolio accounts: two by default.** NORMAL + WATCH → 1211 (performing); SUBSTANDARD + DOUBTFUL + LOSS → 1213 (non-performing). The five-account variant is optional: it adds 1212, 1214 and 1215 and remaps WATCH, DOUBTFUL and LOSS, with no code change. With two accounts, STCH between statuses in the same group posts its two `OUT_PRIN` lines to the same account; they net to zero and stay as the audit trail. Switching variants later needs a one-off reclassification of the existing balances.

| Role | Resolver | Qualifier | Proposed no. | Account name (EN / ລາວ) | accountType | New account? | Needed with defaults? |
|---|---|---|---|---|---|---|---|
| LOAN_PORTFOLIO | MAPPING_TABLE | NORMAL, WATCH | 1211 | Vehicle installment loans – performing / ເງິນກູ້ຊື້ລົດຜ່ອນ (ປົກກະຕິ) | Asset | **new** | yes |
| LOAN_PORTFOLIO | MAPPING_TABLE | SUBSTANDARD, DOUBTFUL, LOSS | 1213 | Vehicle installment loans – non-performing / ເງິນກູ້ຊື້ລົດຜ່ອນ (ໜີ້ບໍ່ເກີດດອກອອກຜົນ) | Asset | **new** | yes |
| *LOAN_PORTFOLIO (5-account variant)* | MAPPING_TABLE | WATCH / DOUBTFUL / LOSS | *1212 / 1214 / 1215* | *Special mention / doubtful / loss* | Asset | *new if chosen* | optional |
| INTEREST_RECEIVABLE | MAPPING_TABLE | — | 1221 | Loan interest receivable / ດອກເບ້ຍເງິນກູ້ຄ້າງຮັບ | Asset | **new** | yes |
| PENALTY_RECEIVABLE | MAPPING_TABLE | — | 1222 | Penalty receivable / ຄ່າປັບໄໝຄ້າງຮັບ | Asset | **new** | optional (BILL option) |
| FEE_RECEIVABLE | MAPPING_TABLE | — | 1223 | Loan fees receivable / ຄ່າທຳນຽມເງິນກູ້ຄ້າງຮັບ | Asset | **new** | optional (billed fees) |
| INSURANCE_RECEIVABLE | MAPPING_TABLE | — | 1224 | Insurance receivable / ຄ່າປະກັນໄພລົດຄ້າງຮັບ | Asset | **new** | optional (billed insurance) |
| UNAMORTIZED_FEE_CONTRA | MAPPING_TABLE | — | 1228 | Unamortized loan fees (contra) / ຄ່າທຳນຽມລໍຖ້າຕັດຈ່າຍ | Asset (credit) | **new** | optional (deferred fees) |
| PROVISION_RESERVE | MAPPING_TABLE | — | 1229 | Allowance for loan losses (contra) / ຄັງສຳຮອງໜີ້ເສຍເງິນກູ້ | Asset (credit) | **new** | yes |
| REPOSSESSED_VEHICLE_ASSET | MAPPING_TABLE | — | 1311 | Repossessed vehicles held for sale / ລົດຍຶດລໍຖ້າຂາຍ | Asset | **new** | yes |
| SALE_RECEIVABLE | SYSTEM_PARAM `GL_MAP_AR_ACC` | — | (1201 in dev copy) | Accounts receivable (existing) | Asset | existing | yes |
| CASH_BANK | BANK_ACCOUNT | — | (1101 / 1102 in dev copy) | Cash / bank (existing) | Asset | existing | yes |
| CUSTOMER_ADVANCE_LIAB | MAPPING_TABLE | — | 2111 | Customer loan advances / ເງິນຈ່າຍລ່ວງໜ້າຂອງລູກຄ້າ | Liability | **new** | yes |
| INSURANCE_PAYABLE | MAPPING_TABLE | — | 2121 | Insurance premiums payable / ຄ່າປະກັນໄພລົດຄ້າງຈ່າຍ | Liability | **new** | yes |
| TAX_PAYABLE | SYSTEM_PARAM `GL_MAP_VAT_OUTPUT_ACC` | — | 2131 | Output VAT payable / ອາກອນມູນຄ່າເພີ່ມຄ້າງຈ່າຍ | Liability | **new – OPEN DECISION** | only if VAT applies |
| SUSPENDED_INTEREST | MAPPING_TABLE | — | 2141 | Suspended interest (NPL) / ດອກເບ້ຍໂຈະຮັບ | Liability | **new** | yes |
| DEFERRED_FEE | MAPPING_TABLE | — | 2151 | Deferred loan fees / ລາຍຮັບຄ່າທຳນຽມລໍຖ້າຮັບຮູ້ | Liability | **new** | optional (deferred fees) |
| INTEREST_INCOME | MAPPING_TABLE | — | 4201 | Loan interest income / ລາຍຮັບດອກເບ້ຍເງິນກູ້ | Revenue | **new** | yes |
| PENALTY_INCOME | MAPPING_TABLE | — | 4202 | Late penalty income / ລາຍຮັບຄ່າປັບໄໝ | Revenue | **new** | yes (PEN_CASH) |
| FEE_INCOME | MAPPING_TABLE | — | 4203 | Loan fee income / ລາຍຮັບຄ່າທຳນຽມເງິນກູ້ | Revenue | **new** | yes |
| GAIN_ON_REPOSSESSED_ASSET | MAPPING_TABLE | — | 4301 | Gain on sale of repossessed vehicles / ກຳໄລຈາກການຂາຍລົດຍຶດ | Revenue | **new** | yes |
| BAD_DEBT_RECOVERY | MAPPING_TABLE | — | 4302 | Bad debt recovered / ລາຍຮັບຈາກການທວງໜີ້ສູນຄືນ | Revenue | **new** | yes |
| PROVISION_EXPENSE | MAPPING_TABLE | — | 5701 | Loan loss provision expense / ລາຍຈ່າຍສຳຮອງໜີ້ເສຍ | Expense | **new** | yes |
| LOAN_LOSS_SHORTFALL | MAPPING_TABLE | — | 5702 | Unprovisioned loan losses / ລາຍຈ່າຍໜີ້ສູນສ່ວນເກີນຄັງສຳຮອງ | Expense | **new** | yes |
| PENALTY_WAIVER_EXPENSE | MAPPING_TABLE | — | 5711 | Penalties waived / ລາຍຈ່າຍຍົກເວັ້ນຄ່າປັບໄໝ | Expense | **new** | optional (BILL option) |
| FEE_WAIVER_EXPENSE | MAPPING_TABLE | — | 5712 | Fees waived / ລາຍຈ່າຍຍົກເວັ້ນຄ່າທຳນຽມ | Expense | **new** | optional (billed fees) |
| INTEREST_WAIVER_EXPENSE | MAPPING_TABLE | — | 5713 | Interest waived / ລາຍຈ່າຍຍົກເວັ້ນດອກເບ້ຍ | Expense | **new** | yes |
| PENALTY_WRITEOFF_EXPENSE | MAPPING_TABLE | — | 5721 | Penalties written off / ລາຍຈ່າຍຕັດໜີ້ສູນຄ່າປັບໄໝ | Expense | **new** | optional (BILL option) |
| FEE_WRITEOFF_EXPENSE | MAPPING_TABLE | — | 5722 | Fees written off / ລາຍຈ່າຍຕັດໜີ້ສູນຄ່າທຳນຽມ | Expense | **new** | optional (billed fees) |
| LOSS_ON_REPOSSESSED_ASSET | MAPPING_TABLE | — | 5731 | Loss on sale of repossessed vehicles / ຂາດທຶນຈາກການຂາຍລົດຍຶດ | Expense | **new** | yes |
| ROUNDING_DIFF | MAPPING_TABLE | — | 5901 | Currency rounding differences / ຜົນຕ່າງການປັດເສດ | Expense (may carry credit) | **new** | optional (foreign-currency loans) |
| WRITTEN_OFF_MEMO_DR | MAPPING_TABLE | — | 9001 | Written-off loans – memo / ໜີ້ສູນຕິດຕາມນອກງົບ | Off-Balance | **new** | yes |
| WRITTEN_OFF_MEMO_CR | MAPPING_TABLE | — | 9002 | Written-off loans – memo contra / ໜີ້ສູນຕິດຕາມນອກງົບ (ກົງກັນຂ້າມ) | Off-Balance | **new** | yes |

**New-account counts:**
- **With the defaults: 19 new accounts.** That is 2 portfolio, interest receivable, provision reserve, repossessed vehicles, customer advances, insurance payable, suspended interest, 5 revenue, 4 expense (provision, shortfall, interest waiver, repossession loss) and the 2 memo accounts. **20** if VAT applies (`TAX_PAYABLE`).
- **Optional, only if the feature is used: 13 more.**
  - BILL penalty option: 3 (penalty receivable, waiver and write-off)
  - billed fees or insurance: 4 (fee receivable, insurance receivable, fee waiver, fee write-off)
  - foreign-currency loans: 1 (rounding)
  - deferred-fee presentation: 2
  - five-account portfolio variant: 3
- **Maximum: 33.**

`SALE_RECEIVABLE` and `CASH_BANK` never need new accounts. 30 roles resolve through `ln_role_gl_mapping` or a system parameter; `CASH_BANK` comes from the payment method.

**Phase 2B step: collision check against the real chart.** Before any account is created, run the propose-accounts helper (`node loan_propose_accounts.js`) against the customer's database. It is read-only. It lists the accounts to create for the chosen variant, flags every proposed number that already exists in `chart_of_account` (same number with another name or type is a collision; same number with a matching name and type can be reused), and checks that `GL_MAP_AR_ACC`, `GL_MAP_CASH_ACC`, `GL_MAP_BANK_ACC` and `GL_MAP_VAT_OUTPUT_ACC` point at existing accounts. The accountant then fixes the numbers, and only after that are accounts created and `ln_role_gl_mapping` seeded (a later step, not 2B).

### 5.1 Contra-asset and report check (local sandbox, 2026-10-29)

Test: in the throwaway `dcommerce_loan_test` database, two test Asset accounts (loan portfolio, provision reserve) and one Expense account were created. Then Dr portfolio / Cr cash 100,000,000 and Dr provision expense / Cr reserve 30,000,000 were posted, the real report functions were called, and everything was removed again.

| Report | Result |
|---|---|
| Trial balance (`/api/gl/reports/trial-balance`, and the dc_web page that shows its values) | **Correct.** The reserve (Asset type) appears in the **Credit** column at 30,000,000, the portfolio in Debit, and the totals balance (130,000,000 = 130,000,000). The page shows the API's debit/credit columns unchanged. |
| Balance sheet, project mode (`?projectId=`, built from the GL) | **Totals correct, presentation weak.** Asset balances are Dr − Cr, so the reserve shows as a **negative asset line** (−30,000,000) and reduces total assets correctly. It isn't labelled as a contra account, and Off-Balance accounts are (correctly) excluded. Revenue and expense balances aren't carried into equity in this mode, so this balance sheet doesn't balance by itself whenever there is P&L activity (existing behaviour). |
| Balance sheet, global mode (no `projectId`) | **Loan book missing.** This mode isn't built from the GL. It sums bank balances, inventory, POS AR invoices, AP invoices and POS sales, so no loan account (portfolio, receivables, reserve, payables) would appear in it. |

Conclusions:
- Asset-type contra accounts work in the trial balance.
- The global balance sheet must learn to include GL-based loan balances before loan posting goes live. That is a reporting task for a later phase, and it changes no existing behaviour now.

Related finding: `general_ledger.debit/credit/localDebit/localCredit` are DECIMAL(15,2), while loan amounts are DECIMAL(20,4). Posting into the POS GL will need a rule for the 3rd and 4th decimals: round loan amounts to the currency's decimals before posting, or post the difference to `ROUNDING_DIFF`. That is for the posting phase (Q16).

---

## 6. Open questions for the accountant

Carried over from rev5-decisions §6:
1. Is interest on the installment subject to VAT for this dealer?
2. Are documentation and processing fees subject to VAT? Is the insurance premium pass-through exempt?
3. Is VAT due on each payment received, or on the invoice / billing date? (If on payment for billed items, a "VAT not yet due" account is needed.)
4. Does the dealer need a Bank of Lao PDR licence to lend on installment, or is this a trade-credit sale? (This may change the account names and the provisioning rules.)
5. Confirm the account numbers in §5 against the real chart of accounts.
6. Which account should hold output VAT payable? (New SPF parameter `GL_MAP_VAT_OUTPUT_ACC`.)

New in this addendum:

7. Is interest recognition on the installment **due date** acceptable for the statutory accounts and for income tax, or must interest be accrued daily or at month-end?
8. When a loan becomes NPL, should recognized but unpaid interest be reversed against interest income (proposed), even when it was recognized in a prior year, or charged to an expense?
9. Penalties are now memo-only (cash basis) for every status by default. Is recognizing penalty income only when collected acceptable for the statutory accounts and for tax?
10. Waivers: book them as an expense (proposed, per the seeded roles) or as a reduction of income? Waiving a taxable fee whose VAT was declared: is a VAT credit note required?
11. Provisioning: what is the base (principal only, or net of the vehicle's value)? Should rates be confirmed by management? Should write-backs of prior-year provisions go to provision expense (proposed) or to other income? Is provision expense tax-deductible?
12. Write-off memo: should the off-balance memo include memo-only penalties and unbooked interest, or only the booked balances (proposed)?
13. Repossession:
    - Carry the vehicle at its appraised value, capped at the outstanding principal (proposed)?
    - If the appraisal exceeds the debt, is the surplus owed to the customer?
    - Repossession costs (towing, storage): capitalize them into the vehicle, expense them, or recover them from the customer?
    - Should the deficiency that the reserve absorbs be tracked off-balance like a write-off?
14. Resale of a repossessed vehicle: post it in the loan module (VEH_DISPOSE, proposed) or as a normal POS vehicle sale through inventory and sales revenue? Is the resale subject to VAT?
15. Is the early-settlement fee taxable? What are the policy amount and the rebate method?
16. Rounding: should LAK amounts and VAT be rounded to whole kip, and should VAT be rounded per line or per invoice?
17. Contra-asset accounts (provision reserve, unamortized fees) as Asset-type accounts with credit balances: correct in the trial balance, shown as negative asset lines in the project balance sheet (§5.1). Is that presentation acceptable, or is a separate contra line needed?
18. Insurance: is the dealer purely an agent (pass-through), or does it earn a commission from the insurer that should be income?
19. Should there be five separate portfolio accounts (one per class) or two (performing / NPL)?
20. Will any loans be in USD or THB? If so, are foreign-currency loan balances revalued at month-end? (FX revaluation is not covered here.)
21. Disbursement to a customer deposit account (`CUSTOMER_ACCOUNT` target): is it needed? If so, which account holds customer deposits?
22. Cancelled deals (FEE_REFUND): are fees refundable in full or only in part? If the premium was already remitted, does the insurer refund it, and is the customer refunded before or after?

---

## 7. Catalog additions and Phase 2B scope

Seeded in Phase 2B (catalog AUTHORIZED like the rest of the system catalog; entry rules PENDING):

| Kind | Code | Purpose |
|---|---|---|
| Event | `FEE_COLLECT` | Upfront fee and insurance collection (needed by the UPFRONT default) |
| Event | `FEE_REFUND` | Deal cancelled before disbursement: refund of collected fees, VAT and insurance |
| Event | `ADV_REFUND` | Cash refund of a customer advance |
| Amount tag | `VAT_OUT` | Output VAT on taxable components |
| Amount tag | `REFUND_AMT` | Cash refunded (FEE_REFUND total, ADV_REFUND) |
| Amount tag | `INT_WAIVE_SUSP` | Waiver of suspended interest (no P&L) |
| Amount tag | `TRUE_UP_REV` | Prepayment over-accrual reversal |
| Amount tag | `PEN_CASH`, `INT_CASH` | Memo-only / unbooked penalty or interest collected in cash |
| Amount tag | `ADV_APPLIED` | Customer advance applied to dues |
| Amount tag | `ROUND_DIFF` | Base-currency rounding leg (added by the poster, no fixed rule) |
| Product parameter + lookup | `interestRecognitionCode` (`DUE_DATE` default, `DAILY`, `CASH`) | When interest is recognized; frozen in the account snapshot |
| Status default | `penaltyTreatment = MEMO_ONLY` for NORMAL … LOSS | Cash-basis penalty (revision 2) |
| System parameter | `GL_MAP_VAT_OUTPUT_ACC` (empty) | Account behind `TAX_PAYABLE`; stays empty until the accountant decides |
| Entry-rule columns | `isActive`, `feeModeFilter`, `presentationFilter`, `targetFilter` | Inactive option rules; parameter-dependent legs |
| Entry rules | every leg in §2, global scope, PENDING | Deferred-fee and BILL rules `isActive = 0` |

Validators (Phase 2B):
- **Balance per currency.** Exact, with no tolerance.
- **On- and off-balance separately.** Off-balance means the role's `expectedType = Off-Balance`.
- **Total-cash tag.** The total tag plus the other one-sided tags on its side must equal the one-sided tags on the other side.
- **Product rule set.** The product's resolved rule set must contain the legs required by its fee mode, presentation and disbursement target, and no leg belonging to another mode or target. Invalid combinations (DEDUCTED with SALE_INVOICE_SETTLEMENT; target CUSTOMER_ACCOUNT, which has no role) are rejected.

Helper: `loan_propose_accounts.js`, read-only (§5).

**Phase 2B status (2026-10-29, local sandbox only):**
- **Implemented.** Migration `20261030_loan_phase2b_accounting` and `seed_loan_phase2b_accounting.js`:
  - 142 global entry rules, all PENDING; 34 are inactive options (deferred-fee and penalty-receivable legs).
  - Rule values: `drCr` is `DR`/`CR`; unqualified roles use `qualifierSource = NONE`.
  - Entry rules, events and tags are maintained under the `LN_ENTRY_RULE` function with maker-checker; `LN_ACCOUNTING_SETUP` (roles, GL mappings) stays view-only.
- **Validators** live in `src/loan/accounting/`.
- **Product check:** `GET /api/loan/products/:id/accounting-check[?includePending=1]`.
- **Tests:** the worked examples in §4 are test fixtures, and the seeded rules must produce exactly those lines.
- **Not wired in yet:**
  - The product check doesn't block product authorization, because no rule is authorized yet. Wire it in once the rules are authorized.
  - The Parameter Studio has no screen yet for entry rules or the new product field.

Phase 4 requirements (decided 2026-10-29):
- Balance sheet without a project:
  - an opt-in loan section behind SPF `BS_INCLUDE_LOAN_BOOK` (default off);
  - a separate "Loan result" line (loan GL income minus expense), so the Other equity plug can't absorb it;
  - a visible GL-vs-subledger reconciliation check.
- Loan receipts and disbursements go through the existing POS bank and AR mechanisms.
- The existing report stays unchanged until then. Details: `phase2b-report.md` §3.1.

Not in Phase 2B:
- creating GL accounts;
- seeding `ln_role_gl_mapping`;
- posting and the EOD batch;
- report changes (§5.1).

Corrections to spec-rev4 §2 made above:
- CAPITALIZED `PRINCIPAL` imbalance;
- two roles on one `INT_WAIVE` tag;
- sign-dependent `TRUE_UP` leg;
- penalty and fee receivables left open at REPOSSESS;
- cash counted twice in LIQD + LIQD_SUSP;
- FEE_COLLECT used but never seeded;
- `CUSTOMER_ACCOUNT` target without a role.

---

## 8. Multi-currency (DRAFT, UNCONFIRMED; Phase 5 Part A; for review before any coding)

Customer facts (2026-10-31): contracts are in the **contract currency**, LAK, USD or THB. The loan account, schedule, interest, penalties, fees and payments are all in that currency (FLEXCUBE style). The base (reporting) currency is the POS `isLocalCCY` currency, LAK. Findings behind this section: `phase5-fx-investigation.md`.

Everything here is **UNCONFIRMED** until the customer's accountant answers §8.9. Posting stays behind `LOAN_POSTING_ENABLED` (off). A currency can post only once it has an authorized exchange rate and an authorized currency rule.

### 8.1 Conventions
- **Rate:** always **base units per 1 contract unit** (LAK per USD), DECIMAL(20,8). POS rates in `local_to_foreign` direction are inverted when copied.
- **Base amount:** base amount = round half-up (contract amount × rate) to the base decimals (`ln_currency_rule` of LAK: 0).
- **Every journal line** carries the contract amount, the rate and the base amount. In the POS GL, `debit`/`credit` hold the contract amount, `localDebit`/`localCredit` the base amount, and `rate` and `currencyId` are set.
- **Base-only line:** contract amount 0, base amount only. Used for FX and rounding legs. In the POS GL it is a row with `debit = credit = 0`, the same pattern as the POS bank revaluation.
- **Two balance rules, both exact:**
  - contract debits = contract credits (per currency, as today);
  - base debits = base credits for the whole journal.
- **LAK loans are unchanged:** rate 1, base = amount, never an FX or rounding line.

### 8.2 Rate source and rate per transaction
- **New loan table `ln_exchange_rate`** (`currencyId`, `rateDate`, `rate`, `source` MANUAL/POS_COPY), maker-checker like the other parameters. "Copy today's POS rate" creates a PENDING row from `currency.rate`; a second person authorizes it.
- **Maker-checker:** `LOAN_ALLOW_SELF_AUTHORIZE` applies to exchange rates as to every other parameter. When it is on, the maker may authorize their own rate, and the self-authorization is audited.
- **Rate used by a transaction:** the latest AUTHORIZED rate with `rateDate` ≤ its booking date. Refused if:
  - none exists;
  - it is older than `LOAN_FX_MAX_RATE_AGE_DAYS` calendar days (default **3**).
- **Warning when the rate is older:** if the rate used is not the booking date's own rate (but within the limit), the transaction still posts. Every API response and screen that shows the transaction or its preview carries a visible warning, for example "Rate of 2026-11-02 used for booking date 2026-11-04 (2 days old)". The rate date is stored on the transaction.
- **EOD jobs:** use the rate of the EOD business date.
- **Optional per-transaction override** (for example the bank's actual conversion rate): allowed only within `LOAN_FX_OVERRIDE_TOLERANCE_PCT` of the table rate (default **0** = off), and it always needs a checker.
- **Reversal:** uses the original transaction's stored rate and base amounts, never today's rate.

### 8.3 Carrying base and realized FX
- **Buckets:** each monetary balance keeps its contract amount **and** its base amount (the *carrying base*):

  | Bucket | Role | Booked at |
  |---|---|---|
  | Principal | `LOAN_PORTFOLIO` (by qualifier) | target SALE_INVOICE_SETTLEMENT: the invoice base relieved, carried over (§8.4, same-currency or base-currency invoice); target CASH_BANK: DISB rate. Capitalized fees: DISB rate |
  | Interest receivable | `INTEREST_RECEIVABLE` | ACCR rate (EOD date) |
  | Fee / insurance receivable | `FEE_RECEIVABLE`, `INSURANCE_RECEIVABLE` | billing rate |
  | Penalty receivable (BILL option only) | `PENALTY_RECEIVABLE` | billing rate |
  | Customer advance | `CUSTOMER_ADVANCE_LIAB` | rate of the overpayment |

- **Relief at the weighted-average carrying rate:** base relieved = round(contract relieved × carrying base / contract balance). When a bucket's contract balance reaches 0, its whole remaining base is relieved, so a closed bucket never keeps a base residue.
- **Realized FX:** for each relieved bucket, realized FX = round(contract relieved × today's rate) − base relieved.
  - It is posted as a base-only line, tag **`FX_DIFF` [NEW]**: gain to **`FX_GAIN_REALIZED` [NEW]** (Cr), loss to **`FX_LOSS_REALIZED` [NEW]** (Dr).
  - Income and payable lines (interest income, `INT_CASH`, `PEN_CASH`, fee income, VAT, insurance payable) are converted at today's rate and have no FX.
- **Suspended interest** (`SUSPENDED_INTEREST`) and off-balance memo amounts are not monetary buckets. They are converted at the rate of the transaction that moves them.

### 8.4 Disbursement settling the vehicle invoice (revised 2026-10-31 after the owner's correction)
**Facts** (`phase5-fx-investigation.md` §1.4):
- A POS sale's **lines** carry their own currency and rate (`product.saleCurrencyId`). The sale **header**, and the AR invoice created from a POS credit order, are in **base** (LAK); the header total is the lines converted at each line's rate.
- AR invoices made in the AR module can be in any currency.

**Rule (replaces "invoice currency must equal loan currency"):**
1. **Same currency:** the invoice is in the loan currency (for example a USD invoice made in the AR module). Settled as before: a single pair at the invoice's carrying base.
2. **Base-currency invoice, foreign-currency loan:** allowed. This is the normal case for a USD car sold at the POS.
   - **Carrying base:** the principal's carrying base is the **invoice base relieved**: the open base after the down payment and other receipts.
   - **Contract principal:** entered by the user, or **proposed** from the sale lines: Σ vehicle lines in the loan currency (their `total`) minus the receipts already applied, converted at the line's rate (normalized to base per 1 unit), rounded to the loan currency's decimals.
   - **Implied rate** = invoice base relieved ÷ contract principal. It must be within **`LOAN_FX_IMPLIED_RATE_TOLERANCE_PCT`** (proposed default 1.00%) of **both** the sale line's rate and the rate-table rate for the DISB date.
   - **Outside the tolerance:** refused when `LOAN_FX_IMPLIED_RATE_BREACH = REFUSE` (proposed default). When it is `CHECKER_OVERRIDE`, the maker gives a reason and the checker must explicitly accept the deviation; this is audited. DISB already needs a checker under Phase 4 D4.
   - **When it is checked:** at application/booking (as a proposal) and again at DISB (binding).
   - **Warning:** within the tolerance, any difference between the implied rate and the table rate is shown as a warning on the screen and in the API response.
   - **No FX at DISB:** the table rate is not used for posting.
3. **Any other invoice currency** (neither the loan currency nor base): refused.

**Posting for case 2: currency position.** One POS GL row has one currency, so a USD debit cannot be paired with a LAK credit. Following standard multi-currency practice, the DISB goes through a **currency position** account, role **`CCY_POSITION` [NEW]**:
- row in USD: Dr `LOAN_PORTFOLIO` / Cr `CCY_POSITION` (contract amount, base = invoice base relieved);
- row in LAK: Dr `CCY_POSITION` / Cr `SALE_RECEIVABLE` (base amount, same base).

Each currency balances, and the base balances. `CCY_POSITION` nets to **0 in base** in every journal (a validator rule). In the contract columns it keeps an offsetting USD/LAK position, which is what a position account shows. Accountant question Q34.

**Carry-over (decided 2026-10-31):** in every case the principal starts at the invoice's carrying base, and there is no FX at DISB. The FX against later rates is realized on repayment (§8.3), or at month-end if revaluation is on (§8.7). Note for the accountant: Q32.

**CASH_BANK target:** the principal is paid out from a bank account in the loan currency at the DISB rate. Both lines are at that rate, so there is no FX and no position.

**The AR receipt created by DISB:** recorded in the invoice currency (LAK in case 2) for the invoice base relieved. It stays `posted` (Phase 4), so the POS cash batch never posts it. Its allocation lines follow the invoice header's base (investigation §1.4.1), because POS invoice lines can hold foreign-currency amounts.

### 8.5 Cash
The bank account must be in the loan currency, otherwise refused. `transactionEntry` and `bankAccount.balance` move in that currency, with no conversion. The GL cash line carries the contract amount and base at today's rate.

### 8.6 Rounding (`ROUND_DIFF`)
- **When it arises:** each line's base amount is rounded separately. When the rounded base debits and credits differ (this happens only when one rate converts several lines with different amounts, for example cash = fee + VAT + insurance), the residue is posted as a base-only line to **`ROUNDING_DIFF`**, tag `ROUND_DIFF` (Dr or Cr).
- **Cap:** allowed only up to **`LOAN_FX_MAX_ROUND_DIFF`** base minor units per journal line (default 1 kip per line). A larger residue is a defect, and the posting is refused.
- **Never applies:** to same-currency (LAK) journals, which balance exactly or are refused, as in `rounding-policy.md` rule 4.
- **POS GL rows:** when a journal line is split across several POS paired rows, the base is split per piece and the last piece takes the remainder, so each line keeps its exact base.

### 8.7 Month-end revaluation (optional; switch `LOAN_FX_REVAL_ENABLED`, default **off**)
- **When on:**
  - **Job and timing:** EOD job `EOD_FX_REVAL` runs on month-end business dates, after provision.
  - **Scope:** the monetary buckets in §8.3, revalued at the month-end rate.
  - **Posting:** each difference is a base-only pair, tag **`FX_REVAL` [NEW]**:
    - for an asset bucket: Dr bucket / Cr **`FX_GAIN_UNREALIZED` [NEW]** when the base value rises, or Dr **`FX_LOSS_UNREALIZED` [NEW]** / Cr bucket when it falls;
    - mirrored for the customer advance (a liability).
  - **Batches:** summarized per batch, like the other EOD jobs.
- **Proposed mode: carry forward.** The bucket's carrying base becomes the revalued base, so later realized FX is measured from it (Example T4). There is no reversal on the next day.
- **When off (default):** no revaluation. Realized FX on payment covers the whole movement since booking (Example T4-off).
- **Not revalued:** suspended interest, off-balance memo amounts and provisions (provision currency: Q26).

### 8.8 Worked examples (exact; contract and base both balance; these become the Phase 5 `fx.js` test fixtures)
Base LAK, 0 decimals; USD and THB, 2 decimals. Base-only lines show "—" in the contract column. All figures are computed and checked by script. The USD installments come from the engine (revision of 2026-10-31).

**USD loan (POS sale, the normal case):** vehicle sold at the POS on a USD sale line, 15,000.00 at line rate 21,000. The sale header and AR invoice total is LAK 315,000,000. The down payment of LAK 63,000,000 is received, leaving an invoice balance of LAK 252,000,000. The loan is USD 12,000.00, 18% p.a., 12 months, annuity, 30/360, USD 2 decimals. `LOAN_FX_IMPLIED_RATE_TOLERANCE_PCT` = 1.00.

The installments are the **engine's own schedule** (`generateSchedule`, EQUAL_INSTALLMENT; value date 2026-01-15):
- installments 1–11: 1,100.16 each;
- installment 12: 1,100.19;
- installment 1 = principal **920.16** + interest **180.00**; installment 2 = 933.96 + 166.20; installment 12 = 1,083.93 + 16.26.

**U0. FEE_COLLECT, USD 300.00 fee + 10% VAT, at 21,200**

| Dr/Cr | Role | Tag | USD | LAK |
|---|---|---|---|---|
| Dr | CASH_BANK | TOTAL_PAID | 330.00 | 6,996,000 |
| Cr | FEE_INCOME | FEE_DOC | 300.00 | 6,360,000 |
| Cr | TAX_PAYABLE | VAT_OUT | 30.00 | 636,000 |
| | | **Totals** | **330.00 = 330.00** | **6,996,000 = 6,996,000** |

**X1. DISB settles the LAK invoice; implied rate equals the line rate and the table rate**

Proposed principal = 252,000,000 ÷ 21,000 = USD 12,000.00. Implied rate = 252,000,000 ÷ 12,000.00 = **21,000.00000000**; line rate 21,000 (deviation 0.0000%); table rate on the DISB date 21,000 (0.0000%). Passed.

| Row currency | Dr/Cr | Role | Tag | Contract amount | LAK |
|---|---|---|---|---|---|
| USD | Dr | LOAN_PORTFOLIO (CURRENT) | PRINCIPAL | USD 12,000.00 | 252,000,000 |
| USD | Cr | CCY_POSITION | PRINCIPAL | USD 12,000.00 | 252,000,000 |
| LAK | Dr | CCY_POSITION | PRINCIPAL | LAK 252,000,000 | 252,000,000 |
| LAK | Cr | SALE_RECEIVABLE | PRINCIPAL | LAK 252,000,000 | 252,000,000 |
| | | | **Totals** | **USD 12,000.00 = 12,000.00; LAK 252,000,000 = 252,000,000** | **504,000,000 = 504,000,000** |

`CCY_POSITION` base: Cr 252,000,000, Dr 252,000,000, so it nets to 0. Principal bucket: USD 12,000.00 / LAK 252,000,000 (carrying rate 21,000).

**X2. As X1, but the table rate on the DISB date is 21,150: within the tolerance, so it posts with a warning**

Implied rate 21,000.00000000; line rate 21,000 (0.0000%); table rate 21,150 (**0.7092%** ≤ 1.00%). Passed. The journal is **identical to X1**: the table rate is not used for posting, there is no FX at DISB, and the carrying rate is 21,000. The response and screen show: "Implied rate 21,000.00 differs from the table rate 21,150.00 for 2026-11-02 by 0.71% (tolerance 1.00%)." The difference of 12,000.00 × (21,150 − 21,000) = 1,800,000 is realized later as principal is repaid, or at month-end if revaluation is on.

**X3. Wrong principal entered: refused**

The user enters USD 11,500.00 instead of the proposed 12,000.00. Implied rate = 252,000,000 ÷ 11,500.00 = **21,913.04347826**. Deviation from the line rate 21,000: **4.3478%**; from the table rate 21,000: **4.3478%**. Both are above 1.00%.
- With `LOAN_FX_IMPLIED_RATE_BREACH = REFUSE`: HTTP 409 "Implied rate 21,913.04 (LAK 252,000,000 / USD 11,500.00) differs from the sale line rate 21,000.00 by 4.35% and from the table rate 21,000.00 by 4.35% (tolerance 1.00%). Check the principal: proposed USD 12,000.00." Nothing is written.
- With `CHECKER_OVERRIDE`: the DISB stays pending, the reason is required, and the checker must accept the deviation explicitly.

**U1 (variant, same-currency invoice).** The vehicle is invoiced in USD in the AR module at 21,000, with a USD 3,000.00 down payment. DISB-date rate 21,200 (not used: the base is carried over).

| Dr/Cr | Role | Tag | USD | LAK |
|---|---|---|---|---|
| Dr | LOAN_PORTFOLIO (CURRENT) | PRINCIPAL | 12,000.00 | 252,000,000 |
| Cr | SALE_RECEIVABLE | PRINCIPAL | 12,000.00 | 252,000,000 |
| | | **Totals** | **12,000.00 = 12,000.00** | **252,000,000 = 252,000,000** |

Principal bucket: USD 12,000.00 / LAK 252,000,000 (carrying rate 21,000), the same as after X1. U2 to U4 therefore apply to either path.

**U2a. EOD ACCR on the first due date, at 21,450**

| Dr/Cr | Role | Tag | USD | LAK |
|---|---|---|---|---|
| Dr | INTEREST_RECEIVABLE | INT_ACCR | 180.00 | 3,861,000 |
| Cr | INTEREST_INCOME | INT_ACCR | 180.00 | 3,861,000 |

**U2. Installment 1 paid at 21,500: principal 920.16 + interest 180.00 (engine schedule)**

| Dr/Cr | Role | Tag | USD | LAK |
|---|---|---|---|---|
| Dr | CASH_BANK | TOTAL_PAID | 1,100.16 | 23,653,440 |
| Cr | LOAN_PORTFOLIO (CURRENT) | PRIN_PAID | 920.16 | 19,323,360 |
| Cr | INTEREST_RECEIVABLE | INT_PAID | 180.00 | 3,861,000 |
| Cr | FX_GAIN_REALIZED | FX_DIFF (principal) | — | 460,080 |
| Cr | FX_GAIN_REALIZED | FX_DIFF (interest) | — | 9,000 |
| | | **Totals** | **1,100.16 = 1,100.16** | **23,653,440 = 23,653,440** |

Principal FX: 920.16 × (21,500 − 21,000) = 460,080. That includes the movement since the invoice date, which DISB carried over (§8.4). Principal bucket after U2: USD 11,079.84 / LAK 232,676,640. The interest bucket is closed (its whole base is relieved).

**U3. Partial principal prepayment USD 2,000.00 at 20,900 (rate fell: realized loss)**

| Dr/Cr | Role | Tag | USD | LAK |
|---|---|---|---|---|
| Dr | CASH_BANK | TOTAL_PAID | 2,000.00 | 41,800,000 |
| Dr | FX_LOSS_REALIZED | FX_DIFF | — | 200,000 |
| Cr | LOAN_PORTFOLIO (CURRENT) | PRIN_PAID | 2,000.00 | 42,000,000 |
| | | **Totals** | **2,000.00 = 2,000.00** | **42,000,000 = 42,000,000** |

Principal bucket after U3: USD 9,079.84 / LAK 190,676,640. The engine then regenerates the remaining schedule (Phase 4, REDUCE_INSTALLMENT by default).

**U4. REVERSAL of U3:** the exact mirror with U3's stored rates and base amounts (Dr LOAN_PORTFOLIO 2,000.00 / 42,000,000; Cr CASH_BANK 2,000.00 / 41,800,000; Cr FX_LOSS_REALIZED 200,000). The principal bucket returns to USD 11,079.84 / LAK 232,676,640, and the schedule is restored.

**THB loan:** principal THB 300,000.00, target CASH_BANK, disbursed at 670.00. The principal bucket is THB 300,000.00 / LAK 201,000,000.

**T1. FEE_COLLECT at 670.55: fee 4,500.00 + VAT 450.00 + insurance 300.05 (rounding residue)**

| Dr/Cr | Role | Tag | THB | LAK |
|---|---|---|---|---|
| Dr | CASH_BANK | TOTAL_PAID | 5,250.05 | 3,520,421 |
| Dr | ROUNDING_DIFF | ROUND_DIFF | — | 1 |
| Cr | FEE_INCOME | FEE_DOC | 4,500.00 | 3,017,475 |
| Cr | TAX_PAYABLE | VAT_OUT | 450.00 | 301,748 |
| Cr | INSURANCE_PAYABLE | INS_PREM | 300.05 | 201,199 |
| | | **Totals** | **5,250.05 = 5,250.05** | **3,520,422 = 3,520,422** |

Each line rounded separately: 5,250.05 × 670.55 = 3,520,421.03 → 3,520,421, while the credit lines round to 3,017,475 + 301,748 (301,747.50 rounds up) + 201,199 = 3,520,422. The 1-kip residue is within the cap.

**T2a. EOD ACCR on the due date at 668.20:** Dr INTEREST_RECEIVABLE / Cr INTEREST_INCOME, THB 4,500.00, LAK 3,006,900 each.

**T2. Installment paid 20 days late at 671.35: principal 25,000.00 + interest 4,500.00 + memo penalty 125.48 (PEN_CASH)**

| Dr/Cr | Role | Tag | THB | LAK |
|---|---|---|---|---|
| Dr | CASH_BANK | TOTAL_PAID | 29,625.48 | 19,889,066 |
| Cr | LOAN_PORTFOLIO (CURRENT) | PRIN_PAID | 25,000.00 | 16,750,000 |
| Cr | INTEREST_RECEIVABLE | INT_PAID | 4,500.00 | 3,006,900 |
| Cr | PENALTY_INCOME | PEN_CASH | 125.48 | 84,241 |
| Cr | FX_GAIN_REALIZED | FX_DIFF (principal) | — | 33,750 |
| Cr | FX_GAIN_REALIZED | FX_DIFF (interest) | — | 14,175 |
| | | **Totals** | **29,625.48 = 29,625.48** | **19,889,066 = 19,889,066** |

The penalty is income at today's rate, with no FX. Principal bucket after T2: THB 275,000.00 / LAK 184,250,000.

**T3. Month-end revaluation at 665.00 (only when `LOAN_FX_REVAL_ENABLED = 'true'`, carry forward)**

| Dr/Cr | Role | Tag | THB | LAK |
|---|---|---|---|---|
| Dr | FX_LOSS_UNREALIZED | FX_REVAL | — | 1,375,000 |
| Cr | LOAN_PORTFOLIO (CURRENT) | FX_REVAL | — | 1,375,000 |

Principal bucket after T3: THB 275,000.00 / LAK 182,875,000 (carrying rate 665.00).

**T4. Next installment, principal 25,000.00 at 668.00, after T3**

| Dr/Cr | Role | Tag | THB | LAK |
|---|---|---|---|---|
| Dr | CASH_BANK | TOTAL_PAID | 25,000.00 | 16,700,000 |
| Cr | LOAN_PORTFOLIO (CURRENT) | PRIN_PAID | 25,000.00 | 16,625,000 |
| Cr | FX_GAIN_REALIZED | FX_DIFF | — | 75,000 |

**T4-off. The same payment with revaluation off** (carrying rate still 670.00):

| Dr/Cr | Role | Tag | THB | LAK |
|---|---|---|---|---|
| Dr | CASH_BANK | TOTAL_PAID | 25,000.00 | 16,700,000 |
| Dr | FX_LOSS_REALIZED | FX_DIFF | — | 50,000 |
| Cr | LOAN_PORTFOLIO (CURRENT) | PRIN_PAID | 25,000.00 | 16,750,000 |

Check: with revaluation, the total FX on this slice is −1,375,000 × 25,000 / 275,000 + 75,000 = −125,000 + 75,000 = −50,000, the same as T4-off. Revaluation changes only *when* the FX is recognized, not how much.

### 8.9 Questions for the accountant (new; continue the numbering of §6)
23. **Foreign-currency vehicles.** *Revised 2026-10-31 (owner's correction):* a USD or THB loan may settle the base-currency (LAK) invoice of a POS sale whose vehicle line is in USD or THB. The principal carries the invoice base relieved; the contract principal comes from the sale line; the implied rate must be within the tolerance of the line rate and the table rate (§8.4, X1–X3). Same-currency AR invoices and CASH_BANK also remain. For the accountant: confirm the tolerance (proposed 1.00%), and whether a breach is refused or can be accepted by a checker.
24. **Rate source and type:** which rate is official for loan postings (central bank, the dealer's bank, a daily board rate)? Who enters it, by what time, and is one rate per day enough? Should a payment use the bank's actual conversion rate when it differs, and within what tolerance?
25. **Carrying method:** is the weighted-average carrying rate per bucket acceptable, or must each installment keep its own historical rate (FIFO)?
26. **Provisions:** computed in the contract currency and converted at each provision date, or fixed in LAK at the classification date? Are provisions revalued?
27. **FX accounts:** separate realized gain and realized loss accounts? For unrealized FX, reuse the POS accounts 4008 and 5108 (created by the POS bank revaluation) or separate loan accounts? Proposed numbers are in §8.10.
28. **Month-end revaluation:** required at all? If so, carry forward (proposed) or reverse on the first day of the next month?
29. **Rounding:** is a 1-kip-per-line cap for `ROUNDING_DIFF` acceptable, and should rounding differences go to their own account or to FX gain/loss?
30. **Interest and penalties on foreign loans:** confirm that interest, penalties, fees and insurance are always charged and paid in the contract currency (never in LAK), and that VAT on fees of a USD or THB loan is declared in LAK at the transaction rate.
31. **Revaluing foreign bank accounts:** the POS bank revaluation recomputes a foreign bank account's whole GL balance, including loan cash. Is running both (bank revaluation in POS, loan revaluation in the loan module) acceptable, or should one process own both?
32. **DISB carry-over (decided 2026-10-31, for your confirmation):** DISB that settles an invoice carries the invoice's base value into the loan portfolio, with no FX at DISB. The FX between the invoice date and the DISB date is recognized later: on repayment as realized FX, or at month-end if revaluation is on. Is that acceptable, or must the receivable be revalued to the DISB-date rate first (which would post FX at DISB)?
33. **Rate age:** a transaction may use a rate up to 3 calendar days old (`LOAN_FX_MAX_RATE_AGE_DAYS = 3`), with a visible warning when the rate is not the booking date's. Is 3 days acceptable (weekends, holidays)?
34. **Currency position account:** a USD loan settling a LAK invoice is posted through a currency position account (`CCY_POSITION`) that nets to 0 in LAK in every journal but shows offsetting USD/LAK amounts. Is a position account acceptable in the dealer's chart (proposed 1990 *Currency position / ບັນຊີຖານະເງິນຕາ*), and should it be reported or hidden in the balance sheet?

### 8.10 Catalog and mapping additions (proposals; seeded PENDING in Phase 5 A3, no GL accounts created)
| Kind | Code | Purpose | Proposed account |
|---|---|---|---|
| Role | `FX_GAIN_REALIZED` | realized FX gain | 4901 *Realized FX gain / ກຳໄລອັດຕາແລກປ່ຽນ* (new) |
| Role | `FX_LOSS_REALIZED` | realized FX loss | 5902 *Realized FX loss / ຂາດທຶນອັດຕາແລກປ່ຽນ* (new) |
| Role | `FX_GAIN_UNREALIZED` | revaluation gain (switch on) | 4008 (POS, existing) or new 4902 (Q27) |
| Role | `FX_LOSS_UNREALIZED` | revaluation loss (switch on) | 5108 (POS, existing) or new 5903 (Q27) |
| Role | `CCY_POSITION` | currency position for cross-currency DISB (nets to 0 in base) | 1990 *Currency position / ບັນຊີຖານະເງິນຕາ* (new; Q34) |
| Amount tag | `FX_DIFF` | realized FX leg (posting layer, no fixed rule) | — |
| Amount tag | `FX_REVAL` | revaluation leg | — |
| Batch job | `EOD_FX_REVAL` | month-end revaluation, disabled | — |
| SPF | `LOAN_FX_MAX_RATE_AGE_DAYS` = `3`, `LOAN_FX_OVERRIDE_TOLERANCE_PCT` = `0`, `LOAN_FX_MAX_ROUND_DIFF` = `1`, `LOAN_FX_REVAL_ENABLED` = `false`, `LOAN_FX_IMPLIED_RATE_TOLERANCE_PCT` = `1.00`, `LOAN_FX_IMPLIED_RATE_BREACH` = `REFUSE` | defaults above | — |

Existing and unchanged: `ROUNDING_DIFF` role and `ROUND_DIFF` tag (§5, §7).

**Validators to add (Phase 5 A6):**
- no `FX_DIFF` on a DISB with target SALE_INVOICE_SETTLEMENT (carry-over);
- `CCY_POSITION` nets to 0 in base in every journal, and appears only on a cross-currency DISB (and its reversal);
- base balance per journal;
- `FX_DIFF`, `FX_REVAL` and `ROUND_DIFF` lines must be base-only;
- `FX_DIFF` only on events that relieve a monetary bucket;
- `ROUND_DIFF` within the cap;
- LAK journals contain none of the three.
