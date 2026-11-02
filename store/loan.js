// Loan Parameter Studio shared state: the user's permissions (to hide or disable actions; the API
// still enforces every call), lookups and engine enums for dropdowns, and the warning banner state.
export const state = () => ({
  permissions: {},
  permissionsLoaded: false,
  lookups: {},
  enums: {},
  lookupsLoaded: false,
  bannerActive: true
})

export const getters = {
  can: (state) => (functionCode, action) => {
    const actions = state.permissions[functionCode]
    return Array.isArray(actions) && actions.includes(action)
  },
  enumOf: (state) => (key) => state.enums[key] || [],
  // Operational switch from /lookups: when false the UI hides self-authorization (the API also refuses it).
  allowSelfAuthorize: (state) => Boolean(state.lookups.settings && state.lookups.settings.allowSelfAuthorize)
}

export const mutations = {
  SET_PERMISSIONS (state, permissions) {
    state.permissions = permissions || {}
    state.permissionsLoaded = true
  },
  SET_LOOKUPS (state, { enums, ...lookups }) {
    state.lookups = lookups
    state.enums = enums || {}
    state.lookupsLoaded = true
  },
  SET_BANNER (state, active) {
    state.bannerActive = active
  }
}

export const actions = {
  async fetchPermissions ({ commit, state }, force = false) {
    if (state.permissionsLoaded && !force) return
    const res = await this.$axios.$get('/api/security/my-permissions')
    commit('SET_PERMISSIONS', res.data.permissions)
  },
  async fetchLookups ({ commit, state, getters }, force = false) {
    if ((state.lookupsLoaded && !force) || !getters.can('LN_LOOKUP', 'VIEW')) return
    const res = await this.$axios.$get('/api/loan/lookups')
    commit('SET_LOOKUPS', res.data)
  },
  async fetchBanner ({ commit }) {
    const res = await this.$axios.$get('/api/loan/status')
    commit('SET_BANNER', res.data.warningBannerActive)
  },
  async init ({ dispatch }) {
    await dispatch('fetchPermissions')
    await Promise.all([dispatch('fetchLookups'), dispatch('fetchBanner')])
  }
}
