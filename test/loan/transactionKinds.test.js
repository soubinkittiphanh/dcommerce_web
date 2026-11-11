/**
 * Validates components/loan/transactionKinds.js (the generic TransactionDialog's field specs) against
 * the backend's KINDS map, with no test framework (dc_web has none): @babel/core transpiles the ESM
 * module and the source of dc_api's transactionService.js supplies the source of truth for the kinds
 * and their checker flags. Run: node test/loan/transactionKinds.test.js
 */
const fs = require('fs')
const path = require('path')
const assert = require('assert')
const babel = require('@babel/core')

const load = (file) => {
  const code = babel.transformFileSync(path.resolve(__dirname, file), {
    plugins: ['@babel/plugin-transform-modules-commonjs'], babelrc: false, configFile: false
  }).code
  const m = { exports: {} }
  // eslint-disable-next-line no-new-func
  new Function('module', 'exports', 'require', code)(m, m.exports, require)
  return m.exports
}

// Backend KINDS and their checker flags, parsed from dc_api source (no DB load).
const backend = () => {
  const src = fs.readFileSync(path.resolve(__dirname, '../../../dc_api/src/loan/posting/transactionService.js'), 'utf8')
  const block = src.slice(src.indexOf('const KINDS = {'), src.indexOf('};', src.indexOf('const KINDS = {')))
  const kinds = {}
  for (const m of block.matchAll(/([A-Z_]+):\s*\{\s*checker:\s*(true|false)\s*\}/g)) kinds[m[1]] = m[2] === 'true'
  return kinds
}

let failures = 0
const test = (name, fn) => {
  try { fn(); console.log(`  PASS  ${name}`) } catch (err) { failures++; console.error(`  FAIL  ${name}\n        ${err.message}`) }
}

const { KINDS, byValue, postKindOf, kindsForStage } = load('../../components/loan/transactionKinds.js')
const BK = backend()

test('backend KINDS parsed (14 kinds incl. the 10 checker kinds; Phase 6 Stage 4 added BRANCH_TRANSFER)', () => {
  assert.strictEqual(Object.keys(BK).length, 14, `parsed ${Object.keys(BK).length}`)
  assert.strictEqual(Object.values(BK).filter(Boolean).length, 10, 'ten checker kinds')
  assert.strictEqual(BK.BRANCH_TRANSFER, true, 'BRANCH_TRANSFER needs a checker')
})

test('every declared kind is well-formed and maps to a real backend kind', () => {
  for (const k of KINDS) {
    assert.ok(k.value && k.label, `${k.value}: value + label`)
    assert.ok(Array.isArray(k.fields), `${k.value}: fields array`)
    assert.strictEqual(typeof k.checker, 'boolean', `${k.value}: checker boolean`)
    assert.ok(Array.isArray(k.stages) && k.stages.length, `${k.value}: stages`)
    const pk = postKindOf(k)
    assert.ok(pk in BK, `${k.value}: posts a real backend kind (${pk})`)
    assert.strictEqual(k.checker, BK[pk], `${k.value}: checker flag matches backend ${pk}`)
    for (const f of k.fields) {
      assert.ok(f.key && f.label && f.type, `${k.value}.${f.key}: key/label/type`)
      assert.ok(['amount', 'text', 'select', 'bank', 'branch'].includes(f.type), `${k.value}.${f.key}: known type ${f.type}`)
      if (f.type === 'select' && f.key !== 'targetTransactionId') assert.ok(Array.isArray(f.items) && f.items.length, `${k.value}.${f.key}: select items`)
    }
  }
})

test('all 12 kinds the user listed are present (INT_WAIVE maps to WAIVE+INTEREST)', () => {
  const want = ['DISB', 'FEE_COLLECT', 'REVERSAL', 'WAIVE', 'INT_WAIVE', 'FEE_REFUND', 'ADV_REFUND', 'INS_REMIT', 'WRITE_OFF', 'REPOSSESS', 'VEH_DISPOSE', 'RECOVERY']
  for (const v of want) assert.ok(byValue[v], `declares ${v}`)
  assert.strictEqual(byValue.INT_WAIVE.postKind, 'WAIVE', 'INT_WAIVE posts WAIVE')
  assert.strictEqual(byValue.INT_WAIVE.fixed.component, 'INTEREST', 'INT_WAIVE fixes component INTEREST')
})

