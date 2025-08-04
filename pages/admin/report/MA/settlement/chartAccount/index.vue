<template>
  <div class="chart-account-settlement-report">
    <!-- Enhanced Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-chart-line"></i>
          ລາຍງານຊຳລະຕາມບັນຊີຜັງບັນຊີ
        </h1>
        <p class="page-subtitle">Chart Account Settlement Report</p>
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
        ຕົວກອງ (Filters & Controls)
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
              v-model="filters.limit"
              :items="limitOptions"
              item-text="text"
              item-value="value"
              label="ຈຳນວນບັນຊີ (Top Accounts)"
              prepend-icon="mdi-format-list-numbered"
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
            <v-select
              v-model="viewMode"
              :items="viewModeOptions"
              item-text="text"
              item-value="value"
              label="ຮູບແບບການສະແດງ (View Mode)"
              prepend-icon="mdi-view-dashboard"
            ></v-select>
          </v-col>

          <v-col cols="12" md="2">
            <v-btn
              color="primary"
              @click="loadChartAccountData"
              :loading="loading"
              block
            >
              <i class="fas fa-search"></i>
              ຄົ້ນຫາ
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
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
        <v-card class="summary-card accounts-card" elevation="3">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ບັນຊີຜັງບັນຊີທີ່ໃຊ້ງານ</h3>
                <p class="summary-subtitle">Active Chart Accounts</p>
                <h2 class="summary-amount">{{ topChartAccounts.length }}</h2>
                <p class="summary-lcy">Chart Accounts</p>
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
        ກຳລັງໂຫລດຂໍ້ມູນ... Loading chart account reports...
      </p>
    </div>

    <!-- Chart View -->
    <v-card
      class="chart-card mb-4"
      elevation="2"
      v-if="viewMode === 'chart' && !loading && topChartAccounts.length > 0"
    >
      <v-card-title>
        <i class="fas fa-chart-bar"></i>
        ກາຟສະຫຼຸບຕາມບັນຊີຜັງບັນຊີ (Chart Account Settlement Distribution)
      </v-card-title>
      <v-card-text>
        <div class="chart-container">
          <canvas ref="chartAccountChart" width="400" height="200"></canvas>
        </div>
      </v-card-text>
    </v-card>

    <!-- Table View -->
    <v-card
      class="table-card mb-4"
      elevation="2"
      v-if="viewMode === 'table' && !loading"
    >
      <v-card-title class="table-title">
        <i class="fas fa-table"></i>
        ຕາຕະລາງບັນຊີຜັງບັນຊີ (Chart Accounts Table View)
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

      <v-data-table
        :headers="tableHeaders"
        :items="filteredChartAccounts"
        :search="search"
        :loading="loading"
        class="chart-account-table"
        :items-per-page="15"
        :footer-props="{
          itemsPerPageOptions: [10, 15, 25, 50],
          itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:',
        }"
      >
        <template v-slot:item.rank="{ item, index }">
          <v-chip :color="getChartColor(index)" text-color="white" small>
            {{ index + 1 }}
          </v-chip>
        </template>

        <template v-slot:item.accountCode="{ item }">
          <div class="account-code-cell">
            <span class="account-code">{{
              item.chartAccount.accountCode
            }}</span>
          </div>
        </template>

        <template v-slot:item.accountName="{ item }">
          <div class="account-name-cell">
            <span class="account-name">{{
              item.chartAccount.accountName
            }}</span>
          </div>
        </template>

        <template v-slot:item.totalAmount="{ item }">
          <span class="amount-cell total-amount">
            ${{ formatCurrency(item.totalAmount) }}
          </span>
        </template>

        <template v-slot:item.settlementCount="{ item }">
          <v-chip color="blue" text-color="white" small>
            {{ item.settlementCount }}
          </v-chip>
        </template>

        <template v-slot:item.averageAmount="{ item }">
          <span class="amount-cell average-amount">
            ${{ formatCurrency(item.totalAmount / item.settlementCount) }}
          </span>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn
            small
            color="primary"
            @click="selectChartAccount(item.chartAccountId, item.chartAccount)"
          >
            <i class="fas fa-eye"></i>
            ລາຍລະອຽດ
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Enhanced Card View (Default) -->
    <v-card
      class="cards-container"
      elevation="2"
      v-if="viewMode === 'cards' && !loading"
    >
      <v-card-title class="cards-title">
        <i class="fas fa-th-large"></i>
        ບັນຊີຜັງບັນຊີທີ່ນິຍົມໃຊ້ (Popular Chart Accounts)
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

      <v-card-text v-if="topChartAccounts.length > 0">
        <v-row>
          <v-col
            v-for="(account, index) in filteredChartAccounts"
            :key="account.chartAccountId"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card
              class="chart-account-card"
              elevation="2"
              @click="
                selectChartAccount(account.chartAccountId, account.chartAccount)
              "
              :class="{
                selected: selectedChartAccount?.id == account.chartAccountId,
              }"
            >
              <v-card-text>
                <div class="account-header">
                  <div class="account-info">
                    <div class="rank-badge">
                      <v-chip
                        :color="getChartColor(index)"
                        text-color="white"
                        small
                      >
                        #{{ index + 1 }}
                      </v-chip>
                    </div>
                    <h3 class="account-code">
                      {{ account.chartAccount.accountCode }}
                    </h3>
                    <p class="account-name">
                      {{ account.chartAccount.accountName }}
                    </p>
                  </div>
                  <div class="account-icon">
                    <i class="fas fa-chart-line"></i>
                  </div>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="account-stats">
                  <div class="stat-item">
                    <span class="stat-label">ລວມຈຳນວນເງິນ:</span>
                    <span class="stat-value amount-value">
                      ${{ formatCurrency(account.totalAmount) }}
                    </span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label">ຈຳນວນການຊຳລະ:</span>
                    <span class="stat-value count-value">
                      {{ account.settlementCount }}
                    </span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label">ຄ່າສະເລ່ຍ:</span>
                    <span class="stat-value average-value">
                      ${{
                        formatCurrency(
                          account.totalAmount / account.settlementCount
                        )
                      }}
                    </span>
                  </div>
                </div>

                <div class="progress-section mt-3">
                  <div class="progress-label">Settlement Volume</div>
                  <v-progress-linear
                    :value="(account.totalAmount / maxAmount) * 100"
                    :color="getChartColor(index)"
                    height="8"
                    rounded
                  ></v-progress-linear>
                </div>

                <div class="card-actions mt-3">
                  <v-btn
                    small
                    :color="getChartColor(index)"
                    block
                    text-color="white"
                  >
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
            <i class="fas fa-chart-line"></i>
          </div>
          <h3 class="no-data-title">ບໍ່ມີຂໍ້ມູນບັນຊີຜັງບັນຊີ</h3>
          <p class="no-data-subtitle">
            No chart account settlement data found for the selected period.
          </p>
        </div>
      </v-card-text>
    </v-card>

    <!-- Enhanced Chart Account Details Dialog -->
    <v-dialog v-model="settlementDialog" max-width="1400px" scrollable>
      <v-card v-if="selectedChartAccount">
        <v-card-title class="dialog-header">
          <i class="fas fa-chart-line"></i>
          ລາຍລະອຽດການຊຳລະ - {{ selectedChartAccount.accountCode }}
          <v-spacer></v-spacer>
          <v-btn icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <!-- Chart Account Summary -->
          <v-row class="summary-section mb-4">
            <v-col cols="12">
              <h3 class="section-title">
                ສະຫຼຸບບັນຊີຜັງບັນຊີ (Chart Account Summary)
              </h3>
              <v-divider class="mb-3"></v-divider>
            </v-col>
            <v-col cols="6" md="2">
              <div class="detail-stat">
                <div class="stat-icon">
                  <i class="fas fa-code"></i>
                </div>
                <div class="stat-info">
                  <strong>ລະຫັດບັນຊີ:</strong>
                  <p class="stat-number">
                    {{ selectedChartAccount.accountCode }}
                  </p>
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
                  <p class="stat-number">{{ getMostUsedMethod() }}</p>
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
              <v-divider class="mb-3"></v-divider>
              <div class="filter-buttons">
                <v-btn
                  :outlined="selectedMethodFilter !== ''"
                  :color="selectedMethodFilter === '' ? 'primary' : 'grey'"
                  @click="filterByMethod('')"
                  class="mr-2 mb-2"
                  small
                >
                  ທັງໝົດ (All Methods)
                </v-btn>
                <v-btn
                  v-for="method in availableMethods"
                  :key="method"
                  :outlined="selectedMethodFilter !== method"
                  :color="
                    selectedMethodFilter === method
                      ? getMethodColor(method)
                      : 'grey'
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
              <v-divider class="mb-3"></v-divider>

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
                      item.proceeder?.name || 'N/A'
                    }}</span>
                  </div>
                </template>

                <template v-slot:item.ministry="{ item }">
                  <div v-if="item.ministry" class="ministry-info">
                    <span class="ministry-name">{{ item.ministry.name }}</span>
                    <div class="ministry-code">{{ item.ministry.code }}</div>
                  </div>
                  <span v-else class="no-ministry">N/A</span>
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
                  <div class="action-buttons">
                    <v-btn
                      small
                      color="primary"
                      @click="viewSettlement(item.id)"
                      class="mr-1"
                    >
                      <i class="fas fa-eye"></i>
                      ເບິ່ງ
                    </v-btn>
                    <v-btn
                      v-if="item.notes"
                      small
                      color="green"
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
        <v-card-title class="notes-header">
          <i class="fas fa-sticky-note"></i>
          ໝາຍເຫດການຊຳລະ (Settlement Notes)
          <v-spacer></v-spacer>
          <v-btn icon @click="showNotesModal = false">
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
  name: 'ChartAccountSettlementReport',
  head() {
    return {
      title: 'Chart Account Settlement Reports',
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
      topChartAccounts: [],
      selectedChartAccount: null,
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
      viewMode: 'cards',
      selectedMethodFilter: '',
      showNotesModal: false,
      selectedNotes: '',
      chartAccountChart: null,

      limitOptions: [
        { text: 'ອັນດັບ 5 (Top 5)', value: '5' },
        { text: 'ອັນດັບ 10 (Top 10)', value: '10' },
        { text: 'ອັນດັບ 15 (Top 15)', value: '15' },
        { text: 'ອັນດັບ 20 (Top 20)', value: '20' },
      ],

      viewModeOptions: [
        { text: 'ບັດ (Card View)', value: 'cards' },
        { text: 'ຕາຕະລາງ (Table View)', value: 'table' },
        { text: 'ກາຟ (Chart View)', value: 'chart' },
      ],

      tableHeaders: [
        { text: 'ອັນດັບ', value: 'rank', width: '80px' },
        { text: 'ລະຫັດບັນຊີ', value: 'accountCode', width: '120px' },
        { text: 'ຊື່ບັນຊີ', value: 'accountName', width: '200px' },
        { text: 'ລວມຈຳນວນເງິນ', value: 'totalAmount', width: '150px' },
        { text: 'ຈຳນວນການຊຳລະ', value: 'settlementCount', width: '120px' },
        { text: 'ຄ່າສະເລ່ຍ', value: 'averageAmount', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '120px' },
      ],

      settlementHeaders: [
        { text: 'ວັນທີລົງບັນທຶກ', value: 'bookingDate', width: '120px' },
        { text: 'ສະກຸນເງິນ', value: 'currency', width: '80px' },
        { text: 'ຈຳນວນເງິນຕົ້ນ', value: 'amount', width: '130px' },
        { text: 'ອັດຕາແລກປ່ຽນ', value: 'exchangeRate', width: '100px' },
        { text: 'ເທົ່າກັບລາວກີບ', value: 'lakAmount', width: '130px' },
        { text: 'ວິທີການ', value: 'method', width: '100px' },
        { text: 'ຜູ້ດຳເນີນການ', value: 'proceeder', width: '130px' },
        { text: 'ກະຊວງ', value: 'ministry', width: '120px' },
        { text: 'ເງິນກ່ອນ', value: 'moneyAdvance', width: '100px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '120px' },
      ],
    }
  },
  computed: {
    filteredChartAccounts() {
      if (!this.search) return this.topChartAccounts
      return this.topChartAccounts.filter(
        (account) =>
          account.chartAccount?.accountCode
            ?.toLowerCase()
            .includes(this.search.toLowerCase()) ||
          account.chartAccount?.accountName
            ?.toLowerCase()
            .includes(this.search.toLowerCase())
      )
    },
    maxAmount() {
      return Math.max(...this.topChartAccounts.map((a) => a.totalAmount), 0)
    },
    totalAmount() {
      return this.topChartAccounts.reduce(
        (sum, account) => sum + parseFloat(account.totalAmount),
        0
      )
    },
    totalSettlements() {
      return this.topChartAccounts.reduce(
        (sum, account) => sum + parseInt(account.settlementCount),
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
    this.loadChartAccountData()
    this.$nextTick(() => {
      this.initializeChart()
    })
  },
  beforeDestroy() {
    if (this.chartAccountChart) {
      this.chartAccountChart.destroy()
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
        // Set default currencies if API fails
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

    async loadChartAccountData() {
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
          `/api/settlements/analytics/top-chart-accounts?${params}`
        )
        if (response.data.success) {
          this.topChartAccounts = response.data.data.topChartAccounts || []

          // Calculate currency breakdown
          await this.calculateCurrencyBreakdown()

          this.updateChart()
        }
      } catch (error) {
        console.error('Error loading chart account data:', error)
        this.$toast.error('Failed to load chart account reports')
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
        // Fallback: create empty breakdown if API fails
        this.currencyBreakdown = []
      }
    },

    async selectChartAccount(chartAccountId, chartAccount) {
      this.loadingDetails = true
      this.settlementDialog = true
      try {
        const response = await this.$axios.get(
          `/api/settlements/by-chart-account/${chartAccountId}`
        )
        if (response.data.success) {
          this.selectedSettlements = response.data.data.settlements
          this.settlementSummary = response.data.data.summary
          this.pagination = response.data.data.pagination || this.pagination
          this.selectedChartAccount = chartAccount
          this.selectedMethodFilter = ''

          // Calculate method distribution
          this.calculateMethodDistribution()
        }
      } catch (error) {
        console.error('Error loading chart account settlements:', error)
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

    getMostUsedMethod() {
      if (this.selectedSettlements.length === 0) return 'N/A'

      const methodCounts = {}
      this.selectedSettlements.forEach((settlement) => {
        methodCounts[settlement.method] =
          (methodCounts[settlement.method] || 0) + 1
      })

      const mostUsed = Object.keys(methodCounts).reduce((a, b) =>
        methodCounts[a] > methodCounts[b] ? a : b
      )

      return this.formatMethod(mostUsed)
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
      this.viewMode = 'cards'
      this.setDefaultDates()
      this.loadChartAccountData()
    },

    initializeChart() {
      if (this.$refs.chartAccountChart) {
        const ctx = this.$refs.chartAccountChart.getContext('2d')
        this.chartAccountChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: [],
            datasets: [
              {
                data: [],
                backgroundColor: [],
                borderWidth: 2,
                borderColor: '#fff',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: 'bottom',
            },
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  const dataset = data.datasets[tooltipItem.datasetIndex]
                  const total = dataset.data.reduce((a, b) => a + b, 0)
                  const currentValue = dataset.data[tooltipItem.index]
                  const percentage = Math.round((currentValue / total) * 100)
                  return (
                    data.labels[tooltipItem.index] +
                    ': $' +
                    new Intl.NumberFormat('en-US').format(currentValue) +
                    ' (' +
                    percentage +
                    '%)'
                  )
                },
              },
            },
          },
        })
      }
    },

    updateChart() {
      if (!this.chartAccountChart || this.topChartAccounts.length === 0) return

      const labels = this.topChartAccounts
        .map((account) => account.chartAccount.accountCode)
        .slice(0, 8) // Limit to top 8 for readability

      const amounts = this.topChartAccounts
        .map((account) => parseFloat(account.totalAmount))
        .slice(0, 8)

      const colors = labels.map((_, index) => this.getChartColor(index))

      this.chartAccountChart.data.labels = labels
      this.chartAccountChart.data.datasets[0].data = amounts
      this.chartAccountChart.data.datasets[0].backgroundColor = colors
      this.chartAccountChart.update()
    },

    closeDialog() {
      this.settlementDialog = false
      this.selectedChartAccount = null
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
          `/api/settlements/analytics/top-chart-accounts/export?${params}`,
          {
            responseType: 'blob',
          }
        )

        const blob = new Blob([response.data])
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `chart-account-settlement-report-${this.filters.startDate}-${this.filters.endDate}.xlsx`
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

    getChartColor(index) {
      const colors = [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#EF4444',
        '#8B5CF6',
        '#06B6D4',
        '#84CC16',
        '#F97316',
        '#EC4899',
        '#6B7280',
        '#1F2937',
        '#059669',
        '#DC2626',
        '#7C3AED',
        '#0891B2',
      ]
      return colors[index % colors.length]
    },

    getMethodColor(method) {
      const colors = {
        cash: 'green',
        bank_transfer: 'blue',
        deduction: 'orange',
      }
      return colors[method] || 'grey'
    },

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
.chart-account-settlement-report {
  padding: 0;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 20px;
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
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

.accounts-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #333;
}

