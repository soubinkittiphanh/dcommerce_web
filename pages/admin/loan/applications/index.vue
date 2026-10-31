<template>
  <div class="loan-page pa-4">
    <loan-banner />
    <page-title icon="mdi-file-document-edit-outline" title="ຄຳຮ້ອງສິນເຊື່ອ" subtitle="Loan applications · DRAFT → SUBMITTED → APPROVED → BOOKED">
      <v-btn v-if="can('LN_APPLICATION', 'CREATE')" color="primary" class="text-none mr-2" @click="openCreate"><v-icon left>mdi-plus</v-icon>ໃໝ່ (New)</v-btn>
      <v-btn icon :loading="loading" @click="load"><v-icon>mdi-refresh</v-icon></v-btn>
    </page-title>

    <v-progress-linear v-if="!ready" indeterminate color="primary" />
    <v-alert v-else-if="!can('LN_APPLICATION', 'VIEW')" type="info" text>ທ່ານບໍ່ມີສິດ (No VIEW permission for LN_APPLICATION).</v-alert>

    <v-card v-else outlined>
      <v-card-title class="py-2">
        <v-select v-model="status" :items="statuses" label="ສະຖານະ (Status)" multiple dense outlined hide-details clearable style="max-width: 360px" @change="load" />
      </v-card-title>
      <v-data-table :headers="headers" :items="items" :loading="loading" dense :items-per-page="25">
        <template #[`item.customerId`]="{ item }">{{ customerName(item.customerId) }}</template>
        <template #[`item.productId`]="{ item }">{{ productName(item.productId) }}</template>
        <template #[`item.requestedAmount`]="{ item }">{{ fmtMoney(item.requestedAmount, currencyCode(item.currencyId)) }}</template>
        <template #[`item.status`]="{ item }"><v-chip x-small dark :color="statusColors[item.status]">{{ item.status }}</v-chip></template>
        <template #[`item.actions`]="{ item }">
          <v-btn v-if="item.status === 'DRAFT' && isMine(item) && can('LN_APPLICATION', 'EDIT')" x-small outlined class="text-none mr-1" @click="act(item, 'submit')">ສົ່ງ (Submit)</v-btn>
          <template v-if="item.status === 'SUBMITTED' && can('LN_APPLICATION', 'AUTHORIZE')">
            <v-btn x-small color="green" dark class="text-none mr-1" :disabled="isMine(item)" @click="act(item, 'approve')">ອະນຸມັດ (Approve)</v-btn>
            <v-btn x-small color="red" dark class="text-none mr-1" :disabled="isMine(item)" @click="act(item, 'reject')">ປະຕິເສດ (Reject)</v-btn>
          </template>
          <v-btn v-if="item.status === 'APPROVED' && can('LN_ACCOUNT', 'CREATE')" x-small color="primary" class="text-none" @click="book(item)">ເປີດບັນຊີ (Book)</v-btn>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="860" persistent>
      <v-card>
        <v-card-title class="text-subtitle-1 font-weight-bold">ຄຳຮ້ອງໃໝ່ (New application)</v-card-title>
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="6">
              <v-autocomplete v-model="form.customerId" :items="customerOptions" label="ລູກຄ້າ (Customer, POS client)" dense outlined />
            </v-col>
            <v-col cols="12" md="6"><v-select v-model="form.productId" :items="productOptions" label="ຜະລິດຕະພັນ (Product)" dense outlined @change="onProduct" /></v-col>
            <v-col cols="12" md="4"><v-select v-model="form.currencyId" :items="currencyOptions" label="ສະກຸນເງິນສັນຍາ (Contract currency)" dense outlined :hint="limitHint" persistent-hint /></v-col>
            <v-col cols="12" md="4"><v-text-field v-model="form.vehicleSaleHeaderId" label="ໃບຂາຍລົດ POS (Vehicle sale id, optional)" type="number" dense outlined /></v-col>
            <v-col cols="12" md="4" class="d-flex align-center">
              <v-btn outlined small class="text-none" :disabled="!form.vehicleSaleHeaderId || !form.currencyId" :loading="proposing" @click="propose">ສະເໜີວົງເງິນ (Propose principal)</v-btn>
            </v-col>
          </v-row>
          <v-alert v-if="proposal" :type="proposal.crossCurrency && proposal.withinTolerance === false ? 'warning' : 'info'" text dense>
            <div>ໃບແຈ້ງໜີ້ (Invoice) {{ proposal.invoiceNumber }}: ຄ້າງ (open) {{ fmtMoney(proposal.openBalance, 'LAK') }}</div>
            <div v-if="proposal.crossCurrency">
              ລາຍການ (Sale lines) {{ fmtMoney(proposal.lineContractTotal, currencyCode(form.currencyId)) }} @ {{ fmtRate(proposal.lineRate) }} →
              ສະເໜີ (proposed) <strong>{{ fmtMoney(proposal.proposedPrincipal, currencyCode(form.currencyId)) }}</strong>
              <span v-if="proposal.tableRate"> · ຕາຕະລາງ (table) {{ fmtRate(proposal.tableRate) }} ({{ proposal.tableRateDate }}), {{ proposal.deviationTablePct }}%</span>
            </div>
            <div v-if="proposal.warning" class="text-caption">{{ proposal.warning }}</div>
            <v-btn x-small text class="text-none" @click="form.requestedAmount = proposal.proposedPrincipal">ໃຊ້ຈຳນວນນີ້ (Use this amount)</v-btn>
          </v-alert>
          <v-row dense>
            <v-col cols="6" md="3"><v-text-field v-model="form.vehiclePrice" :label="`ລາຄາລົດ (Vehicle price, ${currencyCode(form.currencyId) || ''})`" dense outlined /></v-col>
            <v-col cols="6" md="3"><v-text-field v-model="form.downPaymentAmount" label="ເງິນດາວ (Down payment)" dense outlined /></v-col>
            <v-col cols="6" md="3"><v-text-field v-model="form.requestedAmount" label="ວົງເງິນກູ້ (Loan amount)" dense outlined /></v-col>
            <v-col cols="6" md="3"><v-text-field v-model="form.tenorMonths" label="ໄລຍະ ເດືອນ (Tenor, months)" type="number" dense outlined /></v-col>
            <v-col cols="6" md="3"><v-text-field v-model="form.interestRate" label="ດອກເບ້ຍ/ປີ (Rate p.a.)" hint="0.18 = 18%" dense outlined /></v-col>
            <v-col cols="6" md="3"><v-text-field v-model="form.valueDate" type="date" label="ວັນເບີກ (Value date)" dense outlined /></v-col>
            <v-col cols="6" md="3"><v-text-field v-model="form.firstDueDate" type="date" label="ງວດທຳອິດ (First due, optional)" dense outlined clearable /></v-col>
          </v-row>
          <v-alert v-if="error" type="error" text dense>
            {{ error.message }}
            <ul v-if="error.errors.length" class="text-caption"><li v-for="(e, i) in error.errors" :key="i">{{ e }}</li></ul>
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text class="text-none" @click="dialog = false">ຍົກເລີກ (Cancel)</v-btn>
          <v-btn color="primary" class="text-none" :loading="saving" @click="create">ບັນທຶກຮ່າງ (Save draft)</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LoanBanner from '~/components/loan/LoanBanner.vue'
