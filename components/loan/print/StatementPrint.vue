<template>
  <div>
    <div class="d-flex justify-space-between">
      <div>
        <div class="text-h6 font-weight-bold">{{ company.name || '' }}</div>
        <div class="font-weight-bold">ໃບແຈ້ງຍອດບັນຊີສິນເຊື່ອ / Loan statement</div>
      </div>
      <div class="text-right">
        <div>{{ statement.accountNo }} · {{ statement.currency }}</div>
        <div>{{ statement.customer.name }}</div>
        <div>{{ statement.from }} – {{ statement.to }}</div>
      </div>
    </div>
    <v-divider class="my-3" />
    <table>
      <thead>
        <tr>
          <th>ວັນທີ / Date</th><th>ເລກທີ / Ref.</th><th>ລາຍການ / Type</th><th class="num">ຈຳນວນ / Amount</th>
          <th v-if="isForeign" class="num">{{ statement.baseCurrency }} @ ອັດຕາ / rate</th>
          <th class="num">ເງິນຕົ້ນຄົງເຫຼືອ / Principal</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>{{ statement.from }}</td><td /><td>ຍອດຍົກມາ / Opening</td><td /><td v-if="isForeign" /><td class="num">{{ amt(statement.opening) }}</td></tr>
        <tr v-for="m in statement.movements" :key="m.txNo">
          <td>{{ m.bookingDate }}</td><td>{{ m.txNo }}</td><td>{{ m.eventCode }}<span v-if="m.reversed"> (reversed)</span></td>
          <td class="num">{{ amt(m.amount) }}</td>
          <td v-if="isForeign" class="num">{{ fmtMoney(m.baseAmount, statement.baseCurrency) }} @ {{ fmtRate(m.exchangeRate) }}</td>
          <td class="num">{{ amt(m.principalBalance) }}</td>
        </tr>
        <tr class="font-weight-bold"><td>{{ statement.to }}</td><td /><td>ຍອດຍົກໄປ / Closing</td><td /><td v-if="isForeign" /><td class="num">{{ amt(statement.closing.amount) }}</td></tr>
      </tbody>
    </table>
    <div v-if="isForeign && statement.fx" class="text-caption mt-2">
      ຍອດຍົກໄປທຽບເທົ່າ / Closing base equivalent: {{ fmtMoney(statement.closing.baseAmount, statement.baseCurrency) }} @ {{ fmtRate(statement.fx.rate) }} ({{ statement.fx.rateDate }})
      <span v-if="statement.fx.warning"> · {{ statement.fx.warning }}</span>
    </div>
    <div v-if="footer" class="mt-4 text-caption" style="white-space: pre-wrap">{{ footer }}</div>
  </div>
</template>

<script>
import { fmtAmount, fmtMoney, fmtRate, decimalsOf } from '~/common/loan/format'

export default {
  name: 'StatementPrint',
  props: {
    statement: { type: Object, required: true },
    company: { type: Object, default: () => ({}) },
    footer: { type: String, default: '' }
  },
  computed: {
    isForeign () { return this.statement.currency !== this.statement.baseCurrency }
  },
  methods: {
    fmtMoney,
    fmtRate,
    amt (v) { return fmtAmount(v, decimalsOf(this.statement.currency)) }
  }
}
</script>
