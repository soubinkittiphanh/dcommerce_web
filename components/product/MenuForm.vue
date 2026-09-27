<template>
  <div class="modal-overlay">
    <div class="enhanced-dialog">
      <!-- Loading Indicator -->
      <v-dialog v-model="isloading" hide-overlay persistent width="300">
        <loading-indicator></loading-indicator>
      </v-dialog>

      <!-- Image Preview Dialog -->
      <v-dialog v-model="preview" hide-overlay width="400px">
        <dia-image :i-url="previewSrc" @closeDia="preview = false"></dia-image>
      </v-dialog>

      <!-- Multi-level Price List Dialog -->
      <v-dialog v-model="priceListDialog" max-width="800px">
        <price-list-form :key="priceListFormKey" :record-id="pricingRecordId" @close-dialog="priceListDialog = false"
          @refresh="fetchData"></price-list-form>
      </v-dialog>

      <div class="modal-content">
        <v-card flat>
          <v-card-title class="grey lighten-4 py-2 mb-4">
            <v-chip color="primary" label>
              <v-icon left>{{ isEdit ? 'mdi-update' : 'mdi-plus-circle' }}</v-icon>
              {{ isEdit ? 'ແກ້ໄຂເມນູອາຫານ (Edit Menu)' : 'ເພີ່ມເມນູໃໝ່ (Create New Menu)' }}
            </v-chip>
          </v-card-title>

          <v-card-text class="pa-4">
            <v-form ref="form" v-model="valid" lazy-validation>
              <div class="primary--text mb-2">
                募集ຂໍ້ມູນພື້ນຖານເມນູ (General Menu Information)
              </div>
              <v-row dense class="mb-4">
                <v-col cols="12" sm="3">
                  <v-autocomplete v-model="formData.companyId" :items="companyList" item-text="name" item-value="id"
                    label="ຮ້ານ*" dense outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-autocomplete v-model="formData.pro_category" :items="category" item-text="categ_name"
                    item-value="categ_id" label="ໝວດໝູ່ເມນູ*" dense outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-autocomplete v-model="formData._category" :items="productType" label="ປະເພດເມນູ (Type)*" dense
                    outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-text-field :value="formData.pro_id || 'AUTO'" label="ໄອດີເມນູ" disabled dense outlined />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="formData.pro_name" :rules="rules.nameRule" label="ຊື່ເມນູອາຫານ*" dense outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-text-field v-model="formData.product_code" label="ລະຫັດເມນູ (Menu Code)" dense outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-text-field v-model="formData.barCode" label="Barcode" dense outlined
                    append-icon="mdi-barcode-scan" />
                </v-col>
              </v-row>

              <v-divider class="mb-4"></v-divider>

              <div class="orange--text text--darken-3 mb-2">
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

              <div class="green--text text--darken-3 mb-2">
                ສາງ ແລະ ການຈັດຊື້ (Inventory)
              </div>
              <v-row dense class="mb-4">
                <v-col cols="6" sm="3">
                  <v-autocomplete v-model="formData.receiveUnitId" :items="unitList" item-text="name" item-value="id"
                    label="ຫົວໜ່ວຍ*" dense outlined />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-autocomplete v-model="formData.stockUnitId" :items="unitList" item-text="name" item-value="id"
                    label="ຫົວໜ່ວຍສະຕັອກ*" dense outlined />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-autocomplete v-model="formData.baseUnitId" :items="unitList" item-text="name" item-value="id"
                    label="ຫົວໜ່ວຍພື້ນຖານ (Base Unit)" dense outlined />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-text-field v-model="formData.minStock" type="number" label="ສະຕັອກຂັ້ນຕ່ຳ*" dense outlined />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-text-field v-model="formData.vendorName" label="ຜູ້ສະໜອງ (Vendor Name)" dense outlined />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-switch v-model.number="formData.isActive" label="ສະຖານະໃຊ້ງານ (Active)" dense color="success" />
                </v-col>
                <v-col cols="6" sm="3">
                  <v-switch v-model.number="formData.validateStockOnSale" label="ກວດສະຕັອກກ່ອນຂາຍ" dense
                    color="warning" />
                </v-col>
              </v-row>

              <v-divider class="mb-4"></v-divider>

              <v-row dense>
                <v-col cols="12" md="6">
                  <v-textarea v-model="formData.pro_desc" label="ຄຳອະທິບາຍເມນູ (Description)" rows="3" dense outlined
                    no-resize />
                  <v-file-input multiple accept="image/*" label="ເພີ່ມຮູບພາບເມນູ" dense outlined prepend-icon=""
                    prepend-inner-icon="mdi-camera" @change="onFilesChange" />

                  <!-- Existing Image Management (only for edit mode) -->
                  <v-card v-if="isEdit && formData.pro_image && formData.pro_image.length > 0" outlined class="pa-2 mt-2" style="max-height: 200px; overflow-y: auto">
                    <div class="font-weight-bold mb-2">Image Management</div>
                    <div v-for="(img, idx) in formData.pro_image" :key="`ex-${idx}`"
                      class="d-flex align-center mb-1 grey lighten-5 pa-1 rounded">
                      <v-avatar size="30" class="cursor-pointer" @click="previewImg(`${host}/uploads/${img.name}`)">
                        <v-img :src="`${host}/uploads/${img.name}`"></v-img>
                      </v-avatar>
                      <span class="ml-2 flex-grow-1 text-truncate">{{ img.name }}</span>
                      <v-btn icon x-small color="error" @click="deleteFileFrServ(idx)"><v-icon
                          x-small>mdi-delete</v-icon></v-btn>
                    </div>
                  </v-card>

                  <!-- Preview of Newly Added Images -->
                  <v-card v-if="imagesPreviewURL.length > 0" outlined class="pa-2 mt-2" style="max-height: 200px; overflow-y: auto">
                    <div class="font-weight-bold mb-2">New Images Preview</div>
                    <div v-for="(item, index) in imagesPreviewURL" :key="`new-${index}`"
                      class="d-flex align-center mb-1 blue lighten-5 pa-1 rounded">
                      <v-avatar size="30" class="cursor-pointer" @click="previewImg(item.IMG_URL)">
                        <v-img :src="item.IMG_URL"></v-img>
                      </v-avatar>
                      <span class="ml-2 flex-grow-1 text-truncate">{{ item.NAME }}</span>
                      <v-btn icon x-small color="error" @click="deleteFile(index)"><v-icon
                          x-small>mdi-close-circle</v-icon></v-btn>
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card outlined class="pa-3 d-flex flex-column align-center">
                    <canvas ref="barcodeCanvas" style="max-width: 100%"></canvas>
                    <v-checkbox v-model="threeColPaper" label="3 Column (Small Paper)" dense hide-details />
                    
                    <div v-if="isEdit" class="d-flex align-center mt-2" style="max-width: 200px">
                      <v-text-field v-model.number="printQty" type="number" label="ຈຳນວນໃບ" dense outlined hide-details
                        class="mr-2" min="1" />
                    </div>

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
          <v-btn color="primary" :disabled="!valid" depressed @click="saveMenu">
            {{ isEdit ? 'ບັນທຶກການປ່ຽນແປງ' : 'ບັນທຶກເມນູ' }}
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import JsBarcode from 'jsbarcode'

