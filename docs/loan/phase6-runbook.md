# Loan module: deployment runbook for a customer database (Phase 6)

**Status:** draft for review, 2026-11-01. Branch `feature/loan-module` (dc_api, dc_web), not merged and not pushed.

**Rehearsal:** every command in steps 1–7 was rehearsed on a local copy of a POS database with no loan tables (`dcommerce_loan_rb`, a clone of the local `dcommerce_dev`). That included both rollbacks. The copy was dropped afterwards. Rehearsal results are quoted in *italics* under each step. Nothing was run against a customer or remote database.

Who this is for: the person deploying, with the accountant and the customer's manager available for step 8.

---

## Rules for the whole procedure
- **One customer database at a time.** Write its name on the change sheet, and check it again at every step.
- **Credentials:**
  - type DB passwords at a prompt or pass them in the environment (`MYSQL_PWD`, `DCOMMERCE_DB_PASSWORD`);
  - never put them on the command line, in a ticket, in this document or in a chat;
  - never paste `src/config` files anywhere.
- **The loan scripts refuse a non-local database** unless you say exactly which one: `ALLOW_REMOTE=1 CONFIRM_DB=<database name>` (`src/loan/dbGuard.js`). This is deliberate: type the name; don't copy it from an old command.
- **Always set `NO_SYNC=true`** for the loan scripts. Without it, loading the models runs the POS startup cleanup and `sync({ alter })` against the target.
- **Run the scripts from a scratch folder, not from the dc_api folder.** The logger writes `logs.log` in the current folder. Pass the script by absolute path:

  ```
  cd /tmp/loan-deploy && node /opt/dc_api/loan_migrate.js status
  ```
- **Expected noise:** the line `error: This is an error message.` (and "Hello, Winston!", "User logged in … johndoe") is demo output from `src/api/logger.js`. It appears on every run and is harmless.
- **Never set `LOAN_TEST_HOOKS`** on a customer server. It is honored only on databases whose name ends in `_test`, but it does not belong there.

---

## Questions for the customer (ask before scheduling)
| # | Question | Why it matters |
|---|---|---|
| C1 | How many live installment contracts do you have today, and how many new ones per month? How many will be boarded? | EOD sizing. The stress target is 5,000 accounts on a month-end in 30 minutes (`phase6-eod-performance.md`), and real volumes decide the hardware and the lock time. |
| C2 | Do you run more than one showroom or branch on this database? Must staff at one showroom be prevented from seeing or acting on another showroom's loans? | The loan module has **no branch-level data scoping** (known limitation, `phase6-security-checklist.md` §2). Anyone with a grant sees all loans. |
| C3 | Which integrations are live (bank QR such as BCEL OnePay, Indochina Bank or LaoViet Bank; Facebook or other platform connectors; anything that sends email or SMS)? | Staging safety (step 2b). |
| C4 | Is POS manual close of business (`USE_BUSINESS_DATE = Y`) used, and who runs COB each day? | Decides when loan EOD may run (Phase 5 decisions D7/D8). |
| C5 | Who will be the loan makers, checkers and the EOD operator? | Security groups (`phase6-uat.md` §1). Maker and checker must be different people. |

---

## Step 0: Preconditions (do not schedule until every box is ticked)
- [ ] **The accountant has signed off on:**
  - the role-to-GL account list (output of `loan_propose_accounts.js`, step 8.1);
  - the entry rules;
  - the tax profile and VAT;
  - the FX answers if foreign-currency loans are used (addendum §8.9);
  - the boarding answers Q35/Q36 if contracts are boarded (addendum §9).
- [ ] **UAT passed on a restored copy of this customer's database** (`phase6-uat.md`), with signatures.
- [ ] **Maintenance window outside business hours,** with the POS terminals closed. Step 4.5 alters the POS table `transactionEntry` (see the warning there).
- [ ] **Build identified:** the dc_api and dc_web commits. `git log -1` of each goes on the change sheet.
- [ ] **Rollback owner and support contact named** on the change sheet.
- [ ] **`pos-defect-9-impact.sql` has been run read-only on this database,** and its result reviewed (POS defects 9 and 10 affect AR balances the loan module settles).

