<template>
  <div class="promotions-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">
          <v-icon class="mr-2" color="primary">mdi-tag-multiple</v-icon>
          Promotion Management
        </h1>
        <p class="page-subtitle">Create and manage promotional offers</p>
      </div>
      <div class="header-actions">
        <v-btn
          color="secondary"
          outlined
          @click="refreshPromotions"
          :loading="loading"
        >
          <v-icon left>mdi-refresh</v-icon>
          Refresh
        </v-btn>
        <v-btn
          color="primary"
          @click="openCreateDialog"
        >
          <v-icon left>mdi-plus</v-icon>
          New Promotion
        </v-btn>
      </div>
    </div>

    <!-- Stats Cards -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="2">
        <v-card class="stat-card">
          <v-card-text class="d-flex align-center">
            <div class="stat-icon-wrapper primary">
              <v-icon size="28" color="white">mdi-tag-multiple</v-icon>
            </div>
            <div class="ml-3">
              <div class="stat-value">{{ stats.totalPromotions }}</div>
              <div class="stat-label">Total</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" sm="6" md="2">
        <v-card class="stat-card">
          <v-card-text class="d-flex align-center">
            <div class="stat-icon-wrapper success">
              <v-icon size="28" color="white">mdi-check-circle</v-icon>
            </div>
            <div class="ml-3">
              <div class="stat-value">{{ stats.activePromotions }}</div>
              <div class="stat-label">Active</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="2">
        <v-card class="stat-card">
          <v-card-text class="d-flex align-center">
            <div class="stat-icon-wrapper warning">
              <v-icon size="28" color="white">mdi-clock</v-icon>
            </div>
            <div class="ml-3">
              <div class="stat-value">{{ stats.expiringSoon }}</div>
              <div class="stat-label">Expiring</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="2">
        <v-card class="stat-card">
          <v-card-text class="d-flex align-center">
            <div class="stat-icon-wrapper error">
              <v-icon size="28" color="white">mdi-calendar-remove</v-icon>
            </div>
            <div class="ml-3">
              <div class="stat-value">{{ stats.expired }}</div>
              <div class="stat-label">Expired</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="2">
        <v-card class="stat-card">
          <v-card-text class="d-flex align-center">
            <div class="stat-icon-wrapper info">
              <v-icon size="28" color="white">mdi-chart-line</v-icon>
            </div>
            <div class="ml-3">
              <div class="stat-value">{{ stats.totalUsage }}</div>
              <div class="stat-label">Usage</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="2">
        <v-card class="stat-card">
          <v-card-text class="d-flex align-center">
            <div class="stat-icon-wrapper purple">
              <v-icon size="28" color="white">mdi-currency-usd</v-icon>
            </div>
            <div class="ml-3">
              <div class="stat-value">${{ formatMoney(stats.totalDiscount) }}</div>
              <div class="stat-label">Saved</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filters and Search -->
    <v-card class="mb-6">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="searchQuery"
              label="Search promotions..."
              prepend-inner-icon="mdi-magnify"
              outlined
              dense
              clearable
              hide-details
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="typeFilter"
              label="Type"
              :items="typeOptions"
              item-text="title"
              item-value="value"
              outlined
              dense
              clearable
              hide-details
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="statusFilter"
              label="Status"
              :items="statusOptions"
              item-text="title"
              item-value="value"
              outlined
              dense
              clearable
              hide-details
            />
          </v-col>
          <v-col cols="12" md="2">
            <v-btn
              color="secondary"
              outlined
              block
              @click="clearFilters"
            >
              Clear Filters
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Promotions Table -->
    <v-card>
      <v-data-table
        :headers="headers"
        :items="filteredPromotions"
        :loading="loading"
        :items-per-page="itemsPerPage"
        :page.sync="currentPage"
        @update:items-per-page="itemsPerPage = $event"
        class="promotion-table"
        :footer-props="{
          'items-per-page-options': [5, 10, 25, 50]
        }"
      >
        <!-- Name column with icon -->
        <template v-slot:item.name="{ item }">
          <div class="d-flex align-center">
            <v-icon 
              :color="getPromotionTypeColor(item.type)" 
              class="mr-2"
            >
              {{ getPromotionTypeIcon(item.type) }}
            </v-icon>
            <div>
              <div class="font-weight-medium">{{ item.name }}</div>
              <div class="caption grey--text">{{ item.code }}</div>
              <div v-if="item.description" class="caption grey--text text--darken-1 mt-1">
                {{ truncateDescription(item.description) }}
              </div>
            </div>
          </div>
        </template>

        <!-- Type column -->
        <template v-slot:item.type="{ item }">
          <v-chip
            :color="getPromotionTypeColor(item.type)"
            small
            text-color="white"
          >
            {{ formatPromotionType(item.type) }}
          </v-chip>
        </template>

        <!-- Discount column -->
        <template v-slot:item.discount="{ item }">
          <div class="body-2 font-weight-medium">
            {{ getDiscountDisplay(item) }}
          </div>
        </template>

        <!-- Status column -->
        <template v-slot:item.is_active="{ item }">
          <v-chip
            :color="getStatusColor(item)"
            small
            text-color="white"
          >
            {{ getStatusText(item) }}
          </v-chip>
        </template>

        <!-- Date range column -->
        <template v-slot:item.dateRange="{ item }">
          <div class="caption">
            <div>Start: {{ formatDate(item.start_date) }}</div>
            <div>End: {{ formatDate(item.end_date) }}</div>
            <div v-if="getDaysUntilExpiry(item) !== null" class="mt-1">
              <v-chip 
                :color="getDaysUntilExpiry(item) <= 7 ? 'warning' : 'info'" 
                x-small
                text-color="white"
              >
                {{ getDaysUntilExpiry(item) > 0 ? `${getDaysUntilExpiry(item)} days left` : 'Expired' }}
              </v-chip>
            </div>
          </div>
        </template>

        <!-- Usage column -->
        <template v-slot:item.usage="{ item }">
          <div class="usage-progress">
            <div class="caption mb-1">
              {{ item.current_uses || 0 }}/{{ item.max_uses || '∞' }}
            </div>
            <v-progress-linear
              v-if="item.max_uses"
              :value="((item.current_uses || 0) / item.max_uses) * 100"
              height="4"
              :color="getUsageColor(item.current_uses || 0, item.max_uses)"
            />
            <div v-if="!item.max_uses" class="caption success--text">
              Unlimited
            </div>
          </div>
        </template>

        <!-- Actions column -->
        <template v-slot:item.actions="{ item }">
          <div class="action-buttons">
            <v-btn
              icon
              small
              @click="viewPromotion(item)"
              title="View Details"
            >
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
            <v-btn
              icon
              small
              @click="editPromotion(item)"
              title="Edit"
            >
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              icon
              small
              @click="duplicatePromotion(item)"
              title="Duplicate"
            >
              <v-icon small>mdi-content-copy</v-icon>
            </v-btn>
            <v-btn
              icon
              small
              @click="togglePromotionStatus(item)"
              :title="item.is_active ? 'Deactivate' : 'Activate'"
            >
              <v-icon small>{{ item.is_active ? 'mdi-pause' : 'mdi-play' }}</v-icon>
            </v-btn>
            <v-btn
              icon
              small
              color="error"
              @click="confirmDelete(item)"
              title="Delete"
            >
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>

        <!-- Loading state -->
        <template v-slot:loading>
          <v-skeleton-loader type="table-row@6" />
        </template>

        <!-- No data state -->
        <template v-slot:no-data>
          <div class="text-center pa-8">
            <v-icon size="64" color="grey lighten-1">mdi-tag-off</v-icon>
            <div class="headline mt-4 mb-2">No promotions found</div>
            <div class="body-2 grey--text mb-4">
              {{ searchQuery || typeFilter || statusFilter ? 'Try adjusting your filters' : 'Create your first promotion to get started' }}
            </div>
            <v-btn v-if="!searchQuery && !typeFilter && !statusFilter" color="primary" @click="openCreateDialog">
              <v-icon left>mdi-plus</v-icon>
              Create Promotion
            </v-btn>
            <v-btn v-else color="secondary" outlined @click="clearFilters">
              Clear Filters
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Create/Edit Dialog - Wrapped in parent -->
    <v-dialog
      v-model="showDialog"
      max-width="800px"
      persistent
      scrollable
      fullscreen
    >
      <PromotionDialog
        :show="showDialog"
        :promotion="selectedPromotion"
        :mode="dialogMode"
        @close="closeDialog"
        @save="handleSavePromotion"
      />
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <v-dialog
      v-model="showDeleteDialog"
      max-width="400px"
    >
      <v-card>
        <v-card-title class="headline">Delete Promotion: {{ promotionToDelete?.name || '' }}</v-card-title>
        <v-card-text>
          <p>Are you sure you want to delete this promotion? This action cannot be undone.</p>
          <v-alert v-if="promotionToDelete?.current_uses > 0" type="warning" class="mt-3">
            Warning: This promotion has been used {{ promotionToDelete.current_uses }} times.
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="grey" text @click="showDeleteDialog = false">
            Cancel
          </v-btn>
          <v-btn color="error" @click="deletePromotion">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Debug Info -->
    <div class="debug-info mt-4" style="background: #f5f5f5; padding: 10px; border-radius: 4px;">
      <strong>Debug:</strong>
      showDialog: {{ showDialog }}, 
      dialogMode: {{ dialogMode }}, 
      selectedPromotion: {{ selectedPromotion ? 'Has Data' : 'null' }},
      promotions count: {{ promotions.length }},
      filtered count: {{ filteredPromotions.length }}
    </div>
  </div>
