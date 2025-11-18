<template>
  <div class="modal-overlay">
    <div class="enhanced-dialog">
      <v-dialog v-model="dialogMessage" max-width="300px" persistent>
        <dialog-classic-message :message="message" @closedialog="message = null">
        </dialog-classic-message>
      </v-dialog>
      
      <v-dialog v-model="isloading" hide-overlay persistent width="300">
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
          <v-form ref="form" v-model="valid" lazy-validation>
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
                  :value="formData.pro_id || '1XXX'"
                  label="ໄອດີສິນຄ້າ"
                  disabled
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
              <v-col cols="2">
                <v-autocomplete
                  item-text="displayText"
                  item-value="id"
                  :items="productType"
                  label="Product type"
                  v-model="formData._category"
                  :loading="loadingTaxRates"
                  dense
                  outlined
                  hide-details="auto"
                  clearable
                >
                  <template v-slot:selection="{ item }">
                    <v-chip
                      x-small
                      :color="item.isDefault ? 'primary' : 'default'"
                    >
                      {{ item }}
                    </v-chip>
                    <span class="ml-1 text-caption">{{ item }}</span>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="2">
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
                    <v-chip
                      x-small
                      :color="item.isDefault ? 'primary' : 'default'"
                    >
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
                    <span
                      >Tax ({{ selectedTaxRate?.displayRate }}):
                      {{ formatNumber(calculateTaxAmount()) }}</span
                    >
                    <span
                      ><strong
                        >Total:
                        {{ formatNumber(calculateTotalWithTax()) }}</strong
                      ></span
                    >
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
                <v-switch
                  v-model.number="formData.validateStockOnSale"
                  label="ກວດສຕັອກກ່ອນຂາຍ"
                  dense
                  hide-details
                  color="success"
                />
              </v-col>

              <!-- Row 6: Description -->
              <v-col cols="12">
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
                  <div class="text-center text-caption mt-1">
                    ລາຄາ: {{ formatNumber(formData.pro_price) }}
                  </div>
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
                  </div>
                </v-card>
              </v-col>

              <!-- Action section (compact) -->
              <v-col cols="6">
                <v-row dense>
                  <v-col cols="12">
                    <div class="footer-actions">
                      <v-btn
                        color="primary"
                        @click="uploadFiles"
                        :disabled="!valid"
                        block
                        class="mb-2"
                      >
                        <v-icon left>mdi-content-save</v-icon>
                        ບັນທຶກ
                      </v-btn>
                      <v-btn
                        color="secondary"
                        @click="$emit('close-dialog')"
                        block
                        class="mb-2"
                      >
                        <v-icon left>mdi-close</v-icon>
                        ຍົກເລີກ
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// Try different import approaches - uncomment the one that works in your project:

// Option 1: Relative path (if utils is in a specific folder)
// import { getFormatNum, swalSuccess, swalError2 } from '../utils'
// import { getFormatNum, swalSuccess, swalError2 } from '../../utils'

// Option 2: Nuxt alias
// import { getFormatNum, swalSuccess, swalError2 } from '~/utils'

// Option 3: Direct path from root
// import { getFormatNum, swalSuccess, swalError2 } from '@/utils/index.js'

// Option 4: If utils is in plugins or a different location
// import { getFormatNum, swalSuccess, swalError2 } from '~/plugins/utils'

// Option 5: Define inline if utils not available
const getFormatNum = (val) => {
  if (!val) return '0'
  return Number(val).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })
}

const swalSuccess = (swal, title, message) => {
  if (swal) {
    swal.fire({
      icon: 'success',
      title: title,
      text: message,
      timer: 2000
    })
  } else {
    alert(`${title}: ${message}`)
  }
}

const swalError2 = (swal, title, error) => {
  if (swal) {
    swal.fire({
      icon: 'error',
      title: title,
      text: error.toString(),
    })
  } else {
    alert(`${title}: ${error}`)
  }
}

import JsBarcode from 'jsbarcode'

