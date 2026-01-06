<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການບິນຂາຍ</h3>
      </v-chip>
      <v-chip
        class="pa-5"
        color="primary"
        label
        text-color="white"
        @click="guidelineDialog = true"
      >
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <!-- Dialogs -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player
        @close-dialog="guidelineDialog = false"
        youtube-link="W6KiQWtiqBM"
      >
      </youtube-player>
    </v-dialog>
    
    <v-dialog v-model="dialogOrderDetail" fullscreen>
      <OrderDetailPosCRUD
        @reload="loadData(); dialogOrderDetail = false"
        :is-quotation="false"
        :key="componentKey"
        :is-update="viewTransaction"
        :headerId="selectedOrder"
        @close-dialog="dialogOrderDetail = false"
      >
      </OrderDetailPosCRUD>
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form
        :id="OrderIdSelected"
        :key="componentCancelFormKey"
        @close-dialog="cancelForm = false"
        @reload="cancelForm = false; loadData()"
      ></cancel-ticket-form>
    </v-dialog>

    <!-- ENHANCED: Use the new reusable TicketDetailsDialog component -->
    <ticket-details-dialog
      v-model="paymentDetailsDialog"
      :ticket-data="selectedOrderForPayments"
      :company-logo="companyLogo"
      :ticket-common="ticketCommon"
      :show-print-button="true"
      @close="onTicketDialogClose"
      @print-ticket="onPrintTicket"
      @print-payment-details="onPrintPaymentDetails"
    />

    <!-- Main Content -->
    <div>
      <v-card>
        <v-card-title>
          <v-layout row wrap>
            <v-col cols="6">
              <!-- Date Filters -->
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <v-date-picker
                  v-model="fromDate"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker>
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
                  ></v-text-field>
                </template>
              </v-menu>

              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <v-date-picker
                  v-model="toDate"
                  no-title
                  @input="menu2 = false"
                ></v-date-picker>
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
                  ></v-text-field>
                </template>
              </v-menu>
            </v-col>
            
            <v-col cols="6">
              <!-- Search and Filters -->
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="ຊອກຫາ"
                single-line
                hide-details
              />
              <v-text-field
                v-model="userId"
                append-icon="mdi-magnify"
                label="ລະຫັດຜູ້ຂາຍ"
                single-line
                hide-details
              />

              <!-- Payment Type Filter -->
              <v-select
                v-model="selectedPaymentFilter"
                :items="paymentFilterOptions"
                item-text="label"
                item-value="value"
                label="ຟິລເຕີປະເພດການຊຳລະ"
                clearable
                prepend-icon="mdi-filter"
                @change="applyPaymentFilter"
              ></v-select>

              <v-autocomplete
                item-text="name"
                item-value="id"
                :items="customTerminalList"
                label="ເລືອກຕາມ ຮ້ານ*"
                v-model="terminalId"
              ></v-autocomplete>
            </v-col>
            
            <v-col cols="6" class="text-left">
              <v-btn
                size="large"
                variant="outlined"
                @click="createSale"
                class="primary"
                rounded
              >
                <span class="mdi mdi-plus"></span>Create
              </v-btn>
              <v-btn
                size="large"
                variant="outlined"
                @click="exportToExcel"
                class="primary"
                rounded
              >
                <span class="mdi mdi-microsoft-excel"></span>Generate excel file
              </v-btn>
              <!-- NEW: Print Sales Report Button -->
              <v-btn
                size="large"
                variant="outlined"
                @click="printSalesReport"
                class="success"
                rounded
                :disabled="isloading || filteredOrderHeaderList.length === 0"
              >
                <span class="mdi mdi-printer"></span>Print Report
              </v-btn>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn
                size="large"
                variant="outlined"
                @click="loadData"
                class="primary"
                rounded
              >
                <span class="mdi mdi-cloud-download"></span>
                ດຶງລາຍງານ
              </v-btn>
            </v-col>
          </v-layout>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <!-- Payment Type Summary Cards -->
          <v-row class="mb-4">
            <v-col cols="12">
              <h3 class="mb-3">
                <v-icon left>mdi-chart-pie</v-icon>
                ສະຫຼຸບຕາມປະເພດການຊຳລະ
              </h3>
            </v-col>
          </v-row>

          <v-row>
            <!-- Total Sales Card -->
            <v-col cols="6" lg="3">
              <order-sumary-card-pos
                :showTotal="true"
                :gross="getFormatNum(totalSaleRaw - +this.unpaidCodOrder.saleRawNumber)"
                :orderDetail="{
                  title: 'ຍອດບິນທັງໝົດ',
                  amount: getFormatNum(filteredOrderHeaderList.length),
                  sale: getFormatNum(totalSale),
                }"
              >
              </order-sumary-card-pos>
            </v-col>

            <!-- Payment Type Summary Cards -->
            <v-col cols="6" lg="9">
              <v-row>
                <v-col 
                  v-for="paymentStat in paymentStatistics" 
                  :key="paymentStat.code"
                  cols="6" 
                  md="4" 
                  lg="3"
                >
                  <v-card 
                    outlined 
                    class="payment-summary-card pa-3 text-center elevation-2"
                    :class="{ 'selected-payment': selectedPaymentFilter === paymentStat.code }"
                    @click="filterByPaymentType(paymentStat.code)"
                    style="cursor: pointer; transition: all 0.2s ease;"
                  >
                    <v-icon 
                      :color="paymentStat.color" 
                      size="32" 
                      class="mb-2"
                    >
                      {{ paymentStat.icon }}
                    </v-icon>
                    
                    <h3 :class="`${paymentStat.color}--text mb-1`">
                      {{ formatNumber(paymentStat.amount) }} LAK
                    </h3>
                    
                    <div class=" text--secondary mb-1">
                      {{ paymentStat.name }}
                    </div>
                    
                    <v-chip 
                      :color="paymentStat.color" 
                      small 
                      outlined
                      class="font-weight-bold"
                    >
                      {{ paymentStat.count }} ລາຍການ
                    </v-chip>
                    
                    <div class="mt-2">
                      <v-progress-linear
                        :value="paymentStat.percentage"
                        :color="paymentStat.color"
                        height="4"
                        rounded
                      ></v-progress-linear>
                      <div class=" mt-1">
                        {{ paymentStat.percentage.toFixed(1) }}% ຂອງຍອດລວມ
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

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
                      <v-progress-circular
                        :value="singlePaymentPercentage"
                        color="primary"
                        size="60"
                        width="4"
                      >
                        <small>{{ singlePaymentPercentage.toFixed(0) }}%</small>
                      </v-progress-circular>
                    </div>
                  </v-col>
                  
                  <v-col cols="6" md="3">
                    <div class="text-center">
                      <h2 class="success--text">{{ multiPaymentCount }}</h2>
                      <div class="">ຊຳລະຫຼາຍວິທີ</div>
                      <v-progress-circular
                        :value="multiPaymentPercentage"
                        color="success"
                        size="60"
                        width="4"
                      >
                        <small>{{ multiPaymentPercentage.toFixed(0) }}%</small>
                      </v-progress-circular>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <div class="d-flex justify-center align-center">
                      <v-btn
                        outlined
                        color="primary"
                        @click="filterByPaymentType('SINGLE')"
                        class="mr-2"
                        :class="{ 'primary white--text': selectedPaymentFilter === 'SINGLE' }"
                      >
                        <v-icon left>mdi-credit-card</v-icon>
                        ສະແດງແຕ່ການຊຳລະດຽວ
                      </v-btn>
                      
                      <v-btn
                        outlined
                        color="success"
                        @click="filterByPaymentType('MULTI')"
                        class="mr-2"
                        :class="{ 'success white--text': selectedPaymentFilter === 'MULTI' }"
                      >
                        <v-icon left>mdi-credit-card-multiple</v-icon>
                        ສະແດງການຊຳລະຫຼາຍວິທີ
                      </v-btn>

                      <v-btn
                        outlined
                        color="grey"
                        @click="clearPaymentFilter"
                      >
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
        <v-data-table
          v-if="filteredOrderHeaderList"
          :headers="headers"
          :search="search"
          :items="filteredOrderHeaderList"
          :loading="isloading"
          loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
          class="elevation-1"
        >
          <template v-slot:top>
            <div class="pa-3" v-if="selectedPaymentFilter">
              <v-alert 
                :type="selectedPaymentFilter === 'MULTI' ? 'success' : 'info'" 
                dense 
                text 
                dismissible
                @input="clearPaymentFilter"
              >
                <v-icon left>mdi-filter</v-icon>
                ກຳລັງສະແດງ: {{ getFilterDisplayName(selectedPaymentFilter) }}
                ({{ filteredOrderHeaderList.length }} ລາຍການ)
              </v-alert>
            </div>
          </template>

          <!-- Table templates remain the same -->
          <template v-slot:[`item.bookingDate`]="{ item }">
            {{ item.bookingDate.split('T')[0] }}
            <h6
              :style="{
                color:
                  item.client &&
                  countDay(item.bookingDate.split('T')[0]) > item.client.credit
                    ? 'red'
                    : 'green',
              }"
            >
              {{ countDay(item.bookingDate.split('T')[0]) }}
            </h6>
          </template>

          <template v-slot:[`item.client.credit`]="{ item }">
            <template v-if="item.client">
              <v-chip
                v-if="
                  new Date(
                    dueDate(item.bookingDate, item.client.credit)
                      .toISOString()
                      .split('T')[0]
                  ) < new Date()
                "
                class="ma-2"
                color="red"
                text-color="white"
              >
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
            <v-avatar
              :color="item.dynamic_customer ? 'green' : 'red'"
              size="10"
            >
            </v-avatar>
          </template>

          <template v-slot:[`item.discount`]="{ item }">
            {{ numberWithCommas(item.discount) }}
          </template>

          <template v-slot:[`item.total`]="{ item }">
            {{ numberWithCommas(item.total + item.discount) }}
          </template>

          <template v-slot:[`item.grandTotal`]="{ item }">
            {{ numberWithCommas(item.total) }}
          </template>

          <template v-slot:[`item.createdAt`]="{ item }">
             <v-chip 
                color="success" 
                small 
                dark 
                style="cursor: pointer"
              >
                <v-icon left small>mdi-clock</v-icon>
                {{ getLocalDate(item.createdAt) }}
              </v-chip>
          </template>
          <template v-slot:[`item.ticketId`]="{ item }">
             <v-chip 
                color="success" 
                small 
                dark 
                style="cursor: pointer"
              >
                <v-icon left small>mdi-ticket</v-icon>
                {{ item.id }}
              </v-chip>
          </template>

          <template v-slot:[`item.id`]="{ item }">
            <v-btn
              color="primary"
              text
              @click="viewItem(item); wallet = true"
            >
              <i class="fa-regular fa-pen-to-square"></i>
            </v-btn>
          </template>

          <template v-slot:[`item.cancel`]="{ item }">
            <v-btn
              color="blue darken-1"
              text
              @click="cancelItem(item); wallet = true"
            >
              <i class="fas fa-sync"></i>
            </v-btn>
          </template>

          <template v-slot:[`item.payment.payment_code`]="{ item }">
            <div v-if="isMultiPayment(item)">
              <v-chip 
                color="success" 
                small 
                dark 
                @click="showPaymentDetails(item)"
                style="cursor: pointer"
              >
                <v-icon left small>mdi-credit-card-multiple</v-icon>
                ຫຼາຍວິທີ ({{ getPaymentMethodsCount(item) }})
              </v-chip>
            </div>
            <div v-else>
              <v-chip 
                :color="getPaymentMethodColor(item.payment?.payment_code)" 
                small 
                dark
              >
                <v-icon left small>{{ getPaymentMethodIcon(item.payment?.payment_code) }}</v-icon>
                {{ item.payment?.payment_name || 'N/A' }}
              </v-chip>
            </div>
          </template>

          <template v-slot:[`item.paymentDetails`]="{ item }">
            <v-btn 
              color="info" 
              text 
              small
              @click="showPaymentDetails(item)"
              :disabled="!hasPaymentDetails(item)"
            >
              <v-icon small>mdi-eye</v-icon>
              ລາຍລະອຽດ
            </v-btn>
          </template>

          <template v-slot:[`item.cusTel`]="{ item }">
            <v-btn
              v-if="item.client && item.client.telephone"
              color="blue darken-1"
              text
              @click="whatsappLink(item)"
            >
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
import { hostName, mainCompanyInfo, preloadCompanyData } from '~/common/api'

