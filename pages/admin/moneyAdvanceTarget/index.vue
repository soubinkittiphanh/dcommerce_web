<template>
  <div class="revenue-target-container">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">ສະຫລຸບເປົ້າໝາຍລາຍຮັບ</h1>
        <div class="header-actions">
          <button class="btn btn-primary" @click="openCreateDialog">
            <i class="fas fa-plus"></i>
            ສ້າງເປົ້າໝາຍລາຍຮັບ
          </button>
          <button class="btn btn-secondary" @click="exportData">
            <i class="fas fa-download"></i>
            Export
          </button>
        </div>
      </div>
    </div>

    <!-- Enhanced Filter Section -->
    <div class="filter-section">
      <div class="filter-row">
        <div class="filter-group">
          <label>ເລືອກປີ:</label>
          <select v-model="filters.year" class="form-control">
            <option value="">All Years</option>
            <option v-for="year in availableYears" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label>ຊື່ເປົ້າໝາຍ:</label>
          <input
            type="text"
            v-model="filters.name"
            class="form-control"
            placeholder="ຄົ້ນຫາຊື່ເປົ້າໝາຍ..."
          />
        </div>

        <div class="filter-group">
          <label>ສະກຸນເງິນ:</label>
          <select v-model="filters.currencyId" class="form-control">
            <option value="">All Currencies</option>
            <option
              v-for="currency in currencies"
              :key="currency.id"
              :value="currency.id"
            >
              {{ currency.code }} - {{ currency.name }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label>ກະຊວງ:</label>
          <select v-model="filters.parentMinistryId" class="form-control">
            <option value="">All Ministries</option>
            <option
              v-for="ministry in ministries"
              :key="ministry.id"
              :value="ministry.id"
            >
              {{ ministry.ministryNameLao }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label>ບັນຊີບັນຊີ:</label>
          <select v-model="filters.chartAccountId" class="form-control">
            <option value="">All Chart Accounts</option>
            <option
              v-for="account in chartAccounts"
              :key="account.id"
              :value="account.id"
            >
              {{ account.accountCode }} - {{ account.accountName }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label>ສະຖານະ:</label>
          <select v-model="filters.isActive" class="form-control">
            <option value="">All Status</option>
            <option value="true">ເປີດໃຊ້ງານ</option>
            <option value="false">ປິດໃຊ້ງານ</option>
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
      <div class="summary-card">
        <div class="card-icon total">
          <i class="fas fa-bullseye"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.total.count }}</h3>
          <p>ລວມເປົ້າໝາຍທັງໝົດ</p>
        </div>
      </div>

      <div class="summary-card">
        <div class="card-icon active">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.active.count }}</h3>
          <p>ເປົ້າໝາຍທີ່ເປີດໃຊ້ງານ</p>
        </div>
      </div>

      <div class="summary-card">
        <div class="card-icon amount">
          <i class="fas fa-dollar-sign"></i>
        </div>
        <div class="card-content">
          <h3>{{ formatCurrency(summaryStats.total.amount) }}</h3>
          <p>ລວມຍອດເປົ້າໝາຍ</p>
        </div>
      </div>

      <div class="summary-card">
        <div class="card-icon yearly">
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.currentYear.count }}</h3>
          <p>ເປົ້າໝາຍປີ {{ currentYear }}</p>
        </div>
      </div>
    </div>

    <!-- Enhanced Data Table -->
    <div class="table-section">
      <div class="table-header">
        <div class="table-title">
          <h3>ລາຍການເປົ້າໝາຍລາຍຮັບ</h3>
          <span class="record-count">{{ filteredTargets.length }} ລາຍການ</span>
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
              <th @click="sortBy('name')" class="sortable">
                ຊື່ເປົ້າໝາຍ
                <i :class="getSortIcon('name')"></i>
              </th>
              <th @click="sortBy('year')" class="sortable">
                ປີ
                <i :class="getSortIcon('year')"></i>
              </th>
              <th @click="sortBy('targetAmount')" class="sortable">
                ຈຳນວນເປົ້າໝາຍ
                <i :class="getSortIcon('targetAmount')"></i>
              </th>
              <th @click="sortBy('exchangeRate')" class="sortable">
                ອັດຕາແລກປ່ຽນ
                <i :class="getSortIcon('exchangeRate')"></i>
              </th>
              <th>ສະກຸນເງິນ</th>
              <th>ກະຊວງ</th>
              <th>ບັນຊີບັນຊີ</th>
              <th>ສະຖານະ</th>
              <th>ຫມາຍເຫດ</th>
              <th>ຟັງຊັ່ນ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="target in paginatedTargets" :key="target.id">
              <td>{{ target.id }}</td>
              <td class="name-cell">{{ target.name }}</td>
              <td>
                <span class="year-badge">{{ target.year }}</span>
              </td>
              <td class="amount-cell">
                {{ formatCurrency(target.targetAmount) }}
              </td>
              <td class="exchange-rate-cell">
                {{ formatNumber(target.exchangeRate) }}
              </td>
              <td>
                <span v-if="target.currency" class="currency-tag">
                  {{ target.currency.code }}
                </span>
                <span v-else class="no-data">-</span>
              </td>
              <td class="ministry-cell">
                <span v-if="target.subMinistries" class="ministry-tag">
                  {{ target.subMinistries.ministryName }}
                </span>
                <span v-else class="no-data">-</span>
              </td>
              <td class="chart-account-cell">
                <span v-if="target.chartAccount" class="account-tag">
                  {{ target.chartAccount.accountName }}
                </span>
                <span v-else class="no-data">-</span>
              </td>
              <td>
                <span
                  :class="[
                    'status-badge',
                    target.isActive ? 'active' : 'inactive',
                  ]"
                >
                  {{ target.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ' }}
                </span>
              </td>
              <td class="remark-cell">
                {{ target.remark || '-' }}
              </td>
              <td class="actions-cell">
                <button
                  class="btn btn-sm btn-outline-primary"
                  @click="viewDetails(target)"
                  title="View Details"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-info"
                  @click="editTarget(target)"
                  title="Edit"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <!-- <button
                  v-if="target.isActive"
                  class="btn btn-sm btn-outline-warning"
                  @click="deactivateTarget(target)"
                  title="Deactivate"
                >
                  <i class="fas fa-pause"></i>
                </button>
                <button
                  v-else
                  class="btn btn-sm btn-outline-success"
                  @click="restoreTarget(target)"
                  title="Restore"
                >
                  <i class="fas fa-play"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="deleteTarget(target)"
                  title="Delete"
                >
                  <i class="fas fa-trash"></i>
                </button> -->
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

    <!-- Revenue Target Dialog -->
    <RevenueTargetDialog
      :show="showDialog"
      :target="selectedTarget"
      :currencies="currencies"
      :form-loading="formLoading"
      :ministries="ministries"
      :chartAccounts="chartAccounts"
      @close="closeDialog"
      @save="onTargetSave"
      @validation-error="handleValidationError"
    />

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
import RevenueTargetDialog from '~/components/MA/revenueTargetDialog'

export default {
  name: 'RevenueTargetSummary',

  components: {
    RevenueTargetDialog,
  },
  middleware: 'auths',
  data() {
    return {
      currencies: [],
      ministries: [],
      chartAccounts: [],
      loading: false,
      formLoading: false,
      showDialog: false,
      selectedTarget: null,
      revenueTargets: [],
      filteredTargets: [],

      // Enhanced Filters
      filters: {
        year: '',
        name: '',
        currencyId: '',
        parentMinistryId: '',
        chartAccountId: '',
        isActive: '',
      },

      // Sorting
      sort: {
        field: 'year',
        direction: 'desc',
      },

      // Pagination
      pagination: {
        currentPage: 1,
        perPage: 25,
      },

      // Summary statistics
      summaryStats: {
        total: { amount: 0, count: 0 },
        active: { amount: 0, count: 0 },
        currentYear: { amount: 0, count: 0 },
      },

      currentYear: new Date().getFullYear(),
    }
  },

  computed: {
    paginatedTargets() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage
      const end = start + this.pagination.perPage
      return this.filteredTargets.slice(start, end)
    },

    totalPages() {
      return Math.ceil(this.filteredTargets.length / this.pagination.perPage)
    },

    paginationInfo() {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.perPage + 1
      const end = Math.min(
        start + this.pagination.perPage - 1,
        this.filteredTargets.length
      )
      return {
        start,
        end,
        total: this.filteredTargets.length,
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

    availableYears() {
      const years = new Set()
      this.revenueTargets.forEach((target) => {
        years.add(target.year)
      })
      
      // Add current year and next few years for new targets
      for (let i = 0; i < 5; i++) {
        years.add(this.currentYear + i)
      }
      
      return Array.from(years).sort((a, b) => b - a)
    },
  },

  mounted() {
    this.initializeData()
  },

  methods: {
    async initializeData() {
      await Promise.all([
        this.fetchCurrencies(),
        this.fetchMinistries(),
        this.fetchChartAccounts(),
        this.fetchRevenueTargets(),
      ])
      this.applyFilters()
      this.calculateSummaryStats()
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

        console.log('Fetched currencies:', this.currencies.length)
      } catch (error) {
        console.error('Error fetching currencies:', error)
        this.currencies = []
        this.showToast('Failed to load currencies', 'error')
      }
    },

    async fetchMinistries() {
      try {
        const response = await this.$axios.get('/api/ministries')
        this.ministries = response.data.data || []
        console.log('Fetched ministries:', this.ministries.length)
      } catch (error) {
        console.error('Error fetching ministries:', error)
        this.ministries = []
        this.showToast('Failed to load ministries', 'error')
      }
    },

    async fetchChartAccounts() {
      try {
        const response = await this.$axios.get('/api/accountChart/find')
        this.chartAccounts = response.data || []
        console.log('Fetched chart accounts:', this.chartAccounts.length)
      } catch (error) {
        console.error('Error fetching chart accounts:', error)
        this.chartAccounts = []
        this.showToast('Failed to load chart accounts', 'error')
      }
    },

    async fetchRevenueTargets() {
      this.loading = true
      try {
        // Include related models in the request
        const response = await this.$axios.get('/api/revenue-targets?include=currency,subMinistries,chartAccount')

        if (Array.isArray(response.data)) {
          this.revenueTargets = response.data.map((target) => ({
            id: target.id,
            name: target.name,
            year: target.year,
            targetAmount: parseFloat(target.targetAmount) || 0,
            exchangeRate: parseFloat(target.exchangeRate) || 0,
            currencyId: target.currencyId,
            parentMinistryId: target.parentMinistryId,
            chartAccountId: target.chartAccountId,
            currency: target.currency,
            subMinistries: target.subMinistries,
            chartAccount: target.chartAccount,
            remark: target.remark,
            isActive: target.isActive,
            createdAt: target.createdAt,
            updateTimestamp: target.updateTimestamp,
          }))
        } else {
          console.error('Unexpected response structure:', response.data)
          this.revenueTargets = []
        }
      } catch (error) {
        console.error('Error fetching revenue targets:', error)
        this.showToast('Error loading revenue targets', 'error')
        this.revenueTargets = []
      } finally {
        this.loading = false
      }
    },

    applyFilters() {
      let filtered = [...this.revenueTargets]

      if (this.filters.year) {
        filtered = filtered.filter(
          (t) => t.year === parseInt(this.filters.year)
        )
      }

      if (this.filters.name) {
        filtered = filtered.filter((t) =>
          t.name.toLowerCase().includes(this.filters.name.toLowerCase())
        )
      }

      if (this.filters.currencyId) {
        filtered = filtered.filter(
          (t) => t.currencyId === parseInt(this.filters.currencyId)
        )
      }

      if (this.filters.parentMinistryId) {
        filtered = filtered.filter(
          (t) => t.parentMinistryId === parseInt(this.filters.parentMinistryId)
        )
      }

      if (this.filters.chartAccountId) {
        filtered = filtered.filter(
          (t) => t.chartAccountId === parseInt(this.filters.chartAccountId)
        )
      }

      if (this.filters.isActive !== '') {
        filtered = filtered.filter(
          (t) => t.isActive === (this.filters.isActive === 'true')
        )
      }

      this.filteredTargets = filtered
      this.sortData()
      this.pagination.currentPage = 1
      this.calculateSummaryStats()
    },

    resetFilters() {
      this.filters = {
        year: '',
        name: '',
        currencyId: '',
        parentMinistryId: '',
        chartAccountId: '',
        isActive: '',
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
      this.filteredTargets.sort((a, b) => {
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
      const stats = {
        total: { amount: 0, count: 0 },
        active: { amount: 0, count: 0 },
        currentYear: { amount: 0, count: 0 },
      }

      this.filteredTargets.forEach((target) => {
        const amount = parseFloat(target.targetAmount) || 0
        stats.total.amount += amount
        stats.total.count++

        if (target.isActive) {
          stats.active.amount += amount
          stats.active.count++
        }

        if (target.year === this.currentYear) {
          stats.currentYear.amount += amount
          stats.currentYear.count++
        }
      })

      this.summaryStats = stats
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

    // Dialog methods
    async openCreateDialog() {
      this.selectedTarget = null
      this.formLoading = true
      this.showDialog = true

      try {
        await this.ensureRelatedDataLoaded()
      } catch (error) {
        console.error('Error loading form data:', error)
        this.showToast('Failed to load form data', 'error')
      } finally {
        this.formLoading = false
      }
    },

    async editTarget(target) {
      this.selectedTarget = target
      this.formLoading = true
      this.showDialog = true

      try {
        // Load full target details if needed
        const response = await this.$axios.get(`/api/revenue-targets/${target.id}?include=currency,subMinistries,chartAccount`)
        if (response.data) {
          this.selectedTarget = response.data
        }

        await this.ensureRelatedDataLoaded()
      } catch (error) {
        console.error('Error loading target details:', error)
        this.showToast('Failed to load target details', 'error')
      } finally {
        this.formLoading = false
      }
    },

    async onTargetSave(targetData) {
      try {
        this.formLoading = true

        let response
        if (this.selectedTarget && this.selectedTarget.id) {
          response = await this.$axios.put(
            `/api/revenue-targets/${this.selectedTarget.id}`,
            targetData
          )
        } else {
          response = await this.$axios.post('/api/revenue-targets', targetData)
        }

        if (response.data) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success')
          this.closeDialog()

          await this.fetchRevenueTargets()
          this.applyFilters()
        } else {
          throw new Error(response.data?.message || 'Save failed')
        }
      } catch (error) {
        console.error('Error saving target:', error)
        const errorMessage =
          error.response?.data?.message || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ'
        this.showToast(errorMessage, 'error')
      } finally {
        this.formLoading = false
      }
    },

    handleValidationError(message) {
      this.showToast(message, 'error')
    },

    closeDialog() {
      this.showDialog = false
      this.selectedTarget = null
      this.formLoading = false
    },

    // Helper methods
    async ensureRelatedDataLoaded() {
      const promises = []
      
      if (this.currencies.length === 0) {
        promises.push(this.fetchCurrencies())
      }
      
      if (this.ministries.length === 0) {
        promises.push(this.fetchMinistries())
      }
      
      if (this.chartAccounts.length === 0) {
        promises.push(this.fetchChartAccounts())
      }
      
      if (promises.length > 0) {
        await Promise.all(promises)
      }
    },

    // Action methods
    viewDetails(target) {
      this.$router.push(`/revenue-targets/${target.id}`)
    },

    async deactivateTarget(target) {
      if (confirm('ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການປິດໃຊ້ງານເປົ້າໝາຍນີ້?')) {
        try {
          await this.$axios.patch(`/api/revenue-targets/${target.id}/deactivate`)
          this.showToast('ປິດໃຊ້ງານສຳເລັດແລ້ວ', 'success')
          await this.fetchRevenueTargets()
          this.applyFilters()
        } catch (error) {
          console.error('Error deactivating target:', error)
          this.showToast('ການປິດໃຊ້ງານບໍ່ສຳເລັດ', 'error')
        }
      }
    },

    async restoreTarget(target) {
      if (confirm('ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການເປີດໃຊ້ງານເປົ້າໝາຍນີ້?')) {
        try {
          await this.$axios.patch(`/api/revenue-targets/${target.id}/restore`)
          this.showToast('ເປີດໃຊ້ງານສຳເລັດແລ້ວ', 'success')
          await this.fetchRevenueTargets()
          this.applyFilters()
        } catch (error) {
          console.error('Error restoring target:', error)
          this.showToast('ການເປີດໃຊ້ງານບໍ່ສຳເລັດ', 'error')
        }
      }
    },

    async deleteTarget(target) {
      if (confirm('ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລົບເປົ້າໝາຍນີ້? ການກະທຳນີ້ບໍ່ສາມາດຍົກເລີກໄດ້!')) {
        try {
          await this.$axios.delete(`/api/revenue-targets/${target.id}`)
          this.showToast('ລົບສຳເລັດແລ້ວ', 'success')
          await this.fetchRevenueTargets()
          this.applyFilters()
        } catch (error) {
          console.error('Error deleting target:', error)
          this.showToast('ການລົບບໍ່ສຳເລັດ', 'error')
        }
      }
    },

    exportData() {
      const csvData = this.convertToCSV(this.filteredTargets)
      this.downloadCSV(csvData, 'revenue-targets-summary.csv')
    },

    // Utility methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'LAK',
      }).format(amount || 0)
    },

    formatNumber(number) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(number || 0)
    },

    convertToCSV(data) {
      const headers = [
        'ID',
        'Name',
        'Year',
        'Target Amount',
        'Exchange Rate',
        'Currency',
        'Ministry',
        'Chart Account',
        'Status',
        'Remark',
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          [
            row.id,
            `"${row.name}"`,
            row.year,
            row.targetAmount,
            row.exchangeRate,
            row.currency?.code || '',
            `"${row.subMinistries?.ministryNameLao || ''}"`,
            `"${row.chartAccount?.accountCode || ''}"`,
            row.isActive ? 'Active' : 'Inactive',
            `"${row.remark || ''}"`,
          ].join(',')
        ),
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
      }
    },
  },
}
</script>

