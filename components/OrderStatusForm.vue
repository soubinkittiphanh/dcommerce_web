<template>
  <div class="text-center">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card class="pa-4">
      <v-card-title>
        <v-chip class="ma-0" color="primary" label text-color="white">
          <v-icon start>mdi-label</v-icon>
          ຮັບເຄື່ອງ {{ confirmEntries.length }} ລາຍການ
        </v-chip>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-card
            v-for="(order, idx) in confirmEntries"
            :key="idx"
            class="mb-2 pa-0"
          >
            <v-card-text class="pa-0">
              <v-row class="pa-0 ma-0">
                <v-row align="center" class="pa-2">
                  <v-col cols="12">
                    <v-text-field
                      @input="testMyTrigger(idx)"
                      v-model="order.client.telephone"
                      label="* ເບີໂທ"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    v-if="
                      clientOption.length > 0 && customerOptionForOrderId == idx
                    "
                  >
                    <v-card v-for="client in clientOption" :key="client['id']">
                      <v-card-text>
                        <v-row>
                          <v-col cols="8">
                            {{
                              client['name']
                                .concat(' - ')
                                .concat(client['telephone'])
                            }}
                          </v-col>
                          <v-col cols="2" align-self="center">
                            <v-btn
                              color="primary"
                              rounded
                              variant="text"
                              @click="selectedClientNew(client['id'], idx)"
                            >
                              <i class="fa-regular fa-circle-check"></i>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-col cols="1">
                  <v-text-field
                    v-model="order.client.name"
                    label="* ຊື່ລູກຄ້າ"
                  ></v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    disabled
                    v-model="order.trackingNumber"
                    label="* Tracking No."
                  ></v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-text-field
                    v-model="order.shippingFee"
                    label="* ຄ່າສົ່ງ"
                  ></v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-autocomplete
                    @input="currencyChange(order)"
                    item-text="code"
                    item-value="id"
                    :items="currencyList"
                    label="ສະກຸນເງິນ*"
                    v-model="order.shippingFeeCurrencyId"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="1">
                  <v-text-field
                    disabled
                    v-model="order.shippingRate"
                    label="ອັດຕາແລກປ່ຽນ"
                  ></v-text-field>
                </v-col>
                <!-- <v-col cols="1">
                                    <v-select v-if="orderStatus != 'ORDERED'" disabled v-model="order.status"
                                        :items="status" label="ສະຖານະເຄື່ອງ" required></v-select>
                                </v-col> -->
                <v-col cols="1" v-if="orderStatus == 'INVOICED'">
                  <v-autocomplete
                    item-text="payment_code"
                    item-value="id"
                    :items="paymentList"
                    label="ການຊຳລະ*"
                    v-model="order.paymentId"
                  ></v-autocomplete>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="1" align-self="center">
                  <v-btn
                    color="warning"
                    rounded
                    variant="text"
                    @click="removeItemFromConfirmEntrie(order)"
                  >
                    <i class="fa-solid fa-circle-xmark"></i>
                  </v-btn>
                </v-col>
                <v-col cols="1" align-self="center">
                  <v-btn
                    color="primary"
                    rounded
                    variant="text"
                    @click="confirmOrder(order)"
                  >
                    <i class="fa-regular fa-circle-check"></i>
                  </v-btn>
                </v-col>
                <v-col
                  cols="1"
                  align-self="center"
                  v-if="orderStatus == 'INVOICED'"
                >
                  <v-btn
                    color="primary"
                    rounded
                    variant="text"
                    @click="
                      confirmOrder(order)
                      printTicket(order)
                    "
                  >
                    <i class="fa-regular fa-circle-check"></i>
                    &
                    <i class="fa-solid fa-print"></i>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-divider></v-divider>
        </v-form>
        <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="warning"
          rounded
          variant="text"
          @click="
            orderStatus == 'RECEIVED' ? clearStockList() : clearPaymentList()
            $emit('close-dialog')
          "
        >
          Close
        </v-btn>
        <v-btn
          color="primary"
          rounded
          variant="text"
          @click="merceEntryToPrint"
          v-if="orderStatus == 'INVOICED'"
        >
          <i class="fa-solid fa-clipboard-check"></i>
          ອອກບິນໃຫ້ລູກຄ້າ
        </v-btn>
        <canvas
          ref="barcodeCanvas"
          :style="{ display: showCanvas ? 'block' : 'none' }"
        ></canvas>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { swalSuccess, swalError2, ticketHtml, getFormatNum } from '~/common'
