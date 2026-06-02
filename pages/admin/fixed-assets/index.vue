<template>
  <div class="fixed-assets-container ">
    <!-- Main Dashboard Header -->
    <v-row class="align-center mb-6">
      <v-col cols="12" sm="8">
        <div class="d-flex align-center mb-1">
          <span class=" text-uppercase tracking-wider text--secondary">Finance</span>
          <v-icon small class="mx-1 text--secondary">mdi-chevron-right</v-icon>
          <span class=" text-uppercase tracking-wider primary--text font-weight-bold">Fixed Assets</span>
        </div>
        <h1 class="text-h4 font-weight-black slate-header-text tracking-tight d-flex align-center">
          <v-icon color="primary" class="mr-2" size="36">mdi-domain-plus</v-icon>
          ລະບົບຄຸ້ມຄອງຊັບສິນຄົງທີ່ (Fixed Assets Hub)
        </h1>
      </v-col>
      <v-col cols="12" sm="4" class="text-sm-right">
        <v-chip color="primary" outlined class="font-weight-bold py-4">
          <v-icon left small>mdi-calendar-clock</v-icon>
          ວັນທີເຮັດວຽກ: {{ businessDate || todayDateString }}
        </v-chip>
      </v-col>
    </v-row>

    <!-- Quick Metrics Cards -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="3">
        <v-card class="slate-metric-card pa-4 elevation-2 rounded-xl">
          <div class="d-flex align-center justify-between">
            <div>
              <span class=" font-weight-bold text-uppercase text--secondary">ຊັບສິນທັງໝົດ</span>
              <h2 class="text-h4 font-weight-black slate-value-text mt-1">{{ stats.totalCount }}</h2>
            </div>
            <v-avatar color="indigo lighten-5" rounded size="48">
              <v-icon color="indigo darken-2">mdi-office-building-cog</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="slate-metric-card pa-4 elevation-2 rounded-xl">
          <div class="d-flex align-center justify-between">
            <div>
              <span class=" font-weight-bold text-uppercase text--secondary">ມູນຄ່າຊື້ລວມ (GBV)</span>
              <h2 class="text-h5 font-weight-black slate-value-text mt-1">{{ formatCurrency(stats.totalCostLAK) }} <span class="">LAK</span></h2>
            </div>
            <v-avatar color="teal lighten-5" rounded size="48">
              <v-icon color="teal darken-2">mdi-cash-plus</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="slate-metric-card pa-4 elevation-2 rounded-xl">
          <div class="d-flex align-center justify-between">
            <div>
              <span class=" font-weight-bold text-uppercase text--secondary">ຄ່າຫຼຸ້ຍຫ້ຽນສະສົມ</span>
              <h2 class="text-h5 font-weight-black slate-value-text mt-1">{{ formatCurrency(stats.totalAccumulatedDeprLAK) }} <span class="">LAK</span></h2>
            </div>
            <v-avatar color="amber lighten-5" rounded size="48">
              <v-icon color="amber darken-2">mdi-chart-line-down</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="slate-metric-card pa-4 elevation-2 rounded-xl">
          <div class="d-flex align-center justify-between">
            <div>
              <span class=" font-weight-bold text-uppercase text--secondary">ມູນຄ່າຄົງເຫຼືອລວມ (NBV)</span>
              <h2 class="text-h5 font-weight-black slate-value-text mt-1">{{ formatCurrency(stats.totalNBVLAK) }} <span class="">LAK</span></h2>
            </div>
            <v-avatar color="green lighten-5" rounded size="48">
              <v-icon color="green darken-2">mdi-wallet</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Navigation Hub Grid Section -->
    <v-row class="mb-8">
      <!-- Card 1: Category Blueprints -->
      <v-col cols="12" md="4">
        <v-card class="elevation-4 rounded-xl border-slate overflow-hidden glass-panel d-flex flex-column h-100 fill-height justify-between">
          <div class="gradient-bar"></div>
          <v-card-text class="pa-6">
            <div class="d-flex align-center mb-4">
              <v-avatar color="indigo lighten-5" class="mr-3" size="48">
                <v-icon color="indigo darken-2" size="28">mdi-file-tree</v-icon>
              </v-avatar>
              <div>
                <h3 class="text-h6 font-weight-bold slate-title">ປະເພດຊັບສິນ</h3>
                <span class=" text-uppercase font-weight-bold text-indigo">Category Blueprints</span>
              </div>
            </div>
            <p class="text-body-2 text-justify text--secondary mb-0" style="line-height: 1.6;">
              ຈັດການປະເພດຊັບສິນຄົງທີ່, ຄິດໄລ່ອາຍຸການນຳໃຊ້ແບບສອງຫົວໜ່ວຍ (ປີ ແລະ ເດືອນ) ແບບອັດຕະໂນມັດ, ແລະ ຜູກມັດບັນຊີ Cost, Accumulated, ແລະ Expense Account ຕາມຜັງບັນຊີ.
            </p>
          </v-card-text>
          <v-card-actions class="px-6 pb-6 pt-0">
            <v-btn to="/admin/fixed-assets/products" color="indigo" block dark large rounded class="font-weight-bold shadow-hover py-6">
              <v-icon left>mdi-file-tree</v-icon>
              ເປີດໜ້າປະເພດຊັບສິນ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Card 2: Asset Registry -->
      <v-col cols="12" md="4">
        <v-card class="elevation-4 rounded-xl border-slate overflow-hidden glass-panel d-flex flex-column h-100 fill-height justify-between">
          <div class="gradient-bar bg-teal"></div>
          <v-card-text class="pa-6">
            <div class="d-flex align-center mb-4">
              <v-avatar color="teal lighten-5" class="mr-3" size="48">
                <v-icon color="teal darken-2" size="28">mdi-card-text-outline</v-icon>
              </v-avatar>
              <div>
                <h3 class="text-h6 font-weight-bold slate-title">ທະບຽນຊັບສິນ</h3>
                <span class=" text-uppercase font-weight-bold text-teal">Asset Contracts Registry</span>
              </div>
            </div>
            <p class="text-body-2 text-justify text--secondary mb-0" style="line-height: 1.6;">
              ຂຶ້ນທະບຽນ ແລະ ຄິດໄລ່ງວດຊັບສິນຄົງທີ່ໃໝ່ (Capitalize), ກວດສອບຕາຕະລາງຄ່າຫຼຸ້ຍຫ້ຽນລາຍເດືອນ, ສະແດງສະຖານະລົງບັນຊີ (POSTED/UNPOSTED), ແລະ ຈັດການການຕັດຈຳໜ່າຍຊັບສິນ (Disposal).
            </p>
          </v-card-text>
          <v-card-actions class="px-6 pb-6 pt-0">
            <v-btn to="/admin/fixed-assets/contracts" color="teal darken-2" block dark large rounded class="font-weight-bold shadow-hover py-6">
              <v-icon left>mdi-card-text-outline</v-icon>
              ເປີດໜ້າທະບຽນຊັບສິນ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Card 3: Depreciation Period Runs -->
      <v-col cols="12" md="4">
        <v-card class="elevation-4 rounded-xl border-slate overflow-hidden glass-panel d-flex flex-column h-100 fill-height justify-between">
          <div class="gradient-bar bg-amber"></div>
          <v-card-text class="pa-6">
            <div class="d-flex align-center mb-4">
              <v-avatar color="amber lighten-5" class="mr-3" size="48">
                <v-icon color="amber darken-2" size="28">mdi-clock-check-outline</v-icon>
              </v-avatar>
              <div>
                <h3 class="text-h6 font-weight-bold slate-title">ຄິດໄລ່ຄ່າຫຼຸ້ຍຫ້ຽນ</h3>
                <span class=" text-uppercase font-weight-bold text-amber">Depreciation Runs</span>
              </div>
            </div>
            <p class="text-body-2 text-justify text--secondary mb-0" style="line-height: 1.6;">
              ຄິດໄລ່ຄ່າຫຼຸ້ຍຫ້ຽນປະຈຳງວດທ້າຍເດືອນ (EOM Period), ເບິ່ງຕົວຢ່າງລາຍການລົງບັນຊີ (Journal Entry Preview), ແລະ ສົ່ງຂໍ້ມູນລົງບັນຊີ General Ledger ພ້ອມອອກເລກ BATCH ບັນຊີທີ່ຖືກລ໋ອກຢ່າງຖາວອນ.
            </p>
          </v-card-text>
          <v-card-actions class="px-6 pb-6 pt-0">
            <v-btn to="/admin/fixed-assets/depreciation" color="amber darken-3" block dark large rounded class="font-weight-bold shadow-hover py-6">
              <v-icon left>mdi-clock-check-outline</v-icon>
              ເປີດໜ້າຄິດໄລ່ຄ່າຫຼຸ້ຍຫ້ຽນ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Recent Capitalized Assets (Resolves excess whitespace) -->
    <v-card class="elevation-4 rounded-xl overflow-hidden glass-panel pa-6">
      <div class="d-flex align-center justify-between mb-4 flex-wrap gap-4">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-history</v-icon>
          <span class="text-h6 font-weight-bold slate-title">ຊັບສິນທີ່ຂຶ້ນທະບຽນຫຼ້າສຸດ (Recent Assets Registry)</span>
        </div>
        <v-btn to="/admin/fixed-assets/contracts" text class="font-weight-bold text-primary">
          ເບິ່ງທັງໝົດ <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>

      <v-data-table
        :headers="contractHeaders"
        :items="recentContracts"
        :loading="loadingContracts"
        class="slate-table elevation-1 rounded-xl"
        no-data-text="ບໍ່ມີຂໍ້ມູນຊັບສິນຄົງທີ່"
        hide-default-footer
        disable-pagination
      >
        <!-- Financial values translation -->
        <template #[`item.acquisitionCost`]="{ item }">
          <span class="font-weight-bold text-primary">
            {{ getCurrencySymbol(item.currencyId) }} {{ formatCurrency(item.acquisitionCost) }}
          </span>
          <div v-if="item.currencyId !== localCurrencyId" class=" text--secondary font-weight-medium">
            ≈ {{ formatCurrency(item.acquisitionCost * item.rate) }} LAK
          </div>
        </template>

        <!-- Net Book Value (NBV) -->
        <template #[`item.netBookValue`]="{ item }">
          <span class="font-weight-bold text-success-amount">
            {{ getCurrencySymbol(item.currencyId) }} {{ formatCurrency(item.netBookValue || item.acquisitionCost) }}
          </span>
          <div v-if="item.currencyId !== localCurrencyId" class=" text-success-amount font-weight-medium">
            ≈ {{ formatCurrency((item.netBookValue || item.acquisitionCost) * item.rate) }} LAK
          </div>
        </template>

        <!-- Acquisition Date -->
        <template #[`item.acquisitionDate`]="{ item }">
          <span class="font-weight-medium">{{ item.acquisitionDate }}</span>
        </template>

        <!-- Status badges -->
        <template #[`item.status`]="{ item }">
          <v-chip small :color="getStatusColor(item.status)" class="font-weight-bold text-uppercase text-white">
            {{ getStatusLaoText(item.status) }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import {
  today,
  getFormatNum
} from '~/common'

export default {
  name: 'FixedAssetsDashboardHub',
  middleware: 'auths',

  data() {
    return {
      businessDate: null,
      currencies: [],
      contracts: [],
      loadingContracts: false,

      contractHeaders: [
        { text: 'ເລກທີສັນຍາ', value: 'contractNumber', align: 'start', sortable: true },
        { text: 'ຊື່ຊັບສິນຄົງທີ່', value: 'assetName', align: 'start', sortable: true },
        { text: 'ວັນທີຊື້', value: 'acquisitionDate', align: 'center', sortable: true },
        { text: 'ມູນຄ່າຊື້ (Acquisition Cost)', value: 'acquisitionCost', align: 'end', sortable: true },
        { text: 'ມູນຄ່າຄົງເຫຼືອ (NBV)', value: 'netBookValue', align: 'end', sortable: true },
        { text: 'ສະຖານະ', value: 'status', align: 'center', sortable: true }
      ]
    }
  },

  computed: {
    todayDateString() {
      return today
    },

    localCurrencyId() {
      const local = this.currencies.find(c => c.isLocalCCY || c.code === 'LAK')
      return local ? local.id : null
    },

    stats() {
      const activeContracts = this.contracts.filter(c => c.status !== 'DRAFT')
      const totalCount = activeContracts.length
      
      const totalCostLAK = activeContracts.reduce((sum, item) => {
        const val = Number(item.acquisitionCost) || 0
        const rate = Number(item.rate) || 1
        return sum + (val * rate)
      }, 0)

      const totalNBVLAK = activeContracts.reduce((sum, item) => {
        const val = Number(item.netBookValue !== undefined ? item.netBookValue : item.acquisitionCost) || 0
        const rate = Number(item.rate) || 1
        return sum + (val * rate)
      }, 0)

      const totalAccumulatedDeprLAK = totalCostLAK - totalNBVLAK

      return {
        totalCount,
        totalCostLAK,
        totalNBVLAK,
        totalAccumulatedDeprLAK
      }
    },

    recentContracts() {
      // Show top 5 most recent contracts
      return [...this.contracts]
        .sort((a, b) => new Date(b.acquisitionDate) - new Date(a.acquisitionDate))
        .slice(0, 5)
    }
  },

  mounted() {
    this.initializeModule()
  },

  methods: {
    formatCurrency(val) {
      if (val === undefined || val === null || isNaN(val)) return '0.00'
      return getFormatNum(val)
    },

    async initializeModule() {
      this.loadingContracts = true
      try {
        await Promise.all([
          this.fetchBusinessDate(),
          this.fetchCurrencies(),
          this.fetchContracts()
        ])
      } catch (error) {
        console.error('Fixed Asset hub initialization failed:', error)
      } finally {
        this.loadingContracts = false
      }
    },

    async fetchBusinessDate() {
      try {
        const response = await this.$axios.get('/api/businessDate/current')
        if (response.data && response.data.success && response.data.data) {
          this.businessDate = response.data.data.currentDate
        }
      } catch (error) {
        console.warn('Could not fetch business date:', error)
      }
    },

    async fetchCurrencies() {
      try {
        const response = await this.$axios.get('/api/currency/findAll')
        if (Array.isArray(response.data)) {
          this.currencies = response.data
        }
      } catch (error) {
        console.error('Currencies fetch error:', error)
      }
    },

    async fetchContracts() {
      try {
        const response = await this.$axios.get('/api/fixed-assets/contracts')
        if (Array.isArray(response.data)) {
          this.contracts = response.data
        }
      } catch (error) {
        console.warn('Failed to load contracts, loading mocks:', error)
        this.contracts = [
          {
            id: 1,
            contractNumber: 'FAC-LAPTOP-2026-001',
            fixedAssetProductId: 1,
            assetName: 'MacBook Pro M3 Max',
            serialNumber: 'SN-M3-987654',
            acquisitionDate: '2026-05-01',
            capitalizationDate: '2026-05-15',
            bookingDate: '2026-05-22',
            acquisitionCost: 2500.00,
            salvageValue: 0.00,
            currencyId: this.currencies.find(c => c.code === 'USD')?.id || 5,
            rate: 21000.00,
            locationId: 1,
            vendorId: 1,
            netBookValue: 2500.00,
            status: 'ACTIVE'
          }
        ]
      }
    },

    getCurrencySymbol(id) {
      const ccy = this.currencies.find(c => c.id === id)
      if (!ccy) return ''
      if (ccy.code === 'USD') return '$'
      if (ccy.code === 'THB') return '฿'
      return ccy.code
    },

    getStatusColor(status) {
      if (status === 'DRAFT') return 'grey'
      if (status === 'ACTIVE') return 'indigo'
      if (status === 'FULLY_DEPRECIATED') return 'teal'
      if (status === 'DISPOSED') return 'danger'
      return 'secondary'
    },

    getStatusLaoText(status) {
      if (status === 'DRAFT') return 'ລໍຖ້າອະນຸມັດ'
      if (status === 'ACTIVE') return 'ກຳລັງນຳໃຊ້'
      if (status === 'FULLY_DEPRECIATED') return 'ຫັກຄົບແລ້ວ'
      if (status === 'DISPOSED') return 'ຈຳໜ່າຍແລ້ວ'
      return status
    }
  }
}
</script>

<style scoped>
.fixed-assets-container {
  font-family: 'Inter', 'noto sans lao', sans-serif;
  color: #1e293b;
  background-color: #f8fafc;
  min-height: 100vh;
}

.slate-header-text {
  color: #0f172a;
}

.slate-title {
  color: #1e293b;
}

.slate-metric-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  transition: all 0.25s ease;
}

