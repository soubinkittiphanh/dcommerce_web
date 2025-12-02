<template>
  <div class="text-left">
    <v-chip class="pa-5" color="primary" label text-color="white">
      <v-icon start>mdi-label</v-icon>
      <h3>ລາຍການບິນຂາຍ Online - COD</h3>
    </v-chip>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <!-- <v-dialog v-model="dialogOrderDetail" max-width="1024" >
      <OrderDetailPos :key="componentKey" :header="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPos>
    </v-dialog> -->
    <v-dialog v-model="dialogOrderDetail" max-width="1024">
      <OrderDetailPosCRUD @reload="loadData()
    dialogOrderDetail = false" :is-quotation="false" :key="componentKey" :is-update="viewTransaction"
        :updateAllow="false" :headerId="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPosCRUD>
    </v-dialog>

    <v-dialog v-model="settleDialog" max-width="1024">
      <settlement :order-id="OrderIdSelected" :dy-cus-id="customerId" :amount="settleAmount" :key="settleFormKey"
        @close-dialog="settleDialog = false" @reload="settleDialog = false; loadData()"></settlement>
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :customer-id="customerId" :key="componentCancelFormKey"
        @close-dialog="cancelForm = false" @reload-data="cancelSucceed"></cancel-ticket-form>
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
                <div><strong>ຄ່າຂົນສົ່ງ:</strong> {{ formatNumber(selectedOrderForPayments.dynamic_customer?.rider_fee || 0) }} LAK</div>
                <div><strong>COD Fee:</strong> {{ formatNumber(selectedOrderForPayments.dynamic_customer?.cod_fee || 0) }} LAK</div>
                <div><strong>ລູກຄ້າ:</strong> {{ selectedOrderForPayments.dynamic_customer?.name }}</div>
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

    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y
              max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date = parseDate(dateFormatted)"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>

            <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
              max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date2 = parseDate(dateFormatted2)"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
            </v-menu>

          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
            <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line hide-detailsx />
            <v-autocomplete item-text="name" item-value="id" :items="customTerminalList" label="ເລືອກຕາມ ຮ້ານ*"
              v-model="terminalId"></v-autocomplete>
          </v-col>
          <v-col cols="6" class="text-left">
            <v-btn size="large" variant="outlined" @click="createSale" class="primary" rounded>
              <span class="mdi mdi-plus"></span>Create
            </v-btn>
            <v-btn size="large" variant="outlined" @click="exportToExcel" class="primary" rounded>
              <span class="mdi mdi-microsoft-excel"></span>Generate excel file
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
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
              <order-sumary-card-pos :showTotal="true"
                :gross="getFormatNum(totalSaleRaw - (+this.unpaidCodOrder.saleRawNumber))" :orderDetail="{
      'title': 'ຍອດບິນ COD',
      'amount': getFormatNum(activeOrderHeaderList.length),
      'sale': getFormatNum(totalSale),
      // 'discount': getFormatNum(totalDiscount),
      // 'gross': getFormatNum(totalSale.replaceAll(',', '') - totalDiscount.replaceAll(',', ''))
      // 'gross': getFormatNum(totalSale - totalDiscount)

    }">

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

      <v-data-table v-if="activeOrderHeaderList" :headers="headers" :search="search" :items="activeOrderHeaderList">
        <template v-slot:[`item.bookingDate`]="{ item }">
          {{ item.bookingDate.split('T')[0] }}
          <!-- <v-chip class="ma-2" color="red" text-color="white"> -->
          <h6 :style="{ 'color': countDay(item.bookingDate.split('T')[0]) > item.client?.credit ? 'red' : 'green' }">
            {{ countDay(item.bookingDate.split('T')[0]) }}
          </h6>
          <!-- </v-chip> -->
        </template>

        <template v-slot:[`item.client.credit`]="{ item }">
          <template v-if="item.client">
            <v-chip
              v-if="new Date(dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) < new Date()"
              class="ma-2" color="red" text-color="white">
              {{ dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0] }}
            </v-chip>
            <v-chip v-else class="ma-2" color="green" text-color="white">
              {{ dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0] }}
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
          <!-- {{ numberWithCommas(item.total) }} -->
        </template>
        <template v-slot:[`item.riderFee`]="{ item }">
          {{ numberWithCommas(item.dynamic_customer?.rider_fee || 0) }}
        </template>
        <template v-slot:[`item.createdAt`]="{ item }">
          {{ item.createdAt.split('.')[0] }}
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

        <template v-slot:[`item.id`]="{ item }">
          <v-btn color="primary" text @click="settleInvoice(item)
    wallet = true
      ">
            <span class="mdi mdi-wallet-plus-outline"></span>
          </v-btn>
        </template>
        <template v-slot:[`item.grandTotal`]="{ item }">
          <span> {{
      numberWithCommas((item.total - item.discount) + (item.dynamic_customer?.rider_fee || 0) +
        (item.dynamic_customer?.cod_fee || 0))
    }}</span>
          <!-- <v-btn text  @click="viewItem(item)" color="primary" >
            {{ `total: ${item.total}` }}
            {{ `disc: ${item.discount}` }}
            {{ `rider fee: ${item.dynamic_customer.rider_fee}` }}
            {{ `cod fee: ${item.dynamic_customer.cod_fee}` }}
          </v-btn> -->
        </template>
        <template v-slot:[`item.view`]="{ item }">
          <!-- TODO: TICKET PRINT -->
          <v-btn text @click="viewItem(item)" color="primary">
            <!-- <span class="mdi mdi-eye-circle-outline"></span> -->
            <i class="fas fa-eye"></i>
          </v-btn>
          <!-- <v-btn class="warning" text @click="viewItem(item)
          wallet = true
            ">
            View
          </v-btn> -->
        </template>
        <!-- <template v-slot:[`item.print`]="{ item }">
          <v-btn rounded class="warning" text @click="cancelItem(item)
          wallet = true
            ">
            <i class="fas fa-sync"></i>
          </v-btn>
        </template> -->
        <template v-slot:[`item.dynamic_customer.tel`]="{ item }">
          <v-row>
            <v-col cols="12">
              <v-btn color="blue darken-1" text @click="whatsappLink(item.dynamic_customer?.tel)">
                <a :href="whatsappContactLink" target="_blank">
                  <span class="mdi mdi-whatsapp"></span>
                </a>
              </v-btn>
              {{ item.dynamic_customer?.tel }}
            </v-col>
          </v-row>


        </template>
      </v-data-table>

    </v-card>
  </div>
