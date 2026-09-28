<template>
  <div class="sales-report-container">
    <!-- MODERN HEADER SECTION -->
    <div class="header-section">
      <div class="d-flex align-center justify-space-between mb-6">
        <div class="d-flex align-center">
          <v-btn icon color="primary" class="mr-4 shadow-sm" @click="$router.back()" large>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <div>
            <h1 class="font-weight-bold primary--text mb-0">ລາຍງານການຂາຍຕາມຜູ້ຂາຍ</h1>
            <p class="subtitle-2 grey--text mb-0">Sales Performance Tracking by Personnel & Payment Breakdown</p>
          </div>
        </div>
        <div class="d-flex align-center gap-2">
          <v-btn color="secondary" dark class="rounded-lg shadow-sm px-6" @click="guidelineDialog = true">
            <v-icon left>mdi-lifebuoy</v-icon>
            ຄູ່ມືການນຳໃຊ້
          </v-btn>
          <v-btn color="lightprimary" dark class="rounded-lg shadow-sm px-6" @click="exportSimplePDFAudit">
            <v-icon left>mdi-file-chart</v-icon>
            PDF Audit
          </v-btn>
        </div>
      </div>
    </div>

    <!-- DIALOGS -->
    <v-dialog v-model="isloading" hide-overlay persistent width="320">
      <v-card class="loading-card">
        <v-card-text class="text-center pa-6">
          <v-progress-circular size="48" color="primary" indeterminate></v-progress-circular>
          <div class="mt-4 font-weight-medium">ກຳລັງໂຫຼດຂໍ້ມູນ...</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="W6KiQWtiqBM"></youtube-player>
    </v-dialog>

    <v-dialog v-model="dialogOrderDetail" fullscreen>
      <OrderDetailPosCRUD @reload="loadData(); dialogOrderDetail = false" :is-quotation="false" :key="componentKey"
        :is-update="viewTransaction" :headerId="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPosCRUD>
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :key="componentCancelFormKey" @close-dialog="cancelForm = false"
        @reload="cancelForm = false, loadData()"></cancel-ticket-form>
    </v-dialog>

    <!-- COMPACT ACTION BAR (FILTERS) -->
    <v-card class="filter-strip mb-6 shadow-sm">
      <v-card-text class="pa-3">
        <v-row align="center" no-gutters>
          <!-- Date Pickers -->
          <v-col cols="12" md="3" class="px-2">
            <div class="d-flex align-center gap-2">
              <v-menu v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y
                min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ" prepend-inner-icon="mdi-calendar" readonly
                    outlined dense hide-details class="compact-input" v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
              </v-menu>
              <v-icon small class="grey--text">mdi-arrow-right</v-icon>
              <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
                min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ" prepend-inner-icon="mdi-calendar" readonly
                    outlined dense hide-details class="compact-input" v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
              </v-menu>
            </div>
          </v-col>

          <!-- User Filter -->
          <v-col cols="12" md="2" class="px-2">
            <v-autocomplete v-model="creteria.userId" :items="userList" item-text="cus_name" item-value="id"
              label="ພະນັກງານຂາຍ" prepend-inner-icon="mdi-account-tie" outlined dense hide-details
              class="compact-input" @change="loadData"></v-autocomplete>
          </v-col>

          <!-- Payment Type Filter -->
          <v-col cols="12" md="2" class="px-2">
            <v-select v-model="selectedPaymentFilter" :items="paymentFilterOptions" item-text="label"
              item-value="value" label="ຊ່ອງທາງການຊຳລະ" prepend-inner-icon="mdi-credit-card-outline" outlined dense
              hide-details clearable class="compact-input"></v-select>
          </v-col>

          <!-- Search -->
          <v-col cols="12" md="2" class="px-2">
            <v-text-field v-model="search" label="ຊອກຫາ..." prepend-inner-icon="mdi-magnify" outlined dense hide-details
              clearable class="compact-input"></v-text-field>
          </v-col>

          <!-- Action Buttons -->
          <v-col cols="12" md="3" class="px-2 text-right d-flex justify-end gap-2">
            <v-btn color="primary" class="rounded-md shadow-sm" icon @click="loadData">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-btn color="success" class="rounded-md shadow-sm px-4" @click="exportToExcel">
              <v-icon left>mdi-microsoft-excel</v-icon>
              Excel
            </v-btn>
            <v-btn color="primary" dark class="rounded-md shadow-sm px-4" @click="createSale">
              <v-icon left>mdi-plus</v-icon>
              Create
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- SUMMARY DASHBOARD -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="indigo lighten-5" size="56" class="mb-3">
              <v-icon color="indigo darken-1" size="32">mdi-account-group</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase font-weight-bold mb-1">ຈຳນວນບິນທັງໝົດ</div>
            <div class="text-h5 font-weight-black indigo--text">{{ numberWithCommas(filteredOrderHeaderList.length) }}
              <span class="caption grey--text font-weight-regular" v-if="filteredOrderHeaderList.length !== activeOrderHeaderList.length">
                / {{ numberWithCommas(activeOrderHeaderList.length) }}
              </span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="green lighten-5" size="56" class="mb-3">
              <v-icon color="green darken-1" size="32">mdi-bank</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase font-weight-bold mb-1">ລາຍຮັບລວມ ({{ localCurrency?.code || 'LAK' }})</div>
            <div class="text-h5 font-weight-black green--text">{{ getFormatNum(summaryNetLocal) }}</div>
            <div class="caption grey--text mt-1">ຍອດເຕັມ: {{ getFormatNum(summaryGrossLocal) }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="deep-purple lighten-5" size="56" class="mb-3">
              <v-icon color="deep-purple darken-1" size="32">mdi-chart-bar-stacked</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase font-weight-bold mb-1">ສ່ວນຫຼຸດລວມ</div>
            <div class="text-h5 font-weight-black deep-purple--text">{{ getFormatNum(summaryDiscountLocal) }}</div>
            <div class="caption grey--text mt-1">{{ localCurrency?.code || 'LAK' }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="metric-card shadow-sm h-100 border-left-primary">
          <v-card-text class="pa-5">
            <div class="grey--text font-weight-bold mb-2">Performance Summary</div>
            <div class="d-flex align-center justify-space-between mb-2">
              <span class="caption">ສະເລ່ຍຕໍ່ບິນ:</span>
              <span class="font-weight-bold primary--text font-numeric">{{ averageOrderValue }} {{ localCurrency?.code || 'LAK' }}</span>
            </div>
            <v-divider class="my-2"></v-divider>
            <div class="d-flex align-center justify-space-between">
              <span class="caption">ຍອດ COD ຄ້າງ:</span>
              <span class="font-weight-bold orange--text font-numeric">{{ unpaidCodOrder.sale }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- PAYMENT TYPE BREAKDOWN KPI SECTION -->
    <v-card class="shadow-sm rounded-xl mb-6 pa-5 bg-white">
      <div class="d-flex align-center justify-space-between mb-4">
        <div class="d-flex align-center">
          <v-avatar color="primary lighten-5" size="40" class="mr-3">
            <v-icon color="primary">mdi-credit-card-outline</v-icon>
          </v-avatar>
          <div>
            <h3 class="font-weight-bold mb-0">ສະຫຼຸບລາຍຮັບຕາມຊ່ອງທາງການຊຳລະ (Payment Type Summary)</h3>
            <span class="caption grey--text">ຄລິກໃສ່ກາດເພື່ອຟິວເຕີຕາມປະເພດການຊຳລະ</span>
          </div>
        </div>

        <div v-if="selectedPaymentFilter" class="d-flex align-center">
          <v-chip color="primary" small close @click:close="clearPaymentFilter" class="font-weight-medium">
            <v-icon left small>mdi-filter</v-icon>
            ກຳລັງສະແດງ: {{ getFilterDisplayName(selectedPaymentFilter) }}
          </v-chip>
        </div>
      </div>

      <v-row>
        <v-col v-for="(item, index) in paymentStatistics" :key="index" cols="12" sm="6" md="4" lg="3">
          <div
            class="payment-kpi-card pa-4 rounded-xl"
            :class="{ 'payment-card-active': selectedPaymentFilter === item.code }"
            @click="filterByPaymentType(item.code)"
          >
            <div class="d-flex justify-space-between align-center mb-3">
              <v-avatar :color="item.color" size="42" class="elevation-1">
                <v-icon color="white" small>{{ item.icon }}</v-icon>
              </v-avatar>
              <v-chip x-small :color="item.color" text-color="white" class="font-weight-bold">
                {{ item.percentage.toFixed(1) }}%
              </v-chip>
            </div>

            <div class="font-weight-bold grey--text text--darken-2 mb-1 text-truncate" :title="item.title">
              {{ item.title }}
            </div>

            <div class="text-h6 font-weight-black font-numeric" :class="`${item.color}--text text--darken-2`">
              {{ formatNumber(item.total) }} <small class="caption font-weight-medium">{{ localCurrency?.code || 'LAK' }}</small>
            </div>

            <!-- Gross & Discount breakdown -->
            <div class="d-flex justify-space-between align-center mt-2 caption grey--text">
              <span>ຍອດເຕັມ: {{ formatNumber(item.gross) }}</span>
              <span v-if="item.discount > 0" class="red--text">-{{ formatNumber(item.discount) }}</span>
            </div>

            <!-- Multi-Currency Breakdown inside Card if exists -->
            <div v-if="item.groupedCurrency && Object.keys(item.groupedCurrency).length > 1" class="currency-breakdown-box mt-2 pa-2 rounded">
              <div v-for="(val, code) in item.groupedCurrency" :key="code" class="d-flex justify-space-between align-center mb-1" style="font-size: 0.7rem;">
                <span class="font-weight-bold grey--text text--darken-2">{{ code }}:</span>
                <span class="font-numeric font-weight-medium">{{ formatNumber(val.originalNet) }} {{ code }}</span>
              </div>
            </div>

            <v-progress-linear :value="item.percentage" :color="item.color" height="5" rounded class="mt-3"></v-progress-linear>

            <div class="caption text-right mt-2 grey--text">
              <v-icon x-small color="grey">mdi-receipt</v-icon> {{ item.count }} ບິນ ({{ item.count }} Txns)
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- DATA TABLE -->
    <v-card class="shadow-sm rounded-xl overflow-hidden">
      <v-card-title class="pa-4 grey lighten-5 d-flex align-center justify-space-between" v-if="selectedPaymentFilter">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-filter-check</v-icon>
          <span class="subtitle-2 font-weight-bold primary--text">
            ກຳລັງສະແດງລາຍການທີ່ຊຳລະດ້ວຍ: {{ getFilterDisplayName(selectedPaymentFilter) }} ({{ orderLineByUser.length }} ລາຍການ)
          </span>
        </div>
        <v-btn text small color="grey darken-1" @click="clearPaymentFilter">
          <v-icon left small>mdi-close</v-icon>ລຶບຟິວເຕີ
        </v-btn>
      </v-card-title>

      <v-data-table :headers="enhancedHeaders" :items="orderLineByUser" :search="search" :loading="isloading"
        class="compact-table" :items-per-page="15">

        <template v-slot:[`item.header.id`]="{ item }">
          <span class="font-weight-bold primary--text clickable-order" @click="viewItem(item.header)">
            #{{ item.header ? item.header.id : item.id }}
          </span>
        </template>

        <template v-slot:[`item.header.bookingDate`]="{ item }">
          <v-chip x-small color="grey lighten-4" class="font-weight-medium">
            {{ item.header && item.header.bookingDate ? item.header.bookingDate.split('T')[0] : '-' }}
          </v-chip>
        </template>

        <template v-slot:[`item.product.pro_name`]="{ item }">
          <span class="font-weight-medium">{{ item.product ? item.product.pro_name : '-' }}</span>
        </template>

        <template v-slot:[`item.price`]="{ item }">
          <span class="font-numeric">{{ numberWithCommas(item.price) }}</span>
        </template>

        <template v-slot:[`item.discount`]="{ item }">
          <span v-if="item.discount > 0" class="orange--text font-numeric text-small">-{{ numberWithCommas(item.discount) }}</span>
          <span v-else class="grey--text text--lighten-1">0</span>
        </template>

        <template v-slot:[`item.total`]="{ item }">
          <span class="font-weight-bold font-numeric green--text">{{ numberWithCommas(item.total) }}</span>
        </template>

        <!-- Payment Method Column -->
        <template v-slot:[`item.paymentMethod`]="{ item }">
          <div v-if="item.header">
            <div v-if="isMultiPayment(item.header)">
              <v-chip color="teal darken-1" small dark class="font-weight-medium elevation-1" @click.stop="viewItem(item.header)">
                <v-icon left x-small>mdi-credit-card-multiple</v-icon>
                ຫຼາຍວິທີ ({{ getPaymentMethodsCount(item.header) }})
              </v-chip>
            </div>
            <div v-else>
              <v-chip :color="getPaymentMethodColor(getPaymentCode(item.header))" small dark class="font-weight-medium elevation-1">
                <v-icon left x-small>{{ getPaymentMethodIcon(getPaymentCode(item.header)) }}</v-icon>
                {{ getPaymentName(item.header) }}
              </v-chip>
            </div>
          </div>
          <span v-else class="grey--text">N/A</span>
        </template>

        <template v-slot:[`item.user.cus_name`]="{ item }">
          <div class="d-flex align-center">
            <v-avatar size="24" color="primary lighten-4" class="mr-2">
              <span class="primary--text font-weight-bold caption">{{ item.user && item.user.cus_name ? item.user.cus_name.charAt(0) : 'U' }}</span>
            </v-avatar>
            <span class="text-truncate" style="max-width: 120px;">{{ item.user ? item.user.cus_name : '-' }}</span>
          </div>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex gap-1 justify-center">
            <v-btn icon small color="primary" @click="viewItem(item.header)" title="ເບິ່ງລາຍລະອຽດ">
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
            <v-btn icon small color="success" @click="whatsappLink(item.header)" v-if="item.header && item.header.cusTel" title="Whatsapp">
              <v-icon small>mdi-whatsapp</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth } from '~/common'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'

export default {
  components: { OrderDetailPos, OrderSumaryCardPos, OrderDetailPosCRUD },
  middleware: 'auths',
  data() {
    return {
      guidelineDialog: false,
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
      orderHeaderList: [],
      loadDataNoCancelOrder: [],
      codPaid: [],
      componentCancelFormKey: 1,
      cancelForm: false,
      OrderIdSelected: '',
      userList: [],
      selectedPaymentFilter: null,
      creteria: {
        userId: -1,
      },
      enhancedHeaders: [
        {
          text: 'ເລກອໍເດີ',
          align: 'center',
          value: 'header.id',
          sortable: true,
        },
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'header.bookingDate',
          sortable: true,
        },
        {
          text: 'ສິນຄ້າ',
          align: 'left',
          value: 'product.pro_name',
          sortable: true,
        },
        {
          text: 'ຈ/ນ',
          align: 'center',
          value: 'quantity',
          sortable: true,
        },
        {
          text: 'ລາຄາ',
          align: 'right',
          value: 'price',
          sortable: true,
        },
        {
          text: 'ສ່ວນຫຼຸດ',
          align: 'right',
          value: 'discount',
          sortable: true,
        },
        {
          text: 'ລວມ',
          align: 'right',
          value: 'total',
          sortable: true,
        },
        {
          text: 'ຊຳລະດ້ວຍ',
          align: 'center',
          value: 'paymentMethod',
          sortable: false,
        },
        {
          text: 'ຜູ້ຂາຍ',
          align: 'left',
          value: 'user.cus_name',
          sortable: true,
        },
        {
          text: 'ການດຳເນີນການ',
          align: 'center',
          value: 'actions',
          sortable: false,
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
    await this.loadUserData()
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
      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllCurrency',
      'findLocalCurrency',
      'findAllTerminal',
      'findSelectedTerminal'
    ]),

    localCurrency() {
      return (
        this.findAllCurrency?.find(
          (c) => c.isLocalCCY === true || c.isLocalCCY === 1
        ) || this.findLocalCurrency || { code: 'LAK' }
      )
    },

    activeOrderHeaderList() {
      return this.orderHeaderList.filter(
        (el) => el['isActive'] == true && el['paymentId'] != 2
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
          default:
            if (this.isMultiPayment(item)) {
              return (
                item.payments &&
                item.payments.some(
                  (payment) =>
                    payment.paymentMethod?.payment_code === this.selectedPaymentFilter ||
                    payment.payment_code === this.selectedPaymentFilter
                )
              )
            } else {
              const paymentCode = this.getPaymentCode(item)
              return paymentCode === this.selectedPaymentFilter
            }
        }
      })
    },

    orderLineByUser() {
      let lines = []
      for (const iterator of this.filteredOrderHeaderList) {
        for (const line of iterator['lines'] || []) {
          line['user'] = iterator.user
          line['header'] = iterator
        }
        lines.push(...(iterator['lines'] || []))
      }
      return lines
    },

    paymentFilterOptions() {
      const options = [{ label: 'ທັງໝົດ', value: null }]

      if (this.findAllPayment && this.findAllPayment.length > 0) {
        this.findAllPayment.forEach((payment) => {
          if (payment.isActive) {
            options.push({
              label: payment.payment_name || payment.payment_code,
              value: payment.payment_code,
            })
          }
        })
      }

      options.push(
        { label: 'ຊຳລະແບບດຽວ (Single)', value: 'SINGLE' },
        { label: 'ຊຳລະຫຼາຍວິທີ (Multi)', value: 'MULTI' }
      )

      return options
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
              code: p.paymentMethod?.payment_code || p.payment_code,
              name: p.paymentMethod?.payment_name || p.payment_name,
              amountLocal: pAmountLocal,
              currencyCode: pCcy?.code || this.localCurrency?.code || 'LAK',
              exchangeRate: rate,
            })
          })
        } else {
          const pMethod = header.payment || header.payments?.[0]?.paymentMethod
          const pCcy = this.findAllCurrency?.find(
            (c) => Number(c.id) === Number(header.payments?.[0]?.currencyId || header.currencyId)
          )
          const isLocal = pCcy?.isLocalCCY === true || pCcy?.isLocalCCY === 1
          const rate = isLocal ? 1 : header.payments?.[0]?.exchangeRate || header.exchangeRate || 1
          const pAmountLocal =
            header.payments?.[0]?.amount !== undefined
              ? Number(header.payments[0].amount) * rate
              : headerNetLocal

          paymentList.push({
            code: pMethod?.payment_code || this.getPaymentCode(header),
            name: pMethod?.payment_name || this.getPaymentName(header),
            amountLocal: pAmountLocal,
            currencyCode: pCcy?.code || this.localCurrency?.code || 'LAK',
            exchangeRate: rate,
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
          const proportion = headerNetLocal > 0 ? pNetLocal / headerNetLocal : 1

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

          const cCode = p.currencyCode || 'LAK'
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

      return Object.values(stats)
        .map((stat) => ({
          ...stat,
          percentage: grandTotalLocal > 0 ? (stat.total / grandTotalLocal) * 100 : 0,
        }))
        .sort((a, b) => b.total - a.total)
    },

    summaryGrossLocal() {
      return this.filteredOrderHeaderList.reduce((sum, header) => {
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
      return this.filteredOrderHeaderList.reduce((sum, header) => {
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
      return this.filteredOrderHeaderList.reduce((sum, header) => {
        const headerCcy = this.findAllCurrency?.find(
          (c) => Number(c.id) === Number(header.currencyId)
        )
        const isHeaderLocal =
          headerCcy?.isLocalCCY === true || headerCcy?.isLocalCCY === 1
        const headerRate = isHeaderLocal ? 1 : header.exchangeRate || 1
        return sum + (header.total || 0) * headerRate
      }, 0)
    },

    computedDateFormatted() {
      return this.formatDate(this.date)
    },

    currencyList() {
      return this.findAllCurrency
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
        total += parseInt(el.cartTotal || 0)
      })
      return total
    },

    user() {
      return this.$auth.user || ''
    },

    totalDiscount() {
      let total = 0
      this.filteredOrderHeaderList.forEach((el) => {
        total += parseInt(el.discount || 0)
      })
      return total
    },

    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach((element) => {
        const hasCodPayment =
          (element.payment && typeof element.payment === 'object' && element.payment.payment_code?.includes('COD')) ||
          (element.payments && element.payments.some((p) => p.paymentMethod?.payment_code?.includes('COD') || p.payment_code?.includes('COD'))) ||
          (typeof element.payment === 'string' && element.payment.includes('COD'))

        if (element.paymentStatus === 'PENDING' && hasCodPayment) {
          txnList.push(element)
        }
      })
      const totalPrice = txnList.reduce((total, item) => {
        return total + (item.cartTotal || item.total || 0)
      }, 0)
      const totalDiscount = txnList.reduce((total, item) => {
        return total + (item.discount || 0)
      }, 0)

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice
      orderDetail.sale = this.getFormatNum(totalPrice)
      orderDetail.discount = this.getFormatNum(totalDiscount)
      orderDetail.gross = this.getFormatNum(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail
    },

    averageOrderValue() {
      if (this.filteredOrderHeaderList.length === 0) return '0.00'
      const total = this.summaryNetLocal / this.filteredOrderHeaderList.length
      return this.getFormatNum(total)
    },
  },

  methods: {
    isMultiPayment(item) {
      return (
        item &&
        item.payments &&
        Array.isArray(item.payments) &&
        item.payments.length > 1
      )
    },

    getPaymentMethodsCount(item) {
      if (this.isMultiPayment(item)) {
        return item.payments.length
      }
      return item && item.payment ? 1 : 0
    },

    getPaymentCode(item) {
      if (!item) return 'N/A'
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
      if (!item) return 'N/A'
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

    getPaymentMethodColor(paymentCode) {
      if (!paymentCode) return 'grey'
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
        MULTI: 'teal darken-1',
      }

      if (colorMap[paymentCode]) {
        return colorMap[paymentCode]
      }

      const code = paymentCode.toUpperCase()
      if (code.includes('CASH') || code.includes('MONEY')) return 'green'
      if (code.includes('QR') || code.includes('SCAN')) return 'purple'
      if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'blue'
      if (code.includes('CARD') || code.includes('CREDIT')) return 'indigo'
      if (code.includes('COD') || code.includes('DELIVERY')) return 'orange'
      if (code.includes('MOBILE') || code.includes('PHONE')) return 'pink'

      return 'primary'
    },

    getPaymentMethodIcon(paymentCode) {
      if (!paymentCode) return 'mdi-help-circle'
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
        MULTI: 'mdi-credit-card-multiple',
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
      if (code.includes('MULTI')) return 'mdi-credit-card-multiple'

      return 'mdi-cash-multiple'
    },

    filterByPaymentType(paymentType) {
      if (this.selectedPaymentFilter === paymentType) {
        this.clearPaymentFilter()
      } else {
        this.selectedPaymentFilter = paymentType
      }
    },

    clearPaymentFilter() {
      this.selectedPaymentFilter = null
    },

    getFilterDisplayName(filterValue) {
      const option = this.paymentFilterOptions.find((opt) => opt.value === filterValue)
      return option ? option.label : filterValue
    },

    exportSimplePDFAudit() {
      this.$toast.success('PDF audit feature coming soon!')
    },

    exportToExcel() {
      let messageLineExport = []
      for (const iterator of this.orderLineByUser) {
        const user = iterator['user']?.['cus_name'] || ''
        const product = iterator['product']?.['pro_name'] || ''
        const header = iterator['header'] || {}
        const paymentName = this.getPaymentName(header)

        const newRow = {
          'ເລກບິນ': header.id || '',
          'ວັນທີ': header.bookingDate ? header.bookingDate.split('T')[0] : '',
          'ສິນຄ້າ': product,
          'ຈຳນວນ': iterator['quantity'],
          'ລາຄາ': iterator['price'],
          'ສ່ວນຫຼຸດ': iterator['discount'],
          'ລວມ': iterator['total'],
          'ຊຳລະດ້ວຍ': paymentName,
          'ຜູ້ຂາຍ': user,
        }
        messageLineExport.push(newRow)
      }
      const worksheet = this.$xlsx.utils.json_to_sheet(messageLineExport)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
      this.$xlsx.writeFile(workbook, 'sales_report_by_user.xlsx')
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
      return getNextDate(startDate, day)
    },

    numberWithCommas(value) {
      return (value || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

    whatsappLink(item) {
      if (!item || !item.cusTel) return
      const tel = item.cusTel.trim()
      const completeTel = tel.substring(tel.length - 8)
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`
      window.open(this.whatsappContactLink, '_blank')
    },

    getFormatNum(val) {
      return new Intl.NumberFormat().format(val || 0)
    },

    formatNumber(val) {
      return new Intl.NumberFormat().format(val || 0)
    },

    editItem(item) {
      this.componentKey += 1
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail
    },

    viewItem(item) {
      if (!item) return
      this.componentKey += 1
      this.viewTransaction = true
      this.selectedOrder = item.id
      this.dialogOrderDetail = true
    },

    cancelItem(payload) {
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
        userId: this.creteria.userId,
      }
      let apiLine = 'api/sale/findByDate'
      if (date.userId && date.userId !== -1) {
        apiLine = 'api/sale/findByDateAndUser'
      }

      try {
        const response = await this.$axios.get(apiLine, { params: { date } })
        this.orderHeaderList = response.data || []
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could not load data ' + JSON.stringify(error))
      }

      this.isloading = false
    },

    async loadUserData() {
      this.isloading = true
      let apiLine = 'api/user/find'
      try {
        const response = await this.$axios.get(apiLine)
        this.userList = response.data || []
        this.userList.push({ id: -1, cus_name: 'ທັງຫມົດ' })
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could not load user data ' + JSON.stringify(error))
      }
      this.isloading = false
    },

    formatDate(date) {
      if (!date) return null
      const formattedDate = this.formatDateToISO(date)
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
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
.sales-report-container {
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 24px;
}

.header-section {
  margin-bottom: 24px;
}

.shadow-sm {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
}

.metric-card {
  border-radius: 16px !important;
  border: 1px solid #edf2f7 !important;
  background: white;
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06) !important;
}

.filter-strip {
  border-radius: 14px !important;
  background: white !important;
  border: 1px solid #e2e8f0 !important;
}

.compact-input ::v-deep .v-input__control {
  min-height: 40px !important;
}

.compact-input ::v-deep .v-input__slot {
  background: #f8fafc !important;
  border: 1px solid #e2e8f0 !important;
}

.gap-2 {
  gap: 8px;
}

.gap-1 {
  gap: 4px;
}

.rounded-md {
  border-radius: 8px !important;
}

.compact-table {
  background: white !important;
}

.compact-table ::v-deep th {
  background-color: #f8fafc !important;
  color: #64748b !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  font-size: 0.75rem !important;
  letter-spacing: 0.025em;
  padding: 12px 16px !important;
}

.compact-table ::v-deep td {
  padding: 12px 16px !important;
  border-bottom: 1px solid #f1f5f9 !important;
}

.font-numeric {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.011em;
}

.border-left-primary {
  border-left: 4px solid var(--v-primary-base) !important;
}

.loading-card {
  border-radius: 16px !important;
}

/* Payment KPI Card Styles */
.payment-kpi-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
}

.payment-kpi-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  border-color: #cbd5e1;
  background: white;
}

.payment-card-active {
  background: white !important;
  border: 2px solid var(--v-primary-base) !important;
  box-shadow: 0 8px 24px rgba(var(--v-primary-base), 0.15) !important;
}

.currency-breakdown-box {
  background: #f1f5f9;
  border: 1px dashed #cbd5e1;
}

.clickable-order {
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.2s;
}

.clickable-order:hover {
  color: #1565c0 !important;
}
</style>