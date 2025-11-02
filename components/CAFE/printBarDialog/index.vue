<template>
  <div v-if="show" class="dialog-overlay" @click="closeDialog">
    <div class="print-dialog-content" @click.stop>
      <div class="print-dialog-header">
        <h2>Print Bar/Kitchen Ticket</h2>
        <button @click="closeDialog" class="close-btn">×</button>
      </div>

      <div class="print-preview" v-if="ticket">
        <!-- COMPACT HEADER for Bar Ticket -->
        <div class="bar-header">
          <div class="station-info">
            <h1 class="station-name">{{ stationName }}</h1>
            <div class="order-priority" :class="getPriorityClass()">
              {{ getPriorityLabel() }}
            </div>
          </div>
        </div>

        <!-- ORDER INFO -->
        <div class="bar-order-info">
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">ORDER #:</span>
              <span class="info-value bold"
                >Q{{ getQueNo(ticket.ticketNumber) }}
                {{ ticket.ticketNumber || ticket.id }}</span
              >
            </div>
            <div class="info-item">
              <span class="info-label">TABLE:</span>
              <span class="info-value bold">{{
                ticket.table?.number || ticket.table?.name || 'Takeaway'
              }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">TIME:</span>
              <span class="info-value">{{
                formatPrintTime(ticket.createdAt)
              }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">SERVER:</span>
              <span class="info-value">{{ getServerName() }}</span>
            </div>
          </div>
        </div>

        <div class="print-divider-bold"></div>

        <!-- ITEMS TO PREPARE -->
        <div class="bar-items">
          <div class="section-title-large">ITEMS TO PREPARE</div>

          <div v-if="filteredItems.length > 0">
            <div
              v-for="(line, index) in filteredItems"
              :key="line.id"
              class="bar-item"
            >
              <!-- Quantity Badge -->
              <div class="item-qty-badge">{{ line.quantity }}x</div>

              <!-- Item Details -->
              <div class="item-content">
                <div class="item-name-large">{{ getItemName(line) }}</div>

                <!-- Special Instructions/Notes -->
                <div v-if="line.notes" class="item-notes-bar">
                  <span class="notes-icon">📝</span>
                  <span class="notes-text">{{ line.notes }}</span>
                </div>

                <!-- Modifiers/Options -->
                <div
                  v-if="line.modifiers && line.modifiers.length > 0"
                  class="item-modifiers"
                >
                  <div
                    v-for="mod in line.modifiers"
                    :key="mod.id"
                    class="modifier-item"
                  >
                    + {{ mod.name }}
                  </div>
                </div>

                <!-- Promotion Badge -->
                <div v-if="line.is_promotion_item" class="promo-badge-bar">
                  🏷️ PROMO
                </div>
              </div>

              <!-- Checkbox for completion -->
              <div class="item-checkbox">☐</div>
            </div>
          </div>

          <div v-else class="no-items-bar">
            <p>No items for this station</p>
          </div>
        </div>

        <div class="print-divider-bold"></div>

        <!-- SUMMARY INFO -->
        <div class="bar-summary">
          <div class="summary-row-large">
            <span>TOTAL ITEMS:</span>
            <span class="bold">{{ getTotalItemCount() }}</span>
          </div>
          <div class="summary-row-large">
            <span>CUSTOMER:</span>
            <span>{{ ticket.client?.name || 'Walk-in' }}</span>
          </div>
        </div>

        <!-- SPECIAL NOTES -->
        <div v-if="ticket.notes" class="bar-special-notes">
          <div class="print-divider"></div>
          <div class="notes-header">⚠️ SPECIAL INSTRUCTIONS:</div>
          <div class="notes-content">{{ ticket.notes }}</div>
        </div>

        <!-- FOOTER -->
        <div class="bar-footer">
          <div class="print-divider"></div>
          <div class="footer-time">
            Printed: {{ formatPrintDateTime(new Date()) }}
          </div>
          <div class="footer-status">
            Status: {{ formatStatus(ticket.status) }}
          </div>
        </div>
      </div>

      <div class="print-dialog-actions">
        <!-- Station Filter -->
        <div class="station-filter">
          <label>Station:</label>
          <select v-model="selectedStation" class="station-select">
            <option value="all">All Items</option>
            <option value="bar">Bar Only</option>
            <option value="kitchen">Kitchen Only</option>
            <option value="cold">Cold Station</option>
            <option value="hot">Hot Station</option>
          </select>
        </div>

        <div class="action-buttons">
          <button
            @click="printNow"
            class="print-btn print-primary"
            :disabled="printing"
          >
            <span v-if="printing">Printing...</span>
            <span v-else>🖨️ Print</span>
          </button>
          <button @click="closeDialog" class="print-btn print-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrintBarTicketDialog',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    ticket: {
      type: Object,
      default: null,
    },
    stationName: {
      type: String,
      default: 'BAR/KITCHEN',
    },
  },

  data() {
    return {
      printing: false,
      selectedStation: 'all', // Filter by station
    }
  },

  computed: {
    filteredItems() {
      if (!this.ticket || !this.ticket.ticketLines) return []

      let items = this.ticket.ticketLines

      // Filter by station type
      if (this.selectedStation !== 'all') {
        items = items.filter((line) => {
          const category = line.product?.category?.toLowerCase() || ''
          const productName = line.pro_name?.toLowerCase() || ''

          switch (this.selectedStation) {
            case 'bar':
              return (
                category.includes('drink') ||
                category.includes('beverage') ||
                productName.includes('coffee') ||
                productName.includes('juice')
              )
            case 'kitchen':
              return category.includes('food') || category.includes('meal')
            case 'cold':
              return (
                category.includes('salad') ||
                category.includes('cold') ||
                productName.includes('ice')
              )
            case 'hot':
              return category.includes('hot') || category.includes('grill')
            default:
              return true
          }
        })
      }

      return items
    },
  },

  methods: {
    getQueNo(ticketNumber) {
      const parts = ticketNumber?.split('-')[0]?.split('/')
      return parts?.length === 2
        ? (parseInt(parts[0]) * parseInt(parts[1])).toString()
        : ''
    },
    closeDialog() {
      this.$emit('close')
    },

    getPriorityClass() {
      const now = new Date()
      const orderTime = new Date(this.ticket.createdAt)
      const minutesPassed = (now - orderTime) / 1000 / 60

      if (minutesPassed > 15) return 'priority-urgent'
      if (minutesPassed > 10) return 'priority-high'
      return 'priority-normal'
    },

    getPriorityLabel() {
      const now = new Date()
      const orderTime = new Date(this.ticket.createdAt)
      const minutesPassed = Math.floor((now - orderTime) / 1000 / 60)

      if (minutesPassed > 15) return '🔴 URGENT!'
      if (minutesPassed > 10) return '🟠 HIGH'
      return '🟢 NORMAL'
    },

    getTotalItemCount() {
      return this.filteredItems.reduce((sum, line) => sum + line.quantity, 0)
    },

    getServerName() {
      return (
        this.ticket.server?.name ||
        this.ticket.createdBy?.cus_name ||
        this.ticket.createdBy?.username ||
        'Staff'
      )
    },

    getItemName(line) {
      return (
        line.pro_name ||
        line.product?.pro_name ||
        line.product?.name ||
        'Unknown Item'
      )
    },

    formatPrintTime(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    },

    formatPrintDateTime(date) {
      if (!date) return 'N/A'
      const d = new Date(date)
      return `${d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
      })} ${d.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })}`
    },

    formatStatus(status) {
      const statusMap = {
        pending: 'NEW ORDER',
        preparing: 'PREPARING',
        ready: 'READY',
        served: 'SERVED',
        paid: 'COMPLETED',
        cancel: 'CANCELLED',
      }
      return statusMap[status] || status?.toUpperCase()
    },

    async printNow() {
      if (!this.ticket) return

      this.printing = true

      try {
        const printContent = document.querySelector('.print-preview').innerHTML
        const printWindow = window.open('', '_blank')

        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Bar Ticket #${this.ticket.id}</title>
            <meta charset="utf-8">
            <style>
              ${this.getBarPrintStyles()}
            </style>
          </head>
          <body>
            ${printContent}
          </body>
          </html>
        `)

        printWindow.document.close()
        printWindow.focus()

        setTimeout(() => {
          printWindow.print()
          printWindow.close()
          this.printing = false
          this.$emit('printed', this.ticket)
          this.closeDialog()
        }, 100)
      } catch (error) {
        console.error('Print error:', error)
        this.printing = false
        this.$emit('print-error', error)
      }
    },

    getBarPrintStyles() {
      return `
        body {
          font-family: 'Courier New', monospace;
          font-size: 14px;
          font-weight: bold;
          line-height: 1.3;
          margin: 0;
          padding: 6px;
          color: #000;
        }
        
        /* Header */
        .bar-header {
          text-align: center;
          margin-bottom: 10px;
          border: 3px solid #000;
          padding: 8px;
          background: #000;
          color: #fff;
        }
        .station-name {
          font-size: 20px;
          font-weight: bold;
          margin: 0 0 6px 0;
          letter-spacing: 2px;
        }
        .order-priority {
          font-size: 16px;
          font-weight: bold;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        .priority-normal { background: #28a745; color: #fff; }
        .priority-high { background: #ffc107; color: #000; }
        .priority-urgent { background: #dc3545; color: #fff; }
        
        /* Order Info */
        .bar-order-info {
          margin-bottom: 10px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }
        .info-item {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }
        .info-label {
          font-weight: bold;
        }
        .info-value.bold {
          font-weight: bold;
          font-size: 15px;
        }
        
        /* Dividers */
        .print-divider {
          border-top: 1px dashed #000;
          margin: 8px 0;
        }
        .print-divider-bold {
          border-top: 3px double #000;
          margin: 10px 0;
        }
        
        /* Section Title */
        .section-title-large {
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          margin: 10px 0;
          padding: 6px;
          background: #000;
          color: #fff;
          letter-spacing: 1px;
        }
        
        /* Bar Items */
        .bar-items {
          margin: 10px 0;
        }
        .bar-item {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
          padding: 10px;
          border: 2px solid #000;
          background: #fff;
          position: relative;
        }
        .item-qty-badge {
          font-size: 24px;
          font-weight: bold;
          min-width: 50px;
          text-align: center;
          background: #000;
          color: #fff;
          padding: 8px 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item-content {
          flex: 1;
        }
        .item-name-large {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 6px;
          text-transform: uppercase;
        }
        .item-notes-bar {
          display: flex;
          gap: 6px;
          margin-top: 6px;
          padding: 6px;
          background: #fff3cd;
          border-left: 4px solid #ffc107;
          font-size: 13px;
        }
        .notes-icon {
          font-size: 14px;
        }
        .notes-text {
          font-weight: bold;
          color: #856404;
        }
        .item-modifiers {
          margin-top: 6px;
          padding-left: 10px;
        }
        .modifier-item {
          font-size: 12px;
          margin: 2px 0;
          color: #666;
        }
        .promo-badge-bar {
          display: inline-block;
          margin-top: 6px;
          padding: 3px 8px;
          background: #28a745;
          color: #fff;
          font-size: 11px;
          border-radius: 3px;
        }
        .item-checkbox {
          font-size: 32px;
          font-weight: bold;
          min-width: 40px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Summary */
        .bar-summary {
          margin: 12px 0;
          padding: 10px;
          background: #f8f9fa;
          border: 2px solid #000;
        }
        .summary-row-large {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 4px;
        }
        .summary-row-large .bold {
          font-weight: bold;
          font-size: 16px;
        }
        
        /* Special Notes */
        .bar-special-notes {
          margin: 12px 0;
          padding: 10px;
          background: #fff3cd;
          border: 3px solid #ffc107;
        }
        .notes-header {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 6px;
          color: #856404;
        }
        .notes-content {
          font-size: 13px;
          font-weight: bold;
          color: #000;
        }
        
        /* Footer */
        .bar-footer {
          margin-top: 12px;
          text-align: center;
          font-size: 11px;
        }
        .footer-time {
          margin: 4px 0;
          color: #666;
        }
        .footer-status {
          font-weight: bold;
          font-size: 13px;
        }
        
        .no-items-bar {
          text-align: center;
          padding: 20px;
          font-size: 14px;
          color: #666;
        }
        
        @media print {
          body { 
            margin: 0; 
            padding: 4px;
          }
          .bar-item {
            page-break-inside: avoid;
          }
        }
      `
    },
  },
}
</script>

<style scoped>
/* Same dialog styles as customer ticket */
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

.print-preview {
  padding: 24px;
  background: white;
}

.print-dialog-actions {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  border-radius: 0 0 12px 12px;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
}

.station-filter {
  display: flex;
  align-items: center;
  gap: 10px;
}

.station-filter label {
  font-weight: 500;
  color: #333;
}

.station-select {
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.print-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.print-primary {
  background: #007bff;
  color: white;
}

.print-primary:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.print-secondary {
  background: #6c757d;
  color: white;
}

.print-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Preview Styles for Dialog View */
.bar-header {
  text-align: center;
  padding: 15px;
  background: #000;
  color: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
}

.station-name {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 10px 0;
}

.order-priority {
  display: inline-block;
  padding: 6px 15px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
}

.priority-normal {
  background: #28a745;
}
.priority-high {
  background: #ffc107;
  color: #000;
}
.priority-urgent {
  background: #dc3545;
}

.bar-order-info {
  margin-bottom: 20px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 4px;
}

.info-label {
  font-weight: bold;
  color: #666;
}

.info-value {
  color: #000;
}

.info-value.bold {
  font-weight: bold;
  font-size: 16px;
}

.print-divider {
  border-top: 1px dashed #ccc;
  margin: 15px 0;
}

.print-divider-bold {
  border-top: 3px double #333;
  margin: 20px 0;
}

.section-title-large {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background: #000;
  color: #fff;
  border-radius: 6px;
  margin: 15px 0;
}

.bar-item {
  display: flex;
  gap: 15px;
  padding: 15px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  margin-bottom: 15px;
  background: #fff;
}

.item-qty-badge {
  font-size: 28px;
  font-weight: bold;
  min-width: 60px;
  background: #000;
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.item-content {
  flex: 1;
}

.item-name-large {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #000;
}

.item-notes-bar {
  display: flex;
  gap: 8px;
  margin-top: 8px;
  padding: 8px 12px;
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  border-radius: 4px;
}

.notes-text {
  font-weight: 500;
  color: #856404;
}

.item-modifiers {
  margin-top: 8px;
  padding-left: 15px;
}

.modifier-item {
  font-size: 14px;
  color: #666;
  margin: 4px 0;
}

.promo-badge-bar {
  display: inline-block;
  margin-top: 8px;
  padding: 4px 10px;
  background: #28a745;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
}

.item-checkbox {
  font-size: 36px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bar-summary {
  padding: 15px;
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  margin: 20px 0;
}

.summary-row-large {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 8px;
}

.summary-row-large .bold {
  font-weight: bold;
  font-size: 18px;
}

.bar-special-notes {
  padding: 15px;
  background: #fff3cd;
  border: 3px solid #ffc107;
  border-radius: 8px;
  margin: 20px 0;
}

.notes-header {
  font-size: 16px;
  font-weight: bold;
  color: #856404;
  margin-bottom: 8px;
}

.notes-content {
  font-size: 15px;
  color: #000;
}

.bar-footer {
  text-align: center;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px dashed #ccc;
}

.footer-time {
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
}

.footer-status {
  font-size: 14px;
  font-weight: bold;
}

.no-items-bar {
  text-align: center;
  padding: 40px;
  color: #666;
  font-style: italic;
}
</style>