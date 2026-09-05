<!-- MINIMART POS SALE REPORT -->
<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການບິນຂາຍ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <!-- Dialogs -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="W6KiQWtiqBM">
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="dialogOrderDetail" fullscreen>
      <OrderDetailPosCRUD @reload="
        loadData()
      dialogOrderDetail = false
        " :is-quotation="false" :key="componentKey" :is-update="viewTransaction" :headerId="selectedOrder"
        @close-dialog="dialogOrderDetail = false">
      </OrderDetailPosCRUD>
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :key="componentCancelFormKey" @close-dialog="cancelForm = false"
        @reload="
          cancelForm = false
        loadData()
          "></cancel-ticket-form>
    </v-dialog>

    <!-- ENHANCED: Use the new reusable TicketDetailsDialog component -->
    <ticket-details-dialog v-model="paymentDetailsDialog" :ticket-data="selectedOrderForPayments"
      :company-logo="companyData.ticketLogo" :ticket-common="ticketCommon" :show-print-button="true"
      @close="onTicketDialogClose" @print-ticket="onPrintTicket" @print-payment-details="onPrintPaymentDetails" />

    <!-- Main Content -->
    <div>
      <v-card>
        <v-card-title>
          <v-layout row wrap>
            <v-col cols="6">
              <!-- Date Filters -->
              <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y
                max-width="290px" min-width="auto">
                <v-date-picker v-model="fromDate" no-title @input="menu1 = false"></v-date-picker>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="fromDateLabel" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                    prepend-icon="mdi-calendar" v-bind="attrs" @blur="fromDate = parseDate(fromDateLabel)"
                    v-on="on"></v-text-field>
                </template>
              </v-menu>

              <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
                max-width="290px" min-width="auto">
                <v-date-picker v-model="toDate" no-title @input="menu2 = false"></v-date-picker>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="toDateLabel" label="ຫາວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                    prepend-icon="mdi-calendar" v-bind="attrs" @blur="toDate = parseDate(toDateLabel)"
                    v-on="on"></v-text-field>
                </template>
              </v-menu>
            </v-col>

            <v-col cols="6">
              <!-- Search and Filters -->
              <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-details />
              <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line hide-details />

              <!-- Payment Type Filter -->
              <v-select v-model="selectedPaymentFilter" :items="paymentFilterOptions" item-text="label"
                item-value="value" label="ຟິລເຕີປະເພດການຊຳລະ" clearable prepend-icon="mdi-filter"
                @change="applyPaymentFilter"></v-select>

              <v-autocomplete item-text="name" item-value="id" :items="customTerminalList" label="ເລືອກຕາມ ຮ້ານ*"
                v-model="terminalId"></v-autocomplete>
            </v-col>

            <v-col cols="12" class="d-flex flex-wrap align-center mt-2">
              <v-btn size="large" variant="outlined" @click="loadData" class="primary mr-2 mb-2" rounded>
                <span class="mdi mdi-cloud-download mr-1"></span>
                ດຶງລາຍງານ
              </v-btn>
              <v-btn size="large" variant="outlined" @click="createSale" class="primary mr-2 mb-2" rounded>
                <span class="mdi mdi-plus mr-1"></span>Create
              </v-btn>
              <v-btn size="large" variant="outlined" @click="exportToExcel" class="primary mr-2 mb-2" rounded>
                <span class="mdi mdi-microsoft-excel mr-1"></span>Generate excel file
              </v-btn>
              <v-btn size="large" variant="outlined" @click="printSalesReport" class="success mr-2 mb-2" rounded
                :disabled="isloading || filteredOrderHeaderList.length === 0">
                <span class="mdi mdi-printer mr-1"></span>Print Report
              </v-btn>
              <v-btn size="large" variant="outlined" @click="printReceiptSummaryReport" class="success mr-2 mb-2" rounded
                :disabled="isloading || filteredOrderHeaderList.length === 0">
                <span class="mdi mdi-file-document-outline mr-1"></span>Print Summary A4
              </v-btn>
            </v-col>
          </v-layout>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <!-- Grand Summary Cards -->
          <section class="grand-summary-section mt-4 mb-6">
            <v-row>
              <v-col cols="12" md="4">
                <v-card class="mx-auto elevation-2" style="border-radius: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);">
                  <v-card-text class="d-flex align-center pa-4">
                    <v-avatar color="blue" size="56" class="elevation-1 mr-4">
                      <v-icon color="white" large>mdi-cart-outline</v-icon>
                    </v-avatar>
                    <div>
                      <div class="text-subtitle-2 grey--text text--darken-1 font-weight-medium">ຍອດຂາຍລວມ (Gross Sales)</div>
                      <div class="text-h5 font-weight-black blue--text text--darken-3">
                        {{ formatNumber(summaryGrossLocal) }}
                        <small class="caption">{{ localCurrency?.code }}</small>
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
                        <small class="caption">{{ localCurrency?.code }}</small>
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
                        <small class="caption">{{ localCurrency?.code }}</small>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </section>

          <!-- Payment Type Summary Cards -->
          <section class="kpi-section mt-5">
            <h4 class="mb-3">
              <v-icon left>mdi-view-dashboard-outline</v-icon>
              ສະຫຼຸບລາຍຮັບຕາມຊ່ອງທາງການຊຳລະ
            </h4>
            <v-row class="kpi-grid">
              <v-col v-for="(item, index) in paymentStatistics" :key="index" cols="12" md="4" lg="4">
                <div class="kpi-card elevation-2 pa-4" style="
                    border-radius: 16px;
                    background: white;
                    border: 1px solid #e2e8f0;
                    cursor: pointer;
                  " @click="filterByPaymentType(item.code)">
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
                        {{ formatNumber(item.gross) }} {{ localCurrency?.code }}
                      </span>
                    </div>
                    <div class="d-flex justify-space-between align-center mb-1 red--text text--darken-1">
                      <span class="caption font-weight-medium">Discount:</span>
                      <span class="caption font-weight-bold">
                        -{{ formatNumber(item.discount) }} {{ localCurrency?.code }}
                      </span>
                    </div>
                    <div class="d-flex justify-space-between align-center mb-3 primary--text">
                      <span class="body-2 font-weight-bold">Net Paid:</span>
                      <span class="font-weight-black text-h6">
                        {{ formatNumber(item.total) }} <small class="caption">{{ localCurrency?.code }}</small>
                      </span>
                    </div>

                    <!-- Multi-Currency Breakdown inside Card -->
                    <div v-if="item.groupedCurrency" class="currency-breakdown-container mt-3">
                      <div v-for="(val, code) in item.groupedCurrency" :key="code"
                        class="mb-2 pa-2 rounded"
                        style="background: #f8fafc; border: 1px dashed #e2e8f0; font-size: 0.75rem;">
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
                        <div v-if="code !== localCurrency?.code" class="mt-1 pt-1 grey--text" style="border-top: 1px dashed #cbd5e1; font-size: 0.65rem">
                          <div class="d-flex justify-space-between align-center">
                            <span>≈ Net Local:</span>
                            <span>{{ formatNumber(val.localNet) }} {{ localCurrency?.code }}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <v-progress-linear :value="item.percentage" :color="item.color" height="6" rounded
                      class="mt-3"></v-progress-linear>
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
              <v-card outlined class="pa-4">
                <h4 class="mb-3">
                  <v-icon left>mdi-credit-card-multiple</v-icon>
                  ສະຖິຕິການຊຳລະ
                </h4>
                <v-row>
                  <v-col cols="6" md="3">
                    <div class="text-center">
                      <h2 class="primary--text">{{ singlePaymentCount }}</h2>
                      <div class="">ຊຳລະແບບດຽວ</div>
                      <v-progress-circular :value="singlePaymentPercentage" color="primary" size="60" width="4">
                        <small>{{ singlePaymentPercentage.toFixed(0) }}%</small>
                      </v-progress-circular>
                    </div>
                  </v-col>

                  <v-col cols="6" md="3">
                    <div class="text-center">
                      <h2 class="success--text">{{ multiPaymentCount }}</h2>
                      <div class="">ຊຳລະຫຼາຍວິທີ</div>
                      <v-progress-circular :value="multiPaymentPercentage" color="success" size="60" width="4">
                        <small>{{ multiPaymentPercentage.toFixed(0) }}%</small>
                      </v-progress-circular>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <div class="d-flex justify-center align-center">
                      <v-btn outlined color="primary" @click="filterByPaymentType('SINGLE')" class="mr-2" :class="{
                        'primary white--text':
                          selectedPaymentFilter === 'SINGLE',
                      }">
                        <v-icon left>mdi-credit-card</v-icon>
                        ສະແດງແຕ່ການຊຳລະດຽວ
                      </v-btn>

                      <v-btn outlined color="success" @click="filterByPaymentType('MULTI')" class="mr-2" :class="{
                        'success white--text':
                          selectedPaymentFilter === 'MULTI',
                      }">
                        <v-icon left>mdi-credit-card-multiple</v-icon>
                        ສະແດງການຊຳລະຫຼາຍວິທີ
                      </v-btn>

                      <v-btn outlined color="grey" @click="clearPaymentFilter">
                        <v-icon left>mdi-filter-off</v-icon>
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
        <v-data-table v-if="filteredOrderHeaderList" :headers="headers" :search="search"
          :items="filteredOrderHeaderList" :loading="isloading" loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..." class="elevation-1">
          <template v-slot:top>
            <div class="pa-3" v-if="selectedPaymentFilter">
              <v-alert :type="selectedPaymentFilter === 'MULTI' ? 'success' : 'info'" dense text dismissible
                @input="clearPaymentFilter">
                <v-icon left>mdi-filter</v-icon>
                ກຳລັງສະແດງ:
                {{ getFilterDisplayName(selectedPaymentFilter) }} ({{
                  filteredOrderHeaderList.length
                }}
                ລາຍການ)
              </v-alert>
            </div>
          </template>

          <!-- Table templates remain the same -->
          <template v-slot:[`item.bookingDate`]="{ item }">
            {{ item.bookingDate.split('T')[0] }}
            <h6 :style="{
              color:
                item.client &&
                  countDay(item.bookingDate.split('T')[0]) > item.client.credit
                  ? 'red'
                  : 'green',
            }">
              {{ countDay(item.bookingDate.split('T')[0]) }}
            </h6>
          </template>

          <template v-slot:[`item.client.credit`]="{ item }">
            <template v-if="item.client">
              <v-chip v-if="
                new Date(
                  dueDate(item.bookingDate, item.client.credit)
                    .toISOString()
                    .split('T')[0]
                ) < new Date()
              " class="ma-2" color="red" text-color="white">
                {{
                  dueDate(item.bookingDate, item.client.credit)
                    .toISOString()
                    .split('T')[0]
                }}
              </v-chip>
              <v-chip v-else class="ma-2" color="green" text-color="white">
                {{
                  dueDate(item.bookingDate, item.client.credit)
                    .toISOString()
                    .split('T')[0]
                }}
              </v-chip>
            </template>
            <template v-else>
              <v-chip class="ma-2" color="grey" text-color="white">
                N/A
              </v-chip>
            </template>
          </template>

          <template v-slot:[`item.dynamic_customer`]="{ item }">
            <v-avatar :color="item.dynamic_customer ? 'green' : 'red'" size="10">
            </v-avatar>
          </template>

          <template v-slot:[`item.discount`]="{ item }">
            {{ numberWithCommas(item.discount) }}
          </template>

          <template v-slot:[`item.total`]="{ item }">
            {{ numberWithCommas(item.total + item.discount) }}
          </template>

          <template v-slot:[`item.grandTotal`]="{ item }">
            {{ numberWithCommas(calculateHeaderTotalLocal(item)) }}
            {{ localCurrency ? localCurrency.code : '' }}
          </template>
          <template v-slot:[`item.createdAt`]="{ item }">
            <v-chip color="success" small dark style="cursor: pointer">
              <v-icon left small>mdi-clock</v-icon>
              {{ getLocalDate(item.createdAt) }}
            </v-chip>
          </template>
          <template v-slot:[`item.ticketId`]="{ item }">
            <v-chip color="success" small dark style="cursor: pointer">
              <v-icon left small>mdi-ticket</v-icon>
              {{ item.id }}{{ item.referenceNo ? ` | ${item.referenceNo}` : '' }}
            </v-chip>
          </template>

          <template v-slot:[`item.id`]="{ item }">
            <v-btn color="primary" text @click="
              viewItem(item)
            wallet = true
              ">
              <i class="fa-regular fa-pen-to-square"></i>
            </v-btn>
          </template>

          <template v-slot:[`item.cancel`]="{ item }">
            <v-btn color="blue darken-1" text @click="
              cancelItem(item)
            wallet = true
              ">
              <i class="fas fa-sync"></i>
            </v-btn>
          </template>

          <template v-slot:[`item.payment.payment_code`]="{ item }">
            <div v-if="isMultiPayment(item)">
              <v-chip color="success" small dark @click="showPaymentDetails(item)" style="cursor: pointer">
                <v-icon left small>mdi-credit-card-multiple</v-icon>
                ຫຼາຍວິທີ ({{ getPaymentMethodsCount(item) }})
              </v-chip>
            </div>
            <div v-else>
              <v-chip :color="getPaymentMethodColor(getPaymentCode(item))" small dark>
                <v-icon left small>{{
                  getPaymentMethodIcon(getPaymentCode(item))
                  }}</v-icon>
                {{ getPaymentName(item) }}
              </v-chip>
            </div>
          </template>

          <template v-slot:[`item.paymentDetails`]="{ item }">
            <v-btn color="info" text small @click="showPaymentDetails(item)" :disabled="!hasPaymentDetails(item)">
              <v-icon small>mdi-eye</v-icon>
              ລາຍລະອຽດ
            </v-btn>
          </template>

          <template v-slot:[`item.cusTel`]="{ item }">
            <v-btn v-if="item.client && item.client.telephone" color="blue darken-1" text @click="whatsappLink(item)">
              {{ item.client.telephone }}
              <a :href="whatsappContactLink" target="_blank">Whatsapp</a>
            </v-btn>
            <span v-else class="text-grey">N/A</span>
          </template>

          <template v-slot:[`item.print`]="{ item }">
            <v-btn @click="printDefaultTicket(item)" text color="primary">
              <span class="mdi mdi-printer"></span>
            </v-btn>
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
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
  getFormatNum,
  ticketHtml,
  getLocalDate,
} from '~/common'
import { printSalesReportSummary } from '~/common/sales-report-printer.js'
import { mainCompanyInfo, preloadCompanyData } from '~/common/api'

