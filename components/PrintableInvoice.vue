<template>
  <div class="print-invoice-container">
    <!-- Print Button -->
    <div class="print-header" v-if="!isPrintMode">
      <v-btn 
        color="primary" 
        large 
        @click="printInvoice"
        :loading="isLoading"
      >
        <v-icon left>mdi-printer</v-icon>
        Print Invoice
      </v-btn>
      <v-btn 
        color="secondary" 
        large 
        outlined
        @click="$emit('close')"
        class="ml-3"
      >
        <v-icon left>mdi-close</v-icon>
        Close
      </v-btn>
    </div>

    <!-- Invoice Content -->
    <div class="invoice-print-content" :class="{ 'print-mode': isPrintMode }">
      <!-- Company Header -->
      <div class="company-section">
        <div class="company-info">
          <h2 v-if="companyDataV1.name">{{ companyDataV1.name }}</h2>
          <p v-if="companyDataV1.address">{{ companyDataV1.address }}</p>
          <p v-if="companyDataV1.tel">Tel: {{ companyDataV1.tel }}</p>
        </div>
        <div class="logo-section">
          <img v-if="companyLogo" :src="companyLogo" alt="Company Logo" class="company-logo" />
        </div>
      </div>

      <!-- Invoice Title -->
      <div class="invoice-header">
        <h1>ໃບແຈ້ງໜີ້ / INVOICE</h1>
      </div>

      <!-- Customer & Invoice Info -->
      <div v-if="header" class="info-section">
        <div class="customer-info">
          <h3>ຂໍ້ມູນລູກຄ້າ / Customer Information</h3>
          <p><strong>Customer ID:</strong> {{ header.client.id }}</p>
          <p><strong>Name:</strong> {{ header.client.name }}</p>
          <p><strong>Company:</strong> {{ header.client.company }}</p>
          <p><strong>Phone:</strong> {{ header.client.telephone }}</p>
          <p><strong>Address:</strong> {{ header.client.address }}</p>
        </div>
        
        <div class="invoice-info">
          <h3>ລາຍລະອຽດໃບເກັບເງິນ / Invoice Details</h3>
          <p><strong>Invoice No:</strong> {{ header.id }}</p>
          <p><strong>Date:</strong> {{ formatDate(header.bookingDate) }}</p>
          <p><strong>Location:</strong> {{ header.location?.name || 'N/A' }}</p>
          <p><strong>Prepared By:</strong> {{ header.user?.cus_name || 'N/A' }}</p>
          <p><strong>Payment Method:</strong> {{ header.payment?.payment_name || 'N/A' }}</p>
          <p><strong>Currency:</strong> {{ header.currency?.code || 'LAK' }}</p>
        </div>
      </div>

      <!-- Products Table -->
      <div v-if="header && header.lines" class="products-section">
        <h3>ລາຍການສິນຄ້າ / Product Details</h3>
        
        <table class="products-table">
          <thead>
            <tr>
              <th>ລດ / No.</th>
              <th>ລາຍລະອຽດ / Description</th>
              <th>ຈຳນວນ / Qty</th>
              <th>ຫົວໜ່ວຍ / Unit</th>
              <th>ລາຄາ / Unit Price</th>
              <th>ສ່ວນຫຼຸດ / Discount</th>
              <th>ຈຳນວນເງິນ / Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(line, index) in header.lines" :key="line.id">
              <td>{{ index + 1 }}</td>
              <td>
                <div><strong>{{ line.product?.pro_name || 'Unknown Product' }}</strong></div>
                <div class="product-id">ID: {{ line.product?.pro_id || line.productId }}</div>
                <div v-if="line.isGift" class="gift-label">🎁 ຂອງຂວັນ / Gift</div>
              </td>
              <td>{{ formatNumber(line.quantity) }}</td>
              <td>{{ line.unit?.name || 'ຊີ້ນ' }}</td>
              <td>{{ formatNumber(line.price) }}</td>
              <td>{{ formatNumber(line.discount) }}</td>
              <td><strong>{{ formatNumber(line.total) }}</strong></td>
            </tr>
          </tbody>
        </table>

        <!-- Summary -->
        <div class="summary-section">
          <div class="summary-row">
            <span>ລວມຍ່ອຍ / Subtotal:</span>
            <span>{{ formatNumber(header.total + totalDiscount) }}</span>
          </div>
          <div class="summary-row">
            <span>ສ່ວນຫຼຸດລວມ / Total Discount:</span>
            <span>-{{ formatNumber(totalDiscount) }}</span>
          </div>
          <div class="total-row">
            <span><strong>ລວມທັງໝົດ / TOTAL:</strong></span>
            <span><strong>{{ formatNumber(header.total) }} {{ header.currency?.code || 'LAK' }}</strong></span>
          </div>
        </div>
      </div>

      <!-- Payment Info -->
      <div v-if="companyDataV1.bank" class="payment-section">
        <h3>ຂໍ້ມູນການຊຳລະເງິນ / Payment Information</h3>
        <p><strong>Bank Name:</strong> {{ companyDataV1.bank }}</p>
        <p><strong>Account Name:</strong> {{ companyDataV1.accountName }}</p>
        <div v-if="companyDataV1.accounts">
          <p><strong>Account Numbers:</strong></p>
          <ul>
            <li v-for="(account, index) in (companyDataV1.accounts || '').split('|').filter(a => a)" :key="index">
              {{ account }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Terms & Signature -->
      <div class="footer-section">
        <div class="terms">
          <h4>ເງື່ອນໄຂ / Terms & Conditions</h4>
          <ul>
            <li>ໃບແຈ້ງໜີ້ນີ້ມີໄວຍາວະ 30 ມື້</li>
            <li>This quotation is valid for 30 days</li>
            <li>ການສົ່ງສິນຄ້າໃນໄລຍະ 15 ມື້ຫຼັງຈາກການຢືນຢັນ</li>
            <li>Delivery within 15 days after order confirmation</li>
          </ul>
        </div>
        
        <div class="signatures">
          <div class="signature-box">
            <p><strong>ລາຍເຊັນລູກຄ້າ / Customer Signature</strong></p>
            <div class="signature-line"></div>
            <p>Name/Date/Company Stamp</p>
          </div>
          
          <div class="signature-box">
            <p><strong>ລາຍເຊັນຜູ້ອະນຸມັດ / Authorized By</strong></p>
            <div class="signature-line"></div>
            <p>Name/Date/Position</p>
          </div>
        </div>
      </div>

      <!-- Thank you note -->
      <div class="thank-you">
        <p>ຂອບໃຈທີ່ເລືອກໃຊ້ບໍລິການຂອງພວກເຮົາ / Thank you for your business</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getFormatNum } from '~/common'