import PageTitle from '~/components/loan/PageTitle.vue'
import { errMsg, errDetails, asList } from '~/common/loan/loanApi'
import { fmtMoney, fmtRate } from '~/common/loan/format'

const MONEY = ['vehiclePrice', 'downPaymentAmount', 'requestedAmount']

export default {
  name: 'LoanApplications',
  components: { LoanBanner, PageTitle },
  layout: 'admin',
  middleware: 'auths',
  data () {
    return {
      ready: false,
      loading: false,
      items: [],
      status: ['DRAFT', 'SUBMITTED', 'APPROVED'],
      statuses: ['DRAFT', 'SUBMITTED', 'APPROVED', 'BOOKED', 'REJECTED'],
      statusColors: { DRAFT: 'grey', SUBMITTED: 'orange', APPROVED: 'green', BOOKED: 'primary', REJECTED: 'red' },
      products: [],
      clients: [],
      currencies: [],
      dialog: false,
      form: {},
      proposal: null,
      proposing: false,
      saving: false,
      error: null,
      headers: [
        { text: 'ເລກທີ (App no.)', value: 'appNo' }, { text: 'ລູກຄ້າ (Customer)', value: 'customerId' }, { text: 'ຜະລິດຕະພັນ (Product)', value: 'productId' },
        { text: 'ວົງເງິນ (Amount)', value: 'requestedAmount', align: 'end' }, { text: 'ເດືອນ (Tenor)', value: 'tenorMonths', align: 'end' },
        { text: 'ສະຖານະ (Status)', value: 'status' }, { text: 'ຜູ້ສ້າງ (Maker)', value: 'makerId' }, { text: '', value: 'actions', sortable: false, align: 'end' }
      ]
    }
  },
  computed: {
    userId () { return this.$auth && this.$auth.user ? Number(this.$auth.user.id) : null },
    customerOptions () { return this.clients.map(c => ({ value: c.id, text: `${c.name}${c.telephone ? ` · ${c.telephone}` : ''}` })) },
    productOptions () { return this.products.map(p => ({ value: p.id, text: `${p.productCode} v${p.version} · ${p.name}` })) },
    selectedProduct () { return this.products.find(p => p.id === this.form.productId) },
    currencyOptions () {
      return ((this.selectedProduct && this.selectedProduct.allowedCurrencies) || []).filter(c => c.authStatus === 'AUTHORIZED')
        .map(c => ({ value: c.currencyId, text: c.currency ? c.currency.code : `#${c.currencyId}` }))
    },
    limitHint () {
      const pc = ((this.selectedProduct && this.selectedProduct.allowedCurrencies) || []).find(c => c.currencyId === this.form.currencyId)
      if (!pc) return ''
      const code = this.currencyCode(pc.currencyId)
      return pc.minAmount === null || pc.maxAmount === null ? `ບໍ່ມີວົງເງິນ (no limits in ${code})` : `${fmtMoney(pc.minAmount, code)} – ${fmtMoney(pc.maxAmount, code)}`
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('loan/init')
      if (!this.can('LN_APPLICATION', 'VIEW')) return
      const [products, clients, currencies] = await Promise.all([
        this.$axios.$get('/api/loan/products', { params: { authStatus: 'AUTHORIZED', status: 'ACTIVE' } }),
        this.$axios.$get('/api/client/find/active').catch(() => ({ data: [] })),
        this.$axios.$get('/api/currency/findAll').catch(() => ({ data: [] }))
      ])
      this.products = products.data
      this.clients = asList(clients)
      this.currencies = asList(currencies)
      await this.load()
    } catch (err) {
      this.$toast.error(errMsg(err))
    } finally {
      this.ready = true
    }
  },
  methods: {
    fmtMoney,
    fmtRate,
    can (fn, action) { return this.$store.getters['loan/can'](fn, action) },
    isMine (item) { return Number(item.makerId) === this.userId },
    currencyCode (id) { const c = this.currencies.find(x => x.id === id); return c ? c.code : '' },
    customerName (id) { const c = this.clients.find(x => x.id === id); return c ? c.name : `#${id}` },
    productName (id) { const p = this.products.find(x => x.id === id); return p ? p.productCode : `#${id}` },
    async load () {
      this.loading = true
      try {
        this.items = (await this.$axios.$get('/api/loan/applications', { params: { status: this.status.length ? this.status.join(',') : undefined } })).data
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    },
    openCreate () {
      this.form = { customerId: null, productId: null, currencyId: null, vehicleSaleHeaderId: null, vehiclePrice: '', downPaymentAmount: '', requestedAmount: '', tenorMonths: 12, interestRate: '', valueDate: '', firstDueDate: '' }
      this.proposal = null
      this.error = null
      this.dialog = true
    },
    onProduct () {
      const def = ((this.selectedProduct && this.selectedProduct.allowedCurrencies) || []).find(c => c.isDefault) || (this.currencyOptions[0] && { currencyId: this.currencyOptions[0].value })
      this.form.currencyId = def ? def.currencyId : null
      this.proposal = null
    },
    async propose () {
      this.proposing = true
      try {
        this.proposal = (await this.$axios.$get(`/api/loan/sales/${this.form.vehicleSaleHeaderId}/financing-proposal`, { params: { currencyId: this.form.currencyId, date: this.form.valueDate || undefined } })).data
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.proposing = false
      }
    },
    body () {
      const out = {}
      for (const [k, v] of Object.entries(this.form)) {
        if (v === '' || v === null || v === undefined) continue
        out[k] = ['customerId', 'productId', 'currencyId', 'vehicleSaleHeaderId', 'tenorMonths'].includes(k) ? Number(v) : (MONEY.includes(k) ? String(v).trim() : v)
      }
      return out
    },
    async create () {
      this.saving = true
      this.error = null
      try {
        const res = await this.$axios.$post('/api/loan/applications', this.body())
        this.$toast.success(res.message || 'Draft saved')
        this.dialog = false
        await this.load()
      } catch (err) {
        this.error = { message: errMsg(err), errors: errDetails(err) }
      } finally {
        this.saving = false
      }
    },
    async act (item, action) {
      try {
        const res = await this.$axios.$post(`/api/loan/applications/${item.id}/${action}`, {})
        this.$toast.success(res.message || action)
        await this.load()
      } catch (err) {
        this.$toast.error(errMsg(err))
      }
    },
    async book (item) {
      try {
        const res = await this.$axios.$post(`/api/loan/applications/${item.id}/book`, {})
        this.$toast.success(res.message || 'Booked')
        this.$router.push(`/admin/loan/accounts/${res.data.account.id}`)
      } catch (err) {
        this.$toast.error(errMsg(err))
      }
    }
  }
}
</script>