test('remarks mandatory exactly for WAIVE, INT_WAIVE, WRITE_OFF, REPOSSESS, VEH_DISPOSE, REVERSAL, BRANCH_TRANSFER (and the server requires them for the same kinds)', () => {
  const got = KINDS.filter(k => k.remarksRequired).map(k => k.value).sort()
  assert.deepStrictEqual(got, ['BRANCH_TRANSFER', 'INT_WAIVE', 'REPOSSESS', 'REVERSAL', 'VEH_DISPOSE', 'WAIVE', 'WRITE_OFF'])
  const src = fs.readFileSync(path.resolve(__dirname, '../../../dc_api/src/loan/posting/transactionService.js'), 'utf8')
  const server = [...src.match(/const REMARKS_REQUIRED = new Set\(\[([^\]]*)\]\)/)[1].matchAll(/'([A-Z_]+)'/g)].map(m => m[1]).sort()
  assert.deepStrictEqual(server, ['BRANCH_TRANSFER', 'REPOSSESS', 'REVERSAL', 'VEH_DISPOSE', 'WAIVE', 'WRITE_OFF'], 'server REMARKS_REQUIRED (INT_WAIVE posts as WAIVE)')
})

test('account-number confirmation required exactly for WRITE_OFF, REPOSSESS and BRANCH_TRANSFER', () => {
  const got = KINDS.filter(k => k.confirmAccountNo).map(k => k.value).sort()
  assert.deepStrictEqual(got, ['BRANCH_TRANSFER', 'REPOSSESS', 'WRITE_OFF'])
})

test('Phase 6 Stage 4: BRANCH_TRANSFER entry: checker, BOOKED and DISBURSED, a destination-branch picker (toBranchId) from /api/loan/lookups that never offers the account\'s own branch, a branch column on the memo legs', () => {
  const k = byValue.BRANCH_TRANSFER
  assert.ok(k && k.checker && k.remarksRequired && k.confirmAccountNo)
  assert.deepStrictEqual(k.stages, ['BOOKED', 'DISBURSED'])
  assert.deepStrictEqual(k.fields.map(f => `${f.key}:${f.type}`), ['toBranchId:branch', 'remarks:text'])
  const dlg = fs.readFileSync(path.resolve(__dirname, '../../components/loan/TransactionDialog.vue'), 'utf8')
  assert.match(dlg, /v-else-if="f\.type === 'branch'" v-model="fields\[f\.key\]" :items="branchOptions"/)
  assert.match(dlg, /lookups\.transferBranches\) \|\| \[\]\s*return list\.filter\(b => b\.id !== Number\(this\.summary\.account\.branchId\)\)/)
  assert.match(dlg, /<th v-if="hasBranchLegs">Branch<\/th>/)
  const ctl = fs.readFileSync(path.resolve(__dirname, '../../../dc_api/src/loan/controllers/masterController.js'), 'utf8')
  assert.match(ctl, /transferBranches: await transferBranches\(\)/, 'the API serves the destinations on /lookups')
})

test('kindsForStage returns only entries valid for that stage; DISB is BOOKED-only', () => {
  for (const stage of ['BOOKED', 'DISBURSED']) {
    for (const k of kindsForStage(stage)) assert.ok(k.stages.includes(stage), `${k.value} valid for ${stage}`)
  }
  assert.ok(kindsForStage('BOOKED').some(k => k.value === 'DISB'), 'DISB on BOOKED')
  assert.ok(!kindsForStage('DISBURSED').some(k => k.value === 'DISB'), 'no DISB on DISBURSED')
  assert.ok(kindsForStage('DISBURSED').some(k => k.value === 'WRITE_OFF'), 'WRITE_OFF on DISBURSED')
})

test('each kind is offered only in the stages its backend handler accepts (requireStage in handlers.js)', () => {
  const src = fs.readFileSync(path.resolve(__dirname, '../../../dc_api/src/loan/posting/handlers.js'), 'utf8')
  const server = {}
  for (const m of src.matchAll(/requireStage\(ctx, \[([^\]]*)\], '([A-Z_]+)'\)/g)) server[m[2]] = [...m[1].matchAll(/'([A-Z_]+)'/g)].map(x => x[1])
  assert.deepStrictEqual(server.FEE_COLLECT, ['BOOKED'], 'parsed FEE_COLLECT stage gate')
  for (const k of KINDS) {
    const gate = server[postKindOf(k)]
    if (!gate) continue
    for (const st of k.stages) assert.ok(gate.includes(st), `${k.value} is offered on ${st} but the backend accepts only ${gate.join('/')}`)
  }
})

