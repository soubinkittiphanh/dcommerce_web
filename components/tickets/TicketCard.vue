<template>
  <v-card class="ticket-card-modern mb-3 overflow-hidden" :class="{ 'urgent-card': isUrgent }" elevation="2" hover
    @click="$emit('click', ticket)">
    <!-- Card Header -->
    <v-card-title class="pa-3 d-flex justify-space-between align-start">
      <div class="d-flex flex-column">
        <span class="text-h6 primary--text font-weight-bold">
          Q{{ getQueNo(ticket.ticketNumber) }}
          <span class="text-subtitle-2 grey--text ml-1">#{{ ticket.ticketNumber || ticket.id }}</span>
        </span>
        <span class="text-caption grey--text">
          <v-icon x-small class="mr-1">mdi-clock-outline</v-icon>
          {{ formatTime(ticket.createdAt) }}
        </span>
      </div>
      <div class="d-flex flex-column align-end">
        <v-chip :color="getStatusColor(ticket.status)" text-color="white" x-small class="mb-1 font-weight-bold">
          {{ formatStatus(ticket.status) }}
        </v-chip>
        <v-chip :color="getPaymentStatusColor(ticket.paymentStatus)" outlined x-small class="font-weight-bold">
          {{ formatPaymentStatus(ticket.paymentStatus) }}
        </v-chip>
      </div>
    </v-card-title>

    <v-divider class="mx-3"></v-divider>

    <!-- Info Section -->
    <v-card-text class="pa-3 pb-0">
      <v-row dense>
        <v-col cols="6">
          <div class="info-item mb-2">
            <div class="text-caption grey--text">Customer</div>
            <div class="text-subtitle-2 font-weight-bold truncate-text">
              <v-icon small left color="primary">mdi-account</v-icon>
              {{ ticket.client?.name || 'Walk-in' }}
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="info-item mb-2 text-right">
            <div class="text-caption grey--text">Table / Area</div>
            <div class="text-subtitle-2 font-weight-bold">
              <v-icon small left color="primary">mdi-table-furniture</v-icon>
              {{ ticket.table?.number || ticket.table?.name || 'N/A' }}
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Users Info -->
      <div class="users-info mt-1">
        <v-tooltip bottom v-if="ticket.createUser">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on" class="text-caption grey--text mr-2">
              <v-icon x-small>mdi-plus-circle-outline</v-icon>
              {{ ticket.createUser?.cus_name || ticket.createUser?.name }}
            </span>
          </template>
          <span>Created by: {{ ticket.createUser?.cus_name || ticket.createUser?.name }}</span>
        </v-tooltip>

        <v-tooltip bottom v-if="ticket.cancelUser">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on" class="text-caption error--text mr-2">
              <v-icon x-small color="error">mdi-cancel</v-icon>
              {{ ticket.cancelUser?.cus_name || ticket.cancelUser?.name }}
            </span>
          </template>
          <span>Cancelled by: {{ ticket.cancelUser?.cus_name || ticket.cancelUser?.name }}</span>
        </v-tooltip>
      </div>

      <!-- Notes Preview -->
      <div v-if="ticket.notes" class="ticket-notes-box mt-2 pa-2 rounded" @click.stop>
        <div class="d-flex justify-space-between align-center">
          <span class="text-caption font-weight-bold d-flex align-center">
            <v-icon x-small color="orange" class="mr-1">mdi-note-text</v-icon>
            Notes
          </span>
          <v-btn icon x-small @click="$emit('edit-notes', ticket)">
            <v-icon x-small>mdi-pencil</v-icon>
          </v-btn>
        </div>
        <div class="notes-content text-caption grey--text text--darken-2">
          {{ truncateNotes(ticket.notes) }}
        </div>
      </div>
      <div v-else class="mt-2" @click.stop>
        <v-btn text x-small color="grey" block class="add-notes-btn-modern" @click="$emit('add-notes', ticket)">
          <v-icon x-small left>mdi-note-plus-outline</v-icon>
          Add Notes
        </v-btn>
      </div>
    </v-card-text>

    <!-- Footer Summary -->
    <v-card-text class="pa-3 pt-2">
      <div class="d-flex justify-space-between align-center py-2 border-top">
        <span class="text-subtitle-2 grey--text">Total Amount</span>
        <span class="text-h6 font-weight-bold primary--text">
          {{ formatPrice(ticket.total) }}
        </span>
      </div>

      <v-divider class="mb-3"></v-divider>

      <!-- Actions -->
      <div class="d-flex flex-wrap gap-2" @click.stop>
        <v-btn v-if="ticket.status === 'ready'" color="success" small depressed
          @click="$emit('update-status', ticket.id, 'served')">
          Serve
        </v-btn>

        <v-btn v-if="ticket.status === 'served' && ticket.paymentStatus === 'pending'" color="primary" small depressed
          @click="$emit('process-payment', ticket.id)">
          Pay
        </v-btn>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" v-if="!['paid', 'refunded', 'cancel'].includes(ticket.status)"
              color="purple" small icon outlined @click="$emit('print-bar', ticket)">
              <v-icon small>mdi-silverware-fork-knife</v-icon>
            </v-btn>
          </template>
          <span>Print Kitchen</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="blue-grey" small icon outlined @click="$emit('print', ticket)">
              <v-icon small>mdi-printer</v-icon>
            </v-btn>
          </template>
          <span>Print Receipt</span>
        </v-tooltip>

        <v-tooltip bottom v-if="!['paid', 'cancel', 'void'].includes(ticket.status)">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="success" small icon outlined @click="handleAddItem">
              <v-icon small>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>Add Item</span>
        </v-tooltip>

        <v-spacer></v-spacer>

        <v-btn v-if="ticket.status !== 'cancel' && ticket.status !== 'paid'" color="error" small icon text
          @click="$emit('update-status', ticket.id, 'cancel')">
          <v-icon small>mdi-delete-outline</v-icon>
        </v-btn>
      </div>
    </v-card-text>

    <!-- Urgency Ribbon -->
    <div v-if="isUrgent" class="urgency-ribbon">
      <span>URGENT</span>
    </div>
  </v-card>
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
    getQueNo(ticketNumber) {
      const parts = ticketNumber?.split('-')[0]?.split('/')
      return parts?.length === 2
        ? (parseInt(parts[0]) * parseInt(parts[1])).toString()
        : ''
    },
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
    getStatusColor(status) {
      const colors = {
        pending: 'warning',
        preparing: 'primary',
        ready: 'success',
        served: 'purple',
        paid: 'success',
        cancel: 'error',
      }
      return colors[status] || 'grey'
    },
    getPaymentStatusColor(status) {
      return status === 'paid' ? 'success' : 'warning'
    },
    truncateNotes(notes) {
      if (!notes) return ''
      return notes.length > 60 ? notes.substring(0, 60) + '...' : notes
    },
  },
}
</script>

<style scoped>
.ticket-card-modern {
  border-radius: 12px !important;
  transition: all 0.2s ease !important;
  border: 1px solid #f0f4f8 !important;
  position: relative;
}

.ticket-card-modern:hover {
  border-color: var(--v-primary-base) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

.urgent-card {
  border-left: 4px solid var(--v-error-base) !important;
  background: linear-gradient(to right, #fff5f5, #ffffff) !important;
}

.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ticket-notes-box {
  background-color: #fff9f0;
  border: 1px solid #ffe8cc;
}

.notes-content {
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.border-top {
  border-top: 1px dashed #e0e0e0;
}

.gap-2 {
  gap: 8px;
}

.add-notes-btn-modern {
  border: 1px dashed #e0e0e0;
  background-color: #fafafa;
}

.add-notes-btn-modern:hover {
  border-color: var(--v-primary-base);
  background-color: #f0f7ff;
}

.urgency-ribbon {
  position: absolute;
  top: 11px;
  right: -30px;
  background-color: var(--v-error-base);
  color: white;
  padding: 2px 35px;
  font-size: 0.65rem;
  font-weight: bold;
  transform: rotate(45deg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
</style>