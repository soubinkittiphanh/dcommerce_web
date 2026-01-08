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
                @input="onDebitInput"
              />
            </div>
          </div>
        </div>

        <!-- Row 3: Description & Type -->
        <div class="form-grid">
          <div class="form-field col-span-2">
            <label>ລາຍລະອຽດ <span class="required">*</span></label>
            <input 
              type="text" 
              v-model="form.description" 
              placeholder="ລາຍລະອຽດການເຮັດທຸລະກຳ..."
              class="input-text"
            />
          </div>
        </div>

        <!-- Row 4: Reference & Type (Compact) -->
        <div class="form-grid triple-grid">
          <div class="form-field">
            <label>ເລກອ້າງອີງ</label>
            <input 
              type="text" 
              v-model="form.referenceNo" 
              placeholder="Ref..."
              class="input-text"
            />
          </div>

          <div class="form-field">
            <label>ປະເພດ</label>
            <select v-model="form.transactionType" class="input-select">
              <option value="">-- ເລືອກ --</option>
              <option value="deposit">ຝາກເງິນ</option>
              <option value="withdrawal">ຖອນເງິນ</option>
              <option value="transfer">ໂອນເງິນ</option>
              <option value="fee">ຄ່າທຳນຽມ</option>
              <option value="interest">ດອກເບ້ຍ</option>
              <option value="other">ອື່ນໆ</option>
            </select>
          </div>

          <div class="form-field">
            <label>ສະຖານະ</label>
            <select v-model="form.status" class="input-select">
              <option value="pending">ລໍຖ້າ</option>
              <option value="cleared">ຜ່ານແລ້ວ</option>
              <option value="reconciled">ກວດສອບແລ້ວ</option>
            </select>
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
              <th>ລາຍລະອຽດ</th>
              <th>Ref</th>
              <th class="amount">ເງິນອອກ</th>
              <th class="amount">ເງິນເຂົ້າ</th>
              <th class="amount">ຍອດຄົງເຫຼືອ</th>
              <th>ສະຖານະ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stmt in statements" :key="stmt.id" :class="{'is-reconciled': stmt.status === 'reconciled'}">
              <td class="nowrap">{{ formatDateShort(stmt.bookingDate) }}</td>
              <td class="desc">{{ stmt.description }}</td>
              <td class="ref">{{ stmt.referenceNo || '-' }}</td>
              <td class="amount debit">{{ stmt.debitAmount > 0 ? formatAmount(stmt.debitAmount) : '-' }}</td>
              <td class="amount credit">{{ stmt.creditAmount > 0 ? formatAmount(stmt.creditAmount) : '-' }}</td>
              <td class="amount balance">{{ formatAmount(stmt.endingBalance) }}</td>
              <td>
                <span class="badge" :class="stmt.status">
                  {{ getStatusLabel(stmt.status) }}
                </span>
              </td>
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
        description: '',
        endingBalance: '',
        referenceNo: '',
        transactionType: '',
        status: 'cleared'
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
      if (this.form.creditAmount) return '+'
      if (this.form.debitAmount) return '-'
      return ''
    },

    transactionClass() {
      if (this.form.creditAmount) return 'credit'
      if (this.form.debitAmount) return 'debit'
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
      const baseValid = this.form.bankAccountId && 
                       this.form.bookingDate && 
                       this.form.description &&
                       (this.form.creditAmount || this.form.debitAmount) &&
                       !(this.form.creditAmount && this.form.debitAmount)
      
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
        }))
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
      if (this.form.creditAmount) {
        this.form.debitAmount = ''
      }
      // Update manual balance with calculated if not in manual mode
      if (!this.manualBalanceMode) {
        this.form.endingBalance = ''
      }
    },

    onDebitInput() {
      if (this.form.debitAmount) {
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
          description: this.form.description,
          endingBalance: this.finalEndingBalance,
          referenceNo: this.form.referenceNo || null,
          transactionType: this.form.transactionType || null,
          status: this.form.status
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
        description: statement.description,
        endingBalance: this.manualBalanceMode ? statement.endingBalance : '',
        referenceNo: statement.referenceNo || '',
        transactionType: statement.transactionType || '',
        status: statement.status
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
        description: '',
        endingBalance: '',
        referenceNo: '',
        transactionType: '',
        status: 'cleared'
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
/* ... (keep all previous styles) ... */

/* Balance Section Updates */
.balance-section {
  margin: 20px 0;
}

.manual-balance-wrapper {
  padding: 20px;
  background: #fff8f0;
  border: 2px dashed #f59e0b;
  border-radius: 8px;
}

.input-manual-balance {
  height: 40px;
  padding: 0 12px;
  border: 2px solid #f59e0b;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Monaco', monospace;
  background: white;
}

.input-manual-balance:focus {
  outline: none;
  border-color: #d97706;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

.balance-difference {
  margin-top: 12px;
  padding: 12px;
  background: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.diff-label {
  font-weight: 600;
  color: #92400e;
}

.diff-value {
  font-family: 'Monaco', monospace;
  font-weight: 700;
  font-size: 16px;
}

.diff-value.positive {
  color: #10b981;
}

.diff-value.negative {
  color: #ef4444;
}

.diff-note {
  color: #6b7280;
  font-size: 12px;
  margin-left: auto;
}

.balance-mode-toggle {
  margin-top: 16px;
  text-align: center;
}

.btn-toggle {
  padding: 10px 20px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  color: #6b7280;
}

.btn-toggle:hover {
  border-color: #3b82f6;
  color: #3b82f6;
  background: #eff6ff;
}

.btn-toggle.active {
  background: #f59e0b;
  border-color: #f59e0b;
  color: white;
}

.toggle-hint {
  display: block;
  margin-top: 8px;
  font-size: 12px;
  color: #92400e;
  font-style: italic;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .balance-difference {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .diff-note {
    margin-left: 0;
  }
}

* {
  box-sizing: border-box;
}

.ac-statement-compact {
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
  font-family: 'Noto Sans Lao', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Header - Minimal */
.page-header {
  margin-bottom: 20px;
}

.header-content h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
}

.header-content p {
  margin: 2px 0 0 0;
  font-size: 13px;
  color: #6b7280;
}

/* Form Card - Compact */
.form-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.form-grid:last-child {
  margin-bottom: 0;
}

.triple-grid {
  grid-template-columns: repeat(3, 1fr);
}

.amount-grid {
  margin: 20px 0;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-field.col-span-2 {
  grid-column: span 2;
}

.form-field label {
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
}

.required {
  color: #ef4444;
}

/* Inputs - Modern & Minimal */
.input-text,
.input-date,
.input-select,
.amount-wrapper input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s;
  background: white;
}

.input-text:focus,
.input-date:focus,
.input-select:focus,
.amount-wrapper input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Autocomplete Styling */
.form-field >>> .v-input__control {
  min-height: 40px !important;
}

.form-field >>> .v-input__slot {
  min-height: 40px !important;
  padding: 0 12px !important;
  border: 1px solid #d1d5db !important;
  border-radius: 6px !important;
  box-shadow: none !important;
}

.form-field >>> .v-input--is-focused .v-input__slot {
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
}

.select-text {
  font-size: 14px;
  color: #1f2937;
}

.select-item {
  padding: 4px 0;
}

.item-name {
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
}

.item-sub {
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
}

/* Amount Input - Clean Design */
.amount-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.amount-wrapper input {
  width: 100%;
  padding-left: 36px;
  font-weight: 600;
  font-family: 'Monaco', 'Courier New', monospace;
}

.amount-icon {
  position: absolute;
  left: 12px;
  font-size: 18px;
  font-weight: bold;
  pointer-events: none;
}

.credit-input .amount-icon {
  color: #10b981;
}

.debit-input .amount-icon {
  color: #ef4444;
}

.credit-input input {
  border-color: #10b981;
}

.debit-input input {
  border-color: #ef4444;
}

/* Balance Strip - Ultra Compact */
.balance-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(to right, #f9fafb, #f3f4f6);
  border-radius: 8px;
  margin: 20px 0;
  font-size: 13px;
}

.balance-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.balance-item .label {
  font-size: 11px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.balance-item .value {
  font-size: 16px;
  font-weight: 700;
  font-family: 'Monaco', monospace;
  color: #1f2937;
}

.balance-item.credit .value {
  color: #10b981;
}

.balance-item.debit .value {
  color: #ef4444;
}

.balance-item.highlight {
  padding: 8px 16px;
  background: #3b82f6;
  border-radius: 6px;
  color: white;
}

.balance-item.highlight .label,
.balance-item.highlight .value {
  color: white;
}

.balance-divider {
  font-size: 20px;
  color: #d1d5db;
}

/* Actions - Compact */
.form-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
}

.btn-save,
.btn-clear {
  height: 40px;
  padding: 0 24px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-save {
  background: #3b82f6;
  color: white;
}

.btn-save:hover:not(:disabled) {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
}

.btn-save:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.btn-clear {
  background: #f3f4f6;
  color: #374151;
}

.btn-clear:hover {
  background: #e5e7eb;
}

/* Table Card */
.table-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
}

.table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.table-toolbar h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
}

.toolbar-actions {
  display: flex;
  gap: 8px;
}

.btn-icon {
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 16px;
}

.btn-icon:hover:not(:disabled) {
  background: #f9fafb;
  border-color: #d1d5db;
}

.btn-icon:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 16px;
  border: 3px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Compact Table */
.table-wrapper {
  overflow-x: auto;
  margin: 0 -20px;
  padding: 0 20px;
}

.compact-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.compact-table th {
  background: #f9fafb;
  padding: 10px 12px;
  text-align: left;
  font-weight: 600;
  color: #6b7280;
  border-bottom: 2px solid #e5e7eb;
  white-space: nowrap;
}

.compact-table td {
  padding: 12px;
  border-bottom: 1px solid #f3f4f6;
}

.compact-table tr:hover {
  background: #fafafa;
}

.compact-table tr.is-reconciled {
  background: #ecfdf5;
}

.compact-table .amount {
  text-align: right;
  font-family: 'Monaco', monospace;
  font-weight: 600;
}

.compact-table .amount.debit {
  color: #ef4444;
}

.compact-table .amount.credit {
  color: #10b981;
}

.compact-table .amount.balance {
  color: #3b82f6;
}

.compact-table .nowrap {
  white-space: nowrap;
  color: #6b7280;
  font-size: 12px;
}

.compact-table .desc {
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.compact-table .ref {
  font-size: 12px;
  color: #9ca3af;
}

.compact-table .actions {
  white-space: nowrap;
  text-align: right;
}

.btn-mini {
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 4px;
  font-size: 12px;
}

.btn-mini:hover {
  background: #f9fafb;
}

.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
}

.badge.pending {
  background: #fef3c7;
  color: #92400e;
}

.badge.cleared {
  background: #dbeafe;
  color: #1e40af;
}

.badge.reconciled {
  background: #d1fae5;
  color: #065f46;
}

/* Pagination - Minimal */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
}

.btn-page {
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-page:hover:not(:disabled) {
  background: #f9fafb;
}

.btn-page:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-info {
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-dialog {
  background: white;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.btn-close {
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 28px;
  cursor: pointer;
  color: #9ca3af;
  line-height: 1;
}

.btn-close:hover {
  color: #374151;
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
  padding: 12px;
  background: #f9fafb;
  border-radius: 6px;
}

.summary-row.credit strong {
  color: #10b981;
}

.summary-row.debit strong {
  color: #ef4444;
}

.summary-row.highlight {
  background: #3b82f6;
  color: white;
  font-weight: 600;
}

.summary-row strong {
  font-family: 'Monaco', monospace;
  font-size: 16px;
}

/* Modal Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
}

.modal-enter-active .modal-dialog,
.modal-leave-active .modal-dialog {
  transition: transform 0.2s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter .modal-dialog,
.modal-leave-to .modal-dialog {
  transform: scale(0.95);
}

/* Responsive */
@media (max-width: 768px) {
  .form-grid,
  .triple-grid {
    grid-template-columns: 1fr;
  }

  .form-field.col-span-2 {
    grid-column: span 1;
  }

  .balance-strip {
    flex-direction: column;
    gap: 8px;
  }

  .balance-divider {
    transform: rotate(90deg);
  }

  .table-toolbar {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .compact-table {
    font-size: 12px;
  }

  .compact-table th,
  .compact-table td {
    padding: 8px;
  }
}
</style>