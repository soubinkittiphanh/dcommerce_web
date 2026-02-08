/**
 * Utility to handle printing logic for Thermal (80mm) and A4
 */
export const ticketPrinter = {
  // 1. Unified Customer Receipt (80mm Thermal)
  printCustomerReceipt(ticket, helpers) {
    const { companyInfo, formatPrice, formatPrintDate, formatPrintTime, getQueNo } = helpers;

    // --- TAX & PROMOTION CALCULATIONS ---
    const getTicketTaxBreakdown = () => {
      if (!ticket?.ticketLines) return [];
      const taxGroups = new Map();
      
      const totalBaseAmount = ticket.ticketLines.reduce((total, line) => {
        const itemTotal = line.quantity * (line.unitPrice || line.pro_price || 0);
        return total + (line.taxType === 'INC' ? itemTotal / (1 + parseFloat(line.taxRate)) : itemTotal);
      }, 0);
      
      const discountRatio = totalBaseAmount > 0 ? (ticket.promotionDiscount || 0) / totalBaseAmount : 0;

      ticket.ticketLines.forEach(line => {
        if (line.taxRate && line.taxRate > 0) {
          const taxKey = line.taxId || 'default';
          const itemTotal = line.quantity * (line.unitPrice || line.pro_price || 0);
          const itemBase = line.taxType === 'INC' ? itemTotal / (1 + parseFloat(line.taxRate)) : itemTotal;
          
          if (!taxGroups.has(taxKey)) {
            taxGroups.set(taxKey, { 
              name: `Tax ${(parseFloat(line.taxRate) * 100).toFixed(1)}%`, 
              rate: parseFloat(line.taxRate), 
              baseAmount: 0 
            });
          }
          taxGroups.get(taxKey).baseAmount += itemBase;
        }
      });

      return Array.from(taxGroups.values()).map(g => ({
        name: g.name,
        taxAmount: (g.baseAmount * (1 - discountRatio)) * g.rate
      }));
    };

    const taxBreakdown = getTicketTaxBreakdown();

    const htmlContent = `
      <div class="thermal-container">
        <div class="header-row">
          <div class="queue-section">
            <div class="queue-number">Q${getQueNo(ticket.ticketNumber)}</div>
            <div class="queue-label">Queue #</div>
          </div>
          <div class="company-section">
            <div class="restaurant-name">${companyInfo.name}</div>
            <div class="restaurant-address">${companyInfo.address}</div>
            <div class="contact-line">${companyInfo.tel} ${companyInfo.email ? '| ' + companyInfo.email : ''}</div>
          </div>
        </div>

        <div class="print-divider"></div>

        <div class="detail-row"><span>No:</span><span>${ticket.ticketNumber || ticket.id}</span></div>
        <div class="detail-row"><span>Date:</span><span>${formatPrintDate(ticket.createdAt)} ${formatPrintTime(ticket.createdAt)}</span></div>
        <div class="detail-row"><span>Customer:</span><span>${ticket.client?.name || 'Walk-in'}</span></div>
        <div class="detail-row"><span>Table:</span><span>${ticket.table?.name || '-'}</span></div>

        <div class="print-divider"></div>
        <div class="section-title">ITEMS</div>

        ${ticket.ticketLines?.map(line => `
          <div class="item-row">
            <div class="item-main">
              <span>${line.product?.pro_name || line.pro_name || 'Item'}</span>
              <span>${formatPrice(line.totalPrice || (line.quantity * line.unitPrice))}</span>
            </div>
            <div class="item-sub">${line.quantity} x ${formatPrice(line.unitPrice || line.pro_price)}</div>
            ${line.notes ? `<div class="item-notes">* ${line.notes}</div>` : ''}
          </div>
        `).join('')}

        <div class="print-divider"></div>

        <div class="summary-line"><span>Subtotal:</span><span>${formatPrice(ticket.subtotal)}</span></div>
        ${ticket.promotionDiscount > 0 ? `<div class="summary-line promo"><span>Discount:</span><span>-${formatPrice(ticket.promotionDiscount)}</span></div>` : ''}
        ${taxBreakdown.map(tax => `<div class="summary-line small-text"><span>${tax.name}:</span><span>${formatPrice(tax.taxAmount)}</span></div>`).join('')}
        
        <div class="summary-line total"><span>FINAL TOTAL:</span><span>${formatPrice(ticket.total)}</span></div>

        <div class="print-divider"></div>
        <div class="footer text-center">
          <div class="thank-you">ຂອບໃຈທີ່ໃຊ້ບໍລິການ / Thank You</div>
          <div class="print-time">${new Date().toLocaleString('en-GB')}</div>
        </div>
      </div>
    `;

    this._openPrintWindow(`Receipt-${ticket.id}`, htmlContent, 'thermal');
  },

  // 2. Bar/Kitchen Order (Instant Thermal)
  printBarInstant(ticket, helpers) {
    const { formatPrintTime, getQueNo } = helpers;

    const itemsHtml = ticket.ticketLines?.map(line => `
      <div class="bar-item-box">
        <div class="bar-qty">${line.quantity}x</div>
        <div class="bar-details">
          <div class="bar-name">${line.product?.pro_name || line.pro_name || 'Unknown'}</div>
          ${line.notes ? `<div class="bar-notes">NOTE: ${line.notes}</div>` : ''}
        </div>
        <div class="bar-check">☐</div>
      </div>
    `).join('') || '';

    const content = `
      <div class="thermal-container">
        <div class="bar-header">
          <h1 style="margin: 0; font-size: 24px;">BAR/KITCHEN</h1>
          <div class="bar-que">QUE: ${getQueNo(ticket.ticketNumber)}</div>
        </div>
        <div class="bar-meta">
          <span>TABLE: ${ticket.table?.name || 'Takeaway'}</span>
          <span>#${ticket.id}</span>
        </div>
        <div class="print-divider" style="border-top: 3px double #000;"></div>
        ${itemsHtml}
        <div class="print-divider"></div>
        <div class="text-center" style="font-size: 12px; font-weight: bold;">
          ORDER TIME: ${formatPrintTime(new Date())}
        </div>
      </div>
    `;

    this._openPrintWindow(`Bar-${ticket.id}`, content, 'thermal');
  },

  // 3. Summary Report (A4 Support)
  printSummary(data, helpers) {
    const { terminalName, startDate, endDate, summary, tickets, formatDateTime, numberWithCommas } = data;

    let reportContent = `
      <div class="a4-container">
        <div class="text-center mb-4">
          <h1 style="margin: 0;">ລາຍງານການຂາຍ (Sales Report)</h1>
          <p>Terminal: ${terminalName} | Period: ${startDate} - ${endDate}</p>
        </div>
        <div class="summary-stats">
          <div class="stat-box">Total Tickets: <strong>${summary.totalTickets}</strong></div>
          <div class="stat-box">Total Revenue: <strong>${numberWithCommas(summary.totalRevenue)}</strong></div>
        </div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Ticket #</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${tickets.map(t => `
              <tr>
                <td>${t.ticketNumber}</td>
                <td>${formatDateTime(t.createdAt)}</td>
                <td>${t.paymentStatus}</td>
                <td style="text-align: right;">${numberWithCommas(t.total)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    this._openPrintWindow('Sales-Report', reportContent, 'a4');
  },

  // 4. Private Helper: The Styling Engine
  _openPrintWindow(title, content, format = 'thermal') {
    const printWindow = window.open('', '_blank');
    const styles = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap');
        
        * { box-sizing: border-box; }
        body { font-family: 'Noto Sans Lao', 'Courier New', monospace; font-size: 12px; color: #000; margin: 0; padding: 0; }
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .w-100 { width: 100%; }

        /* FORMAT: THERMAL 80mm */
        .thermal-container { width: 72mm; margin: 0 auto; padding: 2mm; }
        .header-row { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 10px; }
        .queue-section { flex: 0 0 25%; text-align: center; border: 2px solid #000; background: #000; color: #fff; padding: 5px; border-radius: 4px; }
        .queue-number { font-size: 22px; font-weight: bold; line-height: 1; }
        .queue-label { font-size: 8px; text-transform: uppercase; }
        .company-section { flex: 1; text-align: center; }
        .restaurant-name { font-size: 14px; font-weight: bold; }
        .restaurant-address { font-size: 9px; line-height: 1.2; }
        
        .detail-row, .summary-line, .item-main { display: flex; justify-content: space-between; margin-bottom: 2px; }
        .print-divider { border-top: 1px dashed #000; margin: 6px 0; }
        .section-title { text-align: center; font-weight: bold; margin-bottom: 5px; text-decoration: underline; }
        .total { font-size: 18px; font-weight: bold; border-top: 2px solid #000; padding-top: 4px; margin-top: 5px; }
        .item-sub { font-size: 10px; color: #444; margin-left: 10px; }
        .item-notes { font-size: 10px; font-style: italic; margin-left: 10px; }
        .promo { color: green; font-weight: bold; }
        .small-text { font-size: 10px; }

        /* BAR STYLES */
        .bar-header { text-align: center; background: #000; color: #fff; padding: 8px; margin-bottom: 5px; }
        .bar-que { font-size: 18px; font-weight: bold; }
        .bar-meta { display: flex; justify-content: space-between; font-weight: bold; font-size: 14px; }
        .bar-item-box { display: flex; gap: 8px; border: 2px solid #000; padding: 5px; margin-bottom: 5px; }
        .bar-qty { font-size: 24px; font-weight: bold; min-width: 40px; text-align: center; border-right: 1px solid #000; }
        .bar-details { flex: 1; }
        .bar-name { font-size: 16px; font-weight: bold; text-transform: uppercase; }
        .bar-notes { font-size: 12px; background: #eee; padding: 2px; font-weight: bold; }
        .bar-check { font-size: 24px; }

        /* FORMAT: A4 */
        .a4-container { width: 210mm; margin: 0 auto; padding: 15mm; }
        .report-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .report-table th, .report-table td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        .summary-stats { display: flex; gap: 20px; margin-bottom: 20px; }
        .stat-box { border: 1px solid #000; padding: 10px; flex: 1; text-align: center; }

        @media print {
          @page { margin: 0; size: ${format === 'thermal' ? 'auto' : 'A4'}; }
          body { margin: 0; }
          .thermal-container, .a4-container { width: 100%; }
        }
      </style>
    `;
    printWindow.document.write(`<html><head><title>${title}</title>${styles}</head>`);
    printWindow.document.write(`<body onload="setTimeout(() => { window.print(); window.close(); }, 350);">${content}</body></html>`);
    printWindow.document.close();
  }
};