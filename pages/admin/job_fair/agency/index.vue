<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <!-- Page Header -->
        <v-card class="mb-4">
          <v-card-title class="d-flex justify-space-between align-center">
            <div>
              <v-icon large color="primary" class="mr-2">mdi-office-building</v-icon>
              <span class="text-h4">ລະບົບຈັດການບໍລິສັດແນະນຳແຮງງານ</span>
            </div>
            <div>
              <v-btn color="primary" @click="openCreateDialog" class="mr-2">
                <v-icon left>mdi-plus</v-icon>
                ເພີ່ມບໍລິສັດໃໝ່
              </v-btn>
              <v-btn color="success" outlined @click="exportData">
                <v-icon left>mdi-download</v-icon>
                Export
              </v-btn>
            </div>
          </v-card-title>
        </v-card>

        <!-- Filter Section -->
        <v-card class="mb-4">
          <v-card-title>
            <v-icon class="mr-2">mdi-filter</v-icon>
            ຄົ້ນຫາ ແລະ ກັ່ນຕອງ
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="filters.search"
                  label="ຄົ້ນຫາ"
                  placeholder="ຊື່ບໍລິສັດ, ເບີໂທ, ອີເມວ..."
                  prepend-icon="mdi-magnify"
                  clearable
                  @input="applyFilters"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.status"
                  :items="statusOptions"
                  label="ສະຖານະ"
                  prepend-icon="mdi-check-circle"
                  clearable
                  @change="applyFilters"
                ></v-select>
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.city"
                  :items="availableCities"
                  label="ເມືອງ"
                  prepend-icon="mdi-city"
                  clearable
                  @change="applyFilters"
                ></v-select>
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.district"
                  :items="availableDistricts"
                  label="ແຂວງ"
                  prepend-icon="mdi-map"
                  clearable
                  @change="applyFilters"
                ></v-select>
              </v-col>
              <v-col cols="12" md="3" class="d-flex align-center">
                <v-btn color="primary" @click="applyFilters" class="mr-2">
                  <v-icon left>mdi-magnify</v-icon>
                  ຄົ້ນຫາ
                </v-btn>
                <v-btn outlined @click="resetFilters">
                  <v-icon left>mdi-refresh</v-icon>
                  Reset
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Summary Cards -->
        <v-row class="mb-4">
          <v-col cols="12" sm="6" md="3">
            <v-card color="primary" dark>
              <v-card-text>
                <div class="d-flex justify-space-between">
                  <div>
                    <div class="text-h3 font-weight-bold">{{ summaryStats.total }}</div>
                    <div>ລວມທັງໝົດ</div>
                  </div>
                  <v-icon size="48">mdi-office-building</v-icon>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-card color="success" dark>
              <v-card-text>
                <div class="d-flex justify-space-between">
                  <div>
                    <div class="text-h3 font-weight-bold">{{ summaryStats.active }}</div>
                    <div>ກຳລັງດຳເນີນງານ</div>
                  </div>
                  <v-icon size="48">mdi-check-circle</v-icon>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-card color="warning" dark>
              <v-card-text>
                <div class="d-flex justify-space-between">
                  <div>
                    <div class="text-h3 font-weight-bold">{{ summaryStats.expiringSoon }}</div>
                    <div>ໃກ້ໝົດອາຍຸ</div>
                  </div>
                  <v-icon size="48">mdi-alert-circle</v-icon>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-card color="info" dark>
              <v-card-text>
                <div class="d-flex justify-space-between">
                  <div>
                    <div class="text-h3 font-weight-bold">{{ summaryStats.withLicense }}</div>
                    <div>ມີໃບອະນຸຍາດ</div>
                  </div>
                  <v-icon size="48">mdi-certificate</v-icon>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Data Table -->
        <v-card>
          <v-card-title>
            <v-icon class="mr-2">mdi-table</v-icon>
            ລາຍຊື່ບໍລິສັດ
            <v-spacer></v-spacer>
            <span class="caption">{{ filteredAgencies.length }} ລາຍການ</span>
          </v-card-title>
          
          <v-data-table
            :headers="headers"
            :items="filteredAgencies"
            :items-per-page="itemsPerPage"
            :page="currentPage"
            :loading="loading"
            class="elevation-1"
            loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
            no-data-text="ບໍ່ມີຂໍ້ມູນ"
          >
            <template v-slot:item.agencyName="{ item }">
              <div>
                <div class="font-weight-bold">{{ item.agencyName }}</div>
                <div class="caption text--secondary">{{ item.agencyCode }}</div>
              </div>
            </template>

            <template v-slot:item.contact="{ item }">
              <div>
                <div class="d-flex align-center mb-1">
                  <v-icon small class="mr-1">mdi-phone</v-icon>
                  <span>{{ item.phone }}</span>
                </div>
                <div class="d-flex align-center" v-if="item.email">
                  <v-icon small class="mr-1">mdi-email</v-icon>
                  <span class="caption">{{ item.email }}</span>
                </div>
              </div>
            </template>

            <template v-slot:item.location="{ item }">
              <div>
                <div v-if="item.city || item.district">
                  <v-chip small color="primary" outlined class="ma-1" v-if="item.city">
                    {{ item.city }}
                  </v-chip>
                  <v-chip small color="secondary" outlined class="ma-1" v-if="item.district">
                    {{ item.district }}
                  </v-chip>
                </div>
                <div class="caption text--secondary mt-1" v-if="item.address">
                  {{ truncateText(item.address, 50) }}
                </div>
              </div>
            </template>

            <template v-slot:item.contactPerson="{ item }">
              <div v-if="item.contactPersonName">
                <div class="font-weight-medium">{{ item.contactPersonName }}</div>
                <div class="caption text--secondary">{{ item.contactPersonPosition }}</div>
                <div class="caption" v-if="item.contactPersonPhone">
                  <v-icon small class="mr-1">mdi-phone</v-icon>
                  {{ item.contactPersonPhone }}
                </div>
              </div>
              <span v-else class="text--disabled">-</span>
            </template>

            <template v-slot:item.license="{ item }">
              <div v-if="item.licenseNumber">
                <div class="font-weight-medium">{{ item.licenseNumber }}</div>
                <div class="caption" v-if="item.licenseExpiryDate" :class="isLicenseExpired(item.licenseExpiryDate) ? 'error--text' : 'success--text'">
                  <v-icon small :color="isLicenseExpired(item.licenseExpiryDate) ? 'error' : 'success'" class="mr-1">
                    {{ isLicenseExpired(item.licenseExpiryDate) ? 'mdi-alert-circle' : 'mdi-check-circle' }}
                  </v-icon>
                  {{ formatDate(item.licenseExpiryDate) }}
                </div>
              </div>
              <v-chip v-else small color="grey" outlined>ບໍ່ມີ</v-chip>
            </template>

            <template v-slot:item.status="{ item }">
              <v-chip
                small
                :color="getStatusColor(item.status)"
                dark
              >
                <v-icon small left>{{ getStatusIcon(item.status) }}</v-icon>
                {{ formatStatus(item.status) }}
              </v-chip>
            </template>

            <template v-slot:item.createdAt="{ item }">
              <div class="caption">{{ formatDate(item.createdAt) }}</div>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    small
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                    @click="viewAgency(item)"
                  >
                    <v-icon small>mdi-eye</v-icon>
                  </v-btn>
                </template>
                <span>ເບິ່ງລາຍລະອຽດ</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    small
                    color="info"
                    v-bind="attrs"
                    v-on="on"
                    @click="editAgency(item)"
                  >
                    <v-icon small>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>ແກ້ໄຂ</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    small
                    :color="item.status === 'active' ? 'warning' : 'success'"
                    v-bind="attrs"
                    v-on="on"
                    @click="toggleStatus(item)"
                  >
                    <v-icon small>
                      {{ item.status === 'active' ? 'mdi-pause' : 'mdi-play' }}
                    </v-icon>
                  </v-btn>
                </template>
                <span>{{ item.status === 'active' ? 'ຢຸດການດຳເນີນງານ' : 'ເລີ່ມການດຳເນີນງານ' }}</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    small
                    color="error"
                    v-bind="attrs"
                    v-on="on"
                    @click="deleteAgency(item)"
                  >
                    <v-icon small>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>ລົບ</span>
              </v-tooltip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Agency Dialog -->
    <AgencyDialog
      :visible="showDialog"
      :agency="selectedAgency"
      @close="closeDialog"
      @save="onAgencySave"
    />

    <!-- View Dialog -->
    <AgencyViewDialog
      :visible="showViewDialog"
      :agency="selectedAgency"
      @close="closeViewDialog"
    />

    <!-- Confirm Dialog -->
    <v-dialog v-model="confirmDialog.show" max-width="400">
      <v-card>
        <v-card-title class="headline">{{ confirmDialog.title }}</v-card-title>
        <v-card-text>{{ confirmDialog.message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="confirmDialog.show = false">ຍົກເລີກ</v-btn>
          <v-btn :color="confirmDialog.color" text @click="confirmDialog.action">
            {{ confirmDialog.confirmText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Loading Overlay -->
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import AgencyDialog from '~/components/job_fair/agency/maintain'
import AgencyViewDialog from '~/components/job_fair/agency/view'

export default {
  name: 'AgencySummary',
  components: {
    AgencyDialog,
    AgencyViewDialog,
  },
  middleware: 'auth',
  
  data() {
    return {
      loading: false,
      agencies: [],
      filteredAgencies: [],
      showDialog: false,
      showViewDialog: false,
      selectedAgency: null,
      currentPage: 1,
      itemsPerPage: 10,
      
      // Filters
      filters: {
        search: '',
        status: '',
        city: '',
        district: '',
      },
      
      // Summary statistics
      summaryStats: {
        total: 0,
        active: 0,
        expiringSoon: 0,
        withLicense: 0,
      },
      
      // Confirm dialog
      confirmDialog: {
        show: false,
        title: '',
        message: '',
        color: 'primary',
        confirmText: 'ຢືນຢັນ',
        action: null,
      },
      
      // Table headers
      headers: [
        { text: 'ຊື່ບໍລິສັດ', value: 'agencyName', sortable: true },
        { text: 'ຕິດຕໍ່', value: 'contact', sortable: false },
        { text: 'ທີ່ຢູ່', value: 'location', sortable: false },
        { text: 'ຜູ້ຕິດຕໍ່', value: 'contactPerson', sortable: false },
        { text: 'ໃບອະນຸຍາດ', value: 'license', sortable: false },
        { text: 'ສະຖານະ', value: 'status', sortable: true },
        { text: 'ວັນທີສ້າງ', value: 'createdAt', sortable: true },
        { text: 'ຟັງຊັ່ນ', value: 'actions', sortable: false },
      ],
      
      // Status options
      statusOptions: [
        { text: 'ກຳລັງດຳເນີນງານ', value: 'active' },
        { text: 'ບໍ່ດຳເນີນງານ', value: 'inactive' },
        { text: 'ຖືກຢຸດ', value: 'suspended' },
      ],
    }
  },
  
  computed: {
    user() {
      return this.$auth.user || {}
    },
    
    availableCities() {
      const cities = [...new Set(this.agencies.map(a => a.city).filter(Boolean))]
      return cities.sort().map(city => ({ text: city, value: city }))
    },
    
    availableDistricts() {
      const districts = [...new Set(this.agencies.map(a => a.district).filter(Boolean))]
      return districts.sort().map(district => ({ text: district, value: district }))
    },
  },
  
  async mounted() {
    await this.fetchAgencies()
  },
  
  methods: {
    // Data Loading
    async fetchAgencies() {
      this.loading = true
      try {
        const params = {
          page: 1,
          limit: 1000,
          isActive: true,
        }
        
        const { data } = await this.$axios.get('/api/agency', { params })
        
        if (data && data.success) {
          this.agencies = data.data.agencies || []
          await this.fetchStats()
        } else {
          this.agencies = []
        }
        
        this.applyFilters()
      } catch (error) {
        console.error('Error fetching agencies:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
        this.agencies = []
      } finally {
        this.loading = false
      }
    },
    
    async fetchStats() {
      try {
        const { data } = await this.$axios.get('/api/agency/dashboard-stats')
        if (data && data.success) {
          this.summaryStats = {
            total: data.data.totalAgencies || 0,
            active: data.data.activeAgencies || 0,
            expiringSoon: data.data.agenciesExpiringSoon || 0,
            withLicense: data.data.agenciesWithLicense || 0,
          }
        }
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    },
    
    // Dialog Management
    openCreateDialog() {
      this.selectedAgency = null
      this.showDialog = true
    },
    
    editAgency(agency) {
      this.selectedAgency = agency
      this.showDialog = true
    },
    
    viewAgency(agency) {
      this.selectedAgency = agency
      this.showViewDialog = true
    },
    
    closeDialog() {
      this.showDialog = false
      this.selectedAgency = null
    },
    
    closeViewDialog() {
      this.showViewDialog = false
      this.selectedAgency = null
    },
    
    // Save Handler
    async onAgencySave(agencyData) {
      try {
        this.loading = true
        
        let response
        if (this.selectedAgency && this.selectedAgency.id) {
          response = await this.$axios.put(`/api/agency/${this.selectedAgency.id}`, agencyData)
        } else {
          response = await this.$axios.post('/api/agency', agencyData)
        }
        
        if (response.data && response.data.success) {
          this.$toast.success('ການບັນທຶກສຳເລັດແລ້ວ')
          this.closeDialog()
          await this.fetchAgencies()
        } else {
          throw new Error(response.data?.message || 'Save failed')
        }
      } catch (error) {
        console.error('Error saving agency:', error)
        const errorMessage = error.response?.data?.message || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ'
        this.$toast.error(errorMessage)
      } finally {
        this.loading = false
      }
    },
    
    // Status Management
    toggleStatus(agency) {
      const newStatus = agency.status === 'active' ? 'inactive' : 'active'
      const statusText = newStatus === 'active' ? 'ເປີດການດຳເນີນງານ' : 'ຢຸດການດຳເນີນງານ'
      
      this.confirmDialog = {
        show: true,
        title: 'ຢືນຢັນການເປີດ/ປິດ',
        message: `ທ່ານຕ້ອງການ${statusText}ບໍລິສັດ "${agency.agencyName}" ແມ່ນບໍ?`,
        color: newStatus === 'active' ? 'success' : 'warning',
        confirmText: 'ຢືນຢັນ',
        action: () => this.updateStatus(agency, newStatus),
      }
    },
    
    async updateStatus(agency, newStatus) {
      try {
        this.loading = true
        const response = await this.$axios.patch(`/api/agency/${agency.id}/status`, {
          status: newStatus
        })
        
        if (response.data && response.data.success) {
          this.$toast.success('ອັບເດດສະຖານະສຳເລັດແລ້ວ')
          await this.fetchAgencies()
        }
      } catch (error) {
        console.error('Error updating status:', error)
        this.$toast.error('ອັບເດດສະຖານະບໍ່ສຳເລັດ')
      } finally {
        this.loading = false
        this.confirmDialog.show = false
      }
    },
    
    // Delete
    deleteAgency(agency) {
      this.confirmDialog = {
        show: true,
        title: 'ຢືນຢັນການລົບ',
        message: `ທ່ານຕ້ອງການລົບບໍລິສັດ "${agency.agencyName}" ແມ່ນບໍ? ການກະທຳນີ້ບໍ່ສາມາດຍົກເລີກໄດ້.`,
        color: 'error',
        confirmText: 'ລົບ',
        action: () => this.performDelete(agency),
      }
    },
    
    async performDelete(agency) {
      try {
        this.loading = true
        const response = await this.$axios.delete(`/api/agency/${agency.id}`)
        
        if (response.data && response.data.success) {
          this.$toast.success('ລົບສຳເລັດແລ້ວ')
          await this.fetchAgencies()
        }
      } catch (error) {
        console.error('Error deleting agency:', error)
        this.$toast.error('ການລົບບໍ່ສຳເລັດ')
      } finally {
        this.loading = false
        this.confirmDialog.show = false
      }
    },
    
    // Filtering and Search
    applyFilters() {
      let filtered = [...this.agencies]
      
      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        filtered = filtered.filter(agency =>
          agency.agencyName.toLowerCase().includes(search) ||
          agency.agencyCode?.toLowerCase().includes(search) ||
          agency.phone.includes(search) ||
          agency.email?.toLowerCase().includes(search) ||
          agency.contactPersonName?.toLowerCase().includes(search)
        )
      }
      
      // Status filter
      if (this.filters.status) {
        filtered = filtered.filter(agency => agency.status === this.filters.status)
      }
      
      // City filter
      if (this.filters.city) {
        filtered = filtered.filter(agency => agency.city === this.filters.city)
      }
      
      // District filter
      if (this.filters.district) {
        filtered = filtered.filter(agency => agency.district === this.filters.district)
      }
      
      this.filteredAgencies = filtered
    },
    
    resetFilters() {
      this.filters = {
        search: '',
        status: '',
        city: '',
        district: '',
      }
      this.applyFilters()
    },
    
    // Export
    exportData() {
      const csvData = this.convertToCSV(this.filteredAgencies)
      this.downloadCSV(csvData, 'agencies-export.csv')
    },
    
    convertToCSV(data) {
      const headers = [
        'ຊື່ບໍລິສັດ',
        'ລະຫັດບໍລິສັດ', 
        'ເລກທະບຽນ',
        'ເບີໂທ',
        'ອີເມວ',
        'ທີ່ຢູ່',
        'ເມືອງ',
        'ແຂວງ',
        'ເລກໃບອະນຸຍາດ',
        'ວັນທີລົງທະບຽນ',
        'ວັນໝົດອາຍຸໃບອະນຸຍາດ',
        'ຊື່ຜູ້ຕິດຕໍ່',
        'ຕຳແໜ່ງຜູ້ຕິດຕໍ່',
        'ເບີໂທຜູ້ຕິດຕໍ່',
        'ສະຖານະ',
        'ຫມາຍເຫດ'
      ]
      
      const csvContent = [
        headers.join(','),
        ...data.map(row => [
          row.agencyName,
          row.agencyCode || '',
          row.registrationNumber || '',
          row.phone,
          row.email || '',
          row.address || '',
          row.city || '',
          row.district || '',
          row.licenseNumber || '',
          row.registrationDate || '',
          row.licenseExpiryDate || '',
          row.contactPersonName || '',
          row.contactPersonPosition || '',
          row.contactPersonPhone || '',
          this.formatStatus(row.status),
          row.notes || ''
        ].join(','))
      ].join('\n')
      
      return csvContent
    },
    
    downloadCSV(csvContent, filename) {
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', filename)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    
    // Utility Methods
    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },
    
    formatStatus(status) {
      const statusMap = {
        active: 'ກຳລັງດຳເນີນງານ',
        inactive: 'ບໍ່ດຳເນີນງານ',
        suspended: 'ຖືກຢຸດ',
      }
      return statusMap[status] || status
    },
    
    getStatusColor(status) {
      const colorMap = {
        active: 'success',
        inactive: 'grey',
        suspended: 'error',
      }
      return colorMap[status] || 'grey'
    },
    
    getStatusIcon(status) {
      const iconMap = {
        active: 'mdi-check-circle',
        inactive: 'mdi-pause-circle',
        suspended: 'mdi-alert-circle',
      }
      return iconMap[status] || 'mdi-help-circle'
    },
    
    isLicenseExpired(date) {
      if (!date) return false
      return new Date(date) <= new Date()
    },
    
    truncateText(text, length) {
      if (!text) return ''
      return text.length > length ? text.substring(0, length) + '...' : text
    },
  },
}
</script>

<style scoped>
.v-card-title {
  background: linear-gradient(45deg, #1976d2, #1565c0);
  color: white;
}

.caption {
  font-size: 12px !important;
}

.text-h3 {
  font-size: 2rem !important;
}

.v-chip {
  margin: 1px;
}

.text--secondary {
  color: rgba(0, 0, 0, 0.6) !important;
}

.text--disabled {
  color: rgba(0, 0, 0, 0.38) !important;
}
</style>