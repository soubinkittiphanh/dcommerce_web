<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card class="maintenance-dialog">
      <!-- Header -->
      <v-toolbar color="primary" dark flat class="dialog-toolbar">
        <v-btn icon @click="cancel" class="close-btn">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="toolbar-title">
          <v-icon left class="mr-2">mdi-file-document-edit</v-icon>
          {{ isEditing ? 'ແກ້ໄຂ MOU' : 'ສ້າງ MOU ໃໝ່' }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          text
          @click="save"
          :loading="saving"
          :disabled="!isFormValid"
          class="save-btn"
        >
          <v-icon left>mdi-content-save</v-icon>
          ບັນທຶກ
        </v-btn>
      </v-toolbar>

      <!-- Form Content -->
      <v-card-text class="dialog-content">
        <v-container fluid class="form-container">
          <v-form ref="form" v-model="isFormValid" lazy-validation>
            <v-row>
              <!-- Basic Information Section -->
              <v-col cols="12">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-information</v-icon
                  >
                  <h3 class="section-title">ຂໍ້ມູນພື້ນຖານ</h3>
                </div>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="form.jobCode"
                  label="ລະຫັດວຽກ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  prepend-inner-icon="mdi-identifier"
                  :disabled="isEditing"
                  hint="ລະຫັດງານເອກະລັກສຳລັບ MOU ນີ້"
                  persistent-hint
                />
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="form.mouNumber"
                  label="ເລກທີ MOU"
                  outlined
                  dense
                  prepend-inner-icon="mdi-file-document"
                  hint="ເລກທີເອກະສານ MOU ທາງການ"
                  persistent-hint
                />
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="form.jobStatus"
                  :items="statusOptions"
                  label="ສະຖານະວຽກ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  prepend-inner-icon="mdi-flag"
                >
                  <template v-slot:selection="{ item }">
                    <v-chip
                      :color="getStatusColor(item.value)"
                      small
                      text-color="white"
                    >
                      {{ item.text }}
                    </v-chip>
                  </template>
                  <template v-slot:item="{ item }">
                    <v-chip
                      :color="getStatusColor(item.value)"
                      small
                      text-color="white"
                      class="mr-2"
                    >
                      {{ item.text }}
                    </v-chip>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="form.jobTitle"
                  label="ຫົວຂໍ້ວຽກ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  prepend-inner-icon="mdi-briefcase"
                  hint="ລາຍລະອຽດຂອງຕຳແໜ່ງວຽກ"
                  persistent-hint
                />
              </v-col>

              <!-- Company & Location Section -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-domain</v-icon
                  >
                  <h3 class="section-title">ບໍລິສັດ & ສະຖານທີ່</h3>
                </div>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.employerCompany"
                  label="ບໍລິສັດນາຍຈ້າງ"
                  outlined
                  dense
                  prepend-inner-icon="mdi-office-building"
                  hint="ຊື່ບໍລິສັດທີ່ຈ້າງງານ"
                  persistent-hint
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.workLocation"
                  label="ສະຖານທີ່ເຮັດວຽກ"
                  outlined
                  dense
                  prepend-inner-icon="mdi-map-marker"
                  hint="ບ່ອນທີ່ຈະປະຕິບັດວຽກ"
                  persistent-hint
                />
              </v-col>

              <!-- Worker Information Section -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-account-group</v-icon
                  >
                  <h3 class="section-title">ຂໍ້ມູນແຮງງານ</h3>
                </div>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model.number="form.numberOfWorkers"
                  label="ຈຳນວນແຮງງານ *"
                  :rules="[rules.required, rules.positiveNumber]"
                  outlined
                  dense
                  type="number"
                  min="1"
                  prepend-inner-icon="mdi-counter"
                />
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="form.workerType"
                  :items="workerTypeOptions"
                  label="ປະເພດແຮງງານ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  prepend-inner-icon="mdi-account"
                >
                  <template v-slot:selection="{ item }">
                    <v-icon
                      small
                      :color="getWorkerTypeColor(item.value)"
                      class="mr-2"
                    >
                      {{ getWorkerTypeIcon(item.value) }}
                    </v-icon>
                    {{ item.text }}
                  </template>
                  <template v-slot:item="{ item }">
                    <v-icon
                      small
                      :color="getWorkerTypeColor(item.value)"
                      class="mr-3"
                    >
                      {{ getWorkerTypeIcon(item.value) }}
                    </v-icon>
                    {{ item.text }}
                  </template>
                </v-select>
              </v-col>

              <!-- Financial Information Section -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-currency-usd</v-icon
                  >
                  <h3 class="section-title">ຂໍ້ມູນການເງິນ</h3>
                </div>
              </v-col>

              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  v-model.number="form.pmCharge"
                  label="ຄ່າບໍລິຫານ PM"
                  outlined
                  dense
                  type="number"
                  min="0"
                  step="0.01"
                  prepend-inner-icon="mdi-cash"
                  :suffix="selectedCurrency?.code || 'USD'"
                />
              </v-col>

              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  v-model.number="form.exchangeRate"
                  label="ອັດຕາແລກປ່ຽນ"
                  outlined
                  dense
                  type="number"
                  min="0"
                  step="0.001"
                  prepend-inner-icon="mdi-swap-horizontal"
                  hint="ຄ່າເລີ່ມຕົ້ນ: 1.0"
                  persistent-hint
                />
              </v-col>

              <v-col cols="12" sm="6" md="3">
                <v-select
                  v-model="form.currencyId"
                  :items="currencies"
                  item-text="name"
                  item-value="id"
                  label="ສະກຸນເງິນ"
                  outlined
                  dense
                  prepend-inner-icon="mdi-currency-usd"
                  :loading="loadingCurrencies"
                >
                  <template v-slot:selection="{ item }">
                    {{ item.code }} - {{ item.name }}
                  </template>
                  <template v-slot:item="{ item }">
                    <strong>{{ item.code }}</strong> - {{ item.name }}
                  </template>
                </v-select>
              </v-col>

              <!-- Agency Selection -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-account-tie</v-icon
                  >
                  <h3 class="section-title">ຂໍ້ມູນຕົວແທນ</h3>
                </div>
              </v-col>

              <v-col cols="12" md="6">
                <v-select
                  v-model="form.agencyId"
                  :items="agencies"
                  item-text="agencyName"
                  item-value="id"
                  label="ຕົວແທນ"
                  outlined
                  dense
                  prepend-inner-icon="mdi-domain"
                  :loading="loadingAgencies"
                  clearable
                >
                  <template v-slot:selection="{ item }">
                    {{ item.agencyName }}
                    <small class="ml-2">({{ item.agencyCode }})</small>
                  </template>
                  <template v-slot:item="{ item }">
                    <div>
                      <div class="font-weight-medium">
                        {{ item.agencyName }}
                      </div>
                      <small class="text--secondary"
                        >{{ item.agencyCode }} - {{ item.address }}</small
                      >
                    </div>
                  </template>
                </v-select>
              </v-col>

              <!-- Notes Section -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-note-text</v-icon
                  >
                  <h3 class="section-title">ຂໍ້ມູນເພີ່ມເຕີມ</h3>
                </div>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="form.notes"
                  label="ໝາຍເຫດ"
                  outlined
                  rows="3"
                  prepend-inner-icon="mdi-note"
                  hint="ໝາຍເຫດ ຫຼື ຄຳອະທິບາຍເພີ່ມເຕີມກ່ຽວກັບ MOU ນີ້"
                  persistent-hint
                />
              </v-col>

              <!-- Documents Section -->
              <v-col
                cols="12"
                v-if="form.documents && form.documents.length > 0"
              >
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-paperclip</v-icon
                  >
                  <h3 class="section-title">ເອກະສານແນບ</h3>
                </div>
                <div class="documents-list">
                  <v-chip
                    v-for="(doc, index) in form.documents"
                    :key="index"
                    class="ma-1"
                    close
                    @click:close="removeDocument(index)"
                  >
                    <v-icon left small>mdi-file</v-icon>
                    {{ doc.name }}
                  </v-chip>
                </div>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>

      <!-- Footer Actions -->
      <v-card-actions class="dialog-actions">
        <v-container fluid>
          <v-row justify="end">
            <v-col cols="auto">
              <v-btn text large @click="cancel" class="mr-3">
                <v-icon left>mdi-cancel</v-icon>
                ຍົກເລີກ
              </v-btn>
              <v-btn
                color="primary"
                large
                @click="save"
                :loading="saving"
                :disabled="!isFormValid"
              >
                <v-icon left>mdi-content-save</v-icon>
                {{ isEditing ? 'ອັບເດດ MOU' : 'ສ້າງ MOU' }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'MouMaintenanceDialog',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    editingItem: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isFormValid: false,
      saving: false,
      loadingAgencies: false,
      loadingCurrencies: false,
      agencies: [],
      currencies: [],
      form: {
        jobCode: '',
        mouNumber: '',
        pmCharge: 0,
        exchangeRate: 1,
        agencyId: null,
        employerCompany: '',
        workLocation: '',
        jobTitle: '',
        numberOfWorkers: 1,
        workerType: 'Any',
        jobStatus: 'draft',
        documents: [],
        notes: '',
        currencyId: null,
      },
      statusOptions: [
        { value: 'draft', text: 'ຮ່າງ' },
        { value: 'open', text: 'ເປີດ' },
        { value: 'in_progress', text: 'ກຳລັງດຳເນີນການ' },
        { value: 'completed', text: 'ສຳເລັດແລ້ວ' },
        { value: 'cancelled', text: 'ຍົກເລີກແລ້ວ' },
      ],
      workerTypeOptions: [
        { value: 'Any', text: 'ເພດໃດກໍໄດ້' },
        { value: 'Man', text: 'ຜູ້ຊາຍເທົ່ານັ້ນ' },
        { value: 'Woman', text: 'ຜູ້ຍິງເທົ່ານັ້ນ' },
        { value: 'Spous', text: 'ຄູ່ສົມລົດ' },
      ],
      rules: {
        required: (v) => !!v || 'ຈຳເປັນຕ້ອງໃສ່ຂໍ້ມູນ',
        positiveNumber: (v) => v > 0 || 'ຕ້ອງໃຫ່ຍກວ່າ 0',
      },
    }
  },
  computed: {
    isEditing() {
      return !!this.editingItem
    },
    selectedCurrency() {
      return this.currencies.find((c) => c.id === this.form.currencyId)
    },
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.initForm()
        this.fetchDropdownData()
      }
    },
    editingItem: {
      handler() {
        if (this.editingItem) {
          this.populateForm()
        }
      },
      deep: true,
    },
  },
  methods: {
    initForm() {
      if (this.isEditing) {
        this.populateForm()
      } else {
        this.resetForm()
      }
    },

    resetForm() {
      this.form = {
        jobCode: '',
        mouNumber: '',
        pmCharge: 0,
        exchangeRate: 1,
        agencyId: null,
        employerCompany: '',
        workLocation: '',
        jobTitle: '',
        numberOfWorkers: 1,
        workerType: 'Any',
        jobStatus: 'draft',
        documents: [],
        notes: '',
        currencyId: null,
      }
      this.$nextTick(() => {
        this.$refs.form?.resetValidation()
      })
    },

    populateForm() {
      if (this.editingItem) {
        this.form = {
          ...this.form,
          ...this.editingItem,
          agencyId: this.editingItem.agency?.id || null,
          currencyId: this.editingItem.currency?.id || null,
          documents: this.editingItem.documents || [],
        }
      }
    },

    async fetchDropdownData() {
      await Promise.all([this.fetchAgencies(), this.fetchCurrencies()])
    },

    async fetchAgencies() {
      this.loadingAgencies = true
      try {
        const response = await this.$axios.$get('/api/agency')
        console.info(`AGENCY ${JSON.stringify(response)}`)
        if (response.success && response.data && response.data.agencies) {
          // Handle nested response structure: response.data.data.agencies
          this.agencies = response.data.agencies
        } else if (response.success && Array.isArray(response.data)) {
          // Handle direct array in response.data
          this.agencies = response.data
        }
        console.log('Agencies loaded:', this.agencies)
      } catch (error) {
        console.error('Error fetching agencies:', error)
        this.$toast.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ')
      } finally {
        this.loadingAgencies = false
      }
    },
    async fetchCurrencies() {
      this.loadingCurrencies = true
      try {
        const response = await this.$axios.$get('/api/currency/find')

        // Handle direct array response (no wrapper object)
        if (Array.isArray(response)) {
          this.currencies = response
        }
        // Handle wrapped response with success property
        else if (response.success && response.data) {
          this.currencies = response.data
        }
        // Handle case where response might be the data directly
        else if (response && !response.success) {
          this.currencies = response
        }

        console.log('Currencies loaded:', this.currencies)
      } catch (error) {
        console.error('Error fetching currencies:', error)
        this.$toast.error('ໂຫລດຂໍ້ມູນສະກຸນເງິນບໍ່ສຳເລັດ')
      } finally {
        this.loadingCurrencies = false
      }
    },

    async save() {
      if (!this.$refs.form.validate()) {
        this.$toast.error('ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດໃນແບບຟອມກ່ອນບັນທຶກ')
        return
      }

      this.saving = true
      try {
        const payload = { ...this.form }

        // Clean up the payload
        if (!payload.pmCharge) payload.pmCharge = 0
        if (!payload.exchangeRate) payload.exchangeRate = 1
        if (!payload.numberOfWorkers) payload.numberOfWorkers = 1

        let response
        if (this.isEditing) {
          response = await this.$axios.$put(
            `/api/mous/${this.editingItem.id}`,
            payload
          )
        } else {
          response = await this.$axios.$post('/api/mous', payload)
        }

        if (response.success) {
          this.$toast.success(
            `MOU ${this.isEditing ? 'ອັບເດດ' : 'ສ້າງ'}ສຳເລັດແລ້ວ`
          )
          this.$emit('saved', response.data)
        }
      } catch (error) {
        console.error('Error saving MOU:', error)
        const errorMessage =
          error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ'
        this.$toast.error(errorMessage)
      } finally {
        this.saving = false
      }
    },

    cancel() {
      this.$emit('cancelled')
    },

    removeDocument(index) {
      this.form.documents.splice(index, 1)
    },

    getStatusColor(status) {
      const colorMap = {
        draft: 'grey',
        open: 'blue',
        in_progress: 'orange',
        completed: 'green',
        cancelled: 'red',
      }
      return colorMap[status] || 'grey'
    },

    getWorkerTypeColor(type) {
      const colorMap = {
        Man: 'blue',
        Woman: 'pink',
        Spous: 'purple',
        Any: 'green',
      }
      return colorMap[type] || 'grey'
    },

    getWorkerTypeIcon(type) {
      const iconMap = {
        Man: 'mdi-account',
        Woman: 'mdi-account-outline',
        Spous: 'mdi-account-heart',
        Any: 'mdi-account-group',
      }
      return iconMap[type] || 'mdi-account'
    },
  },
}
</script>

