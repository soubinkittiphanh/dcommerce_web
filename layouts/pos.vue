<template>
  <v-app dark>
    <v-dialog v-model="terminalDialog" scrollable max-width="1200" persistent>
      <v-card>
        <v-card-title>ເລືອກ Terminal</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px">
          <v-radio-group v-model="terminalSelected" column>
            <v-radio
              v-for="terminal in findAllTerminal"
              :key="terminal.id"
              :label="terminal.name + ' - ' + terminal.description"
              :value="terminal.id"
            ></v-radio>
            <!-- <v-radio label="Bahrain" value="bahrain"></v-radio>
                        <v-radio label="Bangladesh" value="bangladesh"></v-radio> -->
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="primary" rounded variant="text" @click="switchTerminal">
            ເລືອກ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="customerDialog" max-width="1024">
      <customer-list @close-dialog="customerDialog = false"></customer-list>
    </v-dialog>
    <v-dialog v-model="pricingDialog" max-width="1024">
      <pricing-option
        :key="pricingDialogKey"
        @close-dialog="pricingDialog = false"
        :record-id="productPricingSelected"
      ></pricing-option>
    </v-dialog>

    <v-dialog v-model="deliveryForm" max-width="1024" persistent>
      <delivery-form
        @post-transaction="postTransactionForOnlineCustomer"
        @close-dialog="deliveryForm = false"
        :key="shippingFormKey"
      ></delivery-form>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="quotation" hide-overlay width="1024">
      <Quotation> </Quotation>
    </v-dialog>
    <!-- ************** => Header Appbar ************** -->
    <v-app-bar app color="primary" dark clipped-left clipped-right>
      <v-row no-gutters align="center">
        <v-col cols="2"> </v-col>
        <v-col cols="4">
          <v-text-field
            dark
            v-model="serachModel"
            clearable
            clear-icon="mdi-close"
            class="mt-6"
            prepend-inner-icon="mdi-magnify"
            dense
            outlined
            label="ຄົ້ນຫາ"
            solo-inverted
          />
        </v-col>
        <v-col cols="6" justify="end">
          <!-- 231001 CR By BAE -->
          <!-- <v-chip class="ml-10" color="warning" variant="outlined" @click="terminalDialog = true">
                        {{ currentTerminal == undefined ? '' : currentTerminal['description'] + '-' +
                            currentTerminal['name'] }}
                    </v-chip> -->
          <v-row>
            <v-spacer></v-spacer>
            <v-btn
              size="large"
              variant="outlined"
              class="primary"
              rounded
              v-for="item in headerMenu"
              :key="item.title"
              :to="item.path"
              @click="item.method"
            >
              <v-icon> {{ item.icon }} </v-icon>
              <span class="text-right">{{ item.title }}</span>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <!-- ************** Header Appbar <= ************** -->

    <!-- ************** => Drawer Left ************** -->
    <v-navigation-drawer app v-model="drawer" clipped width="180">
      <v-list dense>
        <v-subheader style="font-size: larger; font-weight: bold">
          <!-- <v-chip class="ma-2" color="warning" variant="outlined">
                        CHITHANH MINI MART
                    </v-chip> -->
          <!-- 231001 CR BY BAE -->
          <v-chip
            class="ml-0"
            color="warning"
            variant="outlined"
            @click="terminalDialog = true"
          >
            {{
              currentTerminal == undefined
                ? ''
                : currentTerminal['description'] + '-' + currentTerminal['name']
            }}
          </v-chip>
        </v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-divider></v-divider>
          <v-list-item v-for="(item, i) in categoryList" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.categ_name"></v-list-item-title>
              <!-- <v-divider></v-divider> -->
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- ************** Drawer Left <= ************** -->

    <!-- ************** => Product list ************** -->
    <v-main style="background-color: rgb(235, 235, 235)">
      <Nuxt :key="productComponentKey" class="py-2 px-3" />
    </v-main>
    <!-- **************  Product List <= ************** -->

    <!-- ************** => Drawer Rigth ************** -->
    <v-navigation-drawer app right clipped width="450" fixed>
      <div style="position: relative">
        <!-- ************** => Ticket Header menu ************** -->
        <v-row align="center" class="pa-2">
          <v-col cols="2">
            <v-btn color="primary" text @click="openCustomerDialog">
              <v-icon class="mdi mdi-account-plus-outline"></v-icon>
            </v-btn>
          </v-col>
          <v-col cols="4" style="text-align: left">
            <v-chip class="ma-2" color="success" variant="outlined">
              {{ currenctCustomer == null ? '' : currenctCustomer['company'] }}
            </v-chip>
          </v-col>
          <v-col cols="2">
            <v-btn color="primary" text @click="openDeliveryBox">
              <v-icon class="mdi mdi-bike-fast"></v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2" style="text-align: right">
            <v-btn color="primary" text @click="newOrder">
              <v-icon
                color=""
                class="mdi mdi-file-document-refresh-outline"
              ></v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <!-- ************** Ticket Header menu <= ************** -->
        <!-- ************** => Ticket order header ************** -->
        <v-simple-table class="pa-0 ma-0">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left"></th>
                <th class="text-left">ສິນຄ້າ</th>
                <th class="text-left">-</th>
                <th class="text-left">ຈຳນວນ</th>
                <th class="text-left">+</th>
                <th class="text-left">ລາຄາ</th>
              </tr>
            </thead>
          </template>
        </v-simple-table>
        <!-- **************  Ticket order header <= ************** -->
        <!-- ************** => Order Item list ************** -->
        <v-card flat height="1000" class="overflow-auto">
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr v-for="item in productCart" :key="item.id">
                  <td>
                    <v-btn
                      color="red"
                      icon
                      @click="deleteProductFromCart(item)"
                    >
                      <v-icon>fa-light fa-trash</v-icon>
                      <!-- <i class="fa-sharp fa-light fa-trash"></i> -->
                    </v-btn>
                  </td>
                  <td class="font-weight-medium">{{ item.pro_name }}</td>
                  <td>
                    <v-btn icon @click="deleteProduct(item)">
                      <v-icon>fa-solid fa-minus</v-icon>
                    </v-btn>
                  </td>
                  <td class="font-weight-medium">{{ item.qty }}</td>
                  <td>
                    <v-btn icon @click="addProduct(item)">
                      <v-icon>fa-solid fa-plus</v-icon>
                    </v-btn>
                  </td>
                  <!-- <td class="font-weight-medium">{{ formatNumber(item.pro_price * item.qty) }}</td> -->
                  <td class="font-weight-medium">
                    <v-chip
                      style="float: right"
                      class="ml-0"
                      color="warning"
                      variant="outlined"
                      @click="pricingLogig(item)"
                    >
                      {{ formatNumber(item.localPrice * item.qty) }}
                    </v-chip>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <!-- ************** Order Item list <= ************** -->
      </div>
      <!-- ************** => Ticket order footer ************** -->
      <div
        style="
          position: absolute;
          bottom: 0px;
          width: 100%;
          /* height: 20%; */
          border: 1px solid blue;
          background-color: white;
        "
      >
        <v-divider class="mb-1"></v-divider>
        <div>

          <img
          :src="!showCheckOut ? upSvg : downSvg"
          height="20"
          style="text-align: center"
          @click="showCheckOut = !showCheckOut"
          />
          ສ່ວນຫລຸດ
          <v-text-field
            style="border: 1px solid green"
            v-model.number="discount"
            placeholder="ສ່ວນຫລຸດ"
            filled
            rounded
            dense
            hide-details="auto"
          ></v-text-field>
          <!-- </v-row> -->
          <v-list-item>
            <h4>ລວມ:</h4>
            <v-spacer></v-spacer>
            <v-chip
              v-for="item in currencyList"
              :key="item.id"
              class="ma-2"
              color="green"
              text-color="white"
            >
              {{ item.code }}
              {{ formatNumber((grandTotal - discount) / item.rate) }}
            </v-chip>
          </v-list-item>
        </div>
        <v-divider class="mb-1"></v-divider>
        <v-row v-if="showCheckOut">
          <v-col :cols="12">
            <div class="row">
              <div
                v-for="(item, index) in paymentList"
                :key="index"
                class="col-2 col-md-3 col-sm-6 col-xs-6 text-center ma-0"
              >
                <!-- Default payment button -->
                <!--  class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" -->
                <PaymentCard
                  :id="item.id"
                  :title="item.payment_name"
                  :icon="item.icon"
                  :path="item.path"
                >
                  <template v-slot:iconSlot>
                    <img :src="svgIcon" height="20" />
                  </template>
                </PaymentCard>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn
            rounded
            color="primary"
            block
            large
            @click="postTransaction(false)"
          >
            <v-icon size="25" left> mdi-cash-100 </v-icon> PAY
          </v-btn>
        </v-card-actions>
      </div>
      <!-- **************  Ticket order footer <= ************** -->
    </v-navigation-drawer>
    <!-- ************** Drawer Rigth <= ************** -->
  </v-app>