<style scoped>
.revenue-target-container {
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
  min-width: 150px;
}

.filter-group label {
  font-weight: 500;
  color: #555;
  font-size: 14px;
}

.filter-actions {
  display: flex;
  gap: 8px;
  align-self: flex-end;
}

/* Summary Cards */
.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.summary-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.summary-card:hover {
  transform: translateY(-2px);
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 16px;
}

.card-icon.total {
  background: #e2e3e5;
  color: #383d41;
}

.card-icon.active {
  background: #d4edda;
  color: #155724;
}

.card-icon.amount {
  background: #d1ecf1;
  color: #0c5460;
}

.card-icon.yearly {
  background: #f8d7da;
  color: #721c24;
}

.card-content h3 {
  margin: 0 0 4px 0;
  font-size: 24px;
  font-weight: 700;
}

.card-content p {
  margin: 0;
  color: #666;
  font-size: 14px;
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
  min-width: 1200px;
}

.data-table th,
.data-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
  white-space: nowrap;
}

.data-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #495057;
  position: sticky;
  top: 0;
  z-index: 10;
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

.name-cell {
  font-weight: 600;
  color: #495057;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.amount-cell {
  font-weight: 600;
  color: #28a745;
  text-align: right;
}

.exchange-rate-cell {
  font-weight: 500;
  color: #6c757d;
  text-align: right;
}

