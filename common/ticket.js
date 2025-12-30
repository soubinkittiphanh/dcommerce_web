/**
 * Enhanced Ticket Generation Module - FLEXIBLE 58MM & 80MM VERSION
 * Supports both 58mm and 80mm thermal printers with dynamic sizing
 * Default: 80mm (can be changed via paperWidth parameter)
 * 
 * FIXED ISSUES:
 * 1. NaN in change field - Added safe number parsing
 * 2. Gift items - Added [GIFT] marking and FREE display
 */

// ============================================================================
// API INTEGRATION & LOGO MANAGEMENT (unchanged)
// ============================================================================

let companyLogoCache = {
  url: null,
  company: null,
  loading: false,
  error: false,
  lastFetch: null,
  cacheExpiry: 5 * 60 * 1000, // 5 minutes cache
};

const loadCompanyLogoFromAPI = async (axios) => {
  const now = Date.now();
  const cacheValid = companyLogoCache.lastFetch && 
    (now - companyLogoCache.lastFetch) < companyLogoCache.cacheExpiry;

  if (cacheValid && companyLogoCache.url) {
    console.info('Using cached company logo');
    return companyLogoCache.url;
  }

  if (companyLogoCache.loading) {
    console.info('Company logo already loading, waiting...');
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (!companyLogoCache.loading) {
          clearInterval(checkInterval);
          resolve(companyLogoCache.url);
        }
      }, 100);
    });
  }

  companyLogoCache.loading = true;
  companyLogoCache.error = false;

  try {
    console.info('Fetching company logo from API...');
    
    const response = await axios.get('/api/public/company/findAll');
    const companies = Array.isArray(response.data) ? response.data : [];
    
    console.info(`Found ${companies.length} companies from API`);

    const firstActiveCompany = companies.find(company =>
      company.isActive === true && 
      company.profile_image_path && 
      company.profile_image_path.trim() !== '' &&
      company.profile_image_path !== null
    );

    if (firstActiveCompany) {
      companyLogoCache.company = firstActiveCompany;
      
      let baseUrl = '';
      if (axios.defaults.baseURL) {
        baseUrl = axios.defaults.baseURL.replace(/\/$/, '');
      } else {
        baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      }
      
      const logoPath = firstActiveCompany.profile_image_path.startsWith('/') 
        ? firstActiveCompany.profile_image_path 
        : `/${firstActiveCompany.profile_image_path}`;
      
      companyLogoCache.url = baseUrl ? `${baseUrl}${logoPath}` : logoPath;
      companyLogoCache.lastFetch = now;
      
      console.info('Company logo loaded successfully:', {
        company: firstActiveCompany.name,
        logoPath: firstActiveCompany.profile_image_path,
        fullUrl: companyLogoCache.url
      });
      
      return companyLogoCache.url;
    } else {
      console.warn('No active company with valid logo found in API response');
      companyLogoCache.url = null;
      companyLogoCache.lastFetch = now;
      return null;
    }

  } catch (error) {
    console.error('Error loading company logo from API:', error);
    companyLogoCache.error = true;
    companyLogoCache.url = null;
    companyLogoCache.lastFetch = now;
    return null;
  } finally {
    companyLogoCache.loading = false;
  }
};

