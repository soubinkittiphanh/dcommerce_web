# Loan Module — Phase 2A Report

Date: 2026-10-29. Branch `feature/loan-module` in `dc_api` and `dc_web` (separate repos, **not pushed**).
Status: **Phase 2A complete and waiting for review. Phase 2B (accounting entry rules and GL mappings) is still held — 0 rows seeded.**

Related notes: `docs/loan/phase2a-audit.md` (audit of the Antigravity work), `docs/loan/rev5-decisions.md` (§4 updated: VAT from the POS tax row).

---

## 1. What was built

### Backend (`dc_api`, 11 commits on top of `BEFORE CLAUDE`)
| Area | What |
| :--- | :--- |
| Safety | `src/loan/dbGuard.js`: loan seeds, migrations and tests refuse any non-local DB unless `ALLOW_REMOTE=1` and `CONFIRM_DB=<name>`. It checks the config the models really use (`src/config/env.js` → `db`). `dbClient.js` `env_auto` and `dev` accept `DB_HOST/DB_PORT/DB_USER/DB_PASSWORD/DB_NAME` overrides (defaults unchanged). |
| Migrations | The original `20261028_…tables.sql` is unchanged (it already ran on the remote). Added: its DOWN script, `20261029_loan_phase2a_corrections.sql` + DOWN, a SELECT-only remote check, and `loan_migrate.js status\|up\|down --yes [--all]`. |
| Schema corrections | Maker-checker columns on all 39 parameter tables (new rows `PENDING`); `ln_param_change` (pending edits to authorized rows); `ln_checklist_confirmation`; `ln_tax_profile.posTaxId` and `ln_tax_master.posTaxId` (VAT rate read from POS `tax`, literal 7 % defaults removed); tax master unique `(taxCode, effectiveFrom)`; MariaDB-safe unique keys on generated columns for `ln_role_gl_mapping` and `ln_accounting_entry_rule`; `glBatchId` as batch number; provision `policyNote`; account status default `NORMAL`; `branchId` documented as `location.id` (no FK); audit log string keys. |
| Generic RBAC | `sec_action`, `sec_function`, `sec_group_grant` (userGroup acts as the role). `src/security/`: `requirePermission(functionCode, action)` middleware usable by any module, idempotent grant helpers (groups by code), `/api/security/my-permissions`, grant matrix API guarded by `SEC_GRANT`. |
| Maker-checker | `paramService`: create → PENDING; edits of AUTHORIZED rows become pending changes (products get a new PENDING version with copied children); maker ≠ checker unless SPF `LOAN_ALLOW_SELF_AUTHORIZE = 'true'` (each self-authorization audited as `SELF_AUTH`); optimistic-lock check; every mutation in `ln_audit_log`. `paramReader.getEffective` for engines (AUTHORIZED + effective-dated only). |
| Validation | Registry-driven express-validator: decimal strings (no floats), rates 0..1, lookup/entity references, whitelisted fields, cross-field rules (min ≤ max, DEDUCTED fees not allowed with invoice settlement). Errors never expose SQL. |
| Tax & checklist | `PUT /tax-profile` ignores `confirmationStatus`; only `POST /tax-profile/confirm` (AUTHORIZE) confirms, recording `confirmedBy/At`, and the last editor cannot confirm. Checklist items are confirmed one by one with a snapshot and reset when a related change is authorized; GL mappings stay HELD. |
| Seed | Base currency from `currency.isLocalCCY`; VAT from the default POS tax; statuses `NORMAL/WATCH/SUBSTANDARD/DOUBTFUL/LOSS/…` with 1:1 GL qualifiers; the 31 spec roles; exactly the 22 events and 42 amount tags of spec §2.2; business parameters PENDING, catalog AUTHORIZED; reconciliation of the earlier seed (audited `SEED_RECONCILE`); loan functions granted to `SUPER_ADMIN` and `ADMIN`, `SEC_GRANT` to `SUPER_ADMIN`. |
| API for screens | `/api/loan/status` (banner), `/api/loan/pending` (inbox), `/api/loan/params/:entity` CRUD + authorize/reject, `/api/loan/changes`, `/api/loan/audit-log`, enums in `/api/loan/lookups`. |
| Tests | `npm run test:loan` — 27 integration tests (see §4). |
| Fixes along the way | Loan models were registered twice; VAT report queried non-existent columns; holiday-calendar and VAT includes used missing associations (errors had been swallowed). |

