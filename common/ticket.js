/**
 * Enhanced Ticket Generation Module - VERSION 3.0 (A4 & A5 SUPPORT)
 * FIXED: Professional layout for A4/A5 documents.
 * FIXED: Thermal layout for 58mm/80mm receipts.
 */

import CurrencyHelper from '@/utils/currency-helper'

// ============================================================================
// API INTEGRATION & LOGO MANAGEMENT
// ============================================================================

let companyLogoCache = {
  url: null,
  company: null,
  loading: false,
  error: false,
  lastFetch: null,
  cacheExpiry: 5 * 60 * 1000, 
};

const loadCompanyLogoFromAPI = async (axios) => {
  const now = Date.now();
  const cacheValid = companyLogoCache.lastFetch &&
    (now - companyLogoCache.lastFetch) < companyLogoCache.cacheExpiry;

  if (cacheValid && companyLogoCache.url) return companyLogoCache.url;

  if (companyLogoCache.loading) {
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
    const response = await axios.get('/api/public/company/findAll');
    const companies = Array.isArray(response.data) ? response.data : [];

    const firstActiveCompany = companies.find(company =>
      company.isActive === true &&
      company.profile_image_path &&
      company.profile_image_path.trim() !== '' &&
      company.profile_image_path !== null
    );

    if (firstActiveCompany) {
      companyLogoCache.company = firstActiveCompany;
      let baseUrl = axios.defaults.baseURL ? axios.defaults.baseURL.replace(/\/$/, '') : (typeof window !== 'undefined' ? window.location.origin : '');
      const logoPath = firstActiveCompany.profile_image_path.startsWith('/') ? firstActiveCompany.profile_image_path : `/${firstActiveCompany.profile_image_path}`;
      companyLogoCache.url = baseUrl ? `${baseUrl}${logoPath}` : logoPath;
      companyLogoCache.lastFetch = now;
      return companyLogoCache.url;
    } else {
      companyLogoCache.url = null;
      companyLogoCache.lastFetch = now;
      return null;
    }
  } catch (error) {
    companyLogoCache.error = true;
    companyLogoCache.url = null;
    companyLogoCache.lastFetch = now;
    return null;
  } finally {
    companyLogoCache.loading = false;
  }
};

const getCompanyLogo = async (params) => {
  const { axios, staticLogoPath = null, companyData = null, fallbackLogo = '/static/images/default-logo.png' } = params;

  try {
    if (axios) {
      const apiLogo = await loadCompanyLogoFromAPI(axios);
      if (apiLogo) return apiLogo;
    }
    if (staticLogoPath) return staticLogoPath;
    if (companyData?.dcLogo) return `/assets/image/${companyData.dcLogo}`;
    return '/assets/image/MPWT/PWT.png';
  } catch (error) {
    return fallbackLogo;
  }
};

const clearLogoCache = () => {
  companyLogoCache = { url: null, company: null, loading: false, error: false, lastFetch: null, cacheExpiry: 5 * 60 * 1000 };
};

// ============================================================================
// UTILITY FUNCTIONS & PRICE/CURRENCY ENGINE
// ============================================================================

const safeParseNumber = (value, defaultValue = 0) => {
  if (value === null || value === undefined || value === '') return defaultValue;
  if (typeof value === 'number') return isNaN(value) ? defaultValue : value;
  if (typeof value === 'string') {
    const parsed = parseFloat(value.toString().replace(/[^\d.-]/g, ''));
    return isNaN(parsed) ? defaultValue : parsed;
  }
  return isNaN(Number(value)) ? defaultValue : Number(value);
};

const getItemActivePrice = (item) => {
  if (item.isGift === true && typeof item.localPrice !== 'undefined') {
    return safeParseNumber(item.localPrice, 0);
  }
  if (item.priceListId !== null && item.priceListId !== undefined && Array.isArray(item.priceLists)) {
    const activePriceList = item.priceLists.find(pl => pl.id === item.priceListId);
    if (activePriceList) {
      return safeParseNumber(activePriceList.amount, 0);
    }
  }
  return safeParseNumber(item.localPrice ?? item.pro_price, 0);
};

const getItemActiveCurrencyId = (item) => {
  if (item.priceListId !== null && item.priceListId !== undefined && Array.isArray(item.priceLists)) {
    const activePriceList = item.priceLists.find(pl => pl.id === item.priceListId);
    if (activePriceList && activePriceList.currencyId) {
      return activePriceList.currencyId;
    }
  }
  return item.saleCurrencyId;
};

const formatDate = (dateInput) => {
  try {
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return 'Invalid Date';
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  } catch (error) { return 'Date Error'; }
};

