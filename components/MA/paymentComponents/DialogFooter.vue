<template>
  <div class="modal-footer enhanced-footer">
    <button
      type="button"
      @click="$emit('close')"
      class="btn btn-secondary"
      :disabled="saving"
    >
      <i class="fas fa-times"></i>
      ອອກ
    </button>
    
    <button
      type="submit"
      class="btn btn-primary"
      :disabled="saving || formLoading || !isFormValid"
    >
      <i v-if="saving" class="fas fa-spinner fa-spin"></i>
      <i v-else class="fas" :class="isEdit ? 'fa-save' : 'fa-plus'"></i>
      {{ saving ? 'Saving...' : isEdit ? 'ບັນທຶກ ການແກ້ໄຂ' : 'ບັນທຶກ' }}
    </button>
    
    <button
      @click.prevent="$emit('print')"
      class="btn btn-sm btn-danger"
      title="Save & Print"
    >
      <i class="fas fa-print"></i>
      Save & Print
    </button>
  </div>
</template>

<script>
export default {
  name: 'DialogFooter',
  props: {
    saving: {
      type: Boolean,
      default: false
    },
    formLoading: {
      type: Boolean,
      default: false
    },
    isFormValid: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'print']
}
</script>

<style scoped>
.enhanced-footer {
  padding: 12px 18px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  font-size: 12px;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-danger {
  background: #dc3545;
  color: white;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.fa-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .enhanced-footer {
    padding: 14px 16px;
    flex-direction: column-reverse;
  }

  .enhanced-footer .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>