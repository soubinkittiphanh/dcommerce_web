# Pre-existing POS defects found during the loan module work

These defects are in existing POS code and existed before the loan module. They were found while building and testing Phase 4 (branch `feature/loan-module`). **None of them is fixed on the loan branch.** The loan code works around the ones it depends on, as noted under each item. They are listed here so they can be handled as a separate task.

Line numbers are from `dc_api` and `dc_web` at the loan branch's base on `main`, as of 2026-10-31.

| # | Defect | Area | Severity | Loan workaround |
|---|---|---|---|---|
| 1 | `syncInvoiceStatus` does nothing | AR | High: invoices are never marked paid automatically | The loan applies the status rule itself |
| 2 | Invoice `beforeUpdate` audit hook writes outside the caller's transaction | AR audit | High: deadlock / 17-minute hang under a row lock | `hooks: false` on loan invoice updates |
| 3 | Receipt `afterCreate` audit hook reads outside the transaction (and has a bad include) | AR audit | Medium: no audit row for receipts created in a transaction | None needed |
| 4 | Invoice `afterCreate` audit hook fails with "Include unexpected" | AR audit | Medium: no audit row on invoice creation | None needed |
| 5 | P&L screens count every AR receipt as "Other income", which double counts AR-settled sales (including the down payment) | P&L screens | High: overstated income | Loan receipts are left out of the list endpoints by default |
| 6 | Balance sheet Mode B subtracts voided and cancelled receipts from open invoices | Balance sheet | High: AR understated | None yet (proposal in phase4-report §9.3) |
| 7 | GL cash batch treats every non-cash receipt method as bank account 1002 | GL batch | Low (latent) | Loan receipts are marked `posted` |
| 8 | AR receipt search uses `Op.iLike` (PostgreSQL only) on MariaDB | AR API | Medium: search filter fails (not run, read from code) | None needed |

---

## 1. `ReceiveHeader.syncInvoiceStatus` does nothing
**Evidence**
- `dc_api/src/AR/receive/header/model.js:499` looks up `sequelize.models.arInvoiceHeader`.
- The invoice model is defined as `sequelize.define('ARInvoiceHeader', …)` (`src/AR/invoice/header/model.js:8`). It is only *exported* as `arInvoiceHeader` (`src/models/index.js:268`), so `sequelize.models.arInvoiceHeader` is `undefined`.
- So the function logs "arInvoiceHeader model not found for status sync" (line 503) and returns `null` without changing anything.
- It is called by receipt create (controller), by `voidReceipt` / `cancelReceipt` / `reactivateReceipt` (model lines 598, 634, …), and by the loan module.

**Effect:** invoices settled by POS AR receipts are never marked `paid` automatically. Voiding a receipt never reopens a `paid` invoice. The invoice picker on the AR receipt screen (draft / sent only) and the balance sheet (excludes `paid`) both depend on that status.

**Suggested fix:** use `sequelize.models.ARInvoiceHeader` (or `this.associations.invoiceHeader.target`). Also run the sync for invoices settled before the fix, as a one-off script that recomputes each status from its active receipts. Test it with the existing receipt create, void and reactivate paths.

**Loan workaround:** the loan code still calls the POS function. It then applies the same rule itself, inside its transaction: active receipts ≥ total → `paid`; a `paid` invoice that is no longer covered → `overdue` or `sent`.

## 2. Invoice `beforeUpdate` audit hook writes outside the caller's transaction
**Evidence**
- `dc_api/src/AR/invoice/header/model.js:133–228`. The hook reads the current row with `options.transaction` (line 146), but calls `ARInvoiceHeaderAudit.createAuditRecord(currentRecord.toJSON(), userId, action, reason)` (line 216) **without the transaction**.
- `createAuditRecord` (`src/AR/invoice/headerAudit/model.js:90`) has no transaction parameter.
- **Observed in the loan test run:** a DISB authorization that updated the invoice inside a transaction holding the invoice row lock hung for about 17 minutes. The audit insert (FK to the locked invoice) waited on the lock until the socket timeout.

**Effect:** any POS code path that updates an invoice inside a transaction after locking or changing the row can deadlock against its own audit insert. It also writes an audit row that survives a rollback.

**Suggested fix:** add a `transaction` option to `createAuditRecord` and pass `options.transaction` from the hook. Do the same in the receipt `beforeUpdate` hook (`src/AR/receive/header/model.js:123`) if it has the same pattern.

**Loan workaround:** loan code updates the invoice status with `hooks: false`. The change is recorded in `ln_transaction` and `ln_pos_link`, not in the POS invoice audit.

## 3. Receipt `afterCreate` audit hook reads outside the transaction
**Evidence:** `dc_api/src/AR/receive/header/model.js:228–…`. It runs `sequelize.models.ARReceiveHeader.findByPk(receipt.id, { include: … })` without `options.transaction`, so it cannot see a row that hasn't been committed yet. Its include also refers to `sequelize.models.arInvoiceHeader`, which is undefined (see #1).

**Effect:** no audit row for receipts created inside a transaction, whether by the loan module or by POS code that uses one.

**Suggested fix:** pass `transaction: options.transaction`, use `sequelize.models.ARInvoiceHeader` in the include, and pass the transaction to the audit insert.

