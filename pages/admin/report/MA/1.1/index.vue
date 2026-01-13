<template>
  <div>
    <!-- Header Section -->
    <v-card class="header-card mb-6" elevation="4">
      <v-card-title class="primary white--text">
        <div class="d-flex justify-space-between align-center w-100">
          <div>
            <h2 class="font-weight-bold mb-1">
              <v-icon large left color="white">mdi-chart-line</v-icon>
              ລາຍງານເບີກຈ່າຍ
            </h2>
            <p class="mb-0 opacity-90">
              {{ formatPeriod() }}
            </p>
          </div>
          
          <div class="d-flex gap-3">
            <v-btn
              color="white"
              outlined
              @click="exportToExcel"
              :disabled="loading"
              large
            >
              <v-icon left>mdi-file-excel</v-icon>
              ສົ່ງອອກ Excel
            </v-btn>
            
            <v-btn
              color="white"
              outlined
              @click="printReport"
              large
            >
              <v-icon left>mdi-printer</v-icon>
              ພິມ
            </v-btn>
          </div>
        </div>
      </v-card-title>
    </v-card>

    <!-- Filters Section -->
    <v-card class="filters-card mb-6" elevation="2">
      <v-card-title class="secondary white--text">
        <v-icon left color="white">mdi-filter</v-icon>
        ຕົວກອງ
      </v-card-title>
      
      <v-card-text class="pa-6">
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="filters.month"
              :items="months"
              item-text="text"
              item-value="value"
              label="ເດືອນ"
              outlined
              dense
              @change="applyFilters"
            >
              <template v-slot:prepend-inner>
                <v-icon color="primary">mdi-calendar-month</v-icon>
              </template>
            </v-select>
          </v-col>
          
          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="filters.year"
              :items="years"
              label="ປີ"
              outlined
              dense
              @change="applyFilters"
            >
              <template v-slot:prepend-inner>
                <v-icon color="primary">mdi-calendar</v-icon>
              </template>
            </v-select>
          </v-col>
          
          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="filters.ministryId"
              :items="ministryOptions"
              item-text="text"
              item-value="value"
              label="ກະຊວງ"
              outlined
              dense
              clearable
              @change="applyFilters"
            >
              <template v-slot:prepend-inner>
                <v-icon color="primary">mdi-office-building</v-icon>
              </template>
            </v-select>
          </v-col>
          
          <v-col cols="12" sm="6" md="2">
            <v-select
              v-model="filters.currencyId"
              :items="currencyOptions"
              item-text="text"
              item-value="value"
              label="ສະກຸນເງິນ"
              outlined
              dense
              clearable
              @change="applyFilters"
            >
              <template v-slot:prepend-inner>
                <v-icon color="primary">mdi-currency-usd</v-icon>
              </template>
            </v-select>
          </v-col>
          
          <v-col cols="12" sm="6" md="1" class="d-flex align-center">
            <v-btn
              color="primary"
              @click="resetFilters"
              icon
              large
            >
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Currency Summary Cards -->
    <div v-if="currencySummaries.length" class="mb-6">
      <v-card elevation="2">
        <v-card-title class="lightprimary white--text">
          <v-icon left color="white">mdi-chart-pie</v-icon>
          ສະຫຼຸບຕາມສະກຸນເງິນ
        </v-card-title>
        
        <v-card-text class="pa-6">
          <v-row>
            <v-col
              v-for="curr in currencySummaries"
              :key="curr.currencyCode"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card class="summary-card" elevation="4" outlined>
                <v-card-title class="pb-2">
                  <div class="d-flex justify-space-between align-center w-100">
                    <v-chip color="primary" dark>
                      {{ curr.currencyCode }}
                    </v-chip>
                    <span class="text-h5 font-weight-bold primary--text">
                      {{ formatAmount(curr.endingBalance) }}
                    </span>
                  </div>
                </v-card-title>
                
                <v-card-text>
                  <div class="summary-details">
                    <div class="detail-row">
                      <span>ຍອດຍົກມາ:</span>
                      <span class="font-weight-medium">{{ formatAmount(curr.balanceForward) }}</span>
                    </div>
                    <div class="detail-row advance">
                      <span>+ ລາຍຈ່າຍ:</span>
                      <span class="font-weight-medium">{{ formatAmount(curr.newAdvances) }}</span>
                    </div>
                    <div class="detail-row settlement">
                      <span>- ການຊຳລະ:</span>
                      <span class="font-weight-medium">{{ formatAmount(curr.newSettlements) }}</span>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>

    <!-- Data Table -->
    <v-card elevation="3">
      <v-card-title class="primary white--text">
        <div class="d-flex justify-space-between align-center w-100">
          <div class="d-flex align-center">
            <v-icon left color="white">mdi-table</v-icon>
            ລາຍງານລະອຽດ
          </div>
          
          <v-text-field
            v-model="search"
            label="ຄົ້ນຫາ..."
            prepend-inner-icon="mdi-magnify"
            hide-details
            single-line
            outlined
            dense
            dark
            class="search-field"
            style="max-width: 300px;"
          />
        </div>
      </v-card-title>

      <!-- Loading State -->
      <div v-if="loading" class="text-center pa-12">
        <v-progress-circular
          :size="70"
          :width="7"
          color="primary"
          indeterminate
          class="mb-4"
        />
        <h3 class="text-h6 primary--text">ກຳລັງໂຫຼດຂໍ້ມູນ...</h3>
      </div>

      <!-- Data Table -->
      <v-data-table
        v-else
        :headers="tableHeaders"
        :items="filteredData"
        :search="search"
        class="elevation-0"
        hide-default-footer
        :items-per-page="-1"
      >
        <!-- Ministry Column -->
        <template v-slot:item.ministry="{ item }">
          <div class="ministry-cell">
            <div class="font-weight-bold text-body-1">{{ item.ministryCode }}</div>
            <div class="text--secondary">{{ item.ministryName }}</div>
          </div>
        </template>

        <!-- Currency Column -->
        <template v-slot:item.currencyCode="{ item }">
          <v-chip color="secondary" outlined small>
            {{ item.currencyCode }}
          </v-chip>
        </template>

        <!-- Balance Forward Column -->
        <template v-slot:item.balanceForward="{ item }">
          <div class="amount-cell">
            {{ formatAmount(item.balanceForward) }}
          </div>
        </template>

        <!-- New Advances Column -->
        <template v-slot:item.newAdvances="{ item }">
          <div class="amount-cell advance">
            {{ formatAmount(item.newAdvances) }}
          </div>
        </template>

        <!-- Settlements Column -->
        <template v-slot:item.newSettlements="{ item }">
          <div class="amount-cell settlement">
            {{ formatAmount(item.newSettlements) }}
          </div>
        </template>

        <!-- Ending Balance Column -->
        <template v-slot:item.endingBalance="{ item }">
          <div class="amount-cell ending" :class="getBalanceClass(item.endingBalance)">
            <v-chip
              :color="getBalanceColor(item.endingBalance)"
              :outlined="item.endingBalance === 0"
              small
            >
              {{ formatAmount(item.endingBalance) }}
            </v-chip>
          </div>
        </template>

        <!-- Actions Column -->
        <template v-slot:item.actions="{ item }">
          <v-btn
            color="primary"
            icon
            @click="viewDetails(item)"
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </template>

        <!-- Footer Totals -->
        <template v-slot:body.append v-if="filteredData.length">
          <tr class="total-row">
            <td colspan="2" class="font-weight-bold primary--text">
              ລວມທັງໝົດ
            </td>
            <td class="amount-cell font-weight-bold">{{ formatAmount(totals.balanceForward) }}</td>
            <td class="amount-cell font-weight-bold">{{ formatAmount(totals.newAdvances) }}</td>
            <td class="amount-cell font-weight-bold">{{ formatAmount(totals.newSettlements) }}</td>
            <td class="amount-cell font-weight-bold">
              <v-chip color="primary" dark>
                {{ formatAmount(totals.endingBalance) }}
              </v-chip>
            </td>
            <td></td>
          </tr>
        </template>
      </v-data-table>

      <!-- No Data State -->
      <div v-if="!loading && !filteredData.length" class="text-center pa-12">
        <v-icon size="64" color="grey lighten-2">mdi-inbox-outline</v-icon>
        <h3 class="text-h6 mt-4 grey--text">ບໍ່ມີຂໍ້ມູນ</h3>
        <p class="grey--text">ກະລຸນາເລືອກຕົວກອງແລ້ວລອງໃໝ່</p>
      </div>
    </v-card>

    <!-- Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="600" persistent>
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left color="white">mdi-information</v-icon>
          ລາຍລະອຽດຍອດເງິນ
          <v-spacer />
          <v-btn icon color="white" @click="detailsDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text v-if="selectedItem" class="pa-6">
          <v-row>
            <v-col cols="12">
              <div class="detail-grid">
                <v-card flat outlined class="pa-4 mb-4">
                  <h4 class="text-h6 primary--text mb-3">ຂໍ້ມູນກະຊວງ</h4>
                  <div class="detail-item">
                    <span class="font-weight-medium">ກະຊວງ:</span>
                    <span>{{ selectedItem.ministryCode }} - {{ selectedItem.ministryName }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="font-weight-medium">ສະກຸນເງິນ:</span>
                    <v-chip color="secondary" outlined small>
                      {{ selectedItem.currencyCode }}
                    </v-chip>
                  </div>
                </v-card>

                <v-card flat outlined class="pa-4 mb-4">
                  <h4 class="text-h6 primary--text mb-3">ລາຍລະອຽດຍອດເງິນ</h4>
                  <div class="detail-item">
                    <span class="">ຍອດຍົກມາ:</span>
                    <span class="amount">{{ formatAmount(selectedItem.balanceForward) }}</span>
                  </div>
                  <div class="detail-item advance">
                    <span class="">ລາຍຈ່າຍ:</span>
                    <span class="amount">{{ formatAmount(selectedItem.newAdvances) }}</span>
                  </div>
                  <div class="detail-item settlement">
                    <span class="">ການຊຳລະ:</span>
                    <span class="amount">{{ formatAmount(selectedItem.newSettlements) }}</span>
                  </div>
                  <v-divider class="my-3" />
                  <div class="detail-item ending">
                    <span class="font-weight-bold text-h6">ຍອດເຫຼືອ:</span>
                    <span class="amount text-h6 font-weight-bold" :class="getBalanceClass(selectedItem.endingBalance)">
                      {{ formatAmount(selectedItem.endingBalance) }}
                    </span>
                  </div>
                </v-card>

                <v-card flat color="grey lighten-4" class="pa-4">
                  <h4 class="text-h6 primary--text mb-3">ການຄິດໄລ່</h4>
                  <div class="calculation-formula text-body-1 font-weight-medium">
                    {{ formatAmount(selectedItem.balanceForward) }} + 
                    {{ formatAmount(selectedItem.newAdvances) }} - 
                    {{ formatAmount(selectedItem.newSettlements) }} = 
                    <strong class="primary--text">{{ formatAmount(selectedItem.endingBalance) }}</strong>
                  </div>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'BalanceReportLao',
  
  data() {
    return {
      loading: false,
      search: '',
      detailsDialog: false,
      selectedItem: null,
      
      filters: {
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        ministryId: '',
        currencyId: ''
      },
      
      months: [
        { text: 'ມັງກອນ', value: 1 },
        { text: 'ກຸມພາ', value: 2 },
        { text: 'ມີນາ', value: 3 },
        { text: 'ເມສາ', value: 4 },
        { text: 'ພຶດສະພາ', value: 5 },
        { text: 'ມິຖຸນາ', value: 6 },
        { text: 'ກໍລະກົດ', value: 7 },
        { text: 'ສິງຫາ', value: 8 },
        { text: 'ກັນຍາ', value: 9 },
        { text: 'ຕຸລາ', value: 10 },
        { text: 'ພະຈິກ', value: 11 },
        { text: 'ທັນວາ', value: 12 }
      ],
      
      years: [],
      ministries: [],
      currencies: [],
      reportData: [],
      currencySummaries: []
    }
  },
  
  computed: {
    tableHeaders() {
      return [
        {
          text: 'ກະຊວງ',
          value: 'ministry',
          sortable: true,
          width: 250
        },
        {
          text: 'ສະກຸນເງິນ',
          value: 'currencyCode',
          sortable: true,
          width: 120,
          align: 'center'
        },
        {
          text: 'ຍອດຍົກມາ',
          value: 'balanceForward',
          sortable: true,
          width: 150,
          align: 'right'
        },
        {
          text: 'ລາຍຈ່າຍໃໝ່',
          value: 'newAdvances',
          sortable: true,
          width: 150,
          align: 'right'
        },
        {
          text: 'ການຊຳລະ',
          value: 'newSettlements',
          sortable: true,
          width: 150,
          align: 'right'
        },
        {
          text: 'ຍອດເຫຼືອ',
          value: 'endingBalance',
          sortable: true,
          width: 150,
          align: 'right'
        },
        {
          text: 'ການດຳເນີນການ',
          value: 'actions',
          sortable: false,
          width: 100,
          align: 'center'
        }
      ]
    },

    ministryOptions() {
      return [
        { text: 'ກະຊວງທັງໝົດ', value: '' },
        ...this.ministries.map(ministry => ({
          text: `${ministry.ministryCode} - ${ministry.ministryName}`,
          value: ministry.id
        }))
      ]
    },

    currencyOptions() {
      return [
        { text: 'ສະກຸນເງິນທັງໝົດ', value: '' },
        ...this.currencies.map(currency => ({
          text: currency.code,
          value: currency.id
        }))
      ]
    },

    reportDataWithBalance() {
      return this.reportData.map(item => ({
        ...item,
        endingBalance: parseFloat(item.balanceForward || 0) + 
                      parseFloat(item.newAdvances || 0) - 
                      parseFloat(item.newSettlements || 0)
      }))
    },

    filteredData() {
      if (!this.search) return this.reportDataWithBalance
      
      return this.reportDataWithBalance.filter(item => 
        item.ministryName?.toLowerCase().includes(this.search.toLowerCase()) ||
        item.ministryCode?.toLowerCase().includes(this.search.toLowerCase()) ||
        item.currencyCode?.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    
    totals() {
      return this.filteredData.reduce((acc, item) => {
        acc.balanceForward += parseFloat(item.balanceForward || 0)
        acc.newAdvances += parseFloat(item.newAdvances || 0)
        acc.newSettlements += parseFloat(item.newSettlements || 0)
        acc.endingBalance += parseFloat(item.endingBalance || 0)
        return acc
      }, {
        balanceForward: 0,
        newAdvances: 0,
        newSettlements: 0,
        endingBalance: 0
      })
    }
  },
  
  async created() {
    this.initializeYears()
    await this.loadInitialData()
    await this.applyFilters()
  },
  
  methods: {
    initializeYears() {
      const currentYear = new Date().getFullYear()
      for (let i = currentYear; i >= currentYear - 5; i--) {
        this.years.push(i)
      }
    },
    
    async loadInitialData() {
      try {
        this.loading = true
        const [ministriesRes, currenciesRes] = await Promise.all([
          this.$axios.get('/api/ministries'),
          this.$axios.get('/api/currency/find')
        ])
        
        this.ministries = ministriesRes.data.data || ministriesRes.data
        this.currencies = currenciesRes.data.data || currenciesRes.data
      } catch (error) {
        console.error('Error loading initial data:', error)
        this.$toast?.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
      } finally {
        this.loading = false
      }
    },
    
    async applyFilters() {
      this.loading = true
      try {
        const monthStart = `${this.filters.year}-${String(this.filters.month).padStart(2, '0')}-01`
        const lastDay = new Date(this.filters.year, this.filters.month, 0).getDate()
        const monthEnd = `${this.filters.year}-${String(this.filters.month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`
        
        const params = new URLSearchParams({
          monthStart,
          monthEnd
        })
        
        if (this.filters.ministryId) params.append('ministryId', this.filters.ministryId)
        if (this.filters.currencyId) params.append('currencyId', this.filters.currencyId)
        
        const response = await this.$axios.get(`/api/money-advances/report/balance-report?${params}`)
        
        if (response.data.success) {
          this.reportData = response.data.data || []
          this.calculateCurrencySummaries()
        }
      } catch (error) {
        console.error('Error loading report:', error)
        this.$toast?.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດລາຍງານ')
      } finally {
        this.loading = false
      }
    },
    
    calculateCurrencySummaries() {
      const summaryMap = new Map()
      
      this.reportDataWithBalance.forEach(item => {
        const key = item.currencyCode
        if (!summaryMap.has(key)) {
          summaryMap.set(key, {
            currencyCode: item.currencyCode,
            currencyName: item.currencyName,
            balanceForward: 0,
            newAdvances: 0,
            newSettlements: 0,
            endingBalance: 0
          })
        }
        
        const summary = summaryMap.get(key)
        summary.balanceForward += parseFloat(item.balanceForward || 0)
        summary.newAdvances += parseFloat(item.newAdvances || 0)
        summary.newSettlements += parseFloat(item.newSettlements || 0)
        summary.endingBalance += parseFloat(item.endingBalance || 0)
      })
      
      this.currencySummaries = Array.from(summaryMap.values())
    },
    
    resetFilters() {
      this.filters = {
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        ministryId: '',
        currencyId: ''
      }
      this.applyFilters()
    },
    
    formatAmount(amount) {
      if (!amount && amount !== 0) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    },
    
    formatPeriod() {
      const monthName = this.months.find(m => m.value === this.filters.month)?.text
      return `${monthName} ${this.filters.year}`
    },
    
    getBalanceClass(balance) {
      const amount = parseFloat(balance || 0)
      if (amount > 0) return 'positive'
      if (amount < 0) return 'negative'
      return 'zero'
    },

    getBalanceColor(balance) {
      const amount = parseFloat(balance || 0)
      if (amount > 0) return 'success'
      if (amount < 0) return 'error'
      return 'grey'
    },
    
    viewDetails(item) {
      this.selectedItem = item
      this.detailsDialog = true
    },
    
    exportToExcel() {
      if (!this.reportDataWithBalance.length) {
        this.$toast?.warning('ບໍ່ມີຂໍ້ມູນໃຫ້ສົ່ງອອກ')
        return
      }
      
      const exportData = this.reportDataWithBalance.map((item, index) => ({
        'ລຳດັບ': index + 1,
        'ລະຫັດກະຊວງ': item.ministryCode,
        'ຊື່ກະຊວງ': item.ministryName,
        'ສະກຸນເງິນ': item.currencyCode,
        'ຍອດຍົກມາ': item.balanceForward,
        'ລາຍຈ່າຍໃໝ່': item.newAdvances,
        'ການຊຳລະ': item.newSettlements,
        'ຍອດເຫຼືອ': item.endingBalance
      }))
      
      const headers = Object.keys(exportData[0])
      const csvContent = [
        headers.join(','),
        ...exportData.map(row =>
          headers.map(header => `"${(row[header] || '').toString().replace(/"/g, '""')}"`).join(',')
        )
      ].join('\n')
      
      const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', `ລາຍງານຍອດເງິນ-${this.formatPeriod().replace(' ', '-')}.csv`)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
      
      this.$toast?.success('ສົ່ງອອກສຳເລັດແລ້ວ')
    },
    
    printReport() {
      // Create print content
      const printContent = this.generatePrintContent()
      
      // Create new window for printing
      const printWindow = window.open('', '_blank', 'width=800,height=600')
      
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>ລາຍງານເບີກຈ່າຍ - ${this.formatPeriod()}</title>
          <style>
            body {
              font-family: 'Segoe UI', Arial, sans-serif;
              margin: 20px;
              color: #333;
              line-height: 1.4;
            }
            .print-header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #333;
              padding-bottom: 15px;
            }
            .print-header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: bold;
            }
            .print-header .period {
              font-size: 16px;
              color: #666;
              margin-top: 5px;
            }
            .summary-section {
              margin-bottom: 25px;
            }
            .summary-title {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 15px;
              color: #333;
            }
            .summary-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 15px;
              margin-bottom: 20px;
            }
            .summary-item {
              border: 1px solid #ddd;
              padding: 12px;
              border-radius: 4px;
            }
            .summary-item .currency {
              font-weight: bold;
              font-size: 14px;
            }
            .summary-item .amount {
              font-size: 16px;
              font-weight: bold;
              margin: 5px 0;
            }
            .summary-item .details {
              font-size: 12px;
              color: #666;
            }
            .data-table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
              font-size: 12px;
            }
            .data-table th {
              background-color: #f5f5f5;
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
              font-weight: bold;
            }
            .data-table td {
              border: 1px solid #ddd;
              padding: 6px 8px;
            }
            .data-table tr:nth-child(even) {
              background-color: #f9f9f9;
            }
            .amount-cell {
              text-align: right;
              font-family: 'Courier New', monospace;
            }
            .positive {
              color: #28a745;
            }
            .negative {
              color: #dc3545;
            }
            .zero {
              color: #6c757d;
            }
            .total-row {
              font-weight: bold;
              background-color: #e9ecef !important;
            }
            .total-row td {
              border-top: 2px solid #333;
            }
            .print-footer {
              margin-top: 30px;
              padding-top: 15px;
              border-top: 1px solid #ddd;
              text-align: center;
              font-size: 11px;
              color: #666;
            }
            @media print {
              body {
                margin: 0;
              }
              .summary-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
        </html>
      `)
      
      printWindow.document.close()
      
      // Wait for content to load, then print
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 500)
    },

    generatePrintContent() {
      const currentDate = new Date().toLocaleDateString('en-GB')
      
      // Generate summary cards HTML
      let summaryHtml = ''
      if (this.currencySummaries.length > 0) {
        summaryHtml = `
          <div class="summary-section">
            <div class="summary-title">ສະຫຼຸບຕາມສະກຸນເງິນ</div>
            <div class="summary-grid">
              ${this.currencySummaries.map(curr => `
                <div class="summary-item">
                  <div class="currency">${curr.currencyCode}</div>
                  <div class="amount">${this.formatAmount(curr.endingBalance)}</div>
                  <div class="details">
                    ຍອດຍົກມາ: ${this.formatAmount(curr.balanceForward)}<br>
                    ລາຍຈ່າຍ: ${this.formatAmount(curr.newAdvances)}<br>
                    ການຊຳລະ: ${this.formatAmount(curr.newSettlements)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `
      }
      
      // Generate table HTML
      const tableRows = this.filteredData.map(item => `
        <tr>
          <td>
            <strong>${item.ministryCode || ''}</strong><br>
            <small style="color: #666;">${item.ministryName || ''}</small>
          </td>
          <td style="text-align: center;">
            <span style="background: #f0f0f0; padding: 2px 6px; border-radius: 3px;">
              ${item.currencyCode || ''}
            </span>
          </td>
          <td class="amount-cell">${this.formatAmount(item.balanceForward)}</td>
          <td class="amount-cell" style="color: #28a745;">${this.formatAmount(item.newAdvances)}</td>
          <td class="amount-cell" style="color: #dc3545;">${this.formatAmount(item.newSettlements)}</td>
          <td class="amount-cell ${this.getBalanceClass(item.endingBalance)}">
            ${this.formatAmount(item.endingBalance)}
          </td>
        </tr>
      `).join('')
      
      // Generate totals row
      const totalsRow = `
        <tr class="total-row">
          <td colspan="2"><strong>ລວມທັງໝົດ</strong></td>
          <td class="amount-cell"><strong>${this.formatAmount(this.totals.balanceForward)}</strong></td>
          <td class="amount-cell"><strong>${this.formatAmount(this.totals.newAdvances)}</strong></td>
          <td class="amount-cell"><strong>${this.formatAmount(this.totals.newSettlements)}</strong></td>
          <td class="amount-cell"><strong>${this.formatAmount(this.totals.endingBalance)}</strong></td>
        </tr>
      `
      
      return `
        <div class="print-header">
          <h1>ລາຍງານເບີກຈ່າຍ</h1>
          <div class="period">${this.formatPeriod()}</div>
        </div>
        
        ${summaryHtml}
        
        <div class="summary-title">ລາຍງານລະອຽດ</div>
        <table class="data-table">
          <thead>
            <tr>
              <th>ກະຊວງ</th>
              <th>ສະກຸນເງິນ</th>
              <th>ຍອດຍົກມາ</th>
              <th>ລາຍຈ່າຍໃໝ່</th>
              <th>ການຊຳລະ</th>
              <th>ຍອດເຫຼືອ</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
            ${totalsRow}
          </tbody>
        </table>
        
        <div class="print-footer">
          ພິມເມື່ອ: ${currentDate} | ລາຍງານເບີກຈ່າຍ
        </div>
      `
    }
  }
}
</script>

