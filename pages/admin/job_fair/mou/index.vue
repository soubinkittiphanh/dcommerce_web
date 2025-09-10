<template>
  <div class="mou-summary">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">ຈັດການ ສັນຍາ MOU</h1>
        <!-- <p class="page-subtitle">Monitor and manage Memorandums of Understanding</p> -->
      </div>
      <v-btn
        color="primary"
        large
        @click="openMaintenanceDialog"
        class="add-btn"
      >
        <v-icon left>mdi-plus</v-icon>
        ເພີ່ມສັນຍາ MOU
      </v-btn>
    </div>

    <!-- Enhanced Statistics Cards -->
    <div class="stats-grid">
      <v-card class="stat-card primary-card">
        <div class="stat-content">
          <div class="stat-icon">
            <v-icon size="40" color="white">mdi-file-document-multiple</v-icon>
          </div>
          <div class="stat-details">
            <h2 class="stat-number">{{ statistics.totalMOUs }}</h2>
            <p class="stat-label">ສັນຍາ MOU ທັງໝົດ</p>
          </div>
        </div>
      </v-card>

      <v-card class="stat-card success-card">
        <div class="stat-content">
          <div class="stat-icon">
            <v-icon size="40" color="white">mdi-briefcase-multiple</v-icon>
          </div>
          <div class="stat-details">
            <h2 class="stat-number">{{ statistics.totalJobBatches }}</h2>
            <p class="stat-label">ກຸ່ມວຽກທັງໝົດ</p>
          </div>
        </div>
      </v-card>

      <v-card class="stat-card warning-card">
        <div class="stat-content">
          <div class="stat-icon">
            <v-icon size="40" color="white">mdi-account-group</v-icon>
          </div>
          <div class="stat-details">
            <h2 class="stat-number">{{ statistics.totalApplicants }}</h2>
            <p class="stat-label">ຜູ້ສະໝັກທັງໝົດ</p>
          </div>
        </div>
      </v-card>

      <v-card class="stat-card info-card">
        <div class="stat-content">
          <div class="stat-icon">
            <v-icon size="40" color="white">mdi-account-check</v-icon>
          </div>
          <div class="stat-details">
            <h2 class="stat-number">{{ statistics.totalConfirmedApplicants }}</h2>
            <p class="stat-label">ຜູ້ກຽມສົ່ງ</p>
          </div>
        </div>
      </v-card>
    </div>

    <!-- Additional Statistics Row -->
    <div class="stats-grid secondary-stats">
      <v-card class="stat-card mini-card interview-card">
        <div class="stat-content mini">
          <div class="stat-icon mini">
            <v-icon size="24" color="white">mdi-account-question</v-icon>
          </div>
          <div class="stat-details">
            <h3 class="stat-number mini">{{ statistics.totalInterviewApplicants }}</h3>
            <p class="stat-label mini">ຜູ້ສະໝັກ</p>
          </div>
        </div>
      </v-card>

      <v-card class="stat-card mini-card register-card">
        <div class="stat-content mini">
          <div class="stat-icon mini">
            <v-icon size="24" color="white">mdi-account-plus</v-icon>
          </div>
          <div class="stat-details">
            <h3 class="stat-number mini">{{ statistics.totalRegisterApplicants }}</h3>
            <p class="stat-label mini">ຜູ້ລົງທະບຽນ</p>
          </div>
        </div>
      </v-card>

      <v-card class="stat-card mini-card active-card">
        <div class="stat-content mini">
          <div class="stat-icon mini">
            <v-icon size="24" color="white">mdi-briefcase</v-icon>
          </div>
          <div class="stat-details">
            <h3 class="stat-number mini">{{ statistics.activeJobBatches }}</h3>
            <p class="stat-label mini">ກຸ່ມວຽກກຳລັງດຳເນີນ</p>
          </div>
        </div>
      </v-card>

      <v-card class="stat-card mini-card completed-card">
        <div class="stat-content mini">
          <div class="stat-icon mini">
            <v-icon size="24" color="white">mdi-check-circle</v-icon>
          </div>
          <div class="stat-details">
            <h3 class="stat-number mini">{{ statistics.completedJobBatches }}</h3>
            <p class="stat-label mini">ກຸ່ມວຽກສຳເລັດ</p>
          </div>
        </div>
      </v-card>
    </div>

    <!-- Recent MOUs Table -->
    <v-card class="mt-6 table-card">
      <v-card-title class="card-title">
        <v-icon left color="primary">mdi-format-list-bulleted</v-icon>
        ສັນຍາ MOU ລ່າສຸດ
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຄົ້ນຫາ MOU"
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

        <!-- JobBatch Statistics Column -->
        <template v-slot:item.jobBatchStats="{ item }">
          <div class="job-batch-stats">
            <v-chip
              small
              color="primary"
              text-color="white"
              class="ma-1"
            >
              <v-icon small left>mdi-briefcase</v-icon>
              {{ item.jobBatchStatistics.totalJobBatches }}
            </v-chip>
            <div class="stats-breakdown">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    x-small
                    color="green"
                    text-color="white"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ item.jobBatchStatistics.activeJobBatches }}
                  </v-chip>
                </template>
                <span>ກຸ່ມວຽກກຳລັງດຳເນີນ</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    x-small
                    color="blue"
                    text-color="white"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ item.jobBatchStatistics.completedJobBatches }}
                  </v-chip>
                </template>
                <span>ກຸ່ມວຽກສຳເລັດ</span>
              </v-tooltip>
            </div>
          </div>
        </template>

        <!-- Applicant Statistics Column -->
        <template v-slot:item.applicantStats="{ item }">
          <div class="applicant-stats">
            <div class="total-applicants">
              <v-chip
                small
                color="indigo"
                text-color="white"
                class="ma-1"
              >
                <v-icon small left>mdi-account-group</v-icon>
                {{ item.applicantStatistics.totalApplicants }}
              </v-chip>
            </div>
            <div class="status-breakdown">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    x-small
                    color="orange"
                    text-color="white"
                    v-bind="attrs"
                    v-on="on"
                    class="mr-1"
                  >
                    {{ item.applicantStatistics.interview }}
                  </v-chip>
                </template>
                <span>ຜູ້ສະໝັກ</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    x-small
                    color="blue"
                    text-color="white"
                    v-bind="attrs"
                    v-on="on"
                    class="mr-1"
                  >
                    {{ item.applicantStatistics.register }}
                  </v-chip>
                </template>
                <span>ຜູ້ລົງທະບຽນ</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    x-small
                    color="green"
                    text-color="white"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ item.applicantStatistics.confirm }}
                  </v-chip>
                </template>
                <span>ຜູ້ກຽມສົ່ງ</span>
              </v-tooltip>
            </div>
          </div>
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
              color="info"
              @click="viewJobBatches(item)"
            >
              <v-icon small>mdi-briefcase</v-icon>
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
        <v-card-title class="headline">ຢືນຢັນການລົບ</v-card-title>
        <v-card-text>
          ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລົບ MOU "{{ deletingItem?.jobCode }}"?
          ການກະທຳນີ້ບໍ່ສາມາດຍົກເລີກໄດ້.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="deleteDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="error" text @click="confirmDelete">ລົບ</v-btn>
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
        totalJobBatches: 0,
        totalApplicants: 0,
        totalConfirmedApplicants: 0,
        totalInterviewApplicants: 0,
        totalRegisterApplicants: 0,
        activeJobBatches: 0,
        completedJobBatches: 0,
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
        { text: 'ລະຫັດວຽກ', value: 'jobCode', width: 120 },
        { text: 'ຊື່ວຽກ', value: 'jobTitle', width: 200 },
        { text: 'ບໍລິສັດ', value: 'employerCompany', width: 180 },
        { text: 'ຈຳນວນຄົນ', value: 'numberOfWorkers', width: 100, align: 'center' },
        { text: 'ປະເພດ', value: 'workerType', width: 100 },
        { text: 'ສະຖານະ', value: 'jobStatus', width: 120 },
        { text: 'ກຸ່ມວຽກ', value: 'jobBatchStats', width: 140, sortable: false },
        { text: 'ຜູ້ສະໝັກ', value: 'applicantStats', width: 160, sortable: false },
        { text: 'ຄ່າບໍລິການ', value: 'pmCharge', width: 120 },
        { text: 'ການດຳເນີນການ', value: 'actions', sortable: false, width: 120 }
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
        this.$toast.error('ບໍ່ສາມາດໂຫຼດສະຖິຕິໄດ້')
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
        this.$toast.error('ບໍ່ສາມາດໂຫຼດ MOU ໄດ້')
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

    viewJobBatches(item) {
      // Navigate to job batches view filtered by MOU
      this.$router.push(`/job-batches?mouId=${item.id}`)
    },

    deleteMOU(item) {
      this.deletingItem = item
      this.deleteDialog = true
    },

    async confirmDelete() {
      try {
        const response = await this.$axios.$delete(`/api/mous/${this.deletingItem.id}`)
        if (response.success) {
          this.$toast.success('ລົບ MOU ສຳເລັດແລ້ວ')
          await this.fetchMOUs()
          await this.fetchStatistics()
        }
      } catch (error) {
        this.$toast.error('ບໍ່ສາມາດລົບ MOU ໄດ້')
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

    formatStatusName(status) {
      const statusMap = {
        draft: 'ຮ່າງ',
        open: 'ເປີດ',
        inProgress: 'ກຳລັງດຳເນີນ',
        completed: 'ສຳເລັດ',
        cancelled: 'ຍົກເລີກ'
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.secondary-stats {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-bottom: 0;
}

.stat-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.mini-card {
  min-height: 100px;
}

.primary-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.success-card { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.warning-card { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.info-card { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.interview-card { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
.register-card { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); }
.active-card { background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); }
.completed-card { background: linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%); }

.stat-content {
  display: flex;
  align-items: center;
  padding: 24px;
  color: white;
}

.stat-content.mini {
  padding: 16px;
}

.stat-icon {
  margin-right: 16px;
  opacity: 0.9;
}

.stat-icon.mini {
  margin-right: 12px;
}

.stat-details h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1;
}

.stat-details h3.mini {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  line-height: 1;
}

.stat-details p {
  font-size: 0.9rem;
  margin: 4px 0 0 0;
  opacity: 0.9;
}

.stat-details p.mini {
  font-size: 0.8rem;
}

.job-batch-stats,
.applicant-stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stats-breakdown,
.status-breakdown {
  display: flex;
  gap: 4px;
}

.total-applicants {
  margin-bottom: 4px;
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

  .secondary-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-content {
    justify-content: center;
    text-align: center;
  }

  .job-batch-stats,
  .applicant-stats {
    align-items: center;
  }
}
</style>