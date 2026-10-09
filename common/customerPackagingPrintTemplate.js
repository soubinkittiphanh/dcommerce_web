/**
 * Customer Packaging Debt Statement Print Template
 * Generates an official A4 Printable Document for Wholesale Returnable Packaging (Crates & Bottles)
 */

// Helper to format numbers with commas
const formatNumber = (val) => {
  if (val === null || val === undefined || val === '') return '0'
  const num = typeof val === 'number' ? val : parseFloat(val)
  if (isNaN(num)) return '0'
  return new Intl.NumberFormat('en-US').format(num)
}

// Helper to format currency
const formatCurrency = (val) => {
  if (val === null || val === undefined || val === '') return '0'
  const num = typeof val === 'number' ? val : parseFloat(val)
  if (isNaN(num)) return '0'
  return new Intl.NumberFormat('en-US').format(num) + ' LAK'
}

// Format date string
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

// Map transaction types to Lao text
const getTransactionLabel = (type) => {
  switch (type) {
    case 'DELIVERED_OUT': return 'ສົ່ງອອກ (ຕິດໜີ້)'
    case 'RETURNED_IN': return 'ຮັບຄືນ (ຕັດໜີ້)'
    case 'PAID_DEPOSIT': return 'ຈ່າຍມັດຈຳ'
    case 'REFUNDED_DEPOSIT': return 'ຄືນມັດຈຳ'
    case 'WRITE_OFF': return 'ຕັດສູນ'
    default: return type || '-'
  }
}

/**
 * Generate Printable HTML for Customer Packaging Debt Statement
 */
