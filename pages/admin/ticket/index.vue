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
            <v-textarea
              v-model="cancelDialog.reason"
              label="ເຫດຜົນໃນການຍົກເລີກ / Cancellation Reason *"
              placeholder="ກະລຸນາລະບຸເຫດຜົນໃນການຍົກເລີກ ticket..."
              rows="4"
              counter="500"
              :rules="cancelDialog.reasonRules"
              variant="outlined"
              required
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" variant="text" @click="closeCancelDialog" :disabled="cancelDialog.loading">Cancel</v-btn>
          <v-btn color="error" variant="elevated" @click="confirmCancellation" :loading="cancelDialog.loading" :disabled="!cancelDialog.valid">
            <v-icon start>mdi-cancel</v-icon> Confirm Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <POSDialog
      :show="showPOSDialog"
      :table-id="selectedTableId"
      :ticket="selectedTicket"
      @close="closePOSDialog"
      @ticket-updated="handleTicketUpdated"
      @reload-data="fetchTickets"
    />

    <NotesDialog
      :show="showNotesDialog"
      :notes="selectedTicketNotes"
      :existing-notes="selectedTicket?.notes"
      title="Edit Ticket Notes"
      @close="closeNotesDialog"
      @save="handleSaveTicketNotes"
    />

    <div class="page-header">
      <h1>Tickets Management</h1>
      <div class="filters-container">
        <div class="filter-row">
          <input v-model="searchQuery" type="text" placeholder="Search by ID, name, or table..." class="search-input" />
        </div>
        <div class="filter-row">
          <div class="filters-group">
            <div class="filter-item">
              <label class="filter-label">Status</label>
              <select v-model="statusFilter" class="filter-select">
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="preparing">Preparing</option>
                <option value="ready">Ready</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            <div class="filter-item">
              <label class="filter-label">From Date</label>
              <input v-model="startDate" type="date" class="date-input" />
            </div>
            <div class="filter-item">
              <label class="filter-label">To Date</label>
              <input v-model="endDate" type="date" class="date-input" />
            </div>
            <div class="filter-actions" v-if="hasActiveFilters">
              <button @click="clearFilters" class="btn-clear">✖ Clear</button>
            </div>
          </div>
        </div>
        <div class="action-row">
          <div class="action-buttons">
            <button @click="createNewTicket" class="btn-create">➕ New Ticket</button>
            <button @click="fetchTickets" class="btn-refresh">↻ Refresh</button>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">{{ stats.total }}</div>
        <div class="stat-label">Total</div>
      </div>
      <div class="stat-card stat-pending"><div class="stat-value">{{ stats.pending }}</div><div class="stat-label">Pending</div></div>
      <div class="stat-card stat-preparing"><div class="stat-value">{{ stats.preparing }}</div><div class="stat-label">Preparing</div></div>
      <div class="stat-card stat-ready"><div class="stat-value">{{ stats.ready }}</div><div class="stat-label">Ready</div></div>
      <div class="stat-card stat-unpaid"><div class="stat-value">{{ stats.unpaid }}</div><div class="stat-label">Unpaid</div></div>
    </div>

    <div v-if="loading" class="state-container"><div class="spinner"></div></div>
    <div v-else-if="filteredTickets.length === 0" class="state-container empty">
      <div class="empty-icon">🎫</div>
      <h3>No tickets found</h3>
    </div>
    <div v-else class="tickets-grid">
      <TicketCard
        v-for="ticket in filteredTickets"
        :key="ticket.id"
        :ticket="ticket"
        @click="viewTicketInDialog(ticket)"
        @add-item="handleAddItem"
        @add-notes="openTicketNotes"
        @update-status="updateTicketStatus"
        @process-payment="processPayment"
        @print="handlePrintCustomer"
        @print-bar="handlePrintBar"
      />
    </div>

    <div v-if="pagination.totalPages > 1" class="pagination">
      <button @click="changePage(pagination.currentPage - 1)" :disabled="pagination.currentPage === 1" class="pagination-btn">← Prev</button>
      <span class="pagination-info">Page {{ pagination.currentPage }} of {{ pagination.totalPages }}</span>
      <button @click="changePage(pagination.currentPage + 1)" :disabled="pagination.currentPage === pagination.totalPages" class="pagination-btn">Next →</button>
    </div>

    <TicketDetailDialog
      v-if="showDialog"
      :ticket="selectedTicket"
      @close="showDialog = false"
      @update-status="updateTicketStatus"
      @process-payment="processPayment"
      @print="handlePrintCustomer"
    />
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
    ...mapGetters(['currentSelectedLocation']),
    companyInfo() {
      const currentTerminal = this.findAllTerminal?.find(el => el.id == this.findSelectedTerminal);
      const company = currentTerminal?.location?.company;
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
      // ✅ FIXED: Changed printSingle to printCustomerReceipt to match your utility file
      ticketPrinter.printCustomerReceipt(ticket, {
        companyInfo: this.companyInfo, // Make sure you have this in computed (see below)
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
/* Scoped styles kept clean for layout only */
.tickets-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
.page-header { margin-bottom: 32px; }
.filters-container { background: white; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0; }
.filters-group { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; align-items: end; }
.filter-item { display: flex; flex-direction: column; gap: 6px; }
.search-input, .filter-select, .date-input { 
  width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; 
}
.action-buttons { display: flex; gap: 12px; margin-top: 20px; justify-content: flex-end; }
.btn-create, .btn-refresh { padding: 10px 20px; border-radius: 8px; color: white; font-weight: 500; }
.btn-create { background: #48bb78; }
.btn-refresh { background: #4299e1; }
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px; margin-bottom: 32px; }
.stat-card { background: white; padding: 20px; border-radius: 12px; border-left: 4px solid #4299e1; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.stat-card.stat-pending { border-left-color: #ed8936; }
.stat-card.stat-ready { border-left-color: #48bb78; }
.stat-card.stat-unpaid { border-left-color: #f56565; }
.stat-value { font-size: 28px; font-weight: 700; }
.stat-label { font-size: 12px; color: #718096; text-transform: uppercase; }
.tickets-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 24px; }
.pagination { display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 40px; }
.pagination-btn { padding: 8px 16px; border: 1px solid #e2e8f0; border-radius: 8px; background: white; }
.spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #4299e1; border-radius: 50%; animation: spin 1s linear infinite; margin: 50px auto; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
</style>