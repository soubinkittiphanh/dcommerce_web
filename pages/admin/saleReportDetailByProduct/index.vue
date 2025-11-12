<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການບິນຂາຍ</h3>
      </v-chip>
      <!-- <v-spacer></v-spacer> -->
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="W6KiQWtiqBM">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="dialogOrderDetail" max-width="1024">
      <OrderDetailPosCRUD @reload="loadData()
      dialogOrderDetail = false" :is-quotation="false" :key="componentKey" :is-update="viewTransaction"
        :headerId="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPosCRUD>
    </v-dialog>


    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :key="componentCancelFormKey" @close-dialog="cancelForm = false"
        @reload="cancelForm = false, loadData()"></cancel-ticket-form>
    </v-dialog>
    <div>


      <v-card>
        <v-card-title>
          <v-layout row wrap>
            <v-col cols="6">
              <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y
                max-width="290px" min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                    prepend-icon="mdi-calendar" v-bind="attrs" @blur="date = parseDate(dateFormatted)"
                    v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
              </v-menu>

              <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
                max-width="290px" min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                    prepend-icon="mdi-calendar" v-bind="attrs" @blur="date2 = parseDate(dateFormatted2)"
                    v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
              </v-menu>

            </v-col>
            <v-col cols="6">
              <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
              <v-autocomplete item-text="pro_name" item-value="id" :items="productList" label="ສິນຄ້າ*"
                v-model="creteria.productId"></v-autocomplete>
            </v-col>
            <v-col cols="6" class="text-left">
              <v-btn size="large" variant="outlined" @click="createSale" class="primary" rounded>
                <span class="mdi mdi-plus"></span>Create
              </v-btn>
              <v-btn size="large" variant="outlined" @click="exportToExcel" class="primary" rounded>
                <span class="mdi mdi-microsoft-excel"></span>Generate excel file
              </v-btn>
              <!-- NEW AUDIT EXPORT BUTTON -->
              <v-btn size="large" variant="outlined" @click="exportAuditReport" class="success" rounded>
                <span class="mdi mdi-file-chart"></span>Audit Report
              </v-btn>
              <!-- NEW QUANTITY AUDIT EXPORT BUTTON -->
              <v-btn size="large" variant="outlined" @click="exportSimplePDFReport" class="warning" rounded>
                <span class="mdi mdi-file-pdf"></span>PDF Summary
              </v-btn>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
                <span class="mdi mdi-cloud-download"></span>
                ດຶງລາຍງານ
              </v-btn>
            </v-col>
          </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-layout row wrap>
            <v-row>
              <v-col cols="6" lg="6">
                <order-sumary-card-pos :showTotal="true"
                  :gross="numberWithCommas(totalSaleRaw - (+this.unpaidCodOrder.saleRawNumber))" :orderDetail="{
        'title': 'ຍອດບິນ',
        'amount': numberWithCommas(activeOrderHeaderList.length),
        'sale': numberWithCommas(totalSale - totalDiscount),
        // 'discount': getFormatNum(totalDiscount),
        // 'gross': getFormatNum(totalSale.replaceAll(',', '') - totalDiscount.replaceAll(',', ''))
        // 'gross': getFormatNum(totalSale - totalDiscount)

      }">

                </order-sumary-card-pos>
              </v-col>
              <!-- <v-col cols="6" lg="6">
              <order-sumary-card i :orderDetail="this.unpaidCodOrder">

              </order-sumary-card>
            </v-col> -->
            </v-row>
          </v-layout>
        </v-card-text>

        <!-- <v-divider></v-divider> -->



        <v-data-table v-if="activeOrderHeaderList" :headers="headers" :search="search" :items="activeOrderHeaderList">
          <!-- <template v-slot:[`item.bookingDate`]="{ item }">
            {{ item.bookingDate.split('T')[0] }}
            <h6 :style="{ 'color': countDay(item.bookingDate.split('T')[0]) > item.client.credit ? 'red' : 'green' }">
              {{ countDay(item.bookingDate.split('T')[0]) }}
            </h6>
          </template> -->
          <!-- <template v-slot:[`item.client.credit`]="{ item }">
            <v-chip
              v-if="new Date(dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) < new Date()"
              class="ma-2" color="red" text-color="white">
              {{ dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0] }}
            </v-chip>
            <v-chip v-else class="ma-2" color="green" text-color="white">
              {{ dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0] }}
            </v-chip>
          </template> -->
          <!-- <template v-slot:[`item.dynamic_customer`]="{ item }">
            <v-avatar :color="item.dynamic_customer ? 'green' : 'red'" size="10">
            </v-avatar>
          </template> -->
          <template v-slot:[`item.totalDiscount`]="{ item }">
            {{ numberWithCommas(item.totalDiscount) }}
          </template>
          <template v-slot:[`item.totalAmount`]="{ item }">
            {{ numberWithCommas(item.totalAmount) }}
          </template>
          <template v-slot:[`item.totalPrice`]="{ item }">
            {{ numberWithCommas(item.totalPrice / item.totalQTY) }}
          </template>

        </v-data-table>

      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common/index'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
