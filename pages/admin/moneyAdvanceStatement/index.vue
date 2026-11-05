<template>
  <div class="ac-statement-page">
    <!-- Top Header -->
    <div class="page-header">
      <div class="header-left">
        <div class="header-icon">
          <v-icon color="white" size="26">mdi-bank-transfer</v-icon>
        </div>
        <div class="header-titles">
          <h1>ບັນທຶກບັນຊີທະນາຄານ</h1>
          <p>Account Statement &amp; Daily Bank Balance Entry</p>
        </div>
      </div>

      <div class="header-actions" v-if="form.bankAccountId">
        <button type="button" class="btn-outline" @click="refreshAll" :disabled="loadingStatements">
          <v-icon small left>mdi-refresh</v-icon>
          ໂຫຼດໃໝ່
        </button>
        <button type="button" class="btn-outline primary-outline" @click="showBalanceSummary">
          <v-icon small left>mdi-chart-box-outline</v-icon>
          ສະຫຼຸບບັນຊີ
        </button>
      </div>
    </div>

    <!-- KPI Summary Strip (Visible when Bank Account is selected) -->
    <div class="kpi-grid" v-if="form.bankAccountId">
      <div class="kpi-card">
        <div class="kpi-icon blue">
          <v-icon color="#2b6cb0" size="22">mdi-wallet-outline</v-icon>
        </div>
        <div class="kpi-info">
          <span class="kpi-label">ຍອດຍົກມາລ່າສຸດ (Previous Balance)</span>
          <span class="kpi-value">{{ formatAmount(previousBalance) }}</span>
        </div>
      </div>

      <div class="kpi-card">
        <div class="kpi-icon green">
          <v-icon color="#2f855a" size="22">mdi-arrow-down-bold-circle-outline</v-icon>
        </div>
        <div class="kpi-info">
          <span class="kpi-label">ລວມເງິນເຂົ້າໜ້ານີ້ (Credit)</span>
          <span class="kpi-value text-credit">+{{ formatAmount(pageTotalCredit) }}</span>
        </div>
      </div>

      <div class="kpi-card">
        <div class="kpi-icon red">
          <v-icon color="#c53030" size="22">mdi-arrow-up-bold-circle-outline</v-icon>
        </div>
        <div class="kpi-info">
          <span class="kpi-label">ລວມເງິນອອກໜ້ານີ້ (Debit)</span>
          <span class="kpi-value text-debit">-{{ formatAmount(pageTotalDebit) }}</span>
        </div>
      </div>

      <div class="kpi-card highlight-card">
        <div class="kpi-icon indigo">
          <v-icon color="#ffffff" size="22">mdi-cash-check</v-icon>
        </div>
        <div class="kpi-info">
          <span class="kpi-label">ຍອດສຸດທ້າຍຫຼັງທຸລະກຳ (Ending Balance)</span>
          <span class="kpi-value text-primary">{{ formatAmount(finalEndingBalance) }}</span>
        </div>
      </div>
    </div>

    <!-- Statement Entry / Edit Card -->
    <div class="form-card" :class="{ 'is-editing': editMode }">
      <!-- Edit Mode Banner -->
      <div v-if="editMode" class="edit-banner">
        <div class="edit-banner-left">
          <v-icon color="#b7791f" small class="mr-2">mdi-pencil-circle</v-icon>
          <span>
            ກຳລັງແກ້ໄຂລາຍການບັນຊີ <strong>#{{ editingId }}</strong>
            (ວັນທີ {{ formatDateShort(form.bookingDate) }})
          </span>
        </div>
        <button type="button" class="btn-banner-cancel" @click="cancelEdit">
          <v-icon x-small left>mdi-close</v-icon>
          ຍົກເລີກການແກ້ໄຂ
        </button>
      </div>

      <form @submit.prevent="saveStatement" novalidate>
        <!-- Row 1: Bank Account, Booking Date, Exchange Rate -->
        <div class="form-grid top-grid">
          <div class="form-field bank-field">
            <label>
              <v-icon x-small color="#4a5568" class="mr-1">mdi-bank</v-icon>
              ບັນຊີທະນາຄານ <span class="required">*</span>
            </label>
            <v-autocomplete
              v-model="form.bankAccountId"
              :items="bankAccounts"
              item-text="accountDisplayName"
              item-value="id"
              placeholder="ເລືອກບັນຊີທະນາຄານ..."
              outlined
              dense
              hide-details
              clearable
              @change="onBankAccountChange"
            >
              <template v-slot:selection="{ item }">
                <span class="select-text">
                  <strong>{{ item.accountName }}</strong> — {{ item.accountNumber }}
                  <span v-if="item.bankName" class="bank-tag">({{ item.bankName }})</span>
                </span>
              </template>
              <template v-slot:item="{ item }">
                <div class="select-item">
                  <div class="item-name">{{ item.accountName }}</div>
                  <div class="item-sub">
                    {{ item.accountNumber }} · {{ item.bankName || 'Bank' }}
                    <span v-if="item.currency" class="currency-pill">{{ item.currency }}</span>
                  </div>
                </div>
              </template>
            </v-autocomplete>
          </div>

          <div class="form-field">
            <label>
              <v-icon x-small color="#4a5568" class="mr-1">mdi-calendar</v-icon>
              ວັນທີລົງບັນຊີ <span class="required">*</span>
            </label>
            <input
              type="date"
              v-model="form.bookingDate"
              class="input-control"
              required
            />
          </div>

          <div class="form-field">
            <label>
              <v-icon x-small color="#4a5568" class="mr-1">mdi-currency-usd</v-icon>
              ອັດຕາແລກປ່ຽນ (Exchange Rate)
            </label>
            <div class="amount-wrapper exchange-input">
              <span class="amount-icon">≈</span>
              <input
                type="number"
                v-model="form.exchangeRate"
                placeholder="1.00"
                step="any"
                min="0.0001"
              />
            </div>
          </div>
        </div>

        <!-- Row 2: Credit & Debit Amount Boxes -->
        <div class="form-grid amount-grid">
          <!-- Credit Input -->
          <div
            class="amount-box credit-box"
            :class="{ 'box-active': hasCreditValue, 'box-dimmed': hasDebitValue }"
          >
            <div class="amount-box-header">
              <label for="creditAmountInput">
                <span class="dot credit-dot"></span>
                ຈຳນວນເງິນເຂົ້າ (Credit +)
              </label>
              <span v-if="hasCreditValue" class="formatted-preview credit-preview">
                +{{ formatAmount(form.creditAmount) }}
              </span>
            </div>
            <div class="amount-wrapper credit-input">
              <span class="amount-icon">+</span>
              <input
                id="creditAmountInput"
                ref="creditInput"
                type="number"
                v-model="form.creditAmount"
                placeholder="0.00"
                step="any"
                min="0"
                @input="onCreditInput"
                @focus="onCreditFocus"
              />
              <button
                v-if="form.creditAmount !== '' && form.creditAmount !== null"
                type="button"
                class="btn-clear-input"
                title="ລ້າງເງິນເຂົ້າ"
                @click="clearCredit"
              >
                ×
              </button>
            </div>
          </div>

          <!-- Debit Input -->
          <div
            class="amount-box debit-box"
            :class="{ 'box-active': hasDebitValue, 'box-dimmed': hasCreditValue }"
          >
            <div class="amount-box-header">
              <label for="debitAmountInput">
                <span class="dot debit-dot"></span>
                ຈຳນວນເງິນອອກ (Debit -)
              </label>
              <span v-if="hasDebitValue" class="formatted-preview debit-preview">
                -{{ formatAmount(form.debitAmount) }}
              </span>
            </div>
            <div class="amount-wrapper debit-input">
              <span class="amount-icon">−</span>
              <input
                id="debitAmountInput"
                ref="debitInput"
                type="number"
                v-model="form.debitAmount"
                placeholder="0.00"
                step="any"
                min="0"
                @input="onDebitInput"
                @focus="onDebitFocus"
              />
              <button
                v-if="form.debitAmount !== '' && form.debitAmount !== null"
                type="button"
                class="btn-clear-input"
                title="ລ້າງເງິນອອກ"
                @click="clearDebit"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        <!-- Row 3: Optional Description / Reference -->
        <div class="form-grid desc-grid">
          <div class="form-field">
            <label>
              <v-icon x-small color="#4a5568" class="mr-1">mdi-text-short</v-icon>
              ລາຍລະອຽດ / ໝາຍເຫດ (Description)
            </label>
            <input
              type="text"
              v-model="form.description"
              placeholder="ປ້ອນລາຍລະອຽດທຸລະກຳ (ຖ້າມີ)..."
              class="input-control"
            />
          </div>
          <div class="form-field">
            <label>
              <v-icon x-small color="#4a5568" class="mr-1">mdi-pound</v-icon>
              ເລກທີອ້າງອີງ (Reference No.)
            </label>
            <input
              type="text"
              v-model="form.referenceNo"
              placeholder="ເລກທີໃບບິນ / ເລກອ້າງອີງ..."
              class="input-control"
            />
          </div>
        </div>

        <!-- Balance Calculation Strip & Manual Override -->
        <div class="balance-section" v-if="form.bankAccountId">
          <div class="balance-header-bar">
            <span class="balance-section-title">
              <v-icon small color="#2b6cb0" class="mr-1">mdi-calculator-variant-outline</v-icon>
              ການຄິດໄລ່ຍອດຄົງເຫຼືອ (Balance Calculation)
            </span>
            <button
              type="button"
              @click="toggleBalanceMode"
              class="btn-toggle-mode"
              :class="{ active: manualBalanceMode }"
            >
              <v-icon x-small left :color="manualBalanceMode ? 'white' : '#4a5568'">
                {{ manualBalanceMode ? 'mdi-autorenew' : 'mdi-pencil-outline' }}
              </v-icon>
              <span v-if="!manualBalanceMode">ປ້ອນຍອດສຸດທ້າຍເອງ (Manual Override)</span>
              <span v-else>ໃຊ້ການຄິດໄລ່ອັດຕະໂນມັດ (Auto Calculate)</span>
            </button>
          </div>

          <!-- Auto-calculated balance display -->
          <div v-if="!manualBalanceMode" class="balance-strip">
            <div class="balance-step">
              <span class="step-label">ຍອດເດີມ (Previous)</span>
              <span class="step-value">{{ formatAmount(previousBalance) }}</span>
            </div>
            <div class="balance-arrow">
              <v-icon color="#a0aec0">mdi-arrow-right</v-icon>
            </div>
            <div class="balance-step" :class="transactionClass">
              <span class="step-label">ທຸລະກຳ (Transaction)</span>
              <span class="step-value">{{ transactionSign }}{{ formatAmount(transactionAmount) }}</span>
            </div>
            <div class="balance-arrow">
              <v-icon color="#a0aec0">mdi-equal</v-icon>
            </div>
            <div class="balance-step highlight">
              <span class="step-label">ຍອດສຸດທ້າຍ (Ending Balance)</span>
              <span class="step-value">{{ formatAmount(calculatedEndingBalance) }}</span>
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
                  class="input-control disabled-input"
                  disabled
                />
              </div>
              <div class="form-field">
                <label>ຍອດສຸດທ້າຍຕາມໃບແຈ້ງຍອດ (Ending Balance) <span class="required">*</span></label>
                <div class="amount-wrapper manual-input">
                  <span class="amount-icon">=</span>
                  <input
                    ref="endingBalanceInput"
                    type="number"
                    v-model="form.endingBalance"
                    placeholder="0.00"
                    step="any"
                    class="input-manual-balance"
                  />
                </div>
              </div>
            </div>
            <div class="balance-difference" v-if="Math.abs(balanceDifference) > 0.001">
              <v-icon small color="#d69e2e" class="mr-1">mdi-alert-circle-outline</v-icon>
              <span class="diff-label">ຄວາມແຕກຕ່າງຈາກລະບົບ:</span>
              <span class="diff-value" :class="balanceDifference > 0 ? 'positive' : 'negative'">
                {{ balanceDifference > 0 ? '+' : '' }}{{ formatAmount(balanceDifference) }}
              </span>
              <span class="diff-note">
                (ຍອດຄິດໄລ່ອັດຕະໂນມັດ: {{ formatAmount(calculatedEndingBalance) }})
              </span>
            </div>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="form-actions">
          <button type="button" @click="cancelEdit" class="btn-clear">
            <v-icon small left>mdi-eraser</v-icon>
            {{ editMode ? 'ຍົກເລີກການແກ້ໄຂ' : 'ລ້າງຟອມ' }}
          </button>
          <button type="submit" :disabled="!isFormValid || saving" class="btn-save" :class="{ 'btn-update': editMode }">
            <v-icon small left color="white">
              {{ saving ? 'mdi-loading mdi-spin' : (editMode ? 'mdi-content-save-edit' : 'mdi-check-circle-outline') }}
            </v-icon>
            {{ saving ? 'ກຳລັງບັນທຶກ...' : (editMode ? 'ອັບເດດລາຍການ' : 'ບັນທຶກລາຍການ') }}
          </button>
        </div>
      </form>
    </div>

    <!-- Statements Table Card -->
    <div class="table-card" v-if="form.bankAccountId">
      <div class="table-toolbar">
        <div class="toolbar-left">
          <h2>
            <v-icon color="#2d3748" class="mr-1">mdi-format-list-bulleted</v-icon>
            ປະຫວັດລາຍການບັນຊີ
          </h2>
          <span class="record-badge">{{ pagination.total || statements.length }} ລາຍການ</span>
        </div>

        <!-- Quick Filters -->
        <div class="toolbar-filters">
          <div class="filter-item">
            <label>ແຕ່ວັນທີ:</label>
            <input type="date" v-model="filters.startDate" class="filter-input" @change="applyTableFilters" />
          </div>
          <div class="filter-item">
            <label>ຫາວັນທີ:</label>
            <input type="date" v-model="filters.endDate" class="filter-input" @change="applyTableFilters" />
          </div>
          <div class="filter-item">
            <select v-model="filters.status" class="filter-input" @change="applyTableFilters">
              <option value="">ທຸກສະຖານະ</option>
              <option value="cleared">ຜ່ານ (Cleared)</option>
              <option value="reconciled">ກວດແລ້ວ (Reconciled)</option>
              <option value="pending">ລໍຖ້າ (Pending)</option>
            </select>
          </div>
          <button
            v-if="filters.startDate || filters.endDate || filters.status"
            type="button"
            class="btn-reset-filter"
            @click="clearTableFilters"
            title="ລ້າງຕົວກອງ"
          >
            <v-icon x-small>mdi-filter-remove-outline</v-icon>
            ລ້າງກອງ
          </button>
        </div>
      </div>

      <div v-if="loadingStatements" class="empty-state">
        <div class="spinner"></div>
        <p>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
      </div>

      <div v-else-if="statements.length === 0" class="empty-state">
        <v-icon size="42" color="#cbd5e0" class="mb-2">mdi-file-document-outline</v-icon>
        <p>ບໍ່ມີຂໍ້ມູນລາຍການບັນຊີ</p>
      </div>

      <div v-else class="table-wrapper">
        <table class="compact-table">
          <thead>
            <tr>
              <th style="width: 60px">#</th>
              <th>ວັນທີ</th>
              <th>ລາຍລະອຽດ / ອ້າງອີງ</th>
              <th class="text-right">ອັດຕາແລກປ່ຽນ</th>
              <th class="amount">ເງິນເຂົ້າ (Credit +)</th>
              <th class="amount">ເງິນອອກ (Debit -)</th>
              <th class="amount">ຍອດຄົງເຫຼືອ (Balance)</th>
              <th class="text-center">ສະຖານະ</th>
              <th class="text-center" style="width: 130px">ຈັດການ</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(stmt, idx) in statements"
              :key="stmt.id"
              :class="{
                'is-reconciled': stmt.status === 'reconciled',
                'is-editing-row': editMode && editingId === stmt.id
              }"
            >
              <td class="row-index">
                {{ (pagination.page - 1) * pagination.limit + idx + 1 }}
              </td>
              <td class="nowrap font-weight-medium">
                {{ formatDateShort(stmt.bookingDate) }}
              </td>
              <td class="desc-cell">
                <div class="desc-main">{{ stmt.description || 'Bank statement entry' }}</div>
                <div v-if="stmt.referenceNo" class="desc-sub">Ref: {{ stmt.referenceNo }}</div>
              </td>
              <td class="text-right mono-text">
                {{ formatAmount(stmt.exchangeRate || 1) }}
              </td>
              <td class="amount credit">
                {{ parseFloat(stmt.creditAmount) > 0 ? '+' + formatAmount(stmt.creditAmount) : '-' }}
              </td>
              <td class="amount debit">
                {{ parseFloat(stmt.debitAmount) > 0 ? '-' + formatAmount(stmt.debitAmount) : '-' }}
              </td>
              <td class="amount balance">
                {{ formatAmount(stmt.endingBalance) }}
              </td>
              <td class="text-center">
                <span class="badge" :class="stmt.status || 'cleared'">
                  {{ getStatusLabel(stmt.status || 'cleared') }}
                </span>
              </td>
              <td class="actions">
                <button
                  type="button"
                  @click="editStatement(stmt)"
                  class="btn-action edit"
                  title="ແກ້ໄຂລາຍການ"
                >
                  <v-icon x-small color="#2b6cb0">mdi-pencil</v-icon>
                </button>
                <button
                  v-if="stmt.status !== 'reconciled'"
                  type="button"
                  @click="reconcileStatement(stmt.id)"
                  class="btn-action reconcile"
                  title="ຢືນຢັນກວດບັນຊີ (Reconcile)"
                >
                  <v-icon x-small color="#2f855a">mdi-check-bold</v-icon>
                </button>
                <button
                  type="button"
                  @click="promptDeleteStatement(stmt)"
                  class="btn-action delete"
                  title="ລຶບລາຍການ"
                >
                  <v-icon x-small color="#c53030">mdi-trash-can-outline</v-icon>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="pagination" v-if="pagination.totalPages > 1">
        <button
          type="button"
          @click="changePage(pagination.page - 1)"
          :disabled="pagination.page <= 1"
          class="btn-page"
        >
          ‹ ກ່ອນໜ້າ
        </button>
        <span class="page-info">ໜ້າ {{ pagination.page }} / {{ pagination.totalPages }}</span>
        <button
          type="button"
          @click="changePage(pagination.page + 1)"
          :disabled="pagination.page >= pagination.totalPages"
          class="btn-page"
        >
          ຖັດໄປ ›
        </button>
      </div>
    </div>

    <!-- Empty Prompt when no Bank Account is selected -->
    <div v-else class="select-account-prompt">
      <v-icon size="48" color="#90cdf4" class="mb-2">mdi-bank-outline</v-icon>
      <h3>ກະລຸນາເລືອກບັນຊີທະນາຄານ</h3>
      <p>ເລືອກບັນຊີທະນາຄານຂ້າງເທິງເພື່ອບັນທຶກເງິນເຂົ້າ-ເງິນອອກ ແລະ ເບິ່ງປະຫວັດລາຍການ</p>
    </div>

    <!-- Delete Confirmation Modal (Replaces native window.confirm to prevent input focus lock) -->
    <transition name="modal">
      <div v-if="showDeleteModal" class="modal-backdrop" @click="closeDeleteModal">
        <div class="modal-dialog delete-dialog" @click.stop>
          <div class="modal-header delete-header">
            <h3>
              <v-icon color="#c53030" class="mr-1">mdi-alert-circle-outline</v-icon>
              ຢືນຢັນການລຶບລາຍການ
            </h3>
            <button type="button" @click="closeDeleteModal" class="btn-close">×</button>
          </div>
          <div class="modal-body" v-if="statementToDelete">
            <p class="delete-msg">ທ່ານຕ້ອງການລຶບລາຍການບັນຊີນີ້ແທ້ບໍ?</p>
            <div class="delete-preview">
              <div class="preview-row">
                <span>ວັນທີ:</span>
                <strong>{{ formatDateShort(statementToDelete.bookingDate) }}</strong>
              </div>
              <div class="preview-row" v-if="parseFloat(statementToDelete.creditAmount) > 0">
                <span>ເງິນເຂົ້າ (Credit):</span>
                <strong class="text-credit">+{{ formatAmount(statementToDelete.creditAmount) }}</strong>
              </div>
              <div class="preview-row" v-if="parseFloat(statementToDelete.debitAmount) > 0">
                <span>ເງິນອອກ (Debit):</span>
                <strong class="text-debit">-{{ formatAmount(statementToDelete.debitAmount) }}</strong>
              </div>
              <div class="preview-row">
                <span>ຍອດຄົງເຫຼືອ:</span>
                <strong>{{ formatAmount(statementToDelete.endingBalance) }}</strong>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-clear" @click="closeDeleteModal" :disabled="deleting">
              ຍົກເລີກ
            </button>
            <button type="button" class="btn-danger" @click="confirmDeleteStatement" :disabled="deleting">
              <v-icon small left color="white">mdi-trash-can-outline</v-icon>
              {{ deleting ? 'ກຳລັງລຶບ...' : 'ຢືນຢັນລຶບ' }}
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Summary Modal -->
    <transition name="modal">
      <div v-if="showSummaryModal" class="modal-backdrop" @click="showSummaryModal = false">
        <div class="modal-dialog" @click.stop>
          <div class="modal-header">
            <h3>
              <v-icon color="#2b6cb0" class="mr-1">mdi-chart-box-outline</v-icon>
              ສະຫຼຸບຍອດເງິນທັງໝົດ
            </h3>
            <button type="button" @click="showSummaryModal = false" class="btn-close">×</button>
          </div>
          <div class="modal-body" v-if="balanceSummary">
            <div class="summary-list">
              <div class="summary-row">
                <span>ຍອດເປີດ (Opening Balance):</span>
                <strong>{{ formatAmount(balanceSummary.openingBalance) }}</strong>
              </div>
              <div class="summary-row credit">
                <span>ເງິນເຂົ້າທັງໝົດ (Total Credit):</span>
                <strong>+{{ formatAmount(balanceSummary.totalCredit) }}</strong>
              </div>
              <div class="summary-row debit">
                <span>ເງິນອອກທັງໝົດ (Total Debit):</span>
                <strong>-{{ formatAmount(balanceSummary.totalDebit) }}</strong>
              </div>
              <div class="summary-row highlight">
                <span>ຍອດປິດ (Closing Balance):</span>
                <strong>{{ formatAmount(balanceSummary.closingBalance) }}</strong>
              </div>
              <div class="summary-row">
                <span>ຈຳນວນທຸລະກຳທັງໝົດ:</span>
                <strong>{{ balanceSummary.transactionCount }} ລາຍການ</strong>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-clear" @click="showSummaryModal = false">ປິດ</button>
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
      deleting: false,
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
        exchangeRate: 1.0,
        description: '',
        referenceNo: '',
      },

      filters: {
        startDate: '',
        endDate: '',
        status: '',
      },

      bankAccounts: [],
      statements: [],
      previousBalance: 0,

      pagination: {
        page: 1,
        limit: 20,
        total: 0,
        totalPages: 0,
      },

      showSummaryModal: false,
      balanceSummary: null,

      showDeleteModal: false,
      statementToDelete: null,
    }
  },

  computed: {
    hasCreditValue() {
      const val = parseFloat(this.form.creditAmount)
      return !isNaN(val) && val > 0
    },

    hasDebitValue() {
      const val = parseFloat(this.form.debitAmount)
      return !isNaN(val) && val > 0
    },

    transactionAmount() {
      const credit = parseFloat(this.form.creditAmount) || 0
      const debit = parseFloat(this.form.debitAmount) || 0
      return credit > 0 ? credit : debit
    },

    transactionSign() {
      if (this.hasCreditValue) return '+'
      if (this.hasDebitValue) return '-'
      return ''
    },

    transactionClass() {
      if (this.hasCreditValue) return 'credit'
      if (this.hasDebitValue) return 'debit'
      return ''
    },

    calculatedEndingBalance() {
      const credit = parseFloat(this.form.creditAmount) || 0
      const debit = parseFloat(this.form.debitAmount) || 0
      return (parseFloat(this.previousBalance) || 0) + credit - debit
    },

    finalEndingBalance() {
      if (this.manualBalanceMode && this.form.endingBalance !== '' && this.form.endingBalance !== null) {
        return parseFloat(this.form.endingBalance) || 0
      }
      return this.calculatedEndingBalance
    },

    balanceDifference() {
      if (!this.manualBalanceMode || this.form.endingBalance === '' || this.form.endingBalance === null) {
        return 0
      }
      const manual = parseFloat(this.form.endingBalance) || 0
      return manual - this.calculatedEndingBalance
    },

    pageTotalCredit() {
      return (this.statements || []).reduce(
        (sum, s) => sum + (parseFloat(s.creditAmount) || 0),
        0
      )
    },

    pageTotalDebit() {
      return (this.statements || []).reduce(
        (sum, s) => sum + (parseFloat(s.debitAmount) || 0),
        0
      )
    },

    isFormValid() {
      const baseValid = Boolean(this.form.bankAccountId && this.form.bookingDate)

      if (this.manualBalanceMode) {
        return baseValid && this.form.endingBalance !== '' && this.form.endingBalance !== null
      }

      return baseValid
    },
  },

  async created() {
    await this.loadBankAccounts()
  },

  methods: {
    normalizeDateInput(dateVal) {
      if (!dateVal) return new Date().toISOString().split('T')[0]
      if (typeof dateVal === 'string') {
        return dateVal.split('T')[0]
      }
      const d = new Date(dateVal)
      if (isNaN(d.getTime())) return new Date().toISOString().split('T')[0]
      return d.toISOString().split('T')[0]
    },

    cleanAmountForInput(val) {
      const num = parseFloat(val)
      if (isNaN(num) || num <= 0) return ''
      return String(num)
    },

    sortStatementsDesc(list = []) {
      return [...list].sort((a, b) => {
        const dateA = this.normalizeDateInput(a.bookingDate)
        const dateB = this.normalizeDateInput(b.bookingDate)
        if (dateA !== dateB) {
          return dateB.localeCompare(dateA)
        }
        return (Number(b.id) || 0) - (Number(a.id) || 0)
      })
    },

    async loadBankAccounts() {
      try {
        const res = await this.$axios.get('/api/bank_account/find')
        this.bankAccounts = (res.data.data || res.data || [])
          .map((account) => ({
            ...account,
            accountDisplayName: `${account.accountName} - ${account.accountNumber}`,
          }))
          .filter((account) => account.isActive)
      } catch (error) {
        console.error('Error loading bank accounts:', error)
        this.$toast.error('ບໍ່ສາມາດໂຫຼດບັນຊີໄດ້')
      }
    },

    async onBankAccountChange() {
      if (this.editMode) {
        this.editMode = false
        this.editingId = null
        this.manualBalanceMode = false
      }
      this.pagination.page = 1
      if (this.form.bankAccountId) {
        await Promise.all([this.loadPreviousBalance(), this.loadStatements()])
      } else {
        this.previousBalance = 0
        this.statements = []
      }
    },

    async refreshAll() {
      if (!this.form.bankAccountId) return
      await Promise.all([this.loadPreviousBalance(), this.loadStatements()])
    },

    async loadPreviousBalance() {
      if (!this.form.bankAccountId) {
        this.previousBalance = 0
        return
      }
      try {
        const res = await this.$axios.get('/api/ac-statement', {
          params: {
            bankAccountId: this.form.bankAccountId,
            limit: 50,
            sortBy: 'bookingDate',
            sortOrder: 'DESC',
          },
        })

        const statements = this.sortStatementsDesc(res.data.data || [])
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

    onCreditFocus() {
      if (this.form.creditAmount === '0' || this.form.creditAmount === '0.00') {
        this.form.creditAmount = ''
      }
    },

    onDebitFocus() {
      if (this.form.debitAmount === '0' || this.form.debitAmount === '0.00') {
        this.form.debitAmount = ''
      }
    },

    onCreditInput() {
      const creditVal = parseFloat(this.form.creditAmount)
      if (!isNaN(creditVal) && creditVal > 0) {
        this.form.debitAmount = ''
      }
      if (!this.manualBalanceMode) {
        this.form.endingBalance = ''
      }
    },

    onDebitInput() {
      const debitVal = parseFloat(this.form.debitAmount)
      if (!isNaN(debitVal) && debitVal > 0) {
        this.form.creditAmount = ''
      }
      if (!this.manualBalanceMode) {
        this.form.endingBalance = ''
      }
    },

    clearCredit() {
      this.form.creditAmount = ''
      this.$nextTick(() => {
        if (this.$refs.creditInput) this.$refs.creditInput.focus()
      })
    },

    clearDebit() {
      this.form.debitAmount = ''
      this.$nextTick(() => {
        if (this.$refs.debitInput) this.$refs.debitInput.focus()
      })
    },

    toggleBalanceMode() {
      this.manualBalanceMode = !this.manualBalanceMode

      if (this.manualBalanceMode) {
        this.form.endingBalance = String(Number(this.calculatedEndingBalance.toFixed(2)))
        this.$nextTick(() => {
          if (this.$refs.endingBalanceInput) {
            this.$refs.endingBalanceInput.focus()
          }
        })
      } else {
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
          exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
          description: (this.form.description || '').trim() || 'Bank statement entry',
          referenceNo: (this.form.referenceNo || '').trim() || null,
          transactionType: null,
          status: 'cleared',
        }

        if (this.editMode && this.editingId) {
          await this.$axios.put(`/api/ac-statement/${this.editingId}`, payload)
          this.$toast.success('ອັບເດດສຳເລັດ')
        } else {
          await this.$axios.post('/api/ac-statement', payload)
          this.$toast.success('ບັນທຶກສຳເລັດ')
          this.pagination.page = 1
        }

        this.resetForm()
        await Promise.all([this.loadStatements(), this.loadPreviousBalance()])
      } catch (error) {
        console.error('Error saving statement:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ')
      } finally {
        this.saving = false
      }
    },

    applyTableFilters() {
      this.pagination.page = 1
      this.loadStatements()
    },

    clearTableFilters() {
      this.filters = {
        startDate: '',
        endDate: '',
        status: '',
      }
      this.pagination.page = 1
      this.loadStatements()
    },

    async loadStatements() {
      if (!this.form.bankAccountId) return

      this.loadingStatements = true
      try {
        const params = {
          bankAccountId: this.form.bankAccountId,
          page: this.pagination.page,
          limit: this.pagination.limit,
          sortBy: 'bookingDate',
          sortOrder: 'DESC',
        }

        if (this.filters.startDate) params.startDate = this.filters.startDate
        if (this.filters.endDate) params.endDate = this.filters.endDate
        if (this.filters.status) params.status = this.filters.status

        const res = await this.$axios.get('/api/ac-statement', { params })

        this.statements = this.sortStatementsDesc(res.data.data || [])
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
            bankAccountId: this.form.bankAccountId,
          },
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

      const credit = parseFloat(statement.creditAmount) || 0
      const debit = parseFloat(statement.debitAmount) || 0
      const actualBal = parseFloat(statement.endingBalance) || 0
      const prevBal = actualBal - credit + debit

      // If both credit and debit are 0, it was entered as a manual ending balance override
      this.manualBalanceMode = credit === 0 && debit === 0

      this.previousBalance = prevBal

      this.$set(this, 'form', {
        bankAccountId: statement.bankAccountId,
        bookingDate: this.normalizeDateInput(statement.bookingDate),
        creditAmount: this.cleanAmountForInput(statement.creditAmount),
        debitAmount: this.cleanAmountForInput(statement.debitAmount),
        endingBalance: this.manualBalanceMode ? String(actualBal) : '',
        exchangeRate: parseFloat(statement.exchangeRate) || 1.0,
        description:
          statement.description && statement.description !== 'Bank statement entry'
            ? statement.description
            : '',
        referenceNo: statement.referenceNo || '',
      })

      window.scrollTo({ top: 0, behavior: 'smooth' })

      this.$nextTick(() => {
        if (debit > 0 && this.$refs.debitInput) {
          this.$refs.debitInput.focus()
        } else if (this.$refs.creditInput) {
          this.$refs.creditInput.focus()
        }
      })
    },

    cancelEdit() {
      const wasEditing = this.editMode
      this.resetForm()
      if (wasEditing && this.form.bankAccountId) {
        this.loadPreviousBalance()
      }
      this.$nextTick(() => {
        if (this.$refs.creditInput) {
          this.$refs.creditInput.focus()
        }
      })
    },

    promptDeleteStatement(statement) {
      this.statementToDelete = statement
      this.showDeleteModal = true
    },

    closeDeleteModal() {
      this.showDeleteModal = false
      this.statementToDelete = null
      this.$nextTick(() => {
        if (this.$refs.creditInput) {
          this.$refs.creditInput.focus()
        }
      })
    },

    async confirmDeleteStatement() {
      if (!this.statementToDelete) return
      const id = this.statementToDelete.id

      this.deleting = true
      try {
        await this.$axios.delete(`/api/ac-statement/${id}`)
        this.$toast.success('ລຶບລາຍການສຳເລັດ')

        if (this.editMode && this.editingId === id) {
          this.resetForm()
        }

        this.showDeleteModal = false
        this.statementToDelete = null

        await Promise.all([this.loadStatements(), this.loadPreviousBalance()])

        this.$nextTick(() => {
          if (this.$refs.creditInput) {
            this.$refs.creditInput.focus()
          }
        })
      } catch (error) {
        console.error('Error deleting statement:', error)
        this.$toast.error('ບໍ່ສາມາດລຶບໄດ້')
      } finally {
        this.deleting = false
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
      this.$set(this, 'form', {
        bankAccountId: this.form.bankAccountId,
        bookingDate: new Date().toISOString().split('T')[0],
        creditAmount: '',
        debitAmount: '',
        endingBalance: '',
        exchangeRate: 1.0,
        description: '',
        referenceNo: '',
      })
    },

    getStatusLabel(status) {
      const labels = {
        pending: 'ລໍຖ້າ',
        cleared: 'ຜ່ານ',
        reconciled: 'ກວດແລ້ວ',
      }
      return labels[status] || status
    },

    formatAmount(amount) {
      const num = parseFloat(amount)
      if (isNaN(num)) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num)
    },

    formatDateShort(date) {
      if (!date) return ''
      const str = String(date).split('T')[0]
      const parts = str.split('-')
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`
      }
      const d = new Date(date)
      if (isNaN(d.getTime())) return String(date)
      return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`
    },
  },
}
</script>

