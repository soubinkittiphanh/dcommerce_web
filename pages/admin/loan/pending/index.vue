<template>
  <div class="loan-page pa-4">
    <loan-banner />
    <page-title icon="mdi-account-check-outline" title="ລາຍການລໍຖ້າອະນຸມັດ" subtitle="Loan transactions pending authorization · the maker cannot authorize their own">
      <v-btn icon :loading="loading" @click="load"><v-icon>mdi-refresh</v-icon></v-btn>
    </page-title>

    <v-progress-linear v-if="!ready" indeterminate color="primary" />
    <v-alert v-else-if="!can('VIEW')" type="info" text>ທ່ານບໍ່ມີສິດ (No VIEW permission for LN_TRANSACTION).</v-alert>

    <v-card v-else outlined>
      <v-data-table :headers="headers" :items="items" :loading="loading" dense :items-per-page="25" show-expand item-key="transactionId" :expanded.sync="expanded">
        <template #[`item.accountNo`]="{ item }">
          <nuxt-link :to="`/admin/loan/accounts/${item.accountId}`">{{ item.accountNo }}</nuxt-link>
          <div class="text-caption grey--text">{{ item.customer }}</div>
        </template>
        <template #[`item.amount`]="{ item }">
          <fx-amount :amount="item.amount" :currency="item.currency" :base-amount="item.baseAmount" :base-currency="item.fx ? item.fx.baseCurrency : item.currency"
            :rate="item.fx && item.fx.rate" :rate-date="item.fx && item.fx.rateDate" :warning="item.fx && item.fx.warning" />
        </template>
        <template #[`item.maker`]="{ item }">
          {{ item.makerName || `#${item.makerId}` }}
          <v-chip v-if="isMine(item)" x-small color="grey lighten-2" class="ml-1">ຂອງທ່ານ (yours)</v-chip>
        </template>
        <template #[`item.actions`]="{ item }">
          <template v-if="can('AUTHORIZE')">
            <v-btn x-small color="green" dark class="text-none mr-1" :disabled="isMine(item)" :title="isMine(item) ? 'Maker cannot authorize' : ''" @click="decide(item, 'authorize')">ອະນຸມັດ</v-btn>
            <v-btn x-small color="red" dark class="text-none" :disabled="isMine(item)" @click="decide(item, 'reject')">ປະຕິເສດ</v-btn>
          </template>
        </template>
        <template #expanded-item="{ headers: hs, item }">
          <td :colspan="hs.length" class="pa-3 grey lighten-5">
            <div class="text-caption">ຄຳຂໍ (Request): <code>{{ JSON.stringify(item.request) }}</code></div>
            <div v-if="item.remarks" class="text-caption">ໝາຍເຫດ (Remarks): {{ item.remarks }}</div>
            <div v-if="item.request.rateDeviationReason" class="text-caption orange--text">ເຫດຜົນອັດຕາ (Rate deviation reason): {{ item.request.rateDeviationReason }}</div>
          </td>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog.open" max-width="560">
      <v-card>
        <v-card-title class="text-subtitle-1 font-weight-bold">{{ dialog.action === 'authorize' ? 'ອະນຸມັດ (Authorize)' : 'ປະຕິເສດ (Reject)' }} {{ dialog.item && dialog.item.txNo }}</v-card-title>
        <v-card-text>
          <div v-if="dialog.item">{{ dialog.item.eventCode }} · {{ dialog.item.accountNo }} · {{ dialog.item.currency }} {{ dialog.item.amount }}</div>
          <v-text-field v-if="dialog.action === 'reject'" v-model="dialog.remarks" label="ເຫດຜົນ (Reason)" dense outlined class="mt-3" />
          <v-checkbox v-if="dialog.action === 'authorize' && dialog.item && dialog.item.request.rateDeviationReason" v-model="dialog.acceptRateDeviation"
            label="ຍອມຮັບອັດຕາທີ່ຕ່າງຈາກເກນ (I accept the implied-rate deviation)" dense />
          <v-alert v-if="dialog.error" type="error" text dense>{{ dialog.error }}</v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text class="text-none" @click="dialog.open = false">ຍົກເລີກ (Cancel)</v-btn>
          <v-btn :color="dialog.action === 'authorize' ? 'green' : 'red'" dark class="text-none" :loading="dialog.busy" :disabled="dialog.action === 'reject' && !dialog.remarks" @click="confirm">ຢືນຢັນ (Confirm)</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LoanBanner from '~/components/loan/LoanBanner.vue'
import PageTitle from '~/components/loan/PageTitle.vue'
import FxAmount from '~/components/loan/FxAmount.vue'
import { errMsg } from '~/common/loan/loanApi'

export default {
  name: 'LoanPendingTransactions',
  components: { LoanBanner, PageTitle, FxAmount },
  layout: 'admin',
  middleware: 'auths',
  data () {
    return {
      ready: false,
      loading: false,
      items: [],
      expanded: [],
      dialog: { open: false, action: null, item: null, remarks: '', acceptRateDeviation: false, busy: false, error: null },
      headers: [
        { text: 'ເລກທີ (Tx no.)', value: 'txNo' }, { text: 'ປະເພດ (Kind)', value: 'eventCode' },
        { text: 'ບັນຊີ (Account)', value: 'accountNo' }, { text: 'ຈຳນວນ (Amount)', value: 'amount', align: 'end' },
        { text: 'ວັນທີ (Booking)', value: 'bookingDate' }, { text: 'ຜູ້ສ້າງ (Maker)', value: 'maker', sortable: false },
        { text: '', value: 'actions', sortable: false, align: 'end' }, { text: '', value: 'data-table-expand' }
      ]
    }
  },
  computed: {
    userId () { return this.$auth && this.$auth.user ? Number(this.$auth.user.id) : null }
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
    can (action) { return this.$store.getters['loan/can']('LN_TRANSACTION', action) },
    isMine (item) { return Number(item.makerId) === this.userId },
    async load () {
      this.loading = true
      try {
        this.items = (await this.$axios.$get('/api/loan/transactions/pending')).data
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    },
    decide (item, action) {
      this.dialog = { open: true, action, item, remarks: '', acceptRateDeviation: false, busy: false, error: null }
    },
    async confirm () {
      const d = this.dialog
      d.busy = true
      d.error = null
      try {
        const body = d.action === 'reject' ? { remarks: d.remarks } : (d.acceptRateDeviation ? { acceptRateDeviation: true } : {})
        const res = await this.$axios.$post(`/api/loan/transactions/${d.item.transactionId}/${d.action}`, body)
        this.$toast.success(res.message)
        d.open = false
        await this.load()
      } catch (err) {
        d.error = errMsg(err)
      } finally {
        d.busy = false
      }
    }
  }
}
</script>
