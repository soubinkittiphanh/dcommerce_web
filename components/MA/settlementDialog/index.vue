<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-dialog enhanced-dialog" @click.stop>
      <div class="modal-header">
        <div class="modal-title-section">
          <i class="fas fa-money-bill-wave modal-icon"></i>
          <h5 class="modal-title">
            {{ isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ລົງລາຍຮັບ ການຊຳລະ' }}
          </h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <form @submit.prevent="saveSettlement">
        <div class="modal-body">
          <!-- Loading state for form data -->
          <div v-if="loading" class="form-loading">
            <div class="spinner-small"></div>
            <p>Loading form data...</p>
          </div>

          <div v-else class="form-grid">
            <!-- Settlement Date -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-calendar"></i>
                ວັນທີລົງຊຳລະ
              </label>
              <input
                v-model="formData.settlementDate"
                type="date"
                class="form-control"
                :class="{ 'is-invalid': errors.settlementDate }"
                :max="today"
                required
              />
              <div v-if="errors.settlementDate" class="invalid-feedback">
                {{ errors.settlementDate }}
              </div>
            </div>

            <!-- Payment Method -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-credit-card"></i>
                ວິທີການຊຳລະ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.method"
                  class="form-control custom-select"
                  :class="{ 'is-invalid': errors.method }"
                  required
                  @change="handleMethodChange"
                >
                  <option value="">ເລືອກວິທີການຊຳລະ</option>
                  <option value="cash">ເງິນສົດ (Cash)</option>
                  <option value="bank_transfer">
                    ໂອນຜ່ານທະນາຄານ (Bank Transfer)
                  </option>
                  <option value="deduction">ຫັກລົບ (Deduction)</option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="errors.method" class="invalid-feedback">
                {{ errors.method }}
              </div>
            </div>

            <!-- Money Advance Link Option -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-link"></i>
                ເຊື່ອມຕໍ່ກັບລາຍຈ່າຍລ່ວງໜ້າ
              </label>
              <div class="link-advance-options">
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="formData.linkToAdvance"
                    value="false"
                    @change="clearAdvanceSelection"
                  />
                  <span class="radio-label">ບໍ່ເຊື່ອມຕໍ່</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="formData.linkToAdvance"
                    value="true"
                  />
                  <span class="radio-label">ເຊື່ອມຕໍ່ກັບລາຍຈ່າຍລ່ວງໜ້າ</span>
                </label>
              </div>
            </div>

            <!-- Money Advance Selection (conditional) -->
            <div
              v-if="formData.linkToAdvance === 'true'"
              class="form-group full-width money-advance-section"
            >
              <label class="form-label">
                <i class="fas fa-search"></i>
                ເລືອກລາຍຈ່າຍລ່ວງໜ້າ
              </label>
              <div class="advance-selection-container">
                <div class="custom-select-wrapper">
                  <select
                    v-model="formData.moneyAdvanceId"
                    class="form-control custom-select"
                    @change="updateSelectedAdvance"
                  >
                    <option value="">ເລືອກລາຍຈ່າຍລ່ວງໜ້າ</option>
                    <option
                      v-for="advance in availableAdvances"
                      :key="advance.id"
                      :value="advance.id"
                    >
                      {{ formatAdvanceOption(advance) }}
                    </option>
                  </select>
                  <div class="select-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click.stop="browseMoneyAdvances"
                  :disabled="loadingAdvances"
                >
                  <i v-if="loadingAdvances" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-search"></i>
                  ເລືອກ
                </button>
              </div>

              <!-- Selected Advance Info -->
              <div v-if="selectedAdvance" class="advance-info">
                <div class="advance-details">
                  <div class="advance-detail-item">
                    <i class="fas fa-hashtag"></i>
                    <span class="advance-label">ລະຫັດ:</span>
                    <span class="advance-value">{{ selectedAdvance.id }}</span>
                  </div>
                  <div class="advance-detail-item">
                    <i class="fas fa-calendar"></i>
                    <span class="advance-label">ວັນທີ:</span>
                    <span class="advance-value">{{
                      formatDate(selectedAdvance.bookingDate)
                    }}</span>
                  </div>
                  <div class="advance-detail-item">
                    <i class="fas fa-dollar-sign"></i>
                    <span class="advance-label">ຈຳນວນ:</span>
                    <span class="advance-value amount">{{
                      formatCurrency(selectedAdvance.amount)
                    }}</span>
                  </div>
                  <div
                    v-if="selectedAdvance.purpose"
                    class="advance-detail-item"
                  >
                    <i class="fas fa-tag"></i>
                    <span class="advance-label">ຈຸດປະສົງ:</span>
                    <span class="advance-value">{{
                      selectedAdvance.purpose
                    }}</span>
                  </div>
                  <div class="advance-detail-item">
                    <i class="fas fa-info-circle"></i>
                    <span class="advance-label">ສະຖານະ:</span>
                    <span :class="['status-badge', selectedAdvance.status]">
                      {{ formatStatus(selectedAdvance.status) }}
                    </span>
                  </div>
                </div>
              </div>

              <div
                v-if="availableAdvances.length === 0 && !loadingAdvances"
                class="field-hint warning"
              >
                <i class="fas fa-info-circle"></i>
                ບໍ່ມີລາຍຈ່າຍລ່ວງໜ້າທີ່ສາມາດເຊື່ອມຕໍ່ໄດ້
              </div>
            </div>

            <!-- Amount -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-dollar-sign"></i>
                ຈຳນວນເງິນ
              </label>
              <div class="input-group">
                <input
                  v-model.number="formData.amount"
                  type="number"
                  step="0.01"
                  min="0"
                  class="form-control"
                  :class="{ 'is-invalid': errors.amount }"
                  placeholder="0.00"
                  required
                />
                <!-- :disabled="isLinkedToAdvance && selectedAdvance" -->
                <div class="input-group-append">
                  <span class="input-group-text">
                    {{ selectedCurrencyCode }}
                  </span>
                </div>
              </div>
              <div v-if="errors.amount" class="invalid-feedback">
                {{ errors.amount }}
              </div>
              <div
                v-if="isLinkedToAdvance && selectedAdvance"
                class="field-hint info"
              >
                <i class="fas fa-info-circle"></i>
                ຈຳນວນເງິນຖືກກຳນົດໂດຍອັດຕະໂນມັດຕາມລາຍຈ່າຍລ່ວງໜ້າ
              </div>
            </div>

            <!-- Currency -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-coins"></i>
                ສະກຸນເງິນ
                <span v-if="isLinkedToAdvance" class="currency-note">
                  (ຕາມລາຍຈ່າຍລ່ວງໜ້າ)
                </span>
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.currencyId"
                  class="form-control custom-select"
                  :class="{ 'is-invalid': errors.currencyId }"
                  required
                  @change="updateSelectedCurrency"
                  :disabled="isLinkedToAdvance"
                >
                  <option value="">ເລືອກສະກຸນເງິນ</option>
                  <option
                    v-for="currency in currencies"
                    :key="currency.id"
                    :value="currency.id"
                  >
                    {{ currency.code || currency.currencyCode }} -
                    {{ currency.name || currency.currencyName }}
                  </option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="errors.currencyId" class="invalid-feedback">
                {{ errors.currencyId }}
              </div>
              <div
                v-if="isLinkedToAdvance && selectedAdvance"
                class="field-hint info"
              >
                <i class="fas fa-info-circle"></i>
                ສະກຸນເງິນຖືກກຳນົດໂດຍອັດຕະໂນມັດຕາມລາຍຈ່າຍລ່ວງໜ້າ
              </div>
              <div v-if="currencies.length === 0" class="field-hint error">
                <i class="fas fa-exclamation-triangle"></i>
                No currencies available. Please contact administrator.
              </div>
            </div>

            <!-- Exchange Rate -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-exchange-alt"></i>
                ອັດຕາແລກປ່ຽນ
                <span class="exchange-rate-note">
                  ({{ selectedCurrencyCode }} ຕໍ່ LAK)
                </span>
              </label>
              <div class="input-group">
                <input
                  v-model.number="formData.exchangeRate"
                  type="number"
                  step="0.0001"
                  min="0"
                  class="form-control"
                  :class="{ 'is-invalid': errors.exchangeRate }"
                  placeholder="1.0000"
                  @input="calculateEquivalentAmount"
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fas fa-calculator"></i>
                  </span>
                </div>
              </div>
              <div v-if="errors.exchangeRate" class="invalid-feedback">
                {{ errors.exchangeRate }}
              </div>
              <div v-if="showEquivalentAmount" class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ເທົ່າກັບ {{ formatCurrency(equivalentAmountLAK) }} LAK
              </div>
              <div v-if="isBaseCurrency" class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ສະກຸນເງິນພື້ນຖານ (LAK) - ອັດຕາແລກປ່ຽນ = 1
              </div>
            </div>

            <!-- Bank Account (conditional) -->
            <div
              v-if="formData.method === 'bank_transfer'"
              class="form-group full-width"
            >
              <label class="form-label required">
                <i class="fas fa-university"></i>
                ບັນຊີທະນາຄານ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.bankAccountId"
                  class="form-control custom-select"
                  :class="{ 'is-invalid': errors.bankAccountId }"
                  :required="formData.method === 'bank_transfer'"
                  @change="updateSelectedBankAccount"
                >
                  <option value="">ເລືອກບັນຊີທະນາຄານ</option>
                  <option
                    v-for="account in filteredBankAccounts"
                    :key="account.id"
                    :value="account.id"
                  >
                    {{ account.bankName }} - {{ account.accountNumber }} ({{
                      account.accountName
                    }})
                  </option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="errors.bankAccountId" class="invalid-feedback">
                {{ errors.bankAccountId }}
              </div>

              <!-- Selected Bank Account Info -->
              <div v-if="selectedBankAccount" class="bank-account-info">
                <div class="bank-details">
                  <div class="bank-detail-item">
                    <i class="fas fa-building"></i>
                    <span>{{ selectedBankAccount.bankName }}</span>
                    <span v-if="selectedBankAccount.bankBranch" class="branch">
                      ({{ selectedBankAccount.bankBranch }})
                    </span>
                  </div>
                  <div class="bank-detail-item">
                    <i class="fas fa-credit-card"></i>
                    <span>{{ selectedBankAccount.accountNumber }}</span>
                  </div>
                  <div class="bank-detail-item">
                    <i class="fas fa-tag"></i>
                    <span>{{
                      selectedBankAccount.accountType ||
                      selectedBankAccount.accountName
                    }}</span>
                  </div>
                  <div class="bank-detail-item">
                    <i class="fas fa-coins"></i>
                    <span>{{ selectedBankAccount.currency }}</span>
                  </div>
                </div>
              </div>

              <div v-if="bankAccounts.length === 0" class="field-hint warning">
                <i class="fas fa-info-circle"></i>
                No bank accounts available. You can still create the settlement
                without selecting a bank account.
              </div>
            </div>

            <!-- Ministry -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-building"></i>
                ກະຊວງ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.ministryId"
                  class="form-control custom-select"
                  :class="{ 'is-invalid': errors.ministryId }"
                  @change="updateSelectedMinistry"
                >
                  <option value="">ເລືອກກະຊວງ (ທາງເລືອກ)</option>
                  <option
                    v-for="ministry in ministries"
                    :key="ministry.id"
                    :value="ministry.id"
                  >
                    {{ ministry.ministryCode }} - {{ ministry.ministryName }}
                  </option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="errors.ministryId" class="invalid-feedback">
                {{ errors.ministryId }}
              </div>

              <!-- Selected Ministry Info -->
              <div v-if="selectedMinistry" class="ministry-info">
                <div class="ministry-details">
                  <div class="ministry-detail-item">
                    <i class="fas fa-building"></i>
                    <span class="ministry-name">{{
                      selectedMinistry.ministryName
                    }}</span>
                  </div>
                  <div class="ministry-detail-item">
                    <i class="fas fa-tag"></i>
                    <span class="ministry-code">{{
                      selectedMinistry.ministryCode
                    }}</span>
                  </div>
                </div>
              </div>

              <div v-if="ministries.length === 0" class="field-hint warning">
                <i class="fas fa-info-circle"></i>
                No ministries available. You can still create the settlement
                without selecting a ministry.
              </div>
            </div>

            <!-- Chart Account -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-chart-line"></i>
                ບັນຊີລວມ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.chartAccountId"
                  class="form-control custom-select"
                  :class="{ 'is-invalid': errors.chartAccountId }"
                >
                  <option value="">ເລືອກບັນຊີລວມ (ທາງເລືອກ)</option>
                  <option
                    v-for="chartAccount in chartAccounts"
                    :key="chartAccount.id"
                    :value="chartAccount.id"
                  >
                    {{ chartAccount.accountNumber }} -
                    {{ chartAccount.accountName }}
                  </option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="errors.chartAccountId" class="invalid-feedback">
                {{ errors.chartAccountId }}
              </div>
            </div>

            <!-- Outstanding Invoices (conditional for deduction) -->
            <div
              v-if="formData.method === 'deduction'"
              class="form-group full-width"
            >
              <label class="form-label">
                <i class="fas fa-file-invoice"></i>
                ໃບແຈ້ງໜີ້ທີ່ຄ້າງຊຳລະ
              </label>
              <div class="invoice-list">
                <div
                  v-for="invoice in outstandingInvoices"
                  :key="invoice.id"
                  class="invoice-item"
                >
                  <label class="invoice-checkbox">
                    <input
                      type="checkbox"
                      :value="invoice.id"
                      v-model="formData.selectedInvoices"
                      @change="updateSelectedInvoicesAmount"
                    />
                    <div class="invoice-details">
                      <div class="invoice-number">
                        {{ invoice.invoiceNumber }}
                      </div>
                      <div class="invoice-vendor">
                        {{ invoice.vendor?.name }}
                      </div>
                      <div class="invoice-amount">
                        {{ formatCurrency(invoice.outstandingAmount) }}
                      </div>
                      <div class="invoice-due">
                        ຄົບກຳຫນົດ: {{ formatDate(invoice.dueDate) }}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div
                v-if="formData.selectedInvoices.length > 0"
                class="selected-summary"
              >
                ຈຳນວນທີ່ເລືອກ: {{ formatCurrency(selectedInvoicesTotal) }}
              </div>
            </div>

            <!-- Requester/Proceeder -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-user"></i>
                ຜູ້ລົງບັນຊີ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.userId"
                  class="form-control custom-select"
                  :class="{ 'is-invalid': errors.userId }"
                  required
                  disabled
                >
                  <option value="">ເລືອກຜູ້ລົງບັນຊີ</option>
                  <option v-for="user in users" :key="user.id" :value="user.id">
                    {{ user.cus_name || user.name || user.username }}
                  </option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="errors.userId" class="invalid-feedback">
                {{ errors.userId }}
              </div>
              <div v-if="users.length === 0" class="field-hint error">
                <i class="fas fa-exclamation-triangle"></i>
                No users available. Please contact administrator.
              </div>
              <!-- 🐛 DEBUG: Show current user info -->
              <div class="field-hint info" style="margin-top: 4px">
                <small
                  >Selected: {{ formData.userId || 'None' }} | Current User:
                  {{ user?.id || 'None' }}</small
                >
              </div>
            </div>

            <!-- Notes -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-sticky-note"></i>
                ໝາຍເຫດ
              </label>
              <textarea
                v-model="formData.notes"
                class="form-control"
                rows="3"
                placeholder="ລາຍລະອຽດເພີ່ມເຕີມ..."
                maxlength="500"
              ></textarea>
              <div class="field-hint">
                <span class="text-counter"
                  >{{ formData.notes?.length || 0 }}/500</span
                >
              </div>
            </div>
          </div>

          <!-- Form Validation Errors -->
          <div v-if="formErrors.length > 0" class="form-errors">
            <h6>
              <i class="fas fa-exclamation-circle"></i>
              Please fix the following errors:
            </h6>
            <ul>
              <li v-for="error in formErrors" :key="error">{{ error }}</li>
            </ul>
          </div>
        </div>

        <div class="modal-footer enhanced-footer">
          <!-- 🐛 DEBUG: Add debug button (remove in production) -->
          <button
            type="button"
            @click="debugFormValidation"
            class="btn btn-outline-secondary btn-sm"
            style="margin-right: auto"
          >
            <i class="fas fa-bug"></i>
            Debug
          </button>

          <button
            type="button"
            @click="closeDialog"
            class="btn btn-secondary"
            :disabled="loading"
          >
            <i class="fas fa-times"></i>
            ຍົກເລີກ
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="loading || !isFormValid"
          >
            <i v-if="loading" class="fas fa-spinner fa-spin"></i>
            <i
              v-else
              class="fas"
              :class="isEditMode ? 'fa-save' : 'fa-plus'"
            ></i>
            {{ loading ? 'Saving...' : isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Money Advance Browser Modal -->
    <div
      v-if="showAdvanceBrowser"
      class="modal-overlay browser-overlay"
      @click="handleAdvanceBrowserOverlayClick"
    >
      <div class="modal-dialog advance-browser-dialog" @click.stop>
        <div class="modal-header">
          <div class="modal-title-section">
            <i class="fas fa-search modal-icon"></i>
            <h5 class="modal-title">ເລືອກລາຍຈ່າຍລ່ວງໜ້າ</h5>
          </div>
          <button @click="closeAdvanceBrowser" class="close-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="modal-body">
          <!-- Search and Filters -->
          <div class="advance-filters">
            <div class="filter-row">
              <div class="filter-group">
                <input
                  v-model="advanceSearch.query"
                  type="text"
                  class="form-control"
                  placeholder="ຄົ້ນຫາຕາມຈຸດປະສົງ, ໝາຍເຫດ..."
                  @input="searchAdvances"
                />
              </div>
              <div class="filter-group">
                <select
                  v-model="advanceSearch.status"
                  class="form-control"
                  @change="filterAdvances"
                >
                  <option value="">ທຸກສະຖານະ</option>
                  <option value="pending">ລໍຖ້າ</option>
                  <option value="approved">ອະນຸມັດ</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Advances List -->
          <div class="advances-list">
            <div v-if="loadingAdvances" class="loading-state">
              <div class="spinner-small"></div>
              <p>Loading advances...</p>
            </div>

            <div v-else-if="filteredAdvances.length === 0" class="empty-state">
              <i class="fas fa-inbox"></i>
              <p>ບໍ່ພົບລາຍຈ່າຍລ່ວງໜ້າ</p>
            </div>

            <div v-else class="advance-items">
              <div
                v-for="advance in filteredAdvances"
                :key="advance.id"
                class="advance-item"
                :class="{
                  selected: selectedAdvanceForBrowser?.id === advance.id,
                }"
                @click.stop="selectAdvanceFromBrowser(advance)"
              >
                <div class="advance-item-content">
                  <div class="advance-item-header">
                    <span class="advance-id">#{{ advance.id }}</span>
                    <span :class="['status-badge', advance.status]">
                      {{ formatStatus(advance.status) }}
                    </span>
                  </div>
                  <div class="advance-item-body">
                    <div class="advance-amount">
                      {{ formatCurrency(advance.amount) }}
                    </div>
                    <div class="advance-date">
                      {{ formatDate(advance.bookingDate) }}
                    </div>
                    <div v-if="advance.purpose" class="advance-purpose">
                      {{ advance.purpose }}
                    </div>
                    <div v-if="advance.maker" class="advance-maker">
                      {{ advance.maker.cus_name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            @click="closeAdvanceBrowser"
            class="btn btn-secondary"
          >
            <i class="fas fa-times"></i>
            ຍົກເລີກ
          </button>
          <button
            type="button"
            @click.stop="confirmAdvanceSelection"
            class="btn btn-primary"
            :disabled="!selectedAdvanceForBrowser"
          >
            <i class="fas fa-check"></i>
            ເລືອກ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettlementDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    settlement: {
      type: Object,
      default: null,
    },
    outstandingInvoices: {
      type: Array,
      default: () => [],
    },
    currencies: {
      type: Array,
      default: () => [],
    },
    bankAccounts: {
      type: Array,
      default: () => [],
    },
    ministries: {
      type: Array,
      default: () => [],
    },
    chartAccounts: {
      type: Array,
      default: () => [],
    },
    users: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      loading: false,
      loadingAdvances: false,
      showAdvanceBrowser: false,
      selectedAdvanceForBrowser: null,
      availableAdvances: [],
      filteredAdvances: [],
      advanceSearch: {
        query: '',
        status: '',
      },
      formData: {
        settlementDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1, // New field
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: '',
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: '',
      },
      errors: {},
      formErrors: [],
    }
  },

  computed: {
    isEditMode() {
      return this.settlement && this.settlement.id
    },

    // New computed property for checking if linked to advance
    isLinkedToAdvance() {
      return (
        this.formData.linkToAdvance === 'true' && this.formData.moneyAdvanceId
      )
    },

    // New computed properties for exchange rate functionality
    isBaseCurrency() {
      return this.selectedCurrencyCode === 'LAK'
    },

    showEquivalentAmount() {
      return (
        !this.isBaseCurrency &&
        this.formData.amount > 0 &&
        this.formData.exchangeRate > 0
      )
    },

    equivalentAmountLAK() {
      if (!this.showEquivalentAmount) return 0
      return this.formData.amount * this.formData.exchangeRate
    },

    selectedInvoicesTotal() {
      return this.outstandingInvoices
        .filter((invoice) =>
          this.formData.selectedInvoices.includes(invoice.id)
        )
        .reduce((total, invoice) => total + (invoice.outstandingAmount || 0), 0)
    },

    selectedCurrencyCode() {
      if (!this.formData.currencyId) return 'LAK'
      const currency = this.currencies.find(
        (c) => c.id == this.formData.currencyId
      )
      if (!this._isInitializing) this.formData.exchangeRate = currency.rate || 1

      return currency ? currency.code || currency.currencyCode : 'LAK'
    },

    selectedBankAccount() {
      if (!this.formData.bankAccountId) return null
      return this.bankAccounts.find(
        (account) => account.id == this.formData.bankAccountId
      )
    },

    selectedMinistry() {
      if (!this.formData.ministryId) return null
      return this.ministries.find(
        (ministry) => ministry.id == this.formData.ministryId
      )
    },

    selectedCurrency() {
      if (!this.formData.currencyId) return null
      return this.currencies.find(
        (currency) => currency.id == this.formData.currencyId
      )
    },

    selectedAdvance() {
      if (!this.formData.moneyAdvanceId) return null
      return this.availableAdvances.find(
        (advance) => advance.id == this.formData.moneyAdvanceId
      )
    },

    user() {
      return this.$auth.user || ''
    },

    // Filter bank accounts by selected currency if possible
    filteredBankAccounts() {
      if (!this.selectedCurrency || !this.bankAccounts.length) {
        return this.bankAccounts.filter((account) => account.isActive !== false)
      }

      const currencyCode =
        this.selectedCurrency.code || this.selectedCurrency.currencyCode
      const filtered = this.bankAccounts.filter(
        (account) =>
          (account.currency === currencyCode || !account.currency) &&
          account.isActive !== false
      )

      return filtered.length > 0
        ? filtered
        : this.bankAccounts.filter((account) => account.isActive !== false)
    },

    today() {
      return new Date().toISOString().split('T')[0]
    },

    isFormValid() {
      // 🐛 DEBUG: Let's check each validation condition
      const validations = {
        hasAmount: !!(
          this.formData.amount && parseFloat(this.formData.amount) > 0
        ),
        hasCurrency: !!this.formData.currencyId,
        hasUser: !!this.formData.userId, // Check if user is selected
        hasSettlementDate: !!this.formData.settlementDate,
        hasMethod: !!this.formData.method,
        hasUsers: this.users.length > 0,
        hasCurrencies: this.currencies.length > 0,
        // 🆕 FIX: Correct operator precedence - was: (!this.formData.method === 'bank_transfer' || this.formData.bankAccountId)
        bankAccountValid:
          this.formData.method !== 'bank_transfer' ||
          !!this.formData.bankAccountId,
        // New exchange rate validation
        exchangeRateValid:
          !this.formData.exchangeRate || this.formData.exchangeRate > 0,
      }

      // 🐛 DEBUG: Log current form state
      console.log('🔍 Form Validation Debug:', {
        formData: {
          amount: this.formData.amount,
          currencyId: this.formData.currencyId,
          exchangeRate: this.formData.exchangeRate,
          userId: this.formData.userId,
          settlementDate: this.formData.settlementDate,
          method: this.formData.method,
          bankAccountId: this.formData.bankAccountId,
        },
        validations,
        usersLength: this.users.length,
        currenciesLength: this.currencies.length,
        finalValid: Object.values(validations).every((v) => v === true),
      })

      // Return true only if ALL conditions are met
      return Object.values(validations).every((v) => v === true)
    },
  },

  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm()
        this.loadMoneyAdvances()
      } else {
        this.resetForm()
      }
    },
    'formData.currencyId'(newVal, oldVal) {
      if (newVal !== oldVal) {
        // Don't override exchange rate during initialization in edit mode
        if (!this._isInitializing || !this.isEditMode) {
          this.handleCurrencyChange()
        }
      }
    },
    settlement: {
      handler(newVal, oldVal) {
        if (this.visible && newVal !== oldVal) {
          this.$nextTick(() => {
            this.initializeForm()
          })
        }
      },
      deep: true,
    },

    // Watch for currency changes to auto-set exchange rate
    'formData.currencyId'(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.handleCurrencyChange()
      }
    },

    // Watch for money advance changes
    'formData.moneyAdvanceId'(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$nextTick(() => {
          this.syncCurrencyFromAdvance()
          this.syncAmountFromAdvance()
        })
      }
    },

    // Watch for link to advance changes
    'formData.linkToAdvance'(newVal, oldVal) {
      if (newVal === 'false' && oldVal === 'true') {
        this.clearAdvanceSelection()
      }
    },

    // 🆕 NEW: Watch for available advances to load and auto-sync
    availableAdvances: {
      handler(newAdvances) {
        if (
          newAdvances.length > 0 &&
          this.formData.moneyAdvanceId &&
          this.formData.linkToAdvance === 'true'
        ) {
          console.log('🔄 Advances loaded, triggering auto-sync...')
          this.$nextTick(() => {
            this.syncCurrencyFromAdvance()
            this.syncAmountFromAdvance()
          })
        }
      },
      immediate: false,
    },
  },

  beforeDestroy() {
    // Cleanup: ensure body scroll is restored when component is destroyed
    document.body.style.overflow = 'auto'
  },

  methods: {
    initializeForm() {
      console.warn(`initiate data ${JSON.stringify(this.settlement)}`)
      console.warn(`initiate user ${JSON.stringify(this.user)}`)

      if (
        this.settlement &&
        (this.settlement.id || this.settlement.moneyAdvanceId)
      ) {
        // Edit mode OR new settlement with money advance link
        const hasMoneyAdvance =
          this.settlement.moneyAdvanceId &&
          this.settlement.moneyAdvanceId !== null &&
          this.settlement.moneyAdvanceId !== '' &&
          this.settlement.moneyAdvanceId !== '0' &&
          this.settlement.moneyAdvanceId !== 0

        console.log('🔍 Settlement initialization:', {
          isEdit: !!this.settlement.id,
          hasMoneyAdvance,
          moneyAdvanceId: this.settlement.moneyAdvanceId,
          linkToAdvanceFromProp: this.settlement.linkToAdvance,
          originalExchangeRate: this.settlement.exchangeRate, // ✅ Log original value
        })

        this.formData = {
          settlementDate: this.settlement.settlementDate
            ? this.settlement.settlementDate.split('T')[0]
            : '',
          method: this.settlement.method || '',
          amount: this.settlement.amount || null,
          currencyId: this.settlement.currencyId || '',
          // ✅ FIX 1: Properly handle exchange rate - check for undefined/null, not falsy
          exchangeRate:
            this.settlement.exchangeRate !== undefined &&
            this.settlement.exchangeRate !== null
              ? this.settlement.exchangeRate
              : 1,
          bankAccountId: this.settlement.bankAccountId || '',
          ministryId: this.settlement.ministryId || '',
          chartAccountId: this.settlement.chartAccountId || '',
          userId: this.settlement.userId || '',
          notes: this.settlement.notes || '',
          selectedInvoices: [],
          linkToAdvance:
            hasMoneyAdvance || this.settlement.linkToAdvance === 'true'
              ? 'true'
              : 'false',
          moneyAdvanceId: hasMoneyAdvance
            ? this.settlement.moneyAdvanceId.toString()
            : '',
        }

        console.log('✅ Form data initialized:', {
          linkToAdvance: this.formData.linkToAdvance,
          moneyAdvanceId: this.formData.moneyAdvanceId,
          exchangeRate: this.formData.exchangeRate, // ✅ Log the set value
        })

        // ✅ FIX 2: Add initialization flag to prevent watchers from overriding during init
        this._isInitializing = true

        // If linked to advance, ensure currency sync after money advances are loaded
        if (this.formData.linkToAdvance === 'true') {
          this.$nextTick(() => {
            this.waitForAdvancesAndSync()
            // Clear initialization flag after sync
            this._isInitializing = false
          })
        } else {
          // Clear initialization flag
          this.$nextTick(() => {
            this._isInitializing = false
          })
        }
      } else {
        // Create mode - set defaults
        this.formData = {
          settlementDate: this.today,
          method: '',
          amount: null,
          currencyId: '',
          exchangeRate: 1, // Default to 1
          bankAccountId: '',
          ministryId: '',
          chartAccountId: '',
          userId: this.user.id,
          notes: '',
          selectedInvoices: [],
          linkToAdvance: 'false',
          moneyAdvanceId: '',
        }

        this._isInitializing = true

        // Set default currency if available
        if (this.currencies.length > 0) {
          const defaultCurrency =
            this.currencies.find((c) => (c.code || c.currencyCode) === 'LAK') ||
            this.currencies[0]
          this.formData.currencyId = defaultCurrency.id
        }

        this.$nextTick(() => {
          this._isInitializing = false
        })
      }

      this.errors = {}
      this.formErrors = []
    },

    // Helper method to wait for advances to load and then sync
    waitForAdvancesAndSync() {
      console.log('🔄 Waiting for advances to load and sync...')
      const checkAndSync = () => {
        console.log(
          '🔍 Check and sync - Available advances:',
          this.availableAdvances.length,
          'Loading:',
          this.loadingAdvances
        )

        if (this.availableAdvances.length > 0 && this.formData.moneyAdvanceId) {
          console.log(
            '✅ Found advances, looking for advance ID:',
            this.formData.moneyAdvanceId
          )

          // Find the specific advance
          const foundAdvance = this.availableAdvances.find(
            (advance) =>
              advance.id.toString() === this.formData.moneyAdvanceId.toString()
          )

          if (foundAdvance) {
            console.log('🎯 Found matching advance:', foundAdvance)
            this.syncCurrencyFromAdvance()
            this.syncAmountFromAdvance()
          } else {
            console.warn(
              '⚠️ Advance not found in available advances list. Available IDs:',
              this.availableAdvances.map((a) => a.id)
            )
          }
        } else if (!this.loadingAdvances) {
          console.log('🔄 No advances loaded yet and not loading, retrying...')
          // If not loading and no advances, try again after a short delay
          setTimeout(checkAndSync, 200)
        }
      }

      // Start checking
      checkAndSync()
    },

    resetForm() {
      this.formData = {
        settlementDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1, // Reset to default
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: this.user.id,
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: '',
      }
      this.errors = {}
      this.formErrors = []
      this.loading = false

      // Ensure browser dialog is closed and body scroll is restored
      if (this.showAdvanceBrowser) {
        this.showAdvanceBrowser = false
        this.selectedAdvanceForBrowser = null
        document.body.style.overflow = 'auto'
      }
    },

    // New method to handle currency changes
    // Fix 3: Update handleCurrencyChange to be more careful about overriding
    handleCurrencyChange() {
      console.log('🔄 Currency change detected:', {
        isInitializing: this._isInitializing,
        isEditMode: this.isEditMode,
        isBaseCurrency: this.isBaseCurrency,
        currentExchangeRate: this.formData.exchangeRate,
      })

      if (this.isBaseCurrency) {
        // ✅ FIX 4: Only auto-set to 1 if not in edit mode or if rate is null/undefined
        if (
          !this.isEditMode ||
          this.formData.exchangeRate === null ||
          this.formData.exchangeRate === undefined
        ) {
          this.formData.exchangeRate = 1
          console.log('✅ Set exchange rate to 1 for base currency')
        } else {
          console.log(
            '⚠️ Preserving existing exchange rate in edit mode:',
            this.formData.exchangeRate
          )
        }
      } else if (
        !this.formData.exchangeRate ||
        this.formData.exchangeRate === 1
      ) {
        // You could potentially fetch exchange rate from an API here
        // For now, just ensure it's not 1 for non-base currencies
        if (!this.isEditMode) {
          this.formData.exchangeRate = null
        }
      }
    },

    // New method to calculate equivalent amount
    calculateEquivalentAmount() {
      // This method can be used to trigger reactivity or perform additional calculations
      // The computed property `equivalentAmountLAK` handles the actual calculation
    },

    async loadMoneyAdvances() {
      this.loadingAdvances = true
      console.log('📥 Loading money advances...')

      try {
        // Load available money advances that can be linked
        const params = {
          status: ['pending', 'approved'],
          available_for_settlement: true,
        }

        // If we have a specific money advance ID, make sure to include it
        if (this.formData.moneyAdvanceId) {
          params.include_advance_id = this.formData.moneyAdvanceId
          console.log(
            '🎯 Including specific advance ID:',
            this.formData.moneyAdvanceId
          )
        }

        const { data } = await this.$axios.get('/api/money-advances', {
          params,
        })

        if (data && data.success) {
          this.availableAdvances = data.data || []
          console.log(
            '✅ Loaded advances:',
            this.availableAdvances.length,
            'advances'
          )

          // If we have a specific advance ID, make sure it's in the list
          if (this.formData.moneyAdvanceId) {
            const foundAdvance = this.availableAdvances.find(
              (advance) =>
                advance.id.toString() ===
                this.formData.moneyAdvanceId.toString()
            )

            if (!foundAdvance) {
              console.warn(
                '⚠️ Specific advance not found in list, fetching individually...'
              )
              // Try to fetch the specific advance
              try {
                const { data: advanceData } = await this.$axios.get(
                  `/api/money-advances/${this.formData.moneyAdvanceId}`
                )
                if (advanceData && advanceData.success) {
                  console.log('✅ Found individual advance, adding to list')
                  this.availableAdvances.unshift(advanceData.data)
                }
              } catch (error) {
                console.error('❌ Error fetching individual advance:', error)
              }
            } else {
              console.log('✅ Found advance in list:', foundAdvance.id)
            }
          }
        } else {
          this.availableAdvances = []
          console.warn('⚠️ No data returned from money advances API')
        }

        this.filteredAdvances = [...this.availableAdvances]
        console.log(
          '📋 Final available advances:',
          this.availableAdvances.map((a) => ({ id: a.id, status: a.status }))
        )
      } catch (error) {
        console.error('❌ Error loading money advances:', error)
        this.availableAdvances = []
        this.filteredAdvances = []
      } finally {
        this.loadingAdvances = false
      }
    },

    handleMethodChange() {
      // Reset bank account when method changes
      if (this.formData.method !== 'bank_transfer') {
        this.formData.bankAccountId = ''
      }
      // Reset selected invoices when method changes
      if (this.formData.method !== 'deduction') {
        this.formData.selectedInvoices = []
      }
      // Clear validation errors
      this.clearFieldError('bankAccountId')
    },

    updateSelectedInvoicesAmount() {
      // Automatically update amount based on selected invoices
      if (this.formData.method === 'deduction') {
        this.formData.amount = this.selectedInvoicesTotal
      }
    },

    updateSelectedCurrency() {
      // Reset bank account if currency changes and current bank account doesn't match
      if (this.selectedBankAccount && this.selectedCurrency) {
        const bankCurrency = this.selectedBankAccount.currency
        const selectedCurrency =
          this.selectedCurrency.code || this.selectedCurrency.currencyCode

        if (bankCurrency && bankCurrency !== selectedCurrency) {
          this.formData.bankAccountId = ''
        }
      }
    },

    updateSelectedBankAccount() {
      // Any additional logic when bank account changes
    },

    updateSelectedMinistry() {
      // Any additional logic when ministry changes
    },

    clearAdvanceSelection() {
      this.formData.moneyAdvanceId = ''
      this.formData.linkToAdvance = 'false'

      // Reset currency to default when unlinking
      if (this.currencies.length > 0) {
        const defaultCurrency =
          this.currencies.find((c) => (c.code || c.currencyCode) === 'LAK') ||
          this.currencies[0]
        this.formData.currencyId = defaultCurrency.id
        this.formData.exchangeRate = 1 // Reset exchange rate
      }

      // Reset amount
      this.formData.amount = null
    },

    updateSelectedAdvance() {
      if (this.selectedAdvance) {
        this.syncCurrencyFromAdvance()
        this.syncAmountFromAdvance()
      }
    },

    // New method to sync currency from money advance

    // Fix 4: Update syncCurrencyFromAdvance to preserve existing rates
    syncCurrencyFromAdvance() {
      if (!this.selectedAdvance) return

      const advanceCurrency = this.getAdvanceCurrency()
      if (advanceCurrency) {
        this.formData.currencyId = advanceCurrency.id

        // ✅ FIX 5: Better logic for syncing exchange rate
        if (
          this.selectedAdvance.exchangeRate &&
          this.selectedAdvance.exchangeRate !== null
        ) {
          this.formData.exchangeRate = this.selectedAdvance.exchangeRate
          console.log(
            '✅ Synced exchange rate from advance:',
            this.selectedAdvance.exchangeRate
          )
        } else {
          // Only set to 1 if we don't have an existing rate and it's base currency
          if (
            this.isBaseCurrency &&
            (this.formData.exchangeRate === null ||
              this.formData.exchangeRate === undefined)
          ) {
            this.formData.exchangeRate = 1
            console.log('✅ Set default exchange rate for base currency')
          }
          // For non-base currencies, preserve existing rate or leave as is
          console.log(
            '⚠️ No exchange rate in advance, preserving current:',
            this.formData.exchangeRate
          )
        }

        console.log(
          'Auto-selected currency:',
          advanceCurrency.id,
          'from money advance'
        )
      } else {
        console.warn(
          'Could not determine currency from money advance:',
          this.selectedAdvance
        )
      }
    },

    // Fix 5: Add method to debug exchange rate issues
    debugExchangeRate() {
      console.clear()
      console.log('🔍 === EXCHANGE RATE DEBUG ===')
      console.log('Settlement data:', {
        exchangeRate: this.settlement?.exchangeRate,
        currencyId: this.settlement?.currencyId,
        method: this.settlement?.method,
      })
      console.log('Form data:', {
        exchangeRate: this.formData.exchangeRate,
        currencyId: this.formData.currencyId,
      })
      console.log('Computed values:', {
        selectedCurrencyCode: this.selectedCurrencyCode,
        isBaseCurrency: this.isBaseCurrency,
        isEditMode: this.isEditMode,
        isInitializing: this._isInitializing,
      })
      console.log('🔍 === END DEBUG ===')
    },

    // New method to sync amount from money advance
    syncAmountFromAdvance() {
      if (this.selectedAdvance && this.selectedAdvance.amount) {
        this.formData.amount = this.selectedAdvance.amount
        console.log(
          'Auto-filled amount:',
          this.selectedAdvance.amount,
          'from money advance'
        )
      }
    },

    // Helper method to get advance currency
    getAdvanceCurrency() {
      if (!this.selectedAdvance) return null

      // Try different ways to get currency from advance
      if (this.selectedAdvance.currencyId) {
        return this.currencies.find(
          (c) => c.id == this.selectedAdvance.currencyId
        )
      }

      if (this.selectedAdvance.currencyCode) {
        return this.currencies.find(
          (c) =>
            (c.code || c.currencyCode) === this.selectedAdvance.currencyCode
        )
      }

      if (this.selectedAdvance.currency) {
        if (typeof this.selectedAdvance.currency === 'object') {
          return this.currencies.find(
            (c) => c.id == this.selectedAdvance.currency.id
          )
        } else {
          return this.currencies.find(
            (c) => (c.code || c.currencyCode) === this.selectedAdvance.currency
          )
        }
      }

      return null
    },

    browseMoneyAdvances() {
      this.showAdvanceBrowser = true
      this.selectedAdvanceForBrowser = this.selectedAdvance
      // Prevent body scrolling when browser modal is open
      document.body.style.overflow = 'hidden'
    },

    closeAdvanceBrowser() {
      this.showAdvanceBrowser = false
      this.selectedAdvanceForBrowser = null
      this.advanceSearch.query = ''
      this.advanceSearch.status = ''
      this.filteredAdvances = [...this.availableAdvances]
      // Restore body scrolling
      document.body.style.overflow = 'auto'
    },

    handleAdvanceBrowserOverlayClick(event) {
      // Only close if clicking directly on the overlay, not on child elements
      if (event.target === event.currentTarget) {
        this.closeAdvanceBrowser()
      }
    },

    selectAdvanceFromBrowser(advance) {
      this.selectedAdvanceForBrowser = advance
    },

    confirmAdvanceSelection() {
      if (this.selectedAdvanceForBrowser) {
        this.formData.moneyAdvanceId = this.selectedAdvanceForBrowser.id
        this.closeAdvanceBrowser()

        // Sync currency and amount after selection
        this.$nextTick(() => {
          this.syncCurrencyFromAdvance()
          this.syncAmountFromAdvance()
        })
      }
    },

    searchAdvances() {
      this.filterAdvances()
    },

    filterAdvances() {
      let filtered = [...this.availableAdvances]

      // Filter by status
      if (this.advanceSearch.status) {
        filtered = filtered.filter(
          (advance) => advance.status === this.advanceSearch.status
        )
      }

      // Filter by search query
      if (this.advanceSearch.query) {
        const query = this.advanceSearch.query.toLowerCase()
        filtered = filtered.filter(
          (advance) =>
            (advance.purpose &&
              advance.purpose.toLowerCase().includes(query)) ||
            (advance.note && advance.note.toLowerCase().includes(query)) ||
            advance.id.toString().includes(query)
        )
      }

      this.filteredAdvances = filtered
    },

    validateForm() {
      this.errors = {}
      this.formErrors = []

      // Required fields validation
      if (!this.formData.settlementDate) {
        this.errors.settlementDate = 'ກະລຸນາເລືອກວັນທີ'
        this.formErrors.push('Settlement date is required')
      }

      if (!this.formData.method) {
        this.errors.method = 'ກະລຸນາເລືອກວິທີການຊຳລະ'
        this.formErrors.push('Payment method is required')
      }

      if (!this.formData.amount || this.formData.amount <= 0) {
        this.errors.amount = 'ກະລຸນາໃສ່ຈຳນວນເງິນທີ່ຖືກຕ້ອງ'
        this.formErrors.push('Amount is required and must be greater than 0')
      }

      if (!this.formData.currencyId) {
        this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ'
        this.formErrors.push('Currency selection is required')
      }

      // New exchange rate validation
      if (this.formData.exchangeRate && this.formData.exchangeRate <= 0) {
        this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0'
        this.formErrors.push('Exchange rate must be greater than 0')
      }

      if (!this.formData.userId) {
        this.errors.userId = 'ກະລຸນາເລືອກຜູ້ລົງບັນຊີ'
        this.formErrors.push('User selection is required')
      }

      // Conditional validation
      if (
        this.formData.method === 'bank_transfer' &&
        !this.formData.bankAccountId
      ) {
        this.errors.bankAccountId = 'ກະລຸນາເລືອກບັນຊີທະນາຄານ'
        this.formErrors.push('Bank account is required for bank transfer')
      }

      // Special validation for linked advances
      if (this.isLinkedToAdvance && this.selectedAdvance) {
        const advanceCurrency = this.getAdvanceCurrency()
        if (advanceCurrency && this.formData.currencyId != advanceCurrency.id) {
          this.errors.currencyId = 'ສະກຸນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າ'
          this.formErrors.push('Currency must match the selected money advance')
        }
      }

      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters')
      }

      if (this.users.length === 0) {
        this.formErrors.push(
          'No users available. Please contact administrator.'
        )
      }

      if (this.currencies.length === 0) {
        this.formErrors.push(
          'No currencies available. Please contact administrator.'
        )
      }

      return this.formErrors.length === 0
    },

    clearFieldError(fieldName) {
      if (this.errors[fieldName]) {
        this.$delete(this.errors, fieldName)
      }
    },

    async saveSettlement() {
      if (!this.validateForm()) {
        return
      }

      this.loading = true

      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData,
          selectedInvoices:
            this.formData.method === 'deduction'
              ? this.formData.selectedInvoices
              : [],
          // 🆕 FIX: Add missing bookingDate field using settlementDate
          bookingDate: this.formData.settlementDate,
        }

        // Remove empty values and unused fields
        Object.keys(submitData).forEach((key) => {
          if (submitData[key] === '' || submitData[key] === null) {
            delete submitData[key]
          }
        })

        // Remove advance-related fields if not linking
        if (submitData.linkToAdvance !== 'true') {
          delete submitData.moneyAdvanceId
        }
        delete submitData.linkToAdvance

        console.log('📤 Submitting settlement data:', submitData)

        // Emit save event to parent
        this.$emit('save', submitData)
      } catch (error) {
        console.error('Form submission error:', error)
        this.formErrors.push(
          'An error occurred while saving. Please try again.'
        )
      } finally {
        this.loading = false
      }
    },

    closeDialog() {
      this.$emit('close')
    },

    handleOverlayClick() {
      this.closeDialog()
    },

    // Utility methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'LAK',
      }).format(amount || 0)
    },

    formatDate(date) {
      if (!date) return 'ບໍ່ລະບຸ'
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    formatAdvanceOption(advance) {
      return `#${advance.id} - ${this.formatCurrency(advance.amount)} - ${
        advance.purpose || 'No purpose'
      }`
    },

    formatStatus(status) {
      const statusLabels = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        settled: 'ສຳເລັດ',
        cancelled: 'ຍົກເລີກ',
      }
      return statusLabels[status] || status
    },

    // Debug method (remove in production)
    debugCurrencySync() {
      console.log('--- Currency Sync Debug ---')
      console.log('Is linked to advance:', this.isLinkedToAdvance)
      console.log('Selected advance:', this.selectedAdvance)
      console.log('Current currency ID:', this.formData.currencyId)
      console.log(
        'Available currencies:',
        this.currencies.map((c) => ({
          id: c.id,
          code: c.code || c.currencyCode,
          name: c.name || c.currencyName,
        }))
      )

      if (this.selectedAdvance) {
        console.log('Advance currency info:', {
          currencyId: this.selectedAdvance.currencyId,
          currencyCode: this.selectedAdvance.currencyCode,
          currency: this.selectedAdvance.currency,
        })

        const advanceCurrency = this.getAdvanceCurrency()
        console.log('Resolved advance currency:', advanceCurrency)
      }
    },

    // 🐛 DEBUG: Form validation debug method
    debugFormValidation() {
      console.clear()
      console.log('🔍 === FORM VALIDATION DEBUG ===')

      // Call isFormValid to see the debug output
      const isValid = this.isFormValid

      // Show what will be submitted
      const submitData = {
        ...this.formData,
        bookingDate: this.formData.settlementDate, // Show the bookingDate that will be added
        selectedInvoices:
          this.formData.method === 'deduction'
            ? this.formData.selectedInvoices
            : [],
      }

      console.log(
        '📋 Current Form Data:',
        JSON.stringify(this.formData, null, 2)
      )
      console.log(
        '📤 Data That Will Be Submitted:',
        JSON.stringify(submitData, null, 2)
      )
      console.log(
        '👥 Available Users:',
        this.users.length,
        this.users.map((u) => ({ id: u.id, name: u.cus_name || u.name }))
      )
      console.log(
        '💱 Available Currencies:',
        this.currencies.length,
        this.currencies.map((c) => ({
          id: c.id,
          code: c.code || c.currencyCode,
        }))
      )
      console.log('🏦 Available Bank Accounts:', this.bankAccounts.length)
      console.log('🏛️ Available Ministries:', this.ministries.length)

      console.log('✅ Form Valid:', isValid)
      console.log('🔄 Loading:', this.loading)
      console.log('🚫 Button Disabled:', this.loading || !isValid)

      // Check specific issues
      if (!this.formData.userId) {
        console.warn('⚠️ ISSUE: No user selected')
      }
      if (!this.formData.method) {
        console.warn('⚠️ ISSUE: No payment method selected')
      }
      if (!this.formData.amount || parseFloat(this.formData.amount) <= 0) {
        console.warn('⚠️ ISSUE: Invalid amount')
      }
      if (!this.formData.currencyId) {
        console.warn('⚠️ ISSUE: No currency selected')
      }
      if (!this.formData.settlementDate) {
        console.warn('⚠️ ISSUE: No settlement date')
      }
      if (this.formData.exchangeRate && this.formData.exchangeRate <= 0) {
        console.warn('⚠️ ISSUE: Invalid exchange rate')
      }

      console.log('🔍 === END DEBUG ===')

      // Show alert with summary
      alert(
        `Form Valid: ${isValid}\nButton Disabled: ${
          this.loading || !isValid
        }\n\nCheck console for detailed debug info.\n\n✅ bookingDate will be set to: ${
          this.formData.settlementDate
        }\n💱 Exchange Rate: ${this.formData.exchangeRate}`
      )
    },
  },
}
</script>