<style scoped>
.ac-statement-page {
  max-width: 1180px;
  margin: 0 auto;
  padding: 16px 20px 32px;
  font-family: 'Noto Sans Lao', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #2d3748;
}

/* Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.header-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2b6cb0 0%, #1a365d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(43, 108, 176, 0.25);
}

.header-titles h1 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #1a202c;
}

.header-titles p {
  margin: 2px 0 0;
  font-size: 13px;
  color: #718096;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  background: #ffffff;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-outline:hover:not(:disabled) {
  background: #f7fafc;
  border-color: #a0aec0;
}

.btn-outline.primary-outline {
  border-color: #90cdf4;
  color: #2b6cb0;
  background: #ebf8ff;
}

.btn-outline.primary-outline:hover {
  background: #bee3f8;
}

/* KPI Strip */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 20px;
}

.kpi-card {
  background: #ffffff;
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.kpi-card.highlight-card {
  background: linear-gradient(135deg, #ebf8ff 0%, #e6fffa 100%);
  border-color: #90cdf4;
}

.kpi-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.kpi-icon.blue {
  background: #ebf8ff;
}

.kpi-icon.green {
  background: #f0fff4;
}

.kpi-icon.red {
  background: #fff5f5;
}

.kpi-icon.indigo {
  background: #2b6cb0;
}

.kpi-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.kpi-label {
  font-size: 12px;
  color: #718096;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.kpi-value {
  font-size: 16px;
  font-weight: 700;
  color: #1a202c;
  font-family: 'Noto Sans Lao', 'Courier New', monospace;
}

.text-credit {
  color: #2f855a !important;
}

.text-debit {
  color: #c53030 !important;
}

.text-primary {
  color: #2b6cb0 !important;
}

/* Form Card */
.form-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 22px 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-card.is-editing {
  border: 2px solid #ecc94b;
  box-shadow: 0 4px 14px rgba(214, 158, 46, 0.15);
}

.edit-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fefcbf;
  border: 1px solid #f6e05e;
  color: #744210;
  padding: 10px 14px;
  border-radius: 8px;
  margin-bottom: 18px;
  font-size: 13px;
}

.edit-banner-left {
  display: flex;
  align-items: center;
}

.btn-banner-cancel {
  background: #ffffff;
  border: 1px solid #d69e2e;
  color: #744210;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.btn-banner-cancel:hover {
  background: #faf089;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.top-grid {
  grid-template-columns: 2fr 1fr 1fr;
}

.amount-grid {
  grid-template-columns: 1fr 1fr;
}

.desc-grid {
  grid-template-columns: 2fr 1fr;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-field label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #4a5568;
  font-size: 13px;
  display: flex;
  align-items: center;
}

.required {
  color: #e53e3e;
  margin-left: 3px;
}

.bank-tag {
  color: #718096;
  font-size: 12px;
  margin-left: 4px;
}

.currency-pill {
  background: #edf2f7;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  margin-left: 6px;
}

.input-control {
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-size: 14px;
  color: #2d3748;
  background: #ffffff;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input-control:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.12);
}

.disabled-input {
  background: #edf2f7;
  color: #718096;
  cursor: not-allowed;
}

/* Credit & Debit Amount Boxes */
.amount-box {
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  transition: all 0.2s;
}

.credit-box.box-active {
  background: #f0fff4;
  border-color: #68d391;
}

.debit-box.box-active {
  background: #fff5f5;
  border-color: #fc8181;
}

.amount-box.box-dimmed {
  opacity: 0.65;
}

.amount-box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.amount-box-header label {
  font-size: 13px;
  font-weight: 700;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.credit-dot {
  background: #38a169;
}

.debit-dot {
  background: #e53e3e;
}

.formatted-preview {
  font-size: 12px;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  padding: 2px 8px;
  border-radius: 12px;
}

.credit-preview {
  background: #c6f6d5;
  color: #22543d;
}

.debit-preview {
  background: #fed7d7;
  color: #742a2a;
}

.amount-wrapper {
  display: flex;
  align-items: center;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.amount-wrapper:focus-within {
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.12);
}

.amount-icon {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  min-width: 40px;
  border-right: 1px solid #e2e8f0;
}

.credit-input .amount-icon {
  background: #f0fff4;
  color: #2f855a;
}

.debit-input .amount-icon {
  background: #fff5f5;
  color: #c53030;
}

.exchange-input .amount-icon {
  background: #ebf4ff;
  color: #4c51bf;
}

.manual-input .amount-icon {
  background: #edf2f7;
  color: #2b6cb0;
}

.amount-wrapper input {
  flex: 1;
  height: 100%;
  padding: 0 12px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  color: #1a202c;
  background: transparent;
  font-family: 'Noto Sans Lao', 'Courier New', monospace;
}

.btn-clear-input {
  background: none;
  border: none;
  color: #a0aec0;
  font-size: 18px;
  font-weight: bold;
  padding: 0 10px;
  cursor: pointer;
  height: 100%;
}

.btn-clear-input:hover {
  color: #4a5568;
}

/* Balance Section */
.balance-section {
  margin-top: 16px;
  padding: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
}

.balance-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  flex-wrap: wrap;
  gap: 8px;
}

.balance-section-title {
  font-size: 13px;
  font-weight: 700;
  color: #2d3748;
  display: flex;
  align-items: center;
}

.btn-toggle-mode {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  background: #ffffff;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-toggle-mode:hover {
  background: #edf2f7;
}

.btn-toggle-mode.active {
  background: #2b6cb0;
  color: #ffffff;
  border-color: #2b6cb0;
}

.balance-strip {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 16px;
  gap: 12px;
  flex-wrap: wrap;
}

.balance-step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-label {
  font-size: 11px;
  color: #718096;
  margin-bottom: 2px;
}

.step-value {
  font-size: 16px;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  color: #2d3748;
}

.balance-step.credit .step-value {
  color: #2f855a;
}

.balance-step.debit .step-value {
  color: #c53030;
}

.balance-step.highlight .step-value {
  color: #2b6cb0;
  font-size: 18px;
}

.balance-difference {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 12px;
  background: #fffff0;
  border: 1px solid #f6e05e;
  border-radius: 8px;
  margin-top: 8px;
  font-size: 13px;
}

.diff-label {
  font-weight: 600;
  color: #744210;
}

.diff-value {
  font-weight: 700;
  font-family: 'Courier New', monospace;
}

.diff-value.positive {
  color: #2f855a;
}

.diff-value.negative {
  color: #c53030;
}

.diff-note {
  color: #718096;
  font-size: 12px;
}

/* Form Actions */
.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #edf2f7;
}

