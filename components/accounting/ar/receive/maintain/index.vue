<template>
  <div>
    <!-- Main Receipt Modal -->
    <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
      <div class="enhanced-dialog" @click.stop>
        <div class="modal-header">
          <h4 class="modal-title">
            <i class="fas fa-receipt"></i>
            {{ isEdit ? 'ແກ້ໄຂການຮັບຊຳລະ' : 'ເພີ່ມການຮັບຊຳລະໃໝ່' }}
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
          <div v-else class="receipt-form">
            <!-- Tab Navigation -->
            <div class="tab-navigation">
              <button
                type="button"
                :class="['tab-btn', { active: activeTab === 'header' }]"
                @click="activeTab = 'header'"
              >
                <i class="fas fa-file-alt"></i>
                ຂໍ້ມູນການຮັບຊຳລະ
              </button>
              <button
                type="button"
                :class="['tab-btn', { active: activeTab === 'allocations' }]"
                @click="activeTab = 'allocations'"
              >
                <i class="fas fa-list"></i>
                ການແບ່ງປັນຊຳລະ
                <span v-if="allocationLines.length > 0" class="line-count">{{
                  allocationLines.length
                }}</span>
              </button>
            </div>

            <!-- Receipt Header Tab -->
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
                      <label for="receiptNumber" class="required"
                        >ເລກທີໃບຮັບ</label
                      >
                      <input
                        id="receiptNumber"
                        v-model="form.receiptNumber"
                        type="text"
                        class="form-control"
                        :class="{ 'is-invalid': errors.receiptNumber }"
                        placeholder="ເຊັ່ນ: RCP-2025-001"
                        :readonly="isEdit"
                      />
                      <div v-if="errors.receiptNumber" class="invalid-feedback">
                        {{ errors.receiptNumber }}
                      </div>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="invoiceHeaderId" class="required"
                        >ໃບແຈ້ງໜີ້</label
                      >
                      <div class="invoice-selector">
                        <select
                          id="invoiceHeaderId"
                          v-model="form.invoiceHeaderId"
                          class="form-control"
                          :class="{ 'is-invalid': errors.invoiceHeaderId }"
                          @change="onInvoiceChange"
                        >
                          <option value="">ເລືອກໃບແຈ້ງໜີ້</option>
                          <option
                            v-for="invoice in invoices"
                            :key="invoice.id"
                            :value="invoice.id"
                          >
                            {{ invoice.invoiceNumber }} -
                            {{
                              invoice.customer ? invoice.customer.name : 'N/A'
                            }}
                            ({{ formatCurrency(invoice.totalAmount) }})
                          </option>
                        </select>
                        <button
                          type="button"
                          class="btn btn-outline-primary btn-browse-invoice"
                          @click="openInvoiceBrowser"
                          title="ເລືອກໃບແຈ້ງໜີ້"
                        >
                          <i class="fas fa-search"></i>
                          ຄົ້ນຫາ
                        </button>
                      </div>
                      <div
                        v-if="errors.invoiceHeaderId"
                        class="invalid-feedback"
                      >
                        {{ errors.invoiceHeaderId }}
                      </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="totalReceivedAmount" class="auto-calculated">
                        <i class="fas fa-calculator"></i>
                        ຍອດເງິນທີ່ຮັບ (ຄຳນວນອັດຕະໂນມັດ)
                      </label>
                      <input
                        id="totalReceivedAmount"
                        v-model="form.totalReceivedAmount"
                        type="number"
                        step="0.01"
                        min="0"
                        class="form-control auto-calculated-field"
                        :class="{ 'is-invalid': errors.totalReceivedAmount }"
                        placeholder="0.00"
                        readonly
                        disabled
                      />
                      <small class="form-text text-muted">
                        <i class="fas fa-info-circle"></i>
                        ຍອດນີ້ຈະຖືກຄຳນວນອັດຕະໂນມັດຈາກການແບ່ງປັນ
                      </small>
                      <div
                        v-if="errors.totalReceivedAmount"
                        class="invalid-feedback"
                      >
                        {{ errors.totalReceivedAmount }}
                      </div>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="paymentMethod" class="required"
                        >ວິທີຈ່າຍ</label
                      >
                      <select
                        id="paymentMethod"
                        v-model="form.paymentMethod"
                        class="form-control"
                        :class="{ 'is-invalid': errors.paymentMethod }"
                      >
                        <option value="cash">ເງິນສົດ</option>
                        <option value="check">ເຊັກ</option>
                        <option value="bank_transfer">ໂອນເງິນທະນາຄານ</option>
                        <option value="credit_card">ບັດເຄຣດິດ</option>
                        <option value="other">ອື່ນໆ</option>
                      </select>
                      <div v-if="errors.paymentMethod" class="invalid-feedback">
                        {{ errors.paymentMethod }}
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
                      <label for="bookingDate" class="required"
                        >ວັນທີບັນທຶກ</label
                      >
                      <input
                        id="bookingDate"
                        v-model="form.bookingDate"
                        type="date"
                        class="form-control"
                        :class="{ 'is-invalid': errors.bookingDate }"
                      />
                      <div v-if="errors.bookingDate" class="invalid-feedback">
                        {{ errors.bookingDate }}
                      </div>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="receivedDate" class="required"
                        >ວັນທີຮັບເງິນ</label
                      >
                      <input
                        id="receivedDate"
                        v-model="form.receivedDate"
                        type="date"
                        class="form-control"
                        :class="{ 'is-invalid': errors.receivedDate }"
                      />
                      <div v-if="errors.receivedDate" class="invalid-feedback">
                        {{ errors.receivedDate }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Additional Information Section -->
                <div class="form-section">
                  <h5 class="section-title">
                    <i class="fas fa-clipboard-list"></i>
                    ຂໍ້ມູນເພີ່ມເຕີມ
                  </h5>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="referenceNumber">ເລກອ້າງອີງ</label>
                      <input
                        id="referenceNumber"
                        v-model="form.referenceNumber"
                        type="text"
                        class="form-control"
                        placeholder="ເລກອ້າງອີງ (ຖ້າມີ)..."
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputterId">ຜູ້ບັນທຶກ</label>
                      <select
                        id="inputterId"
                        v-model="form.inputterId"
                        class="form-control"
                        disabled
                      >
                        <option value="">ເລືອກຜູ້ບັນທຶກ</option>
                        <option
                          v-for="user in users"
                          :key="user.id"
                          :value="user.id"
                        >
                          {{ user.cus_name }} - {{ user.cus_email }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="notes">ໝາຍເຫດ</label>
                    <textarea
                      id="notes"
                      v-model="form.notes"
                      class="form-control"
                      rows="3"
                      placeholder="ໝາຍເຫດກ່ຽວກັບການຮັບຊຳລະ..."
                    ></textarea>
                  </div>

                  <!-- Reason field for audit trail (only show when editing) -->
                  <div v-if="isEdit" class="form-group">
                    <label for="reason" class="required"
                      >ເຫດຜົນຂອງການແກ້ໄຂ</label
                    >
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

                <!-- Total Amount Display -->
                <div class="amount-summary">
                  <div class="totals-grid">
                    <div class="total-item">
                      <label>ຍອດທີ່ຮັບ (ຄຳນວນອັດຕະໂນມັດ):</label>
                      <span class="amount received">{{
                        formatCurrency(form.totalReceivedAmount)
                      }}</span>
                    </div>
                    <div class="total-item">
                      <label>ລວມການແບ່ງປັນ:</label>
                      <span class="amount allocated">{{
                        formatCurrency(calculatedAllocatedTotal)
                      }}</span>
                    </div>
                    <div class="total-item success-balance">
                      <label>ສະຖານະ:</label>
                      <span class="amount balance balanced">
                        <i class="fas fa-check-circle"></i>
                        ສົມດຸນ
                      </span>
                    </div>
                  </div>
                  <div class="balance-info">
                    <i class="fas fa-lightbulb"></i>
                    <span>
                      ກະລຸນາໄປທີ່ແຖບ "ການແບ່ງປັນຊຳລະ"
                      ເພື່ອໃສ່ຍອດແບ່ງປັນສຳລັບແຕ່ລະລາຍການ
                    </span>
                  </div>
                </div>
              </form>
            </div>

            <!-- Payment Allocation Tab -->
            <div v-show="activeTab === 'allocations'" class="tab-content">
              <div class="allocation-section">
                <!-- Allocation Header -->
                <div class="allocation-header">
                  <h5 class="section-title">
                    <i class="fas fa-list"></i>
                    ການແບ່ງປັນການຮັບຊຳລະ
                  </h5>
                  <div class="allocation-info">
                    <span v-if="selectedInvoice" class="invoice-info">
                      <strong>{{ selectedInvoice.invoiceNumber }}</strong> -
                      {{
                        selectedInvoice.customer
                          ? selectedInvoice.customer.name
                          : 'N/A'
                      }}
                    </span>
                    <span
                      v-if="allocationLines.length > 0"
                      class="allocation-count-info"
                    >
                      {{ allocationLines.length }} ລາຍການ
                    </span>
                  </div>
                </div>

                <!-- No Invoice Selected State -->
                <div v-if="!selectedInvoice" class="no-invoice-state">
                  <div class="empty-content">
                    <i class="fas fa-file-invoice"></i>
                    <h4>ກະລຸນາເລືອກໃບແຈ້ງໜີ້ກ່ອນ</h4>
                    <p>
                      ເພື່ອເຮັດການແບ່ງປັນການຮັບຊຳລະ
                      ກະລຸນາເລືອກໃບແຈ້ງໜີ້ໃນແຖບຂໍ້ມູນການຮັບຊຳລະກ່ອນ
                    </p>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="activeTab = 'header'"
                    >
                      <i class="fas fa-arrow-left"></i>
                      ກັບໄປເລືອກໃບແຈ້ງໜີ້
                    </button>
                  </div>
                </div>

                <!-- Invoice Lines Display (Fixed - Cannot Add/Remove) -->
                <div
                  v-else-if="allocationLines.length > 0"
                  class="allocation-table-container"
                >
                  <div class="allocation-notice">
                    <i class="fas fa-info-circle"></i>
                    <span
                      >ລາຍການດ້ານລຸ່ມແມ່ນມາຈາກໃບແຈ້ງໜີ້ທີ່ເລືອກ -
                      ກະລຸນາໃສ່ຍອດແບ່ງປັນສຳລັບແຕ່ລະລາຍການ</span
                    >
                  </div>

                  <div class="allocation-table">
                    <table class="table">
                      <thead>
                        <tr>
                          <th style="width: 40px">#</th>
                          <th style="width: 250px">ລາຍການໃບແຈ້ງໜີ້</th>
                          <th style="width: 100px">ຍອດໃບແຈ້ງໜີ້</th>
                          <th style="width: 120px">ຍອດແບ່ງປັນ *</th>
                          <th style="width: 100px">ວັນທີແບ່ງປັນ *</th>
                          <th style="width: 120px">ຍອດຄົງເຫຼືອ</th>
                          <th style="width: 150px">ໝາຍເຫດ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(allocation, index) in allocationLines"
                          :key="allocation.invoiceLineId"
                          class="allocation-row"
                        >
                          <td class="line-number">
                            {{ allocation.lineNumber }}
                          </td>
                          <td>
                            <div class="invoice-line-display">
                              <div class="line-description">
                                <strong>{{
                                  allocation.invoiceLine.description
                                }}</strong>
                              </div>
                              <div class="line-details">
                                ຈຳນວນ:
                                {{
                                  formatNumber(allocation.invoiceLine.quantity)
                                }}
                                ×
                                {{
                                  formatCurrency(
                                    allocation.invoiceLine.unitPrice
                                  )
                                }}
                                <span v-if="allocation.invoiceLine.taxRate > 0">
                                  + ພາສີ {{ allocation.invoiceLine.taxRate }}%
                                </span>
                              </div>
                            </div>
                          </td>
                          <td class="invoice-line-total">
                            {{
                              formatCurrency(allocation.invoiceLine.lineTotal)
                            }}
                          </td>
                          <td>
                            <input
                              v-model="allocation.allocatedAmount"
                              type="number"
                              step="0.01"
                              min="0"
                              :max="allocation.invoiceLine.lineTotal"
                              class="form-control form-control-sm"
                              :class="{
                                'is-invalid':
                                  errors[`allocation_${index}_allocatedAmount`],
                              }"
                              @blur="validateAllocation(allocation, index)"
                              placeholder="0.00"
                            />
                            <div
                              v-if="
                                errors[`allocation_${index}_allocatedAmount`]
                              "
                              class="invalid-feedback"
                            >
                              {{
                                errors[`allocation_${index}_allocatedAmount`]
                              }}
                            </div>
                          </td>
                          <td>
                            <input
                              v-model="allocation.allocationDate"
                              type="date"
                              class="form-control form-control-sm"
                              :class="{
                                'is-invalid':
                                  errors[`allocation_${index}_allocationDate`],
                              }"
                            />
                          </td>
                          <td class="remaining-amount">
                            <span
                              :class="{
                                'over-allocated': isOverAllocated(allocation),
                                'fully-allocated': isFullyAllocated(allocation),
                              }"
                            >
                              {{
                                formatCurrency(getRemainingAmount(allocation))
                              }}
                            </span>
                          </td>
                          <td>
                            <input
                              v-model="allocation.notes"
                              type="text"
                              class="form-control form-control-sm"
                              placeholder="ໝາຍເຫດ..."
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- Quick Allocation Actions -->
                  <div class="quick-allocation-actions">
                    <div class="quick-actions-left">
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-sm"
                        @click="allocateFullAmount"
                        title="ແບ່ງປັນຍອດເຕັມຂອງໃບແຈ້ງໜີ້"
                      >
                        <i class="fas fa-file-invoice-dollar"></i>
                        ຍອດເຕັມ
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-success btn-sm"
                        @click="allocateEqually"
                        title="ແບ່ງຍອດໃບແຈ້ງໜີ້ເທົ່າກັນ"
                      >
                        <i class="fas fa-equals"></i>
                        ແບ່ງເທົ່າກັນ
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-info btn-sm"
                        @click="allocateProportionally"
                        title="ແບ່ງຕາມອັດຕາສ່ວນຂອງແຕ່ລະລາຍການ"
                      >
                        <i class="fas fa-percentage"></i>
                        ແບ່ງຕາມອັດຕາສ່ວນ
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-warning btn-sm"
                        @click="clearAllAllocations"
                      >
                        <i class="fas fa-eraser"></i>
                        ລົບລ້າງທັງໝົດ
                      </button>
                    </div>
                    <div class="quick-actions-right">
                      <span class="allocation-helper">
                        <i class="fas fa-lightbulb"></i>
                        ໃຊ້ປຸ່ມດ້ານຊ້າຍເພື່ອແບ່ງປັນອັດຕະໂນມັດ
                      </span>
                    </div>
                  </div>

                  <!-- Allocation Summary -->
                  <div class="allocation-summary">
                    <div class="totals-grid">
                      <div class="total-item">
                        <label>ຍອດໃບແຈ້ງໜີ້:</label>
                        <span class="amount">{{
                          formatCurrency(selectedInvoice.totalAmount)
                        }}</span>
                      </div>
                      <div class="total-item">
                        <label>ຍອດທີ່ຮັບ (ຄຳນວນອັດຕະໂນມັດ):</label>
                        <span class="amount received">{{
                          formatCurrency(form.totalReceivedAmount)
                        }}</span>
                      </div>
                      <div class="total-item">
                        <label>ລວມການແບ່ງປັນ:</label>
                        <span class="amount allocated">{{
                          formatCurrency(calculatedAllocatedTotal)
                        }}</span>
                      </div>
                      <div class="total-item success-balance">
                        <label>ສະຖານະ:</label>
                        <span class="amount balance balanced">
                          <i class="fas fa-check-circle"></i>
                          ສົມດຸນ
                        </span>
                      </div>
                    </div>
                    <div class="balance-info">
                      <i class="fas fa-info-circle"></i>
                      <span>
                        ຍອດທີ່ຮັບຈະຖືກຄຳນວນອັດຕະໂນມັດຈາກລວມຍອດການແບ່ງປັນທັງໝົດ
                      </span>
                    </div>
                  </div>
                </div>

                <!-- No Invoice Lines State -->
                <div v-else class="no-lines-state">
                  <div class="empty-content">
                    <i class="fas fa-list"></i>
                    <h4>ໃບແຈ້ງໜີ້ນີ້ບໍ່ມີລາຍການ</h4>
                    <p>ໃບແຈ້ງໜີ້ທີ່ເລືອກບໍ່ມີລາຍການສິນຄ້າ/ການບໍລິການ</p>
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
    </div>

    <!-- Invoice Browser Modal -->
    <div
      v-if="showInvoiceBrowser"
      class="modal-overlay"
      @click="closeInvoiceBrowser"
    >
      <div class="invoice-browser-dialog" @click.stop>
        <div class="modal-header">
          <h4 class="modal-title">
            <i class="fas fa-search"></i>
            ເລືອກໃບແຈ້ງໜີ້
          </h4>
          <button
            type="button"
            class="close-button"
            @click="closeInvoiceBrowser"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="modal-body">
          <!-- Search Bar -->
          <div class="search-section">
            <div class="search-input-group">
              <i class="fas fa-search search-icon"></i>
              <input
                v-model="invoiceSearchQuery"
                type="text"
                class="form-control search-input"
                placeholder="ຄົ້ນຫາເລກໃບແຈ້ງໜີ້, ຊື່ລູກຄ້າ, ຫຼື ລາຍລະອຽດ..."
              />
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="invoiceBrowserLoading" class="loading-state">
            <div class="spinner"></div>
            <p>ກຳລັງໂຫຼດໃບແຈ້ງໜີ້...</p>
          </div>

          <!-- Invoice List -->
          <div
            v-else-if="searchFilteredInvoices.length > 0"
            class="invoice-list"
          >
            <div class="invoice-table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th style="width: 120px">ເລກໃບແຈ້ງໜີ້</th>
                    <th style="width: 200px">ລູກຄ້າ</th>
                    <th style="width: 100px">ວັນທີ</th>
                    <th style="width: 100px">ຄົບກຳໜົດ</th>
                    <th style="width: 100px">ຍອດເງິນ</th>
                    <th style="width: 80px">ສະຖານະ</th>
                    <th style="width: 80px">ເລືອກ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="invoice in searchFilteredInvoices"
                    :key="invoice.id"
                    class="invoice-row"
                  >
                    <td>
                      <strong>{{ invoice.invoiceNumber }}</strong>
                    </td>
                    <td>
                      <div class="customer-info">
                        <div class="customer-name">
                          {{ invoice.customer ? invoice.customer.name : 'N/A' }}
                        </div>
                        <div
                          v-if="invoice.customer && invoice.customer.email"
                          class="customer-email"
                        >
                          {{ invoice.customer.email }}
                        </div>
                      </div>
                    </td>
                    <td>{{ formatDate(invoice.invoiceDate) }}</td>
                    <td>{{ formatDate(invoice.dueDate) }}</td>
                    <td class="amount-cell">
                      {{ formatCurrency(invoice.totalAmount) }}
                    </td>
                    <td>
                      <span
                        class="status-badge"
                        :class="`status-${invoice.status}`"
                      >
                        {{ getStatusLabel(invoice.status) }}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="selectInvoiceFromBrowser(invoice)"
                        :disabled="invoice.id === form.invoiceHeaderId"
                      >
                        <i class="fas fa-check"></i>
                        {{
                          invoice.id === form.invoiceHeaderId
                            ? 'ເລືອກແລ້ວ'
                            : 'ເລືອກ'
                        }}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- No Results -->
          <div v-else class="no-results-state">
            <div class="empty-content">
              <i class="fas fa-file-invoice"></i>
              <h4>
                {{ invoiceSearchQuery ? 'ບໍ່ພົບໃບແຈ້ງໜີ້' : 'ບໍ່ມີໃບແຈ້ງໜີ້' }}
              </h4>
              <p>
                {{
                  invoiceSearchQuery
                    ? `ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ຕົງກັບ "${invoiceSearchQuery}"`
                    : 'ບໍ່ມີໃບແຈ້ງໜີ້ທີ່ສາມາດເລືອກໄດ້'
                }}
              </p>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <div class="footer-info">
            <span v-if="searchFilteredInvoices.length > 0" class="result-count">
              ພົບ {{ searchFilteredInvoices.length }} ໃບແຈ້ງໜີ້
            </span>
          </div>
          <div class="footer-actions">
            <button
              type="button"
              class="btn btn-secondary"
              @click="closeInvoiceBrowser"
            >
              <i class="fas fa-times"></i>
              ປິດ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- Key changes made to fix the invoice line population issue -->