<style scoped>
/* Enhanced Modal Styles - Following the pattern from MoneyAdvanceDialog */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.enhanced-dialog {
  background: white;
  border-radius: 12px;
  max-width: 800px;
  width: 95%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease-out;
}

.advance-browser-dialog {
  max-width: 900px;
  max-height: 80vh;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
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
  font-size: 20px;
  opacity: 0.9;
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: white;
  opacity: 0.8;
  transition: opacity 0.2s;
  padding: 8px;
  border-radius: 4px;
}

.close-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

.modal-body {
  padding: 24px;
  max-height: 60vh;
  overflow-y: auto;
}

.form-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #666;
}

.spinner-small {
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 0;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.form-label.required::after {
  content: '*';
  color: #e74c3c;
  margin-left: 4px;
}

.form-label i {
  color: #6b7280;
  font-size: 12px;
}

/* Currency note style */
.currency-note {
  font-size: 11px;
  color: #6b7280;
  font-weight: normal;
  font-style: italic;
}

/* Exchange rate note style */
.exchange-rate-note {
  font-size: 11px;
  color: #059669;
  font-weight: normal;
  font-style: italic;
}

.form-control {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s ease;
  background: #fafafa;
  box-sizing: border-box;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-control:disabled {
  background-color: #f3f4f6;
  border-color: #d1d5db;
  color: #6b7280;
  cursor: not-allowed;
}

.form-control.is-invalid {
  border-color: #e74c3c;
}

.invalid-feedback {
  display: block;
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
}

.input-group {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
}

.input-group .form-control {
  border-radius: 0;
  border-right: none;
}

.input-group-append {
  display: flex;
}

.input-group-text {
  background: #f8f9fa;
  border: 2px solid #e5e7eb;
  border-left: none;
  padding: 12px 16px;
  font-weight: 600;
  color: #6b7280;
  font-size: 14px;
}

.custom-select-wrapper {
  position: relative;
}

.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 40px;
}

.select-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #6b7280;
}

