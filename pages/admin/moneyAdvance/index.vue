<template>
  <div class="money-advance-container">
    <!-- Compact Header -->
    <v-card class="header-card" flat>
      <v-card-text class="py-3">
        <div class="header-content">
          <h1 class="header-title">ອອກລາຍຈ່າຍ</h1>
          <div class="header-actions">
            <v-btn
              color="secondary"
              small
              outlined
              @click="openAuditReports"
            >
              <v-icon left small>mdi-chart-line</v-icon>
              ລາຍງານ
            </v-btn>
            <v-btn
              color="primary"
              small
              @click="openDialog()"
            >
              <v-icon left small>mdi-plus</v-icon>
              ລົງລາຍຈ່າຍ
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
              <div class="summary-amount">{{ dashboard.counts.total }}</div>
              <div class="summary-label">ຈນ ລາຍຈ່າຍ</div>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <v-card class="summary-card pending">
        <v-card-text class="pa-3">
          <div class="summary-layout">
            <div class="summary-icon">
              <v-icon color="warning">mdi-clock-outline</v-icon>
            </div>
            <div class="summary-content">
              <div class="summary-amount">{{ dashboard.counts.pending }}</div>
              <div class="summary-label">ຄ້າງອະນຸມັດ</div>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <v-card class="summary-card approved">
        <v-card-text class="pa-3">
          <div class="summary-layout">
            <div class="summary-icon">
              <v-icon color="success">mdi-check-circle</v-icon>
            </div>
            <div class="summary-content">
              <div class="summary-amount">{{ dashboard.counts.approved }}</div>
              <div class="summary-label">ອະນຸມັດແລ້ວ</div>
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
              <div class="summary-amount">{{ dashboard.counts.settled }}</div>
              <div class="summary-label">ຊຳລະແລ້ວ</div>
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
              <div class="summary-amount">{{ formatCurrency(dashboard.amounts.total) }}</div>
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
            <v-menu
              ref="fromDateMenu"
              v-model="fromDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="formattedFromDate"
                  label="ວັນທີ່ເລີ່ມຕົ້ນ"
                  hint="DD/MM/YYYY"
                  dense
                  outlined
                  clearable
                  hide-details="auto"
                  prepend-inner-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  @click:clear="clearFromDate"
                />
              </template>
              <v-date-picker
                v-model="pickerFromDate"
                no-title
                @input="setFromDate"
              />
            </v-menu>
          </v-col>

          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-menu
              ref="toDateMenu"
              v-model="toDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="formattedToDate"
                  label="ວັນທີ່ສິ້ນສຸດ"
                  hint="DD/MM/YYYY"
                  dense
                  outlined
                  clearable
                  hide-details="auto"
                  prepend-inner-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  @click:clear="clearToDate"
                />
              </template>
              <v-date-picker
                v-model="pickerToDate"
                no-title
                @input="setToDate"
              />
            </v-menu>
          </v-col>

          <!-- Status Filter -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-select
              v-model="statusFilter"
              :items="statusOptions"
              label="ສະຖານະ"
              dense
              outlined
              clearable
              hide-details="auto"
              @change="onFilterChange"
            />
          </v-col>

          <!-- User Filter -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-select
              v-model="filters.makerId"
              :items="userOptions"
              label="ຜູ້ໃຊ້"
              dense
              outlined
              clearable
              hide-details="auto"
              @change="fetchData"
            />
          </v-col>

          <!-- Ministry Filter -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-select
              v-model="filters.ministryId"
              :items="ministryOptions"
              label="ກະຊວງ"
              dense
              outlined
              clearable
              hide-details="auto"
              @change="fetchData"
            />
          </v-col>

          <!-- Search and Actions -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <div class="filter-actions">
              <v-text-field
                v-model="searchTerm"
                label="ຄົ້ນຫາ"
                dense
                outlined
                clearable
                hide-details="auto"
                prepend-inner-icon="mdi-magnify"
                @input="debounceSearch"
                style="margin-bottom: 4px;"
              />
              <div class="action-buttons">
                <v-btn
                  color="primary"
                  x-small
                  @click="applyFilters"
                  :loading="loading"
                >
                  <v-icon small>mdi-filter</v-icon>
                </v-btn>
                <v-btn
                  x-small
                  outlined
                  @click="resetFilters"
                  :disabled="loading"
                >
                  <v-icon small>mdi-refresh</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Compact Data Table -->
    <v-card class="table-card" flat>
      <v-card-title class="py-2 px-3">
        <span class="table-title">ລາຍການ ({{ advances.length }})</span>
        <v-spacer />
        <div class="table-controls">
          <v-select
            v-model="pagination.itemsPerPage"
            :items="perPageOptions"
            label="ແຖວ"
            dense
            outlined
            hide-details
            style="max-width: 70px"
            @input="changePage(1)"
          />
        </div>
      </v-card-title>

      <v-data-table
        :headers="compactHeaders"
        :items="advances"
        :page.sync="pagination.currentPage"
        :items-per-page="pagination.itemsPerPage"
        :server-items-length="pagination.totalItems"
        class="compact-table"
        dense
        hide-default-footer
        :loading="loading"
        loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
      >
        <!-- ID Column -->
        <template #item.id="{ item }">
          <span class="id-text">{{ item.id }}</span>
        </template>

        <!-- Maker Column -->
        <template #item.maker="{ item }">
          <span class="maker-name">{{ item.maker ? item.maker.cus_name : 'N/A' }}</span>
        </template>

        <!-- Ministry Column -->
        <template #item.ministry="{ item }">
          <div v-if="item.ministry" class="ministry-compact">
            <v-chip color="info" x-small outlined>
              {{ item.ministry.ministryCode || item.ministry.name }}
            </v-chip>
          </div>
          <span v-else class="no-data">-</span>
        </template>

        <!-- Amount Column -->
        <template #item.amount="{ item }">
          <div class="amount-column">
            <span class="amount-value">{{ formatCurrency(item.amount) }}</span>
            <span v-if="item.currency" class="currency-code">{{ item.currency.code }}</span>
          </div>
        </template>

        <!-- Purpose Column -->
        <template #item.purpose="{ item }">
          <span class="purpose-text" :title="item.purpose">
            {{ truncateText(item.purpose, 20) }}
          </span>
        </template>

        <!-- Bank Account Column -->
        <template #item.bankAccount="{ item }">
          <div v-if="item.bankAccount" class="bank-compact">
            <div class="bank-name">{{ item.bankAccount.bankName }}</div>
            <div class="account-number">{{ item.bankAccount.accountNumber }}</div>
          </div>
          <span v-else class="no-data">-</span>
        </template>

        <!-- Status Column -->
        <template #item.status="{ item }">
          <v-chip
            :color="getStatusColor(item.status)"
            x-small
            outlined
          >
            {{ getStatusInLao(item.status) }}
          </v-chip>
        </template>

        <!-- Due Date Column -->
        <template #item.dueDate="{ item }">
          <span 
            class="date-compact"
            :class="{ 'overdue': isOverdue(item.dueDate) }"
          >
            {{ formatCompactDate(item.dueDate) }}
          </span>
        </template>

        <!-- Booking Date Column -->
        <template #item.bookingDate="{ item }">
          <span class="date-compact">{{ formatCompactDate(item.bookingDate) }}</span>
        </template>

        <!-- Actions Column -->
        <template #item.actions="{ item }">
          <div class="action-buttons-table">
            <v-btn
              icon
              x-small
              @click="viewDetails(item)"
              title="ເບິ່ງລາຍລະອຽດ"
            >
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
            <v-btn
              icon
              x-small
              @click="openDialog(item)"
              title="ແກ້ໄຂ"
            >
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              v-if="item.status === 'pending'"
              icon
              x-small
              color="success"
              @click="approveAdvance(item)"
              title="ອະນຸມັດ"
            >
              <v-icon small>mdi-check</v-icon>
            </v-btn>
            <v-btn
              v-if="item.status === 'approved'"
              icon
              x-small
              color="success"
              @click="createSettlement(item)"
              title="ສ້າງການຊຳລະ"
            >
              <v-icon small>mdi-cash-register</v-icon>
            </v-btn>
            <v-btn
              icon
              x-small
              color="error"
              @click="printAdvanceDetails(item)"
              title="ພິມ"
            >
              <v-icon small>mdi-printer</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>

      <!-- Custom Compact Pagination -->
      <div class="compact-pagination">
        <div class="pagination-info">
          {{ paginationInfo.start }}-{{ paginationInfo.end }} ຈາກ {{ pagination.totalItems }}
        </div>
        <div class="pagination-controls">
          <v-btn
            icon
            small
            :disabled="pagination.currentPage === 1"
            @click="changePage(pagination.currentPage - 1)"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <div class="page-numbers">
            <v-btn
              v-for="page in paginationPages"
              :key="page"
              :color="page === pagination.currentPage ? 'primary' : ''"
              :outlined="page !== pagination.currentPage"
              x-small
              min-width="30"
              @click="changePage(page)"
            >
              {{ page }}
            </v-btn>
          </div>

          <v-btn
            icon
            small
            :disabled="pagination.currentPage === pagination.totalPages"
            @click="changePage(pagination.currentPage + 1)"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>

    <!-- No Data Message -->
    <v-card v-if="!loading && advances.length === 0" class="no-data-card" flat>
      <v-card-text class="text-center py-8">
        <v-icon size="64" color="grey lighten-2">mdi-inbox</v-icon>
        <div class="mt-3 text-h6 grey--text">ບໍ່ມີຂໍ້ມູນ</div>
        <div class="grey--text">ບໍ່ພົບລາຍການລາຍຈ່າຍທີ່ຕົງກັບເງື່ອນໄຂການຄົ້ນຫາ</div>
      </v-card-text>
    </v-card>

    <!-- Dialog Components (keeping existing structure) -->
    <money-advance-dialog
      :key="randomKeyMaintenanceDialog"
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
      @print="printAdvanceDetails(advances.find((advance) => advance.id == form.id))"
      @save="saveAdvance"
      @currency-changed="updateSelectedCurrency"
      @bank-account-changed="updateSelectedBankAccount"
      @ministry-changed="updateSelectedMinistry"
      @validation-error="showToast"
    />

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

    <audit-reports-dialog
      :show="showAuditReportsDialog"
      @close="closeAuditReportsDialog"
      @success="showToast"
      @error="(msg) => showToast(msg, 'error')"
    />

    <VoucherPrintComponent
      v-if="showPrintVoucher && advanceDetails"
      :key="advanceDetails.id"
      :voucher-data="advanceDetails"
      @close="closePrintVoucher"
    />

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

    <!-- Loading Overlay -->
    <v-overlay :value="loading">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary"
      />
    </v-overlay>
  </div>
