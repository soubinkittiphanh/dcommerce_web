# POS defect #12: database export/import need only a login — standalone fix brief

**For:** a developer (or a fresh Claude session) fixing this on a branch off `main`, not on `feature/loan-module`.
**Status:** docs only. No fix is written yet. This brief is enough to do the work without the loan conversation.
**Severity:** Critical. Any logged-in user can copy or destroy the whole database, and can run shell commands on the API host.
**Confirmed:** read from code on `main` (`1f63709`), and reproduced on a **local sandbox copy** (`dcommerce_loan_test`, 2026-11-02). Never run against a customer or remote database.

---

## 1. Exactly what is exposed

### Routes and middleware
`dc_api/src/app.js:221`
```
app.use('/api/database', myRouter.databaseBackup);
```
`dc_api/src/databaseBackup/router.js`
```
router.get('/export', validateToken, controller.exportDatabase);                     // line 30
router.post('/import', validateToken, upload.single('file'), controller.importDatabase); // line 33
```
The **only** gate is `validateToken` (`src/api/jwtApi.js`): a valid, unexpired JWT. There is no `checkRole`, no group or permission check. Any token the login endpoint issues — to a cashier, a waiter, any active user — passes. Tokens are signed with the app secret and last 24 h (`jwtApi.js:27`).

### `GET /export` (`controller.js` `exportDatabase`, ~line 115)
- Spawns `mysqldump -h <host> -u <user> --port <port> <database>` with the password in `MYSQL_PWD`, and pipes stdout straight to the HTTP response as an `application/sql` attachment.
- The dump is the entire database: every customer, user row (see §3 on plaintext passwords), price, sale, loan, audit row.

### `POST /import` (`router.js:8–27` multer + `controller.js` `importDatabase`, ~line 172)
- `multer.diskStorage` writes the upload to `uploads/restore_<Date.now()>_<original filename>`.
- `fileFilter` accepts the file only if the extension is `.sql` (case-insensitive). **No size limit. No content check.**
- Spawns `mysql -h <host> -u <user> --port <port> <database>` and pipes the uploaded file into its stdin, then deletes the temp file when the process ends.

### What an attacker gets (reproduced on the local sandbox)
| Request | Token | Result observed |
|---|---|---|
| `GET /api/database/export` | **none / invalid** | 401 |
| `GET /api/database/export` | **cashier** | **200, full 19.8 MB SQL dump** |
| `GET /api/database/export` | **inactive user** | **200, full dump** (`validateToken` never checks `isActive`) |
| `GET /api/database/export` | user **with no group** | **200, full dump** |
| `POST /api/database/import` (a `.sql` file) | **cashier** | **200 "Database restored successfully"**; the statements ran |
| `POST /api/database/import` (a `.txt` file) | cashier | 500 (extension filter rejects, but the error is unhandled) |

**Escalation — remote shell command execution, not just SQL.** The import pipes the file into the **interactive `mysql` client**, which honours its own backslash commands from stdin. A line such as
```
\! <any OS command>
```
in the uploaded `.sql` file is executed by the client as a shell command on the API host, as the API's OS user. The sandbox probe uploaded a file containing a `\!` line and the command ran (a marker file appeared). So `/import` is arbitrary command execution on the server, reachable by any logged-in user — well beyond database damage.

Path routing is exact: uppercase, trailing-slash, double-slash and percent-encoded variants of the path without a token all returned 401, so there is no alternate-path bypass. The token is the whole of the control, and it is not enough.

### Interaction with defect #11
While a restore runs, the uploaded file sits in `uploads/`, which `app.js:14` serves publicly with no login (`app.use('/uploads', express.static('uploads'))`). The name is `restore_<ms>_<name>`; the `<ms>` is guessable, so the dump being restored can briefly be fetched over the web with no token at all.

---

## 2. Minimal fix (branch off `main`)

Branch: `fix/database-backup-permission` from `main`. Keep it additive; do not pull in anything from `feature/loan-module` (the loan RBAC middleware does not exist on `main`).

