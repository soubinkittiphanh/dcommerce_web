// utils/ticketPrinter.js

/**
 * Utility to handle printing logic outside of the Vue component
 */
export const ticketPrinter = {
  
  // Print Single Ticket
  printSingle(ticket, helpers) {
    const { formatDateTime, numberWithCommas } = helpers;

    let printContent = `
      <div style="font-family: 'Noto Sans Lao', Arial, sans-serif; width: 300px; margin: 0 auto;">
        <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 15px;">
          <h2 style="margin: 0;">ບິນຂາຍ</h2>
          <p style="margin: 5px 0;">ເລກບິນ: ${ticket.ticketNumber}</p>
          <p style="margin: 5px 0;">ວັນທີ: ${formatDateTime(ticket.createdAt)}</p>
        </div>
        <div style="margin-bottom: 15px;">
          <p style="margin: 3px 0;"><strong>ລູກຄ້າ:</strong> ${ticket.client?.name || 'ບໍ່ລະບຸ'}</p>
          <p style="margin: 3px 0;"><strong>ໂຕະ:</strong> ${ticket.table?.name || 'ບໍ່ລະບຸ'}</p>
        </div>
        <div style="border-top: 1px solid #000; border-bottom: 1px solid #000; padding: 10px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid #000;">
                <th style="text-align: left; padding: 5px;">ສິນຄ້າ</th>
                <th style="text-align: center; padding: 5px;">ຈ/ນ</th>
                <th style="text-align: right; padding: 5px;">ລວມ</th>
              </tr>
            </thead>
            <tbody>
    `;

    ticket.ticketLines?.forEach((line) => {
      printContent += `
        <tr>
          <td style="padding: 3px; text-align: left;">${line.product?.pro_name || 'ບໍ່ລະບຸ'}</td>
          <td style="padding: 3px; text-align: center;">${line.quantity}</td>
          <td style="padding: 3px; text-align: right;">${numberWithCommas(line.totalPrice)}</td>
        </tr>
      `;
    });

    printContent += `
            </tbody>
          </table>
        </div>
        <div style="margin-top: 15px; text-align: right;">
          <p style="margin: 3px 0;"><strong>ລວມຍ່ອຍ: ${numberWithCommas(ticket.subtotal)}</strong></p>
          <p style="margin: 3px 0;"><strong>ພາສີ: ${numberWithCommas(ticket.tax)}</strong></p>
          ${ticket.promotionDiscount > 0 ? `<p style="margin: 3px 0;"><strong>ສ່ວນຫຼຸດ: ${numberWithCommas(ticket.promotionDiscount)}</strong></p>` : ''}
          <div style="border-top: 2px solid #000; margin-top: 10px; padding-top: 10px;">
            <p style="margin: 0; font-size: 18px;"><strong>ລວມທັງໝົດ: ${numberWithCommas(ticket.total)}</strong></p>
          </div>
        </div>
        <div style="text-align: center; margin-top: 20px; border-top: 1px solid #000; padding-top: 10px;">
          <p style="margin: 0; font-size: 12px;">ຂອບໃຈທີ່ໃຊ້ບໍລິການ!</p>
        </div>
      </div>
    `;

    this._openPrintWindow(`Print Ticket - ${ticket.ticketNumber}`, printContent);
  },

  // Print Summary Report
  printSummary(data, helpers) {
    const { terminalName, startDate, endDate, summary, paymentSummary, productSummary, tickets, formatDateTime, numberWithCommas } = data;

    let reportContent = `
      <div style="font-family: 'Noto Sans Lao', Arial, sans-serif; margin: 20px;">
        <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 20px;">
          <h1 style="margin: 0;">ລາຍງານການຂາຍບິນ ${terminalName}</h1>
          <p style="margin: 10px 0;">ຈາກວັນທີ: ${startDate} ຫາວັນທີ: ${endDate}</p>
        </div>
        <div style="margin-bottom: 20px;">
          <h3>ສະຫຼຸບລວມ:</h3>
          <p><strong>ບິນທັງໝົດ:</strong> ${summary.totalTickets} | <strong>ຈ່າຍແລ້ວ:</strong> ${summary.paidTickets}</p>
          <p><strong>ລາຍຮັບລວມ:</strong> ${numberWithCommas(summary.totalRevenue)}</p>
        </div>
        `;
    
    // ... (You would copy the rest of the table building logic here)

    this._openPrintWindow('Sales Report', reportContent);
  },
  printAudit(data, helpers) {
    const { 
      dateRange, 
      totalTickets, 
      paidTickets, 
      totalItems, 
      categoryCount, 
      paymentTypeSummary, 
      productSummary, 
      statusBreakdown 
    } = data;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px; }
          .summary-box { border: 1px solid #ddd; padding: 15px; margin: 10px 0; background-color: #f9f9f9; }
          .summary-title { font-weight: bold; font-size: 14px; color: #333; margin-bottom: 10px; }
          .section { margin: 20px 0; }
          table { width: 100%; border-collapse: collapse; margin: 10px 0; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f0f0f0; }
          .footer { text-align: center; font-size: 12px; color: #666; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>TICKET AUDIT SUMMARY REPORT</h2>
          <p>Period: ${dateRange}</p>
          <p>Generated: ${new Date().toLocaleDateString()}</p>
        </div>

        <div class="summary-box">
          <div class="summary-title">📊 OVERVIEW</div>
          <div>Total Tickets: ${totalTickets}</div>
          <div>Paid Tickets: ${paidTickets}</div>
          <div>Total Items Sold: ${totalItems}</div>
        </div>

        <div class="section">
          <h3>📂 BY CATEGORY</h3>
          <table>
            <tr><th>Category</th><th>Count</th></tr>
            ${Object.entries(categoryCount)
              .sort(([, a], [, b]) => b - a)
              .map(([cat, count]) => `<tr><td>${cat}</td><td>${count}</td></tr>`).join('')}
          </table>
        </div>

        <div class="section">
          <h3>💳 BY PAYMENT METHOD</h3>
          <table>
            <tr><th>Method</th><th>Count</th></tr>
            ${paymentTypeSummary.map(p => `<tr><td>${p.name}</td><td>${p.count}</td></tr>`).join('')}
          </table>
        </div>

        <div class="footer">
          <p><strong>NOTE:</strong> Operational data only - no financial amounts</p>
        </div>
      </body>
      </html>`;

    // Reuse the private window opener or use a PDF library if preferred
    this._openPrintWindow('Audit Report', htmlContent);
  },


  // Private helper to open window
  _openPrintWindow(title, content) {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${title}</title>
          <style>@media print { body { margin: 0; } @page { margin: 10mm; } }</style>
        </head>
        <body onload="window.print(); window.close();">${content}</body>
      </html>
    `);
    printWindow.document.close();
  }
};