.slate-metric-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05) !important;
}

.slate-value-text {
  color: #0f172a;
}

.glass-panel {
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(10px);
  border: 1px solid #e2e8f0;
}

.border-slate {
  border: 1px solid #cbd5e1;
}

.gradient-bar {
  height: 5px;
  background: linear-gradient(90deg, #6366f1 0%, #4f46e5 100%);
}

.gradient-bar.bg-teal {
  background: linear-gradient(90deg, #0d9488 0%, #0f766e 100%);
}

.gradient-bar.bg-amber {
  background: linear-gradient(90deg, #d97706 0%, #b45309 100%);
}

.shadow-hover {
  transition: all 0.2s ease;
}
.shadow-hover:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
  transform: translateY(-1px);
}

.slate-table {
  background-color: #ffffff;
}

.slate-table >>> th {
  background-color: #f8fafc !important;
  font-weight: 700 !important;
  color: #475569 !important;
  font-size: 0.85rem !important;
  border-bottom: 2px solid #e2e8f0 !important;
  padding: 14px 16px !important;
}

.slate-table >>> td {
  padding: 14px 16px !important;
  font-size: 0.9rem !important;
  border-bottom: 1px solid #f1f5f9 !important;
}

.text-success-amount {
  color: #059669 !important;
}

.gap-4 {
  gap: 16px;
}
</style>

<style>
/* Global Noto Sans Lao font family overrides to affect Vuetify dialogs, floating dropdown elements, and body */
.v-application,
.v-application *,
.v-dialog,
.v-dialog *,
.v-menu__content,
.v-menu__content *,
.swal2-container,
.swal2-container * {
  font-family: 'Inter', 'Noto Sans Lao', sans-serif !important;
}
</style>
