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
          <template v-if="customerProfile.balances && customerProfile.balances.length > 0">
            <div
              v-for="bal in customerProfile.balances"
              :key="bal.packagingProductId"
              class="mr-3 mb-1 text-right"
            >
              <span class="caption grey--text text--darken-2 font-weight-bold d-block">
                ໜີ້ຄ້າງ {{ bal.packagingName }}:
              </span>
              <v-chip
                :color="bal.balanceOwed > 0 ? 'amber darken-3' : 'teal darken-2'"
                dark
                label
                class="font-weight-black text-body-2"
              >
                <v-icon x-small left>{{ getPackagingIcon(bal.packagingName) }}</v-icon>
                {{ numberWithCommas(bal.balanceOwed) }}
              </v-chip>
            </div>
          </template>
          <template v-else>
            <div v-if="customerProfile.currentCratesOwed" class="mr-3 text-right">
              <span class="caption grey--text text--darken-2 font-weight-bold d-block">ຍອດໜີ້ຄ້າງສົ່ງ:</span>
              <v-chip color="amber darken-3" dark label class="font-weight-black text-body-2">
                <v-icon x-small left>mdi-cube-outline</v-icon>
                {{ numberWithCommas(customerProfile.currentCratesOwed) }}
              </v-chip>
            </div>
            <div v-if="customerProfile.currentBottlesOwed" class="text-right">
              <span class="caption grey--text text--darken-2 font-weight-bold d-block">ຍອດໜີ້ຄ້າງສົ່ງ:</span>
              <v-chip color="teal darken-2" dark label class="font-weight-black text-body-2">
                <v-icon x-small left>mdi-glass-mug-variant</v-icon>
                {{ numberWithCommas(customerProfile.currentBottlesOwed) }}
              </v-chip>
            </div>
          </template>
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

      <!-- KPI 2: Total Packing Products Sold & Promo FOC -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4 rounded-xl elevation-2 h-100 blue lighten-5 border-blue d-flex flex-column justify-space-between" outlined>
          <div>
            <div class="d-flex justify-space-between align-start">
              <div>
                <span class="caption grey--text text--darken-2 font-weight-bold">ສິນຄ້າທີ່ຂາຍ + ແຖມ (Packing Products)</span>
                <div class="text-h5 font-weight-black blue--text text--darken-4 mt-1">
                  {{ numberWithCommas(kpiData.totalCasesSold) }}
                </div>
                <div class="caption blue--text text--darken-3 font-weight-bold mt-1">
                  ຂາຍ: {{ numberWithCommas(kpiData.totalPaidCases) }} | ແຖມ FOC: {{ numberWithCommas(kpiData.totalFocCases) }}
                </div>
              </div>
              <v-avatar color="blue darken-2" size="40">
                <v-icon color="white">mdi-package-variant</v-icon>
              </v-avatar>
            </div>

            <!-- Compact Breakdown of Top Packing Products -->
            <div v-if="packingProducts.length > 0" class="mt-2 pt-1 border-top-dashed">
              <div
                v-for="(p, idx) in packingProducts.slice(0, 2)"
                :key="'kpi-pack-' + idx"
                class="caption d-flex justify-space-between text-truncate grey--text text--darken-3"
                style="max-width: 220px;"
              >
                <span class="text-truncate mr-1">• {{ p.productName }}</span>
                <span class="font-weight-bold blue--text text--darken-3">{{ numberWithCommas(p.totalCases) }}</span>
              </div>
              <div v-if="packingProducts.length > 2" class="caption grey--text font-italic">
                + ອີກ {{ packingProducts.length - 2 }} ລາຍການ...
              </div>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- KPI 3: Packaging Sold / Deposits Charged (Stock OUT -) -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4 rounded-xl elevation-2 h-100 indigo lighten-5 border-indigo d-flex flex-column justify-space-between" outlined>
          <div>
            <div class="d-flex justify-space-between align-start">
              <div>
                <span class="caption grey--text text--darken-2 font-weight-bold">ຂາຍບັນຈຸພັນ / ຮັບມັດຈຳ (Stock Out)</span>
                <div class="text-h5 font-weight-black indigo--text text--darken-4 mt-1">
                  {{ numberWithCommas(kpiData.totalPackagingSoldAmount) }}
                  <span class="text-caption font-weight-medium grey--text text--darken-2">₭</span>
                </div>
                <div class="caption indigo--text text--darken-3 font-weight-bold mt-1">
                  ຈຳນວນຈ່າຍອອກ:
                  <span class="font-weight-black font-weight-bold red--text text--darken-3">
                    {{ kpiData.totalPackagingSoldQty > 0 ? '-' : '' }}{{ numberWithCommas(kpiData.totalPackagingSoldQty) }}
                  </span>
                  ໜ່ວຍ
                </div>
              </div>
              <v-avatar color="indigo darken-2" size="40">
                <v-icon color="white">mdi-cart-arrow-right</v-icon>
              </v-avatar>
            </div>

            <!-- Breakdown Count per Packaging Product Sold -->
            <div v-if="packagingProducts.length > 0" class="mt-2 pt-1 border-top-dashed">
              <div
                v-for="p in packagingProducts"
                :key="'sold-kpi-' + p.productId"
                class="caption d-flex justify-space-between text-truncate indigo--text text--darken-4 py-0"
                style="max-width: 220px;"
              >
                <span class="text-truncate mr-1">• {{ p.productName }}</span>
                <span class="font-weight-bold">
                  {{ p.soldQty > 0 ? '-' : '' }}{{ numberWithCommas(p.soldQty) }}
                </span>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- KPI 4: Packaging Bought Back / Deposits Refunded (Stock IN +) -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4 rounded-xl elevation-2 h-100 teal lighten-5 border-teal d-flex flex-column justify-space-between" outlined>
          <div>
            <div class="d-flex justify-space-between align-start">
              <div>
                <span class="caption grey--text text--darken-2 font-weight-bold">ຮັບຊື້ບັນຈຸພັນ / ຄືນມັດຈຳ (Stock In)</span>
                <div class="text-h5 font-weight-black teal--text text--darken-4 mt-1">
                  {{ numberWithCommas(kpiData.totalPackagingBoughtAmount) }}
                  <span class="text-caption font-weight-medium grey--text text--darken-2">₭</span>
                </div>
                <div class="caption teal--text text--darken-3 font-weight-bold mt-1">
                  ຈຳນວນຮັບຄືນ:
                  <span class="font-weight-black font-weight-bold teal--text text--darken-4">
                    {{ kpiData.totalPackagingBoughtQty > 0 ? '+' : '' }}{{ numberWithCommas(kpiData.totalPackagingBoughtQty) }}
                  </span>
                  ໜ່ວຍ
                </div>
              </div>
              <v-avatar color="teal darken-2" size="40">
                <v-icon color="white">mdi-keyboard-return</v-icon>
              </v-avatar>
            </div>

            <!-- Breakdown Count per Packaging Product Bought -->
            <div v-if="packagingProducts.length > 0" class="mt-2 pt-1 border-top-dashed">
              <div
                v-for="p in packagingProducts"
                :key="'bought-kpi-' + p.productId"
                class="caption d-flex justify-space-between text-truncate teal--text text--darken-4 py-0"
                style="max-width: 220px;"
              >
                <span class="text-truncate mr-1">• {{ p.productName }}</span>
                <span class="font-weight-bold">
                  {{ p.boughtQty > 0 ? '+' : '' }}{{ numberWithCommas(p.boughtQty) }}
                </span>
              </div>
            </div>
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
                  (ເກັບຄືນ {{ numberWithCommas(kpiData.totalEmptiesRecoveredUnits) }} / ຈ່າຍອອກທັງໝົດ {{ numberWithCommas(kpiData.totalDispatchedCrates + kpiData.totalDispatchedBottles) }} ໜ່ວຍ)
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

    <!-- Dedicated Packaging Product Breakdown Section in Summary Header -->
    <v-card outlined class="pa-4 mb-4 rounded-xl elevation-1 bg-gradient-breakdown">
      <div class="d-flex justify-space-between align-center mb-3 flex-wrap">
        <div class="d-flex align-center">
          <v-avatar size="36" color="teal darken-3" class="mr-3 elevation-1">
            <v-icon color="white">mdi-format-list-bulleted-type</v-icon>
          </v-avatar>
          <div>
            <div class="text-subtitle-1 font-weight-black primary--text d-flex align-center flex-wrap">
              <span>ສະຫຼຸບຈຳນວນບັນຈຸພັນແຍກຕາມແຕ່ລະສິນຄ້າ (Packaging Breakdown by Product)</span>
              <v-chip x-small color="teal darken-2" dark class="ml-2 font-weight-bold">
                {{ packagingProducts.length }} ລາຍການບັນຈຸພັນ
              </v-chip>
            </div>
            <span class="caption grey--text text--darken-2">
              ລາຍລະອຽດຈຳນວນຂາຍ/ຈ່າຍອອກ (-) ແລະ ຮັບຊື້/ຮັບຄືນ (+) ຂອງແຕ່ລະບັນຈຸພັນ ພ້ອມດຸນດ່ຽງສາງ ແລະ ກະແສເງິນ
            </span>
          </div>
        </div>

        <div class="d-flex align-center caption grey--text text--darken-2 my-1">
          <v-chip x-small outlined color="indigo" class="mr-2 font-weight-bold">
            <v-icon x-small left>mdi-cart-arrow-right</v-icon> ຂາຍ/ຈ່າຍອອກ: ສິນຄ້າອອກ (-)
          </v-chip>
          <v-chip x-small outlined color="teal" class="font-weight-bold">
            <v-icon x-small left>mdi-keyboard-return</v-icon> ຮັບຊື້/ຮັບຄືນ: ສິນຄ້າເຂົ້າ (+)
          </v-chip>
        </div>
      </div>

      <!-- Breakdown Grid Cards for Each Packaging Product -->
      <v-row v-if="packagingProducts.length > 0" dense>
        <v-col
          v-for="item in packagingProducts"
          :key="'summary-card-' + item.productId"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            outlined
            class="pa-3 rounded-lg fill-height d-flex flex-column justify-space-between border-item-card"
          >
            <div>
              <!-- Product Title & Barcode -->
              <div class="d-flex align-center justify-space-between mb-2">
                <div class="d-flex align-center text-truncate mr-2">
                  <v-avatar size="30" color="teal lighten-5" class="mr-2">
                    <v-icon small color="teal darken-2">{{ getPackagingIcon(item.productName) }}</v-icon>
                  </v-avatar>
                  <div class="text-truncate">
                    <div class="font-weight-black text-body-2 text-truncate primary--text" :title="item.productName">
                      {{ item.productName }}
                    </div>
                    <span class="caption grey--text text-truncate">{{ item.barCode || item.categoryName || 'ບັນຈຸພັນ' }}</span>
                  </div>
                </div>
              </div>

              <v-divider class="my-2"></v-divider>

              <!-- Out vs In Qty & Amount Rows -->
              <div class="d-flex justify-space-between align-center py-1">
                <span class="caption indigo--text text--darken-3 font-weight-medium">
                  <v-icon x-small color="indigo">mdi-cart-arrow-right</v-icon> ຂາຍ/ຈ່າຍອອກ:
                </span>
                <div class="text-right">
                  <span class="font-weight-black indigo--text text--darken-4">
                    {{ item.soldQty > 0 ? '-' : '' }}{{ numberWithCommas(item.soldQty) }}
                  </span>
                  <span class="caption grey--text text--darken-1 d-block" style="font-size: 10px !important;">
                    {{ numberWithCommas(item.soldAmount) }} ₭
                  </span>
                </div>
              </div>

              <div class="d-flex justify-space-between align-center py-1">
                <span class="caption teal--text text--darken-3 font-weight-medium">
                  <v-icon x-small color="teal">mdi-keyboard-return</v-icon> ຮັບຊື້/ຮັບຄືນ:
                </span>
                <div class="text-right">
                  <span class="font-weight-black teal--text text--darken-4">
                    {{ item.boughtQty > 0 ? '+' : '' }}{{ numberWithCommas(item.boughtQty) }}
                  </span>
                  <span class="caption grey--text text--darken-1 d-block" style="font-size: 10px !important;">
                    {{ numberWithCommas(item.boughtAmount) }} ₭
                  </span>
                </div>
              </div>
            </div>

            <!-- Net Movement & Cash Footer -->
            <div class="pt-2 mt-2 border-top">
              <div class="d-flex justify-space-between align-center">
                <span class="caption grey--text text--darken-2 font-weight-bold">ດຸນດ່ຽງສາງ:</span>
                <v-chip
                  x-small
                  label
                  :color="(item.boughtQty - item.soldQty) > 0 ? 'teal lighten-4' : ((item.boughtQty - item.soldQty) < 0 ? 'orange lighten-4' : 'grey lighten-3')"
                  :class="(item.boughtQty - item.soldQty) > 0 ? 'teal--text text--darken-4' : ((item.boughtQty - item.soldQty) < 0 ? 'orange--text text--darken-4' : 'grey--text')"
                  class="font-weight-black"
                >
                  {{ (item.boughtQty - item.soldQty) > 0 ? '+' : '' }}{{ numberWithCommas(item.boughtQty - item.soldQty) }}
                </v-chip>
              </div>
              <div class="d-flex justify-space-between align-center mt-1">
                <span class="caption grey--text text--darken-2 font-weight-bold">ກະແສເງິນສຸດທິ:</span>
                <span
                  class="caption font-weight-black"
                  :class="(item.soldAmount - item.boughtAmount) >= 0 ? 'green--text text--darken-3' : 'orange--text text--darken-3'"
                >
                  {{ (item.soldAmount - item.boughtAmount) >= 0 ? '+' : '' }}{{ numberWithCommas(item.soldAmount - item.boughtAmount) }} ₭
                </span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <div v-else class="text-center py-4 grey--text">
        <v-icon large color="grey lighten-1">mdi-package-variant-closed</v-icon>
        <div class="caption mt-1">ບໍ່ມີຂໍ້ມູນການຊື້-ຂາຍບັນຈຸພັນໃນຊ່ວງເວລານີ້</div>
      </div>
    </v-card>

    <!-- Main Content Tabs -->
    <v-card outlined class="rounded-xl elevation-1 overflow-hidden">
      <v-tabs v-model="activeTab" background-color="grey lighten-4" color="primary" slider-color="primary" class="border-bottom">
        <v-tab href="#tab-packing" class="font-weight-bold text-subtitle-2 px-4">
          <v-icon left small>mdi-glass-mug-variant</v-icon>
          1. ສິນຄ້າທີ່ບັນຈຸ (Packing Products - Full Cases)
          <v-chip x-small class="ml-2 font-weight-black" color="primary" dark>{{ packingProducts.length }}</v-chip>
        </v-tab>
        <v-tab href="#tab-packaging" class="font-weight-bold text-subtitle-2 px-4">
          <v-icon left small>mdi-cube-outline</v-icon>
          2. ສິນຄ້າບັນຈຸພັນ (Packaging Products - Empty Assets)
          <v-chip x-small class="ml-2 font-weight-black" color="teal darken-2" dark>{{ packagingProducts.length }}</v-chip>
        </v-tab>
        <v-tab href="#tab-timeline" class="font-weight-bold text-subtitle-2 px-4">
          <v-icon left small>mdi-history</v-icon>
          3. ປະຫວັດການເຄື່ອນໄຫວລູກຄ້າ (Movement Timeline)
          <v-chip x-small class="ml-2 font-weight-black" color="amber darken-3" dark>{{ customerMovements.length }}</v-chip>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="activeTab" :touchless="true">
        <!-- TAB 1: PACKING PRODUCTS (FULL BEER CASES) -->
        <v-tab-item value="tab-packing">
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
        <v-tab-item value="tab-packaging">
          <div class="pa-4">
            <div class="d-flex justify-space-between align-center mb-3 flex-wrap">
              <span class="text-subtitle-1 font-weight-bold teal--text text--darken-3">
                ລາຍລະອຽດການຊື້-ຂາຍ ແລະ ຄືນມັດຈຳສິນຄ້າບັນຈຸພັນ (Packaging Products - Assets Activity)
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
                      {{ getPackagingIcon(item.productName) }}
                    </v-icon>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold text-caption">{{ item.productName }}</div>
                    <span class="text-caption grey--text">{{ item.barCode || item.categoryName || '-' }}</span>
                  </div>
                </div>
              </template>

              <!-- Sold Qty (Stock OUT -) -->
              <template #item.soldQty="{ item }">
                <span class="font-weight-bold indigo--text text--darken-3">
                  {{ item.soldQty > 0 ? '-' : '' }}{{ numberWithCommas(item.soldQty) }}
                </span>
              </template>

              <!-- Sold Amount -->
              <template #item.soldAmount="{ item }">
                <span class="font-weight-bold indigo--text text--darken-4">
                  {{ numberWithCommas(item.soldAmount) }} ₭
                </span>
              </template>

              <!-- Bought Qty (Stock IN +) -->
              <template #item.boughtQty="{ item }">
                <span class="font-weight-bold teal--text text--darken-3">
                  {{ item.boughtQty > 0 ? '+' : '' }}{{ numberWithCommas(item.boughtQty) }}
                </span>
              </template>

              <!-- Bought Amount -->
              <template #item.boughtAmount="{ item }">
                <span class="font-weight-bold teal--text text--darken-4">
                  {{ numberWithCommas(item.boughtAmount) }} ₭
                </span>
              </template>

              <!-- Net Stock Delta: Stock In (+) minus Stock Out (-) -->
              <template #item.netQty="{ item }">
                <v-chip
                  small
                  label
                  :color="(item.boughtQty - item.soldQty) > 0 ? 'teal lighten-4' : ((item.boughtQty - item.soldQty) < 0 ? 'orange lighten-4' : 'grey lighten-3')"
                  :class="(item.boughtQty - item.soldQty) > 0 ? 'teal--text text--darken-4' : ((item.boughtQty - item.soldQty) < 0 ? 'orange--text text--darken-4' : 'grey--text')"
                  class="font-weight-bold"
                >
                  {{ (item.boughtQty - item.soldQty) > 0 ? '+' : '' }}{{ numberWithCommas(item.boughtQty - item.soldQty) }}
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
                  <td class="text-right indigo--text text--darken-3 font-weight-bold">
                    {{ kpiData.totalPackagingSoldQty > 0 ? '-' : '' }}{{ numberWithCommas(kpiData.totalPackagingSoldQty) }}
                  </td>
                  <td class="text-right indigo--text text--darken-4">{{ numberWithCommas(kpiData.totalPackagingSoldAmount) }} ₭</td>
                  <td class="text-right teal--text text--darken-3 font-weight-bold">
                    {{ kpiData.totalPackagingBoughtQty > 0 ? '+' : '' }}{{ numberWithCommas(kpiData.totalPackagingBoughtQty) }}
                  </td>
                  <td class="text-right teal--text text--darken-4">{{ numberWithCommas(kpiData.totalPackagingBoughtAmount) }} ₭</td>
                  <td class="text-center font-weight-black">
                    <v-chip
                      small
                      label
                      :color="(kpiData.totalPackagingBoughtQty - kpiData.totalPackagingSoldQty) > 0 ? 'teal lighten-4' : ((kpiData.totalPackagingBoughtQty - kpiData.totalPackagingSoldQty) < 0 ? 'orange lighten-4' : 'grey lighten-3')"
                      :class="(kpiData.totalPackagingBoughtQty - kpiData.totalPackagingSoldQty) > 0 ? 'teal--text text--darken-4' : ((kpiData.totalPackagingBoughtQty - kpiData.totalPackagingSoldQty) < 0 ? 'orange--text text--darken-4' : 'grey--text')"
                      class="font-weight-black"
                    >
                      {{ (kpiData.totalPackagingBoughtQty - kpiData.totalPackagingSoldQty) > 0 ? '+' : '' }}{{ numberWithCommas(kpiData.totalPackagingBoughtQty - kpiData.totalPackagingSoldQty) }}
                    </v-chip>
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
        <v-tab-item value="tab-timeline">
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

            <v-alert
              v-if="selectedClientId === 'retail'"
              type="info"
              outlined
              dense
              class="rounded-lg caption mb-3"
            >
              ລູກຄ້າທົ່ວໄປ (Retail Walk-in) ຊື້-ຂາຍເງິນສົດໜ້າຮ້ານ ແລະ ບໍ່ມີບັນຊີໜີ້ສິນຄ້າບັນຈຸພັນຄ້າງ.
            </v-alert>

            <v-data-table
              :headers="movementHeaders"
              :items="customerMovements"
              item-key="id"
              :loading="isLoading"
              dense
              class="elevation-0 border rounded-lg"
              :items-per-page="10"
              no-data-text="ບໍ່ມີຂໍ້ມູນການເຄື່ອນໄຫວບັນຈຸພັນ (No Movement Records)"
            >
              <template #no-data>
                <div class="pa-6 text-center grey--text">
                  <v-icon large color="grey lighten-1">mdi-clipboard-text-clock-outline</v-icon>
                  <div class="caption mt-2 font-weight-medium">ບໍ່ມີປະຫວັດການເຄື່ອນໄຫວບັນຈຸພັນຂອງລູກຄ້າໃນຊ່ວງເວລານີ້</div>
                </div>
              </template>
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
      activeTab: 'tab-packing',
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
        { text: 'ບັນຈຸພັນ (Packaging Product)', value: 'productName', width: '260px' },
        { text: 'ຂາຍ/ຈ່າຍອອກ (Sold Out -)', value: 'soldQty', align: 'right', width: '150px' },
        { text: 'ຍອດຂາຍ/ມັດຈຳ (Sold Amount)', value: 'soldAmount', align: 'right', width: '160px' },
        { text: 'ຮັບຊື້/ຮັບຄືນ (Bought In +)', value: 'boughtQty', align: 'right', width: '150px' },
        { text: 'ຈ່າຍຄືນ (Refunded Amount)', value: 'boughtAmount', align: 'right', width: '160px' },
        { text: 'ດຸນດ່ຽງສາງ (Stock Delta)', value: 'netQty', align: 'center', width: '140px' },
        { text: 'ກະແສເງິນສຸດທິ (Net Cash)', value: 'netAmount', align: 'right', width: '160px' }
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
    getPackagingIcon(name) {
      if (!name) return 'mdi-package-variant-closed'
      const lower = name.toLowerCase()
      if (lower.includes('ລັງ') || lower.includes('crate') || lower.includes('box')) return 'mdi-cube-outline'
      if (lower.includes('ແກ້ວ') || lower.includes('ຂວດ') || lower.includes('bottle')) return 'mdi-glass-mug-variant'
      if (lower.includes('ຖັງ') || lower.includes('keg') || lower.includes('barrel') || lower.includes('drum')) return 'mdi-barrel'
      if (lower.includes('ກະຕ່າ') || lower.includes('basket')) return 'mdi-basket-outline'
      if (lower.includes('ພາເລັດ') || lower.includes('pallet')) return 'mdi-pallet'
      return 'mdi-package-variant-closed'
    },

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
          // Deduplicate customer movements by unique id to prevent double rows
          const rawMovements = d.customerMovements || []
          const seenIds = new Set()
          this.customerMovements = rawMovements.filter(m => {
            if (!m) return false
            const key = m.id ? String(m.id) : `${m.createdAt}_${m.clientId}_${m.packagingProductId}_${m.qtyChange}`
            if (seenIds.has(key)) return false
            seenIds.add(key)
            return true
          })
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
          'ບັນຈຸພັນຈ່າຍອອກ (Packaging Out)',
          'ແກ້ວ/ລູກຈ່າຍອອກ (Units Out)'
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
        // SHEET 2: PACKAGING PRODUCTS ACTIVITY
        // ==========================================
        const sheet2 = workbook.addWorksheet('Packaging Products Activity')

        const titleRow2 = sheet2.addRow(['ລາຍງານການຊື້-ຂາຍ ແລະ ຄືນມັດຈຳບັນຈຸພັນ / Packaging Products Sales & Buy-backs'])
        titleRow2.font = { size: 14, bold: true, color: { argb: 'FF0F766E' } }
        sheet2.addRow([`ລູກຄ້າ: ${clientLabel}`, `ຊ່ວງວັນທີ: ${this.startDate} ຫາ ${this.endDate}`])
        sheet2.addRow([])

        const h2 = sheet2.addRow([
          'ລ/ດ',
          'ຊື່ບັນຈຸພັນ (Packaging Product)',
          'ບາໂຄ້ດ (Barcode)',
          'ຂາຍ/ຈ່າຍອອກ (Sold Out -)',
          'ຍອດຂາຍ/ມັດຈຳ (Sold Amount LAK)',
          'ຮັບຊື້/ຮັບຄືນ (Bought In +)',
          'ຈ່າຍຄືນ (Refunded Amount LAK)',
          'ດຸນດ່ຽງສາງ (Stock Delta)',
          'ກະແສເງິນສຸດທິ (Net Cash LAK)'
        ])
        h2.font = { bold: true, color: { argb: 'FFFFFFFF' } }
        h2.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0F766E' } }

        this.packagingProducts.forEach((p, idx) => {
          const stockDelta = (p.boughtQty || 0) - (p.soldQty || 0)
          sheet2.addRow([
            idx + 1,
            p.productName,
            p.barCode || '',
            p.soldQty > 0 ? -p.soldQty : 0,
            p.soldAmount,
            p.boughtQty > 0 ? p.boughtQty : 0,
            p.boughtAmount,
            stockDelta,
            p.netAmount
          ])
        })

        const tot2 = sheet2.addRow([
          'ລວມທັງໝົດ',
          '',
          '',
          this.kpiData.totalPackagingSoldQty > 0 ? -this.kpiData.totalPackagingSoldQty : 0,
          this.kpiData.totalPackagingSoldAmount,
          this.kpiData.totalPackagingBoughtQty > 0 ? this.kpiData.totalPackagingBoughtQty : 0,
          this.kpiData.totalPackagingBoughtAmount,
          (this.kpiData.totalPackagingBoughtQty || 0) - (this.kpiData.totalPackagingSoldQty || 0),
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
.border-top {
  border-top: 1px solid #e2e8f0 !important;
}
.border-top-dashed {
  border-top: 1px dashed #cbd5e1 !important;
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
.bg-gradient-breakdown {
  background: linear-gradient(135deg, #f8fafc 0%, #f0fdfa 100%) !important;
  border: 1.5px solid #ccfbf1 !important;
}
.border-item-card {
  border: 1px solid #e2e8f0 !important;
  background-color: #ffffff !important;
  transition: all 0.2s ease-in-out;
}
.border-item-card:hover {
  border-color: #0d9488 !important;
  box-shadow: 0 4px 12px rgba(13, 148, 136, 0.12) !important;
}

/* Ensure inactive tab items in Vuetify are strictly hidden to prevent simultaneous display */
::v-deep .v-window-item:not(.v-window-item--active) {
  display: none !important;
}
</style>
