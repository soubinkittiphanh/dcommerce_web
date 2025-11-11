<template>
  <div>
    <!-- Compact Header -->
    <div class="page-header">
      <h1 class="page-title">ສະຫລຸບບັນຊີ ລາຍຮັບ</h1>
      <div class="header-actions">
        <v-btn
          color="primary"
          small
          @click="openCreateDialog"
          :loading="loading"
        >
          <v-icon left small>mdi-plus</v-icon>
          ລົງລາຍຮັບ
        </v-btn>
        <v-btn
          color="secondary"
          small
          outlined
          @click="exportData"
          :disabled="loading"
        >
          <v-icon left small>mdi-download</v-icon>
          Export
        </v-btn>
      </div>
    </div>

    <!-- Compact Filter Section -->
    <v-card class="filter-card" flat>
      <v-card-text class="py-2">
        <v-row no-gutters align="center" class="filter-row">
          <!-- Date Range Picker -->
          <v-col cols="12" sm="6" md="3" class="px-1">
            <div class="date-range-container">
              <v-menu
                ref="startDateMenu"
                v-model="startDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formattedStartDate"
                    label="ວັນທີ່ເລີ່ມ"
                    dense
                    outlined
                    clearable
                    hide-details
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    @click:clear="clearStartDate"
                  />
                </template>
                <v-date-picker
                  v-model="pickerStartDate"
                  no-title
                  @input="setStartDate"
                  @change="setStartDate"
                />
              </v-menu>
            </div>
          </v-col>

          <v-col cols="12" sm="6" md="3" class="px-1">
            <v-menu
              ref="endDateMenu"
              v-model="endDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="formattedEndDate"
                  label="ວັນທີ່ສິ້ນສຸດ"
                  dense
                  outlined
                  clearable
                  hide-details
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  @click:clear="clearEndDate"
                />
              </template>
              <v-date-picker
                v-model="pickerEndDate"
                no-title
                @input="setEndDate"
                @change="setEndDate"
              />
            </v-menu>
          </v-col>

          <!-- Method Filter -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-select
              v-model="filters.method"
              :items="methodOptions"
              label="ວິທີການ"
              dense
              outlined
              clearable
              hide-details
            />
          </v-col>

          <!-- Account Filter -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-select
              v-model="filters.bankAccountId"
              :items="accountOptions"
              label="ບັນຊີ"
              dense
              outlined
              clearable
              hide-details
            />
          </v-col>

          <!-- Actions -->
          <v-col cols="12" sm="12" md="2" class="px-1">
            <div class="filter-actions">
              <v-btn
                color="primary"
                small
                @click="fetchSettlements"
                :loading="loading"
              >
                <v-icon small>mdi-magnify</v-icon>
              </v-btn>
              <v-btn small outlined @click="resetFilters" :disabled="loading">
                <v-icon small>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!-- Secondary Filters (Collapsible) -->
        <v-expand-transition>
          <v-row no-gutters class="mt-2">
            <v-col cols="12" sm="6" md="3" class="px-1">
              <v-select
                v-model="filters.ministryId"
                :items="ministryOptions"
                label="ກະຊວງ"
                dense
                outlined
                clearable
                hide-details
              />
            </v-col>
          </v-row>
        </v-expand-transition>

        <!-- Advanced Filter Toggle -->
      </v-card-text>
    </v-card>

    <!-- Compact Summary Cards -->
    <div class="summary-section">
      <!-- Total Summary Card -->
      <v-card class="summary-card total-card" dark>
        <v-card-text class="py-2">
          <div class="summary-content">
            <div class="summary-icon">
              <v-icon>mdi-calculator</v-icon>
            </div>
            <div class="summary-details">
              <div class="summary-amount">
                {{ formatCurrency(summaryStats.totalLAK.amount, 'LAK') }}
              </div>
              <div class="summary-label">
                ລວມທັງໝົດ ({{ summaryStats.totalLAK.count }} ລາຍການ)
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <!-- Currency Cards -->
      <v-card
        v-for="currencyStat in summaryStats.currencies"
        :key="currencyStat.currencyId"
        class="summary-card currency-card"
      >
        <v-card-text class="py-2">
          <div class="summary-content">
            <div class="currency-icon">
              <v-icon color="success">mdi-currency-usd</v-icon>
            </div>
            <div class="summary-details">
              <div class="summary-amount">
                {{
                  formatCurrencyAmount(
                    currencyStat.originalAmount,
                    currencyStat.currencyCode
                  )
                }}
              </div>
              <div class="summary-label">
                {{ currencyStat.currencyCode }} ({{ currencyStat.count }})
              </div>
              <div class="lak-equivalent">
                ≈ {{ formatCurrency(currencyStat.lakEquivalent, 'LAK') }}
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <!-- Compact Data Table -->
    <v-card class="table-card" flat>
      <v-card-title class="py-2">
        <span class="table-title"
          >ລາຍການ ({{ filteredSettlements.length }})</span
        >
        <v-spacer />
      </v-card-title>

      <v-data-table
        :headers="tableHeaders"
        :items="filteredSettlements"
        :items-per-page="25"
        class="compact-table"
        dense
      >
        <!-- ID Column -->
        <template v-slot:item.id="{ item }">
          <div class="id-cell">
            {{ formatVoucherNumber(item.id) }}
            <span v-if="item.moneyAdvanceId" class="advance-id"
              >({{ item.moneyAdvanceId }})</span
            >
          </div>
        </template>

        <!-- Date Column -->
        <template v-slot:item.bookingDate="{ item }">
          <span class="date-text">{{
            formatCompactDate(item.bookingDate)
          }}</span>
        </template>

        <!-- Method Column -->
        <template v-slot:item.method="{ item }">
          <v-chip :color="getMethodColor(item.method)" small outlined>
            {{ formatMethod(item.method) }}
          </v-chip>
        </template>

        <!-- Amount Column -->
        <template v-slot:item.dramount="{ item }">
          <div class="amount-cell" v-if="item.moneyAdvance">
            <div class="amount-value">{{ formatAdvanceAmount(item.moneyAdvance) }}</div>
            <div class="currency-code">
              {{ item.moneyAdvance?.currency?.code || 'LAK' }}
            </div>
          </div>
          <div v-else class="no-data">
            <span class="grey--text">-</span>
          </div>
        </template>
        <!-- Amount Column -->
        <template v-slot:item.cramount="{ item }">
          <div class="amount-cell">
            <div class="amount-value">{{ formatSettlementAmount(item) }}</div>
            <div class="currency-code">
              {{ getSettlementCurrency(item)?.code || 'LAK' }}
            </div>
          </div>
        </template>

        <!-- Ministry Column -->
        <template v-slot:item.notes="{ item }">
          <v-chip v-if="item.notes" color="info" x-small outlined>
            {{ item.notes }}
          </v-chip>
          <span v-else class="no-data">-</span>
        </template>
        <!-- Ministry Column -->
        <template v-slot:item.ministry="{ item }">
          <v-chip v-if="item.ministry" color="info" x-small outlined>
            {{ item.ministry.ministryName }}
          </v-chip>
          <span v-else class="no-data">-</span>
        </template>

        <!-- Chart Account Column -->
        <template v-slot:item.chartAccount="{ item }">
          <v-chip v-if="item.chartAccount" color="warning" x-small outlined>
            {{ item.chartAccount.accountNumber }}
          </v-chip>
          <span v-else class="no-data">-</span>
        </template>

        <!-- Actions Column -->
        <template v-slot:item.actions="{ item }">
          <div class="action-buttons">
            <v-btn
              icon
              x-small
              @click="viewSettlement(item)"
              :disabled="loading"
            >
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
            <v-btn
              icon
              x-small
              @click="editSettlement(item)"
              :disabled="loading"
            >
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              icon
              x-small
              @click="printSettlement(item)"
              :disabled="loading"
            >
              <v-icon small>mdi-printer</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Dialogs (keeping existing) -->
    <client-only>
      <SettlementDialog
        :visible="showEditDialog"
        :payment-method="defaultPaymentMethod"
        :settlement="selectedSettlement"
        :chart-accounts="chartAccounts"
        :ministries="ministries"
        :currencies="currencies"
        :bankAccounts="accountList"
        :users="users"
        :outstanding-invoices="outstandingInvoices"
        @close="handleSettlementDialogClose"
        @created="handleSettlementCreated"
        @updated="handleSettlementUpdated"
        @save="handleLegacySettlementSave"
      />
    </client-only>

    <VoucherPrintComponent
      v-if="showPrintVoucher && settlementDetail"
      :key="settlementDetail.id"
      :voucher-data="settlementDetail"
      @close="closePrintVoucher"
    />

    <client-only>
      <SettlementViewDialog
        :visible="showViewDialog"
        :settlement="selectedSettlement"
        @close="closeViewDialog"
      />
    </client-only>

    <!-- Loading Overlay -->
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64" color="primary" />
    </v-overlay>
  </div>
