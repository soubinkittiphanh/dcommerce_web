<template>
  <div class="invoice-header-summary-container">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">ລະບົບຈັດການໃບແຈ້ງໜີ້</h1>
        <div class="header-actions">
          <button class="btn btn-primary" @click="openCreateDialog">
            <i class="fas fa-plus"></i>
            ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່
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
            placeholder="ເລກທີໃບແຈ້ງໜີ້, ລູກຄ້າ..."
            @input="applyFilters"
          />
        </div>

        <div class="filter-group">
          <label>ສະຖານະ:</label>
          <select v-model="filters.status" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="draft">ແບບຮ່າງ</option>
            <option value="sent">ສົ່ງແລ້ວ</option>
            <option value="paid">ຈ່າຍແລ້ວ</option>
            <option value="overdue">ເກີນກຳນົດ</option>
            <option value="cancelled">ຍົກເລີກ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ລູກຄ້າ:</label>
          <select v-model="filters.customerId" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option v-for="customer in customers" :key="customer.id" :value="customer.id">
              {{ customer.name }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label>ວັນທີແຈ້ງໜີ້ຈາກ:</label>
          <input
            type="date"
            v-model="filters.dateFrom"
            class="form-control"
            @change="applyFilters"
          />
        </div>

        <div class="filter-group">
          <label>ວັນທີແຈ້ງໜີ້ເຖິງ:</label>
          <input
            type="date"
            v-model="filters.dateTo"
            class="form-control"
            @change="applyFilters"
          />
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
      <!-- Total Invoices Card -->
      <div class="summary-card total-invoices">
        <div class="card-icon total">
          <i class="fas fa-file-invoice"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.total.count }}</h3>
          <p>ລວມໃບແຈ້ງໜີ້ທັງໝົດ</p>
        </div>
      </div>

      <!-- Draft Invoices -->
      <div class="summary-card status-draft">
        <div class="card-icon draft">
          <i class="fas fa-edit"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.draft.count }}</h3>
          <p>ແບບຮ່າງ ({{ summaryStats.draft.percentage }}%)</p>
        </div>
      </div>

      <!-- Sent Invoices -->
      <div class="summary-card status-sent">
        <div class="card-icon sent">
          <i class="fas fa-paper-plane"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.sent.count }}</h3>
          <p>ສົ່ງແລ້ວ ({{ summaryStats.sent.percentage }}%)</p>
        </div>
      </div>

      <!-- Paid Invoices -->
      <div class="summary-card status-paid">
        <div class="card-icon paid">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.paid.count }}</h3>
          <p>ຈ່າຍແລ້ວ ({{ summaryStats.paid.percentage }}%)</p>
        </div>
      </div>

      <!-- Overdue Invoices -->
      <div class="summary-card status-overdue">
        <div class="card-icon overdue">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.overdue.count }}</h3>
          <p>ເກີນກຳນົດ ({{ summaryStats.overdue.percentage }}%)</p>
        </div>
      </div>

      <!-- Total Amount Card -->
      <div class="summary-card amount-stats">
        <div class="card-icon amount">
          <i class="fas fa-dollar-sign"></i>
        </div>
        <div class="card-content">
          <h3>{{ formatCurrency(summaryStats.totalAmount) }}</h3>
          <p>ຍອດລວມທັງໝົດ</p>
          <small class="amount-info">ຈ່າຍແລ້ວ: {{ formatCurrency(summaryStats.paidAmount) }}</small>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="table-section">
      <div class="table-header">
        <div class="table-title">
          <h3>ລາຍການໃບແຈ້ງໜີ້</h3>
          <span class="record-count">{{ filteredInvoices.length }} ລາຍການ</span>
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
              <th @click="sortBy('invoiceNumber')" class="sortable">
                ເລກທີໃບແຈ້ງໜີ້
                <i :class="getSortIcon('invoiceNumber')"></i>
              </th>
              <th @click="sortBy('invoiceDate')" class="sortable">
                ວັນທີແຈ້ງໜີ້
                <i :class="getSortIcon('invoiceDate')"></i>
              </th>
              <th>ລູກຄ້າ</th>
              <th @click="sortBy('dueDate')" class="sortable">
                ວັນທີຄົບກຳນົດ
                <i :class="getSortIcon('dueDate')"></i>
              </th>
              <th @click="sortBy('totalAmount')" class="sortable">
                ຍອດລວມ
                <i :class="getSortIcon('totalAmount')"></i>
              </th>
              <th @click="sortBy('status')" class="sortable">
                ສະຖານະ
                <i :class="getSortIcon('status')"></i>
              </th>
              <th>ຜູ້ສ້າງ</th>
              <th>ຟັງຊັ່ນ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="invoice in paginatedInvoices" :key="invoice.id">
              <td>
                <div class="invoice-number">
                  <strong>{{ invoice.invoiceNumber }}</strong>
                  <div v-if="invoice.description" class="invoice-description">
                    {{ truncateText(invoice.description, 50) }}
                  </div>
                </div>
              </td>
              <td>{{ formatDate(invoice.invoiceDate) }}</td>
              <td>
                <div class="customer-info">
                  <div class="customer-name">
                    <i class="fas fa-user"></i>
                    {{ invoice.customer ? invoice.customer.name : 'N/A' }}
                  </div>
                  <div v-if="invoice.customer && invoice.customer.email" class="customer-email">
                    {{ invoice.customer.email }}
                  </div>
                </div>
              </td>
              <td>
                <span :class="getDueDateClass(invoice.dueDate, invoice.status)">
                  {{ formatDate(invoice.dueDate) }}
                </span>
              </td>
              <td>
                <div class="amount-details">
                  <div class="total-amount">
                    {{ formatCurrency(invoice.totalAmount) }}
                  </div>
                  <div class="amount-breakdown">
                    <small>Net: {{ formatCurrency(invoice.netAmount) }}</small>
                    <small v-if="invoice.taxAmount > 0">Tax: {{ formatCurrency(invoice.taxAmount) }}</small>
                  </div>
                </div>
              </td>
              <td>
                <span :class="['status-badge', invoice.status]">
                  {{ formatStatus(invoice.status) }}
                </span>
              </td>
              <td>
                <div class="maker-info">
                  {{ invoice.maker ? invoice.maker.username : 'N/A' }}
                  <small v-if="invoice.createdAt">{{ formatDate(invoice.createdAt) }}</small>
                </div>
              </td>
              <td class="actions-cell">
                <button
                  class="btn btn-sm btn-outline-primary"
                  @click="viewInvoice(invoice)"
                  title="ເບິ່ງລາຍລະອຽດ"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-info"
                  @click="editInvoice(invoice)"
                  title="ແກ້ໄຂ"
                  :disabled="invoice.status === 'paid'"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  v-if="invoice.status !== 'paid' && invoice.status !== 'cancelled'"
                  class="btn btn-sm btn-outline-success"
                  @click="updateStatus(invoice, 'paid')"
                  title="ຈ່າຍແລ້ວ"
                >
                  <i class="fas fa-check"></i>
                </button>
                <button
                  v-if="invoice.status === 'draft'"
                  class="btn btn-sm btn-outline-warning"
                  @click="updateStatus(invoice, 'sent')"
                  title="ສົ່ງໃບແຈ້ງໜີ້"
                >
                  <i class="fas fa-paper-plane"></i>
                </button>
                <button
                  v-if="invoice.status !== 'paid' && invoice.status !== 'cancelled'"
                  class="btn btn-sm btn-outline-danger"
                  @click="updateStatus(invoice, 'cancelled')"
                  title="ຍົກເລີກ"
                >
                  <i class="fas fa-times"></i>
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

    <!-- Invoice Header Dialog (for Create/Edit) -->
    <client-only>
      <InvoiceHeaderMaintain
        :visible="showEditDialog"
        :invoice="selectedInvoice"
        :customers="customers"
        :currencies="currencies"
        @close="closeEditDialog"
        @save="onInvoiceSave"
      />
    </client-only>

    <!-- Invoice View Dialog -->
    <client-only>
      <InvoiceHeaderView
        :visible="showViewDialog"
        :invoice="selectedInvoice"
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
import InvoiceHeaderMaintain from '~/components/accounting/ar/invoice/maintain'
import InvoiceHeaderView from '~/components/accounting/ar/invoice/view'

