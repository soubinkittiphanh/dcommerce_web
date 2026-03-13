<template>
  <div class="tickets-page">
    <v-dialog v-model="cancelDialog.show" max-width="500" persistent>
      <v-card>
        <v-card-title class="text-h6 pa-4">
          <v-icon color="warning" class="mr-2">mdi-alert-circle</v-icon>
          Cancel Ticket #{{ cancelDialog.ticketId }}
        </v-card-title>
        <v-card-text class="pb-0">
          <v-alert type="warning" variant="tonal" class="mb-4">
            ການຍົກເລີກ ticket ນີ້ບໍ່ສາມາດຍົກເລີກການດຳເນີນການໄດ້
            <br />This action cannot be undone
          </v-alert>
          <v-form ref="cancelForm" v-model="cancelDialog.valid">
            <v-textarea v-model="cancelDialog.reason" label="ເຫດຜົນໃນການຍົກເລີກ / Cancellation Reason *"
              placeholder="ກະລຸນາລະບຸເຫດຜົນໃນການຍົກເລີກ ticket..." rows="4" counter="500"
              :rules="cancelDialog.reasonRules" variant="outlined" required></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" variant="text" @click="closeCancelDialog" :disabled="cancelDialog.loading">Cancel</v-btn>
          <v-btn color="error" variant="elevated" @click="confirmCancellation" :loading="cancelDialog.loading"
            :disabled="!cancelDialog.valid">
            <v-icon start>mdi-cancel</v-icon> Confirm Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <POSDialog :show="showPOSDialog" :table-id="selectedTableId" :ticket="selectedTicket" @close="closePOSDialog"
      @ticket-updated="handleTicketUpdated" @reload-data="fetchTickets" />

    <NotesDialog :show="showNotesDialog" :notes="selectedTicketNotes" :existing-notes="selectedTicket?.notes"
      title="Edit Ticket Notes" @close="closeNotesDialog" @save="handleSaveTicketNotes" />

    <v-container fluid class="pa-6">
      <!-- Page Header -->
      <v-row align="center" class="mb-6">
        <v-col cols="12" md="6">
          <h1 class="text-h4 font-weight-bold grey--text text--darken-3">
            <v-icon large color="primary" class="mr-2">mdi-ticket-confirmation-outline</v-icon>
            Tickets Management
          </h1>
          <div class="text-subtitle-1 grey--text">Monitor and manage all active service tickets</div>
        </v-col>
        <v-col cols="12" md="6" class="text-md-right">
          <v-btn color="success" x-large depressed @click="createNewTicket" class="mr-2 px-6">
            <v-icon left>mdi-plus-circle</v-icon>
            New Ticket
          </v-btn>
          <v-btn color="primary" outlined x-large @click="fetchTickets">
            <v-icon left>mdi-refresh</v-icon>
            Refresh
          </v-btn>
        </v-col>
      </v-row>

      <!-- Search & Filters -->
      <v-card elevation="2" class="rounded-xl mb-8 border-light">
        <v-card-text class="pa-6">
          <v-row align="center" dense>
            <v-col cols="12" md="4" lg="5">
              <v-text-field v-model="searchQuery" prepend-inner-icon="mdi-magnify" label="Search tickets"
                placeholder="Search by ID, name, or table..." outlined hide-details dense
                class="rounded-lg"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="2">
              <v-select v-model="statusFilter" :items="['pending', 'preparing', 'ready', 'served', 'paid', 'cancel']"
                label="Status" outlined hide-details dense class="rounded-lg" clearable></v-select>
            </v-col>
            <v-col cols="12" sm="4" md="2">
              <v-text-field v-model="startDate" type="date" label="From Date" outlined hide-details dense
                class="rounded-lg"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="2">
              <v-text-field v-model="endDate" type="date" label="To Date" outlined hide-details dense
                class="rounded-lg"></v-text-field>
            </v-col>
            <v-col cols="12" sm="1" md="1" v-if="hasActiveFilters">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" icon color="error" large @click="clearFilters">
                    <v-icon>mdi-filter-off-outline</v-icon>
                  </v-btn>
                </template>
                <span>Clear all filters</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- Quick Stats -->
      <v-row class="mb-8 overflow-x-auto flex-nowrap px-1">
        <v-col v-for="(val, key) in statCards" :key="key" cols="auto" style="min-width: 180px">
          <v-card elevation="2" :class="`stat-card-premium border-${val.color}`">
            <v-card-text class="pa-4">
              <div class="d-flex align-center justify-space-between mb-2">
                <v-avatar :color="`${val.color} lighten-4`" size="40">
                  <v-icon :color="val.color">{{ val.icon }}</v-icon>
                </v-avatar>
                <div class="text-h4 font-weight-black" :class="`${val.color}--text`">{{ val.value }}</div>
              </div>
              <div class="text-caption font-weight-bold grey--text text-uppercase letter-spacing-1">{{ val.label }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Loading State -->
      <v-row v-if="loading" justify="center" class="my-12">
        <v-col cols="12" class="text-center">
          <v-progress-circular indeterminate color="primary" size="64" width="6"></v-progress-circular>
          <div class="text-h6 mt-4 grey--text">Fetching latest tickets...</div>
        </v-col>
      </v-row>

      <!-- Empty State -->
      <v-row v-else-if="filteredTickets.length === 0" justify="center" class="my-12">
        <v-col cols="12" md="6" class="text-center">
          <v-icon size="120" color="grey lighten-4">mdi-ticket-outline</v-icon>
          <h2 class="text-h5 grey--text text--darken-2 mt-4">No tickets found</h2>
          <p class="grey--text subtitle-1">Try adjusting your filters or search query</p>
          <v-btn color="primary" text @click="clearFilters">Clear All Filters</v-btn>
        </v-col>
      </v-row>

      <!-- Tickets Grid -->
      <v-row v-else>
        <v-col v-for="ticket in filteredTickets" :key="ticket.id" cols="12" sm="6" md="4" lg="3">
          <TicketCard :ticket="ticket" @click="viewTicketInDialog(ticket)" @add-item="handleAddItem"
            @add-notes="openTicketNotes" @edit-notes="openTicketNotes" @update-status="updateTicketStatus"
            @process-payment="processPayment" @print="handlePrintCustomer" @print-bar="handlePrintBar" />
        </v-col>
      </v-row>

      <!-- Pagination -->
      <v-row v-if="pagination.totalPages > 1" justify="center" class="mt-8">
        <v-col cols="12">
          <v-pagination v-model="pagination.currentPage" :length="pagination.totalPages" :total-visible="7"
            @input="changePage" circle></v-pagination>
        </v-col>
      </v-row>

      <TicketDetailDialog v-if="showDialog" :ticket="selectedTicket" @close="showDialog = false"
        @update-status="updateTicketStatus" @process-payment="processPayment" @print="handlePrintCustomer" />
    </v-container>
  </div>
</template>
<script>
import TicketCard from '~/components/tickets/TicketCard.vue'
import TicketDetailDialog from '~/components/tickets/TicketDetailDialog.vue'
import POSDialog from '~/components/CAFE/POSDialog.vue'
import NotesDialog from '~/components/tickets/NotesDialog.vue'
import { ticketPrinter } from '~/utils/ticketPrinter'
import { getFormatNum } from '~/common/index'
import { mapGetters } from 'vuex'

export default {
  name: 'TicketsPage',
  components: { NotesDialog, POSDialog, TicketCard, TicketDetailDialog },

  data() {
    const today = new Date().toISOString().split('T')[0]
    return {
      cancelDialog: {
        show: false,
        ticketId: null,
        reason: '',
        valid: false,
        loading: false,
        reasonRules: [v => !!v || 'Required', v => (v && v.length >= 5) || 'Too short']
      },
      showNotesDialog: false,
      selectedTicket: null,
      selectedTicketNotes: '',
      updatingNotes: false,
      tickets: [],
      loading: true,
      searchQuery: '',
      statusFilter: '',
      paymentFilter: '',
      startDate: today,
      endDate: today,
      showDialog: false,
      showPOSDialog: false,
      selectedTableId: null,
      pagination: { currentPage: 1, totalPages: 1, limit: 20 },
      refreshInterval: null,
    }
  },

  computed: {
    ...mapGetters(['currentSelectedLocation', 'findAllprinters']),
    companyInfo() {
      // Find terminal and location info for printing
      // This is used for generating receipt headers
      const location = this.currentSelectedLocation;
      const company = location?.company;
      return {
        name: company?.name || 'Restaurant Name',
        address: company?.address || 'Vientiane, Laos',
        tel: company?.tel || '',
        email: company?.email || ''
      };
    },
    user() { return this.$auth.user || null },
    filteredTickets() {
      let filtered = this.tickets
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase()
        filtered = filtered.filter(t =>
          t.id.toString().includes(q) ||
          t.ticketNumber?.toLowerCase().includes(q) ||
          t.table?.name?.toLowerCase().includes(q)
        )
      }
      return filtered
    },
    hasActiveFilters() { return !!(this.searchQuery || this.statusFilter || this.paymentFilter) },
    stats() {
      return {
        total: this.tickets.length,
        pending: this.tickets.filter(t => t.status === 'pending').length,
        preparing: this.tickets.filter(t => t.status === 'preparing').length,
        ready: this.tickets.filter(t => t.status === 'ready').length,
        unpaid: this.tickets.filter(t => t.paymentStatus === 'pending').length,
      }
    },
    statCards() {
      const s = this.stats
      return [
        { label: 'Total Tickets', value: s.total, color: 'blue', icon: 'mdi-ticket-percent-outline' },
        { label: 'Pending', value: s.pending, color: 'orange', icon: 'mdi-clock-alert-outline' },
        { label: 'Preparing', value: s.preparing, color: 'blue-grey', icon: 'mdi-chef-hat' },
        { label: 'Ready to Serve', value: s.ready, color: 'success', icon: 'mdi-bell-ring-outline' },
        { label: 'Unpaid', value: s.unpaid, color: 'error', icon: 'mdi-cash-remove' },
      ]
    }
  },

  mounted() {
    this.fetchTickets()
    this.refreshInterval = setInterval(this.fetchTickets, 30000)
  },

  beforeDestroy() {
    clearInterval(this.refreshInterval)
  },

  methods: {
    // --- PRINTING ---
    handlePrintBar(ticket) {
      ticketPrinter.printBarInstant(ticket, {
        printers: this.findAllprinters,
        formatPrintTime: (date) => new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
        getQueNo: (num) => {
          const parts = num?.split('-')[0]?.split('/')
          return parts?.length === 2 ? (parseInt(parts[0]) * parseInt(parts[1])).toString() : num
        }
      })
      if (ticket.status === 'pending') this.updateTicketStatus(ticket.id, 'preparing')
      this.$toast.success(`Bar ticket #${ticket.id} printed`)
    },

    handlePrintCustomer(ticket) {
      ticketPrinter.printCustomerReceipt(ticket, {
        companyInfo: this.companyInfo,
        printers: this.findAllprinters,
        formatPrice: (amt) => getFormatNum(amt) + '₭',
        formatPrintDate: (date) => new Date(date).toLocaleDateString('en-GB'),
        formatPrintTime: (date) => new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        getQueNo: (num) => {
          const parts = num?.split('-')[0]?.split('/')
          return parts?.length === 2 ? (parseInt(parts[0]) * parseInt(parts[1])).toString() : num
        }
      })
      this.$toast.success('Receipt sent to printer')
    },

    // --- DIALOG CONTROLS (Fixes your errors) ---
    closeCancelDialog() {
      this.cancelDialog.show = false
      this.cancelDialog.ticketId = null
      this.cancelDialog.reason = ''
    },

    closeNotesDialog() {
      this.showNotesDialog = false
      this.selectedTicket = null
    },

    closePOSDialog() {
      this.showPOSDialog = false
      this.selectedTableId = null
    },

    closeDialog() {
      this.showDialog = false
    },

    // --- DATA ACTIONS ---
    async fetchTickets() {
      this.loading = true
      try {
        const params = {
          page: this.pagination.currentPage,
          limit: this.pagination.limit,
          locationId: this.currentSelectedLocation['id'] || 1,
          startDate: this.startDate,
          endDate: this.endDate,
          include: 'client,table,ticketLines,payment'
        }
        if (this.statusFilter) params.status = this.statusFilter
        const res = await this.$axios.get('/api/ticket/find', { params })
        this.tickets = res.data.data || res.data.tickets || []
        this.pagination.totalPages = res.data.pagination?.totalPages || 1
      } catch (e) {
        this.$toast.error('Failed to load tickets')
      } finally { this.loading = false }
    },

    async updateTicketStatus(ticketId, newStatus) {
      if (newStatus === 'cancel') {
        this.cancelDialog.ticketId = ticketId
        this.cancelDialog.show = true
        return
      }
      try {
        await this.$axios.patch(`/api/ticket/${ticketId}/status`, { status: newStatus })
        this.fetchTickets()
        this.$toast.success('Status updated')
      } catch (e) { this.$toast.error('Update failed') }
    },

    async confirmCancellation() {
      if (!this.$refs.cancelForm.validate()) return
      this.cancelDialog.loading = true
      try {
        await this.$axios.patch(`/api/ticket/${this.cancelDialog.ticketId}/status`, {
          status: 'cancel',
          cancelReason: this.cancelDialog.reason
        })
        this.closeCancelDialog()
        this.fetchTickets()
        this.$toast.success('Ticket cancelled')
      } finally { this.cancelDialog.loading = false }
    },

    openTicketNotes(ticket) {
      this.selectedTicket = ticket
      this.selectedTicketNotes = ticket.notes || ''
      this.showNotesDialog = true
    },

    async handleSaveTicketNotes(notes) {
      try {
        await this.$axios.patch(`/api/ticket/${this.selectedTicket.id}/notes`, { notes })
        this.fetchTickets()
        this.closeNotesDialog()
        this.$toast.success('Notes saved')
      } catch (e) { this.$toast.error('Failed to save notes') }
    },

    handleAddItem({ tableId, ticket }) {
      this.selectedTableId = tableId || 'walk-in'
      this.selectedTicket = ticket
      this.showPOSDialog = true
    },

    createNewTicket() {
      this.selectedTableId = 'walk-in'
      this.selectedTicket = null
      this.showPOSDialog = true
    },

    handleTicketUpdated() {
      this.fetchTickets()
    },

    viewTicketInDialog(ticket) {
      this.selectedTicket = ticket
      this.showDialog = true
    },

    processPayment(ticketId) {
      this.$router.push(`/admin/ticket/${ticketId}/payment`)
    },

    changePage(page) {
      this.pagination.currentPage = page
      this.fetchTickets()
    },

    clearFilters() {
      this.searchQuery = ''
      this.statusFilter = ''
      this.fetchTickets()
    },

    showToast(msg, type = 'success') {
      this.$toast[type](msg)
    }
  }
}
</script>

<style scoped>
/* ========================================
   🎨 PREMIUM TICKET ADMIN STYLES
   ======================================== */

.tickets-page {
  background-color: #f8fafc;
  min-height: 100vh;
}

.border-light {
  border: 1px solid #e2e8f0 !important;
}

.stat-card-premium {
  border-radius: 16px !important;
  border-left: 4px solid transparent;
  transition: all 0.3s ease;
}

.stat-card-premium:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
}

.border-blue {
  border-left-color: #3b82f6 !important;
}

.border-orange {
  border-left-color: #f59e0b !important;
}

.border-blue-grey {
  border-left-color: #64748b !important;
}

.border-success {
  border-left-color: #10b981 !important;
}

.border-error {
  border-left-color: #ef4444 !important;
}

.letter-spacing-1 {
  letter-spacing: 1px;
}

/* Scrollbar for stats on mobile */
.overflow-x-auto {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */
}

.overflow-x-auto::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari and Opera */
}
</style>