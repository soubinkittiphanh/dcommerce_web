<template>
  <div class="dialog-overlay" @click="$emit('close')">
    <div class="print-dialog-content" @click.stop>
      <div class="print-dialog-header">
        <h2>Print Ticket</h2>
        <button @click="$emit('close')" class="close-btn">×</button>
      </div>

      <div class="print-preview" v-if="ticket">
        <!-- Restaurant Header -->
        <div class="print-header">
          <div class="restaurant-info">
            <h1 class="restaurant-name">Restaurant Name</h1>
            <p class="restaurant-address">
              123 Main Street<br />
              City, State 12345<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>

        <!-- Ticket Info -->
        <div class="print-ticket-info">
          <div class="ticket-details">
            <div class="detail-row">
              <span class="detail-label">Ticket #:</span>
              <span class="detail-value">{{ ticket.ticketNumber || ticket.id }}</span>
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
              <span class="detail-value">{{ formatStatus(ticket.status) }}</span>
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
                  <span class="item-name">{{
                    line.product.pro_name || 'Unknown Item'
                  }}</span>
                  <span class="item-price">{{
                    formatPrice(line.unitPrice)
                  }}</span>
                </div>
                <div class="item-details">
                  <span class="item-qty">Qty: {{ line.quantity }}</span>
                  <span class="item-total">{{
                    formatPrice(line.total || line.quantity * line.unitPrice)
                  }}</span>
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
            <span class="summary-value">{{ formatPrice(ticket.subtotal) }}</span>
          </div>
          <div class="summary-line">
            <span class="summary-label">Tax:</span>
            <span class="summary-value">{{ formatPrice(ticket.tax) }}</span>
          </div>
          <div class="summary-line total-line">
            <span class="summary-label">TOTAL:</span>
            <span class="summary-value">{{ formatPrice(ticket.total) }}</span>
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
              <span>Method: {{ ticket.payment.method || 'N/A' }}</span>
              <span v-if="ticket.payment.transactionId">
                Transaction: {{ ticket.payment.transactionId }}
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

        <!-- Footer -->
        <div class="print-footer">
          <div class="print-divider"></div>
          <p class="thank-you">Thank you for your visit!</p>
          <p class="print-time">
            Printed: {{ formatPrintDateTime(new Date()) }}
          </p>
        </div>
      </div>

      <div class="print-dialog-actions">
        <button @click="$emit('print')" class="print-btn print-primary">
          🖨️ Print
        </button>
        <button @click="$emit('close')" class="print-btn print-secondary">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrintDialog',

  props: {
    ticket: {
      type: Object,
      default: null,
    },
  },

  methods: {
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

    formatPrice(amount) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount || 0))

      return `${formattedNumber} ₭`
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
  },
}
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(4px);
}

.print-dialog-content {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.print-dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid #e2e8f0;
  background: #f7fafc;
  border-radius: 16px 16px 0 0;
  position: sticky;
  top: 0;
  z-index: 10;
}

.print-dialog-header h2 {
  margin: 0;
  color: #1a202c;
  font-size: 22px;
  font-weight: 700;
}

.close-btn {
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: #718096;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
  line-height: 1;
}

.close-btn:hover {
  background: #e2e8f0;
  color: #2d3748;
}

.print-preview {
  padding: 32px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  background: white;
  color: #000;
}

/* Print Header */
.print-header {
  text-align: center;
  margin-bottom: 24px;
}

.restaurant-name {
  font-size: 26px;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #1a202c;
}

.restaurant-address {
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
  color: #4a5568;
}

/* Ticket Info */
.print-ticket-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 20px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 13px;
}

.detail-label {
  font-weight: bold;
  color: #2d3748;
}

.detail-value {
  color: #1a202c;
}

/* Divider */
.print-divider {
  border-top: 2px dashed #cbd5e0;
  margin: 24px 0;
}

/* Items Section */
.print-items {
  margin-bottom: 24px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 16px 0;
  text-align: center;
  color: #1a202c;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.print-item {
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px dotted #cbd5e0;
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
  margin-bottom: 4px;
  color: #1a202c;
}

.item-name {
  flex: 1;
}

.item-price {
  margin-left: 16px;
}

.item-details {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-left: 16px;
  color: #4a5568;
}

.item-total {
  font-weight: bold;
  color: #1a202c;
}

.item-notes {
  font-size: 11px;
  font-style: italic;
  margin-left: 16px;
  color: #718096;
  margin-top: 4px;
}

.no-items-print {
  text-align: center;
  padding: 24px;
  color: #a0aec0;
  font-style: italic;
}

/* Summary */
.print-summary {
  margin: 24px 0;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 14px;
}

.summary-label {
  color: #2d3748;
  font-weight: 600;
}

.summary-value {
  font-weight: bold;
  color: #1a202c;
}

.total-line {
  font-size: 20px;
  font-weight: bold;
  border-top: 2px solid #1a202c;
  padding-top: 12px;
  margin-top: 16px;
}

.total-line .summary-label,
.total-line .summary-value {
  color: #1a202c;
}

/* Payment */
.print-payment {
  margin: 24px 0;
}

.payment-status {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
}

.payment-label {
  color: #2d3748;
}

.payment-value.payment-pending {
  color: #d69e2e;
}
.payment-value.payment-paid {
  color: #38a169;
}
.payment-value.payment-refunded {
  color: #e53e3e;
}

.payment-details {
  font-size: 12px;
  color: #4a5568;
}

.payment-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Notes */
.print-notes {
  margin: 24px 0;
}

.print-notes h4 {
  font-size: 14px;
  margin: 0 0 10px 0;
  color: #1a202c;
  font-weight: bold;
  text-transform: uppercase;
}

.print-notes p {
  margin: 0;
  font-size: 13px;
  color: #2d3748;
  background: #fef5e7;
  padding: 12px;
  border-radius: 6px;
  border-left: 4px solid #ed8936;
}

/* Footer */
.print-footer {
  text-align: center;
  margin-top: 32px;
}

.thank-you {
  font-weight: bold;
  font-size: 18px;
  margin: 16px 0 12px 0;
  color: #1a202c;
}

.print-time {
  font-size: 11px;
  margin: 0;
  color: #a0aec0;
}

/* Print Dialog Actions */
.print-dialog-actions {
  padding: 24px 32px;
  border-top: 1px solid #e2e8f0;
  background: #f7fafc;
  border-radius: 0 0 16px 16px;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  position: sticky;
  bottom: 0;
}

.print-btn {
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.print-primary {
  background: #4299e1;
  color: white;
}

.print-primary:hover {
  background: #3182ce;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(66, 153, 225, 0.4);
}

.print-secondary {
  background: #e2e8f0;
  color: #2d3748;
}

.print-secondary:hover {
  background: #cbd5e0;
}

/* Responsive */
@media (max-width: 768px) {
  .print-dialog-content {
    max-height: 95vh;
    margin: 10px;
  }

  .print-preview {
    padding: 20px;
    font-size: 12px;
  }

  .print-ticket-info {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .restaurant-name {
    font-size: 22px;
  }

  .section-title {
    font-size: 14px;
  }

  .total-line {
    font-size: 18px;
  }

  .print-dialog-actions {
    flex-direction: column;
  }

  .print-btn {
    width: 100%;
    justify-content: center;
  }
}

/* Print Media Query */
@media print {
  .print-dialog-header,
  .print-dialog-actions {
    display: none;
  }

  .print-preview {
    padding: 0;
  }
}
</style>