### Frontend (`dc_web`, 2 commits)
| Screen / file | What |
| :--- | :--- |
| `components/loan/MasterDataTable.vue` + `common/loan/masterConfigs.js` | One config-driven component for every parameter table: list, search, status filter, create, edit (pending change for authorized rows), delete, authorize/reject, pending-change badges. ~35 tables are configs, not pages. |
| `pages/admin/loan/studio/index.vue` | Hub with tabs: Go-live checklist, Tax profile (+ component taxability), Products, Master data browser, Pending approvals inbox. Replaces the old 1,146-line page. |
| `pages/admin/loan/product/_id.vue` | Product create/edit: General, Currencies, Components, UDEs, Waterfall, Simulation (placeholder until Phase 3). Saving an authorized product creates the next version. |
| `pages/admin/security/grants.vue` | Generic user-group × function × action grant matrix. |
| `store/loan.js` | Reads the user's permissions; buttons are hidden or disabled when not granted (the API still enforces). |
| Every loan page | UNCONFIRMED banner, `layout: 'admin'`, `middleware: 'auths'`, inline Lao + English labels, dropdowns from the API only. |
| `components/AccountForm.vue`, trial balance | `Off-Balance` account type available and labelled. |

Files changed: dc_api 53 files (+3,713 / −1,527); dc_web 16 files (+1,832 / −1,127). Full list: `git diff --name-status main..feature/loan-module` in each repo.

---

## 2. How to run (local database only)

```bash
cd dc_api
export DB_HOST=127.0.0.1 DB_USER=<local user> DB_PASSWORD=<pw> DB_NAME=<local db>

node loan_migrate.js status          # what is applied
node loan_migrate.js up              # 20261028 DDL + 20261029 corrections (idempotent)
node seed_loan_phase2a_data.js       # idempotent; safe to re-run
node seed_loan_menus.js              # idempotent
node loan_migrate.js down --yes      # roll back the latest migration
node loan_migrate.js down --all --yes  # drop all ln_* (refuses if loan business data or Off-Balance accounts exist)

npm run test:loan                    # rebuilds a local *_test DB from LOAN_TEST_SOURCE_DB (default dcommerce_dev)
```
The test runner needs the `mariadb` / `mariadb-dump` CLIs with OS socket login (or `LOAN_TEST_MYSQL_ARGS`).

Web: start the API locally, then run dc_web with `BASE_URL=http://127.0.0.1:<api port>`. Without `BASE_URL`, `nuxt.config.js` points at the remote `162.35.18.246:8054`.

**Note on `.nuxt`:** dc_web tracks 32 files under `.nuxt`; a normal `nuxt dev`/`build` rewrites them. For verification I used a scratch config that imports `nuxt.config.js` unchanged and sets `buildDir` outside the repo.

---

## 3. Spec corrections applied (rev5 §5 and audit)
1. Real table list used (66 tables from the SQL + 2 added: `ln_param_change`, `ln_checklist_confirmation`; plus 3 generic `sec_*`).
2. No COALESCE in unique keys — persistent generated columns instead.
3. `branchId` on application/account/transaction (= `location.id`, no FK, by decision).
4. `resolverType` on roles; `paymentMethodId`/`bankAccountId` on transactions.
5. No global `idempotencyKey` on transactions; `ln_idempotency` unique `(endpoint, accountId, idempotencyKey)`.
6. `ln_journal_posting.transactionId` nullable; accrual ledger links to the GL batch (by batch number, like POS `general_ledger.glBatchId`).
7. No GL accounts or mappings seeded.
8. `IMMEDIATE` fee presentation present; DEDUCTED + invoice settlement rejected.
9. `Off-Balance` kept as an ENUM value (model, DB, AccountForm, TB label); BS/TB verified.
10. VAT rate from the POS tax row via `posTaxId`; VAT payable account deferred to 2B (rev5 §4 updated).
11. Statuses `WATCH`/`NORMAL`; spec §5 roles; §2.2 events and tags.

