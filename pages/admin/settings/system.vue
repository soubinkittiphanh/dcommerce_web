<template>
  <div class="system-parameters-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-left">
        <h1>System Parameters</h1>
        <p class="subtitle">Configure system-wide settings and preferences</p>
      </div>
      <div class="header-actions">
        <button @click="resetToDefaults" class="btn-secondary">
          <span class="icon">↺</span>
          Reset to Defaults
        </button>
        <button @click="saveAllSettings" class="btn-primary" :disabled="saving">
          <span class="icon">💾</span>
          {{ saving ? 'Saving...' : 'Save All Changes' }}
        </button>
      </div>
    </div>

    <!-- Settings Categories -->
    <div class="settings-container">
      <!-- Category Tabs -->
      <div class="category-tabs">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="['category-tab', { active: activeCategory === category.id }]"
        >
          <span class="tab-icon">{{ category.icon }}</span>
          <span class="tab-label">{{ category.label }}</span>
        </button>
      </div>

      <!-- Settings Content -->
      <div class="settings-content">
        <!-- General Settings -->
        <div v-show="activeCategory === 'general'" class="settings-section">
          <h2 class="section-title">General Settings</h2>

          <div class="setting-group">
            <label class="setting-label">Restaurant Name</label>
            <input
              v-model="settings.general.restaurantName"
              type="text"
              class="setting-input"
              placeholder="Enter restaurant name"
            />
            <span class="setting-hint">Displayed on receipts and reports</span>
          </div>

          <div class="setting-group">
            <label class="setting-label">Restaurant Address</label>
            <textarea
              v-model="settings.general.restaurantAddress"
              class="setting-textarea"
              rows="3"
              placeholder="Enter full address"
            ></textarea>
          </div>

          <div class="setting-group">
            <label class="setting-label">Contact Phone</label>
            <input
              v-model="settings.general.contactPhone"
              type="tel"
              class="setting-input"
              placeholder="+856 20 XXXX XXXX"
            />
          </div>

          <div class="setting-group">
            <label class="setting-label">Contact Email</label>
            <input
              v-model="settings.general.contactEmail"
              type="email"
              class="setting-input"
              placeholder="info@restaurant.com"
            />
          </div>

          <div class="setting-group">
            <label class="setting-label">Business Hours</label>
            <div class="time-range">
              <input
                v-model="settings.general.openingTime"
                type="time"
                class="setting-input small"
              />
              <span class="separator">to</span>
              <input
                v-model="settings.general.closingTime"
                type="time"
                class="setting-input small"
              />
            </div>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.general.maintenanceMode"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Maintenance Mode</span>
            </label>
            <span class="setting-hint">Temporarily disable POS operations</span>
          </div>
        </div>

        <!-- Tax & Pricing Settings -->
        <div v-show="activeCategory === 'pricing'" class="settings-section">
          <h2 class="section-title">Tax & Pricing</h2>

          <div class="setting-group">
            <label class="setting-label">Tax Rate (%)</label>
            <input
              v-model.number="settings.pricing.taxRate"
              type="number"
              step="0.01"
              min="0"
              max="100"
              class="setting-input"
            />
            <span class="setting-hint">Default: 8.5%</span>
          </div>

          <div class="setting-group">
            <label class="setting-label">Service Charge (%)</label>
            <input
              v-model.number="settings.pricing.serviceCharge"
              type="number"
              step="0.01"
              min="0"
              max="100"
              class="setting-input"
            />
            <span class="setting-hint">Additional service charge percentage</span>
          </div>

          <div class="setting-group">
            <label class="setting-label">Currency</label>
            <select v-model="settings.pricing.currency" class="setting-select">
              <option value="LAK">Lao Kip (₭)</option>
              <option value="USD">US Dollar ($)</option>
              <option value="THB">Thai Baht (฿)</option>
              <option value="EUR">Euro (€)</option>
            </select>
          </div>

          <div class="setting-group">
            <label class="setting-label">Currency Symbol Position</label>
            <div class="radio-group">
              <label class="radio-label">
                <input
                  v-model="settings.pricing.currencyPosition"
                  type="radio"
                  value="before"
                  class="setting-radio"
                />
                <span>Before (₭100)</span>
              </label>
              <label class="radio-label">
                <input
                  v-model="settings.pricing.currencyPosition"
                  type="radio"
                  value="after"
                  class="setting-radio"
                />
                <span>After (100₭)</span>
              </label>
            </div>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.pricing.roundPrices"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Round Prices to Nearest Whole Number</span>
            </label>
          </div>
        </div>

        <!-- Receipt Settings -->
        <div v-show="activeCategory === 'receipt'" class="settings-section">
          <h2 class="section-title">Receipt Settings</h2>

          <div class="setting-group">
            <label class="setting-label">Receipt Header</label>
            <textarea
              v-model="settings.receipt.header"
              class="setting-textarea"
              rows="3"
              placeholder="Custom header text for receipts"
            ></textarea>
          </div>

          <div class="setting-group">
            <label class="setting-label">Receipt Footer</label>
            <textarea
              v-model="settings.receipt.footer"
              class="setting-textarea"
              rows="3"
              placeholder="Thank you for dining with us!"
            ></textarea>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.receipt.showTax"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Show Tax Breakdown</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.receipt.showLogo"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Show Restaurant Logo</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.receipt.autoPrint"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Auto-print Receipt After Payment</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">Receipt Paper Size</label>
            <select v-model="settings.receipt.paperSize" class="setting-select">
              <option value="80mm">80mm (Standard)</option>
              <option value="58mm">58mm (Small)</option>
              <option value="A4">A4 (Letter)</option>
            </select>
          </div>
        </div>

        <!-- Order Settings -->
        <div v-show="activeCategory === 'orders'" class="settings-section">
          <h2 class="section-title">Order Management</h2>

          <div class="setting-group">
            <label class="setting-label">Auto-refresh Interval (seconds)</label>
            <input
              v-model.number="settings.orders.autoRefreshInterval"
              type="number"
              min="5"
              max="300"
              class="setting-input"
            />
            <span class="setting-hint">Default: 30 seconds</span>
          </div>

          <div class="setting-group">
            <label class="setting-label">Preparation Time Alert (minutes)</label>
            <input
              v-model.number="settings.orders.prepTimeAlert"
              type="number"
              min="1"
              max="60"
              class="setting-input"
            />
            <span class="setting-hint">Alert when order exceeds this time</span>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.orders.requireCancelReason"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Require Reason for Cancellation</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.orders.allowModifyAfterPrint"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Allow Order Modification After Print</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.orders.notifyKitchen"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Send Notifications to Kitchen Display</span>
            </label>
          </div>
        </div>

        <!-- Inventory Settings -->
        <div v-show="activeCategory === 'inventory'" class="settings-section">
          <h2 class="section-title">Inventory Management</h2>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.inventory.trackStock"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Enable Stock Tracking</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">Low Stock Alert Threshold</label>
            <input
              v-model.number="settings.inventory.lowStockThreshold"
              type="number"
              min="0"
              class="setting-input"
            />
            <span class="setting-hint">Alert when stock falls below this number</span>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.inventory.preventNegativeStock"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Prevent Sales with Insufficient Stock</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.inventory.autoDeductStock"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Auto-deduct Stock on Sale</span>
            </label>
          </div>
        </div>

        <!-- Notifications Settings -->
        <div v-show="activeCategory === 'notifications'" class="settings-section">
          <h2 class="section-title">Notifications</h2>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.notifications.emailNotifications"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Enable Email Notifications</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.notifications.smsNotifications"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Enable SMS Notifications</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">Notification Email</label>
            <input
              v-model="settings.notifications.notificationEmail"
              type="email"
              class="setting-input"
              placeholder="admin@restaurant.com"
            />
          </div>

          <div class="setting-group">
            <label class="setting-label">Notify On:</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input
                  v-model="settings.notifications.notifyOnNewOrder"
                  type="checkbox"
                  class="setting-checkbox"
                />
                <span>New Orders</span>
              </label>
              <label class="checkbox-label">
                <input
                  v-model="settings.notifications.notifyOnLowStock"
                  type="checkbox"
                  class="setting-checkbox"
                />
                <span>Low Stock</span>
              </label>
              <label class="checkbox-label">
                <input
                  v-model="settings.notifications.notifyOnPayment"
                  type="checkbox"
                  class="setting-checkbox"
                />
                <span>Payments</span>
              </label>
              <label class="checkbox-label">
                <input
                  v-model="settings.notifications.notifyOnCancellation"
                  type="checkbox"
                  class="setting-checkbox"
                />
                <span>Order Cancellations</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Security Settings -->
        <div v-show="activeCategory === 'security'" class="settings-section">
          <h2 class="section-title">Security & Access</h2>

          <div class="setting-group">
            <label class="setting-label">Session Timeout (minutes)</label>
            <input
              v-model.number="settings.security.sessionTimeout"
              type="number"
              min="5"
              max="1440"
              class="setting-input"
            />
            <span class="setting-hint">Automatically log out after inactivity</span>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.security.requirePasswordChange"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Require Password Change Every 90 Days</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.security.enableTwoFactor"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Enable Two-Factor Authentication</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">
              <input
                v-model="settings.security.logUserActivity"
                type="checkbox"
                class="setting-checkbox"
              />
              <span>Log User Activity</span>
            </label>
          </div>

          <div class="setting-group">
            <label class="setting-label">Maximum Login Attempts</label>
            <input
              v-model.number="settings.security.maxLoginAttempts"
              type="number"
              min="3"
              max="10"
              class="setting-input"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <div v-if="showResetDialog" class="modal-overlay" @click="showResetDialog = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Reset to Defaults</h3>
          <button @click="showResetDialog = false" class="modal-close">×</button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to reset all settings to default values?</p>
          <p class="warning-text">This action cannot be undone.</p>
        </div>
        <div class="modal-footer">
          <button @click="showResetDialog = false" class="btn-secondary">Cancel</button>
          <button @click="confirmReset" class="btn-danger">Reset All</button>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="showToast" :class="['toast', toastType]">
      <span class="toast-icon">{{ toastIcon }}</span>
      <span class="toast-message">{{ toastMessage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SystemParametersPage',

  data() {
    return {
      activeCategory: 'general',
      saving: false,
      showResetDialog: false,
      showToast: false,
      toastMessage: '',
      toastType: 'success',

      categories: [
        { id: 'general', label: 'General', icon: '⚙️' },
        { id: 'pricing', label: 'Tax & Pricing', icon: '💰' },
        { id: 'receipt', label: 'Receipts', icon: '🧾' },
        { id: 'orders', label: 'Orders', icon: '📋' },
        { id: 'inventory', label: 'Inventory', icon: '📦' },
        { id: 'notifications', label: 'Notifications', icon: '🔔' },
        { id: 'security', label: 'Security', icon: '🔒' },
      ],

      settings: {
        general: {
          restaurantName: 'My Restaurant',
          restaurantAddress: '123 Main Street\nVientiane, Laos',
          contactPhone: '+856 20 1234 5678',
          contactEmail: 'info@restaurant.com',
          openingTime: '09:00',
          closingTime: '22:00',
          maintenanceMode: false,
        },
        pricing: {
          taxRate: 8.5,
          serviceCharge: 0,
          currency: 'LAK',
          currencyPosition: 'after',
          roundPrices: false,
        },
        receipt: {
          header: 'Welcome to Our Restaurant',
          footer: 'Thank you for dining with us!\nPlease come again.',
          showTax: true,
          showLogo: true,
          autoPrint: false,
          paperSize: '80mm',
        },
        orders: {
          autoRefreshInterval: 30,
          prepTimeAlert: 15,
          requireCancelReason: true,
          allowModifyAfterPrint: false,
          notifyKitchen: true,
        },
        inventory: {
          trackStock: true,
          lowStockThreshold: 10,
          preventNegativeStock: true,
          autoDeductStock: true,
        },
        notifications: {
          emailNotifications: true,
          smsNotifications: false,
          notificationEmail: 'admin@restaurant.com',
          notifyOnNewOrder: true,
          notifyOnLowStock: true,
          notifyOnPayment: false,
          notifyOnCancellation: true,
        },
        security: {
          sessionTimeout: 60,
          requirePasswordChange: false,
          enableTwoFactor: false,
          logUserActivity: true,
          maxLoginAttempts: 5,
        },
      },

      defaultSettings: null,
    }
  },

  computed: {
    toastIcon() {
      const icons = {
        success: '✓',
        error: '✗',
        warning: '⚠',
        info: 'ℹ',
      }
      return icons[this.toastType] || 'ℹ'
    },
  },

  mounted() {
    this.loadSettings()
    // Save default settings for reset functionality
    this.defaultSettings = JSON.parse(JSON.stringify(this.settings))
  },

  methods: {
    async loadSettings() {
      try {
        const response = await this.$axios.get('/api/system-parameters')
        if (response.data.success && response.data.data) {
          this.settings = { ...this.settings, ...response.data.data }
        }
      } catch (error) {
        console.error('Error loading settings:', error)
        // Use default settings if API fails
      }
    },

    async saveAllSettings() {
      this.saving = true
      try {
        await this.$axios.put('/api/system-parameters', this.settings)
        
        this.showToastMessage('Settings saved successfully!', 'success')
        
        // Optionally reload settings to confirm
        await this.loadSettings()
      } catch (error) {
        console.error('Error saving settings:', error)
        this.showToastMessage('Failed to save settings', 'error')
      } finally {
        this.saving = false
      }
    },

    resetToDefaults() {
      this.showResetDialog = true
    },

    confirmReset() {
      this.settings = JSON.parse(JSON.stringify(this.defaultSettings))
      this.showResetDialog = false
      this.showToastMessage('Settings reset to defaults', 'info')
    },

    showToastMessage(message, type = 'success') {
      this.toastMessage = message
      this.toastType = type
      this.showToast = true

      setTimeout(() => {
        this.showToast = false
      }, 3000)
    },
  },
}
</script>

<style scoped>
.system-parameters-page {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  background: #f7fafc;
  min-height: 100vh;
}

/* Page Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-left h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 8px 0;
}

.subtitle {
  color: #718096;
  font-size: 14px;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.btn-primary,
.btn-secondary,
.btn-danger {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn-primary {
  background: #4299e1;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #3182ce;
  transform: translateY(-1px);
}

.btn-primary:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
}

.btn-secondary {
  background: #e2e8f0;
  color: #2d3748;
}

.btn-secondary:hover {
  background: #cbd5e0;
}

.btn-danger {
  background: #f56565;
  color: white;
}

.btn-danger:hover {
  background: #e53e3e;
}

.icon {
  font-size: 18px;
}

/* Settings Container */
.settings-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 24px;
  align-items: start;
}

