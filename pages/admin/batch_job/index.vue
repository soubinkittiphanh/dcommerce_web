<template>
  <v-container fluid>
    <!-- Header Section -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="primary white--text py-3">
            <v-icon color="white" class="mr-2">mdi-briefcase-outline</v-icon>
            <span>ລະບົບຈັດການ Job Batch</span>
            <v-spacer />
            <v-btn color="white" text @click="openCreateDialog" :disabled="loading">
              <v-icon left>mdi-plus</v-icon>
              ເພີ່ມໃໝ່
            </v-btn>
          </v-card-title>

          <!-- Filters -->
          <v-card-text class="pa-3">
            <v-row dense>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="filters.search"
                  label="ຄົ້ນຫາ"
                  prepend-inner-icon="mdi-magnify"
                  dense
                  outlined
                  hide-details
                  clearable
                  @input="debounceSearch"
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-select
                  v-model="filters.mouId"
                  :items="mouFilterOptions"
                  :loading="loadingMous"
                  label="ສັນຍາ MOU"
                  prepend-inner-icon="mdi-file-document"
                  dense
                  outlined
                  hide-details
                  clearable
                  item-text="mouName"
                  item-value="id"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.status"
                  :items="statusOptions"
                  label="ສະຖານະ"
                  prepend-inner-icon="mdi-information"
                  dense
                  outlined
                  hide-details
                  clearable
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-menu
                  v-model="dateMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dateRangeText"
                      label="ຊ່ວງເວລາ"
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      dense
                      outlined
                      hide-details
                      clearable
                      v-bind="attrs"
                      v-on="on"
                      @click:clear="filters.dateRange = null"
                    />
                  </template>
                  <v-date-picker
                    v-model="filters.dateRange"
                    range
                    @input="dateMenu = false"
                  />
                </v-menu>
              </v-col>
              <v-col cols="12" md="2">
                <v-btn color="secondary" outlined block @click="clearFilters">
                  <v-icon left>mdi-refresh</v-icon>
                  Reset
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Data Table -->
    <v-row class="mt-3">
      <v-col cols="12">
        <v-card>
          <v-card-title class="py-2">
            <v-icon class="mr-2">mdi-table</v-icon>
            <span>ລາຍການ Job Batch</span>
            <v-spacer />
            <v-chip color="primary" outlined>
              {{ totalItems }} ລາຍການ
            </v-chip>
          </v-card-title>

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
            loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
            no-data-text="ບໍ່ມີຂໍ້ມູນ"
          >
            <!-- Running Number -->
            <template v-slot:item.runningNo="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="grey" class="mr-1">mdi-numeric</v-icon>
                <v-chip x-small color="grey lighten-1" text-color="white">
                  {{ item.runningNo }}
                </v-chip>
              </div>
            </template>

            <!-- MOU Information -->
            <template v-slot:item.mou="{ item }">
              <div v-if="item.mou" class="d-flex align-center">
                <v-icon small color="primary" class="mr-1">mdi-file-document</v-icon>
                <div>
                  <div class="text-caption font-weight-bold">{{ item.mou.mouName }}</div>
                  <div class="text-caption grey--text">{{ item.mou.mouNumber }}</div>
                </div>
              </div>
              <span v-else class="text-caption grey--text">
                <v-icon x-small class="mr-1">mdi-minus-circle</v-icon>
                ບໍ່ມີ MOU
              </span>
            </template>

            <!-- Work Place -->
            <template v-slot:item.workPlace="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="blue" class="mr-1">mdi-map-marker</v-icon>
                <span class="text-caption">{{ item.mou?.workLocation || '-' }}</span>
              </div>
            </template>

            <!-- Job Title -->
            <template v-slot:item.jobTitle="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="purple" class="mr-1">mdi-briefcase</v-icon>
                <span class="text-caption">{{ item.mou?.jobTitle || '-' }}</span>
              </div>
            </template>

            <!-- Status -->
            <template v-slot:item.status="{ item }">
              <v-chip
                x-small
                :color="getStatusColor(item.status)"
                text-color="white"
              >
                <v-icon x-small left>{{ getStatusIcon(item.status) }}</v-icon>
                {{ formatStatus(item.status) }}
              </v-chip>
            </template>

            <!-- Total Positions -->
            <template v-slot:item.totalPositions="{ item }">
              <div class="d-flex align-center justify-center">
                <v-icon x-small color="success" class="mr-1">mdi-account-multiple</v-icon>
                <span class="text-caption font-weight-bold">{{ item.totalPositions || 0 }}</span>
              </div>
            </template>

            <!-- Applicants Count -->
            <template v-slot:item.applicantCount="{ item }">
              <div class="d-flex align-center justify-center">
                <v-icon x-small color="info" class="mr-1">mdi-account-check</v-icon>
                <span class="text-caption font-weight-bold">
                  {{ item.applicantStatistics?.interview || 0 }}
                </span>
              </div>
            </template>

            <!-- Start Date -->
            <template v-slot:item.batchStartDate="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="green" class="mr-1">mdi-calendar-start</v-icon>
                <span v-if="item.batchStartDate" class="text-caption">
                  {{ formatDate(item.batchStartDate) }}
                </span>
                <span v-else class="text-caption grey--text">ບໍ່ມີ</span>
              </div>
            </template>

            <!-- End Date -->
            <template v-slot:item.batchEndDate="{ item }">
              <div class="d-flex align-center">
                <v-icon 
                  x-small 
                  :color="isOverdue(item.batchEndDate) ? 'error' : 'warning'" 
                  class="mr-1"
                >
                  mdi-calendar-end
                </v-icon>
                <span 
                  v-if="item.batchEndDate" 
                  class="text-caption"
                  :class="{ 'error--text': isOverdue(item.batchEndDate) }"
                >
                  {{ formatDate(item.batchEndDate) }}
                </span>
                <span v-else class="text-caption grey--text">ບໍ່ມີ</span>
              </div>
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
                  <v-list-item @click="editBatch(item)">
                    <v-list-item-icon>
                      <v-icon small color="info">mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ແກ້ໄຂ</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="updateStatus(item)">
                    <v-list-item-icon>
                      <v-icon small color="orange">mdi-update</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ອັບເດດສະຖານະ</v-list-item-title>
                  </v-list-item>
                  <v-divider />
                  <!-- <v-list-item @click="deleteBatch(item)">
                    <v-list-item-icon>
                      <v-icon small color="error">mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="error--text">ລົບ</v-list-item-title>
                  </v-list-item> -->
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
      @cancelled="showDialog = false"
    />

    <!-- Status Update Dialog -->
    <v-dialog v-model="showStatusDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="text-h6">ອັບເດດສະຖານະ</v-card-title>
        <v-card-text>
          <v-select
            v-model="newStatus"
            :items="statusOptions"
            label="ສະຖານະໃໝ່"
            outlined
            dense
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="showStatusDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="confirmStatusUpdate" :loading="updating">
            ອັບເດດ
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

      filters: {
        search: '',
        mouId: '',
        status: '',
        dateRange: null,
      },

      tableOptions: {
        page: 1,
        itemsPerPage: 25,
        sortBy: ['createdAt'],
        sortDesc: [true],
      },

      headers: [
        { text: 'ຮອບຈັດສົ່ງ', value: 'runningNo', sortable: true, width: '100px' },
        { text: 'ບໍລິສັດນາຍຈ້າງ', value: 'mou', sortable: false, width: '200px' },
        { text: 'ສະຖານທີ່ວຽກ', value: 'workPlace', sortable: false, width: '150px' },
        { text: 'ໜ້າວຽກ', value: 'jobTitle', sortable: false, width: '150px' },
        { text: 'ສະຖານະ', value: 'status', sortable: true, width: '120px' },
        { text: 'ເປີດຮັບ', value: 'totalPositions', sortable: true, width: '100px', align: 'center' },
        { text: 'ສະໝັກແລ້ວ', value: 'applicantCount', sortable: false, width: '100px', align: 'center' },
        { text: 'ວັນເລີ່ມ', value: 'batchStartDate', sortable: true, width: '120px' },
        { text: 'ວັນສິ້ນສຸດ', value: 'batchEndDate', sortable: true, width: '120px' },
        { text: 'ຄຳສັ່ງ', value: 'actions', sortable: false, width: '80px', align: 'center' },
      ],

      statusOptions: [
        { text: 'ດຳເນີນການ', value: 'active' },
        { text: 'ສຳເລັດ', value: 'completed' },
        { text: 'ຍົກເລີກ', value: 'cancelled' },
        { text: 'ລໍຖ້າ', value: 'on_hold' },
      ],
    }
  },

  computed: {
    dateRangeText() {
      if (!this.filters.dateRange || this.filters.dateRange.length === 0) return ''
      if (this.filters.dateRange.length === 1) return this.filters.dateRange[0]
      return `${this.filters.dateRange[0]} - ${this.filters.dateRange[1]}`
    },
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
    'filters.dateRange'() {
      this.fetchJobBatches()
    },
  },

  mounted() {
    this.fetchJobBatches()
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
          include: 'mou',
        }

        if (this.filters.search) params.search = this.filters.search
        if (this.filters.mouId) params.mouId = this.filters.mouId
        if (this.filters.status) params.status = this.filters.status

        const { data } = await this.$axios.get('/api/batch-job', { params })
        this.jobBatches = data.data.jobBatches
        this.totalItems = data.data.pagination.total
      } catch (error) {
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
        console.error('Error fetching job batches:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchMouFilterOptions() {
      this.loadingMous = true
      try {
        const { data } = await this.$axios.get('/api/mous', {
          params: { limit: 100, fields: 'id,mouName,mouNumber' },
        })
        this.mouFilterOptions = data.data.mous || data.data || []
      } catch (error) {
        console.error('Error fetching MOU options:', error)
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



    updateStatus(batch) {
      this.selectedBatch = batch
      this.newStatus = batch.status
      this.showStatusDialog = true
    },

    async confirmStatusUpdate() {
      this.updating = true
      try {
        await this.$axios.patch(`/api/batch-job/${this.selectedBatch.id}/status`, {
          status: this.newStatus,
        })
        this.$toast.success('ອັບເດດສະຖານະສຳເລັດແລ້ວ')
        this.showStatusDialog = false
        this.fetchJobBatches()
      } catch (error) {
        this.$toast.error('ອັບເດດສະຖານະບໍ່ສຳເລັດ')
        console.error('Error updating status:', error)
      } finally {
        this.updating = false
      }
    },

    async deleteBatch(batch) {
      const confirmed = await this.$confirm(
        `ທ່ານຕ້ອງການລົບ "${batch.batchName}" ແມ່ນບໍ?`,
        { title: 'ຢືນຢັນການລົບ' }
      )

      if (confirmed) {
        try {
          await this.$axios.delete(`/api/batch-job/${batch.id}`)
          this.$toast.success('ລົບສຳເລັດແລ້ວ')
          this.fetchJobBatches()
        } catch (error) {
          this.$toast.error('ການລົບບໍ່ສຳເລັດ')
          console.error('Error deleting batch:', error)
        }
      }
    },

    onBatchSaved() {
      this.showDialog = false
      this.fetchJobBatches()
      this.fetchMouFilterOptions()
    },

    clearFilters() {
      this.filters = {
        search: '',
        mouId: '',
        status: '',
        dateRange: null,
      }
      this.fetchJobBatches()
    },

    getStatusColor(status) {
      const colors = {
        active: 'success',
        completed: 'primary',
        cancelled: 'error',
        on_hold: 'warning',
      }
      return colors[status] || 'grey'
    },

    getStatusIcon(status) {
      const icons = {
        active: 'mdi-play-circle',
        completed: 'mdi-check-circle',
        cancelled: 'mdi-close-circle',
        on_hold: 'mdi-pause-circle',
      }
      return icons[status] || 'mdi-help-circle'
    },

    formatStatus(status) {
      const labels = {
        active: 'ດຳເນີນການ',
        completed: 'ສຳເລັດ',
        cancelled: 'ຍົກເລີກ',
        on_hold: 'ລໍຖ້າ',
      }
      return labels[status] || status
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    isOverdue(date) {
      if (!date) return false
      return new Date(date) < new Date()
    },
  },
}
</script>

<style scoped>
.v-card-title.primary {
  background: linear-gradient(45deg, #1976d2, #1565c0);
}

.text-caption {
  font-size: 12px !important;
}
</style>