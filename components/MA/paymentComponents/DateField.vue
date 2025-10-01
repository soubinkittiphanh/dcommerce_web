<template>
  <div class="form-group">
    <label class="form-label" :class="{ required }">
      <i :class="icon"></i>
      {{ label }}
    </label>

    <v-menu
      :value="menu"
      @input="$emit('update:menu', $event)"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
      :disabled="disabled"
    >
      <template #activator="{ on, attrs }">
        <v-text-field
          :value="formattedDate"
          :label="label"
          outlined
          dense
          clearable
          persistent-hint
          prepend-inner-icon="mdi-calendar"
          :disabled="disabled"
          :class="{ 'compact-date-field': true }"
          v-bind="attrs"
          v-on="on"
          @click:clear="handleClear"
          readonly
        />
      </template>
      <v-date-picker
        :value="pickerDate"
        @input="handleDateInput"
        no-title
        :min="min"
        :max="max"
        :disabled="disabled"
      />
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'DateField',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    formattedDate: {
      type: String,
      default: ''
    },
    pickerDate: {
      type: String,
      default: null
    },
    menu: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'fas fa-calendar'
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: String,
      default: null
    },
    max: {
      type: String,
      default: null
    }
  },
  emits: [
    'update:modelValue',
    'update:formattedDate', 
    'update:pickerDate',
    'update:menu',
    'clear'
  ],

  methods: {
    handleDateInput(val) {
      this.$emit('update:pickerDate', val)
      this.$emit('update:modelValue', this.formatDateForAPI(val))
      this.$emit('update:formattedDate', this.formatDateForDisplay(val))
      this.$emit('update:menu', false)
    },

    handleClear() {
      this.$emit('update:pickerDate', null)
      this.$emit('update:modelValue', '')
      this.$emit('update:formattedDate', null)
      this.$emit('clear')
    },

    formatDateForAPI(dateValue) {
      if (!dateValue) return null

      if (typeof dateValue === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
        return dateValue
      }

      try {
        const date = new Date(dateValue)
        if (isNaN(date.getTime())) return null

        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')

        return `${year}-${month}-${day}`
      } catch (error) {
        console.error('Error formatting date for API:', error)
        return null
      }
    },

    formatDateForDisplay(dateString) {
      if (!dateString) return ''

      try {
        const date = new Date(dateString)
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()

        return `${day}/${month}/${year}`
      } catch (error) {
        return dateString
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 0;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #374151;
  font-size: 11px;
}

.form-label.required::after {
  content: '*';
  color: #e74c3c;
  margin-left: 4px;
}

.form-label i {
  color: #6b7280;
  font-size: 11px;
}

/* Compact date field styles */
.compact-date-field {
  font-size: 12px !important;
}

.compact-date-field :deep(.v-input__control) {
  min-height: 32px !important;
}

.compact-date-field :deep(.v-input__slot) {
  padding: 0 8px !important;
  min-height: 32px !important;
}

.compact-date-field :deep(.v-text-field__details) {
  padding: 2px 8px 0 !important;
  margin-bottom: 0 !important;
}

.compact-date-field :deep(.v-messages) {
  font-size: 9px !important;
  min-height: 12px !important;
}

.compact-date-field :deep(.v-input__icon--prepend-inner) {
  margin-top: 6px !important;
  margin-right: 6px !important;
}

/* Override Vuetify outline to match form style */
.compact-date-field :deep(.v-text-field--outlined .v-input__control .v-input__slot) {
  border: 1px solid #e5e7eb !important;
  border-radius: 4px !important;
  background: #fafafa !important;
}

.compact-date-field :deep(.v-text-field--outlined.v-input--is-focused .v-input__control .v-input__slot) {
  border-color: #667eea !important;
  background: white !important;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1) !important;
}

.compact-date-field :deep(.v-text-field--outlined.v-input--is-disabled .v-input__control .v-input__slot) {
  background-color: #f3f4f6 !important;
  border-color: #d1d5db !important;
  opacity: 0.6 !important;
}

/* Date picker menu styling */
:deep(.v-menu__content) {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
  border-radius: 8px !important;
  overflow: hidden !important;
}

:deep(.v-date-picker) {
  box-shadow: none !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .compact-date-field :deep(.v-input__slot) {
    padding: 0 6px !important;
  }

  .compact-date-field :deep(.v-text-field__details) {
    padding: 2px 6px 0 !important;
  }
}
</style>