.custom-select:disabled + .select-icon {
  color: #9ca3af;
}

.custom-select-wrapper:has(.form-control:disabled) {
  opacity: 0.7;
}

/* Link to Advance Options */
.link-advance-options {
  display: flex;
  gap: 20px;
  margin-top: 8px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
}

.radio-option input[type='radio'] {
  margin: 0;
}

.radio-label {
  font-weight: 500;
}

/* Money Advance Link Section Background */
.form-group.full-width:has([v-if*="formData.linkToAdvance === 'true'"]) {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin: 16px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

/* Alternative approach - target the specific money advance section */
.money-advance-section {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin: 16px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: slideInUp 0.4s ease-out;
  position: relative;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.money-advance-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6);
  border-radius: 12px 12px 0 0;
}

.money-advance-section:hover {
  border-color: #cbd5e1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.money-advance-section .form-label {
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 16px;
  font-size: 15px;
}

.money-advance-section .form-label i {
  color: #3b82f6;
  font-size: 14px;
  margin-right: 10px;
}

/* Enhanced button styling within money advance section */
.money-advance-section .btn-outline-primary {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 2px solid #3b82f6;
  color: #1e40af;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);
  transition: all 0.2s ease;
}

.money-advance-section .btn-outline-primary:hover {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
}

.money-advance-section .btn-outline-primary:disabled {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #94a3b8;
  transform: none;
  box-shadow: none;
}

