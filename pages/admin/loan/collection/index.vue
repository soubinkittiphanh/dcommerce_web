<template>
  <div class="loan-page pa-4">
    <loan-banner />
    <page-title icon="mdi-phone-alert-outline" title="ລາຍການຕິດຕາມໜີ້" subtitle="Collection list · overdue accounts as of the loan business date">
      <v-btn icon :loading="loading" @click="load"><v-icon>mdi-refresh</v-icon></v-btn>
    </page-title>

    <v-progress-linear v-if="!ready" indeterminate color="primary" />
    <v-alert v-else-if="!can('VIEW')" type="info" text>ທ່ານບໍ່ມີສິດ (No VIEW permission for LN_COLLECTION).</v-alert>

    <template v-else-if="data">
      <div class="d-flex flex-wrap mb-2">
        <v-chip v-for="b in bucketTotals" :key="b.bucket" small dark class="mr-2 mb-1" :color="agingColors[b.bucket]" @click="bucket = bucket === b.bucket ? null : b.bucket">
          {{ b.bucket }} · {{ b.count }}
        </v-chip>
        <v-spacer />
        <span class="text-caption grey--text">{{ data.date }}</span>
      </div>
      <v-card outlined>
        <v-data-table :headers="headers" :items="rows" dense :items-per-page="25" sort-by="dpd" sort-desc>
          <template #[`item.accountNo`]="{ item }"><nuxt-link :to="`/admin/loan/accounts/${item.accountId}`">{{ item.accountNo }}</nuxt-link></template>
          <template #[`item.customer`]="{ item }">{{ item.customer }}<div class="text-caption"><a v-if="item.telephone" :href="`tel:${item.telephone}`">{{ item.telephone }}</a></div></template>
          <template #[`item.dpd`]="{ item }"><v-chip x-small dark :color="agingColors[item.bucket]">{{ item.dpd }}</v-chip></template>
          <template #[`item.overdue`]="{ item }">
            <fx-amount :amount="item.overdue.amount" :currency="item.currency" :base-amount="item.overdue.baseAmount" :base-currency="data.baseCurrency"
              :rate="item.fx && item.fx.rate" :rate-date="item.fx && item.fx.rateDate" :warning="item.fx && item.fx.warning" />
          </template>
          <template #[`item.outstanding`]="{ item }">{{ fmtMoney(item.outstanding.amount, item.currency) }}</template>
          <template #[`item.lastPayment`]="{ item }">{{ item.lastPayment ? `${item.lastPayment.date} · ${fmtMoney(item.lastPayment.amount, item.currency)}` : '-' }}</template>
        </v-data-table>
      </v-card>
    </template>
  </div>
</template>

<script>
import LoanBanner from '~/components/loan/LoanBanner.vue'
import PageTitle from '~/components/loan/PageTitle.vue'
import FxAmount from '~/components/loan/FxAmount.vue'
import { errMsg } from '~/common/loan/loanApi'
import { fmtMoney, AGING_COLORS } from '~/common/loan/format'

export default {
  name: 'LoanCollection',
  components: { LoanBanner, PageTitle, FxAmount },
  layout: 'admin',
  middleware: 'auths',
  data () {
    return {
      ready: false,
      loading: false,
      data: null,
      bucket: null,
      agingColors: AGING_COLORS,
      headers: [
        { text: 'ບັນຊີ (Account)', value: 'accountNo' }, { text: 'ລູກຄ້າ / ໂທ (Customer / phone)', value: 'customer' },
        { text: 'DPD', value: 'dpd', align: 'end' }, { text: 'ງວດເກົ່າສຸດ (Oldest due)', value: 'oldestDueDate' },
        { text: 'ຄ້າງຊຳລະ (Overdue)', value: 'overdue', align: 'end', sortable: false }, { text: 'ຍອດຄ້າງ (Outstanding)', value: 'outstanding', align: 'end', sortable: false },
        { text: 'ຊຳລະລ່າສຸດ (Last payment)', value: 'lastPayment', sortable: false }, { text: 'ສະຖານະ (Status)', value: 'status' }
      ]
    }
  },
  computed: {
    rows () { return this.data ? this.data.rows.filter(r => !this.bucket || r.bucket === this.bucket) : [] },
    bucketTotals () {
      const out = {}
      for (const r of (this.data ? this.data.rows : [])) out[r.bucket] = (out[r.bucket] || 0) + 1
      return Object.entries(out).map(([bucket, count]) => ({ bucket, count }))
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('loan/init')
      if (this.can('VIEW')) await this.load()
    } catch (err) {
      this.$toast.error(errMsg(err))
    } finally {
      this.ready = true
    }
  },
  methods: {
    fmtMoney,
    can (action) { return this.$store.getters['loan/can']('LN_COLLECTION', action) },
    async load () {
      this.loading = true
      try {
        this.data = (await this.$axios.$get('/api/loan/reports/overdue')).data
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
