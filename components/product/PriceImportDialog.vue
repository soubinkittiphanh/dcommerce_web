<template>
  <v-dialog v-model="dialogOpen" max-width="1100" persistent>
    <v-card class="noto-sans-lao rounded-xl elevation-5 overflow-hidden">
      <!-- Premium Header with Gradient -->
      <v-card-title class="bg-gradient-purple white--text py-5 px-6">
        <v-avatar color="white" size="40" class="mr-3 elevation-2">
          <v-icon color="purple darken-3" size="24">mdi-currency-usd</v-icon>
        </v-avatar>
        <span class="text-h6 font-weight-black">ນຳເຂົ້າການປັບປຸງລາຄາສິນຄ້າ (Import Price Updates)</span>
        <v-spacer />
        <v-btn icon dark class="hover-scale" @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pt-6 px-6">
        <!-- Banner instructions -->
        <v-alert type="info" class="rounded-lg mb-6 border-left-alert elevation-1" colored-border border="left" elevation="0">
          <div class="subtitle-1 font-weight-bold mb-1">ຄຳແນະນຳໃນການອັບເດດລາຄາ (Instructions):</div>
          <ol class="pl-4 body-2">
            <li>ດາວໂຫລດໄຟລ໌ Template (ລະບົບຈະດຶງລາຍການສິນຄ້າ ແລະ ລາຄາປັດຈຸບັນທັງໝົດອອກມາໃຫ້ອັດຕະໂນມັດ).</li>
            <li>ກອກຕົ້ນທຶນໃໝ່ໃນຫ້ອງ <strong>"New Cost Price (ຕົ້ນທຶນໃໝ່)"</strong> ແລະ/ຫຼື ລາຄາຂາຍໃໝ່ໃນຫ້ອງ <strong>"New Sale Price (ລາຄາຂາຍໃໝ່)"</strong>.</li>
            <li>ຫາກບໍ່ຕ້ອງການປ່ຽນແປງລາຄາຂອງສິນຄ້າໃດ, ໃຫ້ປະຫ້ອງນັ້ນເປັນຫ້ອງວ່າງ (Leave empty for no change).</li>
            <li>ອັບໂຫລດໄຟລ໌ຄືນ ເພື່ອໃຫ້ລະບົບກວດສອບ ແລະ ປັບປຸງລາຄາ.</li>
          </ol>
        </v-alert>

        <div class="d-flex align-center flex-wrap gap-4 mb-6">
          <v-btn color="purple darken-2" class="white--text hover-scale rounded-lg font-weight-bold px-5" :loading="downloading" depressed @click="downloadTemplate">
            <v-icon left>mdi-download</v-icon>
            ດາວໂຫລດ Template ລາຄາປັດຈຸບັນ
          </v-btn>

          <v-file-input v-model="excelFile" label="ເລືອກໄຟລ໌ Excel ທີ່ແກ້ໄຂແລ້ວ (Upload Excel)" accept=".xlsx, .xls"
            outlined dense hide-details prepend-inner-icon="mdi-microsoft-excel" prepend-icon="" style="max-width: 400px"
            class="rounded-lg" @change="handleFileUpload" />

          <v-btn v-if="importData.length" text color="error" class="ml-2 font-weight-bold" @click="reset">
            <v-icon left>mdi-refresh</v-icon>
            ລ້າງຂໍ້ມູນ (Clear)
          </v-btn>
        </div>

        <v-divider v-if="importData.length" class="my-4" />

        <!-- Preview and Adjust Section -->
        <div v-if="importData.length" class="preview-section rounded-lg pa-4">
          
          <!-- Quick Adjustment Card -->
          <v-card outlined class="mb-6 rounded-lg border-purple pa-4 bg-white elevation-1">
            <div class="d-flex align-center mb-2">
              <v-icon color="purple darken-2" class="mr-2">mdi-calculator-variant</v-icon>
              <span class="subtitle-1 font-weight-bold purple--text text--darken-3">ເຄື່ອງມືປັບລາຄາໄວ (Quick Price Adjustment Tools)</span>
            </div>
            
            <v-alert type="warning" dense outlined class="mb-4 body-2 noto-sans-lao border-left-warning bg-amber-50">
              <strong>ໝາຍເຫດການປັດເສດ (Currency Rounding Warning):</strong><br/>
              ລະບົບຈະປັດເສດອັດຕະໂນມັດຕາມສະກຸນເງິນຂອງສິນຄ້າ (LAK, THB, USD) ເພື່ອຫຼີກເວັ້ນເສດຈຸດທົດສະນິຍົມທີ່ບໍ່ເໝາະສົມ:<br/>
              • <strong>LAK</strong>: ປັດໃກ້ຄຽງ 100 / 500 / 1,000 Kip<br/>
              • <strong>THB</strong>: ປັດໃກ້ຄຽງ 1 / 5 / 10 Baht<br/>
              • <strong>USD</strong>: ປັດໃກ້ຄຽງ 0.01 / 0.10 / 1.00 Dollar
            </v-alert>

            <v-row align="center" dense>
              <v-col cols="12" sm="3">
                <v-select
                  v-model="adjTarget"
                  :items="adjTargets"
                  label="ເລືອກລາຍການປັບ (Target)"
                  outlined dense hide-details
                ></v-select>
              </v-col>
              <v-col cols="12" sm="2">
                <v-select
                  v-model="adjType"
                  :items="adjTypes"
                  label="ຮູບແບບ (Type)"
                  outlined dense hide-details
                ></v-select>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  v-model.number="adjPercent"
                  label="ເປີເຊັນ % (Percentage)"
                  type="number" min="0" max="100" step="0.1"
                  outlined dense hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                  v-model="adjRounding"
                  :items="adjRoundingOptions"
                  label="ວິທີປັດເສດ (Rounding Option)"
                  outlined dense hide-details
                ></v-select>
              </v-col>
              <v-col cols="12" sm="2" class="text-right">
                <v-btn color="purple darken-2" dark depressed block height="40" class="rounded-lg font-weight-bold" @click="applyQuickAdjustment">
                  <v-icon left>mdi-flash</v-icon> Apply
                </v-btn>
              </v-col>
            </v-row>
          </v-card>

          <div class="d-flex align-center mb-4 flex-wrap gap-2">
            <h3 class="text-h6 font-weight-bold mb-0">ຕົວຢ່າງການປ່ຽນແປງລາຄາ ({{ changedCount }} ລາຍການທີ່ປ່ຽນແປງ)</h3>
            <v-spacer />
            <div class="d-flex gap-2">
              <v-chip v-if="invalidCount > 0" color="red darken-4" text-color="white" small label class="font-weight-bold">
                ບໍ່ຖືກຕ້ອງ (Invalid): {{ invalidCount }}
              </v-chip>
              <v-chip v-else color="success" small label class="font-weight-bold">
                ຂໍ້ມູນທັງໝົດຖືກຕ້ອງ ພ້ອມອັບເດດ (All Valid)
              </v-chip>
            </div>
          </div>

          <v-data-table :headers="previewHeaders" :items="importData" :items-per-page="10"
            class="elevation-0 border-light rounded-lg overflow-hidden custom-preview-table">
            <template #item.status_valid="{ item }">
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon v-bind="attrs" :color="item.isValid ? (item.isChanged ? 'success' : 'grey') : 'error'" v-on="on">
                    {{ item.isValid ? (item.isChanged ? 'mdi-check-circle' : 'mdi-minus-circle-outline') : 'mdi-alert-circle' }}
                  </v-icon>
                </template>
                <span>{{ item.isValid ? (item.isChanged ? 'ມີການປ່ຽນແປງ (Changed)' : 'ບໍ່ມີການປ່ຽນແປງ (No Change)') : item.validationError }}</span>
              </v-tooltip>
            </template>

            <template #item.code_info="{ item }">
              <div class="d-flex flex-column py-1">
                <span v-if="item.pro_id" class="caption font-weight-bold orange--text text--darken-3">[{{ item.pro_id }}]</span>
                <span v-if="item.barCode" class="caption text-grey"><v-icon x-small>mdi-barcode</v-icon> {{ item.barCode }}</span>
              </div>
            </template>

            <template #item.cost_price_info="{ item }">
              <div class="text-right py-1">
                <div class="caption text-grey">ປັດຈຸບັນ: {{ formatNumber(item.currentCost) }} {{ getCurrencyCode(item.id, 'cost') }}</div>
                <div v-if="item.newCost !== null && item.newCost !== item.currentCost" class="font-weight-bold success--text">
                  <v-icon small color="success">mdi-arrow-right</v-icon> {{ formatNumber(item.newCost) }} {{ getCurrencyCode(item.id, 'cost') }}
                </div>
                <div v-else class="caption text-grey">—</div>
              </div>
            </template>

            <template #item.pro_price_info="{ item }">
              <div class="text-right py-1">
                <div class="caption text-grey">ປັດຈຸບັນ: {{ formatNumber(item.currentPrice) }} {{ getCurrencyCode(item.id, 'sale') }}</div>
                <div v-if="item.newPrice !== null && item.newPrice !== item.currentPrice" class="font-weight-bold primary--text">
                  <v-icon small color="primary">mdi-arrow-right</v-icon> {{ formatNumber(item.newPrice) }} {{ getCurrencyCode(item.id, 'sale') }}
                </div>
                <div v-else class="caption text-grey">—</div>
              </div>
            </template>

            <template #item.validationError="{ item }">
              <span class="error--text font-weight-medium caption">{{ item.validationError }}</span>
            </template>
          </v-data-table>
        </div>
      </v-card-text>

      <v-card-actions class="pb-6 px-6">
        <div v-if="loading && totalCount > 0" class="flex-grow-1 mr-4">
          <div class="d-flex justify-space-between mb-1">
            <span class="caption grey--text text--darken-1">
              ກຳລັງນຳເຂົ້າ... (Importing...)
            </span>
            <span class="caption font-weight-bold purple--text text--darken-3">
              {{ importedCount }} / {{ totalCount }} ({{ Math.round(importProgress) }}%)
            </span>
          </div>
          <v-progress-linear
            color="purple darken-3"
            height="8"
            reactive
            rounded
            :value="importProgress"
          ></v-progress-linear>
        </div>
        <v-spacer v-else />
        <v-btn text :disabled="loading" class="rounded-lg font-weight-bold" @click="close">ຍົກເລີກ (Cancel)</v-btn>
        <v-btn color="purple darken-3" class="white--text hover-scale rounded-lg font-weight-bold px-6" :disabled="!isValidToImport || loading" 
          :loading="loading" min-width="150" depressed @click="startImport">
          <v-icon left>mdi-check-all</v-icon>
          ຢືນຢັນປັບປຸງລາຄາ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
