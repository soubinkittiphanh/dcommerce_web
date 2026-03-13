/**
 * Sales Report Print Module for 80mm POS Printer
 * Generates and prints sales summary reports with payment breakdown
 */

import { formatDate } from '~/common'
import { hostName, mainCompanyInfo } from '~/common/api'

/**
 * Safe number parsing to prevent NaN issues
 */
const safeParseNumber = (value, defaultValue = 0) => {
  if (value === null || value === undefined || value === '') {
    return defaultValue;
  }
  
  if (typeof value === 'number') {
    return isNaN(value) ? defaultValue : value;
  }
  
  if (typeof value === 'string') {
    const cleanValue = value.toString().replace(/[^\d.-]/g, '');
    const parsed = parseFloat(cleanValue);
    return isNaN(parsed) ? defaultValue : parsed;
  }
  
  const converted = Number(value);
  return isNaN(converted) ? defaultValue : converted;
};

/**
 * Format date for Lao locale
 */
const formatDateLao = (dateInput) => {
  try {
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return 'Invalid Date';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Date Error';
  }
};

/**
 * Generate company header for sales report
 */
const generateCompanyHeader = (companyData, companyLogo) => {
  const companyName = companyData?.name || 'Dcommerce';
  const companyTel = companyData?.tel || 'N/A';
  
  const logoHtml = companyLogo ? 
    `<img src="${companyLogo}" alt="Logo" 
          style="width: 50px; height: 50px; object-fit: contain;" 
          onerror="this.style.display='none';">` : 
    `<div class="logo-placeholder">${companyName.substring(0, 2).toUpperCase()}</div>`;

  return `
    <div class="header-section">
      <div class="header-content">
        <div class="header-left">
          ${logoHtml}
        </div>
        <div class="header-right">
          <div class="company-name">${companyName}</div>
          <div class="company-tel">ເບີໂທ: ${companyTel}</div>
        </div>
      </div>
    </div>
  `;
};

/**
 * Generate date range section
 */
const generateDateRangeSection = (fromDate, toDate, terminalInfo) => {
  return `
    <div class="date-range-section">
      <div class="section-title">ລາຍງານການຂາຍ</div>
      <div class="date-info">
        <div class="date-line">ຈາກວັນທີ: ${formatDateLao(fromDate)}</div>
        <div class="date-line">ຫາວັນທີ: ${formatDateLao(toDate)}</div>
        <div class="terminal-line">ຮ້ານ: ${terminalInfo?.name || 'ທັງໝົດ'}</div>
      </div>
    </div>
  `;
};

/**
 * Generate summary statistics section
 */
const generateSummarySection = (summaryData, formatNumber) => {
  const {
    totalTransactions,
    totalSales,
    totalDiscount,
    netSales,
    singlePaymentCount,
    multiPaymentCount
  } = summaryData;

  return `
    <div class="summary-section">
      <div class="summary-title">ສະຫຼຸບລວມ</div>
      <div class="summary-item">
        <span class="label">ຈຳນວນບິນທັງໝົດ:</span>
        <span class="value">${formatNumber(totalTransactions)}</span>
      </div>
      <div class="summary-item">
        <span class="label">ຍອດຂາຍລວມ:</span>
        <span class="value">${formatNumber(totalSales)} LAK</span>
      </div>
      <div class="summary-item">
        <span class="label">ສ່ວນຫຼຸດລວມ:</span>
        <span class="value">${formatNumber(totalDiscount)} LAK</span>
      </div>
      <div class="summary-item total">
        <span class="label">ຍອດຂາຍສຸດທິ:</span>
        <span class="value">${formatNumber(netSales)} LAK</span>
      </div>
      <div class="divider">- - - - - - - - - - - - - - - - - - - - - - - -</div>
      <div class="summary-item">
        <span class="label">ຊຳລະແບບດຽວ:</span>
        <span class="value">${formatNumber(singlePaymentCount)} ລາຍການ</span>
      </div>
      <div class="summary-item">
        <span class="label">ຊຳລະຫຼາຍວິທີ:</span>
        <span class="value">${formatNumber(multiPaymentCount)} ລາຍການ</span>
      </div>
    </div>
  `;
};

/**
 * Generate payment breakdown section
 */
const generatePaymentBreakdownSection = (paymentStats, formatNumber) => {
  if (!paymentStats || paymentStats.length === 0) {
    return '<div class="no-data">ບໍ່ມີຂໍ້ມູນການຊຳລະ</div>';
  }

  const paymentItems = paymentStats.map(stat => `
    <div class="payment-item">
      <div class="payment-method">${stat.name}</div>
      <div class="payment-details">
        <span class="amount">${formatNumber(stat.amount)} LAK</span>
        <span class="count">(${stat.count} ລາຍການ)</span>
        <span class="percentage">${stat.percentage.toFixed(1)}%</span>
      </div>
    </div>
  `).join('');

  return `
    <div class="payment-section">
      <div class="payment-title">ແຍກຕາມວິທີການຊຳລະ</div>
      ${paymentItems}
    </div>
  `;
};

/**
 * Generate footer section
 */
const generateFooterSection = (user) => {
  const userName = user?.cus_name || 'System';
  const printTime = formatDateLao(new Date());
  
  return `
    <div class="footer-section">
      <div class="divider">- - - - - - - - - - - - - - - - - - - - - - - -</div>
      <div class="footer-info">
        <div class="print-info">ພິມເມື່ອ: ${printTime}</div>
        <div class="user-info">ພິມໂດຍ: ${userName}</div>
      </div>
    </div>
  `;
};

/**
 * Generate complete sales report HTML
 */
