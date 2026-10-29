# Loan Module: Phase 2B Report

Date: 2026-10-29. Branch `feature/loan-module` in `dc_api` and `dc_web`, not pushed. Everything was built and tested against **local databases only** (`dcommerce_loan_dev`, `dcommerce_loan_test`). Phase 3 has not been started.

Basis: `rev5-accounting-addendum.md` (revision 2, accepted with changes) and `rounding-policy.md` (draft, UNCONFIRMED).

## 1. What was built

### Accounting setup (dc_api)
- **Migration `20261030_loan_phase2b_accounting`** (reversible):
  - entry rules gain `isActive` plus fee-mode, presentation and disbursement-target filters (part of the unique key);
  - new lookup table `ln_lookup_interest_recognition`, and `ln_product.interestRecognitionCode` (default `DUE_DATE`);
  - `loan_migrate.js` checks every rollback step before running any, and refuses the 2B rollback while entry rules exist.
- **Seed `seed_loan_phase2b_accounting.js`** (idempotent):
  - catalog additions: events `FEE_COLLECT`, `FEE_REFUND`, `ADV_REFUND`; 8 amount tags; the interest-recognition lookup;
  - penalty `MEMO_ONLY` for NORMAL through LOSS;
  - empty `GL_MAP_VAT_OUTPUT_ACC` system parameter;
  - **142 global entry rules, all PENDING**, of which 34 are inactive options (deferred-fee rules and every leg touching `PENALTY_RECEIVABLE`);
  - go-live checklist items `ENTRY_RULES` and `GL_MAPPINGS`.
  - **No GL accounts and no `ln_role_gl_mapping` rows.** The seed aborts if either changes.
- **Security:** a new function `LN_ENTRY_RULE` (view, create, edit, delete, authorize) covers entry rules, events and tags. `LN_ACCOUNTING_SETUP` (accounting roles, GL mappings) stays view-only. Grants go to SUPER_ADMIN and ADMIN by group code.
- **Validators** (`src/loan/accounting/`):
  - balance per currency, with on- and off-balance checked separately and no tolerance;
  - the total-cash tag must equal the sum of its parts;
  - rule structure (status qualifiers, self-balancing tags, duplicates);
  - the product's rule set must match its fee mode, presentation and disbursement target.
  - A journal builder refuses any non-zero amount that has no active rule.
- **Product accounting check:** `GET /api/loan/products/:id/accounting-check[?includePending=1]`.
- **Product authorization gate:** a product version cannot be authorized unless every rule it needs is AUTHORIZED. The 409 response lists each failing leg.
- **Bulk review-and-authorize:** `POST /api/loan/params/:entity/bulk-authorize`.
  - One transaction: all rows or none.
  - The same per-row rules as a single authorization: a second person is required unless `LOAN_ALLOW_SELF_AUTHORIZE` is on, references are checked, and one audit row is written per record.
- **Propose-accounts helper:** `node loan_propose_accounts.js [--features=VAT,BILL_PENALTY,BILLED_FEES,FX,DEFERRED_FEES,FIVE_PORTFOLIO] [--json]`. It is read-only.
  - It lists the GL accounts to create: 19 with the defaults, 20 with VAT, 33 with every option.
  - It flags number collisions and reusable accounts against `chart_of_account`.
  - It checks the `GL_MAP_*` parameters.
- **Go-live checklist:**
  - `ENTRY_RULES` and `GL_MAPPINGS` are confirmed only through the confirm endpoint (permission `LN_CHECKLIST` AUTHORIZE).
  - Each confirmation is stored per item with a snapshot of what was confirmed.
  - Confirmation is refused while related changes are pending or nothing is authorized; `GL_MAPPINGS` is refused today because no mappings exist.
  - An item resets when a related change is authorized.
  - `GL_MAPPINGS` replaces the old held `GL_ROLE_MAPPINGS` item.

