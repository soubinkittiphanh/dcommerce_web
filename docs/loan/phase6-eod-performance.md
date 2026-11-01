# Loan module: EOD performance and volume checks (Phase 6 plan)

**Status:** plan for review, 2026-11-01. The tooling (T3) is built only after separate approval. Sandbox only (`dcommerce_loan_*` databases), never a customer or remote database.

**Targets (owner's decision D-PERF, 2026-11-01):**
- **Stress target:** 5,000 live accounts on a month-end business day (every job, provision included) in **≤ 30 minutes**.
- The run must finish well inside the EOD lock time (2 hours today).
- **Ask the customer for real volumes** (runbook question C1): live contracts today, new contracts per month, contracts to board, foreign-currency share, branches. Re-run the measurements at the customer's size, and at 3× it, before go-live.

---

## 1. How EOD works today (what drives the cost)
From `dc_api/src/loan/eod/eodService.js`:
- **Lock:** one row in `ln_batch_lock`, expiring after `LOCK_HOURS = 2` (a constant). Released in `finally`. If the process is killed, it stays until expiry.
- **Guards:** posting must be on, then the POS business-date check (`cobCheck`, Phase 5 D7/D8).
- **Jobs:** only `isEnabled` **and** AUTHORIZED, in `executionOrder`: `EOD_ACCRUAL`, `EOD_PENALTY_CALC`, `EOD_STATUS_CLASSIFICATION`, `EOD_PROVISION_CALC` (month-end only), and `EOD_FX_REVAL` (month-end, only if switched on).
- **Accounts:** every `accountStage = 'DISBURSED'` account not in a terminal status, read once with `id, status`.
- **For each job, for each account:** `runAccountJob` runs in **its own DB transaction**:
  1. claims an idempotency row (`ln_idempotency`, key `EOD-<date>`; a replay skips the account, which is what makes re-runs safe);
  2. **loads the account context** (`S.loadAccount`) and the **classification rules** (`loanCtx.classification(date)`, the same for every account);
  3. resolves the FX rate (foreign accounts);
  4. **loads the schedule**;
  5. takes the next `LOAN_TRANSACTION` number;
  6. creates an `ln_transaction`, runs the job, writes effects and the journal, or deletes the transaction when nothing happened.
- Then **one summarization per GL batch** (`summarizeBatches`: job × branch × currency) into POS `general_ledger`, then the loan date roll and `lastEodDate` on all live accounts in one UPDATE.

So the cost is about **(jobs run) × (live accounts) × (context + schedule load + per-job work)**, plus the GL summary per batch. The account context and schedule are loaded again for each job: 4 times per account on a month-end, 5 with revaluation.

**Baseline from the test suite** (`ln_batch_log` in `dcommerce_loan_test`, laptop, tiny book of 10 account-runs, short schedules):

| Job | ms per account |
|---|---|
| EOD_ACCRUAL | 36 |
| EOD_PENALTY_CALC | 22 |
| EOD_STATUS_CLASSIFICATION | 34 |
| EOD_PROVISION_CALC | 25 |
| EOD_FX_REVAL | 41 |

That is about 120–160 ms per account on a month-end, or roughly **10–13 minutes for 5,000 accounts if it scales linearly.** It is not proof:
- the test schedules are short and new;
- real accounts have 24–60 installments and months of journal history;
- `EOD_FX_REVAL` reads the account's whole journal history for the bucket roles;
- the database will be larger.

The runs below measure the real curve.

---

## 2. Tooling to build (T3, after approval)
1. **`loan_volume_seed.js --accounts=N [--months=M] [--seed=S]`**, guarded: refuses unless the database name starts with `dcommerce_loan_` and the host is local.
   - Creates N accounts by booking and disbursing through the **real services** (not raw inserts), so every table is shaped as in production. It uses the fixture products and a deterministic random seed.
   - **Mix (configurable):**
     - currency 70 % LAK, 20 % USD, 10 % THB;
     - tenor 12–60 months;
     - 75 % performing, 10 % WATCH, 10 % SUBSTANDARD or DOUBTFUL, 5 % LOSS;
     - DPD spread over the buckets;
     - 10 % with an advance balance.
   - `--months=M` ages the book by running M months of EOD and scheduled payments, so the schedules and journal history look like an older book.
2. **Timing harness** (scratch script, run from the scratch `run/` folder):
   - runs EOD for chosen dates;
   - **records:**
     - per job: total ms, accounts processed and skipped, events;
     - **per account: p50, p95, max** (from a timing hook around `runAccountJob`; test builds only);
     - GL summarization time;
     - peak RSS memory;
     - DB row counts and table sizes before and after (`ln_transaction`, `ln_journal_posting`, `ln_idempotency`, `ln_accrual_ledger`, `ln_batch_log`, `general_ledger`, `transactionEntry`).
   - Writes one JSON and one Markdown table per run.
3. **`EXPLAIN` capture:** with the MariaDB general log on (sandbox only), run 50 accounts. Group the statements by shape and `EXPLAIN` the top 15 by count × time.

---

## 3. Runs
| Run | Book | Day | What it shows |
|---|---|---|---|
| V1 | 1,000 new accounts | a normal day | baseline per account |
| V2 | 1,000 accounts aged 12 months | a normal day, then a month-end | effect of schedule and journal history |
| V3 | **5,000 accounts aged 12 months** | **month-end, revaluation on** | the stress target (≤ 30 min) |
| V4 | 20,000 accounts aged 12 months | normal day and month-end | headroom; where it bends |
| V5 | 5,000 | **catch-up of 5 missed business days** (5 runs back to back, the POS date allowing) | the morning after a long holiday |
| V6 | 5,000 | normal day with 500 payments arriving in parallel *before* EOD | that ordinary daytime volume doesn't slow EOD (no lock carry-over) |

Each run is done twice (warm and cold buffer pool), on the local machine, and recorded with the machine's specs. The customer-class hardware estimate is stated separately: we have no customer hardware.

---

## 4. Resilience checks
| Check | How | Expect |
|---|---|---|
| R1 Kill mid-run | `kill -9` the API during `EOD_ACCRUAL` on V3 | Done accounts stay done; the account in progress rolls back (its own transaction). The lock row stays until it expires (**2 h**). A re-run after expiry skips the done accounts (idempotency replay), finishes the rest, and leaves **no duplicate journal legs** (check: count per account and job ≤ 1). The loan date rolls only once. |
| R2 Re-run after success | run EOD again for a date already done | refused or no-op: the date has rolled, so it is the next day's run, with COB guards |
| R3 Two EOD starts at once | two `POST /eod/run` within 100 ms | one runs, the other gets 409 "Loan EOD is already running" |
| R4 One failing account | the test hook fails one account in a job | **today the whole run stops** at that account (the error propagates). Done accounts stay done, and a re-run continues after the fix. Record the behaviour and the time to recover. A "skip and report" mode is a proposal (§6), not built. |
| R5 GL summary failure | the test hook fails `summarizeBatches` | batches stay OPEN; a re-run summarizes them; GL rows not duplicated |
| R6 Lock expiry during a long run | shorten the lock to 1 min on a test build, run V3 | a second start must still be refused while the first is alive. **Expected gap:** the lock isn't renewed during the run, so after expiry a second start could begin. Measure it and propose a heartbeat (§6). |

---

## 5. Growth per day (to report from V3 and V4)
These rows are written on every EOD, whether or not anything posts:
- `ln_idempotency`: one row per job × live account × day. At 5,000 accounts and 4 jobs, about **20,000 rows per day, ~7 million per year.**
- `ln_transaction`: one per job and account **when something happens**. Empty ones are deleted, but they still consume a transaction number, so numbers have gaps. The penalty job keeps a memo transaction with no journal for overdue accounts.
- `ln_journal_posting` and `ln_accrual_ledger`: proportional to postings.
- `general_ledger`: one summarized row pair per GL batch (job × branch × currency × role pair), **not** per account.

The report will give rows and MB per day and per year at 5k and 20k accounts, plus a proposal for archiving or purging old idempotency rows (e.g. EOD keys older than 90 days), if needed.

---

## 6. What we expect to find, and proposals (not done in Phase 6)
| Expected hotspot | Proposal (each needs separate approval) |
|---|---|
| Context and schedule reloaded per job (4–5× per account per day) | load the account context once per account and run all jobs on it, in one transaction per account per day (keeps idempotency per job) |
| Classification rules reloaded per account | load once per run (they're the same for every account on that date) |
| `EOD_FX_REVAL` reads the whole journal history per account | read the bucket carrying base from `ln_account_balance` (already kept) instead of summing history |
| `ln_account` has no index on `accountStage` / `status` | add `idx_account_stage_status` if `EXPLAIN` shows a scan that matters at 20k |
| `ln_batch_log` has no index on `businessDate` | add one if the EOD screen's log query slows |
| One bad account stops the run (R4) | optional "skip and report" mode: mark the account FAILED in `ln_batch_log`, continue, refuse the date roll until it is fixed or explicitly excluded by a checker |
| Lock not renewed (R6) | heartbeat that extends `expiresAt` every minute; make the lock time an SPF setting |
| Who ran EOD isn't kept (security checklist G4) | add `startedBy` to `ln_batch_log` |

---

## 7. Deliverable
`docs/loan/phase6-eod-performance-results.md` with:
- the machine's specs;
- tables for V1–V6;
- the per-job p50/p95 per account;
- the curve of total time against accounts;
- R1–R6 results;
- growth per day;
- the `EXPLAIN` findings;
- a clear PASS/FAIL against the 5k / 30-minute target, and the customer's real volume when known.
