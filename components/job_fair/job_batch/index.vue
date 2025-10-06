<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    fullscreen
    persistent
    scrollable
  >
    <v-card class="maintenance-dialog">
      <v-toolbar color="primary" dark flat dense>
        <v-icon left small>{{ isEdit ? 'mdi-pencil' : 'mdi-plus' }}</v-icon>
        <v-toolbar-title class="text-subtitle-1">
          {{ isEdit ? 'ແກ້ໄຂ Job Batch' : 'ເພີ່ມ Job Batch' }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small @click="handleCancel" :disabled="saving">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="dialog-content pa-0">
        <v-container fluid class="form-container">
          <v-form ref="form" v-model="formValid" lazy-validation>
            <!-- Basic Information Section -->
            <v-row dense>
              <v-col cols="12" class="pb-2">
                <div class="section-header">
                  <v-icon small color="primary" class="mr-2"
                    >mdi-information</v-icon
                  >
                  <span class="section-title"
                    >ຂໍ້ມູນພື້ນຖານ (Basic Information)</span
                  >
                </div>
              </v-col>

              <!-- MOU Selection -->
              <v-col cols="12" md="4">
                <v-select
                  v-model="formData.mouId"
                  :items="mouOptions"
                  :loading="loadingMous"
                  label="ເລືອກລະຫັດ Job / MOU*"
                  :rules="rules.mouId"
                  outlined
                  dense
                  hide-details="auto"
                  item-text="jobCode"
                  item-value="id"
                  clearable
                  @change="onMouChange"
                >
                  <template v-slot:selection="{ item }">
                    <div class="d-flex align-center">
                      <v-icon small class="mr-2" color="primary"
                        >mdi-file-document-outline</v-icon
                      >
                      <div>
                        <span class="text-body-2">{{ item.jobCode }}</span>
                        <span class="text-caption grey--text ml-2">{{
                          item.mouNumber
                        }}</span>
                      </div>
                    </div>
                  </template>
                  <template v-slot:item="{ item }">
                    <div class="d-flex align-center py-1 flex-grow-1">
                      <v-icon small class="mr-2" color="primary"
                        >mdi-file-document-outline</v-icon
                      >
                      <div class="flex-grow-1">
                        <div class="text-body-2">{{ item.jobCode }}</div>
                        <div class="text-caption grey--text">
                          {{ item.jobTitle }} • {{ item.employerCompany }}
                        </div>
                      </div>
                      <v-chip x-small :color="getMouStatusColor(item.status)">{{
                        item.status
                      }}</v-chip>
                    </div>
                  </template>
                  <template v-slot:no-data>
                    <div class="pa-2 text-center">
                      <div class="text-caption grey--text">No MOUs found</div>
                      <v-btn x-small text color="primary" @click="fetchMous">
                        <v-icon x-small left>mdi-refresh</v-icon>Refresh
                      </v-btn>
                    </div>
                  </template>
                </v-select>
              </v-col>

              <!-- Running Number -->
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="formData.runningNo"
                  label="ຮອບການຈັດສົ່ງ"
                  outlined
                  dense
                  hide-details="auto"
                  disabled
                  :placeholder="
                    isEdit
                      ? formData.runningNo
                      : nextRunningNo || 'ເລືອກ MOU ກ່ອນ'
                  "
                  :loading="loadingRunningNo"
                >
                  <template v-slot:append>
                    <v-icon
                      v-if="nextRunningNo && !isEdit"
                      small
                      color="success"
                    >
                      mdi-check-circle
                    </v-icon>
                  </template>
                </v-text-field>
              </v-col>

              <!-- Total Positions -->
              <v-col cols="12" md="4">
                <v-text-field
                  v-model.number="formData.totalPositions"
                  label="ຈຳນວນເປີດຮັບສະໝັກ"
                  type="number"
                  :rules="rules.totalPositions"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-account-multiple"
                />
              </v-col>

              <!-- Selected MOU Info Card -->
              <v-col cols="12" v-if="selectedMou">
                <div class="mou-summary-card">
                  <div class="summary-header">
                    <v-icon small color="white" class="mr-2"
                      >mdi-file-document-outline</v-icon
                    >
                    <span>ຂໍ້ມູນ MOU ທີ່ເລືອກ</span>
                    <v-spacer></v-spacer>
                    <v-chip
                      x-small
                      :color="getMouStatusColor(selectedMou.status)"
                      dark
                    >
                      {{ selectedMou.status }}
                    </v-chip>
                  </div>
                  <div class="summary-content">
                    <div class="summary-row">
                      <strong>Job Code:</strong>
                      <span>{{ selectedMou.jobCode }}</span>
                    </div>
                    <div class="summary-row">
                      <strong>MOU Number:</strong>
                      <span>{{ selectedMou.mouNumber || '-' }}</span>
                    </div>
                    <div class="summary-row" v-if="selectedMou.agency">
                      <strong>Agency:</strong>
                      <span>{{ selectedMou.agency.agencyName }}</span>
                    </div>
                    <div class="summary-row">
                      <strong>ບໍລິສັດນາຍຈ່າງ:</strong>
                      <span>{{ selectedMou.employerCompany || '-' }}</span>
                    </div>
                    <div class="summary-row">
                      <strong>ສະຖານທີ່ເຮັດວຽກ:</strong>
                      <span>{{ selectedMou.workLocation || '-' }}</span>
                    </div>
                    <div class="summary-row">
                      <strong>ໜ້າວຽກ:</strong>
                      <span>{{ selectedMou.jobTitle || '-' }}</span>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-divider class="my-4"></v-divider>

            <!-- Configuration & Status Section -->
             <v-row dense>
              <!-- Status -->
              <v-col cols="3" md="3">
                <v-select
                  v-model="formData.status"
                  :items="statusOptions"
                  label="ສະຖານະງານ *"
                  :rules="rules.status"
                  outlined
                  dense
                  hide-details="auto"
                >
                  <template v-slot:selection="{ item }">
                    <v-chip x-small :color="getStatusColor(item.value)">{{
                      item.text
                    }}</v-chip>
                  </template>
                </v-select>
              </v-col>
            </v-row>
            <v-row dense>
              <!-- Start Date -->
              <v-col cols="12" md="3">
                <div class="date-field-wrapper">
                  <label class="date-label">
                    <v-icon small class="mr-1">mdi-calendar</v-icon>
                    ກຳນົດເວລາສັນຫາ
                  </label>
                  <input
                    v-model="formData.batchStartDate"
                    type="date"
                    class="date-input"
                  />
                </div>
              </v-col>

              <!-- End Date -->
              <v-col cols="12" md="3">
                <div class="date-field-wrapper">
                  <label class="date-label">
                    <v-icon small class="mr-1">mdi-calendar</v-icon>
                    ກຳນົດເວລາຈັດສົ່ງແຮງງານ
                  </label>
                  <input
                    v-model="formData.batchEndDate"
                    type="date"
                    class="date-input"
                    :min="formData.batchStartDate"
                  />
                </div>
              </v-col>

              <!-- Delivery Date -->
              <v-col cols="12" md="3">
                <div class="date-field-wrapper">
                  <label class="date-label">
                    <v-icon small class="mr-1">mdi-calendar-export</v-icon>
                    ວັນທີ່ສົ່ງແຮງງານ
                  </label>
                  <input
                    v-model="formData.batchDeliveryDate"
                    type="date"
                    class="date-input"
                    :min="formData.batchEndDate || formData.batchStartDate"
                  />
                </div>
              </v-col>

              <!-- Notes -->
              <v-col cols="12" md="9">
                <v-textarea
                  v-model="formData.notes"
                  label="ຂໍ້ມູນເພີ່ມເຕີມ"
                  outlined
                  dense
                  rows="2"
                  hide-details="auto"
                  no-resize
                />
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pa-3">
        <v-spacer></v-spacer>
        <v-btn text @click="handleCancel" :disabled="saving">Cancel</v-btn>
        <v-btn
          color="primary"
          @click="handleSave"
          :disabled="!formValid"
          :loading="saving"
        >
          <v-icon left small>mdi-content-save</v-icon>
          {{ isEdit ? 'Update' : 'Create' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'JobBatchDialog',
  props: {
    value: { type: Boolean, default: false },
    batch: { type: Object, default: null },
    isEdit: { type: Boolean, default: false },
  },
  data() {
    return {
      nextRunningNo: null,
      loadingRunningNo: false,
      formValid: false,
      saving: false,
      loadingMous: false,
      startDateMenu: false,
      endDateMenu: false,
      mouOptions: [],
      selectedMou: null,
      deliveryDateMenu: false, // Add this with other menu flags
      formData: {
        mouId: null,
        runningNo: '',
        batchName: '_',
        totalPositions: 0,
        batchStartDate: null,
        batchEndDate: null,
        batchDeliveryDate: null, // Add this
        status: 'draft',
        notes: '',
      },
      rules: {
        mouId: [(v) => !!v || 'MOU selection is required'],
        status: [(v) => !!v || 'Status is required'],
        totalPositions: [(v) => v >= 0 || 'Must be 0 or greater'],
      },
      statusOptions: [
        { text: 'ລໍຖ້າ', value: 'draft' },
        { text: 'ດຳເນີນງານ', value: 'active' },
        { text: 'ສຳເລັດ', value: 'complted' },
        { text: 'ຊຳລະແລ້ວ', value: 'settled' },
      ],
    }
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.fetchMous()
        this.initializeForm()
      } else {
        this.resetForm()
      }
    },
    batch: {
      handler() {
        if (this.value) this.initializeForm()
      },
      deep: true,
    },
  },
  methods: {
    async fetchMous() {
      this.loadingMous = true
      try {
        const response = await this.$axios.get('/api/mous', {
          params: { status: 'open', limit: 100 },
        })
        this.mouOptions = response.data.data.mous || response.data.data || []
      } catch (error) {
        console.error('Error fetching MOUs:', error)
        this.$toast.error('Failed to fetch MOUs')
        this.mouOptions = []
      } finally {
        this.loadingMous = false
      }
    },
    async fetchNextRunningNo(mouId) {
      if (!mouId || this.isEdit) return

      this.loadingRunningNo = true
      try {
        const response = await this.$axios.get(
          `/api/batch-job/next-running-no/${mouId}`
        )
        if (response.data.success) {
          this.nextRunningNo = response.data.data.nextRunningNo
          // Optionally update formData to show in the field
          this.formData.runningNo = this.nextRunningNo
        }
      } catch (error) {
        console.error('Error fetching next running number:', error)
        this.nextRunningNo = null
        this.formData.runningNo = ''
      } finally {
        this.loadingRunningNo = false
      }
    },
    onMouChange(mouId) {
      this.selectedMou = this.mouOptions.find((mou) => mou.id === mouId) || null

      // Fetch next running number when MOU changes (only for new batches)
      if (mouId && !this.isEdit) {
        this.fetchNextRunningNo(mouId)
      }
    },

    initializeForm() {
      if (this.isEdit && this.batch) {
        this.formData = {
          mouId: this.batch.mouId || null,
          batchName: this.batch.batchName || '',
          runningNo: this.batch.runningNo || '',
          totalPositions: this.batch.totalPositions || 0,
          // Extract date only (YYYY-MM-DD)
          batchStartDate: this.batch.batchStartDate?.split('T')[0] || null,
          batchEndDate: this.batch.batchEndDate?.split('T')[0] || null,
          batchDeliveryDate:
            this.batch.batchDeliveryDate?.split('T')[0] || null,
          status: this.batch.status || 'draft',
          notes: this.batch.notes || '',
        }
        if (this.batch.mou) {
          this.selectedMou = this.batch.mou
        } else if (this.formData.mouId) {
          this.$nextTick(() => {
            this.selectedMou =
              this.mouOptions.find((mou) => mou.id === this.formData.mouId) ||
              null
          })
        }
      } else {
        this.resetForm()
      }
      this.$nextTick(() => {
        if (this.$refs.form) this.$refs.form.resetValidation()
      })
    },
    resetForm() {
      this.formData = {
        mouId: null,
        batchName: '',
        runningNo: '',
        totalPositions: 0,
        batchStartDate: null,
        batchEndDate: null,
        batchDeliveryDate: null,
        status: 'draft',
        notes: '',
      }
      this.selectedMou = null
      this.nextRunningNo = null
      this.formValid = false
    },

    async handleSave() {
      if (!this.$refs.form.validate()) return

      this.saving = true
      try {
        const endpoint = this.isEdit
          ? `/api/batch-job/${this.batch.id}`
          : '/api/batch-job'
        const method = this.isEdit ? 'put' : 'post'
        const response = await this.$axios[method](endpoint, this.formData)

        this.$toast.success(
          `Job batch ${this.isEdit ? 'updated' : 'created'} successfully`
        )
        this.$emit('saved', response.data.data)
        this.resetForm()
      } catch (error) {
        console.error('Error saving job batch:', error)
        if (error.response?.data?.errors) {
          const errorMessages = error.response.data.errors
            .map((e) => `${e.field}: ${e.message}`)
            .join('\n')
          this.$toast.error(`Validation errors:\n${errorMessages}`)
        } else if (error.response?.data?.message) {
          this.$toast.error(error.response.data.message)
        } else {
          this.$toast.error(
            `Failed to ${this.isEdit ? 'update' : 'create'} job batch`
          )
        }
      } finally {
        this.saving = false
      }
    },
    handleCancel() {
      if (this.saving) return
      this.resetForm()
      this.$emit('cancelled')
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
    getMouStatusColor(status) {
      const colors = {
        draft: 'orange',
        active: 'green',
        expired: 'red',
        cancelled: 'grey',
      }
      return colors[status] || 'grey'
    },
  },
}
</script>

<style scoped>
/* Date Field Styles */
.date-field-wrapper {
  display: flex;
  flex-direction: column;
}

.date-label {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 4px;
}

.date-input {
  padding: 9px 12px;
  border: 1px solid rgba(0, 0, 0, 0.38);
  border-radius: 4px;
  font-size: 14px;
  background: white;
  transition: all 0.2s;
  font-family: inherit;
}

.date-input:hover {
  border-color: rgba(0, 0, 0, 0.87);
}

.date-input:focus {
  outline: none;
  border-color: #1976d2;
  border-width: 2px;
  padding: 8px 11px; /* Adjust padding to maintain size */
}

.date-input:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.6;
}
.maintenance-dialog {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.section-header {
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 2px solid #e3f2fd;
  margin-bottom: 12px;
}

.section-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1976d2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* MOU Summary Card */
.mou-summary-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
}

