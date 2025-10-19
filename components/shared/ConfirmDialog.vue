<template>
  <div v-if="show" class="modal-overlay" @click="$emit('cancel')">
    <div class="confirm-dialog" @click.stop>
      <!-- Icon -->
      <div class="dialog-icon" :class="iconClass">
        <span class="icon-symbol">{{ iconSymbol }}</span>
      </div>

      <!-- Content -->
      <div class="dialog-content">
        <h3 class="dialog-title">{{ title }}</h3>
        <p class="dialog-message">{{ message }}</p>
        <p v-if="warning" class="dialog-warning">
          <span class="warning-icon">⚠️</span>
          {{ warning }}
        </p>
      </div>

      <!-- Actions -->
      <div class="dialog-actions">
        <button @click="$emit('cancel')" class="btn-cancel">
          {{ cancelText }}
        </button>
        <button
          @click="$emit('confirm')"
          class="btn-confirm"
          :class="confirmClass"
        >
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDialog',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Confirm Action',
    },
    message: {
      type: String,
      default: 'Are you sure you want to proceed?',
    },
    warning: {
      type: String,
      default: '',
    },
    confirmText: {
      type: String,
      default: 'Confirm',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    type: {
      type: String,
      default: 'danger', // 'danger', 'warning', 'info', 'success'
    },
  },

  computed: {
    iconClass() {
      return `icon-${this.type}`
    },

    confirmClass() {
      return `confirm-${this.type}`
    },

    iconSymbol() {
      const icons = {
        danger: '🗑️',
        warning: '⚠️',
        info: 'ℹ️',
        success: '✓',
      }
      return icons[this.type] || icons.info
    },
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.confirm-dialog {
  background: white;
  border-radius: 12px;
  max-width: 450px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
  overflow: hidden;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dialog Icon */
.dialog-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px 16px;
}

.icon-symbol {
  font-size: 64px;
  line-height: 1;
}

.icon-danger .icon-symbol {
  filter: drop-shadow(0 4px 8px rgba(229, 62, 62, 0.3));
}

.icon-warning .icon-symbol {
  filter: drop-shadow(0 4px 8px rgba(237, 137, 54, 0.3));
}

.icon-info .icon-symbol {
  filter: drop-shadow(0 4px 8px rgba(66, 153, 225, 0.3));
}

.icon-success .icon-symbol {
  filter: drop-shadow(0 4px 8px rgba(72, 187, 120, 0.3));
}

/* Dialog Content */
.dialog-content {
  padding: 0 24px 24px;
  text-align: center;
}

.dialog-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 12px 0;
}

.dialog-message {
  font-size: 15px;
  color: #4a5568;
  margin: 0 0 16px 0;
  line-height: 1.6;
}

.dialog-warning {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #fffaf0;
  border: 1px solid #f6ad55;
  border-radius: 8px;
  padding: 12px;
  color: #c05621;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
}

.warning-icon {
  font-size: 18px;
}

/* Dialog Actions */
.dialog-actions {
  display: flex;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #e2e8f0;
}

.btn-cancel,
.btn-confirm {
  flex: 1;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel {
  background: #e2e8f0;
  color: #2d3748;
}

.btn-cancel:hover {
  background: #cbd5e0;
}

.btn-confirm {
  color: white;
}

.confirm-danger {
  background: #f56565;
}

.confirm-danger:hover {
  background: #e53e3e;
}

.confirm-warning {
  background: #ed8936;
}

.confirm-warning:hover {
  background: #dd6b20;
}

.confirm-info {
  background: #4299e1;
}

.confirm-info:hover {
  background: #3182ce;
}

.confirm-success {
  background: #48bb78;
}

.confirm-success:hover {
  background: #38a169;
}

/* Responsive */
@media (max-width: 768px) {
  .confirm-dialog {
    max-width: 100%;
  }

  .dialog-actions {
    flex-direction: column-reverse;
  }

  .btn-cancel,
  .btn-confirm {
    width: 100%;
  }
}
</style>