<template>
  <div class="tickets-listing-container">
    <!-- Header -->
    <div class="page-header">
      <h1>Tickets Management</h1>
      <div class="header-actions">
        <div class="search-filter">
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
          <input
            v-model="startDate"
            type="date"
            class="date-input"
            placeholder="Start Date"
          />
          <input
            v-model="endDate"
            type="date"
            class="date-input"
            placeholder="End Date"
          />
        </div>
        <button @click="refreshTickets" class="btn btn-refresh">
          <span class="refresh-icon">↻</span> Refresh
        </button>
      </div>
    </div>

    <!-- Stats Summary -->
    <div class="stats-summary">
      <div class="stat-card">
        <div class="stat-number">{{ stats.total }}</div>
        <div class="stat-label">Total Tickets</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ stats.pending }}</div>
        <div class="stat-label">Pending</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ stats.preparing }}</div>
        <div class="stat-label">Preparing</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ stats.ready }}</div>
        <div class="stat-label">Ready</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ stats.unpaid }}</div>
        <div class="stat-label">Unpaid</div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading tickets...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <div class="error-icon">⚠️</div>
      <h3>Error Loading Tickets</h3>
      <p>{{ error }}</p>
      <button @click="fetchTickets" class="retry-btn">Try Again</button>
    </div>

    <!-- Tickets List -->
    <div v-else class="tickets-list">
      <!-- No tickets message -->
      <div v-if="filteredTickets.length === 0" class="no-tickets">
        <div class="no-tickets-icon">🎫</div>
        <h3>No tickets found</h3>
        <p v-if="hasActiveFilters">Try adjusting your filters</p>
        <p v-else>No tickets available</p>
      </div>

      <!-- Tickets Grid -->
      <div v-else class="tickets-grid">
        <div
          v-for="ticket in filteredTickets"
          :key="ticket.id"
          class="ticket-card"
          :class="{ 'urgent': isUrgent(ticket) }"
          @click="viewTicketInDialog(ticket)"
        >
          <!-- Card Header -->
          <div class="card-header">
            <div class="ticket-number">
              <span class="ticket-id">#{{ ticket.id }}</span>
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
              <span class="info-value">{{ ticket.table?.number || ticket.table?.name || 'N/A' }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Items:</span>
              <span class="info-value">{{ ticket.ticketLines?.length || 0 }} items</span>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="card-summary">
            <div class="summary-total">
              <span class="total-label">Total:</span>
              <span class="total-amount">${{ formatPrice(ticket.total) }}</span>
            </div>
            <div v-if="ticket.notes" class="ticket-notes-preview">
              <span class="notes-icon">📝</span>
              <span class="notes-text">{{ truncateNotes(ticket.notes) }}</span>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="card-actions" @click.stop>
            <button
              v-if="ticket.status === 'pending'"
              @click="updateTicketStatus(ticket.id, 'preparing')"
              class="action-btn btn-preparing"
            >
              Start Prep
            </button>
            <button
              v-if="ticket.status === 'preparing'"
              @click="updateTicketStatus(ticket.id, 'ready')"
              class="action-btn btn-ready"
            >
              Mark Ready
            </button>
            <button
              v-if="ticket.status === 'ready'"
              @click="updateTicketStatus(ticket.id, 'served')"
              class="action-btn btn-served"
            >
              Mark Served
            </button>
            <button
              v-if="ticket.status === 'served' && ticket.paymentStatus === 'pending'"
              @click="processPayment(ticket.id)"
              class="action-btn btn-payment"
            >
              Process Payment
            </button>
            <button
              @click="openPrintDialog(ticket)"
              class="action-btn btn-print"
            >
              Print
            </button>
          </div>

          <!-- Urgency Indicator -->
          <div v-if="isUrgent(ticket)" class="urgency-indicator">
            <span class="urgency-icon">⚠️</span>
            <span class="urgency-text">{{ getUrgencyReason(ticket) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="pagination.totalPages > 1" class="pagination">
      <button
        @click="changePage(pagination.currentPage - 1)"
        :disabled="pagination.currentPage === 1"
        class="pagination-btn"
      >
        Previous
      </button>
      <span class="pagination-info">
        Page {{ pagination.currentPage }} of {{ pagination.totalPages }}
      </span>
      <button
        @click="changePage(pagination.currentPage + 1)"
        :disabled="pagination.currentPage === pagination.totalPages"
        class="pagination-btn"
      >
        Next
      </button>
    </div>

    <!-- Ticket Detail Dialog -->
    <div v-if="showDialog" class="dialog-overlay" @click="closeDialog">
      <div class="dialog-content" @click.stop>
        <div class="dialog-header">
          <h2>Ticket #{{ selectedTicket?.id }} Details</h2>
          <button @click="closeDialog" class="close-btn">×</button>
        </div>
        
        <div class="dialog-body" v-if="selectedTicket">
          <!-- Ticket Info -->
          <div class="dialog-section">
            <div class="section-header">
              <h3>Ticket Information</h3>
              <div class="ticket-status-badges">
                <span :class="['status-badge', `status-${selectedTicket.status}`]">
                  {{ formatStatus(selectedTicket.status) }}
                </span>
                <span :class="['payment-badge', `payment-${selectedTicket.paymentStatus}`]">
                  {{ formatPaymentStatus(selectedTicket.paymentStatus) }}
                </span>
              </div>
            </div>
            <div class="info-grid">
              <div class="info-item">
                <strong>Created:</strong> {{ formatDate(selectedTicket.createdAt) }}
              </div>
              <div class="info-item">
                <strong>Last Updated:</strong> {{ formatDate(selectedTicket.updateTimestamp) }}
              </div>
              <div class="info-item">
                <strong>Customer:</strong> {{ selectedTicket.client?.name || 'Walk-in' }}
              </div>
              <div class="info-item">
                <strong>Table:</strong> {{ selectedTicket.table?.number || selectedTicket.table?.name || 'N/A' }}
              </div>
            </div>
          </div>

          <!-- Customer Details -->
          <div v-if="selectedTicket.client" class="dialog-section">
            <h3>Customer Details</h3>
            <div class="info-grid">
              <div class="info-item">
                <strong>Name:</strong> {{ selectedTicket.client.name }}
              </div>
              <div class="info-item" v-if="selectedTicket.client.email">
                <strong>Email:</strong> {{ selectedTicket.client.email }}
              </div>
              <div class="info-item" v-if="selectedTicket.client.phone">
                <strong>Phone:</strong> {{ selectedTicket.client.phone }}
              </div>
            </div>
          </div>

          <!-- Order Items -->
          <div class="dialog-section">
            <h3>Order Items</h3>
            <div v-if="selectedTicket.ticketLines && selectedTicket.ticketLines.length > 0" class="items-table">
              <div class="table-header">
                <div class="col-item">Item</div>
                <div class="col-qty">Qty</div>
                <div class="col-price">Price</div>
                <div class="col-total">Total</div>
              </div>
              <div 
                v-for="line in selectedTicket.ticketLines" 
                :key="line.id" 
                class="table-row"
              >
                <div class="col-item">
                  <div class="item-name">{{ line.product.pro_name || 'Unknown Item' }}</div>
                  <div v-if="line.notes" class="item-notes">{{ line.notes }}</div>
                </div>
                <div class="col-qty">{{ line.quantity }}</div>
                <div class="col-price">${{ formatPrice(line.unitPrice) }}</div>
                <div class="col-total">${{ formatPrice(line.total || (line.quantity * line.unitPrice)) }}</div>
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
                <span>${{ formatPrice(selectedTicket.subtotal) }}</span>
              </div>
              <div class="summary-row">
                <span>Tax:</span>
                <span>${{ formatPrice(selectedTicket.tax) }}</span>
              </div>
              <div class="summary-row total-row">
                <span><strong>Total:</strong></span>
                <span><strong>${{ formatPrice(selectedTicket.total) }}</strong></span>
              </div>
            </div>
          </div>

          <!-- Payment Information -->
          <div v-if="selectedTicket.payment" class="dialog-section">
            <h3>Payment Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <strong>Method:</strong> {{ selectedTicket.payment.method || 'N/A' }}
              </div>
              <div class="info-item">
                <strong>Amount:</strong> ${{ formatPrice(selectedTicket.payment.amount) }}
              </div>
              <div class="info-item">
                <strong>Status:</strong> {{ formatPaymentStatus(selectedTicket.paymentStatus) }}
              </div>
              <div class="info-item" v-if="selectedTicket.payment.transactionId">
                <strong>Transaction ID:</strong> {{ selectedTicket.payment.transactionId }}
              </div>
            </div>
          </div>

          <!-- Notes -->
          <div v-if="selectedTicket.notes" class="dialog-section">
            <h3>Notes</h3>
            <div class="notes-content">
              {{ selectedTicket.notes }}
            </div>
          </div>
        </div>

        <div class="dialog-footer">
          <div class="dialog-actions">
            <button
              v-if="selectedTicket?.status === 'pending'"
              @click="updateTicketStatusFromDialog('preparing')"
              class="dialog-btn btn-preparing"
            >
              Start Preparing
            </button>
            <button
              v-if="selectedTicket?.status === 'preparing'"
              @click="updateTicketStatusFromDialog('ready')"
              class="dialog-btn btn-ready"
            >
              Mark Ready
            </button>
            <button
              v-if="selectedTicket?.status === 'ready'"
              @click="updateTicketStatusFromDialog('served')"
              class="dialog-btn btn-served"
            >
              Mark Served
            </button>
            <button
              v-if="selectedTicket?.status === 'served' && selectedTicket?.paymentStatus === 'pending'"
              @click="processPaymentFromDialog"
              class="dialog-btn btn-payment"
            >
              Process Payment
            </button>
            <button
              @click="openPrintDialogFromDetail"
              class="dialog-btn btn-print"
            >
              Print Ticket
            </button>
            <button @click="closeDialog" class="dialog-btn btn-close">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Print Dialog -->
    <div v-if="showPrintDialog" class="dialog-overlay" @click="closePrintDialog">
      <div class="print-dialog-content" @click.stop>
        <div class="print-dialog-header">
          <h2>Print Ticket</h2>
          <button @click="closePrintDialog" class="close-btn">×</button>
        </div>
        
        <div class="print-preview" v-if="printTicket">
          <!-- Restaurant Header -->
          <div class="print-header">
            <div class="restaurant-info">
              <h1 class="restaurant-name">Restaurant Name</h1>
              <p class="restaurant-address">123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567</p>
            </div>
          </div>

          <!-- Ticket Info -->
          <div class="print-ticket-info">
            <div class="ticket-details">
              <div class="detail-row">
                <span class="detail-label">Ticket #:</span>
                <span class="detail-value">{{ printTicket.id }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Date:</span>
                <span class="detail-value">{{ formatPrintDate(printTicket.createdAt) }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Time:</span>
                <span class="detail-value">{{ formatPrintTime(printTicket.createdAt) }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Status:</span>
                <span class="detail-value">{{ formatStatus(printTicket.status) }}</span>
              </div>
            </div>
            
            <div class="customer-table-info">
              <div class="detail-row">
                <span class="detail-label">Customer:</span>
                <span class="detail-value">{{ printTicket.client?.name || 'Walk-in Customer' }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Table:</span>
                <span class="detail-value">{{ printTicket.table?.number || printTicket.table?.name || 'N/A' }}</span>
              </div>
              <div v-if="printTicket.client?.phone" class="detail-row">
                <span class="detail-label">Phone:</span>
                <span class="detail-value">{{ printTicket.client.phone }}</span>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="print-divider"></div>

          <!-- Order Items -->
          <div class="print-items">
            <h3 class="section-title">ORDER ITEMS</h3>
            <div v-if="printTicket.ticketLines && printTicket.ticketLines.length > 0">
              <div 
                v-for="line in printTicket.ticketLines" 
                :key="line.id" 
                class="print-item"
              >
                <div class="item-line">
                  <div class="item-main">
                    <span class="item-name">{{ line.product.pro_name || 'Unknown Item' }}</span>
                    <span class="item-price">${{ formatPrice(line.unitPrice) }}</span>
                  </div>
                  <div class="item-details">
                    <span class="item-qty">Qty: {{ line.quantity }}</span>
                    <span class="item-total">${{ formatPrice(line.total || (line.quantity * line.unitPrice)) }}</span>
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
              <span class="summary-value">${{ formatPrice(printTicket.subtotal) }}</span>
            </div>
            <div class="summary-line">
              <span class="summary-label">Tax:</span>
              <span class="summary-value">${{ formatPrice(printTicket.tax) }}</span>
            </div>
            <div class="summary-line total-line">
              <span class="summary-label">TOTAL:</span>
              <span class="summary-value">${{ formatPrice(printTicket.total) }}</span>
            </div>
          </div>

          <!-- Payment Status -->
          <div class="print-payment">
            <div class="payment-status">
              <span class="payment-label">Payment Status:</span>
              <span class="payment-value" :class="`payment-${printTicket.paymentStatus}`">
                {{ formatPaymentStatus(printTicket.paymentStatus) }}
              </span>
            </div>
            <div v-if="printTicket.payment && printTicket.paymentStatus === 'paid'" class="payment-details">
              <div class="payment-info">
                <span>Method: {{ printTicket.payment.method || 'N/A' }}</span>
                <span v-if="printTicket.payment.transactionId">
                  Transaction: {{ printTicket.payment.transactionId }}
                </span>
              </div>
            </div>
          </div>

          <!-- Notes -->
          <div v-if="printTicket.notes" class="print-notes">
            <div class="print-divider"></div>
            <h4>NOTES:</h4>
            <p>{{ printTicket.notes }}</p>
          </div>

          <!-- Footer -->
          <div class="print-footer">
            <div class="print-divider"></div>
            <p class="thank-you">Thank you for your visit!</p>
            <p class="print-time">Printed: {{ formatPrintDateTime(new Date()) }}</p>
          </div>
        </div>

        <div class="print-dialog-actions">
          <button @click="printNow" class="print-btn print-primary">
            🖨️ Print
          </button>
          <button @click="closePrintDialog" class="print-btn print-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketsListing',
  
  data() {
    return {
      tickets: [],
      loading: true,
      error: null,
      searchQuery: '',
      statusFilter: '',
      paymentFilter: '',
      startDate: '',
      endDate: '',
      showDialog: false,
      selectedTicket: null,
      showPrintDialog: false,
      printTicket: null,
      pagination: {
        currentPage: 1,
        totalPages: 1,
        limit: 20
      },
      refreshInterval: null
    }
  },

  computed: {
    filteredTickets() {
      let filtered = this.tickets

      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(ticket => 
          ticket.id.toString().includes(query) ||
          ticket.client?.name?.toLowerCase().includes(query) ||
          ticket.table?.number?.toString().includes(query) ||
          ticket.table?.name?.toLowerCase().includes(query)
        )
      }

      // Status filter
      if (this.statusFilter) {
        filtered = filtered.filter(ticket => ticket.status === this.statusFilter)
      }

      // Payment filter
      if (this.paymentFilter) {
        filtered = filtered.filter(ticket => ticket.paymentStatus === this.paymentFilter)
      }

      return filtered
    },

    hasActiveFilters() {
      return this.searchQuery || this.statusFilter || this.paymentFilter || this.startDate || this.endDate
    },

    stats() {
      return {
        total: this.tickets.length,
        pending: this.tickets.filter(t => t.status === 'pending').length,
        preparing: this.tickets.filter(t => t.status === 'preparing').length,
        ready: this.tickets.filter(t => t.status === 'ready').length,
        unpaid: this.tickets.filter(t => t.paymentStatus === 'pending').length
      }
    }
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
          include: 'client,table,ticketLines', // Send as comma-separated string
          sort: 'createdAt:desc'
        }

        // Add filters if they exist
        if (this.statusFilter) params.status = this.statusFilter
        if (this.paymentFilter) params.paymentStatus = this.paymentFilter
        if (this.startDate) params.startDate = this.startDate
        if (this.endDate) params.endDate = this.endDate

        console.log('Fetching tickets with params:', params) // Debug log

        const response = await this.$axios.get('/api/ticket/find', { params })
        
        console.log('API Response:', response.data) // Debug log
        
        // Handle different response formats
        this.tickets = response.data.tickets || response.data.data || response.data || []
        
        // Update pagination
        if (response.data.pagination) {
          this.pagination = {
            ...this.pagination,
            totalPages: response.data.pagination.totalPages || response.data.pagination.pages || 1,
            currentPage: response.data.pagination.currentPage || response.data.pagination.page || 1
          }
        } else {
          this.pagination = {
            ...this.pagination,
            totalPages: response.data.totalPages || 1,
            currentPage: response.data.currentPage || 1
          }
        }
        
      } catch (error) {
        console.error('Error fetching tickets:', error)
        console.error('Error details:', error.response?.data) // More detailed error logging
        
        this.error = error.response?.data?.message || 
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
        await this.$axios.patch(`/api/tickets/${ticketId}`, {
          status: newStatus
        })
        
        // Update local ticket
        const ticket = this.tickets.find(t => t.id === ticketId)
        if (ticket) {
          ticket.status = newStatus
          ticket.updateTimestamp = new Date()
        }
        
        this.$toast?.success(`Ticket #${ticketId} status updated to ${this.formatStatus(newStatus)}`)
      } catch (error) {
        console.error('Error updating status:', error)
        this.$toast?.error('Failed to update ticket status')
      }
    },

    processPayment(ticketId) {
      this.$router.push(`/tickets/${ticketId}/payment`)
    },

    viewTicket(ticketId) {
      this.$router.push(`/tickets/${ticketId}`)
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
        await this.$axios.patch(`/api/tickets/${this.selectedTicket.id}`, {
          status: newStatus
        })
        
        // Update both selected ticket and tickets list
        this.selectedTicket.status = newStatus
        this.selectedTicket.updateTimestamp = new Date()
        
        const ticket = this.tickets.find(t => t.id === this.selectedTicket.id)
        if (ticket) {
          ticket.status = newStatus
          ticket.updateTimestamp = new Date()
        }
        
        this.$toast?.success(`Ticket #${this.selectedTicket.id} status updated to ${this.formatStatus(newStatus)}`)
      } catch (error) {
        console.error('Error updating status:', error)
        this.$toast?.error('Failed to update ticket status')
      }
    },

    processPaymentFromDialog() {
      if (this.selectedTicket) {
        this.closeDialog()
        this.$router.push(`/tickets/${this.selectedTicket.id}/payment`)
      }
    },

    printTicketFromDialog() {
      if (this.selectedTicket) {
        this.openPrintDialogFromDetail()
      }
    },

    printTicket(ticketId) {
      // Find ticket and open print dialog
      const ticket = this.tickets.find(t => t.id === ticketId)
      if (ticket) {
        this.openPrintDialog(ticket)
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
      const printContent = document.querySelector('.print-preview').innerHTML
      const printWindow = window.open('', '_blank')
      
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Ticket #${this.printTicket.id}</title>
          <style>
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
            @media print {
              body { margin: 0; padding: 10px; }
            }
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
      }, 250)
      
      // Close the print dialog
      this.closePrintDialog()
    },

    startAutoRefresh() {
      // Refresh every 30 seconds
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

    formatTime(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    },

    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleString()
    },

    formatPrintDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString()
    },

    formatPrintTime(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
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
        'pending': 'Pending',
        'preparing': 'Preparing',
        'ready': 'Ready',
        'served': 'Served',
        'paid': 'Paid'
      }
      return statusMap[status] || status
    },

    formatPaymentStatus(status) {
      const statusMap = {
        'pending': 'Unpaid',
        'paid': 'Paid',
        'refunded': 'Refunded'
      }
      return statusMap[status] || status
    },

    truncateNotes(notes) {
      if (!notes) return ''
      return notes.length > 50 ? notes.substring(0, 50) + '...' : notes
    },

    isUrgent(ticket) {
      const now = new Date()
      const createdAt = new Date(ticket.createdAt)
      const minutesAgo = (now - createdAt) / (1000 * 60)
      
      // Mark as urgent if preparing for more than 15 minutes
      // or ready for more than 5 minutes
      return (
        (ticket.status === 'preparing' && minutesAgo > 15) ||
        (ticket.status === 'ready' && minutesAgo > 5)
      )
    },

    getUrgencyReason(ticket) {
      const now = new Date()
      const createdAt = new Date(ticket.createdAt)
      const minutesAgo = Math.floor((now - createdAt) / (1000 * 60))
      
      if (ticket.status === 'preparing') {
        return `Preparing for ${minutesAgo} minutes`
      } else if (ticket.status === 'ready') {
        return `Ready for ${minutesAgo} minutes`
      }
      return ''
    }
  }
}
</script>