---

## Step 1: Preflight (read-only)
> Tool T1 `loan_deploy_check.js --pre` will automate this. Until it exists, run the queries below in a read-only session (`START TRANSACTION READ ONLY; … ROLLBACK;`).

| Check | Query / action | Pass when |
|---|---|---|
| Server version, charset | `SELECT VERSION(), @@character_set_database, @@collation_database;` | MariaDB 10.3+ (instant ENUM change, see 4.5); utf8mb4 |
| No loan tables yet | `SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name LIKE 'ln\_%';` | **0**. If it is not 0, **stop**: a loan build may already have been started on this database, and its startup sync creates `ln_*` tables that the migration runner would then treat as applied. Run the step 5 schema check first and escalate. |
| `transactionEntry` size | `SELECT COUNT(*) FROM transactionEntry;` and its size from `information_schema.tables` | noted on the change sheet |
| No long transactions | `SELECT * FROM information_schema.innodb_trx;` and `SHOW PROCESSLIST;` | nothing older than a few seconds (see 4.5) |
| POS business date mode | `SELECT value FROM SPF WHERE code = 'USE_BUSINESS_DATE';` and `SELECT MAX(currentDate) FROM businessDate;` | noted (C4) |
| Pre-existing POS "too many keys" | `SELECT COUNT(*) FROM information_schema.statistics WHERE table_schema = DATABASE() AND table_name = 'SPF' AND seq_in_index = 1;` | noted. At 64, the POS startup sync logs "Too many keys specified; max 64 keys allowed" twice. That is pre-existing and not caused by the loan module. |
| Disk space | `df -h` on the DB data volume and on the backup target | free space ≥ 3 × the database size |
| Document folder | see step 3 | absolute path, outside the app folder, writable by the API user, not under `uploads/` |

*Rehearsal: MariaDB 12.0.2, utf8mb4_general_ci; 0 `ln_*` tables; `transactionEntry` 52 rows; `USE_BUSINESS_DATE = N`, POS date 2026-04-09; SPF at 64 indexes. The "too many keys" note appeared at first start, as expected.*

---

