<template>
  <div class="form-group">
    <label class="form-label" :class="{ required }">
      <i :class="icon"></i>
      {{ label }}
    </label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :step="step"
      :min="min"
      :max="max"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :required="required"
      :disabled="disabled"
      class="form-control"
    />
  </div>
</template>

<script>
export default {
  name: 'InputField',
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
      default: 'fas fa-edit'
    },
    type: {
      type: String,
      default: 'text'
    },
    step: {
      type: String,
      default: null
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [String, Number],
      default: null
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
  emits: ['update:modelValue']
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

/* Number input specific styles */
.form-control[type="number"] {
  text-align: right;
}

/* Hide number input spinners in WebKit browsers */
.form-control[type="number"]::-webkit-outer-spin-button,
.form-control[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Hide number input spinners in Firefox */
.form-control[type="number"] {
  -moz-appearance: textfield;
}
</style>