<template>
  <div class="mou-summary">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">MOU Management</h1>
        <p class="page-subtitle">Monitor and manage Memorandums of Understanding</p>
      </div>
      <v-btn
        color="primary"
        large
        @click="openMaintenanceDialog"
        class="add-btn"
      >
        <v-icon left>mdi-plus</v-icon>
        Add New MOU
      </v-btn>
    </div>

    <!-- Statistics Cards -->
    <div class="stats-grid">
      <v-card class="stat-card primary-card">
        <div class="stat-content">
          <div class="stat-icon">
            <v-icon size="40" color="white">mdi-file-document-multiple</v-icon>
          </div>
          <div class="stat-details">
            <h2 class="stat-number">{{ statistics.totalMOUs }}</h2>
            <p class="stat-label">Total MOUs</p>
          </div>
        </div>
      </v-card>

      <v-card class="stat-card success-card">
        <div class="stat-content">
          <div class="stat-icon">
            <v-icon size="40" color="white">mdi-account-group</v-icon>
          </div>
          <div class="stat-details">
            <h2 class="stat-number">{{ statistics.totalWorkers }}</h2>
            <p class="stat-label">Total Workers</p>
          </div>
        </div>
      </v-card>

      <v-card class="stat-card warning-card">
        <div class="stat-content">
          <div class="stat-icon">
            <v-icon size="40" color="white">mdi-clock-outline</v-icon>
          </div>
          <div class="stat-details">
            <h2 class="stat-number">{{ statistics.statusBreakdown.inProgress }}</h2>
            <p class="stat-label">In Progress</p>
          </div>
        </div>
      </v-card>

      <v-card class="stat-card info-card">
        <div class="stat-content">
          <div class="stat-icon">
            <v-icon size="40" color="white">mdi-check-circle</v-icon>
          </div>
          <div class="stat-details">
            <h2 class="stat-number">{{ statistics.statusBreakdown.completed }}</h2>
            <p class="stat-label">Completed</p>
          </div>
        </div>
      </v-card>
    </div>

    <!-- Status Breakdown Chart -->
    <v-row class="mt-6">
      <v-col cols="12" md="6">
        <v-card class="chart-card">
          <v-card-title class="card-title">
            <v-icon left color="primary">mdi-chart-pie</v-icon>
            Status Distribution
          </v-card-title>
          <v-card-text>
            <div class="status-breakdown">
              <div 
                v-for="(value, status) in statistics.statusBreakdown" 
                :key="status"
                class="status-item"
              >
                <div class="status-indicator" :class="`status-${status}`"></div>
                <span class="status-name">{{ formatStatusName(status) }}</span>
                <span class="status-count">{{ value }}</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="6">
        <v-card class="chart-card">
          <v-card-title class="card-title">
            <v-icon left color="primary">mdi-trending-up</v-icon>
            Quick Actions
          </v-card-title>
          <v-card-text>
            <div class="action-buttons">
              <v-btn
                v-for="status in quickActionStatuses"
                :key="status.value"
                :color="status.color"
                outlined
                block
                class="ma-1"
                @click="filterByStatus(status.value)"
              >
                <v-icon left>{{ status.icon }}</v-icon>
                View {{ status.label }} ({{ statistics.statusBreakdown[status.value] || 0 }})
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Recent MOUs Table -->
    <v-card class="mt-6 table-card">
      <v-card-title class="card-title">
        <v-icon left color="primary">mdi-format-list-bulleted</v-icon>
        Recent MOUs
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search MOUs"
          single-line
          hide-details
          dense
          class="search-field"
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="mous"
        :search="search"
        :loading="loading"
        :server-items-length="pagination.totalItems"
        :options.sync="options"
        class="mou-table"
        @update:options="fetchMOUs"
      >
        <template v-slot:item.jobStatus="{ item }">
          <v-chip
            :color="getStatusColor(item.jobStatus)"
            small
            text-color="white"
          >
            {{ formatStatusName(item.jobStatus) }}
          </v-chip>
        </template>

        <template v-slot:item.workerType="{ item }">
          <v-icon small :color="getWorkerTypeColor(item.workerType)">
            {{ getWorkerTypeIcon(item.workerType) }}
          </v-icon>
          {{ item.workerType }}
        </template>

        <template v-slot:item.numberOfWorkers="{ item }">
          <span class="font-weight-medium">{{ item.numberOfWorkers }}</span>
        </template>

        <template v-slot:item.pmCharge="{ item }">
          <span class="font-weight-medium">
            {{ formatCurrency(item.pmCharge, item.currency?.code) }}
          </span>
        </template>

        <template v-slot:item.actions="{ item }">
          <div class="action-buttons-inline">
            <v-btn
              icon
              small
              color="primary"
              @click="editMOU(item)"
            >
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              icon
              small
              color="error"
              @click="deleteMOU(item)"
            >
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Maintenance Dialog -->
    <MouMaintenanceDialog
      v-model="maintenanceDialog"
      :editing-item="editingItem"
      @saved="onMOUSaved"
      @cancelled="onDialogCancelled"
    />

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Confirm Delete</v-card-title>
        <v-card-text>
          Are you sure you want to delete MOU "{{ deletingItem?.jobCode }}"?
          This action cannot be undone.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="error" text @click="confirmDelete">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import MouMaintenanceDialog from '~/components/job_fair/mou/maintain/index.vue'

