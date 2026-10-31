<template>
  <div>
    <div class="text-h6 font-weight-bold mb-3">{{ template.title }}</div>
    <!-- Plain text with placeholders filled; never rendered as HTML -->
    <div style="white-space: pre-wrap; line-height: 1.7">{{ text }}</div>
    <div class="text-caption grey--text mt-6">{{ template.templateCode }} · {{ template.effectiveFrom }}</div>
  </div>
</template>

<script>
import { fmtAmount, addAmounts, ratePct } from '~/common/loan/format'

// Contract wording comes from the authorized print template (D11); only the listed placeholders are filled
export default {
  name: 'ContractSummaryPrint',
  props: {
    template: { type: Object, required: true },
    summary: { type: Object, required: true },
    schedule: { type: Object, default: null },
    company: { type: Object, default: () => ({}) }
  },
  computed: {
    values () {
      const a = this.summary.account
      const d = this.summary.currency === 'LAK' ? 0 : 2
      const rows = (this.schedule && this.schedule.rows) || []
      const first = rows[0]
      const inst = first ? addAmounts(Object.values(first.components).map(c => c.due)) : null
      return {
        companyName: this.company.name || '',
        printDate: new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Vientiane' }),
        customerName: this.summary.customer.name || '',
        customerPhone: this.summary.customer.telephone || '',
        accountNo: a.accountNo,
        productName: this.summary.product ? this.summary.product.name : '',
        currency: this.summary.currency,
        principal: fmtAmount(/^0*(\.0*)?$/.test(String(a.disbursedAmount || '0')) ? a.sanctionedAmount : a.disbursedAmount, d),
        interestRatePct: ratePct(a.interestRate),
        tenorMonths: String(a.tenorMonths),
        installmentCount: String(rows.length),
        installmentAmount: inst === null ? '' : fmtAmount(inst, d),
        valueDate: a.valueDate,
        firstDueDate: a.firstDueDate,
        maturityDate: a.maturityDate
      }
    },
    text () {
      return String(this.template.body || '').replace(/{{\s*([a-zA-Z]+)\s*}}/g, (m, k) => (k in this.values ? this.values[k] : m))
    }
  }
}
</script>
