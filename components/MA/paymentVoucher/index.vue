<template>
  <div>
    <!-- Print Button -->
    <!-- <button class="btn btn-primary" @click="showPrintDialog = true">
      <i class="fas fa-print"></i>
      ພິມໃບຮັບເງິນ
    </button> -->

    <!-- Print Dialog Modal -->
    <div v-if="showPrintDialog" class="modal-overlay" @click="closePrintDialog">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>ພິມໃບຈ່າຍສົດອອກຄັງ</h3>
          <button class="close-btn" @click="closePrintDialog">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="modal-body">
          <!-- Voucher Preview -->
          <div ref="voucherContent" id="voucher-print" class="voucher-container">
            <!-- Header -->
            <div class="voucher-header">
              <div class="company-info">
                <div class="company-name">ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ</div>
                <!-- <div class="department">ກົມການເງິນ ແລະ ສິນເຊື່ອ</div> -->
                <!-- <div class="sub-department">ພະນັກງານການເງິນ ອຳນວຍການ ວິທະຍາລັຍຂັ້ນສູງ</div> -->
                <div class="amount-line">
                  .........(000)..........
                </div>
              </div>
              
              <div class="voucher-number">
                <div class="number-box">
                  <span class="number-label">No</span>
                  <span class="number-value">{{ formatVoucherNumber(voucherData.id) }}</span>
                </div>
              </div>
            </div>

            <!-- Title -->
            <div class="voucher-title">
              ໃບຈ່າຍເງິນສົດອອກຄັງ
            </div>

            <!-- Voucher Details -->
            <div class="voucher-details">
              <div class="detail-row">
                <span class="label">ອີງໃສ່ໃບ ຖອນ/ສະເຫນີ</span>
                <span class="dotted-line">{{ voucherData.maker?.cus_name || 'N/A' }}</span>
              </div>
              
              <div class="detail-row">
                <span class="label">ເລກທີ</span>
                <span class="value">{{ voucherData.maker?.cus_id || 'N/A' }}</span>
                <span class="label">ລົງວັນທີ</span>
                <span class="value">{{ formatDate(voucherData.createdAt).day }}</span>
                <span class="label">ເດືອນ</span>
                <span class="value">{{ formatDate(voucherData.createdAt).month }}</span>
                <span class="label">ປີ</span>
                <span class="value">{{ formatDate(voucherData.createdAt).year }}</span>
              </div>

              <div class="detail-row">
                <span class="label">ຈຳນວນເງິນ ກີບລາວ / ເອກະສານສຳຄັນ</span>
                <div class="currency-options">
                  <label><input type="checkbox" :checked="voucherData.currency?.code === 'LAK'"> LAK</label>
                  <label><input type="checkbox" :checked="voucherData.currency?.code === 'THB'"> THB</label>
                  <label><input type="checkbox" :checked="voucherData.currency?.code === 'USD'"> USD</label>
                </div>
              </div>

              <div class="detail-row">
                <span class="label">ຕົວເລກ</span>
                <span class="amount-number">{{ formatAmount(voucherData.amount) }}</span>
              </div>

              <div class="detail-row">
                <span class="label">ຈຸດປະສົງຂັ້ນພຽນ ກັນເງິນຄັງ</span>
                <span class="dotted-line">{{ voucherData.purpose || 'N/A' }}</span>
              </div>

              <div class="detail-row description">
                <span class="label">ເພື່ອໃນລາຍງານ</span>
                <div class="description-content">
                  {{ voucherData.note || 'ບໍ່ມີຫມາຍເຫດ' }}
                </div>
              </div>

              <div class="detail-row">
                <span class="label">ຈຳນວນ</span>
                <span class="amount-display">{{ formatAmount(voucherData.amount) }}</span>
                <span class="label">{{ voucherData.currency?.name || 'N/A' }}</span>
              </div>

              <div class="detail-row">
                <span class="label">ຈຳນວນເງິນດ້ວຍໂຕໜັງສື</span>
                <span class="amount-words">{{ convertToWords(voucherData.amount, voucherData.currency?.code) }}</span>
              </div>
            </div>

            <!-- Signature Section -->
            <div class="signature-section">
              <div class="signature-box">
                <div class="signature-title">ຜູ້ຮັບເງິນຂຶ້ນເຊັນ ຊື່ເຕັມ</div>
                <div class="signature-line"></div>
                <div class="signature-name">{{ voucherData.maker?.cus_name || '' }}</div>
              </div>
              <div class="signature-box">
                <div class="signature-title">ຜູ້ສົ່ງເງິນ</div>
                <div class="signature-line"></div>
              </div>
              <div class="signature-box">
                <div class="signature-title">ຜູ້ຈ່າຍເງິນ</div>
                <div class="signature-line"></div>
              </div>
              <div class="signature-box">
                <div class="signature-title">ນາຍຄົນຈັງ</div>
                <div class="signature-line"></div>
                <div class="signature-name">{{ voucherData.checker?.cus_name || '' }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closePrintDialog">
            <i class="fas fa-times"></i>
            ຍົກເລີກ
          </button>
          <button class="btn btn-primary" @click="printVoucher">
            <i class="fas fa-print"></i>
            ພິມ
          </button>
        </div>
      </div>
    </div>

    <!-- Hidden print container -->
    <div v-show="false" class="print-only">
      <div class="voucher-container print-version">
        <!-- Same voucher content for printing -->
        <div class="voucher-header">
          <div class="company-info">
            <div class="company-name">ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</div>
            <div class="department">ກົມການເງິນ ແລະ ສິນເຊື່ອ</div>
            <div class="sub-department">ພະນັກງານການເງິນ ອຳນວຍການ ວິທະຍາລັຍຂັ້ນສູງ</div>
            <div class="amount-line">
              .........(000)..........
            </div>
          </div>
          
          <div class="voucher-number">
            <div class="number-box">
              <span class="number-label">No</span>
              <span class="number-value">{{ formatVoucherNumber(voucherData.id) }}</span>
            </div>
          </div>
        </div>

        <div class="voucher-title">
          ໃບຈ່າຍເງິນສົດອອກຄັງ
        </div>

        <div class="voucher-details">
          <div class="detail-row">
            <span class="label">ຈ່າຍໃຫ້ຫຼືຮັບເອົາ</span>
            <span class="dotted-line">{{ voucherData.maker?.cus_name || 'N/A' }}</span>
          </div>
          
          <div class="detail-row">
            <span class="label">ເລກທີ</span>
            <span class="value">{{ voucherData.maker?.cus_id || 'N/A' }}</span>
            <span class="label">ວັນທີນີ້</span>
            <span class="value">{{ formatDate(voucherData.createdAt).day }}</span>
            <span class="label">ເດືອນ</span>
            <span class="value">{{ formatDate(voucherData.createdAt).month }}</span>
            <span class="label">ປີ</span>
            <span class="value">{{ formatDate(voucherData.createdAt).year }}</span>
          </div>

          <div class="detail-row">
            <span class="label">ຈຳນວນເງິນ ກີບລາວ / ເອກະສານສຳຄັນ</span>
            <div class="currency-options">
              <label><input type="checkbox" :checked="voucherData.currency?.code === 'LAK'"> LAK</label>
              <label><input type="checkbox" :checked="voucherData.currency?.code === 'THB'"> THB</label>
              <label><input type="checkbox" :checked="voucherData.currency?.code === 'USD'"> USD</label>
            </div>
          </div>

          <div class="detail-row">
            <span class="label">ຕົວເລກ</span>
            <span class="amount-number">{{ formatAmount(voucherData.amount) }}</span>
          </div>

          <div class="detail-row">
            <span class="label">ຈຸດປະສົງຂັ້ນພຽນ ກັນເງິນຄັງ</span>
            <span class="dotted-line">{{ voucherData.purpose || 'N/A' }}</span>
          </div>

          <div class="detail-row description">
            <span class="label">ເພື່ອໃນລາຍງານ</span>
            <div class="description-content">
              {{ voucherData.note || 'ບໍ່ມີຫມາຍເຫດ' }}
            </div>
          </div>

          <div class="detail-row">
            <span class="label">ຈຳນວນ</span>
            <span class="amount-display">{{ formatAmount(voucherData.amount) }}</span>
            <span class="label">{{ voucherData.currency?.name || 'N/A' }}</span>
          </div>

          <div class="detail-row">
            <span class="label">ຈຳນວນເງິນດ້ວຍໂຕໜັງສື</span>
            <span class="amount-words">{{ convertToWords(voucherData.amount, voucherData.currency?.code) }}</span>
          </div>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <div class="signature-title">ຜູ້ຮັບເງິນຂຶ້ນເຊັນ ຊື່ເຕັມ</div>
            <div class="signature-line"></div>
            <div class="signature-name">{{ voucherData.maker?.cus_name || '' }}</div>
          </div>
          <div class="signature-box">
            <div class="signature-title">ຜູ້ສົ່ງເງິນ</div>
            <div class="signature-line"></div>
          </div>
          <div class="signature-box">
            <div class="signature-title">ຜູ້ຈ່າຍເງິນ</div>
            <div class="signature-line"></div>
          </div>
          <div class="signature-box">
            <div class="signature-title">ນາຍຄົນຈັງ</div>
            <div class="signature-line"></div>
            <div class="signature-name">{{ voucherData.checker?.cus_name || '' }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VoucherPrintComponent',
  props: {
    voucherData: {
      type: Object,
      default: () => ({
        id: 5,
        amount: 4000000,
        purpose: "test",
        note: "",
        status: "pending",
        approvedAt: null,
        dueDate: "2025-07-24T00:00:00.000Z",
        createdAt: "2025-07-09T15:12:51.000Z",
        updateTimestamp: "2025-07-09T15:12:51.000Z",
        makerId: 2,
        checkerId: null,
        currencyId: 5,
        maker: {
          id: 2,
          cus_id: 1001,
          cus_pass: "1111",
          cus_name: "USER01",
          cus_tel: "TELEPHONE",
          cus_email: "EMAIL",
          cus_active: true,
          village: null,
          district: null,
          province: null,
          remark: null,
          isActive: true,
          createdAt: "2025-01-24T19:54:20.000Z",
          updateTimestamp: "2025-01-24T19:54:20.000Z",
          groupId: 1
        },
        checker: null,
        currency: {
          id: 5,
          code: "USD",
          name: "US Dollar",
          rate: 1,
          isActive: true,
          isLocalCCY: false,
          createdAt: "2023-09-17T06:52:15.000Z",
          updateTimestamp: "2025-03-03T01:11:36.000Z"
        },
        settlementLine: []
      })
    }
  },
  data() {
    return {
      showPrintDialog: false
    }
  },

  watch: {
    // Watch for changes to voucherData prop and reopen dialog if needed
    voucherData: {
      handler(newValue) {
        if (newValue && newValue.id) {
          this.showPrintDialog = true
        }
      },
      deep: true,
      immediate: true // This ensures the watcher runs immediately when component is created
    }
  },
  methods: {
    openPrintDialog() {
      this.showPrintDialog = true
    },
    
    closePrintDialog() {
      this.showPrintDialog = false
      // Emit close event to parent
      this.$emit('close')
    },
    
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0')
    },
    
    formatDate(dateString) {
      if (!dateString) return { day: '', month: '', year: '' }
      
      const date = new Date(dateString)
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      }
    },
    
    formatAmount(amount) {
      if (!amount) return '0'
      return new Intl.NumberFormat('en-US').format(amount)
    },
    
    convertToWords(amount, currencyCode) {
      if (!amount) return ''
      
      // This is a simplified number to words conversion
      // You might want to implement a more comprehensive function
      const numbers = [
        '', 'ໜຶ່ງ', 'ສອງ', 'ສາມ', 'ສີ່', 'ຫ້າ', 'ຫົກ', 'ເຈັດ', 'ແປດ', 'ເກົ້າ'
      ]
      
      const units = ['', 'ສິບ', 'ຮ້ອຍ', 'ພັນ', 'ຫມື່ນ', 'ແສນ', 'ລ້ານ']
      
      // Simple conversion for demonstration
      // In production, you'd want a more robust implementation
      const amountStr = amount.toString()
      const length = amountStr.length
      
      if (length <= 6) {
        // Simple case for amounts up to 999,999
        let result = ''
        for (let i = 0; i < length; i++) {
          const digit = parseInt(amountStr[i])
          const position = length - i - 1
          if (digit > 0) {
            result += numbers[digit] + units[position]
          }
        }
        
        // Add currency suffix
        switch (currencyCode) {
          case 'LAK':
            result += 'ກີບ'
            break
          case 'USD':
            result += 'ໂດລາ'
            break
          case 'THB':
            result += 'ບາດ'
            break
          default:
            result += currencyCode || ''
        }
        
        return result
      }
      
      // For larger amounts, return formatted number with currency
      return this.formatAmount(amount) + ' ' + (currencyCode || '')
    },
    
    printVoucher() {
      const printContent = this.$refs.voucherContent.innerHTML
      const printWindow = window.open('', '_blank', 'width=800,height=600')
      
      printWindow.document.write(`
        <html>
          <head>
            <title>ໃບຈ່າຍເງິນສົດອອກຄັງ</title>
            <style>
              body { 
                font-family: 'Phetsarath OT', 'Noto Sans Lao', Arial, sans-serif; 
                margin: 0; 
                padding: 20px; 
              }
              .voucher-container { 
                border: 2px solid #000; 
                padding: 15px; 
                font-size: 12px; 
                line-height: 1.4; 
              }
              .voucher-header { 
                display: flex; 
                justify-content: space-between; 
                align-items: flex-start; 
                margin-bottom: 20px; 
                padding-bottom: 10px; 
                border-bottom: 1px solid #ccc; 
              }
              .company-info { 
                flex: 1; 
                text-align: center; 
              }
              .company-name { 
                font-weight: bold; 
                font-size: 14px; 
                margin-bottom: 5px; 
              }
              .department { 
                font-size: 12px; 
                margin-bottom: 3px; 
              }
              .sub-department { 
                font-size: 10px; 
                margin-bottom: 10px; 
              }
              .amount-line { 
                font-size: 10px; 
                letter-spacing: 2px; 
              }
              .voucher-number { 
                flex: 0 0 auto; 
                margin-left: 20px; 
              }
              .number-box { 
                border: 2px solid #000; 
                padding: 8px 12px; 
                text-align: center; 
                background: #f9f9f9; 
              }
              .number-label { 
                font-weight: bold; 
                margin-right: 10px; 
              }
              .number-value { 
                font-weight: bold; 
              }
              .voucher-title { 
                text-align: center; 
                font-size: 16px; 
                font-weight: bold; 
                margin: 20px 0; 
                text-decoration: underline; 
              }
              .voucher-details { 
                margin-bottom: 30px; 
              }
              .detail-row { 
                display: flex; 
                align-items: center; 
                margin-bottom: 12px; 
                min-height: 24px; 
              }
              .detail-row.description { 
                flex-direction: column; 
                align-items: flex-start; 
              }
              .label { 
                font-weight: 500; 
                margin-right: 10px; 
                white-space: nowrap; 
              }
              .value { 
                margin-right: 20px; 
                border-bottom: 1px solid #000; 
                min-width: 40px; 
                text-align: center; 
                padding: 2px 5px; 
              }
              .dotted-line { 
                flex: 1; 
                border-bottom: 1px dotted #000; 
                margin: 0 10px; 
                min-height: 20px; 
                padding: 2px 5px; 
              }
              .currency-options { 
                display: flex; 
                gap: 20px; 
                margin-left: 10px; 
              }
              .currency-options label { 
                display: flex; 
                align-items: center; 
                gap: 5px; 
                font-weight: normal; 
              }
              .amount-number { 
                flex: 1; 
                border-bottom: 1px solid #000; 
                margin: 0 10px; 
                padding: 2px 10px; 
                text-align: right; 
                font-weight: bold; 
              }
              .amount-display { 
                font-weight: bold; 
                font-size: 14px; 
                margin: 0 10px; 
              }
              .description-content { 
                width: 100%; 
                min-height: 60px; 
                border: 1px solid #000; 
                padding: 10px; 
                margin-top: 5px; 
                background: #fafafa; 
              }
              .amount-words { 
                flex: 1; 
                border-bottom: 1px solid #000; 
                margin-left: 10px; 
                padding: 2px 10px; 
                font-style: italic; 
              }
              .signature-section { 
                display: flex; 
                justify-content: space-between; 
                margin-top: 40px; 
                gap: 10px; 
              }
              .signature-box { 
                flex: 1; 
                text-align: center; 
              }
              .signature-title { 
                font-size: 10px; 
                margin-bottom: 30px; 
                font-weight: 500; 
              }
              .signature-line { 
                border-bottom: 1px solid #000; 
                height: 1px; 
                margin-top: 20px; 
              }
              .signature-name { 
                font-size: 9px; 
                margin-top: 5px; 
                font-weight: normal; 
              }
            </style>
          </head>
          <body>
            ${printContent}
          </body>
        </html>
      `)
      
      printWindow.document.close()
      printWindow.print()
      printWindow.close()
      
      this.showPrintDialog = false
    }
  }
}
</script>

