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

      <v-data-table
        v-if="loaddata"
        :headers="headers"
        :search="search"
        :items="loaddata"
        :items-per-page="pageLine"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title
              >ສິນຄ້າທັງຫມົດ: {{ loaddata.length }}</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn
              size="large"
              variant="outlined"
              @click.prevent="printBarcode"
              class="primary"
              rounded
            >
              <span class="mdi mdi-barcode-scan"></span>
              ພິມບາໂຄດ
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:[`item.functionEdit`]="{ item }">
          <v-checkbox
            :disabled="!item.barCode"
            v-model.number="item.isSelect"
            label="ເລືອກ"
          ></v-checkbox>
        </template>
        <template v-slot:[`item.printCount`]="{ item }">
          <v-text-field
            v-model="item.printCount"
            :counter="10"
            type="number"
            :rules="rules.minRule"
            label=""
            required
          ></v-text-field>
        </template>

        <template v-slot:[`item.pro_cost_price`]="{ item }">
          {{ formatNumber(item.pro_cost_price) }}
        </template>
        <template v-slot:[`item.pro_price`]="{ item }">
          {{ formatNumber(item.pro_price) }}
        </template>
        <template v-slot:[`item.pro_card_count`]="{ item }">
          {{ item.pro_card_count }}
        </template>
        <template v-slot:[`item.minStock`]="{ item }">
          {{ formatNumber(item.minStock) }}
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-chip
            class="ma-2"
            :color="
              verifyStockStatus(item.minStock, item.pro_card_count).includes(
                `In`
              )
                ? `green`
                : verifyStockStatus(
                    item.minStock,
                    item.pro_card_count
                  ).includes(`Out`)
                ? `red`
                : `orange`
            "
            text-color="white"
          >
            {{ verifyStockStatus(item.minStock, item.pro_card_count) }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import ProductForm from '~/components/product/ProductForm.vue'
import PriceListForm from '~/components/PriceListForm.vue'
import { getFormatNum } from '~/common'
import ProductFormCreate from '~/components/product/ProductFormCreate.vue'
import { swalSuccess, swalError2 } from '~/util/myUtil'
import { mapActions, mapGetters } from 'vuex'
import JsBarcode from 'jsbarcode'
export default {
  components: { ProductForm, ProductFormCreate, PriceListForm },
  middleware: 'auths',
  data() {
    return {
      formData: {
        pro_price: 0,
        barCode: '',
      },
      rules: {
        nameRule: [
          (v) => !!v || 'ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ ',
          (v) => (v && v.length <= 150) || 'ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ',
        ],
        priceRule: [
          // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
          (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວນ > 0',
          (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
        ],
        minRule: [
          // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
          // (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0',
          (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
        ],
        costPrice: [
          // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາຕົ້ນທຶນ',
          (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
        ],
        retailRule: [
          // (v) => !!v || 'ກະລຸນາໃສ່ເປີເຊັນ ສ່ວນຫລຸດ ສຳລັບຂາຍສົ່ງ',
          (v) => +v >= 0 || 'ກະລຸນ ໃສ່ເປີເຊັນ > 0',
          (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
        ],
        imageRule: [
          (files) => {
            let fileSize = 0
            let totalSize = 0
            if (files) {
              files.forEach((el) => {
                fileSize += el.size
                console.log('Size: ' + el.size)
              })
              totalSize = fileSize / files.length
              console.log(
                'File size: aaa' + files.length + ' Each: ' + totalSize || 0
              )
            } else {
              console.log('File: ' + files)
            }

            console.log('Total: ' + totalSize)
            return totalSize < 2000000 || 'ຂະຫນາດເກີນ'
          },
        ],
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
          text: 'barcode',
          align: 'center',
          value: 'barCode',
        },

        { text: 'ຊື່ສິນຄ້າ', align: 'center', value: 'pro_name' },
        // { text: 'ຮ້ານ', align: 'center', value: 'pro_outlet_name' },
        { text: 'ຈຳນວນພິມ', align: 'center', value: 'printCount' },
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
    ...mapGetters(['currentSelectedLocation', 'findAllLocation', 'findAllprinters']),
    barcodeNormal() {
      let labelsHTML = ''

      for (const product of this.productSelectedList) {
        for (let i = 0; i < product.printCount; i++) {
          this.generateBarcode(product.barCode)
          labelsHTML += `
        <tr>
                          <td style="width: 500px; height: 15px;font-size:8px;">
                            ລາຄາ:${this.formatNumber(product.pro_price)}
                            </br>
                            <img src="${this.barcodeImage}">
                          </td>               
                        </tr>
    `
        }
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

      <div style="text-align: center;">
                    <table style="width: 200px; text-align: center;" >
                      ${labelsHTML}
       
                      </table>
                </div>

    </body>
    </html>
  `

      return html
    },
    productSelectedList() {
      return this.loaddata.filter((el) => el['isSelect'] == true) || []
    },
  },
  methods: {
    verifyStockStatus(minStock, CurStock) {
      let statusStock = ''
      CurStock == 0
        ? (statusStock = 'Out of stock')
        : minStock < CurStock
        ? (statusStock = 'In stock')
        : (statusStock = 'Low stock')
      return statusStock
    },
    generateBarcode(barcodeValue) {
      // Generate a random 12-digit number as the barcode value
      // const barcodeValue = Math.floor(Math.random() * 900000000000) + 1000000000
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
      // this.printBarcode()
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
              barCode: el.barCode,
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
              printCount: 1,
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
      if (this.productSelectedList.length < 1)
        return swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກ ລາຍການທີຈະພິມ')

      const windowContent = this.barcodeNormal
      
      // Get printer name from Vuex store
      const printerList = this.findAllprinters || []
      const barcodePrinter = printerList.find((p) => p.type === 'barcode')
      const printerName = barcodePrinter 
        ? barcodePrinter.printerName || barcodePrinter.printer_name || '' 
        : ''

      if (window.posApi) {
        if (!printerName) {
          const msg = "Error: No printer name found for 'barcode' type in settings!"
          this.$toast.error(msg)
          return
        }

        const payload = {
          html: windowContent,
          printerName: printerName,
          copies: 1, // Full HTML already contains all labels
        }

        window.posApi.printBarcode(payload)
        this.$toast.success(`Printing barcodes to ${printerName}`)
      } else {
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
      }
    },
  },
}
</script>