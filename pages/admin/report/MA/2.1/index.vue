<template>
  <v-container fluid class="bank-balance-report">
    <!-- Header Section -->
    <v-card class="header-card mb-6" elevation="4">
      <v-card-title class="primary white--text">
        <div class="d-flex justify-space-between align-center w-100">
          <div>
            <h2 class="text-h4 font-weight-bold mb-1">
              <v-icon large left color="white">mdi-bank</v-icon>
              ລາຍງານຍອດເງິນໃນບັນຊີທະນາຄານ
            </h2>
            <p class="text-subtitle-1 mb-0 opacity-90">
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
              v-model="filters.bankAccountId"
              :items="bankAccountOptions"
              item-text="text"
              item-value="value"
              label="ບັນຊີທະນາຄານ"
              outlined
              dense
              clearable
              @change="applyFilters"
            >
              <template v-slot:prepend-inner>
                <v-icon color="primary">mdi-bank-outline</v-icon>
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
                      <span class="text-body-2">ຍອດຍົກມາ:</span>
                      <span class="font-weight-medium">{{ formatAmount(curr.balanceForward) }}</span>
                    </div>
                    <div class="detail-row advance">
                      <span class="text-body-2">+ ເງິນກູ້ໃໝ່:</span>
                      <span class="font-weight-medium">{{ formatAmount(curr.newAdvances) }}</span>
                    </div>
                    <div class="detail-row settlement">
                      <span class="text-body-2">- ການຊຳລະ:</span>
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
            ລາຍງານລະອຽດຕາມບັນຊີທະນາຄານ
          </div>
          
          <v-text-field
            v-model="search"
            label="ຄົ້ນຫາບັນຊີທະນາຄານ..."
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
        <!-- Bank Account Column -->
        <template v-slot:item.bankAccount="{ item }">
          <div class="account-cell">
            <div class="font-weight-bold text-body-1 mb-1">{{ item.accountName }}</div>
            <div class="text-caption text--secondary mb-1">{{ item.accountNumber }}</div>
            <v-chip x-small color="grey lighten-2" outlined>
              {{ item.accountType }}
            </v-chip>
          </div>
        </template>

        <!-- Bank Details Column -->
        <template v-slot:item.bankDetails="{ item }">
          <div class="bank-cell">
            <div class="font-weight-bold text-body-1">{{ item.bankName }}</div>
            <div v-if="item.bankBranch" class="text-caption text--secondary">{{ item.bankBranch }}</div>
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
          <div class="d-flex gap-1">
            <v-btn
              color="primary"
              icon
              small
              @click="viewDetails(item)"
            >
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
            <v-btn
              color="info"
              icon
              small
              @click="viewTransactions(item)"
            >
              <v-icon small>mdi-format-list-bulleted</v-icon>
            </v-btn>
          </div>
        </template>

        <!-- Footer Totals -->
        <template v-slot:body.append v-if="filteredData.length">
          <tr class="total-row">
            <td colspan="3" class="font-weight-bold text-h6 primary--text">
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
        <p class="text-body-2 grey--text">ກະລຸນາເລືອກຕົວກອງແລ້ວລອງໃໝ່</p>
      </div>
    </v-card>

    <!-- Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="700" persistent>
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left color="white">mdi-bank</v-icon>
          ລາຍລະອຽດຍອດເງິນບັນຊີທະນາຄານ
          <v-spacer />
          <v-btn icon color="white" @click="detailsDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text v-if="selectedItem" class="pa-6">
          <v-row>
            <v-col cols="12">
              <div class="detail-grid">
                <!-- Bank Account Information -->
                <v-card flat outlined class="pa-4 mb-4">
                  <h4 class="text-h6 primary--text mb-3">ຂໍ້ມູນບັນຊີທະນາຄານ</h4>
                  <div class="detail-item">
                    <span class="font-weight-medium">ຊື່ບັນຊີ:</span>
                    <span>{{ selectedItem.accountName }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="font-weight-medium">ເລກບັນຊີ:</span>
                    <span class="monospace">{{ selectedItem.accountNumber }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="font-weight-medium">ປະເພດບັນຊີ:</span>
                    <v-chip color="grey lighten-2" outlined small>
                      {{ selectedItem.accountType }}
                    </v-chip>
                  </div>
                </v-card>

                <!-- Bank Information -->
                <v-card flat outlined class="pa-4 mb-4">
                  <h4 class="text-h6 primary--text mb-3">ຂໍ້ມູນທະນາຄານ</h4>
                  <div class="detail-item">
                    <span class="font-weight-medium">ທະນາຄານ:</span>
                    <span>{{ selectedItem.bankName }}</span>
                  </div>
                  <div v-if="selectedItem.bankBranch" class="detail-item">
                    <span class="font-weight-medium">ສາຂາ:</span>
                    <span>{{ selectedItem.bankBranch }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="font-weight-medium">ສະກຸນເງິນ:</span>
                    <v-chip color="secondary" outlined small>
                      {{ selectedItem.currencyCode }}
                    </v-chip>
                  </div>
                </v-card>

                <!-- Balance Details -->
                <v-card flat outlined class="pa-4 mb-4">
                  <h4 class="text-h6 primary--text mb-3">ລາຍລະອຽດຍອດເງິນ</h4>
                  <div class="detail-item">
                    <span class="font-weight-medium">ຍອດຍົກມາ:</span>
                    <span class="amount">{{ formatAmount(selectedItem.balanceForward) }}</span>
                  </div>
                  <div class="detail-item advance">
                    <span class="font-weight-medium">ເງິນກູ້ໃໝ່:</span>
                    <span class="amount">{{ formatAmount(selectedItem.newAdvances) }}</span>
                  </div>
                  <div class="detail-item settlement">
                    <span class="font-weight-medium">ການຊຳລະ:</span>
                    <span class="amount">{{ formatAmount(selectedItem.newSettlements) }}</span>
                  </div>
                  <v-divider class="my-3" />
                  <div class="detail-item ending">
                    <span class="font-weight-bold text-h6">ຍອດສຸດທ້າຍ:</span>
                    <span class="amount text-h6 font-weight-bold" :class="getBalanceClass(selectedItem.endingBalance)">
                      {{ formatAmount(selectedItem.endingBalance) }}
                    </span>
                  </div>
                </v-card>

                <!-- Calculation -->
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

        <v-card-actions class="pa-4">
          <v-spacer />
          <v-btn
            color="info"
            @click="viewTransactions(selectedItem)"
            v-if="selectedItem"
          >
            <v-icon left>mdi-format-list-bulleted</v-icon>
            ເບິ່ງລາຍການ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Success/Error Snackbar -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
      top
      right
    >
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'BankAccountBalanceReportLao',
  
  data() {
    return {
      loading: false,
      search: '',
      detailsDialog: false,
      selectedItem: null,
      snackbar: {
        show: false,
        message: '',
        color: 'success'
      },
      
      filters: {
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        bankAccountId: '',
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
      bankAccounts: [],
      currencies: [],
      reportData: [],
      currencySummaries: []
    }
  },
  
  computed: {
    tableHeaders() {
      return [
        {
          text: 'ບັນຊີທະນາຄານ',
          value: 'bankAccount',
          sortable: true,
          width: 280
        },
        {
          text: 'ລາຍລະອຽດທະນາຄານ',
          value: 'bankDetails',
          sortable: true,
          width: 200
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
          text: 'ເງິນກູ້ໃໝ່',
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
          text: 'ຍອດສຸດທ້າຍ',
          value: 'endingBalance',
          sortable: true,
          width: 150,
          align: 'right'
        },
        {
          text: 'ການດຳເນີນການ',
          value: 'actions',
          sortable: false,
          width: 120,
          align: 'center'
        }
      ]
    },

    bankAccountOptions() {
      return [
        { text: 'ບັນຊີທະນາຄານທັງໝົດ', value: '' },
        ...this.bankAccounts.map(account => ({
          text: `${account.accountName} - ${account.accountNumber}`,
          value: account.id
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
        item.accountName?.toLowerCase().includes(this.search.toLowerCase()) ||
        item.accountNumber?.toLowerCase().includes(this.search.toLowerCase()) ||
        item.bankName?.toLowerCase().includes(this.search.toLowerCase()) ||
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
        const [bankAccountsRes, currenciesRes] = await Promise.all([
          this.$axios.get('/api/bank_account/find'),
          this.$axios.get('/api/currency/findAll')
        ])
        
        this.bankAccounts = bankAccountsRes.data.data || bankAccountsRes.data
        this.currencies = currenciesRes.data.data || currenciesRes.data
      } catch (error) {
        console.error('Error loading initial data:', error)
        this.showSnackbar('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ', 'error')
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
        
        if (this.filters.bankAccountId) params.append('bankAccountId', this.filters.bankAccountId)
        if (this.filters.currencyId) params.append('currencyId', this.filters.currencyId)
        
        const response = await this.$axios.get(`/api/money-advances/report/bank-account-balance-report?${params}`)
        
        if (response.data.success) {
          this.reportData = response.data.data || []
          this.calculateCurrencySummaries()
        }
      } catch (error) {
        console.error('Error loading report:', error)
        this.showSnackbar('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດລາຍງານ', 'error')
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
        bankAccountId: '',
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
    
    viewTransactions(item) {
      // Implement transaction view
      console.log('View transactions for bank account:', item)
      this.showSnackbar('ຟຸງຊັ້ນນີ້ຍັງບໍ່ທັນມີ', 'info')
    },
    
    exportToExcel() {
      if (!this.reportDataWithBalance.length) {
        this.showSnackbar('ບໍ່ມີຂໍ້ມູນໃຫ້ສົ່ງອອກ', 'warning')
        return
      }
      
      const exportData = this.reportDataWithBalance.map((item, index) => ({
        'ລຳດັບ': index + 1,
        'ຊື່ບັນຊີ': item.accountName,
        'ເລກບັນຊີ': item.accountNumber,
        'ທະນາຄານ': item.bankName,
        'ສາຂາ': item.bankBranch || '',
        'ປະເພດບັນຊີ': item.accountType,
        'ສະກຸນເງິນ': item.currencyCode,
        'ຍອດຍົກມາ': item.balanceForward,
        'ເງິນກູ້ໃໝ່': item.newAdvances,
        'ການຊຳລະ': item.newSettlements,
        'ຍອດສຸດທ້າຍ': item.endingBalance
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
      link.setAttribute('download', `ລາຍງານຍອດເງິນທະນາຄານ-${this.formatPeriod().replace(' ', '-')}.csv`)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
      
      this.showSnackbar('ສົ່ງອອກສຳເລັດແລ້ວ', 'success')
    },
    
    printReport() {
      window.print()
    },

    showSnackbar(message, color = 'success') {
      this.snackbar = {
        show: true,
        message,
        color
      }
    }
  }
}
</script>

<style scoped>
.bank-balance-report {
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

.account-cell {
  max-width: 280px;
}

.bank-cell {
  max-width: 200px;
}

.amount-cell {
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
  text-align: right;
}

.monospace {
  font-family: 'Roboto Mono', monospace;
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

.gap-1 > * + * {
  margin-left: 4px;
}

/* Enhanced animations */
.bank-balance-report {
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
  
  .account-cell,
  .bank-cell {
    max-width: 200px;
  }
}

@media print {
  .bank-balance-report {
    background: white !important;
  }
  
  .header-card,
  .filters-card {
    box-shadow: none !important;
    border: 1px solid #ddd !important;
  }
}
</style>