<template>
  <div class="ministry-info">
    <div class="ministry-details">
      <div class="ministry-detail-item">
        <i class="fas fa-building"></i>
        <span class="ministry-name">{{ ministry.ministryName }}</span>
      </div>
      <div v-if="ministry.ministryCode" class="ministry-detail-item">
        <i class="fas fa-tag"></i>
        <span class="ministry-code">{{ ministry.ministryCode }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MinistryInfo',
  props: {
    ministry: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.ministry-info {
  margin-top: 6px;
  padding: 6px;
  background: #f0f9ff;
  border-radius: 4px;
  border: 1px solid #bae6fd;
}

.ministry-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
}

.ministry-detail-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: #075985;
}

.ministry-detail-item i {
  color: #0ea5e9;
  width: 12px;
  flex-shrink: 0;
}

.ministry-name {
  font-weight: 600;
}

.ministry-code {
  font-family: monospace;
  background: #e0f2fe;
  padding: 1px 4px;
  border-radius: 2px;
}
</style>