import { defaultTicketReprint, customerTicket } from '~/common/ticket.js'
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
    TicketDetailsDialog  // ADDED: Register the new component
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
    // All your existing computed properties remain the same...
    companyData() {
      console.log(`**********ENHANCED COMPANY DATA**********`)
      const company = mainCompanyInfo()
      console.log('Company info:', company)
      return company
    },

    companyLogo() {
      const company = this.companyData

      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || ''
        const logoUrl = `${baseUrl}/${company.apiData.profile_image_path}`
        console.log('Using API logo:', logoUrl)
        return logoUrl
      }

      if (company.ticketLogo) {
        try {
          const staticLogo = require(`~/assets/image/${company.ticketLogo}`)
          console.log('Using static logo:', company.ticketLogo)
          return staticLogo
        } catch (error) {
          console.warn('Static logo not found:', company.ticketLogo, error)
        }
      }

      if (company.dcLogo) {
        try {
          const fallbackLogo = require(`~/assets/image/${company.dcLogo}`)
          console.log('Using dcLogo fallback:', company.dcLogo)
          return fallbackLogo
        } catch (error) {
          console.warn('dcLogo not found:', company.dcLogo, error)
        }
      }

      console.log('Using final fallback logo')
      return '/static/images/default-logo.png'
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
      'currentSelectedCustomer',
      'currentSelectedPayment',
      'findSelectedTerminal',
      'findAllTerminal',
      'findAllLocation',
      'findAllPayment'  // ADDED: Payment methods from store
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

      return this.activeOrderHeaderList.filter(item => {
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
              return item.payments.some(payment => 
                payment.paymentMethod?.payment_code === this.selectedPaymentFilter
              )
            } else {
              return item.payment?.payment_code === this.selectedPaymentFilter
            }
          default:
            return true
        }
      })
    },

    paymentStatistics() {
      const stats = {}
      let totalAmount = 0

      this.activeOrderHeaderList.forEach(item => {
        const itemTotal = item.total - item.discount

        if (this.isMultiPayment(item)) {
          item.payments.forEach(payment => {
            const code = payment.paymentMethod?.payment_code || 'UNKNOWN'
            if (!stats[code]) {
              stats[code] = {
                code: code,
                name: payment.paymentMethod?.payment_name || 'Unknown',
                amount: 0,
                count: 0,
                color: this.getPaymentMethodColor(code),
                icon: this.getPaymentMethodIcon(code)
              }
            }
            stats[code].amount += payment.amount
            stats[code].count += 1
            totalAmount += payment.amount
          })
        } else if (item.payment) {
          const code = item.payment.payment_code
          if (!stats[code]) {
            stats[code] = {
              code: code,
              name: item.payment.payment_name,
              amount: 0,
              count: 0,
              color: this.getPaymentMethodColor(code),
              icon: this.getPaymentMethodIcon(code)
            }
          }
          stats[code].amount += itemTotal
          stats[code].count += 1
          totalAmount += itemTotal
        }
      })

      Object.values(stats).forEach(stat => {
        stat.percentage = totalAmount > 0 ? (stat.amount / totalAmount) * 100 : 0
      })

      return Object.values(stats).sort((a, b) => b.amount - a.amount)
    },

    singlePaymentCount() {
      return this.activeOrderHeaderList.filter(item => !this.isMultiPayment(item)).length
    },

    multiPaymentCount() {
      return this.activeOrderHeaderList.filter(item => this.isMultiPayment(item)).length
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
        this.findAllPayment.forEach(payment => {
          if (payment.isActive) {
            options.push({
              label: payment.payment_name,
              value: payment.payment_code
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

    totalSale() {
      let total = 0
      this.filteredOrderHeaderList.forEach((el) => {
        total += el.total
      })
      return total
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
          element.payment.includes('COD')
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
    printSalesReport() {
    try {
      console.log('🖨️ Printing sales report summary...');
      
      // Prepare terminal info
      const terminalInfo = this.terminalId === 999 
        ? { name: 'ທັງໝົດ', id: 999 }
        : this.customTerminalList.find(terminal => terminal.id === this.terminalId);
      
      // Prepare company data
      const companyData = this.companyData?.apiData || this.companyData || {};
      
      // Call the print function
      printSalesReportSummary({
        orderHeaderList: this.activeOrderHeaderList,
        paymentStatistics: this.paymentStatistics,
        filteredOrderHeaderList: this.filteredOrderHeaderList,
        fromDate: this.fromDate,
        toDate: this.toDate,
        terminalInfo: terminalInfo,
        companyData: companyData,
        companyLogo: this.companyLogo,
        formatNumber: this.formatNumber,
        user: this.user,
        singlePaymentCount: this.singlePaymentCount,
        multiPaymentCount: this.multiPaymentCount
      });

      // Optional: Show success message
      if (this.$toast) {
        this.$toast.success('ລາຍງານການຂາຍກຳລັງພິມ...', {
          position: 'bottom-center'
        });
      }
      
    } catch (error) {
      console.error('Error printing sales report:', error);
      
      // Show error message
      if (this.$toast) {
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ', {
          position: 'bottom-center'
        });
      } else if (this.$swal) {
        this.$swal.fire({
          title: 'Error',
          text: 'ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ',
          icon: 'error'
        });
      }
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
      return this.findAllPayment.find(p => p.payment_code === paymentCode) || null
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
      const option = this.paymentFilterOptions.find(opt => opt.value === filterValue)
      return option ? option.label : filterValue
    },

    // Multi-Payment Detection and Handling Methods (remain the same)
    isMultiPayment(item) {
      return item.payments && Array.isArray(item.payments) && item.payments.length > 1
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
      const paymentMethod = this.findAllPayment.find(p => p.payment_code === paymentCode)
      
      if (paymentMethod) {
        // Generate color based on payment code for consistency
        const colorMap = {
          'CASH': 'green',
          'QR': 'purple',
          'TRANSFER': 'blue',
          'TRANSFER_BCEL': 'blue',
          'BCEL': 'blue',
          'COD': 'orange',
          'CREDIT': 'red',
          'CARD': 'indigo',
          'BANK': 'teal',
          'MOBILE': 'pink'
        }
        
        // Check if exact match exists
        if (colorMap[paymentCode]) {
          return colorMap[paymentCode]
        }
        
        // For other payment codes, generate color based on common keywords
        const code = paymentCode.toUpperCase()
        if (code.includes('CASH') || code.includes('MONEY')) return 'green'
        if (code.includes('QR') || code.includes('SCAN')) return 'purple'
        if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'blue'
        if (code.includes('CARD') || code.includes('CREDIT')) return 'indigo'
        if (code.includes('COD') || code.includes('DELIVERY')) return 'orange'
        if (code.includes('MOBILE') || code.includes('PHONE')) return 'pink'
        
        return 'primary'
      }
      
      return 'grey'
    },

    getPaymentMethodIcon(paymentCode) {
      // Try to find the payment method in store first
      const paymentMethod = this.findAllPayment.find(p => p.payment_code === paymentCode)
      
      if (paymentMethod) {
        const iconMap = {
          'CASH': 'mdi-cash',
          'QR': 'mdi-qrcode',
          'TRANSFER': 'mdi-bank-transfer',
          'TRANSFER_BCEL': 'mdi-bank-transfer',
          'BCEL': 'mdi-bank',
          'COD': 'mdi-truck-delivery',
          'CREDIT': 'mdi-credit-card-outline',
          'CARD': 'mdi-credit-card',
          'BANK': 'mdi-bank',
          'MOBILE': 'mdi-cellphone',
          'WALLET': 'mdi-wallet'
        }
        
        if (iconMap[paymentCode]) {
          return iconMap[paymentCode]
        }
        
        const code = paymentCode.toUpperCase()
        if (code.includes('CASH') || code.includes('MONEY')) return 'mdi-cash'
        if (code.includes('QR') || code.includes('SCAN')) return 'mdi-qrcode'
        if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'mdi-bank-transfer'
        if (code.includes('CARD') || code.includes('CREDIT')) return 'mdi-credit-card'
        if (code.includes('COD') || code.includes('DELIVERY')) return 'mdi-truck-delivery'
        if (code.includes('MOBILE') || code.includes('PHONE')) return 'mdi-cellphone'
        if (code.includes('WALLET')) return 'mdi-wallet'
        
        return 'mdi-cash-multiple'
      }
      
      return 'mdi-help-circle'
    },

    // SIMPLIFIED: Show payment details (now uses the component)
    showPaymentDetails(item) {
      this.selectedOrderForPayments = item
      this.paymentDetailsDialog = true
      console.info(`SELECTED TICKET DET: ${JSON.stringify(this.selectedOrderForPayments)}`)
    },

    // All your existing methods remain the same...
    currentShipping(shippingId) {
      const shipping = this.shippingList.find((el) => el.id == shippingId)
      if (shipping == undefined) return ''
      return shipping['name']
    },

    formatNumber(val) {
      return getFormatNum(val)
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
        .get('/api/currency/find')
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

    printDefaultTicket(data) {
      console.info(`PRINTING TICKET WITH DATA: ${JSON.stringify(data)}`)
      
      let paymentCode = 'UNKNOWN'
      if (this.isMultiPayment(data)) {
        paymentCode = 'MULTI-PAYMENT'
      } else if (data.payment) {
        paymentCode = data.payment.payment_code
      }

      defaultTicketReprint({
        productCart: data.lines,
        findAllProduct: this.findAllProduct,
        formatNumber: this.formatNumber,
        discount: data.discount,
        currencyList: this.currencyList,
        grandTotal: data.total,
        companyLogo: this.companyLogo,
        lastTransactionSaleHeaderId: data.id,
        currentTerminal: this.currentTerminal,
        user: this.user,
        ticketCommon: this.ticketCommon,
        currentPaymentCode: paymentCode,
        cashReceived: data.total,
        changes: 0,
        bookingDate: data.createdAt,
        axios: this.$axios,
        companyData: this.companyData
      })
    },

    exportToExcel() {
      const worksheet = this.$xlsx.utils.json_to_sheet(
        this.filteredOrderHeaderList
      )
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
      this.$xlsx.writeFile(workbook, 'data.xlsx')
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
      if (value === null || value === undefined) {
        return '0'
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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
          this.orderHeaderList = []
          for (const iterator of res.data) {
            this.orderHeaderList.push(iterator)
          }
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
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
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