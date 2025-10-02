<template>
  <v-container fluid>
    <!-- Header Section -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="primary white--text py-3">
            <v-icon color="white" class="mr-2">mdi-file-document-multiple</v-icon>
            <span>ຈັດການສັນຍາ MOU</span>
            <v-spacer />
            <v-btn color="white" text @click="openMaintenanceDialog">
              <v-icon left>mdi-plus</v-icon>
              ເພີ່ມສັນຍາ MOU
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <!-- Data Table -->
    <v-row class="mt-3">
      <v-col cols="12">
        <v-card>
          <v-card-title class="py-3">
            <v-icon class="mr-2">mdi-table</v-icon>
            <span>ລາຍການສັນຍາ MOU</span>
            <v-spacer />
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="ຄົ້ນຫາ"
              single-line
              hide-details
              dense
              outlined
              clearable
              style="max-width: 300px"
            />
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="mous"
            :loading="loading"
            :server-items-length="pagination.totalItems"
            :options.sync="options"
            :footer-props="{
              'items-per-page-options': [10, 25, 50, 100]
            }"
            class="elevation-0"
            loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
            no-data-text="ບໍ່ມີຂໍ້ມູນ"
          >
            <!-- Job Code -->
            <template v-slot:item.jobCode="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="primary" class="mr-1">mdi-barcode</v-icon>
                <span class="text-caption font-weight-bold">{{ item.jobCode }}</span>
              </div>
            </template>

            <!-- Job Title -->
            <template v-slot:item.jobTitle="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="purple" class="mr-1">mdi-briefcase</v-icon>
                <span class="text-caption">{{ item.jobTitle }}</span>
              </div>
            </template>

            <!-- Company -->
            <template v-slot:item.employerCompany="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="blue" class="mr-1">mdi-office-building</v-icon>
                <span class="text-caption">{{ item.employerCompany }}</span>
              </div>
            </template>

            <!-- Work Location -->
            <template v-slot:item.workLocation="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="orange" class="mr-1">mdi-map-marker</v-icon>
                <span class="text-caption">{{ item.workLocation }}</span>
              </div>
            </template>

            <!-- Number of Workers -->
            <template v-slot:item.numberOfWorkers="{ item }">
              <div class="d-flex align-center justify-center">
                <v-icon x-small color="success" class="mr-1">mdi-account-multiple</v-icon>
                <span class="text-caption font-weight-bold">{{ item.numberOfWorkers }}</span>
              </div>
            </template>

            <!-- Agency -->
            <template v-slot:item.agency="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="indigo" class="mr-1">mdi-domain</v-icon>
                <span class="text-caption">{{ item.agency?.agencyName || '-' }}</span>
              </div>
            </template>

            <!-- Status -->
            <template v-slot:item.jobStatus="{ item }">
              <v-chip
                x-small
                :color="getStatusColor(item.jobStatus)"
                text-color="white"
              >
                <v-icon x-small left>{{ getStatusIcon(item.jobStatus) }}</v-icon>
                {{ formatStatusName(item.jobStatus) }}
              </v-chip>
            </template>

            <!-- Job Batch Stats -->
            <template v-slot:item.jobBatchStats="{ item }">
              <div class="d-flex align-center justify-center">
                <v-chip x-small color="primary" outlined class="mr-1">
                  <v-icon x-small left>mdi-briefcase</v-icon>
                  {{ item.jobBatchStatistics?.totalJobBatches || 0 }}
                </v-chip>
                <v-tooltip bottom v-if="item.jobBatchStatistics?.activeJobBatches">
                  <template v-slot:activator="{ on }">
                    <v-chip x-small color="success" v-on="on">
                      {{ item.jobBatchStatistics.activeJobBatches }}
                    </v-chip>
                  </template>
                  <span>ກຳລັງດຳເນີນ</span>
                </v-tooltip>
              </div>
            </template>

            <!-- Applicant Stats -->
            <template v-slot:item.applicantStats="{ item }">
              <div class="d-flex align-center justify-center gap-1">
                <v-chip x-small color="indigo" outlined>
                  <v-icon x-small left>mdi-account-group</v-icon>
                  {{ item.applicantStatistics?.totalApplicants || 0 }}
                </v-chip>
                <div class="d-flex gap-1">
                  <v-tooltip bottom v-if="item.applicantStatistics?.interview">
                    <template v-slot:activator="{ on }">
                      <v-chip x-small color="orange" v-on="on">
                        {{ item.applicantStatistics.interview }}
                      </v-chip>
                    </template>
                    <span>ສະໝັກ</span>
                  </v-tooltip>
                  <v-tooltip bottom v-if="item.applicantStatistics?.confirm">
                    <template v-slot:activator="{ on }">
                      <v-chip x-small color="success" v-on="on">
                        {{ item.applicantStatistics.confirm }}
                      </v-chip>
                    </template>
                    <span>ກຽມສົ່ງ</span>
                  </v-tooltip>
                </div>
              </div>
            </template>

            <!-- Project Amount -->
            <template v-slot:item.projectAmount="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="green" class="mr-1">mdi-currency-usd</v-icon>
                <span class="text-caption font-weight-medium">
                  {{ formatCurrency(item.projectAmount, item.currency?.code) }}
                </span>
              </div>
            </template>

            <!-- PM Charge -->
            <template v-slot:item.pmCharge="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="teal" class="mr-1">mdi-cash</v-icon>
                <span class="text-caption font-weight-medium">
                  {{ formatCurrency(item.pmCharge, item.currency?.code) }}
                </span>
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
                  <v-list-item @click="editMOU(item)">
                    <v-list-item-icon>
                      <v-icon small color="info">mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ແກ້ໄຂ</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="viewJobBatches(item)">
                    <v-list-item-icon>
                      <v-icon small color="primary">mdi-briefcase</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ເບິ່ງ Job Batch</v-list-item-title>
                  </v-list-item>
                  <v-divider />
                  <v-list-item @click="deleteMOU(item)">
                    <v-list-item-icon>
                      <v-icon small color="error">mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="error--text">ລົບ</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Maintenance Dialog -->
    <MouMaintenanceDialog
      v-model="maintenanceDialog"
      :editing-item="editingItem"
      @saved="onMOUSaved"
      @cancelled="maintenanceDialog = false"
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
          <v-spacer />
          <v-btn text @click="deleteDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="error" text @click="confirmDelete">ລົບ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import MouMaintenanceDialog from '~/components/job_fair/mou/maintain/index.vue'

