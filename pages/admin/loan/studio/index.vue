<template>
  <div class="loan-studio pa-4">
    <loan-banner />

    <div class="d-flex align-center mb-4">
      <v-avatar color="primary lighten-5" size="44" class="mr-3">
        <v-icon color="primary">mdi-car-key</v-icon>
      </v-avatar>
      <div>
        <div class="text-h5 font-weight-black primary--text">ສູນຕັ້ງຄ່າພາຣາມິເຕີສິນເຊື່ອ</div>
        <div class="text-body-2 grey--text">Loan Parameter Studio · maker-checker on every change</div>
      </div>
    </div>

    <v-progress-linear v-if="!ready" indeterminate color="primary" />

    <template v-else>
      <v-tabs v-model="tab" show-arrows background-color="grey lighten-4" color="primary">
        <v-tab v-for="t in tabs" :key="t.key" class="text-none">
          <v-icon left small>{{ t.icon }}</v-icon>{{ t.label }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="pt-4">
        <v-tab-item v-for="t in tabs" :key="t.key">
          <checklist-panel v-if="t.key === 'checklist'" />
          <tax-profile-panel v-else-if="t.key === 'tax'" />
          <product-list v-else-if="t.key === 'products'" />
          <entry-rules-panel v-else-if="t.key === 'rules'" />
          <master-data-browser v-else-if="t.key === 'master'" />
          <pending-inbox v-else-if="t.key === 'changes'" />
        </v-tab-item>
      </v-tabs-items>
    </template>
  </div>
</template>

<script>
import LoanBanner from '~/components/loan/LoanBanner.vue'
import ChecklistPanel from '~/components/loan/ChecklistPanel.vue'
import TaxProfilePanel from '~/components/loan/TaxProfilePanel.vue'
import ProductList from '~/components/loan/ProductList.vue'
import MasterDataBrowser from '~/components/loan/MasterDataBrowser.vue'
import EntryRulesPanel from '~/components/loan/EntryRulesPanel.vue'
import PendingInbox from '~/components/loan/PendingInbox.vue'
import { errMsg } from '~/common/loan/loanApi'

const TABS = [
  { key: 'checklist', label: 'ກວດສອບ Go-Live (Checklist)', icon: 'mdi-clipboard-check-outline' },
  { key: 'tax', label: 'ອາກອນ VAT (Tax profile)', icon: 'mdi-receipt-text-check-outline' },
  { key: 'products', label: 'ຜະລິດຕະພັນ (Products)', icon: 'mdi-car-multiple' },
  { key: 'rules', label: 'ກົດບັນຊີ (Entry rules)', icon: 'mdi-scale-balance' },
  { key: 'master', label: 'ຂໍ້ມູນພື້ນຖານ (Master data)', icon: 'mdi-database-cog-outline' },
  { key: 'changes', label: 'ລໍຖ້າອະນຸມັດ (Pending approvals)', icon: 'mdi-account-check-outline' }
]

export default {
  name: 'LoanParameterStudio',
  components: { LoanBanner, ChecklistPanel, TaxProfilePanel, ProductList, EntryRulesPanel, MasterDataBrowser, PendingInbox },
  layout: 'admin',
  middleware: 'auths',
  data () {
    return { tab: 0, tabs: TABS, ready: false }
  },
  watch: {
    '$route.query.tab': {
      immediate: true,
      handler (key) {
        const map = { vat: 'tax', provision: 'master', system: 'master' }
        const idx = TABS.findIndex(t => t.key === (map[key] || key))
        if (idx >= 0) this.tab = idx
      }
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('loan/init')
    } catch (err) {
      this.$toast.error(errMsg(err))
    } finally {
      this.ready = true
    }
  }
}
</script>

<style scoped>
.loan-studio {
  font-family: 'Noto Sans Lao', sans-serif;
}
</style>
