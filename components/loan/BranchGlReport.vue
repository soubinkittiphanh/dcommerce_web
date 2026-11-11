<template>
  <v-card outlined class="mt-4" data-test="branch-gl-report">
    <v-card-title class="py-2">
      <v-icon left color="primary">mdi-store-marker-outline</v-icon>
      <span class="text-subtitle-1 font-weight-bold">{{ kind === 'tb' ? 'ງົບທົດລອງຕາມສາຂາ (Trial balance by branch)' : 'ໃບດຸ່ນດ່ຽງ: ສິນເຊື່ອຕາມສາຂາ (Balance sheet: loan lines by branch)' }}</span>
      <v-spacer />
      <v-select
        v-model="branchId"
        :items="options"
        dense
        outlined
        hide-details
        clearable
        label="ສາຂາ (Branch)"
        style="max-width: 280px"
        data-test="gl-branch-selector"
        @change="load"
      />
    </v-card-title>
    <v-card-text>
      <div v-if="!branchId" class="text-caption grey--text">
        ເລືອກສາຂາເພື່ອແຍກລາຍການສິນເຊື່ອ. ລາຍການ POS ທັງໝົດ ແລະ ລາຍການສິນເຊື່ອທີ່ບໍ່ມີສາຂາ ຢູ່ໃນ "Not branch-tagged (POS)".
        (Pick a branch to split the loan lines. Every POS line, and any loan line without a branch, is under "Not branch-tagged (POS)". The report above is the company total and does not change.)
      </div>
      <v-progress-linear v-else-if="loading" indeterminate color="primary" />
      <v-alert v-else-if="error" type="warning" text dense>{{ error }}</v-alert>

      <template v-else-if="data && kind === 'tb'">
        <div v-for="part in tbParts" :key="part.key" class="mb-4">
          <div class="font-weight-bold mb-1">{{ part.title }}</div>
          <v-data-table :headers="tbHeaders" :items="part.data.accounts" dense hide-default-footer :items-per-page="-1">
            <template #[`item.debitBalance`]="{ item }">{{ fmt(item.debitBalance) }}</template>
            <template #[`item.creditBalance`]="{ item }">{{ fmt(item.creditBalance) }}</template>
          </v-data-table>
          <div class="text-right text-body-2 font-weight-bold">Dr {{ fmt(part.data.totalDebits) }} · Cr {{ fmt(part.data.totalCredits) }}</div>
        </div>
      </template>

      <template v-else-if="data && kind === 'bs'">
        <div v-for="part in bsParts" :key="part.key" class="mb-4">
          <div class="font-weight-bold mb-1">{{ part.title }}</div>
          <v-simple-table dense>
            <tbody>
              <tr v-for="(l, i) in part.lines" :key="i">
                <td class="text-caption">{{ l.side }}</td><td>{{ l.accountNumber }}</td><td>{{ l.accountName }}</td><td class="text-right">{{ fmt(l.balance) }}</td>
              </tr>
              <tr v-if="!part.lines.length"><td colspan="4" class="text-caption grey--text">ບໍ່ມີລາຍການ (No lines)</td></tr>
            </tbody>
          </v-simple-table>
          <div class="text-right text-body-2 font-weight-bold">Assets {{ fmt(part.totalAssets) }} · Liabilities {{ fmt(part.totalLiabilities) }}</div>
        </div>
        <div v-if="data.notBranchTagged && data.notBranchTagged.pos" class="text-caption grey--text">
          POS (not branch-tagged): assets {{ fmt(data.notBranchTagged.pos.assets.total) }} · liabilities {{ fmt(data.notBranchTagged.pos.liabilities.total) }}
        </div>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
// Phase 6 Stage 3: the branch split of the GL trial balance / balance sheet loan section (dc_api Stage 2,
// GET /api/gl/reports/{trial-balance|balance-sheet}?branchId=). Shown under the company report, which it
// never changes. Branch choices: the caller's loan branch scope (all locations for LN_ALL_BRANCHES).
export default {
  name: 'BranchGlReport',
  props: {
    kind: { type: String, required: true, validator: v => ['tb', 'bs'].includes(v) },
    asOfDate: { type: String, required: true }
  },
  data () {
    return {
      branchId: null,
      branches: [],
      data: null,
      loading: false,
      error: null,
      tbHeaders: [
        { text: 'ເລກບັນຊີ (Account)', value: 'accountNumber' }, { text: 'ຊື່ (Name)', value: 'accountName' },
        { text: 'Dr', value: 'debitBalance', align: 'end' }, { text: 'Cr', value: 'creditBalance', align: 'end' }
      ]
    }
  },
  computed: {
    options () { return this.branches.map(b => ({ value: b.id, text: `${b.code ? `${b.code} · ` : ''}${b.name}` })) },
    branchText () { const o = this.options.find(x => x.value === this.branchId); return o ? o.text : `#${this.branchId}` },
    tbParts () {
      return [
        { key: 'branch', title: `ສາຂາ (Branch) ${this.branchText}`, data: this.data },
        { key: 'not', title: this.data.notBranchTagged.label, data: this.data.notBranchTagged }
      ]
    },
    bsParts () {
      const lines = part => [
        ...((part && part.assets) || []).map(l => ({ side: 'Asset', ...l })),
        ...((part && part.liabilities) || []).map(l => ({ side: 'Liability', ...l }))
      ]
      const b = this.data.branch || {}
      const n = (this.data.notBranchTagged && this.data.notBranchTagged.loan) || {}
      return [
        { key: 'branch', title: `ສາຂາ (Branch) ${this.branchText}: loan lines`, lines: lines(b), totalAssets: b.totalAssets, totalLiabilities: b.totalLiabilities },
        { key: 'not', title: `${this.data.notBranchTagged.label}: loan lines without a branch`, lines: lines(n), totalAssets: n.totalAssets, totalLiabilities: n.totalLiabilities }
      ]
    }
  },
  watch: {
    asOfDate () { if (this.branchId) this.load() }
  },
  async mounted () {
    try {
      const res = await this.$axios.$get('/api/loan/lookups')
      this.branches = (res.data.branchScope && res.data.branchScope.branches) || []
    } catch (e) {
      // no LN_LOOKUP VIEW: no branch list, so the split is not offered
      this.branches = []
    }
  },
  methods: {
    fmt (v) {
      const n = Number(v || 0)
      return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    },
    async load () {
      this.data = null
      this.error = null
      if (!this.branchId) return
      this.loading = true
      try {
        const url = this.kind === 'tb' ? '/api/gl/reports/trial-balance' : '/api/gl/reports/balance-sheet'
        const { data } = await this.$axios.get(url, { params: { asOfDate: this.asOfDate, branchId: this.branchId } })
        this.data = data.data || data
      } catch (err) {
        const d = err.response && err.response.data
        this.error = (d && (d.error || d.message)) || err.message
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
