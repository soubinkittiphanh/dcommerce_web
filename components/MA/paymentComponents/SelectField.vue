<template>
  <div class="form-group">
    <label class="form-label" :class="{ required }">
      <i :class="icon"></i>
      {{ label }}
    </label>
    <div class="custom-select-wrapper">
      <select
        :value="modelValue"
        @change="handleChange"
        class="form-control custom-select"
        :required="required"
        :disabled="disabled"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <div class="select-icon">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'fas fa-list'
    },
    options: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  
  methods: {
    handleChange(event) {
      const value = event.target.value
      // Emit both events with the new value
      this.$emit('update:modelValue', value)
      this.$emit('change', value)
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

.custom-select-wrapper {
  position: relative;
}

.form-control {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 12px;
  transition: all 0.2s ease;
  background: #fafafa;
  box-sizing: border-box;
  height: 32px;
}

.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 32px;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.form-control:disabled {
  background-color: #f3f4f6;
  border-color: #d1d5db;
  opacity: 0.6;
  cursor: not-allowed;
}

.select-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #6b7280;
  font-size: 12px;
}

/* Custom focus styles for select */
.custom-select:focus + .select-icon {
  color: #667eea;
}
</style>