<style scoped>
/* Modal Styles */
.modal-overlay {
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

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  margin: 0;
  color: #333;
}

.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
}

.close-btn:hover {
  color: #333;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #eee;
}

/* Button Styles */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #545b62;
}

/* Voucher Styles */
.voucher-container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Phetsarath OT', 'Noto Sans Lao', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  border: 2px solid #333;
  background: white;
}

.voucher-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.company-info {
  flex: 1;
  text-align: center;
}

.company-name {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
}

.department {
  font-size: 14px;
  margin-bottom: 3px;
}

.sub-department {
  font-size: 12px;
  margin-bottom: 10px;
}

.amount-line {
  font-size: 12px;
  letter-spacing: 2px;
}

.voucher-number {
  flex: 0 0 auto;
  margin-left: 20px;
}

.number-box {
  border: 2px solid #333;
  padding: 8px 12px;
  text-align: center;
  background: #f9f9f9;
}

.number-label {
  font-weight: bold;
  margin-right: 10px;
}

.number-value {
  font-weight: bold;
  color: #d32f2f;
}

.voucher-title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
  text-decoration: underline;
}

.voucher-details {
  margin-bottom: 30px;
}

.detail-row {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  min-height: 24px;
}

.detail-row.description {
  flex-direction: column;
  align-items: flex-start;
}