export const generateCustomerPackagingStatementHTML = ({
  isAllClients = false,
  selectedClient = null,
  currentBalances = [],
  allClientsBalances = [],
  ledgerItems = [],
  startDate = '',
  endDate = '',
  companyData = {},
  user = {},
  totalCratesOwed = 0,
  totalBottlesOwed = 0,
  debtorClientsCount = 0
}) => {
  const companyName = companyData?.name || 'ຕົວແທນຈຳໜ່າຍ ເບຍລາວ / Beerlao Agency'
  const companyAddress = companyData?.address || ''
  const companyTel = companyData?.tel || companyData?.telephone || ''
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'

  const title = isAllClients
    ? 'ລາຍງານສະຫຼຸບໜີ້ສິນບັນຈຸພັນລູກຄ້າທັງໝົດ (All Customers Packaging Debt Summary)'
    : `ໃບສະຫຼຸບໜີ້ສິນບັນຈຸພັນລູກຄ້າ (Customer Packaging Debt Statement)`

  // 1. Build Single Client Balance Badges or All Clients Summary Table
  let summarySectionHTML = ''
  if (!isAllClients) {
    const clientName = selectedClient?.name || (selectedClient?.displayName ? selectedClient.displayName.split(' - ')[0] : 'ລູກຄ້າ')
    const clientCompany = selectedClient?.company || ''
    const clientPhone = selectedClient?.telephone || selectedClient?.phone || '-'

    const balanceChipsHTML = currentBalances.map(bal => `
      <div class="balance-card ${bal.balanceOwed > 0 ? 'debt-card' : 'settled-card'}">
        <div class="bal-label">${bal.packagingName || 'ບັນຈຸພັນ'}</div>
        <div class="bal-value">${formatNumber(bal.balanceOwed)} <span class="unit">ໜ່ວຍ</span></div>
        <div class="bal-status">${bal.balanceOwed > 0 ? '⚠️ ຄ້າງສົ່ງ (Owed)' : '✅ ຊຳລະຄົບ (Settled)'}</div>
      </div>
    `).join('')

    summarySectionHTML = `
      <div class="client-info-box">
        <div class="client-meta">
          <div class="info-row">
            <span class="label">ຊື່ລູກຄ້າ / ຮ້ານຄ້າ:</span>
            <span class="value font-bold">${clientName} ${clientCompany ? `(${clientCompany})` : ''}</span>
          </div>
          <div class="info-row">
            <span class="label">ເບີໂທລະສັບ:</span>
            <span class="value">${clientPhone}</span>
          </div>
          <div class="info-row">
            <span class="label">ໄລຍະເວລາລາຍງານ:</span>
            <span class="value">${formatDate(startDate)} ຫາ ${formatDate(endDate)}</span>
          </div>
        </div>
        <div class="balance-cards-grid">
          ${balanceChipsHTML || '<div class="no-debt-note">✅ ບໍ່ມີຍອດໜີ້ຄ້າງສົ່ງບັນຈຸພັນ</div>'}
        </div>
      </div>
    `
  } else {
    // All clients summary table
    const clientRowsHTML = allClientsBalances.map((item, idx) => `
      <tr>
        <td class="text-center">${idx + 1}</td>
        <td class="font-bold">${item.clientName || '-'} ${item.clientCompany ? `(${item.clientCompany})` : ''}</td>
        <td>${item.clientPhone || '-'}</td>
        <td>${item.packagingName || '-'}</td>
        <td class="text-right font-mono font-bold ${item.balanceOwed > 0 ? 'text-danger' : 'text-success'}">
          ${formatNumber(item.balanceOwed)}
        </td>
      </tr>
    `).join('')

    summarySectionHTML = `
      <div class="kpi-grid">
        <div class="kpi-card kpi-amber">
          <div class="kpi-title">ຍອດໜີ້ລັງເປົ່າຄ້າງສົ່ງທັງໝົດ</div>
          <div class="kpi-num">${formatNumber(totalCratesOwed)} <span class="unit">ລັງ</span></div>
          <div class="kpi-sub">Total Empty Crates Owed</div>
        </div>
        <div class="kpi-card kpi-teal">
          <div class="kpi-title">ຍອດໜີ້ແກ້ວເປົ່າຄ້າງສົ່ງທັງໝົດ</div>
          <div class="kpi-num">${formatNumber(totalBottlesOwed)} <span class="unit">ແກ້ວ</span></div>
          <div class="kpi-sub">Total Empty Bottles Owed</div>
        </div>
        <div class="kpi-card kpi-blue">
          <div class="kpi-title">ຈຳນວນລູກຄ້າທີ່ຕິດໜີ້</div>
          <div class="kpi-num">${formatNumber(debtorClientsCount)} <span class="unit">ຮ້ານ</span></div>
          <div class="kpi-sub">Active Debtor Clients</div>
        </div>
      </div>

      <div class="section-heading">ສະຫຼຸບຍອດໜີ້ຄ້າງແຕ່ລະຮ້ານຄ້າ (Client Balance Summary)</div>
      <table class="report-table mb-4">
        <thead>
          <tr>
            <th style="width: 40px;">ລ/ດ</th>
            <th>ຊື່ລູກຄ້າ / ຮ້ານ</th>
            <th style="width: 120px;">ເບີໂທ</th>
            <th style="width: 160px;">ບັນຈຸພັນ</th>
            <th style="width: 140px;" class="text-right">ຍອດໜີ້ຄ້າງ (ໜ່ວຍ)</th>
          </tr>
        </thead>
        <tbody>
          ${clientRowsHTML || '<tr><td colspan="5" class="text-center py-2">ບໍ່ມີຂໍ້ມູນໜີ້ຄ້າງ</td></tr>'}
        </tbody>
      </table>
    `
  }

  // 2. Build Transaction Ledger Table Rows
  let totalDeliveredOut = 0
  let totalReturnedIn = 0
  let totalDepositLak = 0

  const ledgerRowsHTML = ledgerItems.map((item, idx) => {
    const isOut = item.transactionType === 'DELIVERED_OUT' || item.qtyChange > 0
    const isIn = item.transactionType === 'RETURNED_IN' || item.qtyChange < 0
    const absQty = Math.abs(item.qtyChange || 0)

    if (isOut) totalDeliveredOut += absQty
    if (isIn) totalReturnedIn += absQty
    totalDepositLak += Number(item.depositAmount || 0)

    const typeColor = isOut ? 'text-amber' : (isIn ? 'text-teal' : 'text-grey')
    const qtyText = item.qtyChange > 0 ? `+${item.qtyChange}` : `${item.qtyChange}`

    return `
      <tr>
        <td class="text-center font-mono">${idx + 1}</td>
        <td>${formatDateTime(item.createdAt)}</td>
        ${isAllClients ? `<td>${item.client?.name || '-'}</td>` : ''}
        <td><span class="badge ${typeColor}">${getTransactionLabel(item.transactionType)}</span></td>
        <td>${item.packagingProduct?.pro_name || '-'}</td>
        <td class="text-center font-mono font-bold ${isOut ? 'text-danger' : 'text-success'}">${qtyText}</td>
        <td class="text-right font-mono font-bold">${formatNumber(item.balanceAfter)}</td>
        <td class="text-right font-mono">${item.depositAmount > 0 ? formatNumber(item.depositAmount) : '-'}</td>
        <td class="text-small grey-text">${item.notes || '-'}</td>
      </tr>
    `
  }).join('')

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;600;700;800;900&display=swap');

        @page {
          size: A4 portrait;
          margin: 10mm 12mm;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', 'Phetsarath OT', sans-serif !important;
        }
        body {
          font-size: 11.5px;
          color: #1e293b;
          background: #fff;
          line-height: 1.5;
          padding: 10px;
          font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', 'Phetsarath OT', sans-serif !important;
          -webkit-font-smoothing: antialiased;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid #0f766e;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }
        .company-name {
          font-size: 16px;
          font-weight: 800;
          color: #0f766e;
        }
        .company-sub {
          font-size: 10px;
          color: #64748b;
        }
        .report-title {
          text-align: right;
        }
        .report-title h2 {
          font-size: 14px;
          font-weight: 800;
          color: #0f172a;
        }
        .report-title .date-range {
          font-size: 10px;
          color: #64748b;
        }
        
        /* Single Client Info */
        .client-info-box {
          display: flex;
          justify-content: space-between;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 10px 14px;
          margin-bottom: 12px;
        }
        .client-meta .info-row {
          margin-bottom: 3px;
        }
        .client-meta .label {
          color: #64748b;
          width: 120px;
          display: inline-block;
          font-size: 11px;
        }
        .client-meta .value {
          color: #0f172a;
          font-size: 11.5px;
        }
        .balance-cards-grid {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .balance-card {
          border: 1.5px solid #cbd5e1;
          border-radius: 6px;
          padding: 6px 12px;
          text-align: center;
          min-width: 120px;
        }
        .debt-card {
          background: #fffbeb;
          border-color: #f59e0b;
        }
        .settled-card {
          background: #f0fdf4;
          border-color: #10b981;
        }
        .bal-label {
          font-size: 9.5px;
          font-weight: bold;
          color: #475569;
        }
        .bal-value {
          font-size: 16px;
          font-weight: 900;
          color: #b45309;
        }
        .settled-card .bal-value {
          color: #047857;
        }
        .bal-status {
          font-size: 9px;
          font-weight: bold;
        }

        /* KPI Grid (All clients view) */
        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 12px;
        }
        .kpi-card {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 8px 12px;
          background: #f8fafc;
        }
        .kpi-amber { background: #fffbeb; border-color: #fde68a; }
        .kpi-teal { background: #f0fdfa; border-color: #99f6e4; }
        .kpi-blue { background: #eff6ff; border-color: #bfdbfe; }
        .kpi-title { font-size: 10px; font-weight: bold; color: #475569; }
        .kpi-num { font-size: 18px; font-weight: 900; color: #0f172a; margin: 2px 0; }
        .kpi-sub { font-size: 8.5px; color: #64748b; }

        .section-heading {
          font-size: 12px;
          font-weight: 800;
          color: #0f766e;
          margin-bottom: 6px;
          border-left: 3px solid #0f766e;
          padding-left: 6px;
        }

        /* Table */
        .report-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 12px;
          font-size: 10.5px;
        }
        .report-table th, .report-table td {
          border: 1px solid #cbd5e1;
          padding: 5px 7px;
        }
        .report-table th {
          background-color: #f1f5f9;
          color: #334155;
          font-weight: 700;
          text-align: left;
        }
        .report-table tfoot td {
          background-color: #f8fafc;
          font-weight: 800;
        }
        
        /* Helpers */
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .font-mono { font-family: 'Consolas', 'Courier New', monospace; }
        .font-bold { font-weight: 700; }
        .text-danger { color: #dc2626; }
        .text-success { color: #059669; }
        .text-amber { color: #d97706; }
        .text-teal { color: #0f766e; }
        .text-small { font-size: 9px; }
        .grey-text { color: #64748b; }
        .badge {
          display: inline-block;
          padding: 1px 5px;
          border-radius: 4px;
          font-size: 9px;
          font-weight: bold;
        }

        /* Signatures */
        .signatures {
          margin-top: 25px;
          display: flex;
          justify-content: space-between;
          page-break-inside: avoid;
        }
        .sign-box {
          width: 30%;
          text-align: center;
        }
        .sign-date {
          font-size: 10px;
          color: #64748b;
          margin-bottom: 4px;
        }
        .sign-title {
          font-size: 11px;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 45px;
        }
        .sign-line {
          border-bottom: 1px dashed #94a3b8;
          width: 80%;
          margin: 0 auto 6px auto;
        }
        .sign-name {
          font-size: 10.5px;
          color: #475569;
        }

        .footer-note {
          margin-top: 15px;
          font-size: 9px;
          color: #94a3b8;
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #e2e8f0;
          padding-top: 5px;
        }

        @media print {
          body { padding: 0; }
          .no-print { display: none !important; }
        }
      </style>
    </head>
    <body>
      <!-- Header -->
      <div class="header">
        <div>
          <div class="company-name">${companyName}</div>
          <div class="company-sub">${companyAddress ? companyAddress + ' | ' : ''}ໂທ: ${companyTel || 'N/A'}</div>
        </div>
        <div class="report-title">
          <h2>${title}</h2>
          <div class="date-range">ວັນທີລາຍງານ: ${formatDate(startDate)} - ${formatDate(endDate)}</div>
        </div>
      </div>

      <!-- Summary / Client Info -->
      ${summarySectionHTML}

      <!-- Detailed Transaction Ledger -->
      <div class="section-heading">ປະຫວັດການເຄື່ອນໄຫວສົ່ງອອກ ແລະ ຮັບຄືນ (Packaging Movement History)</div>
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 30px;">ລ/ດ</th>
            <th style="width: 105px;">ວັນທີ/ເວລາ</th>
            ${isAllClients ? '<th style="width: 120px;">ລູກຄ້າ</th>' : ''}
            <th style="width: 95px;">ປະເພດ</th>
            <th>ບັນຈຸພັນ (Crate / Bottle)</th>
            <th style="width: 75px;" class="text-center">ຈຳນວນ</th>
            <th style="width: 85px;" class="text-right">ຍອດໜີ້ສະສົມ</th>
            <th style="width: 85px;" class="text-right">ມັດຈຳ (LAK)</th>
            <th style="width: 120px;">ໝາຍເຫດ</th>
          </tr>
        </thead>
        <tbody>
          ${ledgerRowsHTML || '<tr><td colspan="' + (isAllClients ? 9 : 8) + '" class="text-center py-3">ບໍ່ມີປະຫວັດທຸລະກຳໃນໄລຍະເວລານີ້</td></tr>'}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="${isAllClients ? 4 : 3}" class="text-center font-bold">ລວມຍອດທັງໝົດ (Grand Total):</td>
            <td class="font-bold">ສົ່ງອອກ: +${formatNumber(totalDeliveredOut)} | ຮັບຄືນ: -${formatNumber(totalReturnedIn)}</td>
            <td class="text-center font-mono font-bold"></td>
            <td class="text-right font-mono font-bold"></td>
            <td class="text-right font-mono font-bold">${formatNumber(totalDepositLak)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>

      <!-- Signatures -->
      <div class="signatures">
        <div class="sign-box">
          <div class="sign-date">ວັນທີ: ......./......./...........</div>
          <div class="sign-title">ຜູ້ສັງລວມ / ບັນຊີ (Prepared By)</div>
          <div class="sign-line"></div>
          <div class="sign-name">${printedBy}</div>
        </div>
        <div class="sign-box">
          <div class="sign-date">ວັນທີ: ......./......./...........</div>
          <div class="sign-title">ຫົວໜ້າສາງ / ຝ່າຍຂາຍ (Manager)</div>
          <div class="sign-line"></div>
          <div class="sign-name">(...................................................)</div>
        </div>
        <div class="sign-box">
          <div class="sign-date">ວັນທີ: ......./......./...........</div>
          <div class="sign-title">${isAllClients ? 'ຜູ້ອຳນວຍການ (Director)' : 'ລູກຄ້າ / ຜູ້ຮັບໃບລາຍງານ (Client)'}</div>
          <div class="sign-line"></div>
          <div class="sign-name">(...................................................)</div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer-note">
        <span>ພິມເມື່ອ: ${printTime} ໂດຍ: ${printedBy}</span>
        <span>ລະບົບຄຸ້ມຄອງສາງ ແລະ ບັນຈຸພັນ Dcommerce</span>
      </div>
    </body>
    </html>
  `
}

/**
 * Open print window and initiate official statement printing
 */
export const printCustomerPackagingStatement = (params) => {
  try {
    const htmlContent = generateCustomerPackagingStatementHTML(params)

    const printWindow = window.open(
      '',
      '_blank',
      'width=1050,height=800,top=50,left=50,toolbar=no,menubar=no,scrollbars=yes,status=no'
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
      }, 400)
    }

    setTimeout(() => {
      if (printWindow && !printWindow.closed) {
        printWindow.focus()
      }
    }, 1000)
  } catch (error) {
    console.error('Error printing packaging statement:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມ: ' + error.message)
  }
}