const validateTicketParams = (params, formatNumber) => {
  return params && typeof formatNumber === 'function';
};

const getPaperConfig = (paperWidth = '80mm') => {
  const configs = {
    '58mm': { width: '58mm', fontSize: '10px', logoSize: '35px', padding: '6px', lineHeight: '1.1', itemSpacing: '1px', sectionSpacing: '4px' },
    '80mm': { width: '80mm', fontSize: '11px', logoSize: '45px', padding: '8px', lineHeight: '1.2', itemSpacing: '2px', sectionSpacing: '6px' },
    'A5':   { width: '148mm', fontSize: '14px', logoSize: '70px', padding: '20px', lineHeight: '1.4', itemSpacing: '4px', sectionSpacing: '12px' },
    'A4':   { width: '210mm', fontSize: '16px', logoSize: '90px', padding: '30px', lineHeight: '1.5', itemSpacing: '6px', sectionSpacing: '18px' }
  };
  return configs[paperWidth] || configs['80mm'];
};

const getLocalCurrency = (currencyList) => {
  if (!Array.isArray(currencyList)) return null;
  return currencyList.find(currency => currency.isLocalCCY === true) || null;
};

// ============================================================================
// TRANSACTION GENERATORS
// ============================================================================

const getGiftDisplayInfo = (item, activePrice) => {
  const isFree = activePrice === 0;
  const isGiftMarked = item.isGift === true;
  return {
    isGift: isGiftMarked,
    isFree,
    displayPrice: isFree ? 'FREE' : null, 
    cssClass: isGiftMarked ? (isFree ? 'gift-item gift-free' : 'gift-item gift-special') : '',
    labelSuffix: isGiftMarked ? (isFree ? ' [GIFT]' : ' [SPECIAL]') : ''
  };
};

const generateFlexibleTransactionList = (productCart, findAllProduct, formatNumber, currencyList, paperWidth = '80mm') => {
  const cartItems = productCart.lines || productCart;
  if (!Array.isArray(cartItems) || cartItems.length === 0) return '<div class="item">ບໍ່ມີສິນຄ້າ</div>';
  const isThermal = paperWidth === '58mm' || paperWidth === '80mm';

  return cartItems.map(item => {
    const productName = item.pro_name || findAllProduct.find(el => el.id === item.id)?.pro_name || 'ສິນຄ້າບໍ່ຮູ້ຈັກ';
    const quantity = item.qty || 0;
    const activePrice = getItemActivePrice(item);
    const total = quantity * activePrice;
    const currency = currencyList.find(c => c.id === getItemActiveCurrencyId(item));
    const currencyCode = currency?.code || 'LAK';
    const giftInfo = getGiftDisplayInfo(item, activePrice);

    if (paperWidth === '58mm') {
      return `
        <div class="item ${giftInfo.cssClass}">
          <div class="item-left">${quantity}x ${productName}${giftInfo.labelSuffix}</div>
          <div class="item-right">${giftInfo.displayPrice || `${formatNumber(total)} ${currencyCode}`}</div>
        </div>`;
    } else {
      return `
        <div class="item ${giftInfo.cssClass}">
          <div class="item-desc">
            <div class="item-name" style="${!isThermal ? 'font-size: 1.1em;' : ''}">${productName}${giftInfo.labelSuffix}</div>
            <div class="item-detail">${quantity} x ${giftInfo.displayPrice === 'FREE' ? 'FREE' : `${formatNumber(activePrice)} ${currencyCode}`}</div>
          </div>
          <div class="item-total" style="${!isThermal ? 'font-size: 1.1em;' : ''}">${giftInfo.displayPrice || `${formatNumber(total)} ${currencyCode}`}</div>
        </div>`;
    }
  }).join('');
};

const generateCurrencyBreakdownSection = (productCart, currencyList, formatNumber, paperWidth = '80mm') => {
  const cartItems = productCart.lines || productCart;
  if (!Array.isArray(cartItems) || cartItems.length === 0) return '';
  const currencyGroups = {};

  cartItems.forEach(item => {
    const currencyId = getItemActiveCurrencyId(item);
    if (!currencyGroups[currencyId]) {
      currencyGroups[currencyId] = { currency: currencyList.find(c => c.id === currencyId), total: 0 };
    }
    currencyGroups[currencyId].total += (item.qty || 0) * getItemActivePrice(item);
  });

  const is58mm = paperWidth === '58mm';
  const breakdownHtml = Object.values(currencyGroups).map(group => {
    const currencyCode = group.currency?.code || 'N/A';
    return is58mm ? 
      `<div class="item currency-subtotal"><div class="item-left">Subtotal ${currencyCode}:</div><div class="item-right">${formatNumber(group.total)} ${currencyCode}</div></div>` :
      `<div class="item currency-subtotal"><div class="item-desc"><div class="item-name">Subtotal ${currencyCode}:</div></div><div class="item-total">${formatNumber(group.total)} ${currencyCode}</div></div>`;
  }).join('');

  return `<div class="divider">${is58mm ? '- - - - - - -' : '- - - - - - - - - - - - - - - - -'}</div>${breakdownHtml}`;
};

