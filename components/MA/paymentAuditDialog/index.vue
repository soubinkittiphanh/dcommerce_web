<template>
  <div v-if="show" class="modal-overlay" @click="closeDialog">
    <div class="modal-dialog audit-dialog" @click.stop>
      <div class="modal-header audit-header">
        <div class="modal-title-section">
          <i class="fas fa-history modal-icon"></i>
          <h5 class="modal-title">
            ປະຫວັດການປ່ຽນແປງ - {{ recordTitle }}
          </h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <!-- Loading state -->
        <div v-if="loading" class="loading-container">
          <div class="spinner"></div>
          <p>ກຳລັງໂຫຼດປະຫວັດການປ່ຽນແປງ...</p>
        </div>

        <!-- Error state -->
        <div v-else-if="error" class="error-container">
          <div class="error-icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <h4>ເກີດຂໍ້ຜິດພາດ</h4>
          <p>{{ error }}</p>
          <button @click="loadAuditTrail" class="btn btn-primary btn-sm">
            <i class="fas fa-redo"></i>
            ລອງໃໝ່
          </button>
        </div>

        <!-- No data state -->
        <div v-else-if="auditTrail.length === 0" class="no-data-container">
          <div class="no-data-icon">
            <i class="fas fa-history"></i>
          </div>
          <h4>ບໍ່ມີປະຫວັດການປ່ຽນແປງ</h4>
          <p>ບໍ່ພົບປະຫວັດການປ່ຽນແປງສຳລັບບັນຊີນີ້</p>
        </div>

        <!-- Audit trail content -->
        <div v-else class="audit-content">
          <!-- Summary statistics -->
          <div class="audit-summary">
            <div class="summary-card">
              <div class="summary-icon">
                <i class="fas fa-list"></i>
              </div>
              <div class="summary-info">
                <div class="summary-label">ລວມການປ່ຽນແປງ</div>
                <div class="summary-value">{{ auditTrail.length }}</div>
              </div>
            </div>
            <div class="summary-card">
              <div class="summary-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="summary-info">
                <div class="summary-label">ການປ່ຽນແປງລ່າສຸດ</div>
                <div class="summary-value">{{ formatDateTime(auditTrail[0]?.changedAt) }}</div>
              </div>
            </div>
            <div class="summary-card">
              <div class="summary-icon">
                <i class="fas fa-user"></i>
              </div>
              <div class="summary-info">
                <div class="summary-label">ຜູ້ປ່ຽນແປງລ່າສຸດ</div>
                <div class="summary-value">{{ auditTrail[0]?.changedBy || 'ລະບົບ' }}</div>
              </div>
            </div>
          </div>

          <!-- Filter and controls -->
          <div class="audit-controls">
            <div class="filter-controls">
              <select v-model="actionFilter" @change="filterAuditTrail" class="form-control filter-select">
                <option value="">ທຸກການດຳເນີນການ</option>
                <option value="CREATE">ສ້າງ</option>
                <option value="UPDATE">ແກ້ໄຂ</option>
                <option value="APPROVE">ອະນຸມັດ</option>
                <option value="SETTLE">ຊຳລະ</option>
                <option value="DELETE">ລົບ</option>
              </select>
              <button @click="exportAuditTrail" class="btn btn-secondary btn-sm">
                <i class="fas fa-download"></i>
                ສົ່ງອອກ
              </button>
            </div>
          </div>

          <!-- Timeline view -->
          <div class="audit-timeline">
            <div 
              v-for="(item, index) in filteredAuditTrail" 
              :key="item.id"
              class="timeline-item"
              :class="{ 'expandable': item.totalChanges > 0 }"
            >
              <div class="timeline-marker">
                <i :class="getActionIcon(item.action)"></i>
              </div>
              
              <div class="timeline-content">
                <div class="timeline-header" @click="toggleExpand(item)">
                  <div class="timeline-main-info">
                    <div class="timeline-action">
                      <span :class="['action-badge', item.action.toLowerCase()]">
                        {{ getActionInLao(item.action) }}
                      </span>
                      <span class="timeline-time">{{ formatDateTime(item.changedAt) }}</span>
                    </div>
                    <div class="timeline-user">
                      <i class="fas fa-user-circle"></i>
                      {{ item.changedBy || 'ລະບົບ' }}
                    </div>
                  </div>
                  
                  <div v-if="item.totalChanges > 0" class="timeline-toggle">
                    <span class="changes-count">{{ item.totalChanges }} ການປ່ຽນແປງ</span>
                    <i 
                      :class="['fas', item.expanded ? 'fa-chevron-up' : 'fa-chevron-down']"
                      class="toggle-icon"
                    ></i>
                  </div>
                </div>

                <!-- Reason if available -->
                <div v-if="item.reason" class="timeline-reason">
                  <i class="fas fa-comment"></i>
                  <span>{{ item.reason }}</span>
                </div>

                <!-- Expanded details -->
                <div v-if="item.expanded && item.keyChanges && item.keyChanges.length > 0" class="timeline-details">
                  <div class="changes-list">
                    <h6>ລາຍລະອຽດການປ່ຽນແປງ:</h6>
                    <div 
                      v-for="change in item.keyChanges" 
                      :key="change.field"
                      class="change-item"
                    >
                      <div class="change-field">
                        <i :class="getFieldIcon(change.field)"></i>
                        {{ getFieldNameInLao(change.field) }}
                      </div>
                      <div class="change-values">
                        <div class="old-value">
                          <span class="value-label">ເກົ່າ:</span>
                          <span class="value">{{ formatValue(change.field, change.oldValue) }}</span>
                        </div>
                        <div class="arrow">
                          <i class="fas fa-arrow-right"></i>
                        </div>
                        <div class="new-value">
                          <span class="value-label">ໃໝ່:</span>
                          <span class="value">{{ formatValue(change.field, change.newValue) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- View full details button -->
                <div v-if="item.totalChanges > 3 && item.expanded" class="view-full-details">
                  <button @click="viewFullDetails(item)" class="btn btn-link btn-sm">
                    <i class="fas fa-eye"></i>
                    ເບິ່ງລາຍລະອຽດທັງໝົດ ({{ item.totalChanges }} ການປ່ຽນແປງ)
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Load more button -->
          <div v-if="hasMoreData" class="load-more-container">
            <button @click="loadMoreAuditTrail" class="btn btn-secondary" :disabled="loadingMore">
              <i v-if="loadingMore" class="fas fa-spinner fa-spin"></i>
              <i v-else class="fas fa-plus"></i>
              {{ loadingMore ? 'ກຳລັງໂຫຼດ...' : 'ໂຫຼດເພີ່ມ' }}
            </button>
          </div>
        </div>
      </div>

      <div class="modal-footer audit-footer">
        <button @click="compareVersions" class="btn btn-info" :disabled="auditTrail.length < 2">
          <i class="fas fa-balance-scale"></i>
          ປຽບທຽບເວີຊັ່ນ
        </button>
        <button @click="closeDialog" class="btn btn-secondary">
          <i class="fas fa-times"></i>
          ປິດ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoneyAdvanceAuditDialog',
  
  props: {
    show: {
      type: Boolean,
      default: false
    },
    recordId: {
      type: [Number, String],
      required: true
    },
    recordTitle: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      auditTrail: [],
      filteredAuditTrail: [],
      loading: false,
      loadingMore: false,
      error: null,
      actionFilter: '',
      currentPage: 1,
      hasMoreData: false,
      
      // Lao translations
      actionLabels: {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ', 
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      },
      
      fieldLabels: {
        amount: 'ຈຳນວນເງິນ',
        purpose: 'ຈຸດປະສົງ',
        status: 'ສະຖານະ',
        note: 'ໂນ໊ດ',
        dueDate: 'ວັນຄົບຮອບ',
        bookingDate: 'ວັນທີບັນຊີ',
        makerId: 'ຜູ້ລົງບັນຊີ',
        checkerId: 'ຜູ້ກວດ',
        currencyId: 'ສະກຸນເງິນ',
        bankAccountId: 'ບັນຊີທະນາຄານ',
        ministryId: 'ກະຊວງ',
        exchangeRate: 'ອັດຕາແລກປ່ຽນ',
        approvedAt: 'ວັນທີອະນຸມັດ'
      }
    }
  },

  watch: {
    show(newVal) {
      if (newVal && this.recordId) {
        this.loadAuditTrail()
      }
    },
    
    recordId(newVal) {
      if (newVal && this.show) {
        this.loadAuditTrail()
      }
    }
  },

  methods: {
    async loadAuditTrail() {
      this.loading = true
      this.error = null
      this.currentPage = 1
      
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 20,
            offset: 0
          }
        })
        
        this.auditTrail = response.data.data.map(item => ({
          ...item,
          expanded: false
        }))
        
        this.hasMoreData = response.data.data.length === 20
        this.filterAuditTrail()
        
      } catch (error) {
        console.error('Error loading audit trail:', error)
        this.error = error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ'
      } finally {
        this.loading = false
      }
    },

    async loadMoreAuditTrail() {
      this.loadingMore = true
      this.currentPage++
      
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 20,
            offset: (this.currentPage - 1) * 20
          }
        })
        
        const newItems = response.data.data.map(item => ({
          ...item,
          expanded: false
        }))
        
        this.auditTrail.push(...newItems)
        this.hasMoreData = newItems.length === 20
        this.filterAuditTrail()
        
      } catch (error) {
        console.error('Error loading more audit trail:', error)
        this.currentPage-- // Revert page increment on error
      } finally {
        this.loadingMore = false
      }
    },

    filterAuditTrail() {
      if (this.actionFilter) {
        this.filteredAuditTrail = this.auditTrail.filter(item => 
          item.action === this.actionFilter
        )
      } else {
        this.filteredAuditTrail = [...this.auditTrail]
      }
    },

    toggleExpand(item) {
      if (item.totalChanges > 0) {
        this.$set(item, 'expanded', !item.expanded)
      }
    },

    getActionInLao(action) {
      return this.actionLabels[action] || action
    },

    getFieldNameInLao(field) {
      return this.fieldLabels[field] || field
    },

    getActionIcon(action) {
      const icons = {
        CREATE: 'fas fa-plus text-success',
        UPDATE: 'fas fa-edit text-warning', 
        APPROVE: 'fas fa-check text-success',
        SETTLE: 'fas fa-money-bill text-info',
        DELETE: 'fas fa-trash text-danger'
      }
      return icons[action] || 'fas fa-circle'
    },

    getFieldIcon(field) {
      const icons = {
        amount: 'fas fa-dollar-sign',
        purpose: 'fas fa-tag',
        status: 'fas fa-flag',
        note: 'fas fa-sticky-note',
        dueDate: 'fas fa-calendar',
        bookingDate: 'fas fa-calendar-alt',
        makerId: 'fas fa-user',
        checkerId: 'fas fa-user-check',
        currencyId: 'fas fa-coins',
        bankAccountId: 'fas fa-university',
        ministryId: 'fas fa-building',
        exchangeRate: 'fas fa-exchange-alt',
        approvedAt: 'fas fa-check-circle'
      }
      return icons[field] || 'fas fa-info-circle'
    },

    formatValue(field, value) {
      if (value === null || value === undefined) {
        return 'ບໍ່ມີ'
      }
      
      if (field === 'amount') {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(value)
      }
      
      if (field.includes('Date') || field.includes('At')) {
        return this.formatDate(value)
      }
      
      if (field === 'status') {
        const statusLabels = {
          pending: 'ຄ້າງອະນຸມັດ',
          approved: 'ອະນຸມັດແລ້ວ',
          settled: 'ຊຳລະແລ້ວ'
        }
        return statusLabels[value] || value
      }
      
      return value.toString()
    },

    formatDateTime(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    },

    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString('lo-LA')
    },

    async exportAuditTrail() {
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 1000,
            offset: 0,
            format: 'csv'
          },
          responseType: 'blob'
        })
        
        const blob = new Blob([response.data], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `audit-trail-${this.recordId}-${Date.now()}.csv`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
        
      } catch (error) {
        console.error('Export error:', error)
        this.$emit('show-toast', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກຂໍ້ມູນ', 'error')
      }
    },

    compareVersions() {
      this.$emit('compare-versions', this.recordId)
    },

    viewFullDetails(item) {
      this.$emit('view-full-details', item)
    },

    closeDialog() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.audit-dialog {
  max-width: 900px;
  width: 95%;
  max-height: 90vh;
}