import { debounce } from 'lodash'
import {  mainCompanyInfo, mainCompanyInfoV1, preloadCompanyData } from '~/common/api'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    isCreate: {
      type: Boolean,
      require: true,
      default: true,
    },
    recordId: {
      type: Number,
      require: false,
      default: 0,
    },
    orderStatus: {
      type: String,
      default: 'RECEIVED',
    },
  },
  data() {
    return {
      showCanvas: false,
      barcodeImage: '',
      customerOptionForOrderId: null,
      timeoutId: null,
      customerTel: null,
      confirmEntries: [],
      lockSuggest: false,
      clientOption: [],
      status: ['ORDERED', 'RECEIVED', 'INVOICED'],
      isloading: false,
    }
  },

  async mounted() {
    // ENHANCED: Preload company data for API logos
    try {
      await preloadCompanyData(this.$axios)
      console.log('Company data preloaded for shipping confirmation')
    } catch (error) {
      console.warn('Company preload failed, using fallback:', error)
    }

    if (this.orderStatus == 'INVOICED') {
      // We cannot change client data comming from state,
      //we have to clone data from state to new variable
      this.confirmEntries = this.$store.state.listOfConfirmPaymentOrder.map(
        (order) => ({ ...JSON.parse(JSON.stringify(order)) })
      )
      console.log(
        `$$$$$$$$$  PAYMENT LIST [${this.confirmEntries.length}] $$$$$$$$$$`
      )
      for (const iterator of this.confirmEntries) {
        iterator['paymentId'] = this.paymentList[0]['id']
      }
    } else {
      // We cannot change client data comming from state,
      // we have to clone data from state to new variable
      this.confirmEntries = this.$store.state.listOfConfirmStockInOrder.map(
        (order) => ({ ...JSON.parse(JSON.stringify(order)) })
      )
      console.log(
        `$$$$$$$$$ STOCK LIST [${this.confirmEntries.length}] $$$$$$$$$$`
      )
    }
    for (const iterator of this.confirmEntries) {
      iterator['status'] = this.orderStatus
      iterator['custel'] = iterator['client']['telephone']
      iterator['cusname'] = iterator['client']['name']
      // this.confirmEntries1.push(iterator)
    }
  },
  // watch: {
  //     'order.client.telephone':(newVal)=>{
  //         console.log(`DATA CHANGE...`);
  //         this.handleTypingEvent()
  //         // this.debouncedGetSuggestions(newVal)
  //     },
  // },
  methods: {
    handleButtonClick() {
      console.log(`LIKE BUTTON CLICK`)
    },
    testMyTrigger(orderId) {
      console.log(`Typing on order id: ${orderId}`)
      this.customerOptionForOrderId = orderId
      this.customerTel = this.confirmEntries[orderId]['client']['telephone']
      if (this.clientList != undefined) {
        this.clientOption = this.clientList
        console.log(`TIMER ${this.timeoutId}`)
        if (this.timeoutId == null) {
          this.timeoutId = setTimeout(() => {
            console.log(`******Reset auto suggest*******`)
            this.clientOption = []
            this.timeoutId = null
          }, 5000)
        }
      }
    },
    selectedClientNew(newVal, orderId) {
      console.log(`SELECT CLIENT CLICK`)
      const newClient = this.findAllClient.find((el) => el.id == newVal)
      if (newClient != undefined) {
        this.lockSuggest = true
        // this.confirmEntries[orderId]['client']['id'] = newClient['id']
        this.confirmEntries[orderId]['client']['name'] = newClient['name']
        this.confirmEntries[orderId]['client']['telephone'] =
          newClient['telephone']
        this.clientOption = []
        this.timeoutId = setTimeout(() => {
          console.log(`******Reset auto suggest*******`)
          this.lockSuggest = false
        }, 5000)
      }
    },
    ...mapActions([
      'removeOrderFromStockConfirm',
      'removeOrderFromPaymentConfirm',
      'clearPaymentList',
      'clearStockList',
    ]),
    formatNumber(val) {
      return getFormatNum(val)
    },
    async bulkUpdateStatus() {
      if (this.isloading) return
      this.isloading = true
      console.log(`order len==== ${this.confirmEntries.length}`)
      for (let index = 0; index < this.confirmEntries.length; index++) {
        console.log(`LOOP ####${index}`)
        const order = this.confirmEntries[index]
        let api = `api/order/update/${order.id}`
        if (!order.id) api = `api/order/create`
        order.userId = this.user.id
        order.locationId = this.currentTerminal['locationId']
        try {
          if (order.id) {
            const response = await this.$axios.put(api, order)
          } else {
            const response = await this.$axios.post(api, order)
          }
        } catch (error) {
          return swalError2(
            this.$swal,
            'Error',
            'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
          )
        }
      }
      console.log(`START REMOVING ENTRY FROM STATE`)
      this.clearAllFromConfirmEntrie()
      this.$emit('close-dialog')
      this.refreshData()
      this.isloading = false
      // return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
    },
    generateBarcodeImage(barcode) {
      // Generate a random 12-digit number as the barcode value
      // Get the canvas element using the ref attribute
      const canvas = this.$refs.barcodeCanvas
      console.log(`.....Canvas logger.....`)
      console.log(canvas)
      console.log(canvas.width, canvas.height)
      // Set the canvas width and height to match the paper size
      canvas.width = 40
      canvas.height = 20
      // Generate the barcode image using JsBarcode
      JsBarcode(canvas, barcode, {
        format: 'code128',
        displayValue: true,
        fontSize: 20,
        // margin: 10
      })

      // Convert the canvas to a data URL and set it as the barcodeImage data property
      this.barcodeImage = canvas.toDataURL()
    },

    // ENHANCED: Bulk print with API logo support
    async merceEntryToPrint() {
      this.generateBarcodeImage(this.confirmEntries[0]['trackingNumber'])
      let txnListHtml = ``
      for (const item of this.confirmEntries) {
        const price = item.shippingFee * item.shippingRate
        txnListHtml += `<div class="ticket">
            <div class="product-name">${item.name}</div>
            <div class="price">  ${this.formatNumber(price)}</div>
        </div>
        <div class="product-name">${item.trackingNumber} X ${this.formatNumber(
          price
        )}</div>
        <br>
            `
      }

      const today = new Date()
      let totalHtml = `
<div class="ticket">
            <div class="product-name"></div>
        <div class="price">THB ${this.formatNumber(this.ticketTotal)}</div>
    </div>`

      // ENHANCED: Use dynamic company logo with API priority
      const logoHtml = this.getCompanyLogoHtml()
      const companyName = this.getCompanyName()
      const companyTel = this.getCompanyTelephone()

      const windowContent = `
 ${this.ticketCommon.header}
    <body>
        <div style="text-align: center;">
            ${logoHtml}
        </div>
        <h3>${companyName}</h3>
        <h3>ໃບຮັບເງິນ</h3>
        <h5>ວັນທີ ${today.toLocaleString()}</h5>
        <h5>Ticket ${this.confirmEntries[0].id}</h5>
        <h5>Tel ${companyTel}</h5>
        <h5>ຜູ້ຂາຍ: ${this.user.cus_name}</h5>
        <h5>ຜູ້ຮັບ: ${this.confirmEntries[0]['client']['name']}</h5>
        <hr style="margin-top: 50px;"></hr>
        ${txnListHtml}
        <hr></hr>
        ${totalHtml}
        <h2 style="text-align: center; margin-top: 50px;"><img src="${this.barcodeImage}"></h2>
        <h2 style="text-align: center; margin-top: 50px;">THANKYOU</h2>
        
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
      this.bulkUpdateStatus()
      setTimeout(() => {
        printWin.print()
        printWin.close()
      }, 1000)
    },

    // ENHANCED: Single ticket print with API logo support
    printTicket(item) {
      console.log(`${JSON.stringify(item)}`)
      let txnListHtml = ``
      const price = item.shippingFee * item.shippingRate
      this.generateBarcodeImage(item['trackingNumber'])
      txnListHtml += `<div class="ticket">
                    <div class="product-name">${item.name}</div>
                    <div class="price">  ${this.formatNumber(price)}</div>
                </div>
                <div class="product-name">${
                  item.trackingNumber
                } X ${this.formatNumber(price)}</div>
                <br>
                    `
      const today = new Date()
      let totalHtml = `
      <div class="ticket">
                    <div class="product-name"></div>
                <div class="price">${this.findCurrencyById(
                  item['shippingFeeCurrencyId']
                )} ${this.formatNumber(item['shippingFee'])}</div>
            </div>`

      // ENHANCED: Use dynamic company logo with API priority
      const logoHtml = this.getCompanyLogoHtml()
      const companyName = this.getCompanyName()
      const companyTel = this.getCompanyTelephone()

      const windowContent = `
         ${this.ticketCommon.header}
            <body>
                <div style="text-align: center;">
                    ${logoHtml}
                </div>
                <h3>${companyName}</h3>
                <h3>ໃບຮັບເງິນ</h3>
                <h5>ວັນທີ ${today.toLocaleString()}</h5>
                <h5>Ticket ${item.id}</h5>
                <h5>Tel ${companyTel}</h5>
                <h5>ຜູ້ຂາຍ: ${this.user.cus_name}</h5>
                <h5>ຜູ້ຮັບ: ${item['client']['name']}</h5>
                <hr style="margin-top: 50px;"></hr>
                ${txnListHtml}
                <hr></hr>
                ${totalHtml}
                <h2 style="text-align: center; margin-top: 50px;"><img src="${this.barcodeImage}"></h2>
                <h2 style="text-align: center; margin-top: 50px;">THANKYOU</h2>
                
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

    // ENHANCED: Helper methods for company information
    getCompanyLogoHtml() {
      // Try to get the actual logo URL (API or static)
      const logoUrl = this.companyLogo
      
      if (logoUrl && !logoUrl.includes('default-logo')) {
        return `<img src="${logoUrl}" alt="Company Logo" width="100" height="100" style="max-width: 100px; max-height: 100px; object-fit: contain;">`
      } else {
        // Fallback: show company initials if no logo
        const companyName = this.getCompanyName()
        const initials = companyName.substring(0, 2).toUpperCase()
        return `<div style="width: 100px; height: 100px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-size: 24px; font-weight: bold; color: #666; margin: 0 auto;">${initials}</div>`
      }
    },

    getCompanyName() {
      const company = this.companyData
      
      // 1. Try API company name first
      if (company.apiData && company.apiData.name) {
        return company.apiData.name
      }
      
      // 2. Try static company name
      if (company.name) {
        return company.name
      }
      
      // 3. Try terminal company name
      if (this.currentTerminal?.location?.company?.name) {
        return this.currentTerminal.location.company.name
      }
      
      // 4. Default fallback
      return 'ເຈ້ນ່ອງ ຂົນສົ່ງ ໄທ-ລາວ'
    },

    getCompanyTelephone() {
      const company = this.companyData
      
      // 1. Try API company telephone first
      if (company.apiData && company.apiData.tel) {
        return company.apiData.tel
      }
      
      // 2. Try static company telephone
      if (company.tel) {
        return company.tel
      }
      
      // 3. Try terminal company telephone
      if (this.currentTerminal?.location?.company?.tel) {
        return this.currentTerminal.location.company.tel
      }
      
      // 4. Default fallback
      return 'N/A'
    },

    currencyChange(order) {
      const orderIdx = this.confirmEntries.indexOf(order)
      const currency = this.currencyList.find(
        (el) => el['id'] == this.confirmEntries[orderIdx].shippingFeeCurrencyId
      )
      if (!currency) return
      this.confirmEntries[orderIdx].shippingRate = currency['rate']
    },
    removeItemFromConfirmEntrie(entry) {
      const index = this.confirmEntries.indexOf(entry)
      this.confirmEntries.splice(index, 1)
      // ***** remove from state *****
      if (this.orderStatus == 'RECEIVED') {
        this.removeOrderFromStockConfirm(entry)
      } else {
        this.removeOrderFromPaymentConfirm(entry)
      }
    },
    clearAllFromConfirmEntrie() {
      this.confirmEntries = []
      // ***** remove from state *****
      if (this.orderStatus == 'RECEIVED') {
        this.removeOrderFromStockConfirm(entry)
      } else {
        this.clearPaymentList()
      }
    },
    async confirmOrder(order) {
      // if(order['shippingFee']<=0 && this.orderStatus=='RECEIVED') return swalError2(this.$swal, "Error", 'ກະລຸນາໃສ່ຄ່າສົ່ງ');
      if (order['shippingFee'] <= 0)
        return swalError2(this.$swal, 'Error', 'ກະລຸນາໃສ່ຄ່າສົ່ງ')
      if (!this.isloading) {
        // Implement form submission logic here
        this.isloading = true
        // IF ORDER ID IS NOT FOUND WE WILL CREATE
        let api = `api/order/update/${order.id}`
        if (!order.id) {
          api = `api/order/create`
        }
        order.userId = this.user.id
        order.locationId = this.currentTerminal['locationId']
        try {
          if (!order.id) {
            console.log(`CREATEING ORDER AND CHANGE DATA STATE`)
            const response = await this.$axios.post(api, order)
          } else {
            const response = await this.$axios.put(api, order)
          }
          // *** remove from state ****
          this.removeItemFromConfirmEntrie(order)
          this.refreshData()
          swalSuccess(this.$swal, 'Succeed', 'Your transaction completed')
        } catch (error) {
          console.log('Error: ', error)
          swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ')
        }
        this.isloading = false
      }
    },
    refreshData() {
      this.$emit('reload-data')
    },
    findCurrencyById(id) {
      return this.findAllCurrency.find((el) => el['id'] == id)['code']
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
        console.log('Using API logo for shipping:', logoUrl)
        return logoUrl
      }

      // 2. Try static logo from company data
      if (company.ticketLogo) {
        try {
          const staticLogo = require(`~/assets/image/${company.ticketLogo}`)
          console.log('Using static logo for shipping:', company.ticketLogo)
          return staticLogo
        } catch (error) {
          console.warn('Static logo not found for shipping:', company.ticketLogo, error)
        }
      }

      // 3. Try dcLogo fallback
      if (company.dcLogo) {
        try {
          const fallbackLogo = require(`~/assets/image/${company.dcLogo}`)
          console.log('Using dcLogo fallback for shipping:', company.dcLogo)
          return fallbackLogo
        } catch (error) {
          console.warn('dcLogo not found for shipping:', company.dcLogo, error)
        }
      }

      // 4. Final fallback
      console.log('Using final fallback logo for shipping')
      return '/static/images/default-logo.png'
    },

    user() {
      return this.$auth.user || ''
    },

    clientList() {
      return this.findAllClient.filter((el) =>
        el.telephone.includes(this.customerTel)
      )
    },

    currentTerminal() {
      return this.findAllTerminal.find(
        (el) => el['id'] == this.findSelectedTerminal
      )
    },

    ticketCommon() {
      return ticketHtml()
    },

    currencyList() {
      return this.findAllCurrency
    },

    ticketTotal() {
      const totalAmount = this.confirmEntries.reduce(
        (accumulator, currentItem) => {
          return (
            accumulator +
            currentItem['shippingFee'] * currentItem['shippingRate']
          )
        },
        0
      )
      return totalAmount
    },

    paymentList() {
      return this.findAllPayment
    },

    ...mapGetters([
      'findAllListOfConfirmPayment',
      'findAllListOfConfirmStockIn',
      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllCurrency',
      'findAllTerminal',
      'findSelectedTerminal',
    ]),
  },
}
</script>