export default {
  name: 'MouSummary',
  components: {
    MouMaintenanceDialog
  },
  data() {
    return {
      statistics: {
        totalMOUs: 0,
        totalWorkers: 0,
        statusBreakdown: {
          draft: 0,
          open: 0,
          inProgress: 0,
          completed: 0,
          cancelled: 0
        }
      },
      mous: [],
      loading: false,
      search: '',
      maintenanceDialog: false,
      deleteDialog: false,
      editingItem: null,
      deletingItem: null,
      pagination: {
        totalItems: 0,
        totalPages: 0,
        currentPage: 1
      },
      options: {
        page: 1,
        itemsPerPage: 10,
        sortBy: ['createdAt'],
        sortDesc: [true]
      },
      headers: [
        { text: 'Job Code', value: 'jobCode', width: 120 },
        { text: 'Job Title', value: 'jobTitle', width: 200 },
        { text: 'Company', value: 'employerCompany', width: 180 },
        { text: 'Workers', value: 'numberOfWorkers', width: 100, align: 'center' },
        { text: 'Type', value: 'workerType', width: 100 },
        { text: 'Status', value: 'jobStatus', width: 120 },
        { text: 'PM Charge', value: 'pmCharge', width: 120 },
        { text: 'Actions', value: 'actions', sortable: false, width: 100 }
      ],
      quickActionStatuses: [
        { value: 'draft', label: 'Draft', color: 'grey', icon: 'mdi-file-outline' },
        { value: 'open', label: 'Open', color: 'blue', icon: 'mdi-folder-open' },
        { value: 'inProgress', label: 'In Progress', color: 'orange', icon: 'mdi-clock-outline' },
        { value: 'completed', label: 'Completed', color: 'green', icon: 'mdi-check-circle' }
      ]
    }
  },
  async mounted() {
    await this.fetchStatistics()
    await this.fetchMOUs()
  },
  methods: {
    async fetchStatistics() {
      try {
        const response = await this.$axios.$get('/api/mous/statistics')
        if (response.success) {
          this.statistics = response.data
        }
      } catch (error) {
        this.$toast.error('Failed to load statistics')
        console.error('Error fetching statistics:', error)
      }
    },

    async fetchMOUs() {
      this.loading = true
      try {
        const { page, itemsPerPage, sortBy, sortDesc } = this.options
        const params = {
          page,
          limit: itemsPerPage,
          sortBy: sortBy[0] || 'createdAt',
          sortOrder: sortDesc[0] ? 'DESC' : 'ASC'
        }

        if (this.search) {
          params.search = this.search
        }

        const response = await this.$axios.$get('/api/mous', { params })
        if (response.success) {
          this.mous = response.data.mous
          this.pagination = response.data.pagination
        }
      } catch (error) {
        this.$toast.error('Failed to load MOUs')
        console.error('Error fetching MOUs:', error)
      } finally {
        this.loading = false
      }
    },

    openMaintenanceDialog() {
      this.editingItem = null
      this.maintenanceDialog = true
    },

    editMOU(item) {
      this.editingItem = { ...item }
      this.maintenanceDialog = true
    },

    deleteMOU(item) {
      this.deletingItem = item
      this.deleteDialog = true
    },

    async confirmDelete() {
      try {
        const response = await this.$axios.$delete(`/api/mous/${this.deletingItem.id}`)
        if (response.success) {
          this.$toast.success('MOU deleted successfully')
          await this.fetchMOUs()
          await this.fetchStatistics()
        }
      } catch (error) {
        this.$toast.error('Failed to delete MOU')
        console.error('Error deleting MOU:', error)
      }
      this.deleteDialog = false
      this.deletingItem = null
    },

    async onMOUSaved() {
      this.maintenanceDialog = false
      this.editingItem = null
      await this.fetchMOUs()
      await this.fetchStatistics()
    },

    onDialogCancelled() {
      this.maintenanceDialog = false
      this.editingItem = null
    },

    filterByStatus(status) {
      this.$router.push(`/mous?status=${status}`)
    },

    formatStatusName(status) {
      const statusMap = {
        draft: 'Draft',
        open: 'Open',
        inProgress: 'In Progress',
        completed: 'Completed',
        cancelled: 'Cancelled'
      }
      return statusMap[status] || status
    },

    getStatusColor(status) {
      const colorMap = {
        draft: 'grey',
        open: 'blue',
        in_progress: 'orange',
        completed: 'green',
        cancelled: 'red'
      }
      return colorMap[status] || 'grey'
    },

    getWorkerTypeColor(type) {
      const colorMap = {
        Man: 'blue',
        Woman: 'pink',
        Spous: 'purple',
        Any: 'green'
      }
      return colorMap[type] || 'grey'
    },

    getWorkerTypeIcon(type) {
      const iconMap = {
        Man: 'mdi-account',
        Woman: 'mdi-account-outline',
        Spous: 'mdi-account-heart',
        Any: 'mdi-account-group'
      }
      return iconMap[type] || 'mdi-account'
    },

    formatCurrency(amount, currencyCode = 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(amount || 0)
    }
  },

  watch: {
    search() {
      // Debounce search
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        this.options.page = 1
        this.fetchMOUs()
      }, 300)
    }
  }
}
</script>

