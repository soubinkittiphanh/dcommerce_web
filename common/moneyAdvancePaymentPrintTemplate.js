/**
 * Money Advance Payment Report Print Template & Printer
 * Generates an A4 Landscape printable document for Money Advance reports
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

// Helper to format exchange rates
const formatExchangeRate = (val) => {
  if (!val && val !== 0) return '1.0000'
  const num = typeof val === 'number' ? val : parseFloat(val)
  if (isNaN(num)) return '1.0000'
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
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

// Format 6-digit voucher number
const formatVoucherNumber = (id) => {
  if (!id && id !== 0) return '-'
  return String(id).padStart(6, '0')
}

// Status text mapping
const getStatusText = (status) => {
  const texts = {
    pending: 'ລໍຖ້າ (Pending)',
    approved: 'ອະນຸມັດ (Approved)',
    settled: 'ຊຳລະແລ້ວ (Settled)',
    rejected: 'ປະຕິເສດ (Rejected)'
  }
  return texts[status] || status || '-'
}

/**
 * Generate HTML for Money Advance Payment Report
 */
export const generateMoneyAdvanceReportHTML = ({
  reportData = [],
  summaryData = {},
  filters = {},
  companyData = {},
  user = {},
  ministryName = '',
  currencyName = ''
}) => {
  const companyName = companyData?.name || companyData?.company_name || 'DCOMMERCE'
  const companyTel = companyData?.tel || companyData?.phone || ''
  const companyAddress = companyData?.address || ''
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'

  const fromDateDisplay = filters?.fromDate ? formatDate(filters.fromDate) : 'ທັງໝົດ'
  const toDateDisplay = filters?.toDate ? formatDate(filters.toDate) : 'ທັງໝົດ'
  const ministryDisplay = ministryName || 'ທັງໝົດ (All)'
  const currencyDisplay = currencyName || 'ທັງໝົດ (All)'

  // Generate Table Rows
  const tableRowsHTML = reportData.map((item, index) => {
    const voucherNo = formatVoucherNumber(item.id)
    const bookingDate = formatDate(item.bookingDate)
    const purpose = item.purpose || '-'
    const note = item.note ? `<div class="sub-text">Note: ${item.note}</div>` : ''
    const minName = item.ministry?.ministryName || 'N/A'
    const minCode = item.ministry?.ministryCode ? ` (${item.ministry.ministryCode})` : ''
    const ccy = item.currencyCode || 'LAK'
    const amount = formatCurrency(item.amount)
    const rate = formatExchangeRate(item.exchangeRate || 1)
    
    // Calculate LCY equivalent if not already provided
    let lcyVal = item.lcyEquivalent
    if (lcyVal === undefined || lcyVal === null) {
      const numAmount = parseFloat(item.amount || 0)
      const numRate = parseFloat(item.exchangeRate || 1)
      lcyVal = numAmount * numRate
    }
    const lcyEquivalent = formatCurrency(lcyVal)

    const settlementAmount = formatCurrency(item.settlementAmount || 0)
    const outstanding = formatCurrency(item.outstandingAmount !== undefined ? item.outstandingAmount : (item.amount - (item.settlementAmount || 0)))
    const percent = `${item.settlementPercentage || 0}%`
    const statusText = getStatusText(item.status)

    return `
      <tr>
        <td class="text-center">${index + 1}</td>
        <td class="text-center font-mono font-bold">${voucherNo}</td>
        <td class="text-center">${bookingDate}</td>
        <td>
          <div class="purpose-cell">${purpose}</div>
          ${note}
        </td>
        <td>${minName}${minCode}</td>
        <td class="text-center font-bold">${ccy}</td>
        <td class="text-right font-mono">${amount}</td>
        <td class="text-center font-mono text-muted">${rate}</td>
        <td class="text-right font-mono font-bold">${lcyEquivalent}</td>
        <td class="text-right font-mono text-success">${settlementAmount}</td>
        <td class="text-right font-mono text-danger font-bold">${outstanding}</td>
        <td class="text-center">
          <span class="status-badge status-${item.status || 'pending'}">${statusText}</span>
          <div class="sub-text">${percent}</div>
        </td>
      </tr>
    `
  }).join('')

  // Summary KPI Cards
  const totalAdv = formatCurrency(summaryData.totalAdvances || 0)
  const totalAdvLcy = summaryData.totalAdvancesLcy ? `${formatCurrency(summaryData.totalAdvancesLcy)} LAK` : ''

  const totalSet = formatCurrency(summaryData.totalSettlements || 0)
  const totalSetLcy = summaryData.totalSettlementsLcy ? `${formatCurrency(summaryData.totalSettlementsLcy)} LAK` : ''

  const totalOut = formatCurrency(summaryData.outstandingBalance || 0)
  const totalOutLcy = summaryData.outstandingBalanceLcy ? `${formatCurrency(summaryData.outstandingBalanceLcy)} LAK` : ''

  const totalBf = formatCurrency(summaryData.broughtForward || 0)
  const totalBfLcy = summaryData.broughtForwardLcy ? `${formatCurrency(summaryData.broughtForwardLcy)} LAK` : ''

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8">
      <title>ລາຍງານລາຍຈ່າຍລ່ວງໜ້າ (Money Advance Report)</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');

        @page {
          size: A4 landscape;
          margin: 8mm 10mm;
        }

        * {
          box-sizing: border-box;
          font-family: 'Phetsarath OT', 'Saysettha OT', 'Noto Sans Lao', sans-serif !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        html, body, table, th, td, div, p, span, h1, h2, h3, h4, h5, h6, strong, button, input, select {
          font-family: 'Phetsarath OT', 'Saysettha OT', 'Noto Sans Lao', sans-serif !important;
        }

        body {
          font-size: 11px;
          color: #1a202c;
          margin: 0;
          padding: 0;
          background-color: #fff;
        }

        .report-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }

        /* Header Styles */
        .report-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid #01532B;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .company-info h2 {
          margin: 0 0 4px 0;
          font-size: 18px;
          color: #01532B;
          font-weight: bold;
        }

        .company-info p {
          margin: 2px 0;
          font-size: 10px;
          color: #4a5568;
        }

        .report-title-section {
          text-align: right;
        }

        .report-title-section h1 {
          margin: 0;
          font-size: 18px;
          color: #01532B;
          font-weight: bold;
        }

        .report-title-section .subtitle {
          margin: 2px 0;
          font-size: 11px;
          color: #718096;
        }

        .report-title-section .meta {
          font-size: 9px;
          color: #718096;
          margin-top: 4px;
        }

        /* Filter Criteria Bar */
        .filter-summary {
          background-color: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          padding: 6px 12px;
          margin-bottom: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 10px;
        }

        .filter-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .filter-item strong {
          color: #2d3748;
        }

        /* Summary Cards Grid */
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 14px;
        }

        .summary-box {
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 8px 12px;
          background: #fff;
          border-left: 4px solid #01532B;
        }

        .summary-box.success {
          border-left-color: #228B22;
        }

        .summary-box.danger {
          border-left-color: #e53e3e;
        }

        .summary-box.info {
          border-left-color: #3182ce;
        }

        .summary-label {
          font-size: 10px;
          font-weight: 600;
          color: #718096;
          text-transform: uppercase;
        }

        .summary-val {
          font-size: 14px;
          font-weight: bold;
          color: #1a202c;
          margin-top: 2px;
        }

        .summary-sub {
          font-size: 9px;
          color: #a0aec0;
          margin-top: 2px;
        }

        /* Main Data Table */
        .report-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 16px;
          font-size: 10px;
        }

        .report-table th {
          background-color: #01532B !important;
          color: #ffffff !important;
          font-weight: 600;
          padding: 6px 4px;
          border: 1px solid #01532B;
          text-align: center;
          white-space: nowrap;
        }

        .report-table td {
          padding: 5px 4px;
          border: 1px solid #e2e8f0;
          vertical-align: middle;
        }

        .report-table tbody tr:nth-child(even) {
          background-color: #f8fafc;
        }

        .report-table tbody tr:hover {
          background-color: #edf2f7;
        }

        /* Utilities */
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .text-left { text-align: left; }
        .font-bold { font-weight: bold; }
        .font-mono { font-weight: 600; }
        .text-muted { color: #718096; }
        .text-success { color: #228B22; font-weight: bold; }
        .text-danger { color: #e53e3e; font-weight: bold; }
        .sub-text { font-size: 8.5px; color: #718096; }
        .purpose-cell { max-width: 180px; word-break: break-word; }

        .status-badge {
          display: inline-block;
          padding: 1px 6px;
          border-radius: 10px;
          font-size: 8.5px;
          font-weight: 600;
        }

        .status-settled { background: #e6fffa; color: #234e52; }
        .status-approved { background: #ebf8ff; color: #2b6cb0; }
        .status-pending { background: #fffaf0; color: #9c4221; }
        .status-rejected { background: #fff5f5; color: #9b2c2c; }

        /* Sign-off Section */
        .signatures {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 24px;
          page-break-inside: avoid;
        }

        .sign-box {
          text-align: center;
          padding-top: 10px;
        }

        .sign-title {
          font-size: 11px;
          font-weight: bold;
          color: #2d3748;
          margin-bottom: 45px;
        }

        .sign-line {
          border-top: 1px dashed #718096;
          width: 70%;
          margin: 0 auto 4px auto;
        }

        .sign-name {
          font-size: 10px;
          color: #4a5568;
        }

        /* Print Controls */
        .no-print {
          margin-bottom: 12px;
          padding: 8px;
          background: #ebf8ff;
          border: 1px solid #bee3f8;
          border-radius: 4px;
          display: flex;
          justify-content: flex-end;
          gap: 8px;
        }

        .print-btn {
          background-color: #01532B;
          color: white;
          border: none;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: bold;
          border-radius: 4px;
          cursor: pointer;
        }

        .close-btn {
          background-color: #718096;
          color: white;
          border: none;
          padding: 6px 14px;
          font-size: 12px;
          border-radius: 4px;
          cursor: pointer;
        }

        @media print {
          .no-print {
            display: none !important;
          }
          body {
            margin: 0;
            padding: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="no-print">
        <button class="print-btn" onclick="window.print()">🖨️ ພິມລາຍງານ (Print)</button>
        <button class="close-btn" onclick="window.close()">ປິດ (Close)</button>
      </div>

      <div class="report-container">
        <!-- Header -->
        <div class="report-header">
          <div class="company-info">
            <h2>${companyName}</h2>
            ${companyAddress ? `<p>ທີ່ຢູ່: ${companyAddress}</p>` : ''}
            ${companyTel ? `<p>ເບີໂທ: ${companyTel}</p>` : ''}
          </div>
          <div class="report-title-section">
            <h1>ລາຍງານ ລາຍຈ່າຍລ່ວງໜ້າ</h1>
            <div class="subtitle">Money Advance Payment Report</div>
            <div class="meta">ພິມວັນທີ: ${printTime} | ຜູ້ພິມ: ${printedBy}</div>
          </div>
        </div>

        <!-- Filter info -->
        <div class="filter-summary">
          <div class="filter-item">
            <strong>ໄລຍະເວລາ:</strong> ${fromDateDisplay} ຫາ ${toDateDisplay}
          </div>
          <div class="filter-item">
            <strong>ກະຊວງ:</strong> ${ministryDisplay}
          </div>
          <div class="filter-item">
            <strong>ສະກຸນເງິນ:</strong> ${currencyDisplay}
          </div>
          <div class="filter-item">
            <strong>ຈຳນວນລາຍການ:</strong> ${reportData.length} ລາຍການ
          </div>
        </div>

        <!-- Summary KPIs -->
        <div class="summary-grid">
          <div class="summary-box">
            <div class="summary-label">ລວມລາຍຈ່າຍ (Total Advances)</div>
            <div class="summary-val">${totalAdv}</div>
            ${totalAdvLcy ? `<div class="summary-sub">${totalAdvLcy}</div>` : ''}
          </div>
          <div class="summary-box success">
            <div class="summary-label">ລວມການຊຳລະ (Total Settlements)</div>
            <div class="summary-val text-success">${totalSet}</div>
            ${totalSetLcy ? `<div class="summary-sub">${totalSetLcy}</div>` : ''}
          </div>
          <div class="summary-box danger">
            <div class="summary-label">ຍອດຄ້າງຊຳລະ (Outstanding)</div>
            <div class="summary-val text-danger">${totalOut}</div>
            ${totalOutLcy ? `<div class="summary-sub">${totalOutLcy}</div>` : ''}
          </div>
          <div class="summary-box info">
            <div class="summary-label">ຍອດຍົກມາ (Brought Forward)</div>
            <div class="summary-val">${totalBf}</div>
            ${totalBfLcy ? `<div class="summary-sub">${totalBfLcy}</div>` : ''}
          </div>
        </div>

        <!-- Data Table -->
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 30px;">ລ/ດ</th>
              <th style="width: 60px;">ເລກທີ</th>
              <th style="width: 70px;">ວັນທີ</th>
              <th>ເນື້ອໃນ / ຈຸດປະສົງ</th>
              <th>ກະຊວງ</th>
              <th style="width: 45px;">ສະກຸນ</th>
              <th style="width: 85px;">ຈຳນວນເງິນ</th>
              <th style="width: 65px;">ອັດຕາ</th>
              <th style="width: 95px;">ເທົ່າກັບກີບ (LAK)</th>
              <th style="width: 85px;">ຊຳລະແລ້ວ</th>
              <th style="width: 85px;">ຍອດຄ້າງ</th>
              <th style="width: 75px;">ສະຖານະ</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHTML || '<tr><td colspan="12" class="text-center">ບໍ່ມີຂໍ້ມູນ</td></tr>'}
          </tbody>
        </table>

        <!-- Signature Section -->
        <div class="signatures">
          <div class="sign-box">
            <div class="sign-title">ຜູ້ລາຍງານ (Prepared By)</div>
            <div class="sign-line"></div>
            <div class="sign-name">${printedBy}</div>
          </div>
          <div class="sign-box">
            <div class="sign-title">ຫົວໜ້າບັນຊີ (Chief Accountant)</div>
            <div class="sign-line"></div>
            <div class="sign-name">(...................................................)</div>
          </div>
          <div class="sign-box">
            <div class="sign-title">ຜູ້ອຳນວຍການ (Authorized By)</div>
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
export const printMoneyAdvancePaymentReport = (params) => {
  try {
    const htmlContent = generateMoneyAdvanceReportHTML(params)
    
    // Open new popup window with landscape dimensions
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

    // Wait for content and fonts to render, then trigger print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.focus()
        printWindow.print()
      }, 500)
    }

    // Fallback if onload doesn't fire
    setTimeout(() => {
      if (printWindow && !printWindow.closed) {
        printWindow.focus()
      }
    }, 1200)

  } catch (error) {
    console.error('Error printing Money Advance report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ (Error printing report)')
  }
}

export default {
  generateMoneyAdvanceReportHTML,
  printMoneyAdvancePaymentReport
}
