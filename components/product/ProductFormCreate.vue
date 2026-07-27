<template>
  <div class="modal-overlay">
    <div class="enhanced-dialog">
      <div class="modal-content">
        <v-card flat>
          <v-card-title class="grey lighten-4 py-2 mb-4">
            <v-chip color="primary" label>
              <v-icon left>mdi-package-variant-closed</v-icon>
              {{ title }}
            </v-chip>
          </v-card-title>

          <v-card-text class="pa-4">
            <v-form ref="form" v-model="valid" lazy-validation>
              <div class=" primary--text mb-2">
                ຂໍ້ມູນພື້ນຖານ (General Information)
              </div>
              <v-row dense class="mb-4">
                <v-col cols="12" sm="3">
                  <v-autocomplete v-model="formData.companyId" :items="companyList" item-text="name" item-value="id"
                    label="ຮ້ານ*" dense outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-autocomplete v-model="formData.pro_category" :items="category" item-text="categ_name"
                    item-value="categ_id" label="ໝວດໝູ່*" dense outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-autocomplete v-model="formData._category" :items="productType" label="ປະເພດສິນຄ້າ (Type)*" dense
                    outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-text-field :value="formData.pro_id || 'AUTO'" label="ໄອດີສິນຄ້າ" disabled dense outlined />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="formData.pro_name" :rules="rules.nameRule" label="ຊື້ສິນຄ້າ*" dense outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-text-field v-model="formData.product_code" label="ລະຫັດສິນຄ້າ (Product Code)" dense outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-text-field v-model="formData.barCode" label="Barcode" dense outlined
                    append-icon="mdi-barcode-scan" />
                </v-col>
              </v-row>

              <v-divider class="mb-4"></v-divider>

              <div class=" orange--text text--darken-3 mb-2">
                ການກຳນົດລາຄາ ແລະ ພາສີ (Pricing & Tax)
              </div>
              <v-row dense>
                <v-col cols="6" sm="3">
                  <v-text-field v-model="formattedCostPrice" label="ຕົ້ນທຶນ*" dense outlined color="error" />
                </v-col>

                <v-col cols="6" sm="3">
                  <v-text-field v-model="formattedProPrice" label="ລາຄາຂາຍ*" dense outlined color="success" />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-autocomplete v-model="formData.saleCurrencyId" :items="findAllCurrency" item-text="code"
                    item-value="id" label="ສະກຸນເງິນ*" dense outlined />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-autocomplete v-model="formData.taxId" :items="taxRateOptions" item-text="displayText"
                    item-value="id" label="ອາກອນ (Tax)" dense outlined />
                </v-col>

                <v-col v-if="formData.taxId && formData.pro_price" cols="12">
                  <v-alert dense color="blue-grey lighten-5" class="pa-2">
                    <div class="d-flex justify-space-around blue-grey--text text--darken-3">
                      <span>Base:
                        <strong>{{
                          formatNumber(formData.pro_price)
                        }}</strong></span>
                      <span>Tax ({{ selectedTaxRate?.displayRate }}):
                        <strong>{{
                          formatNumber(calculateTaxAmount())
                        }}</strong></span>
                      <span class="primary--text">Total:
                        <strong>{{
                          formatNumber(calculateTotalWithTax())
                        }}</strong></span>
                    </div>
                  </v-alert>
                </v-col>

                <v-col cols="12" class="mt-n2 mb-4">
                  <v-btn small text color="primary" @click="triggerPriceListForm">
                    <v-icon left small>mdi-layers-plus</v-icon>
                    ຈັດການລາຄາຫຼາຍລະດັບ (Multi-level Price)
                  </v-btn>
                </v-col>
              </v-row>

              <v-divider class="mb-4"></v-divider>

              <div class=" green--text text--darken-3 mb-2">
                ສາງ ແລະ ການຈັດຊື້ (Inventory)
              </div>
              <v-row dense class="mb-4">
                <v-col cols="6" sm="3">
                  <v-autocomplete v-model="formData.receiveUnitId" :items="unitList" item-text="name" item-value="id"
                    label="ຫົວຫນ່ວຍຮັບ*" dense outlined />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-autocomplete v-model="formData.stockUnitId" :items="unitList" item-text="name" item-value="id"
                    label="ຫົວຫນ່ວຍສາງ*" dense outlined />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-autocomplete v-model="formData.baseUnitId" :items="unitList" item-text="name" item-value="id"
                    label="ຫົວຫນ່ວຍພື້ນຖານ (Base Unit)" dense outlined />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-text-field v-model="formData.minStock" type="number" label="ສຕັອກຂັ້ນຕ່ຳ*" dense outlined />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-text-field v-model="formData.vendorName" label="Vendor name" dense outlined />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-switch v-model.number="formData.isActive" label="Active" dense color="success" />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-switch v-model.number="formData.validateStockOnSale" label="ກວດສຕັອກກ່ອນຂາຍ" dense
                    color="warning" />
                </v-col>
              </v-row>

              <v-divider class="mb-4"></v-divider>

              <v-row dense>
                <v-col cols="12" md="6">
                  <v-textarea v-model="formData.pro_desc" label="ຄຳອະທິບາຍ (Description)" rows="3" dense outlined
                    no-resize />
                  <v-file-input multiple accept="image/*" label="ຮູບພາບສິນຄ້າ" dense outlined prepend-icon=""
                    prepend-inner-icon="mdi-camera" @change="onFilesChange" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-card outlined class="pa-3 d-flex flex-column align-center">
                    <canvas ref="barcodeCanvas" style="max-width: 100%"></canvas>
                    <v-checkbox v-model="threeColPaper" label="3 Column (Small Paper)" dense hide-details />
                    <div class="mt-2">
                      <v-btn small color="primary" class="mr-2" @click="generateBarcode">ສ້າງ Barcode</v-btn>
                      <v-btn small color="success" :disabled="!formData.barCode" @click="printBarcode">ພິມ</v-btn>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </div>

      <div class="modal-footer">
        <div class="footer-actions">
          <v-btn color="secondary" depressed @click="$emit('close-dialog')">ຍົກເລີກ</v-btn>
          <v-btn color="primary" :disabled="!valid" depressed @click="uploadFiles">ບັນທຶກສິນຄ້າ</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import JsBarcode from 'jsbarcode'

