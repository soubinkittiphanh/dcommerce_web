<template>
  <div class="money-advance-report">
    <!-- Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-chart-line"></i>
          ລາຍງານ ລາຍຈ່າຍລ່ວງໜ້າ
        </h1>
        <p class="page-subtitle">Money Advance Report</p>
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

    <!-- Filters Card -->
    <v-card class="filter-card mb-4" elevation="2">
      <v-card-title class="filter-title">
        <i class="fas fa-filter"></i>
        ຕົວກອງ (Filters)
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="3">
            <v-menu
              v-model="fromDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filters.fromDate"
                  label="ຈາກວັນທີ (From Date)"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.fromDate"
                @input="fromDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="3">
            <v-menu
              v-model="toDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filters.toDate"
                  label="ຫາວັນທີ (To Date)"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.toDate"
                @input="toDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="filters.ministryId"
              :items="ministries"
              item-text="ministryName"
              item-value="id"
              label="ກະຊວງ (Ministry)"
              prepend-icon="mdi-office-building"
              clearable
            ></v-select>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="filters.currencyId"
              :items="currencies"
              item-text="name"
              item-value="id"
              label="ສະກຸນເງິນ (Currency)"
              prepend-icon="mdi-currency-usd"
              clearable
            ></v-select>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="filters.status"
              :items="statusOptions"
              item-text="text"
              item-value="value"
              label="ສະຖານະ (Status)"
              prepend-icon="mdi-flag"
              clearable
            ></v-select>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="filters.makerId"
              :items="users"
              item-text="cus_name"
              item-value="id"
              label="ຜູ້ລົງບັນທຶກ (Maker)"
              prepend-icon="mdi-account"
              clearable
            ></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <div class="filter-actions">
              <v-btn color="primary" @click="applyFilters" :loading="loading">
                <i class="fas fa-search"></i>
                ຄົ້ນຫາ
              </v-btn>
              <v-btn color="secondary" @click="resetFilters">
                <i class="fas fa-undo"></i>
                ຣີເຊັດ
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Enhanced Summary Cards -->
    <v-row class="summary-cards mb-4">
      <v-col cols="12" md="3">
        <v-card class="summary-card advance-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-money-bill-wave"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ລວມລາຍຈ່າຍ</h3>
                <p class="summary-subtitle">Total Advances</p>
                <h2 class="summary-amount">{{ formatCurrency(summaryData.totalAdvances) }}</h2>
                <p class="summary-lcy" v-if="summaryData.totalAdvancesLcy">
                  LCY: {{ formatCurrency(summaryData.totalAdvancesLcy) }}
                </p>
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
                <i class="fas fa-hand-holding-usd"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ລວມການຊຳລະ</h3>
                <p class="summary-subtitle">Total Settlements</p>
                <h2 class="summary-amount">{{ formatCurrency(summaryData.totalSettlements) }}</h2>
                <p class="summary-lcy" v-if="summaryData.totalSettlementsLcy">
                  LCY: {{ formatCurrency(summaryData.totalSettlementsLcy) }}
                </p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card outstanding-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-exclamation-triangle"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ຍອດຄ້າງຊຳລະ</h3>
                <p class="summary-subtitle">Outstanding Balance</p>
                <h2 class="summary-amount">{{ formatCurrency(summaryData.outstandingBalance) }}</h2>
                <p class="summary-lcy" v-if="summaryData.outstandingBalanceLcy">
                  LCY: {{ formatCurrency(summaryData.outstandingBalanceLcy) }}
                </p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card brought-forward-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ຍອດຍົກມາ</h3>
                <p class="summary-subtitle">Brought Forward</p>
                <h2 class="summary-amount">{{ formatCurrency(summaryData.broughtForward) }}</h2>
                <p class="summary-lcy" v-if="summaryData.broughtForwardLcy">
                  LCY: {{ formatCurrency(summaryData.broughtForwardLcy) }}
                </p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Additional Summary Cards -->
    <v-row class="additional-summary mb-4" v-if="summaryData.totalRecords">
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number">{{ summaryData.totalRecords || 0 }}</h3>
            <p class="stats-label">ທັງໝົດ<br>Total Records</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number text-success">{{ summaryData.fullySettledCount || 0 }}</h3>
            <p class="stats-label">ຊຳລະເຕັມ<br>Fully Settled</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number text-warning">{{ summaryData.partiallySettledCount || 0 }}</h3>
            <p class="stats-label">ຊຳລະບາງສ່ວນ<br>Partial</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number text-error">{{ summaryData.unsettledCount || 0 }}</h3>
            <p class="stats-label">ຍັງບໍ່ຊຳລະ<br>Unsettled</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number text-error">{{ summaryData.overdueCount || 0 }}</h3>
            <p class="stats-label">ເກີນກຳນົດ<br>Overdue</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number">{{ summaryData.averageSettlementPercentage || 0 }}%</h3>
            <p class="stats-label">ເຄື່ອງຊຳລະ<br>Avg Settlement</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Currency Breakdown Card -->
    <v-card class="currency-breakdown-card mb-4" elevation="2" v-if="summaryData.currencyBreakdown && summaryData.currencyBreakdown.length > 0">
      <v-card-title>
        <i class="fas fa-coins"></i>
        ສະຫຼູບຕາມສະກຸນເງິນ (Currency Breakdown)
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="currency in summaryData.currencyBreakdown" :key="currency.currencyCode" cols="12" md="4">
            <v-card outlined>
              <v-card-text>
                <div class="currency-summary">
                  <h4>{{ currency.currencyCode }} - {{ currency.currencyName }}</h4>
                  <div class="currency-details">
                    <p><strong>ລວມລາຍຈ່າຍ:</strong> {{ formatCurrency(currency.totalAdvances) }}</p>
                    <p><strong>ລວມຊຳລະ:</strong> {{ formatCurrency(currency.totalSettlements) }}</p>
                    <p><strong>ຍອດຄ້າງ:</strong> {{ formatCurrency(currency.outstandingBalance) }}</p>
                    <p><strong>ເທົ່າກັບກີບ:</strong> {{ formatCurrency(currency.lcyEquivalent) }}</p>
                    <p><strong>ຈຳນວນ:</strong> {{ currency.count }} ລາຍການ</p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Ministry Breakdown Chart -->
    <v-card class="chart-card mb-4" elevation="2">
      <v-card-title>
        <i class="fas fa-chart-pie"></i>
        ລາຍງານຕາມກະຊວງ (Ministry Breakdown)
      </v-card-title>
      <v-card-text>
        <div class="chart-container">
          <canvas ref="ministryChart" width="400" height="200"></canvas>
        </div>
      </v-card-text>
    </v-card>

    <!-- Monthly Trend Chart -->
    <v-card class="chart-card mb-4" elevation="2">
      <v-card-title>
        <i class="fas fa-chart-line"></i>
        ແນວໂນ້ມລາຍເດືອນ (Monthly Trend)
      </v-card-title>
      <v-card-text>
        <div class="chart-container">
          <canvas ref="trendChart" width="400" height="200"></canvas>
        </div>
      </v-card-text>
    </v-card>

    <!-- Enhanced Detailed Report Table -->
    <v-card class="table-card" elevation="2">
      <v-card-title class="table-title">
        <i class="fas fa-table"></i>
        ລາຍລະອຽດລາຍງານ (Detailed Report)
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຄົ້ນຫາ..."
          single-line
          hide-details
          class="search-field"
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="tableHeaders"
        :items="reportData"
        :search="search"
        :loading="loading"
        class="report-table"
        :items-per-page="25"
        :footer-props="{
          itemsPerPageOptions: [10, 25, 50, 100],
          itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:'
        }"
      >
        <!-- Custom slots for better formatting -->
        <template v-slot:item.bookingDate="{ item }">
          <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
        </template>

        <template v-slot:item.amount="{ item }">
          <span class="amount-cell advance-amount">
            {{ formatCurrency(item.amount) }}
          </span>
        </template>

        <template v-slot:item.currencyCode="{ item }">
          <v-chip small outlined>
            {{ item.currencyCode || 'N/A' }}
          </v-chip>
        </template>

        <template v-slot:item.exchangeRate="{ item }">
          <span class="exchange-rate-cell">
            {{ formatExchangeRate(item.exchangeRate) }}
          </span>
        </template>

        <template v-slot:item.lcyEquivalent="{ item }">
          <span class="amount-cell lcy-amount">
            {{ formatCurrency(item.lcyEquivalent) }}
          </span>
        </template>

        <template v-slot:item.settlementAmount="{ item }">
          <span class="amount-cell settlement-amount">
            {{ formatCurrency(item.settlementAmount || 0) }}
          </span>
        </template>

        <template v-slot:item.outstandingAmount="{ item }">
          <span class="amount-cell outstanding-amount">
            {{ formatCurrency(item.outstandingAmount) }}
          </span>
        </template>

        <template v-slot:item.settlementPercentage="{ item }">
          <div class="settlement-progress">
            <v-progress-linear
              :value="parseFloat(item.settlementPercentage)"
              :color="getProgressColor(item.settlementPercentage)"
              height="20"
              rounded
            >
              <span class="progress-text">{{ item.settlementPercentage }}%</span>
            </v-progress-linear>
          </div>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip
            :color="getStatusColor(item.status)"
            text-color="white"
            small
          >
            {{ getStatusText(item.status) }}
          </v-chip>
        </template>

        <template v-slot:item.daysOverdue="{ item }">
          <v-chip
            v-if="item.daysOverdue > 0"
            color="red"
            text-color="white"
            small
          >
            {{ item.daysOverdue }} ມື້
          </v-chip>
          <span v-else class="text-success">-</span>
        </template>

        <template v-slot:item.ministry="{ item }">
          <div class="ministry-cell">
            <span class="ministry-name">{{ item.ministry?.ministryName || 'N/A' }}</span>
            <span class="ministry-code">{{ item.ministry?.ministryCode || '' }}</span>
          </div>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn
            small
            color="primary"
            @click="viewDetails(item)"
            class="mr-2"
          >
            <i class="fas fa-eye"></i>
          </v-btn>
          <v-btn
            small
            color="success"
            @click="viewSettlements(item)"
            v-if="item.settlementCount > 0"
          >
            <i class="fas fa-list"></i>
            {{ item.settlementCount }}
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Enhanced Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="900px">
      <v-card>
        <v-card-title>
          <i class="fas fa-info-circle"></i>
          ລາຍລະອຽດລາຍຈ່າຍ (Advance Details)
          <v-spacer></v-spacer>
          <v-btn icon @click="detailsDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text v-if="selectedItem">
          <v-row>
            <v-col cols="6">
              <div class="detail-item">
                <strong>ວັນທີບັນທຶກ:</strong> {{ formatDate(selectedItem.bookingDate) }}
              </div>
              <div class="detail-item">
                <strong>ຈຳນວນເງິນ:</strong> {{ formatCurrency(selectedItem.amount) }}
              </div>
              <div class="detail-item">
                <strong>ສະກຸນເງິນ:</strong> {{ selectedItem.currencyCode || 'N/A' }}
              </div>
              <div class="detail-item">
                <strong>ອັດຕາແລກປ່ຽນ:</strong> {{ formatExchangeRate(selectedItem.exchangeRate) }}
              </div>
              <div class="detail-item">
                <strong>ເທົ່າກັບກີບ:</strong> {{ formatCurrency(selectedItem.lcyEquivalent) }}
              </div>
              <div class="detail-item">
                <strong>ຈຸດປະສົງ:</strong> {{ selectedItem.purpose || 'N/A' }}
              </div>
            </v-col>
            <v-col cols="6">
              <div class="detail-item">
                <strong>ກະຊວງ:</strong> {{ selectedItem.ministry?.ministryName || 'N/A' }}
              </div>
              <div class="detail-item">
                <strong>ສະຖານະ:</strong> 
                <v-chip :color="getStatusColor(selectedItem.status)" text-color="white" small>
                  {{ getStatusText(selectedItem.status) }}
                </v-chip>
              </div>
              <div class="detail-item">
                <strong>ຈຳນວນຊຳລະ:</strong> {{ formatCurrency(selectedItem.settlementAmount) }}
              </div>
              <div class="detail-item">
                <strong>ຍອດຄ້າງ:</strong> {{ formatCurrency(selectedItem.outstandingAmount) }}
              </div>
              <div class="detail-item">
                <strong>ເປີເຊັນຊຳລະ:</strong> {{ selectedItem.settlementPercentage }}%
              </div>
              <div class="detail-item">
                <strong>ຜູ້ລົງບັນທຶກ:</strong> {{ selectedItem.maker?.cus_name || 'N/A' }}
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="detail-item">
            <strong>ໝາຍເຫດ:</strong> {{ selectedItem.note || 'ບໍ່ມີໝາຍເຫດ' }}
          </div>
          <div class="detail-item" v-if="selectedItem.daysOverdue > 0">
            <strong>ເກີນກຳນົດ:</strong> 
            <v-chip color="red" text-color="white" small>
              {{ selectedItem.daysOverdue }} ມື້
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Settlements Dialog -->
    <v-dialog v-model="settlementsDialog" max-width="900px">
      <v-card>
        <v-card-title>
          <i class="fas fa-receipt"></i>
          ປະຫວັດການຊຳລະ (Settlement History)
          <v-spacer></v-spacer>
          <v-btn icon @click="settlementsDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="settlementHeaders"
            :items="settlements"
            :loading="loadingSettlements"
            hide-default-footer
            class="settlement-table"
          >
            <template v-slot:item.bookingDate="{ item }">
              <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
            </template>
            <template v-slot:item.amount="{ item }">
              <span class="amount-cell settlement-amount">
                {{ formatCurrency(item.amount) }}
              </span>
            </template>
            <template v-slot:item.method="{ item }">
              <v-chip small :color="getMethodColor(item.method)">
                {{ getMethodText(item.method) }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// Use the legacy Chart.js import
import Chart from 'chart.js'

export default {
  name: 'MoneyAdvanceReport',
  
  data() {
    return {
      loading: false,
      exporting: false,
      loadingSettlements: false,
      search: '',
      fromDateMenu: false,
      toDateMenu: false,
      detailsDialog: false,
      settlementsDialog: false,
      selectedItem: null,
      settlements: [],
      
      // Filter data
      filters: {
        fromDate: null,
        toDate: null,
        ministryId: null,
        currencyId: null,
        status: null,
        makerId: null
      },
      
      // Options data
      ministries: [],
      currencies: [],
      users: [],
      statusOptions: [
        { text: 'ລໍຖ້າອະນຸມັດ (Pending)', value: 'pending' },
        { text: 'ອະນຸມັດແລ້ວ (Approved)', value: 'approved' },
        { text: 'ຊຳລະແລ້ວ (Settled)', value: 'settled' }
      ],
      
      // Report data
      reportData: [],
      summaryData: {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        broughtForward: 0,
        totalAdvancesLcy: 0,
        totalSettlementsLcy: 0,
        outstandingBalanceLcy: 0,
        broughtForwardLcy: 0,
        totalRecords: 0,
        fullySettledCount: 0,
        partiallySettledCount: 0,
        unsettledCount: 0,
        overdueCount: 0,
        averageSettlementPercentage: 0,
        currencyBreakdown: []
      },
      
      // Chart instances
      ministryChart: null,
      trendChart: null,
      
      // Enhanced Table headers with new fields
      tableHeaders: [
        { text: 'ວັນທີ', value: 'bookingDate', width: '100px' },
        { text: 'ຈຳນວນເງິນ', value: 'amount', width: '120px' },
        { text: 'ສະກຸນເງິນ', value: 'currencyCode', width: '80px' },
        { text: 'ອັດຕາແລກປ່ຽນ', value: 'exchangeRate', width: '100px' },
        { text: 'ເທົ່າກັບກີບ', value: 'lcyEquivalent', width: '120px' },
        { text: 'ການຊຳລະ', value: 'settlementAmount', width: '120px' },
        { text: 'ຍອດຄ້າງ', value: 'outstandingAmount', width: '120px' },
        { text: '% ຊຳລະ', value: 'settlementPercentage', width: '100px' },
        { text: 'ກະຊວງ', value: 'ministry', width: '150px' },
        { text: 'ຈຸດປະສົງ', value: 'purpose', width: '200px' },
        { text: 'ສະຖານະ', value: 'status', width: '100px' },
        { text: 'ເກີນກຳນົດ', value: 'daysOverdue', width: '80px' },
        { text: 'ຜູ້ລົງ', value: 'maker.cus_name', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '100px' }
      ],
      
      settlementHeaders: [
        { text: 'ວັນທີ', value: 'bookingDate' },
        { text: 'ຈຳນວນ', value: 'amount' },
        { text: 'ວິທີການ', value: 'method' },
        { text: 'ໝາຍເຫດ', value: 'notes' },
        { text: 'ຜູ້ດຳເນີນການ', value: 'proceeder.cus_name' }
      ]
    }
  },
  
  async created() {
    await this.loadInitialData()
    this.setDefaultDates()
    this.applyFilters()
  },
  
  mounted() {
    // Initialize charts after component is mounted
    this.$nextTick(() => {
      this.initializeCharts()
    })
  },
  
  beforeDestroy() {
    // Clean up chart instances
    if (this.ministryChart) {
      this.ministryChart.destroy()
    }
    if (this.trendChart) {
      this.trendChart.destroy()
    }
  },
  
  methods: {
    async loadInitialData() {
      try {
        // Load ministries, currencies, and users in parallel
        const [ministriesRes, currenciesRes, usersRes] = await Promise.all([
          this.$axios.get('/api/ministries'),
          this.$axios.get('/api/currency/find'),
          this.$axios.get('/api/user/find')
        ])
        
        this.ministries = ministriesRes.data.data
        this.currencies = currenciesRes.data
        this.users = usersRes.data
      } catch (error) {
        console.error('Error loading initial data:', error)
        this.$toast.error('Error loading initial data')
      }
    },
    
    setDefaultDates() {
      const now = new Date()
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
      this.filters.fromDate = firstDay.toISOString().substr(0, 10)
      this.filters.toDate = now.toISOString().substr(0, 10)
    },
    
    async applyFilters() {
      this.loading = true
      try {
        // Build query params
        const params = new URLSearchParams()
        Object.keys(this.filters).forEach(key => {
          if (this.filters[key]) {
            params.append(key, this.filters[key])
          }
        })
        
        const response = await this.$axios.get(`/api/money-advances/report?${params}`)
        this.reportData = response.data.data
        this.summaryData = response.data.summary
        
        // Update charts
        this.updateCharts()
        
      } catch (error) {
        console.error('Error loading report data:', error)
        this.$toast.error('Error loading report data')
      } finally {
        this.loading = false
      }
    },
    
    resetFilters() {
      this.filters = {
        fromDate: null,
        toDate: null,
        ministryId: null,
        currencyId: null,
        status: null,
        makerId: null
      }
      this.setDefaultDates()
      this.applyFilters()
    },
    
    initializeCharts() {
      this.createMinistryChart()
      this.createTrendChart()
    },
    
    createMinistryChart() {
      const ctx = this.$refs.ministryChart.getContext('2d')
      this.ministryChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [],
          datasets: [{
            data: [],
            backgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
              '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF'
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'bottom'
          }
        }
      })
    },
    
    createTrendChart() {
      const ctx = this.$refs.trendChart.getContext('2d')
      this.trendChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: 'ລາຍຈ່າຍລ່ວງໜ້າ',
            data: [],
            borderColor: '#36A2EB',
            backgroundColor: 'rgba(54, 162, 235, 0.1)',
            tension: 0.1
          }, {
            label: 'ການຊຳລະ',
            data: [],
            borderColor: '#4BC0C0',
            backgroundColor: 'rgba(75, 192, 192, 0.1)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
    },
    
    updateCharts() {
      // Update ministry chart
      const ministryData = this.groupByMinistry()
      this.ministryChart.data.labels = ministryData.labels
      this.ministryChart.data.datasets[0].data = ministryData.data
      this.ministryChart.update()
      
      // Update trend chart
      const trendData = this.groupByMonth()
      this.trendChart.data.labels = trendData.labels
      this.trendChart.data.datasets[0].data = trendData.advances
      this.trendChart.data.datasets[1].data = trendData.settlements
      this.trendChart.update()
    },
    
    groupByMinistry() {
      const grouped = {}
      this.reportData.forEach(item => {
        const ministry = item.ministry?.ministryName || 'ບໍ່ລະບຸກະຊວງ'
        if (!grouped[ministry]) {
          grouped[ministry] = 0
        }
        grouped[ministry] += parseFloat(item.lcyEquivalent || item.amount)
      })
      
      return {
        labels: Object.keys(grouped),
        data: Object.values(grouped)
      }
    },
    
    groupByMonth() {
      const grouped = {}
      this.reportData.forEach(item => {
        const month = new Date(item.bookingDate).toISOString().substr(0, 7)
        if (!grouped[month]) {
          grouped[month] = { advances: 0, settlements: 0 }
        }
        grouped[month].advances += parseFloat(item.lcyEquivalent || item.amount)
        grouped[month].settlements += parseFloat(item.settlementLcyEquivalent || item.settlementAmount || 0)
      })
      
      const sortedMonths = Object.keys(grouped).sort()
      return {
        labels: sortedMonths,
        advances: sortedMonths.map(month => grouped[month].advances),
        settlements: sortedMonths.map(month => grouped[month].settlements)
      }
    },
    
    async viewDetails(item) {
      this.selectedItem = item
      this.detailsDialog = true
    },
    
    async viewSettlements(item) {
      this.loadingSettlements = true
      this.settlementsDialog = true
      
      try {
        const response = await this.$axios.get(`/api/money-advances/${item.id}/settlements`)
        this.settlements = response.data.data || response.data
      } catch (error) {
        console.error('Error loading settlements:', error)
        this.$toast.error('Error loading settlements')
      } finally {
        this.loadingSettlements = false
      }
    },
    
    async exportToExcel() {
      this.exporting = true
      try {
        const params = new URLSearchParams()
        Object.keys(this.filters).forEach(key => {
          if (this.filters[key]) {
            params.append(key, this.filters[key])
          }
        })
        
        const response = await this.$axios.get(`/api/money-advances/report/export?${params}`, {
          responseType: 'blob'
        })
        
        // Create download link
        const blob = new Blob([response.data])
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `money-advance-report-${new Date().toISOString().substr(0, 10)}.xlsx`
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
    
    formatCurrency(amount) {
      if (!amount) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    },
    
    formatExchangeRate(rate) {
      if (!rate) return '1.0000'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
      }).format(rate)
    },
    
    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('lo-LA')
    },
    
    getProgressColor(percentage) {
      const percent = parseFloat(percentage)
      if (percent >= 100) return 'green'
      if (percent >= 50) return 'orange'
      return 'red'
    },
    
    getStatusColor(status) {
      switch (status) {
        case 'pending': return 'orange'
        case 'approved': return 'blue'
        case 'settled': return 'green'
        default: return 'grey'
      }
    },
    
    getStatusText(status) {
      switch (status) {
        case 'pending': return 'ລໍຖ້າ'
        case 'approved': return 'ອະນຸມັດ'
        case 'settled': return 'ຊຳລະແລ້ວ'
        default: return status
      }
    },
    
    getMethodColor(method) {
      switch (method) {
        case 'cash': return 'green'
        case 'bank_transfer': return 'blue'
        case 'deduction': return 'orange'
        default: return 'grey'
      }
    },
    
    getMethodText(method) {
      switch (method) {
        case 'cash': return 'ເງິນສົດ'
        case 'bank_transfer': return 'ໂອນເງິນ'
        case 'deduction': return 'ຫັກລົບ'
        default: return method
      }
    }
  }
}
</script>

