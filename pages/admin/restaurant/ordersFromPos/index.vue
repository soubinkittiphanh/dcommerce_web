<!-- RESTAURANT & CAFE POS SALES REPORT -->
<template>
  <div class="text-left">
    <!-- Header Chips -->
    <div class="d-flex flex-wrap align-center gap-2 mb-3">
      <v-chip class="pa-5 mr-2 mb-2 elevation-1" color="primary" label text-color="white">
        <v-icon start class="mr-2">mdi-silverware-fork-knife</v-icon>
        <h3>ລາຍການບິນຂາຍຮ້ານອາຫານ (Restaurant Sales Report)</h3>
      </v-chip>
      <v-chip class="pa-5 mr-2 mb-2 elevation-1" color="teal" label text-color="white" to="/admin/cafeTable">
        <v-icon start class="mr-2">mdi-table-chair</v-icon>
        <h3>ແຜນຜັງໂຕະ & ສັ່ງອາຫານ (Floor POS)</h3>
      </v-chip>
      <v-chip class="pa-5 mb-2 elevation-1" color="blue-grey" label text-color="white" @click="guidelineDialog = true">
        <v-icon start class="mr-2">mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <!-- Loading Dialog -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Guide Dialog -->
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="W6KiQWtiqBM">
      </youtube-player>
    </v-dialog>

    <!-- Ticket Payment Details Dialog -->
    <ticket-details-dialog 
      v-model="paymentDetailsDialog" 
      :ticket-data="selectedTicketForPaymentDetails"
      :company-logo="companyData.ticketLogo" 
      :ticket-common="ticketCommon" 
      :show-print-button="true"
      @close="onTicketDialogClose" 
      @print-ticket="onPrintTicketFromDetails" 
    />

    <!-- Customer Ticket Thermal Print Dialog -->
    <PrintTicketDialog 
      :show="showCustomerPrint" 
      :ticket="ticketToPrint" 
      :restaurant-info="restaurantConfig"
      @close="showCustomerPrint = false" 
    />

    <!-- Ticket Lines Items Preview Dialog -->
    <v-dialog v-model="dialogLinesPreview" max-width="850">
      <v-card class="rounded-xl overflow-hidden" v-if="previewTicket">
        <v-card-title class="primary white--text pa-4">
          <v-icon left color="white">mdi-receipt-text-outline</v-icon>
          ລາຍການອາຫານ - ບິນ #{{ previewTicket.ticketNumber }} (ໂຕະ: {{ getTableName(previewTicket) }})
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="dialogLinesPreview = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pa-4">
          <div class="d-flex justify-space-between align-center mb-3">
            <div>
              <span class="grey--text font-weight-medium">ເວລາສັ່ງ:</span>
              <strong class="ml-2">{{ formatDateTime(previewTicket.createdAt) }}</strong>
            </div>
            <div>
              <v-chip :color="getStatusColor(previewTicket.status)" small dark class="font-weight-bold">
                {{ previewTicket.status?.toUpperCase() }}
              </v-chip>
            </div>
          </div>
          <v-simple-table dense class="border rounded-lg">
            <template v-slot:default>
              <thead style="background: #f8fafc">
                <tr>
                  <th class="text-left font-weight-bold">#</th>
                  <th class="text-left font-weight-bold">ລາຍການອາຫານ</th>
                  <th class="text-center font-weight-bold">ຈຳນວນ</th>
                  <th class="text-right font-weight-bold">ລາຄາ/ໜ່ວຍ</th>
                  <th class="text-right font-weight-bold">ສ່ວນຫຼຸດ</th>
                  <th class="text-right font-weight-bold">ລວມ</th>
                  <th class="text-center font-weight-bold">ສະຖານະ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(line, idx) in previewTicket.ticketLines || []" :key="line.id || idx">
                  <td>{{ idx + 1 }}</td>
                  <td>
                    <div class="font-weight-medium">{{ line.product?.pro_name || 'Item' }}</div>
                    <small class="grey--text" v-if="line.notes || line.specialInstructions">
                      * {{ line.notes || line.specialInstructions }}
                    </small>
                  </td>
                  <td class="text-center font-weight-bold">{{ line.quantity }}</td>
                  <td class="text-right">{{ formatNumber(line.unitPrice || line.price || 0) }}</td>
                  <td class="text-right text-red">{{ formatNumber(line.discount_amount || 0) }}</td>
                  <td class="text-right font-weight-bold">{{ formatNumber(line.totalPrice || line.total || (line.quantity * (line.unitPrice || line.price || 0))) }}</td>
                  <td class="text-center">
                    <v-chip x-small :color="line.status === 'served' ? 'success' : 'info'" text-color="white">
                      {{ line.status || 'ordered' }}
                    </v-chip>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-actions class="pa-4 pt-0 justify-end">
          <v-btn color="primary" outlined @click="openThermalPrint(previewTicket)">
            <v-icon left small>mdi-printer</v-icon>
            ພິມໃບບິນ
          </v-btn>
          <v-btn color="grey" text @click="dialogLinesPreview = false">ປິດ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Cancel Ticket Dialog -->
    <v-dialog v-model="dialogCancelTicket" max-width="500">
      <v-card class="rounded-xl overflow-hidden" v-if="ticketToCancel">
        <v-card-title class="error white--text pa-4">
          <v-icon left color="white">mdi-alert-circle</v-icon>
          ຍົກເລີກບິນ #{{ ticketToCancel.ticketNumber }}
        </v-card-title>
        <v-card-text class="pa-4">
          <v-alert type="warning" dense text class="mb-3">
            ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການຍົກເລີກບິນນີ້? ການຍົກເລີກຈະປ່ຽນສະຖານະເປັນ Cancel.
          </v-alert>
          <v-text-field
            v-model="cancelReason"
            label="ເຫດຜົນໃນການຍົກເລີກ *"
            placeholder="ເຊັ່ນ: ລູກຄ້າປ່ຽນໃຈ, ພິມຜິດ..."
            outlined
            dense
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="pa-4 pt-0 justify-end">
          <v-btn text color="grey" @click="dialogCancelTicket = false">ອອກ</v-btn>
          <v-btn color="error" :loading="isCancelling" :disabled="!cancelReason" @click="confirmCancelTicket">
            <v-icon left small>mdi-cancel</v-icon>
            ຢືນຢັນຍົກເລີກ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Main Content Card -->
    <div>
      <v-card elevation="2" class="rounded-xl">
        <v-card-title class="pa-4">
          <v-layout row wrap>
            <!-- Date Range Controls -->
            <v-col cols="12" md="6">
              <v-row dense>
                <v-col cols="6">
                  <v-menu 
                    ref="menu1" 
                    v-model="menu1" 
                    :close-on-content-click="false" 
                    transition="scale-transition" 
                    offset-y
                    max-width="290px" 
                    min-width="auto"
                  >
                    <v-date-picker v-model="fromDate" no-title @input="menu1 = false"></v-date-picker>
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field 
                        v-model="fromDateLabel" 
                        label="ຈາກວັນທີ:" 
                        hint="MM/DD/YYYY format" 
                        persistent-hint
                        prepend-icon="mdi-calendar" 
                        v-bind="attrs" 
                        @blur="fromDate = parseDate(fromDateLabel)"
                        v-on="on"
                        outlined
                        dense
                      ></v-text-field>
                    </template>
                  </v-menu>
                </v-col>

                <v-col cols="6">
                  <v-menu 
                    ref="menu2" 
                    v-model="menu2" 
                    :close-on-content-click="false" 
                    transition="scale-transition" 
                    offset-y
                    max-width="290px" 
                    min-width="auto"
                  >
                    <v-date-picker v-model="toDate" no-title @input="menu2 = false"></v-date-picker>
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field 
                        v-model="toDateLabel" 
                        label="ຫາວັນທີ:" 
                        hint="MM/DD/YYYY format" 
                        persistent-hint
                        prepend-icon="mdi-calendar" 
                        v-bind="attrs" 
                        @blur="toDate = parseDate(toDateLabel)"
                        v-on="on"
                        outlined
                        dense
                      ></v-text-field>
                    </template>
                  </v-menu>
                </v-col>

                <!-- Quick Date Filter Chips -->
                <v-col cols="12" class="d-flex flex-wrap gap-1 pt-0">
                  <v-chip x-small filter :input-value="isTodaySelected" @click="setQuickDate('today')" color="primary" outlined class="mr-1">
                    ມື້ນີ້
                  </v-chip>
                  <v-chip x-small filter @click="setQuickDate('yesterday')" color="secondary" outlined class="mr-1">
                    ມື້ວານ
                  </v-chip>
                  <v-chip x-small filter @click="setQuickDate('thisWeek')" color="teal" outlined class="mr-1">
                    ອາທິດນີ້
                  </v-chip>
                  <v-chip x-small filter @click="setQuickDate('thisMonth')" color="indigo" outlined class="mr-1">
                    ເດືອນນີ້
                  </v-chip>
                </v-col>
              </v-row>
            </v-col>

            <!-- Search and Multi-Filters -->
            <v-col cols="12" md="6">
              <v-row dense>
                <v-col cols="12" sm="6">
                  <v-text-field 
                    v-model="search" 
                    append-icon="mdi-magnify" 
                    label="ຊອກຫາ (ເລກບິນ, ລູກຄ້າ, ໂຕະ...)" 
                    outlined
                    dense
                    hide-details 
                  />
                </v-col>

                <v-col cols="12" sm="6">
                  <v-autocomplete 
                    v-model="selectedTableId" 
                    :items="customTableList" 
                    item-text="displayName" 
                    item-value="id"
                    label="ເລືອກໂຕະ / ໂຊນ" 
                    outlined
                    dense
                    hide-details
                    clearable
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12" sm="6" class="mt-2">
                  <v-select 
                    v-model="selectedPaymentFilter" 
                    :items="paymentFilterOptions" 
                    item-text="label"
                    item-value="value" 
                    label="ຟິລເຕີປະເພດການຊຳລະ" 
                    outlined
                    dense
                    clearable 
                    prepend-inner-icon="mdi-filter"
                    hide-details
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" class="mt-2">
                  <v-select 
                    v-model="selectedStatusFilter" 
                    :items="statusFilterOptions" 
                    label="ສະຖານະບິນ" 
                    outlined
                    dense
                    clearable
                    prepend-inner-icon="mdi-check-circle-outline"
                    hide-details
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>

            <!-- Action Buttons Row -->
            <v-col cols="12" class="d-flex flex-wrap align-center mt-3 pt-2" style="border-top: 1px dashed #e2e8f0;">
              <v-btn size="large" @click="loadData" class="primary mr-2 mb-2 elevation-1" rounded>
                <v-icon left small>mdi-cloud-download</v-icon>
                ດຶງລາຍງານ
              </v-btn>
              <v-btn size="large" to="/admin/cafeTable" class="teal white--text mr-2 mb-2 elevation-1" rounded>
                <v-icon left small>mdi-table-chair</v-icon>
                ໜ້າຂາຍ / ໂຕະ
              </v-btn>
              <v-btn size="large" @click="exportToExcel" class="success mr-2 mb-2 elevation-1" rounded :disabled="isloading || filteredTicketList.length === 0">
                <v-icon left small>mdi-microsoft-excel</v-icon>
                Generate excel file
              </v-btn>
              <v-btn size="large" @click="printSalesReport" class="info mr-2 mb-2 elevation-1" rounded :disabled="isloading || filteredTicketList.length === 0">
                <v-icon left small>mdi-printer</v-icon>
                Print Report
              </v-btn>
              <v-btn size="large" @click="printReceiptSummaryReport" class="deep-purple white--text mr-2 mb-2 elevation-1" rounded :disabled="isloading || filteredTicketList.length === 0">
                <v-icon left small>mdi-file-document-outline</v-icon>
                Print Summary A4
              </v-btn>
            </v-col>
          </v-layout>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="pa-4">
          <!-- Grand Summary Cards (Matching Minimart Style) -->
          <section class="grand-summary-section mt-2 mb-6">
            <v-row>
              <v-col cols="12" md="4">
                <v-card class="mx-auto elevation-2" style="border-radius: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);">
                  <v-card-text class="d-flex align-center pa-4">
                    <v-avatar color="blue" size="56" class="elevation-1 mr-4">
                      <v-icon color="white" large>mdi-silverware-fork-knife</v-icon>
                    </v-avatar>
                    <div>
                      <div class="text-subtitle-2 grey--text text--darken-1 font-weight-medium">ຍອດຂາຍລວມ (Gross Sales)</div>
                      <div class="text-h5 font-weight-black blue--text text--darken-3">
                        {{ formatNumber(summaryGrossLocal) }}
                        <small class="caption">{{ localCurrency?.code || 'LAK' }}</small>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card class="mx-auto elevation-2" style="border-radius: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);">
                  <v-card-text class="d-flex align-center pa-4">
                    <v-avatar color="red" size="56" class="elevation-1 mr-4">
                      <v-icon color="white" large>mdi-tag-outline</v-icon>
                    </v-avatar>
                    <div>
                      <div class="text-subtitle-2 grey--text text--darken-1 font-weight-medium">ສ່ວນຫຼຸດລວມ (Total Discount)</div>
                      <div class="text-h5 font-weight-black red--text text--darken-3">
                        {{ formatNumber(summaryDiscountLocal) }}
                        <small class="caption">{{ localCurrency?.code || 'LAK' }}</small>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card class="mx-auto elevation-2" style="border-radius: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);">
                  <v-card-text class="d-flex align-center pa-4">
                    <v-avatar color="green" size="56" class="elevation-1 mr-4">
                      <v-icon color="white" large>mdi-cash-multiple</v-icon>
                    </v-avatar>
                    <div>
                      <div class="text-subtitle-2 grey--text text--darken-1 font-weight-medium">ຍອດຂາຍສຸດທິ (Net Revenue)</div>
                      <div class="text-h5 font-weight-black green--text text--darken-3">
                        {{ formatNumber(summaryNetLocal) }}
                        <small class="caption">{{ localCurrency?.code || 'LAK' }}</small>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- Quick Stats Bar -->
            <v-row class="mt-2" dense>
              <v-col cols="6" sm="3">
                <v-card outlined class="pa-3 text-center rounded-lg" style="background: #fafafa">
                  <div class="caption grey--text font-weight-bold">ຈຳນວນບິນທັງໝົດ</div>
                  <div class="text-h6 font-weight-bold primary--text">{{ activeTicketList.length }} ບິນ</div>
                </v-card>
              </v-col>
              <v-col cols="6" sm="3">
                <v-card outlined class="pa-3 text-center rounded-lg" style="background: #fafafa">
                  <div class="caption grey--text font-weight-bold">ບິນຊຳລະແລ້ວ (Paid)</div>
                  <div class="text-h6 font-weight-bold success--text">{{ paidTicketsCount }} ບິນ</div>
                </v-card>
              </v-col>
              <v-col cols="6" sm="3">
                <v-card outlined class="pa-3 text-center rounded-lg" style="background: #fafafa">
                  <div class="caption grey--text font-weight-bold">ບິນຄ້າງຊຳລະ (Pending)</div>
                  <div class="text-h6 font-weight-bold orange--text text--darken-2">{{ pendingTicketsCount }} ບິນ</div>
                </v-card>
              </v-col>
              <v-col cols="6" sm="3">
                <v-card outlined class="pa-3 text-center rounded-lg" style="background: #fafafa">
                  <div class="caption grey--text font-weight-bold">ພາສີລວມ (Total Tax)</div>
                  <div class="text-h6 font-weight-bold purple--text text--darken-2">{{ formatNumber(summaryTaxLocal) }} {{ localCurrency?.code || 'LAK' }}</div>
                </v-card>
              </v-col>
            </v-row>
          </section>

          <!-- Payment Type Summary Cards (Exact Layout from ordersFromPos) -->
          <section class="kpi-section mt-5">
            <h4 class="mb-3 d-flex align-center">
              <v-icon left color="primary">mdi-view-dashboard-outline</v-icon>
              ສະຫຼຸບລາຍຮັບຕາມຊ່ອງທາງການຊຳລະ (Payment Method Breakdown)
            </h4>
            <v-row class="kpi-grid">
              <v-col v-for="(item, index) in paymentStatistics" :key="index" cols="12" md="4" lg="4">
                <div 
                  class="kpi-card elevation-2 pa-4" 
                  style="border-radius: 16px; background: white; border: 1px solid #e2e8f0; cursor: pointer;"
                  @click="filterByPaymentType(item.code)"
                >
                  <div class="kpi-header d-flex justify-space-between align-center mb-4">
                    <v-avatar :color="item.color" size="48">
                      <v-icon color="white">{{ item.icon }}</v-icon>
                    </v-avatar>
                    <v-chip x-small color="success" text-color="white" class="font-weight-bold">
                      {{ item.percentage.toFixed(1) }}%
                    </v-chip>
                  </div>

                  <div class="kpi-content">
                    <h3 class="kpi-title grey--text mb-2">
                      {{ item.title }}
                    </h3>

                    <!-- Gross, Discount, Net Breakdown for Payment Method in Local Currency -->
                    <div class="d-flex justify-space-between align-center mb-1">
                      <span class="grey--text caption font-weight-medium">Gross:</span>
                      <span class="caption font-weight-bold grey--text text--darken-2">
                        {{ formatNumber(item.gross) }} {{ localCurrency?.code || 'LAK' }}
                      </span>
                    </div>
                    <div class="d-flex justify-space-between align-center mb-1 red--text text--darken-1">
                      <span class="caption font-weight-medium">Discount:</span>
                      <span class="caption font-weight-bold">
                        -{{ formatNumber(item.discount) }} {{ localCurrency?.code || 'LAK' }}
                      </span>
                    </div>
                    <div class="d-flex justify-space-between align-center mb-3 primary--text">
                      <span class="body-2 font-weight-bold">Net Paid:</span>
                      <span class="font-weight-black text-h6">
                        {{ formatNumber(item.total) }} <small class="caption">{{ localCurrency?.code || 'LAK' }}</small>
                      </span>
                    </div>

                    <!-- Multi-Currency Breakdown inside Card -->
                    <div v-if="item.groupedCurrency && Object.keys(item.groupedCurrency).length > 0" class="currency-breakdown-container mt-3">
                      <div 
                        v-for="(val, code) in item.groupedCurrency" 
                        :key="code"
                        class="mb-2 pa-2 rounded"
                        style="background: #f8fafc; border: 1px dashed #e2e8f0; font-size: 0.75rem;"
                      >
                        <div class="font-weight-bold caption text-uppercase mb-1" style="color: #475569; border-bottom: 1px dashed #cbd5e1; padding-bottom: 2px;">
                          {{ code }} Breakdown
                        </div>
                        <div class="d-flex justify-space-between align-center mb-1">
                          <span class="grey--text">Gross:</span>
                          <span class="font-weight-medium">{{ formatNumber(val.originalGross) }} {{ code }}</span>
                        </div>
                        <div v-if="val.originalDiscount > 0" class="d-flex justify-space-between align-center red--text text--darken-1 mb-1">
                          <span>Discount:</span>
                          <span>-{{ formatNumber(val.originalDiscount) }} {{ code }}</span>
                        </div>
                        <div class="d-flex justify-space-between align-center font-weight-bold primary--text">
                          <span>Net:</span>
                          <span>{{ formatNumber(val.originalNet) }} {{ code }}</span>
                        </div>
                        
                        <!-- Local conversion for non-local currencies -->
                        <div v-if="code !== (localCurrency?.code || 'LAK')" class="mt-1 pt-1 grey--text" style="border-top: 1px dashed #cbd5e1; font-size: 0.65rem">
                          <div class="d-flex justify-space-between align-center">
                            <span>≈ Net Local:</span>
                            <span>{{ formatNumber(val.localNet) }} {{ localCurrency?.code || 'LAK' }}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <v-progress-linear 
                      :value="item.percentage" 
                      :color="item.color" 
                      height="6" 
                      rounded
                      class="mt-3"
                    ></v-progress-linear>
                    <div class="caption text-right mt-1 grey--text">
                      {{ item.count }} Transactions
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </section>

          <!-- Multi vs Single Payment Stats -->
          <v-row class="mt-4">
            <v-col cols="12">
              <v-card outlined class="pa-4 rounded-xl">
                <h4 class="mb-3 d-flex align-center">
                  <v-icon left color="primary">mdi-credit-card-multiple</v-icon>
                  ສະຖິຕິການຊຳລະ (Payment Mode Stats)
                </h4>
                <v-row align="center">
                  <v-col cols="6" md="3">
                    <div class="text-center">
                      <h2 class="primary--text">{{ singlePaymentCount }}</h2>
                      <div class="caption font-weight-medium">ຊຳລະແບບດຽວ (Single)</div>
                      <v-progress-circular :value="singlePaymentPercentage" color="primary" size="60" width="4" class="mt-2">
                        <small>{{ singlePaymentPercentage.toFixed(0) }}%</small>
                      </v-progress-circular>
                    </div>
                  </v-col>

                  <v-col cols="6" md="3">
                    <div class="text-center">
                      <h2 class="success--text">{{ multiPaymentCount }}</h2>
                      <div class="caption font-weight-medium">ຊຳລະຫຼາຍວິທີ (Multi-Pay)</div>
                      <v-progress-circular :value="multiPaymentPercentage" color="success" size="60" width="4" class="mt-2">
                        <small>{{ multiPaymentPercentage.toFixed(0) }}%</small>
                      </v-progress-circular>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <div class="d-flex flex-wrap justify-center align-center">
                      <v-btn 
                        outlined 
                        color="primary" 
                        @click="filterByPaymentType('SINGLE')" 
                        class="mr-2 mb-2" 
                        :class="{ 'primary white--text': selectedPaymentFilter === 'SINGLE' }"
                      >
                        <v-icon left small>mdi-credit-card</v-icon>
                        ສະແດງແຕ່ການຊຳລະດຽວ
                      </v-btn>

                      <v-btn 
                        outlined 
                        color="success" 
                        @click="filterByPaymentType('MULTI')" 
                        class="mr-2 mb-2" 
                        :class="{ 'success white--text': selectedPaymentFilter === 'MULTI' }"
                      >
                        <v-icon left small>mdi-credit-card-multiple</v-icon>
                        ສະແດງການຊຳລະຫຼາຍວິທີ
                      </v-btn>

                      <v-btn outlined color="grey" @click="clearPaymentFilter" class="mb-2">
                        <v-icon left small>mdi-filter-off</v-icon>
                        ສະແດງທັງໝົດ
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>

        <!-- Data Table -->
        <v-data-table 
          :headers="headers" 
          :search="search" 
          :items="filteredTicketList" 
          :loading="isloading" 
          loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..." 
          class="elevation-1"
          :items-per-page="25"
          :footer-props="{ 'items-per-page-options': [10, 25, 50, 100, -1] }"
        >
          <!-- Active Filter Alert -->
          <template v-slot:top>
            <div class="pa-3" v-if="selectedPaymentFilter || selectedStatusFilter || selectedTableId">
              <v-alert dense text type="info" dismissible @input="clearAllFilters">
                <v-icon left small>mdi-filter</v-icon>
                ກຳລັງສະແດງ:
                <span v-if="selectedPaymentFilter" class="font-weight-bold ml-1">
                  ຊຳລະ: {{ getFilterDisplayName(selectedPaymentFilter) }} |
                </span>
                <span v-if="selectedStatusFilter" class="font-weight-bold ml-1">
                  ສະຖານະ: {{ selectedStatusFilter }} |
                </span>
                <span v-if="selectedTableId" class="font-weight-bold ml-1">
                  ໂຕະ: {{ getTableNameById(selectedTableId) }} |
                </span>
                ({{ filteredTicketList.length }} ລາຍການ)
              </v-alert>
            </div>
          </template>

          <!-- Date & Time Column -->
          <template v-slot:[`item.createdAt`]="{ item }">
            <div>
              <div class="font-weight-medium">{{ formatTicketDate(item.createdAt) }}</div>
              <small class="grey--text">{{ formatTicketTime(item.createdAt) }}</small>
            </div>
          </template>

          <!-- Ticket Number Column -->
          <template v-slot:[`item.ticketNumber`]="{ item }">
            <v-chip color="primary" small dark style="cursor: pointer" @click="previewTicketLines(item)">
              <v-icon left x-small>mdi-ticket</v-icon>
              {{ item.ticketNumber || `#${item.id}` }}
            </v-chip>
          </template>

          <!-- Table Column -->
          <template v-slot:[`item.table`]="{ item }">
            <v-chip small color="teal" text-color="white" class="font-weight-bold">
              <v-icon left x-small>mdi-table-chair</v-icon>
              {{ getTableName(item) }}
            </v-chip>
          </template>

          <!-- Customer Column -->
          <template v-slot:[`item.client.name`]="{ item }">
            <span>{{ item.client?.name || item.notes || 'Walk-in Customer' }}</span>
          </template>

          <!-- Telephone / WhatsApp Column -->
          <template v-slot:[`item.cusTel`]="{ item }">
            <v-btn 
              v-if="item.client && item.client.telephone" 
              color="blue darken-1" 
              text 
              small 
              @click="whatsappLink(item)"
            >
              {{ item.client.telephone }}
              <v-icon right x-small color="green">mdi-whatsapp</v-icon>
            </v-btn>
            <span v-else class="grey--text caption">N/A</span>
          </template>

          <!-- Payment Method Column -->
          <template v-slot:[`item.paymentMethod`]="{ item }">
            <div v-if="isMultiPayment(item)">
              <v-chip color="success" small dark @click="showPaymentDetails(item)" style="cursor: pointer">
                <v-icon left x-small>mdi-credit-card-multiple</v-icon>
                ຫຼາຍວິທີ ({{ getPaymentMethodsCount(item) }})
              </v-chip>
            </div>
            <div v-else>
              <v-chip :color="getPaymentMethodColor(getPaymentCode(item))" small dark>
                <v-icon left x-small>{{ getPaymentMethodIcon(getPaymentCode(item)) }}</v-icon>
                {{ getPaymentName(item) }}
              </v-chip>
            </div>
          </template>

          <!-- Payment Details Button Column -->
          <template v-slot:[`item.paymentDetails`]="{ item }">
            <v-btn color="info" text small @click="showPaymentDetails(item)">
              <v-icon left x-small>mdi-eye</v-icon>
              ລາຍລະອຽດ
            </v-btn>
          </template>

          <!-- Items Count Column -->
          <template v-slot:[`item.linesCount`]="{ item }">
            <v-chip small outlined color="primary" @click="previewTicketLines(item)" style="cursor: pointer">
              <v-icon left x-small>mdi-silverware-fork-knife</v-icon>
              {{ item.ticketLines?.length || 0 }} ລາຍການ
            </v-chip>
          </template>

          <!-- Subtotal Column -->
          <template v-slot:[`item.subtotal`]="{ item }">
            <span>{{ formatNumber(item.subtotal || 0) }}</span>
          </template>

          <!-- Discount Column -->
          <template v-slot:[`item.promotionDiscount`]="{ item }">
            <span v-if="Number(item.promotionDiscount) > 0" class="red--text font-weight-medium">
              -{{ formatNumber(item.promotionDiscount) }}
            </span>
            <span v-else class="grey--text">-</span>
          </template>

          <!-- Tax Column -->
          <template v-slot:[`item.tax`]="{ item }">
            <span>{{ formatNumber(item.tax || 0) }}</span>
          </template>

          <!-- Grand Total Column -->
          <template v-slot:[`item.total`]="{ item }">
            <strong class="primary--text font-weight-bold">
              {{ formatNumber(item.total || 0) }} {{ localCurrency?.code || 'LAK' }}
            </strong>
          </template>

          <!-- Cashier / Creator Column -->
          <template v-slot:[`item.createUser`]="{ item }">
            <span class="caption font-weight-medium">{{ item.createUser?.cus_name || item.createUser?.name || 'Staff' }}</span>
          </template>

          <!-- Status Column -->
          <template v-slot:[`item.status`]="{ item }">
            <v-chip :color="getStatusColor(item.status)" small dark class="font-weight-bold">
              {{ (item.status || 'pending').toUpperCase() }}
            </v-chip>
          </template>

          <!-- Print Thermal Receipt Column -->
          <template v-slot:[`item.print`]="{ item }">
            <v-btn 
              @click="openThermalPrint(item)" 
              icon 
              small 
              color="primary" 
              title="ພິມໃບບິນ (Print Receipt)"
            >
              <v-icon small>mdi-printer</v-icon>
            </v-btn>
          </template>

          <!-- Actions / Cancel Column -->
          <template v-slot:[`item.actions`]="{ item }">
            <div class="d-flex align-center">
              <v-btn 
                icon 
                small 
                color="info" 
                @click="previewTicketLines(item)" 
                title="ເບິ່ງລາຍການອາຫານ (View Items)"
              >
                <v-icon small>mdi-text-box-search-outline</v-icon>
              </v-btn>
              <v-btn 
                v-if="item.status !== 'cancel' && item.status !== 'void'"
                icon 
                small 
                color="error" 
                @click="promptCancelTicket(item)" 
                title="ຍົກເລີກບິນ (Cancel Ticket)"
              >
                <v-icon small>mdi-cancel</v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