## 4. Invoice `afterCreate` audit hook fails with "Include unexpected"
**Evidence**
- `dc_api/src/AR/invoice/header/model.js:232–278`.
- The include list uses `sequelize.models.client`, `sequelize.models.currency` and `sequelize.models.user`. At least one of them is not registered under that name, so Sequelize throws.
- The loan test log shows: `error: Failed to create audit record after create: Include unexpected. Element has to be either a Model, an Association or an object.`
- The hook also reads without the transaction (same pattern as #3).

**Effect:** no audit row on invoice creation. The error is caught and logged, and nothing else breaks.

**Suggested fix:** resolve the models through the invoice model's associations (or the names used in `src/models/index.js`), and pass the transaction.

## 5. P&L screens count every AR receipt as "Other income" (double count, including the down payment)
**Evidence:** six dc_web screens load AR receipts and add every active receipt's `totalReceivedAmount` to income as "ໃບຮັບເງິນ (AR Receive)". They filter only on status (voided and cancelled are excluded), never on method or origin:

| Screen | Filter | Sum |
|---|---|---|
| `pages/admin/pl/index.vue` | 397 | 408 |
| `pages/admin/plCommission/index.vue` | 442 | 453 |
| `pages/admin/saleCost/index.vue` | 570 | 582 |
| `pages/admin/saleCostCommission/index.vue` | 423 | 435 |
| `pages/reports/financial/pl/index.vue` | 822 | 834 |
| `components/reports/ProfitLossReport.vue` (uses `/api/ar-receive-headers/pl`; used by `pages/reports/profit-loss.vue`) | — | 655, 767, 894 |

The same screens take sales from `api/sale/findDetailByDate`, which already includes every POS sale, credit sales included.

**Effect:** a credit sale that is later settled through AR is counted **twice**: once as sales, and again as "AR Receive" income when the receipt is entered.
- Example (no loan involved): a 300,000,000 vehicle sale on credit with a 60,000,000 down payment entered as an AR receipt shows 360m income.
- Before the loan fix in this branch, the loan's DISB settlement receipt (240m) would have added another 240m, for 600m.
- The GL (trial balance, GL-based P&L) is correct; only these screen calculations are wrong.

**Suggested fix:** count AR receipts as income only for invoices that did **not** come from a POS sale already counted in sales: exclude receipts whose invoice has `saleHeaderId` / `sourceType = 'POS_ORDER'`. A better long-term fix is to drive these screens from the GL. Decide which with the accountant, because cash-basis owners may expect the current behaviour for non-POS invoices.

**Loan workaround (implemented in this branch):** `GET /api/ar-receive-headers` and `/pl` leave out receipts recorded in `ln_pos_link` unless the caller passes `includeLoanSettlement=1`. The P&L screens don't pass it, so loan receipts no longer reach them. The pre-existing down-payment double count is unchanged.

## 6. Balance sheet Mode B subtracts voided and cancelled receipts
**Evidence:** `dc_api/src/GL/adbReportController.js:621–635`. The AR calculation loads open invoices (`status NOT IN ('paid','cancelled')`) with `include: [{ model: db.arReceiveHeaderV2, as: 'receiveHeaders', required: false }]`, which has no status filter. It then subtracts the sum of **all** linked receipts.

**Effect:** voiding or cancelling a receipt on an invoice that is open again leaves the receipt subtracted, so AR is understated by the voided amount.
- With the loan: after a DISB reversal, the invoice reopens and the voided 240m loan receipt is still subtracted. Shown by the test "DISB reversal: balance sheet AR line and loan reconciliation": AR line −240m, reconciliation difference +240m.
- Without the loan, the same happens for any manual void. It is partly masked today by #1 (a voided receipt never reopens a `paid` invoice).

**Suggested fix:** `include: [{ model: db.arReceiveHeaderV2, as: 'receiveHeaders', required: false, where: { status: 'active' } }]`.
- An exact as-of-date figure would also need to know *when* a receipt was voided. Receipts have no void date, only `updatedAt`, so that part is a separate decision.
- See phase4-report §9.3 for how this ties to the DISB reversal.

## 7. GL cash batch treats every non-cash receipt as bank 1002
**Evidence:** `dc_api/src/GL/cashPostingService.js` (module `AR_RECEIPT`) posts unposted active receipts with Dr bank / Cr AR. Any method other than `cash` goes to bank account 1002 (fallback by name, then 1000).

**Effect:** latent. A receipt with method `other` (for example a contra settlement) would be posted as bank money if it were ever unposted.

**Suggested fix:** map `other` to an explicit clearing account (SPF) or skip it with a warning in the preview.

**Loan workaround:** loan receipts are created with `glPostingStatus = 'posted'`, and a test checks that the batch preview does not pick them up.

## 8. AR receipt search uses `Op.iLike` on MariaDB
**Evidence:** `dc_api/src/AR/receive/header/controller.js` `findAll` and `findAllForPL` (search filter): `{ receiptNumber: { [Op.iLike]: … } }`. `Op.iLike` is PostgreSQL only; with the MariaDB dialect it produces SQL MariaDB rejects. **Read from code; not run.** The AR receipt screen searches client-side, so it does not send `search`.

**Suggested fix:** use `Op.like` (MariaDB comparisons are case-insensitive under the default collations).

---

### Also noted (not a committed defect)
The uncommitted local change in `dc_web/pages/admin/accounting/ar/receive/index.vue` (not part of the loan work) offers, after saving a receipt, to change the POS sale's payment to `receiptData.paymentId || 1`. A receipt without a `paymentId` would set the sale to payment id 1, which may not exist or may be CASH. It is worth reviewing before that change is committed.
