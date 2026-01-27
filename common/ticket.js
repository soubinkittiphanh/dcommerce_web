/**
 * Enhanced Ticket Generation Module - FINAL PRODUCTION VERSION
 * FIXED: Accurate Price List & Currency extraction.
 * FIXED: 'isGift' correctly overridden by localPrice if not free.
 * FIXED: Currency breakdown always visible to show foreign vs local comparison.
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

/**
 * ✅ Determines the active price of an item using exact list matching.
 */
const getItemActivePrice = (item) => {
  // RULE 1: Gift/Special Item Override (localPrice is the final truth for gifts)
  if (item.isGift === true && typeof item.localPrice !== 'undefined') {
    return safeParseNumber(item.localPrice, 0);
  }

  // RULE 2: Active Price List Selection (Find exact match in array)
  if (item.priceListId !== null && item.priceListId !== undefined && Array.isArray(item.priceLists)) {
    const activePriceList = item.priceLists.find(pl => pl.id === item.priceListId);
    if (activePriceList) {
      return safeParseNumber(activePriceList.amount, 0);
    }
  }

  // RULE 3: Standard Price Fallback
  return safeParseNumber(item.localPrice ?? item.pro_price, 0);
};

/**
 * ✅ Determines the active currency using exact list matching.
 */
const getItemActiveCurrencyId = (item) => {
  // If a specific price list is selected, find its currency in the array
  if (item.priceListId !== null && item.priceListId !== undefined && Array.isArray(item.priceLists)) {
    const activePriceList = item.priceLists.find(pl => pl.id === item.priceListId);
    if (activePriceList && activePriceList.currencyId) {
      return activePriceList.currencyId;
    }
  }
  // Fallback to the item's default sale currency
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
    '80mm': { width: '80mm', fontSize: '11px', logoSize: '45px', padding: '8px', lineHeight: '1.2', itemSpacing: '2px', sectionSpacing: '6px' }
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

/**
 * ✅ Display Logic for Gifts vs Special Prices
 */
const getGiftDisplayInfo = (item, activePrice) => {
  const isFree = activePrice === 0;
  const isGiftMarked = item.isGift === true;
  const hasSpecialPrice = isGiftMarked && !isFree;

  return {
    isGift: isGiftMarked,
    isFree,
    hasSpecialPrice,
    displayPrice: isFree ? 'FREE' : null, 
    cssClass: isGiftMarked ? (isFree ? 'gift-item gift-free' : 'gift-item gift-special') : '',
    labelSuffix: isGiftMarked ? (isFree ? ' [GIFT]' : ' [SPECIAL]') : ''
  };
};

const generateFlexibleTransactionList = (productCart, findAllProduct, formatNumber, currencyList, paperWidth = '80mm') => {
  const cartItems = productCart.lines || productCart;
  if (!Array.isArray(cartItems) || cartItems.length === 0) return '<div class="item">ບໍ່ມີສິນຄ້າ</div>';
  const is58mm = paperWidth === '58mm';

  return cartItems.map(item => {
    const productName = item.pro_name || findAllProduct.find(el => el.id === item.id)?.pro_name || 'ສິນຄ້າບໍ່ຮູ້ຈັກ';
    const quantity = item.qty || 0;

    const activePrice = getItemActivePrice(item);
    const total = quantity * activePrice;

    const currencyId = getItemActiveCurrencyId(item);
    const currency = currencyList.find(c => c.id === currencyId);
    const currencyCode = currency?.code || 'LAK';

    const giftInfo = getGiftDisplayInfo(item, activePrice);

    if (is58mm) {
      return `
        <div class="item ${giftInfo.cssClass}">
          <div class="item-left">${quantity}x ${productName}${giftInfo.labelSuffix}</div>
          <div class="item-right">${giftInfo.displayPrice || `${formatNumber(total)} ${currencyCode}`}</div>
        </div>
      `;
    } else {
      return `
        <div class="item ${giftInfo.cssClass}">
          <div class="item-desc">
            <div class="item-name">${productName}${giftInfo.labelSuffix}</div>
            <div class="item-detail">${quantity} x ${giftInfo.displayPrice === 'FREE' ? 'FREE' : `${formatNumber(activePrice)} ${currencyCode}`}</div>
          </div>
          <div class="item-total">${giftInfo.displayPrice || `${formatNumber(total)} ${currencyCode}`}</div>
        </div>
      `;
    }
  }).join('');
};

const generateFlexibleReprintTransactionList = (productCart, findAllProduct, formatNumber, currencyList, paperWidth = '80mm') => {
  return generateFlexibleTransactionList(productCart, findAllProduct, formatNumber, currencyList, paperWidth);
};

const generateCurrencyBreakdownSection = (productCart, currencyList, formatNumber, paperWidth = '80mm') => {
  const cartItems = productCart.lines || productCart;
  if (!Array.isArray(cartItems) || cartItems.length === 0) return '';

  const currencyGroups = {};

  cartItems.forEach(item => {
    const currencyId = getItemActiveCurrencyId(item);
    if (!currencyGroups[currencyId]) {
      currencyGroups[currencyId] = { currency: currencyList.find(c => c.id === currencyId), total: 0, items: [] };
    }
    
    const total = (item.qty || 0) * getItemActivePrice(item);
    currencyGroups[currencyId].total += total;
    currencyGroups[currencyId].items.push(item);
  });

  // ✅ The "currencies.length <= 1" check has been REMOVED so the subtotal always shows.

  const is58mm = paperWidth === '58mm';
  const breakdownHtml = Object.values(currencyGroups).map(group => {
    const currencyCode = group.currency?.code || 'N/A';
    return is58mm ? 
      `<div class="item currency-subtotal"><div class="item-left">Subtotal ${currencyCode}:</div><div class="item-right">${formatNumber(group.total)} ${currencyCode}</div></div>` :
      `<div class="item currency-subtotal"><div class="item-desc"><div class="item-name">Subtotal ${currencyCode}:</div></div><div class="item-total">${formatNumber(group.total)} ${currencyCode}</div></div>`;
  }).join('');

  return `<div class="divider">${is58mm ? '- - - - - - - - - - - - - - -' : '- - - - - - - - - - - - - - - - - - - - - - - - -'}</div>${breakdownHtml}`;
};

const calculateTotalInLocalCurrency = (productCart, currencyList) => {
  const cartItems = productCart.lines || productCart;
  const localCurrency = getLocalCurrency(currencyList);
  if (!localCurrency) return { totalInLocal: 0, localCurrency: null };

  let totalInLocal = 0;

  cartItems.forEach(item => {
    const itemTotal = (item.qty || 0) * getItemActivePrice(item);
    const currency = currencyList.find(c => c.id === getItemActiveCurrencyId(item));

    if (currency && !currency.isLocalCCY) {
      totalInLocal += CurrencyHelper.convertToLocal(itemTotal, currency, localCurrency);
    } else {
      totalInLocal += itemTotal;
    }
  });

  return { totalInLocal, localCurrency };
};

const generateFlexibleTotalSection = (productCart, currencyList, discount, formatNumber, paperWidth = '80mm') => {
  const { totalInLocal, localCurrency } = calculateTotalInLocalCurrency(productCart, currencyList);
  if (!localCurrency) return '';

  const finalTotal = totalInLocal - safeParseNumber(discount, 0);
  const is58mm = paperWidth === '58mm';

  return is58mm ? 
    `<div class="total-line-compact"><strong>ລວມທັງໝົດ: ${formatNumber(finalTotal)} ${localCurrency.code}</strong></div>` : 
    `<div class="total-line primary-total"><span class="total-label">ລວມທັງໝົດ:</span><span class="total-amount">${formatNumber(finalTotal)} ${localCurrency.code}</span></div>`;
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
  const companyLogoUrl = currentTerminal?.location?.company?.profile_image_path || companyLogoCache.company?.profile_image_path || 'N/A';
  const userName = user?.cus_name || 'N/A';
  const config = getPaperConfig(paperWidth);
  const is58mm = paperWidth === '58mm';

  const logoHtml = logoUrl ?
    `<img src="${currentTerminal.baseURL}/${companyLogoUrl}" alt="Logo" style="width: ${config.logoSize}; height: ${config.logoSize}; object-fit: contain;" onerror="this.style.display='none';">` :
    `<div class="logo-placeholder">${companyName.substring(0, 2).toUpperCase()}</div>`;

  return is58mm ? 
    `<div class="header-58mm"><div class="header-logo">${logoHtml}</div><div class="company-info-58mm"><div class="company-name">${companyName}</div><div class="company-tel">ເບີໂທ: ${companyTel}</div></div></div><div class="receipt-info-58mm"><div>ວັນທີ: ${formatDate(dateValue)}</div><div>ເລກທີ: ${lastTransactionSaleHeaderId}</div><div>ຜູ້ຂາຍ: ${userName}</div></div><div class="divider">- - - - - - - - - - - - - - -</div>` : 
    `<div class="header-80mm"><div class="header-left">${logoHtml}</div><div class="header-right"><div class="company-name">${companyName}</div><div class="company-tel">ເບີໂທ: ${companyTel}</div><div class="receipt-info-80mm"><div>ວັນທີ: ${formatDate(dateValue)}</div><div>ເລກທີ: ${lastTransactionSaleHeaderId}</div><div>ຜູ້ຂາຍ: ${userName}</div></div></div></div><div class="divider">- - - - - - - - - - - - - - - - - - - - - - - - -</div>`;
};

const generateFlexiblePaymentSection = (paymentData, formatNumber, currencyList, paperWidth = '80mm') => {
  const { currentPaymentCode, cashReceived, changes } = paymentData;
  const safeCashReceived = safeParseNumber(cashReceived, 0);
  const safeChanges = safeParseNumber(changes, 0);
  const currencyCode = getLocalCurrency(currencyList)?.code || 'LAK';
  const is58mm = paperWidth === '58mm';

  return is58mm ? 
    `<div class="payment-section"><div class="item"><div class="item-left">ຊຳລະດ້ວຍ:</div><div class="item-right">${currentPaymentCode || 'N/A'}</div></div><div class="item"><div class="item-left">ຮັບຊຳລະ:</div><div class="item-right">${formatNumber(safeCashReceived)} ${currencyCode}</div></div><div class="item"><div class="item-left">ເງິນທອນ:</div><div class="item-right">${formatNumber(safeChanges)} ${currencyCode}</div></div></div>` :
    `<div class="payment-section"><div class="payment-item"><span class="payment-label">ຊຳລະດ້ວຍ:</span><span class="payment-value">${currentPaymentCode || 'N/A'}</span></div><div class="payment-item"><span class="payment-label">ຮັບຊຳລະ:</span><span class="payment-value">${formatNumber(safeCashReceived)} ${currencyCode}</span></div><div class="payment-item"><span class="payment-label">ເງິນທອນ:</span><span class="payment-value">${formatNumber(safeChanges)} ${currencyCode}</span></div></div>`;
};

const generateFlexibleWindowContent = (contentData, paperWidth = '80mm') => {
  const { headerHtml, transactionListHtml, currencyBreakdownHtml, discountHtml, totalHtml, paymentSectionHtml } = contentData;
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
        body { font-family: 'Noto Sans Lao', sans-serif; margin: 0; padding: ${config.padding}; font-size: ${config.fontSize}; line-height: ${config.lineHeight}; width: ${config.width}; max-width: ${config.width}; }
        .title { text-align: center; font-weight: 600; font-size: ${is58mm ? '12px' : '13px'}; margin-bottom: ${config.sectionSpacing}; }
        .divider { text-align: center; margin: ${config.sectionSpacing} 0; font-size: 9px; color: #999; }
        .logo-placeholder { width: ${config.logoSize}; height: ${config.logoSize}; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 4px; font-size: ${is58mm ? '8px' : '10px'}; font-weight: bold; }
        .company-name { font-weight: 600; font-size: ${is58mm ? '11px' : '12px'}; margin-bottom: 2px; }
        .company-tel { font-size: ${is58mm ? '8px' : '9px'}; color: #666; }
        
        /* Gift Styles */
        .gift-item .item-name, .gift-item .item-left, .gift-item .item-total, .gift-item .item-right { font-weight: 600; }
        .gift-free .item-total, .gift-free .item-right { font-style: italic; color: #4caf50; } /* Green for Free */
        .gift-special .item-total, .gift-special .item-right { color: #1976d2; } /* Blue for Special Price */
        
        .currency-subtotal { font-style: italic; border-top: 1px dashed #ccc; margin-top: 2px; padding-top: 2px; }
        .currency-subtotal .item-name, .currency-subtotal .item-left, .currency-subtotal .item-total, .currency-subtotal .item-right { font-weight: 600; }
        ${is58mm ? `
        .header-58mm { display: flex; align-items: center; margin-bottom: 4px; gap: 6px; }
        .company-info-58mm { flex: 1; min-width: 0; }
        .receipt-info-58mm { font-size: 8px; margin-bottom: 4px; }
        .item { display: flex; justify-content: space-between; margin-bottom: ${config.itemSpacing}; padding: 1px 0; }
        .item-left { flex: 1; margin-right: 4px; }
        .item-right { text-align: right; white-space: nowrap; }
        .total-line-compact { text-align: center; font-size: 11px; font-weight: 600; margin: 2px 0; }
        ` : `
        .header-80mm { display: flex; align-items: flex-start; margin-bottom: 6px; gap: 10px; }
        .header-right { flex: 1; min-width: 0; }
        .receipt-info-80mm { margin-top: 4px; font-size: 9px; }
        .item { display: flex; justify-content: space-between; margin-bottom: ${config.itemSpacing}; padding: 1px 0; }
        .item-desc { flex: 1; margin-right: 8px; }
        .item-name { font-weight: 500; }
        .item-detail { font-size: 9px; }
        .item-total { text-align: right; white-space: nowrap; }
        .total-line { display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; margin: 2px 0; }
        .payment-item { display: flex; justify-content: space-between; margin-bottom: 2px; }
        `}
        .payment-section { margin-top: ${config.sectionSpacing}; padding-top: 4px; border-top: 1px dashed #999; }
        .total-section { margin-top: 4px; padding-top: 4px; border-top: 1px solid #000; }
        .footer { text-align: center; margin-top: ${config.sectionSpacing}; font-size: ${is58mm ? '9px' : '10px'}; }
        .footer .thank-you { font-weight: 600; }
        .footer .sub-text { color: #666; font-size: ${is58mm ? '8px' : '9px'}; }
        @media print { body { margin: 0; padding: 4px; width: auto; max-width: none; } }
        @page { margin: 0; size: ${config.width} auto; }
      </style>
    </head>
    <body>
      <div class="title">ໃບຮັບເງິນ</div>
      ${headerHtml}
      ${transactionListHtml}
      ${currencyBreakdownHtml}
      ${discountHtml}
      <div class="divider">${is58mm ? '- - - - - - - - - - - - - - -' : '- - - - - - - - - - - - - - - - - - - - - - - - -'}</div>
      ${paymentSectionHtml}
      <div class="total-section">${totalHtml}</div>
      <div class="footer"><div class="thank-you">THANK YOU</div><div class="sub-text">ຂໍຂອບໃຈທີ່ໃຊ້ບໍລິການ</div></div>
    </body>
    </html>
  `;
};

const printTicket = (windowContent, paperWidth = '80mm') => {
  try {
    const windowWidth = paperWidth === '58mm' ? 350 : 450;
    const printWin = window.open('', '', `left=0,top=0,width=${windowWidth},height=600,toolbar=0,scrollbars=1,status=0`);
    if (!printWin) throw new Error('Popup blocked');
    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();
    printWin.onload = () => setTimeout(() => { printWin.print(); printWin.close(); }, 800);
    setTimeout(() => { if (!printWin.closed) { printWin.print(); printWin.close(); } }, 2000);
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
    const transactionListHtml = generateFlexibleTransactionList(productCart, findAllProduct, formatNumber, currencyList, paperWidth);
    const currencyBreakdownHtml = generateCurrencyBreakdownSection(productCart, currencyList, formatNumber, paperWidth);
    const discountHtml = generateFlexibleDiscountSection(discount, formatNumber, currencyList, paperWidth);
    const totalHtml = generateFlexibleTotalSection(productCart, currencyList, discount, formatNumber, paperWidth);
    const headerHtml = generateFlexibleHeaderSection({ lastTransactionSaleHeaderId, currentTerminal, user }, dateValue, logoUrl, paperWidth);
    const paymentSectionHtml = generateFlexiblePaymentSection({ currentPaymentCode, cashReceived, changes }, formatNumber, currencyList, paperWidth);

    const windowContent = generateFlexibleWindowContent({ ticketCommon, headerHtml, transactionListHtml, currencyBreakdownHtml, discountHtml, totalHtml, paymentSectionHtml }, paperWidth);
    printTicket(windowContent, paperWidth);
  } catch (error) { console.error('Error generating ticket:', error); }
};

export const defaultTicket = (params) => executeTicketPrint(params, new Date());
export const defaultTicketReprint = (params) => executeTicketPrint(params, params.bookingDate || new Date().toISOString());
export const customerTicket = (params) => executeTicketPrint(params, new Date());

export const refreshCompanyLogo = async (axios) => { clearLogoCache(); return await loadCompanyLogoFromAPI(axios); };
export const getLogoCacheInfo = () => ({ ...companyLogoCache });
export const preloadCompanyLogo = async (axios) => { try { await loadCompanyLogoFromAPI(axios); } catch (e) {} };
export const getSupportedPaperWidths = () => ['58mm', '80mm'];