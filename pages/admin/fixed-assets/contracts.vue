<template>
  <div class="fixed-assets-container">
    <!-- Header -->
    <v-row class="align-center mb-6">
      <v-col cols="12" sm="8">
        <div class="d-flex align-center mb-1">
          <span class=" text-uppercase tracking-wider text--secondary">Finance</span>
          <v-icon small class="mx-1 text--secondary">mdi-chevron-right</v-icon>
          <span class=" text-uppercase tracking-wider text--secondary">Fixed Assets</span>
          <v-icon small class="mx-1 text--secondary">mdi-chevron-right</v-icon>
          <span class=" text-uppercase tracking-wider primary--text font-weight-bold">Contracts Registry</span>
        </div>
        <h1 class="text-h4 font-weight-black slate-header-text tracking-tight d-flex align-center">
          <v-icon color="primary" class="mr-2" size="36">mdi-card-text-outline</v-icon>
          ທະບຽນຊັບສິນຄົງທີ່ (Asset Registry)
        </h1>
      </v-col>
      <v-col cols="12" sm="4" class="text-sm-right">
        <v-btn to="/admin/fixed-assets" text class="font-weight-bold text-primary mr-2">
          <v-icon left>mdi-arrow-left</v-icon> ກັບຄືນ Dashboard
        </v-btn>
      </v-col>
    </v-row>

    <!-- Registry Card Table -->
    <v-card class="elevation-4 rounded-xl overflow-hidden glass-panel pa-6">
      <div class="d-flex align-center justify-between mb-4 flex-wrap gap-4">
        <div class="d-flex align-center">
          <v-icon color="teal" class="mr-2">mdi-file-document-box-multiple-outline</v-icon>
          <span class="text-h6 font-weight-bold slate-title">ທະບຽນຊັບສິນຄົງທີ່</span>
        </div>
        <div class="d-flex align-center gap-3">
          <v-text-field
            v-model="searchContract"
            append-icon="mdi-magnify"
            label="ຄົ້ນຫາຊື່, ເລກທີສັນຍາ..."
            single-line hide-details dense outlined
            class="max-width-search search-bar mr-2"
          ></v-text-field>
          <v-btn color="primary" x-large rounded class="font-weight-bold text-white px-6 py-6" @click="openCapitalizationModal">
            <v-icon left>mdi-plus</v-icon>
            ຂຶ້ນທະບຽນຊັບສິນ (Capitalize)
          </v-btn>
        </div>
      </div>

      <!-- Asset Registry Table -->
      <v-data-table
        :headers="contractHeaders"
        :items="contracts"
        :search="searchContract"
        :loading="loadingContracts"
        class="slate-table elevation-1 rounded-xl"
        no-data-text="ບໍ່ມີຂໍ້ມູນຊັບສິນຄົງທີ່"
        @click:row="viewContractDetails"
      >
        <!-- Financial values translation -->
        <template #[`item.acquisitionCost`]="{ item }">
          <span class="font-weight-bold text-primary">
            {{ getCurrencySymbol(item.currencyId) }} {{ formatCurrency(item.acquisitionCost) }}
          </span>
          <div v-if="item.currencyId !== localCurrencyId" class=" text--secondary font-weight-medium">
            ≈ {{ formatCurrency(item.acquisitionCost * item.rate) }} LAK
          </div>
        </template>

        <!-- Net Book Value (NBV) -->
        <template #[`item.netBookValue`]="{ item }">
          <span class="font-weight-bold text-success-amount">
            {{ getCurrencySymbol(item.currencyId) }} {{ formatCurrency(item.netBookValue || item.acquisitionCost) }}
          </span>
          <div v-if="item.currencyId !== localCurrencyId" class=" text-success-amount font-weight-medium">
            ≈ {{ formatCurrency((item.netBookValue || item.acquisitionCost) * item.rate) }} LAK
          </div>
        </template>

        <!-- Acquisition Date -->
        <template #[`item.acquisitionDate`]="{ item }">
          <span class="font-weight-medium">{{ item.acquisitionDate }}</span>
        </template>

        <!-- Status badges -->
        <template #[`item.status`]="{ item }">
          <v-chip small :color="getStatusColor(item.status)" class="font-weight-bold text-uppercase text-white">
            {{ getStatusLaoText(item.status) }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>

    <!-- CAPITALIZATION MODAL (WIZARD) -->
    <v-dialog v-model="capitalizationModal" fullscreen transition="dialog-bottom-transition" persistent scrollable>
      <v-card class="rounded-0 overflow-hidden" style="background-color: #f8fafc; min-height: 100vh;">
        <!-- Premium Clean Toolbar -->
        <v-toolbar flat class="border-bottom px-4" color="white" light dense style="height: 56px; max-height: 56px;">
          <v-icon color="primary" class="mr-2" size="24">mdi-office-building-plus</v-icon>
          <v-toolbar-title class="text-subtitle-1 font-weight-bold primary--text">ຂຶ້ນທະບຽນຊັບສິນຄົງທີ່ (Capitalize Asset)</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon light :disabled="savingContract" class="rounded-lg" @click="closeCapitalizationModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text class="pa-6 overflow-y-auto" style="height: calc(100vh - 120px);">
          <v-container fluid class="pa-0">
            <v-form ref="capitalizeForm" v-model="capitalizeFormValid" lazy-validation class="mt-2">
              <!-- Section 1: General & Identity Details -->
              <div class="form-section-title mb-3 d-flex align-center">
                <v-icon small color="primary" class="mr-1">mdi-information-outline</v-icon>
                <span>1. ຂໍ້ມູນຊັບສິນ ແລະ ລະຫັດ (Asset Identity)</span>
              </div>
              
              <v-card flat outlined class="pa-4 bg-white rounded-xl border mb-5">
                <v-row dense>
                  <v-col cols="12" md="4">
                    <div class="input-label mb-1">ເລກທີສັນຍາ / ລະຫັດຊັບສິນ *</div>
                    <v-text-field
                      v-model="capitalizeForm.contractNumber"
                      outlined dense placeholder="FAC-LAPTOP-2026-001"
                      prepend-inner-icon="mdi-card-text-outline"
                      :rules="[v => !!v || 'ກະລຸນາໃສ່ເລກທີສັນຍາ/ລະຫັດຊັບສິນ']"
                      class="custom-field"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="input-label mb-1">ເລກທີຊີຣີ (Serial Number)</div>
                    <v-text-field
                      v-model="capitalizeForm.serialNumber"
                      outlined dense placeholder="SN-M3-987654"
                      prepend-inner-icon="mdi-barcode-scan"
                      class="custom-field"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="input-label mb-1">ປະເພດຊັບສິນ *</div>
                    <v-autocomplete
                      v-model="capitalizeForm.fixedAssetProductId"
                      :items="products"
                      item-text="productName"
                      item-value="id"
                      outlined dense placeholder="ເລືອກປະເພດຊັບສິນ"
                      prepend-inner-icon="mdi-format-list-bulleted-type"
                      :rules="[v => !!v || 'ກະລຸນາເລືອກປະເພດຊັບສິນ']"
                      class="custom-field"
                      @change="generateContractNumber"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12">
                    <div class="input-label mb-1">ຊື່ຊັບສິນຄົງທີ່ *</div>
                    <v-text-field
                      v-model="capitalizeForm.assetName"
                      outlined dense placeholder="MacBook Pro M3 Max"
                      prepend-inner-icon="mdi-tag-outline"
                      :rules="[v => !!v || 'ກະລຸນາໃສ່ຊື່ຊັບສິນ']"
                      class="custom-field"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>

              <!-- Section 2: Dates & Financials -->
              <div class="form-section-title mb-3 d-flex align-center">
                <v-icon small color="primary" class="mr-1">mdi-cash-plus</v-icon>
                <span>2. ກຳນົດເວລາ ແລະ ມູນຄ່າ (Dates & Valuation)</span>
              </div>

              <v-card flat outlined class="pa-4 bg-white rounded-xl border mb-5">
                <!-- Date Inputs Grid -->
                <div class="input-sub-title mb-2 text-xs font-weight-bold text-uppercase text--secondary">ກຳນົດເວລາ (Timelines)</div>
                <v-row dense class="mb-2">
                  <v-col cols="12" sm="4">
                    <div class="input-label mb-1">ວັນທີຊື້ *</div>
                    <v-menu v-model="menuAcqDate" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                      <template #activator="{ on, attrs }">
                        <v-text-field
                          v-model="capitalizeForm.acquisitionDate"
                          class="custom-field"
                          readonly v-bind="attrs" outlined dense :rules="[v => !!v || 'ກະລຸນາໃສ່ວັນທີຊື້']"
                          prepend-inner-icon="mdi-calendar"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="capitalizeForm.acquisitionDate" color="primary" no-title @input="menuAcqDate = false"></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <div class="input-label mb-1">ເລີ່ມຫັກຄ່າຫຼຸ້ຍຫ້ຽນ *</div>
                    <v-menu v-model="menuCapDate" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                      <template #activator="{ on, attrs }">
                        <v-text-field
                          v-model="capitalizeForm.capitalizationDate"
                          class="custom-field"
                          readonly v-bind="attrs" outlined dense :rules="[v => !!v || 'ກະລຸນາໃສ່ວັນທີຫັກ']"
                          prepend-inner-icon="mdi-calendar-clock"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="capitalizeForm.capitalizationDate" color="primary" no-title @input="menuCapDate = false"></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <div class="input-label mb-1">ລົງບັນຊີ *</div>
                    <v-menu v-model="menuBookDate" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                      <template #activator="{ on, attrs }">
                        <v-text-field
                          v-model="capitalizeForm.bookingDate"
                          class="custom-field"
                          readonly v-bind="attrs" outlined dense :rules="[v => !!v || 'ກະລຸນາໃສ່ວັນທີລົງບັນຊີ']"
                          prepend-inner-icon="mdi-calendar-check"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="capitalizeForm.bookingDate" color="primary" no-title @input="menuBookDate = false"></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                
                <!-- Validation Warning Alert -->
                <v-alert
                  v-if="!validateChronology"
                  type="error"
                  outlined
                  dense
                  class="rounded-lg  mb-4 py-2"
                >
                  ລຳດັບວັນທີບໍ່ຖືກຕ້ອງ: ວັນທີຊື້ ≤ ວັນທີເລີ່ມຫັກ ≤ ວັນທີລົງບັນຊີ
                </v-alert>

                <!-- Financial Inputs Grid -->
                <div class="input-sub-title mb-2 text-xs font-weight-bold text-uppercase text--secondary">ມູນຄ່າຊັບສິນ (Financials)</div>
                <v-row dense>
                  <v-col cols="12" sm="3">
                    <div class="input-label mb-1">ສະກຸນເງິນ *</div>
                    <v-autocomplete
                      v-model="capitalizeForm.currencyId"
                      :items="currencies"
                      item-text="code"
                      item-value="id"
                      outlined dense placeholder="ສະກຸນເງິນ"
                      prepend-inner-icon="mdi-cash"
                      :rules="[v => !!v || 'ເລືອກສະກຸນເງິນ']"
                      class="custom-field"
                      @change="handleCurrencyChange"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <div class="input-label mb-1">ອັດຕາແລກປ່ຽນ *</div>
                    <v-text-field
                      v-model="capitalizeForm.rate"
                      type="number" step="0.01" min="0.01"
                      outlined dense placeholder="21000.00"
                      prepend-inner-icon="mdi-swap-horizontal"
                      :disabled="capitalizeForm.currencyId === localCurrencyId"
                      :rules="[v => !!v || 'ໃສ່ອັດຕາແລກປ່ຽນ', v => parseFloat(v) > 0 || 'ຕ້ອງ > 0']"
                      class="custom-field"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <div class="input-label mb-1">ມູນຄ່າຊື້ *</div>
                    <v-text-field
                      v-model="capitalizeForm.acquisitionCost"
                      type="number" step="0.01" min="0.01"
                      outlined dense placeholder="2500.00"
                      prepend-inner-icon="mdi-currency-usd"
                      :rules="[v => !!v || 'ໃສ່ມູນຄ່າຊື້', v => parseFloat(v) > 0 || 'ຕ້ອງ > 0']"
                      class="custom-field"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <div class="input-label mb-1">ມູນຄ່າຊາກ (Salvage)</div>
                    <v-text-field
                      v-model="capitalizeForm.salvageValue"
                      type="number" step="0.01" min="0"
                      outlined dense placeholder="0.00"
                      prepend-inner-icon="mdi-arrow-down-bold-circle-outline"
                      :rules="[v => v !== '' || 'ໃສ່ມູນຄ່າຊາກ', v => parseFloat(v) >= 0 || 'ບໍ່ສາມາດຕິດລົບໄດ້']"
                      class="custom-field"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <!-- Slim Live LAK Equivalents -->
                <div class="d-flex flex-wrap gap-4 mt-2 px-3 py-2 bg-slate-sub rounded-lg border  font-weight-bold">
                  <div class="d-flex align-center mr-4">
                    <span class="text--secondary mr-1">ມູນຄ່າຊື້ເປັນກີບ:</span>
                    <span class="primary--text">{{ formatCurrency(costLAKEquivalent) }} LAK</span>
                  </div>
                  <div class="d-flex align-center">
                    <span class="text--secondary mr-1">ມູນຄ່າຊາກເປັນກີບ:</span>
                    <span class="primary--text">{{ formatCurrency(salvageLAKEquivalent) }} LAK</span>
                  </div>
                </div>
              </v-card>

              <!-- Section 3: Location & Vendor -->
              <div class="form-section-title mb-3 d-flex align-center">
                <v-icon small color="primary" class="mr-1">mdi-map-marker-radius</v-icon>
                <span>3. ສະຖານທີ່ ແລະ ຜູ້ສະໜອງ (Location & Supplier)</span>
              </div>

              <v-card flat outlined class="pa-4 bg-white rounded-xl border mb-2">
                <v-row dense>
                  <v-col cols="12" sm="6">
                    <div class="input-label mb-1">ສະຖານທີ່ຕັ້ງຊັບສິນ *</div>
                    <v-autocomplete
                      v-model="capitalizeForm.locationId"
                      :items="locations"
                      item-text="name"
                      item-value="id"
                      outlined dense placeholder="ເລືອກສະຖານທີ່ຕັ້ງ"
                      prepend-inner-icon="mdi-map-marker-outline"
                      :rules="[v => !!v || 'ກະລຸນາເລືອກສະຖານທີ່ຕັ້ງ']"
                      class="custom-field"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <div class="input-label mb-1">ຜູ້ສະໜອງ *</div>
                    <v-autocomplete
                      v-model="capitalizeForm.vendorId"
                      :items="vendors"
                      item-text="name"
                      item-value="id"
                      outlined dense placeholder="ເລືອກຜູ້ສະໜອງ"
                      prepend-inner-icon="mdi-store-outline"
                      :rules="[v => !!v || 'ກະລຸນາເລືອກຜູ້ສະໜອງ']"
                      class="custom-field"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-card>
            </v-form>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <!-- Premium Compact Action Footer -->
        <v-card-actions class="px-6 py-3 bg-white d-flex align-center">
          <div class="d-flex align-center w-100" style="width: 100%;">
            <div class=" font-weight-bold text--secondary d-none d-sm-block">
              <v-icon x-small color="success" class="mr-1">mdi-circle</v-icon> ຢືນຢັນເພື່ອສ້າງຕາຕະລາງຄ່າຫຼຸ້ຍຫ້ຽນອັດຕະໂນມັດ
            </div>
            <v-spacer></v-spacer>
            <v-btn color="grey darken-1" text rounded class="px-4 font-weight-bold mr-2 " :disabled="savingContract" @click="closeCapitalizationModal">
              ຍົກເລີກ
            </v-btn>
            <v-btn
              color="primary" rounded class="px-6 font-weight-bold text-white shadow-hover "
              :loading="savingContract"
              :disabled="!capitalizeFormValid || !capitalizeForm.locationId || !capitalizeForm.vendorId || !validateChronology"
              @click="saveCapitalization"
            >
              <v-icon left small>mdi-check</v-icon>
              ຢືນຢັນຂຶ້ນທະບຽນ (Capitalize)
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- DETAILS VIEW MODAL (Stage 2 detailed dialog summary) -->
    <!-- DETAILS VIEW MODAL (Stage 2 detailed dialog summary) -->
    <!-- DETAILS VIEW MODAL (Stage 2 detailed dialog summary) -->
    <!-- DETAILS VIEW MODAL (Stage 2 detailed dialog summary) -->
    <v-dialog v-model="detailsModal" fullscreen transition="dialog-bottom-transition" persistent scrollable>
      <v-card v-if="selectedContract" class="rounded-0 d-flex flex-column" style="min-height: 100vh; background-color: #f8fafc;">
        <!-- Premium Clean Header -->
        <v-toolbar flat class="border-bottom px-4" color="white" light dense style="height: 64px; max-height: 64px; border-bottom: 1px solid #e2e8f0 !important;">
          <div class="d-flex align-center w-100" style="width: 100%;">
            <div class="d-flex align-center">
              <v-avatar color="primary lighten-5" size="40" class="mr-3">
                <v-icon color="primary">mdi-text-box-search-outline</v-icon>
              </v-avatar>
              <div>
                <div class="text-subtitle-1 font-weight-bold slate-title mb-0 d-flex align-center">
                  ລາຍລະອຽດຊັບສິນ
                  <v-chip class="ml-2 font-weight-bold text-white" :color="getStatusColor(selectedContract.status)" x-small>
                    {{ getStatusLaoText(selectedContract.status) }}
                  </v-chip>
                </div>
                <div class="text-xs text--secondary font-weight-medium">ເລກທີສັນຍາ / ລະຫັດ: <span class="font-weight-bold text-primary">{{ selectedContract.contractNumber }}</span></div>
              </div>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon light class="rounded-lg" @click="closeDetailsModal">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-toolbar>

        <v-card-text class="pa-6 flex-grow-1 overflow-y-auto" style="height: calc(100vh - 128px); background-color: #f8fafc;">
          <v-container style="max-width: 1100px;" class="pa-0">
            <!-- Dynamic Asset Progress Tracker Card -->
            <v-card flat class="pa-5 mb-6 rounded-xl border bg-white shadow-soft">
              <v-row align="center">
                <v-col cols="12" md="6">
                  <div class="d-flex align-center mb-2">
                    <v-icon color="indigo" class="mr-2" size="20">mdi-chart-donut</v-icon>
                    <span class="text-subtitle-2 font-weight-bold text--secondary">ຄວາມຄືບໜ້າການຫັກຄ່າຫຼຸ້ຍຫ້ຽນ (Depreciation Progress)</span>
                  </div>
                  <div class="d-flex align-center justify-between mb-1">
                    <span class="text-h6 font-weight-black primary--text">{{ selectedContractStats.progress }}%</span>
                    <span class="text-xs font-weight-bold text--secondary">
                      ຫັກໄປແລ້ວ: {{ getCurrencySymbol(selectedContract.currencyId) }} {{ formatCurrency(selectedContractStats.postedDepr) }} 
                      / ຄົງເຫຼືອ: {{ getCurrencySymbol(selectedContract.currencyId) }} {{ formatCurrency(selectedContractStats.nbv) }}
                    </span>
                  </div>
                  <v-progress-linear
                    :value="selectedContractStats.progress"
                    height="8"
                    rounded
                    active
                    striped
                    color="primary"
                    background-color="indigo lighten-5"
                    class="rounded-pill"
                  ></v-progress-linear>
                </v-col>
                
                <v-col cols="12" md="6" class="border-left-sm d-flex flex-wrap gap-4 justify-around">
                  <div class="text-center px-2">
                    <div class="text-xs font-weight-bold text--secondary mb-1">ມູນຄ່າຊື້ (Acquisition Cost)</div>
                    <div class="text-h6 font-weight-black slate-value-text">
                      {{ getCurrencySymbol(selectedContract.currencyId) }} {{ formatCurrency(selectedContractStats.totalCost) }}
                    </div>
                  </div>
                  
                  <div class="text-center px-2">
                    <div class="text-xs font-weight-bold text--secondary mb-1">ມູນຄ່າຄົງເຫຼືອ (Net Book Value)</div>
                    <div class="text-h6 font-weight-black text-success-amount">
                      {{ getCurrencySymbol(selectedContract.currencyId) }} {{ formatCurrency(selectedContractStats.nbv) }}
                    </div>
                  </div>

                  <div class="text-center px-2">
                    <div class="text-xs font-weight-bold text--secondary mb-1">ອາຍຸການໃຊ້ງານ (Useful Life)</div>
                    <div class="text-h6 font-weight-black text-primary">
                      {{ selectedContractStats.postedPeriods }} / {{ selectedContractStats.totalPeriods }} <span class="text-body-2 font-weight-medium">ເດືອນ</span>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>

            <!-- Elegant Tabs Navigation -->
            <v-tabs v-model="detailsTab" background-color="transparent" color="primary" class="mb-5 custom-tabs">
              <v-tab class="font-weight-bold tracking-normal text-none">
                <v-icon left size="18">mdi-information-outline</v-icon>
                ພາບລວມຊັບສິນ (Overview)
              </v-tab>
              <v-tab class="font-weight-bold tracking-normal text-none">
                <v-icon left size="18">mdi-wallet-outline</v-icon>
                ຂໍ້ມູນການເງິນ & ບັນຊີ (Financials)
              </v-tab>
              <v-tab class="font-weight-bold tracking-normal text-none">
                <v-icon left size="18">mdi-calendar-clock</v-icon>
                ຕາຕະລາງຄ່າຫຼຸ້ຍຫ້ຽນ (Schedule)
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="detailsTab" style="background-color: transparent;">
              <!-- Tab 1: Asset Overview -->
              <v-tab-item class="bg-transparent">
                <v-row>
                  <!-- Asset Identity Card -->
                  <v-col cols="12" md="6">
                    <v-card flat class="pa-5 rounded-xl border bg-white shadow-soft h-100 fill-height d-flex flex-column">
                      <div class="d-flex align-center mb-4">
                        <v-avatar color="indigo lighten-5" size="32" class="mr-2">
                          <v-icon color="indigo" size="18">mdi-barcode-scan</v-icon>
                        </v-avatar>
                        <span class="text-subtitle-1 font-weight-bold slate-title">ຂໍ້ມູນອັດຕະລັກ (Identity & Details)</span>
                      </div>
                      
                      <div class="d-flex flex-column gap-3">
                        <div class="info-row">
                          <span class="info-label">ຊື່ຊັບສິນ (Asset Name)</span>
                          <span class="info-value">{{ selectedContract.assetName }}</span>
                        </div>
                        <v-divider></v-divider>
                        <div class="info-row">
                          <span class="info-label">ເລກທີຊີຣີ (Serial Number)</span>
                          <span class="info-value">{{ selectedContract.serialNumber || 'N/A' }}</span>
                        </div>
                        <v-divider></v-divider>
                        <div class="info-row">
                          <span class="info-label">ປະເພດຊັບສິນ (Product Category)</span>
                          <span class="info-value text-primary font-weight-bold">{{ getProductNameById(selectedContract.fixedAssetProductId) }}</span>
                        </div>
                        <v-divider></v-divider>
                        <div class="info-row">
                          <span class="info-label">ສະຖານະປັດຈຸບັນ (Asset Status)</span>
                          <div>
                            <v-chip class="font-weight-bold text-white px-3" :color="getStatusColor(selectedContract.status)" small>
                              {{ getStatusLaoText(selectedContract.status) }}
                            </v-chip>
                          </div>
                        </div>
                      </div>
                    </v-card>
                  </v-col>

                  <!-- Location & Supplier & Timelines -->
                  <v-col cols="12" md="6">
                    <v-row dense>
                      <v-col cols="12">
                        <v-card flat class="pa-5 rounded-xl border bg-white shadow-soft mb-4">
                          <div class="d-flex align-center mb-4">
                            <v-avatar color="teal lighten-5" size="32" class="mr-2">
                              <v-icon color="teal" size="18">mdi-map-marker-radius</v-icon>
                            </v-avatar>
                            <span class="text-subtitle-1 font-weight-bold slate-title">ສະຖານທີ່ & ຜູ້ສະໜອງ (Logistics)</span>
                          </div>
                          <div class="d-flex flex-column gap-3">
                            <div class="info-row">
                              <span class="info-label">ສະຖານທີ່ຕັ້ງຊັບສິນ (Location)</span>
                              <span class="info-value">{{ getLocationNameById(selectedContract.locationId) }}</span>
                            </div>
                            <v-divider></v-divider>
                            <div class="info-row">
                              <span class="info-label">ຜູ້ສະໜອງ (Supplier / Vendor)</span>
                              <span class="info-value">{{ getVendorNameById(selectedContract.vendorId) }}</span>
                            </div>
                          </div>
                        </v-card>
                      </v-col>

                      <v-col cols="12">
                        <v-card flat class="pa-5 rounded-xl border bg-white shadow-soft">
                          <div class="d-flex align-center mb-4">
                            <v-avatar color="amber lighten-5" size="32" class="mr-2">
                              <v-icon color="amber darken-3" size="18">mdi-calendar-month</v-icon>
                            </v-avatar>
                            <span class="text-subtitle-1 font-weight-bold slate-title">ກຳນົດເວລາ ສຳຄັນ (Important Timelines)</span>
                          </div>
                          <div class="d-flex flex-column gap-3">
                            <div class="info-row">
                              <span class="info-label">ວັນທີຊື້ (Acquisition Date)</span>
                              <span class="info-value font-weight-bold">{{ selectedContract.acquisitionDate }}</span>
                            </div>
                            <v-divider></v-divider>
                            <div class="info-row">
                              <span class="info-label">ວັນທີເລີ່ມຫັກ (Capitalization Date)</span>
                              <span class="info-value font-weight-bold text-primary">{{ selectedContract.capitalizationDate }}</span>
                            </div>
                            <v-divider></v-divider>
                            <div class="info-row">
                              <span class="info-label">ວັນທີລົງບັນຊີ (Booking Date)</span>
                              <span class="info-value font-weight-bold">{{ selectedContract.bookingDate }}</span>
                            </div>
                          </div>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-tab-item>

              <!-- Tab 2: Financials & Accounting -->
              <v-tab-item class="bg-transparent">
                <v-row>
                  <!-- Valuation Breakdown Card -->
                  <v-col cols="12" md="7">
                    <v-card flat class="pa-5 rounded-xl border bg-white shadow-soft fill-height d-flex flex-column">
                      <div class="d-flex align-center mb-4">
                        <v-avatar color="primary lighten-5" size="32" class="mr-2">
                          <v-icon color="primary" size="18">mdi-cash-register</v-icon>
                        </v-avatar>
                        <span class="text-subtitle-1 font-weight-bold slate-title">ລາຍລະອຽດມູນຄ່າ ແລະ ຄ່າຫຼຸ້ຍຫ້ຽນ (Financial Valuation)</span>
                      </div>
                      
                      <v-row dense class="mb-4">
                        <v-col cols="12" sm="6">
                          <v-card flat outlined class="pa-4 bg-slate-sub border rounded-xl h-100">
                            <div class="text-xs font-weight-bold text--secondary uppercase mb-1">ມູນຄ່າຊື້ (Acquisition Cost)</div>
                            <div class="text-h5 font-weight-black primary--text">
                              {{ getCurrencySymbol(selectedContract.currencyId) }} {{ formatCurrency(selectedContract.acquisitionCost) }}
                            </div>
                            <div v-if="selectedContract.currencyId !== localCurrencyId" class="text-xs text--secondary font-weight-bold mt-1">
                              ≈ {{ formatCurrency(selectedContract.acquisitionCost * selectedContract.rate) }} LAK
                            </div>
                          </v-card>
                        </v-col>

                        <v-col cols="12" sm="6">
                          <v-card flat outlined class="pa-4 bg-slate-sub border rounded-xl h-100">
                            <div class="text-xs font-weight-bold text--secondary uppercase mb-1">ມູນຄ່າຄົງເຫຼືອ (Net Book Value)</div>
                            <div class="text-h5 font-weight-black text-success-amount">
                              {{ getCurrencySymbol(selectedContract.currencyId) }} {{ formatCurrency(selectedContractStats.nbv) }}
                            </div>
                            <div v-if="selectedContract.currencyId !== localCurrencyId" class="text-xs text-success-amount font-weight-bold mt-1">
                              ≈ {{ formatCurrency(selectedContractStats.nbv * selectedContract.rate) }} LAK
                            </div>
                          </v-card>
                        </v-col>
                      </v-row>

                      <v-row dense class="mb-2">
                        <v-col cols="12" sm="6">
                          <v-card flat outlined class="pa-4 border rounded-xl h-100">
                            <div class="text-xs font-weight-bold text--secondary uppercase mb-1">ຄ່າຫຼຸ້ຍຫ້ຽນສະສົມ (Accumulated)</div>
                            <div class="text-h6 font-weight-bold text-slate">
                              {{ getCurrencySymbol(selectedContract.currencyId) }} {{ formatCurrency(selectedContractStats.postedDepr) }}
                            </div>
                            <div v-if="selectedContract.currencyId !== localCurrencyId" class="text-xs text--secondary font-weight-bold mt-1">
                              ≈ {{ formatCurrency(selectedContractStats.postedDepr * selectedContract.rate) }} LAK
                            </div>
                          </v-card>
                        </v-col>

                        <v-col cols="12" sm="6">
                          <v-card flat outlined class="pa-4 border rounded-xl h-100">
                            <div class="text-xs font-weight-bold text--secondary uppercase mb-1">ມູນຄ່າຊາກ (Salvage Value)</div>
                            <div class="text-h6 font-weight-bold text-slate">
                              {{ getCurrencySymbol(selectedContract.currencyId) }} {{ formatCurrency(selectedContract.salvageValue) }}
                            </div>
                            <div v-if="selectedContract.currencyId !== localCurrencyId" class="text-xs text--secondary font-weight-bold mt-1">
                              ≈ {{ formatCurrency(selectedContract.salvageValue * selectedContract.rate) }} LAK
                            </div>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>

                  <!-- Depreciation Policy Card -->
                  <v-col cols="12" md="5">
                    <v-card flat class="pa-5 rounded-xl border bg-white shadow-soft h-100 d-flex flex-column justify-space-between">
                      <div>
                        <div class="d-flex align-center mb-4">
                          <v-avatar color="indigo lighten-5" size="32" class="mr-2">
                            <v-icon color="indigo" size="18">mdi-scale-balance</v-icon>
                          </v-avatar>
                          <span class="text-subtitle-1 font-weight-bold slate-title">ນະໂຍບາຍບັນຊີ (Accounting Policies)</span>
                        </div>

                        <div class="d-flex flex-column gap-3">
                          <div class="info-row">
                            <span class="info-label">ວິທີການຫັກຄ່າຫຼຸ້ຍຫ້ຽນ (Method)</span>
                            <span class="info-value font-weight-black indigo--text">ເສັ້ນຊື່ (STRAIGHT LINE)</span>
                          </div>
                          <v-divider></v-divider>
                          <div class="info-row">
                            <span class="info-label">ອັດຕາແລກປ່ຽນ (Historical Rate)</span>
                            <span class="info-value font-weight-bold">
                              1 {{ getCurrencyCode(selectedContract.currencyId) }} = {{ formatCurrency(selectedContract.rate) }} LAK
                            </span>
                          </div>
                          <v-divider></v-divider>
                          <div class="info-row">
                            <span class="info-label">ອາຍຸການໃຊ້ງານທັງໝົດ</span>
                            <span class="info-value font-weight-bold">{{ selectedContractStats.totalPeriods }} ເດືອນ</span>
                          </div>
                          <v-divider></v-divider>
                          <div class="info-row">
                            <span class="info-label">ຄ່າຫຼຸ້ຍຫ້ຽນ / ເດືອນ</span>
                            <span class="info-value font-weight-black text-primary">
                              {{ getCurrencySymbol(selectedContract.currencyId) }} 
                              {{ selectedContract.scheduleLines && selectedContract.scheduleLines[0] ? formatCurrency(selectedContract.scheduleLines[0].depreciationAmount) : '0.00' }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-tab-item>

              <!-- Tab 3: Depreciation Schedule -->
              <v-tab-item class="bg-transparent">
                <v-card flat class="pa-5 rounded-xl border bg-white shadow-soft">
                  <!-- Schedule Header Summary Stats -->
                  <div class="d-flex flex-wrap gap-4 align-center justify-between mb-5 border-bottom pb-4">
                    <div class="d-flex align-center flex-wrap gap-3">
                      <div class="d-flex align-center px-3 py-1 bg-slate-sub rounded-lg border">
                        <v-icon left color="indigo" size="16">mdi-calendar-range</v-icon>
                        <span class="text-xs font-weight-bold text--secondary mr-1">ທັງໝົດ:</span>
                        <span class="font-weight-black text-indigo">{{ selectedContractStats.totalPeriods }} ງວດ</span>
                      </div>
                      
                      <div class="d-flex align-center px-3 py-1 bg-success-light rounded-lg border border-success-sub">
                        <v-icon left color="success" size="16">mdi-lock-outline</v-icon>
                        <span class="text-xs font-weight-bold text-success-amount mr-1">ຫັກແລ້ວ:</span>
                        <span class="font-weight-black text-success-amount">{{ selectedContractStats.postedPeriods }} ງວດ</span>
                      </div>

                      <div class="d-flex align-center px-3 py-1 bg-warning-light rounded-lg border border-warning-sub">
                        <v-icon left color="orange darken-3" size="16">mdi-clock-outline</v-icon>
                        <span class="text-xs font-weight-bold text-warning-amount mr-1">ຄົງເຫຼືອ:</span>
                        <span class="font-weight-black text-warning-amount">{{ selectedContractStats.unpostedPeriods }} ງວດ</span>
                      </div>
                    </div>

                    <!-- Filter Options -->
                    <div class="d-flex align-center">
                      <span class="text-xs font-weight-bold text--secondary mr-2">ສະແດງ:</span>
                      <v-btn-toggle v-model="scheduleFilter" mandatory dense color="primary" class="rounded-lg shadow-sm border">
                        <v-btn value="ALL" small class="font-weight-bold px-3">ທັງໝົດ</v-btn>
                        <v-btn value="POSTED" small class="font-weight-bold px-3">ຫັກບັນຊີແລ້ວ</v-btn>
                        <v-btn value="UNPOSTED" small class="font-weight-bold px-3">ຍັງບໍ່ໄດ້ຫັກ</v-btn>
                      </v-btn-toggle>
                    </div>
                  </div>

                  <!-- Schedule Table -->
                  <v-data-table
                    :headers="scheduleHeaders"
                    :items="filteredScheduleLines"
                    class="slate-table border rounded-xl"
                    no-data-text="ບໍ່ມີຕາຕະລາງຄ່າຫຼຸ້ຍຫ້ຽນທີ່ກົງກັບເງື່ອນໄຂ"
                    hide-default-footer
                    disable-pagination
                  >
                    <!-- Formatting amounts -->
                    <template #[`item.depreciationAmount`]="{ item }">
                      <span class="font-weight-bold primary--text">
                        {{ getCurrencySymbol(selectedContract.currencyId) }} {{ formatCurrency(item.depreciationAmount) }}
                      </span>
                      <div v-if="selectedContract.currencyId !== localCurrencyId" class="text-xs text--secondary">
                        ≈ {{ formatCurrency(item.depreciationAmount * selectedContract.rate) }} LAK
                      </div>
                    </template>

                    <template #[`item.accumulatedDepreciation`]="{ item }">
                      <span class="font-weight-bold">
                        {{ getCurrencySymbol(selectedContract.currencyId) }} {{ formatCurrency(item.accumulatedDepreciation) }}
                      </span>
                      <div v-if="selectedContract.currencyId !== localCurrencyId" class="text-xs text--secondary">
                        ≈ {{ formatCurrency(item.accumulatedDepreciation * selectedContract.rate) }} LAK
                      </div>
                    </template>

                    <template #[`item.remainingValue`]="{ item }">
                      <span class="font-weight-bold text-success-amount">
                        {{ getCurrencySymbol(selectedContract.currencyId) }} {{ formatCurrency(item.remainingValue) }}
                      </span>
                      <div v-if="selectedContract.currencyId !== localCurrencyId" class="text-xs text-success-amount">
                        ≈ {{ formatCurrency(item.remainingValue * selectedContract.rate) }} LAK
                      </div>
                    </template>

                    <!-- Schedule post status badges -->
                    <template #[`item.status`]="{ item }">
                      <v-chip v-if="item.isPosted" small color="success" class="font-weight-bold py-1 px-3">
                        <v-icon x-small left>mdi-lock-outline</v-icon>
                        POSTED
                      </v-chip>
                      <v-chip v-else small outlined color="slate" class="font-weight-bold py-1 px-3">
                        UNPOSTED
                      </v-chip>
                    </template>
                  </v-data-table>
                </v-card>
              </v-tab-item>
            </v-tabs-items>

            <v-row dense class="mt-6 px-3">
              <v-spacer></v-spacer>
              <v-btn color="grey darken-1" text large rounded class="px-6 font-weight-bold mr-2" @click="closeDetailsModal">
                ປິດໜ້າຈໍ
              </v-btn>
              <!-- Stage 4: Asset Disposal Button -->
              <v-btn
                v-if="selectedContract.status === 'ACTIVE' || selectedContract.status === 'FULLY_DEPRECIATED'"
                color="danger" large rounded dark class="font-weight-bold text-white px-8"
                @click.stop="openDisposalModal(selectedContract)"
              >
                <v-icon left>mdi-delete-forever-outline</v-icon>
                ຈຳໜ່າຍຊັບສິນ (Dispose Asset)
              </v-btn>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- ASSET DISPOSAL MODAL (Stage 4 nested disposal popup) -->
    <v-dialog v-model="disposalModal" max-width="850px" scrollable persistent>
      <v-card class="rounded-xl overflow-hidden" style="background-color: #f8fafc;">
        <!-- Premium Compact Danger Toolbar -->
        <v-toolbar flat class="border-bottom px-2" color="white" light dense style="height: 56px;">
          <v-icon color="danger" class="mr-2" size="24">mdi-delete-forever-outline</v-icon>
          <v-toolbar-title class="text-subtitle-1 font-weight-bold danger--text">ຈຳໜ່າຍຊັບສິນ (Asset Disposal Voucher)</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon light :disabled="savingDisposal" class="rounded-lg" @click="closeDisposalModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text class="pa-5 overflow-y-auto" style="max-height: 80vh;">
          <div class="mb-4 text-justify  font-weight-bold text--secondary px-1">
            ກະລຸນາຕື່ມຂໍ້ມູນການຂາຍ, ປົດລະວຽນ ຫຼື ຕັດຈຳໜ່າຍຊັບສິນຄົງທີ່. ລະບົບຈະຄິດໄລ່ຜົນໄດ້ຮັບ/ຂາດທຶນອັດຕະໂນມັດ ແລະ ລົງບັນຊີ GL Voucher ປິດບັນຊີ.
          </div>

          <v-form ref="disposalForm" v-model="disposalFormValid" lazy-validation>
            <v-row dense>
              <!-- Left Column: Input Fields (6/12 width) -->
              <v-col cols="12" md="6" class="pr-md-3">
                <div class="form-section-title mb-3 d-flex align-center">
                  <v-icon small color="primary" class="mr-1">mdi-lead-pencil</v-icon>
                  <span class="font-weight-bold">ຂໍ້ມູນການຈຳໜ່າຍ</span>
                </div>

                <v-card flat outlined class="pa-4 bg-white rounded-xl border mb-3">
                  <!-- Disposal Date -->
                  <div class="input-label mb-1">ວັນທີຈຳໜ່າຍ *</div>
                  <v-menu v-model="menuDispDate" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                    <template #activator="{ on, attrs }">
                      <v-text-field
                        v-model="disposalForm.disposalDate"
                        class="custom-field"
                        readonly v-bind="attrs" outlined dense :rules="[v => !!v || 'ກະລຸນາໃສ່ວັນທີຈຳໜ່າຍ', validateDisposalDate]"
                        prepend-inner-icon="mdi-calendar"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="disposalForm.disposalDate" color="primary" no-title @input="menuDispDate = false"></v-date-picker>
                  </v-menu>

                  <!-- Sale Price -->
                  <div class="input-label mb-1">ລາຄາຂາຍ/ຈຳໜ່າຍ *</div>
                  <v-text-field
                    v-model="disposalForm.salePrice"
                    type="number" step="0.01" min="0"
                    outlined dense placeholder="1800.00"
                    prepend-inner-icon="mdi-currency-usd"
                    :rules="[v => v !== '' || 'ກະລຸນາໃສ່ລາຄາຂາຍ', v => parseFloat(v) >= 0 || 'ບໍ່ສາມາດຕິດລົບໄດ້']"
                    class="custom-field"
                  ></v-text-field>

                  <!-- Accounts Mappings -->
                  <div class="input-label mb-1">Cash/Bank *</div>
                  <v-autocomplete
                    v-model="disposalForm.cashAccountId"
                    :items="chartAccounts"
                    item-text="displayName"
                    item-value="id"
                    outlined dense placeholder="ເລືອກ Cash/Bank"
                    prepend-inner-icon="mdi-bank-outline"
                    :rules="[v => !!v || 'ກະລຸນາເລືອກບັນຊີ']"
                    class="custom-field"
                  ></v-autocomplete>

                  <div class="input-label mb-1">Gain/Loss *</div>
                  <v-autocomplete
                    v-model="disposalForm.gainLossAccountId"
                    :items="chartAccounts"
                    item-text="displayName"
                    item-value="id"
                    outlined dense placeholder="ເລືອກ Gain/Loss"
                    prepend-inner-icon="mdi-arrow-left-right-bold-outline"
                    :rules="[v => !!v || 'ກະລຸນາເລືອກບັນຊີ']"
                    class="custom-field"
                  ></v-autocomplete>
                </v-card>
              </v-col>

              <!-- Right Column: Live Financial Impact & Values (6/12 width) -->
              <v-col cols="12" md="6" class="pl-md-3">
                <div class="form-section-title mb-3 d-flex align-center">
                  <v-icon small color="primary" class="mr-1">mdi-chart-line-down</v-icon>
                  <span class="font-weight-bold">ສະຫຼຸບມູນຄ່າຊັບສິນ</span>
                </div>

                <v-card flat outlined class="pa-4 bg-white rounded-xl border mb-3 d-flex flex-column justify-space-between" style="min-height: 338px;">
                  <!-- Historical info list -->
                  <div class="d-flex flex-column gap-2 ">
                    <div class="d-flex justify-between py-1 border-bottom">
                      <span class="font-weight-medium text--secondary">ມູນຄ່າຊື້ຊັບສິນ:</span>
                      <span class="font-weight-bold">
                        {{ getCurrencySymbol(disposalAsset.currencyId) }} {{ formatCurrency(disposalAsset.acquisitionCost) }}
                      </span>
                    </div>
                    <div class="d-flex justify-between py-1 border-bottom">
                      <span class="font-weight-medium text--secondary">ຄ່າຫຼຸ້ຍຫ້ຽນສະສົມ:</span>
                      <span class="font-weight-bold">
                        {{ getCurrencySymbol(disposalAsset.currencyId) }} {{ formatCurrency(postedDepreciationAmount) }}
                      </span>
                    </div>
                    <div class="d-flex justify-between py-1 border-bottom">
                      <span class="font-weight-medium text--secondary">ມູນຄ່າຄົງເຫຼືອ (NBV):</span>
                      <span class="font-weight-black primary--text">
                        {{ getCurrencySymbol(disposalAsset.currencyId) }} {{ formatCurrency(disposalNBVAmount) }}
                      </span>
                    </div>
                  </div>

                  <!-- Gain/Loss Display Badge -->
                  <v-card flat outlined class="pa-3 rounded-lg border bg-slate-sub mt-4 text-center">
                    <div class=" font-weight-bold text--secondary mb-1">
                      ກຳໄລ / (ຂາດທຶນ) ຈາກການຈຳໜ່າຍ
                    </div>
                    <div class="text-h6 font-weight-black" :class="estimatedGainLoss >= 0 ? 'success--text' : 'danger--text'">
                      <v-icon left :color="estimatedGainLoss >= 0 ? 'success' : 'danger'">
                        {{ estimatedGainLoss >= 0 ? 'mdi-trending-up' : 'mdi-trending-down' }}
                      </v-icon>
                      {{ getCurrencySymbol(disposalAsset.currencyId) }} {{ formatCurrency(estimatedGainLoss) }}
                    </div>
                    
                    <div class=" font-weight-bold text--secondary border-top mt-2 pt-2">
                      ຄິດເປັນເງິນກີບ: 
                      <span class="font-weight-black" :class="estimatedGainLoss >= 0 ? 'success--text' : 'danger--text'">
                        {{ formatCurrency(estimatedGainLoss * (disposalAsset.rate || 1)) }} LAK
                      </span>
                    </div>
                  </v-card>
                </v-card>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <!-- Disposal Actions Footer -->
        <v-card-actions class="px-5 py-3 bg-white">
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text rounded class="px-4 font-weight-bold " :disabled="savingDisposal" @click="closeDisposalModal">
            ຍົກເລີກ
          </v-btn>
          <v-btn
            color="danger" rounded class="px-6 font-weight-bold text-white shadow-hover "
            :loading="savingDisposal"
            :disabled="!disposalFormValid"
            @click="saveDisposal"
          >
            <v-icon left small>mdi-delete-forever-outline</v-icon>
            ຢືນຢັນການຈຳໜ່າຍ (Dispose)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
/* eslint-disable no-console */
import {
  today,
  getFormatNum,
  swalError2
} from '~/common'

export default {
  name: 'FixedAssetContracts',
  middleware: 'auths',

  data() {
    return {
      searchContract: '',
      loadingContracts: false,
      savingContract: false,
      capitalizeFormValid: true,
      capitalizeStep: 1,
      capitalizationModal: false,
      detailsModal: false,
      detailsTab: 0,
      scheduleFilter: 'ALL',

      // Capitalization Dates menus
      menuAcqDate: false,
      menuCapDate: false,
      menuBookDate: false,

      chartAccounts: [],
      currencies: [],
      locations: [],
      vendors: [],
      products: [],
      contracts: [],
      selectedContract: null,

      capitalizeForm: {
        contractNumber: '',
        fixedAssetProductId: null,
        assetName: '',
        serialNumber: '',
        acquisitionDate: today,
        capitalizationDate: today,
        bookingDate: today,
        acquisitionCost: null,
        salvageValue: 0.00,
        currencyId: null,
        rate: 1.00,
        locationId: null,
        vendorId: null
      },

      contractHeaders: [
        { text: 'ເລກທີສັນຍາ', value: 'contractNumber', align: 'start', sortable: true },
        { text: 'ຊື່ຊັບສິນຄົງທີ່', value: 'assetName', align: 'start', sortable: true },
        { text: 'ວັນທີຊື້', value: 'acquisitionDate', align: 'center', sortable: true },
        { text: 'ມູນຄ່າຊື້ (Acquisition Cost)', value: 'acquisitionCost', align: 'end', sortable: true },
        { text: 'ມູນຄ່າຄົງເຫຼືອ (NBV)', value: 'netBookValue', align: 'end', sortable: true },
        { text: 'ສະຖານະ', value: 'status', align: 'center', sortable: true }
      ],

      scheduleHeaders: [
        { text: 'ງວດ/ເດືອນ', value: 'periodDate', align: 'center', sortable: false },
        { text: 'ຄ່າຫຼຸ້ຍຫ້ຽນປະຈຳງວດ', value: 'depreciationAmount', align: 'end', sortable: false },
        { text: 'ຄ່າຫຼຸ້ຍຫ້ຽນສະສົມ', value: 'accumulatedDepreciation', align: 'end', sortable: false },
        { text: 'ມູນຄ່າຄົງເຫຼືອ', value: 'remainingValue', align: 'end', sortable: false },
        { text: 'ສະຖານະລົງບັນຊີ', value: 'status', align: 'center', sortable: false }
      ],

      // Disposal Modal states
      disposalModal: false,
      disposalFormValid: true,
      savingDisposal: false,
      menuDispDate: false,
      disposalAsset: {},
      disposalForm: {
        disposalDate: today,
        salePrice: null,
        cashAccountId: null,
        gainLossAccountId: null
      }
    }
  },

  computed: {
    localCurrencyId() {
      const local = this.currencies.find(c => c.isLocalCCY || c.code === 'LAK')
      return local ? local.id : null
    },

    costLAKEquivalent() {
      const cost = Number(this.capitalizeForm.acquisitionCost) || 0
      const rate = Number(this.capitalizeForm.rate) || 1
      return cost * rate
    },

    salvageLAKEquivalent() {
      const salvage = Number(this.capitalizeForm.salvageValue) || 0
      const rate = Number(this.capitalizeForm.rate) || 1
      return salvage * rate
    },

    validateChronology() {
      const acq = this.capitalizeForm.acquisitionDate
      const cap = this.capitalizeForm.capitalizationDate
      const book = this.capitalizeForm.bookingDate

      if (!acq || !cap || !book) return true
      return new Date(acq) <= new Date(cap) && new Date(cap) <= new Date(book)
    },

    postedDepreciationAmount() {
      if (!this.disposalAsset.scheduleLines) return 0
      return this.disposalAsset.scheduleLines
        .filter(line => line.isPosted)
        .reduce((sum, line) => sum + (Number(line.depreciationAmount) || 0), 0)
    },

    disposalNBVAmount() {
      const origCost = Number(this.disposalAsset.acquisitionCost) || 0
      return origCost - this.postedDepreciationAmount
    },

    estimatedGainLoss() {
      const price = Number(this.disposalForm.salePrice) || 0
      return price - this.disposalNBVAmount
    },

    filteredScheduleLines() {
      if (!this.selectedContract || !this.selectedContract.scheduleLines) return []
      if (this.scheduleFilter === 'POSTED') {
        return this.selectedContract.scheduleLines.filter(line => line.isPosted)
      }
      if (this.scheduleFilter === 'UNPOSTED') {
        return this.selectedContract.scheduleLines.filter(line => !line.isPosted)
      }
      return this.selectedContract.scheduleLines
    },

    selectedContractStats() {
      if (!this.selectedContract) return {
        totalCost: 0,
        postedDepr: 0,
        nbv: 0,
        salvage: 0,
        progress: 0,
        totalPeriods: 0,
        postedPeriods: 0,
        unpostedPeriods: 0
      }
      
      const cost = Number(this.selectedContract.acquisitionCost) || 0
      const salvage = Number(this.selectedContract.salvageValue) || 0
      const lines = this.selectedContract.scheduleLines || []
      
      const postedDepr = lines
        .filter(l => l.isPosted)
        .reduce((sum, l) => sum + (Number(l.depreciationAmount) || 0), 0)
        
      const nbv = Math.max(0, cost - postedDepr)
      
      const totalPeriods = lines.length
      const postedPeriods = lines.filter(l => l.isPosted).length
      const unpostedPeriods = totalPeriods - postedPeriods
      
      const deprBase = cost - salvage
      const progress = deprBase > 0 ? Math.min(100, Math.round((postedDepr / deprBase) * 100)) : 0
      
      return {
        totalCost: cost,
        postedDepr,
        nbv,
        salvage,
        progress,
        totalPeriods,
        postedPeriods,
        unpostedPeriods
      }
    }
  },

  watch: {
    'capitalizeForm.currencyId'(newCcyId) {
      if (newCcyId === this.localCurrencyId) {
        this.capitalizeForm.rate = 1.00
      } else {
        const ccy = this.currencies.find(c => c.id === newCcyId)
        if (ccy && ccy.rate) {
          this.capitalizeForm.rate = ccy.rate
        }
      }
    }
  },

  mounted() {
    this.initializeContractsPage()
  },

  methods: {
    formatCurrency(val) {
      if (val === undefined || val === null || isNaN(val)) return '0.00'
      return getFormatNum(val)
    },

    async initializeContractsPage() {
      try {
        await Promise.all([
          this.fetchChartAccounts(),
          this.fetchCurrencies(),
          this.fetchLocations(),
          this.fetchVendors(),
          this.fetchProducts(),
          this.fetchContracts()
        ])
      } catch (error) {
        console.error('Contracts page init failed:', error)
      }
    },

    async fetchChartAccounts() {
      try {
        const response = await this.$axios.get('api/account/findAll')
        if (Array.isArray(response.data)) {
          this.chartAccounts = response.data.map(acc => ({
            ...acc,
            displayName: `${acc.accountNumber} - ${acc.accountName}`
          }))
        }
      } catch (error) {
        swalError2(this.$swal, 'Error', 'ບໍ່ສາມາດໂຫຼດຜັງບັນຊີ ' + error.message)
      }
    },

    async fetchCurrencies() {
      try {
        const response = await this.$axios.get('/api/currency/findAll')
        if (Array.isArray(response.data)) {
          this.currencies = response.data
        }
      } catch (error) {
        console.error('Currencies fetch error:', error)
      }
    },

    async fetchLocations() {
      try {
        const response = await this.$axios.get('api/location/find')
        if (Array.isArray(response.data)) {
          this.locations = response.data
        }
      } catch (error) {
        console.error('Locations fetch error:', error)
      }
    },

    async fetchVendors() {
      try {
        const response = await this.$axios.get('api/vendor/find')
        if (Array.isArray(response.data)) {
          this.vendors = response.data
        } else if (response.data && Array.isArray(response.data.data)) {
          this.vendors = response.data.data
        }
      } catch (error) {
        console.error('Vendors fetch error:', error)
      }
    },

    async fetchProducts() {
      try {
        const response = await this.$axios.get('/api/fixed-assets/products')
        if (Array.isArray(response.data) && response.data.length > 0) {
          this.products = response.data
        } else {
          throw new TypeError('API Empty')
        }
      } catch (error) {
        console.warn('API Products failed, using backups:', error)
        this.products = [
          {
            id: 1,
            productCode: 'FAP-COMPUTER',
            productName: 'Computers & Laptops',
            usefulLifeMonths: 36,
            usefulLifeYears: 3.0
          }
        ]
      }
    },

    async fetchContracts() {
      this.loadingContracts = true
      try {
        const response = await this.$axios.get('/api/fixed-assets/contracts')
        if (Array.isArray(response.data)) {
          this.contracts = response.data
        } else {
          throw new TypeError('API Empty')
        }
      } catch (error) {
        console.warn('API Contracts failed, using staging mock:', error)
        this.contracts = [
          {
            id: 1,
            contractNumber: 'FAC-LAPTOP-2026-001',
            fixedAssetProductId: 1,
            assetName: 'MacBook Pro M3 Max',
            serialNumber: 'SN-M3-987654',
            acquisitionDate: '2026-05-01',
            capitalizationDate: '2026-05-15',
            bookingDate: '2026-05-22',
            acquisitionCost: 2500.00,
            salvageValue: 0.00,
            currencyId: this.currencies.find(c => c.code === 'USD')?.id || 5,
            rate: 21000.00,
            locationId: 1,
            vendorId: 1,
            netBookValue: 2500.00,
            status: 'ACTIVE',
            scheduleLines: [
              { periodDate: '2026-05-31', depreciationAmount: 69.44, accumulatedDepreciation: 69.44, remainingValue: 2430.56, isPosted: false },
              { periodDate: '2026-06-30', depreciationAmount: 69.44, accumulatedDepreciation: 138.88, remainingValue: 2361.12, isPosted: false }
            ]
          }
        ]
      } finally {
        this.loadingContracts = false
      }
    },

    openCapitalizationModal() {
      this.resetCapitalizationForm()
      this.capitalizationModal = true
    },

    resetCapitalizationForm() {
      const usdCcy = this.currencies.find(c => c.code === 'USD')
      this.capitalizeStep = 1
      this.capitalizeForm = {
        contractNumber: '',
        fixedAssetProductId: this.products[0]?.id || null,
        assetName: '',
        serialNumber: '',
        acquisitionDate: today,
        capitalizationDate: today,
        bookingDate: today,
        acquisitionCost: null,
        salvageValue: 0.00,
        currencyId: usdCcy ? usdCcy.id : (this.currencies[0]?.id || null),
        rate: usdCcy ? usdCcy.rate : 1.00,
        locationId: this.locations[0]?.id || null,
        vendorId: this.vendors[0]?.id || null
      }
      if (this.$refs.capitalizeForm) this.$refs.capitalizeForm.resetValidation()
    },

    closeCapitalizationModal() {
      this.capitalizationModal = false
      this.capitalizeStep = 1
    },

    generateContractNumber() {
      if (this.isEditing) return

      const productId = this.capitalizeForm.fixedAssetProductId
      if (!productId) return

      const product = this.products.find(p => p.id === productId)
      if (!product) return

      const prefix = product.productCode || 'ASSET'

      let highestSeq = 0
      if (Array.isArray(this.contracts)) {
        this.contracts.forEach(c => {
          if (c.contractNumber && c.contractNumber.startsWith(prefix)) {
            const parts = c.contractNumber.split('-')
            const lastPart = parts[parts.length - 1]
            const seq = parseInt(lastPart, 10)
            if (!isNaN(seq) && seq > highestSeq) {
              highestSeq = seq
            }
          }
        })
      }

      const nextSeq = highestSeq + 1
      const paddedSeq = String(nextSeq).padStart(3, '0')

      this.capitalizeForm.contractNumber = `${prefix}-${paddedSeq}`
    },

    handleCurrencyChange(val) {
      if (val === this.localCurrencyId) {
        this.capitalizeForm.rate = 1.00
      } else {
        const ccy = this.currencies.find(c => c.id === val)
        if (ccy) this.capitalizeForm.rate = ccy.rate || 1.00
      }
    },

    async saveCapitalization() {
      if (!this.$refs.capitalizeForm.validate()) return
      
      if (!this.validateChronology) {
        this.$toast.error('ລຳດັບວັນທີບໍ່ຖືກຕ້ອງ: ວັນທີຊື້ ≤ ວັນທີເລີ່ມຫັກ ≤ ວັນທີລົງບັນຊີ')
        return
      }

      this.savingContract = true

      const payload = {
        ...this.capitalizeForm,
        acquisitionCost: parseFloat(this.capitalizeForm.acquisitionCost),
        salvageValue: parseFloat(this.capitalizeForm.salvageValue),
        rate: parseFloat(this.capitalizeForm.rate)
      }

      try {
        await this.$axios.post('/api/fixed-assets/contracts', payload)
        this.$toast.success('ຂຶ້ນທະບຽນຊັບສິນຄົງທີ່ສຳເລັດແລ້ວ')
        this.closeCapitalizationModal()
        await this.fetchContracts()
      } catch (error) {
        console.error('Contract save error:', error)
        // Simulated schedule fallback based on product level depreciation method
        const product = this.products.find(p => p.id === payload.fixedAssetProductId)
        const usefulLifeMonths = product?.usefulLifeMonths || 36
        const deprMethod = product?.depreciationMethod || 'STRAIGHT_LINE'
        
        const scheduleLines = []
        let accum = 0
        const baseDate = new Date(payload.capitalizationDate)
        
        if (deprMethod === 'DOUBLE_DECLINING') {
          // Double declining calculation:
          // Rate = (1 / usefulLifeYears) * 2
          // Monthly Rate = Rate / 12
          const usefulLifeYears = product?.usefulLifeYears || (usefulLifeMonths / 12)
          const annualRate = (1 / usefulLifeYears) * 2
          const monthlyRate = annualRate / 12
          
          let currentBookValue = payload.acquisitionCost
          const salvageVal = payload.salvageValue || 0
          
          for (let i = 1; i <= usefulLifeMonths; i++) {
            const targetYear = baseDate.getFullYear() + Math.floor((baseDate.getMonth() + (i - 1)) / 12)
            const targetMonth = (baseDate.getMonth() + (i - 1)) % 12
            const lastDay = new Date(targetYear, targetMonth + 1, 0)
            const periodStr = `${lastDay.getFullYear()}-${String(lastDay.getMonth() + 1).padStart(2, '0')}-${String(lastDay.getDate()).padStart(2, '0')}`
            
            let deprAmount = parseFloat((currentBookValue * monthlyRate).toFixed(2))
            
            // Ensure net book value doesn't drop below salvage value
            if (currentBookValue - deprAmount < salvageVal) {
              deprAmount = parseFloat((currentBookValue - salvageVal).toFixed(2))
            }
            if (i === usefulLifeMonths) {
              // Last period clears out any remaining depreciable amount
              deprAmount = parseFloat((currentBookValue - salvageVal).toFixed(2))
            }
            
            deprAmount = Math.max(0, deprAmount)
            accum += deprAmount
            currentBookValue -= deprAmount
            
            scheduleLines.push({
              periodDate: periodStr,
              depreciationAmount: deprAmount,
              accumulatedDepreciation: parseFloat(accum.toFixed(2)),
              remainingValue: parseFloat(currentBookValue.toFixed(2)) || 0,
              isPosted: false
            })
          }
        } else {
          // Straight Line method (default)
          const standardDepr = parseFloat(((payload.acquisitionCost - payload.salvageValue) / usefulLifeMonths).toFixed(2))
          for (let i = 1; i <= usefulLifeMonths; i++) {
            const targetYear = baseDate.getFullYear() + Math.floor((baseDate.getMonth() + (i - 1)) / 12)
            const targetMonth = (baseDate.getMonth() + (i - 1)) % 12
            const lastDay = new Date(targetYear, targetMonth + 1, 0)
            const periodStr = `${lastDay.getFullYear()}-${String(lastDay.getMonth() + 1).padStart(2, '0')}-${String(lastDay.getDate()).padStart(2, '0')}`
            
            let deprAmount = standardDepr
            if (i === usefulLifeMonths) {
              deprAmount = parseFloat((payload.acquisitionCost - payload.salvageValue - accum).toFixed(2))
            }
            
            deprAmount = Math.max(0, deprAmount)
            accum += deprAmount
            const remaining = payload.acquisitionCost - accum
            
            scheduleLines.push({
              periodDate: periodStr,
              depreciationAmount: deprAmount,
              accumulatedDepreciation: parseFloat(accum.toFixed(2)),
              remainingValue: parseFloat(remaining.toFixed(2)) || 0,
              isPosted: false
            })
          }
        }

        const simulatedContract = {
          ...payload,
          id: this.contracts.length + 1,
          netBookValue: payload.acquisitionCost,
          status: 'ACTIVE',
          scheduleLines
        }
        this.contracts.push(simulatedContract)
        this.$toast.info(`Staging mode: Asset saved locally with ${deprMethod === 'DOUBLE_DECLINING' ? 'double declining' : 'straight line'} schedules`)
        this.closeCapitalizationModal()
      } finally {
        this.savingContract = false
      }
    },

    async viewContractDetails(row) {
      this.selectedContract = null
      try {
        const response = await this.$axios.get(`/api/fixed-assets/contracts/${row.id}`)
        if (response.data) {
          this.selectedContract = response.data
        }
      } catch (error) {
        console.warn('API detail failed, loading from active array:', error)
        this.selectedContract = row
      } finally {
        this.detailsModal = true
      }
    },

    closeDetailsModal() {
      this.detailsModal = false
      this.selectedContract = null
      this.detailsTab = 0
      this.scheduleFilter = 'ALL'
    },

    // ASSET DISPOSAL METHODS
    openDisposalModal(contract) {
      this.disposalAsset = contract
      this.disposalForm = {
        disposalDate: today,
        salePrice: 0.00,
        cashAccountId: this.chartAccounts.find(a => a.accountNumber.startsWith('10'))?.id || null,
        gainLossAccountId: this.chartAccounts.find(a => a.accountNumber.startsWith('5') || a.accountNumber.startsWith('6'))?.id || null
      }
      if (this.$refs.disposalForm) this.$refs.disposalForm.resetValidation()
      this.disposalModal = true
    },

    closeDisposalModal() {
      this.disposalModal = false
      this.disposalAsset = {}
    },

    validateDisposalDate(val) {
      if (!val || !this.disposalAsset.capitalizationDate) return true
      if (new Date(val) < new Date(this.disposalAsset.capitalizationDate)) {
        return 'ວັນທີຈຳໜ່າຍ ຕ້ອງຫຼັງວັນທີເລີ່ມຫັກຄ່າຫຼຸ້ຍຫ້ຽນ'
      }
      return true
    },

    async saveDisposal() {
      if (!this.$refs.disposalForm.validate()) return
      this.savingDisposal = true

      const payload = {
        ...this.disposalForm,
        salePrice: parseFloat(this.disposalForm.salePrice)
      }

      try {
        await this.$axios.post(`/api/fixed-assets/contracts/${this.disposalAsset.id}/dispose`, payload)
        this.$toast.success('ຈຳໜ່າຍຊັບສິນຄົງທີ່ ແລະ ປິດບັນຊີສຳເລັດແລ້ວ')
        this.closeDisposalModal()
        this.closeDetailsModal()
        await this.fetchContracts()
      } catch (error) {
        console.warn('Disposal API failed, applying changes locally:', error)
        const target = this.contracts.find(c => c.id === this.disposalAsset.id)
        if (target) {
          target.status = 'DISPOSED'
          target.netBookValue = 0.00
          if (target.scheduleLines) {
            target.scheduleLines = target.scheduleLines.filter(line => line.isPosted)
          }
        }
        this.$toast.info('Staging mode: Asset status updated to DISPOSED')
        this.closeDisposalModal()
        this.closeDetailsModal()
      } finally {
        this.savingDisposal = false
      }
    },

    // Master name mapping utilities
    getProductNameById(id) {
      const p = this.products.find(p => p.id === id)
      return p ? p.productName : `Product #${id}`
    },

    getLocationNameById(id) {
      const loc = this.locations.find(l => l.id === id)
      return loc ? loc.name : `Location #${id}`
    },

    getVendorNameById(id) {
      const v = this.vendors.find(v => v.id === id)
      return v ? v.name : `Vendor #${id}`
    },

    getCurrencySymbol(id) {
      const ccy = this.currencies.find(c => c.id === id)
      if (!ccy) return ''
      if (ccy.code === 'USD') return '$'
      if (ccy.code === 'THB') return '฿'
      return ccy.code
    },

    getCurrencyCode(id) {
      const ccy = this.currencies.find(c => c.id === id)
      return ccy ? ccy.code : ''
    },

    getStatusColor(status) {
      if (status === 'DRAFT') return 'grey'
      if (status === 'ACTIVE') return 'indigo'
      if (status === 'FULLY_DEPRECIATED') return 'teal'
      if (status === 'DISPOSED') return 'danger'
      return 'secondary'
    },

    getStatusLaoText(status) {
      if (status === 'DRAFT') return 'ລໍຖ້າອະນຸມັດ'
      if (status === 'ACTIVE') return 'ກຳລັງນຳໃຊ້'
      if (status === 'FULLY_DEPRECIATED') return 'ຫັກຄົບແລ້ວ'
      if (status === 'DISPOSED') return 'ຈຳໜ່າຍແລ້ວ'
      return status
    }
  }
}
</script>

<style scoped>
.fixed-assets-container {
  font-family: 'Noto Sans Lao', 'Inter', -apple-system, sans-serif;
  color: #1e293b;
  background-color: #f8fafc;
  min-height: 100vh;
}

.slate-header-text {
  color: #0f172a;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.slate-title {
  color: #1e293b;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.glass-panel {
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(10px);
  border: 1px solid #e2e8f0;
}

.max-width-search {
  max-width: 320px;
}

.search-bar >>> .v-input__control >>> .v-input__slot {
  background-color: #f8fafc !important;
  border-radius: 8px !important;
}

.slate-table {
  background-color: #ffffff;
}

.slate-table >>> th {
  background-color: #f8fafc !important;
  font-weight: 700 !important;
  color: #475569 !important;
  font-size: 0.85rem !important;
  border-bottom: 2px solid #e2e8f0 !important;
  padding: 14px 16px !important;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.slate-table >>> td {
  padding: 14px 16px !important;
  font-size: 0.9rem !important;
  border-bottom: 1px solid #f1f5f9 !important;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.slate-table >>> tbody tr {
  cursor: pointer;
  transition: all 0.15s ease;
}

.slate-table >>> tbody tr:hover {
  background-color: #f8fafc !important;
}

.bg-slate-sub {
  background-color: #f8fafc !important;
}

.form-section-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: #334155;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.input-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #475569;
  margin-bottom: 4px;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.input-sub-title {
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.custom-field >>> .v-input__control >>> .v-input__slot {
  background-color: #ffffff !important;
  border-radius: 8px !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.02) !important;
  transition: all 0.2s ease-in-out;
  padding: 0 12px !important;
}

.custom-field >>> .v-input__control >>> .v-input__slot:hover {
  border-color: #cbd5e1 !important;
}

.custom-field.v-input--is-focused >>> .v-input__control >>> .v-input__slot {
  border-color: var(--v-primary-base) !important;
  box-shadow: 0 0 0 3px rgba(1, 83, 43, 0.15) !important;
}

.custom-field >>> .v-input__control >>> .v-input__slot::before,
.custom-field >>> .v-input__control >>> .v-input__slot::after {
  display: none !important;
}

.custom-field >>> .v-text-field__slot input {
  font-size: 0.85rem !important;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.custom-field >>> .v-icon {
  font-size: 1.1rem !important;
  color: #94a3b8 !important;
}

.border-left-sm {
  border-left: 1px solid #e2e8f0;
}

@media (max-width: 599px) {
  .border-left-sm {
    border-left: none;
    border-top: 1px solid #e2e8f0;
    padding-top: 16px;
    margin-top: 16px;
  }
}

.detail-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2px;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.detail-val {
  font-weight: 700;
  color: #0f172a;
  font-size: 0.95rem;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.text-success-amount {
  color: #059669 !important;
}

.border-bottom {
  border-bottom: 1px solid #f1f5f9;
}

.gap-2 {
  gap: 8px;
}
.gap-3 {
  gap: 12px;
}
.gap-4 {
  gap: 16px;
}

.shadow-soft {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.025) !important;
  border-color: #f1f5f9 !important;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.info-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.info-value {
  font-size: 0.88rem;
  font-weight: 700;
  color: #0f172a;
  text-align: right;
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.bg-success-light {
  background-color: #f0fdf4 !important;
}

.bg-warning-light {
  background-color: #fffbeb !important;
}

.border-success-sub {
  border-color: #bbf7d0 !important;
}

.border-warning-sub {
  border-color: #fef08a !important;
}

.text-warning-amount {
  color: #d97706 !important;
}

.custom-tabs >>> .v-tabs-bar {
  background-color: transparent !important;
}

.custom-tabs >>> .v-tab {
  font-size: 0.85rem !important;
  font-family: 'Noto Sans Lao', sans-serif !important;
  letter-spacing: normal !important;
  color: #64748b !important;
  transition: all 0.2s ease;
}

.custom-tabs >>> .v-tab--active {
  color: var(--v-primary-base) !important;
  font-weight: 800 !important;
}
</style>

<style>
/* Global Noto Sans Lao font family overrides to affect Vuetify dialogs, floating dropdown elements, and body */
.v-application,
.v-application *,
.v-dialog,
.v-dialog *,
.v-menu__content,
.v-menu__content *,
.swal2-container,
.swal2-container * {
  font-family: 'Noto Sans Lao', 'Inter', sans-serif !important;
}
</style>
