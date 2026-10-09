<template>
  <div>
    <!-- Compact Header -->
    <v-card class="header-card" flat>
      <v-card-text class="py-3">
        <div class="header-content">
          <h1 class="header-title">ສະຫລຸບບັນຊີ ລາຍຮັບ</h1>
          <div class="header-actions">
            <v-btn color="primary" small @click="openCreateDialog" :loading="loading">
              <v-icon left small>mdi-plus</v-icon>
              ລົງລາຍຮັບ
            </v-btn>
            <v-btn color="indigo" small outlined to="/admin/report/MA/period" class="text-none">
              <v-icon left small>mdi-calendar-lock-outline</v-icon>
              ຈັດການງວດ (Period)
            </v-btn>
            <v-btn color="primary" small outlined @click="printReport" :disabled="loading || filteredSettlements.length === 0">
              <v-icon left small>mdi-printer</v-icon>
              ພິມລາຍງານ
            </v-btn>
            <v-btn color="secondary" small outlined @click="exportData" :disabled="loading || filteredSettlements.length === 0">
              <v-icon left small>mdi-download</v-icon>
              Export
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Compact Summary Cards -->
    <div class="summary-grid mb-2">
      <v-card class="summary-card">
        <v-card-text class="pa-3">
          <div class="summary-layout">
            <div class="summary-icon total">
              <v-icon color="white">mdi-cash-multiple</v-icon>
            </div>
            <div class="summary-content">
              <div class="summary-amount">{{ summaryStats.totalLAK.count }}</div>
              <div class="summary-label">ຈນ ລາຍຮັບ</div>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <v-card class="summary-card settled">
        <v-card-text class="pa-3">
          <div class="summary-layout">
            <div class="summary-icon">
              <v-icon color="info">mdi-cash-check</v-icon>
            </div>
            <div class="summary-content">
              <div class="summary-amount">{{ activeSettlementCount }}</div>
              <div class="summary-label">ເຄື່ອນໄຫວປົກກະຕິ</div>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <v-card class="summary-card total-amount">
        <v-card-text class="pa-3">
          <div class="summary-layout">
            <div class="summary-icon total">
              <v-icon color="white">mdi-calculator</v-icon>
            </div>
            <div class="summary-content">
              <div class="summary-amount">
                {{ formatCurrency(summaryStats.totalLAK.amount) }}
              </div>
              <div class="summary-label">ລວມຍອດທັງໝົດ</div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <!-- Compact Filter Section -->
    <v-card class="filter-card mb-2" flat>
      <v-card-text class="py-2">
        <v-row no-gutters align="center" class="filter-row">
          <!-- Date Range Filters -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-menu ref="startDateMenu" v-model="startDateMenu" :close-on-content-click="false"
              transition="scale-transition" offset-y max-width="290px" min-width="auto">
              <template #activator="{ on, attrs }">
                <v-text-field :value="formattedStartDate" label="ວັນທີ່ເລີ່ມຕົ້ນ" hint="DD/MM/YYYY" dense outlined
                  clearable hide-details="auto" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                  @click:clear="clearStartDate" />
              </template>
              <v-date-picker v-model="pickerStartDate" no-title @input="setStartDate" />
            </v-menu>
          </v-col>

          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-menu ref="endDateMenu" v-model="endDateMenu" :close-on-content-click="false" transition="scale-transition"
              offset-y max-width="290px" min-width="auto">
              <template #activator="{ on, attrs }">
                <v-text-field :value="formattedEndDate" label="ວັນທີ່ສິ້ນສຸດ" hint="DD/MM/YYYY" dense outlined clearable
                  hide-details="auto" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                  @click:clear="clearEndDate" />
              </template>
              <v-date-picker v-model="pickerEndDate" no-title @input="setEndDate" />
            </v-menu>
          </v-col>

          <!-- Method Filter -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-select v-model="filters.method" :items="methodOptions" label="ວິທີການ" dense outlined clearable
              hide-details="auto" @change="fetchSettlements" />
          </v-col>

          <!-- Ministry Filter -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-select v-model="filters.ministryId" :items="ministryOptions" label="ກະຊວງ" dense outlined clearable
              hide-details="auto" @change="fetchSettlements" />
          </v-col>

          <!-- Search and Actions -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-text-field v-model="searchTerm" label="ຄົ້ນຫາ" dense outlined clearable hide-details="auto"
              prepend-inner-icon="mdi-magnify" @input="debounceSearch" />
          </v-col>

          <v-col cols="12" sm="6" md="2" class="px-1">
            <div class="action-buttons">
              <v-btn color="primary" x-small @click="fetchSettlements" :loading="loading">
                <v-icon small>mdi-filter</v-icon>
              </v-btn>
              <v-btn x-small outlined @click="resetFilters" :disabled="loading">
                <v-icon small>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Compact Data Table -->
    <v-card class="table-card" flat>
      <v-card-title class="py-2 px-3">
        <span class="table-title">ລາຍການ ({{ filteredSettlements.length }})</span>
        <v-spacer />
      </v-card-title>

      <v-data-table :headers="compactHeaders" :items="filteredSettlements" :items-per-page="25" class="compact-table" dense
        :loading="loading" loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ...">
        <!-- ID Column -->
        <template #item.id="{ item }">
          <span class="id-text" :class="{ 'text-decoration-line-through grey--text': item.isActive === false }">
            {{ formatVoucherNumber(item.id) }}
          </span>
          <span v-if="item.moneyAdvanceId" class="id-text grey--text text--darken-1" style="font-size: 10px;">
            (MA: #{{ item.moneyAdvanceId }})
          </span>
          <v-chip v-if="item.isActive === false" x-small color="error" class="ml-1" outlined>
            ຍົກເລີກ
          </v-chip>
        </template>

        <!-- Ministry Column -->
        <template #item.ministry="{ item }">
          <div v-if="item.ministry" class="ministry-compact">
            <v-chip color="info" x-small outlined>
              {{ `${item.ministry.ministryCode ? item.ministry.ministryCode + ' - ' : ''}${item.ministry.ministryName}` }}
            </v-chip>
          </div>
          <span v-else class="no-data">-</span>
        </template>

        <!-- Dr Amount Column -->
        <template #item.dramount="{ item }">
          <div class="amount-column" v-if="item.moneyAdvance">
            <span class="amount-value text--primary">
              {{ formatAdvanceAmount(item.moneyAdvance) }}
            </span>
            <span class="currency-code">
              {{ item.moneyAdvance?.currency?.code || 'LAK' }}
            </span>
          </div>
          <span v-else class="no-data">-</span>
        </template>

        <!-- Cr Amount Column -->
        <template #item.cramount="{ item }">
          <div class="amount-column">
            <span class="amount-value">
              {{ formatSettlementAmount(item) }}
            </span>
            <span class="currency-code">
              {{ getSettlementCurrency(item)?.code || 'LAK' }}
            </span>
          </div>
        </template>

        <!-- Notes Column -->
        <template #item.notes="{ item }">
          <span class="purpose-text" :title="item.notes">
            {{ truncateText(item.notes, 25) }}
          </span>
        </template>

        <!-- Method Column -->
        <template #item.method="{ item }">
          <v-chip :color="getMethodColor(item.method)" x-small outlined>
            {{ formatMethod(item.method) }}
          </v-chip>
        </template>

        <!-- Requester Column -->
        <template #item.requester="{ item }">
          <span class="maker-name">
            {{ item.requester || item.proceeder?.cus_name || '-' }}
          </span>
        </template>

        <!-- Booking Date Column -->
        <template #item.bookingDate="{ item }">
          <span class="date-compact">{{ formatCompactDate(item.bookingDate) }}</span>
        </template>

        <!-- Actions Column -->
        <template #item.actions="{ item }">
          <div class="action-buttons-table">
            <v-btn icon x-small @click="viewSettlement(item)" title="ເບິ່ງລາຍລະອຽດ">
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
            <v-btn icon x-small @click="editSettlement(item)" title="ແກ້ໄຂ">
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon x-small color="error" @click="printSettlement(item)" title="ພິມ">
              <v-icon small>mdi-printer</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- No Data Message -->
    <v-card v-if="!loading && filteredSettlements.length === 0" class="no-data-card" flat>
      <v-card-text class="text-center py-8">
        <v-icon size="64" color="grey lighten-2">mdi-inbox</v-icon>
        <div class="mt-3 grey--text">ບໍ່ມີຂໍ້ມູນ</div>
        <div class="grey--text">ບໍ່ພົບລາຍການລາຍຮັບທີ່ຕົງກັບເງື່ອນໄຂການຄົ້ນຫາ</div>
      </v-card-text>
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
        @cancelled="handleSettlementUpdated"
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
import { printSettlementListReport } from '~/common/moneyAdvanceSettlementListPrintTemplate'
import { mapGetters } from 'vuex'

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
      // Date picker data
      startDateMenu: false,
      endDateMenu: false,
      fromDateMenu: false,
      toDateMenu: false,
      pickerStartDate: null,
      pickerEndDate: null,

      // UI state
      showAdvancedFilters: false,
      showPrintVoucher: false,
      showEditDialog: false,
      showViewDialog: false,
      selectedSettlement: null,
      defaultPaymentMethod: 'cash',
      searchTerm: '',
      searchTimeout: null,

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

      // Filters
      filters: {
        fromDate: '',
        toDate: '',
        startDate: '',
        endDate: '',
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
    ...mapGetters(['findAllCompany']),
    companyData() {
      return (this.findAllCompany && this.findAllCompany.length > 0) ? this.findAllCompany[0] : {}
    },
    user() {
      return this.$auth.user || ''
    },
    formattedStartDate: {
      get() {
        return this.formatDisplayDate(this.pickerStartDate)
      },
      set(value) {
        this.pickerStartDate = value
      },
    },
    formattedEndDate: {
      get() {
        return this.formatDisplayDate(this.pickerEndDate)
      },
      set(value) {
        this.pickerEndDate = value
      },
    },
    formattedFromDate() {
      return this.formattedStartDate
    },
    formattedToDate() {
      return this.formattedEndDate
    },
    filterParams() {
      const params = {}
      const fromDate = this.filters.fromDate || this.filters.startDate
      const toDate = this.filters.toDate || this.filters.endDate
      if (fromDate) {
        params.fromDate = typeof fromDate === 'string' ? fromDate : this.formatDateForAPI(fromDate)
      }
      if (toDate) {
        params.toDate = typeof toDate === 'string' ? toDate : this.formatDateForAPI(toDate)
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

      return params
    },
    activeSettlementCount() {
      return (this.filteredSettlements || []).filter((s) => s.isActive !== false).length
    },

    compactHeaders() {
      return [
        { text: 'ID', value: 'id', width: '70px', sortable: true },
        { text: 'ວັນທີ', value: 'bookingDate', width: '80px', sortable: true },
        { text: 'ກົມ', value: 'ministry', width: '80px', sortable: false },
        { text: 'ຈຳນວນ ຫນີ້', value: 'dramount', width: '100px', sortable: true },
        { text: 'ຈຳນວນ ມີ', value: 'cramount', width: '100px', sortable: true },
        { text: 'ເນື້ອໃນ', value: 'notes', width: '150px', sortable: true },
        { text: 'ການຊຳລະ', value: 'method', width: '80px', sortable: true },
        { text: 'ຜູ້ລົງ', value: 'requester', width: '100px', sortable: true },
        { text: '', value: 'actions', width: '110px', sortable: false },
      ]
    },

    // Table headers for compact design
    tableHeaders() {
      return this.compactHeaders
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
    getStartOfCurrentMonth() {
      const now = new Date()
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
      const year = firstDay.getFullYear()
      const month = String(firstDay.getMonth() + 1).padStart(2, '0')
      const day = String(firstDay.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },

    getEndOfCurrentMonth() {
      const now = new Date()
      const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      const year = lastDay.getFullYear()
      const month = String(lastDay.getMonth() + 1).padStart(2, '0')
      const day = String(lastDay.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },

    initializeDefaultDates() {
      const fromDate = this.getStartOfCurrentMonth()
      const toDate = this.getEndOfCurrentMonth()

      this.filters.fromDate = fromDate
      this.filters.toDate = toDate
      this.filters.startDate = fromDate
      this.filters.endDate = toDate
      this.pickerStartDate = fromDate
      this.pickerEndDate = toDate
    },

    formatDisplayDate(dateString) {
      if (!dateString) return ''
      try {
        const date = new Date(dateString)
        if (isNaN(date.getTime())) return dateString
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
      } catch (error) {
        return dateString
      }
    },

    formatDate(date) {
      return this.formatDisplayDate(date)
    },

    formatDateForAPI(date) {
      if (!date) return null
      if (typeof date === 'string' && date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        return date
      }
      const d = date instanceof Date ? date : new Date(date)
      if (isNaN(d.getTime())) return null
      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },

    formatForPicker(date) {
      return this.formatDateForAPI(date)
    },

    setStartDate(val) {
      this.pickerStartDate = val
      this.filters.fromDate = val || ''
      this.filters.startDate = val || ''
      this.startDateMenu = false
      this.fromDateMenu = false
      this.fetchSettlements()
    },

    setEndDate(val) {
      this.pickerEndDate = val
      this.filters.toDate = val || ''
      this.filters.endDate = val || ''
      this.endDateMenu = false
      this.toDateMenu = false
      this.fetchSettlements()
    },

    setFromDate(val) {
      this.setStartDate(val)
    },

    setToDate(val) {
      this.setEndDate(val)
    },

    clearStartDate() {
      this.pickerStartDate = null
      this.filters.fromDate = ''
      this.filters.startDate = ''
      this.startDateMenu = false
      this.fromDateMenu = false
      this.fetchSettlements()
    },

    clearEndDate() {
      this.pickerEndDate = null
      this.filters.toDate = ''
      this.filters.endDate = ''
      this.endDateMenu = false
      this.toDateMenu = false
      this.fetchSettlements()
    },

    clearFromDate() {
      this.clearStartDate()
    },

    clearToDate() {
      this.clearEndDate()
    },

    debounceSearch() {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout)
      }
      this.searchTimeout = setTimeout(() => {
        this.applyLocalFilters()
      }, 300)
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

    truncateText(text, maxLength = 50) {
      if (!text) return '-'
      if (text.length <= maxLength) return text
      return text.substring(0, maxLength) + '...'
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
        const { data } = await this.$axios.get('/api/currency/findAll')
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
      return String(id).padStart(5, '0')
    },
    async fetchSettlements() {
      if (this.loading) return
      this.loading = true
      try {
        const params = {
          page: 1,
          limit: 1000,
          ...this.filterParams,
        }
        console.info('Fetching settlements with params:', params)
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
              isActive: settlement.isActive !== false && settlement.isActive !== 0,
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
        } else {
          this.settlements = []
        }
        this.applyLocalFilters()
      } catch (error) {
        console.error('Error fetching settlements:', error)
        this.showToast('Error loading settlement data', 'error')
        this.settlements = []
        this.applyLocalFilters()
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
      this.applyLocalFilters()
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
      this.applyLocalFilters()
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
      this.fetchSettlements()
    },

    applyLocalFilters() {
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
      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase().trim()
        filtered = filtered.filter((s) => {
          const notes = (s.notes || '').toLowerCase()
          const id = String(s.id || '')
          const maId = String(s.moneyAdvanceId || '')
          const minName = (s.ministry?.ministryName || '').toLowerCase()
          const minCode = (s.ministry?.ministryCode || '').toLowerCase()
          const person = (s.fromPersonName || '').toLowerCase()
          const req = (s.requester || '').toLowerCase()
          return (
            notes.includes(term) ||
            id.includes(term) ||
            maId.includes(term) ||
            minName.includes(term) ||
            minCode.includes(term) ||
            person.includes(term) ||
            req.includes(term)
          )
        })
      }

      this.filteredSettlements = filtered
      this.sortData()
      this.pagination.currentPage = 1
      this.calculateSummaryStats()
    },

    resetFilters() {
      this.initializeDefaultDates()
      this.filters.method = ''
      this.filters.bankAccountId = ''
      this.filters.ministryId = ''
      this.searchTerm = ''
      this.fetchSettlements()
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

    // Print Lao Government Style A4 Report (7 Columns)
    printReport() {
      if (!this.filteredSettlements || this.filteredSettlements.length === 0) {
        this.showToast('ບໍ່ມີຂໍ້ມູນສຳລັບພິມລາຍງານ', 'warning')
        return
      }

      const selectedMinistry = this.ministries.find((m) => m.id === this.filters.ministryId)
      const selectedMethod = this.methodOptions.find((m) => m.value === this.filters.method)

      const ministryName = selectedMinistry
        ? `${selectedMinistry.ministryCode ? selectedMinistry.ministryCode + ' - ' : ''}${selectedMinistry.ministryName}`
        : ''
      const methodName = selectedMethod && selectedMethod.value ? selectedMethod.text : ''

      printSettlementListReport({
        reportData: this.filteredSettlements,
        filters: this.filters,
        formattedStartDate: this.formattedStartDate,
        formattedEndDate: this.formattedEndDate,
        companyData: this.companyData,
        user: this.user,
        ministryName: ministryName,
        methodName: methodName,
        summaryStats: this.summaryStats,
      })
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
/* Compact Header */
.header-card {
  margin-bottom: 8px;
  border: 1px solid #e2e8f0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
}

.header-actions {
  display: flex;
  gap: 8px;
}

/* Compact Summary Grid */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 8px;
}

.summary-card {
  border: 1px solid #e2e8f0;
  transition: transform 0.2s;
}

.summary-card:hover {
  transform: translateY(-2px);
}

.summary-card.total-amount {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white;
}

.summary-card.settled {
  border-left: 4px solid #3b82f6;
}

.summary-layout {
  display: flex;
  align-items: center;
  gap: 12px;
}

.summary-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  flex-shrink: 0;
}

.summary-icon.total {
  background: rgba(255, 255, 255, 0.2);
}

.summary-content {
  flex: 1;
  min-width: 0;
}

.summary-amount {
  font-size: 16px;
  font-weight: 700;
  color: #1a202c;
  word-break: break-word;
}

.total-amount .summary-amount {
  color: white;
}

.summary-label {
  font-size: 11px;
  color: #718096;
  margin-top: 2px;
}

.total-amount .summary-label {
  color: rgba(255, 255, 255, 0.9);
}

/* Compact Filter */
.filter-card {
  border: 1px solid #e2e8f0;
}

.filter-row {
  align-items: flex-end;
}

.filter-actions {
  display: flex;
  gap: 4px;
}

.action-buttons {
  display: flex;
  gap: 4px;
}

/* Compact Table */
.table-card {
  border: 1px solid #e2e8f0;
}

.table-title {
  font-size: 14px;
  font-weight: 600;
}

.compact-table {
  font-size: 12px;
}

.compact-table>>>th {
  font-size: 11px !important;
  font-weight: 600 !important;
  padding: 6px 8px !important;
  height: 36px !important;
  background: #f8fafc !important;
}

.compact-table>>>td {
  padding: 4px 8px !important;
  height: 40px !important;
  border-bottom: 1px solid #f1f5f9 !important;
}

/* Table Cell Styles */
.id-text {
  font-weight: 600;
  font-size: 12px;
}

.maker-name {
  font-size: 11px;
  color: #2d3748;
}

.ministry-compact {
  display: flex;
  justify-content: center;
}

.amount-column {
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.amount-value {
  font-weight: 600;
  color: #22c55e;
  font-size: 12px;
}

.currency-code {
  font-size: 9px;
  color: #718096;
  text-transform: uppercase;
}

.purpose-text {
  font-size: 11px;
  color: #4a5568;
}

.date-compact {
  font-size: 10px;
  color: #4a5568;
}

.action-buttons-table {
  display: flex;
  gap: 2px;
  justify-content: center;
}

.no-data {
  color: #a0aec0;
  font-style: italic;
  font-size: 10px;
}

/* No Data Card */
.no-data-card {
  border: 1px solid #e2e8f0;
  margin-top: 16px;
}

/* Responsive Design */
@media (max-width: 960px) {
  .header-content {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  .summary-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .filter-row {
    gap: 8px;
  }

  .action-buttons-table {
    flex-direction: column;
    gap: 1px;
  }
}

@media (max-width: 600px) {
  .summary-grid {
    grid-template-columns: 1fr;
  }

  .summary-layout {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }

  .summary-icon {
    margin: 0 auto;
  }
}

/* Vuetify component overrides */
.v-card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
}

.v-btn--small {
  height: 28px !important;
  min-width: 60px !important;
}

.v-btn--x-small {
  height: 24px !important;
  min-width: 24px !important;
}

.v-chip--x-small {
  height: 18px !important;
  font-size: 10px !important;
  padding: 0 6px !important;
}

.v-text-field--dense .v-input__control {
  min-height: 32px !important;
}

.v-select--dense .v-input__control {
  min-height: 32px !important;
}

.v-text-field--dense .v-input__details {
  min-height: 14px !important;
  padding-top: 2px !important;
}

.v-text-field--dense .v-messages {
  font-size: 10px !important;
}
</style>