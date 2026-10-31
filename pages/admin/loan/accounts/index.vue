<template>
  <div class="loan-page pa-4">
    <loan-banner />
    <page-title icon="mdi-folder-account-outline" title="ບັນຊີສິນເຊື່ອ" subtitle="Loan accounts · contract currency" />

    <v-progress-linear v-if="!ready" indeterminate color="primary" />
    <v-alert v-else-if="!can('LN_ACCOUNT', 'VIEW')" type="info" text>ທ່ານບໍ່ມີສິດ (No VIEW permission for LN_ACCOUNT).</v-alert>

    <v-card v-else outlined>
      <v-card-title class="py-2">
        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" label="ເລກບັນຊີ, ຊື່ ຫຼື ເບີໂທ (Account no., name or phone)" dense outlined hide-details clearable style="max-width: 360px" @keyup.enter="load" @click:clear="search = ''; load()" />
        <v-select v-model="status" :items="statuses" label="ສະຖານະ (Status)" dense outlined hide-details clearable multiple class="ml-2" style="max-width: 260px" @change="load" />
        <v-select v-model="stage" :items="stages" label="ຂັ້ນ (Stage)" dense outlined hide-details clearable class="ml-2" style="max-width: 200px" @change="load" />
        <v-spacer />
        <v-btn icon :loading="loading" @click="load"><v-icon>mdi-refresh</v-icon></v-btn>
      </v-card-title>
      <v-data-table :headers="headers" :items="items" :loading="loading" dense :items-per-page="25" class="row-pointer" @click:row="open">
        <template #[`item.customer`]="{ item }">{{ item.customer.name }}<div class="text-caption grey--text">{{ item.customer.telephone }}</div></template>
        <template #[`item.product`]="{ item }">{{ item.product.productCode }}</template>
        <template #[`item.sanctionedAmount`]="{ item }">{{ fmtMoney(item.sanctionedAmount, item.currency) }}</template>
        <template #[`item.status`]="{ item }">
          <v-chip x-small dark :color="item.status === 'NORMAL' ? 'green' : (item.status === 'CLOSED' ? 'grey' : 'orange')">{{ item.status }}</v-chip>
          <span class="text-caption ml-1">{{ item.accountStage }}</span>
        </template>
        <template #[`item.currentDpd`]="{ item }">{{ item.currentDpd || 0 }}</template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import LoanBanner from '~/components/loan/LoanBanner.vue'
import PageTitle from '~/components/loan/PageTitle.vue'
import { errMsg } from '~/common/loan/loanApi'
import { fmtMoney } from '~/common/loan/format'

export default {
  name: 'LoanAccounts',
  components: { LoanBanner, PageTitle },
  layout: 'admin',
  middleware: 'auths',
  data () {
    return {
      ready: false,
      loading: false,
      items: [],
      search: this.$route.query.search || '',
      status: [],
      stage: null,
      statuses: ['NORMAL', 'WATCH', 'SUBSTANDARD', 'DOUBTFUL', 'LOSS', 'WRITTEN_OFF', 'CLOSED'],
      stages: ['BOOKED', 'DISBURSED', 'CLOSED'],
      headers: [
        { text: 'ເລກບັນຊີ (Account)', value: 'accountNo' },
        { text: 'ລູກຄ້າ (Customer)', value: 'customer', sortable: false },
        { text: 'ຜະລິດຕະພັນ (Product)', value: 'product', sortable: false },
        { text: 'ວົງເງິນ (Sanctioned)', value: 'sanctionedAmount', align: 'end' },
        { text: 'ສະຖານະ (Status)', value: 'status' },
        { text: 'DPD', value: 'currentDpd', align: 'end' },
        { text: 'ຄົບກຳນົດ (Maturity)', value: 'maturityDate' }
      ]
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('loan/init')
      if (this.can('LN_ACCOUNT', 'VIEW')) await this.load()
    } catch (err) {
      this.$toast.error(errMsg(err))
    } finally {
      this.ready = true
    }
  },
  methods: {
    fmtMoney,
    can (fn, action) { return this.$store.getters['loan/can'](fn, action) },
    async load () {
      this.loading = true
      try {
        const params = { search: this.search || undefined, status: this.status.length ? this.status.join(',') : undefined, stage: this.stage || undefined }
        this.items = (await this.$axios.$get('/api/loan/accounts', { params })).data
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    },
    open (row) { this.$router.push(`/admin/loan/accounts/${row.id}`) }
  }
}
</script>

<style scoped>
.row-pointer ::v-deep tbody tr { cursor: pointer; }
</style>