/* Advance Selection */
.advance-selection-container {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 16px;
}

.advance-selection-container .custom-select-wrapper {
  flex: 1;
}

/* Enhanced select styling within money advance section */
.money-advance-section .custom-select {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 2px solid #cbd5e1;
  color: #1e293b;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.money-advance-section .custom-select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  background: white;
}

.money-advance-section .select-icon {
  color: #3b82f6;
}

/* Selected Advance Info */
.money-advance-section .advance-info {
  margin-top: 16px;
  padding: 16px;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-radius: 10px;
  border: 1px solid #bfdbfe;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);
}

.money-advance-section .advance-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.money-advance-section .advance-detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #1e40af;
  background: rgba(255, 255, 255, 0.7);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid rgba(191, 219, 254, 0.5);
}

.money-advance-section .advance-detail-item i {
  color: #3b82f6;
  width: 16px;
  flex-shrink: 0;
  font-size: 12px;
}

.money-advance-section .advance-label {
  font-weight: 600;
  min-width: 60px;
  color: #1e40af;
}

.money-advance-section .advance-value {
  font-weight: 700;
  color: #1e293b;
}

.money-advance-section .advance-value.amount {
  color: #059669;
  font-size: 15px;
  font-weight: 800;
}

/* Warning message styling within money advance section */
.money-advance-section .field-hint.warning {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 1px solid #f59e0b;
  padding: 12px 16px;
  border-radius: 8px;
  color: #92400e;
  font-weight: 600;
  margin-top: 16px;
}