.label {
  font-weight: 500;
  margin-right: 10px;
  white-space: nowrap;
}

.value {
  margin-right: 20px;
  border-bottom: 1px solid #333;
  min-width: 40px;
  text-align: center;
  padding: 2px 5px;
}

.dotted-line {
  flex: 1;
  border-bottom: 1px dotted #333;
  margin: 0 10px;
  min-height: 20px;
  padding: 2px 5px;
}

.currency-options {
  display: flex;
  gap: 20px;
  margin-left: 10px;
}

.currency-options label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: normal;
}

.amount-number {
  flex: 1;
  border-bottom: 1px solid #333;
  margin: 0 10px;
  padding: 2px 10px;
  text-align: right;
  font-weight: bold;
}

.amount-display {
  font-weight: bold;
  font-size: 16px;
  margin: 0 10px;
  color: #d32f2f;
}

.description-content {
  width: 100%;
  min-height: 60px;
  border: 1px solid #333;
  padding: 10px;
  margin-top: 5px;
  background: #fafafa;
}

.amount-words {
  flex: 1;
  border-bottom: 1px solid #333;
  margin-left: 10px;
  padding: 2px 10px;
  font-style: italic;
}

.signature-section {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  gap: 10px;
}

.signature-box {
  flex: 1;
  text-align: center;
}

