<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການສິນຄ້າ ພ້ອມມູນຄ່າສຕັອກ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>
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

    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="6" sm="6" md="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn class="primary mr-3" size="large" variant="outlined" @click="exportToExcel" rounded :loading="exportLoading">
              <span class="mdi mdi-file-excel"></span>
              Export Excel
            </v-btn>
            <v-btn class="primary" size="large" variant="outlined" @click="rebuildStock" rounded>
              <span class="mdi mdi-update"></span>
              Rebuild stock
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-data-table v-if="loaddata" :headers="headers" :search="search" :items="stockList" :items-per-page="pageLine">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title><v-data-table :headers="simpleHeaders" :items="simpleItems"></v-data-table></v-toolbar-title>
            <!-- <v-toolbar-title>ມູນຄ່າສິນຄ້າຄ້າງສະຕັອກ: {{ formatNumber(grandTotalStockValue) }}</v-toolbar-title> -->
            <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
            <v-spacer></v-spacer>
            <!-- <v-btn size="large" variant="outlined" @click="productFormCreate = true" class="primary" rounded>
              <span class="mdi mdi-note-plus-outline"></span>
              ສ້າງສິນຄ້າໃຫມ່
            </v-btn> -->


          </v-toolbar>
        </template>
        <!-- <template v-slot:[`item.functionStockView`]="{ item }">
          <v-btn color="primary" text @click="editStock(item)
          wallet = true
            ">
            <i class="fa fa-eye"></i>
          </v-btn>
        </template> -->
        <template v-slot:[`item.product.pro_price`]="{ item }">
          {{ formatNumber(item.product.pro_price) }}
        </template>
        <template v-slot:[`item.pro_price`]="{ item }">
          {{ formatNumber(item.pro_price) }}
        </template>
        <template v-slot:[`item.cost`]="{ item }">
          {{ formatNumber(item.totalCardValue / item.cardCount) }}
        </template>
        <template v-slot:[`item.totalCardValue`]="{ item }">
          {{ formatNumber(item.totalCardValue) }}
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
          text: 'recid',
          align: 'center',
          value: 'product_id',
        },
        {
          text: 'ຊື່ສິນຄ້າ',
          align: 'center',
          value: 'product.pro_name',
        },
        { text: 'ລາຄາ', align: 'right', value: 'product.pro_price' },
        { text: 'ຈຳນວນ', align: 'right', value: 'cardCount' },
        { text: 'ຕົ້ນທຶນ', align: 'right', value: 'cost' },
        { text: 'ມູນຄ່າລວມ', align: 'right', value: 'totalCardValue' },
        // {
        //   text: 'ເບິ່ງສະຕັອກ',
        //   align: 'center',
        //   value: 'functionStockView',
        //   sortable: false,
        // },
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
    ...mapGetters(['currentSelectedLocation', 'findAllLocation']),
    grandTotalStockValue() {
      const totalStockValue = this.stockList.reduce((total, item) => {
        return total + item.totalCardValue;
      }, 0);
      return totalStockValue;
    }
  },
  methods: {

    formatNumber(value) {
      return getFormatNum(value)
    },

    async fetchData() {
      console.log(`PRODUCT LIST ===>`);
      this.isloading = true
      // https://nodejsclusters-124154-0.cloudclusters.net/product_f
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
      const simpleHead = { age: this.formatNumber(this.grandTotalStockValue), };
      this.simpleItems.push(simpleHead)
    },

    // NEW METHOD: Export to Excel with Advanced Styling
    async exportToExcel() {
      this.exportLoading = true
      try {
        // Import XLSX library
        const XLSX = await import('xlsx')

        // Prepare data for Excel export
        const exportData = this.stockList.map((item, index) => ({
          'ລຳດັບ': index + 1,
          'Product ID': item.product_id || '',
          'ຊື່ສິນຄ້າ': item.product?.pro_name || '',
          'ລາຄາຂາຍ': parseFloat(item.product?.pro_price || 0),
          'ຈຳນວນສະຕັອກ': parseInt(item.cardCount || 0),
          'ຕົ້ນທຶນ ຕໍ່ ຫນ່ວຍ': parseFloat(item.totalCardValue / item.cardCount || 0),
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
          numFmt: "#,##0.00", // Number format with thousand separators
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
        const headers = ['ລຳດັບ', 'Product ID', 'ຊື່ສິນຄ້າ', 'ລາຄາຂາຍ', 'ຈຳນວນສະຕັອກ', 'ຕົ້ນທຶນ ຕໍ່ ຫນ່ວຍ', 'ມູນຄ່າລວມ']
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
          ws[cellRef].s = summaryStyle
        }

        // Set column widths
        const wscols = [
          { wch: 8 },   // ລຳດັບ
          { wch: 12 },  // Product ID
          { wch: 35 },  // ຊື່ສິນຄ້າ
          { wch: 15 },  // ລາຄາຂາຍ
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
    }
  },
}
</script>