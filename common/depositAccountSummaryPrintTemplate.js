/**
 * Deposit Account Summary Report Print Template & Printer
 * Generates an A4 Landscape Lao Government Style printable document
 * with Breakdown by Bank and Currency, including Section Subtotals
 * 7 Columns:
 * 1. Index (ລ/ດ)
 * 2. Account Number (ເລກບັນຊີ)
 * 3. Account Name (ຊື່ບັນຊີ / ທະນາຄານ)
 * 4. BF (ຍອດຍົກມາ / Brought Forward)
 * 5. Movement (Credit & Debit)
 * 6. Closing Balance (ຍອດຍົກໄປ / ຍອດຄົງເຫຼືອທ້າຍງວດ)
 * 7. Note (ໝາຍເຫດ)
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

/**
 * Generate Lao Government Style HTML for Deposit Account Summary Report
 * with Breakdown by Bank and Currency + Section Subtotals
 */
export const generateDepositAccountSummaryReportHTML = ({
  reportData = [],
  grandTotal = {},
  filters = {},
  companyData = {},
  user = {},
  bankName = ''
}) => {
  const companyName = companyData?.name || companyData?.company_name || 'ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ'
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'
  const resolvedGovLogo = typeof govLogoImage === 'object' && govLogoImage?.default ? govLogoImage.default : govLogoImage

  const fromDateText = filters?.fromDate ? formatDate(filters.fromDate) : ''
  const toDateText = filters?.toDate ? formatDate(filters.toDate) : ''
  let dateRangeText = 'ທັງໝົດ (All)'
  if (fromDateText && toDateText) {
    dateRangeText = `ແຕ່ວັນທີ ${fromDateText} ຫາ ${toDateText}`
  } else if (fromDateText) {
    dateRangeText = `ເລີ່ມແຕ່ວັນທີ ${fromDateText}`
  } else if (toDateText) {
    dateRangeText = `ຮອດວັນທີ ${toDateText}`
  }

  // Calculate totals if grandTotal is not supplied
  const totalBF = grandTotal?.broughtForwardLcy !== undefined
    ? grandTotal.broughtForwardLcy
    : reportData.reduce((acc, curr) => acc + (parseFloat(curr.broughtForwardLcy) || 0), 0)

  const totalCredit = grandTotal?.totalCreditLcy !== undefined
    ? grandTotal.totalCreditLcy
    : reportData.reduce((acc, curr) => acc + (parseFloat(curr.totalCreditLcy) || 0), 0)

  const totalDebit = grandTotal?.totalDebitLcy !== undefined
    ? grandTotal.totalDebitLcy
    : reportData.reduce((acc, curr) => acc + (parseFloat(curr.totalDebitLcy) || 0), 0)

  const totalClose = grandTotal?.endingBalanceLcy !== undefined
    ? grandTotal.endingBalanceLcy
    : reportData.reduce((acc, curr) => acc + (parseFloat(curr.endingBalanceLcy) || 0), 0)

  // -------------------------------------------------------------
  // Group Data by Bank -> Then by Currency
  // -------------------------------------------------------------
  const bankMap = new Map()

  reportData.forEach((item) => {
    const bankKey = item.bankId || item.bankName || 'OTHER'
    const bName = item.bankName || 'ທະນາຄານອື່ນໆ (Other Banks)'

    if (!bankMap.has(bankKey)) {
      bankMap.set(bankKey, {
        bankKey,
        bankName: bName,
        currencies: new Map(),
        totalBfLcy: 0,
        totalCreditLcy: 0,
        totalDebitLcy: 0,
        totalCloseLcy: 0,
        accountCount: 0
      })
    }

    const bankGroup = bankMap.get(bankKey)
    bankGroup.accountCount += 1
    bankGroup.totalBfLcy += (parseFloat(item.broughtForwardLcy) || 0)
    bankGroup.totalCreditLcy += (parseFloat(item.totalCreditLcy) || 0)
    bankGroup.totalDebitLcy += (parseFloat(item.totalDebitLcy) || 0)
    bankGroup.totalCloseLcy += (parseFloat(item.endingBalanceLcy) || 0)

    const currKey = item.currency || 'LAK'
    if (!bankGroup.currencies.has(currKey)) {
      bankGroup.currencies.set(currKey, {
        currency: currKey,
        items: [],
        subtotal: {
          broughtForward: 0,
          broughtForwardLcy: 0,
          totalCredit: 0,
          totalCreditLcy: 0,
          totalDebit: 0,
          totalDebitLcy: 0,
          endingBalance: 0,
          endingBalanceLcy: 0
        }
      })
    }

    const currGroup = bankGroup.currencies.get(currKey)
    currGroup.items.push(item)

    currGroup.subtotal.broughtForward += (parseFloat(item.broughtForward) || 0)
    currGroup.subtotal.broughtForwardLcy += (parseFloat(item.broughtForwardLcy) || 0)
    currGroup.subtotal.totalCredit += (parseFloat(item.totalCredit) || 0)
    currGroup.subtotal.totalCreditLcy += (parseFloat(item.totalCreditLcy) || 0)
    currGroup.subtotal.totalDebit += (parseFloat(item.totalDebit) || 0)
    currGroup.subtotal.totalDebitLcy += (parseFloat(item.totalDebitLcy) || 0)
    currGroup.subtotal.endingBalance += (parseFloat(item.endingBalance) || 0)
    currGroup.subtotal.endingBalanceLcy += (parseFloat(item.endingBalanceLcy) || 0)
  })

  // Helper for dual CCY / LAK display in accounts
  const renderCell = (ccyVal, lcyVal, currency, colorClass = '') => {
    const isForeign = currency !== 'LAK'
    const ccyText = formatCurrency(ccyVal)
    if (!isForeign) {
      return `<div class="${colorClass}">${ccyText}</div>`
    }
    return `
      <div class="${colorClass}">${ccyText} <span class="badge-ccy">${currency}</span></div>
      <div class="sub-lcy">(₭${formatCurrency(lcyVal)})</div>
    `
  }

  // Helper for subtotal rows
  const renderSubtotalCell = (ccyVal, lcyVal, currency, colorClass = '') => {
    const isForeign = currency !== 'LAK'
    const ccyText = formatCurrency(ccyVal)
    if (!isForeign) {
      return `<div class="${colorClass}">₭${ccyText}</div>`
    }
    return `
      <div class="${colorClass}">${ccyText} ${currency}</div>
      <div class="sub-lcy">(₭${formatCurrency(lcyVal)})</div>
    `
  }

  let globalIndex = 0
  const bankGroupsList = Array.from(bankMap.values())

  const tableRowsHTML = bankGroupsList.map((bank) => {
    const currencyGroups = Array.from(bank.currencies.values())

    const currencySectionsHTML = currencyGroups.map((currGroup) => {
      const accountRowsHTML = currGroup.items.map((item) => {
        globalIndex += 1
        const accNumber = item.accountNumber || '-'
        const accName = item.accountName || '-'
        const currency = item.currency || 'LAK'
        const note = item.note || item.remark || ''

        const bfCcy = parseFloat(item.broughtForward || 0)
        const bfLcy = parseFloat(item.broughtForwardLcy || 0)
        const creditCcy = parseFloat(item.totalCredit || 0)
        const creditLcy = parseFloat(item.totalCreditLcy || 0)
        const debitCcy = parseFloat(item.totalDebit || 0)
        const debitLcy = parseFloat(item.totalDebitLcy || 0)
        const endCcy = parseFloat(item.endingBalance || 0)
        const endLcy = parseFloat(item.endingBalanceLcy || 0)

        return `
          <tr>
            <td class="text-center font-mono">${globalIndex}</td>
            <td class="font-mono text-center font-bold">${accNumber}</td>
            <td class="account-name-cell">
              <div class="account-title">${accName}</div>
              <div class="account-sub">${currency} Account</div>
            </td>
            <td class="text-right font-mono">${renderCell(bfCcy, bfLcy, currency)}</td>
            <td class="text-right font-mono text-credit font-bold">${renderCell(creditCcy, creditLcy, currency, 'text-credit')}</td>
            <td class="text-right font-mono text-debit font-bold">${renderCell(debitCcy, debitLcy, currency, 'text-debit')}</td>
            <td class="text-right font-mono font-bold text-balance">${renderCell(endCcy, endLcy, currency, 'text-balance')}</td>
            <td class="text-center note-cell">${note}</td>
          </tr>
        `
      }).join('')

      const currencySubtotalHTML = `
        <tr class="subtotal-currency-row">
          <td colspan="3" class="text-right font-bold subtotal-label">
            ລວມຍອດ ${bank.bankName} - ${currGroup.currency} (Subtotal):
          </td>
          <td class="text-right font-mono font-bold">${renderSubtotalCell(currGroup.subtotal.broughtForward, currGroup.subtotal.broughtForwardLcy, currGroup.currency)}</td>
          <td class="text-right font-mono font-bold text-credit">${renderSubtotalCell(currGroup.subtotal.totalCredit, currGroup.subtotal.totalCreditLcy, currGroup.currency, 'text-credit')}</td>
          <td class="text-right font-mono font-bold text-debit">${renderSubtotalCell(currGroup.subtotal.totalDebit, currGroup.subtotal.totalDebitLcy, currGroup.currency, 'text-debit')}</td>
          <td class="text-right font-mono font-bold text-balance">${renderSubtotalCell(currGroup.subtotal.endingBalance, currGroup.subtotal.endingBalanceLcy, currGroup.currency, 'text-balance')}</td>
          <td></td>
        </tr>
      `

      // If bank has multiple currencies, show a currency sub-header
      const currencyHeaderHTML = currencyGroups.length > 1 ? `
        <tr class="currency-group-header">
          <td colspan="8">
            <span class="currency-header-pill">💱 ສະກຸນເງິນ (Currency): <strong>${currGroup.currency}</strong> (${currGroup.items.length} ບັນຊີ)</span>
          </td>
        </tr>
      ` : ''

      return `${currencyHeaderHTML}${accountRowsHTML}${currencySubtotalHTML}`
    }).join('')

    // Bank-level subtotal row (if multiple currencies in this bank)
    const bankTotalRowHTML = currencyGroups.length > 1 ? `
      <tr class="subtotal-bank-row">
        <td colspan="3" class="text-right font-bold bank-subtotal-label">
          ລວມທະນາຄານ ${bank.bankName} ທັງໝົດ (Total ${bank.bankName} in LAK):
        </td>
        <td class="text-right font-mono font-bold">₭${formatCurrency(bank.totalBfLcy)}</td>
        <td class="text-right font-mono font-bold text-credit">₭${formatCurrency(bank.totalCreditLcy)}</td>
        <td class="text-right font-mono font-bold text-debit">₭${formatCurrency(bank.totalDebitLcy)}</td>
        <td class="text-right font-mono font-bold text-balance">₭${formatCurrency(bank.totalCloseLcy)}</td>
        <td></td>
      </tr>
    ` : ''

    const bankHeaderHTML = `
      <tr class="bank-group-header">
        <td colspan="8">
          <div class="bank-header-flex">
            <span class="bank-header-title">🏛️ ທະນາຄານ (Bank): <strong>${bank.bankName}</strong></span>
            <span class="bank-header-count">${bank.accountCount} ບັນຊີ (${bank.accountCount} Accounts)</span>
          </div>
        </td>
      </tr>
    `

    return `${bankHeaderHTML}${currencySectionsHTML}${bankTotalRowHTML}`
  }).join('')

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8">
      <title>ລາຍງານສະຫຼຸບຍອດເງິນຝາກ (Deposit Account Summary Report)</title>
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

        .gov-logo {
          width: 55px;
          height: 55px;
          object-fit: contain;
          margin: 0 auto 4px auto;
          display: block;
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
          font-size: 10px;
        }

        .report-table th {
          background-color: #f1f5f9 !important;
          color: #1e293b !important;
          font-weight: 700;
          padding: 6px 5px;
          border: 1px solid #cbd5e1;
          text-align: center;
          vertical-align: middle;
        }

        .report-table td {
          padding: 5px 5px;
          border: 1px solid #cbd5e1;
          vertical-align: middle;
        }

        .report-table tbody tr:nth-child(even):not(.bank-group-header):not(.currency-group-header):not(.subtotal-currency-row):not(.subtotal-bank-row) {
          background-color: #fbfcfe;
        }

        /* Bank Group Header */
        .bank-group-header td {
          background-color: #e2e8f0 !important;
          color: #0f172a !important;
          padding: 7px 10px !important;
          border-left: 5px solid #1e3a8a !important;
          border-top: 2px solid #94a3b8 !important;
          border-bottom: 1.5px solid #94a3b8 !important;
        }

        .bank-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bank-header-title {
          font-size: 11.5px;
          font-weight: 700;
          color: #0f172a;
        }

        .bank-header-count {
          font-size: 9.5px;
          color: #334155;
          background: #ffffff;
          padding: 2px 8px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          font-weight: 600;
        }

        /* Currency Group Header */
        .currency-group-header td {
          background-color: #f8fafc !important;
          padding: 4px 10px !important;
          border-left: 3px solid #3b82f6 !important;
          border-bottom: 1px solid #cbd5e1 !important;
        }

        .currency-header-pill {
          font-size: 9.5px;
          color: #1e40af;
          font-weight: 600;
        }

        /* Subtotal Currency Row */
        .subtotal-currency-row td {
          background-color: #fefce8 !important;
          font-weight: 600;
          border-top: 1.5px solid #f59e0b !important;
          border-bottom: 1.5px solid #f59e0b !important;
          padding: 6px 5px !important;
        }

        .subtotal-label {
          color: #92400e;
        }

        /* Subtotal Bank Row */
        .subtotal-bank-row td {
          background-color: #f1f5f9 !important;
          font-weight: 700;
          border-top: 2px solid #475569 !important;
          border-bottom: 2px solid #475569 !important;
          padding: 6px 5px !important;
        }

        .bank-subtotal-label {
          color: #0f172a;
        }

        .grand-total-row td {
          background-color: #f1f5f9 !important;
          font-weight: bold;
          border-top: 2.5px solid #0f172a !important;
          border-bottom: 2.5px solid #0f172a !important;
          padding: 8px 6px !important;
        }

        .account-name-cell {
          max-width: 190px;
        }

        .account-title {
          font-weight: 600;
          color: #0f172a;
        }

        .account-sub {
          font-size: 8.5px;
          color: #64748b;
        }

        .badge-ccy {
          font-size: 8px;
          font-weight: bold;
          background: #e2e8f0;
          color: #334155;
          padding: 1px 4px;
          border-radius: 3px;
        }

        .sub-lcy {
          font-size: 8px;
          color: #64748b;
        }

        .note-cell {
          min-width: 70px;
          font-size: 9.5px;
          color: #475569;
        }

        /* Utilities */
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .text-left { text-align: left; }
        .font-bold { font-weight: bold; }
        .font-mono { font-family: monospace, sans-serif !important; font-weight: 600; }

        .text-credit { color: #059669; }
        .text-debit { color: #dc2626; }
        .text-balance { color: #2563eb; }

        /* Signatures Section */
        .signatures {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 24px;
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
          margin-bottom: 45px;
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
          <img src="${resolvedGovLogo}" class="gov-logo" alt="Lao National Emblem" />
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
            <div>ນະຄອນຫລວງວຽງຈັນ, ລົງວັນທີ: ${printTime}</div>
            <!-- <div>ຜູ້ສັງລວມ: ${printedBy}</div> -->
          </div>
        </div>

        <!-- 3. Report Title Box -->
        <div class="report-title-box">
          <h1 class="report-title">ລາຍງານສະຫຼຸບຍອດເງິນຝາກ (Deposit Account Summary Report)</h1>
          <div class="report-subtitle">
            ໄລຍະເວລາ: <strong>${dateRangeText}</strong> ${bankName ? `| ທະນາຄານ: <strong>${bankName}</strong>` : ''}
          </div>
        </div>

        <!-- 4. Flow Summary Bar -->
        <div class="flow-summary-bar">
          <div class="flow-item">
            <span>1. ຍອດຍົກມາ (BF):</span>
            <strong style="color: #2563eb;">₭${formatCurrency(totalBF)}</strong>
          </div>
          <div class="flow-item">
            <span>+ 2. ລາຍຮັບ (Credit):</span>
            <strong style="color: #059669;">₭${formatCurrency(totalCredit)}</strong>
          </div>
          <div class="flow-item">
            <span>- 3. ລາຍຈ່າຍ (Debit):</span>
            <strong style="color: #dc2626;">₭${formatCurrency(totalDebit)}</strong>
          </div>
          <div class="flow-item">
            <span>= 4. ຍອດຄົງເຫຼືອທ້າຍງວດ:</span>
            <strong style="color: #7c3aed;">₭${formatCurrency(totalClose)}</strong>
          </div>
        </div>

        <!-- 5. Main 7-Column Table with Movement (Credit & Debit) sub-headers -->
        <table class="report-table">
          <thead>
            <tr>
              <th rowspan="2" style="width: 38px;">ລ/ດ<br><span style="font-size: 8px; font-weight: normal;">(No.)</span></th>
              <th rowspan="2" style="width: 130px;">ເລກບັນຊີ<br><span style="font-size: 8.5px; font-weight: normal;">(Account Number)</span></th>
              <th rowspan="2">ຊື່ບັນຊີ ແລະ ທະນາຄານ<br><span style="font-size: 8.5px; font-weight: normal;">(Account Name)</span></th>
              <th rowspan="2" style="width: 130px;">ຍອດຍົກມາ<br><span style="font-size: 8.5px; font-weight: normal;">(Brought Forward)</span></th>
              <th colspan="2" style="width: 260px;">ການເຄື່ອນໄຫວ (Movement)</th>
              <th rowspan="2" style="width: 135px;">ຍອດຍົກໄປ / ຍອດທ້າຍງວດ<br><span style="font-size: 8.5px; font-weight: normal;">(Closing Balance)</span></th>
              <th rowspan="2" style="width: 80px;">ໝາຍເຫດ<br><span style="font-size: 8.5px; font-weight: normal;">(Note)</span></th>
            </tr>
            <tr>
              <th style="width: 130px;">ລາຍຮັບ (Credit)<br><span style="font-size: 8px; font-weight: normal;">(ເງິນເຂົ້າ)</span></th>
              <th style="width: 130px;">ລາຍຈ່າຍ (Debit)<br><span style="font-size: 8px; font-weight: normal;">(ເງິນອອກ)</span></th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHTML || '<tr><td colspan="8" class="text-center py-4">ບໍ່ມີຂໍ້ມູນ (No Data)</td></tr>'}
          </tbody>
          <tfoot>
            <tr class="grand-total-row">
              <td colspan="3" class="text-center font-bold">ລວມຍອດທັງໝົດ (Grand Total LAK):</td>
              <td class="text-right font-mono font-bold">₭${formatCurrency(totalBF)}</td>
              <td class="text-right font-mono font-bold text-credit">₭${formatCurrency(totalCredit)}</td>
              <td class="text-right font-mono font-bold text-debit">₭${formatCurrency(totalDebit)}</td>
              <td class="text-right font-mono font-bold" style="color: #7c3aed;">₭${formatCurrency(totalClose)}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        <!-- 6. Official Government Signatures -->
        <div class="signatures">
          <div class="sign-box">
            <div class="sign-date">ນະຄອນຫລວງວຽງຈັນ, ວັນທີ: ......./......./...........</div>
            <div class="sign-title">ຫົວໜ້າກົມ</div>
            <div class="sign-line"></div>
            <!-- <div class="sign-name">${printedBy}</div> -->
          </div>
          <div class="sign-box">
            <div class="sign-date">ນະຄອນຫລວງວຽງຈັນ, ວັນທີ: ......./......./...........</div>
            <div class="sign-title">ຫົວໜ້າພະແນກ</div>
            <div class="sign-line"></div>
            <div class="sign-name">(...................................................)</div>
          </div>
          <div class="sign-box">
            <div class="sign-date">ນະຄອນຫລວງວຽງຈັນ, ວັນທີ: ......./......./...........</div>
            <div class="sign-title">ຜູ້ສັງລວມ</div>
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
export const printDepositAccountSummaryReport = (params) => {
  try {
    const htmlContent = generateDepositAccountSummaryReportHTML(params)

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
    // console.error('Error printing deposit account summary report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ (Error printing report)')
  }
}

export default {
  generateDepositAccountSummaryReportHTML,
  printDepositAccountSummaryReport
}