const getCompanyLogo = async (params) => {
  const { 
    axios, 
    staticLogoPath = null, 
    companyData = null,
    fallbackLogo = '/static/images/default-logo.png'
  } = params;

  try {
    if (axios) {
      const apiLogo = await loadCompanyLogoFromAPI(axios);
      if (apiLogo) {
        console.info('Using API logo for ticket:', apiLogo);
        try {
          const testResponse = await fetch(apiLogo, { method: 'HEAD' });
          if (testResponse.ok) {
            return apiLogo;
          }
        } catch (fetchError) {
          console.warn('API logo URL fetch test failed:', fetchError.message);
        }
      }
    }

    if (staticLogoPath) {
      console.info('Using static logo for ticket:', staticLogoPath);
      return staticLogoPath;
    }

    if (companyData?.dcLogo) {
      try {
        const companyLogoPath = `/assets/image/${companyData.dcLogo}`;
        console.info('Using company data logo for ticket:', companyLogoPath);
        return companyLogoPath;
      } catch (error) {
        console.warn('Company data logo not accessible:', companyData.dcLogo);
      }
    }

    try {
      const navigationFallback = '/assets/image/MPWT/PWT.png';
      console.info('Using navigation fallback logo for ticket:', navigationFallback);
      return navigationFallback;
    } catch (error) {
      console.warn('Navigation fallback logo not found');
    }

    console.info('Using final fallback logo for ticket:', fallbackLogo);
    return fallbackLogo;

  } catch (error) {
    console.error('Error in getCompanyLogo:', error);
    return fallbackLogo;
  }
};

const clearLogoCache = () => {
  companyLogoCache = {
    url: null,
    company: null,
    loading: false,
    error: false,
    lastFetch: null,
    cacheExpiry: 5 * 60 * 1000,
  };
};

// ============================================================================
// UTILITY FUNCTIONS - ENHANCED WITH NUMBER SAFETY
// ============================================================================

/**
 * ✅ FIXED: Safe number parsing to prevent NaN issues
 */
const safeParseNumber = (value, defaultValue = 0) => {
  if (value === null || value === undefined || value === '') {
    return defaultValue;
  }
  
  // If it's already a number
  if (typeof value === 'number') {
    return isNaN(value) ? defaultValue : value;
  }
  
  // If it's a string, try to parse it
  if (typeof value === 'string') {
    // Remove any formatting (commas, currency symbols, etc)
    const cleanValue = value.toString().replace(/[^\d.-]/g, '');
    const parsed = parseFloat(cleanValue);
    return isNaN(parsed) ? defaultValue : parsed;
  }
  
  // Convert to number and validate
  const converted = Number(value);
  return isNaN(converted) ? defaultValue : converted;
};

