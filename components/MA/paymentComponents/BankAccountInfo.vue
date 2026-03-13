<template>
  <div class="bank-account-info">
    <div class="bank-details">
      <div class="bank-detail-item">
        <i class="fas fa-building"></i>
        <span>{{ account.bankName }}</span>
      </div>
      <div class="bank-detail-item">
        <i class="fas fa-credit-card"></i>
        <span>{{ account.accountNumber }}</span>
      </div>
      <div v-if="account.currency" class="bank-detail-item">
        <i class="fas fa-coins"></i>
        <span>{{ account.currency }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankAccountInfo',
  props: {
    account: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.bank-account-info {
  margin-top: 6px;
  padding: 6px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e9ecef;
}

.bank-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
}

.bank-detail-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: #6b7280;
}

.bank-detail-item i {
  color: #667eea;
  width: 12px;
  flex-shrink: 0;
}

.bank-detail-item span {
  font-weight: 500;
}
</style>