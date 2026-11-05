/**
 * Inventory Stock Valuation Report Print Template
 * Generates an official printable A4 document for inventory stock quantities and valuation.
 */

// Helper to format numbers with commas
const formatNumber = (val) => {
  if (val === null || val === undefined || val === '') return '0'
  const num = typeof val === 'number' ? val : parseFloat(val)
  if (isNaN(num)) return '0'
  return new Intl.NumberFormat('en-US').format(num)
}

// Helper to format currency
const formatCurrency = (val, currencyCode = 'LAK') => {
  if (val === null || val === undefined || val === '') return '0 ' + currencyCode
  const num = typeof val === 'number' ? val : parseFloat(val)
  if (isNaN(num)) return '0 ' + currencyCode
  const symbol = currencyCode === 'LAK' ? '₭' : currencyCode
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
    maximumFractionDigits: currencyCode === 'LAK' ? 0 : 2
  }).format(num) + ' ' + symbol
}

// Format date string
const formatDate = (date = new Date()) => {
  try {
    const d = new Date(date)
    if (isNaN(d.getTime())) return ''
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
  } catch (e) {
    return ''
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
 * Generate Printable HTML for Inventory Stock Valuation Report
 */
export const generateInventoryValueReportHTML = (
  stockList = [],
  companyData = {},
  currencyList = [],
  filters = {}
) => {
  const companyName = companyData?.name || companyData?.companyName || 'D-Commerce Store'
  const companyAddress = companyData?.address || ''
  const companyTel = companyData?.tel || companyData?.telephone || ''
  const companyLogo = companyData?.logo || ''
  const printTime = formatDateTime(new Date())
  const printedBy = filters?.userName || 'Admin'
  const locationName = filters?.locationName || 'ສາງໃຫຍ່ (Main Warehouse)'
  const searchKeyword = filters?.search || ''

  // Determine local currency code
  const localCcy = (currencyList || []).find(c => c.isLocalCCY === true || c.isLocalCCY === 1)
  const currencyCode = localCcy?.code || 'LAK'

  // Calculate aggregations
  const totalItems = stockList.length
  let grandTotalQty = 0
  let grandTotalCostValue = 0
  let grandTotalRetailValue = 0

  stockList.forEach(item => {
    const qty = parseInt(item.cardCount || 0, 10)
    const costValue = parseFloat(item.totalCardValue || 0)
    const retailPrice = parseFloat(item.product?.pro_price || item.pro_price || 0)
    const retailValue = qty * retailPrice

    grandTotalQty += qty
    grandTotalCostValue += costValue
    grandTotalRetailValue += retailValue
  })

  const potentialGrossProfit = grandTotalRetailValue - grandTotalCostValue
  const overallMarginPercent = grandTotalRetailValue > 0
    ? Math.round((potentialGrossProfit / grandTotalRetailValue) * 100)
    : 0

  // Build rows HTML
  const rowsHTML = stockList.map((item, index) => {
    const qty = parseInt(item.cardCount || 0, 10)
    const costValue = parseFloat(item.totalCardValue || 0)
    const avgCost = qty > 0 ? costValue / qty : 0
    const retailPrice = parseFloat(item.product?.pro_price || item.pro_price || 0)
    const retailValue = qty * retailPrice
    const proId = item.product_id || item.product?.pro_id || '-'
    const proName = item.product?.pro_name || item.pro_name || '-'

    return `
      <tr>
        <td class="text-center">${index + 1}</td>
        <td class="text-center font-mono">${proId}</td>
        <td class="font-medium text-left">${proName}</td>
        <td class="text-right font-mono font-bold">${formatNumber(qty)}</td>
        <td class="text-right font-mono">${formatNumber(retailPrice)}</td>
        <td class="text-right font-mono">${formatNumber(avgCost)}</td>
        <td class="text-right font-mono font-bold text-primary">${formatNumber(costValue)}</td>
        <td class="text-right font-mono">${formatNumber(retailValue)}</td>
      </tr>
    `
  }).join('')

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="UTF-8">
      <title>ລາຍງານມູນຄ່າສິນຄ້າຄ້າງສະຕັອກ - ${formatDate()}</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 12mm 10mm 15mm 10mm;
        }

        * {
          box-sizing: border-box;
          font-family: 'Noto Sans Lao', 'Phetsarath OT', Arial, sans-serif;
        }

        body {
          font-size: 11px;
          color: #1f2937;
          margin: 0;
          padding: 0;
          background: #fff;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid #1e40af;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .company-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .company-logo {
          max-height: 50px;
          max-width: 120px;
          object-fit: contain;
        }

        .company-title {
          font-size: 16px;
          font-weight: 700;
          color: #1e3a8a;
          margin: 0 0 2px 0;
        }

        .company-sub {
          font-size: 10px;
          color: #4b5563;
          margin: 0;
        }

        .report-header-right {
          text-align: right;
        }

        .report-title {
          font-size: 15px;
          font-weight: 800;
          color: #1e40af;
          margin: 0 0 4px 0;
          text-transform: uppercase;
        }

        .report-subtitle {
          font-size: 10px;
          color: #6b7280;
        }

        .meta-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 8px 12px;
          margin-bottom: 14px;
          font-size: 10.5px;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
        }

        .meta-label {
          color: #64748b;
          font-size: 9.5px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .meta-value {
          font-weight: 700;
          color: #0f172a;
        }

        /* Summary Cards Row */
        .summary-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-bottom: 14px;
        }

        .summary-card {
          border-radius: 6px;
          padding: 8px 10px;
          border: 1px solid #e2e8f0;
          background: #fff;
        }

        .card-blue {
          background: #eff6ff;
          border-left: 4px solid #2563eb;
        }

        .card-green {
          background: #f0fdf4;
          border-left: 4px solid #16a34a;
        }

        .card-amber {
          background: #fffbeb;
          border-left: 4px solid #d97706;
        }

        .card-purple {
          background: #faf5ff;
          border-left: 4px solid #9333ea;
        }

        .card-label {
          font-size: 9.5px;
          font-weight: 700;
          color: #475569;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .card-val {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
        }

        .card-sub {
          font-size: 8.5px;
          color: #64748b;
          margin-top: 2px;
        }

        /* Report Table */
        table.data-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 14px;
          font-size: 10px;
        }

        table.data-table th {
          background: #1e3a8a;
          color: #ffffff;
          padding: 6px 8px;
          font-weight: 700;
          border: 1px solid #1e3a8a;
          text-align: center;
        }

        table.data-table td {
          padding: 5px 8px;
          border: 1px solid #e2e8f0;
          vertical-align: middle;
        }

        table.data-table tr:nth-child(even) {
          background: #f8fafc;
        }

        table.data-table tfoot td {
          background: #e2e8f0;
          font-weight: 800;
          border-top: 2px solid #0f172a;
          border-bottom: 2px solid #0f172a;
          padding: 6px 8px;
        }

        .font-mono {
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace !important;
        }

        .font-bold {
          font-weight: 700;
        }

        .font-medium {
          font-weight: 600;
        }

        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .text-left { text-align: left; }
        .text-primary { color: #1e40af; }

        /* Signatures Section */
        .signatures {
          display: flex;
          justify-content: space-between;
          margin-top: 25px;
          page-break-inside: avoid;
        }

        .sign-box {
          width: 30%;
          text-align: center;
        }

        .sign-title {
          font-weight: 700;
          font-size: 10.5px;
          color: #334155;
          margin-bottom: 45px;
        }

        .sign-line {
          border-bottom: 1px dashed #64748b;
          margin: 0 15px 5px 15px;
        }

        .sign-name {
          font-size: 10px;
          color: #64748b;
        }

        /* Footer */
        .footer {
          margin-top: 20px;
          border-top: 1px solid #e2e8f0;
          padding-top: 6px;
          display: flex;
          justify-content: space-between;
          font-size: 9px;
          color: #94a3b8;
          page-break-inside: avoid;
        }

        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          tr {
            page-break-inside: avoid;
          }
          thead {
            display: table-header-group;
          }
          tfoot {
            display: table-footer-group;
          }
        }
      </style>
    </head>
    <body>
      <!-- Header -->
      <div class="header">
        <div class="company-info">
          ${companyLogo ? `<img src="${companyLogo}" class="company-logo" alt="Logo" />` : ''}
          <div>
            <h1 class="company-title">${companyName}</h1>
            <p class="company-sub">${companyAddress ? companyAddress + ' • ' : ''}ໂທ: ${companyTel || 'N/A'}</p>
          </div>
        </div>
        <div class="report-header-right">
          <div class="report-title">ລາຍງານມູນຄ່າສິນຄ້າຄ້າງສະຕັອກ</div>
          <div class="report-subtitle">Inventory Valuation & Stock Status Report</div>
        </div>
      </div>

      <!-- Meta Grid -->
      <div class="meta-grid">
        <div class="meta-item">
          <span class="meta-label">ວັນທີພິມ (Date & Time):</span>
          <span class="meta-value">${printTime}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">ສາຂາ / ສາງ (Location):</span>
          <span class="meta-value">${locationName}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">ຜູ້ພິມລາຍງານ (Prepared By):</span>
          <span class="meta-value">${printedBy}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">ຕົວກັ່ນຕອງ (Filter):</span>
          <span class="meta-value">${searchKeyword ? 'ຄົ້ນຫາ: ' + searchKeyword : 'ທັງໝົດ (' + totalItems + ' ລາຍການ)'}</span>
        </div>
      </div>

      <!-- Executive KPI Cards -->
      <div class="summary-cards">
        <div class="summary-card card-blue">
          <div class="card-label">ມູນຄ່າສະຕັອກລວມ (Total Cost Valuation)</div>
          <div class="card-val">${formatCurrency(grandTotalCostValue, currencyCode)}</div>
          <div class="card-sub">ອີງຕາມຕົ້ນທຶນສະເລ່ຍ (Weighted Cost)</div>
        </div>
        <div class="summary-card card-green">
          <div class="card-label">ຈຳນວນສະຕັອກລວມ (Total Units in Stock)</div>
          <div class="card-val">${formatNumber(grandTotalQty)} ຊິ້ນ</div>
          <div class="card-sub">ທັງໝົດ ${formatNumber(totalItems)} ລາຍການສິນຄ້າ</div>
        </div>
        <div class="summary-card card-amber">
          <div class="card-label">ມູນຄ່າຂາຍລວມ (Potential Retail Value)</div>
          <div class="card-val">${formatCurrency(grandTotalRetailValue, currencyCode)}</div>
          <div class="card-sub">ຄິດໄລ່ຕາມລາຄາຂາຍໜ້າຮ້ານ</div>
        </div>
        <div class="summary-card card-purple">
          <div class="card-label">ກຳໄລຂັ້ນຕົ້ນຄາດຄະເນ (Est. Gross Margin)</div>
          <div class="card-val">${formatCurrency(potentialGrossProfit, currencyCode)}</div>
          <div class="card-sub">Margin: ~${overallMarginPercent}%</div>
        </div>
      </div>

      <!-- Table -->
      <table class="data-table">
        <thead>
          <tr>
            <th style="width: 32px;">ລ/ດ</th>
            <th style="width: 105px;">ລະຫັດສິນຄ້າ</th>
            <th>ຊື່ສິນຄ້າ (Product Name)</th>
            <th style="width: 75px;">ຈຳນວນ</th>
            <th style="width: 90px;">ລາຄາຂາຍ (${currencyCode})</th>
            <th style="width: 90px;">ຕົ້ນທຶນສະເລ່ຍ</th>
            <th style="width: 110px;">ມູນຄ່າຕົ້ນທຶນລວມ</th>
            <th style="width: 110px;">ມູນຄ່າຂາຍລວມ</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHTML || '<tr><td colspan="8" class="text-center py-4">ບໍ່ມີຂໍ້ມູນສິນຄ້າຄ້າງສະຕັອກ</td></tr>'}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-center">ລວມຍອດທັງໝົດ (${formatNumber(totalItems)} ລາຍການ):</td>
            <td class="text-right font-mono">${formatNumber(grandTotalQty)}</td>
            <td class="text-right">-</td>
            <td class="text-right">-</td>
            <td class="text-right font-mono text-primary">${formatNumber(grandTotalCostValue)}</td>
            <td class="text-right font-mono">${formatNumber(grandTotalRetailValue)}</td>
          </tr>
        </tfoot>
      </table>

      <!-- Signatures -->
      <div class="signatures">
        <div class="sign-box">
          <div class="sign-title">ຜູ້ສັງລວມ (Prepared By)</div>
          <div class="sign-line"></div>
          <div class="sign-name">${printedBy}</div>
        </div>
        <div class="sign-box">
          <div class="sign-title">ຫົວໜ້າສາງ / ຈັດຊື້ (Stock Controller)</div>
          <div class="sign-line"></div>
          <div class="sign-name">(...................................................)</div>
        </div>
        <div class="sign-box">
          <div class="sign-title">ຜູ້ອຳນວຍການ / ອະນຸມັດ (Authorized By)</div>
          <div class="sign-line"></div>
          <div class="sign-name">(...................................................)</div>
        </div>
      </div>

      <!-- Footer Note -->
      <div class="footer">
        <span>ພິມເມື່ອ: ${printTime} • ລະບົບຄຸ້ມຄອງສາງສິນຄ້າ D-Commerce</span>
        <span>ເອກະສານພາຍໃນ / Internal Use Only</span>
      </div>
    </body>
    </html>
  `
}

/**
 * Direct print triggering function
 */
export const printInventoryValueReport = (params) => {
  try {
    const { stockList, companyData, currencyList, filters } = params
    const htmlContent = generateInventoryValueReportHTML(stockList, companyData, currencyList, filters)

    const printWindow = window.open('', '_blank', 'width=1050,height=800,top=50,left=50,toolbar=no,menubar=no,scrollbars=yes,status=no')
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
    console.error('Error printing inventory value report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມ: ' + error.message)
  }
}

