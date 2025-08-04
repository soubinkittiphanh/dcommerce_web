<template>
  <div class="bank-account-settlement-report">
    <!-- Enhanced Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-university"></i>
          ລາຍງານຊຳລະຕາມບັນຊີທະນາຄານ
        </h1>
        <p class="page-subtitle">Bank Account Settlement Report</p>
      </div>
      <div class="action-buttons">
        <v-btn color="success" @click="exportToExcel" :loading="exporting">
          <i class="fas fa-file-excel"></i>
          Export Excel
        </v-btn>
        <v-btn color="primary" @click="printReport">
          <i class="fas fa-print"></i>
          Print
        </v-btn>
      </div>
    </div>

    <!-- Enhanced Filters Card -->
    <v-card class="filter-card mb-4" elevation="2">
      <v-card-title class="filter-title">
        <i class="fas fa-filter"></i>
        ຕົວກອງ (Filters)
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="2">
            <v-menu
              v-model="startDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filters.startDate"
                  label="ວັນທີເລີ່ມຕົ້ນ (Start Date)"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.startDate"
                @input="startDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="2">
            <v-menu
              v-model="endDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filters.endDate"
                  label="ວັນທີສິ້ນສຸດ (End Date)"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.endDate"
                @input="endDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="2">
            <v-select
              v-model="filters.method"
              :items="settlementMethods"
              item-text="text"
              item-value="value"
              label="ວິທີການຊຳລະ (Settlement Method)"
              prepend-icon="mdi-credit-card"
              clearable
            ></v-select>
          </v-col>

          <v-col cols="12" md="2">
            <v-select
              v-model="filters.currencyId"
              :items="currencyOptions"
              item-text="text"
              item-value="value"
              label="ສະກຸນເງິນ (Currency)"
              prepend-icon="mdi-currency-usd"
              clearable
            ></v-select>
          </v-col>

          <v-col cols="12" md="2">
            <v-btn
              color="primary"
              @click="loadDashboardData"
              :loading="loading"
              block
            >
              <i class="fas fa-search"></i>
              ຄົ້ນຫາ
            </v-btn>
          </v-col>

          <v-col cols="12" md="2">
            <v-btn color="secondary" @click="resetFilters" block>
              <i class="fas fa-undo"></i>
              ຣີເຊັດ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Enhanced Summary Cards -->
    <v-row class="summary-cards mb-4" v-if="!loading">
      <v-col cols="12" md="3">
        <v-card class="summary-card total-accounts-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-university"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ທັງໝົດບັນຊີ</h3>
                <p class="summary-subtitle">Total Accounts</p>
                <h2 class="summary-amount">{{ bankAccountStats.length }}</h2>
                <p class="summary-lcy">Active Bank Accounts</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card settlement-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-money-bill-wave"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ຈຳນວນການຊຳລະ</h3>
                <p class="summary-subtitle">Total Settlements</p>
                <h2 class="summary-amount">{{ totalSettlementsCount }}</h2>
                <p class="summary-lcy">Settlement Count</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card amount-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-coins"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ລວມທຸກສະກຸນ</h3>
                <p class="summary-subtitle">Multi-Currency Total</p>
                <h2 class="summary-amount">{{ uniqueCurrencies }}</h2>
                <p class="summary-lcy">{{ uniqueCurrencies }} Currencies</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card lak-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-calculator"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ລາວກີບ (LAK)</h3>
                <p class="summary-subtitle">Total LAK Equivalent</p>
                <h2 class="summary-amount">
                  {{ formatCurrency(totalLakAmount, 'LAK') }}
                </h2>
                <p class="summary-lcy">Local Currency</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Currency Breakdown Cards -->
    <v-row
      class="currency-breakdown mb-4"
      v-if="!loading && currencyBreakdown.length > 0"
    >
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title>
            <i class="fas fa-coins"></i>
            ການແຈກຢາຍຕາມສະກຸນເງິນ (Currency Breakdown)
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="currency in currencyBreakdown"
                :key="currency.currencyCode || currency.currencyId"
                cols="12"
                md="4"
                lg="3"
              >
                <div class="currency-card">
                  <div class="currency-header">
                    <v-chip
                      :color="getCurrencyColor(currency.currencyCode)"
                      text-color="white"
                      large
                    >
                      {{ currency.currencyCode || 'LAK' }}
                    </v-chip>
                    <div class="currency-flag">
                      {{ getCurrencyFlag(currency.currencyCode) }}
                    </div>
                  </div>
                  <div class="currency-stats">
                    <div class="original-amount">
                      {{
                        formatCurrency(
                          currency.totalAmount,
                          currency.currencyCode
                        )
                      }}
                    </div>
                    <div class="lak-equivalent">
                      ≈ {{ formatCurrency(currency.lakEquivalent, 'LAK') }}
                    </div>
                    <div class="settlement-count">
                      {{ currency.count }} ການຊຳລະ
                    </div>
                    <div class="percentage">
                      {{
                        Math.round(
                          (currency.lakEquivalent / totalLakAmount) * 100
                        )
                      }}% ຂອງທັງໝົດ
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-8">
      <v-progress-circular
        indeterminate
        color="primary"
        size="64"
      ></v-progress-circular>
      <p class="mt-4 text-gray-600">
        ກຳລັງໂຫລດຂໍ້ມູນ... Loading bank account reports...
      </p>
    </div>

    <!-- Chart Card -->
    <v-card
      class="chart-card mb-4"
      elevation="2"
      v-if="!loading && bankAccountStats.length > 0"
    >
      <v-card-title>
        <i class="fas fa-chart-bar"></i>
        ກາຟສະຫຼຸບຕາມບັນຊີທະນາຄານ (Bank Account Settlement Chart)
      </v-card-title>
      <v-card-text>
        <div class="chart-container">
          <canvas ref="bankAccountChart" width="400" height="200"></canvas>
        </div>
      </v-card-text>
    </v-card>

    <!-- Enhanced Bank Account Statistics Cards -->
    <v-card class="table-card" elevation="2" v-if="!loading">
      <v-card-title class="table-title">
        <i class="fas fa-university"></i>
        ລາຍລະອຽດບັນຊີທະນາຄານ (Bank Account Details)
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຄົ້ນຫາບັນຊີ..."
          single-line
          hide-details
          class="search-field"
        ></v-text-field>
      </v-card-title>

      <v-card-text v-if="bankAccountStats.length > 0">
        <v-row>
          <v-col
            v-for="stat in filteredBankAccounts"
            :key="stat.bankAccountId"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card
              class="bank-account-card"
              elevation="2"
              @click="selectBankAccount(stat.bankAccountId)"
              :class="{
                selected: selectedBankAccount?.id == stat.bankAccountId,
              }"
            >
              <v-card-text>
                <div class="bank-account-header">
                  <div class="bank-info">
                    <h3 class="bank-account-name">
                      {{ stat.bankAccount?.accountName || 'Unknown Account' }}
                    </h3>
                    <p class="bank-account-number">
                      {{ stat.bankAccount?.accountNumber }}
                    </p>
                    <p class="bank-name">
                      {{ stat.bankAccount?.bankName || 'N/A' }}
                    </p>
                  </div>
                  <div class="bank-icon">
                    <i class="fas fa-university"></i>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="bank-stats">
                  <div class="stat-item">
                    <span class="stat-label">ລວມຈຳນວນເງິນ:</span>
                    <span class="stat-value amount-value">
                      ${{ formatCurrency(stat.total) }}
                    </span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label">ຈຳນວນການຊຳລະ:</span>
                    <span class="stat-value count-value">
                      {{ stat.count }}
                    </span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label">ຄ່າສະເລ່ຍ:</span>
                    <span class="stat-value average-value">
                      ${{ formatCurrency(stat.total / stat.count) }}
                    </span>
                  </div>
                </div>

                <div class="progress-section mt-3">
                  <div class="progress-label">Settlement Volume</div>
                  <v-progress-linear
                    :value="(stat.total / maxAmount) * 100"
                    color="primary"
                    height="8"
                    rounded
                  ></v-progress-linear>
                </div>

                <div class="card-actions mt-3">
                  <v-btn small color="primary" block>
                    <i class="fas fa-eye"></i>
                    ເບິ່ງລາຍລະອຽດ
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- No Data State -->
      <v-card-text v-else>
        <div class="no-data-state">
          <div class="no-data-icon">
            <i class="fas fa-university"></i>
          </div>
          <h3 class="no-data-title">ບໍ່ມີຂໍ້ມູນບັນຊີທະນາຄານ</h3>
          <p class="no-data-subtitle">
            No bank account settlement data found for the selected filters.
          </p>
        </div>
      </v-card-text>
    </v-card>

    <!-- Enhanced Settlement Details Dialog -->
    <v-dialog v-model="settlementDialog" max-width="1200px" scrollable>
      <v-card v-if="selectedBankAccount">
        <v-card-title class="dialog-header">
          <i class="fas fa-university"></i>
          ລາຍລະອຽດການຊຳລະ - {{ selectedBankAccount.accountName }}
          <v-spacer></v-spacer>
          <v-btn icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <!-- Bank Account Summary -->
          <v-row class="summary-section mb-4">
            <v-col cols="12">
              <h3 class="section-title">
                ສະຫຼຸບບັນຊີທະນາຄານ (Account Summary)
              </h3>
              <v-divider class="mb-3"></v-divider>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <div class="stat-icon">
                  <i class="fas fa-list-ol"></i>
                </div>
                <div class="stat-info">
                  <strong>ຈຳນວນການຊຳລະ:</strong>
                  <p class="stat-number">
                    {{ settlementSummary.settlementCount }}
                  </p>
                </div>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <div class="stat-icon">
                  <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="stat-info">
                  <strong>ລວມຈຳນວນເງິນ:</strong>
                  <p class="stat-number">
                    ${{ formatCurrency(settlementSummary.totalAmount) }}
                  </p>
                </div>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <div class="stat-icon">
                  <i class="fas fa-calculator"></i>
                </div>
                <div class="stat-info">
                  <strong>ຄ່າສະເລ່ຍ:</strong>
                  <p class="stat-number">
                    ${{
                      formatCurrency(
                        settlementSummary.totalAmount /
                          settlementSummary.settlementCount
                      )
                    }}
                  </p>
                </div>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <div class="stat-icon">
                  <i class="fas fa-university"></i>
                </div>
                <div class="stat-info">
                  <strong>ເລກບັນຊີ:</strong>
                  <p class="stat-number">
                    {{ selectedBankAccount.accountNumber }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Settlement Method Distribution -->
          <v-row
            class="method-distribution mb-4"
            v-if="methodDistribution.length > 0"
          >
            <v-col cols="12">
              <h3 class="section-title">
                ການແຈກຢາຍຕາມວິທີການ (Method Distribution)
              </h3>
              <v-divider class="mb-3"></v-divider>
            </v-col>
            <v-col
              v-for="method in methodDistribution"
              :key="method.method"
              cols="12"
              md="4"
            >
              <div class="method-card">
                <div class="method-header">
                  <v-chip
                    :color="getMethodColor(method.method)"
                    text-color="white"
                    small
                  >
                    {{ formatMethod(method.method) }}
                  </v-chip>
                </div>
                <div class="method-stats">
                  <div class="method-count">{{ method.count }} ການຊຳລະ</div>
                  <div class="method-amount">
                    ${{ formatCurrency(method.total) }}
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Detailed Settlements Table -->
          <v-row>
            <v-col cols="12">
              <h3 class="section-title">
                ລາຍການການຊຳລະ (Settlement Transactions)
              </h3>
              <v-divider class="mb-3"></v-divider>

              <v-data-table
                :headers="settlementHeaders"
                :items="selectedSettlements"
                :loading="loadingDetails"
                class="settlement-table"
                :items-per-page="10"
                :footer-props="{
                  itemsPerPageOptions: [5, 10, 25, 50],
                  itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:',
                }"
              >
                <template v-slot:item.bookingDate="{ item }">
                  <span class="date-cell">{{
                    formatDate(item.bookingDate)
                  }}</span>
                </template>

                <template v-slot:item.currency="{ item }">
                  <v-chip
                    :color="getCurrencyColor(item.currency?.code)"
                    text-color="white"
                    small
                  >
                    {{ item.currency?.code || 'LAK' }}
                  </v-chip>
                </template>

                <template v-slot:item.amount="{ item }">
                  <div class="amount-breakdown">
                    <span class="amount-cell">{{
                      formatCurrency(item.amount, item.currency?.code)
                    }}</span>
                  </div>
                </template>

                <template v-slot:item.exchangeRate="{ item }">
                  <div class="exchange-rate-cell">
                    <span v-if="item.exchangeRate && item.exchangeRate !== 1">
                      {{ formatExchangeRate(item.exchangeRate) }}
                    </span>
                    <span v-else class="default-rate">1.0000</span>
                  </div>
                </template>

                <template v-slot:item.lakAmount="{ item }">
                  <div class="lak-amount-cell">
                    <span class="lak-amount">{{
                      formatCurrency(
                        calculateLakAmount(item.amount, item.exchangeRate),
                        'LAK'
                      )
                    }}</span>
                  </div>
                </template>

                <template v-slot:item.method="{ item }">
                  <v-chip
                    :color="getMethodColor(item.method)"
                    text-color="white"
                    small
                  >
                    {{ formatMethod(item.method) }}
                  </v-chip>
                </template>

                <template v-slot:item.proceeder="{ item }">
                  <div class="user-info">
                    <span class="user-name">{{
                      item.proceeder?.name || 'N/A'
                    }}</span>
                  </div>
                </template>

                <template v-slot:item.moneyAdvance="{ item }">
                  <div v-if="item.moneyAdvance" class="advance-info">
                    <v-chip color="blue" text-color="white" small>
                      #{{ item.moneyAdvance.id }}
                    </v-chip>
                    <div class="advance-status">
                      {{ item.moneyAdvance.status }}
                    </div>
                  </div>
                  <span v-else class="no-advance">Standalone</span>
                </template>

                <template v-slot:item.actions="{ item }">
                  <v-btn small color="primary" @click="viewSettlement(item.id)">
                    <i class="fas fa-eye"></i>
                    ເບິ່ງ
                  </v-btn>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'BankAccountSettlementReport',
  head() {
    return {
      title: 'Bank Account Settlement Reports',
    }
  },
  data() {
    return {
      loading: false,
      exporting: false,
      loadingDetails: false,
      search: '',
      startDateMenu: false,
      endDateMenu: false,
      settlementDialog: false,
      bankAccountStats: [],
      selectedBankAccount: null,
      selectedSettlements: [],
      settlementSummary: {
        totalAmount: 0,
        settlementCount: 0,
        averageAmount: 0,
      },
      methodDistribution: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10,
      },
      filters: {
        startDate: null,
        endDate: null,
        method: '',
        currencyId: null,
      },
      settlementMethods: [
        { text: 'ທັງໝົດ (All Methods)', value: '' },
        { text: 'ເງິນສົດ (Cash)', value: 'cash' },
        { text: 'ໂອນເງິນຜ່ານທະນາຄານ (Bank Transfer)', value: 'bank_transfer' },
        { text: 'ຫັກລົບ (Deduction)', value: 'deduction' },
      ],
      currencyOptions: [
        { text: 'ທັງໝົດສະກຸນເງິນ (All Currencies)', value: null },
        { text: 'ລາວກີບ (LAK)', value: 1 },
        { text: 'ໂດລາອາເມລິກັນ (USD)', value: 2 },
        { text: 'ບາດໄທ (THB)', value: 3 },
        { text: 'ຢວນຈີນ (CNY)', value: 4 },
        { text: 'ເອີໂຣ (EUR)', value: 5 },
      ],
      currencyBreakdown: [],
      bankAccountChart: null,
      settlementHeaders: [
        { text: 'ວັນທີ', value: 'bookingDate', width: '120px' },
        { text: 'ສະກຸນເງິນ', value: 'currency', width: '80px' },
        { text: 'ຈຳນວນເງິນຕົ້ນ', value: 'amount', width: '130px' },
        { text: 'ອັດຕາແລກປ່ຽນ', value: 'exchangeRate', width: '100px' },
        { text: 'ເທົ່າກັບລາວກີບ', value: 'lakAmount', width: '130px' },
        { text: 'ວິທີການ', value: 'method', width: '120px' },
        { text: 'ຜູ້ດຳເນີນການ', value: 'proceeder', width: '150px' },
        { text: 'ເງິນກ່ອນ', value: 'moneyAdvance', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '100px' },
      ],
    }
  },
  computed: {
    uniqueCurrencies() {
      return this.currencyBreakdown.length || 0
    },

    totalLakAmount() {
      return this.currencyBreakdown.reduce(
        (sum, currency) => sum + (currency.lakEquivalent || 0),
        0
      )
    },
    filteredBankAccounts() {
      if (!this.search) return this.bankAccountStats
      return this.bankAccountStats.filter(
        (account) =>
          account.bankAccount?.accountName
            ?.toLowerCase()
            .includes(this.search.toLowerCase()) ||
          account.bankAccount?.accountNumber?.includes(this.search)
      )
    },
    totalSettlementsCount() {
      return this.bankAccountStats.reduce(
        (sum, account) => sum + parseInt(account.count),
        0
      )
    },
    totalAmount() {
      return this.bankAccountStats.reduce(
        (sum, account) => sum + parseFloat(account.total),
        0
      )
    },
    averageAmount() {
      return this.totalSettlementsCount > 0
        ? this.totalAmount / this.totalSettlementsCount
        : 0
    },
    maxAmount() {
      return Math.max(
        ...this.bankAccountStats.map((account) => parseFloat(account.total)),
        0
      )
    },
  },
  mounted() {
    this.setDefaultDates()
    this.loadDashboardData()
    this.$nextTick(() => {
      this.initializeChart()
    })
  },
  beforeDestroy() {
    if (this.bankAccountChart) {
      this.bankAccountChart.destroy()
    }
  },
  methods: {
    getCurrencyColor(currencyCode) {
      const colors = {
        LAK: 'orange',
        USD: 'green',
        THB: 'blue',
        CNY: 'red',
        EUR: 'purple',
        JPY: 'pink',
        GBP: 'indigo',
        KRW: 'teal',
      }
      return colors[currencyCode] || 'grey'
    },

    getCurrencyFlag(currencyCode) {
      const flags = {
        LAK: '🇱🇦',
        USD: '🇺🇸',
        THB: '🇹🇭',
        CNY: '🇨🇳',
        EUR: '🇪🇺',
        JPY: '🇯🇵',
        GBP: '🇬🇧',
        KRW: '🇰🇷',
      }
      return flags[currencyCode] || '🏳️'
    },

    calculateLakAmount(amount, exchangeRate) {
      if (!amount) return 0
      const rate = exchangeRate || 1
      return amount * rate
    },

    formatCurrency(amount, currencyCode = 'USD') {
      if (!amount) return '0.00'

      const formatted = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)

      // Add currency symbol or code
      if (currencyCode === 'LAK') {
        return formatted + ' ₭'
      } else if (currencyCode === 'USD') {
        return '$' + formatted
      } else if (currencyCode === 'THB') {
        return formatted + ' ฿'
      } else if (currencyCode === 'CNY') {
        return '¥' + formatted
      } else if (currencyCode === 'EUR') {
        return '€' + formatted
      } else {
        return formatted + ' ' + currencyCode
      }
    },
    setDefaultDates() {
      const now = new Date()
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
      this.filters.startDate = firstDay.toISOString().substr(0, 10)
      this.filters.endDate = now.toISOString().substr(0, 10)
    },

    async loadDashboardData() {
      this.loading = true
      try {
        const params = new URLSearchParams()
        if (this.filters.startDate)
          params.append('startDate', this.filters.startDate)
        if (this.filters.endDate) params.append('endDate', this.filters.endDate)
        if (this.filters.method) params.append('method', this.filters.method)
        if (this.filters.currencyId)
          params.append('currencyId', this.filters.currencyId)

        const response = await this.$axios.get(
          `/api/settlements/dashboard?${params}`
        )
        if (response.data.success) {
          this.bankAccountStats = response.data.data.byBankAccount || []

          // Calculate currency breakdown
          await this.calculateCurrencyBreakdown()

          this.updateChart()
        }
      } catch (error) {
        console.error('Error loading dashboard data:', error)
        this.$toast.error('Failed to load bank account reports')
      } finally {
        this.loading = false
      }
    },

    async calculateCurrencyBreakdown() {
      try {
        const params = new URLSearchParams()
        if (this.filters.startDate)
          params.append('startDate', this.filters.startDate)
        if (this.filters.endDate) params.append('endDate', this.filters.endDate)
        if (this.filters.method) params.append('method', this.filters.method)
        if (this.filters.currencyId)
          params.append('currencyId', this.filters.currencyId)

        const response = await this.$axios.get(
          `/api/settlements/currency-breakdown?${params}`
        )
        if (response.data.success) {
          this.currencyBreakdown = response.data.data.currencies || []
        }
      } catch (error) {
        console.error('Error calculating currency breakdown:', error)
        // Fallback: create empty breakdown if API fails
        this.currencyBreakdown = []
      }
    },

    async selectBankAccount(bankAccountId) {
      this.loadingDetails = true
      this.settlementDialog = true
      try {
        const response = await this.$axios.get(
          `/api/settlements/by-bank-account/${bankAccountId}`
        )
        if (response.data.success) {
          this.selectedSettlements = response.data.data.settlements
          this.settlementSummary = response.data.data.summary
          this.pagination = response.data.data.pagination || this.pagination

          // Find the selected bank account details
          const stat = this.bankAccountStats.find(
            (s) => s.bankAccountId == bankAccountId
          )
          this.selectedBankAccount = stat ? stat.bankAccount : null

          // Calculate method distribution
          this.calculateMethodDistribution()
        }
      } catch (error) {
        console.error('Error loading bank account settlements:', error)
        this.$toast.error('Failed to load settlement details')
      } finally {
        this.loadingDetails = false
      }
    },

    calculateMethodDistribution() {
      const methods = {}
      this.selectedSettlements.forEach((settlement) => {
        if (!methods[settlement.method]) {
          methods[settlement.method] = { count: 0, total: 0 }
        }
        methods[settlement.method].count++
        methods[settlement.method].total += parseFloat(settlement.amount)
      })

      this.methodDistribution = Object.keys(methods).map((method) => ({
        method,
        count: methods[method].count,
        total: methods[method].total,
      }))
    },

    resetFilters() {
      this.filters = {
        startDate: null,
        endDate: null,
        method: '',
      }
      this.setDefaultDates()
      this.loadDashboardData()
    },

    initializeChart() {
      if (this.$refs.bankAccountChart) {
        const ctx = this.$refs.bankAccountChart.getContext('2d')
        this.bankAccountChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: [],
            datasets: [
              {
                label: 'ຈຳນວນເງິນ (Amount)',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
              {
                label: 'ຈຳນວນການຊຳລະ (Count)',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                yAxisID: 'y-axis-2',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  id: 'y-axis-1',
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                      return '$' + new Intl.NumberFormat('en-US').format(value)
                    },
                  },
                },
                {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  id: 'y-axis-2',
                  gridLines: {
                    drawOnChartArea: false,
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              position: 'bottom',
            },
          },
        })
      }
    },

    updateChart() {
      if (!this.bankAccountChart || this.bankAccountStats.length === 0) return

      const labels = this.bankAccountStats
        .map((stat) => `${stat.bankAccount?.accountName || 'Unknown'}`)
        .slice(0, 10) // Limit to top 10

      const amounts = this.bankAccountStats
        .map((stat) => parseFloat(stat.total))
        .slice(0, 10)
      const counts = this.bankAccountStats
        .map((stat) => parseInt(stat.count))
        .slice(0, 10)

      this.bankAccountChart.data.labels = labels
      this.bankAccountChart.data.datasets[0].data = amounts
      this.bankAccountChart.data.datasets[1].data = counts
      this.bankAccountChart.update()
    },

    closeDialog() {
      this.settlementDialog = false
      this.selectedBankAccount = null
      this.selectedSettlements = []
      this.methodDistribution = []
    },

    async exportToExcel() {
      this.exporting = true
      try {
        const params = new URLSearchParams()
        Object.keys(this.filters).forEach((key) => {
          if (this.filters[key]) {
            params.append(key, this.filters[key])
          }
        })

        const response = await this.$axios.get(
          `/api/settlements/dashboard/export?${params}`,
          {
            responseType: 'blob',
          }
        )

        const blob = new Blob([response.data])
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `bank-account-settlement-report-${this.filters.startDate}-${this.filters.endDate}.xlsx`
        link.click()
      } catch (error) {
        console.error('Error exporting report:', error)
        this.$toast.error('Error exporting report')
      } finally {
        this.exporting = false
      }
    },

    printReport() {
      window.print()
    },

    viewSettlement(settlementId) {
      this.$router.push(`/settlements/${settlementId}`)
    },

    formatCurrency(amount) {
      if (!amount) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
    },

    formatExchangeRate(rate) {
      if (!rate) return '1.0000'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
      }).format(rate)
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    formatMethod(method) {
      const methods = {
        cash: 'ເງິນສົດ (Cash)',
        bank_transfer: 'ໂອນເງິນ (Transfer)',
        deduction: 'ຫັກລົບ (Deduction)',
      }
      return methods[method] || method
    },

    getMethodColor(method) {
      const colors = {
        cash: 'green',
        bank_transfer: 'blue',
        deduction: 'orange',
      }
      return colors[method] || 'grey'
    },
  },
}
</script>

