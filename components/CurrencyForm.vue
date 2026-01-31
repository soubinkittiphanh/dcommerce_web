<template>
  <v-card class="currency-form-card">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    
    <v-card-title class="pb-2 form-header">
      <v-chip color="primary" size="small" label class="currency-chip">
        <v-icon start size="small">mdi-currency-usd</v-icon>
        {{ isCreate ? 'Add Currency' : 'Edit Currency' }}
      </v-chip>
    </v-card-title>
    
    <v-card-text class="pt-2 form-content">
      <v-form ref="form">
        <!-- Basic Info Row -->
        <v-row dense class="form-row">
          <v-col cols="6">
            <v-text-field
              :disabled="!isCreate"
              v-model="form.code"
              label="* Code"
              variant="outlined"
              density="compact"
              :rules="nameRules"
              class="currency-input"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="form.name"
              label="* Name"
              variant="outlined"
              density="compact"
              :rules="nameRules"
              class="currency-input"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Local Currency Info (Compact) -->
        <div v-if="localCurrency" class="mb-4 local-currency-info">
          <v-chip size="small" color="info" variant="tonal" class="local-currency-chip">
            <v-icon start size="small">mdi-home</v-icon>
            Current Local: {{ localCurrency.code }}
          </v-chip>
        </div>

        <!-- Checkboxes Row -->
        <v-row dense class="mb-3 checkbox-row">
          <v-col cols="4">
            <v-checkbox
              v-model="form.isActive"
              label="Active"
              density="compact"
              hide-details
              class="custom-checkbox"
            ></v-checkbox>
          </v-col>
          <v-col cols="8">
            <v-checkbox
              v-model="form.isLocalCCY"
              :disabled="hasExistingLocalCurrency && !form.isLocalCCY"
              density="compact"
              hide-details
              class="custom-checkbox local-currency-checkbox"
            >
              <template v-slot:label>
                <span class="checkbox-label">
                  Set as Local Currency
                  <v-tooltip activator="parent" location="top" class="custom-tooltip">
                    {{ hasExistingLocalCurrency && !form.isLocalCCY ? 
                       `${localCurrency?.name} is currently local` : 
                       'Make this the base currency' }}
                  </v-tooltip>
                </span>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>

        <!-- Rate Direction (Simplified) -->
        <div class="rate-direction-section">
          <v-radio-group 
            v-model="exchangeDirection" 
            inline 
            density="compact"
            class="mb-3 rate-radio-group"
          >
            <template v-slot:label>
              <span class="rate-direction-label">Rate Direction:</span>
            </template>
            <v-radio 
              :label="`${currentLocalCurrency} → ${form.code || 'Foreign'}`"
              value="local_to_foreign"
              density="compact"
              class="rate-radio"
            ></v-radio>
            <v-radio 
              :label="`${form.code || 'Foreign'} → ${currentLocalCurrency}`"
              value="foreign_to_local"
              density="compact"
              class="rate-radio"
            ></v-radio>
          </v-radio-group>
        </div>

        <!-- Rate Input -->
        <div class="rate-input-section">
          <v-text-field
            v-model="form.rate"
            :label="rateLabel"
            variant="outlined"
            density="compact"
            type="number"
            step="any"
            :rules="rateRules"
            :hint="form.rate && form.code ? conversionPreview : ''"
            persistent-hint
            class="rate-input"
          ></v-text-field>
        </div>

      </v-form>
    </v-card-text>
    
    <v-card-actions class="pt-0 form-actions">
      <small class="text-caption text-grey required-text">* Required fields</small>
      <v-spacer></v-spacer>
      <v-btn
        variant="text"
        @click="$emit('close-dialog')"
        class="cancel-btn"
      >
        Cancel
      </v-btn>
      <v-btn 
        color="primary" 
        variant="flat"
        @click="commitRecord"
        :loading="isloading"
        class="save-btn"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    isCreate: {
      type: Boolean,
      require: true,
      default: true,
    },
    recordId: {
      type: Number,
      require: false,
      default: 0,
    },
  },
  data() {
    return {
      form: {
        code: '',
        name: '',
        rate: 1,
        isActive: true,
        isLocalCCY: false,
        exchangeDirection: 'local_to_foreign',
      },
      exchangeDirection: 'local_to_foreign',
      localCurrency: null,
      isloading: false,
      nameRules: [
        (value) => !!value || 'Required',
        (value) => (value && value.length <= 20) || 'Max 20 characters',
      ],
      rateRules: [
        (value) => !!value || 'Required',
        (value) => (value && parseFloat(value) > 0) || 'Must be positive',
      ],
    }
  },
  
  computed: {   
     ...mapGetters(['currentSelectedCustomer', 'cartOfProduct','findAllCurrency']),
    currentLocalCurrency() {
      if (this.form.isLocalCCY && this.form.code) {
        return this.form.code;
      }
      return this.localCurrency?.code || 'LAK';
    },
    
    hasExistingLocalCurrency() {
      return this.localCurrency && this.localCurrency.id;
    },
    
    rateLabel() {
      if (this.exchangeDirection === 'local_to_foreign') {
        return `* Rate (1 ${this.currentLocalCurrency} = ? ${this.form.code || 'XXX'})`;
      } else {
        return `* Rate (1 ${this.form.code || 'XXX'} = ? ${this.currentLocalCurrency})`;
      }
    },
    
    conversionPreview() {
      if (!this.form.rate || !this.form.code) return '';
      
      const rate = parseFloat(this.form.rate);
      if (this.exchangeDirection === 'local_to_foreign') {
        return `1 ${this.currentLocalCurrency} = ${rate.toFixed(4)} ${this.form.code} | 1 ${this.form.code} = ${(1/rate).toFixed(4)} ${this.currentLocalCurrency}`;
      } else {
        return `1 ${this.form.code} = ${rate.toFixed(4)} ${this.currentLocalCurrency} | 1 ${this.currentLocalCurrency} = ${(1/rate).toFixed(6)} ${this.form.code}`;
      }
    },
  },
  
  watch: {
    exchangeDirection(newVal) {
      this.form.exchangeDirection = newVal;
    },
  },
  
  async created() {
    await this.loadLocalCurrency();
    await this.loadCurrency();
  },
  
  methods: {
    ...mapActions([
      'initiateData',
      'setSelectedTerminal',
      'setSelectedLocation',
    ]),
    
    initData() {
      this.initiateData(this.$axios);
    },
    
    async loadLocalCurrency() {
      try {
        const response = await this.$axios.get('api/currency/findLocalCurrency');
        this.localCurrency = response.data;
      } catch (error) {
        console.log('No local currency found:', error);
        this.localCurrency = null;
      }
    },
    
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        this.isloading = true;
        
        const formData = {
          ...this.form,
          exchangeDirection: this.exchangeDirection
        };
        
        let api = this.isCreate
          ? 'api/currency/create'
          : `api/currency/update/${this.recordId}`;
        
        try {
          if (this.isCreate) {
            await this.$axios.post(api, formData);
          } else {
            await this.$axios.put(api, formData);
          }
          
          this.refreshData();
          swalSuccess(this.$swal, 'Success', 'Currency saved successfully');
          
        } catch (error) {
          console.log('Error: ', error);
          
          if (error.response?.data?.error?.includes('local currency already exists')) {
            swalError2(this.$swal, 'Error', error.response.data.error);
          } else {
            swalError2(this.$swal, 'Error', 'Failed to save currency');
          }
        }
        
        this.isloading = false;
      }
    },
    
    async loadCurrency() {
      if (this.recordId && !this.isCreate) {
        try {
          const response = await this.$axios.get(`api/currency/find/${this.recordId}`);
          const data = response.data;
          
          this.form.name = data.name;
          this.form.code = data.code;
          this.form.rate = data.rate;
          this.form.isActive = data.isActive;
          this.form.isLocalCCY = data.isLocalCCY;
          this.exchangeDirection = data.exchangeDirection || 'local_to_foreign';
          this.form.exchangeDirection = this.exchangeDirection;
          
        } catch (error) {
          console.log('Cannot fetch data:', error);
        }
      }
    },
    
    refreshData() {
      this.initData();
      this.$emit('reload-data');
    },
  },
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