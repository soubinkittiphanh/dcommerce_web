<template>
  <v-card outlined :loading="busy">
    <v-card-title class="py-2">
      <span class="text-subtitle-1 font-weight-bold">ການຈຳລອງຕາຕະລາງຜ່ອນ (Schedule simulation)</span>
      <v-spacer />
      <v-chip v-if="result" small dark :color="result.preview ? 'orange' : 'green'">
        {{ result.preview ? 'ຕົວຢ່າງ: ພາຣາມິເຕີຍັງບໍ່ອະນຸມັດ (Preview: unauthorized parameters)' : 'ພາຣາມິເຕີອະນຸມັດແລ້ວ (Authorized parameters)' }}
      </v-chip>
    </v-card-title>
    <v-card-text>
      <div class="text-caption mb-3">
        ຄິດໄລ່ເທົ່ານັ້ນ, ບໍ່ບັນທຶກ ແລະ ບໍ່ລົງບັນຊີ. (Calculation only: nothing is saved or posted.)
        {{ product.repaymentMethodCode }} · {{ product.accrualMethodCode }} · {{ product.dayCountCode }} · {{ product.feeFinancingMode }}
      </div>
      <v-row dense>
        <v-col cols="12" md="3"><v-text-field v-model="form.principal" label="ວົງເງິນ (Loan amount)" hint="Decimal" dense outlined /></v-col>
        <v-col cols="6" md="2"><v-text-field v-model="form.interestRate" label="ດອກເບ້ຍ/ປີ (Rate p.a.)" hint="0.18 = 18%" dense outlined /></v-col>
        <v-col cols="6" md="2"><v-text-field v-model="form.tenorMonths" label="ໄລຍະ ເດືອນ (Tenor, months)" type="number" dense outlined /></v-col>
        <v-col cols="6" md="2"><v-text-field v-model="form.valueDate" label="ວັນເບີກ (Value date)" type="date" dense outlined /></v-col>
        <v-col cols="6" md="3"><v-text-field v-model="form.firstDueDate" label="ງວດທຳອິດ (First due date, optional)" type="date" clearable dense outlined /></v-col>
        <v-col cols="6" md="2"><v-select v-model="form.graceType" :items="graceTypes" label="ໄລຍະຜ່ອນຜັນ (Grace type)" dense outlined /></v-col>
        <v-col cols="6" md="2"><v-text-field v-model="form.gracePeriods" label="ງວດຜ່ອນຜັນ (Grace periods)" type="number" :disabled="form.graceType === 'NONE'" dense outlined /></v-col>
        <v-col cols="6" md="2"><v-text-field v-model="form.balloonAmount" label="ງວດສຸດທ້າຍ Balloon (optional)" dense outlined /></v-col>
        <v-col cols="6" md="2"><v-text-field v-model="form.insurancePremium" label="ຄ່າປະກັນໄພ (Insurance premium)" dense outlined /></v-col>
        <v-col cols="12" md="3" class="d-flex align-center justify-end">
          <v-btn color="primary" class="text-none" :loading="busy" @click="simulate">ຄິດໄລ່ (Simulate)</v-btn>
        </v-col>
      </v-row>

      <template v-if="result">
        <v-alert v-for="(w, i) in result.warnings" :key="i" type="warning" text dense class="mb-1">{{ w }}</v-alert>

        <v-row dense class="mt-2">
          <v-col v-for="t in totalCards" :key="t.key" cols="6" md="3">
            <v-card outlined class="pa-2">
              <div class="text-caption grey--text">{{ t.label }}</div>
              <div class="text-subtitle-1 font-weight-bold">{{ fmt(t.value) }}</div>
            </v-card>
          </v-col>
        </v-row>

        <v-data-table :headers="headers" :items="result.schedule.rows" item-key="no" dense class="mt-3"
          :items-per-page="12" :footer-props="{ 'items-per-page-options': [12, 24, 60, -1] }">
          <template v-for="h in moneyCols" #[`item.${h}`]="{ item }">
            <span :key="h">{{ fmt(item[h]) }}</span>
          </template>
          <template #[`item.dueDate`]="{ item }">
            {{ item.dueDate }}<span v-if="item.dueDate !== item.originalDueDate" class="grey--text text-caption"> ({{ item.originalDueDate }})</span>
          </template>
        </v-data-table>

        <div class="text-subtitle-2 font-weight-bold mt-4 d-flex align-center">
          ການບັນທຶກບັນຊີເມື່ອເບີກຈ່າຍ (Accounting at disbursement, preview)
          <v-chip x-small dark class="ml-2" :color="result.journal.balanced ? 'green' : 'red'">
            {{ result.journal.balanced ? 'ສົມດຸນ (Balanced)' : 'ບໍ່ສົມດຸນ (Not balanced)' }}
          </v-chip>
          <span class="text-caption grey--text ml-2">rules: {{ result.journal.rules }}</span>
        </div>
        <ul v-if="result.journal.errors.length" class="text-caption red--text">
          <li v-for="(e, i) in result.journal.errors" :key="i">{{ e }}</li>
        </ul>
        <v-simple-table dense>
          <thead><tr><th>Event</th><th>Tag</th><th>ບົດບາດ (Role)</th><th class="text-right">Dr</th><th class="text-right">Cr</th></tr></thead>
          <tbody>
            <tr v-for="(l, i) in result.journal.lines" :key="i">
              <td>{{ l.eventCode }}</td><td>{{ l.amountTag }}</td>
              <td>{{ l.roleCode }}<span v-if="l.qualifier"> [{{ l.qualifier }}]</span></td>
              <td class="text-right">{{ l.drCr === 'DR' ? fmt(l.amount) : '' }}</td>
              <td class="text-right">{{ l.drCr === 'CR' ? fmt(l.amount) : '' }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
import { errMsg } from '~/common/loan/loanApi'

// Read-only product simulation (POST /api/loan/products/:id/simulate). Amounts stay decimal
// strings from the API; formatting only inserts thousands separators.
export default {
  name: 'SimulationPanel',
  props: {
    product: { type: Object, required: true }
  },
  data () {
    return {
      busy: false,
      result: null,
      form: {
        principal: '',
        interestRate: this.product.minInterestRate ? String(this.product.minInterestRate) : '',
        tenorMonths: 12,
        valueDate: null,
        firstDueDate: null,
        graceType: 'NONE',
        gracePeriods: 0,
        balloonAmount: '',
        insurancePremium: ''
      },
      graceTypes: [
        { value: 'NONE', text: 'ບໍ່ມີ (None)' },
        { value: 'INTEREST_ONLY', text: 'ຈ່າຍແຕ່ດອກເບ້ຍ (Interest only)' },
        { value: 'FULL', text: 'ບໍ່ຈ່າຍ, ດອກເບ້ຍທົບຕົ້ນ (Full, interest capitalized)' }
      ],
      headers: [
        { text: '#', value: 'no', width: 50 },
        { text: 'ວັນຄົບກຳນົດ (Due date)', value: 'dueDate' },
        { text: 'ຍອດຍົກມາ (Opening)', value: 'openingBalance', align: 'right' },
        { text: 'ເງິນຕົ້ນ (Principal)', value: 'principal', align: 'right' },
        { text: 'ດອກເບ້ຍ (Interest)', value: 'interest', align: 'right' },
        { text: 'ລວມ (Installment)', value: 'total', align: 'right' },
        { text: 'ຍອດເຫຼືອ (Closing)', value: 'closingBalance', align: 'right' }
      ],
      moneyCols: ['openingBalance', 'principal', 'interest', 'total', 'closingBalance']
    }
  },
  computed: {
    totalCards () {
      const t = this.result.schedule.totals
      return [
        { key: 'principal', label: 'ເງິນຕົ້ນລວມ (Total principal)', value: t.principal },
        { key: 'interest', label: 'ດອກເບ້ຍລວມ (Total interest)', value: t.interest },
        { key: 'fees', label: 'ຄ່າທຳນຽມລ່ວງໜ້າ (Upfront fees)', value: this.result.fees.total },
        { key: 'maturity', label: 'ວັນຄົບສັນຍາ (Maturity)', value: this.result.schedule.maturityDate }
      ]
    }
  },
  methods: {
    fmt (v) {
      const s = String(v === null || v === undefined ? '' : v)
      if (!/^-?\d+(\.\d+)?$/.test(s)) return s
      const [i, f] = s.split('.')
      return i.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (f ? `.${f}` : '')
    },
    body () {
      const out = {}
      for (const [k, v] of Object.entries(this.form)) {
        if (v === '' || v === null || v === undefined) continue
        if (k === 'gracePeriods' && this.form.graceType === 'NONE') continue
        out[k] = ['tenorMonths', 'gracePeriods'].includes(k) ? Number(v) : v
      }
      return out
    },
    async simulate () {
      this.busy = true
      try {
        const res = await this.$axios.$post(`/api/loan/products/${this.product.id}/simulate`, this.body())
        this.result = res.data
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.busy = false
      }
    }
  }
}
</script>
