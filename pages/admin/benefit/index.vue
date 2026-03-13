<template>
  <div class="benefit-summary-container">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">ລະບົບຈັດການສະຫວັດດີການ</h1>
        <div class="header-actions">
          <button class="btn btn-primary" @click="openCreateDialog">
            <i class="fas fa-plus"></i>
            ເພີ່ມສະຫວັດດີການໃໝ່
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
          <label>ຄົ້ນຫາ:</label>
          <input
            type="text"
            v-model="filters.search"
            class="form-control"
            placeholder="ຊື່ສະຫວັດດີການ, ຄຳອະທິບາຍ..."
            @input="applyFilters"
          />
        </div>

        <div class="filter-group">
          <label>ປະເພດ:</label>
          <select v-model="filters.type" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="salary">ເງິນເດືອນ</option>
            <option value="allowance">ເງິນອຸດໜູນ</option>
            <option value="insurance">ປະກັນໄພ</option>
            <option value="accommodation">ທີ່ພັກ</option>
            <option value="transportation">ການເດີນທາງ</option>
            <option value="other">ອື່ນໆ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ສະຖານະ:</label>
          <select v-model="filters.isActive" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="true">ເປີດໃຊ້ງານ</option>
            <option value="false">ປິດໃຊ້ງານ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ສະກຸນເງິນ:</label>
          <select v-model="filters.currency" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="LAK">ກີບ (LAK)</option>
            <option value="THB">ບາດ (THB)</option>
            <option value="USD">ໂດລາ (USD)</option>
            <option value="KRW">ວອນ (KRW)</option>
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
      <!-- Total Benefits Card -->
      <div class="summary-card total-benefits">
        <div class="card-icon total">
          <i class="fas fa-gift"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.total.count }}</h3>
          <p>ລວມສະຫວັດດີການທັງໝົດ</p>
        </div>
      </div>

      <!-- Active Benefits -->
      <div class="summary-card status-active">
        <div class="card-icon active">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.active.count }}</h3>
          <p>ເປີດໃຊ້ງານ ({{ summaryStats.active.percentage }}%)</p>
        </div>
      </div>

      <!-- Inactive Benefits -->
      <div class="summary-card status-inactive">
        <div class="card-icon inactive">
          <i class="fas fa-times-circle"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.inactive.count }}</h3>
          <p>ປິດໃຊ້ງານ ({{ summaryStats.inactive.percentage }}%)</p>
        </div>
      </div>

      <!-- Types Distribution -->
      <div class="summary-card type-stats">
        <div class="card-icon types">
          <i class="fas fa-layer-group"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.types.count }}</h3>
          <p>ປະເພດສະຫວັດດີການ</p>
          <small class="type-info">{{ summaryStats.types.top }}</small>
        </div>
      </div>

      <!-- Total Value -->
      <div class="summary-card value-stats">
        <div class="card-icon value">
          <i class="fas fa-coins"></i>
        </div>
        <div class="card-content">
          <h3>{{ formatCurrency(summaryStats.totalValue.amount, summaryStats.totalValue.currency) }}</h3>
          <p>ມູນຄ່າລວມ</p>
          <small class="value-info">ອີງຕາມສະກຸນເງິນຕ່າງໆ</small>
        </div>
      </div>

      <!-- Job Advertisements -->
      <div class="summary-card job-stats">
        <div class="card-icon jobs">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.jobAdvertises.count }}</h3>
          <p>ການປະກາດຫາງານ</p>
          <small class="job-info">ທີ່ມີສະຫວັດດີການ</small>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="table-section">
      <div class="table-header">
        <div class="table-title">
          <h3>ລາຍການສະຫວັດດີການ</h3>
          <span class="record-count">{{ filteredBenefits.length }} ລາຍການ</span>
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
                ຊື່ສະຫວັດດີການ
                <i :class="getSortIcon('name')"></i>
              </th>
              <th @click="sortBy('type')" class="sortable">
                ປະເພດ
                <i :class="getSortIcon('type')"></i>
              </th>
              <th>ຄຳອະທິບາຍ</th>
              <th @click="sortBy('value')" class="sortable">
                ມູນຄ່າ
                <i :class="getSortIcon('value')"></i>
              </th>
              <th>ການປະກາດຫາງານ</th>
              <th @click="sortBy('isActive')" class="sortable">
                ສະຖານະ
                <i :class="getSortIcon('isActive')"></i>
              </th>
              <th @click="sortBy('createdAt')" class="sortable">
                ວັນທີສ້າງ
                <i :class="getSortIcon('createdAt')"></i>
              </th>
              <th>ຟັງຊັ່ນ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="benefit in paginatedBenefits" :key="benefit.id">
              <td>{{ benefit.id }}</td>
              <td>
                <div class="benefit-name">
                  <strong>{{ benefit.name }}</strong>
                  <div v-if="benefit.notes" class="benefit-notes">
                    <i class="fas fa-sticky-note"></i>
                    {{ truncateText(benefit.notes, 30) }}
                  </div>
                </div>
              </td>
              <td>
                <span :class="['type-badge', benefit.type]">
                  <i :class="getTypeIcon(benefit.type)"></i>
                  {{ formatType(benefit.type) }}
                </span>
              </td>
              <td>
                <div class="description-cell">
                  {{ truncateText(benefit.description, 60) }}
                </div>
              </td>
              <td>
                <div class="value-cell">
                  <div v-if="benefit.value" class="value-amount">
                    <strong>{{ formatCurrency(benefit.value, benefit.currency) }}</strong>
                  </div>
                  <div v-else class="no-value">
                    <i class="fas fa-minus"></i>
                    ບໍ່ລະບຸ
                  </div>
                </div>
              </td>
              <td>
                <div class="job-info">
                  <div v-if="benefit.jobAdvertise" class="job-link">
                    <i class="fas fa-briefcase"></i>
                    {{ truncateText(benefit.jobAdvertise.title, 25) }}
                  </div>
                  <div v-else class="no-job">
                    <i class="fas fa-minus"></i>
                    ບໍ່ໄດ້ກຳນົດ
                  </div>
                </div>
              </td>
              <td>
                <span :class="['status-badge', benefit.isActive ? 'active' : 'inactive']">
                  <i :class="benefit.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
                  {{ benefit.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ' }}
                </span>
              </td>
              <td>{{ formatDate(benefit.createdAt) }}</td>
              <td class="actions-cell">
                <button
                  class="btn btn-sm btn-outline-primary"
                  @click="viewBenefit(benefit)"
                  title="ເບິ່ງລາຍລະອຽດ"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-info"
                  @click="editBenefit(benefit)"
                  title="ແກ້ໄຂ"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  v-if="benefit.isActive"
                  class="btn btn-sm btn-outline-warning"
                  @click="deactivateBenefit(benefit)"
                  title="ປິດໃຊ້ງານ"
                >
                  <i class="fas fa-pause"></i>
                </button>
                <button
                  v-else
                  class="btn btn-sm btn-outline-success"
                  @click="activateBenefit(benefit)"
                  title="ເປີດໃຊ້ງານ"
                >
                  <i class="fas fa-play"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="deleteBenefit(benefit)"
                  title="ລຶບ"
                >
                  <i class="fas fa-trash"></i>
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

    <!-- Benefit Dialog (for Create/Edit) -->
    <client-only>
      <BenefitDialog
        :visible="showEditDialog"
        :benefit="selectedBenefit"
        @close="closeEditDialog"
        @save="onBenefitSave"
      />
    </client-only>

    <!-- Benefit View Dialog -->
    <client-only>
      <BenefitViewDialog
        :visible="showViewDialog"
        :benefit="selectedBenefit"
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
import BenefitDialog from '~/components/benefit/maintain'
import BenefitViewDialog from '~/components/benefit/view'

export default {
  name: 'BenefitSummary',
  components: {
    BenefitDialog,
    BenefitViewDialog,
  },

  data() {
    return {
      // Dialog visibility states
      showEditDialog: false,
      showViewDialog: false,
      showStatusDialog: false,
      selectedBenefit: null,
      statusAction: '', // 'activate', 'deactivate', 'delete'

      // Data arrays
      benefits: [],
      filteredBenefits: [],

      // Loading states
      loading: false,

      // Filters
      filters: {
        search: '',
        type: '',
        isActive: '',
        currency: '',
      },

      // Sorting
      sort: {
        field: 'createdAt',
        direction: 'desc',
      },

      // Pagination
      pagination: {
        currentPage: 1,
        perPage: 25,
      },

      // Summary statistics
      summaryStats: {
        total: { count: 0 },
        active: { count: 0, percentage: 0 },
        inactive: { count: 0, percentage: 0 },
        types: { count: 0, top: '' },
        totalValue: { amount: 0, currency: 'LAK' },
        jobAdvertises: { count: 0 },
      },
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    paginatedBenefits() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage
      const end = start + this.pagination.perPage
      return this.filteredBenefits.slice(start, end)
    },

    totalPages() {
      return Math.ceil(
        this.filteredBenefits.length / this.pagination.perPage
      )
    },

    paginationInfo() {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.perPage + 1
      const end = Math.min(
        start + this.pagination.perPage - 1,
        this.filteredBenefits.length
      )
      return {
        start,
        end,
        total: this.filteredBenefits.length,
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
    this.fetchBenefits()
  },

  methods: {
    // Data Loading Methods
    async fetchBenefits() {
      this.loading = true
      try {
        const params = {
          page: 1,
          limit: 1000, // Get all for client-side filtering
          ...this.filters,
        }

        const { data } = await this.$axios.get('/api/benefits', { params })

        if (data && data.success) {
          this.benefits = data.data || []
        } else {
          this.benefits = []
        }

        this.applyFilters()
        this.calculateSummaryStats()
      } catch (error) {
        console.error('Error fetching benefits:', error)
        this.showToast('Error loading benefit data', 'error')
        this.benefits = []
      } finally {
        this.loading = false
      }
    },

    // Dialog Control Methods
    async openCreateDialog() {
      this.selectedBenefit = null
      this.showEditDialog = true
    },

    async editBenefit(benefit) {
      this.selectedBenefit = benefit
      this.showEditDialog = true
    },

    viewBenefit(benefit) {
      this.selectedBenefit = benefit
      this.showViewDialog = true
    },

    activateBenefit(benefit) {
      this.selectedBenefit = benefit
      this.statusAction = 'activate'
      this.showStatusDialog = true
    },

    deactivateBenefit(benefit) {
      this.selectedBenefit = benefit
      this.statusAction = 'deactivate'
      this.showStatusDialog = true
    },

    deleteBenefit(benefit) {
      this.selectedBenefit = benefit
      this.statusAction = 'delete'
      this.showStatusDialog = true
    },

    closeEditDialog() {
      this.showEditDialog = false
      this.selectedBenefit = null
    },

    closeViewDialog() {
      this.showViewDialog = false
      this.selectedBenefit = null
    },

    closeStatusDialog() {
      this.showStatusDialog = false
      this.selectedBenefit = null
      this.statusAction = ''
    },

    // Save Handler
    async onBenefitSave(benefitData) {
      try {
        this.loading = true

        let response
        if (this.selectedBenefit && this.selectedBenefit.id) {
          response = await this.$axios.put(
            `/api/benefits/${this.selectedBenefit.id}`,
            benefitData
          )
        } else {
          response = await this.$axios.post('/api/benefits', benefitData)
        }

        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success')
          this.closeEditDialog()
          await this.fetchBenefits()
        } else {
          throw new Error(response.data?.message || 'Save failed')
        }
      } catch (error) {
        console.error('Error saving benefit:', error)
        const errorMessage =
          error.response?.data?.message || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ'
        this.showToast(errorMessage, 'error')
      } finally {
        this.loading = false
      }
    },

    // Status Update Handler
    async onStatusUpdate(updateData) {
      try {
        this.loading = true

        let response
        if (this.statusAction === 'delete') {
          response = await this.$axios.delete(
            `/api/benefits/${this.selectedBenefit.id}`
          )
        } else {
          response = await this.$axios.patch(
            `/api/benefits/${this.selectedBenefit.id}/status`,
            updateData
          )
        }

        if (response.data && response.data.success) {
          this.showToast('ອັບເດດສຳເລັດແລ້ວ', 'success')
          this.closeStatusDialog()
          await this.fetchBenefits()
        } else {
          throw new Error(response.data?.message || 'Update failed')
        }
      } catch (error) {
        console.error('Error updating benefit:', error)
        const errorMessage =
          error.response?.data?.message || 
          error.message || 
          'ອັບເດດບໍ່ສຳເລັດ'
        this.showToast(errorMessage, 'error')
      } finally {
        this.loading = false
      }
    },

    // Filter and Search Methods
    applyFilters() {
      let filtered = [...this.benefits]

      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        filtered = filtered.filter(
          (benefit) =>
            benefit.name.toLowerCase().includes(search) ||
            (benefit.description && benefit.description.toLowerCase().includes(search)) ||
            (benefit.notes && benefit.notes.toLowerCase().includes(search))
        )
      }

      // Type filter
      if (this.filters.type) {
        filtered = filtered.filter(
          (benefit) => benefit.type === this.filters.type
        )
      }

      // Status filter
      if (this.filters.isActive !== '') {
        const isActive = this.filters.isActive === 'true'
        filtered = filtered.filter(
          (benefit) => benefit.isActive === isActive
        )
      }

      // Currency filter
      if (this.filters.currency) {
        filtered = filtered.filter(
          (benefit) => benefit.currency === this.filters.currency
        )
      }

      this.filteredBenefits = filtered
      this.sortData()
      this.pagination.currentPage = 1
      this.calculateSummaryStats()
    },

    resetFilters() {
      this.filters = {
        search: '',
        type: '',
        isActive: '',
        currency: '',
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
  middleware: 'auths',
    sortData() {
      this.filteredBenefits.sort((a, b) => {
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
      const total = this.filteredBenefits.length
      const active = this.filteredBenefits.filter(b => b.isActive).length
      const inactive = this.filteredBenefits.filter(b => !b.isActive).length
      
      // Count types
      const types = [...new Set(this.filteredBenefits.map(b => b.type))]
      const typeCount = {}
      this.filteredBenefits.forEach(b => {
        typeCount[b.type] = (typeCount[b.type] || 0) + 1
      })
      const topType = Object.keys(typeCount).reduce((a, b) => 
        typeCount[a] > typeCount[b] ? a : b, ''
      )
      
      // Calculate total value (grouped by currency)
      const totalValue = this.filteredBenefits
        .filter(b => b.value)
        .reduce((sum, b) => sum + parseFloat(b.value || 0), 0)
      
      // Count unique job advertisements
      const jobAdvertises = [...new Set(
        this.filteredBenefits
          .filter(b => b.jobAdvertiseId)
          .map(b => b.jobAdvertiseId)
      )]

      this.summaryStats = {
        total: { count: total },
        active: { 
          count: active, 
          percentage: total > 0 ? Math.round((active / total) * 100) : 0
        },
        inactive: { 
          count: inactive, 
          percentage: total > 0 ? Math.round((inactive / total) * 100) : 0
        },
        types: { 
          count: types.length,
          top: topType ? `${this.formatType(topType)} (${typeCount[topType]})` : ''
        },
        totalValue: { 
          amount: totalValue,
          currency: 'LAK'
        },
        jobAdvertises: { count: jobAdvertises.length },
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

    // Export
    exportData() {
      const csvData = this.convertToCSV(this.filteredBenefits)
      this.downloadCSV(csvData, 'benefits-summary.csv')
    },

    convertToCSV(data) {
      const headers = [
        'ID',
        'Name',
        'Type',
        'Description',
        'Value',
        'Currency',
        'Status',
        'Job Advertisement',
        'Notes',
        'Created Date',
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          [
            row.id,
            `"${row.name}"`,
            row.type,
            `"${(row.description || '').replace(/"/g, '""')}"`,
            row.value || '',
            row.currency || '',
            row.isActive ? 'Active' : 'Inactive',
            row.jobAdvertise ? `"${row.jobAdvertise.title}"` : '',
            `"${(row.notes || '').replace(/"/g, '""')}"`,
            this.formatDate(row.createdAt),
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

    // Utility methods
    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    formatType(type) {
      const typeLabels = {
        salary: 'ເງິນເດືອນ',
        allowance: 'ເງິນອຸດໜູນ',
        insurance: 'ປະກັນໄພ',
        accommodation: 'ທີ່ພັກ',
        transportation: 'ການເດີນທາງ',
        other: 'ອື່ນໆ',
      }
      return typeLabels[type] || type
    },

    getTypeIcon(type) {
      const typeIcons = {
        salary: 'fas fa-money-bill-wave',
        allowance: 'fas fa-hand-holding-usd',
        insurance: 'fas fa-shield-alt',
        accommodation: 'fas fa-home',
        transportation: 'fas fa-bus',
        other: 'fas fa-ellipsis-h',
      }
      return typeIcons[type] || 'fas fa-gift'
    },

    formatCurrency(value, currency = 'LAK') {
      if (!value) return '-'
      
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })
      
      try {
        return formatter.format(value)
      } catch (e) {
        return `${Number(value).toLocaleString()} ${currency}`
      }
    },

    truncateText(text, length) {
      if (!text) return ''
      return text.length > length ? text.substring(0, length) + '...' : text
    },

    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`)
      if (this.$toast) {
        this.$toast[type](message)
      } else {
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
.benefit-summary-container {
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

/* Total Benefits Card */
.summary-card.total-benefits {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: white;
  border: none;
}

.summary-card.total-benefits .card-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Status Cards */
.summary-card.status-active {
  border-left: 4px solid #10b981;
}

.summary-card.status-inactive {
  border-left: 4px solid #ef4444;
}

/* Type and Value Cards */
.summary-card.type-stats {
  border-left: 4px solid #f59e0b;
}

.summary-card.value-stats {
  border-left: 4px solid #3b82f6;
}

.summary-card.job-stats {
  border-left: 4px solid #6366f1;
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

.card-icon.active {
  background: #d1fae5;
  color: #10b981;
}

.card-icon.inactive {
  background: #fee2e2;
  color: #ef4444;
}

.card-icon.types {
  background: #fef3c7;
  color: #f59e0b;
}

.card-icon.value {
  background: #dbeafe;
  color: #3b82f6;
}

.card-icon.jobs {
  background: #e0e7ff;
  color: #6366f1;
}

.card-content {
  flex: 1;
  min-width: 0;
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

.type-info, .value-info, .job-info {
  font-size: 12px;
  opacity: 0.8;
  margin-top: 4px;
  display: block;
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

/* Benefit Name Cell */
.benefit-name strong {
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.benefit-notes {
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
}

.benefit-notes i {
  color: #fbbf24;
}

/* Type Badge */
.type-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.type-badge.salary {
  background-color: #dcfce7;
  color: #16a34a;
}

.type-badge.allowance {
  background-color: #dbeafe;
  color: #2563eb;
}

.type-badge.insurance {
  background-color: #f3e8ff;
  color: #9333ea;
}

.type-badge.accommodation {
  background-color: #fef3c7;
  color: #d97706;
}

.type-badge.transportation {
  background-color: #e0f2fe;
  color: #0891b2;
}

.type-badge.other {
  background-color: #f1f5f9;
  color: #64748b;
}

/* Description Cell */
.description-cell {
  max-width: 200px;
  font-size: 12px;
  color: #666;
  line-height: 1.4;
}

/* Value Cell */
.value-cell {
  text-align: right;
}

.value-amount strong {
  color: #059669;
  font-size: 14px;
}

.no-value {
  color: #9ca3af;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
}

/* Job Info */
.job-link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #3b82f6;
  font-size: 12px;
  cursor: pointer;
}

.job-link:hover {
  text-decoration: underline;
}

.no-job {
  color: #9ca3af;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Status Badge */
.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.status-badge.active {
  background-color: #d1fae5;
  color: #065f46;
}

.status-badge.inactive {
  background-color: #fee2e2;
  color: #dc2626;
}

.actions-cell {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
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
  background-color: #8b5cf6;
  color: white;
  border-color: #8b5cf6;
}

.btn-primary:hover:not(:disabled) {
  background-color: #7c3aed;
  border-color: #7c3aed;
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
  color: #8b5cf6;
  border-color: #8b5cf6;
  background-color: transparent;
}

.btn-outline-primary:hover {
  background-color: #8b5cf6;
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

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
  background-color: transparent;
}

.btn-outline-success:hover {
  background-color: #28a745;
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
}

.form-control:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.25);
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
  color: #8b5cf6;
  margin-bottom: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .benefit-summary-container {
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