<template>
  <div class="dialog-overlay" @click="$emit('close')">
    <div class="dialog-content" @click.stop>
      <div class="dialog-header">
        <h2>Ticket #{{ ticket?.id }} Details</h2>
        <button @click="$emit('close')" class="close-btn">×</button>
      </div>

      <div class="dialog-body" v-if="ticket">
        <!-- Ticket Info -->
        <div class="dialog-section">
          <div class="section-header">
            <h3>Ticket Information</h3>
            <div class="ticket-status-badges">
              <span :class="['status-badge', `status-${ticket.status}`]">
                {{ formatStatus(ticket.status) }}
              </span>
              <span
                :class="['payment-badge', `payment-${ticket.paymentStatus}`]"
              >
                {{ formatPaymentStatus(ticket.paymentStatus) }}
              </span>
            </div>
          </div>
          <div class="info-grid">
            <div class="info-item">
              <strong>Created:</strong> {{ formatDate(ticket.createdAt) }}
            </div>
            <div class="info-item">
              <strong>Last Updated:</strong>
              {{ formatDate(ticket.updateTimestamp) }}
            </div>
            <div class="info-item">
              <strong>Customer:</strong> {{ ticket.client?.name || 'Walk-in' }}
            </div>
            <div class="info-item">
              <strong>Table:</strong>
              {{ ticket.table?.number || ticket.table?.name || 'N/A' }}
            </div>
          </div>
        </div>

        <!-- Customer Details -->
        <div v-if="ticket.client" class="dialog-section">
          <h3>Customer Details</h3>
          <div class="info-grid">
            <div class="info-item">
              <strong>Name:</strong> {{ ticket.client.name }}
            </div>
            <div class="info-item" v-if="ticket.client.email">
              <strong>Email:</strong> {{ ticket.client.email }}
            </div>
            <div class="info-item" v-if="ticket.client.phone">
              <strong>Phone:</strong> {{ ticket.client.phone }}
            </div>
          </div>
        </div>

        <!-- Order Items -->
        <div class="dialog-section">
          <h3>Order Items</h3>
          <div
            v-if="ticket.ticketLines && ticket.ticketLines.length > 0"
            class="items-table"
          >
            <div class="table-header">
              <div class="col-item">Item</div>
              <div class="col-qty">Qty</div>
              <div class="col-price">Price</div>
              <div class="col-total">Total</div>
            </div>
            <div
              v-for="line in ticket.ticketLines"
              :key="line.id"
              class="table-row"
            >
              <div class="col-item">
                <div class="item-name">
                  {{ line.product.pro_name || 'Unknown Item' }}
                </div>
                <div v-if="line.notes" class="item-notes">
                  {{ line.notes }}
                </div>
              </div>
              <div class="col-qty">{{ line.quantity }}</div>
              <div class="col-price">{{ formatPrice(line.unitPrice) }}</div>
              <div class="col-total">
                {{ formatPrice(line.total || line.quantity * line.unitPrice) }}
              </div>
            </div>
          </div>
          <div v-else class="no-items">
            <p>No items in this order</p>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="dialog-section">
          <h3>Order Summary</h3>
          <div class="summary-table">
            <div class="summary-row">
              <span>Subtotal:</span>
              <span>{{ formatPrice(ticket.subtotal) }}</span>
            </div>
            <div class="summary-row">
              <span>Tax:</span>
              <span>{{ formatPrice(ticket.tax) }}</span>
            </div>
            <div class="summary-row total-row">
              <span><strong>Total:</strong></span>
              <span><strong>{{ formatPrice(ticket.total) }}</strong></span>
            </div>
          </div>
        </div>

        <!-- Payment Information -->
        <div v-if="ticket.payment" class="dialog-section">
          <h3>Payment Information</h3>
          <div class="info-grid">
            <div class="info-item">
              <strong>Method:</strong> {{ ticket.payment.method || 'N/A' }}
            </div>
            <div class="info-item">
              <strong>Amount:</strong> {{ formatPrice(ticket.payment.amount) }}
            </div>
            <div class="info-item">
              <strong>Status:</strong>
              {{ formatPaymentStatus(ticket.paymentStatus) }}
            </div>
            <div class="info-item" v-if="ticket.payment.transactionId">
              <strong>Transaction ID:</strong>
              {{ ticket.payment.transactionId }}
            </div>
          </div>
        </div>

        <!-- Notes -->
        <div v-if="ticket.notes" class="dialog-section">
          <h3>Notes</h3>
          <div class="notes-content">
            {{ ticket.notes }}
          </div>
        </div>
      </div>

      <div class="dialog-footer">
        <div class="dialog-actions">
          <button
            v-if="ticket?.status === 'pending'"
            @click="$emit('update-status', 'preparing')"
            class="dialog-btn btn-preparing"
          >
            Start Preparing
          </button>
          <button
            v-if="ticket?.status === 'preparing'"
            @click="$emit('update-status', 'ready')"
            class="dialog-btn btn-ready"
          >
            Mark Ready
          </button>
          <button
            v-if="ticket?.status === 'ready'"
            @click="$emit('update-status', 'served')"
            class="dialog-btn btn-served"
          >
            Mark Served
          </button>
          <button
            v-if="
              ticket?.status === 'served' && ticket?.paymentStatus === 'pending'
            "
            @click="$emit('process-payment')"
            class="dialog-btn btn-payment"
          >
            Process Payment
          </button>
          <button @click="$emit('print')" class="dialog-btn btn-print">
            Print Ticket
          </button>
          <button @click="$emit('close')" class="dialog-btn btn-close">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketDetailDialog',

  props: {
    ticket: {
      type: Object,
      default: null,
    },
  },

  methods: {
    formatDate(date) {
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

.dialog-content {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.dialog-header {
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

.dialog-header h2 {
  margin: 0;
  color: #1a202c;
  font-size: 24px;
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

.dialog-body {
  padding: 32px;
}

.dialog-section {
  margin-bottom: 32px;
}

.dialog-section:last-child {
  margin-bottom: 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.dialog-section h3 {
  margin: 0 0 20px 0;
  color: #2d3748;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 10px;
}

.ticket-status-badges {
  display: flex;
  gap: 8px;
}

.status-badge,
.payment-badge {
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-pending {
  background: #fef5e7;
  color: #b7791f;
}
.status-preparing {
  background: #ebf8ff;
  color: #2c5282;
}
.status-ready {
  background: #f0fff4;
  color: #22543d;
}
.status-served {
  background: #edf2f7;
  color: #2d3748;
}
.status-paid {
  background: #f0fff4;
  color: #22543d;
}

.payment-pending {
  background: #fef5e7;
  color: #b7791f;
}
.payment-paid {
  background: #f0fff4;
  color: #22543d;
}
.payment-refunded {
  background: #fff5f5;
  color: #c53030;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.info-item {
  padding: 16px;
  background: #f7fafc;
  border-radius: 8px;
  font-size: 14px;
  border-left: 3px solid #4299e1;
}

.info-item strong {
  color: #2d3748;
  margin-right: 8px;
  font-weight: 600;
}

/* Items Table */
.items-table {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 100px 120px 120px;
  gap: 16px;
  background: #f7fafc;
  padding: 16px 20px;
  font-weight: 700;
  color: #2d3748;
  border-bottom: 2px solid #e2e8f0;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 100px 120px 120px;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid #f1f3f5;
  align-items: center;
  transition: background 0.2s;
}

.table-row:hover {
  background: #f7fafc;
}

.table-row:last-child {
  border-bottom: none;
}

.col-item {
  display: flex;
  flex-direction: column;
}

.item-name {
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 4px;
}

.item-notes {
  font-size: 12px;
  color: #718096;
  font-style: italic;
}

.col-qty,
.col-price,
.col-total {
  text-align: right;
  font-weight: 600;
  color: #2d3748;
}

.no-items {
  text-align: center;
  padding: 48px;
  color: #a0aec0;
  font-style: italic;
}

/* Summary Table */
.summary-table {
  background: #f7fafc;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e2e8f0;
  font-size: 15px;
}

.summary-row:last-child {
  border-bottom: none;
}

.total-row {
  font-size: 20px;
  padding-top: 16px;
  border-top: 2px solid #cbd5e0;
  color: #1a202c;
  margin-top: 8px;
  font-weight: 700;
}

/* Notes Content */
.notes-content {
  background: #fffaf0;
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid #ed8936;
  color: #744210;
  font-style: italic;
  line-height: 1.6;
}

/* Dialog Footer */
.dialog-footer {
  padding: 24px 32px;
  border-top: 1px solid #e2e8f0;
  background: #f7fafc;
  border-radius: 0 0 16px 16px;
  position: sticky;
  bottom: 0;
}

.dialog-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.dialog-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.dialog-btn.btn-preparing {
  background: #4299e1;
  color: white;
}
.dialog-btn.btn-preparing:hover {
  background: #3182ce;
}

.dialog-btn.btn-ready {
  background: #48bb78;
  color: white;
}
.dialog-btn.btn-ready:hover {
  background: #38a169;
}

.dialog-btn.btn-served {
  background: #9f7aea;
  color: white;
}
.dialog-btn.btn-served:hover {
  background: #805ad5;
}

.dialog-btn.btn-payment {
  background: #ed8936;
  color: white;
}
.dialog-btn.btn-payment:hover {
  background: #dd6b20;
}

.dialog-btn.btn-print {
  background: #718096;
  color: white;
}
.dialog-btn.btn-print:hover {
  background: #4a5568;
}

.dialog-btn.btn-close {
  background: #e2e8f0;
  color: #2d3748;
}
.dialog-btn.btn-close:hover {
  background: #cbd5e0;
}

.dialog-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .dialog-overlay {
    padding: 10px;
  }

  .dialog-content {
    max-height: 95vh;
    border-radius: 12px;
  }

  .dialog-header,
  .dialog-body,
  .dialog-footer {
    padding: 20px;
  }

  .dialog-header h2 {
    font-size: 20px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .table-header {
    display: none;
  }

  .table-row {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 16px;
  }

  .col-qty,
  .col-price,
  .col-total {
    text-align: left;
  }

  .col-qty::before {
    content: 'Qty: ';
    font-weight: 700;
    color: #718096;
  }
  .col-price::before {
    content: 'Price: ';
    font-weight: 700;
    color: #718096;
  }
  .col-total::before {
    content: 'Total: ';
    font-weight: 700;
    color: #718096;
  }

  .dialog-actions {
    flex-direction: column;
  }

  .dialog-btn {
    width: 100%;
  }
}
</style>