<style scoped>
.bank-account-settlement-report {
  padding: 0;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
}

.title-section h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.title-section p {
  margin: 5px 0 0 0;
  opacity: 0.9;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.filter-card {
  background: white;
}

.filter-title {
  background: #f8f9fa;
  color: #495057;
  font-weight: 600;
}

.filter-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 20px;
}

.summary-cards {
  margin-bottom: 24px;
}

.summary-card {
  height: 140px;
  position: relative;
  overflow: hidden;
}

.summary-content {
  display: flex;
  align-items: center;
  height: 100%;
}

.summary-icon {
  font-size: 48px;
  opacity: 0.8;
  margin-right: 16px;
}

.summary-details h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.summary-details p {
  margin: 4px 0;
  font-size: 12px;
  color: #666;
}

.summary-details h2 {
  margin: 8px 0 0 0;
  font-size: 24px;
  font-weight: 700;
}

.summary-lcy {
  font-size: 11px;
  opacity: 0.8;
  margin-top: 4px !important;
}

.total-accounts-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #333;
}

.settlement-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.amount-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.lak-card {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: white;
}

.currency-breakdown {
  margin-bottom: 24px;
}

.currency-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  height: 100%;
  border: 1px solid #e9ecef;
}

.currency-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.currency-flag {
  font-size: 24px;
}

