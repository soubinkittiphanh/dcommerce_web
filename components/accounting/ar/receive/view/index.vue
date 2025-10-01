<template>
  <div v-if="visible" class="modal-overlay" @click="closeDialog">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <h2>ລາຍລະອຽດການຮັບຊຳລະ</h2>
        <button class="close-btn" @click="closeDialog">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body" v-if="receipt">
        <!-- Receipt Header Information -->
        <div class="info-section">
          <div class="section-header">
            <h3>
              <i class="fas fa-receipt"></i>
              ຂໍ້ມູນການຮັບຊຳລະ
            </h3>
            <span :class="['payment-method-badge', receipt.paymentMethod]">
              {{ formatPaymentMethod(receipt.paymentMethod) }}
            </span>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <label>ເລກທີໃບຮັບ:</label>
              <span class="receipt-number">{{ receipt.receiptNumber }}</span>
            </div>

            <div class="info-item">
              <label>ວັນທີບັນທຶກ:</label>
              <span>{{ formatDate(receipt.bookingDate) }}</span>
            </div>

            <div class="info-item">
              <label>ວັນທີຮັບເງິນ:</label>
              <span>{{ formatDate(receipt.receivedDate) }}</span>
            </div>

            <div class="info-item">
              <label>ຍອດເງິນທີ່ຮັບ:</label>
              <span class="amount-received">{{ formatCurrency(receipt.totalReceivedAmount) }}</span>
            </div>

            <div class="info-item" v-if="receipt.referenceNumber">
              <label>ເລກອ້າງອີງ:</label>
              <span class="reference-number">{{ receipt.referenceNumber }}</span>
            </div>
          </div>
        </div>

        <!-- Invoice Information -->
        <div class="info-section" v-if="receipt.invoiceHeader">
          <div class="section-header">
            <h3>
              <i class="fas fa-file-invoice"></i>
              ຂໍ້ມູນໃບແຈ້ງໜີ້
            </h3>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <label>ເລກທີໃບແຈ້ງໜີ້:</label>
              <span class="invoice-number">{{ receipt.invoiceHeader.invoiceNumber }}</span>
            </div>

            <div class="info-item">
              <label>ວັນທີໃບແຈ້ງໜີ້:</label>
              <span>{{ formatDate(receipt.invoiceHeader.invoiceDate) }}</span>
            </div>

            <div class="info-item" v-if="receipt.invoiceHeader.dueDate">
              <label>ວັນທີຄົບກຳນົດ:</label>
              <span>{{ formatDate(receipt.invoiceHeader.dueDate) }}</span>
            </div>

            <div class="info-item">
              <label>ຍອດໃບແຈ້ງໜີ້:</label>
              <span class="invoice-amount">{{ formatCurrency(receipt.invoiceHeader.totalAmount) }}</span>
            </div>

            <div class="info-item" v-if="receipt.invoiceHeader.customer">
              <label>ລູກຄ້າ:</label>
              <span class="customer-name">{{ receipt.invoiceHeader.customer.name }}</span>
            </div>

            <div class="info-item">
              <label>ສະຖານະໃບແຈ້ງໜີ້:</label>
              <span :class="['status-badge', receipt.invoiceHeader.status]">
                {{ formatInvoiceStatus(receipt.invoiceHeader.status) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Payment Summary -->
        <div class="info-section">
          <div class="section-header">
            <h3>
              <i class="fas fa-calculator"></i>
              ສະຫຼຸບການຮັບຊຳລະ
            </h3>
          </div>

          <div class="payment-summary">
            <div class="summary-row">
              <label>ຍອດໃບແຈ້ງໜີ້:</label>
              <span class="amount invoice-total">{{ formatCurrency(receipt.invoiceHeader?.totalAmount || 0) }}</span>
            </div>

            <div class="summary-row">
              <label>ຍອດທີ່ຮັບຄັ້ງນີ້:</label>
              <span class="amount current-payment">{{ formatCurrency(receipt.totalReceivedAmount) }}</span>
            </div>

            <div class="summary-row">
              <label>ລວມທີ່ຮັບແລ້ວທັງໝົດ:</label>
              <span class="amount total-received">{{ formatCurrency(calculateTotalReceived()) }}</span>
            </div>

            <div class="summary-row subtotal">
              <label>ຍອດຄົງເຫຼືອ:</label>
              <span class="amount remaining" :class="{ 'fully-paid': getRemainingBalance() <= 0 }">
                {{ formatCurrency(getRemainingBalance()) }}
              </span>
            </div>

            <div v-if="getRemainingBalance() <= 0" class="paid-status">
              <i class="fas fa-check-circle"></i>
              <span>ຈ່າຍຄົບແລ້ວ</span>
            </div>
          </div>
        </div>

        <!-- Payment Allocation Details -->
        <div class="info-section" v-if="receipt.receiveLines && receipt.receiveLines.length > 0">
          <div class="section-header">
            <h3>
              <i class="fas fa-list"></i>
              ລາຍລະອຽດການແບ່ງປັນ
            </h3>
            <span class="item-count">{{ receipt.receiveLines.length }} ລາຍການ</span>
          </div>

          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>ລຳດັບ</th>
                  <th>ລາຍການໃບແຈ້ງໜີ້</th>
                  <th>ຍອດແບ່ງປັນ</th>
                  <th>ວັນທີແບ່ງປັນ</th>
                  <th>ໝາຍເຫດ</th>
                  <th>ສະຖານະ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="line in receipt.receiveLines" :key="line.id">
                  <td class="line-number">{{ line.lineNumber }}</td>
                  <td>
                    <div class="invoice-line-info">
                      <div class="line-description">
                        <strong>{{ line.invoiceLine ? line.invoiceLine.description : 'N/A' }}</strong>
                      </div>
                      <div v-if="line.invoiceLine" class="line-details">
                        ຈຳນວນ: {{ formatNumber(line.invoiceLine.quantity) }} × 
                        {{ formatCurrency(line.invoiceLine.unitPrice) }} = 
                        {{ formatCurrency(line.invoiceLine.lineTotal) }}
                      </div>
                    </div>
                  </td>
                  <td class="allocated-amount">
                    {{ formatCurrency(line.allocatedAmount) }}
                  </td>
                  <td>{{ formatDate(line.allocationDate) }}</td>
                  <td>
                    <span class="line-notes">{{ line.notes || '-' }}</span>
                  </td>
                  <td>
                    <span class="allocation-status" :class="getAllocationStatusClass(line)">
                      {{ getAllocationStatusText(line) }}
                    </span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="summary-row">
                  <td colspan="2"><strong>ລວມການແບ່ງປັນ:</strong></td>
                  <td class="allocated-total"><strong>{{ formatCurrency(calculateTotalAllocations()) }}</strong></td>
                  <td colspan="3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <!-- Notes Section -->
        <div class="info-section" v-if="receipt.notes">
          <div class="section-header">
            <h3>
              <i class="fas fa-comment-alt"></i>
              ໝາຍເຫດ
            </h3>
          </div>

          <div class="notes-content">
            {{ receipt.notes }}
          </div>
        </div>

        <!-- System Information -->
        <div class="info-section">
          <div class="section-header">
            <h3>
              <i class="fas fa-info-circle"></i>
              ຂໍ້ມູນລະບົບ
            </h3>
          </div>

          <div class="info-grid">
            <div class="info-item" v-if="receipt.inputter">
              <label>ຜູ້ບັນທຶກ:</label>
              <span>{{ receipt.inputter.username }}</span>
            </div>

            <div class="info-item" v-if="receipt.maker">
              <label>ຜູ້ສ້າງ:</label>
              <span>{{ receipt.maker.username }}</span>
            </div>

            <div class="info-item">
              <label>ວັນທີສ້າງ:</label>
              <span>{{ formatDateTime(receipt.createdAt) }}</span>
            </div>

            <div class="info-item" v-if="receipt.updateUser">
              <label>ຜູ້ແກ້ໄຂຫຼ້າສຸດ:</label>
              <span>{{ receipt.updateUser.username }}</span>
            </div>

            <div class="info-item" v-if="receipt.updateTimestamp">
              <label>ວັນທີແກ້ໄຂຫຼ້າສຸດ:</label>
              <span>{{ formatDateTime(receipt.updateTimestamp) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeDialog">
          <i class="fas fa-times"></i>
          ປິດ
        </button>
        <button type="button" class="btn btn-success" @click="printReceipt">
          <i class="fas fa-print"></i>
          ພິມໃບຮັບ
        </button>
        <button type="button" class="btn btn-primary" @click="editReceipt">
          <i class="fas fa-edit"></i>
          ແກ້ໄຂ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReceiveHeaderView',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    receipt: {
      type: Object,
      default: null,
    },
  },

  methods: {
    closeDialog() {
      this.$emit('close')
    },

    editReceipt() {
      this.$emit('edit', this.receipt)
    },

    printReceipt() {
      // Implement print functionality
      window.print()
    },

    calculateTotalAllocations() {
      if (!this.receipt.receiveLines) return 0
      return this.receipt.receiveLines.reduce((total, line) => {
        return total + parseFloat(line.allocatedAmount || 0)
      }, 0)
    },

    calculateTotalReceived() {
      // This would typically come from API call to get all receipts for this invoice
      // For now, just return current receipt amount
      return parseFloat(this.receipt.totalReceivedAmount || 0)
    },

    getRemainingBalance() {
      const invoiceTotal = parseFloat(this.receipt.invoiceHeader?.totalAmount || 0)
      const totalReceived = this.calculateTotalReceived()
      return invoiceTotal - totalReceived
    },

    getAllocationStatusClass(line) {
      const invoiceLine = line.invoiceLine
      if (!invoiceLine) return 'unknown'
      
      const lineTotal = parseFloat(invoiceLine.lineTotal || 0)
      const allocated = parseFloat(line.allocatedAmount || 0)
      
      if (allocated >= lineTotal) return 'fully-allocated'
      if (allocated > 0) return 'partially-allocated'
      return 'not-allocated'
    },

    getAllocationStatusText(line) {
      const statusClass = this.getAllocationStatusClass(line)
      const statusTexts = {
        'fully-allocated': 'ແບ່ງປັນຄົບ',
        'partially-allocated': 'ແບ່ງປັນບາງສ່ວນ',
        'not-allocated': 'ຍັງບໍ່ແບ່ງປັນ',
        'unknown': 'ບໍ່ຮູ້ສະຖານະ'
      }
      return statusTexts[statusClass] || statusClass
    },

    // Utility methods
    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    formatDateTime(date) {
      if (!date) return '-'
      return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    },

    formatCurrency(amount) {
      if (!amount) return '0.00'
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    },

    formatNumber(number) {
      if (!number) return '0'
      return parseFloat(number).toLocaleString('en-US')
    },

    formatPaymentMethod(method) {
      const methods = {
        cash: 'ເງິນສົດ',
        check: 'ເຊັກ',
        bank_transfer: 'ໂອນເງິນທະນາຄານ',
        credit_card: 'ບັດເຄຣດິດ',
        other: 'ອື່ນໆ',
      }
      return methods[method] || method
    },

    formatInvoiceStatus(status) {
      const statusLabels = {
        draft: 'ແບບຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ',
      }
      return statusLabels[status] || status
    },
  },
}
</script>

<style scoped>
/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-container {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 1000px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 24px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
background: linear-gradient(135deg, #01532b 0%, #337555 100%);
  color: white;
}

.modal-header h2 {
  margin: 0;
  color: white;
  font-size: 24px;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  background-color: #f8f9fa;
}

/* Info Section Styles */
.info-section {
  margin-bottom: 32px;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
}

.info-section:last-child {
  margin-bottom: 0;
}

.section-header {
  background-color: #f8f9fa;
  padding: 16px 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-header h3 i {
  color: #28a745;
}

.item-count {
  font-size: 12px;
  color: #666;
  background-color: #e9ecef;
  padding: 4px 8px;
  border-radius: 12px;
}

/* Info Grid */
.info-grid {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-item label {
  font-size: 12px;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-item span {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.receipt-number {
  font-family: monospace;
  font-size: 16px !important;
  font-weight: 600 !important;
  color: #28a745 !important;
}

.invoice-number {
  font-family: monospace;
  font-size: 15px !important;
  font-weight: 600 !important;
  color: #007bff !important;
}

.customer-name {
  font-weight: 600 !important;
  color: #495057 !important;
}

.amount-received {
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #28a745 !important;
}

.invoice-amount {
  font-size: 16px !important;
  font-weight: 600 !important;
  color: #495057 !important;
}

.reference-number {
  font-family: monospace;
  font-size: 14px !important;
  color: #495057 !important;
}

/* Payment Method Badge */
.payment-method-badge {
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.payment-method-badge.cash {
  background-color: #d4edda;
  color: #155724;
}

.payment-method-badge.bank_transfer {
  background-color: #cce5ff;
  color: #004085;
}

.payment-method-badge.check {
  background-color: #fff3cd;
  color: #856404;
}

.payment-method-badge.credit_card {
  background-color: #f8d7da;
  color: #721c24;
}

.payment-method-badge.other {
  background-color: #e2e3e5;
  color: #383d41;
}

/* Status Badge */
.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.draft {
  background-color: #f8f9fa;
  color: #6c757d;
}

.status-badge.sent {
  background-color: #d1ecf1;
  color: #0c5460;
}

.status-badge.paid {
  background-color: #d4edda;
  color: #155724;
}

.status-badge.overdue {
  background-color: #f8d7da;
  color: #721c24;
}

.status-badge.cancelled {
  background-color: #e2e3e5;
  color: #383d41;
}

/* Payment Summary */
.payment-summary {
  padding: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e9ecef;
}

.summary-row:last-child {
  border-bottom: none;
}

.summary-row.subtotal {
  border-top: 2px solid #28a745;
  margin-top: 8px;
  padding-top: 16px;
  font-weight: 600;
}

.summary-row label {
  font-size: 14px;
  color: #495057;
  font-weight: 500;
}

.summary-row .amount {
  font-size: 16px;
  font-weight: 600;
  font-family: monospace;
}

.amount.invoice-total {
  color: #495057;
}

.amount.current-payment {
  color: #28a745;
}

.amount.total-received {
  color: #007bff;
}

.amount.remaining {
  color: #dc3545;
  font-size: 18px;
}

.amount.remaining.fully-paid {
  color: #28a745;
}

.paid-status {
  background: #d4edda;
  color: #155724;
  padding: 12px 16px;
  border-radius: 6px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.paid-status i {
  font-size: 18px;
}

/* Notes */
.notes-content {
  padding: 20px;
  font-size: 14px;
  line-height: 1.6;
  color: #495057;
  background-color: #f8f9fa;
  border-radius: 4px;
  margin: 20px;
}

/* Table Styles */
.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.data-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #495057;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.data-table td {
  font-size: 14px;
  color: #333;
}

.data-table tbody tr:hover {
  background-color: #f8f9fa;
}

.line-number {
  text-align: center;
  font-weight: 600;
  color: #666;
}

.invoice-line-info .line-description {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.invoice-line-info .line-details {
  font-size: 12px;
  color: #666;
}

.allocated-amount {
  font-weight: 600;
  text-align: right;
  color: #28a745;
}

.line-notes {
  font-style: italic;
  color: #666;
}

.allocation-status {
  padding: 3px 8px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
}

.allocation-status.fully-allocated {
  background-color: #d4edda;
  color: #155724;
}

.allocation-status.partially-allocated {
  background-color: #fff3cd;
  color: #856404;
}

.allocation-status.not-allocated {
  background-color: #f8d7da;
  color: #721c24;
}

.allocation-status.unknown {
  background-color: #e2e3e5;
  color: #383d41;
}

/* Table Footer */
.data-table tfoot td {
  background-color: #f8f9fa;
  font-weight: 600;
  border-bottom: none;
  border-top: 2px solid #dee2e6;
}

.allocated-total {
  text-align: right;
  color: #28a745;
}

/* Button Styles */
.btn {
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  min-width: 120px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #5a6268;
}

.btn-success {
  background-color: #28a745;
  color: white;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #218838;
}

/* Responsive Design */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 10px;
  }

  .modal-container {
    max-width: 100%;
    max-height: 95vh;
  }

  .modal-header {
    padding: 20px;
  }

  .modal-header h2 {
    font-size: 20px;
  }

  .modal-body {
    padding: 20px;
  }

  .modal-footer {
    padding: 16px 20px;
    flex-direction: column;
  }

  .info-grid {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 12px;
  }

  .section-header {
    padding: 12px 16px;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }

  .payment-summary {
    padding: 16px;
  }

  .notes-content {
    margin: 16px;
    padding: 16px;
  }

  .data-table {
    font-size: 12px;
  }

  .data-table th,
  .data-table td {
    padding: 8px;
  }

  .btn {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .modal-header {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  .data-table th,
  .data-table td {
    padding: 6px;
    font-size: 11px;
  }

  .invoice-line-info .line-description {
    font-size: 12px;
  }

  .invoice-line-info .line-details {
    font-size: 10px;
  }
}
</style>