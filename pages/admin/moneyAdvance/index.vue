<template>
  <div class="money-advance-container">
    <!-- Header Section -->
    <div class="header-section">
      <h1 class="page-title">ອອກລາຍຈ່າຍ</h1>
      <div class="header-actions">
        <button class="btn btn-outline" @click="openAuditReports">
          <i class="fas fa-chart-line"></i> ລາຍງານປະຫວັດ
        </button>
        <button class="btn btn-primary" @click="openDialog()">
          <i class="fas fa-plus"></i> ລົງບັນຊີລາຍຈ່າຍ
        </button>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="summary-cards">
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ຈນ ລາຍຈ່າຍ</h5>
          <p class="card-value">{{ dashboard.counts.total }}</p>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ຄ້າງອະນຸມັດ</h5>
          <p class="card-value pending">{{ dashboard.counts.pending }}</p>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ອະນຸມັດແລ້ວ</h5>
          <p class="card-value approved">{{ dashboard.counts.approved }}</p>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ຊຳລະແລ້ວ</h5>
          <p class="card-value settled">{{ dashboard.counts.settled }}</p>
        </div>
      </div>
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">ລວມຍອດທັງໝົດ</h5>
          <p class="card-value">
            {{ formatCurrency(dashboard.amounts.total) }}
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
            <option value="pending">ຄ້າງອະນຸມັດ</option>
            <option value="approved">ອະນຸມັດແລ້ວ</option>
            <option value="settled">ຊຳລະແລ້ວ</option>
          </select>
        </div>
        <div class="col-md-3">
          <select
            v-model="filters.makerId"
            @change="fetchData"
            class="form-control"
          >
            <option value="">ຈາກຜູ້ໃຊ້ງານທັງໝົດ</option>
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.cus_name }}
            </option>
          </select>
        </div>
        <div class="col-md-3">
          <select
            v-model="filters.ministryId"
            @change="fetchData"
            class="form-control"
          >
            <option value="">ຈາກກະຊວງທັງໝົດ</option>
            <option
              v-for="ministry in ministries"
              :key="ministry.id"
              :value="ministry.id"
            >
              {{ ministry.name }}
            </option>
          </select>
        </div>
        <div class="col-md-2">
          <input
            v-model="searchTerm"
            @input="debounceSearch"
            type="text"
            class="form-control"
            placeholder="ຄົ້ນຫາ ດ້ວຍຈຸດປະສົງ..."
          />
        </div>
        <div class="col-md-2">
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
            <th>ຜູ້ລົງບັນຊີ</th>
            <th>ກະຊວງ</th>
            <th>ຈຳນວນເງິນ</th>
            <th>ຈຸດປະສົງ</th>
            <th>ບັນຊີທະນາຄານ</th>
            <th>ສະຖານະ</th>
            <th>ວັນຄົບຮອບຄວນຊຳລະ</th>
            <th>ວັນທີລົງຊຳລະ</th>
            <th>ຟັງຊັ່ນ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="advance in advances" :key="advance.id">
            <td>{{ advance.id }}</td>
            <td>{{ advance.maker ? advance.maker.cus_name : 'N/A' }}</td>
            <td>
              <div v-if="advance.ministry" class="ministry-info">
                <div class="ministry-name">{{ advance.ministry.name }}</div>
                <div v-if="advance.ministry.ministryCode" class="ministry-code">
                  {{
                    advance.ministry.ministryCode +
                    ' ' +
                    advance.ministry.ministryName
                  }}
                </div>
              </div>
              <span v-else class="no-ministry">ບໍ່ໄດ້ລະບຸກະຊວງ</span>
            </td>
            <td>
              <span class="amount">
                {{ formatCurrency(advance.amount) }}
                <small v-if="advance.currency">{{
                  advance.currency.code
                }}</small>
              </span>
            </td>
            <td>{{ advance.purpose || 'N/A' }}</td>
            <td>
              <div v-if="advance.bankAccount" class="bank-account-info">
                <div class="bank-name">{{ advance.bankAccount.bankName }}</div>
                <div class="account-number">
                  {{ advance.bankAccount.accountNumber }}
                </div>
              </div>
              <span v-else class="no-bank-account">No Bank Account</span>
            </td>
            <td>
              <span :class="['status-badge', advance.status]">
                {{ getStatusInLao(advance.status) }}
              </span>
            </td>
            <td>{{ formatDate(advance.dueDate) }}</td>
            <td>{{ formatDate(advance.bookingDate) }}</td>
            <td>
              <div class="action-buttons">
                <!-- 🆕 NEW: Audit Trail Button -->
                <!-- <button
                  @click="viewAuditTrail(advance)"
                  class="btn btn-sm btn-audit"
                  title="ເບິ່ງປະຫວັດການປ່ຽນແປງ"
                >
                  <i class="fas fa-history"></i>
                </button> -->

                <button
                  @click="viewDetails(advance)"
                  class="btn btn-sm btn-info"
                  title="View Details"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <!-- v-if="advance.status === 'pending'" -->
                <button
                  @click="openDialog(advance)"
                  class="btn btn-sm btn-warning"
                  title="Edit"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  v-if="advance.status === 'pending'"
                  @click="approveAdvance(advance)"
                  class="btn btn-sm btn-success"
                  title="Approve"
                >
                  <i class="fas fa-check"></i>
                </button>
                <!-- 🆕 UPDATED: Create Settlement Button -->
                <button
                  v-if="advance.status === 'approved'"
                  @click="createSettlement(advance)"
                  class="btn btn-sm btn-success"
                  title="Create Settlement"
                >
                  <i class="fas fa-file-invoice-dollar"></i>
                </button>
                <button
                  @click="printAdvanceDetails(advance)"
                  class="btn btn-sm btn-danger"
                  title="Print"
                >
                  <i class="fas fa-print"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- No Data Message -->
      <div v-if="!loading && advances.length === 0" class="no-data">
        <i class="fas fa-inbox"></i>
        <p>No money advances found</p>
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
            Previous
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
            Next
          </button>
        </li>
      </ul>
    </nav>

    <!-- Money Advance Dialog Component -->
    <money-advance-dialog
      :key="radnomKeyMaintenanceDialog"
      :show="showDialog"
      :is-edit="isEdit"
      :form-data="form"
      :users="users"
      :currencies="currencies"
      :bank-accounts="bankAccounts"
      :ministries="ministries"
      :form-loading="formLoading"
      :saving="saving"
      @close="closeDialog"
      @print="
        printAdvanceDetails(advances.find((advance) => advance.id == form.id))
      "
      @save="saveAdvance"
      @currency-changed="updateSelectedCurrency"
      @bank-account-changed="updateSelectedBankAccount"
      @ministry-changed="updateSelectedMinistry"
      @validation-error="showToast"
    />

    <!-- Detail Dialog Component -->
    <money-advance-detail-dialog
      :show="showDetailDialog"
      :details="advanceDetails"
      :loading="detailLoading"
      :status-labels="statusLabels"
      @close="closeDetailDialog"
      @print="printAdvanceDetails"
      @download="downloadAdvanceDetails"
      @retry-load="retryLoadDetails"
      @edit="handleEditFromDetail"
      @approve="handleApproveFromDetail"
      @create-settlement="handleCreateSettlement"
    />

    <!-- 🆕 NEW: Audit Trail Dialog - Fixed version with conditional rendering -->
    <audit-trail-dialog
      v-if="selectedRecordForAudit && selectedRecordForAudit.id"
      :show="showAuditDialog"
      :record-id="selectedRecordForAudit.id"
      :record-data="selectedRecordForAudit"
      :can-restore="canRestoreRecord"
      @close="closeAuditDialog"
      @compare="handleVersionComparison"
      @restore="handleVersionRestore"
      @view-full-changes="handleViewFullChanges"
      @success="showToast"
      @error="(msg) => showToast(msg, 'error')"
    />

    <!-- 🆕 NEW: Version Comparison Dialog - Fixed version with conditional rendering -->
    <version-comparison-dialog
      v-if="selectedRecordForComparison && selectedRecordForComparison.id"
      :show="showComparisonDialog"
      :record-id="selectedRecordForComparison.id"
      :record-data="selectedRecordForComparison"
      :initial-comparison="comparisonData"
      :can-restore="canRestoreRecord"
      @close="closeComparisonDialog"
      @restore="handleVersionRestore"
      @success="showToast"
      @error="(msg) => showToast(msg, 'error')"
    />

    <!-- 🆕 NEW: Audit Reports Dialog -->
    <audit-reports-dialog
      :show="showAuditReportsDialog"
      @close="closeAuditReportsDialog"
      @success="showToast"
      @error="(msg) => showToast(msg, 'error')"
    />

    <!-- Voucher Print Component -->
    <VoucherPrintComponent
      v-if="showPrintVoucher && advanceDetails"
      :key="advanceDetails.id"
      :voucher-data="advanceDetails"
      @close="closePrintVoucher"
    />

    <!-- 🆕 NEW: Settlement Dialog Component -->
    <SettlementDialog
      :visible="showSettlementDialog"
      :settlement="settlementData"
      :outstanding-invoices="[]"
      :currencies="currencies"
      :bank-accounts="bankAccounts"
      :ministries="ministries"
      :chart-accounts="chartAccounts"
      :users="users"
      @close="closeSettlementDialog"
      @save="saveSettlement"
    />
  </div>
