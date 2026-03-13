<template>
  <div class="ac-statement-compact">
    <!-- Header -->
    <div class="page-header">
      <div class="header-content">
        <h1>ບັນທຶກບັນຊີທະນາຄານ</h1>
        <p>Account Statement Entry</p>
      </div>
    </div>

    <!-- Compact Form Card -->
    <div class="form-card">
      <form @submit.prevent="saveStatement">
        <!-- Row 1: Bank Account & Date -->
        <div class="form-grid">
          <div class="form-field">
            <label>ບັນຊີທະນາຄານ <span class="required">*</span></label>
            <v-autocomplete
              v-model="form.bankAccountId"
              :items="bankAccounts"
              item-text="accountDisplayName"
              item-value="id"
              placeholder="ເລືອກບັນຊີ..."
              outlined
              dense
              hide-details
              @change="onBankAccountChange"
            >
              <template v-slot:selection="{ item }">
                <span class="select-text">{{ item.accountName }} - {{ item.accountNumber }}</span>
              </template>
              <template v-slot:item="{ item }">
                <div class="select-item">
                  <div class="item-name">{{ item.accountName }}</div>
                  <div class="item-sub">{{ item.accountNumber }} · {{ item.bankName }}</div>
                </div>
              </template>
            </v-autocomplete>
          </div>

          <div class="form-field">
            <label>ວັນທີ <span class="required">*</span></label>
            <input type="date" v-model="form.bookingDate" class="input-date" />
          </div>
        </div>

        <!-- Row 2: Amounts -->
        <div class="form-grid amount-grid">
          <div class="form-field">
            <label>ຈຳນວນເງິນເຂົ້າ (Credit)</label>
            <div class="amount-wrapper credit-input">
              <span class="amount-icon">+</span>
              <input 
                type="number" 
                v-model="form.creditAmount" 
                placeholder="0.00"
                step="0.01"
                min="0"
                @input="onCreditInput"
              />
            </div>
          </div>

          <div class="form-field">
            <label>ຈຳນວນເງິນອອກ (Debit)</label>
            <div class="amount-wrapper debit-input">
              <span class="amount-icon">-</span>
              <input 
                type="number" 
                v-model="form.debitAmount" 
                placeholder="0.00"
                step="0.01"
                min="0"
                @input="onDebitInput"
              />
            </div>
          </div>
        </div>

        <!-- Row 3: Exchange Rate -->
        <div class="form-grid exchange-grid">
          <div class="form-field">
            <label>ອັດຕາແລກປ່ຽນ (Exchange Rate)</label>
            <div class="amount-wrapper exchange-input">
              <span class="amount-icon">≈</span>
              <input 
                type="number" 
                v-model="form.exchangeRate" 
                placeholder="1.00"
                step="0.01"
                min="0.01"
              />
            </div>
          </div>
          <div class="form-field">
            <!-- Empty field to maintain grid layout -->
          </div>
        </div>

        <!-- Balance Display with Manual Override Option -->
        <div class="balance-section" v-if="form.bankAccountId">
          <!-- Auto-calculated balance display -->
          <div v-if="!manualBalanceMode" class="balance-strip">
            <div class="balance-item">
              <span class="label">ຍອດເດີມ:</span>
              <span class="value">{{ formatAmount(previousBalance) }}</span>
            </div>
            <div class="balance-divider">→</div>
            <div class="balance-item" :class="transactionClass">
              <span class="label">ທຸລະກຳ:</span>
              <span class="value">{{ transactionSign }}{{ formatAmount(transactionAmount) }}</span>
            </div>
            <div class="balance-divider">→</div>
            <div class="balance-item highlight">
              <span class="label">ຍອດສຸດທ້າຍ:</span>
              <span class="value">{{ formatAmount(calculatedEndingBalance) }}</span>
            </div>
          </div>

          <!-- Manual balance input mode -->
          <div v-else class="manual-balance-wrapper">
            <div class="form-grid">
              <div class="form-field">
                <label>ຍອດເດີມ (ຈາກລະບົບ)</label>
                <input 
                  type="text" 
                  :value="formatAmount(previousBalance)" 
                  class="input-text"
                  disabled
                />
              </div>
              <div class="form-field">
                <label>ຍອດສຸດທ້າຍ (ກະລຸນາປ້ອນ) <span class="required">*</span></label>
                <div class="amount-wrapper manual-input">
                  <input 
                    type="number" 
                    v-model="form.endingBalance" 
                    placeholder="0.00"
                    step="0.01"
                    class="input-manual-balance"
                  />
                </div>
              </div>
            </div>
            <div class="balance-difference" v-if="balanceDifference !== 0">
              <span class="diff-label">⚠️ ຄວາມແຕກຕ່າງ:</span>
              <span class="diff-value" :class="balanceDifference > 0 ? 'positive' : 'negative'">
                {{ balanceDifference > 0 ? '+' : '' }}{{ formatAmount(balanceDifference) }}
              </span>
              <span class="diff-note">
                (ການຄິດໄລ່: {{ formatAmount(calculatedEndingBalance) }})
              </span>
            </div>
          </div>

          <!-- Toggle button -->
          <div class="balance-mode-toggle">
            <button 
              type="button" 
              @click="toggleBalanceMode" 
              class="btn-toggle"
              :class="{ active: manualBalanceMode }"
            >
              <span v-if="!manualBalanceMode">✏️ ປ້ອນຍອດສຸດທ້າຍເອງ</span>
              <span v-else>🔄 ໃຊ້ການຄິດໄລ່ອັດຕະໂນມັດ</span>
            </button>
            <small v-if="manualBalanceMode" class="toggle-hint">
              ໃຊ້ເມື່ອຍອດຄິດໄລ່ບໍ່ກົງກັບໃບແຈ້ງຍອດທະນາຄານ
            </small>
          </div>
        </div>

        <!-- Actions -->
        <div class="form-actions">
          <button type="submit" :disabled="!isFormValid || saving" class="btn-save">
            {{ saving ? 'ກຳລັງບັນທຶກ...' : (editMode ? 'ອັບເດດ' : 'ບັນທຶກ') }}
          </button>
          <button type="button" @click="resetForm" class="btn-clear">
            {{ editMode ? 'ຍົກເລີກ' : 'ລ້າງ' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Compact Table -->
    <div class="table-card" v-if="form.bankAccountId">
      <div class="table-toolbar">
        <h2>ບັນທຶກລ່າສຸດ</h2>
        <div class="toolbar-actions">
          <button @click="loadStatements" :disabled="loadingStatements" class="btn-icon">
            🔄
          </button>
          <button @click="showBalanceSummary" class="btn-icon">
            📊
          </button>
        </div>
      </div>

      <div v-if="loadingStatements" class="empty-state">
        <div class="spinner"></div>
        <p>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
      </div>

      <div v-else-if="statements.length === 0" class="empty-state">
        <p>ບໍ່ມີຂໍ້ມູນ</p>
      </div>

      <div v-else class="table-wrapper">
        <table class="compact-table">
          <thead>
            <tr>
              <th>ວັນທີ</th>
              <th class="amount">ເງິນອອກ</th>
              <th class="amount">ເງິນເຂົ້າ</th>
              <th class="amount">ຍອດຄົງເຫຼືອ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stmt in statements" :key="stmt.id" :class="{'is-reconciled': stmt.status === 'reconciled'}">
              <td class="nowrap">{{ formatDateShort(stmt.bookingDate) }}</td>
              <td class="amount debit">{{ stmt.debitAmount > 0 ? formatAmount(stmt.debitAmount) : '-' }}</td>
              <td class="amount credit">{{ stmt.creditAmount > 0 ? formatAmount(stmt.creditAmount) : '-' }}</td>
              <td class="amount balance">{{ formatAmount(stmt.endingBalance) }}</td>
              <td class="actions">
                <button @click="editStatement(stmt)" class="btn-mini" title="ແກ້ໄຂ">✏️</button>
                <button @click="deleteStatement(stmt.id)" class="btn-mini" title="ລຶບ">🗑️</button>
                <button 
                  v-if="stmt.status !== 'reconciled'" 
                  @click="reconcileStatement(stmt.id)" 
                  class="btn-mini" 
                  title="ຢືນຢັນ"
                >
                  ✓
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Compact Pagination -->
      <div class="pagination" v-if="pagination.totalPages > 1">
        <button 
          @click="changePage(pagination.page - 1)" 
          :disabled="pagination.page <= 1"
          class="btn-page"
        >
          ‹
        </button>
        <span class="page-info">{{ pagination.page }} / {{ pagination.totalPages }}</span>
        <button 
          @click="changePage(pagination.page + 1)" 
          :disabled="pagination.page >= pagination.totalPages"
          class="btn-page"
        >
          ›
        </button>
      </div>
    </div>

    <!-- Summary Modal -->
    <transition name="modal">
      <div v-if="showSummaryModal" class="modal-backdrop" @click="showSummaryModal = false">
        <div class="modal-dialog" @click.stop>
          <div class="modal-header">
            <h3>ສະຫຼຸບຍອດເງິນ</h3>
            <button @click="showSummaryModal = false" class="btn-close">×</button>
          </div>
          <div class="modal-body" v-if="balanceSummary">
            <div class="summary-list">
              <div class="summary-row">
                <span>ຍອດເປີດ:</span>
                <strong>{{ formatAmount(balanceSummary.openingBalance) }}</strong>
              </div>
              <div class="summary-row credit">
                <span>ເງິນເຂົ້າທັງໝົດ:</span>
                <strong>+{{ formatAmount(balanceSummary.totalCredit) }}</strong>
              </div>
              <div class="summary-row debit">
                <span>ເງິນອອກທັງໝົດ:</span>
                <strong>-{{ formatAmount(balanceSummary.totalDebit) }}</strong>
              </div>
              <div class="summary-row highlight">
                <span>ຍອດປິດ:</span>
                <strong>{{ formatAmount(balanceSummary.closingBalance) }}</strong>
              </div>
              <div class="summary-row">
                <span>ຈຳນວນທຸລະກຳ:</span>
                <strong>{{ balanceSummary.transactionCount }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AccountStatementCompact',
  
  data() {
    return {
      saving: false,
      loadingStatements: false,
      editMode: false,
      editingId: null,
      manualBalanceMode: false,
      
      form: {
        bankAccountId: '',
        bookingDate: new Date().toISOString().split('T')[0],
        creditAmount: '',
        debitAmount: '',
        endingBalance: '',
        exchangeRate: 1.00
      },
      
      bankAccounts: [],
      statements: [],
      previousBalance: 0,
      
      pagination: {
        page: 1,
        limit: 20,
        total: 0,
        totalPages: 0
      },

      showSummaryModal: false,
      balanceSummary: null
    }
  },
  
  computed: {
    transactionAmount() {
      const credit = parseFloat(this.form.creditAmount) || 0
      const debit = parseFloat(this.form.debitAmount) || 0
      return credit || debit
    },

    transactionSign() {
      if (this.form.creditAmount && parseFloat(this.form.creditAmount) > 0) return '+'
      if (this.form.debitAmount && parseFloat(this.form.debitAmount) > 0) return '-'
      return ''
    },

    transactionClass() {
      if (this.form.creditAmount && parseFloat(this.form.creditAmount) > 0) return 'credit'
      if (this.form.debitAmount && parseFloat(this.form.debitAmount) > 0) return 'debit'
      return ''
    },

    calculatedEndingBalance() {
      const credit = parseFloat(this.form.creditAmount) || 0
      const debit = parseFloat(this.form.debitAmount) || 0
      return this.previousBalance + credit - debit
    },

    finalEndingBalance() {
      if (this.manualBalanceMode && this.form.endingBalance !== '') {
        return parseFloat(this.form.endingBalance) || 0
      }
      return this.calculatedEndingBalance
    },

    balanceDifference() {
      if (!this.manualBalanceMode || this.form.endingBalance === '') {
        return 0
      }
      const manual = parseFloat(this.form.endingBalance) || 0
      return manual - this.calculatedEndingBalance
    },
    
    isFormValid() {
      const baseValid = this.form.bankAccountId && this.form.bookingDate
      
      if (this.manualBalanceMode) {
        return baseValid && this.form.endingBalance !== ''
      }
      
      return baseValid
    }
  },
  
  async created() {
    await this.loadBankAccounts()
  },
  
  methods: {
    async loadBankAccounts() {
      try {
        const res = await this.$axios.get('/api/bank_account/find')
        this.bankAccounts = (res.data.data || res.data || []).map(account => ({
          ...account,
          accountDisplayName: `${account.accountName} - ${account.accountNumber}`
        })).filter((account) => account.isActive)
      } catch (error) {
        console.error('Error loading bank accounts:', error)
        this.$toast.error('ບໍ່ສາມາດໂຫຼດບັນຊີໄດ້')
      }
    },

    async onBankAccountChange() {
      if (this.form.bankAccountId) {
        await this.loadPreviousBalance()
        await this.loadStatements()
      } else {
        this.previousBalance = 0
        this.statements = []
      }
    },

    async loadPreviousBalance() {
      try {
        const res = await this.$axios.get('/api/ac-statement', {
          params: {
            bankAccountId: this.form.bankAccountId,
            limit: 1,
            sortBy: 'bookingDate',
            sortOrder: 'DESC'
          }
        })

        const statements = res.data.data || []
        if (statements.length > 0) {
          this.previousBalance = parseFloat(statements[0].endingBalance) || 0
        } else {
          this.previousBalance = 0
        }
      } catch (error) {
        console.error('Error loading previous balance:', error)
        this.previousBalance = 0
      }
    },

    onCreditInput() {
      if (this.form.creditAmount && parseFloat(this.form.creditAmount) > 0) {
        this.form.debitAmount = ''
      }
      // Update manual balance with calculated if not in manual mode
      if (!this.manualBalanceMode) {
        this.form.endingBalance = ''
      }
    },

    onDebitInput() {
      if (this.form.debitAmount && parseFloat(this.form.debitAmount) > 0) {
        this.form.creditAmount = ''
      }
      // Update manual balance with calculated if not in manual mode
      if (!this.manualBalanceMode) {
        this.form.endingBalance = ''
      }
    },

    toggleBalanceMode() {
      this.manualBalanceMode = !this.manualBalanceMode
      
      if (this.manualBalanceMode) {
        // Switching to manual mode - pre-fill with calculated balance
        this.form.endingBalance = this.calculatedEndingBalance.toFixed(2)
      } else {
        // Switching to auto mode - clear manual input
        this.form.endingBalance = ''
      }
    },
    
    async saveStatement() {
      if (!this.isFormValid) return
      
      this.saving = true
      try {
        const payload = {
          bankAccountId: this.form.bankAccountId,
          bookingDate: this.form.bookingDate,
          creditAmount: parseFloat(this.form.creditAmount) || 0,
          debitAmount: parseFloat(this.form.debitAmount) || 0,
          endingBalance: this.finalEndingBalance,
          exchangeRate: parseFloat(this.form.exchangeRate) || 1.00,
          description: 'Bank statement entry', // Default description since field was removed
          referenceNo: null,
          transactionType: null,
          status: 'cleared'
        }

        if (this.editMode) {
          await this.$axios.put(`/api/ac-statement/${this.editingId}`, payload)
          this.$toast.success('ອັບເດດສຳເລັດ')
        } else {
          await this.$axios.post('/api/ac-statement', payload)
          this.$toast.success('ບັນທຶກສຳເລັດ')
        }
        
        this.resetForm()
        await this.loadStatements()
        await this.loadPreviousBalance()
        
      } catch (error) {
        console.error('Error saving statement:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດ')
      } finally {
        this.saving = false
      }
    },
    
    async loadStatements() {
      if (!this.form.bankAccountId) return
      
      this.loadingStatements = true
      try {
        const res = await this.$axios.get('/api/ac-statement', {
          params: {
            bankAccountId: this.form.bankAccountId,
            page: this.pagination.page,
            limit: this.pagination.limit,
            sortBy: 'bookingDate',
            sortOrder: 'DESC'
          }
        })
        
        this.statements = res.data.data || []
        if (res.data.pagination) {
          this.pagination = { ...this.pagination, ...res.data.pagination }
        }
        
      } catch (error) {
        console.error('Error loading statements:', error)
        this.$toast.error('ບໍ່ສາມາດໂຫຼດຂໍ້ມູນໄດ້')
      } finally {
        this.loadingStatements = false
      }
    },

    async showBalanceSummary() {
      if (!this.form.bankAccountId) return

      try {
        const res = await this.$axios.get('/api/ac-statement/summary', {
          params: {
            bankAccountId: this.form.bankAccountId
          }
        })

        this.balanceSummary = res.data.data?.summary || null
        this.showSummaryModal = true
      } catch (error) {
        console.error('Error loading summary:', error)
        this.$toast.error('ບໍ່ສາມາດໂຫຼດສະຫຼຸບໄດ້')
      }
    },

    editStatement(statement) {
      this.editMode = true
      this.editingId = statement.id
      
      // Determine if this was manually entered
      const credit = parseFloat(statement.creditAmount) || 0
      const debit = parseFloat(statement.debitAmount) || 0
      const prevBal = parseFloat(statement.endingBalance) - credit + debit
      const calculatedBal = prevBal + credit - debit
      const actualBal = parseFloat(statement.endingBalance)
      
      // If there's a difference, it was manually entered
      this.manualBalanceMode = Math.abs(calculatedBal - actualBal) > 0.01
      
      this.form = {
        bankAccountId: statement.bankAccountId,
        bookingDate: statement.bookingDate,
        creditAmount: statement.creditAmount || '',
        debitAmount: statement.debitAmount || '',
        endingBalance: this.manualBalanceMode ? statement.endingBalance : '',
        exchangeRate: statement.exchangeRate || 1.00
      }

      this.previousBalance = prevBal

      window.scrollTo({ top: 0, behavior: 'smooth' })
    },

    async deleteStatement(id) {
      if (!confirm('ທ່ານຕ້ອງການລຶບບັນທຶກນີ້ແທ້ບໍ?')) return

      try {
        await this.$axios.delete(`/api/ac-statement/${id}`)
        this.$toast.success('ລຶບສຳເລັດ')
        await this.loadStatements()
        await this.loadPreviousBalance()
      } catch (error) {
        console.error('Error deleting statement:', error)
        this.$toast.error('ບໍ່ສາມາດລຶບໄດ້')
      }
    },

    async reconcileStatement(id) {
      try {
        await this.$axios.patch(`/api/ac-statement/${id}/reconcile`)
        this.$toast.success('ຢືນຢັນສຳເລັດ')
        await this.loadStatements()
      } catch (error) {
        console.error('Error reconciling statement:', error)
        this.$toast.error('ບໍ່ສາມາດຢືນຢັນໄດ້')
      }
    },

    changePage(page) {
      this.pagination.page = page
      this.loadStatements()
    },
    
    resetForm() {
      this.editMode = false
      this.editingId = null
      this.manualBalanceMode = false
      this.form = {
        bankAccountId: this.form.bankAccountId,
        bookingDate: new Date().toISOString().split('T')[0],
        creditAmount: '',
        debitAmount: '',
        endingBalance: '',
        exchangeRate: 1.00
      }
    },

    getStatusLabel(status) {
      const labels = {
        pending: 'ລໍຖ້າ',
        cleared: 'ຜ່ານ',
        reconciled: 'ກວດແລ້ວ'
      }
      return labels[status] || status
    },
    
    formatAmount(amount) {
      if (!amount && amount !== 0) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    },
    
    formatDateShort(date) {
      if (!date) return ''
      const d = new Date(date)
      return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    }
  }
}
</script>

<style scoped>
.ac-statement-compact {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Noto Sans Lao', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Page Header */
.page-header {
  margin-bottom: 30px;
}

.header-content h1 {
  margin: 0;
  font-size: 28px;
  color: #2d3748;
  font-weight: 700;
  font-family: 'Noto Sans Lao', sans-serif;
}

.header-content p {
  margin: 5px 0 0;
  color: #718096;
  font-size: 14px;
  font-family: 'Noto Sans Lao', sans-serif;
}

/* Form Card */
.form-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 24px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.amount-grid {
  grid-template-columns: 1fr 1fr;
}

.exchange-grid {
  grid-template-columns: 1fr 1fr;
}

.triple-grid {
  grid-template-columns: 1fr 1fr 1fr;
}

.col-span-2 {
  grid-column: span 2;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-field label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #4a5568;
  font-size: 14px;
  font-family: 'Noto Sans Lao', sans-serif;
}

.required {
  color: #e53e3e;
}

/* Input Styles */
.input-date, .input-text, .input-select {
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'Noto Sans Lao', sans-serif;
  transition: border-color 0.2s;
}

.input-date:focus, .input-text:focus, .input-select:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.amount-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.amount-wrapper:focus-within {
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.amount-icon {
  padding: 10px 12px;
  font-weight: bold;
  font-size: 16px;
  min-width: 44px;
  text-align: center;
  font-family: 'Noto Sans Lao', sans-serif;
}

.credit-input .amount-icon {
  background: #f0fff4;
  color: #38a169;
}

.debit-input .amount-icon {
  background: #fff5f5;
  color: #e53e3e;
}

.exchange-input .amount-icon {
  background: #f0f4ff;
  color: #5a67d8;
}

.manual-input .amount-icon {
  background: #f7fafc;
  color: #4a5568;
}

.amount-wrapper input {
  flex: 1;
  padding: 10px 12px;
  border: none;
  outline: none;
  font-size: 14px;
  font-family: 'Noto Sans Lao', 'Courier New', monospace;
}

/* Balance Section */
.balance-section {
  margin: 20px 0;
  padding: 16px;
  background: #f7fafc;
  border-radius: 8px;
}

.balance-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.balance-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
}

.balance-item .label {
  font-size: 12px;
  color: #718096;
  margin-bottom: 4px;
  font-family: 'Noto Sans Lao', sans-serif;
}

.balance-item .value {
  font-size: 16px;
  font-weight: 600;
  font-family: 'Noto Sans Lao', 'Courier New', monospace;
}

.balance-item.credit .value {
  color: #38a169;
}

.balance-item.debit .value {
  color: #e53e3e;
}

.balance-item.highlight .value {
  color: #3182ce;
  font-size: 18px;
}

.balance-divider {
  font-size: 18px;
  color: #a0aec0;
  font-weight: bold;
  font-family: 'Noto Sans Lao', sans-serif;
}

.manual-balance-wrapper {
  margin-bottom: 16px;
}

.balance-difference {
  padding: 12px;
  background: #fff8dc;
  border: 1px solid #f7d794;
  border-radius: 6px;
  margin-top: 12px;
  font-size: 14px;
  font-family: 'Noto Sans Lao', sans-serif;
}

.diff-label {
  font-weight: 600;
}

.diff-value {
  font-weight: 700;
  font-family: 'Noto Sans Lao', 'Courier New', monospace;
}

.diff-value.positive {
  color: #38a169;
}

.diff-value.negative {
  color: #e53e3e;
}

.diff-note {
  color: #718096;
  font-size: 12px;
}

.balance-mode-toggle {
  text-align: center;
  margin-top: 12px;
}

.btn-toggle {
  padding: 8px 16px;
  background: #edf2f7;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Noto Sans Lao', sans-serif;
  transition: all 0.2s;
}

.btn-toggle:hover {
  background: #e2e8f0;
}

.btn-toggle.active {
  background: #3182ce;
  color: white;
  border-color: #3182ce;
}

.toggle-hint {
  display: block;
  margin-top: 4px;
  color: #718096;
  font-size: 12px;
  font-family: 'Noto Sans Lao', sans-serif;
}

/* Form Actions */
.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.btn-save {
  padding: 10px 24px;
  background: #3182ce;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-family: 'Noto Sans Lao', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-save:hover:not(:disabled) {
  background: #2c5aa0;
}

.btn-save:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}

.btn-clear {
  padding: 10px 24px;
  background: #edf2f7;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-weight: 600;
  font-family: 'Noto Sans Lao', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-clear:hover {
  background: #e2e8f0;
}

/* Table Card */
.table-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
}

.table-toolbar h2 {
  margin: 0;
  font-size: 18px;
  color: #2d3748;
  font-family: 'Noto Sans Lao', sans-serif;
}

.toolbar-actions {
  display: flex;
  gap: 8px;
}

.btn-icon {
  padding: 8px;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Noto Sans Lao', sans-serif;
}

.btn-icon:hover {
  background: #edf2f7;
}

/* Table */
.table-wrapper {
  overflow-x: auto;
}

.compact-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Noto Sans Lao', sans-serif;
}

.compact-table th,
.compact-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
  font-family: 'Noto Sans Lao', sans-serif;
}