/* eslint-disable no-console, camelcase */
import * as XLSX from 'xlsx'
import ExcelJS from 'exceljs'
import { mapGetters } from 'vuex'
import { getFormatNum } from '~/common'

export default {
  name: 'PriceImportDialog',
  props: {
    value: { type: Boolean, default: false },
    products: { type: Array, default: () => [] }
  },
  data() {
    return {
      excelFile: null,
      importData: [],
      loading: false,
      downloading: false,
      importedCount: 0,
      totalCount: 0,
      totalChunks: 0,
      previewHeaders: [
        { text: 'ກວດສອບ', value: 'status_valid', width: '80', sortable: false, align: 'center' },
        { text: 'ຂໍ້ມູນລະຫັດ (SKU/Barcode)', value: 'code_info', width: '180' },
        { text: 'ຊື່ສິນຄ້າ (Product Name)', value: 'pro_name' },
        { text: 'ຕົ້ນທຶນ (Cost Price)', value: 'cost_price_info', align: 'end', width: '200' },
        { text: 'ລາຄາຂາຍ (Sale Price)', value: 'pro_price_info', align: 'end', width: '200' },
        { text: 'ຂໍ້ຜິດພາດ (Errors)', value: 'validationError', color: 'error' }
      ],
      // Adjustment state
      adjTarget: 'pro_price',
      adjTargets: [
        { text: 'ລາຄາຂາຍ (Sale Price)', value: 'pro_price' },
        { text: 'ຕົ້ນທຶນ (Cost Price)', value: 'cost_price' },
        { text: 'ທັງສອງ (Both Cost & Sale)', value: 'both' }
      ],
      adjType: 'increase',
      adjTypes: [
        { text: 'ເພີ່ມຂຶ້ນ (+)', value: 'increase' },
        { text: 'ຫຼຸດລົງ (-)', value: 'decrease' }
      ],
      adjPercent: 10,
      adjRounding: 'smart',
      adjRoundingOptions: [
        { text: 'Smart Rounding (ປັດອັດຕະໂນມັດ)', value: 'smart' },
        { text: 'Nearest Integer (ປັດຈຳນວນຖ້ວນ/0.01 USD)', value: 'integer' },
        { text: 'Small Step (ປັດ 100 LAK / 10 THB / 0.10 USD)', value: 'small' },
        { text: 'Medium Step (ປັດ 500 LAK / 5 THB / 1.00 USD)', value: 'medium' },
        { text: 'Large Step (ປັດ 1000 LAK / 10 THB / 5.00 USD)', value: 'large' },
        { text: 'No Rounding (ບໍ່ປັດເສດ)', value: 'none' }
      ]
    }
  },
  computed: {
    ...mapGetters(['findAllCurrency']),
    dialogOpen: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    invalidCount() {
      return this.importData.filter(item => !item.isValid).length
    },
    changedCount() {
      return this.importData.filter(item => item.isValid && item.isChanged).length
    },
    isValidToImport() {
      return this.importData.length > 0 && this.invalidCount === 0 && this.changedCount > 0
    },
    importProgress() {
      if (!this.totalCount) return 0
      return (this.importedCount / this.totalCount) * 100
    }
  },
  methods: {
    close() {
      this.$emit('input', false)
      setTimeout(() => this.reset(), 300)
    },
    reset() {
      this.excelFile = null
      this.importData = []
      this.adjPercent = 10
      this.adjTarget = 'pro_price'
      this.adjType = 'increase'
      this.adjRounding = 'smart'
      this.importedCount = 0
      this.totalCount = 0
      this.totalChunks = 0
    },
    formatNumber(val) {
      return getFormatNum(val)
    },
    getCurrencyCode(productId, type) {
      const dbProduct = this.products.find(p => p.id === productId)
      if (!dbProduct) return ''
      const currencyId = type === 'cost' ? dbProduct.costCurrencyId : dbProduct.saleCurrencyId
      const currency = this.findAllCurrency.find(c => c.id === currencyId)
      return currency ? currency.code : ''
    },
    roundValue(val, currency, strategy) {
      if (val === null || val === undefined || isNaN(val)) return 0
      const cur = String(currency || '').toUpperCase()

      if (strategy === 'none') {
        return parseFloat(val.toFixed(4))
      }

      if (cur === 'USD') {
        switch (strategy) {
          case 'smart':
          case 'integer':
            return Math.round(val * 100) / 100
          case 'small':
            return Math.round(val * 10) / 10
          case 'medium':
            return Math.round(val)
          case 'large':
            return Math.round(val / 5) * 5
          default:
            return Math.round(val * 100) / 100
        }
      } else if (cur === 'THB') {
        switch (strategy) {
          case 'smart':
          case 'integer':
            return Math.round(val)
          case 'small':
            return Math.round(val / 10) * 10
          case 'medium':
            return Math.round(val / 5) * 5
          case 'large':
            return Math.round(val / 10) * 10
          default:
            return Math.round(val)
        }
      } else {
        // Default LAK
        switch (strategy) {
          case 'smart':
            return Math.round(val / 1000) * 1000
          case 'integer':
            return Math.round(val)
          case 'small':
            return Math.round(val / 100) * 100
          case 'medium':
            return Math.round(val / 500) * 500
          case 'large':
            return Math.round(val / 1000) * 1000
          default:
            return Math.round(val / 100) * 100
        }
      }
    },
    applyQuickAdjustment() {
      if (!this.importData.length) return
      if (isNaN(this.adjPercent) || this.adjPercent < 0) {
        this.$toast.error('ເປີເຊັນຕ້ອງເປັນຕົວເລກ >= 0')
        return
      }

      const factor = this.adjPercent / 100
      const isIncrease = this.adjType === 'increase'

      this.importData = this.importData.map(item => {
        if (!item.isValid) return item

        const updateField = (currentVal, currencyId) => {
          const currency = this.findAllCurrency.find(c => c.id === currencyId)?.code || ''
          const baseVal = parseFloat(currentVal) || 0
          const diff = baseVal * factor
          const newValRaw = isIncrease ? (baseVal + diff) : (baseVal - diff)
          const finalVal = Math.max(0, this.roundValue(newValRaw, currency, this.adjRounding))
          return finalVal
        }

        const newItem = { ...item }
        const dbProduct = this.products.find(p => p.id === item.id)

        if (this.adjTarget === 'cost_price' || this.adjTarget === 'both') {
          const costCurrencyId = dbProduct?.costCurrencyId || item.costCurrencyId
          newItem.newCost = updateField(item.currentCost, costCurrencyId)
        }

        if (this.adjTarget === 'pro_price' || this.adjTarget === 'both') {
          const saleCurrencyId = dbProduct?.saleCurrencyId || item.saleCurrencyId
          newItem.newPrice = updateField(item.currentPrice, saleCurrencyId)
        }

        // Mark as changed
        const costChanged = newItem.newCost !== null && newItem.newCost !== newItem.currentCost
        const priceChanged = newItem.newPrice !== null && newItem.newPrice !== newItem.currentPrice
        newItem.isChanged = costChanged || priceChanged

        return newItem
      })

      this.$toast.success('ນຳໃຊ້ການປັບປຸງລາຄາຮຽບຮ້ອຍແລ້ວ')
    },
    async downloadTemplate() {
      if (this.products.length === 0) {
        this.$toast.warning('ບໍ່ມີລາຍການສິນຄ້າໃນລະບົບ (No products found)')
        return
      }
      this.downloading = true
      try {
        const workbook = new ExcelJS.Workbook()
        const worksheet = workbook.addWorksheet('ໃບປັບປຸງລາຄາສິນຄ້າ')

        // Define columns
        worksheet.columns = [
          { header: 'Product ID (ລະຫັດລະບົບ) *', key: 'id', width: 25 },
          { header: 'Product Code (ລະຫັດສິນຄ້າ)', key: 'pro_id', width: 25 },
          { header: 'Barcode (ບາໂຄດ)', key: 'barCode', width: 25 },
          { header: 'Product Name (ຊື່ສິນຄ້າ)', key: 'pro_name', width: 35 },
          { header: 'Current Cost (ຕົ້ນທຶນປັດຈຸບັນ)', key: 'current_cost', width: 22 },
          { header: 'Current Sale Price (ລາຄາຂາຍປັດຈຸບັນ)', key: 'current_price', width: 22 },
          { header: 'New Cost Price (ຕົ້ນທຶນໃໝ່)', key: 'cost_price', width: 22 },
          { header: 'New Sale Price (ລາຄາຂາຍໃໝ່)', key: 'pro_price', width: 22 }
        ]

        // Format header row
        const headerRow = worksheet.getRow(1)
        headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } }
        headerRow.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF4A148C' } // deep purple
        }
        headerRow.alignment = { vertical: 'middle', horizontal: 'center' }

        // Populate product list
        this.products.forEach(item => {
          worksheet.addRow({
            id: item.id,
            pro_id: item.product_code || item.pro_id || '',
            barCode: item.barCode || '',
            pro_name: item.pro_name || '',
            current_cost: item.pro_cost_price || 0,
            current_price: item.pro_price || 0,
            cost_price: '',
            pro_price: ''
          })
        })

        // Generate buffer and trigger download
        const buffer = await workbook.xlsx.writeBuffer()
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `Price_Update_Template_${new Date().toISOString().slice(0, 10)}.xlsx`
        link.click()
        URL.revokeObjectURL(url)

        this.$toast.success('ດາວໂຫລດ Template ສຳເລັດ')
      } catch (error) {
        console.error('Error generating price template:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດ: ' + error.message)
      } finally {
        this.downloading = false
      }
    },
    handleFileUpload(file) {
      if (!file) {
        this.importData = []
        return
      }

      this.loading = true
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result)
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' })

          this.processImportData(jsonData)
        } catch (err) {
          console.error('Error reading Excel:', err)
          this.$toast.error('ບໍ່ສາມາດອ່ານໄຟລ໌ Excel: ' + err.message)
        } finally {
          this.loading = false
        }
      }
      reader.onerror = () => {
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການອ່ານໄຟລ໌')
        this.loading = false
      }
      reader.readAsArrayBuffer(file)
    },
    processImportData(data) {
      if (!data || data.length === 0) {
        this.$toast.warning('ບໍ່ພົບຂໍ້ມູນໃນໄຟລ໌ Excel')
        this.importData = []
        return
      }

      this.importData = data.map((row) => {
        const keys = Object.keys(row)
        const findKey = (patterns) => {
          return keys.find(k => {
            const kl = k.toLowerCase()
            return patterns.some(p => kl.includes(p.toLowerCase()))
          })
        }

        const idKey = findKey(['product id', 'ລະຫັດລະບົບ', 'id'])
        const proIdKey = findKey(['product code', 'ລະຫັດສິນຄ້າ', 'pro_id'])
        const barCodeKey = findKey(['barcode', 'ບາໂຄດ'])
        const proNameKey = findKey(['product name', 'ຊື່ສິນຄ້າ', 'pro_name'])
        const currentCostKey = findKey(['current cost', 'ຕົ້ນທຶນປັດຈຸບັນ', 'current_cost'])
        const currentPriceKey = findKey(['current sale price', 'ລາຄາຂາຍປັດຈຸບັນ', 'current_price'])
        const newCostKey = findKey(['new cost price', 'ຕົ້ນທຶນໃໝ່', 'cost_price'])
        const newPriceKey = findKey(['new sale price', 'ລາຄາຂາຍໃໝ່', 'pro_price'])

        const id = idKey ? parseInt(row[idKey]) : NaN
        const pro_id = proIdKey ? String(row[proIdKey]).trim() : ''
        const barCode = barCodeKey ? String(row[barCodeKey]).trim() : ''
        const pro_name = proNameKey ? String(row[proNameKey]).trim() : ''
        const currentCost = currentCostKey ? parseFloat(row[currentCostKey]) : 0
        const currentPrice = currentPriceKey ? parseFloat(row[currentPriceKey]) : 0

        const newCostRaw = newCostKey ? row[newCostKey] : ''
        const newPriceRaw = newPriceKey ? row[newPriceKey] : ''

        const newCost = newCostRaw !== '' && newCostRaw !== undefined ? parseFloat(newCostRaw) : null
        const newPrice = newPriceRaw !== '' && newPriceRaw !== undefined ? parseFloat(newPriceRaw) : null

        const item = {
          id,
          pro_id,
          barCode,
          pro_name,
          currentCost,
          currentPrice,
          newCost,
          newPrice,
          isValid: true,
          validationError: '',
          isChanged: false
        }

        if (isNaN(id)) {
          item.isValid = false
          item.validationError = 'ID ບໍ່ຖືກຕ້ອງ (Invalid Product ID)'
          return item
        }

        const dbProduct = this.products.find(p => p.id === id)
        if (!dbProduct) {
          item.isValid = false
          item.validationError = 'ບໍ່ພົບສິນຄ້ານີ້ໃນລະບົບ (Product not found)'
          return item
        }

        // Fill current info from db to be safe
        item.pro_name = dbProduct.pro_name
        item.pro_id = dbProduct.product_code || dbProduct.pro_id
        item.barCode = dbProduct.barCode
        item.currentCost = dbProduct.pro_cost_price
        item.currentPrice = dbProduct.pro_price

        // Check if there are changes
        const costChanged = newCost !== null && !isNaN(newCost) && newCost !== item.currentCost
        const priceChanged = newPrice !== null && !isNaN(newPrice) && newPrice !== item.currentPrice

        if (costChanged || priceChanged) {
          item.isChanged = true
        }

        // Validate values if provided
        if (newCost !== null) {
          if (isNaN(newCost) || newCost < 0) {
            item.isValid = false
            item.validationError = 'ຕົ້ນທຶນຕ້ອງເປັນຕົວເລກ >= 0'
            return item
          }
        }
        if (newPrice !== null) {
          if (isNaN(newPrice) || newPrice < 0) {
            item.isValid = false
            item.validationError = 'ລາຄາຂາຍຕ້ອງເປັນຕົວເລກ >= 0'
            return item
          }
        }

        return item
      })
    },
    async startImport() {
      if (!this.isValidToImport) {
        this.$toast.error('ກະລຸນາກວດສອບ ຫຼື ແກ້ໄຂຂໍ້ມູນກ່ອນ')
        return
      }

      this.loading = true
      try {
        const updates = this.importData
          .filter(item => item.isValid && item.isChanged)
          .map(item => {
            const updateItem = { id: item.id }
            if (item.newCost !== null && item.newCost !== item.currentCost) {
              updateItem.cost_price = item.newCost
            }
            if (item.newPrice !== null && item.newPrice !== item.currentPrice) {
              updateItem.pro_price = item.newPrice
            }
            return updateItem
          })

        const chunkSize = 200
        this.totalCount = updates.length
        this.importedCount = 0
        this.totalChunks = Math.ceil(this.totalCount / chunkSize)

        let succeededCount = 0
        let lastMessage = ''

        for (let i = 0; i < updates.length; i += chunkSize) {
          const chunk = updates.slice(i, i + chunkSize)
          const response = await this.$axios.$post('/api/product/bulk-price-update', { updates: chunk })
          if (response.success) {
            succeededCount += chunk.length
            this.importedCount = succeededCount
            lastMessage = response.message
          } else {
            throw new Error(response.message || 'ປັບປຸງລາຄາບໍ່ສຳເລັດ (Failed to update prices for some products)')
          }
        }

        this.$toast.success(lastMessage || `ນຳເຂົ້າລາຄາສຳເລັດ ${updates.length} ລາຍການ`)
        this.$emit('imported')
        this.close()
      } catch (error) {
        console.error('Import price updates error:', error)
        const errorMsg = error.response?.data?.message || error.message
        const partialSuccessMsg = this.importedCount > 0
          ? ` (ນຳເຂົ້າສຳເລັດແລ້ວ ${this.importedCount} ລາຍການ)`
          : ''
        this.$toast.error('ຜິດພາດ (Error): ' + errorMsg + partialSuccessMsg)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.bg-gradient-purple {
  background: linear-gradient(135deg, #4a148c 0%, #9c27b0 100%) !important;
}

.preview-section {
  border: 1px solid #e1bee7;
  background: #fdf7ff;
}

.border-light {
  border: 1px solid #e2e8f0 !important;
}

.border-left-alert {
  border-left-width: 4px !important;
  border-left-color: #9c27b0 !important;
}

.border-left-warning {
  border-left-width: 4px !important;
  border-left-color: #ffb300 !important;
}

.border-purple {
  border: 1px solid #ce93d8 !important;
}

.gap-2 {
  gap: 8px;
}

.gap-4 {
  gap: 16px;
}

.hover-scale {
  transition: transform 0.2s ease-in-out;
}
.hover-scale:hover {
  transform: scale(1.03);
}

.noto-sans-lao {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.noto-sans-lao ::v-deep .v-label,
.noto-sans-lao ::v-deep .v-input,
.noto-sans-lao ::v-deep .v-btn__content,
.noto-sans-lao ::v-deep .v-chip__content,
.noto-sans-lao ::v-deep .v-messages,
.noto-sans-lao ::v-deep .v-alert__content {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.custom-preview-table ::v-deep th {
  background-color: #f8fafc !important;
  font-weight: 700 !important;
  color: #475569 !important;
}
</style>
