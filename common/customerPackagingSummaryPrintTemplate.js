/**
 * Customer Packaging Summary Report Print Template
 * Generates an official A4 Printable Document for:
 * 1. Packaging Product & Category Stock, Customer Ledger & Movement Overview
 * 2. Customer Outstanding Packaging Debt & Period Activities
 */

const formatNumber = (val) => {
  if (val === null || val === undefined || val === '') return '0'
  const num = typeof val === 'number' ? val : parseFloat(val)
  if (isNaN(num)) return '0'
  return new Intl.NumberFormat('en-US').format(num)
}

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
 * Generate Printable HTML for Customer Packaging Summary Report
 */
export const generatePackagingSummaryHTML = ({
  companyData = {},
  user = {},
  startDate = '',
  endDate = '',
  locationName = 'ທຸກສາຂາ/ສາງ',
  packagingList = [],
  customerRows = [],
  kpiTotals = {}
}) => {
  const companyName = companyData?.name || 'ຕົວແທນຈຳໜ່າຍ ເບຍລາວ / Beerlao Agency'
  const companyAddress = companyData?.address || ''
  const companyTel = companyData?.tel || companyData?.telephone || ''
  const printTime = formatDateTime(new Date())
  const printedBy = user?.name || user?.cus_name || user?.username || 'Admin'

  // Table 1 rows: Packaging Assets Summary
  const packagingRowsHTML = packagingList.map((p, idx) => `
    <tr>
      <td style="text-align: center;">${idx + 1}</td>
      <td><span class="badge badge-gray">${p.categoryName || '-'}</span></td>
      <td style="font-weight: 600; color: #0f766e;">${p.name || '-'}</td>
      <td style="text-align: center; color: #64748b; font-size: 11px;">${p.barCode || '-'}</td>
      <td style="text-align: right; font-weight: 600; color: #0f766e;">${formatNumber(p.emptyStockWarehouse)}</td>
      <td style="text-align: right; font-weight: 600; color: #b45309;">${formatNumber(p.wholesaleCustomerDebt)}</td>
      <td style="text-align: right; font-weight: 600; color: #0284c7;">+${formatNumber(p.periodReturnedIn)}</td>
      <td style="text-align: right; font-weight: 600; color: #7c3aed;">-${formatNumber(p.periodDeliveredOut)}</td>
      <td style="text-align: right; font-weight: 600; color: ${p.netMovement >= 0 ? '#16a34a' : '#dc2626'};">
        ${p.netMovement > 0 ? '+' : ''}${formatNumber(p.netMovement)}
      </td>
      <td style="text-align: right; font-weight: 700; color: #0f766e;">${formatNumber(p.totalCirculation)}</td>
    </tr>
  `).join('')

  // Table 2 rows: Customer Outstanding Debt
  const customerRowsHTML = customerRows.map((c, idx) => {
    const breakdownHTML = (c.items || []).map(it => `
      <span class="badge badge-amber">${it.packagingName}: ${formatNumber(it.balanceOwed)}</span>
    `).join(' ') || '<span style="color: #94a3b8; font-size: 11px;">-</span>'

    return `
      <tr>
        <td style="text-align: center;">${idx + 1}</td>
        <td style="font-weight: 600; color: #334155;">${c.clientName || '-'}</td>
        <td>${c.clientCompany || '-'}</td>
        <td style="font-size: 11px;">${c.clientPhone || '-'}</td>
        <td>${breakdownHTML}</td>
        <td style="text-align: right; font-weight: 700; color: #b45309;">${formatNumber(c.totalBalanceOwed)}</td>
        <td style="text-align: right; font-weight: 600; color: #7c3aed;">${c.periodOut > 0 ? '-' + formatNumber(c.periodOut) : '0'}</td>
        <td style="text-align: right; font-weight: 600; color: #0284c7;">${c.periodIn > 0 ? '+' + formatNumber(c.periodIn) : '0'}</td>
      </tr>
    `
  }).join('')

  return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
      <meta charset="UTF-8">
      <title>ລາຍງານສະຫຼຸບດຸນດ່ຽງບັນຈຸພັນ ແລະ ໜີ້ລູກຄ້າ / Customer Packaging Summary</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;600;700;800;900&display=swap');

        @page {
          size: A4 portrait;
          margin: 10mm 10mm 12mm 10mm;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', 'Phetsarath OT', sans-serif !important;
        }

        body {
          background-color: #fff;
          color: #1e293b;
          font-size: 11.5px;
          line-height: 1.4;
          padding: 5mm;
          font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', 'Phetsarath OT', sans-serif !important;
          -webkit-font-smoothing: antialiased;
        }

        table, th, td, div, span, p, h1, h2, h3, h4, h5, h6 {
          font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', 'Phetsarath OT', sans-serif !important;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid #0f766e;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .company-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f766e;
        }

        .company-sub {
          font-size: 11px;
          color: #64748b;
          margin-top: 2px;
        }

        .report-title-box {
          text-align: right;
        }

        .report-title {
          font-size: 15px;
          font-weight: 800;
          color: #0f766e;
        }

        .report-subtitle {
          font-size: 10.5px;
          color: #64748b;
          font-weight: 500;
        }

        .meta-bar {
          display: flex;
          justify-content: space-between;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 6px 12px;
          margin-bottom: 12px;
          font-size: 11px;
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-bottom: 14px;
        }

        .kpi-card {
          border-radius: 6px;
          padding: 8px 10px;
          border: 1px solid #cbd5e1;
        }

        .kpi-card.teal { background-color: #f0fdfa; border-color: #99f6e4; }
        .kpi-card.amber { background-color: #fffbeb; border-color: #fde68a; }
        .kpi-card.blue { background-color: #f0f9ff; border-color: #bae6fd; }
        .kpi-card.purple { background-color: #faf5ff; border-color: #e9d5ff; }

        .kpi-label { font-size: 10px; font-weight: 600; color: #475569; }
        .kpi-val { font-size: 15px; font-weight: 800; margin-top: 2px; }
        .kpi-val.teal { color: #0f766e; }
        .kpi-val.amber { color: #b45309; }
        .kpi-val.blue { color: #0284c7; }
        .kpi-val.purple { color: #7c3aed; }

        .section-header {
          font-size: 12px;
          font-weight: 800;
          color: #0f766e;
          margin: 10px 0 6px 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .section-header.amber {
          color: #b45309;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 12px;
          font-size: 11px;
        }

        th {
          background-color: #f1f5f9;
          color: #334155;
          font-weight: 700;
          padding: 6px 8px;
          border: 1px solid #cbd5e1;
          text-align: left;
        }

        th.teal {
          background-color: #ccfbf1;
          color: #0f766e;
        }

        th.amber {
          background-color: #fef3c7;
          color: #b45309;
        }

        td {
          padding: 5px 8px;
          border: 1px solid #e2e8f0;
          vertical-align: middle;
        }

        tr:nth-child(even) td {
          background-color: #f8fafc;
        }

        .tfoot-row td {
          background-color: #f1f5f9;
          font-weight: 800;
          border-top: 2px solid #94a3b8;
        }

        .badge {
          display: inline-block;
          padding: 2px 5px;
          border-radius: 4px;
          font-size: 9.5px;
          font-weight: 600;
        }

        .badge-gray { background-color: #e2e8f0; color: #334155; }
        .badge-amber { background-color: #fef3c7; color: #92400e; border: 1px solid #fde68a; }

        .signature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 25px;
          page-break-inside: avoid;
        }

        .sign-col {
          text-align: center;
        }

        .sign-role {
          font-weight: 700;
          font-size: 11px;
          color: #334155;
          margin-bottom: 45px;
        }

        .sign-line {
          border-bottom: 1px dashed #94a3b8;
          width: 70%;
          margin: 0 auto 6px auto;
        }

        .sign-name {
          font-size: 10px;
          color: #64748b;
        }

        .footer-note {
          margin-top: 14px;
          padding-top: 8px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          font-size: 9.5px;
          color: #94a3b8;
        }

        @media print {
          body {
            padding: 0;
            background: none;
          }
          .page-break {
            page-break-before: always;
          }
        }
      </style>
    </head>
    <body>
      <!-- Header -->
      <div class="header-container">
        <div>
          <div class="company-title">${companyName}</div>
          <div class="company-sub">${companyAddress ? companyAddress + ' | ' : ''}${companyTel ? 'ໂທ: ' + companyTel : ''}</div>
        </div>
        <div class="report-title-box">
          <div class="report-title">ລາຍງານສະຫຼຸບດຸນດ່ຽງບັນຈຸພັນ ແລະ ໜີ້ລູກຄ້າ</div>
          <div class="report-subtitle">Customer Packaging Balance, Stock & Movement Overview</div>
        </div>
      </div>

      <!-- Filter Meta Bar -->
      <div class="meta-bar">
        <div><b>ຊ່ວງວັນທີ:</b> ${formatDate(startDate)} ຫາ ${formatDate(endDate)}</div>
        <div><b>ສາຂາ/ສາງ:</b> ${locationName}</div>
        <div><b>ພິມເມື່ອ:</b> ${printTime}</div>
        <div><b>ຜູ້ພິມ:</b> ${printedBy}</div>
      </div>

      <!-- KPI Summary Cards -->
      <div class="kpi-grid">
        <div class="kpi-card teal">
          <div class="kpi-label">📦 ໃນສາງທັງໝົດ (Stock On-Hand)</div>
          <div class="kpi-val teal">${formatNumber(kpiTotals.totalStockWarehouse)}</div>
        </div>
        <div class="kpi-card amber">
          <div class="kpi-label">🏪 ໜີ້ລູກຄ້າຄ້າງ (Customer Debt)</div>
          <div class="kpi-val amber">${formatNumber(kpiTotals.totalCustomerDebt)}</div>
        </div>
        <div class="kpi-card blue">
          <div class="kpi-label">📥 ຮັບຄືນໃນງວດ (Movement IN)</div>
          <div class="kpi-val blue">+${formatNumber(kpiTotals.periodReturnedIn)}</div>
        </div>
        <div class="kpi-card purple">
          <div class="kpi-label">📤 ສົ່ງອອກໃນງວດ (Movement OUT)</div>
          <div class="kpi-val purple">-${formatNumber(kpiTotals.periodDeliveredOut)}</div>
        </div>
      </div>

      <!-- Section 1: Packaging Assets Summary -->
      <div class="section-header">
        <span>1. ຕາຕະລາງດຸນດ່ຽງບັນຈຸພັນຕາມໝວດໝູ່ (Packaging Assets: Stock vs Customer Ledger vs Movement)</span>
      </div>
      <table>
        <thead>
          <tr>
            <th class="teal" style="width: 35px; text-align: center;">ລ/ດ</th>
            <th class="teal">ໝວດໝູ່</th>
            <th class="teal">ລາຍການບັນຈຸພັນ</th>
            <th class="teal" style="text-align: center;">ບາໂຄ້ດ</th>
            <th class="teal" style="text-align: right;">📦 ໃນສາງ</th>
            <th class="teal" style="text-align: right;">🏪 ໜີ້ລູກຄ້າ</th>
            <th class="teal" style="text-align: right;">📥 ຮັບຄືນ</th>
            <th class="teal" style="text-align: right;">📤 ສົ່ງອອກ</th>
            <th class="teal" style="text-align: right;">⚖️ ດຸນງວດ</th>
            <th class="teal" style="text-align: right;">🔄 ລວມໝູນວຽນ</th>
          </tr>
        </thead>
        <tbody>
          ${packagingRowsHTML || '<tr><td colspan="10" style="text-align: center; color: #94a3b8; padding: 12px;">ບໍ່ມີຂໍ້ມູນບັນຈຸພັນ</td></tr>'}
        </tbody>
        <tfoot>
          <tr class="tfoot-row">
            <td colspan="4" style="text-align: center; color: #0f766e;">ລວມຍອດທັງໝົດ (Grand Total):</td>
            <td style="text-align: right; color: #0f766e;">${formatNumber(kpiTotals.totalStockWarehouse)}</td>
            <td style="text-align: right; color: #b45309;">${formatNumber(kpiTotals.totalCustomerDebt)}</td>
            <td style="text-align: right; color: #0284c7;">+${formatNumber(kpiTotals.periodReturnedIn)}</td>
            <td style="text-align: right; color: #7c3aed;">-${formatNumber(kpiTotals.periodDeliveredOut)}</td>
            <td style="text-align: right; color: ${kpiTotals.totalNetMovement >= 0 ? '#16a34a' : '#dc2626'};">
              ${kpiTotals.totalNetMovement > 0 ? '+' : ''}${formatNumber(kpiTotals.totalNetMovement)}
            </td>
            <td style="text-align: right; color: #0f766e;">${formatNumber((kpiTotals.totalStockWarehouse || 0) + (kpiTotals.totalCustomerDebt || 0))}</td>
          </tr>
        </tfoot>
      </table>

      <!-- Section 2: Customer Outstanding Debt -->
      <div class="section-header amber">
        <span>2. ຕາຕະລາງລູກຄ້າ ແລະ ຍອດໜີ້ຄ້າງບັນຈຸພັນ (Customer Packaging Outstanding Debt & Movements)</span>
      </div>
      <table>
        <thead>
          <tr>
            <th class="amber" style="width: 35px; text-align: center;">ລ/ດ</th>
            <th class="amber">ຊື່ລູກຄ້າ</th>
            <th class="amber">ຮ້ານ / ບໍລິສັດ</th>
            <th class="amber">ເບີໂທ</th>
            <th class="amber">ລາຍລະອຽດໜີ້ຕາມບັນຈຸພັນ (Breakdown)</th>
            <th class="amber" style="text-align: right;">ລວມໜີ້ຄ້າງ</th>
            <th class="amber" style="text-align: right;">📤 ສົ່ງອອກ</th>
            <th class="amber" style="text-align: right;">📥 ຮັບຄືນ</th>
          </tr>
        </thead>
        <tbody>
          ${customerRowsHTML || '<tr><td colspan="8" style="text-align: center; color: #94a3b8; padding: 12px;">ບໍ່ມີລູກຄ້າຕິດໜີ້ບັນຈຸພັນ</td></tr>'}
        </tbody>
        <tfoot>
          <tr class="tfoot-row">
            <td colspan="5" style="text-align: center; color: #b45309;">ລວມຍອດໜີ້ລູກຄ້າທັງໝົດ (Total Client Debt):</td>
            <td style="text-align: right; color: #b45309;">${formatNumber(kpiTotals.totalCustomerDebt)}</td>
            <td style="text-align: right; color: #7c3aed;">-${formatNumber(kpiTotals.periodDeliveredOut)}</td>
            <td style="text-align: right; color: #0284c7;">+${formatNumber(kpiTotals.periodReturnedIn)}</td>
          </tr>
        </tfoot>
      </table>

      <!-- Signatures Block -->
      <div class="signature-grid">
        <div class="sign-col">
          <div class="sign-role">ຜູ້ສັງລວມ (Prepared By)</div>
          <div class="sign-line"></div>
          <div class="sign-name">ວັນທີ: ......./......./............</div>
        </div>
        <div class="sign-col">
          <div class="sign-role">ຫົວໜ້າສາງ (Warehouse Manager)</div>
          <div class="sign-line"></div>
          <div class="sign-name">ວັນທີ: ......./......./............</div>
        </div>
        <div class="sign-col">
          <div class="sign-role">ອຳນວຍການ / ຜູ້ຈັດການ (Approved By)</div>
          <div class="sign-line"></div>
          <div class="sign-name">ວັນທີ: ......./......./............</div>
        </div>
      </div>

      <!-- Footer Note -->
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
export const printPackagingSummaryReport = (params) => {
  try {
    const htmlContent = generatePackagingSummaryHTML(params)

    const printWindow = window.open(
      '',
      '_blank',
      'width=1050,height=850,top=50,left=50,toolbar=no,menubar=no,scrollbars=yes,status=no'
    )

    if (!printWindow) {
      alert('ກະລຸນາອະນຸຍາດ Popup ໃນ Browser ເພື່ອພິມລາຍງານ (Please allow popups to print)')
      return
    }

    printWindow.document.open()
    printWindow.document.write(htmlContent)
    printWindow.document.close()

    const executePrint = () => {
      try {
        printWindow.focus()
        printWindow.print()
      } catch (e) {
        console.error('Print focus error:', e)
      }
    }

    printWindow.onload = () => {
      if (printWindow.document.fonts && printWindow.document.fonts.ready) {
        printWindow.document.fonts.ready
          .then(() => setTimeout(executePrint, 300))
          .catch(() => setTimeout(executePrint, 500))
      } else {
        setTimeout(executePrint, 500)
      }
    }

    setTimeout(() => {
      if (printWindow && !printWindow.closed) {
        printWindow.focus()
      }
    }, 1200)
  } catch (error) {
    console.error('Error printing packaging summary report:', error)
    alert('ເກີດຂໍ້ຜິດພາດໃນການພິມ: ' + error.message)
  }
}