<style scoped>
.maintenance-dialog {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.dialog-toolbar {
  flex-shrink: 0;
  border-radius: 0 !important;
}

.toolbar-title {
  font-size: 1.25rem;
  font-weight: 500;
}

.dialog-content {
  flex: 1;
  overflow-y: auto;
  background-color: #fafafa;
}

.form-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 32px !important;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e3f2fd;
}

.section-icon {
  font-size: 24px !important;
  margin-right: 12px;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1976d2;
  margin: 0;
}

.dialog-actions {
  flex-shrink: 0;
  background: white;
  border-top: 1px solid #e0e0e0;
  padding: 16px 0 !important;
}

.documents-list {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 12px;
  min-height: 60px;
  border: 1px solid #e0e0e0;
}

/* Form field customization */
.v-text-field--outlined >>> .v-input__control > .v-input__slot {
  min-height: 48px;
}

.v-select--outlined >>> .v-input__control > .v-input__slot {
  min-height: 48px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-container {
    padding: 20px !important;
    margin: 0 8px;
    border-radius: 8px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .section-icon {
    margin-right: 8px;
    margin-bottom: 4px;
  }

  .toolbar-title {
    font-size: 1.1rem;
  }
}

/* Enhanced visual feedback */
.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined):hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.v-card {
  transition: all 0.3s ease;
}

/* Status chip styling in select */
.v-chip.v-size--small {
  font-size: 0.75rem;
  height: 24px;
}

/* Loading states */
.v-select.v-select--is-loading >>> .v-input__append-inner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>