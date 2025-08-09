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
        <v-btn
          class="custom-btn export-btn"
          @click="exportToExcel"
          :loading="exporting"
        >
          <i class="fas fa-file-excel"></i>
          Export Excel
        </v-btn>
        <v-btn class="custom-btn print-btn" @click="printReport">
          <i class="fas fa-print"></i>
          Print
        </v-btn>
      </div>
    </div>

    <!-- Enhanced Filters Card -->
    <v-card class="filter-card mb-4" elevation="2">
      <v-card-title class="filter-title d-flex align-center">
        <v-icon class="mr-2">mdi-filter</v-icon>
        ຕົວກອງ (Filters)
      </v-card-title>

      <v-card-text class="pa-4">
        <v-row>
          <!-- Start Date -->
          <v-col cols="12" md="3">
            <v-text-field
              v-model="filters.startDate"
              type="date"
              label="ວັນທີເລີ່ມຕົ້ນ (From Date)"
              outlined
              dense
              @change="loadDashboardData"
            ></v-text-field>
          </v-col>

          <!-- End Date -->
          <v-col cols="12" md="3">
            <v-text-field
              v-model="filters.endDate"
              type="date"
              label="ວັນທີສິ້ນສຸດ (To Date)"
              outlined
              dense
              @change="loadDashboardData"
            ></v-text-field>
          </v-col>

          <!-- Bank Account -->
          <v-col cols="12" md="4">
            <v-select
              v-model="filters.bankAccountId"
              :items="bankAccounts"
              item-text="accountName"
              item-value="id"
              label="ບັນຊີທະນາຄານ (Bank Account)"
              clearable
              outlined
              dense
              @change="loadDashboardData"
            >
              <template v-slot:selection="{ item }">
                <div class="bank-account-selection">
                  <span class="bank-name">{{ item.accountName }}</span>
                  <small>{{ item.bankName }} - {{ item.accountNumber }}</small>
                </div>
              </template>
              <template v-slot:item="{ item }">
                <div class="bank-account-item">
                  <div class="bank-name">{{ item.accountName }}</div>
                  <div class="bank-details">
                    {{ item.bankName }} - {{ item.accountNumber }}
                  </div>
                </div>
              </template>
            </v-select>
          </v-col>
        </v-row>

        <!-- Buttons Row -->
        <v-row class="mt-2">
          <v-col cols="12" md="3">
            <v-btn
              class="custom-primary-bg white--text"
              block
              outlined
              @click="loadDashboardData"
              :loading="loading"
            >
              <v-icon left color="white">mdi-refresh</v-icon>
              Refresh
            </v-btn>
          </v-col>

          <v-col cols="12" md="3">
            <v-btn
              class="custom-secondary-btn"
              block
              outlined
              @click="resetFilters"
              color="grey lighten-1"
            >
              <v-icon left>mdi-restore</v-icon>
              Reset
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Enhanced Summary Cards -->
    <v-row class="summary-cards mb-4" v-if="!loading">
      <v-col cols="12" md="3">
        <v-card class="summary-card total-accounts-card" elevation="4">
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
        <v-card class="summary-card settlement-card" elevation="4">
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
        <v-card class="summary-card amount-card" elevation="4">
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
        <v-card class="summary-card lak-card" elevation="4">
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
          <v-card-title class="currency-title">
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
        color="#01532B"
        size="64"
      ></v-progress-circular>
      <p class="mt-4 text-gray-600">
        ກຳລັງໂຫລດຂໍ້ມູນ... Loading bank account reports...
      </p>
    </div>

    <!-- Bank Account Report -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2" class="rounded-xl report-card">
          <v-card-title
            class="banking-primary--text py-2 px-4 d-flex align-center report-header"
          >
            <v-icon color="#01532B" class="mr-2">mdi-bank</v-icon>
            <span class="text-subtitle-1 font-weight-medium">
              ລາຍງານ ຕາມບັນຊີທະນາຄານ
            </span>
            <v-spacer></v-spacer>

            <!-- Search Field -->
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຄົ້ນຫາບັນຊີ..."
              single-line
              hide-details
              class="search-field mr-4"
              outlined
              dense
              style="max-width: 250px"
            ></v-text-field>

            <!-- Export Button -->
            <v-btn
              color="#059669"
              small
              outlined
              class="mr-2"
              @click="exportToExcel"
              :disabled="!filteredBankAccounts.length"
              :loading="exporting"
            >
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn
              icon
              small
              @click="loadDashboardData"
              :loading="loading"
              color="#01532B"
            >
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider class="banking-divider"></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loading" class="text-center py-6">
              <v-progress-circular indeterminate color="#01532B" />
              <div class="mt-2 text-caption">
                Loading bank account report...
              </div>
            </div>

            <div v-else-if="!bankAccountStats.length" class="text-center py-6">
              <v-icon size="48" color="grey lighten-2"
                >mdi-information-outline</v-icon
              >
              <div class="mt-2 text-subtitle-2 grey--text">
                No bank account data available
              </div>
            </div>

            <v-simple-table v-else dense class="banking-table">
              <template v-slot:default>
                <thead>
                  <tr class="banking-table-header">
                    <th class="white--text text-caption font-weight-bold">#</th>
                    <th class="white--text text-caption font-weight-bold">
                      Account Number
                    </th>
                    <th class="white--text text-caption font-weight-bold">
                      Account Name
                    </th>
                    <th class="white--text text-caption font-weight-bold">
                      Bank Name
                    </th>
                    <th class="white--text text-caption font-weight-bold">
                      Type
                    </th>
                    <th
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      Count
                    </th>
                    <th
                      v-for="currency in currencyList"
                      :key="'head-' + currency.code"
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      {{ currency.code }}
                    </th>
                    <th
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      Total (LAK)
                    </th>
                    <th
                      class="white--text text-caption font-weight-bold text-center"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(item, index) in filteredBankAccounts"
                    :key="item.bankAccountId"
                    :class="{
                      'banking-row-even': index % 2 === 0,
                      'banking-row-special':
                        item.bankAccountId === 'NO_BANK_ACCOUNT',
                    }"
                  >
                    <td class="text-caption text-center">{{ index + 1 }}</td>
                    <td
                      class="text-body-2"
                      :class="{
                        'grey--text': item.bankAccountId === 'NO_BANK_ACCOUNT',
                      }"
                    >
                      {{ item.bankAccount?.accountNumber || 'N/A' }}
                    </td>
                    <td
                      class="text-body-2"
                      :class="{
                        'grey--text font-italic':
                          item.bankAccountId === 'NO_BANK_ACCOUNT',
                      }"
                    >
                      {{ item.bankAccount?.accountName || 'Unknown Account' }}
                    </td>
                    <td
                      class="text-body-2"
                      :class="{
                        'grey--text font-italic':
                          item.bankAccountId === 'NO_BANK_ACCOUNT',
                      }"
                    >
                      {{ item.bankAccount?.bankName || 'N/A' }}
                    </td>
                    <td class="text-body-2">
                      <v-chip
                        x-small
                        :color="
                          item.bankAccount?.accountType === 'Cash'
                            ? '#F59E0B'
                            : '#01532B'
                        "
                        text-color="white"
                      >
                        {{ item.bankAccount?.accountType || 'Bank' }}
                      </v-chip>
                    </td>
                    <td class="text-body-2 text-right">
                      <v-chip x-small color="#228B22" text-color="white">
                        {{ item.count }}
                      </v-chip>
                    </td>
                    <td
                      v-for="currency in currencyList"
                      :key="'amt-' + currency.code"
                      class="text-body-2 text-right"
                    >
                      {{ formatCurrency(item.amounts?.[currency.code] || 0) }}
                    </td>
                    <td
                      class="text-right font-weight-bold banking-success--text"
                    >
                      {{ formatCurrency(item.totalLak || 0, 'LAK') }}
                    </td>
                    <td class="text-center">
                      <v-btn
                        x-small
                        color="#01532B"
                        @click="selectBankAccount(item.bankAccountId)"
                        class="white--text"
                      >
                        <v-icon x-small>mdi-eye</v-icon>
                        ເບິ່ງ
                      </v-btn>
                    </td>
                  </tr>

                  <!-- Totals -->
                  <tr class="banking-table-footer">
                    <td colspan="5" class="font-weight-bold text-caption">
                      ລວມ (Total)
                    </td>
                    <td class="text-right font-weight-bold text-body-2">
                      <v-chip x-small color="#01532B" text-color="white">
                        {{ totalSettlementsCount }}
                      </v-chip>
                    </td>
                    <td
                      v-for="currency in currencyList"
                      :key="'sum-' + currency.code"
                      class="text-right font-weight-bold text-body-2"
                    >
                      {{ formatCurrency(getCurrencyTotal(currency.code)) }}
                    </td>
                    <td
                      class="text-right font-weight-bold text-body-2 banking-primary--text"
                    >
                      {{ formatCurrency(totalLakAmount, 'LAK') }}
                    </td>
                    <td class="text-center">
                      <v-chip x-small color="grey"
                        >{{ filteredBankAccounts.length }} accounts</v-chip
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Enhanced Settlement Details Dialog -->
    <v-dialog v-model="settlementDialog" max-width="1200px" scrollable>
      <v-card v-if="selectedBankAccount">
        <v-card-title class="dialog-header">
          <i class="fas fa-university"></i>
          ລາຍລະອຽດການຊຳລະ - {{ selectedBankAccount.accountName }}
          <v-spacer></v-spacer>
          <v-btn icon @click="closeDialog" class="close-btn">
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
              <v-divider class="custom-divider mb-3"></v-divider>
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
              <v-divider class="custom-divider mb-3"></v-divider>
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
              <v-divider class="custom-divider mb-3"></v-divider>

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
                    <v-chip color="#01532B" text-color="white" small>
                      #{{ item.moneyAdvance.id }}
                    </v-chip>
                    <div class="advance-status">
                      {{ item.moneyAdvance.status }}
                    </div>
                  </div>
                  <span v-else class="no-advance">Standalone</span>
                </template>

                <template v-slot:item.actions="{ item }">
                  <v-btn small color="#01532B" @click="viewSettlement(item.id)">
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
import * as XLSX from 'xlsx'
export default {
  name: 'BankAccountSettlementReport',
  head() {
    return {
      title: 'Bank Account Settlement Reports',
    }
  },
  data() {
    return {
      // Options data
      bankAccounts: [],
      loading: false,
      exporting: false,
      loadingDetails: false,
      search: '',
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
      currencyList: [],
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
      const currencies = new Set()
      this.bankAccountStats.forEach((account) => {
        Object.keys(account.amounts || {}).forEach((currency) => {
          currencies.add(currency)
        })
      })
      return currencies.size
    },

    totalLakAmount() {
      return this.bankAccountStats.reduce(
        (sum, account) => sum + (account.totalLak || 0),
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
        (sum, account) => sum + parseInt(account.count || 0),
        0
      )
    },

    totalAmount() {
      return this.bankAccountStats.reduce(
        (sum, account) => sum + parseFloat(account.totalLak || 0),
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
        ...this.bankAccountStats.map((account) =>
          parseFloat(account.totalLak || 0)
        ),
        0
      )
    },
  },
  mounted() {
    this.setDefaultDates()
    this.loadDashboardData()
    this.loadInitialData()
  },
  methods: {
    async loadInitialData() {
      try {
        const response = await this.$axios.get('/api/bank_account/find')
        this.bankAccounts = response.data.data || response.data
      } catch (error) {
        console.error('Error loading bank accounts:', error)
        this.$toast.error('Error loading initial data')
      }

      try {
        const response = await this.$axios.get('/api/currency/find')
        const currencies = response.data.data || response.data
        // Ensure currencyList has the right structure for the template
        this.currencyList = currencies.map((currency) => ({
          code: currency.code,
          name: currency.name,
          id: currency.id,
        }))
      } catch (error) {
        console.error('Error loading currency accounts:', error)
        this.$toast.error('Error loading initial data')
      }
    },

    // Add this new method to group settlements by bank account
    groupSettlementsByBankAccount(settlements) {
      const grouped = {}

      settlements.forEach((settlement) => {
        const bankAccountId = settlement.bankAccountId || 'NO_BANK_ACCOUNT'

        if (!grouped[bankAccountId]) {
          grouped[bankAccountId] = {
            bankAccountId: bankAccountId,
            bankAccount: settlement.bankAccount || {
              accountNumber: 'N/A',
              accountName: 'Unknown Account',
              bankName: 'N/A',
              accountType: 'Bank',
            },
            count: 0,
            amounts: {},
            totalLak: 0,
          }
        }

        const account = grouped[bankAccountId]
        account.count += 1

        // Get currency code
        const currencyCode = settlement.currency?.code || 'LAK'

        // Initialize currency amount if not exists
        if (!account.amounts[currencyCode]) {
          account.amounts[currencyCode] = 0
        }

        // Add amount to currency
        account.amounts[currencyCode] += parseFloat(settlement.amount || 0)

        // Calculate LAK equivalent
        const exchangeRate = settlement.exchangeRate || 1
        const lakAmount = parseFloat(settlement.amount || 0) * exchangeRate
        account.totalLak += lakAmount
      })

      // Convert grouped object to array
      return Object.values(grouped)
    },

    async loadDashboardData() {
      this.loading = true
      try {
        const params = new URLSearchParams()
        if (this.filters.startDate)
          params.append('fromDate', this.filters.startDate)
        if (this.filters.endDate) params.append('toDate', this.filters.endDate)
        if (this.filters.method) params.append('method', this.filters.method)
        if (this.filters.bankAccountId)
          params.append('bankAccountId', this.filters.bankAccountId)

        const response = await this.$axios.get(`/api/settlements?${params}`)
        if (response.data.success) {
          console.info(`DATA FROM API: ${JSON.stringify(response.data.data)}`)

          // Transform individual settlements into grouped bank account stats
          const settlements = response.data.data.settlements || []
          this.bankAccountStats =
            this.groupSettlementsByBankAccount(settlements)

          // Calculate currency breakdown
          await this.calculateCurrencyBreakdown()
        }
      } catch (error) {
        console.error('Error loading dashboard data:', error)
        this.$toast.error('Failed to load bank account reports')
      } finally {
        this.loading = false
      }
    },

    getCurrencyColor(currencyCode) {
      const colors = {
        LAK: '#01532B',
        USD: '#228B22',
        THB: '#32CD32',
        CNY: '#006400',
        EUR: '#9ACD32',
        JPY: '#00FA9A',
        GBP: '#66CDAA',
        KRW: '#20B2AA',
      }
      return colors[currencyCode] || '#01532B'
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
        currencyId: null,
      }
      this.setDefaultDates()
      this.loadDashboardData()
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
        // Create workbook
        const workbook = XLSX.utils.book_new()

        // Prepare summary data
        const summaryData = [
          ['Bank Account Settlement Report'],
          [
            `Report Period: ${this.filters.startDate || 'All'} to ${
              this.filters.endDate || 'All'
            }`,
          ],
          [`Generated on: ${new Date().toLocaleDateString()}`],
          [''], // Empty row
          ['Summary Statistics'],
          [`Total Bank Accounts: ${this.bankAccountStats.length}`],
          [`Total Settlements: ${this.totalSettlementsCount}`],
          [
            `Total Amount (LAK): ${this.formatCurrency(
              this.totalLakAmount,
              'LAK'
            )}`,
          ],
          [`Unique Currencies: ${this.uniqueCurrencies}`],
          [''], // Empty row
          ['Account Details'], // Header for main data
        ]

        // Create header row for account details
        const headerRow = [
          '#',
          'Account Number',
          'Account Name',
          'Bank Name',
          'Type',
          'Settlement Count',
        ]

        // Add currency columns dynamically
        this.currencyList.forEach((currency) => {
          headerRow.push(`${currency.code} Amount`)
        })
        headerRow.push('Total (LAK)')

        summaryData.push(headerRow)

        // Add bank account data
        this.filteredBankAccounts.forEach((account, index) => {
          const row = [
            index + 1,
            account.bankAccount?.accountNumber || 'N/A',
            account.bankAccount?.accountName || 'Unknown Account',
            account.bankAccount?.bankName || 'N/A',
            account.bankAccount?.accountType || 'Bank',
            account.count,
          ]

          // Add currency amounts
          this.currencyList.forEach((currency) => {
            row.push(account.amounts?.[currency.code] || 0)
          })
          row.push(account.totalLak || 0)

          summaryData.push(row)
        })

        // Add totals row
        const totalsRow = ['', '', '', '', 'TOTAL', this.totalSettlementsCount]
        this.currencyList.forEach((currency) => {
          totalsRow.push(this.getCurrencyTotal(currency.code))
        })
        totalsRow.push(this.totalLakAmount)
        summaryData.push(totalsRow)

        // Create summary worksheet
        const summaryWorksheet = XLSX.utils.aoa_to_sheet(summaryData)

        // Set column widths
        const colWidths = [
          { wch: 5 }, // #
          { wch: 18 }, // Account Number
          { wch: 25 }, // Account Name
          { wch: 20 }, // Bank Name
          { wch: 12 }, // Type
          { wch: 15 }, // Count
        ]

        // Add currency column widths
        this.currencyList.forEach(() => {
          colWidths.push({ wch: 15 })
        })
        colWidths.push({ wch: 18 }) // Total LAK

        summaryWorksheet['!cols'] = colWidths

        // Add summary sheet to workbook
        XLSX.utils.book_append_sheet(
          workbook,
          summaryWorksheet,
          'Bank Account Summary'
        )

        // Create currency breakdown sheet if data exists
        if (this.currencyBreakdown.length > 0) {
          const currencyData = [
            ['Currency Breakdown Report'],
            [''],
            [
              'Currency',
              'Total Amount (Original)',
              'LAK Equivalent',
              'Settlement Count',
              'Percentage',
            ],
          ]

          this.currencyBreakdown.forEach((currency) => {
            currencyData.push([
              currency.currencyCode || 'LAK',
              currency.totalAmount || 0,
              currency.lakEquivalent || 0,
              currency.count || 0,
              `${Math.round(
                (currency.lakEquivalent / this.totalLakAmount) * 100
              )}%`,
            ])
          })

          const currencyWorksheet = XLSX.utils.aoa_to_sheet(currencyData)
          currencyWorksheet['!cols'] = [
            { wch: 12 }, // Currency
            { wch: 20 }, // Total Amount
            { wch: 18 }, // LAK Equivalent
            { wch: 15 }, // Count
            { wch: 12 }, // Percentage
          ]

          XLSX.utils.book_append_sheet(
            workbook,
            currencyWorksheet,
            'Currency Breakdown'
          )
        }

        // Generate filename
        const filename = `bank-account-settlement-report-${
          this.filters.startDate || 'all'
        }-${this.filters.endDate || 'all'}.xlsx`

        // Generate Excel file and download
        XLSX.writeFile(workbook, filename)

        this.$toast.success('Report exported successfully!')
      } catch (error) {
        console.error('Error exporting report:', error)
        this.$toast.error('Error exporting report: ' + error.message)
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

    getCurrencyTotal(currencyCode) {
      return this.bankAccountStats.reduce(
        (sum, account) => sum + (account.amounts?.[currencyCode] || 0),
        0
      )
    },

    getMethodColor(method) {
      const colors = {
        cash: '#01532B',
        bank_transfer: '#228B22',
        deduction: '#32CD32',
      }
      return colors[method] || '#01532B'
    },
  },
}
</script>