</template>
  
<script>
import CustomerList from '~/components/customer/CustomerList.vue'
import Quotation from '~/components/quotation'
import PricingOption from '~/components/PricingOption.vue'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'

import { getFormatNum, jsDateToMysqlDate, ticketHtml } from '~/common'
import {
  swalSuccess,
  swalError2,
  toastNotification,
  confirmSwal,
} from '~/common/index'
export default {
  components: { CustomerList, Quotation, PricingOption },
  name: 'DefaultLayout',
  data() {
    return {
      upSvg: require('~/assets/icons/dcommerce/up.svg'),
      downSvg: require('~/assets/icons/dcommerce/down.svg'),
      showCheckOut: true,
      productPricingSelected: null,
      pricingDialogKey: 1,
      pricingDialog: false,
      onlineCustomerInfo: {},
      tickePreviewDialog: false,
      deliveryForm: false,
      productComponentKey: 1,
      terminalDialog: false,
      terminalSelected: null,
      search: '',
      svgIcon: require('~/assets/icons/cash.svg'),
      logoCompany: require('~/assets/image/BWLOGO.jpeg'),
      lastTransactionSaleHeaderId: 0,
      drawer: true,
      isloading: false,
      drawer_right: true,
      fixed: true,
      title: 'App name & Logo',
      customerDialog: false,
      discount: 0,
      priceRule: [
        (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
      ],
      categoryList: [],
      quotation: false,
      paymentList: [],
      selectedItem: 0,
      headerMenu: [
        {
          title: 'Home',
          path: '/admin',
          icon: 'mdi-home-circle-outline',
          method: () => {},
        },
        {
          title: 'Orders',
          path: '/admin/ordersFromPos',
          // $router.push('/admin/ordersFromPos')
          icon: 'mdi-reorder-horizontal',
          method: () => {},
        },
        {
          title: 'Quotation',
          path: '',
          icon: 'mdi-receipt-text-clock-outline',
          method: this.setQuotation,
        },
        {
          title: 'Logout',
          path: '/admin/logout',
          icon: 'mdi-logout',
          method: () => {},
        },
      ],
      shippingFormKey: 1,
      currencyList: [],
      saleHeader: {
        bookingDate: '',
        remark: '',
        total: 0,
        exchangeRate: 1,
        isActive: true,
      },
    }
  },
  computed: {
    ticketCommon() {
      return ticketHtml()
    },
    user() {
      return this.$auth.user || ''
    },
    ...mapState(['productSearchKeyboard']),
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
    serachModel: {
      get() {
        console.log(`Get menthod called`)
        return this.stateValue
      },
      set(value) {
        if (value) {
          console.log(`Set menthod called`)
          const lowerCaseSearchValue = value.toLowerCase()
          this.SetSearchKeyword(lowerCaseSearchValue)
        } else {
          console.log(`Set menthod called null`)
          this.SetSearchKeyword('')
        }
      },
    },

    currenctCustomer() {
      return this.currentSelectedCustomer
    },
    currentTerminal() {
      console.log(
        `ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`
      )
      return this.findAllTerminal.find(
        (el) => el['id'] == this.findSelectedTerminal
      )
    },
    productCart() {
      return this.cartOfProduct
    },
    generateSaleLine() {
      console.log(`Gennerate Sale LINE=====> ${this.productCart.length}`)
      let lines = []
      for (const iterator of this.productCart) {
        lines.push({
          quantity: iterator.qty,
          unitRate: 1,
          // price: iterator.pro_price,
          price: iterator.localPrice,
          discount: 0,
          productId: iterator.id,
          productKey: iterator.id,
          unitId: 1,
          // total: iterator.qty * iterator.pro_price,
          total: iterator.qty * iterator.localPrice,
          isActive: true,
        })
      }
      return lines
    },
    selectedCategoryId() {
      return this.currenctSelectedCategoryId
    },
    currentPayment() {
      return this.currentSelectedPayment
    },

    grandTotal() {
      const totalPrice = this.cartOfProduct.reduce((total, item) => {
        // return total + item.qty * item.pro_price;
        return total + item.qty * item.localPrice
      }, 0)
      return totalPrice
    },
  },
  mounted() {
    window.addEventListener('beforeunload', this.checkAllInitData)
    this.terminalSelected = this.findSelectedTerminal
    this.fetchCategory()
    this.loadPayment()
    this.loadCustomer()
    this.loadCurrency()
    this.checkAllInitData()
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', null)
  },
  watch: {
    selectedItem(val) {
      if (val != undefined) {
        this.updateSelectedCategoryId(this.categoryList[val]['categ_id'])
      }
    },
  },
  methods: {
    pricingLogig(item) {
      console.log(`PRINCING CLICK....${item.id}`)
      this.productPricingSelected = item.id
      this.pricingDialogKey += 1
      this.pricingDialog = true
    },
    openDeliveryBox() {
      if (this.cartOfProduct.length <= 0)
        return swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
      this.shippingFormKey += 1
      this.deliveryForm = true
    },
    previewTicket() {
      this.tickePreviewDialog = true
    },
    ...mapActions([
      'initiateData',
      'setSelectedTerminal',
      'setSelectedLocation',
      'clearCustomerFormAction',
      'setSelectedPayment',
    ]),
    checkAllInitData() {
      // setInterval(() => {
      console.info(
        `...loading pos layout ${
          this.findAllTerminal.length
        }... ${new Date().toLocaleTimeString()}`
      )
      if (this.findAllTerminal.length == 0) {
        console.error(`Data missing need to reload`)
        this.initiateData(this.$axios)
      }
      if (!this.currentSelectedLocation) {
        this.terminalDialog = true
      }
      // }, 1000);
    },
    switchTerminal() {
      this.setSelectedTerminal(this.terminalSelected)
      const location = this.findAllLocation.find(
        (el) =>
          el.id ==
          this.findAllTerminal.find((el) => el.id == this.terminalSelected)[
            'locationId'
          ]
      )
      this.setSelectedLocation(location)
      this.productComponentKey += 1
      this.terminalDialog = false
    },
    generatePrintViewDeliveryCustomer() {
      let txnListHtml = ``
      for (const iterator of this.productCart) {
        const product = this.findAllProduct.find((el) => el.id == iterator.id)
        console.log(`=======${product}======`)
        const quantity = iterator.qty
        const total = iterator.qty * iterator.localPrice
        txnListHtml += `<div class="ticket">
                    <div class="product-name">${product.pro_name} </div>
                    <div class="price"> ${quantity} ${
          this.onlineCustomerInfo.payment == 'COD'
            ? ' X ' + this.formatNumber(total)
            : ''
        }</div>
                </div>`
      }
      const discountHtml = `<div class="ticket">
                    <div class="product-name">ສ່ວນຫລຸດ </div>
                    <div class="price"> - ${this.formatNumber(
                      this.discount
                    )}</div>
                </div>`
      const riderFeeHtml = `<div class="ticket">
                    <div class="product-name">ຄ່າສົ່ງ </div>
                    <div class="price">${this.formatNumber(
                      this.onlineCustomerInfo.riderFee
                    )}</div>
                </div>`
      const today = new Date()
      const bookingDate = jsDateToMysqlDate(today)
      const bookingDateWithTime = today.toISOString
      // let totalHtml = ``
      //*********Payment info tag********/
      let totalHtml = ''
      // let totalHtml = `<div class="ticket">
      //         <div class="product-name"> ${this.onlineCustomerInfo.payment}</div>
      //     <div class="price"></div>
      // </div>`
      for (const iterator of this.currencyList) {
        if (
          iterator.code == 'LAK' &&
          (this.onlineCustomerInfo.payment == 'COD' ||
            this.onlineCustomerInfo.shipping == 'RIDER')
        ) {
          totalHtml += `
                                    <div class="ticket">
                                        <div class="product-name"> </div>
                                    <div class="price-total"> <h5>ຍອດລວມ(${
                                      this.onlineCustomerInfo.payment
                                    }): ${this.formatNumber(
            (this.grandTotal +
              +this.onlineCustomerInfo.riderFee -
              this.discount) /
              iterator.rate
          )}  </h5> </div>
                                </div>
                                    `
        }
      }

      const windowContent = `
         ${this.ticketCommon.header}
            <body>
                <h5> ວັນທີ: ${today.toLocaleString()}</h5>
                <h5> ຮ້ານ: ${this.onlineCustomerInfo.branch} </h5>
                <h5> ເບີໂທ: ${this.onlineCustomerInfo.branchTel} </h5>
                <hr> </hr>
                <h5> ຜູ້ຮັບ: ${this.onlineCustomerInfo.name}</h5>
                <h5> ໂທ: ${this.onlineCustomerInfo.tel} </h5>
                <h5> ຂົນສົ່ງ: ${this.onlineCustomerInfo.shipping} </h5>
                <h5> ບ່ອນສົ່ງ: ${this.onlineCustomerInfo.address} </h5>
              ${
                this.onlineCustomerInfo.shipping == 'RIDER'
                  ? ``
                  : `<h5> ຄ່າຝາກ: ${this.onlineCustomerInfo.shippingFeeBy}</h5>`
              }  
                <hr> </hr>
                ${txnListHtml}
                ${this.onlineCustomerInfo.riderFee > 0 ? riderFeeHtml : ''}
                ${
                  this.discount > 0 && this.onlineCustomerInfo.payment == 'COD'
                    ? discountHtml
                    : ''
                }
                <hr> </hr>
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
    generatePrintView() {
      let txnListHtml = ``
      for (const iterator of this.productCart) {
        const product = this.findAllProduct.find((el) => el.id == iterator.id)
        console.log(`=======${product}======`)
        const quantity = iterator.qty
        const total = iterator.qty * iterator.localPrice
        // txnListHtml += `<div style="font-size: 14px;">${product.pro_name} x${quantity} - ${this.formatNumber(total)}</div>`
        txnListHtml += `<div class="ticket">
                    <div class="product-name" >${product.pro_name} </div>
                    <div class="price" >  ${this.formatNumber(total)}</div>
                </div>
                <div class="product-name" >${quantity} X ${this.formatNumber(
          iterator.localPrice
        )}</div>
                <br>
                    `
      }
      const discountHtml = `<div class="ticket">
                    <div class="product-name">ສ່ວນຫລຸດ </div>
                    <div class="price"> - ${this.formatNumber(
                      this.discount
                    )}</div>
                </div>`
      const today = new Date()
      const bookingDate = jsDateToMysqlDate(today)
      const bookingDateWithTime = today.toISOString
      let totalHtml = ``
      for (const iterator of this.currencyList) {
        totalHtml += `
                <div class="ticket">
                    <div class="product-name"></div>
                <div class="price-footer">${iterator.code} ${this.formatNumber(
          (this.grandTotal - this.discount) / iterator.rate
        )}</div>
            </div>
                `
      }
      //******* Currency hard code for TONOO SHOP ONLY****** */
      // totalHtml = `
      //           <div class="ticket">
      //               <div class="product-name"></div>
      //           <div class="price">THB ${this.formatNumber(
      //             this.grandTotal - this.discount
      //           )}</div>
      //       </div>
      //           `
      //******* Currency hard code for TONOO SHOP ONLY****** */
      const windowContent = `
         ${this.ticketCommon.header}
            <body>
                <div style="text-align: center;">
                    <img src="${
                      this.logoCompany
                    }" alt="Description of the image" width="200" height="200">
                </div>
                <h3> ໃບຮັບເງິນ</h3>
                <h5> ວັນທີ ${today.toLocaleString()}</h5>
                <h5> ເລກທີ ${this.lastTransactionSaleHeaderId} </h5>
                <h5> ເບີໂທຮ້ານ ${
                  this.currentTerminal['location']['company']['tel']
                }</h5>
                <h5> ຜູ້ຂາຍ: ${this.user.cus_name}  </h5>
                <hr style="margin-top: 50px;"> </hr>
                ${txnListHtml}
                ${this.discount > 0 ? discountHtml : ''}
                <hr> </hr>
                ${totalHtml}
                <h2 style="text-align: center; margin-top: 50px;"> THANKYOU </h2>
                
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
    async setQuotation() {
      if (this.isloading || this.generateSaleLine == 0) {
        if (this.generateSaleLine == 0) {
          swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
        }
        return
      }

      const today = new Date()
      this.isloading = true
      this.saleHeader.discount = this.discount
      this.saleHeader.remark = 'Quotation'
      this.saleHeader.total = this.grandTotal - this.discount // Sale header total base on mobile logic (it is exclude discount amount)
      this.saleHeader.clientId = this.currenctCustomer.id
      this.saleHeader.paymentId = this.currentPayment
      this.saleHeader.currencyId = 1 // DEFAULT CURRENCY I FOR LAK
      this.saleHeader.lines = this.generateSaleLine
      this.saleHeader.userId = this.user.id
      this.saleHeader.bookingDate = jsDateToMysqlDate(today)
      this.saleHeader.isActive = true
      await this.$axios
        .post('/api/quotation/create', this.saleHeader)
        .then((res) => {
          this.lastTransactionSaleHeaderId = res.data
            .split('-')[1]
            .toString()
            .trim()
          // localStorage.setItem('customer', JSON.stringify(this.currenctCustomer));
          // localStorage.setItem('product', JSON.stringify(this.productCart));
          // localStorage.setItem('quotationId', this.lastTransactionSaleHeaderId);
          window.open(
            `/admin/PDFQuotation/${this.lastTransactionSaleHeaderId}`,
            '_blank'
          )
          // swalSuccess(this.$swal, "Succeed", res.data)
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', er)
        })
      this.isloading = false
    },
    openCustomerDialog() {
      this.customerDialog = true
    },
    ...mapMutations({
      SetSearchKeyword: 'SetSearchKeyword',
    }),
    async postTransactionForOnlineCustomer(payload) {
      console.log(`Posting.......`)
      this.saleHeader.customerForm = payload.customerForm
      this.discount = payload.customerForm.discount
      this.onlineCustomerInfo = payload.customerInfo
      await this.postTransaction(true)
      // ************ Clear online customer information after sale done *************//
      // this.saleHeader.customerForm = null
      delete this.saleHeader.customerForm
      this.deliveryForm = false
    },

    async postTransaction(isDeliveryCustomer) {
      if (this.isloading || this.generateSaleLine == 0) {
        if (this.generateSaleLine == 0) {
          swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
        }
        return
      }
      const today = new Date()
      this.isloading = true
      this.saleHeader.isActive = true
      this.saleHeader.discount = this.discount
      this.saleHeader.total = this.grandTotal - this.discount // Sale header total base on mobile logic (it is exclude discount amount)
      this.saleHeader.clientId = this.currenctCustomer.id
      this.saleHeader.paymentId = this.currentPayment
      this.saleHeader.currencyId = 1 // DEFAULT CURRENCY I FOR LAK
      this.saleHeader.lines = this.generateSaleLine
      this.saleHeader.userId = this.user.id
      this.saleHeader.bookingDate = jsDateToMysqlDate(today)
      this.saleHeader.locationId = this.currentTerminal['locationId']
      // console.log('HEADER ' +this.saleHeader['locationId']);
      // return
      await this.$axios
        .post('/api/sale/create', this.saleHeader)
        .then((res) => {
          this.lastTransactionSaleHeaderId = res.data.split('-')[1].trim()
          swalSuccess(this.$swal, 'Succeed', res.data.split('-')[0])
          console.log('response post completed===> ' + res.data)
          if (isDeliveryCustomer) {
            this.generatePrintViewDeliveryCustomer()
            // ******** clear delivery form state ***********
            this.clearCustomerFormAction()
          } else {
            this.generatePrintView()
          }
          this.newOrder()
        })
        .catch((er) => {
          console.error(`error occurs ${er}`)
          if (er.response.data.includes('#')) {
            const id = er.response.data.split('#')[1]
            const productName = ''
            const product = this.findAllProduct.find((el) => el.id == id)
            console.log(`PRODUCT FILTER ${product}`)
            swalError2(
              this.$swal,
              'Error',
              `ຈຳນວນສິນຄ້າ: ${product.pro_name} ມີບໍ່ພຽງພໍໃນສາງ`
            )
          } else {
            swalError2(this.$swal, 'Error', er.response.data)
          }
        })
      this.isloading = false
    },
    ...mapActions([
      'deleteProduct',
      'addProduct',
      'clearCart',
      'updateSelectedCategoryId',
      'deleteProductFromCart',
      'addSelectedPayment',
      'addCustomer',
    ]),
    formatNumber(val) {
      return getFormatNum(val)
    },
    selectePaymentMethod(id) {
      console.log('selected payment ', id)
      this.addSelectedPayment(id)
      console.log('SAATE ', this.currentPayment)
    },
    previewTicket(saleHeaderId) {
      const path = this.isQuotation ? 'PDFQuotation' : 'PDFInvoice'
      window.open(`/admin/PDFTicket/${saleHeaderId}`, '_blank')
    },
    async fetchCategory() {
      this.isLoading = true
      await this.$axios
        .get('category_f')
        .then((res) => {
          console.log('=>category' + res.data)
          //**** all category ******/
          this.categoryList = res.data.map((el) => {
            return {
              categ_id: el.categ_id,
              categ_name: el.categ_name,
              categ_desc: el.categ_desc,
            }
          })
          //**** all category ******/
          this.categoryList.push({
            categ_id: '9999',
            categ_name: 'ທັງໝົດ',
            categ_desc: 'ລາຍການສິນຄ້າ ທັງໝົດ',
          })
          this.selectedItem = this.categoryList.length - 1
        })
        .catch((er) => {
          console.log('error: ' + er.response.data)
        })
      this.isLoading = false
    },
    async loadPayment() {
      this.isloading = true
      this.paymentList = []
      await this.$axios
        .get('/api/paymentMethod/find')
        .then((res) => {
          for (const iterator of res.data) {
            console.log('Payment', iterator)
            this.paymentList.push(iterator)
          }
        })
        .catch((er) => {
          // console.log('Data: ' + er)
          swalError2(this.$swal, 'Error', er)
        })
      this.selectePaymentMethod(this.paymentList[0]['id'])
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

    // ******** Set select default customer as WALK-IN ********//
    async loadCustomer() {
      this.isloading = true
      await this.$axios
        .get('api/client/find')
        .then((res) => {
          this.addCustomer(res.data[0])
        })
        .catch((er) => {
          console.log('Error: ' + er)
          swalError2(this.$swal, 'ເກີດຂໍ້ຜິດພາດ', er.response.data)
        })
      this.isloading = false
    },
    newOrder() {
      //  ********** Enable below line to confirm before clear ***********//
      // confirmSwal(this.$swal, 'ທ່ານ ກຳລັງຈະຂື້ນບິນໃໝ່', this.clearCart)
      this.clearCart()
    },
  },
}
</script>

<style scoped>
/* * {
    font-family: 'noto sans lao';
} */

.flexcol .v-btn__content {
  display: flex;
  flex-direction: column;
}

span {
  text-transform: capitalize;
}

.myfooter {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  /* Adjust this to the height of the footer */
  background-color: #f0f0f0;
  padding: 20px;
}

.btn-box {
  display: flex;
}

.btn-box :first-child {
  width: 150px;
}

.btn-box > * {
  flex: 0 0 auto;
}
</style>