.money-advance-section .field-hint.warning i {
  color: #f59e0b;
}

/* Selected Advance Info */
.advance-info {
  margin-top: 12px;
  padding: 12px;
  background: #f0f9ff;
  border-radius: 8px;
  border: 1px solid #bae6fd;
}

.advance-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
}

.advance-detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #075985;
}

.advance-detail-item i {
  color: #0ea5e9;
  width: 14px;
  flex-shrink: 0;
}

.advance-label {
  font-weight: 500;
  min-width: 60px;
}

.advance-value {
  font-weight: 600;
}

.advance-value.amount {
  color: #059669;
  font-size: 14px;
}

/* Status Badges */
.status-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-badge.pending {
  background: #fef3c7;
  color: #92400e;
}

.status-badge.approved {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.settled {
  background: #dbeafe;
  color: #1e40af;
}

/* Ministry Info */
.ministry-info {
  margin-top: 12px;
  padding: 12px;
  background: #f0f9ff;
  border-radius: 8px;
  border: 1px solid #bae6fd;
}

.ministry-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.ministry-detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #075985;
}

.ministry-detail-item i {
  color: #0ea5e9;
  width: 14px;
  flex-shrink: 0;
}

.ministry-name {
  font-weight: 600;
}

.ministry-code {
  font-family: monospace;
  background: #e0f2fe;
  padding: 2px 6px;
  border-radius: 4px;
}