<style scoped>
/* Same styles as before - truncated for brevity */
.bank-account-settlement-report {
  padding: 0;
}

/* Header Section */
.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 24px;
  background: #01532b;
  color: white;
  border-radius: 8px;
}

.title-section h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.title-section p {
  margin: 8px 0 0 0;
  opacity: 0.9;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  gap: 16px;
}

.custom-btn {
  color: #01532b !important;
  border: 1px solid white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.custom-btn:hover {
  background-color: white !important;
  color: #01532b !important;
}

.bank-account-settlement-report {
  padding: 0;
}

/* Header Section */
.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 24px;
  background: #01532b;
  color: white;
  border-radius: 8px;
}

.title-section h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.title-section p {
  margin: 8px 0 0 0;
  opacity: 0.9;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  gap: 16px;
}

.custom-btn {
  color: #01532b !important;
  border: 1px solid white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.custom-btn:hover {
  background-color: white !important;
  color: #01532b !important;
}

/* Filter Card */
.filter-card {
  background: white;
  border-radius: 8px;
}

.filter-title {
  background: #01532b;
  color: white;
  font-weight: 600;
}

.custom-primary-bg {
  background-color: #01532b !important;
}

.custom-secondary-btn {
  background-color: #6c757d !important;
  color: white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.custom-secondary-btn:hover {
  background-color: #5a6268 !important;
}

/* Summary Cards */
.summary-cards {
  margin-bottom: 24px;
}

.summary-card {
  height: 140px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.summary-card:hover {
  transform: translateY(-2px);
}

.summary-content {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
}

.summary-icon {
  font-size: 48px;
  opacity: 0.9;
  margin-right: 16px;
  color: white;
}

.summary-details h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.summary-details p {
  margin: 4px 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.summary-details h2 {
  margin: 8px 0 0 0;
  font-size: 24px;
  font-weight: 700;
  color: white;
}

.summary-lcy {
  font-size: 11px;
  opacity: 0.9;
  margin-top: 4px !important;
  color: rgba(255, 255, 255, 0.9);
}

.total-accounts-card,
.settlement-card,
.amount-card,
.lak-card {
  background: #01532b;
  color: white;
}

/* Currency Breakdown */
.currency-breakdown {
  margin-bottom: 24px;
}

.currency-title {
  background: #01532b;
  color: white;
  font-weight: 600;
}

.currency-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  height: 100%;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.currency-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(1, 83, 43, 0.2);
  border-color: #01532b;
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
  color: #01532b;
  margin-bottom: 4px;
  font-family: monospace;
}

.lak-equivalent {
  font-size: 14px;
  color: #228b22;
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

/* Banking Table Styles */
.banking-table {
  background: white;
}

.banking-table-header {
  background-color: #01532b !important;
}

.banking-table-header th {
  background-color: #01532b !important;
  color: white !important;
  padding: 12px 8px !important;
  border-bottom: none !important;
}

.banking-row-even {
  background-color: #f8f9fa;
}

.banking-row-special {
  background-color: #fff3cd;
  font-style: italic;
}

.banking-table-footer {
  background-color: #e9ecef !important;
  font-weight: bold;
}

.banking-table-footer td {
  background-color: #e9ecef !important;
  border-top: 2px solid #01532b !important;
  padding: 12px 8px !important;
}

.banking-divider {
  border-color: #01532b !important;
  opacity: 0.3 !important;
}

.banking-primary--text {
  color: #01532b !important;
}

.banking-success--text {
  color: #28a745 !important;
}

.report-card {
  border-radius: 12px;
}

.report-header {
  background: #01532b;
  color: white;
  font-weight: 600;
}

/* Search field in header */
.search-field >>> input {
  color: white !important;
}

.search-field >>> .v-icon {
  color: white !important;
}

.search-field >>> .v-label {
  color: rgba(255, 255, 255, 0.7) !important;
}

.search-field >>> .v-input__control {
  border-color: rgba(255, 255, 255, 0.3) !important;
}

/* Table Section */
.table-card {
  margin-bottom: 24px;
  border-radius: 8px;
}

.table-title {
  background: #01532b;
  color: white;
  font-weight: 600;
}

.search-field {
  max-width: 300px;
}

.search-field >>> input {
  color: white !important;
}

.search-field >>> .v-icon {
  color: white !important;
}

.bank-account-card {
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 8px;
}

.bank-account-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(1, 83, 43, 0.2) !important;
}

.bank-account-card.selected {
  border: 2px solid #01532b;
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
  color: #01532b;
  margin: 4px 0;
  font-weight: 600;
}

.bank-name {
  font-size: 11px;
  color: #666;
  font-style: italic;
  margin: 0;
}

.bank-icon {
  font-size: 24px;
  color: #01532b;
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
  color: #01532b;
}

.count-value {
  color: #228b22;
}

.average-value {
  color: #32cd32;
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

/* Dialog Styling */
.dialog-header {
  background: #01532b !important;
  color: white !important;
  font-weight: 600 !important;
}

.close-btn {
  color: white !important;
}

.section-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #01532b;
}

.custom-divider {
  border-color: #01532b !important;
  opacity: 0.3 !important;
}

.detail-stat {
  display: flex;
  align-items: center;
  padding: 16px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  height: 100%;
  border-left: 4px solid #01532b;
  transition: all 0.3s ease;
}

.detail-stat:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(1, 83, 43, 0.2);
}

.stat-icon {
  font-size: 24px;
  color: #01532b;
  margin-right: 12px;
}

.stat-info strong {
  display: block;
  font-size: 12px;
  color: #01532b;
  margin-bottom: 4px;
  font-weight: 700;
}

.stat-number {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  font-family: monospace;
  color: #333;
}

.method-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  border-left: 4px solid #01532b;
  transition: all 0.3s ease;
}

.method-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(1, 83, 43, 0.2);
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
  color: #01532b;
}

