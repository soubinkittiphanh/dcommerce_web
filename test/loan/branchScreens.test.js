/**
 * Phase 6 Stage 3 (branch screens), no test framework (dc_web has none): @babel/core transpiles the ESM
 * modules; dc_api source supplies the routes and parameter entities (read as text, nothing loaded).
 * Run: node test/loan/branchScreens.test.js
 */
const fs = require('fs')
const path = require('path')
const assert = require('assert')
const babel = require('@babel/core')

const WEB = path.resolve(__dirname, '../..')
const API = path.resolve(WEB, '../dc_api')
const read = rel => fs.readFileSync(path.join(WEB, rel), 'utf8')
const load = (file) => {
  const code = babel.transformFileSync(path.join(WEB, file), { plugins: ['@babel/plugin-transform-modules-commonjs'], babelrc: false, configFile: false }).code
  const m = { exports: {} }
  // eslint-disable-next-line no-new-func
  new Function('module', 'exports', 'require', code)(m, m.exports, require)
  return m.exports
}

let failures = 0
const test = (name, fn) => {
  try { fn(); console.log(`  PASS  ${name}`) } catch (err) { failures++; console.error(`  FAIL  ${name}\n        ${err.message}`) }
}

const store = load('store/loan.js')
const freshState = () => store.state()
const getters = (state) => {
  const g = {}
  for (const [k, fn] of Object.entries(store.getters)) Object.defineProperty(g, k, { get: () => fn(state, g) })
  return g
}
const A = { id: 1, name: 'Head office', code: 'SR1' }
const B = { id: 7, name: 'Branch seven', code: null }

test('store: staff scope; the selector filter is ignored for a non-all-branches user (no ?branchId sent)', () => {
  const s = freshState()
  store.mutations.SET_BRANCH_SCOPE(s, { all: false, branches: [A] })
  store.mutations.SET_BRANCH_FILTER(s, 1)
  const g = getters(s)
  assert.strictEqual(s.branchFilter, null)
  assert.deepStrictEqual(g.branchQuery, {})
  assert.strictEqual(g.allBranches, false)
  assert.strictEqual(g.branchLabel(1), 'SR1 · Head office')
  assert.strictEqual(g.branchLabel(99), '#99')
  assert.strictEqual(g.branchLabel(null), '-')
})

test('store: all-branches user picks a branch (?branchId=7), back to all (no param); an unknown id is refused', () => {
  const s = freshState()
  store.mutations.SET_BRANCH_SCOPE(s, { all: true, branches: [A, B] })
  const g = getters(s)
  store.mutations.SET_BRANCH_FILTER(s, '7')
  assert.deepStrictEqual(g.branchQuery, { branchId: 7 })
  assert.strictEqual(g.branchLabel(7), 'Branch seven', 'no code: name only')
  store.mutations.SET_BRANCH_FILTER(s, null)
  assert.deepStrictEqual(g.branchQuery, {})
  store.mutations.SET_BRANCH_FILTER(s, 42)
  assert.deepStrictEqual(g.branchQuery, {}, 'not a listed branch')
})

test('store: a scope reload that drops the picked branch (or LN_ALL_BRANCHES) clears the filter; a missing scope fails closed', () => {
  const s = freshState()
  store.mutations.SET_BRANCH_SCOPE(s, { all: true, branches: [A, B] })
  store.mutations.SET_BRANCH_FILTER(s, 7)
  store.mutations.SET_BRANCH_SCOPE(s, { all: false, branches: [B] })
  assert.strictEqual(s.branchFilter, null)
  store.mutations.SET_BRANCH_SCOPE(s, undefined)
  assert.deepStrictEqual(s.branchScope, { all: false, branches: [] })
  assert.strictEqual(s.branchScopeLoaded, true)
})