.audit-header {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
}

.audit-content {
  max-height: 70vh;
  overflow-y: auto;
}

.loading-container,
.error-container,
.no-data-container {
  text-align: center;
  padding: 40px 20px;
  color: #666;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4f46e5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-icon,
.no-data-icon {
  font-size: 48px;
  margin-bottom: 15px;
  opacity: 0.5;
}

.audit-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.summary-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.summary-icon {
  width: 40px;
  height: 40px;
  background: #4f46e5;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.summary-info {
  flex: 1;
}

.summary-label {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 4px;
}

.summary-value {
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
}

.audit-controls {
  margin-bottom: 24px;
}

.filter-controls {
  display: flex;
  gap: 12px;
  align-items: center;
}

.filter-select {
  max-width: 200px;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
}

.audit-timeline {
  position: relative;
}

.audit-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e2e8f0;
}

.timeline-item {
  position: relative;
  margin-bottom: 24px;
  margin-left: 40px;
}

.timeline-item.expandable .timeline-header {
  cursor: pointer;
}

.timeline-item.expandable .timeline-header:hover {
  background: #f8fafc;
}

.timeline-marker {
  position: absolute;
  left: -60px;
  top: 8px;
  width: 40px;
  height: 40px;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.timeline-content {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.timeline-header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.timeline-main-info {
  flex: 1;
}

.timeline-action {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
}

.action-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.action-badge.create {
  background: #dcfce7;
  color: #166534;
}

.action-badge.update {
  background: #fef3c7;
  color: #92400e;
}

.action-badge.approve {
  background: #dcfce7;
  color: #166534;
}

.action-badge.settle {
  background: #dbeafe;
  color: #1e40af;
}

.action-badge.delete {
  background: #fee2e2;
  color: #dc2626;
}

.timeline-time {
  font-size: 12px;
  color: #64748b;
}

.timeline-user {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #475569;
}

.timeline-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
}

.changes-count {
  font-size: 12px;
}

.toggle-icon {
  font-size: 12px;
  transition: transform 0.2s;
}

.timeline-reason {
  padding: 8px 16px;
  background: #f1f5f9;
  border-top: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #475569;
  font-style: italic;
}

.timeline-details {
  padding: 16px;
  border-top: 1px solid #e2e8f0;
  background: #fafbfc;
}

.changes-list h6 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #374151;
}

