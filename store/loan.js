// Loan Parameter Studio shared state: the user's permissions (to hide or disable actions; the API
// still enforces every call), lookups and engine enums for dropdowns, and the warning banner state.
export const state = () => ({
  permissions: {},
  permissionsLoaded: false,
  lookups: {},
  enums: {},
  lookupsLoaded: false,
  bannerActive: true,
  // Phase 6 Stage 3: the caller's branch scope from GET /api/loan/lookups ({ all, branches: [{ id, name, code }] })
  // and the branch an LN_ALL_BRANCHES user picked in the header (null = all branches). Display only: the API
  // checks the scope on every call.
  branchScope: { all: false, branches: [] },
  branchScopeLoaded: false,
  branchFilter: null
})

export const getters = {
  can: (state) => (functionCode, action) => {
    const actions = state.permissions[functionCode]
    return Array.isArray(actions) && actions.includes(action)
  },
  enumOf: (state) => (key) => state.enums[key] || [],
  // Operational switch from /lookups: when false the UI hides self-authorization (the API also refuses it).
  allowSelfAuthorize: (state) => Boolean(state.lookups.settings && state.lookups.settings.allowSelfAuthorize),
  allBranches: (state) => state.branchScope.all === true,
  branchById: (state) => (id) => state.branchScope.branches.find(b => b.id === Number(id)) || null,
  branchLabel: (state, getters) => (id) => {
    if (id === null || id === undefined) return '-'
    const b = getters.branchById(id)
    return b ? `${b.code ? `${b.code} · ` : ''}${b.name}` : `#${id}`
  },
  // Query params for the branch-filtered lists and reports: only an all-branches user narrows by choice
  branchQuery: (state) => (state.branchScope.all && state.branchFilter ? { branchId: state.branchFilter } : {})
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
  },
  SET_BRANCH_SCOPE (state, scope) {
    state.branchScope = scope && Array.isArray(scope.branches) ? { all: scope.all === true, branches: scope.branches } : { all: false, branches: [] }
    state.branchScopeLoaded = true
    if (!state.branchScope.all || !state.branchScope.branches.some(b => b.id === state.branchFilter)) state.branchFilter = null
  },
  SET_BRANCH_FILTER (state, id) {
    const n = id === null || id === undefined || id === '' ? null : Number(id)
    state.branchFilter = state.branchScope.all && state.branchScope.branches.some(b => b.id === n) ? n : null
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
    const { branchScope, ...lookups } = res.data
    commit('SET_LOOKUPS', lookups)
    // Phase 6 Stage 3: /lookups (LN_LOOKUP VIEW) carries the branch scope; the token-only /status carries no data
    commit('SET_BRANCH_SCOPE', branchScope)
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
