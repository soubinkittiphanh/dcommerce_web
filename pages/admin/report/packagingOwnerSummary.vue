<template>
  <div class="pa-4">
    <!-- Header -->
    <header class="mb-4">
      <div class="d-flex justify-space-between align-center flex-wrap">
        <!-- Company Details & Logo on Left Side of Header -->
        <div class="d-flex align-center my-1 mr-3">
          <v-avatar
            size="56"
            rounded="lg"
            class="mr-3 elevation-1"
            color="white"
            style="border: 1px solid #e2e8f0; overflow: hidden;"
          >
            <v-img
              v-if="companyLogoUrl"
              :src="companyLogoUrl"
              contain
              max-height="56"
              max-width="56"
              alt="Company Logo"
            >
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate size="20" width="2" color="amber darken-3"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-icon v-else color="amber darken-3" size="32">mdi-store</v-icon>
          </v-avatar>

          <div>
            <div class="d-flex align-center flex-wrap">
              <span class="text-subtitle-1 font-weight-bold amber--text text--darken-4 mr-2">
                {{ companyInfo.name || 'ຕົວແທນຈຳໜ່າຍ ເບຍລາວ / Beerlao Agency' }}
              </span>
              <v-chip v-if="companyInfo.tel" x-small outlined color="primary" class="mr-1">
                <v-icon left x-small>mdi-phone</v-icon>{{ companyInfo.tel }}
              </v-chip>
              <v-chip v-if="companyInfo.taxId" x-small outlined color="grey darken-1" class="mr-1">
                <v-icon left x-small>mdi-card-text-outline</v-icon>ເລກພາສີ: {{ companyInfo.taxId }}
              </v-chip>
              <span v-if="companyInfo.address" class="caption grey--text text--darken-1 d-none d-md-inline">
                <v-icon x-small color="grey">mdi-map-marker</v-icon>{{ companyInfo.address }}
              </span>
            </div>
            <h1 class="text-h5 font-weight-black primary--text mb-0">
              ລາຍງານສະຫຼຸບການຂາຍສິນຄ້າ ແລະ ບັນຈຸພັນສຳລັບເຈົ້າຂອງທຸລະກິດ
            </h1>
            <span class="text-caption grey--text text--darken-1">
              Owner's Packaging & Packing Product Sales Summary Report (Beerlao Agency)
            </span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="d-flex align-center my-1 flex-wrap">
          <v-btn
            color="success"
            depressed
            class="rounded-lg mr-2 font-weight-bold"
            :disabled="isLoading || (!packingProducts.length && !packagingProducts.length)"
            @click="exportToExcel"
          >
            <v-icon left small>mdi-file-excel</v-icon> ສົ່ງອອກ Excel
          </v-btn>
          <v-btn
            color="primary"
            depressed
            :loading="isLoading"
            class="rounded-lg font-weight-bold"
            @click="fetchReport"
          >
            <v-icon left small>mdi-refresh</v-icon> ໂຫຼດຂໍ້ມູນໃໝ່
          </v-btn>
        </div>
      </div>
    </header>

    <!-- Filters & Quick Date Presets Card -->
    <v-card outlined class="pa-4 mb-4 rounded-xl elevation-1">
      <v-row dense align="center">
        <!-- Quick Preset Date Buttons -->
        <v-col cols="12" class="d-flex align-center flex-wrap pb-2 border-bottom mb-3">
          <span class="caption grey--text text--darken-2 font-weight-bold mr-3">ເລືອກຊ່ວງເວລາໄວ:</span>
          <v-btn-toggle v-model="selectedPreset" mandatory dense class="rounded-pill border">
            <v-btn small value="today" class="font-weight-medium" @click="setPreset('today')">ມື້ນີ້ (Today)</v-btn>
            <v-btn small value="yesterday" class="font-weight-medium" @click="setPreset('yesterday')">ມື້ວານ (Yesterday)</v-btn>
            <v-btn small value="thisWeek" class="font-weight-medium" @click="setPreset('thisWeek')">ອາທິດນີ້ (This Week)</v-btn>
            <v-btn small value="thisMonth" class="font-weight-medium" @click="setPreset('thisMonth')">ເດືອນນີ້ (This Month)</v-btn>
          </v-btn-toggle>
        </v-col>

        <!-- Client Autocomplete Dropdown (All, Retail Walk-in, or Specific Restaurant) -->
        <v-col cols="12" md="4">
          <v-autocomplete
            v-model="selectedClientId"
            :items="clientOptions"
            item-text="displayName"
            item-value="id"
            label="ເລືອກລູກຄ້າ / ຮ້ານຄ້າ (Filter by Client)"
            outlined
            dense
            hide-details
            prepend-inner-icon="mdi-store"
            class="rounded-lg"
            @change="fetchReport"
          >
            <template #item="{ item }">
              <v-list-item-avatar size="28" :color="item.id === 'all' ? 'primary' : (item.id === 'retail' ? 'teal' : 'amber darken-2')">
                <v-icon small dark>{{ item.id === 'all' ? 'mdi-account-group' : (item.id === 'retail' ? 'mdi-cart' : 'mdi-store') }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold caption">{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle v-if="item.company || item.telephone" class="caption grey--text">
                  {{ item.company }} {{ item.telephone ? '• ' + item.telephone : '' }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-autocomplete>
        </v-col>

        <!-- Location Filter -->
        <v-col cols="12" sm="6" md="2">
          <v-select
            v-model="selectedLocationId"
            :items="locationOptions"
            item-text="name"
            item-value="id"
            label="ສາຂາ / ສາງ (Location)"
            outlined
            dense
            hide-details
            prepend-inner-icon="mdi-map-marker"
            class="rounded-lg"
            @change="fetchReport"
          ></v-select>
        </v-col>

        <!-- Start Date -->
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="startDate"
            type="date"
            label="ແຕ່ວັນທີ (From Date)"
            outlined
            dense
            hide-details
            class="rounded-lg"
            @change="fetchReport"
          ></v-text-field>
        </v-col>

        <!-- End Date -->
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="endDate"
            type="date"
            label="ຫາວັນທີ (To Date)"
            outlined
            dense
            hide-details
            class="rounded-lg"
            @change="fetchReport"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>

    <!-- Specific Customer Profile Header Card (Appears when specific wholesale client is selected) -->
    <v-card
      v-if="customerProfile"
      class="pa-4 mb-4 rounded-xl elevation-2 amber lighten-5 border-amber"
      outlined
    >
      <div class="d-flex justify-space-between align-center flex-wrap">
        <div class="d-flex align-center">
          <v-avatar color="amber darken-3" size="48" class="mr-3 elevation-2">
            <v-icon color="white">mdi-store</v-icon>
          </v-avatar>
          <div>
            <div class="d-flex align-center flex-wrap">
              <span class="text-h6 font-weight-black amber--text text--darken-4 mr-2">
                {{ customerProfile.name }}
              </span>
              <v-chip x-small color="amber darken-4" dark class="font-weight-bold">
                {{ customerProfile.company || 'Wholesale Client' }}
              </v-chip>
            </div>
            <div class="caption grey--text text--darken-3 mt-1">
              <v-icon x-small color="grey darken-2">mdi-phone</v-icon> {{ customerProfile.telephone || 'ບໍ່ມີເບີໂທ' }}
              <span v-if="customerProfile.address" class="ml-2">
                <v-icon x-small color="grey darken-2">mdi-map-marker</v-icon> {{ customerProfile.address }}
              </span>
            </div>
          </div>
        </div>

        <!-- Outstanding Packaging Debt Badges for this Client -->
        <div class="d-flex align-center mt-2 mt-sm-0 flex-wrap">
          <div class="mr-3 text-right">
            <span class="caption grey--text text--darken-2 font-weight-bold d-block">ຍອດໜີ້ລັງເປົ່າຄ້າງສົ່ງ:</span>
            <v-chip color="amber darken-3" dark label class="font-weight-black text-body-2">
              <v-icon x-small left>mdi-cube-outline</v-icon>
              {{ numberWithCommas(customerProfile.currentCratesOwed) }} ລັງ
            </v-chip>
          </div>
          <div class="text-right">
            <span class="caption grey--text text--darken-2 font-weight-bold d-block">ຍອດໜີ້ແກ້ວເປົ່າຄ້າງສົ່ງ:</span>
            <v-chip color="teal darken-2" dark label class="font-weight-black text-body-2">
              <v-icon x-small left>mdi-glass-mug-variant</v-icon>
              {{ numberWithCommas(customerProfile.currentBottlesOwed) }} ແກ້ວ
            </v-chip>
          </div>
        </div>
      </div>
    </v-card>

    <!-- Executive KPI Cards Grid (Owner At-a-Glance) -->
    <v-row dense class="mb-4">
      <!-- KPI 1: Beer / Packing Product Revenue -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4 rounded-xl elevation-2 h-100 amber lighten-5 border-amber" outlined>
          <div class="d-flex justify-space-between align-start">
            <div>
              <span class="caption grey--text text--darken-2 font-weight-bold">
                {{ selectedClientId !== 'all' ? 'ຍອດຊື້ເບຍຂອງລູກຄ້າ' : 'ຍອດຂາຍສິນຄ້າທີ່ບັນຈຸ (ເບຍ)' }}
              </span>
              <div class="text-h5 font-weight-black amber--text text--darken-4 mt-1">
                {{ formatMainRevenue }}
              </div>
              <div class="caption amber--text text--darken-3 font-weight-bold mt-1">
                <span v-for="(rev, idx) in kpiData.revenueByCurrency" :key="idx" class="mr-2">
                  {{ rev.currencyCode }}: {{ numberWithCommas(rev.totalAmount) }}
                </span>
              </div>
            </div>
            <v-avatar color="amber darken-3" size="40">
              <v-icon color="white">mdi-currency-usd</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- KPI 2: Total Cases Sold & Promo FOC -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4 rounded-xl elevation-2 h-100 blue lighten-5 border-blue" outlined>
          <div class="d-flex justify-space-between align-start">
            <div>
              <span class="caption grey--text text--darken-2 font-weight-bold">ຈຳນວນລັງທີ່ຂາຍ + ແຖມ</span>
              <div class="text-h5 font-weight-black blue--text text--darken-4 mt-1">
                {{ numberWithCommas(kpiData.totalCasesSold) }}
                <span class="text-subtitle-2 font-weight-medium grey--text text--darken-2">ລັງ</span>
              </div>
              <div class="caption blue--text text--darken-3 font-weight-bold mt-1">
                ຂາຍ: {{ numberWithCommas(kpiData.totalPaidCases) }} | ແຖມ FOC: {{ numberWithCommas(kpiData.totalFocCases) }}
              </div>
            </div>
            <v-avatar color="blue darken-2" size="40">
              <v-icon color="white">mdi-package-variant</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- KPI 3: Packaging Sold / Deposits Charged -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4 rounded-xl elevation-2 h-100 indigo lighten-5 border-indigo" outlined>
          <div class="d-flex justify-space-between align-start">
            <div>
              <span class="caption grey--text text--darken-2 font-weight-bold">ຂາຍບັນຈຸພັນ / ຮັບມັດຈຳ</span>
              <div class="text-h5 font-weight-black indigo--text text--darken-4 mt-1">
                {{ numberWithCommas(kpiData.totalPackagingSoldAmount) }}
                <span class="text-caption font-weight-medium grey--text text--darken-2">₭</span>
              </div>
              <div class="caption indigo--text text--darken-3 font-weight-bold mt-1">
                ຈຳນວນ: {{ numberWithCommas(kpiData.totalPackagingSoldQty) }} ໜ່ວຍ (ລັງ/ແກ້ວ)
              </div>
            </div>
            <v-avatar color="indigo darken-2" size="40">
              <v-icon color="white">mdi-cart-plus</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- KPI 4: Packaging Bought Back / Deposits Refunded -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4 rounded-xl elevation-2 h-100 teal lighten-5 border-teal" outlined>
          <div class="d-flex justify-space-between align-start">
            <div>
              <span class="caption grey--text text--darken-2 font-weight-bold">ຮັບຊື້ບັນຈຸພັນ / ຄືນມັດຈຳ</span>
              <div class="text-h5 font-weight-black teal--text text--darken-4 mt-1">
                {{ numberWithCommas(kpiData.totalPackagingBoughtAmount) }}
                <span class="text-caption font-weight-medium grey--text text--darken-2">₭</span>
              </div>
              <div class="caption teal--text text--darken-3 font-weight-bold mt-1">
                ຈຳນວນ: {{ numberWithCommas(kpiData.totalPackagingBoughtQty) }} ໜ່ວຍ (POS)
              </div>
            </div>
            <v-avatar color="teal darken-2" size="40">
              <v-icon color="white">mdi-keyboard-return</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- KPI Secondary Row: Net Cash & Recovery Rate -->
    <v-row dense class="mb-4">
      <!-- Net Packaging Cash -->
      <v-col cols="12" sm="6">
        <v-card
          class="pa-3 rounded-xl elevation-1 d-flex align-center justify-space-between"
          :class="kpiData.netPackagingCash >= 0 ? 'green lighten-5 border-green' : 'orange lighten-5 border-orange'"
          outlined
        >
          <div class="d-flex align-center">
            <v-avatar size="36" :color="kpiData.netPackagingCash >= 0 ? 'green darken-2' : 'orange darken-3'" class="mr-3">
              <v-icon small color="white">{{ kpiData.netPackagingCash >= 0 ? 'mdi-cash-plus' : 'mdi-cash-minus' }}</v-icon>
            </v-avatar>
            <div>
              <span class="caption grey--text text--darken-2 font-weight-bold">ກະແສເງິນສຸດທິຈາກບັນຈຸພັນ (Net Packaging Cash Impact):</span>
              <div class="subtitle-1 font-weight-black" :class="kpiData.netPackagingCash >= 0 ? 'green--text text--darken-4' : 'orange--text text--darken-4'">
                {{ kpiData.netPackagingCash >= 0 ? '+' : '' }}{{ numberWithCommas(kpiData.netPackagingCash) }} ₭
                <span class="caption font-weight-normal grey--text">(ຂາຍ/ມັດຈຳ - ຮັບຊື້/ຄືນເງິນ)</span>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- Empties Recovery Rate -->
      <v-col cols="12" sm="6">
        <v-card class="pa-3 rounded-xl elevation-1 d-flex align-center justify-space-between purple lighten-5 border-purple" outlined>
          <div class="d-flex align-center">
            <v-avatar size="36" color="purple darken-2" class="mr-3">
              <v-icon small color="white">mdi-recycle</v-icon>
            </v-avatar>
            <div>
              <span class="caption grey--text text--darken-2 font-weight-bold">ອັດຕາການເກັບຄືນບັນຈຸພັນ (Empties Recovery Rate):</span>
              <div class="subtitle-1 font-weight-black purple--text text--darken-4">
                {{ kpiData.recoveryRatePercent }}%
                <span class="caption font-weight-normal grey--text">
                  (ເກັບຄືນ {{ numberWithCommas(kpiData.totalEmptiesRecoveredUnits) }} / ຈ່າຍອອກ {{ numberWithCommas(kpiData.totalDispatchedCrates + kpiData.totalDispatchedBottles) }} ໜ່ວຍ)
                </span>
              </div>
            </div>
          </div>
          <v-progress-circular
            :value="kpiData.recoveryRatePercent"
            color="purple darken-2"
            size="36"
            width="4"
            class="caption font-weight-bold"
          >
            {{ Math.round(kpiData.recoveryRatePercent) }}%
          </v-progress-circular>
        </v-card>
      </v-col>
    </v-row>

    <!-- Main Content Tabs -->
    <v-card outlined class="rounded-xl elevation-1 overflow-hidden">
      <v-tabs v-model="activeTab" background-color="grey lighten-4" color="primary" slider-color="primary" class="border-bottom">
        <v-tab class="font-weight-bold text-subtitle-2 px-4">
          <v-icon left small>mdi-glass-mug-variant</v-icon>
          1. ສິນຄ້າທີ່ບັນຈຸ (Packing Products - Full Cases)
          <v-chip x-small class="ml-2 font-weight-black" color="primary" dark>{{ packingProducts.length }}</v-chip>
        </v-tab>
        <v-tab class="font-weight-bold text-subtitle-2 px-4">
          <v-icon left small>mdi-cube-outline</v-icon>
          2. ສິນຄ້າບັນຈຸພັນ (Packaging Products - Empty Assets)
          <v-chip x-small class="ml-2 font-weight-black" color="teal darken-2" dark>{{ packagingProducts.length }}</v-chip>
        </v-tab>
        <v-tab v-if="selectedClientId !== 'retail' && customerMovements.length > 0" class="font-weight-bold text-subtitle-2 px-4">
          <v-icon left small>mdi-history</v-icon>
          3. ປະຫວັດການເຄື່ອນໄຫວລູກຄ້າ (Movement Timeline)
          <v-chip x-small class="ml-2 font-weight-black" color="amber darken-3" dark>{{ customerMovements.length }}</v-chip>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="activeTab">
        <!-- TAB 1: PACKING PRODUCTS (FULL BEER CASES) -->
        <v-tab-item>
          <div class="pa-4">
            <div class="d-flex justify-space-between align-center mb-3 flex-wrap">
              <span class="text-subtitle-1 font-weight-bold primary--text">
                ລາຍລະອຽດການຂາຍສິນຄ້າທີ່ບັນຈຸ (ເບຍເຕັມລັງ + ໂປຣໂມຊັ່ນ FOC)
              </span>
              <div class="d-flex align-center flex-wrap">
                <v-btn
                  color="primary"
                  outlined
                  class="rounded-lg font-weight-bold mr-2"
                  :disabled="isLoading || packingProducts.length === 0"
                  @click="printTab(1)"
                >
                  <v-icon left small>mdi-printer</v-icon> ພິມລາຍງານ A4
                </v-btn>
                <v-text-field
                  v-model="packingSearch"
                  append-icon="mdi-magnify"
                  label="ຄົ້ນຫາສິນຄ້າ..."
                  single-line
                  hide-details
                  dense
                  outlined
                  class="rounded-lg"
                  style="max-width: 240px;"
                ></v-text-field>
              </div>
            </div>

            <v-data-table
              :headers="packingHeaders"
              :items="packingProducts"
              :search="packingSearch"
              :loading="isLoading"
              dense
              class="elevation-0 border rounded-lg"
              :items-per-page="15"
            >
              <!-- Product Column with Image/Avatar -->
              <template #item.productName="{ item }">
                <div class="d-flex align-center py-1">
                  <v-avatar size="32" color="amber lighten-4" class="mr-2 rounded">
                    <img v-if="item.imagePath" :src="item.imagePath" alt="Product" />
                    <v-icon v-else small color="amber darken-3">mdi-bottle-wine</v-icon>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold text-caption primary--text">{{ item.productName }}</div>
                    <span class="text-caption grey--text">{{ item.barCode || '-' }}</span>
                  </div>
                </div>
              </template>

              <!-- Paid Qty -->
              <template #item.paidQty="{ item }">
                <span class="font-weight-bold">{{ numberWithCommas(item.paidQty) }}</span>
              </template>

              <!-- FOC Promo Qty -->
              <template #item.focQty="{ item }">
                <v-chip v-if="item.focQty > 0" small color="pink lighten-5" class="pink--text text--darken-3 font-weight-bold" label>
                  +{{ numberWithCommas(item.focQty) }} ແຖມ
                </v-chip>
                <span v-else class="grey--text">-</span>
              </template>

              <!-- Total Cases -->
              <template #item.totalCases="{ item }">
                <span class="font-weight-black blue--text text--darken-3">{{ numberWithCommas(item.totalCases) }} ລັງ</span>
              </template>

              <!-- Total Sales Revenue -->
              <template #item.totalSales="{ item }">
                <span class="font-weight-bold amber--text text--darken-4">
                  {{ numberWithCommas(item.totalSales) }} {{ item.currencySymbol || '₭' }}
                </span>
              </template>

              <!-- Dispatched Crates -->
              <template #item.dispatchedCrates="{ item }">
                <span class="font-weight-medium grey--text text--darken-3">
                  {{ numberWithCommas(item.dispatchedCrates) }} ລັງ
                </span>
              </template>

              <!-- Dispatched Bottles -->
              <template #item.dispatchedBottles="{ item }">
                <span class="font-weight-medium grey--text text--darken-3">
                  {{ numberWithCommas(item.dispatchedBottles) }} ແກ້ວ
                </span>
              </template>

              <!-- Summary Totals Row at the Bottom -->
              <template #body.append>
                <tr class="amber lighten-5 font-weight-black">
                  <td class="text-left font-weight-black primary--text">🔹 ລວມທັງໝົດ (Total Summary)</td>
                  <td class="text-right">{{ numberWithCommas(kpiData.totalPaidCases) }}</td>
                  <td class="text-right">{{ numberWithCommas(kpiData.totalFocCases) }}</td>
                  <td class="text-right blue--text text--darken-3">{{ numberWithCommas(kpiData.totalCasesSold) }} ລັງ</td>
                  <td class="text-right amber--text text--darken-4">{{ formatMainRevenue }}</td>
                  <td class="text-right">{{ numberWithCommas(kpiData.totalDispatchedCrates) }} ລັງ</td>
                  <td class="text-right">{{ numberWithCommas(kpiData.totalDispatchedBottles) }} ແກ້ວ</td>
                </tr>
              </template>
            </v-data-table>
          </div>
        </v-tab-item>

        <!-- TAB 2: PACKAGING PRODUCTS (EMPTY ASSETS ACTIVITY) -->
        <v-tab-item>
          <div class="pa-4">
            <div class="d-flex justify-space-between align-center mb-3 flex-wrap">
              <span class="text-subtitle-1 font-weight-bold teal--text text--darken-3">
                ລາຍລະອຽດການຊື້-ຂາຍ ແລະ ຄືນມັດຈຳສິນຄ້າບັນຈຸພັນ (ລັງເປົ່າ / ແກ້ວເປົ່າ)
              </span>
              <v-btn
                color="teal darken-2"
                outlined
                class="rounded-lg font-weight-bold"
                :disabled="isLoading || packagingProducts.length === 0"
                @click="printTab(2)"
              >
                <v-icon left small>mdi-printer</v-icon> ພິມລາຍງານ A4
              </v-btn>
            </div>

            <v-data-table
              :headers="packagingHeaders"
              :items="packagingProducts"
              :loading="isLoading"
              dense
              class="elevation-0 border rounded-lg"
              hide-default-footer
              disable-pagination
            >
              <!-- Packaging Asset Name -->
              <template #item.productName="{ item }">
                <div class="d-flex align-center py-1">
                  <v-avatar size="32" color="teal lighten-4" class="mr-2 rounded">
                    <v-icon small color="teal darken-3">
                      {{ item.productName.includes('ລັງ') ? 'mdi-cube-outline' : 'mdi-glass-mug-variant' }}
                    </v-icon>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold text-caption">{{ item.productName }}</div>
                    <span class="text-caption grey--text">{{ item.barCode || '-' }}</span>
                  </div>
                </div>
              </template>

              <!-- Sold Qty -->
              <template #item.soldQty="{ item }">
                <span class="font-weight-bold indigo--text text--darken-3">{{ numberWithCommas(item.soldQty) }}</span>
              </template>

              <!-- Sold Amount -->
              <template #item.soldAmount="{ item }">
                <span class="font-weight-bold indigo--text text--darken-4">
                  {{ numberWithCommas(item.soldAmount) }} ₭
                </span>
              </template>

              <!-- Bought Qty -->
              <template #item.boughtQty="{ item }">
                <span class="font-weight-bold teal--text text--darken-3">{{ numberWithCommas(item.boughtQty) }}</span>
              </template>

              <!-- Bought Amount -->
              <template #item.boughtAmount="{ item }">
                <span class="font-weight-bold teal--text text--darken-4">
                  {{ numberWithCommas(item.boughtAmount) }} ₭
                </span>
              </template>

              <!-- Net Stock Delta -->
              <template #item.netQty="{ item }">
                <v-chip
                  small
                  label
                  :color="item.netQty > 0 ? 'orange lighten-4' : (item.netQty < 0 ? 'teal lighten-4' : 'grey lighten-3')"
                  :class="item.netQty > 0 ? 'orange--text text--darken-4' : (item.netQty < 0 ? 'teal--text text--darken-4' : 'grey--text')"
                  class="font-weight-bold"
                >
                  {{ item.netQty > 0 ? '+' : '' }}{{ numberWithCommas(item.netQty) }}
                </v-chip>
              </template>

              <!-- Net Cash Impact -->
              <template #item.netAmount="{ item }">
                <span class="font-weight-black" :class="item.netAmount >= 0 ? 'green--text text--darken-3' : 'orange--text text--darken-3'">
                  {{ item.netAmount >= 0 ? '+' : '' }}{{ numberWithCommas(item.netAmount) }} ₭
                </span>
              </template>

              <!-- Summary Totals Row -->
              <template #body.append>
                <tr class="teal lighten-5 font-weight-black">
                  <td class="text-left font-weight-black teal--text text--darken-4">🔹 ລວມບັນຈຸພັນ (Packaging Total)</td>
                  <td class="text-right indigo--text text--darken-3">{{ numberWithCommas(kpiData.totalPackagingSoldQty) }}</td>
                  <td class="text-right indigo--text text--darken-4">{{ numberWithCommas(kpiData.totalPackagingSoldAmount) }} ₭</td>
                  <td class="text-right teal--text text--darken-3">{{ numberWithCommas(kpiData.totalPackagingBoughtQty) }}</td>
                  <td class="text-right teal--text text--darken-4">{{ numberWithCommas(kpiData.totalPackagingBoughtAmount) }} ₭</td>
                  <td class="text-center font-weight-black">
                    {{ (kpiData.totalPackagingSoldQty - kpiData.totalPackagingBoughtQty) > 0 ? '+' : '' }}{{ numberWithCommas(kpiData.totalPackagingSoldQty - kpiData.totalPackagingBoughtQty) }}
                  </td>
                  <td class="text-right font-weight-black" :class="kpiData.netPackagingCash >= 0 ? 'green--text text--darken-4' : 'orange--text text--darken-4'">
                    {{ kpiData.netPackagingCash >= 0 ? '+' : '' }}{{ numberWithCommas(kpiData.netPackagingCash) }} ₭
                  </td>
                </tr>
              </template>
            </v-data-table>
          </div>
        </v-tab-item>

        <!-- TAB 3: CUSTOMER MOVEMENT TIMELINE (Wholesale Route / Specific Client) -->
        <v-tab-item v-if="selectedClientId !== 'retail' && customerMovements.length > 0">
          <div class="pa-4">
            <div class="d-flex justify-space-between align-center mb-3 flex-wrap">
              <span class="text-subtitle-1 font-weight-bold amber--text text--darken-4">
                ປະຫວັດການສົ່ງອອກ ແລະ ຮັບຄືນບັນຈຸພັນ (Customer Packaging Movement Log)
              </span>
              <v-btn
                color="amber darken-4"
                outlined
                class="rounded-lg font-weight-bold"
                :disabled="isLoading || customerMovements.length === 0"
                @click="printTab(3)"
              >
                <v-icon left small>mdi-printer</v-icon> ພິມລາຍງານ A4
              </v-btn>
            </div>

            <v-data-table
              :headers="movementHeaders"
              :items="customerMovements"
              :loading="isLoading"
              dense
              class="elevation-0 border rounded-lg"
              :items-per-page="10"
            >
              <!-- Date/Time -->
              <template #item.createdAt="{ item }">
                <span class="caption">{{ formatDateTime(item.createdAt) }}</span>
              </template>

              <!-- Client Info -->
              <template #item.clientName="{ item }">
                <div>
                  <span class="font-weight-bold caption">{{ item.clientName }}</span>
                  <span v-if="item.clientCompany" class="grey--text caption d-block">{{ item.clientCompany }}</span>
                </div>
              </template>

              <!-- Transaction Type -->
              <template #item.transactionType="{ item }">
                <v-chip small label :color="getTransactionTypeColor(item.transactionType)" dark class="font-weight-bold">
                  {{ getTransactionTypeLabel(item.transactionType) }}
                </v-chip>
              </template>

              <!-- Packaging Asset -->
              <template #item.packagingName="{ item }">
                <span class="font-weight-medium caption">{{ item.packagingName }}</span>
              </template>

              <!-- Qty Change -->
              <template #item.qtyChange="{ item }">
                <span
                  class="font-weight-bold"
                  :class="item.qtyChange > 0 ? 'amber--text text--darken-4' : 'teal--text text--darken-3'"
                >
                  {{ item.qtyChange > 0 ? '+' : '' }}{{ numberWithCommas(item.qtyChange) }}
                </span>
              </template>

              <!-- Balance After -->
              <template #item.balanceAfter="{ item }">
                <span class="font-weight-black caption">{{ numberWithCommas(item.balanceAfter) }}</span>
              </template>

              <!-- Deposit Amount -->
              <template #item.depositAmount="{ item }">
                <span v-if="Number(item.depositAmount) > 0" class="caption font-weight-bold">
                  {{ numberWithCommas(item.depositAmount) }} ₭
                </span>
                <span v-else class="grey--text">-</span>
              </template>
            </v-data-table>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ExcelJS from 'exceljs'
import {
  printPackingProductsA4,
  printPackagingAssetsA4,
  printCustomerTimelineA4
} from '~/common/packagingOwnerPrintTemplate'

export default {
  name: 'PackagingOwnerSummaryReport',
  layout: 'default',
  middleware: 'auths',
  data() {
    return {
      selectedPreset: 'thisMonth',
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      selectedClientId: 'all',
      selectedLocationId: 'all',
      clientList: [],
      activeTab: 0,
      isLoading: false,
      packingSearch: '',
      fetchedCompany: null,

      // Report Data from API
      customerProfile: null,
      kpiData: {
        revenueByCurrency: [],
        totalPaidCases: 0,
        totalFocCases: 0,
        totalCasesSold: 0,
        totalDispatchedCrates: 0,
        totalDispatchedBottles: 0,
        totalPackagingSoldAmount: 0,
        totalPackagingSoldQty: 0,
        totalPackagingBoughtAmount: 0,
        totalPackagingBoughtQty: 0,
        netPackagingCash: 0,
        wholesaleReturnedCrates: 0,
        wholesaleReturnedBottles: 0,
        totalEmptiesRecoveredUnits: 0,
        recoveryRatePercent: 0
      },
      packingProducts: [],
      packagingProducts: [],
      customerMovements: [],

      // Table Headers
      packingHeaders: [
        { text: 'ສິນຄ້າ (Product)', value: 'productName', width: '260px' },
        { text: 'ຂາຍ (Paid Cases)', value: 'paidQty', align: 'right', width: '130px' },
        { text: 'ແຖມ (FOC Cases)', value: 'focQty', align: 'right', width: '130px' },
        { text: 'ລວມລັງຂາຍ (Total Cases)', value: 'totalCases', align: 'right', width: '150px' },
        { text: 'ຍອດຂາຍ (Revenue)', value: 'totalSales', align: 'right', width: '160px' },
        { text: 'ລັງທີ່ຈ່າຍອອກ (Crates Out)', value: 'dispatchedCrates', align: 'right', width: '150px' },
        { text: 'ແກ້ວທີ່ຈ່າຍອອກ (Bottles Out)', value: 'dispatchedBottles', align: 'right', width: '150px' }
      ],
      packagingHeaders: [
        { text: 'ບັນຈຸພັນ (Packaging Asset)', value: 'productName', width: '260px' },
        { text: 'ຂາຍ/ມັດຈຳ (Sold Qty)', value: 'soldQty', align: 'right', width: '140px' },
        { text: 'ຍອດຂາຍ/ມັດຈຳ (Sold Amount)', value: 'soldAmount', align: 'right', width: '170px' },
        { text: 'ຮັບຊື້/ຄືນ (Bought Qty)', value: 'boughtQty', align: 'right', width: '140px' },
        { text: 'ຈ່າຍຄືນ (Refunded Amount)', value: 'boughtAmount', align: 'right', width: '170px' },
        { text: 'ສ່ວນຕ່າງຈຳນວນ (Net Qty)', value: 'netQty', align: 'center', width: '140px' },
        { text: 'ກະແສເງິນສຸດທິ (Net Cash)', value: 'netAmount', align: 'right', width: '170px' }
      ],
      movementHeaders: [
        { text: 'ວັນທີ/ເວລາ', value: 'createdAt', width: '140px' },
        { text: 'ລູກຄ້າ', value: 'clientName', width: '180px' },
        { text: 'ປະເພດທຸລະກຳ', value: 'transactionType', width: '150px' },
        { text: 'ບັນຈຸພັນ', value: 'packagingName', width: '160px' },
        { text: 'ຈຳນວນປ່ຽນແປງ', value: 'qtyChange', align: 'right', width: '130px' },
        { text: 'ຍອດໜີ້ສະສົມ', value: 'balanceAfter', align: 'right', width: '120px' },
        { text: 'ຄ່າມັດຈຳ', value: 'depositAmount', align: 'right', width: '130px' },
        { text: 'ໝາຍເຫດ', value: 'notes' }
      ]
    }
  },
  computed: {
    ...mapGetters(['findAllLocation', 'findAllCompany']),

    companyInfo() {
      const list = this.findAllCompany || []
      if (list.length > 0) {
        return list[0]
      }
      return this.fetchedCompany || {}
    },

    companyLogoUrl() {
      const comp = this.companyInfo
      if (!comp) return ''
      const baseUrl = (this.$axios?.defaults?.baseURL || '').replace(/\/api\/?$/, '').replace(/\/+$/, '')
      const path = comp.profile_image_path || comp.logo || comp.imageUrl || comp.companyLogo || comp.ticketLogo
      if (!path || path === 'default-logo.png' || path === 'default-logo.jpg') return ''
      if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:image') || path.startsWith('blob:')) {
        return path
      }
      return `${baseUrl}/${path.replace(/^\//, '')}`
    },

    locationOptions() {
      return [
        { id: 'all', name: '🏢 ທຸກສາຂາ/ສາງ (All Locations)' },
        ...(this.findAllLocation || []).map(l => ({ id: l.id, name: l.name }))
      ]
    },

    clientOptions() {
      return [
        { id: 'all', name: '👥 ທຸກລູກຄ້າ / All Customers Summary', displayName: '👥 ທຸກລູກຄ້າ (All Customers Summary)' },
        { id: 'retail', name: '🛒 ລູກຄ້າຍ່ອຍໜ້າຮ້ານ (Walk-in Retail POS)', displayName: '🛒 ລູກຄ້າຍ່ອຍໜ້າຮ້ານ (Walk-in Retail POS)' },
        ...this.clientList
      ]
    },

    formatMainRevenue() {
      const lakRev = this.kpiData.revenueByCurrency?.find(r => r.currencyCode === 'LAK')
      if (lakRev) {
        return `${this.numberWithCommas(lakRev.totalAmount)} ₭`
      }
      if (this.kpiData.revenueByCurrency?.length > 0) {
        const first = this.kpiData.revenueByCurrency[0]
        return `${this.numberWithCommas(first.totalAmount)} ${first.currencySymbol || first.currencyCode}`
      }
      return '0 ₭'
    }
  },
  async created() {
    await Promise.all([
      this.fetchCompanyDetails(),
      this.fetchClients(),
      this.fetchReport()
    ])
  },
  methods: {
    async fetchCompanyDetails() {
      if (this.findAllCompany && this.findAllCompany.length > 0) {
        return
      }
      try {
        const res = await this.$axios.get('/api/public/company/findAll')
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          this.$store.commit('setCompanyList', res.data)
          this.fetchedCompany = res.data[0]
        }
      } catch (err) {
        // non-blocking
      }
    },

    numberWithCommas(val) {
      if (val === undefined || val === null || isNaN(val)) return '0'
      const num = Number(val)
      return num.toLocaleString('en-US')
    },

    formatDateTime(dt) {
      if (!dt) return '-'
      return dt.replace('T', ' ').substr(0, 16)
    },

    setPreset(preset) {
      this.selectedPreset = preset
      const now = new Date()
      if (preset === 'today') {
        const str = now.toISOString().substr(0, 10)
        this.startDate = str
        this.endDate = str
      } else if (preset === 'yesterday') {
        const y = new Date(now)
        y.setDate(y.getDate() - 1)
        const str = y.toISOString().substr(0, 10)
        this.startDate = str
        this.endDate = str
      } else if (preset === 'thisWeek') {
        const day = now.getDay() || 7
        const monday = new Date(now)
        monday.setDate(monday.getDate() - day + 1)
        this.startDate = monday.toISOString().substr(0, 10)
        this.endDate = now.toISOString().substr(0, 10)
      } else if (preset === 'thisMonth') {
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
        this.startDate = firstDay.toISOString().substr(0, 10)
        this.endDate = now.toISOString().substr(0, 10)
      }
      this.fetchReport()
    },

    getTransactionTypeColor(type) {
      switch (type) {
        case 'DELIVERED_OUT': return 'amber darken-3'
        case 'RETURNED_IN': return 'teal darken-2'
        case 'PAID_DEPOSIT': return 'indigo'
        case 'REFUNDED_DEPOSIT': return 'blue'
        case 'WRITE_OFF': return 'red'
        default: return 'grey'
      }
    },

    getTransactionTypeLabel(type) {
      switch (type) {
        case 'DELIVERED_OUT': return 'ສົ່ງອອກ (ຕິດໜີ້)'
        case 'RETURNED_IN': return 'ຮັບຄືນ (ຕັດໜີ້)'
        case 'PAID_DEPOSIT': return 'ຈ່າຍມັດຈຳ'
        case 'REFUNDED_DEPOSIT': return 'ຄືນມັດຈຳ'
        case 'WRITE_OFF': return 'ຕັດສູນ'
        default: return type
      }
    },

    async fetchClients() {
      try {
        const res = await this.$axios.get('/api/client/find')
        const raw = Array.isArray(res.data) ? res.data : (res.data?.rows || [])
        this.clientList = raw.map(c => ({
          id: c.id,
          name: c.name,
          company: c.company,
          telephone: c.telephone,
          displayName: `${c.name || ''} ${c.company ? '- ' + c.company : ''} (${c.telephone || 'ບໍ່ມີເບີ'})`
        }))
      } catch (err) {
        console.error('Failed to load client list:', err)
      }
    },

    async fetchReport() {
      this.isLoading = true
      try {
        const params = {
          startDate: this.startDate,
          endDate: this.endDate,
          locationId: this.selectedLocationId,
          clientId: this.selectedClientId
        }

        const res = await this.$axios.get('/api/packaging/reports/owner-sales-summary', { params })
        if (res.data?.success && res.data.data) {
          const d = res.data.data
          this.customerProfile = d.customerProfile
          this.kpiData = d.kpi || this.kpiData
          this.packingProducts = d.packingProducts || []
          this.packagingProducts = d.packagingProducts || []
          this.customerMovements = d.customerMovements || []
        }
      } catch (err) {
        if (this.$toast) {
          this.$toast.error('ບໍ່ສາມາດໂຫຼດລາຍງານໄດ້: ' + (err.response?.data?.message || err.message))
        }
      } finally {
        this.isLoading = false
      }
    },

    printTab(tabIndex) {
      const selectedClientObj = this.clientOptions.find(c => c.id === this.selectedClientId)
      const clientLabel = selectedClientObj ? selectedClientObj.displayName : 'ທຸກລູກຄ້າ'

      const selectedLocObj = this.locationOptions.find(l => l.id === this.selectedLocationId)
      const locationLabel = selectedLocObj ? selectedLocObj.name : 'ທຸກສາຂາ/ສາງ'

      const company = {
        name: this.companyInfo?.name || 'ຕົວແທນຈຳໜ່າຍ ເບຍລາວ / Beerlao Agency',
        tel: this.companyInfo?.tel || this.companyInfo?.telephone || '',
        address: this.companyInfo?.address || '',
        taxId: this.companyInfo?.taxId || '',
        logoUrl: this.companyLogoUrl,
        ...this.companyInfo
      }

      const user = this.$store?.state?.auth?.user || {
        name: this.$auth?.user?.name || 'Admin'
      }

      const baseParams = {
        companyData: company,
        user,
        clientLabel,
        locationLabel,
        startDate: this.startDate,
        endDate: this.endDate,
        kpiData: this.kpiData
      }

      if (tabIndex === 1) {
        printPackingProductsA4({
          ...baseParams,
          packingProducts: this.packingProducts
        })
      } else if (tabIndex === 2) {
        printPackagingAssetsA4({
          ...baseParams,
          packagingProducts: this.packagingProducts
        })
      } else if (tabIndex === 3) {
        printCustomerTimelineA4({
          ...baseParams,
          customerProfile: this.customerProfile,
          customerMovements: this.customerMovements
        })
      }
    },

    async exportToExcel() {
      try {
        const workbook = new ExcelJS.Workbook()
        workbook.creator = 'Beerlao Agency System'
        workbook.created = new Date()

        const selectedClientObj = this.clientOptions.find(c => c.id === this.selectedClientId)
        const clientLabel = selectedClientObj ? selectedClientObj.displayName : 'ທັງໝົດ'

        // ==========================================
        // SHEET 1: PACKING PRODUCTS (FULL BEER CASES)
        // ==========================================
        const sheet1 = workbook.addWorksheet('Packing Products Sales')

        // Title Rows
        const titleRow1 = sheet1.addRow(['ລາຍງານການຂາຍສິນຄ້າທີ່ບັນຈຸ (ເບຍເຕັມລັງ) / Packing Products Sales Report'])
        titleRow1.font = { size: 14, bold: true, color: { argb: 'FFB45309' } }
        sheet1.addRow([`ລູກຄ້າ: ${clientLabel}`, `ຊ່ວງວັນທີ: ${this.startDate} ຫາ ${this.endDate}`])
        sheet1.addRow([`ວັນທີພິມ: ${new Date().toLocaleString('en-GB')}`])
        sheet1.addRow([])

        // Header Row
        const h1 = sheet1.addRow([
          'ລ/ດ',
          'ຊື່ສິນຄ້າ (Product Name)',
          'ບາໂຄ້ດ (Barcode)',
          'ຈຳນວນຂາຍ (Paid Cases)',
          'ຈຳນວນແຖມ (FOC Promo)',
          'ລວມລັງຂາຍ (Total Cases)',
          'ຍອດຂາຍ (Revenue)',
          'ສະກຸນເງິນ (CCY)',
          'ລັງທີ່ຈ່າຍອອກ (Crates Dispatched)',
          'ແກ້ວທີ່ຈ່າຍອອກ (Bottles Dispatched)'
        ])
        h1.font = { bold: true, color: { argb: 'FFFFFFFF' } }
        h1.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFB45309' } }

        this.packingProducts.forEach((p, idx) => {
          sheet1.addRow([
            idx + 1,
            p.productName,
            p.barCode || '',
            p.paidQty,
            p.focQty,
            p.totalCases,
            p.totalSales,
            p.currencyCode,
            p.dispatchedCrates,
            p.dispatchedBottles
          ])
        })

        // Total Row
        const tot1 = sheet1.addRow([
          'ລວມທັງໝົດ',
          '',
          '',
          this.kpiData.totalPaidCases,
          this.kpiData.totalFocCases,
          this.kpiData.totalCasesSold,
          this.kpiData.revenueByCurrency?.[0]?.totalAmount || 0,
          'LAK',
          this.kpiData.totalDispatchedCrates,
          this.kpiData.totalDispatchedBottles
        ])
        tot1.font = { bold: true }
        tot1.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFDE68A' } }

        // ==========================================
        // SHEET 2: PACKAGING ASSETS (CRATES / BOTTLES)
        // ==========================================
        const sheet2 = workbook.addWorksheet('Packaging Assets Activity')

        const titleRow2 = sheet2.addRow(['ລາຍງານການຊື້-ຂາຍ ແລະ ຄືນມັດຈຳບັນຈຸພັນ / Packaging Assets Sales & Buy-backs'])
        titleRow2.font = { size: 14, bold: true, color: { argb: 'FF0F766E' } }
        sheet2.addRow([`ລູກຄ້າ: ${clientLabel}`, `ຊ່ວງວັນທີ: ${this.startDate} ຫາ ${this.endDate}`])
        sheet2.addRow([])

        const h2 = sheet2.addRow([
          'ລ/ດ',
          'ຊື່ບັນຈຸພັນ (Packaging Asset)',
          'ບາໂຄ້ດ (Barcode)',
          'ຂາຍ/ມັດຈຳ (Sold Qty)',
          'ຍອດຂາຍ/ມັດຈຳ (Sold Amount LAK)',
          'ຮັບຊື້/ຄືນ (Bought Qty)',
          'ຈ່າຍຄືນ (Refunded Amount LAK)',
          'ສ່ວນຕ່າງຈຳນວນ (Net Qty)',
          'ກະແສເງິນສຸດທິ (Net Cash LAK)'
        ])
        h2.font = { bold: true, color: { argb: 'FFFFFFFF' } }
        h2.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0F766E' } }

        this.packagingProducts.forEach((p, idx) => {
          sheet2.addRow([
            idx + 1,
            p.productName,
            p.barCode || '',
            p.soldQty,
            p.soldAmount,
            p.boughtQty,
            p.boughtAmount,
            p.netQty,
            p.netAmount
          ])
        })

        const tot2 = sheet2.addRow([
          'ລວມທັງໝົດ',
          '',
          '',
          this.kpiData.totalPackagingSoldQty,
          this.kpiData.totalPackagingSoldAmount,
          this.kpiData.totalPackagingBoughtQty,
          this.kpiData.totalPackagingBoughtAmount,
          this.kpiData.totalPackagingSoldQty - this.kpiData.totalPackagingBoughtQty,
          this.kpiData.netPackagingCash
        ])
        tot2.font = { bold: true }
        tot2.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFCCFBF1' } }

        // Auto width for columns
        const allSheets = [sheet1, sheet2]
        allSheets.forEach(ws => {
          ws.columns.forEach(col => {
            let maxLen = 12
            col.eachCell({ includeEmpty: true }, cell => {
              const val = cell.value ? String(cell.value) : ''
              if (val.length > maxLen) maxLen = Math.min(val.length + 3, 40)
            })
            col.width = maxLen
          })
        })

        // Download file
        const buffer = await workbook.xlsx.writeBuffer()
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `Beerlao_Owner_Packaging_Sales_Report_${this.startDate}_to_${this.endDate}.xlsx`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      } catch (err) {
        console.error('Error generating Excel file:', err)
        alert('ບໍ່ສາມາດສ້າງໄຟລ໌ Excel ໄດ້: ' + err.message)
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700;800;900&display=swap');

* {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
.border {
  border: 1px solid #e0e0e0 !important;
}
.border-bottom {
  border-bottom: 1px solid #e0e0e0 !important;
}
.border-amber {
  border: 1px solid #ffe082 !important;
}
.border-blue {
  border: 1px solid #bbdefb !important;
}
.border-indigo {
  border: 1px solid #c5cae9 !important;
}
.border-teal {
  border: 1px solid #b2dfdb !important;
}
.border-green {
  border: 1px solid #a7f3d0 !important;
}
.border-orange {
  border: 1px solid #fed7aa !important;
}
.border-purple {
  border: 1px solid #e9d5ff !important;
}
</style>
