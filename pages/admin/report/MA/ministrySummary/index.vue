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
        <v-btn color="success" @click="exportToExcel" :loading="exporting">
          <i class="fas fa-file-excel"></i>
          Export Excel
        </v-btn>
        <v-btn color="primary" @click="printReport">
          <i class="fas fa-print"></i>
          Print
        </v-btn>
      </div>
    </div>

    <!-- Filters Card -->
    <v-card class="filter-card mb-4" elevation="2">
      <v-card-title class="filter-title">
        <i class="fas fa-filter"></i>
        ຕົວກອງ (Filters)
      </v-card-title>
      <v-card-text>
        <v-row>
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
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.reportMonth"
                type="month"
                @input="monthMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="4">
            <v-select
              v-model="filters.ministryId"
              :items="ministries"
              item-text="ministryName"
              item-value="id"
              label="ກະຊວງ (Ministry)"
              prepend-icon="mdi-office-building"
              clearable
            ></v-select>
          </v-col>

          <v-col cols="12" md="4">
            <div class="filter-actions">
              <v-btn color="primary" @click="applyFilters" :loading="loading">
                <i class="fas fa-search"></i>
                ຄົ້ນຫາ
              </v-btn>
              <v-btn color="secondary" @click="resetFilters">
                <i class="fas fa-undo"></i>
                ຣີເຊັດ
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Summary Cards -->
    <v-row class="summary-cards mb-4">
      <v-col cols="12" md="3">
        <v-card class="summary-card brought-forward-card" elevation="3">
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
        <v-card class="summary-card advance-card" elevation="3">
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
        <v-card class="summary-card settlement-card" elevation="3">
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
        <v-card class="summary-card balance-card" elevation="3">
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
      <v-card-title>
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
            color="primary"
            @click="viewMinistryDetails(item)"
            class="mr-2"
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
        <v-card-title>
          <i class="fas fa-building"></i>
          ລາຍລະອຽດ - {{ selectedMinistry?.ministryName }} ({{
            selectedMinistry?.currencyCode
          }})
          <v-spacer></v-spacer>
          <v-btn icon @click="detailsDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text v-if="selectedMinistry">
          <!-- Ministry Summary -->
          <v-row class="mb-4">
            <v-col cols="12">
              <h3>ສະຫຼຸບ - {{ selectedMinistry.currencyCode }} (Summary)</h3>
              <v-divider class="mb-3"></v-divider>
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
              <h3>ລາຍການລະອຽດ (Detailed Transactions)</h3>
              <v-divider class="mb-3"></v-divider>
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
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: 'ລາຍຈ່າຍເດືອນນີ້',
              data: [],
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
            {
              label: 'ຊຳລະເດືອນນີ້',
              data: [],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  callback: function (value) {
                    return new Intl.NumberFormat('en-US').format(value)
                  },
                },
              },
            ],
          },
          legend: {
            position: 'bottom',
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
        USD: 'green',
        LAK: 'blue',
        THB: 'orange',
        EUR: 'purple',
        CNY: 'red',
      }
      return colors[currencyCode] || 'grey'
    },

    getTypeColor(type) {
      switch (type) {
        case 'advance':
          return 'blue'
        case 'settlement':
          return 'green'
        case 'brought_forward':
          return 'orange'
        default:
          return 'grey'
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
.ministry-summary-report {
  padding: 0;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
}

.title-section h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.title-section p {
  margin: 5px 0 0 0;
  opacity: 0.9;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.action-buttons .v-btn {
  color: white !important;
}

.filter-card {
  background: white;
}

.filter-title {
  background: #f8f9fa;
  color: #495057;
  font-weight: 600;
}

.filter-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 20px;
}

.summary-cards {
  margin-bottom: 24px;
}

.summary-card {
  height: 140px;
  position: relative;
  overflow: hidden;
}

.summary-content {
  display: flex;
  align-items: center;
  height: 100%;
}

.summary-icon {
  font-size: 48px;
  opacity: 0.8;
  margin-right: 16px;
}

.summary-details h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.summary-details p {
  margin: 4px 0;
  font-size: 12px;
  color: #666;
}

.summary-details h2 {
  margin: 8px 0 0 0;
  font-size: 24px;
  font-weight: 700;
}

.summary-lcy {
  font-size: 11px;
  opacity: 0.8;
  margin-top: 4px !important;
}

.brought-forward-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #333;
}

.advance-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.settlement-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.balance-card {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  color: #333;
}

.chart-card {
  margin-bottom: 24px;
}

.chart-container {
  height: 400px;
  position: relative;
}

.table-card {
  margin-bottom: 24px;
}

.table-title {
  background: #f8f9fa;
  color: #495057;
  font-weight: 600;
}

.search-field {
  max-width: 300px;
}

.report-table {
  background: white;
}

.ministry-cell {
  display: flex;
  flex-direction: column;
}

.ministry-name {
  font-weight: 600;
  font-size: 14px;
}

.ministry-code {
  font-size: 11px;
  color: #666;
  font-family: monospace;
}

.amount-breakdown {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.amount-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.amount-cell {
  font-family: monospace;
  font-weight: 600;
  font-size: 13px;
}

.currency-code {
  font-size: 10px;
  background: #e9ecef;
  padding: 2px 6px;
  border-radius: 12px;
  color: #495057;
}

.exchange-rate {
  font-size: 10px;
  color: #666;
  margin-top: 2px;
}

.lcy-amount {
  color: #6f42c1;
}

.advance-amount {
  color: #667eea;
}

.settlement-amount {
  color: #28a745;
}

.balance-amount {
  font-weight: 700;
}

.positive-balance {
  color: #28a745;
}

.negative-balance {
  color: #dc3545;
}

.zero-balance {
  color: #6c757d;
}

.detail-stat {
  text-align: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
}

.detail-stat strong {
  display: block;
  margin-bottom: 8px;
  color: #495057;
  font-size: 14px;
}

.detail-stat p {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  font-family: monospace;
}

.detail-stat small {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  color: #666;
  font-style: italic;
}

.balance-text {
  font-weight: 700;
}

.detail-table {
  margin-top: 16px;
}

.date-cell {
  font-family: monospace;
  font-size: 13px;
}

.reference-cell {
  font-family: monospace;
  font-size: 12px;
  color: #666;
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 4px;
}

/* Print styles */
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
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .report-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .summary-content {
    flex-direction: column;
    text-align: center;
  }

  .summary-icon {
    margin-right: 0;
    margin-bottom: 8px;
  }

  .chart-container {
    height: 300px;
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
    padding: 8px;
  }

  .detail-stat p {
    font-size: 14px;
  }
}

/* Loading states */
.v-data-table >>> .v-data-table__progress {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Custom scrollbar for dialogs */
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
  background: #c1c1c1;
  border-radius: 3px;
}

.v-dialog .v-card-text::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>