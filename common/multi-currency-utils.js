export const multiCurrencyAggregator = {
  generateCurrencyReport(orderHeaderList, currencyList, localCurrencyCode = 'THB') {
    const currencyBreakdown = {};
    let grandTotalLocal = 0;

    orderHeaderList.forEach(order => {
      // FIX: Iterate through lines to catch multi-currency within one bill
      if (order.lines && order.lines.length > 0) {
        order.lines.forEach(line => {
          const currency = currencyList.find(c => c.id === line.currencyId);
          const code = currency?.code || 'LAK';
          const rate = line.exchangeRate || 1; // Use line-level rate
          const lineTotal = line.quantity * line.price;

          if (!currencyBreakdown[code]) {
            currencyBreakdown[code] = {
              code,
              name: currency?.name || code,
              isLocal: currency?.isLocalCCY || false,
              totalAmount: 0,
              localEquivalent: 0,
              lineCount: 0,
              rate: rate // Reference rate
            };
          }

          currencyBreakdown[code].totalAmount += lineTotal;
          currencyBreakdown[code].lineCount += 1;
          
          // Conversion: Foreign / Rate = Local
          const equivalent = currency?.isLocalCCY ? lineTotal : (lineTotal / rate);
          currencyBreakdown[code].localEquivalent += equivalent;
          grandTotalLocal += equivalent;
        });
      }
    });

    // Calculate percentages
    const finalBreakdown = Object.values(currencyBreakdown).map(curr => ({
      ...curr,
      percentage: grandTotalLocal > 0 ? (curr.localEquivalent / grandTotalLocal) * 100 : 0
    }));

    return {
      currencyBreakdown: finalBreakdown,
      grandTotalLocal
    };
  }
};