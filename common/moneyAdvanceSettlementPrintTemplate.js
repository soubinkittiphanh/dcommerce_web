/**
 * Money Advance Settlement Report Print Template & Printer
 * Generates an A4 Landscape printable document for Money Advance Settlement reports
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

// Format 6-digit number
const formatVoucherNumber = (id) => {
  if (!id && id !== 0) return '-'
  return String(id).padStart(6, '0')
}

// Method label mapping
const formatMethod = (method) => {
  const methods = {
    cash: 'ເງິນສົດ (Cash)',
    bank_transfer: 'ໂອນເງິນ (Transfer)',
    deduction: 'ຫັກລົບ (Deduction)',
    cheque: 'ເຊັກ (Cheque)'
  }
  return methods[method] || method || '-'
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
 * Generate HTML for Money Advance Settlement Report
 */
export const generateMoneyAdvanceSettlementReportHTML = ({
  reportData = [],
  summaryData = {},
  filters = {},
  companyData = {},
  user = {},
  statusLabel = '',
  methodLabel = ''
}) => {
  const companyName = companyData?.name || companyData?.company_name || 'DCOMMERCE'
  const companyTel = companyData?.tel || companyData?.phone || ''
  const companyAddress = companyData?.address || ''
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'

  const fromDateDisplay = filters?.fromDate ? formatDate(filters.fromDate) : 'ທັງໝົດ'
  const toDateDisplay = filters?.toDate ? formatDate(filters.toDate) : 'ທັງໝົດ'
  const statusDisplay = statusLabel || (filters?.status ? getStatusText(filters.status) : 'ທັງໝົດ (All)')
  const methodDisplay = methodLabel || (filters?.method ? formatMethod(filters.method) : 'ທັງໝົດ (All)')

  let grandTotalLAK = 0

  // Generate Table Rows
  const tableRowsHTML = reportData.map((item, index) => {
    const settlementNo = formatVoucherNumber(item.id)
    const bookingDate = formatDate(item.bookingDate)
    const notes = item.notes || '-'
    const minName = item.ministry?.ministryName || '-'
    const minCode = item.ministry?.ministryCode ? ` (${item.ministry.ministryCode})` : ''
    const ccy = item.currency?.code || item.currencyCode || 'LAK'
    const amount = formatCurrency(item.amount)
    const rate = formatExchangeRate(item.exchangeRate || 1)
    
    // Calculate LCY equivalent
    let numAmount = parseFloat(item.amount || 0)
    let numRate = parseFloat(item.exchangeRate || 1)
    let lcyVal = numAmount * numRate
    grandTotalLAK += lcyVal
    const lcyEquivalent = formatCurrency(lcyVal)

    const methodText = formatMethod(item.method)
    const advanceRef = item.moneyAdvance ? `#${formatVoucherNumber(item.moneyAdvance.id || item.moneyAdvanceId)}` : 'Independent'
    const proceederName = item.proceeder?.cus_name || item.proceeder?.cus_email || item.maker?.cus_name || item.user?.cus_name || '-'

    return `
      <tr>
        <td class="text-center">${index + 1}</td>
        <td class="text-center font-mono font-bold">${settlementNo}</td>
        <td class="text-center">${bookingDate}</td>
        <td>${minName}${minCode}</td>
        <td>
          <div class="purpose-cell">${notes}</div>
        </td>
        <td class="text-center font-mono">${advanceRef}</td>
        <td class="text-center">${methodText}</td>
        <td class="text-center font-bold">${ccy}</td>
        <td class="text-right font-mono">${amount}</td>
        <td class="text-center font-mono text-muted">${rate}</td>
        <td class="text-right font-mono font-bold">${lcyEquivalent}</td>
        <td class="text-center">${proceederName}</td>
      </tr>
    `
  }).join('')

  // Summary KPI Cards
  const totalCount = summaryData.totalCount !== undefined ? summaryData.totalCount : reportData.length
  const totalAmountLAK = summaryData.totalAmount !== undefined && summaryData.totalAmount > 0 
    ? formatCurrency(summaryData.totalAmount) 
    : formatCurrency(grandTotalLAK)
  const thisMonthCount = summaryData.thisMonth || 0
  const pendingCount = summaryData.pending || 0

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8">
      <title>ລາຍງານການຊຳລະ (Settlement Report)</title>
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

        .summary-box.info {
          border-left-color: #3182ce;
        }

        .summary-box.warning {
          border-left-color: #dd6b20;
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

        .report-table tfoot td {
          background-color: #edf2f7;
          font-weight: bold;
          border-top: 2px solid #01532B;
          padding: 6px 4px;
        }

        /* Utilities */
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .text-left { text-align: left; }
        .font-bold { font-weight: bold; }
        .font-mono { font-weight: 600; font-family: monospace, sans-serif !important; }
        .text-muted { color: #718096; }
        .text-success { color: #228B22; font-weight: bold; }
        .text-danger { color: #e53e3e; font-weight: bold; }
        .purpose-cell { max-width: 180px; word-break: break-word; }

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
        <!-- Header -->
        <div class="report-header">
          <div class="company-info">
            <h2>${companyName}</h2>
            ${companyTel ? `<p>ໂທ / Tel: ${companyTel}</p>` : ''}
            ${companyAddress ? `<p>ທີ່ຢູ່ / Address: ${companyAddress}</p>` : ''}
          </div>
          <div class="report-title-section">
            <h1>ລາຍງານ ການຊຳລະ (Settlement Report)</h1>
            <div class="subtitle">ລາຍລະອຽດການຊຳລະເງິນລ່ວງໜ້າ / Money Advance Settlement Summary</div>
            <div class="meta">
              ວັນທີພິມ / Printed: ${printTime} | ໂດຍ / By: ${printedBy}
            </div>
          </div>
        </div>

        <!-- Filter Criteria -->
        <div class="filter-summary">
          <div class="filter-item">
            <span>ຊ່ວງວັນທີ (Date):</span>
            <strong>${fromDateDisplay} - ${toDateDisplay}</strong>
          </div>
          <div class="filter-item">
            <span>ສະຖານະ (Status):</span>
            <strong>${statusDisplay}</strong>
          </div>
          <div class="filter-item">
            <span>ວິທີການ (Method):</span>
            <strong>${methodDisplay}</strong>
          </div>
          <div class="filter-item">
            <span>ຈຳນວນລາຍການ (Total Items):</span>
            <strong>${reportData.length} ລາຍການ</strong>
          </div>
        </div>

        <!-- Summary KPI Cards -->
        <div class="summary-grid">
          <div class="summary-box">
            <div class="summary-label">ລວມການຊຳລະ (Total Qty)</div>
            <div class="summary-val">${totalCount}</div>
            <div class="summary-sub">ລາຍການທັງໝົດ</div>
          </div>
          <div class="summary-box success">
            <div class="summary-label">ລວມມູນຄ່າຊຳລະ (Total LAK)</div>
            <div class="summary-val text-success">₭${totalAmountLAK}</div>
            <div class="summary-sub">ມູນຄ່າລວມທັງໝົດ</div>
          </div>
          <div class="summary-box info">
            <div class="summary-label">ເດືອນນີ້ (This Month)</div>
            <div class="summary-val">${thisMonthCount}</div>
            <div class="summary-sub">ລາຍການໃນເດືອນ</div>
          </div>
          <div class="summary-box warning">
            <div class="summary-label">ລໍຖ້າ (Pending)</div>
            <div class="summary-val">${pendingCount}</div>
            <div class="summary-sub">ລາຍການຄ້າງ</div>
          </div>
        </div>

        <!-- Data Table -->
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 30px;">ລ/ດ</th>
              <th style="width: 60px;">ເລກທີ</th>
              <th style="width: 70px;">ວັນທີ</th>
              <th>ກະຊວງ / ກົມ</th>
              <th>ເນື້ອໃນ / ໝາຍເຫດ</th>
              <th style="width: 70px;">ເລກທີລາຍຈ່າຍ</th>
              <th style="width: 80px;">ວິທີການ</th>
              <th style="width: 45px;">ສະກຸນ</th>
              <th style="width: 85px;">ຈຳນວນເງິນ</th>
              <th style="width: 65px;">ອັດຕາ</th>
              <th style="width: 95px;">ເທົ່າກັບກີບ (LAK)</th>
              <th style="width: 90px;">ຜູ້ດຳເນີນການ</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHTML || '<tr><td colspan="12" class="text-center">ບໍ່ມີຂໍ້ມູນ</td></tr>'}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="10" class="text-right font-bold">ລວມຍອດທັງໝົດ (Grand Total LAK):</td>
              <td class="text-right font-mono font-bold text-success">₭${formatCurrency(grandTotalLAK)}</td>
              <td></td>
            </tr>
          </tfoot>
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
export const printMoneyAdvanceSettlementReport = (params) => {
  try {
    const htmlContent = generateMoneyAdvanceSettlementReportHTML(params)
    
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
    console.error('Error printing Settlement report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ (Error printing report)')
  }
}

/**
 * Generate HTML for Ministry Settlement Summary Report
 */
export const generateMinistrySettlementSummaryReportHTML = ({
  ministryStats = [],
  filters = {},
  companyData = {},
  user = {},
  summaryData = {}
}) => {
  const companyName = companyData?.name || companyData?.company_name || 'DCOMMERCE'
  const companyTel = companyData?.tel || companyData?.phone || ''
  const companyAddress = companyData?.address || ''
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'

  const fromDateDisplay = filters?.startDate ? formatDate(filters.startDate) : 'ທັງໝົດ'
  const toDateDisplay = filters?.endDate ? formatDate(filters.endDate) : 'ທັງໝົດ'
  const methodDisplay = filters?.method ? formatMethod(filters.method) : 'ທັງໝົດ (All)'

  let totalCountSum = 0
  let totalUsdSum = 0
  let totalLakSum = 0
  let totalThbSum = 0
  let totalCnySum = 0
  let totalEurSum = 0
  let grandTotalLakSum = 0

  const tableRowsHTML = ministryStats.map((item, index) => {
    const code = item.ministry?.ministryCode || 'N/A'
    const name = item.ministry?.ministryName || 'Unknown Ministry'
    const count = parseInt(item.count || 0)
    const usd = parseFloat(item.amounts?.USD || 0)
    const lak = parseFloat(item.amounts?.LAK || 0)
    const thb = parseFloat(item.amounts?.THB || 0)
    const cny = parseFloat(item.amounts?.CNY || 0)
    const eur = parseFloat(item.amounts?.EUR || 0)
    const totalLak = parseFloat(item.totalLak || 0)

    totalCountSum += count
    totalUsdSum += usd
    totalLakSum += lak
    totalThbSum += thb
    totalCnySum += cny
    totalEurSum += eur
    grandTotalLakSum += totalLak

    return `
      <tr>
        <td class="text-center">${index + 1}</td>
        <td class="text-center font-mono font-bold">${code}</td>
        <td>${name}</td>
        <td class="text-center font-mono">${count}</td>
        <td class="text-right font-mono">${usd > 0 ? formatCurrency(usd) : '-'}</td>
        <td class="text-right font-mono">${lak > 0 ? formatCurrency(lak) : '-'}</td>
        <td class="text-right font-mono">${thb > 0 ? formatCurrency(thb) : '-'}</td>
        <td class="text-right font-mono">${cny > 0 ? formatCurrency(cny) : '-'}</td>
        <td class="text-right font-mono">${eur > 0 ? formatCurrency(eur) : '-'}</td>
        <td class="text-right font-mono font-bold text-success">${formatCurrency(totalLak)}</td>
      </tr>
    `
  }).join('')

  const totalMinistries = ministryStats.length
  const totalSettlements = summaryData.totalSettlementsCount !== undefined ? summaryData.totalSettlementsCount : totalCountSum
  const totalAmountLAK = summaryData.totalLakAmount ? formatCurrency(summaryData.totalLakAmount) : formatCurrency(grandTotalLakSum)
  const uniqueCurrencies = summaryData.uniqueCurrencies || '-'

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8">
      <title>ລາຍງານຊຳລະຕາມກະຊວງ (Ministry Settlement Report)</title>
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

        .summary-box.info {
          border-left-color: #3182ce;
        }

        .summary-box.warning {
          border-left-color: #dd6b20;
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

        .report-table tfoot td {
          background-color: #edf2f7;
          font-weight: bold;
          border-top: 2px solid #01532B;
          padding: 6px 4px;
        }

        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .text-left { text-align: left; }
        .font-bold { font-weight: bold; }
        .font-mono { font-weight: 600; font-family: monospace, sans-serif !important; }
        .text-muted { color: #718096; }
        .text-success { color: #228B22; font-weight: bold; }

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
        <div class="report-header">
          <div class="company-info">
            <h2>${companyName}</h2>
            ${companyTel ? `<p>ໂທ / Tel: ${companyTel}</p>` : ''}
            ${companyAddress ? `<p>ທີ່ຢູ່ / Address: ${companyAddress}</p>` : ''}
          </div>
          <div class="report-title-section">
            <h1>ລາຍງານ ການຊຳລະຕາມກະຊວງ</h1>
            <div class="subtitle">Ministry Settlement Summary Report</div>
            <div class="meta">
              ວັນທີພິມ / Printed: ${printTime} | ໂດຍ / By: ${printedBy}
            </div>
          </div>
        </div>

        <div class="filter-summary">
          <div class="filter-item">
            <span>ຊ່ວງວັນທີ (Date):</span>
            <strong>${fromDateDisplay} - ${toDateDisplay}</strong>
          </div>
          <div class="filter-item">
            <span>ວິທີການ (Method):</span>
            <strong>${methodDisplay}</strong>
          </div>
          <div class="filter-item">
            <span>ຈຳນວນກະຊວງ (Total Ministries):</span>
            <strong>${totalMinistries} ກະຊວງ</strong>
          </div>
        </div>

        <div class="summary-grid">
          <div class="summary-box">
            <div class="summary-label">ທັງໝົດກະຊວງ (Total Ministries)</div>
            <div class="summary-val">${totalMinistries}</div>
            <div class="summary-sub">ກະຊວງທັງໝົດ</div>
          </div>
          <div class="summary-box success">
            <div class="summary-label">ລວມມູນຄ່າກີບ (Total LAK)</div>
            <div class="summary-val text-success">₭${totalAmountLAK}</div>
            <div class="summary-sub">ມູນຄ່າລວມທັງໝົດ</div>
          </div>
          <div class="summary-box info">
            <div class="summary-label">ຈຳນວນການຊຳລະ (Settlement Qty)</div>
            <div class="summary-val">${totalSettlements}</div>
            <div class="summary-sub">ລາຍການຊຳລະ</div>
          </div>
          <div class="summary-box warning">
            <div class="summary-label">ສະກຸນເງິນ (Currencies)</div>
            <div class="summary-val">${uniqueCurrencies}</div>
            <div class="summary-sub">ສະກຸນທີ່ໃຊ້</div>
          </div>
        </div>

        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 30px;">ລ/ດ</th>
              <th style="width: 70px;">ລະຫັດ</th>
              <th>ກະຊວງ / ກົມ</th>
              <th style="width: 60px;">ຈຳນວນ</th>
              <th style="width: 80px;">USD</th>
              <th style="width: 90px;">LAK</th>
              <th style="width: 80px;">THB</th>
              <th style="width: 80px;">CNY</th>
              <th style="width: 80px;">EUR</th>
              <th style="width: 100px;">ລວມເປັນກີບ (LAK)</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHTML || '<tr><td colspan="10" class="text-center">ບໍ່ມີຂໍ້ມູນ</td></tr>'}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right font-bold">ລວມຍອດທັງໝົດ (Grand Total):</td>
              <td class="text-center font-mono font-bold">${totalCountSum}</td>
              <td class="text-right font-mono font-bold">${totalUsdSum > 0 ? formatCurrency(totalUsdSum) : '-'}</td>
              <td class="text-right font-mono font-bold">${totalLakSum > 0 ? formatCurrency(totalLakSum) : '-'}</td>
              <td class="text-right font-mono font-bold">${totalThbSum > 0 ? formatCurrency(totalThbSum) : '-'}</td>
              <td class="text-right font-mono font-bold">${totalCnySum > 0 ? formatCurrency(totalCnySum) : '-'}</td>
              <td class="text-right font-mono font-bold">${totalEurSum > 0 ? formatCurrency(totalEurSum) : '-'}</td>
              <td class="text-right font-mono font-bold text-success">₭${formatCurrency(grandTotalLakSum)}</td>
            </tr>
          </tfoot>
        </table>

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

export const printMinistrySettlementSummaryReport = (params) => {
  try {
    const htmlContent = generateMinistrySettlementSummaryReportHTML(params)
    
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
    console.error('Error printing Ministry Settlement report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ (Error printing report)')
  }
}

export default {
  generateMoneyAdvanceSettlementReportHTML,
  printMoneyAdvanceSettlementReport,
  generateMinistrySettlementSummaryReportHTML,
  printMinistrySettlementSummaryReport
}