/* Bank Account Info */
.bank-account-info {
  margin-top: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.bank-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.bank-detail-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #6b7280;
}

.bank-detail-item i {
  color: #667eea;
  width: 12px;
}

.bank-detail-item .branch {
  font-style: italic;
  color: #9ca3af;
}

/* Invoice List */
.invoice-list {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 8px;
}

.invoice-item {
  margin-bottom: 8px;
}

.invoice-item:last-child {
  margin-bottom: 0;
}

.invoice-checkbox {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.invoice-checkbox:hover {
  background-color: #f8f9fa;
}

.invoice-checkbox input[type='checkbox'] {
  margin-right: 12px;
  margin-top: 4px;
}

.invoice-details {
  flex: 1;
}

.invoice-number {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.invoice-vendor {
  color: #666;
  font-size: 13px;
  margin-top: 2px;
}

.invoice-amount {
  color: #28a745;
  font-weight: 600;
  font-size: 13px;
  margin-top: 2px;
}

.invoice-due {
  color: #666;
  font-size: 12px;
  margin-top: 2px;
}

.selected-summary {
  margin-top: 12px;
  padding: 8px 12px;
  background-color: #e7f3ff;
  border-radius: 4px;
  font-weight: 600;
  color: #0066cc;
  font-size: 14px;
}

/* Field Hints */
.field-hint {
  margin-top: 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: space-between;
}

.field-hint.error {
  color: #e74c3c;
}

.field-hint.warning {
  color: #f39c12;
}

.field-hint.info {
  color: #3b82f6;
}

.text-counter {
  color: #9ca3af;
  font-size: 11px;
  margin-left: auto;
}

/* Form Errors */
.form-errors {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
}

.form-errors h6 {
  margin: 0 0 10px 0;
  color: #dc2626;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.form-errors ul {
  margin: 0;
  padding-left: 20px;
  color: #dc2626;
  font-size: 13px;
}

/* Modal Footer */
.enhanced-footer {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.modal-footer {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* Buttons */
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  font-size: 14px;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-outline-primary {
  background: transparent;
  border: 2px solid #667eea;
  color: #667eea;
}

.btn-outline-primary:hover {
  background: #667eea;
  color: white;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 12px;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.fa-spin {
  animation: spin 1s linear infinite;
}

/* Money Advance Browser Modal - Higher z-index */
.browser-overlay {
  z-index: 1100 !important; /* Higher than main modal */
}

.advance-browser-dialog {
  max-width: 900px;
  max-height: 80vh;
  z-index: 1101 !important;
}

/* Enhanced Advance Browser Modal Body */
.advance-browser-dialog .modal-body {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 0 0 12px 12px;
  padding: 24px;
  position: relative;
}

.advance-browser-dialog .modal-body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 80%,
      rgba(120, 119, 198, 0.03) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(255, 119, 198, 0.03) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 40%,
      rgba(120, 200, 255, 0.03) 0%,
      transparent 50%
    );
  pointer-events: none;
  border-radius: 0 0 12px 12px;
}

/* Advance Browser Modal Header Enhancement */
.advance-browser-dialog .modal-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.advance-browser-dialog .modal-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
  pointer-events: none;
}

/* Advance Browser Styles */
.advance-filters {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
}

.advance-filters::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6);
  border-radius: 12px 12px 0 0;
}