</template>

<script>
import VoucherPrintComponent from '~/components/MA/settlementVoucher'
import SettlementDialog from '~/components/MA/settlementDialog'
import SettlementViewDialog from '~/components/MA/settlementViewDialog'

export default {
  name: 'SettlementSummary',
  components: {
    SettlementDialog,
    SettlementViewDialog,
    VoucherPrintComponent,
  },
  middleware: 'auths',

  data() {
    return {
      // Date picker data - Fixed initialization
      startDateMenu: false,
      endDateMenu: false,
      pickerStartDate: null,
      pickerEndDate: null,
      formattedStartDate: null,
      formattedEndDate: null,

      // UI state
      showAdvancedFilters: false,
      showPrintVoucher: false,
      showEditDialog: false,
      showViewDialog: false,
      selectedSettlement: null,
      defaultPaymentMethod: 'cash',

      // Data arrays (keeping existing)
      outstandingInvoices: [],
      users: [],
      currencies: [],
      ministries: [],
      chartAccounts: [],
      accountList: [],
      settlements: [],
      filteredSettlements: [],

      // Loading states
      loading: false,
      formLoading: false,
      settlementDetail: null,

      // Filters (updated for new date handling)
      filters: {
        startDate: null,
        endDate: null,
        method: '',
        bankAccountId: '',
        ministryId: '',
        search: '',
      },

      // Sorting and pagination (keeping existing)
      sort: {
        field: 'bookingDate',
        direction: 'desc',
      },

      pagination: {
        currentPage: 1,
        perPage: 25,
      },

      // Summary statistics (keeping existing)
      summaryStats: {
        totalLAK: { amount: 0, count: 0 },
        currencies: [],
      },
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },
    filterParams() {
      const params = {}
      console.info(`${JSON.stringify(this.filters)}`)
      if (this.filters.startDate) {
        params.fromDate = this.formatDateForAPI(this.filters.startDate)
      }
      if (this.filters.endDate) {
        params.toDate = this.formatDateForAPI(this.filters.endDate)
      }
      if (this.filters.bankAccountId) {
        params.bankAccountId = this.filters.bankAccountId
      }
      if (this.filters.ministryId) {
        params.ministryId = this.filters.ministryId
      }
      if (this.filters.method) {
        params.method = this.filters.method
      }
      if (this.searchTerm) {
        params.search = this.searchTerm
      }

      return params
    },
    // Table headers for compact design
    tableHeaders() {
      return [
        { text: 'ID', value: 'id', width: '80px', sortable: true },
        { text: 'ວັນທີ', value: 'bookingDate', width: '100px', sortable: true },
        { text: 'ການຊຳລະ', value: 'method', width: '90px', sortable: true },
        { text: 'ຈຳນວນ ຫນີ້', value: 'dramount', width: '120px', sortable: true },
        { text: 'ຈຳນວນ ມີ', value: 'cramount', width: '120px', sortable: true },
        { text: 'ເນື້ອໃນ', value: 'notes', width: '80px', sortable: false },
        { text: 'ກົມ', value: 'ministry', width: '80px', sortable: false },
        {
          text: 'ບັນຊີ',
          value: 'chartAccount',
          width: '80px',
          sortable: false,
        },
        { text: 'ຜູ້ລົງ', value: 'requester', width: '120px', sortable: true },
        { text: 'ຈັດການ', value: 'actions', width: '100px', sortable: false },
      ]
    },

    // Options for filters
    methodOptions() {
      return [
        { text: 'ທັງໝົດ', value: '' },
        { text: 'ເງິນສົດ', value: 'cash' },
        { text: 'ເຊັກ', value: 'cheque' },
        { text: 'ໂອນທະນາຄານ', value: 'bank_transfer' },
        { text: 'ຫັກລົບ', value: 'deduction' },
      ]
    },

    accountOptions() {
      return [
        { text: 'ທັງໝົດ', value: '' },
        ...this.accountList.map((account) => ({
          text: `${account.bankName} - ${account.accountNumber}`,
          value: account.id,
        })),
      ]
    },

    ministryOptions() {
      return [
        { text: 'ທັງໝົດ', value: '' },
        ...this.ministries.map((ministry) => ({
          text: `${ministry.ministryCode} - ${ministry.ministryName}`,
          value: ministry.id,
        })),
      ]
    },

    chartAccountOptions() {
      return [
        { text: 'ທັງໝົດ', value: '' },
        ...this.chartAccounts.map((account) => ({
          text: `${account.accountNumber} - ${account.accountName}`,
          value: account.id,
        })),
      ]
    },

    // Keep existing computed properties
    paginatedSettlements() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage
      const end = start + this.pagination.perPage
      return this.filteredSettlements.slice(start, end)
    },

    totalPages() {
      return Math.ceil(
        this.filteredSettlements.length / this.pagination.perPage
      )
    },

    paginationInfo() {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.perPage + 1
      const end = Math.min(
        start + this.pagination.perPage - 1,
        this.filteredSettlements.length
      )
      return {
        start: this.filteredSettlements.length > 0 ? start : 0,
        end,
        total: this.filteredSettlements.length,
      }
    },

    visiblePages() {
      const pages = []
      const current = this.pagination.currentPage
      const total = this.totalPages

      if (total <= 7) {
        for (let i = 1; i <= total; i++) {
          pages.push(i)
        }
      } else {
        if (current <= 4) {
          for (let i = 1; i <= 5; i++) pages.push(i)
          pages.push('...')
          pages.push(total)
        } else if (current >= total - 3) {
          pages.push(1)
          pages.push('...')
          for (let i = total - 4; i <= total; i++) pages.push(i)
        } else {
          pages.push(1)
          pages.push('...')
          for (let i = current - 1; i <= current + 1; i++) pages.push(i)
          pages.push('...')
          pages.push(total)
        }
      }

      return pages
    },
  },

  mounted() {
    this.initializeDefaultDates()
    this.initializeData()
  },

  methods: {
    // Fixed date picker methods
    initializeDefaultDates() {
      const today = new Date()
      
      // First day of current month
      const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
      
      // Last day of current month  
      const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)

      // Set picker dates first (YYYY-MM-DD format for v-date-picker)
      this.pickerStartDate = this.formatForPicker(firstDay)
      this.pickerEndDate = this.formatForPicker(lastDay)
      
      // Set display dates
      this.formattedStartDate = this.formatDate(firstDay)
      this.formattedEndDate = this.formatDate(lastDay)
      
      // Set filter dates
      this.filters.startDate = firstDay
      this.filters.endDate = lastDay
    },

    formatForPicker(date) {
      if (!date) return null
      
      // Handle if date is already a string in correct format
      if (typeof date === 'string' && date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        return date
      }
      
      // Convert to Date object if it's not already
      const d = date instanceof Date ? date : new Date(date)
      
      // Check if date is valid
      if (isNaN(d.getTime())) return null
      
      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },

    formatDate(date) {
      if (!date) return null
      const d = new Date(date)
      const day = String(d.getDate()).padStart(2, '0')
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const year = d.getFullYear()
      return `${day}/${month}/${year}`
    },

    formatDateForAPI(date) {
      if (!date) return null
      const d = new Date(date)
      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },

    parsePickerDate(pickerValue) {
      if (!pickerValue) return null
      
      // If pickerValue is already a Date object, return it
      if (pickerValue instanceof Date) {
        return pickerValue
      }
      
      // If pickerValue is a string in YYYY-MM-DD format
      if (typeof pickerValue === 'string') {
        const parts = pickerValue.split('-')
        return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]))
      }
      
      // Fallback: try to create a Date from the value
      return new Date(pickerValue)
    },

    setStartDate(pickerValue) {
      this.startDateMenu = false
      if (!pickerValue) return
      
      const dateObj = this.parsePickerDate(pickerValue)
      // Update picker value - ensure it's in YYYY-MM-DD format for the picker
      this.pickerStartDate = this.formatForPicker(dateObj)
      this.formattedStartDate = this.formatDate(dateObj)
      this.filters.startDate = dateObj
    },

    setEndDate(pickerValue) {
      this.endDateMenu = false
      if (!pickerValue) return
      
      const dateObj = this.parsePickerDate(pickerValue)
      // Update picker value - ensure it's in YYYY-MM-DD format for the picker
      this.pickerEndDate = this.formatForPicker(dateObj)
      this.formattedEndDate = this.formatDate(dateObj)
      this.filters.endDate = dateObj
    },

    clearStartDate() {
      this.formattedStartDate = null
      this.pickerStartDate = null
      this.filters.startDate = null
    },

    clearEndDate() {
      this.formattedEndDate = null
      this.pickerEndDate = null
      this.filters.endDate = null
    },

    // Compact date formatting
    formatCompactDate(date) {
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      })
    },

    // Method color coding
    getMethodColor(method) {
      const colors = {
        cash: 'success',
        cheque: 'warning',
        bank_transfer: 'info',
        deduction: 'error',
      }
      return colors[method] || 'grey'
    },

    // Keep all existing methods from the original component
    // (I'm including the key ones here, but you'll want to copy all methods)

    async initializeData() {
      await Promise.all([
        this.fetchCurrencies(),
        this.fetchMinistry(),
        this.fetchChartAccounts(),
        this.fetchUsers(),
        this.fetchBankAccounts(),
        this.fetchSettlements(),
      ])
      this.applyFilters()
      this.calculateSummaryStats()
    },

    // Keep all your existing API methods exactly as they are
    async fetchUsers() {
      try {
        const { data } = await this.$axios.get('/api/user/find')
        if (data && data.data) {
          this.users = Array.isArray(data.data) ? data.data : []
        } else if (Array.isArray(data)) {
          this.users = data
        } else {
          this.users = []
        }
      } catch (error) {
        console.error('Error fetching users:', error)
        this.users = []
        this.showToast('Failed to load users', 'error')
      }
    },

    async fetchCurrencies() {
      try {
        const { data } = await this.$axios.get('/api/currency/find')
        if (data && data.data) {
          this.currencies = Array.isArray(data.data) ? data.data : []
        } else if (Array.isArray(data)) {
          this.currencies = data
        } else {
          this.currencies = []
        }
      } catch (error) {
        console.error('Error fetching currencies:', error)
        this.currencies = []
        this.showToast('Failed to load currencies', 'error')
      }
    },

    async fetchBankAccounts() {
      try {
        const { data } = await this.$axios.get('/api/bank_account/find')
        if (data && data.data) {
          this.accountList = Array.isArray(data.data) ? data.data : []
        } else if (Array.isArray(data)) {
          this.accountList = data
        } else {
          this.accountList = []
        }
        this.accountList = this.accountList.filter(
          (account) => account.isActive
        )
      } catch (error) {
        console.error('Error fetching bank accounts:', error)
        this.accountList = []
      }
    },

    async fetchMinistry() {
      try {
        const response = await this.$axios.get('/api/ministries')
        if (response.data && response.data.success) {
          this.ministries = response.data.data || []
        } else {
          this.ministries = []
        }
      } catch (error) {
        console.error('Error fetching ministries:', error)
        this.ministries = []
        this.showToast('Failed to load ministries', 'error')
      }
    },

    async fetchChartAccounts() {
      try {
        const response = await this.$axios.get('/api/accountChart/find')
        if (Array.isArray(response.data)) {
          this.chartAccounts = response.data
        } else if (response.data && response.data.success) {
          this.chartAccounts = response.data.data || []
        } else if (response.data) {
          this.chartAccounts = response.data
        } else {
          this.chartAccounts = []
        }
      } catch (error) {
        console.error('Error fetching chart accounts:', error)
        this.chartAccounts = []
        this.showToast('Failed to load chart accounts', 'error')
      }
    },
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0')
    },
    async fetchSettlements() {
      
      const params = {
        page: 1,
        limit: 1000,
        ...this.filterParams,
      }
      this.loading = true
      try {
        this.filteredSettlements = []
        const response = await this.$axios.get('/api/settlements', { params })
        if (
          response.data &&
          response.data.success &&
          response.data.data &&
          response.data.data.settlements
        ) {
          this.settlements = response.data.data.settlements.map(
            (settlement) => ({
              id: settlement.id,
              bookingDate: settlement.bookingDate,
              method: settlement.method,
              requester: settlement.proceeder?.cus_name || 'Unknown',
              amount: settlement.amount,
              userId: settlement.userId,
              currencyId: settlement.currencyId,
              currency: settlement.currency,
              bankAccountId: settlement.bankAccountId,
              ministryId: settlement.ministryId,
              chartAccountId: settlement.chartAccountId,
              ministry: settlement.ministry,
              chartAccount: settlement.chartAccount,
              moneyAdvanceId: settlement.moneyAdvanceId,
              moneyAdvance: settlement.moneyAdvance,
              exchangeRate: settlement.exchangeRate,
              externalRef: settlement.externalRef,
              externalRefNo: settlement.externalRefNo,
              chequeNo: settlement.chequeNo,
              fromPersonName: settlement.fromPersonName,
              notes: settlement.notes,
            })
          )
          console.info(`TOTAL ROWS ${this.settlements.length}`)
          this.applyFilters()
        } else {
          this.settlements = []
        }
      } catch (error) {
        console.error('Error fetching settlements:', error)
        this.showToast('Error loading settlement data', 'error')
        this.settlements = []
      } finally {
        this.loading = false
      }
    },

    // Keep all your existing dialog and event handling methods
    async openCreateDialog() {
      this.selectedSettlement = null
      this.defaultPaymentMethod = 'cash'
      this.loading = true
      try {
        await this.loadOutstandingInvoices()
        this.showEditDialog = true
      } catch (error) {
        console.error('Error opening create dialog:', error)
        this.showToast('Failed to load form data', 'error')
      } finally {
        this.loading = false
      }
    },

    async editSettlement(settlement) {
      this.selectedSettlement = { ...settlement }
      this.defaultPaymentMethod = settlement.method || 'cash'
      this.loading = true
      try {
        await this.loadOutstandingInvoices()
        this.showEditDialog = true
      } catch (error) {
        console.error('Error opening edit dialog:', error)
        this.showToast('Failed to load settlement data', 'error')
      } finally {
        this.loading = false
      }
    },

    viewSettlement(settlement) {
      this.selectedSettlement = { ...settlement }
      this.showViewDialog = true
    },

    closePrintVoucher() {
      this.showPrintVoucher = false
      setTimeout(() => {
        this.settlementDetail = null
      }, 100)
    },

    printSettlement(settlement) {
      this.showPrintVoucher = false
      this.$nextTick(() => {
        this.settlementDetail = settlement
        this.showPrintVoucher = true
      })
    },

    handleSettlementDialogClose() {
      this.showEditDialog = false
      this.selectedSettlement = null
      this.defaultPaymentMethod = 'cash'
    },

    async handleSettlementCreated(newSettlement) {
      if (this.settlements && Array.isArray(this.settlements)) {
        this.settlements.unshift({
          id: newSettlement.id,
          bookingDate: newSettlement.bookingDate || newSettlement.createdAt,
          method: newSettlement.method,
          requester:
            newSettlement.proceeder?.cus_name ||
            this.user?.cus_name ||
            'Unknown',
          amount: newSettlement.amount,
          userId: newSettlement.userId,
          currencyId: newSettlement.currencyId,
          currency: newSettlement.currency,
          bankAccountId: newSettlement.bankAccountId,
          ministryId: newSettlement.ministryId,
          chartAccountId: newSettlement.chartAccountId,
          ministry: newSettlement.ministry,
          chartAccount: newSettlement.chartAccount,
          moneyAdvanceId: newSettlement.moneyAdvanceId,
          exchangeRate: newSettlement.exchangeRate,
          externalRef: newSettlement.externalRef,
          externalRefNo: newSettlement.externalRefNo,
          chequeNo: newSettlement.chequeNo,
          fromPersonName: newSettlement.fromPersonName,
          notes: newSettlement.notes,
        })
      }
      this.selectedSettlement = newSettlement
      this.showToast('ການສ້າງລາຍຮັບສຳເລັດແລ້ວ', 'success')
      this.applyFilters()
      this.calculateSummaryStats()
    },

    async handleSettlementUpdated(updatedSettlement) {
      if (this.settlements && Array.isArray(this.settlements)) {
        const index = this.settlements.findIndex(
          (s) => s.id === updatedSettlement.id
        )
        if (index !== -1) {
          this.$set(this.settlements, index, {
            id: updatedSettlement.id,
            bookingDate:
              updatedSettlement.bookingDate || updatedSettlement.createdAt,
            method: updatedSettlement.method,
            requester: updatedSettlement.proceeder?.cus_name || 'Unknown',
            amount: updatedSettlement.amount,
            userId: updatedSettlement.userId,
            currencyId: updatedSettlement.currencyId,
            currency: updatedSettlement.currency,
            bankAccountId: updatedSettlement.bankAccountId,
            ministryId: updatedSettlement.ministryId,
            chartAccountId: updatedSettlement.chartAccountId,
            ministry: updatedSettlement.ministry,
            chartAccount: updatedSettlement.chartAccount,
            moneyAdvanceId: updatedSettlement.moneyAdvanceId,
            exchangeRate: updatedSettlement.exchangeRate,
            externalRef: updatedSettlement.externalRef,
            externalRefNo: updatedSettlement.externalRefNo,
            chequeNo: updatedSettlement.chequeNo,
            fromPersonName: updatedSettlement.fromPersonName,
            notes: updatedSettlement.notes,
          })
        }
      }
      this.selectedSettlement = updatedSettlement
      this.showToast('ການອັບເດດລາຍຮັບສຳເລັດແລ້ວ', 'success')
      this.applyFilters()
      this.calculateSummaryStats()
    },

    handleLegacySettlementSave(settlementData) {
      if (settlementData.id && this.selectedSettlement?.id) {
        this.handleSettlementUpdated(settlementData)
      } else if (settlementData.id && !this.selectedSettlement?.id) {
        this.handleSettlementCreated(settlementData)
      } else {
        this.onSettlementSave(settlementData)
      }
    },

    closeViewDialog() {
      this.showViewDialog = false
      this.selectedSettlement = null
    },

    async loadOutstandingInvoices() {
      try {
        this.outstandingInvoices = [
          {
            id: 1,
            invoiceNumber: 'INV-001',
            vendor: { id: 1, name: 'Test Vendor 1' },
            dueDate: '2025-08-01',
            outstandingAmount: 1000,
          },
          {
            id: 2,
            invoiceNumber: 'INV-002',
            vendor: { id: 2, name: 'Test Vendor 2' },
            dueDate: '2025-08-15',
            outstandingAmount: 2500,
          },
        ]
      } catch (error) {
        console.error('Error loading outstanding invoices:', error)
        this.outstandingInvoices = []
        this.showToast('Failed to load outstanding invoices', 'error')
      }
    },

    // Keep all your existing filter, sort, pagination methods
    applyFilters() {
      let filtered = [...this.settlements]
      if (this.filters.method) {
        filtered = filtered.filter((s) => s.method === this.filters.method)
      }
      if (this.filters.bankAccountId) {
        filtered = filtered.filter(
          (s) => s.bankAccountId === this.filters.bankAccountId
        )
      }
      if (this.filters.ministryId) {
        filtered = filtered.filter(
          (s) => s.ministryId === this.filters.ministryId
        )
      }

      this.filteredSettlements = filtered
      this.sortData()
      this.pagination.currentPage = 1
      this.calculateSummaryStats()
    },

    resetFilters() {
      this.filters = {
        startDate: null,
        endDate: null,
        method: '',
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        search: '',
      }
      this.clearStartDate()
      this.clearEndDate()
      this.initializeDefaultDates()
      this.applyFilters()
    },

    sortData() {
      this.filteredSettlements.sort((a, b) => {
        let aVal = a[this.sort.field]
        let bVal = b[this.sort.field]

        if (typeof aVal === 'string') {
          aVal = aVal.toLowerCase()
          bVal = bVal.toLowerCase()
        }

        if (aVal < bVal) return this.sort.direction === 'asc' ? -1 : 1
        if (aVal > bVal) return this.sort.direction === 'asc' ? 1 : -1
        return 0
      })
    },

    calculateSummaryStats() {
      const currencyStats = new Map()
      let totalLAKAmount = 0
      let totalCount = 0

      this.filteredSettlements.forEach((settlement) => {
        const amount = parseFloat(settlement.amount) || 0
        const exchangeRate = parseFloat(settlement.exchangeRate) || 1
        const currencyId = settlement.currencyId

        const lakEquivalent = amount * exchangeRate
        totalLAKAmount += lakEquivalent
        totalCount++

        const currency = this.currencies.find((c) => c.id === currencyId)
        const currencyCode = currency?.code || 'LAK'
        const currencyName = currency?.name || 'Lao Kip'

        if (!currencyStats.has(currencyId)) {
          currencyStats.set(currencyId, {
            currencyId,
            currencyCode,
            currencyName,
            originalAmount: 0,
            lakEquivalent: 0,
            count: 0,
          })
        }

        const stat = currencyStats.get(currencyId)
        stat.originalAmount += amount
        stat.lakEquivalent += lakEquivalent
        stat.count++
      })

      this.summaryStats = {
        totalLAK: { amount: totalLAKAmount, count: totalCount },
        currencies: Array.from(currencyStats.values()).sort(
          (a, b) => b.lakEquivalent - a.lakEquivalent
        ),
      }
    },

    updatePagination() {
      this.pagination.currentPage = 1
    },

    previousPage() {
      if (this.pagination.currentPage > 1) {
        this.pagination.currentPage--
      }
    },

    nextPage() {
      if (this.pagination.currentPage < this.totalPages) {
        this.pagination.currentPage++
      }
    },

    goToPage(page) {
      this.pagination.currentPage = page
    },

    exportData() {
      const csvData = this.convertToCSV(this.filteredSettlements)
      this.downloadCSV(csvData, 'settlement-summary.csv')
    },

    // Keep all your existing formatting methods
    formatCurrency(amount, currencyCode = 'LAK') {
      try {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currencyCode,
          minimumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
          maximumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
        }).format(amount || 0)
      } catch (error) {
        return `${this.formatNumber(amount)} ${currencyCode}`
      }
    },

    formatCurrencyAmount(amount, currencyCode) {
      return this.formatCurrency(amount, currencyCode)
    },

    formatSettlementAmount(settlement) {
      const currency = this.getSettlementCurrency(settlement)
      const currencyCode = currency?.code || 'LAK'
      return this.formatCurrency(settlement.amount, currencyCode)
    },
    formatAdvanceAmount(advance) {
      const currency = this.getSettlementCurrency(advance)
      const currencyCode = currency?.code || 'LAK'
      return this.formatCurrency(advance.amount, currencyCode)
    },

    getSettlementCurrency(settlement) {
      return this.currencies.find((c) => c.id === settlement.currencyId)
    },

    formatNumber(amount) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(amount || 0)
    },

    formatMethod(method) {
      const methodLabels = {
        cash: 'ເງິນສົດ',
        cheque: 'ເຊັກ',
        bank_transfer: 'ໂອນ',
        deduction: 'ຫັກລົບ',
      }
      return methodLabels[method] || method
    },

    convertToCSV(data) {
      const headers = [
        'ID',
        'Date',
        'Method',
        'Requester',
        'Amount',
        'Currency',
        'Ministry',
        'Chart Account',
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) => {
          const currency = this.getSettlementCurrency(row)
          return [
            row.id,
            row.bookingDate,
            row.method,
            row.requester,
            row.amount,
            currency?.code || '',
            row.ministry?.ministryCode || '',
            row.chartAccount?.accountCode || '',
          ].join(',')
        }),
      ].join('\n')
      return csvContent
    },

    downloadCSV(csvContent, filename) {
      const blob = new Blob([csvContent], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      a.click()
      window.URL.revokeObjectURL(url)
    },

    showToast(message, type = 'info') {
      if (this.$toast) {
        this.$toast[type](message)
      } else {
        console.log(`${type}: ${message}`)
      }
    },
  },
}
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.page-title {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
}

