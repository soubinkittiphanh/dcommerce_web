/**
 * Annual Expense Budget Report Print Template & Helper
 * Generates an A4 Printable Document for Annual Expense Budgets & Drilldown Details
 */

// Helper to format currency numbers
const formatCurrency = (val) => {
  if (val === null || val === undefined || val === '') return '0.00'
  const num = typeof val === 'number' ? val : parseFloat(val.toString().replace(/,/g, ''))
  if (isNaN(num)) return '0.00'
  return new Intl.NumberFormat('lo-LA', {
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

/**
 * Generate HTML for the Full Annual Budget List & Summary
 */
export const generateAnnualBudgetReportHTML = ({
  budgets = [],
  summary = {},
  fiscalYear = new Date().getFullYear(),
  companyData = {},
  user = {}
}) => {
  const companyName = companyData?.name || companyData?.company_name || 'ບໍລິສັດ ດີຄອມເມິຊ ຈຳກັດ'
  const companyTel = companyData?.tel || companyData?.phone || ''
  const companyAddress = companyData?.address || ''
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'

  let totalAllocatedSum = 0
  let totalSpentSum = 0
  let totalRemainingSum = 0

  const tableRowsHTML = budgets.map((item, index) => {
    const allocated = parseFloat(item.allocatedAmount || 0)
    const spent = parseFloat(item.spentAmount || 0)
    const remaining = parseFloat(item.remainingAmount !== undefined ? item.remainingAmount : (allocated - spent))
    const percent = item.percentSpent !== undefined ? item.percentSpent : (allocated > 0 ? ((spent / allocated) * 100).toFixed(1) : 0)
    const ccyCode = item.currency?.code || 'LAK'

    totalAllocatedSum += allocated
    totalSpentSum += spent
    totalRemainingSum += remaining

    const isOver = remaining < 0
    const isWarn = percent >= (item.thresholdWarningPercent || 80) && !isOver

    let statusBadge = `<span class="badge badge-success">ປົກກະຕິ (${percent}%)</span>`
    if (isOver) {
      statusBadge = `<span class="badge badge-danger">ເກີນງົບ (${percent}%)</span>`
    } else if (isWarn) {
      statusBadge = `<span class="badge badge-warning">ໃກ້ເຕັມ (${percent}%)</span>`
    }

    const deptInfo = item.ministry ? item.ministry.name || item.ministry.ministryName : '-'
    const accountInfo = item.expenseAccount ? `${item.expenseAccount.accountName} (${item.expenseAccount.accountNumber || ''})` : 'ທຸກບັນຊີລາຍຈ່າຍ'

    return `
      <tr>
        <td class="text-center font-mono">${index + 1}</td>
        <td>
          <strong class="text-primary">${item.name}</strong>
          ${item.remark ? `<div class="sub-remark text-muted">${item.remark}</div>` : ''}
        </td>
        <td class="text-center font-mono font-bold">${item.year}</td>
        <td>${deptInfo}</td>
        <td class="account-cell">${accountInfo}</td>
        <td class="text-right font-mono font-bold">${formatCurrency(allocated)} <small>${ccyCode}</small></td>
        <td class="text-right font-mono font-bold text-purple">${formatCurrency(spent)} <small>${ccyCode}</small></td>
        <td class="text-right font-mono font-bold ${isOver ? 'text-danger' : 'text-success'}">${formatCurrency(remaining)} <small>${ccyCode}</small></td>
        <td class="text-center">${statusBadge}</td>
      </tr>
    `
  }).join('')

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8">
      <title>ບົດລາຍງານຕິດຕາມງົບປະມານປະຈຳປີ ${fiscalYear}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');

        @page {
          size: A4 landscape;
          margin: 10mm 10mm;
        }

        * {
          box-sizing: border-box;
          font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', 'Phetsarath OT', 'Saysettha OT', sans-serif !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        body {
          font-size: 10px;
          color: #1e293b;
          margin: 0;
          padding: 0;
          background-color: #fff;
          line-height: 1.35;
        }

        .report-container {
          width: 100%;
          margin: 0 auto;
        }

        .header-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid #8b5cf6;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .company-title {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
        }

        .company-sub {
          font-size: 9.5px;
          color: #64748b;
        }

        .report-title-box {
          text-align: right;
        }

        .report-title {
          font-size: 16px;
          font-weight: 700;
          color: #6b21a8;
          margin: 0;
        }

        .report-subtitle {
          font-size: 10px;
          color: #475569;
        }

        .meta-bar {
          display: flex;
          justify-content: space-between;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 6px 12px;
          margin-bottom: 12px;
          font-size: 10px;
        }

        .kpi-row {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }

        .kpi-card {
          flex: 1;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 8px 12px;
        }

        .kpi-title {
          font-size: 9px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
        }

        .kpi-val {
          font-size: 14px;
          font-weight: 700;
          margin-top: 2px;
        }

        .kpi-blue { border-left: 4px solid #3b82f6; }
        .kpi-purple { border-left: 4px solid #8b5cf6; }
        .kpi-green { border-left: 4px solid #10b981; }
        .kpi-teal { border-left: 4px solid #0d9488; }

        .text-blue { color: #2563eb; }
        .text-purple { color: #7c3aed; }
        .text-green { color: #059669; }
        .text-teal { color: #0f766e; }
        .text-danger { color: #dc2626; }
        .text-success { color: #16a34a; }
        .text-primary { color: #1e40af; }
        .text-muted { color: #64748b; }
        .font-mono { font-family: 'Courier New', Courier, monospace !important; }
        .font-bold { font-weight: 700; }
        .text-center { text-align: center; }
        .text-right { text-align: right; }

        .badge {
          display: inline-block;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 8.5px;
          font-weight: 600;
        }

        .badge-success {
          background-color: #dcfce7;
          color: #166534;
          border: 1px solid #86efac;
        }

        .badge-warning {
          background-color: #fef3c7;
          color: #92400e;
          border: 1px solid #fcd34d;
        }

        .badge-danger {
          background-color: #fee2e2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }

        table.report-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 15px;
        }

        table.report-table th {
          background-color: #f1f5f9;
          color: #334155;
          font-weight: 700;
          font-size: 9.5px;
          padding: 6px 8px;
          border: 1px solid #cbd5e1;
          text-align: center;
        }

        table.report-table td {
          padding: 5px 8px;
          border: 1px solid #e2e8f0;
          font-size: 9.5px;
          vertical-align: middle;
        }

        table.report-table tbody tr:nth-child(even) {
          background-color: #f8fafc;
        }

        table.report-table tfoot td {
          background-color: #f1f5f9;
          font-weight: 700;
          border: 1px solid #cbd5e1;
          padding: 6px 8px;
        }

        .sub-remark {
          font-size: 8.5px;
          margin-top: 2px;
        }

        .account-cell {
          font-size: 8.5px;
        }

        .signatures {
          display: flex;
          justify-content: space-between;
          margin-top: 24px;
          page-break-inside: avoid;
        }

        .sign-box {
          width: 28%;
          text-align: center;
        }

        .sign-title {
          font-weight: 700;
          font-size: 10.5px;
          color: #1e293b;
          margin-bottom: 45px;
        }

        .sign-line {
          border-bottom: 1px dashed #94a3b8;
          width: 80%;
          margin: 0 auto 6px auto;
        }

        .sign-name {
          font-size: 10px;
          color: #475569;
        }

        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      </style>
    </head>
    <body>
      <div class="report-container">
        <!-- Header -->
        <div class="header-section">
          <div>
            <div class="company-title">${companyName}</div>
            <div class="company-sub">${companyAddress ? `ທີ່ຢູ່: ${companyAddress} | ` : ''}${companyTel ? `ໂທ: ${companyTel}` : ''}</div>
          </div>
          <div class="report-title-box">
            <h1 class="report-title">ໃບລາຍງານຕິດຕາມງົບປະມານປະຈຳປີ</h1>
            <div class="report-subtitle">Annual Expense Budget Performance Report (ສົກປີ: ${fiscalYear})</div>
          </div>
        </div>

        <!-- Meta Bar -->
        <div class="meta-bar">
          <div><strong>ສົກປີ (Fiscal Year):</strong> ${fiscalYear}</div>
          <div><strong>ຈຳນວນແຜນງົບ:</strong> ${budgets.length} ແຜນ</div>
          <div><strong>ອັດຕາການໃຊ້າງົບລວມ:</strong> ${summary.overallUtilization || 0}%</div>
          <div><strong>ວັນທີພິມ:</strong> ${printTime}</div>
          <div><strong>ຜູ້ພິມ:</strong> ${printedBy}</div>
        </div>

        <!-- KPI Summary Cards -->
        <div class="kpi-row">
          <div class="kpi-card kpi-blue">
            <div class="kpi-title">ງົບທີ່ອະນຸມັດລວມ (Allocated)</div>
            <div class="kpi-val text-blue">₭ ${formatCurrency(summary.totalAllocated || totalAllocatedSum)}</div>
          </div>
          <div class="kpi-card kpi-purple">
            <div class="kpi-title">ຕັດຈ່າຍງົບແລ້ວ (Budget Spent)</div>
            <div class="kpi-val text-purple">₭ ${formatCurrency(summary.totalBudgetSpent || totalSpentSum)} (${summary.overallUtilization || 0}%)</div>
          </div>
          <div class="kpi-card kpi-green">
            <div class="kpi-title">ງົບປະມານຄົງເຫຼືອ (Remaining)</div>
            <div class="kpi-val text-green">₭ ${formatCurrency(summary.totalRemaining || totalRemainingSum)}</div>
          </div>
          <div class="kpi-card kpi-teal">
            <div class="kpi-title">ລາຍຈ່າຍ POS ທຽບຄຽງ (POS OpEx)</div>
            <div class="kpi-val text-teal">₭ ${formatCurrency(summary.posExpensesTotal || 0)} (${summary.posPaymentCount || 0} ລາຍການ)</div>
          </div>
        </div>

        <!-- Budgets Table -->
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 35px;">ລ/ດ</th>
              <th>ຊື່ແຜນງົບປະມານ (Budget Name)</th>
              <th style="width: 50px;">ປີ</th>
              <th style="width: 140px;">ພະແນກ / ໂຄງການ</th>
              <th style="width: 160px;">ຜູກກັບບັນຊີລາຍຈ່າຍ</th>
              <th style="width: 120px;">ງົບທີ່ອະນຸມັດ</th>
              <th style="width: 120px;">ໃຊ້ໄປແລ້ວ</th>
              <th style="width: 120px;">ງົບເຫຼືອຕົວຈິງ</th>
              <th style="width: 100px;">ສະຖານະ & ອັດຕາໃຊ້</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHTML || '<tr><td colspan="9" class="text-center" style="padding: 20px;">ບໍ່ມີຂໍ້ມູນງົບປະມານ</td></tr>'}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" class="text-center font-bold">ລວມຍອດທັງໝົດ (Grand Total):</td>
              <td class="text-right font-mono font-bold text-blue">₭ ${formatCurrency(summary.totalAllocated || totalAllocatedSum)}</td>
              <td class="text-right font-mono font-bold text-purple">₭ ${formatCurrency(summary.totalBudgetSpent || totalSpentSum)}</td>
              <td class="text-right font-mono font-bold text-green">₭ ${formatCurrency(summary.totalRemaining || totalRemainingSum)}</td>
              <td class="text-center font-bold font-mono">${summary.overallUtilization || 0}%</td>
            </tr>
          </tfoot>
        </table>

        <!-- Signatures -->
        <div class="signatures">
          <div class="sign-box">
            <div class="sign-title">ຜູ້ສັງລວມ / ຜູ້ລາຍງານ</div>
            <div class="sign-line"></div>
            <div class="sign-name">${printedBy}</div>
          </div>
          <div class="sign-box">
            <div class="sign-title">ຫົວໜ້າພະແນກແຜນການ / ການເງິນ</div>
            <div class="sign-line"></div>
            <div class="sign-name">(................................................)</div>
          </div>
          <div class="sign-box">
            <div class="sign-title">ຜູ້ອຳນວຍການ / ຄະນະບໍລິຫານ</div>
            <div class="sign-line"></div>
            <div class="sign-name">(................................................)</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

/**
 * Generate HTML for a Single Budget Drilldown Statement
 */
export const generateSingleBudgetDrilldownHTML = ({
  budget = {},
  companyData = {},
  user = {}
}) => {
  const companyName = companyData?.name || companyData?.company_name || 'ບໍລິສັດ ດີຄອມເມິຊ ຈຳກັດ'
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'

  const payments = budget.payments || []
  const ccy = budget.currency?.code || 'LAK'

  const paymentRowsHTML = payments.map((p, idx) => {
    const bookingDate = formatDate(p.bookingDate)
    const amount = parseFloat(p.totalAmount || 0)
    return `
      <tr>
        <td class="text-center font-mono">${idx + 1}</td>
        <td class="text-center font-mono">${bookingDate}</td>
        <td class="text-center font-mono font-bold text-primary">${p.paymentNumber || '-'}</td>
        <td><strong>${p.payee || '-'}</strong></td>
        <td>${p.notes || '-'}</td>
        <td class="text-right font-mono font-bold">₭ ${formatCurrency(amount)}</td>
      </tr>
    `
  }).join('')

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8">
      <title>ໃບລາຍລະອຽດການຕັດຈ່າຍງົບປະມານ - ${budget.name}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');
        @page { size: A4 portrait; margin: 12mm; }
        * { box-sizing: border-box; font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', 'Phetsarath OT', 'Saysettha OT', sans-serif !important; }
        body { font-size: 10.5px; color: #1e293b; margin: 0; }
        .header-section { border-bottom: 2px solid #8b5cf6; padding-bottom: 8px; margin-bottom: 12px; display: flex; justify-content: space-between; }
        .title { font-size: 16px; font-weight: 700; color: #6b21a8; }
        .kpi-row { display: flex; gap: 10px; margin-bottom: 12px; }
        .kpi-card { flex: 1; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 10px; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #cbd5e1; padding: 6px 8px; font-size: 10px; }
        th { background-color: #f1f5f9; text-align: center; }
        .text-right { text-align: right; }
        .text-center { text-align: center; }
        .font-mono { font-family: 'Courier New', Courier, monospace !important; }
        .font-bold { font-weight: 700; }
        .signatures { display: flex; justify-content: space-between; margin-top: 35px; }
        .sign-box { width: 45%; text-align: center; }
        .sign-title { font-weight: 700; margin-bottom: 40px; }
        .sign-line { border-bottom: 1px dashed #94a3b8; width: 80%; margin: 0 auto 6px auto; }
      </style>
    </head>
    <body>
      <div class="header-section">
        <div>
          <div style="font-size: 14px; font-weight: 700;">${companyName}</div>
          <div style="font-size: 10px; color: #64748b;">ໃບສະຫຼຸບການຕັດຈ່າຍງົບປະມານຍ່ອຍ</div>
        </div>
        <div style="text-align: right;">
          <div class="title">${budget.name} (${budget.year})</div>
          <div style="font-size: 9.5px; color: #64748b;">ພິມເມື່ອ: ${printTime}</div>
        </div>
      </div>

      <div class="kpi-row">
        <div class="kpi-card" style="border-left: 4px solid #3b82f6;">
          <div style="font-size: 9px; color: #64748b;">ງົບອະນຸມັດ:</div>
          <div style="font-size: 13px; font-weight: 700; color: #2563eb;">${formatCurrency(budget.allocatedAmount)} ${ccy}</div>
        </div>
        <div class="kpi-card" style="border-left: 4px solid #8b5cf6;">
          <div style="font-size: 9px; color: #64748b;">ໃຊ້ໄປແລ້ວ:</div>
          <div style="font-size: 13px; font-weight: 700; color: #7c3aed;">${formatCurrency(budget.spentAmount)} ${ccy} (${budget.percentSpent || 0}%)</div>
        </div>
        <div class="kpi-card" style="border-left: 4px solid #10b981;">
          <div style="font-size: 9px; color: #64748b;">ງົບເຫຼືອຕົວຈິງ:</div>
          <div style="font-size: 13px; font-weight: 700; color: ${budget.remainingAmount < 0 ? '#dc2626' : '#059669'};">
            ${formatCurrency(budget.remainingAmount)} ${ccy}
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th style="width: 35px;">ລ/ດ</th>
            <th style="width: 80px;">ວັນທີ</th>
            <th style="width: 110px;">ເລກເອກະສານ</th>
            <th style="width: 150px;">ຜູ້ຮັບ</th>
            <th>ເນື້ອໃນລາຍການ</th>
            <th style="width: 120px;">ຈຳນວນເງິນ</th>
          </tr>
        </thead>
        <tbody>
          ${paymentRowsHTML || '<tr><td colspan="6" class="text-center" style="padding: 15px;">ບໍ່ມີລາຍການຕັດຈ່າຍ</td></tr>'}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="text-center font-bold">ລວມຍອດຕັດຈ່າຍທັງໝົດ:</td>
            <td class="text-right font-mono font-bold" style="color: #7c3aed;">${formatCurrency(budget.spentAmount)} ${ccy}</td>
          </tr>
        </tfoot>
      </table>

      <div class="signatures">
        <div class="sign-box">
          <div class="sign-title">ຜູ້ສັງລວມ</div>
          <div class="sign-line"></div>
          <div>${printedBy}</div>
        </div>
        <div class="sign-box">
          <div class="sign-title">ຫົວໜ້າພະແນກ / ຜູ້ອະນຸມັດ</div>
          <div class="sign-line"></div>
          <div>(................................................)</div>
        </div>
      </div>
    </body>
    </html>
  `
}

/**
 * Open print window for Annual Budget Report
 */
export const printAnnualBudgetReport = (params) => {
  try {
    const htmlContent = generateAnnualBudgetReportHTML(params)
    const printWindow = window.open('', '_blank', 'width=1200,height=850,top=50,left=50,toolbar=no,menubar=no,scrollbars=yes,status=no')
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
      if (printWindow && !printWindow.closed) printWindow.focus()
    }, 1200)
  } catch (error) {
    console.error('Error printing budget report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ (Error printing report)')
  }
}

/**
 * Open print window for Single Budget Drilldown Report
 */
export const printSingleBudgetDrilldownReport = (params) => {
  try {
    const htmlContent = generateSingleBudgetDrilldownHTML(params)
    const printWindow = window.open('', '_blank', 'width=1000,height=800,top=50,left=50,toolbar=no,menubar=no,scrollbars=yes,status=no')
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
      if (printWindow && !printWindow.closed) printWindow.focus()
    }, 1200)
  } catch (error) {
    console.error('Error printing single budget report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ (Error printing report)')
  }
}

export default {
  generateAnnualBudgetReportHTML,
  generateSingleBudgetDrilldownHTML,
  printAnnualBudgetReport,
  printSingleBudgetDrilldownReport
}
