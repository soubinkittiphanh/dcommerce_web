// ~/common/printTemplates.js

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

const calculateTotalDiscount = (header) => {
  if (!header || !header.lines) return 0
  let totalDiscount = 0
  for (const line of header.lines) {
    totalDiscount += line.discount || 0
  }
  totalDiscount += header.discount || 0
  return totalDiscount
}

// ==========================================
// 1. INVOICE TEMPLATE (For Sales)
// ==========================================
export const generateInvoiceHTML = (header, companyData) => {
  const totalDiscount = calculateTotalDiscount(header)
  
  const linesHTML = header.lines?.map((line, index) => `
    <tr>
      <td style="text-align: center;">${index + 1}</td>
      <td>
        <span class="pro-name">${line.product?.pro_name || 'Unknown Product'}</span>
        ${line.product?.pro_id ? `<span class="pro-id"> (${line.product?.pro_id})</span>` : ''}
        ${line.isGift ? '<small> [Gift]</small>' : ''}
      </td>
      <td style="text-align: center;">${formatNumber(line.quantity)}</td>
      <td style="text-align: center;">${line.unit?.name || ''}</td>
      <td style="text-align: right;">${formatNumber(line.price)}</td>
      <td style="text-align: right;">${formatNumber(line.discount)}</td>
      <td style="text-align: right;"><strong>${formatNumber(line.total)}</strong></td>
    </tr>
  `).join('') || '<tr><td colspan="7" style="text-align: center;">No items</td></tr>'

  return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Invoice #${header.id}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
        body { font-family: 'Noto Sans Lao', Arial, sans-serif; font-size: 11px; line-height: 1.2; padding: 10px; }
        .header-container { display: flex; justify-content: space-between; border-bottom: 2px solid #000; padding-bottom: 5px; margin-bottom: 10px; }
        .company-info h1 { font-size: 16px; margin: 0; text-transform: uppercase; }
        .invoice-title { text-align: right; border: 2px solid #000; padding: 5px 15px; }
        .invoice-title h2 { margin: 0; font-size: 18px; line-height: 1; }
        .info-box { width: 100%; border: 1px solid #000; margin-bottom: 10px; padding: 5px; display: flex; }
        .info-col { flex: 1; }
        .info-col.right { border-left: 1px solid #000; padding-left: 10px; flex: 0 0 250px; }
        .field-label { font-weight: bold; margin-right: 5px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
        th { border: 1px solid #000; background-color: #eee; padding: 4px; font-size: 10px; font-weight: bold; }
        td { border: 1px solid #000; padding: 4px; }
        .totals-container { display: flex; justify-content: flex-end; }
        .totals-box { width: 250px; border: 1px solid #000; }
        .total-row { display: flex; justify-content: space-between; padding: 3px 5px; border-bottom: 1px solid #ccc; }
        .total-row.final { border-bottom: none; background-color: #eee; font-weight: bold; border-top: 1px solid #000; }
        .footer { margin-top: 20px; display: flex; justify-content: space-between; text-align: center; }
        .sign-box { border-top: 1px dashed #000; width: 150px; padding-top: 5px; font-size: 10px; }
        @media print { body { margin: 0; padding: 0; } @page { size: A4; margin: 0.5cm; } }
    </style>
    </head>
    <body>
    <div class="header-container">
        <div class="company-info">
            <h1>${companyData.name || 'COMPANY NAME'}</h1>
            <p>${companyData.address || ''} | Tel: ${companyData.tel || ''}</p>
        </div>
        <div class="invoice-title">
            <h2>INVOICE</h2>
            <span>ໃບແຈ້ງໜີ້</span>
        </div>
    </div>
    <div class="info-box">
        <div class="info-col">
            <div><span class="field-label">Customer:</span> <b>${header.client?.name || header.client?.company || 'Walk-in'}</b></div>
            <div><span class="field-label">Tel:</span> ${header.client?.telephone || '-'}</div>
            <div><span class="field-label">Addr:</span> ${header.client?.address || '-'}</div>
        </div>
        <div class="info-col right">
            <div><span class="field-label">No:</span> <b>${header.id}</b></div>
            <div><span class="field-label">Date:</span> ${formatDate(header.bookingDate)}</div>
            <div><span class="field-label">Pay:</span> ${header.payment?.payment_name || '-'}</div>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th width="5%">#</th><th width="40%">Description</th><th width="10%">Qty</th><th width="10%">Unit</th>
                <th width="12%">Price</th><th width="10%">Disc.</th><th width="13%">Amount</th>
            </tr>
        </thead>
        <tbody>${linesHTML}</tbody>
    </table>
    <div class="totals-container">
        <div class="totals-box">
            <div class="total-row"><span>Subtotal:</span><span>${formatNumber(header.total + totalDiscount)}</span></div>
            ${totalDiscount > 0 ? `<div class="total-row"><span>Discount:</span><span>-${formatNumber(totalDiscount)}</span></div>` : ''}
            <div class="total-row final"><span>TOTAL:</span><span>${formatNumber(header.total)}</span></div>
        </div>
    </div>
    <div class="footer">
        <div class="sign-box">Receiver</div>
        <div class="sign-box">Authorized By</div>
    </div>
    </body>
    </html>
  `
}
// ==========================================
// 2. RECEIPT TEMPLATE (For Goods Receive)
// ==========================================
export const generateReceiptHTML = (header, companyData) => {
  const linesHTML = header.lines?.map((line, index) => `
    <tr>
      <td style="text-align: center;">${index + 1}</td>
      <td style="text-align: center;">${line.product?.id}</td>
      <td>
        <span class="pro-name">${line.product?.pro_name || 'Unknown Product'} - ${line.product?.barCode ? `<small>(${line.product?.barCode})</small>` : ''}</span>
        
      </td>
      <td style="text-align: center;">${formatNumber(line.quantity)}</td>
      <td style="text-align: center;">${line.unit?.name || 'ແກັດ'}</td>
      <td style="text-align: right;">${formatNumber(line.price)}</td>
      <td style="text-align: right;"><strong>${formatNumber(line.total)}</strong></td>
    </tr>
  `).join('') || '<tr><td colspan="6" style="text-align: center;">No items</td></tr>'

  // Calculate subtotal and total discount
  const subtotal = header.lines?.reduce((sum, line) => sum + line.total, 0) || 0
  const totalDiscount = header.discount || 0
  const lineDiscounts = header.lines?.reduce((sum, line) => sum + (line.discount || 0), 0) || 0
  const allDiscounts = totalDiscount + lineDiscounts

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
        }
        .content { flex: 1; }
        .header-container { display: flex; justify-content: space-between; border-bottom: 2px solid #000; padding-bottom: 5px; margin-bottom: 10px; }
        .company-info h1 { font-size: 16px; margin: 0; text-transform: uppercase; }
        .receipt-title { text-align: right; border: 2px solid #000; padding: 5px 15px; background: #f0f0f0; }
        .receipt-title h2 { margin: 0; font-size: 18px; line-height: 1; }
        .info-box { width: 100%; border: 1px solid #000; margin-bottom: 10px; padding: 5px; display: flex; }
        .info-col { flex: 1; }
        .info-col.right { border-left: 1px solid #000; padding-left: 10px; flex: 0 0 250px; }
        .field-label { font-weight: bold; margin-right: 5px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
        th { border: 1px solid #000; background-color: #eee; padding: 4px; font-size: 10px; font-weight: bold; }
        td { border: 1px solid #000; padding: 4px; }
        .totals-container { display: flex; justify-content: flex-end; margin-bottom: 20px; }
        .totals-box { width: 250px; border: 1px solid #000; }
        .total-row { display: flex; justify-content: space-between; padding: 3px 5px; border-bottom: 1px solid #ccc; }
        .total-row.final { border-bottom: none; background-color: #eee; font-weight: bold; border-top: 1px solid #000; }
        .discount-row { color: #d00; }
        .footer { 
            margin-top: auto; 
            padding-top: 20px;
        }
        .footer-row { 
            display: flex; 
            justify-content: space-between; 
            text-align: center; 
            margin-bottom: 40px;
        }
        .sign-box { 
            border-top: 1px dashed #000; 
            width: 150px; 
            padding-top: 5px; 
            font-size: 10px; 
        }
        @media print { 
            body { margin: 0; padding: 0; } 
            @page { size: A4; margin: 0.5cm; } 
            .footer { position: fixed; bottom: 0; width: 100%; }
        }
    </style>
    </head>
    <body>
    <div class="content">
        <div class="header-container">
            <div class="company-info">
                <h1>${companyData.name || 'COMPANY NAME'}</h1>
                <p>${companyData.address || ''}</p>
            </div>
            <div class="receipt-title">
                <h2>RECEIVE NOTE</h2>
                <span>ໃບຂາຍສິນຄ້າ</span>
            </div>
        </div>
        <div class="info-box">
            <div class="info-col">
                <div><span class="field-label">ລູກຄ້າ:</span> <b>${header.client?.company || '-'}</b></div>
                <div><span class="field-label">ເບິໂທ:</span> ${header.client?.telephone || '-'}</div>
                <div><span class="field-label">ເລກອ້າງອີງ:</span> ${header.referenceNo || '-'}</div>
            </div>
            <div class="info-col right">
                <div><span class="field-label">ເລກບິນ:</span> <b>RCP-${header.id}</b></div>
                <div><span class="field-label">ວັນທີ:</span> ${formatDate(header.bookingDate)}</div>
                <div><span class="field-label">ສະກຸນເງິນ:</span> ${header.currency.code}</div>
                <div><span class="field-label">ປະເພດການຊຳລະ:</span> ${header.payment.payment_code || '-'}</div>
                <div><span class="field-label">ພະນັກງານ:</span> ${header.user?.cus_name || '-'}</div>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th width="5%">ລຳດັບ</th>
                    <th width="10%">ລະຫັດສິນຄ້າ</th>
                    <th width="35%">Description / ລາຍການ</th>
                    <th width="10%">Qty<br>ຈຳນວນ</th>
                    <th width="10%">Unit<br>ຫົວໜ່ວຍ</th>
                    <th width="15%">Cost<br>ລາຄາ/ໜ່ວຍ</th>
                    <th width="15%">Total<br>ລວມເງິນ</th>
                </tr>
            </thead>
            <tbody>${linesHTML}</tbody>
        </table>
        <div class="totals-container">
            <div class="totals-box">
                <div class="total-row"><span>Subtotal / ລວມຍ່ອຍ:</span><span>${formatNumber(subtotal)}</span></div>
                ${allDiscounts > 0 ? `<div class="total-row discount-row"><span>Discount / ສ່ວນຫຼຸດ:</span><span>-${formatNumber(allDiscounts)}</span></div>` : ''}
                <div class="total-row final"><span>TOTAL / ຍອດລວມ:</span><span>${formatNumber(header.total)}</span></div>
            </div>
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
            <div class="sign-box">ຜູ້ອະນຸມັດ<br>Authorized By</div>
        </div>
    </div>
    </body>
    </html>
  `
}