</template>

<script>
// Import the components
import MoneyAdvanceDialog from '~/components/MA/paymentDialog'
import MoneyAdvanceDetailDialog from '~/components/MA/paymentDetailDialog'
import VoucherPrintComponent from '~/components/MA/paymentVoucher'
// 🆕 NEW: Import audit components
import AuditTrailDialog from '~/components/MA/paymentAuditDialog'
import VersionComparisonDialog from '~/components/MA/paymentCompareDialog'
import AuditReportsDialog from '~/components/MA/paymentAuditReportDialog'
// 🆕 NEW: Import Settlement Dialog
import SettlementDialog from '~/components/MA/settlementDialog'
import { swalSuccess, swalError2, swalConfirm } from '~/common'

export default {
  name: 'MoneyAdvanceManagement',

  components: {
    MoneyAdvanceDialog,
    MoneyAdvanceDetailDialog,
    VoucherPrintComponent,
    // 🆕 NEW: Register audit components
    AuditTrailDialog,
    VersionComparisonDialog,
    AuditReportsDialog,
    // 🆕 NEW: Register Settlement Dialog
    SettlementDialog,
  },
  middleware: 'auths',
  data() {
    return {
      statusFilter: '',
      statusLabels: {
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        settled: 'ຊຳລະແລ້ວ',
        rejected: 'ປະຕິເສດ',
        cancelled: 'ຍົກເລີກ',
      },
      advances: [],
      dashboard: {
        counts: { total: 0, pending: 0, approved: 0, settled: 0 },
        amounts: { total: 0, pending: 0 },
      },
      users: [],
      currencies: [],
      ministries: [],
      bankAccounts: [],
      chartAccounts: [], // 🆕 NEW: Chart accounts for settlement
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10,
      },
      filters: {
        status: '',
        makerId: '',
        ministryId: '',
      },
      searchTerm: '',
      loading: false,
      saving: false,
      formLoading: false,
      showDialog: false,
      radnomKeyMaintenanceDialog: 1,
      showDetailDialog: false,
      showPrintVoucher: false,
      // 🆕 NEW: Settlement dialog states
      showSettlementDialog: false,
      settlementData: null,
      selectedAdvanceForSettlement: null,
      // 🆕 NEW: Audit dialog states
      showAuditDialog: false,
      showComparisonDialog: false,
      showAuditReportsDialog: false,
      selectedRecordForAudit: null,
      selectedRecordForComparison: null,
      comparisonData: null,
      canRestoreRecord: false,

      isEdit: false,
      selectedAdvance: null,
      advanceDetails: null,
      detailLoading: false,
      form: {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        // 🆕 NEW: Add reason field for audit trail
        reason: '',
        // New fields from backend
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: '',
      },
      searchTimeout: null,
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
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
    // Check user permissions for restore functionality
    this.canRestoreRecord = this.checkRestorePermissions()
  },

  methods: {
    // 🆕 NEW: Check if user can restore records
    checkRestorePermissions() {
      // Add your permission logic here
      return (
        this.user?.role === 'admin' ||
        this.user?.permissions?.includes('restore_records')
      )
    },

    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase()
    },

    getStatusOptions() {
      return [
        { value: '', label: 'ທຸກສະຖານະ' },
        { value: 'pending', label: 'ຄ້າງອະນຸມັດ' },
        { value: 'approved', label: 'ອະນຸມັດແລ້ວ' },
        { value: 'settled', label: 'ຊຳລະແລ້ວ' },
      ]
    },

    async loadInitialData() {
      await Promise.all([
        this.fetchData(),
        this.fetchDashboard(),
        this.fetchUsers(),
        this.fetchCurrencies(),
        this.fetchMinistry(),
        this.fetchBankAccounts(),
        this.fetchChartAccounts(), // 🆕 NEW: Load chart accounts
      ])
    },

    // [Keep all your existing methods for data fetching, CRUD operations, etc.]
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

        const { data } = await this.$axios.get('/api/money-advances', {
          params,
        })

        this.advances = data.data.advances
        this.pagination = data.data.pagination
      } catch (error) {
        this.showToast('Error fetching money advances', 'error')
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async fetchDashboard() {
      try {
        const params = {}

        if (this.filters.makerId) params.makerId = this.filters.makerId
        if (this.filters.ministryId) params.ministryId = this.filters.ministryId

        const { data } = await this.$axios.get(
          '/api/money-advances/dashboard',
          { params }
        )
        this.dashboard = data.data
      } catch (error) {
        console.error('Error fetching dashboard:', error)
      }
    },

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

    async fetchBankAccounts() {
      try {
        const { data } = await this.$axios.get('/api/bank_account/find')
        if (data && data.data) {
          this.bankAccounts = Array.isArray(data.data) ? data.data : []
        } else if (Array.isArray(data)) {
          this.bankAccounts = data
        } else {
          this.bankAccounts = []
        }
        this.bankAccounts = this.bankAccounts.filter(
          (account) => account.isActive
        )
      } catch (error) {
        console.error('Error fetching bank accounts:', error)
        this.bankAccounts = []
      }
    },

    // 🆕 NEW: Fetch chart accounts for settlement
    async fetchChartAccounts() {
      try {
        const { data } = await this.$axios.get('/api/accountChart/find')
        if (data && data.data) {
          this.chartAccounts = Array.isArray(data.data) ? data.data : []
        } else if (Array.isArray(data)) {
          this.chartAccounts = data
        } else {
          this.chartAccounts = []
        }
      } catch (error) {
        console.error('Error fetching chart accounts:', error)
        this.chartAccounts = []
        // Chart accounts are optional, so don't show error to user
      }
    },

    // 🆕 NEW: Audit Trail Methods
    viewAuditTrail(advance) {
      this.selectedRecordForAudit = advance
      this.showAuditDialog = true
      console.warn(`DATA ${JSON.stringify(this.selectedRecordForAudit)} `)
      console.info(`DATA ${JSON.stringify(this.showAuditDialog)} `)
    },

    closeAuditDialog() {
      this.showAuditDialog = false
      // Add a small delay to ensure dialog closes before clearing data
      setTimeout(() => {
        this.selectedRecordForAudit = null
      }, 300)
    },

    handleVersionComparison(comparisonData) {
      this.selectedRecordForComparison = this.selectedRecordForAudit
      this.comparisonData = comparisonData
      this.showAuditDialog = false
      this.showComparisonDialog = true
    },

    closeComparisonDialog() {
      this.showComparisonDialog = false
      // Add a small delay to ensure dialog closes before clearing data
      setTimeout(() => {
        this.selectedRecordForComparison = null
        this.comparisonData = null
      }, 300)
    },

    async handleVersionRestore(versionData) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການກັບຄືນ',
          `ທ່ານແນ່ໃຈທີ່ຈະກັບຄືນໄປຫາເວີຊັ່ນນີ້ບໍ່?`,
          'question',
          'ຍົກເລີກ',
          'ກັບຄືນ'
        )

        if (result.isConfirmed) {
          const recordId =
            this.selectedRecordForAudit?.id ||
            this.selectedRecordForComparison?.id

          // Call restore API endpoint here
          const { data } = await this.$axios.post(
            `/api/money-advances/${recordId}/restore`,
            {
              targetVersion: versionData.version,
              reason: 'Restored via audit trail',
            }
          )

          if (data.success) {
            this.showToast('ກັບຄືນເວີຊັ່ນສຳເລັດ', 'success')
            this.closeAuditDialog()
            this.closeComparisonDialog()
            await this.fetchData() // Refresh the main list
          } else {
            throw new Error(data.message || 'Restore failed')
          }
        }
      } catch (error) {
        console.error('Error restoring version:', error)
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການກັບຄືນ', 'error')
      }
    },

    handleViewFullChanges(auditEntry) {
      // You can implement a detailed changes view here
      console.log('View full changes for:', auditEntry)
      this.showToast('ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ', 'info')
    },

    openAuditReports() {
      this.showAuditReportsDialog = true
    },

    closeAuditReportsDialog() {
      this.showAuditReportsDialog = false
    },

    // 🆕 NEW: Settlement Methods
    async createSettlement(advance) {
      try {
        this.selectedAdvanceForSettlement = advance

        const settlementDate = new Date().toISOString().split('T')[0] // Today's date

        // Prepare settlement data with money advance information
        this.settlementData = {
          id: null, // New settlement
          amount: advance.amount,
          currencyId: advance.currencyId,
          userId: advance.makerId, // Use the advance maker as default user
          ministryId: advance.ministryId || '',
          bankAccountId: advance.bankAccountId || '',
          chartAccountId: '', // Leave empty for user to choose
          method: '', // Leave empty for user to choose
          settlementDate: settlementDate,
          // 🆕 FIX: Add bookingDate field using settlementDate
          bookingDate: settlementDate,
          notes: `ຊຳລະຄືນ ຈາກ ລາຍຈ່າຍເລກທີ #${advance.id} - ${
            advance.purpose || 'ບໍ່ໄດ້ລະບຸເນື້ອໃນ'
          }`,
          moneyAdvanceId: advance.id,
          // 🆕 FIX: Ensure the settlement shows as linked to the money advance
          linkToAdvance: 'true', // This will ensure the radio button shows "ເຊື່ອມຕໍ່ກັບລາຍຈ່າຍລ່ວງໜ້າ"
        }

        console.log('🔗 Creating settlement with money advance link:', {
          advanceId: advance.id,
          linkToAdvance: this.settlementData.linkToAdvance,
          moneyAdvanceId: this.settlementData.moneyAdvanceId,
          settlementDate: this.settlementData.settlementDate,
          bookingDate: this.settlementData.bookingDate,
        })

        // Open the settlement dialog
        this.showSettlementDialog = true
      } catch (error) {
        console.error('Error preparing settlement:', error)
        this.showToast('Error preparing settlement', 'error')
      }
    },

    closeSettlementDialog() {
      this.showSettlementDialog = false
      this.settlementData = null
      this.selectedAdvanceForSettlement = null
    },

    async saveSettlement(settlementData) {
      try {
        // Add audit context
        const auditContext = {
          reason: `Settlement created for Money Advance #${this.selectedAdvanceForSettlement?.id}`,
          userId: this.user?.id,
        }

        // 🆕 FIX: Ensure bookingDate is included (use settlementDate if not provided)
        const completeSettlementData = {
          ...settlementData,
          bookingDate:
            settlementData.bookingDate || settlementData.settlementDate,
          ...auditContext,
        }

        console.log('📤 Sending settlement to API:', completeSettlementData)

        const response = await this.$axios.post(
          '/api/settlements',
          completeSettlementData
        )

        if (response.data && response.data.success) {
          this.showToast('Settlement created successfully', 'success')
          this.closeSettlementDialog()

          // Refresh the money advances list to update status
          await this.fetchData()
          await this.fetchDashboard()
        } else {
          throw new Error(
            response.data?.message || 'Failed to create settlement'
          )
        }
      } catch (error) {
        console.error('Error saving settlement:', error)
        const message =
          error.response?.data?.message || 'Error creating settlement'
        this.showToast(message, 'error')
      }
    },

    // Enhanced save method with audit context
    async saveAdvance(formData) {
      this.saving = true
      try {
        // 🆕 NEW: Add audit context
        const auditContext = {
          reason:
            formData.reason ||
            (this.isEdit ? 'Updated record' : 'Created new record'),
          userId: this.user?.id,
        }

        if (this.isEdit) {
          formData.updateUserId = this.user.id
          await this.$axios.put(`/api/money-advances/${formData.id}`, {
            ...formData,
            ...auditContext,
          })
          this.showToast('Money advance updated successfully', 'success')
        } else {
          const response = await this.$axios.post('/api/money-advances', {
            ...formData,
            ...auditContext,
          })
          this.showToast('Money advance created successfully', 'success')
        }

        // this.closeDialog()
        await this.fetchData()
        await this.fetchDashboard()
      } catch (error) {
        const message =
          error.response?.data?.message || 'Error saving money advance'
        this.showToast(message, 'error')
        console.error('Save error:', error)
      } finally {
        this.saving = false
      }
    },

    // Enhanced approve method with audit context
    async approveAdvance(advance) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນ ການອະນຸມັດ',
          `ທ່ານແນ່ໃຈທີ່ຈະອະນຸມັດລາຍການນີ້ແມ່ນບໍ່ ${this.formatCurrency(
            advance.amount
          )}?`,
          'question',
          'ບໍ່',
          'ຕົກລົງ'
        )

        if (result.isConfirmed) {
          // 🆕 NEW: Add audit context
          await this.$axios.put(`/api/money-advances/${advance.id}/approve`, {
            checkerId: this.user.id,
            reason: 'Approved by manager',
          })
          this.showToast('Money advance approved successfully', 'success')
          await this.fetchData()
          await this.fetchDashboard()
        }
      } catch (error) {
        console.error('Error approving:', error)
        this.showToast('Error approving money advance', 'error')
      }
    },

    // [Keep all your other existing methods...]
    async openDialog(advance = null) {
      this.isEdit = !!advance
      this.showDialog = true
      this.randomKeyMaintenanceDialog = `dialog-${Date.now()}-${Math.floor(
        Math.random() * 1000
      )}`

      if (
        this.users.length === 0 ||
        this.currencies.length === 0 ||
        this.ministries.length === 0
      ) {
        this.formLoading = true
        await Promise.all([
          this.users.length === 0 ? this.fetchUsers() : Promise.resolve(),
          this.currencies.length === 0
            ? this.fetchCurrencies()
            : Promise.resolve(),
          this.ministries.length === 0
            ? this.fetchMinistry()
            : Promise.resolve(),
          this.bankAccounts.length === 0
            ? this.fetchBankAccounts()
            : Promise.resolve(),
        ])
        this.formLoading = false
      }

      if (advance) {
        this.form = {
          id: advance.id,
          amount: advance.amount,
          method: advance.method,
          purpose: advance.purpose || '',
          note: advance.note || '',
          makerId: advance.makerId,
          currencyId: advance.currencyId,
          dueDate: advance.dueDate ? advance.dueDate.split('T')[0] : '',
          bankAccountId: advance.bankAccountId || '',
          ministryId: advance.ministryId || '',
          bookingDate: advance.bookingDate || '',
          exchangeRate: advance.exchangeRate || '',
          reason: '', // Reset reason for each edit

          // New fields from backend
          externalRef: advance.externalRef || '',
          externalRefNo: advance.externalRefNo || '',
          chequeNo: advance.chequeNo || '',
          receiveName: advance.receiveName || '',
          receiveIDNO: advance.receiveIDNO || '',
        }
      } else {
        this.resetForm()

        // Ensure new fields are empty in create mode
        Object.assign(this.form, {
          externalRef: '',
          externalRefNo: '',
          chequeNo: '',
          receiveName: '',
          receiveIDNO: '',
        })

        if (this.currencies.length > 0) {
          const defaultCurrency =
            this.currencies.find((c) => c.code === 'USD') || this.currencies[0]
          this.form.currencyId = defaultCurrency.id
        }
      }
    },

    closeDialog() {
      this.showDialog = false
      this.resetForm()
    },

    resetForm() {
      const today = new Date().toISOString().split('T')[0] // Get today's date

      this.form = {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: this.user.id,
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        exchangeRate: 1,
        ministryId: '',
        bookingDate: today, // ✅ Set to today's date
        reason: '',
      }
    },

    updateSelectedCurrency(currencyId) {
      console.log('Currency changed to:', currencyId)
    },

    updateSelectedBankAccount(bankAccountId) {
      console.log('Bank account changed to:', bankAccountId)
    },

    updateSelectedMinistry(ministryId) {
      console.log('Ministry changed to:', ministryId)
    },

    onFilterChange() {
      this.filters.status = this.statusFilter
      this.pagination.currentPage = 1
      this.fetchData()
      this.fetchDashboard()
    },

    async settleAdvance(advance) {
      if (confirm('Mark money advance as settled?')) {
        try {
          await this.$axios.put(`/api/money-advances/${advance.id}/settle`, {
            reason: 'Marked as settled',
          })
          this.showToast('Money advance settled successfully', 'success')
          await this.fetchData()
          await this.fetchDashboard()
        } catch (error) {
          this.showToast('Error settling money advance', 'error')
        }
      }
    },

    async deleteAdvance(advance) {
      if (
        confirm(
          `Delete money advance for ${this.formatCurrency(advance.amount)}?`
        )
      ) {
        try {
          await this.$axios.delete(`/api/money-advances/${advance.id}`, {
            data: { reason: 'Deleted by user' },
          })
          this.showToast('Money advance deleted successfully', 'success')
          await this.fetchData()
          await this.fetchDashboard()
        } catch (error) {
          this.showToast('Error deleting money advance', 'error')
        }
      }
    },

    async viewDetails(advance) {
      this.selectedAdvance = advance
      this.showDetailDialog = true

      try {
        this.detailLoading = true
        const { data } = await this.$axios.get(
          `/api/money-advances/${advance.id}`
        )
        this.advanceDetails = data.data
      } catch (error) {
        console.error('Error fetching advance details:', error)
        this.showToast('Error loading advance details', 'error')
      } finally {
        this.detailLoading = false
      }
    },

    closeDetailDialog() {
      this.showDetailDialog = false
      this.selectedAdvance = null
      this.advanceDetails = null
    },

    closePrintVoucher() {
      this.showPrintVoucher = false
      setTimeout(() => {
        this.advanceDetails = null
      }, 100)
    },

    printAdvanceDetails(payment) {
      this.showPrintVoucher = false
      this.$nextTick(() => {
        this.advanceDetails = payment
        this.showPrintVoucher = true
      })
    },

    downloadAdvanceDetails() {
      const details = this.formatAdvanceForDownload()
      const blob = new Blob([details], { type: 'text/plain' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `money-advance-${this.advanceDetails.id}.txt`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    },

    retryLoadDetails() {
      if (this.selectedAdvance) {
        this.viewDetails(this.selectedAdvance)
      }
    },

    handleEditFromDetail(advance) {
      this.closeDetailDialog()
      this.openDialog(advance)
    },

    handleApproveFromDetail(advance) {
      this.closeDetailDialog()
      this.approveAdvance(advance)
    },

    handleCreateSettlement(advance) {
      this.closeDetailDialog()
      this.createSettlement(advance) // 🆕 UPDATED: Call the new createSettlement method
    },

    formatAdvanceForDownload() {
      const advance = this.advanceDetails
      return `
MONEY ADVANCE DETAILS
=====================

ID: ${advance.id}
Maker: ${advance.maker?.cus_name || 'N/A'}
Ministry: ${advance.ministry?.name || 'N/A'}
Amount: ${this.formatCurrency(advance.amount)} ${advance.currency?.code || ''}
Purpose: ${advance.purpose || 'N/A'}
Status: ${advance.status.toUpperCase()}
Due Date: ${this.formatDate(advance.dueDate)}
Created Date: ${this.formatDate(advance.createdAt)}
Updated Date: ${this.formatDate(advance.updatedAt)}

${
  advance.bankAccount
    ? `Bank Account: ${advance.bankAccount.bankName} - ${advance.bankAccount.accountNumber}`
    : 'No Bank Account'
}

Notes: ${advance.note || 'No notes provided'}

${advance.checker ? `Checker: ${advance.checker.cus_name}` : ''}
${
  advance.approvedAt
    ? `Approved At: ${this.formatDate(advance.approvedAt)}`
    : ''
}
${advance.settledAt ? `Settled At: ${this.formatDate(advance.settledAt)}` : ''}

Generated on: ${new Date().toLocaleString()}
      `.trim()
    },

    changePage(page) {
      if (page >= 1 && page <= this.pagination.totalPages) {
        this.pagination.currentPage = page
        this.fetchData()
      }
    },

    resetFilters() {
      this.filters = { status: '', makerId: '', ministryId: '' }
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

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount || 0)
    },

    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString()
    },

    getStatusClass(status) {
      const classes = {
        pending: 'warning',
        approved: 'success',
        settled: 'primary',
      }
      return classes[status] || 'secondary'
    },

    getStatusIcon(status) {
      const icons = {
        pending: 'fa-clock',
        approved: 'fa-check-circle',
        settled: 'fa-money-bill-wave',
      }
      return icons[status] || 'fa-question-circle'
    },

    getHistoryIcon(action) {
      const icons = {
        created: 'fa-plus',
        updated: 'fa-edit',
        approved: 'fa-check',
        settled: 'fa-money-bill',
        deleted: 'fa-trash',
      }
      return icons[action] || 'fa-history'
    },

    formatDateTime(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleString()
    },

    isOverdue(dueDate) {
      if (!dueDate) return false
      return new Date(dueDate) < new Date()
    },

    showToast(message, type = 'info') {
      if (this.$toast) {
        this.$toast[type](message)
      } else if (this.$notify) {
        this.$notify({
          title: type === 'error' ? 'Error' : 'Success',
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
/* Keep all your existing styles and add these new ones */

.btn-outline {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

/* 🆕 NEW: Audit button styling */
.btn-audit {
  background: #9b59b6;
  color: white;
}

.btn-audit:hover {
  background: #8e44ad;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(155, 89, 182, 0.3);
}

/* Existing styles continue here... */
.money-advance-container {
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
.card-value.settled {
  color: #3498db;
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
  color: #27ae60;
}

.ministry-info {
  font-size: 12px;
}

.ministry-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 2px;
}

.ministry-code {
  color: #666;
  font-family: monospace;
  background: #e3f2fd;
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 10px;
}

.no-ministry {
  color: #999;
  font-style: italic;
  font-size: 11px;
}

.bank-account-info {
  font-size: 12px;
}

.bank-name {
  font-weight: 600;
  color: #333;
}

.account-number {
  color: #666;
  font-family: monospace;
}

.no-bank-account {
  color: #999;
  font-style: italic;
  font-size: 12px;
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

.status-badge.settled {
  background: #cce5ff;
  color: #004085;
  border-color: #b3d7ff;
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

.btn-sm.btn-danger {
  background: #dc3545;
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

/* Responsive Design */
@media (max-width: 1200px) {
  .table th,
  .table td {
    padding: 10px 6px;
    font-size: 12px;
  }

  .btn-sm {
    width: 24px;
    height: 24px;
    font-size: 10px;
  }
}

@media (max-width: 768px) {
  .summary-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .table-container {
    overflow-x: auto;
  }

  .table {
    min-width: 800px;
  }

  .action-buttons {
    flex-direction: row;
    gap: 3px;
  }

  .row {
    flex-direction: column;
  }

  .col-md-2,
  .col-md-3 {
    flex: 1;
    max-width: 100%;
    margin-bottom: 10px;
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