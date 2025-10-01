<template>
  <div class="money-advances-report">
    <!-- Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-money-bill-wave"></i>
          ລາຍງານການຈ່າຍເງິນລ່ວງໜ້າ
        </h1>
        <p class="page-subtitle">Money Advances Report</p>
      </div>
      <div class="action-buttons">
        <v-btn color="#01532B" @click="exportToExcel" :loading="exporting" dark>
          <i class="fas fa-file-excel"></i>
          Export Excel
        </v-btn>
        <v-btn color="#01532B" @click="printReport" dark>
          <i class="fas fa-print"></i>
          Print
        </v-btn>
      </div>
    </div>

    <!-- Updated Filters Card with Date Range -->
    <v-card class="filter-card mb-4" elevation="2">
      <v-card-title class="filter-title d-flex align-center">
        <v-icon class="mr-2">mdi-filter</v-icon>
        ຕົວກອງ (Filters)
      </v-card-title>
      
      <v-card-text class="pa-4">
        <v-row>
          <!-- From Date -->
          <v-col cols="12" md="3">
            <v-text-field
              v-model="filters.fromDate"
              type="date"
              label="ຈາກວັນທີ (From Date)"
              outlined
              dense
              :rules="[rules.required, rules.dateRange]"
              :max="filters.toDate || maxDate"
              @change="applyFilters"
            ></v-text-field>
          </v-col>

          <!-- To Date -->
          <v-col cols="12" md="3">
            <v-text-field
              v-model="filters.toDate"
              type="date"
              label="ເຖິງວັນທີ (To Date)"
              outlined
              dense
              :rules="[rules.required, rules.dateRange]"
              :min="filters.fromDate"
              :max="maxDate"
              @change="applyFilters"
            ></v-text-field>
          </v-col>

          <!-- Bank Account -->
          <v-col cols="12" md="4">
            <v-select
              v-model="filters.bankAccountId"
              :items="bankAccounts"
              item-text="accountName"
              item-value="id"
              label="ບັນຊີທະນາຄານ (Bank Account)"
              clearable
              outlined
              dense
              @change="applyFilters"
            >
              <template v-slot:selection="{ item }">
                <div class="bank-account-selection">
                  <span class="bank-name">{{ item.accountName }}</span>
                  <small>{{ item.bankName ||'' }} - {{ item.accountNumber }}</small>
                </div>
              </template>
              <template v-slot:item="{ item }">
                <div class="bank-account-item">
                  <div class="bank-name">{{ item.accountName }}</div>
                  <div class="bank-details">{{ item.bankName || ''}} - {{ item.accountNumber }}</div>
                </div>
              </template>
            </v-select>
          </v-col>

          <!-- Buttons -->
          <v-col cols="12" md="2">
            <div class="filter-actions">
              <v-btn
                class="custom-primary-bg white--text mb-2"
                block
                outlined
                @click="applyFilters"
                :loading="loading"
                :disabled="!isDateRangeValid"
              >
                <v-icon left color="white">mdi-magnify</v-icon>
                ຄົ້ນຫາ
              </v-btn>
              <v-btn
                class="custom-secondary-btn"
                block
                outlined
                @click="resetFilters"
                color="grey lighten-1"
              >
                <v-icon left>mdi-restore</v-icon>
                ຣີເຊັດ
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!-- Date Range Display -->
        <v-row v-if="filters.fromDate && filters.toDate" class="mt-2">
          <v-col cols="12">
            <v-alert type="info" dense outlined class="date-range-alert">
              <div class="d-flex align-center">
                <v-icon class="mr-2">mdi-calendar-range</v-icon>
                <span>
                  ໄລຍະເວລາທີ່ເລືອກ: {{ formattedFromDate }} ເຖິງ
                  {{ formattedToDate }} ({{ daysBetween }} ວັນ)
                </span>
              </div>
            </v-alert>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Summary Cards -->
    <v-row class="summary-cards mb-4">
      <v-col cols="12" md="3">
        <v-card class="summary-card advance-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-money-bill-wave"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ລວມລາຍຈ່າຍ</h3>
                <p class="summary-subtitle">Total Advances</p>
                <h2 class="summary-amount">{{ formatCurrency(summaryData.totalAdvancesLcy) }}</h2>
                <p class="summary-lcy">LAK</p>
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
                <h3 class="summary-title">ລວມຊຳລະ</h3>
                <p class="summary-subtitle">Total Settlements</p>
                <h2 class="summary-amount">{{ formatCurrency(summaryData.totalSettlementsLcy) }}</h2>
                <p class="summary-lcy">LAK</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card outstanding-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ຄ້າງຊຳລະ</h3>
                <p class="summary-subtitle">Outstanding Balance</p>
                <h2 class="summary-amount">{{ formatCurrency(summaryData.outstandingBalanceLcy) }}</h2>
                <p class="summary-lcy">LAK</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card records-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-file-invoice"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ລວມລາຍການ</h3>
                <p class="summary-subtitle">Total Records</p>
                <h2 class="summary-amount">{{ summaryData.totalRecords || 0 }}</h2>
                <p class="summary-lcy">Records</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Additional Summary Cards -->
    <v-row class="additional-summary mb-4" v-if="summaryData.fullySettledCount">
      <v-col cols="12" md="3">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number">{{ summaryData.fullySettledCount || 0 }}</h3>
            <p class="stats-label">ຊຳລະສົມບູນ<br>Fully Settled</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number">{{ summaryData.partiallySettledCount || 0 }}</h3>
            <p class="stats-label">ຊຳລະບາງສ່ວນ<br>Partially Settled</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number">{{ summaryData.unsettledCount || 0 }}</h3>
            <p class="stats-label">ຍັງບໍ່ໄດ້ຊຳລະ<br>Unsettled</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number">{{ summaryData.averageSettlementPercentage || 0 }}%</h3>
            <p class="stats-label">ສະເລ່ຍຊຳລະ<br>Avg Settlement</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Detailed Report Table -->
    <v-card class="table-card" elevation="2">
      <v-card-title class="table-title">
        <i class="fas fa-table"></i>
        ລາຍລະອຽດການຈ່າຍເງິນລ່ວງໜ້າ (Money Advances Details)
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຄົ້ນຫາ..."
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
          itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:'
        }"
      >
        <!-- Booking Date -->
        <template v-slot:item.bookingDate="{ item }">
          <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
        </template>

        <!-- Ministry -->
        <template v-slot:item.ministry="{ item }">
          <div class="ministry-cell">
            <span class="ministry-name">{{ item.ministry?.ministryName || ''}}</span>
            <span class="ministry-code">{{ item.ministry?.ministryCode || ''}}</span>
          </div>
        </template>

        <!-- Bank Account -->
        <template v-slot:item.bankAccount="{ item }">
          <div class="bank-account-cell">
            <span class="bank-account-name">{{ item.bankAccount?.accountName || ''}}</span>
            <span class="bank-account-number">{{ item.bankAccount?.accountNumber || ''}}</span>
            <span class="bank-name">{{ item.bankAccount?.bankName || '' }}</span>
          </div>
        </template>

        <!-- Currency -->
        <template v-slot:item.currencyCode="{ item }">
          <v-chip small :color="getCurrencyColor(item.currencyCode)" text-color="white">
            {{ item.currencyCode }}
          </v-chip>
        </template>

        <!-- Amount -->
        <template v-slot:item.amount="{ item }">
          <div class="amount-breakdown">
            <span class="amount-cell">{{ formatCurrency(item.amount) }}</span>
            <div class="exchange-rate">
              Rate: {{ formatExchangeRate(item.exchangeRate) }}
            </div>
          </div>
        </template>

        <!-- LCY Equivalent -->
        <template v-slot:item.lcyEquivalent="{ item }">
          <span class="amount-cell lcy-amount">
            {{ formatCurrency(item.lcyEquivalent) }}
          </span>
        </template>

        <!-- Settlement Amount -->
        <template v-slot:item.settlementAmount="{ item }">
          <span class="amount-cell settlement-amount">
            {{ formatCurrency(item.settlementAmount) }}
          </span>
        </template>

        <!-- Outstanding Amount -->
        <template v-slot:item.outstandingAmount="{ item }">
          <span
            class="amount-cell"
            :class="item.outstandingAmount > 0 ? 'outstanding-amount' : 'settled-amount'"
          >
            {{ formatCurrency(item.outstandingAmount) }}
          </span>
        </template>

        <!-- Settlement Status -->
        <template v-slot:item.status="{ item }">
          <v-chip
            small
            :color="getStatusColor(item.status)"
            text-color="white"
          >
            {{ getStatusText(item.status) }}
          </v-chip>
        </template>

        <!-- Settlement Percentage -->
        <template v-slot:item.settlementPercentage="{ item }">
          <v-progress-linear
            :value="parseFloat(item.settlementPercentage)"
            :color="getProgressColor(item.settlementPercentage)"
            height="20"
            rounded
          >
            <span class="progress-text">{{ item.settlementPercentage }}%</span>
          </v-progress-linear>
        </template>

        <!-- Actions -->
        <template v-slot:item.actions="{ item }">
          <v-btn
            small
            color="#01532B"
            @click="viewAdvanceDetails(item)"
            dark
          >
            <i class="fas fa-eye"></i>
            ລາຍລະອຽດ
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Advance Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="1000px">
      <v-card>
        <v-card-title class="dialog-title">
          <i class="fas fa-money-bill-wave"></i>
          ລາຍລະອຽດການຈ່າຍເງິນ #{{ selectedAdvance?.id }}
          <v-spacer></v-spacer>
          <v-btn icon @click="detailsDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text v-if="selectedAdvance">
          <!-- Advance Summary -->
          <v-row class="mb-4">
            <v-col cols="12">
              <h3 class="section-title">ຂໍ້ມູນການຈ່າຍເງິນ (Payment Information)</h3>
              <v-divider class="mb-3 custom-divider"></v-divider>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ວັນທີຈ່າຍ:</strong>
                <p>{{ formatDate(selectedAdvance.bookingDate) }}</p>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ຈຳນວນເງິນ:</strong>
                <p>
                  {{ formatCurrency(selectedAdvance.amount) }}
                  {{ selectedAdvance.currencyCode }}
                </p>
                <small>LCY: {{ formatCurrency(selectedAdvance.lcyEquivalent) }}</small>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ສະຖານະ:</strong>
                <p>{{ getStatusText(selectedAdvance.status) }}</p>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ຄ້າງຊຳລະ:</strong>
                <p class="outstanding-text">
                  {{ formatCurrency(selectedAdvance.outstandingAmount) }} {{ selectedAdvance.currencyCode }}
                </p>
              </div>
            </v-col>
          </v-row>

          <!-- Ministry & Bank Info -->
          <v-row class="mb-4">
            <v-col cols="12">
              <h3 class="section-title">ຂໍ້ມູນທົ່ວໄປ (General Information)</h3>
              <v-divider class="mb-3 custom-divider"></v-divider>
            </v-col>
            <v-col cols="6">
              <div class="detail-item">
                <strong>ກະຊວງ:</strong> {{ selectedAdvance.ministry?.ministryName ||'' }}
              </div>
              <div class="detail-item">
                <strong>ລະຫັດກະຊວງ:</strong> {{ selectedAdvance.ministry?.ministryCode ||''}}
              </div>
              <div class="detail-item">
                <strong>ຈຸດປະສົງ:</strong> {{ selectedAdvance.purpose }}
              </div>
            </v-col>
            <v-col cols="6">
              <div class="detail-item">
                <strong>ບັນຊີທະນາຄານ:</strong> {{ selectedAdvance.bankAccount.accountName }}
              </div>
              <div class="detail-item">
                <strong>ເລກບັນຊີ:</strong> {{ selectedAdvance.bankAccount.accountNumber }}
              </div>
              <div class="detail-item">
                <strong>ທະນາຄານ:</strong> {{ selectedAdvance.bankAccount.bankName }}
              </div>
            </v-col>
          </v-row>

          <!-- Settlement Details -->
          <v-row v-if="selectedAdvance.settlementLine && selectedAdvance.settlementLine.length > 0">
            <v-col cols="12">
              <h3 class="section-title">ລາຍການຊຳລະ (Settlement Details)</h3>
              <v-divider class="mb-3 custom-divider"></v-divider>
              <v-data-table
                :headers="settlementHeaders"
                :items="selectedAdvance.settlementLine"
                hide-default-footer
                class="detail-table"
              >
                <template v-slot:item.bookingDate="{ item }">
                  <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
                </template>
                <template v-slot:item.amount="{ item }">
                  <span class="amount-cell">{{ formatCurrency(item.amount) }}</span>
                </template>
                <template v-slot:item.method="{ item }">
                  <v-chip small color="#01532B" text-color="white">
                    {{ item.method }}
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
export default {
  name: 'MoneyAdvancesReport',
  
  data() {
    return {
      loading: false,
      exporting: false,
      search: '',
      detailsDialog: false,
      selectedAdvance: null,
      
      // Updated filter data for date range
      filters: {
        fromDate: null,
        toDate: null,
        bankAccountId: null
      },

      // Validation rules
      rules: {
        required: (value) => !!value || 'ກະລຸນາເລືອກວັນທີ',
        dateRange: () => {
          if (!this.filters.fromDate || !this.filters.toDate) return true
          return (
            new Date(this.filters.fromDate) <= new Date(this.filters.toDate) ||
            'ວັນທີເລີ່ມຕົ້ນຕ້ອງນ້ອຍກວ່າວັນທີສິ້ນສຸດ'
          )
        },
      },
      
      // Options data
      bankAccounts: [],
      
      // Report data
      reportData: [],
      summaryData: {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        totalAdvancesLcy: 0,
        totalSettlementsLcy: 0,
        outstandingBalanceLcy: 0,
        totalRecords: 0,
        fullySettledCount: 0,
        partiallySettledCount: 0,
        unsettledCount: 0,
        overdueCount: 0,
        averageSettlementPercentage: "0.00"
      },
      
      // Updated table headers to match API response
      tableHeaders: [
        { text: 'ວັນທີຈ່າຍ', value: 'bookingDate', width: '100px' },
        { text: 'ກະຊວງ', value: 'ministry', width: '180px' },
        { text: 'ບັນຊີທະນາຄານ', value: 'bankAccount', width: '180px' },
        { text: 'ສະກຸນເງິນ', value: 'currencyCode', width: '80px' },
        { text: 'ຈຳນວນເງິນ', value: 'amount', width: '120px' },
        { text: 'LCY', value: 'lcyEquivalent', width: '120px' },
        { text: 'ຊຳລະແລ້ວ', value: 'settlementAmount', width: '120px' },
        { text: 'ຄ້າງຊຳລະ', value: 'outstandingAmount', width: '120px' },
        { text: 'ສະຖານະ', value: 'status', width: '100px' },
        { text: 'ຊຳລະ %', value: 'settlementPercentage', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '100px' }
      ],
      
      settlementHeaders: [
        { text: 'ວັນທີຊຳລະ', value: 'bookingDate' },
        { text: 'ຈຳນວນ', value: 'amount' },
        { text: 'ວິທີການ', value: 'method' },
        { text: 'ໝາຍເຫດ', value: 'notes' }
      ]
    }
  },

  computed: {
    formattedFromDate() {
      return this.filters.fromDate
        ? this.formatDisplayDate(this.filters.fromDate)
        : ''
    },

    formattedToDate() {
      return this.filters.toDate
        ? this.formatDisplayDate(this.filters.toDate)
        : ''
    },

    maxDate() {
      return new Date().toISOString().substr(0, 10)
    },

    isDateRangeValid() {
      if (!this.filters.fromDate || !this.filters.toDate) return false
      return new Date(this.filters.fromDate) <= new Date(this.filters.toDate)
    },

    daysBetween() {
      if (!this.filters.fromDate || !this.filters.toDate) return 0
      const from = new Date(this.filters.fromDate)
      const to = new Date(this.filters.toDate)
      const timeDiff = to.getTime() - from.getTime()
      return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1
    },
  },
  
  async created() {
    await this.loadInitialData()
    this.setDefaultDateRange()
    this.applyFilters()
  },
  
  methods: {
    async loadInitialData() {
      try {
        const response = await this.$axios.get('/api/bank_account/find')
        this.bankAccounts = response.data.data || response.data
      } catch (error) {
        console.error('Error loading bank accounts:', error)
        this.$toast.error('Error loading initial data')
      }
    },
    
    setDefaultDateRange() {
      const now = new Date()
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)

      this.filters.fromDate = firstDayOfMonth.toISOString().substr(0, 10)
      this.filters.toDate = lastDayOfMonth.toISOString().substr(0, 10)
    },
    
    async applyFilters() {
      if (!this.filters.fromDate || !this.filters.toDate) {
        this.$toast.warning('ກະລຸນາເລືອກໄລຍະເວລາ')
        return
      }

      if (!this.isDateRangeValid) {
        this.$toast.warning('ໄລຍະເວລາບໍ່ຖືກຕ້ອງ')
        return
      }

      this.loading = true
      try {
        const params = new URLSearchParams()
        params.append('fromDate', this.filters.fromDate)
        params.append('toDate', this.filters.toDate)
        
        if (this.filters.bankAccountId) {
          params.append('bankAccountId', this.filters.bankAccountId)
        }
        
        console.log('Fetching data with params:', params.toString())
        
        // Updated to use the correct API endpoint
        const response = await this.$axios.get(`/api/money-advances/report?${params}`)
        
        if (response.data && response.data.success && response.data.data) {
          this.reportData = response.data.data
          this.summaryData = response.data.summary || this.getDefaultSummary()
          console.info(`Filtered data ${JSON.stringify(this.reportData) }`)
          console.log('Data loaded successfully:', this.reportData.length, 'records')
        } else {
          throw new Error('Invalid response format')
        }

        
        
      } catch (error) {
        console.error('Error loading report data:', error)
        this.reportData = []
        this.summaryData = this.getDefaultSummary()
        
        if (error.response) {
          const status = error.response.status
          const message = error.response.data?.message || 'Server error'
          this.$toast.error(`Error ${status}: ${message}`)
        } else if (error.request) {
          this.$toast.error('Network error. Please check your connection.')
        } else {
          this.$toast.error('Error loading report data')
        }
      } finally {
        this.loading = false
      }
    },
    
    resetFilters() {
      this.filters = {
        fromDate: null,
        toDate: null,
        bankAccountId: null
      }
      this.setDefaultDateRange()
      this.applyFilters()
    },

    getDefaultSummary() {
      return {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        totalAdvancesLcy: 0,
        totalSettlementsLcy: 0,
        outstandingBalanceLcy: 0,
        totalRecords: 0,
        fullySettledCount: 0,
        partiallySettledCount: 0,
        unsettledCount: 0,
        overdueCount: 0,
        averageSettlementPercentage: "0.00"
      }
    },
    
    viewAdvanceDetails(advance) {
      this.selectedAdvance = advance
      this.detailsDialog = true
    },
    
    async exportToExcel() {
      this.exporting = true
      try {
        const params = new URLSearchParams()
        Object.keys(this.filters).forEach(key => {
          if (this.filters[key]) {
            params.append(key, this.filters[key])
          }
        })
        
        const response = await this.$axios.get(`/api/money-advances/report/export?${params}`, {
          responseType: 'blob'
        })
        
        const blob = new Blob([response.data])
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `money-advances-report-${this.filters.fromDate}-to-${this.filters.toDate}.xlsx`
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

    formatDisplayDate(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    },
    
    formatCurrency(amount) {
      if (!amount) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    },
    
    formatExchangeRate(rate) {
      if (!rate) return '1.0000'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
      }).format(rate)
    },
    
    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-GB')
    },
    
    getCurrencyColor(currencyCode) {
      const colors = {
        'USD': '#01532B',
        'LAK': '#01532B', 
        'THB': '#F59E0B',
        'EUR': '#8B5CF6',
        'CNY': '#EF4444'
      }
      return colors[currencyCode] || '#6B7280'
    },
    
    getStatusColor(status) {
      switch (status) {
        case 'settled':
          return '#28a745'
        case 'pending':
          return '#ffc107'
        case 'approved':
          return '#17a2b8'
        case 'rejected':
          return '#dc3545'
        default:
          return '#6c757d'
      }
    },

    getStatusText(status) {
      switch (status) {
        case 'settled':
          return 'ຊຳລະແລ້ວ'
        case 'pending':
          return 'ລໍຖ້າ'
        case 'approved':
          return 'ອະນຸມັດ'
        case 'rejected':
          return 'ປະຕິເສດ'
        default:
          return status
      }
    },

    getProgressColor(percentage) {
      const percent = parseFloat(percentage)
      if (percent === 100) return '#28a745'
      if (percent >= 50) return '#ffc107'
      return '#dc3545'
    }
  }
}
</script>

