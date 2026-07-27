<template>
  <div class="modal-overlay">
    <div class="enhanced-dialog">
      <v-dialog v-model="isLoading" hide-overlay persistent width="300">
        <loading-indicator></loading-indicator>
      </v-dialog>

      <v-dialog v-model="preview" hide-overlay width="400px">
        <dia-image :i-url="previewSrc" @closeDia="preview = false"></dia-image>
      </v-dialog>

      <v-dialog v-model="priceListDialog" max-width="800px">
        <price-list-form :key="priceListFormKey" :record-id="pricingRecordId" @close-dialog="priceListDialog = false"
          @refresh="fetchData"></price-list-form>
      </v-dialog>

      <div class="modal-content">
        <v-card flat>
          <v-card-title class="grey lighten-4 py-2 mb-4">
            <v-chip color="primary" label>
              <v-icon left>mdi-update</v-icon>
              {{ title }}
            </v-chip>
          </v-card-title>

          <v-card-text class="pa-4">
            <v-form ref="formLocal" v-model="validLocal" lazy-validation>
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
                  <v-text-field v-model="formData.pro_id" disabled label="ໄອດີສິນຄ້າ" dense outlined />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="formData.product_code" label="ລະຫັດສິນຄ້າ (Product Code)" dense outlined />
                </v-col>
                <v-col cols="12" sm="8">
                  <v-text-field v-model="formData.pro_name" :rules="rules.nameRule" label="ຊື້ສິນຄ້າ*" dense outlined />
                </v-col>
                <v-col cols="12" sm="4">
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
                    ຈັດການລາຄາຫຼາຍລະດັບ
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
                  <v-textarea v-model="formData.pro_desc" label="ຄຳອະທິບາຍ" rows="3" dense outlined no-resize />
                  <v-file-input multiple accept="image/*" label="ເພີ່ມຮູບພາບສິນຄ້າ" dense outlined
                    prepend-icon="" prepend-inner-icon="mdi-camera" @change="onFilesChange" />

                  <v-card outlined class="pa-2 mt-2" style="max-height: 200px; overflow-y: auto">
                    <div class="font-weight-bold mb-2">Image Management</div>

                    <div v-for="(img, idx) in formData.pro_image" :key="`ex-${idx}`"
                      class="d-flex align-center mb-1 grey lighten-5 pa-1 rounded">
                      <v-avatar size="30" class="cursor-pointer" @click="previewImg(`${host}/uploads/${img.name}`)">
                        <v-img :src="`${host}/uploads/${img.name}`"></v-img>
                      </v-avatar>
                      <span class="ml-2 flex-grow-1 text-truncate">{{
                        img.name
                        }}</span>
                      <v-btn icon x-small color="error" @click="deleteFileFrServ(idx)"><v-icon
                          x-small>mdi-delete</v-icon></v-btn>
                    </div>

                    <div v-for="(item, index) in imagesPreviewURL" :key="`new-${index}`"
                      class="d-flex align-center mb-1 blue lighten-5 pa-1 rounded">
                      <v-avatar size="30" class="cursor-pointer" @click="previewImg(item.IMG_URL)">
                        <v-img :src="item.IMG_URL"></v-img>
                      </v-avatar>
                      <span class="ml-2 flex-grow-1 text-truncate">{{
                        item.NAME
                        }}</span>
                      <v-btn icon x-small color="error" @click="deleteFile(index)"><v-icon
                          x-small>mdi-close-circle</v-icon></v-btn>
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card outlined class="pa-3 d-flex flex-column align-center">
                    <canvas ref="barcodeCanvas" style="max-width: 100%"></canvas>

                    <v-checkbox v-model="threeColPaper" label="3 Column (Small Paper)" dense hide-details />

                    <div class="d-flex align-center mt-2" style="max-width: 200px">
                      <v-text-field v-model.number="printQty" type="number" label="ຈຳນວນໃບ" dense outlined hide-details
                        class="mr-2" min="1" />
                    </div>

                    <div class="mt-2">
                      <v-btn small color="primary" class="mr-2" @click="generateBarcode">Generate</v-btn>
                      <v-btn small color="success" :disabled="!formData.barCode" @click="printBarcode">
                        <v-icon left small>mdi-printer</v-icon> Print ({{
                          printQty
                        }})
                      </v-btn>
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
          <v-btn color="secondary" depressed @click="$emit('close-dialog')">Close</v-btn>
          <v-btn color="primary" :disabled="!validLocal" depressed @click="uploadFilesLocal">Update Product</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import JsBarcode from 'jsbarcode'
import ImagePreviewMixin from '../../pages/product/index.vue'
import { swalSuccess, swalError2, confirmSwal, getFormatNum } from '~/common'
import { hostName } from '~/common/api'

import {
  getBarcode2by2cmHtml,
  getBarcodeNormalHtml,
  executePrintWindow,
} from '~/common/barcodePrinter'

