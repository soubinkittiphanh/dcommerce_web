<template>
  <v-card>
    <v-card-title class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <v-icon class="mr-2" color="primary">mdi-tag-plus</v-icon>
        {{ mode === 'create' ? 'Create New Promotion' : 'Edit Promotion' }}
      </div>
      <v-btn text @click="handleClose">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-divider />

    <v-card-text class="pa-6">
      <v-form ref="form" v-model="valid" @submit.prevent="handleSave">
        <!-- Basic Information -->
        <div class="section-header">
          <v-icon class="mr-2" color="primary">mdi-information</v-icon>
          Basic Information
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="formData.name"
              label="Promotion Name *"
              :rules="nameRules"
              outlined
              placeholder="e.g., Buy 2 Get 1 Free Coffee"
              @blur="debugFieldValidation('name', formData.name)"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="formData.code"
              label="Promotion Code *"
              :rules="codeRules"
              outlined
              placeholder="e.g., B2G1COFFEE"
              @blur="debugFieldValidation('code', formData.code)"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="formData.description"
              label="Description"
              outlined
              rows="3"
              placeholder="Describe the promotion details..."
            />
          </v-col>
        </v-row>

        <!-- Promotion Type -->
        <div class="section-header">
          <v-icon class="mr-2" color="primary">mdi-tag</v-icon>
          Promotion Type
        </div>

        <v-row>
          <v-col cols="12">
            <v-autocomplete
              v-model="formData.type"
              label="Promotion Type *"
              :items="promotionTypes"
              item-text="title"
              item-value="value"
              :rules="typeRules"
              outlined
              clearable
              @input="onTypeChange"
              @blur="debugFieldValidation('type', formData.type)"
            >
              <template v-slot:selection="{ item }">
                <div class="d-flex align-center">
                  <v-icon :color="item.color" class="mr-2">{{
                    item.icon
                  }}</v-icon>
                  <span>{{ item.title }}</span>
                </div>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>

        <!-- Promotion Configuration -->
        <div v-if="formData.type" class="section-header">
          <v-icon class="mr-2" color="primary">mdi-cog</v-icon>
          Configuration
        </div>

        <!-- Buy X Get Y Configuration -->
        <div v-if="formData.type === 'buy_x_get_y'">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model.number="formData.conditions.buy_quantity"
                label="Buy Quantity *"
                type="number"
                :rules="buyQuantityRules"
                outlined
                min="1"
                @blur="
                  debugFieldValidation(
                    'buy_quantity',
                    formData.conditions.buy_quantity
                  )
                "
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model.number="formData.conditions.get_quantity"
                label="Get Quantity *"
                type="number"
                :rules="getQuantityRules"
                outlined
                min="1"
                @blur="
                  debugFieldValidation(
                    'get_quantity',
                    formData.conditions.get_quantity
                  )
                "
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model.number="formData.conditions.max_free_items"
                label="Max Free Items"
                type="number"
                outlined
                min="0"
                placeholder="Unlimited"
              />
            </v-col>
          </v-row>
        </div>

        <!-- Percentage Configuration -->
        <div v-else-if="formData.type === 'percentage'">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="formData.conditions.discount_percentage"
                label="Discount Percentage *"
                type="number"
                :rules="discountPercentageRules"
                outlined
                min="1"
                max="100"
                suffix="%"
                @blur="
                  debugFieldValidation(
                    'discount_percentage',
                    formData.conditions.discount_percentage
                  )
                "
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="formData.conditions.max_discount_amount"
                label="Max Discount Amount"
                type="number"
                outlined
                min="0"
                prefix="$"
                placeholder="No limit"
              />
            </v-col>
          </v-row>
        </div>

        <!-- Fixed Amount Configuration -->
        <div v-else-if="formData.type === 'fixed_amount'">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="formData.conditions.discount_amount"
                label="Discount Amount *"
                type="number"
                :rules="discountAmountRules"
                outlined
                min="0.01"
                step="0.01"
                prefix="$"
                @blur="
                  debugFieldValidation(
                    'discount_amount',
                    formData.conditions.discount_amount
                  )
                "
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="formData.conditions.minimum_order"
                label="Minimum Order Amount"
                type="number"
                outlined
                min="0"
                step="0.01"
                prefix="$"
                placeholder="No minimum"
              />
            </v-col>
          </v-row>
        </div>

        <!-- Applicable Items -->
        <div v-if="formData.type" class="section-header">
          <v-icon class="mr-2" color="primary">mdi-package-variant</v-icon>
          Applicable Items
        </div>

        <v-row v-if="formData.type">
          <v-col cols="12" md="6">
            <v-autocomplete
              v-model="formData.conditions.applicable_categories"
              label="Categories"
              :items="categories"
              item-text="categ_name"
              item-value="categ_id"
              outlined
              multiple
              chips
              deletable-chips
              placeholder="Select categories..."
              :loading="loadingCategories"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-autocomplete
              v-model="formData.conditions.applicable_products"
              label="Specific Products"
              :items="products"
              item-text="pro_name"
              item-value="id"
              outlined
              multiple
              chips
              deletable-chips
              placeholder="Select products..."
              :loading="loadingProducts"
            />
          </v-col>
        </v-row>

        <!-- Date Range -->
        <div class="section-header">
          <v-icon class="mr-2" color="primary">mdi-calendar-range</v-icon>
          Validity Period
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="formData.start_date"
              label="Start Date *"
              type="datetime-local"
              :rules="startDateRules"
              outlined
              @blur="debugFieldValidation('start_date', formData.start_date)"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="formData.end_date"
              label="End Date *"
              type="datetime-local"
              :rules="endDateRules"
              outlined
              @blur="debugFieldValidation('end_date', formData.end_date)"
            />
          </v-col>
        </v-row>

        <!-- Usage Limits -->
        <div class="section-header">
          <v-icon class="mr-2" color="primary">mdi-counter</v-icon>
          Usage Limits
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="formData.max_uses"
              label="Maximum Uses"
              type="number"
              outlined
              min="1"
              placeholder="Unlimited"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="formData.priority"
              label="Priority"
              type="number"
              :rules="priorityRules"
              outlined
              min="1"
              max="100"
              hint="Higher priority promotions are applied first"
              @blur="debugFieldValidation('priority', formData.priority)"
            />
          </v-col>
        </v-row>

        <!-- Additional Settings -->
        <div class="section-header">
          <v-icon class="mr-2" color="primary">mdi-tune</v-icon>
          Additional Settings
        </div>

        <v-row>
          <v-col cols="12">
            <v-switch
              v-model="formData.is_active"
              label="Active"
              color="primary"
              hide-details
            />
            <div class=" text--secondary mt-1">
              Only active promotions can be applied to orders
            </div>
          </v-col>
        </v-row>

        <!-- Preview Section -->
        <div v-if="formData.type" class="section-header">
          <v-icon class="mr-2" color="primary">mdi-eye</v-icon>
          Preview
        </div>

        <v-card v-if="formData.type" outlined class="promotion-preview">
          <v-card-text>
            <div class="d-flex align-center mb-2">
              <v-icon :color="getTypeColor(formData.type)" class="mr-2">
                {{ getTypeIcon(formData.type) }}
              </v-icon>
              <span class="font-weight-medium">{{
                formData.name || 'Promotion Name'
              }}</span>
              <v-spacer />
              <v-chip
                :color="formData.is_active ? 'success' : 'error'"
                small
                label
              >
                {{ formData.is_active ? 'Active' : 'Inactive' }}
              </v-chip>
            </div>
            <div class="body-2 mb-2">{{ getPromotionDescription() }}</div>
            <div class="caption text--secondary">
              Valid: {{ formatDate(formData.start_date) }} -
              {{ formatDate(formData.end_date) }}
            </div>

            <!-- Show selected categories and products -->
            <div v-if="selectedCategoriesNames.length > 0" class="mt-2">
              <div class="caption font-weight-medium">Categories:</div>
              <div class="caption">
                {{ selectedCategoriesNames.join(', ') }}
              </div>
            </div>
            <div v-if="selectedProductsNames.length > 0" class="mt-2">
              <div class="caption font-weight-medium">Products:</div>
              <div class="caption">{{ selectedProductsNames.join(', ') }}</div>
            </div>
          </v-card-text>
        </v-card>

        <!-- Debug Information -->
        <v-card class="mt-4" outlined>
          <v-card-title class="text-h6">Debug Information</v-card-title>
          <v-card-text>
            <div><strong>Form Valid:</strong> {{ valid }}</div>
            <div><strong>Form Data:</strong></div>
            <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
            <div><strong>Validation Errors:</strong></div>
            <div v-for="error in validationErrors" :key="error.field">
              {{ error.field }}: {{ error.message }}
            </div>
          </v-card-text>
        </v-card>
      </v-form>
    </v-card-text>

    <v-divider />

    <v-card-actions class="pa-4">
      <v-spacer />
      <v-btn color="grey" text @click="handleClose"> Cancel </v-btn>
      <v-btn
        color="primary"
        :loading="saving"
        :disabled="!valid"
        @click="handleSave"
      >
        {{ mode === 'create' ? 'Create Promotion' : 'Save Changes' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PromotionDialog',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    promotion: {
      type: Object,
      default: null,
    },
    mode: {
      type: String,
      default: 'create',
    },
  },

  data() {
    return {
      valid: false,
      saving: false,
      categories: [],
      products: [],
      loadingCategories: false,
      loadingProducts: false,
      validationErrors: [],

      formData: {
        name: '',
        code: '',
        type: '',
        description: '',
        start_date: '',
        end_date: '',
        is_active: true,
        priority: 1,
        max_uses: null,
        conditions: {},
      },

      promotionTypes: [
        {
          title: 'Buy X Get Y',
          value: 'buy_x_get_y',
          description:
            'Customer gets free items when buying specified quantity',
          icon: 'mdi-gift',
          color: 'success',
        },
        {
          title: 'Percentage Discount',
          value: 'percentage',
          description: 'Percentage discount on applicable items',
          icon: 'mdi-percent',
          color: 'primary',
        },
        {
          title: 'Fixed Amount',
          value: 'fixed_amount',
          description: 'Fixed dollar amount discount',
          icon: 'mdi-currency-usd',
          color: 'warning',
        },
        {
          title: 'Combo Deal',
          value: 'combo_deal',
          description: 'Special price for item combinations',
          icon: 'mdi-package-variant',
          color: 'info',
        },
      ],

      nameRules: [
        (v) => !!v || 'Promotion name is required',
        (v) =>
          (v && v.length <= 255) || 'Name must be less than 255 characters',
      ],

      codeRules: [
        (v) => !!v || 'Promotion code is required',
        (v) => (v && v.length <= 50) || 'Code must be less than 50 characters',
        (v) =>
          /^[A-Z0-9_-]+$/.test(v) ||
          'Code can only contain uppercase letters, numbers, underscores, and hyphens',
      ],

      typeRules: [(v) => !!v || 'Promotion type is required'],

      startDateRules: [(v) => !!v || 'Start date is required'],

      priorityRules: [(v) => v >= 1 || 'Priority must be at least 1'],

      buyQuantityRules: [(v) => v > 0 || 'Must be greater than 0'],

      getQuantityRules: [(v) => v > 0 || 'Must be greater than 0'],

      discountPercentageRules: [
        (v) => (v > 0 && v <= 100) || 'Must be between 1-100',
      ],

      discountAmountRules: [(v) => v > 0 || 'Must be greater than 0'],
    }
  },

  computed: {
    endDateRules() {
      return [
        (v) => !!v || 'End date is required',
        (v) =>
          !this.formData.start_date ||
          new Date(v) > new Date(this.formData.start_date) ||
          'End date must be after start date',
      ]
    },

    selectedCategoriesNames() {
      if (
        !this.formData.conditions?.applicable_categories ||
        !this.categories.length
      )
        return []
      return this.categories
        .filter((cat) =>
          this.formData.conditions.applicable_categories.includes(cat.categ_id)
        )
        .map((cat) => cat.categ_name)
    },

    selectedProductsNames() {
      if (
        !this.formData.conditions?.applicable_products ||
        !this.products.length
      )
        return []
      return this.products
        .filter((prod) =>
          this.formData.conditions.applicable_products.includes(prod.id)
        )
        .map((prod) => prod.pro_name)
    },
  },

  watch: {
    show(newVal) {
      if (newVal) {
        console.log('Dialog is showing, initializing form...')
        this.initializeForm()
        this.loadData()
      }
    },

    'formData.code'(newVal) {
      if (newVal) {
        this.formData.code = newVal.toUpperCase()
      }
    },

    valid(newVal) {
      console.log('Form validation changed:', newVal)
    },
  },

  created() {
    this.loadData()
  },

  methods: {
    debugFieldValidation(fieldName, value) {
      console.log(`Field ${fieldName} validation:`, {
        value,
        valid: this.valid,
        formData: this.formData,
      })
    },

    initializeForm() {
      console.log('Initializing form with mode:', this.mode)
      console.log('Promotion data:', this.promotion)

      if (this.mode === 'edit' && this.promotion) {
        this.formData = {
          ...this.promotion,
          start_date: this.formatDateTimeLocal(this.promotion.start_date),
          end_date: this.formatDateTimeLocal(this.promotion.end_date),
          conditions: { ...this.promotion.conditions },
        }
      } else {
        this.formData = {
          name: '',
          code: '',
          type: '',
          description: '',
          start_date: this.getDefaultStartDate(),
          end_date: this.getDefaultEndDate(),
          is_active: true,
          priority: 1,
          max_uses: null,
          conditions: {},
        }
      }

      console.log('Form initialized with data:', this.formData)
    },

    getDefaultStartDate() {
      const now = new Date()
      return now.toISOString().slice(0, 16)
    },

    getDefaultEndDate() {
      const future = new Date()
      future.setMonth(future.getMonth() + 1)
      return future.toISOString().slice(0, 16)
    },

    async loadData() {
      await Promise.all([this.loadCategories(), this.loadProducts()])
    },

    async loadCategories() {
      this.loadingCategories = true
      try {
        const response = await this.$axios.get('/api/category/find')
        this.categories = (response.data || []).filter((cat) => cat.isActive)
        console.log('Categories loaded for promotion:', this.categories.length)
      } catch (error) {
        console.warn('Could not fetch categories for promotion:', error)
        this.categories = []
      } finally {
        this.loadingCategories = false
      }
    },

    async loadProducts() {
      this.loadingProducts = true
      try {
        const response = await this.$axios.get('/api/product/find')
        const productData = response.data.data || response.data

        this.products = productData
          .filter((product) => product.isActive)
          .map((product) => ({
            ...product,
            id: product.id,
          }))

        console.log('Products loaded for promotion:', this.products.length)
      } catch (error) {
        console.warn('Could not fetch products for promotion:', error)
        this.products = []
      } finally {
        this.loadingProducts = false
      }
    },

    onTypeChange(type) {
      console.log('Type changed to:', type)

      if (type === 'buy_x_get_y') {
        this.formData.conditions = {
          buy_quantity: 2,
          get_quantity: 1,
          applicable_categories: [],
          applicable_products: [],
          max_free_items: null,
        }
      } else if (type === 'percentage') {
        this.formData.conditions = {
          discount_percentage: 10,
          max_discount_amount: null,
          minimum_order: null,
          applicable_categories: [],
          applicable_products: [],
        }
      } else if (type === 'fixed_amount') {
        this.formData.conditions = {
          discount_amount: 5,
          minimum_order: null,
          applicable_categories: [],
          applicable_products: [],
        }
      } else if (type === 'combo_deal') {
        this.formData.conditions = {
          required_items: [],
          combo_price: null,
          applicable_categories: [],
          applicable_products: [],
        }
      }

      console.log('Conditions set to:', this.formData.conditions)
    },

    getPromotionDescription() {
      if (!this.formData.type || !this.formData.conditions) return ''

      const conditions = this.formData.conditions

      switch (this.formData.type) {
        case 'buy_x_get_y':
          return `Buy ${conditions.buy_quantity || 0}, get ${
            conditions.get_quantity || 0
          } free`
        case 'percentage':
          return `${conditions.discount_percentage || 0}% discount${
            conditions.max_discount_amount
              ? ` (max $${conditions.max_discount_amount})`
              : ''
          }`
        case 'fixed_amount':
          return `${conditions.discount_amount || 0} off${
            conditions.minimum_order
              ? ` on orders over $${conditions.minimum_order}`
              : ''
          }`
        case 'combo_deal':
          return 'Special combo pricing'
        default:
          return ''
      }
    },

    getTypeIcon(type) {
      const typeObj = this.promotionTypes.find((t) => t.value === type)
      return typeObj ? typeObj.icon : 'mdi-tag'
    },

    getTypeColor(type) {
      const typeObj = this.promotionTypes.find((t) => t.value === type)
      return typeObj ? typeObj.color : 'grey'
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString()
    },

    formatDateTimeLocal(date) {
      if (!date) return ''
      const d = new Date(date)
      return d.toISOString().slice(0, 16)
    },
    async handleSave() {
      console.log('=== SAVE BUTTON CLICKED ===')
      console.log('Current form valid state:', this.valid)
      console.log('Current form data:', JSON.stringify(this.formData, null, 2))

      // Manual validation check
      console.log('Running manual validation...')
      const validationResults = await this.validateForm()
      console.log('Manual validation results:', validationResults)

      // Try the form validation
      console.log('Running form.validate()...')

      try {
        if (this.$refs.form && this.$refs.form.validate) {
          const formValidation = await this.$refs.form.validate()
          console.log('Form validation result:', formValidation)

          // Fix: Check the validation result properly
          // In Vuetify 2, validate() returns a boolean
          // In Vuetify 3, validate() returns an object with { valid: boolean }
          let isValid = false
          if (typeof formValidation === 'boolean') {
            isValid = formValidation
          } else if (
            formValidation &&
            typeof formValidation.valid === 'boolean'
          ) {
            isValid = formValidation.valid
          }

          console.log('Processed validation result:', isValid)

          if (!isValid) {
            console.log('Form is not valid, stopping save')
            return
          }
        } else {
          console.warn('Form ref not available or validate method missing')
          // Fallback to manual validation
          if (!validationResults.valid) {
            console.log('Manual validation failed, stopping save')
            return
          }
        }
      } catch (error) {
        console.error('Error during form validation:', error)
        return
      }

      this.saving = true
      console.log('Proceeding with save...')

      try {
        const saveData = {
          ...this.formData,
          start_date: new Date(this.formData.start_date).toISOString(),
          end_date: new Date(this.formData.end_date).toISOString(),
        }

        console.log('Save data prepared:', JSON.stringify(saveData, null, 2))
        this.$emit('save', saveData)
      } catch (error) {
        console.error('Error saving promotion:', error)
      } finally {
        this.saving = false
      }
    },

    async validateForm() {
      const errors = []

      // Check required fields
      if (!this.formData.name) {
        errors.push({ field: 'name', message: 'Name is required' })
      }

      if (!this.formData.code) {
        errors.push({ field: 'code', message: 'Code is required' })
      }

      if (!this.formData.type) {
        errors.push({ field: 'type', message: 'Type is required' })
      }

      if (!this.formData.start_date) {
        errors.push({ field: 'start_date', message: 'Start date is required' })
      }

      if (!this.formData.end_date) {
        errors.push({ field: 'end_date', message: 'End date is required' })
      }

      // Type-specific validation
      if (this.formData.type === 'buy_x_get_y') {
        if (
          !this.formData.conditions.buy_quantity ||
          this.formData.conditions.buy_quantity <= 0
        ) {
          errors.push({
            field: 'buy_quantity',
            message: 'Buy quantity must be greater than 0',
          })
        }
        if (
          !this.formData.conditions.get_quantity ||
          this.formData.conditions.get_quantity <= 0
        ) {
          errors.push({
            field: 'get_quantity',
            message: 'Get quantity must be greater than 0',
          })
        }
      }

      if (this.formData.type === 'percentage') {
        if (
          !this.formData.conditions.discount_percentage ||
          this.formData.conditions.discount_percentage <= 0 ||
          this.formData.conditions.discount_percentage > 100
        ) {
          errors.push({
            field: 'discount_percentage',
            message: 'Discount percentage must be between 1-100',
          })
        }
      }

      if (this.formData.type === 'fixed_amount') {
        if (
          !this.formData.conditions.discount_amount ||
          this.formData.conditions.discount_amount <= 0
        ) {
          errors.push({
            field: 'discount_amount',
            message: 'Discount amount must be greater than 0',
          })
        }
      }

      this.validationErrors = errors
      return { valid: errors.length === 0, errors }
    },

    handleClose() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.section-header {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #2d3748;
  margin: 24px 0 16px 0;
  font-size: 16px;
}

.section-header:first-child {
  margin-top: 0;
}

.promotion-preview {
  margin-top: 16px;
}
</style>