.settlement-table {
  background: white;
}

.settlement-table >>> thead th {
  background-color: #01532b !important;
  color: white !important;
  font-weight: 600 !important;
  border-bottom: none !important;
}

.settlement-table >>> tbody tr:hover {
  background-color: rgba(1, 83, 43, 0.1) !important;
}

.date-cell {
  font-family: monospace;
  font-size: 13px;
  color: #01532b;
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
  color: #228b22;
  font-size: 13px;
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

/* Loading and spacing */
.text-center {
  text-align: center;
}

.py-8 {
  padding: 64px 0;
}

.mt-4 {
  margin-top: 16px;
}

.mt-3 {
  margin-top: 12px;
}

.mt-2 {
  margin-top: 8px;
}

.mb-4 {
  margin-bottom: 24px;
}

.mb-3 {
  margin-bottom: 12px;
}

.my-3 {
  margin: 12px 0;
}

.pa-4 {
  padding: 24px;
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

  .report-header {
    background: #01532b !important;
    color: white !important;
    -webkit-print-color-adjust: exact;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .report-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    padding: 16px;
  }

  .title-section h1 {
    font-size: 24px;
  }

  .action-buttons {
    flex-wrap: wrap;
    justify-content: center;
  }

  .summary-content {
    flex-direction: column;
    text-align: center;
    padding: 12px;
  }

  .summary-icon {
    margin-right: 0;
    margin-bottom: 8px;
    font-size: 40px;
  }

  .summary-details h2 {
    font-size: 20px;
  }

  .bank-account-header {
    flex-direction: column;
    text-align: center;
  }

  .bank-icon {
    margin-top: 8px;
  }

  .detail-stat {
    flex-direction: column;
    text-align: center;
  }

  .stat-icon {
    margin-right: 0;
    margin-bottom: 8px;
  }
}
</style>