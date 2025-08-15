<template>
  <div class="ap-settlement-container">
    <!-- Header Section -->
    <div class="header-section">
      <h1 class="page-title">ການຊຳລະໜີ້ (AP Settlement)</h1>
      <div class="header-actions">
        <button class="btn btn-primary" @click="openDialog()">
          <i class="fas fa-plus"></i> ເພີ່ມການຊຳລະໃໝ່
        </button>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="summary-cards">
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ຈຳນວນການຊຳລະທັງໝົດ</h5>
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
          <h5 class="card-title">ສຳເລັດແລ້ວ</h5>
          <p class="card-value completed">
            {{ safeDashboard.counts.completed }}
          </p>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ຍົກເລີກ</h5>
          <p class="card-value cancelled">
            {{ safeDashboard.counts.cancelled }}
          </p>
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
          <h5 class="card-title">ຍອດທີ່ຈັດສັນແລ້ວ</h5>
          <p class="card-value allocated">
            {{ formatCurrency(safeDashboard.amounts.allocated) }}
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
            <option value="completed">ສຳເລັດແລ້ວ</option>
            <option value="cancelled">ຍົກເລີກ</option>
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
        <div class="col-md-3">
          <input
            v-model="searchTerm"
            @input="debounceSearch"
            type="text"
            class="form-control"
            placeholder="ຄົ້ນຫາເລກອ້າງອີງ..."
          />
        </div>
        <div class="col-md-2">
          <button
            @click="getOutstandingInvoices"
            class="btn btn-info btn-block"
          >
            <i class="fas fa-file-invoice"></i> ໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ
          </button>
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
            <th>ID</th>
            <th>ວັນທີຊຳລະ</th>
            <th>ຈຳນວນເງິນຊຳລະ</th>
            <th>ຈຳນວນເງິນພື້ນຖານ</th>
            <th>ສະຖານະ</th>
            <th>ອ້າງອີງ</th>
            <th>ຄຳອະທິບາຍ</th>
            <th>ຟັງຊັ່ນ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="settlement in settlements" :key="settlement.id">
            <td>
              <div class="settlement-id">
                #{{ settlement.id }}
              </div>
            </td>
            <td>{{ formatDate(settlement.settlementDate) }}</td>
            <td>
              <span class="amount">
                {{ formatCurrency(settlement.paymentAmount) }}
              </span>
            </td>
            <td>
              <span class="amount">
                {{ formatCurrency(settlement.baseAmount) }}
              </span>
            </td>
            <td>
              <span :class="['status-badge', settlement.status || 'unknown']">
                {{ getStatusInLao(settlement.status) }}
              </span>
            </td>
            <td>{{ settlement.reference || 'N/A' }}</td>
            <td>{{ settlement.description || 'N/A' }}</td>
            <td>
              <div class="action-buttons">
                <!-- View Details -->
                <button
                  @click="viewDetails(settlement)"
                  class="btn btn-sm btn-info"
                  title="ເບິ່ງລາຍລະອຽດ"
                >
                  <i class="fas fa-eye"></i>
                </button>

                <!-- Edit (only for draft/pending) -->
                <button
                  v-if="['draft', 'pending'].includes(settlement.status)"
                  @click="openDialog(settlement)"
                  class="btn btn-sm btn-warning"
                  title="ແກ້ໄຂ"
                >
                  <i class="fas fa-edit"></i>
                </button>

                <!-- Approve (only for pending) -->
                <button
                  v-if="settlement.status === 'pending'"
                  @click="approveSettlement(settlement)"
                  class="btn btn-sm btn-success"
                  title="ອະນຸມັດ"
                >
                  <i class="fas fa-check"></i>
                </button>

                <!-- Complete (only for approved) -->
                <button
                  v-if="settlement.status === 'approved'"
                  @click="completeSettlement(settlement)"
                  class="btn btn-sm btn-primary"
                  title="ສຳເລັດ"
                >
                  <i class="fas fa-check-double"></i>
                </button>

                <!-- Cancel (only for draft/pending/approved) -->
                <!-- <button
                  v-if="
                    ['draft', 'pending', 'approved'].includes(settlement.status)
                  "
                  @click="cancelSettlement(settlement)"
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
      <div v-if="!loading && settlements.length === 0" class="no-data">
        <i class="fas fa-money-check-alt"></i>
        <p>ບໍ່ພົບຂໍ້ມູນການຊຳລະ</p>
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

    <!-- Settlement Dialog -->
    <SettlementDialog
      :visible="showDialog"
      :settlement="selectedSettlement"
      :outstanding-invoices="outstandingInvoices"
      :user="user"
      @close="closeDialog"
      @save="saveSettlement"
    />

    <!-- Outstanding Invoices Modal -->
    <div
      v-if="showOutstandingModal"
      class="modal-overlay"
      @click="closeOutstandingModal"
    >
      <div class="outstanding-modal" @click.stop>
        <div class="modal-header">
          <h4>ໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ</h4>
          <button @click="closeOutstandingModal" class="close-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div v-if="outstandingLoading" class="loading-state">
            <div class="spinner"></div>
            <p>ກຳລັງໂຫຼດ...</p>
          </div>
          <div v-else>
            <div class="outstanding-filters">
              <div class="row">
                <div class="col-md-6">
                  <select
                    v-model="outstandingFilters.vendorId"
                    @change="getOutstandingInvoices"
                    class="form-control"
                  >
                    <option value="">ທຸກຜູ້ຂາຍ</option>
                    <option
                      v-for="vendor in vendors"
                      :key="vendor.id"
                      :value="vendor.id"
                    >
                      {{ vendor.name }}
                    </option>
                  </select>
                </div>
                <div class="col-md-6">
                  <input
                    v-model="outstandingSearch"
                    @input="filterOutstandingInvoices"
                    type="text"
                    class="form-control"
                    placeholder="ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້..."
                  />
                </div>
              </div>
            </div>
            <div class="outstanding-table">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>ເລກທີໃບແຈ້ງໜີ້</th>
                    <th>ຜູ້ຂາຍ</th>
                    <th>ວັນທີຄົບກຳນົດ</th>
                    <th>ຍອດຄ້າງຈ່າຍ</th>
                    <th>ເລືອກ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="invoice in filteredOutstandingInvoices"
                    :key="invoice.id"
                  >
                    <td>{{ invoice.invoiceNumber }}</td>
                    <td>{{ invoice.vendor?.name || 'N/A' }}</td>
                    <td>{{ formatDate(invoice.dueDate) }}</td>
                    <td>{{ formatCurrency(invoice.outstandingAmount) }}</td>
                    <td>
                      <button
                        @click="selectInvoiceForSettlement(invoice)"
                        class="btn btn-sm btn-primary"
                      >
                        <i class="fas fa-plus"></i> ເລືອກ
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                v-if="filteredOutstandingInvoices.length === 0"
                class="no-data"
              >
                <p>ບໍ່ພົບໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Simple Detail Modal -->
    <div v-if="showDetailModal" class="modal-overlay" @click="closeDetailModal">
      <div class="detail-modal" @click.stop>
        <div class="modal-header">
          <h4>ລາຍລະອຽດການຊຳລະ</h4>
          <button @click="closeDetailModal" class="close-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div v-if="detailLoading" class="loading-state">
            <div class="spinner"></div>
            <p>ກຳລັງໂຫຼດ...</p>
          </div>
          <div v-else-if="settlementDetails" class="detail-content">
            <div class="detail-row">
              <label>ID ການຊຳລະ:</label>
              <span>#{{ settlementDetails.id }}</span>
            </div>
            <div class="detail-row">
              <label>ວັນທີຊຳລະ:</label>
              <span>{{ formatDate(settlementDetails.settlementDate) }}</span>
            </div>
            <div class="detail-row">
              <label>ຈຳນວນເງິນຊຳລະ:</label>
              <span>{{ formatCurrency(settlementDetails.paymentAmount) }}</span>
            </div>
            <div class="detail-row">
              <label>ຈຳນວນເງິນພື້ນຖານ:</label>
              <span>{{ formatCurrency(settlementDetails.baseAmount) }}</span>
            </div>
            <div class="detail-row">
              <label>ສະຖານະ:</label>
              <span :class="['status-badge', settlementDetails.status]">
                {{ getStatusInLao(settlementDetails.status) }}
              </span>
            </div>
            <div class="detail-row">
              <label>ອ້າງອີງ:</label>
              <span>{{ settlementDetails.reference || 'N/A' }}</span>
            </div>
            <div class="detail-row">
              <label>ຄຳອະທິບາຍ:</label>
              <span>{{ settlementDetails.description || 'N/A' }}</span>
            </div>
            <div class="detail-row">
              <label>ໝາຍເຫດ:</label>
              <span>{{ settlementDetails.note || 'N/A' }}</span>
            </div>

            <!-- Invoice Allocations -->
            <div
              v-if="
                settlementDetails.invoiceSettlements &&
                settlementDetails.invoiceSettlements.length > 0
              "
              class="allocations-section"
            >
              <h5>ການຈັດສັນໃບແຈ້ງໜີ້</h5>
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>ເລກທີໃບແຈ້ງໜີ້</th>
                    <th>ຈຳນວນທີ່ຈັດສັນ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="allocation in settlementDetails.invoiceSettlements"
                    :key="allocation.id"
                  >
                    <td>{{ getInvoiceNumber(allocation) }}</td>
                    <td>{{ formatCurrency(allocation.amount) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettlementDialog from '~/components/accounting/ap/settlement/index.vue'
import { swalSuccess, swalError2, swalConfirm } from '~/common'

export default {
  name: 'SettlementManagement',

  components: {
    SettlementDialog,
  },

  data() {
    return {
      statusFilter: '',
      statusLabels: {
        draft: 'ຮ່າງ',
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        completed: 'ສຳເລັດແລ້ວ',
        cancelled: 'ຍົກເລີກ',
      },
      settlements: [],
      vendors: [],
      outstandingInvoices: [],
      filteredOutstandingInvoices: [],
      dashboard: null,
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10,
      },
      filters: {
        status: '',
        startDate: '',
        endDate: '',
      },
      outstandingFilters: {
        vendorId: '',
      },
      searchTerm: '',
      outstandingSearch: '',
      loading: false,
      detailLoading: false,
      outstandingLoading: false,
      showDialog: false,
      showDetailModal: false,
      showOutstandingModal: false,
      selectedSettlement: null,
      settlementDetails: null,
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
          completed: 0,
          cancelled: 0,
        },
        amounts: this.dashboard?.amounts || {
          total: 0,
          allocated: 0,
        },
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
      if (!status) return 'N/A'
      return this.statusLabels[status] || status.toUpperCase()
    },

    // Helper method to get invoice number from settlement line
    getInvoiceNumber(allocation) {
      // Based on the relationship: settlementLine -> invoiceLineItem -> invoice
      return allocation.invoiceLineItem?.invoice?.invoiceNumber || 'N/A'
    },

    async loadInitialData() {
      await Promise.all([
        this.fetchData(),
        this.fetchDashboard(),
        this.fetchVendors(),
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

        const { data } = await this.$axios.get('/api/ap-invoices-settlement', {
          params,
        })

        this.settlements = data.data.settlements
        this.pagination = data.data.pagination
      } catch (error) {
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການດຶງຂໍ້ມູນການຊຳລະ', 'error')
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async fetchDashboard() {
      try {
        // For now, we'll calculate from current data
        // You can create a dedicated dashboard endpoint later
        const totalSettlements = this.settlements.length
        const statusCounts = this.settlements.reduce((acc, settlement) => {
          acc[settlement.status] = (acc[settlement.status] || 0) + 1
          return acc
        }, {})

        const totalAmount = this.settlements.reduce((sum, settlement) => {
          return sum + parseFloat(settlement.baseAmount || 0)
        }, 0)

        this.dashboard = {
          counts: {
            total: totalSettlements,
            draft: statusCounts.draft || 0,
            pending: statusCounts.pending || 0,
            approved: statusCounts.approved || 0,
            completed: statusCounts.completed || 0,
            cancelled: statusCounts.cancelled || 0,
          },
          amounts: {
            total: totalAmount,
            allocated: totalAmount, // Simplified for now
          },
        }
      } catch (error) {
        console.error('Error calculating dashboard:', error)
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

    async getOutstandingInvoices() {
      this.outstandingLoading = true
      this.showOutstandingModal = true

      try {
        const params = {}
        if (this.outstandingFilters.vendorId) {
          params.vendorId = this.outstandingFilters.vendorId
        }

        const { data } = await this.$axios.get(
          '/api/ap-invoices-settlement/invoices/outstanding',
          { params }
        )
        this.outstandingInvoices = data.data || []
        this.filteredOutstandingInvoices = [...this.outstandingInvoices]
      } catch (error) {
        console.error('Error fetching outstanding invoices:', error)
        this.showToast('ບໍ່ສາມາດດຶງຂໍ້ມູນໃບແຈ້ງໜີ້ຄ້າງຈ່າຍໄດ້', 'error')
        this.outstandingInvoices = []
        this.filteredOutstandingInvoices = []
      } finally {
        this.outstandingLoading = false
      }
    },

    filterOutstandingInvoices() {
      if (!this.outstandingSearch) {
        this.filteredOutstandingInvoices = [...this.outstandingInvoices]
        return
      }

      const search = this.outstandingSearch.toLowerCase()
      this.filteredOutstandingInvoices = this.outstandingInvoices.filter(
        (invoice) =>
          invoice.invoiceNumber.toLowerCase().includes(search) ||
          invoice.vendorInvoiceNumber?.toLowerCase().includes(search) ||
          invoice.vendor?.name?.toLowerCase().includes(search)
      )
    },

    selectInvoiceForSettlement(invoice) {
      // Open settlement dialog with this invoice pre-selected
      this.closeOutstandingModal()
      this.openDialog(null, [invoice])
    },

    // Dialog Methods
    openDialog(settlement = null, preSelectedInvoices = []) {
      this.selectedSettlement = settlement
      this.showDialog = true

      // If we have pre-selected invoices, pass them to the dialog
      if (preSelectedInvoices.length > 0) {
        this.$nextTick(() => {
          // This would be handled by the dialog component
          // We'll implement this in the SettlementDialog component
        })
      }
    },

    closeDialog() {
      this.showDialog = false
      this.selectedSettlement = null
    },

    closeOutstandingModal() {
      this.showOutstandingModal = false
      this.outstandingFilters.vendorId = ''
      this.outstandingSearch = ''
    },

    // Detail Modal Methods
    async viewDetails(settlement) {
      this.selectedSettlement = settlement
      this.showDetailModal = true

      try {
        this.detailLoading = true
        const { data } = await this.$axios.get(
          `/api/ap-invoices-settlement/${settlement.id}`
        )
        this.settlementDetails = data.data
      } catch (error) {
        console.error('Error fetching settlement details:', error)
        this.showToast('ບໍ່ສາມາດດຶງຂໍ້ມູນລາຍລະອຽດໄດ້', 'error')
      } finally {
        this.detailLoading = false
      }
    },

    closeDetailModal() {
      this.showDetailModal = false
      this.selectedSettlement = null
      this.settlementDetails = null
    },

    // CRUD Operations
    async saveSettlement(formData) {
      try {
        const auditContext = {
          reason:
            formData.reason ||
            (formData.id ? 'Updated settlement' : 'Created new settlement'),
          userId: this.user?.id,
        }

        let response
        if (formData.id) {
          response = await this.$axios.put(`/api/ap-invoices-settlement/${formData.id}`, {
            ...formData,
            ...auditContext,
          })
          this.showToast('ອັບເດດການຊຳລະສຳເລັດ', 'success')
        } else {
          response = await this.$axios.post('/api/ap-invoices-settlement', {
            ...formData,
            ...auditContext,
          })
          
          // Show success with ID since no settlementNumber
          const createdSettlement = response.data?.data
          if (createdSettlement?.id) {
            this.showToast(
              `ສ້າງການຊຳລະສຳເລັດ: #${createdSettlement.id}`,
              'success'
            )
          } else {
            this.showToast('ສ້າງການຊຳລະສຳເລັດ', 'success')
          }
        }

        this.closeDialog()
        await this.fetchData()
        await this.fetchDashboard()
      } catch (error) {
        const message =
          error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ'
        this.showToast(message, 'error')
        console.error('Save error:', error)
      }
    },

    async approveSettlement(settlement) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການອະນຸມັດ',
          `ທ່ານແນ່ໃຈທີ່ຈະອະນຸມັດການຊຳລະ #${settlement.id} ແມ່ນບໍ່?`,
          'question',
          'ບໍ່',
          'ຕົກລົງ'
        )

        if (result.isConfirmed) {
          await this.$axios.post(`/api/ap-invoices-settlement/${settlement.id}/approve`)
          this.showToast('ອະນຸມັດການຊຳລະສຳເລັດ', 'success')
          await this.fetchData()
          await this.fetchDashboard()
        }
      } catch (error) {
        console.error('Error approving settlement:', error)
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການອະນຸມັດ', 'error')
      }
    },

    async completeSettlement(settlement) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການສຳເລັດ',
          `ທ່ານແນ່ໃຈທີ່ຈະສຳເລັດການຊຳລະ #${settlement.id} ແມ່ນບໍ່?`,
          'question',
          'ບໍ່',
          'ຕົກລົງ'
        )

        if (result.isConfirmed) {
          await this.$axios.post(`/api/ap-invoices-settlement/${settlement.id}/complete`)
          this.showToast('ສຳເລັດການຊຳລະສຳເລັດ', 'success')
          await this.fetchData()
          await this.fetchDashboard()
        }
      } catch (error) {
        console.error('Error completing settlement:', error)
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການສຳເລັດ', 'error')
      }
    },

    async cancelSettlement(settlement) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການຍົກເລີກ',
          `ທ່ານແນ່ໃຈທີ່ຈະຍົກເລີກການຊຳລະ #${settlement.id} ແມ່ນບໍ່?`,
          'warning',
          'ບໍ່',
          'ຍົກເລີກ'
        )

        if (result.isConfirmed) {
          await this.$axios.delete(`/api/ap-invoices-settlement/${settlement.id}`)
          this.showToast('ຍົກເລີກການຊຳລະສຳເລັດ', 'success')
          await this.fetchData()
          await this.fetchDashboard()
        }
      } catch (error) {
        console.error('Error cancelling settlement:', error)
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
      this.filters = { status: '', startDate: '', endDate: '' }
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
/* Same styles as before, just updating specific CSS */
.settlement-id {
  font-weight: 600;
  color: #333;
  font-family: monospace;
}

/* All other styles remain the same... */
.ap-settlement-container {
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

.card-value.pending {
  color: #f39c12;
}
.card-value.approved {
  color: #27ae60;
}
.card-value.completed {
  color: #3498db;
}
.card-value.cancelled {
  color: #e74c3c;
}
.card-value.allocated {
  color: #9b59b6;
}

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

.col-md-1 {
  flex: 0 0 8.333%;
  max-width: 8.333%;
  padding: 10px;
}
.col-md-2 {
  flex: 0 0 16.666%;
  max-width: 16.666%;
  padding: 10px;
}
.col-md-3 {
  flex: 0 0 25%;
  max-width: 25%;
  padding: 10px;
}
.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 10px;
}

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

.btn-primary {
  background: #007bff;
  color: white;
}
.btn-secondary {
  background: #6c757d;
  color: white;
}
.btn-info {
  background: #17a2b8;
  color: white;
}
.btn-block {
  width: 100%;
  justify-content: center;
}

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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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

.amount {
  font-weight: 600;
  color: #333;
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

.status-badge.draft {
  background: #f8f9fa;
  color: #6c757d;
  border-color: #dee2e6;
}
.status-badge.pending {
  background: #fff3cd;
  color: #856404;
  border-color: #ffeaa7;
}
.status-badge.approved {
  background: #d4edda;
  color: #155724;
  border-color: #c3e6cb;
}
.status-badge.completed {
  background: #d1ecf1;
  color: #0c5460;
  border-color: #bee5eb;
}
.status-badge.cancelled {
  background: #f8d7da;
  color: #721c24;
  border-color: #f5c6cb;
}

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

.btn-sm.btn-info {
  background: #17a2b8;
  color: white;
}
.btn-sm.btn-warning {
  background: #ffc107;
  color: #212529;
}
.btn-sm.btn-success {
  background: #28a745;
  color: white;
}
.btn-sm.btn-primary {
  background: #007bff;
  color: white;
}
.btn-sm.btn-dark {
  background: #343a40;
  color: white;
}

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

/* Modal Styles */
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

.detail-modal,
.outstanding-modal {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.detail-modal {
  max-width: 600px;
}

.outstanding-modal {
  max-width: 900px;
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

.allocations-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #e9ecef;
}

.allocations-section h5 {
  color: #333;
  margin-bottom: 15px;
}

.outstanding-filters {
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
}

.outstanding-table {
  max-height: 400px;
  overflow-y: auto;
}

.table-sm th,
.table-sm td {
  padding: 8px;
  font-size: 12px;
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
    min-width: 900px;
  }

  .row {
    flex-direction: column;
  }

  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-6 {
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