<script>
export default {
  name: 'ReceiveHeaderMaintain',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    receipt: {
      type: Object,
      default: null,
    },
    invoices: {
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
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      allocationLines: [],
      nextTempId: 1,
      selectedInvoice: null,

      // Invoice Browser
      showInvoiceBrowser: false,
      invoiceBrowserLoading: false,
      filteredInvoices: [],
      invoiceSearchQuery: '',

      form: {
        id: null,
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        totalReceivedAmount: 0.0,
        paymentMethod: 'cash',
        referenceNumber: '',
        notes: '',
        inputterId: '',
        reason: '',
      },
    }
  },

  computed: {
    isEdit() {
      return !!(this.receipt && this.receipt.id)
    },
    user() {
      return this.$auth.user || {}
    },
    calculatedAllocatedTotal() {
      return this.allocationLines.reduce((sum, allocation) => {
        return sum + (parseFloat(allocation.allocatedAmount) || 0)
      }, 0)
    },

    allocationBalance() {
      return 0 // Always 0 since totalReceivedAmount = calculatedAllocatedTotal
    },

    autoCalculatedTotal() {
      return this.calculatedAllocatedTotal
    },

    availableInvoiceLines() {
      return this.selectedInvoice ? this.selectedInvoice.invoiceLines || [] : []
    },

    isFormValid() {
      const hasValidHeader =
        this.form.receiptNumber &&
        this.form.bookingDate &&
        this.form.receivedDate &&
        this.form.invoiceHeaderId &&
        this.form.paymentMethod &&
        (!this.isEdit || this.form.reason)

      const hasValidAllocations =
        this.allocationLines.length > 0 &&
        this.allocationLines.some(
          (allocation) =>
            allocation.invoiceLineId &&
            (parseFloat(allocation.allocatedAmount) || 0) > 0 &&
            allocation.allocationDate
        ) &&
        (parseFloat(this.form.totalReceivedAmount) || 0) > 0

      return hasValidHeader && hasValidAllocations
    },

    searchFilteredInvoices() {
      if (!this.invoiceSearchQuery) {
        return this.filteredInvoices
      }

      const query = this.invoiceSearchQuery.toLowerCase()
      return this.filteredInvoices.filter(
        (invoice) =>
          invoice.invoiceNumber.toLowerCase().includes(query) ||
          (invoice.client &&
            invoice.client.name.toLowerCase().includes(query)) ||
          (invoice.description &&
            invoice.description.toLowerCase().includes(query))
      )
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

    receipt: {
      handler() {
        if (this.visible) {
          this.initializeDialog()
        }
      },
    },

    // Auto-update totalReceivedAmount when allocation lines change
    calculatedAllocatedTotal: {
      handler(newTotal) {
        this.form.totalReceivedAmount = newTotal
      },
      immediate: true,
    },

    // Update allocation dates when received date changes
    'form.receivedDate': {
      handler(newDate) {
        if (newDate && this.allocationLines.length > 0) {
          this.allocationLines.forEach((allocation) => {
            if (
              !allocation.allocationDate ||
              allocation.allocationDate === ''
            ) {
              allocation.allocationDate = newDate
            }
          })
        }
      },
    },
  },

  methods: {
    // 🔧 FIXED: Enhanced updateSelectedInvoice method with better debugging
    async updateSelectedInvoice() {
      console.log('🔍 updateSelectedInvoice called')
      console.log('📝 Current form.invoiceHeaderId:', this.form.invoiceHeaderId)
      console.log('📋 Available invoices:', this.invoices.length)
      
      // Clear previous selection
      this.selectedInvoice = null

      if (!this.form.invoiceHeaderId) {
        console.log('❌ No invoice selected')
        if (!this.isEdit) {
          this.allocationLines = []
        }
        return
      }

      // 🔧 FIXED: Better ID comparison handling both string and number
      const invoiceId = parseInt(this.form.invoiceHeaderId)
      console.log('🔍 Looking for invoice ID:', invoiceId)

      // Find the selected invoice
      this.selectedInvoice = this.invoices.find(
        (inv) => {
          console.log('🔍 Comparing:', inv.id, 'with', invoiceId)
          return inv.id === invoiceId
        }
      )

      if (!this.selectedInvoice) {
        console.log('❌ Invoice not found in main invoices array, trying to load from API...')
        await this.loadInvoiceById(invoiceId)
      }

      if (!this.selectedInvoice) {
        console.log('❌ Could not find or load selected invoice')
        this.showToast('ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ເລືອກ', 'error')
        return
      }

      console.log('✅ Selected invoice found:', this.selectedInvoice.invoiceNumber)
      console.log('📄 Invoice lines:', this.selectedInvoice.invoiceLines?.length || 0)

      // 🔧 FIXED: Check if invoice lines exist and load if needed
      if (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0) {
        console.log('🔄 Loading invoice lines...')
        await this.loadSelectedInvoiceLines()
      }

      // 🔧 FIXED: Create allocation lines for new records only
      if (this.selectedInvoice.invoiceLines && this.selectedInvoice.invoiceLines.length > 0) {
        console.log('✅ Creating allocation lines from', this.selectedInvoice.invoiceLines.length, 'invoice lines')
        
        // Only auto-create allocation lines for new records
        if (!this.isEdit) {
          this.createAllocationLinesFromInvoice()
        } else {
          console.log('ℹ️ Edit mode - not auto-creating allocation lines')
        }
      } else {
        console.log('❌ No invoice lines available')
        this.showToast('ໃບແຈ້ງໜີ້ນີ້ບໍ່ມີລາຍການສິນຄ້າ', 'warning')
      }

      console.log('📊 Final allocation lines count:', this.allocationLines.length)
    },

    // 🔧 NEW: Method to load invoice by ID if not found in main array
    async loadInvoiceById(invoiceId) {
      try {
        console.log('🔄 Loading invoice by ID:', invoiceId)
        
        const { data } = await this.$axios.get(`/api/ar-invoices/${invoiceId}`, {
          params: {
            include: ['client', 'currency', 'invoiceLines']
          }
        })

        console.log('📥 API response for single invoice:', data)

        if (data.success && data.data) {
          this.selectedInvoice = data.data
          console.log('✅ Invoice loaded successfully:', this.selectedInvoice.invoiceNumber)
        } else if (data.invoiceNumber) {
          // Handle case where response structure is different
          this.selectedInvoice = data
          console.log('✅ Invoice loaded (alt structure):', this.selectedInvoice.invoiceNumber)
        }
      } catch (error) {
        console.error('❌ Error loading invoice by ID:', error)
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error')
      }
    },

    // 🔧 ENHANCED: Better invoice lines loading with debugging
    async loadSelectedInvoiceLines() {
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice to load lines for')
        return
      }

      try {
        console.log('🔄 Loading invoice lines for:', this.selectedInvoice.invoiceNumber)

        const { data } = await this.$axios.get(
          `/api/ar-invoice-lines/by-header/${this.selectedInvoice.id}`
        )

        console.log('📥 Invoice lines API response:', data)

        // Handle different possible response structures
        if (data.success && data.data && Array.isArray(data.data)) {
          this.selectedInvoice.invoiceLines = data.data
          console.log('✅ Invoice lines loaded:', data.data.length)
        } else if (Array.isArray(data)) {
          this.selectedInvoice.invoiceLines = data
          console.log('✅ Invoice lines loaded (alt structure):', data.length)
        } else {
          console.warn('❓ Unexpected response structure:', data)
          this.selectedInvoice.invoiceLines = []
        }

      } catch (error) {
        console.error('❌ Error loading invoice lines:', error)
        this.selectedInvoice.invoiceLines = []
        this.showToast('ມີປັນຫາໃນການໂຫຼດລາຍການໃບແຈ້ງໜີ້', 'error')
      }
    },

    // 🔧 ENHANCED: Better allocation lines creation with debugging
    createAllocationLinesFromInvoice() {
      console.log('🔧 createAllocationLinesFromInvoice called')
      
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice')
        return
      }

      if (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0) {
        console.log('❌ No invoice lines available')
        this.allocationLines = []
        return
      }

      console.log('✅ Creating allocation lines from', this.selectedInvoice.invoiceLines.length, 'invoice lines')

      this.allocationLines = this.selectedInvoice.invoiceLines.map((line, index) => {
        const allocation = {
          tempId: this.nextTempId++,
          lineNumber: index + 1,
          invoiceLineId: line.id,
          invoiceLine: line, // Store the full line object for display
          allocatedAmount: 0, // Default to 0, user will fill this
          allocationDate: this.form.receivedDate || new Date().toISOString().split('T')[0],
          notes: '',
        }

        console.log(`📝 Created allocation ${index + 1}:`, {
          lineNumber: allocation.lineNumber,
          invoiceLineId: allocation.invoiceLineId,
          description: line.description,
          lineTotal: line.lineTotal
        })

        return allocation
      })

      console.log('🎉 Successfully created', this.allocationLines.length, 'allocation lines')
      
      // Force reactivity update
      this.$forceUpdate()
    },

    // 🔧 ENHANCED: Better invoice change handler
    async onInvoiceChange() {
      console.log('🔄 onInvoiceChange triggered')
      await this.updateSelectedInvoice()
      this.clearFieldError('invoiceHeaderId')
      
      // Switch to allocations tab if lines were created
      if (this.allocationLines.length > 0) {
        console.log('🔄 Switching to allocations tab')
        this.$nextTick(() => {
          this.activeTab = 'allocations'
        })
      }
    },

    // 🔧 ENHANCED: Better invoice browser with full data loading
    async openInvoiceBrowser() {
      console.log('🔄 Opening invoice browser')
      this.showInvoiceBrowser = true
      this.invoiceBrowserLoading = true
      this.invoiceSearchQuery = ''

      try {
        const { data } = await this.$axios.get('/api/ar-invoices', {
          params: {
            status: ['draft', 'sent'], 
            include: ['client', 'currency', 'invoiceLines'], // Include all needed data
            limit: 100 // Increase limit to see more invoices
          },
        })

        console.log('📥 Invoice browser API response:', data)

        // 🔧 FIXED: Handle the nested structure in your data
        if (data.success && data.data && data.data.invoices && Array.isArray(data.data.invoices)) {
          this.filteredInvoices = data.data.invoices
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices for browser')
        } else if (data.success && data.data && Array.isArray(data.data)) {
          this.filteredInvoices = data.data
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices (alt structure)')
        } else if (Array.isArray(data)) {
          this.filteredInvoices = data
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices (direct array)')
        } else {
          console.warn('❓ Unexpected response structure:', data)
          this.filteredInvoices = []
        }

      } catch (error) {
        console.error('❌ Error loading invoices for browser:', error)
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error')
        this.filteredInvoices = []
      } finally {
        this.invoiceBrowserLoading = false
      }
    },

    // 🔧 ENHANCED: Better invoice selection from browser
    async selectInvoiceFromBrowser(invoice) {
      console.log('🎯 Selecting invoice from browser:', invoice.invoiceNumber)

      // Set the form value
      this.form.invoiceHeaderId = invoice.id

      // Add the invoice to main invoices array if not present
      const existingIndex = this.invoices.findIndex(inv => inv.id === invoice.id)
      if (existingIndex === -1) {
        console.log('➕ Adding invoice to main array')
        this.invoices.push(invoice)
      } else {
        console.log('🔄 Updating existing invoice in main array')
        this.invoices[existingIndex] = invoice
      }

      // Close browser and trigger change
      this.closeInvoiceBrowser()
      await this.onInvoiceChange()
      this.clearFieldError('invoiceHeaderId')
    },

    // Rest of your existing methods remain the same...
    async initializeDialog() {
      this.activeTab = 'header'
      this.clearErrors()

      if (this.receipt) {
        this.form = {
          id: this.receipt.id,
          receiptNumber: this.receipt.receiptNumber,
          bookingDate: this.receipt.bookingDate
            ? this.receipt.bookingDate.split('T')[0]
            : '',
          receivedDate: this.receipt.receivedDate
            ? this.receipt.receivedDate.split('T')[0]
            : '',
          invoiceHeaderId: this.receipt.invoiceHeaderId,
          totalReceivedAmount: this.receipt.totalReceivedAmount || 0.0,
          paymentMethod: this.receipt.paymentMethod || 'cash',
          referenceNumber: this.receipt.referenceNumber || '',
          notes: this.receipt.notes || '',
          inputterId: this.receipt.inputterId || '',
          reason: '',
        }

        await this.loadAllocationLines(this.receipt.id)
        await this.updateSelectedInvoice()
      } else {
        this.resetForm()

        // Set default dates to today
        const today = new Date().toISOString().split('T')[0]
        this.form.bookingDate = today
        this.form.receivedDate = today

        // Initialize with empty allocation lines
        this.allocationLines = []
        
        // Set default user
        if (this.user && this.user.id) {
          this.form.inputterId = this.user.id
        }
      }
    },

    resetDialog() {
      this.resetForm()
      this.allocationLines = []
      this.selectedInvoice = null
      this.clearErrors()
      this.activeTab = 'header'
      this.formLoading = false
      this.saving = false
      this.showInvoiceBrowser = false
      this.filteredInvoices = []
      this.invoiceSearchQuery = ''
    },

    async loadAllocationLines(receiptId) {
      try {
        const { data } = await this.$axios.get(
          `/api/ar-receive-lines/by-header/${receiptId}`
        )
        this.allocationLines = data.data || []

        this.allocationLines.forEach((allocation) => {
          if (!allocation.tempId) {
            allocation.tempId = this.nextTempId++
          }
          if (allocation.allocationDate) {
            allocation.allocationDate = allocation.allocationDate.split('T')[0]
          }
        })
      } catch (error) {
        console.error('Error loading allocation lines:', error)
        this.allocationLines = []
      }
    },

    closeInvoiceBrowser() {
      this.showInvoiceBrowser = false
      this.filteredInvoices = []
      this.invoiceSearchQuery = ''
    },

    // Allocation Helper Methods
    allocateFullAmount() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return

      this.allocationLines.forEach((allocation) => {
        if (allocation.invoiceLine) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0
          allocation.allocatedAmount = lineTotal.toFixed(2)
        }
      })
    },

    allocateEqually() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return

      const totalInvoice = parseFloat(this.selectedInvoice.totalAmount) || 0
      const amountPerLine = totalInvoice / this.allocationLines.length

      this.allocationLines.forEach((allocation) => {
        allocation.allocatedAmount = amountPerLine.toFixed(2)
      })
    },

    allocateProportionally() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return

      this.allocationLines.forEach((allocation) => {
        if (allocation.invoiceLine) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0
          allocation.allocatedAmount = lineTotal.toFixed(2)
        }
      })
    },

    clearAllAllocations() {
      this.allocationLines.forEach((allocation) => {
        allocation.allocatedAmount = 0
      })
    },

    getRemainingAmount(allocation) {
      if (!allocation.invoiceLine) return 0
      const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0
      const allocated = parseFloat(allocation.allocatedAmount) || 0
      return lineTotal - allocated
    },

    isFullyAllocated(allocation) {
      return this.getRemainingAmount(allocation) === 0
    },

    isOverAllocated(allocation) {
      return this.getRemainingAmount(allocation) < 0
    },

    validateAllocation(allocation, index) {
      const amount = parseFloat(allocation.allocatedAmount) || 0
      const maxAllowed = parseFloat(allocation.invoiceLine.lineTotal) || 0

      if (amount > maxAllowed) {
        this.errors[
          `allocation_${index}_allocatedAmount`
        ] = `ຈຳນວນເກີນກວ່າທີ່ເຫຼືອ (ສູງສຸດ: ${this.formatCurrency(maxAllowed)})`
      } else {
        this.clearFieldError(`allocation_${index}_allocatedAmount`)
      }
    },

    validateForm() {
      this.errors = {}

      // Header validation
      if (!this.form.receiptNumber) {
        this.errors.receiptNumber = 'ກະລຸນາໃສ່ເລກທີໃບຮັບ'
      }

      if (!this.form.invoiceHeaderId) {
        this.errors.invoiceHeaderId = 'ກະລຸນາເລືອກໃບແຈ້ງໜີ້'
      }

      if (!this.form.bookingDate) {
        this.errors.bookingDate = 'ກະລຸນາໃສ່ວັນທີບັນທຶກ'
      }

      if (!this.form.receivedDate) {
        this.errors.receivedDate = 'ກະລຸນາໃສ່ວັນທີຮັບເງິນ'
      }

      if (!this.form.paymentMethod) {
        this.errors.paymentMethod = 'ກະລຸນາເລືອກວິທີຈ່າຍ'
      }

      // Date validation
      if (this.form.bookingDate && this.form.receivedDate) {
        const bookingDate = new Date(this.form.bookingDate)
        const receivedDate = new Date(this.form.receivedDate)

        if (receivedDate < bookingDate) {
          this.errors.receivedDate = 'ວັນທີຮັບເງິນຕ້ອງບໍ່ກ່ອນວັນທີບັນທຶກ'
        }
      }

      // Allocation validation
      if (this.allocationLines.length === 0) {
        this.errors.allocations = 'ກະລຸນາເພີ່ມການແບ່ງປັນຢ່າງໜ້ອຍ 1 ລາຍການ'
      } else {
        let hasValidAllocation = false
        let totalAllocated = 0

        for (let i = 0; i < this.allocationLines.length; i++) {
          const allocation = this.allocationLines[i]

          if (!allocation.invoiceLineId) {
            this.errors[`allocation_${i}_invoiceLineId`] =
              'ກະລຸນາເລືອກລາຍການໃບແຈ້ງໜີ້'
          }

          const allocatedAmount = parseFloat(allocation.allocatedAmount) || 0

          if (allocatedAmount <= 0) {
            this.errors[`allocation_${i}_allocatedAmount`] =
              'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0'
          } else {
            hasValidAllocation = true
            totalAllocated += allocatedAmount
          }

          if (!allocation.allocationDate) {
            this.errors[`allocation_${i}_allocationDate`] =
              'ກະລຸນາໃສ່ວັນທີແບ່ງປັນ'
          }

          if (this.isOverAllocated(allocation)) {
            this.errors[`allocation_${i}_allocatedAmount`] =
              'ຍອດແບ່ງປັນເກີນກວ່າທີ່ເຫຼືອ'
          }
        }

        if (!hasValidAllocation) {
          this.errors.allocations = 'ຢ່າງໜ້ອຍຕ້ອງມີ 1 ລາຍການທີ່ມີຍອດແບ່ງປັນ'
        }

        if (totalAllocated <= 0) {
          this.errors.totalReceivedAmount = 'ຍອດລວມການແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0'
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
        if (
          Object.keys(this.errors).some((key) => key.startsWith('allocation_'))
        ) {
          this.activeTab = 'allocations'
        } else {
          this.activeTab = 'header'
        }
        return
      }

      this.saving = true

      const validAllocationLines = this.allocationLines.filter((allocation) => {
        const amount = parseFloat(allocation.allocatedAmount) || 0
        return amount > 0 && allocation.invoiceLineId
      })
      
      if (this.isEdit) {
        this.form.updateUserId = this.user.id
      } else {
        this.form.inputterId = this.user.id
      }

      const formData = {
        ...this.form,
        totalReceivedAmount: parseFloat(this.form.totalReceivedAmount) || 0,
        allocationLines: validAllocationLines.map((allocation, index) => ({
          tempId: allocation.tempId,
          lineNumber: index + 1,
          invoiceLineId: allocation.invoiceLineId,
          allocatedAmount: parseFloat(allocation.allocatedAmount) || 0,
          allocationDate: allocation.allocationDate,
          notes: allocation.notes || '',
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
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        totalReceivedAmount: 0.0,
        paymentMethod: 'cash',
        referenceNumber: '',
        notes: '',
        inputterId: this.user?.id || '',
        reason: '',
      }
    },

    // Utility Methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount || 0)
    },

    formatNumber(number) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(number || 0)
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    },

    getStatusLabel(status) {
      const statusLabels = {
        draft: 'ຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳໜົດ',
        cancelled: 'ຍົກເລີກ',
      }
      return statusLabels[status] || status
    },

    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`)
      if (this.$toast) {
        if (typeof this.$toast[type] === 'function') {
          this.$toast[type](message)
        } else {
          console.log(message)
        }
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`)
        }
      }
    },

    // 🔧 NEW: Debug method to manually test allocation creation
    debugCreateAllocations() {
      console.log('🔧 DEBUG: Manually creating allocations')
      console.log('Selected invoice:', this.selectedInvoice)
      console.log('Invoice lines:', this.selectedInvoice?.invoiceLines)
      
      if (this.selectedInvoice && this.selectedInvoice.invoiceLines) {
        this.createAllocationLinesFromInvoice()
        this.showToast(`Debug: Created ${this.allocationLines.length} allocations`, 'info')
      } else {
        this.showToast('Debug: No invoice or invoice lines found', 'error')
      }
    }
  },
}
</script>