.header-actions {
  display: flex;
  gap: 8px;
}

.filter-card {
  margin-bottom: 16px;
}

.filter-row .px-1 {
  padding: 0 4px;
}

.filter-actions {
  display: flex;
  gap: 4px;
}

.date-range-container {
  width: 100%;
}

.summary-section {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.summary-card {
  flex: 1;
  min-width: 200px;
}

.total-card {
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
}

.currency-card {
  border: 1px solid #e0e0e0;
}

.summary-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.summary-icon,
.currency-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.summary-details {
  flex: 1;
}

.summary-amount {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
}

.summary-label {
  font-size: 12px;
  opacity: 0.8;
  margin-top: 2px;
}

.lak-equivalent {
  font-size: 11px;
  color: #666;
  margin-top: 2px;
}

.table-card {
  margin-bottom: 16px;
}

.table-title {
  font-size: 16px;
  font-weight: 500;
}

.compact-table {
  font-size: 13px;
}

.id-cell {
  font-family: monospace;
  font-size: 12px;
}

.advance-id {
  color: #666;
  font-size: 10px;
}

.date-text {
  font-family: monospace;
  font-size: 11px;
}

.amount-cell {
  text-align: right;
}

.amount-value {
  font-weight: 500;
  font-size: 12px;
}

.currency-code {
  font-size: 10px;
  color: #666;
}

.action-buttons {
  display: flex;
  gap: 2px;
}

.no-data {
  color: #999;
  font-style: italic;
}

@media (max-width: 600px) {
  .summary-section {
    flex-direction: column;
  }
  
  .filter-row {
    flex-direction: column;
  }
  
  .filter-row .v-col {
    margin-bottom: 8px;
  }
}
</style>