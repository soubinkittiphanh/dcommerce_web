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
import { mapGetters } from 'vuex'
import ProductForm from '~/components/product/ProductForm.vue'
import PriceListForm from '~/components/PriceListForm.vue'
import ProductFormCreate from '~/components/product/ProductFormCreate.vue'
import { getFormatNum } from '~/common'
import { swalError2 } from '~/util/myUtil'
import { getBarcodeBatchHtml, generateBarcodeDataUrl, parseBarcodeSize } from '~/common/barcodePrinter'
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
    ...mapGetters(['currentSelectedLocation', 'findAllLocation', 'findAllprinters', 'findSPF', 'findAllCurrency']),
    barcodeNormal() {
      // Get SPF settings
      let barcodeSize = '40x20'
      const spfList = this.findSPF || []
      const found = spfList.find(
        (s) =>
          s.code &&
          s.code.toUpperCase() === 'BARCODE.SIZE' &&
          (s.isActive === true || s.isActive === 1 || String(s.isActive).toUpperCase() === 'Y')
      )
      if (found && found.value) {
        barcodeSize = found.value
      }
      
      const { width, height } = parseBarcodeSize(barcodeSize)

      // Get currency details
      const defaultCcy = this.findAllCurrency?.find((c) => c.isLocalCCY === true || c.isLocalCCY === 1)
      const currencyStr = defaultCcy ? defaultCcy.symbol || defaultCcy.code : 'LAK'

      // Prepare label items list
      const items = []
      for (const product of this.productSelectedList) {
        const barcodeImage = generateBarcodeDataUrl(product.barCode, width, height)
        const formattedPrice = this.formatNumber(product.pro_price)
        
        for (let i = 0; i < product.printCount; i++) {
          items.push({
            formattedPrice,
            barcodeImage,
            name: product.pro_name,
            currency: currencyStr
          })
        }
      }

      return getBarcodeBatchHtml(items, barcodeSize)
    },
    productSelectedList() {
      return this.loaddata.filter((el) => el.isSelect === true) || []
    },
  },
  methods: {
    verifyStockStatus(minStock, CurStock) {
      let statusStock = ''
      CurStock === 0
        ? (statusStock = 'Out of stock')
        : minStock < CurStock
        ? (statusStock = 'In stock')
        : (statusStock = 'Low stock')
      return statusStock
    },
    // Obsolete manual generateBarcode and generateBarcodeImage methods have been removed in favor of common/barcodePrinter helper.
    formatNumber(value) {
      return getFormatNum(value)
    },
    async fetchData() {
      console.log(`PRODUCT LIST ===>`)
      this.isloading = true
      // https://nodejsclusters-124154-0.cloudclusters.net/product_f
      await this.$axios
        .get(`product_f/${this.currentSelectedLocation.id}`)
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

        // Get barcode size from SPF
        let barcodeSize = '40x20'
        const spfList = this.findSPF || []
        const found = spfList.find(
          (s) =>
            s.code &&
            s.code.toUpperCase() === 'BARCODE.SIZE' &&
            (s.isActive === true || s.isActive === 1 || String(s.isActive).toUpperCase() === 'Y')
        )
        if (found && found.value) {
          barcodeSize = found.value
        }
        const { width, height } = parseBarcodeSize(barcodeSize)
        console.log('[BarcodePrint UI index.vue] printing barcode with width:', width, 'height:', height, 'spfValue:', barcodeSize)

        const payload = {
          html: windowContent,
          printerName,
          copies: 1, // Full HTML already contains all labels
          width,
          height,
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