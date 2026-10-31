<template>
  <div>
    <div class="d-flex justify-space-between align-start">
      <div>
        <div class="text-h6 font-weight-bold">{{ company.name || '' }}</div>
        <div class="text-caption">{{ company.address || '' }} {{ company.tel || '' }}</div>
      </div>
      <div class="text-right">
        <div class="text-h6 font-weight-bold">ໃບຮັບເງິນ / RECEIPT</div>
        <div>{{ txn.txNo }}</div>
        <div>{{ txn.valueDate }}</div>
      </div>
    </div>
    <v-divider class="my-3" />
    <table>
      <tbody>
        <tr><th>ລູກຄ້າ / Customer</th><td>{{ summary.customer.name }} {{ summary.customer.telephone ? `(${summary.customer.telephone})` : '' }}</td></tr>
        <tr><th>ເລກບັນຊີ / Account</th><td>{{ summary.account.accountNo }} · {{ summary.product ? summary.product.productCode : '' }}</td></tr>
        <tr><th>ປະເພດ / Type</th><td>{{ kindLabel }}</td></tr>
        <tr><th>ຈຳນວນ / Amount</th><td class="font-weight-bold">{{ fmtMoney(txn.amount, summary.currency) }}</td></tr>
        <tr v-if="isForeign">
          <th>ທຽບເທົ່າ / Base equivalent</th>
          <td>{{ fmtMoney(txn.baseAmount, summary.baseCurrency) }} @ {{ fmtRate(txn.exchangeRate) }} ({{ txn.exchangeRateDate || txn.valueDate }})</td>
        </tr>
        <tr v-if="txn.fxWarning"><th>ໝາຍເຫດອັດຕາ / Rate note</th><td>{{ txn.fxWarning }}</td></tr>
        <tr><th>ວັນທີບັນທຶກ / Booking date</th><td>{{ txn.bookingDate || txn.postingDate }}</td></tr>
        <tr v-if="txn.remarks"><th>ໝາຍເຫດ / Remarks</th><td>{{ txn.remarks }}</td></tr>
      </tbody>
    </table>
    <div v-if="footer" class="mt-4 text-caption" style="white-space: pre-wrap">{{ footer }}</div>
    <div class="d-flex justify-space-between mt-12">
      <div>ຜູ້ຈ່າຍ / Paid by: ____________________</div>
      <div>ຜູ້ຮັບ / Received by: ____________________</div>
    </div>
  </div>
</template>

<script>
import { fmtMoney, fmtRate } from '~/common/loan/format'

const KINDS = { REPAYMENT: 'ຊຳລະງວດ / Repayment', PREPAY: 'ປິດບັນຊີກ່ອນກຳນົດ / Full prepayment', FEE_COLLECT: 'ຄ່າທຳນຽມ / Fees', RECOVERY: 'ເກັບຄືນ / Recovery' }

export default {
  name: 'ReceiptPrint',
  props: {
    txn: { type: Object, required: true },
    summary: { type: Object, required: true },
    company: { type: Object, default: () => ({}) },
    footer: { type: String, default: '' }
  },
  computed: {
    isForeign () { return this.summary.currency !== this.summary.baseCurrency },
    kindLabel () { return KINDS[this.txn.eventCode] || this.txn.eventCode }
  },
  methods: { fmtMoney, fmtRate }
}
</script>
