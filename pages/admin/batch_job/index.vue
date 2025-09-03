<template>
  <v-container fluid>
    <!-- Header Section -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="py-2">
            <v-chip small color="primary" text-color="white">
              <v-icon left small>mdi-briefcase-outline</v-icon>
              Job Batch Management
            </v-chip>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              small
              @click="openCreateDialog"
              :disabled="loading"
            >
              <v-icon left small>mdi-plus</v-icon>
              New Batch
            </v-btn>
          </v-card-title>

          <!-- Filters -->
          <v-card-text class="pa-3">
            <v-row dense>
              <v-col cols="3">
                <v-text-field
                  v-model="filters.search"
                  label="Search"
                  prepend-inner-icon="mdi-magnify"
                  dense
                  outlined
                  hide-details="auto"
                  clearable
                  @input="debounceSearch"
                />
              </v-col>
              <v-col cols="2">
                <v-select
                  v-model="filters.mouId"
                  :items="mouFilterOptions"
                  :loading="loadingMous"
                  label="MOU"
                  dense
                  outlined
                  hide-details="auto"
                  clearable
                  item-text="mouName"
                  item-value="id"
                />
              </v-col>
              <v-col cols="2">
                <v-select
                  v-model="filters.status"
                  :items="statusOptions"
                  label="Status"
                  dense
                  outlined
                  hide-details="auto"
                  clearable
                />
              </v-col>
              <v-col cols="2">
                <v-select
                  v-model="filters.priority"
                  :items="priorityOptions"
                  label="Priority"
                  dense
                  outlined
                  hide-details="auto"
                  clearable
                />
              </v-col>
              <v-col cols="2">
                <v-menu
                  ref="dateMenu"
                  v-model="dateMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="filters.dateRange"
                      label="Date Range"
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      dense
                      outlined
                      hide-details="auto"
                      clearable
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="filters.dateRange"
                    range
                    @input="dateMenu = false"
                  />
                </v-menu>
              </v-col>
              <v-col cols="1">
                <v-btn
                  color="secondary"
                  outlined
                  small
                  @click="clearFilters"
                  block
                >
                  Clear
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>

          <!-- Statistics Cards -->
          <v-card-text class="pa-3 pt-0">
            <v-row>
              <v-col cols="2" v-for="stat in statistics" :key="stat.title">
                <v-card outlined class="text-center pa-2">
                  <v-icon :color="stat.color" size="24">{{ stat.icon }}</v-icon>
                  <div class="text-h6 mt-1">{{ stat.value }}</div>
                  <div class="text-caption">{{ stat.title }}</div>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Data Table -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-data-table
            :headers="headers"
            :items="jobBatches"
            :loading="loading"
            :options.sync="tableOptions"
            :server-items-length="totalItems"
            :footer-props="{
              'items-per-page-options': [10, 25, 50, 100],
            }"
            class="elevation-0"
            dense
          >
            <!-- Running Number -->
            <template v-slot:item.runningNo="{ item }">
              <v-chip x-small color="grey" text-color="white">
                {{ item.runningNo }}
              </v-chip>
            </template>

            <!-- MOU Information -->
            <template v-slot:item.mou="{ item }">
              <div v-if="item.mou" class="d-flex align-center">
                <v-icon small color="primary" class="mr-1">mdi-file-document-outline</v-icon>
                <div>
                  <div class="text-body-2">{{ item.mou.mouName }}</div>
                  <div class="text-caption grey--text">{{ item.mou.mouNumber }}</div>
                </div>
              </div>
              <span v-else class="text-caption grey--text">No MOU</span>
            </template>

            <!-- Status -->
            <template v-slot:item.status="{ item }">
              <v-chip
                x-small
                :color="getStatusColor(item.status)"
                text-color="white"
              >
                {{ item.status.toUpperCase() }}
              </v-chip>
            </template>

            <!-- Priority -->
            <template v-slot:item.priority="{ item }">
              <v-chip
                x-small
                :color="getPriorityColor(item.priority)"
                text-color="white"
              >
                <v-icon left x-small>{{
                  getPriorityIcon(item.priority)
                }}</v-icon>
                {{ item.priority.toUpperCase() }}
              </v-chip>
            </template>

            <!-- Total Positions -->
            <template v-slot:item.totalPositions="{ item }">
              <div class="text-center">
                <span class="text-body-2 font-weight-bold">{{
                  item.totalPositions || 0
                }}</span>
              </div>
            </template>

            <!-- Dates -->
            <template v-slot:item.batchStartDate="{ item }">
              <span v-if="item.batchStartDate" class="text-caption">
                {{ formatDate(item.batchStartDate) }}
              </span>
              <span v-else class="text-caption grey--text">Not set</span>
            </template>

            <template v-slot:item.deploymentDate="{ item }">
              <span v-if="item.deploymentDate" class="text-caption">
                {{ formatDate(item.deploymentDate) }}
              </span>
              <span v-else class="text-caption grey--text">Not set</span>
            </template>

            <!-- Overdue indicator -->
            <template v-slot:item.isOverdue="{ item }">
              <v-icon v-if="item.isOverdue" color="error" small>
                mdi-clock-alert
              </v-icon>
            </template>

            <!-- Actions -->
            <template v-slot:item.actions="{ item }">
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon small v-bind="attrs" v-on="on">
                    <v-icon small>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item @click="viewDetails(item)">
                    <v-list-item-icon>
                      <v-icon small>mdi-eye</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>View</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="editBatch(item)">
                    <v-list-item-icon>
                      <v-icon small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Edit</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="updateStatus(item)">
                    <v-list-item-icon>
                      <v-icon small>mdi-update</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Update Status</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item @click="deleteBatch(item)" class="error--text">
                    <v-list-item-icon>
                      <v-icon small color="error">mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Delete</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Job Batch Dialog -->
    <job-batch-dialog
      v-model="showDialog"
      :batch="selectedBatch"
      :is-edit="isEdit"
      @saved="onBatchSaved"
      @cancelled="onDialogCancelled"
    />

    <!-- Status Update Dialog -->
    <v-dialog v-model="showStatusDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="text-h6">Update Status</v-card-title>
        <v-card-text>
          <v-select
            v-model="newStatus"
            :items="statusOptions"
            label="New Status"
            outlined
            dense
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="showStatusDialog = false">Cancel</v-btn>
          <v-btn
            color="primary"
            @click="confirmStatusUpdate"
            :loading="updating"
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import JobBatchDialog from '~/components/job_fair/job_batch'
import { debounce } from 'lodash'