## Step 2: Backup
1. Stop the API (dc_api) and close every POS terminal, so nothing writes during the window.
2. Make a full dump to the backup volume, **not** through the POS "Database export" screen (see POS defect #12):

   ```
   mariadb-dump --single-transaction --routines --triggers --events <db> > <db>_pre_loan_<YYYYMMDD_HHMM>.sql
   sha256sum <db>_pre_loan_*.sql > <db>_pre_loan.sha256
   ```
3. **Restore test:** load the dump into a scratch database on a non-production server. Compare the table count and a few row counts. Then drop the scratch database.
4. Keep the dump and its checksum until go-live + 30 days, and longer if the accountant requires it.

*Rehearsal: dump of 212 tables, restore test identical (212 tables); restore time 29 s locally.*

### Step 2b: Staging safety (a restored copy of a customer database)
Do this **before starting any app (API, web, POS terminals) against a restored copy** of a customer database: UAT copies, rehearsals, the restore test if an app will touch it. The copy holds the customer's live integration credentials, and starting the app could make real calls.

| Where | What to do on the copy |
|---|---|
| `bank.config` (JSON with QR/payment provider credentials: BCEL/OnePay, Indochina Bank, LaoViet Bank) | `UPDATE bank SET isActive = 0, config = NULL;` |
| `SPF` codes `DYN_QR`, `DYN_QR_BankCode`, `DYN_CallbackUrl`, `DYN_Password` (dynamic QR settings read by the POS screen in the browser) | `UPDATE SPF SET value = '' WHERE code IN ('DYN_QR','DYN_QR_BankCode','DYN_CallbackUrl','DYN_Password');` |
| `platform_accounts` (connector tokens) | `UPDATE platform_accounts SET accessToken = NULL, refreshToken = NULL, extraCredentials = NULL, isChatEnabled = 0, isOrderSyncEnabled = 0, isInventorySyncEnabled = 0;` |
| `platforms` | `UPDATE platforms SET isActive = 0;` |
| Environment of the staging API | do **not** copy production values of `FACEBOOK_CLIENT_ID`, `FACEBOOK_SECRET_KEY`, `FACEBOOK_CALLBACK_URL`, `PLATFORM_TOKEN_SECRET`, `JWT_SECRET`; use staging values or leave them empty |
| Code with a fixed outside address | `src/PaymentCallback/controller.js` calls an Indochina Bank UAT gateway by a fixed URL. It cannot be disabled by data, so block it at the network (next row). |
| Network | run staging on a host whose **outbound internet is blocked** (firewall deny-all except package mirrors if needed). This is the safety net for anything the list misses. |
| Email / SMS | none found in this codebase version (search below). Re-run the search on the customer's build. |
| POS terminals, mobile apps | point them at staging only; never at the copy and production at the same time |

**Search to repeat on the customer's build** (it prints names only; `src/config` stays excluded):

```
grep -rliE "axios|fetch\(|nodemailer|smtp|sms|webhook|bcel|onepay" src --include='*.js' --exclude-dir=config
```

Write on the change sheet who blanked what, and when. Never run these statements on production.

---

## Step 3: Install the build without starting it
1. Install the dc_api and dc_web builds (the usual POS procedure), but **do not start the API yet**. The first start runs `sync({ alter })` over every model, loan models included. If that happens before step 4, `ln_*` tables are created from the models, the migration runner treats them as applied, and `transactionEntry` is altered outside the planned step.
2. **Environment for the API service:**
   - `DCOMMERCE_DB_HOST`, `DCOMMERCE_DB_PORT`, `DCOMMERCE_DB_USER`, `DCOMMERCE_DB_PASSWORD`, `DCOMMERCE_DB_NAME` (the old `DB_*` names still work as a fallback for one release);
   - `LOAN_DOCUMENT_DIR=/var/lib/dcommerce/loan-documents` (example). It must be an **absolute path outside the application folder**: the default `./private/loan-documents` is relative to the API's working directory and would be lost on a redeploy. Create it owned by the API user, mode 700, and add it to the file backup. It must not be under `uploads/`, which the POS serves to anyone without a login (POS defect #11);
   - `TZ=Asia/Vientiane`;
   - do not set `NO_SYNC` for the service itself (only for scripts);
   - do not set `LOAN_TEST_HOOKS`.

---

## Step 4: Migrations
From a scratch folder, with the API still stopped:

```
cd /tmp/loan-deploy
export NO_SYNC=true ALLOW_REMOTE=1 CONFIRM_DB=<db>          # plus the DCOMMERCE_DB_* variables
node /opt/dc_api/loan_migrate.js status                     # expect 10 x [pending]
node /opt/dc_api/loan_migrate.js up
node /opt/dc_api/loan_migrate.js status                     # expect 10 x [applied]
```

The runner applies the steps in this fixed order and stops at the first failure. If one fails, run `status` before deciding anything.

| # | Migration | Creates / changes | Verify | Rollback (this step only) |
|---|---|---|---|---|
| 4.1 | `20261028_create_loan_module_phase2a_tables` | 66 `ln_*` tables; POS `chart_of_account.accountType` += `Off-Balance` | `status` | `loan_migrate.js down --yes` (refuses once data exists; then use the backup) |
| 4.2 | `20261029_loan_phase2a_corrections` | 2 `ln_*` tables, the 4 `sec_*` security tables (function, action, group grant, audit log), column corrections | `status` | `down --yes` |
| 4.3 | `20261030_loan_phase2b_accounting` | 1 table, accounting columns | `status` | `down --yes` |
| 4.4 | `20261031_loan_phase3` | 2 tables, engine columns | `status` | `down --yes` |
| **4.5** | `20261030_pos_transaction_entry_loan_types` (**POS table**) | `transactionEntry.transactionType` ENUM += `LOAN_IN`, `LOAN_OUT`; built from the live column, nothing else changed | `SHOW COLUMNS FROM transactionEntry LIKE 'transactionType';` | `down --yes` removes the two values; it **refuses** once any loan row uses them. After that, the backup only. |
| 4.6 | `20261030_loan_phase4` | `ln_pos_link`, posting columns | `status` | `down --yes` (refuses once transactions exist) |
| 4.7 | `20261101_loan_phase5_fx` | `ln_exchange_rate`, base-amount columns | `status` | `down --yes` (refuses with foreign amounts) |
| 4.8 | `20261102_loan_phase5_ccy_limits` | `ln_product_amount`, per-currency limit columns | `status` | `down --yes` (refuses with foreign amounts) |
| 4.9 | `20261103_loan_phase5_documents` | `ln_account_document` | `status` | `down --yes` (refuses with documents) |
| 4.10 | `20261104_loan_phase5_print_templates` | `ln_print_template` | `status` | `down --yes` (refuses with authorized templates) |

**Warning for 4.5 (start outside business hours):**
- `transactionEntry` is written by POS cash and bank operations.
- On MariaDB 10.3 and later, appending ENUM values is an *instant* metadata change (rehearsed). It still needs an exclusive metadata lock: it waits for every open transaction on the table, and **every POS write queues behind it while it waits**.
- On older servers, or row formats that cannot do it instantly, the table is copied, and the time grows with its size.
- So: POS closed, no long transactions (step 1), and if 4.5 waits more than a minute, find the blocking session with `SHOW PROCESSLIST` rather than cancelling the migration.
- The same column change also happens at the first API start if 4.5 was skipped, which is another reason for the order.

*Rehearsal: all 10 migrations in 12.9 s. `transactionEntry` gained exactly the two values. `down --all --yes` before any seed rolled all 10 back, and the full POS schema (every table's columns and indexes) was then identical to the original copy. An `ALGORITHM=INSTANT` probe on a scratch copy of `transactionEntry` succeeded.*

---

## Step 5: Schema check
> Tool T1 `loan_deploy_check.js --schema` will automate this.

Compare the target with `docs/loan/schema-reference.json`. That file records the 76 `ln_*` tables (engine, collation), 957 columns, 138 indexes and the two POS columns changed (`chart_of_account.accountType`, `transactionEntry.transactionType`). It was taken read-only from the rehearsal copy right after step 4.

Pass when there are 0 differences. Expected exceptions to note but not fail:
- the POS columns' collation follows the customer's database default;
- ENUM lists may already include customer-specific values before `LOAN_IN`/`LOAN_OUT`.

Known item (not a deployment blocker): 4 Phase 5 tables (`ln_exchange_rate`, `ln_product_amount`, `ln_account_document`, `ln_print_template`) were created with `utf8mb4_general_ci`, while the other 72 use `utf8mb4_unicode_ci`. A cross-table string comparison between the two groups fails with "Illegal mix of collations". The loan code doesn't do this today, but a later migration should align them (listed in the security checklist).

---

## Step 6: Seeds
Same scratch folder and variables, run in this order, each one checked before the next:

```
node /opt/dc_api/seed_loan_phase2a_data.js
node /opt/dc_api/seed_loan_phase2b_accounting.js
node /opt/dc_api/seed_loan_phase3.js
node /opt/dc_api/seed_loan_phase4.js
node /opt/dc_api/seed_loan_phase5.js
node /opt/dc_api/seed_loan_phase5b.js
node /opt/dc_api/seed_loan_menus.js
```

- **What they write:**
  - system catalog AUTHORIZED;
  - business parameters, entry rules, FX roles, the contract print template and the `EOD_FX_REVAL` job **PENDING** (nothing works until a checker authorizes it);
  - SPF switches all off;
  - grants to SUPER_ADMIN (and ADMIN for transactions and EOD);
  - menu header `LOAN` "Vehicle Financing" with its lines.
- **Idempotent:** a second run creates nothing and never overwrites.
- **Rollback after seeds: restore the step-2 backup.** `loan_migrate.js down --all --yes` deliberately **refuses** once seeds have run ("ln_accounting_entry_rule has 142 row(s)"), so seeded parameters and the grant audit trail cannot be dropped by accident.
  - If you only need to hide the module without a restore, set the menu header inactive: `UPDATE menuHeader SET isActive = 0 WHERE code = 'LOAN';` (reverse: `= 1`).
  - With posting off, the loan module writes nothing to POS accounting.

*Rehearsal: every seed exited 0, in 1–5 s each. The second pass created 0 rows (grants "+0"). POS tables touched: `SPF` +12 rows, `menuLine` +10, `MenuHeaderLines` +10, plus the loan-owned `sec_*` tables. `down --all --yes` after seeds was refused, as designed. Restoring the backup brought the schema and every table's row count back to the pre-deploy state.*

---

## Step 7: First start and post-checks
1. Start the API normally. Its first sync now finds every loan table in place.
2. In the log, the two "Too many keys" notes are expected (step 1). Any other `error:` line except the logger demo line needs a look.
3. Post-checks (T1 `--post` will automate them):

| Check | Pass when |
|---|---|
| `GET /api/loan/status` without a token | 401 |
| `SELECT code, value FROM SPF WHERE code LIKE 'LOAN\_%' OR code = 'BS_INCLUDE_LOAN_BOOK';` | `LOAN_POSTING_ENABLED = false`, `BS_INCLUDE_LOAN_BOOK = false`, `LOAN_FX_REVAL_ENABLED = false`, `LOAN_ALLOW_SELF_AUTHORIZE = false`, `LOAN_MAX_BACKDATE_DAYS = 0`, `LOAN_FX_MAX_RATE_AGE_DAYS = 3`, `LOAN_FX_OVERRIDE_TOLERANCE_PCT = 0`, `LOAN_FX_MAX_ROUND_DIFF = 1`, `LOAN_FX_IMPLIED_RATE_TOLERANCE_PCT = 1.00`, `LOAN_FX_IMPLIED_RATE_BREACH = REFUSE`, `LOAN_DOC_MAX_MB = 5` |
| Schema after start | identical to step 5 (the start changed nothing) |
| Log in as SUPER_ADMIN | "Vehicle Financing" menu visible; Parameter Studio opens; banner shows posting off |
| A test document upload (on a test account later) | lands in `LOAN_DOCUMENT_DIR`, never in `uploads/` |

*Rehearsal: start on the migrated, seeded copy; schema before vs after start: 0 differences; `/api/loan/status` without a token: 401; switch values as in the table.*

---

## Step 8: Configuration (each item: a maker enters, a different checker authorizes)
Do these in the Parameter Studio (`/admin/loan/studio`) in this order. A later item depends on the earlier ones.

1. **GL accounts:**
   - run `node /opt/dc_api/loan_propose_accounts.js --features=<the confirmed features, e.g. VAT,FX>` (read-only; exit code 2 means collisions or parameter problems remain);
   - the accountant creates the accounts **by hand** in the POS chart of accounts (the helper's `--apply` is for sandboxes only);
   - set `GL_MAP_VAT_OUTPUT_ACC` if VAT is used;
   - re-run the helper until it reports *collisions: 0; parameter problems: 0* and every role resolves.

   *Rehearsal: 26 accounts to create, 0 collisions; `GL_MAP_VAT_OUTPUT_ACC` empty (exit 2 until set).*

   For boarding, also create the account for `BOARDING_CLEARING` (`phase6-boarding-design.md`).
2. **Role-to-GL mappings:** create one per role (and per status qualifier for `LOAN_PORTFOLIO`), then authorize them.
3. **Entry rules:** review and authorize. A product cannot be authorized while its rules are not (the product accounting check).
4. **Currencies:** rounding rules (`ln_currency_rule`) for each currency used; authorize.
5. **Exchange rates (foreign currencies only):** on `/admin/loan/exchange-rates`, use "copy POS rate", or enter the official rate (Q24), then authorize. Each day, before any foreign-currency transaction (rate age at most `LOAN_FX_MAX_RATE_AGE_DAYS`).
6. **Tax profile:** confirm the VAT profile (the `LN_TAX_PROFILE` confirm action). The tax invoice print stays held until VAT is confirmed.
7. **Products:**
   - per offered currency: min/max amount and the fixed amounts (documentation fee, amount UDEs);
   - the accounting check must be clean;
   - authorize.
8. **Credit rules:** statuses, DPD buckets, provision rules, cure rules.
9. **Calendar:** holidays for the loan calendar.
10. **Print templates:** replace the seeded draft contract wording with the customer's real wording, then authorize. Printing is refused until then.
11. **Security groups:** create the loan groups and grants (`phase6-uat.md` §1). Check that no person holds both maker and checker rights for the same kind unless the customer accepts it in writing.
12. **Leave `LOAN_ALLOW_SELF_AUTHORIZE = false`.**

---

## Step 9: Switch order
Each switch is an SPF value changed by a SUPER_ADMIN. Each can be set back. Setting one back stops new postings, and nothing is posted retroactively.

| Order | Switch | Turn on when | Check right after |
|---|---|---|---|
| 1 | `LOAN_POSTING_ENABLED = true` | step 8 complete; UAT signed | banner shows posting on |
| 2 | (no switch) **pilot**: one real contract in the base currency, DISB through repayment | after 1 | GL tie-out screen balanced (`/admin/loan/reports`, GL tie-out tab) |
| 3 | `BS_INCLUDE_LOAN_BOOK = true` | after one loan EOD and a balanced tie-out | balance sheet shows the loan section; totals unchanged elsewhere |
| 4 | **Foreign currency**, per currency (no single switch): a currency becomes postable once its rounding rule, an authorized rate, the product currency row with limits and fixed amounts, and the FX role mappings (`FX_GAIN_REALIZED`, `FX_LOSS_REALIZED`, `ROUNDING_DIFF`, `CCY_POSITION`) are all authorized | after 3; the accountant's FX answers (Q24–Q34) | one pilot contract in that currency; tie-out balanced in contract currency and base |
| 5 | `LOAN_FX_REVAL_ENABLED = true` **and** authorize and enable job `EOD_FX_REVAL` | only if the accountant says yes (Q28); at the start of a month | after the first month-end: revaluation lines on 4902/5903 (or the confirmed accounts) |

Boarding (if used) runs between 3 and 4, for base-currency contracts first (`phase6-boarding-design.md`).

---

## Step 10: Go-live checklist
- [ ] Step-2 backup verified (checksum, restore test) and stored
- [ ] Step 5 schema check: 0 differences
- [ ] Step 7 post-checks passed
- [ ] Every mapping, entry rule, product, rate and template used is AUTHORIZED; the pending queue holds nothing unexpected
- [ ] Switches as intended (step 9 table), and `LOAN_ALLOW_SELF_AUTHORIZE = false`
- [ ] Rates: every foreign currency in use has a rate within `LOAN_FX_MAX_RATE_AGE_DAYS`
- [ ] Loan EOD run once on a restored copy with this configuration (and on production after day 1); duration noted against C1
- [ ] GL tie-out balanced, including the **`BOARDING_CLEARING` balance is 0 after the accountant's reclassification journal** when contracts were boarded
- [ ] `LOAN_DOCUMENT_DIR` outside the app folder, in the file backup, and a test upload found there
- [ ] People trained; groups and grants per role; maker and checker are different people
- [ ] Customer told that branch-level data scoping does not exist (C2) and accepted it, or the go-live is limited to one showroom
- [ ] **Transaction entry screens:** only repayment and prepayment have a screen today. DISB, fee collection, waiver, write-off, repossession, vehicle disposal, refunds, recovery and reversal are API calls (`phase6-uat.md` appendix). Either trained staff use the documented calls, or these screens are built before go-live.
- [ ] `pos-defect-9-impact.sql` reviewed; affected invoices known
- [ ] Rollback owner and support contact on the change sheet

---

## Full rollback
| Situation | Rollback |
|---|---|
| After step 4, before seeds | `loan_migrate.js down --all --yes`. Rehearsed: the POS schema is back to identical. |
| After seeds, before any loan transaction | restore the step-2 backup (rehearsed), **or** keep the tables and hide the module (`menuHeader` `LOAN` inactive, posting off) |
| After loan transactions exist | restore the step-2 backup only inside the maintenance window, before POS reopens. Afterwards POS has new data, so don't restore: turn `LOAN_POSTING_ENABLED` off, reverse wrong loan transactions with REVERSAL (checker), and fix forward with the accountant. |
| Step 4.5 alone | `down --yes` while no `LOAN_IN`/`LOAN_OUT` row exists; otherwise the backup |