### Screens (dc_web)
- **Parameter Studio → Entry rules tab:**
  - a read-only list grouped by event, with filters for event, active/inactive and pending/authorized/rejected, plus status counts per group;
  - a **Review & authorize** dialog per group, which calls the bulk API. Rules you created yourself are left out unless you tick "include my own", which only works when self-authorization is on.
- **Product form:**
  - the new **Interest recognition** setting (dropdown from the API);
  - a new **Accounting check** tab comparing the authorized rule set (what authorization uses) with a preview that includes pending rules;
  - when authorization is refused, the failing legs are listed and the Accounting check tab opens. The pending inbox lists the same failing legs.
- **Master data:**
  - the interest-recognition lookup;
  - a full entry-rule editor (all filters, active flag, product/category scope) under `LN_ENTRY_RULE`;
  - GL mappings marked view-only.

### Documents
- `rev5-accounting-addendum.md`: revision 2 plus a Phase 2B status note.
- `rounding-policy.md`: new, UNCONFIRMED.
- This report.

## 2. Verification (what was actually run)

- **`npm run test:loan`: 57 passed, 0 failed.** The test database is rebuilt from local `dcommerce_dev` on every run. Covered:
  - all 8 worked examples plus 5 VAT variants: the seeded rules produce exactly the documented lines, balanced, and the total-cash check passes;
  - a negative case for every validator;
  - the product gate: refused with the failing legs listed, then allowed once the rules are authorized;
  - bulk authorize: all or nothing, own rules refused, CASHIER refused, one audit row per rule;
  - the checklist items: GL_MAPPINGS refused, ENTRY_RULES confirmed and then reset after a rule change;
  - the seed: idempotent, and a 2A re-run keeps the 2B additions;
  - rollback refusals;
  - the propose-accounts helper (collision found, account reusable, nothing written).
- **ESLint:** 0 problems on the changed dc_web files.
- **Nuxt build:** client and server compile; the 6 warnings were already there before.
- **Browser check** (headless, local API on `dcommerce_loan_dev`; every API call went to `127.0.0.1:18888`):
  - ADMIN: the Entry rules tab shows 24 event groups. ADMIN opened the ACCR review dialog (2 rules) and authorized them; the toast read "2 accounting-entry-rule record(s) authorized" and the group changed to AUTHORIZED.
  - SUPER_ADMIN: the product page shows the Interest recognition field. Authorizing CAR-LOAN-DB was refused with 49 listed problems, and the Accounting check tab opened. The checklist shows the Entry rules and GL mappings items.
  - **CASHIER: not run in the browser.** The browser driver's Chromium was removed by an extension update during the session. CASHIER refusals are covered by the API tests (403 on the rule list, bulk authorize and accounting check).
- **Sandbox changes from the browser check** (`dcommerce_loan_dev`):
  - category VEHICLE_FINANCING authorized (by SUPER_ADMIN, through the API);
  - the two ACCR entry rules authorized (by ADMIN, through the UI);
  - one 2B seed run, which migrated `GL_ROLE_MAPPINGS` to `GL_MAPPINGS`.
- Your three uncommitted dc_api files (`logs.log`, `src/config/env.js`, `src/parking/validation.js`) match their baseline hashes. The two unrelated modified dc_web files were not touched or committed.

## 3. Open blockers

### 3.1 Balance sheet without a project (not changed)

**Code path:**
- The dc_web page `pages/reports/financial/balance-sheet/index.vue` (around line 316) calls `GET /api/gl/reports/balance-sheet` with only `asOfDate`, so users always get the mode without a project.
- Route: `dc_api/src/GL/router.js:25` → `ADBReportController.getBalanceSheet` (`dc_api/src/GL/adbReportController.js:433`).
- With no `projectId`, the code takes the "Mode B: Global POS / Minimart POS Mode" branch (line 552).

**Why loan accounts are missing:** Mode B never reads `general_ledger`. It builds every line from subledgers:

