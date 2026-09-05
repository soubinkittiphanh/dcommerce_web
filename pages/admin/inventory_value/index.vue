<template>
  <div class="text-left px-4 py-3">
    <!-- Page Header Dashboard Style -->
    <div class="d-flex flex-wrap justify-space-between align-center mb-6">
      <div class="d-flex align-center">
        <v-avatar color="primary lighten-5" size="48" class="mr-3">
          <v-icon color="primary" size="28">mdi-chart-box-outline</v-icon>
        </v-avatar>
        <div>
          <h1 class="text-h5 font-weight-bold primary--text">ລາຍການສິນຄ້າ ພ້ອມມູນຄ່າສຕັອກ</h1>
          <span class="caption grey--text text--darken-1">ຈັດການ ແລະ ຕິດຕາມມູນຄ່າສະຕັອກສິນຄ້າທັງໝົດແບບ Realtime</span>
        </div>
      </div>
      <div class="d-flex mt-3 mt-sm-0">
        <v-btn color="primary" class="px-4 font-weight-bold" @click="guidelineDialog = true" rounded outlined>
          <v-icon left>mdi-lifebuoy</v-icon>
          ຄູ່ມືການນຳໃຊ້
        </v-btn>
      </div>
    </div>

    <!-- Summary Statistics KPI Cards -->
    <v-row class="mb-6">
      <!-- Card 1: Total Stock Value -->
      <v-col cols="12" md="4" class="py-2">
        <v-card class="elevation-2 rounded-xl pa-4 stat-card-value">
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="text-subtitle-2 font-weight-bold text-uppercase tracking-wider text-muted">ມູນຄ່າສິນຄ້າຄ້າງສະຕັອກ</span>
              <h2 class="text-h4 font-weight-bold mt-2 primary--text">{{ formatCurrency(grandTotalStockValue) }}</h2>
            </div>
            <v-avatar color="primary" size="48" class="elevation-2">
              <v-icon color="white">mdi-database-outline</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- Card 2: Total Items in Stock -->
      <v-col cols="12" md="4" class="py-2">
        <v-card class="elevation-2 rounded-xl pa-4 stat-card-items">
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="text-subtitle-2 font-weight-bold text-uppercase tracking-wider text-muted">ຈຳນວນສິນຄ້າທັງໝົດ</span>
              <h2 class="text-h4 font-weight-bold mt-2 success--text">{{ formatNumber(totalStockItems) }} ຊິ້ນ</h2>
            </div>
            <v-avatar color="success" size="48" class="elevation-2">
              <v-icon color="white">mdi-package-variant-closed</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- Card 3: Total Unique Products -->
      <v-col cols="12" md="4" class="py-2">
        <v-card class="elevation-2 rounded-xl pa-4 stat-card-products">
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="text-subtitle-2 font-weight-bold text-uppercase tracking-wider text-muted">ລາຍການສິນຄ້າທັງໝົດ</span>
              <h2 class="text-h4 font-weight-bold mt-2 warning--text">{{ formatNumber(totalUniqueProducts) }} ລາຍການ</h2>
            </div>
            <v-avatar color="warning" size="48" class="elevation-2">
              <v-icon color="white">mdi-tag-multiple-outline</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialogs -->
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="5yMsQ6gRSkI">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isstock" max-width="600px">
      <card-form :key="stockFormKey" :product-id="selectedProductId" :id="selectedId" :cost="selectedProductCost"
        :product-name="selectedProductName" @close-dialog="isstock = false" @reload="rebuildStock"></card-form>
    </v-dialog>
    <v-dialog v-model="editProductForm" max-width="1200px">
      <product-form :key="productFormKey" @close-dialog="editProductForm = false" :header-id="selectedProductId"
        @refresh="fetchData" :isEdit="editProductForm"></product-form>
    </v-dialog>
    <v-dialog v-model="productFormCreate" max-width="1200px">
      <product-form-create @close-dialog="productFormCreate = false" @refresh="fetchData">
      </product-form-create>
    </v-dialog>

    <v-dialog v-model="priceListDialog" max-width="1200px">
      <price-list-form :key="priceListFormKey" @close-dialog="priceListDialog = false" :record-id="pricingRecordId"
        @refresh="fetchData">
      </price-list-form>
    </v-dialog>

    <!-- Main List Container -->
    <v-card class="elevation-3 rounded-xl overflow-hidden mt-4">
      <v-card-title class="py-4 px-6 border-bottom grey lighten-5">
        <v-row align="center">
          <v-col cols="12" sm="4" md="4" class="py-1">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຊອກຫາສິນຄ້າ..."
              single-line
              hide-details
              outlined
              dense
              class="rounded-lg bg-white"
            />
          </v-col>
          <v-col cols="12" sm="8" md="8" class="text-right py-1">
            <v-btn
              color="primary"
              outlined
              @click="printReport"
              rounded
              height="40"
              class="mr-2 px-4 font-weight-bold"
            >
              <v-icon left>mdi-printer</v-icon>
              Print Report
            </v-btn>
            <v-btn
              color="success"
              depressed
              dark
              @click="exportToExcel"
              rounded
              height="40"
              class="mr-2 px-4 font-weight-bold"
              :loading="exportLoading"
            >
              <v-icon left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn
              color="warning"
              outlined
              @click="rebuildStock"
              rounded
              height="40"
              class="px-4 font-weight-bold"
            >
              <v-icon left>mdi-update</v-icon>
              Rebuild stock
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <!-- Data Table -->
      <v-data-table
        v-if="loaddata"
        :headers="headers"
        :search="search"
        :items="stockList"
        :items-per-page="pageLine"
        class="custom-table"
      >
        <template v-slot:[`item.product_id`]="{ item }">
          <span class="font-weight-medium grey--text text--darken-2">{{ item.product_id }}</span>
        </template>
        <template v-slot:[`item.product.pro_price`]="{ item }">
          {{ formatCurrency(item.product?.pro_price) }}
        </template>
        <template v-slot:[`item.pro_price`]="{ item }">
          {{ formatCurrency(item.pro_price) }}
        </template>
        <template v-slot:[`item.cardCount`]="{ item }">
          <span class="font-weight-medium">{{ formatNumber(item.cardCount) }}</span>
        </template>
        <template v-slot:[`item.cost`]="{ item }">
          {{ formatCurrency(item.cardCount > 0 ? (item.totalCardValue / item.cardCount) : 0) }}
        </template>
        <template v-slot:[`item.totalCardValue`]="{ item }">
          <span class="font-weight-bold text-subtitle-2">{{ formatCurrency(item.totalCardValue) }}</span>
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
import { mainCompanyInfo } from '~/common/api'
import { generateInventoryValueReportHTML } from '~/common/printTemplates'
export default {
  components: { ProductForm, ProductFormCreate, PriceListForm },
  middleware: 'auths',
  data() {
    return {
      exportLoading: false, // Add this for export loading state
      simpleHeaders: [
        { text: 'ມູນຄ່າສິນຄ້າຄ້າງສະຕັອກ', value: 'age' },
      ],
      simpleItems: [
      ],
      stockList: [],
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
          text: 'ລະຫັດສິນຄ້າ',
          align: 'center',
          value: 'product_id',
        },
        {
          text: 'ຊື່ສິນຄ້າ',
          align: 'left',
          value: 'product.pro_name',
        },
        { text: 'ລາຄາຂາຍ', align: 'right', value: 'product.pro_price' },
        { text: 'ຈຳນວນສະຕັອກ', align: 'right', value: 'cardCount' },
        { text: 'ຕົ້ນທຶນສະເລ່ຍ', align: 'right', value: 'cost' },
        { text: 'ມູນຄ່າລວມ', align: 'right', value: 'totalCardValue' },
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
    ...mapGetters(['currentSelectedLocation', 'findAllLocation', 'findLocalCurrency']),
    grandTotalStockValue() {
      const totalStockValue = this.stockList.reduce((total, item) => {
        return total + item.totalCardValue;
      }, 0);
      return totalStockValue;
    },
    localCurrencyCode() {
      return this.findLocalCurrency?.code || 'LAK'
    },
    totalStockItems() {
      return this.stockList.reduce((sum, item) => sum + parseInt(item.cardCount || 0), 0)
    },
    totalUniqueProducts() {
      return this.stockList.length
    }
  },
  methods: {

    formatNumber(value) {
      if (value === undefined || value === null) return '0'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value)
    },

    formatCurrency(value) {
      const currencyCode = this.localCurrencyCode
      if (value === undefined || value === null) {
        return `0 ${currencyCode === 'LAK' ? '₭' : currencyCode}`
      }
      try {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currencyCode,
          minimumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
          maximumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
        }).format(value)
      } catch (error) {
        const formatted = this.formatNumber(value)
        return currencyCode === 'LAK' ? `${formatted} ₭` : `${formatted} ${currencyCode}`
      }
    },

    async fetchData() {
      console.log(`PRODUCT LIST ===>`);
      this.isloading = true
      await this.$axios
        .get(`api/card/find/count/group_by_product`)
        .then((res) => {
          this.stockList = res.data;
          console.log(`Stock entry count ${this.stockList.length}`);
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
      this.simpleItems = [
        { age: this.formatCurrency(this.grandTotalStockValue) }
      ]
    },

    // NEW METHOD: Export to Excel with Advanced Styling
    async exportToExcel() {
      this.exportLoading = true
      try {
        // Import XLSX library
        const XLSX = await import('xlsx')

        // Prepare data for Excel export
        const currencyCode = this.localCurrencyCode
        const isLAK = currencyCode === 'LAK'
        const numFmt = isLAK ? "#,##0" : "#,##0.00"

        const exportData = this.stockList.map((item, index) => ({
          'ລຳດັບ': index + 1,
          'Product ID': item.product_id || '',
          'ຊື່ສິນຄ້າ': item.product?.pro_name || '',
          'ລາຄາຂາຍ': parseFloat(item.product?.pro_price || 0),
          'ຈຳນວນສະຕັອກ': parseInt(item.cardCount || 0),
          'ຕົ້ນທຶນ ຕໍ່ ຫນ່ວຍ': item.cardCount > 0 ? parseFloat(item.totalCardValue / item.cardCount) : 0,
          'ມູນຄ່າລວມ': parseFloat(item.totalCardValue || 0),
        }))

        // Create workbook and worksheet
        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.aoa_to_sheet([]) // Start with empty sheet

        // Define styling
        const headerStyle = {
          fill: { fgColor: { rgb: "1976D2" } }, // Blue background
          font: { bold: true, color: { rgb: "FFFFFF" }, sz: 12 }, // White, bold, size 12
          alignment: { horizontal: "center", vertical: "center" },
          border: {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } }
          }
        }

        const titleStyle = {
          fill: { fgColor: { rgb: "E3F2FD" } }, // Light blue background
          font: { bold: true, sz: 16, color: { rgb: "1976D2" } },
          alignment: { horizontal: "center", vertical: "center" }
        }

        const summaryStyle = {
          fill: { fgColor: { rgb: "FFF3E0" } }, // Light orange background
          font: { bold: true, color: { rgb: "E65100" } },
          alignment: { horizontal: "center", vertical: "center" },
          border: {
            top: { style: "thick", color: { rgb: "E65100" } },
            bottom: { style: "thick", color: { rgb: "E65100" } },
            left: { style: "thick", color: { rgb: "E65100" } },
            right: { style: "thick", color: { rgb: "E65100" } }
          }
        }

        const dataStyle = {
          border: {
            top: { style: "thin", color: { rgb: "CCCCCC" } },
            bottom: { style: "thin", color: { rgb: "CCCCCC" } },
            left: { style: "thin", color: { rgb: "CCCCCC" } },
            right: { style: "thin", color: { rgb: "CCCCCC" } }
          },
          alignment: { vertical: "center" }
        }

        const numberStyle = {
          ...dataStyle,
          numFmt: numFmt,
          alignment: { horizontal: "right", vertical: "center" }
        }

        const summaryNumberStyle = {
          ...summaryStyle,
          numFmt: numFmt,
          alignment: { horizontal: "right", vertical: "center" }
        }

        // Add title (merged cell)
        const currentDate = new Date().toLocaleDateString('lo-LA')
        const title = `ລາຍງານສະຕັອກສິນຄ້າ - ${currentDate}`
        
        // Row 1: Title (merged across all columns)
        XLSX.utils.sheet_add_aoa(ws, [[title]], { origin: 'A1' })
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 6 } }] // Merge A1:G1
        ws['A1'].s = titleStyle

        // Row 2: Empty row for spacing
        
        // Row 3: Headers
        const headers = ['ລຳດັບ', 'Product ID', 'ຊື່ສິນຄ້າ', `ລາຄາຂາຍ (${currencyCode})`, 'ຈຳນວນສະຕັອກ', `ຕົ້ນທຶນ (${currencyCode})`, `ມູນຄ່າລວມ (${currencyCode})`]
        XLSX.utils.sheet_add_aoa(ws, [headers], { origin: 'A3' })
        
        // Apply header styles
        for (let col = 0; col < headers.length; col++) {
          const cellRef = XLSX.utils.encode_cell({ r: 2, c: col })
          if (!ws[cellRef]) ws[cellRef] = { v: headers[col] }
          ws[cellRef].s = headerStyle
        }

        // Add data rows starting from row 4
        exportData.forEach((row, index) => {
          const rowData = Object.values(row)
          const rowIndex = index + 3 // Starting from row 4 (0-indexed)
          
          XLSX.utils.sheet_add_aoa(ws, [rowData], { origin: `A${rowIndex + 1}` })
          
          // Apply styles to each cell in the row
          for (let col = 0; col < rowData.length; col++) {
            const cellRef = XLSX.utils.encode_cell({ r: rowIndex, c: col })
            if (!ws[cellRef]) continue
            
            // Apply appropriate style based on column type
            if (col === 0 || col === 1) { // Index and ID columns
              ws[cellRef].s = { ...dataStyle, alignment: { horizontal: "center", vertical: "center" } }
            } else if (col === 2) { // Product name
              ws[cellRef].s = dataStyle
            } else { // Number columns
              ws[cellRef].s = numberStyle
            }
          }
        })

        // Add summary row
        const summaryRowIndex = exportData.length + 3
        const totalQuantity = this.stockList.reduce((sum, item) => sum + parseInt(item.cardCount || 0), 0)
        const summaryData = ['', '', 'ລວມທັງໝົດ', '', totalQuantity, '', this.grandTotalStockValue]
        
        XLSX.utils.sheet_add_aoa(ws, [summaryData], { origin: `A${summaryRowIndex + 1}` })
        
        // Apply summary styles
        for (let col = 0; col < summaryData.length; col++) {
          const cellRef = XLSX.utils.encode_cell({ r: summaryRowIndex, c: col })
          if (!ws[cellRef]) continue
          if (col === 6) { // Grand total column
            ws[cellRef].s = summaryNumberStyle
          } else if (col === 4) { // Total quantity column (integer)
            ws[cellRef].s = { ...summaryStyle, numFmt: "#,##0", alignment: { horizontal: "right", vertical: "center" } }
          } else {
            ws[cellRef].s = summaryStyle
          }
        }

        // Set column widths
        const wscols = [
          { wch: 8 },   // ລຳດັບ
          { wch: 12 },  // Product ID
          { wch: 35 },  // ຊື່ສິນຄ້າ
          { wch: 18 },  // ລາຄາຂາຍ
          { wch: 15 },  // ຈຳນວນສະຕັອກ
          { wch: 18 },  // ຕົ້ນທຶນ ຕໍ່ ຫນ່ວຍ
          { wch: 18 },  // ມູນຄ່າລວມ
        ]
        ws['!cols'] = wscols

        // Set row heights
        ws['!rows'] = [
          { hpx: 30 }, // Title row
          { hpx: 15 }, // Empty row
          { hpx: 25 }, // Header row
          // Data rows will use default height
        ]

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, 'Stock Report')

        // Generate filename with current date and time
        const now = new Date()
        const dateStr = now.toISOString().split('T')[0]
        const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-')
        const filename = `Stock_Report_${dateStr}_${timeStr}.xlsx`

        // Save file
        XLSX.writeFile(wb, filename)

        // Show success message
        swalSuccess(this.$swal, 'ສຳເລັດ', `Export ຂໍ້ມູນສຳເລັດ: ${filename}`)

      } catch (error) {
        console.error('Export error:', error)
        swalError2(this.$swal, 'ຜິດພາດ', 'ເກີດຂໍ້ຜິດພາດໃນການ Export ຂໍ້ມູນ')
      } finally {
        this.exportLoading = false
      }
    },

    editStock(idx) {
      console.log('ID ' + idx.product.pro_id)
      console.log('NAME ' + idx.product.pro_name)
      // console.log('OBJ ' + Object.keys(idx))
      // const obj=JSON.stringify(idx)
      this.$router.push(`/admin/stock/${idx.product.pro_id}`)
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
    async rebuildStock() {
      if (!this.isloading) {
        this.isloading = true
        await this.$axios.put("/api/product/stockcount").then(response => {
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          this.fetchData()
        }).catch(error => {
          swalError2(this.$swal, "Error", error.response.data)
        })
        this.isloading = false
      }
    },
    async printReport() {
      this.isloading = true
      try {
        if (!this.$store.getters.findAllCurrency || this.$store.getters.findAllCurrency.length === 0) {
          try {
            const response = await this.$axios.get('api/currency/findAll')
            let data = response.data?.data ?? response.data
            if (Array.isArray(data)) {
                data = data.filter(c => c.isActive === true || c.isActive === 1)
            }
            await this.$store.dispatch('initCurrency', data)
          } catch (error) {
            console.error('Failed to load currencies in print:', error)
          }
        }

        const companyData = mainCompanyInfo()
        const currencyList = this.$store.getters.findAllCurrency || []
        const filters = {
          search: this.search,
          userName: this.$store.state.auth?.user?.cus_name || '-'
        }

        const htmlContent = generateInventoryValueReportHTML(
          this.stockList,
          companyData,
          currencyList,
          filters
        )
        this.openPrintWindow(htmlContent)
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Failed to generate print: ' + error)
      } finally {
        this.isloading = false
      }
    },
    openPrintWindow(htmlContent) {
      try {
        const printWindow = window.open('', '_blank', 'width=800,height=600')
        if (!printWindow) {
          swalError2(
            this.$swal,
            'Error',
            'Unable to open print window. Please check popup blocker settings.'
          )
          return
        }

        printWindow.document.open()
        printWindow.document.write(htmlContent)
        printWindow.document.close()

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print()
              setTimeout(() => {
                printWindow.close()
              }, 100)
            } catch (e) {
              console.error('Print trigger error:', e)
            }
          }, 500)
        }
      } catch (e) {
        console.error('Print window error:', e)
      }
    }
  },
}
</script>

<style scoped>
.stat-card-value {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-left: 6px solid #1976d2;
  transition: transform 0.2s ease-in-out;
}
.stat-card-value:hover {
  transform: translateY(-4px);
}
.stat-card-items {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-left: 6px solid #4caf50;
  transition: transform 0.2s ease-in-out;
}
.stat-card-items:hover {
  transform: translateY(-4px);
}
.stat-card-products {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-left: 6px solid #ff9800;
  transition: transform 0.2s ease-in-out;
}
.stat-card-products:hover {
  transform: translateY(-4px);
}
.tracking-wider {
  letter-spacing: 0.05em;
}
.rounded-xl {
  border-radius: 16px !important;
}
.border-bottom {
  border-bottom: 1px solid #e0e0e0 !important;
}
.custom-table ::v-deep th {
  font-weight: bold !important;
  color: rgba(0, 0, 0, 0.87) !important;
  background-color: #f8f9fa !important;
}
</style>