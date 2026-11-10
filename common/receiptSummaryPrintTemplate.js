// ~/common/receiptSummaryPrintTemplate.js
// Dedicated A4 Print Template for Detailed Receipt Summary Report

const formatNumber = (val) => {
    return new Intl.NumberFormat().format(val || 0)
}

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

const getBaseUrl = () => {
    let url = ''
    if (typeof window !== 'undefined') {
        const savedUrl = window.localStorage.getItem('api_base_url')
        if (savedUrl) {
            url = savedUrl
        } else if (window.$nuxt && window.$nuxt.$axios && window.$nuxt.$axios.defaults.baseURL) {
            url = window.$nuxt.$axios.defaults.baseURL
        } else if (window.location && window.location.origin && window.location.origin.startsWith('http')) {
            url = window.location.origin
        }
    }
    if (!url) {
        url = 'http://150.95.31.23:8052'
    }
    return url.replace(/\/api\/?$/, '').replace(/\/+$/, '')
}

const getCompanyLogoUrl = (companyData) => {
    if (!companyData) return ''
    const baseUrl = getBaseUrl()

    const profilePath = companyData.profile_image_path || companyData.apiData?.profile_image_path || companyData.imageUrl
    if (profilePath && profilePath !== 'default-logo.png' && profilePath !== 'default-logo.jpg') {
        if (profilePath.startsWith('http://') || profilePath.startsWith('https://') || profilePath.startsWith('data:image') || profilePath.startsWith('blob:')) {
            return profilePath
        }
        return `${baseUrl}/${profilePath.replace(/^\//, '')}`
    }

    const logoName = companyData.companyLogo || companyData.ticketLogo || companyData.logo || companyData.dcLogo
    if (logoName && typeof logoName === 'string') {
        if (logoName.startsWith('http://') || logoName.startsWith('https://')) return logoName
        return `${baseUrl}/uploads/${logoName.replace(/^\//, '')}`
    }

    return ''
}

const convertToLocalCurrency = (amount, fromCurrency, localCurrency) => {
    if (!fromCurrency || !localCurrency || fromCurrency.code === localCurrency.code) {
        return amount
    }

    let amountInLAK = amount
    if (fromCurrency.code !== 'LAK') {
        if (fromCurrency.exchangeDirection === 'local_to_foreign') {
            amountInLAK = amount / (fromCurrency.rate || 1)
        } else {
            amountInLAK = amount * (fromCurrency.rate || 1)
        }
    }

    if (localCurrency.code === 'LAK') {
        return amountInLAK
    }
    return amountInLAK / (localCurrency.rate || 1)
}

export const generateReceiptSummaryReportHTML = (headers, companyData, currencyList = [], filters = {}) => {
    const logoUrl = getCompanyLogoUrl(companyData)
    const localCurrency = currencyList.find(c => c.isLocalCCY === true || c.isLocalCCY === 1) || { code: 'LAK', rate: 1 }

    let totalSalesLocal = 0
    let totalDiscountLocal = 0
    let totalCostLocal = 0
    let totalGrossProfitLocal = 0

    const linesHTML = headers.map((header) => {
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
                    const actualSellingPrice = parseFloat(line.price !== undefined && line.price !== null ? line.price : (line.product?.pro_price || 0))
                    const sellingPriceLAK = actualSellingPrice * lineRate
                    if (sellingPriceLAK > 0 && cardCostLAK > sellingPriceLAK * 1.5 && cardRate > 10) {
                        cardCostLAK = parseFloat(card.cost || 0)
                    }

                    lineCostLAK += cardCostLAK
                })
            } else {
                // Fallback cost calculation (when no stock cards exist)
                let unitCost = parseFloat(line.product?.cost_price || 0)
                const unitPrice = parseFloat(line.price !== undefined && line.price !== null ? line.price : (line.product?.pro_price || 0))
                // If product cost in master was updated higher than actual selling price and no card exists, cap cost at unitPrice to prevent post-sale price edit anomalies
                if (unitPrice > 0 && unitCost > unitPrice) {
                    unitCost = unitPrice
                }
                const qty = parseFloat(line.quantity || 0)
                lineCostLAK += qty * unitCost * lineRate
            }

            // If line is a return/buyback line, cost should adjust inversely rather than adding positive cost
            const isReturnLine = line.isReturn === true || line.isReturn === 1 || line.packagingAction === 'RETURNED' || parseFloat(line.total || 0) < 0
            if (isReturnLine && lineCostLAK > 0) {
                lineCostLAK = -Math.abs(lineCostLAK)
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
            page-break-inside: avoid;
            break-inside: avoid;
        }
        .totals-box { 
            width: 450px; 
            max-width: 100%;
            border: 1px solid #ccc; 
            background: #fdfdfd;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .total-row { 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            gap: 12px;
            padding: 7px 12px; 
            border-bottom: 1px solid #eee; 
            font-size: 11px;
        }
        .total-row .total-label {
            white-space: nowrap;
            color: #444;
        }
        .total-row .total-value {
            text-align: right;
            white-space: nowrap;
            margin-left: auto;
        }
        .total-row.final { 
            border-bottom: none; 
            background-color: #01532B; 
            font-weight: bold; 
            color: white; 
            font-size: 12px;
        }
        .total-row.final .total-label {
            color: white;
        }
        
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
            border-top: 1px dashed #ccc;
            page-break-inside: avoid;
            break-inside: avoid;
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
            .footer { page-break-inside: avoid; break-inside: avoid; }
            .totals-container { page-break-inside: avoid; break-inside: avoid; }
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
                    <span class="total-label">ຍອດຂາຍລວມ (Gross Sales):</span>
                    <span class="total-value"><strong>${formatNumber(totalSalesLocal + totalDiscountLocal)} ${localCurrency.code}</strong></span>
                </div>
                <div class="total-row">
                    <span class="total-label">ສ່ວນຫຼຸດລວມ (Total Discount):</span>
                    <span class="total-value" style="color: #c62828;"><strong>${formatNumber(totalDiscountLocal)} ${localCurrency.code}</strong></span>
                </div>
                <div class="total-row">
                    <span class="total-label">ຍອດຂາຍສຸດທິ (Net Revenue):</span>
                    <span class="total-value"><strong>${formatNumber(totalSalesLocal)} ${localCurrency.code}</strong></span>
                </div>
                <div class="total-row">
                    <span class="total-label">ຕົ້ນທຶນລວມ (Total Cost):</span>
                    <span class="total-value"><strong>${formatNumber(totalCostLocal)} ${localCurrency.code}</strong></span>
                </div>
                <div class="total-row final">
                    <span class="total-label">ກຳໄລຂັ້ນຕົ້ນລວມ (Gross Profit):</span>
                    <span class="total-value"><strong>${formatNumber(totalGrossProfitLocal)} ${localCurrency.code}</strong></span>
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
  `
}