.currency-stats {
  text-align: center;
}

.original-amount {
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
  font-family: monospace;
}

.lak-equivalent {
  font-size: 14px;
  color: #f59e0b;
  font-weight: 600;
  margin-bottom: 8px;
  font-family: monospace;
}

.settlement-count {
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.percentage {
  font-size: 11px;
  color: #999;
}

.exchange-rate-cell {
  text-align: center;
}

.exchange-rate-cell .default-rate {
  color: #999;
  font-style: italic;
}

.lak-amount-cell {
  text-align: center;
}

.lak-amount {
  font-family: monospace;
  font-weight: 600;
  color: #f59e0b;
  font-size: 13px;
}

.chart-card {
  margin-bottom: 24px;
}

.chart-container {
  height: 400px;
  position: relative;
}

.table-card {
  margin-bottom: 24px;
}

.table-title {
  background: #f8f9fa;
  color: #495057;
  font-weight: 600;
}

.search-field {
  max-width: 300px;
}

.bank-account-card {
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
}

.bank-account-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

.bank-account-card.selected {
  border: 2px solid #1976d2;
}

.bank-account-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.bank-info h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.bank-account-number {
  font-family: monospace;
  font-size: 12px;
  color: #666;
  margin: 4px 0;
}

.bank-name {
  font-size: 11px;
  color: #999;
  font-style: italic;
  margin: 0;
}

.bank-icon {
  font-size: 24px;
  color: #1976d2;
  opacity: 0.7;
}

.bank-stats {
  margin-top: 12px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 12px;
  color: #666;
}

.stat-value {
  font-weight: 600;
  font-size: 13px;
}

.amount-value {
  color: #4caf50;
}

.count-value {
  color: #2196f3;
}

.average-value {
  color: #ff9800;
}

.progress-section {
  margin-top: 12px;
}

.progress-label {
  font-size: 11px;
  color: #666;
  margin-bottom: 4px;
}

.no-data-state {
  text-align: center;
  padding: 48px 24px;
}

.no-data-icon {
  font-size: 64px;
  color: #ccc;
  margin-bottom: 16px;
}

.no-data-title {
  margin: 0 0 8px 0;
  color: #666;
  font-size: 18px;
}

.no-data-subtitle {
  margin: 0;
  color: #999;
  font-size: 14px;
}

.dialog-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.section-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.detail-stat {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  height: 100%;
}

.stat-icon {
  font-size: 24px;
  color: #1976d2;
  margin-right: 12px;
}

.stat-info strong {
  display: block;
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.stat-number {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  font-family: monospace;
}

.method-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}

.method-header {
  margin-bottom: 12px;
}

.method-count {
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
}

.method-amount {
  font-size: 18px;
  font-weight: 600;
  font-family: monospace;
}

.settlement-table {
  background: white;
}

.date-cell {
  font-family: monospace;
  font-size: 13px;
}

.amount-breakdown {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.amount-cell {
  font-family: monospace;
  font-weight: 600;
  font-size: 13px;
}

.exchange-rate {
  font-size: 10px;
  color: #666;
  margin-top: 2px;
}

.user-info .user-name {
  font-weight: 500;
}

.advance-info .advance-status {
  font-size: 10px;
  color: #666;
  margin-top: 2px;
}

.no-advance {
  color: #999;
  font-style: italic;
}

/* Print styles */
@media print {
  .action-buttons,
  .filter-card,
  .v-btn {
    display: none !important;
  }

  .summary-cards {
    page-break-inside: avoid;
  }

  .chart-card {
    page-break-inside: avoid;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .report-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .summary-content {
    flex-direction: column;
    text-align: center;
  }

  .summary-icon {
    margin-right: 0;
    margin-bottom: 8px;
  }

  .chart-container {
    height: 300px;
  }

  .filter-actions {
    flex-direction: column;
    width: 100%;
  }

  .bank-account-header {
    flex-direction: column;
    text-align: center;
  }

  .bank-icon {
    margin-top: 8px;
  }
}
</style>