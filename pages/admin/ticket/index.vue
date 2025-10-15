<template>
  <div class="tickets-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>Tickets Management</h1>
      <div class="header-actions">
        <div class="filters-group">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search tickets..."
            class="search-input"
          />
          <select v-model="statusFilter" class="filter-select">
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="preparing">Preparing</option>
            <option value="ready">Ready</option>
            <option value="served">Served</option>
            <option value="paid">Paid</option>
          </select>
          <select v-model="paymentFilter" class="filter-select">
            <option value="">All Payments</option>
            <option value="pending">Payment Pending</option>
            <option value="paid">Paid</option>
            <option value="refunded">Refunded</option>
          </select>
          <input v-model="startDate" type="date" class="date-input" />
          <input v-model="endDate" type="date" class="date-input" />
        </div>
        <button @click="refreshTickets" class="btn-refresh">
          <span class="icon">↻</span>
          <span>Refresh</span>
        </button>
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
      <p v-if="hasActiveFilters">Try adjusting your filters</p>
      <p v-else>No tickets available at the moment</p>
    </div>

    <!-- Tickets Grid -->
    <div v-else class="tickets-grid">
      <TicketCard
        v-for="ticket in filteredTickets"
        :key="ticket.id"
        :ticket="ticket"
        @click="viewTicketInDialog(ticket)"
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

    <!-- Print Dialog -->
    <PrintDialog
      v-if="showPrintDialog"
      :ticket="printTicket"
      @close="closePrintDialog"
      @print="printNow"
    />
  </div>
</template>

<script>
import TicketCard from '~/components/tickets/TicketCard.vue'
import TicketDetailDialog from '~/components/tickets/TicketDetailDialog.vue'
import PrintDialog from '~/components/tickets/PrintDialog.vue'

export default {
  name: 'TicketsPage',

  components: {
    TicketCard,
    TicketDetailDialog,
    PrintDialog,
  },

  data() {
    return {
      tickets: [],
      loading: true,
      error: null,

      // Filters
      searchQuery: '',
      statusFilter: '',
      paymentFilter: '',
      startDate: '',
      endDate: '',

      // Dialogs
      showDialog: false,
      selectedTicket: null,
      showPrintDialog: false,
      printTicket: null,

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
    filteredTickets() {
      let filtered = this.tickets

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(
          (ticket) =>
            ticket.id.toString().includes(query) ||
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
  },

  beforeDestroy() {
    this.stopAutoRefresh()
  },

  methods: {
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

        // Update pagination
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
      this.$toast?.success('Tickets refreshed')
    },

    async changePage(page) {
      if (page >= 1 && page <= this.pagination.totalPages) {
        this.pagination.currentPage = page
        await this.fetchTickets()
      }
    },

    async updateTicketStatus(ticketId, newStatus) {
      try {
        let cancelReason = null

        // If status is cancel, prompt for reason
        if (newStatus === 'cancel') {
          cancelReason = prompt('Please enter the reason for cancellation:')

          // If user clicks cancel or enters empty reason, abort
          if (!cancelReason || cancelReason.trim() === '') {
            this.$toast?.warning('Cancellation reason is required')
            return
          }
        }

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

        this.$toast?.success(`Ticket #${ticketId} updated successfully`)
      } catch (error) {
        console.error('Error updating status:', error)
        this.$toast?.error('Failed to update ticket status')
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

        this.$toast?.success('Ticket updated successfully')
      } catch (error) {
        console.error('Error updating status:', error)
        this.$toast?.error('Failed to update ticket status')
      }
    },

    processPaymentFromDialog() {
      if (this.selectedTicket) {
        this.closeDialog()
        this.$router.push(`/admin/ticket/${this.selectedTicket.id}/payment`)
      }
    },

    openPrintDialog(ticket) {
      this.printTicket = ticket
      this.showPrintDialog = true
    },

    openPrintDialogFromDetail() {
      if (this.selectedTicket) {
        this.printTicket = this.selectedTicket
        this.showPrintDialog = true
      }
    },

    closePrintDialog() {
      this.showPrintDialog = false
      this.printTicket = null
    },

    printNow() {
      const printContent = document.querySelector('.print-preview')?.innerHTML
      if (!printContent) return

      const printWindow = window.open('', '_blank')
      printWindow.document.write(this.getPrintHTML(printContent))
      printWindow.document.close()
      printWindow.focus()

      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 250)

      this.closePrintDialog()
    },

    getPrintHTML(content) {
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Ticket #${this.printTicket?.id}</title>
          <style>
            ${this.getPrintStyles()}
          </style>
        </head>
        <body>${content}</body>
        </html>
      `
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
        .print-header { text-align: center; margin-bottom: 20px; }
        .restaurant-name { font-size: 18px; font-weight: bold; margin: 0 0 8px 0; }
        .restaurant-address { font-size: 11px; margin: 0; line-height: 1.3; }
        .detail-row { display: flex; justify-content: space-between; margin-bottom: 3px; }
        .detail-label { font-weight: bold; }
        .print-divider { border-top: 1px dashed #000; margin: 15px 0; }
        .section-title { font-size: 14px; font-weight: bold; margin: 0 0 10px 0; text-align: center; }
        .item-main { display: flex; justify-content: space-between; font-weight: bold; }
        .item-details { display: flex; justify-content: space-between; font-size: 11px; margin-left: 10px; }
        .summary-line { display: flex; justify-content: space-between; margin-bottom: 3px; }
        .total-line { font-weight: bold; font-size: 14px; border-top: 1px solid #000; padding-top: 5px; margin-top: 8px; }
        @media print { body { margin: 0; padding: 10px; } }
      `
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
.tickets-page {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Page Header */
.page-header {
  margin-bottom: 32px;
}

.page-header h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 20px 0;
}

.header-actions {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.filters-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  flex: 1;
}

.search-input,
.filter-select,
.date-input {
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s;
}

.search-input {
  min-width: 250px;
  flex: 1;
}

.filter-select,
.date-input {
  min-width: 150px;
}

.search-input:focus,
.filter-select:focus,
.date-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.btn-refresh {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
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

/* State Container */
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

/* Responsive */
@media (max-width: 768px) {
  .tickets-page {
    padding: 16px;
  }

  .page-header h1 {
    font-size: 24px;
  }

  .header-actions {
    flex-direction: column;
  }

  .filters-group {
    width: 100%;
  }

  .search-input,
  .filter-select,
  .date-input,
  .btn-refresh {
    width: 100%;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .tickets-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>