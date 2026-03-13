<template>
  <div v-if="visible" class="modal-overlay" @click="closeDialog">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <h2>ລາຍລະອຽດໃບແຈ້ງໜີ້</h2>
        <button class="close-btn" @click="closeDialog">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body" v-if="invoice">
        <!-- Invoice Header Information -->
        <div class="info-section">
          <div class="section-header">
            <h3>
              <i class="fas fa-file-invoice"></i>
              ຂໍ້ມູນໃບແຈ້ງໜີ້
            </h3>
            <span :class="['status-badge', invoice.status]">
              {{ formatStatus(invoice.status) }}
            </span>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <label>ເລກທີໃບແຈ້ງໜີ້:</label>
              <span class="invoice-number">{{ invoice.invoiceNumber }}</span>
            </div>

            <div class="info-item">
              <label>ວັນທີແຈ້ງໜີ້:</label>
              <span>{{ formatDate(invoice.invoiceDate) }}</span>
            </div>

            <div class="info-item">
              <label>ວັນທີຄົບກຳນົດ:</label>
              <span :class="getDueDateClass(invoice.dueDate, invoice.status)">
                {{ formatDate(invoice.dueDate) }}
              </span>
            </div>

            <div class="info-item">
              <label>ອັດຕາແລກປ່ຽນ:</label>
              <span>{{ formatNumber(invoice.exchangeRate) }}</span>
            </div>
          </div>
        </div>

        <!-- Customer Information -->
        <div class="info-section" v-if="invoice.customer">
          <div class="section-header">
            <h3>
              <i class="fas fa-user"></i>
              ຂໍ້ມູນລູກຄ້າ
            </h3>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <label>ຊື່ລູກຄ້າ:</label>
              <span class="customer-name">{{ invoice.customer.name }}</span>
            </div>

            <div class="info-item" v-if="invoice.customer.email">
              <label>ອີເມວ:</label>
              <span>{{ invoice.customer.email }}</span>
            </div>

            <div class="info-item" v-if="invoice.customer.phone">
              <label>ເບີໂທ:</label>
              <span>{{ invoice.customer.phone }}</span>
            </div>

            <div class="info-item" v-if="invoice.customer.address">
              <label>ທີ່ຢູ່:</label>
              <span>{{ invoice.customer.address }}</span>
            </div>
          </div>
        </div>

        <!-- Currency Information -->
        <div class="info-section" v-if="invoice.currency">
          <div class="section-header">
            <h3>
              <i class="fas fa-coins"></i>
              ຂໍ້ມູນສະກຸນເງິນ
            </h3>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <label>ສະກຸນເງິນ:</label>
              <span>{{ invoice.currency.code }} - {{ invoice.currency.name }}</span>
            </div>

            <div class="info-item" v-if="invoice.currency.symbol">
              <label>ສັນຍາລັກ:</label>
              <span>{{ invoice.currency.symbol }}</span>
            </div>
          </div>
        </div>

        <!-- Amount Information -->
        <div class="info-section">
          <div class="section-header">
            <h3>
              <i class="fas fa-calculator"></i>
              ຂໍ້ມູນຍອດເງິນ
            </h3>
          </div>

          <div class="amount-summary">
            <div class="amount-row">
              <label>ຍອດລວມ:</label>
              <span class="amount total-amount">{{ formatCurrency(invoice.totalAmount) }}</span>
            </div>

            <div class="amount-row">
              <label>ຍອດພາສີ:</label>
              <span class="amount tax-amount">{{ formatCurrency(invoice.taxAmount) }}</span>
            </div>

            <div class="amount-row subtotal">
              <label>ຍອດສຸດທິ:</label>
              <span class="amount net-amount">{{ formatCurrency(invoice.netAmount) }}</span>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="info-section" v-if="invoice.description">
          <div class="section-header">
            <h3>
              <i class="fas fa-comment-alt"></i>
              ລາຍລະອຽດ
            </h3>
          </div>

          <div class="description-content">
            {{ invoice.description }}
          </div>
        </div>

        <!-- Invoice Lines -->
        <div class="info-section" v-if="invoice.invoiceLines && invoice.invoiceLines.length > 0">
          <div class="section-header">
            <h3>
              <i class="fas fa-list"></i>
              ລາຍການສິນຄ້າ/ບໍລິການ
            </h3>
            <span class="item-count">{{ invoice.invoiceLines.length }} ລາຍການ</span>
          </div>

          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>ລຳດັບ</th>
                  <th>ລາຍການ</th>
                  <th>ຈຳນວນ</th>
                  <th>ລາຄາຕໍ່ຫົວ</th>
                  <th>ອັດຕາພາສີ</th>
                  <th>ຍອດພາສີ</th>
                  <th>ຍອດລວມ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="line in invoice.invoiceLines" :key="line.id">
                  <td>{{ line.lineNumber }}</td>
                  <td>
                    <div class="line-description">
                      {{ line.description }}
                    </div>
                  </td>
                  <td class="text-right">{{ formatNumber(line.quantity) }}</td>
                  <td class="text-right">{{ formatCurrency(line.unitPrice) }}</td>
                  <td class="text-right">{{ formatPercentage(line.taxRate) }}</td>
                  <td class="text-right">{{ formatCurrency(line.taxAmount) }}</td>
                  <td class="text-right total-cell">{{ formatCurrency(line.lineTotal) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="summary-row">
                  <td colspan="6"><strong>ລວມທັງໝົດ:</strong></td>
                  <td class="text-right"><strong>{{ formatCurrency(calculateLinesTotal()) }}</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <!-- Receive Headers (Payments) -->
        <div class="info-section" v-if="invoice.receiveHeaders && invoice.receiveHeaders.length > 0">
          <div class="section-header">
            <h3>
              <i class="fas fa-receipt"></i>
              ປະຫວັດການຮັບຊຳລະ
            </h3>
            <span class="item-count">{{ invoice.receiveHeaders.length }} ຄັ້ງ</span>
          </div>

          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>ເລກທີໃບຮັບ</th>
                  <th>ວັນທີບັນທຶກ</th>
                  <th>ວັນທີຮັບເງິນ</th>
                  <th>ຍອດເງິນ</th>
                  <th>ວິທີຈ່າຍ</th>
                  <th>ເລກອ້າງອີງ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="receive in invoice.receiveHeaders" :key="receive.id">
                  <td>
                    <span class="receipt-number">{{ receive.receiptNumber }}</span>
                  </td>
                  <td>{{ formatDate(receive.bookingDate) }}</td>
                  <td>{{ formatDate(receive.receivedDate) }}</td>
                  <td class="text-right">{{ formatCurrency(receive.totalReceivedAmount) }}</td>
                  <td>
                    <span :class="['payment-method', receive.paymentMethod]">
                      {{ formatPaymentMethod(receive.paymentMethod) }}
                    </span>
                  </td>
                  <td>{{ receive.referenceNumber || '-' }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="summary-row">
                  <td colspan="3"><strong>ລວມຊຳລະແລ້ວ:</strong></td>
                  <td class="text-right"><strong>{{ formatCurrency(calculatePaymentsTotal()) }}</strong></td>
                  <td colspan="2"></td>
                </tr>
                <tr class="balance-row">
                  <td colspan="3"><strong>ຍອດຄ້າງຊຳລະ:</strong></td>
                  <td class="text-right">
                    <strong :class="getBalanceClass()">
                      {{ formatCurrency(calculateBalance()) }}
                    </strong>
                  </td>
                  <td colspan="2"></td>
                </tr>
              </tfoot>
            </table>
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
            <div class="info-item" v-if="invoice.maker">
              <label>ຜູ້ສ້າງ:</label>
              <span>{{ invoice.maker.username }}</span>
            </div>

            <div class="info-item">
              <label>ວັນທີສ້າງ:</label>
              <span>{{ formatDateTime(invoice.createdAt) }}</span>
            </div>

            <div class="info-item" v-if="invoice.updateUser">
              <label>ຜູ້ແກ້ໄຂຫຼ້າສຸດ:</label>
              <span>{{ invoice.updateUser.username }}</span>
            </div>

            <div class="info-item" v-if="invoice.updateTimestamp">
              <label>ວັນທີແກ້ໄຂຫຼ້າສຸດ:</label>
              <span>{{ formatDateTime(invoice.updateTimestamp) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeDialog">
          <i class="fas fa-times"></i>
          ປິດ
        </button>
        <button type="button" class="btn btn-primary" @click="printInvoice">
          <i class="fas fa-print"></i>
          ພິມ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvoiceHeaderView',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    invoice: {
      type: Object,
      default: null,
    },
  },

  methods: {
    closeDialog() {
      this.$emit('close')
    },

    printInvoice() {
      // Implement print functionality
      window.print()
    },

    calculateLinesTotal() {
      if (!this.invoice.invoiceLines) return 0
      return this.invoice.invoiceLines.reduce((total, line) => {
        return total + parseFloat(line.lineTotal || 0)
      }, 0)
    },

    calculatePaymentsTotal() {
      if (!this.invoice.receiveHeaders) return 0
      return this.invoice.receiveHeaders.reduce((total, receive) => {
        return total + parseFloat(receive.totalReceivedAmount || 0)
      }, 0)
    },

    calculateBalance() {
      const totalAmount = parseFloat(this.invoice.totalAmount || 0)
      const paidAmount = this.calculatePaymentsTotal()
      return totalAmount - paidAmount
    },

    getBalanceClass() {
      const balance = this.calculateBalance()
      if (balance <= 0) return 'balance-paid'
      if (balance > 0) return 'balance-outstanding'
      return ''
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

    formatPercentage(percentage) {
      if (!percentage) return '0%'
      return `${parseFloat(percentage)}%`
    },

    formatStatus(status) {
      const statusLabels = {
        draft: 'ແບບຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ',
      }
      return statusLabels[status] || status
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

    getDueDateClass(dueDate, status) {
      if (!dueDate || status === 'paid' || status === 'cancelled') return ''
      
      const today = new Date()
      const due = new Date(dueDate)
      
      if (due < today && status !== 'paid') return 'overdue-date'
      if (due <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) return 'due-soon'
      return ''
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
  background-color: #f8f9fa;
}

.modal-header h2 {
  margin: 0;
  color: #333;
  font-size: 24px;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
}

.close-btn:hover {
  background-color: #e9ecef;
  color: #333;
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
  color: #007bff;
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

.invoice-number {
  font-family: monospace;
  font-size: 16px !important;
  font-weight: 600 !important;
  color: #007bff !important;
}

.customer-name {
  font-weight: 600 !important;
  color: #495057 !important;
}

/* Status Badge */
.status-badge {
  padding: 6px 12px;
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

/* Due Date Classes */
.overdue-date {
  color: #dc3545 !important;
  font-weight: 600 !important;
}

.due-soon {
  color: #ffc107 !important;
  font-weight: 500 !important;
}

/* Amount Summary */
.amount-summary {
  padding: 20px;
}

.amount-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e9ecef;
}

.amount-row:last-child {
  border-bottom: none;
}

.amount-row.subtotal {
  border-top: 2px solid #007bff;
  margin-top: 8px;
  padding-top: 16px;
  font-weight: 600;
}

.amount-row label {
  font-size: 14px;
  color: #495057;
  font-weight: 500;
}

.amount {
  font-size: 16px;
  font-weight: 600;
  font-family: monospace;
}

.total-amount {
  color: #495057;
}

.tax-amount {
  color: #ffc107;
}

.net-amount {
  color: #28a745;
  font-size: 18px;
}

/* Description */
.description-content {
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

.data-table .text-right {
  text-align: right;
}

.data-table tbody tr:hover {
  background-color: #f8f9fa;
}

.line-description {
  max-width: 200px;
  word-wrap: break-word;
}

.total-cell {
  font-weight: 600;
  color: #495057;
}

.receipt-number {
  font-family: monospace;
  font-weight: 600;
  color: #007bff;
}

.payment-method {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.payment-method.cash {
  background-color: #d4edda;
  color: #155724;
}

.payment-method.check {
  background-color: #d1ecf1;
  color: #0c5460;
}

.payment-method.bank_transfer {
  background-color: #d6d8db;
  color: #383d41;
}

.payment-method.credit_card {
  background-color: #fff3cd;
  color: #856404;
}

.payment-method.other {
  background-color: #f8d7da;
  color: #721c24;
}

/* Table Footer */
.data-table tfoot td {
  background-color: #f8f9fa;
  font-weight: 600;
  border-bottom: none;
}

.summary-row td {
  color: #495057;
  border-top: 2px solid #dee2e6;
}

.balance-row td {
  border-top: 1px solid #dee2e6;
}

.balance-paid {
  color: #28a745 !important;
}

.balance-outstanding {
  color: #dc3545 !important;
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

  .amount-summary {
    padding: 16px;
  }

  .description-content {
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

  .line-description {
    max-width: 150px;
  }
}
</style>