const formatDate = (dateInput) => {
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

const validateTicketParams = (params, formatNumber) => {
  if (!params) {
    console.error('Parameters object is required');
    return false;
  }

  if (typeof formatNumber !== 'function') {
    console.error('formatNumber function is required');
    return false;
  }

  return true;
};

/**
 * Gets paper configuration based on width
 * @param {string} paperWidth - '58mm' or '80mm'
 * @returns {Object} Configuration object
 */
const getPaperConfig = (paperWidth = '80mm') => {
  const configs = {
    '58mm': {
      width: '58mm',
      fontSize: '10px',
      logoSize: '35px',
      padding: '6px',
      lineHeight: '1.1',
      itemSpacing: '1px',
      sectionSpacing: '4px'
    },
    '80mm': {
      width: '80mm',
      fontSize: '11px',
      logoSize: '45px',
      padding: '8px',
      lineHeight: '1.2',
      itemSpacing: '2px',
      sectionSpacing: '6px'
    }
  };

  return configs[paperWidth] || configs['80mm'];
};

// ============================================================================
// FLEXIBLE TRANSACTION LIST GENERATORS - WITH GIFT SUPPORT
// ============================================================================

/**
 * ✅ Helper function to determine how to display gift items
 */
const getGiftDisplayInfo = (item, price) => {
  const isGift = item.isGift === true;
  const isFree = price === 0;
  const hasSpecialPrice = isGift && price > 0;
  
  return {
    isGift,
    isFree,
    hasSpecialPrice,
    displayPrice: isGift && isFree ? 'FREE' : null,
    cssClass: isGift ? (isFree ? 'gift-item gift-free' : 'gift-item gift-special') : '',
    labelSuffix: isGift ? (hasSpecialPrice ? ' [SPECIAL PRICE]' : ' [GIFT]') : ''
  };
};

/**
 * ✅ ENHANCED: Generates transaction list HTML with smart gift item support
 */
const generateFlexibleTransactionList = (productCart, findAllProduct, formatNumber, paperWidth = '80mm') => {
  if (!Array.isArray(productCart) || productCart.length === 0) {
    return '<div class="item">ບໍ່ມີສິນຄ້າ</div>';
  }

  const is58mm = paperWidth === '58mm';

  return productCart.map(item => {
    const product = findAllProduct.find(el => el.id === item.id);

    if (!product) {
      console.warn(`Product not found for ID: ${item.id}`);
      return '';
    }

    const quantity = item.qty || 0;
    const price = safeParseNumber(item.localPrice, 0);
    const total = quantity * price;
    const giftInfo = getGiftDisplayInfo(item, price);

    if (is58mm) {
      // 58MM: Compact single-line format
      return `
        <div class="item ${giftInfo.cssClass}">
          <div class="item-left">${quantity}x ${product.pro_name || 'ສິນຄ້າບໍ່ຮູ້ຈັກ'}${giftInfo.labelSuffix}</div>
          <div class="item-right">${giftInfo.displayPrice || formatNumber(total)}</div>
        </div>
      `;
    } else {
      // 80MM: More detailed format with unit price
      return `
        <div class="item ${giftInfo.cssClass}">
          <div class="item-desc">
            <div class="item-name">${product.pro_name || 'ສິນຄ້າບໍ່ຮູ້ຈັກ'}${giftInfo.labelSuffix}</div>
            <div class="item-detail">${quantity} x ${giftInfo.displayPrice === 'FREE' ? 'FREE' : formatNumber(price)}</div>
          </div>
          <div class="item-total">${giftInfo.displayPrice || formatNumber(total)}</div>
        </div>
      `;
    }
  }).join('');
};

/**
 * ✅ ENHANCED: Generates reprint transaction list with smart gift support
 */
const generateFlexibleReprintTransactionList = (productCart, findAllProduct, formatNumber, paperWidth = '80mm') => {
  if (!Array.isArray(productCart) || productCart.length === 0) {
    return '<div class="item">ບໍ່ມີສິນຄ້າ</div>';
  }

  const is58mm = paperWidth === '58mm';

  return productCart.map(item => {
    const product = findAllProduct.find(el => el.id === item.product?.id);

    if (!product) {
      console.warn(`Product not found for ID: ${item.product?.id}`);
      return '';
    }

    const quantity = item.quantity || 0;
    const price = safeParseNumber(item.price, 0);
    const total = quantity * price;
    const giftInfo = getGiftDisplayInfo(item, price);

    if (is58mm) {
      return `
        <div class="item ${giftInfo.cssClass}">
          <div class="item-left">${quantity}x ${product.pro_name || 'ສິນຄ້າບໍ່ຮູ້ຈັກ'}${giftInfo.labelSuffix}</div>
          <div class="item-right">${giftInfo.displayPrice || formatNumber(total)}</div>
        </div>
      `;
    } else {
      return `
        <div class="item ${giftInfo.cssClass}">
          <div class="item-desc">
            <div class="item-name">${product.pro_name || 'ສິນຄ້າບໍ່ຮູ້ຈັກ'}${giftInfo.labelSuffix}</div>
            <div class="item-detail">${quantity} x ${giftInfo.displayPrice === 'FREE' ? 'FREE' : formatNumber(price)}</div>
          </div>
          <div class="item-total">${giftInfo.displayPrice || formatNumber(total)}</div>
        </div>
      `;
    }
  }).join('');
};

/**
 * Generates discount section with flexible layout
 */
const generateFlexibleDiscountSection = (discount, formatNumber, paperWidth = '80mm') => {
  const safeDiscount = safeParseNumber(discount, 0); // ✅ Safe parsing
  if (safeDiscount <= 0) return '';

  const is58mm = paperWidth === '58mm';

  if (is58mm) {
    return `
      <div class="item discount">
        <div class="item-left">ສ່ວນຫຼຸດ</div>
        <div class="item-right">-${formatNumber(safeDiscount)}</div>
      </div>
    `;
  } else {
    return `
      <div class="item discount">
        <div class="item-desc">
          <div class="item-name">ສ່ວນຫຼຸດ</div>
        </div>
        <div class="item-total">-${formatNumber(safeDiscount)}</div>
      </div>
    `;
  }
};

/**
 * Generates total section with flexible layout
 */
const generateFlexibleTotalSection = (currencyList, grandTotal, discount, formatNumber, paperWidth = '80mm') => {
  if (!Array.isArray(currencyList) || currencyList.length === 0) {
    return '';
  }

  const safeGrandTotal = safeParseNumber(grandTotal, 0); // ✅ Safe parsing
  const safeDiscount = safeParseNumber(discount, 0); // ✅ Safe parsing
  const finalTotal = safeGrandTotal - safeDiscount;
  const is58mm = paperWidth === '58mm';

  return currencyList.map(currency => {
    const rate = safeParseNumber(currency.rate, 1); // ✅ Safe parsing with default 1
    const convertedAmount = finalTotal / rate;

    if (is58mm) {
      return `
        <div class="total-line-compact">
          <strong>${currency.code || 'N/A'} ${formatNumber(convertedAmount)}</strong>
        </div>
      `;
    } else {
      return `
        <div class="total-line">
          <span class="total-label">ລວມທັງໝົດ:</span>
          <span class="total-amount">${currency.code || 'N/A'} ${formatNumber(convertedAmount)}</span>
        </div>
      `;
    }
  }).join('');
};

/**
 * Generates header section with flexible layout
 */
const generateFlexibleHeaderSection = (headerData, dateValue, logoUrl, paperWidth = '80mm') => {
  const {
    lastTransactionSaleHeaderId,
    currentTerminal,
    user
  } = headerData;

  const companyName = currentTerminal?.location?.company?.name || 
                     companyLogoCache.company?.name || 
                     'Dcommerce';
  const companyTel = currentTerminal?.location?.company?.tel || 
                    companyLogoCache.company?.tel || 
                    'N/A';
  const companyLogoUrl = currentTerminal?.location?.company?.profile_image_path || 
                        companyLogoCache.company?.profile_image_path || 
                        'N/A';
  const userName = user?.cus_name || 'N/A';

  const config = getPaperConfig(paperWidth);
  const is58mm = paperWidth === '58mm';

  const logoHtml = logoUrl ? 
    `<img src="${currentTerminal.baseURL}/${companyLogoUrl}" alt="Logo" 
          style="width: ${config.logoSize}; height: ${config.logoSize}; object-fit: contain;" 
          onerror="this.style.display='none';">` : 
    `<div class="logo-placeholder">${companyName.substring(0, 2).toUpperCase()}</div>`;

  if (is58mm) {
    // 58MM: Compact vertical layout
    return `
      <div class="header-58mm">
        <div class="header-logo">${logoHtml}</div>
        <div class="company-info-58mm">
          <div class="company-name">${companyName}</div>
          <div class="company-tel">ເບີໂທ: ${companyTel}</div>
        </div>
      </div>
      <div class="receipt-info-58mm">
        <div>ວັນທີ: ${formatDate(dateValue)}</div>
        <div>ເລກທີ: ${lastTransactionSaleHeaderId}</div>
        <div>ຜູ້ຂາຍ: ${userName}</div>
      </div>
      <div class="divider">- - - - - - - - - - - - - - -</div>
    `;
  } else {
    // 80MM: Horizontal layout with more space
    return `
      <div class="header-80mm">
        <div class="header-left">
          ${logoHtml}
        </div>
        <div class="header-right">
          <div class="company-name">${companyName}</div>
          <div class="company-tel">ເບີໂທ: ${companyTel}</div>
          <div class="receipt-info-80mm">
            <div>ວັນທີ: ${formatDate(dateValue)}</div>
            <div>ເລກທີ: ${lastTransactionSaleHeaderId}</div>
            <div>ຜູ້ຂາຍ: ${userName}</div>
          </div>
        </div>
      </div>
      <div class="divider">- - - - - - - - - - - - - - - - - - - - - - - - -</div>
    `;
  }
};

/**
 * ✅ FIXED: Generates payment section with safe number parsing
 */
const generateFlexiblePaymentSection = (paymentData, formatNumber, paperWidth = '80mm') => {
  const { currentPaymentCode, cashReceived, changes } = paymentData;
  
  // ✅ CRITICAL FIX: Safe parsing of payment values to prevent NaN
  const safeCashReceived = safeParseNumber(cashReceived, 0);
  const safeChanges = safeParseNumber(changes, 0);
  
  console.log('🔍 Payment Section Debug:', {
    originalCashReceived: cashReceived,
    safeCashReceived,
    originalChanges: changes,
    safeChanges,
    changeType: typeof changes
  });
  
  const is58mm = paperWidth === '58mm';
  
  if (is58mm) {
    return `
      <div class="payment-section">
        <div class="item">
          <div class="item-left">ຊຳລະດ້ວຍ:</div>
          <div class="item-right">${currentPaymentCode || 'N/A'}</div>
        </div>
        <div class="item">
          <div class="item-left">ຮັບຊຳລະ:</div>
          <div class="item-right">${formatNumber(safeCashReceived)}</div>
        </div>
        <div class="item">
          <div class="item-left">ເງິນທອນ:</div>
          <div class="item-right">${formatNumber(safeChanges)}</div>
        </div>
      </div>
    `;
  } else {
    return `
      <div class="payment-section">
        <div class="payment-item">
          <span class="payment-label">ຊຳລະດ້ວຍ:</span>
          <span class="payment-value">${currentPaymentCode || 'N/A'}</span>
        </div>
        <div class="payment-item">
          <span class="payment-label">ຮັບຊຳລະ:</span>
          <span class="payment-value">${formatNumber(safeCashReceived)}</span>
        </div>
        <div class="payment-item">
          <span class="payment-label">ເງິນທອນ:</span>
          <span class="payment-value">${formatNumber(safeChanges)}</span>
        </div>
      </div>
    `;
  }
};

/**
 * Generates window content with dynamic CSS based on paper width
 */
const generateFlexibleWindowContent = (contentData, paperWidth = '80mm') => {
  const {
    ticketCommon,
    headerHtml,
    transactionListHtml,
    discountHtml,
    totalHtml,
    paymentSectionHtml
  } = contentData;

  const config = getPaperConfig(paperWidth);
  const is58mm = paperWidth === '58mm';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Receipt</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Noto Sans Lao', 'Arial', sans-serif;
          margin: 0;
          padding: ${config.padding};
          font-size: ${config.fontSize};
          line-height: ${config.lineHeight};
          color: #000;
          width: ${config.width};
          max-width: ${config.width};
        }
        
        /* ========== COMMON STYLES ========== */
        .title {
          text-align: center;
          font-weight: 600;
          font-size: ${is58mm ? '12px' : '13px'};
          margin-bottom: ${config.sectionSpacing};
        }
        
        .divider {
          text-align: center;
          margin: ${config.sectionSpacing} 0;
          font-size: 9px;
          color: #999;
        }
        
        .logo-placeholder {
          width: ${config.logoSize};
          height: ${config.logoSize};
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          font-size: ${is58mm ? '8px' : '10px'};
          font-weight: bold;
        }
        
        .company-name {
          font-weight: 600;
          font-size: ${is58mm ? '11px' : '12px'};
          margin-bottom: 2px;
        }
        
        .company-tel {
          font-size: ${is58mm ? '8px' : '9px'};
          color: #666;
        }
        
        /* ========== GIFT ITEM STYLES - ENHANCED WITH PRICE DISTINCTION ========== */
        
        /* Base gift item styling */
        .gift-item .item-name,
        .gift-item .item-left {
          font-weight: 600;
        }
        
        .gift-item .item-total,
        .gift-item .item-right {
          font-weight: 600;
        }
        
        /* Free gift items - Green styling */
        .gift-free .item-name,
        .gift-free .item-left {
          color: #4caf50;
        }
        
        .gift-free .item-total,
        .gift-free .item-right {
          color: #4caf50;
          font-style: italic;
        }
        
        /* Special price gift items - Blue styling */
        .gift-special .item-name,
        .gift-special .item-left {
          color: #1976d2;
        }
        
        .gift-special .item-total,
        .gift-special .item-right {
          color: #1976d2;
        }
        
        /* General gift styling fallback */
        .gift-item:not(.gift-free):not(.gift-special) .item-name,
        .gift-item:not(.gift-free):not(.gift-special) .item-left {
          color: #ff9800;
        }
        
        .gift-item:not(.gift-free):not(.gift-special) .item-total,
        .gift-item:not(.gift-free):not(.gift-special) .item-right {
          color: #ff9800;
        }
        
        /* ========== 58MM SPECIFIC STYLES ========== */
        ${is58mm ? `
        .header-58mm {
          display: flex;
          align-items: center;
          margin-bottom: 4px;
          gap: 6px;
        }
        
        .company-info-58mm {
          flex: 1;
          min-width: 0;
        }
        
        .receipt-info-58mm {
          font-size: 8px;
          margin-bottom: 4px;
        }
        
        .receipt-info-58mm > div {
          margin-bottom: 1px;
        }
        
        .item {
          display: flex;
          justify-content: space-between;
          margin-bottom: ${config.itemSpacing};
          padding: 1px 0;
        }
        
        .item-left {
          flex: 1;
          font-weight: 400;
          word-break: break-word;
          margin-right: 4px;
        }
        
        .item-right {
          font-weight: 500;
          text-align: right;
          white-space: nowrap;
        }
        
        .total-line-compact {
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          margin: 2px 0;
        }
        ` : `
        /* ========== 80MM SPECIFIC STYLES ========== */
        .header-80mm {
          display: flex;
          align-items: flex-start;
          margin-bottom: 6px;
          gap: 10px;
        }
        
        .header-left {
          flex: 0 0 auto;
        }
        
        .header-right {
          flex: 1;
          min-width: 0;
        }
        
        .receipt-info-80mm {
          margin-top: 4px;
          font-size: 9px;
        }
        
        .receipt-info-80mm > div {
          margin-bottom: 1px;
        }
        
        .item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: ${config.itemSpacing};
          padding: 1px 0;
        }
        
        .item-desc {
          flex: 1;
          margin-right: 8px;
        }
        
        .item-name {
          font-weight: 500;
          margin-bottom: 1px;
        }
        
        .item-detail {
          font-size: 9px;
          color: #666;
        }
        
        .item-total {
          font-weight: 500;
          text-align: right;
          white-space: nowrap;
        }
        
        .total-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 600;
          margin: 2px 0;
        }
        
        .payment-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
        }
        
        .payment-label {
          font-weight: 500;
        }
        
        .payment-value {
          font-weight: 600;
        }
        `}
        
        /* ========== COMMON ELEMENTS ========== */
        .item.discount .item-left,
        .item.discount .item-name {
          font-style: italic;
        }
        
        .item.discount .item-right,
        .item.discount .item-total {
          color: #d32f2f;
        }
        
        .payment-section {
          margin-top: ${config.sectionSpacing};
          padding-top: 4px;
          border-top: 1px dashed #999;
        }
        
        .total-section {
          margin-top: 4px;
          padding-top: 4px;
          border-top: 1px solid #000;
        }
        
        .footer {
          text-align: center;
          margin-top: ${config.sectionSpacing};
          font-size: ${is58mm ? '9px' : '10px'};
        }
        
        .footer .thank-you {
          font-weight: 600;
          margin-bottom: 2px;
        }
        
        .footer .sub-text {
          color: #666;
          font-size: ${is58mm ? '8px' : '9px'};
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
          size: ${config.width} auto;
        }
      </style>
    </head>
    <body>
      <div class="title">ໃບຮັບເງິນ</div>
      ${headerHtml}
      
      ${transactionListHtml}
      ${discountHtml}
      
      <div class="divider">${is58mm ? '- - - - - - - - - - - - - - -' : '- - - - - - - - - - - - - - - - - - - - - - - - -'}</div>
      
      ${paymentSectionHtml}
      
      <div class="total-section">
        ${totalHtml}
      </div>
      
      <div class="footer">
        <div class="thank-you">THANK YOU</div>
        <div class="sub-text">ຂໍຂອບໃຈທີ່ໃຊ້ບໍລິການ</div>
      </div>
    </body>
    </html>
  `;
};

const printTicket = (windowContent, paperWidth = '80mm') => {
  try {
    const windowWidth = paperWidth === '58mm' ? 350 : 450;
    const windowHeight = 600;
    
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
    console.error('Error printing ticket:', error);
    alert('Error printing ticket. Please try again.');
  }
};

// ============================================================================
// MAIN TICKET FUNCTIONS - FIXED VERSIONS
// ============================================================================

export const defaultTicket = async (params) => {
  const {
    productCart = [],
    findAllProduct = [],
    formatNumber,
    discount = 0,
    currencyList = [],
    grandTotal = 0,
    companyLogo = '',
    lastTransactionSaleHeaderId = '',
    currentTerminal = {},
    user = {},
    ticketCommon = {},
    currentPaymentCode = '',
    cashReceived = 0,
    changes = 0,
    axios = null,
    companyData = null,
    paperWidth = '80mm' // NEW: Paper width parameter (58mm or 80mm)
  } = params;

  if (!validateTicketParams(params, formatNumber)) return;

  console.log(`🖨️ Generating ticket for ${paperWidth} printer`);
  console.log('🔍 Input values debug:', {
    cashReceived,
    changes,
    cashReceivedType: typeof cashReceived,
    changesType: typeof changes
  });

  try {
    const currentDate = new Date();

    const logoUrl = await getCompanyLogo({
      axios,
      staticLogoPath: companyLogo,
      companyData,
      fallbackLogo: '/static/images/default-logo.png'
    });

    const transactionListHtml = generateFlexibleTransactionList(productCart, findAllProduct, formatNumber, paperWidth);
    const discountHtml = generateFlexibleDiscountSection(discount, formatNumber, paperWidth);
    const totalHtml = generateFlexibleTotalSection(currencyList, grandTotal, discount, formatNumber, paperWidth);
    const headerHtml = generateFlexibleHeaderSection({
      lastTransactionSaleHeaderId,
      currentTerminal,
      user
    }, currentDate, logoUrl, paperWidth);
    const paymentSectionHtml = generateFlexiblePaymentSection({
      currentPaymentCode,
      cashReceived,
      changes
    }, formatNumber, paperWidth);

    const windowContent = generateFlexibleWindowContent({
      ticketCommon,
      headerHtml,
      transactionListHtml,
      discountHtml,
      totalHtml,
      paymentSectionHtml
    }, paperWidth);

    printTicket(windowContent, paperWidth);

  } catch (error) {
    console.error('Error generating default ticket:', error);
  }
};

export const defaultTicketReprint = async (params) => {
  const {
    productCart = [],
    findAllProduct = [],
    formatNumber,
    discount = 0,
    currencyList = [],
    grandTotal = 0,
    companyLogo = '',
    lastTransactionSaleHeaderId = '',
    currentTerminal = {},
    user = {},
    ticketCommon = {},
    currentPaymentCode = '',
    cashReceived = 0,
    changes = 0,
    bookingDate = new Date().toISOString(),
    axios = null,
    companyData = null,
    paperWidth = '80mm' // NEW: Paper width parameter
  } = params;

  if (!validateTicketParams(params, formatNumber)) return;

  console.log(`🖨️ Generating reprint ticket for ${paperWidth} printer`);

  try {
    const logoUrl = await getCompanyLogo({
      axios,
      staticLogoPath: companyLogo,
      companyData,
      fallbackLogo: '/static/images/default-logo.png'
    });

    const transactionListHtml = generateFlexibleReprintTransactionList(productCart, findAllProduct, formatNumber, paperWidth);
    const discountHtml = generateFlexibleDiscountSection(discount, formatNumber, paperWidth);
    const totalHtml = generateFlexibleTotalSection(currencyList, grandTotal, discount, formatNumber, paperWidth);
    const headerHtml = generateFlexibleHeaderSection({
      lastTransactionSaleHeaderId,
      currentTerminal,
      user
    }, bookingDate, logoUrl, paperWidth);
    const paymentSectionHtml = generateFlexiblePaymentSection({
      currentPaymentCode,
      cashReceived,
      changes
    }, formatNumber, paperWidth);

    const windowContent = generateFlexibleWindowContent({
      ticketCommon,
      headerHtml,
      transactionListHtml,
      discountHtml,
      totalHtml,
      paymentSectionHtml
    }, paperWidth);

    printTicket(windowContent, paperWidth);

  } catch (error) {
    console.error('Error generating reprint ticket:', error);
  }
};

export const customerTicket = async (params) => {
  const {
    productCart = [],
    findAllProduct = [],
    formatNumber,
    discount = 0,
    currencyList = [],
    grandTotal = 0,
    companyLogo = '',
    lastTransactionSaleHeaderId = '',
    currentTerminal = {},
    user = {},
    ticketCommon = {},
    currentPaymentCode = '',
    cashReceived = 0,
    changes = 0,
    axios = null,
    companyData = null,
    paperWidth = '80mm' // NEW: Paper width parameter
  } = params;

  if (!validateTicketParams(params, formatNumber)) return;

  console.log(`🖨️ Generating customer ticket for ${paperWidth} printer`);

  try {
    const currentDate = new Date();

    const logoUrl = await getCompanyLogo({
      axios,
      staticLogoPath: companyLogo,
      companyData,
      fallbackLogo: '/static/images/default-logo.png'
    });

    const transactionListHtml = generateFlexibleTransactionList(productCart, findAllProduct, formatNumber, paperWidth);
    const discountHtml = generateFlexibleDiscountSection(discount, formatNumber, paperWidth);
    const totalHtml = generateFlexibleTotalSection(currencyList, grandTotal, discount, formatNumber, paperWidth);
    const headerHtml = generateFlexibleHeaderSection({
      lastTransactionSaleHeaderId,
      currentTerminal,
      user
    }, currentDate, logoUrl, paperWidth);
    const paymentSectionHtml = generateFlexiblePaymentSection({
      currentPaymentCode,
      cashReceived,
      changes
    }, formatNumber, paperWidth);

    const windowContent = generateFlexibleWindowContent({
      ticketCommon,
      headerHtml,
      transactionListHtml,
      discountHtml,
      totalHtml,
      paymentSectionHtml
    }, paperWidth);

    printTicket(windowContent, paperWidth);

  } catch (error) {
    console.error('Error generating customer ticket:', error);
  }
};

// ============================================================================
// UTILITY EXPORTS
// ============================================================================

export const refreshCompanyLogo = async (axios) => {
  clearLogoCache();
  return await loadCompanyLogoFromAPI(axios);
};

export const getLogoCacheInfo = () => {
  return { ...companyLogoCache };
};

export const preloadCompanyLogo = async (axios) => {
  try {
    await loadCompanyLogoFromAPI(axios);
    console.info('Company logo preloaded successfully');
  } catch (error) {
    console.warn('Failed to preload company logo:', error);
  }
};

/**
 * Get supported paper widths
 * @returns {Array} Array of supported paper widths
 */
export const getSupportedPaperWidths = () => {
  return ['58mm', '80mm'];
};