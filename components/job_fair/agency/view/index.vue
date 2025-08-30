<template>
  <v-dialog v-model="visible" max-width="700px">
    <v-card>
      <!-- Dialog Header -->
      <v-card-title class="primary white--text">
        <v-icon class="mr-2" color="white">mdi-eye</v-icon>
        <span>ລາຍລະອຽດບໍລິສັດ</span>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pt-6" v-if="agency">
        <v-container>
          <!-- Basic Information Section -->
          <v-row>
            <v-col cols="12">
              <div class="section-header">
                <v-icon color="primary" class="mr-2">mdi-information</v-icon>
                <span class="text-h6">ຂໍ້ມູນພື້ນຖານ</span>
              </div>
              <v-divider class="mb-4"></v-divider>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="8">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-office-building</v-icon>
                  ຊື່ບໍລິສັດ
                </div>
                <div class="info-value primary--text font-weight-bold">
                  {{ agency.agencyName }}
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-identifier</v-icon>
                  ລະຫັດບໍລິສັດ
                </div>
                <div class="info-value">
                  <v-chip small color="primary" outlined v-if="agency.agencyCode">
                    {{ agency.agencyCode }}
                  </v-chip>
                  <span v-else class="text--disabled">-</span>
                </div>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-file-document</v-icon>
                  ເລກທະບຽນບໍລິສັດ
                </div>
                <div class="info-value">
                  {{ agency.registrationNumber || '-' }}
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-calendar</v-icon>
                  ວັນທີລົງທະບຽນ
                </div>
                <div class="info-value">
                  {{ agency.registrationDate ? formatDate(agency.registrationDate) : '-' }}
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Contact Information Section -->
          <v-row>
            <v-col cols="12">
              <div class="section-header mt-6">
                <v-icon color="primary" class="mr-2">mdi-phone</v-icon>
                <span class="text-h6">ຂໍ້ມູນຕິດຕໍ່</span>
              </div>
              <v-divider class="mb-4"></v-divider>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-phone</v-icon>
                  ເບີໂທລະສັບ
                </div>
                <div class="info-value">
                  <a :href="`tel:${agency.phone}`" class="text-decoration-none">
                    {{ agency.phone }}
                  </a>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-email</v-icon>
                  ອີເມວ
                </div>
                <div class="info-value">
                  <a v-if="agency.email" :href="`mailto:${agency.email}`" class="text-decoration-none">
                    {{ agency.email }}
                  </a>
                  <span v-else class="text--disabled">-</span>
                </div>
              </div>
            </v-col>
          </v-row>

          <v-row v-if="agency.address">
            <v-col cols="12">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-map-marker</v-icon>
                  ທີ່ຢູ່
                </div>
                <div class="info-value">
                  {{ agency.address }}
                </div>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-city</v-icon>
                  ເມືອງ
                </div>
                <div class="info-value">
                  <v-chip small color="info" outlined v-if="agency.city">
                    {{ agency.city }}
                  </v-chip>
                  <span v-else class="text--disabled">-</span>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-map</v-icon>
                  ແຂວງ
                </div>
                <div class="info-value">
                  <v-chip small color="secondary" outlined v-if="agency.district">
                    {{ agency.district }}
                  </v-chip>
                  <span v-else class="text--disabled">-</span>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Business Information Section -->
          <v-row>
            <v-col cols="12">
              <div class="section-header mt-6">
                <v-icon color="primary" class="mr-2">mdi-certificate</v-icon>
                <span class="text-h6">ຂໍ້ມູນທຸລະກິດ</span>
              </div>
              <v-divider class="mb-4"></v-divider>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-certificate</v-icon>
                  ເລກໃບອະນຸຍາດ
                </div>
                <div class="info-value">
                  <v-chip small color="success" outlined v-if="agency.licenseNumber">
                    {{ agency.licenseNumber }}
                  </v-chip>
                  <span v-else class="text--disabled">ບໍ່ມີ</span>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-calendar-clock</v-icon>
                  ວັນໝົດອາຍຸໃບອະນຸຍາດ
                </div>
                <div class="info-value">
                  <div v-if="agency.licenseExpiryDate">
                    <div class="mb-1">{{ formatDate(agency.licenseExpiryDate) }}</div>
                    <v-chip
                      small
                      :color="isLicenseExpired ? 'error' : 'success'"
                      dark
                    >
                      <v-icon small left>{{ isLicenseExpired ? 'mdi-alert-circle' : 'mdi-check-circle' }}</v-icon>
                      {{ isLicenseExpired ? 'ໝົດອາຍຸແລ້ວ' : 'ຍັງໃຊ້ໄດ້' }}
                    </v-chip>
                  </div>
                  <span v-else class="text--disabled">-</span>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Contact Person Section -->
          <v-row>
            <v-col cols="12">
              <div class="section-header mt-6">
                <v-icon color="primary" class="mr-2">mdi-account-tie</v-icon>
                <span class="text-h6">ຜູ້ຕິດຕໍ່</span>
              </div>
              <v-divider class="mb-4"></v-divider>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-account</v-icon>
                  ຊື່ຜູ້ຕິດຕໍ່
                </div>
                <div class="info-value font-weight-medium">
                  {{ agency.contactPersonName || '-' }}
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-briefcase</v-icon>
                  ຕຳແໜ່ງ
                </div>
                <div class="info-value">
                  {{ agency.contactPersonPosition || '-' }}
                </div>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-phone</v-icon>
                  ເບີໂທຜູ້ຕິດຕໍ່
                </div>
                <div class="info-value">
                  <a v-if="agency.contactPersonPhone" :href="`tel:${agency.contactPersonPhone}`" class="text-decoration-none">
                    {{ agency.contactPersonPhone }}
                  </a>
                  <span v-else class="text--disabled">-</span>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-check-circle</v-icon>
                  ສະຖານະ
                </div>
                <div class="info-value">
                  <v-chip
                    small
                    :color="getStatusColor(agency.status)"
                    dark
                  >
                    <v-icon small left>{{ getStatusIcon(agency.status) }}</v-icon>
                    {{ formatStatus(agency.status) }}
                  </v-chip>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Notes Section -->
          <v-row v-if="agency.notes">
            <v-col cols="12">
              <div class="section-header mt-6">
                <v-icon color="primary" class="mr-2">mdi-note-text</v-icon>
                <span class="text-h6">ໝາຍເຫດ</span>
              </div>
              <v-divider class="mb-4"></v-divider>
            </v-col>
          </v-row>

          <v-row v-if="agency.notes">
            <v-col cols="12">
              <v-card color="grey lighten-5" flat>
                <v-card-text>
                  <div class="info-value">
                    {{ agency.notes }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- System Information -->
          <v-row>
            <v-col cols="12">
              <div class="section-header mt-6">
                <v-icon color="grey" class="mr-2">mdi-information-outline</v-icon>
                <span class="text-h6 grey--text">ຂໍ້ມູນລະບົບ</span>
              </div>
              <v-divider class="mb-4"></v-divider>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-calendar-plus</v-icon>
                  ວັນທີສ້າງ
                </div>
                <div class="info-value caption">
                  {{ formatDateTime(agency.createdAt) }}
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-calendar-edit</v-icon>
                  ວັນທີອັບເດດ
                </div>
                <div class="info-value caption">
                  {{ formatDateTime(agency.updateTimestamp) }}
                </div>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-account-plus</v-icon>
                  ຜູ້ສ້າງ
                </div>
                <div class="info-value caption">
                  {{ agency.maker?.name || '-' }}
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="info-item">
                <div class="info-label">
                  <v-icon small class="mr-2">mdi-account-edit</v-icon>
                  ຜູ້ອັບເດດ
                </div>
                <div class="info-value caption">
                  {{ agency.updateUser?.name || '-' }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <!-- Dialog Actions -->
      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="editAgency"
        >
          <v-icon left>mdi-pencil</v-icon>
          ແກ້ໄຂ
        </v-btn>
        <v-btn
          text
          @click="closeDialog"
        >
          <v-icon left>mdi-close</v-icon>
          ປິດ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AgencyViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    agency: {
      type: Object,
      default: null,
    },
  },
  
  computed: {
    isLicenseExpired() {
      if (!this.agency || !this.agency.licenseExpiryDate) return false
      return new Date(this.agency.licenseExpiryDate) <= new Date()
    },
  },
  
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    
    editAgency() {
      this.$emit('edit', this.agency)
      this.closeDialog()
    },
    
    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
    
    formatDateTime(date) {
      if (!date) return '-'
      return new Date(date).toLocaleString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
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
  },
}
</script>

<style scoped>
.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.section-header .text-h6 {
  font-weight: 600;
  color: #1976d2;
}

.v-card-title.primary {
  background: linear-gradient(45deg, #1976d2, #1565c0);
}

.info-item {
  margin-bottom: 16px;
}

.info-label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 4px;
  font-weight: 500;
}

.info-value {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.4;
}

.info-value.caption {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}

.info-value a {
  color: #1976d2;
}

.info-value a:hover {
  text-decoration: underline !important;
}

.text--disabled {
  color: rgba(0, 0, 0, 0.38) !important;
}

.grey--text {
  color: rgba(0, 0, 0, 0.6) !important;
}

/* Custom chip spacing */
.v-chip {
  margin: 2px;
}

/* Card styling for notes */
.v-card.grey.lighten-5 {
  border-left: 4px solid #1976d2;
}
</style>