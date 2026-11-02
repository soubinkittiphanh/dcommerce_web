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

1. **Gate both routes with the role check that already exists on `main`.** `src/parking/validation.js` exports `checkRole(allowedRoles)`, which 401s without a user and otherwise loads the user with their role and treats `groupId === 1` or role level ≥ 100 as super-admin. Use it:
   ```js
   const { checkRole } = require('../parking/validation');
   router.get('/export',  validateToken, checkRole(['admin']), controller.exportDatabase);
   router.post('/import', validateToken, checkRole(['admin']), upload.single('file'), controller.importDatabase);
   ```
   If a dedicated permission is preferred over the generic `admin` role, add one; `checkRole(['admin'])` is the smallest change that matches existing `main` code.
2. **Put `checkRole` before `upload.single('file')`** on `/import` (as above) so an unauthorised request is rejected before any file is written to disk.
3. **Limit the upload and move it out of the public folder:** add `limits: { fileSize: <N> MB }` to the multer config, and set `destination` to `os.tmpdir()` (or another path **outside `uploads/`**), so a rejected or in-flight file is never web-reachable (defect #11).
4. **Audit every call:** write one row (existing audit table or a log line) with the user id, IP (`req.ip`), action (`export`/`import`), filename and outcome.
5. **Handle the non-.sql and spawn-error cases** so they return a clean 400/500 and always delete the temp file (the current `.txt` path returns an unshaped 500).
6. **Optional, recommended:** require a second admin confirmation for `/import`, given it can run shell commands; or drop `/import` from the web API entirely and restore only from the server (the Phase 6 runbook already backs up with `mariadb-dump` on the server and tells operators not to use this screen).

Note: step 1 is the control that stops the critical exposure. The shell-command risk in `/import` is inherent to restoring through the `mysql` client; restricting to admin and adding a second-person confirmation is the practical mitigation. Removing `/import` from the web removes it entirely.

### Tests (new, on the fix branch)
A small integration test, same shape as the loan suite (start the API on a free port against a **local throwaway `*_test` database**, never a customer DB; see `dc_api/test/loan/run.js` for the clone-and-start pattern):
- `GET /export` and `POST /import` **without a token → 401**.
- both **with a non-admin (cashier) token → 403** (the fix's core assertion; today this is 200).
- both **with an admin token → 200** (export streams SQL; import of a tiny valid `.sql` succeeds).
- `POST /import` with a **non-.sql** file → 400, and no file left in the upload folder.
- `POST /import` with a file **larger than the limit** → 413/400, rejected before the DB is touched.
- an **inactive** admin user → 403 (fold an `isActive` check into the fix if `checkRole` does not already cover it).
- the upload lands **outside `uploads/`** (assert the destination path).
- a **regression**: an admin export/import still works end to end.
- do **not** add a test that uploads a `\!` shell line against anything but a disposable local DB; assert the permission gate instead.

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
