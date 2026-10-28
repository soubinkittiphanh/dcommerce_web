<template>
  <div class="sale-commission-report-page">
    <!-- Header Section -->
    <div class="d-flex flex-wrap align-center justify-space-between mb-4 pb-2 border-bottom">
      <div class="d-flex align-center">
        <v-avatar color="primary lighten-5" size="48" rounded="lg" class="mr-3 elevation-1">
          <v-icon color="primary" size="28">mdi-cash-multiple</v-icon>
        </v-avatar>
        <div>
          <div class="d-flex align-center">
            <h1 class="text-h6 font-weight-bold grey--text text--darken-4 mb-0 mr-2">
              ລາຍງານຄ່ານາຍໜ້າການຂາຍ
            </h1>
            <v-chip x-small color="primary lighten-5" class="primary--text font-weight-bold">
              Sales Commission
            </v-chip>
          </div>
          <p class="text-caption grey--text text--darken-1 mb-0">
            ສະຫຼຸບຍອດຄ່ານາຍໜ້າຕາມຜູ້ຂາຍ, ສິນຄ້າ ແລະ ລາຍລະອຽດບິນຂາຍທັງໝົດ
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="d-flex align-center gap-2 mt-2 mt-sm-0 flex-wrap">
        <!-- Export to Excel -->
        <v-btn
          color="success"
          depressed
          class="rounded-lg font-weight-bold text-none px-3"
          :loading="exportingExcel"
          @click="exportToExcel"
        >
          <v-icon left small>mdi-microsoft-excel</v-icon>
          Export Excel
        </v-btn>

        <!-- Print Menu -->
        <v-menu offset-y transition="scale-transition">
          <template #activator="{ on, attrs }">
            <v-btn
              color="primary"
              outlined
              class="rounded-lg font-weight-bold text-none px-3"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-printer</v-icon>
              ພິມລາຍງານ
              <v-icon right small>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list dense class="rounded-lg elevation-4 py-1">
            <v-list-item @click="printReport('current')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="primary">mdi-printer</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="caption font-weight-bold">
                ພິມຕາມໜ້າປັດຈຸບັນ ({{ currentTabName }}) - A4
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="printReport('all')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="teal">mdi-file-document-multiple-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="caption font-weight-bold">
                ພິມລາຍງານຄົບຊຸດ (Full Report) - A4
              </v-list-item-title>
            </v-list-item>
            <v-divider class="my-1"></v-divider>
            <v-list-item @click="printReport('thermal')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="orange darken-2">mdi-receipt</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="caption font-weight-bold">
                ພິມສະຫຼຸບ 80mm (POS Slip)
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Refresh Button -->
        <v-btn
          icon
          outlined
          color="grey darken-2"
          class="rounded-lg"
          title="ໂຫຼດຂໍ້ມູນໃໝ່"
          :loading="loading"
          @click="loadReportData"
        >
          <v-icon small>mdi-refresh</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Quick Date Presets & Filter Card -->
    <v-card class="rounded-xl elevation-1 border-light mb-4 pa-4 bg-white">
      <!-- Preset Filter Pills -->
      <div class="d-flex align-center justify-space-between flex-wrap gap-2 mb-3">
        <div class="d-flex align-center flex-wrap gap-1">
          <span class="text-caption grey--text text--darken-2 font-weight-bold mr-2">
            <v-icon x-small color="grey darken-1" class="mr-1">mdi-clock-outline</v-icon>
            ໄລຍະເວລາໄວ:
          </span>
          <v-chip
            v-for="preset in datePresets"
            :key="preset.id"
            small
            :color="activePreset === preset.id ? 'primary' : 'grey lighten-4'"
            :text-color="activePreset === preset.id ? 'white' : 'grey darken-3'"
            class="font-weight-medium cursor-pointer px-3"
            @click="applyDatePreset(preset.id)"
          >
            {{ preset.label }}
          </v-chip>
        </div>

        <!-- Reset Button -->
        <v-btn
          text
          small
          color="grey darken-2"
          class="caption font-weight-bold text-none px-2"
          @click="resetFilters"
        >
          <v-icon left x-small>mdi-backup-restore</v-icon>
          ຣີເຊັດຕົວກັ່ນຕອງ (Reset)
        </v-btn>
      </div>

      <v-divider class="mb-3"></v-divider>

      <!-- Main Filters Row -->
      <v-row dense align="center">
        <!-- Start Date -->
        <v-col cols="12" sm="6" md="3">
          <v-menu
            v-model="menuDateFrom"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="filters.startDate"
                label="ຈາກວັນທີ (Start Date)"
                dense
                outlined
                hide-details
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                class="rounded-lg custom-field"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="filters.startDate"
              no-title
              color="primary"
              @input="menuDateFrom = false; onFilterChanged()"
            />
          </v-menu>
        </v-col>

        <!-- End Date -->
        <v-col cols="12" sm="6" md="3">
          <v-menu
            v-model="menuDateTo"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="filters.endDate"
                label="ຫາວັນທີ (End Date)"
                dense
                outlined
                hide-details
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                class="rounded-lg custom-field"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="filters.endDate"
              no-title
              color="primary"
              @input="menuDateTo = false; onFilterChanged()"
            />
          </v-menu>
        </v-col>

        <!-- Salesperson Filter -->
        <v-col cols="12" sm="6" md="3">
          <v-autocomplete
            v-model="filters.userId"
            :items="userOptions"
            :item-text="getUserDisplayName"
            item-value="id"
            label="ຜູ້ຂາຍ (Salesperson)"
            dense
            outlined
            clearable
            hide-details
            prepend-inner-icon="mdi-account-outline"
            class="rounded-lg custom-field"
            @change="loadReportData"
          />
        </v-col>

        <!-- Toggle Advanced Filters / Search -->
        <v-col cols="12" sm="6" md="3" class="d-flex align-center gap-2">
          <v-btn
            color="primary"
            dark
            depressed
            class="rounded-lg font-weight-bold flex-grow-1 text-none"
            :loading="loading"
            @click="loadReportData"
          >
            <v-icon left small>mdi-magnify</v-icon>
            ຄົ້ນຫາ
          </v-btn>

          <v-btn
            outlined
            color="primary"
            class="rounded-lg text-none px-2"
            :class="{ 'primary lighten-5': showMoreFilters }"
            title="ຕົວກັ່ນຕອງເພີ່ມເຕີມ"
            @click="showMoreFilters = !showMoreFilters"
          >
            <v-icon small class="mr-1">mdi-filter-variant</v-icon>
            <span class="caption font-weight-bold">{{ showMoreFilters ? 'ຫຍໍ້' : 'ເພີ່ມເຕີມ' }}</span>
          </v-btn>
        </v-col>
      </v-row>

      <!-- Advanced Collapsible Filters -->
      <v-expand-transition>
        <div v-show="showMoreFilters" class="mt-3 pt-3 border-top">
          <v-row dense align="center">
            <!-- Product Filter -->
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                v-model="filters.productId"
                :items="productOptions"
                item-text="pro_name"
                item-value="id"
                label="ສິນຄ້າ (Product)"
                dense
                outlined
                clearable
                hide-details
                prepend-inner-icon="mdi-package-variant"
                class="rounded-lg custom-field"
                @change="loadReportData"
              />
            </v-col>

            <!-- Category Filter -->
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                v-model="filters.categoryId"
                :items="categoryOptions"
                item-text="categ_name"
                item-value="categ_id"
                label="ໝວດໝູ່ (Category)"
                dense
                outlined
                clearable
                hide-details
                prepend-inner-icon="mdi-tag-outline"
                class="rounded-lg custom-field"
                @change="loadReportData"
              />
            </v-col>

            <!-- Currency Filter -->
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                v-model="filters.currencyId"
                :items="currencyList"
                item-text="code"
                item-value="id"
                label="ສະກຸນເງິນ (Currency)"
                dense
                outlined
                clearable
                hide-details
                prepend-inner-icon="mdi-cash"
                class="rounded-lg custom-field"
                @change="loadReportData"
              />
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>

      <!-- Active Filter Chips Indicator -->
      <div v-if="hasActiveFilters" class="d-flex align-center flex-wrap gap-2 mt-3 pt-2 border-top">
        <span class="text-caption grey--text text--darken-1 font-weight-bold">ກຳລັງກັ່ນຕອງ:</span>

        <v-chip
          v-if="filters.userId"
          small
          close
          color="primary lighten-5"
          class="primary--text font-weight-bold"
          @click:close="clearStaffFilter"
        >
          <v-icon left x-small color="primary">mdi-account</v-icon>
          ຜູ້ຂາຍ: {{ getActiveStaffName() }}
        </v-chip>

        <v-chip
          v-if="filters.productId"
          small
          close
          color="teal lighten-5"
          class="teal--text text--darken-3 font-weight-bold"
          @click:close="clearProductFilter"
        >
          <v-icon left x-small color="teal">mdi-package-variant</v-icon>
          ສິນຄ້າ: {{ getActiveProductName() }}
        </v-chip>

        <v-chip
          v-if="filters.categoryId"
          small
          close
          color="amber lighten-5"
          class="amber--text text--darken-4 font-weight-bold"
          @click:close="clearCategoryFilter"
        >
          <v-icon left x-small color="amber darken-3">mdi-tag</v-icon>
          ໝວດໝູ່: {{ getActiveCategoryName() }}
        </v-chip>

        <v-chip
          v-if="filters.currencyId"
          small
          close
          color="indigo lighten-5"
          class="indigo--text font-weight-bold"
          @click:close="clearCurrencyFilter"
        >
          <v-icon left x-small color="indigo">mdi-cash</v-icon>
          ສະກຸນເງິນ: {{ getActiveCurrencyCode() }}
        </v-chip>
      </div>
    </v-card>

    <!-- Balanced KPI Metric Cards Section -->
    <v-row class="mb-4" dense>
      <!-- Card 1: Total Base Commission -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card stat-card--primary rounded-xl elevation-1 pa-4 h-100">
          <div class="d-flex align-center justify-space-between mb-2">
            <span class="text-caption font-weight-bold text-uppercase opacity-90 white--text">
              ຍອດຄ່ານາຍໜ້າລວມ
            </span>
            <v-chip x-small color="white" class="primary--text font-weight-black">
              {{ localCurrencyCode }}
            </v-chip>
          </div>
          <div class="d-flex align-baseline mb-1">
            <span class="text-h4 font-weight-black white--text mr-1">
              {{ formatNumber(summary.totalCommissionBase) }}
            </span>
            <span class="text-subtitle-2 white--text opacity-80">{{ localCurrencySymbol }}</span>
          </div>
          <div class="text-caption white--text opacity-80">
            ມູນຄ່າແປງຕາມອັດຕາແລກປ່ຽນພື້ນຖານ
          </div>
        </v-card>
      </v-col>

      <!-- Card 2: Multi-Currency Breakdown -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card rounded-xl elevation-1 border-light pa-4 h-100 bg-white">
          <div class="d-flex align-center justify-space-between mb-2">
            <span class="text-caption font-weight-bold text-uppercase grey--text text--darken-2">
              ແຍກຕາມສະກຸນເງິນຕົວຈິງ
            </span>
            <v-avatar size="28" color="indigo lighten-5">
              <v-icon x-small color="indigo">mdi-currency-usd</v-icon>
            </v-avatar>
          </div>
          <div v-if="summary.currencyTotals && summary.currencyTotals.length > 0" class="d-flex flex-wrap gap-1 mt-1">
            <div
              v-for="ccy in summary.currencyTotals"
              :key="ccy.currencyId"
              class="currency-badge d-flex align-center px-2 py-1 rounded-lg"
            >
              <span class="font-weight-bold text-caption mr-1">{{ ccy.code }}:</span>
              <span class="font-weight-black text-body-2 primary--text">{{ formatNumber(ccy.totalCommissionAmount) }}</span>
            </div>
          </div>
          <div v-else class="text-caption grey--text pt-2">
            ບໍ່ມີຂໍ້ມູນຄ່ານາຍໜ້າ
          </div>
        </v-card>
      </v-col>

      <!-- Card 3: Total Commission Orders -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card rounded-xl elevation-1 border-light pa-4 h-100 bg-white">
          <div class="d-flex align-center justify-space-between mb-2">
            <span class="text-caption font-weight-bold text-uppercase grey--text text--darken-2">
              ຈຳນວນບິນຂາຍ
            </span>
            <v-avatar size="28" color="amber lighten-5">
              <v-icon x-small color="amber darken-3">mdi-receipt-text-outline</v-icon>
            </v-avatar>
          </div>
          <div class="d-flex align-baseline mb-1">
            <span class="text-h4 font-weight-black grey--text text--darken-4 mr-1">
              {{ formatNumber(summary.totalOrdersCount) }}
            </span>
            <span class="text-caption grey--text text--darken-1">ບິນ</span>
          </div>
          <div class="text-caption grey--text">
            ບິນທີ່ມີລາຍການຄ່ານາຍໜ້າ
          </div>
        </v-card>
      </v-col>

      <!-- Card 4: Total Commission Items Sold -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card rounded-xl elevation-1 border-light pa-4 h-100 bg-white">
          <div class="d-flex align-center justify-space-between mb-2">
            <span class="text-caption font-weight-bold text-uppercase grey--text text--darken-2">
              ສິນຄ້າທີ່ໄດ້ຄ່ານາຍໜ້າ
            </span>
            <v-avatar size="28" color="teal lighten-5">
              <v-icon x-small color="teal">mdi-package-variant-closed</v-icon>
            </v-avatar>
          </div>
          <div class="d-flex align-baseline mb-1">
            <span class="text-h4 font-weight-black grey--text text--darken-4 mr-1">
              {{ formatNumber(summary.totalItemsSold) }}
            </span>
            <span class="text-caption grey--text text--darken-1">ຊິ້ນ / ໜ່ວຍ</span>
          </div>
          <div class="text-caption grey--text">
            ລວມ {{ reportLines.length }} ລາຍການຂາຍ
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Main Tabs & Clean Data View -->
    <v-card class="rounded-xl elevation-1 border-light overflow-hidden bg-white mb-6">
      <!-- Tabs Bar -->
      <v-tabs v-model="activeTab" background-color="grey lighten-5" color="primary" class="px-2 border-bottom">
        <!-- TAB 0: By Salesperson (High-level summary first) -->
        <v-tab class="text-none font-weight-bold py-3">
          <v-icon left small>mdi-account-group-outline</v-icon>
          ສະຫຼຸບຕາມຜູ້ຂາຍ (By Salesperson)
          <v-chip x-small class="ml-2 font-weight-bold primary--text" color="primary lighten-5">
            {{ byUserList.length }}
          </v-chip>
        </v-tab>

        <!-- TAB 1: By Product -->
        <v-tab class="text-none font-weight-bold py-3">
          <v-icon left small>mdi-cube-outline</v-icon>
          ສະຫຼຸບຕາມສິນຄ້າ (By Product)
          <v-chip x-small class="ml-2 font-weight-bold primary--text" color="primary lighten-5">
            {{ byProductList.length }}
          </v-chip>
        </v-tab>

        <!-- TAB 2: Detailed Transactions -->
        <v-tab class="text-none font-weight-bold py-3">
          <v-icon left small>mdi-format-list-bulleted</v-icon>
          ລາຍການທຸລະກຳ (Transactions Detail)
          <v-chip x-small class="ml-2 font-weight-bold primary--text" color="primary lighten-5">
            {{ reportLines.length }}
          </v-chip>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="activeTab">
        <!-- ========================================== -->
        <!-- TAB 0: Grouped by Salesperson (Easy & Simple) -->
        <!-- ========================================== -->
        <v-tab-item>
          <div class="pa-4">
            <v-row dense align="center" class="mb-3">
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="userTableSearch"
                  prepend-inner-icon="mdi-magnify"
                  label="ຄົ້ນຫາຊື່ຜູ້ຂາຍ..."
                  dense
                  outlined
                  clearable
                  hide-details
                  class="rounded-lg custom-field"
                />
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="auto" class="caption grey--text text--darken-1">
                ສະແດງທັງໝົດ <strong>{{ byUserList.length }}</strong> ຄົນ
              </v-col>
            </v-row>

            <v-data-table
              :headers="byUserHeaders"
              :items="byUserList"
              :search="userTableSearch"
              :loading="loading"
              class="elevation-0 border-light rounded-lg custom-table"
              :items-per-page="15"
              :footer-props="{
                'items-per-page-options': [10, 15, 30, 50],
                'items-per-page-text': 'ແຖວຕໍ່ໜ້າ:'
              }"
            >
              <!-- Salesperson Name & Avatar -->
              <template #item.userName="{ item }">
                <div class="d-flex align-center py-2">
                  <v-avatar size="36" color="primary lighten-5" class="mr-3 primary--text font-weight-black elevation-1">
                    {{ (item.userName || 'S').charAt(0).toUpperCase() }}
                  </v-avatar>
                  <div>
                    <div class="body-2 font-weight-bold grey--text text--darken-3">{{ item.userName }}</div>
                    <div class="caption grey--text">Staff ID: #{{ item.userId }}</div>
                  </div>
                </div>
              </template>

              <!-- Total Orders -->
              <template #item.totalOrders="{ item }">
                <div class="text-center font-weight-bold grey--text text--darken-3">
                  {{ formatNumber(item.totalOrders) }}
                  <span class="caption grey--text">ບິນ</span>
                </div>
              </template>

              <!-- Total Items Sold -->
              <template #item.totalQuantity="{ item }">
                <div class="text-center font-weight-bold grey--text text--darken-3">
                  {{ formatNumber(item.totalQuantity) }}
                  <span class="caption grey--text">ຊິ້ນ</span>
                </div>
              </template>

              <!-- Currencies Breakdown -->
              <template #item.currencies="{ item }">
                <div class="d-flex flex-wrap gap-1 justify-center py-1">
                  <v-chip
                    v-for="(amount, ccyCode) in item.currencies"
                    :key="ccyCode"
                    x-small
                    color="primary lighten-5"
                    class="font-weight-bold px-2 primary--text"
                  >
                    {{ ccyCode }}: {{ formatNumber(amount) }}
                  </v-chip>
                </div>
              </template>

              <!-- Total Base Commission -->
              <template #item.totalCommissionBaseAmount="{ item }">
                <div class="text-right">
                  <span class="primary--text font-weight-black text-subtitle-1">
                    {{ formatNumber(item.totalCommissionBaseAmount) }}
                  </span>
                  <span class="caption grey--text ml-1">{{ localCurrencyCode }}</span>
                </div>
              </template>

              <!-- Quick Drill-Down Action -->
              <template #item.actions="{ item }">
                <v-btn
                  small
                  outlined
                  color="primary"
                  class="rounded-lg text-none px-2 font-weight-bold"
                  @click="drillDownToStaff(item.userId)"
                >
                  <v-icon left x-small>mdi-format-list-bulleted</v-icon>
                  ເບິ່ງລາຍການ
                </v-btn>
              </template>

              <!-- Empty State -->
              <template #no-data>
                <div class="text-center py-6">
                  <v-icon size="40" color="grey lighten-1" class="mb-2">mdi-account-off-outline</v-icon>
                  <p class="body-2 grey--text text--darken-1 mb-1">ບໍ່ພົບຂໍ້ມູນຄ່ານາຍໜ້າຂອງຜູ້ຂາຍໃນຊ່ວງເວລານີ້</p>
                  <span class="caption grey--text">ລອງເລືອກຊ່ວງວັນທີອື່ນ ຫຼື ກົດຣີເຊັດຕົວກັ່ນຕອງ</span>
                </div>
              </template>
            </v-data-table>
          </div>
        </v-tab-item>

        <!-- ========================================== -->
        <!-- TAB 1: Grouped by Product -->
        <!-- ========================================== -->
        <v-tab-item>
          <div class="pa-4">
            <v-row dense align="center" class="mb-3">
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="productTableSearch"
                  prepend-inner-icon="mdi-magnify"
                  label="ຄົ້ນຫາຊື່ສິນຄ້າ, ລະຫັດ SKU..."
                  dense
                  outlined
                  clearable
                  hide-details
                  class="rounded-lg custom-field"
                />
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="auto" class="caption grey--text text--darken-1">
                ສະແດງທັງໝົດ <strong>{{ byProductList.length }}</strong> ລາຍການ
              </v-col>
            </v-row>

            <v-data-table
              :headers="byProductHeaders"
              :items="byProductList"
              :search="productTableSearch"
              :loading="loading"
              class="elevation-0 border-light rounded-lg custom-table"
              :items-per-page="15"
              :footer-props="{
                'items-per-page-options': [10, 15, 30, 50],
                'items-per-page-text': 'ແຖວຕໍ່ໜ້າ:'
              }"
            >
              <!-- Product Info -->
              <template #item.productName="{ item }">
                <div class="d-flex flex-column py-1">
                  <span class="font-weight-bold body-2 grey--text text--darken-3">{{ item.productName }}</span>
                  <div class="d-flex align-center gap-1 caption grey--text">
                    <span v-if="item.productCode">SKU: {{ item.productCode }}</span>
                    <span v-if="item.barCode" class="ml-1">| Bar: {{ item.barCode }}</span>
                  </div>
                </div>
              </template>

              <!-- Category -->
              <template #item.categoryName="{ item }">
                <v-chip v-if="item.categoryName" x-small color="grey lighten-3" class="font-weight-medium">
                  {{ item.categoryName }}
                </v-chip>
                <span v-else class="caption grey--text">-</span>
              </template>

              <!-- Total Qty Sold -->
              <template #item.totalQuantity="{ item }">
                <div class="text-center font-weight-bold grey--text text--darken-3">
                  {{ formatNumber(item.totalQuantity) }}
                </div>
              </template>

              <!-- Total Sales -->
              <template #item.totalSalesAmount="{ item }">
                <div class="text-right font-weight-medium">
                  {{ formatNumber(item.totalSalesAmount) }}
                  <span class="caption grey--text ml-1">{{ item.currencyCode }}</span>
                </div>
              </template>

              <!-- Commission Rate -->
              <template #item.commissionRate="{ item }">
                <div class="text-center">
                  <v-chip x-small color="primary lighten-5" class="font-weight-bold primary--text">
                    <span v-if="item.commissionType === 'percentage'">{{ item.commissionRate }}%</span>
                    <span v-else>{{ formatNumber(item.commissionRate) }} {{ item.currencyCode }}/ໜ່ວຍ</span>
                  </v-chip>
                </div>
              </template>

              <!-- Total Commission Amount -->
              <template #item.totalCommissionAmount="{ item }">
                <div class="text-right">
                  <span class="primary--text font-weight-black">{{ formatNumber(item.totalCommissionAmount) }}</span>
                  <span class="caption primary--text ml-1">{{ item.currencyCode }}</span>
                </div>
              </template>

              <!-- Total Base Amount -->
              <template #item.totalCommissionBaseAmount="{ item }">
                <div class="text-right font-weight-bold grey--text text--darken-3">
                  {{ formatNumber(item.totalCommissionBaseAmount) }}
                  <span class="caption grey--text ml-1">{{ localCurrencyCode }}</span>
                </div>
              </template>

              <!-- Order Count & Action -->
              <template #item.actions="{ item }">
                <v-btn
                  small
                  outlined
                  color="teal"
                  class="rounded-lg text-none px-2 font-weight-bold"
                  @click="drillDownToProduct(item.productId)"
                >
                  <v-icon left x-small>mdi-format-list-bulleted</v-icon>
                  ເບິ່ງລາຍການ
                </v-btn>
              </template>

              <!-- Empty State -->
              <template #no-data>
                <div class="text-center py-6">
                  <v-icon size="40" color="grey lighten-1" class="mb-2">mdi-package-variant-closed-remove</v-icon>
                  <p class="body-2 grey--text text--darken-1 mb-1">ບໍ່ພົບຂໍ້ມູນຄ່ານາຍໜ້າຕາມສິນຄ້າໃນຊ່ວງເວລານີ້</p>
                  <span class="caption grey--text">ລອງເລືອກຊ່ວງວັນທີອື່ນ ຫຼື ກົດຣີເຊັດຕົວກັ່ນຕອງ</span>
                </div>
              </template>
            </v-data-table>
          </div>
        </v-tab-item>

        <!-- ========================================== -->
        <!-- TAB 2: Streamlined Detailed Transactions -->
        <!-- ========================================== -->
        <v-tab-item>
          <div class="pa-4">
            <!-- Active Drill-Down Banner if filtered -->
            <v-alert
              v-if="filters.userId || filters.productId"
              dense
              text
              color="primary"
              class="rounded-lg mb-3 d-flex align-center justify-space-between"
            >
              <div class="d-flex align-center">
                <v-icon small color="primary" class="mr-2">mdi-filter-check</v-icon>
                <span class="caption font-weight-bold">
                  ກຳລັງສະແດງສະເພາະ:
                  <strong v-if="filters.userId">{{ getActiveStaffName() }}</strong>
                  <strong v-if="filters.userId && filters.productId"> | </strong>
                  <strong v-if="filters.productId">{{ getActiveProductName() }}</strong>
                </span>
              </div>
              <v-btn text x-small color="primary" class="font-weight-bold" @click="clearDrillDownFilters">
                ສະແດງທັງໝົດ (Show All)
              </v-btn>
            </v-alert>

            <!-- Search Bar & Summary -->
            <v-row dense align="center" class="mb-3">
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="lineTableSearch"
                  prepend-inner-icon="mdi-magnify"
                  label="ຄົ້ນຫາ (ເລກບິນ, ສິນຄ້າ, ຜູ້ຂາຍ, ລູກຄ້າ)..."
                  dense
                  outlined
                  clearable
                  hide-details
                  class="rounded-lg custom-field"
                />
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="auto" class="caption grey--text text--darken-1">
                ສະແດງທັງໝົດ <strong>{{ reportLines.length }}</strong> ລາຍການ
              </v-col>
            </v-row>

            <v-data-table
              :headers="lineHeaders"
              :items="reportLines"
              :search="lineTableSearch"
              :loading="loading"
              class="elevation-0 border-light rounded-lg custom-table"
              :items-per-page="20"
              :footer-props="{
                'items-per-page-options': [10, 20, 50, 100],
                'items-per-page-text': 'ແຖວຕໍ່ໜ້າ:'
              }"
            >
              <!-- Date & Bill Combined Column -->
              <template #item.orderInfo="{ item }">
                <div class="d-flex flex-column py-1">
                  <span class="caption font-weight-bold grey--text text--darken-3">
                    {{ formatDate(item.bookingDate) }}
                  </span>
                  <div class="d-flex align-center mt-1">
                    <a
                      class="primary--text font-weight-bold caption text-decoration-none cursor-pointer"
                      title="ກົດເພື່ອເບິ່ງບິນຂາຍ"
                      @click="viewOrder(item.saleHeaderId)"
                    >
                      #{{ item.saleHeaderId }}
                    </a>
                    <span v-if="item.referenceNo" class="caption grey--text ml-1">({{ item.referenceNo }})</span>
                  </div>
                </div>
              </template>

              <!-- Salesperson -->
              <template #item.userName="{ item }">
                <div class="d-flex align-center py-1">
                  <v-avatar size="26" color="primary lighten-5" class="mr-2 primary--text font-weight-bold text-caption">
                    {{ (item.userName || 'S').charAt(0).toUpperCase() }}
                  </v-avatar>
                  <span class="body-2 font-weight-medium grey--text text--darken-3">{{ item.userName || 'Staff' }}</span>
                </div>
              </template>

              <!-- Product Info -->
              <template #item.productName="{ item }">
                <div class="d-flex flex-column py-1">
                  <span class="font-weight-bold body-2 grey--text text--darken-3">{{ item.productName }}</span>
                  <div class="d-flex align-center gap-1 caption grey--text">
                    <span v-if="item.productCode">SKU: {{ item.productCode }}</span>
                    <v-chip v-if="item.categoryName" x-small color="grey lighten-3" class="grey--text text--darken-3 font-weight-medium">
                      {{ item.categoryName }}
                    </v-chip>
                  </div>
                </div>
              </template>

              <!-- Quantity -->
              <template #item.quantity="{ item }">
                <div class="text-center font-weight-bold grey--text text--darken-4">
                  {{ formatNumber(item.quantity) }}
                </div>
              </template>

              <!-- Price & Total -->
              <template #item.priceAndTotal="{ item }">
                <div class="text-right py-1">
                  <div class="font-weight-bold body-2 grey--text text--darken-3">
                    {{ formatNumber(item.lineTotal) }}
                    <span class="caption grey--text">{{ item.saleCurrencyCode }}</span>
                  </div>
                  <div class="caption grey--text">
                    @{{ formatNumber(item.unitPrice) }}
                  </div>
                </div>
              </template>

              <!-- Commission Rate -->
              <template #item.commissionRate="{ item }">
                <div class="text-center">
                  <v-chip x-small color="primary lighten-5" class="font-weight-bold primary--text">
                    <template v-if="item.commissionType === 'percentage'">
                      <v-icon x-small left color="primary">mdi-percent</v-icon>
                      {{ item.commissionRate }}%
                    </template>
                    <template v-else>
                      <v-icon x-small left color="primary">mdi-cash</v-icon>
                      {{ formatNumber(item.commissionRate) }} / ໜ່ວຍ
                    </template>
                  </v-chip>
                </div>
              </template>

              <!-- Commission Amount (Original & Converted Base + Discount Deduction) -->
              <template #item.commissionDisplay="{ item }">
                <div class="text-right py-1">
                  <div class="primary--text font-weight-black body-2">
                    {{ formatNumber(item.commissionAmount) }}
                    <span class="caption primary--text font-weight-bold">{{ item.commissionCurrencyCode }}</span>
                  </div>
                  <!-- Discount Deduction Indicator if impacted -->
                  <div
                    v-if="item.commissionDiscountDeduction && Number(item.commissionDiscountDeduction) > 0"
                    class="caption orange--text text--darken-3 font-weight-bold d-flex align-center justify-end"
                    :title="`ຄ່ານາຍໜ້າເຕັມ ${formatNumber(item.commissionGrossAmount)} ${item.commissionCurrencyCode} - ຫັກສ່ວນຫຼຸດ ${formatNumber(item.commissionDiscountDeduction)}`"
                  >
                    <v-icon x-small color="orange darken-3" class="mr-1">mdi-tag-minus</v-icon>
                    -{{ formatNumber(item.commissionDiscountDeduction) }}
                  </div>
                  <div
                    v-if="item.commissionCurrencyCode !== localCurrencyCode"
                    class="caption grey--text font-weight-medium"
                    title="ມູນຄ່າແປງເປັນສະກຸນເງິນພື້ນຖານ"
                  >
                    ≈ {{ formatNumber(item.commissionBaseAmount) }} {{ localCurrencyCode }}
                  </div>
                </div>
              </template>

              <!-- Actions -->
              <template #item.actions="{ item }">
                <v-btn icon small color="primary" title="ເບິ່ງບິນຂາຍ" @click="viewOrder(item.saleHeaderId)">
                  <v-icon small>mdi-eye-outline</v-icon>
                </v-btn>
              </template>

              <!-- Empty State -->
              <template #no-data>
                <div class="text-center py-6">
                  <v-icon size="40" color="grey lighten-1" class="mb-2">mdi-receipt-text-remove-outline</v-icon>
                  <p class="body-2 grey--text text--darken-1 mb-1">ບໍ່ພົບລາຍການຄ່ານາຍໜ້າໃນຊ່ວງເວລານີ້</p>
                  <span class="caption grey--text">ລອງເລືອກຊ່ວງວັນທີອື່ນ ຫຼື ກົດຣີເຊັດຕົວກັ່ນຕອງ</span>
                </div>
              </template>
            </v-data-table>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <!-- Order Detail Dialog -->
    <v-dialog v-model="orderDetailDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <OrderDetailPosCRUD
        v-if="selectedOrderId"
        :key="orderComponentKey"
        :header-id="selectedOrderId"
        :is-update="false"
        @close-dialog="orderDetailDialog = false"
      />
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import { swalError2, swalSuccess } from '~/common'
import { printCommissionReportSummary } from '~/common/commission-report-printer.js'
import { mainCompanyInfo } from '~/common/api'

