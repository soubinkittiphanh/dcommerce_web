<template>
  <div class="ministry-summary-report">
    <!-- Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-building"></i>
          ລາຍງານສະຫຼຸບຕາມກົມ
        </h1>
        <p class="page-subtitle">Ministry Summary Report</p>
      </div>
      <div class="action-buttons">
        <v-btn
          class="custom-btn export-btn"
          @click="exportToExcel"
          :loading="exporting"
        >
          <i class="fas fa-file-excel"></i>
          Export Excel
        </v-btn>
        <v-btn class="custom-btn print-btn" @click="printReport">
          <i class="fas fa-print"></i>
          Print
        </v-btn>
      </div>
    </div>
    <!-- Filters Card -->
    <v-card class="filter-card mb-4" elevation="2">
      <v-card-title class="filter-title d-flex align-center">
        <v-icon class="mr-2">mdi-filter</v-icon>
        ຕົວກອງ (Filters)
      </v-card-title>

      <v-card-text class="pt-4 pb-4 px-4">
        <v-row dense>
          <!-- Report Month -->
          <v-col cols="12" md="4">
            <v-menu
              v-model="monthMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filters.reportMonth"
                  label="ເດືອນລາຍງານ (Report Month)"
                  prepend-icon="mdi-calendar-month"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  dense
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.reportMonth"
                type="month"
                @input="monthMenu = false"
                color="#01532B"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <!-- Ministry Select -->
          <v-col cols="12" md="4">
            <v-select
              v-model="filters.ministryId"
              :items="ministries"
              item-text="ministryName"
              item-value="id"
              label="ກະຊວງ (Ministry)"
              prepend-icon="mdi-office-building"
              clearable
              outlined
              dense
            ></v-select>
          </v-col>

          <!-- Action Buttons -->
          <v-col cols="12" md="4" class="d-flex align-center">
            <v-btn
              class="custom-primary-btn mr-2"
              @click="applyFilters"
              :loading="loading"
              color="primary"
              depressed
              small
            >
              <v-icon left small>mdi-magnify</v-icon>
              ຄົ້ນຫາ
            </v-btn>
            <v-btn
              class="custom-secondary-btn"
              @click="resetFilters"
              color="grey lighten-1"
              depressed
              small
            >
              <v-icon left small>mdi-restore</v-icon>
              ຣີເຊັດ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Summary Cards -->
    <v-row class="summary-cards mb-4">
      <v-col cols="12" md="3">
        <v-card class="summary-card brought-forward-card" elevation="4">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ຍອດຍົກມາ</h3>
                <p class="summary-subtitle">Total Brought Forward</p>
                <h2 class="summary-amount">
                  {{ formatCurrency(summaryData.totalBroughtForwardLcy) }}
                </h2>
                <p class="summary-lcy">LCY Amount</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card advance-card" elevation="4">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-money-bill-wave"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ລາຍຈ່າຍເດືອນນີ້</h3>
                <p class="summary-subtitle">Current Month Advances</p>
                <h2 class="summary-amount">
                  {{ formatCurrency(summaryData.totalCurrentMonthLcy) }}
                </h2>
                <p class="summary-lcy">LCY Amount</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card settlement-card" elevation="4">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-hand-holding-usd"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ຊຳລະເດືອນນີ້</h3>
                <p class="summary-subtitle">Current Month Settlements</p>
                <h2 class="summary-amount">
                  {{ formatCurrency(summaryData.totalSettlementLcy) }}
                </h2>
                <p class="summary-lcy">LCY Amount</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card balance-card" elevation="4">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-balance-scale"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ຍອດສະຫຼຸບ</h3>
                <p class="summary-subtitle">Total Balance</p>
                <h2 class="summary-amount">
                  {{ formatCurrency(summaryData.totalBalanceLcy) }}
                </h2>
                <p class="summary-lcy">LCY Amount</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Ministry Chart -->
    <v-card class="chart-card mb-4" elevation="2">
      <v-card-title class="chart-title">
        <i class="fas fa-chart-bar"></i>
        ກາຟສະຫຼຸບຕາມກົມ (Ministry Summary Chart)
      </v-card-title>
      <v-card-text>
        <div class="chart-container">
          <canvas ref="ministryChart" width="400" height="200"></canvas>
        </div>
      </v-card-text>
    </v-card>

    <!-- Detailed Report Table -->
    <v-card class="table-card" elevation="2">
      <v-card-title class="table-title">
        <i class="fas fa-table"></i>
        ລາຍລະອຽດລາຍງານຕາມກົມ (Ministry Summary Details)
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຄົ້ນຫາກະຊວງ..."
          single-line
          hide-details
          class="search-field"
          outlined
          dense
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="tableHeaders"
        :items="reportData"
        :search="search"
        :loading="loading"
        class="report-table"
        :items-per-page="25"
        :footer-props="{
          itemsPerPageOptions: [10, 25, 50, 100],
          itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:',
        }"
      >
        <!-- Ministry and Currency Column -->
        <template v-slot:item.ministry="{ item }">
          <div class="ministry-cell">
            <span class="ministry-name">{{ item.ministryName }}</span>
            <span class="ministry-code">{{ item.ministryCode }}</span>
          </div>
        </template>

        <template v-slot:item.currencyCode="{ item }">
          <v-chip
            small
            :color="getCurrencyColor(item.currencyCode)"
            text-color="white"
          >
            {{ item.currencyCode }}
          </v-chip>
        </template>

        <!-- Brought Forward Section -->
        <template v-slot:item.broughtForwardAmount="{ item }">
          <div class="amount-breakdown">
            <span class="amount-cell">{{
              formatCurrency(item.broughtForwardAmount)
            }}</span>
            <div class="exchange-rate">
              Rate: {{ formatExchangeRate(item.broughtForwardExchangeRate) }}
            </div>
          </div>
        </template>

        <template v-slot:item.broughtForwardLcy="{ item }">
          <span class="amount-cell lcy-amount">
            {{ formatCurrency(item.broughtForwardLcy) }}
          </span>
        </template>

        <!-- Current Month Advances Section -->
        <template v-slot:item.currentMonthAmount="{ item }">
          <div class="amount-breakdown">
            <span class="amount-cell">{{
              formatCurrency(item.currentMonthAmount)
            }}</span>
            <div class="exchange-rate">
              Rate: {{ formatExchangeRate(item.currentMonthExchangeRate) }}
            </div>
          </div>
        </template>

        <template v-slot:item.currentMonthLcy="{ item }">
          <span class="amount-cell advance-amount">
            {{ formatCurrency(item.currentMonthLcy) }}
          </span>
        </template>

        <!-- Settlements Section -->
        <template v-slot:item.settlementAmount="{ item }">
          <div class="amount-breakdown">
            <span class="amount-cell">{{
              formatCurrency(item.settlementAmount)
            }}</span>
            <div class="exchange-rate">
              Rate: {{ formatExchangeRate(item.settlementExchangeRate) }}
            </div>
          </div>
        </template>

        <template v-slot:item.settlementLcy="{ item }">
          <span class="amount-cell settlement-amount">
            {{ formatCurrency(item.settlementLcy) }}
          </span>
        </template>

        <!-- Balance Section -->
        <template v-slot:item.balanceLcy="{ item }">
          <span
            class="amount-cell balance-amount"
            :class="getBalanceClass(item.balanceLcy)"
          >
            {{ formatCurrency(item.balanceLcy) }}
          </span>
        </template>

        <!-- Actions -->
        <template v-slot:item.actions="{ item }">
          <v-btn
            small
            class="custom-action-btn"
            @click="viewMinistryDetails(item)"
          >
            <i class="fas fa-eye"></i>
            ລາຍລະອຽດ
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Ministry Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="1000px">
      <v-card>
        <v-card-title class="dialog-header">
          <i class="fas fa-building"></i>
          ລາຍລະອຽດ - {{ selectedMinistry?.ministryName }} ({{
            selectedMinistry?.currencyCode
          }})
          <v-spacer></v-spacer>
          <v-btn icon @click="detailsDialog = false" class="close-btn">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text v-if="selectedMinistry">
          <!-- Ministry Summary -->
          <v-row class="mb-4">
            <v-col cols="12">
              <h3 class="section-title">
                ສະຫຼຸບ - {{ selectedMinistry.currencyCode }} (Summary)
              </h3>
              <v-divider class="custom-divider mb-3"></v-divider>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ຍອດຍົກມາ:</strong>
                <p>
                  {{ formatCurrency(selectedMinistry.broughtForwardAmount) }}
                  {{ selectedMinistry.currencyCode }}
                </p>
                <small
                  >LCY:
                  {{
                    formatCurrency(selectedMinistry.broughtForwardLcy)
                  }}</small
                >
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ລາຍຈ່າຍເດືອນນີ້:</strong>
                <p>
                  {{ formatCurrency(selectedMinistry.currentMonthAmount) }}
                  {{ selectedMinistry.currencyCode }}
                </p>
                <small
                  >LCY:
                  {{ formatCurrency(selectedMinistry.currentMonthLcy) }}</small
                >
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ຊຳລະເດືອນນີ້:</strong>
                <p>
                  {{ formatCurrency(selectedMinistry.settlementAmount) }}
                  {{ selectedMinistry.currencyCode }}
                </p>
                <small
                  >LCY:
                  {{ formatCurrency(selectedMinistry.settlementLcy) }}</small
                >
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ຍອດສະຫຼຸບ:</strong>
                <p
                  class="balance-text"
                  :class="getBalanceClass(selectedMinistry.balanceLcy)"
                >
                  {{ formatCurrency(selectedMinistry.balanceLcy) }} LAK
                </p>
              </div>
            </v-col>
          </v-row>

          <!-- Detailed Transactions -->
          <v-row>
            <v-col cols="12">
              <h3 class="section-title">ລາຍການລະອຽດ (Detailed Transactions)</h3>
              <v-divider class="custom-divider mb-3"></v-divider>
              <v-data-table
                :headers="detailHeaders"
                :items="ministryDetails"
                :loading="loadingDetails"
                hide-default-footer
                class="detail-table"
              >
                <template v-slot:item.bookingDate="{ item }">
                  <span class="date-cell">{{
                    formatDate(item.bookingDate)
                  }}</span>
                </template>
                <template v-slot:item.referenceNumber="{ item }">
                  <span class="reference-cell">{{ item.referenceNumber }}</span>
                </template>
                <template v-slot:item.amount="{ item }">
                  <div class="amount-breakdown">
                    <span class="amount-cell">{{
                      formatCurrency(item.amount)
                    }}</span>
                    <span class="currency-code">{{ item.currencyCode }}</span>
                    <div class="exchange-rate">
                      Rate: {{ formatExchangeRate(item.exchangeRate) }}
                    </div>
                  </div>
                </template>
                <template v-slot:item.lcyAmount="{ item }">
                  <span class="amount-cell lcy-amount">{{
                    formatCurrency(item.lcyAmount)
                  }}</span>
                </template>
                <template v-slot:item.type="{ item }">
                  <v-chip
                    :color="getTypeColor(item.type)"
                    text-color="white"
                    small
                  >
                    {{ getTypeText(item.type) }}
                  </v-chip>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
  name: 'MinistrySummaryReport',

  data() {
    return {
      loading: false,
      exporting: false,
      loadingDetails: false,
      search: '',
      monthMenu: false,
      detailsDialog: false,
      selectedMinistry: null,
      ministryDetails: [],

      // Filter data
      filters: {
        reportMonth: null,
        ministryId: null,
      },

      // Options data
      ministries: [],

      // Report data
      reportData: [],
      summaryData: {
        totalBroughtForwardLcy: 0,
        totalCurrentMonthLcy: 0,
        totalSettlementLcy: 0,
        totalBalanceLcy: 0,
      },

      // Chart instance
      ministryChart: null,

      // Enhanced Table headers with currency grouping
      tableHeaders: [
        { text: 'ກະຊວງ', value: 'ministry', width: '200px' },
        { text: 'ສະກຸນເງິນ', value: 'currencyCode', width: '80px' },
        { text: 'ຍອດຍົກມາ', value: 'broughtForwardAmount', width: '130px' },
        { text: 'LCY', value: 'broughtForwardLcy', width: '100px' },
        {
          text: 'ລາຍຈ່າຍເດືອນນີ້',
          value: 'currentMonthAmount',
          width: '130px',
        },
        { text: 'LCY', value: 'currentMonthLcy', width: '100px' },
        { text: 'ຊຳລະເດືອນນີ້', value: 'settlementAmount', width: '130px' },
        { text: 'LCY', value: 'settlementLcy', width: '100px' },
        { text: 'ຍອດສະຫຼຸບ LCY', value: 'balanceLcy', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '120px' },
      ],

      detailHeaders: [
        { text: 'ວັນທີ', value: 'bookingDate' },
        { text: 'ເລກອ້າງອີງ', value: 'referenceNumber' },
        { text: 'ປະເພດ', value: 'type' },
        { text: 'ຈຳນວນເງິນ', value: 'amount' },
        { text: 'LCY', value: 'lcyAmount' },
        { text: 'ຈຸດປະສົງ', value: 'purpose' },
        { text: 'ຜູ້ດຳເນີນການ', value: 'user' },
      ],
    }
  },

  async created() {
    await this.loadInitialData()
    this.setDefaultMonth()
    this.applyFilters()
  },

  mounted() {
    this.$nextTick(() => {
      this.initializeChart()
    })
  },

  beforeDestroy() {
    if (this.ministryChart) {
      this.ministryChart.destroy()
    }
  },

  methods: {
    async loadInitialData() {
      try {
        const response = await this.$axios.get('/api/ministries')
        this.ministries = response.data.data
      } catch (error) {
        console.error('Error loading ministries:', error)
        this.$toast.error('Error loading initial data')
      }
    },

    setDefaultMonth() {
      const now = new Date()
      this.filters.reportMonth = `${now.getFullYear()}-${String(
        now.getMonth() + 1
      ).padStart(2, '0')}`
    },

    async applyFilters() {
      this.loading = true
      try {
        const params = new URLSearchParams()
        Object.keys(this.filters).forEach((key) => {
          if (this.filters[key]) {
            params.append(key, this.filters[key])
          }
        })

        const response = await this.$axios.get(
          `/api/money-advances/ministry-summary?${params}`
        )
        this.reportData = response.data.data
        this.summaryData = response.data.summary

        this.updateChart()
      } catch (error) {
        console.error('Error loading report data:', error)
        this.$toast.error('Error loading report data')
      } finally {
        this.loading = false
      }
    },

    resetFilters() {
      this.filters = {
        reportMonth: null,
        ministryId: null,
      }
      this.setDefaultMonth()
      this.applyFilters()
    },

    initializeChart() {
      const ctx = this.$refs.ministryChart.getContext('2d')
      this.ministryChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [],
          datasets: [
            {
              label: 'ຍອດຍົກມາ',
              data: [],
              backgroundColor: '#01532B',
              borderColor: '#01532B',
              borderWidth: 1,
            },
            {
              label: 'ລາຍຈ່າຍເດືອນນີ້',
              data: [],
              backgroundColor: '#228B22',
              borderColor: '#228B22',
              borderWidth: 1,
            },
            {
              label: 'ຊຳລະເດືອນນີ້',
              data: [],
              backgroundColor: '#32CD32',
              borderColor: '#32CD32',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                padding: 15,
                font: {
                  size: 11,
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return new Intl.NumberFormat('en-US').format(value)
                },
              },
            },
          },
        },
      })
    },

    updateChart() {
      if (!this.ministryChart) return

      const labels = this.reportData.map((item) => item.ministryName)
      const broughtForward = this.reportData.map(
        (item) => item.broughtForwardLcy
      )
      const currentMonth = this.reportData.map((item) => item.currentMonthLcy)
      const settlements = this.reportData.map((item) => item.settlementLcy)

      this.ministryChart.data.labels = labels
      this.ministryChart.data.datasets[0].data = broughtForward
      this.ministryChart.data.datasets[1].data = currentMonth
      this.ministryChart.data.datasets[2].data = settlements
      this.ministryChart.update()
    },

    async viewMinistryDetails(item) {
      this.selectedMinistry = item
      this.loadingDetails = true
      this.detailsDialog = true

      try {
        const params = new URLSearchParams()
        params.append('ministryId', item.ministryId)
        params.append('currencyId', item.currencyId)
        params.append('reportMonth', this.filters.reportMonth)

        const response = await this.$axios.get(
          `/api/money-advances/ministry-details?${params}`
        )
        this.ministryDetails = response.data.data
      } catch (error) {
        console.error('Error loading ministry details:', error)
        this.$toast.error('Error loading ministry details')
      } finally {
        this.loadingDetails = false
      }
    },

    async exportToExcel() {
      this.exporting = true
      try {
        const params = new URLSearchParams()
        Object.keys(this.filters).forEach((key) => {
          if (this.filters[key]) {
            params.append(key, this.filters[key])
          }
        })

        const response = await this.$axios.get(
          `/api/money-advances/ministry-summary/export?${params}`,
          {
            responseType: 'blob',
          }
        )

        const blob = new Blob([response.data])
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `ministry-summary-report-${this.filters.reportMonth}.xlsx`
        link.click()
      } catch (error) {
        console.error('Error exporting report:', error)
        this.$toast.error('Error exporting report')
      } finally {
        this.exporting = false
      }
    },

    printReport() {
      window.print()
    },

    formatCurrency(amount) {
      if (!amount) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
    },

    formatExchangeRate(rate) {
      if (!rate) return '1.0000'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
      }).format(rate)
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('lo-LA')
    },

    getBalanceClass(balance) {
      const amount = parseFloat(balance)
      if (amount > 0) return 'positive-balance'
      if (amount < 0) return 'negative-balance'
      return 'zero-balance'
    },

    getCurrencyColor(currencyCode) {
      const colors = {
        USD: '#01532B',
        LAK: '#01532B',
        THB: '#228B22',
        EUR: '#006400',
        CNY: '#666',
      }
      return colors[currencyCode] || '#01532B'
    },

    getTypeColor(type) {
      switch (type) {
        case 'advance':
          return '#01532B'
        case 'settlement':
          return '#228B22'
        case 'brought_forward':
          return '#006400'
        default:
          return '#01532B'
      }
    },

    getTypeText(type) {
      switch (type) {
        case 'advance':
          return 'ລາຍຈ່າຍ'
        case 'settlement':
          return 'ຊຳລະ'
        case 'brought_forward':
          return 'ຍົກມາ'
        default:
          return type
      }
    },
  },
}
</script>

