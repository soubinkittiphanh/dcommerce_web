/**
 * Enhanced Sales Report Print Module for 80mm POS Printer
 * WITH DETAILED PRODUCT BREAKDOWN BY GRADE A-Z, GIFTS, AND PRICING
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
      <div class="section-title">ລາຍງານການຂາຍແບບລະອຽດ (A-Z)</div>
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
    multiPaymentCount,
    totalProducts,
    totalGiftQty,
    totalGiftValue,
    totalGiftSavings
  } = summaryData;

  return `
    <div class="summary-section">
      <div class="summary-title">ສະຫຼຸບລວມ</div>
      <div class="summary-item">
        <span class="label">ຈຳນວນບິນທັງໝົດ:</span>
        <span class="value">${formatNumber(totalTransactions)}</span>
      </div>
      <div class="summary-item">
        <span class="label">ຈຳນວນສິນຄ້າທີ່ຂາຍ:</span>
        <span class="value">${formatNumber(totalProducts)}</span>
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
        <span class="label">ຂອງຂວັນທັງໝົດ:</span>
        <span class="value">${formatNumber(totalGiftQty)} ຊິ້ນ</span>
      </div>
      <div class="summary-item">
        <span class="label">ມູນຄ່າຂອງຂວັນ:</span>
        <span class="value">${formatNumber(totalGiftValue)} LAK</span>
      </div>
      <div class="summary-item">
        <span class="label">ລູກຄ້າປະຫຍັດ:</span>
        <span class="value">${formatNumber(totalGiftSavings)} LAK</span>
      </div>
    </div>
  `;
};

/**
 * Get grade color for styling
 */
const getGradeColor = (grade) => {
  const gradeColors = {
    'A': '#9c27b0', 'B': '#2196f3', 'C': '#ff9800', 'D': '#f44336', 'E': '#e91e63', 'F': '#9e9e9e',
    'G': '#4caf50', 'H': '#3f51b5', 'I': '#009688', 'J': '#ffc107', 'K': '#00bcd4', 'L': '#8bc34a',
    'M': '#673ab7', 'N': '#03a9f4', 'O': '#4caf50', 'P': '#ffeb3b', 'Q': '#607d8b', 'R': '#795548',
    'S': '#ff5722', 'T': '#9c27b0', 'U': '#3f51b5', 'V': '#2196f3', 'W': '#009688', 'X': '#4caf50',
    'Y': '#ffc107', 'Z': '#00bcd4'
  };
  return gradeColors[grade] || '#666666';
};

/**
 * Generate grade breakdown section with detailed statistics for ALL grades A-Z
 */
const generateGradeBreakdownSection = (gradeData, formatNumber, availableGrades = null) => {
  if (!gradeData) {
    return '<div class="no-data">ບໍ່ມີຂໍ້ມູນເກຣດ</div>';
  }

  // Use provided available grades or default A-Z
  const grades = availableGrades || ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  let gradeItems = '';
  
  // Process all grades dynamically
  grades.forEach((grade) => {
    const gradeInfo = gradeData[grade];
    if (gradeInfo && gradeInfo.qty > 0) {
      const avgPrice = gradeInfo.revenue > 0 ? gradeInfo.revenue / gradeInfo.qty : 0;
      const gradeColor = getGradeColor(grade);
      
      gradeItems += `
        <div class="grade-item">
          <div class="grade-header">
            <span class="grade-badge" style="background-color: ${gradeColor}; color: white;">${grade}</span>
            <span class="grade-count">${formatNumber(gradeInfo.qty)} ຊິ້ນ</span>
          </div>
          <div class="grade-details">
            <span class="revenue">${formatNumber(gradeInfo.revenue)} LAK</span>
            <span class="avg-price">@ ${formatNumber(avgPrice)}/ຊິ້ນ</span>
            <span class="order-count">${gradeInfo.orderCount} ບິນ</span>
          </div>
        </div>
      `;
    }
  });

  // Add base price sales
  if (gradeData.basePriceSales && gradeData.basePriceSales.qty > 0) {
    const avgPrice = gradeData.basePriceSales.revenue > 0 ? gradeData.basePriceSales.revenue / gradeData.basePriceSales.qty : 0;
    gradeItems += `
      <div class="grade-item">
        <div class="grade-header">
          <span class="grade-badge base">ມາດຕະຖານ</span>
          <span class="grade-count">${formatNumber(gradeData.basePriceSales.qty)} ຊິ້ນ</span>
        </div>
        <div class="grade-details">
          <span class="revenue">${formatNumber(gradeData.basePriceSales.revenue)} LAK</span>
          <span class="avg-price">@ ${formatNumber(avgPrice)}/ຊິ້ນ</span>
          <span class="order-count">${gradeData.basePriceSales.orderCount} ບິນ</span>
        </div>
      </div>
    `;
  }

  // Add gifts
  if (gradeData.gifts && gradeData.gifts.qty > 0) {
    const savings = gradeData.gifts.originalValue - gradeData.gifts.revenue;
    gradeItems += `
      <div class="grade-item gift-item">
        <div class="grade-header">
          <span class="grade-badge gift">ຂອງຂວັນ</span>
          <span class="grade-count">${formatNumber(gradeData.gifts.qty)} ຊິ້ນ</span>
        </div>
        <div class="grade-details">
          <span class="revenue">${formatNumber(gradeData.gifts.revenue)} LAK</span>
          <span class="original-value">ມູນຄ່າເຕັມ: ${formatNumber(gradeData.gifts.originalValue)} LAK</span>
          <span class="savings">ປະຫຍັດ: ${formatNumber(savings)} LAK</span>
        </div>
      </div>
    `;
  }

  // Show message if no grades have data
  if (!gradeItems) {
    gradeItems = '<div class="no-data">ບໍ່ມີຂໍ້ມູນເກຣດທີ່ຂາຍໄດ້</div>';
  }

  return `
    <div class="grade-section">
      <div class="grade-title">ແຍກຕາມເກຣດລູກຄ້າ (A-Z)</div>
      ${gradeItems}
    </div>
  `;
};

