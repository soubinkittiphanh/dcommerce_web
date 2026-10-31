<template>
  <span class="fx-amount">
    <span class="font-weight-bold">{{ fmtMoney(amount, currency) }}</span>
    <template v-if="isForeign">
      <span class="d-block text-caption grey--text text--darken-1">
        <template v-if="baseAmount !== null && baseAmount !== undefined">
          ≈ {{ fmtMoney(baseAmount, baseCurrency) }} @ {{ fmtRate(rate) }}<span v-if="rateDate"> ({{ rateDate }})</span>
        </template>
        <template v-else>ບໍ່ມີອັດຕາ (no rate)</template>
      </span>
      <v-tooltip v-if="warning" bottom max-width="360">
        <template #activator="{ on, attrs }">
          <v-chip x-small color="amber lighten-4" class="mt-1" v-bind="attrs" v-on="on">
            <v-icon x-small left color="amber darken-3">mdi-clock-alert-outline</v-icon>{{ shortWarning }}
          </v-chip>
        </template>
        <span>{{ warning }}</span>
      </v-tooltip>
    </template>
  </span>
</template>

<script>
import { fmtMoney, fmtRate } from '~/common/loan/format'

// A converted amount: the contract amount, its base amount, the rate, the rate date and any rate-age warning.
// For the base currency only the amount is shown.
export default {
  name: 'FxAmount',
  props: {
    amount: { type: [String, Number], default: null },
    currency: { type: String, default: '' },
    baseAmount: { type: [String, Number], default: null },
    baseCurrency: { type: String, default: 'LAK' },
    rate: { type: String, default: null },
    rateDate: { type: String, default: null },
    warning: { type: String, default: null }
  },
  computed: {
    isForeign () {
      return this.currency && this.baseCurrency && this.currency !== this.baseCurrency
    },
    shortWarning () {
      const m = /\((\d+) days? old\)/.exec(this.warning || '')
      return m ? `ອັດຕາ ${m[1]} ມື້ (rate ${m[1]} day${m[1] === '1' ? '' : 's'} old)` : 'ເບິ່ງອັດຕາ (check rate)'
    }
  },
  methods: { fmtMoney, fmtRate }
}
</script>
