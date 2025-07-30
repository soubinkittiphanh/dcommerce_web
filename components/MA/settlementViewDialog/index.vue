<template>
  <div v-if="visible" class="settlement-dialog-overlay" @click="closeDialog">
    <div class="settlement-dialog" @click.stop>
      <!-- Dialog Header -->
      <div class="dialog-header">
        <h2 class="dialog-title">Settlement Details</h2>
        <button class="close-button" @click="closeDialog">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Dialog Content -->
      <div class="dialog-content">
        <div v-if="settlement" class="settlement-details">
          <!-- Basic Settlement Information -->
          <div class="info-section">
            <h3 class="section-title">Settlement Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <label>Settlement ID:</label>
                <span>{{ settlement.id }}</span>
              </div>
              <div class="info-item">
                <label>Booking Date:</label>
                <span>{{ formatDate(settlement.bookingDate) }}</span>
              </div>
              <div class="info-item">
                <label>Amount:</label>
                <span class="amount">{{ formatAmount(settlement.amount) }}</span>
              </div>
              <div class="info-item">
                <label>Method:</label>
                <span class="method">{{ formatMethod(settlement.method) }}</span>
              </div>
              <div class="info-item">
                <label>Created At:</label>
                <span>{{ formatDateTime(settlement.createdAt) }}</span>
              </div>
              <div class="info-item">
                <label>Last Updated:</label>
                <span>{{ formatDateTime(settlement.updateTimestamp) }}</span>
              </div>
              <div v-if="settlement.notes" class="info-item full-width">
                <label>Notes:</label>
                <span>{{ settlement.notes }}</span>
              </div>
            </div>
          </div>

          <!-- Proceeder Information -->
          <div v-if="settlement.proceeder" class="info-section">
            <h3 class="section-title">Proceeder Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <label>Customer ID:</label>
                <span>{{ settlement.proceeder.cus_id }}</span>
              </div>
              <div class="info-item">
                <label>Name:</label>
                <span>{{ settlement.proceeder.cus_name }}</span>
              </div>
              <div class="info-item">
                <label>Telephone:</label>
                <span>{{ settlement.proceeder.cus_tel }}</span>
              </div>
              <div class="info-item">
                <label>Email:</label>
                <span>{{ settlement.proceeder.cus_email }}</span>
              </div>
              <div v-if="settlement.proceeder.village" class="info-item">
                <label>Village:</label>
                <span>{{ settlement.proceeder.village }}</span>
              </div>
              <div v-if="settlement.proceeder.district" class="info-item">
                <label>District:</label>
                <span>{{ settlement.proceeder.district }}</span>
              </div>
              <div v-if="settlement.proceeder.province" class="info-item">
                <label>Province:</label>
                <span>{{ settlement.proceeder.province }}</span>
              </div>
              <div class="info-item">
                <label>Status:</label>
                <span :class="['status', settlement.proceeder.cus_active ? 'active' : 'inactive']">
                  {{ settlement.proceeder.cus_active ? 'Active' : 'Inactive' }}
                </span>
              </div>
            </div>
          </div>

          <!-- Money Advance Information -->
          <div v-if="settlement.moneyAdvance" class="info-section">
            <h3 class="section-title">Money Advance Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <label>Advance ID:</label>
                <span>{{ settlement.moneyAdvance.id }}</span>
              </div>
              <div class="info-item">
                <label>Amount:</label>
                <span class="amount">{{ formatAmount(settlement.moneyAdvance.amount) }}</span>
              </div>
              <div class="info-item">
                <label>Purpose:</label>
                <span>{{ settlement.moneyAdvance.purpose || 'N/A' }}</span>
              </div>
              <div class="info-item">
                <label>Status:</label>
                <span :class="['status', settlement.moneyAdvance.status]">
                  {{ settlement.moneyAdvance.status }}
                </span>
              </div>
              <div v-if="settlement.moneyAdvance.currency" class="info-item">
                <label>Currency:</label>
                <span>{{ settlement.moneyAdvance.currency.code }} - {{ settlement.moneyAdvance.currency.name }}</span>
              </div>
              <div v-if="settlement.moneyAdvance.maker" class="info-item">
                <label>Maker:</label>
                <span>{{ settlement.moneyAdvance.maker.cus_name }}</span>
              </div>
            </div>
          </div>

          <!-- Bank Account Information -->
          <div v-if="settlement.bankAccount" class="info-section">
            <h3 class="section-title">Bank Account Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <label>Account Number:</label>
                <span>{{ settlement.bankAccount.accountNumber }}</span>
              </div>
              <div class="info-item">
                <label>Account Name:</label>
                <span>{{ settlement.bankAccount.accountName }}</span>
              </div>
              <div class="info-item">
                <label>Bank Name:</label>
                <span>{{ settlement.bankAccount.bankName }}</span>
              </div>
              <div v-if="settlement.bankAccount.bankBranch" class="info-item">
                <label>Bank Branch:</label>
                <span>{{ settlement.bankAccount.bankBranch }}</span>
              </div>
              <div class="info-item">
                <label>Account Type:</label>
                <span>{{ settlement.bankAccount.accountType }}</span>
              </div>
              <div class="info-item">
                <label>Currency:</label>
                <span>{{ settlement.bankAccount.currency }}</span>
              </div>
            </div>
          </div>

          <!-- Ministry Information -->
          <div v-if="settlement.ministry" class="info-section">
            <h3 class="section-title">Ministry Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <label>Ministry Code:</label>
                <span>{{ settlement.ministry.ministryCode }}</span>
              </div>
              <div class="info-item">
                <label>Ministry Name:</label>
                <span>{{ settlement.ministry.ministryName }}</span>
              </div>
              <div class="info-item">
                <label>Ministry Name (EN):</label>
                <span>{{ settlement.ministry.ministryNameEn }}</span>
              </div>
              <div class="info-item">
                <label>Type:</label>
                <span>{{ settlement.ministry.ministryType }}</span>
              </div>
              <div class="info-item">
                <label>Status:</label>
                <span :class="['status', settlement.ministry.status.toLowerCase()]">
                  {{ settlement.ministry.status }}
                </span>
              </div>
              <div v-if="settlement.ministry.establishedDate" class="info-item">
                <label>Established Date:</label>
                <span>{{ formatDate(settlement.ministry.establishedDate) }}</span>
              </div>
            </div>
          </div>

          <!-- Chart Account Information -->
          <div v-if="settlement.chartAccount" class="info-section">
            <h3 class="section-title">Chart Account Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <label>Account Number:</label>
                <span>{{ settlement.chartAccount.accountNumber }}</span>
              </div>
              <div class="info-item">
                <label>Account Name:</label>
                <span>{{ settlement.chartAccount.accountName }}</span>
              </div>
              <div class="info-item">
                <label>Account Type:</label>
                <span>{{ settlement.chartAccount.accountType }}</span>
              </div>
              <div class="info-item">
                <label>Status:</label>
                <span :class="['status', settlement.chartAccount.isActive ? 'active' : 'inactive']">
                  {{ settlement.chartAccount.isActive ? 'Active' : 'Inactive' }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="no-data">
          <p>No settlement data available</p>
        </div>
      </div>

      <!-- Dialog Footer -->
      <div class="dialog-footer">
        <button class="btn btn-secondary" @click="closeDialog">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettlementViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    settlement: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    formatDate(dateString) {
      if (!dateString || dateString === '0000-00-00') return 'N/A'
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    formatDateTime(dateString) {
      if (!dateString) return 'N/A'
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    },
    formatAmount(amount) {
      if (!amount) return '0'
      return new Intl.NumberFormat('en-US').format(amount)
    },
    formatMethod(method) {
      if (!method) return 'N/A'
      return method.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    }
  }
}
</script>

