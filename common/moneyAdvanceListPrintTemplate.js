/**
 * Money Advance List / Transaction Report Print Template & Printer
 * Generates an A4 Lao Government Style printable document
 * 7 Columns: No., Booking Date, Transaction Ref No., Description, Debit, Credit, Closing Balance
 */
import govLogoImage from '@/assets/image/MPWT/gov sign.png'

// Helper to format currency numbers
const formatCurrency = (val) => {
  if (val === null || val === undefined || val === '') return '0.00'
  const num = typeof val === 'number' ? val : parseFloat(val)
  if (isNaN(num)) return '0.00'
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num)
}

// Helper to format dates (DD/MM/YYYY)
const formatDate = (dateString) => {
  if (!dateString) return '-'
  try {
    const d = new Date(dateString)
    if (isNaN(d.getTime())) return dateString
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
  } catch (e) {
    return dateString
  }
}

// Format date with time
const formatDateTime = (date = new Date()) => {
  try {
    const d = new Date(date)
    if (isNaN(d.getTime())) return ''
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    const hours = String(d.getHours()).padStart(2, '0')
    const minutes = String(d.getMinutes()).padStart(2, '0')
    return `${day}/${month}/${year} ${hours}:${minutes}`
  } catch (e) {
    return ''
  }
}

// Format 6-digit voucher number
const formatVoucherNumber = (id) => {
  if (!id && id !== 0) return '-'
  return String(id).padStart(6, '0')
}

// Helper to calculate settlement amount
const getSettleAmount = (settlements) => {
  if (!Array.isArray(settlements)) return 0
  return settlements
    .filter((item) => item.isActive !== false && item.isActive !== 0)
    .reduce((total, item) => total + (parseFloat(item.amount) || 0), 0)
}

/**
 * Generate Lao Government Style HTML for Money Advance List Report
 * 7 Columns:
 * 1. No. (ລ/ດ)
 * 2. Booking date (ວັນທີລົງບັນຊີ)
 * 3. transaction refno (ເລກທີເອກະສານ / ເລກອ້າງອີງ)
 * 4. describtion of transaction (ເນື້ອໃນລາຍການ)
 * 5. debit (ຫນີ້ / Debit)
 * 6. credit (ມີ / Credit)
 * 7. closing balance (ຍອດເຫຼືອ / Closing Balance)
 */