export default {
  props: {
    title: { type: String, default: 'Create Product' },
    headerId: { type: Number, default: null },
  },
  data() {
    return {
      productType:['product','service','stock'],
      valid: false,
      isloading: false,
      message: null,
      preview: false,
      previewSrc: '',
      priceListDialog: false,
      priceListFormKey: 0,
      pricingRecordId: null,
      barcodeImage: '',
      threeColPaper: false,
      
      // Tax-related data
      loadingTaxRates: false,
      taxRates: [],
      
      formData: {
        companyId: null,
        pro_category: null,
        pro_id: null,
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
        taxId: null, // Add tax field
      },
      
      rules: {
        nameRule: [(v) => !!v || 'ຊື່ສິນຄ້າຈຳເປັນ'],
        priceRule: [(v) => !!v || 'ລາຄາຈຳເປັນ'],
      },
      
      category: [],
      companyList: [],
      unitList: [],
      findAllCurrency: [],
      files: [],
    }
  },
  
  computed: {
    ...mapGetters(['findAllProductPriceListToCreate']),
    
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
    
    barcode3by2cm() {
      const html = `
            <!DOCTYPE html>
            <html>
            <head>
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
    
    barcodeNormal() {
      const html = `
            <!DOCTYPE html>
            <html>
            <head>
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
    await Promise.all([
      this.fetchCategory(),
      this.fetchCompany(),
      this.fetchUnit(),
      this.fetchCurrency(),
      this.fetchTaxRates(), // Add tax rates fetching
    ])
  },
  
  methods: {
    ...mapActions([
      'clearProductPricesToCreate',
      'addProductPricesToCreate',
      'deleteProductPricesToCreate',
    ]),
    
    fetchData() {},
    
    triggerPriceListForm() {
      this.pricingRecordId = this.headerId
      this.priceListFormKey += 1
      this.priceListDialog = true
    },
    
    validate() {
      this.$refs.form.validate()
    },
    
    formatNumber(val) {
      return getFormatNum(val)
    },
    
    // Tax calculation methods
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
        // Use console instead of toast if toast is not available
        console.error('Failed to load tax rates')
      } finally {
        this.loadingTaxRates = false
      }
    },

    calculateTaxAmount() {
      if (!this.selectedTaxRate || !this.formData.pro_price) {
        return 0
      }

      const basePrice = parseFloat(this.formData.pro_price) || 0
      const taxRate = parseFloat(this.selectedTaxRate.rate) || 0
      return basePrice * taxRate
    },

    calculateTotalWithTax() {
      const basePrice = parseFloat(this.formData.pro_price) || 0
      const taxAmount = this.calculateTaxAmount()
      return basePrice + taxAmount
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
      console.log(`.....Canvas logger.....`)
      console.log(canvas)
      if (canvas) {
        console.log(canvas.width, canvas.height)
        
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
    
    printBarcode() {
      const windowContent = this.threeColPaper
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
    
    reset() {
      this.$refs.form.reset()
    },
    
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    
    async fetchCategory() {
      this.isloading = true
      try {
        const res = await this.$axios.get('category_f')
        console.log('=>category' + res.data)
        this.category = res.data.map((el) => {
          return {
            categ_id: el.categ_id,
            categ_name: el.categ_name,
            categ_desc: el.categ_desc,
          }
        })
        if (this.category.length > 0) {
          this.formData.pro_category = this.category[0]['categ_id']
        }
      } catch (er) {
        console.log('error: ' + er.response?.data || er.message)
      }
      this.isloading = false
    },
    
    async fetchCompany() {
      this.isloading = true
      try {
        const res = await this.$axios.get('api/company/find')
        console.log('=>Company' + res.data)
        this.companyList = res.data.map((el) => {
          return {
            id: el.id,
            name: el.name,
          }
        })
        if (this.companyList.length > 0) {
          this.formData.companyId = this.companyList[0]['id']
        }
      } catch (er) {
        console.log('error: ' + er.response?.data || er.message)
      }
      this.isloading = false
    },
    
    async fetchUnit() {
      try {
        const response = await this.$axios.get('/api/unit/find')
        this.unitList = response.data.map((el) => ({
          id: el.id,
          name: el.name,
        }))
      } catch (error) {
        console.error('Error fetching units:', error)
        // Fallback if API doesn't exist
        this.unitList = []
      }
    },
    
    async fetchCurrency() {
      try {
        const response = await this.$axios.get('/api/currency/find')
        this.findAllCurrency = response.data.map((el) => ({
          id: el.id,
          code: el.code,
        }))
      } catch (error) {
        console.error('Error fetching currency:', error)
        // Fallback if API doesn't exist
        this.findAllCurrency = []
      }
    },
    
    onFilesChange(files) {
      this.files = files || []
    },
    
    async uploadFiles() {
      if (!this.$refs.form.validate()) {
        return
      }

      this.isloading = true
      const formData = new FormData()
      
      // Include tax information in the form data
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
        console.info(
          `Create product complete: response => ${JSON.stringify(response)}`
        )

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
      let api = 'api/priceList/create'
      console.log(`API => ProductId='${productId}'`, api)

      try {
        const requests = this.findAllProductPriceListToCreate.map((item) => {
          const newItem = { ...item, productId }
          return this.$axios.post(api, newItem)
        })

        const responses = await Promise.all(requests)

        responses.forEach((response) => {
          console.log(`Load data: ${JSON.stringify(response)}`)
        })
        this.clearProductPricesToCreate()
        return responses
      } catch (error) {
        swalError2(
          this.$swal,
          'Error',
          'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ໃນການເພີ່ມ price list'
        )
        console.error('Error during price list commit:', error)
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
.footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.footer-actions {
  flex-direction: column;
}

.footer-actions .btn {
  width: 100%;
  justify-content: center;
}
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
.my-forn {
  font-weight: bold;
}
.modal-footer {
  padding: 12px 20px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  min-height: 56px;
}

.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}
</style>