<style scoped>
/* Main Modal Styles */
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

.invoice-browser-dialog {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1000px;
  max-height: 80vh;
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
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
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
  border-top: 4px solid #28a745;
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

.receipt-form {
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
  background: rgba(40, 167, 69, 0.1);
  color: #28a745;
}

.tab-btn.active {
  background: white;
  color: #28a745;
  border-bottom: 3px solid #28a745;
}

.line-count {
  background: #28a745;
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
  color: #28a745;
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
  border-color: #28a745;
  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
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

/* Auto-calculated field styles */
.auto-calculated-field {
  background-color: #f8f9fa !important;
  border-style: dashed !important;
  color: #495057 !important;
  font-weight: 600;
  cursor: not-allowed;
}

.auto-calculated-field:disabled {
  opacity: 0.8;
}

.form-group label.auto-calculated {
  color: #28a745;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-text.text-muted {
  font-size: 12px;
  color: #6c757d !important;
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Invoice Selector */
.invoice-selector {
  display: flex;
  gap: 10px;
}

.invoice-selector select {
  flex: 1;
}

.btn-browse-invoice {
  white-space: nowrap;
  padding: 10px 16px;
}

/* Amount Summary */
.amount-summary,
.allocation-summary {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #28a745;
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

.total-item.balance-warning {
  background: #fff3cd;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ffeaa7;
  display: none; /* Hide balance warning since balance should always be 0 */
}

.total-item .amount {
  font-weight: 600;
  color: #333;
}

.total-item .amount.received {
  color: #28a745;
}

.total-item .amount.allocated {
  color: #007bff;
}

.total-item .amount.balance.negative {
  color: #dc3545;
}

.total-item .amount.balance.positive {
  color: #ffc107;
}

/* New styles for success balance */
.success-balance {
  background: #d4edda;
  border-radius: 6px;
  padding: 8px 12px;
}

.amount.balanced {
  color: #155724 !important;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}

.balance-info {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  padding: 12px;
  background: #e7f3ff;
  border: 1px solid #bee5eb;
  border-radius: 6px;
  color: #0c5460;
  font-size: 14px;
}

.balance-message {
  display: none; /* Hide balance message since balance should always be 0 */
}

/* Allocation Section */
.allocation-section {
  padding: 25px;
}

.allocation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.allocation-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.invoice-info {
  color: #666;
  font-size: 14px;
}

.allocation-count-info {
  background: #e9ecef;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #666;
  font-weight: 500;
}

.no-invoice-state,
.no-lines-state,
.no-results-state {
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

.allocation-notice {
  background: #e7f3ff;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 6px;
  border-left: 4px solid #007bff;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #495057;
}

.allocation-table-container {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}

.allocation-table .table,
.invoice-table-container .table {
  margin: 0;
  border-collapse: collapse;
  width: 100%;
}

.allocation-table .table th,
.invoice-table-container .table th {
  background: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
  padding: 12px 8px;
  font-size: 13px;
  text-align: center;
}

.allocation-table .table td,
.invoice-table-container .table td {
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

.invoice-line-display {
  line-height: 1.4;
}

.line-description {
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.line-details {
  font-size: 12px;
  color: #666;
}

.invoice-line-total {
  text-align: right;
  font-weight: 600;
  color: #28a745;
}

.remaining-amount {
  font-weight: 600;
  text-align: right;
  color: #28a745;
}

.over-allocated {
  color: #dc3545 !important;
}

.fully-allocated {
  color: #6c757d !important;
}

.allocation-row,
.invoice-row {
  transition: background-color 0.2s;
}

.allocation-row:hover,
.invoice-row:hover {
  background-color: rgba(40, 167, 69, 0.05);
}

/* Quick Allocation Actions */
.quick-allocation-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-top: 1px solid #e9ecef;
  margin-top: 10px;
}

.quick-actions-left {
  display: flex;
  gap: 10px;
}

.allocation-helper {
  font-size: 12px;
  color: #666;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Invoice Browser Styles */
.search-section {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  background: #f8f9fa;
}

.search-input-group {
  position: relative;
  max-width: 400px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 16px;
}

.search-input {
  padding-left: 40px;
  font-size: 16px;
  border-radius: 8px;
}

.invoice-list {
  flex: 1;
  overflow-y: auto;
  max-height: 500px;
}

.customer-info {
  line-height: 1.4;
}

.customer-name {
  font-weight: 500;
  color: #333;
}

.customer-email {
  font-size: 12px;
  color: #666;
}

.amount-cell {
  text-align: right;
  font-weight: 600;
  color: #28a745;
}

.status-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
}

.status-draft {
  background: #ffeaa7;
  color: #fdcb6e;
}

.status-sent {
  background: #74b9ff;
  color: #0984e3;
}

.status-paid {
  background: #00b894;
  color: #00a085;
}

.status-overdue {
  background: #ff7675;
  color: #d63031;
}

.status-cancelled {
  background: #636e72;
  color: #2d3436;
}

/* Button Styles */
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
  text-decoration: none;
}

.btn-primary {
  background: #28a745;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-outline-primary {
  background: white;
  color: #007bff;
  border: 2px solid #007bff;
}

.btn-outline-primary:hover {
  background: #007bff;
  color: white;
}

.btn-outline-success {
  background: white;
  color: #28a745;
  border: 2px solid #28a745;
}

.btn-outline-info {
  background: white;
  color: #17a2b8;
  border: 2px solid #17a2b8;
}

.btn-outline-warning {
  background: white;
  color: #ffc107;
  border: 2px solid #ffc107;
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

.btn-sm {
  padding: 6px 12px;
  font-size: 12px;
}

.btn-lg {
  padding: 12px 30px;
  font-size: 16px;
}

/* Modal Footer */
.modal-footer {
  padding: 20px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-info {
  display: flex;
  align-items: center;
}

.result-count {
  color: #666;
  font-size: 14px;
}

.footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .enhanced-dialog,
  .invoice-browser-dialog {
    max-width: 100%;
    height: 100%;
    max-height: 100vh;
    border-radius: 0;
  }

  .totals-grid {
    grid-template-columns: 1fr;
  }

  .allocation-header {
    flex-direction: column;
    gap: 15px;
  }

  .allocation-info {
    flex-direction: column;
    gap: 10px;
  }

  .allocation-table-container,
  .invoice-table-container {
    overflow-x: auto;
  }

  .allocation-table .table,
  .invoice-table-container .table {
    min-width: 900px;
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

  .form-row {
    flex-direction: column;
  }

  .col-md-6 {
    flex: 1;
    max-width: 100%;
  }

  .invoice-selector {
    flex-direction: column;
    gap: 10px;
  }

  .quick-allocation-actions {
    flex-direction: column;
    gap: 15px;
  }

  .search-input-group {
    max-width: 100%;
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

  .allocation-section {
    padding: 20px 15px;
  }

  .no-invoice-state,
  .no-lines-state,
  .no-results-state {
    padding: 40px 15px;
  }

  .empty-content i {
    font-size: 48px;
  }

  .amount-summary,
  .allocation-summary {
    margin: 20px 15px;
  }
}
</style>