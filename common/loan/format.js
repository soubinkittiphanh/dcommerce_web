// Display helpers for loan screens. Amounts arrive from the API as decimal strings; they are grouped and
// trimmed as text, never converted to floats.

// '12000.0000' -> '12,000.00' (decimals: digits to show; null keeps the given digits)
export const fmtAmount = (value, decimals = 2) => {
  if (value === null || value === undefined || value === '') return '-'
  const s = String(value)
  const neg = s.startsWith('-')
  const [i, f = ''] = (neg ? s.slice(1) : s).split('.')
  const int = (i.replace(/^0+(?=\d)/, '') || '0').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const frac = decimals === null ? f : f.padEnd(decimals, '0').slice(0, decimals)
  return `${neg ? '-' : ''}${int}${frac ? `.${frac}` : ''}`
}

// Decimal places per currency code for display (base LAK has none)
export const decimalsOf = code => (code === 'LAK' ? 0 : 2)

export const fmtMoney = (value, code) => (value === null || value === undefined ? '-' : `${code ? `${code} ` : ''}${fmtAmount(value, decimalsOf(code))}`)

// '21150.00000000' -> '21,150.00' (rates shown with 2 to 8 decimals, trailing zeros trimmed after 2)
export const fmtRate = (rate) => {
  if (!rate) return '-'
  const [i, f = ''] = String(rate).split('.')
  const trimmed = f.replace(/0+$/, '')
  return fmtAmount(`${i}.${trimmed.padEnd(2, '0')}`, null)
}

export const AGING_COLORS = { CURRENT: 'green', '1-30': 'light-green darken-1', '31-60': 'amber darken-2', '61-90': 'orange darken-2', '91-180': 'deep-orange', '181+': 'red darken-2' }
export const TX_COLORS = { POSTED: 'green', PENDING_AUTH: 'orange', REJECTED: 'red' }

// Exact decimal helpers (4 decimals) for display totals; never floats
const toUnits = (v) => { const s = String(v || '0'); const neg = s.startsWith('-'); const [i, f = ''] = (neg ? s.slice(1) : s).split('.'); const u = BigInt(i || '0') * 10000n + BigInt((f + '0000').slice(0, 4)); return neg ? -u : u }
const fromUnits = (u) => { const neg = u < 0n; const d = (neg ? -u : u).toString().padStart(5, '0'); return `${neg ? '-' : ''}${d.slice(0, -4)}.${d.slice(-4)}` }
export const addAmounts = list => fromUnits(list.reduce((s, v) => s + toUnits(v), 0n))
// '0.180000' -> '18.00' (a rate 0..1 as a percentage with 2 decimals, half-up)
export const ratePct = (rate) => { const s = String(rate || '0'); const [i, f = ''] = s.split('.'); const u = BigInt(i) * 1000000n + BigInt((f + '000000').slice(0, 6)); const c = (u + 50n) / 100n; return `${c / 100n}.${(c % 100n).toString().padStart(2, '0')}` }
