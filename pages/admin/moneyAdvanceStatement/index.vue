<template>
  <div class="simple-bank-statement">
    <!-- Header -->
    <div class="header">
      <h2>Bank Account Statement Entry</h2>
      <small>Simple debit/credit entry form</small>
    </div>

    <!-- Main Form -->
    <div class="statement-form">
      <div class="form-container">
        <div class="form-row">
          <!-- Bank Account -->
          <div class="form-group">
            <label>Bank Account *</label>
            <v-autocomplete
              v-model="form.bankAccountId"
              :items="bankAccounts"
              item-text="accountDisplayName"
              item-value="id"
              label="Search and select bank account..."
              outlined
              dense
              clearable
              :search-input.sync="bankAccountSearch"
              no-data-text="No bank accounts found"
              hide-details
              class="custom-autocomplete"
            >
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title>{{ item.accountName }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.accountNumber }} - {{ item.bankName }}</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </div>

          <!-- Currency -->
          <div class="form-group">
            <label>Currency *</label>
            <v-autocomplete
              v-model="form.currencyId"
              :items="currencies"
              item-text="displayName"
              item-value="id"
              label="Search currency..."
              outlined
              dense
              clearable
              :search-input.sync="currencySearch"
              no-data-text="No currencies found"
              hide-details
              class="custom-autocomplete"
            >
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title>{{ item.code }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </div>
        </div>

        <div class="form-row">
          <!-- Debit Amount -->
          <div class="form-group">
            <label>Debit Amount</label>
            <div class="amount-input">
              <input 
                type="number" 
                v-model="form.debitAmount" 
                step="0.01" 
                min="0" 
                placeholder="0.00"
                @input="clearCredit"
              />
              <span class="currency-label">{{ selectedCurrency?.code || '' }}</span>
            </div>
            <small>Money going out (MoneyAdvance)</small>
          </div>

          <!-- Credit Amount -->
          <div class="form-group">
            <label>Credit Amount</label>
            <div class="amount-input">
              <input 
                type="number" 
                v-model="form.creditAmount" 
                step="0.01" 
                min="0" 
                placeholder="0.00"
                @input="clearDebit"
              />
              <span class="currency-label">{{ selectedCurrency?.code || '' }}</span>
            </div>
            <small>Money coming in (Settlement)</small>
          </div>
        </div>

        <div class="form-row">
          <!-- Transaction Date -->
          <div class="form-group">
            <label>Transaction Date *</label>
            <input type="date" v-model="form.transactionDate" required />
          </div>

          <!-- Description -->
          <div class="form-group">
            <label>Description *</label>
            <input 
              type="text" 
              v-model="form.description" 
              placeholder="Transaction description" 
              required 
            />
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="form-actions">
          <button @click="saveTransaction" :disabled="!isFormValid || saving" class="btn-primary">
            {{ saving ? 'Saving...' : 'Save Transaction' }}
          </button>
          <button @click="resetForm" class="btn-secondary">Clear</button>
        </div>
      </div>
    </div>

    <!-- Recent Transactions -->
    <div class="recent-transactions" v-if="form.bankAccountId">
      <h3>Recent Transactions</h3>
      <div v-if="loadingTransactions" class="loading-state">
        Loading recent transactions...
      </div>
      <div v-else-if="recentTransactions.length === 0" class="no-transactions">
        No recent transactions found for this account
      </div>
      <div v-else class="transactions-list">
        <div v-for="transaction in recentTransactions" :key="`${transaction.type}-${transaction.id}`" 
             class="transaction-item" :class="transaction.type">
          <div class="transaction-info">
            <div class="transaction-header">
              <span class="transaction-type">
                {{ transaction.type === 'debit' ? '📤 Debit' : '📥 Credit' }}
              </span>
              <span class="transaction-amount" :class="transaction.type">
                {{ formatAmount(transaction.amount) }} {{ transaction.currencyCode }}
              </span>
            </div>
            <div class="transaction-details">
              <span class="date">{{ formatDate(transaction.bookingDate) }}</span>
              <span class="description">{{ transaction.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleBankStatement',
  
  data() {
    return {
      saving: false,
      loadingTransactions: false,
      transactionLoadTimeout: null,
      bankAccountSearch: '',
      currencySearch: '',
      
      form: {
        bankAccountId: '',
        currencyId: '',
        debitAmount: '',
        creditAmount: '',
        transactionDate: new Date().toISOString().split('T')[0],
        description: ''
      },
      
      bankAccounts: [],
      currencies: [],
      recentTransactions: []
    }
  },
  
  computed: {
    selectedCurrency() {
      return this.currencies.find(c => c.id === this.form.currencyId)
    },
    
    isFormValid() {
      return this.form.bankAccountId && 
             this.form.currencyId && 
             this.form.transactionDate && 
             this.form.description &&
             (this.form.debitAmount || this.form.creditAmount) &&
             !(this.form.debitAmount && this.form.creditAmount) // Only one should have value
    },
    
    transactionType() {
      if (this.form.debitAmount) return 'debit'
      if (this.form.creditAmount) return 'credit'
      return null
    },
    
    transactionAmount() {
      return this.form.debitAmount || this.form.creditAmount || 0
    }
  },
  
  async created() {
    await this.loadInitialData()
    // Don't load recent transactions initially - only after account is selected
  },
  
  methods: {
    async loadInitialData() {
      try {
        const [bankAccountsRes, currenciesRes] = await Promise.all([
          this.$axios.get('/api/bank_account/find'),
          this.$axios.get('/api/currency/find')
        ])
        
        // Process bank accounts for autocomplete
        this.bankAccounts = (bankAccountsRes.data.data || bankAccountsRes.data || []).map(account => ({
          ...account,
          accountDisplayName: `${account.accountName} - ${account.accountNumber}`,
          searchText: `${account.accountName} ${account.accountNumber} ${account.bankName}`.toLowerCase()
        }))
        
        // Process currencies for autocomplete
        this.currencies = (currenciesRes.data.data || currenciesRes.data || []).map(currency => ({
          ...currency,
          displayName: `${currency.code} - ${currency.name}`,
          searchText: `${currency.code} ${currency.name}`.toLowerCase()
        }))
        
      } catch (error) {
        console.error('Error loading initial data:', error)
        this.$toast.error('Error loading data')
      }
    },
    
    clearCredit() {
      if (this.form.debitAmount) {
        this.form.creditAmount = ''
      }
    },
    
    clearDebit() {
      if (this.form.creditAmount) {
        this.form.debitAmount = ''
      }
    },
    
    async saveTransaction() {
      if (!this.isFormValid) return
      
      this.saving = true
      try {
        const baseData = {
          amount: parseFloat(this.transactionAmount),
          bookingDate: this.form.transactionDate,
          currencyId: this.form.currencyId,
          bankAccountId: this.form.bankAccountId,
          method: 'bank_transfer', // Default method
          status: 'approved' // Auto-approve bank statement entries
        }
        
        if (this.transactionType === 'debit') {
          // Save as MoneyAdvance
          const payload = {
            ...baseData,
            purpose: this.form.description,
            makerId: this.$auth.user?.id || 1, // Default user ID
            receiveName: 'Bank Statement Entry'
          }
          
          await this.$axios.post('/api/money-advances', payload)
          this.$toast.success('Debit transaction saved successfully')
          
        } else {
          // Save as Settlement
          const payload = {
            ...baseData,
            notes: this.form.description,
            userId: this.$auth.user?.id || 1, // Default user ID
            fromPersonName: 'Bank Statement Entry'
          }
          
          await this.$axios.post('/api/settlements', payload)
          this.$toast.success('Credit transaction saved successfully')
        }
        
        this.resetForm()
        await this.loadRecentTransactions()
        
      } catch (error) {
        console.error('Error saving transaction:', error)
        this.$toast.error('Error saving transaction')
      } finally {
        this.saving = false
      }
    },
    
    async loadRecentTransactions() {
      if (!this.form.bankAccountId) {
        this.recentTransactions = []
        return
      }
      
      this.loadingTransactions = true
      try {
        const today = new Date()
        const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
        
        const params = {
          bankAccountId: this.form.bankAccountId,
          fromDate: lastWeek.toISOString().split('T')[0],
          toDate: today.toISOString().split('T')[0]
        }
        
        // Load both advances (debits) and settlements (credits)
        const [advancesRes, settlementsRes] = await Promise.all([
          this.$axios.get('/api/money-advances', { params }).catch(() => ({ data: { data: [] } })),
          this.$axios.get('/api/settlements', { params }).catch(() => ({ data: { data: [] } }))
        ])
        
        const advances = (advancesRes.data.data?.advances || advancesRes.data.data || []).map(item => ({
          ...item,
          type: 'debit',
          description: item.purpose || 'No description',
          currencyCode: item.currency?.code || 'N/A'
        }))
        
        const settlements = (settlementsRes.data.data || []).map(item => ({
          ...item,
          type: 'credit',
          description: item.notes || 'No description',
          currencyCode: item.currency?.code || 'N/A'
        }))
        
        // Combine and sort by date
        this.recentTransactions = [...advances, ...settlements]
          .sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate))
          .slice(0, 10) // Show only last 10 transactions
        
      } catch (error) {
        console.error('Error loading recent transactions:', error)
        this.recentTransactions = []
      } finally {
        this.loadingTransactions = false
      }
    },
    
    resetForm() {
      this.form = {
        bankAccountId: '',
        currencyId: '',
        debitAmount: '',
        creditAmount: '',
        transactionDate: new Date().toISOString().split('T')[0],
        description: ''
      }
      this.recentTransactions = []
    },
    
    formatAmount(amount) {
      if (!amount && amount !== 0) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    },
    
    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-US')
    }
  },
  
  watch: {
    'form.bankAccountId'(newValue, oldValue) {
      // Only load transactions if the value actually changed and is not empty
      if (newValue && newValue !== oldValue) {
        // Debounce the call to prevent rapid API calls
        clearTimeout(this.transactionLoadTimeout)
        this.transactionLoadTimeout = setTimeout(() => {
          this.loadRecentTransactions()
        }, 300)
      } else if (!newValue) {
        // Clear transactions if no account selected
        this.recentTransactions = []
      }
    }
  },

  beforeDestroy() {
    // Clear timeout if component is destroyed
    if (this.transactionLoadTimeout) {
      clearTimeout(this.transactionLoadTimeout)
    }
  }
}
</script>

