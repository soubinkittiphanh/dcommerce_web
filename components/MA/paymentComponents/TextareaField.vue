<template>
  <div class="form-group">
    <label class="form-label" :class="{ required }">
      <i :class="icon"></i>
      {{ label }}
    </label>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :rows="rows"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :required="required"
      :disabled="disabled"
      class="form-control"
    ></textarea>
    <div v-if="maxlength" class="character-count">
      {{ (modelValue || '').length }} / {{ maxlength }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextareaField',
  props: {
    modelValue: {
      type: String,
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
    rows: {
      type: [String, Number],
      default: 3
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
  resize: vertical;
  min-height: 60px;
  font-family: inherit;
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
  resize: none;
}

.character-count {
  font-size: 10px;
  color: #6b7280;
  text-align: right;
  margin-top: 4px;
}

.character-count.warning {
  color: #f59e0b;
}

.character-count.error {
  color: #ef4444;
}
</style>