</template>

<script>
import PromotionDialog from '~/components/promotions/PromotionDialog.vue'

export default {
  name: 'PromotionsPage',

  components: {
    PromotionDialog,
  },

  data() {
    return {
      promotions: [],
      loading: false,
      searchQuery: '',
      typeFilter: '',
      statusFilter: '',
      
      showDialog: false,
      showDeleteDialog: false,
      dialogMode: 'create',
      selectedPromotion: null,
      promotionToDelete: null,

      currentPage: 1,
      itemsPerPage: 10,

      headers: [
        { text: 'Promotion', align: 'start', value: 'name', sortable: true, width: '250px' },
        { text: 'Type', value: 'type', sortable: true },
        { text: 'Discount', value: 'discount', sortable: false },
        { text: 'Status', value: 'is_active', sortable: true },
        { text: 'Date Range', value: 'dateRange', sortable: false },
        { text: 'Usage', value: 'usage', sortable: false },
        { text: 'Priority', value: 'priority', sortable: true },
        { text: 'Actions', value: 'actions', sortable: false, width: '180px' },
      ],

      typeOptions: [
        { title: 'All Types', value: '' },
        { title: 'Buy X Get Y', value: 'buy_x_get_y' },
        { title: 'Percentage Discount', value: 'percentage' },
        { title: 'Fixed Amount', value: 'fixed_amount' },
        { title: 'Combo Deal', value: 'combo_deal' },
      ],

      statusOptions: [
        { title: 'All Status', value: '' },
        { title: 'Active', value: 'active' },
        { title: 'Inactive', value: 'inactive' },
        { title: 'Expired', value: 'expired' },
        { title: 'Expiring Soon', value: 'expiring' },
      ],
    }
  },

  computed: {
    filteredPromotions() {
      let filtered = this.promotions
      const now = new Date()

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(promotion =>
          promotion.name?.toLowerCase().includes(query) ||
          promotion.code?.toLowerCase().includes(query) ||
          promotion.description?.toLowerCase().includes(query)
        )
      }

      if (this.typeFilter) {
        filtered = filtered.filter(promotion => promotion.type === this.typeFilter)
      }

      if (this.statusFilter) {
        if (this.statusFilter === 'expired') {
          filtered = filtered.filter(promotion => new Date(promotion.end_date) < now)
        } else if (this.statusFilter === 'expiring') {
          const sevenDaysFromNow = new Date()
          sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7)
          filtered = filtered.filter(promotion => {
            const endDate = new Date(promotion.end_date)
            return promotion.is_active && endDate <= sevenDaysFromNow && endDate > now
          })
        } else if (this.statusFilter === 'active') {
          filtered = filtered.filter(promotion => promotion.is_active === true && new Date(promotion.end_date) >= now)
        } else if (this.statusFilter === 'inactive') {
          filtered = filtered.filter(promotion => promotion.is_active === false)
        }
      }

      return filtered
    },

    stats() {
      const now = new Date()
      const active = this.promotions.filter(p => p.is_active && new Date(p.end_date) >= now).length
      
      const expiringSoon = this.promotions.filter(p => {
        if (!p.is_active) return false
        const endDate = new Date(p.end_date)
        const sevenDaysFromNow = new Date()
        sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7)
        return endDate <= sevenDaysFromNow && endDate > now
      }).length
      
      const expired = this.promotions.filter(p => {
        const endDate = new Date(p.end_date)
        return endDate < now
      }).length
      
      const totalUsage = this.promotions.reduce((sum, p) => sum + (p.current_uses || 0), 0)
      
      const totalDiscount = this.promotions.reduce((sum, p) => {
        if (p.conditions && p.conditions.discount_amount) {
          return sum + (p.conditions.discount_amount * (p.current_uses || 0))
        }
        return sum
      }, 0)

      return {
        totalPromotions: this.promotions.length,
        activePromotions: active,
        expiringSoon: expiringSoon,
        expired: expired,
        totalUsage: totalUsage,
        totalDiscount: totalDiscount
      }
    }
  },

  async mounted() {
    await this.fetchPromotions()
  },

  methods: {
    async fetchPromotions() {
      this.loading = true
      try {
        const response = await this.$axios.get('/api/promotions')
        this.promotions = response.data.data || response.data || []
        console.log('Fetched promotions:', this.promotions)
      } catch (error) {
        console.error('Error fetching promotions:', error)
        this.promotions = []
      } finally {
        this.loading = false
      }
    },

    async refreshPromotions() {
      await this.fetchPromotions()
    },

    openCreateDialog() {
      console.log('Opening create dialog...')
      this.dialogMode = 'create'
      this.selectedPromotion = null
      this.showDialog = true
      console.log('Dialog state:', this.showDialog)
    },

    editPromotion(promotion) {
      this.dialogMode = 'edit'
      this.selectedPromotion = { ...promotion }
      this.showDialog = true
    },

    viewPromotion(promotion) {
      this.$router.push(`/admin/cafe/promotion/${promotion.id}`)
    },

    duplicatePromotion(promotion) {
      this.dialogMode = 'create'
      this.selectedPromotion = {
        ...promotion,
        id: null,
        code: `${promotion.code}-COPY`,
        name: `${promotion.name} (Copy)`,
        current_uses: 0
      }
      this.showDialog = true
    },

    closeDialog() {
      console.log('Closing dialog...')
      this.showDialog = false
      this.selectedPromotion = null
    },

    async handleSavePromotion(promotionData) {
      console.info(`CREATE PROMOTION ${JSON.stringify(promotionData)}`)
      try {
        if (this.dialogMode === 'create') {
          const response = await this.$axios.post('/api/promotions', promotionData)
          console.log('Create response:', response)
        } else {
          const response = await this.$axios.put(`/api/promotions/${promotionData.id}`, promotionData)
          console.log('Update response:', response)
        }

        this.closeDialog()
        await this.fetchPromotions()
      } catch (error) {
        console.error('Error saving promotion:', error)
      }
    },

    confirmDelete(promotion) {
      this.promotionToDelete = promotion
      this.showDeleteDialog = true
    },

    async deletePromotion() {
      if (!this.promotionToDelete) return

      try {
        await this.$axios.delete(`/api/promotions/${this.promotionToDelete.id}`)
        this.showDeleteDialog = false
        this.promotionToDelete = null
        await this.fetchPromotions()
      } catch (error) {
        console.error('Error deleting promotion:', error)
      }
    },

    async togglePromotionStatus(promotion) {
      try {
        await this.$axios.put(`/api/promotions/${promotion.id}`, {
          is_active: !promotion.is_active
        })
        
        await this.fetchPromotions()
      } catch (error) {
        console.error('Error toggling promotion status:', error)
      }
    },

    clearFilters() {
      this.searchQuery = ''
      this.typeFilter = ''
      this.statusFilter = ''
    },

    truncateDescription(description) {
      if (!description) return ''
      return description.length > 50 ? description.substring(0, 50) + '...' : description
    },

    getDiscountDisplay(promotion) {
      if (!promotion.conditions) return 'N/A'
      
      const conditions = promotion.conditions
      
      switch (promotion.type) {
        case 'buy_x_get_y':
          return `Buy ${conditions.buy_quantity || 0}, Get ${conditions.get_quantity || 0}`
        case 'percentage':
          return `${conditions.discount_percentage || 0}%${conditions.max_discount_amount ? ` (max $${conditions.max_discount_amount})` : ''}`
        case 'fixed_amount':
          return `${conditions.discount_amount || 0} off`
        case 'combo_deal':
          return 'Combo Deal'
        default:
          return 'N/A'
      }
    },

    getStatusColor(promotion) {
      const now = new Date()
      const endDate = new Date(promotion.end_date)
      
      if (endDate < now) return 'error'
      if (!promotion.is_active) return 'grey'
      
      const sevenDaysFromNow = new Date()
      sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7)
      if (endDate <= sevenDaysFromNow) return 'warning'
      
      return 'success'
    },

    getStatusText(promotion) {
      const now = new Date()
      const endDate = new Date(promotion.end_date)
      
      if (endDate < now) return 'Expired'
      if (!promotion.is_active) return 'Inactive'
      
      const sevenDaysFromNow = new Date()
      sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7)
      if (endDate <= sevenDaysFromNow) return 'Expiring'
      
      return 'Active'
    },

    getDaysUntilExpiry(promotion) {
      const now = new Date()
      const endDate = new Date(promotion.end_date)
      const diffTime = endDate - now
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      return diffDays
    },

    getPromotionTypeIcon(type) {
      const icons = {
        'buy_x_get_y': 'mdi-gift',
        'percentage': 'mdi-percent',
        'fixed_amount': 'mdi-currency-usd',
        'combo_deal': 'mdi-package-variant'
      }
      return icons[type] || 'mdi-tag'
    },

    getPromotionTypeColor(type) {
      const colors = {
        'buy_x_get_y': 'success',
        'percentage': 'primary',
        'fixed_amount': 'warning',
        'combo_deal': 'info'
      }
      return colors[type] || 'grey'
    },

    formatPromotionType(type) {
      const labels = {
        'buy_x_get_y': 'Buy X Get Y',
        'percentage': 'Percentage',
        'fixed_amount': 'Fixed Amount',
        'combo_deal': 'Combo Deal'
      }
      return labels[type] || type
    },

    getUsageColor(currentUses, maxUses) {
      if (!maxUses) return 'primary'
      const percentage = (currentUses / maxUses) * 100
      if (percentage >= 90) return 'error'
      if (percentage >= 70) return 'warning'
      return 'success'
    },

    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString()
    },

    formatMoney(amount) {
      if (!amount || amount === 0) return '0'
      return amount.toLocaleString('en-US', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
    }
  }
}
</script>