<style scoped>
.mou-summary {
  padding: 24px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-content h1 {
  font-size: 2rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.header-content p {
  color: #7f8c8d;
  margin: 4px 0 0 0;
  font-size: 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.stat-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.primary-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.success-card { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.warning-card { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.info-card { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }

.stat-content {
  display: flex;
  align-items: center;
  padding: 24px;
  color: white;
}

.stat-icon {
  margin-right: 16px;
  opacity: 0.9;
}

.stat-details h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1;
}

.stat-details p {
  font-size: 0.9rem;
  margin: 4px 0 0 0;
  opacity: 0.9;
}

.chart-card, .table-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-weight: 600;
  padding: 20px 24px 16px;
  border-bottom: 1px solid #e0e0e0;
}

.status-breakdown {
  padding: 16px 0;
}

.status-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 12px;
}

.status-draft { background-color: #95a5a6; }
.status-open { background-color: #3498db; }
.status-inProgress { background-color: #f39c12; }
.status-completed { background-color: #27ae60; }
.status-cancelled { background-color: #e74c3c; }

.status-name {
  flex: 1;
  font-weight: 500;
}

.status-count {
  background: #ecf0f1;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #2c3e50;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mou-table {
  border-radius: 0 0 12px 12px;
}

.action-buttons-inline {
  display: flex;
  gap: 4px;
}

.search-field {
  max-width: 300px;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .mou-summary {
    padding: 16px;
  }

  .page-header {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-content {
    justify-content: center;
    text-align: center;
  }
}
</style>