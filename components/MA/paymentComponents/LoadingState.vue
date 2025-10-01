<template>
  <div class="form-loading">
    <div class="spinner-small"></div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingState',
  props: {
    message: {
      type: String,
      default: 'Loading form data...'
    }
  }
}
</script>

<style scoped>
.form-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #666;
  flex-direction: column;
  gap: 10px;
}

.spinner-small {
  width: 32px;
  height: 32px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.form-loading p {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
}
</style>