export const generateMoneyAdvanceListReportHTML = ({
  reportData = [],
  filters = {},
  formattedFromDate = '',
  formattedToDate = '',
  companyData = {},
  user = {},
  ministryName = '',
  makerName = '',
  dashboard = {}
}) => {
  const companyName = companyData?.name || companyData?.company_name || 'ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ'
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'

  const fromDateText = formattedFromDate || (filters?.fromDate ? formatDate(filters.fromDate) : '')
  const toDateText = formattedToDate || (filters?.toDate ? formatDate(filters.toDate) : '')
  let dateRangeText = 'ທັງໝົດ (All)'
  if (fromDateText && toDateText) {
    dateRangeText = `${fromDateText} ຫາ ${toDateText}`
  } else if (fromDateText) {
    dateRangeText = `ເລີ່ມແຕ່ວັນທີ ${fromDateText}`
  } else if (toDateText) {
    dateRangeText = `ຮອດວັນທີ ${toDateText}`
  }

  let totalSettlement = 0
  let totalPayment = 0
  let runningBalance = 0

  const tableRowsHTML = reportData.map((item, index) => {
    const bookingDate = formatDate(item.bookingDate)
    const voucherNo = formatVoucherNumber(item.id)
    const extRef = item.externalRefNo ? `<div class="sub-ref">Ref: ${item.externalRefNo}</div>` : ''
    const cheque = item.chequeNo ? `<div class="sub-ref">Cheque: ${item.chequeNo}</div>` : ''

    // Description formatting
    const ministryTag = item.ministry
      ? `<div class="ministry-tag">${item.ministry.ministryCode ? item.ministry.ministryCode + ' - ' : ''}${item.ministry.ministryName}</div>`
      : ''
    const purposeText = item.purpose ? `<div class="purpose-text">${item.purpose}</div>` : '-'
    const receiveInfo = item.receiveName ? `<div class="sub-info">ຜູ້ຮັບ: ${item.receiveName}</div>` : ''
    const noteInfo = item.note ? `<div class="sub-info text-muted">ໝາຍເຫດ: ${item.note}</div>` : ''
    const fullDescription = `${ministryTag}${purposeText}${receiveInfo}${noteInfo}`

    // Financial calculations: Col 5 = Settlement, Col 6 = Payment, Col 7 = Closing Balance
    const settlement = getSettleAmount(item.settlementLine || item.settlements || [])
    const payment = parseFloat(item.amount || 0)
    const itemClosingBalance = payment - settlement

    totalSettlement += settlement
    totalPayment += payment
    runningBalance += itemClosingBalance

    return `
      <tr>
        <td class="text-center font-mono">${index + 1}</td>
        <td class="text-center font-mono">${bookingDate}</td>
        <td class="text-center">
          <div class="font-mono font-bold">#${voucherNo}</div>
          ${extRef}
          ${cheque}
        </td>
        <td class="desc-cell">${fullDescription}</td>
        <td class="text-right font-mono font-bold text-settle">${formatCurrency(settlement)}</td>
        <td class="text-right font-mono font-bold text-payment">${formatCurrency(payment)}</td>
        <td class="text-right font-mono font-bold text-balance">${formatCurrency(itemClosingBalance)}</td>
      </tr>
    `
  }).join('')

  const finalClosingBalance = totalPayment - totalSettlement

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8">
      <title>ບົດລາຍງານ ລາຍຈ່າຍເງິນສົດ (Money Advance Report)</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');

        @page {
          size: A4 portrait;
          margin: 10mm 10mm;
        }

        * {
          box-sizing: border-box;
          font-family: 'Phetsarath OT', 'Saysettha OT', 'Noto Sans Lao', sans-serif !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        html, body, table, th, td, div, p, span, h1, h2, h3, h4, h5, h6, strong {
          font-family: 'Phetsarath OT', 'Saysettha OT', 'Noto Sans Lao', sans-serif !important;
        }

        body {
          font-size: 10.5px;
          color: #1e293b;
          margin: 0;
          padding: 0;
          background-color: #fff;
          line-height: 1.35;
        }

        .report-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }

        /* Lao Government Header */
        .gov-header {
          text-align: center;
          margin-bottom: 10px;
        }

        .gov-logo {
          width: 55px;
          height: 55px;
          object-fit: contain;
          margin: 0 auto 4px auto;
          display: block;
        }

        .gov-country {
          font-size: 13.5px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 2px;
          letter-spacing: 0.2px;
        }

        .gov-motto {
          font-size: 11.5px;
          font-weight: 600;
          color: #334155;
          margin-bottom: 2px;
        }

        .gov-stars {
          font-size: 10px;
          color: #64748b;
          letter-spacing: 4px;
          margin-bottom: 8px;
        }

        /* Organization Info & Date section */
        .org-meta-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
          font-size: 10.5px;
        }

        .org-left {
          text-align: left;
        }

        .org-left .org-ministry {
          font-weight: 700;
          font-size: 11.5px;
          color: #0f172a;
        }

        .org-left .org-dept {
          font-weight: 600;
          color: #334155;
        }

        .org-left .org-division {
          color: #475569;
        }

        .org-right {
          text-align: right;
          color: #475569;
        }

        /* Document Title */
        .report-title-box {
          text-align: center;
          margin-bottom: 10px;
          border-top: 1px solid #cbd5e1;
          border-bottom: 1px solid #cbd5e1;
          padding: 6px 0;
          background-color: #f8fafc;
        }

        .report-title {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 2px 0;
        }

        .report-subtitle {
          font-size: 10.5px;
          color: #475569;
          font-weight: 500;
        }

        /* Flow / Summary Bar */
        .summary-bar {
          display: flex;
          justify-content: space-between;
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          padding: 6px 10px;
          margin-bottom: 10px;
          font-size: 10px;
        }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .summary-item span {
          color: #64748b;
        }

        .summary-item strong {
          font-family: 'Phetsarath OT', 'Courier New', monospace !important;
          font-weight: 700;
          font-size: 10.5px;
        }

        /* Main Data Table */
        .report-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 14px;
          font-size: 10px;
        }

        .report-table thead {
          display: table-header-group;
        }

        .report-table tfoot {
          display: table-footer-group;
        }

        .report-table th {
          background-color: #f1f5f9 !important;
          color: #0f172a !important;
          font-weight: 700;
          padding: 6px 4px;
          border: 1px solid #cbd5e1;
          text-align: center;
          vertical-align: middle;
        }

        .report-table td {
          padding: 5px 4px;
          border: 1px solid #cbd5e1;
          vertical-align: top;
        }

        .report-table tbody tr {
          page-break-inside: avoid;
        }

        .report-table tbody tr:nth-child(even) {
          background-color: #f8fafc;
        }

        .report-table tfoot td {
          background-color: #f1f5f9;
          font-weight: bold;
          border-top: 2px solid #475569;
          border-bottom: 2px solid #475569;
          padding: 6px 4px;
        }

        /* Cell Specific Styles */
        .desc-cell {
          max-width: 240px;
          word-break: break-word;
        }

        .ministry-tag {
          font-size: 9px;
          font-weight: 600;
          color: #1e40af;
          margin-bottom: 2px;
        }

        .purpose-text {
          font-weight: 500;
          color: #0f172a;
        }

        .sub-info {
          font-size: 8.5px;
          color: #475569;
          margin-top: 1px;
        }

        .sub-ref {
          font-size: 8.5px;
          color: #64748b;
        }

        .text-settle {
          color: #059669;
        }

        .text-payment {
          color: #0f172a;
        }

        .text-balance {
          color: #2563eb;
        }

        /* Utilities */
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .text-left { text-align: left; }
        .font-bold { font-weight: bold; }
        .font-mono { font-family: 'Phetsarath OT', 'Courier New', monospace !important; }
        .text-muted { color: #64748b; }

        /* Signatures Section */
        .signatures {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 22px;
          page-break-inside: avoid;
        }

        .sign-box {
          text-align: center;
        }

        .sign-date {
          font-size: 9.5px;
          color: #64748b;
          margin-bottom: 4px;
        }

        .sign-title {
          font-size: 10.5px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 44px;
        }

        .sign-line {
          border-top: 1px dashed #94a3b8;
          width: 80%;
          margin: 0 auto 3px auto;
        }

        .sign-name {
          font-size: 10px;
          color: #334155;
        }

        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .report-table {
            page-break-inside: auto;
          }
          .report-table tr {
            page-break-inside: avoid;
            page-break-after: auto;
          }
        }
      </style>
    </head>
    <body>
      <div class="report-container">
        <!-- 1. Lao Government Header -->
        <div class="gov-header">
          <img src="${govLogoImage}" class="gov-logo" alt="Lao National Emblem" />
          <div class="gov-country">ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ (ສປປ ລາວ)</div>
          <div class="gov-motto">ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດຖະນະຖາວອນ</div>
          <div class="gov-stars">*** 000 ***</div>
        </div>

        <!-- 2. Organization Info & Metadata -->
        <div class="org-meta-section">
          <div class="org-left">
            <div class="org-ministry">${companyName}</div>
            <div class="org-dept">ກະຊວງ ໂຍທາທິການ ແລະ ຂົນສົ່ງ</div>
            <div class="org-division">ກົມແຜນການ ແລະ ການເງິນ</div>
          </div>
          <div class="org-right">
            <div>ເລກທີ: ................../ກຜງ</div>
            <div>ວຽງຈັນ, ວັນທີພິມ: ${printTime}</div>
            <div>ຜູ້ສັງລວມ: ${printedBy}</div>
          </div>
        </div>

        <!-- 3. Report Title Box -->
        <div class="report-title-box">
          <h1 class="report-title">ບົດລາຍງານ ລາຍຈ່າຍເງິນສົດ (Money Advance Report)</h1>
          <div class="report-subtitle">
            ໄລຍະເວລາ: <strong>${dateRangeText}</strong>
            ${ministryName ? ` | ກະຊວງ/ກົມ: <strong>${ministryName}</strong>` : ''}
            ${makerName ? ` | ຜູ້ລົງ: <strong>${makerName}</strong>` : ''}
          </div>
        </div>

        <!-- 4. Summary Bar -->
        <div class="summary-bar">
          <div class="summary-item">
            <span>ຈຳນວນລາຍການ:</span>
            <strong>${reportData.length} ລາຍການ</strong>
          </div>
          <div class="summary-item">
            <span>ລວມຍອດ ການຊຳລະ (Settlement):</span>
            <strong style="color: #059669;">₭${formatCurrency(totalSettlement)}</strong>
          </div>
          <div class="summary-item">
            <span>ລວມຍອດ ລາຍຈ່າຍ (Payment):</span>
            <strong style="color: #0f172a;">₭${formatCurrency(totalPayment)}</strong>
          </div>
          <div class="summary-item">
            <span>ຍອດເຫຼືອ (Closing Balance):</span>
            <strong style="color: #2563eb;">₭${formatCurrency(finalClosingBalance)}</strong>
          </div>
        </div>

        <!-- 5. Main 7-Column Table -->
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 35px;">1<br>ລ/ດ<br><span style="font-size: 8px; font-weight: normal;">(No.)</span></th>
              <th style="width: 75px;">2<br>ວັນທີລົງບັນຊີ<br><span style="font-size: 8px; font-weight: normal;">(Booking Date)</span></th>
              <th style="width: 90px;">3<br>ເລກທີເອກະສານ<br><span style="font-size: 8px; font-weight: normal;">(Transaction Ref)</span></th>
              <th>4<br>ເນື້ອໃນລາຍການ<br><span style="font-size: 8px; font-weight: normal;">(Description of Transaction)</span></th>
              <th style="width: 105px;">5<br>ການຊຳລະ<br><span style="font-size: 8px; font-weight: normal;">(Settlement)</span></th>
              <th style="width: 105px;">6<br>ລາຍຈ່າຍ<br><span style="font-size: 8px; font-weight: normal;">(Payment)</span></th>
              <th style="width: 110px;">7<br>ຍອດເຫຼືອ<br><span style="font-size: 8px; font-weight: normal;">(Closing Balance)</span></th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHTML || '<tr><td colspan="7" class="text-center py-4">ບໍ່ມີຂໍ້ມູນ</td></tr>'}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-center font-bold">ລວມຍອດທັງໝົດ (Grand Total):</td>
              <td class="text-right font-mono font-bold text-settle">₭${formatCurrency(totalSettlement)}</td>
              <td class="text-right font-mono font-bold text-payment">₭${formatCurrency(totalPayment)}</td>
              <td class="text-right font-mono font-bold text-balance">₭${formatCurrency(finalClosingBalance)}</td>
            </tr>
          </tfoot>
        </table>

        <!-- 6. Official Government Signatures -->
        <div class="signatures">
          <div class="sign-box">
            <div class="sign-date">ວຽງຈັນ, ວັນທີ: ......./......./...........</div>
            <div class="sign-title">ຜູ້ສັງລວມ / ຜູ້ລາຍງານ</div>
            <div class="sign-line"></div>
            <div class="sign-name">${printedBy}</div>
          </div>
          <div class="sign-box">
            <div class="sign-date">ວຽງຈັນ, ວັນທີ: ......./......./...........</div>
            <div class="sign-title">ຫົວໜ້າພະແນກຄຸ້ມຄອງລາຍຮັບ</div>
            <div class="sign-line"></div>
            <div class="sign-name">(...................................................)</div>
          </div>
          <div class="sign-box">
            <div class="sign-date">ວຽງຈັນ, ວັນທີ: ......./......./...........</div>
            <div class="sign-title">ຫົວໜ້າກົມແຜນການ ແລະ ການເງິນ</div>
            <div class="sign-line"></div>
            <div class="sign-name">(...................................................)</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

/**
 * Open print window and initiate printing
 */
export const printMoneyAdvanceListReport = (params) => {
  try {
    const htmlContent = generateMoneyAdvanceListReportHTML(params)

    const printWindow = window.open(
      '',
      '_blank',
      'width=1100,height=800,top=50,left=50,toolbar=no,menubar=no,scrollbars=yes,status=no'
    )

    if (!printWindow) {
      alert('ກະລຸນາອະນຸຍາດ Popup ໃນ Browser ເພື່ອພິມລາຍງານ (Please allow popups to print)')
      return
    }

    printWindow.document.open()
    printWindow.document.write(htmlContent)
    printWindow.document.close()

    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.focus()
        printWindow.print()
      }, 500)
    }

    setTimeout(() => {
      if (printWindow && !printWindow.closed) {
        printWindow.focus()
      }
    }, 1200)

  } catch (error) {
    console.error('Error printing report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ (Error printing report)')
  }
}

export default {
  generateMoneyAdvanceListReportHTML,
  printMoneyAdvanceListReport
}
