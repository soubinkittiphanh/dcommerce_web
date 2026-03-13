<template>
  <div class="form-section">
    <div class="section-header">
      <i :class="icon" class="section-icon"></i>
      <h6 class="section-title">{{ title }}</h6>
    </div>
    <div class="section-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSection',
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'fas fa-cog'
    }
  }
}
</script>

<style scoped>
.form-section {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
}

.section-header {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-icon {
  color: #667eea;
  font-size: 14px;
}

.section-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.section-content {
  padding: 16px;
}

/* Hover effect for sections */
.form-section:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-header {
    padding: 10px 14px;
  }

  .section-content {
    padding: 14px;
  }

  .section-title {
    font-size: 13px;
  }

  .section-icon {
    font-size: 13px;
  }
}
</style>