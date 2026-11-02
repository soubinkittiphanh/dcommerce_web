<template>
  <v-dialog :value="value" max-width="940" persistent @input="$emit('input', $event)">
    <v-card :loading="busy">
      <v-card-title class="text-subtitle-1 font-weight-bold">
        ສ້າງລາຍການ (New transaction) · {{ summary.account.accountNo }} · {{ summary.currency }}
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="12" sm="6">
            <v-select v-model="kindValue" :items="kindItems" label="ປະເພດ (Kind)" dense outlined @change="onKindChange" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="valueDate" type="date" label="ວັນທີມີຜົນ (Value date)" :hint="`Business date ${summary.businessDate}`" persistent-hint dense outlined @input="reset" />
          </v-col>
        </v-row>

        <v-row dense>
          <v-col v-for="f in spec.fields" :key="f.key" cols="12" sm="6">
            <v-select v-if="f.type === 'bank'" v-model="fields[f.key]" :items="bankOptions"
              :label="`${f.label} (${summary.currency})`" :hint="bankOptions.length ? '' : `No active bank account in ${summary.currency}`" persistent-hint dense outlined @change="reset" />
            <v-select v-else-if="f.type === 'select' && f.key === 'targetTransactionId'" v-model="fields[f.key]" :items="reversibleItems"
              :label="f.label" :hint="f.hint" persistent-hint dense outlined @change="reset" />
            <v-select v-else-if="f.type === 'select'" v-model="fields[f.key]" :items="f.items" :label="f.label" :hint="f.hint" persistent-hint dense outlined @change="reset" />
            <v-text-field v-else v-model="fields[f.key]" :label="f.label + (f.required ? ' *' : '')"
              :hint="f.hint || (f.type === 'amount' ? `Up to ${decimals} decimals` : '')" persistent-hint dense outlined @input="reset" />
          </v-col>
          <v-col v-if="spec.confirmAccountNo" cols="12" sm="6">
            <v-text-field v-model="confirmAccountNo" label="ຢືນຢັນເລກບັນຊີ (Type the account number to confirm) *"
              :error="confirmAccountNo.length > 0 && !accountConfirmed" dense outlined @input="reset" />
          </v-col>
        </v-row>

        <v-alert v-if="spec.checker" type="info" text dense class="mt-1">
          ຕ້ອງການຜູ້ອະນຸມັດຄົນທີສອງ (Needs a second person to authorize); ຈະເຂົ້າຄິວລໍຖ້າ (it will go to the pending queue).
        </v-alert>

        <template v-if="preview">
          <div class="text-subtitle-2 font-weight-bold mt-2 d-flex align-center">
            ບັນຊີ (Journal preview)
            <v-chip x-small dark class="ml-2" :color="balanced ? 'green' : 'red'">{{ balanced ? 'Balanced' : 'Not balanced' }}</v-chip>
            <span class="text-caption grey--text ml-3">ຈຳນວນ (Amount): {{ fmtAmount(preview.amount, decimals) }} {{ summary.currency }}</span>
          </div>
          <v-simple-table dense>
            <thead><tr><th>Event</th><th>Tag</th><th>Role</th><th class="text-right">Dr</th><th class="text-right">Cr</th><th v-if="isForeign" class="text-right">Base</th></tr></thead>
            <tbody>
              <tr v-for="(l, i) in preview.journal" :key="i">
                <td>{{ l.event }}</td><td>{{ l.tag }}</td><td>{{ l.role }}<span v-if="l.qualifier" class="grey--text"> · {{ l.qualifier }}</span></td>
                <td class="text-right">{{ l.drCr === 'DR' ? fmtAmount(l.amount, decimals) : '' }}</td>
                <td class="text-right">{{ l.drCr === 'CR' ? fmtAmount(l.amount, decimals) : '' }}</td>
                <td v-if="isForeign" class="text-right grey--text">{{ l.baseAmount !== undefined ? fmtAmount(l.baseAmount, baseDecimals) : '' }}<span v-if="l.isBaseOnly"> (base)</span></td>
              </tr>
            </tbody>
          </v-simple-table>

          <v-alert v-if="preview.fx" :type="(preview.fx.warnings && preview.fx.warnings.length) ? 'warning' : 'info'" text dense class="mt-2">
            {{ preview.fx.baseCurrency }} @ {{ fmtRate(preview.fx.rate) }} ({{ preview.fx.rateDate }})
            <span v-if="preview.fx.warning"> · {{ preview.fx.warning }}</span>
            <div v-if="preview.implied" class="text-caption">implied {{ fmtRate(preview.implied.rate || preview.implied) }}</div>
          </v-alert>

          <div class="text-caption grey--text mt-1">
            ເບິ່ງກ່ອນ ວັນ/ເວລາ {{ fmtTime(preview.previewedAt) }}; ຕອນອະນຸມັດຈະຄຳນວນໃໝ່ອີກຄັ້ງ.
            (Preview as of {{ fmtTime(preview.previewedAt) }}; the final entry is calculated again at authorization.)
          </div>
        </template>

        <v-alert v-if="result" :type="result.postingStatus === 'POSTED' ? 'success' : 'info'" text dense class="mt-3">
          {{ result.txNo }} · {{ result.postingStatus === 'POSTED' ? 'ບັນທຶກແລ້ວ (Posted)' : 'ລໍຖ້າອະນຸມັດ (Pending authorization)' }}
          <nuxt-link v-if="result.postingStatus === 'PENDING_AUTH'" to="/admin/loan/pending" class="ml-1">ໄປທີ່ຄິວ (Go to the pending queue) →</nuxt-link>
        </v-alert>
        <v-alert v-if="error" type="error" text dense class="mt-3">{{ error }}</v-alert>
      </v-card-text>

      <v-card-actions>
        <v-btn v-if="result && result.postingStatus === 'POSTED' && receiptKinds.includes(result.eventCode)" outlined class="text-none" @click="$emit('print-receipt', result.transactionId)">
          <v-icon left small>mdi-printer</v-icon>ໃບຮັບເງິນ (Receipt)
        </v-btn>
        <v-spacer />
        <v-btn text class="text-none" @click="close">ປິດ (Close)</v-btn>
        <v-btn outlined color="primary" class="text-none" :disabled="!canPreview || !!result" :loading="busy" @click="runPreview">ເບິ່ງກ່ອນ (Preview)</v-btn>
        <v-btn color="primary" class="text-none" :disabled="!canSubmit" :loading="posting" @click="submit">ບັນທຶກ (Submit)</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { errMsg, asList } from '~/common/loan/loanApi'