const calculateTotalInLocalCurrency = (productCart, currencyList) => {
  const cartItems = productCart.lines || productCart;
  const localCurrency = getLocalCurrency(currencyList);
  if (!localCurrency) return { totalInLocal: 0, localCurrency: null };

  let totalInLocal = 0;
  cartItems.forEach(item => {
    const itemTotal = (item.qty || 0) * getItemActivePrice(item);
    const currency = currencyList.find(c => c.id === getItemActiveCurrencyId(item));
    totalInLocal += (currency && !currency.isLocalCCY) ? CurrencyHelper.convertToLocal(itemTotal, currency, localCurrency) : itemTotal;
  });
  return { totalInLocal, localCurrency };
};

const generateFlexibleTotalSection = (productCart, currencyList, discount, formatNumber, paperWidth = '80mm') => {
  const { totalInLocal, localCurrency } = calculateTotalInLocalCurrency(productCart, currencyList);
  if (!localCurrency) return '';
  const finalTotal = totalInLocal - safeParseNumber(discount, 0);
  const is58mm = paperWidth === '58mm';
  const isLarge = paperWidth === 'A4' || paperWidth === 'A5';

  return is58mm ? 
    `<div class="total-line-compact"><strong>ລວມທັງໝົດ: ${formatNumber(finalTotal)} ${localCurrency.code}</strong></div>` : 
    `<div class="total-line primary-total" style="${isLarge ? 'font-size: 1.3em; margin-top: 10px;' : ''}"><span class="total-label">ລວມທັງໝົດ:</span><span class="total-amount">${formatNumber(finalTotal)} ${localCurrency.code}</span></div>`;
};

const generateFlexibleDiscountSection = (discount, formatNumber, currencyList, paperWidth = '80mm') => {
  const safeDiscount = safeParseNumber(discount, 0);
  if (safeDiscount <= 0) return '';
  const currencyCode = getLocalCurrency(currencyList)?.code || 'LAK';
  const is58mm = paperWidth === '58mm';

  return is58mm ? 
    `<div class="item discount"><div class="item-left">ສ່ວນຫຼຸດ</div><div class="item-right">-${formatNumber(safeDiscount)} ${currencyCode}</div></div>` :
    `<div class="item discount"><div class="item-desc"><div class="item-name">ສ່ວນຫຼຸດ</div></div><div class="item-total">-${formatNumber(safeDiscount)} ${currencyCode}</div></div>`;
};