<style scoped>
.tickets-listing-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Page Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e9ecef;
}

.page-header h1 {
  margin: 0;
  color: #333;
}

.header-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.search-filter {
  display: flex;
  gap: 10px;
}

.search-input, .filter-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

.search-input {
  width: 200px;
}

.date-input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  width: 140px;
}

.btn-refresh {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.refresh-icon {
  font-size: 16px;
}

/* Stats Summary */
.stats-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
}

.stat-number {
  font-size: 28px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Loading & Error States */
.loading-state, .error-state {
  text-align: center;
  padding: 60px 20px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-state {
  color: #dc3545;
}

.error-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.retry-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

/* No Tickets */
.no-tickets {
  text-align: center;
  padding: 60px 20px;
  color: #6c757d;
}

.no-tickets-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

/* Tickets Grid */
.tickets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}

.ticket-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 2px solid #e9ecef;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.ticket-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.ticket-card.urgent {
  border-color: #ffc107;
  background: #fffbf0;
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.ticket-number {
  display: flex;
  flex-direction: column;
}

.ticket-id {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.ticket-time {
  font-size: 12px;
  color: #6c757d;
}

.ticket-badges {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
}

/* Status Badges */
.status-badge, .payment-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-pending { background: #fff3cd; color: #856404; }
.status-preparing { background: #d1ecf1; color: #0c5460; }
.status-ready { background: #d4edda; color: #155724; }
.status-served { background: #e2e3e5; color: #383d41; }
.status-paid { background: #d1e7dd; color: #0f5132; }

.payment-pending { background: #fff3cd; color: #856404; }
.payment-paid { background: #d4edda; color: #155724; }
.payment-refunded { background: #f8d7da; color: #721c24; }

/* Card Info */
.card-info {
  margin-bottom: 15px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.info-label {
  color: #6c757d;
  font-size: 14px;
}

.info-value {
  color: #333;
  font-weight: 500;
  font-size: 14px;
}

/* Card Summary */
.card-summary {
  margin-bottom: 15px;
  padding-top: 15px;
  border-top: 1px solid #e9ecef;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.total-label {
  font-weight: 600;
  color: #333;
}

.total-amount {
  font-size: 18px;
  font-weight: bold;
  color: #28a745;
}

.ticket-notes-preview {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #6c757d;
}

.notes-icon {
  font-size: 14px;
}

.notes-text {
  font-style: italic;
}

/* Card Actions */
.card-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.action-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-preparing { background: #17a2b8; color: white; }
.btn-ready { background: #28a745; color: white; }
.btn-served { background: #6f42c1; color: white; }
.btn-payment { background: #ffc107; color: #856404; }
.btn-print { background: #6c757d; color: white; }

.action-btn:hover {
  opacity: 0.8;
  transform: translateY(-1px);
}

/* Urgency Indicator */
.urgency-indicator {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ffc107;
  color: #856404;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 3px;
}

.urgency-icon {
  font-size: 12px;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;
}

.pagination-btn {
  padding: 8px 16px;
  border: 1px solid #007bff;
  background: white;
  color: #007bff;
  border-radius: 5px;
  cursor: pointer;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-btn:hover:not(:disabled) {
  background: #007bff;
  color: white;
}

.pagination-info {
  color: #6c757d;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    gap: 20px;
    align-items: stretch;
  }
  
  .header-actions {
    flex-direction: column;
    gap: 10px;
  }
  
  .search-filter {
    flex-direction: column;
  }
  
  .search-input {
    width: 100%;
  }
  
  .stats-summary {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .tickets-grid {
    grid-template-columns: 1fr;
  }
  
  .card-actions {
    justify-content: center;
  }
}

/* Dialog Styles */
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

.dialog-content {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e9ecef;
  background: #f8f9fa;
  border-radius: 12px 12px 0 0;
}

.dialog-header h2 {
  margin: 0;
  color: #333;
  font-size: 24px;
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

.dialog-body {
  padding: 24px;
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
  margin-bottom: 16px;
}

.dialog-section h3 {
  margin: 0 0 16px 0;
  color: #495057;
  font-size: 18px;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 8px;
}

.ticket-status-badges {
  display: flex;
  gap: 8px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.info-item {
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
  font-size: 14px;
}

.info-item strong {
  color: #495057;
  margin-right: 8px;
}

/* Items Table */
.items-table {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 80px 100px 100px;
  gap: 16px;
  background: #f8f9fa;
  padding: 16px;
  font-weight: 600;
  color: #495057;
  border-bottom: 1px solid #dee2e6;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 80px 100px 100px;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid #f1f3f4;
  align-items: center;
}

.table-row:last-child {
  border-bottom: none;
}

.col-item {
  display: flex;
  flex-direction: column;
}

.item-name {
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.item-notes {
  font-size: 12px;
  color: #6c757d;
  font-style: italic;
}

.col-qty, .col-price, .col-total {
  text-align: right;
  font-weight: 500;
}

.no-items {
  text-align: center;
  padding: 40px;
  color: #6c757d;
  font-style: italic;
}

/* Summary Table */
.summary-table {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
}

.summary-row:last-child {
  border-bottom: none;
}

.total-row {
  font-size: 18px;
  padding-top: 16px;
  border-top: 2px solid #dee2e6;
  color: #333;
  margin-top: 8px;
}

/* Notes Content */
.notes-content {
  background: #fff3cd;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
  color: #856404;
  font-style: italic;
}

/* Dialog Footer */
.dialog-footer {
  padding: 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  border-radius: 0 0 12px 12px;
}

.dialog-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.dialog-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.dialog-btn.btn-preparing { background: #17a2b8; color: white; }
.dialog-btn.btn-ready { background: #28a745; color: white; }
.dialog-btn.btn-served { background: #6f42c1; color: white; }
.dialog-btn.btn-payment { background: #ffc107; color: #856404; }
.dialog-btn.btn-print { background: #6c757d; color: white; }
.dialog-btn.btn-close { background: #6c757d; color: white; }

.dialog-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Responsive Dialog */
@media (max-width: 768px) {
  .dialog-overlay {
    padding: 10px;
  }
  
  .dialog-content {
    max-height: 95vh;
  }
  
  .dialog-header, .dialog-body, .dialog-footer {
    padding: 16px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .table-header, .table-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  
  .table-header {
    display: none;
  }
  
  .table-row {
    display: block;
    padding: 16px;
  }
  
  .col-qty, .col-price, .col-total {
    text-align: left;
    margin-top: 4px;
  }
  
  .col-qty::before { content: "Qty: "; font-weight: 600; }
  .col-price::before { content: "Price: "; font-weight: 600; }
  .col-total::before { content: "Total: "; font-weight: 600; }
  
  .dialog-actions {
    flex-direction: column;
  }
  
  .dialog-btn {
    width: 100%;
  }
}

/* Print Dialog Styles */
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

.payment-value.payment-pending { color: #856404; }
.payment-value.payment-paid { color: #155724; }
.payment-value.payment-refunded { color: #721c24; }

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

.print-secondary {
  background: #6c757d;
  color: white;
}

.print-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Responsive Print Dialog */
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