<template>
  <v-dialog v-model="dialogOpen" max-width="1000" persistent>
    <v-card class="noto-sans-lao rounded-xl elevation-5 overflow-hidden">
      <!-- Premium Header with Gradient -->
      <v-card-title class="bg-gradient-orange white--text py-5 px-6">
        <v-avatar color="white" size="40" class="mr-3 elevation-2">
          <v-icon color="orange darken-3" size="24">mdi-clipboard-arrow-down</v-icon>
        </v-avatar>
        <span class="text-h6 font-weight-black">ນຳເຂົ້າການປັບປຸງສະຕັອກສິນຄ້າ (Import Stock Adjustments)</span>
        <v-spacer />
        <v-btn icon dark class="hover-scale" @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pt-6 px-6">
        <!-- Explanatory Banner -->
        <v-alert type="warning" class="rounded-lg mb-6 border-left-alert elevation-1" colored-border border="left" elevation="0">
          <div class="subtitle-1 font-weight-bold mb-1">ຄຳແນະນຳໃນການປັບປຸງສະຕັອກ (Instructions):</div>
          <ol class="pl-4 body-2">
            <li>ດາວໂຫລດໄຟລ໌ Template (ລະບົບຈະດຶງລາຍການສິນຄ້າ ແລະ ສະຕັອກປັດຈຸບັນທັງໝົດອອກມາໃຫ້ອັດຕະໂນມັດ).</li>
            <li>ກອກຈຳນວນສະຕັອກຕົວຈິງໃນຫ້ອງ <strong>"Actual Stock Qty (ຈຳນວນຕົວຈິງ)"</strong>.</li>
            <li>ອັບໂຫລດໄຟລ໌ຄືນ ເພື່ອໃຫ້ລະບົບປຽບທຽບ ແລະ ສ້າງລາຍການບັດສະຕັອກ (Stock Cards) ໃຫ້ກົງກັບຕົວຈິງ.</li>
          </ol>
        </v-alert>

        <div class="d-flex align-center flex-wrap gap-4 mb-6">
          <v-btn color="orange darken-2" class="white--text hover-scale rounded-lg font-weight-bold px-5" :loading="downloading" depressed @click="downloadTemplate">
            <v-icon left>mdi-download</v-icon>
            ດາວໂຫລດ Template ສະຕັອກປັດຈຸບັນ
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

        <!-- Preview and Status Section -->
        <div v-if="importData.length" class="preview-section rounded-lg pa-4">
          <div class="d-flex align-center mb-4 flex-wrap gap-2">
            <h3 class="text-h6 font-weight-bold mb-0">ຕົວຢ່າງຂໍ້ມູນປັບປຸງສະຕັອກ ({{ importData.length }} ລາຍການ)</h3>
            <v-spacer />
            <div class="d-flex gap-2">
              <v-chip v-if="increaseCount > 0" color="success" small label class="font-weight-bold">
                ເພີ່ມສະຕັອກ (+): {{ increaseCount }} ລາຍການ
              </v-chip>
              <v-chip v-if="decreaseCount > 0" color="error" small label class="font-weight-bold">
                ຫຼຸດສະຕັອກ (-): {{ decreaseCount }} ລາຍການ
              </v-chip>
              <v-chip v-if="invalidCount > 0" color="red darken-4" text-color="white" small label class="font-weight-bold">
                ບໍ່ຖືກຕ້ອງ (Invalid): {{ invalidCount }}
              </v-chip>
            </div>
          </div>

          <v-data-table :headers="previewHeaders" :items="importData" :items-per-page="10"
            class="elevation-0 border-light rounded-lg overflow-hidden custom-preview-table">
            <template #item.status_valid="{ item }">
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon v-bind="attrs" :color="item.isValid ? 'success' : 'error'" v-on="on">
                    {{ item.isValid ? 'mdi-check-circle' : 'mdi-alert-circle' }}
                  </v-icon>
                </template>
                <span>{{ item.isValid ? 'ຂໍ້ມູນຖືກຕ້ອງພ້ອມປັບປຸງ (Valid)' : item.validationError }}</span>
              </v-tooltip>
            </template>

            <template #item.currentQty="{ item }">
              <span class="font-weight-medium">{{ formatNumber(item.currentQty) }}</span>
            </template>

            <template #item.actualQty="{ item }">
              <span class="font-weight-bold primary--text">{{ formatNumber(item.actualQty) }}</span>
            </template>

            <template #item.difference="{ item }">
              <v-chip v-if="item.difference > 0" color="success" x-small label class="font-weight-bold">
                +{{ formatNumber(item.difference) }}
              </v-chip>
              <v-chip v-else-if="item.difference < 0" color="error" x-small label class="font-weight-bold">
                {{ formatNumber(item.difference) }}
              </v-chip>
              <span v-else class="grey--text">—</span>
            </template>

            <template #item.validationError="{ item }">
              <span class="error--text font-weight-medium caption">{{ item.validationError }}</span>
            </template>
          </v-data-table>
        </div>
      </v-card-text>

      <v-card-actions class="pb-6 px-6">
        <v-spacer />
        <v-btn text class="rounded-lg font-weight-bold" @click="close">ຍົກເລີກ (Cancel)</v-btn>
        <v-btn color="orange darken-3" class="white--text hover-scale rounded-lg font-weight-bold px-6" :disabled="!isValidToImport || loading" 
          :loading="loading" min-width="150" depressed @click="startImport">
          <v-icon left>mdi-check-all</v-icon>
          ຢືນຢັນປັບປຸງສະຕັອກ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
