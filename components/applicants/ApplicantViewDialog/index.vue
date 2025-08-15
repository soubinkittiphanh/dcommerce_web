<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-dialog view-dialog" @click.stop>
      <div class="modal-header">
        <div class="modal-title-section">
          <i class="fas fa-user-circle modal-icon"></i>
          <h5 class="modal-title">ລາຍລະອຽດຜູ້ສະໝັກ</h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <div v-if="!applicant" class="empty-state">
          <i class="fas fa-user-slash"></i>
          <p>ບໍ່ພົບຂໍ້ມູນຜູ້ສະໝັກ</p>
        </div>

        <div v-else class="applicant-details">
          <!-- Header with Photo and Basic Info -->
          <div class="applicant-header">
            <div class="applicant-avatar">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="applicant-basic-info">
              <h3 class="applicant-name">{{ getFullName() }}</h3>
              <div class="applicant-meta">
                <span :class="['status-badge', applicant.status]">
                  {{ formatStatus(applicant.status) }}
                </span>
                <span class="application-date">
                  ສະໝັກເມື່ອ {{ formatDate(applicant.applicationDate) }}
                </span>
              </div>
              <div class="eligibility-status" :class="{ 'eligible': isEligible }">
                <i :class="isEligible ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
                {{ isEligible ? 'ມີຄຸນສົມບັດເໝາະສົມ' : 'ຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ' }}
              </div>
            </div>
          </div>

          <!-- Detail Sections -->
          <div class="detail-sections">
            <!-- Personal Information -->
            <div class="detail-section">
              <h4 class="section-title">
                <i class="fas fa-user"></i>
                ຂໍ້ມູນສ່ວນຕົວ
              </h4>
              <div class="detail-grid">
                <div class="detail-item">
                  <div class="detail-label">
                    <i class="fas fa-user"></i>
                    ຊື່ເຕັມ
                  </div>
                  <div class="detail-value">{{ getFullName() }}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-label">
                    <i class="fas fa-venus-mars"></i>
                    ເພດ
                  </div>
                  <div class="detail-value">
                    <span :class="['gender-badge', applicant.gender]">
                      {{ formatGender(applicant.gender) }}
                    </span>
                  </div>
                </div>
                <div class="detail-item">
                  <div class="detail-label">
                    <i class="fas fa-birthday-cake"></i>
                    ວັນເກີດ / ອາຍຸ
                  </div>
                  <div class="detail-value">
                    {{ formatDate(applicant.dateOfBirth) }}
                    <span class="age-info">({{ calculateAge() }} ປີ)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="detail-section">
              <h4 class="section-title">
                <i class="fas fa-address-book"></i>
                ຂໍ້ມູນການຕິດຕໍ່
              </h4>
              <div class="detail-grid">
                <div class="detail-item">
                  <div class="detail-label">
                    <i class="fas fa-phone"></i>
                    ເບີໂທລະສັບ
                  </div>
                  <div class="detail-value">
                    <a :href="`tel:${applicant.phone}`" class="phone-link">
                      {{ applicant.phone }}
                    </a>
                  </div>
                </div>
                <div v-if="applicant.email" class="detail-item">
                  <div class="detail-label">
                    <i class="fas fa-envelope"></i>
                    ອີເມວ
                  </div>
                  <div class="detail-value">
                    <a :href="`mailto:${applicant.email}`" class="email-link">
                      {{ applicant.email }}
                    </a>
                  </div>
                </div>
                <div v-if="applicant.address" class="detail-item full-width">
                  <div class="detail-label">
                    <i class="fas fa-map-marker-alt"></i>
                    ທີ່ຢູ່
                  </div>
                  <div class="detail-value">{{ applicant.address }}</div>
                </div>
              </div>
            </div>

            <!-- Requirements & Qualifications -->
            <div class="detail-section">
              <h4 class="section-title">
                <i class="fas fa-clipboard-check"></i>
                ຄຸນສົມບັດ & ເງື່ອນໄຂ
              </h4>
              <div class="qualifications-grid">
                <!-- Passport -->
                <div class="qualification-card" :class="{ 'valid': applicant.hasPassport }">
                  <div class="qualification-icon">
                    <i class="fas fa-passport"></i>
                  </div>
                  <div class="qualification-content">
                    <div class="qualification-title">ໜັງສືເດີນທາງ</div>
                    <div class="qualification-status">
                      {{ applicant.hasPassport ? 'ມີ' : 'ບໍ່ມີ' }}
                    </div>
                  </div>
                  <div class="qualification-check">
                    <i :class="applicant.hasPassport ? 'fas fa-check' : 'fas fa-times'"></i>
                  </div>
                </div>

                <!-- Health Status -->
                <div class="qualification-card" :class="{ 'valid': applicant.healthStatus === 'good' }">
                  <div class="qualification-icon">
                    <i class="fas fa-heartbeat"></i>
                  </div>
                  <div class="qualification-content">
                    <div class="qualification-title">ສຸຂະພາບ</div>
                    <div class="qualification-status">
                      {{ formatHealthStatus(applicant.healthStatus) }}
                    </div>
                  </div>
                  <div class="qualification-check">
                    <i :class="applicant.healthStatus === 'good' ? 'fas fa-check' : 'fas fa-times'"></i>
                  </div>
                </div>

                <!-- Eyesight -->
                <div class="qualification-card" :class="{ 'valid': applicant.eyesightGood }">
                  <div class="qualification-icon">
                    <i class="fas fa-eye"></i>
                  </div>
                  <div class="qualification-content">
                    <div class="qualification-title">ສາຍຕາ</div>
                    <div class="qualification-status">
                      {{ applicant.eyesightGood ? 'ດີ' : 'ບໍ່ດີ' }}
                    </div>
                  </div>
                  <div class="qualification-check">
                    <i :class="applicant.eyesightGood ? 'fas fa-check' : 'fas fa-times'"></i>
                  </div>
                </div>

                <!-- Chinese Language -->
                <div class="qualification-card bonus" v-if="hasChineseLanguageBonus">
                  <div class="qualification-icon">
                    <i class="fas fa-language"></i>
                  </div>
                  <div class="qualification-content">
                    <div class="qualification-title">ພາສາຈີນ</div>
                    <div class="qualification-status">
                      {{ formatLanguageLevel(applicant.chineseLanguageLevel) }}
                    </div>
                  </div>
                  <div class="qualification-check">
                    <i class="fas fa-star"></i>
                  </div>
                </div>

                <!-- Tattoos -->
                <div class="qualification-card" :class="{ 'valid': !applicant.hasVisibleTattoos }">
                  <div class="qualification-icon">
                    <i class="fas fa-paint-brush"></i>
                  </div>
                  <div class="qualification-content">
                    <div class="qualification-title">ລາຍສັກ</div>
                    <div class="qualification-status">
                      {{ applicant.hasVisibleTattoos ? 'ມີລາຍສັກນອກເສື້ອຜ້າ' : 'ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ' }}
                    </div>
                  </div>
                  <div class="qualification-check">
                    <i :class="!applicant.hasVisibleTattoos ? 'fas fa-check' : 'fas fa-times'"></i>
                  </div>
                </div>

                <!-- Age Requirement -->
                <div class="qualification-card" :class="{ 'valid': isAgeValid }">
                  <div class="qualification-icon">
                    <i class="fas fa-calendar"></i>
                  </div>
                  <div class="qualification-content">
                    <div class="qualification-title">ອາຍຸ</div>
                    <div class="qualification-status">
                      {{ calculateAge() }} ປີ ({{ isAgeValid ? 'ເໝາະສົມ' : 'ບໍ່ເໝາະສົມ' }})
                    </div>
                  </div>
                  <div class="qualification-check">
                    <i :class="isAgeValid ? 'fas fa-check' : 'fas fa-times'"></i>
                  </div>
                </div>
              </div>
            </div>

            <!-- Application Information -->
            <div class="detail-section">
              <h4 class="section-title">
                <i class="fas fa-file-alt"></i>
                ຂໍ້ມູນການສະໝັກ
              </h4>
              <div class="detail-grid">
                <div class="detail-item">
                  <div class="detail-label">
                    <i class="fas fa-hashtag"></i>
                    ID
                  </div>
                  <div class="detail-value">{{ applicant.id }}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-label">
                    <i class="fas fa-calendar-plus"></i>
                    ວັນທີສະໝັກ
                  </div>
                  <div class="detail-value">{{ formatDate(applicant.applicationDate) }}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-label">
                    <i class="fas fa-info-circle"></i>
                    ສະຖານະ
                  </div>
                  <div class="detail-value">
                    <span :class="['status-badge', applicant.status]">
                      {{ formatStatus(applicant.status) }}
                    </span>
                  </div>
                </div>
                <div v-if="applicant.notes" class="detail-item full-width">
                  <div class="detail-label">
                    <i class="fas fa-sticky-note"></i>
                    ໝາຍເຫດ
                  </div>
                  <div class="detail-value">{{ applicant.notes }}</div>
                </div>
              </div>
            </div>

            <!-- Overall Eligibility Summary -->
            <div class="detail-section eligibility-summary">
              <h4 class="section-title">
                <i class="fas fa-award"></i>
                ສະຫລຸບຄຸນສົມບັດລວມ
              </h4>
              <div class="overall-eligibility" :class="{ 'eligible': isEligible }">
                <div class="eligibility-icon">
                  <i :class="isEligible ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down'"></i>
                </div>
                <div class="eligibility-content">
                  <div class="eligibility-title">
                    {{ isEligible ? 'ຜ່ານເງື່ອນໄຂທັງໝົດ' : 'ຍັງບໍ່ຜ່ານເງື່ອນໄຂ' }}
                  </div>
                  <div class="eligibility-description">
                    <span v-if="isEligible">
                      ຜູ້ສະໝັກຄົນນີ້ມີຄຸນສົມບັດຄົບຖ້ວນຕາມທີ່ກຳນົດ
                      <span v-if="hasChineseLanguageBonus" class="bonus-note">
                        + ໂບນັສພາສາຈີນ
                      </span>
                    </span>
                    <span v-else>
                      ຜູ້ສະໝັກຄົນນີ້ຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ ກະລຸນາກວດສອບເງື່ອນໄຂຂ້າງເທິງ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button
          type="button"
          @click="closeDialog"
          class="btn btn-secondary"
        >
          <i class="fas fa-times"></i>
          ປິດ
        </button>
        <button
          v-if="applicant && applicant.status === 'pending'"
          type="button"
          @click="editApplicant"
          class="btn btn-primary"
        >
          <i class="fas fa-edit"></i>
          ແກ້ໄຂ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicantViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    applicant: {
      type: Object,
      default: null,
    },
  },

  computed: {
    // Age validation
    isAgeValid() {
      const age = this.calculateAge()
      return age >= 18 && age <= 32
    },

    // Chinese language bonus
    hasChineseLanguageBonus() {
      return this.applicant && 
             this.applicant.chineseLanguageLevel && 
             !['none', 'basic'].includes(this.applicant.chineseLanguageLevel)
    },

    // Overall eligibility
    isEligible() {
      if (!this.applicant) return false
      return (
        this.isAgeValid &&
        this.applicant.hasPassport &&
        this.applicant.healthStatus === 'good' &&
        this.applicant.eyesightGood &&
        !this.applicant.hasVisibleTattoos
      )
    },
  },

  methods: {
    closeDialog() {
      this.$emit('close')
    },

    editApplicant() {
      this.$emit('edit', this.applicant)
      this.closeDialog()
    },

    handleOverlayClick() {
      this.closeDialog()
    },

    getFullName() {
      if (!this.applicant) return ''
      return `${this.applicant.firstName} ${this.applicant.lastName}`
    },

    calculateAge() {
      if (!this.applicant || !this.applicant.dateOfBirth) return 0
      const today = new Date()
      const birthDate = new Date(this.applicant.dateOfBirth)
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },

    formatGender(gender) {
      return gender === 'male' ? 'ຊາຍ' : 'ຍິງ'
    },

    formatStatus(status) {
      const statusLabels = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        rejected: 'ປະຕິເສດ',
      }
      return statusLabels[status] || status
    },

    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ມີ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ',
      }
      return levelLabels[level] || level
    },

    formatHealthStatus(status) {
      const statusLabels = {
        good: 'ດີ',
        fair: 'ປານກາງ',
        poor: 'ບໍ່ດີ',
      }
      return statusLabels[status] || status
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
  max-width: 1000px;
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

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  color: #6b7280;
}

