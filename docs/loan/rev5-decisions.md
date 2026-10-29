# Loan Module: Rev 5 Decisions (addendum to spec-rev4.md)

Where this file and `spec-rev4.md` disagree, this file wins. Status: Phase 2A approved. Phase 2B (accounting entry rules and GL mappings) is held until a Rev 5 accounting addendum is confirmed.

## 1. Customer context
- Customer is a Lao micro SME car dealer that finances its own vehicle sales on installment.
- Assume simple local accounting, NOT full IFRS 9 effective-interest accounting.
- Everything below is a parameter. Nothing is hard-coded, so decisions can change later without code changes.

## 2. Fee and insurance defaults
- `feeFinancingMode = UPFRONT` (customer pays fees at signing).
- `deferredFeePresentation = IMMEDIATE` (fee goes to income when charged). Add `IMMEDIATE` alongside `LIABILITY` and `CONTRA_ASSET_NET`.
- `LIABILITY` and `CONTRA_ASSET_NET` stay available as advanced options, off by default. Entry rules for DEFERRED_FEE, UNAMORTIZED_FEE_CONTRA and EIR_AMORT are seeded later as inactive.
- Insurance is a pass-through, collected upfront and paid to the insurer.
- All three settings are product parameters, frozen in the account snapshot.

## 3. Provisioning and status
- Provision rates and DPD ranges are company policy, editable, shown as "to be set by management". Do not describe them as legally mandated.
- Keep the regulatory class and provision rule tables fully editable so a regulator's rules can be loaded later.

## 4. VAT / tax profile (default: UNCONFIRMED)
- New table `ln_tax_profile`: `companyVatRegistered` (default from the existing POS tax setting), `confirmationStatus` (`UNCONFIRMED` / `CONFIRMED`), `confirmedBy`, `confirmedAt`.
- Per component (fee, interest, penalty, insurance, repossession sale): `taxable`, `taxCode`, `taxInclusive`, `taxPointEvent` (`DISB` / `BILL` / `COLLECTION`).
- The VAT rate comes from the existing POS `tax` table, which is already effective-dated (`effectiveFrom` / `effectiveTo`). `ln_tax_profile.posTaxId` and `ln_tax_master.posTaxId` reference the POS `tax` row (`tax.id`, no FK), and the rate is read from that row for the event date, so it cannot drift from POS. `ln_tax_master.taxRate` is NULL by default (meaning: use the POS rate) and is only set for a loan-specific override. Do not assume 7% or 10%, and never copy the rate as a literal.
- POS has no VAT payable account: the `tax` table has no GL account, there is no `GL_MAP_*` parameter for VAT, and POS posting does not post VAT. The VAT payable account (`TAX_PAYABLE` role, `resolverType = SYSTEM_PARAM`) is therefore a **Phase 2B decision**: a new system parameter in `SPF`, to be confirmed with the customer's accountant (see section 6).
- Starting values for a VAT-registered dealer: fees taxable; repossession-sale proceeds taxable; interest, penalty and insurance not taxable. All shown as UNCONFIRMED.
- While UNCONFIRMED: show a warning banner on all loan screens. Phase 2A only stores the profile and shows the banner. Blocking production disbursement and fee/interest billing is built in Phase 4.
- Add a Go-live checklist screen listing unconfirmed parameters (tax profile, fee treatment, provision rates, DPD ranges, GL mappings) with confirm actions.
- Note: the tax treatment of interest for a non-bank dealer is not settled. It must be confirmed with the customer's accountant or the tax office before go-live.

## 5. Spec corrections to apply
1. Table count: the document says 54 but lists about 64. Use the real list.
2. MariaDB: do not use COALESCE expressions in the UNIQUE key of `ln_role_gl_mapping`. Use persistent generated columns or code-level validation.
3. Add `branchId` to `ln_application`, `ln_account` and `ln_transaction`.
4. Add `resolverType` (`MAPPING_TABLE` / `SYSTEM_PARAM` / `BANK_ACCOUNT`) to `ln_accounting_role`. Add `paymentMethodId` and `bankAccountId` to `ln_transaction`.
5. `ln_transaction` must not carry a global unique `idempotencyKey`. Use `ln_idempotency` with unique `(endpoint, accountId, idempotencyKey)`.
6. `ln_journal_posting.transactionId` is nullable. `ln_accrual_ledger` links to `ln_gl_batch`.
7. Seed account numbers in the spec (1050-1061, 2050-2054, 4050-4059, 6050-6058, 9001/9002) are proposals only. Do not seed GL accounts or mappings in Phase 2A.
8. Disbursement validation: when `feeFinancingMode = CAPITALIZED`, the open invoice balance must equal principal minus capitalized fees and insurance (not total principal).
9. `CUSTOMER_ACCOUNT` + `DEDUCTED` flow: the customer receives only the net amount, so specify the required top-up to settle the full invoice.
10. Balance validator: exact balance per currency; add a `ROUNDING_DIFF` role for base-currency rounding differences. Do not use a 0.0001 tolerance.
11. Verify that no existing report breaks when `chart_of_account.accountType` gains `'Off-Balance'` (or use an `isOffBalance` flag instead).

## 6. Open items for the customer's accountant (do not block Phase 2A)
1. Is interest on the installment subject to VAT for this dealer?
2. Are documentation and processing fees subject to VAT? Is the insurance premium pass-through exempt?
3. Is VAT due on each payment received or on the invoice date?
4. Does the dealer need a Bank of Lao PDR licence to lend on installment, or is this a trade-credit sale?
5. Confirm account numbers for the loan accounts against their existing chart of accounts.
6. Which account should hold VAT payable (output VAT)? POS has none today; it will be configured as a new system parameter in Phase 2B.

## 7. Held until confirmed
- Seeding of `ln_accounting_entry_rule` and `ln_role_gl_mapping` (Phase 2B).
- Transaction posting, EOD batch and reports (later phases).
