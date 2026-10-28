/**
 * Sales Commission Report Print Module
 * Generates and prints formal A4 business reports and 80mm POS thermal slips
 * for Sales Commission, following the standard pattern in common/sales-report-printer.js.
 */

/**
 * Safe number parsing to prevent NaN issues
 */
const safeParseNumber = (value, defaultValue = 0) => {
  if (value === null || value === undefined || value === '') {
    return defaultValue
  }
  if (typeof value === 'number') {
    return isNaN(value) ? defaultValue : value
  }
  if (typeof value === 'string') {
    const cleanValue = value.toString().replace(/[^\d.-]/g, '')
    const parsed = parseFloat(cleanValue)
    return isNaN(parsed) ? defaultValue : parsed
  }
  const converted = Number(value)
  return isNaN(converted) ? defaultValue : converted
}

/**
 * Format date for Lao locale (DD/MM/YYYY)
 */
const formatDateLao = (dateInput) => {
  if (!dateInput) return '-'
  try {
    const date = new Date(dateInput)
    if (isNaN(date.getTime())) return dateInput

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  } catch (error) {
    return dateInput || '-'
  }
}

/**
 * Format date with time (DD/MM/YYYY HH:mm:ss)
 */
const formatDateTimeLao = (dateInput = new Date()) => {
  try {
    const date = new Date(dateInput)
    if (isNaN(date.getTime())) return ''

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  } catch (error) {
    return ''
  }
}

/**
 * Default number formatting with thousand separators
 */
const defaultFormatNumber = (val) => {
  if (val === null || val === undefined || isNaN(val)) return '0'
  const parts = Number(val).toFixed(2).split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts[1] === '00' ? parts[0] : `${parts[0]}.${parts[1]}`
}

/**
 * Generate company header for commission report
 */
const generateCompanyHeader = (companyData, companyLogo, isThermal = false) => {
  const companyName = companyData?.name || companyData?.company_name || 'DCommerce'
  const companyTel = companyData?.tel || companyData?.telephone || ''
  const companyAddress = companyData?.address || ''

  if (isThermal) {
    const logoHtml = companyLogo
      ? `<div style="text-align:center;margin-bottom:4px;">
           <img src="${companyLogo}" alt="Logo" style="max-width:50px;max-height:50px;object-fit:contain;" onerror="this.style.display='none';">
         </div>`
      : ''
    return `
      <div class="thermal-header">
        ${logoHtml}
        <div class="thermal-company-name">${companyName}</div>
        ${companyTel ? `<div class="thermal-company-sub">ໂທ: ${companyTel}</div>` : ''}
        ${companyAddress ? `<div class="thermal-company-sub">${companyAddress}</div>` : ''}
      </div>
    `
  }

  const logoHtml = companyLogo
    ? `<img src="${companyLogo}" alt="Logo" class="company-logo" onerror="this.style.display='none';">`
    : `<div class="logo-placeholder">${companyName.substring(0, 2).toUpperCase()}</div>`

  return `
    <div class="report-header">
      <div class="header-left">
        ${logoHtml}
        <div class="company-details">
          <h1 class="company-name">${companyName}</h1>
          ${companyAddress ? `<div class="company-meta">${companyAddress}</div>` : ''}
          ${companyTel ? `<div class="company-meta">ເບີໂທ: ${companyTel}</div>` : ''}
        </div>
      </div>
      <div class="header-right">
        <div class="report-title-badge">COMMISSION REPORT</div>
        <h2 class="report-title">ລາຍງານຄ່ານາຍໜ້າການຂາຍສິນຄ້າ</h2>
        <div class="report-subtitle">Sales Commission Settlement & Analysis Report</div>
      </div>
    </div>
  `
}

/**
 * Generate date range & filter criteria section
 */
const generateFilterSection = ({ fromDate, toDate, filters = {}, selectedLabels = {}, isThermal = false }) => {
  const fromText = formatDateLao(fromDate)
  const toText = formatDateLao(toDate)

  if (isThermal) {
    return `
      <div class="thermal-filter-box">
        <div class="thermal-title">ລາຍງານຄ່ານາຍໜ້າ (Commission)</div>
        <div>ໄລຍະ: ${fromText} ຫາ ${toText}</div>
        ${selectedLabels.salesperson ? `<div>ຜູ້ຂາຍ: ${selectedLabels.salesperson}</div>` : ''}
      </div>
    `
  }

  const salespersonText = selectedLabels.salesperson || 'ທັງໝົດ (All)'
  const productText = selectedLabels.product || 'ທັງໝົດ (All)'
  const categoryText = selectedLabels.category || 'ທັງໝົດ (All)'

  return `
    <div class="filter-card">
      <div class="filter-grid">
        <div class="filter-item">
          <span class="filter-label">ໄລຍະວັນທີ (Period):</span>
          <span class="filter-value">${fromText} &nbsp;ຫາ&nbsp; ${toText}</span>
        </div>
        <div class="filter-item">
          <span class="filter-label">ຜູ້ຂາຍ (Salesperson):</span>
          <span class="filter-value">${salespersonText}</span>
        </div>
        <div class="filter-item">
          <span class="filter-label">ສິນຄ້າ (Product):</span>
          <span class="filter-value">${productText}</span>
        </div>
        <div class="filter-item">
          <span class="filter-label">ໝວດໝູ່ (Category):</span>
          <span class="filter-value">${categoryText}</span>
        </div>
      </div>
    </div>
  `
}