<style scoped>
.money-advances-report {
  padding: 0;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 20px;
  background: linear-gradient(135deg, #01532B 0%, #0D4F3C 50%, #1A5D4A 100%);
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(1, 83, 43, 0.3);
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

.filter-card {
  background: white;
  border-radius: 8px;
}

.filter-title {
  background: #01532b;
  color: white;
  font-weight: 600;
}

.custom-primary-bg {
  background-color: #01532b !important;
}

.custom-secondary-btn {
  background-color: #6c757d !important;
  color: white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.filter-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.date-range-alert {
  background-color: rgba(1, 83, 43, 0.1) !important;
  border-color: #01532b !important;
  color: #01532b !important;
}

.date-range-alert >>> .v-icon {
  color: #01532b !important;
}

.bank-account-selection {
  display: flex;
  flex-direction: column;
}

.bank-account-selection .bank-name {
  font-weight: 600;
  font-size: 14px;
  color: #01532B;
}

.bank-account-selection small {
  color: #666;
  font-size: 11px;
}

.bank-account-item {
  padding: 8px 0;
}

.bank-account-item .bank-name {
  font-weight: 600;
  font-size: 14px;
  color: #01532B;
}

.bank-account-item .bank-details {
  font-size: 12px;
  color: #666;
  margin-top: 2px;
}

.summary-cards {
  margin-bottom: 24px;
}

.summary-card {
  height: 140px;
  position: relative;
  overflow: hidden;
  border-top: 3px solid #01532B;
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
  color: #01532B;
}

.summary-details h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #01532B;
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
  color: #01532B;
}

.summary-lcy {
  font-size: 11px;
  opacity: 0.8;
  margin-top: 4px !important;
  color: #01532B;
}

.advance-card {
  background: linear-gradient(135deg, #01532B 0%, #0D4F3C 100%);
  color: white;
}

.advance-card .summary-icon,
.advance-card .summary-details h3,
.advance-card .summary-details h2,
.advance-card .summary-lcy {
  color: white !important;
}

.settlement-card {
  background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%);
}

.outstanding-card {
  background: linear-gradient(135deg, #FEF2F2 0%, #FECACA 100%);
}

.records-card {
  background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%);
}

.additional-summary {
  margin-bottom: 24px;
}

.stats-card {
  height: 100px;
  border-left: 4px solid #01532B;
}

.stats-number {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  color: #01532B;
}

.stats-label {
  font-size: 11px;
  margin: 4px 0 0 0;
  line-height: 1.2;
  color: #6B7280;
}

.table-card {
  margin-bottom: 24px;
  border-left: 4px solid #01532B;
}

.table-title {
  background: linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%);
  color: #01532B;
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
  color: #01532B;
}

.ministry-code {
  font-size: 11px;
  color: #666;
  font-family: monospace;
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 4px;
  display: inline-block;
  width: fit-content;
}

.bank-account-cell {
  display: flex;
  flex-direction: column;
}

.bank-account-name {
  font-weight: 600;
  font-size: 14px;
  color: #01532B;
}

.bank-account-number {
  font-size: 11px;
  color: #666;
  font-family: monospace;
}

.bank-name {
  font-size: 12px;
  color: #999;
  font-style: italic;
}

.amount-breakdown {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.amount-cell {
  font-family: monospace;
  font-weight: 600;
  font-size: 13px;
}

.exchange-rate {
  font-size: 10px;
  color: #666;
  margin-top: 2px;
}

.lcy-amount {
  color: #01532B;
}

.settlement-amount {
  color: #059669;
}

.outstanding-amount {
  color: #dc3545;
}

.settled-amount {
  color: #28a745;
}

.progress-text {
  font-size: 12px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.dialog-title {
  background: linear-gradient(90deg, #01532B 0%, #0D4F3C 100%);
  color: white;
  font-weight: 600;
}

.section-title {
  color: #01532B;
  font-weight: 600;
  margin-bottom: 8px;
}

.custom-divider {
  border-color: #01532B !important;
  border-width: 2px !important;
}

.detail-stat {
  text-align: center;
  padding: 12px;
  background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%);
  border-radius: 8px;
  border: 1px solid #BBF7D0;
}

.detail-stat strong {
  display: block;
  margin-bottom: 8px;
  color: #01532B;
  font-size: 14px;
}

.detail-stat p {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  font-family: monospace;
  color: #01532B;
}

.detail-stat small {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  color: #666;
  font-style: italic;
}

.detail-item {
  margin-bottom: 12px;
  font-size: 14px;
}

.detail-item strong {
  color: #01532B;
}

.detail-table {
  margin-top: 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
}

.date-cell {
  font-family: monospace;
  font-size: 13px;
}

/* Print styles */
@media print {
  .action-buttons,
  .filter-card,
  .v-btn {
    display: none !important;
  }
  
  .summary-cards,
  .additional-summary {
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
  
  .filter-actions {
    margin-top: 16px;
  }
  
  .filter-actions .v-btn {
    width: 100%;
  }
  
  .stats-card {
    height: 80px;
  }
  
  .stats-number {
    font-size: 18px;
  }
  
  .stats-label {
    font-size: 10px;
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
</style>