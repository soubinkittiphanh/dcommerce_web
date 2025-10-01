<template>
  <div class="modal-header">
    <div class="modal-title-section">
      <i class="fas fa-money-bill-wave modal-icon"></i>
      <h5 class="modal-title">
        {{ isEdit ? 'ແກ້ໄຂລາຍຈ່າຍ' : 'ລົງບັນຊີລາຍຈ່າຍ' }}
      </h5>
    </div>

    <div class="modal-header-right">
      <span class="voucher-number">
        ເລກທີ: {{ voucherNumber }}
      </span>
      <button @click="$emit('close')" class="close-btn">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogHeader',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    voucherNumber: {
      type: String,
      default: '000000'
    }
  },
  emits: ['close']
}
</script>

<style scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  border-bottom: 1px solid #e9ecef;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.modal-title-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.modal-icon {
  font-size: 18px;
  opacity: 0.9;
}

.modal-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.modal-header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.voucher-number {
  font-size: 14px;
  font-weight: 600;
  color: white;
  opacity: 0.9;
}

.close-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: white;
  opacity: 0.8;
  transition: opacity 0.2s;
  padding: 6px;
  border-radius: 4px;
}

.close-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}
</style>