/**
 * Generate ALL products section with detailed breakdown - FIXED: Show all products instead of top 15
 */
const generateAllProductsSection = (productSummary, formatNumber, availableGrades = null) => {
  if (!productSummary || productSummary.length === 0) {
    return '<div class="no-data">ບໍ່ມີຂໍ້ມູນສິນຄ້າ</div>';
  }

  // Use provided available grades or default A-Z
  const grades = availableGrades || ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Sort by total revenue and show ALL products (removed limit)
  const allProducts = productSummary.sort((a, b) => b.totalRevenue - a.totalRevenue);

  const productItems = allProducts.map((product, index) => {
    // Build grade breakdown string for ALL grades
    const gradeBreakdown = [];
    
    // Add grade sales for all grades dynamically
    grades.forEach(grade => {
      if (product.grades && product.grades[grade] && product.grades[grade].qty > 0) {
        gradeBreakdown.push(`${grade}(${product.grades[grade].qty})`);
      }
    });

    // Add base price sales
    if (product.basePriceSales && product.basePriceSales.qty > 0) {
      gradeBreakdown.push(`ມາດຕະຖານ(${product.basePriceSales.qty})`);
    }

    // Add gifts with special formatting
    if (product.gifts && product.gifts.qty > 0) {
      const giftSavings = product.gifts.originalValue - product.gifts.revenue;
      gradeBreakdown.push(`ຂອງຂວັນ(${product.gifts.qty}☆${formatNumber(giftSavings)})`);
    }

    const gradeBreakdownText = gradeBreakdown.join(', ') || 'ບໍ່ມີຂໍ້ມູນ';
    const avgPrice = product.totalQty > 0 ? product.totalRevenue / product.totalQty : 0;

    return `
      <div class="product-item">
        <div class="product-rank">#${index + 1}</div>
        <div class="product-info">
          <div class="product-name">${(product.productName || 'Unknown Product').substring(0, 30)}</div>
          <div class="product-id">ID: ${product.productId}</div>
          <div class="product-breakdown">${gradeBreakdownText}</div>
        </div>
        <div class="product-stats">
          <div class="total-qty">${formatNumber(product.totalQty)} ຊິ້ນ</div>
          <div class="total-revenue">${formatNumber(product.totalRevenue)} LAK</div>
          <div class="avg-price">@ ${formatNumber(avgPrice)}/ຊິ້ນ</div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="products-section">
      <div class="products-title">ສິນຄ້າທັງໝົດທີ່ຂາຍໄດ້ (${allProducts.length} ລາຍການ)</div>
      ${productItems}
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

  // Handle both legacy format and new format
  const paymentItems = paymentStats.map(stat => {
    // Handle different stat object structures
    const code = stat.code || stat.payment_code || 'UNKNOWN';
    const name = stat.name || stat.payment_name || 'Unknown';
    const amount = stat.amount || 0;
    const count = stat.count || 0;
    const percentage = stat.percentage || 0;

    return `
      <div class="payment-item">
        <div class="payment-method">${name} (${code})</div>
        <div class="payment-details">
          <span class="amount">${formatNumber(amount)} LAK</span>
          <span class="count">(${count} ລາຍການ)</span>
          <span class="percentage">${percentage.toFixed(1)}%</span>
        </div>
      </div>
    `;
  }).join('');

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
 * Generate complete enhanced sales report HTML with A-Z support
 */
const generateEnhancedSalesReportHTML = (reportData) => {
  const {
    companyData,
    companyLogo,
    fromDate,
    toDate,
    terminalInfo,
    summaryData,
    gradeData,
    productSummary,
    paymentStats,
    formatNumber,
    user,
    availableGrades
  } = reportData;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>ລາຍງານການຂາຍລະອຽດ (A-Z)</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Noto Sans Lao', 'Arial', sans-serif;
          margin: 0;
          padding: 8px;
          font-size: 10px;
          line-height: 1.1;
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
          gap: 8px;
        }
        
        .header-left {
          flex: 0 0 auto;
        }
        
        .header-right {
          flex: 1;
          min-width: 0;
        }
        
        .logo-placeholder {
          width: 40px;
          height: 40px;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          font-size: 10px;
          font-weight: bold;
        }
        
        .company-name {
          font-weight: 600;
          font-size: 12px;
          margin-bottom: 2px;
        }
        
        .company-tel {
          font-size: 9px;
          color: #666;
        }
        
        .date-range-section {
          text-align: center;
          margin-bottom: 8px;
          padding: 4px;
          border: 1px solid #ddd;
        }
        
        .section-title {
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .date-info {
          font-size: 9px;
        }
        
        .date-line, .terminal-line {
          margin-bottom: 1px;
        }
        
        .summary-section {
          margin-bottom: 8px;
        }
        
        .summary-title, .grade-title, .products-title, .payment-title {
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 4px;
          text-align: center;
          background: #f5f5f5;
          padding: 2px;
        }
        
        .summary-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1px;
          padding: 1px 0;
          font-size: 9px;
        }
        
        .summary-item.total {
          font-weight: 600;
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
          padding: 2px 0;
          margin: 3px 0;
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
        
        .grade-section, .products-section, .payment-section {
          margin-bottom: 8px;
        }
        
        .grade-item {
          margin-bottom: 4px;
          padding: 3px;
          border: 1px solid #eee;
          background: #fafafa;
        }
        
        .grade-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
        }
        
        .grade-badge {
          font-size: 9px;
          font-weight: 600;
          padding: 1px 4px;
          border-radius: 2px;
        }
        
        .grade-badge.base { background: #4caf50; color: white; }
        .grade-badge.gift { background: #ffc107; color: black; }
        
        .grade-count {
          font-size: 9px;
          font-weight: 600;
        }
        
        .grade-details {
          font-size: 8px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        
        .revenue {
          font-weight: 600;
          color: #4caf50;
        }
        
        .avg-price {
          color: #666;
        }
        
        .order-count {
          color: #2196f3;
        }
        
        .gift-item .grade-details {
          flex-direction: column;
        }
        
        .original-value {
          color: #ff9800;
          font-weight: 500;
        }
        
        .savings {
          color: #f44336;
          font-weight: 600;
        }
        
        .product-item {
          margin-bottom: 4px;
          padding: 3px;
          border: 1px solid #ddd;
          display: flex;
          gap: 4px;
        }
        
        .product-rank {
          font-size: 9px;
          font-weight: 600;
          color: #666;
          min-width: 20px;
        }
        
        .product-info {
          flex: 1;
          font-size: 8px;
        }
        
        .product-name {
          font-weight: 600;
          margin-bottom: 1px;
        }
        
        .product-id {
          color: #666;
          margin-bottom: 1px;
        }
        
        .product-breakdown {
          color: #333;
          font-style: italic;
        }
        
        .product-stats {
          text-align: right;
          font-size: 8px;
          min-width: 60px;
        }
        
        .total-qty {
          font-weight: 600;
          color: #2196f3;
        }
        
        .total-revenue {
          font-weight: 600;
          color: #4caf50;
        }
        
        .avg-price {
          color: #666;
        }
        
        .payment-item {
          margin-bottom: 3px;
          padding: 2px;
          border: 1px solid #eee;
        }
        
        .payment-method {
          font-weight: 600;
          font-size: 10px;
          margin-bottom: 1px;
        }
        
        .payment-details {
          display: flex;
          justify-content: space-between;
          font-size: 8px;
        }
        
        .amount {
          font-weight: 600;
          color: #4caf50;
        }
        
        .count {
          color: #666;
        }
        
        .percentage {
          font-weight: 500;
          color: #2196f3;
        }
        
        .divider {
          text-align: center;
          margin: 6px 0;
          font-size: 8px;
          color: #999;
        }
        
        .footer-section {
          margin-top: 8px;
        }
        
        .footer-info {
          text-align: center;
          font-size: 8px;
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
          font-size: 9px;
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
      ${generateGradeBreakdownSection(gradeData, formatNumber, availableGrades)}
      ${generateAllProductsSection(productSummary, formatNumber, availableGrades)}
      ${generatePaymentBreakdownSection(paymentStats, formatNumber)}
      ${generateFooterSection(user)}
    </body>
    </html>
  `;
};

/**
 * Print the enhanced sales report
 */
const printEnhancedSalesReport = (windowContent) => {
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
    console.error('Error printing enhanced sales report:', error);
    alert('Error printing sales report. Please try again.');
  }
};

/**
 * Main function to generate and print enhanced sales report with detailed breakdown (A-Z GRADES + ALL PRODUCTS)
 */
export const printEnhancedSalesReportSummary = (params) => {
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
    multiPaymentCount = 0,
    // Grade and product data
    gradeSummary = {},
    basePriceSummary = {},
    giftSummary = {},
    productSummary = [],
    availableGrades = null // NEW: Accept available grades from Vue component
  } = params;

  console.log('🖨️ Generating enhanced sales report with A-Z grades and ALL products for 80mm printer');
  console.log('📊 Payment statistics received:', paymentStatistics);
  console.log('🔢 Single payments:', singlePaymentCount, 'Multi payments:', multiPaymentCount);
  console.log('📈 Available grades:', availableGrades);
  console.log('📦 Total products to print:', productSummary.length);

  try {
    // Calculate totals
    const totalSales = filteredOrderHeaderList.reduce((total, item) => {
      return total + safeParseNumber(item.total, 0);
    }, 0);
    
    const totalDiscount = filteredOrderHeaderList.reduce((total, item) => {
      return total + safeParseNumber(item.discount, 0);
    }, 0);
    
    const netSales = totalSales - totalDiscount;
    const totalTransactions = filteredOrderHeaderList.length;

    // Calculate total products sold - supports A-Z grades
    const totalProducts = Object.values(gradeSummary).reduce((sum, grade) => sum + (grade.qty || 0), 0) +
                          (basePriceSummary.qty || 0) + (giftSummary.qty || 0);

    // Enhanced summary data
    const summaryData = {
      totalTransactions,
      totalSales,
      totalDiscount,
      netSales,
      singlePaymentCount,
      multiPaymentCount,
      totalProducts,
      totalGiftQty: giftSummary.qty || 0,
      totalGiftValue: giftSummary.originalValue || 0,
      totalGiftSavings: (giftSummary.originalValue || 0) - (giftSummary.revenue || 0)
    };

    // Prepare grade data for detailed breakdown
    const gradeData = {
      ...gradeSummary,
      basePriceSales: basePriceSummary,
      gifts: giftSummary
    };

    const reportData = {
      companyData,
      companyLogo,
      fromDate,
      toDate,
      terminalInfo,
      summaryData,
      gradeData,
      productSummary, // Will show ALL products now
      paymentStats: paymentStatistics,
      formatNumber,
      user,
      availableGrades // Pass grades to report generator
    };

    console.log('📄 Report data prepared:', {
      totalTransactions: summaryData.totalTransactions,
      totalSales: summaryData.totalSales,
      paymentStatsCount: paymentStatistics.length,
      gradeDataKeys: Object.keys(gradeData),
      productCount: productSummary.length,
      availableGradesCount: availableGrades ? availableGrades.length : 'using default A-Z'
    });

    const enhancedSalesReportHTML = generateEnhancedSalesReportHTML(reportData);
    printEnhancedSalesReport(enhancedSalesReportHTML);

  } catch (error) {
    console.error('Error generating enhanced sales report:', error);
    alert('Error generating enhanced sales report. Please try again.');
  }
};

/**
 * Export helper function for date formatting
 */
export const formatDateForReport = formatDateLao;