const generateFlexibleHeaderSection = (headerData, dateValue, logoUrl, paperWidth = '80mm') => {
  const { lastTransactionSaleHeaderId, currentTerminal, user } = headerData;
  const companyName = currentTerminal?.location?.company?.name || companyLogoCache.company?.name || 'Dcommerce';
  const companyTel = currentTerminal?.location?.company?.tel || companyLogoCache.company?.tel || 'N/A';
  const companyLogoPath = currentTerminal?.location?.company?.profile_image_path || companyLogoCache.company?.profile_image_path;
  const userName = user?.cus_name || 'N/A';
  const config = getPaperConfig(paperWidth);
  const is58mm = paperWidth === '58mm';
  const isLarge = paperWidth === 'A4' || paperWidth === 'A5';

  const finalLogoUrl = companyLogoPath ? `${currentTerminal.baseURL}/${companyLogoPath}` : logoUrl;
  const logoHtml = finalLogoUrl ?
    `<img src="${finalLogoUrl}" alt="Logo" style="width: ${config.logoSize}; height: auto; max-height: ${config.logoSize}; object-fit: contain;" onerror="this.style.display='none';">` :
    `<div class="logo-placeholder">${companyName.substring(0, 2).toUpperCase()}</div>`;

  if (isLarge) {
    return `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
        <div class="header-left">${logoHtml}</div>
        <div style="text-align: right;">
          <div class="company-name" style="font-size: ${paperWidth === 'A4' ? '24px' : '20px'};">${companyName}</div>
          <div class="company-tel" style="font-size: 14px;">ເບີໂທ: ${companyTel}</div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 13px; background: #f9f9f9; padding: 15px; border-radius: 6px; border: 1px solid #eee;">
        <div>
          <div><strong>ວັນທີ / Date:</strong> ${formatDate(dateValue)}</div>
          <div><strong>ຜູ້ຂາຍ / Cashier:</strong> ${userName}</div>
        </div>
        <div style="text-align: right;">
          <div><strong>ເລກທີ / No.:</strong> ${lastTransactionSaleHeaderId}</div>
        </div>
      </div>`;
  }

  return is58mm ? 
    `<div class="header-58mm"><div class="header-logo">${logoHtml}</div><div class="company-info-58mm"><div class="company-name">${companyName}</div><div class="company-tel">ເບີໂທ: ${companyTel}</div></div></div><div class="receipt-info-58mm"><div>ວັນທີ: ${formatDate(dateValue)}</div><div>ເລກທີ: ${lastTransactionSaleHeaderId}</div><div>ຜູ້ຂາຍ: ${userName}</div></div>` : 
    `<div class="header-80mm"><div class="header-left">${logoHtml}</div><div class="header-right"><div class="company-name">${companyName}</div><div class="company-tel">ເບີໂທ: ${companyTel}</div><div class="receipt-info-80mm"><div>ວັນທີ: ${formatDate(dateValue)}</div><div>ເລກທີ: ${lastTransactionSaleHeaderId}</div><div>ຜູ້ຂາຍ: ${userName}</div></div></div></div>`;
};

const generateFlexiblePaymentSection = (paymentData, formatNumber, currencyList, paperWidth = '80mm') => {
  const { currentPaymentCode, cashReceived, changes } = paymentData;
  const currencyCode = getLocalCurrency(currencyList)?.code || 'LAK';
  const is58mm = paperWidth === '58mm';

  const rows = [
    { label: 'ຊຳລະດ້ວຍ:', value: currentPaymentCode || 'N/A' },
    { label: 'ຮັບຊຳລະ:', value: `${formatNumber(safeParseNumber(cashReceived))} ${currencyCode}` },
    { label: 'ເງິນທອນ:', value: `${formatNumber(safeParseNumber(changes))} ${currencyCode}` }
  ];

  return `<div class="payment-section">
    ${rows.map(row => is58mm ? 
      `<div class="item"><div class="item-left">${row.label}</div><div class="item-right">${row.value}</div></div>` :
      `<div class="payment-item"><span class="payment-label">${row.label}</span><span class="payment-value">${row.value}</span></div>`
    ).join('')}
  </div>`;
};

