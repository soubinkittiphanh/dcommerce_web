/**
 * Common Print Templates for Beerlao Owner's Packaging & Packing Product Sales Summary Report
 * Generates official A4 documents with Lao font support and signature blocks.
 */

const formatNumber = (val) => {
  if (val === undefined || val === null || isNaN(val)) return '0'
  return Number(val).toLocaleString('en-US')
}

const formatDate = (dateStr) => {
  if (!dateStr) return '-'
  return dateStr
}

const formatDateTime = (dt) => {
  if (!dt) return '-'
  const d = new Date(dt)
  if (isNaN(d.getTime())) return dt.replace('T', ' ').substr(0, 16)
  return d.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getBaseUrl = () => {
  let url = ''
  if (typeof window !== 'undefined') {
    const savedUrl = window.localStorage.getItem('api_base_url')
    if (savedUrl) {
      url = savedUrl
    } else if (window.$nuxt && window.$nuxt.$axios && window.$nuxt.$axios.defaults.baseURL) {
      url = window.$nuxt.$axios.defaults.baseURL
    } else if (window.location && window.location.origin && window.location.origin.startsWith('http')) {
      url = window.location.origin
    }
  }
  return url.replace(/\/api\/?$/, '').replace(/\/+$/, '')
}

const getCompanyLogoUrl = (companyData) => {
  if (!companyData) return ''
  if (companyData.logoUrl) return companyData.logoUrl
  const baseUrl = getBaseUrl()

  const profilePath = companyData.profile_image_path || companyData.apiData?.profile_image_path || companyData.imageUrl
  if (profilePath && profilePath !== 'default-logo.png' && profilePath !== 'default-logo.jpg') {
    if (profilePath.startsWith('http://') || profilePath.startsWith('https://') || profilePath.startsWith('data:image') || profilePath.startsWith('blob:')) {
      return profilePath
    }
    return `${baseUrl}/${profilePath.replace(/^\//, '')}`
  }

  const logoName = companyData.companyLogo || companyData.ticketLogo || companyData.logo || companyData.dcLogo
  if (logoName && logoName !== 'default-logo.png' && logoName !== 'default-logo.jpg') {
    if (logoName.startsWith('http://') || logoName.startsWith('https://') || logoName.startsWith('data:image') || logoName.startsWith('blob:')) {
      return logoName
    }
    if (logoName.includes('/')) {
      return `${baseUrl}/${logoName.replace(/^\//, '')}`
    }
    return `${baseUrl}/uploads/${logoName}`
  }

  return ''
}

const getBaseCSS = () => `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700;800;900&display=swap');

  @page {
    size: A4 portrait;
    margin: 12mm 10mm 15mm 10mm;
  }
  @page landscape-page {
    size: A4 landscape;
    margin: 10mm 10mm 12mm 10mm;
  }
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans Lao', sans-serif !important;
  }
  html, body {
    margin: 0;
    padding: 10px;
    color: #1e293b;
    background: #fff;
    font-size: 11px;
    line-height: 1.4;
    font-family: 'Noto Sans Lao', sans-serif !important;
    -webkit-font-smoothing: antialiased;
  }
  table, th, td, div, span, b, p, h1, h2, h3, tr {
    font-family: 'Noto Sans Lao', sans-serif !important;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #b45309;
    padding-bottom: 10px;
    margin-bottom: 12px;
  }
  .header.teal-border {
    border-bottom: 2px solid #0f766e;
  }
  .company-brand-box {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .company-logo-img {
    max-height: 52px;
    max-width: 120px;
    object-fit: contain;
    border-radius: 4px;
  }
  .company-name {
    font-size: 15px;
    font-weight: 900;
    color: #92400e;
    text-transform: uppercase;
    line-height: 1.2;
  }
  .company-name.teal-text {
    color: #0f766e;
  }
  .company-sub {
    font-size: 10px;
    color: #64748b;
    margin-top: 3px;
    line-height: 1.4;
  }
  .report-title-box {
    text-align: right;
  }
  .report-main-title {
    font-size: 14px;
    font-weight: 900;
    color: #0f172a;
    margin: 0 0 3px 0;
  }
  .report-sub-title {
    font-size: 10px;
    color: #475569;
  }
  .filter-meta-bar {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 6px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    color: #334155;
    margin-bottom: 12px;
  }
  .filter-meta-item b {
    color: #0f172a;
  }

  /* KPI Summary Mini Cards */
  .kpi-row {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
  }
  .kpi-card {
    flex: 1;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 6px 8px;
    background: #f8fafc;
  }
  .kpi-card.amber { background: #fffbeb; border-color: #fde68a; }
  .kpi-card.blue { background: #eff6ff; border-color: #bfdbfe; }
  .kpi-card.teal { background: #f0fdf4; border-color: #bbf7d0; }
  .kpi-card.purple { background: #faf5ff; border-color: #e9d5ff; }

  .kpi-label {
    font-size: 9px;
    color: #64748b;
    font-weight: bold;
    text-transform: uppercase;
  }
  .kpi-val {
    font-size: 13px;
    font-weight: 900;
    margin-top: 2px;
    color: #0f172a;
  }
  .kpi-val.amber-text { color: #b45309; }
  .kpi-val.blue-text { color: #1d4ed8; }
  .kpi-val.teal-text { color: #047857; }
  .kpi-val.purple-text { color: #6b21a8; }
  .kpi-sub {
    font-size: 8.5px;
    color: #64748b;
    margin-top: 1px;
  }

  /* Data Table */
  table.data-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 15px;
    font-size: 10px;
  }
  table.data-table th {
    background: #0f172a;
    color: #fff;
    padding: 6px 8px;
    text-align: left;
    font-weight: 800;
    font-size: 9.5px;
    border: 1px solid #334155;
  }
  table.data-table th.amber-bg {
    background: #b45309;
    border-color: #92400e;
  }
  table.data-table th.teal-bg {
    background: #0f766e;
    border-color: #115e59;
  }
  table.data-table td {
    padding: 5px 8px;
    border: 1px solid #cbd5e1;
    color: #1e293b;
  }
  table.data-table tr:nth-child(even) {
    background: #f8fafc;
  }
  table.data-table tr.total-row {
    background: #fef3c7 !important;
    font-weight: 900;
    border-top: 2px solid #b45309;
  }
  table.data-table tr.total-row-teal {
    background: #ccfbf1 !important;
    font-weight: 900;
    border-top: 2px solid #0f766e;
  }
  table.data-table td.text-right, table.data-table th.text-right {
    text-align: right;
  }
  table.data-table td.text-center, table.data-table th.text-center {
    text-align: center;
  }

  .chip-tag {
    display: inline-block;
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 8.5px;
    font-weight: bold;
  }
  .chip-foc { background: #fce7f3; color: #be185d; }
  .chip-delivered { background: #fef3c7; color: #92400e; }
  .chip-returned { background: #dcfce7; color: #166534; }
  .chip-deposit { background: #e0e7ff; color: #3730a3; }

  /* Signatures Section */
  .signatures {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    page-break-inside: avoid;
  }
  .sign-box {
    width: 30%;
    text-align: center;
  }
  .sign-title {
    font-size: 10px;
    font-weight: bold;
    color: #1e293b;
    margin-bottom: 45px;
  }
  .sign-line {
    border-bottom: 1px dashed #94a3b8;
    width: 80%;
    margin: 0 auto 5px auto;
  }
  .sign-name {
    font-size: 9.5px;
    color: #64748b;
  }

  .footer-bar {
    margin-top: 15px;
    border-top: 1px solid #cbd5e1;
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    font-size: 8.5px;
    color: #94a3b8;
  }

  @media print {
    body { padding: 0; }
    .no-print { display: none !important; }
  }
`

const openPrintWindow = (html) => {
  const printWindow = window.open(
    '',
    '_blank',
    'width=1100,height=850,top=40,left=40,toolbar=no,menubar=no,scrollbars=yes,status=no'
  )

  if (!printWindow) {
    alert('ກະລຸນາອະນຸຍາດ Popup ໃນ Browser ເພື່ອພິມລາຍງານ (Please allow popups to print)')
    return
  }

  printWindow.document.open()
  printWindow.document.write(html)
  printWindow.document.close()

  const triggerPrint = () => {
    printWindow.focus()
    printWindow.print()
  }

  // Wait for Noto Sans Lao font to fully load before triggering print
  if (printWindow.document.fonts && printWindow.document.fonts.ready) {
    printWindow.document.fonts.ready
      .then(() => {
        setTimeout(triggerPrint, 300)
      })
      .catch(() => {
        setTimeout(triggerPrint, 500)
      })
  } else {
    printWindow.onload = () => {
      setTimeout(triggerPrint, 400)
    }
  }
}

// =============================================================================
// 1. PRINT TAB 1: PACKING PRODUCTS (FULL BEER CASES & REVENUE)
// =============================================================================
export const printPackingProductsA4 = ({
  companyData = {},
  user = {},
  clientLabel = 'ທຸກລູກຄ້າ',
  locationLabel = 'ທຸກສາຂາ/ສາງ',
  startDate = '',
  endDate = '',
  packingProducts = [],
  kpiData = {}
}) => {
  const companyName = companyData?.name || 'ຕົວແທນຈຳໜ່າຍ ເບຍລາວ / Beerlao Agency'
  const companyAddress = companyData?.address || ''
  const companyTel = companyData?.tel || companyData?.telephone || ''
  const companyTaxId = companyData?.taxId || ''
  const logoUrl = getCompanyLogoUrl(companyData)
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.username || 'Admin'

  const mainRevenue = kpiData?.revenueByCurrency?.[0]
    ? `${formatNumber(kpiData.revenueByCurrency[0].totalAmount)} ${kpiData.revenueByCurrency[0].currencySymbol || '₭'}`
    : '0 ₭'

  let rowsHTML = ''
  packingProducts.forEach((p, idx) => {
    rowsHTML += `
      <tr>
        <td class="text-center">${idx + 1}</td>
        <td>
          <b>${p.productName}</b>
          <div style="font-size: 8.5px; color: #64748b;">${p.barCode || '-'}</div>
        </td>
        <td class="text-right">${formatNumber(p.paidQty)}</td>
        <td class="text-right">
          ${p.focQty > 0 ? `<span class="chip-tag chip-foc">+${formatNumber(p.focQty)}</span>` : '-'}
        </td>
        <td class="text-right"><b>${formatNumber(p.totalCases)}</b> ລັງ</td>
        <td class="text-right" style="color: #b45309; font-weight: bold;">
          ${formatNumber(p.totalSales)} ${p.currencySymbol || '₭'}
        </td>
        <td class="text-right">${formatNumber(p.dispatchedCrates)} ລັງ</td>
        <td class="text-right">${formatNumber(p.dispatchedBottles)} ແກ້ວ</td>
      </tr>
    `
  })

  const html = `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8" />
      <title>ລາຍງານການຂາຍສິນຄ້າທີ່ບັນຈຸ - A4</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
      <style>
        ${getBaseCSS()}
        @page { size: A4 landscape; margin: 10mm; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="company-brand-box">
          ${logoUrl ? `
            <img src="${logoUrl}" alt="Company Logo" class="company-logo-img" onerror="this.style.display='none';" />
          ` : ''}
          <div>
            <div class="company-name">${companyName}</div>
            <div class="company-sub">
              ${companyAddress ? companyAddress + ' | ' : ''}
              ${companyTel ? `ໂທ: ${companyTel}` : ''}
              ${companyTaxId ? ` | ເລກພາສີ: ${companyTaxId}` : ''}
            </div>
          </div>
        </div>
        <div class="report-title-box">
          <div class="report-main-title">ລາຍງານການຂາຍສິນຄ້າທີ່ບັນຈຸ (ເບຍເຕັມລັງ)</div>
          <div class="report-sub-title">Packing Products Sales Report (Finished Beer Cases & FOC Promos)</div>
        </div>
      </div>

      <div class="filter-meta-bar">
        <div class="filter-meta-item"><b>ລູກຄ້າ:</b> ${clientLabel}</div>
        <div class="filter-meta-item"><b>ສາຂາ/ສາງ:</b> ${locationLabel}</div>
        <div class="filter-meta-item"><b>ຊ່ວງວັນທີ:</b> ${formatDate(startDate)} ຫາ ${formatDate(endDate)}</div>
        <div class="filter-meta-item"><b>ວັນທີພິມ:</b> ${printTime}</div>
      </div>

      <!-- KPI Summary Row -->
      <div class="kpi-row">
        <div class="kpi-card amber">
          <div class="kpi-label">ຍອດຂາຍສິນຄ້າລວມ (Gross Sales)</div>
          <div class="kpi-val amber-text">${mainRevenue}</div>
          <div class="kpi-sub">ລວມຍອດຂາຍເບຍທຸກລາຍການ</div>
        </div>
        <div class="kpi-card blue">
          <div class="kpi-label">ຈຳນວນລັງທີ່ຂາຍ (Paid Cases)</div>
          <div class="kpi-val blue-text">${formatNumber(kpiData.totalPaidCases)} ລັງ</div>
          <div class="kpi-sub">ລັງທີ່ຄິດໄລ່ເງິນ</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">ຈຳນວນແຖມ (FOC Promo Cases)</div>
          <div class="kpi-val" style="color: #be185d;">${formatNumber(kpiData.totalFocCases)} ລັງ</div>
          <div class="kpi-sub">ເບຍແຖມໂປຣໂມຊັ່ນ</div>
        </div>
        <div class="kpi-card teal">
          <div class="kpi-label">ລວມລັງທີ່ຈ່າຍອອກ (Total Cases Out)</div>
          <div class="kpi-val teal-text">${formatNumber(kpiData.totalCasesSold)} ລັງ</div>
          <div class="kpi-sub">${formatNumber(kpiData.totalDispatchedCrates)} ລັງ / ${formatNumber(kpiData.totalDispatchedBottles)} ແກ້ວ</div>
        </div>
      </div>

      <!-- Table -->
      <table class="data-table">
        <thead>
          <tr>
            <th class="amber-bg" style="width: 32px; text-align: center;">ລ/ດ</th>
            <th class="amber-bg">ຊື່ສິນຄ້າ (Product Name)</th>
            <th class="amber-bg text-right" style="width: 90px;">ຂາຍ (Paid)</th>
            <th class="amber-bg text-right" style="width: 85px;">ແຖມ (FOC)</th>
            <th class="amber-bg text-right" style="width: 105px;">ລວມລັງຂາຍ</th>
            <th class="amber-bg text-right" style="width: 140px;">ຍອດຂາຍ (Revenue)</th>
            <th class="amber-bg text-right" style="width: 110px;">ລັງທີ່ຈ່າຍອອກ</th>
            <th class="amber-bg text-right" style="width: 110px;">ແກ້ວທີ່ຈ່າຍອອກ</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHTML}
          <tr class="total-row">
            <td colspan="2" style="text-align: center;">🔹 ລວມຍອດທັງໝົດ (Grand Total)</td>
            <td class="text-right">${formatNumber(kpiData.totalPaidCases)}</td>
            <td class="text-right">${formatNumber(kpiData.totalFocCases)}</td>
            <td class="text-right" style="color: #1d4ed8;">${formatNumber(kpiData.totalCasesSold)} ລັງ</td>
            <td class="text-right" style="color: #b45309;">${mainRevenue}</td>
            <td class="text-right">${formatNumber(kpiData.totalDispatchedCrates)} ລັງ</td>
            <td class="text-right">${formatNumber(kpiData.totalDispatchedBottles)} ແກ້ວ</td>
          </tr>
        </tbody>
      </table>

      <!-- Signatures -->
      <div class="signatures">
        <div class="sign-box">
          <div class="sign-title">ຜູ້ສັງລວມ (Prepared By)</div>
          <div class="sign-line"></div>
          <div class="sign-name">${printedBy}</div>
        </div>
        <div class="sign-box">
          <div class="sign-title">ຫົວໜ້າສາງ / ບັນຊີ (Accountant / Storekeeper)</div>
          <div class="sign-line"></div>
          <div class="sign-name">ວັນທີ: ...../...../..........</div>
        </div>
        <div class="sign-box">
          <div class="sign-title">ເຈົ້າຂອງຮ້ານ / ຜູ້ອຳນວຍການ (Business Owner)</div>
          <div class="sign-line"></div>
          <div class="sign-name">ວັນທີ: ...../...../..........</div>
        </div>
      </div>

      <div class="footer-bar">
        <span>ລະບົບຄຸ້ມຄອງຕົວແທນຈຳໜ່າຍ ເບຍລາວ (DCommerce Agency POS & Packaging)</span>
        <span>ພິມໂດຍ: ${printedBy} | ${printTime}</span>
      </div>
    </body>
    </html>
  `
  openPrintWindow(html)
}

// =============================================================================
// 2. PRINT TAB 2: PACKAGING PRODUCTS (EMPTY ASSETS ACTIVITY)
// =============================================================================
export const printPackagingAssetsA4 = ({
  companyData = {},
  user = {},
  clientLabel = 'ທຸກລູກຄ້າ',
  locationLabel = 'ທຸກສາຂາ/ສາງ',
  startDate = '',
  endDate = '',
  packagingProducts = [],
  kpiData = {}
}) => {
  const companyName = companyData?.name || 'ຕົວແທນຈຳໜ່າຍ ເບຍລາວ / Beerlao Agency'
  const companyAddress = companyData?.address || ''
  const companyTel = companyData?.tel || companyData?.telephone || ''
  const companyTaxId = companyData?.taxId || ''
  const logoUrl = getCompanyLogoUrl(companyData)
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.username || 'Admin'

  let rowsHTML = ''
  packagingProducts.forEach((p, idx) => {
    rowsHTML += `
      <tr>
        <td class="text-center">${idx + 1}</td>
        <td>
          <b>${p.productName}</b>
          <div style="font-size: 8.5px; color: #64748b;">${p.barCode || '-'}</div>
        </td>
        <td class="text-right" style="color: #3730a3; font-weight: bold;">${formatNumber(p.soldQty)}</td>
        <td class="text-right" style="color: #3730a3;">${formatNumber(p.soldAmount)} ₭</td>
        <td class="text-right" style="color: #047857; font-weight: bold;">${formatNumber(p.boughtQty)}</td>
        <td class="text-right" style="color: #047857;">${formatNumber(p.boughtAmount)} ₭</td>
        <td class="text-center font-weight-bold">
          ${p.netQty > 0 ? '+' : ''}${formatNumber(p.netQty)}
        </td>
        <td class="text-right" style="font-weight: bold; color: ${p.netAmount >= 0 ? '#166534' : '#c2410c'};">
          ${p.netAmount >= 0 ? '+' : ''}${formatNumber(p.netAmount)} ₭
        </td>
      </tr>
    `
  })

  const netCash = kpiData.netPackagingCash || 0
  const netQty = (kpiData.totalPackagingSoldQty || 0) - (kpiData.totalPackagingBoughtQty || 0)

  const html = `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8" />
      <title>ລາຍງານການຊື້-ຂາຍສິນຄ້າບັນຈຸພັນ - A4</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
      <style>
        ${getBaseCSS()}
      </style>
    </head>
    <body>
      <div class="header teal-border">
        <div class="company-brand-box">
          ${logoUrl ? `
            <img src="${logoUrl}" alt="Company Logo" class="company-logo-img" onerror="this.style.display='none';" />
          ` : ''}
          <div>
            <div class="company-name teal-text">${companyName}</div>
            <div class="company-sub">
              ${companyAddress ? companyAddress + ' | ' : ''}
              ${companyTel ? `ໂທ: ${companyTel}` : ''}
              ${companyTaxId ? ` | ເລກພາສີ: ${companyTaxId}` : ''}
            </div>
          </div>
        </div>
        <div class="report-title-box">
          <div class="report-main-title" style="color: #0f766e;">ລາຍງານການຊື້-ຂາຍ ແລະ ຄືນມັດຈຳສິນຄ້າບັນຈຸພັນ</div>
          <div class="report-sub-title">Packaging Assets Sales, Deposits & Empties Buy-backs Report</div>
        </div>
      </div>

      <div class="filter-meta-bar">
        <div class="filter-meta-item"><b>ລູກຄ້າ:</b> ${clientLabel}</div>
        <div class="filter-meta-item"><b>ສາຂາ/ສາງ:</b> ${locationLabel}</div>
        <div class="filter-meta-item"><b>ຊ່ວງວັນທີ:</b> ${formatDate(startDate)} ຫາ ${formatDate(endDate)}</div>
        <div class="filter-meta-item"><b>ວັນທີພິມ:</b> ${printTime}</div>
      </div>

      <!-- KPI Summary Row -->
      <div class="kpi-row">
        <div class="kpi-card" style="background: #eef2ff; border-color: #c7d2fe;">
          <div class="kpi-label">ຂາຍ/ມັດຈຳ (Sold / Deposits)</div>
          <div class="kpi-val" style="color: #3730a3;">${formatNumber(kpiData.totalPackagingSoldAmount)} ₭</div>
          <div class="kpi-sub">ຈຳນວນ: ${formatNumber(kpiData.totalPackagingSoldQty)} ໜ່ວຍ</div>
        </div>
        <div class="kpi-card teal">
          <div class="kpi-label">ຮັບຊື້/ຄືນເງິນ (Bought / Refunded)</div>
          <div class="kpi-val teal-text">${formatNumber(kpiData.totalPackagingBoughtAmount)} ₭</div>
          <div class="kpi-sub">ຈຳນວນ: ${formatNumber(kpiData.totalPackagingBoughtQty)} ໜ່ວຍ</div>
        </div>
        <div class="kpi-card ${netCash >= 0 ? 'teal' : 'amber'}">
          <div class="kpi-label">ກະແສເງິນສຸດທິ (Net Packaging Cash)</div>
          <div class="kpi-val ${netCash >= 0 ? 'teal-text' : 'amber-text'}">
            ${netCash >= 0 ? '+' : ''}${formatNumber(netCash)} ₭
          </div>
          <div class="kpi-sub">ຂາຍ/ມັດຈຳ - ຮັບຊື້/ຄືນເງິນ</div>
        </div>
        <div class="kpi-card purple">
          <div class="kpi-label">ອັດຕາການເກັບຄືນ (Recovery Rate)</div>
          <div class="kpi-val purple-text">${kpiData.recoveryRatePercent || 0}%</div>
          <div class="kpi-sub">ເກັບຄືນ: ${formatNumber(kpiData.totalEmptiesRecoveredUnits)} ໜ່ວຍ</div>
        </div>
      </div>

      <!-- Table -->
      <table class="data-table">
        <thead>
          <tr>
            <th class="teal-bg" style="width: 32px; text-align: center;">ລ/ດ</th>
            <th class="teal-bg">ບັນຈຸພັນ (Packaging Asset)</th>
            <th class="teal-bg text-right" style="width: 85px;">ຂາຍ (Qty)</th>
            <th class="teal-bg text-right" style="width: 115px;">ຍອດຂາຍ/ມັດຈຳ</th>
            <th class="teal-bg text-right" style="width: 85px;">ຮັບຊື້ (Qty)</th>
            <th class="teal-bg text-right" style="width: 115px;">ຍອດຮັບຊື້/ຄືນ</th>
            <th class="teal-bg text-center" style="width: 80px;">ສ່ວນຕ່າງຈຳນວນ</th>
            <th class="teal-bg text-right" style="width: 120px;">ກະແສເງິນສຸດທິ</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHTML}
          <tr class="total-row-teal">
            <td colspan="2" style="text-align: center;">🔹 ລວມຍອດບັນຈຸພັນ (Total Packaging)</td>
            <td class="text-right" style="color: #3730a3;">${formatNumber(kpiData.totalPackagingSoldQty)}</td>
            <td class="text-right" style="color: #3730a3;">${formatNumber(kpiData.totalPackagingSoldAmount)} ₭</td>
            <td class="text-right" style="color: #047857;">${formatNumber(kpiData.totalPackagingBoughtQty)}</td>
            <td class="text-right" style="color: #047857;">${formatNumber(kpiData.totalPackagingBoughtAmount)} ₭</td>
            <td class="text-center">${netQty > 0 ? '+' : ''}${formatNumber(netQty)}</td>
            <td class="text-right" style="color: ${netCash >= 0 ? '#166534' : '#c2410c'};">
              ${netCash >= 0 ? '+' : ''}${formatNumber(netCash)} ₭
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Signatures -->
      <div class="signatures">
        <div class="sign-box">
          <div class="sign-title">ຜູ້ສັງລວມ (Prepared By)</div>
          <div class="sign-line"></div>
          <div class="sign-name">${printedBy}</div>
        </div>
        <div class="sign-box">
          <div class="sign-title">ຫົວໜ້າສາງ / ບັນຊີ (Accountant / Storekeeper)</div>
          <div class="sign-line"></div>
          <div class="sign-name">ວັນທີ: ...../...../..........</div>
        </div>
        <div class="sign-box">
          <div class="sign-title">ເຈົ້າຂອງຮ້ານ / ຜູ້ອຳນວຍການ (Business Owner)</div>
          <div class="sign-line"></div>
          <div class="sign-name">ວັນທີ: ...../...../..........</div>
        </div>
      </div>

      <div class="footer-bar">
        <span>ລະບົບຄຸ້ມຄອງຕົວແທນຈຳໜ່າຍ ເບຍລາວ (DCommerce Agency POS & Packaging)</span>
        <span>ພິມໂດຍ: ${printedBy} | ${printTime}</span>
      </div>
    </body>
    </html>
  `
  openPrintWindow(html)
}

// =============================================================================
// 3. PRINT TAB 3: CUSTOMER MOVEMENT TIMELINE
// =============================================================================
export const printCustomerTimelineA4 = ({
  companyData = {},
  user = {},
  clientLabel = 'ທຸກລູກຄ້າ',
  locationLabel = 'ທຸກສາຂາ/ສາງ',
  startDate = '',
  endDate = '',
  customerProfile = null,
  customerMovements = []
}) => {
  const companyName = companyData?.name || 'ຕົວແທນຈຳໜ່າຍ ເບຍລາວ / Beerlao Agency'
  const companyAddress = companyData?.address || ''
  const companyTel = companyData?.tel || companyData?.telephone || ''
  const companyTaxId = companyData?.taxId || ''
  const logoUrl = getCompanyLogoUrl(companyData)
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.username || 'Admin'

  const getTransactionTypeLabel = (type) => {
    switch (type) {
      case 'DELIVERED_OUT': return 'ສົ່ງອອກ (ຕິດໜີ້)'
      case 'RETURNED_IN': return 'ຮັບຄືນ (ຕັດໜີ້)'
      case 'PAID_DEPOSIT': return 'ຈ່າຍມັດຈຳ'
      case 'REFUNDED_DEPOSIT': return 'ຄືນມັດຈຳ'
      case 'WRITE_OFF': return 'ຕັດສູນ'
      default: return type
    }
  }

  let rowsHTML = ''
  customerMovements.forEach((m, idx) => {
    const isOut = m.qtyChange > 0
    rowsHTML += `
      <tr>
        <td class="text-center">${idx + 1}</td>
        <td>${formatDateTime(m.createdAt)}</td>
        <td>
          <b>${m.clientName || '-'}</b>
          ${m.clientCompany ? `<div style="font-size: 8.5px; color: #64748b;">${m.clientCompany}</div>` : ''}
        </td>
        <td>
          <span class="chip-tag ${isOut ? 'chip-delivered' : 'chip-returned'}">
            ${getTransactionTypeLabel(m.transactionType)}
          </span>
        </td>
        <td>${m.packagingName || '-'}</td>
        <td class="text-right" style="font-weight: bold; color: ${isOut ? '#b45309' : '#047857'};">
          ${m.qtyChange > 0 ? '+' : ''}${formatNumber(m.qtyChange)}
        </td>
        <td class="text-right"><b>${formatNumber(m.balanceAfter)}</b></td>
        <td class="text-right">
          ${Number(m.depositAmount) > 0 ? `${formatNumber(m.depositAmount)} ₭` : '-'}
        </td>
        <td>${m.notes || '-'}</td>
      </tr>
    `
  })

  // Customer debt card block if specific client profile is present
  let profileSectionHTML = ''
  if (customerProfile) {
    profileSectionHTML = `
      <div style="background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 6px; padding: 8px 12px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 13px; font-weight: 900; color: #92400e;">
            🏪 ${customerProfile.name} ${customerProfile.company ? `(${customerProfile.company})` : ''}
          </div>
          <div style="font-size: 9.5px; color: #475569; margin-top: 2px;">
            ໂທ: ${customerProfile.telephone || '-'} | ທີ່ຢູ່: ${customerProfile.address || 'ບໍ່ມີຂໍ້ມູນ'}
          </div>
        </div>
        <div style="display: flex; gap: 10px;">
          <div style="background: #b45309; color: #fff; border-radius: 4px; padding: 4px 10px; font-size: 11px; font-weight: bold; text-align: center;">
            📦 ລັງຕິດໜີ້ຄ້າງສົ່ງ: ${formatNumber(customerProfile.currentCratesOwed)} ລັງ
          </div>
          <div style="background: #0f766e; color: #fff; border-radius: 4px; padding: 4px 10px; font-size: 11px; font-weight: bold; text-align: center;">
            🍺 ແກ້ວຕິດໜີ້ຄ້າງສົ່ງ: ${formatNumber(customerProfile.currentBottlesOwed)} ແກ້ວ
          </div>
        </div>
      </div>
    `
  }

  const html = `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="utf-8" />
      <title>ລາຍງານປະຫວັດການເຄື່ອນໄຫວບັນຈຸພັນລູກຄ້າ - A4</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
      <style>
        ${getBaseCSS()}
      </style>
    </head>
    <body>
      <div class="header">
        <div class="company-brand-box">
          ${logoUrl ? `
            <img src="${logoUrl}" alt="Company Logo" class="company-logo-img" onerror="this.style.display='none';" />
          ` : ''}
          <div>
            <div class="company-name">${companyName}</div>
            <div class="company-sub">
              ${companyAddress ? companyAddress + ' | ' : ''}
              ${companyTel ? `ໂທ: ${companyTel}` : ''}
              ${companyTaxId ? ` | ເລກພາສີ: ${companyTaxId}` : ''}
            </div>
          </div>
        </div>
        <div class="report-title-box">
          <div class="report-main-title">ປະຫວັດການສົ່ງອອກ ແລະ ຮັບຄືນບັນຈຸພັນ</div>
          <div class="report-sub-title">Customer Packaging Movement Timeline & Running Debt Balance</div>
        </div>
      </div>

      <div class="filter-meta-bar">
        <div class="filter-meta-item"><b>ລູກຄ້າ:</b> ${clientLabel}</div>
        <div class="filter-meta-item"><b>ສາຂາ/ສາງ:</b> ${locationLabel}</div>
        <div class="filter-meta-item"><b>ຊ່ວງວັນທີ:</b> ${formatDate(startDate)} ຫາ ${formatDate(endDate)}</div>
        <div class="filter-meta-item"><b>ວັນທີພິມ:</b> ${printTime}</div>
      </div>

      ${profileSectionHTML}

      <!-- Table -->
      <table class="data-table">
        <thead>
          <tr>
            <th style="width: 30px; text-align: center;">ລ/ດ</th>
            <th style="width: 95px;">ວັນທີ/ເວລາ</th>
            <th style="width: 130px;">ລູກຄ້າ</th>
            <th style="width: 90px;">ປະເພດ</th>
            <th>ບັນຈຸພັນ</th>
            <th class="text-right" style="width: 80px;">ຈຳນວນປ່ຽນ</th>
            <th class="text-right" style="width: 85px;">ຍອດໜີ້ສະສົມ</th>
            <th class="text-right" style="width: 85px;">ມັດຈຳ (LAK)</th>
            <th style="width: 110px;">ໝາຍເຫດ</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHTML}
        </tbody>
      </table>

      <!-- Signatures -->
      <div class="signatures">
        <div class="sign-box">
          <div class="sign-title">ຜູ້ສັງລວມ (Prepared By)</div>
          <div class="sign-line"></div>
          <div class="sign-name">${printedBy}</div>
        </div>
        <div class="sign-box">
          <div class="sign-title">ຜູ້ສົ່ງສິນຄ້າ / ພະນັກງານຂັບລົດ (Driver)</div>
          <div class="sign-line"></div>
          <div class="sign-name">ວັນທີ: ...../...../..........</div>
        </div>
        <div class="sign-box">
          <div class="sign-title">ລູກຄ້າເຊັນຮັບຊາບ (Client Sign)</div>
          <div class="sign-line"></div>
          <div class="sign-name">${customerProfile?.name || 'ຕົວແທນລູກຄ້າ'}</div>
        </div>
      </div>

      <div class="footer-bar">
        <span>ລະບົບຄຸ້ມຄອງຕົວແທນຈຳໜ່າຍ ເບຍລາວ (DCommerce Agency POS & Packaging)</span>
        <span>ພິມໂດຍ: ${printedBy} | ${printTime}</span>
      </div>
    </body>
    </html>
  `
  openPrintWindow(html)
}