const generateSalesReportHTML = (reportData) => {
  const {
    companyData,
    companyLogo,
    fromDate,
    toDate,
    terminalInfo,
    summaryData,
    paymentStats,
    formatNumber,
    user
  } = reportData;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>ລາຍງານການຂາຍ</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Noto Sans Lao', 'Arial', sans-serif;
          margin: 0;
          padding: 8px;
          font-size: 11px;
          line-height: 1.2;
          color: #000;
          width: 80mm;
          max-width: 80mm;
        }
        
        .header-section {
          margin-bottom: 8px;
        }
        
        .header-content {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        
        .header-left {
          flex: 0 0 auto;
        }
        
        .header-right {
          flex: 1;
          min-width: 0;
        }
        
        .logo-placeholder {
          width: 50px;
          height: 50px;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
        }
        
        .company-name {
          font-weight: 600;
          font-size: 13px;
          margin-bottom: 2px;
        }
        
        .company-tel {
          font-size: 10px;
          color: #666;
        }
        
        .date-range-section {
          text-align: center;
          margin-bottom: 8px;
          padding: 6px;
          border: 1px solid #ddd;
        }
        
        .section-title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .date-info {
          font-size: 10px;
        }
        
        .date-line, .terminal-line {
          margin-bottom: 1px;
        }
        
        .summary-section {
          margin-bottom: 8px;
        }
        
        .summary-title {
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 4px;
          text-align: center;
        }
        
        .summary-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
          padding: 1px 0;
        }
        
        .summary-item.total {
          font-weight: 600;
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
          padding: 3px 0;
          margin: 4px 0;
        }
        
        .label {
          flex: 1;
          font-weight: 500;
        }
        
        .value {
          font-weight: 600;
          text-align: right;
          white-space: nowrap;
        }
        
        .payment-section {
          margin-bottom: 8px;
        }
        
        .payment-title {
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 4px;
          text-align: center;
        }
        
        .payment-item {
          margin-bottom: 3px;
          padding: 2px;
          border: 1px solid #eee;
        }
        
        .payment-method {
          font-weight: 600;
          font-size: 11px;
          margin-bottom: 1px;
        }
        
        .payment-details {
          display: flex;
          justify-content: space-between;
          font-size: 9px;
        }
        
        .amount {
          font-weight: 600;
        }
        
        .count {
          color: #666;
        }
        
        .percentage {
          font-weight: 500;
        }
        
        .divider {
          text-align: center;
          margin: 6px 0;
          font-size: 9px;
          color: #999;
        }
        
        .footer-section {
          margin-top: 8px;
        }
        
        .footer-info {
          text-align: center;
          font-size: 9px;
          color: #666;
        }
        
        .print-info, .user-info {
          margin-bottom: 1px;
        }
        
        .no-data {
          text-align: center;
          color: #999;
          font-style: italic;
          margin: 10px 0;
        }
        
        @media print {
          body { 
            margin: 0; 
            padding: 4px;
            width: auto;
            max-width: none;
          }
          .no-print { 
            display: none; 
          }
        }
        
        @page {
          margin: 0;
          size: 80mm auto;
        }
      </style>
    </head>
    <body>
      ${generateCompanyHeader(companyData, companyLogo)}
      ${generateDateRangeSection(fromDate, toDate, terminalInfo)}
      ${generateSummarySection(summaryData, formatNumber)}
      ${generatePaymentBreakdownSection(paymentStats, formatNumber)}
      ${generateFooterSection(user)}
    </body>
    </html>
  `;
};

/**
 * Print the sales report
 */
const printSalesReport = (windowContent) => {
  try {
    const windowWidth = 450;
    const windowHeight = 700;
    
    const printWin = window.open(
      '',
      '',
      `left=0,top=0,width=${windowWidth},height=${windowHeight},toolbar=0,scrollbars=1,status=0`
    );

    if (!printWin) {
      throw new Error('Unable to open print window. Please check popup blockers.');
    }

    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();

    printWin.onload = () => {
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 800);
    };

    setTimeout(() => {
      if (!printWin.closed) {
        printWin.print();
        printWin.close();
      }
    }, 2000);

  } catch (error) {
    console.error('Error printing sales report:', error);
    alert('Error printing sales report. Please try again.');
  }
};

/**
 * Main function to generate and print sales report
 */
export const printSalesReportSummary = (params) => {
  const {
    orderHeaderList = [],
    paymentStatistics = [],
    filteredOrderHeaderList = [],
    fromDate,
    toDate,
    terminalInfo = null,
    companyData = {},
    companyLogo = '',
    formatNumber,
    user = {},
    singlePaymentCount = 0,
    multiPaymentCount = 0
  } = params;

  console.log('🖨️ Generating sales report summary for 80mm printer');

  try {
    // Calculate summary data
    const totalTransactions = filteredOrderHeaderList.length;
    
    const totalSales = filteredOrderHeaderList.reduce((total, item) => {
      return total + safeParseNumber(item.total + (item.discount || 0), 0);
    }, 0);
    
    const totalDiscount = filteredOrderHeaderList.reduce((total, item) => {
      return total + safeParseNumber(item.discount, 0);
    }, 0);
    
    const netSales = totalSales - totalDiscount;

    const summaryData = {
      totalTransactions,
      totalSales,
      totalDiscount,
      netSales,
      singlePaymentCount,
      multiPaymentCount
    };

    const reportData = {
      companyData,
      companyLogo,
      fromDate,
      toDate,
      terminalInfo,
      summaryData,
      paymentStats: paymentStatistics,
      formatNumber,
      user
    };

    const salesReportHTML = generateSalesReportHTML(reportData);
    printSalesReport(salesReportHTML);

  } catch (error) {
    console.error('Error generating sales report summary:', error);
    alert('Error generating sales report. Please try again.');
  }
};

/**
 * Export helper function for date formatting
 */
export const formatDateForReport = formatDateLao;