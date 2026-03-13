<template>
  <v-card class="currency-form-card">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <v-card-title class="pb-2">
      <v-chip color="primary" label small>
        <v-icon left small>mdi-currency-usd</v-icon>
        {{ isCreate ? 'Add Currency' : 'Edit Currency' }}
      </v-chip>
    </v-card-title>

    <v-card-text class="pt-2">
      <v-form ref="currencyForm">
        <v-row dense>
          <v-col cols="6">
            <v-text-field
              :disabled="!isCreate"
              v-model="form.code"
              label="* Code"
              outlined
              dense
              :rules="nameRules"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="form.name"
              label="* Name"
              outlined
              dense
              :rules="nameRules"
            ></v-text-field>
          </v-col>
        </v-row>

        <div v-if="localCurrency" class="mb-4 pa-2 blue lighten-5 rounded">
          <v-chip small color="info" outlined>
            <v-icon left small>mdi-home</v-icon>
            Current Local: {{ localCurrency.code }}
          </v-chip>
        </div>

        <v-row dense class="mb-3 grey lighten-4 rounded pa-1">
          <v-col cols="4">
            <v-checkbox v-model="form.isActive" label="Active" dense hide-details></v-checkbox>
          </v-col>
          <v-col cols="8">
            <v-checkbox
              v-model="form.isLocalCCY"
              :disabled="hasExistingLocalCurrency && !form.isLocalCCY"
              dense
              hide-details
            >
              <template v-slot:label>
                <span class="caption">Set as Local Currency</span>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>

        <div class="pa-3 blue lighten-5 rounded mb-4" style="border-left: 4px solid #2196F3">
          <span class="caption font-weight-bold primary--text d-block mb-1">Rate Direction:</span>
          <v-radio-group v-model="exchangeDirection" row dense hide-details>
            <v-radio :label="`${currentLocalCurrency} → ${form.code || 'Foreign'}`" value="local_to_foreign"></v-radio>
            <v-radio :label="`${form.code || 'Foreign'} → ${currentLocalCurrency}`" value="foreign_to_local"></v-radio>
          </v-radio-group>
        </div>

        <v-text-field
          v-model="form.rate"
          :label="rateLabel"
          outlined
          dense
          type="number"
          :rules="rateRules"
          :hint="form.rate && form.code ? conversionPreview : ''"
          persistent-hint
        ></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions class="grey lighten-3 pa-3">
      <v-spacer></v-spacer>
      <v-btn text @click="$emit('close-dialog')">Cancel</v-btn>
      <v-btn color="primary" @click="commitRecord" :loading="isloading">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    isCreate: { type: Boolean, default: true },
    recordId: { type: Number, default: 0 },
  },
  data() {
    return {
      form: { code: '', name: '', rate: 1, isActive: true, isLocalCCY: false, exchangeDirection: 'local_to_foreign' },
      exchangeDirection: 'local_to_foreign',
      localCurrency: null,
      isloading: false,
      nameRules: [v => !!v || 'Required', v => (v && v.length <= 20) || 'Max 20 chars'],
      rateRules: [v => !!v || 'Required', v => (v && parseFloat(v) > 0) || 'Positive number required'],
    }
  },
  computed: {
    ...mapGetters(['findAllCurrency']),
    currentLocalCurrency() {
      return (this.form.isLocalCCY && this.form.code) ? this.form.code : (this.localCurrency?.code || 'LAK')
    },
    hasExistingLocalCurrency() { return !!(this.localCurrency && this.localCurrency.id) },
    rateLabel() {
      return this.exchangeDirection === 'local_to_foreign' 
        ? `Rate (1 ${this.currentLocalCurrency} = ? ${this.form.code || 'XXX'})`
        : `Rate (1 ${this.form.code || 'XXX'} = ? ${this.currentLocalCurrency})`
    },
    conversionPreview() {
      if (!this.form.rate || !this.form.code) return ''
      const rate = parseFloat(this.form.rate)
      return this.exchangeDirection === 'local_to_foreign'
        ? `1 ${this.currentLocalCurrency} = ${rate.toFixed(4)} ${this.form.code}`
        : `1 ${this.form.code} = ${rate.toFixed(4)} ${this.currentLocalCurrency}`
    },
  },
  watch: { exchangeDirection(val) { this.form.exchangeDirection = val } },
  async created() {
    await this.loadLocalCurrency()
    await this.loadCurrency()
  },
  methods: {
    async loadLocalCurrency() {
      try {
        const res = await this.$axios.get('api/currency/findLocalCurrency')
        this.localCurrency = res.data
      } catch (e) { this.localCurrency = null }
    },
    async loadCurrency() {
      if (this.recordId && !this.isCreate) {
        try {
          const res = await this.$axios.get(`api/currency/find/${this.recordId}`)
          Object.assign(this.form, res.data)
          this.exchangeDirection = res.data.exchangeDirection || 'local_to_foreign'
        } catch (e) { console.error(e) }
      }
    },
    async commitRecord() {
      if (this.$refs.currencyForm && this.$refs.currencyForm.validate()) {
        this.isloading = true
        this.form.exchangeDirection = this.exchangeDirection
        const api = this.isCreate ? 'api/currency/create' : `api/currency/update/${this.recordId}`
        try {
          if (this.isCreate) await this.$axios.post(api, this.form)
          else await this.$axios.put(api, this.form)
          swalSuccess(this.$swal, 'Success', 'Data Saved')
          this.$emit('reload-data')
          this.$emit('close-dialog')
        } catch (e) {
          swalError2(this.$swal, 'Error', 'Failed to save data')
        } finally { this.isloading = false }
      }
    }
  }
}
</script>