.compact-table th {
  background: #f7fafc;
  font-weight: 600;
  color: #4a5568;
  font-size: 14px;
}

.compact-table .amount {
  text-align: right;
  font-family: 'Noto Sans Lao', 'Courier New', monospace;
}

.compact-table .credit {
  color: #38a169;
}

.compact-table .debit {
  color: #e53e3e;
}

.compact-table .balance {
  color: #3182ce;
  font-weight: 600;
}

.compact-table .nowrap {
  white-space: nowrap;
  font-size: 13px;
}

.compact-table .actions {
  text-align: center;
}

.btn-mini {
  padding: 4px 6px;
  margin: 0 2px;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-family: 'Noto Sans Lao', sans-serif;
}

.btn-mini:hover {
  background: #edf2f7;
}

.is-reconciled {
  background: #f0fff4;
}

.badge {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Noto Sans Lao', sans-serif;
}

.badge.pending {
  background: #fff8dc;
  color: #d69e2e;
}

.badge.cleared {
  background: #e6fffa;
  color: #38a169;
}

.badge.reconciled {
  background: #ebf8ff;
  color: #3182ce;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 40px;
  color: #718096;
  font-family: 'Noto Sans Lao', sans-serif;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #e2e8f0;
  border-top: 2px solid #3182ce;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-top: 1px solid #e2e8f0;
}