const generateFlexibleWindowContent = (contentData, paperWidth = '80mm') => {
  const { headerHtml, transactionListHtml, currencyBreakdownHtml, discountHtml, totalHtml, paymentSectionHtml } = contentData;
  const config = getPaperConfig(paperWidth);
  const is58mm = paperWidth === '58mm';
  const isLarge = paperWidth === 'A4' || paperWidth === 'A5';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Receipt</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap');
        body { font-family: 'Noto Sans Lao', sans-serif; margin: 0 auto; padding: ${config.padding}; font-size: ${config.fontSize}; line-height: ${config.lineHeight}; width: ${config.width}; max-width: ${config.width}; background: white; }
        .title { text-align: center; font-weight: 700; font-size: ${isLarge ? '28px' : is58mm ? '12px' : '14px'}; margin-bottom: ${config.sectionSpacing}; text-transform: uppercase; }
        .divider { text-align: center; margin: ${config.sectionSpacing} 0; font-size: 10px; color: #888; border-bottom: 1px dashed #eee; height: 1px; }
        .logo-placeholder { width: ${config.logoSize}; height: ${config.logoSize}; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 4px; font-weight: bold; }
        .company-name { font-weight: 600; margin-bottom: 2px; }
        .item { display: flex; justify-content: space-between; margin-bottom: ${config.itemSpacing}; padding: 4px 0; border-bottom: ${isLarge ? '1px solid #f0f0f0' : 'none'}; }
        .item-name { font-weight: 500; }
        .item-total { text-align: right; white-space: nowrap; font-weight: 600; }
        
        ${is58mm ? `
          .header-58mm { display: flex; align-items: center; margin-bottom: 8px; gap: 8px; }
          .receipt-info-58mm { font-size: 9px; margin-bottom: 6px; }
          .total-line-compact { text-align: right; font-size: 12px; border-top: 1px solid #000; padding-top: 4px; }
        ` : `
          .header-80mm { display: flex; align-items: flex-start; margin-bottom: 10px; gap: 12px; }
          .receipt-info-80mm { margin-top: 4px; font-size: 10px; color: #444; }
          .total-line { display: flex; justify-content: space-between; font-size: 14px; font-weight: 700; margin-top: 8px; }
          .payment-item { display: flex; justify-content: space-between; margin-bottom: 3px; }
        `}

        .gift-item { color: #1976d2; }
        .gift-free { color: #2e7d32; }
        .payment-section { margin-top: ${config.sectionSpacing}; padding-top: 8px; border-top: 1px solid #eee; }
        .total-section { margin-top: 10px; padding-top: 8px; border-top: 2px solid #333; }
        .footer { text-align: center; margin-top: ${isLarge ? '50px' : '30px'}; }
        .thank-you { font-weight: 700; font-size: ${isLarge ? '20px' : '12px'}; }

        @media print { 
          body { margin: 0; padding: ${config.padding}; width: 100%; } 
          @page { margin: 0; size: ${paperWidth === 'A4' ? 'A4 portrait' : (paperWidth === 'A5' ? 'A5 portrait' : 'auto')}; }
        }
      </style>
    </head>
    <body>
      <div class="title">${isLarge ? 'ໃບຮັບເງິນ / Receipt' : 'ໃບຮັບເງິນ (RECEIPT)'}</div>
      ${headerHtml}
      <div class="${isLarge ? '' : 'divider'}"></div>
      <div style="margin-top: ${isLarge ? '20px' : '0'};">
        ${transactionListHtml}
      </div>
      ${currencyBreakdownHtml}
      ${discountHtml}
      <div class="total-section">${totalHtml}</div>
      ${paymentSectionHtml}
      <div class="footer">
        <div class="thank-you">THANK YOU</div>
        <div style="font-size: 11px;">ຂໍຂອບໃຈທີ່ໃຊ້ບໍລິການ</div>
      </div>
    </body>
    </html>
  `;
};

const printTicket = (windowContent, paperWidth = '80mm') => {
  try {
    const widthMap = { 'A4': 850, 'A5': 650, '80mm': 450, '58mm': 350 };
    const windowWidth = widthMap[paperWidth] || 450;
    const printWin = window.open('', '', `width=${windowWidth},height=850,scrollbars=1`);
    if (!printWin) return;
    printWin.document.write(windowContent);
    printWin.document.close();
    printWin.focus();
    setTimeout(() => { printWin.print(); printWin.close(); }, 1000);
  } catch (error) { console.error(error); }
};

// ============================================================================
// MAIN EXPORTS
// ============================================================================

const executeTicketPrint = async (params, dateValue) => {
  const { productCart = {}, findAllProduct = [], formatNumber, discount = 0, currencyList = [], companyLogo = '', lastTransactionSaleHeaderId = '', currentTerminal = {}, user = {}, ticketCommon = {}, currentPaymentCode = '', cashReceived = 0, changes = 0, axios = null, companyData = null, paperWidth = '80mm' } = params;
  if (!validateTicketParams(params, formatNumber)) return;

  try {
    const logoUrl = await getCompanyLogo({ axios, staticLogoPath: companyLogo, companyData });
    
    const contentData = {
      headerHtml: generateFlexibleHeaderSection({ lastTransactionSaleHeaderId, currentTerminal, user }, dateValue, logoUrl, paperWidth),
      transactionListHtml: generateFlexibleTransactionList(productCart, findAllProduct, formatNumber, currencyList, paperWidth),
      currencyBreakdownHtml: generateCurrencyBreakdownSection(productCart, currencyList, formatNumber, paperWidth),
      discountHtml: generateFlexibleDiscountSection(discount, formatNumber, currencyList, paperWidth),
      totalHtml: generateFlexibleTotalSection(productCart, currencyList, discount, formatNumber, paperWidth),
      paymentSectionHtml: generateFlexiblePaymentSection({ currentPaymentCode, cashReceived, changes }, formatNumber, currencyList, paperWidth),
      ticketCommon
    };

    const windowContent = generateFlexibleWindowContent(contentData, paperWidth);
    printTicket(windowContent, paperWidth);
  } catch (error) { console.error('Ticket Error:', error); }
};

export const defaultTicket = (params) => executeTicketPrint(params, new Date());
export const defaultTicketReprint = (params) => executeTicketPrint(params, params.bookingDate || new Date());
export const customerTicket = (params) => executeTicketPrint(params, new Date());
export const getSupportedPaperWidths = () => ['58mm', '80mm', 'A5', 'A4'];