**Recommended shape: remove `POST /import` from the app; keep only a fixed `GET /export`.** A full restore is a server-administrator task done on the box (`mysql < dump.sql` by someone with shell access), not a web action — the Phase 6 runbook already restores that way. Removing `/import` deletes the entire remote-command-execution surface rather than trying to contain it. So:

1. **Delete the `/import` route and its controller/multer config.** Keep `exportDatabase`; drop `importDatabase`, `upload`, and the multer `require`s. `src/app.js:221` can keep mounting the router (now export-only), or mount nothing if the router becomes trivial.
2. **Gate `GET /export` with the role check that already exists on `main`.** `src/parking/validation.js` exports `checkRole(allowedRoles)`, which 401s without a user and otherwise loads the user with their role and treats `groupId === 1` or role level ≥ 100 as super-admin:
   ```js
   const { checkRole } = require('../parking/validation');
   router.get('/export', validateToken, checkRole(['admin']), controller.exportDatabase);
   ```
   If a dedicated permission is preferred over the generic `admin` role, add one; `checkRole(['admin'])` is the smallest change that matches existing `main` code.
3. **Fold in an `isActive` check** (either in the fix or confirm `checkRole` covers it): `validateToken` today does not look at `isActive`, so a disabled admin's unexpired token must still be refused.
4. **Audit every export:** write one row (existing audit table or a log line) with the user id, IP (`req.ip`), action and outcome.

