// ~/common/printTemplatesWithOriginalCurrency.js
// Shows each line in original currency, but summarized totals by currency

// Helper to format numbers
const formatNumber = (val) => {
  return new Intl.NumberFormat().format(val || 0)
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

// Convert amount to local currency for totals summary
const convertToLocalCurrency = (amount, fromCurrency, localCurrency) => {
  if (fromCurrency.isLocalCCY) {
    return amount // Already local currency
  }
  
  // Foreign currency to local: amount / foreign_rate
  return amount / fromCurrency.rate
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

  // Generate lines HTML - SHOW ORIGINAL CURRENCY FOR EACH LINE
  const linesHTML = header.lines?.map((line, index) => {
    const lineCurrency = getCurrency(line.currencyId, currencyList)
    
    console.log(`📦 Line ${index + 1}: ${line.product?.pro_name}`)
    console.log(`   Original: ${line.price} ${lineCurrency.code} (no conversion)`)

    return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td style="text-align: center;">${line.product?.id}</td>
        <td>
          <span class="pro-name">${line.product?.pro_name || 'Unknown Product'}</span>
          ${line.product?.barCode ? `<br><small style="color: #888;">Barcode: ${line.product?.barCode}</small>` : ''}
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
            <div class="company-info">
                <h1>${companyData.name || 'COMPANY NAME'}</h1>
                <p>${companyData.address || ''}</p>
                <p>Tel: ${companyData.tel || ''}</p>
                <p>Email: ${companyData.email || ''}</p>
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
                <div><span class="field-label">ເລກອ້າງອີງ:</span> ${header.referenceNo || '-'}</div>
            </div>
            <div class="info-col right">
                <div><span class="field-label">ເລກບິນ:</span> <b>RCP-${header.id}</b></div>
                <div><span class="field-label">ວັນທີ:</span> ${formatDate(header.bookingDate)}</div>
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

  // Generate lines HTML - SHOW ORIGINAL CURRENCY FOR EACH LINE
  const linesHTML = header.lines?.map((line, index) => {
    const lineCurrency = getCurrency(line.currencyId, currencyList)
    
    console.log(`📦 Invoice Line ${index + 1}: ${line.product?.pro_name}`)
    console.log(`   Original: ${line.price} ${lineCurrency.code} (no conversion)`)

    return `
      <tr>
        <td style="text-align: center;">${index + 1}</td>
        <td>
          <span class="pro-name">${line.product?.pro_name || 'Unknown Product'}</span>
          ${line.product?.pro_id ? `<span class="pro-id"> (${line.product?.pro_id})</span>` : ''}
          ${line.isGift ? '<small style="color: #28a745;"> [Gift]</small>' : ''}
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
            text-align: right; 
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
        <div class="header-container">
            <div class="company-info">
                <h1>${companyData.name || 'COMPANY NAME'}</h1>
                <p>${companyData.address || ''}</p>
                <p>Tel: ${companyData.tel || ''}</p>
                <p>Email: ${companyData.email || ''}</p>
            </div>
            <div class="invoice-title">
                <h2>INVOICE</h2>
                <span>ໃບແຈ້ງໜີ້</span>
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
            </div>
            <div class="info-col right">
                <div><span class="field-label">ເລກໃບແຈ້ງໜີ້:</span> <b>INV-${header.id}</b></div>
                <div><span class="field-label">ວັນທີ:</span> ${formatDate(header.bookingDate)}</div>
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
        <div class="footer-row">
            <div class="sign-box">Customer Signature<br>ລາຍເຊັນລູກຄ້າ</div>
            <div class="sign-box">Authorized By<br>ຜູ້ອະນຸມັດ</div>
        </div>
    </div>
    </body>
    </html>
  `
}