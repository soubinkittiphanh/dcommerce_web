<template>
  <div>
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
          <div
            ref="voucherContent"
            id="voucher-print"
            class="voucher-container"
          >
            <!-- Header -->
            <div class="voucher-header">
              <div class="company-info">
                <div class="company-name">
                  ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ
                </div>
                <div class="company-name">
                  ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ
                </div>
                <div class="amount-line">.........(000)..........</div>
              </div>
            </div>
            <!-- ✅ FIXED: Left-Right Layout Section -->
            <div class="ministry-voucher-section">
              <!-- Left section -->
              <div class="ministry-titles">
                <div class="voucher-title">ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ.</div>
                <div class="voucher-title">ກົມແຜນການ ແລະ ການເງິນ</div>
                <div class="voucher-title">ພະແນກຄຸ້ມຄອງລາຍຮັບ</div>
              </div>
              <!-- Right section -->
              <div class="voucher-number">
                <div class="number-box">
                  <span class="number-label">No</span>
                  <span class="number-value">{{
                    formatVoucherNumber(voucherData.id)
                  }}</span>
                </div>
                <div class="detail-row">
                  <span class="label" style="font-size: 14px !important"
                    >ວັນທີ
                  </span>
                  <span class="dotted-line">{{
                    formatDateLao(voucherData.bookingDate)
                  }}</span>
                </div>
              </div>
            </div>
            <!-- Title -->
            <div class="voucher-title">ໃບຈ່າຍເງິນສົດອອກຄັງ</div>

            <!-- Voucher Details -->
            <div class="voucher-details">
              <div class="detail-row">
                <span class="label">ອີງໃສ່ໃບ ຖອນ/ສະເຫນີ</span>
                <span class="dotted-line">{{
                  voucherData.externalRef || ''
                }}</span>
              </div>

              <div class="detail-row">
                <span class="label">ເລກທີ</span>
                <span class="value">{{
                  voucherData.externalRefNo ||
                  formatVoucherNumber(voucherData.id) ||
                  'N/A'
                }}</span>
                <span class="label">ລົງວັນທີ</span>
                <span class="value">{{
                  formatDate(voucherData.createdAt).day
                }}</span>
                <span class="label">ເດືອນ</span>
                <span class="value">{{
                  formatDate(voucherData.createdAt).month
                }}</span>
                <span class="label">ປີ</span>
                <span class="value">{{
                  formatDate(voucherData.createdAt).year
                }}</span>
              </div>

              <div class="detail-row">
                <span class="label"
                  >ຄັງເງິນສົດ, ກະຊວງ ໂຍທາທິການ ແລະ ຂົນສົ່ງ.</span
                >
              </div>

              <!-- ✅ UPDATED: Show payment method based on voucherData.method -->
              <div class="detail-row">
                <span class="label">ໄດ້ຈ່າຍເງິນ </span>
                <label
                  ><input type="checkbox" :checked="voucherData.method === 'cash'" />
                </label>
                <span class="label"> ສົດ </span>
                <label
                  ><input type="checkbox" :checked="voucherData.method === 'cheque'" />
                </label>
                <span class="label"> ແຊັກເລກທີ່ </span>
                <span class="dotted-line">{{
                  voucherData.chequeNo || ''
                }}</span>

                <div class="currency-options">
                  <label
                    ><input
                      type="checkbox"
                      :checked="voucherData.currency?.code === 'LAK'"
                    />
                    LAK</label
                  >
                  <label
                    ><input
                      type="checkbox"
                      :checked="voucherData.currency?.code === 'THB'"
                    />
                    THB</label
                  >
                  <label
                    ><input
                      type="checkbox"
                      :checked="voucherData.currency?.code === 'USD'"
                    />
                    USD</label
                  >
                </div>
              </div>

              <div class="detail-row">
                <span class="label">ໃຫ້ທ່ານ</span>
                <span class="dotted-line">{{
                  voucherData.receiveName || voucherData.maker?.cus_name || ''
                }}</span>
                <span class="label">ເລກບັດປະຈຳຕົວ</span>
                <span class="dotted-line">{{
                  voucherData.receiveIDNO || ''
                }}</span>
              </div>

              <div class="detail-row">
                <span class="label">ສັງກັດຢູ່ພາກສ່ວນ ກົມ/ກອງ</span>
                <span class="dotted-line">{{
                  voucherData.ministry?.ministryName || ''
                }}</span>
              </div>

              <div class="detail-row">
                <span class="label">ເນື້ອໃນລາຍຈ່າຍ</span>
                <span class="dotted-line">{{ voucherData.purpose || '' }}</span>
              </div>

              <div class="detail-row">
                <span class="label"></span>
                <span class="dotted-line"></span>
              </div>

              <div class="detail-row">
                <span class="label"></span>
                <span class="dotted-line"></span>
              </div>

              <div class="detail-row">
                <span class="label">ຈຳນວນ</span>
                <span class="amount-display">{{
                  formatAmount(voucherData.amount)
                }}</span>
                <span class="label">{{
                  voucherData.currency?.name || 'N/A'
                }}</span>
              </div>

              <div class="detail-row">
                <span class="label">ຈຳນວນເງິນເປັນຕົວຫນັງສື</span>
                <span class="amount-words">{{
                  convertToWords(voucherData.amount, voucherData.currency?.code)
                }}</span>
              </div>
            </div>

            <!-- Signature Section -->
            <div class="signature-section">
              <div class="signature-box">
                <div class="signature-title">ຫົວໜ້າພະແນກ ຄັງເງິນສົດ</div>
                <div class="signature-line"></div>
                <div class="signature-name"></div>
              </div>
              <div class="signature-box">
                <div class="signature-title">ຜູ້ຮັບເງິນ</div>
                <div class="signature-line"></div>
                <div class="signature-name">
                  {{
                    voucherData.receiveName || voucherData.maker?.cus_name || ''
                  }}
                </div>
              </div>
              <div class="signature-box">
                <div class="signature-title">ຜູ້ຈ່າຍເງິນ</div>
                <div class="signature-line"></div>
                <div class="signature-name">
                  {{ voucherData.checker?.cus_name || '' }}
                </div>
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
            <div class="sub-department">
              ພະນັກງານການເງິນ ອຳນວຍການ ວິທະຍາລັຍຂັ້ນສູງ
            </div>
            <div class="amount-line">.........(000)..........</div>
          </div>

          <div class="voucher-number">
            <div class="number-box">
              <span class="number-label">No</span>
              <span class="number-value">{{
                formatVoucherNumber(voucherData.id)
              }}</span>
            </div>
          </div>
        </div>

        <div class="voucher-title">ໃບຈ່າຍເງິນສົດອອກຄັງ</div>

        <div class="voucher-details">
          <div class="detail-row">
            <span class="label">ອີງໃສ່ໃບ ຖອນ/ສະເຫນີ</span>
            <span class="dotted-line">{{ voucherData.externalRef || '' }}</span>
          </div>

          <div class="detail-row">
            <span class="label">ເລກທີ</span>
            <span class="value">{{
              voucherData.externalRefNo || voucherData.id || 'N/A'
            }}</span>
            <span class="label">ວັນທີນີ້</span>
            <span class="value">{{
              formatDate(voucherData.createdAt).day
            }}</span>
            <span class="label">ເດືອນ</span>
            <span class="value">{{
              formatDate(voucherData.createdAt).month
            }}</span>
            <span class="label">ປີ</span>
            <span class="value">{{
              formatDate(voucherData.createdAt).year
            }}</span>
          </div>

          <!-- ✅ UPDATED: Show payment method based on voucherData.method -->
          <div class="detail-row">
            <span class="label">ໄດ້ຈ່າຍເງິນ </span>
            <label
              ><input type="checkbox" :checked="voucherData.method === 'cash'" />
            </label>
            <span class="label"> ສົດ </span>
            <label
              ><input type="checkbox" :checked="voucherData.method === 'cheque'" />
            </label>
            <span class="label"> ແຊັກເລກທີ່ </span>
            <span class="dotted-line">{{ voucherData.chequeNo || '' }}</span>
          </div>

          <div class="detail-row">
            <span class="label">ໃຫ້ທ່ານ</span>
            <span class="dotted-line">{{
              voucherData.receiveName || voucherData.maker?.cus_name || ''
            }}</span>
            <span class="label">ເລກບັດປະຈຳຕົວ</span>
            <span class="dotted-line">{{ voucherData.receiveIDNO || '' }}</span>
          </div>

          <div class="detail-row">
            <span class="label">ສັງກັດຢູ່ພາກສ່ວນ ກົມ/ກອງ</span>
            <span class="dotted-line">{{
              voucherData.ministry?.ministryName || ''
            }}</span>
          </div>

          <div class="detail-row">
            <span class="label">ຈຳນວນເງິນ ກີບລາວ / ເອກະສານສຳຄັນ</span>
            <div class="currency-options">
              <label
                ><input
                  type="checkbox"
                  :checked="voucherData.currency?.code === 'LAK'"
                />
                LAK</label
              >
              <label
                ><input
                  type="checkbox"
                  :checked="voucherData.currency?.code === 'THB'"
                />
                THB</label
              >
              <label
                ><input
                  type="checkbox"
                  :checked="voucherData.currency?.code === 'USD'"
                />
                USD</label
              >
            </div>
          </div>

          <div class="detail-row">
            <span class="label">ຈຳນວນ</span>
            <span class="amount-display">{{
              formatAmount(voucherData.amount)
            }}</span>
            <span class="label">{{ voucherData.currency?.name || 'N/A' }}</span>
          </div>

          <div class="detail-row">
            <span class="label">ຈຳນວນເງິນເປັນຕົວຫນັງສື</span>
            <span class="amount-words">{{
              convertToWords(voucherData.amount, voucherData.currency?.code)
            }}</span>
          </div>

          <div class="detail-row">
            <span class="label">ເນື້ອໃນລາຍຈ່າຍ</span>
            <span class="dotted-line">{{ voucherData.purpose || '' }}</span>
          </div>

          <div class="detail-row description">
            <span class="label">ເນື້ອໃນລາຍການ</span>
            <div class="description-content">
              {{ voucherData.note || 'ບໍ່ມີຫມາຍເຫດ' }}
            </div>
          </div>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <div class="signature-title">ຜູ້ຮັບເງິນຂຶ້ນເຊັນ ຊື່ເຕັມ</div>
            <div class="signature-line"></div>
            <div class="signature-name">
              {{ voucherData.receiveName || voucherData.maker?.cus_name || '' }}
            </div>
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
            <div class="signature-name">
              {{ voucherData.checker?.cus_name || '' }}
            </div>
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
        purpose: 'test',
        note: '',
        status: 'pending',
        method: 'cash', // ✅ NEW: Default method
        approvedAt: null,
        dueDate: '2025-07-24T00:00:00.000Z',
        createdAt: '2025-07-09T15:12:51.000Z',
        updateTimestamp: '2025-07-09T15:12:51.000Z',
        makerId: 2,
        checkerId: null,
        currencyId: 5,
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: '',
        maker: {
          id: 2,
          cus_id: 1001,
          cus_pass: '1111',
          cus_name: 'USER01',
          cus_tel: 'TELEPHONE',
          cus_email: 'EMAIL',
          cus_active: true,
          village: null,
          district: null,
          province: null,
          remark: null,
          isActive: true,
          createdAt: '2025-01-24T19:54:20.000Z',
          updateTimestamp: '2025-01-24T19:54:20.000Z',
          groupId: 1,
        },
        checker: null,
        currency: {
          id: 5,
          code: 'USD',
          name: 'US Dollar',
          rate: 1,
          isActive: true,
          isLocalCCY: false,
          createdAt: '2023-09-17T06:52:15.000Z',
          updateTimestamp: '2025-03-03T01:11:36.000Z',
        },
        ministry: null,
        settlementLine: [],
      }),
    },
  },
  data() {
    return {
      showPrintDialog: false,
    }
  },

  watch: {
    voucherData: {
      handler(newValue) {
        if (newValue && newValue.id) {
          this.showPrintDialog = true
        }
      },
      deep: true,
      immediate: true,
    },
  },

  methods: {
    formatDateLao(dateString) {
      if (!dateString) return 'N/A'
      const date = new Date(dateString)
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    },
    
    openPrintDialog() {
      this.showPrintDialog = true
    },

    closePrintDialog() {
      this.showPrintDialog = false
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
        year: date.getFullYear(),
      }
    },

    formatAmount(amount) {
      if (!amount) return '0'
      return new Intl.NumberFormat('en-US').format(amount)
    },

    convertToWords(amount, currencyCode) {
      if (!amount) return ''

      const numbers = [
        '',
        'ໜຶ່ງ',
        'ສອງ',
        'ສາມ',
        'ສີ່',
        'ຫ້າ',
        'ຫົກ',
        'ເຈັດ',
        'ແປດ',
        'ເກົ້າ',
      ]

      // Convert number to string and process
      const amountStr = amount.toString()
      const length = amountStr.length

      if (length > 10) {
        // For very large numbers (over 10 billion), just return formatted number
        return this.formatAmount(amount) + ' ' + (currencyCode || '')
      }

      let result = ''

      // Helper function to convert a 3-digit group
      const convertThreeDigits = (num) => {
        let text = ''
        const hundreds = Math.floor(num / 100)
        const remainder = num % 100
        const tens = Math.floor(remainder / 10)
        const ones = remainder % 10

        // Hundreds place
        if (hundreds > 0) {
          text += numbers[hundreds] + 'ຮ້ອຍ'
        }

        // Tens and ones place
        if (remainder === 20) {
          // Special case: 20 = ຊາວ
          text += 'ຊາວ'
        } else if (tens >= 2) {
          // 30, 40, 50, etc.
          text += numbers[tens] + 'ສິບ'
          if (ones > 0) {
            text += numbers[ones]
          }
        } else if (tens === 1) {
          // 10-19
          text += 'ສິບ'
          if (ones > 0) {
            text += numbers[ones]
          }
        } else if (ones > 0) {
          // 1-9
          text += numbers[ones]
        }

        return text
      }

      // Convert based on number size
      if (length <= 3) {
        // 1 - 999
        result = convertThreeDigits(amount)
      } else if (length <= 6) {
        // 1,000 - 999,999
        const thousands = Math.floor(amount / 1000)
        const remainder = amount % 1000

        if (thousands === 10) {
          // Special case: 10,000 = ສິບພັນ
          result = 'ສິບພັນ'
        } else if (thousands === 20) {
          // Special case: 20,000 = ຊາວພັນ
          result = 'ຊາວພັນ'
        } else {
          result = convertThreeDigits(thousands) + 'ພັນ'
        }

        if (remainder > 0) {
          result += convertThreeDigits(remainder)
        }
      } else if (length <= 9) {
        // 1,000,000 - 999,999,999 (millions)
        const millions = Math.floor(amount / 1000000)
        const remainder = amount % 1000000

        // Handle millions part
        if (millions === 10) {
          result = 'ສິບລ້ານ'
        } else if (millions === 20) {
          result = 'ຊາວລ້ານ'
        } else {
          result = convertThreeDigits(millions) + 'ລ້ານ'
        }

        // Handle remainder (thousands and hundreds)
        if (remainder > 0) {
          if (remainder >= 1000) {
            const thousands = Math.floor(remainder / 1000)
            const finalRemainder = remainder % 1000

            if (thousands === 10) {
              result += 'ສິບພັນ'
            } else if (thousands === 20) {
              result += 'ຊາວພັນ'
            } else {
              result += convertThreeDigits(thousands) + 'ພັນ'
            }

            if (finalRemainder > 0) {
              result += convertThreeDigits(finalRemainder)
            }
          } else {
            result += convertThreeDigits(remainder)
          }
        }
      } else if (length <= 10) {
        // 1,000,000,000 - 9,999,999,999 (billions)
        const billions = Math.floor(amount / 1000000000)
        const remainder = amount % 1000000000

        // Handle billions part
        result = numbers[billions] + 'ພັນລ້ານ'

        // Handle remainder (millions, thousands, hundreds)
        if (remainder > 0) {
          if (remainder >= 1000000) {
            const millions = Math.floor(remainder / 1000000)
            const millionRemainder = remainder % 1000000

            if (millions === 10) {
              result += 'ສິບລ້ານ'
            } else if (millions === 20) {
              result += 'ຊາວລ້ານ'
            } else {
              result += convertThreeDigits(millions) + 'ລ້ານ'
            }

            if (millionRemainder > 0) {
              if (millionRemainder >= 1000) {
                const thousands = Math.floor(millionRemainder / 1000)
                const finalRemainder = millionRemainder % 1000

                if (thousands === 10) {
                  result += 'ສິບພັນ'
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ'
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ'
                }

                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder)
                }
              } else {
                result += convertThreeDigits(millionRemainder)
              }
            }
          } else if (remainder >= 1000) {
            const thousands = Math.floor(remainder / 1000)
            const finalRemainder = remainder % 1000

            if (thousands === 10) {
              result += 'ສິບພັນ'
            } else if (thousands === 20) {
              result += 'ຊາວພັນ'
            } else {
              result += convertThreeDigits(thousands) + 'ພັນ'
            }

            if (finalRemainder > 0) {
              result += convertThreeDigits(finalRemainder)
            }
          } else {
            result += convertThreeDigits(remainder)
          }
        }
      }

      // Add currency
      switch (currencyCode) {
        case 'LAK':
          result += ' ກີບ'
          break
        case 'USD':
          result += ' ໂດລາ'
          break
        case 'THB':
          result += ' ບາດ'
          break
        default:
          result += currencyCode ? ' ' + currencyCode : ''
      }

      return result
    },

    // ✅ FIXED: Single printVoucher method without auto-close
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
                line-height: 1.4;
              }
              .voucher-container { 
                border: 2px solid #000; 
                padding: 15px; 
                font-size: 12px; 
                line-height: 1.4; 
                max-width: 210mm;
                margin: 0 auto;
              }
              .voucher-header { 
                display: flex; 
                justify-content: space-between; 
                align-items: flex-start; 
                margin-bottom: 20px; 
                padding-bottom: 10px; 
                border-bottom: 1px solid #ccc; 
              }
              .ministry-voucher-section {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 20px;
                padding: 10px 0;
              }
              .ministry-titles {
                flex: 1;
                text-align: left;
              }
              .ministry-titles .voucher-title {
                font-size: 12px;
                margin-bottom: 4px;
                text-align: left;
                text-decoration: none;
                font-weight: normal;
                color: #333;
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
                text-align: right;
              }
              .number-box { 
                border: 2px solid #000; 
                padding: 8px 12px; 
                text-align: center; 
                background: #f9f9f9; 
                margin-bottom: 8px;
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
                font-weight: 600;
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
              .amount-display { 
                font-weight: bold; 
                font-size: 14px; 
                margin: 0 10px; 
                color: #d32f2f;
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
              @media print {
                .ministry-voucher-section {
                  display: flex !important;
                  justify-content: space-between !important;
                  align-items: flex-start !important;
                  margin-bottom: 20px !important;
                  padding: 10px 0 !important;
                }
                .ministry-titles {
                  flex: 1 !important;
                  text-align: left !important;
                }
                .ministry-titles .voucher-title {
                  font-size: 11px !important;
                  margin-bottom: 3px !important;
                  text-align: left !important;
                  text-decoration: none !important;
                  font-weight: normal !important;
                }
                .voucher-number {
                  flex: 0 0 auto !important;
                  margin-left: 20px !important;
                  text-align: right !important;
                }
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

      // ✅ REMOVED: Don't auto-close the dialog after printing
      // this.showPrintDialog = false
    },
  },
}
</script>

<style scoped>
/* Modal Styles */
.ministry-titles {
  flex: 1;
  text-align: left;
}

.ministry-titles .voucher-title {
  font-size: 14px !important;
  margin-bottom: 5px;
  text-align: left;
  text-decoration: none;
  font-weight: normal;
}

.ministry-voucher-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 10px 0;
}

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

  .ministry-voucher-section {
    display: flex !important;
    justify-content: space-between !important;
    align-items: flex-start !important;
  }

  .voucher-title {
    font-size: 14px !important;
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