.filter-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: center;
}

.filter-group {
  margin: 0;
}

.filter-group label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
}

/* Enhanced form controls in filters */
.advance-filters .form-control {
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
  border: 2px solid #d1d5db;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  color: #374151;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.advance-filters .form-control:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  background: white;
  outline: none;
}

.advance-filters .form-control::placeholder {
  color: #9ca3af;
  font-style: italic;
}

.advances-list {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: relative;
}

.advances-list::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
  border-radius: 12px 12px 0 0;
  z-index: 1;
}

.loading-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  color: #6b7280;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 10px;
  margin: 16px;
}

.loading-state {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  color: #1e40af;
}

.empty-state {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  color: #92400e;
}

.empty-state i {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d97706;
}

.loading-state p,
.empty-state p {
  font-weight: 600;
  font-size: 16px;
  margin: 8px 0 0 0;
}

.advance-items {
  display: flex;
  flex-direction: column;
  padding: 8px;
}

.advance-item {
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  margin-bottom: 12px;
  padding: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.advance-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #e5e7eb 0%, #d1d5db 100%);
  transition: all 0.3s ease;
}

.advance-item:hover {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-color: #60a5fa;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(96, 165, 250, 0.15);
}

.advance-item:hover::before {
  background: linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%);
  width: 6px;
}