export default {
  name: 'MouSummary',
  components: {
    MouMaintenanceDialog,
  },

  data() {
    return {
      mous: [],
      loading: false,
      search: '',
      maintenanceDialog: false,
      deleteDialog: false,
      editingItem: null,
      deletingItem: null,
      searchTimeout: null,

      pagination: {
        totalItems: 0,
        totalPages: 0,
        currentPage: 1,
      },

      options: {
        page: 1,
        itemsPerPage: 25,
        sortBy: ['createdAt'],
        sortDesc: [true],
      },

      headers: [
        { text: 'ລະຫັດ', value: 'jobCode', width: '100px' },
        { text: 'ລາຍລະອຽດໜ້າວຽກ', value: 'jobTitle', width: '180px' },
        { text: 'ບໍລິສັດນາຍຈ້າງ', value: 'employerCompany', width: '180px' },
        { text: 'ສະຖານທີ່', value: 'workLocation', width: '150px' },
        { text: 'ຈຳນວນແຮງງານ', value: 'numberOfWorkers', width: '120px', align: 'center' },
        { text: 'Agency', value: 'agency', width: '150px' },
        { text: 'ສະຖານະ', value: 'jobStatus', width: '120px' },
        { text: 'ເປີດຮັບແຮງງານ', value: 'jobBatchStats', width: '120px', sortable: false, align: 'center' },
        { text: 'ຜູ້ສະໝັກ', value: 'applicantStats', width: '150px', sortable: false, align: 'center' },
        { text: 'MOU Amount', value: 'projectAmount', width: '130px' },
        { text: 'PM Charge', value: 'pmCharge', width: '120px' },
        { text: 'ຄຳສັ່ງ', value: 'actions', sortable: false, width: '80px', align: 'center' },
      ],
    }
  },

  watch: {
    options: {
      handler() {
        this.fetchMOUs()
      },
      deep: true,
    },
    search() {
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        this.options.page = 1
        this.fetchMOUs()
      }, 500)
    },
  },

  mounted() {
    this.fetchMOUs()
  },

  methods: {
    async fetchMOUs() {
      this.loading = true
      try {
        const { page, itemsPerPage, sortBy, sortDesc } = this.options
        const params = {
          page,
          limit: itemsPerPage,
          sortBy: sortBy[0] || 'createdAt',
          sortOrder: sortDesc[0] ? 'DESC' : 'ASC',
        }

        if (this.search) {
          params.search = this.search
        }

        const { data } = await this.$axios.get('/api/mous', { params })
        if (data.success) {
          this.mous = data.data.mous
          this.pagination = data.data.pagination
        }
      } catch (error) {
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
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
      this.$router.push(`/job-batches?mouId=${item.id}`)
    },

    deleteMOU(item) {
      this.deletingItem = item
      this.deleteDialog = true
    },

    async confirmDelete() {
      try {
        const { data } = await this.$axios.delete(`/api/mous/${this.deletingItem.id}`)
        if (data.success) {
          this.$toast.success('ລົບ MOU ສຳເລັດແລ້ວ')
          await this.fetchMOUs()
        }
      } catch (error) {
        this.$toast.error('ການລົບບໍ່ສຳເລັດ')
        console.error('Error deleting MOU:', error)
      }
      this.deleteDialog = false
      this.deletingItem = null
    },

    async onMOUSaved() {
      this.maintenanceDialog = false
      this.editingItem = null
      await this.fetchMOUs()
    },

    formatStatusName(status) {
      const statusMap = {
        draft: 'ຮ່າງ',
        open: 'ເປີດ',
        in_progress: 'ກຳລັງດຳເນີນ',
        completed: 'ສຳເລັດ',
        cancelled: 'ຍົກເລີກ',
      }
      return statusMap[status] || status
    },

    getStatusColor(status) {
      const colorMap = {
        draft: 'grey',
        open: 'primary',
        in_progress: 'warning',
        completed: 'success',
        cancelled: 'error',
      }
      return colorMap[status] || 'grey'
    },

    getStatusIcon(status) {
      const iconMap = {
        draft: 'mdi-file-document-outline',
        open: 'mdi-door-open',
        in_progress: 'mdi-progress-clock',
        completed: 'mdi-check-circle',
        cancelled: 'mdi-close-circle',
      }
      return iconMap[status] || 'mdi-help-circle'
    },

    formatCurrency(amount, currencyCode = 'USD') {
      if (!amount) return '-'
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount)
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

.gap-1 {
  gap: 4px;
}
</style>