.empty-state i {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

.empty-state p {
  font-size: 16px;
  margin: 0;
}

/* Applicant Header */
.applicant-header {
  display: flex;
  align-items: center;
  padding: 24px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 12px;
  margin-bottom: 24px;
  border: 2px solid #e2e8f0;
}

.applicant-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
background: linear-gradient(135deg, #01532b 0%, #337555 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  margin-right: 24px;
  flex-shrink: 0;
}

.applicant-basic-info {
  flex: 1;
}

.applicant-name {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
}

.applicant-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.application-date {
  color: #64748b;
  font-size: 14px;
}

.eligibility-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border: 2px solid #ef4444;
}

.eligibility-status.eligible {
  background: rgba(34, 197, 94, 0.1);
  color: #15803d;
  border-color: #22c55e;
}

/* Detail Sections */
.detail-sections {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.detail-section {
  background: white;
  border: 2px solid #f1f5f9;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.detail-section.eligibility-summary {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-color: #f59e0b;
}

.section-title {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e5e7eb;
}

.section-title i {
  color: #667eea;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.detail-item.full-width {
  grid-column: 1 / -1;
}

.detail-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-label i {
  width: 12px;
  color: #9ca3af;
}

.detail-value {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.age-info {
  color: #6b7280;
  font-size: 13px;
}

.phone-link, .email-link {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.2s;
}

.phone-link:hover, .email-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* Qualifications Grid */
.qualifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.qualification-card {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 10px;
  background: rgba(239, 68, 68, 0.05);
  border: 2px solid #fecaca;
  transition: all 0.3s ease;
}

.qualification-card.valid {
  background: rgba(34, 197, 94, 0.05);
  border-color: #bbf7d0;
}

.qualification-card.bonus {
  background: rgba(251, 191, 36, 0.05);
  border-color: #fde68a;
}

.qualification-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-right: 12px;
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  flex-shrink: 0;
}

.qualification-card.valid .qualification-icon {
  background: rgba(34, 197, 94, 0.1);
  color: #15803d;
}

.qualification-card.bonus .qualification-icon {
  background: rgba(251, 191, 36, 0.1);
  color: #d97706;
}

.qualification-content {
  flex: 1;
}

.qualification-title {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 2px;
}

.qualification-status {
  font-size: 12px;
  color: #6b7280;
}

.qualification-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.qualification-card.valid .qualification-check {
  background: rgba(34, 197, 94, 0.1);
  color: #15803d;
}

.qualification-card.bonus .qualification-check {
  background: rgba(251, 191, 36, 0.1);
  color: #d97706;
}

/* Overall Eligibility */
.overall-eligibility {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid #ef4444;
}

.overall-eligibility.eligible {
  background: rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
}

.eligibility-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 20px;
  background: rgba(239, 68, 68, 0.2);
  color: #dc2626;
}