| Line | Source | Code |
|---|---|---|
| Cash & bank | latest `accountDailyBalance` snapshot (or `bankAccount.balance`) per active bank account | line 554 |
| Inventory | cost of unsold `card` rows | line 582 |
| AR | unpaid `arInvoiceHeader` minus receipts | line 620 |
| AP | unpaid `apInvoice` minus settlements | line 637 |
| Net profit | POS `saleHeader.total` minus `apInvoiceSettlement` payments | line 654 |
| Other equity | **a plug:** total assets − liabilities − net profit | line 680 |

The loan portfolio, receivables, provision reserve, repossessed vehicles, suspended interest, payables and loan income and expenses exist only in `general_ledger` (through the role-to-GL mapping), so none of them can appear. Because "other equity" is a plug, the report also balances by construction, so it would never show that anything is missing.

**Smallest safe fix (proposal, not implemented). Options:**
- **A. Recommended: an opt-in "Loan book" section in Mode B.**
  - Behind a new SPF switch `BS_INCLUDE_LOAN_BOOK`, default `false`, so nothing changes until it is turned on.
  - When on, Mode B adds one line per authorized `ln_role_gl_mapping` account of type Asset, Liability or Contra-asset, taking the `general_ledger` balance up to `asOfDate`.
  - It adds the loan revenue and expense account balances to net profit.
  - Off-balance accounts are excluded.
  - `CASH_BANK` and `SALE_RECEIVABLE` are excluded to avoid double counting, because Mode B already reports cash and AR from subledgers. That puts a requirement on Phase 4: loan posting must also update the bank-balance subledger and settle the AR invoice, or cash and AR will be wrong.
  - Small (one query plus two additions), isolated, and it shows nothing until mappings exist.
- **B. A separate report** (e.g. `/api/gl/reports/loan-balance-sheet`, or a Loan section in a new page). There is no risk to the existing report, but the company then has two balance sheets that don't add up to one total.
- **C. Make Mode B fully GL-based** (like Mode A, with P&L rolled into equity). This is right in the long term, but it changes every number for existing POS users and needs a reconciliation of GL against subledgers first. Not suitable as a quick fix.

Also recommended under any option: show "other equity" as a calculated balancing figure, or add a check line, so a missing account becomes visible.

### 3.2 Rounding (draft policy, UNCONFIRMED)
- The POS `currency` table has **no decimals field**, and its `rate` is a floating-point `DOUBLE`.
- Loan amounts are DECIMAL(20,4), but the POS `general_ledger` stores DECIMAL(15,2).
- The default in `rounding-policy.md`:
  - round every billable or postable amount to the currency's decimals at schedule or billing time, half-up;
  - the last installment absorbs the residue;
  - VAT is rounded per line;
  - `ROUND_DIFF` is used only for foreign-currency conversion.
- The decimals come from a proposed loan-owned parameter (LAK 0, USD 2, THB 2; UNCONFIRMED). Needed before Phase 3.

### 3.3 Other open decisions
- **VAT:** the payable account (`GL_MAP_VAT_OUTPUT_ACC` is empty) and the VAT questions in the addendum.
- **Account numbers:** confirm them against the real chart. Run `loan_propose_accounts.js` on the customer's database first; after that, create the accounts and seed the role-to-GL mappings (not part of 2B).
- **The remote `dcommerce_demo`:** still untouched. The rollback decision is still open.
- **Grant-change approval:** grant changes are now audited (`sec_audit_log`) but still apply immediately, with no second-person approval.

## 4. How to click through locally

Use the local sandbox only. The API must point at `dcommerce_loan_dev`, and the web app at the local API.

