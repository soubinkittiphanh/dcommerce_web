<template>
  <div class="ap-invoice-container">
    <!-- Header Section -->
    <div class="header-section">
      <h1 class="page-title">ໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ (AP Invoice)</h1>
      <div class="header-actions">
        <button class="btn btn-primary" @click="openDialog()">
          <i class="fas fa-plus"></i> ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່
        </button>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="summary-cards">
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ຈຳນວນໃບແຈ້ງໜີ້ທັງໝົດ</h5>
          <p class="card-value">{{ safeDashboard.counts.total }}</p>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ຄ້າງອະນຸມັດ</h5>
          <p class="card-value pending">{{ safeDashboard.counts.pending }}</p>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ອະນຸມັດແລ້ວ</h5>
          <p class="card-value approved">{{ safeDashboard.counts.approved }}</p>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ຊຳລະແລ້ວ</h5>
          <p class="card-value paid">{{ safeDashboard.counts.paid }}</p>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ເກີນກຳນົດ</h5>
          <p class="card-value overdue">{{ safeDashboard.counts.overdue }}</p>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ລວມຍອດທັງໝົດ</h5>
          <p class="card-value">
            {{ formatCurrency(safeDashboard.amounts.total) }}
          </p>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ຍອດຄ້າງຈ່າຍ</h5>
          <p class="card-value outstanding">
            {{ formatCurrency(safeDashboard.amounts.outstanding) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Enhanced Filters -->
    <div class="filters-section">
      <div class="row">
        <div class="col-md-2">
          <select
            v-model="statusFilter"
            @change="onFilterChange"
            class="form-control"
          >
            <option value="">ທຸກສະຖານະ</option>
            <option value="draft">ຮ່າງ</option>
            <option value="pending">ຄ້າງອະນຸມັດ</option>
            <option value="approved">ອະນຸມັດແລ້ວ</option>
            <option value="partially_paid">ຊຳລະບາງສ່ວນ</option>
            <option value="paid">ຊຳລະແລ້ວ</option>
            <option value="overdue">ເກີນກຳນົດ</option>
            <option value="cancelled">ຍົກເລີກ</option>
          </select>
        </div>
        <div class="col-md-3">
          <select
            v-model="filters.vendorId"
            @change="fetchData"
            class="form-control"
          >
            <option value="">ຈາກຜູ້ຂາຍທັງໝົດ</option>
            <option v-for="vendor in vendors" :key="vendor.id" :value="vendor.id">
              {{ vendor.name }}
            </option>
          </select>
        </div>
        <div class="col-md-2">
          <input
            v-model="filters.startDate"
            @change="fetchData"
            type="date"
            class="form-control"
            placeholder="ວັນທີເລີ່ມຕົ້ນ"
          />
        </div>
        <div class="col-md-2">
          <input
            v-model="filters.endDate"
            @change="fetchData"
            type="date"
            class="form-control"
            placeholder="ວັນທີສິ້ນສຸດ"
          />
        </div>
        <div class="col-md-2">
          <input
            v-model="searchTerm"
            @input="debounceSearch"
            type="text"
            class="form-control"
            placeholder="ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້..."
          />
        </div>
        <div class="col-md-1">
          <button @click="resetFilters" class="btn btn-secondary btn-block">
            <i class="fas fa-undo"></i> ຄ່າເລີ່ມຕົ້ນ
          </button>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="table-container">
      <div v-if="loading" class="loading-overlay">
        <div class="spinner"></div>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>ເລກທີໃບແຈ້ງໜີ້</th>
            <th>ເລກທີຜູ້ຂາຍ</th>
            <th>ຜູ້ຂາຍ</th>
            <th>ວັນທີໃບແຈ້ງໜີ້</th>
            <th>ວັນທີຄົບກຳນົດ</th>
            <th>ຈຳນວນເງິນລວມ</th>
            <th>ຈຳນວນທີ່ຈ່າຍແລ້ວ</th>
            <th>ຍອດຄ້າງຈ່າຍ</th>
            <th>ສະຖານະ</th>
            <th>ຜູ້ລົງບັນຊີ</th>
            <th>ຟັງຊັ່ນ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice in invoices" :key="invoice.id">
            <td>
              <div class="invoice-number">
                {{ invoice.invoiceNumber }}
                <div v-if="isOverdue(invoice.dueDate) && invoice.status !== 'paid'" class="overdue-badge">
                  <i class="fas fa-exclamation-triangle"></i> ເກີນກຳນົດ
                </div>
              </div>
            </td>
            <td>{{ invoice.vendorInvoiceNumber }}</td>
            <td>
              <div v-if="invoice.vendor" class="vendor-info">
                <div class="vendor-name">{{ invoice.vendor.name }}</div>
                <div v-if="invoice.vendor.vendorCode" class="vendor-code">
                  {{ invoice.vendor.vendorCode }}
                </div>
              </div>
              <span v-else class="no-vendor">ບໍ່ໄດ້ລະບຸຜູ້ຂາຍ</span>
            </td>
            <td>{{ formatDate(invoice.invoiceDate) }}</td>
            <td>
              <span :class="{ 'text-danger': isOverdue(invoice.dueDate) && invoice.status !== 'paid' }">
                {{ formatDate(invoice.dueDate) }}
              </span>
            </td>
            <td>
              <span class="amount">
                {{ formatCurrency(invoice.totalAmount) }}
                <small v-if="invoice.currency">{{ invoice.currency.code }}</small>
              </span>
            </td>
            <td>
              <span class="amount paid">
                {{ formatCurrency(invoice.paidAmount) }}
              </span>
            </td>
            <td>
              <span class="amount outstanding">
                {{ formatCurrency(getOutstandingAmount(invoice)) }}
              </span>
            </td>
            <td>
              <span :class="['status-badge', invoice.status]">
                {{ getStatusInLao(invoice.status) }}
              </span>
            </td>
            <td>{{ invoice.maker ? invoice.maker.cus_name : 'N/A' }}</td>
            <td>
              <div class="action-buttons">
                <!-- View Details -->
                <button
                  @click="viewDetails(invoice)"
                  class="btn btn-sm btn-info"
                  title="ເບິ່ງລາຍລະອຽດ"
                >
                  <i class="fas fa-eye"></i>
                </button>

                <!-- Edit (only for draft/pending) -->
                <button
                  v-if="['draft', 'pending'].includes(invoice.status)"
                  @click="openDialog(invoice)"
                  class="btn btn-sm btn-warning"
                  title="ແກ້ໄຂ"
                >
                  <i class="fas fa-edit"></i>
                </button>

                <!-- Approve (only for pending) -->
                <button
                  v-if="invoice.status === 'pending'"
                  @click="approveInvoice(invoice)"
                  class="btn btn-sm btn-success"
                  title="ອະນຸມັດ"
                >
                  <i class="fas fa-check"></i>
                </button>

                <!-- Cancel (only for draft/pending) -->
                <!-- <button
                  v-if="['draft', 'pending'].includes(invoice.status)"
                  @click="cancelInvoice(invoice)"
                  class="btn btn-sm btn-dark"
                  title="ຍົກເລີກ"
                >
                  <i class="fas fa-times"></i>
                </button> -->
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- No Data Message -->
      <div v-if="!loading && invoices.length === 0" class="no-data">
        <i class="fas fa-file-invoice"></i>
        <p>ບໍ່ພົບຂໍ້ມູນໃບແຈ້ງໜີ້</p>
      </div>
    </div>

    <!-- Pagination -->
    <nav v-if="pagination.totalPages > 1" class="pagination-nav">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{ disabled: pagination.currentPage === 1 }"
        >
          <button
            @click="changePage(pagination.currentPage - 1)"
            class="page-link"
          >
            ກ່ອນໜ້າ
          </button>
        </li>
        <li
          v-for="page in paginationPages"
          :key="page"
          class="page-item"
          :class="{ active: page === pagination.currentPage }"
        >
          <button @click="changePage(page)" class="page-link">
            {{ page }}
          </button>
        </li>
        <li
          class="page-item"
          :class="{
            disabled: pagination.currentPage === pagination.totalPages,
          }"
        >
          <button
            @click="changePage(pagination.currentPage + 1)"
            class="page-link"
          >
            ຕໍ່ໄປ
          </button>
        </li>
      </ul>
    </nav>

    <!-- 🎯 NEW DIALOG COMPONENT -->
    <APInvoiceDialog
      :visible="showDialog"
      :invoice="selectedInvoice"
      :vendors="vendors"
      :currencies="currencies"
      :gl-accounts="glAccounts"
      :user="user"
      @close="closeDialog"
      @save="saveInvoice"
    />

    <!-- Simple Detail Modal -->
    <div v-if="showDetailModal" class="modal-overlay" @click="closeDetailModal">
      <div class="detail-modal" @click.stop>
        <div class="modal-header">
          <h4>ລາຍລະອຽດໃບແຈ້ງໜີ້</h4>
          <button @click="closeDetailModal" class="close-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div v-if="detailLoading" class="loading-state">
            <div class="spinner"></div>
            <p>ກຳລັງໂຫຼດ...</p>
          </div>
          <div v-else-if="invoiceDetails" class="detail-content">
            <div class="detail-row">
              <label>ເລກທີໃບແຈ້ງໜີ້:</label>
              <span>{{ invoiceDetails.invoiceNumber }}</span>
            </div>
            <div class="detail-row">
              <label>ເລກທີຜູ້ຂາຍ:</label>
              <span>{{ invoiceDetails.vendorInvoiceNumber }}</span>
            </div>
            <div class="detail-row">
              <label>ຜູ້ຂາຍ:</label>
              <span>{{ invoiceDetails.vendor?.name || 'N/A' }}</span>
            </div>
            <div class="detail-row">
              <label>ວັນທີໃບແຈ້ງໜີ້:</label>
              <span>{{ formatDate(invoiceDetails.invoiceDate) }}</span>
            </div>
            <div class="detail-row">
              <label>ວັນທີຄົບກຳນົດ:</label>
              <span>{{ formatDate(invoiceDetails.dueDate) }}</span>
            </div>
            <div class="detail-row">
              <label>ຈຳນວນເງິນລວມ:</label>
              <span>{{ formatCurrency(invoiceDetails.totalAmount) }}</span>
            </div>
            <div class="detail-row">
              <label>ສະຖານະ:</label>
              <span :class="['status-badge', invoiceDetails.status]">
                {{ getStatusInLao(invoiceDetails.status) }}
              </span>
            </div>
            <div class="detail-row">
              <label>ຄຳອະທິບາຍ:</label>
              <span>{{ invoiceDetails.description || 'N/A' }}</span>
            </div>
            <div class="detail-row">
              <label>ໝາຍເຫດ:</label>
              <span>{{ invoiceDetails.note || 'N/A' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import APInvoiceDialog from '~/components/accounting/ap/invoice/index.vue'
import { swalSuccess, swalError2, swalConfirm } from '~/common'

export default {
  name: 'APInvoiceManagement',

  components: {
    APInvoiceDialog
  },

  data() {
    return {
      statusFilter: '',
      statusLabels: {
        draft: 'ຮ່າງ',
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        partially_paid: 'ຊຳລະບາງສ່ວນ',
        paid: 'ຊຳລະແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ',
      },
      invoices: [],
      vendors: [],
      glAccounts: [],
      currencies: [],
      dashboard: null,
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10,
      },
      filters: {
        status: '',
        vendorId: '',
        startDate: '',
        endDate: '',
      },
      searchTerm: '',
      loading: false,
      detailLoading: false,
      showDialog: false,
      showDetailModal: false,
      selectedInvoice: null,
      invoiceDetails: null,
      searchTimeout: null,
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    safeDashboard() {
      return {
        counts: this.dashboard?.counts || {
          total: 0, 
          draft: 0,
          pending: 0, 
          approved: 0, 
          partially_paid: 0,
          paid: 0, 
          overdue: 0,
          cancelled: 0
        },
        amounts: this.dashboard?.amounts || {
          total: 0, 
          outstanding: 0,
          paid: 0
        }
      }
    },

    paginationPages() {
      const pages = []
      const start = Math.max(1, this.pagination.currentPage - 2)
      const end = Math.min(
        this.pagination.totalPages,
        this.pagination.currentPage + 2
      )

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      return pages
    },
  },

  async mounted() {
    await this.loadInitialData()
  },

  methods: {
    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase()
    },

    getOutstandingAmount(invoice) {
      return parseFloat(invoice.totalAmount || 0) - parseFloat(invoice.paidAmount || 0)
    },

    isOverdue(dueDate) {
      if (!dueDate) return false
      return new Date(dueDate) < new Date()
    },

    async loadInitialData() {
      await Promise.all([
        this.fetchData(),
        this.fetchDashboard(),
        this.fetchVendors(),
        this.fetchCurrencies(),
        this.fetchAccountCharts(),
      ])
    },

    async fetchData() {
      this.loading = true
      try {
        const params = {
          page: this.pagination.currentPage,
          limit: this.pagination.itemsPerPage,
          ...this.filters,
        }

        if (this.statusFilter) {
          params.status = this.statusFilter
        }

        if (this.searchTerm) {
          params.search = this.searchTerm
        }

        const { data } = await this.$axios.get('/api/ap-invoices', {
          params,
        })

        this.invoices = data.data.invoices
        this.pagination = data.data.pagination
      } catch (error) {
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການດຶງຂໍ້ມູນໃບແຈ້ງໜີ້', 'error')
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async fetchDashboard() {
      try {
        const params = {}
        if (this.filters.vendorId) params.vendorId = this.filters.vendorId

        const { data } = await this.$axios.get('/api/ap-invoices/reports/summary', { params })
        
        if (data && data.data) {
          this.dashboard = {
            counts: data.data.counts || {
              total: 0, 
              draft: 0,
              pending: 0, 
              approved: 0, 
              partially_paid: 0,
              paid: 0, 
              overdue: 0,
              cancelled: 0
            },
            amounts: data.data.amounts || {
              total: 0, 
              outstanding: 0,
              paid: 0
            }
          }
        }
      } catch (error) {
        console.error('Error fetching dashboard:', error)
        this.dashboard = {
          counts: {
            total: 0, 
            draft: 0,
            pending: 0, 
            approved: 0, 
            partially_paid: 0,
            paid: 0, 
            overdue: 0,
            cancelled: 0
          },
          amounts: {
            total: 0, 
            outstanding: 0,
            paid: 0
          }
        }
      }
    },

    async fetchVendors() {
      try {
        const { data } = await this.$axios.get('/api/vendor/find')
        this.vendors = data || []
      } catch (error) {
        console.error('Error fetching vendors:', error)
        this.vendors = []
        this.showToast('ບໍ່ສາມາດດຶງຂໍ້ມູນຜູ້ຂາຍໄດ້', 'error')
      }
    },

    async fetchCurrencies() {
      try {
        const { data } = await this.$axios.get('/api/currency/find')
        this.currencies = data || []
      } catch (error) {
        console.error('Error fetching currencies:', error)
        this.currencies = []
        this.showToast('ບໍ່ສາມາດດຶງຂໍ້ມູນສະກຸນເງິນໄດ້', 'error')
      }
    },
      async fetchAccountCharts() {
      try {
        const { data } = await this.$axios.get('/api/accountChart/find')
        this.glAccounts = data || []
      } catch (error) {
        console.error('Error fetching currencies:', error)
        this.glAccounts = []
        this.showToast('ບໍ່ສາມາດດຶງຂໍ້ມູນສະກຸນເງິນໄດ້', 'error')
      }
    },

    // Dialog Methods
    openDialog(invoice = null) {
      this.selectedInvoice = invoice
      this.showDialog = true
    },

    closeDialog() {
      this.showDialog = false
      this.selectedInvoice = null
    },

    // Detail Modal Methods
    async viewDetails(invoice) {
      this.selectedInvoice = invoice
      this.showDetailModal = true

      try {
        this.detailLoading = true
        const { data } = await this.$axios.get(`/api/ap-invoices/${invoice.id}`)
        this.invoiceDetails = data.data
      } catch (error) {
        console.error('Error fetching invoice details:', error)
        this.showToast('ບໍ່ສາມາດດຶງຂໍ້ມູນລາຍລະອຽດໄດ້', 'error')
      } finally {
        this.detailLoading = false
      }
    },

    closeDetailModal() {
      this.showDetailModal = false
      this.selectedInvoice = null
      this.invoiceDetails = null
    },

    // CRUD Operations
    async saveInvoice(formData) {
      try {
        const auditContext = {
          reason: formData.reason || (formData.id ? 'Updated invoice' : 'Created new invoice'),
          userId: this.user?.id,
        }

        if (formData.id) {
          await this.$axios.put(`/api/ap-invoices/${formData.id}`, {
            ...formData,
            ...auditContext,
          })
          this.showToast('ອັບເດດໃບແຈ້ງໜີ້ສຳເລັດ', 'success')
        } else {
          await this.$axios.post('/api/ap-invoices', {
            ...formData,
            ...auditContext,
          })
          this.showToast('ສ້າງໃບແຈ້ງໜີ້ສຳເລັດ', 'success')
        }

        this.closeDialog()
        await this.fetchData()
        await this.fetchDashboard()
      } catch (error) {
        const message = error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ'
        this.showToast(message, 'error')
        console.error('Save error:', error)
      }
    },

    async approveInvoice(invoice) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການອະນຸມັດ',
          `ທ່ານແນ່ໃຈທີ່ຈະອະນຸມັດໃບແຈ້ງໜີ້ ${invoice.invoiceNumber} ແມ່ນບໍ່?`,
          'question',
          'ບໍ່',
          'ຕົກລົງ'
        )

        if (result.isConfirmed) {
          await this.$axios.post(`/api/ap-invoices/${invoice.id}/approve`, {
            checkerId: this.user.id,
            reason: 'Approved by manager',
          })
          this.showToast('ອະນຸມັດໃບແຈ້ງໜີ້ສຳເລັດ', 'success')
          await this.fetchData()
          await this.fetchDashboard()
        }
      } catch (error) {
        console.error('Error approving invoice:', error)
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການອະນຸມັດ', 'error')
      }
    },

    async cancelInvoice(invoice) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການຍົກເລີກ',
          `ທ່ານແນ່ໃຈທີ່ຈະຍົກເລີກໃບແຈ້ງໜີ້ ${invoice.invoiceNumber} ແມ່ນບໍ່?`,
          'warning',
          'ບໍ່',
          'ຍົກເລີກ'
        )

        if (result.isConfirmed) {
          await this.$axios.post(`/api/ap-invoices/${invoice.id}/cancel`, {
            reason: 'Cancelled by user',
          })
          this.showToast('ຍົກເລີກໃບແຈ້ງໜີ້ສຳເລັດ', 'success')
          await this.fetchData()
          await this.fetchDashboard()
        }
      } catch (error) {
        console.error('Error cancelling invoice:', error)
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການຍົກເລີກ', 'error')
      }
    },

    // Event Handlers
    onFilterChange() {
      this.filters.status = this.statusFilter
      this.pagination.currentPage = 1
      this.fetchData()
      this.fetchDashboard()
    },

    changePage(page) {
      if (page >= 1 && page <= this.pagination.totalPages) {
        this.pagination.currentPage = page
        this.fetchData()
      }
    },

    resetFilters() {
      this.filters = { status: '', vendorId: '', startDate: '', endDate: '' }
      this.searchTerm = ''
      this.statusFilter = ''
      this.pagination.currentPage = 1
      this.fetchData()
      this.fetchDashboard()
    },

    debounceSearch() {
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        this.pagination.currentPage = 1
        this.fetchData()
      }, 500)
    },

    // Utility methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount || 0)
    },

    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString('en-GB')
    },

    showToast(message, type = 'info') {
      if (this.$toast) {
        this.$toast[type](message)
      } else if (this.$notify) {
        this.$notify({
          title: type === 'error' ? 'ຂໍ້ຜິດພາດ' : 'ສຳເລັດ',
          message: message,
          type: type === 'error' ? 'error' : 'success',
        })
      } else {
        alert(`${type.toUpperCase()}: ${message}`)
      }
    },
  },
}
</script>

