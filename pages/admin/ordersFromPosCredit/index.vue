<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການລູກຄ້າຕິດຫນີ້</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>

    <!-- Existing Dialogs -->
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="lduzK_oVV_g">
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <v-dialog v-model="dialogOrderDetail" fullscreen>
      <OrderDetailPosCRUD @reload="loadData(); dialogOrderDetail = false" :is-quotation="false" :key="componentKey"
        :is-update="viewTransaction" :headerId="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPosCRUD>
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :key="componentCancelFormKey" @close-dialog="cancelForm = false"
        @reload="cancelForm = false, loadData()">
      </cancel-ticket-form>
    </v-dialog>

    <!-- NEW: Add TicketDetailsDialog for credit transactions -->
    <ticket-details-dialog v-model="ticketDetailsDialog" :ticket-data="selectedTicketForDetails"
      :company-logo="companyLogo" :ticket-common="ticketCommon" :show-print-button="true" @close="onTicketDialogClose"
      @print-ticket="onPrintTicket" @print-payment-details="onPrintPaymentDetails" />

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
          </v-col>

          <v-col cols="6" class="text-left">
            <v-btn size="large" variant="outlined" @click="exportToExcel" class="primary" rounded>
              <span class="mdi mdi-microsoft-excel"></span>Generate excel file
            </v-btn>
          </v-col>

          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary mr-2" rounded>
              <span class="mdi mdi-cloud-download"></span>
              ດຶງລາຍງານ
            </v-btn>
            <v-btn size="large" variant="outlined" @click="printSummaryA4" class="success" rounded>
              <span class="mdi mdi-printer"></span>
              ພິມລາຍງານສະຫຼຸບ A4
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>

      <v-divider></v-divider>

      <!-- Enhanced Credit Summary Section -->
      <v-card-text>
        <!-- Grand Summary Cards -->
        <v-row class="mb-4">
          <v-col cols="12" md="4">
            <v-card class="mx-auto elevation-2" style="border-radius: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);">
              <v-card-text class="d-flex align-center pa-4">
                <v-avatar color="blue" size="48" class="elevation-1 mr-3">
                  <v-icon color="white">mdi-cart-outline</v-icon>
                </v-avatar>
                <div>
                  <div class="text-subtitle-2 grey--text text--darken-1 font-weight-medium">ຍອດຂາຍລວມ (Gross Credit)</div>
                  <div class="text-h6 font-weight-black blue--text text--darken-3">
                    {{ getFormatNum(totalSale + totalDiscount) }}
                    <small class="caption">{{ localCurrency?.code || 'LAK' }}</small>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto elevation-2" style="border-radius: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);">
              <v-card-text class="d-flex align-center pa-4">
                <v-avatar color="red" size="48" class="elevation-1 mr-3">
                  <v-icon color="white">mdi-tag-outline</v-icon>
                </v-avatar>
                <div>
                  <div class="text-subtitle-2 grey--text text--darken-1 font-weight-medium">ສ່ວນຫຼຸດລວມ (Discount)</div>
                  <div class="text-h6 font-weight-black red--text text--darken-3">
                    {{ getFormatNum(totalDiscount) }}
                    <small class="caption">{{ localCurrency?.code || 'LAK' }}</small>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto elevation-2" style="border-radius: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);">
              <v-card-text class="d-flex align-center pa-4">
                <v-avatar color="green" size="48" class="elevation-1 mr-3">
                  <v-icon color="white">mdi-cash-multiple</v-icon>
                </v-avatar>
                <div>
                  <div class="text-subtitle-2 grey--text text--darken-1 font-weight-medium">ຍອດຕິດໜີ້ສຸດທິ (Net Credit)</div>
                  <div class="text-h6 font-weight-black green--text text--darken-3">
                    {{ getFormatNum(totalSale) }}
                    <small class="caption">{{ localCurrency?.code || 'LAK' }}</small>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <!-- Bill Count Card -->
          <v-col cols="12" lg="4">
            <v-card outlined class="pa-4 d-flex align-center" style="border-radius: 12px; height: 100%;">
              <v-avatar color="orange" size="48" class="mr-4">
                <v-icon color="white">mdi-file-document-outline</v-icon>
              </v-avatar>
              <div>
                <h4 class="grey--text text--darken-1 mb-1">ຈຳນວນບິນຕິດໜີ້</h4>
                <div class="text-h5 font-weight-black">{{ creditOrder.length }} <small class="caption">ບິນ</small></div>
              </div>
            </v-card>
          </v-col>

          <!-- Credit Analytics Card -->
          <v-col cols="12" lg="8">
            <v-card outlined class="pa-4" style="border-radius: 12px;">
              <h4 class="mb-3">
                <v-icon left color="warning">mdi-clock-alert</v-icon>
                ສະຖານະໜີ້ສິນ
              </h4>
              <v-row class="text-center">
                <v-col cols="6" sm="3">
                  <div class="text-h6 error--text">{{ getOverdueCount() }}</div>
                  <div class="caption grey--text">ເກີນກຳນົດ</div>
                  <v-progress-circular :value="getOverduePercentage()" color="error" size="36" width="3" class="mt-1">
                    <small>{{ getOverduePercentage().toFixed(0) }}%</small>
                  </v-progress-circular>
                </v-col>

                <v-col cols="6" sm="3">
                  <div class="text-h6 warning--text">{{ getPendingCount() }}</div>
                  <div class="caption grey--text">ຍັງຊຳລະໄດ້</div>
                  <v-progress-circular :value="getPendingPercentage()" color="warning" size="36" width="3" class="mt-1">
                    <small>{{ getPendingPercentage().toFixed(0) }}%</small>
                  </v-progress-circular>
                </v-col>

                <v-col cols="12" sm="3" class="pt-4">
                  <div class="text-subtitle-2 error--text font-weight-bold">{{ getFormatNum(getOverdueAmount()) }}</div>
                  <div class="caption grey--text">ຍອດເກີນກຳນົດ ({{ localCurrency?.code || 'LAK' }})</div>
                </v-col>
                
                <v-col cols="12" sm="3" class="pt-4">
                  <div class="text-subtitle-2 warning--text font-weight-bold">{{ getFormatNum(getPendingAmount()) }}</div>
                  <div class="caption grey--text">ຍອດຍັງຊຳລະໄດ້ ({{ localCurrency?.code || 'LAK' }})</div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- Enhanced Data Table -->
      <v-data-table v-if="creditOrder" :headers="headers" :search="search" :items="creditOrder" class="elevation-1">
        <template v-slot:[`item.bookingDate`]="{ item }">
          <div>
            {{ safeSplitDate(item.bookingDate) }}
            <div>
              <v-chip small
                :color="countDay(safeSplitDate(item.bookingDate)) > item.client.credit ? 'error' : 'success'" dark>
                <v-icon left small>mdi-calendar-clock</v-icon>
                {{ countDay(safeSplitDate(item.bookingDate)) }} ມື້
              </v-chip>
            </div>
          </div>
        </template>

        <template v-slot:[`item.client.credit`]="{ item }">
          <v-chip
            :color="isOverdue(item) ? 'error' : 'success'"
            class="ma-2" text-color="white">
            <v-icon left small>
              {{ isOverdue(item) ? 'mdi-alert-circle' : 'mdi-check-circle' }}
            </v-icon>
            {{ getDueDateFormatted(item) }}
          </v-chip>
        </template>

        <!-- NEW: Enhanced Client Information -->
        <template v-slot:[`item.client.name`]="{ item }">
          <div>
            <div class="font-weight-medium">{{ item.client.name }}</div>
            <div class=" text--secondary">ID: {{ item.client.id }}</div>
            <div class=" text--secondary">{{ item.client.company }}</div>
          </div>
        </template>

        <!-- NEW: Enhanced Payment Method Display -->
        <template v-slot:[`item.payment.payment_code`]="{ item }">
          <v-chip :color="getPaymentMethodColor(item.payment?.payment_code)" small dark>
            <v-icon left small>{{ getPaymentMethodIcon(item.payment?.payment_code) }}</v-icon>
            {{ item.payment?.payment_name || 'N/A' }}
          </v-chip>
        </template>

        <template v-slot:[`item.discount`]="{ item }">
          <div class="text-right">
            <span v-if="item.discount > 0" class="error--text">
              -{{ numberWithCommas(item.discount) }}
            </span>
            <span v-else class="text--secondary">-</span>
          </div>
        </template>

        <template v-slot:[`item.total`]="{ item }">
          <div class="text-right">
            <strong :class="getAmountColor(item)">
              {{ numberWithCommas(item.total) }}
            </strong>
          </div>
        </template>

        <template v-slot:[`item.createdAt`]="{ item }">
          <v-chip color="info" small dark>
            <v-icon left small>mdi-clock</v-icon>
            {{ formatDateTime(item.createdAt) }}
          </v-chip>
        </template>

        <!-- NEW: Enhanced Action Buttons -->
        <template v-slot:[`item.id`]="{ item }">
          <div class="d-flex">
            <!-- View/Edit Button -->
            <v-btn color="primary" text small @click="viewItem(item)" class="mr-1">
              <v-icon small>mdi-pencil</v-icon>
              <span class="d-none d-md-inline ml-1">ແກ້ໄຂ</span>
            </v-btn>

            <!-- NEW: Ticket Details Button -->
            <v-btn color="info" text small @click="showTicketDetails(item)" class="mr-1">
              <v-icon small>mdi-receipt</v-icon>
              <span class="d-none d-md-inline ml-1">ລາຍລະອຽດ</span>
            </v-btn>

            <!-- Print Button -->
            <v-btn color="success" text small @click="printTicket(item)">
              <v-icon small>mdi-printer</v-icon>
              <span class="d-none d-md-inline ml-1">ພິມ</span>
            </v-btn>
          </div>
        </template>

        <template v-slot:[`item.client.telephone`]="{ item }">
          <div>
            <div>{{ item.client.telephone }}</div>
            <v-btn color="success" text small @click="whatsappLink(item)" class="pa-0">
              <v-icon left small>mdi-whatsapp</v-icon>
              <a :href="whatsappContactLink" target="_blank" class="text-decoration-none">
                WhatsApp
              </a>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getLocalDate, ticketHtml } from '~/common'