import { mainCompanyInfo, mainCompanyInfoV1 } from '~/common/api'

export default {
  name: 'PrintableInvoice',
  
  props: {
    invoiceId: {
      type: [String, Number],
      required: true
    }
  },

  data() {
    return {
      header: null,
      isLoading: false,
      isPrintMode: false,
    }
  },

  computed: {
    ...mapGetters(['findAllCompany']),
    
    totalDiscount() {
      if (!this.header || !this.header.lines) return 0;
      
      let totalDiscount = 0
      for (const line of this.header.lines) {
        totalDiscount += line.discount || 0
      }
      totalDiscount += this.header.discount || 0
      return totalDiscount
    },
    
    companyData() {
      return mainCompanyInfo()
    },
    
    companyDataV1() {
      return mainCompanyInfoV1(this.$store)
    },

    companyLogo() {
      const company = this.companyData
      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || ''
        return `${baseUrl}/${company.apiData.profile_image_path}`
      }
      if (company.ticketLogo) {
        try {
          return require(`~/assets/image/${company.ticketLogo}`)
        } catch (error) {
          console.warn('Static logo not found:', error)
        }
      }
      return '/static/images/default-logo.png'
    },
  },
  
  async created() {
    await this.loadInvoiceData()
  },

  methods: {
    ...mapActions(['initiateDataCompany']),
    
    async loadInvoiceData() {
      this.isLoading = true
      try {
        await this.initiateDataCompany(this.$axios)
        const response = await this.$axios.get(`api/sale/find/${this.invoiceId}`)
        this.header = response.data
        console.log('Invoice data loaded:', response.data)
      } catch (error) {
        console.error('Error loading invoice data:', error)
      } finally {
        this.isLoading = false
      }
    },
    
    printInvoice() {
      this.isPrintMode = true
      this.$nextTick(() => {
        window.print()
        this.isPrintMode = false
      })
    },
    
    formatNumber(val) {
      return getFormatNum(val)
    },
    
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });
      } catch (error) {
        return dateString;
      }
    },
  },
}
</script>