<style scoped>
.ap-invoice-container {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.header-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.page-title {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.summary-card {
  border: 1px solid #e3e6f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 20px;
  text-align: center;
}

.card-title {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 600;
}

.card-value {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  color: #333;
}

.card-value.pending { color: #f39c12; }
.card-value.approved { color: #27ae60; }
.card-value.paid { color: #3498db; }
.card-value.overdue { color: #e74c3c; }
.card-value.outstanding { color: #e67e22; }

.filters-section {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.col-md-1 { flex: 0 0 8.333%; max-width: 8.333%; padding: 10px; }
.col-md-2 { flex: 0 0 16.666%; max-width: 16.666%; padding: 10px; }
.col-md-3 { flex: 0 0 25%; max-width: 25%; padding: 10px; }

.form-control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.btn-primary { background: #007bff; color: white; }
.btn-secondary { background: #6c757d; color: white; }
.btn-block { width: 100%; justify-content: center; }

.btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.table-container {
  position: relative;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.table {
  width: 100%;
  margin: 0;
  border-collapse: collapse;
}

.table th {
  background: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
  padding: 15px 10px;
  font-size: 13px;
  white-space: nowrap;
}

.table td {
  padding: 15px 10px;
  vertical-align: middle;
  border-top: 1px solid #dee2e6;
  font-size: 13px;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.invoice-number {
  font-weight: 600;
  color: #333;
}

.overdue-badge {
  font-size: 10px;
  color: #e74c3c;
  font-weight: 500;
  margin-top: 2px;
}

.vendor-info {
  font-size: 12px;
}

.vendor-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 2px;
}

.vendor-code {
  color: #666;
  font-family: monospace;
  background: #e3f2fd;
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 10px;
}

.no-vendor {
  color: #999;
  font-style: italic;
  font-size: 11px;
}

.amount {
  font-weight: 600;
}

.amount.paid { color: #27ae60; }
.amount.outstanding { color: #e67e22; }

.text-danger {
  color: #e74c3c !important;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  border: 1px solid transparent;
}

.status-badge.draft { background: #f8f9fa; color: #6c757d; border-color: #dee2e6; }
.status-badge.pending { background: #fff3cd; color: #856404; border-color: #ffeaa7; }
.status-badge.approved { background: #d4edda; color: #155724; border-color: #c3e6cb; }
.status-badge.partially_paid { background: #cce5ff; color: #004085; border-color: #b3d7ff; }
.status-badge.paid { background: #d1ecf1; color: #0c5460; border-color: #bee5eb; }
.status-badge.overdue { background: #f8d7da; color: #721c24; border-color: #f5c6cb; }
.status-badge.cancelled { background: #e2e3e5; color: #383d41; border-color: #d6d8db; }

.action-buttons {
  display: flex;
  gap: 4px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-sm {
  width: 28px;
  height: 28px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-sm:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.btn-sm.btn-info { background: #17a2b8; color: white; }
.btn-sm.btn-warning { background: #ffc107; color: #212529; }
.btn-sm.btn-success { background: #28a745; color: white; }
.btn-sm.btn-dark { background: #343a40; color: white; }

.no-data {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.no-data i {
  font-size: 48px;
  margin-bottom: 15px;
  opacity: 0.5;
}

.pagination-nav {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.pagination {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.page-item {
  margin: 0 2px;
}

.page-link {
  padding: 8px 12px;
  background: white;
  border: 1px solid #dee2e6;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}

.page-link:hover {
  background: #e9ecef;
}

.page-item.active .page-link {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.page-item.disabled .page-link {
  color: #6c757d;
  cursor: not-allowed;
  background: #fff;
}

/* Detail Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
  padding: 20px;
}

.detail-modal {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
}

.modal-header h4 {
  margin: 0;
  color: #333;
}

.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
  padding: 5px;
}

.close-btn:hover {
  color: #333;
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #666;
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.detail-row {
  display: flex;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-row label {
  font-weight: 600;
  color: #333;
  min-width: 140px;
  margin-right: 15px;
  font-size: 14px;
}

.detail-row span {
  color: #666;
  font-size: 14px;
  flex: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .summary-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .table-container {
    overflow-x: auto;
  }

  .table {
    min-width: 1000px;
  }

  .row {
    flex-direction: column;
  }

  .col-md-1,
  .col-md-2,
  .col-md-3 {
    flex: 1;
    max-width: 100%;
    margin-bottom: 10px;
  }

  .detail-row {
    flex-direction: column;
    gap: 5px;
  }

  .detail-row label {
    min-width: auto;
    margin-right: 0;
  }
}

@media (max-width: 480px) {
  .summary-cards {
    grid-template-columns: 1fr;
  }

  .header-section {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .action-buttons {
    justify-content: center;
  }
}
</style>