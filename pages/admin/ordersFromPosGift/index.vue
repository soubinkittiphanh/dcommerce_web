<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="success" label text-color="white">
        <v-icon start>mdi-gift</v-icon>
        <h3>ລາຍງານບິນຂອງຂວັນ</h3>
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

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
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

    <!-- Gift Details Dialog -->
    <v-dialog v-model="giftDetailsDialog" max-width="900">
      <v-card>
        <v-card-title class="success white--text">
          <v-icon left>mdi-gift</v-icon>
          ລາຍລະອຽດຂອງຂວັນ - ບິນເລກທີ {{ selectedOrderForGifts?.id }}
        </v-card-title>
        <v-card-text class="pa-4" v-if="selectedOrderForGifts">
          <v-row>
            <v-col cols="6">
              <v-card outlined class="pa-3">
                <h4>ຂໍ້ມູນພື້ນຖານ</h4>
                <div>
                  <strong>ລູກຄ້າ:</strong>
                  {{ selectedOrderForGifts.client?.name || 'Walk-in Customer' }}
                </div>
                <div>
                  <strong>ວັນທີ:</strong>
                  {{ selectedOrderForGifts.bookingDate }}
                </div>
                <div>
                  <strong>ຍອດລວມ:</strong>
                  {{ formatNumber(selectedOrderForGifts.total) }} LAK
                </div>
                <div>
                  <strong>ສ່ວນຫລຸດ:</strong>
                  {{ formatNumber(selectedOrderForGifts.discount) }} LAK
                </div>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card outlined class="pa-3">
                <h4>ສະຖິຕິຂອງຂວັນ</h4>
                <div>
                  <strong>ຈຳນວນຂອງຂວັນ:</strong>
                  {{ getGiftItemsCount(selectedOrderForGifts) }}
                </div>
                <div>
                  <strong>ມູນຄ່າຂອງຂວັນ:</strong>
                  {{
                    formatNumber(getGiftItemsValue(selectedOrderForGifts))
                  }}
                  LAK
                </div>
              </v-card>
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>

          <!-- Gift Items Details -->
          <h4 class="mb-3">ລາຍການຂອງຂວັນ</h4>
          <v-data-table
            :headers="giftDetailsHeaders"
            :items="getGiftItems(selectedOrderForGifts)"
            hide-default-footer
            disable-pagination
            class="elevation-1"
          >
            <template v-slot:[`item.productName`]="{ item }">
              <v-chip color="success" small dark>
                <v-icon left small>mdi-gift</v-icon>
                {{ item.productName }}
              </v-chip>
            </template>
            <template v-slot:[`item.total`]="{ item }">
              <strong>{{ formatNumber(item.total) }} LAK</strong>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="giftDetailsDialog = false">
            ປິດ
          </v-btn>
          <v-btn
            color="success"
            @click="printGiftDetails"
            v-if="selectedOrderForGifts"
          >
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
            </v-col>
            <v-col cols="6" class="text-left">
              <v-btn
                size="large"
                variant="outlined"
                @click="exportToExcel"
                class="success"
                rounded
              >
                <span class="mdi mdi-microsoft-excel"></span>Export Gift Report
              </v-btn>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn
                size="large"
                variant="outlined"
                @click="loadData"
                class="success"
                rounded
              >
                <span class="mdi mdi-cloud-download"></span>
                ດຶງລາຍງານຂອງຂວັນ
              </v-btn>
            </v-col>
          </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-layout row wrap>
            <v-row>
              <v-col cols="4" lg="4">
                <v-card outlined class="pa-3 text-center">
                  <h4 class="success--text">{{ giftOrdersCount }}</h4>
                  <div class="">ຈຳນວນບິນທີ່ມີຂອງຂວັນ</div>
                </v-card>
              </v-col>
              <v-col cols="4" lg="4">
                <v-card outlined class="pa-3 text-center">
                  <h4 class="warning--text">{{ totalGiftItems }}</h4>
                  <div class="">ຈຳນວນຂອງຂວັນທັງໝົດ</div>
                </v-card>
              </v-col>
              <v-col cols="4" lg="4">
                <v-card outlined class="pa-3 text-center">
                  <h4 class="error--text">
                    {{ formatNumber(totalGiftValue) }} LAK
                  </h4>
                  <div class="">ມູນຄ່າຂອງຂວັນທັງໝົດ</div>
                </v-card>
              </v-col>
            </v-row>
          </v-layout>
        </v-card-text>

        <v-data-table
          v-if="giftOrdersList"
          :headers="headers"
          :search="search"
          :items="giftOrdersList"
        >
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
          <template v-slot:[`item.ticketId`]="{ item }">
            <v-chip color="success" small dark style="cursor: pointer">
              <v-icon left small>mdi-ticket</v-icon>
              {{ item.id }}
            </v-chip>
          </template>
          <template v-slot:[`item.client.name`]="{ item }">
            {{ item.client?.name || 'Walk-in Customer' }}
          </template>

          <template v-slot:[`item.giftItemsCount`]="{ item }">
            <v-chip color="success" small dark>
              <v-icon left small>mdi-gift</v-icon>
              {{ getGiftItemsCount(item) }}
            </v-chip>
          </template>

          <template v-slot:[`item.giftValue`]="{ item }">
            <strong style="color: #4caf50"
              >{{ formatNumber(getGiftItemsValue(item)) }} LAK</strong
            >
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
            <v-chip color="success" small dark style="cursor: pointer">
              <v-icon left small>mdi-clock</v-icon>
              {{ getLocalDate(item.createdAt) }}
            </v-chip>
          </template>

          <template v-slot:[`item.giftDetails`]="{ item }">
            <v-btn color="success" text small @click="showGiftDetails(item)">
              <v-icon small>mdi-gift</v-icon>
              ລາຍລະອຽດ
            </v-btn>
          </template>

          <template v-slot:[`item.id`]="{ item }">
            <v-btn color="primary" text @click="viewItem(item)">
              <i class="fa-regular fa-pen-to-square"></i>
            </v-btn>
          </template>

          <template v-slot:[`item.print`]="{ item }">
            <v-btn @click="printGiftTicket(item)" text color="success">
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
import { defaultTicketReprint } from '~/common/ticket.js'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: { OrderDetailPosCRUD },
  middleware: 'auths',
  data() {
    return {
      terminalId: 999,
      guidelineDialog: false,
      viewTransaction: false,
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrder: 0,
      isloading: false,
      valid: true,
      search: '',
      userId: null,
      orderHeaderList: [],
      giftOrdersList: [],

      // Gift Details Dialog
      giftDetailsDialog: false,
      selectedOrderForGifts: null,

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
          text: 'ຈຳນວນຂອງຂວັນ',
          align: 'center',
          value: 'giftItemsCount',
          sortable: false,
        },
        {
          text: 'ມູນຄ່າຂອງຂວັນ',
          align: 'center',
          value: 'giftValue',
          sortable: false,
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
          text: 'ລາຍລະອຽດຂອງຂວັນ',
          align: 'center',
          value: 'giftDetails',
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

      // Gift Details Table Headers
      giftDetailsHeaders: [
        {
          text: 'ຊື່ສິນຄ້າ',
          align: 'left',
          value: 'productName',
          sortable: false,
        },
        {
          text: 'ຈຳນວນ',
          align: 'center',
          value: 'quantity',
          sortable: false,
        },
        {
          text: 'ລາຄາຕໍ່ຫົວໜ່ວຍ',
          align: 'right',
          value: 'unitRate',
          sortable: false,
        },
        {
          text: 'ລາຄາລວມ',
          align: 'right',
          value: 'total',
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

    try {
      await preloadCompanyData(this.$axios)
      console.log('Company data preloaded for gift report')
    } catch (error) {
      console.warn('Company preload failed, using fallback:', error)
    }

    await this.loadData()
  },

  watch: {
    fromDate(val) {
      this.fromDateLabel = this.formatDate(this.fromDate)
      this.loadData()
    },
    toDate(val) {
      this.toDateLabel = this.formatDate(this.toDate)
      this.loadData()
    },
  },

  computed: {
    companyData() {
      const company = mainCompanyInfo()
      return company
    },

    companyLogo() {
      const company = this.companyData

      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || ''
        return `${baseUrl}/${company.apiData.profile_image_path}`
      }

      if (company.ticketLogo) {
        try {
          return require(`~/assets/image/${company.ticketLogo}`)
        } catch (error) {
          console.warn('Static logo not found:', company.ticketLogo)
        }
      }

      return '/static/images/default-logo.png'
    },

    ticketCommon() {
      return ticketHtml()
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
      return originalTerminalList
    },

    // Gift Statistics
    giftOrdersCount() {
      return this.giftOrdersList.length
    },

    totalGiftItems() {
      return this.giftOrdersList.reduce((total, order) => {
        return total + this.getGiftItemsCount(order)
      }, 0)
    },

    totalGiftValue() {
      return this.giftOrdersList.reduce((total, order) => {
        return total + this.getGiftItemsValue(order)
      }, 0)
    },

    currentTerminal() {
      return this.findAllTerminal.find(
        (el) => el['id'] == this.findSelectedTerminal
      )
    },

    ...mapGetters([
      'findAllProduct',
      'findSelectedTerminal',
      'findAllTerminal',
    ]),

    user() {
      return this.$auth.user || ''
    },
  },

  methods: {
    getLocalDate,

    // Gift-related methods
    getGiftItemsCount(order) {
      if (!order.lines) return 0
      return order.lines.filter(
        (line) => line.isGift === true || line.isGift === 1
      ).length
    },

    getGiftItemsValue(order) {
      if (!order.lines) return 0
      return order.lines
        .filter((line) => line.isGift === true || line.isGift === 1)
        .reduce((total, line) => total + line.total, 0)
    },

    getGiftItems(order) {
      if (!order.lines) return []
      return order.lines
        .filter((line) => line.isGift === true || line.isGift === 1)
        .map((line) => {
          const product = this.findAllProduct.find(
            (p) => p.id === line.productId
          )
          return {
            ...line,
            productName: product
              ? product.pro_name || product.name
              : `Product ID: ${line.productId}`,
          }
        })
    },

    hasGiftItems(order) {
      if (!order.lines) return false
      return order.lines.some(
        (line) => line.isGift === true || line.isGift === 1
      )
    },

    showGiftDetails(item) {
      this.selectedOrderForGifts = item
      this.giftDetailsDialog = true
    },

    printGiftDetails() {
      if (!this.selectedOrderForGifts) return

      const item = this.selectedOrderForGifts
      const giftItems = this.getGiftItems(item)

      let giftListHtml = ''
      giftItems.forEach((gift) => {
        giftListHtml += `
          <tr>
            <td>${gift.productName}</td>
            <td style="text-align: center">${gift.quantity}</td>
            <td style="text-align: right">${this.formatNumber(
              gift.unitRate
            )} LAK</td>
            <td style="text-align: right">${this.formatNumber(
              gift.total
            )} LAK</td>
          </tr>
        `
      })

      const windowContent = `
        ${this.ticketCommon.header}
        <body>
          <div style="text-align: center;">
            <img src="${
              this.companyLogo
            }" alt="Company Logo" width="100" height="100" style="max-width: 100px; max-height: 100px; object-fit: contain;">
          </div>
          <h3 style="text-align: center">ລາຍລະອຽດຂອງຂວັນ</h3>
          <hr>
          <h5>ເລກບິນ: ${item.id}</h5>
          <h5>ວັນທີ: ${item.bookingDate}</h5>
          <h5>ລູກຄ້າ: ${item.client?.name || 'Walk-in Customer'}</h5>
          <h5>ຈຳນວນຂອງຂວັນ: ${this.getGiftItemsCount(item)}</h5>
          <h5>ມູນຄ່າຂອງຂວັນ: ${this.formatNumber(
            this.getGiftItemsValue(item)
          )} LAK</h5>
          <hr>
          <h4>ລາຍການຂອງຂວັນ:</h4>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid #000;">
                <th style="text-align: left; padding: 8px;">ສິນຄ້າ</th>
                <th style="text-align: center; padding: 8px;">ຈຳນວນ</th>
                <th style="text-align: right; padding: 8px;">ລາຄາ/ຫົວໜ່ວຍ</th>
                <th style="text-align: right; padding: 8px;">ລາຄາລວມ</th>
              </tr>
            </thead>
            <tbody>
              ${giftListHtml}
            </tbody>
          </table>
          <hr>
          <h3 style="text-align: center; margin-top: 30px;">THANK YOU FOR YOUR BUSINESS</h3>
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

    printGiftTicket(data) {
      console.info(`PRINTING GIFT TICKET WITH DATA: ${JSON.stringify(data)}`)

      // Filter only gift items for printing
      const giftLines = data.lines.filter(
        (line) => line.isGift === true || line.isGift === 1
      )

      defaultTicketReprint({
        productCart: giftLines,
        findAllProduct: this.findAllProduct,
        formatNumber: this.formatNumber,
        discount: data.discount,
        grandTotal: this.getGiftItemsValue(data),
        companyLogo: this.companyLogo,
        lastTransactionSaleHeaderId: data.id,
        currentTerminal: this.currentTerminal,
        user: this.user,
        ticketCommon: this.ticketCommon,
        currentPaymentCode: 'GIFT',
        cashReceived: 0,
        changes: 0,
        bookingDate: data.createdAt,
        axios: this.$axios,
        companyData: this.companyData,
        isGiftTicket: true, // Special flag for gift tickets
      })
    },

    formatNumber(val) {
      return getFormatNum(val)
    },

    exportToExcel() {
      // Prepare data for Excel export
      const excelData = this.giftOrdersList.map((order) => ({
        ເລກບິນ: order.id,
        ວັນທີ: order.bookingDate,
        ລູກຄ້າ: order.client?.name || 'Walk-in Customer',
        'ID ລູກຄ້າ': order.client?.id || 'N/A',
        ຈຳນວນຂອງຂວັນ: this.getGiftItemsCount(order),
        'ມູນຄ່າຂອງຂວັນ LAK': this.getGiftItemsValue(order),
        'ລາຄາເຕັມ LAK': order.total + order.discount,
        'ສ່ວນຫລຸດ LAK': order.discount,
        'ລາຄາສຸດທິ LAK': order.total,
        ຜູ້ລົງທຸລະກຳ: order.user?.cus_name || 'N/A',
        ເວລາລົງ: order.createdAt,
      }))

      const worksheet = this.$xlsx.utils.json_to_sheet(excelData)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Gift Report')
      this.$xlsx.writeFile(
        workbook,
        `gift-report-${this.fromDate}-to-${this.toDate}.xlsx`
      )
    },

    countDay(startDate) {
      return dayCount(startDate)
    },

    numberWithCommas(value) {
      if (value === null || value === undefined) {
        return '0'
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },

    viewItem(item) {
      this.componentKey += 1
      this.viewTransaction = true
      this.selectedOrder = item.id
      this.dialogOrderDetail = true
    },

    async loadData() {
      this.isloading = true
      const date = {
        startDate: this.fromDate,
        endDate: this.toDate,
        userId: this.userId,
      }

      let apiLine = 'api/sale/findByDateWithGifts'
      if (date.userId) {
        apiLine = 'api/sale/findByDateAndUserWithGifts'
      }

      try {
        const response = await this.$axios.get(apiLine, { params: { date } })

        console.log('Raw API Response:', response.data)

        // The backend should already filter and return only gift orders
        this.orderHeaderList = response.data.filter(
          (sale) => sale.isActive === true
        )
        this.giftOrdersList = response.data.filter(
          (sale) => sale.isActive === true
        )

        // Apply terminal filtering if needed
        const terminal = this.findAllTerminal.find(
          (el) => el.id == this.terminalId
        )
        if (terminal && this.terminalId !== 999) {
          this.giftOrdersList = this.giftOrdersList.filter(
            (order) => order.locationId === terminal.locationId
          )
        }

        console.log(
          `Gift orders loaded from API: ${this.giftOrdersList.length}`
        )
        console.log(
          'First order has gifts:',
          this.giftOrdersList.length > 0
            ? this.hasGiftItems(this.giftOrdersList[0])
            : 'No orders'
        )
      } catch (error) {
        console.error('API Error:', error)
        swalError2(
          this.$swal,
          'Error',
          'Could not load gift data: ' + error.message
        )

        // Fallback: load regular data and filter client-side
        try {
          let fallbackApiLine = 'api/sale/findByDate'
          if (date.userId) {
            fallbackApiLine = 'api/sale/findByDateAndUser'
          }

          console.log('Using fallback API:', fallbackApiLine)
          const fallbackResponse = await this.$axios.get(fallbackApiLine, {
            params: { date },
          })
          this.orderHeaderList = fallbackResponse.data.filter(
            (sale) => sale.isActive === true
          )

          // Client-side filtering for gifts
          this.giftOrdersList = this.orderHeaderList.filter((order) =>
            this.hasGiftItems(order)
          )

          console.log(
            `Using fallback method, found ${this.giftOrdersList.length} gift orders`
          )
        } catch (fallbackError) {
          console.error('Fallback Error:', fallbackError)
          swalError2(
            this.$swal,
            'Error',
            'Could not load any data: ' + fallbackError.message
          )
        }
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
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}

/* Gift Report Specific Styling */
.gift-details-dialog .v-data-table th {
  background-color: #f5f5f5 !important;
  font-weight: 600;
}

.gift-chip {
  cursor: pointer;
  transition: all 0.2s ease;
}

.gift-chip:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.gift-stats-card {
  border: 2px solid #4caf50;
  background: linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%);
}
</style>