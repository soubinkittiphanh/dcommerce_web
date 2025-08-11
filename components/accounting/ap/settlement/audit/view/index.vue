<template>
  <div class="settlement-audit-viewer">
    <!-- Simple Filters -->
    <div class="filters" v-if="showFilters">
      <div class="filter-group">
        <input 
          v-model="filters.dateFrom" 
          type="date" 
          class="filter-input"
          placeholder="From date"
        />
        <input 
          v-model="filters.dateTo" 
          type="date" 
          class="filter-input"
          placeholder="To date"
        />
        <select v-model="filters.action" class="filter-input">
          <option value="">All Actions</option>
          <option value="CREATE">Created</option>
          <option value="UPDATE">Updated</option>
          <option value="DELETE">Deleted</option>
          <option value="APPROVE">Approved</option>
          <option value="REJECT">Rejected</option>
          <option value="SUBMIT">Submitted</option>
          <option value="CANCEL">Cancelled</option>
        </select>
        <select v-model="filters.status" class="filter-input">
          <option value="">All Status</option>
          <option value="draft">Draft</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
          <option value="paid">Paid</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button @click="loadAuditLogs" class="btn-search">
          <i class="fas fa-search"></i>
        </button>
        <button @click="clearFilters" class="btn-clear">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="loading">
      <i class="fas fa-spinner fa-spin"></i>
      Loading settlement history...
    </div>

    <!-- Timeline -->
    <div v-else-if="auditLogs.length > 0" class="timeline">
      <div 
        v-for="(log, index) in auditLogs" 
        :key="log.id" 
        class="timeline-item"
        :class="{ 'expanded': expandedId === log.id }"
      >
        <!-- Timeline Dot -->
        <div class="timeline-dot" :class="`dot-${log.action.toLowerCase()}`">
          <i :class="getActionIcon(log.action)"></i>
        </div>

        <!-- Timeline Content -->
        <div class="timeline-content" @click="toggleExpand(log.id)">
          <!-- Header -->
          <div class="content-header">
            <div class="action-info">
              <span class="action-badge" :class="`badge-${log.action.toLowerCase()}`">
                {{ getActionText(log.action) }}
              </span>
              <span class="amount-change" v-if="showAmountChange(log, index)">
                {{ getAmountChange(log, index) }}
              </span>
            </div>
            <span class="timestamp">{{ formatTime(log.auditDate) }}</span>
          </div>

          <!-- User & Basic Info -->
          <div class="content-main">
            <div class="user-info">
              <i class="fas fa-user"></i>
              <span>{{ getUserName(log) }}</span>
            </div>
            <div class="settlement-info">
              <span class="settlement-amount">{{ formatCurrency(log.recordData?.paymentAmount) }}</span>
              <span class="settlement-date">{{ formatDate(log.recordData?.settlementDate) }}</span>
            </div>
          </div>

          <!-- Settlement Status -->
          <div class="content-status">
            <span class="status-badge" :class="`status-${log.recordData?.status}`">
              <i class="fas fa-circle"></i>
              {{ getStatusText(log.recordData?.status) }}
            </span>
            <span v-if="log.recordData?.invoiceSettlements?.length" class="settlements-count">
              {{ log.recordData.invoiceSettlements.length }} invoice{{ log.recordData.invoiceSettlements.length > 1 ? 's' : '' }}
            </span>
          </div>

          <!-- Reason -->
          <div v-if="log.reason" class="content-reason">
            <i class="fas fa-comment-alt"></i>
            {{ log.reason }}
          </div>

          <!-- Reference & Description Preview -->
          <div v-if="log.recordData?.reference || log.recordData?.description" class="content-preview">
            <span v-if="log.recordData.reference" class="reference">
              Ref: {{ log.recordData.reference }}
            </span>
            <span v-if="log.recordData.description" class="description">
              {{ truncateText(log.recordData.description, 50) }}
            </span>
          </div>

          <!-- Expand indicator -->
          <div class="expand-indicator">
            <i class="fas" :class="expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
          </div>
        </div>

        <!-- Expanded Details -->
        <div v-if="expandedId === log.id" class="expanded-details">
          <div class="details-grid">
            <div class="detail-item">
              <label>Settlement ID:</label>
              <span>{{ log.settlementId || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>Settlement Date:</label>
              <span>{{ formatDate(log.recordData?.settlementDate) }}</span>
            </div>
            <div class="detail-item">
              <label>Payment Amount:</label>
              <span class="amount">{{ formatCurrency(log.recordData?.paymentAmount) }}</span>
            </div>
            <div class="detail-item">
              <label>Base Amount:</label>
              <span class="amount">{{ formatCurrency(log.recordData?.baseAmount) }}</span>
            </div>
            <div class="detail-item">
              <label>Status:</label>
              <span class="status" :class="`status-${log.recordData?.status}`">
                {{ getStatusText(log.recordData?.status) }}
              </span>
            </div>
            <div class="detail-item">
              <label>Reference:</label>
              <span>{{ log.recordData?.reference || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>Payment Method:</label>
              <span>{{ log.recordData?.paymentMethod?.name || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>Bank Account:</label>
              <span>{{ log.recordData?.bankAccount?.accountName || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>Created:</label>
              <span>{{ formatDateTime(log.recordData?.createdAt) }}</span>
            </div>
            <div class="detail-item">
              <label>Last Updated:</label>
              <span>{{ formatDateTime(log.recordData?.updateTimestamp) }}</span>
            </div>
          </div>

          <!-- Description -->
          <div v-if="log.recordData?.description" class="description-section">
            <h4>Description</h4>
            <p>{{ log.recordData.description }}</p>
          </div>

          <!-- Note -->
          <div v-if="log.recordData?.note" class="note-section">
            <h4>Note</h4>
            <p>{{ log.recordData.note }}</p>
          </div>

          <!-- Invoice Settlements -->
          <div v-if="log.recordData?.invoiceSettlements?.length" class="settlements-section">
            <h4>
              Invoice Settlements ({{ log.recordData.invoiceSettlements.length }})
              <span class="total-amount">
                Total: {{ formatCurrency(getTotalSettlementAmount(log.recordData.invoiceSettlements)) }}
              </span>
            </h4>
            <div class="settlements-list">
              <div 
                v-for="settlement in log.recordData.invoiceSettlements" 
                :key="settlement.id" 
                class="settlement-item"
              >
                <div class="settlement-header">
                  <span class="settlement-id">Settlement #{{ settlement.id }}</span>
                  <span class="settlement-amount">{{ formatCurrency(settlement.amount) }}</span>
                </div>
                <div class="settlement-details">
                  <span class="line-item">Line Item #{{ settlement.invoiceLineItemId }}</span>
                  <span class="settlement-status" :class="`status-${settlement.status}`">
                    {{ getStatusText(settlement.status) }}
                  </span>
                  <span class="settlement-date">{{ formatDateTime(settlement.createdAt) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Approval Info -->
          <div v-if="log.recordData?.maker || log.recordData?.checker" class="approval-section">
            <h4>Approval Information</h4>
            <div class="approval-grid">
              <div v-if="log.recordData.maker" class="approval-item">
                <label>Maker:</label>
                <span>{{ log.recordData.maker.cus_name || log.recordData.maker.name || '-' }}</span>
              </div>
              <div v-if="log.recordData.checker" class="approval-item">
                <label>Checker:</label>
                <span>{{ log.recordData.checker.cus_name || log.recordData.checker.name || '-' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="empty-state">
      <i class="fas fa-history"></i>
      <h3>No settlement audit records found</h3>
      <p>No changes have been recorded for this settlement yet</p>
    </div>

    <!-- Simple Pagination -->
    <div v-if="pagination.pages > 1" class="pagination">
      <button 
        @click="changePage(pagination.page - 1)"
        :disabled="pagination.page <= 1"
        class="page-btn"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      
      <span class="page-info">
        {{ pagination.page }} / {{ pagination.pages }}
      </span>
      
      <button 
        @click="changePage(pagination.page + 1)"
        :disabled="pagination.page >= pagination.pages"
        class="page-btn"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettlementAuditViewer',
  
  props: {
    settlementId: {
      type: [Number, String],
      default: null
    },
    autoLoad: {
      type: Boolean,
      default: true
    },
    showFilters: {
      type: Boolean,
      default: true
    }
  },
  
  emits: ['logs-loaded'],
  
  data() {
    return {
      loading: false,
      auditLogs: [],
      expandedId: null,
      
      filters: {
        dateFrom: '',
        dateTo: '',
        action: '',
        status: ''
      },
      
      pagination: {
        page: 1,
        limit: 10,
        total: 0,
        pages: 0
      }
    };
  },
  
  mounted() {
    if (this.autoLoad) {
      this.loadAuditLogs();
    }
  },
  
  watch: {
    settlementId() {
      if (this.autoLoad) {
        this.loadAuditLogs();
      }
    }
  },
  
  methods: {
    async loadAuditLogs(page = 1) {
      this.loading = true;
      
      try {
        // API call for settlement audit logs
        const response = await this.$axios.get(`/api/ap-invoices-settlement/audit/${this.settlementId}`, {
          params: {
            page,
            limit: this.pagination.limit,
            ...this.filters
          }
        });
        
        if (response.data.success) {
          this.auditLogs = this.processAuditLogs(response.data.data);
          this.pagination = response.data.pagination || {
            page: 1,
            limit: 10,
            total: this.auditLogs.length,
            pages: Math.ceil(this.auditLogs.length / 10)
          };
          
          this.$emit('logs-loaded', this.auditLogs);
        }
      } catch (error) {
        console.error('Error loading settlement audit logs:', error);
        this.$toast?.error('Failed to load settlement audit logs');
      } finally {
        this.loading = false;
      }
    },
    
    processAuditLogs(logs) {
      return logs.map(log => {
        if (typeof log.recordData === 'string') {
          try {
            log.recordData = JSON.parse(log.recordData);
          } catch (e) {
            console.warn('Failed to parse recordData:', e);
          }
        }
        return log;
      }).sort((a, b) => new Date(b.auditDate) - new Date(a.auditDate));
    },
    
    toggleExpand(logId) {
      this.expandedId = this.expandedId === logId ? null : logId;
    },
    
    changePage(page) {
      if (page >= 1 && page <= this.pagination.pages) {
        this.loadAuditLogs(page);
      }
    },
    
    clearFilters() {
      this.filters = {
        dateFrom: '',
        dateTo: '',
        action: '',
        status: ''
      };
      this.loadAuditLogs();
    },
    
    showAmountChange(log, index) {
      if (log.action !== 'UPDATE' || index === this.auditLogs.length - 1) return false;
      const prevLog = this.auditLogs[index + 1];
      if (!prevLog || !prevLog.recordData?.paymentAmount || !log.recordData?.paymentAmount) return false;
      return prevLog.recordData.paymentAmount !== log.recordData.paymentAmount;
    },
    
    getAmountChange(log, index) {
      const prevLog = this.auditLogs[index + 1];
      const current = log.recordData?.paymentAmount || 0;
      const previous = prevLog?.recordData?.paymentAmount || 0;
      const diff = current - previous;
      
      if (diff > 0) return `+${this.formatCurrency(diff)}`;
      if (diff < 0) return `-${this.formatCurrency(Math.abs(diff))}`;
      return '';
    },
    
    getTotalSettlementAmount(settlements) {
      return settlements.reduce((total, settlement) => total + (settlement.amount || 0), 0);
    },
    
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    
    getActionIcon(action) {
      const icons = {
        'CREATE': 'fas fa-plus',
        'UPDATE': 'fas fa-edit',
        'DELETE': 'fas fa-trash',
        'APPROVE': 'fas fa-check',
        'REJECT': 'fas fa-times',
        'SUBMIT': 'fas fa-paper-plane',
        'CANCEL': 'fas fa-ban'
      };
      return icons[action] || 'fas fa-circle';
    },
    
    getActionText(action) {
      const actions = {
        'CREATE': 'Created',
        'UPDATE': 'Updated',
        'DELETE': 'Deleted',
        'APPROVE': 'Approved',
        'REJECT': 'Rejected',
        'SUBMIT': 'Submitted',
        'CANCEL': 'Cancelled'
      };
      return actions[action] || action;
    },
    
    getStatusText(status) {
      const statuses = {
        'draft': 'Draft',
        'pending': 'Pending Approval',
        'approved': 'Approved',
        'rejected': 'Rejected',
        'paid': 'Paid',
        'cancelled': 'Cancelled',
        'active': 'Active',
        'inactive': 'Inactive'
      };
      return statuses[status] || status;
    },
    
    getUserName(log) {
      return log.recordData?.maker?.cus_name || 
             log.recordData?.checker?.cus_name || 
             log.user?.name || 
             'Unknown User';
    },
    
    formatTime(date) {
      if (!date) return '-';
      const now = new Date();
      const logDate = new Date(date);
      const diffHours = Math.abs(now - logDate) / (1000 * 60 * 60);
      
      if (diffHours < 24) {
        return logDate.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        });
      } else {
        return logDate.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric' 
        });
      }
    },
    
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    
    formatDateTime(date) {
      if (!date) return '-';
      return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(amount);
    }
  }
};
</script>

<style scoped>
/* Base styles - similar to invoice audit viewer */
.settlement-audit-viewer {
  height: 100%;
  background: #fafafa;
  display: flex;
  flex-direction: column;
}

/* Filters */
.filters {
  background: white;
  padding: 16px;
  border-bottom: 1px solid #e5e5e5;
}

.filter-group {
  display: flex;
  gap: 8px;
  align-items: center;
}

.filter-input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  min-width: 120px;
}

.filter-input:focus {
  outline: none;
  border-color: #007bff;
}

.btn-search, .btn-clear {
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.btn-search {
  background: #007bff;
  color: white;
}

.btn-clear {
  background: #6c757d;
  color: white;
}

/* Loading */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 48px;
  color: #666;
  font-size: 16px;
}

/* Timeline */
.timeline {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  position: relative;
}

.timeline-item {
  position: relative;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.timeline-item:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 19px;
  top: 40px;
  bottom: -20px;
  width: 2px;
  background: #e5e5e5;
}

/* Timeline Dot */
.timeline-dot {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
  z-index: 1;
  position: relative;
}

.dot-create { background: #28a745; }
.dot-update { background: #007bff; }
.dot-delete { background: #dc3545; }
.dot-approve { background: #28a745; }
.dot-reject { background: #dc3545; }
.dot-submit { background: #17a2b8; }
.dot-cancel { background: #ffc107; }

/* Timeline Content */
.timeline-content {
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.timeline-content:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.timeline-item.expanded .timeline-content {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

/* Content Header */
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.action-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.action-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.badge-create { background: #d4edda; color: #155724; }
.badge-update { background: #cce7ff; color: #004085; }
.badge-delete { background: #f8d7da; color: #721c24; }
.badge-approve { background: #d4edda; color: #155724; }
.badge-reject { background: #f8d7da; color: #721c24; }
.badge-submit { background: #d1ecf1; color: #0c5460; }
.badge-cancel { background: #fff3cd; color: #856404; }

.amount-change {
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  background: #fff3cd;
  color: #856404;
}

.timestamp {
  font-size: 12px;
  color: #666;
  font-weight: 500;
}

/* Content Main */
.content-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.user-info i {
  color: #666;
  font-size: 12px;
}

.settlement-info {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
}

.settlement-amount {
  font-weight: 600;
  color: #28a745;
  font-size: 15px;
}

.settlement-date {
  color: #666;
  font-size: 13px;
}

/* Content Status */
.content-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.status-badge i {
  font-size: 8px;
}

.status-draft { background: #e9ecef; color: #495057; }
.status-pending { background: #fff3cd; color: #856404; }
.status-approved { background: #d4edda; color: #155724; }
.status-rejected { background: #f8d7da; color: #721c24; }
.status-paid { background: #cce7ff; color: #004085; }
.status-active { background: #d1ecf1; color: #0c5460; }

.settlements-count {
  font-size: 12px;
  color: #666;
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 3px;
}

/* Content Preview */
.content-preview {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
  font-size: 13px;
}

.reference {
  color: #007bff;
  font-weight: 500;
}

.description {
  color: #666;
}

/* Content Reason */
.content-reason {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #666;
  font-style: italic;
  margin-bottom: 8px;
}

.content-reason i {
  font-size: 11px;
}

/* Expand Indicator */
.expand-indicator {
  position: absolute;
  top: 16px;
  right: 16px;
  color: #666;
  font-size: 12px;
}

/* Expanded Details */
.expanded-details {
  background: white;
  border: 1px solid #e5e5e5;
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 16px;
  margin-left: 54px;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f5f5f5;
}

.detail-item label {
  font-size: 12px;
  color: #666;
  font-weight: 500;
}

.detail-item span {
  font-size: 13px;
  color: #333;
}

.amount {
  font-weight: 600;
  color: #28a745;
}

.status {
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
}

/* Sections */
.description-section, .note-section {
  margin-bottom: 16px;
}

.description-section h4, .note-section h4 {
  font-size: 14px;
  margin: 0 0 8px 0;
  color: #333;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 4px;
}

.description-section p, .note-section p {
  margin: 0;
  font-size: 13px;
  color: #666;
  line-height: 1.4;
}

/* Settlements Section */
.settlements-section h4 {
  font-size: 14px;
  margin: 0 0 12px 0;
  color: #333;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-amount {
  font-size: 13px;
  color: #28a745;
  font-weight: 600;
}

.settlements-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.settlement-item {
  background: #f8f9fa;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.settlement-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.settlement-id {
  font-size: 13px;
  font-weight: 600;
  color: #333;
}

.settlement-amount {
  font-size: 14px;
  font-weight: 600;
  color: #28a745;
}

.settlement-details {
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 12px;
}

.line-item {
  color: #666;
}

.settlement-status {
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 500;
}

.settlement-date {
  color: #999;
}

/* Approval Section */
.approval-section h4 {
  font-size: 14px;
  margin: 0 0 8px 0;
  color: #333;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 4px;
}

.approval-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.approval-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f5f5f5;
}

.approval-item label {
  font-size: 12px;
  color: #666;
  font-weight: 500;
}

.approval-item span {
  font-size: 13px;
  color: #333;
}

/* Empty State */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  color: #666;
  text-align: center;
}

.empty-state i {
  font-size: 48px;
  color: #ddd;
  margin-bottom: 16px;
}

.empty-state h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
}

.empty-state p {
  margin: 0;
  font-size: 14px;
}

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  background: white;
  border-top: 1px solid #e5e5e5;
}

.page-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.page-btn:hover:not(:disabled) {
  background: #f8f9fa;
  border-color: #007bff;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline {
    padding: 16px;
  }
  
  .content-main {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .content-status {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .approval-grid {
    grid-template-columns: 1fr;
  }
  
  .expanded-details {
    margin-left: 0;
  }
  
  .timeline-item:not(:last-child)::before {
    display: none;
  }
  
  .filter-group {
    flex-wrap: wrap;
  }
  
  .settlements-section h4 {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .settlement-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .settlement-details {
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .settlement-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .content-preview {
    flex-direction: column;
    gap: 4px;
  }
  
  .filter-input {
    min-width: 100px;
  }
}
</style>