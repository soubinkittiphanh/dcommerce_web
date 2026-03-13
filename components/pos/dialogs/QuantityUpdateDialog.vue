components/pos/dialogs/QuantityUpdateDialog.vue
<template>
  <v-dialog v-model="internalValue" max-width="400px" persistent>
    <v-card>
      <v-card-title class="text-h6 primary white--text">
        <v-icon left>mdi-counter</v-icon>
        ອັບເດດຈຳນວນ
      </v-card-title>
      
      <v-card-text class="pa-4">
        <v-text-field
          ref="quantityInput"
          v-model.number="quantity"
          label="ໃສ່ຈຳນວນໃໝ່"
          type="number"
          outlined
          dense
          autofocus
          :rules="quantityRules"
          :error-messages="errorMessages"
          @keyup.enter="handleUpdate"
          @keyup.esc="handleCancel"
        />
      </v-card-text>
      
      <v-card-actions class="pa-4">
        <v-spacer />
        <v-btn color="grey" text @click="handleCancel">
          ຍົກເລີກ
        </v-btn>
        <v-btn 
          color="primary" 
          @click="handleUpdate"
          :disabled="!isValidQuantity"
        >
          <v-icon left>mdi-check</v-icon>
          ບັນທຶກ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { VALIDATION_RULES } from '~/constants/pos'

export default {
  name: 'QuantityUpdateDialog',
  
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    currentQty: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      quantity: this.currentQty,
      quantityRules: VALIDATION_RULES.quantity,
      errorMessages: [],
    }
  },

  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },

    isValidQuantity() {
      return this.quantity > 0 && Number.isInteger(Number(this.quantity))
    },
  },

  watch: {
    value(newVal) {
      if (newVal) {
        this.quantity = this.currentQty
        this.errorMessages = []
        this.$nextTick(() => {
          if (this.$refs.quantityInput) {
            this.$refs.quantityInput.focus()
          }
        })
      }
    },

    currentQty(newVal) {
      if (newVal !== this.quantity) {
        this.quantity = newVal
      }
    },

    quantity(newVal) {
      this.validateQuantity(newVal)
    },
  },

  methods: {
    validateQuantity(value) {
      this.errorMessages = []
      if (!value || value <= 0) {
        this.errorMessages.push('ຈຳນວນຕ້ອງມາກກວ່າ 0')
      } else if (!Number.isInteger(Number(value))) {
        this.errorMessages.push('ຈຳນວນຕ້ອງເປັນຕົວເລກເຕັມ')
      }
    },

    handleUpdate() {
      if (this.isValidQuantity) {
        this.$emit('quantity-updated', Number(this.quantity))
        this.internalValue = false
      }
    },

    handleCancel() {
      this.quantity = this.currentQty
      this.errorMessages = []
      this.internalValue = false
    },
  },
}
</script>

<!-- components/pos/dialogs/TerminalSelectionDialog.vue -->
<template>
  <v-dialog v-model="internalValue" scrollable max-width="600" persistent>
    <v-card class="terminal-dialog">
      <v-card-title class="text-h5 primary white--text">
        <v-icon left>mdi-monitor</v-icon>
        ເລືອກ Terminal
      </v-card-title>
      
      <v-divider />
      
      <v-card-text class="pa-4" style="max-height: 400px">
        <v-radio-group v-model="selectedTerminal" class="mt-2">
          <v-card
            v-for="terminal in terminals"
            :key="terminal.id"
            class="mb-3 terminal-card"
            :class="{ 'selected': selectedTerminal === terminal.id }"
            @click="selectedTerminal = terminal.id"
            outlined
            hover
          >
            <v-card-text class="pa-3">
              <v-radio
                :value="terminal.id"
                :label="`${terminal.name} - ${terminal.description}`"
                color="primary"
              />
            </v-card-text>
          </v-card>
        </v-radio-group>
      </v-card-text>
      
      <v-divider />
      
      <v-card-actions class="pa-4">
        <v-spacer />
        <v-btn color="grey" text @click="handleCancel">
          ຍົກເລີກ
        </v-btn>
        <v-btn 
          color="primary" 
          @click="handleSelect"
          :disabled="!selectedTerminal"
        >
          <v-icon left>mdi-check</v-icon>
          ເລືອກ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'TerminalSelectionDialog',
  
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    terminals: {
      type: Array,
      default: () => [],
    },
    currentTerminal: {
      type: [Number, String],
      default: null,
    },
  },

  data() {
    return {
      selectedTerminal: this.currentTerminal,
    }
  },

  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },

  watch: {
    value(newVal) {
      if (newVal) {
        this.selectedTerminal = this.currentTerminal
      }
    },

    currentTerminal(newVal) {
      this.selectedTerminal = newVal
    },
  },

  methods: {
    handleSelect() {
      if (this.selectedTerminal) {
        this.$emit('terminal-selected', this.selectedTerminal)
        this.internalValue = false
      }
    },

    handleCancel() {
      this.selectedTerminal = this.currentTerminal
      this.internalValue = false
    },
  },
}
</script>