export default {
  name: 'InvoiceHeaderSummary',
  components: {
    InvoiceHeaderMaintain,
    InvoiceHeaderView,
  },

  data() {
    return {
      // Dialog visibility states
      showEditDialog: false,
      showViewDialog: false,
      selectedInvoice: null,

      // Data arrays
      invoices: [],
      filteredInvoices: [],
      customers: [],
      currencies: [],

      // Loading states
      loading: false,

      // Filters
      filters: {
        search: '',
        status: '',
        customerId: '',
        dateFrom: '',
        dateTo: '',
      },

      // Sorting
      sort: {
        field: 'invoiceDate',
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
        draft: { count: 0, percentage: 0 },
        sent: { count: 0, percentage: 0 },
        paid: { count: 0, percentage: 0 },
        overdue: { count: 0, percentage: 0 },
        cancelled: { count: 0, percentage: 0 },
        totalAmount: 0,
        paidAmount: 0,
      },
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    paginatedInvoices() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage
      const end = start + this.pagination.perPage
      return this.filteredInvoices.slice(start, end)
    },

    totalPages() {
      return Math.ceil(
        this.filteredInvoices.length / this.pagination.perPage
      )
    },

    paginationInfo() {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.perPage + 1
      const end = Math.min(
        start + this.pagination.perPage - 1,
        this.filteredInvoices.length
      )
      return {
        start,
        end,
        total: this.filteredInvoices.length,
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
    this.fetchInvoices()
    this.fetchCustomers()
    this.fetchCurrencies()
  },

  methods: {
    // Data Loading Methods
    async fetchInvoices() {
      this.loading = true
      try {
        const params = {
          page: 1,
          limit: 1000, // Get all for client-side filtering
          ...this.filters,
        }

        const { data } = await this.$axios.get('/api/ar-invoices', { params })

        if (data && data.success) {
          this.invoices = data.data.invoices || []
        } else {
          this.invoices = []
        }

        this.applyFilters()
        this.calculateSummaryStats()
      } catch (error) {
        console.error('Error fetching invoices:', error)
        this.showToast('Error loading invoice data', 'error')
        this.invoices = []
      } finally {
        this.loading = false
      }
    },

    async fetchCustomers() {
      
      try {
        const { data } = await this.$axios.get('/api/client/find')
        console.info(`Customer len ${JSON.stringify(data)}`)
        if (data) {
          this.customers = data || []
        }
      } catch (error) {
        console.error('Error fetching customers:', error)
      }
    },

    async fetchCurrencies() {
      try {
        const { data } = await this.$axios.get('/api/currency/find')
        if (data) {
          this.currencies = data || []
        }
      } catch (error) {
        console.error('Error fetching currencies:', error)
      }
    },

    // Dialog Control Methods
    async openCreateDialog() {
      this.selectedInvoice = null
      this.showEditDialog = true
    },

    async editInvoice(invoice) {
      this.selectedInvoice = invoice
      this.showEditDialog = true
    },

    viewInvoice(invoice) {
      this.selectedInvoice = invoice
      this.showViewDialog = true
    },

    closeEditDialog() {
      this.showEditDialog = false
      this.selectedInvoice = null
    },

    closeViewDialog() {
      this.showViewDialog = false
      this.selectedInvoice = null
    },

    // Save Handler
    async onInvoiceSave(invoiceData) {
      try {
        this.loading = true

        let response
        if (this.selectedInvoice && this.selectedInvoice.id) {
          response = await this.$axios.put(
            `/api/ar-invoices/${this.selectedInvoice.id}`,
            invoiceData
          )
        } else {
          response = await this.$axios.post('/api/ar-invoices', invoiceData)
        }

        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success')
          this.closeEditDialog()
          await this.fetchInvoices()
        } else {
          throw new Error(response.data?.message || 'Save failed')
        }
      } catch (error) {
        console.error('Error saving invoice:', error)
        const errorMessage =
          error.response?.data?.message || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ'
        this.showToast(errorMessage, 'error')
      } finally {
        this.loading = false
      }
    },

    // Status Update Handler
    async updateStatus(invoice, newStatus) {
      try {
        this.loading = true

        const response = await this.$axios.patch(
          `/api/ar-invoices/${invoice.id}/status`,
          { status: newStatus }
        )

        if (response.data && response.data.success) {
          this.showToast('ອັບເດດສະຖານະສຳເລັດແລ້ວ', 'success')
          await this.fetchInvoices()
        } else {
          throw new Error(response.data?.message || 'Status update failed')
        }
      } catch (error) {
        console.error('Error updating status:', error)
        const errorMessage =
          error.response?.data?.message || 
          error.message || 
          'ອັບເດດສະຖານະບໍ່ສຳເລັດ'
        this.showToast(errorMessage, 'error')
      } finally {
        this.loading = false
      }
    },

    // Filter and Search Methods
    applyFilters() {
      let filtered = [...this.invoices]

      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        filtered = filtered.filter(
          (invoice) =>
            invoice.invoiceNumber.toLowerCase().includes(search) ||
            (invoice.description && invoice.description.toLowerCase().includes(search)) ||
            (invoice.customer && invoice.customer.name.toLowerCase().includes(search))
        )
      }

      // Status filter
      if (this.filters.status) {
        filtered = filtered.filter(
          (invoice) => invoice.status === this.filters.status
        )
      }

      // Customer filter
      if (this.filters.customerId) {
        filtered = filtered.filter(
          (invoice) => invoice.customerId == this.filters.customerId
        )
      }

      // Date range filter
      if (this.filters.dateFrom || this.filters.dateTo) {
        filtered = filtered.filter((invoice) => {
          const invoiceDate = new Date(invoice.invoiceDate)
          const dateFrom = this.filters.dateFrom ? new Date(this.filters.dateFrom) : null
          const dateTo = this.filters.dateTo ? new Date(this.filters.dateTo) : null
          
          if (dateFrom && invoiceDate < dateFrom) return false
          if (dateTo && invoiceDate > dateTo) return false
          return true
        })
      }

      this.filteredInvoices = filtered
      this.sortData()
      this.pagination.currentPage = 1
      this.calculateSummaryStats()
    },

    resetFilters() {
      this.filters = {
        search: '',
        status: '',
        customerId: '',
        dateFrom: '',
        dateTo: '',
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
      this.filteredInvoices.sort((a, b) => {
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
      const total = this.filteredInvoices.length
      const draft = this.filteredInvoices.filter(i => i.status === 'draft').length
      const sent = this.filteredInvoices.filter(i => i.status === 'sent').length
      const paid = this.filteredInvoices.filter(i => i.status === 'paid').length
      const overdue = this.filteredInvoices.filter(i => i.status === 'overdue').length
      const cancelled = this.filteredInvoices.filter(i => i.status === 'cancelled').length
      
      const totalAmount = this.filteredInvoices.reduce((sum, inv) => sum + parseFloat(inv.totalAmount || 0), 0)
      const paidAmount = this.filteredInvoices
        .filter(i => i.status === 'paid')
        .reduce((sum, inv) => sum + parseFloat(inv.totalAmount || 0), 0)

      this.summaryStats = {
        total: { count: total },
        draft: { 
          count: draft, 
          percentage: total > 0 ? Math.round((draft / total) * 100) : 0
        },
        sent: { 
          count: sent, 
          percentage: total > 0 ? Math.round((sent / total) * 100) : 0
        },
        paid: { 
          count: paid, 
          percentage: total > 0 ? Math.round((paid / total) * 100) : 0
        },
        overdue: { 
          count: overdue, 
          percentage: total > 0 ? Math.round((overdue / total) * 100) : 0
        },
        cancelled: { 
          count: cancelled, 
          percentage: total > 0 ? Math.round((cancelled / total) * 100) : 0
        },
        totalAmount,
        paidAmount,
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
      const csvData = this.convertToCSV(this.filteredInvoices)
      this.downloadCSV(csvData, 'invoices-summary.csv')
    },

    convertToCSV(data) {
      const headers = [
        'Invoice Number',
        'Invoice Date',
        'Due Date',
        'Customer',
        'Total Amount',
        'Tax Amount',
        'Net Amount',
        'Status',
        'Description',
        'Created Date',
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          [
            `"${row.invoiceNumber}"`,
            row.invoiceDate,
            row.dueDate || '',
            `"${row.customer ? row.customer.name : ''}"`,
            row.totalAmount,
            row.taxAmount,
            row.netAmount,
            row.status,
            `"${(row.description || '').replace(/"/g, '""')}"`,
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

    formatCurrency(amount) {
      if (!amount) return '0.00'
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    },

    formatStatus(status) {
      const statusLabels = {
        draft: 'ແບບຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ',
      }
      return statusLabels[status] || status
    },

    getDueDateClass(dueDate, status) {
      if (!dueDate || status === 'paid' || status === 'cancelled') return ''
      
      const today = new Date()
      const due = new Date(dueDate)
      
      if (due < today && status !== 'paid') return 'overdue-date'
      if (due <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) return 'due-soon'
      return ''
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
/* Same CSS classes as the job advertise component, adapted for invoices */
.invoice-header-summary-container {
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

/* Total Invoices Card */
.summary-card.total-invoices {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.summary-card.total-invoices .card-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Status Cards */
.summary-card.status-draft {
  border-left: 4px solid #6c757d;
}

.summary-card.status-sent {
  border-left: 4px solid #17a2b8;
}

.summary-card.status-paid {
  border-left: 4px solid #28a745;
}

.summary-card.status-overdue {
  border-left: 4px solid #dc3545;
}

.summary-card.amount-stats {
  border-left: 4px solid #ffc107;
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

.card-icon.draft {
  background: #f8f9fa;
  color: #6c757d;
}

.card-icon.sent {
  background: #d1ecf1;
  color: #17a2b8;
}

.card-icon.paid {
  background: #d4edda;
  color: #28a745;
}

.card-icon.overdue {
  background: #f8d7da;
  color: #dc3545;
}

.card-icon.amount {
  background: #fff3cd;
  color: #ffc107;
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

.amount-info {
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

/* Invoice Number Cell */
.invoice-number strong {
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.invoice-description {
  font-size: 12px;
  color: #666;
}

/* Customer Info */
.customer-info .customer-name {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: #495057;
  margin-bottom: 2px;
}

.customer-info .customer-email {
  font-size: 12px;
  color: #666;
  margin-left: 16px;
}

/* Amount Details */
.amount-details .total-amount {
  font-weight: 600;
  color: #495057;
  margin-bottom: 2px;
}

.amount-breakdown {
  font-size: 11px;
  color: #666;
}

.amount-breakdown small {
  display: block;
}

/* Due Date Classes */
.overdue-date {
  color: #dc3545;
  font-weight: 600;
}

.due-soon {
  color: #ffc107;
  font-weight: 500;
}

/* Status Badge */
.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.draft {
  background-color: #f8f9fa;
  color: #6c757d;
}

.status-badge.sent {
  background-color: #d1ecf1;
  color: #0c5460;
}

.status-badge.paid {
  background-color: #d4edda;
  color: #155724;
}

.status-badge.overdue {
  background-color: #f8d7da;
  color: #721c24;
}

.status-badge.cancelled {
  background-color: #e2e3e5;
  color: #383d41;
}

/* Maker Info */
.maker-info {
  font-size: 14px;
  color: #495057;
}

.maker-info small {
  display: block;
  font-size: 12px;
  color: #666;
  margin-top: 2px;
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
  .invoice-header-summary-container {
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