<style scoped>
/* Global styles */
* {
  font-family: 'Noto Sans Lao', sans-serif;
}

.print-invoice-container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.print-header {
  margin-bottom: 30px;
  text-align: center;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.invoice-print-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Company Section */
.company-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 3px solid #246ab2;
}

.company-info h2 {
  color: #246ab2;
  font-size: 24px;
  margin: 0 0 10px 0;
  font-weight: bold;
}

.company-info p {
  margin: 5px 0;
  color: #555;
}

.company-logo {
  max-width: 150px;
  max-height: 80px;
  border-radius: 8px;
}

/* Invoice Header */
.invoice-header {
  text-align: center;
  margin: 30px 0;
}

.invoice-header h1 {
  color: #246ab2;
  font-size: 32px;
  margin: 0;
  font-weight: bold;
}

/* Info Section */
.info-section {
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
}

.customer-info, .invoice-info {
  flex: 1;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.customer-info h3, .invoice-info h3 {
  color: #246ab2;
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 2px solid #246ab2;
  padding-bottom: 5px;
}

.customer-info p, .invoice-info p {
  margin: 8px 0;
  line-height: 1.5;
}

/* Products Section */
.products-section {
  margin-bottom: 30px;
}

.products-section h3 {
  color: #246ab2;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 2px solid #246ab2;
  padding-bottom: 8px;
}

.products-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.products-table th {
  background: #246ab2;
  color: white;
  padding: 12px 8px;
  text-align: center;
  font-weight: bold;
  border: 1px solid #246ab2;
}

.products-table td {
  padding: 10px 8px;
  border: 1px solid #ddd;
  vertical-align: top;
}

.products-table tr:nth-child(even) {
  background: #f9f9f9;
}

.product-id {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

.gift-label {
  color: #ff6b35;
  font-weight: bold;
  font-size: 12px;
  margin-top: 4px;
}

/* Summary Section */
.summary-section {
  width: 300px;
  margin-left: auto;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}

.total-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  margin-top: 10px;
  border-top: 2px solid #246ab2;
  font-size: 18px;
  color: #246ab2;
}

/* Payment Section */
.payment-section {
  margin-bottom: 30px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.payment-section h3 {
  color: #246ab2;
  margin-bottom: 15px;
  font-weight: bold;
}

.payment-section ul {
  margin: 10px 0 0 20px;
}

/* Footer Section */
.footer-section {
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
}

.terms {
  flex: 1;
}

.terms h4 {
  color: #246ab2;
  margin-bottom: 10px;
}

.terms ul {
  margin: 0;
  padding-left: 20px;
}

.terms li {
  margin: 5px 0;
  font-size: 12px;
}

.signatures {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.signature-box {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.signature-line {
  height: 50px;
  border-bottom: 1px solid #000;
  margin: 15px 0;
}

.signature-box p {
  margin: 5px 0;
  font-size: 12px;
}

/* Thank you */
.thank-you {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  color: #246ab2;
  font-weight: bold;
}

/* Print Styles */
@media print {
  .print-header {
    display: none !important;
  }
  
  .invoice-print-content {
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
  
  .print-invoice-container {
    padding: 0;
    max-width: none;
  }
  
  @page {
    margin: 1cm;
    size: A4;
  }
  
  /* Ensure proper page breaks */
  .products-table {
    page-break-inside: auto;
  }
  
  .products-table tr {
    page-break-inside: avoid;
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .company-section {
    flex-direction: column;
    text-align: center;
  }
  
  .info-section {
    flex-direction: column;
    gap: 20px;
  }
  
  .footer-section {
    flex-direction: column;
    gap: 20px;
  }
  
  .products-table {
    font-size: 12px;
  }
  
  .products-table th,
  .products-table td {
    padding: 6px 4px;
  }
}
</style>