import {
  getBarcode2by2cmHtml,
  getBarcodeNormalHtml,
  executePrintWindow,
  parseBarcodeSize,
} from '~/common/barcodePrinter'

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

const confirmSwal = (swal, icon, callback) => {
  if (swal) {
    swal.fire({
      title: 'ທ່ານຕ້ອງການລຶບແທ້ບໍ່?',
      text: "ການກະທຳນີ້ບໍ່ສາມາດຍົກເລີກໄດ້!",
      icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ຕົກລົງ, ລຶບເລີຍ!',
      cancelButtonText: 'ຍົກເລີກ'
    }).then((result) => {
      if (result.isConfirmed) {
        callback()
      }
    })
  } else if (confirm('ທ່ານຕ້ອງການລຶບແທ້ບໍ່?')) {
    callback()
  }
}

export default {
  props: {
    isEdit: { type: Boolean, default: false },
    headerId: { type: Number, default: null },
  },
  data() {
    return {
      printQty: 1,
      productType: ['product', 'service', 'stock'],
      valid: false,
      isloading: false,
      preview: false,
      previewSrc: '',
      priceListDialog: false,
      priceListFormKey: 0,
      pricingRecordId: null,
      barcodeImage: '',
      threeColPaper: false,
      taxRates: [],
      imagesPreviewURL: [],
      files: [],

      formData: {
        productId: null,
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
        costCurrencyId: null,
        vendorName: '',
        taxId: null,
        baseUnitId: null,
        pro_image: [],
      },

      rules: {
        nameRule: [(v) => !!v || 'ກະລຸນາໃສ່ຊື່ເມນູອາຫານ'],
      },

      category: [],
      companyList: [],
    }
  },

  computed: {
    formattedProPrice: {
      get() {
        return this.formatNumber(this.formData.pro_price)
      },
      set(newVal) {
        const number = newVal.replace(/,/g, '')
        this.formData.pro_price = isNaN(parseFloat(number)) ? 0 : parseFloat(number)
      },
    },

    formattedCostPrice: {
      get() {
        return this.formatNumber(this.formData.pro_cost_price)
      },
      set(newVal) {
        const number = newVal.replace(/,/g, '')
        this.formData.pro_cost_price = isNaN(parseFloat(number)) ? 0 : parseFloat(number)
      },
    },

    ...mapGetters([
      'findAllProductPriceListToCreate',
      'findAllUnit',
      'findAllCurrency',
      'findAllprinters',
    ]),

    unitList() {
      return this.findAllUnit
    },

    host() {
      return this.$axios.defaults.baseURL
    },

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

    selectedTaxRate() {
      if (!this.formData.taxId || !this.taxRates.length) return null
      return this.taxRates.find((rate) => rate.id === this.formData.taxId)
    },
  },

  async mounted() {
    this.isloading = true
    try {
      await Promise.all([
        this.fetchCategory(),
        this.fetchCompany(),
        this.fetchCurrency(),
        this.fetchTaxRates(),
      ])
      if (this.isEdit && this.headerId) {
        await this.fetchProId(this.headerId)
      }
    } catch (error) {
      console.error('Error loading menu details:', error)
    } finally {
      this.isloading = false
    }
  },

  methods: {
    ...mapActions([
      'clearProductPricesToCreate',
    ]),

    fetchData() {
      if (this.isEdit && this.formData.productId) {
        this.fetchProId(this.formData.productId)
      }
    },

    triggerPriceListForm() {
      this.pricingRecordId = this.isEdit ? this.formData.productId : null
      this.priceListFormKey += 1
      this.priceListDialog = true
    },

    formatNumber(val) {
      if (val === undefined || val === null || val === '') return ''
      return Number(val).toLocaleString('en-US')
    },

    calculateTaxAmount() {
      if (!this.selectedTaxRate || !this.formData.pro_price) return 0
      const price = parseFloat(this.formData.pro_price)
      const rate = parseFloat(this.selectedTaxRate.rate)
      const type = this.selectedTaxRate.taxType

      if (type === 'INC') {
        return price - price / (1 + rate)
      } else {
        return price * rate
      }
    },

    calculateTotalWithTax() {
      const price = parseFloat(this.formData.pro_price || 0)
      if (this.selectedTaxRate && this.selectedTaxRate.taxType !== 'INC') {
        return price + this.calculateTaxAmount()
      }
      return price
    },

    generateBarcode() {
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 100000000000
      this.formData.barCode = barcodeValue.toString()
      this.generateBarcodeImage(barcodeValue.toString())
    },

    generateBarcodeImage(barcode) {
      const canvas = this.$refs.barcodeCanvas
      if (canvas && barcode) {
        let barcodeSize = '40x20'
        const spfList = this.$store.getters.findSPF || []
        const found = spfList.find(
          (s) =>
            s.code &&
            s.code.toUpperCase() === 'BARCODE.SIZE' &&
            (s.isActive === true || s.isActive === 1 || String(s.isActive).toUpperCase() === 'Y')
        )
        if (found && found.value) {
          barcodeSize = found.value
        }
        const { scale } = parseBarcodeSize(barcodeSize)

        JsBarcode(canvas, barcode, {
          format: 'code128',
          displayValue: true,
          fontSize: Math.round(12 * scale),
          width: scale >= 1.5 ? 2 : 1,
          height: Math.round(13 * scale),
        })
        this.barcodeImage = canvas.toDataURL()
      }
    },

    printBarcode() {
      const rawPrice = parseFloat(this.formData.pro_price || 0)
      let finalPrice = rawPrice

      if (this.selectedTaxRate && this.selectedTaxRate.taxType !== 'INC') {
        const taxRate = parseFloat(this.selectedTaxRate.rate || 0)
        finalPrice = rawPrice + rawPrice * taxRate
      }

      const formattedPrice = this.formatNumber(finalPrice)
      const printerList = this.findAllprinters || []
      const barcodePrinter = printerList.find((p) => p.type === 'barcode')
      const printerName = barcodePrinter
        ? barcodePrinter.printerName || barcodePrinter.printer_name || ''
        : ''

      const productCurrency = this.findAllCurrency?.find((c) => c.id === this.formData.saleCurrencyId)
      const localCcy = this.findAllCurrency?.find((c) => c.isLocalCCY === true || c.isLocalCCY === 1)
      const selectedCcy = productCurrency || localCcy
      const currencyStr = selectedCcy ? selectedCcy.symbol || selectedCcy.code : 'LAK'

      const windowContent = this.threeColPaper
        ? getBarcode2by2cmHtml(formattedPrice, this.barcodeImage, currencyStr)
        : getBarcodeNormalHtml(formattedPrice, this.barcodeImage, this.formData.pro_name, currencyStr)

      if (window.posApi) {
        if (!printerName) {
          this.$toast.error("Error: No printer name found for 'barcode' type in settings!")
          return
        }

        let barcodeSize = '40x20'
        const spfList = this.$store.getters.findSPF || []
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

        const payload = {
          html: windowContent,
          printerName,
          copies: this.isEdit ? (this.printQty || 1) : 1,
          width,
          height,
        }
        window.posApi.printBarcode(payload)
        this.$toast.success(`Printing barcode to ${printerName}`)
      } else {
        executePrintWindow(windowContent)
      }
    },

    async fetchCategory() {
      try {
        const res = await this.$axios.get('/category_f')
        if (Array.isArray(res.data)) {
          this.category = res.data
            .filter((el) => el.isActive === true || el.isActive === 1)
            .map((el) => ({
              categ_id: el.categ_id,
              categ_name: el.categ_name,
            }))
          if (this.category.length > 0 && !this.isEdit) {
            this.formData.pro_category = this.category[0].categ_id
          }
        }
      } catch (er) {
        console.error('Error fetching categories:', er)
      }
    },

    async fetchCompany() {
      try {
        let res = await this.$axios.get('/api/company/find')
        if (!res.data || !Array.isArray(res.data) || res.data.length === 0) {
          res = await this.$axios.get('/api/company/findAll')
        }
        this.companyList = res.data.map((el) => ({
          id: el.id,
          name: el.name,
        }))
        if (this.companyList.length > 0 && !this.isEdit) {
          this.formData.companyId = this.companyList[0].id
        }
      } catch (er) {
        console.error('Error fetching company list:', er)
      }
    },

    async fetchCurrency() {
      try {
        let data = this.findAllCurrency
        if (!data || data.length === 0) {
          const response = await this.$axios.get('/api/currency/findAll')
          data = response.data?.data ?? response.data
          if (Array.isArray(data)) {
            data = data.filter((el) => el.isActive === true || el.isActive === 1)
          }
          this.$store.commit('SetCurrencyList', data)
        }
        if (data && data.length > 0 && !this.isEdit) {
          const localCcy = data.find((c) => c.isLocalCCY === true || c.isLocalCCY === 1)
          this.formData.saleCurrencyId = localCcy ? localCcy.id : data[0].id
          this.formData.costCurrencyId = localCcy ? localCcy.id : data[0].id
        }
      } catch (error) {
        console.error('Error fetching currencies:', error)
      }
    },

    async fetchTaxRates() {
      try {
        const response = await this.$axios.get('/api/tax/active')
        this.taxRates = response.data.data || []
        if (!this.formData.taxId && !this.isEdit) {
          const defaultTax = this.taxRates.find((tax) => tax.isDefault)
          if (defaultTax) {
            this.formData.taxId = defaultTax.id
          }
        }
      } catch (error) {
        console.error('Error loading tax rates:', error)
      }
    },

    async fetchProId(id) {
      try {
        const res = await this.$axios.post('/product_f_id', { proid: id })
        if (typeof res.data === 'string' && res.data.startsWith('SQL')) {
          throw new Error(res.data)
        }
        if (!res.data || res.data.length === 0) {
          throw new Error('Menu details not found in database.')
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
          isActive: el.isActive === 1,
          validateStockOnSale: el.validateStockOnSale === 1,
          vendorName: el.vendorName,
          taxId: el.taxId || null,
          baseUnitId: el.baseUnitId,
        }
        if (this.formData.barCode) {
          this.generateBarcodeImage(this.formData.barCode)
        }
      } catch (error) {
        console.error('Error fetching menu item details:', error)
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

    deleteFileFrServ(idx) {
      confirmSwal(this.$swal, 'warning', async () => {
        this.isloading = true
        try {
          await this.$axios.post('/unlink_file', { img_name: this.formData.pro_image[idx].name })
          this.formData.pro_image.splice(idx, 1)
          swalSuccess(this.$swal, 'Succeed', 'ລຶບສຳເລັດ')
        } catch (error) {
          console.error('Error deleting file from server:', error)
        }
        this.isloading = false
      })
    },

    async saveMenu() {
      if (!this.$refs.form.validate()) {
        return
      }

      this.isloading = true
      const formData = new FormData()

      const payload = {
        ...this.formData,
        pro_status: this.formData.isActive ? 1 : 0,
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

      formData.append('FORM', JSON.stringify(payload))

      if (this.files && this.files.length > 0) {
        this.files.forEach((element) => {
          formData.append('files', element)
        })
      }

      try {
        const endpoint = this.isEdit ? 'uploadmulti_update' : 'uploadmulti'
        const response = await this.$axios.post(endpoint, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })

        if (!this.isEdit) {
          const productIdCreated = response.data.split('|')[1]
          await this.commitPriceListRecord(productIdCreated)
        }

        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
        this.$emit('refresh')
        this.$emit('close-dialog')
      } catch (error) {
        console.error('Error saving menu item:', error)
        swalError2(this.$swal, 'Error', error.response?.data || error.message || error)
      } finally {
        this.isloading = false
      }
    },

    async commitPriceListRecord(productId) {
      const api = 'api/priceList/create'
      try {
        const requests = this.findAllProductPriceListToCreate.map((item) => {
          const newItem = { ...item, productId }
          return this.$axios.post(api, newItem)
        })

        await Promise.all(requests)
        this.clearProductPricesToCreate()
      } catch (error) {
        console.error('Error saving price list grades:', error)
        swalError2(
          this.$swal,
          'Error',
          'ເກີດຂໍ້ຜິດພາດ ໃນການເພີ່ມ price list ພາຍຫຼັງ'
        )
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
.enhanced-dialog,
.enhanced-dialog * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.enhanced-dialog ::v-deep .v-label,
.enhanced-dialog ::v-deep .v-input,
.enhanced-dialog ::v-deep .v-btn__content,
.enhanced-dialog ::v-deep .v-chip__content,
.enhanced-dialog ::v-deep .v-messages,
.enhanced-dialog ::v-deep .v-alert__content {
  font-family: 'Noto Sans Lao', sans-serif !important;
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

.modal-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 20px;
}

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

@media (max-width: 768px) {
  .enhanced-dialog {
    width: 100vw;
    height: 100vh;
  }
}

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
</style>
