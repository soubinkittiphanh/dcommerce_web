<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-dialog view-dialog" @click.stop>
      <div class="modal-header">
        <div class="modal-title-section">
          <i class="fas fa-eye modal-icon"></i>
          <h5 class="modal-title">ລາຍລະອຽດການປະກາດຫາງານ</h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <div v-if="jobAdvertise" class="job-details">
          <!-- Job Header -->
          <div class="job-header">
            <div class="job-title-section">
              <h2 class="job-title">{{ jobAdvertise.title }}</h2>
              <span :class="['status-badge', 'large', jobAdvertise.status]">
                <i :class="getStatusIcon()"></i>
                {{ formatStatus(jobAdvertise.status) }}
              </span>
            </div>
            <div class="job-meta">
              <div class="meta-item">
                <i class="fas fa-calendar-plus"></i>
                <span>ສ້າງເມື່ອ: {{ formatDate(jobAdvertise.createdAt) }}</span>
              </div>
              <div v-if="jobAdvertise.maker" class="meta-item">
                <i class="fas fa-user"></i>
                <span>ສ້າງໂດຍ: {{ jobAdvertise.maker.firstName }} {{ jobAdvertise.maker.lastName }}</span>
              </div>
            </div>
          </div>

          <!-- Location Information -->
          <div class="info-section">
            <h4>
              <i class="fas fa-map-marker-alt"></i>
              ສະຖານທີ່ເຮັດວຽກ
            </h4>
            <div class="location-details">
              <div class="location-primary">
                <i class="fas fa-globe"></i>
                <strong>{{ jobAdvertise.country }}</strong>
              </div>
              <div v-if="jobAdvertise.province" class="location-secondary">
                <i class="fas fa-map-pin"></i>
                {{ jobAdvertise.province }}
              </div>
            </div>
          </div>

          <!-- Job Description -->
          <div v-if="jobAdvertise.jobDescription" class="info-section">
            <h4>
              <i class="fas fa-align-left"></i>
              ລາຍລະອຽດວຽກ
            </h4>
            <div class="description-content">
              {{ jobAdvertise.jobDescription }}
            </div>
          </div>

          <!-- Work Conditions -->
          <div class="info-section">
            <h4>
              <i class="fas fa-briefcase"></i>
              ເງື່ອນໄຂການເຮັດວຽກ
            </h4>
            <div class="work-conditions-grid">
              <div class="condition-item">
                <div class="condition-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="condition-content">
                  <h6>ຊົ່ວໂມງເຮັດວຽກ</h6>
                  <p>{{ jobAdvertise.workingHours || '8 ຊົ່ວໂມງ/ວັນ' }}</p>
                </div>
              </div>
              <div class="condition-item">
                <div class="condition-icon">
                  <i class="fas fa-calendar-day"></i>
                </div>
                <div class="condition-content">
                  <h6>ວັນພັກ</h6>
                  <p>{{ jobAdvertise.restDays || '1 ວັນ/ອາທິດ' }}</p>
                </div>
              </div>
              <div v-if="jobAdvertise.maxApplicants" class="condition-item">
                <div class="condition-icon">
                  <i class="fas fa-users"></i>
                </div>
                <div class="condition-content">
                  <h6>ຈຳນວນຄົນຮັບ</h6>
                  <p>{{ jobAdvertise.maxApplicants }} ຄົນ</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Requirements -->
          <div class="info-section">
            <h4>
              <i class="fas fa-clipboard-check"></i>
              ຄຸນສົມບັດຜູ້ສະໝັກ
            </h4>
            <div class="requirements-grid">
              <div class="requirement-card" :class="{ 'required': jobAdvertise.requiresPassport }">
                <div class="requirement-icon">
                  <i class="fas fa-passport"></i>
                </div>
                <div class="requirement-content">
                  <h6>ໜັງສືເດີນທາງ</h6>
                  <p>{{ jobAdvertise.requiresPassport ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ' }}</p>
                </div>
                <div class="requirement-status">
                  <i :class="jobAdvertise.requiresPassport ? 'fas fa-check text-success' : 'fas fa-times text-muted'"></i>
                </div>
              </div>

              <div class="requirement-card" :class="{ 'required': jobAdvertise.requiresGoodEyesight }">
                <div class="requirement-icon">
                  <i class="fas fa-eye"></i>
                </div>
                <div class="requirement-content">
                  <h6>ສາຍຕາດີ</h6>
                  <p>{{ jobAdvertise.requiresGoodEyesight ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ' }}</p>
                </div>
                <div class="requirement-status">
                  <i :class="jobAdvertise.requiresGoodEyesight ? 'fas fa-check text-success' : 'fas fa-times text-muted'"></i>
                </div>
              </div>

              <div class="requirement-card" :class="{ 'required': jobAdvertise.requiresLanguage && jobAdvertise.requiresLanguage !== 'none' }">
                <div class="requirement-icon">
                  <i class="fas fa-language"></i>
                </div>
                <div class="requirement-content">
                  <h6>ພາສາ</h6>
                  <p>{{ formatLanguageLevel(jobAdvertise.requiresLanguage) }}</p>
                </div>
                <div class="requirement-status">
                  <i :class="jobAdvertise.requiresLanguage && jobAdvertise.requiresLanguage !== 'none' ? 'fas fa-check text-success' : 'fas fa-times text-muted'"></i>
                </div>
              </div>

              <div class="requirement-card" :class="{ 'allowed': jobAdvertise.allowsTattoos }">
                <div class="requirement-icon">
                  <i class="fas fa-paint-brush"></i>
                </div>
                <div class="requirement-content">
                  <h6>ລາຍສັກ</h6>
                  <p>{{ jobAdvertise.allowsTattoos ? 'ອະນຸຍາດ' : 'ບໍ່ອະນຸຍາດ' }}</p>
                </div>
                <div class="requirement-status">
                  <i :class="jobAdvertise.allowsTattoos ? 'fas fa-check text-info' : 'fas fa-ban text-warning'"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Application Period -->
          <div v-if="jobAdvertise.startDate || jobAdvertise.endDate" class="info-section">
            <h4>
              <i class="fas fa-calendar-alt"></i>
              ໄລຍະເວລາຮັບສະໝັກ
            </h4>
            <div class="date-range">
              <div v-if="jobAdvertise.startDate" class="date-item">
                <i class="fas fa-calendar-plus"></i>
                <span class="date-label">ເລີ່ມຮັບສະໝັກ:</span>
                <span class="date-value">{{ formatDate(jobAdvertise.startDate) }}</span>
              </div>
              <div v-if="jobAdvertise.endDate" class="date-item">
                <i class="fas fa-calendar-minus"></i>
                <span class="date-label">ສິ້ນສຸດການຮັບສະໝັກ:</span>
                <span class="date-value">{{ formatDate(jobAdvertise.endDate) }}</span>
              </div>
              <div v-if="jobAdvertise.startDate && jobAdvertise.endDate" class="date-item duration">
                <i class="fas fa-hourglass-half"></i>
                <span class="date-label">ໄລຍະເວລາ:</span>
                <span class="date-value">{{ calculateDuration() }} ວັນ</span>
              </div>
            </div>
          </div>

          <!-- Applicants Statistics -->
          <div v-if="jobAdvertise.applicants" class="info-section">
            <h4>
              <i class="fas fa-users"></i>
              ສະຖິຕິຜູ້ສະໝັກ
            </h4>
            <div class="applicants-stats">
              <div class="stat-card total">
                <div class="stat-icon">
                  <i class="fas fa-users"></i>
                </div>
                <div class="stat-content">
                  <h5>{{ jobAdvertise.applicants.length }}</h5>
                  <p>ລວມຜູ້ສະໝັກ</p>
                </div>
              </div>
              <div class="stat-card pending">
                <div class="stat-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="stat-content">
                  <h5>{{ getApplicantsByStatus('pending').length }}</h5>
                  <p>ລໍຖ້າອະນຸມັດ</p>
                </div>
              </div>
              <div class="stat-card approved">
                <div class="stat-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div class="stat-content">
                  <h5>{{ getApplicantsByStatus('approved').length }}</h5>
                  <p>ອະນຸມັດແລ້ວ</p>
                </div>
              </div>
              <div class="stat-card rejected">
                <div class="stat-icon">
                  <i class="fas fa-times-circle"></i>
                </div>
                <div class="stat-content">
                  <h5>{{ getApplicantsByStatus('rejected').length }}</h5>
                  <p>ປະຕິເສດ</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Benefits -->
          <div v-if="jobAdvertise.benefits && jobAdvertise.benefits.length > 0" class="info-section">
            <h4>
              <i class="fas fa-gift"></i>
              ສະຫວັດດີການ
            </h4>
            <div class="benefits-list">
              <div 
                v-for="benefit in jobAdvertise.benefits" 
                :key="benefit.id"
                class="benefit-item"
              >
                <div class="benefit-icon">
                  <i :class="getBenefitIcon(benefit.type)"></i>
                </div>
                <div class="benefit-content">
                  <h6>{{ benefit.name }}</h6>
                  <p v-if="benefit.description">{{ benefit.description }}</p>
                  <div v-if="benefit.value" class="benefit-value">
                    {{ formatCurrency(benefit.value, benefit.currency) }}
                  </div>
                </div>
                <div class="benefit-type">
                  <span :class="['benefit-badge', benefit.type]">
                    {{ formatBenefitType(benefit.type) }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Notes -->
          <div v-if="jobAdvertise.notes" class="info-section">
            <h4>
              <i class="fas fa-sticky-note"></i>
              ໝາຍເຫດ
            </h4>
            <div class="notes-content">
              {{ jobAdvertise.notes }}
            </div>
          </div>

          <!-- Update History -->
          <div v-if="jobAdvertise.updateUser || jobAdvertise.updateTimestamp" class="info-section">
            <h4>
              <i class="fas fa-history"></i>
              ປະຫວັດການອັບເດດ
            </h4>
            <div class="update-history">
              <div v-if="jobAdvertise.updateUser" class="update-item">
                <i class="fas fa-user-edit"></i>
                <span>ອັບເດດໂດຍ: {{ jobAdvertise.updateUser.firstName }} {{ jobAdvertise.updateUser.lastName }}</span>
              </div>
              <div v-if="jobAdvertise.updateTimestamp" class="update-item">
                <i class="fas fa-clock"></i>
                <span>ອັບເດດລ່າສຸດ: {{ formatDate(jobAdvertise.updateTimestamp) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button @click="closeDialog" class="btn btn-secondary">
          <i class="fas fa-times"></i>
          ປິດ
        </button>
        <button v-if="canEdit" @click="editJob" class="btn btn-primary">
          <i class="fas fa-edit"></i>
          ແກ້ໄຂ
        </button>
        <button v-if="canViewApplicants" @click="viewApplicants" class="btn btn-info">
          <i class="fas fa-users"></i>
          ເບິ່ງຜູ້ສະໝັກ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    jobAdvertise: {
      type: Object,
      default: null,
    },
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    canEdit() {
      // Add your edit permission logic here
      return true
    },

    canViewApplicants() {
      return this.jobAdvertise?.applicants && this.jobAdvertise.applicants.length > 0
    },
  },

  methods: {
    closeDialog() {
      this.$emit('close')
    },

    handleOverlayClick() {
      this.closeDialog()
    },

    editJob() {
      this.$emit('edit', this.jobAdvertise)
      this.closeDialog()
    },

    viewApplicants() {
      this.$emit('view-applicants', this.jobAdvertise)
      this.closeDialog()
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },

    formatStatus(status) {
      const statusLabels = {
        active: 'ເປີດຮັບສະໝັກ',
        inactive: 'ປິດຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ',
      }
      return statusLabels[status] || status
    },

    getStatusIcon() {
      const icons = {
        active: 'fas fa-play-circle',
        inactive: 'fas fa-pause-circle',
        closed: 'fas fa-stop-circle',
      }
      return icons[this.jobAdvertise?.status] || 'fas fa-question-circle'
    },

    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ຕ້ອງການ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ',
      }
      return levelLabels[level] || level
    },

    calculateDuration() {
      if (!this.jobAdvertise?.startDate || !this.jobAdvertise?.endDate) return 0
      const start = new Date(this.jobAdvertise.startDate)
      const end = new Date(this.jobAdvertise.endDate)
      const timeDiff = end.getTime() - start.getTime()
      return Math.ceil(timeDiff / (1000 * 3600 * 24))
    },

    getApplicantsByStatus(status) {
      if (!this.jobAdvertise?.applicants) return []
      return this.jobAdvertise.applicants.filter(applicant => applicant.status === status)
    },

    getBenefitIcon(type) {
      const icons = {
        salary: 'fas fa-money-bill-wave',
        allowance: 'fas fa-coins',
        insurance: 'fas fa-shield-alt',
        accommodation: 'fas fa-home',
        transportation: 'fas fa-bus',
        other: 'fas fa-gift',
      }
      return icons[type] || 'fas fa-gift'
    },

    formatBenefitType(type) {
      const typeLabels = {
        salary: 'ເງິນເດືອນ',
        allowance: 'ເງິນຊ່ວຍເຫລືອ',
        insurance: 'ປະກັນໄພ',
        accommodation: 'ທີ່ພັກ',
        transportation: 'ການເດີນທາງ',
        other: 'ອື່ນໆ',
      }
      return typeLabels[type] || type
    },

    formatCurrency(value, currency = 'LAK') {
      if (!value) return ''
      return new Intl.NumberFormat('lo-LA').format(value) + ' ' + currency
    },
  },
}
</script>

<style scoped>
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
  max-width: 1200px;
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
  max-height: 70vh;
  overflow-y: auto;
}

/* Job Header */
.job-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid #e9ecef;
}

.job-title-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 20px;
}