export default {
  components: { OrderDetailPos, OrderSumaryCardPos, OrderDetailPosCRUD },
  middleware: 'auths',
  data() {
    return {
      guidelineDialog: false,
      viewTransaction: false,
      whatsappContactLink: '',
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrder: 0,
      wallet: false,
      isedit: false,
      dialog: false,
      isloading: false,
      valid: true,
      name: '',
      search: '',
      orderHeaderList: [],
      loadDataNoCancelOrder: [],
      codPaid: [],
      componentCancelFormKey: 1,
      cancelForm: false,
      OrderIdSelected: '',

      productList: [],
      creteria: {
        productId: -1,
      },
      headers: [

        // {
        //   text: 'ເລກອໍເດີ',
        //   align: 'center',
        //   value: 'header_id',
        //   sortable: true,
        // },
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'header.bookingDate',
          sortable: true,
        },
        {
          text: 'ສິນຄ້າ',
          align: 'center',
          value: 'product.pro_name',
          sortable: true,
        },
        {
          text: 'ຈ/ນ',
          align: 'center',
          value: 'totalQTY',
          sortable: true,
        },
        {
          text: 'ລາຄາ',
          align: 'center',
          value: 'totalPrice',
          sortable: true,
        },
        {
          text: 'ສ່ວນຫຼຸດ',
          align: 'center',
          value: 'totalDiscount',
          sortable: true,
        },
        {
          text: 'ລວມ',
          align: 'center',
          value: 'totalAmount',
          sortable: true,
        },
        // {
        //   text: 'ຜູ້ຂາຍ',
        //   align: 'center',
        //   value: 'header.user.cus_name',
        //   sortable: true,
        // },
        // {
        //   text: 'ອັດຕາແລກປ່ຽນ',
        //   align: 'center',
        //   value: 'exchangeRate',
        //   sortable: true,
        // },
        // {
        //   text: 'ສ່ວນຫລຸດ',
        //   align: 'end',
        //   value: 'discount',
        //   sortable: true,
        // },

        // {
        //   text: 'ລວມ',
        //   align: 'end',
        //   value: 'total',
        //   sortable: false,
        // },
        // {
        //   text: 'ຜູ້ລົງທຸລະກຳ',
        //   align: 'end',
        //   value: 'user.cus_name',
        //   sortable: false,
        // },
        // {
        //   text: 'ເວລາລົງ',
        //   align: 'end',
        //   value: 'createdAt',
        //   sortable: false,
        // },
        // {
        //   text: 'View/Update',
        //   align: 'end',
        //   value: 'id',
        //   sortable: false,
        // },
      ],
      // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        // new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        //   .toISOString()
        //   .substr(0, 10)
        getFirstDayOfMonth()
      ),
      dateFormatted2: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }
  },
  async created() {
    await this.loadData()
    await this.loadProduct()
  },
  watch: {
    isedit(v) {
      if (!v) this.form_data.cus_id = '1XXX'
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.loadData()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.loadData()
    },
  },
  computed: {
    ...mapGetters(['currentSelectedLocation','findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),
    activeOrderHeaderList() {
      return this.orderHeaderList.filter(el => el['header']['isActive'] == true)
    },
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    currencyList() {
      return this.findAllCurrency
    },
    totalSale() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += el.totalAmount
      })
      return total
    },
    totalSaleRaw() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        console.log("====>", el.totalAmount);
        total += parseInt(el.totalAmount)
      })
      console.log('Price total: ' + total)
      return total
      // return total
    },
    user() {
      return this.$auth.user || ''
    },
    totalDiscount() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.totalDiscount)
      })
      return total
      // return total
    },

    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach(element => {
        if (element.paymentStatus === 'PENDING' && element.payment.includes('COD')) {
          console.log("Concept applied");
          txnList.push(element)
        }
      });
      const totalPrice = txnList.reduce((total, item) => {
        return total + item.totalAmount;
      }, 0);
      const totalDiscount = txnList.reduce((total, item) => {
        return total + item.discount;
      }, 0);

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice;
      orderDetail.sale = this.numberWithCommas(totalPrice)
      orderDetail.discount = this.numberWithCommas(totalDiscount)
      orderDetail.gross = this.numberWithCommas(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail;
    },
  },

  methods: {
    exportToExcel() {
      let messageLineExport = [];
      for (const iterator of this.activeOrderHeaderList) {
        const product = iterator['product']['pro_name'];
        iterator['productName'] = product;
        iterator['totalQTY'] = iterator['totalQTY'];
        iterator['price'] = iterator['totalPrice'] / iterator['totalQTY'];
        iterator['totalDiscount'] = iterator['totalDiscount'];
        iterator['totalAmount'] = iterator['totalAmount'];
        const newRow = {
          'productName': iterator['productName'],
          'totalQTY': iterator['totalQTY'],
          'price': iterator['price'],
          'totalDiscount': iterator['totalDiscount'],
          'totalAmount': iterator['totalAmount'],
        }
        messageLineExport.push(newRow);
      }
      const worksheet = this.$xlsx.utils.json_to_sheet(messageLineExport);
      const workbook = this.$xlsx.utils.book_new();
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      this.$xlsx.writeFile(workbook, 'data.xlsx');
    },
    
    // SIMPLE PDF EXPORT METHOD
    exportSimplePDFReport() {
      try {
        // Calculate simple summary data
        const totalTickets = this.activeOrderHeaderList.length;
        const totalItems = this.activeOrderHeaderList.reduce((sum, item) => sum + (parseInt(item.totalQTY) || 0), 0);
        
        // Count by product, category, and payment
        const productCount = {};
        const categoryCount = {};
        const paymentCount = {};
        
        this.activeOrderHeaderList.forEach((item) => {
          // Product counting
          const productName = item.product?.pro_name || 'Other';
          productCount[productName] = (productCount[productName] || 0) + 1;
          
          // Category counting (using the new category data structure)
          const categoryName = item.product?.category?.categ_name || 'Unknown Category';
          categoryCount[categoryName] = (categoryCount[categoryName] || 0) + 1;
          
          // Payment counting  
          const payment = item.header?.payment?.payment_name || item.paymentStatus || 'Cash';
          paymentCount[payment] = (paymentCount[payment] || 0) + 1;
        });

        // Create simple HTML for PDF
        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px; }
            .summary-box { border: 1px solid #ddd; padding: 15px; margin: 10px 0; background-color: #f9f9f9; }
            .summary-title { font-weight: bold; font-size: 14px; color: #333; margin-bottom: 10px; }
            .summary-item { margin: 5px 0; }
            .section { margin: 20px 0; }
            .footer { text-align: center; font-size: 12px; color: #666; margin-top: 30px; }
            table { width: 100%; border-collapse: collapse; margin: 10px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f0f0f0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>AUDIT SUMMARY REPORT</h2>
            <p>Period: ${this.dateFormatted} - ${this.dateFormatted2}</p>
            <p>Generated: ${new Date().toLocaleDateString()}</p>
          </div>

          <div class="summary-box">
            <div class="summary-title">📊 OVERVIEW</div>
            <div class="summary-item">Total Tickets: ${totalTickets}</div>
            <div class="summary-item">Total Items Sold: ${totalItems}</div>
            <div class="summary-item">Average Items per Ticket: ${totalTickets > 0 ? Math.round((totalItems / totalTickets) * 100) / 100 : 0}</div>
          </div>

          <div class="section">
            <h3>📂 TICKETS BY CATEGORY</h3>
            <table>
              <tr><th>Category</th><th>Tickets</th></tr>
              ${Object.entries(categoryCount)
                .sort(([,a], [,b]) => b - a)
                .map(([category, count]) => `<tr><td>${category}</td><td>${count}</td></tr>`)
                .join('')}
            </table>
          </div>

          <div class="section">
            <h3>📦 TICKETS BY PRODUCT</h3>
            <table>
              <tr><th>Product</th><th>Tickets</th></tr>
              ${Object.entries(productCount)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 10) // Top 10 only
                .map(([product, count]) => `<tr><td>${product}</td><td>${count}</td></tr>`)
                .join('')}
            </table>
          </div>

          <div class="section">
            <h3>💳 TICKETS BY PAYMENT</h3>
            <table>
              <tr><th>Payment Method</th><th>Tickets</th></tr>
              ${Object.entries(paymentCount)
                .map(([payment, count]) => `<tr><td>${payment}</td><td>${count}</td></tr>`)
                .join('')}
            </table>
          </div>

          <div class="footer">
            <p><strong>NOTE:</strong> This report contains only operational data - no financial amounts</p>
            <p>Generated for external audit purposes</p>
          </div>
        </body>
        </html>`;

        // Create PDF using html2pdf (you'll need to install this library)
        // Alternative: Use jsPDF with simple text
        this.generatePDFFromHTML(htmlContent);
        
      } catch (error) {
        console.error('Error generating PDF report:', error);
        this.$toast.error('Error generating PDF report: ' + error.message);
      }
    },

    generatePDFFromHTML(htmlContent) {
      // Method 1: If you have html2pdf library installed
      if (typeof html2pdf !== 'undefined') {
        const opt = {
          margin: 1,
          filename: `audit_summary_${this.date}_to_${this.date2}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(htmlContent).set(opt).save();
      } 
      // Method 2: Simple jsPDF fallback
      else if (typeof jsPDF !== 'undefined') {
        const doc = new jsPDF();
        
        // Simple text-based PDF
        doc.setFontSize(16);
        doc.text('AUDIT SUMMARY REPORT', 20, 20);
        
        doc.setFontSize(12);
        doc.text(`Period: ${this.dateFormatted} - ${this.dateFormatted2}`, 20, 35);
        doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 45);
        
        doc.text('OVERVIEW', 20, 65);
        doc.text(`Total Tickets: ${this.activeOrderHeaderList.length}`, 20, 75);
        doc.text(`Total Items: ${this.activeOrderHeaderList.reduce((sum, item) => sum + (parseInt(item.totalQTY) || 0), 0)}`, 20, 85);
        
        // Add more content as needed
        doc.save(`audit_summary_${this.date}_to_${this.date2}.pdf`);
      }
      // Method 3: Browser print fallback
      else {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        printWindow.print();
      }
      
      this.$toast.success('PDF report generated successfully!');
    },
    
    // NEW AUDIT EXPORT METHOD
    exportAuditReport() {
      try {
        // Group tickets by category
        const categoryStats = {};
        const paymentStats = {};
        
        this.activeOrderHeaderList.forEach((item) => {
          // Count by product category (you might need to adjust based on your data structure)
          const category = item.product?.category || item.product?.pro_name || 'Unknown';
          if (!categoryStats[category]) {
            categoryStats[category] = 0;
          }
          categoryStats[category] += 1; // Count tickets, not amounts
          
          // Count by payment type (adjust based on your payment data structure)
          const paymentType = item.header?.paymentMethod || item.paymentStatus || 'Unknown';
          if (!paymentStats[paymentType]) {
            paymentStats[paymentType] = 0;
          }
          paymentStats[paymentType] += 1; // Count tickets, not amounts
        });

        // Create audit report data
        const auditData = [];
        
        // Add header info
        auditData.push({
          'Report Type': 'External Audit Report',
          'Period': `${this.dateFormatted} - ${this.dateFormatted2}`,
          'Generated On': new Date().toLocaleDateString(),
          'Generated By': this.user?.name || 'System',
          'Location': this.currentSelectedLocation?.name || 'All Locations'
        });
        
        // Add empty row
        auditData.push({});
        
        // Add category section header
        auditData.push({
          'Report Type': '=== TICKETS BY CATEGORY ===',
        });
        
        // Add category statistics
        Object.entries(categoryStats).forEach(([category, count]) => {
          auditData.push({
            'Category': category,
            'Ticket Count': count,
          });
        });
        
        // Add empty row
        auditData.push({});
        
        // Add payment section header
        auditData.push({
          'Report Type': '=== TICKETS BY PAYMENT TYPE ===',
        });
        
        // Add payment statistics
        Object.entries(paymentStats).forEach(([paymentType, count]) => {
          auditData.push({
            'Payment Type': paymentType,
            'Ticket Count': count,
          });
        });
        
        // Add empty row and summary
        auditData.push({});
        auditData.push({
          'Report Type': '=== SUMMARY ===',
          'Total Tickets': this.activeOrderHeaderList.length,
          'Total Categories': Object.keys(categoryStats).length,
          'Total Payment Types': Object.keys(paymentStats).length,
        });

        // Create Excel file
        const worksheet = this.$xlsx.utils.json_to_sheet(auditData);
        const workbook = this.$xlsx.utils.book_new();
        this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Audit Report');
        
        // Generate filename with date range
        const filename = `audit_report_${this.date}_to_${this.date2}.xlsx`;
        this.$xlsx.writeFile(workbook, filename);
        
        // Show success message
        this.$toast.success('Audit report exported successfully!');
        
      } catch (error) {
        console.error('Error generating audit report:', error);
        this.$toast.error('Error generating audit report: ' + error.message);
      }
    },
    
    createSale() {
      this.componentKey += 1;
      this.selectedOrder = 0
      this.viewTransaction = false;
      this.dialogOrderDetail = true;
    },
    countDay(startDate) {
      return dayCount(startDate)
    },
    dueDate(startDate, day) {
      console.log("DATE ", startDate, " to ", day);
      return getNextDate(startDate, day)
    },
    numberWithCommas(value) {
      return getFormatNum(value)
    },

    // getFormatNum(val) {
    //   return new Intl.NumberFormat().format(val)
    // },
    editItem(item) {
      this.componentKey += 1;
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail;
    },
    viewItem(item) {
      this.componentKey += 1;
      this.viewTransaction = true
      this.selectedOrder = item.id
      this.dialogOrderDetail = true;
    },
    cancelItem(payload) {
      console.log("Order id", payload.orderId);
      this.componentCancelFormKey += 1;
      this.OrderIdSelected = payload.orderId
      // this.orderLockingSessionId = payload.lockingSessionId;
      this.cancelForm = true;
    },
    handleEvent() {
      this.dialogOrderDetail = false;
    },
    async loadData() {
      this.isloading = true
      const date = {
        startDate: this.date,
        endDate: this.date2,
        productId: this.creteria.productId,
        locationId: this.currentSelectedLocation['id'] || 1,
      }
      let apiLine = 'api/sale/findByDate'
      if (date.productId) {
        apiLine = 'api/sale/findByDateAndProduct'
      }

      try {
        const response = await this.$axios.get(apiLine, { params: { date } })
        this.orderHeaderList = response.data
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could no load data ' + error['text'])
      }

      this.isloading = false
    },
    async loadProduct() {
      this.isloading = true
      let apiLine = 'api/product/find'
      try {
        const response = await this.$axios.get(apiLine);
        this.productList = response.data
        this.productList.push({ id: -1, 'pro_name': 'ທັງຫມົດ' })
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could no load data ' + JSON.stringify(error))
      }
      this.isloading = false
    },
    formatDate(date) {
      if (!date) return null
      console.log("DATE FORMAT METHOD1: " + date);
      const formattedDate = this.formatDateToISO(date);
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      console.log("DATE PARSE METHOD1: " + date);
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date);
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Months are 0-indexed
      const day = `${date.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}
</style>