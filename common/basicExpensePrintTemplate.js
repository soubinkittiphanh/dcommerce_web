/**
 * Basic Expense Report Print Template & Helper
 * Generates an A4 Printable Document for Basic Expense Transactions
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

export const generateBasicExpenseReportHTML = ({
  transactions = [],
  filters = {},
  summary = {},
  companyData = {},
  user = {}
}) => {
  const companyName = companyData?.name || companyData?.company_name || 'ບໍລິສັດ ດີຄອມເມິຊ ຈຳກັດ'
  const companyTel = companyData?.tel || companyData?.phone || ''
  const companyAddress = companyData?.address || ''
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'

  const dateFrom = filters?.dateFrom ? formatDate(filters.dateFrom) : '-'
  const dateTo = filters?.dateTo ? formatDate(filters.dateTo) : '-'
  const dateRangeText = (filters?.dateFrom && filters?.dateTo) ? `${dateFrom} ຫາ ${dateTo}` : 'ທັງໝົດ'

  let sourceLabel = 'ທັງໝົດ (All Sources)'
  if (filters?.sourceFilter === 'BUDGET') sourceLabel = 'ຕັດຈາກງົບປະມານ (Budget Source)'
  if (filters?.sourceFilter === 'POS_SALE') sourceLabel = 'ລາຍຈ່າຍ POS ປົກກະຕິ (POS Operation)'

  let grandTotalLAK = 0
  let totalBudgetLAK = 0
  let totalPosLAK = 0

  const tableRowsHTML = transactions.map((item, index) => {
    const bookingDate = formatDate(item.bookingDate)
    const voucherNo = item.paymentNumber || '-'
    const payee = item.payee || '-'
    const notes = item.notes || '-'
    const isBudget = item.expenseSource === 'BUDGET'
    const sourceBadge = isBudget
      ? `<span class="badge badge-budget">BUDGET ${item.budget ? `(${item.budget.name})` : ''}</span>`
      : `<span class="badge badge-pos">POS OPERATION</span>`

    const amount = parseFloat(item.totalAmount?.toString().replace(/,/g, '') || 0)
    const rate = parseFloat(item.rate?.toString().replace(/,/g, '') || 1)
    const ccyCode = item.currency?.code || 'LAK'
    const amountLAK = amount * rate

    grandTotalLAK += amountLAK
    if (isBudget) {
      totalBudgetLAK += amountLAK
    } else {
      totalPosLAK += amountLAK
    }

    const drAccount = item.drAccount ? `${item.drAccount.accountName} (${item.drAccount.accountNumber || ''})` : '-'
    const crAccount = item.crAccount ? `${item.crAccount.accountName} (${item.crAccount.accountNumber || ''})` : '-'
    const paymentMethod = item.payment?.payment_name || item.payment?.payment_code || '-'

    return `
      <tr>
        <td class="text-center font-mono">${index + 1}</td>
        <td class="text-center font-mono">${bookingDate}</td>
        <td class="text-center font-mono font-bold text-primary">${voucherNo}</td>
        <td class="text-center">${sourceBadge}</td>
        <td><strong>${payee}</strong></td>
        <td class="desc-cell">${notes}</td>
        <td class="account-cell">
          <div><small class="text-muted">DR:</small> ${drAccount}</div>
          <div><small class="text-muted">CR:</small> ${crAccount}</div>
        </td>
        <td class="text-center">${paymentMethod}</td>
        <td class="text-right font-mono font-bold">${formatCurrency(amount)} <small>${ccyCode}</small></td>
        <td class="text-right font-mono font-bold text-primary">${formatCurrency(amountLAK)}</td>
      </tr>
    `
  }).join('')

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8">
      <title>ບົດລາຍງານລາຍຈ່າຍພື້ນຖານ (Basic Expense Report)</title>
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
          border-bottom: 2px solid #3b82f6;
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
          color: #1e40af;
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
        .kpi-teal { border-left: 4px solid #0d9488; }

        .text-blue { color: #2563eb; }
        .text-purple { color: #7c3aed; }
        .text-teal { color: #0f766e; }
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

        .badge-budget {
          background-color: #f3e8ff;
          color: #6b21a8;
          border: 1px solid #d8b4fe;
        }

        .badge-pos {
          background-color: #ccfbf1;
          color: #115e59;
          border: 1px solid #99f6e4;
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

        .desc-cell {
          max-width: 220px;
          word-break: break-word;
        }

        .account-cell {
          font-size: 8.5px;
          line-height: 1.25;
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
            <h1 class="report-title">ໃບລາຍງານລາຍຈ່າຍພື້ນຖານ</h1>
            <div class="report-subtitle">Basic Expense & Budget Tracking Report</div>
          </div>
        </div>

        <!-- Meta Bar -->
        <div class="meta-bar">
          <div><strong>ຊ່ວງວັນທີ:</strong> ${dateRangeText}</div>
          <div><strong>ແຫຼ່ງລາຍຈ່າຍ:</strong> ${sourceLabel}</div>
          <div><strong>ຈຳນວນລາຍການ:</strong> ${transactions.length} ລາຍການ</div>
          <div><strong>ວັນທີພິມ:</strong> ${printTime}</div>
          <div><strong>ຜູ້ພິມ:</strong> ${printedBy}</div>
        </div>

        <!-- KPI Summary Cards -->
        <div class="kpi-row">
          <div class="kpi-card kpi-blue">
            <div class="kpi-title">ລວມລາຍຈ່າຍທັງໝົດ (Grand Total Net)</div>
            <div class="kpi-val text-blue">₭ ${formatCurrency(summary.overallTotal || grandTotalLAK)}</div>
          </div>
          <div class="kpi-card kpi-purple">
            <div class="kpi-title">ຕັດຈາກງົບປະມານປະຈຳປີ (Budget Sourced)</div>
            <div class="kpi-val text-purple">₭ ${formatCurrency(summary.budgetTotal || totalBudgetLAK)}</div>
          </div>
          <div class="kpi-card kpi-teal">
            <div class="kpi-title">ລາຍຈ່າຍ POS ປົກກະຕິ (POS Operation)</div>
            <div class="kpi-val text-teal">₭ ${formatCurrency(summary.posTotal || totalPosLAK)}</div>
          </div>
        </div>

        <!-- Transactions Table -->
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 35px;">ລ/ດ</th>
              <th style="width: 75px;">ວັນທີ</th>
              <th style="width: 100px;">ເລກອ້າງອີງ</th>
              <th style="width: 110px;">ແຫຼ່ງທີ່ມາ</th>
              <th style="width: 130px;">ຜູ້ຮັບການຊຳລະ</th>
              <th>ເນື້ອໃນການຊຳລະ</th>
              <th style="width: 160px;">ບັນຊີ DR / CR</th>
              <th style="width: 85px;">ວິທີຊຳລະ</th>
              <th style="width: 105px;">ມູນຄ່າຕາມສະກຸນ</th>
              <th style="width: 110px;">ມູນຄ່າ (LAK)</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHTML || '<tr><td colspan="10" class="text-center" style="padding: 20px;">ບໍ່ມີຂໍ້ມູນລາຍການ</td></tr>'}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="8" class="text-center font-bold">ລວມຍອດທັງໝົດ (Grand Total LAK):</td>
              <td colspan="2" class="text-right font-mono font-bold text-primary" style="font-size: 11px;">
                ₭ ${formatCurrency(grandTotalLAK)}
              </td>
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
            <div class="sign-title">ຫົວໜ້າບັນຊີ / ການເງິນ</div>
            <div class="sign-line"></div>
            <div class="sign-name">(................................................)</div>
          </div>
          <div class="sign-box">
            <div class="sign-title">ຜູ້ອຳນວຍການ / ຜູ້ອະນຸມັດ</div>
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
 * Open print window and trigger print for Basic Expense Report
 */
export const printBasicExpenseReport = (params) => {
  try {
    const htmlContent = generateBasicExpenseReportHTML(params)

    const printWindow = window.open(
      '',
      '_blank',
      'width=1200,height=850,top=50,left=50,toolbar=no,menubar=no,scrollbars=yes,status=no'
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
    console.error('Error printing expense report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ (Error printing report)')
  }
}

export default {
  generateBasicExpenseReportHTML,
  printBasicExpenseReport
}