import { defaultTicketReprint, customerTicket } from '~/common/ticket.js'
import { generateInvoiceHTML, generateReceiptHTML, generateReceiptSummaryReportHTML } from '~/common/printTemplates'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
// IMPORT: Add the new reusable component
import TicketDetailsDialog from '~/components/pos/dialogs/TicketDetailsDialog.vue'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    OrderDetailPos,
    OrderSumaryCardPos,
    OrderDetailPosCRUD,
    TicketDetailsDialog, // ADDED: Register the new component
  },
  middleware: 'auths',
  data() {
    return {
      terminalId: 999,
      guidelineDialog: false,
      currencyList: [],
      viewTransaction: false,
      whatsappContactLink: '',
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrder: 0,
      wallet: false,
      isedit: false,
      dialog: false,
      isloading: false,
      valid: true,
      name: '',
      search: '',
      userId: null,
      orderHeaderList: [],
      loadDataNoCancelOrder: [],
      codPaid: [],
      shippingList: [],
      componentCancelFormKey: 1,
      cancelForm: false,
      OrderIdSelected: '',
      lastTransactionSaleHeaderId: 0,

      // SIMPLIFIED: Payment Details Dialog - now handled by component
      paymentDetailsDialog: false,
      selectedOrderForPayments: null,

      // Payment Filtering
      selectedPaymentFilter: null,

      headers: [
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'bookingDate',
          sortable: true,
        },
        {
          text: 'ເລກທີ ໃບບິນ',
          align: 'center',
          value: 'ticketId',
          sortable: true,
        },
        {
          text: 'Offline/Online',
          align: 'center',
          value: 'dynamic_customer',
          sortable: true,
        },
        {
          text: 'ລູກຄ້າ',
          align: 'center',
          value: 'client.name',
          sortable: true,
        },
        {
          text: 'ເບີໂທ',
          align: 'center',
          value: 'cusTel',
          sortable: false,
        },
        {
          text: 'ຊຳລະດ້ວຍ',
          align: 'center',
          value: 'payment.payment_code',
          sortable: true,
        },
        {
          text: 'ລາຍລະອຽດການຊຳລະ',
          align: 'center',
          value: 'paymentDetails',
          sortable: false,
        },
        {
          text: 'ສະກຸນເງິນ',
          align: 'center',
          value: 'currency.code',
          sortable: true,
        },
        {
          text: 'ອັດຕາແລກປ່ຽນ',
          align: 'center',
          value: 'exchangeRate',
          sortable: true,
        },
        {
          text: 'ລາຄາເຕັມ',
          align: 'end',
          value: 'total',
          sortable: false,
        },
        {
          text: 'ສ່ວນຫລຸດ',
          align: 'end',
          value: 'discount',
          sortable: true,
        },
        {
          text: 'ລວມ',
          align: 'end',
          value: 'grandTotal',
          sortable: false,
        },
        {
          text: 'ຜູ້ລົງທຸລະກຳ',
          align: 'end',
          value: 'user.cus_name',
          sortable: false,
        },
        {
          text: 'ເວລາລົງ',
          align: 'end',
          value: 'createdAt',
          sortable: false,
        },
        {
          text: 'ພິມບິນ',
          align: 'end',
          value: 'print',
          sortable: false,
        },
        {
          text: 'View/Update',
          align: 'end',
          value: 'id',
          sortable: false,
        },
      ],

      // fromDate: getFirstDayOfMonth(),// FIRSTDAY OF MONTH
      fromDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      toDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      // fromDateLabel: this.formatDate(getFirstDayOfMonth()),// FRIST DATE OF THE MONTH
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
    }
  },

  // Rest of your component logic remains the same...
  async created() {
    this.terminalId = this.findSelectedTerminal
    console.log(`Current terminal select ${this.findSelectedTerminal}`)

    try {
      await preloadCompanyData(this.$axios)
      console.log('Company data preloaded for sales report')
    } catch (error) {
      console.warn('Company preload failed, using fallback:', error)
    }

    await this.loadData()
    await this.loadShipping()
    await this.loadCurrency()
  },

  watch: {
    fromDate(val) {
      console.log(`FROM DATE WATCHER VAL ${val}`)
      this.fromDateLabel = this.formatDate(this.fromDate)
      this.loadData()
    },
    toDate(val) {
      console.log(`TO DATE WATCHER ${this.toDate}`)
      this.toDateLabel = this.formatDate(this.toDate)
      this.loadData()
    },
  },

  computed: {
    localCurrency() {
      return this.findAllCurrency?.find(
        (c) => c.isLocalCCY === true || c.isLocalCCY === 1
      )
    },
    currencyStatistics() {
      const stats = {}
      this.activeOrderHeaderList.forEach((header) => {
        header.lines.forEach((line) => {
          const lineCurrency =
            this.findAllCurrency?.find((c) => c.id === line.currencyId) ||
            this.findAllCurrency?.find(
              (c) => c.id === line.product?.saleCurrencyId
            )

          const currencyCode = lineCurrency?.code || this.findLocalCurrency.code
          const isLocal =
            lineCurrency?.isLocalCCY === true || lineCurrency?.isLocalCCY === 1

          // Logic Fix: Conversion is 1 if local, else use stored exchangeRate
          const rate = isLocal ? 1 : line.exchangeRate || 1
          const lineTotalLocal = line.quantity * line.price * rate

          if (!stats[currencyCode]) {
            stats[currencyCode] = {
              code: currencyCode,
              amountOriginal: 0,
              amountLocal: 0,
              count: 0,
              isLocal: isLocal,
            }
          }
          stats[currencyCode].amountOriginal += line.quantity * line.price
          stats[currencyCode].amountLocal += lineTotalLocal
          stats[currencyCode].count += 1
        })
      })
      return Object.values(stats)
    },
    getSPF() {
      return this.$store.getters.findSPF
    },
    paperSize() {
      const item = this.getSPF.find((spf) => spf.code == 'PAPER_SIZE')
      return item?.value || '80mm'
    },
    // All your existing computed properties remain the same...
    // companyData() {
    //   console.log(`**********ENHANCED COMPANY DATA**********`)
    //   const company = mainCompanyInfo()
    //   console.log('Company info:', company)
    //   return company
    // },
    companyData() {
      const baseCompany = mainCompanyInfo()
      const terminalCompany = this.currentTerminal?.location?.company
      console.info(`TERMINAL COMPAYMEN ${JSON.stringify(terminalCompany)}`)

      const baseUrl = this.$axios.defaults.baseURL || ''
      const storeCompany = this.$store?.getters?.findAllCompany?.[0] || {}

      const resolvedProfileImagePath =
        terminalCompany?.profile_image_path ||
        baseCompany?.profile_image_path ||
        baseCompany?.apiData?.profile_image_path ||
        storeCompany?.profile_image_path ||
        null

      const resolvedBankQrImagePath =
        terminalCompany?.bank_qr_image_path ||
        baseCompany?.bank_qr_image_path ||
        baseCompany?.apiData?.bank_qr_image_path ||
        storeCompany?.bank_qr_image_path ||
        null

      const resolvedBankQrImagePath2 =
        terminalCompany?.bank_qr_image_path_2 ||
        baseCompany?.bank_qr_image_path_2 ||
        baseCompany?.apiData?.bank_qr_image_path_2 ||
        storeCompany?.bank_qr_image_path_2 ||
        null

      const ticketLogo = resolvedProfileImagePath 
        ? `${baseUrl}/${resolvedProfileImagePath.replace(/^\//, '')}` 
        : 'default-logo.png'

      const qrCode = resolvedBankQrImagePath 
        ? `${baseUrl}/${resolvedBankQrImagePath.replace(/^\//, '')}` 
        : null

      const qrCode2 = resolvedBankQrImagePath2 
        ? `${baseUrl}/${resolvedBankQrImagePath2.replace(/^\//, '')}` 
        : null

      return {
        name: terminalCompany?.name || baseCompany?.name || storeCompany?.name || 'DCOMMERCE MART',
        address:
          this.formatCompanyAddress(terminalCompany) ||
          baseCompany?.address ||
          storeCompany?.address ||
          '123 Main Street',
        tel: terminalCompany?.tel || baseCompany?.tel || storeCompany?.tel || '',
        email: terminalCompany?.email || baseCompany?.email || storeCompany?.email || '',
        bank: terminalCompany?.bank || baseCompany?.bank || storeCompany?.bank || '',
        accountName:
          terminalCompany?.accountName || baseCompany?.accountName || storeCompany?.accountName || '',
        accounts: terminalCompany?.accounts || baseCompany?.accounts || storeCompany?.accounts || '',
        taxId: terminalCompany?.taxId || baseCompany?.taxId || storeCompany?.taxId || '',
        remark: terminalCompany?.remark || baseCompany?.remark || storeCompany?.remark || '',
        term_condition: terminalCompany?.term_condition || baseCompany?.term_condition || storeCompany?.term_condition || '',
        showLogoOnTicket: terminalCompany?.showLogoOnTicket || baseCompany?.showLogoOnTicket || storeCompany?.showLogoOnTicket || '',
        ticketQRcode: terminalCompany?.ticketQRcode || baseCompany?.ticketQRcode || storeCompany?.ticketQRcode || false,
        ticketLayout: terminalCompany?.ticketLayout || baseCompany?.ticketLayout || storeCompany?.ticketLayout || 'classic',
        profile_image_path: resolvedProfileImagePath,
        bank_qr_image_path: resolvedBankQrImagePath,
        bank_qr_image_path_2: resolvedBankQrImagePath2,
        ticketLogo,
        qrCode,
        qrCode2,
      }
    },

    ticketCommon() {
      return ticketHtml()
    },

    // All your existing computed properties...
    currentTerminal() {
      console.log(
        `ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`
      )
      const terminalInfo = this.findAllTerminal.find(
        (el) => el['id'] == this.findSelectedTerminal
      )
      console.log(
        `************ ${this.findAllTerminal.length} SELECTED ${terminalInfo?.['name']} ************ `
      )
      return this.findAllTerminal.find(
        (el) => el['id'] == this.findSelectedTerminal
      )
    },

    customTerminalList() {
      let originalTerminalListVanilla = JSON.stringify(this.findAllTerminal)
      let originalTerminalList = JSON.parse(originalTerminalListVanilla)
      const extraTerminal = {
        id: 999,
        code: 1999,
        name: 'ທັງໝົດ',
        description: '',
        locationId: 1,
      }
      originalTerminalList.push(extraTerminal)
      console.log(`Terminal customer all len: ${originalTerminalList.length}`)
      return originalTerminalList
    },

    ...mapGetters([
      'currentSelectedLocation',
      'cartOfProduct',
      'currenctSelectedCategoryId',
      'findAllProduct',
      'findAllprinters',
      'currentSelectedCustomer',
      'currentSelectedPayment',
      'findSelectedTerminal',
      'findAllTerminal',
      'findAllLocation',
      'findAllCurrency',
      'findLocalCurrency',
      'findAllPayment', // ADDED: Payment methods from store
    ]),

    activeOrderHeaderList() {
      console.log(`TerminalSelcted ${this.terminalId}`)
      const terminal = this.findAllTerminal.find(
        (el) => el['id'] == this.terminalId
      )
      if (!terminal) {
        return this.orderHeaderList.filter(
          (el) => el['isActive'] == true && el['paymentId'] != 2
        )
      }
      console.log(`Current location ${JSON.stringify(terminal)}`)
      return this.orderHeaderList.filter(
        (el) =>
          el['isActive'] == true &&
          el['paymentId'] != 2 &&
          el['locationId'] == terminal['locationId']
      )
    },

    filteredOrderHeaderList() {
      if (!this.selectedPaymentFilter) {
        return this.activeOrderHeaderList
      }

      return this.activeOrderHeaderList.filter((item) => {
        switch (this.selectedPaymentFilter) {
          case 'SINGLE':
            return !this.isMultiPayment(item)
          case 'MULTI':
            return this.isMultiPayment(item)
          case 'CASH':
          case 'TRANSFER_BCEL':
          case 'QR':
          case 'CARD':
          case 'COD':
            if (this.isMultiPayment(item)) {
              return item.payments.some(
                (payment) =>
                  payment.paymentMethod?.payment_code ===
                  this.selectedPaymentFilter
              )
            } else {
              const paymentCode = item.payment?.payment_code || item.payments?.[0]?.paymentMethod?.payment_code
              return paymentCode === this.selectedPaymentFilter
            }
          default:
            return true
        }
      })
    },

    paymentStatistics() {
      const stats = {}
      let grandTotalLocal = 0

      this.activeOrderHeaderList.forEach((header) => {
        const headerCcy = this.findAllCurrency?.find(
          (c) => Number(c.id) === Number(header.currencyId)
        )
        const isHeaderLocal =
          headerCcy?.isLocalCCY === true || headerCcy?.isLocalCCY === 1
        const headerRate = isHeaderLocal ? 1 : header.exchangeRate || 1

        const headerNetLocal = (header.total || 0) * headerRate
        const headerDiscountLocal = (header.discount || 0) * headerRate
        const headerGrossLocal = headerNetLocal + headerDiscountLocal
        
        grandTotalLocal += headerNetLocal

        // Build list of payments for this header
        const paymentList = []
        if (this.isMultiPayment(header)) {
          header.payments.forEach((p) => {
            const pCcy = this.findAllCurrency?.find(
              (c) => Number(c.id) === Number(p.currencyId || header.currencyId)
            )
            const isLocal = pCcy?.isLocalCCY === true || pCcy?.isLocalCCY === 1
            const rate = isLocal ? 1 : p.exchangeRate || header.exchangeRate || 1
            const pAmountLocal = Number(p.amount || 0) * rate

            paymentList.push({
              code: p.paymentMethod?.payment_code,
              name: p.paymentMethod?.payment_name,
              amountLocal: pAmountLocal,
              currencyCode: pCcy?.code || this.findLocalCurrency?.code || 'LAK',
              exchangeRate: rate
            })
          })
        } else {
          const pMethod = header.payment || header.payments?.[0]?.paymentMethod
          const pCcy = this.findAllCurrency?.find(
            (c) => Number(c.id) === Number(header.payments?.[0]?.currencyId || header.currencyId)
          )
          const isLocal = pCcy?.isLocalCCY === true || pCcy?.isLocalCCY === 1
          const rate = isLocal ? 1 : header.payments?.[0]?.exchangeRate || header.exchangeRate || 1
          const pAmountLocal = header.payments?.[0]?.amount !== undefined 
            ? Number(header.payments[0].amount) * rate 
            : headerNetLocal

          paymentList.push({
            code: pMethod?.payment_code,
            name: pMethod?.payment_name,
            amountLocal: pAmountLocal,
            currencyCode: pCcy?.code || this.findLocalCurrency?.code || 'LAK',
            exchangeRate: rate
          })
        }

        const totalPaidLocal = paymentList.reduce((sum, p) => sum + p.amountLocal, 0) || 1
        const scaleRatio = headerNetLocal / totalPaidLocal

        paymentList.forEach((p) => {
          p.amountLocal = p.amountLocal * scaleRatio
        })

        paymentList.forEach((p) => {
          const paymentCode = p.code || 'UNKNOWN'
          const paymentName = p.name || 'Unknown'
          const pNetLocal = p.amountLocal
          const proportion = headerNetLocal > 0 ? (pNetLocal / headerNetLocal) : 1

          const pGrossLocal = headerGrossLocal * proportion
          const pDiscountLocal = headerDiscountLocal * proportion

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
              original: 0,
              local: 0,
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

          stats[paymentCode].groupedCurrency[cCode].original += originalNet
          stats[paymentCode].groupedCurrency[cCode].local += pNetLocal
        })
      })

      return Object.values(stats).map((stat) => ({
        ...stat,
        percentage:
          grandTotalLocal > 0 ? (stat.total / grandTotalLocal) * 100 : 0,
      }))
    },

    summaryGrossLocal() {
      return this.activeOrderHeaderList.reduce((sum, header) => {
        const headerCcy = this.findAllCurrency?.find(
          (c) => Number(c.id) === Number(header.currencyId)
        )
        const isHeaderLocal =
          headerCcy?.isLocalCCY === true || headerCcy?.isLocalCCY === 1
        const headerRate = isHeaderLocal ? 1 : header.exchangeRate || 1
        
        const net = (header.total || 0) * headerRate
        const discount = (header.discount || 0) * headerRate
        return sum + net + discount
      }, 0)
    },

    summaryDiscountLocal() {
      return this.activeOrderHeaderList.reduce((sum, header) => {
        const headerCcy = this.findAllCurrency?.find(
          (c) => Number(c.id) === Number(header.currencyId)
        )
        const isHeaderLocal =
          headerCcy?.isLocalCCY === true || headerCcy?.isLocalCCY === 1
        const headerRate = isHeaderLocal ? 1 : header.exchangeRate || 1
        return sum + (header.discount || 0) * headerRate
      }, 0)
    },

    summaryNetLocal() {
      return this.activeOrderHeaderList.reduce((sum, header) => {
        const headerCcy = this.findAllCurrency?.find(
          (c) => Number(c.id) === Number(header.currencyId)
        )
        const isHeaderLocal =
          headerCcy?.isLocalCCY === true || headerCcy?.isLocalCCY === 1
        const headerRate = isHeaderLocal ? 1 : header.exchangeRate || 1
        return sum + (header.total || 0) * headerRate
      }, 0)
    },

    singlePaymentCount() {
      return this.activeOrderHeaderList.filter(
        (item) => !this.isMultiPayment(item)
      ).length
    },

    multiPaymentCount() {
      return this.activeOrderHeaderList.filter((item) =>
        this.isMultiPayment(item)
      ).length
    },

    singlePaymentPercentage() {
      const total = this.activeOrderHeaderList.length
      return total > 0 ? (this.singlePaymentCount / total) * 100 : 0
    },

    multiPaymentPercentage() {
      const total = this.activeOrderHeaderList.length
      return total > 0 ? (this.multiPaymentCount / total) * 100 : 0
    },

    // ADDED: Dynamic payment filter options from store
    paymentFilterOptions() {
      const options = [{ label: 'ທັງໝົດ', value: null }]

      // Add payment methods from store
      if (this.findAllPayment && this.findAllPayment.length > 0) {
        this.findAllPayment.forEach((payment) => {
          if (payment.isActive) {
            options.push({
              label: payment.payment_name,
              value: payment.payment_code,
            })
          }
        })
      }

      // Add special filter options
      options.push(
        { label: 'ຊຳລະແບບດຽວ', value: 'SINGLE' },
        { label: 'ຊຳລະຫຼາຍວິທີ', value: 'MULTI' }
      )

      return options
    },

    computedDateFormatted() {
      return this.formatDate(this.fromDate)
    },

    normalizedSales() {
      return this.filteredOrderHeaderList.map((header) => {
        // Calculate the actual total by summing normalized lines
        const actualTotalLAK = header.lines.reduce((sum, line) => {
          // Calculate line total in its own currency first
          const lineTotalOriginal = line.quantity * line.price
          // Convert to local currency using the line's specific exchange rate
          const lineTotalLAK = lineTotalOriginal * (line.exchangeRate || 1)
          return sum + lineTotalLAK
        }, 0)

        return {
          ...header,
          calculatedTotalLAK: actualTotalLAK,
          netTotalLAK: actualTotalLAK - header.discount,
        }
      })
    },

    totalSale() {
      return this.activeOrderHeaderList.reduce(
        (sum, item) => sum + this.calculateHeaderTotalLocal(item),
        0
      )
    },
    totalSaleRaw() {
      let total = 0
      this.filteredOrderHeaderList.forEach((el) => {
        console.log('====>', el.cartTotal)
        total += parseInt(el.cartTotal)
      })
      console.log('Price total: ' + total)
      return total
    },

    totalDiscount() {
      let total = 0
      this.filteredOrderHeaderList.forEach((el) => {
        total += parseInt(el.discount)
      })
      return total
    },

    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach((element) => {
        if (
          element.paymentStatus === 'PENDING' &&
          (element.payment?.payment_code?.includes('COD') ||
           element.payments?.some((p) => p.paymentMethod?.payment_code?.includes('COD')) ||
           (typeof element.payment === 'string' && element.payment.includes('COD')))
        ) {
          console.log('Concept applied')
          txnList.push(element)
        }
      })
      const totalPrice = txnList.reduce((total, item) => {
        return total + item.cartTotal
      }, 0)
      const totalDiscount = txnList.reduce((total, item) => {
        return total + item.discount
      }, 0)

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice
      orderDetail.sale = this.getFormatNum(totalPrice)
      orderDetail.discount = this.getFormatNum(totalDiscount)
      orderDetail.gross = this.getFormatNum(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail
    },

    user() {
      return this.$auth.user || ''
    },
  },

  methods: {
    calculateHeaderTotalLocal(header) {
      const headerCcy = this.findAllCurrency?.find(
        (c) => Number(c.id) === Number(header.currencyId)
      )
      const isHeaderLocal =
        headerCcy?.isLocalCCY === true || headerCcy?.isLocalCCY === 1
      const headerRate = isHeaderLocal ? 1 : header.exchangeRate || 1

      return (header.total || 0) * headerRate
    },
    formatCompanyAddress(company) {
      if (!company) return ''

      let formattedAddress = ''
      if (company.address) formattedAddress += company.address
      if (company.village) formattedAddress += `<br>${company.village}`
      if (company.district) formattedAddress += `, ${company.district}`
      if (company.province) formattedAddress += `, ${company.province}`

      return formattedAddress || company.address || ''
    },
    printSalesReport() {
      try {
        console.log('🖨️ Printing sales report summary...')

        // Prepare terminal info
        const terminalInfo =
          this.terminalId === 999
            ? { name: 'ທັງໝົດ', id: 999 }
            : this.customTerminalList.find(
              (terminal) => terminal.id === this.terminalId
            )

        // Prepare company data
        const companyData = this.companyData?.apiData || this.companyData || {}

        // Call the print function
        printSalesReportSummary({
          orderHeaderList: this.activeOrderHeaderList,
          paymentStatistics: this.paymentStatistics,
          filteredOrderHeaderList: this.filteredOrderHeaderList,
          fromDate: this.fromDate,
          toDate: this.toDate,
          terminalInfo: terminalInfo,
          companyData: companyData,
          companyLogo: this.companyData.ticketLogo,
          formatNumber: this.formatNumber,
          user: this.user,
          singlePaymentCount: this.singlePaymentCount,
          multiPaymentCount: this.multiPaymentCount,
          currencyCode: this.localCurrency?.code || this.findLocalCurrency?.code || 'LAK',
        })

        // Optional: Show success message
        if (this.$toast) {
          this.$toast.success('ລາຍງານການຂາຍກຳລັງພິມ...', {
            position: 'bottom-center',
          })
        }
      } catch (error) {
        console.error('Error printing sales report:', error)

        // Show error message
        if (this.$toast) {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ', {
            position: 'bottom-center',
          })
        } else if (this.$swal) {
          this.$swal.fire({
            title: 'Error',
            text: 'ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ',
            icon: 'error',
          })
        }
      }
    },
    async printReceiptSummaryReport() {
      try {
        console.log('🖨️ Printing detailed receipt summary report...')
        this.isloading = true

        // Eagerly load currencies if not already loaded, to prevent print crashes or incorrect currency conversion
        if (!this.findAllCurrency || this.findAllCurrency.length === 0) {
          try {
            const response = await this.$axios.get('api/currency/findAll')
            let data = response.data?.data ?? response.data
            if (Array.isArray(data)) {
                data = data.filter(c => c.isActive === true || c.isActive === 1)
            }
            await this.$store.dispatch('initCurrency', data)
          } catch (error) {
            console.error('Failed to load currencies in receipt summary print:', error)
          }
        }

        const terminalInfo =
          this.terminalId === 999
            ? { name: 'ທັງໝົດ', id: 999 }
            : this.customTerminalList.find(
              (terminal) => terminal.id === this.terminalId
            )

        const companyData = this.companyData
        
        const filters = {
          fromDate: this.fromDate,
          toDate: this.toDate,
          terminalName: terminalInfo?.name || 'ທັງໝົດ',
          userName: this.user?.cus_name || '-'
        }

        const htmlContent = generateReceiptSummaryReportHTML(
          this.filteredOrderHeaderList,
          companyData,
          this.findAllCurrency,
          filters
        )

        this.openPrintWindow(htmlContent)
      } catch (error) {
        console.error('Error printing detailed summary report:', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ')
      } finally {
        this.isloading = false
      }
    },
    getLocalDate,

    // SIMPLIFIED: Dialog event handlers for the new component
    onTicketDialogClose() {
      this.paymentDetailsDialog = false
      this.selectedOrderForPayments = null
    },

    onPrintTicket(ticketData) {
      this.printDefaultTicket(ticketData)
    },

    onPrintPaymentDetails(ticketData) {
      console.log('Payment details printed for ticket:', ticketData.id)
      // Optional: Add any additional logic after printing
    },

    // NEW: Utility method to find payment method details
    getPaymentMethodDetails(paymentCode) {
      if (!paymentCode || !this.findAllPayment) return null
      return (
        this.findAllPayment.find((p) => p.payment_code === paymentCode) || null
      )
    },

    getPaymentCode(item) {
      if (this.isMultiPayment(item)) {
        return 'MULTI'
      }
      return (
        item.payment?.payment_code ||
        item.payments?.[0]?.paymentMethod?.payment_code ||
        item.payments?.[0]?.payment_code ||
        (item.paymentId && this.findAllPayment?.find((p) => p.id === item.paymentId)?.payment_code) ||
        'N/A'
      )
    },

    getPaymentName(item) {
      if (this.isMultiPayment(item)) {
        return 'ຫຼາຍວິທີ'
      }
      return (
        item.payment?.payment_name ||
        item.payments?.[0]?.paymentMethod?.payment_name ||
        item.payments?.[0]?.payment_name ||
        (item.paymentId && this.findAllPayment?.find((p) => p.id === item.paymentId)?.payment_name) ||
        item.payment?.payment_code ||
        'N/A'
      )
    },

    // Payment Filter Methods (remain the same)
    filterByPaymentType(paymentType) {
      if (this.selectedPaymentFilter === paymentType) {
        this.clearPaymentFilter()
      } else {
        this.selectedPaymentFilter = paymentType
        this.applyPaymentFilter()
      }
    },

    applyPaymentFilter() {
      console.log('Applied payment filter:', this.selectedPaymentFilter)
    },

    clearPaymentFilter() {
      this.selectedPaymentFilter = null
    },

    getFilterDisplayName(filterValue) {
      const option = this.paymentFilterOptions.find(
        (opt) => opt.value === filterValue
      )
      return option ? option.label : filterValue
    },

    // Multi-Payment Detection and Handling Methods (remain the same)
    isMultiPayment(item) {
      return (
        item.payments &&
        Array.isArray(item.payments) &&
        item.payments.length > 1
      )
    },

    hasPaymentDetails(item) {
      return (item.payments && item.payments.length > 0) || item.payment
    },

    getPaymentMethodsCount(item) {
      if (this.isMultiPayment(item)) {
        return item.payments.length
      }
      return item.payment ? 1 : 0
    },

    getPaymentMethodColor(paymentCode) {
      // Try to find the payment method in store first
      const paymentMethod = this.findAllPayment.find(
        (p) => p.payment_code === paymentCode
      )

      if (paymentMethod) {
        // Generate color based on payment code for consistency
        const colorMap = {
          CASH: 'green',
          QR: 'purple',
          TRANSFER: 'blue',
          TRANSFER_BCEL: 'blue',
          BCEL: 'blue',
          COD: 'orange',
          CREDIT: 'red',
          CARD: 'indigo',
          BANK: 'teal',
          MOBILE: 'pink',
        }

        // Check if exact match exists
        if (colorMap[paymentCode]) {
          return colorMap[paymentCode]
        }

        // For other payment codes, generate color based on common keywords
        const code = paymentCode.toUpperCase()
        if (code.includes('CASH') || code.includes('MONEY')) return 'green'
        if (code.includes('QR') || code.includes('SCAN')) return 'purple'
        if (
          code.includes('TRANSFER') ||
          code.includes('BANK') ||
          code.includes('BCEL')
        )
          return 'blue'
        if (code.includes('CARD') || code.includes('CREDIT')) return 'indigo'
        if (code.includes('COD') || code.includes('DELIVERY')) return 'orange'
        if (code.includes('MOBILE') || code.includes('PHONE')) return 'pink'

        return 'primary'
      }

      return 'grey'
    },

    getPaymentMethodIcon(paymentCode) {
      // Try to find the payment method in store first
      const paymentMethod = this.findAllPayment.find(
        (p) => p.payment_code === paymentCode
      )

      if (paymentMethod) {
        const iconMap = {
          CASH: 'mdi-cash',
          QR: 'mdi-qrcode',
          TRANSFER: 'mdi-bank-transfer',
          TRANSFER_BCEL: 'mdi-bank-transfer',
          BCEL: 'mdi-bank',
          COD: 'mdi-truck-delivery',
          CREDIT: 'mdi-credit-card-outline',
          CARD: 'mdi-credit-card',
          BANK: 'mdi-bank',
          MOBILE: 'mdi-cellphone',
          WALLET: 'mdi-wallet',
        }

        if (iconMap[paymentCode]) {
          return iconMap[paymentCode]
        }

        const code = paymentCode.toUpperCase()
        if (code.includes('CASH') || code.includes('MONEY')) return 'mdi-cash'
        if (code.includes('QR') || code.includes('SCAN')) return 'mdi-qrcode'
        if (
          code.includes('TRANSFER') ||
          code.includes('BANK') ||
          code.includes('BCEL')
        )
          return 'mdi-bank-transfer'
        if (code.includes('CARD') || code.includes('CREDIT'))
          return 'mdi-credit-card'
        if (code.includes('COD') || code.includes('DELIVERY'))
          return 'mdi-truck-delivery'
        if (code.includes('MOBILE') || code.includes('PHONE'))
          return 'mdi-cellphone'
        if (code.includes('WALLET')) return 'mdi-wallet'

        return 'mdi-cash-multiple'
      }

      return 'mdi-help-circle'
    },

    // SIMPLIFIED: Show payment details (now uses the component)
    showPaymentDetails(item) {
      this.selectedOrderForPayments = item
      this.paymentDetailsDialog = true
      console.info(
        `SELECTED TICKET DET: ${JSON.stringify(this.selectedOrderForPayments)}`
      )
    },

    // All your existing methods remain the same...
    currentShipping(shippingId) {
      const shipping = this.shippingList.find((el) => el.id == shippingId)
      if (shipping == undefined) return ''
      return shipping['name']
    },

    formatNumber(val) {
      return new Intl.NumberFormat().format(val || 0)
    },

    async loadShipping() {
      this.$axios
        .get('/api/shipping/find')
        .then((res) => {
          this.shippingList = res.data
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', er)
        })
      this.isloading = false
    },

    async loadCurrency() {
      this.isloading = true
      this.currencyList = []
      console.log('Loading currency ===>')
      await this.$axios
        .get('/api/currency/findAll')
        .then((res) => {
          for (const iterator of res.data) {
            this.currencyList.push(iterator)
          }
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', er)
        })
      this.isloading = false
    },

    async printDefaultTicket(data) {
      // Check if TICKET_FORM = FORMAL
      const PRINTFORMAT = (this.getSPF || []).find(
        (spf) => spf.code === 'TICKET_FORM'
      )
      if (PRINTFORMAT && PRINTFORMAT.value === 'FORMAL') {
        this.isloading = true
        try {
          const response = await this.$axios.get(`api/sale/find/${data.id}`)
          const invoiceData = {
            ...data,
            ...response.data,
            referenceNo: (response.data?.referenceNo && response.data.referenceNo.trim()) 
              ? response.data.referenceNo 
              : (data?.referenceNo || ''),
            location: response.data?.location || data?.location || null,
            payments: (response.data?.payments && response.data.payments.length > 0) 
              ? response.data.payments 
              : (data?.payments || [])
          }
          const companyData = this.companyData
          const htmlContent = generateInvoiceHTML(
            invoiceData,
            companyData,
            this.findAllCurrency
          )
          this.openPrintWindow(htmlContent)
        } catch (error) {
          console.error('Error printing A4 invoice:', error)
          swalError2(this.$swal, 'Error', 'Failed to print A4 invoice')
        } finally {
          this.isloading = false
        }
        return
      }

      // TODO: PRINTING TICKET ISSUE NO LOGO SHOWING.
      console.info('PRINTING TICKET WITH DATA:', JSON.stringify(data))

      let paymentCode = 'UNKNOWN'
      if (this.isMultiPayment(data)) {
        paymentCode = 'MULTI-PAYMENT'
      } else if (data.payment) {
        paymentCode = data.payment.payment_code
      }

      // 🔧 FIX: Transform the data structure to match what the ticket function expects
      const transformedLines = data.lines.map((line) => ({
        // Map the actual data structure to what the ticket function expects
        id: line.product?.id || line.productId,
        pro_name: line.product?.pro_name || 'Unknown Product',
        qty: line.quantity, // ✅ quantity → qty
        localPrice: line.price, // ✅ price → localPrice
        pro_price: line.price, // ✅ fallback price
        isGift: line.isGift || false, // ✅ Add isGift property
        saleCurrencyId: line.currencyId, // ✅ currencyId → saleCurrencyId

        // Additional properties that might be needed
        total: line.total,
        discount: line.discount || 0,
        exchangeRate: line.exchangeRate || 1,
        priceListId: line.priceListId || null,
        priceLists: line.priceLists || [],
      }))
      console.info(`company data ${JSON.stringify(this.companyData)}`)
      console.info(`printer data ${JSON.stringify(this.findAllprinters)}`)
      console.info('🔧 TRANSFORMED LINES FOR TICKET:', transformedLines)
      // TODO: Fetch the printer from here
      defaultTicketReprint({
        printers: this.findAllprinters,
        productCart: { lines: transformedLines }, // ✅ Pass transformed data
        findAllProduct: this.findAllProduct,
        formatNumber: this.formatNumber,
        discount: data.discount,
        currencyList: this.currencyList,
        grandTotal: data.total,
        lastTransactionSaleHeaderId: data.id,
        currentTerminal: {
          ...this.currentTerminal,
          baseURL: this.$axios.defaults.baseURL,
        },
        user: this.user,
        ticketCommon: this.ticketCommon,
        currentPaymentCode: paymentCode,
        cashReceived: data.total,
        changes: 0,
        bookingDate: data.createdAt,
        axios: this.$axios,
        companyData: this.companyData,
        paperWidth: this.paperSize,
        client: data.client,
      })
    },

    openPrintWindow(htmlContent) {
      try {
        const printWindow = window.open('', '_blank', 'width=800,height=600')

        if (!printWindow) {
          swalError2(
            this.$swal,
            'Error',
            'Unable to open print window. Please check popup blocker settings.'
          )
          return
        }

        printWindow.document.open()
        printWindow.document.write(htmlContent)
        printWindow.document.close()

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print()
              setTimeout(() => {
                printWindow.close()
              }, 100)
            } catch (e) {
              console.error('Print error:', e)
              printWindow.close()
            }
          }, 500)
        }

        // Fallback check
        setTimeout(() => {
          if (printWindow && !printWindow.closed) {
            try { printWindow.print() } catch (e) { }
          }
        }, 1000)

      } catch (error) {
        console.error('Error creating print window:', error)
        swalError2(this.$swal, 'Error', 'Failed to generate print document')
      }
    },

    exportToExcel() {
      try {
        const exportData = this.filteredOrderHeaderList.map((item, index) => {
          // 1. Resolve Payment Method & Name
          let paymentDisplay = ''
          if (this.isMultiPayment(item)) {
            const payMethods = (item.payments || []).map((p) => {
              const name =
                p.paymentMethod?.payment_name ||
                p.payment_name ||
                this.findAllPayment?.find((fp) => fp.id === p.paymentId || fp.id === p.payment_id)?.payment_name ||
                p.paymentMethod?.payment_code ||
                p.payment_code ||
                'Payment'
              return `${name} (${this.numberWithCommas(p.amount)})`
            }).join(', ')
            paymentDisplay = `ຫຼາຍວິທີ: ${payMethods}`
          } else {
            paymentDisplay =
              item.payment?.payment_name ||
              item.payments?.[0]?.paymentMethod?.payment_name ||
              item.payments?.[0]?.payment_name ||
              (item.paymentId && this.findAllPayment?.find((p) => p.id === item.paymentId)?.payment_name) ||
              item.payment?.payment_code ||
              'N/A'
          }

          // 2. Resolve Client Name & Phone
          const clientName = item.client?.name || item.dynamic_customer?.name || 'Walk-in Customer'
          const clientTel = item.client?.telephone || item.dynamic_customer?.telephone || ''

          // 3. Resolve Cashier / User
          const cashierName = item.user?.cus_name || item.user?.name || item.userId || '-'

          // 4. Resolve Currency & Rate
          const currencyCode =
            item.currency?.code ||
            this.findAllCurrency?.find((c) => c.id === item.currencyId)?.code ||
            this.localCurrency?.code ||
            'LAK'
          const rate = item.exchangeRate || 1

          // 5. Calculations
          const subtotal = Number(item.total || 0) + Number(item.discount || 0)
          const discount = Number(item.discount || 0)
          const grandTotalLocal = this.calculateHeaderTotalLocal(item)

          return {
            'ລຳດັບ (No.)': index + 1,
            'ເລກທີບິນ (Ticket ID)': item.id,
            'ເລກອ້າງອີງ (Ref No)': item.referenceNo || '-',
            'ວັນທີ (Date)': item.bookingDate || '',
            'ເວລາ (Time)': this.getLocalDate(item.createdAt),
            'ລູກຄ້າ (Customer)': clientName,
            'ເບີໂທ (Tel)': clientTel || '-',
            'ວິທີຊຳລະ (Payment Method)': paymentDisplay,
            'ສະກຸນເງິນ (Currency)': currencyCode,
            'ອັດຕາແລກປ່ຽນ (Rate)': rate,
            'ລາຄາເຕັມ (Subtotal)': subtotal,
            'ສ່ວນຫຼຸດ (Discount)': discount,
            'ລວມສຸດທິ (Net Local)': grandTotalLocal,
            'ສະກຸນເງິນທ້ອງຖິ່ນ': this.localCurrency?.code || 'LAK',
            'ຜູ້ລົງທຸລະກຳ (Cashier)': cashierName,
            'ໝາຍເຫດ (Remark)': item.remark || '',
          }
        })

        const worksheet = this.$xlsx.utils.json_to_sheet(exportData)
        const workbook = this.$xlsx.utils.book_new()
        this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'POS Sales Orders')
        const filename = `pos_orders_${this.fromDate}_to_${this.toDate}.xlsx`
        this.$xlsx.writeFile(workbook, filename)
        if (this.$toast) {
          this.$toast.success('Excel exported successfully!')
        }
      } catch (error) {
        console.error('Export to Excel error:', error)
        swalError2(this.$swal, 'Error', 'Failed to export to Excel: ' + error.message)
      }
    },

    createSale() {
      this.componentKey += 1
      this.selectedOrder = 0
      this.viewTransaction = false
      this.dialogOrderDetail = true
    },

    countDay(startDate) {
      return dayCount(startDate)
    },

    dueDate(startDate, day) {
      console.log('DATE ', startDate, ' to ', day)
      return getNextDate(startDate, day)
    },

    numberWithCommas(value) {
      return (value || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

    whatsappLink(item) {
      if (!item.client || !item.client.telephone) {
        console.warn(
          'No client or telephone number available for WhatsApp link'
        )
        return
      }

      const tel = item.client.telephone.trim()
      const completeTel = tel.substring(tel.length - 8)
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent(
        'ສະບາຍດີ ລູກຄ້າ '
      )}`
    },

    getClientName(item) {
      return item.client ? item.client.name : 'Walk-in Customer'
    },

    getClientId(item) {
      return item.client ? item.client.id : 'N/A'
    },

    getClientTelephone(item) {
      return item.client ? item.client.telephone : null
    },

    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },

    editItem(item) {
      this.componentKey += 1
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail
    },

    viewItem(item) {
      this.componentKey += 1
      this.viewTransaction = true
      this.selectedOrder = item.id
      this.dialogOrderDetail = true
    },

    cancelItem(payload) {
      console.log('Order id', payload.orderId)
      this.componentCancelFormKey += 1
      this.OrderIdSelected = payload.orderId
      this.cancelForm = true
    },

    handleEvent() {
      this.dialogOrderDetail = false
    },

    async loadData() {
      this.isloading = true
      const date = {
        startDate: this.fromDate,
        endDate: this.toDate,
        userId: this.userId,
      }
      let apiLine = 'api/sale/findByDate'
      if (date.userId) {
        apiLine = 'api/sale/findByDateAndUser'
      }
      await this.$axios
        .get(apiLine, { params: { date } })
        .then((res) => {
          this.orderHeaderList = res.data.sort((a, b) => b.id - a.id)
          console.log('====> ' + this.orderHeaderList.length)
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
      this.isloading = false
    },

    formatDate(date) {
      if (!date) return null
      console.log('DATE FORMAT METHOD1: ' + date)
      const formattedDate = this.formatDateToISO(date)
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      console.log('DATE PARSE METHOD1: ' + date)
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date)
      const year = date.getFullYear()
      const month = `${date.getMonth() + 1}`.padStart(2, '0')
      const day = `${date.getDate()}`.padStart(2, '0')
      return `${year}-${month}-${day}`
    },
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}

/* Payment Summary Cards Styling */
.payment-summary-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.payment-summary-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

.payment-summary-card.selected-payment {
  border: 3px solid #1976d2 !important;
  box-shadow: 0 0 0 1px rgba(25, 118, 210, 0.3);
}

/* Enhanced card aesthetics */
.payment-summary-card .v-icon {
  margin-bottom: 8px;
}

.payment-summary-card h3 {
  font-weight: 600;
  letter-spacing: -0.5px;
}

.payment-summary-card .v-progress-linear {
  border-radius: 4px;
}

/* Filter alert styling */
.v-alert--dense {
  border-radius: 8px;
}

/* Responsive design improvements */
@media (max-width: 600px) {
  .payment-summary-card {
    margin-bottom: 16px;
  }

  .payment-summary-card h3 {
    font-size: 1.2rem;
  }
}
</style>