.btn-save {
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  background: #2b6cb0;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-save:hover:not(:disabled) {
  background: #2c5282;
}

.btn-save.btn-update {
  background: #d69e2e;
}

.btn-save.btn-update:hover:not(:disabled) {
  background: #b7791f;
}

.btn-save:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
}

.btn-clear {
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  background: #edf2f7;
  color: #4a5568;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-clear:hover:not(:disabled) {
  background: #e2e8f0;
}

.btn-danger {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: #c53030;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.btn-danger:hover:not(:disabled) {
  background: #9b2c2c;
}

/* Table Card */
.table-card {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
  flex-wrap: wrap;
  gap: 12px;
}

.toolbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.toolbar-left h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #2d3748;
  display: flex;
  align-items: center;
}

.record-badge {
  background: #ebf8ff;
  color: #2b6cb0;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 12px;
}

.toolbar-filters {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #4a5568;
}

.filter-input {
  height: 32px;
  padding: 4px 8px;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 12px;
  background: #ffffff;
}

.btn-reset-filter {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 10px;
  background: #fff5f5;
  color: #c53030;
  border: 1px solid #feb2b2;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.table-wrapper {
  overflow-x: auto;
}

.compact-table {
  width: 100%;
  border-collapse: collapse;
}

.compact-table th,
.compact-table td {
  padding: 11px 14px;
  text-align: left;
  border-bottom: 1px solid #edf2f7;
  font-size: 13px;
}