<style scoped>
.simple-bank-statement {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e9ecef;
}

.header h2 {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 24px;
  font-weight: 600;
}

.header small {
  color: #6c757d;
  font-size: 14px;
}

/* Form */
.statement-form {
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-container {
  display: grid;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 8px;
  font-weight: 600;
  color: #495057;
  font-size: 14px;
}

.form-group input,
.form-group select {
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #007bff;
}

.form-group small {
  margin-top: 4px;
  color: #6c757d;
  font-size: 12px;
}

/* Custom autocomplete styling */
.custom-autocomplete {
  margin-top: 4px;
}

.custom-autocomplete >>> .v-input__control {
  min-height: 48px;
}

.custom-autocomplete >>> .v-input__slot {
  border: 2px solid #e9ecef !important;
  border-radius: 6px !important;
  background: white !important;
}

.custom-autocomplete.v-input--is-focused >>> .v-input__slot {
  border-color: #007bff !important;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
}

.custom-autocomplete >>> .v-select__selection {
  color: #495057;
  font-weight: 500;
}

.custom-autocomplete >>> .v-input__append-inner {
  margin-top: 8px;
}

/* Amount Input */
.amount-input {
  position: relative;
  display: flex;
}

.amount-input input {
  padding-right: 60px;
  font-family: monospace;
  font-weight: 600;
}

.currency-label {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #007bff;
  font-weight: 600;
  font-size: 14px;
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 3px;
}

/* Buttons */
.form-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #0056b3;
}

