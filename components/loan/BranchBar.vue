<template>
  <div v-if="loaded" class="d-flex align-center branch-bar">
    <v-select
      v-if="all && selector"
      :value="filter"
      :items="options"
      dense
      outlined
      hide-details
      prepend-inner-icon="mdi-store-marker-outline"
      label="ສາຂາ (Branch)"
      class="branch-select"
      data-test="branch-selector"
      @change="pick"
    />
    <v-chip v-else small outlined :color="branches.length || all ? 'primary' : 'red'" data-test="branch-chip" :title="title">
      <v-icon left small>mdi-store-marker-outline</v-icon>{{ text }}
    </v-chip>
  </div>
</template>

<script>
// Phase 6 Stage 3: header branch chip on every loan screen. Staff see their branch (or branches); an
// LN_ALL_BRANCHES user sees "All branches" and, on screens that list data (selector), a branch selector that
// narrows the lists and reports (?branchId). Display only: the API checks the scope on every call.
const STORAGE_KEY = 'loan.branchFilter'

export default {
  name: 'BranchBar',
  props: {
    selector: { type: Boolean, default: false }
  },
  computed: {
    loaded () { return this.$store.state.loan.branchScopeLoaded },
    all () { return this.$store.getters['loan/allBranches'] },
    branches () { return this.$store.state.loan.branchScope.branches },
    filter () { return this.$store.state.loan.branchFilter },
    label () { return this.$store.getters['loan/branchLabel'] },
    options () {
      return [{ value: null, text: 'ທຸກສາຂາ (All branches)' }, ...this.branches.map(b => ({ value: b.id, text: this.label(b.id) }))]
    },
    text () {
      if (this.all) return this.filter ? this.label(this.filter) : 'ທຸກສາຂາ (All branches)'
      if (!this.branches.length) return 'ບໍ່ມີສາຂາ (No branch: no active POS terminal)'
      return this.branches.map(b => this.label(b.id)).join(', ')
    },
    title () {
      return this.all ? 'LN_ALL_BRANCHES: every branch' : 'Your branches come from your active POS terminals'
    }
  },
  watch: {
    loaded: { immediate: true, handler (v) { if (v) this.restore() } }
  },
  methods: {
    restore () {
      if (!this.all || this.filter !== null) return
      let saved = null
      try { saved = window.localStorage.getItem(STORAGE_KEY) } catch (e) { saved = null }
      if (saved) this.$store.commit('loan/SET_BRANCH_FILTER', saved)
    },
    pick (id) {
      this.$store.commit('loan/SET_BRANCH_FILTER', id)
      try {
        if (this.filter === null) window.localStorage.removeItem(STORAGE_KEY)
        else window.localStorage.setItem(STORAGE_KEY, String(this.filter))
      } catch (e) { /* storage unavailable: the choice lasts for this page only */ }
    }
  }
}
</script>

<style scoped>
.branch-select { max-width: 260px; min-width: 200px; }
</style>
