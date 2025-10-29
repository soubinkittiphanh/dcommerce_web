<template>
  <div>
    <!-- Cancellation Dialog -->
    <v-dialog v-model="cancelDialog.show" max-width="500" persistent>
      <v-card>
        <v-card-title class="text-h6 pa-4">
          <v-icon color="warning" class="mr-2">mdi-alert-circle</v-icon>
          Cancel Ticket #{{ cancelDialog.ticketId }}
        </v-card-title>

        <v-card-text class="pb-0">
          <v-alert type="warning" variant="tonal" class="mb-4">
            ການຍົກເລີກ ticket ນີ້ບໍ່ສາມາດຍົກເລີກການດຳເນີນການໄດ້
            <br />
            This action cannot be undone
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
          <v-btn
            color="grey"
            variant="text"
            @click="closeCancelDialog"
            :disabled="cancelDialog.loading"
          >
            Cancel
          </v-btn>
          <v-btn
            color="error"
            variant="elevated"
            @click="confirmCancellation"
            :loading="cancelDialog.loading"
            :disabled="!cancelDialog.valid"
          >
            <v-icon start>mdi-cancel</v-icon>
            Confirm Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- POS Dialog -->
    <POSDialog
      :show="showPOSDialog"
      :table-id="selectedTableId"
      :ticket="selectedTicket"
      @close="closePOSDialog"
      @ticket-updated="handleTicketUpdated"
      @reload-data="fetchTickets"
    />

    <!-- Notes Dialog -->
    <NotesDialog
      :show="showNotesDialog"
      :notes="selectedTicketNotes"
      :existing-notes="selectedTicket?.notes"
      title="Edit Ticket Notes"
      label="Ticket Notes"
      placeholder="Enter notes for this ticket..."
      hint="Update ticket notes"
      :max-length="500"
      :show-quick-notes="true"
      :custom-quick-notes="[
        'Canceled by customer',
        'Kitchen issue',
        'Payment issue',
      ]"
      :loading="updatingNotes"
      @close="closeNotesDialog"
      @save="handleSaveTicketNotes"
      @show-message="showToast"
    />

    <!-- Page Header -->
    <!-- Updated Page Header with improved filter layout -->
    <div class="page-header">
      <h1>Tickets Management</h1>

      <!-- Filters Section -->
      <div class="filters-container">
        <!-- Search Row -->
        <div class="filter-row">
          <div class="search-group">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search tickets by ID, customer name, or table..."
              class="search-input"
            />
          </div>
        </div>

        <!-- Filters Row -->
        <div class="filter-row">
          <div class="filters-group">
            <div class="filter-item">
              <label class="filter-label">Status</label>
              <select v-model="statusFilter" class="filter-select">
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="preparing">Preparing</option>
                <option value="ready">Ready</option>
                <option value="served">Served</option>
                <option value="paid">Paid</option>
              </select>
            </div>

            <div class="filter-item">
              <label class="filter-label">Payment</label>
              <select v-model="paymentFilter" class="filter-select">
                <option value="">All Payments</option>
                <option value="pending">Payment Pending</option>
                <option value="paid">Paid</option>
                <option value="refunded">Refunded</option>
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

            <div class="filter-actions">
              <button
                @click="clearFilters"
                class="btn-clear"
                v-if="hasActiveFilters"
              >
                <span class="icon">✖</span>
                Clear
              </button>
            </div>
          </div>
        </div>

        <!-- Action Buttons Row -->
        <div class="action-row">
          <div class="action-buttons">
            <button @click="createNewTicket" class="btn-create">
              <span class="icon">➕</span>
              <span>New Ticket</span>
            </button>

            <button @click="refreshTickets" class="btn-refresh">
              <span class="icon">↻</span>
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">{{ stats.total }}</div>
        <div class="stat-label">Total Tickets</div>
      </div>
      <div class="stat-card stat-pending">
        <div class="stat-value">{{ stats.pending }}</div>
        <div class="stat-label">Pending</div>
      </div>
      <div class="stat-card stat-preparing">
        <div class="stat-value">{{ stats.preparing }}</div>
        <div class="stat-label">Preparing</div>
      </div>
      <div class="stat-card stat-ready">
        <div class="stat-value">{{ stats.ready }}</div>
        <div class="stat-label">Ready</div>
      </div>
      <div class="stat-card stat-unpaid">
        <div class="stat-value">{{ stats.unpaid }}</div>
        <div class="stat-label">Unpaid</div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="state-container">
      <div class="spinner"></div>
      <p>Loading tickets...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="state-container error">
      <div class="error-icon">⚠️</div>
      <h3>Error Loading Tickets</h3>
      <p>{{ error }}</p>
      <button @click="fetchTickets" class="btn-retry">Try Again</button>
    </div>

    <!-- Empty State -->
    <div v-else-if="filteredTickets.length === 0" class="state-container empty">
      <div class="empty-icon">🎫</div>
      <h3>No tickets found</h3>
      <p v-if="hasActiveFilters">
        Try adjusting your filters
        <span v-if="tickets.length > 0" class="text-grey">
          ({{ tickets.length }} total tickets available)
        </span>
      </p>
      <p v-else>No tickets available at the moment</p>

      <button v-if="hasActiveFilters" @click="clearFilters" class="btn-retry">
        Clear Filters
      </button>
    </div>

    <!-- Tickets Grid -->
    <div v-else class="tickets-grid">
      <TicketCard
        v-for="ticket in filteredTickets"
        :key="ticket.id"
        :ticket="ticket"
        @click="viewTicketInDialog(ticket)"
        @add-item="handleAddItem"
        @add-notes="handleAddNotes"
        @edit-notes="handleEditNotes"
        @update-status="updateTicketStatus"
        @process-payment="processPayment"
        @print="openPrintDialog"
      />
    </div>

    <!-- Pagination -->
    <div v-if="pagination.totalPages > 1" class="pagination">
      <button
        @click="changePage(pagination.currentPage - 1)"
        :disabled="pagination.currentPage === 1"
        class="pagination-btn"
      >
        ← Previous
      </button>
      <span class="pagination-info">
        Page {{ pagination.currentPage }} of {{ pagination.totalPages }}
      </span>
      <button
        @click="changePage(pagination.currentPage + 1)"
        :disabled="pagination.currentPage === pagination.totalPages"
        class="pagination-btn"
      >
        Next →
      </button>
    </div>

    <!-- Ticket Detail Dialog -->
    <TicketDetailDialog
      v-if="showDialog"
      :ticket="selectedTicket"
      @close="closeDialog"
      @update-status="updateTicketStatusFromDialog"
      @process-payment="processPaymentFromDialog"
      @print="openPrintDialogFromDetail"
    />

    <!-- 85mm Thermal Print Dialog -->
    <PrintTicketDialog
      :show="showPrintDialog"
      :ticket="printTicket"
      :restaurant-info="restaurantConfig"
      @close="closePrintDialog"
      @printed="handlePrintSuccess"
      @print-error="handlePrintError"
    />
  </div>
