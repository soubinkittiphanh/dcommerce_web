<template>
  <div class="settlement-container">
    <!-- Compact Header -->
    <v-card class="header-card" flat>
      <v-card-text class="py-3">
        <div class="header-content">
          <h1 class="header-title">ສະຫລຸບບັນຊີ ລາຍຮັບ</h1>
          <div class="header-actions">
            <v-btn
              color="primary"
              small
              @click="openCreateDialog"
              :loading="loading"
            >
              <v-icon left small>mdi-plus</v-icon>
              ລົງລາຍຮັບ
            </v-btn>
            <v-btn
              color="secondary"
              small
              outlined
              @click="exportData"
              :disabled="loading"
            >
              <v-icon left small>mdi-download</v-icon>
              Export
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Compact Filter Section -->
    <v-card class="filter-card mb-2" flat>
      <v-card-text class="py-2">
        <v-row no-gutters align="center" class="filter-row">
          <!-- Date Range -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-menu
              ref="startDateMenu"
              v-model="startDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="formattedStartDate"
                  label="ວັນທີ່ເລີ່ມ"
                  hint="DD/MM/YYYY"
                  dense
                  outlined
                  clearable
                  hide-details="auto"
                  prepend-inner-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  @click:clear="clearStartDate"
                />
              </template>
              <v-date-picker
                v-model="pickerStartDate"
                no-title
                @input="setStartDate"
              />
            </v-menu>
          </v-col>

          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-menu
              ref="endDateMenu"
              v-model="endDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="formattedEndDate"
                  label="ວັນທີ່ສິ້ນສຸດ"
                  hint="DD/MM/YYYY"
                  dense
                  outlined
                  clearable
                  hide-details="auto"
                  prepend-inner-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  @click:clear="clearEndDate"
                />
              </template>
              <v-date-picker
                v-model="pickerEndDate"
                no-title
                @input="setEndDate"
              />
            </v-menu>
          </v-col>

          <!-- Method Filter -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-select
              v-model="filters.method"
              :items="methodOptions"
              label="ວິທີການ"
              dense
              outlined
              clearable
              hide-details="auto"
            />
          </v-col>

          <!-- Account Filter -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <v-select
              v-model="filters.accountNo"
              :items="accountOptions"
              label="ບັນຊີ"
              dense
              outlined
              clearable
              hide-details="auto"
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
            />
          </v-col>

          <!-- Actions -->
          <v-col cols="12" sm="6" md="2" class="px-1">
            <div class="filter-actions">
              <v-btn
                color="primary"
                small
                @click="applyFilters"
                :loading="loading"
              >
                <v-icon small>mdi-magnify</v-icon>
                ຄົ້ນຫາ
              </v-btn>
              <v-btn small outlined @click="resetFilters" :disabled="loading">
                <v-icon small>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!-- Expandable Chart Account Filter -->
        <v-expand-transition>
          <v-row v-if="showAdvancedFilter" no-gutters class="mt-2">
            <v-col cols="12" md="6" class="px-1">
              <v-select
                v-model="filters.chartAccountId"
                :items="chartAccountOptions"
                label="ບັນຊີລວມ"
                dense
                outlined
                clearable
                hide-details="auto"
              />
            </v-col>
          </v-row>
        </v-expand-transition>

        <!-- Toggle Advanced Filter -->
        <div class="text-center mt-1">
          <v-btn x-small text @click="showAdvancedFilter = !showAdvancedFilter">
            {{ showAdvancedFilter ? 'ປິດຕົວກອງເພີ່ມເຕີມ' : 'ເພີ່ມຕົວກອງ' }}
            <v-icon small>{{
              showAdvancedFilter ? 'mdi-chevron-up' : 'mdi-chevron-down'
            }}</v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
    <!-- Compact Summary Cards -->
    <div class="summary-section">
      <!-- Total Summary Card -->
      <v-card class="summary-card total-card" dark>
        <v-card-text class="py-2">
          <div class="summary-content">
            <div class="summary-icon">
              <v-icon>mdi-calculator</v-icon>
            </div>
            <div class="summary-details">
              <div class="summary-amount">
                {{ formatCurrency(summaryStats.totalLAK.amount, 'LAK') }}
              </div>
              <div class="summary-label">
                ລວມທັງໝົດ ({{ summaryStats.totalLAK.count }} ລາຍການ)
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <!-- Currency Cards -->
      <v-card
        v-for="currencyStat in summaryStats.currencies"
        :key="currencyStat.currencyId"
        class="summary-card currency-card"
      >
        <v-card-text class="py-2">
          <div class="summary-content">
            <div class="currency-icon">
              <v-icon color="success">mdi-currency-usd</v-icon>
            </div>
            <div class="summary-details">
              <div class="summary-amount">
                {{
                  formatCurrencyAmount(
                    currencyStat.originalAmount,
                    currencyStat.currencyCode
                  )
                }}
              </div>
              <div class="summary-label">
                {{ currencyStat.currencyCode }} ({{ currencyStat.count }})
              </div>
              <div class="lak-equivalent">
                ≈ {{ formatCurrency(currencyStat.lakEquivalent, 'LAK') }}
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <!-- Compact Data Table -->
    <v-card class="table-card" flat>
      <v-card-title class="py-2 px-3">
        <span class="table-title"
          >ລາຍການ ({{ filteredSettlements.length }})</span
        >
        <v-spacer />
        <div class="table-controls">
          <v-select
            v-model="pagination.perPage"
            :items="perPageOptions"
            label="ແຖວ"
            dense
            outlined
            hide-details
            style="max-width: 70px"
            @input="updatePagination"
          />
        </div>
      </v-card-title>

      <v-data-table
        :headers="compactHeaders"
        :items="paginatedSettlements"
        :page.sync="pagination.currentPage"
        :items-per-page="pagination.perPage"
        class="compact-table"
        dense
        hide-default-footer
      >
        <!-- ID Column -->
        <template #item.id="{ item }">
          <div class="id-column">
            <span class="id-main">{{ item.id }}</span>
            <span v-if="item.moneyAdvanceId" class="id-sub"
              >({{ item.moneyAdvanceId }})</span
            >
          </div>
        </template>

        <!-- Date Column -->
        <template #item.bookingDate="{ item }">
          <span class="date-compact">{{
            formatCompactDate(item.bookingDate)
          }}</span>
        </template>

        <!-- Method Column -->
        <template #item.method="{ item }">
          <v-chip :color="getMethodColor(item.method)" x-small outlined>
            {{ getMethodLabel(item.method) }}
          </v-chip>
        </template>

        <!-- Requester Column -->
        <template #item.requester="{ item }">
          <span class="requester-name">{{ item.requester }}</span>
        </template>

        <!-- Amount Column -->
        <template #item.amount="{ item }">
          <div class="amount-column">
            <span class="amount-value">{{ formatSettlementAmount(item) }}</span>
            <span class="currency-code">{{
              getSettlementCurrency(item)?.code || 'LAK'
            }}</span>
          </div>
        </template>

        <!-- Ministry Column -->
        <template #item.ministry="{ item }">
          <v-chip v-if="item.ministry" color="info" x-small outlined>
            {{ item.ministry.ministryCode }}
          </v-chip>
          <span v-else class="no-data">-</span>
        </template>

        <!-- Chart Account Column -->
        <template #item.chartAccount="{ item }">
          <v-chip v-if="item.chartAccount" color="warning" x-small outlined>
            {{ item.chartAccount.accountNumber }}
          </v-chip>
          <span v-else class="no-data">-</span>
        </template>

        <!-- Actions Column -->
        <template #item.actions="{ item }">
          <div class="action-buttons">
            <v-btn
              icon
              x-small
              @click="viewSettlement(item)"
              :disabled="loading"
            >
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
            <v-btn
              icon
              x-small
              @click="editSettlement(item)"
              :disabled="loading"
            >
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              icon
              x-small
              @click="printSettlement(item)"
              :disabled="loading"
            >
              <v-icon small>mdi-printer</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>

      <!-- Custom Compact Pagination -->
      <div class="compact-pagination">
        <div class="pagination-info">
          {{ paginationInfo.start }}-{{ paginationInfo.end }} ຈາກ
          {{ paginationInfo.total }}
        </div>
        <div class="pagination-controls">
          <v-btn
            icon
            small
            :disabled="pagination.currentPage === 1"
            @click="previousPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <div class="page-numbers">
            <v-btn
              v-for="page in visiblePages"
              :key="page"
              :color="page === pagination.currentPage ? 'primary' : ''"
              :outlined="page !== pagination.currentPage"
              x-small
              min-width="30"
              @click="goToPage(page)"
              v-if="page !== '...'"
            >
              {{ page }}
            </v-btn>
            <span v-else class="page-ellipsis">...</span>
          </div>

          <v-btn
            icon
            small
            :disabled="pagination.currentPage === totalPages"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>

    <!-- Dialogs (keeping existing structure) -->
    <client-only>
      <SettlementDialog
        :visible="showEditDialog"
        :payment-method="defaultPaymentMethod"
        :settlement="selectedSettlement"
        :chart-accounts="chartAccounts"
        :ministries="ministries"
        :currencies="currencies"
        :bankAccounts="accountList"
        :users="users"
        :outstanding-invoices="outstandingInvoices"
        @close="handleSettlementDialogClose"
        @created="handleSettlementCreated"
        @updated="handleSettlementUpdated"
        @save="handleLegacySettlementSave"
      />
    </client-only>

    <VoucherPrintComponent
      v-if="showPrintVoucher && settlementDetail"
      :key="settlementDetail.id"
      :voucher-data="settlementDetail"
      @close="closePrintVoucher"
    />

    <client-only>
      <SettlementViewDialog
        :visible="showViewDialog"
        :settlement="selectedSettlement"
        @close="closeViewDialog"
      />
    </client-only>

    <!-- Compact Loading Overlay -->
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64" color="primary" />
    </v-overlay>
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
      // Date picker state
      startDateMenu: false,
      endDateMenu: false,
      pickerStartDate: null,
      pickerEndDate: null,
      formattedStartDate: null,
      formattedEndDate: null,

      // UI state
      showAdvancedFilter: false,
      showPrintVoucher: false,
      showEditDialog: false,
      showViewDialog: false,
      selectedSettlement: null,
      defaultPaymentMethod: 'bank_transfer',

      // Data arrays (keeping existing structure)
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

      // Filters (updated for new date handling)
      filters: {
        startDate: '',
        endDate: '',
        method: 'bank_transfer',
        accountNo: '',
        ministryId: '',
        chartAccountId: '',
        search: '',
      },

      // Sorting and pagination
      sort: {
        field: 'bookingDate',
        direction: 'desc',
      },

      pagination: {
        currentPage: 1,
        perPage: 25,
      },

      // Summary statistics
      summaryStats: {
        totalLAK: { amount: 0, count: 0 },
        currencies: [],
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
        { text: 'ID', value: 'id', width: '80px', sortable: true },
        { text: 'ວັນທີ', value: 'bookingDate', width: '90px', sortable: true },
        { text: 'ວິທີ', value: 'method', width: '80px', sortable: true },
        { text: 'ຜູ້ລົງ', value: 'requester', width: '120px', sortable: true },
        { text: 'ຈຳນວນ', value: 'amount', width: '120px', sortable: true },
        { text: 'ກົມ', value: 'ministry', width: '70px', sortable: false },
        {
          text: 'ບັນຊີ',
          value: 'chartAccount',
          width: '70px',
          sortable: false,
        },
        { text: '', value: 'actions', width: '90px', sortable: false },
      ]
    },

    // Filter options
    methodOptions() {
      return [
        { text: 'ທັງໝົດ', value: '' },
        { text: 'ເງິນສົດ', value: 'cash' },
        { text: 'ໂອນທະນາຄານ', value: 'bank_transfer' },
        { text: 'ຫັກລົບ', value: 'deduction' },
      ]
    },

    accountOptions() {
      return [
        { text: 'ທັງໝົດ', value: '' },
        ...this.accountList.map((account) => ({
          text: `${account.bankName} - ${account.accountNumber}`,
          value: account.id,
        })),
      ]
    },

    ministryOptions() {
      return [
        { text: 'ທັງໝົດ', value: '' },
        ...this.ministries.map((ministry) => ({
          text: `${ministry.ministryCode} - ${ministry.ministryName}`,
          value: ministry.id,
        })),
      ]
    },

    chartAccountOptions() {
      return [
        { text: 'ທັງໝົດ', value: '' },
        ...this.chartAccounts.map((account) => ({
          text: `${account.accountNumber} - ${account.accountName}`,
          value: account.id,
        })),
      ]
    },

    perPageOptions() {
      return [10, 25, 50, 100]
    },

    // Keep existing computed properties
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
        start: this.filteredSettlements.length > 0 ? start : 0,
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
    // Date formatting methods
    formatDate(date) {
      if (!date) return null
      const d = new Date(date)
      const day = String(d.getDate()).padStart(2, '0')
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const year = d.getFullYear()
      return `${day}/${month}/${year}`
    },

    setStartDate(val) {
      this.formattedStartDate = this.formatDate(val)
      this.pickerStartDate = val
      this.filters.startDate = val
      this.startDateMenu = false
    },

    setEndDate(val) {
      this.formattedEndDate = this.formatDate(val)
      this.pickerEndDate = val
      this.filters.endDate = val
      this.endDateMenu = false
    },

    clearStartDate() {
      this.formattedStartDate = null
      this.pickerStartDate = null
      this.filters.startDate = ''
    },

    clearEndDate() {
      this.formattedEndDate = null
      this.pickerEndDate = null
      this.filters.endDate = ''
    },

    formatCompactDate(date) {
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      })
    },

    // Method helpers
    getMethodColor(method) {
      const colors = {
        cash: 'success',
        bank_transfer: 'info',
        deduction: 'error',
      }
      return colors[method] || 'grey'
    },

    getMethodLabel(method) {
      const labels = {
        cash: 'ເງິນສົດ',
        bank_transfer: 'ໂອນ',
        deduction: 'ຫັກ',
      }
      return labels[method] || method
    },

    // Keep all existing API and business logic methods
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

    async fetchBankAccounts() {
      try {
        const { data } = await this.$axios.get('/api/bank_account/find')
        if (data && data.data) {
          this.accountList = Array.isArray(data.data) ? data.data : []
        } else if (Array.isArray(data)) {
          this.accountList = data
        } else {
          this.accountList = []
        }
        this.accountList = this.accountList.filter(
          (account) => account.isActive
        )
      } catch (error) {
        console.error('Error fetching bank accounts:', error)
        this.accountList = []
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

    async fetchChartAccounts() {
      try {
        const response = await this.$axios.get('/api/accountChart/find')
        if (Array.isArray(response.data)) {
          this.chartAccounts = response.data
        } else if (response.data && response.data.success) {
          this.chartAccounts = response.data.data || []
        } else if (response.data) {
          this.chartAccounts = response.data
        } else {
          this.chartAccounts = []
        }
      } catch (error) {
        console.error('Error fetching chart accounts:', error)
        this.chartAccounts = []
        this.showToast('Failed to load chart accounts', 'error')
      }
    },

    async fetchSettlements() {
      this.loading = true
      const params = {
        method: 'bank_transfer',
      }
      try {
        const response = await this.$axios.get('/api/settlements', { params })
        if (
          response.data &&
          response.data.success &&
          response.data.data &&
          response.data.data.settlements
        ) {
          this.settlements = response.data.data.settlements.map(
            (settlement) => ({
              id: settlement.id,
              bookingDate: settlement.bookingDate,
              method: settlement.method,
              requester: settlement.proceeder?.cus_name || 'Unknown',
              amount: settlement.amount,
              userId: settlement.userId,
              currencyId: settlement.currencyId,
              currency: settlement.currency,
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

    // Dialog methods (keeping existing logic)
    async openCreateDialog() {
      this.selectedSettlement = null
      this.defaultPaymentMethod = 'bank_transfer'
      this.loading = true
      try {
        await this.loadOutstandingInvoices()
        this.showEditDialog = true
      } catch (error) {
        console.error('Error opening create dialog:', error)
        this.showToast('Failed to load form data', 'error')
      } finally {
        this.loading = false
      }
    },

    async editSettlement(settlement) {
      this.selectedSettlement = { ...settlement }
      this.defaultPaymentMethod = settlement.method || 'bank_transfer'
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
      this.selectedSettlement = { ...settlement }
      this.showViewDialog = true
    },

    closePrintVoucher() {
      this.showPrintVoucher = false
      setTimeout(() => {
        this.settlementDetail = null
      }, 100)
    },

    printSettlement(settlement) {
      this.showPrintVoucher = false
      this.$nextTick(() => {
        this.settlementDetail = settlement
        this.showPrintVoucher = true
      })
    },

    handleSettlementDialogClose() {
      this.showEditDialog = false
      this.selectedSettlement = null
      this.defaultPaymentMethod = 'bank_transfer'
    },

    async handleSettlementCreated(newSettlement) {
      if (this.settlements && Array.isArray(this.settlements)) {
        this.settlements.unshift({
          id: newSettlement.id,
          bookingDate: newSettlement.bookingDate || newSettlement.createdAt,
          method: newSettlement.method,
          requester:
            newSettlement.proceeder?.cus_name ||
            this.user?.cus_name ||
            'Unknown',
          amount: newSettlement.amount,
          userId: newSettlement.userId,
          currencyId: newSettlement.currencyId,
          currency: newSettlement.currency,
          bankAccountId: newSettlement.bankAccountId,
          ministryId: newSettlement.ministryId,
          chartAccountId: newSettlement.chartAccountId,
          ministry: newSettlement.ministry,
          chartAccount: newSettlement.chartAccount,
          moneyAdvanceId: newSettlement.moneyAdvanceId,
          exchangeRate: newSettlement.exchangeRate,
          externalRef: newSettlement.externalRef,
          externalRefNo: newSettlement.externalRefNo,
          chequeNo: newSettlement.chequeNo,
          fromPersonName: newSettlement.fromPersonName,
          notes: newSettlement.notes,
        })
      }
      this.selectedSettlement = newSettlement
      this.showToast('ການສ້າງລາຍຮັບສຳເລັດແລ້ວ', 'success')
      this.applyFilters()
      this.calculateSummaryStats()
    },

    async handleSettlementUpdated(updatedSettlement) {
      if (this.settlements && Array.isArray(this.settlements)) {
        const index = this.settlements.findIndex(
          (s) => s.id === updatedSettlement.id
        )
        if (index !== -1) {
          this.$set(this.settlements, index, {
            id: updatedSettlement.id,
            bookingDate:
              updatedSettlement.bookingDate || updatedSettlement.createdAt,
            method: updatedSettlement.method,
            requester: updatedSettlement.proceeder?.cus_name || 'Unknown',
            amount: updatedSettlement.amount,
            userId: updatedSettlement.userId,
            currencyId: updatedSettlement.currencyId,
            currency: updatedSettlement.currency,
            bankAccountId: updatedSettlement.bankAccountId,
            ministryId: updatedSettlement.ministryId,
            chartAccountId: updatedSettlement.chartAccountId,
            ministry: updatedSettlement.ministry,
            chartAccount: updatedSettlement.chartAccount,
            moneyAdvanceId: updatedSettlement.moneyAdvanceId,
            exchangeRate: updatedSettlement.exchangeRate,
            externalRef: updatedSettlement.externalRef,
            externalRefNo: updatedSettlement.externalRefNo,
            chequeNo: updatedSettlement.chequeNo,
            fromPersonName: updatedSettlement.fromPersonName,
            notes: updatedSettlement.notes,
          })
        }
      }
      this.selectedSettlement = updatedSettlement
      this.showToast('ການອັບເດດລາຍຮັບສຳເລັດແລ້ວ', 'success')
      this.applyFilters()
      this.calculateSummaryStats()
    },

    handleLegacySettlementSave(settlementData) {
      if (settlementData.id && this.selectedSettlement?.id) {
        this.handleSettlementUpdated(settlementData)
      } else if (settlementData.id && !this.selectedSettlement?.id) {
        this.handleSettlementCreated(settlementData)
      } else {
        this.onSettlementSave(settlementData)
      }
    },

    closeViewDialog() {
      this.showViewDialog = false
      this.selectedSettlement = null
    },

    async loadOutstandingInvoices() {
      try {
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
      } catch (error) {
        console.error('Error loading outstanding invoices:', error)
        this.outstandingInvoices = []
        this.showToast('Failed to load outstanding invoices', 'error')
      }
    },

    // Filter and pagination methods (keeping existing logic)
    applyFilters() {
      let filtered = [...this.settlements]

      if (this.filters.startDate) {
        filtered = filtered.filter(
          (s) => s.bookingDate >= this.filters.startDate
        )
      }
      if (this.filters.endDate) {
        filtered = filtered.filter((s) => s.bookingDate <= this.filters.endDate)
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
      this.clearStartDate()
      this.clearEndDate()
      this.applyFilters()
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

    calculateSummaryStats() {
      const currencyStats = new Map()
      let totalLAKAmount = 0
      let totalCount = 0

      this.filteredSettlements.forEach((settlement) => {
        const amount = parseFloat(settlement.amount) || 0
        const exchangeRate = parseFloat(settlement.exchangeRate) || 1
        const currencyId = settlement.currencyId

        const lakEquivalent = amount * exchangeRate
        totalLAKAmount += lakEquivalent
        totalCount++

        const currency = this.currencies.find((c) => c.id === currencyId)
        const currencyCode = currency?.code || 'LAK'
        const currencyName = currency?.name || 'Lao Kip'

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

      this.summaryStats = {
        totalLAK: { amount: totalLAKAmount, count: totalCount },
        currencies: Array.from(currencyStats.values()).sort(
          (a, b) => b.lakEquivalent - a.lakEquivalent
        ),
      }
    },

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

    // Formatting methods (keeping existing)
    formatCurrency(amount, currencyCode = 'LAK') {
      try {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currencyCode,
          minimumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
          maximumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
        }).format(amount || 0)
      } catch (error) {
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
            row.bookingDate,
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
      if (this.$toast) {
        this.$toast[type](message)
      } else {
        console.log(`${type}: ${message}`)
      }
    },
  },
}
</script>

<style scoped>
/* Compact Summary Section */
.summary-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
  margin-bottom: 8px;
}
.settlement-container {
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

/* Compact Filter */
.filter-card {
  border: 1px solid #e2e8f0;
}

.filter-row {
  align-items: flex-end;
}

.filter-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

/* Compact Summary Grid */
.summary-grid {
  display: grid;
  grid-template-columns: 2fr repeat(auto-fit, minmax(180px, 1fr));
  gap: 8px;
}

.summary-card {
  border: 1px solid #e2e8f0;
}

.total-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

.summary-layout {
  display: flex;
  align-items: center;
  gap: 12px;
}

.summary-icon,
.currency-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}

.currency-icon {
  background: #f0f9ff;
}

.summary-content {
  flex: 1;
  min-width: 0;
}

.summary-amount {
  font-size: 14px;
  font-weight: 700;
  color: white;
  word-break: break-word;
}

.currency-card .summary-amount {
  color: #1a202c;
}

.summary-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 2px;
}

.currency-card .summary-label {
  color: #718096;
}

.lak-equivalent {
  font-size: 10px;
  color: #a0aec0;
  font-style: italic;
  margin-top: 1px;
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
.id-column {
  display: flex;
  flex-direction: column;
}

.id-main {
  font-weight: 600;
  font-size: 12px;
}

.id-sub {
  font-size: 10px;
  color: #718096;
}

.date-compact {
  font-size: 11px;
  color: #4a5568;
}

.requester-name {
  font-size: 11px;
  color: #2d3748;
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

.action-buttons {
  display: flex;
  gap: 2px;
}

.no-data {
  color: #a0aec0;
  font-style: italic;
  font-size: 10px;
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

.page-ellipsis {
  padding: 4px;
  color: #a0aec0;
  font-size: 11px;
}

/* Responsive Design */
@media (max-width: 960px) {
  .header-content {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  .summary-grid {
    grid-template-columns: 1fr;
  }

  .filter-row {
    gap: 8px;
  }

  .pagination-controls {
    flex-wrap: wrap;
  }

  .action-buttons {
    flex-direction: column;
    gap: 1px;
  }
}

@media (max-width: 600px) {
  .settlement-container {
    padding: 4px;
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

  .summary-icon,
  .currency-icon {
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