<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການສິນຄ້າ</h3>
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
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player
        @close-dialog="guidelineDialog = false"
        youtube-link="5yMsQ6gRSkI"
      >
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>

    <v-dialog v-model="editProductForm" max-width="1200px">
      <product-form
        :key="productFormKey"
        @close-dialog="editProductForm = false"
        :header-id="selectedProductId"
        @refresh="fetchData"
        :isEdit="editProductForm"
      ></product-form>
    </v-dialog>
    <v-dialog v-model="productFormCreate" max-width="1200px">
      <product-form-create
        @close-dialog="productFormCreate = false"
        @refresh="fetchData"
      >
      </product-form-create>
    </v-dialog>

    <v-dialog v-model="priceListDialog" max-width="1200px">
      <price-list-form
        :key="priceListFormKey"
        @close-dialog="priceListDialog = false"
        :record-id="pricingRecordId"
        @refresh="fetchData"
      >
      </price-list-form>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="6" sm="6" md="6">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຊອກຫາ"
              single-line
              hide-detailsx
            />
          </v-col>
          <v-col cols="6" class="text-right"> 
            <canvas ref="barcodeCanvas"></canvas>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <GianttTimeline></GianttTimeline>
      </v-card-text>
     
    </v-card>
  </div>
</template>
<script>
import GianttTimeline from '~/components/timeline/GianttTimeline.vue'
import PriceListForm from '~/components/PriceListForm.vue'
import { getFormatNum } from '~/common'
import ProductFormCreate from '~/components/product/ProductFormCreate.vue'
import { swalSuccess, swalError2 } from '~/util/myUtil'
import { mapActions, mapGetters } from 'vuex'
import JsBarcode from 'jsbarcode'
export default {
  components: { GianttTimeline, ProductFormCreate, PriceListForm },
  middleware: 'auths',
  data() {
    return {
      formData:{
        pro_price:0,
        barCode:'',
      },
      barcodeImage: '',
      priceListDialog: false,
      priceListFormKey: 1,
      guidelineDialog: false,
      pricingRecordId: null,
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      selectedId: 0,
      selectedProductCost: 0,
      selectedProductName: '',
      isloading: false,
      dialogMessage: false,
      message: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      pageLine: 30,
      search: '',
      editProductForm: false,
      selectedProductId: null,
      stockFormKey: 1,
      timer: null,
      headers: [
        {
          text: 'RECID',
          align: 'center',
          value: 'id',
        },
        {
          text: 'Company',
          align: 'center',
          value: 'co_name',
        },
        
        { text: 'ຊື່ສິນຄ້າ', align: 'center', value: 'pro_name' },
        // { text: 'ຮ້ານ', align: 'center', value: 'pro_outlet_name' },
        { text: 'ຫມວດສິນຄ້າ', align: 'center', value: 'pro_category_desc' },
        { text: 'ລາຄາ', align: 'center', value: 'pro_price' },
        
        { text: 'Status', align: 'center', value: 'status' },
       
        {
          text: 'ແກ້ໄຂ',
          align: 'center',
          value: 'functionEdit',
          sortable: false,
        },
      ],
    }
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },
  },
  async mounted() {
    await this.loadCardCategory()
    await this.fetchData()
  },

  computed: {
    ...mapGetters(['currentSelectedLocation', 'findAllLocation']),
    barcodeNormal() {
      let labelsHTML = ''

      for (let i = 0; i < 10; i++) {
        labelsHTML += `
      <div style="text-align: center; margin-bottom: 20px;"> <!-- Adjust bottom margin as needed -->
        <div style="font-size: 12px; margin-bottom: 5px;">ລາຄາ: ${this.formatNumber(
          this.formData.pro_price
        )}</div>
        <img src="${this.barcodeImage}" style="width: 3cm; height: 2cm;">
      </div>
    `
      }

      const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Barcode Label</title>
      <style>
        @font-face {
          font-family: 'DM Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
        * {
          font-family: 'DM Sans', sans-serif; /* Ensure fallback font is specified */
        }
      </style>
    </head>
    <body>
      ${labelsHTML}
    </body>
    </html>
  `

      return html
    },
  },
  methods: {
    verifyStockStatus(minStock, CurStock) {
      let statusStock = '';
      CurStock == 0 ? statusStock = 'Out of stock' : minStock < CurStock ? statusStock = 'In stock' : statusStock = 'Low stock'
      return statusStock;
    },
    generateBarcode() {
      // Generate a random 12-digit number as the barcode value
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 1000000000
      // Use jsbarcode library to generate the barcode SVG image
      // Get the canvas element
      let canvas = document.createElement('canvas')
      // canvas.width = 20 // Approximation for 3cm at 96dpi
      // canvas.height = 20 // Approximation for 2cm at 96dpi
      JsBarcode(canvas, barcodeValue.toString(), {
        format: 'code128',
        displayValue: true,
        fontSize: 10,
        margin: 5,
        // width: 30, // Match canvas width
        // height: 20, // Match canvas height
      })
      // this.formData.barCode = barcodeValue.toString()
      this.generateBarcodeImage(barcodeValue)
    },
    generateBarcodeImage(barcodeValue) {
      // Get the canvas element using the ref attribute
      if (!barcodeValue) return
      let canvas = this.$refs.barcodeCanvas
      console.log(`.....Canvas logger.....`)
      console.log(canvas)
      console.log(canvas.width, canvas.height)
      // Set the canvas width and height to match the paper size
      // canvas.width = 20
      // canvas.height = 10
      // Generate the barcode image using JsBarcode
      JsBarcode(canvas, barcodeValue, {
        format: 'code128',
        displayValue: true,
        fontSize: 12,
        // margin: 10
        width: 1, // Match canvas width
        height: 13, // Match canvas height 35
      })

      // Convert the canvas to a data URL and set it as the barcodeImage data property
      this.barcodeImage = canvas.toDataURL()
      this.printBarcode()
    },
    formatNumber(value) {
      return getFormatNum(value)
    },
    async fetchData() {
      console.log(`PRODUCT LIST ===>`)
      this.isloading = true
      // https://nodejsclusters-124154-0.cloudclusters.net/product_f
      await this.$axios
        .get(`product_f/${this.currentSelectedLocation['id']}`)
        .then((res) => {
          this.loaddata = res.data.data.map((el) => {
            return {
              id: el.id,
              co_name: el.co_name,
              pro_id: el.pro_id,
              pro_name: el.pro_name,
              pro_price: el.pro_price,
              pro_desc: el.pro_desc,
              pro_status: el.pro_status,
              pro_category: el.pro_category,
              pro_category_desc: el.pro_category + ' - ' + el.categ_name,
              pro_card_count: el.card_count,
              pro_cost_price: el.cost_price,
              pro_outlet: el.outlet,
              pro_outlet_name: el.outlet_name,
              minStock: el.minStock,
              functionEdit: el.pro_id,
              functionStock: el.pro_id,
              pricing: el.pro_id,
              functionStockView: el.pro_id,
              status: el.pro_id,
              isSelect: false,
            }
          })
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    },

    loadCardCategory() {
      this.isloading = true
      this.$axios
        .get('stockcate_f')
        .then((res) => {
          this.cardType = res.data.map((el) => {
            return {
              card_type_code: el.card_type_code,
              card_type_name: el.card_type_name,
            }
          })
          this.selectedCardType = this.cardType[0].card_type_code
          console.log('CARD LEN: ' + this.cardType.length)
          console.log('CARD LEN: ' + this.cardType[0].card_type_code)
          this.isloading = false
        })
        .catch((er) => {
          console.log('Error: ' + er)
          this.isloading = false
        })
    },

    printBarcode() {
      const threeColPaper = false;
      const windowContent = threeColPaper
        ? this.barcode3by2cm
        : this.barcodeNormal
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
  },
}
</script>