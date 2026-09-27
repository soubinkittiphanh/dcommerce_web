// ~/common/printTemplatesWithOriginalCurrency.js
// Shows each line in original currency, but summarized totals by currency
import JsBarcode from 'jsbarcode'

// Helper to format numbers
const formatNumber = (val) => {
    return new Intl.NumberFormat().format(val || 0)
}

// Helper to get product image path safely
const getProductImage = (product) => {
    if (!product) return ''
    if (product.pro_image_path) return product.pro_image_path
    if (product.images && product.images.length > 0) {
        return product.images[0].img_path || (product.images[0].img_name ? 'uploads/' + product.images[0].img_name : '')
    }
    return ''
}

// Helper to format dates
const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    try {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    } catch (error) {
        return dateString
    }
}

// Enhanced currency helper functions
const getCurrency = (currencyId, currencyList = []) => {
    return currencyList.find(c => c.id === currencyId) || currencyList.find(c => c.isLocalCCY)
}

const getCompanyLogoUrl = (companyData) => {
    if (!companyData) return ''
    const baseUrl = getBaseUrl()

    // 1. Try profile_image_path from API data
    const profilePath = companyData.profile_image_path || companyData.apiData?.profile_image_path || companyData.imageUrl
    if (profilePath) {
        return `${baseUrl}/${profilePath.replace(/^\//, '')}`
    }

    // 2. Try ticketLogo or companyLogo if they exist
    const logoName = companyData.companyLogo || companyData.ticketLogo || companyData.logo
    if (logoName) {
        if (logoName.startsWith('http') || logoName.startsWith('blob:') || logoName.includes('/')) {
            return logoName
        }
        return `${baseUrl}/uploads/${logoName}`
    }

    // 3. Fallback to dcLogo
    if (companyData.dcLogo) {
        return `${baseUrl}/uploads/${companyData.dcLogo}`
    }

    return ''
}

const getCompanyQR1Url = (companyData) => {
    if (!companyData) return ''
    const baseUrl = getBaseUrl()
    const qrPath = companyData.bank_qr_image_path || companyData.qrCode
    if (qrPath) {
        if (qrPath.startsWith('http') || qrPath.startsWith('blob:') || qrPath.includes('data:image')) {
            return qrPath
        }
        return `${baseUrl}/${qrPath.replace(/^\//, '')}`
    }
    return ''
}

const getCompanyQR2Url = (companyData) => {
    if (!companyData) return ''
    const baseUrl = getBaseUrl()
    const qrPath = companyData.bank_qr_image_path_2 || companyData.qrCode2
    if (qrPath) {
        if (qrPath.startsWith('http') || qrPath.startsWith('blob:') || qrPath.includes('data:image')) {
            return qrPath
        }
        return `${baseUrl}/${qrPath.replace(/^\//, '')}`
    }
    return ''
}

// Convert amount to local currency for totals summary
const convertToLocalCurrency = (amount, fromCurrency, localCurrency) => {
    if (!fromCurrency || !localCurrency || fromCurrency.code === localCurrency.code) {
        return amount
    }

    // Step 1: Convert fromCurrency to LAK (base currency of the DB)
    let amountInLAK = amount
    if (fromCurrency.code !== 'LAK') {
        if (fromCurrency.exchangeDirection === 'local_to_foreign') {
            amountInLAK = amount / (fromCurrency.rate || 1)
        } else {
            amountInLAK = amount * (fromCurrency.rate || 1)
        }
    }

    // Step 2: Convert LAK to localCurrency
    if (localCurrency.code === 'LAK') {
        return amountInLAK
    }
    return amountInLAK / (localCurrency.rate || 1)
}

const generateMultiCurrencyTotalsHTML = (grandTotalInLocal, localCurrency, currencyList = []) => {
    if (!currencyList || currencyList.length === 0) return ''
    const activeOtherCurrencies = currencyList.filter(c => (c.isActive === true || c.isActive === 1) && c.code !== localCurrency.code)
    if (activeOtherCurrencies.length === 0) return ''

    return activeOtherCurrencies.map(curr => {
        let convertedVal = 0
        if (curr.exchangeDirection === 'local_to_foreign') {
            convertedVal = grandTotalInLocal * curr.rate
        } else {
            convertedVal = grandTotalInLocal / curr.rate
        }

        const formattedVal = curr.code === 'LAK'
            ? new Intl.NumberFormat().format(Math.round(convertedVal))
            : new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(convertedVal)

        return `
            <div class="total-row" style="font-size: 0.95em; color: #555; border-top: 1px dashed #eee; padding-top: 4px;">
                <span>Equivalent in / ເປັນເງິນ (${curr.code}):</span>
                <span><strong>${formattedVal} ${curr.code}</strong></span>
            </div>
        `
    }).join('')
}

const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        const savedUrl = window.localStorage.getItem('api_base_url')
        if (savedUrl) {
            return savedUrl.replace(/\/$/, '')
        }
        if (window.$nuxt && window.$nuxt.$axios) {
            return (window.$nuxt.$axios.defaults.baseURL || '').replace(/\/$/, '')
        }
        if (window.location.origin && window.location.origin.startsWith('http')) {
            return window.location.origin.replace(/\/$/, '')
        }
    }
    return 'http://localhost:8888'
}

// Helper to resolve reference / external ref number from various sources
const resolveReferenceNo = (header) => {
    if (!header) return '-'
    if (header.referenceNo !== undefined && header.referenceNo !== null) {
        const str = String(header.referenceNo).trim()
        if (str && str !== 'Legacy Single Payment' && str !== 'null' && str !== 'undefined' && str !== '-') {
            return str
        }
    }
    if (header.externalRefNo !== undefined && header.externalRefNo !== null) {
        const str = String(header.externalRefNo).trim()
        if (str && str !== 'null' && str !== 'undefined' && str !== '-') {
            return str
        }
    }
    if (header.externalRef !== undefined && header.externalRef !== null) {
        const str = String(header.externalRef).trim()
        if (str && str !== 'null' && str !== 'undefined' && str !== '-') {
            return str
        }
    }
    if (header.external_ref !== undefined && header.external_ref !== null) {
        const str = String(header.external_ref).trim()
        if (str && str !== 'null' && str !== 'undefined' && str !== '-') {
            return str
        }
    }
    if (header.refNo !== undefined && header.refNo !== null) {
        const str = String(header.refNo).trim()
        if (str && str !== 'null' && str !== 'undefined' && str !== '-') {
            return str
        }
    }
    if (Array.isArray(header.payments) && header.payments.length > 0) {
        const paymentRefs = header.payments
            .map(p => {
                const val = p.referenceNo ?? p.externalRef ?? p.externalRefNo ?? p.refNo ?? p.paymentDetails?.txnRefId
                return val !== undefined && val !== null ? String(val).trim() : ''
            })
            .filter(r => r && r !== 'Legacy Single Payment' && r !== 'null' && r !== 'undefined' && r !== '-')
        if (paymentRefs.length > 0) {
            return paymentRefs.join(', ')
        }
    }
    if (header.payment?.referenceNo !== undefined && header.payment?.referenceNo !== null) {
        const str = String(header.payment.referenceNo).trim()
        if (str && str !== 'Legacy Single Payment' && str !== 'null' && str !== 'undefined' && str !== '-') {
            return str
        }
    }
    if (header.paymentDetails?.txnRefId !== undefined && header.paymentDetails?.txnRefId !== null) {
        const str = String(header.paymentDetails.txnRefId).trim()
        if (str && str !== 'null' && str !== 'undefined' && str !== '-') {
            return str
        }
    }
    return '-'
}

// Helper to resolve location name safely
const resolveLocationName = (header) => {
    if (!header) return '-'
    if (header.location && typeof header.location === 'object' && header.location.name) {
        const str = String(header.location.name).trim()
        if (str && str !== 'null' && str !== 'undefined') return str
    }
    if (header.locationName) {
        const str = String(header.locationName).trim()
        if (str && str !== 'null' && str !== 'undefined') return str
    }
    if (header.location && typeof header.location === 'string') {
        const str = header.location.trim()
        if (str && str !== 'null' && str !== 'undefined') return str
    }
    if (header.location && typeof header.location === 'object' && header.location.description) {
        const str = String(header.location.description).trim()
        if (str && str !== 'null' && str !== 'undefined') return str
    }
    if (header.srcLocation?.name) {
        const str = String(header.srcLocation.name).trim()
        if (str && str !== 'null' && str !== 'undefined') return str
    }
    return '-'
}

