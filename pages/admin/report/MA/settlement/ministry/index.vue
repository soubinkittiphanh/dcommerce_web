<template>
  <div class="ministry-settlement-report">
    <!-- Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-university"></i>
          ລາຍງານຊຳລະຕາມກະຊວງ
        </h1>
        <p class="page-subtitle">Ministry Settlement Report</p>
      </div>
      <div class="action-buttons">
        <v-btn class="custom-btn" @click="exportToExcel" :loading="exporting">
          <i class="fas fa-file-excel"></i>
          Export Excel
        </v-btn>
        <v-btn class="custom-btn" @click="printReport">
          <i class="fas fa-print"></i>
          Print
        </v-btn>
      </div>
    </div>

    <!-- Filters Card -->
    <v-card class="filter-card mb-4" elevation="2">
      <v-card-title class="filter-title d-flex align-center">
        <v-icon class="mr-2">mdi-filter</v-icon>
        ຕົວກອງ (Filters)
      </v-card-title>

      <v-card-text class="pt-4 pb-4 px-4">
        <v-row dense>
          <!-- Start Date -->
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
                  outlined
                  dense
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.startDate"
                @input="startDateMenu = false"
                color="#01532B"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <!-- End Date -->
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
                  outlined
                  dense
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.endDate"
                @input="endDateMenu = false"
                color="#01532B"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <!-- Limit -->
          <v-col cols="12" md="2">
            <v-select
              v-model="filters.limit"
              :items="limitOptions"
              item-text="text"
              item-value="value"
              label="ຈຳນວນກະຊວງ (Top Ministries)"
              prepend-icon="mdi-office-building"
              outlined
              dense
            ></v-select>
          </v-col>

          <!-- Currency -->
          <v-col cols="12" md="2">
            <v-select
              v-model="filters.currencyId"
              :items="currencyOptions"
              item-text="text"
              item-value="value"
              label="ສະກຸນເງິນ (Currency)"
              prepend-icon="mdi-currency-usd"
              clearable
              outlined
              dense
            ></v-select>
          </v-col>

          <!-- Search Button -->
          <v-col cols="12" md="2" class="d-flex align-center">
            <v-btn
              class="custom-primary-btn mr-2"
              @click="loadMinistryData"
              :loading="loading"
              color="primary"
              depressed
              block
              small
            >
              <v-icon left small>mdi-magnify</v-icon>
              ຄົ້ນຫາ
            </v-btn>
          </v-col>

          <!-- Reset Button -->
          <v-col cols="12" md="2" class="d-flex align-center">
            <v-btn
              class="custom-secondary-btn"
              @click="resetFilters"
              color="grey lighten-1"
              depressed
              block
              small
            >
              <v-icon left small>mdi-restore</v-icon>
              ຣີເຊັດ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Summary Cards -->
    <v-row class="summary-cards mb-4" v-if="!loading">
      <v-col cols="12" md="3">
        <v-card class="summary-card ministries-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-university"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ກະຊວງທີ່ໃຊ້ງານ</h3>
                <p class="summary-subtitle">Active Ministries</p>
                <h2 class="summary-amount">{{ topMinistries.length }}</h2>
                <p class="summary-lcy">Ministry Count</p>
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
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ລວມຈຳນວນເງິນ</h3>
                <p class="summary-subtitle">Total Settlement Amount</p>
                <h2 class="summary-amount">
                  ${{ formatCurrency(totalAmount) }}
                </h2>
                <p class="summary-lcy">USD Amount</p>
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
          <v-card-title class="section-header">
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
                      small
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
        class="custom-progress"
        size="64"
      ></v-progress-circular>
      <p class="mt-4 text-gray-600">
        ກຳລັງໂຫລດຂໍ້ມູນ... Loading ministry reports...
      </p>
    </div>

    <!-- Chart Card -->
    <v-card
      class="chart-card mb-4"
      elevation="2"
      v-if="!loading && topMinistries.length > 0"
    >
      <v-card-title class="section-header">
        <i class="fas fa-chart-bar"></i>
        ກາຟສະຫຼຸບກະຊວງທີ່ນິຍົມ (Top Ministries Settlement Chart)
      </v-card-title>
      <v-card-text>
        <div class="chart-container">
          <canvas ref="ministryChart" width="400" height="200"></canvas>
        </div>
      </v-card-text>
    </v-card>

    <!-- Ministry Cards -->
    <v-card class="ministries-container" elevation="2" v-if="!loading">
      <v-card-title class="section-header">
        <i class="fas fa-university"></i>
        ກະຊວງທີ່ນິຍົມໃຊ້ງານ (Top Ministries by Settlement Amount)
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຄົ້ນຫາກະຊວງ..."
          single-line
          hide-details
          class="search-field"
          outlined
          dense
        ></v-text-field>
      </v-card-title>

      <v-card-text v-if="topMinistries.length > 0">
        <!-- Progress Bar Section -->
        <div class="progress-section mb-6">
          <h3 class="section-subtitle mb-4">
            ສັດສ່ວນການຊຳລະ (Settlement Distribution)
          </h3>
          <div class="space-y-4">
            <div
              v-for="(ministry, index) in filteredMinistries"
              :key="ministry.ministryId"
              class="progress-item"
            >
              <div class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <v-chip class="rank-chip" text-color="white" small>
                    {{ index + 1 }}
                  </v-chip>
                  <div class="ml-3">
                    <h4 class="ministry-name">
                      {{ ministry.ministry.ministryName }}
                    </h4>
                    <p class="ministry-code">
                      Code: {{ ministry.ministry.ministryCode }}
                    </p>
                  </div>
                </div>
                <div class="text-right">
                  <div class="amount-display">
                    ${{ formatCurrency(ministry.totalAmount) }}
                  </div>
                  <div class="count-display">
                    {{ ministry.settlementCount }} ການຊຳລະ
                  </div>
                </div>
              </div>
              <v-progress-linear
                :value="(ministry.totalAmount / maxAmount) * 100"
                color="#01532B"
                height="12"
                rounded
              ></v-progress-linear>
              <div class="progress-percentage">
                {{ Math.round((ministry.totalAmount / totalAmount) * 100) }}%
                ຂອງທັງໝົດ
              </div>
            </div>
          </div>
        </div>

        <!-- Ministry Cards Grid -->
        <div class="ministry-cards-grid">
          <h3 class="section-subtitle mb-4">
            ລາຍລະອຽດກະຊວງ (Ministry Details)
          </h3>
          <v-row>
            <v-col
              v-for="(ministry, index) in filteredMinistries"
              :key="ministry.ministryId"
              cols="12"
              md="6"
              lg="4"
            >
              <v-card
                class="ministry-card"
                elevation="2"
                @click="selectMinistry(ministry.ministryId, ministry.ministry)"
                :class="{
                  selected: selectedMinistry?.id == ministry.ministryId,
                }"
              >
                <v-card-text>
                  <div class="ministry-header">
                    <div class="ministry-info">
                      <div class="rank-badge">
                        <v-chip class="rank-chip" text-color="white" small>
                          #{{ index + 1 }}
                        </v-chip>
                      </div>
                      <h3 class="ministry-title">
                        {{ ministry.ministry.ministryName }}
                      </h3>
                      <p class="ministry-code-display">
                        {{ ministry.ministry.ministryCode }}
                      </p>
                    </div>
                    <div class="ministry-icon">
                      <i class="fas fa-university"></i>
                    </div>
                  </div>

                  <v-divider class="my-3"></v-divider>

                  <div class="ministry-stats">
                    <div class="stat-item">
                      <span class="stat-label">ລວມຈຳນວນເງິນ:</span>
                      <span class="stat-value amount-value">
                        ${{ formatCurrency(ministry.totalAmount) }}
                      </span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">ຈຳນວນການຊຳລະ:</span>
                      <span class="stat-value count-value">
                        {{ ministry.settlementCount }}
                      </span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">ຄ່າສະເລ່ຍ:</span>
                      <span class="stat-value average-value">
                        ${{
                          formatCurrency(
                            ministry.totalAmount / ministry.settlementCount
                          )
                        }}
                      </span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">ສັດສ່ວນ:</span>
                      <span class="stat-value percentage-value">
                        {{
                          Math.round(
                            (ministry.totalAmount / totalAmount) * 100
                          )
                        }}%
                      </span>
                    </div>
                  </div>

                  <div class="card-actions mt-3">
                    <v-btn small class="view-details-btn" block>
                      <i class="fas fa-eye"></i>
                      ເບິ່ງລາຍລະອຽດ
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-card-text>

      <!-- No Data State -->
      <v-card-text v-else>
        <div class="no-data-state">
          <div class="no-data-icon">
            <i class="fas fa-university"></i>
          </div>
          <h3 class="no-data-title">ບໍ່ມີຂໍ້ມູນກະຊວງ</h3>
          <p class="no-data-subtitle">
            No ministry settlement data found for the selected period.
          </p>
        </div>
      </v-card-text>
    </v-card>

    <!-- Ministry Details Dialog -->
    <v-dialog v-model="settlementDialog" max-width="1400px" scrollable>
      <v-card v-if="selectedMinistry">
        <v-card-title class="dialog-header">
          <i class="fas fa-university"></i>
          ລາຍລະອຽດການຊຳລະ - {{ selectedMinistry.ministryName }}
          <v-spacer></v-spacer>
          <v-btn icon @click="closeDialog" class="close-btn">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <!-- Ministry Summary -->
          <v-row class="summary-section mb-4">
            <v-col cols="12">
              <h3 class="section-title">ສະຫຼຸບກະຊວງ (Ministry Summary)</h3>
              <v-divider class="custom-divider mb-3"></v-divider>
            </v-col>
            <v-col cols="6" md="2">
              <div class="detail-stat">
                <div class="stat-icon">
                  <i class="fas fa-code"></i>
                </div>
                <div class="stat-info">
                  <strong>ລະຫັດກະຊວງ:</strong>
                  <p class="stat-number">{{ selectedMinistry.ministryCode }}</p>
                </div>
              </div>
            </v-col>
            <v-col cols="6" md="2">
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
            <v-col cols="6" md="2">
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
            <v-col cols="6" md="2">
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
            <v-col cols="6" md="2">
              <div class="detail-stat">
                <div class="stat-icon">
                  <i class="fas fa-credit-card"></i>
                </div>
                <div class="stat-info">
                  <strong>ວິທີການນິຍົມ:</strong>
                  <p class="stat-number">{{ getMethodDistribution() }}</p>
                </div>
              </div>
            </v-col>
            <v-col cols="6" md="2">
              <div class="detail-stat">
                <div class="stat-icon">
                  <i class="fas fa-percentage"></i>
                </div>
                <div class="stat-info">
                  <strong>ມີເງິນກ່ອນ:</strong>
                  <p class="stat-number">{{ getAdvancePercentage() }}%</p>
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
                ການແຈກຢາຍຕາມວິທີການຊຳລະ (Settlement Method Distribution)
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
                  <div class="method-percentage">
                    {{
                      Math.round(
                        (method.count / settlementSummary.settlementCount) * 100
                      )
                    }}% ຂອງທັງໝົດ
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Method Filter Buttons -->
          <v-row class="method-filters mb-4">
            <v-col cols="12">
              <h3 class="section-title">ກອງຕາມວິທີການ (Filter by Method)</h3>
              <v-divider class="custom-divider mb-3"></v-divider>
              <div class="filter-buttons">
                <v-btn
                  :class="
                    selectedMethodFilter === ''
                      ? 'custom-primary-btn'
                      : 'custom-outline-btn'
                  "
                  @click="filterByMethod('')"
                  class="mr-2 mb-2"
                  small
                >
                  ທັງໝົດ (All Methods)
                </v-btn>
                <v-btn
                  v-for="method in availableMethods"
                  :key="method"
                  :class="
                    selectedMethodFilter === method
                      ? 'custom-primary-btn'
                      : 'custom-outline-btn'
                  "
                  @click="filterByMethod(method)"
                  class="mr-2 mb-2"
                  small
                >
                  {{ formatMethod(method) }}
                </v-btn>
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
                :items="filteredSettlements"
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
                      item.proceeder?.cus_name || 'N/A'
                    }}</span>
                  </div>
                </template>

                <template v-slot:item.chartAccount="{ item }">
                  <div v-if="item.chartAccount" class="chart-account-info">
                    <span class="account-name">{{
                      item.chartAccount.accountName
                    }}</span>
                    <div class="account-code">
                      {{ item.chartAccount.accountCode }}
                    </div>
                  </div>
                  <span v-else class="no-account">N/A</span>
                </template>

                <template v-slot:item.moneyAdvance="{ item }">
                  <div v-if="item.moneyAdvance" class="advance-info">
                    <v-chip color="#01532B" text-color="white" small>
                      #{{ item.moneyAdvance.id }}
                    </v-chip>
                    <div class="advance-purpose">
                      {{ item.moneyAdvance.purpose?.substring(0, 20) }}...
                    </div>
                    <div class="advance-status">
                      {{ item.moneyAdvance.status }}
                    </div>
                  </div>
                  <span v-else class="no-advance">Standalone</span>
                </template>

                <template v-slot:item.actions="{ item }">
                  <div class="action-buttons">
                    <v-btn
                      small
                      class="custom-action-btn"
                      @click="viewSettlement(item.id)"
                    >
                      <i class="fas fa-eye"></i>
                      ເບິ່ງ
                    </v-btn>
                    <v-btn
                      v-if="item.notes"
                      small
                      class="custom-notes-btn ml-1"
                      @click="showNotes(item.notes)"
                    >
                      <i class="fas fa-sticky-note"></i>
                      ໝາຍເຫດ
                    </v-btn>
                  </div>
                </template>

                <template v-slot:no-data>
                  <div class="no-filtered-data">
                    <i class="fas fa-search"></i>
                    <p>ບໍ່ມີການຊຳລະທີ່ກົງກັບການກອງທີ່ເລືອກ</p>
                    <p>No settlements found for the selected filter.</p>
                  </div>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Notes Modal -->
    <v-dialog v-model="showNotesModal" max-width="600px">
      <v-card>
        <v-card-title class="dialog-header">
          <i class="fas fa-sticky-note"></i>
          ໝາຍເຫດການຊຳລະ (Settlement Notes)
          <v-spacer></v-spacer>
          <v-btn icon @click="showNotesModal = false" class="close-btn">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="notes-content">
          <p>{{ selectedNotes }}</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'MinistrySettlementReport',
  head() {
    return {
      title: 'Ministry Settlement Reports',
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
      topMinistries: [],
      selectedMinistry: null,
      selectedSettlements: [],
      settlementSummary: {
        totalAmount: 0,
        settlementCount: 0,
      },
      methodDistribution: [],
      currencyBreakdown: [],
      currencies: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10,
      },
      filters: {
        startDate: null,
        endDate: null,
        limit: '10',
        currencyId: null,
      },
      selectedMethodFilter: '',
      showNotesModal: false,
      selectedNotes: '',
      ministryChart: null,

      limitOptions: [
        { text: 'ອັນດັບ 5 (Top 5)', value: '5' },
        { text: 'ອັນດັບ 10 (Top 10)', value: '10' },
        { text: 'ອັນດັບ 15 (Top 15)', value: '15' },
        { text: 'ອັນດັບ 20 (Top 20)', value: '20' },
      ],

      settlementHeaders: [
        { text: 'ວັນທີລົງບັນທຶກ', value: 'bookingDate', width: '120px' },
        { text: 'ສະກຸນເງິນ', value: 'currency', width: '80px' },
        { text: 'ຈຳນວນເງິນຕົ້ນ', value: 'amount', width: '130px' },
        { text: 'ອັດຕາແລກປ່ຽນ', value: 'exchangeRate', width: '100px' },
        { text: 'ເທົ່າກັບລາວກີບ', value: 'lakAmount', width: '130px' },
        { text: 'ວິທີການ', value: 'method', width: '100px' },
        { text: 'ຜູ້ດຳເນີນການ', value: 'proceeder', width: '130px' },
        { text: 'ບັນຊີຜັງບັນຊີ', value: 'chartAccount', width: '150px' },
        { text: 'ເງິນກ່ອນ', value: 'moneyAdvance', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '120px' },
      ],
    }
  },
  computed: {
    filteredMinistries() {
      if (!this.search) return this.topMinistries
      return this.topMinistries.filter(
        (ministry) =>
          ministry.ministry?.name
            ?.toLowerCase()
            .includes(this.search.toLowerCase()) ||
          ministry.ministry?.code
            ?.toLowerCase()
            .includes(this.search.toLowerCase())
      )
    },
    maxAmount() {
      return Math.max(...this.topMinistries.map((m) => m.totalAmount), 0)
    },
    totalAmount() {
      return this.topMinistries.reduce(
        (sum, ministry) => sum + parseFloat(ministry.totalAmount),
        0
      )
    },
    totalSettlements() {
      return this.topMinistries.reduce(
        (sum, ministry) => sum + parseInt(ministry.settlementCount),
        0
      )
    },
    averageAmount() {
      return this.totalSettlements > 0
        ? this.totalAmount / this.totalSettlements
        : 0
    },
    availableMethods() {
      const methods = new Set()
      this.selectedSettlements.forEach((settlement) => {
        methods.add(settlement.method)
      })
      return Array.from(methods)
    },
    filteredSettlements() {
      if (!this.selectedMethodFilter) return this.selectedSettlements
      return this.selectedSettlements.filter(
        (settlement) => settlement.method === this.selectedMethodFilter
      )
    },
    currencyOptions() {
      const options = [
        { text: 'ທັງໝົດສະກຸນເງິນ (All Currencies)', value: null },
      ]
      this.currencies.forEach((currency) => {
        if (currency.isActive) {
          options.push({
            text: `${currency.name} (${currency.code})`,
            value: currency.id,
          })
        }
      })
      return options
    },
    uniqueCurrencies() {
      return this.currencyBreakdown.length || 0
    },
    totalLakAmount() {
      return this.currencyBreakdown.reduce(
        (sum, currency) => sum + (currency.lakEquivalent || 0),
        0
      )
    },
  },
  async mounted() {
    await this.loadCurrencies()
    this.setDefaultDates()
    this.loadMinistryData()
    this.$nextTick(() => {
      this.initializeChart()
    })
  },
  beforeDestroy() {
    if (this.ministryChart) {
      this.ministryChart.destroy()
    }
  },
  methods: {
    async loadCurrencies() {
      try {
        const response = await this.$axios.get('/api/currency/find')
        if (response.data.success) {
          this.currencies = response.data.data || []
        }
      } catch (error) {
        console.error('Error loading currencies:', error)
        this.currencies = [
          {
            id: 1,
            code: 'LAK',
            name: 'Lao Kip',
            isActive: true,
            isLocalCCY: true,
            rate: 1,
          },
          {
            id: 2,
            code: 'USD',
            name: 'US Dollar',
            isActive: true,
            isLocalCCY: false,
            rate: 21000,
          },
          {
            id: 3,
            code: 'THB',
            name: 'Thai Baht',
            isActive: true,
            isLocalCCY: false,
            rate: 650,
          },
        ]
      }
    },

    setDefaultDates() {
      const now = new Date()
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
      this.filters.startDate = firstDay.toISOString().substr(0, 10)
      this.filters.endDate = now.toISOString().substr(0, 10)
    },

    async loadMinistryData() {
      this.loading = true
      try {
        const params = new URLSearchParams()
        if (this.filters.startDate)
          params.append('startDate', this.filters.startDate)
        if (this.filters.endDate) params.append('endDate', this.filters.endDate)
        if (this.filters.limit) params.append('limit', this.filters.limit)
        if (this.filters.currencyId)
          params.append('currencyId', this.filters.currencyId)

        const response = await this.$axios.get(
          `/api/settlements/analytics/top-ministries?${params}`
        )
        if (response.data.success) {
          this.topMinistries = response.data.data.topMinistries || []

          await this.calculateCurrencyBreakdown()

          this.updateChart()
        }
      } catch (error) {
        console.error('Error loading ministry data:', error)
        this.$toast.error('Failed to load ministry reports')
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
        if (this.filters.limit) params.append('limit', this.filters.limit)
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
        this.currencyBreakdown = []
      }
    },

    async selectMinistry(ministryId, ministry) {
      this.loadingDetails = true
      this.settlementDialog = true
      try {
        const response = await this.$axios.get(
          `/api/settlements/by-ministry/${ministryId}`
        )
        if (response.data.success) {
          this.selectedSettlements = response.data.data.settlements
          this.settlementSummary = response.data.data.summary
          this.pagination = response.data.data.pagination || this.pagination
          this.selectedMinistry = ministry
          this.selectedMethodFilter = ''

          this.calculateMethodDistribution()
        }
      } catch (error) {
        console.error('Error loading ministry settlements:', error)
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

    filterByMethod(method) {
      this.selectedMethodFilter = method
    },

    getMethodDistribution() {
      if (this.methodDistribution.length === 0) return 'N/A'
      const mostUsed = this.methodDistribution.reduce((prev, current) =>
        prev.count > current.count ? prev : current
      )
      return this.formatMethod(mostUsed.method)
    },

    getAdvancePercentage() {
      if (this.selectedSettlements.length === 0) return 0

      const withAdvance = this.selectedSettlements.filter(
        (s) => s.moneyAdvanceId
      ).length
      return Math.round((withAdvance / this.selectedSettlements.length) * 100)
    },

    resetFilters() {
      this.filters = {
        startDate: null,
        endDate: null,
        limit: '10',
        currencyId: null,
      }
      this.setDefaultDates()
      this.loadMinistryData()
    },

    initializeChart() {
      if (this.$refs.ministryChart) {
        const ctx = this.$refs.ministryChart.getContext('2d')
        this.ministryChart = new Chart(ctx, {
          type: 'horizontalBar',
          data: {
            labels: [],
            datasets: [
              {
                label: 'ຈຳນວນເງິນ (Amount)',
                data: [],
                backgroundColor: '#01532B',
                borderColor: '#01532B',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                      return '$' + new Intl.NumberFormat('en-US').format(value)
                    },
                  },
                },
              ],
            },
            legend: {
              display: false,
            },
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  return (
                    '$' +
                    new Intl.NumberFormat('en-US').format(tooltipItem.xLabel)
                  )
                },
              },
            },
          },
        })
      }
    },

    updateChart() {
      if (!this.ministryChart || this.topMinistries.length === 0) return

      const labels = this.topMinistries
        .map((ministry) =>
          ministry.ministry.ministryName.length > 20
            ? ministry.ministry.ministryName.substring(0, 20) + '...'
            : ministry.ministry.ministryName
        )
        .slice(0, 8)

      const amounts = this.topMinistries
        .map((ministry) => parseFloat(ministry.totalAmount))
        .slice(0, 8)

      this.ministryChart.data.labels = labels
      this.ministryChart.data.datasets[0].data = amounts
      this.ministryChart.update()
    },

    closeDialog() {
      this.settlementDialog = false
      this.selectedMinistry = null
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
          `/api/settlements/analytics/top-ministries/export?${params}`,
          {
            responseType: 'blob',
          }
        )

        const blob = new Blob([response.data])
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `ministry-settlement-report-${this.filters.startDate}-${this.filters.endDate}.xlsx`
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

    showNotes(notes) {
      this.selectedNotes = notes
      this.showNotesModal = true
    },

    getMethodColor(method) {
      const colors = {
        cash: '#01532B',
        bank_transfer: '#228B22',
        deduction: '#FF8C00',
      }
      return colors[method] || '#01532B'
    },

    getCurrencyColor(currencyCode) {
      const colors = {
        LAK: '#01532B',
        USD: '#01532B',
        THB: '#01532B',
        CNY: '#666',
        EUR: '#666',
        JPY: '#666',
        GBP: '#666',
        KRW: '#666',
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
  },
}
</script>

