<template>
  <v-dialog v-model="visible" max-width="1200px" scrollable>
    <v-card>
      <!-- Dialog Header -->
      <v-card-title class="primary white--text py-3">
        <v-icon class="mr-2" color="white">mdi-eye</v-icon>
        <span>ລາຍລະອຽດບໍລິສັດ</span>
        <v-spacer />
        <v-btn icon dark @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-4" v-if="agency">
        <!-- Basic Information -->
        <v-row dense class="mb-3">
          <v-col cols="12">
            <div class="section-title">
              <v-icon small color="primary" class="mr-1">mdi-information</v-icon>
              <span class="font-weight-bold">ຂໍ້ມູນພື້ນຖານ</span>
            </div>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" md="8">
            <div class="info-row">
              <v-icon x-small class="mr-1" color="primary">mdi-office-building</v-icon>
              <span class="info-label">ຊື່ບໍລິສັດ:</span>
              <span class="info-value primary--text font-weight-bold">{{ agency.agencyName }}</span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="info-row">
              <v-icon x-small class="mr-1">mdi-barcode</v-icon>
              <span class="info-label">ລະຫັດ:</span>
              <v-chip x-small color="primary" outlined v-if="agency.agencyCode">
                {{ agency.agencyCode }}
              </v-chip>
              <span v-else class="text--disabled">-</span>
            </div>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" md="6">
            <div class="info-row">
              <v-icon x-small class="mr-1">mdi-file-document</v-icon>
              <span class="info-label">ເລກທະບຽນ:</span>
              <span class="info-value">{{ agency.registrationNumber || '-' }}</span>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="info-row">
              <v-icon x-small class="mr-1">mdi-calendar-check</v-icon>
              <span class="info-label">ວັນທີລົງທະບຽນ:</span>
              <span class="info-value">{{ formatDate(agency.registrationDate) }}</span>
            </div>
          </v-col>
        </v-row>

        <v-divider class="my-3" />

        <!-- Contact Information -->
        <v-row dense class="mb-2">
          <v-col cols="12">
            <div class="section-title">
              <v-icon small color="primary" class="mr-1">mdi-phone</v-icon>
              <span class="font-weight-bold">ຂໍ້ມູນຕິດຕໍ່</span>
            </div>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" md="6">
            <div class="info-row">
              <v-icon x-small class="mr-1" color="success">mdi-phone</v-icon>
              <span class="info-label">ເບີໂທ:</span>
              <a :href="`tel:${agency.phone}`" class="info-value link">{{ agency.phone }}</a>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="info-row">
              <v-icon x-small class="mr-1" color="info">mdi-email</v-icon>
              <span class="info-label">ອີເມວ:</span>
              <a v-if="agency.email" :href="`mailto:${agency.email}`" class="info-value link">
                {{ agency.email }}
              </a>
              <span v-else class="text--disabled">-</span>
            </div>
          </v-col>
        </v-row>

        <v-row dense v-if="agency.address">
          <v-col cols="12">
            <div class="info-row">
              <v-icon x-small class="mr-1">mdi-map-marker</v-icon>
              <span class="info-label">ທີ່ຢູ່:</span>
              <span class="info-value">{{ agency.address }}</span>
            </div>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" md="4">
            <div class="info-row">
              <v-icon x-small class="mr-1" color="orange">mdi-home-group</v-icon>
              <span class="info-label">ບ້ານ:</span>
              <span class="info-value">{{ agency.village || '-' }}</span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="info-row">
              <v-icon x-small class="mr-1" color="purple">mdi-map-marker</v-icon>
              <span class="info-label">ເມືອງ:</span>
              <span class="info-value">{{ agency.district || '-' }}</span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="info-row">
              <v-icon x-small class="mr-1" color="blue">mdi-city</v-icon>
              <span class="info-label">ແຂວງ:</span>
              <span class="info-value">{{ agency.city || '-' }}</span>
            </div>
          </v-col>
        </v-row>

        <v-divider class="my-3" />

        <!-- Business Information -->
        <v-row dense class="mb-2">
          <v-col cols="12">
            <div class="section-title">
              <v-icon small color="primary" class="mr-1">mdi-certificate</v-icon>
              <span class="font-weight-bold">ຂໍ້ມູນທຸລະກິດ</span>
            </div>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" md="6">
            <div class="info-row">
              <v-icon x-small class="mr-1" color="success">mdi-certificate</v-icon>
              <span class="info-label">ເລກໃບອະນຸຍາດ:</span>
              <v-chip x-small color="success" outlined v-if="agency.licenseNumber">
                {{ agency.licenseNumber }}
              </v-chip>
              <span v-else class="text--disabled">ບໍ່ມີ</span>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="info-row">
              <v-icon x-small class="mr-1" :color="isLicenseExpired ? 'error' : 'success'">
                mdi-calendar-end
              </v-icon>
              <span class="info-label">ວັນໝົດອາຍຸ:</span>
              <span class="info-value">{{ formatDate(agency.licenseExpiryDate) }}</span>
              <v-chip
                x-small
                :color="isLicenseExpired ? 'error' : 'success'"
                class="ml-2"
                v-if="agency.licenseExpiryDate"
              >
                {{ isLicenseExpired ? 'ໝົດອາຍຸ' : 'ໃຊ້ໄດ້' }}
              </v-chip>
            </div>
          </v-col>
        </v-row>

        <v-divider class="my-3" />

        <!-- Contact Person -->
        <v-row dense class="mb-2">
          <v-col cols="12">
            <div class="section-title">
              <v-icon small color="primary" class="mr-1">mdi-account-tie</v-icon>
              <span class="font-weight-bold">ຜູ້ຕິດຕໍ່</span>
            </div>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" md="6">
            <div class="info-row">
              <v-icon x-small class="mr-1">mdi-account</v-icon>
              <span class="info-label">ຊື່:</span>
              <span class="info-value font-weight-medium">{{ agency.contactPersonName || '-' }}</span>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="info-row">
              <v-icon x-small class="mr-1">mdi-briefcase</v-icon>
              <span class="info-label">ຕຳແໜ່ງ:</span>
              <span class="info-value">{{ agency.contactPersonPosition || '-' }}</span>
            </div>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" md="6">
            <div class="info-row">
              <v-icon x-small class="mr-1" color="success">mdi-phone</v-icon>
              <span class="info-label">ເບີໂທ:</span>
              <a v-if="agency.contactPersonPhone" :href="`tel:${agency.contactPersonPhone}`" class="info-value link">
                {{ agency.contactPersonPhone }}
              </a>
              <span v-else class="text--disabled">-</span>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="info-row">
              <v-icon x-small class="mr-1">mdi-check-circle</v-icon>
              <span class="info-label">ສະຖານະ:</span>
              <v-chip
                x-small
                :color="getStatusColor(agency.status)"
                dark
              >
                {{ formatStatus(agency.status) }}
              </v-chip>
            </div>
          </v-col>
        </v-row>

        <!-- Notes -->
        <template v-if="agency.notes">
          <v-divider class="my-3" />
          <v-row dense class="mb-2">
            <v-col cols="12">
              <div class="section-title">
                <v-icon small color="primary" class="mr-1">mdi-note-text</v-icon>
                <span class="font-weight-bold">ໝາຍເຫດ</span>
              </div>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12">
              <div class="notes-box">{{ agency.notes }}</div>
            </v-col>
          </v-row>
        </template>

        <!-- System Information -->
        <v-divider class="my-3" />
        <v-row dense class="mb-2">
          <v-col cols="12">
            <div class="section-title">
              <v-icon small color="grey" class="mr-1">mdi-cog</v-icon>
              <span class="font-weight-bold grey--text text--darken-1">ຂໍ້ມູນລະບົບ</span>
            </div>
          </v-col>
        </v-row>

        <v-row dense class="caption grey--text text--darken-1">
          <v-col cols="12" md="6">
            <div class="info-row-small">
              <v-icon x-small class="mr-1">mdi-calendar-plus</v-icon>
              <span>ສ້າງ: {{ formatDateTime(agency.createdAt) }} ({{ agency.maker?.name || '-' }})</span>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="info-row-small">
              <v-icon x-small class="mr-1">mdi-calendar-edit</v-icon>
              <span>ອັບເດດ: {{ formatDateTime(agency.updateTimestamp) }} ({{ agency.updateUser?.name || '-' }})</span>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- Dialog Actions -->
      <v-divider />
      <v-card-actions class="pa-3">
        <v-spacer />
        <v-btn text small @click="closeDialog">
          <v-icon left small>mdi-close</v-icon>
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
      if (!this.agency?.licenseExpiryDate) return false
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
        month: 'short',
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
  },
}
</script>

<style scoped>
.v-card-title.primary {
  background: linear-gradient(45deg, #1976d2, #1565c0);
}

.section-title {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #1976d2;
  margin-bottom: 8px;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 13px;
}

.info-row-small {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
}

.info-label {
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  min-width: 80px;
}

.info-value {
  color: rgba(0, 0, 0, 0.87);
}

.link {
  color: #1976d2;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.notes-box {
  background: #f5f5f5;
  border-left: 3px solid #1976d2;
  padding: 8px 12px;
  font-size: 13px;
  border-radius: 4px;
}

.v-chip.x-small {
  height: 20px !important;
  font-size: 11px !important;
}

/* Override Vuetify dense row */
.row.dense {
  margin-top: 0;
  margin-bottom: 0;
}

.row.dense > .col {
  padding-top: 4px;
  padding-bottom: 4px;
}
</style>