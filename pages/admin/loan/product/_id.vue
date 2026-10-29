<template>
  <div class="loan-product pa-4">
    <loan-banner />

    <div class="d-flex align-center mb-3 flex-wrap">
      <v-btn icon to="/admin/loan/studio?tab=products"><v-icon>mdi-arrow-left</v-icon></v-btn>
      <div class="ml-2">
        <div class="text-h6 font-weight-black primary--text">
          {{ isNew ? 'ຜະລິດຕະພັນໃໝ່ (New product)' : `${product.productCode} · v${product.version}` }}
        </div>
        <div v-if="!isNew" class="text-caption">
          <v-chip x-small dark :color="authColors[product.authStatus]">{{ product.authStatus }}</v-chip>
          <v-chip v-if="product.status === 'SUPERSEDED'" x-small class="ml-1">SUPERSEDED</v-chip>
          <span class="ml-2 grey--text">maker #{{ product.makerId || 'system' }} · checker #{{ product.checkerId || '-' }}</span>
        </div>
      </div>
      <v-spacer />
      <template v-if="!isNew && product.authStatus === 'PENDING' && can('AUTHORIZE')">
        <v-btn small color="green" dark class="text-none mr-2" @click="decide('authorize')">ອະນຸມັດ (Authorize)</v-btn>
        <v-btn small color="red" dark class="text-none" @click="decide('reject')">ປະຕິເສດ (Reject)</v-btn>
      </template>
    </div>

    <v-alert v-if="failure" type="error" text dense dismissible @input="failure = null">
      <div class="font-weight-bold">{{ failure.message }}</div>
      <ul class="text-caption mt-1">
        <li v-for="(e, i) in failure.errors" :key="i">{{ e }}</li>
      </ul>
    </v-alert>

    <v-progress-linear v-if="!ready" indeterminate color="primary" />
    <v-alert v-else-if="!can('VIEW')" type="info" text>ທ່ານບໍ່ມີສິດເບິ່ງ (No VIEW permission for LN_PRODUCT).</v-alert>

    <template v-else>
      <v-alert v-if="!isNew && product.authStatus === 'AUTHORIZED' && can('EDIT')" type="info" text dense>
        ຜະລິດຕະພັນອະນຸມັດແລ້ວ: ການບັນທຶກແຖບທົ່ວໄປຈະສ້າງເວີຊັນໃໝ່ (v{{ product.version + 1 }}) ພ້ອມສຳເນົາອົງປະກອບ, ລໍຖ້າອະນຸມັດ.
        (Authorized product: saving the General tab creates version {{ product.version + 1 }} with copied children, pending authorization. Edit the children on the new version.)
      </v-alert>
      <v-alert v-if="!isNew && !childrenEditable && product.authStatus !== 'AUTHORIZED'" type="warning" text dense>
        ມີແຕ່ຜູ້ສ້າງເທົ່ານັ້ນທີ່ແກ້ໄຂໄດ້ (Only the maker can edit this unauthorized version.)
      </v-alert>

      <v-tabs v-model="tab" background-color="grey lighten-4" color="primary" show-arrows>
        <v-tab class="text-none">ທົ່ວໄປ (General)</v-tab>
        <v-tab class="text-none" :disabled="isNew">ສະກຸນເງິນ (Currencies)</v-tab>
        <v-tab class="text-none" :disabled="isNew">ອົງປະກອບ (Components)</v-tab>
        <v-tab class="text-none" :disabled="isNew">ຕົວແປ (UDEs)</v-tab>
        <v-tab class="text-none" :disabled="isNew">ລຳດັບຕັດຊຳລະ (Waterfall)</v-tab>
        <v-tab class="text-none" :disabled="isNew">ກວດບັນຊີ (Accounting check)</v-tab>
        <v-tab class="text-none" :disabled="isNew">ຈຳລອງ (Simulation)</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="pt-4">
        <v-tab-item>
          <v-card outlined>
            <v-card-text>
              <v-row dense>
                <v-col v-for="fld in generalFields" :key="fld.key" cols="12" :md="fld.type === 'bool' ? 3 : 4">
                  <v-switch v-if="fld.type === 'bool'" v-model="form[fld.key]" :label="fld.label" :disabled="!headerEditable" dense hide-details />
                  <v-autocomplete
                    v-else-if="fld.type === 'select'"
                    v-model="form[fld.key]"
                    :items="optionsFor(fld)"
                    :label="fld.label"
                    :disabled="!headerEditable || (fld.key === 'productCode' && !isNew)"
                    :clearable="!!fld.optional"
                    dense outlined
                  />
                  <v-text-field
                    v-else
                    v-model="form[fld.key]"
                    :label="fld.label"
                    :type="{ int: 'number', date: 'date' }[fld.type] || 'text'"
                    :hint="hints[fld.type]"
                    :disabled="!headerEditable || (fld.key === 'productCode' && !isNew)"
                    dense outlined
                  />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions v-if="headerEditable">
              <v-spacer />
              <v-btn color="primary" class="text-none" :loading="saving" @click="save">
                {{ saveLabel }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>

        <v-tab-item v-for="key in childKeys" :key="key">
          <master-data-table
            v-if="!isNew"
            :config="childConfigs[key]"
            :filters="{ productId: product.id }"
            :fixed="{ productId: product.id }"
            :readonly="!childrenEditable"
          />
        </v-tab-item>

        <v-tab-item>
          <v-card outlined :loading="checking">
            <v-card-title class="py-2">
              <span class="text-subtitle-1 font-weight-bold">ກົດບັນຊີທີ່ຜະລິດຕະພັນນີ້ຕ້ອງການ (Entry rules this product needs)</span>
              <v-spacer />
              <v-btn small outlined class="text-none" :disabled="isNew || !canCheck" :loading="checking" @click="runCheck">
                <v-icon left small>mdi-refresh</v-icon>ກວດ (Check)
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-alert v-if="!canCheck" type="info" text dense>ທ່ານບໍ່ມີສິດເບິ່ງກົດບັນຊີ (No VIEW permission for LN_ENTRY_RULE).</v-alert>
              <template v-else>
                <div class="text-caption mb-2">
                  ຜະລິດຕະພັນອະນຸມັດໄດ້ສະເພາະເມື່ອທຸກກົດທີ່ຕ້ອງການອະນຸມັດແລ້ວ.
                  (A product can be authorized only when every entry rule it needs is AUTHORIZED.)
                </div>
                <v-row dense>
                  <v-col v-for="c in checkCards" :key="c.key" cols="12" md="6">
                    <v-card outlined>
                      <v-card-subtitle class="pb-1 font-weight-bold">
                        {{ c.title }}
                        <v-chip v-if="check[c.key]" x-small dark class="ml-2" :color="check[c.key].ok ? 'green' : 'red'">
                          {{ check[c.key].ok ? 'OK' : `${check[c.key].errors.length} problem(s)` }}
                        </v-chip>
                      </v-card-subtitle>
                      <v-card-text v-if="check[c.key]">
                        <div class="text-caption grey--text">{{ check[c.key].activeRules }} active rules apply · {{ check[c.key].asOfDate }}</div>
                        <ul v-if="check[c.key].errors.length" class="text-caption mt-1">
                          <li v-for="(e, i) in check[c.key].errors" :key="i">{{ e }}</li>
                        </ul>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </template>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <simulation-panel v-if="!isNew && product.id" :key="product.id" :product="product" />
          <v-alert v-else type="info" text dense>ບັນທຶກຜະລິດຕະພັນກ່ອນ (Save the product first.)</v-alert>
        </v-tab-item>
      </v-tabs-items>
    </template>
  </div>
</template>

<script>
import LoanBanner from '~/components/loan/LoanBanner.vue'
import MasterDataTable from '~/components/loan/MasterDataTable.vue'
import SimulationPanel from '~/components/loan/SimulationPanel.vue'
import { PRODUCT_CHILD_CONFIGS } from '~/common/loan/masterConfigs'
import { errMsg, errDetails, loadRefOptions, AUTH_COLORS } from '~/common/loan/loanApi'

const F = (key, label, type = 'text', extra = {}) => ({ key, label, type, ...extra })

// Header fields of ln_product; dropdowns come from /api/loan/lookups (lookup / enumKey) or other entities (ref)
const GENERAL_FIELDS = [
  F('productCode', 'ລະຫັດ (Product code)'),
  F('name', 'ຊື່ (Name)'),
  F('categoryId', 'ໝວດ (Category)', 'select', { ref: { entity: 'product-category', text: 'code' } }),
  F('loanTypeCode', 'ປະເພດສິນເຊື່ອ (Loan type)', 'select', { lookup: 'loanTypes' }),
  F('effectiveDate', 'ມີຜົນແຕ່ (Effective date)', 'date'),
  F('expiryDate', 'ໝົດອາຍຸ (Expiry date)', 'date', { optional: true }),
  F('minAmount', 'ວົງເງິນຕ່ຳສຸດ (Min amount)', 'money'),
  F('maxAmount', 'ວົງເງິນສູງສຸດ (Max amount)', 'money'),
  F('minTenorMonths', 'ໄລຍະຕ່ຳສຸດ ເດືອນ (Min tenor, months)', 'int'),
  F('maxTenorMonths', 'ໄລຍະສູງສຸດ ເດືອນ (Max tenor, months)', 'int'),
  F('minInterestRate', 'ດອກເບ້ຍຕ່ຳສຸດ (Min interest rate)', 'rate'),
  F('maxInterestRate', 'ດອກເບ້ຍສູງສຸດ (Max interest rate)', 'rate'),
  F('minDownPaymentPct', 'ເງິນດາວຂັ້ນຕ່ຳ (Min down payment)', 'rate'),
  F('maxLtvPct', 'LTV ສູງສຸດ (Max LTV)', 'rate'),
  F('disbursementTargetCode', 'ປາຍທາງເບີກຈ່າຍ (Disbursement target)', 'select', { lookup: 'disbursementTargets' }),
  F('feeFinancingMode', 'ວິທີເກັບຄ່າທຳນຽມ (Fee financing mode)', 'select', { enumKey: 'product.feeFinancingMode' }),
  F('deferredFeePresentation', 'ການຮັບຮູ້ຄ່າທຳນຽມ (Fee presentation)', 'select', { lookup: 'deferredFeePresentations' }),
  F('earlySettlementRebateMethod', 'ການຄືນດອກເບ້ຍ (Rebate method)', 'select', { lookup: 'rebateMethods' }),
  F('accrualMethodCode', 'ວິທີຄ້າງຮັບ (Accrual method)', 'select', { lookup: 'accrualMethods' }),
  F('interestRecognitionCode', 'ການຮັບຮູ້ດອກເບ້ຍ (Interest recognition)', 'select', { lookup: 'interestRecognitions' }),
  F('repaymentMethodCode', 'ວິທີຜ່ອນ (Repayment method)', 'select', { lookup: 'repaymentMethods' }),
  F('maxGracePeriods', 'ງວດຜ່ອນຜັນສູງສຸດ (Max grace periods)', 'int'),
  F('firstPeriodMinDays', 'ງວດທຳອິດຕ່ຳສຸດ ມື້ (First period min days)', 'int'),
  F('firstPeriodMaxDays', 'ງວດທຳອິດສູງສຸດ ມື້ (First period max days)', 'int'),
  F('dayCountCode', 'ວິທີນັບມື້ (Day count)', 'select', { lookup: 'dayCounts' }),
  F('defaultFrequencyCode', 'ຄວາມຖີ່ (Frequency)', 'select', { lookup: 'frequencies' }),
  F('holidayHandlingCode', 'ວັນພັກ (Holiday handling)', 'select', { lookup: 'holidayHandlings' }),
  F('partialPrepayOption', 'ຊຳລະກ່ອນບາງສ່ວນ (Partial prepay)', 'select', { enumKey: 'product.partialPrepayOption' }),
  F('overpaymentTreatment', 'ຊຳລະເກີນ (Overpayment)', 'select', { enumKey: 'product.overpaymentTreatment' }),
  F('oldestInstallmentFirst', 'ຕັດງວດເກົ່າກ່ອນ (Oldest installment first)', 'bool'),
  F('allowRateOverride', 'ປ່ຽນອັດຕາໄດ້ (Rate override)', 'bool'),
  F('allowScheduleOverride', 'ປ່ຽນຕາຕະລາງໄດ້ (Schedule override)', 'bool'),
  F('allowPrepayment', 'ຊຳລະກ່ອນໄດ້ (Prepayment)', 'bool'),
  F('allowTopUp', 'ເພີ່ມວົງເງິນໄດ້ (Top-up)', 'bool'),
  F('allowReschedule', 'ປັບໂຄງສ້າງໄດ້ (Reschedule)', 'bool'),
  F('allowBackdatedDisbursement', 'ເບີກຍ້ອນຫຼັງໄດ້ (Backdated disbursement)', 'bool'),
  F('requireCollateral', 'ຕ້ອງມີຫຼັກຊັບ (Collateral required)', 'bool'),
  F('requireGuarantor', 'ຕ້ອງມີຜູ້ຄ້ຳ (Guarantor required)', 'bool')
]

export default {
  name: 'LoanProductForm',
  components: { LoanBanner, MasterDataTable, SimulationPanel },
  layout: 'admin',
  middleware: 'auths',
  data () {
    return {
      ready: false,
      tab: 0,
      product: {},
      form: {},
      refOptions: {},
      saving: false,
      failure: null,
      checking: false,
      check: { authorized: null, pending: null },
      checkCards: [
        { key: 'authorized', title: 'ກົດທີ່ອະນຸມັດແລ້ວ (Authorized rules: used for authorization)' },
        { key: 'pending', title: 'ລວມກົດທີ່ລໍຖ້າ (Including pending rules: preview)' }
      ],
      generalFields: GENERAL_FIELDS,
      childConfigs: PRODUCT_CHILD_CONFIGS,
      childKeys: ['currencies', 'components', 'udes', 'waterfall'],
      authColors: AUTH_COLORS,
      hints: { money: 'Decimal, up to 4 places', rate: '0 to 1 (0.12 = 12%)' }
    }
  },
  computed: {
    canCheck () {
      return this.$store.getters['loan/can']('LN_ENTRY_RULE', 'VIEW')
    },
    isNew () {
      return this.$route.params.id === 'new'
    },
    userId () {
      return this.$auth && this.$auth.user ? Number(this.$auth.user.id) : null
    },
    ownsUnauthorized () {
      const p = this.product
      return ['PENDING', 'REJECTED'].includes(p.authStatus) && (p.makerId === null || p.makerId === undefined || Number(p.makerId) === this.userId)
    },
    headerEditable () {
      if (this.isNew) return this.can('CREATE')
      if (!this.can('EDIT') || this.product.status === 'SUPERSEDED') return false
      return this.product.authStatus === 'AUTHORIZED' || this.ownsUnauthorized
    },
    childrenEditable () {
      return !this.isNew && this.can('EDIT') && this.ownsUnauthorized
    },
    saveLabel () {
      if (this.isNew) return 'ສ້າງ (Create, pending authorization)'
      return this.product.authStatus === 'AUTHORIZED' ? `ສ້າງເວີຊັນ ${this.product.version + 1} (Save as new version)` : 'ບັນທຶກ (Save)'
    }
  },
  watch: {
    '$route.params.id' () {
      this.load()
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('loan/init')
      // Nothing to load for users without product access (the API would refuse anyway)
      if (!this.can('VIEW')) return
      if (this.$store.getters['loan/can']('LN_PRODUCT_CATEGORY', 'VIEW')) {
        const cat = GENERAL_FIELDS.find(f => f.key === 'categoryId')
        this.$set(this.refOptions, 'categoryId', await loadRefOptions(this.$axios, cat.ref))
      }
      await this.load()
    } catch (err) {
      this.$toast.error(errMsg(err))
    } finally {
      this.ready = true
    }
  },
  methods: {
    can (action) {
      return this.$store.getters['loan/can']('LN_PRODUCT', action)
    },
    optionsFor (fld) {
      if (fld.ref) return this.refOptions[fld.key] || []
      if (fld.enumKey) return this.$store.getters['loan/enumOf'](fld.enumKey).map(v => ({ value: v, text: v }))
      const rows = this.$store.state.loan.lookups[fld.lookup] || []
      return rows.map(l => ({ value: l.code, text: `${l.code} - ${l.name}` }))
    },
    async load () {
      if (this.isNew) {
        this.product = {}
        this.form = Object.fromEntries(GENERAL_FIELDS.map(f => [f.key, f.type === 'bool' ? false : null]))
        return
      }
      const res = await this.$axios.$get(`/api/loan/products/${this.$route.params.id}`)
      this.product = res.data
      this.form = Object.fromEntries(GENERAL_FIELDS.map(f => [f.key, res.data[f.key] === undefined ? null : res.data[f.key]]))
      if (this.canCheck) await this.runCheck()
    },
    async runCheck () {
      this.checking = true
      try {
        const url = `/api/loan/products/${this.product.id}/accounting-check`
        const [authorized, pending] = await Promise.all([this.$axios.$get(url), this.$axios.$get(url, { params: { includePending: 1 } })])
        this.check = { authorized: authorized.data, pending: pending.data }
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.checking = false
      }
    },
    payload () {
      const out = {}
      for (const f of GENERAL_FIELDS) {
        let v = this.form[f.key]
        if (v === '' || v === undefined) v = null
        if (!this.isNew && String(v) === String(this.product[f.key] === undefined ? null : this.product[f.key])) continue
        if (this.isNew && v === null && f.type !== 'bool') continue
        if (f.type === 'int' && v !== null) v = Number(v)
        out[f.key] = v
      }
      return out
    },
    async save () {
      this.saving = true
      try {
        const body = this.payload()
        const res = this.isNew
          ? await this.$axios.$post('/api/loan/products', body)
          : await this.$axios.$put(`/api/loan/products/${this.product.id}`, body)
        this.$toast.success(res.message)
        if (res.data && res.data.id && String(res.data.id) !== String(this.product.id) && res.data.productCode) {
          this.$router.push(`/admin/loan/product/${res.data.id}`)
        } else {
          await this.load()
        }
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.saving = false
      }
    },
    async decide (action) {
      try {
        this.failure = null
        const res = await this.$axios.$post(`/api/loan/params/product/${this.product.id}/${action}`, {})
        this.$toast.success(res.message)
        await this.load()
      } catch (err) {
        this.$toast.error(errMsg(err))
        // Entry-rule legs blocking the authorization: list them and open the Accounting check tab
        if (errDetails(err).length) {
          this.failure = { message: errMsg(err), errors: errDetails(err) }
          this.tab = 5
        }
      }
    }
  }
}
</script>

<style scoped>
.loan-product {
  font-family: 'Noto Sans Lao', sans-serif;
}
</style>
