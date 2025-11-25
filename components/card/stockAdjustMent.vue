<!-- StockAdjustmentDialog.vue -->
<template>
  <v-dialog v-model="localDialog" fullscreen persistent>
    <v-card>
      <v-card-title class="dialog-title warning">
        <v-icon class="mr-2" color="white">mdi-pencil</v-icon>
        <span class="white--text">Adjust Stock - {{ selectedProduct?.pro_name }}</span>
      </v-card-title>

      <v-form ref="adjustForm" v-model="formValid">
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model.number="formData.newQuantity"
                label="New Stock Quantity*"
                type="number"
                min="0"
                step="0.01"
                :rules="[rules.required, rules.nonNegative]"
                outlined
                prepend-inner-icon="mdi-package"
                :suffix="baseUnit?.symbol || 'units'"
                hint="Enter the corrected stock quantity"
                persistent-hint
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-autocomplete
                v-model="formData.reason"
                :items="adjustmentReasons"
                label="Adjustment Reason*"
                :rules="[rules.required]"
                outlined
                prepend-inner-icon="mdi-help-circle"
                clearable
                placeholder="Select reason for adjustment..."
              >
                <template v-slot:item="{ item }">
                  <v-list-item-content>
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-textarea
                v-model="formData.notes"
                label="Notes*"
                :rules="[rules.required]"
                outlined
                rows="3"
                prepend-inner-icon="mdi-note-text"
                placeholder="Explain the reason for this adjustment..."
                hint="Detailed explanation is required for audit purposes"
                persistent-hint
              ></v-textarea>
            </v-col>
          </v-row>

          <!-- Adjustment Summary -->
          <v-alert 
            v-if="selectedProduct && formData.newQuantity !== null" 
            :type="getAdjustmentType()" 
            outlined
            class="mt-4"
          >
            <div class="adjustment-summary">
              <div class="d-flex justify-space-between mb-2">
                <div>
                  <strong>Current Stock:</strong> 
                  {{ formatNumber(selectedProduct?.stock_count || 0) }} {{ baseUnit?.symbol }}
                </div>
                <div>
                  <strong>New Stock:</strong> 
                  {{ formatNumber(formData.newQuantity) }} {{ baseUnit?.symbol }}
                </div>
              </div>
              
              <div class="d-flex justify-space-between">
                <div>
                  <strong>Adjustment:</strong> 
                  <span :class="getDifferenceClass()">
                    {{ formatDifference() }}
                  </span>
                </div>
                <div>
                  <strong>Adjustment Type:</strong> 
                  <v-chip 
                    x-small 
                    :color="getAdjustmentType()" 
                    dark
                  >
                    {{ getAdjustmentDirection() }}
                  </v-chip>
                </div>
              </div>

              <!-- Stock Level Warning -->
              <v-alert
                v-if="showStockWarning()"
                type="warning"
                dense
                text
                class="mt-2 mb-0"
              >
                <v-icon small>mdi-alert</v-icon>
                {{ getStockWarningMessage() }}
              </v-alert>
            </div>
          </v-alert>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeDialog">Cancel</v-btn>
          <v-btn
            color="warning"
            :loading="saving"
            :disabled="!formValid"
            @click="saveStockAdjustment"
          >
            <v-icon left>mdi-check</v-icon>
            Adjust Stock
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'StockAdjustmentDialog',
  
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    selectedProduct: {
      type: Object,
      default: null
    },
    saving: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      formValid: false,
      
      formData: {
        newQuantity: null,
        reason: null,
        notes: ''
      },

      adjustmentReasons: [
        'Physical Count Correction',
        'Damaged/Expired Products',
        'Theft/Loss',
        'Return to Supplier',
        'Transfer to Another Location',
        'Spoilage/Waste',
        'System Error Correction',
        'Opening Stock Adjustment',
        'Other'
      ],

      rules: {
        required: value => !!value || 'This field is required',
        nonNegative: value => (value >= 0) || 'Must be 0 or greater'
      }
    }
  },

  computed: {
    localDialog: {
      get() {
        return this.dialog
      },
      set(value) {
        this.$emit('update:dialog', value)
      }
    },

    baseUnit() {
      return this.selectedProduct?.baseUnit || this.selectedProduct?.stockUnit || {
        symbol: 'units',
        name: 'Units'
      }
    },

    stockDifference() {
      if (!this.selectedProduct || this.formData.newQuantity === null) return 0
      return this.formData.newQuantity - (this.selectedProduct.stock_count || 0)
    },

    adjustmentPercentage() {
      if (!this.selectedProduct || this.selectedProduct.stock_count === 0) return 0
      return Math.abs((this.stockDifference / this.selectedProduct.stock_count) * 100)
    }
  },

  watch: {
    dialog: {
      handler(newVal) {
        if (newVal && this.selectedProduct) {
          this.initializeForm()
        }
      },
      immediate: true
    },

    selectedProduct: {
      handler(newVal) {
        if (newVal && this.dialog) {
          this.initializeForm()
        }
      },
      immediate: true
    }
  },

  methods: {
    initializeForm() {
      if (!this.selectedProduct) return

      this.formData = {
        newQuantity: this.selectedProduct.stock_count || 0,
        reason: null,
        notes: ''
      }

      // Reset form validation
      this.$nextTick(() => {
        if (this.$refs.adjustForm) {
          this.$refs.adjustForm.resetValidation()
        }
      })
    },

    getAdjustmentType() {
      if (this.stockDifference > 0) {
        return 'success'
      } else if (this.stockDifference < 0) {
        return 'error'
      }
      return 'info'
    },

    getAdjustmentDirection() {
      if (this.stockDifference > 0) {
        return 'INCREASE'
      } else if (this.stockDifference < 0) {
        return 'DECREASE'
      }
      return 'NO CHANGE'
    },

    getDifferenceClass() {
      if (this.stockDifference > 0) {
        return 'success--text'
      } else if (this.stockDifference < 0) {
        return 'error--text'
      }
      return 'text--primary'
    },

    formatDifference() {
      const diff = this.stockDifference
      const sign = diff > 0 ? '+' : ''
      return `${sign}${this.formatNumber(diff)} ${this.baseUnit?.symbol}`
    },

    showStockWarning() {
      if (!this.selectedProduct || this.formData.newQuantity === null) return false
      
      // Show warning for large adjustments (>20%) or when going below minimum stock
      return this.adjustmentPercentage > 20 || 
             this.formData.newQuantity < (this.selectedProduct.minStock || 0)
    },

    getStockWarningMessage() {
      if (this.adjustmentPercentage > 20) {
        return `Large adjustment detected: ${this.adjustmentPercentage.toFixed(1)}% change. Please verify the new quantity.`
      }
      
      if (this.formData.newQuantity < (this.selectedProduct.minStock || 0)) {
        return `New quantity is below minimum stock level (${this.selectedProduct.minStock || 0}).`
      }
      
      return ''
    },

    async saveStockAdjustment() {
      if (!this.$refs.adjustForm.validate()) return

      const data = {
        productId: this.selectedProduct.id,
        newQuantity: this.formData.newQuantity,
        reason: this.formData.reason,
        notes: this.formData.notes,
        
        // Additional data for backend
        currentQuantity: this.selectedProduct.stock_count || 0,
        adjustment: this.stockDifference,
        adjustmentType: this.getAdjustmentDirection(),
        baseUnitId: this.selectedProduct.baseUnitId || this.selectedProduct.stockUnitId
      }

      this.$emit('save', data)
    },

    closeDialog() {
      this.$emit('close')
      this.$emit('update:dialog', false)
    },

    formatNumber(amount) {
      const num = parseFloat(amount || 0)
      return num.toLocaleString('en-US', {
        minimumFractionDigits: num % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 4
      })
    }
  }
}
</script>

<style scoped>
.dialog-title {
  color: white;
  font-weight: 600;
}

.adjustment-summary {
  font-size: 0.875rem;
}

.v-alert.v-alert--dense {
  padding-top: 4px;
  padding-bottom: 4px;
}

/* Make sure the dialog content doesn't overflow */
.v-dialog__content {
  align-items: flex-start;
  padding-top: 48px;
}

@media (max-width: 768px) {
  .v-dialog {
    margin: 16px;
  }
  
  .adjustment-summary .d-flex {
    flex-direction: column;
    gap: 8px;
  }
  
  .adjustment-summary .d-flex > div {
    text-align: center;
  }
}
</style>