<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    fullscreen
    persistent
    scrollable
  >
    <v-card>
      <v-card-title class="primary white--text py-2">
        <v-icon left small color="white">
          {{ isEdit ? 'mdi-pencil' : 'mdi-plus' }}
        </v-icon>
        <span class="text-subtitle-1">
          {{ isEdit ? 'Edit Job Batch' : 'Create New Job Batch' }}
        </span>
        <v-spacer></v-spacer>
        <v-btn icon small color="white" @click="handleCancel" :disabled="saving">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-3">
        <v-form ref="form" v-model="formValid" lazy-validation>
          <v-row dense>
            <!-- Basic Information -->
            <v-col cols="12">
              <div class="text-subtitle-2 mb-2">Basic Information</div>
            </v-col>

            <!-- MOU Selection -->
            <v-col cols="12">
              <v-select
                v-model="formData.mouId"
                :items="mouOptions"
                :loading="loadingMous"
                label="Select MOU *"
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
                    <v-icon small class="mr-2" color="primary">mdi-file-document-outline</v-icon>
                    <div>
                      <div class="text-body-2">{{ item.jobCode }}</div>
                      <div class="text-caption grey--text">{{ item.mouNumber }}</div>
                    </div>
                  </div>
                </template>
                <template v-slot:item="{ item }">
                  <div class="d-flex align-center py-2">
                    <v-icon small class="mr-3" color="primary">mdi-file-document-outline</v-icon>
                    <div class="flex-grow-1">
                      <div class="text-body-2">{{ item.jobCode }}</div>
                      <div class="text-caption grey--text">{{ item.mouNumber }}</div>
                      <div class="text-caption grey--text">{{ item.employerCompany }}</div>
                    </div>
                    <v-chip x-small :color="getMouStatusColor(item.status)">
                      {{ item.status }}
                    </v-chip>
                  </div>
                </template>
                <template v-slot:no-data>
                  <div class="pa-4 text-center">
                    <div class="text-body-2 grey--text">No MOUs found</div>
                    <v-btn small text color="primary" @click="fetchMous">
                      <v-icon small left>mdi-refresh</v-icon>
                      Refresh
                    </v-btn>
                  </div>
                </template>
              </v-select>
            </v-col>

            <!-- Selected MOU Info -->
            <v-col cols="12" v-if="selectedMou">
              <v-alert dense outlined color="info" class="mb-2">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <strong>{{ selectedMou.jobCode }}</strong>
                    <div class="text-caption">{{ selectedMou.mouNumber }} • {{ selectedMou.employerCompany }}</div>
                  </div>
                  <v-chip x-small :color="getMouStatusColor(selectedMou.status)">
                    {{ selectedMou.status }}
                  </v-chip>
                </div>
              </v-alert>
            </v-col>

            <!-- Batch Name -->
            <v-col cols="8">
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
            <v-col cols="4">
              <v-text-field
                v-model="formData.runningNo"
                label="Running Number"
                outlined
                dense
                hide-details="auto"
                :disabled="!isEdit"
                :hint="isEdit ? 'Edit carefully' : 'Auto-generated'"
                persistent-hint
              />
            </v-col>

            <!-- Job Description -->
            <v-col cols="12">
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

            <!-- Batch Configuration -->
            <v-col cols="12">
              <div class="text-subtitle-2 mb-2 mt-2">Batch Configuration</div>
            </v-col>

            <!-- Total Positions -->
            <v-col cols="4">
              <v-text-field
                v-model.number="formData.totalPositions"
                label="Total Positions"
                type="number"
                min="0"
                :rules="rules.totalPositions"
                outlined
                dense
                hide-details="auto"
              />
            </v-col>

            <!-- Status -->
            <v-col cols="4">
              <v-select
                v-model="formData.status"
                :items="statusOptions"
                label="Status *"
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
                <template v-slot:item="{ item }">
                  <v-chip x-small :color="getStatusColor(item.value)" class="mr-2">
                    {{ item.text }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>

            <!-- Priority -->
            <v-col cols="4">
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
                    <v-icon left x-small>{{ getPriorityIcon(item.value) }}</v-icon>
                    {{ item.text }}
                  </v-chip>
                </template>
                <template v-slot:item="{ item }">
                  <v-chip x-small :color="getPriorityColor(item.value)" class="mr-2">
                    <v-icon left x-small>{{ getPriorityIcon(item.value) }}</v-icon>
                    {{ item.text }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>

            <!-- Dates -->
            <v-col cols="12">
              <div class="text-subtitle-2 mb-2 mt-2">Important Dates</div>
            </v-col>

            <!-- Batch Start Date -->
            <v-col cols="4">
              <v-menu
                ref="startDateMenu"
                v-model="startDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.batchStartDate"
                    label="Batch Start Date"
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

            <!-- Batch End Date -->
            <v-col cols="4">
              <v-menu
                ref="endDateMenu"
                v-model="endDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.batchEndDate"
                    label="Batch End Date"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    outlined
                    dense
                    hide-details="auto"
                    clearable
                    :min="formData.batchStartDate"
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
            <v-col cols="4">
              <v-menu
                ref="deploymentDateMenu"
                v-model="deploymentDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.deploymentDate"
                    label="Deployment Date"
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
                  v-model="formData.deploymentDate"
                  @input="deploymentDateMenu = false"
                />
              </v-menu>
            </v-col>

            <!-- Notes -->
            <v-col cols="12">
              <v-textarea
                v-model="formData.notes"
                label="Additional Notes"
                outlined
                dense
                rows="2"
                hide-details="auto"
                no-resize
                counter="500"
              />
            </v-col>

            <!-- Preview Card -->
            <v-col cols="12" v-if="formData.batchName">
              <v-alert dense outlined color="info" class="mb-0">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <strong>{{ formData.batchName }}</strong>
                    <span v-if="formData.runningNo" class="ml-2 text-caption">({{ formData.runningNo }})</span>
                    <div v-if="selectedMou" class="text-caption grey--text">
                      MOU: {{ selectedMou.jobCode }}
                    </div>
                  </div>
                  <div class="text-right">
                    <v-chip x-small :color="getStatusColor(formData.status)" class="mr-1">
                      {{ formData.status?.toUpperCase() }}
                    </v-chip>
                    <v-chip x-small :color="getPriorityColor(formData.priority)">
                      <v-icon left x-small>{{ getPriorityIcon(formData.priority) }}</v-icon>
                      {{ formData.priority?.toUpperCase() }}
                    </v-chip>
                  </div>
                </div>
                <div v-if="formData.totalPositions" class="mt-1 text-caption">
                  Total Positions: {{ formData.totalPositions }}
                </div>
              </v-alert>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-actions class="pa-3 pt-0">
        <v-spacer></v-spacer>
        <v-btn text @click="handleCancel" :disabled="saving" small>
          Cancel
        </v-btn>
        <v-btn
          color="primary"
          @click="handleSave"
          :disabled="!formValid"
          :loading="saving"
          small
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
    value: {
      type: Boolean,
      default: false
    },
    batch: {
      type: Object,
      default: null
    },
    isEdit: {
      type: Boolean,
      default: false
    }
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
        batchName: '',
        runningNo: '',
        jobDescription: '',
        totalPositions: 0,
        batchStartDate: null,
        batchEndDate: null,
        deploymentDate: null,
        status: 'draft',
        priority: 'medium',
        notes: ''
      },
      rules: {
        mouId: [
          v => !!v || 'MOU selection is required'
        ],
        batchName: [
          v => !!v || 'Batch name is required',
          v => (v && v.length <= 100) || 'Batch name must be less than 100 characters'
        ],
        status: [
          v => !!v || 'Status is required'
        ],
        priority: [
          v => !!v || 'Priority is required'
        ],
        totalPositions: [
          v => v >= 0 || 'Total positions must be 0 or greater'
        ]
      },
      statusOptions: [
        { text: 'Draft', value: 'draft' },
        { text: 'Active', value: 'active' },
        { text: 'Completed', value: 'completed' },
        { text: 'Cancelled', value: 'cancelled' },
        { text: 'On Hold', value: 'on_hold' }
      ],
      priorityOptions: [
        { text: 'Low', value: 'low' },
        { text: 'Medium', value: 'medium' },
        { text: 'High', value: 'high' },
        { text: 'Urgent', value: 'urgent' }
      ]
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
      deep: true
    }
  },
  methods: {
    async fetchMous() {
      this.loadingMous = true
      try {
        const response = await this.$axios.get('/api/mous', {
          params: {
            status: 'open', // Only show active MOUs
            limit: 100 // Adjust as needed
          }
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
      this.selectedMou = this.mouOptions.find(mou => mou.id === mouId) || null
    },

    initializeForm() {
      if (this.isEdit && this.batch) {
        // Edit mode - populate form with existing data
        this.formData = {
          mouId: this.batch.mouId || null,
          batchName: this.batch.batchName || '',
          runningNo: this.batch.runningNo || '',
          jobDescription: this.batch.jobDescription || '',
          totalPositions: this.batch.totalPositions || 0,
          batchStartDate: this.batch.batchStartDate || null,
          batchEndDate: this.batch.batchEndDate || null,
          deploymentDate: this.batch.deploymentDate || null,
          status: this.batch.status || 'draft',
          priority: this.batch.priority || 'medium',
          notes: this.batch.notes || ''
        }
        
        // Set selected MOU if editing
        if (this.batch.mou) {
          this.selectedMou = this.batch.mou
        } else if (this.formData.mouId) {
          // Find the MOU from options if not included in batch object
          this.$nextTick(() => {
            this.selectedMou = this.mouOptions.find(mou => mou.id === this.formData.mouId) || null
          })
        }
      } else {
        // Create mode - reset to defaults
        this.resetForm()
      }
      
      // Reset form validation
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
        runningNo: '',
        jobDescription: '',
        totalPositions: 0,
        batchStartDate: null,
        batchEndDate: null,
        deploymentDate: null,
        status: 'draft',
        priority: 'medium',
        notes: ''
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
          // Update existing batch
          response = await this.$axios.put(`/api/batch-job/${this.batch.id}`, this.formData)
          this.$toast.success('Job batch updated successfully')
        } else {
          // Create new batch
          response = await this.$axios.post('/api/batch-job', this.formData)
          this.$toast.success('Job batch created successfully')
        }

        this.$emit('saved', response.data.data)
        this.resetForm()

      } catch (error) {
        console.error('Error saving job batch:', error)
        
        if (error.response?.data?.errors) {
          // Validation errors
          const errors = error.response.data.errors
          const errorMessages = errors.map(e => `${e.field}: ${e.message}`).join('\n')
          this.$toast.error(`Validation errors:\n${errorMessages}`)
        } else if (error.response?.data?.message) {
          this.$toast.error(error.response.data.message)
        } else {
          this.$toast.error(this.isEdit ? 'Failed to update job batch' : 'Failed to create job batch')
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
        on_hold: 'grey'
      }
      return colors[status] || 'grey'
    },

    getPriorityColor(priority) {
      const colors = {
        low: 'green',
        medium: 'orange',
        high: 'red',
        urgent: 'deep-purple'
      }
      return colors[priority] || 'grey'
    },

    getPriorityIcon(priority) {
      const icons = {
        low: 'mdi-arrow-down',
        medium: 'mdi-minus',
        high: 'mdi-arrow-up',
        urgent: 'mdi-alert'
      }
      return icons[priority] || 'mdi-minus'
    },

    getMouStatusColor(status) {
      const colors = {
        draft: 'orange',
        active: 'green',
        expired: 'red',
        cancelled: 'grey'
      }
      return colors[status] || 'grey'
    }
  }
}
</script>

<style scoped>
.v-chip--x-small {
  font-size: 10px !important;
}
</style>