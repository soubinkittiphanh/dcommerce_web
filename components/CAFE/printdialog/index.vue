<template>
  <div v-if="show" class="dialog-overlay" @click="closeDialog">
    <div class="print-dialog-content" @click.stop>
      <div class="print-dialog-header">
        <h2>Print Ticket</h2>
        <button @click="closeDialog" class="close-btn">×</button>
      </div>

      <div class="print-preview" v-if="ticket">
        <!-- ULTRA COMPACT HEADER for 85mm -->
        <div class="print-header">
          <div class="restaurant-info">
            <h1 class="restaurant-name">{{ companyInfo.name }}</h1>
            <div class="restaurant-address" v-html="companyInfo.address"></div>
            <div class="contact-line" v-if="companyInfo.tel || companyInfo.email">
              {{ companyInfo.tel }}<span v-if="companyInfo.tel && companyInfo.email"> | </span>{{ companyInfo.email }}
            </div>
          </div>
        </div>

        <!-- ULTRA COMPACT TICKET INFO for 85mm -->
        <div class="print-ticket-info">
          <div class="ticket-basic">
            <div class="detail-row">
              <span class="detail-label">#:</span>
              <span class="detail-value">{{ ticket.ticketNumber || ticket.id }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date:</span>
              <span class="detail-value">{{ formatPrintDate(ticket.createdAt) }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">{{ formatPrintTime(ticket.createdAt) }}</span>
            </div>
          </div>
          
          <div class="customer-basic">
            <div class="detail-row">
              <span class="detail-label">Customer:</span>
              <span class="detail-value">{{ ticket.client?.name || 'Walk-in' }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Table:</span>
              <span class="detail-value">{{ ticket.table?.number || ticket.table?.name || '-' }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Status:</span>
              <span class="detail-value">{{ formatStatus(ticket.status) }}</span>
            </div>
          </div>
        </div>

        <div class="print-divider"></div>

        <!-- ULTRA COMPACT ITEMS for 85mm -->
        <div class="print-items">
          <div class="section-title">ITEMS</div>
          <div v-if="ticket.ticketLines && ticket.ticketLines.length > 0">
            <div v-for="line in ticket.ticketLines" :key="line.id" class="print-item">
              <div class="item-main">
                <span class="item-name">{{ getItemName(line) }}</span>
                <span class="item-price">{{ formatPrice(getItemTotal(line)) }}</span>
              </div>
              <div class="item-details">
                <span class="item-qty">{{ line.quantity }}x{{ formatPrice(line.unitPrice || line.pro_price) }}</span>
              </div>
              
              <!-- Ultra compact promotion -->
              <div v-if="line.is_promotion_item && line.promotion_note" class="item-promotion">
                <span>🏷️{{ line.promotion_note }}</span>
                <span v-if="line.discount_amount > 0">-{{ formatPrice(line.discount_amount) }}</span>
              </div>
              
              <!-- Ultra compact notes -->
              <div v-if="line.notes" class="item-notes">{{ line.notes }}</div>
            </div>
          </div>
          <div v-else class="no-items-print">
            <p>No items in this order</p>
          </div>
        </div>

        <div class="print-divider"></div>

        <!-- ULTRA COMPACT SUMMARY for 85mm -->
        <div class="print-summary">
          <div class="summary-line">
            <span>Subtotal:</span>
            <span>{{ formatPrice(ticket.subtotal) }}</span>
          </div>
          
          <div v-if="hasPromotionDiscount" class="summary-line promotion-line">
            <span>Discount:</span>
            <span>-{{ formatPrice(ticket.promotionDiscount || 0) }}</span>
          </div>
          
          <div class="summary-line">
            <span>Tax:</span>
            <span>{{ formatPrice(ticket.tax) }}</span>
          </div>
          
          <div class="summary-line total-line">
            <span>TOTAL:</span>
            <span>{{ formatPrice(ticket.total) }}</span>
          </div>
        </div>

        <!-- Compact Applied Promotions Section -->
        <div v-if="appliedPromotions.length > 0" class="print-promotions">
          <div class="print-divider"></div>
          <h4>PROMOTIONS:</h4>
          <div v-for="promo in appliedPromotions" :key="promo.promotionId" class="promotion-info">
            <div class="promotion-row">
              <span class="promotion-title">{{ promo.promotionName }}</span>
              <span class="promotion-save">-{{ formatPrice(promo.discountAmount) }}</span>
            </div>
          </div>
        </div>

        <!-- ULTRA COMPACT PAYMENT for 85mm -->
        <div class="print-payment">
          <div class="payment-status">
            <span>Payment:</span>
            <span class="payment-value" :class="`payment-${ticket.paymentStatus}`">
              {{ formatPaymentStatus(ticket.paymentStatus) }}
            </span>
          </div>
        </div>

        <!-- Compact Notes -->
        <div v-if="ticket.notes" class="print-notes">
          <div class="print-divider"></div>
          <h4>NOTES:</h4>
          <p>{{ ticket.notes }}</p>
        </div>

        <!-- MINIMAL FOOTER -->
        <div class="print-footer">
          <div class="print-divider"></div>
          <p class="thank-you">{{ footerMessage }}</p>
          <p class="print-time">{{ formatPrintDateTime(new Date()) }}</p>
        </div>
      </div>

      <div class="print-dialog-actions">
        <button
          @click="printNow"
          class="print-btn print-primary"
          :disabled="printing"
        >
          <span v-if="printing">Printing...</span>
          <span v-else>🖨️ Print</span>
        </button>
        <button @click="closeDialog" class="print-btn print-secondary">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'PrintTicketDialog',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    ticket: {
      type: Object,
      default: null,
    },
    footerMessage: {
      type: String,
      default: 'Thank you for your visit!',
    },
    customFooter: {
      type: String,
      default: null,
    },
    printTitle: {
      type: String,
      default: 'Print Ticket',
    },
  },

  data() {
    return {
      printing: false,
    }
  },

  computed: {
    hasPromotionDiscount() {
      return (
        this.ticket &&
        (this.ticket.promotionDiscount > 0 || this.appliedPromotions.length > 0)
      )
    },

    appliedPromotions() {
      if (!this.ticket) return []

      if (this.ticket.appliedPromotions) {
        try {
          if (typeof this.ticket.appliedPromotions === 'string') {
            return JSON.parse(this.ticket.appliedPromotions)
          }
          return this.ticket.appliedPromotions
        } catch (error) {
          console.error('Error parsing applied promotions:', error)
        }
      }

      return []
    },

    ...mapGetters({
      searchKeyword: 'searchKeyword',
      currenctSelectedCategoryId: 'currenctSelectedCategoryId',
      currentSelectedLocation: 'currentSelectedLocation',
      findAllCurrency: 'findAllCurrency',
      findAllTerminal: 'findAllTerminal',
      findSelectedTerminal: 'findSelectedTerminal',
    }),

    currentTerminal() {
      return this.findAllTerminal.find(
        (el) => el['id'] == this.findSelectedTerminal
      )
    },

    companyInfo() {
      const company = this.currentTerminal?.location?.company

      if (!company) {
        return {
          name: 'Restaurant Name',
          address: '123 Main Street<br>City, State 12345',
          tel: '',
          email: '',
          bank: '',
          accountName: '',
          accounts: '',
          remark: '',
        }
      }

      let formattedAddress = ''
      if (company.address) formattedAddress += company.address
      if (company.village) formattedAddress += `<br>${company.village}`
      if (company.district) formattedAddress += `, ${company.district}`
      if (company.province) formattedAddress += `, ${company.province}`

      return {
        name: company.name || 'Restaurant Name',
        address: formattedAddress || company.address || '',
        tel: company.tel || '',
        email: company.email || '',
        bank: company.bank || '',
        accountName: company.accountName || '',
        accounts: company.accounts || '',
        remark: company.remark || '',
      }
    },
  },

  methods: {
    getAfterPromotionsAmount() {
      if (!this.ticket) return 0
      const subtotal = parseFloat(this.ticket.subtotal || 0)
      const discount = parseFloat(this.ticket.promotionDiscount || 0)
      return Math.max(0, subtotal - discount)
    },

    closeDialog() {
      this.$emit('close')
    },

    // Optimized for 85mm thermal printer
    async printNow() {
      if (!this.ticket) return

      this.printing = true

      try {
        const printContent = document.querySelector('.print-preview').innerHTML
        // Smaller window size for 85mm thermal printer
        const printWindow = window.open('', '_blank', 'width=250,height=500')

        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Ticket #${this.ticket.id}</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=85mm">
            <style>
              ${this.getPrintStyles()}
            </style>
          </head>
          <body>
            ${printContent}
          </body>
          </html>
        `)

        printWindow.document.close()
        printWindow.focus()

        // Faster printing for thermal printers
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
          this.printing = false
          this.$emit('printed', this.ticket)
          this.closeDialog()
        }, 50)
      } catch (error) {
        console.error('Print error:', error)
        this.printing = false
        this.$emit('print-error', error)
      }
    },

    // Compact date format for thermal printer
    formatPrintDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      })
    },

    // 24-hour time format for thermal printer
    formatPrintTime(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    },

    // Compact datetime for footer
    formatPrintDateTime(date) {
      if (!date) return 'N/A'
      const d = new Date(date)
      return `${d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit'
      })} ${d.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })}`
    },

    // Compact price formatting for thermal printer
    formatPrice(amount, includeCurrency = true) {
      const rounded = Math.round(amount || 0)
      const formatted = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(rounded)
      
      return includeCurrency ? `${formatted}₭` : formatted
    },

    // Shorter status names for thermal printer
    formatStatus(status) {
      const statusMap = {
        pending: 'Pending',
        preparing: 'Prep',
        ready: 'Ready',
        served: 'Served',
        paid: 'Paid',
        cancel: 'Cancel'
      }
      return statusMap[status] || status
    },

    // Shorter payment status for thermal printer
    formatPaymentStatus(status) {
      const statusMap = {
        pending: 'Unpaid',
        paid: 'Paid',
        refunded: 'Refund'
      }
      return statusMap[status] || status
    },

    getItemTotal(line) {
      return (
        line.totalPrice ||
        line.total ||
        line.subtotal ||
        line.quantity * (line.unitPrice || line.pro_price || 0)
      )
    },

    // Truncate item names if too long for 85mm
    getItemName(line) {
      let name = line.pro_name ||
        line.product?.pro_name ||
        line.product?.name ||
        line.pro_desc ||
        'Unknown Item'
      
      // Truncate long names for 85mm thermal printer
      if (name.length > 20) {
        name = name.substring(0, 17) + '...'
      }
      
      return name
    },

    // 85mm thermal printer optimized styles
    getPrintStyles() {
      return `
        body {
          font-family: 'Courier New', monospace;
          font-size: 8px;
          line-height: 1.0;
          margin: 0;
          padding: 2px 4px;
          color: #000;
          width: 85mm;
          max-width: 85mm;
          overflow-wrap: break-word;
        }
        
        /* Header optimized for 85mm */
        .print-header {
          text-align: center;
          margin-bottom: 4px;
        }
        .restaurant-name {
          font-size: 10px;
          font-weight: bold;
          margin: 0 0 1px 0;
        }
        .restaurant-address {
          font-size: 7px;
          margin: 0;
          line-height: 1.0;
        }
        .contact-line {
          font-size: 6px;
          margin: 1px 0 0 0;
          color: #666;
        }
        
        /* Ticket info for 85mm width */
        .print-ticket-info {
          margin-bottom: 3px;
          font-size: 7px;
        }
        .ticket-basic, .customer-basic {
          margin-bottom: 2px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0px;
          font-size: 7px;
        }
        .detail-label {
          font-weight: bold;
          width: 35%;
        }
        .detail-value {
          width: 65%;
          text-align: right;
        }
        
        /* Compact divider */
        .print-divider {
          border-top: 1px dashed #000;
          margin: 2px 0;
        }
        
        /* Items section for 85mm */
        .section-title {
          font-size: 8px;
          font-weight: bold;
          margin: 0 0 2px 0;
          text-align: center;
        }
        .print-item {
          margin-bottom: 2px;
          font-size: 7px;
        }
        .item-main {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin-bottom: 0px;
        }
        .item-name {
          width: 70%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .item-price {
          width: 30%;
          text-align: right;
        }
        .item-details {
          display: flex;
          justify-content: space-between;
          font-size: 6px;
          margin-left: 4px;
          color: #666;
        }
        .item-qty {
          font-size: 6px;
        }
        
        /* Promotions for 85mm */
        .item-promotion {
          display: flex;
          justify-content: space-between;
          font-size: 6px;
          margin-left: 4px;
          color: #28a745;
          font-style: italic;
        }
        .item-notes {
          font-size: 6px;
          font-style: italic;
          margin-left: 4px;
          color: #666;
          word-wrap: break-word;
        }
        
        /* Summary optimized for 85mm */
        .print-summary {
          margin: 3px 0;
          font-size: 7px;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0px;
        }
        .promotion-line {
          color: #28a745;
          font-weight: bold;
        }
        .total-line {
          font-weight: bold;
          font-size: 9px;
          border-top: 1px solid #000;
          padding-top: 1px;
          margin-top: 2px;
        }
        
        /* Payment status */
        .print-payment {
          margin: 3px 0;
          font-size: 7px;
        }
        .payment-status {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        
        /* Notes section */
        .print-notes {
          margin: 3px 0;
          font-size: 6px;
        }
        .print-notes h4 {
          font-size: 7px;
          margin: 0 0 1px 0;
        }
        .print-notes p {
          margin: 0;
          word-wrap: break-word;
        }
        
        /* Promotions section */
        .print-promotions {
          margin: 3px 0;
          font-size: 6px;
        }
        .print-promotions h4 {
          font-size: 7px;
          margin: 0 0 2px 0;
          text-align: center;
          color: #28a745;
        }
        .promotion-info {
          margin-bottom: 2px;
        }
        .promotion-row {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          color: #28a745;
        }
        .promotion-desc {
          font-size: 6px;
          color: #666;
          font-style: italic;
          word-wrap: break-word;
        }
        
        /* Footer for 85mm */
        .print-footer {
          text-align: center;
          margin-top: 4px;
          font-size: 6px;
        }
        .thank-you {
          font-weight: bold;
          font-size: 7px;
          margin: 2px 0 1px 0;
        }
        .print-time {
          font-size: 6px;
          margin: 0;
          color: #666;
        }
        
        /* Status colors */
        .payment-pending { color: #856404; }
        .payment-paid { color: #155724; }
        .payment-refunded { color: #721c24; }
        
        /* Hide sections to save space on 85mm */
        .print-company-footer,
        .print-custom-footer,
        .company-remark {
          display: none;
        }
        
        .no-items-print {
          text-align: center;
          padding: 4px;
          color: #666;
          font-style: italic;
          font-size: 6px;
        }
        
        /* Thermal printer specific */
        @media print {
          body { 
            margin: 0; 
            padding: 1px 2px; 
            font-size: 7px;
            width: 85mm;
            max-width: 85mm;
          }
          .print-divider {
            margin: 1px 0;
          }
          .restaurant-name {
            font-size: 9px;
          }
          .total-line {
            font-size: 8px;
          }
        }
        
        /* Ensure no content overflows 85mm width */
        * {
          max-width: 100%;
          box-sizing: border-box;
        }
      `
    },
  },
}
</script>

<style scoped>
/* Dialog Overlay */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

/* Print Dialog Content */
.print-dialog-content {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.print-dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e9ecef;
  background: #f8f9fa;
  border-radius: 12px 12px 0 0;
}

.print-dialog-header h2 {
  margin: 0;
  color: #333;
  font-size: 20px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #6c757d;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
}

.close-btn:hover {
  background: #e9ecef;
  color: #333;
}

.print-preview {
  padding: 24px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.4;
  background: white;
  color: #000;
}

/* Print Header */
.print-header {
  text-align: center;
  margin-bottom: 20px;
}

.restaurant-name {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: #333;
}

.restaurant-address {
  font-size: 14px;
  margin: 0 0 4px 0;
  line-height: 1.3;
  color: #666;
}

.contact-line {
  font-size: 12px;
  margin: 2px 0;
  color: #666;
}

/* Ticket Info */
.print-ticket-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 15px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 13px;
}

.detail-label {
  font-weight: bold;
  color: #333;
}

.detail-value {
  color: #000;
}

/* Divider */
.print-divider {
  border-top: 2px dashed #333;
  margin: 20px 0;
}

/* Items Section */
.print-items {
  margin-bottom: 20px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 15px 0;
  text-align: center;
  color: #333;
}

.print-item {
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px dotted #ccc;
}

.print-item:last-child {
  border-bottom: none;
}

.item-main {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 2px;
}

.item-name {
  color: #333;
}

.item-price {
  color: #000;
}

.item-details {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-left: 15px;
  color: #666;
}

.item-promotion {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  margin-left: 15px;
  color: #28a745;
  font-style: italic;
  margin-top: 4px;
}

.item-notes {
  font-size: 11px;
  font-style: italic;
  margin-left: 15px;
  color: #888;
  margin-top: 4px;
}

.no-items-print {
  text-align: center;
  padding: 20px;
  color: #666;
  font-style: italic;
}

/* Summary */
.print-summary {
  margin: 20px 0;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 14px;
}

.promotion-line {
  color: #28a745 !important;
  font-weight: bold;
}

.total-line {
  font-size: 18px;
  font-weight: bold;
  border-top: 2px solid #333;
  padding-top: 8px;
  margin-top: 12px;
}

/* Promotions */
.print-promotions {
  margin: 20px 0;
  padding: 10px;
  background: rgba(40, 167, 69, 0.05);
  border-radius: 4px;
  border: 1px dashed #28a745;
}

.print-promotions h4 {
  font-size: 14px;
  margin: 0 0 10px 0;
  text-align: center;
  color: #28a745;
  font-weight: bold;
}

.promotion-info {
  margin-bottom: 8px;
}

.promotion-row {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #28a745;
  margin-bottom: 2px;
}

/* Payment */
.print-payment {
  margin: 20px 0;
}

.payment-status {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 8px;
}

.payment-value.payment-pending {
  color: #856404;
}
.payment-value.payment-paid {
  color: #155724;
}
.payment-value.payment-refunded {
  color: #721c24;
}

/* Notes */
.print-notes {
  margin: 20px 0;
}

.print-notes h4 {
  font-size: 14px;
  margin: 0 0 8px 0;
  color: #333;
  font-weight: bold;
}

.print-notes p {
  margin: 0;
  font-size: 13px;
  color: #000;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 4px;
  border-left: 4px solid #ffc107;
}

/* Footer */
.print-footer {
  text-align: center;
  margin-top: 30px;
}

.thank-you {
  font-weight: bold;
  font-size: 16px;
  margin: 15px 0 10px 0;
  color: #333;
}

.print-time {
  font-size: 11px;
  margin: 0;
  color: #888;
}

/* Print Dialog Actions */
.print-dialog-actions {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  border-radius: 0 0 12px 12px;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.print-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.print-primary {
  background: #007bff;
  color: white;
}

.print-primary:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.print-secondary {
  background: #6c757d;
  color: white;
}

.print-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Responsive */
@media (max-width: 768px) {
  .print-dialog-content {
    max-height: 95vh;
    margin: 10px;
  }

  .print-preview {
    padding: 16px;
    font-size: 12px;
  }

  .print-ticket-info {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .restaurant-name {
    font-size: 20px;
  }

  .section-title {
    font-size: 14px;
  }

  .total-line {
    font-size: 16px;
  }

  .print-dialog-actions {
    flex-direction: column;
  }

  .print-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>