test('store: fetchLookups takes branchScope from GET /api/loan/lookups (which the API serves); /status stays data-free', () => {
  const src = read('store/loan.js')
  assert.match(src, /const \{ branchScope, \.\.\.lookups \} = res\.data[\s\S]*commit\('SET_BRANCH_SCOPE', branchScope\)/)
  const master = fs.readFileSync(path.join(API, 'src/loan/controllers/masterController.js'), 'utf8')
  assert.match(master, /getLookups: handle\(async req => \(\{ \.\.\.\(await masterService\.getLookups\(req\.query\)\), branchScope: await describeScope\(req\.user\.id\)/)
  const tax = fs.readFileSync(path.join(API, 'src/loan/controllers/taxProfileController.js'), 'utf8')
  assert.match(tax, /getStatus: handle\(\(\) => taxProfileService\.getStatus\(\)\),/, '/status answers only the tax-profile banner state')
  assert.ok(read('components/loan/BranchGlReport.vue').includes("'/api/loan/lookups'"))
})

test('list and report pages send the header branch filter and reload when it changes; the selector is shown on them', () => {
  const pages = {
    'pages/admin/loan/accounts/index.vue': '/api/loan/accounts',
    'pages/admin/loan/applications/index.vue': '/api/loan/applications',
    'pages/admin/loan/pending/index.vue': '/api/loan/transactions/pending',
    'pages/admin/loan/collection/index.vue': '/api/loan/reports/overdue',
    'pages/admin/loan/reports/index.vue': '/api/loan/reports/'
  }
  for (const [file, url] of Object.entries(pages)) {
    const src = read(file)
    assert.ok(src.includes(url), `${file} calls ${url}`)
    assert.match(src, /\.\.\.this\.\$store\.getters\['loan\/branchQuery'\]|params: this\.\$store\.getters\['loan\/branchQuery'\]/, `${file} sends branchQuery`)
    assert.match(src, /'\$store\.state\.loan\.branchFilter' \(\) \{ if \(this\.ready\) this\.load\(\) \}/, `${file} reloads on a branch change`)
    assert.match(src, /<page-title[^>]*branch-selector/, `${file} shows the selector`)
  }
  // the API narrows exactly these routes with ?branchId (scoped('list'))
  const router = fs.readFileSync(path.join(API, 'src/loan/router.js'), 'utf8')
  for (const r of ['/accounts', '/applications', '/transactions/pending', '/reports/overdue', '/reports/portfolio', '/reports/aging', '/reports/npl', '/reports/provisions', '/reports/gl-tieout']) {
    assert.match(router, new RegExp(`router\\.get\\('${r.replace(/\//g, '\\/')}', [^\\n]*scoped\\('list'\\)`), `API ${r} is scoped('list')`)
  }
})

test('reports: portfolio groupBy=branch is sent only on the portfolio tab, and the API accepts it', () => {
  const src = read('pages/admin/loan/reports/index.vue')
  assert.match(src, /this\.current\.key === 'portfolio' && this\.groupBy === 'branch' \? \{ groupBy: 'branch' \}/)
  const ctl = fs.readFileSync(path.join(API, 'src/loan/controllers/reportController.js'), 'utf8')
  assert.match(ctl, /req\.query\.groupBy === 'branch' \? 'branch'/)
})

test('detail shows the account branch; every loan screen title carries the branch chip (PageTitle → BranchBar)', () => {
  assert.match(read('pages/admin/loan/accounts/_id.vue'), /branchLabel'\]\(summary\.account\.branchId\)/)
  assert.match(read('components/loan/PageTitle.vue'), /<branch-bar :selector="branchSelector"/)
  const bar = read('components/loan/BranchBar.vue')
  assert.match(bar, /v-if="all && selector"/, 'selector only for all-branches users')
  assert.match(read('pages/admin/loan/studio/index.vue'), /<branch-bar \/>/)
})

test('application: branch read-only from the sale; without a sale the maker\'s single branch read-only, a pick for several/all, refused with none; branchId never sent with a sale', () => {
  const src = read('pages/admin/loan/applications/index.vue')
  assert.match(src, /v-if="form\.vehicleSaleHeaderId"[^>]*readonly/)
  assert.match(src, /v-else-if="branchMode === 'single'"[^>]*readonly/)
  assert.match(src, /v-else-if="branchMode === 'pick'" v-model="form\.branchId"/)
  assert.match(src, /:disabled="!form\.vehicleSaleHeaderId && branchMode === 'none'"/)
  assert.match(src, /if \(k === 'branchId' && \(this\.form\.vehicleSaleHeaderId \|\| this\.branchMode !== 'pick'\)\) continue/)
})

test('EOD screen: only LN_ALL_BRANCHES users see and load it (API: POST /eod/run is scoped(\'all-branches\'))', () => {
  const src = read('pages/admin/loan/eod/index.vue')
  assert.match(src, /v-else-if="!allBranches"/)
  assert.match(src, /if \(this\.can\('VIEW'\) && this\.allBranches\) await this\.load\(\)/)
  const router = fs.readFileSync(path.join(API, 'src/loan/router.js'), 'utf8')
  assert.match(router, /router\.post\('\/eod\/run', [^\n]*scoped\('all-branches'\)/)
})

test('param screens: branch-profile and branch-bank-account under LN_BRANCH (as the API registry), maker-checker by id, purpose from the API enum, SUPER_ADMIN only in the seed', () => {
  const { MASTER_CONFIGS, MASTER_GROUPS } = load('common/loan/masterConfigs.js')
  const reg = fs.readFileSync(path.join(API, 'src/loan/services/paramRegistry.js'), 'utf8')
  assert.ok(MASTER_GROUPS.some(g => g.key === 'branch'))
  for (const entity of ['branch-profile', 'branch-bank-account']) {
    const cfg = MASTER_CONFIGS.find(c => c.entity === entity)
    assert.ok(cfg, `${entity} configured`)
    assert.strictEqual(cfg.functionCode, 'LN_BRANCH')
    assert.ok(!cfg.keyField, 'keyed by id (POST /params/:entity/:id/authorize)')
    assert.match(reg, new RegExp(`'${entity}': \\{\\s*model: '\\w+', functionCode: 'LN_BRANCH'`), `API registry: ${entity} under LN_BRANCH`)
    for (const fld of cfg.fields) assert.ok(new RegExp(`\\b${fld.key}\\b`).test(fs.readFileSync(path.join(API, 'src/loan/models/branch.js'), 'utf8')), `${entity}.${fld.key} is a model column`)
  }
  for (const entity of ['branch-profile', 'branch-bank-account']) {
    assert.strictEqual(MASTER_CONFIGS.find(c => c.entity === entity).fields.find(f => f.key === 'isActive').default, true, `${entity}: a new row starts active`)
  }
  assert.match(read('components/loan/MasterDataTable.vue'), /x\.default !== undefined \? x\.default :/, 'the create form honours a field default')
  const purpose = MASTER_CONFIGS.find(c => c.entity === 'branch-bank-account').fields.find(f => f.key === 'purpose')
  assert.strictEqual(purpose.enumKey, 'branch-bank-account.purpose')
  assert.match(reg, /purpose: enumOf\('CASH', 'BANK'\)/)
  const seed = fs.readFileSync(path.join(API, 'seed_loan_phase6.js'), 'utf8')
  assert.match(seed, /LN_BRANCH/)
})

test('parameter tables: the maker of a PENDING row gets no Authorize/Reject (unless self-authorize is on)', () => {
  const src = read('components/loan/MasterDataTable.vue')
  assert.match(src, /item\.authStatus === 'PENDING' && can\('AUTHORIZE'\) && !selfBlocked\(item\)/)
  assert.match(src, /Number\(item\.makerId\) === this\.userId && !this\.\$store\.getters\['loan\/allowSelfAuthorize'\]/)
})

test('BS/TB pages: branch split under the company report, via ?branchId on the Stage 2 GL endpoints', () => {
  for (const [file, kind] of [['pages/reports/financial/balance-sheet/index.vue', 'bs'], ['pages/reports/financial/trial-balance/index.vue', 'tb']]) {
    assert.match(read(file), new RegExp(`<branch-gl-report kind="${kind}"`))
  }
  const comp = read('components/loan/BranchGlReport.vue')
  assert.match(comp, /params: \{ asOfDate: this\.asOfDate, branchId: this\.branchId \}/)
  const ctl = fs.readFileSync(path.join(API, 'src/GL/adbReportController.js'), 'utf8')
  assert.match(ctl, /if \(req\.query\.branchId !== undefined\) return ADBReportController\.getTrialBalanceByBranch/)
  assert.match(ctl, /notBranchTagged/)
})

test('transaction and payment dialogs: bank list from the account\'s branch (GET /accounts/:id/bank-accounts), never the full POS list', () => {
  for (const file of ['components/loan/TransactionDialog.vue', 'components/loan/PaymentDialog.vue']) {
    const src = read(file)
    assert.match(src, /\/api\/loan\/accounts\/\$\{this\.summary\.account\.id\}\/bank-accounts/, file)
    assert.ok(!src.includes('/api/bank_account/find'), `${file} does not load the full POS list`)
  }
})

test('every loan bank/cash picker uses the branch route: no loan screen loads a POS bank list itself (the branch-bank-account mapping screen is the one exception); every kind with a bank field goes through TransactionDialog', () => {
  const walk = (dir) => fs.readdirSync(path.join(WEB, dir), { withFileTypes: true }).flatMap(e => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]))
  const files = ['components/loan', 'pages/admin/loan', 'common/loan'].flatMap(walk).filter(f => /\.(vue|js)$/.test(f) && !f.endsWith('.test.js'))
  const posBankList = /\/api\/bank_account\/find|\/api\/bank_account\/findAll|\/api\/bank\/find|bankAccount\/find/
  const offenders = files.filter(f => posBankList.test(read(f)) && f !== 'common/loan/loanApi.js')
  assert.deepStrictEqual(offenders, [], `screens loading a POS bank list: ${offenders.join(', ')}`)
  // loanApi's POS 'bankAccount' source is used only by the mapping screen's config
  const users = files.filter(f => /pos: 'bankAccount'/.test(read(f)))
  assert.deepStrictEqual(users, ['common/loan/masterConfigs.js'])
  const { MASTER_CONFIGS } = load('common/loan/masterConfigs.js')
  assert.deepStrictEqual(MASTER_CONFIGS.filter(c => c.fields.some(x => x.pos === 'bankAccount')).map(c => c.entity), ['branch-bank-account'])
  const { KINDS } = load('components/loan/transactionKinds.js')
  const withBank = KINDS.filter(k => k.fields.some(x => x.type === 'bank')).map(k => k.value)
  assert.deepStrictEqual(withBank.sort(), ['ADV_REFUND', 'FEE_COLLECT', 'FEE_REFUND', 'INS_REMIT', 'RECOVERY', 'VEH_DISPOSE'], 'kinds with a bank picker')
  console.log(`        bank pickers: TransactionDialog (${withBank.join(', ')}), PaymentDialog (REPAYMENT, PREPAY); both GET /api/loan/accounts/:id/bank-accounts`)
})

console.log(failures ? `\n${failures} failed` : '\nAll branch screen checks passed')
process.exit(failures ? 1 : 0)
