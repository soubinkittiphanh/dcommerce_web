// Small helpers shared by the loan Parameter Studio components.

// Server message for a failed call (the API never returns SQL; see dc_api src/loan/errors.js)
export const errMsg = (err) =>
  (err && err.response && err.response.data && err.response.data.message) || (err && err.message) || String(err)

// Unwraps { data } / { data: { items } } / bare arrays from the different APIs
export const asList = (payload) => {
  const data = payload && payload.data !== undefined ? payload.data : payload
  if (Array.isArray(data)) return data
  if (data && Array.isArray(data.items)) return data.items
  if (data && Array.isArray(data.data)) return data.data
  return []
}

// Options from existing POS tables (not loan parameters)
const POS_SOURCES = {
  currency: { url: '/api/currency/findAll', value: 'id', text: c => `${c.code} - ${c.name}` },
  tax: { url: '/api/tax/active', value: 'id', text: t => `${t.code} - ${t.name} (${t.rate})` },
  location: { url: '/api/location/find', value: 'id', text: l => l.name || l.locationName || `#${l.id}` }
}

export const loadPosOptions = async (axios, kind) => {
  const src = POS_SOURCES[kind]
  if (!src) return []
  const res = await axios.$get(src.url)
  return asList(res).map(r => ({ value: r[src.value], text: src.text(r) }))
}

// Options from another loan parameter entity (unauthorized and authorized rows; rejected/closed excluded)
export const loadRefOptions = async (axios, ref) => {
  const res = await axios.$get(`/api/loan/params/${ref.entity}`, { params: { authStatus: 'PENDING,AUTHORIZED', limit: 500 } })
  return asList(res).map(r => ({
    value: r[ref.value || 'id'],
    text: typeof ref.text === 'function' ? ref.text(r) : `${r[ref.text || 'name']}${r.authStatus === 'PENDING' ? ' (pending)' : ''}`
  }))
}

export const AUTH_COLORS = { PENDING: 'orange', AUTHORIZED: 'green', REJECTED: 'red', CLOSED: 'grey' }