## 4. Verification actually performed
- `npm run test:loan`: **27 passed, 0 failed** — migration round trip, seed idempotency/pending state, model↔DB parity, RBAC (CASHIER refused; ADMIN/SUPER_ADMIN granted; view-only functions; 401 without token), validation, maker-checker (self-auth off/on with `SELF_AUTH`, pending changes, stale-change 409, audit), product versioning, effective dating, tax confirmation, per-item checklist with reset, grant matrix (grant/revoke, lockout refusal), banner/pending/enums endpoints, POS route regression, no SQL in errors.
- Existing scripts on the test DB: packaging ✔, platform ✔, parking 16/17 (the one failure is "parking lot full": the copied `dcommerce_dev` has no parking zones; `src/parking` is untouched).
- ESLint on all new dc_web files: 0 errors, 0 warnings. (`AccountForm.vue` has 2 pre-existing errors on untouched lines.)
- Nuxt dev compile: client and server compiled; the remaining 6 warnings are pre-existing (none in loan files).
- Browser (headless) against the local API on `dcommerce_loan_dev`, as SUPER_ADMIN, ADMIN and CASHIER: all 7 screens load; banner on every loan page; **every API call went to `127.0.0.1:18888`** (no remote host); actions match permissions (CASHIER sees "no permission" notices only; ADMIN cannot open the grant matrix; SUPER_ADMIN can edit it); dropdowns come from the API; a full UI round trip worked (ADMIN created a category, its self-authorization was refused, SUPER_ADMIN authorized it from the inbox; DB shows maker 2 / checker 1 and the audit trail).
- `git status` after each batch: only intended files; `src/config/env.js`, `src/parking/validation.js` and `logs.log` never touched or committed during Batches 2–3 (hash-verified).

## 5. Spec / handover claims that turned out to be wrong
- The migration and seeds ran on the **remote** `150.95.31.23/dcommerce_demo`, not on local MariaDB (untouched by me; see `20261029_loan_phase2a_readonly_check.sql`).
- 66 tables, not 54. No product versioning existed. "Any mutation resets the tax profile" was false.
- "Reuse the POS tax-payable account": POS has none (no account on `tax`, no `GL_MAP_*` for VAT, POS does not post VAT).
- Literal 7 % VAT defaults were in the DDL of `ln_tax_profile` and `ln_tax_master`.
- Classes C and D shared the GL qualifier `NPL`; `ln_account.status` defaulted to `ACTIVE`, a status that did not exist.
- Spec-rev4 does not use `ACTIVE/PAST_DUE` (prompt premise); the real mismatch was `WATCHLIST`/`NPL`.

## 6. Open questions / decisions for you
1. **Remote `dcommerce_demo`**: run the read-only check, then decide whether to run the DOWN scripts there (with `ALLOW_REMOTE=1 CONFIRM_DB=dcommerce_demo`).
2. **Accountant items** (rev5 §6): VAT on interest, fees, insurance; tax point; BOL licence; account numbers; the VAT payable account (new SPF param in 2B).
3. **Rev 5 accounting addendum (prompt §7)** — still to be prepared before 2B: VAT amount tag, `FEE_COLLECT` event, `CUSTOMER_DEPOSIT_ACCOUNT` (removed for now), DEDUCTED top-up, `reverseTaxOnWaiver`, PREPAY entries, COLLECTION tax point, insurance remittance, inclusive-fee example, one numeric example per event.
4. Grant changes are logged to the API log with `grantedBy` but not to an audit table, and are not maker-checker. Add if you want grant changes to need a second person.
5. Self-authorization buttons: the inbox disables a maker's own items (default policy); the per-table screens leave them enabled and let the API decide.
6. Still open from Antigravity: customer tax invoice print template; `.agents/skills/loan-engine/SKILL.md` (create after you approve 2A).

## 7. Other observations (not loan; not changed)
- `GET /me` returns the user's password field (`cus_pass`) in plain text.
- JWT secret and DB passwords are hard-coded in tracked config; the JWT secret depends on `PORT`.
- Every app start hits a pre-existing `SPF` "too many keys" error during sync.
- 9 loan menu rows exist in your local `dcommerce_dev` from an early test run (left in place as you decided).

## 8. Local state left behind
- `dcommerce_loan_dev` (sandbox, migrated + seeded, includes test category `UI_TEST_CAT`) and `dcommerce_loan_test` (rebuilt by each test run); local MariaDB user `loan_dev` limited to those databases.
- No servers left running.
