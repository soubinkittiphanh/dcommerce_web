/**
 * Optimized Ticket Generation Module - VERSION 3.9.2
 * UPDATES: Centered Header, Conditional Logo/QR hiding, Tax-Inclusive Line Prices.
 */

import CurrencyHelper from '@/utils/currency-helper'

// ============================================================================
// 1. UTILITY FUNCTIONS
// ============================================================================

const safeParseNumber = (value, defaultValue = 0) => {
    if (value === null || value === undefined || value === '') return defaultValue;
    const parsed = parseFloat(value.toString().replace(/[^\d.-]/g, ''));
    return isNaN(parsed) ? defaultValue : parsed;
};

const getItemActivePrice = (item) => {
    if (item.isGift === true && typeof item.localPrice !== 'undefined') return safeParseNumber(item.localPrice, 0);
    if (item.priceListId !== null && Array.isArray(item.priceLists)) {
        const activePriceList = item.priceLists.find(pl => pl.id === item.priceListId);
        if (activePriceList) return safeParseNumber(activePriceList.amount, 0);
    }
    return safeParseNumber(item.localPrice ?? item.pro_price, 0);
};

const getItemActiveCurrencyId = (item) => {
    if (item.priceListId !== null && Array.isArray(item.priceLists)) {
        const activePriceList = item.priceLists.find(pl => pl.id === item.priceListId);
        if (activePriceList && activePriceList.currencyId) return activePriceList.currencyId;
    }
    return item.saleCurrencyId;
};