.job-title {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  flex: 1;
}

.status-badge {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.status-badge.large {
  padding: 8px 20px;
  font-size: 14px;
}

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

.job-meta {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  font-size: 14px;
}

.meta-item i {
  color: #9ca3af;
}

/* Info Sections */
.info-section {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f3f4f6;
}

.info-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.info-section h4 {
  margin: 0 0 16px 0;
  color: #374151;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-section h4 i {
  color: #667eea;
  font-size: 16px;
}

/* Location Details */
.location-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.location-primary {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  color: #1f2937;
}

.location-primary i {
  color: #667eea;
  font-size: 16px;
}

.location-secondary {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #6b7280;
  margin-left: 28px;
}

.location-secondary i {
  color: #9ca3af;
  font-size: 12px;
}

/* Description */
.description-content {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  color: #374151;
  line-height: 1.6;
  font-size: 14px;
}

/* Work Conditions */
.work-conditions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.condition-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.condition-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.condition-content h6 {
  margin: 0 0 4px 0;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
}

.condition-content p {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

/* Requirements */
.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.requirement-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}

.requirement-card.required {
  background: rgba(34, 197, 94, 0.05);
  border-color: #10b981;
}

.requirement-card.allowed {
  background: rgba(59, 130, 246, 0.05);
  border-color: #3b82f6;
}

.requirement-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f3f4f6;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.requirement-card.required .requirement-icon {
  background: #dcfce7;
  color: #16a34a;
}

.requirement-card.allowed .requirement-icon {
  background: #dbeafe;
  color: #2563eb;
}

.requirement-content {
  flex: 1;
  min-width: 0;
}

.requirement-content h6 {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.requirement-content p {
  margin: 0;
  font-size: 12px;
  color: #6b7280;
}

.requirement-status {
  flex-shrink: 0;
  font-size: 18px;
}

.text-success {
  color: #10b981;
}

.text-muted {
  color: #9ca3af;
}

.text-info {
  color: #3b82f6;
}

.text-warning {
  color: #f59e0b;
}

/* Date Range */
.date-range {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.date-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8fafc;
  border-radius: 6px;
}

.date-item.duration {
  background: #ede9fe;
  color: #7c3aed;
  font-weight: 600;
}

.date-item i {
  color: #667eea;
  width: 16px;
}

.date-label {
  font-weight: 500;
  color: #374151;
  min-width: 120px;
}

.date-value {
  color: #1f2937;
  font-weight: 600;
}

/* Applicants Statistics */
.applicants-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.stat-card.total {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.stat-card.pending {
  background: #fef3c7;
  border-color: #f59e0b;
}

.stat-card.approved {
  background: #d1fae5;
  border-color: #10b981;
}

.stat-card.rejected {
  background: #fee2e2;
  border-color: #ef4444;
}

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.stat-card.total .stat-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.stat-card.pending .stat-icon {
  background: #fbbf24;
  color: white;
}

.stat-card.approved .stat-icon {
  background: #10b981;
  color: white;
}

.stat-card.rejected .stat-icon {
  background: #ef4444;
  color: white;
}

.stat-content h5 {
  margin: 0 0 4px 0;
  font-size: 20px;
  font-weight: 700;
}

.stat-content p {
  margin: 0;
  font-size: 12px;
  opacity: 0.9;
}

/* Benefits */
.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.benefit-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.benefit-content {
  flex: 1;
  min-width: 0;
}

.benefit-content h6 {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.benefit-content p {
  margin: 0 0 8px 0;
  font-size: 12px;
  color: #6b7280;
  line-height: 1.4;
}

.benefit-value {
  font-weight: 600;
  color: #059669;
  font-size: 14px;
}

.benefit-type {
  flex-shrink: 0;
}

.benefit-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
}

.benefit-badge.salary {
  background: #d1fae5;
  color: #065f46;
}

.benefit-badge.allowance {
  background: #fef3c7;
  color: #d97706;
}

.benefit-badge.insurance {
  background: #dbeafe;
  color: #1d4ed8;
}

.benefit-badge.accommodation {
  background: #ede9fe;
  color: #7c3aed;
}

.benefit-badge.transportation {
  background: #f3e8ff;
  color: #a21caf;
}

.benefit-badge.other {
  background: #f1f5f9;
  color: #475569;
}

/* Notes */
.notes-content {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  color: #374151;
  line-height: 1.6;
  font-size: 14px;
}

/* Update History */
.update-history {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.update-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
}

.update-item i {
  color: #9ca3af;
  width: 16px;
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

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  font-size: 14px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-info {
  background: #17a2b8;
  color: white;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (max-width: 768px) {
  .view-dialog {
    width: 98%;
    margin: 10px;
  }

  .job-title-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .job-title {
    font-size: 20px;
  }

  .job-meta {
    flex-direction: column;
    gap: 8px;
  }

  .work-conditions-grid,
  .requirements-grid,
  .applicants-stats {
    grid-template-columns: 1fr;
  }

  .date-range {
    gap: 8px;
  }

  .date-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .date-label {
    min-width: auto;
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
</style>