.change-item {
  margin-bottom: 12px;
  padding: 12px;
  background: white;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.change-field {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.change-values {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 12px;
  align-items: center;
}

.old-value,
.new-value {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.value-label {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}

.value {
  font-size: 14px;
  color: #1e293b;
  padding: 6px 8px;
  background: #f8fafc;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
}

.old-value .value {
  background: #fef2f2;
  border-color: #fecaca;
  color: #991b1b;
}

.new-value .value {
  background: #f0fdf4;
  border-color: #bbf7d0;
  color: #166534;
}

.arrow {
  color: #64748b;
  font-size: 14px;
}

.view-full-details {
  margin-top: 12px;
  text-align: center;
}

.load-more-container {
  text-align: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e2e8f0;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background: #4f46e5;
  color: white;
}

.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-info {
  background: #0ea5e9;
  color: white;
}

.btn-link {
  background: none;
  color: #4f46e5;
  text-decoration: none;
  border: 1px solid transparent;
}

.btn-link:hover {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 12px;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.audit-footer {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .audit-dialog {
    width: 98%;
    margin: 10px;
  }
  
  .audit-summary {
    grid-template-columns: 1fr;
  }
  
  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-select {
    max-width: none;
  }
  
  .timeline-item {
    margin-left: 20px;
  }
  
  .timeline-marker {
    left: -40px;
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
  
  .change-values {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  
  .arrow {
    text-align: center;
    transform: rotate(90deg);
  }
  
  .audit-footer {
    flex-direction: column-reverse;
  }
  
  .audit-footer .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>