// Body keys the backend reads, per kind: `input.<key>` inside each `async KIND(` handler in handlers.js, plus
// the keys transactionService/fxContext read for every kind. Parsed from source, like backend() above.
const SHARED_KEYS = ['bankAccountId', 'remarks', 'rateDeviationReason', 'valueDate']
const handlerKeys = () => {
  const src = fs.readFileSync(path.resolve(__dirname, '../../../dc_api/src/loan/posting/handlers.js'), 'utf8')
  const heads = [...src.matchAll(/^ {2}async ([A-Z_]+)\(/gm)]
  const out = {}
  heads.forEach((h, i) => {
    const body = src.slice(h.index, i + 1 < heads.length ? heads[i + 1].index : src.length)
    out[h[1]] = [...new Set([...body.matchAll(/input\.([A-Za-z]+)/g)].map(m => m[1]))]
  })
  out.REVERSAL = ['targetTransactionId'] // handled in transactionService (reverse), not handlers.js
  // BRANCH_TRANSFER is handled in transactionService (transfer), not handlers.js: parse its body there
  const ts = fs.readFileSync(path.resolve(__dirname, '../../../dc_api/src/loan/posting/transactionService.js'), 'utf8')
  const tStart = ts.indexOf('const transfer = async')
  const tBody = ts.slice(tStart, ts.indexOf('const execute =', tStart))
  out.BRANCH_TRANSFER = [...new Set([...tBody.matchAll(/input\.([A-Za-z]+)/g)].map(m => m[1]))]
  return out
}

test('every field and fixed key the dialog sends is a key the backend handler reads (REPOSSESS appraisedValue, VEH_DISPOSE salePrice)', () => {
  const HK = handlerKeys()
  for (const k of KINDS) {
    const pk = postKindOf(k)
    assert.ok(HK[pk], `${k.value}: handler ${pk} found in handlers.js`)
    const reads = new Set([...HK[pk], ...SHARED_KEYS])
    for (const key of [...k.fields.map(f => f.key), ...Object.keys(k.fixed || {})]) {
      assert.ok(reads.has(key), `${k.value}: sends '${key}' but ${pk} reads only ${[...HK[pk]].join(', ') || '(none)'}`)
    }
  }
  // The money fields the backend validates with money(input.X, ...) must all be offered in the dialog
  const src = fs.readFileSync(path.resolve(__dirname, '../../../dc_api/src/loan/posting/handlers.js'), 'utf8')
  for (const v of ['REPOSSESS', 'VEH_DISPOSE']) {
    const start = src.indexOf(`async ${v}(`)
    const body = src.slice(start, src.indexOf('\n  },', start))
    for (const m of body.matchAll(/money\(input\.([A-Za-z]+)/g)) {
      assert.ok(byValue[v].fields.some(f => f.key === m[1]), `${v}: dialog offers required money field '${m[1]}'`)
    }
  }
})

test('REVERSAL dropdown offers only POSTED, unreversed, non-REVERSAL ONLINE rows, latest first (server refuses other sources)', () => {
  const { reversibleTargets } = load('../../components/loan/transactionKinds.js')
  const rows = [
    { id: 1, postingStatus: 'POSTED', isReversed: false, eventCode: 'DISB', source: 'ONLINE' },
    { id: 2, postingStatus: 'POSTED', isReversed: false, eventCode: 'ACCRUAL', source: 'EOD' },
    { id: 3, postingStatus: 'POSTED', isReversed: true, eventCode: 'REPAYMENT', source: 'ONLINE' },
    { id: 4, postingStatus: 'POSTED', isReversed: false, eventCode: 'REVERSAL', source: 'ONLINE' },
    { id: 5, postingStatus: 'PENDING_AUTH', isReversed: false, eventCode: 'WAIVE', source: 'ONLINE' },
    { id: 6, postingStatus: 'POSTED', isReversed: false, eventCode: 'REPAYMENT', source: 'ONLINE' }
  ]
  assert.deepStrictEqual(reversibleTargets(rows).map(r => r.id), [6, 1])
  assert.deepStrictEqual(reversibleTargets(), [])
  // the server-side refusal this mirrors
  const svc = fs.readFileSync(path.resolve(__dirname, '../../../dc_api/src/loan/posting/transactionService.js'), 'utf8')
  assert.ok(svc.includes("target.source !== 'ONLINE'"), 'backend still refuses non-ONLINE reversal targets')
})

test('Phase 6: the dialog lists only the bank accounts of the account\'s branch (GET /api/loan/accounts/:id/bank-accounts, a route the API declares), never the full POS list', () => {
  const dialog = fs.readFileSync(path.resolve(__dirname, '../../components/loan/TransactionDialog.vue'), 'utf8')
  assert.ok(dialog.includes('/api/loan/accounts/${this.summary.account.id}/bank-accounts'), 'fetches the branch list')
  assert.ok(!dialog.includes('/api/bank_account/find'), 'no longer fetches every POS bank account')
  const router = fs.readFileSync(path.resolve(__dirname, '../../../dc_api/src/loan/router.js'), 'utf8')
  assert.match(router, /router\.get\('\/accounts\/:id\/bank-accounts', can\('LN_TRANSACTION', 'VIEW'\), scoped\('account'\)/, 'the API route exists, guarded and branch-scoped')
})

console.log(failures ? `\n${failures} failed` : '\nAll transactionKinds checks passed')

process.exit(failures ? 1 : 0)