</template>

<script>
import TicketCard from '~/components/tickets/TicketCard.vue'
import TicketDetailDialog from '~/components/tickets/TicketDetailDialog.vue'
import PrintTicketDialog from '@/components/CAFE/printdialog'
import POSDialog from '~/components/CAFE/POSDialog.vue'
import NotesDialog from '~/components/tickets/NotesDialog.vue'

export default {
  name: 'TicketsPage',

  components: {
    NotesDialog,
    POSDialog,
    TicketCard,
    TicketDetailDialog,
    PrintTicketDialog,
  },

  data() {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)

    const todayString = today.toISOString().split('T')[0]
    const yesterdayString = yesterday.toISOString().split('T')[0]
    return {
      // Restaurant config for thermal printing
      restaurantConfig: {
        name: 'Your Restaurant Name',
        address:
          '123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567',
      },

      cancelDialog: {
        show: false,
        ticketId: null,
        reason: '',
        valid: false,
        loading: false,
        reasonRules: [
          (v) => !!v || 'Cancellation reason is required',
          (v) => (v && v.length >= 5) || 'Reason must be at least 5 characters',
          (v) =>
            (v && v.length <= 500) || 'Reason must be less than 500 characters',
        ],
      },

      searchDebounce: null,
      showNotesDialog: false,
      selectedTicket: null,
      selectedTicketNotes: '',
      updatingNotes: false,
      tickets: [],
      loading: true,
      error: null,

      // Filters
      searchQuery: '',
      statusFilter: '',
      paymentFilter: '',
      startDate: yesterdayString, // Default to yesterday
      endDate: todayString, // Default to today

      // Dialogs
      showDialog: false,
      showPrintDialog: false,
      printTicket: null,

      // POS Dialog
      showPOSDialog: false,
      selectedTableId: null,

      // Pagination
      pagination: {
        currentPage: 1,
        totalPages: 1,
        limit: 20,
      },

      // Auto-refresh
      refreshInterval: null,
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    filteredTickets() {
      let filtered = this.tickets

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(
          (ticket) =>
            ticket.id.toString().includes(query) ||
            ticket.ticketNumber.toString().includes(query) ||
            ticket.notes.toString().includes(query) ||
            ticket.client?.name?.toLowerCase().includes(query) ||
            ticket.table?.number?.toString().includes(query) ||
            ticket.table?.name?.toLowerCase().includes(query)
        )
      }

      if (this.statusFilter) {
        filtered = filtered.filter(
          (ticket) => ticket.status === this.statusFilter
        )
      }

      if (this.paymentFilter) {
        filtered = filtered.filter(
          (ticket) => ticket.paymentStatus === this.paymentFilter
        )
      }

      return filtered
    },

    hasActiveFilters() {
      return !!(
        this.searchQuery ||
        this.statusFilter ||
        this.paymentFilter ||
        this.startDate ||
        this.endDate
      )
    },

    stats() {
      return {
        total: this.tickets.length,
        pending: this.tickets.filter((t) => t.status === 'pending').length,
        preparing: this.tickets.filter((t) => t.status === 'preparing').length,
        ready: this.tickets.filter((t) => t.status === 'ready').length,
        unpaid: this.tickets.filter((t) => t.paymentStatus === 'pending')
          .length,
      }
    },
  },

  async mounted() {
    await this.fetchTickets()
    this.startAutoRefresh()
    window.addEventListener('keydown', this.handleKeyboardShortcuts)
  },

  beforeDestroy() {
    this.stopAutoRefresh()
    window.removeEventListener('keydown', this.handleKeyboardShortcuts)
    if (this.searchDebounce) {
      clearTimeout(this.searchDebounce)
    }
  },

  watch: {
    searchQuery: {
      handler() {
        clearTimeout(this.searchDebounce)
        this.searchDebounce = setTimeout(() => {
          console.log('Search updated:', this.searchQuery)
        }, 300)
      },
    },
  },

  methods: {
    getTodayDate() {
      return new Date().toISOString().split('T')[0]
    },

    // Helper method to get yesterday's date
    getYesterdayDate() {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      return yesterday.toISOString().split('T')[0]
    },
    clearFilters() {
      this.searchQuery = ''
      this.statusFilter = ''
      this.paymentFilter = ''
      this.startDate = this.getYesterdayDate() // Reset to yesterday
      this.endDate = this.getTodayDate() // Reset to today
      this.showToast('Filters cleared', 'info')
    },

    handleKeyboardShortcuts(event) {
      if ((event.ctrlKey || event.metaKey) && event.key === 'r') {
        event.preventDefault()
        this.refreshTickets()
      }

      if ((event.ctrlKey || event.metaKey) && event.key === 'n') {
        event.preventDefault()
        this.createNewTicket()
      }
    },

    handleAddNotes(ticket) {
      console.log('Add notes to ticket:', ticket.id)
      this.openTicketNotes(ticket)
    },

    handleEditNotes(ticket) {
      console.log('Edit notes for ticket:', ticket.id)
      this.openTicketNotes(ticket)
    },

    openTicketNotes(ticket) {
      this.selectedTicket = ticket
      this.selectedTicketNotes = ticket.notes || ''
      this.showNotesDialog = true
    },

    closeNotesDialog() {
      this.showNotesDialog = false
      this.selectedTicket = null
      this.selectedTicketNotes = ''
    },

    async handleSaveTicketNotes(notes) {
      if (!this.selectedTicket) return

      this.updatingNotes = true
      try {
        await this.$axios.patch(`/api/ticket/${this.selectedTicket.id}/notes`, {
          notes: notes,
        })

        this.selectedTicket.notes = notes
        const ticket = this.tickets.find((t) => t.id === this.selectedTicket.id)
        if (ticket) {
          ticket.notes = notes
        }

        this.showToast('Notes updated successfully', 'success')
        this.closeNotesDialog()
      } catch (error) {
        console.error('Error updating notes:', error)
        this.showToast('Failed to update notes', 'error')
      } finally {
        this.updatingNotes = false
      }
    },

    showToast(message, type = 'success') {
      if (this.$toast) {
        this.$toast[type](message)
      } else {
        console.log(`[${type.toUpperCase()}] ${message}`)
      }
    },

    createNewTicket() {
      console.log('Creating new ticket...')
      this.selectedTableId = 'walk-in'
      this.selectedTicket = null
      this.showPOSDialog = true

      if (this.$toast) {
        this.$toast.info('Creating new walk-in ticket')
      }
    },

    handleAddItem({ ticketId, tableId, ticket }) {
      console.log('Add item clicked:', { ticketId, tableId, ticket })
      this.selectedTableId = tableId || 'walk-in'
      this.selectedTicket = ticket
      this.showPOSDialog = true
    },

    closePOSDialog() {
      this.showPOSDialog = false
      this.selectedTableId = null
      this.selectedTicket = null
    },

    handleTicketUpdated(updatedTicket) {
      console.log('Ticket updated:', updatedTicket)

      const index = this.tickets.findIndex((t) => t.id === updatedTicket.id)
      if (index !== -1) {
        this.$set(this.tickets, index, updatedTicket)
      } else {
        this.tickets.unshift(updatedTicket)
      }

      // this.closePOSDialog()
      this.fetchTickets()

      if (this.$toast) {
        this.$toast.success('Ticket saved successfully')
      }
    },

    async fetchTickets() {
      this.loading = true
      this.error = null

      try {
        const params = {
          page: this.pagination.currentPage,
          limit: this.pagination.limit,
          include: 'client,table,ticketLines',
          sort: 'createdAt:desc',
        }

        if (this.statusFilter) params.status = this.statusFilter
        if (this.paymentFilter) params.paymentStatus = this.paymentFilter
        if (this.startDate) params.startDate = this.startDate
        if (this.endDate) params.endDate = this.endDate

        const response = await this.$axios.get('/api/ticket/find', { params })

        this.tickets =
          response.data.tickets || response.data.data || response.data || []

        const paginationData = response.data.pagination || response.data
        this.pagination = {
          ...this.pagination,
          totalPages: paginationData.totalPages || paginationData.pages || 1,
          currentPage: paginationData.currentPage || paginationData.page || 1,
        }
      } catch (error) {
        console.error('Error fetching tickets:', error)
        this.error =
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          'Failed to load tickets'
      } finally {
        this.loading = false
      }
    },

    async refreshTickets() {
      await this.fetchTickets()
      if (this.$toast) {
        this.$toast.success('Tickets refreshed')
      }
    },

    async changePage(page) {
      if (page >= 1 && page <= this.pagination.totalPages) {
        this.pagination.currentPage = page
        await this.fetchTickets()
      }
    },

    async updateTicketStatus(ticketId, newStatus) {
      try {
        console.info(
          `USER DET ${JSON.stringify(this.user)} - ${
            this.user.userGroup.ticketCancel
          }`
        )
        console.info(
          `Ticket ID ${ticketId} thicket ${JSON.stringify(
            this.filteredTickets[0]
          )}`
        )
        // CORRECTED VERSION 1: Safe and clear logic
        const currentTicket = this.filteredTickets.find(
          (ticket) => ticket.id == ticketId
        )

        // Check if ticket exists
        if (!currentTicket) {
          if (this.$toast) {
            this.$toast.error('Ticket not found / ບໍ່ພົບ Ticket')
          }
          return
        }

        const currentTicketStatus = currentTicket.status

        // Check cancellation permission for paid tickets
        if (
          newStatus === 'cancel' &&
          currentTicketStatus === 'paid' &&
          !this.user.userGroup.ticketCancel
        ) {
          if (this.$toast) {
            this.$toast.error(
              'ທ່ານບໍ່ມີສິດອະນຸຍາດໃຫ້ຍົກເລີກ Ticket / You are not allowed to cancel tickets'
            )
          }
          return // ✅ FIXED: This return was missing proper placement
        }

        if (newStatus === 'cancel') {
          this.showCancelDialog(ticketId)
          return
        }

        await this.performStatusUpdate(ticketId, newStatus, null)
      } catch (error) {
        console.error('Error updating status:', error)
        if (this.$toast) {
          this.$toast.error('Failed to update ticket status')
        }
      }
    },

    showCancelDialog(ticketId) {
      this.cancelDialog.ticketId = ticketId
      this.cancelDialog.reason = ''
      this.cancelDialog.show = true
      this.cancelDialog.loading = false
    },

    closeCancelDialog() {
      this.cancelDialog.show = false
      this.cancelDialog.ticketId = null
      this.cancelDialog.reason = ''
      this.cancelDialog.loading = false
    },

    async confirmCancellation() {
      if (!this.$refs.cancelForm.validate()) {
        return
      }

      this.cancelDialog.loading = true

      try {
        await this.performStatusUpdate(
          this.cancelDialog.ticketId,
          'cancel',
          this.cancelDialog.reason.trim()
        )
        this.closeCancelDialog()
      } catch (error) {
        console.error('Error canceling ticket:', error)
        if (this.$toast) {
          this.$toast.error('Failed to cancel ticket')
        }
      } finally {
        this.cancelDialog.loading = false
      }
    },

    async performStatusUpdate(ticketId, newStatus, cancelReason = null) {
      await this.$axios.patch(`/api/ticket/${ticketId}/status`, {
        status: newStatus,
        cancelReason: cancelReason,
      })

      const ticket = this.tickets.find((t) => t.id === ticketId)
      if (ticket) {
        ticket.status = newStatus
        ticket.updateTimestamp = new Date()
        if (cancelReason) {
          ticket.cancelReason = cancelReason
        }
      }

      if (this.$toast) {
        const action = newStatus === 'cancel' ? 'cancelled' : 'updated'
        this.$toast.success(`Ticket #${ticketId} ${action} successfully`)
      }
    },

    processPayment(ticketId) {
      this.$router.push(`/admin/ticket/${ticketId}/payment`)
    },

    viewTicketInDialog(ticket) {
      this.selectedTicket = ticket
      this.showDialog = true
    },

    closeDialog() {
      this.showDialog = false
      this.selectedTicket = null
    },

    async updateTicketStatusFromDialog(newStatus) {
      if (!this.selectedTicket) return

      try {
        await this.$axios.patch(
          `/api/ticket/${this.selectedTicket.id}/status`,
          {
            status: newStatus,
          }
        )

        this.selectedTicket.status = newStatus
        this.selectedTicket.updateTimestamp = new Date()

        const ticket = this.tickets.find((t) => t.id === this.selectedTicket.id)
        if (ticket) {
          ticket.status = newStatus
          ticket.updateTimestamp = new Date()
        }

        if (this.$toast) {
          this.$toast.success('Ticket updated successfully')
        }
      } catch (error) {
        console.error('Error updating status:', error)
        if (this.$toast) {
          this.$toast.error('Failed to update ticket status')
        }
      }
    },

    processPaymentFromDialog() {
      if (this.selectedTicket) {
        this.closeDialog()
        this.$router.push(`/admin/ticket/${this.selectedTicket.id}/payment`)
      }
    },

    // 85mm Thermal Print Dialog methods
    openPrintDialog(ticket) {
      console.log('Opening 85mm thermal print dialog for ticket:', ticket.id)
      this.printTicket = ticket
      this.showPrintDialog = true
    },

    openPrintDialogFromDetail() {
      if (this.selectedTicket) {
        console.log(
          'Opening 85mm thermal print dialog from detail for ticket:',
          this.selectedTicket.id
        )
        this.printTicket = this.selectedTicket
        this.showPrintDialog = true
      }
    },

    closePrintDialog() {
      console.log('Closing 85mm thermal print dialog')
      this.showPrintDialog = false
      this.printTicket = null
    },

    // Handle successful 85mm thermal print
    handlePrintSuccess(ticket) {
      console.log(
        '85mm thermal print completed successfully for ticket:',
        ticket.id
      )
      this.closePrintDialog()

      if (this.$toast) {
        this.$toast.success(
          `Ticket #${ticket.id} printed successfully on 85mm thermal printer`
        )
      }
    },

    // Handle 85mm thermal print error
    handlePrintError(error) {
      console.error('85mm thermal print error:', error)

      if (this.$toast) {
        this.$toast.error('Failed to print ticket on thermal printer')
      }
    },

    startAutoRefresh() {
      this.refreshInterval = setInterval(() => {
        this.fetchTickets()
      }, 30000)
    },

    stopAutoRefresh() {
      if (this.refreshInterval) {
        clearInterval(this.refreshInterval)
        this.refreshInterval = null
      }
    },
  },
}
</script>

