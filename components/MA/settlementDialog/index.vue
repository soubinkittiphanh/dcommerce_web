<template>
  <div>
    <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
      <div class="modal-dialog enhanced-dialog" @click.stop>
        <div class="modal-header">
          <div class="modal-title-section">
            <i class="fas fa-money-bill-wave modal-icon"></i>
            <h5 class="modal-title">
              {{ isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ລົງລາຍຮັບ ການຊຳລະ' }}
            </h5>
          </div>

          <div class="modal-header-right">
            <span class="voucher-number">
              ເລກທີ:
              {{ formData.id ? formatVoucherNumber(formData.id) : '000000' }}
            </span>
            <button @click="closeDialog" class="close-btn">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>

        <form @submit.prevent="saveSettlement">
          <div class="modal-body">
            <!-- Loading state for form data -->
            <div v-if="loading" class="form-loading">
              <div class="spinner-small"></div>
              <p>Loading form data...</p>
            </div>

            <div v-else class="form-grid compact">
              <!-- Row 1: Settlement Date (ວັນທີຊຳລະ - as shown in footer) -->
              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-calendar"></i>
                  ວັນທີລົງຊຳລະ
                </label>
                <input
                  v-model="formData.settlementDate"
                  type="date"
                  class="form-control compact"
                  :class="{ 'is-invalid': errors.settlementDate }"
                  :max="today"
                  required
                />
                <div v-if="errors.settlementDate" class="invalid-feedback">
                  {{ errors.settlementDate }}
                </div>
              </div>

              <!-- Row 2: Payment Method (ວິທີການຊຳລະ - early in voucher) -->
              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-credit-card"></i>
                  ວິທີການຊຳລະ
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="formData.method"
                    class="form-control custom-select compact"
                    :class="{ 'is-invalid': errors.method }"
                    required
                    @change="handleMethodChange"
                  >
                    <option value="">ເລືອກວິທີການຊຳລະ</option>
                    <option value="cash">ເງິນສົດ (Cash)</option>
                    <option value="cheque">ເຊັກ (Cheque)</option>
                    <option value="bank_transfer">
                      ໂອນທະນາຄານ (Bank Transfer)
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

              <!-- Row 3: External Reference (ອີງຕາມ - appears early in voucher) -->
              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-hashtag"></i>
                  ອີງຕາມ
                </label>
                <input
                  v-model="formData.externalRef"
                  type="text"
                  class="form-control compact"
                  :class="{ 'is-invalid': errors.externalRef }"
                  placeholder="ອີງຕາມ ການຕົກລົງ ເຫັນດີ..."
                  maxlength="50"
                />
                <div v-if="errors.externalRef" class="invalid-feedback">
                  {{ errors.externalRef }}
                </div>
              </div>

              <!-- Row 4: External Reference Number (appears in header) -->
              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-hashtag"></i>
                  ເລກອ້າງອິງພາຍນອກ
                </label>
                <input
                  v-model="formData.externalRefNo"
                  type="text"
                  class="form-control compact"
                  :class="{ 'is-invalid': errors.externalRefNo }"
                  placeholder="REF-001, TXN-123..."
                  maxlength="50"
                />
                <div v-if="errors.externalRefNo" class="invalid-feedback">
                  {{ errors.externalRefNo }}
                </div>
              </div>

              <!-- Row 5: Cheque Number (conditional - ເລກເຊັກ) -->
              <div class="form-group" v-if="formData.method === 'cheque'">
                <label class="form-label required">
                  <i class="fas fa-money-check"></i>
                  ເລກເຊັກ
                </label>
                <input
                  v-model="formData.chequeNo"
                  type="text"
                  class="form-control compact"
                  :class="{ 'is-invalid': errors.chequeNo }"
                  placeholder="ໃສ່ເລກເຊັກ..."
                  maxlength="20"
                  :required="formData.method === 'cheque'"
                />
                <div v-if="errors.chequeNo" class="invalid-feedback">
                  {{ errors.chequeNo }}
                </div>
              </div>

              <!-- Row 6: Currency (ສະກຸນເງິນ - appears before amount in voucher) -->
              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-coins"></i>
                  ສະກຸນເງິນ
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="formData.currencyId"
                    class="form-control custom-select compact"
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
              </div>

              <!-- Row 7: Amount (ຈຳນວນເງິນ) -->
              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-dollar-sign"></i>
                  ຈຳນວນເງິນ
                </label>
                <div class="input-group compact">
                  <input
                    v-model.number="formData.amount"
                    type="number"
                    step="0.01"
                    min="0"
                    class="form-control compact"
                    :class="{ 'is-invalid': errors.amount }"
                    placeholder="0.00"
                    required
                  />
                  <div class="input-group-append">
                    <span class="input-group-text compact">
                      {{ selectedCurrencyCode }}
                    </span>
                  </div>
                </div>
                <div v-if="errors.amount" class="invalid-feedback">
                  {{ errors.amount }}
                </div>
              </div>

              <!-- Row 8: From Person Name (ຈາກທ່ານ - appears after amount) -->
              <div
                class="form-group"
                v-if="
                  formData.method === 'cash' || formData.method === 'cheque'
                "
              >
                <label
                  class="form-label"
                  :class="{
                    required:
                      formData.method === 'cash' ||
                      formData.method === 'cheque',
                  }"
                >
                  <i class="fas fa-user-circle"></i>
                  ຈາກທ່ານ (ຜູ້ຈ່າຍ)
                </label>
                <input
                  v-model="formData.fromPersonName"
                  type="text"
                  class="form-control compact"
                  :class="{ 'is-invalid': errors.fromPersonName }"
                  placeholder="ຊື່ຜູ້ຈ່າຍເງິນ..."
                  maxlength="100"
                  :required="
                    formData.method === 'cash' || formData.method === 'cheque'
                  "
                />
                <div v-if="errors.fromPersonName" class="invalid-feedback">
                  {{ errors.fromPersonName }}
                </div>
              </div>

              <!-- Row 9: Ministry (ສັງກັດຢູ່ - appears after from person) -->
              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-building"></i>
                  ສັງກັດຢູ່ (ກະຊວງ)
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="formData.ministryId"
                    class="form-control custom-select compact"
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
              </div>

              <!-- Row 10: Bank Account (conditional - ບັນຊີທະນາຄານ) -->
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
                    class="form-control custom-select compact"
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
                      {{ account.bankName }} - {{ account.accountNumber }}
                    </option>
                  </select>
                  <div class="select-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div v-if="errors.bankAccountId" class="invalid-feedback">
                  {{ errors.bankAccountId }}
                </div>
              </div>

              <!-- Row 11: Exchange Rate (ອັດຕາແລກປ່ຽນ - when not base currency) -->
              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-exchange-alt"></i>
                  ອັດຕາແລກປ່ຽນ
                </label>
                <div class="input-group compact">
                  <input
                    v-model.number="formData.exchangeRate"
                    type="number"
                    step="0.0001"
                    min="0"
                    class="form-control compact"
                    :class="{ 'is-invalid': errors.exchangeRate }"
                    placeholder="1.0000"
                    @input="calculateEquivalentAmount"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text compact">
                      <i class="fas fa-calculator"></i>
                    </span>
                  </div>
                </div>
                <div v-if="errors.exchangeRate" class="invalid-feedback">
                  {{ errors.exchangeRate }}
                </div>
              </div>

              <!-- Row 12: Chart Account (ບັນຊີລວມ - appears in footer) -->
              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-chart-line"></i>
                  ບັນຊີລວມ
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="formData.chartAccountId"
                    class="form-control custom-select compact"
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
              </div>

              <!-- Row 13: User/Proceeder (ຜູ້ລົງບັນຊີ - ຜູ້ຮັບຄັງເງິນສົດ) -->
              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-user"></i>
                  ຜູ້ລົງບັນຊີ (ຜູ້ຮັບ)
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="formData.userId"
                    class="form-control custom-select compact"
                    :class="{ 'is-invalid': errors.userId }"
                    required
                    disabled
                  >
                    <option value="">ເລືອກຜູ້ລົງບັນຊີ</option>
                    <option
                      v-for="user in users"
                      :key="user.id"
                      :value="user.id"
                    >
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
              </div>

              <!-- Row 14: Money Advance Link (ອ້າງອິງລາຍຈ່າຍລ່ວງໜ້າ) -->
              <div class="form-group full-width compact-advance">
                <div class="advance-toggle">
                  <label class="form-label">
                    <i class="fas fa-link"></i>
                    ອ້າງອິງລາຍຈ່າຍລ່ວງໜ້າ
                  </label>
                  <div class="link-advance-options compact">
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
                      <span class="radio-label">ເຊື່ອມຕໍ່</span>
                    </label>
                  </div>
                </div>

                <div
                  v-if="formData.linkToAdvance === 'true'"
                  class="advance-selection compact"
                >
                  <div class="advance-selection-container compact">
                    <div class="custom-select-wrapper flex-1">
                      <select
                        v-model="formData.moneyAdvanceId"
                        class="form-control custom-select compact"
                        @change="updateSelectedAdvance"
                      >
                        <option value="">ເລືອກລາຍຈ່າຍລ່ວງໜ້າ</option>
                        <option
                          v-for="advance in availableAdvances"
                          :key="advance.id"
                          :value="advance.id"
                        >
                          #{{ advance.id }} -
                          #{{ advance.receiveName }} -
                          #{{ advance.ministry?.ministryName || '' }} -
                          {{
                            formatCurrency(
                              advance.amount,
                              advance.currency.code
                            )
                          }}
                        </option>
                      </select>
                      <div class="select-icon">
                        <i class="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm compact"
                      @click.stop="browseMoneyAdvances"
                      :disabled="loadingAdvances"
                    >
                      <i
                        v-if="loadingAdvances"
                        class="fas fa-spinner fa-spin"
                      ></i>
                      <i v-else class="fas fa-search"></i>
                    </button>
                  </div>

                  <!-- Compact Selected Advance Info -->
                  <div v-if="selectedAdvance" class="advance-info compact">
                    <div class="advance-summary">
                      <span class="advance-id">#{{ selectedAdvance.id }}</span>
                      <span class="advance-amount">{{
                        formatCurrency(
                          selectedAdvance.amount,
                          selectedAdvance.currency.code
                        )
                      }}</span>
                      <span class="advance-purpose">{{
                        selectedAdvance.purpose || 'No purpose'
                      }}</span>
                      <span :class="['status-badge', selectedAdvance.status]">
                        {{ formatStatus(selectedAdvance.status) }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Row 15: Notes/Content (ເນື້ອໃນລາຍຮັບ - appears at end of voucher) -->
              <div class="form-group full-width">
                <label class="form-label">
                  <i class="fas fa-sticky-note"></i>
                  ເນື້ອໃນລາຍຮັບ (ໝາຍເຫດ)
                </label>
                <textarea
                  v-model="formData.notes"
                  class="form-control compact"
                  rows="3"
                  placeholder="ເນື້ອໃນລາຍຮັບ / ລາຍລະອຽດເພີ່ມເຕີມ..."
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
            <div v-if="formErrors.length > 0" class="form-errors compact">
              <h6>
                <i class="fas fa-exclamation-circle"></i>
                ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດ:
              </h6>
              <ul>
                <li v-for="error in formErrors" :key="error">{{ error }}</li>
              </ul>
            </div>
          </div>

          <div class="modal-footer enhanced-footer compact">
            <button
              type="button"
              @click="closeDialog"
              class="btn btn-secondary compact"
              :disabled="loading"
            >
              <i class="fas fa-times"></i>
              ຍົກເລີກ
            </button>
            <button
              type="submit"
              class="btn btn-primary compact"
              :disabled="loading || !isFormValid"
            >
              <i v-if="loading" class="fas fa-spinner fa-spin"></i>
              <i
                v-else
                class="fas"
                :class="isEditMode ? 'fa-save' : 'fa-plus'"
              ></i>
              {{
                loading ? 'ກຳລັງບັນທຶກ...' : isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ'
              }}
            </button>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click.prevent="printSettlement"
              title="Print"
            >
              <i class="fas fa-print"></i>
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
            <div class="advance-filters compact">
              <div class="filter-row compact">
                <div class="filter-group">
                  <input
                    v-model="advanceSearch.query"
                    type="text"
                    class="form-control compact"
                    placeholder="ຄົ້ນຫາຕາມຈຸດປະສົງ, ໝາຍເຫດ..."
                    @input="searchAdvances"
                  />
                </div>
                <div class="filter-group">
                  <select
                    v-model="advanceSearch.status"
                    class="form-control compact"
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
            <div class="advances-list compact">
              <div v-if="loadingAdvances" class="loading-state">
                <div class="spinner-small"></div>
                <p>ກຳລັງໂຫຼດ...</p>
              </div>

              <div
                v-else-if="filteredAdvances.length === 0"
                class="empty-state"
              >
                <i class="fas fa-inbox"></i>
                <p>ບໍ່ພົບລາຍຈ່າຍລ່ວງໜ້າ</p>
              </div>

              <div v-else class="advance-items compact">
                <div
                  v-for="advance in filteredAdvances"
                  :key="advance.id"
                  class="advance-item compact"
                  :class="{
                    selected: selectedAdvanceForBrowser?.id === advance.id,
                  }"
                  @click.stop="selectAdvanceFromBrowser(advance)"
                >
                  <div class="advance-item-content compact">
                    <div class="advance-item-header compact">
                      <span class="advance-id">#{{ advance.id }}</span>
                      <span :class="['status-badge', advance.status]">
                        {{ formatStatus(advance.status) }}
                      </span>
                    </div>
                    <div class="advance-item-body compact">
                      <div class="advance-amount">
                        {{
                          formatCurrency(advance.amount, advance.currency.code)
                        }}
                      </div>
                      <div class="advance-date">
                        {{ formatDate(advance.bookingDate) }}
                      </div>
                      <div v-if="advance.purpose" class="advance-purpose">
                        {{ advance.purpose }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer compact">
            <button
              type="button"
              @click.stop="closeAdvanceBrowser"
              class="btn btn-secondary compact"
            >
              <i class="fas fa-times"></i>
              ຍົກເລີກ
            </button>
            <button
              type="button"
              @click.stop="confirmAdvanceSelection"
              class="btn btn-primary compact"
              :disabled="!selectedAdvanceForBrowser"
            >
              <i class="fas fa-check"></i>
              ເລືອກ
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Voucher Print Component - MOVED OUTSIDE main modal -->
    <!-- Voucher Print Component -->
    <VoucherPrintComponent
      v-if="showPrintVoucher && settlementDetail"
      :key="settlementDetail.id"
      :voucher-data="settlementDetail"
      @close="closePrintVoucher"
    />
  </div>
</template>

<script>
import VoucherPrintComponent from '~/components/MA/settlementVoucher'

export default {
  name: 'SettlementDialog',
  components: {
    VoucherPrintComponent,
  },
  props: {
    paymentMethod: {
      type: String,
      default: 'cash',
    },
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
      showPrintVoucher: false,
      settlementDetail: null,
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
        exchangeRate: 1,
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: '',
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: '',
        // NEW FIELDS ADDED
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: '',
      },
      errors: {},
      formErrors: [],
    }
  },

  computed: {
    isEditMode() {
      return this.settlement && this.settlement.id
    },

    isLinkedToAdvance() {
      return (
        this.formData.linkToAdvance === 'true' && this.formData.moneyAdvanceId
      )
    },

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
      const validations = {
        hasAmount: !!(
          this.formData.amount && parseFloat(this.formData.amount) > 0
        ),
        hasCurrency: !!this.formData.currencyId,
        hasUser: !!this.formData.userId,
        hasSettlementDate: !!this.formData.settlementDate,
        hasMethod: !!this.formData.method,
        hasUsers: this.users.length > 0,
        hasCurrencies: this.currencies.length > 0,
        bankAccountValid:
          this.formData.method !== 'bank_transfer' ||
          !!this.formData.bankAccountId,
        exchangeRateValid:
          !this.formData.exchangeRate || this.formData.exchangeRate > 0,
        // NEW VALIDATIONS
        chequeNoValid:
          this.formData.method !== 'cheque' || !!this.formData.chequeNo,
        fromPersonNameValid:
          (this.formData.method !== 'cash' &&
            this.formData.method !== 'cheque') ||
          !!this.formData.fromPersonName,
      }

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
    'formData.moneyAdvanceId'(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$nextTick(() => {
          this.syncCurrencyFromAdvance()
          this.syncAmountFromAdvance()
        })
      }
    },
    'formData.linkToAdvance'(newVal, oldVal) {
      if (newVal === 'false' && oldVal === 'true') {
        this.clearAdvanceSelection()
      }
    },
    availableAdvances: {
      handler(newAdvances) {
        if (
          newAdvances.length > 0 &&
          this.formData.moneyAdvanceId &&
          this.formData.linkToAdvance === 'true'
        ) {
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
    document.body.style.overflow = 'auto'
  },

  methods: {
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0')
    },
    showToast(message, type = 'info') {
      if (this.$toast) {
        this.$toast[type](message)
      } else if (this.$notify) {
        this.$notify({
          title: type === 'error' ? 'Error' : 'Success',
          message: message,
          type: type === 'error' ? 'error' : 'success',
        })
      } else {
        alert(`${type.toUpperCase()}: ${message}`)
      }
    },
    async fetchSettlementByid() {
      if (!this.formData.id)
        return this.showToast('ກະລຸນາບັນທຶກຂໍ້ມູນກ່ອນ', 'error')
      this.loading = true

      try {
        const { data } = await this.$axios.get(
          `/api/settlements/${this.formData.id}`
        )
        this.settlementDetail = data.data
      } catch (error) {
        this.showToast('Error fetching money advances', 'error')
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    closePrintVoucher() {
      this.showPrintVoucher = false
      setTimeout(() => {
        this.settlementDetail = null
      }, 100)
    },
    async printSettlement() {
      await this.fetchSettlementByid()
      this.showPrintVoucher = true
    },
    initializeForm() {
      if (
        this.settlement &&
        (this.settlement.id || this.settlement.moneyAdvanceId)
      ) {
        const hasMoneyAdvance =
          this.settlement.moneyAdvanceId &&
          this.settlement.moneyAdvanceId !== null &&
          this.settlement.moneyAdvanceId !== '' &&
          this.settlement.moneyAdvanceId !== '0' &&
          this.settlement.moneyAdvanceId !== 0

        this.formData = {
          id: this.settlement.id,
          settlementDate: this.settlement.settlementDate
            ? this.settlement.settlementDate.split('T')[0]
            : '',
          method: this.settlement.method || '',
          amount: this.settlement.amount || null,
          currencyId: this.settlement.currencyId || '',
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
          // INITIALIZE NEW FIELDS
          externalRef: this.settlement.externalRef || '',
          externalRefNo: this.settlement.externalRefNo || '',
          chequeNo: this.settlement.chequeNo || '',
          fromPersonName: this.settlement.fromPersonName || '',
        }

        this._isInitializing = true

        if (this.formData.linkToAdvance === 'true') {
          this.$nextTick(() => {
            this.waitForAdvancesAndSync()
            this._isInitializing = false
          })
        } else {
          this.$nextTick(() => {
            this._isInitializing = false
          })
        }
      } else {
        this.formData = {
          settlementDate: this.today,
          method: this.paymentMethod,
          amount: null,
          currencyId: '',
          exchangeRate: 1,
          bankAccountId: '',
          ministryId: '',
          chartAccountId: '',
          userId: this.user.id,
          notes: '',
          selectedInvoices: [],
          linkToAdvance: 'false',
          moneyAdvanceId: '',
          // INITIALIZE NEW FIELDS FOR CREATE MODE
          externalRef: '',
          externalRefNo: '',
          chequeNo: '',
          fromPersonName: '',
        }

        this._isInitializing = true

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

    waitForAdvancesAndSync() {
      const checkAndSync = () => {
        if (this.availableAdvances.length > 0 && this.formData.moneyAdvanceId) {
          const foundAdvance = this.availableAdvances.find(
            (advance) =>
              advance.id.toString() === this.formData.moneyAdvanceId.toString()
          )

          if (foundAdvance) {
            this.syncCurrencyFromAdvance()
            this.syncAmountFromAdvance()
          }
        } else if (!this.loadingAdvances) {
          setTimeout(checkAndSync, 200)
        }
      }
      checkAndSync()
    },

    resetForm() {
      this.formData = {
        settlementDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1,
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: this.user.id,
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: '',
        // RESET NEW FIELDS
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: '',
      }
      this.errors = {}
      this.formErrors = []
      this.loading = false

      if (this.showAdvanceBrowser) {
        this.showAdvanceBrowser = false
        this.selectedAdvanceForBrowser = null
        document.body.style.overflow = 'auto'
      }
    },

    handleCurrencyChange() {
      if (this.isBaseCurrency) {
        if (
          !this.isEditMode ||
          this.formData.exchangeRate === null ||
          this.formData.exchangeRate === undefined
        ) {
          this.formData.exchangeRate = 1
        }
      } else if (
        !this.formData.exchangeRate ||
        this.formData.exchangeRate === 1
      ) {
        if (!this.isEditMode) {
          this.formData.exchangeRate = null
        }
      }
    },

    calculateEquivalentAmount() {
      // Placeholder for calculation logic
    },

    async loadMoneyAdvances() {
      this.loadingAdvances = true

      try {
        const params = {
          status: ['pending', 'approved'],
          available_for_settlement: true,
        }

        if (this.formData.moneyAdvanceId) {
          params.include_advance_id = this.formData.moneyAdvanceId
        }

        const { data } = await this.$axios.get('/api/money-advances', {
          params,
        })

        if (data && data.success) {
          this.availableAdvances = data.data || []

          if (this.formData.moneyAdvanceId) {
            const foundAdvance = this.availableAdvances.find(
              (advance) =>
                advance.id.toString() ===
                this.formData.moneyAdvanceId.toString()
            )

            if (!foundAdvance) {
              try {
                const { data: advanceData } = await this.$axios.get(
                  `/api/money-advances/${this.formData.moneyAdvanceId}`
                )
                if (advanceData && advanceData.success) {
                  this.availableAdvances.unshift(advanceData.data)
                }
              } catch (error) {
                console.error('Error fetching individual advance:', error)
              }
            }
          }
        } else {
          this.availableAdvances = []
        }

        this.filteredAdvances = [...this.availableAdvances]
      } catch (error) {
        console.error('Error loading money advances:', error)
        this.availableAdvances = []
        this.filteredAdvances = []
      } finally {
        this.loadingAdvances = false
      }
    },

    handleMethodChange() {
      if (this.formData.method !== 'bank_transfer') {
        this.formData.bankAccountId = ''
      }
      if (this.formData.method !== 'deduction') {
        this.formData.selectedInvoices = []
      }
      // Clear method-specific fields
      if (this.formData.method !== 'cheque') {
        this.formData.chequeNo = ''
      }
      if (
        this.formData.method !== 'cash' &&
        this.formData.method !== 'cheque'
      ) {
        this.formData.fromPersonName = ''
      }
      this.clearFieldError('bankAccountId')
      this.clearFieldError('chequeNo')
      this.clearFieldError('fromPersonName')
    },

    updateSelectedInvoicesAmount() {
      if (this.formData.method === 'deduction') {
        this.formData.amount = this.selectedInvoicesTotal
      }
    },

    updateSelectedCurrency() {
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

      if (this.currencies.length > 0) {
        const defaultCurrency =
          this.currencies.find((c) => (c.code || c.currencyCode) === 'LAK') ||
          this.currencies[0]
        this.formData.currencyId = defaultCurrency.id
        this.formData.exchangeRate = 1
      }

      this.formData.amount = null
    },

    updateSelectedAdvance() {
      if (this.selectedAdvance) {
        this.syncCurrencyFromAdvance()
        this.syncAmountFromAdvance()
      }
    },

    syncCurrencyFromAdvance() {
      if (!this.selectedAdvance) return

      const advanceCurrency = this.getAdvanceCurrency()
      if (advanceCurrency) {
        this.formData.currencyId = advanceCurrency.id
        if (
          this.selectedAdvance.exchangeRate &&
          this.selectedAdvance.exchangeRate !== null
        ) {
          this.formData.exchangeRate = this.selectedAdvance.exchangeRate
        } else {
          if (
            this.isBaseCurrency &&
            (this.formData.exchangeRate === null ||
              this.formData.exchangeRate === undefined)
          ) {
            this.formData.exchangeRate = 1
          }
        }
      }
    },

    syncAmountFromAdvance() {
      if (this.selectedAdvance && this.selectedAdvance.amount) {
        this.formData.amount = this.selectedAdvance.amount
      }
    },

    getAdvanceCurrency() {
      if (!this.selectedAdvance) return null

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
      document.body.style.overflow = 'hidden'
    },

    closeAdvanceBrowser() {
      this.showAdvanceBrowser = false
      this.selectedAdvanceForBrowser = null
      this.advanceSearch.query = ''
      this.advanceSearch.status = ''
      this.filteredAdvances = [...this.availableAdvances]
      document.body.style.overflow = 'auto'
    },

    handleAdvanceBrowserOverlayClick(event) {
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

      if (this.advanceSearch.status) {
        filtered = filtered.filter(
          (advance) => advance.status === this.advanceSearch.status
        )
      }

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
        this.formErrors.push('ວັນທີລົງຊຳລະ ແມ່ນຈຳເປັນ')
      }

      if (!this.formData.method) {
        this.errors.method = 'ກະລຸນາເລືອກວິທີການຊຳລະ'
        this.formErrors.push('ວິທີການຊຳລະ ແມ່ນຈຳເປັນ')
      }

      if (!this.formData.amount || this.formData.amount <= 0) {
        this.errors.amount = 'ກະລຸນາໃສ່ຈຳນວນເງິນທີ່ຖືກຕ້ອງ'
        this.formErrors.push('ຈຳນວນເງິນ ແມ່ນຈຳເປັນ ແລະ ຕ້ອງຫຼາຍກວ່າ 0')
      }

      if (!this.formData.currencyId) {
        this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ'
        this.formErrors.push('ສະກຸນເງິນ ແມ່ນຈຳເປັນ')
      }

      if (this.formData.exchangeRate && this.formData.exchangeRate <= 0) {
        this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0'
        this.formErrors.push('ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0')
      }

      if (!this.formData.userId) {
        this.errors.userId = 'ກະລຸນາເລືອກຜູ້ລົງບັນຊີ'
        this.formErrors.push('ຜູ້ລົງບັນຊີ ແມ່ນຈຳເປັນ')
      }

      // Conditional validation
      if (
        this.formData.method === 'bank_transfer' &&
        !this.formData.bankAccountId
      ) {
        this.errors.bankAccountId = 'ກະລຸນາເລືອກບັນຊີທະນາຄານ'
        this.formErrors.push('ບັນຊີທະນາຄານ ແມ່ນຈຳເປັນສຳລັບການໂອນທະນາຄານ')
      }

      // NEW: Cheque number validation
      if (this.formData.method === 'cheque' && !this.formData.chequeNo) {
        this.errors.chequeNo = 'ກະລຸນາໃສ່ເລກເຊັກ'
        this.formErrors.push('ເລກເຊັກ ແມ່ນຈຳເປັນສຳລັບການຊຳລະດ້ວຍເຊັກ')
      }

      // NEW: From person name validation
      if (
        (this.formData.method === 'cash' ||
          this.formData.method === 'cheque') &&
        !this.formData.fromPersonName
      ) {
        this.errors.fromPersonName = 'ກະລຸນາໃສ່ຊື່ຜູ້ຈ່າຍ'
        this.formErrors.push(
          'ຊື່ຜູ້ຈ່າຍ ແມ່ນຈຳເປັນສຳລັບການຊຳລະດ້ວຍເງິນສົດ ແລະ ເຊັກ'
        )
      }

      // Special validation for linked advances
      if (this.isLinkedToAdvance && this.selectedAdvance) {
        const advanceCurrency = this.getAdvanceCurrency()
        if (advanceCurrency && this.formData.currencyId != advanceCurrency.id) {
          this.errors.currencyId = 'ສະກຸນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າ'
          this.formErrors.push('ສະກຸນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າທີ່ເລືອກ')
        }
      }

      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('ໝາຍເຫດຕ້ອງບໍ່ເກີນ 500 ຕົວອັກສອນ')
      }

      if (this.users.length === 0) {
        this.formErrors.push('ບໍ່ມີຜູ້ໃຊ້ງານ. ກະລຸນາຕິດຕໍ່ຜູ້ຄຸ້ມຄອງລະບົບ.')
      }

      if (this.currencies.length === 0) {
        this.formErrors.push('ບໍ່ມີສະກຸນເງິນ. ກະລຸນາຕິດຕໍ່ຜູ້ຄຸ້ມຄອງລະບົບ.')
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
        const submitData = {
          ...this.formData,
          selectedInvoices:
            this.formData.method === 'deduction'
              ? this.formData.selectedInvoices
              : [],
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

        if (!this.formData.id) {
          const response = await this.$axios.post(
            '/api/settlements',
            submitData
          )
          console.info(`REPONSE DATA ${JSON.stringify(response.data)}`)
          this.formData.id = response.data.data.id
          this.showToast('Money settlement created successfully', 'success')
          return
        }

        // Emit save event to parent
        this.$emit('save', submitData)
      } catch (error) {
        console.error('Form submission error:', error)
        this.formErrors.push('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ. ກະລຸນາລອງໃໝ່.')
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
    formatCurrency(amount, currency = 'LAK', locale = 'en-US', options = {}) {
      if (
        typeof amount !== 'number' &&
        amount !== null &&
        amount !== undefined
      ) {
        amount = 0
      }

      const defaultOptions = {
        style: 'currency',
        currency: currency.toUpperCase(),
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
        ...options,
      }

      try {
        return new Intl.NumberFormat(locale, defaultOptions).format(amount || 0)
      } catch (error) {
        return `${currency.toUpperCase()} ${(amount || 0).toLocaleString()}`
      }
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
      return `#${advance.id} - ${this.formatCurrency(
        advance.amount,
        advance.currency.code
      )} - ${advance.purpose || 'No purpose'}`
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
  },
}
</script>

<style scoped>
/* All the existing CSS styles remain the same */
/* Compact Modal Styles */
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

.enhanced-dialog {
  background: white;
  border-radius: 12px;
  max-width: 95vw;
  width: 95%;
  max-height: 95vh;
  height: 95vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease-out;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e9ecef;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  flex-shrink: 0;
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

.modal-body {
  padding: 16px 24px;
  flex: 1;
  overflow-y: auto;
  min-height: 0;
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

/* Compact Form Grid */
.form-grid.compact {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  height: 100%;
  align-content: start;
}

.form-group {
  margin-bottom: 0;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

/* Compact Form Labels */
.form-label {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #374151;
  font-size: 12px;
}

.form-label.required::after {
  content: '*';
  color: #e74c3c;
  margin-left: 2px;
}

.form-label i {
  color: #6b7280;
  font-size: 10px;
}

/* Compact Form Controls */
.form-control.compact {
  width: 100%;
  padding: 8px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 13px;
  transition: all 0.2s ease;
  background: #fafafa;
  box-sizing: border-box;
}

.form-control.compact:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.form-control.compact:disabled {
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
  font-size: 10px;
  margin-top: 2px;
}

/* Compact Input Groups */
.input-group.compact {
  display: flex;
  border-radius: 6px;
  overflow: hidden;
}

.input-group.compact .form-control {
  border-radius: 0;
  border-right: none;
}

.input-group-append {
  display: flex;
}

.input-group-text.compact {
  background: #f8f9fa;
  border: 2px solid #e5e7eb;
  border-left: none;
  padding: 8px 12px;
  font-weight: 600;
  color: #6b7280;
  font-size: 12px;
}

/* Compact Custom Select */
.custom-select-wrapper {
  position: relative;
}

.custom-select.compact {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 30px;
}

.select-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #6b7280;
  font-size: 10px;
}

/* Compact Radio Options */
.link-advance-options.compact {
  display: flex;
  gap: 12px;
  margin-top: 4px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-size: 12px;
  color: #374151;
}

.radio-option input[type='radio'] {
  margin: 0;
  transform: scale(0.8);
}

.radio-label {
  font-weight: 500;
}

/* Compact Money Advance Section */
.compact-advance {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px;
  margin: 8px 0;
}

.advance-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.advance-selection.compact {
  margin-top: 8px;
}

.advance-selection-container.compact {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 8px;
}

.flex-1 {
  flex: 1;
}

/* Compact Button */
.btn.compact {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
  font-size: 12px;
}

.btn-sm.compact {
  padding: 4px 8px;
  font-size: 11px;
}

/* Compact Advance Info */
.advance-info.compact {
  margin-top: 8px;
  padding: 8px;
  background: #f0f9ff;
  border-radius: 6px;
  border: 1px solid #bae6fd;
}

.advance-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 11px;
}

.advance-id {
  font-weight: 700;
  color: #1e293b;
  font-family: 'Courier New', monospace;
  background: #e2e8f0;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
}

.advance-amount {
  font-weight: 700;
  color: #059669;
  background: #d1fae5;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
}

.advance-purpose {
  font-style: italic;
  color: #6b7280;
  font-size: 10px;
}

/* Status Badges */
.status-badge {
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
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

/* Field Hints */
.field-hint {
  margin-top: 4px;
  font-size: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: space-between;
}

.field-hint.error {
  color: #e74c3c;
}

.field-hint.warning {
  color: #f39c12;
}

.field-hint.info {
  color: #0ea5e9;
}

.text-counter {
  color: #9ca3af;
  font-size: 9px;
  margin-left: auto;
}

/* Form Errors */
.form-errors.compact {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  padding: 12px;
  margin-top: 12px;
}

.form-errors.compact h6 {
  margin: 0 0 6px 0;
  color: #dc2626;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.form-errors.compact ul {
  margin: 0;
  padding-left: 16px;
  color: #dc2626;
  font-size: 11px;
}

/* Modal Footer */
.enhanced-footer.compact {
  padding: 12px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  flex-shrink: 0;
}

.modal-footer.compact {
  padding: 12px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  flex-shrink: 0;
}

/* Button Styles */
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  font-size: 13px;
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

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.fa-spin {
  animation: spin 1s linear infinite;
}

/* Advance Browser Compact Styles */
.advance-filters.compact {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
}

.filter-row.compact {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
}

.advances-list.compact {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
}

.advance-items.compact {
  display: flex;
  flex-direction: column;
  padding: 8px;
}

.advance-item.compact {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  margin-bottom: 8px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.advance-item.compact:hover {
  background: #f0f9ff;
  border-color: #60a5fa;
}

.advance-item.compact.selected {
  background: #dbeafe;
  border-color: #3b82f6;
}

.advance-item-content.compact {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.advance-item-header.compact {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.advance-item-body.compact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
  font-size: 11px;
}

/* Responsive Design for Compact Layout */
@media (max-width: 1200px) {
  .form-grid.compact {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .enhanced-dialog {
    width: 98%;
    margin: 1vh auto;
    max-height: 98vh;
    height: 98vh;
  }

  .form-grid.compact {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .modal-header {
    padding: 12px 16px;
  }

  .modal-body {
    padding: 12px 16px;
  }

  .enhanced-footer.compact,
  .modal-footer.compact {
    padding: 12px 16px;
    flex-direction: column-reverse;
  }

  .enhanced-footer.compact .btn,
  .modal-footer.compact .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .form-grid.compact {
    grid-template-columns: 1fr;
  }

  .advance-toggle {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .advance-selection-container.compact {
    flex-direction: column;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
</style>