export default {
  name: 'SaleReportCommissionPage',
  components: {
    OrderDetailPosCRUD,
  },
  middleware: 'auths',

  data() {
    return {
      loading: false,
      exportingExcel: false,
      activeTab: 0,
      activePreset: 'thisMonth',
      showMoreFilters: false,

      menuDateFrom: false,
      menuDateTo: false,

      filters: {
        startDate: moment().startOf('month').format('YYYY-MM-DD'),
        endDate: moment().endOf('month').format('YYYY-MM-DD'),
        userId: null,
        productId: null,
        categoryId: null,
        currencyId: null,
      },

      datePresets: [
        { id: 'today', label: 'ມື້ນີ້' },
        { id: 'thisWeek', label: 'ອາທິດນີ້' },
        { id: 'thisMonth', label: 'ເດືອນນີ້' },
        { id: 'lastMonth', label: 'ເດືອນກ່ອນ' },
        { id: 'thisYear', label: 'ປີນີ້' },
      ],

      summary: {
        totalCommissionBase: 0,
        totalOrdersCount: 0,
        totalLinesCount: 0,
        totalItemsSold: 0,
        localCurrency: { id: 1, code: 'LAK', symbol: '₭' },
        currencyTotals: [],
      },

      reportLines: [],
      byProductList: [],
      byUserList: [],

      userOptions: [],
      productOptions: [],
      categoryOptions: [],

      userTableSearch: '',
      productTableSearch: '',
      lineTableSearch: '',

      orderDetailDialog: false,
      selectedOrderId: null,
      orderComponentKey: 1,

      // High-level Salesperson Headers (Tab 0)
      byUserHeaders: [
        { text: 'ຜູ້ຂາຍ (Salesperson)', value: 'userName' },
        { text: 'ຈຳນວນບິນ (Orders)', value: 'totalOrders', align: 'center', width: '130px' },
        { text: 'ສິນຄ້າທີ່ຂາຍ (Items Sold)', value: 'totalQuantity', align: 'center', width: '140px' },
        { text: 'ແຍກຕາມສະກຸນເງິນ (Currencies)', value: 'currencies', align: 'center', width: '220px' },
        { text: 'ຍອດຄ່ານາຍໜ້າລວມ (Total Commission)', value: 'totalCommissionBaseAmount', align: 'end', width: '200px' },
        { text: 'ລາຍລະອຽດ', value: 'actions', sortable: false, align: 'center', width: '130px' },
      ],

      // By Product Headers (Tab 1)
      byProductHeaders: [
        { text: 'ສິນຄ້າ (Product)', value: 'productName' },
        { text: 'ໝວດໝູ່ (Category)', value: 'categoryName', width: '130px' },
        { text: 'ຈຳນວນຂາຍ (Qty)', value: 'totalQuantity', align: 'center', width: '110px' },
        { text: 'ຍອດຂາຍລວມ (Total Sales)', value: 'totalSalesAmount', align: 'end', width: '140px' },
        { text: 'ອັດຕາ (Rate)', value: 'commissionRate', align: 'center', width: '130px' },
        { text: 'ຄ່ານາຍໜ້າລວມ (Commission)', value: 'totalCommissionAmount', align: 'end', width: '150px' },
        { text: 'ມູນຄ່າພື້ນຖານ (Base)', value: 'totalCommissionBaseAmount', align: 'end', width: '150px' },
        { text: 'ລາຍລະອຽດ', value: 'actions', sortable: false, align: 'center', width: '130px' },
      ],

      // Streamlined Detailed Transactions Headers (Tab 2)
      lineHeaders: [
        { text: 'ວັນທີ & ເລກບິນ (Date & Bill #)', value: 'orderInfo', width: '160px' },
        { text: 'ຜູ້ຂາຍ (Salesperson)', value: 'userName', width: '150px' },
        { text: 'ລາຍການສິນຄ້າ (Product)', value: 'productName' },
        { text: 'ຈຳນວນ (Qty)', value: 'quantity', align: 'center', width: '90px' },
        { text: 'ລາຄາ & ຍອດຂາຍ (Price & Sales)', value: 'priceAndTotal', align: 'end', width: '140px' },
        { text: 'ອັດຕາ (Rate)', value: 'commissionRate', align: 'center', width: '110px' },
        { text: 'ຄ່ານາຍໜ້າ (Commission)', value: 'commissionDisplay', align: 'end', width: '160px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, align: 'center', width: '70px' },
      ],
    }
  },

  computed: {
    ...mapGetters(['findAllCurrency']),

    currencyList() {
      return this.findAllCurrency || []
    },

    localCurrencyCode() {
      if (this.summary.localCurrency && this.summary.localCurrency.code) {
        return this.summary.localCurrency.code
      }
      const local = this.currencyList.find((c) => c.isLocalCCY === true || c.isLocalCCY === 1)
      return local ? local.code : 'LAK'
    },

    localCurrencySymbol() {
      if (this.summary.localCurrency && this.summary.localCurrency.symbol) {
        return this.summary.localCurrency.symbol
      }
      const local = this.currencyList.find((c) => c.isLocalCCY === true || c.isLocalCCY === 1)
      return local ? local.symbol || local.code : '₭'
    },

    companyName() {
      return this.$store.state.company?.name || 'DCommerce'
    },

    user() {
      return this.$auth.user || {}
    },

    companyLogo() {
      const company = mainCompanyInfo()
      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || ''
        return `${baseUrl}/${company.apiData.profile_image_path}`
      }
      return ''
    },

    currentTabName() {
      if (this.activeTab === 0) return 'ສະຫຼຸບຕາມຜູ້ຂາຍ'
      if (this.activeTab === 1) return 'ສະຫຼຸບຕາມສິນຄ້າ'
      if (this.activeTab === 2) return 'ລາຍການທຸລະກຳ'
      return 'ລາຍການ'
    },

    hasActiveFilters() {
      return !!(this.filters.userId || this.filters.productId || this.filters.categoryId || this.filters.currencyId)
    },
  },

  async mounted() {
    await Promise.all([
      this.fetchUsers(),
      this.fetchProducts(),
      this.fetchCategories(),
    ])
    await this.loadReportData()
  },

  methods: {
    getUserDisplayName(item) {
      if (!item) return ''
      return item.cus_name || item.name || item.cus_id || (`Staff #${item.id}`)
    },

    getActiveStaffName() {
      const u = this.userOptions.find((x) => x.id === this.filters.userId)
      return u ? this.getUserDisplayName(u) : `Staff #${this.filters.userId}`
    },

    getActiveProductName() {
      const p = this.productOptions.find((x) => x.id === this.filters.productId)
      return p ? (p.pro_name || p.pro_id) : `Product #${this.filters.productId}`
    },

    getActiveCategoryName() {
      const c = this.categoryOptions.find((x) => x.categ_id === this.filters.categoryId)
      return c ? c.categ_name : `Category #${this.filters.categoryId}`
    },

    getActiveCurrencyCode() {
      const c = this.currencyList.find((x) => x.id === this.filters.currencyId)
      return c ? c.code : `Currency #${this.filters.currencyId}`
    },

    clearStaffFilter() {
      this.filters.userId = null
      this.loadReportData()
    },

    clearProductFilter() {
      this.filters.productId = null
      this.loadReportData()
    },

    clearCategoryFilter() {
      this.filters.categoryId = null
      this.loadReportData()
    },

    clearCurrencyFilter() {
      this.filters.currencyId = null
      this.loadReportData()
    },

    clearDrillDownFilters() {
      this.filters.userId = null
      this.filters.productId = null
      this.loadReportData()
    },

    drillDownToStaff(userId) {
      this.filters.userId = userId
      this.activeTab = 2 // Switch to Detailed Transactions
      this.loadReportData()
    },

    drillDownToProduct(productId) {
      this.filters.productId = productId
      this.activeTab = 2 // Switch to Detailed Transactions
      this.loadReportData()
    },

    formatNumber(val) {
      if (val === null || val === undefined || isNaN(val)) return '0'
      const parts = Number(val).toFixed(2).split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts[1] === '00' ? parts[0] : `${parts[0]}.${parts[1]}`
    },

    formatDate(val) {
      if (!val) return ''
      return moment(val).format('DD/MM/YYYY')
    },

    applyDatePreset(presetId) {
      this.activePreset = presetId
      const today = moment()

      if (presetId === 'today') {
        this.filters.startDate = today.format('YYYY-MM-DD')
        this.filters.endDate = today.format('YYYY-MM-DD')
      } else if (presetId === 'thisWeek') {
        this.filters.startDate = today.clone().startOf('isoWeek').format('YYYY-MM-DD')
        this.filters.endDate = today.clone().endOf('isoWeek').format('YYYY-MM-DD')
      } else if (presetId === 'thisMonth') {
        this.filters.startDate = today.clone().startOf('month').format('YYYY-MM-DD')
        this.filters.endDate = today.clone().endOf('month').format('YYYY-MM-DD')
      } else if (presetId === 'lastMonth') {
        const lastMonth = today.clone().subtract(1, 'month')
        this.filters.startDate = lastMonth.startOf('month').format('YYYY-MM-DD')
        this.filters.endDate = lastMonth.endOf('month').format('YYYY-MM-DD')
      } else if (presetId === 'thisYear') {
        this.filters.startDate = today.clone().startOf('year').format('YYYY-MM-DD')
        this.filters.endDate = today.clone().endOf('year').format('YYYY-MM-DD')
      }
      this.loadReportData()
    },

    onFilterChanged() {
      this.activePreset = null
      this.loadReportData()
    },

    resetFilters() {
      this.filters.userId = null
      this.filters.productId = null
      this.filters.categoryId = null
      this.filters.currencyId = null
      this.showMoreFilters = false
      this.applyDatePreset('thisMonth')
    },

    async fetchUsers() {
      try {
        const res = await this.$axios.get('/api/user/find').catch(() => null)
        if (res && res.data) {
          this.userOptions = Array.isArray(res.data) ? res.data : (res.data.users || [])
        }
      } catch (err) {
        console.error('Failed to load users:', err)
      }
    },

    async fetchProducts() {
      try {
        const res = await this.$axios.get('/api/product/allActiveProducts').catch(() => null)
        if (res && res.data && res.data.data) {
          this.productOptions = res.data.data.products || []
        }
      } catch (err) {
        console.error('Failed to load products:', err)
      }
    },

    async fetchCategories() {
      try {
        const res = await this.$axios.get('/category_f').catch(() => null)
        if (res && res.data) {
          this.categoryOptions = Array.isArray(res.data) ? res.data : []
        }
      } catch (err) {
        console.error('Failed to load categories:', err)
      }
    },

    async loadReportData() {
      this.loading = true
      try {
        const params = {
          startDate: this.filters.startDate,
          endDate: this.filters.endDate,
        }
        if (this.filters.userId) params.userId = this.filters.userId
        if (this.filters.productId) params.productId = this.filters.productId
        if (this.filters.categoryId) params.categoryId = this.filters.categoryId
        if (this.filters.currencyId) params.currencyId = this.filters.currencyId

        const res = await this.$axios.get('/api/sale/commission/report', { params })
        if (res && res.data && res.data.success) {
          const d = res.data.data
          this.summary = d.summary || this.summary
          this.reportLines = d.lines || []
          this.byProductList = d.byProduct || []
          this.byUserList = d.byUser || []
        } else {
          this.reportLines = []
          this.byProductList = []
          this.byUserList = []
        }
      } catch (error) {
        console.error('Error fetching commission report:', error)
        swalError2(this.$swal, 'Error', error.response?.data?.message || error.message)
      } finally {
        this.loading = false
      }
    },

    viewOrder(saleHeaderId) {
      if (!saleHeaderId) return
      this.selectedOrderId = saleHeaderId
      this.orderComponentKey += 1
      this.orderDetailDialog = true
    },

    async exportToExcel() {
      this.exportingExcel = true
      try {
        const XLSX = this.$xlsx || (await import('xlsx'))
        const wb = XLSX.utils.book_new()

        // Sheet 1: By Salesperson (First & Most Useful)
        const userExportData = this.byUserList.map((u) => {
          const row = {
            'ຜູ້ຂາຍ (Salesperson)': u.userName,
            'Staff ID': u.userId,
            'ຈຳນວນບິນ': u.totalOrders,
            'ຈຳນວນສິນຄ້າທີ່ຂາຍ': u.totalQuantity,
            'ມູນຄ່າພື້ນຖານລວມ': u.totalCommissionBaseAmount,
          }
          if (u.currencies) {
            Object.keys(u.currencies).forEach((ccy) => {
              row[`ຄ່ານາຍໜ້າ (${ccy})`] = u.currencies[ccy]
            })
          }
          return row
        })
        const wsUsers = XLSX.utils.json_to_sheet(userExportData)
        XLSX.utils.book_append_sheet(wb, wsUsers, 'ສະຫຼຸບຕາມຜູ້ຂາຍ')

        // Sheet 2: By Product
        const productExportData = this.byProductList.map((p) => ({
          'ລະຫັດສິນຄ້າ (SKU)': p.productCode || '',
          'ຊື່ສິນຄ້າ (Product)': p.productName,
          'ໝວດໝູ່ (Category)': p.categoryName || '',
          'ຈຳນວນຂາຍ (Total Qty)': p.totalQuantity,
          'ຍອດຂາຍລວມ (Sales Amount)': p.totalSalesAmount,
          'ອັດຕາຄ່ານາຍໜ້າ': p.commissionRate,
          'ຄ່ານາຍໜ້າລວມ': p.totalCommissionAmount,
          'ສະກຸນເງິນ': p.currencyCode,
          'ມູນຄ່າພື້ນຖານ': p.totalCommissionBaseAmount,
          'ຈຳນວນບິນ': p.orderCount,
        }))
        const wsProducts = XLSX.utils.json_to_sheet(productExportData)
        XLSX.utils.book_append_sheet(wb, wsProducts, 'ສະຫຼຸບຕາມສິນຄ້າ')

        // Sheet 3: Transactions Detail
        const linesExportData = this.reportLines.map((l) => ({
          'ວັນທີ (Date)': this.formatDate(l.bookingDate),
          'ເລກບິນ (Bill #)': l.saleHeaderId,
          'ເລກອ້າງອີງ (Ref)': l.referenceNo || '',
          'ຜູ້ຂາຍ (Salesperson)': l.userName,
          'ລູກຄ້າ (Client)': l.clientName || 'Walk-in',
          'ລະຫັດສິນຄ້າ (SKU)': l.productCode || '',
          'ຊື່ສິນຄ້າ (Product)': l.productName,
          'ໝວດໝູ່ (Category)': l.categoryName || '',
          'ຈຳນວນ (Qty)': l.quantity,
          'ລາຄາຂາຍ (Price)': l.unitPrice,
          'ຍອດຂາຍລວມ (Total)': l.lineTotal,
          'ສະກຸນເງິນຂາຍ': l.saleCurrencyCode,
          'ປະເພດຄ່ານາຍໜ້າ': l.commissionType === 'percentage' ? 'ເປີເຊັນ (%)' : 'ຄົງທີ່ (Fixed)',
          'ອັດຕາ (Rate)': l.commissionRate,
          'ຄ່ານາຍໜ້າເຕັມ (Gross)': l.commissionGrossAmount !== undefined ? l.commissionGrossAmount : l.commissionAmount,
          'ຫັກສ່ວນຫຼຸດ (Discount Deducted)': l.commissionDiscountDeduction || 0,
          'ຄ່ານາຍໜ້າຕົວຈິງ (Net Commission)': l.commissionAmount,
          'ສະກຸນເງິນຄ່ານາຍໜ້າ': l.commissionCurrencyCode,
          'ມູນຄ່າພື້ນຖານ (Base)': l.commissionBaseAmount,
        }))
        const wsLines = XLSX.utils.json_to_sheet(linesExportData)
        XLSX.utils.book_append_sheet(wb, wsLines, 'ລາຍການຄ່ານາຍໜ້າ')

        const filename = `Sales_Commission_Report_${this.filters.startDate}_to_${this.filters.endDate}.xlsx`
        XLSX.writeFile(wb, filename)
        swalSuccess(this.$swal, 'Exported', 'ດາວໂຫຼດ Excel ສຳເລັດແລ້ວ')
      } catch (err) {
        console.error('Excel Export Error:', err)
        swalError2(this.$swal, 'Error', 'Export failed: ' + err.message)
      } finally {
        this.exportingExcel = false
      }
    },

    printReport(target = 'current') {
      try {
        const companyData = mainCompanyInfo()?.apiData || mainCompanyInfo() || {}

        // Resolve active filter labels for print header
        const selectedUser = this.userOptions.find((u) => u.id === this.filters.userId)
        const selectedProduct = this.productOptions.find((p) => p.id === this.filters.productId)
        const selectedCategory = this.categoryOptions.find((c) => c.categ_id === this.filters.categoryId)

        const selectedLabels = {
          salesperson: selectedUser ? this.getUserDisplayName(selectedUser) : '',
          product: selectedProduct ? (selectedProduct.pro_name || selectedProduct.pro_id) : '',
          category: selectedCategory ? selectedCategory.categ_name : '',
        }

        const isThermal = target === 'thermal'
        let printTab = 'all'

        if (!isThermal) {
          if (target === 'current') {
            if (this.activeTab === 0) printTab = 'salesperson'
            else if (this.activeTab === 1) printTab = 'product'
            else if (this.activeTab === 2) printTab = 'transactions'
          } else {
            printTab = 'all'
          }
        }

        printCommissionReportSummary({
          reportLines: this.reportLines,
          byProductList: this.byProductList,
          byUserList: this.byUserList,
          summary: this.summary,
          fromDate: this.filters.startDate,
          toDate: this.filters.endDate,
          activeTab: printTab,
          mode: isThermal ? 'thermal' : 'formal',
          companyData,
          companyLogo: this.companyLogo,
          user: this.user,
          selectedLabels,
          formatNumber: this.formatNumber,
          currencyCode: this.localCurrencyCode,
        })

        if (this.$toast) {
          this.$toast.success('ກຳລັງເປີດໜ້າຕ່າງພິມລາຍງານ...', { position: 'bottom-center' })
        }
      } catch (err) {
        console.error('Print Error:', err)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ: ' + err.message)
      }
    },
  },
}
</script>

<style scoped>
.gap-1 {
  gap: 4px;
}
.gap-2 {
  gap: 8px;
}
.border-light {
  border: 1px solid #e2e8f0 !important;
}
.border-bottom {
  border-bottom: 1px solid #e2e8f0 !important;
}
.border-top {
  border-top: 1px solid #e2e8f0 !important;
}

/* Stat Cards */
.stat-card {
  transition: all 0.2s ease;
}
.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08) !important;
}
.stat-card--primary {
  background: linear-gradient(135deg, #01532b 0%, #0d7943 100%) !important;
}

.currency-badge {
  background-color: #f1f5f9;
  border: 1px solid #e2e8f0;
}

.custom-field >>> .v-input__slot {
  min-height: 40px !important;
}

.custom-table >>> thead th {
  background-color: #f8fafc !important;
  font-weight: 700 !important;
  color: #334155 !important;
  font-size: 0.8125rem !important;
  text-transform: none !important;
  border-bottom: 1px solid #e2e8f0 !important;
}

.custom-table >>> tbody tr:hover {
  background-color: #f8fafc !important;
}

.cursor-pointer {
  cursor: pointer;
}
.opacity-90 {
  opacity: 0.9;
}
.opacity-80 {
  opacity: 0.8;
}
</style>
