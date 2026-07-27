<template>
  <v-dialog v-model="dialogOpen" max-width="1200" persistent>
    <v-card class="noto-sans-lao">
      <v-card-title class="primary white--text">
        <v-icon left color="white">mdi-file-import</v-icon>
        ນຳເຂົ້າຂໍ້ມູນສິນຄ້າດ້ວຍ Excel (Import Products via Excel)
        <v-spacer />
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pt-6">
        <v-alert type="info" outlined dense dismissible class="mb-4">
          ກະລຸນາດາວໂຫລດ Template ແລະ ກອກຂໍ້ມູນໃຫ້ຄົບຖ້ວນ. ລະບົບຈະກວດສອບຄວາມຖືກຕ້ອງຂອງຂໍ້ມູນອັດຕະໂນມັດ.
          (Please download the template, fill in the data, and upload it. The system will auto-validate.)
        </v-alert>

        <div class="d-flex align-center flex-wrap gap-4 mb-6">
          <v-btn color="success" class="mr-4" :loading="downloading" depressed @click="downloadTemplate">
            <v-icon left>mdi-download</v-icon>
            ດາວໂຫລດ Template (Download Template)
          </v-btn>

          <v-file-input v-model="excelFile" label="ເລືອກໄຟລ໌ Excel ທີ່ກອກຂໍ້ມູນແລ້ວ (Select Excel File)" accept=".xlsx, .xls"
            outlined dense hide-details prepend-icon="mdi-microsoft-excel" style="max-width: 400px"
            @change="handleFileUpload" />

          <v-btn v-if="importData.length" text color="error" class="ml-2" @click="reset">
            <v-icon left>mdi-refresh</v-icon>
            ລ້າງຂໍ້ມູນ (Clear)
          </v-btn>
        </div>

        <v-divider v-if="importData.length" class="my-4" />

        <div v-if="importData.length" class="preview-section">
          <div class="d-flex align-center mb-2">
            <h3 class="text-h6">ຕົວຢ່າງຂໍ້ມູນ ({{ importData.length }} ລາຍການ)</h3>
            <v-spacer />
            <v-chip v-if="invalidCount > 0" color="error" outlined small>
              ມີ {{ invalidCount }} ລາຍການທີ່ບໍ່ຖືກຕ້ອງ ({{ invalidCount }} Invalid Records)
            </v-chip>
            <v-chip v-else color="success" outlined small>
              `ຂໍ້ມູນທັງໝົດຖືກຕ້ອງ ພ້ອມນຳເຂົ້າ (All Records Valid)
            </v-chip>
          </div>

          <v-data-table :headers="previewHeaders" :items="importData" :items-per-page="10"
            class="elevation-1 border-light">
            <template #item.status_valid="{ item }">
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon v-bind="attrs" :color="item.isValid ? 'success' : 'error'" v-on="on">
                    {{ item.isValid ? 'mdi-check-circle' : 'mdi-alert-circle' }}
                  </v-icon>
                </template>
                <span>{{ item.isValid ? 'ພ້ອມນຳເຂົ້າ (Ready)' : item.validationError }}</span>
              </v-tooltip>
            </template>

            <template #item.cost_price="{ item }">
              {{ formatNumber(item.cost_price) }}
            </template>

            <template #item.pro_price="{ item }">
              {{ formatNumber(item.pro_price) }}
            </template>

            <template #item.validationError="{ item }">
              <span class="error--text font-weight-medium">{{ item.validationError }}</span>
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
            <span class="caption font-weight-bold primary--text">
              {{ importedCount }} / {{ totalCount }} ({{ Math.round(importProgress) }}%)
            </span>
          </div>
          <v-progress-linear
            color="primary"
            height="8"
            reactive
            rounded
            :value="importProgress"
          ></v-progress-linear>
        </div>
        <v-spacer v-else />
        <v-btn text :disabled="loading" @click="close">ຍົກເລີກ (Cancel)</v-btn>
        <v-btn color="primary" :disabled="!isValidToImport || loading" :loading="loading" min-width="150"
          depressed @click="startImport">
          <v-icon left>mdi-upload</v-icon>
          ນຳເຂົ້າຂໍ້ມູນ (Import Products)
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
  name: 'ProductImportDialog',
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
      companies: [],
      categories: [],
      currencies: [],
      units: [],
      importedCount: 0,
      totalCount: 0,
      totalChunks: 0,
      previewHeaders: [
        { text: 'ກວດສອບ', value: 'status_valid', width: '80', sortable: false, align: 'center' },
        { text: 'ຊື່ສິນຄ້າ (Product Name)', value: 'pro_name' },
        { text: 'ບາໂຄດ (Barcode)', value: 'barCode' },
        { text: 'ຕົ້ນທຶນ (Cost)', value: 'cost_price', align: 'end' },
        { text: 'ສະກຸນຕົ້ນທຶນ', value: 'costCurrencyCode', align: 'center' },
        { text: 'ລາຄາຂາຍ (Price)', value: 'pro_price', align: 'end' },
        { text: 'ສະກຸນຂາຍ', value: 'saleCurrencyCode', align: 'center' },
        { text: 'ໝວດໝູ່ (Category)', value: 'categoryName' },
        { text: 'ປະເພດ (Type)', value: '_category', align: 'center' },
        { text: 'ຫົວໜ່ວຍສາງ (Stock Unit)', value: 'stockUnitName', align: 'center' },
        { text: 'ຮ້ານ (Company)', value: 'companyName' },
        { text: 'ໝາຍເຫດຂໍ້ຜິດພາດ (Errors)', value: 'validationError', color: 'error' }
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
    isValidToImport() {
      return this.importData.length > 0 && this.invalidCount === 0
    },
    importProgress() {
      if (!this.totalCount) return 0
      return (this.importedCount / this.totalCount) * 100
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.fetchMetadata()
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
      this.importedCount = 0
      this.totalCount = 0
      this.totalChunks = 0
    },
    formatNumber(val) {
      return getFormatNum(val)
    },
    async fetchMetadata() {
      try {
        const [companyRes, categoryRes, currencyRes, unitRes] = await Promise.all([
          this.$axios.get('api/company/find'),
          this.$axios.get('category_f'),
          this.$axios.get('api/currency/findAll'),
          this.$axios.get('api/unit/find')
        ])

        const companyData = Array.isArray(companyRes.data) ? companyRes.data : (companyRes.data?.data || [])
        const categoryData = Array.isArray(categoryRes.data) ? categoryRes.data : (categoryRes.data?.data || [])
        const currencyData = Array.isArray(currencyRes.data) ? currencyRes.data : (currencyRes.data?.data || [])
        const unitData = Array.isArray(unitRes.data) ? unitRes.data : (unitRes.data?.data || [])

        this.companies = companyData.map(c => ({ id: c.id, name: c.name }))
        this.categories = categoryData
          .filter(el => el.isActive === true || el.isActive === 1)
          .map(el => ({ id: el.categ_id, name: el.categ_name }))
        this.currencies = currencyData
          .filter(el => el.isActive === true || el.isActive === 1)
          .map(el => ({ id: el.id, code: el.code }))
        this.units = unitData
          .filter(el => el.isActive === true || el.isActive === 1)
          .map(el => ({ id: el.id, name: el.name }))
      } catch (error) {
        console.error('Error fetching metadata for product upload:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນລະບົບ (Error loading metadata)')
      }
    },
    async downloadTemplate() {
      this.downloading = true
      try {
        const workbook = new ExcelJS.Workbook()
        const worksheet = workbook.addWorksheet('ພື້ນຖານຂໍ້ມູນສິນຄ້າ')

        // Define columns
        worksheet.columns = [
          { header: 'ຊື່ສິນຄ້າ (Product Name) *', key: 'pro_name', width: 25 },
          { header: 'ລະຫັດສິນຄ້າ (Product Code)', key: 'product_code', width: 20 },
          { header: 'ບາໂຄດ (Barcode)', key: 'barCode', width: 20 },
          { header: 'ຕົ້ນທຶນ (Cost Price) *', key: 'cost_price', width: 15 },
          { header: 'ສະກຸນເງິນຕົ້ນທຶນ (Cost Currency) *', key: 'costCurrency', width: 18 },
          { header: 'ລາຄາຂາຍ (Sale Price) *', key: 'pro_price', width: 15 },
          { header: 'ສະກຸນເງິນຂາຍ (Sale Currency) *', key: 'saleCurrency', width: 18 },
          { header: 'ໝວດໝູ່ສິນຄ້າ (Category) *', key: 'pro_category', width: 22 },
          { header: 'ປະເພດສິນຄ້າ (Product Type) *', key: '_category', width: 22 },
          { header: 'ຫົວໜ່ວຍຮັບ (Receive Unit) *', key: 'receiveUnit', width: 18 },
          { header: 'ຫົວໜ່ວຍສາງ (Stock Unit) *', key: 'stockUnit', width: 18 },
          { header: 'ຫົວໜ່ວຍພື້ນຖານ (Base Unit)', key: 'baseUnit', width: 18 },
          { header: 'ຮ້ານ/ສາຂາ (Company) *', key: 'company', width: 25 },
          { header: 'ລາຍລະອຽດ (Description)', key: 'pro_desc', width: 30 },
          { header: 'ສຕັອກຂັ້ນຕ່ຳ (Min Stock)', key: 'minStock', width: 15 },
          { header: 'ຊື່ຜູ້ສະໜອງ (Vendor Name)', key: 'vendorName', width: 20 }
        ]

        // Format header row
        const headerRow = worksheet.getRow(1)
        headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } }
        headerRow.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF1976D2' } // primary blue
        }
        headerRow.alignment = { vertical: 'middle', horizontal: 'center' }

        // Populate drop-down option lists in hidden sheets to support dropdown selection
        const companyList = this.companies.map(c => c.name)
        const unitList = this.units.map(u => u.name)
        const currencyList = this.currencies.map(c => c.code)
        const categoryList = this.categories.map(c => c.name)

        if (companyList.length > 0) {
          const compSheet = workbook.addWorksheet('CompaniesData')
          companyList.forEach((val, index) => {
            compSheet.getCell(`A${index + 1}`).value = val
          })
          compSheet.state = 'hidden'
        }
        if (unitList.length > 0) {
          const uSheet = workbook.addWorksheet('UnitsData')
          unitList.forEach((val, index) => {
            uSheet.getCell(`A${index + 1}`).value = val
          })
          uSheet.state = 'hidden'
        }
        if (currencyList.length > 0) {
          const currSheet = workbook.addWorksheet('CurrenciesData')
          currencyList.forEach((val, index) => {
            currSheet.getCell(`A${index + 1}`).value = val
          })
          currSheet.state = 'hidden'
        }
        if (categoryList.length > 0) {
          const catSheet = workbook.addWorksheet('CategoriesData')
          categoryList.forEach((val, index) => {
            catSheet.getCell(`A${index + 1}`).value = val
          })
          catSheet.state = 'hidden'
        }

        // Apply dropdown validations (first 500 rows)
        for (let i = 2; i <= 500; i++) {
          // Cost Currency dropdown (E)
          if (currencyList.length > 0) {
            worksheet.getCell(`E${i}`).dataValidation = {
              type: 'list',
              allowBlank: true,
              formulae: [`CurrenciesData!$A$1:$A$${currencyList.length}`]
            }
            // Sale Currency dropdown (G)
            worksheet.getCell(`G${i}`).dataValidation = {
              type: 'list',
              allowBlank: true,
              formulae: [`CurrenciesData!$A$1:$A$${currencyList.length}`]
            }
          }

          // Category dropdown (H)
          if (categoryList.length > 0) {
            worksheet.getCell(`H${i}`).dataValidation = {
              type: 'list',
              allowBlank: true,
              formulae: [`CategoriesData!$A$1:$A$${categoryList.length}`]
            }
          }

          // Product Type dropdown (I)
          worksheet.getCell(`I${i}`).dataValidation = {
            type: 'list',
            allowBlank: true,
            formulae: ['"product,service,stock"']
          }

          // Units dropdowns (Receive, Stock, Base) (J, K, L)
          if (unitList.length > 0) {
            worksheet.getCell(`J${i}`).dataValidation = {
              type: 'list',
              allowBlank: true,
              formulae: [`UnitsData!$A$1:$A$${unitList.length}`]
            }
            worksheet.getCell(`K${i}`).dataValidation = {
              type: 'list',
              allowBlank: true,
              formulae: [`UnitsData!$A$1:$A$${unitList.length}`]
            }
            worksheet.getCell(`L${i}`).dataValidation = {
              type: 'list',
              allowBlank: true,
              formulae: [`UnitsData!$A$1:$A$${unitList.length}`]
            }
          }

          // Company dropdown (M)
          if (companyList.length > 0) {
            worksheet.getCell(`M${i}`).dataValidation = {
              type: 'list',
              allowBlank: true,
              formulae: [`CompaniesData!$A$1:$A$${companyList.length}`]
            }
          }
        }

        // Create reference worksheet for existing products
        const currentProductsWorksheet = workbook.addWorksheet('ລາຍການສິນຄ້າປັດຈຸບັນ')

        // Define columns exactly matching template sheet
        currentProductsWorksheet.columns = [
          { header: 'ຊື່ສິນຄ້າ (Product Name)', key: 'pro_name', width: 25 },
          { header: 'ລະຫັດສິນຄ້າ (Product Code)', key: 'product_code', width: 20 },
          { header: 'ບາໂຄດ (Barcode)', key: 'barCode', width: 20 },
          { header: 'ຕົ້ນທຶນ (Cost Price)', key: 'cost_price', width: 15 },
          { header: 'ສະກຸນເງິນຕົ້ນທຶນ (Cost Currency)', key: 'costCurrency', width: 18 },
          { header: 'ລາຄາຂາຍ (Sale Price)', key: 'pro_price', width: 15 },
          { header: 'ສະກຸນເງິນຂາຍ (Sale Currency)', key: 'saleCurrency', width: 18 },
          { header: 'ໝວດໝູ່ສິນຄ້າ (Category)', key: 'pro_category', width: 22 },
          { header: 'ປະເພດສິນຄ້າ (Product Type)', key: '_category', width: 22 },
          { header: 'ຫົວໜ່ວຍຮັບ (Receive Unit)', key: 'receiveUnit', width: 18 },
          { header: 'ຫົວໜ່ວຍສາງ (Stock Unit)', key: 'stockUnit', width: 18 },
          { header: 'ຫົວໜ່ວຍພື້ນຖານ (Base Unit)', key: 'baseUnit', width: 18 },
          { header: 'ຮ້ານ/ສາຂາ (Company)', key: 'company', width: 25 },
          { header: 'ລາຍລະອຽດ (Description)', key: 'pro_desc', width: 30 },
          { header: 'ສຕັອກຂັ້ນຕ່ຳ (Min Stock)', key: 'minStock', width: 15 },
          { header: 'ຊື່ຜູ້ສະໜອງ (Vendor Name)', key: 'vendorName', width: 20 }
        ]

        // Format header row
        const currentHeaderRow = currentProductsWorksheet.getRow(1)
        currentHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } }
        currentHeaderRow.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF2E7D32' } // premium dark green color
        }
        currentHeaderRow.alignment = { vertical: 'middle', horizontal: 'center' }

        // Populate current product list
        if (Array.isArray(this.products) && this.products.length > 0) {
          this.products.forEach(item => {
            const companyName = item.co_name || this.companies.find(c => c.id === item.companyId)?.name || ''
            const categoryName = this.categories.find(c => c.id === item.pro_category)?.name || ''
            const costCurrencyCode = this.currencies.find(c => c.id === item.costCurrencyId)?.code || ''
            const saleCurrencyCode = this.currencies.find(c => c.id === item.saleCurrencyId)?.code || ''
            const receiveUnitName = this.units.find(u => u.id === item.receiveUnitId)?.name || ''
            const stockUnitName = this.units.find(u => u.id === item.stockUnitId)?.name || ''
            const baseUnitName = this.units.find(u => u.id === item.baseUnitId)?.name || ''

            currentProductsWorksheet.addRow({
              pro_name: item.pro_name || '',
              product_code: item.product_code || '',
              barCode: item.barCode || '',
              cost_price: item.pro_cost_price || 0,
              costCurrency: costCurrencyCode,
              pro_price: item.pro_price || 0,
              saleCurrency: saleCurrencyCode,
              pro_category: categoryName,
              _category: item._category || 'product',
              receiveUnit: receiveUnitName,
              stockUnit: stockUnitName,
              baseUnit: baseUnitName,
              company: companyName,
              pro_desc: item.pro_desc || '',
              minStock: item.minStock || 0,
              vendorName: item.vendorName || ''
            })
          })
        }

        // Generate buffer & trigger download
        const buffer = await workbook.xlsx.writeBuffer()
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `Product_Upload_Template_${new Date().toISOString().slice(0, 10)}.xlsx`
        link.click()
        URL.revokeObjectURL(url)

        this.$toast.success('ດາວໂຫລດ Template ສຳເລັດ (Template Downloaded)')
      } catch (error) {
        console.error('Error generating template:', error)
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
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' })

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
        const pro_name = String(row['ຊື່ສິນຄ້າ (Product Name) *'] || row.pro_name || '')
        const product_code = String(row['ລະຫັດສິນຄ້າ (Product Code)'] || row.product_code || '').trim()
        const barCode = String(row['ບາໂຄດ (Barcode)'] || row.barCode || '').trim()
        const cost_price = parseFloat(row['ຕົ້ນທຶນ (Cost Price) *'] || row.cost_price || 0)
        const costCurrencyCode = String(row['ສະກຸນເງິນຕົ້ນທຶນ (Cost Currency) *'] || row.costCurrency || '').trim()
        const pro_price = parseFloat(row['ລາຄາຂາຍ (Sale Price) *'] || row.pro_price || 0)
        const saleCurrencyCode = String(row['ສະກຸນເງິນຂາຍ (Sale Currency) *'] || row.saleCurrency || '').trim()
        const categoryName = String(row['ໝວດໝູ່ສິນຄ້າ (Category) *'] || row.pro_category || '').trim()
        const _category = String(row['ປະເພດສິນຄ້າ (Product Type) *'] || row._category || 'product').toLowerCase().trim()
        const receiveUnitName = String(row['ຫົວໜ່ວຍຮັບ (Receive Unit) *'] || row.receiveUnit || '').trim()
        const stockUnitName = String(row['ຫົວໜ່ວຍສາງ (Stock Unit) *'] || row.stockUnit || '').trim()
        const baseUnitName = String(row['ຫົວໜ່ວຍພື້ນຖານ (Base Unit)'] || row.baseUnit || '').trim()
        const companyName = String(row['ຮ້ານ/ສາຂາ (Company) *'] || row.company || '').trim()
        const pro_desc = String(row['ລາຍລະອຽດ (Description)'] || row.pro_desc || '')
        const minStock = parseInt(row['ສຕັອກຂັ້ນຕ່ຳ (Min Stock)'] || row.minStock || 0)
        const vendorName = String(row['ຊື່ຜູ້ສະໜອງ (Vendor Name)'] || row.vendorName || '')

        const item = {
          pro_name,
          product_code,
          barCode,
          cost_price,
          costCurrencyCode,
          pro_price,
          saleCurrencyCode,
          categoryName,
          _category,
          receiveUnitName,
          stockUnitName,
          baseUnitName,
          companyName,
          pro_desc,
          minStock,
          vendorName,
          isValid: true,
          validationError: ''
        }

        // 1. Mandatory Name check
        if (!pro_name) {
          item.isValid = false
          item.validationError = 'ຊື່ສິນຄ້າແມ່ນຈຳເປັນ (Product Name is required)'
          return item
        }

        // 2. Pricing numeric validation
        if (isNaN(cost_price) || cost_price < 0) {
          item.isValid = false
          item.validationError = 'ຕົ້ນທຶນຕ້ອງເປັນຕົວເລກ >= 0 (Cost must be a valid number >= 0)'
          return item
        }
        if (isNaN(pro_price) || pro_price < 0) {
          item.isValid = false
          item.validationError = 'ລາຄາຂາຍຕ້ອງເປັນຕົວເລກ >= 0 (Price must be a valid number >= 0)'
          return item
        }

        // 3. Product type category validation
        if (!['product', 'service', 'stock'].includes(_category)) {
          item.isValid = false
          item.validationError = 'ປະເພດສິນຄ້າຕ້ອງເປັນ product, service ຫຼື stock'
          return item
        }

        // 4. Currency matching
        const costCurr = this.currencies.find(c => c.code.toUpperCase() === costCurrencyCode.toUpperCase())
        if (costCurr) {
          item.costCurrencyId = costCurr.id
        } else {
          item.isValid = false
          item.validationError = `ບໍ່ພົບສະກຸນເງິນຕົ້ນທຶນ: ${costCurrencyCode}`
          return item
        }

        const saleCurr = this.currencies.find(c => c.code.toUpperCase() === saleCurrencyCode.toUpperCase())
        if (saleCurr) {
          item.saleCurrencyId = saleCurr.id
        } else {
          item.isValid = false
          item.validationError = `ບໍ່ພົບສະກຸນເງິນຂາຍ: ${saleCurrencyCode}`
          return item
        }

        // 5. Category matching
        const cat = this.categories.find(c => c.name.toLowerCase() === categoryName.toLowerCase())
        if (cat) {
          item.pro_category = cat.id
        } else {
          item.isValid = false
          item.validationError = `ບໍ່ພົບໝວດໝູ່ສິນຄ້າ: ${categoryName}`
          return item
        }

        // 6. Units matching
        const rUnit = this.units.find(u => u.name.toLowerCase() === receiveUnitName.toLowerCase())
        if (rUnit) {
          item.receiveUnitId = rUnit.id
        } else {
          item.isValid = false
          item.validationError = `ບໍ່ພົບຫົວໜ່ວຍຮັບ: ${receiveUnitName}`
          return item
        }

        const sUnit = this.units.find(u => u.name.toLowerCase() === stockUnitName.toLowerCase())
        if (sUnit) {
          item.stockUnitId = sUnit.id
        } else {
          item.isValid = false
          item.validationError = `ບໍ່ພົບຫົວໜ່ວຍສາງ: ${stockUnitName}`
          return item
        }

        if (baseUnitName) {
          const bUnit = this.units.find(u => u.name.toLowerCase() === baseUnitName.toLowerCase())
          if (bUnit) {
            item.baseUnitId = bUnit.id
          } else {
            item.isValid = false
            item.validationError = `ບໍ່ພົບຫົວໜ່ວຍພື້ນຖານ: ${baseUnitName}`
            return item
          }
        }

        // 7. Company matching
        const comp = this.companies.find(c => c.name.toLowerCase() === companyName.toLowerCase())
        if (comp) {
          item.companyId = comp.id
        } else {
          item.isValid = false
          item.validationError = `ບໍ່ພົບຮ້ານ/ສາຂາ: ${companyName}`
          return item
        }

        return item
      })
    },
    async startImport() {
      if (!this.isValidToImport) {
        this.$toast.error('ກະລຸນາແກ້ໄຂຂໍ້ມູນໃຫ້ຖືກຕ້ອງກ່ອນ')
        return
      }

      this.loading = true
      try {
        const payload = this.importData.map(item => ({
          pro_category: item.pro_category,
          pro_name: item.pro_name,
          product_code: item.product_code || null,
          pro_price: item.pro_price,
          pro_desc: item.pro_desc,
          cost_price: item.cost_price,
          minStock: item.minStock,
          barCode: item.barCode,
          receiveUnitId: item.receiveUnitId,
          stockUnitId: item.stockUnitId,
          baseUnitId: item.baseUnitId || null,
          costCurrencyId: item.costCurrencyId,
          saleCurrencyId: item.saleCurrencyId,
          companyId: item.companyId,
          vendorName: item.vendorName,
          _category: item._category,
          isActive: 1,
          pro_status: 1
        }))

        const chunkSize = 200
        this.totalCount = payload.length
        this.importedCount = 0
        this.totalChunks = Math.ceil(this.totalCount / chunkSize)

        let succeededCount = 0
        let lastMessage = ''

        for (let i = 0; i < payload.length; i += chunkSize) {
          const chunk = payload.slice(i, i + chunkSize)
          const response = await this.$axios.$post('/api/product/bulk', { products: chunk })
          if (response.success) {
            succeededCount += chunk.length
            this.importedCount = succeededCount
            lastMessage = response.message
          } else {
            throw new Error(response.message || 'ນຳເຂົ້າຂໍ້ມູນບໍ່ສຳເລັດ (Failed to import some products)')
          }
        }

        this.$toast.success(lastMessage || `ນຳເຂົ້າສິນຄ້າສຳເລັດ ${payload.length} ລາຍການ`)
        this.$emit('imported')
        this.close()
      } catch (error) {
        console.error('Import products error:', error)
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
.preview-section {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  background: #f8fafc;
}

.border-light {
  border: 1px solid #e2e8f0 !important;
}

.gap-4 {
  gap: 16px;
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
</style>