/* Category Tabs */
.category-tabs {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 24px;
}

.category-tab {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  color: #4a5568;
}

.category-tab:hover {
  background: #f7fafc;
}

.category-tab.active {
  background: #ebf8ff;
  color: #2c5282;
}

.tab-icon {
  font-size: 20px;
}

/* Settings Content */
.settings-content {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.settings-section {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 24px 0;
  padding-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
}

/* Setting Groups */
.setting-group {
  margin-bottom: 24px;
}

.setting-label {
  display: block;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 8px;
  font-size: 14px;
}

.setting-input,
.setting-select,
.setting-textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s;
  font-family: inherit;
}

.setting-input:focus,
.setting-select:focus,
.setting-textarea:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.setting-input.small {
  width: 150px;
}

.setting-textarea {
  resize: vertical;
  min-height: 80px;
}

.setting-hint {
  display: block;
  font-size: 12px;
  color: #718096;
  margin-top: 6px;
  font-style: italic;
}

.time-range {
  display: flex;
  align-items: center;
  gap: 12px;
}

.separator {
  color: #718096;
  font-weight: 500;
}

/* Checkbox and Radio */
.setting-checkbox,
.setting-radio {
  margin-right: 8px;
  cursor: pointer;
}

.setting-label input[type="checkbox"] {
  margin-right: 8px;
}

