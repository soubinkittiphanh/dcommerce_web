<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <!-- Page Header -->
        <v-card class="mb-4">
          <v-card-title class="d-flex justify-space-between align-center">
            <div>
              <v-icon large color="primary" class="mr-2"
                >mdi-office-building</v-icon
              >
              <span class="text-h4">ລະບົບຈັດການບໍລິສັດແນະນຳແຮງງານ</span>
            </div>
            <div>
              <v-btn color="primary" @click="openCreateDialog" class="mr-2">
                <v-icon left>mdi-plus</v-icon>
                ເພີ່ມບໍລິສັດໃໝ່
              </v-btn>
              <v-btn color="white" @click="exportData">
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
                  outlined
                  dense
                  hide-details
                  @input="applyFilters"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.status"
                  :items="statusOptions"
                  label="ສະຖານະ"
                  prepend-icon="mdi-check-circle"
                  clearable
                  outlined
                  dense
                  hide-details
                  @change="applyFilters"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.city"
                  :items="availableCities"
                  label="ແຂວງ"
                  prepend-icon="mdi-city"
                  clearable
                  outlined
                  dense
                  hide-details
                  @change="applyFilters"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.district"
                  :items="availableDistricts"
                  label="ເມືອງ"
                  prepend-icon="mdi-map-marker"
                  clearable
                  outlined
                  dense
                  hide-details
                  @change="applyFilters"
                />
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

        <!-- Data Table -->
        <v-card>
          <v-card-title>
            <v-icon class="mr-2">mdi-table</v-icon>
            ລາຍຊື່ບໍລິສັດ
            <v-spacer />
            <v-chip color="primary" outlined>
              {{ filteredAgencies.length }} ລາຍການ
            </v-chip>
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="filteredAgencies"
            :items-per-page="25"
            :loading="loading"
            :footer-props="{
              'items-per-page-options': [10, 25, 50, 100],
            }"
            class="elevation-1"
            loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
            no-data-text="ບໍ່ມີຂໍ້ມູນ"
          >
            <!-- Agency Name -->
            <template v-slot:item.agencyName="{ item }">
              <div>
                <div class="font-weight-bold d-flex align-center">
                  <v-icon small class="mr-2" color="primary"
                    >mdi-office-building</v-icon
                  >
                  {{ item.agencyName }}
                </div>
                <div class="caption text--secondary">
                  <v-icon x-small class="mr-1">mdi-barcode</v-icon>
                  {{ item.agencyCode }}
                </div>
              </div>
            </template>

            <!-- Contact -->
            <template v-slot:item.contact="{ item }">
              <div>
                <div class="d-flex align-center mb-1">
                  <v-icon small class="mr-1" color="success">mdi-phone</v-icon>
                  <span>{{ item.phone }}</span>
                </div>
                <div class="d-flex align-center" v-if="item.email">
                  <v-icon small class="mr-1" color="info">mdi-email</v-icon>
                  <span class="caption">{{ item.email }}</span>
                </div>
              </div>
            </template>

            <!-- Village -->
            <template v-slot:item.village="{ item }">
              <div class="d-flex align-center">
                <v-icon small class="mr-1" color="orange"
                  >mdi-home-group</v-icon
                >
                {{ item.village || '-' }}
              </div>
            </template>

            <!-- District -->
            <template v-slot:item.district="{ item }">
              <div class="d-flex align-center">
                <v-icon small class="mr-1" color="purple"
                  >mdi-map-marker</v-icon
                >
                {{ item.district || '-' }}
              </div>
            </template>

            <!-- City -->
            <template v-slot:item.city="{ item }">
              <div class="d-flex align-center">
                <v-icon small class="mr-1" color="blue">mdi-city</v-icon>
                {{ item.city || '-' }}
              </div>
            </template>

            <!-- Registration Date -->
            <template v-slot:item.registrationDate="{ item }">
              <div class="d-flex align-center">
                <v-icon small class="mr-1" color="green"
                  >mdi-calendar-start</v-icon
                >
                {{ formatDate(item.registrationDate) }}
              </div>
            </template>

            <!-- License Expiry Date -->
            <template v-slot:item.licenseExpiryDate="{ item }">
              <div class="d-flex align-center">
                <v-icon
                  small
                  class="mr-1"
                  :color="
                    isLicenseExpired(item.licenseExpiryDate)
                      ? 'error'
                      : 'warning'
                  "
                >
                  mdi-calendar-end
                </v-icon>
                <span
                  :class="
                    isLicenseExpired(item.licenseExpiryDate)
                      ? 'error--text'
                      : ''
                  "
                >
                  {{ formatDate(item.licenseExpiryDate) }}
                </span>
              </div>
            </template>

            <!-- Actions -->
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
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Agency Dialog -->
    <v-dialog v-model="showDialog" max-width="900px" persistent>
      <AgencyDialog
        :visible="showDialog"
        :agency="selectedAgency"
        @close="closeDialog"
        @save="onAgencySave"
      />
    </v-dialog>

    <!-- View Dialog -->
    <v-dialog v-model="showViewDialog" max-width="900px">
      <AgencyViewDialog
        :visible="showViewDialog"
        :agency="selectedAgency"
        @close="closeViewDialog"
      />
    </v-dialog>

    <!-- Confirm Dialog -->
    <v-dialog v-model="confirmDialog.show" max-width="400">
      <v-card>
        <v-card-title class="headline">{{ confirmDialog.title }}</v-card-title>
        <v-card-text>{{ confirmDialog.message }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="confirmDialog.show = false">ຍົກເລີກ</v-btn>
          <v-btn
            :color="confirmDialog.color"
            text
            @click="confirmDialog.action"
          >
            {{ confirmDialog.confirmText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Loading Overlay -->
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64" />
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

      filters: {
        search: '',
        status: '',
        city: '',
        district: '',
      },

      confirmDialog: {
        show: false,
        title: '',
        message: '',
        color: 'primary',
        confirmText: 'ຢືນຢັນ',
        action: null,
      },

      headers: [
        { text: 'ຊື່ບໍລິສັດ', value: 'agencyName', sortable: true },
        { text: 'ຕິດຕໍ່', value: 'contact', sortable: false },
        { text: 'ບ້ານ', value: 'village', sortable: false },
        { text: 'ເມືອງ', value: 'district', sortable: false },
        { text: 'ແຂວງ', value: 'city', sortable: false },
        {
          text: 'ວັນທີ່ເລີມຕົ້ນສັນຍາ',
          value: 'registrationDate',
          sortable: true,
        },
        {
          text: 'ວັນທີ່ສິນສຸດສັນຍາ',
          value: 'licenseExpiryDate',
          sortable: true,
        },
        { text: 'ຟັງຊັ່ນ', value: 'actions', sortable: false, align: 'center' },
      ],

      statusOptions: [
        { text: 'ກຳລັງດຳເນີນງານ', value: 'active' },
        { text: 'ບໍ່ດຳເນີນງານ', value: 'inactive' },
        { text: 'ຖືກຢຸດ', value: 'suspended' },
      ],
    }
  },

  computed: {
    availableCities() {
      const cities = [
        ...new Set(this.agencies.map((a) => a.city).filter(Boolean)),
      ]
      return cities.sort().map((city) => ({ text: city, value: city }))
    },

    availableDistricts() {
      const districts = [
        ...new Set(this.agencies.map((a) => a.district).filter(Boolean)),
      ]
      return districts
        .sort()
        .map((district) => ({ text: district, value: district }))
    },
  },

  mounted() {
    this.fetchAgencies()
  },

  methods: {
    async fetchAgencies() {
      this.loading = true
      try {
        const { data } = await this.$axios.get('/api/agency', {
          params: { page: 1, limit: 1000, isActive: true },
        })

        this.agencies = data?.success ? data.data.agencies || [] : []
        this.applyFilters()
      } catch (error) {
        console.error('Error fetching agencies:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
      } finally {
        this.loading = false
      }
    },

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

    async onAgencySave(agencyData) {
      try {
        this.loading = true
        const url = this.selectedAgency?.id
          ? `/api/agency/${this.selectedAgency.id}`
          : '/api/agency'
        const method = this.selectedAgency?.id ? 'put' : 'post'

        const { data } = await this.$axios[method](url, agencyData)

        if (data?.success) {
          this.$toast.success('ການບັນທຶກສຳເລັດແລ້ວ')
          this.closeDialog()
          await this.fetchAgencies()
        }
      } catch (error) {
        console.error('Error saving agency:', error)
        this.$toast.error(error.response?.data?.message || 'ການບັນທຶກບໍ່ສຳເລັດ')
      } finally {
        this.loading = false
      }
    },

    applyFilters() {
      let filtered = [...this.agencies]

      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        filtered = filtered.filter(
          (a) =>
            a.agencyName.toLowerCase().includes(search) ||
            a.agencyCode?.toLowerCase().includes(search) ||
            a.phone.includes(search) ||
            a.email?.toLowerCase().includes(search) ||
            a.contactPersonName?.toLowerCase().includes(search)
        )
      }

      if (this.filters.status) {
        filtered = filtered.filter((a) => a.status === this.filters.status)
      }

      if (this.filters.city) {
        filtered = filtered.filter((a) => a.city === this.filters.city)
      }

      if (this.filters.district) {
        filtered = filtered.filter((a) => a.district === this.filters.district)
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

    exportData() {
      const headers = [
        'ຊື່ບໍລິສັດ',
        'ລະຫັດ',
        'ເບີໂທ',
        'ອີເມວ',
        'ບ້ານ',
        'ເມືອງ',
        'ແຂວງ',
        'ວັນທີລົງທະບຽນ',
        'ວັນໝົດອາຍຸ',
      ]

      const rows = this.filteredAgencies.map((r) =>
        [
          r.agencyName,
          r.agencyCode || '',
          r.phone,
          r.email || '',
          r.village || '',
          r.district || '',
          r.city || '',
          this.formatDate(r.registrationDate),
          this.formatDate(r.licenseExpiryDate),
        ].join(',')
      )

      const csv = [headers.join(','), ...rows].join('\n')
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'agencies-export.csv'
      link.click()
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    isLicenseExpired(date) {
      if (!date) return false
      return new Date(date) <= new Date()
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
.text-h4 {
  font-family: NotoSansLaoUI-Regular, Roboto-Regular !important;
}
</style>