.ministry-cell {
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chart-account-cell {
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.remark-cell {
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #6c757d;
  font-size: 13px;
}

.actions-cell {
  display: flex;
  gap: 4px;
  min-width: 200px;
}

/* Status and Year Badges */
.status-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

.status-badge.active {
  background-color: #d4edda;
  color: #155724;
}

.status-badge.inactive {
  background-color: #f8d7da;
  color: #721c24;
}

.year-badge {
  background-color: #e7f3ff;
  color: #0066cc;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.currency-tag {
  background-color: #fff3cd;
  color: #856404;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
}

.ministry-tag {
  background-color: #e2e3e5;
  color: #383d41;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  display: inline-block;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.account-tag {
  background-color: #d1ecf1;
  color: #0c5460;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
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

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
  background-color: transparent;
}

.btn-outline-warning:hover {
  background-color: #ffc107;
  color: #212529;
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
  background-color: transparent;
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: white;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
  background-color: transparent;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
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
  min-width: 150px;
  background-color: white;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.form-control:disabled {
  background-color: #e9ecef;
  opacity: 1;
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.loading-spinner i {
  font-size: 32px;
  color: #007bff;
  margin-bottom: 16px;
  display: block;
}

.loading-spinner p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .filter-row {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .data-table {
    min-width: 1000px;
  }
}

@media (max-width: 768px) {
  .revenue-target-container {
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
    min-width: auto;
  }

  .filter-actions {
    flex-direction: row;
    width: 100%;
  }

  .summary-cards {
    grid-template-columns: 1fr;
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
    min-width: auto;
  }

  .data-table th,
  .data-table td {
    padding: 8px 12px;
    font-size: 13px;
  }

  .name-cell {
    max-width: 120px;
  }

  .ministry-cell {
    max-width: 100px;
  }

  .chart-account-cell {
    max-width: 80px;
  }

  .remark-cell {
    max-width: 100px;
  }
}

@media (max-width: 480px) {
  .summary-card {
    padding: 16px;
  }

  .card-icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
    margin-right: 12px;
  }

  .card-content h3 {
    font-size: 20px;
  }

  .card-content p {
    font-size: 12px;
  }

  .btn {
    padding: 6px 12px;
    font-size: 12px;
  }

  .btn-sm {
    padding: 3px 6px;
    font-size: 11px;
  }

  .data-table {
    min-width: 800px;
  }
}

/* Additional Utility Classes */
.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.d-flex {
  display: flex;
}

.justify-content-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
}

.mb-3 {
  margin-bottom: 1rem;
}

.mt-3 {
  margin-top: 1rem;
}

.p-3 {
  padding: 1rem;
}

/* Hover Effects */
.data-table tbody tr:hover {
  background-color: #f8f9fa;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

/* Animation for smooth transitions */
.summary-card,
.btn,
.form-control {
  transition: all 0.2s ease-in-out;
}

/* Print Styles */
@media print {
  .header-actions,
  .filter-section,
  .actions-cell,
  .pagination-container {
    display: none !important;
  }

  .revenue-target-container {
    padding: 0;
    background-color: white;
  }

  .page-header,
  .table-section {
    box-shadow: none;
    border: 1px solid #dee2e6;
  }

  .data-table {
    min-width: auto;
  }

  .data-table th,
  .data-table td {
    padding: 6px 8px;
    font-size: 12px;
  }
}
</style>