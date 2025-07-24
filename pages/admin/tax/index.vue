<template>
  <v-container fluid class="pa-4">
    <!-- Page Header -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-4" elevation="2">
          <v-card-title class="primary white--text">
            <v-icon left color="white">mdi-percent</v-icon>
            Tax Rate Management
            <v-spacer></v-spacer>
            <v-chip color="white" text-color="primary" class="mr-2">
              <v-icon left small>mdi-calculator</v-icon>
              {{ stats.activeRatesCount }} Active Rates
            </v-chip>
            <v-btn color="white" text @click="refreshData" :loading="loading">
              <v-icon left>mdi-refresh</v-icon>
              Refresh
            </v-btn>
          </v-card-title>

          <!-- Statistics Cards -->
          <v-card-text class="pb-2">
            <v-row>
              <v-col cols="6" md="3">
                <v-card outlined class="text-center pa-3">
                  <div class="text-h4 primary--text font-weight-bold">
                    {{ stats.totalRates }}
                  </div>
                  <div class="text-subtitle-2 grey--text">Total Rates</div>
                </v-card>
              </v-col>
              <v-col cols="6" md="3">
                <v-card outlined class="text-center pa-3">
                  <div class="text-h4 success--text font-weight-bold">
                    {{ stats.activeRates }}
                  </div>
                  <div class="text-subtitle-2 grey--text">Active Rates</div>
                </v-card>
              </v-col>
              <v-col cols="6" md="3">
                <v-card outlined class="text-center pa-3">
                  <div class="text-h4 warning--text font-weight-bold">
                    {{ stats.expiringRates }}
                  </div>
                  <div class="text-subtitle-2 grey--text">Expiring Soon</div>
                </v-card>
              </v-col>
              <v-col cols="6" md="3">
                <v-card
                  outlined
                  class="text-center pa-3"
                  v-if="stats.defaultRate"
                >
                  <div class="text-h6 info--text font-weight-bold">
                    {{ stats.defaultRate.displayRate }}
                  </div>
                  <div class="text-subtitle-2 grey--text">Default Rate</div>
                  <div class="caption">{{ stats.defaultRate.name }}</div>
                </v-card>
                <v-card outlined class="text-center pa-3" v-else>
                  <div class="text-h6 error--text font-weight-bold">None</div>
                  <div class="text-subtitle-2 grey--text">No Default</div>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tax Rates Management -->
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title>
            <span class="text-h6">Tax Rates</span>
            <v-spacer></v-spacer>

            <!-- Search and Filters -->
            <div class="d-flex align-center" style="max-width: 600px">
              <v-text-field
                v-model="searchQuery"
                prepend-inner-icon="mdi-magnify"
                label="Search tax rates..."
                dense
                outlined
                clearable
                hide-details
                class="mr-2"
                style="max-width: 250px"
                @input="debouncedSearch"
              />

              <v-select
                v-model="statusFilter"
                :items="statusOptions"
                label="Status"
                dense
                outlined
                clearable
                hide-details
                class="mr-2"
                style="max-width: 120px"
                @change="loadTaxRates"
              />

              <v-menu
                ref="dateMenu"
                v-model="dateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="filterDate"
                    label="Filter Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    dense
                    outlined
                    hide-details
                    class="mr-2"
                    style="max-width: 150px"
                    v-bind="attrs"
                    v-on="on"
                    @change="loadTaxRates"
                  />
                </template>
                <v-date-picker
                  v-model="filterDate"
                  @input="
                    dateMenu = false
                    loadTaxRates()
                  "
                />
              </v-menu>
            </div>

            <v-btn color="primary" @click="openCreateDialog" class="ml-2">
              <v-icon left>mdi-plus</v-icon>
              Add Tax Rate
            </v-btn>
          </v-card-title>

          <!-- Loading State -->
          <div v-if="loading" class="text-center pa-8">
            <v-progress-circular
              size="64"
              color="primary"
              indeterminate
            ></v-progress-circular>
            <p class="mt-4 text-h6">Loading tax rates...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="text-center pa-8">
            <v-icon size="64" color="error">mdi-alert-circle</v-icon>
            <p class="mt-4 text-h6 error--text">{{ error }}</p>
            <v-btn color="primary" @click="loadTaxRates">
              <v-icon left>mdi-refresh</v-icon>
              Try Again
            </v-btn>
          </div>

          <!-- Tax Rates Table -->
          <div v-else>
            <v-data-table
              :headers="headers"
              :items="taxRates"
              :items-per-page="itemsPerPage"
              :page.sync="currentPage"
              :server-items-length="totalItems"
              :loading="tableLoading"
              class="elevation-0"
              @update:page="handlePageChange"
              @update:items-per-page="handleItemsPerPageChange"
            >
              <!-- Custom slot for tax rate display -->
              <template v-slot:item.displayRate="{ item }">
                <v-chip
                  :color="item.isDefault ? 'primary' : 'default'"
                  :text-color="item.isDefault ? 'white' : 'black'"
                  small
                  class="font-weight-bold"
                >
                  {{ item.displayRate }}
                  <v-icon v-if="item.isDefault" right small>mdi-star</v-icon>
                </v-chip>
              </template>

              <!-- Custom slot for status -->
              <template v-slot:item.isActive="{ item }">
                <v-chip
                  :color="item.isActive ? 'success' : 'error'"
                  text-color="white"
                  small
                >
                  <v-icon left small>
                    {{
                      item.isActive ? 'mdi-check-circle' : 'mdi-close-circle'
                    }}
                  </v-icon>
                  {{ item.isActive ? 'Active' : 'Inactive' }}
                </v-chip>
              </template>

              <!-- Custom slot for effective dates -->
              <template v-slot:item.effectiveFrom="{ item }">
                <div>
                  <div class="text-body-2">
                    {{ formatDate(item.effectiveFrom) }}
                  </div>
                  <div v-if="item.effectiveTo" class="caption grey--text">
                    Until: {{ formatDate(item.effectiveTo) }}
                  </div>
                  <div v-else class="caption success--text">Permanent</div>
                </div>
              </template>

              <!-- Custom slot for validity -->
              <template v-slot:item.isValidForDate="{ item }">
                <v-icon
                  :color="item.isValidForDate ? 'success' : 'warning'"
                  :title="
                    item.isValidForDate
                      ? 'Valid for current date'
                      : 'Not valid for current date'
                  "
                >
                  {{
                    item.isValidForDate ? 'mdi-check-circle' : 'mdi-clock-alert'
                  }}
                </v-icon>
                <span
                  v-if="item.daysUntilExpiry && item.daysUntilExpiry <= 30"
                  class="caption warning--text ml-1"
                >
                  {{ item.daysUntilExpiry }} days left
                </span>
              </template>

              <!-- Actions slot -->
              <template v-slot:item.actions="{ item }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="editTaxRate(item)"
                      icon
                      small
                      color="primary"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon small>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span>Edit Tax Rate</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="setDefaultRate(item)"
                      icon
                      small
                      :color="item.isDefault ? 'warning' : 'grey'"
                      :disabled="item.isDefault || !item.isActive"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon small>mdi-star</v-icon>
                    </v-btn>
                  </template>
                  <span>{{
                    item.isDefault ? 'Already Default' : 'Set as Default'
                  }}</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="toggleActiveStatus(item)"
                      icon
                      small
                      :color="item.isActive ? 'error' : 'success'"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon small>
                        {{ item.isActive ? 'mdi-eye-off' : 'mdi-eye' }}
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>{{ item.isActive ? 'Deactivate' : 'Activate' }}</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="deleteTaxRate(item)"
                      icon
                      small
                      color="error"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon small>mdi-delete</v-icon>
                    </v-btn>
                  </template>
                  <span>Delete Tax Rate</span>
                </v-tooltip>
              </template>

              <!-- No data slot -->
              <template v-slot:no-data>
                <div class="text-center pa-8">
                  <v-icon size="64" color="grey">mdi-percent-outline</v-icon>
                  <p class="mt-4 text-h6 grey--text">No tax rates found</p>
                  <p class="grey--text">
                    Create your first tax rate to get started
                  </p>
                  <v-btn color="primary" @click="openCreateDialog">
                    <v-icon left>mdi-plus</v-icon>
                    Add Tax Rate
                  </v-btn>
                </div>
              </template>
            </v-data-table>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tax Rate Dialog (Create/Edit) -->
    <v-dialog v-model="showTaxDialog" max-width="700" persistent>
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left color="white">
            {{ editingTaxRate ? 'mdi-pencil' : 'mdi-plus' }}
          </v-icon>
          {{ editingTaxRate ? 'Edit Tax Rate' : 'Create New Tax Rate' }}
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="closeTaxDialog" :disabled="saving">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-6">
          <v-form ref="taxForm" v-model="formValid" lazy-validation>
            <v-row>
              <!-- Basic Information -->
              <v-col cols="12">
                <div class="text-h6 mb-3">Basic Information</div>
              </v-col>

              <v-col cols="12" md="8">
                <v-text-field
                  v-model="formData.name"
                  label="Tax Rate Name *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  prepend-inner-icon="mdi-tag"
                  hint="e.g., Standard VAT, Reduced VAT"
                  persistent-hint
                />
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="formData.code"
                  label="Tax Code *"
                  :rules="[rules.required, rules.code]"
                  outlined
                  dense
                  style="text-transform: uppercase"
                  prepend-inner-icon="mdi-identifier"
                  hint="e.g., STANDARD, REDUCED"
                  persistent-hint
                  @input="formData.code = $event.toUpperCase()"
                />
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="formData.description"
                  label="Description"
                  outlined
                  dense
                  rows="2"
                  prepend-inner-icon="mdi-text"
                  hint="Optional description for this tax rate"
                  persistent-hint
                />
              </v-col>

              <!-- Tax Rate Configuration -->
              <v-col cols="12">
                <div class="text-h6 mb-3 mt-2">Tax Rate Configuration</div>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.rate"
                  label="Tax Rate (Decimal) *"
                  type="number"
                  step="0.0001"
                  min="0"
                  max="1"
                  :rules="[rules.required, rules.rate]"
                  outlined
                  dense
                  prepend-inner-icon="mdi-calculator"
                  hint="Enter as decimal (e.g., 0.085 for 8.5%)"
                  persistent-hint
                  @input="updateDisplayRate"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  :value="displayPercentage"
                  label="Percentage Display"
                  outlined
                  dense
                  readonly
                  prepend-inner-icon="mdi-percent"
                  hint="Calculated percentage"
                  persistent-hint
                />
              </v-col>

              <!-- Effective Dates -->
              <v-col cols="12">
                <div class="text-h6 mb-3 mt-2">Effective Period</div>
              </v-col>

              <v-col cols="12" md="6">
                <v-menu
                  ref="effectiveFromMenu"
                  v-model="effectiveFromMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="formData.effectiveFrom"
                      label="Effective From *"
                      prepend-inner-icon="mdi-calendar-start"
                      readonly
                      outlined
                      dense
                      :rules="[rules.required]"
                      hint="When this rate becomes active"
                      persistent-hint
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="formData.effectiveFrom"
                    @input="effectiveFromMenu = false"
                  />
                </v-menu>
              </v-col>

              <v-col cols="12" md="6">
                <v-menu
                  ref="effectiveToMenu"
                  v-model="effectiveToMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="formData.effectiveTo"
                      label="Effective To (Optional)"
                      prepend-inner-icon="mdi-calendar-end"
                      readonly
                      outlined
                      dense
                      clearable
                      hint="Leave empty for permanent rate"
                      persistent-hint
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="formData.effectiveTo"
                    @input="effectiveToMenu = false"
                    :min="formData.effectiveFrom"
                  />
                </v-menu>
              </v-col>

              <!-- Status Settings -->
              <v-col cols="12">
                <div class="text-h6 mb-3 mt-2">Status Settings</div>
              </v-col>

              <v-col cols="12" md="6">
                <v-switch
                  v-model="formData.isActive"
                  label="Active"
                  color="success"
                  inset
                  hint="Whether this tax rate is currently active"
                  persistent-hint
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-switch
                  v-model="formData.isDefault"
                  label="Set as Default Rate"
                  color="primary"
                  inset
                  hint="This will become the default tax rate"
                  persistent-hint
                />
              </v-col>

              <!-- Preview Section -->
              <v-col cols="12" v-if="formData.rate">
                <v-card outlined color="grey lighten-5">
                  <v-card-title class="text-subtitle-1">
                    <v-icon left>mdi-eye</v-icon>
                    Preview
                  </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="6">
                        <div class="text-body-2">Tax Rate:</div>
                        <div class="text-h6 primary--text">
                          {{ displayPercentage }}
                        </div>
                      </v-col>
                      <v-col cols="6">
                        <div class="text-body-2">Example (₭100.00):</div>
                        <div class="text-body-1">
                          Tax: ₭{{ calculateExampleTax(100, formData.rate) }}
                        </div>
                        <div class="text-body-1">
                          Total: ₭{{
                            calculateExampleTotal(100, formData.rate)
                          }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="closeTaxDialog" :disabled="saving">
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="saveTaxRate"
            :disabled="!formValid"
            :loading="saving"
          >
            <v-icon left>mdi-content-save</v-icon>
            {{ editingTaxRate ? 'Update' : 'Create' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Confirmation Dialog -->
    <v-dialog v-model="showConfirmDialog" max-width="500" persistent>
      <v-card>
        <v-card-title :class="`${confirmDialog.color} white--text`">
          <v-icon left color="white">{{ confirmDialog.icon }}</v-icon>
          {{ confirmDialog.title }}
        </v-card-title>

        <v-card-text class="pa-6">
          <div class="text-body-1">{{ confirmDialog.message }}</div>
          <div v-if="confirmDialog.details" class="mt-3">
            <v-alert :type="confirmDialog.alertType || 'info'" dense outlined>
              {{ confirmDialog.details }}
            </v-alert>
          </div>
        </v-card-text>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="confirmDialog.onCancel">
            {{ confirmDialog.cancelText || 'Cancel' }}
          </v-btn>
          <v-btn
            :color="confirmDialog.color"
            @click="confirmDialog.onConfirm"
            :loading="confirmDialog.loading"
          >
            <v-icon left>{{ confirmDialog.confirmIcon || 'mdi-check' }}</v-icon>
            {{ confirmDialog.confirmText || 'Confirm' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar for notifications -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
      top
      right
    >
      <div class="d-flex align-center">
        <v-icon class="mr-2" color="white">{{ snackbar.icon }}</v-icon>
        {{ snackbar.message }}
      </div>
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
import { debounce } from 'lodash'

export default {
  name: 'TaxSummaryScreen',

  head() {
    return {
      title: 'Tax Rate Management',
    }
  },

  data() {
    return {
      // Table and data
      taxRates: [],
      loading: true,
      tableLoading: false,
      error: null,

      // Search and filters
      searchQuery: '',
      statusFilter: '',
      filterDate: new Date().toISOString().split('T')[0],
      dateMenu: false,

      // Pagination
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,

      // Statistics
      stats: {
        totalRates: 0,
        activeRates: 0,
        activeRatesCount: 0,
        expiringRates: 0,
        defaultRate: null,
      },

      // Dialog states
      showTaxDialog: false,
      showConfirmDialog: false,
      editingTaxRate: null,

      // Form data
      formValid: false,
      saving: false,
      formData: {
        name: '',
        code: '',
        rate: '',
        description: '',
        effectiveFrom: new Date().toISOString().split('T')[0],
        effectiveTo: '',
        isActive: true,
        isDefault: false,
      },

      // Date menus
      effectiveFromMenu: false,
      effectiveToMenu: false,

      // Computed display
      displayPercentage: '0.00%',

      // Snackbar
      snackbar: {
        show: false,
        message: '',
        color: 'success',
        icon: 'mdi-check',
        timeout: 4000,
      },

      // Confirmation dialog
      confirmDialog: {
        title: '',
        message: '',
        details: '',
        color: 'primary',
        icon: 'mdi-help',
        alertType: 'info',
        cancelText: 'Cancel',
        confirmText: 'Confirm',
        confirmIcon: 'mdi-check',
        onConfirm: () => {},
        onCancel: () => {
          this.showConfirmDialog = false
        },
        loading: false,
      },

      // Table headers
      headers: [
        { text: 'Name', value: 'name', sortable: true },
        { text: 'Code', value: 'code', sortable: true },
        { text: 'Rate', value: 'displayRate', sortable: false },
        { text: 'Status', value: 'isActive', sortable: true },
        { text: 'Effective Period', value: 'effectiveFrom', sortable: true },
        { text: 'Valid', value: 'isValidForDate', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false, width: '180px' },
      ],

      // Filter options
      statusOptions: [
        { text: 'All', value: '' },
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' },
      ],

      // ✅ FIXED: Moved validation rules to computed to access 'this'
    }
  },

  computed: {
    debouncedSearch() {
      return debounce(this.loadTaxRates, 500)
    },

    // ✅ FIXED: Validation rules as computed property to access formData
    rules() {
      return {
        required: (value) => !!value || 'This field is required',
        code: (value) => {
          if (!value) return 'Code is required'
          if (value.length < 2) return 'Code must be at least 2 characters'
          if (value.length > 20) return 'Code must be less than 20 characters'
          if (!/^[A-Z0-9_]+$/.test(value))
            return 'Code can only contain uppercase letters, numbers, and underscores'
          return true
        },
        rate: (value) => {
          if (!value && value !== 0) return 'Rate is required'
          const num = parseFloat(value)
          if (isNaN(num)) return 'Rate must be a valid number'
          if (num < 0) return 'Rate cannot be negative'
          if (num > 1) return 'Rate cannot exceed 1 (100%)'
          return true
        },
        // ✅ Add date validation rule
        dateOptional: (value) => {
          if (!value || value === '') return true // Optional field
          const date = new Date(value)
          if (isNaN(date.getTime())) return 'Please enter a valid date'
          return true
        },
        // ✅ Add validation for effectiveTo being after effectiveFrom
        effectiveToAfterFrom: (value) => {
          if (!value || value === '') return true // Optional field
          if (!this.formData.effectiveFrom) return true // Can't validate without effectiveFrom

          const fromDate = new Date(this.formData.effectiveFrom)
          const toDate = new Date(value)

          if (toDate <= fromDate) {
            return 'Effective to date must be after effective from date'
          }
          return true
        },
      }
    }
  },

  async mounted() {
    await this.loadTaxRates()
    await this.loadStatistics()
  },

  methods: {
    // Data loading methods
    async loadTaxRates() {
      this.tableLoading = true
      this.error = null

      try {
        const params = {
          page: this.currentPage,
          limit: this.itemsPerPage,
          search: this.searchQuery,
          active:
            this.statusFilter === 'active'
              ? 'true'
              : this.statusFilter === 'inactive'
              ? 'false'
              : undefined,
          includeInactive: this.statusFilter === 'inactive' ? 'true' : 'true',
          date: this.filterDate,
        }

        // Remove empty params
        Object.keys(params).forEach((key) => {
          if (params[key] === undefined || params[key] === '') {
            delete params[key]
          }
        })

        const response = await this.$axios.get('/api/tax', { params })

        this.taxRates = response.data.data || []

        if (response.data.pagination) {
          this.totalItems = response.data.pagination.total
          this.currentPage = response.data.pagination.page
        }

        if (response.data.meta) {
          this.stats.activeRatesCount = response.data.meta.activeRatesCount || 0
        }
      } catch (error) {
        console.error('Error loading tax rates:', error)
        this.error = error.response?.data?.message || 'Failed to load tax rates'
        this.showNotification('Failed to load tax rates', 'error', 'mdi-alert')
      } finally {
        this.tableLoading = false
        this.loading = false
      }
    },

    async loadStatistics() {
      try {
        const response = await this.$axios.get('/api/tax/statistics')
        this.stats = { ...this.stats, ...response.data.data }
      } catch (error) {
        console.error('Error loading statistics:', error)
      }
    },

    async refreshData() {
      this.loading = true
      await Promise.all([this.loadTaxRates(), this.loadStatistics()])
      this.showNotification('Data refreshed successfully', 'success', 'mdi-refresh')
    },

    // Dialog methods
    openCreateDialog() {
      this.editingTaxRate = null
      this.resetForm()
      this.showTaxDialog = true
    },

    editTaxRate(taxRate) {
      this.editingTaxRate = taxRate
      this.formData = {
        name: taxRate.name,
        code: taxRate.code,
        rate: taxRate.rate,
        description: taxRate.description || '',
        effectiveFrom: taxRate.effectiveFrom,
        // ✅ Convert null to empty string for form display
        effectiveTo: taxRate.effectiveTo || '',
        isActive: taxRate.isActive,
        isDefault: taxRate.isDefault,
      }
      this.updateDisplayRate()
      this.showTaxDialog = true
    },

    closeTaxDialog() {
      this.showTaxDialog = false
      this.editingTaxRate = null
      this.resetForm()
    },

    resetForm() {
      this.formData = {
        name: '',
        code: '',
        rate: '',
        description: '',
        effectiveFrom: new Date().toISOString().split('T')[0],
        effectiveTo: '', // This will be converted to null when saving
        isActive: true,
        isDefault: false,
      }
      this.displayPercentage = '0.00%'
      this.formValid = false
      if (this.$refs.taxForm) {
        this.$refs.taxForm.resetValidation()
      }
    },

    // CRUD operations
    async saveTaxRate() {
      if (!this.$refs.taxForm.validate()) {
        this.showNotification('Please fix validation errors', 'error', 'mdi-alert')
        return
      }

      this.saving = true

      try {
        // ✅ Prepare tax data with proper date handling
        const taxData = {
          name: this.formData.name.trim(),
          code: this.formData.code.toUpperCase().trim(),
          rate: parseFloat(this.formData.rate),
          description: this.formData.description ? this.formData.description.trim() : null,
          isActive: this.formData.isActive,
          isDefault: this.formData.isDefault,
          effectiveFrom: this.formData.effectiveFrom,
          // ✅ IMPORTANT: Send null instead of empty string for effectiveTo
          effectiveTo:
            this.formData.effectiveTo && this.formData.effectiveTo.trim() !== ''
              ? this.formData.effectiveTo
              : null,
        }

        console.log('Sending tax data:', taxData) // Debug log

        let response
        if (this.editingTaxRate) {
          response = await this.$axios.put(`/api/tax/${this.editingTaxRate.id}`, taxData)
          this.showNotification('Tax rate updated successfully', 'success', 'mdi-check')
        } else {
          response = await this.$axios.post('/api/tax', taxData)
          this.showNotification('Tax rate created successfully', 'success', 'mdi-check')
        }

        this.closeTaxDialog()
        await this.loadTaxRates()
        await this.loadStatistics()
      } catch (error) {
        console.error('Error saving tax rate:', error)
        console.error('Error response:', error.response?.data) // More detailed logging

        if (error.response?.data?.errors) {
          const errorMessages = error.response.data.errors
            .map((err) => `${err.field}: ${err.message}`)
            .join('\n')
          this.showNotification(`Validation Error:\n${errorMessages}`, 'error', 'mdi-alert')
        } else {
          this.showNotification(
            error.response?.data?.message || 'Failed to save tax rate',
            'error',
            'mdi-alert'
          )
        }
      } finally {
        this.saving = false
      }
    },

    async setDefaultRate(taxRate) {
      this.confirmDialog = {
        title: 'Set Default Tax Rate',
        message: `Are you sure you want to set "${taxRate.name}" as the default tax rate?`,
        details: 'This will unset any existing default tax rate.',
        color: 'primary',
        icon: 'mdi-star',
        alertType: 'info',
        confirmText: 'Set Default',
        confirmIcon: 'mdi-star',
        onConfirm: async () => {
          this.confirmDialog.loading = true
          try {
            await this.$axios.patch(`/api/tax/${taxRate.id}/default`)
            this.showNotification(
              `"${taxRate.name}" is now the default tax rate`,
              'success',
              'mdi-star'
            )
            await this.loadTaxRates()
            await this.loadStatistics()
          } catch (error) {
            console.error('Error setting default:', error)
            this.showNotification(
              error.response?.data?.message || 'Failed to set default tax rate',
              'error',
              'mdi-alert'
            )
          } finally {
            this.confirmDialog.loading = false
            this.showConfirmDialog = false
          }
        },
        onCancel: () => {
          this.showConfirmDialog = false
        },
      }
      this.showConfirmDialog = true
    },

    async toggleActiveStatus(taxRate) {
      const action = taxRate.isActive ? 'deactivate' : 'activate'
      const actionText = taxRate.isActive ? 'Deactivate' : 'Activate'

      this.confirmDialog = {
        title: `${actionText} Tax Rate`,
        message: `Are you sure you want to ${action} "${taxRate.name}"?`,
        details: taxRate.isActive
          ? 'Deactivating this tax rate will make it unavailable for new transactions.'
          : 'Activating this tax rate will make it available for use.',
        color: taxRate.isActive ? 'warning' : 'success',
        icon: taxRate.isActive ? 'mdi-eye-off' : 'mdi-eye',
        alertType: taxRate.isActive ? 'warning' : 'success',
        confirmText: actionText,
        confirmIcon: taxRate.isActive ? 'mdi-eye-off' : 'mdi-eye',
        onConfirm: async () => {
          this.confirmDialog.loading = true
          try {
            await this.$axios.put(`/api/tax/${taxRate.id}`, {
              isActive: !taxRate.isActive,
            })
            this.showNotification(
              `Tax rate "${taxRate.name}" ${action}d successfully`,
              'success',
              'mdi-check'
            )
            await this.loadTaxRates()
            await this.loadStatistics()
          } catch (error) {
            console.error(`Error ${action}ing tax rate:`, error)
            this.showNotification(
              error.response?.data?.message || `Failed to ${action} tax rate`,
              'error',
              'mdi-alert'
            )
          } finally {
            this.confirmDialog.loading = false
            this.showConfirmDialog = false
          }
        },
        onCancel: () => {
          this.showConfirmDialog = false
        },
      }
      this.showConfirmDialog = true
    },

    async deleteTaxRate(taxRate) {
      this.confirmDialog = {
        title: 'Delete Tax Rate',
        message: `Are you sure you want to delete "${taxRate.name}"?`,
        details:
          'This action cannot be undone. The tax rate will be permanently removed from the system.',
        color: 'error',
        icon: 'mdi-delete',
        alertType: 'error',
        confirmText: 'Delete',
        confirmIcon: 'mdi-delete',
        onConfirm: async () => {
          this.confirmDialog.loading = true
          try {
            await this.$axios.delete(`/api/tax/${taxRate.id}`)
            this.showNotification(
              `Tax rate "${taxRate.name}" deleted successfully`,
              'success',
              'mdi-check'
            )
            await this.loadTaxRates()
            await this.loadStatistics()
          } catch (error) {
            console.error('Error deleting tax rate:', error)
            this.showNotification(
              error.response?.data?.message || 'Failed to delete tax rate',
              'error',
              'mdi-alert'
            )
          } finally {
            this.confirmDialog.loading = false
            this.showConfirmDialog = false
          }
        },
        onCancel: () => {
          this.showConfirmDialog = false
        },
      }
      this.showConfirmDialog = true
    },

    // Table event handlers
    handlePageChange(page) {
      this.currentPage = page
      this.loadTaxRates()
    },

    handleItemsPerPageChange(itemsPerPage) {
      this.itemsPerPage = itemsPerPage
      this.currentPage = 1
      this.loadTaxRates()
    },

    // Utility methods
    updateDisplayRate() {
      const rate = parseFloat(this.formData.rate) || 0
      this.displayPercentage = (rate * 100).toFixed(2) + '%'
    },

    calculateExampleTax(amount, rate) {
      const taxAmount = amount * parseFloat(rate)
      return taxAmount.toFixed(2)
    },

    calculateExampleTotal(amount, rate) {
      const taxAmount = amount * parseFloat(rate)
      return (amount + taxAmount).toFixed(2)
    },

    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    showNotification(message, color = 'success', icon = 'mdi-check') {
      this.snackbar = {
        show: true,
        message,
        color,
        icon,
        timeout: color === 'error' ? 6000 : 4000,
      }
    },
  },
}
</script>

<style scoped>
/* Custom styles for the tax management screen */
.v-data-table >>> .v-data-table__wrapper {
  overflow-x: auto;
}

.v-chip.font-weight-bold {
  font-weight: 600 !important;
}

.text-h6.mb-3 {
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 8px;
}

/* Form styling */
.v-text-field >>> .v-input__prepend-inner {
  margin-top: 8px;
}

.v-textarea >>> .v-input__prepend-inner {
  margin-top: 8px;
}

/* Dialog styling */
.v-dialog > .v-card > .v-card__title {
  position: sticky;
  top: 0;
  z-index: 1;
}

/* Statistics cards */
.v-card.outlined {
  transition: all 0.3s ease;
}

.v-card.outlined:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12) !important;
  transform: translateY(-2px);
}

/* Table row highlighting */
.v-data-table >>> tbody tr:hover {
  background-color: #f5f5f5 !important;
}

/* Action buttons styling */
.v-btn.v-size--small {
  min-width: 32px !important;
}

/* Preview card styling */
.v-card.outlined.grey.lighten-5 {
  border: 2px dashed #e0e0e0 !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .d-flex.align-center {
    flex-direction: column;
    align-items: stretch !important;
  }

  .d-flex.align-center > * {
    margin-bottom: 8px !important;
  }

  .v-data-table >>> .v-data-table__wrapper {
    font-size: 0.875rem;
  }
}

/* Loading state */
.v-progress-circular {
  margin: 1rem;
}

/* Error state */
.error--text {
  color: #f44336 !important;
}

/* Success state */
.success--text {
  color: #4caf50 !important;
}

/* Custom scrollbar for dialogs */
.v-dialog .v-card {
  max-height: 90vh;
  overflow-y: auto;
}

.v-dialog .v-card::-webkit-scrollbar {
  width: 6px;
}

.v-dialog .v-card::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.v-dialog .v-card::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.v-dialog .v-card::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>