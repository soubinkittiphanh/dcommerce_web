<template>
  <div v-if="show" class="dialog-overlay" @click="closeDialog">
    <div class="print-dialog-content" @click.stop>
      <div class="print-dialog-header">
        <h2>Print Ticket</h2>
        <button @click="closeDialog" class="close-btn">×</button>
      </div>

      <div class="print-preview" v-if="ticket">
        <!-- COMPACT HEADER for 54mm -->
        <div class="print-header">
          <div class="restaurant-info">
            <h1 class="restaurant-name">{{ companyInfo.name }}</h1>
            <div class="restaurant-address" v-html="companyInfo.address"></div>
            <div class="contact-line" v-if="companyInfo.tel || companyInfo.email">
              {{ companyInfo.tel }}<span v-if="companyInfo.tel && companyInfo.email"> | </span>{{ companyInfo.email }}
            </div>
          </div>
        </div>

        <!-- COMPACT TICKET INFO for 54mm -->
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

        <!-- COMPACT ITEMS for 54mm -->
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
              
              <!-- Compact promotion -->
              <div v-if="line.is_promotion_item && line.promotion_note" class="item-promotion">
                <span>🏷️{{ line.promotion_note }}</span>
                <span v-if="line.discount_amount > 0">-{{ formatPrice(line.discount_amount) }}</span>
              </div>
              
              <!-- Compact notes -->
              <div v-if="line.notes" class="item-notes">{{ line.notes }}</div>
            </div>
          </div>
          <div v-else class="no-items-print">
            <p>No items in this order</p>
          </div>
        </div>

        <div class="print-divider"></div>

        <!-- CORRECTED SUMMARY for tax-inclusive pricing -->
        <div class="print-summary">
          <!-- Show total with tax (original price) -->
          <div class="summary-line">
            <span>Total (with tax):</span>
            <span>{{ formatPrice(getTicketTotalWithTax()) }}</span>
          </div>
          
          <!-- Show base amount (extracted from tax-inclusive price) -->