.overall-eligibility.eligible .eligibility-icon {
  background: rgba(34, 197, 94, 0.2);
  color: #15803d;
}

.eligibility-content {
  flex: 1;
}

.eligibility-title {
  font-size: 18px;
  font-weight: 700;
  color: #dc2626;
  margin-bottom: 4px;
}

.overall-eligibility.eligible .eligibility-title {
  color: #15803d;
}

.eligibility-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
}

.bonus-note {
  color: #d97706;
  font-weight: 600;
}

/* Status and Gender Badges */
.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.pending {
  background-color: #fef3c7;
  color: #d97706;
}

.status-badge.approved {
  background-color: #d1fae5;
  color: #065f46;
}

.status-badge.rejected {
  background-color: #fee2e2;
  color: #dc2626;
}

.gender-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.gender-badge.male {
  background-color: #dbeafe;
  color: #3b82f6;
}

.gender-badge.female {
  background-color: #fce7f3;
  color: #ec4899;
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

.btn-primary {
background: linear-gradient(135deg, #01532b 0%, #337555 100%);
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .view-dialog {
    width: 98%;
    margin: 10px;
  }

  .applicant-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .applicant-avatar {
    margin-right: 0;
  }

  .applicant-meta {
    justify-content: center;
    flex-wrap: wrap;
  }

  .detail-grid {
    grid-template-columns: 1fr;
  }

  .qualifications-grid {
    grid-template-columns: 1fr;
  }

  .overall-eligibility {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .eligibility-icon {
    margin-right: 0;
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