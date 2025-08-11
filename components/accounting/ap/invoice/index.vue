<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="enhanced-dialog" @click.stop>
      <div class="modal-header">
        <h4 class="modal-title">
          <i class="fas fa-file-invoice"></i>
          {{ isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່' }}
        </h4>
        <button type="button" class="close-button" @click="handleClose">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <!-- Loading State -->
        <div v-if="formLoading" class="loading-state">
          <div class="spinner"></div>
          <p>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
        </div>

        <!-- Tabbed Interface -->
        <div v-else class="invoice-form">
          <!-- Tab Navigation -->
          <div class="tab-navigation">
            <button
              type="button"
              :class="['tab-btn', { active: activeTab === 'header' }]"
              @click="activeTab = 'header'"
            >
              <i class="fas fa-file-alt"></i>
              ຂໍ້ມູນໃບແຈ້ງໜີ້
            </button>
            <button
              type="button"
              :class="['tab-btn', { active: activeTab === 'lines' }]"
              @click="activeTab = 'lines'"
            >
              <i class="fas fa-list"></i>
              ລາຍການສິນຄ້າ
              <span v-if="lineItems.length > 0" class="line-count">{{
                lineItems.length
              }}</span>
            </button>
          </div>

          <!-- Invoice Header Tab -->
          <div v-show="activeTab === 'header'" class="tab-content">
            <form @submit.prevent="handleSubmit">
              <!-- Basic Information Section -->
              <div class="form-section">
                <h5 class="section-title">
                  <i class="fas fa-info-circle"></i>
                  ຂໍ້ມູນພື້ນຖານ
                </h5>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="invoiceNumber" class="required"
                      >ເລກທີໃບແຈ້ງໜີ້</label
                    >
                    <input
                      id="invoiceNumber"
                      v-model="form.invoiceNumber"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.invoiceNumber }"
                      placeholder="ເຊັ່ນ: INV-2025-001"
                      :readonly="isEdit"
                    />
                    <div v-if="errors.invoiceNumber" class="invalid-feedback">
                      {{ errors.invoiceNumber }}
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="vendorInvoiceNumber" class="required"
                      >ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ</label
                    >
                    <input
                      id="vendorInvoiceNumber"
                      v-model="form.vendorInvoiceNumber"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.vendorInvoiceNumber }"
                      placeholder="ເລກທີໃບແຈ້ງໜີ້ຂອງຜູ້ຂາຍ"
                    />
                    <div
                      v-if="errors.vendorInvoiceNumber"
                      class="invalid-feedback"
                    >
                      {{ errors.vendorInvoiceNumber }}
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="vendorId" class="required">ຜູ້ຂາຍ</label>
                    <select
                      id="vendorId"
                      v-model="form.vendorId"
                      class="form-control"
                      :class="{ 'is-invalid': errors.vendorId }"
                      @change="onVendorChange"
                    >
                      <option value="">ເລືອກຜູ້ຂາຍ</option>
                      <option
                        v-for="vendor in vendors"
                        :key="vendor.id"
                        :value="vendor.id"
                      >
                        {{ vendor.name }} ({{ vendor.vendorCode }})
                      </option>
                    </select>
                    <div v-if="errors.vendorId" class="invalid-feedback">
                      {{ errors.vendorId }}
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="currencyId" class="required">ສະກຸນເງິນ</label>
                    <select
                      id="currencyId"
                      v-model="form.currencyId"
                      class="form-control"
                      :class="{ 'is-invalid': errors.currencyId }"
                      @change="onCurrencyChange"
                    >
                      <option value="">ເລືອກສະກຸນເງິນ</option>
                      <option
                        v-for="currency in currencies"
                        :key="currency.id"
                        :value="currency.id"
                      >
                        {{ currency.name }} ({{ currency.code }})
                      </option>
                    </select>
                    <div v-if="errors.currencyId" class="invalid-feedback">
                      {{ errors.currencyId }}
                    </div>
                  </div>
                </div>

                <!-- Exchange Rate Row -->
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="exchangeRate" class="required">
                      ອັດຕາແລກປ່ຽນ
                      <span v-if="selectedCurrency" class="currency-info">
                        ({{ selectedCurrency.code }} ຕໍ່ LAK)
                      </span>
                    </label>
                    <div class="exchange-rate-input-group">
                      <input
                        id="exchangeRate"
                        v-model="form.exchangeRate"
                        type="number"
                        step="0.0001"
                        min="0"
                        class="form-control"
                        :class="{ 'is-invalid': errors.exchangeRate }"
                        placeholder="1.0000"
                        @blur="calculateExchangeAmounts"
                      />
                      <div class="exchange-rate-addon">
                        <i class="fas fa-exchange-alt"></i>
                      </div>
                    </div>
                    <div v-if="errors.exchangeRate" class="invalid-feedback">
                      {{ errors.exchangeRate }}
                    </div>
                    <small class="form-text text-muted">
                      ໃຊ້ 1.0000 ສຳລັບ LAK ຫຼື ປ້ອນອັດຕາແລກປ່ຽນປັດຈຸບັນ
                    </small>
                  </div>
                  <div class="form-group col-md-6">
                    <!-- Exchange Rate Display -->
                    <div v-if="selectedCurrency && form.exchangeRate" class="exchange-display">
                      <label class="exchange-label">ຍອດເງິນໃນສະກຸນທ້ອງຖິ່ນ</label>
                      <div class="exchange-amount">
                        <span class="foreign-amount">
                          {{ formatCurrency(calculatedTotal, selectedCurrency?.code || 'USD') }}
                        </span>
                        <i class="fas fa-arrow-right exchange-arrow"></i>
                        <span class="local-amount">
                          {{ formatCurrency(calculatedTotal * parseFloat(form.exchangeRate || 1), 'LAK') }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Date Section -->
              <div class="form-section">
                <h5 class="section-title">
                  <i class="fas fa-calendar-alt"></i>
                  ວັນທີ
                </h5>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="invoiceDate" class="required"
                      >ວັນທີໃບແຈ້ງໜີ້</label
                    >
                    <input
                      id="invoiceDate"
                      v-model="form.invoiceDate"
                      type="date"
                      class="form-control"
                      :class="{ 'is-invalid': errors.invoiceDate }"
                      @change="calculateDueDate"
                    />
                    <div v-if="errors.invoiceDate" class="invalid-feedback">
                      {{ errors.invoiceDate }}
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="dueDate" class="required">ວັນທີຄົບກຳນົດ</label>
                    <input
                      id="dueDate"
                      v-model="form.dueDate"
                      type="date"
                      class="form-control"
                      :class="{ 'is-invalid': errors.dueDate }"
                    />
                    <div v-if="errors.dueDate" class="invalid-feedback">
                      {{ errors.dueDate }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Description Section -->
              <div class="form-section">
                <h5 class="section-title">
                  <i class="fas fa-clipboard-list"></i>
                  ລາຍລະອຽດ
                </h5>
                <div class="form-group">
                  <label for="description">ຄຳອະທິບາຍ</label>
                  <textarea
                    id="description"
                    v-model="form.description"
                    class="form-control"
                    rows="3"
                    placeholder="ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້..."
                  ></textarea>
                </div>

                <div class="form-group">
                  <label for="note">ໝາຍເຫດເພີ່ມເຕີມ</label>
                  <textarea
                    id="note"
                    v-model="form.note"
                    class="form-control"
                    rows="2"
                    placeholder="ໝາຍເຫດເພີ່ມເຕີມ (ຖ້າມີ)..."
                  ></textarea>
                </div>

                <!-- Reason field for audit trail (only show when editing) -->
                <div v-if="isEdit" class="form-group">
                  <label for="reason" class="required">ເຫດຜົນຂອງການແກ້ໄຂ</label>
                  <input
                    id="reason"
                    v-model="form.reason"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.reason }"
                    placeholder="ລະບຸເຫດຜົນຂອງການແກ້ໄຂ..."
                  />
                  <div v-if="errors.reason" class="invalid-feedback">
                    {{ errors.reason }}
                  </div>
                </div>
              </div>

              <!-- Total Amount Display (calculated from line items) -->
              <div class="amount-summary">
                <div class="totals-grid">
                  <div class="total-item">
                    <label>ລວມຍ່ອຍ:</label>
                    <span class="amount">{{
                      formatCurrency(calculatedSubtotal, selectedCurrency?.code)
                    }}</span>
                  </div>
                  <div class="total-item">
                    <label>ສ່ວນຫຼຸດ:</label>
                    <span class="amount discount"
                      >-{{ formatCurrency(calculatedDiscount, selectedCurrency?.code) }}</span
                    >
                  </div>
                  <div class="total-item">
                    <label>ພາສີ:</label>
                    <span class="amount"
                      >+{{ formatCurrency(calculatedTax, selectedCurrency?.code) }}</span
                    >
                  </div>
                  <div class="total-item grand-total">
                    <label>ລວມທັງໝົດ:</label>
                    <span class="amount">{{
                      formatCurrency(calculatedTotal, selectedCurrency?.code)
                    }}</span>
                  </div>
                  <!-- Local Currency Display -->
                  <div v-if="selectedCurrency && selectedCurrency.code !== 'LAK' && form.exchangeRate" class="total-item local-currency">
                    <label>ລວມເປັນ LAK:</label>
                    <span class="amount local">{{
                      formatCurrency(calculatedTotal * parseFloat(form.exchangeRate || 1), 'LAK')
                    }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Audit Trail Section -->
              <div v-if="isEdit" class="form-section audit-trail-section">
                <div class="audit-section-header">
                  <h5 class="section-title">
                    <i class="fas fa-history"></i>
                    ປະຫວັດການດຳເນີນງານ
                  </h5>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-view-audit"
                    @click="openAuditDialog"
                  >
                    <i class="fas fa-external-link-alt"></i>
                    ເບິ່ງປະຫວັດລະອຽດ
                  </button>
                </div>
                <div class="audit-trail-container">
                  <!-- Maker Information -->
                  <div class="audit-card maker-card">
                    <div class="audit-header">
                      <div class="audit-icon maker-icon">
                        <i class="fas fa-user-edit"></i>
                      </div>
                      <div class="audit-title">
                        <h6>ຜູ້ສ້າງເອກະສານ (Maker)</h6>
                        <span class="audit-status status-created"
                          >ສ້າງແລ້ວ</span
                        >
                      </div>
                    </div>
                    <div class="audit-details">
                      <div class="audit-row">
                        <span class="audit-label">ຊື່ຜູ້ສ້າງ:</span>
                        <span class="audit-value">{{
                          auditTrail.makerName
                        }}</span>
                      </div>
                      <div class="audit-row">
                        <span class="audit-label">ຕຳແໜ່ງ:</span>
                        <span class="audit-value">{{
                          auditTrail.makerPosition
                        }}</span>
                      </div>
                      <div class="audit-row">
                        <span class="audit-label">ອີເມວ:</span>
                        <span class="audit-value">{{
                          auditTrail.makerEmail || '-'
                        }}</span>
                      </div>
                      <div class="audit-row">
                        <span class="audit-label">ວັນທີສ້າງ:</span>
                        <span class="audit-value">{{
                          auditTrail.createdDate
                        }}</span>
                      </div>
                      <div class="audit-row">
                        <span class="audit-label">ເວລາສ້າງ:</span>
                        <span class="audit-value">{{
                          auditTrail.createdTime
                        }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Checker Information -->
                  <div class="audit-card checker-card">
                    <div class="audit-header">
                      <div class="audit-icon checker-icon">
                        <i class="fas fa-user-check"></i>
                      </div>
                      <div class="audit-title">
                        <h6>ຜູ້ກວດສອບ (Checker)</h6>
                        <span
                          :class="[
                            'audit-status',
                            auditTrail.isChecked
                              ? 'status-approved'
                              : 'status-pending',
                          ]"
                        >
                          {{
                            auditTrail.isChecked
                              ? 'ອະນຸມັດແລ້ວ'
                              : 'ລໍຖ້າການອະນຸມັດ'
                          }}
                        </span>
                      </div>
                    </div>
                    <div class="audit-details">
                      <div class="audit-row">
                        <span class="audit-label">ຊື່ຜູ້ກວດ:</span>
                        <span class="audit-value">{{
                          auditTrail.checkerName || '-'
                        }}</span>
                      </div>
                      <div class="audit-row">
                        <span class="audit-label">ຕຳແໜ່ງ:</span>
                        <span class="audit-value">{{
                          auditTrail.checkerPosition || '-'
                        }}</span>
                      </div>
                      <div class="audit-row">
                        <span class="audit-label">ອີເມວ:</span>
                        <span class="audit-value">{{
                          auditTrail.checkerEmail || '-'
                        }}</span>
                      </div>
                      <div class="audit-row">
                        <span class="audit-label">ວັນທີກວດ:</span>
                        <span class="audit-value">{{
                          auditTrail.checkedDate || '-'
                        }}</span>
                      </div>
                      <div class="audit-row">
                        <span class="audit-label">ເວລາກວດ:</span>
                        <span class="audit-value">{{
                          auditTrail.checkedTime || '-'
                        }}</span>
                      </div>
                      <div v-if="auditTrail.checkerComment" class="audit-row">
                        <span class="audit-label">ຄຳເຫັນ:</span>
                        <span class="audit-value comment">{{
                          auditTrail.checkerComment
                        }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Approval Status Summary -->
                  <div class="approval-status-summary">
                    <div class="status-info-header">
                      <h6>ສະຖານະເອກະສານ</h6>
                      <span :class="['status-badge', `status-${auditTrail.status}`]">
                        {{ getStatusText(auditTrail.status) }}
                      </span>
                    </div>
                    <div class="status-workflow">
                      <div
                        :class="[
                          'workflow-step',
                          'step-created',
                          { active: true },
                        ]"
                      >
                        <div class="step-icon">
                          <i class="fas fa-plus-circle"></i>
                        </div>
                        <span class="step-label">ສ້າງເອກະສານ</span>
                      </div>
                      <div class="workflow-arrow">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <div
                        :class="[
                          'workflow-step',
                          'step-pending',
                          { active: auditTrail.isChecked },
                        ]"
                      >
                        <div class="step-icon">
                          <i class="fas fa-clock"></i>
                        </div>
                        <span class="step-label">ລໍຖ້າການອະນຸມັດ</span>
                      </div>
                      <div class="workflow-arrow">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <div
                        :class="[
                          'workflow-step',
                          'step-approved',
                          { active: auditTrail.isApproved },
                        ]"
                      >
                        <div class="step-icon">
                          <i class="fas fa-check-circle"></i>
                        </div>
                        <span class="step-label">ອະນຸມັດແລ້ວ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <!-- Line Items Tab -->
          <div v-show="activeTab === 'lines'" class="tab-content">
            <div class="line-items-section">
              <!-- Add Line Section at Top -->
              <div class="add-line-header">
                <h5 class="section-title">
                  <i class="fas fa-list"></i>
                  ລາຍການສິນຄ້າ / ການບໍລິການ
                </h5>
                <div class="add-line-actions">
                  <button
                    type="button"
                    class="btn btn-primary btn-add-line"
                    @click="addNewLine"
                  >
                    <i class="fas fa-plus-circle"></i>
                    ເພີ່ມລາຍການສິນຄ້າ
                  </button>
                  <span class="line-count-info"
                    >{{ lineItems.length }} ລາຍການ</span
                  >
                </div>
              </div>

              <!-- Empty State -->
              <div v-if="lineItems.length === 0" class="empty-line-state">
                <div class="empty-content">
                  <i class="fas fa-shopping-cart"></i>
                  <h4>ຍັງບໍ່ມີລາຍການສິນຄ້າ</h4>
                  <p>
                    ກະລຸນາເພີ່ມສິນຄ້າຫຼືການບໍລິການພ້ອມກັບບັນຊີ GL
                    ເພື່ອສ້າງໃບແຈ້ງໜີ້
                  </p>
                  <button
                    type="button"
                    class="btn btn-lg btn-primary"
                    @click="addNewLine"
                  >
                    <i class="fas fa-plus-circle"></i>
                    ເພີ່ມລາຍການທຳອິດ
                  </button>
                </div>
              </div>

              <!-- Line Items Table -->
              <div v-else class="line-items-table-container">
                <div class="line-items-table">
                  <table class="table">
                    <thead>
                      <tr>
                        <th style="width: 40px">#</th>
                        <th style="width: 180px">ລາຍລະອຽດ *</th>
                        <th style="width: 70px">ຈຳນວນ *</th>
                        <th style="width: 80px">ລາຄາຕໍ່ຫົວ *</th>
                        <th style="width: 120px">DR Account *</th>
                        <th style="width: 120px">CR Account *</th>
                        <th style="width: 60px">ສ່ວນຫຼຸດ%</th>
                        <th style="width: 60px">ພາສີ%</th>
                        <th style="width: 100px">ລວມ</th>
                        <th style="width: 60px">ລຶບ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(line, index) in lineItems"
                        :key="line.tempId || line.id"
                        class="line-row"
                      >
                        <td class="line-number">{{ index + 1 }}</td>
                        <td>
                          <input
                            v-model="line.description"
                            type="text"
                            class="form-control form-control-sm"
                            :class="{
                              'is-invalid': errors[`line_${index}_description`],
                            }"
                            placeholder="ລາຍລະອຽດສິນຄ້າ/ການບໍລິການ..."
                            @blur="calculateLineTotal(line)"
                          />
                        </td>
                        <td>
                          <input
                            v-model="line.quantity"
                            type="number"
                            step="0.001"
                            min="0"
                            class="form-control form-control-sm"
                            :class="{
                              'is-invalid': errors[`line_${index}_quantity`],
                            }"
                            @blur="calculateLineTotal(line)"
                          />
                        </td>
                        <td>
                          <input
                            v-model="line.unitPrice"
                            type="number"
                            step="0.01"
                            min="0"
                            class="form-control form-control-sm"
                            :class="{
                              'is-invalid': errors[`line_${index}_unitPrice`],
                            }"
                            @blur="calculateLineTotal(line)"
                          />
                        </td>
                        <td>
                          <select
                            v-model="line.DRglAccountId"
                            class="form-control form-control-sm"
                            :class="{
                              'is-invalid':
                                errors[`line_${index}_DRglAccountId`],
                            }"
                          >
                            <option value="">ເລືອກ DR Account</option>
                            <option
                              v-for="account in glAccounts"
                              :key="account.id"
                              :value="account.id"
                            >
                              {{ account.accountNumber }} -
                              {{ account.accountName }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <select
                            v-model="line.CRglAccountId"
                            class="form-control form-control-sm"
                            :class="{
                              'is-invalid':
                                errors[`line_${index}_CRglAccountId`],
                            }"
                          >
                            <option value="">ເລືອກ CR Account</option>
                            <option
                              v-for="account in glAccounts"
                              :key="account.id"
                              :value="account.id"
                            >
                              {{ account.accountNumber }} -
                              {{ account.accountName }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <input
                            v-model="line.discountRate"
                            type="number"
                            step="0.01"
                            min="0"
                            max="100"
                            class="form-control form-control-sm"
                            @blur="calculateLineTotal(line)"
                          />
                        </td>
                        <td>
                          <input
                            v-model="line.taxRate"
                            type="number"
                            step="0.01"
                            min="0"
                            max="100"
                            class="form-control form-control-sm"
                            @blur="calculateLineTotal(line)"
                          />
                        </td>
                        <td class="line-total">
                          {{ formatCurrency(line.lineTotal || 0, selectedCurrency?.code) }}
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-sm btn-danger"
                            @click="removeLine(index)"
                            title="ລຶບລາຍການ"
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Add More Lines Section -->
                <div class="add-more-lines">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-add-more"
                    @click="addNewLine"
                  >
                    <i class="fas fa-plus"></i>
                    ເພີ່ມລາຍການໃໝ່
                  </button>
                  <div class="quick-add-buttons">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      @click="addMultipleLines(3)"
                    >
                      ເພີ່ມ 3 ລາຍການ
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      @click="addMultipleLines(5)"
                    >
                      ເພີ່ມ 5 ລາຍການ
                    </button>
                  </div>
                </div>

                <!-- Totals Summary -->
                <div class="line-totals-summary">
                  <div class="totals-grid">
                    <div class="total-item">
                      <label>ລວມຍ່ອຍ:</label>
                      <span class="amount">{{
                        formatCurrency(calculatedSubtotal, selectedCurrency?.code)
                      }}</span>
                    </div>
                    <div class="total-item">
                      <label>ສ່ວນຫຼຸດ:</label>
                      <span class="amount discount"
                        >-{{ formatCurrency(calculatedDiscount, selectedCurrency?.code) }}</span
                      >
                    </div>
                    <div class="total-item">
                      <label>ພາສີ:</label>
                      <span class="amount"
                        >+{{ formatCurrency(calculatedTax, selectedCurrency?.code) }}</span
                      >
                    </div>
                    <div class="total-item grand-total">
                      <label>ລວມທັງໝົດ:</label>
                      <span class="amount">{{
                        formatCurrency(calculatedTotal, selectedCurrency?.code)
                      }}</span>
                    </div>
                    <!-- Local Currency Display in Line Items Tab -->
                    <div v-if="selectedCurrency && selectedCurrency.code !== 'LAK' && form.exchangeRate" class="total-item local-currency">
                      <label>ລວມເປັນ LAK:</label>
                      <span class="amount local">{{
                        formatCurrency(calculatedTotal * parseFloat(form.exchangeRate || 1), 'LAK')
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <div class="footer-actions">
          <button
            type="button"
            class="btn btn-secondary"
            @click="handleClose"
            :disabled="saving"
          >
            <i class="fas fa-times"></i>
            ຍົກເລີກ
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="handleSubmit"
            :disabled="saving || !isFormValid"
          >
            <i v-if="saving" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas fa-save"></i>
            {{ saving ? 'ກຳລັງບັນທຶກ...' : isEdit ? 'ອັບເດດ' : 'ບັນທຶກ' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Audit Log Dialog -->
    <audit-log-dialog
      :visible="auditDialogVisible"
      :invoice-id="form.id"
      :invoice-info="getInvoiceInfo()"
      @close="closeAuditDialog"
    />
  </div>
</template>

<script>
import AuditLogDialog from '~/components/accounting/ap/invoice/audit'

export default {
  name: 'APInvoiceDialog',

  components: {
    AuditLogDialog
  },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    invoice: {
      type: Object,
      default: null,
    },
    vendors: {
      type: Array,
      default: () => [],
    },
    currencies: {
      type: Array,
      default: () => [],
    },
    glAccounts: {
      type: Array,
      default: () => [],
    },
    user: {
      type: Object,
      default: null,
    },
  },

  emits: ['close', 'save'],

  data() {
    return {
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      lineItems: [],
      nextTempId: 1,
      selectedVendor: null,
      selectedCurrency: null,
      auditDialogVisible: false,
      form: {
        id: null,
        invoiceNumber: '',
        vendorInvoiceNumber: '',
        vendorId: '',
        invoiceDate: '',
        dueDate: '',
        description: '',
        totalAmount: '',
        exchangeRate: 1.0,
        currencyId: '',
        makerId: '',
        note: '',
        reason: '',
      },
    }
  },

  computed: {
    isEdit() {
      return !!this.invoice
    },

    auditTrail() {
      if (!this.invoice) {
        return {
          // Default values for new invoice
          makerName: this.user?.cus_name || this.user?.name || 'ຜູ້ໃຊ້ປະຈຸບັນ',
          makerPosition: 'ພະນັກງານບັນຊີ',
          makerEmail: this.user?.cus_email || this.user?.email || '',
          createdDate: new Date().toISOString().split('T')[0],
          createdTime: new Date().toLocaleTimeString('en-GB'),
          isChecked: false,
          isApproved: false,
          checkerName: null,
          checkerPosition: null,
          checkerEmail: null,
          checkedDate: null,
          checkedTime: null,
          checkerComment: null,
        }
      }

      // Extract maker information from invoice
      const maker = this.invoice.maker || {}
      const checker = this.invoice.checker || null
      
      // Parse dates
      const createdAt = new Date(this.invoice.createdAt)
      const approvedAt = this.invoice.approvedAt ? new Date(this.invoice.approvedAt) : null
      
      return {
        // Maker Information
        makerName: maker.cus_name || 'ບໍ່ມີຂໍ້ມູນ',
        makerPosition: maker.position || 'ພະນັກງານບັນຊີ',
        makerEmail: maker.cus_email || '',
        makerId: maker.cus_id || maker.id,
        createdDate: createdAt.toISOString().split('T')[0],
        createdTime: createdAt.toLocaleTimeString('en-GB'),
        createdDateTime: this.invoice.createdAt,

        // Checker Information
        checkerName: checker?.cus_name || null,
        checkerPosition: checker?.position || 'ຫົວໜ້າຝ່າຍບັນຊີ',
        checkerEmail: checker?.cus_email || null,
        checkerId: checker?.cus_id || checker?.id || null,
        checkedDate: approvedAt ? approvedAt.toISOString().split('T')[0] : null,
        checkedTime: approvedAt ? approvedAt.toLocaleTimeString('en-GB') : null,
        checkedDateTime: this.invoice.approvedAt,

        // Status and Comments
        isChecked: !!this.invoice.checkerId && !!this.invoice.approvedAt,
        isApproved: this.invoice.status === 'approved',
        checkerComment: this.invoice.checkerComment || null,

        // Invoice status
        status: this.invoice.status || 'draft',
        version: this.invoice.version || 1,
      }
    },

    calculatedSubtotal() {
      return this.lineItems.reduce((sum, line) => {
        const subtotal =
          (parseFloat(line.quantity) || 0) * (parseFloat(line.unitPrice) || 0)
        return sum + subtotal
      }, 0)
    },

    calculatedDiscount() {
      return this.lineItems.reduce(
        (sum, line) => sum + (parseFloat(line.discountAmount) || 0),
        0
      )
    },

    calculatedTax() {
      return this.lineItems.reduce(
        (sum, line) => sum + (parseFloat(line.taxAmount) || 0),
        0
      )
    },

    calculatedTotal() {
      return this.lineItems.reduce(
        (sum, line) => sum + (parseFloat(line.lineTotal) || 0),
        0
      )
    },

    isFormValid() {
      const hasValidHeader =
        this.form.invoiceNumber &&
        this.form.vendorInvoiceNumber &&
        this.form.vendorId &&
        this.form.invoiceDate &&
        this.form.dueDate &&
        this.form.currencyId &&
        this.form.exchangeRate &&
        parseFloat(this.form.exchangeRate) > 0 &&
        (!this.isEdit || this.form.reason)

      const hasValidLines =
        this.lineItems.length > 0 &&
        this.lineItems.every(
          (line) =>
            line.description &&
            (parseFloat(line.quantity) || 0) > 0 &&
            (parseFloat(line.unitPrice) || 0) >= 0 &&
            line.DRglAccountId &&
            line.CRglAccountId
        )

      return hasValidHeader && hasValidLines
    },
  },

  watch: {
    visible: {
      handler(newVal) {
        if (newVal) {
          this.initializeDialog()
        } else {
          this.resetDialog()
        }
      },
      immediate: true,
    },

    invoice: {
      handler() {
        if (this.visible) {
          this.initializeDialog()
        }
      },
    },
  },

  methods: {
    async initializeDialog() {
      this.activeTab = 'header'
      this.clearErrors()

      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          vendorInvoiceNumber: this.invoice.vendorInvoiceNumber,
          vendorId: this.invoice.vendorId,
          invoiceDate: this.invoice.invoiceDate
            ? this.invoice.invoiceDate.split('T')[0]
            : '',
          dueDate: this.invoice.dueDate
            ? this.invoice.dueDate.split('T')[0]
            : '',
          description: this.invoice.description || '',
          totalAmount: this.invoice.totalAmount,
          exchangeRate: this.invoice.exchangeRate || 1.0,
          currencyId: this.invoice.currencyId,
          makerId: this.invoice.makerId,
          note: this.invoice.note || '',
          reason: '',
        }

        await this.loadLineItems(this.invoice.id)
      } else {
        this.resetForm()

        // Initialize with default currency
        if (this.currencies.length > 0) {
          const defaultCurrency =
            this.currencies.find((c) => c.code === 'LAK') || 
            this.currencies.find((c) => c.code === 'USD') || 
            this.currencies[0]
          this.form.currencyId = defaultCurrency.id
          this.selectedCurrency = defaultCurrency
          
          // Set default exchange rate based on currency
          this.form.exchangeRate = defaultCurrency.code === 'LAK' ? 1.0 : 1.0
        }

        // Initialize with one empty line item
        this.lineItems = [this.createEmptyLine()]
      }

      this.updateSelectedVendor()
      this.updateSelectedCurrency()
    },

    resetDialog() {
      this.resetForm()
      this.lineItems = []
      this.selectedVendor = null
      this.selectedCurrency = null
      this.clearErrors()
      this.activeTab = 'header'
      this.formLoading = false
      this.saving = false
      this.auditDialogVisible = false
    },

    async loadLineItems(invoiceId) {
      try {
        const { data } = await this.$axios.get(
          `/api/ap-invoices-lines/invoice/${invoiceId}`
        )
        this.lineItems = data.data || [this.createEmptyLine()]

        this.lineItems.forEach((line) => {
          if (!line.tempId) {
            line.tempId = this.nextTempId++
          }
          // Recalculate line totals to ensure consistency
          this.calculateLineTotal(line)
        })
      } catch (error) {
        console.error('Error loading line items:', error)
        this.lineItems = [this.createEmptyLine()]
      }
    },

    // Audit Dialog Methods
    openAuditDialog() {
      if (this.form.id) {
        this.auditDialogVisible = true
      }
    },

    closeAuditDialog() {
      this.auditDialogVisible = false
    },

    getInvoiceInfo() {
      if (!this.invoice) return null
      
      return {
        invoiceNumber: this.form.invoiceNumber,
        vendorInvoiceNumber: this.form.vendorInvoiceNumber,
        totalAmount: this.calculatedTotal,
        status: this.invoice.status
      }
    },

    createEmptyLine() {
      return {
        tempId: this.nextTempId++,
        lineNumber: this.lineItems.length + 1,
        description: '',
        quantity: 1,
        unitPrice: 0,
        DRglAccountId: '',
        CRglAccountId: '',
        discountRate: 0,
        discountAmount: 0,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0,
        note: '',
      }
    },

    addNewLine() {
      this.lineItems.push(this.createEmptyLine())
    },

    addMultipleLines(count) {
      for (let i = 0; i < count; i++) {
        this.lineItems.push(this.createEmptyLine())
      }
    },

    removeLine(index) {
      if (this.lineItems.length > 1) {
        this.lineItems.splice(index, 1)
        this.updateLineNumbers()
      }
    },

    updateLineNumbers() {
      this.lineItems.forEach((line, index) => {
        line.lineNumber = index + 1
      })
    },

    calculateLineTotal(line) {
      const quantity = parseFloat(line.quantity) || 0
      const unitPrice = parseFloat(line.unitPrice) || 0
      const discountRate = parseFloat(line.discountRate) || 0
      const taxRate = parseFloat(line.taxRate) || 0

      const subtotal = quantity * unitPrice
      const discountAmount = subtotal * (discountRate / 100)
      line.discountAmount = discountAmount

      const afterDiscount = subtotal - discountAmount
      const taxAmount = afterDiscount * (taxRate / 100)
      line.taxAmount = taxAmount

      line.lineTotal = afterDiscount + taxAmount
      
      // Trigger exchange rate calculation when line totals change
      this.calculateExchangeAmounts()
    },

    calculateExchangeAmounts() {
      // This method can be used to recalculate amounts when exchange rate changes
      // It's called when the exchange rate field is updated
      this.clearFieldError('exchangeRate')
    },

    updateSelectedVendor() {
      if (this.form.vendorId && this.vendors.length > 0) {
        this.selectedVendor = this.vendors.find(
          (v) => v.id === this.form.vendorId
        )
      } else {
        this.selectedVendor = null
      }
    },

    updateSelectedCurrency() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(
          (c) => c.id === this.form.currencyId
        )
        
        // Auto-set exchange rate for LAK
        if (this.selectedCurrency && this.selectedCurrency.code === 'LAK') {
          this.form.exchangeRate = 1.0
        }
      } else {
        this.selectedCurrency = null
      }
    },

    onVendorChange() {
      this.updateSelectedVendor()
      this.calculateDueDate()
      this.clearFieldError('vendorId')
    },

    onCurrencyChange() {
      this.updateSelectedCurrency()
      this.clearFieldError('currencyId')
    },

    calculateDueDate() {
      if (this.form.invoiceDate && this.selectedVendor?.paymentTerms) {
        const invoiceDate = new Date(this.form.invoiceDate)
        const dueDate = new Date(invoiceDate)
        dueDate.setDate(
          dueDate.getDate() + parseInt(this.selectedVendor.paymentTerms)
        )
        this.form.dueDate = dueDate.toISOString().split('T')[0]
      }
    },

    validateForm() {
      this.errors = {}

      // Header validation
      if (!this.form.invoiceNumber) {
        this.errors.invoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້'
      }

      if (!this.form.vendorInvoiceNumber) {
        this.errors.vendorInvoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ'
      }

      if (!this.form.vendorId) {
        this.errors.vendorId = 'ກະລຸນາເລືອກຜູ້ຂາຍ'
      }

      if (!this.form.currencyId) {
        this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ'
      }

      // Exchange rate validation
      if (!this.form.exchangeRate) {
        this.errors.exchangeRate = 'ກະລຸນາໃສ່ອັດຕາແລກປ່ຽນ'
      } else if (parseFloat(this.form.exchangeRate) <= 0) {
        this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0'
      }

      if (!this.form.invoiceDate) {
        this.errors.invoiceDate = 'ກະລຸນາໃສ່ວັນທີໃບແຈ້ງໜີ້'
      }

      if (!this.form.dueDate) {
        this.errors.dueDate = 'ກະລຸນາໃສ່ວັນທີຄົບກຳນົດ'
      }

      // Date validation
      if (this.form.invoiceDate && this.form.dueDate) {
        const invoiceDate = new Date(this.form.invoiceDate)
        const dueDate = new Date(this.form.dueDate)

        if (dueDate <= invoiceDate) {
          this.errors.dueDate = 'ວັນທີຄົບກຳນົດຕ້ອງຫຼັງຈາກວັນທີໃບແຈ້ງໜີ້'
        }
      }

      // Line items validation
      if (this.lineItems.length === 0) {
        this.errors.lineItems = 'ກະລຸນາເພີ່ມລາຍການສິນຄ້າຢ່າງໜ້ອຍ 1 ລາຍການ'
      } else {
        for (let i = 0; i < this.lineItems.length; i++) {
          const line = this.lineItems[i]
          if (!line.description) {
            this.errors[`line_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດສິນຄ້າ'
          }
          if (!line.quantity || parseFloat(line.quantity) <= 0) {
            this.errors[`line_${i}_quantity`] = 'ຈຳນວນຕ້ອງຫຼາຍກວ່າ 0'
          }
          if (line.unitPrice === '' || parseFloat(line.unitPrice) < 0) {
            this.errors[`line_${i}_unitPrice`] = 'ລາຄາຕ້ອງເປັນຄ່າບວກ'
          }
          if (!line.DRglAccountId) {
            this.errors[`line_${i}_DRglAccountId`] = 'ກະລຸນາເລືອກ DR Account'
          }
          if (!line.CRglAccountId) {
            this.errors[`line_${i}_CRglAccountId`] = 'ກະລຸນາເລືອກ CR Account'
          }
        }
      }

      if (this.isEdit && !this.form.reason) {
        this.errors.reason = 'ກະລຸນາລະບຸເຫດຜົນຂອງການແກ້ໄຂ'
      }

      return Object.keys(this.errors).length === 0
    },

    clearErrors() {
      this.errors = {}
    },

    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field)
      }
    },

    handleSubmit() {
      if (!this.validateForm()) {
        // Switch to appropriate tab if there are errors
        if (Object.keys(this.errors).some((key) => key.startsWith('line_'))) {
          this.activeTab = 'lines'
        } else {
          this.activeTab = 'header'
        }
        return
      }

      this.saving = true

      const formData = {
        ...this.form,
        makerId: this.form.makerId || this.user?.id,
        totalAmount: this.calculatedTotal,
        exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
        lineItems: this.lineItems.map((line, index) => ({
          ...line,
          lineNumber: index + 1,
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          discountRate: parseFloat(line.discountRate) || 0,
          taxRate: parseFloat(line.taxRate) || 0,
        })),
      }

      this.$emit('save', formData)
    },

    handleOverlayClick() {
      if (!this.saving) {
        this.handleClose()
      }
    },

    handleClose() {
      this.$emit('close')
    },

    resetForm() {
      this.form = {
        id: null,
        invoiceNumber: '',
        vendorInvoiceNumber: '',
        vendorId: '',
        invoiceDate: '',
        dueDate: '',
        description: '',
        totalAmount: '',
        exchangeRate: 1.0,
        currencyId: '',
        makerId: '',
        note: '',
        reason: '',
      }
    },

    formatCurrency(amount, currencyCode = 'USD') {
      const currency = currencyCode || 'USD'
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency === 'LAK' ? 'USD' : currency, // Fallback since LAK might not be supported
        minimumFractionDigits: currency === 'LAK' ? 0 : 2,
        maximumFractionDigits: currency === 'LAK' ? 0 : 2,
      })
      
      if (currency === 'LAK') {
        return `₭${new Intl.NumberFormat('en-US').format(amount || 0)}`
      }
      
      return formatter.format(amount || 0)
    },

    getStatusText(status) {
      const statusMap = {
        'draft': 'ຮ່າງ',
        'pending': 'ລໍຖ້າການອະນຸມັດ',
        'approved': 'ອະນຸມັດແລ້ວ',
        'rejected': 'ປະຕິເສດ',
        'paid': 'ຈ່າຍແລ້ວ',
        'cancelled': 'ຍົກເລີກ'
      }
      return statusMap[status] || status
    },
  },
}
</script>

<style scoped>
/* All existing styles remain the same, plus these additions: */

.audit-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn-view-audit {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.btn-view-audit:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.2);
}

.btn-outline-primary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline-primary:hover {
  background: #667eea;
  color: white;
}

/* All other existing styles from the original component remain unchanged */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
  padding: 20px;
}

.enhanced-dialog {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.modal-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.close-button {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  transition: background 0.2s;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal-body {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #666;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.invoice-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  border-bottom: 1px solid #e9ecef;
  background: #f8f9fa;
}

.tab-btn {
  flex: 1;
  padding: 15px 20px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  transition: all 0.2s;
  position: relative;
}

.tab-btn:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.tab-btn.active {
  background: white;
  color: #667eea;
  border-bottom: 3px solid #667eea;
}

.line-count {
  background: #667eea;
  color: white;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 12px;
  min-width: 20px;
  text-align: center;
}

/* Tab Content */
.tab-content {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}

/* Form Sections */
.form-section {
  padding: 25px;
  border-bottom: 1px solid #f0f0f0;
}

.form-section:last-child {
  border-bottom: none;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e9ecef;
}

.section-title i {
  color: #667eea;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.form-group {
  margin-bottom: 20px;
  padding: 10px;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

.form-group label.required::after {
  content: ' *';
  color: #e74c3c;
}

.form-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-control.is-invalid {
  border-color: #e74c3c;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.form-control-sm {
  padding: 6px 8px;
  font-size: 13px;
}

.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 5px;
  font-size: 12px;
  color: #e74c3c;
}

.form-text {
  font-size: 12px;
  margin-top: 5px;
}

.text-muted {
  color: #6c757d;
}

/* Exchange Rate Specific Styles */
.exchange-rate-input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.exchange-rate-addon {
  position: absolute;
  right: 10px;
  color: #667eea;
  font-size: 14px;
  pointer-events: none;
}

.currency-info {
  font-size: 12px;
  color: #666;
  font-weight: normal;
}

.exchange-display {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 12px;
  margin-top: 20px;
}

.exchange-label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #666;
  margin-bottom: 8px;
}

.exchange-amount {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
}

.foreign-amount {
  color: #667eea;
}

.exchange-arrow {
  color: #28a745;
  font-size: 12px;
}

.local-amount {
  color: #28a745;
}

.local-currency {
  background: #e8f5e8;
  border: 1px solid #28a745;
  border-radius: 4px;
  padding: 8px 12px;
}

.local-currency .amount.local {
  color: #28a745;
  font-weight: 700;
}

/* Amount Summary */
.amount-summary {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  margin: 20px 25px;
}

.totals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.total-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
}

.total-item:last-child {
  border-bottom: none;
}

.total-item.grand-total {
  font-weight: 600;
  font-size: 16px;
  border-top: 2px solid #667eea;
  padding-top: 12px;
  margin-top: 8px;
  grid-column: 1 / -1;
}

.total-item .amount {
  font-weight: 600;
  color: #333;
}

.total-item .amount.discount {
  color: #e67e22;
}

/* Audit Trail Styles */
.audit-trail-section {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.audit-trail-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.audit-card {
  background: white;
  border-radius: 8px;
  padding: 16px;
  border-left: 4px solid #007bff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.maker-card {
  border-left-color: #28a745;
}

.checker-card {
  border-left-color: #17a2b8;
}

.audit-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.audit-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
}

.maker-icon {
  background: #28a745;
}

.checker-icon {
  background: #17a2b8;
}

.audit-title h6 {
  margin: 0;
  font-weight: 600;
  color: #495057;
}

.audit-status {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-created {
  background: #d4edda;
  color: #155724;
}

.status-approved {
  background: #d1ecf1;
  color: #0c5460;
}

.status-pending {
  background: #fff3cd;
  color: #856404;
}

.audit-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.audit-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
}

.audit-label {
  font-weight: 500;
  color: #6c757d;
  font-size: 13px;
}

.audit-value {
  color: #495057;
  font-size: 13px;
  font-weight: 500;
}

.audit-value.comment {
  font-style: italic;
  color: #6c757d;
  grid-column: 1 / -1;
  margin-top: 8px;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 4px;
}

.approval-status-summary {
  background: white;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e9ecef;
}

.status-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
}

.status-info-header h6 {
  margin: 0;
  font-weight: 600;
  color: #495057;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-badge.status-draft {
  background: #e9ecef;
  color: #6c757d;
}

.status-badge.status-pending {
  background: #fff3cd;
  color: #856404;
}

.status-badge.status-approved {
  background: #d1ecf1;
  color: #0c5460;
}

.status-badge.status-rejected {
  background: #f8d7da;
  color: #721c24;
}

.status-badge.status-paid {
  background: #d4edda;
  color: #155724;
}

.status-badge.status-cancelled {
  background: #f8d7da;
  color: #721c24;
}

.status-workflow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.workflow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.workflow-step.active {
  opacity: 1;
}

.step-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e9ecef;
  color: #6c757d;
  font-size: 20px;
  transition: all 0.3s ease;
}

.workflow-step.active .step-icon {
  background: #007bff;
  color: white;
  transform: scale(1.1);
}

.step-created.active .step-icon {
  background: #28a745;
}

.step-approved.active .step-icon {
  background: #17a2b8;
}

.step-label {
  font-size: 12px;
  font-weight: 500;
  color: #6c757d;
  text-align: center;
}

.workflow-step.active .step-label {
  color: #495057;
  font-weight: 600;
}

.workflow-arrow {
  color: #dee2e6;
  font-size: 16px;
}

.workflow-step.active + .workflow-arrow {
  color: #007bff;
}

/* Line Items Section */
.line-items-section {
  padding: 25px;
}

.add-line-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.add-line-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-danger {
  background: #dc3545;
  color: white;
}

.btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-add-line {
  font-size: 16px;
  padding: 12px 24px;
  font-weight: 600;
}

.btn-lg {
  padding: 12px 30px;
  font-size: 16px;
}

.btn-sm {
  width: 28px;
  height: 28px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
}

.line-count-info {
  background: #e9ecef;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #666;
  font-weight: 500;
}

.empty-line-state {
  text-align: center;
  padding: 60px 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px dashed #dee2e6;
}

.empty-content i {
  font-size: 64px;
  color: #dee2e6;
  margin-bottom: 20px;
}

.empty-content h4 {
  color: #666;
  margin-bottom: 10px;
}

.empty-content p {
  color: #999;
  margin-bottom: 30px;
}

.line-items-table-container {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}

.line-items-table .table {
  margin: 0;
  border-collapse: collapse;
  width: 100%;
}

.line-items-table .table th {
  background: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
  padding: 12px 8px;
  font-size: 13px;
  text-align: center;
}

.line-items-table .table td {
  padding: 8px;
  vertical-align: middle;
  border-top: 1px solid #dee2e6;
  font-size: 13px;
}

.line-number {
  text-align: center;
  font-weight: 600;
  color: #666;
}

.line-total {
  font-weight: 600;
  text-align: right;
  color: #333;
}

.line-row {
  transition: background-color 0.2s;
}

.line-row:hover {
  background-color: rgba(102, 126, 234, 0.05);
}

.add-more-lines {
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #e9ecef;
}

.btn-add-more {
  margin-right: 15px;
}

.quick-add-buttons {
  display: inline-flex;
  gap: 10px;
  margin-left: 15px;
}

.line-totals-summary {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  margin-top: 20px;
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
}

.footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .enhanced-dialog {
    max-width: 100%;
    height: 100%;
    max-height: 100vh;
    border-radius: 0;
  }

  .totals-grid {
    grid-template-columns: 1fr;
  }

  .add-line-header {
    flex-direction: column;
    gap: 15px;
  }

  .line-items-table-container {
    overflow-x: auto;
  }

  .line-items-table .table {
    min-width: 800px;
  }

  .footer-actions {
    flex-direction: column;
  }

  .footer-actions .btn {
    width: 100%;
    justify-content: center;
  }

  .tab-btn {
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
    padding: 12px 8px;
  }

  .quick-add-buttons {
    flex-direction: column;
    margin-left: 0;
    margin-top: 10px;
  }

  .form-row {
    flex-direction: column;
  }

  .col-md-6 {
    flex: 1;
    max-width: 100%;
  }

  .audit-section-header {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .audit-details {
    grid-template-columns: 1fr;
  }

  .status-workflow {
    flex-direction: column;
    gap: 16px;
  }

  .workflow-arrow {
    transform: rotate(90deg);
  }

  .audit-trail-container {
    gap: 12px;
  }

  .audit-card {
    padding: 12px;
  }

  .exchange-amount {
    flex-direction: column;
    align-items: flex-start;
  }

  .exchange-arrow {
    transform: rotate(90deg);
  }
}

@media (max-width: 480px) {
  .modal-header {
    padding: 15px;
  }

  .modal-title {
    font-size: 16px;
  }

  .form-section {
    padding: 20px 15px;
  }

  .section-title {
    font-size: 14px;
  }

  .modal-footer {
    padding: 15px;
  }

  .line-items-section {
    padding: 20px 15px;
  }

  .empty-line-state {
    padding: 40px 15px;
  }

  .empty-content i {
    font-size: 48px;
  }
}
</style>