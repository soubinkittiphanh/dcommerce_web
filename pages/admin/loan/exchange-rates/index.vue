<template>
  <div class="loan-page pa-4">
    <loan-banner />
    <page-title icon="mdi-swap-horizontal" title="ອັດຕາແລກປ່ຽນສິນເຊື່ອ" subtitle="Loan exchange rates · base units per 1 unit · maker-checker" />

    <v-progress-linear v-if="!ready" indeterminate color="primary" />
    <v-alert v-else-if="!can('VIEW')" type="info" text>ທ່ານບໍ່ມີສິດ (No VIEW permission for LN_EXCHANGE_RATE).</v-alert>

    <template v-else>
      <v-row dense>
        <v-col cols="12" md="6">
          <v-card outlined class="fill-height">
            <v-card-title class="text-subtitle-1 font-weight-bold py-2">ສຳເນົາອັດຕາຈາກ POS (Copy the POS rate)</v-card-title>
            <v-card-text>
              <div class="text-caption mb-2">
                ສ້າງແຖວໃໝ່ທີ່ລໍຖ້າອະນຸມັດ ຈາກອັດຕາປັດຈຸບັນຂອງ POS (ປ່ຽນທິດທາງໃຫ້ເປັນ ເງິນຫຼັກຕໍ່ 1 ໜ່ວຍ). ຜູ້ອື່ນຕ້ອງອະນຸມັດ.
                (Creates a PENDING row from the current POS currency rate, converted to base units per 1 unit. Another user authorizes it.)
              </div>
              <v-row dense>
                <v-col cols="12" sm="5"><v-select v-model="copy.currencyId" :items="foreignCurrencies" label="ສະກຸນເງິນ (Currency)" dense outlined /></v-col>
                <v-col cols="12" sm="4"><v-text-field v-model="copy.rateDate" type="date" label="ວັນທີ (Rate date)" dense outlined /></v-col>
                <v-col cols="12" sm="3">
                  <v-btn block color="primary" class="text-none" :disabled="!can('CREATE') || !copy.currencyId" :loading="copying" @click="copyPos">ສຳເນົາ (Copy)</v-btn>
                </v-col>
              </v-row>
              <div v-if="posRate" class="text-caption grey--text">POS: {{ posRate }}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card outlined class="fill-height">
            <v-card-title class="text-subtitle-1 font-weight-bold py-2">ອັດຕາທີ່ໃຊ້ສຳລັບວັນທີ (Rate a booking date uses)</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12" sm="5"><v-select v-model="probe.currencyId" :items="foreignCurrencies" label="ສະກຸນເງິນ (Currency)" dense outlined /></v-col>
                <v-col cols="12" sm="4"><v-text-field v-model="probe.date" type="date" label="ວັນທີບັນທຶກ (Booking date)" dense outlined /></v-col>
                <v-col cols="12" sm="3"><v-btn block outlined class="text-none" :disabled="!probe.currencyId" :loading="probing" @click="checkRate">ກວດ (Check)</v-btn></v-col>
              </v-row>
              <v-alert v-if="effective && effective.rate" type="success" text dense class="mb-0">
                {{ fmtRate(effective.rate) }} ({{ effective.rateDate }})
                <div v-if="effective.warning" class="amber--text text--darken-3 text-caption">{{ effective.warning }}</div>
              </v-alert>
              <v-alert v-else-if="effective && effective.error" type="error" text dense class="mb-0">{{ effective.error }}</v-alert>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <master-data-table :key="tableKey" class="mt-3" :config="config" />
    </template>
  </div>
</template>

<script>
import LoanBanner from '~/components/loan/LoanBanner.vue'
import PageTitle from '~/components/loan/PageTitle.vue'
import MasterDataTable from '~/components/loan/MasterDataTable.vue'
import { configFor } from '~/common/loan/masterConfigs'
import { errMsg, asList } from '~/common/loan/loanApi'
import { fmtRate } from '~/common/loan/format'

const today = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Vientiane' })

export default {
  name: 'LoanExchangeRates',
  components: { LoanBanner, PageTitle, MasterDataTable },
  layout: 'admin',
  middleware: 'auths',
  data () {
    return {
      ready: false,
      currencies: [],
      copy: { currencyId: null, rateDate: today() },
      probe: { currencyId: null, date: today() },
      copying: false,
      probing: false,
      effective: null,
      tableKey: 0,
      config: configFor('exchange-rate')
    }
  },
  computed: {
    foreignCurrencies () {
      return this.currencies.filter(c => !c.isLocalCCY && c.isActive !== false).map(c => ({ value: c.id, text: `${c.code} - ${c.name}` }))
    },
    posRate () {
      const c = this.currencies.find(x => x.id === this.copy.currencyId)
      return c ? `${c.code} rate ${c.rate} (${c.exchangeDirection})` : ''
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('loan/init')
      if (this.can('VIEW')) this.currencies = asList(await this.$axios.$get('/api/currency/findAll'))
    } catch (err) {
      this.$toast.error(errMsg(err))
    } finally {
      this.ready = true
    }
  },
  methods: {
    fmtRate,
    can (action) {
      return this.$store.getters['loan/can']('LN_EXCHANGE_RATE', action)
    },
    async copyPos () {
      this.copying = true
      try {
        const res = await this.$axios.$post('/api/loan/exchange-rates/copy-pos', this.copy)
        this.$toast.success(res.message)
        this.tableKey++
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.copying = false
      }
    },
    async checkRate () {
      this.probing = true
      try {
        const res = await this.$axios.$get('/api/loan/exchange-rates/effective', { params: this.probe })
        this.effective = res.data
      } catch (err) {
        this.effective = { error: errMsg(err) }
      } finally {
        this.probing = false
      }
    }
  }
}
</script>
