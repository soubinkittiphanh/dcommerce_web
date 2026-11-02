# Independent audit brief: dcommerce loan module

**For:** an independent reviewer, either a **human developer** or a **fresh Claude session**, who has not seen how the module was built. Everything you need is in this file and the documents it points to. Version: 2026-11-01.

> **If you are a Claude (or other AI) session:** read §1 (hard rules) and follow it exactly. You are doing a **read-only review**:
> - don't edit, stage, commit, stash, reset, check out or delete anything in the repositories;
> - write your notes and scripts only in your own scratch folder;
> - when something is unclear, record it as a question in your report instead of guessing or "fixing" it.

---

## 1. Hard rules (both kinds of reviewer)
1. **Local databases only.** Never connect to a customer, staging or remote database. Never connect to the host `150.95.31.23` or any other non-local address. The loan scripts refuse non-local hosts unless `ALLOW_REMOTE=1 CONFIRM_DB=<db>` is set. **Never set those.**
2. **Never print secrets:**
   - exclude `src/config` from every search (`grep -r … --exclude-dir=config`);
   - don't open or quote `dc_api/src/config/dbClient.js` or `env.js`: they contain literal credential fallbacks;
   - pass DB passwords through the environment (`MYSQL_PWD`, `DCOMMERCE_DB_PASSWORD`), never on a command line you paste anywhere.
3. **Never run `node` with the working directory inside `dc_api`.** The logger (`src/api/logger.js`) appends to `logs.log` in the current folder, and `dc_api/logs.log` is a tracked file that must not change. Run every script from a scratch folder, by absolute path. Example:

   ```
   cd /tmp/loan-audit && node /path/to/dc_api/test/loan/run.js
   ```
4. **Don't touch these files:** `dc_api/src/config/env.js`, `dc_api/src/parking/validation.js`, `dc_api/logs.log`, and the other top-level folders (`dc_api_draft`, `dc_api_reg`, `dc_cleaning_*`, `dc_mobile`, `dc_pos`, `dc_web.bfg-report`).
5. **No git writes.** Read with `git log`, `git show`, `git diff`. The branch `feature/loan-module` is not pushed and must stay as it is.
6. Expected noise: `error: This is an error message.`, "Hello, Winston!" and "User logged in … johndoe" are demo lines from the logger, not failures.

---

## 2. What you are reviewing
A parameter-driven installment-loan module (FLEXCUBE style) for a Lao vehicle dealer, built into an existing POS system:

| Repo | Stack | Branch | Range to review |
|---|---|---|---|
| `dc_api` | Node 16, Express, Sequelize 6, MariaDB | `feature/loan-module` | `1f63709` (base, `main`, 2026-10-28) .. `eaf2a55` (Phase 6 tooling head): 59 commits. (`f0d5e27` was the Phase 5 head at 133 tests.) |
| `dc_web` | Nuxt 2, Vuetify 2 | `feature/loan-module` | `7be510864` (base) .. current head: 31+ commits (the last ones are docs) |

```
git -C dc_api log --oneline 1f63709..feature/loan-module
git -C dc_api diff --stat 1f63709 feature/loan-module
```

**Where the code is:**
- **dc_api:**
  - `src/loan/` (engine, posting, EOD, services, controllers, `router.js`);
  - `src/security/` (new permission module: `sec_*` tables, `requirePermission`);
  - root migrations `2026102*_*.sql` / `2026110*_*.sql` + `_down.sql`, `20261030_pos_transaction_entry_loan_types.js`;
  - runner `loan_migrate.js`;
  - seeds `seed_loan_*.js`;
  - helper `loan_propose_accounts.js`;
  - tests in `test/loan/` (`run.js`, `engineTests.js`, `postingTests.js`, `screenApiTests.js`, `fixtures/`).
- **dc_web:** `pages/admin/loan/**`, `components/loan/**`, `common/loan/**`, `store/loan.js`, and `docs/loan/` (copies of the documents).

