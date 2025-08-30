<template>
  <div>
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>
    
    <v-dialog v-model="preview" hide-overlay width="400px">
      <dia-image :i-url="previewSrc" @closeDia="preview = false"></dia-image>
    </v-dialog>
    
    <v-dialog v-model="priceListDialog" max-width="800px">
      <price-list-form
        :key="priceListFormKey"
        @close-dialog="priceListDialog = false"
        :record-id="pricingRecordId"
        @refresh="fetchData"
      ></price-list-form>
    </v-dialog>

    <v-card>
      <v-card-title class="py-2">
        <v-chip small color="primary" text-color="white">
          <v-icon left small>mdi-label</v-icon>
          {{ title }}
        </v-chip>
      </v-card-title>

      <v-card-text class="pa-3">
        <v-form ref="formLocal" v-model="validLocal" lazy-validation>
          <v-row dense>
            <!-- Row 1: Company, Category, Product ID -->
            <v-col cols="4">
              <v-autocomplete
                item-text="name"
                item-value="id"
                :items="companyList"
                label="ຮ້ານ*"
                v-model="formData.companyId"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="4">
              <v-autocomplete
                item-text="categ_name"
                item-value="categ_id"
                :items="category"
                label="ປະເພດສິນຄ້າ*"
                v-model="formData.pro_category"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="formData.pro_id"
                :disabled="!!formData.pro_id"
                label="ໄອດີສິນຄ້າ"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>

            <!-- Row 2: Name, Price, Cost -->
            <v-col cols="6">
              <v-text-field
                v-model="formData.pro_name"
                :rules="rules.nameRule"
                label="ຊື້ສິນຄ້າ*"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="formData.pro_price"
                :rules="rules.priceRule"
                label="ລາຄາ*"
                type="number"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="formData.pro_cost_price"
                :rules="rules.priceRule"
                label="ຕົ້ນທຶນ*"
                type="number"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>

            <!-- Row 3: Currency, Tax, Units -->
            <v-col cols="2">
              <v-autocomplete
                item-text="code"
                item-value="id"
                :items="findAllCurrency"
                label="Currency"
                v-model="formData.saleCurrencyId"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="4">
              <v-autocomplete
                item-text="displayText"
                item-value="id"
                :items="taxRateOptions"
                label="Tax Rate"
                v-model="formData.taxId"
                :loading="loadingTaxRates"
                dense
                outlined
                hide-details="auto"
                clearable
              >
                <template v-slot:selection="{ item }">
                  <v-chip x-small :color="item.isDefault ? 'primary' : 'default'">
                    {{ item.displayRate }}
                  </v-chip>
                  <span class="ml-1 text-caption">{{ item.name }}</span>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="3">
              <v-autocomplete
                item-text="name"
                item-value="id"
                :items="unitList"
                label="ຫົວຫນ່ວຍຮັບ*"
                v-model="formData.receiveUnitId"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="3">
              <v-autocomplete
                item-text="name"
                item-value="id"
                :items="unitList"
                label="ຫົວຫນ່ວຍສາງ*"
                v-model="formData.stockUnitId"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>

            <!-- Row 4: Retail %, Min Stock, Barcode, File Upload -->
            <v-col cols="2">
              <v-text-field
                v-model="formData.pro_retail_price"
                type="number"
                label="ລາຄາສົ່ງ %"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="2">
              <v-text-field
                v-model="formData.minStock"
                type="number"
                label="ສຕັອກຂັ້ນຕ່ຳ*"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="formData.barCode"
                label="Barcode"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="4">
              <v-file-input
                ref="filesfield"
                multiple
                accept="image/*"
                label="ຮູບພາບ"
                @change="onFilesChange"
                dense
                outlined
                hide-details="auto"
                prepend-icon=""
                prepend-inner-icon="mdi-camera"
              />
            </v-col>

            <!-- Tax Preview (Compact) -->
            <v-col cols="12" v-if="formData.taxId && formData.pro_price">
              <v-alert dense outlined color="info" class="pa-2 mb-1">
                <div class="d-flex justify-space-between text-caption">
                  <span>Base: {{ formatNumber(formData.pro_price) }}</span>
                  <span>Tax ({{ selectedTaxRate?.displayRate }}): {{ formatNumber(calculateTaxAmount()) }}</span>
                  <span><strong>Total: {{ formatNumber(calculateTotalWithTax()) }}</strong></span>
                </div>
              </v-alert>
            </v-col>

            <!-- Row 5: Action Buttons, Vendor, Status -->
            <v-col cols="2">
              <v-btn
                small
                color="primary"
                outlined
                @click="triggerPriceListForm()"
                block
              >
                ຈັດການລາຄາ
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="formData.vendorName"
                label="Vendor name"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="3">
              <v-switch
                v-model.number="formData.isActive"
                label="Active"
                dense
                hide-details
                color="success"
              />
            </v-col>
            <v-col cols="3">
              <v-textarea
                v-model="formData.pro_desc"
                label="ຄຳອະທິບາຍ"
                rows="2"
                dense
                outlined
                hide-details="auto"
                no-resize
              />
            </v-col>

            <!-- Barcode Section (Compact) -->
            <v-col cols="6">
              <v-card outlined class="pa-2">
                <canvas ref="barcodeCanvas" style="max-width: 100%; height: auto;"></canvas>
                <div class="text-center mt-1">
                  <v-btn-toggle dense>
                    <v-btn
                      x-small
                      :disabled="formData.barCode.length > 0"
                      color="primary"
                      @click="generateBarcode"
                    >
                      Generate
                    </v-btn>
                    <v-btn
                      x-small
                      :disabled="formData.barCode.length == 0"
                      color="success"
                      @click="printBarcode"
                    >
                      Print
                    </v-btn>
                  </v-btn-toggle>
                  <v-checkbox
                    v-model.number="threeColPaper"
                    label="3Col"
                    dense
                    hide-details
                    class="mt-1"
                  />
                </div>
              </v-card>
            </v-col>

            <!-- Image Preview (Compact) -->
            <v-col cols="6">
              <div style="max-height: 150px; overflow-y: auto;">
                <!-- Existing Images -->
                <div v-for="(img, idx) in formData.pro_image" :key="`existing-${idx}`" class="d-flex align-center mb-1">
                  <v-avatar size="30" @click="previewImg(`${host}/uploads/${img.name}`)">
                    <v-img :src="`${host}/uploads/${img.name}`"></v-img>
                  </v-avatar>
                  <span class="text-caption ml-2 flex-grow-1">{{ img.name }}</span>
                  <v-btn icon x-small color="error" @click="deleteFileFrServ(idx)">
                    <v-icon x-small>mdi-delete</v-icon>
                  </v-btn>
                </div>
                
                <!-- New Images Preview -->
                <div v-for="(item, index) in imagesPreviewURL" :key="`new-${index}`" class="d-flex align-center mb-1">
                  <v-avatar size="30" @click="previewImg(item.IMG_URL)">
                    <v-img :src="item.IMG_URL"></v-img>
                  </v-avatar>
                  <span class="text-caption ml-2 flex-grow-1">{{ item.NAME }}</span>
                  <v-btn icon x-small color="error" @click="deleteFile(index)">
                    <v-icon x-small>mdi-delete</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-form>
        
        <div class="text-caption mt-2">* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</div>
      </v-card-text>

      <v-card-actions class="pa-3 pt-0">
        <v-spacer></v-spacer>
        <v-btn
          text
          @click="$emit('close-dialog')"
          small
        >
          Close
        </v-btn>
        <v-btn
          color="primary"
          @click="uploadFilesLocal"
          small
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/util/myUtil'
import {
  swalSuccess,
  swalError2,
  confirmSwal,
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
  getFormatNum,
} from '~/common'
import ImagePreviewMixin from '../../pages/product/index.vue'
import { hostName } from '~/common/api'
import { mapActions, mapGetters } from 'vuex'
import JsBarcode from 'jsbarcode'
// import { Logger } from 'html2canvas/dist/types/core/logger'
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    headerId: {
      type: Number,
      default: null,
    },
  },
  middleware: 'auths',
  mixins: [ImagePreviewMixin],

  computed: {
    // ✅ ADD: Tax rate options for dropdown
    taxRateOptions() {
      return this.taxRates.map((tax) => ({
        id: tax.id,
        name: tax.name,
        code: tax.code,
        rate: tax.rate,
        displayRate: (parseFloat(tax.rate) * 100).toFixed(2) + '%',
        displayText: `${tax.name} (${(parseFloat(tax.rate) * 100).toFixed(
          2
        )}%)`,
        description: tax.description,
        isDefault: tax.isDefault,
        isActive: tax.isActive,
      }))
    },

    // ✅ ADD: Get selected tax rate details
    selectedTaxRate() {
      return this.taxRates.find((tax) => tax.id === this.formData.taxId)
    },
    ...mapGetters([
      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllCurrency',
    ]),
    unitList() {
      return this.findAllUnit
    },
    host() {
      return hostName()
    },
    barcode2by2cm() {
      const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <style>
        @font-face {
          font-family: 'DM Sans';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
        * {
          font-family: 'DM Sans';
        }
      </style>
    </head>
    <body>
      <div style="text-align: center;">
        <table style="width: 200px; text-align: center;">
          <tr>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${this.formatNumber(this.formData.pro_price)}
              <img src="${this.barcodeImage}">
            </td>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${this.formatNumber(this.formData.pro_price)}
              <img src="${this.barcodeImage}">
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `
      return html
    },
    barcode3by2cm() {
      const html = `
      <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
              <div style="text-align: center;">
      <table style="width: 200px; text-align: center;" >
  <tr>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
      <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
       
    </td>
  
  </tr>
</table>
</div>
</body>
            </html>
`

      return html
    },
    barcodeNormal() {
      const html = `
          <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
                <div style="text-align: center;">
                    <table style="width: 200px; text-align: center;" >
                        <tr>
                          <td style="width: 500px; height: 15px;font-size:8px;">
                            ລາຄາ:${this.formatNumber(this.formData.pro_price)}
                            </br>
                            <img src="${this.barcodeImage}">
                          </td>               
                        </tr>
                      </table>
                </div>
            </body>
            </html>
        `

      return html
    },
  },
  async mounted() {
    console.log('FORMDATA ID: ' + this.formData.pro_id)
    this.pro_id = this.headerId
    this.formData.pro_id = this.headerId
    console.log('Mounted: ')
    this.fetchProId(this.headerId)
    this.fetchCategory()
    this.fetchCompany()
    // ✅ ADD: Load tax rates
    await this.fetchTaxRates()
  },
  watch: {
    // ✅ ADD: Watch for tax rate changes
    'formData.taxId'(newTaxId) {
      this.onTaxRateChange()
    },

    // ✅ ADD: Watch for price changes to update tax calculations
    'formData.pro_price'() {
      // Tax calculations will automatically update due to computed properties
    },
  },
  validate(data) {
    // this.formData.pro_id = data.params.id
    console.log('MIXIN ID: ' + data.params.id)
    console.log('PRO DEFUALT ID: ' + this.pro_id)
    return /^\d+$/.test(data.params.id)
  },
  data() {
    return {
      priceListFormKey: 1,
      pricingRecordId: null,
      priceListDialog: false,
      threeColPaper: false,
      barcodeValue: '',
      imagesPreviewURL: [],
      files: null,
      IMG_URL: '',
      NAME: '',
      barcodeImage: '',
      rules: {
        taxRule: [
          (v) => !!v || 'ກະລຸນາເລືອກອັດຕາພາສີ (Please select tax rate)',
        ],
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
      preview: false,
      previewSrc: null,
      title: 'ຈັດການສິນຄ້າ',
      valid: false,
      category: [],
      // ✅ ADD: Tax-related data
      taxRates: [],
      loadingTaxRates: false,

      // ✅ UPDATE: Add taxId to formData
      formData: {
        productId: null,
        pro_category: 1001,
        pro_id: null,
        pro_name: '',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: false,
        companyId: 2,
        pro_cost_price: 0,
        minStock: 0,
        barCode: '',
        receiveUnitId: 1,
        stockUnitId: 1,
        saleCurrencyId: 1,
        costCurrencyId: 1,
        isActive: true,
        vendorName: '',
        taxId: null, // ✅ NEW: Tax ID field
      },
      companyList: [],
      isLoading: false,
      validLocal: true,
      diaMessageTitle: 'ຄຳເຕືອນ',
      diaMessageBody: 'ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ',
      pro_id: null,
      dia_confirm: false,
      tempImgId: null,
      // formData: {}
    }
  },
  methods: {
    fetchData() {},
    triggerPriceListForm() {
      this.pricingRecordId = this.formData.productId
      this.priceListFormKey += 1
      this.priceListDialog = true
    },
    formatNumber(val) {
      return getFormatNum(val)
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
        // margin: 5,
        // width: 30, // Match canvas width
        // height: 20, // Match canvas height
      })
      this.formData.barCode = barcodeValue.toString()
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
    },
    validateLocal() {
      console.log('VALIDATING...')
      this.$refs.formLocal.validate()
    },
    async fetchCategory() {
      this.isLoading = true
      await this.$axios
        .get('category_f')
        .then((res) => {
          console.log('=>category' + res.data)
          this.category = res.data.map((el) => {
            return {
              categ_id: el.categ_id,
              categ_name: el.categ_name,
              categ_desc: el.categ_desc,
            }
          })
        })
        .catch((er) => {
          console.log('error: ' + er.response.data)
        })
      this.isLoading = false
    },
    async fetchCompany() {
      this.isLoading = true
      await this.$axios
        .get('api/company/find')
        .then((res) => {
          console.log('=>Company' + res.data)
          this.companyList = res.data.map((el) => {
            return {
              id: el.id,
              name: el.name,
            }
          })
        })
        .catch((er) => {
          console.log('error: ' + er.response.data)
        })
      this.isLoading = false
    },
    previewImg(url) {
      console.warn(`image preview ${url}`)
      this.previewSrc = url
      this.preview = true
    },
    onFilesChange(payload) {
      const file = payload // in case vuetify file input
      this.files = payload
      if (file) {
        for (let i = 0; i < file.length; i++) {
          this.imagesPreviewURL.push({
            IMG_URL: URL.createObjectURL(file[i]),
            NAME: file[i].name,
            isvalid: this.sizeValidate(file[i].size),
          })
        }
        // URL.revokeObjectURL(file) // free memory
      } else {
        this.imagesPreviewURL = null
      }
    },
    deleteFile(idx) {
      this.imagesPreviewURL.splice(idx, 1)
      this.files.splice(idx, 1)
      this.deleteFileFrServ(idx)
    },
    sizeValidate(z) {
      console.log('SIZE' + z)
      const maxSize = 20000000
      if (z > maxSize) {
        return `Max size is ${maxSize / 1000}Kb`
      }
    },
    async fetchProId(id) {
      this.isLoading = true
      console.log('FECT ID:' + id)
      await this.$axios
        .post('/product_f_id', { proid: id })
        .then((res) => {
          console.log('Product ID ' + res.data)
          const el = res.data[0]
          console.log('===> Min stock', el.minStock)
          const image =
            res.data[0].img_name == null
              ? []
              : res.data.map((el) => {
                  return {
                    name: el.img_name,
                    path: el.img_path,
                  }
                })
          this.formData = {
            productId: el.id,
            pro_category: el.pro_category,
            pro_id: el.pro_id,
            pro_name: el.pro_name,
            pro_price: el.pro_price,
            pro_desc: el.pro_desc,
            pro_status: el.pro_status === 1 || false,
            pro_retail_price: el.retail_cost_percent,
            pro_cost_price: el.cost_price,
            companyId: el.companyId,
            minStock: el.minStock,
            barCode: el.barCode,
            receiveUnitId: el.receiveUnitId,
            stockUnitId: el.stockUnitId,
            costCurrencyId: el.costCurrencyId,
            saleCurrencyId: el.saleCurrencyId,
            pro_image: image,
            isActive: el.isActive,
            vendorName: el.vendorName,
          }
          if (!this.formData.barCode) {
            // ****** prevent error temporary *****
            this.formData.barCode = ''
          }
          this.generateBarcodeImage(this.formData.barCode)
        })
        .catch((er) => {
          console.log('Error: ' + er)
          this.message = er
        })
      this.isLoading = false
    },

    async deleteFileFrServ(idx) {
      //   v && this.deleteFileFrServ'

      confirmSwal(this.$swal, 'warning', async () => {
        console.log('Delete record function')
        this.isLoading = true
        await this.$axios
          .post('/unlink_file', {
            img_name: this.formData.pro_image[idx].name,
          })
          .then((res) => {
            res.data === 'Transaction completed' &&
              this.formData.pro_image.splice(idx, 1)
            // this.message = res.data
            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          })
          .catch((er) => {
            this.message = er.error
          })
        this.isLoading = false
      })
    },

    printBarcode() {
      const windowContent = this.threeColPaper
        ? this.barcode2by2cm
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
    // ✅ ADD: Fetch tax rates from API
    async fetchTaxRates() {
      this.loadingTaxRates = true
      try {
        const response = await this.$axios.get('/api/tax/active')
        this.taxRates = response.data.data || []

        // Set default tax rate if no tax is selected and we have a default
        if (!this.formData.taxId) {
          const defaultTax = this.taxRates.find((tax) => tax.isDefault)
          if (defaultTax) {
            this.formData.taxId = defaultTax.id
          }
        }

        console.log('Tax rates loaded:', this.taxRates)
      } catch (error) {
        console.error('Error loading tax rates:', error)
        // Show user-friendly error message
        this.$toast?.error?.('Failed to load tax rates') ||
          console.error('Failed to load tax rates')
      } finally {
        this.loadingTaxRates = false
      }
    },

    // ✅ ADD: Calculate tax amount
    calculateTaxAmount() {
      if (!this.selectedTaxRate || !this.formData.pro_price) {
        return 0
      }

      const basePrice = parseFloat(this.formData.pro_price) || 0
      const taxRate = parseFloat(this.selectedTaxRate.rate) || 0
      return basePrice * taxRate
    },

    // ✅ ADD: Calculate total with tax
    calculateTotalWithTax() {
      const basePrice = parseFloat(this.formData.pro_price) || 0
      const taxAmount = this.calculateTaxAmount()
      return basePrice + taxAmount
    },

    // ✅ UPDATE: Modified fetchProId to include tax data
    async fetchProId(id) {
      this.isLoading = true
      console.log('FECT ID:' + id)
      await this.$axios
        .post('/product_f_id', { proid: id })
        .then((res) => {
          console.log('Product ID ' + res.data)
          const el = res.data[0]
          console.log('===> Min stock', el.minStock)
          const image =
            res.data[0].img_name == null
              ? []
              : res.data.map((el) => {
                  return {
                    name: el.img_name,
                    path: el.img_path,
                  }
                })

          this.formData = {
            productId: el.id,
            pro_category: el.pro_category,
            pro_id: el.pro_id,
            pro_name: el.pro_name,
            pro_price: el.pro_price,
            pro_desc: el.pro_desc,
            pro_status: el.pro_status === 1 || false,
            pro_retail_price: el.retail_cost_percent,
            pro_cost_price: el.cost_price,
            companyId: el.companyId,
            minStock: el.minStock,
            barCode: el.barCode,
            receiveUnitId: el.receiveUnitId,
            stockUnitId: el.stockUnitId,
            costCurrencyId: el.costCurrencyId,
            saleCurrencyId: el.saleCurrencyId,
            pro_image: image,
            isActive: el.isActive,
            vendorName: el.vendorName,
            taxId: el.taxId || null, // ✅ ADD: Load existing tax ID
          }

          // Set default tax if none is assigned
          if (!this.formData.taxId && this.taxRates.length > 0) {
            const defaultTax = this.taxRates.find((tax) => tax.isDefault)
            if (defaultTax) {
              this.formData.taxId = defaultTax.id
            }
          }

          if (!this.formData.barCode) {
            this.formData.barCode = ''
          }
          this.generateBarcodeImage(this.formData.barCode)
        })
        .catch((er) => {
          console.log('Error: ' + er)
          this.message = er
        })
      this.isLoading = false
    },

    // ✅ UPDATE: Modified uploadFilesLocal to include tax data
    async uploadFilesLocal() {
      console.log('===> Upload data')
      if (!this.$refs.formLocal.validate()) {
        return
      }

      // ✅ ADD: Validate tax selection
      // if (!this.formData.taxId) {
      //   this.$toast?.error?.('Please select a tax rate') ||
      //     console.error('Please select a tax rate')
      //   return
      // }

      this.isLoading = true
      const formData = new FormData()

      // ✅ ADD: Include tax information in the form data
      const formDataWithTax = {
        ...this.formData,
        // Add tax calculation details for backend reference
        selectedTaxRate: this.selectedTaxRate
          ? {
              id: this.selectedTaxRate.id,
              name: this.selectedTaxRate.name,
              code: this.selectedTaxRate.code,
              rate: this.selectedTaxRate.rate,
            }
          : null,
        calculatedTaxAmount: this.calculateTaxAmount(),
        totalWithTax: this.calculateTotalWithTax(),
      }

      formData.append('FORM', JSON.stringify(formDataWithTax))

      if (this.files) {
        this.files.forEach((element) => {
          formData.append('files', element)
        })
      }

      await this.$axios
        .post('uploadmulti_update', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          this.$emit('close-dialog')
          this.$emit('refresh')
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', er.response.data)
        })
      this.isLoading = false
    },

    // ✅ ADD: Helper method to refresh tax rates
    async refreshTaxRates() {
      await this.fetchTaxRates()
    },

    // ✅ ADD: Method to handle tax rate changes
    onTaxRateChange() {
      // You can add additional logic here when tax rate changes
      // For example, recalculate prices, validate, etc.
      console.log('Tax rate changed to:', this.selectedTaxRate)
    },
  },
}
</script>

<style scoped>
.my-forn {
  font-weight: bo;
}
</style>