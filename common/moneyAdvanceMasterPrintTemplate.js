/**
 * Money Advance Master Analysis Report Print Template & Printer
 * Generates an A4 Landscape Lao Government Style printable document
 */

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

// Helper to format dates
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

/**
 * Generate Lao Government Style HTML for Master Ministry Analysis Report
 * 7 Columns in requested order:
 * 1. index / no
 * 2. ministry name
 * 3. balance forward
 * 4. payment converted to LAK
 * 5. settlement
 * 6. closing balance
 * 7. Remark column (blank)
 */
export const generateMasterMinistryAnalysisReportHTML = ({
  masterData = [],
  totals = {},
  selectedMonthText = '',
  dateRangeText = '',
  companyData = {},
  user = {},
}) => {
  const companyName = companyData?.name || companyData?.company_name || 'ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ'
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'

  let totalBF = 0
  let totalPay = 0
  let totalSet = 0
  let totalClose = 0

  const tableRowsHTML = masterData.map((item, index) => {
    const minCode = item.ministryCode && item.ministryCode !== 'N/A' ? `${item.ministryCode} - ` : ''
    const minName = item.ministryName || 'Unknown Ministry'
    const displayName = `${minCode}${minName}`

    const bf = parseFloat(item.balanceForward || 0)
    const payment = parseFloat(item.payment || 0)
    const settlement = parseFloat(item.settlement || 0)
    const closing = parseFloat(item.closingBalance !== undefined ? item.closingBalance : (bf + payment - settlement))
    const remark = item.remark || ''

    totalBF += bf
    totalPay += payment
    totalSet += settlement
    totalClose += closing

    return `
      <tr>
        <td class="text-center font-mono">${index + 1}</td>
        <td class="ministry-name-cell">${displayName}</td>
        <td class="text-right font-mono">${formatCurrency(bf)}</td>
        <td class="text-right font-mono">${formatCurrency(payment)}</td>
        <td class="text-right font-mono">${formatCurrency(settlement)}</td>
        <td class="text-right font-mono font-bold">${formatCurrency(closing)}</td>
        <td class="text-center remark-cell">${remark}</td>
      </tr>
    `
  }).join('')

  const finalTotalBF = totals.totalBalanceForward !== undefined ? totals.totalBalanceForward : totalBF
  const finalTotalPay = totals.totalPayment !== undefined ? totals.totalPayment : totalPay
  const finalTotalSet = totals.totalSettlement !== undefined ? totals.totalSettlement : totalSet
  const finalTotalClose = totals.totalClosingBalance !== undefined ? totals.totalClosingBalance : totalClose

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8">
      <title>ບົດລາຍງານ ການວິເຄາະການຊຳລະ ແລະ ລາຍຮັບ (Master Report)</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');

        @page {
          size: A4 landscape;
          margin: 10mm 12mm;
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
          font-size: 11px;
          color: #1a202c;
          margin: 0;
          padding: 0;
          background-color: #fff;
          line-height: 1.4;
        }

        .report-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }

        /* Lao Government Header */
        .gov-header {
          text-align: center;
          margin-bottom: 12px;
        }

        .gov-country {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 2px;
          letter-spacing: 0.2px;
        }

        .gov-motto {
          font-size: 12px;
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
          margin-bottom: 14px;
          font-size: 11px;
        }

        .org-left {
          text-align: left;
        }

        .org-left .org-ministry {
          font-weight: 700;
          font-size: 12px;
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
          margin-bottom: 14px;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          padding: 8px 0;
        }

        .report-title {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .report-subtitle {
          font-size: 11px;
          color: #475569;
          font-weight: 500;
        }

        /* Flow equation summary pill bar */
        .flow-summary-bar {
          display: flex;
          justify-content: space-around;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 6px 12px;
          margin-bottom: 12px;
          font-size: 11px;
        }

        .flow-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .flow-item span {
          color: #64748b;
        }

        .flow-item strong {
          font-family: monospace, sans-serif !important;
          font-weight: 700;
        }

        /* Main Data Table */
        .report-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 16px;
          font-size: 10.5px;
        }

        .report-table th {
          background-color: #f1f5f9 !important;
          color: #1e293b !important;
          font-weight: 700;
          padding: 8px 6px;
          border: 1px solid #cbd5e1;
          text-align: center;
          vertical-align: middle;
          white-space: nowrap;
        }

        .report-table td {
          padding: 6px 6px;
          border: 1px solid #cbd5e1;
          vertical-align: middle;
        }

        .report-table tbody tr:nth-child(even) {
          background-color: #f8fafc;
        }

        .report-table tfoot td {
          background-color: #f1f5f9;
          font-weight: bold;
          border-top: 2px solid #64748b;
          border-bottom: 2px solid #64748b;
          padding: 8px 6px;
        }

        .ministry-name-cell {
          font-weight: 600;
          color: #0f172a;
          max-width: 250px;
        }

        .remark-cell {
          min-width: 80px;
        }

        /* Utilities */
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .text-left { text-align: left; }
        .font-bold { font-weight: bold; }
        .font-mono { font-family: monospace, sans-serif !important; font-weight: 600; }

        /* Signatures Section */
        .signatures {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 28px;
          page-break-inside: avoid;
        }

        .sign-box {
          text-align: center;
        }

        .sign-date {
          font-size: 10px;
          color: #64748b;
          margin-bottom: 6px;
        }

        .sign-title {
          font-size: 11px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 50px;
        }

        .sign-line {
          border-top: 1px dashed #94a3b8;
          width: 75%;
          margin: 0 auto 4px auto;
        }

        .sign-name {
          font-size: 10.5px;
          color: #334155;
        }

        @media print {
          body {
            margin: 0;
            padding: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="report-container">
        <!-- 1. Lao Government Header -->
        <div class="gov-header">
          <div class="gov-country">ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ (ສປປ ລາວ)</div>
          <div class="gov-motto">ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດຖະນະຖາວອນ</div>
          <div class="gov-stars">*** 000 ***</div>
        </div>

        <!-- 2. Organization Info & Metadata -->
        <div class="org-meta-section">
          <div class="org-left">
            <div class="org-ministry">${companyName}</div>
            <div class="org-dept">ກົມແຜນການ ແລະ ການເງິນ</div>
            <div class="org-division">ພະແນກຄຸ້ມຄອງລາຍຮັບ</div>
          </div>
          <div class="org-right">
            <div>ເລກທີ: ................../ກຜງ</div>
            <div>ວຽງຈັນ, ວັນທີພິມ: ${printTime}</div>
            <div>ຜູ້ສັງລວມ: ${printedBy}</div>
          </div>
        </div>

        <!-- 3. Report Title Box -->
        <div class="report-title-box">
          <h1 class="report-title">ບົດລາຍງານ ການວິເຄາະການຊຳລະ ແລະ ລາຍຮັບ (Master Report)</h1>
          <div class="report-subtitle">
            ປະຈຳງວດ: <strong>${selectedMonthText || '-'}</strong> ${dateRangeText ? `(${dateRangeText})` : ''}
          </div>
        </div>

        <!-- 4. Flow Summary Bar -->
        <div class="flow-summary-bar">
          <div class="flow-item">
            <span>1. ຍອດຍົກມາ (BF):</span>
            <strong style="color: #2563eb;">₭${formatCurrency(finalTotalBF)}</strong>
          </div>
          <div class="flow-item">
            <span>+ 2. ລາຍຈ່າຍ (Payments):</span>
            <strong style="color: #d97706;">₭${formatCurrency(finalTotalPay)}</strong>
          </div>
          <div class="flow-item">
            <span>- 3. ລາຍຮັບ (Settlements):</span>
            <strong style="color: #059669;">₭${formatCurrency(finalTotalSet)}</strong>
          </div>
          <div class="flow-item">
            <span>= 4. ຍອດຄົງເຫຼືອທ້າຍງວດ:</span>
            <strong style="color: #7c3aed;">₭${formatCurrency(finalTotalClose)}</strong>
          </div>
        </div>

        <!-- 5. Main 7-Column Table -->
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 40px;">ລ/ດ</th>
              <th>ຊື່ກະຊວງ / ກົມ (Ministry Name)</th>
              <th style="width: 135px;">ຍອດຍົກມາ<br><span style="font-size: 9px; font-weight: normal;">(Balance Forward)</span></th>
              <th style="width: 135px;">ລາຍຈ່າຍ<br><span style="font-size: 9px; font-weight: normal;">(Payment converted to LAK)</span></th>
              <th style="width: 135px;">ລາຍຮັບ / ຊຳລະ<br><span style="font-size: 9px; font-weight: normal;">(Settlement)</span></th>
              <th style="width: 145px;">ຍອດຄົງເຫຼືອທ້າຍງວດ<br><span style="font-size: 9px; font-weight: normal;">(Closing Balance)</span></th>
              <th style="width: 100px;">ໝາຍເຫດ<br><span style="font-size: 9px; font-weight: normal;">(Remark)</span></th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHTML || '<tr><td colspan="7" class="text-center py-4">ບໍ່ມີຂໍ້ມູນ</td></tr>'}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-center font-bold">ລວມຍອດທັງໝົດ (Grand Total LAK):</td>
              <td class="text-right font-mono font-bold">₭${formatCurrency(finalTotalBF)}</td>
              <td class="text-right font-mono font-bold">₭${formatCurrency(finalTotalPay)}</td>
              <td class="text-right font-mono font-bold">₭${formatCurrency(finalTotalSet)}</td>
              <td class="text-right font-mono font-bold" style="color: #7c3aed;">₭${formatCurrency(finalTotalClose)}</td>
              <td></td>
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
export const printMasterMinistryAnalysisReport = (params) => {
  try {
    const htmlContent = generateMasterMinistryAnalysisReportHTML(params)

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
    console.error('Error printing Master report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ (Error printing report)')
  }
}

export default {
  generateMasterMinistryAnalysisReportHTML,
  printMasterMinistryAnalysisReport
}
