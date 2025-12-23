<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການບິນຂາຍ</h3>
      </v-chip>
      <!-- <v-spacer></v-spacer> -->
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
        @reload="
          loadData()
          dialogOrderDetail = false
        "
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
        @reload=";(cancelForm = false), loadData()"
      ></cancel-ticket-form>
    </v-dialog>

    <!-- NEW: Payment Details Dialog -->
    <v-dialog v-model="paymentDetailsDialog" max-width="800">
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left>mdi-credit-card-multiple</v-icon>
          ລາຍລະອຽດການຊຳລະ - ບິນເລກທີ {{ selectedOrderForPayments?.id }}
        </v-card-title>
        <v-card-text class="pa-4" v-if="selectedOrderForPayments">
          <v-row>
            <v-col cols="6">
              <v-card outlined class="pa-3">
                <h4>ຂໍ້ມູນພື້ນຖານ</h4>
                <div><strong>ຍອດລວມ:</strong> {{ formatNumber(selectedOrderForPayments.total) }} LAK</div>
                <div><strong>ສ່ວນຫລຸດ:</strong> {{ formatNumber(selectedOrderForPayments.discount) }} LAK</div>
                <div><strong>ຈຳນວນຊຳລະ:</strong> {{ formatNumber(selectedOrderForPayments.total - selectedOrderForPayments.discount) }} LAK</div>
                <div><strong>ລູກຄ້າ:</strong> {{ selectedOrderForPayments.client?.name }}</div>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card outlined class="pa-3">
                <h4>ປະເພດການຊຳລະ</h4>
                <v-chip :color="getPaymentTypeColor(selectedOrderForPayments)" small>
                  {{ getPaymentTypeLabel(selectedOrderForPayments) }}
                </v-chip>
                <div class="mt-2">
                  <strong>ຈຳນວນວິທີການຊຳລະ:</strong> {{ getPaymentMethodsCount(selectedOrderForPayments) }}
                </div>
              </v-card>
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>

          <!-- Payment Methods Details -->
          <h4 class="mb-3">ລາຍລະອຽດການຊຳລະ</h4>
          <v-data-table
            :headers="paymentDetailsHeaders"
            :items="getPaymentDetails(selectedOrderForPayments)"
            hide-default-footer
            disable-pagination
            class="elevation-1"
          >
            <template v-slot:[`item.paymentMethod`]="{ item }">
              <v-chip :color="getPaymentMethodColor(item.code)" small dark>
                <v-icon left small>{{ getPaymentMethodIcon(item.code) }}</v-icon>
                {{ item.name }}
              </v-chip>
            </template>
            <template v-slot:[`item.amount`]="{ item }">
              <strong>{{ formatNumber(item.amount) }} LAK</strong>
            </template>
            <template v-slot:[`item.percentage`]="{ item }">
              <v-progress-linear
                :value="item.percentage"
                height="20"
                :color="getPaymentMethodColor(item.code)"
                class="my-1"
              >
                <small>{{ item.percentage.toFixed(1) }}%</small>
              </v-progress-linear>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="paymentDetailsDialog = false">
            ປິດ
          </v-btn>
          <v-btn color="primary" @click="printPaymentDetails" v-if="selectedOrderForPayments">
            <v-icon left>mdi-printer</v-icon>
            ພິມລາຍລະອຽດ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div>
      <v-card>
        <v-card-title>
          <v-layout row wrap>
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
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="ຊອກຫາ"
                single-line
                hide-detailsx
              />
              <v-text-field
                v-model="userId"
                append-icon="mdi-magnify"
                label="ລະຫັດຜູ້ຂາຍ"
                single-line
                hide-detailsx
              />
              <v-autocomplete
                item-text="name"
                item-value="id"
                :items="customTerminalList"
                label="ເລືອກຕາມ ຮ້ານ*"
                v-model="terminalId"
              ></v-autocomplete>
              <!-- current LocationId :{{ customTerminalList }} -->
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
          <v-layout row wrap>
            <v-row>
              <v-col cols="6" lg="6">
                <order-sumary-card-pos
                  :showTotal="true"
                  :gross="
                    getFormatNum(
                      totalSaleRaw - +this.unpaidCodOrder.saleRawNumber
                    )
                  "
                  :orderDetail="{
                    title: 'ຍອດບິນ',
                    amount: getFormatNum(activeOrderHeaderList.length),
                    sale: getFormatNum(totalSale),
                    // 'discount': getFormatNum(totalDiscount),
                    // 'gross': getFormatNum(totalSale.replaceAll(',', '') - totalDiscount.replaceAll(',', ''))
                    // 'gross': getFormatNum(totalSale - totalDiscount)
                  }"
                >
                </order-sumary-card-pos>
              </v-col>
              
              <!-- NEW: Payment Summary Cards -->
              <v-col cols="6" lg="6">
                <v-row>
                  <v-col cols="6">
                    <v-card outlined class="pa-3 text-center">
                      <h4 class="primary--text">{{ singlePaymentCount }}</h4>
                      <div class="text-caption">ຊຳລະແບບດຽວ</div>
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card outlined class="pa-3 text-center">
                      <h4 class="success--text">{{ multiPaymentCount }}</h4>
                      <div class="text-caption">ຊຳລະຫຼາຍວິທີ</div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-layout>
        </v-card-text>

        <!-- <v-divider></v-divider> -->

        <v-data-table
          v-if="activeOrderHeaderList"
          :headers="headers"
          :search="search"
          :items="activeOrderHeaderList"
        >
          <!-- FIXED: Added null check for item.client -->
          <template v-slot:[`item.bookingDate`]="{ item }">
            {{ item.bookingDate.split('T')[0] }}
            <!-- <v-chip class="ma-2" color="red" text-color="white"> -->
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
            <!-- </v-chip> -->
          </template>

          <!-- FIXED: Added null check for item.client -->
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
            <!-- <v-chip class="ma-2" :color="item.dynamic_customer ? 'green' : 'red'" text-color="black">
            {{ item.dynamic_customer ? item.dynamic_customer.name : '' }}
          </v-chip> -->
            <v-avatar
              :color="item.dynamic_customer ? 'green' : 'red'"
              size="10"
            >
              <!-- {{ item.dynamic_customer ? item.dynamic_customer.name : '' }} -->
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
                <v-icon left small>mdi-credit-card-multiple</v-icon>
                {{ getLocalDate(item.createdAt) }}
              </v-chip>
          </template>

          <template v-slot:[`item.id`]="{ item }">
            <v-btn
              color="primary"
              text
              @click="
                viewItem(item)
                wallet = true
              "
            >
              <i class="fa-regular fa-pen-to-square"></i>
            </v-btn>
          </template>

          <template v-slot:[`item.cancel`]="{ item }">
            <v-btn
              color="blue darken-1"
              text
              @click="
                cancelItem(item)
                wallet = true
              "
            >
              <i class="fas fa-sync"></i>
            </v-btn>
          </template>


          <!-- ENHANCED: Payment Method Display -->
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

          <!-- NEW: Payment Details Column -->
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

          <!-- FIXED: Added null check for client.telephone -->
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
            <!-- TODO: TICKET PRINT -->
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
import { hostName, mainCompanyInfo, preloadCompanyData } from '~/common/api'
import { defaultTicketReprint, customerTicket } from '~/common/ticket.js'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: { OrderDetailPos, OrderSumaryCardPos, OrderDetailPosCRUD },
  middleware: 'auths',
  data() {
    return {
      terminalId: 999, //LocationId to filter sale base on current location selected
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
      
      // NEW: Payment Details Dialog
      paymentDetailsDialog: false,
      selectedOrderForPayments: null,
      
      headers: [
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'bookingDate',
          sortable: true,
        },
        {
          text: 'ID ລູກຄ້າ',
          align: 'center',
          value: 'client.id',
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
          value: 'cusTel', // Changed from 'client.telephone' to custom value
          sortable: false, // Changed to false since we're using custom template
        },
        {
          text: 'ຊຳລະດ້ວຍ',
          align: 'center',
          value: 'payment.payment_code',
          sortable: true,
        },
        {
          text: 'ລາຍລະອຽດການຊຳລະ', // NEW COLUMN
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
      
      // NEW: Payment Details Table Headers
      paymentDetailsHeaders: [
        {
          text: 'ວິທີການຊຳລະ',
          align: 'left',
          value: 'paymentMethod',
          sortable: false,
        },
        {
          text: 'ຈຳນວນເງິນ',
          align: 'right',
          value: 'amount',
          sortable: false,
        },
        {
          text: 'ເປີເຊັນ',
          align: 'center',
          value: 'percentage',
          sortable: false,
        },
        {
          text: 'ເວລາຊຳລະ',
          align: 'center',
          value: 'createdAt',
          sortable: false,
        },
      ],
      
      fromDate: getFirstDayOfMonth(),
      toDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      fromDateLabel: this.formatDate(getFirstDayOfMonth()),
      toDateLabel: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }
  },

  async created() {
    this.terminalId = this.findSelectedTerminal
    console.log(`Current terminal select ${this.findSelectedTerminal}`)
    
    // ENHANCED: Preload company data for API logos
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
    // ENHANCED: Company data with API integration
    companyData() {
      console.log(`**********ENHANCED COMPANY DATA**********`)
      const company = mainCompanyInfo()
      console.log('Company info:', company)
      return company
    },

    // ENHANCED: Company logo with API priority and smart fallbacks
    companyLogo() {
      const company = this.companyData

      // 1. Try API logo first (highest priority)
      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || ''
        const logoUrl = `${baseUrl}/${company.apiData.profile_image_path}`
        console.log('Using API logo:', logoUrl)
        return logoUrl
      }

      // 2. Try static logo from company data
      if (company.ticketLogo) {
        try {
          const staticLogo = require(`~/assets/image/${company.ticketLogo}`)
          console.log('Using static logo:', company.ticketLogo)
          return staticLogo
        } catch (error) {
          console.warn('Static logo not found:', company.ticketLogo, error)
        }
      }

      // 3. Try dcLogo fallback
      if (company.dcLogo) {
        try {
          const fallbackLogo = require(`~/assets/image/${company.dcLogo}`)
          console.log('Using dcLogo fallback:', company.dcLogo)
          return fallbackLogo
        } catch (error) {
          console.warn('dcLogo not found:', company.dcLogo, error)
        }
      }

      // 4. Final fallback
      console.log('Using final fallback logo')
      return '/static/images/default-logo.png'
    },

    ticketCommon() {
      return ticketHtml()
    },

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

    // NEW: Payment Statistics
    singlePaymentCount() {
      return this.activeOrderHeaderList.filter(item => !this.isMultiPayment(item)).length
    },

    multiPaymentCount() {
      return this.activeOrderHeaderList.filter(item => this.isMultiPayment(item)).length
    },

    computedDateFormatted() {
      return this.formatDate(this.fromDate)
    },

    totalSale() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += el.total
      })
      return total
    },

    totalSaleRaw() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        console.log('====>', el.cartTotal)
        total += parseInt(el.cartTotal)
      })
      console.log('Price total: ' + total)
      return total
    },

    totalDiscount() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
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
    getLocalDate,
    // NEW: Multi-Payment Detection and Handling Methods
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

    getPaymentTypeLabel(item) {
      if (this.isMultiPayment(item)) {
        return `ຊຳລະຫຼາຍວິທີ (${item.payments.length} ວິທີ)`
      } else if (item.payment) {
        return 'ຊຳລະແບບດຽວ'
      }
      return 'ບໍ່ມີຂໍ້ມູນ'
    },

    getPaymentTypeColor(item) {
      if (this.isMultiPayment(item)) {
        return 'success'
      } else if (item.payment) {
        return 'primary'
      }
      return 'grey'
    },

    getPaymentDetails(item) {
      const details = []
      const totalAmount = item.total - item.discount

      if (this.isMultiPayment(item)) {
        // Multi-payment transaction
        item.payments.forEach(payment => {
          const percentage = (payment.amount / totalAmount) * 100
          details.push({
            code: payment.paymentMethod?.payment_code || 'UNKNOWN',
            name: payment.paymentMethod?.payment_name || 'Unknown',
            amount: payment.amount,
            percentage: percentage,
            createdAt: payment.createdAt ? payment.createdAt.split('.')[0] : 'N/A'
          })
        })
      } else if (item.payment) {
        // Single payment transaction
        details.push({
          code: item.payment.payment_code,
          name: item.payment.payment_name,
          amount: totalAmount,
          percentage: 100,
          createdAt: item.createdAt ? item.createdAt.split('.')[0] : 'N/A'
        })
      }

      return details
    },

    getPaymentMethodColor(paymentCode) {
      const colorMap = {
        'CASH': 'green',
        'QR SCAN': 'purple',
        'TRANSFER_BCEL': 'blue',
        'COD': 'orange',
        'CREDIT': 'red',
        'CARD': 'indigo'
      }
      return colorMap[paymentCode] || 'grey'
    },

    getPaymentMethodIcon(paymentCode) {
      const iconMap = {
        'CASH': 'mdi-cash',
        'QR SCAN': 'mdi-qrcode',
        'TRANSFER_BCEL': 'mdi-bank-transfer',
        'COD': 'mdi-truck-delivery',
        'CREDIT': 'mdi-credit-card-outline',
        'CARD': 'mdi-credit-card'
      }
      return iconMap[paymentCode] || 'mdi-help-circle'
    },

    showPaymentDetails(item) {
      this.selectedOrderForPayments = item
      this.paymentDetailsDialog = true
    },

    printPaymentDetails() {
      if (!this.selectedOrderForPayments) return
      
      const item = this.selectedOrderForPayments
      const paymentDetails = this.getPaymentDetails(item)
      
      let paymentListHtml = ''
      paymentDetails.forEach(payment => {
        paymentListHtml += `
          <tr>
            <td>${payment.name}</td>
            <td style="text-align: right">${this.formatNumber(payment.amount)} LAK</td>
            <td style="text-align: center">${payment.percentage.toFixed(1)}%</td>
          </tr>
        `
      })

      const windowContent = `
        ${this.ticketCommon.header}
        <body>
          <div style="text-align: center;">
            <img src="${this.companyLogo}" alt="Company Logo" width="100" height="100" style="max-width: 100px; max-height: 100px; object-fit: contain;">
          </div>
          <h3 style="text-align: center">ລາຍລະອຽດການຊຳລະ</h3>
          <hr>
          <h5>ເລກບິນ: ${item.id}</h5>
          <h5>ວັນທີ: ${item.bookingDate}</h5>
          <h5>ລູກຄ້າ: ${item.client?.name}</h5>
          <h5>ຍອດລວມ: ${this.formatNumber(item.total)} LAK</h5>
          <h5>ສ່ວນຫລຸດ: ${this.formatNumber(item.discount)} LAK</h5>
          <h5>ຈຳນວນຊຳລະ: ${this.formatNumber(item.total - item.discount)} LAK</h5>
          <hr>
          <h4>ວິທີການຊຳລະ:</h4>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid #000;">
                <th style="text-align: left; padding: 8px;">ວິທີການ</th>
                <th style="text-align: right; padding: 8px;">ຈຳນວນ</th>
                <th style="text-align: center; padding: 8px;">ເປີເຊັນ</th>
              </tr>
            </thead>
            <tbody>
              ${paymentListHtml}
            </tbody>
          </table>
          <hr>
          <h3 style="text-align: center; margin-top: 30px;">THANK YOU</h3>
        </body>
        </html>
      `

      const printWin = window.open('', '', 'width=800,height=600')
      printWin.document.open()
      printWin.document.write(windowContent)
      printWin.document.close()

      setTimeout(() => {
        printWin.print()
        printWin.close()
      }, 1000)
    },

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
          // console.log('Data: ' + er)
          swalError2(this.$swal, 'Error', er)
        })
      this.isloading = false
    },

    // ENHANCED: Print ticket with API logo support and multi-payment details
    printDefaultTicket(data) {
      console.info(`PRINTING TICKET WITH DATA: ${JSON.stringify(data)}`)
      
      // Determine the payment method to show on ticket
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
        companyLogo: this.companyLogo, // This now includes API logos automatically
        lastTransactionSaleHeaderId: data.id,
        currentTerminal: this.currentTerminal,
        user: this.user,
        ticketCommon: this.ticketCommon,
        currentPaymentCode: paymentCode,
        cashReceived: data.total,
        changes: 0,
        bookingDate: data.createdAt,
        axios: this.$axios, // Enable API logo loading in enhanced ticket
        companyData: this.companyData // Provide company data for fallback
      })
    },

    exportToExcel() {
      const worksheet = this.$xlsx.utils.json_to_sheet(
        this.activeOrderHeaderList
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
      // FIXED: Added null checks for client and telephone
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

    // Add helper method to get client name safely
    getClientName(item) {
      return item.client ? item.client.name : 'Walk-in Customer'
    },

    // Add helper method to get client ID safely
    getClientId(item) {
      return item.client ? item.client.id : 'N/A'
    },

    // Add helper method to get client telephone safely
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
      // this.orderLockingSessionId = payload.lockingSessionId;
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
          // ****** Clear Old Data
          this.orderHeaderList = []
          for (const iterator of res.data) {
            // if(!iterator['dynamic_customer']){
            //   iterator.dynamic_customer = null;
            // }
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
      const month = `${date.getMonth() + 1}`.padStart(2, '0') // Months are 0-indexed
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

/* Enhanced Payment Details Styling */
.payment-details-dialog .v-data-table th {
  background-color: #f5f5f5 !important;
  font-weight: 600;
}

.payment-method-chip {
  cursor: pointer;
  transition: all 0.2s ease;
}

.payment-method-chip:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>