.signature-title {
  font-size: 12px;
  margin-bottom: 30px;
  font-weight: 500;
}

.signature-line {
  border-bottom: 1px solid #333;
  height: 1px;
  margin-top: 20px;
}

.signature-name {
  font-size: 10px;
  margin-top: 5px;
  font-weight: normal;
  color: #666;
}

/* Print Styles */
@media print {
  /* Hide everything except the print version */
  body * {
    visibility: hidden;
  }
  
  .print-only,
  .print-only * {
    visibility: visible;
  }
  
  .print-only {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  
  .voucher-container.print-version {
    border: 2px solid #000 !important;
    margin: 0 !important;
    padding: 15px !important;
    font-size: 12px !important;
    max-width: none !important;
    width: 100% !important;
  }
  
  .voucher-title {
    font-size: 16px !important;
  }
  
  .company-name {
    font-size: 14px !important;
  }
  
  .amount-display {
    font-size: 14px !important;
  }
  
  .signature-title {
    font-size: 10px !important;
  }
  
  .department {
    font-size: 12px !important;
  }
  
  .sub-department {
    font-size: 10px !important;
  }
  
  .amount-line {
    font-size: 10px !important;
  }
  
  .signature-name {
    font-size: 9px !important;
  }
}

/* Print-only container (hidden by default) */
.print-only {
  position: absolute;
  left: -9999px;
  top: -9999px;
}

@media print {
  .print-only {
    position: static;
    left: auto;
    top: auto;
  }
}
</style>