.btn-page {
  padding: 6px 12px;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Noto Sans Lao', sans-serif;
}

.btn-page:hover:not(:disabled) {
  background: #edf2f7;
}

.btn-page:disabled {
  background: #f7fafc;
  color: #a0aec0;
  cursor: not-allowed;
}

.page-info {
  font-weight: 600;
  color: #4a5568;
  font-family: 'Noto Sans Lao', sans-serif;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-dialog {
  background: white;
  border-radius: 12px;
  min-width: 400px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  font-family: 'Noto Sans Lao', sans-serif;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h3 {
  margin: 0;
  color: #2d3748;
  font-family: 'Noto Sans Lao', sans-serif;
}

.btn-close {
  padding: 4px 8px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #718096;
  font-family: 'Noto Sans Lao', sans-serif;
}

.btn-close:hover {
  color: #4a5568;
}

.modal-body {
  padding: 20px;
}

.summary-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-family: 'Noto Sans Lao', sans-serif;
}

.summary-row.credit strong {
  color: #38a169;
}

.summary-row.debit strong {
  color: #e53e3e;
}

.summary-row.highlight {
  padding: 12px;
  background: #f7fafc;
  border-radius: 6px;
  font-weight: 600;
}

.summary-row.highlight strong {
  color: #3182ce;
}

/* Transitions */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .ac-statement-compact {
    padding: 16px;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .triple-grid {
    grid-template-columns: 1fr;
  }
  
  .balance-strip {
    flex-direction: column;
    gap: 8px;
  }
  
  .balance-divider {
    transform: rotate(90deg);
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .table-wrapper {
    overflow-x: auto;
  }
  
  .compact-table {
    min-width: 600px;
  }
  
  .modal-dialog {
    min-width: 300px;
    margin: 16px;
  }
}
</style>