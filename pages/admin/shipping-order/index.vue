<template>
  <div class="text-left font-lao">
    <!-- Header Page Title -->
    <div class="d-flex align-center justify-space-between mb-4">
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start class="mr-2">mdi-truck-delivery-outline</v-icon>
        <h3>ລະບົບຈັດການການຂົນສົ່ງຂ້າມແດນ (Cross-Border Shipping Orders Hub)</h3>
      </v-chip>
      
      <v-btn small text color="primary" @click="loadData" :loading="loading">
        <v-icon small left>mdi-refresh</v-icon>
        ໂຫຼດຂໍ້ມູນໃໝ່
      </v-btn>
    </div>

    <!-- Main Navigation Tabs -->
    <v-card class="elevation-3 rounded-lg mb-6">
      <v-tabs v-model="activeTab" background-color="transparent" color="primary" grow>
        <v-tab class="font-weight-bold">
          <v-icon left>mdi-view-dashboard</v-icon>
          ພາບລວມ & ລາຍການທັງໝົດ
        </v-tab>
        <v-tab class="font-weight-bold">
          <v-icon left>mdi-barcode-scan</v-icon>
          ສະແກນຮັບເຄື່ອງເຂົ້າສາງ
        </v-tab>
        <v-tab class="font-weight-bold">
          <v-icon left>mdi-cash-register</v-icon>
          ລູກຄ້າຮັບເຄື່ອງ (Cashier)
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="activeTab" class="pa-4 bg-light-gray">
        <!-- TAB 1: DASHBOARD & ALL ORDERS LIST -->
        <v-tab-item>
          <!-- Summary Cards Section -->
          <v-row class="mb-4">
            <!-- Total Orders -->
            <v-col cols="12" sm="6" md="3">
              <v-card class="pa-4 border-left-primary elevation-1 rounded-lg">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <span class="text-subtitle-2 grey--text">ອໍເດີທັງໝົດ</span>
                    <h2 class="text-h4 font-weight-bold mt-1 primary--text">{{ entries.length }}</h2>
                  </div>
                  <v-avatar color="lightprimary" size="48">
                    <v-icon color="primary">mdi-format-list-bulleted</v-icon>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>

            <!-- Pending -->
            <v-col cols="12" sm="6" md="3">
              <v-card class="pa-4 border-left-warning elevation-1 rounded-lg">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <span class="text-subtitle-2 grey--text">ລໍຖ້າເຄື່ອງຮອດສາງ</span>
                    <h2 class="text-h4 font-weight-bold mt-1 orange--text">{{ getCountByStatus('PENDING') }}</h2>
                  </div>
                  <v-avatar color="orange lighten-5" size="48">
                    <v-icon color="orange">mdi-clock-outline</v-icon>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>

            <!-- Arrived -->
            <v-col cols="12" sm="6" md="3">
              <v-card class="pa-4 border-left-info elevation-1 rounded-lg">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <span class="text-subtitle-2 grey--text">ເຄື່ອງມາຮອດສາງແລ້ວ</span>
                    <h2 class="text-h4 font-weight-bold mt-1 blue--text">{{ getCountByStatus('ARRIVED') }}</h2>
                  </div>
                  <v-avatar color="blue lighten-5" size="48">
                    <v-icon color="blue">mdi-warehouse</v-icon>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>

            <!-- Completed -->
            <v-col cols="12" sm="6" md="3">
              <v-card class="pa-4 border-left-success elevation-1 rounded-lg">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <span class="text-subtitle-2 grey--text">ລູກຄ້າຮັບເຄື່ອງແລ້ວ</span>
                    <h2 class="text-h4 font-weight-bold mt-1 green--text">{{ getCountByStatus('COMPLETED') }}</h2>
                  </div>
                  <v-avatar color="green lighten-5" size="48">
                    <v-icon color="green">mdi-checkbox-marked-circle-outline</v-icon>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Filters Section -->
          <v-card class="pa-4 mb-4 elevation-1 rounded-lg">
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="searchQuery"
                  append-icon="mdi-magnify"
                  label="ຄົ້ນຫາ (ບາໂຄດ, ຊື່, ເບີໂທ)"
                  outlined
                  dense
                  hide-details
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  v-model="statusFilter"
                  :items="statusOptions"
                  label="ສະຖານະ"
                  outlined
                  dense
                  hide-details
                ></v-select>
              </v-col>
              <v-col cols="12" sm="4" class="d-flex align-center justify-end">
                <v-btn color="primary" rounded @click="loadData" :loading="loading">
                  <v-icon left>mdi-sync</v-icon> ດຶງຂໍ້ມູນ
                </v-btn>
              </v-col>
            </v-row>
          </v-card>

          <!-- Data Table -->
          <v-data-table
            :headers="tableHeaders"
            :items="filteredEntries"
            :loading="loading"
            class="elevation-1 rounded-lg"
            :footer-props="{
              'items-per-page-text': 'ຈຳນວນແຖວຕໍ່ໜ້າ',
              'items-per-page-options': [10, 20, 50, 100]
            }"
          >
            <!-- Date Template -->
            <template v-slot:[`item.createdAt`]="{ item }">
              {{ formatDateTime(item.createdAt) }}
            </template>

            <!-- Customer Template -->
            <template v-slot:[`item.customer`]="{ item }">
              <div v-if="item.customer">
                <div class="font-weight-bold">{{ item.customer.name }}</div>
                <div class="text-caption grey--text">{{ item.customer.telephone }}</div>
              </div>
              <span v-else class="red--text">ບໍ່ມີຂໍ້ມູນລູກຄ້າ</span>
            </template>

            <!-- Price Template -->
            <template v-slot:[`item.final_price`]="{ item }">
              <span v-if="item.final_price !== null" class="font-weight-bold">
                {{ formatPrice(item.final_price) }} {{ item.currency ? item.currency.code : 'LAK' }}
                <div v-if="item.currency && !item.currency.isLocalCCY" class="text-caption grey--text font-weight-normal mt-1">
                  ≈ {{ formatPrice(convertToLocal(item.final_price, item.currency_id)) }} {{ localCurrencyCode }}
                </div>
              </span>
              <span v-else class="grey--text">—</span>
            </template>

            <!-- Status Badge -->
            <template v-slot:[`item.status`]="{ item }">
              <v-chip :color="getStatusColor(item.status)" text-color="white" small class="font-weight-bold">
                {{ getStatusLabel(item.status) }}
              </v-chip>
            </template>

            <!-- Detail Timestamps -->
            <template v-slot:[`item.timestamps`]="{ item }">
              <div class="text-caption">
                <div v-if="item.arrived_at">
                  <v-icon x-small color="blue">mdi-clock-in</v-icon> ຮອດສາງ: {{ formatDateTime(item.arrived_at) }}
                </div>
                <div v-if="item.picked_up_at">
                  <v-icon x-small color="green">mdi-clock-out</v-icon> ຮັບໄປ: {{ formatDateTime(item.picked_up_at) }}
                </div>
              </div>
            </template>
          </v-data-table>
        </v-tab-item>

        <!-- TAB 2: WAREHOUSE SCAN (ITEM ARRIVAL) -->
        <v-tab-item>
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-card class="pa-6 text-center elevation-1 rounded-lg">
                <v-avatar color="lightprimary" size="80" class="mb-4">
                  <v-icon color="primary" size="48">mdi-barcode-scan</v-icon>
                </v-avatar>
                
                <h3 class="text-h5 font-weight-bold mb-2 primary--text">ສະແກນຮັບເຄື່ອງເຂົ້າສາງ</h3>
                <p class="grey--text mb-6">ກະລຸນາສະແກນບາໂຄດເທິງກ່ອງ/ຫໍ່ພັດສະດຸ ເພື່ອຢືນຢັນການມາຮອດສາງ ແລະ ກຳນົດລາຄາຂົນສົ່ງ</p>

                <!-- Barcode Input Box -->
                <v-form @submit.prevent="handleArrivalScan">
                  <v-text-field
                    v-model="arrivalBarcode"
                    id="arrival-barcode-field"
                    ref="arrivalBarcodeField"
                    label="ສະແກນ ຫຼື ປ້ອນເລກບາໂຄດ *"
                    outlined
                    prepend-inner-icon="mdi-barcode"
                    append-icon="mdi-magnify"
                    @click:append="handleArrivalScan"
                    autofocus
                    class="rounded-lg text-h6 font-weight-bold mb-2"
                    :loading="scanningArrival"
                    placeholder="Barcode..."
                    hide-details
                  ></v-text-field>
                </v-form>
                
                <!-- Tips / Keyboard Focus Alert -->
                <div class="mt-3 text-caption grey--text d-flex align-center justify-center mb-3">
                  <v-icon x-small color="grey" class="mr-1">mdi-keyboard</v-icon>
                  <span>ລະບົບຈະໂຟກັສຊ່ອງສະແກນອັດຕະໂນມັດ ຫຼັງຈາກການຢືນຢັນແຕ່ລະຄັ້ງ</span>
                </div>

                <!-- Add Manually Button -->
                <div>
                  <v-btn outlined color="primary" rounded @click="openManualRegister('')">
                    <v-icon left>mdi-plus-circle-outline</v-icon>
                    ລົງທະບຽນພັດສະດຸເອງ (Add Manually)
                  </v-btn>
                </div>
              </v-card>

              <!-- Single Match Form -->
              <v-card v-if="arrivalMatch" class="mt-6 pa-6 elevation-2 border-left-success rounded-lg">
                <h3 class="text-h6 font-weight-bold mb-4 green--text d-flex align-center">
                  <v-icon color="green" class="mr-2">mdi-check-circle</v-icon>
                  ພົບຂໍ້ມູນພັດສະດຸ 1 ລາຍການ
                </h3>
                
                <v-row class="mb-4">
                  <v-col cols="12" sm="6">
                    <div class="grey--text text-caption">ເລກບາໂຄດ:</div>
                    <div class="text-h6 font-weight-bold">{{ arrivalMatch.barcode }}</div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <div class="grey--text text-caption">ລູກຄ້າ:</div>
                    <div class="text-h6 font-weight-bold">
                      {{ arrivalMatch.customer ? arrivalMatch.customer.name : 'ບໍ່ລະບຸ' }}
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <div class="grey--text text-caption">ເບີໂທລະສັບ:</div>
                    <div class="text-h6">{{ arrivalMatch.customer ? arrivalMatch.customer.telephone : '—' }}</div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <div class="grey--text text-caption">ທີ່ຢູ່:</div>
                    <div class="text-h6">{{ arrivalMatch.customer ? arrivalMatch.customer.address : '—' }}</div>
                  </v-col>
                </v-row>

                <v-divider class="my-4"></v-divider>

                <!-- Confirm Final Price -->
                <v-form @submit.prevent="confirmArrivalPrice">
                  <v-row align="center">
                    <v-col cols="12" sm="3">
                      <v-select
                        v-model="arrivalCurrencyId"
                        :items="currencyOptions"
                        label="ສະກຸນເງິນ *"
                        outlined
                        dense
                        hide-details
                        class="font-weight-bold"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="5">
                      <v-text-field
                        v-model.number="arrivalFinalPrice"
                        ref="arrivalPriceField"
                        label="ກຳນົດຄ່າບໍລິການຂົນສົ່ງ *"
                        outlined
                        dense
                        type="number"
                        :prefix="selectedArrivalCurrencySymbol"
                        placeholder="ກະລຸນາໃສ່ລາຄາສຸດທ້າຍ..."
                        class="text-h6 font-weight-bold mb-0"
                        hide-details
                        :rules="[v => !!v || 'ກະລຸນາໃສ່ລາຄາຂົນສົ່ງ']"
                      ></v-text-field>
                      <div v-if="arrivalCurrencyId && isForeignCurrency(arrivalCurrencyId) && arrivalFinalPrice" class="text-caption green--text mt-1 font-weight-bold text-left">
                        ≈ {{ formatPrice(convertToLocal(arrivalFinalPrice, arrivalCurrencyId)) }} {{ localCurrencyCode }}
                      </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-btn
                        color="success"
                        large
                        block
                        class="rounded-lg"
                        @click="confirmArrivalPrice"
                        :loading="confirmingArrival"
                      >
                        <v-icon left>mdi-checkbox-marked-circle</v-icon>
                        ຢືນຢັນເຄື່ອງເຂົ້າສາງ
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>

              <!-- Duplicate Matches Selector -->
              <v-card v-if="arrivalDuplicates.length > 0" class="mt-6 pa-6 elevation-2 border-left-warning rounded-lg">
                <h3 class="text-h6 font-weight-bold mb-2 orange--text d-flex align-center">
                  <v-icon color="orange" class="mr-2">mdi-alert</v-icon>
                  ພົບຂໍ້ມູນບາໂຄດຊ້ຳກັນ ({{ arrivalDuplicates.length }} ລາຍການ)
                </h3>
                <p class="grey--text text-caption mb-4">ກະລຸນາເລືອກລູກຄ້າທີ່ຖືກຕ້ອງ ເພື່ອດຳເນີນການຕໍ່</p>

                <v-list class="elevation-1 rounded-lg">
                  <v-list-item
                    v-for="order in arrivalDuplicates"
                    :key="order.id"
                    @click="selectDuplicateOrder(order)"
                    class="py-2 border-bottom"
                  >
                    <v-list-item-avatar color="orange lighten-5">
                      <v-icon color="orange">mdi-account</v-icon>
                    </v-list-item-avatar>
                    
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold text-subtitle-1">
                        {{ order.customer ? order.customer.name : 'ບໍ່ມີຊື່' }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        ເບີໂທ: {{ order.customer ? order.customer.telephone : '—' }} | ທີ່ຢູ່: {{ order.customer ? order.customer.address : '—' }}
                      </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn small color="primary" rounded>
                        ເລືອກ
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

        <!-- TAB 3: CUSTOMER PICKUP SCAN (CASHIER CHECKOUT) -->
        <v-tab-item>
          <v-row justify="center">
            <v-col cols="12" md="10">
              <v-card class="pa-6 text-center elevation-1 rounded-lg mb-6">
                <v-avatar color="blue lighten-5" size="80" class="mb-4">
                  <v-icon color="blue" size="48">mdi-scanner</v-icon>
                </v-avatar>
                
                <h3 class="text-h5 font-weight-bold mb-2 blue--text">ສະແກນເຄື່ອງໃຫ້ລູກຄ້າ</h3>
                <p class="grey--text mb-6">ສະແກນບາໂຄດເຄື່ອງທີ່ລູກຄ້ານຳມາຮັບ ເພື່ອສະຫຼຸບຍອດຊຳລະ ແລະ ປິດອໍເດີ</p>

                <v-form @submit.prevent="handlePickupScan">
                  <v-text-field
                    v-model="pickupBarcode"
                    id="pickup-barcode-field"
                    ref="pickupBarcodeField"
                    label="ສະແກນ ຫຼື ປ້ອນເລກບາໂຄດ *"
                    outlined
                    prepend-inner-icon="mdi-barcode"
                    append-icon="mdi-magnify"
                    @click:append="handlePickupScan"
                    class="rounded-lg text-h6 font-weight-bold"
                    :loading="scanningPickup"
                    placeholder="Barcode..."
                    hide-details
                  ></v-text-field>
                </v-form>
                
                <!-- Input Manually Button -->
                <div class="mt-3">
                  <v-btn outlined color="primary" rounded @click="openManualPickup">
                    <v-icon left>mdi-keyboard-outline</v-icon>
                    ປ້ອນເລກບາໂຄດເອງ (Input Manually)
                  </v-btn>
                </div>
              </v-card>

              <!-- Checkout Screen Area -->
              <v-row v-if="scannedPickupOrder">
                <!-- Main Items List -->
                <v-col cols="12" md="7">
                  <!-- Scanned Item Details -->
                  <v-card class="pa-5 elevation-2 mb-4 border-left-success rounded-lg">
                    <h4 class="text-subtitle-1 font-weight-bold mb-3 d-flex align-center green--text">
                      <v-icon color="green" class="mr-2">mdi-checkbox-marked-circle-outline</v-icon>
                      ລາຍການທີ່ສະແກນຫຼ້າສຸດ
                    </h4>
                    
                    <div class="d-flex justify-space-between align-center py-2">
                      <div>
                        <div class="text-caption grey--text">ບາໂຄດພັດສະດຸ</div>
                        <div class="text-subtitle-1 font-weight-bold">{{ scannedPickupOrder.barcode }}</div>
                      </div>
                      <div class="text-right">
                        <div class="text-caption grey--text">ຄ່າບໍລິການ</div>
                        <div class="text-h6 font-weight-bold primary--text">
                          {{ formatPrice(scannedPickupOrder.final_price) }} {{ scannedPickupOrder.currency ? scannedPickupOrder.currency.code : 'LAK' }}
                        </div>
                      </div>
                    </div>
                  </v-card>

                  <!-- Upsell Alert / Other Shelf Items Banner -->
                  <v-alert
                    v-if="otherArrivedItems.length > 0"
                    color="orange lighten-5"
                    border="left"
                    colored-border
                    type="warning"
                    icon="mdi-alert-circle"
                    class="elevation-2 rounded-lg pa-4 mb-4"
                  >
                    <div class="font-weight-bold text-subtitle-1 orange--text text--darken-3 mb-1">
                      🔔 ພົບເຄື່ອງອື່ນໆຂອງລູກຄ້າຜູ້ນີ້ ຢູ່ເທິງຊັ້ນວາງ!
                    </div>
                    <div class="text-body-2 black--text mb-3">
                      ລູກຄ້າມີພັດສະດຸອື່ນອີກ <strong>{{ otherArrivedItems.length }}</strong> ລາຍການທີ່ຍັງບໍ່ໄດ້ຮັບ. ທ່ານຕ້ອງການຮັບພ້ອມກັນເລີຍບໍ່?
                    </div>

                    <v-list class="transparent pa-0">
                      <v-list-item
                        v-for="item in otherArrivedItems"
                        :key="item.id"
                        class="px-0 py-1"
                      >
                        <v-list-item-action class="ma-0 mr-3">
                          <v-checkbox
                            v-model="selectedCheckoutIds"
                            :value="item.id"
                            color="primary"
                            hide-details
                          ></v-checkbox>
                        </v-list-item-action>
                        
                        <v-list-item-content class="pa-0">
                          <v-list-item-title class="font-weight-bold text-body-2">
                            ບາໂຄດ: {{ item.barcode }}
                          </v-list-item-title>
                          <v-list-item-subtitle class="text-caption">
                            ວັນທີມາຮອດສາງ: {{ formatDateTime(item.arrived_at) }}
                          </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action class="ma-0">
                          <span class="font-weight-bold text-body-2 primary--text">
                            {{ formatPrice(item.final_price) }} {{ item.currency ? item.currency.code : 'LAK' }}
                          </span>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                    
                    <div class="d-flex justify-end mt-3">
                      <v-btn small color="orange darken-2" dark class="rounded-lg mr-2" @click="selectAllOtherItems">
                        ເລືອກທັງໝົດ
                      </v-btn>
                      <v-btn small color="grey" text @click="deselectAllOtherItems">
                        ຍົກເລີກທັງໝົດ
                      </v-btn>
                    </div>
                  </v-alert>
                </v-col>

                <!-- Billing Summary Card -->
                <v-col cols="12" md="5">
                  <v-card class="pa-5 elevation-3 rounded-lg fill-height d-flex flex-column justify-space-between">
                    <div>
                      <h4 class="text-h6 font-weight-bold mb-4 d-flex align-center">
                        <v-icon color="primary" class="mr-2">mdi-receipt</v-icon>
                        ໃບບິນສະຫຼຸບການຮັບເຄື່ອງ
                      </h4>

                      <!-- Customer Info Header -->
                      <div class="bg-light-green pa-3 rounded-lg mb-4" v-if="scannedPickupOrder.customer">
                        <div class="font-weight-bold primary--text text-subtitle-1">
                          {{ scannedPickupOrder.customer.name }}
                        </div>
                        <div class="text-body-2 mt-1">
                          <v-icon small class="mr-1">mdi-phone</v-icon>
                          {{ scannedPickupOrder.customer.telephone }}
                        </div>
                      </div>

                      <!-- Selected Items Breakdown -->
                      <div class="text-subtitle-2 font-weight-bold mb-2">ລາຍການທີ່ຈະຮັບເຄື່ອງ:</div>
                      <v-divider class="mb-2"></v-divider>
                      
                      <div class="items-list-container pr-1 max-height-250">
                        <!-- Scanned Item -->
                        <div class="d-flex justify-space-between py-1 text-body-2">
                          <span>📦 {{ scannedPickupOrder.barcode }} (ຫຼັກ)</span>
                          <span class="font-weight-bold">{{ formatPrice(scannedPickupOrder.final_price) }} {{ scannedPickupOrder.currency ? scannedPickupOrder.currency.code : 'LAK' }}</span>
                        </div>

                        <!-- Selected Optional Items -->
                        <div
                          v-for="item in checkoutOptionalItems"
                          :key="item.id"
                          class="d-flex justify-space-between py-1 text-body-2"
                        >
                          <span>📦 {{ item.barcode }}</span>
                          <span class="font-weight-bold">{{ formatPrice(item.final_price) }} {{ item.currency ? item.currency.code : 'LAK' }}</span>
                        </div>
                      </div>

                      <v-divider class="my-4"></v-divider>
                    </div>

                    <div>
                      <!-- Total Breakdown -->
                      <div class="d-flex flex-column mb-4">
                        <div class="d-flex justify-space-between align-center">
                          <span class="text-subtitle-1 font-weight-bold">ລວມທັງໝົດ ({{ checkoutCount }} ພັດສະດຸ):</span>
                        </div>
                        <div v-for="t in checkoutTotalsBreakdown" :key="t.code" class="text-right mt-1">
                          <span class="text-h5 font-weight-bold primary--text">
                            {{ formatPrice(t.total) }} {{ t.code }}
                          </span>
                        </div>
                      </div>

                      <!-- Confirm Button -->
                      <v-btn
                        color="primary"
                        x-large
                        block
                        rounded
                        class="elevation-2 font-weight-bold py-6 text-subtitle-1"
                        @click="submitCompletePickup"
                        :loading="completingPickup"
                      >
                        <v-icon left>mdi-cash-register</v-icon>
                        ຢືນຢັນການຮັບເຄື່ອງ & ຊຳລະເງິນ
                      </v-btn>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <!-- Manual Registration Dialog -->
    <v-dialog v-model="manualRegisterDialog" max-width="600" persistent>
      <v-card class="rounded-lg pa-4 font-lao">
        <v-card-title class="font-weight-bold primary--text text-h6 d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-plus-circle-outline</v-icon>
          ລົງທະບຽນພັດສະດຸໃໝ່ດ້ວຍຕົນເອງ
        </v-card-title>
        
        <v-card-text class="pt-4">
          <v-form ref="manualRegisterForm" lazy-validation>
            <v-text-field
              v-model="manualBarcode"
              label="ເລກບາໂຄດພັດສະດຸ *"
              outlined
              dense
              required
              :disabled="barcodePrefilled"
              :rules="[v => !!v || 'ກະລຸນາໃສ່ເລກບາໂຄດ']"
              class="mb-3 font-weight-bold"
            ></v-text-field>

            <v-autocomplete
              v-model="manualCustomerId"
              :items="customerOptions"
              label="ຄົ້ນຫາ ແລະ ເລືອກລູກຄ້າ *"
              outlined
              dense
              required
              placeholder="ປ້ອນຊື່ ຫຼື ເບີໂທ ເພື່ອຄົ້ນຫາ..."
              class="mb-3"
              :rules="[v => !!v || 'ກະລຸນາເລືອກລູກຄ້າ']"
            ></v-autocomplete>

            <v-row class="mb-0">
              <v-col cols="12" sm="5" class="py-0">
                <v-select
                  v-model="manualCurrencyId"
                  :items="currencyOptions"
                  label="ສະກຸນເງິນ *"
                  outlined
                  dense
                  required
                  class="font-weight-bold"
                  :rules="[v => !!v || 'ກະລຸນາເລືອກສະກຸນເງິນ']"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="7" class="py-0">
                <v-text-field
                  v-model.number="manualFinalPrice"
                  label="ກຳນົດຄ່າບໍລິການຂົນສົ່ງ *"
                  outlined
                  dense
                  type="number"
                  :prefix="selectedManualCurrencySymbol"
                  required
                  placeholder="ໃສ່ລາຄາຂົນສົ່ງ..."
                  class="font-weight-bold"
                  :rules="[v => !!v || 'ກະລຸນາໃສ່ລາຄາຂົນສົ່ງ']"
                ></v-text-field>
                <div v-if="manualCurrencyId && isForeignCurrency(manualCurrencyId) && manualFinalPrice" class="text-caption green--text mt-1 font-weight-bold text-left">
                  ≈ {{ formatPrice(convertToLocal(manualFinalPrice, manualCurrencyId)) }} {{ localCurrencyCode }}
                </div>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions class="px-4 pb-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="closeManualRegister" :disabled="savingManualOrder">
            ຍົກເລີກ
          </v-btn>
          <v-btn color="primary" rounded class="px-4" @click="submitManualOrder" :loading="savingManualOrder">
            <v-icon left>mdi-content-save</v-icon>
            ບັນທຶກລາຍການ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Manual Pickup Dialog -->
    <v-dialog v-model="manualPickupDialog" max-width="500" persistent>
      <v-card class="rounded-lg pa-4 font-lao">
        <v-card-title class="font-weight-bold primary--text text-h6 d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-keyboard-outline</v-icon>
          ປ້ອນເລກບາໂຄດພັດສະດຸດ້ວຍຕົນເອງ
        </v-card-title>
        
        <v-card-text class="pt-4">
          <v-form ref="manualPickupForm" lazy-validation @submit.prevent="submitManualPickup">
            <v-text-field
              v-model="manualPickupBarcode"
              label="ເລກບາໂຄດພັດສະດຸ *"
              outlined
              dense
              required
              :rules="[v => !!v || 'ກະລຸນາໃສ່ເລກບາໂຄດ']"
              class="mb-0 font-weight-bold"
              autofocus
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions class="px-4 pb-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="closeManualPickup">
            ຍົກເລີກ
          </v-btn>
          <v-btn color="primary" rounded class="px-4" @click="submitManualPickup">
            <v-icon left>mdi-magnify</v-icon>
            ຄົ້ນຫາພັດສະດຸ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { swalSuccess, swalError2, getFormatNum, getLocalDate, swalConfirm } from '~/common'

export default {
  middleware: 'auths',
  data() {
    return {
      activeTab: 0,
      loading: false,
      entries: [],
      searchQuery: '',
      statusFilter: 'ALL',
      
      // Status dropoptions
      statusOptions: [
        { text: 'ທັງໝົດ', value: 'ALL' },
        { text: 'ລໍຖ້າເຄື່ອງຮອດສາງ (PENDING)', value: 'PENDING' },
        { text: 'ເຄື່ອງມາຮອດສາງແລ້ວ (ARRIVED)', value: 'ARRIVED' },
        { text: 'ລູກຄ້າຮັບເຄື່ອງແລ້ວ (COMPLETED)', value: 'COMPLETED' }
      ],

      // Table headers setup
      tableHeaders: [
        { text: 'ວັນທີສ້າງ', align: 'left', value: 'createdAt', sortable: true },
        { text: 'ເລກບາໂຄດ', align: 'left', value: 'barcode', sortable: true },
        { text: 'ລູກຄ້າ / ເບີໂທ', align: 'left', value: 'customer', sortable: false },
        { text: 'ລາຄາສຸດທ້າຍ', align: 'right', value: 'final_price', sortable: true },
        { text: 'ສະຖານະ', align: 'center', value: 'status', sortable: true },
        { text: 'ໄລຍະເວລາການດຳເນີນງານ', align: 'left', value: 'timestamps', sortable: false }
      ],

      // Tab 2 (Arrival Scan) Data
      arrivalBarcode: '',
      scanningArrival: false,
      confirmingArrival: false,
      arrivalMatch: null,
      arrivalFinalPrice: '',
      arrivalDuplicates: [],

      // Tab 3 (Pickup Scan) Data
      pickupBarcode: '',
      scanningPickup: false,
      completingPickup: false,
      scannedPickupOrder: null,
      otherArrivedItems: [],
      selectedCheckoutIds: [], // Other checkmarked orders

      // Manual Registration Form Data
      manualRegisterDialog: false,
      manualBarcode: '',
      manualCustomerId: null,
      manualFinalPrice: '',
      barcodePrefilled: false,
      savingManualOrder: false,

      // Currency Selection
      arrivalCurrencyId: null,
      manualCurrencyId: null,

      // Manual Pickup
      manualPickupDialog: false,
      manualPickupBarcode: ''
    }
  },

  computed: {
    ...mapGetters(['findAllClient', 'findAllCurrency', 'findLocalCurrency']),

    customerOptions() {
      const clients = this.findAllClient || [];
      return clients.map(c => ({
        value: c.id,
        text: `${c.name} (${c.telephone || 'ບໍ່ມີເບີ'})`
      }));
    },

    currencyOptions() {
      const currencies = this.findAllCurrency || [];
      const activeCurrencies = currencies.filter(c => c.isActive === true || c.isActive === 1);
      if (activeCurrencies.length === 0) {
        return [{ value: 1, text: 'LAK (₭)' }];
      }
      return activeCurrencies.map(c => ({
        value: c.id,
        text: c.symbol ? `${c.code} (${c.symbol})` : c.code
      }));
    },

    selectedArrivalCurrencySymbol() {
      const ccy = (this.findAllCurrency || []).find(c => c.id === this.arrivalCurrencyId);
      return ccy && ccy.symbol ? ccy.symbol : '';
    },

    selectedManualCurrencySymbol() {
      const ccy = (this.findAllCurrency || []).find(c => c.id === this.manualCurrencyId);
      return ccy && ccy.symbol ? ccy.symbol : '';
    },

    localCurrencyCode() {
      const currencies = this.findAllCurrency || [];
      const local = currencies.find(c => c.isLocalCCY === true || c.isLocalCCY === 1 || c.code === 'LAK');
      return local ? local.code : 'LAK';
    },

    // Filter and search logic for Tab 1
    filteredEntries() {
      let result = this.entries;

      if (this.statusFilter !== 'ALL') {
        result = result.filter(el => el.status === this.statusFilter);
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase().trim();
        result = result.filter(el => {
          const barcode = el.barcode ? el.barcode.toLowerCase() : '';
          const name = el.customer && el.customer.name ? el.customer.name.toLowerCase() : '';
          const tel = el.customer && el.customer.telephone ? el.customer.telephone.toLowerCase() : '';
          return barcode.includes(query) || name.includes(query) || tel.includes(query);
        });
      }

      return result;
    },

    // Selected items from other items on shelf
    checkoutOptionalItems() {
      if (!this.otherArrivedItems.length) return [];
      return this.otherArrivedItems.filter(item => this.selectedCheckoutIds.includes(item.id));
    },

    // Total checkout count
    checkoutCount() {
      if (!this.scannedPickupOrder) return 0;
      return 1 + this.checkoutOptionalItems.length;
    },

    // Total checkout price sum
    checkoutTotalPrice() {
      if (!this.scannedPickupOrder) return 0;
      const primaryPrice = parseFloat(this.scannedPickupOrder.final_price) || 0;
      const secondaryPrice = this.checkoutOptionalItems.reduce((sum, item) => sum + (parseFloat(item.final_price) || 0), 0);
      return primaryPrice + secondaryPrice;
    },

    checkoutTotalsBreakdown() {
      if (!this.scannedPickupOrder) return [];
      const totals = {};
      
      // Add primary scanned item
      const primaryCurrency = this.scannedPickupOrder.currency ? this.scannedPickupOrder.currency.code : 'LAK';
      const primaryPrice = parseFloat(this.scannedPickupOrder.final_price) || 0;
      totals[primaryCurrency] = (totals[primaryCurrency] || 0) + primaryPrice;

      // Add secondary items
      this.checkoutOptionalItems.forEach(item => {
        const ccy = item.currency ? item.currency.code : 'LAK';
        const price = parseFloat(item.final_price) || 0;
        totals[ccy] = (totals[ccy] || 0) + price;
      });

      return Object.keys(totals).map(code => ({
        code,
        total: totals[code]
      }));
    }
  },

  watch: {
    activeTab(newTab) {
      // Auto-focus barcode inputs when switching tabs
      this.$nextTick(() => {
        if (newTab === 1 && this.$refs.arrivalBarcodeField) {
          this.$refs.arrivalBarcodeField.focus();
        } else if (newTab === 2 && this.$refs.pickupBarcodeField) {
          this.$refs.pickupBarcodeField.focus();
        }
      });
    },
    findAllCurrency: {
      immediate: true,
      handler(list) {
        if (list && list.length > 0) {
          const localCcy = list.find(c => c.isLocalCCY === true || c.isLocalCCY === 1 || c.code === 'LAK');
          const defaultId = localCcy ? localCcy.id : list[0].id;
          if (!this.arrivalCurrencyId) this.arrivalCurrencyId = defaultId;
          if (!this.manualCurrencyId) this.manualCurrencyId = defaultId;
        }
      }
    }
  },

  async created() {
    await this.loadData()
  },

  mounted() {
    // Enable keyboard event listener for barcode scans
    window.addEventListener('keydown', this.handleGlobalKeyDown);
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.handleGlobalKeyDown);
  },

  methods: {
    // API Call: Fetch all orders
    async loadData() {
      if (this.loading) return;
      this.loading = true;
      try {
        const response = await this.$axios.get('api/shipping-orders');
        this.entries = Array.isArray(response.data) ? response.data : [];
      } catch (error) {
        console.error('Error fetching shipping orders:', error);
        swalError2(this.$swal, 'ຂໍ້ຜິດພາດ', 'ບໍ່ສາມາດໂຫຼດຂໍ້ມູນການຂົນສົ່ງໄດ້ ' + (error.message || ''));
      } finally {
        this.loading = false;
      }
    },

    getCountByStatus(status) {
      return this.entries.filter(el => el.status === status).length;
    },

    // Utility formatting methods
    formatPrice(val) {
      return getFormatNum(val);
    },

    formatDateTime(dateStr) {
      if (!dateStr) return '';
      return getLocalDate(dateStr);
    },

    getStatusColor(status) {
      switch (status) {
        case 'PENDING': return 'orange darken-1';
        case 'ARRIVED': return 'blue darken-1';
        case 'COMPLETED': return 'green darken-1';
        default: return 'grey';
      }
    },

    getStatusLabel(status) {
      switch (status) {
        case 'PENDING': return 'ລໍຖ້າເຄື່ອງເຂົ້າສາງ';
        case 'ARRIVED': return 'ຮອດສາງແລ້ວ';
        case 'COMPLETED': return 'ຮັບເຄື່ອງແລ້ວ';
        default: return status;
      }
    },

    // Play feedback tone (uses browser Web Audio API)
    playTone(type) {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'success') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, ctx.currentTime);
          gain.gain.setValueAtTime(0.1, ctx.currentTime);
          osc.start();
          osc.frequency.setValueAtTime(900, ctx.currentTime + 0.1);
          osc.stop(ctx.currentTime + 0.25);
        } else if (type === 'error') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(150, ctx.currentTime);
          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          osc.start();
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
          osc.stop(ctx.currentTime + 0.4);
        }
      } catch (err) {
        console.error('Audio play failed', err);
      }
    },

    // TAB 2: Handlers for arrival scan
    async handleArrivalScan() {
      const barcode = this.arrivalBarcode.trim();
      if (!barcode) return;

      this.scanningArrival = true;
      this.arrivalMatch = null;
      this.arrivalDuplicates = [];
      this.arrivalFinalPrice = '';

      try {
        const response = await this.$axios.post('api/shipping-orders/scan-arrival', { barcode });
        
        if (response.data.type === 'SINGLE_MATCH') {
          this.arrivalMatch = response.data.order;
          this.playTone('success');
          this.$toast.success('ພົບຂໍ້ມູນພັດສະດຸ');
          
          // Auto focus final price field
          this.$nextTick(() => {
            if (this.$refs.arrivalPriceField) {
              this.$refs.arrivalPriceField.focus();
            }
          });
        } else if (response.data.type === 'DUPLICATE_MATCH') {
          this.arrivalDuplicates = response.data.orders;
          this.playTone('success');
          this.$toast.info('ພົບພັດສະດຸຊ້ຳກັນ! ກະລຸນາເລືອກລູກຄ້າ');
        }
      } catch (error) {
        console.error('Arrival scan error:', error);
        this.playTone('error');
        if (error.response && error.response.status === 404) {
          swalConfirm(
            this.$swal,
            'ບໍ່ພົບຂໍ້ມູນພັດສະດຸ',
            `ບໍ່ພົບເລກບາໂຄດ "${barcode}" ໃນລະບົບ. ທ່ານຕ້ອງການລົງທະບຽນ ແລະ ຮັບເຄື່ອງເຂົ້າສາງດ້ວຍຕົນເອງເລີຍບໍ່?`,
            'question',
            'ຍົກເລີກ',
            'ລົງທະບຽນເອງ'
          ).then((result) => {
            if (result.isConfirmed) {
              this.openManualRegister(barcode);
            }
          });
        } else {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການສະແກນ: ' + (error.response?.data?.message || error.response?.data?.error || error.message));
        }
      } finally {
        this.scanningArrival = false;
      }
    },

    selectDuplicateOrder(order) {
      this.arrivalMatch = order;
      this.arrivalDuplicates = [];
      this.$nextTick(() => {
        if (this.$refs.arrivalPriceField) {
          this.$refs.arrivalPriceField.focus();
        }
      });
    },

    async confirmArrivalPrice() {
      const price = parseFloat(this.arrivalFinalPrice);
      if (!this.arrivalMatch || isNaN(price) || price < 0) {
        this.$toast.error('ກະລຸນາກຳນົດລາຄາຂົນສົ່ງທີ່ຖືກຕ້ອງ');
        return;
      }

      this.confirmingArrival = true;
      try {
        const url = `api/shipping-orders/${this.arrivalMatch.id}/confirm-arrival`;
        await this.$axios.put(url, { 
          final_price: price,
          currency_id: this.arrivalCurrencyId
        });
        
        swalSuccess(this.$swal, 'ສຳເລັດແລ້ວ', 'ຢືນຢັນເຄື່ອງເຂົ້າສາງສຳເລັດແລ້ວ');
        this.playTone('success');

        // Reset scanning fields and focus back to scanner
        this.arrivalBarcode = '';
        this.arrivalMatch = null;
        this.arrivalFinalPrice = '';
        const localCcy = (this.findAllCurrency || []).find(c => c.isLocalCCY === true || c.isLocalCCY === 1 || c.code === 'LAK');
        this.arrivalCurrencyId = localCcy ? localCcy.id : 1;
        this.loadData();

        this.$nextTick(() => {
          if (this.$refs.arrivalBarcodeField) {
            this.$refs.arrivalBarcodeField.focus();
          }
        });
      } catch (error) {
        console.error('Confirm arrival price error:', error);
        this.playTone('error');
        this.$toast.error('ບໍ່ສາມາດບັນທຶກລາຄາໄດ້: ' + (error.response?.data?.message || error.message));
      } finally {
        this.confirmingArrival = false;
      }
    },

    // TAB 3: Handlers for Cashier Pickup Scan
    async handlePickupScan() {
      const barcode = this.pickupBarcode.trim();
      if (!barcode) return;

      this.scanningPickup = true;
      this.scannedPickupOrder = null;
      this.otherArrivedItems = [];
      this.selectedCheckoutIds = [];

      try {
        const response = await this.$axios.post('api/shipping-orders/scan-pickup', { barcode });
        
        this.scannedPickupOrder = response.data.scannedOrder;
        this.otherArrivedItems = Array.isArray(response.data.otherArrivedItems) ? response.data.otherArrivedItems : [];
        this.playTone('success');
        this.$toast.success('ສະແກນພັດສະດຸສຳເລັດ');

        // Auto checkmark other packages for easy checkout bundle
        if (this.otherArrivedItems.length > 0) {
          this.selectAllOtherItems();
        }
      } catch (error) {
        console.error('Pickup scan error:', error);
        this.playTone('error');
        if (error.response && error.response.status === 404) {
          this.$toast.error('ບໍ່ພົບພັດສະດຸທີ່ມາຮອດສາງ (ARRIVED) ທີ່ກົງກັບບາໂຄດນີ້');
        } else {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການສະແກນ: ' + (error.response?.data?.message || error.message));
        }
      } finally {
        this.scanningPickup = false;
      }
    },

    selectAllOtherItems() {
      this.selectedCheckoutIds = this.otherArrivedItems.map(item => item.id);
    },

    deselectAllOtherItems() {
      this.selectedCheckoutIds = [];
    },

    async submitCompletePickup() {
      if (!this.scannedPickupOrder) return;
      
      const orderIds = [this.scannedPickupOrder.id, ...this.selectedCheckoutIds];
      
      const totalStr = this.checkoutTotalsBreakdown
        .map(t => `${this.formatPrice(t.total)} ${t.code}`)
        .join(' + ');
      
      const result = await swalConfirm(
        this.$swal,
        'ຢືນຢັນການຮັບເຄື່ອງ',
        `ຕ້ອງການຢືນຢັນການຮັບເຄື່ອງ ຈຳນວນ ${orderIds.length} ລາຍການ, ລວມຄ່າຂົນສົ່ງ ${totalStr}?`,
        'info',
        'ຍົກເລີກ',
        'ຢືນຢັນ'
      );
      
      if (result.isConfirmed) {
        this.completingPickup = true;
        try {
          await this.$axios.post('api/shipping-orders/complete-pickup', { orderIds });
          
          swalSuccess(this.$swal, 'ສຳເລັດແລ້ວ', 'ຢືນຢັນການຮັບເຄື່ອງສຳເລັດແລ້ວ');
          this.playTone('success');

          // Reset pickup state & reload
          this.pickupBarcode = '';
          this.scannedPickupOrder = null;
          this.otherArrivedItems = [];
          this.selectedCheckoutIds = [];
          
          this.loadData();
          
          this.$nextTick(() => {
            if (this.$refs.pickupBarcodeField) {
              this.$refs.pickupBarcodeField.focus();
            }
          });
        } catch (error) {
          console.error('Complete pickup error:', error);
          this.playTone('error');
          this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການຢືນຢັນ: ' + (error.response?.data?.message || error.message));
        } finally {
          this.completingPickup = false;
        }
      }
    },

    // Handles global scan events from physical scanner
    handleGlobalKeyDown(event) {
      // Avoid processing scanner if standard fields like textareas or other unrelated focus are active
      const activeEl = document.activeElement;
      const isInputField = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA');
      
      // We only intercept if focus is not in another input or is already in barcode fields
      if (isInputField && activeEl.id !== 'arrival-barcode-field' && activeEl.id !== 'pickup-barcode-field') {
        return;
      }

      // If activeTab is Tab 2 (Warehouse scan) or Tab 3 (Pickup checkout), handle Enter press
      if (event.key === 'Enter') {
        if (this.activeTab === 1 && this.arrivalBarcode.trim()) {
          this.handleArrivalScan();
        } else if (this.activeTab === 2 && this.pickupBarcode.trim()) {
          this.handlePickupScan();
        }
      }
    },

    openManualRegister(barcode) {
      this.manualBarcode = barcode;
      this.barcodePrefilled = !!barcode;
      this.manualCustomerId = null;
      this.manualFinalPrice = '';
      this.manualRegisterDialog = true;
    },

    closeManualRegister() {
      this.manualRegisterDialog = false;
      this.manualBarcode = '';
      this.barcodePrefilled = false;
      this.manualCustomerId = null;
      this.manualFinalPrice = '';
      const localCcy = (this.findAllCurrency || []).find(c => c.isLocalCCY === true || c.isLocalCCY === 1 || c.code === 'LAK');
      this.manualCurrencyId = localCcy ? localCcy.id : 1;
      if (this.$refs.manualRegisterForm) {
        this.$refs.manualRegisterForm.resetValidation();
      }
      this.$nextTick(() => {
        if (this.$refs.arrivalBarcodeField) {
          this.$refs.arrivalBarcodeField.focus();
        }
      });
    },

    async submitManualOrder() {
      if (!this.$refs.manualRegisterForm.validate()) {
        return;
      }

      this.savingManualOrder = true;
      try {
        const payload = {
          customer_id: this.manualCustomerId,
          barcode: this.manualBarcode,
          final_price: parseFloat(this.manualFinalPrice),
          currency_id: this.manualCurrencyId,
          status: 'ARRIVED' // Direct arrived warehouse status
        };

        await this.$axios.post('api/shipping-orders', payload);
        swalSuccess(this.$swal, 'ສຳເລັດແລ້ວ', 'ລົງທະບຽນ ແລະ ຢືນຢັນເຄື່ອງເຂົ້າສາງສຳເລັດແລ້ວ');
        this.playTone('success');
        
        this.closeManualRegister();
        this.arrivalBarcode = '';
        this.loadData();
      } catch (error) {
        console.error('Manual order creation error:', error);
        this.playTone('error');
        this.$toast.error('ບໍ່ສາມາດລົງທະບຽນໄດ້: ' + (error.response?.data?.message || error.message));
      } finally {
        this.savingManualOrder = false;
      }
    },

    convertToLocal(amount, fromCurrencyId) {
      if (!amount || isNaN(amount) || amount <= 0) return 0;
      const currencies = this.findAllCurrency || [];
      const localCurrency = currencies.find(c => c.isLocalCCY === true || c.isLocalCCY === 1 || c.code === 'LAK');
      const fromCurrency = currencies.find(c => c.id === fromCurrencyId);
      
      if (!fromCurrency || !localCurrency || fromCurrency.id === localCurrency.id) {
        return amount;
      }

      if (fromCurrency.exchangeDirection === 'local_to_foreign') {
        return amount / (parseFloat(fromCurrency.rate) || 1);
      } else {
        return amount * (parseFloat(fromCurrency.rate) || 1);
      }
    },

    isForeignCurrency(currencyId) {
      const currencies = this.findAllCurrency || [];
      const local = currencies.find(c => c.isLocalCCY === true || c.isLocalCCY === 1 || c.code === 'LAK');
      if (!local) return false;
      return currencyId !== local.id;
    },

    openManualPickup() {
      this.manualPickupBarcode = '';
      this.manualPickupDialog = true;
    },

    closeManualPickup() {
      this.manualPickupDialog = false;
      this.manualPickupBarcode = '';
      if (this.$refs.manualPickupForm) {
        this.$refs.manualPickupForm.resetValidation();
      }
      this.$nextTick(() => {
        if (this.$refs.pickupBarcodeField) {
          this.$refs.pickupBarcodeField.focus();
        }
      });
    },

    submitManualPickup() {
      if (!this.$refs.manualPickupForm.validate()) {
        return;
      }
      this.pickupBarcode = this.manualPickupBarcode;
      this.manualPickupDialog = false;
      this.handlePickupScan();
    }
  }
}
</script>

<style scoped>
.font-lao {
  font-family: 'Noto Sans Lao', 'Inter', sans-serif !important;
}

/* border color alerts */
.border-left-primary {
  border-left: 4px solid #01532B !important;
}
.border-left-warning {
  border-left: 4px solid #F57C00 !important;
}
.border-left-info {
  border-left: 4px solid #1E88E5 !important;
}
.border-left-success {
  border-left: 4px solid #43A047 !important;
}

.bg-light-gray {
  background-color: #f8f9fa !important;
}
.bg-light-green {
  background-color: rgba(1, 83, 43, 0.06) !important;
}

.max-height-250 {
  max-height: 250px;
  overflow-y: auto;
}

.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