**If `POST /import` must stay** (only with the owner's written sign-off), then it must **not** shell out:
- **No `mysql`/`mysqldump` client and no `child_process`/`spawn`/`exec` at all** — that is what let an uploaded `\!` line run a shell command. Apply the dump with a SQL library instead: read the file and run it through the existing `mariadb`/`sequelize` connection (e.g. `mariadb` driver with `multipleStatements`, inside a transaction), so only SQL is ever executed and nothing reaches a shell.
- Gate it with `checkRole(['admin'])` **before** the upload is parsed, cap the size (`limits: { fileSize: <N> MB }`), store the temp file **outside `uploads/`** (`os.tmpdir()`), require a second admin confirmation, and audit it.
- Even then, a restore can run arbitrary SQL (`DROP`, etc.); the control is the admin gate plus the second person. Removing the route is still preferred.

### Tests (new, on the fix branch)
A small integration test, same shape as the loan suite (start the API on a free port against a **local throwaway `*_test` database**, never a customer DB; see `dc_api/test/loan/run.js` for the clone-and-start pattern):
- `GET /export` **without a token → 401**.
- `GET /export` **with a non-admin (cashier) token → 403** — the fix's core assertion; today this is 200 with a full dump.
- `GET /export` **with an admin token → 200** and streams SQL (regression: admin export still works end to end).
- `GET /export` with an **inactive** admin user → 403.
- **`POST /import` no longer exists**: a POST to `/api/database/import` returns **404** (route removed). If import was kept instead, assert non-admin → 403, that the handler uses no `child_process` (a code assertion/grep in the test, or a unit test that a `\!`-bearing file runs no shell), a size-limit rejection, and the temp file landing outside `uploads/`.
- do **not** add a test that uploads a `\!` shell line against anything but a disposable local DB; assert the permission gate and route removal instead.

---

## 3. Related finding (new, worth its own defect)

During this check, two separate exposures turned up on `main`:
- **User routes mounted with no token at all.** `src/router/router.js` `user(app)` registers `POST /user_i` (create user), `PUT /user_e` (update user) and `GET /user_f` (fetch users) directly on the app with no `validateToken`. On the sandbox, anonymous `GET /user_f` returned 200 (a user list), and anonymous `POST /user_i` / `PUT /user_e` returned 200. (`GET /me` correctly returned 401.)
- **Passwords are stored in plaintext.** `user.cus_pass` is compared and saved as-is (`src/user/controller.js`; the `bcrypt` lines are commented out), and in the sandbox every `cus_pass` was plaintext. So a single `/export` hands an attacker every user's login directly.

These are outside defect #12's fix but should be filed (suggested #13 for the unauthenticated user routes) and fixed off `main` too. They are recorded in `pos-defects.md`.

---

## 4. Proxy-level stopgap (apply now, no code change)

Until the fix ships, block the two routes at the reverse proxy in front of the API. This needs no redeploy and is reversible.

**Decide first:** if no one uses the in-app backup screen, block the path outright. If an admin still needs it, allow-list only that workstation's IP.

**nginx** (in the `server` block that proxies the API):
```nginx
# Stopgap for POS defect #12 — remove once the app-level fix ships.
location /api/database/ {
    # allow 203.0.113.10;   # uncomment and set the admin workstation IP to keep export working
    # deny all;             # uncomment with the line above for allow-list mode
    return 403;             # or: block outright
}
```

**Apache** (`httpd` is present on this host; inside the relevant `<VirtualHost>`):
```apache
# Stopgap for POS defect #12 — remove once the app-level fix ships.
<LocationMatch "^/api/database/">
    Require all denied
    # For allow-list mode, replace the line above with:
    # Require ip 203.0.113.10
</LocationMatch>
```

Notes:
- Match the path as the proxy sees it; if the API is served under a path prefix, prefix `/api/database/` to match.
- This blocks both `/export` and `/import`.
- A 403 here stops the exposure for every user, admin included, so use allow-list mode if an admin must still export during the window.
- If there is **no** reverse proxy, the equivalent one-line stopgap is a code change — comment out `app.use('/api/database', myRouter.databaseBackup);` at `app.js:221` and restart — but that is not proxy-level and touches code, so it is out of this "stopgap" scope; prefer shipping the real fix.

---

## 5. Was this exploited? (incident check, do this before/alongside the fix)

The routes have been open to any logged-in user for as long as they have existed, so check the history before assuming they were not used.

### Where to look
- **Reverse proxy access logs** (Apache: `/var/log/apache2/*access*` or the vhost's `CustomLog`; nginx: `/var/log/nginx/access.log*`), including rotated/compressed files.
- **API logs** (`dc_api/logs.log` and any process-manager log, e.g. the supervisor `stdout_logfile`). The export handler logs `Starting database export for <db> (Host: <host>)` and `Database export completed successfully`; the import handler logs `Starting database import for <db> from <filename>` and `Database import completed successfully`. These lines do not record the user or IP (part of the defect), so correlate by timestamp with the proxy log.

### Searches
```bash
# Proxy: every hit on the two routes, oldest logs included
zgrep -hE "/api/database/(export|import)" /var/log/{nginx,apache2}/*access* 2>/dev/null

# API: the handler log lines (run from the app folder; read-only)
grep -nE "database (export|import)|Starting database|restored successfully" dc_api/logs.log
```
For each proxy hit, note the timestamp, HTTP method (`GET`=export, `POST`=import), source IP, status (200 = it succeeded) and bytes sent (a large response on `/export` = a dump left).

### What a suspicious hit looks like
- A **`POST /api/database/import`** at all — the app's own backup screen is export-only in normal use, so an import is noteworthy by itself.
- A request from an **IP that is not a known admin workstation** or the office range.
- A hit **outside business hours**, or a burst of them.
- A `GET /export` returning **200 with a large body** to a non-admin session (cross-check the timestamp with who was logged in, if the app has a session/audit trail).
- Any `/api/database/*` hit you cannot tie to a deliberate, authorised backup.

### If a successful or unexplained hit is found
Treat the server as potentially compromised — `/import` allows OS command execution, and `/export` discloses every credential stored in the database (including plaintext `cus_pass`, defect #13):
1. Take the app offline or apply the §4 proxy block immediately.
2. Preserve the logs (copy them aside) before they rotate.
3. **Rotate every secret the database or host holds:** the DB account password; the JWT/app signing secret (invalidates stolen tokens); all integration credentials (BCEL/OnePay QR and other bank QR providers in `bank.config`, the dynamic-QR SPF settings, platform-connector tokens, any Facebook/platform env secrets); and force a password reset for all users (their `cus_pass` is stored in plaintext, so assume every one is known).
4. Inspect the host for anything the `\!` path could have left (unexpected files, cron entries, new processes/users) and restore from a known-good image if in doubt.
5. Review the DB for unauthorised changes (e.g. new admin users, altered prices) against the last trusted backup.

Finding no hits in the available logs is reassuring but not proof, since the logs may not reach back to when the routes first shipped.