</template>
<script>
import { ticketHtml, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
import { hostName, mainCompanyInfo, preloadCompanyData } from '~/common/api'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import Settlement from '~/components/Settlement.vue'

export default {
  components: { OrderDetailPos, OrderSumaryCardPos, OrderDetailPosCRUD, Settlement },
  middleware: 'auths',
  data() {
    return {
      terminalId: 999, //LocationId to filter sale base on current location selected 
      shippingList: [],
      currencyList: [],
      customerId: null,
      settleFormKey: 0,
      settleAmount: 0,
      settleDialog: false,
      cancelDialog: false,
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
      componentCancelFormKey: 1,
      cancelForm: false,
      OrderIdSelected: '',

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
        // {
        //   text: 'ID ລູກຄ້າ',
        //   align: 'center',
        //   value: 'client.id',
        //   sortable: true,
        // },
        {
          text: 'Offline/Online',
          align: 'center',
          value: 'dynamic_customer',
          sortable: true,
        },
        {
          text: 'ລູກຄ້າ',
          align: 'center',
          value: 'dynamic_customer.name',
          sortable: true,
        },
        {
          text: 'ເບີໂທ',
          align: 'center',
          value: 'dynamic_customer.tel',
          sortable: true,
        },
        {
          text: 'ບ່ອນສົ່ງ',
          align: 'center',
          value: 'dynamic_customer.address',
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
          text: 'ຄ່າຂົນສົ່ງ',
          align: 'center',
          value: 'riderFee',
          sortable: true,
        },
        {
          text: 'ລວມ(ຫັກສ່ວນຫລຸດ)',
          align: 'end',
          value: 'grandTotal',
          sortable: false,
        },
        {
          text: 'ຂົນສົ່ງ',
          align: 'center',
          value: 'dynamic_customer.shipping.name',
          sortable: true,
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
          text: 'ຮ້ານ',
          align: 'center',
          value: 'location.name',
          sortable: true,
        },
        {
          text: 'ຣາຍເດີ',
          align: 'center',
          value: 'dynamic_customer.rider.name',
          sortable: true,
        },
        {
          text: 'ເຂດ',
          align: 'center',
          value: 'dynamic_customer.geography.description',
          sortable: true,
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
          text: 'ຮັບເງິນ',
          align: 'end',
          value: 'id',
          sortable: false,
        },
        {
          text: 'view',
          align: 'end',
          value: 'view',
          sortable: false,
        },
        // {
        //   text: 'ຍົກເລີກ',
        //   align: 'end',
        //   value: 'print',
        //   sortable: false,
        // },
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

      // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        // new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        //   .toISOString()
        //   .substr(0, 10)
        getFirstDayOfMonth()
      ),
      dateFormatted2: this.formatDate(
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

    // ENHANCED: Preload company data for API logos
    try {
      await preloadCompanyData(this.$axios)
      console.log('Company data preloaded for COD sales')
    } catch (error) {
      console.warn('Company preload failed, using fallback:', error)
    }

    await this.loadData()
    await this.loadShipping()
    await this.loadCurrency()
  },

  watch: {
    isedit(v) {
      if (!v) this.form_data.cus_id = '1XXX'
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.loadData()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
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
        console.log('Using API logo for COD sales:', logoUrl)
        return logoUrl
      }

      // 2. Try static logo from company data
      if (company.ticketLogo) {
        try {
          const staticLogo = require(`~/assets/image/${company.ticketLogo}`)
          console.log('Using static logo for COD sales:', company.ticketLogo)
          return staticLogo
        } catch (error) {
          console.warn('Static logo not found for COD sales:', company.ticketLogo, error)
        }
      }

      // 3. Try dcLogo fallback
      if (company.dcLogo) {
        try {
          const fallbackLogo = require(`~/assets/image/${company.dcLogo}`)
          console.log('Using dcLogo fallback for COD sales:', company.dcLogo)
          return fallbackLogo
        } catch (error) {
          console.warn('dcLogo not found for COD sales:', company.dcLogo, error)
        }
      }

      // 4. Final fallback
      console.log('Using final fallback logo for COD sales')
      return '/static/images/default-logo.png'
    },

    customTerminalList() {
      let originalTerminalListVanilla = JSON.stringify(this.findAllTerminal)
      let originalTerminalList = JSON.parse(originalTerminalListVanilla)
      const extraTerminal = {
        "id": 999, "code": 1999, "name": "ທັງໝົດ", "description": "", "locationId": 1,
      }
      originalTerminalList.push(extraTerminal)
      console.log(`Terminal customer all len: ${originalTerminalList.length}`);
      return originalTerminalList;
    },

    currentTerminal() {
      console.log(`ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`);
      const terminalInfo = this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
      console.log(`************ ${this.findAllTerminal.length} SELECTED ${terminalInfo?.['name']} ************ `);
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
    },

    ticketCommon() {
      return ticketHtml();
    },

    ...mapGetters(['currentSelectedLocation', 'cartOfProduct', 'currenctSelectedCategoryId', 'findAllProduct', 'currentSelectedCustomer', 'currentSelectedPayment', 'findSelectedTerminal', 'findAllTerminal', 'findAllLocation']),
    
    activeOrderHeaderList() {
      console.log(`TerminalSelcted ${this.terminalId}`);
      const terminal = this.findAllTerminal.find(el => el['id'] == this.terminalId)
      if (!terminal) {
        return this.orderHeaderList.filter(el => el['isActive'] == true && (el['payment']['payment_code'] == 'COD' || this.isMultiPayment(el)))
      }
      console.log(`Current location ${JSON.stringify(terminal)}`);
      return this.orderHeaderList.filter(el => el['isActive'] == true && (el['payment']['payment_code'] == 'COD' || this.isMultiPayment(el)) && el['locationId'] == terminal['locationId'])
    },

    // NEW: Payment Statistics
    singlePaymentCount() {
      return this.activeOrderHeaderList.filter(item => !this.isMultiPayment(item)).length
    },

    multiPaymentCount() {
      return this.activeOrderHeaderList.filter(item => this.isMultiPayment(item)).length
    },

    computedDateFormatted() {
      return this.formatDate(this.date)
    },

    totalSale() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        // total += el.total
        total += el.total + (el.dynamic_customer?.rider_fee || 0) - (el.dynamic_customer?.cod_fee || 0)
      })
      return total
      // return total
    },

    totalSaleRaw() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        console.log("====>", el.cartTotal);
        total += parseInt(el.cartTotal)
      })
      console.log('Price total: ' + total)
      // return previousValue.cartTotal + currentValue.cartTotal
      return total
      // return total
    },

    totalDiscount() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.discount)
      })
      return total
      // return total
    },

    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach(element => {
        if (element.paymentStatus === 'PENDING' && element.payment.includes('COD')) {
          console.log("Concept applied");
          txnList.push(element)
        }
      });
      const totalPrice = txnList.reduce((total, item) => {
        return total + item.cartTotal;
      }, 0);
      const totalDiscount = txnList.reduce((total, item) => {
        return total + item.discount;
      }, 0);

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice;
      orderDetail.sale = this.getFormatNum(totalPrice)
      orderDetail.discount = this.getFormatNum(totalDiscount)
      orderDetail.gross = this.getFormatNum(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail;
    },
  },

  methods: {
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
          <h3 style="text-align: center">ລາຍລະອຽດການຊຳລະ COD</h3>
          <hr>
          <h5>ເລກບິນ: ${item.id}</h5>
          <h5>ວັນທີ: ${item.bookingDate}</h5>
          <h5>ລູກຄ້າ: ${item.dynamic_customer?.name}</h5>
          <h5>ຍອດລວມ: ${this.formatNumber(item.total)} LAK</h5>
          <h5>ສ່ວນຫລຸດ: ${this.formatNumber(item.discount)} LAK</h5>
          <h5>ຄ່າຂົນສົ່ງ: ${this.formatNumber(item.dynamic_customer?.rider_fee || 0)} LAK</h5>
          <h5>COD Fee: ${this.formatNumber(item.dynamic_customer?.cod_fee || 0)} LAK</h5>
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

    exportToExcel() {
      const worksheet = this.$xlsx.utils.json_to_sheet(this.activeOrderHeaderList);
      const workbook = this.$xlsx.utils.book_new();
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      this.$xlsx.writeFile(workbook, 'data.xlsx');
    },

    currentShipping(shippingId) {
      const shipping = this.shippingList.find(el => el.id == shippingId)
      if (shipping == undefined) return ''
      return shipping['name']
    },

    createSale() {
      this.componentKey += 1;
      this.selectedOrder = 0
      this.viewTransaction = false;
      this.dialogOrderDetail = true;
    },

    countDay(startDate) {
      return dayCount(startDate)
    },

    dueDate(startDate, day) {
      console.log("DATE ", startDate, " to ", day);
      return getNextDate(startDate, day)
    },

    numberWithCommas(value) {
      if (!value) return '0'
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    whatsappLink(item) {
      if (!item) return
      console.log(`******** customer tel ${item} *******`);
      const tel = item.trim();

      // console.log("Customer tel: ",tel);
      const completeTel = tel.substring(tel.length - 8);
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
      // return `https://api.whatsapp.com/send?phone=${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
    },

    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },

    editItem(item) {
      this.componentKey += 1;
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail;
    },

    viewItem(item) {
      this.componentKey += 1;
      this.viewTransaction = true
      this.selectedOrder = item.id
      this.dialogOrderDetail = true;
    },

    cancelItem(payload) {
      console.log("Order id", payload.orderId);
      this.componentCancelFormKey += 1;
      this.OrderIdSelected = payload.id
      this.customerId = payload.dynamic_customer?.id
      this.cancelForm = true;
    },

    settleInvoice(payload) {
      console.log("Order id", payload.id, "amount: ", payload['total'], " dy _ ", payload.dynamic_customer?.id);
      this.settleFormKey += 1;
      this.OrderIdSelected = payload.id
      this.customerId = payload.dynamic_customer?.id
      this.settleAmount = payload.total
      // this.orderLockingSessionId = payload.lockingSessionId;
      this.settleDialog = true;
    },

    handleEvent() {
      this.dialogOrderDetail = false;
    },

    cancelSucceed() {
      this.cancelForm = false
      this.loadData();
    },

    async loadData() {
      this.isloading = true
      const date = {
        startDate: this.date,
        endDate: this.date2,
        userId: this.userId
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
            if (iterator['dynamic_customer']) {
              iterator['print'] = iterator['id']
              this.orderHeaderList.push(iterator)
            }
          }
          console.log("====> " + this.orderHeaderList.length);
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
      this.isloading = false
    },

    formatDate(date) {
      if (!date) return null
      console.log("DATE FORMAT METHOD1: " + date);
      const formattedDate = this.formatDateToISO(date);
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      console.log("DATE PARSE METHOD1: " + date);
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date);
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Months are 0-indexed
      const day = `${date.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    },

    async loadShipping() {
      this.$axios
        .get('/api/shipping/find')
        .then((res) => {
          this.shippingList = res.data
        })
        .catch((er) => {
          swalError2(this.$swal, "Error", er)
        })
      this.isloading = false;
    },

    async loadCurrency() {
      this.isloading = true;
      this.currencyList = []
      console.log("Loading currency ===>");
      await this.$axios
        .get('/api/currency/find')
        .then((res) => {
          for (const iterator of res.data) {
            this.currencyList.push(iterator);
          }
        })
        .catch((er) => {
          // console.log('Data: ' + er)
          swalError2(this.$swal, "Error", er)
        })
      this.isloading = false;
    },

    formatNumber(val) {
      return getFormatNum(val)
    },

    // ENHANCED: Print delivery ticket with API logo and multi-payment support
    generatePrintViewDeliveryCustomer(saleHeader) {
      console.log(`ITEM SALE HEADER : ${saleHeader.id}`);
      console.log(`ITEM SALE HEADER : ${this.currentTerminal.id}`);
      let txnListHtml = ``
      for (const iterator of saleHeader.lines) {
        const product = this.findAllProduct.find(el => el.id == iterator.productId)
        console.log(`=======${JSON.stringify(product)}======`);
        const quantity = iterator.quantity
        const total = iterator.quantity * iterator.price
        txnListHtml +=
          `<div class="ticket">
                    <div class="product-name">${product.pro_name} </div>
                    <div class="price"> ${quantity} ${this.getDisplayPaymentCode(saleHeader) == 'COD' ? ' X ' + this.formatNumber(total) : ''}</div>
                </div>`
      }
      const discountHtml = `<div class="ticket">
                    <div class="product-name">ສ່ວນຫລຸດ </div>
                    <div class="price"> - ${this.formatNumber(saleHeader.discount)}</div>
                </div>`
      const riderFeeHtml = `<div class="ticket">
                    <div class="product-name">ຄ່າສົ່ງ </div>
                    <div class="price">${this.formatNumber(saleHeader.dynamic_customer.rider_fee)}</div>
                </div>`

      // Enhanced payment info with multi-payment support
      let paymentInfoHtml = ''
      if (this.isMultiPayment(saleHeader)) {
        paymentInfoHtml = '<h5>ການຊຳລະຫຼາຍວິທີ:</h5>'
        const paymentDetails = this.getPaymentDetails(saleHeader)
        paymentDetails.forEach(payment => {
          paymentInfoHtml += `<div class="ticket">
            <div class="product-name">${payment.name}</div>
            <div class="price">${this.formatNumber(payment.amount)} LAK</div>
          </div>`
        })
      }

      //*********Payment info tag********/
      let totalHtml = '';
      for (const iterator of this.currencyList) {
        if (iterator.code == 'LAK' && (this.getDisplayPaymentCode(saleHeader) == 'COD' || this.currentShipping(saleHeader.dynamic_customer.shippingId) == 'RIDER')) {
          totalHtml += `
                                    <div class="ticket">
                                        <div class="product-name"></div>
                                    <div class="price-total"> <h5>ຍອດລວມ(${this.getDisplayPaymentCode(saleHeader)}): ${this.formatNumber(((saleHeader.total + (+saleHeader.dynamic_customer.rider_fee)) - saleHeader.discount))}  </h5> </div>
                                </div>
                                    `
        }

      }

      // Enhanced company information
      const companyName = this.getCompanyName()
      const companyTel = this.getCompanyTelephone()

      const windowContent = `
         ${this.ticketCommon.header}
            <body>
                <div style="text-align: center;">
                    ${this.getCompanyLogoHtml()}
                </div>
                <h5>ວັນທີ: ${saleHeader.bookingDate}</h5>
                <h5>ຮ້ານ: ${companyName}</h5>
                <h5>ເບີໂທ: ${companyTel}</h5>
                <hr></hr>
                <h5>ຜູ້ຮັບ: ${saleHeader.dynamic_customer.name}</h5>
                <h5>ໂທ: ${saleHeader.dynamic_customer.tel}</h5>
                <h5>ຂົນສົ່ງ: ${this.currentShipping(saleHeader.dynamic_customer.shippingId)}</h5>
                <h5>ບ່ອນສົ່ງ: ${saleHeader.dynamic_customer.address}</h5>
              ${this.currentShipping(saleHeader.dynamic_customer.shippingId) == 'RIDER' ? `` : `<h5>ຄ່າຝາກ: ${saleHeader.dynamic_customer.shipping_fee_by?.includes('destination') ? 'ປາຍທາງ' : 'ຕົ້ນທາງ'}</h5>`}  
                <hr></hr>
                ${txnListHtml}
                ${saleHeader.dynamic_customer.rider_fee > 0 ? riderFeeHtml : ''}
                ${saleHeader.discount > 0 && this.getDisplayPaymentCode(saleHeader) == 'COD' ? discountHtml : ''}
                ${paymentInfoHtml}
                <hr></hr>
                ${totalHtml}
            </body>
            </html>
        `
      const printWin = window.open(
        '',
        '',
        'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0'
      )
      printWin.document.open()
      printWin.document.write(windowContent)

      setTimeout(() => {
        printWin.print()
        printWin.close()
      }, 1000)
    },

    // NEW: Helper methods for enhanced printing
    getDisplayPaymentCode(saleHeader) {
      if (this.isMultiPayment(saleHeader)) {
        return 'MULTI-PAYMENT'
      }
      return saleHeader.payment?.payment_code || 'UNKNOWN'
    },

    getCompanyLogoHtml() {
      const logoUrl = this.companyLogo
      
      if (logoUrl && !logoUrl.includes('default-logo')) {
        return `<img src="${logoUrl}" alt="Company Logo" width="100" height="100" style="max-width: 100px; max-height: 100px; object-fit: contain;">`
      } else {
        const companyName = this.getCompanyName()
        const initials = companyName.substring(0, 2).toUpperCase()
        return `<div style="width: 100px; height: 100px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-size: 24px; font-weight: bold; color: #666; margin: 0 auto;">${initials}</div>`
      }
    },

    getCompanyName() {
      const company = this.companyData
      
      if (company.apiData && company.apiData.name) {
        return company.apiData.name
      }
      
      if (company.name) {
        return company.name
      }
      
      if (this.currentTerminal?.location?.company?.name) {
        return this.currentTerminal.location.company.name
      }
      
      return 'ຮ້ານຂາຍເຄື່ອງ'
    },

    getCompanyTelephone() {
      const company = this.companyData
      
      if (company.apiData && company.apiData.tel) {
        return company.apiData.tel
      }
      
      if (company.tel) {
        return company.tel
      }
      
      if (this.currentTerminal?.location?.company?.tel) {
        return this.currentTerminal.location.company.tel
      }
      
      return 'N/A'
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
</style>