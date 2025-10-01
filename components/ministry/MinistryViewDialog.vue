<template>
  <div v-if="show" class="dialog-overlay" @click.self="closeDialog">
    <div class="dialog-container">
      <div class="dialog-header">
        <h3 class="dialog-title">
          <i class="fas fa-eye"></i>
          ລາຍລະອຽດກະຊວງ
        </h3>
        <button class="dialog-close" @click="closeDialog">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="dialog-body">
        <div v-if="ministry" class="ministry-details">
          <!-- Header Section -->
          <div class="ministry-header">
            <div class="ministry-main-info">
              <div class="ministry-name-section">
                <h2 class="ministry-name">{{ ministry.ministryName }}</h2>
                <p v-if="ministry.ministryNameEn" class="ministry-name-en">{{ ministry.ministryNameEn }}</p>
                <div class="ministry-badges">
                  <span class="ministry-code-badge">
                    <i class="fas fa-barcode"></i>
                    {{ ministry.ministryCode }}
                  </span>
                  <span class="ministry-type-badge" :class="getMinistryTypeClass(ministry.ministryType)">
                    {{ ministry.ministryType }}
                  </span>
                  <span class="status-badge" :class="getStatusClass(ministry.status)">
                    <i :class="getStatusIcon(ministry.status)"></i>
                    {{ getStatusText(ministry.status) }}
                  </span>
                </div>
              </div>
              <div v-if="ministry.description" class="ministry-description">
                <p>{{ ministry.description }}</p>
              </div>
            </div>
          </div>

          <!-- Information Sections -->
          <div class="info-sections">
            <!-- Basic Information -->
            <div class="info-section">
              <h4 class="section-title">
                <i class="fas fa-info-circle"></i>
                ຂໍ້ມູນພື້ນຖານ
              </h4>
              <div class="info-grid">
                <div class="info-item">
                  <label class="info-label">ລະຫັດກະຊວງ</label>
                  <span class="info-value">{{ ministry.ministryCode }}</span>
                </div>
                <div class="info-item">
                  <label class="info-label">ປະເພດ</label>
                  <span class="info-value">{{ ministry.ministryType }}</span>
                </div>
                <div class="info-item">
                  <label class="info-label">ສະຖານະ</label>
                  <span class="info-value">{{ getStatusText(ministry.status) }}</span>
                </div>
                <div class="info-item">
                  <label class="info-label">ລຳດັບຄວາມສຳຄັນ</label>
                  <span class="info-value">{{ ministry.priority || 0 }}</span>
                </div>
                <div v-if="ministry.establishedDate" class="info-item full-width">
                  <label class="info-label">ວັນທີ່ສ້າງຕັ້ງ</label>
                  <span class="info-value">{{ formatDate(ministry.establishedDate) }}</span>
                </div>
              </div>
            </div>

            <!-- Hierarchy Information -->
            <div v-if="ministry.parentMinistry || (ministry.subMinistries && ministry.subMinistries.length > 0)" class="info-section">
              <h4 class="section-title">
                <i class="fas fa-sitemap"></i>
                ໂຄງສ້າງລຳດັບຊັ້ນ
              </h4>
              
              <!-- Parent Ministry -->
              <div v-if="ministry.parentMinistry" class="hierarchy-item">
                <label class="info-label">ກະຊວງແມ່</label>
                <div class="parent-ministry">
                  <i class="fas fa-level-up-alt"></i>
                  <span class="parent-name">{{ ministry.parentMinistry.ministryName }}</span>
                  <span class="parent-code">({{ ministry.parentMinistry.ministryCode }})</span>
                </div>
              </div>

              <!-- Sub Ministries -->
              <div v-if="ministry.subMinistries && ministry.subMinistries.length > 0" class="hierarchy-item">
                <label class="info-label">ຫົວໜ່ວຍງານຂ້າງລຸ່ມ ({{ ministry.subMinistries.length }})</label>
                <div class="sub-ministries-list">
                  <div v-for="subMinistry in ministry.subMinistries" :key="subMinistry.id" class="sub-ministry-item">
                    <div class="sub-ministry-info">
                      <span class="sub-ministry-name">{{ subMinistry.ministryName }}</span>
                      <span class="sub-ministry-code">{{ subMinistry.ministryCode }}</span>
                    </div>
                    <span class="sub-ministry-type" :class="getMinistryTypeClass(subMinistry.ministryType)">
                      {{ subMinistry.ministryType }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Personnel Information -->
            <div v-if="ministry.ministerName" class="info-section">
              <h4 class="section-title">
                <i class="fas fa-user-tie"></i>
                ຂໍ້ມູນບຸກຄະລາກອນ
              </h4>
              <div class="info-grid">
                <div class="info-item full-width">
                  <label class="info-label">ລັດຖະມົນຕີ</label>
                  <div class="minister-info">
                    <i class="fas fa-user"></i>
                    <span class="info-value">{{ ministry.ministerName }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div v-if="ministry.phoneNumber || ministry.email || ministry.website" class="info-section">
              <h4 class="section-title">
                <i class="fas fa-address-book"></i>
                ຂໍ້ມູນຕິດຕໍ່
              </h4>
              <div class="contact-grid">
                <div v-if="ministry.phoneNumber" class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="contact-content">
                    <label class="contact-label">ເບີໂທລະສັບ</label>
                    <a :href="`tel:${ministry.phoneNumber}`" class="contact-value">{{ ministry.phoneNumber }}</a>
                  </div>
                </div>

                <div v-if="ministry.email" class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-content">
                    <label class="contact-label">ອີເມວ</label>
                    <a :href="`mailto:${ministry.email}`" class="contact-value">{{ ministry.email }}</a>
                  </div>
                </div>

                <div v-if="ministry.website" class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-globe"></i>
                  </div>
                  <div class="contact-content">
                    <label class="contact-label">ເວັບໄຊຕ໌</label>
                    <a :href="ministry.website" target="_blank" class="contact-value">
                      {{ ministry.website }}
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Location Information -->
            <div v-if="ministry.province || ministry.district || ministry.address" class="info-section">
              <h4 class="section-title">
                <i class="fas fa-map-marker-alt"></i>
                ຂໍ້ມູນທີ່ຕັ້ງ
              </h4>
              <div class="location-info">
                <div v-if="ministry.province || ministry.district" class="location-item">
                  <div class="location-icon">
                    <i class="fas fa-map-pin"></i>
                  </div>
                  <div class="location-content">
                    <label class="location-label">ທີ່ຕັ້ງ</label>
                    <div class="location-value">
                      <span v-if="ministry.province">{{ ministry.province }}</span>
                      <span v-if="ministry.district && ministry.province">, </span>
                      <span v-if="ministry.district">{{ ministry.district }}</span>
                    </div>
                  </div>
                </div>

                <div v-if="ministry.address" class="location-item">
                  <div class="location-icon">
                    <i class="fas fa-building"></i>
                  </div>
                  <div class="location-content">
                    <label class="location-label">ທີ່ຢູ່ລາຍລະອຽດ</label>
                    <div class="location-value">{{ ministry.address }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Metadata -->
            <div class="info-section">
              <h4 class="section-title">
                <i class="fas fa-clock"></i>
                ຂໍ້ມູນລະບົບ
              </h4>
              <div class="info-grid">
                <div class="info-item">
                  <label class="info-label">ວັນທີ່ສ້າງ</label>
                  <span class="info-value">{{ formatDateTime(ministry.createdAt) }}</span>
                </div>
                <div class="info-item">
                  <label class="info-label">ອັບເດດຄັ້ງສຸດທ້າຍ</label>
                  <span class="info-value">{{ formatDateTime(ministry.updateTimestamp || ministry.updatedAt) }}</span>
                </div>
                <div class="info-item">
                  <label class="info-label">ສະຖານະການໃຊ້ງານ</label>
                  <span class="status-indicator" :class="ministry.isActive ? 'active' : 'inactive'">
                    <i :class="ministry.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
                    {{ ministry.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="no-data">
          <i class="fas fa-exclamation-triangle"></i>
          <p>ບໍ່ພົບຂໍ້ມູນກະຊວງ</p>
        </div>
      </div>

      <div class="dialog-footer">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="closeDialog"
        >
          <i class="fas fa-times"></i>
          ປິດ
        </button>
        <button
          v-if="ministry"
          type="button"
          class="btn btn-primary"
          @click="editMinistry"
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
  name: 'MinistryViewDialog',
  
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ministry: {
      type: Object,
      default: null
    }
  },

  methods: {
    closeDialog() {
      this.$emit('close')
    },

    editMinistry() {
      this.closeDialog()
      // Emit event to parent to open edit dialog
      this.$emit('edit', this.ministry)
    },

    getMinistryTypeClass(type) {
      const classes = {
        'Ministry': 'type-ministry',
        'Department': 'type-department',
        'Agency': 'type-agency',
        'Commission': 'type-commission'
      }
      return classes[type] || 'type-default'
    },

    getStatusClass(status) {
      const classes = {
        'Active': 'status-active',
        'Inactive': 'status-inactive',
        'Restructured': 'status-restructured',
        'Merged': 'status-merged'
      }
      return classes[status] || 'status-default'
    },

    getStatusIcon(status) {
      const icons = {
        'Active': 'fas fa-check-circle',
        'Inactive': 'fas fa-times-circle',
        'Restructured': 'fas fa-sync-alt',
        'Merged': 'fas fa-merge'
      }
      return icons[status] || 'fas fa-question-circle'
    },

    getStatusText(status) {
      const texts = {
        'Active': 'ໃຊ້ງານ',
        'Inactive': 'ປິດໃຊ້ງານ',
        'Restructured': 'ປັບໂຄງສ້າງ',
        'Merged': 'ລວມເຂົ້າກັນ'
      }
      return texts[status] || status
    },

    formatDate(dateString) {
      if (!dateString) return '-'
      const date = new Date(dateString)
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    },

    formatDateTime(dateString) {
      if (!dateString) return '-'
      const date = new Date(dateString)
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }
}
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.dialog-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dialog-header {
  padding: 20px 24px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
}

.dialog-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 12px;
}

.dialog-close {
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s;
}

.dialog-close:hover {
  background-color: #e9ecef;
  color: #333;
}

.dialog-body {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

.dialog-footer {
  padding: 16px 24px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  background: #f8f9fa;
}

/* Ministry Header */
.ministry-header {
  margin-bottom: 32px;
  padding: 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.ministry-main-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.ministry-name-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ministry-name {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #333;
}

.ministry-name-en {
  margin: 0;
  font-size: 16px;
  color: #666;
  font-style: italic;
}

.ministry-badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.ministry-code-badge {
  background: #6c757d;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-family: monospace;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}

.ministry-type-badge {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

.type-ministry { background-color: #e7f3ff; color: #0056b3; }
.type-department { background-color: #d4edda; color: #155724; }
.type-agency { background-color: #fff3cd; color: #856404; }
.type-commission { background-color: #d1ecf1; color: #0c5460; }

.status-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.status-active { background-color: #d4edda; color: #155724; }
.status-inactive { background-color: #f8d7da; color: #721c24; }
.status-restructured { background-color: #fff3cd; color: #856404; }
.status-merged { background-color: #d1ecf1; color: #0c5460; }

.ministry-description {
  padding: 16px;
  background: white;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.ministry-description p {
  margin: 0;
  color: #555;
  line-height: 1.6;
}

/* Information Sections */
.info-sections {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-section {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
}

.section-title {
  margin: 0;
  padding: 16px 20px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.info-item.full-width {
  grid-column: 1 / -1;
}

.info-label {
  font-weight: 500;
  color: #666;
  font-size: 14px;
}

.info-value {
  color: #333;
  font-size: 15px;
}

/* Hierarchy Information */
.hierarchy-item {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
}

.hierarchy-item:last-child {
  border-bottom: none;
}

.parent-ministry {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #e7f3ff;
  border: 1px solid #b3d7ff;
  border-radius: 6px;
  margin-top: 8px;
}

.parent-name {
  font-weight: 500;
  color: #0056b3;
}

.parent-code {
  font-size: 14px;
  color: #666;
  font-family: monospace;
}

.sub-ministries-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.sub-ministry-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
}

.sub-ministry-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sub-ministry-name {
  font-weight: 500;
  color: #333;
}

.sub-ministry-code {
  font-size: 12px;
  color: #666;
  font-family: monospace;
}

.sub-ministry-type {
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
}

/* Personnel Information */
.minister-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
}

/* Contact Information */
.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.contact-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-label {
  font-weight: 500;
  color: #666;
  font-size: 14px;
}

.contact-value {
  color: #007bff;
  text-decoration: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.contact-value:hover {
  text-decoration: underline;
}

/* Location Information */
.location-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}

.location-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.location-icon {
  width: 40px;
  height: 40px;
  background: #28a745;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.location-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.location-label {
  font-weight: 500;
  color: #666;
  font-size: 14px;
}

.location-value {
  color: #333;
  font-size: 15px;
  line-height: 1.5;
}

/* Status Indicator */
.status-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}

.status-indicator.active {
  color: #28a745;
}

.status-indicator.inactive {
  color: #dc3545;
}

/* No Data State */
.no-data {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.no-data i {
  font-size: 48px;
  margin-bottom: 16px;
  color: #ccc;
}

.no-data p {
  margin: 0;
  font-size: 16px;
}

/* Button Styles */
.btn {
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
  background-color: transparent;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dialog-overlay {
    padding: 10px;
  }

  .dialog-container {
    max-width: 100%;
  }

  .ministry-name {
    font-size: 20px;
  }

  .ministry-badges {
    flex-direction: column;
    align-items: flex-start;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .info-item.full-width {
    grid-column: 1;
  }

  .sub-ministry-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .dialog-footer {
    flex-direction: column-reverse;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .dialog-header {
    padding: 16px 20px;
  }

  .dialog-body {
    padding: 20px;
  }

  .ministry-header {
    padding: 16px;
  }

  .ministry-name {
    font-size: 18px;
  }

  .contact-item,
  .location-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  }

  .contact-content,
  .location-content {
    align-items: center;
  }
}
</style>