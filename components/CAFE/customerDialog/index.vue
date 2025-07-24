<template>
  <div>
    <!-- Customer Selection Dialog -->
    <v-dialog v-model="dialogVisible" max-width="800" persistent>
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left color="white">mdi-account-search</v-icon>
          Select Customer
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <!-- Customer Search -->
          <v-text-field
            v-model="customerSearchQuery"
            prepend-inner-icon="mdi-magnify"
            label="Search customers by name, company, phone..."
            variant="outlined"
            density="compact"
            clearable
            class="mb-4"
          />

          <!-- Quick Actions -->
          <div class="mb-4">
            <v-btn
              @click="showAddCustomerForm = true"
              color="success"
              class="mr-2"
            >
              <v-icon left>mdi-account-plus</v-icon>
              Add New Customer
            </v-btn>
            <v-btn @click="selectWalkInCustomer" color="info" outlined>
              <v-icon left>mdi-walk</v-icon>
              Walk-in Customer
            </v-btn>
          </div>

          <!-- Loading State -->
          <div v-if="loadingCustomers" class="text-center pa-4">
            <v-progress-circular
              size="48"
              color="primary"
              indeterminate
            ></v-progress-circular>
            <p class="mt-2">Loading customers...</p>
          </div>

          <!-- Customer List -->
          <div v-else style="max-height: 400px; overflow-y: auto">
            <v-card
              v-for="customer in filteredCustomers"
              :key="customer.id"
              @click="selectCustomer(customer)"
              class="mb-2 cursor-pointer customer-card"
              :class="{
                'selected-customer': tempSelectedCustomer?.id === customer.id,
              }"
              outlined
              hover
            >
              <v-card-text class="pa-3">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="font-weight-bold text-subtitle-1">
                      {{ customer.name }}
                    </div>
                    <div class="text-body-2 grey--text">
                      {{ customer.company || 'No company' }}
                    </div>
                    <div class="caption mt-1">
                      <span v-if="customer.email">
                        <v-icon x-small>mdi-email</v-icon>
                        {{ customer.email }}
                      </span>
                      <span v-if="customer.telephone" class="ml-2">
                        <v-icon x-small>mdi-phone</v-icon>
                        {{ customer.telephone }}
                      </span>
                    </div>
                  </div>
                  <div class="text-right">
                    <v-chip
                      :color="getGradeColor(customer.grade)"
                      text-color="white"
                      small
                      class="mb-1"
                    >
                      Grade {{ customer.grade }}
                    </v-chip>
                    <div class="caption">
                      Credit: {{ customer.credit }} days
                    </div>
                    <v-chip
                      v-if="!customer.isActive"
                      color="error"
                      text-color="white"
                      x-small
                    >
                      Inactive
                    </v-chip>
                  </div>
                </div>
              </v-card-text>
            </v-card>

            <!-- No customers found -->
            <div v-if="filteredCustomers.length === 0" class="text-center pa-4">
              <v-icon size="48" color="grey">mdi-account-search</v-icon>
              <p class="mt-2 grey--text">No customers found</p>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="closeDialog"> Cancel </v-btn>
          <v-btn
            color="primary"
            @click="confirmCustomerSelection"
            :disabled="!tempSelectedCustomer"
          >
            Select Customer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Add Customer Dialog -->
    <v-dialog v-model="showAddCustomerForm" max-width="600" persistent>
      <v-card>
        <v-card-title class="success white--text">
          <v-icon left color="white">mdi-account-plus</v-icon>
          Add New Customer
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="closeAddCustomerForm">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-form ref="customerForm" v-model="customerFormValid">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="newCustomer.name"
                  label="Customer Name *"
                  variant="outlined"
                  :rules="[rules.required]"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="newCustomer.company"
                  label="Company"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="newCustomer.email"
                  label="Email"
                  variant="outlined"
                  :rules="[rules.email]"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="newCustomer.telephone"
                  label="Phone"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="newCustomer.address"
                  label="Address"
                  variant="outlined"
                  rows="2"
                />
              </v-col>
              <v-col cols="4">
                <v-select
                  v-model="newCustomer.grade"
                  :items="gradeOptions"
                  label="Grade"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="newCustomer.credit"
                  label="Credit Days"
                  type="number"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="newCustomer.lateChargePercent"
                  label="Late Charge %"
                  type="number"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="closeAddCustomerForm">
            Cancel
          </v-btn>
          <v-btn
            color="success"
            @click="saveNewCustomer"
            :disabled="!customerFormValid"
            :loading="savingCustomer"
          >
            <v-icon left>mdi-content-save</v-icon>
            Save Customer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'CustomerDialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    customers: {
      type: Array,
      default: () => [],
    },
    selectedCustomer: {
      type: Object,
      default: null,
    },
    loadingCustomers: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      tempSelectedCustomer: null,
      customerSearchQuery: '',
      showAddCustomerForm: false,
      savingCustomer: false,
      customerFormValid: false,
      newCustomer: {
        name: '',
        company: '',
        email: '',
        address: '',
        telephone: '',
        credit: 30,
        lateChargePercent: 0,
        grade: 'A',
        isActive: true,
      },
      rules: {
        required: (value) => !!value || 'This field is required',
        email: (value) => {
          if (!value) return true
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          return pattern.test(value) || 'Invalid email format'
        },
      },
      gradeOptions: ['A', 'B', 'C', 'D', 'E', 'F'],
    }
  },

  computed: {
    dialogVisible: {
      get() {
        return this.show
      },
      set(value) {
        if (!value) {
          this.closeDialog()
        }
      },
    },

    filteredCustomers() {
      if (!this.customerSearchQuery) {
        return this.customers.filter((customer) => customer.isActive)
      }

      const searchTerm = this.customerSearchQuery.toLowerCase()
      return this.customers.filter(
        (customer) =>
          customer.isActive &&
          (customer.name.toLowerCase().includes(searchTerm) ||
            customer.company?.toLowerCase().includes(searchTerm) ||
            customer.email?.toLowerCase().includes(searchTerm) ||
            customer.telephone?.includes(searchTerm))
      )
    },
  },

  watch: {
    show(newVal) {
      if (!newVal) {
        this.tempSelectedCustomer = null
        this.customerSearchQuery = ''
      }
    },
  },

  methods: {
    selectCustomer(customer) {
      this.tempSelectedCustomer = customer
    },

    confirmCustomerSelection() {
      this.$emit('customer-selected', this.tempSelectedCustomer)
      this.closeDialog()
    },

    selectWalkInCustomer() {
      this.$emit('walk-in-selected')
      this.closeDialog()
    },

    closeDialog() {
      this.tempSelectedCustomer = null
      this.customerSearchQuery = ''
      this.$emit('close')
    },

    closeAddCustomerForm() {
      this.showAddCustomerForm = false
      this.resetNewCustomerForm()
    },

    resetNewCustomerForm() {
      this.newCustomer = {
        name: '',
        company: '',
        email: '',
        address: '',
        telephone: '',
        credit: 30,
        lateChargePercent: 0,
        grade: 'A',
        isActive: true,
      }
      this.customerFormValid = false
      if (this.$refs.customerForm) {
        this.$refs.customerForm.resetValidation()
      }
    },

    async saveNewCustomer() {
      if (!this.customerFormValid) {
        this.$emit('show-message', 'Please fill in all required fields', 'warning', 'mdi-alert')
        return
      }

      this.savingCustomer = true
      
      const customerData = {
        name: this.newCustomer.name.trim(),
        company: this.newCustomer.company?.trim() || null,
        email: this.newCustomer.email?.trim() || null,
        address: this.newCustomer.address?.trim() || null,
        telephone: this.newCustomer.telephone?.trim() || null,
        credit: parseInt(this.newCustomer.credit) || 30,
        lateChargePercent: parseFloat(this.newCustomer.lateChargePercent) || 0,
        grade: this.newCustomer.grade,
        isActive: true,
      }

      try {
        this.$emit('save-customer', customerData)
      } finally {
        this.savingCustomer = false
      }
    },

    onCustomerSaved() {
      this.closeAddCustomerForm()
      this.closeDialog()
    },

    getGradeColor(grade) {
      const colors = {
        A: 'success',
        B: 'info',
        C: 'warning',
        D: 'orange',
        E: 'deep-orange',
        F: 'error',
      }
      return colors[grade] || 'grey'
    },
  },
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.customer-card {
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.customer-card:hover {
  transform: translateY(-1px);
  border-color: rgba(25, 118, 210, 0.3);
}

.selected-customer {
  border-color: #1976d2 !important;
  background-color: rgba(25, 118, 210, 0.1);
}
</style>