import { mainCompanyInfo } from '~/common/api'
import { generateInvoiceHTML, generateReceiptSummaryReportHTML } from '~/common/printTemplates'
import { defaultTicketReprint } from '~/common/ticket.js'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
import TicketDetailsDialog from '~/components/pos/dialogs/TicketDetailsDialog.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    OrderDetailPos,
    OrderSumaryCardPos,
    OrderDetailPosCRUD,
    TicketDetailsDialog  // NEW: Add the TicketDetailsDialog component
  },
  middleware: 'auths',

  data() {
    return {
      viewTransaction: false,
      guidelineDialog: false,
      whatsappContactLink: '',
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrder: 0,
      wallet: false,
      isedit: false,
      dialog: false,
      isloading: false,
      dialogForm: false,
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

      // NEW: Ticket Details Dialog
      ticketDetailsDialog: false,
      selectedTicketForDetails: null,

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
          text: 'ລູກຄ້າ',
          align: 'center',
          value: 'client.name',
          sortable: true,
        },
        {
          text: 'ເບີໂທ',
          align: 'center',
          value: 'client.telephone',
          sortable: true,
        },
        {
          text: 'ຊຳລະດ້ວຍ',
          align: 'center',
          value: 'payment.payment_code',
          sortable: true,
        },
        {
          text: 'Due date',
          align: 'center',
          value: 'client.credit',
          sortable: true,
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
          text: 'ສ່ວນຫລຸດ',
          align: 'end',
          value: 'discount',
          sortable: true,
        },
        {
          text: 'ລວມ',
          align: 'end',
          value: 'total',
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
          text: 'ການດຳເນີນການ',
          align: 'center',
          value: 'id',
          sortable: false,
          width: '200px'
        },
      ],

      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(getFirstDayOfMonth()),
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
    await this.loadData()
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
    ...mapGetters([
      'findAllPayment',
      'findLocalCurrency',
      'findAllCurrency',
      'findAllprinters',
      'findAllProduct',
      'findSPF',
      'findAllCompany'
    ]),

    localCurrency() {
      return this.findLocalCurrency
    },

    companyLogo() {
      const company = mainCompanyInfo()
      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || ''
        return `${baseUrl}/${company.apiData.profile_image_path}`
      }
      return '/static/images/default-logo.png'
    },

    ticketCommon() {
      return ticketHtml()
    },

    totalSale() {
      let total = 0
      this.creditOrder.forEach((el) => {
        total += el.total
      })
      return total
    },

    totalDiscount() {
      let total = 0
      this.creditOrder.forEach((el) => {
        total += parseInt(el.discount)
      })
      return total
    },

    creditOrder() {
      return this.orderHeaderList.filter(el => el['paymentId'] == 2 && el['isActive'] == true)
    },

    getSPF() {
      return this.findSPF || []
    },

    paperSize() {
      const item = this.getSPF.find((spf) => spf.code == 'PAPER_SIZE')
      return item?.value || '80mm'
    },

    companyData() {
      const baseCompany = mainCompanyInfo()
      const baseUrl = this.$axios.defaults.baseURL || ''
      const storeCompany = this.findAllCompany?.[0] || {}

      const resolvedProfileImagePath =
        baseCompany?.profile_image_path ||
        baseCompany?.apiData?.profile_image_path ||
        storeCompany?.profile_image_path ||
        null

      const resolvedBankQrImagePath =
        baseCompany?.bank_qr_image_path ||
        baseCompany?.apiData?.bank_qr_image_path ||
        storeCompany?.bank_qr_image_path ||
        null

      const resolvedBankQrImagePath2 =
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
        name: baseCompany?.name || 'DCOMMERCE MART',
        address:
          this.formatCompanyAddress(baseCompany) ||
          baseCompany?.address ||
          '123 Main Street',
        tel: baseCompany?.tel || '',
        email: baseCompany?.email || '',
        bank: baseCompany?.bank || '',
        accountName: baseCompany?.accountName || '',
        accounts: baseCompany?.accounts || '',
        taxId: baseCompany?.taxId || '',
        remark: baseCompany?.remark || '',
        term_condition: baseCompany?.term_condition || '',
        showLogoOnTicket: baseCompany?.showLogoOnTicket || '',
        ticketQRcode: baseCompany?.ticketQRcode || false,
        ticketLayout: baseCompany?.ticketLayout || 'classic',
        profile_image_path: resolvedProfileImagePath,
        bank_qr_image_path: resolvedBankQrImagePath,
        bank_qr_image_path_2: resolvedBankQrImagePath2,
        ticketLogo,
        qrCode,
        qrCode2,
      }
    }
  },

  methods: {
    // NEW: Ticket Details Dialog Methods
    showTicketDetails(item) {
      this.selectedTicketForDetails = item
      this.ticketDetailsDialog = true
      console.info('SELECTED CREDIT TICKET:', JSON.stringify(item))
    },

    onTicketDialogClose() {
      this.ticketDetailsDialog = false
      this.selectedTicketForDetails = null
    },

    onPrintTicket(ticketData) {
      this.printTicket(ticketData)
    },

    onPrintPaymentDetails(ticketData) {
      console.log('Payment details printed for credit ticket:', ticketData.id)
    },

    // NEW: Credit Analytics Methods
    getOverdueCount() {
      return this.creditOrder.filter(item =>
        new Date(this.dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) < new Date()
      ).length
    },

    getPendingCount() {
      return this.creditOrder.length - this.getOverdueCount()
    },

    getOverduePercentage() {
      const total = this.creditOrder.length
      return total > 0 ? (this.getOverdueCount() / total) * 100 : 0
    },

    getPendingPercentage() {
      const total = this.creditOrder.length
      return total > 0 ? (this.getPendingCount() / total) * 100 : 0
    },

    getOverdueAmount() {
      return this.creditOrder
        .filter(item =>
          new Date(this.dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) < new Date()
        )
        .reduce((sum, item) => sum + item.total, 0)
    },

    getPendingAmount() {
      return this.creditOrder
        .filter(item =>
          new Date(this.dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) >= new Date()
        )
        .reduce((sum, item) => sum + item.total, 0)
    },

    getAmountColor(item) {
      const isOverdue = new Date(this.dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) < new Date()
      return isOverdue ? 'error--text' : 'warning--text'
    },

    // NEW: Enhanced Payment Method Methods
    getPaymentMethodColor(paymentCode) {
      const paymentMethod = this.findAllPayment.find(p => p.payment_code === paymentCode)

      if (paymentMethod) {
        const colorMap = {
          'CASH': 'green',
          'QR': 'purple',
          'TRANSFER': 'blue',
          'TRANSFER_BCEL': 'blue',
          'BCEL': 'blue',
          'COD': 'orange',
          'CREDIT': 'red',
          'CARD': 'indigo',
        }

        if (colorMap[paymentCode]) {
          return colorMap[paymentCode]
        }

        const code = paymentCode.toUpperCase()
        if (code.includes('CASH')) return 'green'
        if (code.includes('QR')) return 'purple'
        if (code.includes('TRANSFER') || code.includes('BANK')) return 'blue'
        if (code.includes('CARD') || code.includes('CREDIT')) return 'indigo'
        if (code.includes('COD')) return 'orange'

        return 'primary'
      }

      return 'grey'
    },

    getPaymentMethodIcon(paymentCode) {
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
        }

        if (iconMap[paymentCode]) {
          return iconMap[paymentCode]
        }

        const code = paymentCode.toUpperCase()
        if (code.includes('CASH')) return 'mdi-cash'
        if (code.includes('QR')) return 'mdi-qrcode'
        if (code.includes('TRANSFER') || code.includes('BANK')) return 'mdi-bank-transfer'
        if (code.includes('CARD') || code.includes('CREDIT')) return 'mdi-credit-card'
        if (code.includes('COD')) return 'mdi-truck-delivery'

        return 'mdi-cash-multiple'
      }

      return 'mdi-help-circle'
    },

    // Enhanced Formatting Methods
    formatDateTime(dateString) {
      if (!dateString) return 'N/A'
      try {
        const d = new Date(dateString)
        if (isNaN(d.getTime())) return dateString
        
        const year = d.getFullYear()
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        const hours = String(d.getHours()).padStart(2, '0')
        const minutes = String(d.getMinutes()).padStart(2, '0')
        const seconds = String(d.getSeconds()).padStart(2, '0')
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
      } catch (e) {
        return dateString
      }
    },

    safeSplitDate(dateString) {
      if (!dateString) return ''
      if (typeof dateString !== 'string') {
        if (dateString instanceof Date) {
          return dateString.toISOString().split('T')[0]
        }
        return dateString
      }
      return dateString.split('T')[0]
    },

    isOverdue(item) {
      if (!item || !item.client) return false
      try {
        const due = this.dueDate(item.bookingDate, item.client.credit)
        const dueStr = this.safeSplitDate(due instanceof Date ? due.toISOString() : String(due))
        return new Date(dueStr) < new Date()
      } catch (e) {
        return false
      }
    },

    getDueDateFormatted(item) {
      if (!item || !item.client) return ''
      try {
        const due = this.dueDate(item.bookingDate, item.client.credit)
        return this.safeSplitDate(due instanceof Date ? due.toISOString() : String(due))
      } catch (e) {
        return ''
      }
    },

    async printTicket(item) {
      console.log('Printing credit ticket:', item.id)
      const PRINTFORMAT = (this.getSPF || []).find(
        (spf) => spf.code === 'TICKET_FORM'
      )
      if (PRINTFORMAT && PRINTFORMAT.value === 'FORMAL') {
        this.isloading = true
        try {
          const response = await this.$axios.get(`api/sale/find/${item.id}`)
          const invoiceData = response.data
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

      // Fallback POS Thermal printer reprint
      console.info('PRINTING CREDIT TICKET FOR POS PRINTER:', JSON.stringify(item))
      let paymentCode = 'UNKNOWN'
      if (this.isMultiPayment(item)) {
        paymentCode = 'MULTI-PAYMENT'
      } else if (item.payment) {
        paymentCode = item.payment.payment_code
      }

      const transformedLines = (item.lines || []).map((line) => ({
        id: line.product?.id || line.productId,
        pro_name: line.product?.pro_name || 'Unknown Product',
        qty: line.quantity,
        localPrice: line.price,
        pro_price: line.price,
        isGift: line.isGift || false,
        saleCurrencyId: line.currencyId,
        total: line.total,
        discount: line.discount || 0,
        exchangeRate: line.exchangeRate || 1,
        priceListId: line.priceListId || null,
        priceLists: line.priceLists || [],
      }))

      defaultTicketReprint({
        printers: this.findAllprinters || [],
        productCart: { lines: transformedLines },
        findAllProduct: this.findAllProduct || [],
        formatNumber: this.getFormatNum,
        discount: item.discount,
        currencyList: this.findAllCurrency || [],
        grandTotal: item.total,
        lastTransactionSaleHeaderId: item.id,
        currentTerminal: {
          baseURL: this.$axios.defaults.baseURL,
        },
        user: this.$store.state.auth?.user || {},
        ticketCommon: this.ticketCommon,
        currentPaymentCode: paymentCode,
        cashReceived: item.total,
        changes: 0,
        bookingDate: item.createdAt,
        axios: this.$axios,
        companyData: this.companyData,
        paperWidth: this.paperSize || '80mm',
        client: item.client,
      })
    },

    async printSummaryA4() {
      try {
        console.log('🖨️ Printing credit detailed summary report...')
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
            console.error('Failed to load currencies in credit summary print:', error)
          }
        }

        const companyData = this.companyData
        const filters = {
          fromDate: this.dateFormatted,
          toDate: this.dateFormatted2,
          terminalName: 'ທັງໝົດ',
          userName: this.$store.state.auth?.user?.cus_name || '-'
        }

        const htmlContent = generateReceiptSummaryReportHTML(
          this.creditOrder,
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
              console.error('Print trigger error:', e)
            }
          }, 500)
        }
      } catch (e) {
        console.error('Print window error:', e)
      }
    },

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

    formatCompanyAddress(company) {
      if (!company) return ''
      let formattedAddress = ''
      if (company.address) formattedAddress += company.address
      if (company.village) formattedAddress += `<br>${company.village}`
      if (company.district) formattedAddress += `, ${company.district}`
      if (company.province) formattedAddress += `, ${company.province}`

      return formattedAddress || company.address || ''
    },

    // Existing Methods
    exportToExcel() {
      const worksheet = this.$xlsx.utils.json_to_sheet(this.creditOrder)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Credit Report')
      this.$xlsx.writeFile(workbook, 'credit-report.xlsx')
    },

    countDay(startDate) {
      return dayCount(startDate)
    },

    dueDate(startDate, day) {
      console.log("DATE ", startDate, " to ", day)
      return getNextDate(startDate, day)
    },

    numberWithCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

    whatsappLink(item) {
      const tel = item.client.telephone.trim()
      const completeTel = tel.substring(tel.length - 8)
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`
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
      console.log("Order id", payload.orderId)
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
          this.orderHeaderList = []
          for (const iterator of res.data) {
            this.orderHeaderList.push(iterator)
          }
          console.log("====> " + this.orderHeaderList.length)
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could not load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
      this.isloading = false
    },

    formatDate(date) {
      if (!date) return null
      // If it's already a Date object, format it directly
      if (date instanceof Date) {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${month}/${day}/${year}`
      }
      // If it's not a string, return as is (or handle as needed)
      if (typeof date !== 'string') return date

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      if (!date) return null
      if (typeof date !== 'string') return date
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
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

/* Credit status styling */
.v-chip.error {
  animation: urgentPulse 2s infinite;
}

@keyframes urgentPulse {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.4);
  }

  50% {
    box-shadow: 0 0 0 8px rgba(244, 67, 54, 0);
  }
}

/* Enhanced action buttons */
.d-flex .v-btn {
  min-width: auto !important;
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .d-none.d-md-inline {
    display: none !important;
  }
}
</style>