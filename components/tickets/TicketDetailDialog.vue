<template>
  <v-dialog v-model="internalShow" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card class="overflow-hidden d-flex flex-column" height="100vh">
      <!-- Header -->
      <v-card-title
        class="pa-4 primary darken-1 white--text d-flex justify-space-between align-center border-bottom flex-grow-0">
        <div class="d-flex align-center">
          <v-avatar color="white" size="48" class="mr-4">
            <v-icon color="primary">mdi-ticket-account</v-icon>
          </v-avatar>
          <div>
            <div class="text-h5 font-weight-bold">
              Ticket #{{ ticket?.id }}
            </div>
            <div class=" white--text opacity-80">
              Created on {{ formatDate(ticket?.createdAt) }}
            </div>
          </div>
        </div>
        <v-btn icon @click="$emit('close')" large color="white">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-0 flex-grow-1 overflow-y-auto bg-slate-50">
        <div v-if="ticket" class="pa-6">
          <!-- Status & Main Info -->
          <v-row class="mb-4">
            <v-col cols="12" sm="6">
              <div class=" font-weight-bold grey--text text-uppercase mb-2">Status & Payment</div>
              <div class="d-flex gap-2">
                <v-chip :color="getStatusColor(ticket.status)" text-color="white" class="font-weight-bold">
                  {{ formatStatus(ticket.status) }}
                </v-chip>
                <v-chip :color="getPaymentStatusColor(ticket.paymentStatus)" outlined class="font-weight-bold">
                  {{ formatPaymentStatus(ticket.paymentStatus) }}
                </v-chip>
              </div>
            </v-col>
            <v-col cols="12" sm="6" class="text-sm-right">
              <div class=" font-weight-bold grey--text text-uppercase mb-2">Table / Area</div>
              <div class="text-h5 font-weight-black primary--text">
                <v-icon color="primary" class="mr-1">mdi-table-furniture</v-icon>
                {{ ticket.table?.number || ticket.table?.name || 'Walk-in' }}
              </div>
            </v-col>
          </v-row>

          <v-divider class="my-6"></v-divider>

          <!-- Information Grid -->
          <v-row>
            <!-- Customer Info -->
            <v-col cols="12" md="6">
              <v-card outlined class="rounded-lg pa-4 h-100 bg-slate-50">
                <div class="d-flex align-center mb-4">
                  <v-icon color="primary" class="mr-2">mdi-account-details-outline</v-icon>
                  <span class="text-subtitle-1 font-weight-bold">Customer Details</span>
                </div>
                <div v-if="ticket.client">
                  <div class="info-row-modern mb-2">
                    <span class="label">Name</span>
                    <span class="value">{{ ticket.client.name }}</span>
                  </div>
                  <div v-if="ticket.client.phone" class="info-row-modern mb-2">
                    <span class="label">Phone</span>
                    <span class="value">{{ ticket.client.phone }}</span>
                  </div>
                  <div v-if="ticket.client.email" class="info-row-modern">
                    <span class="label">Email</span>
                    <span class="value">{{ ticket.client.email }}</span>
                  </div>
                </div>
                <div v-else class="text-center py-4 grey--text italic">
                  Walk-in Customer
                </div>
              </v-card>
            </v-col>

            <!-- Timestamps & Meta -->
            <v-col cols="12" md="6">
              <v-card outlined class="rounded-lg pa-4 h-100 bg-slate-50">
                <div class="d-flex align-center mb-4">
                  <v-icon color="primary" class="mr-2">mdi-history</v-icon>
                  <span class="text-subtitle-1 font-weight-bold">History & Timeline</span>
                </div>
                <div class="info-row-modern mb-2">
                  <span class="label text-no-wrap">Order Placed</span>
                  <span class="value">{{ formatDate(ticket.createdAt) }}</span>
                </div>
                <div class="info-row-modern mb-2">
                  <span class="label text-no-wrap">Last Update</span>
                  <span class="value">{{ formatDate(ticket.updatedAt || ticket.updateTimestamp) }}</span>
                </div>
                <div v-if="ticket.createUser" class="info-row-modern">
                  <span class="label text-no-wrap">By User</span>
                  <span class="value">{{ ticket.createUser.cus_name || ticket.createUser.name }}</span>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Order Items Table -->
          <div class="mt-8 mb-4">
            <div class="d-flex align-center justify-space-between mb-4">
              <div class="text-h6 font-weight-bold grey--text text--darken-3">
                <v-icon color="primary" class="mr-2">mdi-reproduction</v-icon>
                Order Items ({{ ticket.ticketLines?.length || 0 }})
              </div>
            </div>

            <v-card outlined class="rounded-lg overflow-hidden">
              <v-simple-table>
                <template v-slot:default>
                  <thead class="grey lighten-4">
                    <tr>
                      <th class="text-left font-weight-bold">Product</th>
                      <th class="text-center font-weight-bold" width="80">Qty</th>
                      <th class="text-right font-weight-bold" width="150">Price</th>
                      <th class="text-right font-weight-bold" width="150">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="line in ticket.ticketLines" :key="line.id" class="item-row-modern">
                      <td>
                        <div class="font-weight-bold">{{ line.product.pro_name || 'Unknown Item' }}</div>
                        <div v-if="line.notes" class=" orange--text italic">
                          <v-icon x-small color="orange">mdi-information-outline</v-icon>
                          {{ line.notes }}
                        </div>
                      </td>
                      <td class="text-center">{{ line.quantity }}</td>
                      <td class="text-right">{{ formatPrice(line.unitPrice) }}</td>
                      <td class="text-right font-weight-bold primary--text">
                        {{ formatPrice(line.total || line.quantity * line.unitPrice) }}
                      </td>
                    </tr>
                    <tr v-if="!ticket.ticketLines || ticket.ticketLines.length === 0">
                      <td colspan="4" class="text-center py-8 grey--text italic">No items in this order</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </div>

          <!-- Summary Cards -->
          <v-row justify="end">
            <v-col cols="12" md="5">
              <v-card elevation="0" color="primary lighten-5" class="rounded-lg pa-4 border-primary">
                <div class="d-flex justify-space-between mb-2">
                  <span class="grey--text text--darken-1">Subtotal</span>
                  <span class="font-weight-medium">{{ formatPrice(ticket.subtotal) }}</span>
                </div>
                <div class="d-flex justify-space-between mb-2">
                  <span class="grey--text text--darken-1">Tax</span>
                  <span>{{ formatPrice(ticket.tax) }}</span>
                </div>
                <v-divider class="my-3 opacity-50"></v-divider>
                <div class="d-flex justify-space-between align-center">
                  <span class="text-h6 font-weight-bold primary--text">Total</span>
                  <span class="text-h5 font-weight-black primary--text">{{ formatPrice(ticket.total) }}</span>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Notes Section -->
          <div v-if="ticket.notes" class="mt-8">
            <div class="text-subtitle-1 font-weight-bold mb-2 d-flex align-center">
              <v-icon color="orange" class="mr-2">mdi-note-text-outline</v-icon>
              Order Notes
            </div>
            <v-alert icon="mdi-information-outline" color="orange lighten-5" border="left"
              class="orange--text text--darken-4 rounded-lg">
              {{ ticket.notes }}
            </v-alert>
          </div>

          <!-- Payment Info if available -->
          <div v-if="ticket.payment" class="mt-8">
            <div class="text-subtitle-1 font-weight-bold mb-4 d-flex align-center">
              <v-icon color="success" class="mr-2">mdi-credit-card-check-outline</v-icon>
              Payment Information
            </div>
            <v-card outlined class="rounded-lg pa-4 bg-slate-50 border-success">
              <v-row dense>
                <v-col cols="6" sm="3">
                  <div class=" grey--text">Method</div>
                  <div class="font-weight-bold">{{ ticket.payment.method || 'N/A' }}</div>
                </v-col>
                <v-col cols="6" sm="3">
                  <div class=" grey--text">Amount Paid</div>
                  <div class="font-weight-bold">{{ formatPrice(ticket.payment.amount) }}</div>
                </v-col>
                <v-col cols="12" sm="6">
                  <div class=" grey--text">Transaction ID</div>
                  <div class="font-weight-bold font-mono">{{ ticket.payment.transactionId || 'Internal/Cash' }}</div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <!-- Actions -->
      <v-card-actions class="pa-4 white elevation-4 border-top flex-grow-0">
        <v-spacer></v-spacer>
        <v-btn text large color="grey" @click="$emit('close')" class="px-6 rounded-lg mr-2">
          Close
        </v-btn>

        <v-btn color="blue-grey text-white" large depressed @click="$emit('print', ticket)"
          class="px-6 rounded-lg mr-2">
          <v-icon left>mdi-printer</v-icon>
          Print Receipt
        </v-btn>

        <v-btn v-if="ticket?.status === 'pending'" color="info" large depressed
          @click="$emit('update-status', ticket.id, 'preparing')" class="px-6 rounded-lg">
          <v-icon left>mdi-play</v-icon>
          Start Preparing
        </v-btn>

        <v-btn v-if="ticket?.status === 'preparing'" color="success" large depressed
          @click="$emit('update-status', ticket.id, 'ready')" class="px-6 rounded-lg">
          <v-icon left>mdi-check-all</v-icon>
          Mark Ready
        </v-btn>

        <v-btn v-if="ticket?.status === 'ready'" color="purple text-white" large depressed
          @click="$emit('update-status', ticket.id, 'served')" class="px-6 rounded-lg">
          <v-icon left>mdi-room-service-outline</v-icon>
          Mark Served
        </v-btn>

        <v-btn v-if="ticket?.status === 'served' && ticket?.paymentStatus === 'pending'" color="primary" large depressed
          @click="$emit('process-payment', ticket.id)" class="px-6 rounded-lg mr-2">
          <v-icon left>mdi-cash-multiple</v-icon>
          Process Payment
        </v-btn>

        <v-btn v-if="ticket?.status !== 'cancel' && canCancelPermission" color="error" large outlined
          @click="$emit('update-status', ticket.id, 'cancel')" class="px-6 rounded-lg">
          <v-icon left>mdi-cancel</v-icon>
          Cancel Ticket
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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

  computed: {
    internalShow: {
      get() { return !!this.ticket },
      set(val) { if (!val) this.$emit('close') }
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
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

    canCancelPermission() {
      const user = this.$auth.user;
      const groupPermission = user?.userGroup?.ticketCancel;
      return !!groupPermission;
    },
  },
}
</script>

<style scoped>
.gap-2 {
  gap: 8px;
}

.border-bottom {
  border-bottom: 1px solid #e0e0e0 !important;
}

.border-primary {
  border: 1px solid var(--v-primary-lighten4) !important;
}

.border-success {
  border: 1px solid var(--v-success-lighten4) !important;
}

.bg-slate-50 {
  background-color: #f8fafc;
}

.font-mono {
  font-family: monospace;
}

.h-100 {
  height: 100%;
}

.info-row-modern {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-row-modern .label {
  color: #64748b;
  font-size: 0.875rem;
}

.info-row-modern .value {
  color: #1e293b;
  font-weight: 600;
  text-align: right;
}

.item-row-modern:hover {
  background-color: #f1f5f9;
}

.opacity-50 {
  opacity: 0.5;
}
</style>