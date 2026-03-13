<!-- Updated StockIncreaseDialog.vue - Uses receiveUnitId as default -->
<template>
  <v-dialog v-model="localDialog" fullscreen persistent>
    <v-card>
      <v-card-title class="dialog-title success">
        <v-icon class="mr-2" color="white">mdi-plus-circle</v-icon>
        <span class="white--text">Increase Stock - {{ selectedProduct?.pro_name }}</span>
      </v-card-title>

      <v-form ref="increaseForm" v-model="formValid">
        <v-card-text>
          <v-row>
            <!-- Quantity and Unit Selection -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="formData.quantity"
                label="Quantity to Add*"
                type="number"
                min="0.01"
                step="0.01"
                :rules="[rules.required, rules.positiveNumber]"
                outlined
                prepend-inner-icon="mdi-plus"
                :suffix="selectedUnit?.symbol || 'units'"
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-autocomplete
                v-model="formData.unitId"
                :items="availableUnits"
                item-text="displayText"
                item-value="id"
                label="Unit*"
                :rules="[rules.required]"
                outlined
                prepend-inner-icon="mdi-scale-balance"
                placeholder="Select unit..."
                @change="onUnitChange"
              >
                <template v-slot:item="{ item }">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.name }}
                      <v-chip x-small color="primary" v-if="item.id === selectedProduct?.receiveUnitId">
                        RECEIVE
                      </v-chip>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.symbol }} 
                      <span v-if="item.conversionRate !== 1">
                        (1 {{ item.symbol }} = {{ item.conversionRate }} {{ item.baseUnit?.symbol }})
                      </span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <!-- Cost per Unit -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="formData.costPerUnit"
                label="Cost per Unit"
                type="number"
                min="0"
                step="0.01"
                outlined
                prepend-inner-icon="mdi-currency-usd"
                :prefix="currencySymbol"
                :hint="`Cost per ${selectedUnit?.symbol || 'unit'}`"
                persistent-hint
              ></v-text-field>
            </v-col>

            <!-- Conversion Info -->
            <v-col cols="12" md="6" v-if="showConversionInfo">
              <v-alert type="info" dense outlined class="ma-0">
                <div class="">
                  <strong>Base Unit Conversion:</strong><br>
                  {{ formData.quantity || 0 }} {{ selectedUnit?.symbol }} = 
                  {{ formatNumber(baseQuantityChange) }} {{ baseUnit?.symbol }}
                </div>
              </v-alert>
            </v-col>
          </v-row>

          <v-row>
            <!-- Supplier -->
            <v-col cols="12" md="6">
              <v-combobox
                v-model="formData.supplier"
                :items="recentSuppliers"
                label="Supplier/Vendor"
                outlined
                prepend-inner-icon="mdi-truck"
                placeholder="Supplier name..."
                clearable
              ></v-combobox>
            </v-col>

            <!-- Reference Number -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model="formData.referenceNumber"
                label="Reference/Invoice Number"
                outlined
                prepend-inner-icon="mdi-receipt"
                placeholder="Invoice or PO number..."
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <!-- Notes -->
            <v-col cols="12">
              <v-textarea
                v-model="formData.notes"
                label="Notes (Optional)"
                outlined
                rows="3"
                prepend-inner-icon="mdi-note-text"
                placeholder="Additional notes about this stock increase..."
              ></v-textarea>
            </v-col>
          </v-row>

          <!-- Stock Summary -->
          <v-alert v-if="formData.quantity && formData.costPerUnit" type="info" outlined>
            <div class="d-flex justify-space-between mb-2">
              <div>
                <strong>Current Stock:</strong> 
                {{ formatNumber(selectedProduct?.stock_count || 0) }} {{ baseUnit?.symbol }}
              </div>
              <div>
                <strong>After Increase:</strong> 
                {{ formatNumber((selectedProduct?.stock_count || 0) + baseQuantityChange) }} {{ baseUnit?.symbol }}
              </div>
            </div>
            <div class="d-flex justify-space-between">
              <div>
                <strong>Unit Cost:</strong> 
                {{ formatCurrency(formData.costPerUnit) }} per {{ selectedUnit?.symbol }}
              </div>
              <div>
                <strong>Total Cost:</strong> 
                {{ formatCurrency(totalCost) }}
              </div>
            </div>
            <div class="d-flex justify-space-between mt-2" v-if="baseQuantityChange !== formData.quantity">
              <div>
                <strong>Base Unit Cost:</strong> 
                {{ formatCurrency(baseUnitCost) }} per {{ baseUnit?.symbol }}
              </div>
              <div>
                <strong>Stock Value Increase:</strong> 
                {{ formatCurrency(stockValueIncrease) }}
              </div>
            </div>
          </v-alert>

          <!-- Unit Info Alert -->
          <v-alert v-if="selectedUnit" type="info" dense text class="mt-2">
            <v-icon small>mdi-information</v-icon>
            <span v-if="selectedUnit.id === selectedProduct?.receiveUnitId">
              <strong>Receive Unit:</strong> This is the standard unit for receiving {{ selectedProduct?.pro_name }}.
            </span>
            <span v-else-if="selectedUnit.id === selectedProduct?.stockUnitId">
              <strong>Stock Unit:</strong> This is the primary stock unit for {{ selectedProduct?.pro_name }}.
            </span>
            <span v-else-if="selectedUnit.id === selectedProduct?.baseUnitId">
              <strong>Base Unit:</strong> This is the base measurement unit for {{ selectedProduct?.pro_name }}.
            </span>
            <span v-else>
              <strong>Custom Unit:</strong> Using alternative unit for stock increase.
            </span>
          </v-alert>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeDialog">Cancel</v-btn>
          <v-btn
            color="success"
            :loading="saving"
            :disabled="!formValid"
            @click="saveStockIncrease"
          >
            <v-icon left>mdi-check</v-icon>
            Increase Stock
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'StockIncreaseDialog',
  
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
    },
    currencySymbol: {
      type: String,
      default: '$'
    }
  },

  data() {
    return {
      formValid: false,
      availableUnits: [],
      recentSuppliers: [],
      
      formData: {
        quantity: null,
        unitId: null,
        costPerUnit: null,
        supplier: '',
        referenceNumber: '',
        notes: ''
      },

      rules: {
        required: value => !!value || 'This field is required',
        positiveNumber: value => (value > 0) || 'Must be greater than 0',
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

    selectedUnit() {
      return this.availableUnits.find(unit => unit.id === this.formData.unitId)
    },

    baseUnit() {
      return this.availableUnits.find(unit => 
        unit.id === this.selectedProduct?.baseUnitId || 
        unit.id === this.selectedProduct?.stockUnitId
      )
    },

    showConversionInfo() {
      return this.selectedUnit && this.baseUnit && this.selectedUnit.id !== this.baseUnit.id
    },

    baseQuantityChange() {
      if (!this.formData.quantity || !this.selectedUnit) return 0
      return this.formData.quantity * (this.selectedUnit.conversionRate || 1)
    },

    totalCost() {
      return (this.formData.quantity || 0) * (this.formData.costPerUnit || 0)
    },

    baseUnitCost() {
      if (!this.selectedUnit || !this.formData.costPerUnit) return 0
      return this.formData.costPerUnit / (this.selectedUnit.conversionRate || 1)
    },

    stockValueIncrease() {
      return this.baseQuantityChange * this.baseUnitCost
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
    async initializeForm() {
      if (!this.selectedProduct) return
      console.info(`PRODUCT SELECTED ${JSON.stringify(this.selectedProduct)}`)
      // Reset form - PRIORITIZE receiveUnitId for stock increases
      this.formData = {
        quantity: null,
        // Priority order: receiveUnitId → stockUnitId → baseUnitId
        unitId: this.selectedProduct.unit.id || 
                this.selectedProduct.stockUnit.id || 
                this.selectedProduct.baseUnit.id,
        costPerUnit: this.selectedProduct.cost_price || this.selectedProduct.pro_price || null,
        supplier: '',
        referenceNumber: '',
        notes: ''
      }

      // Load units and suppliers
      await Promise.all([
        this.loadAvailableUnits(),
        this.loadRecentSuppliers()
      ])

      // Reset form validation
      this.$nextTick(() => {
        if (this.$refs.increaseForm) {
          this.$refs.increaseForm.resetValidation()
        }
      })
    },

    async loadAvailableUnits() {
      try {
        // Get units related to this product
        const response = await this.$axios.get(`/api/unit/find`, {
          params: {
            productId: this.selectedProduct.id,
            includeConversions: true
          }
        })
        
        const units = response.data.data || response.data || []
        
        // Format units with display text and conversion info
        this.availableUnits = units.map(unit => ({
          ...unit,
          displayText: `${unit.name} (${unit.symbol})`,
          conversionRate: unit.conversionRate || 1
        }))

        // Ensure all product units are included with proper labeling
        const productUnits = [
          { id: this.selectedProduct.unit.id, type: 'receive' },
          { id: this.selectedProduct.stockUnitId, type: 'stock' },
          { id: this.selectedProduct.baseUnitId, type: 'base' }
        ].filter(u => u.id) // Remove null/undefined ids

        for (const productUnit of productUnits) {
          if (!this.availableUnits.find(u => u.id === productUnit.id)) {
            // Add missing product units with appropriate labels
            const unitName = productUnit.type.charAt(0).toUpperCase() + productUnit.type.slice(1) + ' Unit'
            this.availableUnits.push({
              id: productUnit.id,
              name: unitName,
              symbol: 'units',
              displayText: `${unitName} (units)`,
              conversionRate: 1,
              isProductUnit: true,
              unitType: productUnit.type
            })
          }
        }

        // Sort units to prioritize receiveUnit first
        this.availableUnits.sort((a, b) => {
          if (a.id === this.selectedProduct.unit.id) return -1
          if (b.id === this.selectedProduct.unit.id) return 1
          if (a.id === this.selectedProduct.stockUnitId) return -1
          if (b.id === this.selectedProduct.stockUnitId) return 1
          if (a.id === this.selectedProduct.baseUnitId) return -1
          if (b.id === this.selectedProduct.baseUnitId) return 1
          return 0
        })

      } catch (error) {
        console.error('Error loading units:', error)
        
        // Fallback to product's units with proper priority
        this.availableUnits = []
        
        // Add receiveUnit first if it exists
        if (this.selectedProduct.unit.id) {
          this.availableUnits.push({
            id: this.selectedProduct.unit.id,
            name: 'Receive Unit',
            symbol: this.selectedProduct.receiveUnit?.symbol || 'units',
            displayText: `Receive Unit (${this.selectedProduct.receiveUnit?.symbol || 'units'})`,
            conversionRate: 1,
            isProductUnit: true,
            unitType: 'receive'
          })
        }
        
        // Add other units as fallback
        if (this.selectedProduct.stockUnitId && this.selectedProduct.stockUnitId !== this.selectedProduct.unit.id) {
          this.availableUnits.push({
            id: this.selectedProduct.stockUnitId,
            name: 'Stock Unit',
            symbol: this.selectedProduct.stockUnit?.symbol || 'units',
            displayText: `Stock Unit (${this.selectedProduct.stockUnit?.symbol || 'units'})`,
            conversionRate: 1,
            isProductUnit: true,
            unitType: 'stock'
          })
        }
      }
    },

    async loadRecentSuppliers() {
      try {
        const response = await this.$axios.get('/api/stock-transactions/recent-suppliers', {
          params: { limit: 10 }
        })
        this.recentSuppliers = response.data.data || response.data || []
      } catch (error) {
        console.error('Error loading recent suppliers:', error)
        this.recentSuppliers = []
      }
    },

    onUnitChange() {
      // Recalculate cost if needed
      if (this.showConversionInfo && this.formData.costPerUnit) {
        // Keep the cost per selected unit, system will handle conversion
      }
    },

    async saveStockIncrease() {
      if (!this.$refs.increaseForm.validate()) return

      const data = {
        productId: this.selectedProduct.id,
        quantity: this.formData.quantity,
        unitId: this.formData.unitId,
        costPerUnit: this.formData.costPerUnit,
        supplier: this.formData.supplier,
        referenceNumber: this.formData.referenceNumber,
        notes: this.formData.notes,
        
        // Additional data for backend calculation
        transactionUnitId: this.formData.unitId,
        baseUnitId: this.selectedProduct.baseUnitId || this.selectedProduct.stockUnitId,
        transactionRate: this.selectedUnit?.conversionRate || 1,
        baseQuantityChange: this.baseQuantityChange
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
    },

    formatCurrency(amount) {
      return parseFloat(amount || 0).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
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

.conversion-info {
  background-color: #e3f2fd;
  border-radius: 4px;
  padding: 8px;
  font-size: 0.875rem;
}

. {
  font-size: 0.75rem !important;
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
}
</style>