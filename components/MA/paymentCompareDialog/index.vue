<template>
  <div v-if="show" class="modal-overlay" @click="closeDialog">
    <div class="modal-dialog comparison-dialog" @click.stop>
      <div class="modal-header">
        <div class="modal-title-section">
          <i class="fas fa-code-compare modal-icon"></i>
          <h5 class="modal-title">
            ປຽບທຽບເວີຊັ່ນ - {{ recordData?.purpose || `Record #${recordId}` }}
          </h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <div class="spinner"></div>
          <p>ກຳລັງໂຫຼດຂໍ້ມູນສຳລັບປຽບທຽບ...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="error-state">
          <div class="error-icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <h6>ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ</h6>
          <p>{{ error }}</p>
          <button @click="fetchComparisonData" class="btn btn-primary btn-sm">
            <i class="fas fa-redo"></i>
            ລອງໃໝ່
          </button>
        </div>

        <!-- Comparison Content -->
        <div v-else class="comparison-content">
          <!-- Version Selector -->
          <div class="version-selector">
            <div class="selector-group">
              <label>ເວີຊັ່ນທີ່ 1 (ເກົ່າ):</label>
              <select v-model="selectedVersion1" @change="loadComparison" class="form-control">
                <option value="">ເລືອກເວີຊັ່ນ...</option>
                <option 
                  v-for="version in availableVersions" 
                  :key="version.id"
                  :value="version.id"
                  :disabled="version.id === selectedVersion2"
                >
                  {{ getVersionLabel(version) }}
                </option>
              </select>
            </div>

            <div class="comparison-arrow">
              <i class="fas fa-exchange-alt"></i>
            </div>

            <div class="selector-group">
              <label>ເວີຊັ່ນທີ່ 2 (ໃໝ່):</label>
              <select v-model="selectedVersion2" @change="loadComparison" class="form-control">
                <option value="">ເລືອກເວີຊັ່ນ...</option>
                <option 
                  v-for="version in availableVersions" 
                  :key="version.id"
                  :value="version.id"
                  :disabled="version.id === selectedVersion1"
                >
                  {{ getVersionLabel(version) }}
                </option>
              </select>
            </div>
          </div>

          <!-- Comparison Results -->
          <div v-if="comparisonData" class="comparison-results">
            <!-- Summary -->
            <div class="comparison-summary">
              <div class="summary-card">
                <div class="summary-icon">
                  <i class="fas fa-edit"></i>
                </div>
                <div class="summary-info">
                  <div class="summary-number">{{ Object.keys(comparisonData.differences || {}).length }}</div>
                  <div class="summary-label">ການປ່ຽນແປງ</div>
                </div>
              </div>

              <div class="summary-card">
                <div class="summary-icon">
                  <i class="fas fa-calendar"></i>
                </div>
                <div class="summary-info">
                  <div class="summary-number">{{ getTimeDifference() }}</div>
                  <div class="summary-label">ວັນຫ່າງກັນ</div>
                </div>
              </div>

              <div class="summary-card">
                <div class="summary-icon">
                  <i class="fas fa-user"></i>
                </div>
                <div class="summary-info">
                  <div class="summary-text">{{ getDifferentUsers() }}</div>
                  <div class="summary-label">ຜູ້ປ່ຽນແປງ</div>
                </div>
              </div>
            </div>

            <!-- No Differences -->
            <div v-if="Object.keys(comparisonData.differences || {}).length === 0" class="no-differences">
              <div class="no-diff-icon">
                <i class="fas fa-equals"></i>
              </div>
              <h6>ບໍ່ມີການປ່ຽນແປງ</h6>
              <p>ເວີຊັ່ນທັງສອງມີຂໍ້ມູນຄືກັນ</p>
            </div>

            <!-- Differences Table -->
            <div v-else class="differences-table">
              <h6>
                <i class="fas fa-list"></i>
                ລາຍລະອຽດການປ່ຽນແປງ
              </h6>
              
              <div class="table-container">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th class="field-header">ຟິວ</th>
                      <th class="version-header version1">
                        <div class="version-info">
                          <div class="version-label">ເວີຊັ່ນ {{ getVersionNumber(selectedVersion1) }}</div>
                          <div class="version-date">{{ getVersionDate(selectedVersion1) }}</div>
                        </div>
                      </th>
                      <th class="version-header version2">
                        <div class="version-info">
                          <div class="version-label">ເວີຊັ່ນ {{ getVersionNumber(selectedVersion2) }}</div>
                          <div class="version-date">{{ getVersionDate(selectedVersion2) }}</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr 
                      v-for="(diff, field) in comparisonData.differences" 
                      :key="field"
                      class="diff-row"
                    >
                      <td class="field-cell">
                        <div class="field-info">
                          <i :class="getFieldIcon(field)"></i>
                          <span class="field-name">{{ getFieldLabel(field) }}</span>
                        </div>
                      </td>
                      <td class="value-cell version1">
                        <div class="value-content old-value">
                          <div class="value-text">{{ formatValue(diff.current) }}</div>
                        </div>
                      </td>
                      <td class="value-cell version2">
                        <div class="value-content new-value">
                          <div class="value-text">{{ formatValue(diff.version) }}</div>
                          <div class="change-indicator">
                            <i class="fas fa-arrow-left"></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Action Buttons -->
            <div v-if="Object.keys(comparisonData.differences || {}).length > 0" class="comparison-actions">
              <button 
                v-if="canRestore"
                @click="restoreToVersion(selectedVersion1)"
                class="btn btn-warning"
              >
                <i class="fas fa-undo"></i>
                ກັບຄືນໄປເວີຊັ່ນ {{ getVersionNumber(selectedVersion1) }}
              </button>
              
              <button @click="exportComparison" class="btn btn-secondary">
                <i class="fas fa-download"></i>
                ສົ່ງອອກການປຽບທຽບ
              </button>
            </div>
          </div>

          <!-- Select Versions Prompt -->
          <div v-else class="select-versions-prompt">
            <div class="prompt-icon">
              <i class="fas fa-hand-pointer"></i>
            </div>
            <h6>ເລືອກເວີຊັ່ນເພື່ອປຽບທຽບ</h6>
            <p>ກະລຸນາເລືອກສອງເວີຊັ່ນທີ່ທ່ານຕ້ອງການປຽບທຽບ</p>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button @click="swapVersions" class="btn btn-outline" :disabled="!selectedVersion1 || !selectedVersion2">
          <i class="fas fa-exchange-alt"></i>
          ສະຫຼັບເວີຊັ່ນ
        </button>
        <button @click="closeDialog" class="btn btn-primary">
          <i class="fas fa-times"></i>
          ປິດ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VersionComparisonDialog',
  
  props: {
    show: {
      type: Boolean,
      default: false
    },
    recordId: {
      type: [Number, String],
      required: true
    },
    recordData: {
      type: Object,
      default: null
    },
    initialComparison: {
      type: Object,
      default: null
    },
    canRestore: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loading: false,
      error: null,
      availableVersions: [],
      selectedVersion1: null,
      selectedVersion2: null,
      comparisonData: null,

      fieldLabels: {
        amount: 'ຈຳນວນເງິນ',
        purpose: 'ຈຸດປະສົງ',
        status: 'ສະຖານະ',
        dueDate: 'ວັນຄົບກຳນົດ',
        note: 'ໝາຍເຫດ',
        ministryId: 'ກະຊວງ',
        bankAccountId: 'ບັນຊີທະນາຄານ',
        currencyId: 'ສະກຸນເງິນ',
        bookingDate: 'ວັນທີ່ລົງບັນຊີ',
        exchangeRate: 'ອັດຕາແລກປ່ຽນ',
        makerId: 'ຜູ້ລົງບັນຊີ',
        checkerId: 'ຜູ້ອະນຸມັດ',
        approvedAt: 'ວັນທີ່ອະນຸມັດ'
      }
    }
  },

  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeDialog()
      }
    },

    initialComparison: {
      handler(newVal) {
        if (newVal && this.show) {
          this.setupInitialComparison()
        }
      },
      immediate: true
    }
  },

  methods: {
    async initializeDialog() {
      if (this.initialComparison) {
        this.setupInitialComparison()
      } else {
        await this.fetchAvailableVersions()
      }
    },

    setupInitialComparison() {
      if (this.initialComparison.current && this.initialComparison.previous) {
        this.selectedVersion1 = this.initialComparison.previous.id
        this.selectedVersion2 = this.initialComparison.current.id
        
        // Mock the comparison data structure
        this.comparisonData = {
          currentVersion: this.initialComparison.current.version || 1,
          compareVersion: this.initialComparison.previous.version || 1,
          differences: this.calculateDifferences(
            this.initialComparison.previous,
            this.initialComparison.current
          )
        }
      }
    },

    calculateDifferences(version1, version2) {
      const differences = {}
      const fieldsToCompare = Object.keys(this.fieldLabels)
      
      fieldsToCompare.forEach(field => {
        const val1 = version1.data?.[field] || version1[field]
        const val2 = version2.data?.[field] || version2[field]
        
        if (val1 !== val2) {
          differences[field] = {
            current: val2,
            version: val1
          }
        }
      })
      
      return differences
    },

    async fetchAvailableVersions() {
      if (!this.recordId) return

      this.loading = true
      this.error = null

      try {
        const { data } = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`)
        
        if (data.success) {
          this.availableVersions = data.data.map(entry => ({
            id: entry.id,
            version: entry.version || 1,
            action: entry.action,
            changedAt: entry.changedAt,
            changedBy: entry.changedBy,
            data: entry.newData || entry.oldData || {}
          }))
        } else {
          throw new Error(data.message || 'Failed to fetch versions')
        }
      } catch (error) {
        console.error('Error fetching versions:', error)
        this.error = error.response?.data?.message || error.message
      } finally {
        this.loading = false
      }
    },

    async loadComparison() {
      if (!this.selectedVersion1 || !this.selectedVersion2) {
        this.comparisonData = null
        return
      }

      try {
        // For now, calculate differences locally
        // In a real implementation, you might want to call an API endpoint
        const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1)
        const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2)
        
        if (version1 && version2) {
          this.comparisonData = {
            currentVersion: version2.version,
            compareVersion: version1.version,
            differences: this.calculateDifferences(version1, version2)
          }
        }
      } catch (error) {
        console.error('Error loading comparison:', error)
        this.error = 'ເກີດຂໍ້ຜິດພາດໃນການປຽບທຽບ'
      }
    },

    getVersionLabel(version) {
      const actionLabel = {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ',
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      }
      
      const date = new Date(version.changedAt).toLocaleDateString('lo-LA')
      const action = actionLabel[version.action] || version.action
      
      return `v${version.version} - ${action} (${date})`
    },

    getVersionNumber(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId)
      return version?.version || '?'
    },

    getVersionDate(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId)
      return version ? new Date(version.changedAt).toLocaleDateString('lo-LA') : ''
    },

    getTimeDifference() {
      if (!this.selectedVersion1 || !this.selectedVersion2) return 0
      
      const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1)
      const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2)
      
      if (version1 && version2) {
        const date1 = new Date(version1.changedAt)
        const date2 = new Date(version2.changedAt)
        const diffTime = Math.abs(date2 - date1)
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      }
      
      return 0
    },

    getDifferentUsers() {
      if (!this.selectedVersion1 || !this.selectedVersion2) return 'N/A'
      
      const version1 = this.availableVersions.find(v => v.id === this.selectedVersion1)
      const version2 = this.availableVersions.find(v => v.id === this.selectedVersion2)
      
      if (version1 && version2) {
        if (version1.changedBy === version2.changedBy) {
          return version1.changedBy || 'ບໍ່ຮູ້'
        } else {
          return `${version1.changedBy || 'ບໍ່ຮູ້'} → ${version2.changedBy || 'ບໍ່ຮູ້'}`
        }
      }
      
      return 'N/A'
    },

    getFieldIcon(field) {
      const icons = {
        amount: 'fas fa-dollar-sign',
        purpose: 'fas fa-tag',
        status: 'fas fa-flag',
        dueDate: 'fas fa-calendar',
        note: 'fas fa-sticky-note',
        ministryId: 'fas fa-building',
        bankAccountId: 'fas fa-university',
        currencyId: 'fas fa-coins',
        bookingDate: 'fas fa-calendar-day',
        exchangeRate: 'fas fa-exchange-alt',
        makerId: 'fas fa-user',
        checkerId: 'fas fa-user-check',
        approvedAt: 'fas fa-calendar-check'
      }
      return icons[field] || 'fas fa-info-circle'
    },

    getFieldLabel(field) {
      return this.fieldLabels[field] || field
    },

    formatValue(value) {
      if (value === null || value === undefined) return 'N/A'
      if (typeof value === 'boolean') return value ? 'ແມ່ນ' : 'ບໍ່'
      if (typeof value === 'number') return value.toLocaleString()
      if (typeof value === 'string' && value.includes('T')) {
        // Likely a date
        try {
          return new Date(value).toLocaleDateString('lo-LA')
        } catch {
          return value
        }
      }
      return String(value)
    },

    swapVersions() {
      const temp = this.selectedVersion1
      this.selectedVersion1 = this.selectedVersion2
      this.selectedVersion2 = temp
      this.loadComparison()
    },

    restoreToVersion(versionId) {
      const version = this.availableVersions.find(v => v.id === versionId)
      if (version) {
        this.$emit('restore', version)
      }
    },

    async exportComparison() {
      if (!this.comparisonData) return

      try {
        const csvContent = this.generateComparisonCSV()
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `comparison-${this.recordId}-v${this.getVersionNumber(this.selectedVersion1)}-v${this.getVersionNumber(this.selectedVersion2)}.csv`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)

        this.$emit('success', 'ສົ່ງອອກການປຽບທຽບສຳເລັດ')
      } catch (error) {
        console.error('Export error:', error)
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ')
      }
    },

    generateComparisonCSV() {
      const headers = ['Field', 'Version 1 Value', 'Version 2 Value']
      const rows = [headers]

      Object.entries(this.comparisonData.differences).forEach(([field, diff]) => {
        rows.push([
          this.getFieldLabel(field),
          this.formatValue(diff.version),
          this.formatValue(diff.current)
        ])
      })

      return rows.map(row => 
        row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
      ).join('\n')
    },

    closeDialog() {
      this.selectedVersion1 = null
      this.selectedVersion2 = null
      this.comparisonData = null
      this.$emit('close')
    }
  }
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
}

.comparison-dialog {
  background: white;
  border-radius: 12px;
  max-width: 1000px;
  width: 95%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
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
}

.modal-title {
  font-size: 18px;
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
  padding: 0;
  max-height: 70vh;
  overflow-y: auto;
}

/* Loading and Error States */
.loading-state,
.error-state,
.select-versions-prompt,
.no-differences {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-icon,
.prompt-icon,
.no-diff-icon {
  font-size: 48px;
  margin-bottom: 20px;
  opacity: 0.6;
}

.error-icon {
  color: #e74c3c;
}

.prompt-icon {
  color: #3498db;
}

.no-diff-icon {
  color: #27ae60;
}

/* Version Selector */
.version-selector {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;
  align-items: end;
  padding: 24px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.selector-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.selector-group label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
}

.form-control {
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  transition: border-color 0.2s ease;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
}

.comparison-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #667eea;
  color: white;
  border-radius: 50%;
  font-size: 16px;
  margin-top: 24px;
}

/* Comparison Results */
.comparison-results {
  padding: 24px;
}

.comparison-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.summary-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.summary-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #667eea;
  color: white;
  font-size: 16px;
}

.summary-number {
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
}

.summary-text {
  font-size: 12px;
  font-weight: 600;
  color: #2c3e50;
  word-break: break-word;
}

.summary-label {
  font-size: 11px;
  color: #7f8c8d;
  margin-top: 4px;
}

.differences-table h6 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  color: #2c3e50;
  font-weight: 600;
}

.table-container {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.comparison-table th {
  background: #f8f9fa;
  padding: 16px 12px;
  text-align: left;
  border-bottom: 2px solid #e9ecef;
  font-weight: 600;
  font-size: 13px;
}

.field-header {
  width: 200px;
  color: #495057;
}

.version-header {
  position: relative;
}

.version-header.version1 {
  background: linear-gradient(135deg, #ffe6e6 0%, #ffcccc 100%);
}

.version-header.version2 {
  background: linear-gradient(135deg, #e6ffe6 0%, #ccffcc 100%);
}

.version-info {
  text-align: center;
}

.version-label {
  font-weight: 700;
  color: #2c3e50;
}

.version-date {
  font-size: 11px;
  color: #7f8c8d;
  margin-top: 2px;
}

.comparison-table td {
  padding: 16px 12px;
  border-bottom: 1px solid #f1f3f4;
  vertical-align: top;
}

.diff-row:hover {
  background: #f8f9fa;
}

.field-cell {
  background: #fafbfc;
  border-right: 1px solid #e9ecef;
}

.field-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.field-info i {
  color: #6c757d;
  width: 16px;
  text-align: center;
}

.field-name {
  font-weight: 600;
  color: #495057;
  font-size: 13px;
}

.value-cell {
  position: relative;
}

.value-cell.version1 {
  background: #fff8f8;
}

.value-cell.version2 {
  background: #f8fff8;
}

.value-content {
  position: relative;
  min-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.value-text {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.8);
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid transparent;
  flex: 1;
}

.old-value .value-text {
  border-color: #fecaca;
  color: #dc2626;
  background: #fef2f2;
}

.new-value .value-text {
  border-color: #bbf7d0;
  color: #059669;
  background: #f0fdf4;
}

.change-indicator {
  margin-left: 8px;
  color: #3b82f6;
  font-size: 12px;
  opacity: 0.7;
}

.comparison-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e9ecef;
}

.modal-footer {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-warning {
  background: #f39c12;
  color: white;
}

.btn-outline {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover:not(:disabled) {
  background: #667eea;
  color: white;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 12px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .comparison-dialog {
    width: 98%;
    margin: 10px;
  }

  .version-selector {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .comparison-arrow {
    margin: 0 auto;
    transform: rotate(90deg);
  }

  .comparison-summary {
    grid-template-columns: 1fr;
  }

  .comparison-table {
    font-size: 12px;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 12px 8px;
  }

  .field-header {
    width: auto;
  }

  .modal-footer {
    flex-direction: column;
    gap: 12px;
  }

  .comparison-actions {
    flex-direction: column;
  }
}
</style>