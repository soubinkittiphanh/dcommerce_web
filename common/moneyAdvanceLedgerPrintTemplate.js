/**
 * Money Advance Ledger / Separate-Row Transaction Report Print Template & Printer
 * Generates an A4 Lao Government Style printable document
 * Lists Payment rows and Settlement rows on separate lines:
 *   - Column 5 (Left): Settlement (ການຊຳລະ)
 *   - Column 6 (Right): Payment (ລາຍຈ່າຍ)
 *   - Column 7: Running Closing Balance (ຍອດເຫຼືອ = Previous Balance + Payment - Settlement)
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

// Format payment/settlement method
const formatMethod = (method) => {
  const methodLabels = {
    cash: 'ເງິນສົດ',
    cheque: 'ເຊັກ',
    bank_transfer: 'ໂອນທະນາຄານ',
    deduction: 'ຫັກລົບ',
  }
  return methodLabels[method] || method || ''
}

/**
 * Generate Lao Government Style HTML for Money Advance Separate-Row Ledger Report
 * 7 Columns:
 * 1. No. (ລ/ດ)
 * 2. Booking date (ວັນທີລົງບັນຊີ)
 * 3. Transaction Ref No. (ເລກທີເອກະສານ / ເລກອ້າງອີງ)
 * 4. Description of transaction (ເນື້ອໃນລາຍການ)
 * 5. Settlement - Left (ການຊຳລະ / Settlement)
 * 6. Payment - Right (ລາຍຈ່າຍ / Payment)
 * 7. Closing Balance (ຍອດເຫຼືອ / Running Balance)
 */