<!--            
          <div class="summary-line" style="color: #666; font-size: 9px;">
            <span>Base amount:</span>
            <span>{{ formatPrice(getTicketBaseAmount()) }}</span>
          </div> -->
          
          <!-- Show promotions if any -->
          <div v-if="hasPromotionDiscount" class="summary-line promotion-line">
            <span>Discount:</span>
            <span>-{{ formatPrice(ticket.promotionDiscount || 0) }}</span>
          </div>
          
          <!-- Show base after promotions -->
          <!-- <div class="summary-line" style="color: #666; font-size: 9px;">
            <span>Base after promotions:</span>
            <span>{{ formatPrice(getTicketBaseAfterPromotions()) }}</span>
          </div>
           -->
          <!-- Show tax breakdown -->
          <div v-if="getTicketTaxBreakdown().length > 0">
            <div
              v-for="taxItem in getTicketTaxBreakdown()"
              :key="taxItem.code"
              class="summary-line"
              style="font-size: 9px;"
            >
              <span>{{ taxItem.name }} ({{ (taxItem.rate * 100).toFixed(1) }}% {{ taxItem.type }}):</span>
              <span>{{ formatPrice(taxItem.taxAmount) }}</span>
            </div>
          </div>
          
          <!-- Total tax amount -->
          <div class="summary-line">
            <span>Total Tax:</span>
            <span>{{ formatPrice(ticket.tax || 0) }}</span>
          </div>
          
          <div class="summary-line total-line">
            <span>FINAL TOTAL:</span>
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

        <!-- COMPACT PAYMENT for 54mm -->
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
    // ... existing methods ...

    // ADDED: Methods for tax-inclusive print calculations
    getTicketTotalWithTax() {
      if (!this.ticket || !this.ticket.ticketLines) return 0
      
      return this.ticket.ticketLines.reduce((total, line) => {
        return total + (line.quantity * (line.unitPrice || line.pro_price || 0))
      }, 0)
    },

    getTicketBaseAmount() {
      if (!this.ticket || !this.ticket.ticketLines) return 0
      
      return this.ticket.ticketLines.reduce((total, line) => {
        const itemTotal = line.quantity * (line.unitPrice || line.pro_price || 0)
        
        // If line has tax information and it's inclusive
        if (line.taxRate && line.taxType === 'INC') {
          // Extract base amount: base = total / (1 + tax_rate)
          return total + (itemTotal / (1 + parseFloat(line.taxRate)))
        } else {
          // For tax exclusive or no tax: base = total
          return total + itemTotal
        }
      }, 0)
    },

    getTicketBaseAfterPromotions() {
      const baseAmount = this.getTicketBaseAmount()
      const promotionDiscount = this.ticket.promotionDiscount || 0
      return Math.max(0, baseAmount - promotionDiscount)
    },

    getTicketTaxBreakdown() {
      if (!this.ticket || !this.ticket.ticketLines) return []
      
      const taxGroups = new Map()
      const totalBaseAmount = this.getTicketBaseAmount()
      const promotionDiscount = this.ticket.promotionDiscount || 0
      const discountRatio = totalBaseAmount > 0 ? promotionDiscount / totalBaseAmount : 0

      this.ticket.ticketLines.forEach(line => {
        if (line.taxRate && line.taxRate > 0) {
          const taxKey = line.taxId || 'default'
          const itemTotal = line.quantity * (line.unitPrice || line.pro_price || 0)
          
          let itemBaseAmount
          if (line.taxType === 'INC') {
            // For tax inclusive: extract base amount
            itemBaseAmount = itemTotal / (1 + parseFloat(line.taxRate))
          } else {
            // For tax exclusive: item total is the base amount
            itemBaseAmount = itemTotal
          }
          
          if (!taxGroups.has(taxKey)) {
            taxGroups.set(taxKey, {
              name: `Tax ${(parseFloat(line.taxRate) * 100).toFixed(1)}%`,
              code: line.taxId || 'TAX',
              rate: parseFloat(line.taxRate),
              type: line.taxType || 'INC',
              baseAmount: 0
            })
          }
          
          const group = taxGroups.get(taxKey)
          group.baseAmount += itemBaseAmount
        }
      })

      const breakdown = []
      taxGroups.forEach(group => {
        // Apply proportional discount
        const adjustedBaseAmount = group.baseAmount * (1 - discountRatio)
        const taxAmount = adjustedBaseAmount * group.rate
        
        breakdown.push({
          name: group.name,
          code: group.code,
          rate: group.rate,
          type: group.type,
          baseAmount: adjustedBaseAmount,
          taxAmount: taxAmount
        })
      })

      return breakdown
    },

    getAfterPromotionsAmount() {
      if (!this.ticket) return 0
      const subtotal = parseFloat(this.ticket.subtotal || 0)
      const discount = parseFloat(this.ticket.promotionDiscount || 0)
      return Math.max(0, subtotal - discount)
    },

    closeDialog() {
      this.$emit('close')
    },

    // Optimized for 54mm thermal printer - let printer handle width
    async printNow() {
      if (!this.ticket) return

      this.printing = true

      try {
        const printContent = document.querySelector('.print-preview').innerHTML
        // Remove specific width constraints - let printer handle it
        const printWindow = window.open('', '_blank')

        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Ticket #${this.ticket.id}</title>
            <meta charset="utf-8">
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

        // Standard printing delay
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
          this.printing = false
          this.$emit('printed', this.ticket)
          this.closeDialog()
        }, 100)
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

    // Truncate item names for 54mm
    getItemName(line) {
      let name = line.pro_name ||
        line.product?.pro_name ||
        line.product?.name ||
        line.pro_desc ||
        'Unknown Item'
      
      // Truncate for 54mm thermal printer
      if (name.length > 15) {
        name = name.substring(0, 12) + '...'
      }
      
      return name
    },

    // 54mm thermal printer optimized styles - READABLE FONTS
    getPrintStyles() {
      return `
        body {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.2;
          margin: 0;
          padding: 4px;
          color: #000;
          overflow-wrap: break-word;
        }
        
        /* Header for 54mm */
        .print-header {
          text-align: center;
          margin-bottom: 8px;
        }
        .restaurant-name {
          font-size: 14px;
          font-weight: bold;
          margin: 0 0 4px 0;
        }
        .restaurant-address {
          font-size: 10px;
          margin: 0 0 2px 0;
          line-height: 1.2;
        }
        .contact-line {
          font-size: 9px;
          margin: 2px 0;
          color: #666;
        }
        
        /* Ticket info for 54mm */
        .print-ticket-info {
          margin-bottom: 6px;
          font-size: 10px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
          font-size: 10px;
        }
        .detail-label {
          font-weight: bold;
        }
        .detail-value {
          text-align: right;
        }
        
        /* Divider */
        .print-divider {
          border-top: 1px dashed #000;
          margin: 6px 0;
        }
        
        /* Items section for 54mm */
        .section-title {
          font-size: 12px;
          font-weight: bold;
          margin: 0 0 6px 0;
          text-align: center;
        }
        .print-item {
          margin-bottom: 6px;
          font-size: 10px;
        }
        .item-main {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin-bottom: 2px;
        }
        .item-name {
          flex: 1;
          word-wrap: break-word;
        }
        .item-price {
          margin-left: 8px;
          text-align: right;
        }
        .item-details {
          display: flex;
          justify-content: flex-start;
          font-size: 9px;
          margin-left: 8px;
          color: #666;
        }
        
        /* Promotions for 54mm */
        .item-promotion {
          display: block;
          font-size: 9px;
          margin-left: 8px;
          color: #28a745;
          font-style: italic;
          margin-top: 2px;
        }
        .item-notes {
          font-size: 9px;
          font-style: italic;
          margin-left: 8px;
          color: #666;
          word-wrap: break-word;
          margin-top: 2px;
        }
        
        /* Summary for 54mm */
        .print-summary {
          margin: 8px 0;
          font-size: 10px;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
        }
        .promotion-line {
          color: #28a745;
          font-weight: bold;
        }
        .total-line {
          font-weight: bold;
          font-size: 12px;
          border-top: 1px solid #000;
          padding-top: 4px;
          margin-top: 4px;
        }
        
        /* Payment status */
        .print-payment {
          margin: 8px 0;
          font-size: 10px;
        }
        .payment-status {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        
        /* Notes section */
        .print-notes {
          margin: 8px 0;
          font-size: 9px;
        }
        .print-notes h4 {
          font-size: 10px;
          margin: 0 0 4px 0;
        }
        .print-notes p {
          margin: 0;
          word-wrap: break-word;
        }
        
        /* Promotions section */
        .print-promotions {
          margin: 8px 0;
          font-size: 9px;
        }
        .print-promotions h4 {
          font-size: 10px;
          margin: 0 0 4px 0;
          text-align: center;
          color: #28a745;
        }
        .promotion-info {
          margin-bottom: 4px;
        }
        .promotion-row {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          color: #28a745;
        }
        
        /* Footer */
        .print-footer {
          text-align: center;
          margin-top: 8px;
          font-size: 9px;
        }
        .thank-you {
          font-weight: bold;
          font-size: 10px;
          margin: 4px 0 2px 0;
        }
        .print-time {
          font-size: 8px;
          margin: 0;
          color: #666;
        }
        
        /* Status colors */
        .payment-pending { color: #856404; }
        .payment-paid { color: #155724; }
        .payment-refunded { color: #721c24; }
        
        .no-items-print {
          text-align: center;
          padding: 8px;
          color: #666;
          font-style: italic;
          font-size: 9px;
        }
        
        /* Print media query - let printer handle width */
        @media print {
          body { 
            margin: 0; 
            padding: 2px;
            font-size: 11px;
          }
          .print-divider {
            margin: 4px 0;
          }
          .restaurant-name {
            font-size: 13px;
          }
          .total-line {
            font-size: 11px;
          }
        }
        
        /* Let content flow naturally */
        * {
          box-sizing: border-box;
        }
      `
    },
  },
}
</script>

<style scoped>
/* Keep your existing scoped styles - they're for the dialog, not the print */
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

/* Dialog Preview Styles (Better for viewing in browser) */
.print-header {
  text-align: center;
  margin-bottom: 20px;
}

.restaurant-name {
  font-size: 22px;
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
  margin: 4px 0;
  color: #666;
}

/* Ticket Info for Dialog */
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

/* Divider for Dialog */
.print-divider {
  border-top: 2px dashed #333;
  margin: 20px 0;
}

/* Items Section for Dialog */
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

/* Summary for Dialog */
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

/* Promotions for Dialog */
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

/* Payment for Dialog */
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

/* Notes for Dialog */
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

/* Footer for Dialog */
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
</style>