</template>

<script>
// Import all the existing components
import MoneyAdvanceDialog from '~/components/MA/paymentDialog'
import MoneyAdvanceDetailDialog from '~/components/MA/paymentDetailDialog'
import VoucherPrintComponent from '~/components/MA/paymentVoucher'
import AuditTrailDialog from '~/components/MA/paymentAuditDialog'
import VersionComparisonDialog from '~/components/MA/paymentCompareDialog'
import AuditReportsDialog from '~/components/MA/paymentAuditReportDialog'
import SettlementDialog from '~/components/MA/settlementDialog'
import { swalSuccess, swalError2, swalConfirm } from '~/common'

export default {
  name: 'MoneyAdvanceManagement',

  components: {
    MoneyAdvanceDialog,
    MoneyAdvanceDetailDialog,
    VoucherPrintComponent,
    AuditTrailDialog,
    VersionComparisonDialog,
    AuditReportsDialog,
    SettlementDialog,
  },
  middleware: 'auths',
  
  data() {
    return {
      // Date picker state
      fromDateMenu: false,
      toDateMenu: false,
      pickerFromDate: null,
      pickerToDate: null,
      formattedFromDate: null,
      formattedToDate: null,

      // Filter and search state
      statusFilter: '',
      searchTerm: '',
      searchTimeout: null,

      // Status configuration
      statusLabels: {
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        settled: 'ຊຳລະແລ້ວ',
        rejected: 'ປະຕິເສດ',
        cancelled: 'ຍົກເລີກ',
      },

      // Data arrays
      advances: [],
      users: [],
      currencies: [],
      ministries: [],
      bankAccounts: [],
      chartAccounts: [],

      // Dashboard data
      dashboard: {
        counts: { total: 0, pending: 0, approved: 0, settled: 0 },
        amounts: { total: 0, pending: 0 },
      },

      // Pagination
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 25,
      },

      // Filters
      filters: {
        status: '',
        makerId: '',
        ministryId: '',
        fromDate: '',
        toDate: '',
      },

      // Loading states
      loading: false,
      saving: false,
      formLoading: false,
      detailLoading: false,

      // Dialog states
      showDialog: false,
      randomKeyMaintenanceDialog: 1,
      showDetailDialog: false,
      showPrintVoucher: false,
      showSettlementDialog: false,
      showAuditDialog: false,
      showComparisonDialog: false,
      showAuditReportsDialog: false,

      // Selected data
      selectedAdvance: null,
      advanceDetails: null,
      settlementData: null,
      selectedAdvanceForSettlement: null,
      selectedRecordForAudit: null,
      selectedRecordForComparison: null,
      comparisonData: null,

      // Form state
      isEdit: false,
      canRestoreRecord: false,
      form: {
        id: null,
        amount: '',
        method: 'cash',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        reason: '',
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: '',
      },
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    // Compact table headers
    compactHeaders() {
      return [
        { text: 'ID', value: 'id', width: '60px', sortable: true },
        { text: 'ຜູ້ລົງ', value: 'maker', width: '100px', sortable: true },
        { text: 'ກົມ', value: 'ministry', width: '80px', sortable: false },
        { text: 'ຈຳນວນ', value: 'amount', width: '100px', sortable: true },
        { text: 'ຈຸດປະສົງ', value: 'purpose', width: '150px', sortable: true },
        { text: 'ບັນຊີ', value: 'bankAccount', width: '120px', sortable: false },
        { text: 'ສະຖານະ', value: 'status', width: '80px', sortable: true },
        { text: 'ຄົບກຳໜົດ', value: 'dueDate', width: '80px', sortable: true },
        { text: 'ວັນທີ', value: 'bookingDate', width: '80px', sortable: true },
        { text: '', value: 'actions', width: '120px', sortable: false },
      ]
    },

    // Filter options
    statusOptions() {
      return [
        { text: 'ທຸກສະຖານະ', value: '' },
        { text: 'ຄ້າງອະນຸມັດ', value: 'pending' },
        { text: 'ອະນຸມັດແລ້ວ', value: 'approved' },
        { text: 'ຊຳລະແລ້ວ', value: 'settled' },
      ]
    },

    userOptions() {
      return [
        { text: 'ທຸກຜູ້ໃຊ້', value: '' },
        ...this.users.map(user => ({
          text: user.cus_name,
          value: user.id
        }))
      ]
    },

    ministryOptions() {
      return [
        { text: 'ທຸກກະຊວງ', value: '' },
        ...this.ministries.map(ministry => ({
          text: ministry.name,
          value: ministry.id
        }))
      ]
    },

    perPageOptions() {
      return [10, 25, 50, 100]
    },

    paginationPages() {
      const pages = []
      const start = Math.max(1, this.pagination.currentPage - 2)
      const end = Math.min(this.pagination.totalPages, this.pagination.currentPage + 2)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      return pages
    },

    paginationInfo() {
      const start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage + 1
      const end = Math.min(start + this.pagination.itemsPerPage - 1, this.pagination.totalItems)
      return {
        start: this.pagination.totalItems > 0 ? start : 0,
        end,
        total: this.pagination.totalItems,
      }
    },
  },

  async mounted() {
    await this.loadInitialData()
    this.canRestoreRecord = this.checkRestorePermissions()
  },

  methods: {
    // Date formatting and handling methods
    formatDate(date) {
      if (!date) return null
      const d = new Date(date)
      const day = String(d.getDate()).padStart(2, '0')
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const year = d.getFullYear()
      return `${day}/${month}/${year}`
    },

    setFromDate(val) {
      this.formattedFromDate = this.formatDate(val)
      this.pickerFromDate = val
      this.filters.fromDate = val
      this.fromDateMenu = false
    },

    setToDate(val) {
      this.formattedToDate = this.formatDate(val)
      this.pickerToDate = val
      this.filters.toDate = val
      this.toDateMenu = false
    },

    clearFromDate() {
      this.formattedFromDate = null
      this.pickerFromDate = null
      this.filters.fromDate = ''
    },

    clearToDate() {
      this.formattedToDate = null
      this.pickerToDate = null
      this.filters.toDate = ''
    },

    formatCompactDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      })
    },

    // Utility methods
    truncateText(text, length = 20) {
      if (!text) return 'N/A'
      return text.length > length ? text.substring(0, length) + '...' : text
    },

    getStatusColor(status) {
      const colors = {
        pending: 'warning',
        approved: 'success',
        settled: 'info',
        rejected: 'error',
        cancelled: 'grey'
      }
      return colors[status] || 'grey'
    },

    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase()
    },

    isOverdue(dueDate) {
      if (!dueDate) return false
      return new Date(dueDate) < new Date()
    },

    checkRestorePermissions() {
      return this.user?.role === 'admin' || this.user?.permissions?.includes('restore_records')
    },

    // Data loading methods (keeping existing logic)
    async loadInitialData() {
      await Promise.all([
        this.fetchData(),
        this.fetchDashboard(),
        this.fetchUsers(),
        this.fetchCurrencies(),
        this.fetchMinistry(),
        this.fetchBankAccounts(),
        this.fetchChartAccounts(),
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

        const { data } = await this.$axios.get('/api/money-advances', { params })

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
        if (this.filters.fromDate) params.fromDate = this.filters.fromDate
        if (this.filters.toDate) params.toDate = this.filters.toDate

        const { data } = await this.$axios.get('/api/money-advances/dashboard', { params })
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
        this.bankAccounts = this.bankAccounts.filter(account => account.isActive)
      } catch (error) {
        console.error('Error fetching bank accounts:', error)
        this.bankAccounts = []
      }
    },

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
      }
    },

    // Filter and search methods
    onFilterChange() {
      this.filters.status = this.statusFilter
      this.pagination.currentPage = 1
      this.fetchData()
      this.fetchDashboard()
    },

    applyFilters() {
      this.pagination.currentPage = 1
      this.fetchData()
      this.fetchDashboard()
    },

    resetFilters() {
      this.filters = { status: '', makerId: '', ministryId: '', fromDate: '', toDate: '' }
      this.searchTerm = ''
      this.statusFilter = ''
      this.clearFromDate()
      this.clearToDate()
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

    // Keep all existing dialog and CRUD methods
    async openDialog(advance = null) {
      this.isEdit = !!advance
      this.showDialog = true
      this.randomKeyMaintenanceDialog = `dialog-${Date.now()}-${Math.floor(Math.random() * 1000)}`

      if (this.users.length === 0 || this.currencies.length === 0 || this.ministries.length === 0) {
        this.formLoading = true
        await Promise.all([
          this.users.length === 0 ? this.fetchUsers() : Promise.resolve(),
          this.currencies.length === 0 ? this.fetchCurrencies() : Promise.resolve(),
          this.ministries.length === 0 ? this.fetchMinistry() : Promise.resolve(),
          this.bankAccounts.length === 0 ? this.fetchBankAccounts() : Promise.resolve(),
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
          reason: '',
          externalRef: advance.externalRef || '',
          externalRefNo: advance.externalRefNo || '',
          chequeNo: advance.chequeNo || '',
          receiveName: advance.receiveName || '',
          receiveIDNO: advance.receiveIDNO || '',
        }
      } else {
        this.resetForm()
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'USD') || this.currencies[0]
          this.form.currencyId = defaultCurrency.id
        }
      }
    },

    closeDialog() {
      this.showDialog = false
      this.resetForm()
    },

    resetForm() {
      const today = new Date().toISOString().split('T')[0]
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
        bookingDate: today,
        reason: '',
        method: 'cash',
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: '',
      }
      this.isEdit = false
    },

    async saveAdvance(formData) {
      this.saving = true
      try {
        const auditContext = {
          reason: formData.reason || (this.isEdit ? 'Updated record' : 'Created new record'),
          userId: this.user?.id,
        }

        if (this.isEdit && formData.id) {
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

          const newRecord = response.data.data
          this.form = {
            id: newRecord.id,
            amount: newRecord.amount,
            method: newRecord.method || 'cash',
            purpose: newRecord.purpose || '',
            note: newRecord.note || '',
            makerId: newRecord.makerId,
            currencyId: newRecord.currencyId,
            dueDate: newRecord.dueDate ? newRecord.dueDate.split('T')[0] : '',
            bankAccountId: newRecord.bankAccountId || '',
            ministryId: newRecord.ministryId || '',
            bookingDate: newRecord.bookingDate || '',
            exchangeRate: newRecord.exchangeRate || '',
            reason: '',
            externalRef: newRecord.externalRef || '',
            externalRefNo: newRecord.externalRefNo || '',
            chequeNo: newRecord.chequeNo || '',
            receiveName: newRecord.receiveName || '',
            receiveIDNO: newRecord.receiveIDNO || '',
          }

          this.isEdit = true
          this.$nextTick(() => {
            this.randomKeyMaintenanceDialog = `dialog-${Date.now()}-${Math.floor(Math.random() * 1000)}`
          })

          this.showToast('Money advance created successfully', 'success')
        }

        await this.fetchData()
        await this.fetchDashboard()
      } catch (error) {
        const message = error.response?.data?.message || 'Error saving money advance'
        this.showToast(message, 'error')
        console.error('Save error:', error)
      } finally {
        this.saving = false
      }
    },

    async approveAdvance(advance) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນ ການອະນຸມັດ',
          `ທ່ານແນ່ໃຈທີ່ຈະອະນຸມັດລາຍການນີ້ແມ່ນບໍ່ ${this.formatCurrency(advance.amount)}?`,
          'question',
          'ບໍ່',
          'ຕົກລົງ'
        )

        if (result.isConfirmed) {
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

    // Keep all other existing methods (viewDetails, createSettlement, etc.)
    async viewDetails(advance) {
      this.selectedAdvance = advance
      this.showDetailDialog = true

      try {
        this.detailLoading = true
        const { data } = await this.$axios.get(`/api/money-advances/${advance.id}`)
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

    async createSettlement(advance) {
      try {
        this.selectedAdvanceForSettlement = advance
        const settlementDate = new Date().toISOString().split('T')[0]

        this.settlementData = {
          id: null,
          amount: advance.amount,
          currencyId: advance.currencyId,
          userId: advance.makerId,
          ministryId: advance.ministryId || '',
          bankAccountId: advance.bankAccountId || '',
          chartAccountId: '',
          method: '',
          settlementDate: settlementDate,
          bookingDate: settlementDate,
          notes: `ຊຳລະຄືນ ຈາກ ລາຍຈ່າຍເລກທີ #${advance.id} - ${advance.purpose || 'ບໍ່ໄດ້ລະບຸເນື້ອໃນ'}`,
          moneyAdvanceId: advance.id,
          linkToAdvance: 'true',
        }

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
        const auditContext = {
          reason: `Settlement created for Money Advance #${this.selectedAdvanceForSettlement?.id}`,
          userId: this.user?.id,
        }

        const completeSettlementData = {
          ...settlementData,
          bookingDate: settlementData.bookingDate || settlementData.settlementDate,
          ...auditContext,
        }

        const response = await this.$axios.post('/api/settlements', completeSettlementData)

        if (response.data && response.data.success) {
          this.showToast('Settlement created successfully', 'success')
          this.closeSettlementDialog()
          await this.fetchData()
          await this.fetchDashboard()
        } else {
          throw new Error(response.data?.message || 'Failed to create settlement')
        }
      } catch (error) {
        console.error('Error saving settlement:', error)
        const message = error.response?.data?.message || 'Error creating settlement'
        this.showToast(message, 'error')
      }
    },

    printAdvanceDetails(payment) {
      this.showPrintVoucher = false
      this.$nextTick(() => {
        this.advanceDetails = payment
        this.showPrintVoucher = true
      })
    },

    closePrintVoucher() {
      this.showPrintVoucher = false
      setTimeout(() => {
        this.advanceDetails = null
      }, 100)
    },

    // Audit methods (keeping existing)
    viewAuditTrail(advance) {
      this.selectedRecordForAudit = advance
      this.showAuditDialog = true
    },

    closeAuditDialog() {
      this.showAuditDialog = false
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
          const recordId = this.selectedRecordForAudit?.id || this.selectedRecordForComparison?.id

          const { data } = await this.$axios.post(`/api/money-advances/${recordId}/restore`, {
            targetVersion: versionData.version,
            reason: 'Restored via audit trail',
          })

          if (data.success) {
            this.showToast('ກັບຄືນເວີຊັ່ນສຳເລັດ', 'success')
            this.closeAuditDialog()
            this.closeComparisonDialog()
            await this.fetchData()
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
      console.log('View full changes for:', auditEntry)
      this.showToast('ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ', 'info')
    },

    openAuditReports() {
      this.showAuditReportsDialog = true
    },

    closeAuditReportsDialog() {
      this.showAuditReportsDialog = false
    },

    // Detail dialog handlers
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
      this.createSettlement(advance)
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

${advance.bankAccount ? `Bank Account: ${advance.bankAccount.bankName} - ${advance.bankAccount.accountNumber}` : 'No Bank Account'}

Notes: ${advance.note || 'No notes provided'}

${advance.checker ? `Checker: ${advance.checker.cus_name}` : ''}
${advance.approvedAt ? `Approved At: ${this.formatDate(advance.approvedAt)}` : ''}
${advance.settledAt ? `Settled At: ${this.formatDate(advance.settledAt)}` : ''}

Generated on: ${new Date().toLocaleString()}
      `.trim()
    },

    // Pagination
    changePage(page) {
      if (page >= 1 && page <= this.pagination.totalPages) {
        this.pagination.currentPage = page
        this.fetchData()
      }
    },

    // Update methods for form dialog
    updateSelectedCurrency(currencyId) {
      console.log('Currency changed to:', currencyId)
    },

    updateSelectedBankAccount(bankAccountId) {
      console.log('Bank account changed to:', bankAccountId)
    },

    updateSelectedMinistry(ministryId) {
      console.log('Ministry changed to:', ministryId)
    },

    // Utility methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount || 0)
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
        console.log(`${type.toUpperCase()}: ${message}`)
      }
    },
  },
}
</script>

<style scoped>
.money-advance-container {
  padding: 8px;
  background-color: #fafafa;
  min-height: 100vh;
}

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

.summary-card.pending {
  border-left: 4px solid #f59e0b;
}

.summary-card.approved {
  border-left: 4px solid #10b981;
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
  flex-direction: column;
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

.table-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.compact-table {
  font-size: 12px;
}

.compact-table >>> th {
  font-size: 11px !important;
  font-weight: 600 !important;
  padding: 6px 8px !important;
  height: 36px !important;
  background: #f8fafc !important;
}

.compact-table >>> td {
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

.bank-compact {
  font-size: 10px;
}

.bank-name {
  font-weight: 600;
  color: #2d3748;
}

.account-number {
  color: #718096;
  font-family: monospace;
}

.date-compact {
  font-size: 10px;
  color: #4a5568;
}

.date-compact.overdue {
  color: #e53e3e;
  font-weight: 600;
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

/* Compact Pagination */
.compact-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-top: 1px solid #e2e8f0;
  background: #f8fafc;
}

.pagination-info {
  font-size: 11px;
  color: #718096;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 4px;
}

.page-numbers {
  display: flex;
  gap: 2px;
  margin: 0 8px;
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
  .money-advance-container {
    padding: 4px;
  }

  .summary-grid {
    grid-template-columns: 1fr;
  }

  .compact-pagination {
    flex-direction: column;
    gap: 8px;
    align-items: stretch;
    text-align: center;
  }

  .table-controls {
    flex-direction: column;
    gap: 8px;
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