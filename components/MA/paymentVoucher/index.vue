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
                  <!-- Logo GOV -->
                  <img
                    :src="require('~/assets/image/MPWT/gov sign.png')"
                    alt="Ministry Logo"
                    class="voucher-logo-gov"
                  />
                </div>
                <div class="company-name">
                  ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ
                </div>
                <div class="company-name">
                  ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ
                </div>
                <!-- <div class="amount-line">.........(000)..........</div> -->
              </div>
            </div>
            <!-- ✅ FIXED: Compact Left-Right Layout Section -->
            <v-row
              class="ministry-voucher-section"
              align="end"
              justify="space-between"
              no-gutters
            >
              <!-- Left side -->
              <v-col cols="6" class="d-flex flex-column align-start pa-0">
                <img
                  :src="require('~/assets/image/MPWT/PWT.png')"
                  alt="Ministry Logo"
                  class="voucher-logo"
                />
                <div class="voucher-title">ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ.</div>
                <div class="voucher-title">ກົມແຜນການ ແລະ ການເງິນ</div>
                <div class="voucher-title">ພະແນກຄຸ້ມຄອງລາຍຮັບ</div>
                <div class="voucher-title"></div>
              </v-col>

              <!-- Right side -->
              <v-col cols="6" class="d-flex flex-column align-end pa-0">
                <div class="number-box">
                  <span class="number-label">No</span>
                  <span class="number-value">
                    {{ formatVoucherNumber(voucherData.id) }}
                  </span>
                </div>
              </v-col>
            </v-row>

            <v-row
              class="ministry-voucher-section"
              align="end"
              justify="space-between"
              no-gutters
            >
              <!-- Left side -->
              <v-col cols="6" class="d-flex flex-column align-start pa-0">
              </v-col>

              <!-- Right side -->
              <v-col cols="6" class="d-flex flex-column align-end pa-0">
                <div class="voucher-title">
                  <span class="label" style="font-size: 14px !important"
                    >ນະຄອນຫຼວງວຽງຈັນ ວັນທີ</span
                  >
                  <span class="dotted-line">
                    {{ formatDateLao(voucherData.bookingDate) }}
                  </span>
                </div>
              </v-col>
            </v-row>

            <!-- Title -->
            <div class="voucher-title-main">ໃບຈ່າຍເງິນສົດອອກຄັງ</div>

            <!-- Voucher Details -->
            <div class="voucher-details">
              <div class="detail-row">
                <span class="label">ອີງໃສ່ໃບສັ່ງຈ່າຍ ເລກທີ</span>

                <span class="dotted-line"
                  >{{
                    voucherData.externalRefNo ||
                    formatVoucherNumber(voucherData.id) ||
                    'N/A'
                  }}
                  {{ voucherData.externalRef || '' }}</span
                >

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
                  >ພະແນກຄຸ້ມຄອງລາຍຮັບ, ກະຊວງ ໂຍທາທິການ ແລະ ຂົນສົ່ງ.</span
                >
              </div>

              <!-- ✅ UPDATED: Show payment method based on voucherData.method -->
              <div class="detail-row">
                <span class="label">ໄດ້ຈ່າຍເງິນ </span>
                <label
                  ><input
                    type="checkbox"
                    :checked="voucherData.method === 'cash'"
                  />
                </label>
                <span class="label"> ສົດ </span>
                <label
                  ><input
                    type="checkbox"
                    :checked="voucherData.method === 'cheque'"
                  />
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
                    ກີບ</label
                  >
                  <label
                    ><input
                      type="checkbox"
                      :checked="voucherData.currency?.code === 'THB'"
                    />
                    ບາດ</label
                  >
                  <label
                    ><input
                      type="checkbox"
                      :checked="voucherData.currency?.code === 'USD'"
                    />
                    ໂດລາ</label
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
                <span class="amount-display"
                  >{{ formatAmount(voucherData.amount) }}
                  {{ getCurrencyWord(voucherData.currency?.code) }}
                </span>
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
                <div class="signature-title">ຫົວໜ້າພະແນກ ຄຸ້ມຄອງລາຍຮັບ</div>
                <div class="signature-name"></div>
              </div>
              <div class="signature-box">
                <div class="signature-title">ຜູ້ຮັບເງິນ</div>
                <div class="signature-name">
                  {{
                    voucherData.receiveName || voucherData.maker?.cus_name || ''
                  }}
                </div>
              </div>
              <div class="signature-box">
                <div class="signature-title">ຜູ້ຈ່າຍເງິນ</div>
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
        method: 'cash',
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
    getCurrencyWord(currencyCode) {
      let result = ''
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
          result += 'ກີບ'
      }
      return result
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
        if (amount >= 100000) {
          // Handle ແສນ (100,000) unit for 100,000 - 999,999
          const saen = Math.floor(amount / 100000)
          const remainder = amount % 100000

          if (saen === 10) {
            // Special case: 1,000,000 should be handled in millions section
            // This shouldn't happen in this range, but keeping for safety
            result = 'ສິບແສນ'
          } else {
            result = numbers[saen] + 'ແສນ'
          }

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
        } else {
          // Handle ພັນ (1,000) unit for 1,000 - 99,999
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

        // Handle remainder (saen, thousands and hundreds)
        if (remainder > 0) {
          if (remainder >= 100000) {
            // Handle ແສນ unit in remainder
            const saen = Math.floor(remainder / 100000)
            const saenRemainder = remainder % 100000

            result += numbers[saen] + 'ແສນ'

            if (saenRemainder > 0) {
              if (saenRemainder >= 1000) {
                const thousands = Math.floor(saenRemainder / 1000)
                const finalRemainder = saenRemainder % 1000

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
                result += convertThreeDigits(saenRemainder)
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
      } else if (length <= 10) {
        // 1,000,000,000 - 9,999,999,999 (billions)
        const billions = Math.floor(amount / 1000000000)
        const remainder = amount % 1000000000

        // Handle billions part
        result = numbers[billions] + 'ພັນລ້ານ'

        // Handle remainder (millions, saen, thousands, hundreds)
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
              if (millionRemainder >= 100000) {
                // Handle ແສນ unit in remainder
                const saen = Math.floor(millionRemainder / 100000)
                const saenRemainder = millionRemainder % 100000

                result += numbers[saen] + 'ແສນ'

                if (saenRemainder > 0) {
                  if (saenRemainder >= 1000) {
                    const thousands = Math.floor(saenRemainder / 1000)
                    const finalRemainder = saenRemainder % 1000

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
                    result += convertThreeDigits(saenRemainder)
                  }
                }
              } else if (millionRemainder >= 1000) {
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
          } else if (remainder >= 100000) {
            // Handle ແສນ unit in remainder
            const saen = Math.floor(remainder / 100000)
            const saenRemainder = remainder % 100000

            result += numbers[saen] + 'ແສນ'

            if (saenRemainder > 0) {
              if (saenRemainder >= 1000) {
                const thousands = Math.floor(saenRemainder / 1000)
                const finalRemainder = saenRemainder % 1000

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
                result += convertThreeDigits(saenRemainder)
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
                font-weight: bold !important;
              }

              * {
                font-weight: bold !important;
              }

                .voucher-logo {
                  width: 110px;
                  height: 110px;
                  /* width: auto;
                  height: auto; */
                  object-fit: contain;
                  margin-bottom: 1px !important;
                  line-height: 1 !important;
                }
              .voucher-logo-gov {
                max-width: 90px;
                max-height: 90px;
                width: auto;
                height: auto;
                object-fit: contain;
                margin-top: 30px !important;
                margin-bottom: 4px !important;
                line-height: 1 !important;
              }
              .voucher-container { 
                border: 2px solid #000; 
                padding: 15px; 
                font-size: 12px; 
                line-height: 1.4; 
                max-width: 210mm;
                margin: 0 auto;
                font-weight: bold;
              }
              .voucher-header { 
                display: flex; 
                justify-content: space-between; 
                align-items: flex-start; 
                margin-bottom: 15px; 
                padding-bottom: 5px; 
              }
              .ministry-voucher-section {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                margin: 0 !important;
                padding: 0 !important;
                margin-bottom: 10px !important;
              }
              .ministry-voucher-section .col,
              .ministry-voucher-section > div {
                padding: 0 !important;
                margin: 0 !important;
              }
              .voucher-title {
                font-size: 16px !important;
                margin: 0 !important;
                margin-bottom: 2px !important;
                line-height: 1.2 !important;
                text-align: left;
                text-decoration: none;
                font-weight: bold !important;
              }
              .voucher-title-main {
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                margin: 20px 0;
                text-decoration: underline;
              }
              .company-info { 
                flex: 1; 
                text-align: center; 
              }
              .company-name { 
                font-weight: bold !important; 
                font-size: 14px; 
                margin-bottom: 3px; 
              }
              .department { 
                font-size: 12px; 
                margin-bottom: 3px; 
                font-weight: bold !important;
              }
              .sub-department { 
                font-size: 10px; 
                margin-bottom: 10px; 
                font-weight: bold !important;
              }
              .amount-line { 
                font-size: 10px; 
                letter-spacing: 2px; 
                font-weight: bold !important;
              }
              .number-box { 
                border: 2px solid #000; 
                padding: 5px 8px; 
                text-align: center; 
                background: #f9f9f9; 
                margin-bottom: 5px;
              }
              .number-label { 
                font-weight: bold !important; 
                margin-right: 10px; 
              }
              .number-value { 
                font-weight: bold !important; 
                color: #d32f2f;
              }
              .detail-row { 
                display: flex; 
                align-items: center; 
                margin-bottom: 8px; 
                min-height: 20px; 
              }
              .label { 
                font-weight: bold !important; 
                margin-right: 8px; 
                white-space: nowrap; 
              }
              .value { 
                margin-right: 15px; 
                border-bottom: 1px solid #000; 
                min-width: 35px; 
                text-align: center; 
                padding: 1px 3px; 
                font-weight: bold !important;
              }
              .dotted-line { 
                flex: 1; 
                border-bottom: 1px dotted #000; 
                margin: 0 8px; 
                min-height: 18px; 
                padding: 1px 3px; 
                font-weight: bold !important;
              }
              .currency-options { 
                display: flex; 
                gap: 15px; 
                margin-left: 8px; 
              }
              .currency-options label { 
                display: flex; 
                align-items: center; 
                gap: 3px; 
                font-weight: bold !important; 
              }
              .amount-display { 
                font-weight: bold !important; 
                font-size: 14px; 
                margin: 0 8px; 
                color: #d32f2f;
              }
              .amount-words { 
                flex: 1; 
                border-bottom: 1px solid #000; 
                margin-left: 8px; 
                padding: 1px 8px; 
                font-style: italic; 
                font-weight: bold !important;
              }
              .signature-section { 
                display: flex; 
                justify-content: space-between; 
                margin-top: 30px; 
                gap: 8px; 
              }
              .signature-box { 
                flex: 1; 
                text-align: center; 
              }
              .signature-title { 
                font-size: 14px; 
                margin-bottom: 25px;
                margin-bottom: 100px; 
                font-weight: bold !important; 
              }
              .signature-name { 
                font-size: 14px; 
                margin-top: 5px; 
                font-weight: bold !important; 
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
    },
  },
}
</script>

<style scoped>
/* Modal Styles */

.voucher-logo {
  width: 110px;
  height: 110px;
  /* width: auto;
  height: auto; */
  object-fit: contain;
  margin-bottom: 1px !important;
  line-height: 1 !important;
}
.voucher-logo-gov {
  max-width: 80px;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  margin-top: 30px !important;
  margin-bottom: 4px !important;
  line-height: 1 !important;
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

/* Voucher Styles - COMPACT & BOLD */
.voucher-container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 15px;
  font-family: 'Phetsarath OT', 'Noto Sans Lao', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.3;
  border: 2px solid #333;
  background: white;
  font-weight: bold;
}

.voucher-container * {
  font-weight: bold !important;
}

.voucher-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15;
  padding-bottom: 5px;
}

/* COMPACT VUETIFY OVERRIDES */
.ministry-voucher-section {
  margin: 0 !important;
  padding: 0 !important;
  margin-bottom: 10px !important;
}

.ministry-voucher-section .col {
  padding: 0 !important;
  margin: 0 !important;
}

.ministry-voucher-section .v-col {
  padding: 0 !important;
  margin: 0 !important;
}

/* Remove Vuetify default gutters and spacing */
.row {
  margin: 0 !important;
}

.col {
  padding: 0 !important;
}

.company-info {
  flex: 1;
  text-align: center;
}

.company-name {
  font-weight: bold !important;
  font-size: 16px;
  margin-bottom: 3px;
}

.department {
  font-size: 14px;
  margin-bottom: 3px;
  font-weight: bold !important;
}

.sub-department {
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: bold !important;
}

.amount-line {
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: bold !important;
}

.number-box {
  border: 2px solid #333;
  padding: 6px 10px;
  text-align: center;
  background: #f9f9f9;
  margin-bottom: 5px;
}

.number-label {
  font-weight: bold !important;
  margin-right: 8px;
}

.number-value {
  font-weight: bold !important;
  color: #d32f2f;
}

.voucher-title {
  text-align: center;
  font-size: 18px;
  font-weight: bold !important;
  margin: 15px 0;
  text-decoration: underline;
}

.voucher-title:not(.voucher-container > .voucher-title) {
  font-size: 16px !important;
  margin: 0 !important;
  margin-bottom: 2px !important;
  line-height: 1.2 !important;
  text-align: left !important;
  text-decoration: none !important;
  font-weight: bold !important;
}

.voucher-details {
  margin-bottom: 25px;
}

.detail-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  min-height: 22px;
}

.detail-row.description {
  flex-direction: column;
  align-items: flex-start;
}

.label {
  font-weight: bold !important;
  margin-right: 8px;
  white-space: nowrap;
}

.value {
  margin-right: 15px;
  border-bottom: 1px solid #333;
  min-width: 35px;
  text-align: center;
  padding: 2px 4px;
  font-weight: bold !important;
}

.dotted-line {
  flex: 1;
  border-bottom: 1px dotted #333;
  margin: 0 8px;
  min-height: 18px;
  padding: 2px 4px;
  font-weight: bold !important;
}

.currency-options {
  display: flex;
  gap: 15px;
  margin-left: 8px;
}

.currency-options label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold !important;
}

.amount-display {
  font-weight: bold !important;
  font-size: 16px;
  margin: 0 8px;
  color: #d32f2f;
}

.description-content {
  width: 100%;
  min-height: 50px;
  border: 1px solid #333;
  padding: 8px;
  margin-top: 4px;
  background: #fafafa;
  font-weight: bold !important;
}

.amount-words {
  flex: 1;
  border-bottom: 1px solid #333;
  margin-left: 8px;
  padding: 2px 8px;
  font-style: italic;
  font-weight: bold !important;
}

.signature-section {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 8px;
}

.signature-box {
  flex: 1;
  text-align: center;
  
}

.signature-title {
  font-size: 14px;
  margin-bottom: 25px;
  margin-bottom: 100px;
  font-weight: bold !important;
}

.signature-line {
  border-bottom: 1px solid #333;
  height: 1px;
  margin-top: 15px;
}

.signature-name {
  font-size: 14px;
  margin-top: 4px;
  font-weight: bold !important;
  color: #666;
}
.voucher-title-main {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
  text-decoration: underline;
}
/* Print Styles */
@media print {
  body *,
  * {
    font-weight: bold !important;
  }

  .print-only,
  .print-only * {
    visibility: visible;
    font-weight: bold !important;
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
    font-weight: bold !important;
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