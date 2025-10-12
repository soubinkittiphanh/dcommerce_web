<template>
  <div>
    <!-- Compact Header -->
    <v-card class="header-card" flat>
      <v-card-text class="py-3">
        <div class="header-content">
          <h1 class="header-title">ອອກລາຍຈ່າຍ ເງິນສົດ</h1>
          <div class="header-actions">
            <v-btn color="primary" small @click="openDialog()">
              <v-icon left small>mdi-plus</v-icon>
              ລົງລາຍຈ່າຍ
            </v-btn>
            <v-btn
              color="secondary"
              small
              outlined
              @click="exportData"
              :disabled="loading || advances.length === 0"
            >
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
              <div class="summary-amount">{{ dashboard.counts.total }}</div>
              <div class="summary-label">ຈນ ລາຍຈ່າຍ</div>
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
              <div class="summary-amount">
                {{ formatCurrency(dashboard.amounts.total) }}
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
            <v-text-field
              v-model="searchTerm"
              label="ຄົ້ນຫາ"
              dense
              outlined
              clearable
              hide-details="auto"
              prepend-inner-icon="mdi-magnify"
              @input="debounceSearch"
            />
          </v-col>
          
          <v-col cols="12" sm="6" md="2" class="px-1">
            <div class="action-buttons">
              <v-btn
                color="primary"
                x-small
                @click="applyFilters"
                :loading="loading"
              >
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
        <span class="table-title">ລາຍການ ({{ advances.length }})</span>
        <v-spacer />
      </v-card-title>

      <v-data-table
        :headers="compactHeaders"
        :items="advances"
        :items-per-page="25"
        class="compact-table"
        dense
        :loading="loading"
        loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
      >
        <!-- ID Column -->
        <template #item.id="{ item }">
          <span class="id-text">{{ item.id }}</span>
        </template>

        <!-- Ministry Column -->
        <template #item.ministry="{ item }">
          <div v-if="item.ministry" class="ministry-compact">
            <v-chip color="info" x-small outlined>
              {{ `${item.ministry.ministryCode} - ${item.ministry.ministryName}` }}
            </v-chip>
          </div>
          <span v-else class="no-data">-</span>
        </template>

        <!-- Paid Amount Column -->
        <template #item.amount="{ item }">
          <div class="amount-column">
            <span class="amount-value">
              {{ formatCurrency(item.amount, item.currency.code) }}
            </span>
            <span v-if="item.currency" class="currency-code">
              {{ item.currency.code }}
            </span>
          </div>
        </template>

        <!-- Settle Amount Column -->
        <template #item.settleLine="{ item }">
          <div class="amount-column">
            <span class="amount-value">
              {{ formatCurrency(getSettleAmount(item.settlementLine || []), item.currency.code) }}
            </span>
            <span v-if="item.currency" class="currency-code">
              {{ item.currency.code }}
            </span>
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
          <v-chip :color="getStatusColor(item.status)" x-small outlined>
            {{ getStatusInLao(item.status) }}
          </v-chip>
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
            <v-btn icon x-small @click="openDialog(item)" title="ແກ້ໄຂ">
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
    </v-card>

    <!-- No Data Message -->
    <v-card v-if="!loading && advances.length === 0" class="no-data-card" flat>
      <v-card-text class="text-center py-8">
        <v-icon size="64" color="grey lighten-2">mdi-inbox</v-icon>
        <div class="mt-3 text-h6 grey--text">ບໍ່ມີຂໍ້ມູນ</div>
        <div class="grey--text">ບໍ່ພົບລາຍການລາຍຈ່າຍທີ່ຕົງກັບເງື່ອນໄຂການຄົ້ນຫາ</div>
      </v-card-text>
    </v-card>

    <!-- Dialog Components -->
    <money-advance-dialog
      :key="dialogKey"
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
      @edit="handleEditFromDetail"
      @approve="handleApproveFromDetail"
      @create-settlement="handleCreateSettlement"
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
      <v-progress-circular indeterminate size="64" color="primary" />
    </v-overlay>
  </div>
</template>

<script>
import MoneyAdvanceDialog from '~/components/MA/paymentDialog'
import MoneyAdvanceDetailDialog from '~/components/MA/paymentDetailDialog'
import VoucherPrintComponent from '~/components/MA/paymentVoucher'
import SettlementDialog from '~/components/MA/settlementDialog'
import { swalConfirm } from '~/common'
import * as XLSX from 'xlsx'

