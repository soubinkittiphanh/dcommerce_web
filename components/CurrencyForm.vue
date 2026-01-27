<template>
  <div>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    
    <!-- Form content without outer v-card since it's already in a dialog -->
    <v-card-title class="pb-2">
      <v-chip color="primary" size="small" label>
        <v-icon start size="small">mdi-currency-usd</v-icon>
        {{ isCreate ? 'Add Currency' : 'Edit Currency' }}
      </v-chip>
    </v-card-title>
    
    <v-card-text class="pt-2">
      <v-form ref="form">
        <!-- Basic Info Row -->
        <v-row dense>
          <v-col cols="6">
            <v-text-field
              :disabled="!isCreate"
              v-model="form.code"
              label="* Code"
              variant="outlined"
              density="compact"
              :rules="nameRules"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="form.name"
              label="* Name"
              variant="outlined"
              density="compact"
              :rules="nameRules"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Local Currency Info (Compact) -->
        <div v-if="localCurrency" class="mb-3">
          <v-chip size="small" color="info" variant="tonal">
            <v-icon start size="small">mdi-home</v-icon>
            Current Local: {{ localCurrency.code }}
          </v-chip>
        </div>

        <!-- Checkboxes Row -->
        <v-row dense class="mb-2">
          <v-col cols="4">
            <v-checkbox
              v-model="form.isActive"
              label="Active"
              density="compact"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="8">
            <v-checkbox
              v-model="form.isLocalCCY"
              :disabled="hasExistingLocalCurrency && !form.isLocalCCY"
              density="compact"
              hide-details
            >
              <template v-slot:label>
                <span class="text-body-2">
                  Set as Local Currency
                  <v-tooltip activator="parent" location="top">
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
        <v-radio-group 
          v-model="exchangeDirection" 
          inline 
          density="compact"
          class="mb-2"
        >
          <template v-slot:label>
            <span class="text-body-2 font-weight-medium">Rate Direction:</span>
          </template>
          <v-radio 
            :label="`${currentLocalCurrency} → ${form.code || 'Foreign'}`"
            value="local_to_foreign"
            density="compact"
          ></v-radio>
          <v-radio 
            :label="`${form.code || 'Foreign'} → ${currentLocalCurrency}`"
            value="foreign_to_local"
            density="compact"
          ></v-radio>
        </v-radio-group>

        <!-- Rate Input -->
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
        ></v-text-field>

      </v-form>
    </v-card-text>
    
    <v-card-actions class="pt-0">
      <small class="text-caption text-grey">* Required fields</small>
      <v-spacer></v-spacer>
      <v-btn
        variant="text"
        @click="$emit('close-dialog')"
      >
        Cancel
      </v-btn>
      <v-btn 
        color="primary" 
        variant="flat"
        @click="commitRecord"
        :loading="isloading"
      >
        Save
      </v-btn>
    </v-card-actions>
  </div>
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