/**
 * Generate summary KPIs section
 */
const generateSummarySection = ({ summary = {}, formatNum, currencyCode = 'LAK', isThermal = false }) => {
  const totalBase = safeParseNumber(summary.totalCommissionBase, 0)
  const totalOrders = safeParseNumber(summary.totalOrdersCount, 0)
  const totalItems = safeParseNumber(summary.totalItemsSold, 0)
  const totalLines = safeParseNumber(summary.totalLinesCount, 0)

  if (isThermal) {
    return `
      <div class="thermal-summary">
        <div class="thermal-summary-title">ສະຫຼຸບລວມ (Summary)</div>
        <div class="thermal-line">
          <span>ຄ່ານາຍໜ້າລວມພື້ນຖານ:</span>
          <strong>${formatNum(totalBase)} ${currencyCode}</strong>
        </div>
        <div class="thermal-line">
          <span>ຈຳນວນບິນຂາຍ:</span>
          <strong>${formatNum(totalOrders)} ບິນ</strong>
        </div>
        <div class="thermal-line">
          <span>ຈຳນວນສິນຄ້າ:</span>
          <strong>${formatNum(totalItems)} ຊິ້ນ</strong>
        </div>
      </div>
    `
  }

  return `
    <div class="kpi-container">
      <div class="kpi-card highlight">
        <div class="kpi-title">ຍອດຄ່ານາຍໜ້າລວມພື້ນຖານ (Total Base)</div>
        <div class="kpi-value text-primary">${formatNum(totalBase)} <span class="kpi-unit">${currencyCode}</span></div>
        <div class="kpi-desc">ມູນຄ່າແປງເປັນສະກຸນເງິນພື້ນຖານ</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-title">ຈຳນວນບິນຂາຍ (Orders)</div>
        <div class="kpi-value">${formatNum(totalOrders)}</div>
        <div class="kpi-desc">ບິນທີ່ມີລາຍການຄ່ານາຍໜ້າ</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-title">ຈຳນວນສິນຄ້າທີ່ຂາຍ (Items Sold)</div>
        <div class="kpi-value">${formatNum(totalItems)}</div>
        <div class="kpi-desc">ຈຳນວນຊິ້ນທັງໝົດທີ່ໄດ້ຄ່ານາຍໜ້າ</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-title">ຈຳນວນລາຍການ (Total Lines)</div>
        <div class="kpi-value">${formatNum(totalLines)}</div>
        <div class="kpi-desc">ຈຳນວນແຖວທຸລະກຳທັງໝົດ</div>
      </div>
    </div>
  `
}

/**
 * Generate multi-currency breakdown section
 */
const generateCurrencyBreakdownSection = ({ summary = {}, formatNum, isThermal = false }) => {
  const currencyTotals = summary.currencyTotals || []
  if (!currencyTotals.length) return ''

  if (isThermal) {
    const itemsHtml = currencyTotals
      .map(
        (c) => `
      <div class="thermal-line">
        <span>${c.code}:</span>
        <strong>${formatNum(c.totalCommissionAmount)} (${c.lineCount} ລາຍການ)</strong>
      </div>
    `
      )
      .join('')

    return `
      <div class="thermal-currency-section">
        <div class="thermal-subtitle">ແຍກຕາມສະກຸນເງິນຕົວຈິງ</div>
        ${itemsHtml}
      </div>
    `
  }

  const chipsHtml = currencyTotals
    .map(
      (c) => `
    <div class="currency-chip">
      <span class="chip-code">${c.code}</span>
      <span class="chip-amount">${formatNum(c.totalCommissionAmount)}</span>
      <span class="chip-count">(${c.lineCount} ລາຍການ)</span>
    </div>
  `
    )
    .join('')

  return `
    <div class="currency-breakdown-box">
      <div class="currency-box-header">
        <span class="currency-box-title">ຍອດຄ່ານາຍໜ້າແຍກຕາມສະກຸນເງິນຕົວຈິງ (Currencies Breakdown):</span>
      </div>
      <div class="currency-chips-wrapper">
        ${chipsHtml}
      </div>
    </div>
  `
}

