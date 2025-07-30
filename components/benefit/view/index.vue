<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-dialog view-dialog" @click.stop>
      <div class="modal-header">
        <div class="modal-title-section">
          <i class="fas fa-gift modal-icon"></i>
          <h5 class="modal-title">ລາຍລະອຽດສະຫວັດດີການ</h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <div v-if="benefit" class="benefit-details">
          
          <!-- Status Header -->
          <div class="status-header">
            <div class="status-info">
              <span :class="['status-badge', 'large', benefit.isActive ? 'active' : 'inactive']">
                <i :class="benefit.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
                {{ benefit.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ' }}
              </span>
            </div>
            <div class="benefit-id">
              <span class="id-label">ID:</span>
              <span class="id-value">{{ benefit.id }}</span>
            </div>
          </div>

          <!-- Main Information Section -->
          <div class="info-section">
            <div class="section-header">
              <h4>
                <i class="fas fa-info-circle"></i>
                ຂໍ້ມູນພື້ນຖານ
              </h4>
            </div>

            <div class="info-grid">
              <!-- Benefit Name -->
              <div class="info-item full-width">
                <label class="info-label">
                  <i class="fas fa-tag"></i>
                  ຊື່ສະຫວັດດີການ
                </label>
                <div class="info-value">
                  <h3 class="benefit-name">{{ benefit.name }}</h3>
                </div>
              </div>

              <!-- Type -->
              <div class="info-item">
                <label class="info-label">
                  <i class="fas fa-layer-group"></i>
                  ປະເພດ
                </label>
                <div class="info-value">
                  <span :class="['type-badge', 'large', benefit.type]">
                    <i :class="getTypeIcon(benefit.type)"></i>
                    {{ formatType(benefit.type) }}
                  </span>
                </div>
              </div>

              <!-- Value -->
              <div class="info-item">
                <label class="info-label">
                  <i class="fas fa-coins"></i>
                  ມູນຄ່າ
                </label>
                <div class="info-value">
                  <div v-if="benefit.value" class="value-display">
                    <span class="value-amount">{{ formatCurrency(benefit.value, benefit.currency) }}</span>
                  </div>
                  <div v-else class="no-value">
                    <i class="fas fa-minus"></i>
                    ບໍ່ລະບຸມູນຄ່າ
                  </div>
                </div>
              </div>

              <!-- Currency -->
              <div class="info-item">
                <label class="info-label">
                  <i class="fas fa-money-bill-wave"></i>
                  ສະກຸນເງິນ
                </label>
                <div class="info-value">
                  <span class="currency-display">
                    {{ formatCurrencyName(benefit.currency) }}
                  </span>
                </div>
              </div>

              <!-- Description -->
              <div class="info-item full-width" v-if="benefit.description">
                <label class="info-label">
                  <i class="fas fa-align-left"></i>
                  ຄຳອະທິບາຍ
                </label>
                <div class="info-value">
                  <div class="description-text">{{ benefit.description }}</div>
                </div>
              </div>

              <!-- Notes -->
              <div class="info-item full-width" v-if="benefit.notes">
                <label class="info-label">
                  <i class="fas fa-sticky-note"></i>
                  ໝາຍເຫດ
                </label>
                <div class="info-value">
                  <div class="notes-text">{{ benefit.notes }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Job Advertisement Section -->
          <div class="info-section" v-if="benefit.jobAdvertise">
            <div class="section-header">
              <h4>
                <i class="fas fa-briefcase"></i>
                ການປະກາດຫາງານທີ່ກ່ຽວຂ້ອງ
              </h4>
            </div>

            <div class="job-info-card">
              <div class="job-header">
                <div class="job-title">
                  <i class="fas fa-briefcase"></i>
                  <strong>{{ benefit.jobAdvertise.title }}</strong>
                </div>
                <div class="job-status">
                  <span :class="['status-badge', 'small', benefit.jobAdvertise.status]">
                    {{ formatJobStatus(benefit.jobAdvertise.status) }}
                  </span>
                </div>
              </div>
              
              <div class="job-details">
                <div class="job-location">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>{{ benefit.jobAdvertise.country }}</span>
                  <span v-if="benefit.jobAdvertise.province">
                    - {{ benefit.jobAdvertise.province }}
                  </span>
                </div>
                
                <div v-if="benefit.jobAdvertise.jobDescription" class="job-description">
                  <i class="fas fa-file-text"></i>
                  <span>{{ truncateText(benefit.jobAdvertise.jobDescription, 150) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- System Information Section -->
          <div class="info-section">
            <div class="section-header">
              <h4>
                <i class="fas fa-cog"></i>
                ຂໍ້ມູນລະບົບ
              </h4>
            </div>

            <div class="info-grid">
              <!-- Created By -->
              <div class="info-item">
                <label class="info-label">
                  <i class="fas fa-user-plus"></i>
                  ຜູ້ສ້າງ
                </label>
                <div class="info-value">
                  <div v-if="benefit.maker" class="user-info">
                    <i class="fas fa-user"></i>
                    <span>{{ benefit.maker.firstName }} {{ benefit.maker.lastName }}</span>
                  </div>
                  <div v-else class="no-user">
                    <i class="fas fa-minus"></i>
                    ບໍ່ລະບຸ
                  </div>
                </div>
              </div>

              <!-- Updated By -->
              <div class="info-item">
                <label class="info-label">
                  <i class="fas fa-user-edit"></i>
                  ຜູ້ອັບເດດ
                </label>
                <div class="info-value">
                  <div v-if="benefit.updateUser" class="user-info">
                    <i class="fas fa-user"></i>
                    <span>{{ benefit.updateUser.firstName }} {{ benefit.updateUser.lastName }}</span>
                  </div>
                  <div v-else class="no-user">
                    <i class="fas fa-minus"></i>
                    ຍັງບໍ່ມີການອັບເດດ
                  </div>
                </div>
              </div>

              <!-- Created Date -->
              <div class="info-item">
                <label class="info-label">
                  <i class="fas fa-calendar-plus"></i>
                  ວັນທີສ້າງ
                </label>
                <div class="info-value">
                  <div class="date-info">
                    <i class="fas fa-clock"></i>
                    <span>{{ formatDateTime(benefit.createdAt) }}</span>
                  </div>
                </div>
              </div>

              <!-- Updated Date -->
              <div class="info-item">
                <label class="info-label">
                  <i class="fas fa-calendar-edit"></i>
                  ວັນທີອັບເດດ
                </label>
                <div class="info-value">
                  <div class="date-info">
                    <i class="fas fa-clock"></i>
                    <span>{{ formatDateTime(benefit.updateTimestamp) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Benefit Summary Card -->
          <div class="benefit-summary">
            <div class="summary-header">
              <i class="fas fa-clipboard-list"></i>
              <h5>ສະຫລຸບສະຫວັດດີການ</h5>
            </div>
            
            <div class="summary-content">
              <div class="summary-item">
                <span class="summary-label">ປະເພດ:</span>
                <span class="summary-value">{{ formatType(benefit.type) }}</span>
              </div>
              
              <div class="summary-item" v-if="benefit.value">
                <span class="summary-label">ມູນຄ່າ:</span>
                <span class="summary-value">{{ formatCurrency(benefit.value, benefit.currency) }}</span>
              </div>
              
              <div class="summary-item">
                <span class="summary-label">ສະຖານະ:</span>
                <span :class="['summary-value', benefit.isActive ? 'active' : 'inactive']">
                  {{ benefit.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ' }}
                </span>
              </div>
              
              <div class="summary-item" v-if="benefit.jobAdvertise">
                <span class="summary-label">ການປະກາດຫາງານ:</span>
                <span class="summary-value">{{ benefit.jobAdvertise.title }}</span>
              </div>
            </div>
          </div>

        </div>

        <!-- No Data State -->
        <div v-else class="no-data">
          <i class="fas fa-exclamation-triangle"></i>
          <p>ບໍ່ພົບຂໍ້ມູນສະຫວັດດີການ</p>
        </div>
      </div>

      <div class="modal-footer">
        <button @click="closeDialog" class="btn btn-secondary">
          <i class="fas fa-times"></i>
          ປິດ
        </button>
        <button @click="editBenefit" class="btn btn-primary" v-if="benefit">
          <i class="fas fa-edit"></i>
          ແກ້ໄຂ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BenefitViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    benefit: {
      type: Object,
      default: null,
    },
  },

  methods: {
    closeDialog() {
      this.$emit('close')
    },

    handleOverlayClick() {
      this.closeDialog()
    },

    editBenefit() {
      this.$emit('edit', this.benefit)
      this.closeDialog()
    },

    // Utility methods
    formatType(type) {
      const typeLabels = {
        salary: 'ເງິນເດືອນ',
        allowance: 'ເງິນອຸດໜູນ',
        insurance: 'ປະກັນໄພ',
        accommodation: 'ທີ່ພັກ',
        transportation: 'ການເດີນທາງ',
        other: 'ອື່ນໆ',
      }
      return typeLabels[type] || type
    },

    getTypeIcon(type) {
      const typeIcons = {
        salary: 'fas fa-money-bill-wave',
        allowance: 'fas fa-hand-holding-usd',
        insurance: 'fas fa-shield-alt',
        accommodation: 'fas fa-home',
        transportation: 'fas fa-bus',
        other: 'fas fa-ellipsis-h',
      }
      return typeIcons[type] || 'fas fa-gift'
    },

    formatCurrency(value, currency = 'LAK') {
      if (!value) return '-'
      
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })
      
      try {
        return formatter.format(value)
      } catch (e) {
        return `${Number(value).toLocaleString()} ${currency}`
      }
    },

    formatCurrencyName(currency) {
      const currencyNames = {
        LAK: 'ກີບ ລາວ (LAK)',
        THB: 'ບາດ ໄທ (THB)',
        USD: 'ໂດລາ ສະຫະລັດ (USD)',
        KRW: 'ວອນ ເກົາຫຼີ (KRW)',
        JPY: 'ເຢນ ຍີ່ປຸ່ນ (JPY)',
        MYR: 'ຣິງກິດ ມາເລເຊຍ (MYR)',
        SGD: 'ໂດລາ ສິງກະໂປ (SGD)',
      }
      return currencyNames[currency] || currency
    },

    formatJobStatus(status) {
      const statusLabels = {
        active: 'ເປີດຮັບສະໝັກ',
        inactive: 'ປິດຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ',
      }
      return statusLabels[status] || status
    },

    formatDateTime(dateTime) {
      if (!dateTime) return '-'
      return new Date(dateTime).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    },

    truncateText(text, length) {
      if (!text) return ''
      return text.length > length ? text.substring(0, length) + '...' : text
    },
  },
}
</script>

<style scoped>
/* Enhanced Modal Styles */
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

.view-dialog {
  background: white;
  border-radius: 12px;
  max-width: 800px;
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
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
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
  padding: 24px;
  max-height: 60vh;
  overflow-y: auto;
}

/* Status Header */
.status-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 12px;
  margin-bottom: 24px;
  border: 2px solid #e2e8f0;
}

.status-info {
  flex: 1;
}

.benefit-id {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #64748b;
}

.id-label {
  font-size: 14px;
}

.id-value {
  font-size: 16px;
  color: #334155;
  background: white;
  padding: 4px 12px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

/* Status Badge */
.status-badge {
  padding: 6px 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.status-badge.large {
  padding: 8px 20px;
  font-size: 14px;
}

.status-badge.small {
  padding: 3px 8px;
  font-size: 11px;
}

.status-badge.active {
  background-color: #d1fae5;
  color: #065f46;
}

.status-badge.inactive {
  background-color: #fee2e2;
  color: #dc2626;
}

/* Info Sections */
.info-section {
  margin-bottom: 32px;
}

.section-header {
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e9ecef;
}

.section-header h4 {
  margin: 0;
  color: #374151;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-header i {
  color: #8b5cf6;
  font-size: 16px;
}

/* Info Grid */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.info-item {
  margin-bottom: 0;
}

.info-item.full-width {
  grid-column: 1 / -1;
}

.info-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-weight: 600;
  color: #4b5563;
  font-size: 14px;
}

.info-label i {
  color: #9ca3af;
  font-size: 12px;
  width: 14px;
}

.info-value {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 16px;
  min-height: 20px;
}

/* Benefit Name */
.benefit-name {
  margin: 0;
  color: #111827;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
}

/* Type Badge */
.type-badge {
  padding: 6px 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.type-badge.large {
  padding: 8px 20px;
  font-size: 14px;
}

.type-badge.salary {
  background-color: #dcfce7;
  color: #16a34a;
}

.type-badge.allowance {
  background-color: #dbeafe;
  color: #2563eb;
}

.type-badge.insurance {
  background-color: #f3e8ff;
  color: #9333ea;
}

.type-badge.accommodation {
  background-color: #fef3c7;
  color: #d97706;
}

.type-badge.transportation {
  background-color: #e0f2fe;
  color: #0891b2;
}

.type-badge.other {
  background-color: #f1f5f9;
  color: #64748b;
}

/* Value Display */
.value-display {
  text-align: center;
}

.value-amount {
  font-size: 20px;
  font-weight: 700;
  color: #059669;
  display: block;
}

.no-value {
  color: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-style: italic;
}

/* Currency Display */
.currency-display {
  font-weight: 600;
  color: #374151;
  text-align: center;
  display: block;
}

/* Description and Notes */
.description-text,
.notes-text {
  line-height: 1.6;
  color: #374151;
  white-space: pre-wrap;
  word-break: break-word;
}

.notes-text {
  background: #fffbeb;
  border-left: 4px solid #f59e0b;
  padding: 12px 16px;
  border-radius: 4px;
  margin: -12px -16px;
}

/* Job Info Card */
.job-info-card {
  background: #fafafa;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.job-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #374151;
}

.job-title i {
  color: #3b82f6;
}

.job-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.job-location,
.job-description {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
}

.job-location i,
.job-description i {
  color: #9ca3af;
  margin-top: 2px;
  flex-shrink: 0;
}

/* User Info */
.user-info,
.date-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
}

.user-info i,
.date-info i {
  color: #9ca3af;
  font-size: 12px;
}

.no-user {
  color: #9ca3af;
  display: flex;
  align-items: center;
  gap: 8px;
  font-style: italic;
}

/* Benefit Summary */
.benefit-summary {
  background: linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%);
  border: 2px solid #bfdbfe;
  border-radius: 12px;
  padding: 20px;
  margin-top: 24px;
}

.summary-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  color: #1e40af;
}

.summary-header i {
  font-size: 18px;
}

.summary-header h5 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.summary-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  font-size: 14px;
}

.summary-label {
  font-weight: 500;
  color: #374151;
}

.summary-value {
  font-weight: 600;
  color: #111827;
}

.summary-value.active {
  color: #059669;
}

.summary-value.inactive {
  color: #dc2626;
}

/* No Data State */
.no-data {
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;
}

.no-data i {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

.no-data p {
  font-size: 16px;
  margin: 0;
}

/* Modal Footer */
.modal-footer {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* Buttons */
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  font-size: 14px;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

/* Job Status Badge Colors */
.status-badge.active {
  background-color: #d1fae5;
  color: #065f46;
}

.status-badge.inactive {
  background-color: #fef3c7;
  color: #d97706;
}

.status-badge.closed {
  background-color: #fee2e2;
  color: #dc2626;
}

/* Responsive Design */
@media (max-width: 768px) {
  .view-dialog {
    width: 98%;
    margin: 10px;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .status-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .job-header {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .summary-content {
    grid-template-columns: 1fr;
  }

  .summary-item {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }

  .modal-header {
    padding: 16px;
  }

  .modal-body {
    padding: 16px;
  }

  .modal-footer {
    padding: 16px;
    flex-direction: column-reverse;
  }

  .modal-footer .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .benefit-name {
    font-size: 20px;
  }

  .value-amount {
    font-size: 18px;
  }
}
</style>