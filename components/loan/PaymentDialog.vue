<template>
  <v-dialog :value="value" max-width="900" persistent @input="$emit('input', $event)">
    <v-card :loading="busy">
      <v-card-title class="text-subtitle-1 font-weight-bold">
        ຮັບຊຳລະ (Receive payment) · {{ summary.account.accountNo }} · {{ summary.currency }}
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="12" sm="4"><v-select v-model="form.kind" :items="kinds" label="ປະເພດ (Kind)" dense outlined @change="reset" /></v-col>
          <v-col cols="12" sm="4">
            <v-text-field v-model="form.amount" :label="`ຈຳນວນ (Amount, ${summary.currency})`" :hint="form.kind === 'PREPAY' ? 'From the payoff quote' : `Up to ${decimals} decimals`"
              :readonly="form.kind === 'PREPAY'" dense outlined @input="reset" />
          </v-col>
          <v-col cols="12" sm="4"><v-text-field v-model="form.valueDate" type="date" label="ວັນທີມີຜົນ (Value date)" :hint="`Business date ${summary.businessDate}`" dense outlined @input="reset" /></v-col>
          <v-col cols="12" sm="6">
            <v-select v-model="form.bankAccountId" :items="bankOptions" :label="`ບັນຊີທະນາຄານ ${summary.currency} (Bank account in ${summary.currency})`" dense outlined
              :hint="bankOptions.length ? '' : `No active bank account in ${summary.currency}`" persistent-hint />
          </v-col>
          <v-col cols="12" sm="6"><v-text-field v-model="form.remarks" label="ໝາຍເຫດ (Remarks)" dense outlined /></v-col>
        </v-row>

        <v-alert v-if="form.kind === 'PREPAY' && quote" type="info" text dense>
          ຈຳນວນທີ່ຕ້ອງຊຳລະເພື່ອປິດ (Cash required to settle): <fx-amount v-bind="quote" />
        </v-alert>

        <template v-if="preview">
          <div class="text-subtitle-2 font-weight-bold mt-2">ການຕັດຊຳລະ (Allocation preview)</div>
          <v-row dense class="my-1">
            <v-col cols="12" sm="6">
              <v-card outlined class="pa-2">
                <div class="text-caption grey--text">ຈຳນວນທີ່ຮັບ (Amount received)</div>
                <fx-amount :amount="form.amount" :currency="summary.currency" :base-currency="summary.baseCurrency" v-bind="previewFx" />
              </v-card>
            </v-col>
          </v-row>
          <v-simple-table v-if="allocations.length" dense>
            <thead><tr><th>ງວດ (Inst.)</th><th>ອົງປະກອບ (Component)</th><th class="text-right">{{ summary.currency }}</th></tr></thead>
            <tbody>
              <tr v-for="(a, i) in allocations" :key="i"><td>{{ a.installmentNo }}</td><td>{{ a.componentCode || a.component }}</td><td class="text-right">{{ fmtAmount(a.amount, decimals) }}</td></tr>
            </tbody>
          </v-simple-table>
          <div v-if="preview.details && preview.details.advanceRemaining" class="text-caption mt-1">ຍອດລ່ວງໜ້າ (Advance after): {{ fmtAmount(preview.details.advanceRemaining, decimals) }}</div>
          <div class="text-subtitle-2 font-weight-bold mt-3 d-flex align-center">
            ບັນຊີ (Journal preview)
            <v-chip x-small dark class="ml-2" :color="preview.journal.balanced ? 'green' : 'red'">{{ preview.journal.balanced ? 'Balanced' : 'Not balanced' }}</v-chip>
          </div>
          <v-simple-table dense>
            <thead><tr><th>Event</th><th>Tag</th><th>Role</th><th class="text-right">Dr</th><th class="text-right">Cr</th></tr></thead>
            <tbody>
              <tr v-for="(l, i) in preview.journal.lines" :key="i">
                <td>{{ l.eventCode }}</td><td>{{ l.amountTag }}</td><td>{{ l.roleCode }}</td>
                <td class="text-right">{{ l.drCr === 'DR' ? fmtAmount(l.amount, decimals) : '' }}</td>
                <td class="text-right">{{ l.drCr === 'CR' ? fmtAmount(l.amount, decimals) : '' }}</td>
              </tr>
            </tbody>
          </v-simple-table>
          <div v-if="isForeign" class="text-caption grey--text mt-1">
            ອັດຕາຂ້າງເທິງເປັນອັດຕາສະແດງ; ອັດຕາທີ່ບັນທຶກແມ່ນອັດຕາທີ່ອະນຸມັດສຳລັບວັນບັນທຶກ, ສ່ວນຕ່າງອັດຕາລົງກຳໄລ/ຂາດທຶນ.
            (The rate above is indicative; the posting uses the authorized rate for the booking date, and principal is relieved at its carrying rate with the difference to realized FX gain or loss.)
          </div>
        </template>

        <v-alert v-if="result" :type="result.postingStatus === 'POSTED' ? 'success' : 'info'" text dense class="mt-3">
          {{ result.txNo }} · {{ result.postingStatus === 'POSTED' ? 'ບັນທຶກແລ້ວ (Posted)' : 'ລໍຖ້າອະນຸມັດ (Pending authorization)' }}
          <div v-if="result.fx" class="text-caption">
            {{ result.fx.baseCurrency }} @ {{ fmtRate(result.fx.rate) }} ({{ result.fx.rateDate }})<span v-if="result.fx.warning"> · {{ result.fx.warning }}</span>
          </div>
        </v-alert>
        <v-alert v-if="error" type="error" text dense class="mt-3">{{ error }}</v-alert>
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="result && result.postingStatus === 'POSTED'" outlined class="text-none" @click="$emit('print-receipt', result.transactionId)">
          <v-icon left small>mdi-printer</v-icon>ໃບຮັບເງິນ (Receipt)
        </v-btn>
        <v-spacer />
        <v-btn text class="text-none" @click="close">ປິດ (Close)</v-btn>
        <v-btn outlined color="primary" class="text-none" :disabled="(form.kind !== 'PREPAY' && !form.amount) || !!result" :loading="busy" @click="runPreview">ເບິ່ງກ່ອນ (Preview)</v-btn>
        <v-btn color="primary" class="text-none" :disabled="!preview || !form.bankAccountId || !!result" :loading="posting" @click="submit">ບັນທຶກ (Submit)</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import FxAmount from '~/components/loan/FxAmount.vue'
