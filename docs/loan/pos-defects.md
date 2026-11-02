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
| 6 | Balance sheet Mode B subtracts voided and cancelled receipts from open invoices | Balance sheet | High: AR understated | Active-receipts filter only when `BS_INCLUDE_LOAN_BOOK` is on (§10); void-date caveat |
| 7 | GL cash batch treats every non-cash receipt method as bank account 1002 | GL batch | Low (latent) | Loan receipts are marked `posted` |
| 8 | AR receipt search uses `Op.iLike` (PostgreSQL only) on MariaDB | AR API | Medium: search filter fails (not run, read from code) | None needed |
| 9 | AR invoice lines from a POS order copy line-currency amounts while the header is in base (no line currency column); dc_pos sends rate 1 and no line currency | AR / sales | **Critical, confirmed by sandbox test**: the AR batch posted a USD 15,000 car (LAK 315,000,000) as LAK 15,000 and marked the invoice posted | Loan allocates its receipts from the header base |
| 10 | An invoice saved after its due date becomes `overdue` (model hook), and the AR posting batch only selects `sent`/`paid` | AR / GL batch | High, observed in the sandbox: such an invoice is never posted to the GL | None needed |
| 11 | The POS `uploads/` folder is served publicly, with no login | Security / file storage | **High (security)**: anyone who knows or guesses a file URL can download uploaded images and documents, including applicant photos | Loan documents are stored in a private folder (`LOAN_DOCUMENT_DIR`) and downloaded only through a permission-checked route (Phase 5 B1) |
| 12 | Database export and import need only a login, no permission | Security / backup | **Critical (security), reproduced on a local sandbox**: any logged-in user, a cashier included, can download the whole database, overwrite it with an uploaded `.sql` file, **and run OS shell commands on the API host** through the `mysql` client; the upload sits in the public `uploads/` folder while it is restored. Full brief: `pos-defect-12-brief.md` | None possible in the loan module (it bypasses every loan permission). The Phase 6 runbook takes backups with `mariadb-dump`, never through this screen |
| 13 | User routes mounted with no authentication; passwords stored in plaintext | Security / auth | **Critical (security), reproduced on a local sandbox**: `POST /user_i`, `PUT /user_e`, `GET /user_f` have no `validateToken`, so anyone can create/update/list users with no login; `user.cus_pass` is plaintext, so one export (#12) yields every password | Loan routes are all behind `validateToken` + permission; found while confirming #12 |

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

**Partly addressed on the loan branch (2026-10-31):** that filter is applied **only when `BS_INCLUDE_LOAN_BOOK = 'true'`** (phase4-report §10). With the switch off, the report is identical to `main` and the defect remains, which a test checks.

**Caveat: void date.** Receipts have no void or cancel date; the only trace is `updatedAt`, which any later edit also changes. With the filter, a receipt voided *after* the as-of date stops counting for that earlier date too.
- **Example:** a receipt that was active on 31 March and voided on 15 April no longer reduces the invoice in a balance sheet re-run "as of 31 March". AR as of 31 March then shows higher than it was on that date.
- An exact as-of figure needs a `voidedAt` / `cancelledAt` column, set by `voidReceipt` / `cancelReceipt` and cleared by `reactivateReceipt`. The filter would then become "active, or voided/cancelled after the as-of date".
- Until then, balance sheets re-run for past dates can differ from the ones printed at the time whenever receipts were voided in between. Without the filter (switch off, or `main`), the error goes the other way: voided receipts are subtracted for every date.

See phase4-report §9.3 and §10 for how this ties to the DISB reversal.

## 7. GL cash batch treats every non-cash receipt as bank 1002
**Evidence:** `dc_api/src/GL/cashPostingService.js` (module `AR_RECEIPT`) posts unposted active receipts with Dr bank / Cr AR. Any method other than `cash` goes to bank account 1002 (fallback by name, then 1000).

**Effect:** latent. A receipt with method `other` (for example a contra settlement) would be posted as bank money if it were ever unposted.

**Suggested fix:** map `other` to an explicit clearing account (SPF) or skip it with a warning in the preview.

**Loan workaround:** loan receipts are created with `glPostingStatus = 'posted'`, and a test checks that the batch preview does not pick them up.

## 8. AR receipt search uses `Op.iLike` on MariaDB
**Evidence:** `dc_api/src/AR/receive/header/controller.js` `findAll` and `findAllForPL` (search filter): `{ receiptNumber: { [Op.iLike]: … } }`. `Op.iLike` is PostgreSQL only; with the MariaDB dialect it produces SQL MariaDB rejects. **Read from code; not run.** The AR receipt screen searches client-side, so it does not send `search`.

**Suggested fix:** use `Op.like` (MariaDB comparisons are case-insensitive under the default collations).


## 9. AR invoice lines from a POS order are in the line's currency, the header in base, and lines have no currency column
**Evidence**
- **POS sale lines carry their own currency.** `dc_web/layouts/pos.vue` `generateSaleLine` (≈1470–1505) sets `currencyId = product.saleCurrencyId` and `exchangeRate = currency.rate`, with `price` and `total` in that currency. The sale header `total` is the lines converted to local (`grandTotal`, ≈1562), with header `currencyId` = local.
- **The invoice from a POS credit order** (`dc_api/src/AR/invoice/header/controller.js:684–732`) copies the header's base `total`, currency and rate. **Each invoice line copies the sale line's `price` and `total` unchanged** (`unitPrice: line.price`, `lineTotal: line.total`). `arInvoiceLine` has no currency column.
- **Example:** a USD 15,000.00 car at 21,000. Invoice header LAK 315,000,000, invoice line 15,000.00. The line total does not add up to the header, and nothing says the line is in USD.
- **Related, dc_pos** (`lib/service/sale_service.dart`, `restaurant_pos_screen.dart:696–702`, `merchant_pos_screen.dart:707`): the header is sent with the app's active currency and `exchangeRate: 1`, and `SaleLine` has no currency or rate. A sale in a non-base active currency is therefore stored with rate 1.
- **The server** (`sales/controller.js` create and complete paths) stores the totals as sent, with no recomputation or consistency check between the header and its lines.

**Sandbox test (2026-10-31): CONFIRMED.** Test *POS defect 9 (evidence only, POS code unchanged)* in `dc_api/test/loan/postingTests.js` runs on `dcommerce_loan_test` with the real endpoints and no POS code changed.
- **Steps:**
  - a credit sale is created the way the POS screen sends it: header LAK 315,000,000 at rate 1; one line USD 15,000.00 at rate 21,000, with both header keys set as `assignHeaderId` does;
  - the invoice is created through `POST /api/ar-invoices/from-order/:saleHeaderId`;
  - the AR batch runs through `POST /api/gl/posting/batch` (`module: 'AR'`).
- **Output:**
  ```
  invoice AR-INV-2026-00012: header 315000000.00 (currency 1, rate 1.00); lines 15000.00 (no currency column)
  GL rows before batch: 0; after AR batch: 1 row(s), localDebit total 15000 (currency 1, rate 1.000000); expected for the car: 315000000
  invoice glPostingStatus after batch: posted
  ```
- **Severity: Critical.**
  - AR and revenue in the GL are understated by 314,985,000 for this one car, which is 99.995% of the sale.
  - The invoice is then marked `posted`, so no later batch corrects it.
  - The error is silent: there is no warning, the posting is balanced, and the trial balance still balances.
  - It affects every credit sale with a foreign-currency line that goes through the AR batch. It does **not** depend on the loan module.

**Effect**
- Invoices from POS orders are created `glPostingStatus = 'unposted'`. The AR posting batch (`GL/postingService.js:170–200`) posts **per line** `lineTotal × header exchangeRate`, which posts foreign line amounts as LAK (confirmed above). Whether such invoices are also covered by the sale's own GL posting is a separate question for the POS owner.
- AR receipt allocations to invoice lines (`arReceiveLine`) compare base receipt amounts with foreign line amounts.
- Invoice printouts and line reports show foreign amounts under a LAK header.

**Suggested fix**
- Add `currencyId` and `exchangeRate` (and optionally `baseLineTotal`) to `arInvoiceLine`, and fill them from the sale line.
- Post AR lines at the line's own rate (or post the header total and keep lines informational).
- Validate on the server that header total = Σ lines converted at their stored rates.
- In dc_pos, send each line's currency and rate, and the header rate of the active currency.

**Loan workaround (Phase 5 A8):** for a base-currency invoice, the loan proposes the contract principal from the sale line's currency amount and line rate. It allocates its DISB receipt from the invoice header's base (in proportion to each line's base), and never compares base amounts with raw line totals (addendum §8.4).


## 10. Invoices saved after their due date become `overdue` and are never posted by the AR batch
**Evidence**
- `dc_api/src/AR/invoice/header/model.js:111–115` (`beforeSave` hook): when `dueDate` is in the past and the status is `draft` or `sent`, the status is set to `overdue` on **every save**, including creation.
- The AR posting batch (`GL/postingService.js`, AR branch) selects only `status IN ('sent','paid')` and `glPostingStatus = 'unposted'`.
- **Observed in the sandbox** (first run of the #9 test, invoice date 2001-02-03, due date 30 days later): the invoice was created as `overdue`, and the batch answered "No unposted AR records found in the date range". Nothing was posted.

**Effect:** a credit-sale invoice that is created, or saved again, after its due date before the AR batch runs never reaches the GL. Late batch runs make this likely. It is related to the invoice picker excluding `overdue` (phase4-report §8.4).

**Suggested fix:** include `overdue` in the AR batch selection (the GL posting should not depend on collection status), and do not change the status of an unposted invoice in a save hook.



## 11. The POS `uploads/` folder is served publicly, with no login (security)
**Evidence** (read from code on `main` at `1f63709`; not exploited or tested against any server)
- `dc_api/src/app.js:14`: `app.use('/uploads', express.static('uploads'))` is registered before any router, and before `Router.authenticate(app)` (line 256). Every file under `uploads/` is served to anyone, with no token and no permission check.
- What lands there:
  - `src/middleware/multerConfig.js:10–12, 53–59`: field `images` goes to `uploads/images`, field `documents` to `uploads/documents`;
  - `src/middleware/multerConfigApplicant.js:12–13, 49–50`: applicant photos go to `uploads/applicants`.
- File names are `<field>_<Date.now()>_<random suffix><original extension>`. The timestamp narrows the guessing; the random suffix's strength was not reviewed. Names can also leak through API responses, logs and shared links, and a leaked URL never expires.
- CORS is open (`app.use(cors())`, line 12), so any web page can request those files too.

**Effect:** uploaded documents (contracts, ID cards, applicant photos) are readable without authentication by anyone who obtains or guesses a URL. This is personal data. Permissions set in the POS UI do not protect these files.

**Loan workaround (Phase 5 B1):** loan account documents never go into `uploads/`. They are stored under `LOAN_DOCUMENT_DIR` (default `./private/loan-documents`, which is not served statically), with random 32-hex names, and are downloaded only through `GET /api/loan/documents/:docId/file`, which checks the `LN_DOCUMENT` VIEW permission. For a production install, `LOAN_DOCUMENT_DIR` should point outside the application folder (Phase 6 runbook).

**Suggested fix (separate POS task):** remove the public static route; serve files through an authenticated route that checks the caller's right to the record the file belongs to; move existing files outside the web root; use long random names; and review which existing URLs are stored in the database or have been shared.


## 12. Database export and import need only a login, no permission (security)
**→ Full standalone fix brief, for a developer or fresh session working off `main`: [`pos-defect-12-brief.md`](pos-defect-12-brief.md).** It has the exact routes, the minimal fix with tests, and the proxy-level stopgap.

**Evidence** (read from code on `main` at `1f63709`; **reproduced on a local sandbox copy**, `dcommerce_loan_test`, 2026-11-02 — never a customer or remote database)
- `dc_api/src/app.js:221` mounts `/api/database` (`src/databaseBackup/router.js`).
- `src/databaseBackup/router.js:30` `GET /export` and `:33` `POST /import` use only `validateToken`. There is no `checkRole`/permission or group check, so any valid user token is enough. `validateToken` also never checks `isActive`.
- `GET /export` (`controller.js` `exportDatabase`, ~line 115) streams a full `mysqldump` of the database as a download. That covers every customer, loan, price, user row and audit row in that database.
- `POST /import` (`router.js:8–27`, `controller.js` `importDatabase`, ~line 172) accepts any file named `*.sql` (extension check only, no size limit) and pipes it into the **interactive `mysql` client** against the live database.
- The uploaded file is stored as `uploads/restore_<Date.now()>_<original name>` and deleted only when the restore ends. While it runs, it is inside the folder served publicly without login (#11).

**Confirmed on the sandbox:** `GET /export` with a **cashier** token, an **inactive** user's token and a **no-group** user's token each returned **200 and a full 19.8 MB SQL dump**; only a missing/invalid token gave 401. `POST /import` with a cashier token returned **200 "Database restored successfully"** and the statements ran. Uppercase, trailing-slash, double-slash and percent-encoded path variants without a token all gave 401, so the token is the entire control.

**Escalation — OS command execution, not just SQL:** the import pipes the file into the interactive `mysql` client, which runs its own `\!` backslash command from stdin as a **shell command on the API host**. The sandbox probe uploaded a `.sql` file with a `\!` line and the OS command ran (a marker file appeared). So `/import` is arbitrary command execution on the server for any logged-in user.

**Effect:**
- Any account, including a cashier or a compromised low-privilege login, can take a full copy of the business data (personal data included) or destroy or alter it.
- Any such account can run shell commands on the API host via `/import`.
- Loan permissions, maker-checker and audit can all be bypassed by an import.
- A restore in progress exposes the dump under a guessable public URL (#11).

**Loan workaround:** none possible inside the loan module. The Phase 6 runbook (step 2) takes backups with `mariadb-dump` on the server and tells operators not to use this screen.

**Suggested fix (separate POS task off `main`, urgent):** see the brief. In short — gate both routes with `checkRole(['admin'])` (the existing `main` primitive), put it before the multer upload, add a size limit, store uploads outside `uploads/`, audit every call with user and IP, and consider a second-person confirmation for import or removing import from the web API. **Proxy-level stopgap** (apply now, no code change): block `/api/database/` at the reverse proxy — nginx/Apache snippets in the brief, §4.

---

## 13. User management routes have no authentication; passwords in plaintext (security)
**Evidence** (read from code on `main` at `1f63709`; **reproduced on a local sandbox**, 2026-11-02)
- `src/router/router.js` `user(app)` registers `POST /user_i` (create user), `PUT /user_e` (update user) and `GET /user_f` (fetch users) **directly on the app with no `validateToken`**. (`app.js` mounts these via `Router.user(app)`.)
- `src/user/controller.js` stores and compares `user.cus_pass` in plaintext; the `bcrypt` hash/compare lines are commented out. In the sandbox, every `cus_pass` was plaintext.

**Confirmed on the sandbox:** anonymous (no token at all) `GET /user_f` returned **200 with a user list**; anonymous `POST /user_i` and `PUT /user_e` returned **200**. (`GET /me` correctly returned 401.)

**Who calls these routes** (read-only search of the front-ends, so you know whether a proxy block is safe):
- **dc_web — one screen, `pages/admin/member/index.vue`** (the "ສະມາຊິກ"/Members admin screen) calls all three: `GET /user_f` to list (line 251), and `POST /user_i` / `PUT /user_e` to create and update via `urlpath = '/user_'` (lines 222–236). It also shows and sends `user_pass` in plaintext.
- **dc_pos** (Flutter) does **not** call them; it uses only `userLogin` (login) and its own `user_info` routes.
- **dc_mobile**: not present in this workspace.
- So a **proxy block on `/user_f`, `/user_i`, `/user_e` is NOT safe** — it breaks the dc_web Members screen. The right fix is to require a token, not to block the path. (The screen runs behind the nuxt `auth-next` login, which attaches the bearer token to axios, so adding `validateToken` will not break it for a logged-in admin.)

**Effect:**
- Anyone who can reach the API can list, create and modify user accounts with no login — including creating an admin.
- Combined with #12, a single export hands an attacker every user's password directly, because they are not hashed.

**Loan workaround:** all loan routes are behind `validateToken` plus a permission (T4). This was found while confirming #12 and is outside the loan module; file and fix it off `main`.

**Suggested fix (separate POS task off `main`):**
- **Require auth on the routes:** add `validateToken` (and ideally `checkRole(['admin'])`) to `/user_f`, `/user_i`, `/user_e` where `user(app)` registers them in `src/router/router.js`. The dc_web Members screen keeps working for a logged-in admin; test that anonymous now gets 401 and a non-admin 403.
- **Hash passwords with a migration plan:**
  1. switch create/update (`src/user/controller.js`) and login (`src/user/service.js` `getUserById`) to `bcrypt.hash` / `bcrypt.compare` (the `bcrypt` lines are already present but commented out);
  2. make login accept both for a transition: if the stored value is not a bcrypt hash, compare as plaintext and, on success, re-save it hashed (upgrade-on-login);
  3. optionally a one-off script that hashes any remaining plaintext `cus_pass` after a grace period;
  4. never return `cus_pass` from `/user_f` (the Members screen currently reads it) — drop it from the payload.
- Because passwords are currently plaintext, treat them as already exposed if #12 was ever used (see `pos-defect-12-brief.md` §5) and force a reset.

---

### Also noted (not a committed defect)
The uncommitted local change in `dc_web/pages/admin/accounting/ar/receive/index.vue` (not part of the loan work) offers, after saving a receipt, to change the POS sale's payment to `receiptData.paymentId || 1`. A receipt without a `paymentId` would set the sale to payment id 1, which may not exist or may be CASH. It is worth reviewing before that change is committed.