export const generateMoneyAdvanceLedgerReportHTML = ({
  reportData = [],
  settlements = [],
  priorAdvances = [],
  priorSettlements = [],
  filters = {},
  formattedFromDate = '',
  formattedToDate = '',
  companyData = {},
  user = {},
  ministryName = '',
  makerName = '',
  openingBalance = null,
  priorPaymentTotal = null,
  priorSettlementTotal = null,
}) => {
  const companyName = companyData?.name || companyData?.company_name || 'ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ'
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'
  const resolvedGovLogo =
    typeof govLogoImage === 'object' && govLogoImage?.default ? govLogoImage.default : govLogoImage

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

  // Helper to get LAK equivalent (amount * exchangeRate) matching pages/admin/report/MA/master/index.vue
  const getLakEquivalent = (doc) => {
    if (!doc) return 0
    if (doc.lcyEquivalent !== undefined && doc.lcyEquivalent !== null) {
      return parseFloat(doc.lcyEquivalent) || 0
    }
    const amt = parseFloat(doc.amount) || 0
    const rate = parseFloat(doc.exchangeRate) || parseFloat(doc.currency?.rate) || 1
    return amt * rate
  }

  // Compute prior payments & prior settlements (in LAK) if prior arrays are provided
  let calcPriorPayment =
    priorPaymentTotal !== null && priorPaymentTotal !== undefined
      ? parseFloat(priorPaymentTotal || 0)
      : 0
  let calcPriorSettlement =
    priorSettlementTotal !== null && priorSettlementTotal !== undefined
      ? parseFloat(priorSettlementTotal || 0)
      : 0

  if (
    (priorPaymentTotal === null || priorPaymentTotal === undefined) &&
    Array.isArray(priorAdvances) &&
    priorAdvances.length > 0
  ) {
    calcPriorPayment = priorAdvances.reduce(
      (sum, item) => sum + getLakEquivalent(item),
      0
    )
  }

  if (
    (priorSettlementTotal === null || priorSettlementTotal === undefined) &&
    ((Array.isArray(priorSettlements) && priorSettlements.length > 0) ||
      (Array.isArray(priorAdvances) && priorAdvances.length > 0))
  ) {
    const priorSettleMap = new Map()
    const priorUnindexed = []
      ; (priorAdvances || []).forEach((adv) => {
        const nested = adv?.settlementLine || adv?.settlements || []
        nested.forEach((s) => {
          if (!s || s.isActive === false || s.isActive === 0) return
          // Only include nested settlement if its bookingDate is before filters.fromDate (or has no date)
          if (filters?.fromDate && s.bookingDate && s.bookingDate >= filters.fromDate) return
          if (s.id) priorSettleMap.set(s.id, s)
          else priorUnindexed.push(s)
        })
      })
      ; (priorSettlements || []).forEach((s) => {
        if (!s || s.isActive === false || s.isActive === 0) return
        if (s.id) priorSettleMap.set(s.id, s)
        else priorUnindexed.push(s)
      })
    calcPriorSettlement = [...priorSettleMap.values(), ...priorUnindexed].reduce(
      (sum, s) => sum + getLakEquivalent(s),
      0
    )
  }

  const initialOpeningBalance =
    openingBalance !== null && openingBalance !== undefined
      ? parseFloat(openingBalance || 0)
      : calcPriorPayment - calcPriorSettlement

  let totalSettlement = 0
  let totalPayment = 0
  let runningBalance = initialOpeningBalance
  let rowIndex = 0
  let paymentRowCount = 0
  let settlementRowCount = 0

  // Map advances by ID and collect any nested settlementLine items + standalone settlements
  const advanceByIdMap = new Map()
  const settlementMap = new Map()
  const unindexedSettlements = []

    ; (reportData || []).forEach((item) => {
      if (item && item.id) {
        advanceByIdMap.set(item.id, item)
      }
      const nestedSettlements = item?.settlementLine || item?.settlements || []
      nestedSettlements.forEach((s) => {
        if (!s || s.isActive === false || s.isActive === 0) return
        const enriched = { ...s, _parentAdvance: item }
        if (s.id) {
          settlementMap.set(s.id, enriched)
        } else {
          unindexedSettlements.push(enriched)
        }
      })
    })

    ; (settlements || []).forEach((s) => {
      if (!s || s.isActive === false || s.isActive === 0) return
      const parentAdvance =
        s.moneyAdvance ||
        (s.moneyAdvanceId ? advanceByIdMap.get(s.moneyAdvanceId) : null) ||
        settlementMap.get(s.id)?._parentAdvance ||
        null
      const enriched = { ...settlementMap.get(s.id), ...s, _parentAdvance: parentAdvance }
      if (s.id) {
        settlementMap.set(s.id, enriched)
      } else {
        unindexedSettlements.push(enriched)
      }
    })

  const allSettlements = [...settlementMap.values(), ...unindexedSettlements]

  // Build combined chronological transaction list (Payments & Settlements as separate rows)
  const combinedEntries = []

    ; (reportData || []).forEach((item) => {
      const rawDate = item.bookingDate || item.createdAt || ''
      const ts = rawDate ? new Date(rawDate).getTime() : 0
      combinedEntries.push({
        type: 'PAYMENT',
        timestamp: isNaN(ts) ? 0 : ts,
        id: item.id || 0,
        item,
      })
    })

  allSettlements.forEach((settle) => {
    const settleAmount = parseFloat(settle.amount || 0)
    if (settleAmount <= 0) return
    const rawDate =
      settle.bookingDate || settle.createdAt || settle._parentAdvance?.bookingDate || ''
    const ts = rawDate ? new Date(rawDate).getTime() : 0
    combinedEntries.push({
      type: 'SETTLEMENT',
      timestamp: isNaN(ts) ? 0 : ts,
      id: settle.id || 0,
      settle,
      parentAdvance: settle._parentAdvance || null,
    })
  })

  // Sort chronologically by bookingDate asc; on same date, Payment comes before Settlement
  combinedEntries.sort((a, b) => {
    if (a.timestamp !== b.timestamp) return a.timestamp - b.timestamp
    if (a.type !== b.type) return a.type === 'PAYMENT' ? -1 : 1
    return (a.id || 0) - (b.id || 0)
  })

  const ledgerRows = []

  // Starting Balance / Balance Forward row from prior month (Net of Prior Payment - Prior Settlement)
  const bfBreakdownSub =
    calcPriorPayment > 0 || calcPriorSettlement > 0
      ? `<div class="sub-info text-muted">ສະສົມເດືອນກ່ອນ — ລາຍຈ່າຍ: ${formatCurrency(calcPriorPayment)} | ການຊຳລະ: ${formatCurrency(calcPriorSettlement)}</div>`
      : ''

  ledgerRows.push(`
    <tr class="row-bf">
      <td class="text-center font-mono">-</td>
      <td class="text-center font-mono">${fromDateText || '-'}</td>
      <td class="text-center">
        <div class="badge-type badge-bf">ຍອດຍົກມາ (B/F)</div>
      </td>
      <td class="desc-cell">
        <div class="font-bold">ຍອດຍົກມາຈາກເດືອນກ່ອນ (Balance Forward)</div>
        ${bfBreakdownSub}
      </td>
      <td class="text-right font-mono text-muted">-</td>
      <td class="text-right font-mono text-muted">-</td>
      <td class="text-right font-mono font-bold text-balance">${formatCurrency(initialOpeningBalance)}</td>
    </tr>
  `)

  combinedEntries.forEach((entry) => {
    if (entry.type === 'PAYMENT') {
      const item = entry.item
      const voucherNo = formatVoucherNumber(item.id)
      const bookingDate = formatDate(item.bookingDate)
      const extRef = item.externalRefNo ? `<div class="sub-ref">Ref: ${item.externalRefNo}</div>` : ''
      const cheque = item.chequeNo ? `<div class="sub-ref">Cheque: ${item.chequeNo}</div>` : ''

      const ministryTag = item.ministry
        ? `<div class="ministry-tag">${item.ministry.ministryCode ? item.ministry.ministryCode + ' - ' : ''}${item.ministry.ministryName}</div>`
        : ''
      const purposeText = item.purpose ? `<div class="purpose-text">${item.purpose}</div>` : '-'
      const receiveInfo = item.receiveName ? `<div class="sub-info">ຜູ້ຮັບ: ${item.receiveName}</div>` : ''
      const noteInfo = item.note ? `<div class="sub-info text-muted">ໝາຍເຫດ: ${item.note}</div>` : ''
      const paymentDescription = `${ministryTag}${purposeText}${receiveInfo}${noteInfo}`

      // 1. Payment Row (Payment on Right [Col 6], Settlement on Left [Col 5] is '-')
      const paymentAmount = getLakEquivalent(item)
      const rawPaymentAmt = parseFloat(item.amount || 0)
      const payCurrCode = item.currency?.code || 'LAK'
      const payCcySub =
        payCurrCode !== 'LAK'
          ? `<div class="sub-ref">(${formatCurrency(rawPaymentAmt)} ${payCurrCode})</div>`
          : ''
      totalPayment += paymentAmount
      runningBalance += paymentAmount
      rowIndex += 1
      paymentRowCount += 1

      ledgerRows.push(`
        <tr class="row-payment">
          <td class="text-center font-mono">${rowIndex}</td>
          <td class="text-center font-mono">${bookingDate}</td>
          <td class="text-center">
            <div class="font-mono font-bold">#${voucherNo}</div>
            <div class="badge-type badge-payment">ລາຍຈ່າຍ</div>
            ${extRef}
            ${cheque}
          </td>
          <td class="desc-cell">${paymentDescription}</td>
          <td class="text-right font-mono text-muted">-</td>
          <td class="text-right font-mono font-bold text-payment">${formatCurrency(paymentAmount)}${payCcySub}</td>
          <td class="text-right font-mono font-bold text-balance">${formatCurrency(runningBalance)}</td>
        </tr>
      `)
    } else if (entry.type === 'SETTLEMENT') {
      const settle = entry.settle
      const parentAdvance = entry.parentAdvance
      const settleAmount = getLakEquivalent(settle)
      const rawSettleAmt = parseFloat(settle.amount || 0)
      const setCurrCode = settle.currency?.code || parentAdvance?.currency?.code || 'LAK'
      const setCcySub =
        setCurrCode !== 'LAK'
          ? `<div class="sub-ref">(${formatCurrency(rawSettleAmt)} ${setCurrCode})</div>`
          : ''

      totalSettlement += settleAmount
      runningBalance -= settleAmount
      rowIndex += 1
      settlementRowCount += 1

      const settleDate = formatDate(settle.bookingDate || parentAdvance?.bookingDate)
      const settleVoucherNo = settle.id
        ? formatVoucherNumber(settle.id)
        : formatVoucherNumber(parentAdvance?.id)
      const linkedMaId = settle.moneyAdvanceId || parentAdvance?.id
      const linkedMaText = linkedMaId ? ` (MA #${formatVoucherNumber(linkedMaId)})` : ''
      const settleExtRef = settle.externalRefNo
        ? `<div class="sub-ref">Ref: ${settle.externalRefNo}</div>`
        : ''
      const settleCheque = settle.chequeNo
        ? `<div class="sub-ref">Cheque: ${settle.chequeNo}</div>`
        : ''

      const settleMinistryObj = settle.ministry || parentAdvance?.ministry
      const settleMinistryTag = settleMinistryObj
        ? `<div class="ministry-tag">${settleMinistryObj.ministryCode ? settleMinistryObj.ministryCode + ' - ' : ''}${settleMinistryObj.ministryName}</div>`
        : ''
      const settleNotesText = `<div class="purpose-text">${settle.notes || settle.description || (linkedMaId ? `ຊຳລະລາຍຈ່າຍ (ອ້າງອີງ #${formatVoucherNumber(linkedMaId)})` : 'ຮັບຊຳລະເງິນຄືນ')}</div>`
      const fromPersonInfo = settle.fromPersonName
        ? `<div class="sub-info">ຜູ້ມອບ/ຊຳລະ: ${settle.fromPersonName}</div>`
        : ''
      const methodInfo = settle.method
        ? `<div class="sub-info text-muted">ວິທີຊຳລະ: ${formatMethod(settle.method)}</div>`
        : ''
      const settleDescription = `${settleMinistryTag}${settleNotesText}${fromPersonInfo}${methodInfo}`

      // 2. Settlement Row (Settlement on Left [Col 5], Payment on Right [Col 6] is '-')
      ledgerRows.push(`
        <tr class="row-settlement">
          <td class="text-center font-mono">${rowIndex}</td>
          <td class="text-center font-mono">${settleDate}</td>
          <td class="text-center">
            <div class="font-mono font-bold">#${settleVoucherNo}</div>
            <div class="badge-type badge-settle">ການຊຳລະ${linkedMaText}</div>
            ${settleExtRef}
            ${settleCheque}
          </td>
          <td class="desc-cell">${settleDescription}</td>
          <td class="text-right font-mono font-bold text-settle">${formatCurrency(settleAmount)}${setCcySub}</td>
          <td class="text-right font-mono text-muted">-</td>
          <td class="text-right font-mono font-bold text-balance">${formatCurrency(runningBalance)}</td>
        </tr>
      `)
    }
  })

  const tableRowsHTML = ledgerRows.join('')
  const finalClosingBalance = runningBalance

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8">
      <title>ບົດລາຍງານ ລາຍຈ່າຍ ແລະ ການຊຳລະ (Money Advance & Settlement Ledger)</title>
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

        .org-left .org-division {
          font-weight: 600;
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

        .report-table tbody tr.row-bf {
          background-color: #eff6ff;
        }

        .report-table tbody tr.row-settlement {
          background-color: #f0fdf4;
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

        .badge-type {
          display: inline-block;
          font-size: 8px;
          font-weight: 600;
          padding: 1px 4px;
          border-radius: 3px;
          margin-top: 1px;
        }

        .badge-payment {
          background-color: #f1f5f9;
          color: #334155;
        }

        .badge-settle {
          background-color: #dcfce7;
          color: #047857;
        }

        .badge-bf {
          background-color: #dbeafe;
          color: #1d4ed8;
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
          <img src="${resolvedGovLogo}" class="gov-logo" alt="Lao National Emblem" />
          <div class="gov-country">ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</div>
          <div class="gov-motto">ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດຖະນະຖາວອນ</div>
          <div class="gov-stars">*** 000 ***</div>
        </div>

        <!-- 2. Organization Info & Metadata -->
        <div class="org-meta-section">
          <div class="org-left">
            <div class="org-ministry">${companyName}</div>
            <div class="org-division">ກົມແຜນການ ແລະ ການເງິນ</div>
          </div>
          <div class="org-right">
            <div>ເລກທີ: ................../ກຜງ</div>
            <div>ວຽງຈັນ, ວັນທີພິມ: </div>
          </div>
        </div>

        <!-- 3. Report Title Box -->
        <div class="report-title-box">
          <h1 class="report-title">ບົດລາຍງານ ລາຍຈ່າຍເງິນສົດ ແລະ ການຊຳລະ (Money Advance & Settlement Report)</h1>
          <div class="report-subtitle">
            ໄລຍະເວລາ: <strong>${dateRangeText}</strong>
            ${ministryName ? ` | ກະຊວງ/ກົມ: <strong>${ministryName}</strong>` : ''}
            ${makerName ? ` | ຜູ້ລົງ: <strong>${makerName}</strong>` : ''}
          </div>
        </div>

        <!-- 4. Summary Bar -->
        <div class="summary-bar">
          <div class="summary-item">
            <span>ຍອດຍົກມາ (B/F):</span>
            <strong style="color: #1d4ed8;">₭${formatCurrency(initialOpeningBalance)}</strong>
          </div>
          <div class="summary-item">
            <span>ລວມການຊຳລະ (Settlement):</span>
            <strong style="color: #059669;">₭${formatCurrency(totalSettlement)}</strong>
          </div>
          <div class="summary-item">
            <span>ລວມລາຍຈ່າຍ (Payment):</span>
            <strong style="color: #0f172a;">₭${formatCurrency(totalPayment)}</strong>
          </div>
          <div class="summary-item">
            <span>ຍອດເຫຼືອ (Closing Balance):</span>
            <strong style="color: #2563eb;">₭${formatCurrency(finalClosingBalance)}</strong>
          </div>
        </div>

        <!-- 5. Main 7-Column Table (Col 5 = Settlement Left, Col 6 = Payment Right) -->
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 35px;">1<br>ລ/ດ<br><span style="font-size: 8px; font-weight: normal;">(No.)</span></th>
              <th style="width: 75px;">2<br>ວັນທີລົງບັນຊີ<br><span style="font-size: 8px; font-weight: normal;">(Booking Date)</span></th>
              <th style="width: 95px;">3<br>ເລກທີເອກະສານ<br><span style="font-size: 8px; font-weight: normal;">(Transaction Ref)</span></th>
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
            <div class="sign-title">ຜູ້ສັງລວມ / ຜູ້ລາຍງານ</div>
          </div>
          <div class="sign-box">
            <div class="sign-title">ຫົວໜ້າພະແນກຄຸ້ມຄອງລາຍຮັບ</div>
          </div>
          <div class="sign-box">

            <div class="sign-title">ຫົວໜ້າກົມແຜນການ ແລະ ການເງິນ</div>


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
export const printMoneyAdvanceLedgerReport = (params) => {
  try {
    const htmlContent = generateMoneyAdvanceLedgerReportHTML(params)

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
    console.error('Error printing ledger report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ (Error printing report)')
  }
}

export default {
  generateMoneyAdvanceLedgerReportHTML,
  printMoneyAdvanceLedgerReport
}

