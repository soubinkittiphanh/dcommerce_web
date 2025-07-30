<template>
  <div class="receive-header-summary-container">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">ລະບົບຈັດການການຮັບຊຳລະ</h1>
        <div class="header-actions">
          <button class="btn btn-primary" @click="openCreateDialog">
            <i class="fas fa-plus"></i>
            ເພີ່ມການຮັບຊຳລະໃໝ່
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
            placeholder="ເລກທີໃບຮັບ, ເລກອ້າງອີງ..."
            @input="applyFilters"
          />
        </div>

        <div class="filter-group">
          <label>ວິທີຈ່າຍ:</label>
          <select v-model="filters.paymentMethod" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="cash">ເງິນສົດ</option>
            <option value="check">ເຊັກ</option>
            <option value="bank_transfer">ໂອນເງິນທະນາຄານ</option>
            <option value="credit_card">ບັດເຄຣດິດ</option>
            <option value="other">ອື່ນໆ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ໃບແຈ້ງໜີ້:</label>
          <select v-model="filters.invoiceHeaderId" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option v-for="invoice in invoices" :key="invoice.id" :value="invoice.id">
              {{ invoice.invoiceNumber }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label>ວັນທີບັນທຶກຈາກ:</label>
          <input
            type="date"
            v-model="filters.bookingDateFrom"
            class="form-control"
            @change="applyFilters"
          />
        </div>

        <div class="filter-group">
          <label>ວັນທີບັນທຶກເຖິງ:</label>
          <input
            type="date"
            v-model="filters.bookingDateTo"
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
      <!-- Total Receipts Card -->
      <div class="summary-card total-receipts">
        <div class="card-icon total">
          <i class="fas fa-receipt"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.total.count }}</h3>
          <p>ລວມການຮັບຊຳລະທັງໝົດ</p>
        </div>
      </div>

      <!-- Cash Payments -->
      <div class="summary-card payment-cash">
        <div class="card-icon cash">
          <i class="fas fa-money-bill-wave"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.cash.count }}</h3>
          <p>ເງິນສົດ ({{ summaryStats.cash.percentage }}%)</p>
          <small class="amount-info">{{ formatCurrency(summaryStats.cash.amount) }}</small>
        </div>
      </div>

      <!-- Bank Transfer -->
      <div class="summary-card payment-transfer">
        <div class="card-icon transfer">
          <i class="fas fa-university"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.bankTransfer.count }}</h3>
          <p>ໂອນເງິນທະນາຄານ ({{ summaryStats.bankTransfer.percentage }}%)</p>
          <small class="amount-info">{{ formatCurrency(summaryStats.bankTransfer.amount) }}</small>
        </div>
      </div>

      <!-- Check Payments -->
      <div class="summary-card payment-check">
        <div class="card-icon check">
          <i class="fas fa-money-check"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.check.count }}</h3>
          <p>ເຊັກ ({{ summaryStats.check.percentage }}%)</p>
          <small class="amount-info">{{ formatCurrency(summaryStats.check.amount) }}</small>
        </div>
      </div>

      <!-- Credit Card */
      <div class="summary-card payment-card">
        <div class="card-icon card">
          <i class="fas fa-credit-card"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.creditCard.count }}</h3>
          <p>ບັດເຄຣດິດ ({{ summaryStats.creditCard.percentage }}%)</p>
          <small class="amount-info">{{ formatCurrency(summaryStats.creditCard.amount) }}</small>
        </div>
      </div>

      Total Amount Card -->
      <div class="summary-card amount-stats">
        <div class="card-icon amount">
          <i class="fas fa-dollar-sign"></i>
        </div>
        <div class="card-content">
          <h3>{{ formatCurrency(summaryStats.totalAmount) }}</h3>
          <p>ຍອດຮັບຊຳລະລວມ</p>
          <small class="amount-info">ສະເລ່ຍ: {{ formatCurrency(summaryStats.averageAmount) }}</small>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="table-section">
      <div class="table-header">
        <div class="table-title">
          <h3>ລາຍການການຮັບຊຳລະ</h3>
          <span class="record-count">{{ filteredReceipts.length }} ລາຍການ</span>
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
              <th @click="sortBy('receiptNumber')" class="sortable">
                ເລກທີໃບຮັບ
                <i :class="getSortIcon('receiptNumber')"></i>
              </th>
              <th @click="sortBy('bookingDate')" class="sortable">
                ວັນທີບັນທຶກ
                <i :class="getSortIcon('bookingDate')"></i>
              </th>
              <th @click="sortBy('receivedDate')" class="sortable">
                ວັນທີຮັບເງິນ
                <i :class="getSortIcon('receivedDate')"></i>
              </th>
              <th>ໃບແຈ້ງໜີ້</th>
              <th @click="sortBy('totalReceivedAmount')" class="sortable">
                ຍອດເງິນ
                <i :class="getSortIcon('totalReceivedAmount')"></i>
              </th>
              <th @click="sortBy('paymentMethod')" class="sortable">
                ວິທີຈ່າຍ
                <i :class="getSortIcon('paymentMethod')"></i>
              </th>
              <th>ເລກອ້າງອີງ</th>
              <th>ຜູ້ບັນທຶກ</th>
              <th>ຟັງຊັ່ນ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="receipt in paginatedReceipts" :key="receipt.id">
              <td>
                <div class="receipt-number">
                  <strong>{{ receipt.receiptNumber }}</strong>
                  <div v-if="receipt.notes" class="receipt-notes">
                    {{ truncateText(receipt.notes, 50) }}
                  </div>
                </div>
              </td>
              <td>{{ formatDate(receipt.bookingDate) }}</td>
              <td>{{ formatDate(receipt.receivedDate) }}</td>
              <td>
                <div class="invoice-info">
                  <div class="invoice-number">
                    <i class="fas fa-file-invoice"></i>
                    {{ receipt.invoiceHeader ? receipt.invoiceHeader.invoiceNumber : 'N/A' }}
                  </div>
                  <div v-if="receipt.invoiceHeader && receipt.invoiceHeader.customer" class="customer-name">
                    {{ receipt.invoiceHeader.customer.name }}
                  </div>
                </div>
              </td>
              <td>
                <div class="amount-details">
                  <div class="received-amount">
                    {{ formatCurrency(receipt.totalReceivedAmount) }}
                  </div>
                  <div v-if="receipt.receiveLines && receipt.receiveLines.length > 0" class="allocation-info">
                    <small>{{ receipt.receiveLines.length }} ການແບ່ງປັນ</small>
                  </div>
                </div>
              </td>
              <td>
                <span :class="['payment-method-badge', receipt.paymentMethod]">
                  {{ formatPaymentMethod(receipt.paymentMethod) }}
                </span>
              </td>
              <td>
                <span class="reference-number">
                  {{ receipt.referenceNumber || '-' }}
                </span>
              </td>
              <td>
                <div class="inputter-info">
                  {{ receipt.inputter ? receipt.inputter.username : (receipt.maker ? receipt.maker.username : 'N/A') }}
                  <small v-if="receipt.createdAt">{{ formatDate(receipt.createdAt) }}</small>
                </div>
              </td>
              <td class="actions-cell">
                <button
                  class="btn btn-sm btn-outline-primary"
                  @click="viewReceipt(receipt)"
                  title="ເບິ່ງລາຍລະອຽດ"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-info"
                  @click="editReceipt(receipt)"
                  title="ແກ້ໄຂ"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-success"
                  @click="printReceipt(receipt)"
                  title="ພິມໃບຮັບ"
                >
                  <i class="fas fa-print"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="deleteReceipt(receipt)"
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

    <!-- Receive Header Dialog (for Create/Edit) -->
    <client-only>
      <ReceiveHeaderMaintain
        :visible="showEditDialog"
        :receipt="selectedReceipt"
        :invoices="invoices"
        @close="closeEditDialog"
        @save="onReceiptSave"
      />
    </client-only>

    <!-- Receipt View Dialog -->
    <client-only>
      <ReceiveHeaderView
        :visible="showViewDialog"
        :receipt="selectedReceipt"
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
import ReceiveHeaderMaintain from '~/components/accounting/ar/receive/maintain'
import ReceiveHeaderView from '~/components/accounting/ar/receive/view'

