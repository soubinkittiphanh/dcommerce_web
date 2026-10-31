<template>
  <div class="loan-page pa-4">
    <loan-banner />
    <page-title icon="mdi-chart-box-outline" title="ລາຍງານສິນເຊື່ອ" subtitle="Loan reports · contract currency, with base at the latest authorized rate (indicative)" />

    <v-progress-linear v-if="!ready" indeterminate color="primary" />
    <v-alert v-else-if="!can('VIEW')" type="info" text>ທ່ານບໍ່ມີສິດ (No VIEW permission for LN_REPORT).</v-alert>

    <template v-else>
      <v-tabs v-model="tab" background-color="grey lighten-4" color="primary" show-arrows @change="load">
        <v-tab v-for="r in reports" :key="r.key" class="text-none">{{ r.label }}</v-tab>
      </v-tabs>
      <v-card outlined class="mt-2" :loading="loading">
        <v-card-text v-if="data">
          <div class="text-caption grey--text mb-2">{{ data.date || '' }}</div>

          <template v-if="['portfolio', 'aging', 'npl'].includes(current.key)">
            <v-data-table :headers="groupHeaders" :items="data.rows" dense hide-default-footer :items-per-page="-1">
              <template #[`item.group`]="{ item }">
                <v-chip v-if="current.key === 'aging'" x-small dark :color="agingColors[item.group]">{{ item.group }}</v-chip>
                <span v-else>{{ item.group }}</span>
              </template>
              <template #[`item.outstanding`]="{ item }">
                <fx-amount :amount="item.outstanding" :currency="item.currency" :base-amount="item.outstandingBase" :base-currency="data.baseCurrency"
                  :rate="item.fx && item.fx.rate" :rate-date="item.fx && item.fx.rateDate" :warning="item.fx && item.fx.warning" />
              </template>
              <template #[`item.overdue`]="{ item }">{{ fmtMoney(item.overdue, item.currency) }}</template>
            </v-data-table>
            <div class="text-right font-weight-bold mt-2">
              ລວມ (Total) {{ data.baseCurrency }}: {{ data.totalBase === null ? 'ບໍ່ຄົບ: ຂາດອັດຕາ (incomplete: a rate is missing)' : fmtMoney(data.totalBase, data.baseCurrency) }}
            </div>
          </template>

          <v-data-table v-else-if="current.key === 'provisions'" :headers="provHeaders" :items="data.rows" dense :items-per-page="25">
            <template #[`item.amount`]="{ item }">
              <fx-amount :amount="item.amount" :currency="item.currency" :base-amount="item.baseAmount" :base-currency="data.baseCurrency"
                :rate="item.fx && item.fx.rate" :rate-date="item.fx && item.fx.rateDate" :warning="item.fx && item.fx.warning" />
            </template>
          </v-data-table>

          <template v-else-if="current.key === 'gl-tieout'">
            <v-alert :type="data.balanced ? 'success' : 'error'" text dense>
              {{ data.balanced ? 'ບັນຊີສິນເຊື່ອຕົງກັບ GL (Loan journal ties to the GL, in currency and base)' : 'ມີສ່ວນຕ່າງ (Differences found: see the rows in red)' }}
            </v-alert>
            <v-data-table :headers="tieHeaders" :items="data.rows" dense :items-per-page="50" :item-class="r => (r.difference.amount !== '0.0000' || r.difference.baseAmount !== '0.0000') ? 'red lighten-5' : ''">
              <template #[`item.roles`]="{ item }"><span class="text-caption">{{ item.roles.join(', ') }}</span></template>
              <template v-for="k in ['journal', 'gl', 'difference']" #[`item.${k}`]="{ item }">
                <div :key="k" class="text-right">
                  {{ fmtAmount(item[k].amount, 2) }}
                  <div v-if="item.currency !== 'LAK'" class="text-caption grey--text">LAK {{ fmtAmount(item[k].baseAmount, 0) }}</div>
                </div>
              </template>
            </v-data-table>
            <div class="text-caption grey--text">Unlinked legs: a status change between classes mapped to the same GL account writes no GL row.</div>
          </template>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script>
import LoanBanner from '~/components/loan/LoanBanner.vue'
import PageTitle from '~/components/loan/PageTitle.vue'
import FxAmount from '~/components/loan/FxAmount.vue'
import { errMsg } from '~/common/loan/loanApi'
import { fmtAmount, fmtMoney, AGING_COLORS } from '~/common/loan/format'

export default {
  name: 'LoanReports',
  components: { LoanBanner, PageTitle, FxAmount },
  layout: 'admin',
  middleware: 'auths',
  data () {
    return {
      ready: false,
      loading: false,
      tab: 0,
      data: null,
      agingColors: AGING_COLORS,
      reports: [
        { key: 'portfolio', label: 'ພອດໂຟລິໂອ (Portfolio)' },
        { key: 'aging', label: 'ອາຍຸໜີ້ (Aging)' },
        { key: 'npl', label: 'ໜີ້ບໍ່ເກີດດອກ (NPL)' },
        { key: 'provisions', label: 'ເງິນແຮ (Provisions)' },
        { key: 'gl-tieout', label: 'ກວດກັບ GL (GL tie-out)' }
      ],
      groupHeaders: [
        { text: 'ກຸ່ມ (Group)', value: 'group' }, { text: 'ສະກຸນ (Currency)', value: 'currency' }, { text: 'ບັນຊີ (Accounts)', value: 'accounts', align: 'end' },
        { text: 'ຍອດຄ້າງ (Outstanding)', value: 'outstanding', align: 'end', sortable: false }, { text: 'ຄ້າງຊຳລະ (Overdue)', value: 'overdue', align: 'end', sortable: false }
      ],
      provHeaders: [
        { text: 'ບັນຊີ (Account)', value: 'accountNo' }, { text: 'ຊັ້ນ (Class)', value: 'regulatoryClass' }, { text: 'ວັນທີ (Evaluated)', value: 'evaluationDate' },
        { text: 'ເງິນຕົ້ນ (Principal)', value: 'outstandingPrincipal', align: 'end' }, { text: 'ອັດຕາ (Rate)', value: 'provisionRate', align: 'end' },
        { text: 'ເງິນແຮ (Provision)', value: 'amount', align: 'end', sortable: false }
      ],
      tieHeaders: [
        { text: 'GL', value: 'accountNumber' }, { text: 'ຊື່ (Name)', value: 'accountName' }, { text: 'ສະກຸນ (Ccy)', value: 'currency' }, { text: 'Roles', value: 'roles', sortable: false },
        { text: 'Journal', value: 'journal', align: 'end', sortable: false }, { text: 'GL', value: 'gl', align: 'end', sortable: false },
        { text: 'ສ່ວນຕ່າງ (Difference)', value: 'difference', align: 'end', sortable: false }, { text: 'Unlinked', value: 'unlinkedLegs', align: 'end' }
      ]
    }
  },
  computed: {
    current () { return this.reports[this.tab] || this.reports[0] }
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
    fmtAmount,
    fmtMoney,
    can (action) { return this.$store.getters['loan/can']('LN_REPORT', action) },
    async load () {
      this.loading = true
      this.data = null
      try {
        this.data = (await this.$axios.$get(`/api/loan/reports/${this.current.key}`)).data
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
