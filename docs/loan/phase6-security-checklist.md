# Loan module: security review checklist (Phase 6)

**Status:** first pass filled from code reading on `feature/loan-module`, 2026-11-01 (dc_api `f0d5e27`, dc_web `0633847ca`).

**Scope:** the loan module only (`dc_api/src/loan`, its migrations, seeds and scripts, `dc_web` loan pages, components and stores). POS defects found on the way are listed in `pos-defects.md` (#11 public `uploads/`, #12 database export/import) and are not fixed here.

**How to use:** re-run each check on the build you are about to deploy. Fill the *Result* column (PASS / FAIL / ACCEPTED-RISK, with initials and date). The *Evidence* column says where to look. **[T4]** marks checks the planned route-permission test will automate.

Legend for the first pass: ✅ holds in code as read; ⚠️ gap or risk (see §9); ⏳ needs a test or a person to confirm.

---

## 1. Authentication and permissions on every route
All 73 routes are in `dc_api/src/loan/router.js`, mounted at `/api/loan` (`src/app.js:239`).

| # | Check | Evidence | First pass |
|---|---|---|---|
| 1.1 | Every route requires a valid token | `router.use(validateToken)` at `router.js:20`, before any route | ✅ |
| 1.2 | Every route has `can(function, action)` except an explicit allow-list | allow-list: `GET /status` (banner state only, no parameter details) and `GET /pending` (lists unauthorized records, **filtered by the caller's VIEW grants** in `paramController.listPending`) | ✅ (71 of 73 have `can`). **T4 passes:** `test/loan/routePermissionTests.js` audits the real router against `routeManifest.js`, so a new or changed route fails until the manifest changes |
| 1.3 | The permission comes from the database, not the token | `src/security/middleware.js:12–26`: the user's `groupId` is read from `user`; the function must be active and the action applicable; then a `sec_group_grant` row is required | ✅ |
| 1.4 | Unknown entity/function is refused | `requirePermission`: `if (!code) return 404 'Unknown function'` (generic `/params/:entity` routes) | ✅ |
| 1.5 | An inactive user is refused | `hasPermission`: `user.isActive === false` → false | ✅ |
| 1.6 | The action fits the verb | GET → VIEW everywhere. Mutations → CREATE / EDIT / DELETE / AUTHORIZE. Two POSTs use VIEW because they write nothing: `POST /products/:id/simulate` and `POST /accounts/:id/preview/:kind` (dry run, rolled back); both return computed results only | ✅ T4 proves it: simulate and all four previews leave row counts in every `ln_` table, `general_ledger` and `transactionEntry` unchanged, and checksums of `ln_account`, `ln_schedule`, `ln_numbering_sequence` and `ln_account_balance` the same |
| 1.7 | Maker ≠ checker, enforced on the server | transactions: `transactionService` authorize refuses `makerId === checkerId` unless `LOAN_ALLOW_SELF_AUTHORIZE = 'true'`; parameters: `paramService` authorize/changes; applications: approve | ✅ (tests in `postingTests.js` "makerChecker" and Phase 2A tests) |
| 1.8 | `LOAN_ALLOW_SELF_AUTHORIZE` stays `false` | seed default `false`; runbook step 8.12 | ✅ ⏳ per deployment |
| 1.9 | Per-kind control of transaction requests | **one** function `LN_TRANSACTION` CREATE covers every kind: REPAYMENT and also WAIVE, WRITE_OFF, REPOSSESS, REVERSAL requests. A user who can take payments can also *request* a write-off (a checker must still authorize it) | ⚠️ G1 |
| 1.10 | Booking an account | `POST /applications/:id/book` needs `LN_ACCOUNT` CREATE; approval needs `LN_APPLICATION` AUTHORIZE | ✅ |
| 1.11 | The web hides buttons without a grant | `store/loan.js` `can()`; e.g. the Payment button `accounts/_id.vue:13`; the pending queue disables authorize for the maker (`pending/index.vue:27`). The UI is a convenience only; 1.2/1.3 are the control | ✅ |
| 1.12 | Route matrix per role | for each proposed group (`phase6-uat.md` §1), every route is either allowed or 403 as designed | ✅ **T4:** LOAN_CASHIER 19 allowed / 406 refused, LOAN_MANAGER 231 / 194, LOAN_CHECKER 270 / 155 (each route once per parameter entity). No token gives 401 and a bad token 403 on all 73; a user with no grants, no group, or inactive gets 403 on all 71 guarded routes |

**Full route list** (function, action), for T4 and for a reviewer:

| Area | Routes |
|---|---|
| Banner, pending | `GET /status` (none), `GET /pending` (filtered by VIEW grants) |
| Go-live checklist | `GET /checklist` (LN_CHECKLIST VIEW), `POST /checklist/:itemKey/confirm` (LN_CHECKLIST AUTHORIZE) |
| Tax | `GET/PUT /tax-profile` (LN_TAX_PROFILE VIEW/EDIT), `POST /tax-profile/confirm` (AUTHORIZE), `PUT /components/:id/tax` (LN_COMPONENT EDIT, through maker-checker), `GET /reports/vat` (LN_VAT_REPORT VIEW) |
| Products | `GET /products`, `GET /products/:id`, `POST /products/:id/simulate` (LN_PRODUCT VIEW); `POST /products`, `POST /products/:id/clone` (CREATE); `PUT /products/:id` (EDIT); `GET /products/:id/accounting-check` (LN_ENTRY_RULE VIEW) |
| Applications | `GET /applications`, `GET /applications/:id`, `GET /sales/:saleHeaderId/financing-proposal` (LN_APPLICATION VIEW); `POST /applications` (CREATE); `PUT /applications/:id`, `POST …/submit` (EDIT); `POST …/approve`, `POST …/reject` (AUTHORIZE); `POST …/book` (LN_ACCOUNT CREATE) |
| Accounts | `GET /accounts`, `GET /accounts/:id`, `…/summary`, `…/schedule`, `…/history`, `…/statement`, `POST …/preview/:kind`, `GET /print-templates/:code` (LN_ACCOUNT VIEW) |
| Transactions | `GET /accounts/:id/transactions`, `GET /transactions/pending` (LN_TRANSACTION VIEW); `POST /accounts/:id/transactions` (CREATE); `POST /transactions/:txId/authorize`, `…/reject` (AUTHORIZE) |
| Documents | `GET /accounts/:id/documents`, `GET /documents/:docId/file` (LN_DOCUMENT VIEW); `POST /accounts/:id/documents` (CREATE) |
| EOD | `GET /eod/status`, `GET /eod/logs` (LN_EOD VIEW); `POST /eod/run` (LN_EOD CREATE) |
| FX | `GET /exchange-rates/effective` (LN_EXCHANGE_RATE VIEW); `POST /exchange-rates/copy-pos` (CREATE, creates a PENDING rate) |
| Reports | `GET /reports/overdue` (LN_COLLECTION VIEW); `GET /reports/portfolio`, `aging`, `npl`, `provisions`, `gl-tieout` (LN_REPORT VIEW) |
| Master data | `GET /lookups`, `/udes`, `/components`, `/provision-rules`, `/status-rules`, `/accounting-metadata`, `/sequences`, `/holiday-calendars` (their own function, VIEW); `PUT /provision-rules/:id` (LN_PROVISION EDIT, through maker-checker) |
| Parameter Studio | `/params/:entity[/:key]` GET/POST/PUT/DELETE and `…/authorize`, `…/reject`, `…/bulk-authorize`: the entity's own function (`paramRegistry`) with VIEW/CREATE/EDIT/DELETE/AUTHORIZE |
| Changes, audit | `GET /changes`, `GET /audit-log` (LN_AUDIT_LOG VIEW); `POST /changes/:id/authorize`, `…/reject` (the changed entity's function, AUTHORIZE) |

---

## 2. Data scope (who can see which records)
| # | Check | Evidence | First pass |
|---|---|---|---|
| 2.1 | Branch / showroom scoping | none. `ln_account.branchId` exists (default 1), but no route filters by the caller's branch; anyone with `LN_ACCOUNT` VIEW sees every account | ⚠️ G2 **known limitation for go-live** (customer question C2 in the runbook) |
| 2.2 | Direct object access (`/accounts/:id/*`, `/documents/:docId/file`, `/transactions/:txId/*`) | the grant is checked; the id is not checked against any scope (follows from 2.1). Ids are sequential integers | ⚠️ G2 |
| 2.3 | List endpoints are bounded | `GET /accounts` and reports take filters; check limits on very large books | ⏳ in the volume runs (`phase6-eod-performance.md`) |
| 2.4 | Customer personal data in responses | account summary and collection list return customer name and phone (needed for collection); no ID-card numbers in loan responses | ✅ ⏳ confirm the field list in T4 |

---

## 3. Documents
| # | Check | Evidence | First pass |
|---|---|---|---|
| 3.1 | Stored outside the public web root | `documentService.js:27`: `LOAN_DOCUMENT_DIR`, default `./private/loan-documents` (not served by `express.static`, which serves only `uploads/`) | ✅. Production must set an absolute path outside the app folder (runbook step 3) |
| 3.2 | File type checked three ways | extension, declared mimetype and magic bytes (PDF/JPG/PNG only) | ✅ (tests in `screenApiTests.js`) |
| 3.3 | Size limit | SPF `LOAN_DOC_MAX_MB` (5); multer memory storage, single file | ✅ |
| 3.4 | No personal data or user input in stored names | `crypto.randomBytes(16)` hex + fixed extension (`documentService.js:62`) | ✅ |
| 3.5 | No path traversal on download | the stored name is re-validated against `^[0-9a-f]{32}\.(pdf\|jpg\|png)$` before `path.join` (`documentService.js:86–87`) | ✅ |
| 3.6 | Download is an attachment with the stored content type | `res.download(path, downloadName, { headers: { 'Content-Type': mimeType } })` (`reportController.js:32`) | ✅. Consider also `X-Content-Type-Options: nosniff` (G6) |
| 3.7 | Separate permission for documents | `LN_DOCUMENT` VIEW/CREATE, granted to SUPER_ADMIN only by default | ✅ |
| 3.8 | Upload audited | `lnAuditLog` `account-document` CREATE with user and IP (`documentService.js:73`) | ✅ |
| 3.9 | Download audited | **no audit row on download** | ⚠️ G3 |
| 3.10 | No delete or replace route | none exists; documents are append-only | ✅ |
| 3.11 | Backups include the document folder | runbook step 3 | ⏳ per deployment |
| 3.12 | POS `uploads/` (#11) and DB import (#12) | out of loan scope; both bypass loan controls | ⚠️ POS defects #11, #12 |

---

## 4. Input validation
| # | Check | Evidence | First pass |
|---|---|---|---|
| 4.1 | Money never as float | DECIMAL(20,4) columns; amounts parsed as decimal strings into BigInt minor units (`src/loan/decimal.js`, `engine/num.js`); exact reads through `db/exact.js` | ✅ |
| 4.2 | Amount rules | positive; within the product's per-currency min/max (`currencyAmounts.limitProblemsFor`); rounded to the currency rule | ✅ |
| 4.3 | Dates | no future value dates; backdating at most `LOAN_MAX_BACKDATE_DAYS` (0) (`posting/guards.js:43–56`) | ✅ |
| 4.4 | Enumerations and unknown fields | unknown transaction kind → 400 (`transactionService.js:220`); unknown param entity → 404; applications refuse unknown fields with 400 (`applicationService.js:34–35`); master-data controllers keep only allow-listed fields via `pick(...)` (`masterController.js`) | ✅ ⏳ T4 sends unknown fields to every mutation and checks they are refused or dropped |
| 4.5 | Rates | exchange rate DECIMAL(20,8) > 0; overrides only within `LOAN_FX_OVERRIDE_TOLERANCE_PCT` (0 = off); implied-rate tolerance check (`LOAN_FX_IMPLIED_RATE_*`) | ✅ |
| 4.6 | Double submit | `Idempotency-Key` header on transaction create (`transactionController.js:12`); the payment dialog sends a key per submit | ✅ |
| 4.7 | Concurrent edits | optimistic locks (`optLockVersion`) on accounts and balances → 409 "Record was changed by another user" | ✅ |
| 4.8 | Request body size | `express.json()` default limit (100 kB) for the whole POS app (`src/app.js:13`); documents go through multer with their own limit | ✅ |
| 4.9 | SQL injection | Sequelize parameters throughout; the one raw query in `reportService.js` (GL tie-out, line 409) uses named replacements | ✅ ⏳ a reviewer should grep `src/loan` for every `sequelize.query` and confirm |
| 4.10 | Test-only hooks | `X-Loan-Test-Fail-At` is honored only when `LOAN_TEST_HOOKS=1` **and** the database name ends in `_test` (`guards.js:82–89`) | ✅. The runbook forbids setting the variable |

---

## 5. Error messages
| # | Check | Evidence | First pass |
|---|---|---|---|
| 5.1 | No stack traces or SQL to the client | `errors.js` `handle()`: a known `LoanError` returns its message; anything else returns 500 "Internal error; see server log" and the stack goes to the log only | ✅ |
| 5.2 | Duplicate and lock errors are generic | unique → 409 "Duplicate record (fields)"; optimistic lock → 409 | ✅ |
| 5.3 | Messages don't reveal other customers' data | messages name the caller's own account, amounts and rules; no lookups of other customers | ✅ ⏳ T4 spot-check |
| 5.4 | Permission errors | 403 names the function and action (`Forbidden: CREATE on LN_TRANSACTION…`). This reveals function codes but no data. Accepted | ✅ |
| 5.5 | Log content | the server log holds stacks and request URLs, but no request bodies with document content. The logger writes `logs.log` in the working directory, so protect that file | ⏳ per deployment |

---

## 6. Audit coverage (`ln_audit_log`: entity, action, values, user, IP, time)
| Event | Audited? | Evidence |
|---|---|---|
| Parameter create / edit / delete / authorize / reject (all Studio entities, including products, rules, mappings, rates, templates, provision rules, component tax) | ✅ | `paramService.js` (12 writes) |
| Pending change authorize / reject | ✅ | `paramService.js` |
| Application create / submit / approve / reject | ✅ | `applicationService.js` (6) |
| Account booking | ✅ | `accountService.js:133` |
| Transaction create / authorize / reject / post | ✅ | `transactionService.js` `audit()` (5) |
| Tax profile, go-live checklist confirmations | ✅ | `taxProfileService.js`, `checklistService.js` |
| Document upload | ✅ | `documentService.js:73` |
| Security grants (seeded) | ✅ | `sec_audit_log` (POS security module) |
| **Document download** | ⚠️ G3 | none |
| **EOD run (who started it)** | ⚠️ G4 | `ln_batch_log` keeps date, job, counts and time, but **no user**. The lock row names the user but is deleted when the run ends. |
| **Report views and exports** | ⚠️ G5 (low) | none (read-only) |
| Boarding steps (planned) | ⏳ | required by `phase6-boarding-design.md` |

---

## 7. Secrets and configuration
| # | Check | Evidence | First pass |
|---|---|---|---|
| 7.1 | No passwords in loan docs, patches or logs | the POS diff patches are redacted (`phase*-pos-diffs.patch`); a scan of each doc before commit | ✅ |
| 7.2 | DB connection fallbacks in `src/config/dbClient.js` | contain literal fallback values (POS code, not loan); never print or grep `src/config` | ⚠️ POS risk, noted |
| 7.3 | JWT secret | depends on the configured port (seen while signing test tokens in Phase 5B); a reviewer should confirm how production sets it | ⚠️ G7 (POS) |
| 7.4 | CORS | `app.use(cors())` open to every origin (POS-wide) | ⚠️ G8 (POS) |
| 7.5 | Remote-DB guard for loan scripts | `dbGuard.js`: non-local refused unless `ALLOW_REMOTE=1 CONFIRM_DB=<db>` | ✅ |
| 7.6 | Staging copies don't call real integrations | runbook step 2b | ⏳ per staging |

---

## 8. Dependencies
| # | Check | Command | First pass |
|---|---|---|---|
| 8.1 | dc_api | `npm audit --omit=dev` (report only, no `audit fix` on the branch) | ⏳ to run at review time |
| 8.2 | dc_web | same | ⏳ |
| 8.3 | Loan-added packages | none. The loan module uses packages already in the POS (`multer`, `mariadb`, `sequelize`) | ✅ |

---

## 9. Gaps and known items (to decide before go-live)
| ID | Gap | Severity | Proposal |
|---|---|---|---|
| G1 | `LN_TRANSACTION` CREATE covers every kind, so a cashier who can take payments can also request write-offs, waivers and reversals (a checker still has to authorize them) | Medium | Phase 7: per-kind function codes (e.g. `LN_TXN_PAYMENT`, `LN_TXN_ADJUST`, `LN_TXN_WRITEOFF`), or a kind allow-list per group |
| G2 | No branch / showroom data scoping; sequential ids | Medium (**known limitation for go-live**; customer question C2) | Phase 7 if the customer has several showrooms on one database |
| G3 | Document downloads are not audited | Low–Medium (personal documents) | add an audit row on download (small change; not done, T4 is test code only) |
| G4 | The EOD run's user is not kept | Low | add `startedBy` to `ln_batch_log`, or an audit row per run |
| G5 | Report views are not audited | Low | optional |
| G6 | No `X-Content-Type-Options: nosniff` on document downloads | Low | add the header |
| G7 | JWT secret handling (POS) | Review | confirm the production setting; out of loan scope |
| G8 | Open CORS (POS) | Review | out of loan scope |
| G9 | 4 Phase 5 tables use `utf8mb4_general_ci`, the other 72 `utf8mb4_unicode_ci` | Low (correctness, not security) | a later migration aligns them (runbook step 5 note) |
| G10 | Reversal journal legs don't carry `glRecordId`; the tie-out finds them through `ln_pos_link` | Low (traceability) | a later cleanup (Phase 5 report B) |
| G11 | Most transaction kinds have no entry screen (API only) | Operational | build them, or train staff on the documented calls (runbook step 10) |
| — | POS #11 public `uploads/`, POS #12 database export/import without permission | **High / Critical (POS)** | separate POS task; #12 urgent |