export default {
  mixins: [ImagePreviewMixin],
  middleware: 'auths',
  props: {
    isEdit: { type: Boolean, default: false },
    headerId: { type: Number, default: null },
  },

  data() {
    return {
      printQty: 1, // Default to 1 label
      productType: ['product', 'service', 'stock'],
      priceListFormKey: 1,
      pricingRecordId: null,
      priceListDialog: false,
      threeColPaper: false,
      imagesPreviewURL: [],
      files: null,
      barcodeImage: '',
      preview: false,
      previewSrc: null,
      title: 'ຈັດການສິນຄ້າ',
      validLocal: true,
      isLoading: false,
      taxRates: [],
      loadingTaxRates: false,

      // ✅ FIX: Initialize these so Vue sees them on render
      category: [],
      companyList: [],

      formData: {
        productId: null,
        pro_category: null,
        pro_id: null,
        product_code: '',
        pro_name: '',
        _category: 'product',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: 1,
        companyId: null,
        pro_cost_price: 0,
        minStock: 0,
        barCode: '',
        receiveUnitId: null,
        stockUnitId: null,
        saleCurrencyId: 1,
        costCurrencyId: 1,
        isActive: 1,
        validateStockOnSale: 1,
        vendorName: '',
        taxId: null,
        baseUnitId: null,
        pro_image: [],
      },

      rules: {
        nameRule: [(v) => !!v || 'ກະລຸນາໃສ່ຊື່ສິນຄ້າ'],
        priceRule: [(v) => !!/^\d+$/.test(v) || 'ກະລຸນາໃສ່ຕົວເລກເທົ່ານັ້ນ'],
      },
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
    ...mapGetters(['findAllUnit', 'findAllCurrency', 'findAllprinters']),
    unitList() {
      return this.findAllUnit
    },
    host() {
      return this.$axios.defaults.baseURL
    },
    taxRateOptions() {
      return this.taxRates.map((tax) => ({
        id: tax.id,
        name: tax.name,
        displayRate: (parseFloat(tax.rate) * 100).toFixed(2) + '%',
        displayText: `${tax.name} (${(parseFloat(tax.rate) * 100).toFixed(
          2
        )}%)`,
        rate: tax.rate,
      }))
    },
    selectedTaxRate() {
      return this.taxRates.find((tax) => tax.id === this.formData.taxId)
    },
  },

  async mounted() {
    this.isLoading = true
    try {
      await Promise.all([
        this.fetchCategory(),
        this.fetchCompany(),
        this.fetchTaxRates(),
      ])
      if (this.headerId) {
        await this.fetchProId(this.headerId)
      }
    } catch (error) {
      console.error('Error loading product details:', error)
      swalError2(this.$swal, 'Error loading product details', error.message || error)
    } finally {
      this.isLoading = false
    }
  },

  methods: {
    // ✅ FIX: Define fetchData so the warning disappears
    fetchData() {
      console.log('Price list refreshed')
      if (this.headerId) {
        this.fetchProId(this.headerId)
      }
    },

    formatNumber(val) {
      if (val === undefined || val === null || val === '') return ''
      // Use toLocaleString for the thousand separator
      return Number(val).toLocaleString('en-US')
    },

    // printBarcode() {
    //   const formattedPrice = this.formatNumber(this.formData.pro_price)
    //   let windowContent = this.threeColPaper
    //     ? getBarcode2by2cmHtml(formattedPrice, this.barcodeImage)
    //     : getBarcodeNormalHtml(formattedPrice, this.barcodeImage)
    //   executePrintWindow(windowContent)
    // },
    // Inside your methods in product.vue
    async printBarcode() {
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
          console.error(msg)
          // Open settings if possible? For now just alert.
          return
        }

        const payload = {
          html: windowContent,
          printerName,
          copies: this.printQty,
        }

        console.log('Payload sent to printBarcode:', payload)
        window.posApi.printBarcode(payload)
        this.$toast.success(`Printing ${this.printQty} barcode(s) to ${printerName}`)
      } else {
        console.warn('window.posApi NOT found. Using browser print dialog (fallback).')
        executePrintWindow(windowContent)
      }
    },

    generateBarcode() {
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 1000000000
      this.formData.barCode = barcodeValue.toString()
      this.generateBarcodeImage(this.formData.barCode)
    },

    generateBarcodeImage(barcodeValue) {
      if (!barcodeValue) return
      this.$nextTick(() => {
        const canvas = this.$refs.barcodeCanvas
        if (canvas) {
          JsBarcode(canvas, barcodeValue, {
            format: 'code128',
            displayValue: true,
            fontSize: 12,
            width: 1,
            height: 13,
          })
          this.barcodeImage = canvas.toDataURL()
        }
      })
    },

    async uploadFilesLocal() {
      if (!this.$refs.formLocal.validate()) return
      this.isLoading = true
      const fData = new FormData()

      const payload = {
        ...this.formData,
        pro_status: this.formData.isActive ? 1 : 0,
        selectedTaxRate: this.selectedTaxRate,
        calculatedTaxAmount: this.calculateTaxAmount(),
        totalWithTax: this.calculateTotalWithTax(),
      }

      fData.append('FORM', JSON.stringify(payload))
      if (this.files) {
        this.files.forEach((file) => fData.append('files', file))
      }

      await this.$axios
        .post('uploadmulti_update', fData)
        .then(() => {
          this.$emit('close-dialog')
          this.$emit('refresh')
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', er.response.data)
        })
      this.isLoading = false
    },

    async fetchProId(id) {
      try {
        const res = await this.$axios.post('/product_f_id', { proid: id })
        if (typeof res.data === 'string' && res.data.startsWith('SQL')) {
          throw new Error(res.data)
        }
        if (!res.data || res.data.length === 0) {
          throw new Error('Product details not found in database.')
        }
        const el = res.data[0]
        const images = (el && el.img_name)
          ? res.data.map((i) => ({ name: i.img_name, path: i.img_path }))
          : []
        this.formData = {
          productId: el.id,
          pro_category: el.pro_category,
          pro_id: el.pro_id,
          product_code: el.product_code || '',
          pro_name: el.pro_name,
          _category: el._category || 'product',
          pro_price: el.pro_price,
          pro_desc: el.pro_desc,
          pro_status: el.pro_status,
          pro_retail_price: el.retail_cost_percent,
          pro_cost_price: el.cost_price,
          companyId: el.companyId,
          minStock: el.minStock,
          barCode: el.barCode || '',
          receiveUnitId: el.receiveUnitId,
          stockUnitId: el.stockUnitId,
          costCurrencyId: el.costCurrencyId || 1,
          saleCurrencyId: el.saleCurrencyId || 1,
          pro_image: images,
          isActive: el.isActive == 1,
          validateStockOnSale: el.validateStockOnSale == 1,
          vendorName: el.vendorName,
          taxId: el.taxId || null,
          baseUnitId: el.baseUnitId,
        }
        this.generateBarcodeImage(this.formData.barCode)
      } catch (error) {
        console.error('Error inside fetchProId:', error)
        throw error
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
    async fetchTaxRates() {
      try {
        const res = await this.$axios.get('/api/tax/active')
        this.taxRates = res.data.data || []
      } catch (error) {
        console.error('Error fetching tax rates:', error)
        this.taxRates = []
        throw error
      }
    },
    async fetchCategory() {
      try {
        const res = await this.$axios.get('/category_f')
        if (typeof res.data === 'string' && res.data.startsWith('Error')) {
          throw new Error(res.data)
        }
        if (Array.isArray(res.data)) {
          this.category = res.data
            .filter((el) => el.isActive === true || el.isActive === 1)
            .map((el) => ({
              categ_id: el.categ_id,
              categ_name: el.categ_name,
            }))
        } else {
          this.category = []
        }
      } catch (error) {
        console.error('Error fetching category:', error)
        this.category = []
        throw error
      }
    },
    async fetchCompany() {
      try {
        let res = await this.$axios.get('/api/company/find')
        if (!Array.isArray(res.data) || res.data.length === 0) {
          res = await this.$axios.get('/api/company/findAll')
        }
        if (Array.isArray(res.data)) {
          this.companyList = res.data.map((el) => ({ id: el.id, name: el.name }))
        } else {
          this.companyList = []
        }
      } catch (error) {
        console.error('Error fetching company list:', error)
        this.companyList = []
        throw error
      }
    },
    onFilesChange(payload) {
      this.files = payload
      if (payload) {
        this.imagesPreviewURL = Array.from(payload).map((file) => ({
          IMG_URL: URL.createObjectURL(file),
          NAME: file.name,
        }))
      }
    },
    deleteFile(idx) {
      this.imagesPreviewURL.splice(idx, 1)
      this.files.splice(idx, 1)
    },
    async deleteFileFrServ(idx) {
      confirmSwal(this.$swal, 'warning', async () => {
        this.isLoading = true
        await this.$axios
          .post('/unlink_file', { img_name: this.formData.pro_image[idx].name })
          .then(() => {
            this.formData.pro_image.splice(idx, 1)
            swalSuccess(this.$swal, 'Succeed', 'ລຶບສຳເລັດ')
          })
        this.isLoading = false
      })
    },
    triggerPriceListForm() {
      this.pricingRecordId = this.formData.productId
      this.priceListFormKey += 1
      this.priceListDialog = true
    },
    previewImg(url) {
      this.previewSrc = url
      this.preview = true
    },
  },
}
</script>
<style scoped>
/* 1. Global Font Force for Noto Sans Lao */
.enhanced-dialog,
.enhanced-dialog *,
.v-application .enhanced-dialog {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.enhanced-dialog ::v-deep .v-label,
.enhanced-dialog ::v-deep .v-input,
.enhanced-dialog ::v-deep .v-btn__content,
.enhanced-dialog ::v-deep . {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

/* 2. Modal Layout */
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
}

.enhanced-dialog {
  background: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 20px;
}

/* 3. Sticky Footer */
.modal-footer {
  position: sticky;
  bottom: 0;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 12px 20px;
  z-index: 10;
}

.footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* 4. Custom Scrollbar */
.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}
</style>