// ✅ IMPORT: Import the barcode logic (Adjust path to where you saved the file)
import {
  getBarcode2by2cmHtml,
  getBarcodeNormalHtml,
  executePrintWindow,
} from '~/common/barcodePrinter'

// Utils definition (kept from your original code)
const getFormatNum = (val) => {
  if (!val) return '0'
  return Number(val).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
}

const swalSuccess = (swal, title, message) => {
  if (swal) {
    swal.fire({
      icon: 'success',
      title,
      text: message,
      timer: 2000,
    })
  } else {
    alert(`${title}: ${message}`)
  }
}

const swalError2 = (swal, title, error) => {
  if (swal) {
    swal.fire({
      icon: 'error',
      title,
      text: error.toString(),
    })
  } else {
    alert(`${title}: ${error}`)
  }
}

export default {
  props: {
    title: { type: String, default: 'Create Product' },
    headerId: { type: Number, default: null },
  },
  data() {
    return {
      productType: ['product', 'service', 'stock'],
      valid: false,
      isloading: false,
      message: null,
      preview: false,
      previewSrc: '',
      priceListDialog: false,
      priceListFormKey: 0,
      pricingRecordId: null,
      barcodeImage: '',
      threeColPaper: false, // This toggles the print size

      // Tax-related data
      loadingTaxRates: false,
      taxRates: [],

      formData: {
        companyId: null,
        pro_category: null,
        pro_id: null,
        product_code: '',
        pro_name: '',
        _category: 'product',
        pro_price: 0,
        pro_cost_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        isActive: 1,
        validateStockOnSale: 1,
        minStock: 0,
        barCode: '',
        receiveUnitId: null,
        stockUnitId: null,
        saleCurrencyId: null,
        vendorName: '',
        taxId: null,
        baseUnitId: null,
      },

      rules: {
        nameRule: [(v) => !!v || 'ຊື່ສິນຄ້າຈຳເປັນ'],
        priceRule: [(v) => !!v || 'ລາຄາຈຳເປັນ'],
        currencyRule: [(v) => !!v || 'Currency is required'],
      },

      category: [],
      companyList: [],
      findAllCurrency: [],
      files: [],
    }
  },

  computed: {
    formattedProPrice: {
      get() {
        // Formats the raw number from formData to a string with commas
        return this.formatNumber(this.formData.pro_price)
      },
      set(newVal) {
        // Strips commas and updates the raw number in formData
        const number = newVal.replace(/,/g, '')
        this.formData.pro_price = isNaN(parseFloat(number))
          ? 0
          : parseFloat(number)
      },
    },

    formattedCostPrice: {
      get() {
        return this.formatNumber(this.formData.pro_cost_price)
      },
      set(newVal) {
        const number = newVal.replace(/,/g, '')
        this.formData.pro_cost_price = isNaN(parseFloat(number))
          ? 0
          : parseFloat(number)
      },
    },
    ...mapGetters([
      'findAllProductPriceListToCreate',
      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllCurrency',
      'findAllprinters',
    ]),
    unitList() {
      return this.findAllUnit
    },

    dialogMessage() {
      return this.message !== null
    },

    // Tax rate options for autocomplete
    taxRateOptions() {
      return this.taxRates.map((rate) => ({
        id: rate.id,
        name: rate.name,
        code: rate.code,
        rate: rate.rate,
        isDefault: rate.isDefault,
        displayText: `${rate.name} (${rate.code})`,
        displayRate: `${(rate.rate * 100).toFixed(1)}%`,
      }))
    },

    // Get selected tax rate details
    selectedTaxRate() {
      if (!this.formData.taxId || !this.taxRates.length) return null
      return this.taxRates.find((rate) => rate.id === this.formData.taxId)
    },

    // ✅ NOTE: barcode3by2cm and barcodeNormal are REMOVED from computed
    // They are now handled by the imported functions.
  },

  async mounted() {
    await Promise.all([
      this.fetchCategory(),
      this.fetchCompany(),
      this.fetchCurrency(),
      this.fetchTaxRates(),
    ])
  },

  methods: {
    ...mapActions([
      'clearProductPricesToCreate',
      'addProductPricesToCreate',
      'deleteProductPricesToCreate',
    ]),

    fetchData() { },

    triggerPriceListForm() {
      this.pricingRecordId = this.headerId
      this.priceListFormKey += 1
      this.priceListDialog = true
    },

    validate() {
      this.$refs.form.validate()
    },

    formatNumber(val) {
      if (val === undefined || val === null || val === '') return ''
      // Use toLocaleString for the thousand separator
      return Number(val).toLocaleString('en-US')
    },

    // Tax calculation methods
    async fetchTaxRates() {
      this.loadingTaxRates = true
      try {
        const response = await this.$axios.get('/api/tax/active')
        this.taxRates = response.data.data || []

        if (!this.formData.taxId) {
          const defaultTax = this.taxRates.find((tax) => tax.isDefault)
          if (defaultTax) {
            this.formData.taxId = defaultTax.id
          }
        }
      } catch (error) {
        console.error('Error loading tax rates:', error)
      } finally {
        this.loadingTaxRates = false
      }
    },

    calculateTaxAmount() {
      // 1. Safety check
      if (!this.selectedTaxRate || !this.formData.pro_price) return 0

      const price = parseFloat(this.formData.pro_price)
      const rate = parseFloat(this.selectedTaxRate.rate)
      const type = this.selectedTaxRate.taxType // 'INC' or 'EXC'

      if (type === 'INC') {
        /**
         * INCLUSIVE CALCULATION:
         * If Price is 110 and Tax is 10%, the tax amount is 10.
         * Formula: Price - (Price / (1 + Rate))
         */
        return price - price / (1 + rate)
      } else {
        /**
         * EXCLUSIVE CALCULATION (Default):
         * If Price is 100 and Tax is 10%, the tax amount is 10.
         * Formula: Price * Rate
         */
        return price * rate
      }
    },
    calculateTotalWithTax() {
      const price = parseFloat(this.formData.pro_price || 0)

      if (this.selectedTaxRate && this.selectedTaxRate.taxType !== 'INC') {
        // If Exclusive, we add the tax to the base
        return price + this.calculateTaxAmount()
      }

      // If Inclusive, the total IS the pro_price
      return price
    },

    onTaxRateChange() {
      console.log('Tax rate changed to:', this.selectedTaxRate)
    },

    generateBarcode() {
      const barcodeValue =
        Math.floor(Math.random() * 900000000000) + 100000000000
      const canvas = document.createElement('canvas')
      JsBarcode(canvas, barcodeValue.toString(), {
        format: 'code128',
        displayValue: true,
        fontSize: 20,
        margin: 10,
      })
      this.formData.barCode = barcodeValue.toString()
      this.generateBarcodeImage(barcodeValue)
    },

    generateBarcodeImage(barcode) {
      const canvas = this.$refs.barcodeCanvas
      if (canvas) {
        JsBarcode(canvas, barcode, {
          format: 'code128',
          displayValue: true,
          fontSize: 12,
          width: 1,
          height: 13,
        })
        this.barcodeImage = canvas.toDataURL()
      }
    },

    // ✅ REFACTORED: Printing logic using external helper
    printBarcode() {
      console.log('--- 🏁 Starting printBarcode Function ---')

      const rawPrice = parseFloat(this.formData.pro_price || 0)
      let finalPrice = rawPrice

      if (this.selectedTaxRate) {
        if (this.selectedTaxRate.taxType !== 'INC') {
          const taxRate = parseFloat(this.selectedTaxRate.rate || 0)
          finalPrice = rawPrice + rawPrice * taxRate
          console.log(`Tax added (EXC). New Total: ${finalPrice}`)
        }
      }

      const formattedPrice = this.formatNumber(finalPrice)
      console.log('Price to print:', formattedPrice)

      const printerList = this.findAllprinters || []
      console.log('Available printer settings:', printerList)

      const barcodePrinter = printerList.find((p) => p.type === 'barcode')
      console.log('Found barcode printer config:', barcodePrinter)

      // Handle both property name variations: printerName and printer_name
      const printerName = barcodePrinter
        ? barcodePrinter.printerName || barcodePrinter.printer_name || ''
        : ''

      console.log('Final Printer Name string:', `"${printerName}"`)

      const productCurrency = this.findAllCurrency?.find((c) => c.id == this.formData.saleCurrencyId)
      const localCcy = this.findAllCurrency?.find((c) => c.isLocalCCY === true || c.isLocalCCY === 1)
      const selectedCcy = productCurrency || localCcy
      const currencyStr = selectedCcy ? selectedCcy.symbol || selectedCcy.code : 'LAK'

      const windowContent = this.threeColPaper
        ? getBarcode2by2cmHtml(formattedPrice, this.barcodeImage, currencyStr)
        : getBarcodeNormalHtml(formattedPrice, this.barcodeImage, this.formData.pro_name, currencyStr)

      if (window.posApi) {
        console.log('Bridge window.posApi found. Checking for printer name...')

        if (!printerName) {
          const msg = "Error: No printer name found for 'barcode' type in settings!"
          this.$toast.error(msg)
          return
        }

        const payload = {
          html: windowContent,
          printerName,
          copies: 1,
        }

        window.posApi.printBarcode(payload)
        this.$toast.success(`Printing barcode to ${printerName}`)
      } else {
        console.warn('window.posApi NOT found. Using browser print dialog (fallback).')
        executePrintWindow(windowContent)
      }
    },

    reset() {
      this.$refs.form.reset()
    },

    resetValidation() {
      this.$refs.form.resetValidation()
    },

    async fetchCategory() {
      this.isloading = true
      try {
        const res = await this.$axios.get('/category_f')
        // Filter only active categories and map the required fields
        this.category = res.data
          .filter((el) => el.isActive === true || el.isActive === 1)
          .map((el) => {
            return {
              categ_id: el.categ_id,
              categ_name: el.categ_name,
              categ_desc: el.categ_desc,
            }
          })
        if (this.category.length > 0) {
          this.formData.pro_category = this.category[0].categ_id
        }
      } catch (er) {
        console.log('error: ' + er.response?.data || er.message)
      }
      this.isloading = false
    },

    async fetchCompany() {
      this.isloading = true
      try {
        let res = await this.$axios.get('/api/company/find')
        if (!res.data || !Array.isArray(res.data) || res.data.length === 0) {
          res = await this.$axios.get('/api/company/findAll')
        }
        this.companyList = res.data.map((el) => {
          return {
            id: el.id,
            name: el.name,
          }
        })
        if (this.companyList.length > 0) {
          this.formData.companyId = this.companyList[0].id
        }
      } catch (er) {
        console.log('error: ' + er.response?.data || er.message)
      }
      this.isloading = false
    },

    async fetchCurrency() {
      try {
        const response = await this.$axios.get('/api/currency/findAll')
        this.findAllCurrency = response.data
          .filter((el) => el.isActive === true || el.isActive === 1)
          .map((el) => ({
            id: el.id,
            code: el.code,
          }))
      } catch (error) {
        console.error('Error fetching currency:', error)
        this.findAllCurrency = []
      }
    },

    onFilesChange(files) {
      this.files = files || []
    },

    getFilePreview(file) {
      if (file && file instanceof File) {
        return URL.createObjectURL(file)
      }
      return ''
    },

    removeFile(index) {
      this.files.splice(index, 1)
    },

    async uploadFiles() {
      if (!this.$refs.form.validate()) {
        return
      }

      this.isloading = true
      const formData = new FormData()
      const formDataWithTax = {
        ...this.formData,
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

      if (this.files && this.files.length > 0) {
        this.files.forEach((element) => {
          formData.append('files', element)
        })
      }

      try {
        const response = await this.$axios.post('uploadmulti', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })

        const productIdCreated = response.data.split('|')[1]
        console.log(`Product ID created: ${productIdCreated}`)
        const commResponse = await this.commitPriceListRecord(productIdCreated)
        console.info(`Commit response ${commResponse}`)
        this.isloading = false
        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')

        this.$emit('refresh')
        this.$emit('close-dialog')
      } catch (error) {
        this.isloading = false
        swalError2(this.$swal, 'Error', error)
        console.error('Error response:', error.response)
      }
    },

    async commitPriceListRecord(productId) {
      this.isloading = true
      const api = 'api/priceList/create'

      try {
        const requests = this.findAllProductPriceListToCreate.map((item) => {
          const newItem = { ...item, productId }
          return this.$axios.post(api, newItem)
        })

        const responses = await Promise.all(requests)
        this.clearProductPricesToCreate()
        return responses
      } catch (error) {
        swalError2(
          this.$swal,
          'Error',
          'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ໃນການເພີ່ມ price list'
        )
        return null
      }
    },

    previewImg(url) {
      this.previewSrc = url
      this.preview = true
    },
  },
}
</script>
<style scoped>
/* 1. Global Font Force for this component */
.enhanced-dialog,
.enhanced-dialog * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

/* 2. Deep selectors for Vuetify specific elements */
.enhanced-dialog ::v-deep .v-label,
.enhanced-dialog ::v-deep .v-input,
.enhanced-dialog ::v-deep .v-btn__content,
.enhanced-dialog ::v-deep .v-chip__content,
.enhanced-dialog ::v-deep .v-messages,
.enhanced-dialog ::v-deep .,
.enhanced-dialog ::v-deep .v-alert__content {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

/* 3. Modal Layout & Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
  padding: 0;
}

.enhanced-dialog {
  background: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 4. Scrollable Content Area */
.modal-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 20px;
}

/* 5. Sticky Footer */
.modal-footer {
  position: sticky;
  bottom: 0;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 12px 20px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* 6. Responsive adjustments */
@media (max-width: 768px) {
  .enhanced-dialog {
    width: 100vw;
    height: 100vh;
  }

  .footer-actions {
    flex-direction: row;
    gap: 8px;
  }
}

@media (max-width: 600px) {
  .modal-footer {
    padding: 8px 16px;
  }

  .footer-actions {
    width: 100%;
  }

  .footer-actions .v-btn {
    flex: 1;
  }
}

/* 7. Custom Scrollbar for better UI */
.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>