.compact-table th {
  background: #f1f5f9;
  font-weight: 700;
  color: #475569;
  font-size: 12px;
  white-space: nowrap;
}

.compact-table tbody tr:hover {
  background: #f8fafc;
}

.compact-table .row-index {
  color: #a0aec0;
  font-size: 12px;
}

.compact-table .desc-cell {
  max-width: 240px;
}

.desc-main {
  color: #2d3748;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.desc-sub {
  font-size: 11px;
  color: #718096;
}

.mono-text {
  font-family: 'Courier New', monospace;
}

.compact-table .amount {
  text-align: right;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  white-space: nowrap;
}

.compact-table .credit {
  color: #2f855a;
}

.compact-table .debit {
  color: #c53030;
}

.compact-table .balance {
  color: #2b6cb0;
  font-weight: 700;
}

.compact-table .nowrap {
  white-space: nowrap;
}

.is-reconciled {
  background: #f0fff4;
}

.is-editing-row {
  background: #fefcbf !important;
}

.badge {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
}

.badge.pending {
  background: #fefcbf;
  color: #975a16;
}

.badge.cleared {
  background: #e6fffa;
  color: #234e52;
}

.badge.reconciled {
  background: #c6f6d5;
  color: #22543d;
}

.actions {
  text-align: center;
  white-space: nowrap;
}