.radio-group,
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-label,
.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  color: #4a5568;
}

.radio-label:hover,
.checkbox-label:hover {
  color: #2d3748;
}

/* Modal */
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
  animation: fadeIn 0.2s ease;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
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

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #1a202c;
}

.modal-close {
  background: none;
  border: none;
  font-size: 28px;
  color: #718096;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
}

.modal-close:hover {
  background: #f7fafc;
  color: #2d3748;
}

.modal-body {
  padding: 24px;
}

.modal-body p {
  margin: 0 0 12px 0;
  color: #4a5568;
}

.warning-text {
  color: #e53e3e;
  font-weight: 600;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #e2e8f0;
}

/* Toast */
.toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: white;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1001;
  animation: slideIn 0.3s ease;
  border-left: 4px solid #48bb78;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast.error {
  border-left-color: #f56565;
}

.toast.warning {
  border-left-color: #ed8936;
}

.toast.info {
  border-left-color: #4299e1;
}

.toast-icon {
  font-size: 20px;
  font-weight: bold;
}

.toast.success .toast-icon {
  color: #48bb78;
}

.toast.error .toast-icon {
  color: #f56565;
}

.toast.warning .toast-icon {
  color: #ed8936;
}

.toast.info .toast-icon {
  color: #4299e1;
}

.toast-message {
  font-weight: 500;
  color: #2d3748;
}

/* Responsive */
@media (max-width: 1024px) {
  .settings-container {
    grid-template-columns: 1fr;
  }

  .category-tabs {
    position: static;
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
  }

  .category-tab {
    flex-shrink: 0;
  }
}

@media (max-width: 768px) {
  .system-parameters-page {
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

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .settings-content {
    padding: 20px;
  }

  .time-range {
    flex-direction: column;
    align-items: stretch;
  }

  .setting-input.small {
    width: 100%;
  }
}
</style>