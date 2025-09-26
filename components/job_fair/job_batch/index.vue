<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    fullscreen
    persistent
    scrollable
  >
    <v-card>
      <v-toolbar color="primary" dark flat dense>
        <v-icon left small>{{ isEdit ? 'mdi-pencil' : 'mdi-plus' }}</v-icon>
        <v-toolbar-title class="text-subtitle-1">
          {{ isEdit ? 'Edit Job Batch' : 'Create New Job Batch' }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small @click="handleCancel" :disabled="saving">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-4">
        <v-form ref="form" v-model="formValid" lazy-validation>
          <!-- Basic Information Section -->
          <v-row dense>
            <v-col cols="12" class="pb-2">
              <div class="section-header">
                <v-icon small color="primary" class="mr-2"
                  >mdi-information</v-icon
                >
                <span class="section-title"
                  >ຂໍ້ມູນ ພື້ນຖານ (Basic Information)</span
                >
              </div>
            </v-col>

            <!-- MOU Selection -->
            <v-col cols="12" md="6">
              <v-select
                v-model="formData.mouId"
                :items="mouOptions"
                :loading="loadingMous"
                label="ເລືອກ ລະຫັດ Job / MOU*"
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
                        {{ item.mouNumber }} • {{ item.employerCompany }}
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

            <!-- Batch Name -->
            <v-col cols="12" md="6" v-if="1==0">
              <v-text-field
                v-model="formData.batchName"
                label="Batch Name *"
                :rules="rules.batchName"
                outlined
                dense
                hide-details="auto"
                counter="100"
              />
            </v-col>

            <!-- Running Number -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model="formData.runningNo"
                label="ຮອບຈັດສົ່ງ."
                outlined
                dense
                hide-details="auto"
                :disabled="!isEdit"
                :placeholder="isEdit ? 'Edit' : 'Auto-generated'"
                prepend-inner-icon="mdi-numeric"
              />
            </v-col>

            <!-- Total Positions -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="formData.totalPositions"
                label="ຈຳນວນເປີດຮັບສະຫມັກ"
                type="number"
                :rules="rules.totalPositions"
                outlined
                dense
                hide-details="auto"
                prepend-inner-icon="mdi-account-multiple"
              />
            </v-col>
            <!-- Total Applied -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="formData.totalApplied"
                label="ຈຳນວນສະໝັກແລ້ວ"
                type="number"
                outlined
                dense
                hide-details="auto"
                prepend-inner-icon="mdi-account-multiple"
              />
            </v-col>

            <!-- Job Description -->
            <v-col cols="12" v-if="1 == 0">
              <v-textarea
                v-model="formData.jobDescription"
                label="Job Description"
                outlined
                dense
                rows="3"
                hide-details="auto"
                no-resize
              />
            </v-col>

            <!-- Selected MOU Info Alert -->
            <v-col cols="12" v-if="selectedMou">
              <v-alert dense outlined color="info" class="mb-0">
                <div class="d-flex justify-space-between align-center">
                  <div class="text-caption">
                    <strong>{{ selectedMou.jobCode }}</strong>
                    <span class="grey--text ml-2">
                      {{ selectedMou.mouNumber }} •
                      {{ selectedMou.employerCompany }}
                      <template v-if="selectedMou.agency">
                        • Agency: {{ selectedMou.agency.agencyName }}
                      </template>
                      • ບໍລິສັດນາຍຈ່າງ: {{ selectedMou.employerCompany }} 
                      • ສະຖານທີ່ເຮັດວຽກ: {{ selectedMou.workLocation }} 
                      • ໜ້າວຽກ: {{ selectedMou.jobTitle }}
                    </span>
                  </div>
                  <v-chip
                    x-small
                    :color="getMouStatusColor(selectedMou.status)"
                  >
                    {{ selectedMou.status }}
                  </v-chip>
                </div>
              </v-alert>
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>

          <!-- Configuration & Status Section -->
          <v-row dense>
            <v-col cols="12" class="pb-2">
              <div class="section-header">
                <v-icon small color="primary" class="mr-2">mdi-cog</v-icon>
                <span class="section-title">Configuration & Status</span>
              </div>
            </v-col>

            <!-- Status -->
            <v-col cols="12" md="3">
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
                  <v-chip x-small :color="getStatusColor(item.value)">
                    {{ item.text }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>

            <!-- Priority -->
            <v-col cols="12" md="3" v-if="1==0">
              <v-select
                v-model="formData.priority"
                :items="priorityOptions"
                label="Priority *"
                :rules="rules.priority"
                outlined
                dense
                hide-details="auto"
              >
                <template v-slot:selection="{ item }">
                  <v-chip x-small :color="getPriorityColor(item.value)">
                    <v-icon left x-small>{{
                      getPriorityIcon(item.value)
                    }}</v-icon>
                    {{ item.text }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>

            <!-- Start Date -->
            <v-col cols="12" md="3">
              <v-menu
                v-model="startDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.batchStartDate"
                    label="ກຳນົດເວລາສັນຫາ"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    outlined
                    dense
                    hide-details="auto"
                    clearable
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="formData.batchStartDate"
                  @input="startDateMenu = false"
                />
              </v-menu>
            </v-col>

            <!-- End Date -->
            <v-col cols="12" md="3">
              <v-menu
                v-model="endDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.batchEndDate"
                    label="ກຳນົດເວລາ ຈັດສົ່ງແຮງງານ"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    outlined
                    dense
                    hide-details="auto"
                    clearable
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="formData.batchEndDate"
                  @input="endDateMenu = false"
                  :min="formData.batchStartDate"
                />
              </v-menu>
            </v-col>

            <!-- Deployment Date -->
            <v-col cols="12" md="4" v-if="1==0">
              <v-menu
                v-model="deploymentDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.deploymentDate"
                    label="ກຳນົດເວລາສັນຫາ"
                    prepend-inner-icon="mdi-calendar-check"
                    readonly
                    outlined
                    dense
                    hide-details="auto"
                    clearable
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="formData.deploymentDate"
                  @input="deploymentDateMenu = false"
                />
              </v-menu>
            </v-col>

            <!-- Notes -->
            <v-col cols="12" md="8" >
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

          <!-- Summary Alert -->
          <v-row dense v-if="formData.batchName">
            <v-col cols="12" class="pt-3">
              <v-alert dense outlined color="primary" class="mb-0">
                <div
                  class="d-flex justify-space-between align-center flex-wrap"
                >
                  <div class="text-body-2">
                    <strong>{{ formData.batchName }}</strong>
                    <span v-if="formData.runningNo" class="grey--text ml-2">
                      ({{ formData.runningNo }})
                    </span>
                    <span v-if="selectedMou" class="grey--text ml-2">
                      • MOU: {{ selectedMou.jobCode }}
                    </span>
                    <span v-if="selectedMou?.agency" class="grey--text ml-2">
                      • Agency: {{ selectedMou.agency.agencyName }}
                    </span>
                    <span
                      v-if="selectedMou?.employerCompany"
                      class="grey--text ml-2"
                    >
                      • ບໍລິສັດນາຍຈ່າງ: {{ selectedMou.employerCompany }}
                    </span>
                    <span v-if="selectedMou?.workLocation" class="grey--text ml-2">
                      • ສະຖານທີ່ເຮັດວຽກ: {{ selectedMou.workLocation }}
                    </span>
                    <span v-if="selectedMou?.jobTitle" class="grey--text ml-2">
                      • ໜ້າວຽກ: {{ selectedMou.jobTitle }}
                    </span>
                  </div>
                  <div class="d-flex mt-2 mt-sm-0">
                    <v-chip
                      x-small
                      :color="getStatusColor(formData.status)"
                      class="mr-1"
                    >
                      {{ formData.status?.toUpperCase() }}
                    </v-chip>
                    <v-chip
                      x-small
                      :color="getPriorityColor(formData.priority)"
                    >
                      <v-icon left x-small>{{
                        getPriorityIcon(formData.priority)
                      }}</v-icon>
                      {{ formData.priority?.toUpperCase() }}
                    </v-chip>
                  </div>
                </div>
              </v-alert>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pa-3">
        <v-spacer></v-spacer>
        <v-btn text @click="handleCancel" :disabled="saving"> Cancel </v-btn>
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
      formValid: false,
      saving: false,
      loadingMous: false,
      startDateMenu: false,
      endDateMenu: false,
      deploymentDateMenu: false,
      mouOptions: [],
      selectedMou: null,
      formData: {
        mouId: null,
        batchName: '_',
        jobDescription: '',
        totalPositions: 0,
        totalApplied: 0,
        batchStartDate: null,
        batchEndDate: null,
        deploymentDate: null,
        status: 'draft',
        priority: 'medium',
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
        if (this.value) {
          this.initializeForm()
        }
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
    onMouChange(mouId) {
      this.selectedMou = this.mouOptions.find((mou) => mou.id === mouId) || null
    },
    initializeForm() {
      if (this.isEdit && this.batch) {
        this.formData = {
          mouId: this.batch.mouId || null,
          batchName: this.batch.batchName || '',
          jobDescription: this.batch.jobDescription || '',
          totalPositions: this.batch.totalPositions || 0,
          totalApplied: this.batch.totalApplied || 0,
          batchStartDate: this.batch.batchStartDate || null,
          batchEndDate: this.batch.batchEndDate || null,
          deploymentDate: this.batch.deploymentDate || null,
          status: this.batch.status || 'draft',
          priority: this.batch.priority || 'medium',
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
        if (this.$refs.form) {
          this.$refs.form.resetValidation()
        }
      })
    },
    resetForm() {
      this.formData = {
        mouId: null,
        batchName: '',
        jobDescription: '',
        totalPositions: 0,
        totalApplied: 0,
        batchStartDate: null,
        batchEndDate: null,
        deploymentDate: null,
        status: 'draft',
        priority: 'medium',
        notes: '',
      }
      this.selectedMou = null
      this.formValid = false
    },
    async handleSave() {
      if (!this.$refs.form.validate()) {
        return
      }
      this.saving = true
      try {
        let response
        if (this.isEdit) {
          response = await this.$axios.put(
            `/api/batch-job/${this.batch.id}`,
            this.formData
          )
          this.$toast.success('Job batch updated successfully')
        } else {
          response = await this.$axios.post('/api/batch-job', this.formData)
          this.$toast.success('Job batch created successfully')
        }
        this.$emit('saved', response.data.data)
        this.resetForm()
      } catch (error) {
        console.error('Error saving job batch:', error)
        if (error.response?.data?.errors) {
          const errors = error.response.data.errors
          const errorMessages = errors
            .map((e) => `${e.field}: ${e.message}`)
            .join('\n')
          this.$toast.error(`Validation errors:\n${errorMessages}`)
        } else if (error.response?.data?.message) {
          this.$toast.error(error.response.data.message)
        } else {
          this.$toast.error(
            this.isEdit
              ? 'Failed to update job batch'
              : 'Failed to create job batch'
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
  min-height: 48px !important;
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