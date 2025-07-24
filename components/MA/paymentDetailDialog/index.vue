<template>
  <div v-if="show" class="modal-overlay" @click="closeDialog">
    <div class="modal-dialog detail-dialog" @click.stop>
      <div class="modal-header">
        <div class="modal-title-section">
          <i class="fas fa-file-invoice-dollar modal-icon"></i>
          <h5 class="modal-title">ລາຍລະອຽດການອອກລາຍຈ່າຍ</h5>
        </div>
        <div class="header-actions">
          <button @click="printDetails" class="btn-icon" title="Print">
            <i class="fas fa-print"></i>
          </button>
          <button @click="downloadDetails" class="btn-icon" title="Download">
            <i class="fas fa-download"></i>
          </button>
          <button @click="closeDialog" class="close-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div class="modal-body detail-body">
        <!-- Loading state -->
        <div v-if="loading" class="detail-loading">
          <div class="spinner-small"></div>
          <p>Loading details...</p>
        </div>

        <!-- Details content -->
        <div v-else-if="details" class="detail-content">
          <!-- Status Badge -->
          <div class="detail-status">
            <span :class="['status-badge', 'status-' + details.status]">
              <i class="fas" :class="getStatusIcon(details.status)"></i>
              {{ getStatusInLao(details.status) }}
            </span>
          </div>

          <!-- Main Information -->
          <div class="detail-section">
            <h6 class="section-title">
              <i class="fas fa-info-circle"></i>
              ຂໍ້ມູນເບື້ອງຕົ້ນ
            </h6>
            <div class="detail-grid">
              <div class="detail-item">
                <label>ID</label>
                <span class="detail-value">#{{ details.id }}</span>
              </div>
              <div class="detail-item">
                <label>ຈຳນວນເງິນ</label>
                <span class="detail-value amount-display">
                  {{ formatCurrency(details.amount) }}
                  <small>{{ details.currency?.code }}</small>
                </span>
              </div>
              <div class="detail-item full-width">
                <label>ຈຸດປະສົງ</label>
                <span class="detail-value">{{
                  details.purpose || 'No purpose specified'
                }}</span>
              </div>
            </div>
          </div>

          <!-- User Information -->
          <div class="detail-section">
            <h6 class="section-title">
              <i class="fas fa-users"></i>
              ຜູ້ໃຊ້ ທີ່ກ່ຽວຂ້ອງ
            </h6>
            <div class="detail-grid">
              <div class="detail-item">
                <label>ຜູ້ລົງບັນຊີ</label>
                <span class="detail-value user-info">
                  <i class="fas fa-user"></i>
                  {{ details.maker?.cus_name || 'N/A' }}
                </span>
              </div>
              <div class="detail-item">
                <label>ຜູ້ອະນຸມັດ</label>
                <span class="detail-value user-info">
                  <i class="fas fa-user-check"></i>
                  {{ details.checker?.cus_name || 'Not yet approved' }}
                </span>
              </div>
            </div>
          </div>

          <!-- Dates Information -->
          <div class="detail-section">
            <h6 class="section-title">
              <i class="fas fa-calendar"></i>
              ການເຄື່ອນໄຫວລາຍການ
            </h6>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-icon created">
                  <i class="fas fa-plus"></i>
                </div>
                <div class="timeline-content">
                  <label>ລົງບັນຊີລາຍຈ່າຍ</label>
                  <span class="timeline-date">{{
                    formatDateTime(details.createdAt)
                  }}</span>
                </div>
              </div>

              <div v-if="details.approvedAt" class="timeline-item">
                <div class="timeline-icon approved">
                  <i class="fas fa-check"></i>
                </div>
                <div class="timeline-content">
                  <label>ອະນຸມັດແລ້ວ</label>
                  <span class="timeline-date">{{
                    formatDateTime(details.approvedAt)
                  }}</span>
                </div>
              </div>

              <div v-if="details.dueDate" class="timeline-item">
                <div
                  class="timeline-icon due"
                  :class="{ overdue: isOverdue(details.dueDate) }"
                >
                  <i class="fas fa-clock"></i>
                </div>
                <div class="timeline-content">
                  <label>ວັນຄົບຮອບຄວນຊຳລະ</label>
                  <span
                    class="timeline-date"
                    :class="{ overdue: isOverdue(details.dueDate) }"
                  >
                    {{ formatDateTime(details.dueDate) }}
                    <span
                      v-if="isOverdue(details.dueDate)"
                      class="overdue-badge"
                    >
                      <i class="fas fa-exclamation-triangle"></i> Overdue
                    </span>
                  </span>
                </div>
              </div>

              <div v-if="details.settledAt" class="timeline-item">
                <div class="timeline-icon settled">
                  <i class="fas fa-money-bill"></i>
                </div>
                <div class="timeline-content">
                  <label>ຮັບຊຳລະ</label>
                  <span class="timeline-date">{{
                    formatDateTime(details.settledAt)
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Notes Section -->
          <div v-if="details.note" class="detail-section">
            <h6 class="section-title">
              <i class="fas fa-sticky-note"></i>
              Notes
            </h6>
            <div class="notes-content">
              {{ details.note }}
            </div>
          </div>

          <!-- Action History (if available) -->
          <div
            v-if="details.history && details.history.length > 0"
            class="detail-section"
          >
            <h6 class="section-title">
              <i class="fas fa-history"></i>
              Action History
            </h6>
            <div class="history-list">
              <div
                v-for="(history, index) in details.history"
                :key="index"
                class="history-item"
              >
                <div class="history-icon">
                  <i class="fas" :class="getHistoryIcon(history.action)"></i>
                </div>
                <div class="history-content">
                  <span class="history-action">{{ history.action }}</span>
                  <span class="history-user">by {{ history.user }}</span>
                  <span class="history-date">{{
                    formatDateTime(history.createdAt)
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Error state -->
        <div v-else class="detail-error">
          <i class="fas fa-exclamation-triangle"></i>
          <p>Failed to load advance details</p>
          <button @click="retryLoad" class="btn btn-primary btn-sm">
            <i class="fas fa-redo"></i> Try Again
          </button>
        </div>
      </div>

      <div class="modal-footer detail-footer">
        <button @click="closeDialog" class="btn btn-secondary close-detail-btn">
          <i class="fas fa-times"></i>
          Close
        </button>

        <!-- Action buttons based on status -->
        <div class="detail-actions">
          <button
            v-if="details && details.status === 'pending'"
            @click="editAdvance"
            class="btn btn-warning action-btn"
            title="Edit"
          >
            <i class="fas fa-edit"></i>
          </button>
          <button
            v-if="details && details.status === 'pending'"
            @click="approveAdvance"
            class="btn btn-success action-btn"
            title="Approve"
          >
            <i class="fas fa-check"></i>
          </button>
          <button
            v-if="details && details.status === 'approved'"
            @click="createSettlement"
            class="btn btn-success action-btn"
            title="Create Settlement"
          >
            <i class="fas fa-file-invoice-dollar"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoneyAdvanceDetailDialog',

  props: {
    show: {
      type: Boolean,
      default: false
    },
    details: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    statusLabels: {
      type: Object,
      default: () => ({
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        settled: 'ຊຳລະແລ້ວ',
        rejected: 'ປະຕິເສດ',
        cancelled: 'ຍົກເລີກ',
      })
    }
  },

  methods: {
    closeDialog() {
      this.$emit('close')
    },

    printDetails() {
      this.$emit('print')
    },

    downloadDetails() {
      this.$emit('download')
    },

    retryLoad() {
      this.$emit('retry-load')
    },

    editAdvance() {
      this.$emit('edit', this.details)
    },

    approveAdvance() {
      this.$emit('approve', this.details)
    },

    createSettlement() {
      this.$emit('create-settlement', this.details)
    },

    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase()
    },

    getStatusIcon(status) {
      const icons = {
        pending: 'fa-clock',
        approved: 'fa-check-circle',
        settled: 'fa-money-bill-wave',
        rejected: 'fa-times-circle',
        cancelled: 'fa-ban',
      }
      return icons[status] || 'fa-question-circle'
    },

    getHistoryIcon(action) {
      const icons = {
        created: 'fa-plus',
        updated: 'fa-edit',
        approved: 'fa-check',
        settled: 'fa-money-bill',
        deleted: 'fa-trash',
        rejected: 'fa-times',
        cancelled: 'fa-ban',
      }
      return icons[action] || 'fa-history'
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount || 0)
    },

    formatDateTime(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleString()
    },

    isOverdue(dueDate) {
      if (!dueDate) return false
      return new Date(dueDate) < new Date()
    },
  },
}
</script>

<style scoped>
/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.detail-dialog {
  background: white;
  border-radius: 12px;
  max-width: 850px;
  width: 95%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e9ecef;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.modal-title-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.modal-icon {
  font-size: 20px;
  opacity: 0.9;
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-icon {
  background: none;
  border: none;
  color: white;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.2s;
}

.btn-icon:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: white;
  opacity: 0.8;
  transition: opacity 0.2s;
  padding: 8px;
  border-radius: 4px;
}

.close-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

.modal-body {
  padding: 0;
  max-height: 70vh;
  overflow-y: auto;
}

.detail-body {
  background: #f8f9fa;
}

.detail-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
  color: #666;
  background: white;
  margin: 20px;
  border-radius: 8px;
  border: 2px solid #e9ecef;
}

.spinner-small {
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.detail-content {
  padding: 24px;
  gap: 20px;
  display: flex;
  flex-direction: column;
}

.detail-status {
  text-align: center;
  margin-bottom: 0;
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 2px solid transparent;
}

.status-badge.status-pending {
  background: linear-gradient(135deg, #f39c12, #e67e22);
  color: white;
  border-color: #d68910;
}

.status-badge.status-approved {
  background: linear-gradient(135deg, #27ae60, #229954);
  color: white;
  border-color: #1e8449;
}

.status-badge.status-settled {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border-color: #2471a3;
}

.status-badge.status-rejected {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  border-color: #a93226;
}

.status-badge.status-cancelled {
  background: linear-gradient(135deg, #95a5a6, #7f8c8d);
  color: white;
  border-color: #6c7b7d;
}

.detail-section {
  background: white;
  margin-bottom: 20px;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
}

.detail-section:hover {
  border-color: #dee2e6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.detail-section:last-child {
  margin-bottom: 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 3px solid #ecf0f1;
}

.section-title i {
  color: #3498db;
  font-size: 16px;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  transition: all 0.2s ease;
}

.detail-item:hover {
  background: #e8f4fd;
  border-color: #3498db;
}

.detail-item.full-width {
  grid-column: 1 / -1;
}

.detail-item label {
  font-size: 12px;
  color: #6c757d;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.8px;
  margin-bottom: 4px;
}

.detail-value {
  font-size: 16px;
  color: #2c3e50;
  font-weight: 600;
  word-break: break-word;
}

.amount-display {
  font-size: 28px;
  font-weight: 800;
  color: #27ae60;
  text-align: center;
  padding: 8px;
  background: linear-gradient(135deg, #d5f4e6, #fafafa);
  border-radius: 8px;
  border: 2px solid #a9dfbf;
}

.amount-display small {
  font-size: 16px;
  color: #6c757d;
  margin-left: 8px;
  font-weight: 500;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: #e8f4fd;
  border-radius: 6px;
  border: 1px solid #85c1e9;
}

.user-info i {
  color: #3498db;
  font-size: 14px;
}

.timeline {
  position: relative;
  padding: 20px;
  background: #fafafa;
  border-radius: 8px;
  border: 2px solid #e9ecef;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 35px;
  top: 20px;
  bottom: 20px;
  width: 3px;
  background: linear-gradient(to bottom, #3498db, #ecf0f1);
  border-radius: 2px;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
  background: white;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid #ecf0f1;
  margin-left: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  z-index: 1;
  margin-right: 20px;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: -36px;
}

.timeline-icon.created {
  background: linear-gradient(135deg, #3498db, #2980b9);
}

.timeline-icon.approved {
  background: linear-gradient(135deg, #27ae60, #229954);
}

.timeline-icon.due {
  background: linear-gradient(135deg, #f39c12, #e67e22);
}

.timeline-icon.due.overdue {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  animation: pulse 2s infinite;
}

.timeline-icon.settled {
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7), 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(231, 76, 60, 0), 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(231, 76, 60, 0), 0 2px 8px rgba(0, 0, 0, 0.2);
  }
}

.timeline-content {
  flex: 1;
  margin-left: 20px;
}

.timeline-content label {
  display: block;
  font-size: 12px;
  color: #6c757d;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.timeline-date {
  font-size: 15px;
  color: #2c3e50;
  font-weight: 600;
}

.timeline-date.overdue {
  color: #e74c3c;
  font-weight: 700;
}

.overdue-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  margin-left: 8px;
  border: 1px solid #a93226;
  font-weight: 600;
}

.notes-content {
  background: #fff9e6;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #f7dc6f;
  border-left: 6px solid #f1c40f;
  font-style: italic;
  color: #2c3e50;
  line-height: 1.8;
  font-size: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.history-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 2px solid #ecf0f1;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.history-item:hover {
  border-color: #3498db;
  background: #f8fcff;
}

.history-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3498db, #2980b9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  border: 2px solid #85c1e9;
  flex-shrink: 0;
}

.history-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.history-action {
  font-weight: 700;
  color: #2c3e50;
  text-transform: capitalize;
  font-size: 15px;
}

.history-user {
  font-size: 13px;
  color: #6c757d;
  font-weight: 500;
}

.history-date {
  font-size: 12px;
  color: #95a5a6;
  font-weight: 400;
}

.detail-error {
  text-align: center;
  padding: 60px 20px;
  color: #e74c3c;
  background: white;
  margin: 20px;
  border-radius: 12px;
  border: 2px solid #fadbd8;
}

.detail-error i {
  font-size: 48px;
  margin-bottom: 15px;
  opacity: 0.7;
}

.detail-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  border-top: 2px solid #e9ecef;
  padding: 16px 24px;
}

.close-detail-btn {
  background: #6c757d;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.close-detail-btn:hover {
  background: #5a6268;
  transform: translateY(-1px);
}

.detail-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.detail-actions .action-btn {
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.detail-actions .action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.detail-actions .action-btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.detail-actions .btn-warning {
  background: #ffc107;
  color: #212529;
}

.detail-actions .btn-warning:hover {
  background: #e0a800;
}

.detail-actions .btn-success {
  background: #28a745;
  color: white;
}

.detail-actions .btn-success:hover {
  background: #218838;
}

.detail-actions .btn-primary {
  background: #007bff;
  color: white;
}

.detail-actions .btn-primary:hover {
  background: #0056b3;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #5a6268;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
}

/* Tooltip for detail action buttons */
.detail-actions .action-btn::before {
  content: attr(title);
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 10;
}

.detail-actions .action-btn:hover::before {
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .detail-dialog {
    width: 98%;
    margin: 10px;
  }

  .detail-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .detail-footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
  }

  .close-detail-btn {
    padding: 6px 12px;
    font-size: 14px;
  }

  .detail-actions {
    gap: 6px;
  }

  .detail-actions .action-btn {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }

  .detail-actions .action-btn::before {
    bottom: -28px;
    font-size: 10px;
  }

  .timeline {
    padding: 16px;
  }

  .timeline::before {
    left: 25px;
  }

  .timeline-item {
    margin-left: 10px;
    padding: 12px;
  }

  .timeline-icon {
    width: 32px;
    height: 32px;
    left: -26px;
    font-size: 12px;
  }

  .amount-display {
    font-size: 24px;
  }

  .modal-header {
    padding: 16px;
  }

  .detail-content {
    padding: 16px;
  }

  .detail-section {
    padding: 16px;
  }

  .section-title {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .detail-content {
    padding: 12px;
  }

  .detail-section {
    padding: 12px;
  }

  .section-title {
    font-size: 14px;
  }

  .amount-display {
    font-size: 20px;
  }

  .timeline-content {
    margin-left: 10px;
  }
}

/* Print Styles */
@media print {
  .modal-overlay {
    position: static !important;
    background: none !important;
    backdrop-filter: none !important;
  }

  .detail-dialog {
    max-width: none !important;
    width: 100% !important;
    box-shadow: none !important;
    margin: 0 !important;
  }

  .modal-header,
  .modal-footer {
    display: none !important;
  }

  .detail-body {
    max-height: none !important;
    background: white !important;
  }

  .btn,
  .header-actions {
    display: none !important;
  }

  .detail-section {
    border: 2px solid #333 !important;
    margin-bottom: 20px !important;
    break-inside: avoid;
  }

  .section-title {
    border-bottom: 2px solid #333 !important;
  }
}
</style>