.btn-primary:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #545b62;
}

/* Recent Transactions */
.recent-transactions {
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  min-height: 150px; /* Prevent layout jump */
}

.recent-transactions h3 {
  margin: 0 0 20px 0;
  color: #2c3e50;
  font-size: 18px;
  font-weight: 600;
}

.loading-state,
.no-transactions {
  text-align: center;
  padding: 40px 20px;
  color: #6c757d;
  font-style: italic;
}

.loading-state {
  color: #007bff;
}

.transactions-list {
  display: grid;
  gap: 12px;
}

.transaction-item {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 15px;
  border-left: 4px solid #e9ecef;
  transition: all 0.2s;
}

.transaction-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.transaction-item.debit {
  border-left-color: #dc3545;
}

.transaction-item.credit {
  border-left-color: #28a745;
}

.transaction-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.transaction-type {
  font-weight: 600;
  font-size: 14px;
  color: #495057;
}

.transaction-amount {
  font-family: monospace;
  font-weight: 700;
  font-size: 16px;
}

.transaction-amount.debit {
  color: #dc3545;
}

.transaction-amount.credit {
  color: #28a745;
}

.transaction-details {
  display: flex;
  gap: 15px;
  font-size: 13px;
}

.transaction-details .date {
  color: #6c757d;
  font-family: monospace;
}

.transaction-details .description {
  color: #495057;
  flex: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .transaction-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  
  .transaction-details {
    flex-direction: column;
    gap: 5px;
  }
}
</style>