const formatDate = (dateInput) => {
    try {
        const date = new Date(dateInput);
        return isNaN(date.getTime()) ? 'Invalid Date' : `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    } catch (error) { return 'Date Error'; }
};

const getPaperConfig = (paperWidth = '80mm') => {
    const configs = {
        '58mm': { width: '200px', fontSize: '10px', logoSize: '50px' },
        '80mm': { width: '280px', fontSize: '11px', logoSize: '65px' },
        'A5': { width: '540px', fontSize: '14px', logoSize: '80px' },
        'A4': { width: '750px', fontSize: '16px', logoSize: '100px' }
    };
    return configs[paperWidth] || configs['80mm'];
};

const getLocalCurrency = (currencyList) => Array.isArray(currencyList) ? currencyList.find(currency => currency.isLocalCCY === true) : null;

const calculateItemTaxAmount = (item) => {
    const price = getItemActivePrice(item);
    const qty = item.qty || 0;
    const total = price * qty;
    const taxInfo = item.tax || {};
    const rate = safeParseNumber(taxInfo.rate, 0);

    if (taxInfo.taxType === 'INC') {
        return total - (total / (1 + rate));
    } else {
        return total * rate;
    }
};

// ============================================================================
// 2. CSS ENGINE
// ============================================================================
const getBaseStyles = (config, isThermal) => `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap');
  * { box-sizing: border-box; }
  html, body { margin: 0 !important; padding: 0 !important; width: ${config.width} !important; }
  body { font-family: 'Noto Sans Lao', sans-serif; font-size: ${config.fontSize}; line-height: 1.3; overflow-x: hidden; }
  .receipt-container { width: ${config.width} !important; margin: 0 auto !important; padding: ${isThermal ? '0 10px 0 5px' : '20px'}; overflow: hidden; }
  
  .header-section { text-align: center; margin-bottom: 10px; }
  .logo-wrapper { margin-bottom: 8px; display: block; }
  .logo-img { width: ${config.logoSize}; height: auto; object-fit: contain; }

  /* MODERN LAYOUT STYLES */
  .header-modern { display: flex; align-items: center; margin-bottom: 15px; border-bottom: 2px solid #000; padding-bottom: 10px; }
  .header-modern .logo-wrapper { margin-bottom: 0; margin-right: 12px; flex: 0 0 ${config.logoSize}; }
  .header-modern .company-details { flex: 1; text-align: left; }
  .header-modern .company-name { font-weight: 700; font-size: 1.3em; line-height: 1.2; margin-bottom: 2px; }
  .header-modern .company-info { font-size: 0.9em; font-weight: 700; color: #444; }

  .dual-qr-container { display: flex; justify-content: space-around; align-items: flex-start; margin-top: 10px; padding-top: 10px; border-top: 1px dashed #eee; }
  .qr-tag { text-align: center; flex: 1; }
  .qr-tag img { width: 100px; height: 100px; object-fit: contain; border: 1px solid #eee; padding: 2px; }
  .qr-tag-label { font-size: 0.75em; margin-bottom: 4px; font-weight: 700; color: #333; }

  .item { display: flex; justify-content: space-between; width: 100%; margin-bottom: 4px; }
  .item-desc { flex: 1; text-align: left; padding-right: 5px; word-wrap: break-word; max-width: 70%; }
  .item-total { text-align: right; font-weight: 700; white-space: nowrap; min-width: 85px; }
  
  .total-line { display: flex; justify-content: space-between; width: 100%; }
  .divider { border-top: 1px dashed #000; margin: 6px 0; }
  .qr-section img { display: block; margin: 0 auto; }
  
  @media print { @page { margin: 0; } .receipt-container { width: ${config.width} !important; } }
`;

// ============================================================================
// 3. HTML GENERATORS
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

const generateFlexibleTransactionList = (productCart, findAllProduct, formatNumber, currencyList) => {
    const cartItems = productCart.lines || productCart;
    if (!Array.isArray(cartItems) || cartItems.length === 0) return '<div>ບໍ່ມີສິນຄ້າ</div>';
    return cartItems.map(item => {
        const productName = item.pro_name || findAllProduct.find(el => el.id === item.id)?.pro_name || 'ສິນຄ້າ';
        let activePrice = getItemActivePrice(item);
        const currency = currencyList.find(c => c.id === getItemActiveCurrencyId(item))?.code || 'LAK';
        const giftInfo = getGiftDisplayInfo(item, activePrice);

        // Show total with tax if Exclusive
        const taxInfo = item.tax || {};
        if (taxInfo.taxType === 'EXC' && giftInfo.displayPrice !== 'FREE') {
            const rate = safeParseNumber(taxInfo.rate, 0);
            activePrice = activePrice * (1 + rate);
        }

        return `
      <div class="item ${giftInfo.cssClass}">
        <div class="item-desc">
          <div class="item-name">${productName}${giftInfo.labelSuffix}</div>
          <div class="item-detail">${item.qty} x ${giftInfo.displayPrice === 'FREE' ? 'FREE' : formatNumber(activePrice)}</div>
        </div>
        <div class="item-total">${giftInfo.displayPrice || formatNumber(item.qty * activePrice)} ${currency}</div>
      </div>`;
    }).join('');
};

const generateCurrencyBreakdownSection = (productCart, currencyList, formatNumber) => {
    const cartItems = productCart.lines || productCart;
    const groups = {};
    cartItems.forEach(item => {
        const cId = getItemActiveCurrencyId(item);
        if (!groups[cId]) groups[cId] = { code: currencyList.find(c => c.id === cId)?.code || 'CCY', total: 0 };
        groups[cId].total += (item.qty * getItemActivePrice(item));
    });
    return Object.values(groups).map(g => `
    <div class="item" style="font-size:0.95em;">
      <div class="item-desc">Subtotal ${g.code}:</div>
      <div class="item-total">${formatNumber(g.total)} ${g.code}</div>
    </div>`).join('');
};

const calculateTotalInLocalCurrency = (productCart, currencyList) => {
    const cartItems = productCart.lines || productCart;
    const localCurrency = getLocalCurrency(currencyList);
    if (!localCurrency) return { totalInLocal: 0, totalTax: 0, localCurrency: null };

    let subtotalLAK = 0;
    let totalTaxLAK = 0;

    cartItems.forEach(item => {
        const itemTotal = (item.qty || 0) * getItemActivePrice(item);
        const currency = currencyList.find(c => c.id === getItemActiveCurrencyId(item));
        const itemTotalLAK = (currency && !currency.isLocalCCY) ? CurrencyHelper.convertToLocal(itemTotal, currency, localCurrency) : itemTotal;
        subtotalLAK += itemTotalLAK;

        if (item.tax?.taxType === 'EXC') {
            const taxAmount = calculateItemTaxAmount(item);
            const taxLAK = (currency && !currency.isLocalCCY) ? CurrencyHelper.convertToLocal(taxAmount, currency, localCurrency) : taxAmount;
            totalTaxLAK += taxLAK;
        }
    });
    return { totalInLocal: subtotalLAK + totalTaxLAK, totalTax: totalTaxLAK, localCurrency };
};

const generateFlexibleTotalSection = (params, config) => {
    const { productCart, currencyList, discount, formatNumber, companyData, cashReceived, changes } = params;
    const { totalInLocal, localCurrency, totalTax } = calculateTotalInLocalCurrency(productCart, currencyList);
    if (!localCurrency) return '';
    console.info(`company data iss ${JSON.stringify(companyData)}`);
    const finalTotalLAK = totalInLocal - safeParseNumber(discount, 0);
    let html = '';

    const hasValue = (val) => {
        if (val === undefined || val === null || val === 0 || val === '0' || val === '0.00') return false;
        if (typeof val === 'string') {
            const clean = val.replace(/,/g, '');
            return parseFloat(clean) > 0;
        }
        return val > 0;
    };

    if (totalTax > 0) {
        html += `<div class="item" style="font-size:0.9em; border-top: 1px dashed #eee; margin-top: 5px; padding-top: 5px;">
            <div class="item-desc">ອາກອນ (Tax):</div>
            <div class="item-total">${formatNumber(totalTax)} ${localCurrency.code}</div>
        </div>`;
    }

    if (hasValue(cashReceived)) {
        html += `
        <div class="item" style="font-size: 0.9em; margin-top: 4px;">
            <div>ຮັບເງິນສົດ:</div>
            <div>${formatNumber(safeParseNumber(cashReceived))}</div>
        </div>`;
    }

    if (hasValue(changes)) {
        html += `
        <div class="item" style="font-size: 0.9em;">
            <div>ເງິນທອນ:</div>
            <div style="font-weight: 700;">${formatNumber(safeParseNumber(changes))}</div>
        </div>`;
    }
    html += `
        <div class="total-line" style="font-size: 1.2em; border-top: 2px solid #000; padding-top: 8px;">
            <span>ລວມທັງໝົດ (Total):</span>
            <span>${formatNumber(finalTotalLAK)} ${localCurrency.code}</span>
        </div>
        <div class="currency-conversions" style="font-size: 0.9em; margin-top: 5px; border-top: 1px dashed #ccc; padding-bottom: 5px;">
    `;

    currencyList.filter(curr => curr.isActive && !curr.isLocalCCY).forEach(curr => {
        let convertedAmount = (curr.exchangeDirection === 'foreign_to_local') ? finalTotalLAK / curr.rate : finalTotalLAK * curr.rate;
        html += `<div class="item" style="font-weight: normal; margin-bottom: 1px;">
                <span>ເປັນເງິນ (${curr.code}):</span>
                <span>${formatNumber(convertedAmount, 2)} ${curr.code}</span>
            </div>`;
    });
    html += `</div>`;

    // CONDITIONAL QR SECTION
    const showQR = companyData?.ticketQRcode === true;
    const qrPath = companyData?.bank_qr_image_path || companyData?.qrCode;
    const qrPath2 = companyData?.qrCode2;
    const layout = companyData?.ticketLayout || 'classic';

    if (showQR) {
        if (layout === 'modern' && (qrPath || qrPath2)) {
            html += `<div class="dual-qr-container">`;
            if (qrPath) {
                html += `
                <div class="qr-tag">
                    <div class="qr-tag-label">ຊຳລະຜ່ານ QR 1</div>
                    <img src="${qrPath}">
                </div>`;
            }
            if (qrPath2) {
                html += `
                <div class="qr-tag">
                    <div class="qr-tag-label">ຊຳລະຜ່ານ QR 2</div>
                    <img src="${qrPath2}">
                </div>`;
            }
            html += `</div>`;
        } else if (qrPath) {
            html += `<div class="qr-section" style="text-align: center; margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee;">
                    <div style="font-size: 0.8em; margin-bottom: 5px; color: #333;">ສະແກນເພື່ອຊຳລະເງິນ</div>
                    <img src="${qrPath}" style="width:140px; height:auto;">
                </div>`;
        }
    }
    return html;
};

// ============================================================================
// 4. PRINT BRIDGE
// ============================================================================

const printTicketElectron = async (windowContent, paperWidth = '80mm', printers) => {
    const bridge = typeof window !== 'undefined' ? window.posApi : null;
    if (bridge && typeof bridge.printReceipt === 'function') {
        const p = printers?.find(p => p.type === 'ticket');
        const target = p?.printerName || '';
        bridge.printReceipt({ printerName: target, html: windowContent, width: paperWidth });
    } else {
        const win = window.open('', '', 'width=450,height=800');
        if (win) {
            win.document.write(windowContent);
            win.document.close();
            setTimeout(() => { win.print(); win.close(); }, 1000);
        }
    }
};

// ============================================================================
// 5. EXPORTS
// ============================================================================

export const executeTicketPrint = async (params, dateValue) => {
    const { productCart, findAllProduct, formatNumber, discount, currencyList, paperWidth, printers, companyData } = params;
    try {
        const config = getPaperConfig(paperWidth);
        const isThermal = paperWidth === '58mm' || paperWidth === '80mm';

        // CONDITIONAL LOGO HEADER
        console.info(`company data is ${JSON.stringify(companyData)}`);
        const logoPath = companyData.profile_image_path || companyData.ticketLogo;
        const logoHtml = logoPath ? `<div class="logo-wrapper"><img src="${logoPath}" class="logo-img"></div>` : '';
        const layout = companyData.ticketLayout || 'classic';
        const showLogo = companyData.showLogoOnTicket;
        let headerHtml = '';
        if (layout === 'modern') {
            headerHtml = `
            <div class="header-modern">
                ${showLogo ? logoHtml : ''}
                <div class="company-details">
                    <div class="company-name">${companyData.name}</div>
                    <div class="company-info">ໂທ: ${companyData.tel}</div>
                    <div class="company-info" style="margin-top:2px;">ເລກທີ: ${params.lastTransactionSaleHeaderId}</div>
                    <div class="company-info">${formatDate(dateValue)}</div>
                </div>
            </div>`;
        } else {
            headerHtml = `
            <div class="header-section">
                ${showLogo ? logoHtml : ''}
                <div style="font-weight:700; font-size:1.5em;">${companyData.name}</div>
                <div style="font-size:0.9em;font-weight:700;">ເບີໂທ: ${companyData.tel}</div>
                <div style="font-size:0.9em;font-weight:700; margin-top:3px;">ເລກທີ: ${params.lastTransactionSaleHeaderId} | ${formatDate(dateValue)}</div>
            </div>`;
        }

        const contentData = {
            headerHtml: headerHtml,
            transactionListHtml: generateFlexibleTransactionList(productCart, findAllProduct, formatNumber, currencyList),
            currencyBreakdownHtml: generateCurrencyBreakdownSection(productCart, currencyList, formatNumber),
            discountHtml: discount > 0 ? `<div class="divider"></div><div class="item"><div>ສ່ວນຫຼຸດ:</div><div class="item-total">-${formatNumber(discount)}</div></div>` : '',
            totalHtml: generateFlexibleTotalSection(params, config),
            paymentSectionHtml: `<div style="margin-top:10px; font-size:0.85em; border-top:1px solid #eee; padding-top:5px; text-align:center;">ຊຳລະດ້ວຍ: ${params.currentPaymentCode || 'N/A'}<br>ພະນັກງານ: ${params.user?.cus_name || ''}</div>`
        };

        const windowContent = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${getBaseStyles(config, isThermal)}</style></head>
          <body><div class="receipt-container">
            <div style="text-align:center; font-weight:700; font-size:1.3em; margin-bottom:12px;">ໃບຮັບເງິນ</div>
            ${contentData.headerHtml}<div class="divider"></div>
            ${contentData.transactionListHtml}${contentData.currencyBreakdownHtml}${contentData.discountHtml}
            ${contentData.totalHtml}${contentData.paymentSectionHtml}
            <div style="text-align:center; margin-top:15px; font-weight:700;">ຂອບໃຈທີ່ມາອຸດໜູນ</div>
          </div></body></html>`;

        await printTicketElectron(windowContent, paperWidth, printers);
    } catch (error) { console.error('Ticket Print Error:', error); }
};

export const defaultTicket = (params) => executeTicketPrint(params, new Date());
export const defaultTicketReprint = (params) => executeTicketPrint(params, params.bookingDate || new Date());

export const generateDeliveryCustomerHTML = (params) => {
    const { onlineCustomerInfo, productCart, findAllProduct, formatNumber, discount, grandTotal, currencyList, paperWidth = '80mm' } = params;
    const config = getPaperConfig(paperWidth);
    const today = new Date();

    const itemsHtml = (productCart.lines || productCart).map(item => {
        const productName = findAllProduct.find(el => el.id == item.id)?.pro_name || item.pro_name || 'ສິນຄ້າ';
        return `<div class="item">
                  <div class="item-desc"><div class="item-name">${productName}</div></div>
                  <div class="item-total">${item.qty} ${onlineCustomerInfo.payment === 'COD' ? 'x ' + formatNumber(item.qty * item.localPrice) : ''}</div>
                </div>`;
    }).join('');

    const totalInLocal = (grandTotal + Number(onlineCustomerInfo.riderFee || 0) - discount);
    const localCurrency = getLocalCurrency(currencyList)?.code || 'LAK';

    return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${getBaseStyles(config, true)} h5 { margin: 2px 0; font-size: 13px; }</style></head>
    <body><div class="receipt-container">
      <h5>ວັນທີ: ${formatDate(today)}</h5><h5>ຮ້ານ: ${onlineCustomerInfo.branch} (${onlineCustomerInfo.branchTel})</h5><div class="divider"></div>
      <h5>ຜູ້ຮັບ: ${onlineCustomerInfo.name} | ໂທ: ${onlineCustomerInfo.tel}</h5>
      <h5>ຂົນສົ່ງ: ${onlineCustomerInfo.shipping}</h5>
      ${onlineCustomerInfo.shipping !== 'RIDER' ? `<h5>ຄ່າຝາກ: ${onlineCustomerInfo.shippingFeeBy}</h5>` : ''}
      <h5>ບ່ອນສົ່ງ: ${onlineCustomerInfo.address}</h5>
      <div class="divider"></div>
      ${itemsHtml}${onlineCustomerInfo.riderFee > 0 ? `<div class="item"><div>ຄ່າຝາກ (Rider Fee)</div><div class="item-total">${formatNumber(onlineCustomerInfo.riderFee)}</div></div>` : ''}<div class="divider"></div>
      <div class="total-line"><span>ລວມ (${onlineCustomerInfo.payment}):</span><span>${formatNumber(totalInLocal)} ${localCurrency}</span></div>
    </div></body></html>`;
};

export const deliveryCustomerTicket = (params) => {
    const windowContent = generateDeliveryCustomerHTML(params);
    printTicketElectron(windowContent, params.paperWidth || '80mm', params.printers || []);
};

export const getSupportedPaperWidths = () => ['58mm', '80mm', 'A5', 'A4'];