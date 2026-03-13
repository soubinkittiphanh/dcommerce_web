<template>
  <div v-if="show" class="modal-overlay" @click="closeDialog">
    <div class="modal-dialog reports-dialog" @click.stop>
      <div class="modal-header">
        <div class="modal-title-section">
          <i class="fas fa-chart-line modal-icon"></i>
          <h5 class="modal-title">ລາຍງານປະຫວັດການປ່ຽນແປງ</h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <!-- Report Type Tabs -->
        <div class="tabs-container">
          <div class="tabs">
            <button 
              v-for="tab in reportTabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="['tab-btn', { active: activeTab === tab.id }]"
            >
              <i :class="tab.icon"></i>
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- User Activity Report -->
        <div v-if="activeTab === 'user-activity'" class="report-content">
          <div class="report-header">
            <h6>
              <i class="fas fa-users"></i>
              ລາຍງານກິດຈະກຳຜູ້ໃຊ້
            </h6>
            <div class="date-filter">
              <input 
                v-model="userActivityFilter.startDate" 
                type="date" 
                class="form-control"
                @change="fetchUserActivity"
              >
              <span>ຫາ</span>
              <input 
                v-model="userActivityFilter.endDate" 
                type="date" 
                class="form-control"
                @change="fetchUserActivity"
              >
              <button @click="fetchUserActivity" class="btn btn-primary btn-sm">
                <i class="fas fa-search"></i>
                ຄົ້ນຫາ
              </button>
            </div>
          </div>

          <div v-if="userActivityLoading" class="loading-state">
            <div class="spinner-sm"></div>
            <span>ກຳລັງໂຫຼດຂໍ້ມູນ...</span>
          </div>

          <div v-else-if="userActivityData.length > 0" class="user-activity-content">
            <div class="activity-summary">
              <div class="summary-card">
                <div class="summary-icon">
                  <i class="fas fa-user-friends"></i>
                </div>
                <div class="summary-info">
                  <div class="summary-number">{{ uniqueActiveUsers }}</div>
                  <div class="summary-label">ຜູ້ໃຊ້ທີ່ມີກິດຈະກຳ</div>
                </div>
              </div>

              <div class="summary-card">
                <div class="summary-icon">
                  <i class="fas fa-edit"></i>
                </div>
                <div class="summary-info">
                  <div class="summary-number">{{ totalActivities }}</div>
                  <div class="summary-label">ລວມກິດຈະກຳ</div>
                </div>
              </div>

              <div class="summary-card">
                <div class="summary-icon">
                  <i class="fas fa-crown"></i>
                </div>
                <div class="summary-info">
                  <div class="summary-text">{{ mostActiveUser }}</div>
                  <div class="summary-label">ຜູ້ໃຊ້ທີ່ມີກິດຈະກຳສູງສຸດ</div>
                </div>
              </div>
            </div>

            <div class="activity-table">
              <table class="table">
                <thead>
                  <tr>
                    <th>ຜູ້ໃຊ້</th>
                    <th>ສ້າງ</th>
                    <th>ແກ້ໄຂ</th>
                    <th>ອະນຸມັດ</th>
                    <th>ຊຳລະ</th>
                    <th>ລົບ</th>
                    <th>ລວມ</th>
                    <th>ກິດຈະກຳຫຼ້າສຸດ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in userActivityData" :key="user.userId">
                    <td>
                      <div class="user-info">
                        <div class="user-name">{{ user.userName }}</div>
                        <div class="user-id">ID: {{ user.userId }}</div>
                      </div>
                    </td>
                    <td><span class="activity-count create">{{ user.activities.CREATE || 0 }}</span></td>
                    <td><span class="activity-count update">{{ user.activities.UPDATE || 0 }}</span></td>
                    <td><span class="activity-count approve">{{ user.activities.APPROVE || 0 }}</span></td>
                    <td><span class="activity-count settle">{{ user.activities.SETTLE || 0 }}</span></td>
                    <td><span class="activity-count delete">{{ user.activities.DELETE || 0 }}</span></td>
                    <td><span class="total-count">{{ user.totalActivities }}</span></td>
                    <td>{{ formatDateTime(user.lastActivity) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else class="no-data">
            <i class="fas fa-chart-bar"></i>
            <p>ບໍ່ມີຂໍ້ມູນກິດຈະກຳໃນຊ່ວງເວລານີ້</p>
          </div>
        </div>

        <!-- System Activity Report -->
        <div v-if="activeTab === 'system-activity'" class="report-content">
          <div class="report-header">
            <h6>
              <i class="fas fa-server"></i>
              ລາຍງານກິດຈະກຳລະບົບ
            </h6>
            <div class="date-filter">
              <select v-model="systemActivityFilter.period" @change="fetchSystemActivity" class="form-control">
                <option value="7">7 ວັນຜ່ານມາ</option>
                <option value="30">30 ວັນຜ່ານມາ</option>
                <option value="90">90 ວັນຜ່ານມາ</option>
                <option value="365">1 ປີຜ່ານມາ</option>
              </select>
              <button @click="fetchSystemActivity" class="btn btn-primary btn-sm">
                <i class="fas fa-sync"></i>
                ອັບເດດ
              </button>
            </div>
          </div>

          <div v-if="systemActivityLoading" class="loading-state">
            <div class="spinner-sm"></div>
            <span>ກຳລັງໂຫຼດຂໍ້ມູນ...</span>
          </div>

          <div v-else-if="systemActivityData" class="system-activity-content">
            <!-- Activity Chart Placeholder -->
            <div class="chart-container">
              <h6>ກິດຈະກຳລາຍວັນ</h6>
              <div class="chart-placeholder">
                <div class="chart-bars">
                  <div 
                    v-for="(day, index) in systemActivityData.dailyStats" 
                    :key="index"
                    class="chart-bar"
                    :style="{ height: (day.count / maxDailyActivity * 100) + '%' }"
                    :title="`${day.date}: ${day.count} ກິດຈະກຳ`"
                  >
                    <div class="bar-value">{{ day.count }}</div>
                  </div>
                </div>
                <div class="chart-labels">
                  <span 
                    v-for="(day, index) in systemActivityData.dailyStats" 
                    :key="index"
                    class="chart-label"
                  >
                    {{ formatShortDate(day.date) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Activity Breakdown -->
            <div class="activity-breakdown">
              <h6>ການແບ່ງປະເພດກິດຈະກຳ</h6>
              <div class="breakdown-grid">
                <div 
                  v-for="activity in systemActivityData.activityBreakdown" 
                  :key="activity.action"
                  class="breakdown-item"
                >
                  <div class="breakdown-icon" :class="activity.action.toLowerCase()">
                    <i :class="getActivityIcon(activity.action)"></i>
                  </div>
                  <div class="breakdown-info">
                    <div class="breakdown-label">{{ getActivityLabel(activity.action) }}</div>
                    <div class="breakdown-count">{{ activity.count }}</div>
                    <div class="breakdown-percentage">{{ activity.percentage }}%</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Changes -->
            <div class="recent-changes">
              <h6>ການປ່ຽນແປງຫຼ້າສຸດ</h6>
              <div class="changes-timeline">
                <div 
                  v-for="change in systemActivityData.recentChanges" 
                  :key="change.id"
                  class="change-item"
                >
                  <div class="change-icon" :class="change.action.toLowerCase()">
                    <i :class="getActivityIcon(change.action)"></i>
                  </div>
                  <div class="change-content">
                    <div class="change-text">
                      <strong>{{ change.user }}</strong> 
                      {{ getActivityLabel(change.action) }} 
                      <em>{{ change.recordPurpose || `Record #${change.recordId}` }}</em>
                    </div>
                    <div class="change-time">{{ formatRelativeTime(change.changedAt) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="no-data">
            <i class="fas fa-server"></i>
            <p>ບໍ່ມີຂໍ້ມູນກິດຈະກຳລະບົບ</p>
          </div>
        </div>

        <!-- Export Options -->
        <div v-if="activeTab === 'export'" class="report-content">
          <div class="export-content">
            <h6>
              <i class="fas fa-download"></i>
              ສົ່ງອອກລາຍງານ
            </h6>

            <div class="export-options">
              <div class="export-option">
                <div class="option-header">
                  <i class="fas fa-file-csv"></i>
                  <h6>ສົ່ງອອກຂໍ້ມູນ CSV</h6>
                </div>
                <p>ສົ່ງອອກຂໍ້ມູນປະຫວັດການປ່ຽນແປງໃນຮູບແບບ CSV ສຳລັບການວິເຄາະ</p>
                <div class="export-controls">
                  <div class="date-range">
                    <input v-model="exportFilter.startDate" type="date" class="form-control">
                    <span>ຫາ</span>
                    <input v-model="exportFilter.endDate" type="date" class="form-control">
                  </div>
                  <button @click="exportCSV" class="btn btn-secondary" :disabled="exportLoading">
                    <i v-if="exportLoading" class="fas fa-spinner fa-spin"></i>
                    <i v-else class="fas fa-download"></i>
                    ສົ່ງອອກ CSV
                  </button>
                </div>
              </div>

              <div class="export-option">
                <div class="option-header">
                  <i class="fas fa-chart-pie"></i>
                  <h6>ລາຍງານສະຫຼຸບ</h6>
                </div>
                <p>ສົ່ງອອກລາຍງານສະຫຼຸບດ້ວຍກາຟິກແລະການວິເຄາະ</p>
                <div class="export-controls">
                  <select v-model="exportFilter.reportType" class="form-control">
                    <option value="summary">ສະຫຼຸບທົ່ວໄປ</option>
                    <option value="user-activity">ກິດຈະກຳຜູ້ໃຊ້</option>
                    <option value="trend-analysis">ການວິເຄາະແນວໂນ້ມ</option>
                  </select>
                  <button @click="generateReport" class="btn btn-primary" :disabled="exportLoading">
                    <i v-if="exportLoading" class="fas fa-spinner fa-spin"></i>
                    <i v-else class="fas fa-file-pdf"></i>
                    ສ້າງລາຍງານ
                  </button>
                </div>
              </div>

              <div class="export-option">
                <div class="option-header">
                  <i class="fas fa-database"></i>
                  <h6>ສໍາລອງຂໍ້ມູນ</h6>
                </div>
                <p>ສໍາລອງຂໍ້ມູນປະຫວັດການປ່ຽນແປງທັງໝົດ</p>
                <div class="export-controls">
                  <div class="backup-info">
                    <small>ຂໍ້ມູນທັງໝົດຈະຖືກສໍາລອງໃນຮູບແບບ JSON</small>
                  </div>
                  <button @click="backupData" class="btn btn-warning" :disabled="exportLoading">
                    <i v-if="exportLoading" class="fas fa-spinner fa-spin"></i>
                    <i v-else class="fas fa-archive"></i>
                    ສໍາລອງຂໍ້ມູນ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button @click="refreshCurrentReport" class="btn btn-outline" :disabled="isLoading">
          <i class="fas fa-sync"></i>
          ອັບເດດ
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
  name: 'AuditReportsDialog',
  
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      activeTab: 'user-activity',
      
      reportTabs: [
        { id: 'user-activity', label: 'ກິດຈະກຳຜູ້ໃຊ້', icon: 'fas fa-users' },
        { id: 'system-activity', label: 'ກິດຈະກຳລະບົບ', icon: 'fas fa-server' },
        { id: 'export', label: 'ສົ່ງອອກ', icon: 'fas fa-download' }
      ],

      // User Activity
      userActivityLoading: false,
      userActivityData: [],
      userActivityFilter: {
        startDate: this.getDateDaysAgo(30),
        endDate: this.getTodayDate()
      },

      // System Activity
      systemActivityLoading: false,
      systemActivityData: null,
      systemActivityFilter: {
        period: '30'
      },

      // Export
      exportLoading: false,
      exportFilter: {
        startDate: this.getDateDaysAgo(30),
        endDate: this.getTodayDate(),
        reportType: 'summary'
      },

      actionLabels: {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ',
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      }
    }
  },

  computed: {
    isLoading() {
      return this.userActivityLoading || this.systemActivityLoading || this.exportLoading
    },

    uniqueActiveUsers() {
      return this.userActivityData.length
    },

    totalActivities() {
      return this.userActivityData.reduce((sum, user) => sum + user.totalActivities, 0)
    },

    mostActiveUser() {
      if (this.userActivityData.length === 0) return 'N/A'
      const topUser = this.userActivityData.reduce((max, user) => 
        user.totalActivities > max.totalActivities ? user : max
      )
      return topUser.userName
    },

    maxDailyActivity() {
      if (!this.systemActivityData?.dailyStats) return 1
      return Math.max(...this.systemActivityData.dailyStats.map(day => day.count))
    }
  },

  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeReports()
      }
    }
  },

  methods: {
    async initializeReports() {
      await this.fetchUserActivity()
      await this.fetchSystemActivity()
    },

    async fetchUserActivity() {
      this.userActivityLoading = true
      try {
        const params = {
          startDate: this.userActivityFilter.startDate,
          endDate: this.userActivityFilter.endDate
        }

        const { data } = await this.$axios.get('/api/money-advances/audit/date-range', { params })
        
        // Process the audit data to group by user
        const userActivities = {}
        
        data.data.forEach(auditEntry => {
          const userId = auditEntry.changedBy
          const userName = auditEntry.changedByUser?.cus_name || 'Unknown User'
          
          if (!userActivities[userId]) {
            userActivities[userId] = {
              userId,
              userName,
              activities: {},
              totalActivities: 0,
              lastActivity: auditEntry.changedAt
            }
          }
          
          if (!userActivities[userId].activities[auditEntry.action]) {
            userActivities[userId].activities[auditEntry.action] = 0
          }
          
          userActivities[userId].activities[auditEntry.action]++
          userActivities[userId].totalActivities++
          
          if (new Date(auditEntry.changedAt) > new Date(userActivities[userId].lastActivity)) {
            userActivities[userId].lastActivity = auditEntry.changedAt
          }
        })

        this.userActivityData = Object.values(userActivities)
          .sort((a, b) => b.totalActivities - a.totalActivities)

      } catch (error) {
        console.error('Error fetching user activity:', error)
        this.userActivityData = []
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນກິດຈະກຳຜູ້ໃຊ້')
      } finally {
        this.userActivityLoading = false
      }
    },

    async fetchSystemActivity() {
      this.systemActivityLoading = true
      try {
        const days = parseInt(this.systemActivityFilter.period)
        const endDate = new Date()
        const startDate = new Date()
        startDate.setDate(startDate.getDate() - days)

        const params = {
          startDate: startDate.toISOString().split('T')[0],
          endDate: endDate.toISOString().split('T')[0],
          limit: 500
        }

        const { data } = await this.$axios.get('/api/money-advances/audit/date-range', { params })
        
        // Process daily statistics
        const dailyStats = {}
        const activityBreakdown = {}
        let totalActivities = 0

        data.data.forEach(auditEntry => {
          const date = auditEntry.changedAt.split('T')[0]
          
          // Daily stats
          if (!dailyStats[date]) {
            dailyStats[date] = { date, count: 0 }
          }
          dailyStats[date].count++
          
          // Activity breakdown
          if (!activityBreakdown[auditEntry.action]) {
            activityBreakdown[auditEntry.action] = 0
          }
          activityBreakdown[auditEntry.action]++
          totalActivities++
        })

        // Fill missing dates with 0
        for (let i = 0; i < days; i++) {
          const date = new Date()
          date.setDate(date.getDate() - i)
          const dateStr = date.toISOString().split('T')[0]
          
          if (!dailyStats[dateStr]) {
            dailyStats[dateStr] = { date: dateStr, count: 0 }
          }
        }

        this.systemActivityData = {
          dailyStats: Object.values(dailyStats)
            .sort((a, b) => new Date(a.date) - new Date(b.date)),
          activityBreakdown: Object.entries(activityBreakdown)
            .map(([action, count]) => ({
              action,
              count,
              percentage: ((count / totalActivities) * 100).toFixed(1)
            }))
            .sort((a, b) => b.count - a.count),
          recentChanges: data.data
            .sort((a, b) => new Date(b.changedAt) - new Date(a.changedAt))
            .slice(0, 10)
            .map(entry => ({
              id: entry.id,
              action: entry.action,
              user: entry.changedByUser?.cus_name || 'Unknown',
              recordId: entry.recordId,
              recordPurpose: entry.record?.purpose,
              changedAt: entry.changedAt
            }))
        }

      } catch (error) {
        console.error('Error fetching system activity:', error)
        this.systemActivityData = null
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນກິດຈະກຳລະບົບ')
      } finally {
        this.systemActivityLoading = false
      }
    },

    async exportCSV() {
      this.exportLoading = true
      try {
        const params = {
          startDate: this.exportFilter.startDate,
          endDate: this.exportFilter.endDate,
          format: 'csv'
        }

        const response = await this.$axios.get('/api/money-advances/audit/export', {
          params,
          responseType: 'blob'
        })

        const blob = new Blob([response.data], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `audit-report-${params.startDate}-to-${params.endDate}.csv`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)

        this.$emit('success', 'ສົ່ງອອກ CSV ສຳເລັດ')
      } catch (error) {
        console.error('Export error:', error)
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ CSV')
      } finally {
        this.exportLoading = false
      }
    },

    async generateReport() {
      this.exportLoading = true
      try {
        // This would generate a PDF report
        this.$emit('success', 'ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ')
      } catch (error) {
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສ້າງລາຍງານ')
      } finally {
        this.exportLoading = false
      }
    },

    async backupData() {
      this.exportLoading = true
      try {
        // This would create a full backup
        this.$emit('success', 'ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ')
      } catch (error) {
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສໍາລອງຂໍ້ມູນ')
      } finally {
        this.exportLoading = false
      }
    },

    refreshCurrentReport() {
      if (this.activeTab === 'user-activity') {
        this.fetchUserActivity()
      } else if (this.activeTab === 'system-activity') {
        this.fetchSystemActivity()
      }
    },

    getActivityIcon(action) {
      const icons = {
        CREATE: 'fas fa-plus-circle',
        UPDATE: 'fas fa-edit',
        APPROVE: 'fas fa-check-circle',
        SETTLE: 'fas fa-money-bill-wave',
        DELETE: 'fas fa-trash-alt'
      }
      return icons[action] || 'fas fa-question-circle'
    },

    getActivityLabel(action) {
      return this.actionLabels[action] || action
    },

    formatDateTime(dateTime) {
      if (!dateTime) return 'N/A'
      return new Date(dateTime).toLocaleString('lo-LA')
    },

    formatShortDate(date) {
      return new Date(date).toLocaleDateString('lo-LA', { month: 'short', day: 'numeric' })
    },

    formatRelativeTime(dateTime) {
      const now = new Date()
      const date = new Date(dateTime)
      const diffMs = now - date
      const diffMins = Math.floor(diffMs / 60000)
      const diffHours = Math.floor(diffMs / 3600000)
      const diffDays = Math.floor(diffMs / 86400000)

      if (diffMins < 1) return 'ຫຼ້າສຸດ'
      if (diffMins < 60) return `${diffMins} ນາທີຜ່ານມາ`
      if (diffHours < 24) return `${diffHours} ຊົ່ວໂມງຜ່ານມາ`
      return `${diffDays} ມື້ຜ່ານມາ`
    },

    getDateDaysAgo(days) {
      const date = new Date()
      date.setDate(date.getDate() - days)
      return date.toISOString().split('T')[0]
    },

    getTodayDate() {
      return new Date().toISOString().split('T')[0]
    },

    closeDialog() {
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

.reports-dialog {
  background: white;
  border-radius: 12px;
  max-width: 1200px;
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

/* Tabs */
.tabs-container {
  border-bottom: 1px solid #e9ecef;
  background: #f8f9fa;
}

.tabs {
  display: flex;
  padding: 0 24px;
}

.tab-btn {
  background: none;
  border: none;
  padding: 16px 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #6c757d;
  border-bottom: 3px solid transparent;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tab-btn:hover {
  color: #495057;
  background: rgba(255, 255, 255, 0.5);
}

.tab-btn.active {
  color: #667eea;
  border-bottom-color: #667eea;
  background: white;
}

/* Report Content */
.report-content {
  padding: 24px;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e9ecef;
}

.report-header h6 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-size: 16px;
  color: #2c3e50;
}

.date-filter {
  display: flex;
  align-items: center;
  gap: 12px;
}

.date-filter span {
  color: #6c757d;
  font-size: 14px;
}

.form-control {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

/* Loading State */
.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 60px;
  color: #6c757d;
}

.spinner-sm {
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* User Activity */
.activity-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
}

.summary-label {
  font-size: 11px;
  color: #7f8c8d;
  margin-top: 4px;
}

/* Activity Table */
.activity-table {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
}

.table th {
  background: #f8f9fa;
  padding: 12px;
  text-align: left;
  font-weight: 600;
  color: #495057;
  font-size: 13px;
  border-bottom: 1px solid #e9ecef;
}

.table td {
  padding: 12px;
  border-bottom: 1px solid #f1f3f4;
  font-size: 13px;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.user-name {
  font-weight: 600;
  color: #2c3e50;
}

.user-id {
  font-size: 11px;
  color: #7f8c8d;
}

.activity-count {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  min-width: 24px;
  text-align: center;
}

.activity-count.create { background: #d4edda; color: #155724; }
.activity-count.update { background: #fff3cd; color: #856404; }
.activity-count.approve { background: #cce5ff; color: #004085; }
.activity-count.settle { background: #e2e3e5; color: #495057; }
.activity-count.delete { background: #f8d7da; color: #721c24; }

.total-count {
  font-weight: 700;
  color: #2c3e50;
}

/* System Activity */
.chart-container {
  margin-bottom: 32px;
}

.chart-container h6 {
  margin-bottom: 16px;
  color: #2c3e50;
}

.chart-placeholder {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  min-height: 200px;
}

.chart-bars {
  display: flex;
  align-items: end;
  gap: 4px;
  height: 150px;
  margin-bottom: 8px;
}

.chart-bar {
  flex: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px 4px 0 0;
  min-height: 8px;
  position: relative;
  transition: all 0.2s ease;
  cursor: pointer;
}

.chart-bar:hover {
  opacity: 0.8;
}

.bar-value {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  font-weight: 600;
  color: #495057;
}

.chart-labels {
  display: flex;
  gap: 4px;
}

.chart-label {
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: #6c757d;
}

/* Activity Breakdown */
.breakdown-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.breakdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
}

.breakdown-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
}

.breakdown-icon.create { background: #28a745; }
.breakdown-icon.update { background: #ffc107; color: #212529; }
.breakdown-icon.approve { background: #17a2b8; }
.breakdown-icon.settle { background: #6c757d; }
.breakdown-icon.delete { background: #dc3545; }

.breakdown-label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 12px;
}

.breakdown-count {
  font-size: 18px;
  font-weight: 700;
  color: #495057;
}

.breakdown-percentage {
  font-size: 11px;
  color: #7f8c8d;
}

/* Recent Changes */
.changes-timeline {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.change-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
}

.change-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
}

.change-content {
  flex: 1;
}

.change-text {
  font-size: 13px;
  color: #495057;
  margin-bottom: 2px;
}

.change-time {
  font-size: 11px;
  color: #7f8c8d;
}

/* Export Options */
.export-options {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.export-option {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
}

.option-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.option-header i {
  color: #667eea;
  font-size: 18px;
}

.option-header h6 {
  margin: 0;
  color: #2c3e50;
}

.export-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
}

.date-range {
  display: flex;
  align-items: center;
  gap: 8px;
}

.backup-info {
  color: #6c757d;
}

/* Buttons */
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  font-weight: 500;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
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
  background: #ffc107;
  color: #212529;
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
  padding: 6px 12px;
  font-size: 12px;
}

/* Footer */
.modal-footer {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.no-data {
  text-align: center;
  padding: 60px 20px;
  color: #6c757d;
}

.no-data i {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

/* Responsive */
@media (max-width: 768px) {
  .reports-dialog {
    width: 98%;
    margin: 10px;
  }

  .tabs {
    overflow-x: auto;
    padding: 0 16px;
  }

  .tab-btn {
    white-space: nowrap;
    padding: 12px 16px;
  }

  .report-content {
    padding: 16px;
  }

  .report-header {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .date-filter {
    flex-wrap: wrap;
  }

  .activity-summary {
    grid-template-columns: 1fr;
  }

  .breakdown-grid {
    grid-template-columns: 1fr;
  }

  .export-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .date-range {
    justify-content: center;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>