.advance-item.selected {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-color: #3b82f6;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.2);
}

.advance-item.selected::before {
  background: linear-gradient(180deg, #1d4ed8 0%, #1e40af 100%);
  width: 6px;
}

.advance-item:last-child {
  margin-bottom: 8px;
}

.advance-item-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.advance-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.advance-id {
  font-weight: 700;
  color: #1e293b;
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  border: 1px solid #cbd5e1;
}

.advance-item.selected .advance-id {
  background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
  color: white;
  border-color: #1e40af;
}

.advance-item-body {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  background: rgba(255, 255, 255, 0.7);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(229, 231, 235, 0.8);
}

.advance-item.selected .advance-item-body {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(59, 130, 246, 0.3);
}

.advance-amount {
  font-weight: 800;
  color: #059669;
  font-size: 16px;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #34d399;
  text-align: center;
}

.advance-date {
  color: #6b7280;
  font-weight: 600;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 13px;
  border: 1px solid #d1d5db;
}

.advance-purpose {
  color: #374151;
  font-style: italic;
  font-weight: 500;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #f59e0b;
  font-size: 13px;
}

.advance-maker {
  color: #6b7280;
  font-weight: 600;
  background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 13px;
  border: 1px solid #a78bfa;
}

/* Enhanced status badges in browser */
.advance-item .status-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 2px solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.advance-item .status-badge.pending {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  color: #92400e;
  border-color: #f59e0b;
}

.advance-item .status-badge.approved {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  color: #065f46;
  border-color: #10b981;
}

/* Custom scrollbar for advances list */
.advances-list::-webkit-scrollbar {
  width: 8px;
}

.advances-list::-webkit-scrollbar-track {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border-radius: 10px;
}

.advances-list::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: content-box;
}

.advances-list::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #64748b 0%, #475569 100%);
  background-clip: content-box;
}

/* Loading spinner enhancement */
.loading-state .spinner-small {
  width: 32px;
  height: 32px;
  border: 3px solid #dbeafe;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px auto;
}

/* Filter labels (optional enhancement) */
.advance-filters .filter-group:first-child::before {
  content: '🔍 ຄົ້ນຫາ';
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 6px;
}

.advance-filters .filter-group:last-child::before {
  content: '📊 ສະຖານະ';
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 6px;
}

/* Enhanced advance browser footer */
.advance-browser-dialog .modal-footer {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-top: 2px solid #e2e8f0;
  padding: 20px 24px;
  border-radius: 0 0 12px 12px;
}

.advance-browser-dialog .modal-footer .btn {
  padding: 12px 24px;
  font-weight: 600;
  border-radius: 8px;
  font-size: 14px;
  min-width: 120px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.advance-browser-dialog .modal-footer .btn-secondary {
  background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
  border: 2px solid #6b7280;
  color: white;
}

.advance-browser-dialog .modal-footer .btn-secondary:hover {
  background: linear-gradient(135deg, #4b5563 0%, #374151 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(107, 114, 128, 0.3);
}

.advance-browser-dialog .modal-footer .btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border: 2px solid #3b82f6;
  color: white;
}

.advance-browser-dialog .modal-footer .btn-primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.advance-browser-dialog .modal-footer .btn-primary:disabled {
  background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
  border-color: #9ca3af;
  transform: none;
  box-shadow: none;
  cursor: not-allowed;
}

/* Animation for advance browser modal */
.advance-browser-dialog {
  animation: modalSlideIn 0.4s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Staggered animation for advance items */
.advance-item {
  animation: itemFadeIn 0.3s ease-out forwards;
  opacity: 0;
}

.advance-item:nth-child(1) {
  animation-delay: 0.1s;
}
.advance-item:nth-child(2) {
  animation-delay: 0.15s;
}
.advance-item:nth-child(3) {
  animation-delay: 0.2s;
}
.advance-item:nth-child(4) {
  animation-delay: 0.25s;
}
.advance-item:nth-child(5) {
  animation-delay: 0.3s;
}
.advance-item:nth-child(n + 6) {
  animation-delay: 0.35s;
}

@keyframes itemFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse animation for selected item */
.advance-item.selected {
  animation: selectedPulse 2s ease-in-out infinite alternate;
}

@keyframes selectedPulse {
  from {
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.2);
  }
  to {
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .enhanced-dialog {
    width: 98%;
    margin: 10px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .bank-details {
    grid-template-columns: 1fr;
  }

  .ministry-details {
    grid-template-columns: 1fr;
  }

  .advance-details {
    grid-template-columns: 1fr;
  }

  .modal-header {
    padding: 16px;
  }

  .modal-body {
    padding: 16px;
  }

  .enhanced-footer,
  .modal-footer {
    padding: 16px;
    flex-direction: column-reverse;
  }

  .enhanced-footer .btn,
  .modal-footer .btn {
    width: 100%;
    justify-content: center;
  }

  .link-advance-options {
    flex-direction: column;
    gap: 12px;
  }

  .advance-selection-container {
    flex-direction: column;
  }

  .filter-row {
    grid-template-columns: 1fr;
  }

  .advance-item-body {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  /* Mobile adjustments for advance browser */
  .advance-filters {
    padding: 16px;
  }

  .advance-filters::before {
    height: 3px;
  }

  .filter-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .advance-item {
    padding: 16px 12px;
    margin-bottom: 8px;
  }

  .advance-item-body {
    grid-template-columns: 1fr;
    padding: 12px;
  }

  .advance-amount {
    font-size: 15px;
  }

  .advance-id {
    font-size: 13px;
    padding: 4px 8px;
  }

  .loading-state,
  .empty-state {
    padding: 40px 20px;
  }

  .advances-list {
    max-height: 300px;
  }
}
</style>