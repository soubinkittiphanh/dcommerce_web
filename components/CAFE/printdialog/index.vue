<template>
  <div v-if="show" class="dialog-overlay" @click="closeDialog">
    <div class="print-dialog-content" @click.stop>
      <div class="print-dialog-header">
        <h2>Print Ticket</h2>
        <button @click="closeDialog" class="close-btn">×</button>
      </div>

      <div class="print-preview" v-if="ticket">
        <!-- Restaurant Header -->
        <div class="print-header">
          <div class="restaurant-info">
            <h1 class="restaurant-name">{{ restaurantInfo.name }}</h1>
            <p class="restaurant-address" v-html="restaurantInfo.address"></p>
          </div>
        </div>

        <!-- Ticket Info -->
        <div class="print-ticket-info">
          <div class="ticket-details">
            <div class="detail-row">
              <span class="detail-label">Ticket #:</span>
              <span class="detail-value">{{ ticket.id }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date:</span>
              <span class="detail-value">{{
                formatPrintDate(ticket.createdAt)
              }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">{{
                formatPrintTime(ticket.createdAt)
              }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Status:</span>
              <span class="detail-value">{{
                formatStatus(ticket.status)
              }}</span>
            </div>
          </div>

          <div class="customer-table-info">
            <div class="detail-row">
              <span class="detail-label">Customer:</span>
              <span class="detail-value">{{
                ticket.client?.name || 'Walk-in Customer'
              }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Table:</span>
              <span class="detail-value">{{
                ticket.table?.number || ticket.table?.name || 'N/A'
              }}</span>
            </div>
            <div v-if="ticket.client?.phone" class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">{{ ticket.client.phone }}</span>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="print-divider"></div>

        <!-- Order Items -->
        <div class="print-items">
          <h3 class="section-title">ORDER ITEMS</h3>
          <div v-if="ticket.ticketLines && ticket.ticketLines.length > 0">
            <div
              v-for="line in ticket.ticketLines"
              :key="line.id"
              class="print-item"
            >
              <div class="item-line">
                <div class="item-main">
                  <span class="item-name">{{ getItemName(line) }}</span>
                  <span class="item-price"
                    >${{ formatPrice(line.originalTicketLinePrice) }}</span
                  >
                </div>
                <div class="item-details">
                  <span class="item-qty">Qty: {{ line.quantity }}</span>
                  <span class="item-total"
                    >${{ formatPrice(getItemTotal(line)) }}</span
                  >
                </div>
              </div>
              <div v-if="line.notes" class="item-notes">
                Note: {{ line.notes }}
              </div>
            </div>
          </div>
          <div v-else class="no-items-print">
            <p>No items in this order</p>
          </div>
        </div>

        <!-- Divider -->
        <div class="print-divider"></div>

        <!-- Order Summary -->
        <div class="print-summary">
          <div class="summary-line">
            <span class="summary-label">Subtotal:</span>
            <span class="summary-value"
              >${{ formatPrice(ticket.subtotal) }}</span
            >
          </div>
          <div class="summary-line">
            <span class="summary-label">Tax:</span>
            <span class="summary-value">${{ formatPrice(ticket.tax) }}</span>
          </div>
          <div class="summary-line total-line">
            <span class="summary-label">TOTAL:</span>
            <span class="summary-value">${{ formatPrice(ticket.total) }}</span>
          </div>
        </div>

        <!-- Payment Status -->
        <div class="print-payment">
          <div class="payment-status">
            <span class="payment-label">Payment Status:</span>
            <span
              class="payment-value"
              :class="`payment-${ticket.paymentStatus}`"
            >
              {{ formatPaymentStatus(ticket.paymentStatus) }}
            </span>
          </div>
          <div
            v-if="ticket.payment && ticket.paymentStatus === 'paid'"
            class="payment-details"
          >
            <div class="payment-info">
              <span>Method: {{ ticket.payment.payment_code || 'N/A' }}</span>
              <span v-if="ticket.payment.id">
                Transaction: {{ ticket.payment.payment_code }}
              </span>
            </div>
          </div>
        </div>

        <!-- Notes -->
        <div v-if="ticket.notes" class="print-notes">
          <div class="print-divider"></div>
          <h4>NOTES:</h4>
          <p>{{ ticket.notes }}</p>
        </div>

        <!-- Custom Footer -->
        <div v-if="customFooter" class="print-custom-footer">
          <div class="print-divider"></div>
          <div v-html="customFooter"></div>
        </div>

        <!-- Footer -->
        <div class="print-footer">
          <div class="print-divider"></div>
          <p class="thank-you">{{ footerMessage }}</p>
          <p class="print-time">
            Printed: {{ formatPrintDateTime(new Date()) }}
          </p>
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
    restaurantInfo: {
      type: Object,
      default: () => ({
        name: 'Restaurant Name',
        address:
          '123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567',
      }),
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

  methods: {
    closeDialog() {
      this.$emit('close')
    },

    async printNow() {
      if (!this.ticket) return

      this.printing = true

      try {
        const printContent = document.querySelector('.print-preview').innerHTML
        const printWindow = window.open('', '_blank')

        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Ticket #${this.ticket.id}</title>
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

        // Wait a moment for content to load, then print
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
          this.printing = false
          this.$emit('printed', this.ticket)
          this.closeDialog()
        }, 250)
      } catch (error) {
        console.error('Print error:', error)
        this.printing = false
        this.$emit('print-error', error)
      }
    },

    getPrintStyles() {
      return `
        body {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.4;
          margin: 0;
          padding: 20px;
          color: #000;
        }
        .print-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .restaurant-name {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 8px 0;
        }
        .restaurant-address {
          font-size: 11px;
          margin: 0;
          line-height: 1.3;
        }
        .print-ticket-info {
          margin-bottom: 15px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3px;
        }
        .detail-label {
          font-weight: bold;
        }
        .print-divider {
          border-top: 1px dashed #000;
          margin: 15px 0;
        }
        .section-title {
          font-size: 14px;
          font-weight: bold;
          margin: 0 0 10px 0;
          text-align: center;
        }
        .print-item {
          margin-bottom: 8px;
        }
        .item-line {
          margin-bottom: 2px;
        }
        .item-main {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .item-details {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          margin-left: 10px;
        }
        .item-notes {
          font-size: 10px;
          font-style: italic;
          margin-left: 10px;
          color: #666;
        }
        .print-summary {
          margin: 15px 0;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3px;
        }
        .total-line {
          font-weight: bold;
          font-size: 14px;
          border-top: 1px solid #000;
          padding-top: 5px;
          margin-top: 8px;
        }
        .print-payment {
          margin: 15px 0;
        }
        .payment-status {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .payment-details {
          font-size: 11px;
          margin-top: 5px;
        }
        .payment-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .print-notes {
          margin: 15px 0;
        }
        .print-notes h4 {
          font-size: 12px;
          margin: 0 0 5px 0;
        }
        .print-notes p {
          margin: 0;
          font-size: 11px;
        }
        .print-custom-footer {
          margin: 15px 0;
          text-align: center;
        }
        .print-footer {
          text-align: center;
          margin-top: 20px;
        }
        .thank-you {
          font-weight: bold;
          margin: 10px 0 5px 0;
        }
        .print-time {
          font-size: 10px;
          margin: 0;
          color: #666;
        }
        .payment-pending { color: #856404; }
        .payment-paid { color: #155724; }
        .payment-refunded { color: #721c24; }
        .no-items-print {
          text-align: center;
          padding: 20px;
          color: #666;
          font-style: italic;
        }
        @media print {
          body { margin: 0; padding: 10px; }
        }
      `
    },

    formatPrintDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString()
    },

    formatPrintTime(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    },

    formatPrintDateTime(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleString()
    },

   formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount || 0))

      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber
    },

    formatStatus(status) {
      const statusMap = {
        pending: 'Pending',
        preparing: 'Preparing',
        ready: 'Ready',
        served: 'Served',
        paid: 'Paid',
      }
      return statusMap[status] || status
    },

    formatPaymentStatus(status) {
      const statusMap = {
        pending: 'Unpaid',
        paid: 'Paid',
        refunded: 'Refunded',
      }
      return statusMap[status] || status
    },

    getItemName(line) {
      console.info(`Line detail ${JSON.stringify(line)}`)
      // Handle different possible structures
      return line.pro_name || line.pro_desc || 'Unknown Item'
    },

    getItemTotal(line) {
      // Handle different possible structures
      return (
        line.total ||
        line.totalPrice ||
        line.subtotal ||
        line.quantity * line.originalTicketLinePrice ||
        0
      )
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
  margin: 0;
  line-height: 1.3;
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

.item-line {
  margin-bottom: 4px;
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

.item-total {
  font-weight: bold;
  color: #000;
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

.summary-label {
  color: #333;
}

.summary-value {
  font-weight: bold;
  color: #000;
}

.total-line {
  font-size: 18px;
  font-weight: bold;
  border-top: 2px solid #333;
  padding-top: 8px;
  margin-top: 12px;
}

.total-line .summary-label,
.total-line .summary-value {
  color: #000;
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

.payment-label {
  color: #333;
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

.payment-details {
  font-size: 12px;
  color: #666;
}

.payment-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
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

/* Custom Footer */
.print-custom-footer {
  margin: 20px 0;
  text-align: center;
  font-size: 12px;
  color: #666;
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