import { fmtAmount, fmtRate } from '~/common/loan/format'
import { byValue, postKindOf, kindsForStage } from '~/components/loan/transactionKinds'

const newKey = () => (window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : `k-${Date.now()}-${Math.random().toString(16).slice(2)}`)

// Generic transaction entry: a dry-run preview (POST /preview/<kind>, which writes nothing and shows the
// journal, amount, rate and warnings) then one POST /transactions with an Idempotency-Key that is reused
// only while the form is unchanged, so a double click or retry posts once; any field change makes a new key.
export default {
  name: 'TransactionDialog',
  props: {
    value: { type: Boolean, default: false },
    summary: { type: Object, required: true },
    transactions: { type: Array, default: () => [] },
    initialKind: { type: String, default: null }
  },
  data () {
    return {
      kindValue: null,
      valueDate: '',
      fields: {},
      confirmAccountNo: '',
      banks: [],
      preview: null,
      result: null,
      error: null,
      busy: false,
      posting: false,
      idemKey: newKey(),
      receiptKinds: ['REPAYMENT', 'PREPAY', 'FEE_COLLECT', 'RECOVERY'],
      submitting: false
    }
  },
  computed: {
    stage () { return this.summary.account.accountStage },
    kindItems () { return kindsForStage(this.stage).map(k => ({ value: k.value, text: k.label })) },
    spec () { return byValue[this.kindValue] || { fields: [] } },
    decimals () { return this.summary.currency === 'LAK' ? 0 : 2 },
    baseDecimals () { return this.summary.baseCurrency === 'LAK' ? 0 : 2 },
    isForeign () { return this.summary.currency !== this.summary.baseCurrency },
    bankOptions () {
      return this.banks.filter(b => b.currency === this.summary.currency && b.isActive !== false).map(b => ({ value: b.id, text: `${b.accountNumber} · ${b.accountName}` }))
    },
    // POSTED, not-yet-reversed transactions, latest first (the server enforces strict LIFO on submit)
    reversibleItems () {
      return this.transactions
        .filter(t => t.postingStatus === 'POSTED' && !t.isReversed && t.eventCode !== 'REVERSAL')
        .slice().sort((a, b) => b.id - a.id)
        .map(t => ({ value: t.id, text: `${t.txNo} · ${t.eventCode} · ${fmtAmount(t.amount, this.decimals)}` }))
    },
    accountConfirmed () { return this.confirmAccountNo.trim() === String(this.summary.account.accountNo) },
    balanced () {
      if (!this.preview) return false
      const sum = dr => this.preview.journal.filter(l => l.drCr === dr && !l.isBaseOnly).reduce((s, l) => s + Number(l.amount), 0)
      return Math.abs(sum('DR') - sum('CR')) < 0.0001
    },
    missingRequired () {
      for (const f of this.spec.fields) {
        if (f.required && !this.fieldVal(f.key)) return true
      }
      if (this.spec.remarksRequired && !this.fieldVal('remarks')) return true
      if (this.spec.confirmAccountNo && !this.accountConfirmed) return true
      return false
    },
    canPreview () { return Boolean(this.kindValue) && !this.missingRequired },
    canSubmit () { return Boolean(this.preview) && !this.missingRequired && !this.result && !this.posting }
  },
  watch: {
    value (open) { if (open) this.open() }
  },
  methods: {
    fmtAmount,
    fmtRate,
    fmtTime (iso) { try { return new Date(iso).toLocaleString() } catch (e) { return iso } },
    fieldVal (key) { const v = this.fields[key]; return v !== undefined && v !== null && String(v).length > 0 },
    async open () {
      this.kindValue = (this.initialKind && byValue[this.initialKind] && byValue[this.initialKind].stages.includes(this.stage))
        ? this.initialKind
        : (this.kindItems[0] && this.kindItems[0].value) || null
      this.valueDate = this.summary.businessDate
      this.result = null
      this.confirmAccountNo = ''
      this.resetFields()
      try {
        this.banks = asList(await this.$axios.$get('/api/bank_account/find'))
        this.autoBank()
      } catch (err) { this.error = errMsg(err) }
    },
    resetFields () {
      this.fields = {}
      this.reset()
    },
    onKindChange () {
      this.result = null
      this.confirmAccountNo = ''
      this.resetFields()
      this.autoBank()
    },
    autoBank () {
      if (this.spec.fields.some(f => f.type === 'bank') && this.bankOptions.length === 1) this.$set(this.fields, 'bankAccountId', this.bankOptions[0].value)
    },
    reset () {
      // Any change invalidates the preview and starts a fresh idempotency key for the next submit.
      this.preview = null
      this.error = null
      this.idemKey = newKey()
    },
    body () {
      const b = { ...(this.spec.fixed || {}) }
      for (const f of this.spec.fields) {
        const v = this.fields[f.key]
        if (v !== undefined && v !== null && String(v).length > 0) b[f.key] = v
      }
      if (this.valueDate && this.valueDate !== this.summary.businessDate) b.valueDate = this.valueDate
      return b
    },
    async runPreview () {
      this.busy = true
      this.error = null
      try {
        const res = await this.$axios.$post(`/api/loan/accounts/${this.summary.account.id}/preview/${postKindOf(this.spec)}`, this.body())
        this.preview = res.data
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
        const res = await this.$axios.$post(`/api/loan/accounts/${this.summary.account.id}/transactions`,
          { kind: postKindOf(this.spec), ...this.body() }, { headers: { 'Idempotency-Key': this.idemKey } })
        this.result = res.data
        this.$toast.success(res.message)
        this.$emit('posted', res.data)
      } catch (err) {
        this.error = errMsg(err)
      } finally {
        this.posting = false
      }
    },
    close () { this.$emit('input', false) }
  }
}
</script>