.btn-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin: 0 2px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.15s;
}

.btn-action.edit:hover {
  background: #ebf8ff;
  border-color: #90cdf4;
}

.btn-action.reconcile:hover {
  background: #f0fff4;
  border-color: #9ae6b4;
}

.btn-action.delete:hover {
  background: #fff5f5;
  border-color: #feb2b2;
}

/* Select Account Prompt */
.select-account-prompt {
  text-align: center;
  padding: 48px 20px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px dashed #cbd5e0;
  color: #718096;
}

.select-account-prompt h3 {
  margin: 8px 0 4px;
  color: #2d3748;
  font-size: 17px;
}

.select-account-prompt p {
  margin: 0;
  font-size: 13px;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 48px 20px;
  color: #718096;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #e2e8f0;
  border-top: 3px solid #3182ce;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 12px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border-top: 1px solid #edf2f7;
}

.btn-page {
  padding: 6px 14px;
  background: #ffffff;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: #4a5568;
}

.btn-page:hover:not(:disabled) {
  background: #edf2f7;
}

.btn-page:disabled {
  color: #cbd5e0;
  cursor: not-allowed;
}

.page-info {
  font-size: 13px;
  font-weight: 600;
  color: #4a5568;
}

/* Modals */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal-dialog {
  background: #ffffff;
  border-radius: 12px;
  min-width: 420px;
  max-width: 92vw;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
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
  font-size: 16px;
  font-weight: 700;
  color: #1a202c;
  display: flex;
  align-items: center;
}

.delete-header {
  background: #fff5f5;
  border-bottom-color: #fed7d7;
}

.btn-close {
  background: none;
  border: none;
  font-size: 22px;
  line-height: 1;
  color: #718096;
  cursor: pointer;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 12px 20px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
}

.delete-msg {
  margin: 0 0 12px;
  font-size: 14px;
  color: #2d3748;
}

.delete-preview {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
}

.preview-row {
  display: flex;
  justify-content: space-between;
}

.summary-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px dashed #edf2f7;
  font-size: 14px;
}

.summary-row.credit strong {
  color: #2f855a;
}

.summary-row.debit strong {
  color: #c53030;
}

.summary-row.highlight {
  padding: 12px;
  background: #ebf8ff;
  border-radius: 8px;
  border-bottom: none;
  font-weight: 700;
}

.summary-row.highlight strong {
  color: #2b6cb0;
  font-size: 16px;
}

/* Responsive */
@media (max-width: 900px) {
  .kpi-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .top-grid,
  .desc-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .kpi-grid,
  .amount-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }
  .balance-strip {
    flex-direction: column;
  }
  .modal-dialog {
    min-width: 300px;
  }
}
</style>