<style scoped>
/* Main Currency Form Card - Force solid background */
.currency-form-card {
  background-color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

/* Header */
.form-header {
  background-color: #ffffff !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

/* Currency Chip */
.currency-chip {
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Form Container */
.form-content {
  padding: 20px 24px !important;
  min-height: 400px;
  background-color: #ffffff !important;
}

/* Form Rows */
.form-row {
  margin-bottom: 12px;
}

/* Input Fields - Force solid white backgrounds */
.currency-input {
  margin-bottom: 8px;
}

.currency-input ::v-deep .v-field {
  border-radius: 8px;
  background-color: #ffffff !important;
  border: 1.5px solid #e0e0e0;
}

.currency-input ::v-deep .v-field--focused {
  border: 2px solid #1976d2;
  background-color: #ffffff !important;
}

.currency-input ::v-deep .v-field__input {
  background-color: transparent !important;
}

.currency-input ::v-deep .v-field--disabled {
  opacity: 0.7;
  background-color: #f5f5f5 !important;
}

/* Local Currency Info */
.local-currency-info {
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background-color: rgba(33, 150, 243, 0.02);
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
}

.local-currency-chip {
  font-size: 0.75rem;
  font-weight: 500;
}

/* Checkboxes */
.checkbox-row {
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background-color: rgba(248, 249, 250, 0.5);
  border-radius: 4px;
  margin-left: 0;
  margin-right: 0;
  padding-left: 12px;
  padding-right: 12px;
}

.custom-checkbox {
  margin: 0;
}

.checkbox-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #424242;
}

.local-currency-checkbox ::v-deep .v-selection-control--disabled {
  opacity: 0.6;
}

/* Rate Direction Section */
.rate-direction-section {
  margin: 20px 0;
  padding: 16px;
  background-color: rgba(33, 150, 243, 0.05) !important;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
  border: 1px solid rgba(33, 150, 243, 0.2);
}

.rate-direction-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1976d2;
  margin-bottom: 12px;
  display: block;
}

.rate-radio-group {
  margin-bottom: 0 !important;
}

.rate-radio {
  margin-right: 20px;
  margin-bottom: 8px;
}

.rate-radio ::v-deep .v-label {
  font-size: 0.8rem;
  color: #555;
  font-weight: 500;
}

/* Rate Input */
.rate-input-section {
  margin: 20px 0;
}

.rate-input {
  margin-bottom: 0;
}

.rate-input ::v-deep .v-field {
  border-radius: 8px;
  background-color: #ffffff !important;
  border: 1.5px solid #e0e0e0;
}

.rate-input ::v-deep .v-field--focused {
  border: 2px solid #4caf50;
  background-color: #ffffff !important;
}

.rate-input ::v-deep .v-field__input {
  background-color: transparent !important;
}

.rate-input ::v-deep .v-messages {
  padding: 6px 12px;
  background-color: rgba(76, 175, 80, 0.08) !important;
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(76, 175, 80, 0.2);
  border-top: none;
  margin-top: -1px;
  font-size: 0.75rem;
  color: #2e7d32;
  font-weight: 500;
}

/* Form Actions */
.form-actions {
  padding: 16px 24px 20px 24px !important;
  background-color: rgba(248, 249, 250, 0.9) !important;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.required-text {
  color: #666;
  font-style: italic;
}

.cancel-btn {
  color: #666;
  font-weight: 500;
  text-transform: none;
}

.cancel-btn:hover {
  background-color: rgba(158, 158, 158, 0.1) !important;
}

.save-btn {
  min-width: 80px;
  font-weight: 600;
  text-transform: none;
  box-shadow: 0 2px 4px rgba(25, 118, 210, 0.3);
}

.save-btn:hover {
  box-shadow: 0 4px 8px rgba(25, 118, 210, 0.4);
  transform: translateY(-1px);
  transition: all 0.2s ease;
}

/* Custom Tooltip */
::v-deep .custom-tooltip .v-tooltip__content {
  font-size: 0.75rem !important;
  max-width: 200px;
  background-color: #424242 !important;
}

/* Responsive Design */
@media (max-width: 600px) {
  .form-content {
    padding: 16px !important;
  }

  .rate-radio {
    margin-right: 12px;
    margin-bottom: 8px;
  }

  .rate-radio ::v-deep .v-label {
    font-size: 0.75rem;
  }

  .form-actions {
    padding: 12px 16px 16px 16px !important;
  }

  .checkbox-row {
    padding-left: 8px;
    padding-right: 8px;
  }
}

/* Loading State Enhancement */
::v-deep .v-dialog .v-overlay__content {
  box-shadow: none;
}

/* Form Validation Styling */
::v-deep .v-input--error .v-field {
  border-color: #f44336 !important;
  background-color: rgba(244, 67, 54, 0.05) !important;
}

::v-deep .v-messages--active {
  color: #f44336;
  font-weight: 500;
}

/* Focus States */
.currency-input:focus-within,
.rate-input:focus-within {
  transform: translateY(-1px);
  transition: transform 0.2s ease;
}

/* Ensure no transparent backgrounds anywhere */
* {
  background-color: inherit;
}

/* Override any Vuetify defaults that might cause transparency */
::v-deep .v-card {
  background-color: #ffffff !important;
}

::v-deep .v-card-title {
  background-color: #ffffff !important;
}

::v-deep .v-card-text {
  background-color: #ffffff !important;
}
</style>