1. **Start the API** from a working directory outside `dc_api`: the logger writes `logs.log` in the current directory, and the one in `dc_api` is yours.
   ```bash
   mkdir -p ~/loan-run && cd ~/loan-run
   export DB_HOST=127.0.0.1 DB_PORT=3306 DB_USER=loan_dev DB_NAME=dcommerce_loan_dev \
          DB_PASSWORD='<loan_dev sandbox password>' NO_SYNC=true PORT=18888 TZ=Asia/Vientiane
   node ~/Desktop/Pro/dcommerce/dc_api/src/index.js
   ```
   The `loan_dev` password was generated for the sandbox. If you no longer have it, reset it as root: `ALTER USER 'loan_dev'@'localhost' IDENTIFIED BY '...'` (and the same for `'loan_dev'@'127.0.0.1'`).
2. **Start the web app** pointed at the local API. A normal `nuxt dev` rewrites the tracked `dc_web/.nuxt` folder, so use a config that builds elsewhere. Save this outside the repo as `~/loan-run/nuxt.local.config.js`:
   ```js
   import base from '/Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web/nuxt.config.js'
   export default { ...base, rootDir: '/Users/soubinkittiphanh/Desktop/Pro/dcommerce/dc_web', buildDir: '/Users/soubinkittiphanh/loan-run/.nuxt-build' }
   ```
   ```bash
   cd ~/Desktop/Pro/dcommerce/dc_web
   BASE_URL=http://127.0.0.1:18888 NODE_OPTIONS=--max-old-space-size=8192 npx nuxt dev -c ~/loan-run/nuxt.local.config.js --port 3399
   ```
   The first compile takes about 2–3 minutes; without the larger heap it runs out of memory.
3. **Open** `http://localhost:3399` and log in. Use two different users, so that maker and checker differ: a SUPER_ADMIN user (id 1), and Manager01 (id 2, ADMIN group).
4. **Screens:**
   - **Loan Parameter Studio** (`#/admin/loan/studio`), with the tabs Checklist, Tax profile, Products, **Entry rules**, Master data and Pending approvals.
     - Entry rules: filter by Status = Pending, open an event, click **Review & authorize**, then confirm.
     - The ACCR group is already authorized in the sandbox.
   - **Product form** (Products tab → CAR-LOAN-DB):
     - the General tab has **Interest recognition**;
     - click **Authorize** while rules are still pending: the failing legs are listed and the **Accounting check** tab opens;
     - after all groups are authorized, authorize the product again with a second user.
   - **Checklist:** the items *Accounting entry rules* (confirmable once every rule is authorized) and *GL mappings* (refused until mappings exist).
   - **Access rights** (`#/admin/security/grants`, SUPER_ADMIN only): the new `LN_ENTRY_RULE` row.
5. **Run the tests** the same way, from a directory outside `dc_api`, with the same DB variables: `npm --prefix ~/Desktop/Pro/dcommerce/dc_api run test:loan`. This rebuilds `dcommerce_loan_test` from `dcommerce_dev`.

## 5. Commits (Phase 2B)

dc_api:
```
b9bb458 test(loan): product accounting gate, bulk authorize and checklist items
a1c0b47 feat(loan): go-live checklist items ENTRY_RULES and GL_MAPPINGS
0bfd777 feat(loan): product authorization requires authorized entry rules; bulk authorize
9903f47 test(loan): Phase 2B seed, validator and endpoint tests
53a55fc feat(loan): accounting validators, product rule check and account proposals
7656123 feat(loan): seed accounting catalog additions and PENDING entry rules
e1b62ec feat(loan): Phase 2B schema for entry rules and interest recognition
83d2dec feat(security): audit every sec_group_grant change
```
dc_web:
```
c58dbab59 feat(loan): entry rules screen, product accounting check, interest recognition setting
14537d28b docs(loan): addendum Phase 2B status and contra-presentation legs
ccc7c7442 docs(loan): accounting addendum revision 2
cb49429a1 docs(loan): Rev 5 accounting addendum draft (UNCONFIRMED)
```
The docs commit for this report and the rounding policy follows these.
