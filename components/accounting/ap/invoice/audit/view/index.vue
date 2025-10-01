<template>
  <div class="audit-log-viewer">
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
      Loading...
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
              <span class="invoice-number">{{ log.recordData?.invoiceNumber || '-' }}</span>
              <span class="vendor-name">{{ log.recordData?.vendor?.name || '-' }}</span>
            </div>
          </div>

          <!-- Reason -->
          <div v-if="log.reason" class="content-reason">
            <i class="fas fa-comment-alt"></i>
            {{ log.reason }}
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
              <label>Invoice #:</label>
              <span>{{ log.recordData?.invoiceNumber || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>Vendor Invoice #:</label>
              <span>{{ log.recordData?.vendorInvoiceNumber || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>Amount:</label>
              <span class="amount">{{ formatCurrency(log.recordData?.totalAmount) }}</span>
            </div>
            <div class="detail-item">
              <label>Status:</label>
              <span class="status" :class="`status-${log.recordData?.status}`">
                {{ getStatusText(log.recordData?.status) }}
              </span>
            </div>
            <div class="detail-item">
              <label>Due Date:</label>
              <span>{{ formatDate(log.recordData?.dueDate) }}</span>
            </div>
            <div class="detail-item">
              <label>Currency:</label>
              <span>{{ log.recordData?.currency?.code || '-' }}</span>
            </div>
          </div>

          <!-- Line Items Summary (if exists) -->
          <div v-if="log.recordData?.lineItems?.length" class="line-items-summary">
            <h4>Line Items ({{ log.recordData.lineItems.length }})</h4>
            <div class="line-items">
              <div 
                v-for="item in log.recordData.lineItems.slice(0, 3)" 
                :key="item.id" 
                class="line-item"
              >
                <span class="item-desc">{{ item.description }}</span>
                <span class="item-amount">{{ formatCurrency(item.lineTotal) }}</span>
              </div>
              <div v-if="log.recordData.lineItems.length > 3" class="more-items">
                +{{ log.recordData.lineItems.length - 3 }} more items
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="empty-state">
      <i class="fas fa-history"></i>
      <h3>No audit records found</h3>
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
  name: 'AuditLogViewer',
  
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
        action: ''
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
        // Simulate API call - replace with actual endpoint
        const response = await this.$axios.get(`/api/ap-invoices/audit/${this.invoiceId}`, {
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
        console.error('Error loading audit logs:', error);
        this.$toast?.error('Failed to load audit logs');
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
        action: ''
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
    
    getActionIcon(action) {
      const icons = {
        'CREATE': 'fas fa-plus',
        'UPDATE': 'fas fa-edit',
        'DELETE': 'fas fa-trash',
        'APPROVE': 'fas fa-check',
        'REJECT': 'fas fa-times'
      };
      return icons[action] || 'fas fa-circle';
    },
    
    getActionText(action) {
      const actions = {
        'CREATE': 'Created',
        'UPDATE': 'Updated',
        'DELETE': 'Deleted',
        'APPROVE': 'Approved',
        'REJECT': 'Rejected'
      };
      return actions[action] || action;
    },
    
    getStatusText(status) {
      const statuses = {
        'draft': 'Draft',
        'pending': 'Pending',
        'approved': 'Approved',
        'rejected': 'Rejected',
        'paid': 'Paid',
        'cancelled': 'Cancelled'
      };
      return statuses[status] || status;
    },
    
    getUserName(log) {
      return log.recordData?.maker?.cus_name || log.user?.name || 'Unknown';
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
      return new Date(date).toLocaleDateString('en-US');
    },
    
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
    }
  }
};
</script>

<style scoped>
.audit-log-viewer {
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
  color: #007bff;
}

.vendor-name {
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

.status-draft { background: #e9ecef; color: #495057; }
.status-pending { background: #fff3cd; color: #856404; }
.status-approved { background: #d4edda; color: #155724; }
.status-paid { background: #cce7ff; color: #004085; }

/* Line Items */
.line-items-summary h4 {
  font-size: 14px;
  margin: 0 0 8px 0;
  color: #333;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 4px;
}

.line-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.line-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: 12px;
}

.item-desc {
  color: #333;
}

.item-amount {
  color: #666;
  font-weight: 500;
}

.more-items {
  font-size: 11px;
  color: #666;
  text-align: center;
  padding: 4px;
  background: #f8f9fa;
  border-radius: 4px;
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
  
  .details-grid {
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
}
</style>