/* eslint-disable no-console, camelcase */
import * as XLSX from 'xlsx'
import ExcelJS from 'exceljs'
import { getFormatNum } from '~/common'

export default {
  name: 'StockImportDialog',
  props: {
    value: { type: Boolean, default: false },
    locationId: { type: [Number, String], default: null }
  },
  data() {
    return {
      excelFile: null,
      importData: [],
      loading: false,
      downloading: false,
      productList: [],
      previewHeaders: [
        { text: 'ກວດສອບ', value: 'status_valid', width: '80', sortable: false, align: 'center' },
        { text: 'ລະຫັດລະບົບ (Internal ID)', value: 'productId', align: 'center', width: '120' },
        { text: 'ລະຫັດສິນຄ້າ (Code/SKU)', value: 'pro_id', width: '150' },
        { text: 'ຊື່ສິນຄ້າ (Product Name)', value: 'pro_name' },
        { text: 'ສະຕັອກປັດຈຸບັນ (Current)', value: 'currentQty', align: 'end', width: '120' },
        { text: 'ສະຕັອກຕົວຈິງ (Actual)', value: 'actualQty', align: 'end', width: '120' },
        { text: 'ສ່ວນຕ່າງ (Diff)', value: 'difference', align: 'center', width: '100' },
        { text: 'ຂໍ້ຜິດພາດ (Errors)', value: 'validationError', color: 'error' }
      ]
    }
  },
  computed: {
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
    increaseCount() {
      return this.importData.filter(item => item.isValid && item.difference > 0).length
    },
    decreaseCount() {
      return this.importData.filter(item => item.isValid && item.difference < 0).length
    },
    isValidToImport() {
      return this.importData.length > 0 && this.invalidCount === 0 && (this.increaseCount > 0 || this.decreaseCount > 0)
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.fetchProducts()
      }
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
    },
    formatNumber(val) {
      return getFormatNum(val)
    },
    async fetchProducts() {
      if (!this.locationId) return
      try {
        const response = await this.$axios.get(`product_f/${this.locationId}`, {
          params: { include: 'priceList', isActive: false },
        })
        const items = response.data?.data || response.data || []
        this.productList = items.map(el => ({
          id: el.id,
          pro_id: el.pro_id,
          pro_name: el.pro_name,
          card_count: el.card_count || 0
        }))
      } catch (error) {
        console.error('Error fetching products for adjustment template:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນສິນຄ້າ (Error loading products)')
      }
    },
    async downloadTemplate() {
      if (!this.locationId) {
        this.$toast.error('ກະລຸນາເລືອກສາຂາ/ສາງກ່ອນ (Please select location first)')
        return
      }
      this.downloading = true
      try {
        await this.fetchProducts()

        if (this.productList.length === 0) {
          this.$toast.warning('ບໍ່ມີລາຍການສິນຄ້າໃນສາງນີ້ (No products found in this location)')
          this.downloading = false
          return
        }

        const workbook = new ExcelJS.Workbook()
        const worksheet = workbook.addWorksheet('ໃບປັບປຸງສະຕັອກສິນຄ້າ')

        // Define columns
        worksheet.columns = [
          { header: 'Product ID (ລະຫັດລະບົບ) *', key: 'id', width: 25 },
          { header: 'Product Code (ລະຫັດສິນຄ້າ) *', key: 'pro_id', width: 25 },
          { header: 'Product Name (ຊື່ສິນຄ້າ)', key: 'pro_name', width: 35 },
          { header: 'Current Stock Qty (ສະຕັອກປັດຈຸບັນ)', key: 'card_count', width: 25 },
          { header: 'Actual Stock Qty (ຈຳນວນຕົວຈິງ) *', key: 'actualQty', width: 25 }
        ]

        // Format header row
        const headerRow = worksheet.getRow(1)
        headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } }
        headerRow.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFE65100' } // orange darken-4
        }
        headerRow.alignment = { vertical: 'middle', horizontal: 'center' }

        // Add instructions header
        worksheet.insertRow(1, ['ໃບປັບປຸງສະຕັອກສິນຄ້າ (Stock Adjustment Sheet) - ຫ້າມດັດແກ້ຖັນ 1, 2, 3, 4'])
        worksheet.mergeCells('A1:E1')
        const titleRow = worksheet.getRow(1)
        titleRow.font = { bold: true, color: { argb: 'FF3E2723' }, size: 12 }
        titleRow.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFE8EAF6' }
        }
        titleRow.alignment = { vertical: 'middle', horizontal: 'center' }
        titleRow.height = 30

        // Populate products data starting from row 3
        this.productList.forEach((prod) => {
          const row = worksheet.addRow({
            id: prod.id,
            pro_id: prod.pro_id,
            pro_name: prod.pro_name,
            card_count: prod.card_count,
            actualQty: '' // Leave empty for user input
          })
          
          // Lock references / style
          row.getCell('A').protection = { locked: true }
          row.getCell('B').protection = { locked: true }
          row.getCell('C').protection = { locked: true }
          row.getCell('D').protection = { locked: true }
          
          // Alignments
          row.getCell('A').alignment = { horizontal: 'center' }
          row.getCell('D').alignment = { horizontal: 'right' }
          row.getCell('E').alignment = { horizontal: 'right' }
        })

        // Generate buffer & trigger download
        const buffer = await workbook.xlsx.writeBuffer()
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `Stock_Adjustment_Template_${new Date().toISOString().slice(0, 10)}.xlsx`
        link.click()
        URL.revokeObjectURL(url)

        this.$toast.success('ດາວໂຫລດ Template ສຳເລັດ (Template Downloaded)')
      } catch (error) {
        console.error('Error generating adjustment template:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການສ້າງ Template: ' + error.message)
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
          
          // Auto-detect header row
          const row0 = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: 0, maxRows: 1 })[0] || []
          const row1 = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: 1, maxRows: 1 })[0] || []

          let headerRange = 0
          const hasIdOrCode = (row) => row.some(cell => {
            const val = String(cell || '').toLowerCase()
            return val.includes('id') || val.includes('code') || val.includes('ລະຫັດ') || val.includes('ຊື່')
          })

          if (!hasIdOrCode(row0) && hasIdOrCode(row1)) {
            headerRange = 1
          }

          const jsonData = XLSX.utils.sheet_to_json(worksheet, { range: headerRange, defval: '' })

          this.processImportData(jsonData)
        } catch (err) {
          console.error('Error reading Excel:', err)
          this.$toast.error('ບໍ່ສາມາດເປີດໄຟລ໌ Excel ໄດ້: ' + err.message)
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

        const productIdKey = findKey(['product id', 'internal id', 'ລະຫັດລະບົບ', 'id'])
        const proIdKey = findKey(['product code', 'ລະຫັດສິນຄ້າ', 'pro_id', 'code'])
        const proNameKey = findKey(['product name', 'ຊື່ສິນຄ້າ', 'pro_name', 'name'])
        const currentQtyKey = findKey(['current stock qty', 'ສະຕັອກປັດຈຸບັນ', 'card_count', 'stock', 'pro_card_count'])
        const actualQtyKey = findKey(['actual stock qty', 'ຈຳນວນຕົວຈິງ', 'actualqty', 'actual'])

        const productId = productIdKey ? parseInt(row[productIdKey]) : NaN
        const pro_id = proIdKey ? String(row[proIdKey] || '').trim() : ''
        const pro_name = proNameKey ? String(row[proNameKey] || '').trim() : ''
        
        let currentQty = currentQtyKey ? parseInt(row[currentQtyKey] || 0) : 0
        if (isNaN(currentQty)) currentQty = 0

        let actualQtyRaw = actualQtyKey ? row[actualQtyKey] : ''
        if (actualQtyRaw === '' && !actualQtyKey && currentQtyKey) {
          actualQtyRaw = row[currentQtyKey]
        }

        const item = {
          productId,
          pro_id,
          pro_name,
          currentQty,
          actualQty: actualQtyRaw !== '' && actualQtyRaw !== undefined ? parseInt(actualQtyRaw) : '',
          difference: 0,
          isValid: true,
          validationError: ''
        }

        // 1. Validate ID
        if (isNaN(productId)) {
          item.isValid = false
          item.validationError = 'ລະຫັດ ID ບໍ່ຖືກຕ້ອງ (Invalid Product ID)'
          return item
        }

        // 2. Validate matching product in current products list
        const dbProduct = this.productList.find(p => p.id === productId)
        if (!dbProduct) {
          item.isValid = false
          item.validationError = 'ບໍ່ພົບສິນຄ້ານີ້ໃນລະບົບ (Product not found in this location)'
          return item
        }

        if (String(dbProduct.pro_id).trim() !== String(pro_id).trim()) {
          item.isValid = false
          item.validationError = `ລະຫັດ Code ບໍ່ກົງກັນ (Expected Code: ${dbProduct.pro_id})`
          return item
        }

        // Fill standard info
        item.pro_name = dbProduct.pro_name
        item.currentQty = dbProduct.card_count

        // 3. Validate actual quantity
        if (item.actualQty === '') {
          item.actualQty = dbProduct.card_count
          item.difference = 0
        } else if (isNaN(item.actualQty) || item.actualQty < 0) {
          item.isValid = false
          item.validationError = 'ຈຳນວນຕົວຈິງຕ້ອງເປັນເລກບວກ >= 0 (Actual stock must be >= 0)'
          return item
        } else {
          item.difference = item.actualQty - item.currentQty
        }

        return item
      })
    },
    async startImport() {
      if (!this.isValidToImport) {
        this.$toast.error('ກະລຸນາແກ້ໄຂຂໍ້ມູນ ຫຼື ກອກຂໍ້ມູນຈຳນວນສະຕັອກຕົວຈິງກ່ອນ')
        return
      }

      this.loading = true
      try {
        const adjustments = this.importData
          .filter(item => item.isValid && item.difference !== 0)
          .map(item => ({
            productId: item.productId,
            pro_id: item.pro_id,
            actualQty: item.actualQty
          }))

        const payload = {
          inputter: this.$auth.user.id,
          locationId: this.locationId,
          adjustments
        }

        const response = await this.$axios.$post('/api/card/adjustStockBulk', payload)

        if (response.success) {
          this.$toast.success(response.message || `ປັບປຸງສະຕັອກສຳເລັດ ${adjustments.length} ລາຍການ`)
          this.$emit('imported')
          this.close()
        } else {
          this.$toast.error(response.message || 'ປັບປຸງສະຕັອກບໍ່ສຳເລັດ')
        }
      } catch (error) {
        console.error('Import stock adjust error:', error)
        const errorMsg = error.response?.data?.message || error.message
        this.$toast.error('ຜິດພາດ (Error): ' + errorMsg)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.bg-gradient-orange {
  background: linear-gradient(135deg, #e65100 0%, #ff9800 100%) !important;
}

.preview-section {
  border: 1px solid #ffe0b2;
  background: #fffde7;
}

.border-light {
  border: 1px solid #e2e8f0 !important;
}

.border-left-alert {
  border-left-width: 4px !important;
  border-left-color: #ff9800 !important;
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