<style scoped>
.money-advance-report {
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

.action-buttons .v-btn {
  color: white !important;
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
  height: 160px;
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

.advance-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.settlement-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.outstanding-card {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  color: #333;
}

.brought-forward-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #333;
}

/* Additional Summary Cards */
.additional-summary {
  margin-bottom: 24px;
}

.stats-card {
  height: 100px;
}

.stats-number {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.stats-label {
  font-size: 11px;
  margin: 4px 0 0 0;
  line-height: 1.2;
}

/* Currency Breakdown */
.currency-breakdown-card {
  margin-bottom: 24px;
}

.currency-summary h4 {
  margin: 0 0 12px 0;
  color: #495057;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}

.currency-details p {
  margin: 4px 0;
  font-size: 13px;
}

.chart-card {
  margin-bottom: 24px;
}

.chart-container {
  height: 300px;
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

.report-table {
  background: white;
}

.date-cell {
  font-family: monospace;
  font-size: 13px;
}

.amount-cell {
  font-family: monospace;
  font-weight: 600;
  text-align: right;
  display: block;
}

.exchange-rate-cell {
  font-family: monospace;
  font-size: 12px;
  text-align: center;
  display: block;
}

.advance-amount {
  color: #667eea;
}

.settlement-amount {
  color: #28a745;
}

.outstanding-amount {
  color: #dc3545;
}

.lcy-amount {
  color: #6f42c1;
}

.settlement-progress {
  width: 100%;
}

.progress-text {
  font-size: 11px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
}

.ministry-cell {
  display: flex;
  flex-direction: column;
}

.ministry-name {
  font-weight: 600;
  font-size: 13px;
}

.ministry-code {
  font-size: 11px;
  color: #666;
  font-family: monospace;
}

.detail-item {
  margin-bottom: 12px;
  font-size: 14px;
}

.detail-item strong {
  color: #495057;
}

.settlement-table {
  margin-top: 16px;
}

/* Print styles */
@media print {
  .action-buttons,
  .filter-card,
  .v-btn {
    display: none !important;
  }
  
  .summary-cards,
  .additional-summary,
  .currency-breakdown-card {
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
    height: 250px;
  }
  
  .filter-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .filter-actions .v-btn {
    width: 100%;
  }
  
  .stats-card {
    height: 80px;
  }
  
  .stats-number {
    font-size: 18px;
  }
  
  .stats-label {
    font-size: 10px;
  }
}

/* Loading states */
.v-data-table >>> .v-data-table__progress {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Custom scrollbar for dialogs */
.v-dialog .v-card-text {
  max-height: 60vh;
  overflow-y: auto;
}

.v-dialog .v-card-text::-webkit-scrollbar {
  width: 6px;
}

.v-dialog .v-card-text::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.v-dialog .v-card-text::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.v-dialog .v-card-text::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>