<style scoped>
.settlement-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.settlement-dialog {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.dialog-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  color: #6b7280;
  transition: all 0.2s;
}

.close-button:hover {
  background-color: #f3f4f6;
  color: #374151;
}

.dialog-content {
  flex: 1;
  overflow-y: auto;
  padding: 0 24px;
}

.settlement-details {
  padding: 20px 0;
}

.info-section {
  margin-bottom: 32px;
}

.info-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid #e5e7eb;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-item.full-width {
  grid-column: 1 / -1;
}

.info-item label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
}

.info-item span {
  font-size: 0.875rem;
  color: #111827;
  word-break: break-word;
}

.amount {
  font-weight: 600;
  color: #059669;
}

.method {
  font-weight: 500;
  color: #3b82f6;
}

.status {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: fit-content;
}

.status.active {
  background-color: #d1fae5;
  color: #065f46;
}

.status.inactive {
  background-color: #fee2e2;
  color: #991b1b;
}

.status.approved {
  background-color: #dbeafe;
  color: #1e40af;
}

.status.settled {
  background-color: #d1fae5;
  color: #065f46;
}

.no-data {
  text-align: center;
  padding: 40px 20px;
  color: #6b7280;
}

.dialog-footer {
  padding: 20px 24px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
}

.btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-secondary {
  background-color: #f3f4f6;
  color: #374151;
}

.btn-secondary:hover {
  background-color: #e5e7eb;
}

/* Responsive Design */
@media (max-width: 768px) {
  .settlement-dialog-overlay {
    padding: 10px;
  }
  
  .settlement-dialog {
    max-height: 95vh;
  }
  
  .dialog-header {
    padding: 16px 20px;
  }
  
  .dialog-content {
    padding: 0 20px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .dialog-title {
    font-size: 1.25rem;
  }
}
</style>