import {
  swalSuccess,
  swalError2,
  getFirstDayOfMonth,
  ticketHtml,
  getLocalDate,
} from '~/common'
import { printSalesReportSummary } from '~/common/sales-report-printer.js'
import { mainCompanyInfo, preloadCompanyData } from '~/common/api'
import { generateReceiptSummaryReportHTML } from '~/common/printTemplates'
import TicketDetailsDialog from '~/components/pos/dialogs/TicketDetailsDialog.vue'
import PrintTicketDialog from '@/components/CAFE/printdialog'
import { mapGetters } from 'vuex'

export default {
  name: 'RestaurantOrdersFromPos',
  components: {
    TicketDetailsDialog,
    PrintTicketDialog,
  },
  middleware: 'auths',
  data() {
    return {
      isloading: false,
      guidelineDialog: false,
      search: '',
      userId: null,

      // Date Pickers
      fromDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      toDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      fromDateLabel: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      toDateLabel: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,

      // Filter selections
      selectedPaymentFilter: null,
      selectedStatusFilter: null,
      selectedTableId: null,

      // Raw Ticket Data
      ticketList: [],
      tablesList: [],

      // Dialog controls
      paymentDetailsDialog: false,
      selectedTicketForPaymentDetails: null,

      // Line items preview
      dialogLinesPreview: false,
      previewTicket: null,

      // Customer Thermal Print Dialog
      showCustomerPrint: false,
      ticketToPrint: null,

      // Cancel ticket
      dialogCancelTicket: false,
      ticketToCancel: null,
      cancelReason: '',
      isCancelling: false,

      // Table Headers
      headers: [
        { text: 'ວັນທີ & ເວລາ', align: 'center', value: 'createdAt', sortable: true },
        { text: 'ເລກທີ ໃບບິນ', align: 'center', value: 'ticketNumber', sortable: true },
        { text: 'ໂຕະ', align: 'center', value: 'table', sortable: true },
        { text: 'ລູກຄ້າ', align: 'center', value: 'client.name', sortable: true },
        { text: 'ເບີໂທ', align: 'center', value: 'cusTel', sortable: false },
        { text: 'ຊຳລະດ້ວຍ', align: 'center', value: 'paymentMethod', sortable: true },
        { text: 'ລາຍລະອຽດການຊຳລະ', align: 'center', value: 'paymentDetails', sortable: false },
        { text: 'ລາຍການອາຫານ', align: 'center', value: 'linesCount', sortable: true },
        { text: 'ລາຄາເຕັມ', align: 'end', value: 'subtotal', sortable: true },
        { text: 'ສ່ວນຫຼຸດ', align: 'end', value: 'promotionDiscount', sortable: true },
        { text: 'ພາສີ', align: 'end', value: 'tax', sortable: true },
        { text: 'ລວມສຸດທິ', align: 'end', value: 'total', sortable: true },
        { text: 'ຜູ້ເປີດບິນ', align: 'center', value: 'createUser', sortable: false },
        { text: 'ສະຖານະ', align: 'center', value: 'status', sortable: true },
        { text: 'ພິມບິນ', align: 'center', value: 'print', sortable: false },
        { text: 'ຈັດການ', align: 'center', value: 'actions', sortable: false },
      ],

      statusFilterOptions: [
        { text: 'ທັງໝົດ', value: null },
        { text: 'ຊຳລະແລ້ວ (Paid)', value: 'paid' },
        { text: 'ຄ້າງຊຳລະ (Pending)', value: 'pending' },
        { text: 'ຍົກເລີກ (Cancel)', value: 'cancel' },
      ],
    }
  },

  async created() {
    try {
      await preloadCompanyData(this.$axios)
    } catch (error) {
      console.warn('Company preload failed, using fallback:', error)
    }

    await this.loadTables()
    await this.loadData()
  },

  watch: {
    fromDate(val) {
      this.fromDateLabel = this.formatDate(val)
      this.loadData()
    },
    toDate(val) {
      this.toDateLabel = this.formatDate(val)
      this.loadData()
    },
  },

  computed: {
    ...mapGetters([
      'findAllCurrency',
      'findLocalCurrency',
      'findAllPayment',
      'findAllTerminal',
      'findSelectedTerminal',
      'findAllprinters',
    ]),

    localCurrency() {
      return (
        this.findAllCurrency?.find((c) => c.isLocalCCY === true || c.isLocalCCY === 1) ||
        this.findLocalCurrency || { code: 'LAK', rate: 1 }
      )
    },

    user() {
      return this.$auth?.user || {}
    },

    ticketCommon() {
      return ticketHtml()
    },

    restaurantConfig() {
      const company = this.companyData
      return {
        name: company.name || 'Restaurant & Cafe',
        address: company.address || '',
        phone: company.tel || '',
        taxNumber: company.taxId || '',
        receiptFooter: company.remark || 'Thank you for dining with us!',
        wifiInfo: '',
        vatPercentage: 10,
        serviceChargePercentage: 0,
        currencySymbol: this.localCurrency?.code || 'LAK',
      }
    },

    companyData() {
      const baseCompany = mainCompanyInfo()
      const baseUrl = this.$axios.defaults.baseURL || ''
      const storeCompany = this.$store?.getters?.findAllCompany?.[0] || {}

      const resolvedProfileImagePath =
        baseCompany?.profile_image_path ||
        baseCompany?.apiData?.profile_image_path ||
        storeCompany?.profile_image_path ||
        null

      const ticketLogo = resolvedProfileImagePath
        ? `${baseUrl}/${resolvedProfileImagePath.replace(/^\//, '')}`
        : 'default-logo.png'

      return {
        name: baseCompany?.name || storeCompany?.name || 'Restaurant & Cafe',
        address: baseCompany?.address || storeCompany?.address || 'Vientiane, Lao PDR',
        tel: baseCompany?.tel || storeCompany?.tel || '',
        email: baseCompany?.email || storeCompany?.email || '',
        taxId: baseCompany?.taxId || storeCompany?.taxId || '',
        remark: baseCompany?.remark || storeCompany?.remark || '',
        ticketLogo,
      }
    },

    isTodaySelected() {
      const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
      return this.fromDate === today && this.toDate === today
    },

    customTableList() {
      const list = [{ id: null, displayName: 'ທັງໝົດ (All Tables)' }]
      ;(this.tablesList || []).forEach((t) => {
        list.push({
          id: t.id,
          displayName: `ໂຕະ ${t.number || t.name}${t.name ? ` (${t.name})` : ''}`,
        })
      })
      return list
    },

    activeTicketList() {
      return this.ticketList.filter((t) => {
        if (!t) return false
        if (this.selectedTableId && t.tableId !== this.selectedTableId) return false
        return true
      })
    },

    filteredTicketList() {
      return this.activeTicketList.filter((item) => {
        // Status Filter
        if (this.selectedStatusFilter) {
          if (this.selectedStatusFilter === 'paid') {
            if (item.status !== 'paid' && item.paymentStatus !== 'paid') return false
          } else if (this.selectedStatusFilter === 'pending') {
            if (item.status === 'paid' || item.status === 'cancel' || item.paymentStatus === 'paid') return false
          } else if (this.selectedStatusFilter === 'cancel') {
            if (item.status !== 'cancel' && item.status !== 'void') return false
          }
        }

        // Payment Method Filter
        if (this.selectedPaymentFilter) {
          if (this.selectedPaymentFilter === 'SINGLE') {
            return !this.isMultiPayment(item)
          }
          if (this.selectedPaymentFilter === 'MULTI') {
            return this.isMultiPayment(item)
          }

          if (item.salePayments && item.salePayments.length > 0) {
            return item.salePayments.some((sp) => {
              const code = sp.paymentMethod?.payment_code || sp.payment_code
              return code === this.selectedPaymentFilter
            })
          }
          const pCode = this.getPaymentCode(item)
          return pCode === this.selectedPaymentFilter
        }

        return true
      })
    },

    paidTicketsCount() {
      return this.activeTicketList.filter(
        (t) => t.status === 'paid' || t.paymentStatus === 'paid'
      ).length
    },

    pendingTicketsCount() {
      return this.activeTicketList.filter(
        (t) => t.status !== 'paid' && t.status !== 'cancel' && t.status !== 'void'
      ).length
    },

    summaryGrossLocal() {
      return this.filteredTicketList.reduce((sum, item) => {
        const sub = Number(item.subtotal || 0)
        return sum + (sub > 0 ? sub : Number(item.total || 0) + Number(item.promotionDiscount || 0))
      }, 0)
    },

    summaryDiscountLocal() {
      return this.filteredTicketList.reduce((sum, item) => {
        return sum + Number(item.promotionDiscount || 0)
      }, 0)
    },

    summaryTaxLocal() {
      return this.filteredTicketList.reduce((sum, item) => {
        return sum + Number(item.tax || 0)
      }, 0)
    },

    summaryNetLocal() {
      return this.filteredTicketList.reduce((sum, item) => {
        return sum + Number(item.total || 0)
      }, 0)
    },

    singlePaymentCount() {
      return this.filteredTicketList.filter((item) => !this.isMultiPayment(item)).length
    },

    multiPaymentCount() {
      return this.filteredTicketList.filter((item) => this.isMultiPayment(item)).length
    },

    singlePaymentPercentage() {
      const total = this.filteredTicketList.length
      return total > 0 ? (this.singlePaymentCount / total) * 100 : 0
    },

    multiPaymentPercentage() {
      const total = this.filteredTicketList.length
      return total > 0 ? (this.multiPaymentCount / total) * 100 : 0
    },

    paymentFilterOptions() {
      const options = [{ label: 'ທັງໝົດ', value: null }]

      if (this.findAllPayment && this.findAllPayment.length > 0) {
        this.findAllPayment.forEach((p) => {
          if (p.isActive) {
            options.push({
              label: p.payment_name,
              value: p.payment_code,
            })
          }
        })
      }

      options.push(
        { label: 'ຊຳລະແບບດຽວ', value: 'SINGLE' },
        { label: 'ຊຳລະຫຼາຍວິທີ', value: 'MULTI' }
      )

      return options
    },

    paymentStatistics() {
      const stats = {}
      let grandTotalLocal = 0

      this.activeTicketList.forEach((ticket) => {
        const ticketNetLocal = Number(ticket.total || 0)
        const ticketDiscountLocal = Number(ticket.promotionDiscount || 0)
        const ticketGrossLocal = ticketNetLocal + ticketDiscountLocal

        grandTotalLocal += ticketNetLocal

        const paymentList = []
        if (ticket.salePayments && Array.isArray(ticket.salePayments) && ticket.salePayments.length > 0) {
          ticket.salePayments.forEach((sp) => {
            const pMethod = sp.paymentMethod || this.findAllPayment?.find((p) => p.id === sp.paymentId)
            const pCcy = this.findAllCurrency?.find((c) => Number(c.id) === Number(sp.currencyId))
            const isLocal = pCcy?.isLocalCCY === true || pCcy?.isLocalCCY === 1
            const rate = isLocal ? 1 : sp.exchangeRate || 1
            const pAmountLocal = Number(sp.amount || 0) * rate

            paymentList.push({
              code: pMethod?.payment_code || 'UNKNOWN',
              name: pMethod?.payment_name || pMethod?.payment_code || 'Unknown',
              amountLocal: pAmountLocal,
              currencyCode: pCcy?.code || this.localCurrency?.code || 'LAK',
              exchangeRate: rate,
            })
          })
        } else {
          const pMethod = ticket.payment || this.findAllPayment?.find((p) => p.id === ticket.paymentId)
          paymentList.push({
            code: pMethod?.payment_code || this.getPaymentCode(ticket),
            name: pMethod?.payment_name || this.getPaymentName(ticket),
            amountLocal: ticketNetLocal,
            currencyCode: this.localCurrency?.code || 'LAK',
            exchangeRate: 1,
          })
        }

        const totalPaidLocal = paymentList.reduce((sum, p) => sum + p.amountLocal, 0) || 1
        const scaleRatio = ticketNetLocal / totalPaidLocal

        paymentList.forEach((p) => {
          p.amountLocal = p.amountLocal * scaleRatio
        })

        paymentList.forEach((p) => {
          const paymentCode = p.code || 'UNKNOWN'
          const paymentName = p.name || 'Unknown'
          const pNetLocal = p.amountLocal
          const proportion = ticketNetLocal > 0 ? pNetLocal / ticketNetLocal : 1

          const pGrossLocal = ticketGrossLocal * proportion
          const pDiscountLocal = ticketDiscountLocal * proportion

          const rate = p.exchangeRate || 1
          const originalGross = pGrossLocal / rate
          const originalDiscount = pDiscountLocal / rate
          const originalNet = pNetLocal / rate

          if (!stats[paymentCode]) {
            stats[paymentCode] = {
              code: paymentCode,
              title: paymentName,
              icon: this.getPaymentMethodIcon(paymentCode),
              color: this.getPaymentMethodColor(paymentCode),
              total: 0,
              gross: 0,
              discount: 0,
              count: 0,
              groupedCurrency: {},
            }
          }

          stats[paymentCode].total += pNetLocal
          stats[paymentCode].gross += pGrossLocal
          stats[paymentCode].discount += pDiscountLocal
          stats[paymentCode].count += 1

          const cCode = p.currencyCode
          if (!stats[paymentCode].groupedCurrency[cCode]) {
            stats[paymentCode].groupedCurrency[cCode] = {
              originalGross: 0,
              originalDiscount: 0,
              originalNet: 0,
              localGross: 0,
              localDiscount: 0,
              localNet: 0,
            }
          }

          stats[paymentCode].groupedCurrency[cCode].originalGross += originalGross
          stats[paymentCode].groupedCurrency[cCode].originalDiscount += originalDiscount
          stats[paymentCode].groupedCurrency[cCode].originalNet += originalNet

          stats[paymentCode].groupedCurrency[cCode].localGross += pGrossLocal
          stats[paymentCode].groupedCurrency[cCode].localDiscount += pDiscountLocal
          stats[paymentCode].groupedCurrency[cCode].localNet += pNetLocal
        })
      })

      return Object.values(stats).map((stat) => ({
        ...stat,
        percentage: grandTotalLocal > 0 ? (stat.total / grandTotalLocal) * 100 : 0,
      }))
    },
  },

  methods: {
    formatNumber(val) {
      return new Intl.NumberFormat().format(val || 0)
    },

    formatDate(date) {
      if (!date) return ''
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    formatTicketDate(val) {
      if (!val) return ''
      return new Date(val).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    },

    formatTicketTime(val) {
      if (!val) return ''
      return new Date(val).toLocaleTimeString('lo-LA', {
        hour: '2-digit',
        minute: '2-digit',
      })
    },

    formatDateTime(val) {
      if (!val) return ''
      return `${this.formatTicketDate(val)} ${this.formatTicketTime(val)}`
    },

    setQuickDate(type) {
      const now = new Date()
      let start = new Date()
      let end = new Date()

      if (type === 'today') {
        // Today
      } else if (type === 'yesterday') {
        start.setDate(now.getDate() - 1)
        end.setDate(now.getDate() - 1)
      } else if (type === 'thisWeek') {
        const day = now.getDay()
        const diff = now.getDate() - day + (day === 0 ? -6 : 1)
        start.setDate(diff)
      } else if (type === 'thisMonth') {
        start = new Date(now.getFullYear(), now.getMonth(), 1)
      }

      const offset = now.getTimezoneOffset() * 60000
      this.fromDate = new Date(start.getTime() - offset).toISOString().substr(0, 10)
      this.toDate = new Date(end.getTime() - offset).toISOString().substr(0, 10)
    },

    async loadTables() {
      try {
        const res = await this.$axios.get('api/tables')
        this.tablesList = res.data?.data || res.data || []
      } catch (err) {
        console.warn('Could not load tables list:', err)
      }
    },

    async loadData() {
      this.isloading = true
      try {
        const params = {
          startDate: this.fromDate,
          endDate: this.toDate,
          limit: 1000,
          include: 'client,table,payment,ticketLines',
        }
        if (this.selectedTableId) {
          params.tableId = this.selectedTableId
        }

        const res = await this.$axios.get('api/ticket/find', { params })
        this.ticketList = res.data?.data || res.data?.tickets || res.data || []
        console.log(`Loaded ${this.ticketList.length} restaurant tickets`)
      } catch (error) {
        console.error('Error fetching tickets:', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນບິນ')
      } finally {
        this.isloading = false
      }
    },

    getTableName(item) {
      if (!item) return '-'
      if (item.table?.number || item.table?.name) {
        return `ໂຕະ ${item.table.number || item.table.name}`
      }
      return '-'
    },

    getTableNameById(id) {
      const found = this.tablesList.find((t) => t.id === id)
      return found ? `ໂຕະ ${found.number || found.name}` : '-'
    },

    getStatusColor(status) {
      switch (status) {
        case 'paid':
          return 'green'
        case 'ready':
        case 'served':
          return 'teal'
        case 'preparing':
          return 'blue'
        case 'pending':
          return 'orange'
        case 'cancel':
        case 'void':
          return 'red'
        default:
          return 'grey'
      }
    },

    isMultiPayment(item) {
      return item.salePayments && Array.isArray(item.salePayments) && item.salePayments.length > 1
    },

    getPaymentMethodsCount(item) {
      if (this.isMultiPayment(item)) return item.salePayments.length
      return item.payment || item.paymentId ? 1 : 0
    },

    getPaymentCode(item) {
      if (!item) return 'N/A'
      if (this.isMultiPayment(item)) return 'MULTI'
      if (item.salePayments && item.salePayments.length === 1) {
        const sp = item.salePayments[0]
        if (sp.paymentMethod?.payment_code) return sp.paymentMethod.payment_code
      }
      if (item.payment?.payment_code) return item.payment.payment_code
      if (item.paymentId && this.findAllPayment) {
        const found = this.findAllPayment.find((p) => p.id === item.paymentId)
        if (found?.payment_code) return found.payment_code
      }
      return 'N/A'
    },

    getPaymentName(item) {
      if (!item) return 'N/A'
      if (item.salePayments && item.salePayments.length > 1) {
        const names = item.salePayments
          .map((sp) => sp.paymentMethod?.payment_name || sp.paymentMethod?.payment_code)
          .filter(Boolean)
        return names.length > 0 ? names.join(' + ') : 'ຫຼາຍວິທີ'
      }
      if (item.salePayments && item.salePayments.length === 1) {
        const sp = item.salePayments[0]
        if (sp.paymentMethod?.payment_name) return sp.paymentMethod.payment_name
        if (sp.paymentMethod?.payment_code) return sp.paymentMethod.payment_code
      }
      if (item.payment?.payment_name) return item.payment.payment_name
      if (item.payment?.payment_code) return item.payment.payment_code
      if (item.paymentId && this.findAllPayment) {
        const found = this.findAllPayment.find((p) => p.id === item.paymentId)
        if (found?.payment_name) return found.payment_name
      }
      return 'N/A'
    },

    getPaymentMethodColor(paymentCode) {
      const code = (paymentCode || '').toUpperCase()
      if (code.includes('CASH') || code.includes('MONEY')) return 'green'
      if (code.includes('QR') || code.includes('SCAN')) return 'purple'
      if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'blue'
      if (code.includes('CARD') || code.includes('CREDIT')) return 'indigo'
      return 'grey darken-1'
    },

    getPaymentMethodIcon(paymentCode) {
      const code = (paymentCode || '').toUpperCase()
      if (code.includes('CASH') || code.includes('MONEY')) return 'mdi-cash'
      if (code.includes('QR') || code.includes('SCAN')) return 'mdi-qrcode'
      if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'mdi-bank-transfer'
      if (code.includes('CARD') || code.includes('CREDIT')) return 'mdi-credit-card'
      return 'mdi-cash-multiple'
    },

    filterByPaymentType(type) {
      if (this.selectedPaymentFilter === type) {
        this.selectedPaymentFilter = null
      } else {
        this.selectedPaymentFilter = type
      }
    },

    clearPaymentFilter() {
      this.selectedPaymentFilter = null
    },

    clearAllFilters() {
      this.selectedPaymentFilter = null
      this.selectedStatusFilter = null
      this.selectedTableId = null
    },

    getFilterDisplayName(filterValue) {
      const opt = this.paymentFilterOptions.find((o) => o.value === filterValue)
      return opt ? opt.label : filterValue
    },

    whatsappLink(item) {
      if (!item.client?.telephone) return
      const tel = item.client.telephone.trim()
      const completeTel = tel.substring(tel.length - 8)
      const link = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent(
        'ສະບາຍດີ ລູກຄ້າ ' + (item.client.name || '')
      )}`
      window.open(link, '_blank')
    },

    showPaymentDetails(item) {
      // Map ticket properties to match TicketDetailsDialog expectation
      const mappedTicket = {
        ...item,
        lines: (item.ticketLines || []).map((l) => ({
          ...l,
          price: l.unitPrice || l.price || 0,
          quantity: l.quantity,
          total: l.totalPrice || l.total || 0,
          discount: l.discount_amount || 0,
        })),
        payments: (item.salePayments || []).map((sp) => ({
          ...sp,
          paymentMethod: sp.paymentMethod,
          payment_name: sp.paymentMethod?.payment_name,
          payment_code: sp.paymentMethod?.payment_code,
          amount: sp.amount,
        })),
        discount: item.promotionDiscount || 0,
      }
      this.selectedTicketForPaymentDetails = mappedTicket
      this.paymentDetailsDialog = true
    },

    onTicketDialogClose() {
      this.paymentDetailsDialog = false
      this.selectedTicketForPaymentDetails = null
    },

    onPrintTicketFromDetails(ticketData) {
      this.openThermalPrint(ticketData)
    },

    previewTicketLines(item) {
      this.previewTicket = item
      this.dialogLinesPreview = true
    },

    openThermalPrint(item) {
      this.ticketToPrint = {
        ...item,
        tableName: this.getTableName(item),
        ticketLines: (item.ticketLines || []).map((l) => ({
          ...l,
          product: l.product || { pro_name: 'Item' },
          quantity: l.quantity,
          unitPrice: l.unitPrice || l.price || 0,
          totalPrice: l.totalPrice || l.total || (l.quantity * (l.unitPrice || l.price || 0)),
        })),
      }
      this.showCustomerPrint = true
    },

    promptCancelTicket(item) {
      this.ticketToCancel = item
      this.cancelReason = ''
      this.dialogCancelTicket = true
    },

    async confirmCancelTicket() {
      if (!this.ticketToCancel) return
      this.isCancelling = true
      try {
        await this.$axios.patch(`/api/ticket/${this.ticketToCancel.id}/status`, {
          status: 'cancel',
          reason: this.cancelReason,
        })
        if (this.$toast) {
          this.$toast.success('ຍົກເລີກບິນສຳເລັດ!')
        }
        this.dialogCancelTicket = false
        await this.loadData()
      } catch (err) {
        console.error('Cancel ticket error:', err)
        swalError2(this.$swal, 'Error', 'Failed to cancel ticket')
      } finally {
        this.isCancelling = false
      }
    },

    printSalesReport() {
      try {
        const companyData = this.companyData
        const normalizedHeaders = this.filteredTicketList.map((t) => ({
          ...t,
          lines: (t.ticketLines || []).map((l) => ({
            ...l,
            price: l.unitPrice || l.price || 0,
            quantity: l.quantity,
            total: l.totalPrice || l.total || 0,
          })),
          discount: t.promotionDiscount || 0,
          total: t.total || 0,
        }))

        printSalesReportSummary({
          orderHeaderList: normalizedHeaders,
          paymentStatistics: this.paymentStatistics,
          filteredOrderHeaderList: normalizedHeaders,
          fromDate: this.fromDate,
          toDate: this.toDate,
          terminalInfo: { name: 'Restaurant Counter POS' },
          companyData: companyData,
          companyLogo: companyData.ticketLogo,
          formatNumber: this.formatNumber,
          user: this.user,
          singlePaymentCount: this.singlePaymentCount,
          multiPaymentCount: this.multiPaymentCount,
          currencyCode: this.localCurrency?.code || 'LAK',
        })

        if (this.$toast) {
          this.$toast.success('ລາຍງານການຂາຍກຳລັງພິມ...', { position: 'bottom-center' })
        }
      } catch (error) {
        console.error('Error printing summary report:', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ')
      }
    },

    printReceiptSummaryReport() {
      try {
        const companyData = this.companyData
        const filters = {
          fromDate: this.fromDate,
          toDate: this.toDate,
          terminalName: 'Restaurant Floor POS',
          userName: this.user?.cus_name || '-',
        }

        const normalizedHeaders = this.filteredTicketList.map((t) => ({
          ...t,
          bookingDate: this.formatTicketDate(t.createdAt),
          referenceNo: t.ticketNumber,
          discount: t.promotionDiscount || 0,
          lines: (t.ticketLines || []).map((l) => ({
            ...l,
            price: l.unitPrice || l.price || 0,
            quantity: l.quantity,
            total: l.totalPrice || l.total || 0,
            product: l.product || { pro_name: 'Item' },
          })),
        }))

        const htmlContent = generateReceiptSummaryReportHTML(
          normalizedHeaders,
          companyData,
          this.findAllCurrency,
          filters
        )

        const printWindow = window.open('', '_blank', 'width=850,height=700')
        if (!printWindow) {
          swalError2(this.$swal, 'Error', 'Please allow popups to print')
          return
        }
        printWindow.document.open()
        printWindow.document.write(htmlContent)
        printWindow.document.close()
        printWindow.onload = () => {
          setTimeout(() => {
            try {
              printWindow.print()
              setTimeout(() => printWindow.close(), 100)
            } catch (e) {
              printWindow.close()
            }
          }, 500)
        }
      } catch (err) {
        console.error('Print summary A4 error:', err)
        swalError2(this.$swal, 'Error', 'Failed to print summary A4')
      }
    },

    exportToExcel() {
      try {
        const exportData = this.filteredTicketList.map((item, index) => {
          let paymentDisplay = ''
          if (this.isMultiPayment(item)) {
            const payMethods = (item.salePayments || [])
              .map((sp) => {
                const name = sp.paymentMethod?.payment_name || sp.paymentMethod?.payment_code || 'Payment'
                return `${name} (${this.formatNumber(sp.amount)})`
              })
              .join(', ')
            paymentDisplay = `ຫຼາຍວິທີ: ${payMethods}`
          } else {
            paymentDisplay = this.getPaymentName(item)
          }

          const clientName = item.client?.name || item.notes || 'Walk-in Customer'
          const clientTel = item.client?.telephone || ''
          const cashierName = item.createUser?.cus_name || item.createUser?.name || '-'

          return {
            'ລຳດັບ (No.)': index + 1,
            'ເລກທີບິນ (Ticket No)': item.ticketNumber || `#${item.id}`,
            'ໂຕະ (Table)': this.getTableName(item),
            'ວັນທີ (Date)': this.formatTicketDate(item.createdAt),
            'ເວລາ (Time)': this.formatTicketTime(item.createdAt),
            'ລູກຄ້າ (Customer)': clientName,
            'ເບີໂທ (Tel)': clientTel || '-',
            'ວິທີຊຳລະ (Payment)': paymentDisplay,
            'ຈຳນວນລາຍການ (Items)': item.ticketLines?.length || 0,
            'ລາຄາເຕັມ (Subtotal)': Number(item.subtotal || 0),
            'ສ່ວນຫຼຸດ (Discount)': Number(item.promotionDiscount || 0),
            'ພາສີ (Tax)': Number(item.tax || 0),
            'ລວມສຸດທິ (Net Total)': Number(item.total || 0),
            'ສະກຸນເງິນ': this.localCurrency?.code || 'LAK',
            'ຜູ້ເປີດບິນ (Cashier)': cashierName,
            'ສະຖານະ (Status)': (item.status || 'pending').toUpperCase(),
            'ໝາຍເຫດ (Notes)': item.notes || '',
          }
        })

        const worksheet = this.$xlsx.utils.json_to_sheet(exportData)
        const workbook = this.$xlsx.utils.book_new()
        this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Restaurant Sales Report')
        const filename = `restaurant_orders_${this.fromDate}_to_${this.toDate}.xlsx`
        this.$xlsx.writeFile(workbook, filename)

        if (this.$toast) {
          this.$toast.success('Excel exported successfully!')
        }
      } catch (error) {
        console.error('Export to Excel error:', error)
        swalError2(this.$swal, 'Error', 'Failed to export to Excel: ' + error.message)
      }
    },
  },
}
</script>

<style scoped>
.grand-summary-section {
  animation: fadeIn 0.3s ease-in-out;
}

.kpi-card {
  transition: all 0.25s ease;
}

.kpi-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08) !important;
}

.gap-1 {
  gap: 4px;
}

.gap-2 {
  gap: 8px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