export default {
  name: 'MoneyAdvanceManagement',

  components: {
    MoneyAdvanceDialog,
    MoneyAdvanceDetailDialog,
    VoucherPrintComponent,
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

      // Search state
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

      // Filters
      filters: {
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
      dialogKey: 1,
      showDetailDialog: false,
      showPrintVoucher: false,
      showSettlementDialog: false,

      // Selected data
      selectedAdvance: null,
      advanceDetails: null,
      settlementData: null,
      selectedAdvanceForSettlement: null,

      // Form state
      isEdit: false,
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
        exchangeRate: 1,
      },
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    compactHeaders() {
      return [
        { text: 'ID', value: 'id', width: '60px', sortable: true },
        { text: 'ວັນທີ', value: 'bookingDate', width: '80px', sortable: true },
        { text: 'ກົມ', value: 'ministry', width: '80px', sortable: false },
        { text: 'ຈຳນວນ ຈ່າຍ', value: 'amount', width: '100px', sortable: true },
        { text: 'ຈຳນວນ ຮັບ', value: 'settleLine', width: '100px', sortable: true },
        { text: 'ຈຸດປະສົງ', value: 'purpose', width: '150px', sortable: true },
        { text: 'ບັນຊີ', value: 'bankAccount', width: '120px', sortable: false },
        { text: 'ສະຖານະ', value: 'status', width: '80px', sortable: true },
        { text: '', value: 'actions', width: '120px', sortable: false },
      ]
    },

    userOptions() {
      return [
        { text: 'ທຸກຜູ້ໃຊ້', value: '' },
        ...this.users.map((user) => ({
          text: user.cus_name,
          value: user.id,
        })),
      ]
    },

    ministryOptions() {
      return [
        { text: 'ທຸກກະຊວງ', value: '' },
        ...this.ministries.map((ministry) => ({
          text: `${ministry.ministryCode} - ${ministry.ministryName}`,
          value: ministry.id,
        })),
      ]
    },
  },

  async mounted() {
    await this.loadInitialData()
  },

  methods: {
    // Excel Export Function
    exportData() {
      try {
        // Prepare data for export
        const exportData = this.advances.map((item, index) => ({
          'ລຳດັບ': index + 1,
          'ID': item.id,
          'ວັນທີ': this.formatDate(item.bookingDate),
          'ກະຊວງ/ກົມ': item.ministry ? `${item.ministry.ministryCode} - ${item.ministry.ministryName}` : '-',
          'ຈຳນວນເງິນຈ່າຍ': item.amount,
          'ສະກຸນເງິນ': item.currency?.code || '',
          'ຈຳນວນເງິນຮັບ': this.getSettleAmount(item.settlementLine || []),
          'ຈຸດປະສົງ': item.purpose || '',
          'ທະນາຄານ': item.bankAccount?.bankName || '-',
          'ເລກບັນຊີ': item.bankAccount?.accountNumber || '-',
          'ສະຖານະ': this.getStatusInLao(item.status),
          'ຊື່ຜູ້ຮັບ': item.receiveName || '-',
          'ເລກບັດປະຈຳຕົວ': item.receiveIDNO || '-',
          'ເລກອ້າງອີງພາຍນອກ': item.externalRefNo || '-',
          'ເລກເຊັກ': item.chequeNo || '-',
          'ໝາຍເຫດ': item.note || '-',
        }))

        // Create worksheet
        const ws = XLSX.utils.json_to_sheet(exportData)

        // Set column widths
        const colWidths = [
          { wch: 8 },  // ລຳດັບ
          { wch: 8 },  // ID
          { wch: 12 }, // ວັນທີ
          { wch: 30 }, // ກະຊວງ/ກົມ
          { wch: 15 }, // ຈຳນວນເງິນຈ່າຍ
          { wch: 10 }, // ສະກຸນເງິນ
          { wch: 15 }, // ຈຳນວນເງິນຮັບ
          { wch: 30 }, // ຈຸດປະສົງ
          { wch: 20 }, // ທະນາຄານ
          { wch: 20 }, // ເລກບັນຊີ
          { wch: 12 }, // ສະຖານະ
          { wch: 20 }, // ຊື່ຜູ້ຮັບ
          { wch: 18 }, // ເລກບັດປະຈຳຕົວ
          { wch: 20 }, // ເລກອ້າງອີງພາຍນອກ
          { wch: 15 }, // ເລກເຊັກ
          { wch: 30 }, // ໝາຍເຫດ
        ]
        ws['!cols'] = colWidths

        // Create workbook
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'ລາຍຈ່າຍເງິນສົດ')

        // Add summary sheet
        const summaryData = [
          { 'ລາຍການ': 'ທັງໝົດ', 'ຈຳນວນ': this.dashboard.counts.total },
          { 'ລາຍການ': 'ຊຳລະແລ້ວ', 'ຈຳນວນ': this.dashboard.counts.settled },
          { 'ລາຍການ': 'ລວມຍອດທັງໝົດ', 'ຈຳນວນ': this.dashboard.amounts.total },
        ]
        const wsSummary = XLSX.utils.json_to_sheet(summaryData)
        XLSX.utils.book_append_sheet(wb, wsSummary, 'ສະຫຼຸບ')

        // Generate filename with date
        const date = new Date().toISOString().split('T')[0]
        const filename = `cash-payment-${date}.xlsx`

        // Write file
        XLSX.writeFile(wb, filename)

        this.showToast('ສົ່ງອອກຂໍ້ມູນສຳເລັດ', 'success')
      } catch (error) {
        console.error('Export error:', error)
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກຂໍ້ມູນ', 'error')
      }
    },

    getSettleAmount(settlements) {
      if (!Array.isArray(settlements)) return 0
      return settlements.reduce((total, item) => total + (item.amount || 0), 0)
    },

    // Date formatting methods
    formatDate(date) {
      if (!date) return '-'
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
        year: '2-digit',
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
        cancelled: 'grey',
      }
      return colors[status] || 'grey'
    },

    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase()
    },

    // Data loading methods
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
        const params = { ...this.filters }

        if (this.searchTerm) {
          params.search = this.searchTerm
        }

        const { data } = await this.$axios.get('/api/money-advances', { params })
        this.advances = data.data.advances || []
      } catch (error) {
        this.showToast('Error fetching money advances', 'error')
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async fetchDashboard() {
      try {
        const params = { ...this.filters, method: 'cash' }
        const { data } = await this.$axios.get('/api/money-advances/dashboard', { params })
        this.dashboard = data.data
      } catch (error) {
        console.error('Error fetching dashboard:', error)
      }
    },

    async fetchUsers() {
      try {
        const { data } = await this.$axios.get('/api/user/find')
        this.users = Array.isArray(data.data) ? data.data : Array.isArray(data) ? data : []
      } catch (error) {
        console.error('Error fetching users:', error)
        this.users = []
      }
    },

    async fetchCurrencies() {
      try {
        const { data } = await this.$axios.get('/api/currency/find')
        this.currencies = Array.isArray(data.data) ? data.data : Array.isArray(data) ? data : []
      } catch (error) {
        console.error('Error fetching currencies:', error)
        this.currencies = []
      }
    },

    async fetchMinistry() {
      try {
        const response = await this.$axios.get('/api/ministries')
        this.ministries = response.data?.data || []
      } catch (error) {
        console.error('Error fetching ministries:', error)
        this.ministries = []
      }
    },

    async fetchBankAccounts() {
      try {
        const { data } = await this.$axios.get('/api/bank_account/find')
        const accounts = Array.isArray(data.data) ? data.data : Array.isArray(data) ? data : []
        this.bankAccounts = accounts.filter(account => account.isActive)
      } catch (error) {
        console.error('Error fetching bank accounts:', error)
        this.bankAccounts = []
      }
    },

    async fetchChartAccounts() {
      try {
        const { data } = await this.$axios.get('/api/accountChart/find')
        this.chartAccounts = Array.isArray(data.data) ? data.data : Array.isArray(data) ? data : []
      } catch (error) {
        console.error('Error fetching chart accounts:', error)
        this.chartAccounts = []
      }
    },

    // Filter methods
    applyFilters() {
      this.fetchData()
      this.fetchDashboard()
    },

    resetFilters() {
      this.filters = {
        makerId: '',
        ministryId: '',
        fromDate: '',
        toDate: '',
      }
      this.searchTerm = ''
      this.clearFromDate()
      this.clearToDate()
      this.fetchData()
      this.fetchDashboard()
    },

    debounceSearch() {
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        this.fetchData()
      }, 500)
    },

    // Dialog methods
    async openDialog(advance = null) {
      this.isEdit = !!advance
      this.showDialog = true
      this.dialogKey = Date.now()

      if (!this.users.length || !this.currencies.length || !this.ministries.length) {
        this.formLoading = true
        await this.loadInitialData()
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
          exchangeRate: advance.exchangeRate || 1,
          reason: '',
          externalRef: advance.externalRef || '',
          externalRefNo: advance.externalRefNo || '',
          chequeNo: advance.chequeNo || '',
          receiveName: advance.receiveName || '',
          receiveIDNO: advance.receiveIDNO || '',
        }
      } else {
        this.resetForm()
        if (this.currencies.length) {
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
          await this.$axios.put(`/api/money-advances/${formData.id}`, { ...formData, ...auditContext })
          this.showToast('Money advance updated successfully', 'success')
        } else {
          const response = await this.$axios.post('/api/money-advances', { ...formData, ...auditContext })
          const newRecord = response.data.data

          this.form = {
            ...this.form,
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
            exchangeRate: newRecord.exchangeRate || 1,
          }

          this.isEdit = true
          this.$nextTick(() => {
            this.dialogKey = Date.now()
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
          `ທ່ານແນ່ໃຈທີ່ຈະອະນຸມັດລາຍການນີ້ແມ່ນບໍ່ ${this.formatCurrency(advance.amount, advance.currency?.code)}?`,
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

        if (response.data?.success) {
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

    formatCurrency(amount, currencyCode = 'LAK') {
      try {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currencyCode,
          minimumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
          maximumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
        }).format(amount || 0)
      } catch (error) {
        return `${amount || 0} ${currencyCode}`
      }
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