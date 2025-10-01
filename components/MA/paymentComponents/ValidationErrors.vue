<template>
  <div class="form-errors">
    <h6>
      <i class="fas fa-exclamation-circle"></i>
      Please fix the following errors:
    </h6>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ValidationErrors',
  props: {
    errors: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.form-errors {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  padding: 12px;
  margin-top: 16px;
}

.form-errors h6 {
  margin: 0 0 8px 0;
  color: #dc2626;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.form-errors ul {
  margin: 0;
  padding-left: 16px;
  color: #dc2626;
  font-size: 11px;
}

.form-errors li {
  margin-bottom: 4px;
}

.form-errors li:last-child {
  margin-bottom: 0;
}
</style>