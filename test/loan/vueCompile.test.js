/**
 * Compile-check for the loan .vue files touched by the transaction-entry work (dc_web has no unit-test
 * harness). vue-template-compiler parses the SFC and compiles the <template> (reporting template syntax
 * errors and v-bind/directive mistakes); @babel/core parses the <script>. It does not render; it proves
 * the files compile. Run: node test/loan/vueCompile.test.js
 */
const fs = require('fs')
const path = require('path')
const assert = require('assert')
const compiler = require('vue-template-compiler')
const babel = require('@babel/core')

const files = [
  '../../components/loan/TransactionDialog.vue',
  '../../pages/admin/loan/pending/index.vue',
  '../../pages/admin/loan/accounts/_id.vue'
]

let failures = 0
for (const rel of files) {
  const abs = path.resolve(__dirname, rel)
  try {
    const sfc = compiler.parseComponent(fs.readFileSync(abs, 'utf8'))
    assert.ok(sfc.template && sfc.template.content, 'has a <template>')
    const compiled = compiler.compile(sfc.template.content, { whitespace: 'condense' })
    assert.strictEqual(compiled.errors.length, 0, `template errors: ${compiled.errors.join('; ')}`)
    assert.ok(sfc.script && sfc.script.content, 'has a <script>')
    babel.transform(sfc.script.content, { presets: ['@babel/preset-env'], babelrc: false, configFile: false })
    console.log(`  PASS  ${path.basename(abs)} compiles (template + script)`)
  } catch (err) {
    failures++
    console.error(`  FAIL  ${path.basename(abs)}\n        ${err.message}`)
  }
}
console.log(failures ? `\n${failures} failed` : '\nAll .vue files compile')
process.exit(failures ? 1 : 0)