<style scoped>
.balance-report {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.header-card {
  border-radius: 16px !important;
}

.filters-card {
  border-radius: 12px !important;
}

.summary-card {
  border-radius: 12px !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-left: 4px solid var(--v-primary-base);
}

.summary-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.summary-details {
  font-family: 'Roboto Mono', monospace;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.detail-row:last-child {
  border-bottom: none;
}

.advance {
  color: var(--v-success-base) !important;
}

.settlement {
  color: var(--v-error-base) !important;
}

.ending {
  color: var(--v-primary-base) !important;
}

.positive {
  color: var(--v-success-base) !important;
}

.negative {
  color: var(--v-error-base) !important;
}

.zero {
  color: var(--v-grey-base) !important;
}

.ministry-cell {
  max-width: 250px;
}

.amount-cell {
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
  text-align: right;
}

.search-field {
  max-width: 300px;
}

.total-row {
  background: linear-gradient(135deg, rgba(var(--v-primary-base), 0.1) 0%, rgba(var(--v-primary-base), 0.05) 100%);
  border-top: 2px solid var(--v-primary-base);
}

.detail-grid .detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

.detail-grid .detail-item:last-child {
  border-bottom: none;
}

.calculation-formula {
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  text-align: center;
  padding: 16px;
  background: white;
  border-radius: 8px;
  border-left: 4px solid var(--v-primary-base);
}

.gap-3 > * + * {
  margin-left: 12px;
}

/* Enhanced animations */
.balance-report {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .header-card .d-flex {
    flex-direction: column;
    gap: 16px;
  }
  
  .search-field {
    max-width: 100%;
  }
}

@media print {
  .balance-report {
    background: white !important;
  }
  
  .header-card,
  .filters-card {
    box-shadow: none !important;
    border: 1px solid #ddd !important;
  }
}
</style>