<style scoped>
.terminal-dialog .terminal-card {
  cursor: pointer;
  transition: all 0.2s ease;
}

.terminal-dialog .terminal-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.12);
}

.terminal-dialog .terminal-card.selected {
  border-color: var(--v-primary-base) !important;
  background-color: rgba(var(--v-primary-base), 0.05);
}
</style>

<!-- components/pos/dialogs/LoadingDialog.vue -->
<template>
  <v-dialog v-model="internalValue" hide-overlay persistent width="300">
    <v-card class="pa-4">
      <v-card-text class="text-center">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
          class="mb-3"
        />
        <div class="text-h6">{{ message }}</div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LoadingDialog',
  
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: 'ກຳລັງດຳເນີນການ...',
    },
  },

  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<!-- components/pos/dialogs/CustomerDialog.vue -->
<template>
  <v-dialog v-model="internalValue" max-width="1200" scrollable>
    <v-card>
      <v-card-title class="text-h5 primary white--text">
        <v-icon left>mdi-account-group</v-icon>
        ເລືອກລູກຄ້າ
        <v-spacer />
        <v-btn icon dark @click="internalValue = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      
      <v-card-text class="pa-0">
        <!-- Replace with your existing CustomerList component -->
        <customer-list @close-dialog="internalValue = false" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import CustomerList from '~/components/customer/CustomerList.vue'

export default {
  name: 'CustomerDialog',
  
  components: {
    CustomerList,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<!-- components/pos/dialogs/PricingDialog.vue -->
<template>
  <v-dialog v-model="internalValue" max-width="1200" scrollable>
    <v-card>
      <v-card-title class="text-h5 primary white--text">
        <v-icon left>mdi-currency-usd</v-icon>
        ຕັ້ງລາຄາສິນຄ້າ
        <v-spacer />
        <v-btn icon dark @click="internalValue = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      
      <v-card-text class="pa-0">
        <!-- Replace with your existing PricingOption component -->
        <pricing-option 
          :record-id="productId"
          @close-dialog="internalValue = false"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import PricingOption from '~/components/PricingOption.vue'

export default {
  name: 'PricingDialog',
  
  components: {
    PricingOption,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    productId: {
      type: [Number, String],
      default: null,
    },
  },

  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<!-- components/pos/dialogs/DeliveryDialog.vue -->
<template>
  <v-dialog v-model="internalValue" max-width="1200" persistent scrollable>
    <v-card>
      <v-card-title class="text-h5 primary white--text">
        <v-icon left>mdi-truck-delivery</v-icon>
        ຟອມຈັດສົ່ງ
        <v-spacer />
        <v-btn icon dark @click="handleClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      
      <v-card-text class="pa-0">
        <!-- Replace with your existing DeliveryForm component -->
        <delivery-form
          @post-transaction="handleTransaction"
          @close-dialog="handleClose"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import DeliveryForm from '~/components/DeliveryForm.vue'

export default {
  name: 'DeliveryDialog',
  
  components: {
    DeliveryForm,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },

  methods: {
    handleTransaction(payload) {
      this.$emit('transaction-posted', payload)
    },

    handleClose() {
      this.$emit('close')
      this.internalValue = false
    },
  },
}
</script>

<!-- components/pos/dialogs/QuotationDialog.vue -->
<template>
  <v-dialog v-model="internalValue" hide-overlay width="1200">
    <v-card>
      <v-card-title class="text-h5 primary white--text">
        <v-icon left>mdi-receipt-text</v-icon>
        ໃບສະເໜີລາຄາ
        <v-spacer />
        <v-btn icon dark @click="internalValue = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      
      <v-card-text class="pa-0">
        <!-- Replace with your existing Quotation component -->
        <quotation />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Quotation from '~/components/quotation'

export default {
  name: 'QuotationDialog',
  
  components: {
    Quotation,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>