<style scoped>
.ministry-settlement-report {
  padding: 0;
}

/* Header */
.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 20px;
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
  margin: 5px 0 0 0;
  opacity: 0.9;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.custom-btn {
  color: white !important;
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

.custom-primary-btn {
  background-color: #01532b !important;
  color: white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.custom-primary-btn:hover {
  background-color: #014025 !important;
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
  opacity: 0.8;
  margin-top: 4px !important;
}

.ministries-card {
  background: #01532b;
  color: white;
}

.amount-card {
  background: #01532b;
  color: white;
}

.settlement-card {
  background: #01532b;
  color: white;
}

.lak-card {
  background: #01532b;
  color: white;
}

/* Section Headers */
.section-header {
  background: #01532b;
  color: white;
  font-weight: 600;
}

/* Currency Breakdown */
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
  color: #01532b;
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

/* Custom Progress */
.custom-progress {
  color: #01532b !important;
}

/* Chart */
.chart-card {
  margin-bottom: 24px;
  border-radius: 8px;
}

.chart-container {
  height: 400px;
  position: relative;
}

/* Ministry Cards */
.ministries-container {
  margin-bottom: 24px;
  border-radius: 8px;
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

.section-subtitle {
  font-size: 18px;
  font-weight: 600;
  color: #01532b;
  margin: 0;
}

.progress-section {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
}

.progress-item {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.rank-chip {
  background-color: #01532b !important;
}

.ml-3 {
  margin-left: 12px;
}

.ministry-name {
  font-size: 16px;
  font-weight: 600;
  color: #01532b;
  margin: 0;
}

.ministry-code {
  font-size: 12px;
  color: #666;
  margin: 4px 0 0 0;
}

.amount-display {
  font-size: 18px;
  font-weight: 700;
  color: #01532b;
  font-family: monospace;
}

.count-display {
  font-size: 12px;
  color: #666;
  margin-top: 2px;
}

.progress-percentage {
  font-size: 11px;
  color: #666;
  text-align: right;
  margin-top: 4px;
}

.ministry-cards-grid {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
}

.ministry-card {
  height: 100%;
  cursor: pointer;
  border-radius: 8px;
}

.ministry-card:hover {
  transform: translateY(-2px);
}

.ministry-card.selected {
  border: 2px solid #01532b;
}

.ministry-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.ministry-info .rank-badge {
  margin-bottom: 8px;
}

.ministry-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #01532b;
  line-height: 1.3;
}

.ministry-code-display {
  font-size: 12px;
  color: #666;
  margin: 4px 0;
  font-family: monospace;
}

.ministry-icon {
  font-size: 24px;
  color: #01532b;
  opacity: 0.7;
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
  color: #01532b;
}

.average-value {
  color: #01532b;
}

.percentage-value {
  color: #01532b;
}

.view-details-btn {
  background-color: #01532b !important;
  color: white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.view-details-btn:hover {
  background-color: #014025 !important;
}

/* No Data State */
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

/* Dialog */
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
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  height: 100%;
  border-left: 3px solid #01532b;
}

.stat-icon {
  font-size: 20px;
  color: #01532b;
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
  font-size: 14px;
  font-weight: 600;
  font-family: monospace;
  color: #01532b;
}

.method-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  height: 100%;
  border-left: 3px solid #01532b;
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
  margin-bottom: 4px;
  color: #01532b;
}

.method-percentage {
  font-size: 12px;
  color: #999;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.custom-outline-btn {
  background-color: white !important;
  color: #01532b !important;
  border: 1px solid #01532b !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.custom-outline-btn:hover {
  background-color: #f8f9fa !important;
}

/* Table */
.settlement-table {
  background: white;
}

.settlement-table >>> thead th {
  background-color: #01532b !important;
  color: white !important;
  font-weight: 600 !important;
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
  color: #01532b;
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

.user-info .user-name {
  font-weight: 500;
  color: #01532b;
}

.chart-account-info {
  display: flex;
  flex-direction: column;
}

.account-name {
  font-weight: 500;
  font-size: 13px;
  color: #01532b;
}

.account-code {
  font-size: 10px;
  color: #666;
  margin-top: 2px;
  font-family: monospace;
}

.advance-info .advance-purpose {
  font-size: 10px;
  color: #666;
  margin-top: 2px;
}

.advance-info .advance-status {
  font-size: 9px;
  color: #999;
  margin-top: 1px;
}

.no-advance,
.no-account {
  color: #999;
  font-style: italic;
}

.action-buttons {
  display: flex;
  gap: 4px;
}

.custom-action-btn {
  background-color: #01532b !important;
  color: white !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-size: 11px !important;
}

.custom-action-btn:hover {
  background-color: #014025 !important;
}

.custom-notes-btn {
  background-color: #228b22 !important;
  color: white !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-size: 11px !important;
}

.custom-notes-btn:hover {
  background-color: #1e7d1e !important;
}

.no-filtered-data {
  text-align: center;
  padding: 24px;
  color: #666;
}

.no-filtered-data i {
  font-size: 32px;
  margin-bottom: 8px;
  color: #ccc;
}

.notes-content {
  padding: 24px;
  white-space: pre-wrap;
  line-height: 1.6;
}

/* Responsive */
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
  }

  .summary-icon {
    margin-right: 0;
    margin-bottom: 8px;
  }

  .chart-container {
    height: 300px;
  }

  .ministry-header {
    flex-direction: column;
    text-align: center;
  }

  .ministry-icon {
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

  .filter-buttons {
    justify-content: center;
  }

  .progress-item {
    padding: 12px;
  }

  .amount-display {
    font-size: 16px;
  }
}

/* Print */
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

  .report-header {
    background: #01532b !important;
    color: white !important;
    -webkit-print-color-adjust: exact;
  }
}
</style>