**Existing POS files changed by the branch** (review these line by line; the full diffs are in `docs/loan/phase4-pos-diffs.patch` and `phase5-pos-diffs.patch`, with passwords redacted):
- **dc_api:** `package.json`, `src/app.js`, `src/router/index.js`, `src/models/index.js`, `src/account/model.js`, `src/transactionEntry/model.js`, `src/GL/accountingPostingService.js`, `src/GL/adbReportController.js`, `src/AR/receive/header/controller.js`, `src/AR/receive/header/router.js`, `src/config/dbClient.js` (`DCOMMERCE_DB_*` names with the old `DB_*` as fallback; **review it through the redacted patch, not the file**).
- **dc_web:** `components/AccountForm.vue`, `pages/admin/security/grants.vue`, `pages/reports/financial/trial-balance/index.vue`. Also `pages/admin/accounting/ar/receive/index.vue` and `pages/admin/ordersFromPosCredit/index.vue`, which the owner committed separately (`03bd1d9b6`); they're not part of the loan work.

**Rules the module must follow** (from the owner's brief, `docs/loan/phase2a-prompt.md`):
- additive only: existing POS features unchanged;
- migrations reversible;
- money `DECIMAL(20,4)`, rates `DECIMAL(9,6)`, exchange rates `DECIMAL(20,8)`, never floats;
- no hard-coded business values (parameters with maker-checker);
- every new switch defaults to **off**.

---

## 3. Document map (read in this order)
| Document (`docs/loan/`) | What it gives you |
|---|---|
| `spec-rev4.md` | the functional specification |
| `rev5-decisions.md` | the owner's decisions per phase |
| `rev5-accounting-addendum.md` | **the accounting rules:** entry rules per event (§2), VAT (§3), worked examples that must balance (§4), proposed GL accounts (§5), accountant questions (§6, §8.9, §9), multi-currency (§8), boarding questions (§9) |
| `rounding-policy.md` | rounding per currency |
| `phase2a-audit.md`, `phase2a-report.md`, `phase2b-report.md`, `phase3-report.md`, `phase4-report.md`, `phase5-fx-investigation.md`, `phase5-reportA.md`, `phase5-reportB.md` | what each phase built, tested and deferred |
| `pos-defects.md` | pre-existing POS defects found on the way (not fixed by the branch); #11 and #12 are security issues |
| `phase6-runbook.md` | deployment order (rehearsed) |
| `phase6-security-checklist.md` | the security checklist with a first pass and gaps G1–G11; **re-run it independently** |
| `phase6-uat.md` | user scripts with expected GL |
| `phase6-boarding-design.md`, `phase6-eod-performance.md` | designs not built yet; review as designs |
| `schema-reference.json` | the expected loan schema after all migrations |

---

## 4. Build the local sandbox
**You need:**
- a local MariaDB (10.3+; built on 12.0.2), with the `mariadb` and `mariadb-dump` CLIs on PATH, and an OS-socket login with rights to create databases (or pass them in `LOAN_TEST_MYSQL_ARGS`);
- Node 16;
- a **local POS database without loan tables** to copy from. The test runner copies `LOAN_TEST_SOURCE_DB` (default `dcommerce_dev`) into `dcommerce_loan_test` on every run. Ask the owner for a sanitized POS dump if you don't have one; never use a customer copy that hasn't had the runbook's step 2b applied.

**Run the whole suite** (about 10 minutes):

```
mkdir -p /tmp/loan-audit && cd /tmp/loan-audit
export DCOMMERCE_DB_HOST=127.0.0.1 DCOMMERCE_DB_PORT=3306 DCOMMERCE_DB_USER=<local user>
export DCOMMERCE_DB_PASSWORD=<typed or from a local env file, never echoed>
export LOAN_TEST_SOURCE_DB=<your pre-loan POS copy>   # optional, default dcommerce_dev
export TZ=Asia/Vientiane
node /path/to/dc_api/test/loan/run.js > run.txt 2>&1
grep -E "^\s+(PASS|FAIL)" run.txt | sort | uniq -c | sort -rn | head
grep -E "[0-9]+ passed, [0-9]+ failed" run.txt
```

- **Expected:** `159 passed, 0 failed` at `eaf2a55` (was `133` at the Phase 5 head `f0d5e27`; Phase 6 adds the T1 deploy-check, T4 route-permission and collation-migration tests).
- The runner refuses any target that isn't local or doesn't end in `_test`.
- It starts its own API on a free port from a temp folder and stops it.
- The POS log lines contain the word "Error:" in normal operation, so judge only the summary line.
- **Clean-checkout verification (2026-11-02):** the suite was run from a detached `git worktree` at `eaf2a55` in a scratch folder, with a fresh `node_modules` copy and no access to the working tree — result **`159 passed, 0 failed`**. So HEAD is green independently of any uncommitted working-tree changes. To reproduce: `git worktree add --detach <dir> eaf2a55`, provide `node_modules` (copy an install or `npm ci`), then run the command above against a local `*_test` database.

**Optional, a full migration round trip by hand** on another local copy (`dcommerce_loan_<you>`; the database name must be local):

```
cd /tmp/loan-audit && export DCOMMERCE_DB_NAME=dcommerce_loan_<you> NO_SYNC=true
node /path/to/dc_api/loan_migrate.js status | up | down --all --yes
```

**Optional, the screens:**
- start the API from the scratch folder: `NO_SYNC=true PORT=<p> node /path/to/dc_api/src/index.js`;
- run `dc_web` with `BASE_URL=http://127.0.0.1:<p>`. Use a scratch Nuxt config whose `buildDir` is outside the repo: a normal `nuxt dev` rewrites the 32 tracked files under `dc_web/.nuxt`.
- Without `BASE_URL`, `nuxt.config.js` points at a remote server: **do not let it**.

---

## 5. What to verify (the core of the audit)
For each item: how to check, and what "pass" means. Use the test names in `run.txt` as starting points, then verify independently by reading code and running your own read-only SQL on `dcommerce_loan_test` after a run.

| # | Invariant | How to check | Pass |
|---|---|---|---|
| I1 | Every loan journal balances **in the contract currency and in base** | `SELECT transactionId, currencyId, SUM(IF(drCr='DR',amount,-amount)) FROM ln_journal_posting WHERE isBaseOnly=0 GROUP BY 1,2 HAVING SUM(…) <> 0;` then the same over `baseAmount` per `transactionId` (all lines) | both return no rows |
| I2 | Journal = GL: every leg reached POS `general_ledger` exactly once | GL tie-out report (`GET /api/loan/reports/gl-tieout`), and your own join `ln_journal_posting.glRecordId` / `ln_pos_link` (posTable `general_ledger`) → `general_ledger` | balanced. Reversal legs carry no `glRecordId` (known, G10) but are linked through `ln_pos_link` |
| I3 | Account buckets = journals: for each account and role, the carrying base in `ln_account_balance` equals Σ journal base for that role | your SQL per account | equal to the minor unit |
| I4 | Reversal is exact | for each REVERSAL, its legs mirror the original's (role, side swapped, amount, base, rate) and the balances return to before. Reversals are LIFO: an older transaction can't be reversed while later ones stand | `postingTests` reversal tests (e.g. "… LIFO reversal refuses older transactions …", "DISB reversal …") plus your SQL |
| I5 | Switches off means no posting | with `LOAN_POSTING_ENABLED = false`, every posting endpoint refuses and nothing is written to `general_ledger`, `transactionEntry` or AR | test "guards: switch OFF, unconfirmed tax profile and a missing Idempotency-Key refuse; nothing is written", plus one manual call |
| I6 | Migrations are reversible | the runner's DOWN/UP round trip restores the schema exactly; DOWN refuses while data exists | the test "… DOWN, then UP, restore the schema exactly", and the runbook rehearsal |
| I7 | POS unchanged when the module is unused | with switches off: trial balance, balance sheet and P&L identical before and after migrations and seeds | tests "balance sheet: switch OFF returns exactly what the original POS code returns …" and "books stay consistent: trial balance balanced …"; your own comparison of the report endpoints |
| I8 | Money never as float | grep `src/loan` for `parseFloat`, `Number(` on amounts, `toFixed`; columns DECIMAL as in §2 | amounts go through `decimal.js` / BigInt minor units; any exception justified |
| I9 | Maker ≠ checker on the server | try to authorize your own transaction, parameter change and application | refused (unless `LOAN_ALLOW_SELF_AUTHORIZE = 'true'`, which is off) |
| I10 | Every route checked | `router.js`: token on all; `can()` on all but `/status` and `/pending` (see the security checklist §1) | as listed |
| I11 | FX rules | rate from `ln_exchange_rate` (authorized, age ≤ `LOAN_FX_MAX_RATE_AGE_DAYS`); realized FX only on relief of a monetary bucket; `CCY_POSITION` nets to 0 in base; rounding residue ≤ cap | addendum §8 examples reproduced by `engineTests`; your SQL on the USD fixtures |
| I12 | Worked examples | every addendum §4 and §8 example balances and matches the engine's output | `engineTests.js` |
| I13 | Document access | files stored outside `uploads/`; type, size, name and permission rules (checklist §3) | upload a renamed `.exe`, a file over 5 MB, and read without the grant |

---

## 6. Security review
Re-run `phase6-security-checklist.md` from the code, without trusting its first-pass ticks. In particular:
- confirm or refute gaps G1–G11;
- look for IDOR on `/accounts/:id/*`, `/documents/:docId/file`, `/transactions/:txId/*`;
- check every `sequelize.query` in `src/loan` for injection;
- check that error responses never carry stacks or SQL;
- run `npm audit --omit=dev` in both repos (report only).

POS defects #11 (public `uploads/`) and #12 (database export/import with only a login) are outside the loan module. Confirm them, but don't test them against any running server except your local one.

---

## 7. Out of scope
- Fixing anything: report only.
- The POS outside the files listed in §2, except where the loan module depends on it (AR invoices and receipts, GL posting, bank `transactionEntry`, business date).
- Boarding (T2) and the volume tooling (T3): not built yet. Review their designs only. The route test (T4, `test/loan/routePermissionTests.js`) is built: check it, and check that `routeManifest.js` matches `phase6-security-checklist.md` §1. The deploy check (T1, `loan_deploy_check.js`) is built: confirm it cannot write (read-only session plus statement filter) and that it never prints credentials.
- Accounting policy choices marked UNCONFIRMED (the accountant's questions): you may comment, but they're the accountant's to decide.

---

## 8. Report format
Write one Markdown file in your scratch folder: `loan-audit-report-<date>.md`.

1. **Summary:** scope reviewed (commit range), test result line, overall opinion in 3–5 lines.
2. **Findings**, most severe first, one per block:
   - **ID / title**;
   - **Severity:**
     - *Critical*: money or data at risk now;
     - *High*: wrong accounting or a security hole under normal use;
     - *Medium*: wrong in edge cases, or a control gap;
     - *Low*: hygiene;
     - *Info*;
   - **Evidence:** `file:line`, the command or SQL you ran and its output (no secrets);
   - **Failure scenario:** concrete inputs → wrong result;
   - **Suggested fix**: one paragraph, no code changes made.
3. **Invariants table:** I1–I13 with PASS / FAIL / NOT CHECKED and a one-line note each.
4. **Security checklist:** your result per row, where it differs from the first pass.
5. **Questions** for the owner or the accountant.

Send the report to the owner. Don't open pull requests or issues, and don't post it anywhere public.