<style scoped>
.promotions-page {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
}

.page-subtitle {
  color: #718096;
  font-size: 14px;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.stat-card {
  height: 100%;
}

.stat-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon-wrapper.primary {
  background: #1976d2;
}

.stat-icon-wrapper.success {
  background: #4caf50;
}

.stat-icon-wrapper.warning {
  background: #ff9800;
}

.stat-icon-wrapper.info {
  background: #2196f3;
}

.stat-icon-wrapper.error {
  background: #f44336;
}

.stat-icon-wrapper.purple {
  background: #9c27b0;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
}

.stat-label {
  font-size: 11px;
  color: #718096;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.promotion-table {
  background: white;
}

.action-buttons {
  display: flex;
  gap: 2px;
}

.usage-progress {
  min-width: 100px;
}

.debug-info {
  font-size: 12px;
  color: #666;
}

@media (max-width: 968px) {
  .stat-card .stat-icon-wrapper {
    width: 48px;
    height: 48px;
  }
  
  .stat-card .stat-value {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .promotions-page {
    padding: 16px;
  }

  .page-header {
    flex-direction: column;
    gap: 16px;
  }

  .header-actions {
    width: 100%;
    flex-direction: column;
  }
  
  .stat-card .d-flex {
    flex-direction: column;
    text-align: center;
  }
  
  .stat-card .ml-3 {
    margin-left: 0;
    margin-top: 8px;
  }
}
</style>