import { errMsg, asList } from '~/common/loan/loanApi'
import { fmtAmount, fmtRate } from '~/common/loan/format'

const newKey = () => (window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : `k-${Date.now()}-${Math.random().toString(16).slice(2)}`)

// Payment entry: preview (allocation + journal + rate) first, then one POST with an Idempotency-Key that is
// reused if the same submit is retried, so a double click or a network retry posts once.
export default {
  name: 'PaymentDialog',
  components: { FxAmount },
  props: {
    value: { type: Boolean, default: false },
    summary: { type: Object, required: true }
  },
  data () {
    return {
      form: { kind: 'REPAYMENT', amount: '', valueDate: '', bankAccountId: null, remarks: '' },
      kinds: [
        { value: 'REPAYMENT', text: 'ຊຳລະງວດ (Repayment)' },
        { value: 'PREPAY', text: 'ປິດບັນຊີກ່ອນກຳນົດ (Full prepayment)' }
      ],
      banks: [],
      preview: null,
      quote: null,
      result: null,
      error: null,
      busy: false,
      posting: false,
      idemKey: newKey()
    }
  },
  computed: {
    decimals () { return this.summary.currency === 'LAK' ? 0 : 2 },
    isForeign () { return this.summary.currency !== this.summary.baseCurrency },
    bankOptions () {
      return this.banks.filter(b => b.currency === this.summary.currency && b.isActive !== false).map(b => ({ value: b.id, text: `${b.accountNumber} · ${b.accountName}` }))
    },
    allocations () { return (this.preview && this.preview.details && this.preview.details.allocations) || [] },
    previewFx () {
      const fx = this.preview && this.preview.fx
      return fx ? { baseAmount: fx.baseAmount, rate: fx.rate, rateDate: fx.rateDate, warning: fx.warning } : { baseAmount: this.form.amount }
    }
  },
  watch: {
    value (open) { if (open) this.open() }
  },
  methods: {
    fmtAmount,
    fmtRate,
    async open () {
      this.form = { kind: 'REPAYMENT', amount: '', valueDate: this.summary.businessDate, bankAccountId: null, remarks: '' }
      this.reset()
      this.result = null
      this.idemKey = newKey()
      try {
        this.banks = asList(await this.$axios.$get('/api/bank_account/find'))
        if (this.bankOptions.length === 1) this.form.bankAccountId = this.bankOptions[0].value
      } catch (err) {
        this.error = errMsg(err)
      }
    },
    reset () {
      this.preview = null
      this.quote = null
      this.error = null
      this.idemKey = newKey()
    },
    async runPreview () {
      this.busy = true
      this.error = null
      try {
        const kind = this.form.kind === 'PREPAY' ? 'prepayment' : 'payment'
        const res = await this.$axios.$post(`/api/loan/accounts/${this.summary.account.id}/preview/${kind}`, { amount: this.form.amount, date: this.form.valueDate || undefined })
        this.preview = res.data
        if (kind === 'prepayment') {
          const fx = res.data.fx || {}
          this.form.amount = res.data.details.cashRequired
          this.quote = { amount: res.data.details.cashRequired, currency: this.summary.currency, baseCurrency: this.summary.baseCurrency, baseAmount: fx.cashRequiredBase, rate: fx.rate, rateDate: fx.rateDate, warning: fx.warning }
        }
      } catch (err) {
        this.error = errMsg(err)
      } finally {
        this.busy = false
      }
    },
    async submit () {
      this.posting = true
      this.error = null
      try {
        const body = { kind: this.form.kind, amount: this.form.amount, bankAccountId: this.form.bankAccountId, remarks: this.form.remarks || undefined }
        if (this.form.valueDate && this.form.valueDate !== this.summary.businessDate) body.valueDate = this.form.valueDate
        const res = await this.$axios.$post(`/api/loan/accounts/${this.summary.account.id}/transactions`, body, { headers: { 'Idempotency-Key': this.idemKey } })
        this.result = res.data
        this.$toast.success(res.message)
        this.$emit('posted', res.data)
      } catch (err) {
        this.error = errMsg(err)
      } finally {
        this.posting = false
      }
    },
    close () {
      this.$emit('input', false)
    }
  }
}
</script>
