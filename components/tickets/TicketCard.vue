<template>
  <div
    class="ticket-card"
    :class="{ urgent: isUrgent }"
    @click="$emit('click', ticket)"
  >
    <!-- Card Header -->
    <div class="card-header">
      <div class="ticket-number">
        <span class="ticket-id">#{{ ticket.ticketNumber || ticket.id }}</span>
        <span class="ticket-time">{{ formatTime(ticket.createdAt) }}</span>
      </div>
      <div class="ticket-badges">
        <span :class="['status-badge', `status-${ticket.status}`]">
          {{ formatStatus(ticket.status) }}
        </span>
        <span :class="['payment-badge', `payment-${ticket.paymentStatus}`]">
          {{ formatPaymentStatus(ticket.paymentStatus) }}
        </span>
      </div>
    </div>
    
    <!-- Customer & Table Info -->
    <div class="card-info">
      <div class="info-row">
        <span class="info-label">Customer:</span>
        <span class="info-value">{{ ticket.client?.name || 'Walk-in' }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Table:</span>
        <span class="info-value">{{
          ticket.table?.number || ticket.table?.name || 'N/A'
        }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Items:</span>
        <span class="info-value"
          >{{ ticket.ticketLines?.length || 0 }} items</span
        >
      </div>
      
      <!-- ✅ NEW: User Information -->
      <div v-if="ticket.createUser" class="info-row">
        <span class="info-label">Created by:</span>
        <span class="info-value">{{ ticket.createUser?.cus_name || ticket.createUser?.name || 'N/A' }}</span>
      </div>
      
      <div v-if="ticket.cancelUser" class="info-row">
        <span class="info-label">Cancelled by:</span>
        <span class="info-value text-error">{{ ticket.cancelUser?.cus_name || ticket.cancelUser?.name || 'N/A' }}</span>
      </div>
      
      <div v-if="ticket.updateUser && ticket.status !== 'pending'" class="info-row">
        <span class="info-label">Updated by:</span>
        <span class="info-value text-muted">{{ ticket.updateUser?.cus_name || ticket.updateUser?.name || 'N/A' }}</span>
      </div>
    </div>
    
    <!-- Order Summary -->
    <div class="card-summary">
      <div class="summary-total">
        <span class="total-label">Total:</span>
        <span class="total-amount">{{ formatPrice(ticket.total) }}</span>
      </div>

      <!-- ✅ Notes Preview Section -->
      <div v-if="ticket.notes" class="ticket-notes-preview" @click.stop>
        <span class="notes-icon">📝</span>
        <span class="notes-text">{{ truncateNotes(ticket.notes) }}</span>
        <button
          @click="$emit('edit-notes', ticket)"
          class="notes-edit-btn"
          title="Edit notes"
        >
          ✏️
        </button>
      </div>

      <!-- ✅ Add Notes Button (when no notes exist) -->
      <div v-else class="ticket-notes-empty" @click.stop>
        <button @click="$emit('add-notes', ticket)" class="add-notes-btn">
          <span class="btn-icon">📝</span>
          <span>Add Notes</span>
        </button>
      </div>
    </div>
    
    <!-- Quick Actions -->
    <div class="card-actions" @click.stop>
      <button
        v-if="ticket.status === 'ready'"
        @click="$emit('update-status', ticket.id, 'served')"
        class="action-btn btn-served"
      >
        Mark Served
      </button>
      <button
        v-if="ticket.status === 'served' && ticket.paymentStatus === 'pending'"
        @click="$emit('process-payment', ticket.id)"
        class="action-btn btn-payment"
      >
        Process Payment
      </button>

      <!-- ✅ Notes Button in Actions -->
      <button
        @click="
          ticket.notes
            ? $emit('edit-notes', ticket)
            : $emit('add-notes', ticket)
        "
        class="action-btn btn-notes"
        :class="{ 'has-notes': ticket.notes }"
      >
        <span class="btn-icon">📝</span>
        {{ ticket.notes ? 'Edit Notes' : 'Add Notes' }}
      </button>

      <!-- ✅ NEW: Print Bar Button -->
      <button
        v-if="!['paid', 'refunded', 'cancel'].includes(ticket.status)"
        @click="$emit('print-bar', ticket)"
        class="action-btn btn-print-bar"
        title="Print Bar/Kitchen Ticket"
      >
        <span class="btn-icon">🍹</span>
        Print Bar
      </button>

      <!-- Existing Print Button -->
      <button @click="$emit('print', ticket)" class="action-btn btn-print">
        <span class="btn-icon">🖨️</span>
        Print
      </button>

      <button
        v-if="ticket.status !== 'cancel'"
        @click="$emit('update-status', ticket.id, 'cancel')"
        class="action-btn btn-cancel"
      >
        Cancel
      </button>
      <button
        v-if="!['paid', 'cancel', 'void'].includes(ticket.status)"
        @click="handleAddItem"
        class="action-btn btn-add-item"
        :disabled="['paid', 'cancel', 'void'].includes(ticket.status)"
      >
        <span class="btn-icon">➕</span>
        Add Item
      </button>
    </div>
    
    <!-- Urgency Indicator -->
    <div v-if="isUrgent" class="urgency-indicator">
      <span class="urgency-icon">⚠️</span>
      <span class="urgency-text">{{ urgencyReason }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketCard',
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isUrgent() {
      const now = new Date()
      const createdAt = new Date(this.ticket.createdAt)
      const minutesAgo = (now - createdAt) / (1000 * 60)
      return (
        (this.ticket.status === 'preparing' && minutesAgo > 15) ||
        (this.ticket.status === 'ready' && minutesAgo > 5)
      )
    },
    urgencyReason() {
      const now = new Date()
      const createdAt = new Date(this.ticket.createdAt)
      const minutesAgo = Math.floor((now - createdAt) / (1000 * 60))
      if (this.ticket.status === 'preparing') {
        return `Preparing for ${minutesAgo} minutes`
      } else if (this.ticket.status === 'ready') {
        return `Ready for ${minutesAgo} minutes`
      }
      return ''
    },
  },
  methods: {
    handleAddItem() {
      this.$emit('add-item', {
        ticketId: this.ticket.id,
        tableId: this.ticket.tableId || this.ticket.table?.id || null,
        ticket: this.ticket,
      })
    },
    formatTime(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
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
        cancel: 'Cancelled',
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
    truncateNotes(notes) {
      if (!notes) return ''
      return notes.length > 60 ? notes.substring(0, 60) + '...' : notes
    },
  },
}
</script>

<style scoped>
.ticket-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-left: 4px solid #e0e0e0;
}

.ticket-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.ticket-card.urgent {
  border-left-color: #ff9800;
  background: linear-gradient(135deg, #fff8e1 0%, #ffffff 100%);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.ticket-number {
  display: flex;
  flex-direction: column;
}

.ticket-id {
  font-weight: bold;
  font-size: 1.1rem;
  color: #1976d2;
}

.ticket-time {
  font-size: 0.875rem;
  color: #666;
  margin-top: 2px;
}

.ticket-badges {
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: flex-end;
}

.status-badge,
.payment-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-pending { background: #fff3e0; color: #f57c00; }
.status-preparing { background: #e3f2fd; color: #1976d2; }
.status-ready { background: #e8f5e8; color: #388e3c; }
.status-served { background: #f3e5f5; color: #7b1fa2; }
.status-paid { background: #e8f5e8; color: #2e7d32; }
.status-cancel { background: #ffebee; color: #d32f2f; }

.payment-pending { background: #fff3e0; color: #f57c00; }
.payment-paid { background: #e8f5e8; color: #2e7d32; }
.payment-refunded { background: #f3e5f5; color: #7b1fa2; }

.card-info {
  margin-bottom: 12px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 0.875rem;
}

.info-label {
  color: #666;
  font-weight: 500;
}

.info-value {
  color: #333;
  font-weight: 600;
}

.text-error {
  color: #d32f2f !important;
}

.text-muted {
  color: #9e9e9e !important;
  font-weight: 400 !important;
}

.card-summary {
  margin-bottom: 12px;
  padding-top: 8px;
  border-top: 1px solid #f0f0f0;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.total-label {
  font-weight: 500;
  color: #666;
}

.total-amount {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1976d2;
}

.ticket-notes-preview {
  display: flex;
  align-items: center;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid #2196f3;
  margin-top: 8px;
}

.notes-icon {
  margin-right: 8px;
}

.notes-text {
  flex: 1;
  font-size: 0.875rem;
  color: #555;
  line-height: 1.4;
}

.notes-edit-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.notes-edit-btn:hover {
  background-color: #e3f2fd;
}

.ticket-notes-empty {
  margin-top: 8px;
}

.add-notes-btn {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background: #f5f5f5;
  border: 1px dashed #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  color: #666;
  transition: all 0.2s;
  width: 100%;
  justify-content: center;
}

.add-notes-btn:hover {
  background: #e3f2fd;
  border-color: #2196f3;
  color: #1976d2;
}

.btn-icon {
  margin-right: 6px;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.action-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-served {
  background: #4caf50;
  color: white;
}

.btn-served:hover {
  background: #388e3c;
}

.btn-payment {
  background: #2196f3;
  color: white;
}

.btn-payment:hover {
  background: #1976d2;
}

.btn-notes {
  background: #ff9800;
  color: white;
}

.btn-notes:hover {
  background: #f57c00;
}

.btn-notes.has-notes {
  background: #4caf50;
}

.btn-notes.has-notes:hover {
  background: #388e3c;
}

.btn-print-bar {
  background: #9c27b0;
  color: white;
}

.btn-print-bar:hover {
  background: #7b1fa2;
}

.btn-print {
  background: #607d8b;
  color: white;
}

.btn-print:hover {
  background: #546e7a;
}

.btn-cancel {
  background: #f44336;
  color: white;
}

.btn-cancel:hover {
  background: #d32f2f;
}

.btn-add-item {
  background: #4caf50;
  color: white;
}

.btn-add-item:hover:not(:disabled) {
  background: #388e3c;
}

.btn-add-item:disabled {
  background: #cccccc;
  color: #666;
  cursor: not-allowed;
}

.urgency-indicator {
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 6px 8px;
  background: #fff3e0;
  border-radius: 6px;
  border-left: 3px solid #ff9800;
}

.urgency-icon {
  margin-right: 6px;
}

.urgency-text {
  font-size: 0.75rem;
  color: #e65100;
  font-weight: 500;
}
</style>