/**
 * Generate Summary by Salesperson Table
 */
const generateSalespersonTable = ({ byUserList = [], formatNum, currencyCode = 'LAK' }) => {
  if (!byUserList || !byUserList.length) {
    return '<div class="no-data">ບໍ່ມີຂໍ້ມູນຜູ້ຂາຍ</div>'
  }

  let totalOrdersSum = 0
  let totalQtySum = 0
  let totalBaseSum = 0

  const rows = byUserList
    .map((u, index) => {
      const orders = safeParseNumber(u.totalOrders, 0)
      const qty = safeParseNumber(u.totalQuantity, 0)
      const base = safeParseNumber(u.totalCommissionBaseAmount, 0)

      totalOrdersSum += orders
      totalQtySum += qty
      totalBaseSum += base

      // Format currencies
      let currText = '-'
      if (u.currencies && typeof u.currencies === 'object') {
        const parts = Object.keys(u.currencies).map(
          (k) => `${k}: ${formatNum(u.currencies[k])}`
        )
        if (parts.length) currText = parts.join(' | ')
      }

      return `
      <tr>
        <td class="text-center">${index + 1}</td>
        <td class="font-weight-bold">${u.userName || `Staff #${u.userId}`}</td>
        <td class="text-center font-mono">#${u.userId || '-'}</td>
        <td class="text-center">${formatNum(orders)}</td>
        <td class="text-center">${formatNum(qty)}</td>
        <td class="text-left font-mono">${currText}</td>
        <td class="text-right font-weight-bold font-mono">${formatNum(base)}</td>
      </tr>
    `
    })
    .join('')

  return `
    <div class="table-section">
      <div class="section-heading">
        <h3>1. ສະຫຼຸບຄ່ານາຍໜ້າຕາມຜູ້ຂາຍ (Summary by Salesperson)</h3>
        <span class="badge-count">${byUserList.length} ຜູ້ຂາຍ</span>
      </div>
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 35px;" class="text-center">ລ/ດ</th>
            <th>ຜູ້ຂາຍ (Salesperson)</th>
            <th style="width: 80px;" class="text-center">ລະຫັດ (ID)</th>
            <th style="width: 85px;" class="text-center">ຈຳນວນບິນ</th>
            <th style="width: 85px;" class="text-center">ສິນຄ້າທີ່ຂາຍ</th>
            <th>ຄ່ານາຍໜ້າແຍກສະກຸນເງິນ</th>
            <th style="width: 140px;" class="text-right">ມູນຄ່າພື້ນຖານ (${currencyCode})</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="3" class="text-center font-weight-bold">ລວມທັງໝົດ (Grand Total):</td>
            <td class="text-center font-weight-bold">${formatNum(totalOrdersSum)}</td>
            <td class="text-center font-weight-bold">${formatNum(totalQtySum)}</td>
            <td></td>
            <td class="text-right font-weight-bold text-primary">${formatNum(totalBaseSum)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `
}

/**
 * Generate Summary by Product Table
 */
const generateProductTable = ({ byProductList = [], formatNum, currencyCode = 'LAK' }) => {
  if (!byProductList || !byProductList.length) {
    return '<div class="no-data">ບໍ່ມີຂໍ້ມູນສິນຄ້າ</div>'
  }

  let totalQtySum = 0
  let totalSalesSum = 0
  let totalBaseSum = 0
  let totalOrdersSum = 0

  const rows = byProductList
    .map((p, index) => {
      const qty = safeParseNumber(p.totalQuantity, 0)
      const sales = safeParseNumber(p.totalSalesAmount, 0)
      const base = safeParseNumber(p.totalCommissionBaseAmount, 0)
      const orders = safeParseNumber(p.orderCount, 0)

      totalQtySum += qty
      totalSalesSum += sales
      totalBaseSum += base
      totalOrdersSum += orders

      const rateText =
        p.commissionType === 'percentage'
          ? `${p.commissionRate}%`
          : `${formatNum(p.commissionRate)}`

      return `
      <tr>
        <td class="text-center">${index + 1}</td>
        <td class="font-mono">${p.productCode || '-'}</td>
        <td class="font-weight-medium">${p.productName || 'Unknown Product'}</td>
        <td class="text-muted">${p.categoryName || '-'}</td>
        <td class="text-center font-mono">${formatNum(qty)}</td>
        <td class="text-right font-mono">${formatNum(sales)} ${p.currencyCode || ''}</td>
        <td class="text-center font-mono">${rateText}</td>
        <td class="text-right font-mono">${formatNum(p.totalCommissionAmount)} ${p.currencyCode || ''}</td>
        <td class="text-right font-weight-bold font-mono">${formatNum(base)}</td>
        <td class="text-center font-mono">${formatNum(orders)}</td>
      </tr>
    `
    })
    .join('')

  return `
    <div class="table-section">
      <div class="section-heading">
        <h3>2. ສະຫຼຸບຄ່ານາຍໜ້າຕາມສິນຄ້າ (Summary by Product)</h3>
        <span class="badge-count">${byProductList.length} ລາຍການ</span>
      </div>
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 35px;" class="text-center">ລ/ດ</th>
            <th style="width: 90px;">ລະຫັດ (SKU)</th>
            <th>ຊື່ສິນຄ້າ (Product Name)</th>
            <th style="width: 100px;">ໝວດໝູ່</th>
            <th style="width: 70px;" class="text-center">ຈຳນວນ</th>
            <th style="width: 110px;" class="text-right">ຍອດຂາຍລວມ</th>
            <th style="width: 75px;" class="text-center">ອັດຕາ</th>
            <th style="width: 110px;" class="text-right">ຄ່ານາຍໜ້າລວມ</th>
            <th style="width: 130px;" class="text-right">ມູນຄ່າພື້ນຖານ (${currencyCode})</th>
            <th style="width: 65px;" class="text-center">ຈຳນວນບິນ</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="4" class="text-center font-weight-bold">ລວມທັງໝົດ (Grand Total):</td>
            <td class="text-center font-weight-bold">${formatNum(totalQtySum)}</td>
            <td class="text-right font-weight-bold font-mono">${formatNum(totalSalesSum)}</td>
            <td></td>
            <td></td>
            <td class="text-right font-weight-bold text-primary">${formatNum(totalBaseSum)}</td>
            <td class="text-center font-weight-bold">${formatNum(totalOrdersSum)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `
}

/**
 * Generate Detailed Transactions Table
 */
const generateTransactionTable = ({ reportLines = [], formatNum, currencyCode = 'LAK' }) => {
  if (!reportLines || !reportLines.length) {
    return '<div class="no-data">ບໍ່ມີລາຍການທຸລະກຳ</div>'
  }

  let totalQtySum = 0
  let totalSalesSum = 0
  let totalBaseSum = 0

  const rows = reportLines
    .map((l, index) => {
      const qty = safeParseNumber(l.quantity, 0)
      const lineTotal = safeParseNumber(l.lineTotal, 0)
      const base = safeParseNumber(l.commissionBaseAmount, 0)

      totalQtySum += qty
      totalSalesSum += lineTotal
      totalBaseSum += base

      const rateText =
        l.commissionType === 'percentage'
          ? `${l.commissionRate}%`
          : `${formatNum(l.commissionRate)}`

      return `
      <tr>
        <td class="text-center">${index + 1}</td>
        <td class="text-center font-mono">${formatDateLao(l.bookingDate)}</td>
        <td class="text-center font-mono font-weight-bold">#${l.saleHeaderId}</td>
        <td>${l.userName || '-'}</td>
        <td class="text-muted">${l.clientName || 'Walk-in'}</td>
        <td class="font-weight-medium">${l.productName || '-'}</td>
        <td class="text-center font-mono">${formatNum(qty)}</td>
        <td class="text-right font-mono">${formatNum(l.unitPrice)}</td>
        <td class="text-right font-mono">${formatNum(lineTotal)} ${l.saleCurrencyCode || ''}</td>
        <td class="text-center font-mono">${rateText}</td>
        <td class="text-right font-mono">
          ${formatNum(l.commissionAmount)} ${l.commissionCurrencyCode || ''}
          ${Number(l.commissionDiscountDeduction) > 0 ? `<div style="font-size:9px;color:#c2410c;">(-${formatNum(l.commissionDiscountDeduction)})</div>` : ''}
        </td>
        <td class="text-right font-weight-bold font-mono">${formatNum(base)}</td>
      </tr>
    `
    })
    .join('')

  return `
    <div class="table-section">
      <div class="section-heading">
        <h3>3. ລາຍການທຸລະກຳຄ່ານາຍໜ້າລະອຽດ (Transaction Details)</h3>
        <span class="badge-count">${reportLines.length} ລາຍການ</span>
      </div>
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 30px;" class="text-center">ລ/ດ</th>
            <th style="width: 75px;" class="text-center">ວັນທີ</th>
            <th style="width: 65px;" class="text-center">ເລກບິນ</th>
            <th style="width: 100px;">ຜູ້ຂາຍ</th>
            <th style="width: 90px;">ລູກຄ້າ</th>
            <th>ລາຍການສິນຄ້າ (Product)</th>
            <th style="width: 50px;" class="text-center">ຈຳນວນ</th>
            <th style="width: 75px;" class="text-right">ລາຄາ</th>
            <th style="width: 95px;" class="text-right">ຍອດຂາຍ</th>
            <th style="width: 65px;" class="text-center">ອັດຕາ</th>
            <th style="width: 95px;" class="text-right">ຄ່ານາຍໜ້າ</th>
            <th style="width: 110px;" class="text-right">ມູນຄ່າພື້ນຖານ (${currencyCode})</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="6" class="text-center font-weight-bold">ລວມທັງໝົດ (Grand Total):</td>
            <td class="text-center font-weight-bold">${formatNum(totalQtySum)}</td>
            <td></td>
            <td class="text-right font-weight-bold font-mono">${formatNum(totalSalesSum)}</td>
            <td></td>
            <td></td>
            <td class="text-right font-weight-bold text-primary">${formatNum(totalBaseSum)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `
}

/**
 * Generate 3-Column Signatures Section (Prepared, Checked, Approved)
 */
const generateSignaturesSection = () => {
  return `
    <div class="signatures-section">
      <div class="signature-column">
        <div class="sig-role">ຜູ້ສ້າງລາຍງານ (Prepared By)</div>
        <div class="sig-space"></div>
        <div class="sig-line"></div>
        <div class="sig-name">ວັນທີ: ....../....../............</div>
      </div>
      <div class="signature-column">
        <div class="sig-role">ຜູ້ກວດກາ (Verified By)</div>
        <div class="sig-space"></div>
        <div class="sig-line"></div>
        <div class="sig-name">ວັນທີ: ....../....../............</div>
      </div>
      <div class="signature-column">
        <div class="sig-role">ຜູ້ອະນຸມັດ (Approved By)</div>
        <div class="sig-space"></div>
        <div class="sig-line"></div>
        <div class="sig-name">ວັນທີ: ....../....../............</div>
      </div>
    </div>
  `
}

/**
 * Generate footer section with print timestamp and user info
 */
const generateFooterSection = (user) => {
  const userName = user?.cus_name || user?.name || user?.username || 'Admin'
  const printTime = formatDateTimeLao(new Date())

  return `
    <div class="report-footer">
      <div class="footer-left">
        ພິມເມື່ອ: <strong>${printTime}</strong> &nbsp;|&nbsp; ພິມໂດຍ: <strong>${userName}</strong>
      </div>
      <div class="footer-right">
        DCommerce POS / ERP Cloud System
      </div>
    </div>
  `
}

/**
 * Generate Compact 80mm POS Thermal Slip Content
 */
const generateThermalHTML = ({
  companyData,
  companyLogo,
  fromDate,
  toDate,
  summary,
  byUserList = [],
  byProductList = [],
  selectedLabels = {},
  user,
  formatNum,
  currencyCode = 'LAK',
}) => {
  const userName = user?.cus_name || user?.name || user?.username || 'Admin'
  const printTime = formatDateTimeLao(new Date())

  const userRows = byUserList
    .slice(0, 10)
    .map(
      (u) => `
    <div class="thermal-line font-mono">
      <span>${u.userName}</span>
      <strong>${formatNum(u.totalCommissionBaseAmount)} ${currencyCode}</strong>
    </div>
  `
    )
    .join('')

  const productRows = byProductList
    .slice(0, 10)
    .map(
      (p) => `
    <div class="thermal-line font-mono">
      <span>${p.productName.substring(0, 16)} x${formatNum(p.totalQuantity)}</span>
      <strong>${formatNum(p.totalCommissionBaseAmount)}</strong>
    </div>
  `
    )
    .join('')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Commission Thermal Slip</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body {
          font-family: 'Noto Sans Lao', Arial, sans-serif;
          width: 80mm;
          margin: 0;
          padding: 6px 8px;
          font-size: 11px;
          color: #000;
          line-height: 1.3;
        }
        .thermal-header { text-align: center; margin-bottom: 8px; border-bottom: 1px dashed #000; padding-bottom: 6px; }
        .thermal-company-name { font-size: 14px; font-weight: bold; }
        .thermal-company-sub { font-size: 10px; color: #444; }
        .thermal-filter-box { text-align: center; font-size: 10px; margin-bottom: 8px; }
        .thermal-title { font-size: 12px; font-weight: bold; margin-bottom: 2px; }
        .thermal-summary { margin-bottom: 8px; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 6px 0; }
        .thermal-summary-title { font-weight: bold; font-size: 11px; margin-bottom: 4px; text-align: center; }
        .thermal-line { display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 2px; }
        .thermal-subtitle { font-weight: bold; font-size: 11px; margin: 6px 0 3px 0; text-align: center; text-decoration: underline; }
        .thermal-currency-section { margin-bottom: 6px; }
        .thermal-footer { margin-top: 10px; text-align: center; font-size: 9px; color: #555; border-top: 1px dashed #000; padding-top: 6px; }
        .font-mono { font-family: monospace, 'Noto Sans Lao'; }
        @media print {
          @page { size: 80mm auto; margin: 0; }
          body { width: 80mm; padding: 4px; }
        }
      </style>
    </head>
    <body>
      ${generateCompanyHeader(companyData, companyLogo, true)}
      ${generateFilterSection({ fromDate, toDate, selectedLabels, isThermal: true })}
      ${generateSummarySection({ summary, formatNum, currencyCode, isThermal: true })}
      ${generateCurrencyBreakdownSection({ summary, formatNum, isThermal: true })}

      ${byUserList.length ? `
        <div class="thermal-subtitle">ສະຫຼຸບຕາມຜູ້ຂາຍ (Top Salespersons)</div>
        ${userRows}
      ` : ''}

      ${byProductList.length ? `
        <div class="thermal-subtitle">ສະຫຼຸບຕາມສິນຄ້າ (Top Products)</div>
        ${productRows}
      ` : ''}

      <div class="thermal-footer">
        <div>ພິມເມື່ອ: ${printTime}</div>
        <div>ພິມໂດຍ: ${userName}</div>
        <div>- ຂອບໃຈ -</div>
      </div>
    </body>
    </html>
  `
}

/**
 * Generate Complete Formal A4 HTML Document
 */
const generateFormalHTML = ({
  companyData,
  companyLogo,
  fromDate,
  toDate,
  summary,
  reportLines = [],
  byProductList = [],
  byUserList = [],
  activeTab = 'all',
  selectedLabels = {},
  user,
  formatNum,
  currencyCode = 'LAK',
}) => {
  let contentTables = ''

  const tabStr = String(activeTab).toLowerCase()
  if (activeTab === 2 || tabStr === 'salesperson' || tabStr === 'byuser' || tabStr === 'user') {
    // Only By Salesperson
    contentTables = generateSalespersonTable({ byUserList, formatNum, currencyCode })
  } else if (activeTab === 1 || tabStr === 'product' || tabStr === 'byproduct') {
    // Only By Product
    contentTables = generateProductTable({ byProductList, formatNum, currencyCode })
  } else if (activeTab === 0 || tabStr === 'transactions' || tabStr === 'lines' || tabStr === 'detail') {
    // Only Detailed Transactions
    contentTables = generateTransactionTable({ reportLines, formatNum, currencyCode })
  } else {
    // Comprehensive 'all' mode: Show Salesperson Summary, Product Summary, and Transactions
    contentTables = `
      ${generateSalespersonTable({ byUserList, formatNum, currencyCode })}
      <div style="margin-top: 25px;"></div>
      ${generateProductTable({ byProductList, formatNum, currencyCode })}
      <div style="margin-top: 25px;"></div>
      ${generateTransactionTable({ reportLines, formatNum, currencyCode })}
    `
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>ລາຍງານຄ່ານາຍໜ້າການຂາຍສິນຄ້າ - Sales Commission Report</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Arial', sans-serif;
          color: #1a1a1a;
          background: #fff;
          margin: 0;
          padding: 12mm 15mm;
          font-size: 11px;
          line-height: 1.4;
          width: 100%;
        }

        @page {
          size: A4 landscape;
          margin: 10mm 12mm;
        }

        /* Header Styling */
        .report-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 12px;
          border-bottom: 2px solid #01532B;
          margin-bottom: 14px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .company-logo {
          width: 58px;
          height: 58px;
          object-fit: contain;
          border-radius: 6px;
        }

        .logo-placeholder {
          width: 54px;
          height: 54px;
          background: #01532B;
          color: white;
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }

        .company-details {
          display: flex;
          flex-direction: column;
        }

        .company-name {
          font-size: 17px;
          font-weight: 700;
          color: #01532B;
          margin: 0 0 2px 0;
        }

        .company-meta {
          font-size: 10px;
          color: #555;
          line-height: 1.3;
        }

        .header-right {
          text-align: right;
        }

        .report-title-badge {
          display: inline-block;
          background: #e8f5e9;
          color: #01532B;
          font-size: 9px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 12px;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .report-title {
          font-size: 16px;
          font-weight: 700;
          color: #111;
          margin: 0 0 2px 0;
        }

        .report-subtitle {
          font-size: 10.5px;
          color: #666;
        }

        /* Filter Card */
        .filter-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 8px 14px;
          margin-bottom: 14px;
        }

        .filter-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .filter-item {
          display: flex;
          flex-direction: column;
        }

        .filter-label {
          font-size: 9.5px;
          color: #64748b;
          font-weight: 600;
          margin-bottom: 1px;
        }

        .filter-value {
          font-size: 11px;
          font-weight: 600;
          color: #0f172a;
        }

        /* KPI Cards Container */
        .kpi-container {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 12px;
          margin-bottom: 14px;
        }

        .kpi-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 10px 14px;
        }

        .kpi-card.highlight {
          background: #f0fdf4;
          border: 1.5px solid #86efac;
        }

        .kpi-title {
          font-size: 10px;
          font-weight: 600;
          color: #475569;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .kpi-value {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          font-family: monospace, 'Noto Sans Lao';
        }

        .kpi-unit {
          font-size: 11px;
          font-weight: 600;
          color: #01532B;
        }

        .kpi-desc {
          font-size: 9px;
          color: #64748b;
          margin-top: 2px;
        }

        .text-primary {
          color: #01532B !important;
        }

        /* Currency Breakdown Box */
        .currency-breakdown-box {
          background: #ffffff;
          border: 1px dashed #cbd5e1;
          border-radius: 8px;
          padding: 8px 12px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .currency-box-title {
          font-size: 10.5px;
          font-weight: 700;
          color: #334155;
        }

        .currency-chips-wrapper {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .currency-chip {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 3px 8px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
        }

        .chip-code {
          font-weight: 700;
          color: #01532B;
        }

        .chip-amount {
          font-weight: 700;
          font-family: monospace, 'Noto Sans Lao';
        }

        .chip-count {
          font-size: 9px;
          color: #64748b;
        }

        /* Tables Section */
        .table-section {
          margin-bottom: 16px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .section-heading h3 {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .badge-count {
          background: #e2e8f0;
          color: #334155;
          font-size: 9.5px;
          font-weight: 600;
          padding: 1px 7px;
          border-radius: 10px;
        }

        .report-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 10.5px;
          background: #fff;
        }

        .report-table th,
        .report-table td {
          border: 1px solid #cbd5e1;
          padding: 6px 8px;
        }

        .report-table th {
          background: #f1f5f9;
          color: #1e293b;
          font-weight: 700;
          text-align: left;
          font-size: 10px;
        }

        .report-table tbody tr:nth-child(even) {
          background-color: #f8fafc;
        }

        .report-table tbody tr:hover {
          background-color: #f1f5f9;
        }

        .total-row {
          background: #e2e8f0 !important;
          font-weight: 700;
        }

        .total-row td {
          border-top: 2px solid #01532B !important;
          border-bottom: 2px solid #01532B !important;
        }

        .text-center { text-align: center !important; }
        .text-right { text-align: right !important; }
        .text-left { text-align: left !important; }
        .font-mono { font-family: monospace, 'Noto Sans Lao'; }
        .font-weight-bold { font-weight: 700; }
        .font-weight-medium { font-weight: 500; }
        .text-muted { color: #64748b; }

        .no-data {
          text-align: center;
          padding: 16px;
          color: #94a3b8;
          border: 1px dashed #cbd5e1;
          border-radius: 6px;
        }

        /* Signatures Section */
        .signatures-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 25px;
          padding-top: 15px;
          page-break-inside: avoid;
        }

        .signature-column {
          text-align: center;
        }

        .sig-role {
          font-size: 11px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 45px;
        }

        .sig-space {
          height: 10px;
        }

        .sig-line {
          border-bottom: 1px dotted #475569;
          margin: 0 25px 8px 25px;
        }

        .sig-name {
          font-size: 10px;
          color: #64748b;
        }

        /* Report Footer */
        .report-footer {
          margin-top: 20px;
          padding-top: 8px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          font-size: 9.5px;
          color: #64748b;
          page-break-inside: avoid;
        }

        /* Print Media Queries */
        @media print {
          body {
            padding: 0;
            background: #fff;
          }
          .no-print {
            display: none !important;
          }
          tr {
            page-break-inside: avoid;
          }
          .signatures-section {
            page-break-inside: avoid;
          }
        }
      </style>
    </head>
    <body>
      ${generateCompanyHeader(companyData, companyLogo, false)}
      ${generateFilterSection({ fromDate, toDate, selectedLabels, isThermal: false })}
      ${generateSummarySection({ summary, formatNum, currencyCode, isThermal: false })}
      ${generateCurrencyBreakdownSection({ summary, formatNum, isThermal: false })}
      ${contentTables}
      ${generateSignaturesSection()}
      ${generateFooterSection(user)}
    </body>
    </html>
  `
}

/**
 * Open isolated print window and trigger print dialog
 */
const openPrintWindow = (htmlContent, isFormal = true) => {
  try {
    const windowWidth = isFormal ? 1080 : 450
    const windowHeight = isFormal ? 850 : 700

    const printWin = window.open(
      '',
      '_blank',
      `left=50,top=50,width=${windowWidth},height=${windowHeight},toolbar=0,scrollbars=1,status=0`
    )

    if (!printWin) {
      throw new Error(
        'ບໍ່ສາມາດເປີດໜ້າຕ່າງພິມໄດ້. ກະລຸນາກວດສອບການບລັອກປັອບອັບ (Popup Blocker) ໃນ Browser ຂອງທ່ານ.'
      )
    }

    printWin.document.open()
    printWin.document.write(htmlContent)
    printWin.document.close()

    printWin.onload = () => {
      setTimeout(() => {
        try {
          printWin.focus()
          printWin.print()
          printWin.close()
        } catch (e) {
          console.error('Print execution error:', e)
        }
      }, 700)
    }

    // Fallback in case onload does not trigger
    setTimeout(() => {
      if (printWin && !printWin.closed) {
        try {
          printWin.focus()
          printWin.print()
          printWin.close()
        } catch (e) {
          console.warn('Fallback print error:', e)
        }
      }
    }, 2000)
  } catch (error) {
    console.error('Error in openPrintWindow:', error)
    if (typeof alert !== 'undefined') {
      alert('Error printing report: ' + error.message)
    }
  }
}

/**
 * Main function to generate and print Sales Commission Report
 *
 * @param {Object} params
 * @param {Array}  params.reportLines         Detailed transaction lines
 * @param {Array}  params.byProductList       Summary by product
 * @param {Array}  params.byUserList          Summary by salesperson
 * @param {Object} params.summary             Summary KPIs object (totalCommissionBase, currencyTotals, etc.)
 * @param {String} params.fromDate            Start date (YYYY-MM-DD)
 * @param {String} params.toDate              End date (YYYY-MM-DD)
 * @param {Number|String} params.activeTab    0: Detailed, 1: By Product, 2: By Salesperson, 'all': Full Report
 * @param {String} params.mode                'formal' (A4 landscape) or 'thermal' (80mm)
 * @param {Object} params.companyData         Company configuration object
 * @param {String} params.companyLogo         Resolved URL to company logo
 * @param {Object} params.user                Current logged-in user
 * @param {Object} params.selectedLabels      Human-readable names of active filters { salesperson, product, category }
 * @param {Function} params.formatNumber      Optional custom number formatter
 * @param {String} params.currencyCode        Base currency code (e.g. 'LAK')
 */
export const printCommissionReportSummary = (params) => {
  try {
    const {
      reportLines = [],
      byProductList = [],
      byUserList = [],
      summary = {},
      fromDate,
      toDate,
      activeTab = 'all',
      mode = 'formal',
      companyData = {},
      companyLogo = '',
      user = {},
      selectedLabels = {},
      formatNumber = defaultFormatNumber,
      currencyCode = 'LAK',
    } = params

    console.log('🖨️ Generating Sales Commission Report. Mode:', mode, 'Tab:', activeTab)

    if (mode === 'thermal') {
      const thermalHTML = generateThermalHTML({
        companyData,
        companyLogo,
        fromDate,
        toDate,
        summary,
        byUserList,
        byProductList,
        selectedLabels,
        user,
        formatNum: formatNumber,
        currencyCode,
      })
      openPrintWindow(thermalHTML, false)
    } else {
      const formalHTML = generateFormalHTML({
        companyData,
        companyLogo,
        fromDate,
        toDate,
        summary,
        reportLines,
        byProductList,
        byUserList,
        activeTab,
        selectedLabels,
        user,
        formatNum: formatNumber,
        currencyCode,
      })
      openPrintWindow(formalHTML, true)
    }
  } catch (error) {
    console.error('Error generating commission report print:', error)
    if (typeof alert !== 'undefined') {
      alert('Error printing commission report: ' + error.message)
    }
  }
}

export default printCommissionReportSummary
