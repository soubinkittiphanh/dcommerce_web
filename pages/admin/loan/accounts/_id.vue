<template>
  <div class="loan-page pa-4">
    <loan-banner />
    <v-progress-linear v-if="!ready" indeterminate color="primary" />
    <v-alert v-else-if="!can('LN_ACCOUNT', 'VIEW')" type="info" text>ທ່ານບໍ່ມີສິດ (No VIEW permission for LN_ACCOUNT).</v-alert>
    <v-alert v-else-if="loadError" type="error" text>{{ loadError }}</v-alert>

    <template v-else-if="summary">
      <page-title icon="mdi-folder-account-outline" back="/admin/loan/accounts" :title="summary.account.accountNo"
        :subtitle="`${summary.customer.name || ''} ${summary.customer.telephone ? '· ' + summary.customer.telephone : ''} · ${summary.product ? summary.product.productCode : ''} · ${summary.currency}`">
        <v-chip small dark class="mr-2" :color="summary.account.status === 'NORMAL' ? 'green' : 'orange'">{{ summary.account.status }}</v-chip>
        <v-chip small class="mr-2">{{ summary.account.accountStage }}</v-chip>
        <v-btn v-if="can('LN_TRANSACTION', 'CREATE') && summary.account.accountStage === 'DISBURSED'" color="primary" class="text-none mr-2" @click="payment = true">
          <v-icon left>mdi-cash-plus</v-icon>ຮັບຊຳລະ (Payment)
        </v-btn>
        <v-menu v-if="can('LN_TRANSACTION', 'CREATE') && txActions.length" offset-y>
          <template #activator="{ on, attrs }">
            <v-btn outlined color="primary" class="text-none mr-2" v-bind="attrs" v-on="on"><v-icon left>mdi-swap-horizontal</v-icon>ລາຍການ (Actions)</v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="a in txActions" :key="a.value" @click="openTransaction(a.value)">
              <v-list-item-title>{{ a.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn outlined class="text-none" v-bind="attrs" v-on="on"><v-icon left>mdi-printer</v-icon>ພິມ (Print)</v-btn>
          </template>
          <v-list dense>
            <v-list-item @click="openContract"><v-list-item-title>ສະຫຼຸບສັນຍາ (Contract summary)</v-list-item-title></v-list-item>
            <v-list-item @click="openStatementPrint"><v-list-item-title>ໃບແຈ້ງຍອດ (Statement)</v-list-item-title></v-list-item>
            <v-list-item disabled>
              <v-list-item-title>ໃບກຳກັບອາກອນ (Tax invoice): ລໍຖ້າ (held)</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </page-title>

      <v-row dense>
        <v-col cols="12" sm="6" md="3">
          <v-card outlined class="pa-3 fill-height">
            <div class="text-caption grey--text">ຍອດຄ້າງທັງໝົດ (Outstanding)</div>
            <fx-amount v-bind="fxOf(summary.outstanding)" />
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card outlined class="pa-3 fill-height">
            <div class="text-caption grey--text">ຄ້າງຊຳລະ (Overdue) · DPD {{ summary.dpd }}</div>
            <fx-amount v-bind="fxOf(summary.overdue)" />
            <v-chip x-small dark class="mt-1" :color="agingColors[summary.agingBucket]">{{ summary.agingBucket }}</v-chip>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card outlined class="pa-3 fill-height">
            <div class="text-caption grey--text">ງວດຕໍ່ໄປ (Next due) {{ summary.nextDue ? summary.nextDue.dueDate : '' }}</div>
            <fx-amount v-if="summary.nextDue" v-bind="fxOf(summary.nextDue)" />
            <span v-else>-</span>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card outlined class="pa-3 fill-height">
            <div class="text-caption grey--text">ເງິນຕົ້ນຕາມບັນຊີ (Portfolio as booked)</div>
            <div class="font-weight-bold">{{ fmtMoney(summary.portfolioCarrying.amount, summary.currency) }}</div>
            <div v-if="isForeign" class="text-caption grey--text">{{ fmtMoney(summary.portfolioCarrying.baseAmount, summary.baseCurrency) }} ({{ 'carrying base' }})</div>
            <div class="text-caption grey--text">ລ່ວງໜ້າ (Advance): {{ fmtMoney(summary.advance.amount, summary.currency) }}</div>
          </v-card>
        </v-col>
      </v-row>
      <div v-if="isForeign" class="text-caption grey--text mt-1">
        ຍອດທຽບເທົ່າ {{ summary.baseCurrency }} ໃຊ້ອັດຕາທີ່ອະນຸມັດລ່າສຸດສຳລັບວັນ {{ summary.businessDate }} (ສະແດງເທົ່ານັ້ນ).
        (Base equivalents use the latest authorized rate for {{ summary.businessDate }}, indicative only; transactions show the rate they were posted at.)
      </div>

      <v-tabs v-model="tab" class="mt-3" background-color="grey lighten-4" color="primary" show-arrows>
        <v-tab class="text-none">ຕາຕະລາງຊຳລະ (Schedule)</v-tab>
        <v-tab class="text-none" :disabled="!can('LN_TRANSACTION', 'VIEW')">ລາຍການ (Transactions)</v-tab>
        <v-tab class="text-none">ໃບແຈ້ງຍອດ (Statement)</v-tab>
        <v-tab class="text-none">ປະຫວັດ (History)</v-tab>
        <v-tab class="text-none" :disabled="!can('LN_DOCUMENT', 'VIEW')">ເອກະສານ (Documents)</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="pt-3">
        <v-tab-item>
          <v-data-table v-if="schedule" :headers="scheduleHeaders" :items="schedule.rows" item-key="installmentNo" dense :items-per-page="12">
            <template #[`item.principal`]="{ item }">{{ amt(part(item, 'PRINCIPAL', 'due')) }}</template>
            <template #[`item.interest`]="{ item }">{{ amt(part(item, 'INTEREST', 'due')) }}</template>
            <template #[`item.paid`]="{ item }">{{ amt(sumParts(item, 'paid')) }}</template>
            <template #[`item.outstanding`]="{ item }"><span :class="{ 'red--text': item.dueDate <= summary.businessDate && item.outstanding !== '0.0000' }">{{ amt(item.outstanding) }}</span></template>
          </v-data-table>
        </v-tab-item>

        <v-tab-item>
          <v-data-table :headers="txHeaders" :items="transactions" dense :items-per-page="15" sort-by="id" sort-desc>
            <template #[`item.amount`]="{ item }">
              <fx-amount :amount="item.amount" :currency="summary.currency" :base-currency="summary.baseCurrency" :base-amount="item.baseAmount"
                :rate="item.exchangeRate" :rate-date="item.exchangeRateDate" :warning="item.fxWarning" />
            </template>
            <template #[`item.postingStatus`]="{ item }">
              <v-chip x-small dark :color="txColors[item.postingStatus]">{{ item.postingStatus }}</v-chip>
              <span v-if="item.isReversed" class="text-caption ml-1">reversed</span>
            </template>
            <template #[`item.actions`]="{ item }">
              <v-btn v-if="item.postingStatus === 'POSTED' && receiptKinds.includes(item.eventCode)" icon x-small title="ໃບຮັບເງິນ (Receipt)" @click="openReceipt(item.id)">
                <v-icon small>mdi-printer</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-tab-item>

        <v-tab-item>
          <v-row dense>
            <v-col cols="6" md="3"><v-text-field v-model="stmt.from" type="date" label="ແຕ່ (From)" dense outlined /></v-col>
            <v-col cols="6" md="3"><v-text-field v-model="stmt.to" type="date" label="ເຖິງ (To)" dense outlined /></v-col>
            <v-col cols="12" md="3"><v-btn outlined class="text-none" @click="loadStatement">ສະແດງ (Show)</v-btn></v-col>
          </v-row>
          <v-simple-table v-if="statement" dense>
            <thead>
              <tr>
                <th>ວັນທີ (Date)</th><th>ເລກທີ (Ref.)</th><th>ລາຍການ (Type)</th><th class="text-right">{{ summary.currency }}</th>
                <th v-if="isForeign" class="text-right">{{ summary.baseCurrency }} @ rate (posted)</th>
                <th class="text-right">ເງິນຕົ້ນ (Principal)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>{{ statement.from }}</td><td /><td>ຍອດຍົກມາ (Opening)</td><td /><td v-if="isForeign" /><td class="text-right">{{ amt(statement.opening) }}</td></tr>
              <tr v-for="m in statement.movements" :key="m.txNo">
                <td>{{ m.bookingDate }}</td><td>{{ m.txNo }}</td><td>{{ m.eventCode }}</td><td class="text-right">{{ amt(m.amount) }}</td>
                <td v-if="isForeign" class="text-right">
                  {{ fmtMoney(m.baseAmount, summary.baseCurrency) }} @ {{ fmtRate(m.exchangeRate) }} ({{ m.exchangeRateDate }})
                  <div v-if="m.rateWarning" class="text-caption amber--text text--darken-3">{{ m.rateWarning }}</div>
                </td>
                <td class="text-right">{{ amt(m.principalBalance) }}</td>
              </tr>
              <tr class="font-weight-bold">
                <td>{{ statement.to }}</td><td /><td>ຍອດຍົກໄປ (Closing)</td><td /><td v-if="isForeign" />
                <td class="text-right"><fx-amount v-bind="fxOf(statement.closing, statement.fx)" /></td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-tab-item>

        <v-tab-item>
          <template v-if="history">
            <div class="text-subtitle-2 font-weight-bold">ສະຖານະ (Status changes)</div>
            <v-data-table :headers="statusHeaders" :items="history.statusHistory" dense hide-default-footer :items-per-page="-1" no-data-text="-" />
            <div class="text-subtitle-2 font-weight-bold mt-3">ການແກ້ໄຂ (Amendments)</div>
            <v-data-table :headers="amendHeaders" :items="history.amendments" dense hide-default-footer :items-per-page="-1" no-data-text="-">
              <template #[`item.changes`]="{ item }"><code class="text-caption">{{ JSON.stringify(item.newValues) }}</code></template>
            </v-data-table>
          </template>
        </v-tab-item>

        <v-tab-item>
          <v-card outlined>
            <v-card-text>
              <v-row v-if="can('LN_DOCUMENT', 'CREATE')" dense>
                <v-col cols="12" md="3"><v-select v-model="upload.docType" :items="docTypes" label="ປະເພດ (Type)" dense outlined /></v-col>
                <v-col cols="12" md="4"><v-file-input v-model="upload.file" accept=".pdf,.jpg,.jpeg,.png" label="PDF / JPG / PNG" dense outlined show-size /></v-col>
                <v-col cols="12" md="3"><v-text-field v-model="upload.remarks" label="ໝາຍເຫດ (Remarks)" dense outlined /></v-col>
                <v-col cols="12" md="2"><v-btn block color="primary" class="text-none" :disabled="!upload.file || !upload.docType" :loading="uploading" @click="uploadDoc">ອັບໂຫຼດ (Upload)</v-btn></v-col>
              </v-row>
              <div class="text-caption grey--text mb-2">ຊື່ໄຟລ໌ເດີມບໍ່ຖືກບັນທຶກ (The original file name is not stored.)</div>
              <v-data-table :headers="docHeaders" :items="documents" dense :items-per-page="10">
                <template #[`item.sizeBytes`]="{ item }">{{ Math.ceil(item.sizeBytes / 1024) }} KB</template>
                <template #[`item.actions`]="{ item }">
                  <v-btn icon x-small title="ເປີດ (Open)" @click="openDoc(item)"><v-icon small>mdi-open-in-new</v-icon></v-btn>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

      <payment-dialog v-model="payment" :summary="summary" @posted="reloadAfterPosting" @print-receipt="openReceipt" />
      <transaction-dialog v-model="txDialog" :summary="summary" :transactions="transactions" :initial-kind="txKind" @posted="reloadAfterPosting" @print-receipt="openReceipt" />

      <print-shell v-model="print.open" :title="print.title" :printable="print.printable">
        <receipt-print v-if="print.kind === 'receipt' && print.txn" :txn="print.txn" :summary="summary" :company="company" />
        <template v-else-if="print.kind === 'contract'">
          <contract-summary-print v-if="print.template" :template="print.template" :summary="summary" :schedule="schedule" :company="company" />
          <v-alert v-else type="warning" text>{{ print.error }}</v-alert>
        </template>
        <statement-print v-else-if="print.kind === 'statement' && statement" :statement="statement" :company="company" />
      </print-shell>
    </template>
  </div>
</template>

<script>
import LoanBanner from '~/components/loan/LoanBanner.vue'
import PageTitle from '~/components/loan/PageTitle.vue'
import FxAmount from '~/components/loan/FxAmount.vue'
import PaymentDialog from '~/components/loan/PaymentDialog.vue'
import TransactionDialog from '~/components/loan/TransactionDialog.vue'
import { kindsForStage } from '~/components/loan/transactionKinds'
import PrintShell from '~/components/loan/print/PrintShell.vue'
import ReceiptPrint from '~/components/loan/print/ReceiptPrint.vue'
import ContractSummaryPrint from '~/components/loan/print/ContractSummaryPrint.vue'
import StatementPrint from '~/components/loan/print/StatementPrint.vue'
import { errMsg, asList } from '~/common/loan/loanApi'
import { fmtAmount, fmtMoney, fmtRate, decimalsOf, addAmounts, AGING_COLORS, TX_COLORS } from '~/common/loan/format'

export default {
  name: 'LoanAccountPage',
  components: { LoanBanner, PageTitle, FxAmount, PaymentDialog, TransactionDialog, PrintShell, ReceiptPrint, ContractSummaryPrint, StatementPrint },
  layout: 'admin',
  middleware: 'auths',
  data () {
    return {
      ready: false,
      loadError: null,
      tab: 0,
      summary: null,
      schedule: null,
      transactions: [],
      statement: null,
      history: null,
      documents: [],
      company: {},
      stmt: { from: '', to: '' },
      payment: false,
      txDialog: false,
      txKind: null,
      upload: { docType: 'CONTRACT', file: null, remarks: '' },
      uploading: false,
      print: { open: false, kind: null, title: '', txn: null, template: null, error: null, printable: true },
      receiptKinds: ['REPAYMENT', 'PREPAY', 'FEE_COLLECT', 'RECOVERY'],
      docTypes: ['CONTRACT', 'ID_CARD', 'VEHICLE_REG', 'INSURANCE', 'RECEIPT', 'OTHER'],
      agingColors: AGING_COLORS,
      txColors: TX_COLORS,
      scheduleHeaders: [
        { text: '#', value: 'installmentNo' }, { text: 'ກຳນົດ (Due)', value: 'dueDate' },
        { text: 'ເງິນຕົ້ນ (Principal)', value: 'principal', align: 'end' }, { text: 'ດອກເບ້ຍ (Interest)', value: 'interest', align: 'end' },
        { text: 'ຊຳລະແລ້ວ (Paid)', value: 'paid', align: 'end' }, { text: 'ຄົງເຫຼືອ (Outstanding)', value: 'outstanding', align: 'end' },
        { text: 'ສະຖານະ (Status)', value: 'status' }
      ],
      txHeaders: [
        { text: 'ເລກທີ (Tx no.)', value: 'txNo' }, { text: 'ປະເພດ (Kind)', value: 'eventCode' }, { text: 'ວັນທີ (Value date)', value: 'valueDate' },
        { text: 'ຈຳນວນ / ອັດຕາ (Amount / rate)', value: 'amount', align: 'end' }, { text: 'ສະຖານະ (Status)', value: 'postingStatus' },
        { text: 'ຜູ້ສ້າງ (Maker)', value: 'makerId' }, { text: 'ຜູ້ອະນຸມັດ (Checker)', value: 'checkerId' }, { text: '', value: 'actions', sortable: false }
      ],
      statusHeaders: [
        { text: 'ວັນທີ (Date)', value: 'effectiveDate' }, { text: 'ຈາກ (From)', value: 'oldStatus' }, { text: 'ເປັນ (To)', value: 'newStatus' },
        { text: 'ໂດຍ (By)', value: 'triggeredBy' }, { text: 'ເຫດຜົນ (Reason)', value: 'changeReason' }
      ],
      amendHeaders: [
        { text: 'ວັນທີ (Date)', value: 'effectiveDate' }, { text: 'ປະເພດ (Type)', value: 'amendmentType' }, { text: 'ແຫຼ່ງ (Source)', value: 'source' },
        { text: 'ຜູ້ສ້າງ (Maker)', value: 'makerId' }, { text: 'ຜູ້ອະນຸມັດ (Approved by)', value: 'approvedBy' }, { text: 'ຄ່າໃໝ່ (New values)', value: 'changes', sortable: false }
      ],
      docHeaders: [
        { text: 'ປະເພດ (Type)', value: 'docType' }, { text: 'ໄຟລ໌ (File)', value: 'fileExt' }, { text: 'ຂະໜາດ (Size)', value: 'sizeBytes' },
        { text: 'ໝາຍເຫດ (Remarks)', value: 'remarks' }, { text: 'ໂດຍ (By)', value: 'uploadedBy' }, { text: 'ວັນທີ (Date)', value: 'createdAt' },
        { text: '', value: 'actions', sortable: false }
      ]
    }
  },
  computed: {
    id () { return this.$route.params.id },
    isForeign () { return this.summary && this.summary.currency !== this.summary.baseCurrency },
    // Transactions a user may raise at this account's stage (payment/prepayment stay on the Payment button)
    txActions () { return this.summary ? kindsForStage(this.summary.account.accountStage).map(k => ({ value: k.value, text: k.label })) : [] }
  },
  async mounted () {
    try {
      await this.$store.dispatch('loan/init')
      if (!this.can('LN_ACCOUNT', 'VIEW')) return
      await this.load()
      try { this.company = asList(await this.$axios.$get('/api/company/find'))[0] || {} } catch (e) { this.company = {} }
    } catch (err) {
      this.loadError = errMsg(err)
    } finally {
      this.ready = true
    }
  },
  methods: {
    fmtMoney,
    fmtRate,
    can (fn, action) { return this.$store.getters['loan/can'](fn, action) },
    amt (v) { return fmtAmount(v, decimalsOf(this.summary.currency)) },
    part (row, code, field) { return row.components[code] ? row.components[code][field] : '0' },
    sumParts (row, field) { return addAmounts(Object.values(row.components).map(c => c[field])) },
    // Props for FxAmount from a { amount, baseAmount } block and an fx block (default: the summary's indicative rate)
    fxOf (m, fx) {
      const f = fx === undefined ? this.summary.fx : fx
      return { amount: m.amount, baseAmount: m.baseAmount, currency: this.summary.currency, baseCurrency: this.summary.baseCurrency, rate: f ? f.rate : null, rateDate: f ? f.rateDate : null, warning: f ? f.warning : null }
    },
    async load () {
      const [s, sch, h] = await Promise.all([
        this.$axios.$get(`/api/loan/accounts/${this.id}/summary`),
        this.$axios.$get(`/api/loan/accounts/${this.id}/schedule`),
        this.$axios.$get(`/api/loan/accounts/${this.id}/history`)
      ])
      this.summary = s.data
      this.schedule = sch.data
      this.history = h.data
      this.stmt = { from: String(this.summary.account.valueDate), to: this.summary.businessDate }
      await Promise.all([
        this.can('LN_TRANSACTION', 'VIEW') ? this.loadTransactions() : null,
        this.loadStatement(),
        this.can('LN_DOCUMENT', 'VIEW') ? this.loadDocuments() : null
      ])
    },
    async loadTransactions () {
      this.transactions = (await this.$axios.$get(`/api/loan/accounts/${this.id}/transactions`)).data
    },
    async loadStatement () {
      try {
        this.statement = (await this.$axios.$get(`/api/loan/accounts/${this.id}/statement`, { params: this.stmt })).data
      } catch (err) {
        this.$toast.error(errMsg(err))
      }
    },
    async loadDocuments () {
      this.documents = (await this.$axios.$get(`/api/loan/accounts/${this.id}/documents`)).data
    },
    openTransaction (kind) {
      this.txKind = kind
      this.txDialog = true
    },
    async reloadAfterPosting () {
      await this.load()
    },
    openReceipt (txId) {
      const txn = this.transactions.find(t => t.id === txId)
      this.print = { open: true, kind: 'receipt', title: 'ໃບຮັບເງິນ (Receipt)', txn, template: null, error: null, printable: Boolean(txn) }
      if (!txn) this.loadTransactions().then(() => { this.print.txn = this.transactions.find(t => t.id === txId); this.print.printable = Boolean(this.print.txn) })
    },
    async openContract () {
      this.print = { open: true, kind: 'contract', title: 'ສະຫຼຸບສັນຍາ (Contract summary)', txn: null, template: null, error: null, printable: false }
      try {
        this.print.template = (await this.$axios.$get('/api/loan/print-templates/CONTRACT_SUMMARY')).data
        this.print.printable = true
      } catch (err) {
        this.print.error = errMsg(err)
      }
    },
    async openStatementPrint () {
      await this.loadStatement()
      this.print = { open: true, kind: 'statement', title: 'ໃບແຈ້ງຍອດ (Statement)', txn: null, template: null, error: null, printable: Boolean(this.statement) }
    },
    async uploadDoc () {
      this.uploading = true
      try {
        const fd = new FormData()
        fd.append('docType', this.upload.docType)
        if (this.upload.remarks) fd.append('remarks', this.upload.remarks)
        fd.append('file', this.upload.file)
        const res = await this.$axios.$post(`/api/loan/accounts/${this.id}/documents`, fd)
        this.$toast.success(res.message)
        this.upload = { docType: 'CONTRACT', file: null, remarks: '' }
        await this.loadDocuments()
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.uploading = false
      }
    },
    // Downloads with the user's token (no public URL), then opens the file from memory
    async openDoc (doc) {
      try {
        const blob = await this.$axios.$get(`/api/loan/documents/${doc.id}/file`, { responseType: 'blob' })
        const url = URL.createObjectURL(blob)
        window.open(url, '_blank', 'noopener')
        setTimeout(() => URL.revokeObjectURL(url), 60000)
      } catch (err) {
        this.$toast.error(errMsg(err))
      }
    }
  }
}
</script>