<style scoped>
/* Custom Color Theme Variables */
.ministry-summary-report {
  padding: 0;
}

/* Header Section */
.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 24px;
  background: #01532b;
  color: white;
  border-radius: 8px;
}

.title-section h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.title-section p {
  margin: 8px 0 0 0;
  opacity: 0.9;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  gap: 16px;
}

.custom-btn {
  color: #01532b !important;
  border: 1px solid white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.custom-btn:hover {
  background-color: white !important;
  color: #01532b !important;
}

/* Filter Card */
.filter-card {
  background: white;
  border-radius: 8px;
}

.filter-title {
  background: #01532b;
  color: white;
  font-weight: 600;
}

.filter-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 20px;
}

.custom-primary-btn {
  background-color: #01532b !important;
  color: white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.custom-primary-btn:hover {
  background-color: #014025 !important;
}

.custom-secondary-btn {
  background-color: #6c757d !important;
  color: white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.custom-secondary-btn:hover {
  background-color: #5a6268 !important;
}

/* Summary Cards */
.summary-cards {
  margin-bottom: 24px;
}

.summary-card {
  height: 140px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.summary-card:hover {
  transform: translateY(-2px);
}

.summary-content {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
}

.summary-icon {
  font-size: 48px;
  opacity: 0.9;
  margin-right: 16px;
}

.summary-details h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.summary-details p {
  margin: 4px 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.summary-details h2 {
  margin: 8px 0 0 0;
  font-size: 24px;
  font-weight: 700;
  color: white;
}

.summary-lcy {
  font-size: 11px;
  opacity: 0.9;
  margin-top: 4px !important;
}

.brought-forward-card {
  background: #01532b;
  color: white;
}

.advance-card {
  background: #01532b;
  color: white;
}

.settlement-card {
  background: #01532b;
  color: white;
}

.balance-card {
  background: #01532b;
  color: white;
}

/* Chart Section */
.chart-card {
  margin-bottom: 24px;
  border-radius: 8px;
}

.chart-title {
  background: #01532b;
  color: white;
  font-weight: 600;
}

.chart-container {
  height: 400px;
  position: relative;
  padding: 20px;
}

/* Table Section */
.table-card {
  margin-bottom: 24px;
  border-radius: 8px;
}

.table-title {
  background: #01532b;
  color: white;
  font-weight: 600;
}

.search-field {
  max-width: 300px;
}

.search-field >>> input {
  color: white !important;
}

.search-field >>> .v-icon {
  color: white !important;
}

.report-table {
  background: white;
}

.report-table >>> thead th {
  background-color: #01532b !important;
  color: white !important;
  font-weight: 600 !important;
  border-bottom: none !important;
}

.report-table >>> tbody tr:hover {
  background-color: rgba(1, 83, 43, 0.1) !important;
}

/* Table Cell Styling */
.ministry-cell {
  display: flex;
  flex-direction: column;
}

.ministry-name {
  font-weight: 600;
  font-size: 14px;
  color: #01532b;
}

.ministry-code {
  font-size: 11px;
  color: #666;
  font-family: 'Courier New', monospace;
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 4px;
  display: inline-block;
  width: fit-content;
}

.amount-breakdown {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.amount-cell {
  font-family: 'Courier New', monospace;
  font-weight: 700;
  font-size: 14px;
}

.exchange-rate {
  font-size: 11px;
  color: #666;
  margin-top: 4px;
  font-style: italic;
}

.lcy-amount {
  color: var(--custom-primary) !important;
}

.advance-amount {
  color: #ff8c00 !important;
}

.settlement-amount {
  color: var(--custom-success) !important;
}

.balance-amount {
  font-weight: 800 !important;
  font-size: 16px !important;
}

.positive-balance {
  color: var(--custom-success) !important;
}

.negative-balance {
  color: var(--custom-error) !important;
}

.zero-balance {
  color: #6c757d !important;
}

.custom-action-btn {
  background-color: var(--custom-primary) !important;
  color: white !important;
  font-weight: 600 !important;
  text-transform: none !important;
  font-size: 12px !important;
  border-radius: 8px !important;
}

.custom-action-btn:hover {
  background-color: var(--custom-success) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(1, 83, 43, 0.3) !important;
}

/* Dialog Styling */
.dialog-header {
  background: linear-gradient(90deg, #01532b, #228b22) !important;
  color: white !important;
  font-weight: 600 !important;
}

.close-btn {
  color: white !important;
}

.section-title {
  color: var(--custom-primary);
  font-weight: 700;
  font-size: 18px;
}

.custom-divider {
  border-color: var(--custom-primary) !important;
  opacity: 0.3 !important;
}

.detail-stat {
  text-align: center;
  padding: 16px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  border-left: 4px solid var(--custom-primary);
  transition: all 0.3s ease;
}

.detail-stat:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(1, 83, 43, 0.2);
}

.detail-stat strong {
  display: block;
  margin-bottom: 12px;
  color: var(--custom-primary);
  font-size: 15px;
  font-weight: 700;
}

.detail-stat p {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Courier New', monospace;
}

.detail-stat small {
  display: block;
  margin-top: 8px;
  font-size: 12px;
  color: #666;
  font-style: italic;
}

.balance-text {
  font-weight: 800 !important;
}

.detail-table >>> thead th {
  background-color: var(--custom-primary) !important;
  color: white !important;
  font-weight: 600 !important;
}

/* Currency and Reference Cell Styling */
.currency-code {
  font-size: 10px;
  background: rgba(1, 83, 43, 0.1);
  padding: 2px 6px;
  border-radius: 10px;
  color: #01532b;
  font-weight: 600;
  margin-left: 6px;
}

.reference-cell {
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: white;
  background: #01532b;
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.date-cell {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  font-weight: 500;
  color: #01532b;
}

/* Loading States */
.v-data-table >>> .v-data-table__progress {
  background: rgba(1, 83, 43, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .report-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    padding: 16px;
  }

  .title-section h1 {
    font-size: 24px;
  }

  .action-buttons {
    flex-wrap: wrap;
    justify-content: center;
  }

  .summary-content {
    flex-direction: column;
    text-align: center;
    padding: 12px;
  }

  .summary-icon {
    margin-right: 0;
    margin-bottom: 8px;
    font-size: 40px;
  }

  .summary-details h2 {
    font-size: 20px;
  }

  .chart-container {
    height: 300px;
    padding: 10px;
  }

  .filter-actions {
    flex-direction: column;
    width: 100%;
  }

  .filter-actions .v-btn {
    width: 100%;
  }

  .amount-breakdown {
    font-size: 12px;
  }

  .detail-stat {
    padding: 10px;
  }

  .detail-stat p {
    font-size: 16px;
  }
}

/* Print Styles */
@media print {
  .action-buttons,
  .filter-card,
  .v-btn {
    display: none !important;
  }

  .summary-cards {
    page-break-inside: avoid;
  }

  .chart-card {
    page-break-inside: avoid;
  }

  .report-header {
    background: #01532b !important;
    color: white !important;
    -webkit-print-color-adjust: exact;
  }
}

/* Custom Scrollbar */
.v-dialog .v-card-text {
  max-height: 70vh;
  overflow-y: auto;
}

.v-dialog .v-card-text::-webkit-scrollbar {
  width: 6px;
}

.v-dialog .v-card-text::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.v-dialog .v-card-text::-webkit-scrollbar-thumb {
  background: #01532b;
  border-radius: 3px;
}

.v-dialog .v-card-text::-webkit-scrollbar-thumb:hover {
  background: #014025;
}
</style>