// ==========================================
// RECEIPT TEMPLATE - ORIGINAL CURRENCY PER LINE
// ==========================================
export const generateReceiptHTML = (header, companyData, currencyList = []) => {
    console.log('🧾 GENERATING RECEIPT - ORIGINAL CURRENCY VERSION')
    console.log('================================================')

    // Get local currency
    const localCurrency = currencyList.find(c => c.isLocalCCY) || header.currency
    console.log(`🏠 Local Currency: ${localCurrency.code}`)

    const baseUrl = getBaseUrl()

    // Generate lines HTML - SHOW ORIGINAL CURRENCY FOR EACH LINE
    const linesHTML = header.lines?.map((line, index) => {
        const lineCurrency = getCurrency(line.currencyId, currencyList)

        console.log(`📦 Line ${index + 1}: ${line.product?.pro_name}`)
        console.log(`   Original: ${line.price} ${lineCurrency.code} (no conversion)`)

        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td style="text-align: center;">${line.product?.barCode || line.product?.pro_code || line.product?.id}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${getProductImage(line.product) ? `
              <img src="${baseUrl}/${getProductImage(line.product).replace(/^\//, '')}" 
                   style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;" 
                   onerror="this.style.display='none';" />
            ` : ''}
            <div>
              <span class="pro-name" style="font-weight: bold; display: block;">${line.product?.pro_name || 'Unknown Product'}</span>
              ${line.product?.barCode ? `<small style="color: #666; display: block; margin-top: 2px;">Barcode: ${line.product?.barCode}</small>` : ''}
            </div>
          </div>
        </td>
        <td style="text-align: center;">${formatNumber(line.quantity)}</td>
        <td style="text-align: center;">${line.unit?.name || 'ແກັດ'}</td>
        <td style="text-align: right;">
          <strong>${formatNumber(line.price)} ${lineCurrency.code}</strong>
        </td>
        <td style="text-align: right;">
          <strong>${formatNumber(line.total)} ${lineCurrency.code}</strong>
        </td>
      </tr>
    `
    }).join('') || '<tr><td colspan="7" style="text-align: center;">No items</td></tr>'

    // Calculate totals BY CURRENCY
    const totalsByCurrency = {}
    let totalInLocalCurrency = 0

    header.lines?.forEach(line => {
        const lineCurrency = getCurrency(line.currencyId, currencyList)

        // Group by currency
        if (!totalsByCurrency[lineCurrency.code]) {
            totalsByCurrency[lineCurrency.code] = {
                currency: lineCurrency,
                subtotal: 0,
                discount: 0,
                total: 0
            }
        }

        totalsByCurrency[lineCurrency.code].subtotal += line.total
        totalsByCurrency[lineCurrency.code].discount += (line.discount || 0)
        totalsByCurrency[lineCurrency.code].total += line.total - (line.discount || 0)

        // Convert to local currency for grand total
        const localAmount = convertToLocalCurrency(line.total - (line.discount || 0), lineCurrency, localCurrency)
        totalInLocalCurrency += localAmount
    })

    // Add header discount to local currency
    const headerDiscount = header.discount || 0
    totalInLocalCurrency -= headerDiscount

    console.log('💰 Totals by Currency:', totalsByCurrency)
    console.log(`🎯 Grand Total in Local Currency: ${totalInLocalCurrency} ${localCurrency.code}`)

    // Generate totals HTML - SUMMARY BY CURRENCY
    const totalsHTML = Object.entries(totalsByCurrency).map(([currencyCode, data]) => `
    <div class="total-row currency-subtotal">
      <span>Subtotal (${currencyCode}):</span>
      <span><strong>${formatNumber(data.total)} ${currencyCode}</strong></span>
    </div>
  `).join('')

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Receipt #${header.id}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.2; 
            padding: 10px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
        }
        .content { flex: 1; }
        
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            border-bottom: 2px solid #000; 
            padding-bottom: 8px; 
            margin-bottom: 12px; 
        }
        .company-info h1 { 
            font-size: 16px; 
            margin: 0; 
            text-transform: uppercase; 
            color: #000;
        }
        .company-info p { 
            margin: 2px 0; 
            font-size: 10px; 
            color: #444; 
        }
        .receipt-title { 
            text-align: right; 
            border: 2px solid #000; 
            padding: 8px 15px; 
            background: #f5f5f5; 
            border-radius: 4px;
        }
        .receipt-title h2 { 
            margin: 0; 
            font-size: 18px; 
            line-height: 1; 
            color: #000;
        }
        .receipt-title span { 
            font-size: 11px; 
            color: #666; 
        }
        
        /* Multi-Currency Banner */
        .currency-banner {
            background: #f0f8ff;
            border: 1px solid #4682b4;
            border-radius: 4px;
            padding: 6px 10px;
            margin-bottom: 10px;
            text-align: center;
            font-size: 11px;
            color: #2e4a62;
            font-weight: bold;
        }
        
        .info-box { 
            width: 100%; 
            border: 1px solid #000; 
            margin-bottom: 12px; 
            padding: 8px; 
            display: flex; 
            background: #fafafa;
        }
        .info-col { flex: 1; font-size: 10px; }
        .info-col.right { 
            border-left: 1px solid #ccc; 
            padding-left: 12px; 
            flex: 0 0 250px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #333;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 12px; 
            border: 2px solid #000;
        }
        th { 
            border: 1px solid #000; 
            background-color: #e8e8e8; 
            padding: 6px 4px; 
            font-size: 9px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #000; 
            padding: 6px 4px; 
            font-size: 10px;
            vertical-align: top;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-bottom: 20px; 
        }
        .totals-box { 
            width: 320px; 
            border: 2px solid #000; 
            background: #fafafa;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 5px 8px; 
            border-bottom: 1px solid #ccc; 
            font-size: 11px;
        }
        .currency-subtotal {
            background-color: #f8f9fa;
            color: #495057;
            font-weight: 600;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #e8f5e8; 
            font-weight: bold; 
            border-top: 2px solid #000; 
            font-size: 13px;
            color: #2e7d32;
        }
        .discount-row { 
            color: #d32f2f; 
            background-color: #ffebee;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-between; 
            text-align: center; 
            margin-bottom: 35px;
        }
        .sign-box { 
            border-top: 1px solid #000; 
            width: 140px; 
            padding-top: 8px; 
            font-size: 9px; 
            font-weight: bold;
        }
        
        .currency-note {
            font-size: 8px;
            color: #666;
            font-style: italic;
            margin-top: 10px;
            padding: 5px;
            background: #f8f9fa;
            border-radius: 3px;
        }
        
        @media print { 
            body { margin: 0; padding: 5mm; } 
            @page { size: A4; margin: 5mm; } 
            .footer { page-break-inside: avoid; }
            .currency-banner { background: #f0f0f0 !important; }
            .totals-box { background: #f8f8f8 !important; }
            .total-row.final { background: #f0f0f0 !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div class="company-info" style="flex: 1; text-align: left;">
                <h1>${companyData.name || 'COMPANY NAME'}</h1>
                <p>${companyData.address || ''}</p>
                <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                ${companyData.taxId ? `<p><strong>Tax ID:</strong> ${companyData.taxId}</p>` : ''}
                ${companyData.bank ? `<p><strong>Bank:</strong> ${companyData.bank} ${companyData.accountName ? `- ${companyData.accountName}` : ''} ${companyData.accounts ? `(${companyData.accounts})` : ''}</p>` : ''}
            </div>
            <div class="receipt-title">
                <h2>RECEIVE NOTE</h2>
                <span>ໃບຂາຍສິນຄ້າ</span>
            </div>
        </div>
        
        <!-- Multi-Currency Information Banner -->
        <div class="currency-banner">
            💱 ໃບຮັບເງິນຫຼາຍສະກຸນເງິນ | ລາຍການສິນຄ້າສະແດງເປັນສະກຸນເງິນຕົ້ນຕໍ | ຍອດລວມແປງເປັນ ${localCurrency.code}
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ລູກຄ້າ:</span> <b>${header.client?.company || '-'}</b></div>
                <div><span class="field-label">ຊື່:</span> ${header.client?.name || '-'}</div>
                <div><span class="field-label">ເບິໂທ:</span> ${header.client?.telephone || '-'}</div>
                <div><span class="field-label">ເລກອ້າງອີງ:</span> <b>${resolveReferenceNo(header)}</b></div>
            </div>
            <div class="info-col right">
                <div><span class="field-label">ເລກບິນ:</span> <b>RCP-${header.id}${resolveReferenceNo(header) !== '-' ? ` | ${resolveReferenceNo(header)}` : ''}</b></div>
                <div><span class="field-label">ວັນທີ:</span> ${formatDate(header.bookingDate)}</div>
                <div><span class="field-label">ສະຖານທີ່:</span> <b>${resolveLocationName(header)}</b></div>
                <div><span class="field-label">ການຊຳລະ:</span> ${header.payment?.payment_name || header.payment?.payment_code || '-'}</div>
                <div><span class="field-label">ພະນັກງານ:</span> ${header.user?.cus_name || '-'}</div>
            </div>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th width="5%">ລຳດັບ</th>
                    <th width="8%">ລະຫັດ</th>
                    <th width="35%">Description / ລາຍການ</th>
                    <th width="8%">Qty<br>ຈຳນວນ</th>
                    <th width="8%">Unit<br>ຫົວໜ່ວຍ</th>
                    <th width="15%">Price / ລາຄາ</th>
                    <th width="16%">Total / ລວມ</th>
                </tr>
            </thead>
            <tbody>${linesHTML}</tbody>
        </table>
        
        <div class="totals-container">
            <div class="totals-box">
                <!-- Subtotals by Currency -->
                ${totalsHTML}
                
                <!-- Header discount if any -->
                ${headerDiscount > 0 ? `
                    <div class="total-row discount-row">
                        <span>Additional Discount / ສ່ວນຫຼຸດເພີ່ມ:</span>
                        <span><strong>-${formatNumber(headerDiscount)} ${localCurrency.code}</strong></span>
                    </div>
                ` : ''}
                
                <!-- Final Total in Local Currency -->
                <div class="total-row final">
                    <span>GRAND TOTAL / ຍອດລວມສຸດທ້າຍ:</span>
                    <span><strong>${formatNumber(totalInLocalCurrency)} ${localCurrency.code}</strong></span>
                </div>
                ${generateMultiCurrencyTotalsHTML(totalInLocalCurrency, localCurrency, currencyList)}
            </div>
        </div>
        
        <!-- Multi-currency explanation -->
        <div class="currency-note">
            <strong>ໝາຍເຫດ:</strong> ລາຍການສິນຄ້າແຕ່ລະລາຍການສະແດງເປັນສະກຸນເງິນຕົ້ນຕໍ. 
            ຍອດລວມຍ່ອຍສະແດງຈຳນວນເງິນຕາມປະເພດສະກຸນເງິນ. ຍອດລວມສຸດທ້າຍແປງເປັນສະກຸນເງິນທ້ອງຖິ່ນ (${localCurrency.code}) ສຳລັບການຊຳລະ.
            ${Object.keys(totalsByCurrency).length > 1 ?
            `<br><strong>ສະກຸນເງິນທີ່ໃຊ້:</strong> ${Object.keys(totalsByCurrency).join(', ')}` : ''
        }
        </div>
    </div>
    
    <div class="footer">
        <div class="footer-row">
            <div class="sign-box">ຜູ້ກວດຮັບ<br>Receiver</div>
            <div class="sign-box">ຜູ້ສົ່ງສິນຄ້າ<br>Sender</div>
        </div>
        <div class="footer-row">
            <div class="sign-box">ຜູ້ຈ່າຍເງິນ<br>Payer</div>
            <div class="sign-box">ຜູ້ຮັບເງິນ<br>Receiver</div>
            <div class="sign-box">ຜູ້ອະນຸມັດ<br>Approved By</div>
        </div>
    </div>
    </body>
    </html>
  `
}

// ==========================================
// COMPLETE INVOICE TEMPLATE WITH MULTI-CURRENCY SUPPORT
// ==========================================
export const generateInvoiceHTML = (header, companyData, currencyList = []) => {
    console.log('📋 GENERATING INVOICE - ORIGINAL CURRENCY VERSION')
    console.log('===============================================')

    // Get local currency
    const localCurrency = currencyList.find(c => c.isLocalCCY) || header.currency
    console.log(`🏠 Local Currency: ${localCurrency.code}`)

    const baseUrl = getBaseUrl()
    const qr1Url = getCompanyQR1Url(companyData)
    const qr2Url = getCompanyQR2Url(companyData)

    // Generate lines HTML - SHOW ORIGINAL CURRENCY FOR EACH LINE
    const linesHTML = header.lines?.map((line, index) => {
        const lineCurrency = getCurrency(line.currencyId, currencyList)

        console.log(`📦 Invoice Line ${index + 1}: ${line.product?.pro_name}`)
        console.log(`   Original: ${line.price} ${lineCurrency.code} (no conversion)`)

        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${getProductImage(line.product) ? `
              <img src="${baseUrl}/${getProductImage(line.product).replace(/^\//, '')}" 
                   style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;" 
                   onerror="this.style.display='none';" />
            ` : ''}
            <div>
              <span class="pro-name" style="font-weight: bold; display: block;">${line.product?.pro_name || 'Unknown Product'}</span>
              <span style="display: block; margin-top: 2px;">
                ${line.product?.pro_id ? `<span class="pro-id" style="color: #666; font-size: 9px; margin-right: 8px;">ID: ${line.product?.pro_id}</span>` : ''}
                ${line.product?.barCode ? `<span class="pro-barcode" style="color: #666; font-size: 9px;">Barcode: ${line.product?.barCode}</span>` : ''}
                ${line.isGift ? '<small style="color: #28a745; font-weight: bold;"> [Gift]</small>' : ''}
              </span>
            </div>
          </div>
        </td>
        <td style="text-align: center;">${formatNumber(line.quantity)}</td>
        <td style="text-align: center;">${line.unit?.name || ''}</td>
        <td style="text-align: right;">
          <strong>${formatNumber(line.price)} ${lineCurrency.code}</strong>
        </td>
        <td style="text-align: right;">
          <span style="color: #dc3545;">${formatNumber(line.discount || 0)} ${lineCurrency.code}</span>
        </td>
        <td style="text-align: right;">
          <strong>${formatNumber(line.total)} ${lineCurrency.code}</strong>
        </td>
      </tr>
    `
    }).join('') || '<tr><td colspan="7" style="text-align: center;">No items</td></tr>'

    // Calculate totals BY CURRENCY (same logic as receipt)
    const totalsByCurrency = {}
    let totalInLocalCurrency = 0

    header.lines?.forEach(line => {
        const lineCurrency = getCurrency(line.currencyId, currencyList)

        // Group by currency
        if (!totalsByCurrency[lineCurrency.code]) {
            totalsByCurrency[lineCurrency.code] = {
                currency: lineCurrency,
                subtotal: 0,
                discount: 0,
                total: 0
            }
        }

        totalsByCurrency[lineCurrency.code].subtotal += line.total
        totalsByCurrency[lineCurrency.code].discount += (line.discount || 0)
        totalsByCurrency[lineCurrency.code].total += line.total - (line.discount || 0)

        // Convert to local currency for grand total
        const localAmount = convertToLocalCurrency(line.total - (line.discount || 0), lineCurrency, localCurrency)
        totalInLocalCurrency += localAmount
    })

    // Add header discount to local currency
    const headerDiscount = header.discount || 0
    totalInLocalCurrency -= headerDiscount

    console.log('💰 Invoice Totals by Currency:', totalsByCurrency)
    console.log(`🎯 Invoice Grand Total in Local Currency: ${totalInLocalCurrency} ${localCurrency.code}`)

    // Generate totals HTML - SUMMARY BY CURRENCY
    const totalsHTML = Object.entries(totalsByCurrency).map(([currencyCode, data]) => `
    <div class="total-row currency-subtotal">
      <span>Subtotal (${currencyCode}) / ລວມຍ່ອຍ:</span>
      <span><strong>${formatNumber(data.total)} ${currencyCode}</strong></span>
    </div>
  `).join('')

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Invoice #${header.id}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.2; 
            padding: 10px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
        }
        .content { flex: 1; }
        
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            border-bottom: 2px solid #000; 
            padding-bottom: 8px; 
            margin-bottom: 12px; 
        }
        .company-info h1 { 
            font-size: 16px; 
            margin: 0; 
            text-transform: uppercase; 
            color: #000;
        }
        .company-info p { 
            margin: 2px 0; 
            font-size: 10px; 
            color: #444; 
        }
        .invoice-title { 
            text-align: center; 
            border: 2px solid #000; 
            padding: 8px 15px; 
            background: #fff3cd; 
            border-radius: 4px;
        }
        .invoice-title h2 { 
            margin: 0; 
            font-size: 18px; 
            line-height: 1; 
            color: #000;
        }
        .invoice-title span { 
            font-size: 11px; 
            color: #666; 
        }
        
        /* Multi-Currency Banner for Invoice */
        .currency-banner {
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 4px;
            padding: 6px 10px;
            margin-bottom: 10px;
            text-align: center;
            font-size: 11px;
            color: #856404;
            font-weight: bold;
        }
        
        .info-box { 
            width: 100%; 
            border: 1px solid #000; 
            margin-bottom: 12px; 
            padding: 8px; 
            display: flex; 
            background: #fafafa;
        }
        .info-col { flex: 1; font-size: 10px; }
        .info-col.right { 
            border-left: 1px solid #ccc; 
            padding-left: 12px; 
            flex: 0 0 250px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #333;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 12px; 
            border: 2px solid #000;
        }
        th { 
            border: 1px solid #000; 
            background-color: #e8e8e8; 
            padding: 6px 4px; 
            font-size: 9px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #000; 
            padding: 6px 4px; 
            font-size: 10px;
            vertical-align: top;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-bottom: 20px; 
        }
        .totals-box { 
            width: 320px; 
            border: 2px solid #000; 
            background: #fafafa;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 5px 8px; 
            border-bottom: 1px solid #ccc; 
            font-size: 11px;
        }
        .currency-subtotal {
            background-color: #f8f9fa;
            color: #495057;
            font-weight: 600;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #d4edda; 
            font-weight: bold; 
            border-top: 2px solid #000; 
            font-size: 13px;
            color: #155724;
        }
        .discount-row { 
            color: #721c24; 
            background-color: #f8d7da;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-between; 
            text-align: center; 
            margin-bottom: 35px;
        }
        .sign-box { 
            border-top: 1px solid #000; 
            width: 140px; 
            padding-top: 8px; 
            font-size: 9px; 
            font-weight: bold;
        }
        
        .currency-note {
            font-size: 8px;
            color: #666;
            font-style: italic;
            margin-top: 10px;
            padding: 5px;
            background: #f8f9fa;
            border-radius: 3px;
        }
        
        @media print { 
            body { margin: 0; padding: 5mm; } 
            @page { size: A4; margin: 5mm; } 
            .footer { page-break-inside: avoid; }
            .currency-banner { background: #f5f5f5 !important; }
            .totals-box { background: #f8f8f8 !important; }
            .total-row.final { background: #f0f0f0 !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container" style="display: flex; align-items: center; justify-content: space-between;">
            <div class="company-info" style="flex: 1.2; text-align: left;">
                <h1>${companyData.name || 'COMPANY NAME'}</h1>
                <p>${companyData.address || ''}</p>
                <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                ${companyData.taxId ? `<p><strong>Tax ID:</strong> ${companyData.taxId}</p>` : ''}
                ${companyData.bank ? `<p><strong>Bank:</strong> ${companyData.bank} ${companyData.accountName ? `- ${companyData.accountName}` : ''} ${companyData.accounts ? `(${companyData.accounts})` : ''}</p>` : ''}
            </div>
            <div style="flex: 0.8; display: flex; justify-content: center; align-self: flex-start; margin-top: 5px;">
                <div class="invoice-title">
                    <h2>INVOICE</h2>
                    <span>ໃບແຈ້ງໜີ້</span>
                </div>
            </div>
            <div class="header-qrs" style="flex: 1.5; display: flex; gap: 8px; justify-content: flex-end; align-items: center;">
                ${qr1Url ? `
                    <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
                        <img src="${qr1Url}" style="width: 150px; height: 150px; object-fit: contain; border: 1px solid #ccc; padding: 2px; background: #fff; border-radius: 4px;" />
                        <span style="font-size: 11px; margin-top: 2px; color: #555; font-weight: bold;">ກີບ</span>
                    </div>
                ` : ''}
                ${qr2Url ? `
                    <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
                        <img src="${qr2Url}" style="width: 150px; height: 150px; object-fit: contain; border: 1px solid #ccc; padding: 2px; background: #fff; border-radius: 4px;" />
                        <span style="font-size: 11px; margin-top: 2px; color: #555; font-weight: bold;">ບາດ</span>
                    </div>
                ` : ''}
            </div>
        </div>
        
        <!-- Multi-Currency Information Banner -->
        <div class="currency-banner">
            💰 ໃບແຈ້ງໜີ້ | ລາຍການສິນຄ້າສະແດງເປັນສະກຸນເງິນທີ່ຂາຍຕົວຈິງ | ຍອດລວມແປງເປັນ ${localCurrency.code}
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ລູກຄ້າ:</span> <b>${header.client?.name || header.client?.company || 'Walk-in'}</b></div>
                <div><span class="field-label">ເບິໂທ:</span> ${header.client?.telephone || '-'}</div>
                <div><span class="field-label">ທີ່ຢູ່:</span> ${header.client?.address || '-'}</div>
                <div><span class="field-label">ເລກອ້າງອີງ:</span> <b>${resolveReferenceNo(header)}</b></div>
            </div>
            <div class="info-col right">
                <div><span class="field-label">ເລກໃບແຈ້ງໜີ້:</span> <b>INV-${header.id}${resolveReferenceNo(header) !== '-' ? ` | ${resolveReferenceNo(header)}` : ''}</b></div>
                <div><span class="field-label">ວັນທີ:</span> ${formatDate(header.bookingDate)}</div>
                <div><span class="field-label">ສະຖານທີ່:</span> <b>${resolveLocationName(header)}</b></div>
                <div><span class="field-label">ການຊຳລະ:</span> ${header.payment?.payment_name || header.payment?.payment_code || '-'}</div>
                <div><span class="field-label">ພະນັກງານ:</span> ${header.user?.cus_name || '-'}</div>
            </div>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th width="5%">ລຳດັບ</th>
                    <th width="35%">Description / ລາຍການ</th>
                    <th width="8%">Qty<br>ຈຳນວນ</th>
                    <th width="8%">Unit<br>ຫົວໜ່ວຍ</th>
                    <th width="15%">Price / ລາຄາ</th>
                    <th width="12%">Discount<br>ສ່ວນຫຼຸດ</th>
                    <th width="15%">Amount / ລວມ</th>
                </tr>
            </thead>
            <tbody>${linesHTML}</tbody>
        </table>
        
        <div class="totals-container">
            <div class="totals-box">
                <!-- Subtotals by Currency -->
                ${totalsHTML}
                
                <!-- Header discount if any -->
                ${headerDiscount > 0 ? `
                    <div class="total-row discount-row">
                        <span>Additional Discount / ສ່ວນຫຼຸດເພີ່ມ:</span>
                        <span><strong>-${formatNumber(headerDiscount)} ${localCurrency.code}</strong></span>
                    </div>
                ` : ''}
                
                <!-- Final Total in Local Currency -->
                <div class="total-row final">
                    <span>TOTAL AMOUNT / ຍອດລວມສຸດທ້າຍ:</span>
                    <span><strong>${formatNumber(totalInLocalCurrency)} ${localCurrency.code}</strong></span>
                </div>
                ${generateMultiCurrencyTotalsHTML(totalInLocalCurrency, localCurrency, currencyList)}
            </div>
        </div>
        
        <!-- Multi-currency explanation -->
        <div class="currency-note">
            <strong>ໝາຍເຫດ:</strong> ລາຍການສິນຄ້າແຕ່ລະລາຍການສະແດງເປັນສະກຸນເງິນຕົວຈິງ. 
            ຍອດລວມຍ່ອຍສະແດງຈຳນວນເງິນຕາມປະເພດສະກຸນເງິນ. ຍອດລວມສຸດທ້າຍແປງເປັນສະກຸນເງິນທ້ອງຖິ່ນ (${localCurrency.code}) ສຳລັບການຊຳລະ.
            ${Object.keys(totalsByCurrency).length > 1 ?
            `<br><strong>ສະກຸນເງິນທີ່ໃຊ້:</strong> ${Object.keys(totalsByCurrency).join(', ')}` : ''
        }
        </div>
    </div>
    
    <div class="footer">
        <div class="footer-row" style="margin-top: 50px; margin-bottom: 10px;">
            <div class="sign-box" style="width: 22%;">ລາຍເຊັນລູກຄ້າ<br>Customer Signature</div>
            <div class="sign-box" style="width: 22%;">ພະນັກງານສົ່ງສິນຄ້າ<br>Delivery Officer</div>
            <div class="sign-box" style="width: 22%;">ຜູ້ຮັບເງິນ<br>Recipient</div>
            <div class="sign-box" style="width: 22%;">ຜູ້ອະນຸມັດ<br>Approver</div>
        </div>
    </div>
    </body>
    </html>
  `
}

// ==========================================
// A4 RECEIPT TEMPLATE WITH MULTI-CURRENCY SUPPORT
// ==========================================
export const generateA4ReceiptHTML = (header, companyData, currencyList = []) => {
    console.log('🧾 GENERATING A4 RECEIPT - ORIGINAL CURRENCY VERSION')
    console.log('===================================================')

    // Get local currency
    const localCurrency = currencyList.find(c => c.isLocalCCY) || header.currency
    console.log(`🏠 Local Currency: ${localCurrency.code}`)

    const baseUrl = getBaseUrl()
    const qr1Url = getCompanyQR1Url(companyData)
    const qr2Url = getCompanyQR2Url(companyData)

    // Generate lines HTML - SHOW ORIGINAL CURRENCY FOR EACH LINE
    const linesHTML = header.lines?.map((line, index) => {
        const lineCurrency = getCurrency(line.currencyId, currencyList)

        console.log(`📦 Receipt Line ${index + 1}: ${line.product?.pro_name}`)
        console.log(`   Original: ${line.price} ${lineCurrency.code} (no conversion)`)

        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${getProductImage(line.product) ? `
              <img src="${baseUrl}/${getProductImage(line.product).replace(/^\//, '')}" 
                   style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;" 
                   onerror="this.style.display='none';" />
            ` : ''}
            <div>
              <span class="pro-name" style="font-weight: bold; display: block;">${line.product?.pro_name || 'Unknown Product'}</span>
              <span style="display: block; margin-top: 2px;">
                ${line.product?.pro_id ? `<span class="pro-id" style="color: #666; font-size: 9px; margin-right: 8px;">ID: ${line.product?.pro_id}</span>` : ''}
                ${line.product?.barCode ? `<span class="pro-barcode" style="color: #666; font-size: 9px;">Barcode: ${line.product?.barCode}</span>` : ''}
                ${line.isGift ? '<small style="color: #28a745; font-weight: bold;"> [Gift]</small>' : ''}
              </span>
            </div>
          </div>
        </td>
        <td style="text-align: center;">${formatNumber(line.quantity)}</td>
        <td style="text-align: center;">${line.unit?.name || ''}</td>
        <td style="text-align: right;">
          <strong>${formatNumber(line.price)} ${lineCurrency.code}</strong>
        </td>
        <td style="text-align: right;">
          <span style="color: #dc3545;">${formatNumber(line.discount || 0)} ${lineCurrency.code}</span>
        </td>
        <td style="text-align: right;">
          <strong>${formatNumber(line.total)} ${lineCurrency.code}</strong>
        </td>
      </tr>
    `
    }).join('') || '<tr><td colspan="7" style="text-align: center;">No items</td></tr>'

    // Calculate totals BY CURRENCY (same logic as receipt)
    const totalsByCurrency = {}
    let totalInLocalCurrency = 0

    header.lines?.forEach(line => {
        const lineCurrency = getCurrency(line.currencyId, currencyList)

        // Group by currency
        if (!totalsByCurrency[lineCurrency.code]) {
            totalsByCurrency[lineCurrency.code] = {
                currency: lineCurrency,
                subtotal: 0,
                discount: 0,
                total: 0
            }
        }

        totalsByCurrency[lineCurrency.code].subtotal += line.total
        totalsByCurrency[lineCurrency.code].discount += (line.discount || 0)
        totalsByCurrency[lineCurrency.code].total += line.total - (line.discount || 0)

        // Convert to local currency for grand total
        const localAmount = convertToLocalCurrency(line.total - (line.discount || 0), lineCurrency, localCurrency)
        totalInLocalCurrency += localAmount
    })

    // Add header discount to local currency
    const headerDiscount = header.discount || 0
    totalInLocalCurrency -= headerDiscount

    console.log('💰 Receipt Totals by Currency:', totalsByCurrency)
    console.log(`🎯 Receipt Grand Total in Local Currency: ${totalInLocalCurrency} ${localCurrency.code}`)

    // Generate totals HTML - SUMMARY BY CURRENCY
    const totalsHTML = Object.entries(totalsByCurrency).map(([currencyCode, data]) => `
    <div class="total-row currency-subtotal">
      <span>Subtotal (${currencyCode}) / ລວມຍ່ອຍ:</span>
      <span><strong>${formatNumber(data.total)} ${currencyCode}</strong></span>
    </div>
  `).join('')

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Receipt #${header.id}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.2; 
            padding: 10px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
        }
        .content { flex: 1; }
        
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            border-bottom: 2px solid #000; 
            padding-bottom: 8px; 
            margin-bottom: 12px; 
        }
        .company-info h1 { 
            font-size: 16px; 
            margin: 0; 
            text-transform: uppercase; 
            color: #000;
        }
        .company-info p { 
            margin: 2px 0; 
            font-size: 10px; 
            color: #444; 
        }
        .invoice-title { 
            text-align: center; 
            border: 2px solid #000; 
            padding: 8px 15px; 
            background: #d4edda; 
            border-radius: 4px;
        }
        .invoice-title h2 { 
            margin: 0; 
            font-size: 18px; 
            line-height: 1; 
            color: #155724;
        }
        .invoice-title span { 
            font-size: 11px; 
            color: #155724; 
        }
        
        /* Multi-Currency Banner for Receipt */
        .currency-banner {
            background: #d4edda;
            border: 1px solid #c3e6cb;
            border-radius: 4px;
            padding: 6px 10px;
            margin-bottom: 10px;
            text-align: center;
            font-size: 11px;
            color: #155724;
            font-weight: bold;
        }
        
        .info-box { 
            width: 100%; 
            border: 1px solid #000; 
            margin-bottom: 12px; 
            padding: 8px; 
            display: flex; 
            background: #fafafa;
        }
        .info-col { flex: 1; font-size: 10px; }
        .info-col.right { 
            border-left: 1px solid #ccc; 
            padding-left: 12px; 
            flex: 0 0 250px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #333;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 12px; 
            border: 2px solid #000;
        }
        th { 
            border: 1px solid #000; 
            background-color: #e8e8e8; 
            padding: 6px 4px; 
            font-size: 9px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #000; 
            padding: 6px 4px; 
            font-size: 10px;
            vertical-align: top;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-bottom: 20px; 
        }
        .totals-box { 
            width: 320px; 
            border: 2px solid #000; 
            background: #fafafa;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 5px 8px; 
            border-bottom: 1px solid #ccc; 
            font-size: 11px;
        }
        .currency-subtotal {
            background-color: #f8f9fa;
            color: #495057;
            font-weight: 600;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #d4edda; 
            font-weight: bold; 
            border-top: 2px solid #000; 
            font-size: 13px;
            color: #155724;
        }
        .discount-row { 
            color: #721c24; 
            background-color: #f8d7da;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-between; 
            text-align: center; 
            margin-bottom: 35px;
        }
        .sign-box { 
            border-top: 1px solid #000; 
            width: 140px; 
            padding-top: 8px; 
            font-size: 9px; 
            font-weight: bold;
        }
        
        .currency-note {
            font-size: 8px;
            color: #666;
            font-style: italic;
            margin-top: 10px;
            padding: 5px;
            background: #f8f9fa;
            border-radius: 3px;
        }
        
        @media print { 
            body { margin: 0; padding: 5mm; } 
            @page { size: A4; margin: 5mm; } 
            .footer { page-break-inside: avoid; }
            .currency-banner { background: #f5f5f5 !important; }
            .totals-box { background: #f8f8f8 !important; }
            .total-row.final { background: #f0f0f0 !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container" style="display: flex; align-items: center; justify-content: space-between;">
            <div class="company-info" style="flex: 1.2; text-align: left;">
                <h1>${companyData.name || 'COMPANY NAME'}</h1>
                <p>${companyData.address || ''}</p>
                <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                ${companyData.taxId ? `<p><strong>Tax ID:</strong> ${companyData.taxId}</p>` : ''}
                ${companyData.bank ? `<p><strong>Bank:</strong> ${companyData.bank} ${companyData.accountName ? `- ${companyData.accountName}` : ''} ${companyData.accounts ? `(${companyData.accounts})` : ''}</p>` : ''}
            </div>
            <div style="flex: 0.8; display: flex; justify-content: center; align-self: flex-start; margin-top: 5px;">
                <div class="invoice-title">
                    <h2>RECEIPT</h2>
                    <span>ໃບຮັບເງິນ</span>
                </div>
            </div>
            <div class="header-qrs" style="flex: 1.5; display: flex; gap: 8px; justify-content: flex-end; align-items: center;">
                ${qr1Url ? `
                    <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
                        <img src="${qr1Url}" style="width: 150px; height: 150px; object-fit: contain; border: 1px solid #ccc; padding: 2px; background: #fff; border-radius: 4px;" />
                        <span style="font-size: 11px; margin-top: 2px; color: #555; font-weight: bold;">ກີບ</span>
                    </div>
                ` : ''}
                ${qr2Url ? `
                    <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
                        <img src="${qr2Url}" style="width: 150px; height: 150px; object-fit: contain; border: 1px solid #ccc; padding: 2px; background: #fff; border-radius: 4px;" />
                        <span style="font-size: 11px; margin-top: 2px; color: #555; font-weight: bold;">ບາດ</span>
                    </div>
                ` : ''}
            </div>
        </div>
        
        <!-- Multi-Currency Information Banner -->
        <div class="currency-banner">
            💰 ໃບຮັບເງິນ | ລາຍການສິນຄ້າສະແດງເປັນສະກຸນເງິນທີ່ຂາຍຕົວຈິງ | ຍອດລວມແປງເປັນ ${localCurrency.code}
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ລູກຄ້າ:</span> <b>${header.client?.name || header.client?.company || 'Walk-in'}</b></div>
                <div><span class="field-label">ເບິໂທ:</span> ${header.client?.telephone || '-'}</div>
                <div><span class="field-label">ທີ່ຢູ່:</span> ${header.client?.address || '-'}</div>
                <div><span class="field-label">ເລກອ້າງອີງ:</span> <b>${resolveReferenceNo(header)}</b></div>
            </div>
            <div class="info-col right">
                <div><span class="field-label">ເລກໃບຮັບເງິນ:</span> <b>REC-${header.id}${resolveReferenceNo(header) !== '-' ? ` | ${resolveReferenceNo(header)}` : ''}</b></div>
                <div><span class="field-label">ວັນທີ:</span> ${formatDate(header.bookingDate)}</div>
                <div><span class="field-label">ສະຖານທີ່:</span> <b>${resolveLocationName(header)}</b></div>
                <div><span class="field-label">ການຊຳລະ:</span> ${header.payment?.payment_name || header.payment?.payment_code || '-'}</div>
                <div><span class="field-label">ພະນັກງານ:</span> ${header.user?.cus_name || '-'}</div>
            </div>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th width="5%">ລຳດັບ</th>
                    <th width="35%">Description / ລາຍການ</th>
                    <th width="8%">Qty<br>ຈຳນວນ</th>
                    <th width="8%">Unit<br>ຫົວໜ່ວຍ</th>
                    <th width="15%">Price / ລາຄາ</th>
                    <th width="12%">Discount<br>ສ່ວນຫຼຸດ</th>
                    <th width="15%">Amount / ລວມ</th>
                </tr>
            </thead>
            <tbody>${linesHTML}</tbody>
        </table>
        
        <div class="totals-container">
            <div class="totals-box">
                <!-- Subtotals by Currency -->
                ${totalsHTML}
                
                <!-- Header discount if any -->
                ${headerDiscount > 0 ? `
                    <div class="total-row discount-row">
                        <span>Additional Discount / ສ່ວນຫຼຸດເພີ່ມ:</span>
                        <span><strong>-${formatNumber(headerDiscount)} ${localCurrency.code}</strong></span>
                    </div>
                ` : ''}
                
                <!-- Final Total in Local Currency -->
                <div class="total-row final">
                    <span>TOTAL AMOUNT / ຍອດລວມສຸດທ້າຍ:</span>
                    <span><strong>${formatNumber(totalInLocalCurrency)} ${localCurrency.code}</strong></span>
                </div>
                ${generateMultiCurrencyTotalsHTML(totalInLocalCurrency, localCurrency, currencyList)}
            </div>
        </div>
        
        <!-- Multi-currency explanation -->
        <div class="currency-note">
            <strong>ໝາຍເຫດ:</strong> ລາຍການສິນຄ້າແຕ່ລະລາຍການສະແດງເປັນສະກຸນເງິນຕົວຈິງ. 
            ຍອດລວມຍ່ອຍສະແດງຈຳນວນເງິນຕາມປະເພດສະກຸນເງິນ. ຍອດລວມສຸດທ້າຍແປງເປັນສະກຸນເງິນທ້ອງຖິ່ນ (${localCurrency.code}) ສຳລັບການຊຳລະ.
            ${Object.keys(totalsByCurrency).length > 1 ?
            `<br><strong>ສະກຸນເງິນທີ່ໃຊ້:</strong> ${Object.keys(totalsByCurrency).join(', ')}` : ''
        }
        </div>
    </div>
    
    <div class="footer">
        <div class="footer-row" style="margin-top: 50px; margin-bottom: 10px;">
            <div class="sign-box" style="width: 22%;">ລາຍເຊັນລູກຄ້າ<br>Customer Signature</div>
            <div class="sign-box" style="width: 22%;">ພະນັກງານສົ່ງສິນຄ້າ<br>Delivery Officer</div>
            <div class="sign-box" style="width: 22%;">ຜູ້ຮັບເງິນ<br>Recipient</div>
            <div class="sign-box" style="width: 22%;">ຜູ້ອະນຸມັດ<br>Approver</div>
        </div>
    </div>
    </body>
    </html>
  `
}

export const generatePurchaseOrderHTML = (header, companyData, currencyList = []) => {
    const fmt = (v) => new Intl.NumberFormat().format(v || 0)

    const baseUrl = getBaseUrl()
    const localCurrency = currencyList.find(c => c.isLocalCCY) || header.currency || { code: 'LAK', rate: 1 }

    // Group and calculate totals by currency
    const totalsByCurrency = {}
    let grandTotalInLocal = 0

    const lines = header.lines?.map((l, i) => {
        const lineCurrency = currencyList.find(c => c.id === (l.currencyId || l.product?.costCurrencyId || l.product?.purchaseCurrencyId || l.product?.saleCurrencyId)) || header.currency || localCurrency
        const currencyCode = lineCurrency.code || 'LAK'
        const rate = l.exchangeRate || lineCurrency.rate || 1

        let unitPriceOriginal = l.price || l.unitPrice || 0
        let discountOriginal = l.discount || 0
        let totalOriginal = l.total || 0

        // If it's a legacy line (no currencyId column saved), convert back to original currency from LAK
        if (l.currencyId === null || l.currencyId === undefined) {
            unitPriceOriginal = unitPriceOriginal / (lineCurrency.isLocalCCY ? 1 : rate)
            discountOriginal = discountOriginal / (lineCurrency.isLocalCCY ? 1 : rate)
            totalOriginal = totalOriginal / (lineCurrency.isLocalCCY ? 1 : rate)
        }

        if (!totalsByCurrency[currencyCode]) {
            totalsByCurrency[currencyCode] = {
                currency: lineCurrency,
                subtotal: 0,
                discount: 0,
                total: 0
            }
        }

        totalsByCurrency[currencyCode].subtotal += totalOriginal + discountOriginal
        totalsByCurrency[currencyCode].discount += discountOriginal
        totalsByCurrency[currencyCode].total += totalOriginal

        // Add to local grand total
        let lineTotalLAK = 0
        if (l.currencyId === null || l.currencyId === undefined) {
            lineTotalLAK = l.total || 0
        } else {
            lineTotalLAK = convertToLocalCurrency(l.total || 0, lineCurrency, localCurrency)
        }
        grandTotalInLocal += lineTotalLAK

        return `
      <tr>
        <td align="center">${i + 1}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${getProductImage(l.product) ? `
              <img src="${baseUrl}/${getProductImage(l.product).replace(/^\//, '')}" 
                   style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;" 
                   onerror="this.style.display='none';" />
            ` : ''}
            <div>
              <strong>${l.product?.pro_name || ''}</strong><br>
              <small style="color: #666">PID: ${l.product?.pro_id || ''}</small>
            </div>
          </div>
        </td>
        <td align="center">${fmt(l.qty || l.quantity)}</td>
        <td align="center">${l.unit?.name || ''}</td>
        <td align="right">${fmt(unitPriceOriginal)} ${currencyCode}</td>
        <td align="right">${fmt(discountOriginal)} ${currencyCode}</td>
        <td align="right"><strong>${fmt(totalOriginal)} ${currencyCode}</strong></td>
      </tr>`
    }).join('')

    // Generate totals HTML for each currency
    const totalsHTML = Object.entries(totalsByCurrency).map(([currencyCode, data]) => `
    <div class="total-row">
      <span>Subtotal (${currencyCode}):</span>
      <span><strong>${fmt(data.total)} ${currencyCode}</strong></span>
    </div>
  `).join('')

    const headerDiscount = header.discount || 0
    const localGrandTotal = Math.max(0, grandTotalInLocal - headerDiscount)

    return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap');
      * { box-sizing: border-box; }
      body { font-family: 'Noto Sans Lao', sans-serif; padding: 0; margin: 0; color: #333; font-size: 12px; line-height: 1.6; }
      .page { width: 100%; max-width: 210mm; min-height: 297mm; padding: 15mm; margin: 0 auto; background: white; }
      .header { display: flex; justify-content: space-between; border-bottom: 3px solid #1976d2; padding-bottom: 20px; margin-bottom: 20px; }
      .company-info h1 { color: #1976d2; margin: 0; font-size: 24px; text-transform: uppercase; }
      .company-info p { margin: 2px 0; color: #666; }
      .po-label { text-align: right; }
      .po-label h2 { color: #1976d2; margin: 0; font-size: 28px; }
      .po-label p { margin: 2px 0; font-weight: bold; }
      
      .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 30px; }
      .info-box { background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #eee; }
      .info-box h3 { margin: 0 0 10px 0; font-size: 14px; color: #1976d2; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
      .info-row { display: flex; margin-bottom: 4px; }
      .info-row span:first-child { width: 100px; font-weight: bold; color: #555; }
      
      table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
      th { background: #1976d2; color: white; padding: 12px 8px; font-size: 11px; text-transform: uppercase; border: 1px solid #1976d2; }
      td { padding: 10px 8px; border: 1px solid #eee; }
      tr:nth-child(even) { background: #fafafa; }
      
      .footer { display: flex; justify-content: space-between; }
      .terms { width: calc(100% - 350px); font-size: 10px; color: #777; }
      .totals { width: 320px; }
      .total-row { display: flex; justify-content: space-between; padding: 5px 0; }
      .grand-total { border-top: 2px solid #1976d2; margin-top: 10px; padding-top: 10px; font-size: 16px; font-weight: bold; color: #1976d2; }
      
      .signatures { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 60px; text-align: center; }
      .sig-box { border-top: 1px solid #333; padding-top: 10px; }
      @media print { body { margin: 0; padding: 0; } .page { width: 100% !important; min-height: auto !important; margin: 0 !important; padding: 10mm !important; box-shadow: none !important; } }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #1976d2; padding-bottom: 20px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 15px;">
          ${getCompanyLogoUrl(companyData) ? `
            <img src="${getCompanyLogoUrl(companyData)}" alt="Logo" style="max-height: 70px; max-width: 120px; object-fit: contain; border-radius: 4px;" />
          ` : ''}
          <div class="company-info">
            <h1 style="color: #1976d2; margin: 0; font-size: 24px; text-transform: uppercase;">${companyData.name || 'D-COMMERCE'}</h1>
            <p style="margin: 2px 0; color: #666;">${companyData.address || 'Vientiane, Lao PDR'}</p>
            <p style="margin: 2px 0; color: #666;">ໂທ: ${companyData.tel || '-'}</p>
            <p style="margin: 2px 0; color: #666;">Email: ${companyData.email || '-'}</p>
          </div>
        </div>
        <div class="po-label" style="text-align: right;">
          <h2 style="color: #1976d2; margin: 0; font-size: 28px;">ໃບສັ່ງຊື້</h2>
          <p style="margin: 2px 0; font-weight: bold;">PURCHASE ORDER</p>
          <p style="font-size: 16px; color: #666; margin: 2px 0;"># ${header.id}</p>
        </div>
      </div>
      
      <div class="info-grid">
        <div class="info-box">
          <h3>ຂໍ້ມູນຜູ້ຂາຍ / SUPPLIER</h3>
          <div class="info-row"><span>ຊື່ບໍລິສັດ:</span> <span>${header.vendor?.name || '-'}</span></div>
          <div class="info-row"><span>ຜູ້ຕິດຕໍ່:</span> <span>${header.vendor?.contact || '-'}</span></div>
          <div class="info-row"><span>ເບີໂທ:</span> <span>${header.vendor?.tel || '-'}</span></div>
          <div class="info-row"><span>ທີ່ຢູ່:</span> <span>${header.vendor?.address || '-'}</span></div>
        </div>
        <div class="info-box">
          <h3>ລາຍລະອຽດ / DETAILS</h3>
          <div class="info-row"><span>ວັນທີ:</span> <span>${header.bookingDate ? header.bookingDate.split('T')[0] : ''}</span></div>
          <div class="info-row"><span>ກຳນົດສົ່ງ:</span> <span>${header.deliveryDate ? header.deliveryDate.split('T')[0] : '-'}</span></div>
          <div class="info-row"><span>ສະກຸນເງິນ:</span> <span>${header.currency?.code || 'LAK'}</span></div>
          <div class="info-row"><span>ສະຖານະ:</span> <span>${header.status}</span></div>
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th width="5%">ລຳດັບ</th>
            <th width="35%">ລາຍການສິນຄ້າ / DESCRIPTION</th>
            <th width="8%">ຈຳນວນ</th>
            <th width="8%">ຫົວໜ່ວຍ</th>
            <th width="14%">ລາຄາ</th>
            <th width="14%">ສ່ວນຫຼຸດ</th>
            <th width="16%">ລວມ</th>
          </tr>
        </thead>
        <tbody>
          ${lines}
        </tbody>
      </table>
      
      <div class="footer">
        <div class="terms">
          <h4 style="margin: 0 0 5px 0; color: #333">ເງື່ອນໄຂ / TERMS & CONDITIONS</h4>
          <p>1. ກະລຸນາສົ່ງສິນຄ້າຕາມກຳນົດເວລາທີ່ລະບຸໄວ້.</p>
          <p>2. ສິນຄ້າຕ້ອງຢູ່ໃນສະພາບສົມບູນ ແລະ ຖືກຕ້ອງຕາມມາດຕະຖານ.</p>
          <p>3. ກະລຸນາແນບໃບສັ່ງຊື້ສະບັບນີ້ມານຳໃນເວລາມາສົ່ງສິນຄ້າ.</p>
          ${header.notes ? `<p><strong>ໝາຍເຫດ:</strong> ${header.notes}</p>` : ''}
        </div>
        <div class="totals">
          ${totalsHTML}
          ${headerDiscount > 0 ? `
            <div class="total-row" style="color: #d32f2f;">
              <span>ສ່ວນຫຼຸດເພີ່ມ (Discount):</span>
              <span><strong>-${fmt(headerDiscount)} ${localCurrency.code}</strong></span>
            </div>
          ` : ''}
          <div class="total-row grand-total">
            <span>ລວມທັງໝົດ (Grand Total):</span>
            <span>${fmt(localGrandTotal)} ${localCurrency.code}</span>
          </div>
          ${generateMultiCurrencyTotalsHTML(localGrandTotal, localCurrency, currencyList)}
        </div>
      </div>
      
      <div class="signatures">
        <div class="sig-box">
          <p>ຜູ້ຈັດຊື້</p>
          <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
        </div>
        <div class="sig-box">
          <p>ຜູ້ກວດກາ</p>
          <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
        </div>
        <div class="sig-box">
          <p>ຜູ້ອະນຸມັດ/ຮອງອຳນວຍການ</p>
          <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
        </div>
      </div>
    </div>
  </body>
  </html>`
}

export const generateTransferHTML = (header, companyData, currencyList = []) => {
    const fmt = (v) => new Intl.NumberFormat().format(v || 0)
    const baseUrl = getBaseUrl()

    const localCurrency = currencyList.find(c => c.isLocalCCY === true || c.isLocalCCY === 1 || c.isHome === true || c.isHome === 1) || { code: 'LAK' }
    const homeCurrencyCode = localCurrency.code || 'LAK'

    const lines = (header.lines || []).map((l, i) => {
        const productCode = l.product?.pro_id || ''
        const productName = l.product?.pro_name || 'Unknown Product'
        const unitName = l.unit?.name || 'N/A'
        const unitRate = l.unitRate || 1
        const price = l.price || 0
        const total = l.total || 0

        return `
      <tr>
        <td align="center">${i + 1}</td>
        <td align="center">${productCode}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${getProductImage(l.product) ? `
              <img src="${baseUrl}/${getProductImage(l.product).replace(/^\//, '')}" 
                   style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;" 
                   onerror="this.style.display='none';" />
            ` : ''}
            <strong>${productName}</strong>
          </div>
        </td>
        <td align="right"><strong>${fmt(l.quantity)}</strong></td>
        <td align="center">${unitName}</td>
        <td align="right">${fmt(unitRate)}</td>
        <td align="right">${fmt(price)}</td>
        <td align="right"><strong>${fmt(total)}</strong></td>
      </tr>`
    }).join('')

    return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap');
      * { box-sizing: border-box; }
      body { font-family: 'Noto Sans Lao', sans-serif; padding: 0; margin: 0; color: #333; font-size: 12px; line-height: 1.6; }
      .page { width: 100%; max-width: 210mm; min-height: 297mm; padding: 15mm; margin: 0 auto; background: white; }
      .header { display: flex; justify-content: space-between; border-bottom: 3px solid #2563eb; padding-bottom: 20px; margin-bottom: 20px; }
      .company-info h1 { color: #2563eb; margin: 0; font-size: 24px; text-transform: uppercase; }
      .company-info p { margin: 2px 0; color: #666; }
      .po-label { text-align: right; }
      .po-label h2 { color: #2563eb; margin: 0; font-size: 28px; }
      .po-label p { margin: 2px 0; font-weight: bold; }
      
      .info-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 30px; margin-bottom: 30px; }
      .info-box { background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #eee; }
      .info-box h3 { margin: 0 0 10px 0; font-size: 14px; color: #2563eb; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
      .info-row { display: flex; margin-bottom: 4px; }
      .info-row span:first-child { width: 140px; font-weight: bold; color: #555; }
      
      table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
      th { background: #2563eb; color: white; padding: 12px 8px; font-size: 11px; text-transform: uppercase; border: 1px solid #2563eb; }
      td { padding: 10px 8px; border: 1px solid #eee; }
      tr:nth-child(even) { background: #fafafa; }
      
      .footer { display: flex; justify-content: space-between; }
      .terms { width: calc(100% - 350px); font-size: 10px; color: #777; }
      .totals { width: 320px; }
      .total-row { display: flex; justify-content: space-between; padding: 5px 0; }
      .grand-total { border-top: 2px solid #2563eb; margin-top: 10px; padding-top: 10px; font-size: 16px; font-weight: bold; color: #2563eb; }
      
      .signatures { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 60px; text-align: center; }
      .sig-box { border-top: 1px solid #333; padding-top: 10px; }
      @media print { body { margin: 0; padding: 0; } .page { width: 100% !important; min-height: auto !important; margin: 0 !important; padding: 10mm !important; box-shadow: none !important; } }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #2563eb; padding-bottom: 20px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 15px;">
          ${getCompanyLogoUrl(companyData) ? `
            <img src="${getCompanyLogoUrl(companyData)}" alt="Logo" style="max-height: 70px; max-width: 120px; object-fit: contain; border-radius: 4px;" />
          ` : ''}
          <div class="company-info">
            <h1 style="color: #2563eb; margin: 0; font-size: 24px; text-transform: uppercase;">${companyData.name || 'D-COMMERCE'}</h1>
            <p style="margin: 2px 0; color: #666;">${companyData.address || 'Vientiane, Lao PDR'}</p>
            <p style="margin: 2px 0; color: #666;">ໂທ: ${companyData.tel || '-'}</p>
            <p style="margin: 2px 0; color: #666;">Email: ${companyData.email || '-'}</p>
          </div>
        </div>
        <div class="po-label" style="text-align: right;">
          <h2 style="color: #2563eb; margin: 0; font-size: 28px;">ໃບໂອນສິນຄ້າຂ້າມສາງ</h2>
          <p style="margin: 2px 0; font-weight: bold;">STOCK TRANSFER VOUCHER</p>
          <p style="font-size: 16px; color: #666; margin: 2px 0;"># ${header.id}</p>
        </div>
      </div>
      
      <div class="info-grid">
        <div class="info-box">
          <h3>ເສັ້ນທາງການໂອນ / TRANSFER ROUTE</h3>
          <div class="info-row"><span>ຈາກສາງ (From):</span> <span><strong>${header.srcLocation?.name || '-'}</strong></span></div>
          <div class="info-row"><span>ຫາສາງ (To):</span> <span><strong>${header.desLocation?.name || '-'}</strong></span></div>
        </div>
        <div class="info-box">
          <h3>ລາຍລະອຽດ / DETAILS</h3>
          <div class="info-row"><span>ວັນທີ (Date):</span> <span>${formatDate(header.bookingDate)}</span></div>
          <div class="info-row"><span>ຜູ້ລົງ (Prepared By):</span> <span>${header.user?.cus_name || header.user?.cus_id || '-'}</span></div>
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th width="5%">ລຳດັບ</th>
            <th width="15%">ລະຫັດ</th>
            <th width="35%">ລາຍການສິນຄ້າ / DESCRIPTION</th>
            <th width="8%">ຈຳນວນ</th>
            <th width="8%">ຫົວໜ່ວຍ</th>
            <th width="8%">ອັດຕາ</th>
            <th width="11%">ລາຄາ</th>
            <th width="12%">ລວມ</th>
          </tr>
        </thead>
        <tbody>
          ${lines}
        </tbody>
      </table>
      
      <div class="footer">
        <div class="terms">
          ${header.remark ? `<p><strong>ໝາຍເຫດ / Remarks:</strong> ${header.remark}</p>` : ''}
        </div>
        <div class="totals">
          <div class="total-row grand-total">
            <span>ມູນຄ່າລວມ (Grand Total):</span>
            <span>${fmt(header.total)} ${homeCurrencyCode}</span>
          </div>
        </div>
      </div>
      
      <div class="signatures">
        <div class="sig-box">
          <p>ຜູ້ອະນຸມັດ / Approver</p>
          <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
        </div>
        <div class="sig-box">
          <p>ຜູ້ຮັບເຄື່ອງ / Receiver</p>
          <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
        </div>
        <div class="sig-box">
          <p>ຜູ້ໂອນເຄື່ອງ / Transferor</p>
          <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
        </div>
      </div>
    </div>
  </body>
  </html>`
}

export const generateReceivingHTML = (header, companyData, currencyList = []) => {
    const fmt = (v) => new Intl.NumberFormat().format(v || 0)
    const baseUrl = getBaseUrl()

    // Group and calculate totals by currency
    const totalsByCurrency = {}

    const lines = (header.lines || []).map((l, i) => {
        const productCode = l.product?.pro_id || ''
        const productName = l.product?.pro_name || 'Unknown Product'
        const unitName = l.unit?.name || 'N/A'
        const qty = l.qty || l.quantity || 0
        const price = l.price || 0
        const total = l.total || 0

        // Get currency for the line item
        let lineCurrency = currencyList.find(c => c.id === l.currencyId)
        if (!lineCurrency && l.product) {
            const currencyId = l.product.costCurrencyId || l.product.purchaseCurrencyId || l.product.saleCurrencyId
            lineCurrency = currencyList.find(c => c.id === currencyId)
        }
        if (!lineCurrency) {
            lineCurrency = currencyList.find(c => c.id === header.currencyId) || { code: 'LAK', rate: 1 }
        }
        const currencyCode = lineCurrency.code || 'LAK'

        if (!totalsByCurrency[currencyCode]) {
            totalsByCurrency[currencyCode] = {
                code: currencyCode,
                total: 0
            }
        }
        totalsByCurrency[currencyCode].total += total

        return `
      <tr>
        <td align="center">${i + 1}</td>
        <td align="center">${productCode}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${getProductImage(l.product) ? `
              <img src="${baseUrl}/${getProductImage(l.product).replace(/^\//, '')}" 
                   style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;" 
                   onerror="this.style.display='none';" />
            ` : ''}
            <strong>${productName}</strong>
          </div>
        </td>
        <td align="right"><strong>${fmt(qty)}</strong></td>
        <td align="center">${unitName}</td>
        <td align="right">${fmt(price)}</td>
        <td align="right"><strong>${fmt(total)}</strong></td>
      </tr>`
    }).join('')

    const totalsHTML = Object.values(totalsByCurrency).map(d => `
    <div class="total-row">
      <span>Total (${d.code}):</span>
      <span><strong>${fmt(d.total)} ${d.code}</strong></span>
    </div>
  `).join('')

    // Header currency
    const headerCurrency = currencyList.find(c => c.id === header.currencyId) || { code: 'LAK', rate: 1 }

    return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap');
      * { box-sizing: border-box; }
      body { font-family: 'Noto Sans Lao', sans-serif; padding: 0; margin: 0; color: #333; font-size: 12px; line-height: 1.6; }
      .page { width: 100%; max-width: 210mm; min-height: 297mm; padding: 15mm; margin: 0 auto; background: white; }
      .header { display: flex; justify-content: space-between; border-bottom: 3px solid #0284c7; padding-bottom: 20px; margin-bottom: 20px; }
      .company-info h1 { color: #0284c7; margin: 0; font-size: 24px; text-transform: uppercase; }
      .company-info p { margin: 2px 0; color: #666; }
      .po-label { text-align: right; }
      .po-label h2 { color: #0284c7; margin: 0; font-size: 28px; }
      .po-label p { margin: 2px 0; font-weight: bold; }
      
      .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 30px; }
      .info-box { background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #eee; }
      .info-box h3 { margin: 0 0 10px 0; font-size: 14px; color: #0284c7; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
      .info-row { display: flex; margin-bottom: 4px; }
      .info-row span:first-child { width: 120px; font-weight: bold; color: #555; }
      
      table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
      th { background: #0284c7; color: white; padding: 12px 8px; font-size: 11px; text-transform: uppercase; border: 1px solid #0284c7; }
      td { padding: 10px 8px; border: 1px solid #eee; }
      tr:nth-child(even) { background: #fafafa; }
      
      .footer { display: flex; justify-content: space-between; }
      .terms { width: calc(100% - 350px); font-size: 10px; color: #777; }
      .totals { width: 320px; }
      .total-row { display: flex; justify-content: space-between; padding: 5px 0; }
      .grand-total { border-top: 2px solid #0284c7; margin-top: 10px; padding-top: 10px; font-size: 16px; font-weight: bold; color: #0284c7; }
      
      .signatures { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 60px; text-align: center; }
      .sig-box { border-top: 1px solid #333; padding-top: 10px; }
      @media print { body { margin: 0; padding: 0; } .page { width: 100% !important; min-height: auto !important; margin: 0 !important; padding: 10mm !important; box-shadow: none !important; } }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0284c7; padding-bottom: 20px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 15px;">
          ${getCompanyLogoUrl(companyData) ? `
            <img src="${getCompanyLogoUrl(companyData)}" alt="Logo" style="max-height: 70px; max-width: 120px; object-fit: contain; border-radius: 4px;" />
          ` : ''}
          <div class="company-info">
            <h1 style="color: #0284c7; margin: 0; font-size: 24px; text-transform: uppercase;">${companyData.name || 'D-COMMERCE'}</h1>
            <p style="margin: 2px 0; color: #666;">${companyData.address || 'Vientiane, Lao PDR'}</p>
            <p style="margin: 2px 0; color: #666;">ໂທ: ${companyData.tel || '-'}</p>
            <p style="margin: 2px 0; color: #666;">Email: ${companyData.email || '-'}</p>
          </div>
        </div>
        <div class="po-label" style="text-align: right;">
          <h2 style="color: #0284c7; margin: 0; font-size: 28px;">ໃບຮັບສິນຄ້າເຂົ້າສາງ</h2>
          <p style="margin: 2px 0; font-weight: bold;">GOODS RECEIPT NOTE (GRN)</p>
          <p style="font-size: 16px; color: #666; margin: 2px 0;"># ${header.id}</p>
        </div>
      </div>
      
      <div class="info-grid">
        <div class="info-box">
          <h3>ຜູ້ສະໜອງ / SUPPLIER</h3>
          <div class="info-row"><span>ຊື່ບໍລິສັດ:</span> <span>${header.vendor?.name || '-'}</span></div>
          <div class="info-row"><span>ເບີໂທ:</span> <span>${header.vendor?.tel || '-'}</span></div>
          <div class="info-row"><span>ທີ່ຢູ່:</span> <span>${header.vendor?.address || '-'}</span></div>
        </div>
        <div class="info-box">
          <h3>ລາຍລະອຽດ / DETAILS</h3>
          <div class="info-row"><span>ວັນທີຮັບ:</span> <span>${formatDate(header.bookingDate)}</span></div>
          <div class="info-row"><span>PO Ref:</span> <span>${header.poHeaderId ? '#' + header.poHeaderId : '-'}</span></div>
          <div class="info-row"><span>ຜູ້ຮັບເຄື່ອງ:</span> <span>${header.user?.cus_name || header.user?.cus_id || '-'}</span></div>
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th width="5%">%ລຳດັບ</th>
            <th width="15%">ລະຫັດ</th>
            <th width="40%">ລາຍການສິນຄ້າ / DESCRIPTION</th>
            <th width="10%">ຈຳນວນ</th>
            <th width="10%">ຫົວໜ່ວຍ</th>
            <th width="10%">ລາຄາ</th>
            <th width="10%">ລວມ</th>
          </tr>
        </thead>
        <tbody>
          ${lines}
        </tbody>
      </table>
      
      <div class="footer">
        <div class="terms">
          ${header.notes ? `<p><strong>ໝາຍເຫດ / Notes:</strong> ${header.notes}</p>` : ''}
        </div>
        <div class="totals">
          ${totalsHTML}
          <div class="total-row grand-total">
            <span>ລວມທັງໝົດ (Grand Total):</span>
            <span>${fmt(header.total)} ${headerCurrency.code}</span>
          </div>
          ${header.exchangeRate && header.exchangeRate !== 1 ? `
            <div class="total-row" style="color: #666; font-size: 10px;">
              <span>Exchange Rate:</span>
              <span>1 ${headerCurrency.code} = ${fmt(header.exchangeRate)} LAK</span>
            </div>
          ` : ''}
        </div>
      </div>
      
      <div class="signatures">
        <div class="sig-box">
          <p>ຜູ້ອະນຸມັດ / Approver</p>
          <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
        </div>
        <div class="sig-box">
          <p>ຜູ້ກວດຮັບ / Inspector</p>
          <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
        </div>
        <div class="sig-box">
          <p>ຜູ້ມອບເຄື່ອງ / Deliverer</p>
          <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
        </div>
      </div>
    </div>
  </body>
  </html>`
}

// ==========================================
// PROFESSIONAL QUOTATION PRINT TEMPLATE
// ==========================================
export const generateQuotationHTML = (header, companyData, currencyList = []) => {
    console.log('📄 GENERATING QUOTATION PRINT TEMPLATE')

    // Get local currency
    const localCurrency = currencyList.find(c => c.isLocalCCY) || header.currency || { code: 'LAK', symbol: '₭' }
    const baseUrl = getBaseUrl()

    // Generate lines HTML
    const linesHTML = header.lines?.map((line, index) => {
        const lineCurrency = getCurrency(line.currencyId, currencyList)
        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${getProductImage(line.product) ? `
              <img src="${baseUrl}/${getProductImage(line.product).replace(/^\//, '')}" 
                   style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;" 
                   onerror="this.style.display='none';" />
            ` : ''}
            <div>
              <span class="pro-name" style="font-weight: bold; display: block;">${line.product?.pro_name || 'Unknown Product'}</span>
              ${line.product?.barCode ? `<small style="color: #666; display: block; margin-top: 2px;">Barcode: ${line.product?.barCode}</small>` : ''}
            </div>
          </div>
        </td>
        <td style="text-align: center;">${formatNumber(line.quantity)}</td>
        <td style="text-align: center;">${line.unit?.name || ''}</td>
        <td style="text-align: right;">
          <strong>${formatNumber(line.price)} ${lineCurrency.code}</strong>
        </td>
        <td style="text-align: right;">
          <span style="color: #dc3545;">${formatNumber(line.discount || 0)} ${lineCurrency.code}</span>
        </td>
        <td style="text-align: right;">
          <strong>${formatNumber(line.total)} ${lineCurrency.code}</strong>
        </td>
      </tr>
    `
    }).join('') || '<tr><td colspan="7" style="text-align: center;">No items</td></tr>'

    // Calculate totals by currency
    const totalsByCurrency = {}
    let totalInLocalCurrency = 0

    header.lines?.forEach(line => {
        const lineCurrency = getCurrency(line.currencyId, currencyList)

        if (!totalsByCurrency[lineCurrency.code]) {
            totalsByCurrency[lineCurrency.code] = {
                currency: lineCurrency,
                subtotal: 0,
                discount: 0,
                total: 0
            }
        }

        totalsByCurrency[lineCurrency.code].subtotal += line.total
        totalsByCurrency[lineCurrency.code].discount += (line.discount || 0)
        totalsByCurrency[lineCurrency.code].total += line.total - (line.discount || 0)

        const localAmount = convertToLocalCurrency(line.total - (line.discount || 0), lineCurrency, localCurrency)
        totalInLocalCurrency += localAmount
    })

    const headerDiscount = header.discount || 0
    totalInLocalCurrency -= headerDiscount

    const vatAmount = totalInLocalCurrency * 0.1
    const grandTotalWithVat = totalInLocalCurrency + vatAmount

    const totalsHTML = Object.entries(totalsByCurrency).map(([currencyCode, data]) => `
    <div class="total-row currency-subtotal">
      <span>Subtotal (${currencyCode}) / ລວມຍ່ອຍ:</span>
      <span><strong>${formatNumber(data.total)} ${currencyCode}</strong></span>
    </div>
  `).join('')

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Quotation #${header.id}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.3; 
            padding: 15px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
        }
        .content { flex: 1; }
        
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            border-bottom: 2px solid #246ab2; 
            padding-bottom: 10px; 
            margin-bottom: 15px; 
        }
        .company-info h1 { 
            font-size: 18px; 
            margin: 0 0 5px 0; 
            text-transform: uppercase; 
            color: #246ab2;
        }
        .company-info p { 
            margin: 2px 0; 
            font-size: 10px; 
            color: #555; 
        }
        .quotation-title { 
            text-align: center; 
            border: 2px solid #246ab2; 
            padding: 8px 20px; 
            background: #ebf8ff; 
            border-radius: 6px;
        }
        .quotation-title h2 { 
            margin: 0; 
            font-size: 20px; 
            line-height: 1.1; 
            color: #246ab2;
            font-weight: bold;
        }
        .quotation-title span { 
            font-size: 11px; 
            color: #4a5568; 
            font-weight: bold;
        }
        
        .info-box { 
            width: 100%; 
            border: 1px solid #cbd5e0; 
            margin-bottom: 15px; 
            padding: 10px; 
            display: flex; 
            background: #f7fafc;
            border-radius: 6px;
        }
        .info-col { flex: 1; font-size: 10px; }
        .info-col.right { 
            border-left: 1px solid #e2e8f0; 
            padding-left: 15px; 
            flex: 0 0 260px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #2d3748;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            border: 1px solid #cbd5e0;
            border-radius: 6px;
            overflow: hidden;
        }
        th { 
            border: 1px solid #cbd5e0; 
            background-color: #edf2f7; 
            padding: 8px 6px; 
            font-size: 10px; 
            font-weight: bold; 
            text-align: center;
            color: #2d3748;
        }
        td { 
            border: 1px solid #cbd5e0; 
            padding: 8px 6px; 
            font-size: 10px;
            vertical-align: middle;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: space-between; 
            margin-bottom: 20px; 
            align-items: flex-start;
        }
        .terms-box {
            width: 55%;
            border: 1px solid #cbd5e0;
            padding: 12px;
            background: #f7fafc;
            border-radius: 6px;
            font-size: 10px;
        }
        .terms-title {
            font-weight: bold;
            color: #246ab2;
            margin-bottom: 6px;
            font-size: 11px;
        }
        .totals-box { 
            width: 40%; 
            border: 1px solid #cbd5e0; 
            background: #f7fafc;
            border-radius: 6px;
            overflow: hidden;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 6px 10px; 
            border-bottom: 1px solid #edf2f7; 
            font-size: 11px;
        }
        .currency-subtotal {
            background-color: #edf2f7;
            color: #2d3748;
            font-weight: 600;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #ebf8ff; 
            font-weight: bold; 
            border-top: 2px solid #246ab2; 
            font-size: 14px;
            color: #246ab2;
        }
        .discount-row { 
            color: #c53030; 
            background-color: #fff5f5;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-between; 
            text-align: center; 
            margin-bottom: 45px;
        }
        .sign-box { 
            border-top: 1px solid #718096; 
            width: 220px; 
            padding-top: 8px; 
            font-size: 10px; 
            font-weight: bold;
            color: #4a5568;
        }
        
        .currency-note {
            font-size: 9px;
            color: #718096;
            font-style: italic;
            margin-top: 10px;
            padding: 8px;
            background: #f7fafc;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
        }
        
        @media print { 
            body { margin: 0; padding: 10mm; } 
            @page { size: A4; margin: 10mm; } 
            .footer { page-break-inside: avoid; }
            .quotation-title { background: #ebf8ff !important; }
            .totals-box { background: #f7fafc !important; }
            .total-row.final { background: #ebf8ff !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                ${getCompanyLogoUrl(companyData) ? `
                  <img src="${getCompanyLogoUrl(companyData)}" style="max-height: 60px; max-width: 120px; object-fit: contain;" onerror="this.style.display='none';" />
                ` : ''}
                <div class="company-info" style="text-align: left;">
                    <h1>${companyData.name || 'COMPANY NAME'}</h1>
                    <p>${companyData.address || ''}</p>
                    <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                    ${companyData.taxId ? `<p><strong>Tax ID:</strong> ${companyData.taxId}</p>` : ''}
                </div>
            </div>
            <div class="quotation-title">
                <h2>QUOTATION</h2>
                <span>ໃບສະເໜີລາຄາ</span>
            </div>
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ລູກຄ້າ / Customer:</span> <b>${header.client?.company || '-'}</b></div>
                <div><span class="field-label">ຊື່ / Contact:</span> ${header.client?.name || '-'}</div>
                <div><span class="field-label">ເບີໂທ / Telephone:</span> ${header.client?.telephone || '-'}</div>
            </div>
            <div class="info-col right">
                <div><span class="field-label">ເລກທີ / Quotation No:</span> <b>QT-${header.id}</b></div>
                <div><span class="field-label">ວັນທີ / Date:</span> ${formatDate(header.bookingDate)}</div>
                <div><span class="field-label">ຜູ້ສະເໜີ / Prepared By:</span> ${header.user?.cus_name || '-'}</div>
            </div>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th width="5%">#</th>
                    <th width="45%">Description / ລາຍການ</th>
                    <th width="8%">Qty / ຈຳນວນ</th>
                    <th width="10%">Unit / ໜ່ວຍ</th>
                    <th width="14%">Price / ລາຄາ</th>
                    <th width="14%">Discount / ສ່ວນຫຼຸດ</th>
                    <th width="14%">Total / ລວມ</th>
                </tr>
            </thead>
            <tbody>${linesHTML}</tbody>
        </table>
        
        <div class="totals-container">
            <div class="terms-box">
                <div class="terms-title">Terms & Conditions / ເງື່ອນໄຂ:</div>
                <div style="line-height: 1.5;">
                  1. This quotation is valid for 30 days from the date of issue.<br>
                  2. Delivery within 15 days after confirmation of order.<br>
                  3. Prices are exclusive of VAT (10%) / ລາຄານີ້ແມ່ນບໍ່ລວມອາກອນມູນຄ່າເພີ່ມ (10% VAT).<br>
                  4. Please review and sign below to confirm acceptance.<br>
                  ${header.remark ? `<br><strong>Remark / ໝາຍເຫດ:</strong> ${header.remark}` : ''}
                </div>
            </div>
            <div class="totals-box">
                ${totalsHTML}
                ${headerDiscount > 0 ? `
                    <div class="total-row discount-row">
                        <span>Header Discount:</span>
                        <span><strong>-${formatNumber(headerDiscount)} ${localCurrency.code}</strong></span>
                    </div>
                ` : ''}
                <div class="total-row">
                    <span>VAT (10%) / ອາກອນ (10%):</span>
                    <span><strong>${formatNumber(vatAmount)} ${localCurrency.code}</strong></span>
                </div>
                <div class="total-row final">
                    <span>GRAND TOTAL (Incl. VAT):</span>
                    <span><strong>${formatNumber(grandTotalWithVat)} ${localCurrency.code}</strong></span>
                </div>
                ${generateMultiCurrencyTotalsHTML(grandTotalWithVat, localCurrency, currencyList)}
            </div>
        </div>
        
        <div class="currency-note">
            <strong>Note / ໝາຍເຫດ:</strong> ມູນຄ່າແຕ່ລະລາຍການສະແດງເປັນສະກຸນເງິນຕົ້ນຕໍ. ຍອດລວມສຸດທ້າຍຖືກແປງເປັນສະກຸນເງິນທ້ອງຖິ່ນ (${localCurrency.code}).
        </div>
    </div>
    
    <div class="footer">
        <div class="footer-row" style="justify-content: space-around; margin-top: 30px;">
            <div class="sign-box">
              <br><br><br>
              Confirmed and Accepted by Customer<br>
              (ລູກຄ້າຢືນຢັນ ແລະ ຕົກລົງ)
            </div>
            <div class="sign-box">
              <br><br><br>
              Prepared By / Authorized Signature<br>
              (ຜູ້ສະເໜີລາຄາ)
            </div>
        </div>
    </div>
    </body>
    </html>
  `
}

export const generateSchoolInvoiceHTML = (invoice, companyData) => {
    console.log('🏫 GENERATING SCHOOL INVOICE PRINT HTML');
    const baseUrl = getBaseUrl();
    const logoUrl = getCompanyLogoUrl(companyData);

    // Generate lines HTML
    const linesHTML = invoice.lines?.map((line, index) => {
        const desc = line.description || (line.feeItem ? line.feeItem.name : 'School Fee');
        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td>${desc}</td>
        <td style="text-align: right; font-weight: bold;">${formatNumber(line.amount)} LAK</td>
      </tr>
    `;
    }).join('') || '<tr><td colspan="3" style="text-align: center;">No items</td></tr>';

    const studentName = invoice.student ? `${invoice.student.firstName} ${invoice.student.lastName}` : '-';
    const studentId = invoice.student ? invoice.student.studentId : '-';
    const phone = invoice.student ? invoice.student.phoneNumber : '-';

    let className = '-';
    if (invoice.student) {
        if (invoice.student.schoolClass) {
            className = invoice.student.schoolClass.name;
        } else if (invoice.student.grade) {
            className = invoice.student.grade;
        }
        if (invoice.student.schoolRoom) {
            className += ` (${invoice.student.schoolRoom.name})`;
        } else if (invoice.student.room) {
            className += ` (${invoice.student.room})`;
        }
    }

    const statusText = invoice.status === 'PAID' ? 'ຊຳລະແລ້ວ (PAID)' : (invoice.status === 'PARTIAL' ? 'ຊຳລະບາງສ່ວນ (PARTIAL)' : 'ຍັງບໍ່ຊຳລະ (UNPAID)');
    const statusColor = invoice.status === 'PAID' ? '#2e7d32' : (invoice.status === 'PARTIAL' ? '#f57c00' : '#c62828');
    const statusBg = invoice.status === 'PAID' ? '#e8f5e9' : (invoice.status === 'PARTIAL' ? '#fff3e0' : '#ffebee');

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Invoice #${invoice.invoiceNumber}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.3; 
            padding: 15px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
        }
        .content { flex: 1; }
        
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            border-bottom: 3px solid #01532B; 
            padding-bottom: 10px; 
            margin-bottom: 15px; 
        }
        .company-info h1 { 
            font-size: 18px; 
            margin: 0; 
            text-transform: uppercase; 
            color: #01532B;
            font-weight: bold;
        }
        .company-info p { 
            margin: 3px 0; 
            font-size: 10px; 
            color: #555; 
        }
        .invoice-title-box { 
            text-align: right; 
            padding: 8px 15px; 
            background: ${statusBg}; 
            border: 2px solid ${statusColor};
            border-radius: 6px;
        }
        .invoice-title-box h2 { 
            margin: 0; 
            font-size: 16px; 
            line-height: 1.1; 
            color: ${statusColor};
            font-weight: bold;
        }
        .invoice-title-box span { 
            font-size: 10px; 
            color: #555; 
            font-weight: bold;
        }
        
        .info-box { 
            width: 100%; 
            border: 1px solid #ddd; 
            border-radius: 6px;
            margin-bottom: 15px; 
            padding: 10px; 
            display: flex; 
            background: #fafafa;
        }
        .info-box div { margin-bottom: 3px; }
        .info-col { flex: 1; font-size: 11px; line-height: 1.5; }
        .info-col.right { 
            border-left: 1px solid #eee; 
            padding-left: 15px; 
            flex: 0 0 280px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #555;
            display: inline-block;
            width: 110px;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            border: 1px solid #ddd;
            border-radius: 6px;
            overflow: hidden;
        }
        th { 
            border: 1px solid #ddd; 
            background-color: #01532B; 
            color: white;
            padding: 8px 6px; 
            font-size: 10px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #ddd; 
            padding: 8px 6px; 
            font-size: 11px;
            vertical-align: middle;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-bottom: 25px; 
        }
        .totals-box { 
            width: 320px; 
            border: 1px solid #ddd; 
            border-radius: 6px;
            background: #fafafa;
            overflow: hidden;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 7px 10px; 
            border-bottom: 1px solid #eee; 
            font-size: 11px;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #01532B; 
            font-weight: bold; 
            color: white;
            font-size: 13px;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-between; 
            text-align: center; 
            margin-bottom: 45px;
        }
        .sign-box { 
            border-top: 1px solid #333; 
            width: 160px; 
            padding-top: 8px; 
            font-size: 10px; 
            font-weight: bold;
        }
        
        @media print { 
            body { margin: 0; padding: 10mm; } 
            @page { size: A4; margin: 10mm; } 
            .footer { page-break-inside: avoid; }
            th { background-color: #01532B !important; color: white !important; }
            .totals-box { background: #fafafa !important; }
            .total-row.final { background-color: #01532B !important; color: white !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                ${logoUrl ? `
                  <img src="${logoUrl}" style="max-height: 60px; max-width: 120px; object-fit: contain;" onerror="this.style.display='none';" />
                ` : ''}
                <div class="company-info" style="text-align: left;">
                    <h1>${companyData.name || 'SCHOOL NAME'}</h1>
                    <p>${companyData.address || ''}</p>
                    <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                </div>
            </div>
            <div class="invoice-title-box">
                <h2>INVOICE / ໃບບິນເກັບເງິນ</h2>
                <span>${statusText}</span>
            </div>
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ລະຫັດນັກຮຽນ (Student ID):</span> <b>${studentId}</b></div>
                <div><span class="field-label">ຊື່ ແລະ ນາມສະກຸນ (Name):</span> <b>${studentName}</b></div>
                <div><span class="field-label">ຊັ້ນຮຽນ/ຫ້ອງ (Class/Room):</span> ${className}</div>
                <div><span class="field-label">ເບີໂທ (Phone Number):</span> ${phone}</div>
            </div>
            <div class="info-col right">
                <div><span class="field-label">ເລກທີໃບບິນ (Invoice No):</span> <b>${invoice.invoiceNumber}</b></div>
                <div><span class="field-label">ປີການສຶກສາ (Academic Year):</span> ${invoice.academicYear ? invoice.academicYear.name : '-'}</div>
                <div><span class="field-label">ວັນທີສ້າງ (Issue Date):</span> ${formatDate(invoice.createdAt)}</div>
                <div><span class="field-label">ວັນຄົບກຳນົດ (Due Date):</span> ${formatDate(invoice.dueDate)}</div>
            </div>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th width="8%">#</th>
                    <th>ລາຍການຄ່າທໍານຽມ (Fee Items Description)</th>
                    <th width="30%">ຈຳນວນເງິນ (Amount)</th>
                </tr>
            </thead>
            <tbody>${linesHTML}</tbody>
        </table>
        
        <div class="totals-container">
            <div class="totals-box">
                <div class="total-row">
                    <span>ລວມທັງໝົດ (Total Amount):</span>
                    <span><strong>${formatNumber(invoice.totalAmount)} LAK</strong></span>
                </div>
                <div class="total-row" style="color: #2e7d32;">
                    <span>ຊຳລະແລ້ວ (Paid Amount):</span>
                    <span><strong>${formatNumber(invoice.paidAmount)} LAK</strong></span>
                </div>
                <div class="total-row final">
                    <span>ຍອດຄ້າງຊຳລະ (Balance Due):</span>
                    <span><strong>${formatNumber(invoice.balanceAmount)} LAK</strong></span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="footer-row" style="justify-content: space-around; margin-top: 30px;">
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ປົກຄອງ (Parent / Payer)</div>
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ເກັບເງິນ (Collector / Cashier)</div>
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ອຳນວຍການ (Director / Approved)</div>
        </div>
    </div>
    </body>
    </html>
  `;
}

export const generateSchoolShiftReportHTML = (reportData, companyData) => {
    console.log('🏫 GENERATING SCHOOL SHIFT REPORT PRINT HTML');
    const logoUrl = getCompanyLogoUrl(companyData);

    // Generate lines HTML
    const linesHTML = reportData.payments?.map((line, index) => {
        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td>${line.methodName} (${line.methodCode})</td>
        <td style="text-align: center;">${line.transactionCount}</td>
        <td style="text-align: right; font-weight: bold;">${formatNumber(line.totalAmount)} LAK</td>
      </tr>
    `;
    }).join('') || '<tr><td colspan="4" style="text-align: center;">No collections recorded</td></tr>';

    const cashierName = reportData.cashier ? reportData.cashier.name : '-';
    const shift = reportData.shift || {};
    const statusColor = shift.status === 'CLOSED' ? '#c62828' : '#2e7d32';
    const statusBg = shift.status === 'CLOSED' ? '#ffebee' : '#e8f5e9';

    const difference = shift.status === 'CLOSED' ? (shift.closingCash - shift.expectedClosingCash) : 0;
    const diffColor = difference === 0 ? '#2e7d32' : (difference > 0 ? '#1565c0' : '#c62828');

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Shift Report #${shift.id}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.3; 
            padding: 15px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
        }
        .content { flex: 1; }
        
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            border-bottom: 3px solid #01532B; 
            padding-bottom: 10px; 
            margin-bottom: 15px; 
        }
        .company-info h1 { 
            font-size: 18px; 
            margin: 0; 
            text-transform: uppercase; 
            color: #01532B;
            font-weight: bold;
        }
        .company-info p { 
            margin: 3px 0; 
            font-size: 10px; 
            color: #555; 
        }
        .invoice-title-box { 
            text-align: right; 
            padding: 8px 15px; 
            background: ${statusBg}; 
            border: 2px solid ${statusColor};
            border-radius: 6px;
        }
        .invoice-title-box h2 { 
            margin: 0; 
            font-size: 14px; 
            line-height: 1.1; 
            color: ${statusColor};
            font-weight: bold;
        }
        
        .info-box { 
            width: 100%; 
            border: 1px solid #ddd; 
            border-radius: 6px;
            margin-bottom: 15px; 
            padding: 10px; 
            display: flex; 
            background: #fafafa;
        }
        .info-col { flex: 1; font-size: 11px; line-height: 1.5; }
        .info-col.right { 
            border-left: 1px solid #eee; 
            padding-left: 15px; 
            flex: 0 0 280px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #555;
            display: inline-block;
            width: 120px;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            border: 1px solid #ddd;
            border-radius: 6px;
            overflow: hidden;
        }
        th { 
            border: 1px solid #ddd; 
            background-color: #01532B; 
            color: white;
            padding: 8px 6px; 
            font-size: 10px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #ddd; 
            padding: 8px 6px; 
            font-size: 11px;
            vertical-align: middle;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-bottom: 25px; 
        }
        .totals-box { 
            width: 340px; 
            border: 1px solid #ddd; 
            border-radius: 6px;
            background: #fafafa;
            overflow: hidden;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 7px 10px; 
            border-bottom: 1px solid #eee; 
            font-size: 11px;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #01532B; 
            font-weight: bold; 
            color: white;
            font-size: 13px;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-between; 
            text-align: center; 
            margin-bottom: 45px;
        }
        .sign-box { 
            border-top: 1px solid #333; 
            width: 160px; 
            padding-top: 8px; 
            font-size: 10px; 
            font-weight: bold;
        }
        
        @media print { 
            body { margin: 0; padding: 10mm; } 
            @page { size: A4; margin: 10mm; } 
            .footer { page-break-inside: avoid; }
            th { background-color: #01532B !important; color: white !important; }
            .totals-box { background: #fafafa !important; }
            .total-row.final { background-color: #01532B !important; color: white !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                ${logoUrl ? `
                  <img src="${logoUrl}" style="max-height: 60px; max-width: 120px; object-fit: contain;" onerror="this.style.display='none';" />
                ` : ''}
                <div class="company-info" style="text-align: left;">
                    <h1>${companyData.name || 'SCHOOL NAME'}</h1>
                    <p>${companyData.address || ''}</p>
                    <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                </div>
            </div>
            <div class="invoice-title-box">
                <h2>SHIFT SUMMARY REPORT / ລາຍງານປິດກະລາ</h2>
                <span style="font-weight: bold; color: ${statusColor}">Shift: ${shift.status}</span>
            </div>
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ເລກທີ Shift:</span> <b>#${shift.id}</b></div>
                <div><span class="field-label">ພະນັກງານເກັບເງິນ (Cashier):</span> <b>${cashierName}</b></div>
            </div>
            <div class="info-col right">
                <div><span class="field-label">ເວລາເປີດ (Open Time):</span> ${formatDate(shift.openTime)} ${new Date(shift.openTime).toLocaleTimeString()}</div>
                <div><span class="field-label">ເວລາປິດ (Close Time):</span> ${shift.closeTime ? `${formatDate(shift.closeTime)} ${new Date(shift.closeTime).toLocaleTimeString()}` : '-'}</div>
            </div>
        </div>

        <h3 class="text-subtitle-1 font-weight-bold primary--text mb-2">ສະຫຼຸບຍອດເງິນສົດ (Cash Drawer Summary)</h3>
        <table style="margin-bottom: 20px;">
            <thead>
                <tr>
                    <th>ເງິນສົດເລີ່ມຕົ້ນ (Opening Cash)</th>
                    <th>ຍອດຮັບເງິນສົດ (Cash Collected)</th>
                    <th>ຍອດເງິນສົດທີ່ຄວນມີ (Expected Closing)</th>
                    <th>ຍອດເງິນສົດປິດຕົວຈິງ (Actual Closing)</th>
                    <th>ສ່ວນຕ່າງ (Discrepancy)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align: center; font-weight: bold;">${formatNumber(shift.openingCash)} LAK</td>
                    <td style="text-align: center; font-weight: bold;">${formatNumber(reportData.payments?.find(p => p.methodCode.toUpperCase() === 'CASH')?.totalAmount || 0)} LAK</td>
                    <td style="text-align: center; font-weight: bold; color: #01532B;">${formatNumber(shift.expectedClosingCash)} LAK</td>
                    <td style="text-align: center; font-weight: bold; color: #1565c0;">${shift.status === 'CLOSED' ? `${formatNumber(shift.closingCash)} LAK` : 'N/A'}</td>
                    <td style="text-align: center; font-weight: bold; color: ${diffColor};">${shift.status === 'CLOSED' ? `${formatNumber(difference)} LAK` : 'N/A'}</td>
                </tr>
            </tbody>
        </table>
        
        <h3 class="text-subtitle-1 font-weight-bold primary--text mb-2">ລາຍການຮັບຊຳລະແຍກຕາມຊ່ອງທາງ (Collection Details by Payment Type)</h3>
        <table>
            <thead>
                <tr>
                    <th width="8%">#</th>
                    <th>ຊ່ອງທາງການຊຳລະ (Payment Method)</th>
                    <th width="20%">ຈຳນວນທຸລະກຳ (Count)</th>
                    <th width="30%">ຈຳນວນເງິນລວມ (Total Collected)</th>
                </tr>
            </thead>
            <tbody>${linesHTML}</tbody>
        </table>
        
        <div class="totals-container">
            <div class="totals-box">
                <div class="total-row final">
                    <span>ຍອດເກັບລວມທັງໝົດ (Total Collections):</span>
                    <span><strong>${formatNumber(reportData.totalCollected)} LAK</strong></span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="footer-row" style="justify-content: space-around; margin-top: 30px;">
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ພະນັກງານເກັບເງິນ (Cashier)</div>
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ກວດສອບ (Audited By)</div>
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ອຳນວຍການ (Director / Approved)</div>
        </div>
    </div>
    </body>
    </html>
  `;
}

export const generateClassRoomSummaryReportHTML = (summaryData, companyData) => {
    console.log('🏫 GENERATING CLASS ROOM SUMMARY REPORT PRINT HTML');
    const logoUrl = getCompanyLogoUrl(companyData);

    // Calculate global totals
    let totalInvoices = 0;
    let totalPaidInvoices = 0;
    let totalPendingInvoices = 0;
    let totalAmount = 0;
    let totalPaidAmount = 0;
    let totalBalanceAmount = 0;

    // Generate lines HTML
    const linesHTML = summaryData?.map((line, index) => {
        totalInvoices += line.totalInvoices || 0;
        totalPaidInvoices += line.paidCount || 0;
        totalPendingInvoices += line.pendingCount || 0;
        totalAmount += line.totalAmount || 0;
        totalPaidAmount += line.paidAmount || 0;
        totalBalanceAmount += line.balanceAmount || 0;

        const completion = line.totalAmount ? Math.round((line.paidAmount / line.totalAmount) * 100) : 0;

        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td style="font-weight: bold;">${line.className}</td>
        <td style="text-align: center; font-weight: bold; color: #1565c0;">${line.roomName}</td>
        <td style="text-align: center;">${line.totalInvoices}</td>
        <td style="text-align: center; color: #2e7d32; font-weight: bold;">${line.paidCount}</td>
        <td style="text-align: center; color: #c62828; font-weight: bold;">${line.pendingCount}</td>
        <td style="text-align: right;">${formatNumber(line.totalAmount)} LAK</td>
        <td style="text-align: right; color: #2e7d32; font-weight: bold;">${formatNumber(line.paidAmount)} LAK</td>
        <td style="text-align: right; color: #c62828; font-weight: bold;">${formatNumber(line.balanceAmount)} LAK</td>
        <td style="text-align: center; font-weight: bold;">${completion}%</td>
      </tr>
    `;
    }).join('') || '<tr><td colspan="10" style="text-align: center;">No summaries recorded</td></tr>';

    const globalCompletion = totalAmount ? Math.round((totalPaidAmount / totalAmount) * 100) : 0;

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Class & Room Invoice Summary Report</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.3; 
            padding: 15px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
        }
        .content { flex: 1; }
        
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            border-bottom: 3px solid #01532B; 
            padding-bottom: 10px; 
            margin-bottom: 15px; 
        }
        .company-info h1 { 
            font-size: 18px; 
            margin: 0; 
            text-transform: uppercase; 
            color: #01532B;
            font-weight: bold;
        }
        .company-info p { 
            margin: 3px 0; 
            font-size: 10px; 
            color: #555; 
        }
        .invoice-title-box { 
            text-align: right; 
            padding: 8px 15px; 
            background: #e8f5e9; 
            border: 2px solid #01532B;
            border-radius: 6px;
        }
        .invoice-title-box h2 { 
            margin: 0; 
            font-size: 14px; 
            line-height: 1.1; 
            color: #01532B;
            font-weight: bold;
        }
        
        .info-box { 
            width: 100%; 
            border: 1px solid #ddd; 
            border-radius: 6px;
            margin-bottom: 15px; 
            padding: 10px; 
            display: flex; 
            background: #fafafa;
        }
        .info-col { flex: 1; font-size: 11px; line-height: 1.5; }
        .info-col.right { 
            border-left: 1px solid #eee; 
            padding-left: 15px; 
            flex: 0 0 280px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #555;
            display: inline-block;
            width: 120px;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            border: 1px solid #ddd;
            border-radius: 6px;
            overflow: hidden;
        }
        th { 
            border: 1px solid #ddd; 
            background-color: #01532B; 
            color: white;
            padding: 8px 6px; 
            font-size: 10px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #ddd; 
            padding: 8px 6px; 
            font-size: 11px;
            vertical-align: middle;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-bottom: 25px; 
        }
        .totals-box { 
            width: 340px; 
            border: 1px solid #ddd; 
            border-radius: 6px;
            background: #fafafa;
            overflow: hidden;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 7px 10px; 
            border-bottom: 1px solid #eee; 
            font-size: 11px;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #01532B; 
            font-weight: bold; 
            color: white;
            font-size: 13px;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-between; 
            text-align: center; 
            margin-bottom: 45px;
        }
        .sign-box { 
            border-top: 1px solid #333; 
            width: 160px; 
            padding-top: 8px; 
            font-size: 10px; 
            font-weight: bold;
        }
        
        @media print { 
            body { margin: 0; padding: 10mm; } 
            @page { size: A4 landscape; margin: 10mm; } 
            .footer { page-break-inside: avoid; }
            th { background-color: #01532B !important; color: white !important; }
            .totals-box { background: #fafafa !important; }
            .total-row.final { background-color: #01532B !important; color: white !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                ${logoUrl ? `
                  <img src="${logoUrl}" style="max-height: 60px; max-width: 120px; object-fit: contain;" onerror="this.style.display='none';" />
                ` : ''}
                <div class="company-info" style="text-align: left;">
                    <h1>${companyData.name || 'SCHOOL NAME'}</h1>
                    <p>${companyData.address || ''}</p>
                    <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                </div>
            </div>
            <div class="invoice-title-box">
                <h2>CLASS & ROOM INVOICE SUMMARY REPORT</h2>
                <span>ລາຍງານສະຫຼຸບຍອດເກັບເງິນຕາມຊັ້ນ ແລະ ຫ້ອງຮຽນ</span>
            </div>
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ປະເພດລາຍງານ:</span> <b>ສະຫຼຸບລາຍຮັບແຍກຕາມຫ້ອງຮຽນ (Class & Room Collection Summary)</b></div>
            </div>
            <div class="info-col right">
                <div><span class="field-label">ວັນທີພິມ (Print Date):</span> ${formatDate(new Date().toISOString())} ${new Date().toLocaleTimeString()}</div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th width="5%">#</th>
                    <th>ຊັ້ນຮຽນ (Class)</th>
                    <th>ຫ້ອງຮຽນ (Room)</th>
                    <th width="10%">ໃບບິນທັງໝົດ (Total Invoices)</th>
                    <th width="10%">ຊຳລະແລ້ວ (Paid)</th>
                    <th width="10%">ຍັງຄ້າງຊຳລະ (Pending)</th>
                    <th>ຍອດລວມທັງໝົດ (Total Bill)</th>
                    <th>ຊຳລະແລ້ວ (Total Paid)</th>
                    <th>ຍອດຄ້າງຊຳລະ (Total Pending)</th>
                    <th width="8%">% ສຳເລັດ</th>
                </tr>
            </thead>
            <tbody>
                ${linesHTML}
                <tr style="background-color: #f5f5f5; font-weight: bold; border-top: 2px solid #01532B;">
                    <td colspan="3" style="text-align: center;">ລວມທັງໝົດ (GRAND TOTALS):</td>
                    <td style="text-align: center;">${totalInvoices}</td>
                    <td style="text-align: center; color: #2e7d32;">${totalPaidInvoices}</td>
                    <td style="text-align: center; color: #c62828;">${totalPendingInvoices}</td>
                    <td style="text-align: right;">${formatNumber(totalAmount)} LAK</td>
                    <td style="text-align: right; color: #2e7d32;">${formatNumber(totalPaidAmount)} LAK</td>
                    <td style="text-align: right; color: #c62828;">${formatNumber(totalBalanceAmount)} LAK</td>
                    <td style="text-align: center;">${globalCompletion}%</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="footer">
        <div class="footer-row" style="justify-content: space-around; margin-top: 30px;">
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ຈັດທຳລາຍງານ (Prepared By)</div>
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ກວດສອບ (Audited By)</div>
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ອຳນວຍການ (Director / Approved)</div>
        </div>
    </div>
    </body>
    </html>
  `;
}

export const generateFeeItemSummaryReportHTML = (summaryData, companyData) => {
    console.log('🏫 GENERATING FEE ITEM SUMMARY REPORT PRINT HTML');
    const logoUrl = getCompanyLogoUrl(companyData);

    // Calculate global totals
    let totalBilled = 0;
    let totalPaid = 0;
    let totalPending = 0;
    let totalTransactions = 0;

    // Generate lines HTML
    const linesHTML = summaryData?.map((line, index) => {
        totalTransactions += line.lineCount || 0;
        totalBilled += line.totalBilled || 0;
        totalPaid += line.totalPaid || 0;
        totalPending += line.totalPending || 0;

        const completion = line.totalBilled ? Math.round((line.totalPaid / line.totalBilled) * 100) : 0;

        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td style="font-weight: bold;">${line.feeItemName}</td>
        <td style="text-align: center;">${line.lineCount}</td>
        <td style="text-align: right; font-weight: bold;">${formatNumber(line.totalBilled)} LAK</td>
        <td style="text-align: right; color: #2e7d32; font-weight: bold;">${formatNumber(line.totalPaid)} LAK</td>
        <td style="text-align: right; color: #c62828; font-weight: bold;">${formatNumber(line.totalPending)} LAK</td>
        <td style="text-align: center; font-weight: bold;">${completion}%</td>
      </tr>
    `;
    }).join('') || '<tr><td colspan="7" style="text-align: center;">No summaries recorded</td></tr>';

    const globalCompletion = totalBilled ? Math.round((totalPaid / totalBilled) * 100) : 0;

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Fee Item Invoice Summary Report</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.3; 
            padding: 15px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
        }
        .content { flex: 1; }
        
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            border-bottom: 3px solid #01532B; 
            padding-bottom: 10px; 
            margin-bottom: 15px; 
        }
        .company-info h1 { 
            font-size: 18px; 
            margin: 0; 
            text-transform: uppercase; 
            color: #01532B;
            font-weight: bold;
        }
        .company-info p { 
            margin: 3px 0; 
            font-size: 10px; 
            color: #555; 
        }
        .invoice-title-box { 
            text-align: right; 
            padding: 8px 15px; 
            background: #e8f5e9; 
            border: 2px solid #01532B;
            border-radius: 6px;
        }
        .invoice-title-box h2 { 
            margin: 0; 
            font-size: 14px; 
            line-height: 1.1; 
            color: #01532B;
            font-weight: bold;
        }
        
        .info-box { 
            width: 100%; 
            border: 1px solid #ddd; 
            border-radius: 6px;
            margin-bottom: 15px; 
            padding: 10px; 
            display: flex; 
            background: #fafafa;
        }
        .info-col { flex: 1; font-size: 11px; line-height: 1.5; }
        .info-col.right { 
            border-left: 1px solid #eee; 
            padding-left: 15px; 
            flex: 0 0 280px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #555;
            display: inline-block;
            width: 120px;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            border: 1px solid #ddd;
            border-radius: 6px;
            overflow: hidden;
        }
        th { 
            border: 1px solid #ddd; 
            background-color: #01532B; 
            color: white;
            padding: 8px 6px; 
            font-size: 10px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #ddd; 
            padding: 8px 6px; 
            font-size: 11px;
            vertical-align: middle;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-bottom: 25px; 
        }
        .totals-box { 
            width: 340px; 
            border: 1px solid #ddd; 
            border-radius: 6px;
            background: #fafafa;
            overflow: hidden;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 7px 10px; 
            border-bottom: 1px solid #eee; 
            font-size: 11px;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #01532B; 
            font-weight: bold; 
            color: white;
            font-size: 13px;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-between; 
            text-align: center; 
            margin-bottom: 45px;
        }
        .sign-box { 
            border-top: 1px solid #333; 
            width: 160px; 
            padding-top: 8px; 
            font-size: 10px; 
            font-weight: bold;
        }
        
        @media print { 
            body { margin: 0; padding: 10mm; } 
            @page { size: A4; margin: 10mm; } 
            .footer { page-break-inside: avoid; }
            th { background-color: #01532B !important; color: white !important; }
            .totals-box { background: #fafafa !important; }
            .total-row.final { background-color: #01532B !important; color: white !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                ${logoUrl ? `
                  <img src="${logoUrl}" style="max-height: 60px; max-width: 120px; object-fit: contain;" onerror="this.style.display='none';" />
                ` : ''}
                <div class="company-info" style="text-align: left;">
                    <h1>${companyData.name || 'SCHOOL NAME'}</h1>
                    <p>${companyData.address || ''}</p>
                    <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                </div>
            </div>
            <div class="invoice-title-box">
                <h2>FEE ITEM INVOICE SUMMARY REPORT</h2>
                <span>ລາຍງານສະຫຼຸບຍອດເກັບເງິນຕາມປະເພດຄ່າທໍານຽມ</span>
            </div>
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ປະເພດລາຍງານ:</span> <b>ສະຫຼຸບລາຍຮັບແຍກຕາມປະເພດຄ່າທໍານຽມ (Fee Item Invoice Collection Summary)</b></div>
            </div>
            <div class="info-col right">
                <div><span class="field-label">ວັນທີພິມ (Print Date):</span> ${formatDate(new Date().toISOString())} ${new Date().toLocaleTimeString()}</div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th width="5%">#</th>
                    <th>ປະເພດຄ່າທໍານຽມ (Fee Item Name)</th>
                    <th width="15%">ຈຳນວນທຸລະກຳ (Count)</th>
                    <th>ຍອດລວມທັງໝົດ (Total Invoiced)</th>
                    <th>ຊຳລະແລ້ວ (Total Paid)</th>
                    <th>ຍອດຄ້າງຊຳລະ (Total Pending)</th>
                    <th width="10%">% ສຳເລັດ</th>
                </tr>
            </thead>
            <tbody>
                ${linesHTML}
                <tr style="background-color: #f5f5f5; font-weight: bold; border-top: 2px solid #01532B;">
                    <td colspan="2" style="text-align: center;">ລວມທັງໝົດ (GRAND TOTALS):</td>
                    <td style="text-align: center;">${totalTransactions}</td>
                    <td style="text-align: right;">${formatNumber(totalBilled)} LAK</td>
                    <td style="text-align: right; color: #2e7d32;">${formatNumber(totalPaid)} LAK</td>
                    <td style="text-align: right; color: #c62828;">${formatNumber(totalPending)} LAK</td>
                    <td style="text-align: center;">${globalCompletion}%</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="footer">
        <div class="footer-row" style="justify-content: space-around; margin-top: 30px;">
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ຈັດທຳລາຍງານ (Prepared By)</div>
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ກວດສອບ (Audited By)</div>
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ອຳນວຍການ (Director / Approved)</div>
        </div>
    </div>
    </body>
    </html>
  `;
}

export const generateOutstandingBalancesReportHTML = (reportData, companyData, filters = {}) => {
    console.log('🏫 GENERATING OUTSTANDING BALANCES REPORT PRINT HTML');
    const logoUrl = getCompanyLogoUrl(companyData);

    // Generate lines HTML
    const linesHTML = reportData?.map((line, index) => {
        const studentName = line.student ? line.student.name : '-';
        const studentId = line.student ? line.student.studentId : '-';
        const parentContact = line.student && line.student.parentName
            ? `${line.student.parentName} (${line.student.parentPhone})`
            : (line.parentPhone ? `${line.parentName} (${line.parentPhone})` : '-');

        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td>
          <b>${studentName}</b>
          <div style="font-size: 9px; color: #666;">ID: ${studentId}</div>
        </td>
        <td>${line.invoiceNumber}</td>
        <td>${line.feeItemDetail || 'All Items / ຍອດລວມບິນ'}</td>
        <td>${parentContact}</td>
        <td style="text-align: center;">${formatDate(line.dueDate)}</td>
        <td style="text-align: right; font-weight: bold; color: #c62828;">${formatNumber(line.balanceAmount)} LAK</td>
      </tr>
    `;
    }).join('') || '<tr><td colspan="7" style="text-align: center;">No outstanding balances</td></tr>';

    const totalOutstanding = reportData?.reduce((sum, item) => sum + Number(item.balanceAmount || 0), 0) || 0;

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Outstanding Balances Report</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.3; 
            padding: 15px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
        }
        .content { flex: 1; }
        
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            border-bottom: 3px solid #01532B; 
            padding-bottom: 10px; 
            margin-bottom: 15px; 
        }
        .company-info h1 { 
            font-size: 18px; 
            margin: 0; 
            text-transform: uppercase; 
            color: #01532B;
            font-weight: bold;
        }
        .company-info p { 
            margin: 3px 0; 
            font-size: 10px; 
            color: #555; 
        }
        .invoice-title-box { 
            text-align: right; 
            padding: 8px 15px; 
            background: #ffebee; 
            border: 2px solid #c62828;
            border-radius: 6px;
        }
        .invoice-title-box h2 { 
            margin: 0; 
            font-size: 14px; 
            line-height: 1.1; 
            color: #c62828;
            font-weight: bold;
        }
        
        .info-box { 
            width: 100%; 
            border: 1px solid #ddd; 
            border-radius: 6px;
            margin-bottom: 15px; 
            padding: 10px; 
            display: flex; 
            background: #fafafa;
        }
        .info-col { flex: 1; font-size: 11px; line-height: 1.5; }
        .info-col.right { 
            border-left: 1px solid #eee; 
            padding-left: 15px; 
            flex: 0 0 280px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #555;
            display: inline-block;
            width: 120px;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            border: 1px solid #ddd;
            border-radius: 6px;
            overflow: hidden;
        }
        th { 
            border: 1px solid #ddd; 
            background-color: #01532B; 
            color: white;
            padding: 8px 6px; 
            font-size: 10px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #ddd; 
            padding: 8px 6px; 
            font-size: 11px;
            vertical-align: middle;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-bottom: 25px; 
        }
        .totals-box { 
            width: 340px; 
            border: 1px solid #ddd; 
            border-radius: 6px;
            background: #fafafa;
            overflow: hidden;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 7px 10px; 
            border-bottom: 1px solid #eee; 
            font-size: 11px;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #c62828; 
            font-weight: bold; 
            color: white;
            font-size: 13px;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-between; 
            text-align: center; 
            margin-bottom: 45px;
        }
        .sign-box { 
            border-top: 1px solid #333; 
            width: 160px; 
            padding-top: 8px; 
            font-size: 10px; 
            font-weight: bold;
        }
        
        @media print { 
            body { margin: 0; padding: 10mm; } 
            @page { size: A4; margin: 10mm; } 
            .footer { page-break-inside: avoid; }
            th { background-color: #01532B !important; color: white !important; }
            .totals-box { background: #fafafa !important; }
            .total-row.final { background-color: #c62828 !important; color: white !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                ${logoUrl ? `
                  <img src="${logoUrl}" style="max-height: 60px; max-width: 120px; object-fit: contain;" onerror="this.style.display='none';" />
                ` : ''}
                <div class="company-info" style="text-align: left;">
                    <h1>${companyData.name || 'SCHOOL NAME'}</h1>
                    <p>${companyData.address || ''}</p>
                    <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                </div>
            </div>
            <div class="invoice-title-box">
                <h2>OUTSTANDING BALANCES REPORT</h2>
                <span>ລາຍງານນັກຮຽນຄ້າງຊຳລະຄ່າຮຽນ</span>
            </div>
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ປະເພດລາຍງານ:</span> <b>ລາຍຊື່ນັກຮຽນຄ້າງຊຳລະ (Outstanding Invoice Balances List)</b></div>
                ${filters.className ? `<div><span class="field-label">ຊັ້ນຮຽນ (Class):</span> ${filters.className}</div>` : ''}
                ${filters.feeItemName ? `<div><span class="field-label">ປະເພດຄ່າທໍານຽມ:</span> ${filters.feeItemName}</div>` : ''}
            </div>
            <div class="info-col right">
                <div><span class="field-label">ວັນທີພິມ (Print Date):</span> ${formatDate(new Date().toISOString())} ${new Date().toLocaleTimeString()}</div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th width="5%">#</th>
                    <th>ນັກຮຽນ (Student)</th>
                    <th>ເລກທີໃບບິນ (Invoice No)</th>
                    <th>ລາຍການຄ່າຮຽນ (Fee Item)</th>
                    <th>ຜູ້ປົກຄອງ (Parent Contact)</th>
                    <th width="15%">ວັນຄົບກຳນົດ (Due Date)</th>
                    <th>ຍອດຄ້າງຊຳລະ (Outstanding Amount)</th>
                </tr>
            </thead>
            <tbody>
                ${linesHTML}
            </tbody>
        </table>
        
        <div class="totals-container">
            <div class="totals-box">
                <div class="total-row final">
                    <span>ຍອດຄ້າງຊຳລະລວມ (Total Outstanding):</span>
                    <span><strong>${formatNumber(totalOutstanding)} LAK</strong></span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="footer-row" style="justify-content: space-around; margin-top: 30px;">
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ຈັດທຳລາຍງານ (Prepared By)</div>
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ກວດສອບ (Audited By)</div>
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ອຳນວຍການ (Director / Approved)</div>
        </div>
    </div>
    </body>
    </html>
  `;
}

export const generateReceiptSummaryReportHTML = (headers, companyData, currencyList = [], filters = {}) => {
    const logoUrl = getCompanyLogoUrl(companyData)
    const localCurrency = currencyList.find(c => c.isLocalCCY === true || c.isLocalCCY === 1) || { code: 'LAK', rate: 1 }

    let totalSalesLocal = 0
    let totalDiscountLocal = 0
    let totalCostLocal = 0
    let totalGrossProfitLocal = 0

    const linesHTML = headers.map((header, index) => {
        const headerCcy = currencyList.find(c => Number(c.id) === Number(header.currencyId)) || { code: 'LAK', rate: header.exchangeRate || 1, isLocalCCY: false }
        const isHeaderLocal = headerCcy?.isLocalCCY === true || headerCcy?.isLocalCCY === 1
        const headerRate = isHeaderLocal ? 1 : header.exchangeRate || 1

        let saleLineAmountLocalTotal = 0
        let totalSaleOriginal = 0
        let saleCostLocal = 0

        header.lines?.forEach(line => {
            const lineCurrency = currencyList.find(c => Number(c.id) === Number(line.currencyId)) || headerCcy
            const lineRate = line.exchangeRate || headerRate
            const saleLineAmountLocal = convertToLocalCurrency(line.total || 0, lineCurrency, localCurrency)
            saleLineAmountLocalTotal += saleLineAmountLocal
            totalSaleOriginal += (line.total || 0)

            let lineCostLAK = 0
            if (line.cards && line.cards.length > 0) {
                line.cards.forEach(card => {
                    let cardCostLAK = 0
                    const cardRate = card.exchangeRate || lineRate
                    if (card.costLCY !== undefined && card.costLCY !== null) {
                        cardCostLAK = parseFloat(card.costLCY)
                    } else {
                        cardCostLAK = parseFloat(card.cost || 0) * cardRate
                    }

                    // Smart Currency Correction
                    const sellingPriceLAK = parseFloat(line.product?.pro_price || 0) * lineRate
                    if (sellingPriceLAK > 0 && cardCostLAK > sellingPriceLAK * 1.5 && cardRate > 10) {
                        cardCostLAK = parseFloat(card.cost || 0)
                    }

                    lineCostLAK += cardCostLAK
                })
            } else {
                // Fallback cost calculation
                const unitCost = parseFloat(line.product?.cost_price || 0)
                const qty = parseFloat(line.quantity || 0)
                lineCostLAK += qty * unitCost * lineRate
            }

            const lakCurrency = currencyList.find(c => c.code?.toUpperCase() === 'LAK') || { code: 'LAK', rate: 1, isLocalCCY: localCurrency.code === 'LAK' }
            const lineCostLocal = convertToLocalCurrency(lineCostLAK, lakCurrency, localCurrency)
            saleCostLocal += lineCostLocal
        })

        const discountLocal = convertToLocalCurrency(header.discount || 0, headerCcy, localCurrency)
        const netSaleLocal = saleLineAmountLocalTotal - discountLocal
        const grossProfitLocal = netSaleLocal - saleCostLocal

        totalSalesLocal += netSaleLocal
        totalDiscountLocal += discountLocal
        totalCostLocal += saleCostLocal
        totalGrossProfitLocal += grossProfitLocal

        // Get payment type / status description
        let paymentCode = 'N/A'
        if (header.payments && Array.isArray(header.payments) && header.payments.length > 1) {
            paymentCode = 'ຫຼາຍວິທີ (' + header.payments.length + ')'
        } else {
            paymentCode = header.payment?.payment_name || header.payments?.[0]?.paymentMethod?.payment_name || header.payment?.payment_code || header.payments?.[0]?.paymentMethod?.payment_code || 'N/A'
        }

        const customerName = header.client?.name || header.client?.company || 'Walk-in Customer'

        return `
      <tr>
        <td style="text-align: center;">${header.id}</td>
        <td style="text-align: center;">${paymentCode}</td>
        <td>${customerName}</td>
        <td style="text-align: center;">${formatDate(header.bookingDate)}</td>
        <td style="text-align: right;">${formatNumber(saleLineAmountLocalTotal)} ${localCurrency.code}</td>
        <td style="text-align: right; color: #c62828;">${formatNumber(discountLocal)} ${localCurrency.code}</td>
        <td style="text-align: right; font-weight: bold;">
          ${formatNumber(netSaleLocal)} ${localCurrency.code}
          ${!isHeaderLocal ? `<br><small style="color: #666; font-weight: normal;">(${formatNumber(totalSaleOriginal - (header.discount || 0))} ${headerCcy?.code || ''})</small>` : ''}
        </td>
        <td style="text-align: right; font-weight: bold; color: ${grossProfitLocal >= 0 ? '#2e7d32' : '#c62828'};">
          ${formatNumber(grossProfitLocal)} ${localCurrency.code}
        </td>
      </tr>
    `
    }).join('') || '<tr><td colspan="8" style="text-align: center; padding: 20px;">ບໍ່ມີຂໍ້ມູນ (No Data)</td></tr>'

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Receipt Summary Report</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.2; 
            padding: 15px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
        }
        .content { flex: 1; }
        
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            border-bottom: 2px solid #01532B; 
            padding-bottom: 10px; 
            margin-bottom: 15px; 
        }
        .company-info h1 { 
            font-size: 16px; 
            margin: 0; 
            text-transform: uppercase; 
            color: #01532B;
        }
        .company-info p { 
            margin: 2px 0; 
            font-size: 10px; 
            color: #444; 
        }
        .report-title-box { 
            text-align: right; 
        }
        .report-title-box h2 { 
            margin: 0; 
            font-size: 18px; 
            color: #01532B;
            font-weight: bold;
        }
        .report-title-box span { 
            font-size: 11px; 
            color: #666; 
            display: block;
        }
        
        .info-box { 
            width: 100%; 
            border: 1px solid #ccc; 
            margin-bottom: 15px; 
            padding: 10px; 
            display: flex; 
            background: #fdfdfd;
            border-radius: 4px;
        }
        .info-col { flex: 1; font-size: 10px; }
        .info-col.right { 
            border-left: 1px solid #eee; 
            padding-left: 15px; 
            flex: 0 0 250px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #555;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            border: 1px solid #ccc;
        }
        th { 
            border: 1px solid #ccc; 
            background-color: #01532B; 
            color: white;
            padding: 8px 6px; 
            font-size: 10px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #eee; 
            padding: 8px 6px; 
            font-size: 11px;
            vertical-align: middle;
        }
        tr:nth-child(even) {
            background-color: #fcfcfc;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-top: 10px;
            margin-bottom: 25px; 
        }
        .totals-box { 
            width: 380px; 
            border: 1px solid #ccc; 
            background: #fdfdfd;
            border-radius: 4px;
            overflow: hidden;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 7px 10px; 
            border-bottom: 1px solid #eee; 
            font-size: 11px;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #01532B; 
            font-weight: bold; 
            color: white;
            font-size: 12px;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-around; 
            text-align: center; 
            margin-bottom: 35px;
        }
        .sign-box { 
            border-top: 1px solid #ccc; 
            width: 180px; 
            padding-top: 8px; 
            font-size: 10px; 
            font-weight: bold;
        }
        
        @media print { 
            body { margin: 0; padding: 10mm; } 
            @page { size: A4; margin: 10mm; } 
            .footer { page-break-inside: avoid; }
            th { background-color: #01532B !important; color: white !important; }
            .totals-box { background: #fdfdfd !important; }
            .total-row.final { background-color: #01532B !important; color: white !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                ${logoUrl ? `
                  <img src="${logoUrl}" style="max-height: 55px; max-width: 110px; object-fit: contain;" onerror="this.style.display='none';" />
                ` : ''}
                <div class="company-info" style="text-align: left;">
                    <h1>${companyData.name || 'COMPANY NAME'}</h1>
                    <p>${companyData.address || ''}</p>
                    <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                </div>
            </div>
            <div class="report-title-box">
                <h2>RECEIPT SUMMARY REPORT</h2>
                <span>ລາຍງານສະຫຼຸບບິນຂາຍ</span>
            </div>
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ລາຍງານ:</span> <b>ສະຫຼຸບບິນຂາຍແບບລະອຽດ (Detailed Receipt Summary List)</b></div>
                ${filters.fromDate ? `<div><span class="field-label">ເລີ່ມວັນທີ (From):</span> ${formatDate(filters.fromDate)}</div>` : ''}
                ${filters.toDate ? `<div><span class="field-label">ຫາວັນທີ (To):</span> ${formatDate(filters.toDate)}</div>` : ''}
                ${filters.terminalName ? `<div><span class="field-label">ຮ້ານ/ຈຸດຂາຍ (POS Terminal):</span> ${filters.terminalName}</div>` : ''}
            </div>
            <div class="info-col right">
                <div><span class="field-label">ວັນທີພິມ (Print Date):</span> ${formatDate(new Date().toISOString())} ${new Date().toLocaleTimeString()}</div>
                <div><span class="field-label">ຜູ້ດຳເນີນການ (User):</span> ${filters.userName || '-'}</div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th width="10%">ເລກບິນ<br>(Sale ID)</th>
                    <th width="15%">ຊ່ອງທາງຊຳລະ<br>(Payment Type)</th>
                    <th>ລູກຄ້າ<br>(Customer Name)</th>
                    <th width="12%">ວັນທີຂາຍ<br>(Booking Date)</th>
                    <th width="15%">ຍອດລວມ<br>(Subtotal)</th>
                    <th width="10%">ສ່ວນຫຼຸດ<br>(Discount)</th>
                    <th width="15%">ຍອດຂາຍສຸດທິ<br>(Net Sale)</th>
                    <th width="15%">ກຳໄລຂັ້ນຕົ້ນ<br>(Gross Profit)</th>
                </tr>
            </thead>
            <tbody>
                ${linesHTML}
            </tbody>
        </table>
        
        <div class="totals-container">
            <div class="totals-box">
                <div class="total-row">
                    <span>ຍອດຂາຍລວມ (Gross Sales):</span>
                    <span><strong>${formatNumber(totalSalesLocal + totalDiscountLocal)} ${localCurrency.code}</strong></span>
                </div>
                <div class="total-row">
                    <span>ສ່ວນຫຼຸດລວມ (Total Discount):</span>
                    <span style="color: #c62828;"><strong>${formatNumber(totalDiscountLocal)} ${localCurrency.code}</strong></span>
                </div>
                <div class="total-row">
                    <span>ຍອດຂາຍສຸດທິ (Net Revenue):</span>
                    <span><strong>${formatNumber(totalSalesLocal)} ${localCurrency.code}</strong></span>
                </div>
                <div class="total-row">
                    <span>ຕົ້ນທຶນລວມ (Total Cost of Goods Sold):</span>
                    <span><strong>${formatNumber(totalCostLocal)} ${localCurrency.code}</strong></span>
                </div>
                <div class="total-row final">
                    <span>ກຳໄລຂັ້ນຕົ້ນລວມ (Total Gross Profit):</span>
                    <span><strong>${formatNumber(totalGrossProfitLocal)} ${localCurrency.code}</strong></span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="footer-row">
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ຈັດທຳລາຍງານ (Prepared By)</div>
            <div class="sign-box" style="border-top: none;"><br><br>...........................................<br>ຜູ້ຈັດການ (Manager / Approved)</div>
        </div>
    </div>
    </body>
    </html>
  `;
}

export const generateTransferSummaryReportHTML = (transfers, companyData, currencyList = [], filters = {}) => {
    const logoUrl = getCompanyLogoUrl(companyData)
    const localCurrency = currencyList.find(c => c.isLocalCCY === true || c.isLocalCCY === 1) || { code: 'LAK', rate: 1 }
    const lakCurrency = currencyList.find(c => c.code?.toUpperCase() === 'LAK') || { code: 'LAK', rate: 1, isLocalCCY: localCurrency.code === 'LAK' }

    let totalCostLocal = 0
    const linesHTML = transfers.map((transfer, index) => {
        const transferTotalLAK = transfer.lines
            ? transfer.lines
                .filter(line => line.isActive !== false)
                .reduce((sum, line) => sum + (parseFloat(String(line.total || 0).replace(/,/g, '')) || 0), 0)
            : 0
        const transferTotalLocal = convertToLocalCurrency(transferTotalLAK, lakCurrency, localCurrency)
        totalCostLocal += transferTotalLocal

        const bookingDate = transfer.bookingDate ? transfer.bookingDate.split('T')[0] : '-'
        const fromLoc = transfer.srcLocation?.name || '-'
        const toLoc = transfer.desLocation?.name || '-'
        const user = transfer.user?.cus_name || '-'
        const remark = transfer.remark || '-'

        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td style="text-align: center;">${bookingDate}</td>
        <td style="text-align: center;">${transfer.id}</td>
        <td>${fromLoc}</td>
        <td>${toLoc}</td>
        <td style="text-align: right; font-weight: bold;">${formatNumber(transferTotalLocal)} ${localCurrency.code}</td>
        <td style="text-align: center;">${user}</td>
        <td>${remark}</td>
      </tr>
    `
    }).join('') || '<tr><td colspan="8" style="text-align: center; padding: 20px;">ບໍ່ມີຂໍ້ມູນ (No Data)</td></tr>'

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Stock Transfer Summary Report</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.2; 
            padding: 15px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
        }
        .content { flex: 1; }
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            border-bottom: 2px solid #01532B; 
            padding-bottom: 10px; 
            margin-bottom: 15px; 
        }
        .company-info h1 { 
            font-size: 16px; 
            margin: 0; 
            text-transform: uppercase; 
            color: #01532B;
        }
        .company-info p { 
            margin: 2px 0; 
            font-size: 10px; 
            color: #444; 
        }
        .report-title-box { 
            text-align: right; 
        }
        .report-title-box h2 { 
            margin: 0; 
            font-size: 18px; 
            color: #01532B;
            font-weight: bold;
        }
        .report-title-box span { 
            font-size: 11px; 
            color: #666; 
            display: block;
        }
        .info-box { 
            width: 100%; 
            border: 1px solid #ccc; 
            margin-bottom: 15px; 
            padding: 10px; 
            display: flex; 
            background: #fdfdfd;
            border-radius: 4px;
        }
        .info-col { flex: 1; font-size: 10px; }
        .info-col.right { 
            border-left: 1px solid #eee; 
            padding-left: 15px; 
            flex: 0 0 250px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #555;
        }
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            border: 1px solid #ccc;
        }
        th { 
            border: 1px solid #ccc; 
            background-color: #01532B; 
            color: white;
            padding: 8px 6px; 
            font-size: 10px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #eee; 
            padding: 8px 6px; 
            font-size: 11px;
            vertical-align: middle;
        }
        tr:nth-child(even) {
            background-color: #fcfcfc;
        }
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-top: 10px;
            margin-bottom: 25px; 
        }
        .totals-box { 
            width: 320px; 
            border: 1px solid #ccc; 
            background: #fdfdfd;
            border-radius: 4px;
            overflow: hidden;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 7px 10px; 
            border-bottom: 1px solid #eee; 
            font-size: 11px;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #01532B; 
            font-weight: bold; 
            color: white;
            font-size: 12px;
        }
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-around; 
            text-align: center; 
            margin-bottom: 35px;
        }
        .sign-box { 
            width: 180px; 
            font-size: 10px; 
            font-weight: bold;
        }
        @media print { 
            body { margin: 0; padding: 10mm; } 
            @page { size: A4; margin: 10mm; } 
            .footer { page-break-inside: avoid; }
            th { background-color: #01532B !important; color: white !important; }
            .totals-box { background: #fdfdfd !important; }
            .total-row.final { background-color: #01532B !important; color: white !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                ${logoUrl ? `
                  <img src="${logoUrl}" style="max-height: 55px; max-width: 110px; object-fit: contain;" onerror="this.style.display='none';" />
                ` : ''}
                <div class="company-info" style="text-align: left;">
                    <h1>${companyData.name || 'COMPANY NAME'}</h1>
                    <p>${companyData.address || ''}</p>
                    <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                </div>
            </div>
            <div class="report-title-box">
                <h2>STOCK TRANSFER SUMMARY REPORT</h2>
                <span>ລາຍງານສະຫຼຸບການໂອນສິນຄ້າ</span>
            </div>
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ລາຍງານ:</span> <b>ລາຍງານສະຫຼຸບການໂອນສິນຄ້າຂ້າມສາງ (Stock Transfer Summary)</b></div>
                ${filters.fromDate ? `<div><span class="field-label">ເລີ່ມວັນທີ (From):</span> ${filters.fromDate}</div>` : ''}
                ${filters.toDate ? `<div><span class="field-label">ຫາວັນທີ (To):</span> ${filters.toDate}</div>` : ''}
            </div>
            <div class="info-col right">
                <div><span class="field-label">ວັນທີພິມ (Print Date):</span> ${new Date().toLocaleDateString('lo-LA')} ${new Date().toLocaleTimeString()}</div>
                <div><span class="field-label">ຜູ້ດຳເນີນການ (User):</span> ${filters.userName || '-'}</div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th width="5%">ລຳດັບ</th>
                    <th width="12%">ວັນທີໂອນ</th>
                    <th width="10%">ເລກບິນໂອນ</th>
                    <th>ຈາກສາງ (From)</th>
                    <th>ຫາສາງ (To)</th>
                    <th width="18%">ມູນຄ່າໂອນລວມ</th>
                    <th width="15%">ຜູ້ລົງທຸລະກຳ</th>
                    <th width="15%">ໝາຍເຫດ</th>
                </tr>
            </thead>
            <tbody>
                ${linesHTML}
            </tbody>
        </table>
        
        <div class="totals-container">
            <div class="totals-box">
                <div class="total-row">
                    <span>ຈຳນວນບິນໂອນທັງໝົດ:</span>
                    <span><strong>${transfers.length} ລາຍການ</strong></span>
                </div>
                <div class="total-row final">
                    <span>ມູນຄ່າໂອນລວມທັງໝົດ:</span>
                    <span><strong>${formatNumber(totalCostLocal)} ${localCurrency.code}</strong></span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="footer-row">
            <div class="sign-box"><br><br>...........................................<br>ຜູ້ຈັດທຳລາຍງານ (Prepared By)</div>
            <div class="sign-box"><br><br>...........................................<br>ຜູ້ຈັດການ (Manager / Approved)</div>
        </div>
    </div>
    </body>
    </html>
  `;
}

export const generateTransferDetailReportHTML = (transfers, companyData, currencyList = [], filters = {}) => {
    const logoUrl = getCompanyLogoUrl(companyData)
    const localCurrency = currencyList.find(c => c.isLocalCCY === true || c.isLocalCCY === 1) || { code: 'LAK', rate: 1 }
    const lakCurrency = currencyList.find(c => c.code?.toUpperCase() === 'LAK') || { code: 'LAK', rate: 1, isLocalCCY: localCurrency.code === 'LAK' }

    let grandTotalCostLocal = 0
    const sectionsHTML = transfers.map((transfer, index) => {
        let transferTotalLocal = 0

        const bookingDate = transfer.bookingDate ? transfer.bookingDate.split('T')[0] : '-'
        const fromLoc = transfer.srcLocation?.name || '-'
        const toLoc = transfer.desLocation?.name || '-'
        const user = transfer.user?.cus_name || '-'
        const remark = transfer.remark || '-'

        const itemsHTML = transfer.lines?.filter(line => line.isActive !== false).map((line, lIndex) => {
            const productName = line.product?.pro_name || 'Unknown Product'
            const qty = parseFloat(line.quantity || 0)
            const priceLAK = parseFloat(String(line.price || 0).replace(/,/g, '')) || 0
            const discountLAK = parseFloat(String(line.discount || 0).replace(/,/g, '')) || 0
            const totalLAK = parseFloat(String(line.total || 0).replace(/,/g, '')) || 0

            const priceLocal = convertToLocalCurrency(priceLAK, lakCurrency, localCurrency)
            const discountLocal = convertToLocalCurrency(discountLAK, lakCurrency, localCurrency)
            const totalLocal = convertToLocalCurrency(totalLAK, lakCurrency, localCurrency)

            transferTotalLocal += totalLocal

            return `
        <tr>
          <td style="text-align: center;">${lIndex + 1}</td>
          <td>${productName}</td>
          <td style="text-align: right;">${formatNumber(qty)}</td>
          <td style="text-align: right;">${formatNumber(priceLocal)} ${localCurrency.code}</td>
          <td style="text-align: right;">${formatNumber(discountLocal)} ${localCurrency.code}</td>
          <td style="text-align: right; font-weight: bold;">${formatNumber(totalLocal)} ${localCurrency.code}</td>
        </tr>
      `
        }).join('') || '<tr><td colspan="6" style="text-align: center; padding: 10px;">ບໍ່ມີລາຍການສິນຄ້າ (No Line Items)</td></tr>'

        grandTotalCostLocal += transferTotalLocal

        return `
      <div class="transfer-section" style="border: 1px solid #ccc; margin-bottom: 20px; padding: 12px; border-radius: 6px; background-color: #fff; page-break-inside: avoid;">
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding-bottom: 8px; margin-bottom: 8px; font-weight: bold; color: #01532B;">
          <div>ບິນໂອນເລກທີ (Transfer ID): #${transfer.id}</div>
          <div>ວັນທີ (Date): ${bookingDate}</div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 10px; margin-bottom: 10px; color: #555;">
          <div><span class="field-label">ຈາກສາງ (From):</span> <b>${fromLoc}</b></div>
          <div><span class="field-label">ຫາສາງ (To):</span> <b>${toLoc}</b></div>
          <div><span class="field-label">ຜູ້ລົງທຸລະກຳ (User):</span> ${user}</div>
          <div><span class="field-label">ໝາຍເຫດ (Remark):</span> ${remark}</div>
        </div>
        <table style="margin-bottom: 0;">
          <thead>
            <tr>
              <th width="5%">ລຳດັບ</th>
              <th>ຊື່ສິນຄ້າ (Product Name)</th>
              <th width="12%" style="text-align: right;">ຈຳນວນ</th>
              <th width="15%" style="text-align: right;">ລາຄາ</th>
              <th width="15%" style="text-align: right;">ສ່ວນຫຼຸດ</th>
              <th width="18%" style="text-align: right;">ລວມ</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHTML}
            <tr style="background-color: #f9f9f9; font-weight: bold;">
              <td colspan="5" style="text-align: right; color: #01532B;">ມູນຄ່າໂອນລວມຂອງບິນ #${transfer.id}:</td>
              <td style="text-align: right; color: #01532B;">${formatNumber(transferTotalLocal)} ${localCurrency.code}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
    }).join('') || '<div style="text-align: center; padding: 40px; border: 1px dashed #ccc; border-radius: 6px; background-color: #fafafa;">ບໍ່ມີຂໍ້ມູນ (No Data)</div>'

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Stock Transfer Detailed Report</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { height: 100%; margin: 0; padding: 0; }
        body { 
            font-family: 'Noto Sans Lao', Arial, sans-serif; 
            font-size: 11px; 
            line-height: 1.2; 
            padding: 15px; 
            display: flex; 
            flex-direction: column;
            min-height: 100vh;
            color: #333;
            background-color: #fafafa;
        }
        .content { flex: 1; }
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            border-bottom: 2px solid #01532B; 
            padding-bottom: 10px; 
            margin-bottom: 15px; 
        }
        .company-info h1 { 
            font-size: 16px; 
            margin: 0; 
            text-transform: uppercase; 
            color: #01532B;
        }
        .company-info p { 
            margin: 2px 0; 
            font-size: 10px; 
            color: #444; 
        }
        .report-title-box { 
            text-align: right; 
        }
        .report-title-box h2 { 
            margin: 0; 
            font-size: 18px; 
            color: #01532B;
            font-weight: bold;
        }
        .report-title-box span { 
            font-size: 11px; 
            color: #666; 
            display: block;
        }
        .info-box { 
            width: 100%; 
            border: 1px solid #ccc; 
            margin-bottom: 15px; 
            padding: 10px; 
            display: flex; 
            background: #fdfdfd;
            border-radius: 4px;
        }
        .info-col { flex: 1; font-size: 10px; }
        .info-col.right { 
            border-left: 1px solid #eee; 
            padding-left: 15px; 
            flex: 0 0 250px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #555;
        }
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            border: 1px solid #ccc;
        }
        th { 
            border: 1px solid #ccc; 
            background-color: #01532B; 
            color: white;
            padding: 6px 4px; 
            font-size: 9px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #eee; 
            padding: 6px 4px; 
            font-size: 10px;
            vertical-align: middle;
        }
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-top: 10px;
            margin-bottom: 25px; 
        }
        .totals-box { 
            width: 320px; 
            border: 1px solid #ccc; 
            background: #fdfdfd;
            border-radius: 4px;
            overflow: hidden;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 7px 10px; 
            border-bottom: 1px solid #eee; 
            font-size: 11px;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #01532B; 
            font-weight: bold; 
            color: white;
            font-size: 12px;
        }
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-around; 
            text-align: center; 
            margin-bottom: 35px;
        }
        .sign-box { 
            width: 180px; 
            font-size: 10px; 
            font-weight: bold;
        }
        @media print { 
            body { margin: 0; padding: 10mm; background-color: #fff; } 
            @page { size: A4; margin: 10mm; } 
            .footer { page-break-inside: avoid; }
            th { background-color: #01532B !important; color: white !important; }
            .totals-box { background: #fdfdfd !important; }
            .total-row.final { background-color: #01532B !important; color: white !important; }
            .transfer-section { border: 1px solid #ccc !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                ${logoUrl ? `
                  <img src="${logoUrl}" style="max-height: 55px; max-width: 110px; object-fit: contain;" onerror="this.style.display='none';" />
                ` : ''}
                <div class="company-info" style="text-align: left;">
                    <h1>${companyData.name || 'COMPANY NAME'}</h1>
                    <p>${companyData.address || ''}</p>
                    <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                </div>
            </div>
            <div class="report-title-box">
                <h2>STOCK TRANSFER DETAILED REPORT</h2>
                <span>ລາຍງານການໂອນສິນຄ້າແບບລະອຽດ</span>
            </div>
        </div>
        
        <div class="info-box" style="background: #fff;">
            <div class="info-col">
                <div><span class="field-label">ລາຍງານ:</span> <b>ລາຍງານລາຍລະອຽດການໂອນສິນຄ້າຂ້າມສາງ (Detailed Stock Transfer List)</b></div>
                ${filters.fromDate ? `<div><span class="field-label">ເລີ່ມວັນທີ (From):</span> ${filters.fromDate}</div>` : ''}
                ${filters.toDate ? `<div><span class="field-label">ຫາວັນທີ (To):</span> ${filters.toDate}</div>` : ''}
            </div>
            <div class="info-col right">
                <div><span class="field-label">ວັນທີພິມ (Print Date):</span> ${new Date().toLocaleDateString('lo-LA')} ${new Date().toLocaleTimeString()}</div>
                <div><span class="field-label">ຜູ້ດຳເນີນການ (User):</span> ${filters.userName || '-'}</div>
            </div>
        </div>

        <div class="transfers-container">
            ${sectionsHTML}
        </div>
        
        <div class="totals-container">
            <div class="totals-box">
                <div class="total-row">
                    <span>ຈຳນວນບິນໂອນທັງໝົດ:</span>
                    <span><strong>${transfers.length} ລາຍການ</strong></span>
                </div>
                <div class="total-row final">
                    <span>ມູນຄ່າໂອນລວມທັງໝົດ:</span>
                    <span><strong>${formatNumber(grandTotalCostLocal)} ${localCurrency.code}</strong></span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="footer-row">
            <div class="sign-box"><br><br>...........................................<br>ຜູ້ຈັດທຳລາຍງານ (Prepared By)</div>
            <div class="sign-box"><br><br>...........................................<br>ຜູ້ຈັດການ (Manager / Approved)</div>
        </div>
    </div>
    </body>
    </html>
  `;
}

export const generateProductListReportHTML = (products, companyData, currencyList = [], filters = {}) => {
    const logoUrl = getCompanyLogoUrl(companyData)

    let totalStockCount = 0
    const costTotalsByCurrency = {}

    const linesHTML = products.map((product, index) => {
        const qty = parseFloat(product.pro_card_count || 0)
        const cost = parseFloat(product.pro_cost_price || 0)
        totalStockCount += qty

        // Cost and Sale currency
        const costCcy = currencyList.find(c => c.id === product.costCurrencyId) || { code: 'LAK' }
        const saleCcy = currencyList.find(c => c.id === product.saleCurrencyId) || { code: 'LAK' }

        // Line total cost calculation
        const lineTotalCost = qty * cost
        if (qty > 0 && cost > 0) {
            const ccyCode = costCcy.code || 'LAK'
            if (!costTotalsByCurrency[ccyCode]) {
                costTotalsByCurrency[ccyCode] = 0
            }
            costTotalsByCurrency[ccyCode] += lineTotalCost
        }

        const proCodeStr = product.product_code ? `[${product.product_code}]` : ''
        const barcodeStr = product.barCode ? `Barcode: ${product.barCode}` : ''
        const identifiers = [proCodeStr, barcodeStr].filter(Boolean).join('<br>')

        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td style="text-align: left; white-space: nowrap;">
          ${identifiers || `-`}
        </td>
        <td style="text-align: left; font-weight: bold;">
          ${product.pro_name || '-'}
          <span style="font-size: 9px; color: #666; font-weight: normal; display: block;">ID: #${product.pro_id || ''}</span>
        </td>
        <td style="text-align: left;">${product.pro_category_desc || '-'}</td>
        <td style="text-align: center; font-weight: bold;">${formatNumber(qty)}</td>
        <td style="text-align: right;">${formatNumber(cost)} ${costCcy.code || ''}</td>
        <td style="text-align: right; font-weight: bold; background-color: #fafafa;">${formatNumber(lineTotalCost)} ${costCcy.code || ''}</td>
        <td style="text-align: right; font-weight: bold; color: #01532B;">${formatNumber(product.pro_price)} ${saleCcy.code || ''}</td>
        <td style="text-align: center; white-space: nowrap;">${formatDate(product.createdAt)}</td>
      </tr>
    `
    }).join('')

    const totalsHTML = Object.entries(costTotalsByCurrency).map(([ccy, total]) => {
        return `
      <div class="total-row">
        <span>ຕົ້ນທຶນສະຕັອກລວມ (${ccy}):</span>
        <span><strong>${formatNumber(total)} ${ccy}</strong></span>
      </div>
    `
    }).join('')

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Product List Report</title>
    <style>
        body { 
            font-family: 'Noto Sans Lao', 'Helvetica Neue', Arial, sans-serif; 
            margin: 0; 
            padding: 15px; 
            color: #333;
            background-color: #fff;
        }
        .content { 
            display: flex; 
            flex-direction: column; 
            min-height: 90vh; 
        }
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            border-bottom: 2px solid #01532B; 
            padding-bottom: 15px; 
            margin-bottom: 15px; 
        }
        .company-info h1 { 
            font-size: 16px; 
            margin: 0 0 5px 0; 
            color: #01532B; 
        }
        .company-info p { 
            font-size: 10px; 
            margin: 0 0 3px 0; 
            color: #666; 
        }
        .report-title-box { 
            text-align: right; 
        }
        .report-title-box h2 { 
            font-size: 16px; 
            margin: 0 0 5px 0; 
            color: #01532B; 
            letter-spacing: 0.5px;
        }
        .report-title-box span { 
            font-size: 10px; 
            color: #666; 
            display: block; 
            font-weight: bold; 
        }
        
        .info-box { 
            margin-bottom: 15px; 
            padding: 10px; 
            display: flex; 
            background: #fdfdfd;
            border: 1px solid #eee;
            border-radius: 4px;
        }
        .info-col { flex: 1; font-size: 10px; }
        .info-col.right { 
            border-left: 1px solid #eee; 
            padding-left: 15px; 
            flex: 0 0 250px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #555;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            border: 1px solid #ccc;
        }
        th { 
            border: 1px solid #ccc; 
            background-color: #01532B; 
            color: white;
            padding: 8px 6px; 
            font-size: 10px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #eee; 
            padding: 8px 6px; 
            font-size: 10px;
            vertical-align: middle;
        }
        tr:nth-child(even) {
            background-color: #fcfcfc;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-top: 10px;
            margin-bottom: 25px; 
        }
        .totals-box { 
            width: 380px; 
            border: 1px solid #ccc; 
            background: #fdfdfd;
            border-radius: 4px;
            overflow: hidden;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 7px 10px; 
            border-bottom: 1px solid #eee; 
            font-size: 10px;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #01532B; 
            font-weight: bold; 
            color: white;
            font-size: 11px;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-around; 
            text-align: center; 
            margin-bottom: 35px;
        }
        .sign-box { 
            width: 180px; 
            font-size: 10px; 
            font-weight: bold;
        }
        
        @media print { 
            body { margin: 0; padding: 10mm; background-color: #fff; } 
            @page { size: A4; margin: 10mm; } 
            .footer { page-break-inside: avoid; }
            th { background-color: #01532B !important; color: white !important; }
            .totals-box { background: #fdfdfd !important; }
            .total-row.final { background-color: #01532B !important; color: white !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                ${logoUrl ? `
                  <img src="${logoUrl}" style="max-height: 55px; max-width: 110px; object-fit: contain;" onerror="this.style.display='none';" />
                ` : ''}
                <div class="company-info" style="text-align: left;">
                    <h1>${companyData.name || 'COMPANY NAME'}</h1>
                    <p>${companyData.address || ''}</p>
                    <p>Tel: ${companyData.tel || ''} | Email: ${companyData.email || ''}</p>
                </div>
            </div>
            <div class="report-title-box">
                <h2>PRODUCT LIST REPORT</h2>
                <span>ລາຍງານລາຍການສິນຄ້າ</span>
            </div>
        </div>
        
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ລາຍງານ:</span> <b>ລາຍການສິນຄ້າທັງໝົດ (All Products List)</b></div>
                ${filters.search ? `<div><span class="field-label">ຄົ້ນຫາ (Search Keyword):</span> "${filters.search}"</div>` : ''}
                <div><span class="field-label">ສະຖານະ (Status):</span> ${filters.status || 'Active Only'}</div>
            </div>
            <div class="info-col right">
                <div><span class="field-label">ວັນທີພິມ (Print Date):</span> ${new Date().toLocaleDateString('lo-LA')} ${new Date().toLocaleTimeString()}</div>
                <div><span class="field-label">ຜູ້ດຳເນີນການ (User):</span> ${filters.userName || '-'}</div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th width="5%">ລຳດັບ<br>(No.)</th>
                    <th width="15%">ລະຫັດ/ບາໂຄດ<br>(Code/Barcode)</th>
                    <th width="25%">ຊື່ສິນຄ້າ<br>(Product Name)</th>
                    <th width="15%">ໝວດໝູ່<br>(Category)</th>
                    <th width="8%">ຈຳນວນ<br>(Qty)</th>
                    <th width="10%">ຕົ້ນທຶນ/ໜ່ວຍ<br>(Unit Cost)</th>
                    <th width="12%">ຕົ້ນທຶນລວມ<br>(Total Cost)</th>
                    <th width="10%">ລາຄາຂາຍ<br>(Price)</th>
                    <th width="10%">ວັນທີສ້າງ<br>(Created Date)</th>
                </tr>
            </thead>
            <tbody>
                ${linesHTML}
            </tbody>
        </table>
        
        <div class="totals-container">
            <div class="totals-box">
                <div class="total-row">
                    <span>ຈຳນວນລາຍການສິນຄ້າທັງໝົດ:</span>
                    <span><strong>${products.length} ລາຍການ</strong></span>
                </div>
                <div class="total-row final">
                    <span>ຈຳນວນສະຕັອກຄົງເຫຼືອລວມ (Total Stock):</span>
                    <span><strong>${formatNumber(totalStockCount)}</strong></span>
                </div>
                ${totalsHTML}
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="footer-row">
            <div class="sign-box"><br><br>...........................................<br>ຜູ້ຈັດທຳລາຍງານ (Prepared By)</div>
            <div class="sign-box"><br><br>...........................................<br>ຜູ້ຈັດການ (Manager / Approved)</div>
        </div>
    </div>
    </body>
    </html>
  `;
}

// ==========================================
// CATEGORY SALES REPORT PRINT TEMPLATE
// ==========================================
export const generateCategorySalesReportHTML = (categories = [], companyData = {}, fromDate = '', toDate = '', localCurrency = { code: 'LAK' }) => {
    const logoUrl = getCompanyLogoUrl(companyData)
    const formattedFromDate = formatDate(fromDate)
    const formattedToDate = formatDate(toDate)
    const cCode = localCurrency?.code || 'LAK'

    // Calculations
    const totalQTY = categories.reduce((sum, c) => sum + (Number(c.totalQTY) || 0), 0)
    const totalDiscount = categories.reduce((sum, c) => sum + (Number(c.totalDiscountLocal) || 0), 0)
    const totalRevenue = categories.reduce((sum, c) => sum + (Number(c.totalAmountLocal) || 0), 0)
    const totalGross = totalRevenue + totalDiscount

    const rowsHTML = categories.map((cat, index) => {
        // Nested products html list
        const productsList = cat.products || []
        const productsHTML = productsList.map(p => `
      <tr class="product-row" style="background-color: #fafafa; font-size: 9px; color: #555;">
        <td></td>
        <td style="padding-left: 20px;">&nbsp;&nbsp;&nbsp;↳ <strong>${p.productName || p.pro_name || 'Unknown Product'}</strong> <span style="color: #888;">(ID: #${p.productId || p.id || '-'})</span></td>
        <td style="text-align: center;">${formatNumber(p.totalQTY || p.quantity || 0)}</td>
        <td style="text-align: right;">${formatNumber(Math.round((p.totalPriceLocal || 0) / (p.totalQTY || 1)))} ${cCode}</td>
        <td style="text-align: right; color: #d97706;">${(p.totalDiscountLocal || 0) > 0 ? `-${formatNumber(Math.round(p.totalDiscountLocal))} ${cCode}` : '-'}</td>
        <td style="text-align: right; font-weight: 500;">${formatNumber(Math.round(p.totalAmountLocal || 0))} ${cCode}</td>
      </tr>
    `).join('')

        return `
      <!-- Category Summary Row -->
      <tr style="background-color: #f1f5f9; font-weight: bold; border-top: 1px solid #cbd5e1;">
        <td style="text-align: center;">${index + 1}</td>
        <td style="text-align: left;">
          ${cat.categoryName || 'ບໍ່ມີໝວດໝູ່'} <span style="font-size: 9px; font-weight: normal; color: #64748b;">(ID: #${cat.categoryId || '-'}) - ${cat.productCount || productsList.length} ລາຍການ</span>
        </td>
        <td style="text-align: center; font-weight: 700;">${formatNumber(cat.totalQTY || 0)}</td>
        <td style="text-align: right;">${formatNumber(Math.round((cat.totalPriceLocal || 0) / (cat.totalQTY || 1)))} ${cCode}</td>
        <td style="text-align: right; color: #d97706;">${(cat.totalDiscountLocal || 0) > 0 ? `-${formatNumber(Math.round(cat.totalDiscountLocal))} ${cCode}` : '-'}</td>
        <td style="text-align: right; color: #0f766e; font-weight: 800;">${formatNumber(Math.round(cat.totalAmountLocal || 0))} ${cCode}</td>
      </tr>
      <!-- Nested Products -->
      ${productsHTML}
    `
    }).join('') || '<tr><td colspan="6" style="text-align: center; padding: 15px;">ບໍ່ມີຂໍ້ມູນການຂາຍ</td></tr>'

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Category Sales Report</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        body { 
            font-family: 'Noto Sans Lao', 'Helvetica Neue', Arial, sans-serif; 
            margin: 0; 
            padding: 20px; 
            color: #333; 
            background-color: #fff;
        }
        .content { 
            display: flex; 
            flex-direction: column; 
            min-height: 95vh; 
        }
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            border-bottom: 2px solid #0f766e; 
            padding-bottom: 15px; 
            margin-bottom: 15px; 
        }
        .logo-box img {
            max-height: 70px;
            max-width: 140px;
            object-fit: contain;
        }
        .company-info h1 { 
            font-size: 16px; 
            margin: 0 0 5px 0; 
            color: #0f766e; 
        }
        .company-info p { 
            font-size: 10px; 
            margin: 0 0 3px 0; 
            color: #666; 
        }
        .report-title-box { 
            text-align: right; 
        }
        .report-title-box h2 { 
            font-size: 16px; 
            margin: 0 0 5px 0; 
            color: #0f766e; 
            letter-spacing: 0.5px;
        }
        .report-title-box span { 
            font-size: 10px; 
            color: #666; 
            display: block; 
            font-weight: bold; 
        }
        
        .info-box { 
            margin-bottom: 15px; 
            padding: 10px; 
            display: flex; 
            background: #f8fafc;
            border: 1px solid #e2e8f0; 
            border-radius: 6px;
        }
        .info-col { flex: 1; font-size: 10px; }
        .info-col.right { 
            border-left: 1px solid #e2e8f0; 
            padding-left: 15px; 
            flex: 0 0 250px; 
        }
        .field-label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #475569; 
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            border: 1px solid #cbd5e1;
        }
        th { 
            border: 1px solid #cbd5e1; 
            background-color: #0f766e; 
            color: white; 
            padding: 8px 6px; 
            font-size: 10px; 
            font-weight: bold; 
            text-align: center;
        }
        td { 
            border: 1px solid #e2e8f0; 
            padding: 7px 6px; 
            font-size: 10px; 
            vertical-align: middle;
        }
        
        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-top: 10px; 
            margin-bottom: 25px; 
        }
        .totals-box { 
            width: 380px; 
            border: 1px solid #cbd5e1; 
            background: #f8fafc; 
            border-radius: 6px; 
            overflow: hidden;
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 7px 12px; 
            font-size: 11px; 
            border-bottom: 1px solid #e2e8f0;
        }
        .total-row:last-child { border-bottom: none; }
        
        .signature-section { 
            display: flex; 
            justify-content: space-between; 
            margin-top: 40px; 
            padding-top: 20px; 
            page-break-inside: avoid;
        }
        .signature-box { 
            width: 220px; 
            text-align: center; 
            border-top: 1px dashed #64748b; 
            font-size: 10px; 
            color: #475569; 
            padding-top: 5px;
        }
        .footer-note {
            text-align: center; 
            font-size: 9px; 
            color: #94a3b8; 
            margin-top: auto; 
            padding-top: 20px; 
            border-top: 1px solid #e2e8f0;
        }
        @media print {
            body { padding: 5mm; }
            @page { size: A4; margin: 5mm; }
            .content { min-height: 100%; }
            th { background-color: #0f766e !important; color: white !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px;">
                ${logoUrl ? `
                    <div class="logo-box">
                        <img src="${logoUrl}" alt="Logo" onerror="this.style.display='none';"/>
                    </div>
                ` : ''}
                <div class="company-info">
                    <h1>${companyData?.name || 'ບໍລິສັດ ດີຄອມເມີຊ POS'}</h1>
                    <p><span class="field-label">Tel:</span>${companyData?.tel || '-'}</p>
                    <p><span class="field-label">Address:</span>${companyData?.address || '-'}</p>
                </div>
            </div>
            <div class="report-title-box">
                <h2>ລາຍງານຍອດຂາຍ ຕາມປະເພດສິນຄ້າ</h2>
                <span>Category Sales Report</span>
            </div>
        </div>

        <div class="info-box">
            <div class="info-col">
                <p><span class="field-label">ໄລຍະເວລາລາຍງານ (Period):</span> ${formattedFromDate} - ${formattedToDate}</p>
                <p><span class="field-label">ສະຖານທີ່ (Location):</span> ${companyData?.location || companyData?.address || 'ສາງຫຼັກ (Main Warehouse)'}</p>
            </div>
            <div class="info-col right">
                <p><span class="field-label">ວັນທີພິມ (Date Printed):</span> ${new Date().toLocaleDateString('en-GB')}</p>
                <p><span class="field-label">ພິມໂດຍ (Printed By):</span> ${companyData?.user || 'ຜູ້ຈັດການ (Manager)'}</p>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th style="width: 45px;">ລຳດັບ<br>(No.)</th>
                    <th style="text-align: left;">ປະເພດສິນຄ້າ / ລາຍການສິນຄ້າ<br>(Category / Product Name)</th>
                    <th style="width: 90px;">ຈຳນວນຂາຍ<br>(Qty Sold)</th>
                    <th style="width: 110px;">ລາຄາສະເລ່ຍ<br>(Avg Price)</th>
                    <th style="width: 100px;">ສ່ວນຫຼຸດ<br>(Discount)</th>
                    <th style="width: 130px; text-align: right;">ຍອດຂາຍສຸດທິ<br>(Net Revenue)</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHTML}
            </tbody>
        </table>

        <div class="totals-container">
            <div class="totals-box">
                <div class="total-row">
                    <span>ຈຳນວນໝວດສິນຄ້າ (Total Categories):</span>
                    <span><strong>${categories.length} ໝວດ</strong></span>
                </div>
                <div class="total-row">
                    <span>ຈຳນວນຂາຍລວມທັງໝົດ (Total Qty Sold):</span>
                    <span><strong>${formatNumber(totalQTY)}</strong></span>
                </div>
                <div class="total-row">
                    <span>ຍອດຂາຍລວມກ່ອນຫຼຸດ (Gross Sales):</span>
                    <span><strong>${formatNumber(Math.round(totalGross))} ${cCode}</strong></span>
                </div>
                <div class="total-row" style="color: #d97706;">
                    <span>ສ່ວນຫຼຸດລວມທັງໝົດ (Total Discount):</span>
                    <span><strong>-${formatNumber(Math.round(totalDiscount))} ${cCode}</strong></span>
                </div>
                <div class="total-row" style="background-color: #ecfdf5; color: #047857; font-size: 12px; font-weight: bold;">
                    <span>ຍອດຂາຍສຸດທິ (Net Revenue):</span>
                    <span><strong>${formatNumber(Math.round(totalRevenue))} ${cCode}</strong></span>
                </div>
            </div>
        </div>

        <div class="signature-section">
            <div class="signature-box"><br><br>ຜູ້ຈັດການ (Manager / Approved By)</div>
            <div class="signature-box"><br><br>ຜູ້ກວດສອບ (Audited / Prepared By)</div>
        </div>
        
        <div class="footer-note">
            ລາຍງານນີ້ດຶງອອກຈາກລະບົບ DCommerce POS.
        </div>
    </div>
    </body>
    </html>
  `
}

// ==========================================
// PRODUCT SALES REPORT PRINT TEMPLATE
// ==========================================
export const generateProductSalesReportHTML = (products = [], companyData = {}, fromDate = '', toDate = '', localCurrency = { code: 'LAK' }) => {
    const logoUrl = getCompanyLogoUrl(companyData)
    const formattedFromDate = formatDate(fromDate)
    const formattedToDate = formatDate(toDate)
    const cCode = localCurrency?.code || 'LAK'

    // Calculations
    const totalQTY = products.reduce((sum, p) => sum + (Number(p.totalQTY) || 0), 0)
    const totalDiscount = products.reduce((sum, p) => sum + (Number(p.totalDiscountLocal) || 0), 0)
    const totalRevenue = products.reduce((sum, p) => sum + (Number(p.totalAmountLocal) || 0), 0)
    const totalGross = totalRevenue + totalDiscount

    const rowsHTML = products.map((item, index) => {
        const prod = item.product || {}
        const prodName = prod.pro_name || 'ບໍ່ມີຊື່ສິນຄ້າ'
        const prodCode = prod.product_code || prod.barCode || ''
        const catName = prod.category?.categ_name || prod.categ_name || ''
        const avgPrice = Math.round((item.totalPriceLocal || 0) / (item.totalQTY || 1))

        return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td style="text-align: left;">
          <strong>${prodName}</strong>
          ${prodCode ? `<br><span style="font-size: 8.5px; color: #64748b;">[${prodCode}]</span>` : ''}
          ${catName ? `<span style="font-size: 8.5px; color: #0284c7; margin-left: 4px;">(${catName})</span>` : ''}
        </td>
        <td style="text-align: center; font-weight: 700;">${formatNumber(item.totalQTY || 0)}</td>
        <td style="text-align: right;">${formatNumber(avgPrice)} ${cCode}</td>
        <td style="text-align: right; color: #d97706;">${(item.totalDiscountLocal || 0) > 0 ? `-${formatNumber(Math.round(item.totalDiscountLocal))} ${cCode}` : '-'}</td>
        <td style="text-align: right; color: #0f766e; font-weight: 700;">${formatNumber(Math.round(item.totalAmountLocal || 0))} ${cCode}</td>
      </tr>
    `
    }).join('') || '<tr><td colspan="6" style="text-align: center; padding: 15px;">ບໍ່ມີຂໍ້ມູນການຂາຍ</td></tr>'

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Product Sales Report</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        body { 
            font-family: 'Noto Sans Lao', 'Helvetica Neue', Arial, sans-serif; 
            margin: 0; 
            padding: 20px; 
            color: #333; 
            background-color: #fff;
        }
        .content { 
            display: flex; 
            flex-direction: column; 
            min-height: 95vh; 
        }
        .header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            border-bottom: 2px solid #0f766e; 
            padding-bottom: 15px; 
            margin-bottom: 15px; 
        }
        .logo-box img { 
            max-height: 70px; 
            max-width: 140px; 
            object-fit: contain; 
        }
        .company-info h1 { 
            font-size: 16px; 
            margin: 0 0 5px 0; 
            color: #0f766e; 
        }
        .company-info p { 
            font-size: 10px; 
            margin: 0 0 3px 0; 
            color: #64748b; 
        }
        .report-title-box { 
            text-align: right; 
        }
        .report-title-box h2 { 
            font-size: 18px; 
            margin: 0 0 4px 0; 
            color: #0f766e; 
            text-transform: uppercase; 
        }
        .report-title-box span { 
            font-size: 11px; 
            color: #64748b; 
            font-weight: bold; 
        }
        .info-box { 
            display: flex; 
            justify-content: space-between; 
            background-color: #f8fafc; 
            border: 1px solid #e2e8f0; 
            border-radius: 6px; 
            padding: 10px 15px; 
            margin-bottom: 15px; 
            font-size: 11px; 
        }
        .info-col p { margin: 3px 0; }
        .info-col.right { text-align: right; }
        .field-label { font-weight: bold; color: #475569; margin-right: 5px; }

        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 15px; 
            font-size: 10px; 
        }
        th, td { 
            border: 1px solid #cbd5e1; 
            padding: 6px 8px; 
        }
        th { 
            background-color: #0f766e; 
            color: white; 
            font-weight: 700; 
            text-align: center; 
        }
        tbody tr:nth-child(even) { 
            background-color: #f8fafc; 
        }

        .totals-container { 
            display: flex; 
            justify-content: flex-end; 
            margin-top: 10px; 
            margin-bottom: 25px; 
        }
        .totals-box { 
            width: 320px; 
            border: 1px solid #cbd5e1; 
            border-radius: 6px; 
            background-color: #f8fafc; 
            overflow: hidden; 
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            padding: 6px 12px; 
            font-size: 10px; 
            border-bottom: 1px solid #e2e8f0; 
        }
        .total-row:last-child { border-bottom: none; }

        .signature-section { 
            display: flex; 
            justify-content: space-around; 
            margin-top: 30px; 
            margin-bottom: 20px; 
        }
        .signature-box { 
            text-align: center; 
            font-size: 11px; 
            width: 200px; 
            border-top: 1px dashed #94a3b8; 
            padding-top: 8px; 
            color: #475569; 
        }

        .footer-note { 
            text-align: center; 
            font-size: 9px; 
            color: #94a3b8; 
            margin-top: auto; 
            padding-top: 20px; 
            border-top: 1px solid #e2e8f0; 
        }
        @media print {
            body { padding: 5mm; }
            @page { size: A4; margin: 5mm; }
            .content { min-height: 100%; }
            th { background-color: #0f766e !important; color: white !important; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div style="display: flex; align-items: center; gap: 15px;">
                ${logoUrl ? `
                    <div class="logo-box">
                        <img src="${logoUrl}" alt="Logo" onerror="this.style.display='none';"/>
                    </div>
                ` : ''}
                <div class="company-info">
                    <h1>${companyData?.name || 'ບໍລິສັດ ດີຄອມເມີຊ POS'}</h1>
                    <p><span class="field-label">Tel:</span>${companyData?.tel || '-'}</p>
                    <p><span class="field-label">Address:</span>${companyData?.address || '-'}</p>
                </div>
            </div>
            <div class="report-title-box">
                <h2>ລາຍງານຍອດຂາຍ ຕາມລາຍການສິນຄ້າ</h2>
                <span>Product Sales Report</span>
            </div>
        </div>

        <div class="info-box">
            <div class="info-col">
                <p><span class="field-label">ໄລຍະເວລາລາຍງານ (Period):</span> ${formattedFromDate} - ${formattedToDate}</p>
                <p><span class="field-label">ສະຖານທີ່ (Location):</span> ${companyData?.location || companyData?.address || 'ສາງຫຼັກ (Main Warehouse)'}</p>
            </div>
            <div class="info-col right">
                <p><span class="field-label">ວັນທີພິມ (Date Printed):</span> ${new Date().toLocaleDateString('en-GB')}</p>
                <p><span class="field-label">ພິມໂດຍ (Printed By):</span> ${companyData?.user || 'ຜູ້ຈັດການ (Manager)'}</p>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th style="width: 45px;">ລຳດັບ<br>(No.)</th>
                    <th style="text-align: left;">ລາຍການສິນຄ້າ<br>(Product Name / Code)</th>
                    <th style="width: 90px;">ຈຳນວນຂາຍ<br>(Qty Sold)</th>
                    <th style="width: 110px;">ລາຄາສະເລ່ຍ<br>(Avg Price)</th>
                    <th style="width: 100px;">ສ່ວນຫຼຸດ<br>(Discount)</th>
                    <th style="width: 130px; text-align: right;">ຍອດຂາຍສຸດທິ<br>(Net Revenue)</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHTML}
            </tbody>
        </table>

        <div class="totals-container">
            <div class="totals-box">
                <div class="total-row">
                    <span>ຈຳນວນລາຍການສິນຄ້າ (Product Lines):</span>
                    <span><strong>${products.length} ລາຍການ</strong></span>
                </div>
                <div class="total-row">
                    <span>ຈຳນວນຂາຍລວມທັງໝົດ (Total Qty Sold):</span>
                    <span><strong>${formatNumber(totalQTY)}</strong></span>
                </div>
                <div class="total-row">
                    <span>ຍອດຂາຍລວມກ່ອນຫຼຸດ (Gross Sales):</span>
                    <span><strong>${formatNumber(Math.round(totalGross))} ${cCode}</strong></span>
                </div>
                <div class="total-row" style="color: #d97706;">
                    <span>ສ່ວນຫຼຸດລວມທັງໝົດ (Total Discount):</span>
                    <span><strong>-${formatNumber(Math.round(totalDiscount))} ${cCode}</strong></span>
                </div>
                <div class="total-row" style="background-color: #ecfdf5; color: #047857; font-size: 12px; font-weight: bold;">
                    <span>ຍອດຂາຍສຸດທິ (Net Revenue):</span>
                    <span><strong>${formatNumber(Math.round(totalRevenue))} ${cCode}</strong></span>
                </div>
            </div>
        </div>

        <div class="signature-section">
            <div class="signature-box"><br><br>ຜູ້ຈັດການ (Manager / Approved By)</div>
            <div class="signature-box"><br><br>ຜູ້ກວດສອບ (Audited / Prepared By)</div>
        </div>
        
        <div class="footer-note">
            ລາຍງານນີ້ດຶງອອກຈາກລະບົບ DCommerce POS.
        </div>
    </div>
    </body>
    </html>
  `
}

export const generateCashPositionReportHTML = (reportData, companyData, filterParams = {}) => {
    console.log('🏫 GENERATING END-OF-DAY CASH POSITION REPORT PRINT HTML');
    const logoUrl = getCompanyLogoUrl(companyData);
    const summary = reportData.summary || {};
    const users = (reportData.users || []).filter(u => u.openingCash > 0 || u.totalCashIn > 0 || u.totalCashOut > 0 || u.posNfcSales > 0 || u.shift);

    const userRowsHTML = users.map((u, index) => {
        const shiftStatus = u.shift ? u.shift.status : 'NO SHIFT';
        const shiftBadge = shiftStatus === 'OPEN'
            ? `<span style="background: #e8f5e9; color: #2e7d32; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 10px;">OPEN #${u.shift?.id || ''}</span>`
            : (shiftStatus === 'CLOSED'
                ? `<span style="background: #ffebee; color: #c62828; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 10px;">CLOSED #${u.shift?.id || ''}</span>`
                : `<span style="color: #888; font-size: 10px;">-</span>`);

        const varStyle = u.variance !== null && u.variance !== 0
            ? (u.variance > 0 ? 'color: #1565c0; font-weight: bold;' : 'color: #c62828; font-weight: bold;')
            : 'color: #666;';

        return `
            <tr>
                <td style="text-align: center;">${index + 1}</td>
                <td style="font-weight: bold;">${u.userName} <span style="color: #777; font-size: 10px;">(${u.userCode})</span></td>
                <td style="text-align: center;">${shiftBadge}</td>
                <td style="text-align: right;">${formatNumber(u.openingCash)}</td>
                <td style="text-align: right; color: #2e7d32; font-weight: bold;">+${formatNumber(u.topupIn)} <span style="font-size: 9px; color: #888;">(${u.topupCount})</span></td>
                <td style="text-align: right; color: #c62828; font-weight: bold;">-${formatNumber(u.withdrawOut)} <span style="font-size: 9px; color: #888;">(${u.withdrawCount})</span></td>
                <td style="text-align: right;">${formatNumber(u.posCashSales)}</td>
                <td style="text-align: right; font-weight: bold; color: #00796b;">${formatNumber(u.totalCashIn)}</td>
                <td style="text-align: right; font-weight: bold; color: #d32f2f;">${formatNumber(u.totalCashOut)}</td>
                <td style="text-align: right; font-weight: bold; background-color: #f1f8e9; color: #1b5e20;">${formatNumber(u.expectedCashInDrawer)}</td>
                <td style="text-align: right;">${u.actualClosingCash !== null ? formatNumber(u.actualClosingCash) : '-'}</td>
                <td style="text-align: right; ${varStyle}">${u.variance !== null ? (u.variance > 0 ? '+' : '') + formatNumber(u.variance) : '-'}</td>
                <td style="text-align: right; color: #0288d1;">${formatNumber(u.posNfcSales)}</td>
            </tr>
        `;
    }).join('') || '<tr><td colspan="13" style="text-align: center; padding: 15px; color: #888;">ບໍ່ມີຂໍ້ມູນການເຄື່ອນໄຫວໃນວັນທີນີ້</td></tr>';

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>ລາຍງານສະຫຼຸບຍອດເງິນສົດ ແລະ ການປິດກະເປົາປະຈຳວັນ (Cash Position & Shift Summary)</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { margin: 0; padding: 0; font-family: 'Noto Sans Lao', Arial, sans-serif; font-size: 11px; color: #333; }
        body { padding: 15px; }
        
        .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #004d40; padding-bottom: 10px; margin-bottom: 12px; }
        .company-info h1 { margin: 0 0 4px 0; font-size: 16px; color: #004d40; font-weight: bold; }
        .company-info p { margin: 2px 0; font-size: 10px; color: #555; }
        .title-box { text-align: right; }
        .title-box h2 { margin: 0 0 4px 0; font-size: 14px; color: #004d40; font-weight: bold; }
        .title-box p { margin: 2px 0; font-size: 10px; color: #666; }

        .kpi-container { display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap; }
        .kpi-card { flex: 1; min-width: 130px; background: #fafafa; border: 1px solid #e0e0e0; border-radius: 6px; padding: 8px 10px; text-align: center; }
        .kpi-card.highlight { background: #e8f5e9; border-color: #81c784; }
        .kpi-title { font-size: 9px; color: #666; text-transform: uppercase; margin-bottom: 3px; font-weight: 600; }
        .kpi-value { font-size: 13px; font-weight: bold; }

        table { width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 10px; }
        th { background-color: #004d40; color: #ffffff; padding: 6px 4px; text-align: left; font-weight: 600; border: 1px solid #00332c; }
        td { padding: 5px 4px; border: 1px solid #e0e0e0; }
        tr:nth-child(even) { background-color: #f9f9f9; }
        .total-row td { background-color: #e0f2f1; font-weight: bold; border-top: 2px solid #004d40; }

        .signature-section { display: flex; justify-content: space-between; margin-top: 30px; page-break-inside: avoid; }
        .signature-box { text-align: center; width: 30%; border-top: 1px dashed #777; padding-top: 8px; font-size: 10px; color: #444; }
        
        .footer-note { font-size: 9px; color: #888; text-align: center; margin-top: 20px; }

        @media print {
            body { padding: 5px; }
            button { display: none; }
        }
    </style>
    </head>
    <body>
        <div class="header">
            <div class="company-info">
                ${logoUrl ? `<img src="${logoUrl}" style="height: 45px; max-width: 150px; object-fit: contain; margin-bottom: 4px;" alt="Logo" /><br>` : ''}
                <h1>${companyData.name || 'ລະບົບໂຮງຮຽນ ແລະ ສູນການຄ້າ'}</h1>
                <p>${companyData.address || ''} | ໂທ: ${companyData.phone || '-'}</p>
            </div>
            <div class="title-box">
                <h2>ລາຍງານສະຫຼຸບຍອດເງິນສົດ & ການປິດກະເປົາປະຈຳວັນ</h2>
                <p><strong>ວັນທີ (Date):</strong> ${filterParams.startDate || reportData.startDate} ${filterParams.endDate && filterParams.endDate !== filterParams.startDate ? ' ຫາ ' + filterParams.endDate : ''}</p>
                <p><strong>ເວລາພິມ (Printed At):</strong> ${new Date().toLocaleString('en-GB')}</p>
            </div>
        </div>

        <!-- KPI Executive Summary -->
        <div class="kpi-container">
            <div class="kpi-card">
                <div class="kpi-title">ຍອດເປີດກະເປົາລວມ (Float)</div>
                <div class="kpi-value" style="color: #455a64;">${formatNumber(summary.totalOpeningCash)} LAK</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-title">ຕື່ມເງິນບັດ (Deposit IN)</div>
                <div class="kpi-value" style="color: #2e7d32;">+${formatNumber(summary.totalTopupIn)} LAK</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-title">ຖອນເງິນບັດ (Withdraw OUT)</div>
                <div class="kpi-value" style="color: #c62828;">-${formatNumber(summary.totalWithdrawOut)} LAK</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-title">ຂາຍສິນຄ້າເງິນສົດ (POS Cash)</div>
                <div class="kpi-value" style="color: #0277bd;">+${formatNumber(summary.totalPosCashSales)} LAK</div>
            </div>
            <div class="kpi-card highlight">
                <div class="kpi-title">ເງິນສົດລວມໃນລີ້ນຊັກ (Expected Cash)</div>
                <div class="kpi-value" style="color: #1b5e20; font-size: 14px;">${formatNumber(summary.grandExpectedCashInDrawers)} LAK</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-title">ຍອດຂາຍບັດ NFC (Cashless)</div>
                <div class="kpi-value" style="color: #6a1b9a;">${formatNumber(summary.totalPosNfcSales)} LAK</div>
            </div>
        </div>

        <!-- Cashier Details Table -->
        <table>
            <thead>
                <tr>
                    <th style="width: 25px; text-align: center;">#</th>
                    <th>ຊື່ Cashier / User</th>
                    <th style="width: 70px; text-align: center;">Shift</th>
                    <th style="width: 75px; text-align: right;">ເງິນເລີ່ມຕົ້ນ</th>
                    <th style="width: 80px; text-align: right;">ຕື່ມເງິນ (+)</th>
                    <th style="width: 75px; text-align: right;">ຖອນເງິນ (-)</th>
                    <th style="width: 75px; text-align: right;">POS ເງິນສົດ</th>
                    <th style="width: 80px; text-align: right;">ລວມຮັບເຂົ້າ</th>
                    <th style="width: 75px; text-align: right;">ລວມຈ່າຍອອກ</th>
                    <th style="width: 90px; text-align: right; background-color: #00332c;">ເງິນສົດຄວນມີ</th>
                    <th style="width: 75px; text-align: right;">ປິດຕົວຈິງ</th>
                    <th style="width: 65px; text-align: right;">ຜົນຕ່າງ</th>
                    <th style="width: 70px; text-align: right;">ຂາຍ NFC</th>
                </tr>
            </thead>
            <tbody>
                ${userRowsHTML}
                <tr class="total-row">
                    <td colspan="3" style="text-align: center; font-weight: bold;">ຍອດສະຫຼຸບລວມທັງໝົດ (Grand Total)</td>
                    <td style="text-align: right;">${formatNumber(summary.totalOpeningCash)}</td>
                    <td style="text-align: right; color: #2e7d32;">+${formatNumber(summary.totalTopupIn)}</td>
                    <td style="text-align: right; color: #c62828;">-${formatNumber(summary.totalWithdrawOut)}</td>
                    <td style="text-align: right;">${formatNumber(summary.totalPosCashSales)}</td>
                    <td style="text-align: right; color: #00796b;">${formatNumber(summary.grandTotalCashIn)}</td>
                    <td style="text-align: right; color: #d32f2f;">${formatNumber(summary.grandTotalCashOut)}</td>
                    <td style="text-align: right; color: #1b5e20; font-size: 11px;">${formatNumber(summary.grandExpectedCashInDrawers)}</td>
                    <td style="text-align: right;">${summary.grandActualClosingCash ? formatNumber(summary.grandActualClosingCash) : '-'}</td>
                    <td style="text-align: right;">-</td>
                    <td style="text-align: right; color: #0288d1;">${formatNumber(summary.totalPosNfcSales)}</td>
                </tr>
            </tbody>
        </table>

        <!-- Signatures -->
        <div class="signature-section">
            <div class="signature-box">
                <br><br>
                <strong>ຜູ້ສະຫຼຸບລາຍງານ (Prepared By)</strong><br>
                ວັນທີ: ____/____/________
            </div>
            <div class="signature-box">
                <br><br>
                <strong>ຫົວໜ້າການເງິນ (Finance Supervisor)</strong><br>
                ວັນທີ: ____/____/________
            </div>
            <div class="signature-box">
                <br><br>
                <strong>ຜູ້ກວດສອບ / ຜູ້ອຳນວຍການ (Audited / Director)</strong><br>
                ວັນທີ: ____/____/________
            </div>
        </div>

        <div class="footer-note">
            ລາຍງານສະຫຼຸບຍອດປິດກະເປົາປະຈຳວັນ (End-of-Day Shift & Cash Position Summary) ດຶງອອກຈາກລະບົບ DCommerce School System
        </div>
    </body>
    </html>
    `;
};

export const generateUserShiftSummarySlipHTML = (user, companyData) => {
    console.log('🧾 GENERATING INDIVIDUAL USER SHIFT SLIP PRINT HTML');
    const logoUrl = getCompanyLogoUrl(companyData);
    const shift = user.shift || {};
    const statusColor = shift.status === 'CLOSED' ? '#c62828' : '#2e7d32';

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Shift Slip - ${user.userName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        body { font-family: 'Noto Sans Lao', Arial, sans-serif; font-size: 12px; line-height: 1.4; width: 76mm; margin: 0 auto; padding: 10px; color: #111; }
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .font-bold { font-weight: bold; }
        .divider { border-top: 1px dashed #444; margin: 8px 0; }
        .double-divider { border-top: 2px solid #000; margin: 10px 0; }
        .row { display: flex; justify-content: space-between; margin-bottom: 3px; }
        .highlight-box { background: #f0f0f0; border: 1px solid #ccc; padding: 6px; border-radius: 4px; margin: 8px 0; }
    </style>
    </head>
    <body>
        <div class="text-center">
            ${logoUrl ? `<img src="${logoUrl}" style="height: 35px; max-width: 100px; margin-bottom: 4px;" alt="Logo" /><br>` : ''}
            <div class="font-bold" style="font-size: 14px;">${companyData.name || 'DCommerce School'}</div>
            <div style="font-size: 10px; color: #555;">ສະຫຼຸບຍອດປິດກະເປົາ (Cashier Shift Slip)</div>
        </div>

        <div class="divider"></div>

        <div class="row">
            <span>Cashier / ພະນັກງານ:</span>
            <span class="font-bold">${user.userName} (${user.userCode})</span>
        </div>
        <div class="row">
            <span>Shift ID / ສະຖານະ:</span>
            <span class="font-bold">#${shift.id || '-'} (${shift.status || 'OPEN'})</span>
        </div>
        <div class="row">
            <span>ເວລາພິມ:</span>
            <span>${new Date().toLocaleString('en-GB')}</span>
        </div>

        <div class="divider"></div>

        <div class="font-bold" style="margin-bottom: 4px; color: #004d40;">📊 ລາຍລະອຽດເງິນສົດ (Cash Breakdown):</div>
        <div class="row">
            <span>1. ເງິນເປີດກະເປົາ (Opening Float):</span>
            <span>${formatNumber(user.openingCash)} LAK</span>
        </div>
        <div class="row" style="color: #2e7d32;">
            <span>2. ຕື່ມເງິນບັດ (${user.topupCount} ລາຍການ):</span>
            <span class="font-bold">+${formatNumber(user.topupIn)} LAK</span>
        </div>
        <div class="row" style="color: #c62828;">
            <span>3. ຖອນເງິນບັດ (${user.withdrawCount} ລາຍການ):</span>
            <span class="font-bold">-${formatNumber(user.withdrawOut)} LAK</span>
        </div>
        <div class="row">
            <span>4. POS ຂາຍເງິນສົດ (${user.posCashCount} ບິນ):</span>
            <span>+${formatNumber(user.posCashSales)} LAK</span>
        </div>
        <div class="row">
            <span>5. ຄ່າຮຽນເງິນສົດ (${user.feeCashCount} ບິນ):</span>
            <span>+${formatNumber(user.feeCashCollected)} LAK</span>
        </div>

        <div class="divider"></div>

        <div class="row">
            <span>ລວມເງິນສົດຮັບເຂົ້າ (Total Cash IN):</span>
            <span class="font-bold">+${formatNumber(user.totalCashIn)} LAK</span>
        </div>
        <div class="row">
            <span>ລວມເງິນສົດຈ່າຍອອກ (Total Cash OUT):</span>
            <span class="font-bold">-${formatNumber(user.totalCashOut)} LAK</span>
        </div>

        <div class="highlight-box">
            <div class="row font-bold" style="font-size: 13px; color: #004d40;">
                <span>ເງິນສົດຄວນມີໃນລີ້ນຊັກ:</span>
                <span>${formatNumber(user.expectedCashInDrawer)} LAK</span>
            </div>
            ${user.actualClosingCash !== null ? `
            <div class="row font-bold" style="font-size: 12px; margin-top: 4px;">
                <span>ເງິນສົດປິດຕົວຈິງ:</span>
                <span>${formatNumber(user.actualClosingCash)} LAK</span>
            </div>
            <div class="row" style="font-size: 11px; color: ${user.variance >= 0 ? '#2e7d32' : '#c62828'};">
                <span>ຜົນຕ່າງ (Over/Short):</span>
                <span>${user.variance > 0 ? '+' : ''}${formatNumber(user.variance)} LAK</span>
            </div>
            ` : ''}
        </div>

        <div class="font-bold" style="margin-top: 6px; font-size: 11px; color: #455a64;">💳 ທຸລະກຳບໍ່ໃຊ້ເງິນສົດ (Non-Cash):</div>
        <div class="row">
            <span>- ຍອດຂາຍບັດ NFC (${user.posNfcCount} ບິນ):</span>
            <span class="font-bold">${formatNumber(user.posNfcSales)} LAK</span>
        </div>
        <div class="row">
            <span>- ຍອດໂອນ/QR Code:</span>
            <span>${formatNumber(user.posTransferSales + user.feeTransferCollected)} LAK</span>
        </div>

        <div class="double-divider"></div>

        <div style="margin-top: 25px; text-align: center;">
            <div style="border-top: 1px dashed #666; width: 80%; margin: 0 auto 5px auto;"></div>
            <div style="font-size: 10px;">ລາຍເຊັນພະນັກງານ (Cashier Signature)</div>
        </div>
    </body>
    </html>
    `;
};

export const generateCashDropVoucherHTML = (transferData, companyData) => {
    console.log('🏦 GENERATING CASH DROP VOUCHER PRINT HTML');
    const logoUrl = getCompanyLogoUrl(companyData);
    const t = transferData || {};
    const fromAcc = t.fromAccount || {};
    const toAcc = t.toAccount || {};

    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>ໃບມອບ-ຮັບເງິນສົດປະຈຳວັນ (Cash Drop Voucher)</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        html, body { margin: 0; padding: 0; font-family: 'Noto Sans Lao', Arial, sans-serif; font-size: 12px; color: #222; }
        body { padding: 25px; max-width: 800px; margin: 0 auto; }
        
        .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #004d40; padding-bottom: 12px; margin-bottom: 20px; }
        .company-info h1 { margin: 0 0 4px 0; font-size: 18px; color: #004d40; font-weight: bold; }
        .company-info p { margin: 2px 0; font-size: 11px; color: #555; }
        
        .voucher-title { text-align: right; }
        .voucher-title h2 { margin: 0 0 4px 0; font-size: 16px; color: #004d40; font-weight: bold; }
        .voucher-title p { margin: 2px 0; font-size: 11px; color: #666; }

        .highlight-card { 
            background: #f0fdf4; 
            border: 2px solid #86efac; 
            border-radius: 8px; 
            padding: 16px; 
            text-align: center; 
            margin-bottom: 20px; 
        }
        .highlight-card .label { font-size: 12px; color: #166534; font-weight: 600; margin-bottom: 4px; }
        .highlight-card .amount { font-size: 26px; color: #14532d; font-weight: bold; }

        .info-grid { display: flex; gap: 20px; margin-bottom: 20px; }
        .info-box { flex: 1; background: #fafafa; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; font-size: 12px; }
        .info-box-title { font-weight: bold; color: #004d40; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; margin-bottom: 8px; }
        .row { display: flex; justify-content: space-between; margin-bottom: 5px; }

        .signature-section { display: flex; justify-content: space-between; margin-top: 50px; }
        .signature-box { text-align: center; width: 45%; border-top: 1px dashed #555; padding-top: 10px; font-size: 12px; }

        .footer-note { font-size: 10px; color: #888; text-align: center; margin-top: 30px; }
    </style>
    </head>
    <body>
        <div class="header">
            <div class="company-info">
                ${logoUrl ? `<img src="${logoUrl}" style="height: 45px; max-width: 160px; margin-bottom: 4px;" alt="Logo" /><br>` : ''}
                <h1>${companyData.name || 'ລະບົບໂຮງຮຽນ ແລະ ສູນການຄ້າ'}</h1>
                <p>${companyData.address || ''} | ໂທ: ${companyData.phone || '-'}</p>
            </div>
            <div class="voucher-title">
                <h2>ໃບມອບ-ຮັບເງິນສົດປະຈຳວັນ</h2>
                <div style="font-size: 11px; color: #666; font-weight: bold;">(END-OF-DAY CASH REMITTANCE VOUCHER)</div>
                <p><strong>ເລກທີໃບມອບ (Ref ID):</strong> ${t.referenceId ? t.referenceId.slice(0, 13) : '-'}</p>
                <p><strong>ວັນທີ & ເວລາ:</strong> ${new Date().toLocaleString('en-GB')}</p>
            </div>
        </div>

        <!-- Big Amount Card -->
        <div class="highlight-card">
            <div class="label">ຈຳນວນເງິນສົດທີ່ມອບເຂົ້າບັນຊີກາງ (Total Remitted Amount)</div>
            <div class="amount">${formatNumber(t.amount)} LAK</div>
        </div>

        <!-- Transfer Information Grid -->
        <div class="info-grid">
            <div class="info-box">
                <div class="info-box-title">📤 ບັນຊີຕົ້ນທາງ / ຜູ້ມອບ (Sender / Source Account)</div>
                <div class="row">
                    <span>ຊື່ບັນຊີ / ລີ້ນຊັກ:</span>
                    <strong>${fromAcc.name || 'Cashier Till'}</strong>
                </div>
                <div class="row">
                    <span>ເລກບັນຊີ:</span>
                    <span>${fromAcc.number || '-'}</span>
                </div>
                <div class="row">
                    <span>ຜູ້ມອບ (Cashier):</span>
                    <strong>${t.cashierName || 'Cashier'}</strong>
                </div>
                <div class="row" style="color: #666;">
                    <span>ຍອດເຫຼືອໃນລີ້ນຊັກ (New Float):</span>
                    <span>${formatNumber(fromAcc.newBalance)} LAK</span>
                </div>
            </div>

            <div class="info-box">
                <div class="info-box-title">📥 ບັນຊີປາຍທາງ / ຜູ້ຮັບມອບ (Receiver / Destination Account)</div>
                <div class="row">
                    <span>ຊື່ບັນຊີກາງ / ຕູ້ເຊບ:</span>
                    <strong style="color: #004d40;">${toAcc.name || 'Central Vault'}</strong>
                </div>
                <div class="row">
                    <span>ເລກບັນຊີ:</span>
                    <span>${toAcc.number || '-'}</span>
                </div>
                <div class="row">
                    <span>ຜູ້ຮັບມອບ (Receiver):</span>
                    <strong>${t.receiverName || 'Finance Officer / Treasurer'}</strong>
                </div>
                <div class="row" style="color: #666;">
                    <span>ຍອດລວມໃໝ່ໃນບັນຊີກາງ:</span>
                    <span>${formatNumber(toAcc.newBalance)} LAK</span>
                </div>
            </div>
        </div>

        <div style="background: #fafafa; border: 1px solid #e5e7eb; border-radius: 6px; padding: 10px 14px; margin-bottom: 25px; font-size: 11px;">
            <strong>ໝາຍເຫດ (Remarks):</strong> ${t.description || 'ມອບເງິນສົດປິດກະເປົາປະຈຳວັນ (End-of-Day Cash Sweep)'}
        </div>

        <!-- Signatures -->
        <div class="signature-section">
            <div class="signature-box">
                <strong>ຜູ້ມອບເງິນສົດ (Cashier / Sender)</strong><br><br><br>
                ລາຍເຊັນ: ______________________<br>
                ຊື່ແຈ້ງ: ${t.cashierName || '................................'}<br>
                ວັນທີ: ____/____/________
            </div>
            <div class="signature-box">
                <strong>ຜູ້ຮັບມອບເງິນສົດ (Treasurer / Receiver)</strong><br><br><br>
                ລາຍເຊັນ: ______________________<br>
                ຊື່ແຈ້ງ: ${t.receiverName || '................................'}<br>
                ວັນທີ: ____/____/________
            </div>
        </div>

        <div class="footer-note">
            ໃບມອບ-ຮັບເງິນສົດປະຈຳວັນນີ້ສ້າງຂຶ້ນໂດຍລະບົບ DCommerce School Cashless System ເພື່ອໃຊ້ເປັນຫຼັກຖານການມອບເງິນສົດທາງບັນຊີ.
        </div>
    </body>
    </html>
    `;
};

/**
 * Escapes HTML characters safely
 */
const escapeHtmlTag = (unsafe) => {
    if (unsafe === null || unsafe === undefined) return '';
    return String(unsafe)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

/**
 * Generates Base64 barcode data URL synchronously
 */
const generateBarcodeDataUrlHelper = (barcodeVal) => {
    if (!barcodeVal) return '';
    if (typeof document !== 'undefined') {
        try {
            const canvas = document.createElement('canvas');
            JsBarcode(canvas, String(barcodeVal), {
                format: 'CODE128',
                displayValue: false,
                width: 2,
                height: 38,
                margin: 0
            });
            return canvas.toDataURL('image/png');
        } catch (err) {
            console.error('Error generating barcode in printTemplates:', err);
        }
    }
    return '';
};

/**
 * Generates HTML for Shelf Price Tags (40x80 mm) formatted for A4 sheet printing.
 * Allows traditional printer selection via standard print dialog.
 * 
 * @param {Object|Array} productOrList - Product object or array of products
 * @param {Object} companyData - Company details
 * @param {string} currencyStr - Currency symbol/code (e.g. 'LAK', '₭', 'THB')
 * @param {number} copies - Number of tag copies to render (default: 1)
 * @returns {string} Full HTML document
 */
export const generateShelfPriceTagHTML = (productOrList, companyData = {}, currencyStr = 'LAK', copies = 1) => {
    console.log('🏷️ GENERATING A4 SHELF PRICE TAG HTML (40x80 mm)');
    const logoUrl = getCompanyLogoUrl(companyData);
    const companyName = companyData.name || companyData.company_name || companyData.companyName || 'D-COMMERCE';

    // Normalize input
    const isSingleProduct = !Array.isArray(productOrList);
    const rawList = Array.isArray(productOrList) ? productOrList : [productOrList];

    // Build template array of processed product objects
    const processedProducts = rawList.map((product) => {
        const proName = product.pro_name || product.name || 'Product';
        const proDesc = product.pro_desc || product.desc || product.pro_desc_lao || (product.product_code ? `SKU: ${product.product_code}` : '') || '';
        const rawPrice = product.pro_price !== undefined ? product.pro_price : (product.price || 0);
        const formattedPrice = product.formattedPrice || formatNumber(rawPrice);
        const barcodeVal = product.barCode || product.barcode || product.pro_id || '';
        const barcodeImg = product.barcodeImage || generateBarcodeDataUrlHelper(barcodeVal);
        const categoryDesc = product.pro_category_desc || product.categoryName || product.category || 'SHELF TAG';
        const ccy = product.currency || currencyStr;

        return {
            proName,
            proDesc,
            rawPrice,
            formattedPrice,
            barcodeVal,
            barcodeImg,
            categoryDesc,
            currency: ccy,
            copies: parseInt(product.printQty || product.copies || copies || 1, 10) || 1
        };
    });

    const renderSingleTag = (p) => `
        <div class="shelf-tag">
            <!-- Top Header: Company Logo & Category Badge -->
            <div class="tag-header">
                <div class="tag-logo-box">
                    ${logoUrl 
                        ? `<img src="${logoUrl}" alt="Logo" class="tag-logo" />` 
                        : `<span class="tag-company-text">${escapeHtmlTag(companyName)}</span>`
                    }
                </div>
                <div class="tag-badge">
                    ${escapeHtmlTag(p.categoryDesc)}
                </div>
            </div>

            <!-- Product Details: Name & Description -->
            <div class="tag-body">
                <div class="tag-product-name" title="${escapeHtmlTag(p.proName)}">
                    ${escapeHtmlTag(p.proName)}
                </div>
                ${p.proDesc ? `<div class="tag-product-desc">${escapeHtmlTag(p.proDesc)}</div>` : ''}
            </div>

            <!-- Bottom Section: Barcode & Sell Price Box -->
            <div class="tag-footer">
                <!-- Barcode Area -->
                <div class="tag-barcode-box">
                    ${p.barcodeImg ? `<img src="${p.barcodeImg}" alt="Barcode" class="tag-barcode-img" />` : ''}
                    <div class="tag-barcode-text">${escapeHtmlTag(p.barcodeVal)}</div>
                </div>

                <!-- Price Box -->
                <div class="tag-price-box">
                    <div class="tag-price-label">ລາຄາ / PRICE</div>
                    <div class="tag-price-value">
                        ${p.formattedPrice} <span class="tag-price-currency">${escapeHtmlTag(p.currency)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Generate initial tags HTML
    const initialTags = [];
    if (isSingleProduct && processedProducts.length > 0) {
        const p = processedProducts[0];
        const qty = parseInt(copies || p.copies || 1, 10) || 1;
        for (let i = 0; i < qty; i++) {
            initialTags.push(renderSingleTag(p));
        }
    } else {
        processedProducts.forEach((p) => {
            const qty = p.copies || 1;
            for (let i = 0; i < qty; i++) {
                initialTags.push(renderSingleTag(p));
            }
        });
    }

    const initialTotalCount = initialTags.length;
    const initialPagesCount = Math.ceil(initialTotalCount / 12) || 1;

    // JSON encoded for client-side dynamic regeneration
    const encodedProductsJson = JSON.stringify(processedProducts).replace(/</g, '\\u003c');

    return `
    <!DOCTYPE html>
    <html lang="lo">
    <head>
        <meta charset="utf-8">
        <title>Shelf Price Tags (40x80 mm)</title>
        <style>
            @font-face {
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
            }
            @font-face {
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
            }
            
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                font-family: 'Noto Sans Lao', 'DM Sans', system-ui, -apple-system, sans-serif;
            }

            body {
                background-color: #f1f5f9;
                color: #0f172a;
                padding: 15px;
            }

            /* Floating preview toolbar */
            .preview-toolbar {
                max-width: 184mm;
                margin: 0 auto 15px auto;
                background: #1e293b;
                color: #fff;
                padding: 12px 18px;
                border-radius: 10px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                box-shadow: 0 4px 14px rgba(0,0,0,0.18);
            }
            .preview-toolbar .toolbar-left {
                display: flex;
                flex-direction: column;
            }
            .preview-toolbar .toolbar-title {
                font-size: 14px;
                font-weight: 800;
                color: #ffffff;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            .preview-toolbar .info-text {
                font-size: 11.5px;
                color: #94a3b8;
                margin-top: 2px;
            }
            .preview-toolbar .toolbar-controls {
                display: flex;
                align-items: center;
                gap: 6px;
                flex-wrap: wrap;
            }
            .preview-toolbar .btn-chip {
                background: #334155;
                color: #e2e8f0;
                border: 1px solid #475569;
                padding: 5px 10px;
                font-size: 11.5px;
                font-weight: 700;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.15s ease;
            }
            .preview-toolbar .btn-chip:hover {
                background: #475569;
                color: #fff;
                border-color: #64748b;
            }
            .preview-toolbar .btn-chip-active {
                background: #0284c7 !important;
                color: #ffffff !important;
                border-color: #38bdf8 !important;
            }
            .preview-toolbar .qty-stepper {
                display: flex;
                align-items: center;
                background: #0f172a;
                border: 1px solid #475569;
                border-radius: 6px;
                overflow: hidden;
            }
            .preview-toolbar .btn-step {
                background: transparent;
                color: #fff;
                border: none;
                width: 28px;
                height: 28px;
                font-size: 15px;
                font-weight: bold;
                cursor: pointer;
            }
            .preview-toolbar .btn-step:hover {
                background: #334155;
            }
            .preview-toolbar .qty-input {
                width: 44px;
                height: 28px;
                text-align: center;
                background: transparent;
                border: none;
                color: #38bdf8;
                font-size: 13px;
                font-weight: 800;
                outline: none;
            }
            .preview-toolbar .btn-print {
                background: #0284c7;
                color: #fff;
                border: none;
                padding: 8px 18px;
                font-size: 13px;
                font-weight: 800;
                border-radius: 6px;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                transition: background 0.2s;
                box-shadow: 0 2px 6px rgba(2, 132, 199, 0.4);
            }
            .preview-toolbar .btn-print:hover {
                background: #0369a1;
            }
            .preview-toolbar .btn-close {
                background: #475569;
                color: #fff;
                border: none;
                padding: 8px 14px;
                font-size: 13px;
                font-weight: 600;
                border-radius: 6px;
                cursor: pointer;
            }

            /* A4 Sheet Container (2 Columns of 80mm tags = fits 12 tags per A4 sheet) */
            .a4-container {
                width: 100%;
                max-width: 180mm;
                margin: 0 auto;
                display: grid;
                grid-template-columns: repeat(2, 80mm);
                gap: 5mm 6mm;
                justify-content: center;
            }

            /* 80mm x 40mm Shelf Tag Card */
            .shelf-tag {
                width: 80mm;
                height: 40mm;
                max-width: 80mm;
                max-height: 40mm;
                background: #ffffff;
                border: 1px dashed #94a3b8;
                border-radius: 4px;
                padding: 2.2mm 3.2mm;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: relative;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                page-break-inside: avoid;
                break-inside: avoid;
            }

            /* Top Header */
            .tag-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 6mm;
                border-bottom: 1px solid #e2e8f0;
                padding-bottom: 0.8mm;
            }
            .tag-logo-box {
                display: flex;
                align-items: center;
                max-width: 44mm;
                overflow: hidden;
            }
            .tag-logo {
                max-height: 18px;
                max-width: 42mm;
                object-fit: contain;
                display: block;
            }
            .tag-company-text {
                font-size: 8px;
                font-weight: 800;
                color: #1e293b;
                letter-spacing: 0.3px;
                text-transform: uppercase;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .tag-badge {
                font-size: 7px;
                font-weight: 700;
                color: #475569;
                background: #f1f5f9;
                padding: 1px 4px;
                border-radius: 3px;
                border: 1px solid #cbd5e1;
                text-transform: uppercase;
                white-space: nowrap;
                max-width: 28mm;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            /* Product Name & Description Body */
            .tag-body {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;
                padding: 1mm 0;
            }
            .tag-product-name {
                font-size: 11.5px;
                font-weight: 800;
                line-height: 1.2;
                color: #0f172a;
                max-height: 28px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-word;
            }
            .tag-product-desc {
                font-size: 7.8px;
                color: #64748b;
                margin-top: 1px;
                line-height: 1.1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            /* Bottom Barcode and Price */
            .tag-footer {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                height: 14mm;
            }
            .tag-barcode-box {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                max-width: 42mm;
                overflow: hidden;
            }
            .tag-barcode-img {
                max-width: 42mm;
                height: 9.5mm;
                object-fit: fill;
                display: block;
            }
            .tag-barcode-text {
                font-family: 'Courier New', Courier, monospace;
                font-size: 7.5px;
                font-weight: 700;
                color: #334155;
                letter-spacing: 0.5px;
                line-height: 1;
                margin-top: 1px;
            }

            .tag-price-box {
                background: #f8fafc;
                border: 1.5px solid #0284c7;
                border-radius: 4px;
                padding: 1.5px 3.5px;
                text-align: right;
                min-width: 28mm;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
            }
            .tag-price-label {
                font-size: 6.5px;
                font-weight: 800;
                color: #0369a1;
                text-transform: uppercase;
                letter-spacing: 0.2px;
                line-height: 1;
            }
            .tag-price-value {
                font-size: 14px;
                font-weight: 900;
                color: #0f172a;
                line-height: 1.1;
                letter-spacing: -0.2px;
                white-space: nowrap;
                margin-top: 1px;
            }
            .tag-price-currency {
                font-size: 8px;
                font-weight: 800;
                color: #0284c7;
            }

            /* Print Media Query */
            @media print {
                @page {
                    size: A4 portrait;
                    margin: 8mm 6mm;
                }
                body {
                    background: #ffffff !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }
                .no-print {
                    display: none !important;
                }
                .a4-container {
                    max-width: 100% !important;
                    margin: 0 auto !important;
                    gap: 4mm 6mm !important;
                }
                .shelf-tag {
                    box-shadow: none !important;
                    border: 1px dashed #94a3b8 !important;
                    page-break-inside: avoid !important;
                    break-inside: avoid !important;
                }
            }
        </style>
    </head>
    <body>
        <div class="preview-toolbar no-print">
            <div class="toolbar-left">
                <div class="toolbar-title">
                    <span>🏷️ ປ້າຍລາຄາຕິດຊັ້ນ / Shelf Price Tag (40x80 mm)</span>
                </div>
                <div class="info-text">
                    <span id="tag-count-display">${initialTotalCount}</span> ປ້າຍ 
                    (ປະມານ <span id="page-count-display">${initialPagesCount}</span> ໜ້າ A4 • 12 ປ້າຍ/ໜ້າ)
                </div>
            </div>

            <div class="toolbar-controls">
                <span style="font-size: 11.5px; color: #cbd5e1; margin-right: 2px;">ຕື່ມປ້າຍ (Quantity):</span>
                <div class="qty-stepper">
                    <button class="btn-step" onclick="changeQty(-1)" title="Decrease 1">-</button>
                    <input id="qtyInput" class="qty-input" type="number" value="${initialTotalCount}" min="1" max="120" onchange="setCustomQty(this.value)" />
                    <button class="btn-step" onclick="changeQty(1)" title="Increase 1">+</button>
                </div>
                <button class="btn-chip" onclick="setCustomQty(1)">1 ໃບ</button>
                <button class="btn-chip" onclick="setCustomQty(6)">6 ໃບ</button>
                <button class="btn-chip btn-chip-active" onclick="setCustomQty(12)" title="Fill 1 Full A4 Page">12 ໃບ (ເຕັມ 1 ໜ້າ A4)</button>
                <button class="btn-chip" onclick="setCustomQty(24)" title="Fill 2 Full A4 Pages">24 ໃບ (2 ໜ້າ)</button>
            </div>

            <div style="display: flex; gap: 8px;">
                <button class="btn-print" onclick="window.print()">
                    🖨️ Print / ພິມ
                </button>
                <button class="btn-close" onclick="window.close()">
                    ✕ ປິດ
                </button>
            </div>
        </div>

        <div id="tagsGrid" class="a4-container">
            ${initialTags.join('')}
        </div>

        <script>
            const productsData = ${encodedProductsJson};
            const isSingle = ${isSingleProduct};
            const logoUrl = ${JSON.stringify(logoUrl)};
            const companyName = ${JSON.stringify(companyName)};

            function escapeHtml(str) {
                if (!str) return '';
                return String(str)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#039;');
            }

            function createTagHTML(p) {
                return \`
                <div class="shelf-tag">
                    <div class="tag-header">
                        <div class="tag-logo-box">
                            \${logoUrl 
                                ? \`<img src="\${logoUrl}" alt="Logo" class="tag-logo" />\` 
                                : \`<span class="tag-company-text">\${escapeHtml(companyName)}</span>\`
                            }
                        </div>
                        <div class="tag-badge">
                            \${escapeHtml(p.categoryDesc)}
                        </div>
                    </div>
                    <div class="tag-body">
                        <div class="tag-product-name" title="\${escapeHtml(p.proName)}">
                            \${escapeHtml(p.proName)}
                        </div>
                        \${p.proDesc ? \`<div class="tag-product-desc">\${escapeHtml(p.proDesc)}</div>\` : ''}
                    </div>
                    <div class="tag-footer">
                        <div class="tag-barcode-box">
                            \${p.barcodeImg ? \`<img src="\${p.barcodeImg}" alt="Barcode" class="tag-barcode-img" />\` : ''}
                            <div class="tag-barcode-text">\${escapeHtml(p.barcodeVal)}</div>
                        </div>
                        <div class="tag-price-box">
                            <div class="tag-price-label">ລາຄາ / PRICE</div>
                            <div class="tag-price-value">
                                \${p.formattedPrice} <span class="tag-price-currency">\${escapeHtml(p.currency)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                \`;
            }

            function setCustomQty(qty) {
                let targetQty = parseInt(qty, 10);
                if (isNaN(targetQty) || targetQty < 1) targetQty = 1;
                if (targetQty > 240) targetQty = 240;

                const input = document.getElementById('qtyInput');
                if (input) input.value = targetQty;

                // Update active chip styling
                document.querySelectorAll('.preview-toolbar .btn-chip').forEach(btn => {
                    const txt = btn.innerText || '';
                    if (txt.startsWith(targetQty + ' ໃບ')) {
                        btn.classList.add('btn-chip-active');
                    } else {
                        btn.classList.remove('btn-chip-active');
                    }
                });

                const grid = document.getElementById('tagsGrid');
                if (!grid) return;

                let html = '';
                if (isSingle && productsData.length > 0) {
                    const p = productsData[0];
                    for (let i = 0; i < targetQty; i++) {
                        html += createTagHTML(p);
                    }
                } else if (productsData.length > 0) {
                    // Loop through products list repeatedly until targetQty is reached
                    for (let i = 0; i < targetQty; i++) {
                        const p = productsData[i % productsData.length];
                        html += createTagHTML(p);
                    }
                }

                grid.innerHTML = html;

                // Update stats
                const countElem = document.getElementById('tag-count-display');
                if (countElem) countElem.innerText = targetQty;
                const pageElem = document.getElementById('page-count-display');
                if (pageElem) pageElem.innerText = Math.ceil(targetQty / 12) || 1;
            }

            function changeQty(diff) {
                const input = document.getElementById('qtyInput');
                const cur = parseInt(input ? input.value : 1, 10) || 1;
                setCustomQty(cur + diff);
            }

            window.onload = function() {
                setTimeout(function() {
                    try {
                        window.focus();
                        window.print();
                    } catch (e) {
                        console.error('Auto print error:', e);
                    }
                }, 400);
            };
        </script>
    </body>
    </html>
    `;
};

/**
 * Opens a traditional print window for A4 documents / Shelf tags allowing OS printer selection
 */
export const executeTraditionalPrint = (htmlContent) => {
    const printWin = window.open(
        '',
        '_blank',
        'left=50,top=50,width=1050,height=800,toolbar=0,scrollbars=1,status=0'
    );
    if (!printWin) {
        if (typeof alert !== 'undefined') {
            alert('Pop-up was blocked. Please allow pop-ups for this application.');
        }
        return;
    }
    printWin.document.open();
    printWin.document.write(htmlContent);
    printWin.document.close();
};