.mou-summary-card .summary-header {
  background: rgba(255, 255, 255, 0.2);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 15px;
}

.mou-summary-card .summary-content {
  background: white;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.mou-summary-card .summary-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mou-summary-card .summary-row strong {
  font-size: 12px;
  color: #6b7280;
  font-weight: 600;
}

.mou-summary-card .summary-row span {
  font-size: 14px;
  color: #1f2937;
  font-weight: 500;
}

.form-container {
  max-width: 1400px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 16px !important;
}

/* Vuetify overrides */
.v-chip--x-small {
  font-size: 10px !important;
  height: 20px !important;
}

.v-text-field--outlined >>> .v-input__control > .v-input__slot,
.v-select--outlined >>> .v-input__control > .v-input__slot,
.v-textarea >>> .v-input__control > .v-input__slot {
  min-height: 40px !important;
}

.v-toolbar--dense {
  height: 24px !important;
  min-height: 24px !important;
}

.v-toolbar--dense .v-toolbar__content {
  height: 24px !important;
  padding: 4px 16px;
}

.v-input--dense >>> .v-messages {
  min-height: 0 !important;
}

.v-text-field >>> .v-text-field__details {
  margin-bottom: 0 !important;
  padding-top: 2px !important;
}

.v-alert--dense {
  padding: 12px !important;
}
</style>