<style scoped>
/* Complete CSS for Tickets Page with Improved Filter Section */
.tickets-page {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Page Header Styles */
.page-header {
  margin-bottom: 32px;
}

.page-header h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 24px 0;
}

/* Filter Container */
.filters-container {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.filter-row {
  margin-bottom: 20px;
}

.filter-row:last-child {
  margin-bottom: 0;
}

/* Search Section */
.search-group {
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s;
  background-color: #f7fafc;
}

.search-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
  background-color: white;
}

/* Filters Grid */
.filters-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  align-items: end;
}

.filter-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.filter-label {
  font-size: 12px;
  font-weight: 600;
  color: #4a5568;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-select,
.date-input {
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s;
  background-color: white;
  min-height: 42px;
}

.filter-select:focus,
.date-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.filter-actions {
  display: flex;
  align-items: end;
  justify-content: center;
}

.btn-clear {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  background: #fed7d7;
  color: #c53030;
  border: 1px solid #feb2b2;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  min-height: 42px;
}

.btn-clear:hover {
  background: #feb2b2;
  transform: translateY(-1px);
}

.btn-clear .icon {
  font-size: 12px;
}

/* Action Buttons Row */
.action-row {
  border-top: 1px solid #e2e8f0;
  padding-top: 20px;
  margin-top: 20px;
}

.action-buttons {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.btn-create {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #48bb78;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn-create:hover {
  background: #38a169;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
}

.btn-create .icon {
  font-size: 18px;
}

.btn-refresh {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn-refresh:hover {
  background: #3182ce;
  transform: translateY(-1px);
}

.btn-refresh .icon {
  font-size: 18px;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #4299e1;
  transition: all 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.stat-card.stat-pending {
  border-left-color: #ed8936;
}
.stat-card.stat-preparing {
  border-left-color: #4299e1;
}
.stat-card.stat-ready {
  border-left-color: #48bb78;
}
.stat-card.stat-unpaid {
  border-left-color: #f56565;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #718096;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* State Containers */
.state-container {
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e2e8f0;
  border-top-color: #4299e1;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.state-container p {
  color: #718096;
  font-size: 16px;
  margin: 0;
}

.state-container.error .error-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.state-container.error h3 {
  color: #e53e3e;
  margin: 0 0 12px 0;
}

.state-container.empty .empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.state-container.empty h3 {
  color: #2d3748;
  margin: 0 0 8px 0;
}

.btn-retry {
  margin-top: 20px;
  padding: 10px 24px;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-retry:hover {
  background: #3182ce;
}

/* Tickets Grid */
.tickets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
}

.pagination-btn {
  padding: 10px 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #4299e1;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-btn:hover:not(:disabled) {
  background: #4299e1;
  color: white;
  border-color: #4299e1;
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-info {
  color: #718096;
  font-size: 14px;
  font-weight: 500;
}

.text-grey {
  color: #718096;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .filters-group {
    grid-template-columns: repeat(2, 1fr);
  }

  .action-buttons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .tickets-page {
    padding: 16px;
  }

  .page-header h1 {
    font-size: 24px;
  }

  .filters-container {
    padding: 16px;
  }

  .filters-group {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .action-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn-create,
  .btn-refresh {
    width: 100%;
    justify-content: center;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .tickets-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .pagination {
    flex-wrap: wrap;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .pagination-btn {
    padding: 8px 16px;
    font-size: 13px;
  }
}
</style>