.amount-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: white;
}

.settlement-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: white;
}

.lak-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
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

.table-card,
.cards-container {
  margin-bottom: 24px;
}

.table-title,
.cards-title {
  background: #f8f9fa;
  color: #495057;
  font-weight: 600;
}

.search-field {
  max-width: 300px;
}

.chart-account-card {
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
}

.chart-account-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

.chart-account-card.selected {
  border: 2px solid #8b5cf6;
}

.account-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.account-info .rank-badge {
  margin-bottom: 8px;
}

.account-info h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.account-code {
  font-family: monospace;
  font-size: 16px;
  font-weight: 700;
  color: #1976d2;
}

.account-name {
  font-size: 12px;
  color: #666;
  margin: 4px 0;
  line-height: 1.3;
}

.account-icon {
  font-size: 24px;
  color: #8b5cf6;
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

.chart-account-table {
  background: white;
}

.account-code-cell .account-code {
  font-family: monospace;
  font-weight: 700;
  color: #1976d2;
  font-size: 14px;
}

.account-name-cell .account-name {
  font-size: 13px;
  color: #333;
}

.amount-cell {
  font-family: monospace;
  font-weight: 600;
}

.total-amount {
  color: #4caf50;
  font-size: 14px;
}

.average-amount {
  color: #ff9800;
}

.dialog-header {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
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
  color: #8b5cf6;
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
  height: 100%;
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

.ministry-info {
  display: flex;
  flex-direction: column;
}

.ministry-name {
  font-weight: 500;
  font-size: 13px;
}

.ministry-code {
  font-size: 10px;
  color: #666;
  margin-top: 2px;
}

.advance-info .advance-status {
  font-size: 10px;
  color: #666;
  margin-top: 2px;
}

.no-advance,
.no-ministry {
  color: #999;
  font-style: italic;
}

.action-buttons {
  display: flex;
  gap: 4px;
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

.notes-header {
  background: linear-gradient(135deg, #4caf50 0%, #2196f3 100%);
  color: white;
}

.notes-content {
  padding: 24px;
  white-space: pre-wrap;
  line-height: 1.6;
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

  .account-header {
    flex-direction: column;
    text-align: center;
  }

  .account-icon {
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
}
</style>