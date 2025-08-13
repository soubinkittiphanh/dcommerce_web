<template>
  <div class="settlement-summary-container">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">ສະຫລຸບບັນຊີ ລາຍຮັບ</h1>
        <div class="header-actions">
          <button class="btn btn-primary" @click="openCreateDialog">
            <i class="fas fa-plus"></i>
            ລົງລາຍຮັບ ການຊຳລະ
          </button>
          <button class="btn btn-secondary" @click="exportData">
            <i class="fas fa-download"></i>
            Export
          </button>
        </div>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="filter-section">
      <div class="filter-row">
        <div class="filter-group">
          <label>ເລືອກຕາມວັນທີ:</label>
          <input type="date" v-model="filters.startDate" class="form-control" />
          <span class="date-separator">ຫາ</span>
          <input type="date" v-model="filters.endDate" class="form-control" />
        </div>

        <div class="filter-group">
          <label>ຊ່ອງທາງລາຍຮັບ:</label>
          <select v-model="filters.method" class="form-control">
            <option value="">All Methods</option>
            <option value="cash">Cash</option>
            <option value="bank_transfer">Bank Transfer</option>
            <option value="deduction">Deduction</option>
          </select>
        </div>
        <div class="filter-group">
          <label>ເລືອກບັນຊີ:</label>
          <select v-model="filters.accountNo" class="form-control">
            <option value="">All Accounts</option>
            <option
              v-for="account in accountList"
              :key="account.id"
              :value="account.id"
            >
              {{ account.bankName }} - {{ account.accountNumber }} ({{
                account.accountName
              }})
            </option>
          </select>
        </div>
        <div class="filter-group">
          <label>ເລືອກກະຊວງ:</label>
          <select v-model="filters.ministryId" class="form-control">
            <option value="">All Ministries</option>
            <option
              v-for="ministry in ministries"
              :key="ministry.id"
              :value="ministry.id"
            >
              {{ ministry.ministryCode }} - {{ ministry.ministryName }}
            </option>
          </select>
        </div>
        <div class="filter-group">
          <label>ເລືອກບັນຊີລວມ:</label>
          <select v-model="filters.chartAccountId" class="form-control">
            <option value="">All Chart Accounts</option>
            <option
              v-for="chartAccount in chartAccounts"
              :key="chartAccount.id"
              :value="chartAccount.id"
            >
              {{ chartAccount.accountNumber }} - {{ chartAccount.accountName }}
            </option>
          </select>
        </div>
        <div class="filter-actions">
          <button class="btn btn-outline-primary" @click="applyFilters">
            <i class="fas fa-search"></i>
            ຄົ້ນຫາ
          </button>
          <button class="btn btn-outline-secondary" @click="resetFilters">
            <i class="fas fa-undo"></i>
            Reset
          </button>
        </div>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="summary-cards">
      <!-- Total LAK Equivalent Card -->
      <div class="summary-card total-lak">
        <div class="card-icon total">
          <i class="fas fa-calculator"></i>
        </div>
        <div class="card-content">
          <h3>{{ formatCurrency(summaryStats.totalLAK.amount, 'LAK') }}</h3>
          <p>ລວມຍອດທັງໝົດ (LAK) - {{ summaryStats.totalLAK.count }} ລາຍການ</p>
        </div>
      </div>

      <!-- Currency-specific Cards -->
      <div
        v-for="currencyStat in summaryStats.currencies"
        :key="currencyStat.currencyId"
        class="summary-card currency-card"
      >
        <div class="card-icon currency">
          <i class="fas fa-coins"></i>
        </div>
        <div class="card-content">
          <h3>
            {{
              formatCurrencyAmount(
                currencyStat.originalAmount,
                currencyStat.currencyCode
              )
            }}
          </h3>
          <p class="currency-name">
            {{ currencyStat.currencyName }} ({{ currencyStat.count }} ລາຍການ)
          </p>
          <p class="lak-equivalent">
            ≈ {{ formatCurrency(currencyStat.lakEquivalent, 'LAK') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="table-section">
      <div class="table-header">
        <div class="table-title">
          <h3>ລາຍການຮັບເງິນ</h3>
          <span class="record-count"
            >{{ filteredSettlements.length }} ລາຍການ</span
          >
        </div>
        <div class="table-actions">
          <div class="per-page-selector">
            <label>Show:</label>
            <select v-model="pagination.perPage" @change="updatePagination">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span>per page</span>
          </div>
        </div>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th @click="sortBy('id')" class="sortable">
                ID
                <i :class="getSortIcon('id')"></i>
              </th>
              <th @click="sortBy('settlementDate')" class="sortable">
                ວັນທີລົງຊຳລະ
                <i :class="getSortIcon('settlementDate')"></i>
              </th>
              <th @click="sortBy('method')" class="sortable">
                Payment Method
                <i :class="getSortIcon('method')"></i>
              </th>
              <th @click="sortBy('requester')" class="sortable">
                ຜູ້ລົງບັນຊີ
                <i :class="getSortIcon('requester')"></i>
              </th>
              <th @click="sortBy('amount')" class="sortable">
                ຈຳນວນເງິນ
                <i :class="getSortIcon('amount')"></i>
              </th>
              <th>ສະກຸນເງິນ</th>
              <th>Ministry</th>
              <th>Chart Account</th>
              <th>ຟັງຊັ່ນ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="settlement in paginatedSettlements" :key="settlement.id">
              <td>{{ settlement.id }} {{ settlement.moneyAdvanceId }}</td>
              <td>{{ formatDate(settlement.settlementDate) }}</td>
              <td>
                <span :class="['method-badge', settlement.method]">
                  {{ formatMethod(settlement.method) }}
                </span>
              </td>
              <td>{{ settlement.requester }}</td>
              <td class="amount-cell">
                {{ formatSettlementAmount(settlement) }}
              </td>
              <td>
                <span
                  v-if="getSettlementCurrency(settlement)"
                  class="currency-tag"
                >
                  {{ getSettlementCurrency(settlement).code }}
                </span>
                <span v-else class="no-data">-</span>
              </td>
              <td>
                <span v-if="settlement.ministry" class="ministry-tag">
                  {{ settlement.ministry.ministryCode }}
                </span>
                <span v-else class="no-data">-</span>
              </td>
              <td>
                <span v-if="settlement.chartAccount" class="chart-account-tag">
                  {{ settlement.chartAccount.accountNumber }}
                </span>
                <span v-else class="no-data">-</span>
              </td>
              <td class="actions-cell">
                <button
                  class="btn btn-sm btn-outline-primary"
                  @click="viewSettlement(settlement)"
                  title="View Details"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-info"
                  @click="editSettlement(settlement)"
                  title="Edit"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-secondary"
                  @click="printSettlement(settlement)"
                  title="Print"
                >
                  <i class="fas fa-print"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="pagination-container">
        <div class="pagination-info">
          Showing {{ paginationInfo.start }} to {{ paginationInfo.end }} of
          {{ paginationInfo.total }} entries
        </div>
        <div class="pagination-controls">
          <button
            class="btn btn-sm btn-outline-secondary"
            @click="previousPage"
            :disabled="pagination.currentPage === 1"
          >
            Previous
          </button>

          <span v-for="page in visiblePages" :key="page">
            <button
              v-if="page !== '...'"
              class="btn btn-sm"
              :class="
                page === pagination.currentPage
                  ? 'btn-primary'
                  : 'btn-outline-secondary'
              "
              @click="goToPage(page)"
            >
              {{ page }}
            </button>
            <span v-else class="pagination-ellipsis">...</span>
          </span>

          <button
            class="btn btn-sm btn-outline-secondary"
            @click="nextPage"
            :disabled="pagination.currentPage === totalPages"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <!-- Settlement Dialog (for Create/Edit) -->
    <client-only>
      <SettlementDialog
        :visible="showEditDialog"
        :settlement="selectedSettlement"
        :chart-accounts="chartAccounts"
        :ministries="ministries"
        :currencies="currencies"
        :bankAccounts="accountList"
        :users="users"
        :outstanding-invoices="outstandingInvoices"
        @close="closeEditDialog"
        @save="onSettlementSave"
      />
    </client-only>
    <!-- Voucher Print Component -->
    <VoucherPrintComponent
      v-if="showPrintVoucher && settlementDetail"
      :key="settlementDetail.id"
      :voucher-data="settlementDetail"
      @close="closePrintVoucher"
    />
    <!-- Settlement View Dialog -->
    <client-only>
      <SettlementViewDialog
        :visible="showViewDialog"
        :settlement="selectedSettlement"
        @close="closeViewDialog"
      />
    </client-only>

    <!-- Loading Overlay -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
import SettlementDialog from '~/components/MA/settlementDialog'
import SettlementViewDialog from '~/components/MA/settlementViewDialog'
import VoucherPrintComponent from '~/components/MA/settlementVoucher'
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
      showPrintVoucher: false,
      // Dialog visibility states
      showEditDialog: false, // For SettlementDialog
      showViewDialog: false, // For SettlementViewDialog
      selectedSettlement: null,

      // Data arrays
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
        startDate: '',
        endDate: '',
        method: '',
        accountNo: '',
        ministryId: '',
        chartAccountId: '',
        search: '',
      },

      // Sorting
      sort: {
        field: 'settlementDate',
        direction: 'desc',
      },

      // Pagination
      pagination: {
        currentPage: 1,
        perPage: 25,
      },

      // Summary statistics
      summaryStats: {
        totalLAK: { amount: 0, count: 0 },
        currencies: [], // Array of { currencyId, currencyCode, currencyName, originalAmount, lakEquivalent, count }
      },
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },
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
        start,
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
    this.initializeData()
  },

  methods: {
    closePrintVoucher() {
      this.showPrintVoucher = false
      setTimeout(() => {
        this.settlementDetail = null
      }, 100)
    },
    printSettlement(settlement) {
      console.info(`SETTLEMENT DETAIL ${JSON.stringify(settlement)}`)
      this.showPrintVoucher = false
      this.$nextTick(() => {
        this.settlementDetail = settlement
        this.showPrintVoucher = true
      })
    },
    // Dialog Control Methods
    async openCreateDialog() {
      console.log('Opening create dialog...')
      this.selectedSettlement = null
      this.loading = true

      try {
        // Load outstanding invoices for the settlement dialog
        await this.loadOutstandingInvoices()

        // Show the dialog
        this.showEditDialog = true
        console.log('showEditDialog set to:', this.showEditDialog)
      } catch (error) {
        console.error('Error opening create dialog:', error)
        this.showToast('Failed to load form data', 'error')
      } finally {
        this.loading = false
      }
    },

    async editSettlement(settlement) {
      console.log(
        `Opening edit dialog for settlement: ${JSON.stringify(settlement)}`,
        settlement.id
      )
      this.selectedSettlement = settlement
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
      console.log('Opening view dialog for settlement:', settlement.id)
      this.selectedSettlement = settlement
      this.showViewDialog = true
    },

    closeEditDialog() {
      console.log('Closing edit dialog')
      this.showEditDialog = false
      this.selectedSettlement = null
    },

    closeViewDialog() {
      console.log('Closing view dialog')
      this.showViewDialog = false
      this.selectedSettlement = null
    },

    // Data Loading Methods
    async loadOutstandingInvoices() {
      try {
        // For now, provide dummy data since the API might not be available
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

        // Uncomment this when your API is ready:
        // const { data } = await this.$axios.get('/api/invoices/outstanding')
        // this.outstandingInvoices = data || []
      } catch (error) {
        console.error('Error loading outstanding invoices:', error)
        this.outstandingInvoices = []
        this.showToast('Failed to load outstanding invoices', 'error')
      }
    },

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

    async fetchUsers() {
      try {
        const { data } = await this.$axios.get('/api/user/find')

        if (data && data.data) {
          this.users = Array.isArray(data) ? data : []
        } else if (Array.isArray(data)) {
          this.users = data
        } else {
          this.users = []
        }

        console.log('Fetched users:', this.users.length)
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
          this.currencies = Array.isArray(data) ? data : []
        } else if (Array.isArray(data)) {
          this.currencies = data
        } else {
          this.currencies = []
        }

        console.log('Fetched currencies:', this.currencies.length)
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
          this.accountList = Array.isArray(data) ? data : []
        } else if (Array.isArray(data)) {
          this.accountList = data
        } else {
          this.accountList = []
        }

        // Filter only active bank accounts
        this.accountList = this.accountList.filter(
          (account) => account.isActive
        )

        console.log('Fetched bank accounts:', this.accountList.length)
      } catch (error) {
        console.error('Error fetching bank accounts:', error)
        this.accountList = []
        console.warn(
          'Bank accounts not available - feature will work without them'
        )
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

        console.log('Fetched ministries:', this.ministries)
      } catch (error) {
        console.error('Error fetching ministries:', error)
        this.ministries = []
        this.showToast('Failed to load ministries', 'error')
      }
    },

    async fetchChartAccounts() {
      try {
        const response = await this.$axios.get('/api/accountChart/find')

        // Check if response.data is directly an array
        if (Array.isArray(response.data)) {
          this.chartAccounts = response.data
        }
        // Check if response.data has a nested structure with success flag
        else if (response.data && response.data.success) {
          this.chartAccounts = response.data.data || []
        }
        // Handle other possible structures
        else if (response.data) {
          this.chartAccounts = response.data
        } else {
          this.chartAccounts = []
        }

        console.log('Fetched chart accounts:', this.chartAccounts)
      } catch (error) {
        console.error('Error fetching chart accounts:', error)
        this.chartAccounts = []
        this.showToast('Failed to load chart accounts', 'error')
      }
    },

    async fetchSettlements() {
      this.loading = true
      try {
        const response = await this.$axios.get('/api/settlements')

        if (
          response.data &&
          response.data.success &&
          response.data.data &&
          response.data.data.settlements
        ) {
          this.settlements = response.data.data.settlements.map(
            (settlement) => ({
              id: settlement.id,
              settlementDate: settlement.createdAt,
              method: settlement.method,
              requester: settlement.proceeder?.cus_name || 'Unknown',
              amount: settlement.amount,
              userId: settlement.userId,
              currencyId: settlement.currencyId,
              bankAccountId: settlement.bankAccountId,
              ministryId: settlement.ministryId,
              chartAccountId: settlement.chartAccountId,
              ministry: settlement.ministry,
              chartAccount: settlement.chartAccount,
              moneyAdvanceId: settlement.moneyAdvanceId,
              exchangeRate: settlement.exchangeRate,
              externalRef: settlement.externalRef,
              externalRefNo: settlement.externalRefNo,
              chequeNo: settlement.chequeNo,
              fromPersonName: settlement.fromPersonName,
              notes: settlement.notes,
            })
          )
        } else {
          console.error('Unexpected response structure:', response.data)
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

    // Settlement Save Handler
    async onSettlementSave(settlementData) {
      try {
        this.loading = true
        console.log('Saving settlement:', settlementData)

        let response
        if (this.selectedSettlement && this.selectedSettlement.id) {
          settlementData.updateUserId = this.user.id
          response = await this.$axios.put(
            `/api/settlements/${this.selectedSettlement.id}`,
            settlementData
          )
        } else {
          response = await this.$axios.post('/api/settlements', settlementData)
        }

        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success')
          // this.closeEditDialog()

          await this.fetchSettlements()
          this.applyFilters()
        } else {
          throw new Error(response.data?.message || 'Save failed')
        }
      } catch (error) {
        console.error('Error saving settlement:', error)
        const errorMessage =
          error.response?.data?.message || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ'
        this.showToast(errorMessage, 'error')
      } finally {
        this.loading = false
      }
    },

    // Filter and Search Methods
    applyFilters() {
      let filtered = [...this.settlements]

      if (this.filters.startDate) {
        filtered = filtered.filter(
          (s) => s.settlementDate >= this.filters.startDate
        )
      }
      if (this.filters.endDate) {
        filtered = filtered.filter(
          (s) => s.settlementDate <= this.filters.endDate
        )
      }

      if (this.filters.method) {
        filtered = filtered.filter((s) => s.method === this.filters.method)
      }

      if (this.filters.accountNo) {
        filtered = filtered.filter(
          (s) => s.bankAccountId === this.filters.accountNo
        )
      }

      if (this.filters.ministryId) {
        filtered = filtered.filter(
          (s) => s.ministryId === this.filters.ministryId
        )
      }

      if (this.filters.chartAccountId) {
        filtered = filtered.filter(
          (s) => s.chartAccountId === this.filters.chartAccountId
        )
      }

      this.filteredSettlements = filtered
      this.sortData()
      this.pagination.currentPage = 1
      this.calculateSummaryStats()
    },

    resetFilters() {
      this.filters = {
        startDate: '',
        endDate: '',
        method: '',
        accountNo: '',
        ministryId: '',
        chartAccountId: '',
        search: '',
      }
      this.applyFilters()
    },

    sortBy(field) {
      if (this.sort.field === field) {
        this.sort.direction = this.sort.direction === 'asc' ? 'desc' : 'asc'
      } else {
        this.sort.field = field
        this.sort.direction = 'asc'
      }
      this.sortData()
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

    getSortIcon(field) {
      if (this.sort.field !== field) return 'fas fa-sort'
      return this.sort.direction === 'asc'
        ? 'fas fa-sort-up'
        : 'fas fa-sort-down'
    },

    calculateSummaryStats() {
      // Initialize stats
      const currencyStats = new Map()
      let totalLAKAmount = 0
      let totalCount = 0

      // Process each settlement
      this.filteredSettlements.forEach((settlement) => {
        const amount = parseFloat(settlement.amount) || 0
        const exchangeRate = parseFloat(settlement.exchangeRate) || 1
        const currencyId = settlement.currencyId

        // Calculate LAK equivalent
        const lakEquivalent = amount * exchangeRate
        totalLAKAmount += lakEquivalent
        totalCount++

        // Find currency details
        const currency = this.currencies.find((c) => c.id === currencyId)
        const currencyCode = currency?.code || 'LAK'
        const currencyName = currency?.name || 'Lao Kip'

        // Group by currency
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

      // Update summary stats
      this.summaryStats = {
        totalLAK: {
          amount: totalLAKAmount,
          count: totalCount,
        },
        currencies: Array.from(currencyStats.values()).sort((a, b) => {
          // Sort by LAK equivalent amount (descending)
          return b.lakEquivalent - a.lakEquivalent
        }),
      }
    },

    // Pagination methods
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

    // Enhanced currency formatting
    formatCurrency(amount, currencyCode = 'LAK') {
      try {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currencyCode,
          minimumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
          maximumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
        }).format(amount || 0)
      } catch (error) {
        // Fallback formatting if currency code is not supported
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

    getSettlementCurrency(settlement) {
      return this.currencies.find((c) => c.id === settlement.currencyId)
    },

    formatNumber(amount) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(amount || 0)
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    formatMethod(method) {
      const methodLabels = {
        cash: 'Cash',
        bank_transfer: 'Bank Transfer',
        deduction: 'Deduction',
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
            row.settlementDate,
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
      console.log(`${type}: ${message}`)
      if (this.$toast) {
        this.$toast[type](message)
      } else {
        // Fallback for when toast is not available
        if (type === 'error') {
          alert(`Error: ${message}`)
        } else if (type === 'success') {
          console.log(`✅ ${message}`)
        }
      }
    },
  },
}
</script>

<style scoped>
.settlement-summary-container {
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

/* Header Styles */
.page-header {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  margin: 0;
  color: #333;
  font-size: 28px;
  font-weight: 600;
}

.header-actions {
  display: flex;
  gap: 12px;
}

/* Filter Styles */
.filter-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filter-row {
  display: flex;
  gap: 20px;
  align-items: flex-end;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-group label {
  font-weight: 500;
  color: #555;
  font-size: 14px;
}

.date-separator {
  align-self: flex-end;
  padding: 8px;
  color: #666;
}

.filter-actions {
  display: flex;
  gap: 8px;
  align-self: flex-end;
}

/* Enhanced Summary Card Styles */
.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.summary-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.summary-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Total LAK Card - Special styling */
.summary-card.total-lak {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.summary-card.total-lak .card-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.summary-card.total-lak .card-content h3 {
  color: white;
  font-size: 28px;
  font-weight: 700;
}

.summary-card.total-lak .card-content p {
  color: rgba(255, 255, 255, 0.9);
}

/* Currency-specific cards */
.summary-card.currency-card {
  background: white;
  border-left: 4px solid #28a745;
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 20px;
  flex-shrink: 0;
}

.card-icon.total {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.card-icon.currency {
  background: #e8f5e8;
  color: #28a745;
}

.card-content {
  flex: 1;
  min-width: 0; /* Prevents flex item from overflowing */
}

.card-content h3 {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 700;
  word-break: break-word;
}

.card-content p {
  margin: 0;
  font-size: 14px;
}

.currency-name {
  color: #495057;
  font-weight: 600;
  margin-bottom: 4px !important;
}

.lak-equivalent {
  color: #6c757d;
  font-size: 13px !important;
  font-style: italic;
}

/* Animation for new cards */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.summary-card {
  animation: slideInUp 0.5s ease-out;
}

/* Ensure currency codes are clearly visible */
.currency-code {
  font-weight: 600;
  color: #007bff;
}

/* Table Styles */
.table-section {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.table-header {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-title h3 {
  margin: 0;
  color: #333;
}

.record-count {
  color: #666;
  font-size: 14px;
  margin-left: 8px;
}

.per-page-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.data-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #495057;
}

.data-table th.sortable {
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;
}

.data-table th.sortable:hover {
  background-color: #e9ecef;
}

.data-table th i {
  margin-left: 8px;
  opacity: 0.5;
}

.amount-cell {
  font-weight: 600;
  color: #28a745;
}

.actions-cell {
  display: flex;
  gap: 8px;
}

/* Method Badges */
.method-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
}

.method-badge.cash {
  background-color: #d4edda;
  color: #155724;
}

.method-badge.bank_transfer {
  background-color: #d1ecf1;
  color: #0c5460;
}

.method-badge.deduction {
  background-color: #fce4ec;
  color: #880e4f;
}

/* Ministry and Chart Account Tags */
.ministry-tag {
  background-color: #e7f3ff;
  color: #0066cc;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
}

.chart-account-tag {
  background-color: #fff3cd;
  color: #856404;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
}

.currency-tag {
  background-color: #e8f5e8;
  color: #28a745;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
}

.no-data {
  color: #999;
  font-style: italic;
  font-size: 12px;
}

/* Pagination */
.pagination-container {
  padding: 20px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination-info {
  color: #666;
  font-size: 14px;
}

.pagination-controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

.pagination-ellipsis {
  padding: 6px 12px;
  color: #666;
}

/* Button Styles */
.btn {
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border-color: #6c757d;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #5a6268;
  border-color: #5a6268;
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
  background-color: transparent;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: white;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
  background-color: transparent;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: white;
}

.btn-outline-info {
  color: #17a2b8;
  border-color: #17a2b8;
  background-color: transparent;
}

.btn-outline-info:hover {
  background-color: #17a2b8;
  color: white;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
}

/* Form Controls */
.form-control {
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

/* Loading Overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loading-spinner {
  background: white;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
}

.loading-spinner i {
  font-size: 32px;
  color: #007bff;
  margin-bottom: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .settlement-summary-container {
    padding: 10px;
  }

  .header-content {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .filter-row {
    flex-direction: column;
    gap: 16px;
  }

  .filter-group {
    width: 100%;
  }

  .filter-actions {
    flex-direction: row;
    width: 100%;
  }

  .summary-cards {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .summary-card {
    padding: 20px;
  }

  .card-icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
    margin-right: 16px;
  }

  .card-content h3 {
    font-size: 20px;
  }

  .table-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .pagination-container {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .pagination-controls {
    flex-wrap: wrap;
  }

  .actions-cell {
    flex-direction: column;
    gap: 4px;
  }
}

@media (max-width: 576px) {
  .summary-card {
    flex-direction: column;
    text-align: center;
  }

  .card-icon {
    margin: 0 auto 16px auto;
  }
}
</style>