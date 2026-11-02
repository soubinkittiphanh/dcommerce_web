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

test('backend KINDS parsed (13 kinds incl. the 9 checker kinds)', () => {
  assert.strictEqual(Object.keys(BK).length, 13, `parsed ${Object.keys(BK).length}`)
  assert.strictEqual(Object.values(BK).filter(Boolean).length, 9, 'nine checker kinds')
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
      assert.ok(['amount', 'text', 'select', 'bank'].includes(f.type), `${k.value}.${f.key}: known type ${f.type}`)
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

test('remarks mandatory exactly for WAIVE, INT_WAIVE, WRITE_OFF, REPOSSESS, VEH_DISPOSE, REVERSAL', () => {
  const got = KINDS.filter(k => k.remarksRequired).map(k => k.value).sort()
  assert.deepStrictEqual(got, ['INT_WAIVE', 'REPOSSESS', 'REVERSAL', 'VEH_DISPOSE', 'WAIVE', 'WRITE_OFF'])
})

test('account-number confirmation required exactly for WRITE_OFF and REPOSSESS', () => {
  const got = KINDS.filter(k => k.confirmAccountNo).map(k => k.value).sort()
  assert.deepStrictEqual(got, ['REPOSSESS', 'WRITE_OFF'])
})

test('kindsForStage returns only entries valid for that stage; DISB is BOOKED-only', () => {
  for (const stage of ['BOOKED', 'DISBURSED']) {
    for (const k of kindsForStage(stage)) assert.ok(k.stages.includes(stage), `${k.value} valid for ${stage}`)
  }
  assert.ok(kindsForStage('BOOKED').some(k => k.value === 'DISB'), 'DISB on BOOKED')
  assert.ok(!kindsForStage('DISBURSED').some(k => k.value === 'DISB'), 'no DISB on DISBURSED')
  assert.ok(kindsForStage('DISBURSED').some(k => k.value === 'WRITE_OFF'), 'WRITE_OFF on DISBURSED')
})

console.log(failures ? `\n${failures} failed` : '\nAll transactionKinds checks passed')
process.exit(failures ? 1 : 0)