export default {
  name: 'JobBatchList',
  components: {
    JobBatchDialog,
  },
  middleware: 'auths',
  data() {
    return {
      loading: false,
      updating: false,
      loadingMous: false,
      dateMenu: false,
      showDialog: false,
      showStatusDialog: false,
      isEdit: false,
      selectedBatch: null,
      newStatus: '',
      jobBatches: [],
      totalItems: 0,
      mouFilterOptions: [],
      statistics: {
        total: {
          title: 'Total Batches',
          value: 0,
          icon: 'mdi-briefcase-outline',
          color: 'primary',
        },
        active: {
          title: 'Active',
          value: 0,
          icon: 'mdi-play-circle',
          color: 'success',
        },
        completed: {
          title: 'Completed',
          value: 0,
          icon: 'mdi-check-circle',
          color: 'success',
        },
        overdue: {
          title: 'Overdue',
          value: 0,
          icon: 'mdi-clock-alert',
          color: 'error',
        },
        draft: {
          title: 'Draft',
          value: 0,
          icon: 'mdi-file-document-outline',
          color: 'warning',
        },
        positions: {
          title: 'Total Positions',
          value: 0,
          icon: 'mdi-account-group',
          color: 'info',
        },
      },
      filters: {
        search: '',
        mouId: '',
        status: '',
        priority: '',
        dateRange: null,
      },
      tableOptions: {
        page: 1,
        itemsPerPage: 10,
        sortBy: ['createdAt'],
        sortDesc: [true],
      },
      headers: [
        {
          text: 'Running No.',
          value: 'runningNo',
          sortable: true,
          width: '100px',
        },
        { text: 'Batch Name', value: 'batchName', sortable: true },
        { text: 'MOU', value: 'mou', sortable: false, width: '200px' },
        { text: 'Status', value: 'status', sortable: true, width: '100px' },
        { text: 'Priority', value: 'priority', sortable: true, width: '120px' },
        {
          text: 'Positions',
          value: 'totalPositions',
          sortable: true,
          width: '100px',
        },
        {
          text: 'Start Date',
          value: 'batchStartDate',
          sortable: true,
          width: '120px',
        },
        {
          text: 'Deployment',
          value: 'deploymentDate',
          sortable: true,
          width: '120px',
        },
        { text: 'Overdue', value: 'isOverdue', sortable: false, width: '80px' },
        { text: 'Actions', value: 'actions', sortable: false, width: '80px' },
      ],
      statusOptions: [
        { text: 'Draft', value: 'draft' },
        { text: 'Active', value: 'active' },
        { text: 'Completed', value: 'completed' },
        { text: 'Cancelled', value: 'cancelled' },
        { text: 'On Hold', value: 'on_hold' },
      ],
      priorityOptions: [
        { text: 'Low', value: 'low' },
        { text: 'Medium', value: 'medium' },
        { text: 'High', value: 'high' },
        { text: 'Urgent', value: 'urgent' },
      ],
    }
  },
  watch: {
    tableOptions: {
      handler() {
        this.fetchJobBatches()
      },
      deep: true,
    },
    'filters.mouId'() {
      this.fetchJobBatches()
    },
    'filters.status'() {
      this.fetchJobBatches()
    },
    'filters.priority'() {
      this.fetchJobBatches()
    },
    'filters.dateRange'() {
      this.fetchJobBatches()
    },
  },
  mounted() {
    this.fetchJobBatches()
    this.fetchStatistics()
    this.fetchMouFilterOptions()
  },
  methods: {
    debounceSearch: debounce(function () {
      this.fetchJobBatches()
    }, 500),

    async fetchJobBatches() {
      this.loading = true
      try {
        const params = {
          page: this.tableOptions.page,
          limit: this.tableOptions.itemsPerPage,
          sortBy: this.tableOptions.sortBy[0] || 'createdAt',
          sortOrder: this.tableOptions.sortDesc[0] ? 'DESC' : 'ASC',
          include: 'mou', // Include MOU information
        }

        if (this.filters.search) params.search = this.filters.search
        if (this.filters.mouId) params.mouId = this.filters.mouId
        if (this.filters.status) params.status = this.filters.status
        if (this.filters.priority) params.priority = this.filters.priority

        const response = await this.$axios.get('/api/batch-job', { params })
        this.jobBatches = response.data.data.jobBatches
        this.totalItems = response.data.data.pagination.total
      } catch (error) {
        this.$toast.error('Failed to fetch job batches')
        console.error('Error fetching job batches:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchStatistics() {
      try {
        const response = await this.$axios.get('/api/batch-job/dashboard-stats')
        const stats = response.data.data

        this.statistics.total.value = stats.totalBatches
        this.statistics.active.value = stats.activeBatches
        this.statistics.completed.value = stats.completedBatches
        this.statistics.overdue.value = stats.overdueBatches
        this.statistics.draft.value = stats.draftBatches
        this.statistics.positions.value = stats.totalPositions
      } catch (error) {
        console.error('Error fetching statistics:', error)
      }
    },

    async fetchMouFilterOptions() {
      this.loadingMous = true
      try {
        const response = await this.$axios.get('/api/mous', {
          params: {
            limit: 100, // Get all for filter options
            fields: 'id,mouName,mouNumber' // Only needed fields for filter
          }
        })
        this.mouFilterOptions = response.data.data.mous || response.data.data || []
      } catch (error) {
        console.error('Error fetching MOU filter options:', error)
        this.mouFilterOptions = []
      } finally {
        this.loadingMous = false
      }
    },

    openCreateDialog() {
      this.selectedBatch = null
      this.isEdit = false
      this.showDialog = true
    },

    editBatch(batch) {
      this.selectedBatch = { ...batch }
      this.isEdit = true
      this.showDialog = true
    },

    viewDetails(batch) {
      this.$router.push(`/job-batches/${batch.id}`)
    },

    updateStatus(batch) {
      this.selectedBatch = batch
      this.newStatus = batch.status
      this.showStatusDialog = true
    },

    async confirmStatusUpdate() {
      this.updating = true
      try {
        await this.$axios.patch(
          `/api/batch-job/${this.selectedBatch.id}/status`,
          {
            status: this.newStatus,
          }
        )

        this.$toast.success('Status updated successfully')
        this.showStatusDialog = false
        this.fetchJobBatches()
        this.fetchStatistics()
      } catch (error) {
        this.$toast.error('Failed to update status')
        console.error('Error updating status:', error)
      } finally {
        this.updating = false
      }
    },

    async deleteBatch(batch) {
      const confirmed = await this.$confirm(
        `Are you sure you want to delete "${batch.batchName}"?`,
        { title: 'Confirm Delete' }
      )

      if (confirmed) {
        try {
          await this.$axios.delete(`/api/batch-job/${batch.id}`)
          this.$toast.success('Job batch deleted successfully')
          this.fetchJobBatches()
          this.fetchStatistics()
        } catch (error) {
          this.$toast.error('Failed to delete job batch')
          console.error('Error deleting batch:', error)
        }
      }
    },

    onBatchSaved() {
      this.showDialog = false
      this.fetchJobBatches()
      this.fetchStatistics()
      this.fetchMouFilterOptions() // Refresh MOU options in case new ones were created
    },

    onDialogCancelled() {
      this.showDialog = false
    },

    clearFilters() {
      this.filters = {
        search: '',
        mouId: '',
        status: '',
        priority: '',
        dateRange: null,
      }
      this.fetchJobBatches()
    },

    getStatusColor(status) {
      const colors = {
        draft: 'orange',
        active: 'green',
        completed: 'blue',
        cancelled: 'red',
        on_hold: 'grey',
      }
      return colors[status] || 'grey'
    },

    getPriorityColor(priority) {
      const colors = {
        low: 'green',
        medium: 'orange',
        high: 'red',
        urgent: 'deep-purple',
      }
      return colors[priority] || 'grey'
    },

    getPriorityIcon(priority) {
      const icons = {
        low: 'mdi-arrow-down',
        medium: 'mdi-minus',
        high: 'mdi-arrow-up',
        urgent: 'mdi-alert',
      }
      return icons[priority] || 'mdi-minus'
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString()
    },
  },
}
</script>

<style scoped>
.v-chip--small {
  font-size: 10px !important;
}
</style>