/**
 * HTML Templates for Multi-Currency Sales Report Printing
 */
export const generateMultiCurrencyPrintContent = (reportData) => {
  const { 
    multiCurrencyData, 
    companyData, 
    terminalInfo, 
    fromDate, 
    toDate,
    localCurrencyCode,
    formatCurrencyDisplay 
  } = reportData

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Sales Report</title>
  <style>
    body { font-family: 'Arial', sans-serif; margin: 20px; font-size: 12px; color: #333; }
    .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #444; padding-bottom: 10px; }
    .company-name { font-size: 20px; font-weight: bold; text-transform: uppercase; }
    .currency-section { margin: 20px 0; background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #ddd; }
    .currency-row { display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px dashed #ccc; }
    .total-row { font-size: 16px; font-weight: bold; margin-top: 10px; color: #2e7d32; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th { background-color: #eee; padding: 10px; border: 1px solid #ddd; text-align: left; }
    td { padding: 10px; border: 1px solid #ddd; }
    .text-right { text-align: right; }
  </style>
</head>
<body>
  <div class="header">
    <div class="company-name">${companyData.name || 'D-Commerce POS'}</div>
    <h2>ລາຍງານການຂາຍ (Multi-Currency)</h2>
    <p>ວັນທີ: ${fromDate} ຫາ ${toDate} | ຮ້ານ: ${terminalInfo.name}</p>
  </div>

  <div class="currency-section">
    <h3>ສະຫຼຸບຍອດຂາຍຕາມສະກຸນເງິນ</h3>
    ${multiCurrencyData.summary.currencyBreakdown.map(curr => `
      <div class="currency-row">
        <span>${curr.code} (${curr.name}):</span>
        <span>${formatCurrencyDisplay(curr.totalAmount, curr.code)} 
          ${!curr.isLocal ? `<small>→ ${formatCurrencyDisplay(curr.localEquivalent, localCurrencyCode)}</small>` : ''}
        </span>
      </div>
    `).join('')}
    <div class="currency-row total-row">
      <span>ຍອດລວມທັງໝົດ (${localCurrencyCode}):</span>
      <span>${formatCurrencyDisplay(multiCurrencyData.grandTotal.total, localCurrencyCode)}</span>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>ວິທີການຊຳລະ</th>
        <th class="text-right">ຈຳນວນບິນ</th>
        <th class="text-right">ຍອດລວມ (${localCurrencyCode})</th>
      </tr>
    </thead>
    <tbody>
      ${reportData.paymentStatistics.map(p => `
        <tr>
          <td>${p.name}</td>
          <td class="text-right">${p.count}</td>
          <td class="text-right">${formatCurrencyDisplay(p.amount, localCurrencyCode, false)}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
</body>
</html>`;
}