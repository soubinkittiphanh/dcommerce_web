<template>
  <div class="text-left">
    <div class="mb-5">
      <v-chip class="pa-5 mr-2" color="primary" label text-color="white">
        <v-icon start class="mr-2">mdi-file-document-outline</v-icon>
        <h3>ລາຍການບິນຂາຍ</h3>
      </v-chip>
      <v-chip class="pa-5" color="secondary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start class="mr-2">mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <div class="pa-5 text-center" style="background: white; border-radius: 10px;">
         <v-progress-circular indeterminate color="primary"></v-progress-circular>
         <p class="mt-2">ກຳລັງໂຫລດຂໍ້ມູນ...</p>
      </div>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="W6KiQWtiqBM" />
    </v-dialog>

    <v-dialog v-model="dialogOrderDetail" fullscreen>
      <OrderDetailPosCRUD
        @reload="loadData(); dialogOrderDetail = false"
        :is-quotation="false"
        :key="componentKey"
        :is-update="viewTransaction"
        :headerId="selectedOrder"
        @close-dialog="dialogOrderDetail = false"
      />
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form
        :id="OrderIdSelected"
        :key="componentCancelFormKey"
        @close-dialog="cancelForm = false"
        @reload="cancelForm = false; loadData()"
      />
    </v-dialog>

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

    <v-card elevation="2" class="rounded-lg">
      <v-card-title class="pa-6">
        <v-row wrap>
          <v-col cols="12" md="4">
            <v-menu v-model="menu1" :close-on-content-click="false" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="fromDateLabel" label="ຈາກວັນທີ:" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="fromDate" @input="menu1 = false"></v-date-picker>
            </v-menu>
            <v-menu v-model="menu2" :close-on-content-click="false" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="toDateLabel" label="ຫາວັນທີ:" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="toDate" @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-details class="mb-2"></v-text-field>
            <v-select v-model="selectedPaymentFilter" :items="paymentFilterOptions" item-text="label" item-value="value" label="ປະເພດການຊຳລະ" clearable prepend-icon="mdi-filter"></v-select>
          </v-col>

          <v-col cols="12" md="4" class="text-right">
            <v-btn color="primary" block rounded large @click="createSale" class="mb-2"><v-icon left>mdi-plus</v-icon> Create Sale</v-btn>
            <v-btn color="success" block rounded large @click="printSalesReport" :disabled="!filteredOrderHeaderList.length"><v-icon left>mdi-printer</v-icon> Print Report</v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-6">
        <v-row>
          <v-col cols="12" lg="3">
            <v-card color="primary" dark class="pa-4 rounded-lg elevation-3">
              <div class="text-subtitle-1">ຍອດຂາຍລວມ (Converted)</div>
              <div class="text-h4 font-weight-bold">{{ formatNumber(totalSaleConverted) }}</div>
              <v-divider class="my-2" dark></v-divider>
              <div class="d-flex justify-space-between">
                <span>ຈຳນວນບິນ:</span>
                <span>{{ filteredOrderHeaderList.length }} ບິນ</span>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" lg="9">
            <v-row>
              <v-col v-for="stat in paymentStatistics" :key="stat.code" cols="12" sm="6" md="3">
                <v-card outlined class="payment-summary-card pa-3 text-center rounded-lg" @click="filterByPaymentType(stat.code)" :style="selectedPaymentFilter === stat.code ? 'border: 2px solid #1976d2' : ''">
                  <v-icon :color="stat.color" size="32">mdi-credit-card</v-icon>
                  <div class="text-h6 mt-1">{{ formatNumber(stat.amount) }}</div>
                  <div class="text-caption grey--text">{{ stat.name }}</div>
                  <v-progress-linear :value="stat.percentage" :color="stat.color" class="mt-2" height="6" rounded></v-progress-linear>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-data-table :headers="headers" :items="filteredOrderHeaderList" :search="search" :loading="isloading" class="elevation-1 mt-6">
           <template v-slot:[`item.bookingDate`]="{ item }">
            {{ item.bookingDate.split('T')[0] }}
          </template>
          <template v-slot:[`item.payment.payment_code`]="{ item }">
            <v-chip :color="getPaymentMethodColor(item.payment?.payment_code)" small dark @click="showPaymentDetails(item)">
              {{ isMultiPayment(item) ? 'ຫຼາຍວິທີ' : item.payment?.payment_name }}
            </v-chip>
          </template>
          <template v-slot:[`item.total`]="{ item }">
             {{ formatNumber(item.total) }}
          </template>
          <template v-slot:[`item.print`]="{ item }">
            <v-btn icon color="primary" @click="printDefaultTicket(item)"><v-icon>mdi-printer</v-icon></v-btn>
          </template>
          <template v-slot:[`item.id`]="{ item }">
            <v-btn icon color="info" @click="viewItem(item)"><v-icon>mdi-pencil-box-outline</v-icon></v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { 
  getFormatNum, 
  firstAndLastDateOfLast6Months, 
  mainCompanyInfo, 
  ticketHtml,
  dayCount,
  getLocalDate,
  swalError2
} from '~/common'
import { printSalesReportSummary } from '~/common/sales-report-printer.js'
import { defaultTicketReprint } from '~/common/ticket.js'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import TicketDetailsDialog from '~/components/pos/dialogs/TicketDetailsDialog.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { OrderDetailPosCRUD, TicketDetailsDialog },
  middleware: 'auths',
  data() {
    return {
      isloading: false,
      guidelineDialog: false,
      menu1: false,
      menu2: false,
      fromDate: new Date().toISOString().substr(0, 10),
      toDate: new Date().toISOString().substr(0, 10),
      fromDateLabel: '',
      toDateLabel: '',
      search: '',
      userId: null,
      orderHeaderList: [],
      selectedPaymentFilter: null,
      paymentDetailsDialog: false,
      selectedOrderForPayments: null,
      dialogOrderDetail: false,
      selectedOrder: 0,
      viewTransaction: false,
      componentKey: 0,
      OrderIdSelected: '',
      cancelForm: false,
      componentCancelFormKey: 1,
      headers: [
        { text: 'ວັນທີ', value: 'bookingDate' },
        { text: 'ເລກບິນ', value: 'id' },
        { text: 'ລູກຄ້າ', value: 'client.name' },
        { text: 'ຊຳລະດ້ວຍ', value: 'payment.payment_code' },
        { text: 'ສະກຸນເງິນ', value: 'currency.code' },
        { text: 'ຍອດລວມ', value: 'total', align: 'end' },
        { text: 'ພິມ', value: 'print', sortable: false },
        { text: 'Edit', value: 'id', sortable: false },
      ]
    }
  },
  computed: {
    ...mapGetters(['findAllCurrency', 'findAllPayment', 'currentSelectedLocation', 'findSelectedTerminal', 'findAllTerminal', 'findAllProduct']),
    
    companyData() { return typeof mainCompanyInfo === 'function' ? mainCompanyInfo() : {} },
    ticketCommon() { return typeof ticketHtml === 'function' ? ticketHtml() : '' },
    companyLogo() { 
      const data = this.companyData;
      if (data?.apiData?.profile_image_path) return `${this.$axios.defaults.baseURL}/${data.apiData.profile_image_path}`;
      return '';
    },
    totalSaleConverted() {
      return this.filteredOrderHeaderList.reduce((sum, item) => sum + this.getConvertedSaleTotal(item), 0)
    },
    filteredOrderHeaderList() {
      let list = this.orderHeaderList.filter(el => el.isActive);
      if (this.selectedPaymentFilter) {
        list = list.filter(item => {
          if (this.selectedPaymentFilter === 'MULTI') return this.isMultiPayment(item);
          return item.payment?.payment_code === this.selectedPaymentFilter;
        });
      }
      return list;
    },
    paymentStatistics() {
      const stats = {};
      this.filteredOrderHeaderList.forEach(item => {
        const totalInLocal = this.getConvertedSaleTotal(item);
        if (this.isMultiPayment(item)) {
          const rawPaidSum = item.payments.reduce((s, p) => s + Number(p.amount), 0);
          item.payments.forEach(p => {
            const code = p.paymentMethod?.payment_code || 'OTHER';
            const weight = rawPaidSum > 0 ? (Number(p.amount) / rawPaidSum) : 0;
            if (!stats[code]) {
              stats[code] = { code, name: p.paymentMethod?.payment_name || code, amount: 0, count: 0, color: 'primary' };
            }
            stats[code].amount += (totalInLocal * weight);
            stats[code].count++;
          });
        } else {
          const code = item.payment?.payment_code || 'CASH';
          if (!stats[code]) {
            stats[code] = { code, name: item.payment?.payment_name || code, amount: 0, count: 0, color: 'success' };
          }
          stats[code].amount += totalInLocal;
          stats[code].count++;
        }
      });
      const total = Object.values(stats).reduce((s, i) => s + i.amount, 0);
      return Object.values(stats).map(s => ({ ...s, percentage: total > 0 ? (s.amount / total) * 100 : 0 }));
    },
    paymentFilterOptions() {
      const base = [{ label: 'ທັງໝົດ', value: null }, { label: 'ຊຳລະຫຼາຍວິທີ', value: 'MULTI' }];
      const dynamic = (this.findAllPayment || []).map(p => ({ label: p.payment_name, value: p.payment_code }));
      return [...base, ...dynamic];
    }
  },
  watch: {
    fromDate() { this.fromDateLabel = this.formatDateDisplay(this.fromDate); this.loadData(); },
    toDate() { this.toDateLabel = this.formatDateDisplay(this.toDate); this.loadData(); }
  },
  methods: {
    getConvertedSaleTotal(sale) {
      const currencies = this.findAllCurrency || [];
      const headerCcyId = sale.currencyId;
      if (!sale.lines?.length) return Number(sale.total || 0);
      return sale.lines.reduce((sum, line) => {
        const lineAmt = Number(line.total || 0);
        const ccyId = line.currencyId || headerCcyId;
        const ccy = currencies.find(c => Number(c.id) === Number(ccyId));
        if (!ccy || Number(ccy.isLocalCCY) === 1) return sum + lineAmt;
        const rate = Number(line.exchangeRate || 1);
        const converted = ccy.exchangeDirection === 'foreign_to_local' ? (lineAmt * rate) : (lineAmt / rate);
        return sum + converted;
      }, 0);
    },
    async loadData() {
      this.isloading = true;
      try {
        const params = { startDate: this.fromDate, endDate: this.toDate, userId: this.userId };
        const res = await this.$axios.get('api/sale/findByDate', { params: { date: params } });
        this.orderHeaderList = res.data;
      } catch (e) {
        console.error(e);
      } finally { this.isloading = false; }
    },
    formatNumber(val) { return getFormatNum(Math.round(val)) },
    formatDateDisplay(date) { const [y, m, d] = date.split('-'); return `${m}/${d}/${y}`; },
    isMultiPayment(item) { return item.payments && item.payments.length > 1 },
    showPaymentDetails(item) { this.selectedOrderForPayments = item; this.paymentDetailsDialog = true; },
    onTicketDialogClose() { this.paymentDetailsDialog = false; },
    onPrintTicket(item) { this.printDefaultTicket(item); },
    onPrintPaymentDetails(item) { console.log('Print payment details', item.id) },
    filterByPaymentType(type) { this.selectedPaymentFilter = (this.selectedPaymentFilter === type) ? null : type; },
    viewItem(item) { this.selectedOrder = item.id; this.viewTransaction = true; this.componentKey++; this.dialogOrderDetail = true; },
    createSale() { this.selectedOrder = 0; this.viewTransaction = false; this.componentKey++; this.dialogOrderDetail = true; },
    getPaymentMethodColor(code) {
      const map = { CASH: 'green', QR: 'purple', TRANSFER_BCEL: 'blue', CARD: 'indigo', COD: 'orange' };
      return map[code] || 'primary';
    },
    getPaymentMethodIcon(code) {
      const map = { CASH: 'mdi-cash', QR: 'mdi-qrcode', TRANSFER_BCEL: 'mdi-bank-transfer', CARD: 'mdi-credit-card', COD: 'mdi-truck-delivery' };
      return map[code] || 'mdi-credit-card-outline';
    },
    printSalesReport() {
       printSalesReportSummary({
          orderHeaderList: this.orderHeaderList,
          paymentStatistics: this.paymentStatistics,
          filteredOrderHeaderList: this.filteredOrderHeaderList,
          fromDate: this.fromDate,
          toDate: this.toDate,
          companyData: this.companyData,
          companyLogo: this.companyLogo,
          formatNumber: this.formatNumber,
          user: this.$auth.user
        })
    },
    printDefaultTicket(data) {
      const transformedLines = data.lines.map((line) => ({
        id: line.product?.id || line.productId,
        pro_name: line.product?.pro_name || 'Unknown',
        qty: line.quantity,
        localPrice: line.price,
        saleCurrencyId: line.currencyId,
        isGift: line.isGift || false,
        total: line.total
      }));
      defaultTicketReprint({
        productCart: { lines: transformedLines },
        findAllProduct: this.findAllProduct,
        formatNumber: this.formatNumber,
        discount: data.discount,
        grandTotal: data.total,
        companyLogo: this.companyLogo,
        user: this.$auth.user,
        ticketCommon: this.ticketCommon,
        currentPaymentCode: data.payment?.payment_code || 'CASH',
        bookingDate: data.createdAt,
        companyData: this.companyData,
      });
    }
  },
  mounted() {
    this.fromDateLabel = this.formatDateDisplay(this.fromDate);
    this.toDateLabel = this.formatDateDisplay(this.toDate);
  }
}
</script>

<style scoped>
.payment-summary-card { cursor: pointer; transition: all 0.3s ease; }
.payment-summary-card:hover { transform: translateY(-4px); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }

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