export default {
  name: 'ReceiveHeaderSummary',
  components: {
    ReceiveHeaderMaintain,
    ReceiveHeaderView,
  },

  data() {
    return {
      // Dialog visibility states
      showEditDialog: false,
      showViewDialog: false,
      selectedReceipt: null,

      // Data arrays
      receipts: [],
      filteredReceipts: [],
      invoices: [],

      // Loading states
      loading: false,

      // Filters
      filters: {
        search: '',
        paymentMethod: '',
        invoiceHeaderId: '',
        bookingDateFrom: '',
        bookingDateTo: '',
      },

      // Sorting
      sort: {
        field: 'bookingDate',
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
        cash: { count: 0, percentage: 0, amount: 0 },
        bankTransfer: { count: 0, percentage: 0, amount: 0 },
        check: { count: 0, percentage: 0, amount: 0 },
        creditCard: { count: 0, percentage: 0, amount: 0 },
        other: { count: 0, percentage: 0, amount: 0 },
        totalAmount: 0,
        averageAmount: 0,
      },
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    paginatedReceipts() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage
      const end = start + this.pagination.perPage
      return this.filteredReceipts.slice(start, end)
    },

    totalPages() {
      return Math.ceil(
        this.filteredReceipts.length / this.pagination.perPage
      )
    },

    paginationInfo() {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.perPage + 1
      const end = Math.min(
        start + this.pagination.perPage - 1,
        this.filteredReceipts.length
      )
      return {
        start,
        end,
        total: this.filteredReceipts.length,
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
    this.fetchReceipts()
    this.fetchInvoices()
  },

  methods: {
    // Data Loading Methods
    async fetchReceipts() {
      this.loading = true
      try {
        const params = {
          page: 1,
          limit: 1000, // Get all for client-side filtering
          ...this.filters,
        }

        const { data } = await this.$axios.get('/api/ar-receive-headers', { params })

        if (data && data.success) {
          this.receipts = data.data.receiveHeaders || []
        } else {
          this.receipts = []
        }

        this.applyFilters()
        this.calculateSummaryStats()
      } catch (error) {
        console.error('Error fetching receipts:', error)
        this.showToast('Error loading receipt data', 'error')
        this.receipts = []
      } finally {
        this.loading = false
      }
    },

    async fetchInvoices() {
      try {
        const { data } = await this.$axios.get('/api/ar-invoices')
        if (data && data.success) {
          this.invoices = data.data.invoices || []
        }
      } catch (error) {
        console.error('Error fetching invoices:', error)
      }
    },

    // Dialog Control Methods
    async openCreateDialog() {
      this.selectedReceipt = null
      this.showEditDialog = true
    },

    async editReceipt(receipt) {
      this.selectedReceipt = receipt
      this.showEditDialog = true
    },

    viewReceipt(receipt) {
      this.selectedReceipt = receipt
      this.showViewDialog = true
    },

    printReceipt(receipt) {
      // Implement print functionality
      this.showToast('ພິມໃບຮັບ: ' + receipt.receiptNumber, 'info')
    },

    async deleteReceipt(receipt) {
      if (confirm(`ທ່ານຕ້ອງການລຶບໃບຮັບເງິນ ${receipt.receiptNumber} ແມ່ນບໍ?`)) {
        try {
          this.loading = true
          const { data } = await this.$axios.delete(`/api/ar-receive-headers/${receipt.id}`)
          
          if (data && data.success) {
            this.showToast('ລຶບໃບຮັບເງິນສຳເລັດແລ້ວ', 'success')
            await this.fetchReceipts()
          } else {
            throw new Error(data?.message || 'Delete failed')
          }
        } catch (error) {
          console.error('Error deleting receipt:', error)
          const errorMessage = error.response?.data?.message || error.message || 'ລຶບບໍ່ສຳເລັດ'
          this.showToast(errorMessage, 'error')
        } finally {
          this.loading = false
        }
      }
    },

    closeEditDialog() {
      this.showEditDialog = false
      this.selectedReceipt = null
    },

    closeViewDialog() {
      this.showViewDialog = false
      this.selectedReceipt = null
    },

    // Save Handler
    async onReceiptSave(receiptData) {
      try {
        this.loading = true

        let response
        if (this.selectedReceipt && this.selectedReceipt.id) {
          response = await this.$axios.put(
            `/api/ar-receive-headers/${this.selectedReceipt.id}`,
            receiptData
          )
        } else {
          response = await this.$axios.post('/api/ar-receive-headers', receiptData)
        }

        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success')
          this.closeEditDialog()
          await this.fetchReceipts()
        } else {
          throw new Error(response.data?.message || 'Save failed')
        }
      } catch (error) {
        console.error('Error saving receipt:', error)
        const errorMessage =
          error.response?.data?.message || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ'
        this.showToast(errorMessage, 'error')
      } finally {
        this.loading = false
      }
    },

    // Filter and Search Methods
    applyFilters() {
      let filtered = [...this.receipts]

      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        filtered = filtered.filter(
          (receipt) =>
            receipt.receiptNumber.toLowerCase().includes(search) ||
            (receipt.referenceNumber && receipt.referenceNumber.toLowerCase().includes(search)) ||
            (receipt.notes && receipt.notes.toLowerCase().includes(search))
        )
      }

      // Payment method filter
      if (this.filters.paymentMethod) {
        filtered = filtered.filter(
          (receipt) => receipt.paymentMethod === this.filters.paymentMethod
        )
      }

      // Invoice filter
      if (this.filters.invoiceHeaderId) {
        filtered = filtered.filter(
          (receipt) => receipt.invoiceHeaderId == this.filters.invoiceHeaderId
        )
      }

      // Booking date range filter
      if (this.filters.bookingDateFrom || this.filters.bookingDateTo) {
        filtered = filtered.filter((receipt) => {
          const bookingDate = new Date(receipt.bookingDate)
          const dateFrom = this.filters.bookingDateFrom ? new Date(this.filters.bookingDateFrom) : null
          const dateTo = this.filters.bookingDateTo ? new Date(this.filters.bookingDateTo) : null
          
          if (dateFrom && bookingDate < dateFrom) return false
          if (dateTo && bookingDate > dateTo) return false
          return true
        })
      }

      this.filteredReceipts = filtered
      this.sortData()
      this.pagination.currentPage = 1
      this.calculateSummaryStats()
    },

    resetFilters() {
      this.filters = {
        search: '',
        paymentMethod: '',
        invoiceHeaderId: '',
        bookingDateFrom: '',
        bookingDateTo: '',
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
      this.filteredReceipts.sort((a, b) => {
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
      const total = this.filteredReceipts.length
      const cash = this.filteredReceipts.filter(r => r.paymentMethod === 'cash').length
      const bankTransfer = this.filteredReceipts.filter(r => r.paymentMethod === 'bank_transfer').length
      const check = this.filteredReceipts.filter(r => r.paymentMethod === 'check').length
      const creditCard = this.filteredReceipts.filter(r => r.paymentMethod === 'credit_card').length
      const other = this.filteredReceipts.filter(r => r.paymentMethod === 'other').length
      
      const totalAmount = this.filteredReceipts.reduce((sum, receipt) => sum + parseFloat(receipt.totalReceivedAmount || 0), 0)
      const cashAmount = this.filteredReceipts.filter(r => r.paymentMethod === 'cash').reduce((sum, receipt) => sum + parseFloat(receipt.totalReceivedAmount || 0), 0)
      const bankTransferAmount = this.filteredReceipts.filter(r => r.paymentMethod === 'bank_transfer').reduce((sum, receipt) => sum + parseFloat(receipt.totalReceivedAmount || 0), 0)
      const checkAmount = this.filteredReceipts.filter(r => r.paymentMethod === 'check').reduce((sum, receipt) => sum + parseFloat(receipt.totalReceivedAmount || 0), 0)
      const creditCardAmount = this.filteredReceipts.filter(r => r.paymentMethod === 'credit_card').reduce((sum, receipt) => sum + parseFloat(receipt.totalReceivedAmount || 0), 0)

      this.summaryStats = {
        total: { count: total },
        cash: { 
          count: cash, 
          percentage: total > 0 ? Math.round((cash / total) * 100) : 0,
          amount: cashAmount
        },
        bankTransfer: { 
          count: bankTransfer, 
          percentage: total > 0 ? Math.round((bankTransfer / total) * 100) : 0,
          amount: bankTransferAmount
        },
        check: { 
          count: check, 
          percentage: total > 0 ? Math.round((check / total) * 100) : 0,
          amount: checkAmount
        },
        creditCard: { 
          count: creditCard, 
          percentage: total > 0 ? Math.round((creditCard / total) * 100) : 0,
          amount: creditCardAmount
        },
        other: { 
          count: other, 
          percentage: total > 0 ? Math.round((other / total) * 100) : 0,
          amount: 0
        },
        totalAmount,
        averageAmount: total > 0 ? totalAmount / total : 0,
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
      const csvData = this.convertToCSV(this.filteredReceipts)
      this.downloadCSV(csvData, 'receipts-summary.csv')
    },

    convertToCSV(data) {
      const headers = [
        'Receipt Number',
        'Booking Date',
        'Received Date',
        'Invoice Number',
        'Total Amount',
        'Payment Method',
        'Reference Number',
        'Notes',
        'Created Date',
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          [
            `"${row.receiptNumber}"`,
            row.bookingDate,
            row.receivedDate,
            `"${row.invoiceHeader ? row.invoiceHeader.invoiceNumber : ''}"`,
            row.totalReceivedAmount,
            row.paymentMethod,
            `"${row.referenceNumber || ''}"`,
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

    formatCurrency(amount) {
      if (!amount) return '0.00'
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    },

    formatPaymentMethod(method) {
      const methods = {
        cash: 'ເງິນສົດ',
        check: 'ເຊັກ',
        bank_transfer: 'ໂອນເງິນທະນາຄານ',
        credit_card: 'ບັດເຄຣດິດ',
        other: 'ອື່ນໆ',
      }
      return methods[method] || method
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
/* Same CSS classes as the invoice component, adapted for receipts */
.receive-header-summary-container {
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

/* Total Receipts Card */
.summary-card.total-receipts {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.summary-card.total-receipts .card-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Payment Method Cards */
.summary-card.payment-cash {
  border-left: 4px solid #28a745;
}

.summary-card.payment-transfer {
  border-left: 4px solid #007bff;
}

.summary-card.payment-check {
  border-left: 4px solid #ffc107;
}

.summary-card.payment-card {
  border-left: 4px solid #dc3545;
}

.summary-card.amount-stats {
  border-left: 4px solid #6f42c1;
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

.card-icon.cash {
  background: #d4edda;
  color: #28a745;
}

.card-icon.transfer {
  background: #cce5ff;
  color: #007bff;
}

.card-icon.check {
  background: #fff3cd;
  color: #ffc107;
}

.card-icon.card {
  background: #f8d7da;
  color: #dc3545;
}

.card-icon.amount {
  background: #e2d9ff;
  color: #6f42c1;
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

/* Receipt Number Cell */
.receipt-number strong {
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.receipt-notes {
  font-size: 12px;
  color: #666;
}

/* Invoice Info */
.invoice-info .invoice-number {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: #495057;
  margin-bottom: 2px;
}

.invoice-info .customer-name {
  font-size: 12px;
  color: #666;
  margin-left: 16px;
}

/* Amount Details */
.amount-details .received-amount {
  font-weight: 600;
  color: #495057;
  margin-bottom: 2px;
}

.allocation-info {
  font-size: 11px;
  color: #666;
}

/* Payment Method Badge */
.payment-method-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.payment-method-badge.cash {
  background-color: #d4edda;
  color: #155724;
}

.payment-method-badge.bank_transfer {
  background-color: #cce5ff;
  color: #004085;
}

.payment-method-badge.check {
  background-color: #fff3cd;
  color: #856404;
}

.payment-method-badge.credit_card {
  background-color: #f8d7da;
  color: #721c24;
}

.payment-method-badge.other {
  background-color: #e2e3e5;
  color: #383d41;
}

/* Reference Number */
.reference-number {
  font-family: monospace;
  font-size: 13px;
  color: #495057;
}

/* Inputter Info */
.inputter-info {
  font-size: 14px;
  color: #495057;
}

.inputter-info small {
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
  .receive-header-summary-container {
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