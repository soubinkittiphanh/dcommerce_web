<template>
  <div class="invoice-audit-viewer">
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
          <option value="sent">Sent</option>
          <option value="paid">Paid</option>
          <option value="overdue">Overdue</option>
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
      Loading invoice history...
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
            <div class="invoice-info">
              <span class="invoice-number">{{ log.recordData?.invoiceNumber || 'N/A' }}</span>
              <span class="invoice-amount">{{ formatCurrency(log.recordData?.totalAmount) }}</span>
              <span class="invoice-date">{{ formatDate(log.recordData?.invoiceDate) }}</span>
            </div>
          </div>

          <!-- Invoice Status -->
          <div class="content-status">
            <span class="status-badge" :class="`status-${log.recordData?.status}`">
              <i class="fas fa-circle"></i>
              {{ getStatusText(log.recordData?.status) }}
            </span>
            <span v-if="log.recordData?.lineItems?.length" class="line-items-count">
              {{ log.recordData.lineItems.length }} line item{{ log.recordData.lineItems.length > 1 ? 's' : '' }}
            </span>
          </div>

          <!-- Reason -->
          <div v-if="log.reason" class="content-reason">
            <i class="fas fa-comment-alt"></i>
            {{ log.reason }}
          </div>

          <!-- Description Preview -->
          <div v-if="log.recordData?.description" class="content-preview">
            <span class="description">
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
              <label>Invoice ID:</label>
              <span>{{ log.invoiceId || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>Invoice Number:</label>
              <span>{{ log.recordData?.invoiceNumber || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>Invoice Date:</label>
              <span>{{ formatDate(log.recordData?.invoiceDate) }}</span>
            </div>
            <div class="detail-item">
              <label>Due Date:</label>
              <span>{{ formatDate(log.recordData?.dueDate) }}</span>
            </div>
            <div class="detail-item">
              <label>Total Amount:</label>
              <span class="amount">{{ formatCurrency(log.recordData?.totalAmount) }}</span>
            </div>
            <div class="detail-item">
              <label>Tax Amount:</label>
              <span class="amount">{{ formatCurrency(log.recordData?.taxAmount) }}</span>
            </div>
            <div class="detail-item">
              <label>Net Amount:</label>
              <span class="amount">{{ formatCurrency(log.recordData?.netAmount) }}</span>
            </div>
            <div class="detail-item">
              <label>Status:</label>
              <span class="status" :class="`status-${log.recordData?.status}`">
                {{ getStatusText(log.recordData?.status) }}
              </span>
            </div>
            <div class="detail-item">
              <label>Client ID:</label>
              <span>{{ log.recordData?.clientId || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>Currency ID:</label>
              <span>{{ log.recordData?.currencyId || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>Exchange Rate:</label>
              <span>{{ log.recordData?.exchangeRate || '-' }}</span>
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

          <!-- Line Items -->
          <div v-if="log.recordData?.lineItems?.length" class="line-items-section">
            <h4>
              Line Items ({{ log.recordData.lineItems.length }})
              <span class="total-amount">
                Total: {{ formatCurrency(getTotalLineItemsAmount(log.recordData.lineItems)) }}
              </span>
            </h4>
            <div class="line-items-list">
              <div 
                v-for="lineItem in log.recordData.lineItems" 
                :key="lineItem.id || lineItem.tempId" 
                class="line-item"
              >
                <div class="line-item-header">
                  <span class="line-number">Line #{{ lineItem.lineNumber }}</span>
                  <span class="line-total">{{ formatCurrency(lineItem.lineTotal) }}</span>
                </div>
                <div class="line-item-details">
                  <div class="line-description">{{ lineItem.description || 'No description' }}</div>
                  <div class="line-quantities">
                    <span class="quantity">Qty: {{ lineItem.quantity }}</span>
                    <span class="unit-price">Unit Price: {{ formatCurrency(lineItem.unitPrice) }}</span>
                    <span class="tax-rate">Tax: {{ lineItem.taxRate }}%</span>
                  </div>
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
      <h3>No invoice audit records found</h3>
      <p>No changes have been recorded for this invoice yet</p>
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
  name: 'InvoiceAuditViewer',
  
  props: {
    invoiceId: {
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
    invoiceId() {
      if (this.autoLoad) {
        this.loadAuditLogs();
      }
    }
  },
  
  methods: {
    async loadAuditLogs(page = 1) {
      this.loading = true;
      
      try {
        // API call for invoice audit logs
        const response = await this.$axios.get(`/api/ar-invoices/audit/${this.invoiceId}`);
        
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
        console.error('Error loading invoice audit logs:', error);
        this.$toast?.error('Failed to load invoice audit logs');
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
      if (!prevLog || !prevLog.recordData?.totalAmount || !log.recordData?.totalAmount) return false;
      return prevLog.recordData.totalAmount !== log.recordData.totalAmount;
    },
    
    getAmountChange(log, index) {
      const prevLog = this.auditLogs[index + 1];
      const current = log.recordData?.totalAmount || 0;
      const previous = prevLog?.recordData?.totalAmount || 0;
      const diff = current - previous;
      
      if (diff > 0) return `+${this.formatCurrency(diff)}`;
      if (diff < 0) return `-${this.formatCurrency(Math.abs(diff))}`;
      return '';
    },
    
    getTotalLineItemsAmount(lineItems) {
      return lineItems.reduce((total, item) => total + (item.lineTotal || 0), 0);
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
        'sent': 'Sent',
        'paid': 'Paid',
        'overdue': 'Overdue',
        'cancelled': 'Cancelled',
        'pending': 'Pending Approval',
        'approved': 'Approved',
        'rejected': 'Rejected'
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
/* Base styles - similar to settlement audit viewer but with invoice-specific styling */
.invoice-audit-viewer {
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
  border-color: #667eea;
}

.btn-search, .btn-clear {
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.btn-search {
  background: #667eea;
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
.dot-update { background: #667eea; }
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
.badge-update { background: #e6efff; color: #004085; }
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

.invoice-info {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
}

.invoice-number {
  font-weight: 600;
  color: #667eea;
  font-size: 15px;
}

.invoice-amount {
  font-weight: 600;
  color: #28a745;
  font-size: 15px;
}

.invoice-date {
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
.status-sent { background: #d1ecf1; color: #0c5460; }
.status-paid { background: #d4edda; color: #155724; }
.status-overdue { background: #f8d7da; color: #721c24; }
.status-cancelled { background: #e2e3e5; color: #383d41; }
.status-pending { background: #fff3cd; color: #856404; }
.status-approved { background: #d4edda; color: #155724; }
.status-rejected { background: #f8d7da; color: #721c24; }

.line-items-count {
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
.description-section {
  margin-bottom: 16px;
}

.description-section h4 {
  font-size: 14px;
  margin: 0 0 8px 0;
  color: #333;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 4px;
}

.description-section p {
  margin: 0;
  font-size: 13px;
  color: #666;
  line-height: 1.4;
}

/* Line Items Section */
.line-items-section h4 {
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

.line-items-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.line-item {
  background: #f8f9fa;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.line-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.line-number {
  font-size: 13px;
  font-weight: 600;
  color: #333;
}

.line-total {
  font-size: 14px;
  font-weight: 600;
  color: #28a745;
}

.line-item-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.line-description {
  font-size: 13px;
  color: #333;
  font-weight: 500;
}

.line-quantities {
  display: flex;
  gap: 12px;
  font-size: 12px;
  color: #666;
}

.quantity, .unit-price, .tax-rate {
  padding: 2px 6px;
  background: #e9ecef;
  border-radius: 3px;
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
  border-color: #667eea;
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
  
  .line-items-section h4 {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .line-item-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .line-quantities {
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .invoice-info {
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