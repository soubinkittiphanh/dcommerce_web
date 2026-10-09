<template>
  <div>
    <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
      <div class="modal-dialog enhanced-dialog" @click.stop>
        <div class="modal-header primary">
          <div class="modal-title-section">
            <i class="fas fa-money-bill-wave modal-icon"></i>
            <h5 class="modal-title">
              {{ isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ລົງລາຍຮັບ ການຊຳລະ' }}
            </h5>
          </div>

          <div class="modal-header-right">
            <span v-if="formData.id && !isCancelled" class="status-indicator active-indicator">
              <i class="fas fa-check-circle mr-1"></i> Active
            </span>
            <span v-else-if="formData.id && isCancelled" class="status-indicator cancelled-indicator">
              <i class="fas fa-ban mr-1"></i> Cancelled
            </span>
            <span class="voucher-number">
              ເລກທີ:
              {{ formData.id ? formatVoucherNumber(formData.id) : '000000' }}
            </span>
            <button
              type="button"
              @click="closeDialog"
              class="close-btn"
              :disabled="loading || isSubmitting"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>

        <form @submit.prevent="saveSettlement">
          <div class="modal-body">
            <!-- Cancelled Notice Banner -->
            <div v-if="formData.id && isCancelled" class="cancelled-banner mb-3">
              <div class="banner-content">
                <i class="fas fa-ban banner-icon"></i>
                <div class="banner-text">
                  <div class="banner-title">ທຸລະກຳນີ້ຖືກຍົກເລີກແລ້ວ (Transaction Cancelled / Void)</div>
                  <div class="banner-desc">ທຸລະກຳນີ້ຖືກໝາຍວ່າບໍ່ມີຜົນ. ຟອມຖືກປິດການແກ້ໄຂ ນອກຈາກຈະກູ້ຄືນທຸລະກຳ.</div>
                </div>
                <button
                  type="button"
                  class="btn-restore-banner"
                  @click.prevent="restoreSettlement"
                  :disabled="isSubmitting || loading"
                >
                  <i class="fas fa-undo mr-1"></i>
                  ກູ້ຄືນ (Restore)
                </button>
              </div>
            </div>

            <!-- Loading state for form data -->
            <div v-if="loading || isSubmitting" class="form-loading">
              <div class="spinner-small"></div>
              <p>
                {{
                  isSubmitting ? 'ກຳລັງບັນທຶກຂໍ້ມູນ...' : 'ກຳລັງໂຫຼດຂໍ້ມູນ...'
                }}
              </p>
            </div>

            <!-- Duplicate Warning Banner (Inline) -->
            <div v-if="!loading && !isSubmitting && duplicateWarningInfo" class="duplicate-warning-box mb-3">
              <div class="duplicate-warning-header">
                <i class="fas fa-exclamation-triangle"></i>
                <span>ແຈ້ງເຕືອນ: ພົບການຊຳລະທີ່ຄ້າຍຄືກັນໃນງວດປັດຈຸບັນ/ຜ່ານມາ ({{ duplicateWarningInfo.count }} ລາຍການ)</span>
              </div>
              <div class="duplicate-warning-chips">
                <span
                  v-for="dup in duplicateWarningInfo.duplicates"
                  :key="dup.id"
                  class="duplicate-chip"
                >
                  <strong>#{{ formatVoucherNumber(dup.id) }}</strong> ({{ formatDateForDisplay(dup.bookingDate) }}) - {{ formatAmountNumber(dup.amount) }} {{ dup.currencyCode }}
                </span>
              </div>
            </div>

            <div v-if="!loading && !isSubmitting" class="form-grid compact">
              <!-- Row 1: Settlement Date -->
              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-calendar"></i>
                  ວັນທີລົງຊຳລະ
                </label>

                <v-menu
                  ref="bookingDateMenu"
                  v-model="bookingDateMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                  :disabled="isFormDisabled"
                >
                  <template #activator="{ on, attrs }">
                    <v-text-field
                      v-model="formattedBookingDate"
                      outlined
                      dense
                      clearable
                      hide-details
                      prepend-inner-icon="mdi-calendar"
                      :error="!!errors.bookingDate"
                      :error-messages="errors.bookingDate"
                      :disabled="isFormDisabled"
                      :class="{ 'compact-date-field': true }"
                      v-bind="attrs"
                      v-on="on"
                      @click:clear="clearBookingDate"
                    />
                  </template>
                  <v-date-picker
                    v-model="pickerBookingDate"
                    no-title
                    :max="today"
                    @input="setBookingDate"
                    :disabled="isFormDisabled"
                  />
                </v-menu>
              </div>

              <!-- Row 2: Payment Method -->
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
                    :disabled="isFormDisabled"
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

              <!-- Row 3: External Reference -->
              <div class="form-group" v-if="!isBankTransfer">
                <label class="form-label">
                  <i class="fas fa-hashtag"></i>
                  ອີງຕາມ
                </label>
                <input
                  v-model="formData.externalRef"
                  type="text"
                  class="form-control compact"
                  :class="{ 'is-invalid': errors.externalRef }"
                  :disabled="isFormDisabled"
                  placeholder="ອີງຕາມ ການຕົກລົງ ເຫັນດີ..."
                  maxlength="50"
                />
                <div v-if="errors.externalRef" class="invalid-feedback">
                  {{ errors.externalRef }}
                </div>
              </div>

              <!-- Row 4: External Reference Number -->
              <div class="form-group" v-if="!isBankTransfer">
                <label class="form-label">
                  <i class="fas fa-hashtag"></i>
                  ເລກອ້າງອິງພາຍນອກ
                </label>
                <input
                  v-model="formData.externalRefNo"
                  type="text"
                  class="form-control compact"
                  :class="{ 'is-invalid': errors.externalRefNo }"
                  :disabled="isFormDisabled"
                  placeholder="REF-001, TXN-123..."
                  maxlength="50"
                />
                <div v-if="errors.externalRefNo" class="invalid-feedback">
                  {{ errors.externalRefNo }}
                </div>
              </div>

              <!-- Row 5: Cheque Number -->
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
                  :disabled="isFormDisabled"
                  placeholder="ໃສ່ເລກເຊັກ..."
                  maxlength="20"
                  :required="formData.method === 'cheque'"
                />
                <div v-if="errors.chequeNo" class="invalid-feedback">
                  {{ errors.chequeNo }}
                </div>
              </div>

              <!-- Row 6: Currency -->
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
                    :disabled="isFormDisabled || isLinkedToAdvance"
                    required
                    @change="updateSelectedCurrency"
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

              <!-- Row 7: Amount -->
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
                    :disabled="isFormDisabled"
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

              <!-- Row 8: From Person Name -->
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
                  :disabled="isFormDisabled"
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

              <!-- Row 9: Ministry -->
              <div class="form-group" v-if="!isBankTransfer">
                <label class="form-label">
                  <i class="fas fa-building"></i>
                  ສັງກັດຢູ່ (ກະຊວງ)
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="formData.ministryId"
                    class="form-control custom-select compact"
                    :class="{ 'is-invalid': errors.ministryId }"
                    :disabled="isFormDisabled"
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

              <!-- Row 10: Bank Account -->
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
                    :disabled="isFormDisabled"
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

              <!-- Row 11: Exchange Rate -->
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
                    :disabled="isFormDisabled"
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

              <!-- Row 12: Chart Account -->
              <div class="form-group" v-if="!isBankTransfer">
                <label class="form-label">
                  <i class="fas fa-chart-line"></i>
                  ບັນຊີລວມ
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="formData.chartAccountId"
                    class="form-control custom-select compact"
                    :class="{ 'is-invalid': errors.chartAccountId }"
                    :disabled="isFormDisabled"
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

              <!-- Row 13: User/Proceeder -->
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
                    :disabled="true"
                    required
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

              <!-- Row 14: Money Advance Link -->
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
                        :disabled="isFormDisabled"
                        @change="clearAdvanceSelection"
                      />
                      <span class="radio-label">ບໍ່ເຊື່ອມຕໍ່</span>
                    </label>
                    <label class="radio-option">
                      <input
                        type="radio"
                        v-model="formData.linkToAdvance"
                        value="true"
                        :disabled="isFormDisabled"
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
                        :disabled="isFormDisabled"
                        @change="updateSelectedAdvance"
                      >
                        <option value="">
                          -- ເລືອກລາຍຈ່າຍລ່ວງໜ້າ ({{ availableAdvances.length }} ລາຍການ{{ selectedMinistry ? ' - ' + selectedMinistry.ministryName : '' }}) --
                        </option>
                        <option
                          v-for="advance in availableAdvances"
                          :key="advance.id"
                          :value="advance.id"
                        >
                          #{{ formatVoucherNumber(advance.id) }} - {{ advance.ministry?.ministryName || 'ທົ່ວໄປ' }} - {{ advance.receiveName || advance.maker?.cus_name || '' }} - {{ formatCurrency(advance.outstandingAmount !== undefined ? advance.outstandingAmount : advance.amount, advance.currency?.code) }}
                        </option>
                      </select>
                      <div class="select-icon">
                        <i class="fas fa-chevron-down"></i>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn-browse-advance"
                      @click.stop="browseMoneyAdvances"
                      :disabled="isFormDisabled || loadingAdvances"
                      title="ເປີດໜ້າຕ່າງຄົ້ນຫາລາຍຈ່າຍລ່ວງໜ້າແບບລະອຽດ"
                    >
                      <i
                        v-if="loadingAdvances"
                        class="fas fa-spinner fa-spin mr-1"
                      ></i>
                      <i v-else class="fas fa-search-plus mr-1"></i>
                      <span>ຄົ້ນຫາແບບລະອຽດ (Browse)</span>
                    </button>
                  </div>

                  <!-- Compact Selected Advance Info -->
                  <div v-if="selectedAdvance" class="advance-info compact">
                    <div class="advance-summary">
                      <span class="advance-id">#{{ formatVoucherNumber(selectedAdvance.id) }}</span>
                      <span v-if="selectedAdvance.ministry" class="advance-ministry-badge">
                        <i class="fas fa-building mr-1"></i>{{ selectedAdvance.ministry.ministryName }}
                      </span>
                      <span class="advance-amount">
                        ຍອດຍັງເຫຼືອ: <strong>{{
                          formatCurrency(
                            selectedAdvance.outstandingAmount !== undefined ? selectedAdvance.outstandingAmount : selectedAdvance.amount,
                            selectedAdvance.currency?.code || selectedAdvance.currencyCode
                          )
                        }}</strong>
                      </span>
                      <span v-if="selectedAdvance.receiveName" class="advance-receiver">
                        <i class="fas fa-user mr-1"></i>{{ selectedAdvance.receiveName }}
                      </span>
                      <span class="advance-purpose">{{
                        selectedAdvance.purpose || selectedAdvance.note || 'No purpose'
                      }}</span>
                      <span :class="['status-badge', selectedAdvance.status]">
                        {{ formatStatus(selectedAdvance.status) }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Row 15: Notes/Content -->
              <div class="form-group full-width">
                <label class="form-label">
                  <i class="fas fa-sticky-note"></i>
                  ເນື້ອໃນລາຍຮັບ (ໝາຍເຫດ)
                </label>
                <textarea
                  v-model="formData.notes"
                  class="form-control compact"
                  :disabled="isFormDisabled"
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
            <!-- Cancel / Void Transaction Button for Active Existing Record -->
            <button
              v-if="formData.id && !isCancelled"
              type="button"
              class="btn-cancel-txn mr-auto"
              @click.prevent="confirmCancelTransaction"
              :disabled="isSubmitting || loading"
              title="ຍົກເລີກທຸລະກຳການຊຳລະນີ້"
            >
              <i class="fas fa-ban mr-1"></i>
              ຍົກເລີກທຸລະກຳ (Cancel Transaction)
            </button>

            <!-- Restore Button for Cancelled Record -->
            <button
              v-else-if="formData.id && isCancelled"
              type="button"
              class="btn-restore-txn mr-auto"
              @click.prevent="restoreSettlement"
              :disabled="isSubmitting || loading"
              title="ກູ້ຄືນທຸລະກຳການຊຳລະນີ້"
            >
              <i class="fas fa-undo mr-1"></i>
              ກູ້ຄືນທຸລະກຳ (Restore)
            </button>

            <v-btn
              type="button"
              @click="closeDialog"
              :disabled="loading || isSubmitting"
            >
              <i class="fas fa-times mr-1"></i>
              ປິດ
            </v-btn>
            <v-btn
              v-if="!isCancelled"
              type="submit"
              color="primary"
              :disabled="isFormDisabled || !isFormValid"
            >
              <i v-if="isSubmitting" class="fas fa-spinner fa-spin mr-1"></i>
              <i
                v-else
                class="fas mr-1"
                :class="isEditMode ? 'fa-save' : 'fa-plus'"
              ></i>
              {{
                isSubmitting
                  ? 'ກຳລັງບັນທຶກ...'
                  : isEditMode
                  ? 'ອັບເດດ'
                  : 'ບັນທຶກ'
              }}
            </v-btn>
            <v-btn
              v-if="!isCancelled"
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click.prevent="printSettlement"
              title="Save & Print"
              :disabled="isFormDisabled || !isFormValid"
            >
              <i class="fas fa-print mr-1"></i>
              Save & Print
            </v-btn>
          </div>
        </form>
      </div>
    </div>

    <!-- Money Advance Browser Modal (Enhanced Multi-Criteria Search) -->
      <div
        v-if="showAdvanceBrowser"
        class="modal-overlay browser-overlay"
        @click="handleAdvanceBrowserOverlayClick"
      >
        <div class="modal-dialog advance-browser-dialog" @click.stop>
          <!-- Modal Header -->
          <div class="modal-header primary advance-browser-header">
            <div class="modal-title-section">
              <i class="fas fa-search-dollar modal-icon"></i>
              <div>
                <h5 class="modal-title">ຄົ້ນຫາ ແລະ ເລືອກລາຍຈ່າຍລ່ວງໜ້າ (Select Payment Advance)</h5>
                <span class="browser-subtitle">
                  ເລືອກລາຍຈ່າຍລ່ວງໜ້າເພື່ອເຊື່ອມຕໍ່ກັບການລົງຊຳລະ (Settlement)
                </span>
              </div>
            </div>
            <button type="button" @click="closeAdvanceBrowser" class="close-btn" title="ປິດໜ້າຕ່າງ (Close)">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <!-- Organized Filter Panel -->
          <div class="advance-browser-filters">
            <!-- Row 1: Filter Controls Toolbar -->
            <div class="browser-filter-controls">
              <!-- Search query input -->
              <div class="filter-col col-search">
                <label class="filter-label"><i class="fas fa-search"></i> ຄົ້ນຫາ (Search)</label>
                <div class="browser-search-input-wrapper">
                  <i class="fas fa-search search-input-icon"></i>
                  <input
                    v-model="advanceSearch.query"
                    type="text"
                    class="form-control browser-search-input"
                    placeholder="ເລກທີ #, ຈຸດປະສົງ, ຜູ້ຮັບເງິນ, ເລກອ້າງອີງ..."
                    @input="debounceSearchAdvances"
                  />
                  <button
                    v-if="advanceSearch.query"
                    type="button"
                    class="clear-search-btn"
                    @click="clearSearchQuery"
                    title="ລ້າງຄຳຄົ້ນຫາ"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <!-- Ministry filter -->
              <div class="filter-col col-ministry">
                <label class="filter-label">
                  <i class="fas fa-building"></i> ກົມ (Ministry)
                  <span
                    v-if="formData.ministryId && advanceSearch.ministryId == formData.ministryId"
                    class="badge-primary-light"
                    title="ກັ່ນຕອງເລີ່ມຕົ້ນຕາມກົມທີ່ເລືອກໃນຟອມຊຳລະ"
                  >
                    ຕາມຟອມ
                  </span>
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="advanceSearch.ministryId"
                    class="form-control custom-select browser-filter-select"
                    @change="onFilterChange"
                  >
                    <option value="">-- ທຸກກົມ (All Ministries) --</option>
                    <option
                      v-for="min in ministries"
                      :key="min.id"
                      :value="min.id"
                    >
                      {{ min.ministryCode ? min.ministryCode + ' - ' : '' }}{{ min.ministryName }}
                    </option>
                  </select>
                  <div class="select-icon"><i class="fas fa-chevron-down"></i></div>
                </div>
              </div>

              <!-- Currency filter -->
              <div class="filter-col col-currency">
                <label class="filter-label"><i class="fas fa-coins"></i> ສະກຸນເງິນ</label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="advanceSearch.currencyId"
                    class="form-control custom-select browser-filter-select"
                    @change="onFilterChange"
                  >
                    <option value="">-- ທຸກສະກຸນ --</option>
                    <option
                      v-for="curr in currencies"
                      :key="curr.id"
                      :value="curr.id"
                    >
                      {{ curr.code || curr.currencyCode }}
                    </option>
                  </select>
                  <div class="select-icon"><i class="fas fa-chevron-down"></i></div>
                </div>
              </div>

              <!-- From Date -->
              <div class="filter-col col-date">
                <label class="filter-label"><i class="fas fa-calendar-alt"></i> ແຕ່ວັນທີ</label>
                <input
                  v-model="advanceSearch.fromDate"
                  type="date"
                  class="form-control browser-filter-input"
                  @change="onFilterChange"
                />
              </div>

              <!-- To Date -->
              <div class="filter-col col-date">
                <label class="filter-label"><i class="fas fa-calendar-alt"></i> ຫາວັນທີ</label>
                <input
                  v-model="advanceSearch.toDate"
                  type="date"
                  class="form-control browser-filter-input"
                  @change="onFilterChange"
                />
              </div>

              <!-- Status filter -->
              <div class="filter-col col-status">
                <label class="filter-label"><i class="fas fa-tag"></i> ສະຖານະ</label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="advanceSearch.status"
                    class="form-control custom-select browser-filter-select"
                    @change="onFilterChange"
                  >
                    <option value="">-- ທຸກສະຖານະ --</option>
                    <option value="approved">ອະນຸມັດແລ້ວ (Approved)</option>
                    <option value="pending">ລໍຖ້າ (Pending)</option>
                  </select>
                  <div class="select-icon"><i class="fas fa-chevron-down"></i></div>
                </div>
              </div>

              <!-- Reset / Reload Actions -->
              <div class="filter-col col-actions">
                <button
                  type="button"
                  class="filter-btn-reset"
                  @click="resetAdvanceFilters"
                  title="ລ້າງເງື່ອນໄຂການຄົ້ນຫາ (Reset Filters)"
                >
                  <i class="fas fa-undo mr-1"></i> ລ້າງ
                </button>
                <button
                  type="button"
                  class="filter-btn-reload"
                  @click="loadMoneyAdvances"
                  title="ໂຫຼດຂໍ້ມູນຄືນໃໝ່ (Reload)"
                >
                  <i class="fas fa-sync-alt mr-1"></i> ໂຫຼດໃໝ່
                </button>
              </div>
            </div>

            <!-- Sub-toolbar: Active Filter Chips & View Mode Toggle -->
            <div class="browser-toolbar-subrow">
              <div class="active-filters-chips">
                <span class="results-count-text">
                  <i class="fas fa-list-ul mr-1"></i> ພົບທັງໝົດ <strong>{{ filteredAdvances.length }}</strong> ລາຍການ
                </span>
                <span v-if="selectedMinistry && advanceSearch.ministryId == selectedMinistry.id" class="active-filter-chip">
                  <i class="fas fa-building mr-1"></i> {{ selectedMinistry.ministryName }}
                </span>
                <span v-if="advanceSearch.query" class="active-filter-chip">
                  <i class="fas fa-search mr-1"></i> "{{ advanceSearch.query }}"
                  <i class="fas fa-times chip-remove" @click="clearSearchQuery"></i>
                </span>
                <span v-if="advanceSearch.fromDate || advanceSearch.toDate" class="active-filter-chip">
                  <i class="fas fa-calendar mr-1"></i> {{ advanceSearch.fromDate || '...' }} ຫາ {{ advanceSearch.toDate || '...' }}
                </span>
              </div>

              <div class="view-mode-toggle">
                <button
                  type="button"
                  class="view-mode-btn"
                  :class="{ active: browserViewMode === 'table' }"
                  @click="browserViewMode = 'table'"
                  title="ສະແດງແບບຕາຕະລາງ (Table View)"
                >
                  <i class="fas fa-table mr-1"></i> ຕາຕະລາງ
                </button>
                <button
                  type="button"
                  class="view-mode-btn"
                  :class="{ active: browserViewMode === 'grid' }"
                  @click="browserViewMode = 'grid'"
                  title="ສະແດງແບບກາດ (Grid View)"
                >
                  <i class="fas fa-th-large mr-1"></i> ກາດ
                </button>
              </div>
            </div>
          </div>

          <!-- Advances List Body -->
          <div class="modal-body advance-browser-body">
            <!-- Loading State -->
            <div v-if="loadingAdvances" class="browser-loading-state">
              <div class="spinner-small"></div>
              <p>ກຳລັງຄົ້ນຫາລາຍຈ່າຍລ່ວງໜ້າ...</p>
            </div>

            <!-- Empty State -->
            <div
              v-else-if="filteredAdvances.length === 0"
              class="browser-empty-state"
            >
              <i class="fas fa-search-minus empty-icon"></i>
              <h6>ບໍ່ພົບລາຍຈ່າຍລ່ວງໜ້າຕາມເງື່ອນໄຂ</h6>
              <p class="empty-desc">ລອງປ່ຽນຄຳຄົ້ນຫາ ຫຼື ກົດ "ລ້າງ (Reset)" ເພື່ອເບິ່ງລາຍການທັງໝົດ</p>
              <button
                type="button"
                class="btn-outline-primary mt-2"
                @click="resetAdvanceFilters"
              >
                <i class="fas fa-undo mr-1"></i> ລ້າງເງື່ອນໄຂທັງໝົດ
              </button>
            </div>

            <!-- TABLE VIEW (Organized & Highly Scannable) -->
            <div v-else-if="browserViewMode === 'table'" class="browser-table-wrapper">
              <table class="browser-data-table">
                <thead>
                  <tr>
                    <th class="th-radio text-center">ເລືອກ</th>
                    <th class="th-voucher">ເລກທີ & ວັນທີ</th>
                    <th class="th-ministry">ກົມ / ກະຊວງ</th>
                    <th class="th-receiver">ຜູ້ຮັບເງິນ / ຜູ້ເບີກ</th>
                    <th class="th-purpose">ຈຸດປະສົງ / ໝາຍເຫດ</th>
                    <th class="th-amount text-right">ມູນຄ່າທັງໝົດ</th>
                    <th class="th-settled text-right">ຊຳລະແລ້ວ</th>
                    <th class="th-outstanding text-right">ຍອດຍັງເຫຼືອທີ່ຊຳລະໄດ້</th>
                    <th class="th-status text-center">ສະຖານະ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="adv in filteredAdvances"
                    :key="adv.id"
                    :class="{ 'tr-selected': selectedAdvanceForBrowser?.id === adv.id }"
                    @click="selectAdvanceFromBrowser(adv)"
                    @dblclick="selectAndConfirmAdvance(adv)"
                  >
                    <td class="td-radio text-center">
                      <div class="custom-radio-dot" :class="{ active: selectedAdvanceForBrowser?.id === adv.id }">
                        <i v-if="selectedAdvanceForBrowser?.id === adv.id" class="fas fa-check"></i>
                      </div>
                    </td>
                    <td class="td-voucher">
                      <div class="voucher-id-tag">#{{ formatVoucherNumber(adv.id) }}</div>
                      <div class="voucher-date-text">{{ formatDateForDisplay(adv.bookingDate) }}</div>
                    </td>
                    <td class="td-ministry">
                      <div v-if="adv.ministry" class="ministry-cell">
                        <i class="fas fa-building text-muted mr-1"></i>
                        <span>{{ adv.ministry.ministryCode ? adv.ministry.ministryCode + ' - ' : '' }}{{ adv.ministry.ministryName }}</span>
                      </div>
                      <span v-else class="text-muted">ທົ່ວໄປ</span>
                    </td>
                    <td class="td-receiver">
                      <div class="receiver-cell">
                        <i class="fas fa-user text-muted mr-1"></i>
                        <span class="receiver-name">{{ adv.receiveName || adv.maker?.cus_name || adv.maker?.name || '-' }}</span>
                      </div>
                      <div v-if="adv.externalRefNo || adv.chequeNo" class="ref-subtext">
                        Ref: {{ adv.externalRefNo || adv.chequeNo }}
                      </div>
                    </td>
                    <td class="td-purpose" :title="adv.purpose || adv.note || ''">
                      <div class="purpose-cell-text">{{ adv.purpose || adv.note || '-' }}</div>
                    </td>
                    <td class="td-amount text-right">
                      <div class="amount-val">{{ formatAmountNumber(adv.amount) }}</div>
                      <div class="curr-val">{{ adv.currency?.code || adv.currencyCode || '' }}</div>
                    </td>
                    <td class="td-settled text-right">
                      <div class="settled-val">{{ formatAmountNumber(adv.totalSettled || 0) }}</div>
                      <div v-if="adv.settlementPercentage > 0" class="settled-percent">({{ adv.settlementPercentage }}%)</div>
                    </td>
                    <td class="td-outstanding text-right">
                      <div class="outstanding-main-val">
                        {{ formatAmountNumber(adv.outstandingAmount !== undefined ? adv.outstandingAmount : adv.amount) }}
                      </div>
                      <div class="outstanding-curr">{{ adv.currency?.code || adv.currencyCode || '' }}</div>
                    </td>
                    <td class="td-status text-center">
                      <span :class="['status-pill', adv.status]">
                        {{ formatStatus(adv.status) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- CARD GRID VIEW (Visual Overview) -->
            <div v-else class="browser-advance-grid">
              <div
                v-for="adv in filteredAdvances"
                :key="adv.id"
                class="browser-advance-card"
                :class="{
                  'is-selected': selectedAdvanceForBrowser?.id === adv.id,
                }"
                @click="selectAdvanceFromBrowser(adv)"
                @dblclick="selectAndConfirmAdvance(adv)"
              >
                <!-- Card Top Row -->
                <div class="card-top-row">
                  <div class="card-voucher-tag">
                    <i class="fas fa-file-invoice-dollar mr-1"></i>
                    #{{ formatVoucherNumber(adv.id) }}
                  </div>
                  <div class="card-status-badges">
                    <span :class="['status-pill', adv.status]">
                      {{ formatStatus(adv.status) }}
                    </span>
                    <span class="date-badge">
                      <i class="fas fa-calendar-day mr-1"></i>
                      {{ formatDateForDisplay(adv.bookingDate) }}
                    </span>
                  </div>
                </div>

                <!-- Card Main Details -->
                <div class="card-details-grid">
                  <div class="detail-item ministry-item" v-if="adv.ministry">
                    <i class="fas fa-building text-muted mr-1"></i>
                    <span class="detail-label">ກົມ:</span>
                    <span class="detail-val font-weight-bold">{{ adv.ministry.ministryCode ? adv.ministry.ministryCode + ' - ' : '' }}{{ adv.ministry.ministryName }}</span>
                  </div>
                  <div class="detail-item receiver-item" v-if="adv.receiveName || adv.maker">
                    <i class="fas fa-user text-muted mr-1"></i>
                    <span class="detail-label">ຜູ້ຮັບ/ຜູ້ເບີກ:</span>
                    <span class="detail-val">{{ adv.receiveName || adv.maker?.cus_name || adv.maker?.name || 'ບໍ່ລະບຸ' }}</span>
                  </div>
                </div>

                <!-- Card Purpose / Note -->
                <div class="card-purpose" v-if="adv.purpose || adv.note">
                  <i class="fas fa-comment-alt text-muted mr-1"></i>
                  <span>{{ adv.purpose || adv.note }}</span>
                </div>

                <!-- Card Financial Overview -->
                <div class="card-financial-summary">
                  <div class="fin-box total-box">
                    <span class="fin-label">ມູນຄ່າທັງໝົດ</span>
                    <span class="fin-val total-val">
                      {{ formatAmountNumber(adv.amount) }} {{ adv.currency?.code || adv.currencyCode || '' }}
                    </span>
                  </div>
                  <div class="fin-box settled-box">
                    <span class="fin-label">ຊຳລະແລ້ວ</span>
                    <span class="fin-val settled-val">
                      {{ formatAmountNumber(adv.totalSettled || 0) }}
                    </span>
                  </div>
                  <div class="fin-box outstanding-box">
                    <span class="fin-label">ຍັງເຫຼືອທີ່ຊຳລະໄດ້</span>
                    <span class="fin-val outstanding-val">
                      {{ formatAmountNumber(adv.outstandingAmount !== undefined ? adv.outstandingAmount : adv.amount) }} {{ adv.currency?.code || adv.currencyCode || '' }}
                    </span>
                  </div>
                </div>

                <!-- Settlement Progress Bar -->
                <div v-if="adv.totalSettled > 0" class="settlement-progress-wrap mt-2">
                  <div class="progress-bar-bg">
                    <div
                      class="progress-bar-fill"
                      :style="{ width: Math.min(100, adv.settlementPercentage || 0) + '%' }"
                    ></div>
                  </div>
                  <span class="progress-label">{{ adv.settlementPercentage || 0 }}% ຊຳລະແລ້ວ</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Advance Browser Footer -->
          <div class="modal-footer advance-browser-footer">
            <div class="selection-preview-bar">
              <template v-if="selectedAdvanceForBrowser">
                <div class="preview-selected-tag">
                  <i class="fas fa-check-circle text-success mr-2"></i>
                  <span>
                    ເລືອກ: <strong>#{{ formatVoucherNumber(selectedAdvanceForBrowser.id) }}</strong> -
                    <span class="receiver-txt">{{ selectedAdvanceForBrowser.receiveName || selectedAdvanceForBrowser.maker?.cus_name || '' }}</span>
                    - ຍັງເຫຼືອທີ່ຊຳລະໄດ້: <strong class="text-outstanding-badge">{{ formatAmountNumber(selectedAdvanceForBrowser.outstandingAmount !== undefined ? selectedAdvanceForBrowser.outstandingAmount : selectedAdvanceForBrowser.amount) }} {{ selectedAdvanceForBrowser.currency?.code || selectedAdvanceForBrowser.currencyCode || '' }}</strong>
                    <span v-if="selectedAdvanceForBrowser.ministry" class="text-muted ml-1">({{ selectedAdvanceForBrowser.ministry.ministryName }})</span>
                  </span>
                </div>
              </template>
              <span v-else class="text-muted">
                <i class="fas fa-info-circle mr-1"></i> ຄລິກເລືອກລາຍການໃນຕາຕະລາງ ຫຼື ດັບເບິລຄລິກເພື່ອຢືນຢັນທັນທີ
              </span>
            </div>

            <div class="footer-buttons">
              <button
                type="button"
                @click="closeAdvanceBrowser"
                class="btn-browser-cancel"
              >
                <i class="fas fa-times mr-1"></i> ຍົກເລີກ (Cancel)
              </button>
              <button
                type="button"
                @click="confirmAdvanceSelection"
                class="btn-select-confirm"
                :disabled="!selectedAdvanceForBrowser"
              >
                <i class="fas fa-check mr-1"></i> ຢືນຢັນເລືອກ (Select)
              </button>
            </div>
          </div>
        </div>
      </div>

    <!-- Voucher Print Component - MOVED OUTSIDE main modal -->
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

  emits: ['close', 'save', 'created', 'updated', 'cancelled'],

  data() {
    return {
      bookingDateMenu: false,
      pickerBookingDate: null, // for v-date-picker (YYYY-MM-DD format)
      formattedBookingDate: null, // for display (DD/MM/YYYY format)
      showPrintVoucher: false,
      settlementDetail: null,
      loading: false,
      isSubmitting: false, // New flag for submission state
      justCreated: false, // NEW: Flag to prevent form reset after creation
      checkingDuplicate: false,
      duplicateWarningInfo: null,
      duplicateCheckTimeout: null,
      loadingAdvances: false,
      showAdvanceBrowser: false,
      browserViewMode: 'table', // 'table' or 'grid'
      selectedAdvanceForBrowser: null,
      availableAdvances: [],
      filteredAdvances: [],
      advanceSearch: {
        query: '',
        ministryId: '',
        currencyId: '',
        status: '',
        fromDate: '',
        toDate: '',
      },
      advanceSearchTimeout: null,
      formData: {
        id: null,
        bookingDate: '',
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
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: '',
        isActive: true,
      },
      errors: {},
      formErrors: [],
    }
  },

  computed: {
    isBankTransfer() {
      return 'bank_transfer' == this.formData.method
    },
    isEditMode() {
      return (
        (this.settlement && this.settlement.id) ||
        (this.formData.id && this.justCreated)
      )
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
      if (!this._isInitializing)
        this.formData.exchangeRate = currency?.rate || 1

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
      const filtered = this.bankAccounts.filter(
        (account) => account.isActive !== false
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
        hasSettlementDate: !!this.formData.bookingDate,
        hasMethod: !!this.formData.method,
        hasUsers: this.users.length > 0,
        hasCurrencies: this.currencies.length > 0,
        bankAccountValid:
          this.formData.method !== 'bank_transfer' ||
          !!this.formData.bankAccountId,
        exchangeRateValid:
          !this.formData.exchangeRate || this.formData.exchangeRate > 0,
        chequeNoValid:
          this.formData.method !== 'cheque' || !!this.formData.chequeNo,
        fromPersonNameValid:
          (this.formData.method !== 'cash' &&
            this.formData.method !== 'cheque') ||
          !!this.formData.fromPersonName,
      }

      return Object.values(validations).every((v) => v === true)
    },

    isCancelled() {
      return (
        this.formData.isActive === false ||
        this.formData.isActive === 0 ||
        this.formData.isActive === 'false'
      )
    },

    isFormDisabled() {
      return (
        this.loading ||
        this.isSubmitting ||
        (this.isEditMode && this.isCancelled)
      )
    },
  },

  watch: {
    visible(newVal) {
      if (newVal) {
        this.justCreated = false // Reset flag when dialog opens
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
        this.debounceCheckDuplicate()
      }
    },

    'formData.amount'() {
      this.debounceCheckDuplicate()
    },

    'formData.ministryId'(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.debounceCheckDuplicate()
        // Automatically set ministry filter for advances when ministry in settlement changes
        this.advanceSearch.ministryId = newVal || ''
        if (this.formData.linkToAdvance === 'true') {
          this.loadMoneyAdvances()
        }
      }
    },

    'formData.bookingDate'() {
      this.debounceCheckDuplicate()
    },

    settlement: {
      handler(newVal, oldVal) {
        if (
          this.visible &&
          newVal !== oldVal &&
          !this.isSubmitting &&
          !this.justCreated
        ) {
          this.$nextTick(() => {
            this.initializeForm()
          })
        }
      },
      deep: true,
      immediate: false,
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
      if (newVal === 'true') {
        // When linking to payment advance, default ministry filter to settlement's defined ministry
        if (this.formData.ministryId) {
          this.advanceSearch.ministryId = this.formData.ministryId
        }
        this.loadMoneyAdvances()
      } else if (newVal === 'false' && oldVal === 'true') {
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

  mounted() {
    // Debug carousel references
    console.log('Refs available:', Object.keys(this.$refs))
    this.checkForCarouselCode()
  },

  beforeDestroy() {
    document.body.style.overflow = 'auto'
    this.isSubmitting = false
    this.loading = false
    if (this.duplicateCheckTimeout) {
      clearTimeout(this.duplicateCheckTimeout)
      this.duplicateCheckTimeout = null
    }
    if (this.advanceSearchTimeout) {
      clearTimeout(this.advanceSearchTimeout)
      this.advanceSearchTimeout = null
    }
    this.cleanupEventListeners()
  },

  methods: {
    // Date formatting method
    formatDateForDisplay(date) {
      if (!date) return null
      const d = new Date(date)
      const day = String(d.getDate()).padStart(2, '0')
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const year = d.getFullYear()
      return `${day}/${month}/${year}`
    },

    // Set booking date from picker
    setBookingDate(val) {
      this.pickerBookingDate = val
      this.formData.bookingDate = val // Keep YYYY-MM-DD format for backend
      this.formattedBookingDate = this.formatDateForDisplay(val)
      this.bookingDateMenu = false

      // Clear any existing error
      this.clearFieldError('bookingDate')
    },

    // Clear booking date
    clearBookingDate() {
      this.pickerBookingDate = null
      this.formData.bookingDate = ''
      this.formattedBookingDate = null
      this.clearFieldError('bookingDate')
    },
    // Debug methods for carousel issue
    checkForCarouselCode() {
      const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      const carouselMethods = methods.filter(
        (method) =>
          method.toLowerCase().includes('carousel') ||
          method.toLowerCase().includes('next') ||
          method.toLowerCase().includes('prev')
      )

      if (carouselMethods.length > 0) {
        console.warn(
          'Found potential carousel-related methods:',
          carouselMethods
        )
      }
    },

    cleanupEventListeners() {
      try {
        document.removeEventListener('keydown', this.handleKeydown)
        window.removeEventListener('resize', this.handleResize)
      } catch (error) {
        console.warn('Error cleaning up event listeners:', error)
      }
    },

    // Override potential carousel methods
    nextSlide() {
      console.warn('nextSlide called but no carousel exists')
    },

    prevSlide() {
      console.warn('prevSlide called but no carousel exists')
    },

    formatVoucherNumber(id) {
      return String(id).padStart(5, '0')
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
        console.info(
          `Settlement detail ${JSON.stringify(this.settlementDetail)}`
        )
      } catch (error) {
        this.showToast('Error fetching settlement details', 'error')
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
      await this.saveSettlement()
      await this.fetchSettlementByid()
      this.showPrintVoucher = true
    },

    initializeForm() {
      console.info(`INITIALY DATA BEING CALLED ..... `)
      if (this.isSubmitting) {
        return
      }

      // Don't reinitialize if we just created a record
      if (this.justCreated && this.formData.id) {
        console.log('Skipping form initialization - record was just created')
        return
      }

      this._isInitializing = true

      try {
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
            bookingDate: this.settlement.bookingDate
              ? this.settlement.bookingDate.split('T')[0]
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
            externalRef: this.settlement.externalRef || '',
            externalRefNo: this.settlement.externalRefNo || '',
            chequeNo: this.settlement.chequeNo || '',
            fromPersonName: this.settlement.fromPersonName || '',
            isActive:
              this.settlement.isActive !== undefined
                ? this.settlement.isActive === true ||
                  this.settlement.isActive === 1 ||
                  this.settlement.isActive === 'true'
                : true,
          }

          // Set date picker values for existing settlement
          if (this.formData.bookingDate) {
            this.pickerBookingDate = this.formData.bookingDate
            this.formattedBookingDate = this.formatDateForDisplay(
              this.formData.bookingDate
            )
          }

          if (this.formData.linkToAdvance === 'true') {
            this.$nextTick(() => {
              this.waitForAdvancesAndSync()
            })
          }
        } else {
          // New settlement
          const todayDate = this.today

          this.formData = {
            id: null,
            bookingDate: todayDate,
            method: this.paymentMethod,
            amount: null,
            currencyId: '',
            exchangeRate: 1,
            bankAccountId: '',
            ministryId: '',
            chartAccountId: '',
            userId: this.user?.id || '',
            notes: '',
            selectedInvoices: [],
            linkToAdvance: 'false',
            moneyAdvanceId: '',
            externalRef: '',
            externalRefNo: '',
            chequeNo: '',
            fromPersonName: '',
            isActive: true,
          }

          // Set date picker values for new settlement
          this.pickerBookingDate = todayDate
          this.formattedBookingDate = this.formatDateForDisplay(todayDate)

          if (this.currencies.length > 0) {
            const defaultCurrency =
              this.currencies.find(
                (c) => (c.code || c.currencyCode) === 'LAK'
              ) || this.currencies[0]
            this.formData.currencyId = defaultCurrency.id
          }
        }

        // Set advance search ministry default from settlement ministry if defined
        if (this.formData.ministryId) {
          this.advanceSearch.ministryId = this.formData.ministryId
        }

        this.errors = {}
        this.formErrors = []
      } catch (error) {
        console.error('Error initializing form:', error)
        this.showToast('Error initializing form', 'error')
      } finally {
        this.$nextTick(() => {
          this._isInitializing = false
        })
      }
      console.info(
        `SETTLEMENT AFTER INITIALIZATION: ${JSON.stringify(this.formData)}`
      )
    },

    // Update resetForm method
    resetForm() {
      if (this.isSubmitting) {
        return
      }

      this.formData = {
        id: null,
        bookingDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1,
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: this.user?.id || '',
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: '',
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: '',
        isActive: true,
      }

      // Clear date picker values
      this.pickerBookingDate = null
      this.formattedBookingDate = null
      this.bookingDateMenu = false

      this.errors = {}
      this.formErrors = []
      this.loading = false
      this.isSubmitting = false
      this.justCreated = false
      this.duplicateWarningInfo = null
      if (this.duplicateCheckTimeout) {
        clearTimeout(this.duplicateCheckTimeout)
        this.duplicateCheckTimeout = null
      }

      if (this.showAdvanceBrowser) {
        this.closeAdvanceBrowser()
      }
    },

    // Cancel Transaction Methods
    async confirmCancelTransaction() {
      if (!this.formData.id) return

      let confirmed = false
      const voucherNum = this.formatVoucherNumber(this.formData.id)

      if (this.$swal) {
        const result = await this.$swal.fire({
          title: 'ຢືນຢັນການຍົກເລີກທຸລະກຳ?',
          text: `ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການຍົກເລີກທຸລະກຳເລກທີ #${voucherNum}? (Are you sure you want to cancel this settlement transaction?)`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'ແມ່ນ, ຍົກເລີກທຸລະກຳ',
          cancelButtonText: 'ບໍ່, ກັບຄືນ',
        })
        confirmed = result.isConfirmed
      } else {
        confirmed = window.confirm(
          `ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການຍົກເລີກທຸລະກຳເລກທີ #${voucherNum}?`
        )
      }

      if (!confirmed) return

      await this.cancelSettlement()
    },

    async cancelSettlement() {
      if (!this.formData.id) return

      this.isSubmitting = true
      this.loading = true

      try {
        const response = await this.$axios.put(
          `/api/settlements/${this.formData.id}`,
          {
            ...this.formData,
            isActive: false,
          }
        )

        this.formData.isActive = false
        const updatedData =
          response.data?.data || { ...this.formData, isActive: false }

        this.$emit('updated', updatedData)
        this.$emit('cancelled', updatedData)
        this.showToast(
          'ຍົກເລີກທຸລະກຳການຊຳລະສຳເລັດແລ້ວ (Settlement cancelled successfully)',
          'success'
        )
      } catch (error) {
        console.error('Error cancelling settlement:', error)
        this.showToast(
          error.response?.data?.message ||
            'ບໍ່ສາມາດຍົກເລີກທຸລະກຳໄດ້ (Failed to cancel transaction)',
          'error'
        )
      } finally {
        this.isSubmitting = false
        this.loading = false
      }
    },

    async restoreSettlement() {
      if (!this.formData.id) return

      this.isSubmitting = true
      this.loading = true

      try {
        const response = await this.$axios.put(
          `/api/settlements/${this.formData.id}`,
          {
            ...this.formData,
            isActive: true,
          }
        )

        this.formData.isActive = true
        const updatedData =
          response.data?.data || { ...this.formData, isActive: true }

        this.$emit('updated', updatedData)
        this.showToast(
          'ກູ້ຄືນທຸລະກຳການຊຳລະສຳເລັດແລ້ວ (Settlement restored successfully)',
          'success'
        )
      } catch (error) {
        console.error('Error restoring settlement:', error)
        this.showToast(
          error.response?.data?.message ||
            'ບໍ່ສາມາດກູ້ຄືນທຸລະກຳໄດ້ (Failed to restore transaction)',
          'error'
        )
      } finally {
        this.isSubmitting = false
        this.loading = false
      }
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

    async loadMoneyAdvances(customParams = {}) {
      this.loadingAdvances = true

      try {
        const params = {
          status: this.advanceSearch.status || ['pending', 'approved'],
          limit: 200,
          ...customParams,
        }

        if (this.advanceSearch.query && this.advanceSearch.query.trim()) {
          params.search = this.advanceSearch.query.trim()
        }
        if (this.advanceSearch.ministryId) {
          params.ministryId = this.advanceSearch.ministryId
        }
        if (this.advanceSearch.currencyId) {
          params.currencyId = this.advanceSearch.currencyId
        }
        if (this.advanceSearch.fromDate) {
          params.fromDate = this.advanceSearch.fromDate
        }
        if (this.advanceSearch.toDate) {
          params.toDate = this.advanceSearch.toDate
        }
        if (this.formData.moneyAdvanceId) {
          params.include_advance_id = this.formData.moneyAdvanceId
        }

        const { data } = await this.$axios.get(
          '/api/money-advances/available-for-settlement',
          { params }
        )

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

        this.applyFrontendAdvanceFilters()
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
      if (this.selectedAdvance) {
        const remain =
          this.selectedAdvance.outstandingAmount !== undefined
            ? this.selectedAdvance.outstandingAmount
            : this.selectedAdvance.amount
        if (remain && (!this.formData.amount || this.formData.amount <= 0)) {
          this.formData.amount = remain
        }
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
      // Default filter to settlement's defined ministry
      if (this.formData.ministryId) {
        this.advanceSearch.ministryId = this.formData.ministryId
      }
      // If form has currency selected and advance search has none, pre-populate
      if (this.formData.currencyId && !this.advanceSearch.currencyId) {
        this.advanceSearch.currencyId = this.formData.currencyId
      }
      this.showAdvanceBrowser = true
      this.selectedAdvanceForBrowser = this.selectedAdvance
      this.loadMoneyAdvances()
      document.body.style.overflow = 'hidden'
    },

    closeAdvanceBrowser() {
      this.showAdvanceBrowser = false
      this.selectedAdvanceForBrowser = null
      if (this.advanceSearchTimeout) {
        clearTimeout(this.advanceSearchTimeout)
        this.advanceSearchTimeout = null
      }
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

    selectAndConfirmAdvance(advance) {
      this.selectedAdvanceForBrowser = advance
      this.confirmAdvanceSelection()
    },

    confirmAdvanceSelection() {
      if (this.selectedAdvanceForBrowser) {
        this.formData.moneyAdvanceId = this.selectedAdvanceForBrowser.id
        // Auto-fill ministry if not yet set in settlement
        if (
          this.selectedAdvanceForBrowser.ministryId &&
          !this.formData.ministryId
        ) {
          this.formData.ministryId = this.selectedAdvanceForBrowser.ministryId
        }

        this.closeAdvanceBrowser()

        this.$nextTick(() => {
          this.syncCurrencyFromAdvance()
          this.syncAmountFromAdvance()
        })
      }
    },

    debounceSearchAdvances() {
      this.applyFrontendAdvanceFilters()
      if (this.advanceSearchTimeout) {
        clearTimeout(this.advanceSearchTimeout)
      }
      this.advanceSearchTimeout = setTimeout(() => {
        this.loadMoneyAdvances()
      }, 400)
    },

    onFilterChange() {
      this.applyFrontendAdvanceFilters()
      this.loadMoneyAdvances()
    },

    clearSearchQuery() {
      this.advanceSearch.query = ''
      this.onFilterChange()
    },

    resetAdvanceFilters() {
      this.advanceSearch = {
        query: '',
        ministryId: this.formData.ministryId || '',
        currencyId: '',
        status: '',
        fromDate: '',
        toDate: '',
      }
      this.loadMoneyAdvances()
    },

    searchAdvances() {
      this.debounceSearchAdvances()
    },

    filterAdvances() {
      this.onFilterChange()
    },

    applyFrontendAdvanceFilters() {
      let filtered = [...this.availableAdvances]

      if (this.advanceSearch.status) {
        filtered = filtered.filter(
          (advance) => advance.status === this.advanceSearch.status
        )
      }

      if (this.advanceSearch.ministryId) {
        filtered = filtered.filter(
          (advance) =>
            advance.ministryId == this.advanceSearch.ministryId ||
            advance.ministry?.id == this.advanceSearch.ministryId
        )
      }

      if (this.advanceSearch.currencyId) {
        filtered = filtered.filter(
          (advance) =>
            advance.currencyId == this.advanceSearch.currencyId ||
            advance.currency?.id == this.advanceSearch.currencyId
        )
      }

      if (this.advanceSearch.fromDate) {
        filtered = filtered.filter(
          (advance) => advance.bookingDate >= this.advanceSearch.fromDate
        )
      }

      if (this.advanceSearch.toDate) {
        filtered = filtered.filter(
          (advance) => advance.bookingDate <= this.advanceSearch.toDate
        )
      }

      if (this.advanceSearch.query) {
        const query = this.advanceSearch.query.toLowerCase().trim()
        const queryNum = query.replace(/[^0-9]/g, '')
        filtered = filtered.filter((advance) => {
          const idMatch =
            advance.id.toString().includes(query) ||
            (queryNum && advance.id.toString() === queryNum)
          const purposeMatch =
            advance.purpose && advance.purpose.toLowerCase().includes(query)
          const noteMatch =
            advance.note && advance.note.toLowerCase().includes(query)
          const receiverMatch =
            advance.receiveName &&
            advance.receiveName.toLowerCase().includes(query)
          const ministryMatch =
            advance.ministry?.ministryName &&
            advance.ministry.ministryName.toLowerCase().includes(query)
          const refMatch =
            (advance.externalRef &&
              advance.externalRef.toLowerCase().includes(query)) ||
            (advance.externalRefNo &&
              advance.externalRefNo.toLowerCase().includes(query)) ||
            (advance.chequeNo &&
              advance.chequeNo.toLowerCase().includes(query))
          return (
            idMatch ||
            purposeMatch ||
            noteMatch ||
            receiverMatch ||
            ministryMatch ||
            refMatch
          )
        })
      }

      this.filteredAdvances = filtered
    },

    validateForm() {
      this.errors = {}
      this.formErrors = []

      try {
        // Required fields validation
        if (!this.formData.bookingDate) {
          this.errors.bookingDate = 'ກະລຸນາເລືອກວັນທີ'
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

        if (this.formData.method === 'cheque' && !this.formData.chequeNo) {
          this.errors.chequeNo = 'ກະລຸນາໃສ່ເລກເຊັກ'
          this.formErrors.push('ເລກເຊັກ ແມ່ນຈຳເປັນສຳລັບການຊຳລະດ້ວຍເຊັກ')
        }

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
          if (
            advanceCurrency &&
            this.formData.currencyId != advanceCurrency.id
          ) {
            this.errors.currencyId = 'ສະກຸນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າ'
            this.formErrors.push('ສະກຸນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າທີ່ເລືອກ')
          }

          // Check if advance amount matches
          if (
            this.selectedAdvance.amount &&
            Math.abs(this.formData.amount - this.selectedAdvance.amount) > 0.01
          ) {
            this.errors.amount = 'ຈຳນວນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າ'
            this.formErrors.push('ຈຳນວນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າທີ່ເລືອກ')
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
      } catch (error) {
        console.error('Validation error:', error)
        this.formErrors.push('ເກີດຂໍ້ຜິດພາດໃນການກວດສອບຟອມ')
        return false
      }
    },

    clearFieldError(fieldName) {
      if (this.errors[fieldName]) {
        this.$delete(this.errors, fieldName)
      }
    },

    debounceCheckDuplicate() {
      if (this.duplicateCheckTimeout) {
        clearTimeout(this.duplicateCheckTimeout)
      }
      this.duplicateCheckTimeout = setTimeout(() => {
        this.checkDuplicateLive()
      }, 500)
    },

    async checkDuplicateLive() {
      if (
        !this.formData.amount ||
        parseFloat(this.formData.amount) <= 0 ||
        !this.formData.currencyId
      ) {
        this.duplicateWarningInfo = null
        return
      }

      try {
        const result = await this.performDuplicateCheck()
        if (result && result.isDuplicate && result.duplicates.length > 0) {
          this.duplicateWarningInfo = {
            count: result.count,
            dateRange: result.dateRange,
            duplicates: result.duplicates,
            ids: result.duplicates.map((d) => String(d.id).padStart(5, '0')),
          }
        } else {
          this.duplicateWarningInfo = null
        }
      } catch (err) {
        console.warn('Duplicate settlement check live warning error:', err)
      }
    },

    async performDuplicateCheck() {
      if (!this.formData.amount || !this.formData.currencyId) {
        return { isDuplicate: false, duplicates: [] }
      }

      const params = {
        amount: this.formData.amount,
        currencyId: this.formData.currencyId,
        ministryId: this.formData.ministryId || undefined,
        bookingDate: this.formData.bookingDate || undefined,
        excludeId:
          this.isEditMode && this.formData.id ? this.formData.id : undefined,
      }

      try {
        const response = await this.$axios.get(
          '/api/settlements/check-duplicate',
          { params }
        )
        if (response.data && response.data.success) {
          return response.data
        }
        return { isDuplicate: false, duplicates: [] }
      } catch (error) {
        console.warn('Duplicate settlement check API failed:', error)
        return { isDuplicate: false, duplicates: [] }
      }
    },

    async promptDuplicateOverrideConfirmation(duplicates) {
      const duplicateItemsHtml = duplicates
        .map(
          (d) => `
        <div style="text-align: left; background: #fff8e1; border: 1px solid #ffe082; border-left: 5px solid #ffb300; padding: 10px 14px; margin-bottom: 8px; border-radius: 6px; font-size: 13px; color: #5d4037; line-height: 1.6;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #ffd54f; padding-bottom: 4px; margin-bottom: 4px;">
            <span style="font-weight: 700; color: #e65100;">ເລກທີ (Voucher): #${String(
              d.id
            ).padStart(5, '0')}</span>
            <span style="background: #ffecb3; padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 600; text-transform: uppercase;">${
              d.method || 'SETTLEMENT'
            }</span>
          </div>
          <div>📅 <strong>ວັນທີ (Date):</strong> ${this.formatDateForDisplay(
            d.bookingDate
          )}</div>
          <div>💰 <strong>ຈຳນວນເງິນ (Amount):</strong> <span style="font-weight: 700; color: #c62828;">${this.formatAmountNumber(
            d.amount
          )} ${d.currencyCode || ''}</span></div>
          ${
            d.ministryName
              ? `<div>🏢 <strong>ກົມ (Ministry):</strong> ${d.ministryName}</div>`
              : ''
          }
          ${
            d.notes
              ? `<div>📝 <strong>ໝາຍເຫດ (Notes):</strong> ${d.notes}</div>`
              : ''
          }
          ${
            d.proceederName
              ? `<div>👤 <strong>ຜູ້ລົງ (Proceeder):</strong> ${d.proceederName}</div>`
              : ''
          }
        </div>
      `
        )
        .join('')

      const result = await this.$swal({
        title: '⚠️ ແຈ້ງເຕືອນລາຍການຊ້ຳຊ້ອນ',
        html: `
          <div style="font-size: 13.5px; text-align: left; margin-bottom: 8px;">
            <div style="color: #b71c1c; font-weight: 600; margin-bottom: 10px; background: #ffebee; padding: 8px 12px; border-radius: 4px; border-left: 4px solid #ef5350;">
              ພົບການຊຳລະທີ່ມີມູນຄ່າ, ສະກຸນເງິນ ແລະ ກົມດຽວກັນໃນເດືອນນີ້/ເດືອນຜ່ານມາ (${duplicates.length} ລາຍການ):
            </div>
            <div style="max-height: 240px; overflow-y: auto; padding-right: 4px;">
              ${duplicateItemsHtml}
            </div>
            <div style="margin-top: 12px; padding: 10px; background: #f5f5f5; border-radius: 6px; font-weight: 600; color: #263238; font-size: 13px; text-align: center;">
              ທ່ານຕ້ອງການດຳເນີນການບັນທຶກຕໍ່ ຫຼື ບໍ່?<br/>
              <span style="font-size: 11px; color: #78909c; font-weight: normal;">(ລະບົບຈະບັນທຶກປະຫວັດ Override Log ລົງໃນຖານຂໍ້ມູນ)</span>
            </div>
          </div>
        `,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'ຍົກເລີກ (Cancel)',
        confirmButtonText: 'ຢືນຢັນບັນທຶກຕໍ່ (Proceed)',
        confirmButtonColor: '#fb8c00',
        cancelButtonColor: '#78909c',
        allowOutsideClick: false,
        allowEscapeKey: false,
      })

      return result.isConfirmed
    },

    formatAmountNumber(amount) {
      if (!amount && amount !== 0) return '0'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
    },

    // FIXED saveSettlement method
    async saveSettlement() {
      if (!this.validateForm() || this.isSubmitting) {
        return
      }

      // Check for duplicate settlement entry before final save
      this.checkingDuplicate = true
      let duplicateOverrideData = {}
      try {
        const duplicateCheck = await this.performDuplicateCheck()
        if (
          duplicateCheck &&
          duplicateCheck.isDuplicate &&
          duplicateCheck.duplicates.length > 0
        ) {
          const confirmed = await this.promptDuplicateOverrideConfirmation(
            duplicateCheck.duplicates
          )
          if (!confirmed) {
            this.checkingDuplicate = false
            return // User cancelled
          }
          duplicateOverrideData = {
            isDuplicateOverride: true,
            matchedSettlementIds: duplicateCheck.duplicates.map((d) => d.id),
            overrideReason:
              'User confirmed duplicate settlement creation after warning',
            overrideMessage: `User acknowledged duplicate warning and confirmed saving settlement of ${this.formatAmountNumber(
              this.formData.amount
            )} ${
              this.selectedCurrencyCode || ''
            } matching existing records: ${duplicateCheck.duplicates
              .map((d) => '#' + String(d.id).padStart(5, '0'))
              .join(', ')}`,
          }
        }
      } catch (dupErr) {
        console.warn('Duplicate check prompt error:', dupErr)
      } finally {
        this.checkingDuplicate = false
      }

      // Prevent double submission
      this.isSubmitting = true
      this.loading = true

      try {
        const submitData = {
          ...this.formData,
          ...duplicateOverrideData,
          selectedInvoices:
            this.formData.method === 'deduction'
              ? this.formData.selectedInvoices
              : [],
          bookingDate: this.formData.bookingDate,
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

        let response
        let isNewRecord = !this.formData.id

        if (isNewRecord) {
          // Creating new settlement
          console.info(
            `SETTLEMENT BEFORE SAVE ${JSON.stringify(this.formData)}`
          )
          response = await this.$axios.post('/api/settlements', submitData)
          console.info(`RESPONSE DATA ${JSON.stringify(response.data)}`)

          if (response.data && response.data.data) {
            // Update form data with the new ID
            this.formData.id = response.data.data.id
            this.formData.bookingDate = response.data.data.bookingDate

            // Emit created event to parent component
            this.$emit('created', response.data.data)

            this.showToast('Money settlement created successfully', 'success')
          }
          console.info(`SETTLEMENT AFTER SAVE ${JSON.stringify(this.formData)}`)
        } else {
          // Updating existing settlement
          response = await this.$axios.put(
            `/api/settlements/${this.formData.id}`,
            submitData
          )
          console.info(`UPDATE RESPONSE DATA ${JSON.stringify(response.data)}`)

          if (response.data && response.data.data) {
            // Emit updated event to parent with updated data
            this.$emit('updated', response.data.data)
            this.showToast('Money settlement updated successfully', 'success')
          }
        }

        // Clear any validation errors on successful save
        this.errors = {}
        this.formErrors = []
      } catch (error) {
        console.error('Form submission error:', error)

        // Clear previous form errors
        this.formErrors = []

        // Handle different types of errors
        if (error.response) {
          // Server responded with error status
          const status = error.response.status
          const errorData = error.response.data

          if (status === 422 && errorData.errors) {
            // Validation errors from server
            Object.keys(errorData.errors).forEach((field) => {
              this.errors[field] = errorData.errors[field][0]
              this.formErrors.push(`${field}: ${errorData.errors[field][0]}`)
            })
          } else if (status === 409) {
            // Conflict error
            this.formErrors.push(
              'ມີການຂັດແຍ້ງກັບຂໍ້ມູນທີ່ມີຢູ່ແລ້ວ. ກະລຸນາລອງໃໝ່.'
            )
          } else if (status === 404) {
            // Not found error
            this.formErrors.push('ບໍ່ພົບຂໍ້ມູນທີ່ຕ້ອງການ. ກະລຸນາລອງໃໝ່.')
          } else {
            // Other server errors
            this.formErrors.push(
              errorData.message || 'ເກີດຂໍ້ຜິດພາດຈາກເຊີເວີ. ກະລຸນາລອງໃໝ່.'
            )
          }
        } else if (error.request) {
          // Network error
          this.formErrors.push(
            'ບໍ່ສາມາດເຊື່ອມຕໍ່ເຊີເວີໄດ້. ກະລຸນາກວດສອບການເຊື່ອມຕໍ່ອິນເຕີເນັດ.'
          )
        } else {
          // Other errors
          this.formErrors.push('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ. ກະລຸນາລອງໃໝ່.')
        }

        // Show error toast
        this.showToast(this.formErrors[0] || 'ເກີດຂໍ້ຜິດພາດ', 'error')
      } finally {
        this.loading = false
        this.isSubmitting = false
      }
    },

    closeDialog() {
      if (this.isSubmitting) {
        // Confirm if user wants to cancel during submission
        if (
          confirm(
            'Are you sure you want to cancel? The form is currently being submitted.'
          )
        ) {
          this.isSubmitting = false
          this.loading = false
          this.justCreated = false // Reset flag when closing
        } else {
          return
        }
      } else {
        this.justCreated = false // Reset flag when closing
      }

      this.$emit('close')
    },

    handleOverlayClick(event) {
      // Only close if clicking directly on overlay, not on child elements
      if (event.target === event.currentTarget && !this.isSubmitting) {
        this.closeDialog()
      }
    },

    // Utility methods
    formatCurrency(amount, currency = 'LAK', locale = 'en-US', options = {}) {
      let num = amount
      if (typeof num === 'string') {
        num = parseFloat(num)
      }
      if (typeof num !== 'number' || isNaN(num)) {
        num = 0
      }

      let ccyCode = 'LAK'
      if (typeof currency === 'string' && currency.trim()) {
        ccyCode = currency.trim().toUpperCase()
      } else if (currency && typeof currency === 'object') {
        ccyCode = (currency.code || currency.currencyCode || 'LAK').toUpperCase()
      }

      const defaultOptions = {
        style: 'currency',
        currency: ccyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
        ...options,
      }

      try {
        return new Intl.NumberFormat(locale, defaultOptions).format(num)
      } catch (error) {
        return `${ccyCode} ${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
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
/* Status Indicators in Header */
.status-indicator {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 12px;
  margin-right: 8px;
}

.active-indicator {
  background-color: rgba(255, 255, 255, 0.2);
  color: #e6fffa;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.cancelled-indicator {
  background-color: #ffebee;
  color: #c62828;
  border: 1px solid #ef9a9a;
  font-weight: 700;
}

/* Cancelled Alert Banner */
.cancelled-banner {
  background-color: #fff5f5;
  border: 1px solid #feb2b2;
  border-left: 5px solid #e53e3e;
  border-radius: 6px;
  padding: 10px 14px;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.banner-icon {
  font-size: 22px;
  color: #e53e3e;
}

.banner-text {
  flex: 1;
}

.banner-title {
  font-weight: 700;
  color: #c53030;
  font-size: 13px;
}

.banner-desc {
  font-size: 11px;
  color: #742a2a;
  margin-top: 2px;
}

.btn-restore-banner {
  background-color: #38a169;
  color: #ffffff;
  border: none;
  padding: 5px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.btn-restore-banner:hover {
  background-color: #2f855a;
}

/* Cancel / Restore Transaction Buttons in Footer */
.btn-cancel-txn {
  background-color: #e53e3e;
  color: #ffffff;
  border: none;
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s;
}

.btn-cancel-txn:hover:not(:disabled) {
  background-color: #c53030;
}

.btn-cancel-txn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-restore-txn {
  background-color: #38a169;
  color: #ffffff;
  border: none;
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s;
}

.btn-restore-txn:hover:not(:disabled) {
  background-color: #2f855a;
}

.btn-restore-txn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Updated compact date field styles to match form controls exactly */
.compact-date-field {
  font-size: 13px !important;
}

.compact-date-field .v-input__control {
  min-height: 40px !important;
  max-height: 40px !important;
}

.compact-date-field .v-input__slot {
  padding: 0 12px !important;
  min-height: 40px !important;
  max-height: 40px !important;
  align-items: center !important;
}

.compact-date-field .v-text-field__details {
  display: none !important; /* Hide details section completely */
}

.compact-date-field .v-input__icon--prepend-inner {
  margin-top: 0 !important;
  margin-right: 8px !important;
  align-self: center !important;
}

.compact-date-field .v-input__icon--append {
  margin-top: 0 !important;
  margin-left: 8px !important;
  align-self: center !important;
}

.compact-date-field .v-text-field__slot {
  align-items: center !important;
  min-height: 38px !important;
  max-height: 38px !important;
}

.compact-date-field input {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 13px !important;
  line-height: 1.2 !important;
  height: 38px !important;
}

/* Override Vuetify outline to match your form style exactly */
.compact-date-field .v-text-field--outlined .v-input__control .v-input__slot {
  border: 2px solid #e5e7eb !important;
  border-radius: 6px !important;
  background: #fafafa !important;
}

.compact-date-field.v-text-field--outlined .v-input__control .v-input__slot {
  border: 2px solid #e5e7eb !important;
  border-radius: 6px !important;
  background: #fafafa !important;
}

.compact-date-field
  .v-text-field--outlined.v-input--is-focused
  .v-input__control
  .v-input__slot {
  border-color: #667eea !important;
  background: white !important;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1) !important;
}

.compact-date-field.v-input--is-focused .v-input__slot {
  border-color: #667eea !important;
  background: white !important;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1) !important;
}

.compact-date-field
  .v-text-field--outlined.v-input--is-disabled
  .v-input__control
  .v-input__slot {
  background-color: #f3f4f6 !important;
  border-color: #d1d5db !important;
}

.compact-date-field.v-input--is-disabled .v-input__slot {
  background-color: #f3f4f6 !important;
  border-color: #d1d5db !important;
}

.compact-date-field.error--text
  .v-text-field--outlined
  .v-input__control
  .v-input__slot {
  border-color: #e74c3c !important;
}

/* Remove the fieldset border that Vuetify adds */
.compact-date-field .v-text-field--outlined fieldset {
  border: none !important;
}

.compact-date-field .v-text-field--outlined .v-text-field__details {
  display: none !important;
}

/* Date picker menu styling */
.v-menu__content {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
  border-radius: 8px !important;
  overflow: hidden !important;
}

.v-date-picker {
  box-shadow: none !important;
}

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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e9ecef;
  background: linear-gradient(135deg, #01532B 0%, #1e7e48 100%);
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

.close-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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
  align-items: center;
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
  padding: 8px 12px;
  background: #f0fdf4;
  border-radius: 6px;
  border: 1px solid #bbf7d0;
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
  color: #01532B;
  background: #e8f5e9;
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
  background-color: #01532B !important;
  color: #ffffff !important;
  border: 1px solid #014222 !important;
}

.btn-primary:hover:not(:disabled) {
  background-color: #014222 !important;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-outline-primary {
  background: transparent !important;
  border: 1.5px solid #01532B !important;
  color: #01532B !important;
  border-radius: 6px;
}

.btn-outline-primary:hover {
  background: #01532B !important;
  color: white !important;
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

/* Advance Browser Modal & Criteria Filter Styles (Enhanced Layout) */
.advance-browser-dialog {
  max-width: 1120px;
  width: 96%;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
  background: #ffffff;
}

.advance-browser-header {
  background: linear-gradient(135deg, #01532B 0%, #1e7e48 100%);
  color: #ffffff;
  padding: 14px 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}

.advance-browser-header .modal-title {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2px;
}

.browser-subtitle {
  font-size: 11.5px;
  color: #e8f5e9;
  display: block;
  opacity: 0.9;
}

.advance-browser-filters {
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  padding: 14px 20px 12px 20px;
  flex-shrink: 0;
}

.browser-filter-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-end;
}

.filter-col {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.col-search {
  flex: 2;
  min-width: 240px;
}

.col-ministry {
  flex: 1.6;
  min-width: 200px;
}

.col-currency {
  width: 120px;
}

.col-date {
  width: 145px;
}

.col-status {
  width: 150px;
}

.col-actions {
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 0;
}

.filter-label {
  font-size: 11.5px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.filter-label i {
  color: #01532B;
  font-size: 11px;
}

.browser-search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.search-input-icon {
  position: absolute;
  left: 12px;
  color: #94a3b8;
  font-size: 13px;
  pointer-events: none;
  z-index: 2;
}

.browser-search-input {
  width: 100%;
  height: 38px;
  padding: 8px 32px 8px 36px;
  border-radius: 6px;
  font-size: 12.5px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #1e293b;
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 0.2s ease;
}

.browser-search-input:focus {
  border-color: #01532B;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(1, 83, 43, 0.15);
  outline: none;
}

.clear-search-btn {
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 4px 6px;
  font-size: 12px;
  border-radius: 4px;
  z-index: 2;
}

.clear-search-btn:hover {
  color: #1e293b;
  background: #e2e8f0;
}

.browser-filter-select,
.browser-filter-input {
  width: 100%;
  height: 38px;
  border-radius: 6px;
  font-size: 12.5px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #1e293b;
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 0.2s ease;
}

.browser-filter-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 8px 32px 8px 12px !important;
  cursor: pointer;
}

.browser-filter-input {
  padding: 8px 12px !important;
}

.browser-filter-select:focus,
.browser-filter-input:focus {
  border-color: #01532B;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(1, 83, 43, 0.15);
  outline: none;
}

.advance-browser-filters .select-icon {
  right: 12px;
  font-size: 11px;
  color: #64748b;
}

.filter-btn-reset {
  height: 38px;
  white-space: nowrap;
  font-size: 12px;
  border-radius: 6px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.filter-btn-reset:hover {
  background: #e2e8f0;
  border-color: #94a3b8;
  color: #1e293b;
}

.filter-btn-reload {
  height: 38px;
  white-space: nowrap;
  font-size: 12px;
  border-radius: 6px;
  background: #01532B !important;
  color: #ffffff !important;
  border: 1px solid #014222 !important;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(1, 83, 43, 0.25);
}

.filter-btn-reload:hover {
  background: #014222 !important;
  box-shadow: 0 2px 6px rgba(1, 83, 43, 0.35);
}

/* Sub-toolbar */
.browser-toolbar-subrow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px dashed #e2e8f0;
}

.active-filters-chips {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
}

.results-count-text {
  color: #475569;
  font-size: 12px;
  margin-right: 4px;
}

.active-filter-chip {
  background: #e8f5e9;
  color: #01532B;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10.5px;
  font-weight: 600;
  border: 1px solid #c8e6c9;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.chip-remove {
  cursor: pointer;
  opacity: 0.7;
  font-size: 9px;
  margin-left: 2px;
}

.chip-remove:hover {
  opacity: 1;
}

.view-mode-toggle {
  display: inline-flex;
  background: #e2e8f0;
  border-radius: 6px;
  padding: 2px;
  gap: 2px;
}

.view-mode-btn {
  border: none;
  background: transparent;
  color: #64748b;
  padding: 4px 10px;
  font-size: 11.5px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
}

.view-mode-btn.active {
  background: #ffffff;
  color: #01532B;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.advance-browser-body {
  padding: 12px 18px;
  max-height: 480px;
  min-height: 280px;
  overflow-y: auto;
  background: #f8fafc;
  flex: 1;
}

/* TABLE VIEW STYLING (Ultra organized) */
.browser-table-wrapper {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.browser-data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  text-align: left;
}

.browser-data-table thead {
  background: #f1f5f9;
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: 2px solid #cbd5e1;
}

.browser-data-table th {
  padding: 9px 10px;
  font-weight: 700;
  color: #334155;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.browser-data-table td {
  padding: 9px 10px;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: middle;
  color: #334155;
}

.browser-data-table tbody tr {
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.browser-data-table tbody tr:hover {
  background-color: #f0fdf4;
}

.browser-data-table tbody tr.tr-selected {
  background-color: #ecfdf5 !important;
  box-shadow: inset 3px 0 0 #01532B;
}

.custom-radio-dot {
  width: 18px;
  height: 18px;
  border: 2px solid #cbd5e1;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #ffffff;
  background: #ffffff;
  transition: all 0.2s ease;
}

.custom-radio-dot.active {
  background: #01532B;
  border-color: #01532B;
}

.voucher-id-tag {
  font-weight: 700;
  font-family: 'Courier New', monospace;
  color: #01532B;
  font-size: 12.5px;
}

.voucher-date-text {
  font-size: 10.5px;
  color: #64748b;
}

.ministry-cell {
  font-weight: 600;
  color: #1e293b;
  max-width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.receiver-cell {
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.receiver-name {
  font-weight: 500;
  color: #0f172a;
}

.ref-subtext {
  font-size: 10px;
  color: #64748b;
}

.td-purpose {
  max-width: 200px;
}

.purpose-cell-text {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11.5px;
  color: #475569;
}

.amount-val {
  font-weight: 600;
  color: #334155;
  font-size: 12px;
}

.curr-val {
  font-size: 10px;
  color: #64748b;
}

.settled-val {
  color: #0284c7;
  font-weight: 600;
  font-size: 11.5px;
}

.settled-percent {
  font-size: 10px;
  color: #0284c7;
}

.outstanding-main-val {
  font-weight: 700;
  color: #01532B;
  font-size: 13px;
}

.outstanding-curr {
  font-size: 10px;
  font-weight: 600;
  color: #01532B;
}

/* CARD GRID VIEW */
.browser-advance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 12px;
}

.browser-advance-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  padding: 13px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  position: relative;
}

.browser-advance-card:hover {
  border-color: #01532B;
  transform: translateY(-2px);
  box-shadow: 0 6px 14px -2px rgba(1, 83, 43, 0.18);
}

.browser-advance-card.is-selected {
  border-color: #01532B;
  background: #f0fdf4;
  box-shadow: 0 0 0 2.5px rgba(1, 83, 43, 0.25);
}

.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px dashed #e2e8f0;
}

.card-voucher-tag {
  font-weight: 700;
  color: #01532B;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.card-status-badges {
  display: flex;
  align-items: center;
  gap: 6px;
}

.status-pill {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
}

.status-pill.approved {
  background: #dcfce7;
  color: #166534;
}

.status-pill.pending {
  background: #fef9c3;
  color: #854d0e;
}

.status-pill.settled {
  background: #e0e7ff;
  color: #3730a3;
}

.date-badge {
  font-size: 11px;
  color: #64748b;
  font-weight: 500;
}

.card-details-grid {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  margin-bottom: 8px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.detail-label {
  color: #64748b;
  font-size: 11px;
}

.detail-val {
  color: #1e293b;
}

.card-purpose {
  font-size: 11.5px;
  color: #475569;
  background: #f8fafc;
  border-radius: 6px;
  padding: 6px 8px;
  margin-bottom: 8px;
  line-height: 1.35;
  max-height: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-financial-summary {
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 6px;
  background: #f8fafc;
  border-radius: 8px;
  padding: 8px 10px;
  border: 1px solid #edf2f7;
  margin-top: auto;
}

.browser-advance-card.is-selected .card-financial-summary {
  background: #ffffff;
}

.fin-box {
  display: flex;
  flex-direction: column;
}

.fin-label {
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  color: #64748b;
  font-weight: 600;
}

.fin-val {
  font-size: 11.5px;
  font-weight: 700;
}

.total-val {
  color: #334155;
}

.settled-val {
  color: #0284c7;
}

.outstanding-val {
  color: #01532B;
  font-size: 12px;
}

.settlement-progress-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  color: #64748b;
}

.progress-bar-bg {
  flex: 1;
  height: 5px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #337555, #01532B);
  border-radius: 3px;
}

/* FOOTER */
.advance-browser-footer {
  background: #ffffff;
  border-top: 1px solid #e2e8f0;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.selection-preview-bar {
  font-size: 12.5px;
  color: #334155;
  display: flex;
  align-items: center;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.preview-selected-tag {
  display: flex;
  align-items: center;
}

.text-outstanding-badge {
  color: #01532B;
  font-size: 13px;
  background: #e8f5e9;
  padding: 2px 6px;
  border-radius: 4px;
}

.footer-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
}

.btn-browser-cancel {
  height: 36px;
  padding: 0 16px;
  font-size: 12.5px;
  font-weight: 600;
  background: #ffffff;
  color: #475569;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
}

.btn-browser-cancel:hover {
  background: #f1f5f9;
  color: #1e293b;
}

.btn-select-confirm {
  height: 36px;
  padding: 0 20px !important;
  font-weight: 600 !important;
  font-size: 12.5px !important;
  background-color: #01532B !important;
  color: #ffffff !important;
  border: 1px solid #014222 !important;
  border-radius: 6px !important;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s;
  box-shadow: 0 2px 6px rgba(1, 83, 43, 0.25);
}

.btn-select-confirm:hover:not(:disabled) {
  background-color: #014222 !important;
}

.btn-select-confirm:disabled {
  opacity: 0.5 !important;
  cursor: not-allowed !important;
}

@media (max-width: 900px) {
  .browser-filter-controls {
    flex-direction: column;
    align-items: stretch;
  }
  .filter-col {
    width: 100% !important;
  }
  .advance-browser-footer {
    flex-direction: column;
    align-items: stretch;
  }
  .selection-preview-bar {
    margin-bottom: 8px;
  }
}

.btn-browse-advance {
  height: 38px;
  background-color: #01532B !important;
  color: #ffffff !important;
  border: 1px solid #014222 !important;
  border-radius: 6px !important;
  padding: 0 14px !important;
  font-size: 12.5px !important;
  font-weight: 600 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 6px !important;
  cursor: pointer !important;
  white-space: nowrap !important;
  transition: all 0.2s ease !important;
  box-shadow: 0 2px 4px rgba(1, 83, 43, 0.2) !important;
  flex-shrink: 0 !important;
}

.btn-browse-advance:hover:not(:disabled) {
  background-color: #014222 !important;
  box-shadow: 0 4px 8px rgba(1, 83, 43, 0.3) !important;
  transform: translateY(-1px);
}

.btn-browse-advance:active:not(:disabled) {
  transform: translateY(0);
}

.btn-browse-advance:disabled {
  opacity: 0.6 !important;
  cursor: not-allowed !important;
  transform: none !important;
}

.advance-ministry-badge {
  background: #e8f5e9;
  color: #01532B;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.badge-primary-light {
  background: #e8f5e9;
  color: #01532B;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  border: 1px solid #c8e6c9;
}

.advance-receiver {
  color: #0f766e;
  font-size: 11px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .browser-filter-grid,
  .browser-filter-grid.secondary-filters {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .browser-advance-grid {
    grid-template-columns: 1fr;
  }

  .advance-browser-footer {
    flex-direction: column;
    align-items: stretch;
  }

  .selection-preview-bar {
    margin-bottom: 8px;
  }
}

/* Responsive Design for Compact Layout */
@media (max-width: 1200px) {
  .form-grid.compact {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {

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

  .compact-date-field .v-input__slot {
    padding: 0 8px !important;
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

/* Duplicate Warning Banner Styles */
.duplicate-warning-box {
  background: #fff8e1;
  border: 1px solid #ffe082;
  border-left: 4px solid #ff9800;
  border-radius: 6px;
  padding: 10px 14px;
  color: #795548;
}

.duplicate-warning-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 13px;
  color: #e65100;
  margin-bottom: 6px;
}

.duplicate-warning-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.duplicate-chip {
  background: #ffecb3;
  border-radius: 12px;
  padding: 3px 10px;
  font-size: 12px;
  color: #4e342e;
}
</style>