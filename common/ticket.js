// export const defaultTicket = (params) => {
//     const {
//         productCart,
//         findAllProduct,
//         formatNumber,
//         discount,
//         currencyList,
//         grandTotal,
//         companyLogo,
//         lastTransactionSaleHeaderId,
//         currentTerminal,
//         user,
//         ticketCommon,
//         currentPaymentCode,
//         cashReceived,
//         changes
//     } = params;

//     let txnListHtml = "";
//     for (const iterator of productCart) {
//         const product = findAllProduct.find((el) => el.id == iterator.id);
//         const quantity = iterator.qty;
//         const total = iterator.qty * iterator.localPrice;

//         txnListHtml += `
//             <div class="ticket">
//                 <div class="product-name">${product.pro_name}</div>
//                 <div class="price">${formatNumber(total)}</div>
//             </div>
//             <div class="product-name">${quantity} X ${formatNumber(iterator.localPrice)}</div>
//             <br>
//         `;
//     }

//     const discountHtml = `
//         <div class="ticket">
//             <div class="product-name">ສ່ວນຫລຸດ</div>
//             <div class="price"> - ${formatNumber(discount)}</div>
//         </div>
//     `;

//     const today = new Date();
//     let totalHtml = "";
//     for (const iterator of currencyList) {
//         totalHtml += `
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-footer">${iterator.code} ${formatNumber((grandTotal - discount) / iterator.rate)}</div>
//             </div>
//         `;
//     }

//     const windowContent = `
//         ${ticketCommon.header}
//         <body>
//             <h3>ໃບຮັບເງິນ / Receipt</h3>
//             <div style="display: flex; align-items: center; justify-content: space-between;">
//                 <div style="flex: 0 0 auto;">
//                     <img src="${companyLogo}" alt="Logo" width="100" height="100">
//                 </div>
//                 <div style="flex: 1; text-align: right;">
//                     <h5>ວັນທີ: ${today.toLocaleString()}</h5>
//                     <h5>ເລກທີ: ${lastTransactionSaleHeaderId}</h5>
//                     <h5>ເບີໂທຮ້ານ: ${currentTerminal.location.company.tel}</h5>
//                     <h5>ຜູ້ຂາຍ: ${user.cus_name}</h5>
//                 </div>
//             </div>
//             <hr style="margin-top: 20px;">
//             ${txnListHtml}
//             ${discount > 0 ? discountHtml : ""}
//             <hr>
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-total"><h5>ຊຳລະດ້ວຍ: ${currentPaymentCode}</h5></div>
//             </div>
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-total"><h5>ຮັບຊຳລະ: ${formatNumber(cashReceived)}</h5></div>
//             </div>
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-total"><h5>ເງິນທອນ: ${changes}</h5></div>
//             </div>
//             ${totalHtml}
//             <h2 style="text-align: center; margin-top: 50px;">THANK YOU</h2>
//         </body>
//     `;

//     const printWin = window.open("", "", "left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0");
//     printWin.document.open();
//     printWin.document.write(windowContent);

//     setTimeout(() => {
//         printWin.print();
//         printWin.close();
//     }, 1000);
// };
// export const defaultTicketReprint = (params) => {
//     const {
//         productCart,
//         findAllProduct,
//         formatNumber,
//         discount,
//         currencyList,
//         grandTotal,
//         companyLogo,
//         lastTransactionSaleHeaderId,
//         currentTerminal,
//         user,
//         ticketCommon,
//         currentPaymentCode,
//         cashReceived,
//         changes,
//         bookingDate
//     } = params;

//     let txnListHtml = "";
//     for (const iterator of productCart) {
//         const product = findAllProduct.find((el) => el.id == iterator.product.id);
//         const quantity = iterator.quantity;
//         const total = quantity * iterator.price;

//         txnListHtml += `
//             <div class="ticket">
//                 <div class="product-name">${product.pro_name}</div>
//                 <div class="price">${formatNumber(total)}</div>
//             </div>
//             <div class="product-name">${quantity} X ${formatNumber(iterator.price)}</div>
//             <br>
//         `;
//     }

//     const discountHtml = `
//         <div class="ticket">
//             <div class="product-name">ສ່ວນຫລຸດ</div>
//             <div class="price"> - ${formatNumber(discount)}</div>
//         </div>
//     `;

//     const today = new Date();
//     let totalHtml = "";
//     for (const iterator of currencyList) {
//         totalHtml += `
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-footer">${iterator.code} ${formatNumber((grandTotal - discount) / iterator.rate)}</div>
//             </div>
//         `;
//     }
//     const formatDate = (dateString) => {
//         const date = new Date(dateString)
//         const day = String(date.getDate()).padStart(2, '0')
//         const month = String(date.getMonth() + 1).padStart(2, '0')
//         const year = date.getFullYear()
//         const hours = String(date.getHours()).padStart(2, '0')
//         const minutes = String(date.getMinutes()).padStart(2, '0')

//         return `${day}/${month}/${year} ${hours}:${minutes}`
//     }
//     const windowContent = `
//         ${ticketCommon.header}
//         <body>
//             <h3>ໃບຮັບເງິນ / Receipt</h3>
//             <div style="display: flex; align-items: center; justify-content: space-between;">
//                 <div style="flex: 0 0 auto;">
//                     <img src="${companyLogo}" alt="Logo" width="100" height="100">
//                 </div>
//                 <div style="flex: 1; text-align: right;">
//                     <h5>ວັນທີ: ${formatDate(bookingDate)}</h5>
//                     <h5>ເລກທີ: ${lastTransactionSaleHeaderId}</h5>
//                     <h5>ເບີໂທຮ້ານ: ${currentTerminal.location.company.tel}</h5>
//                     <h5>ຜູ້ຂາຍ: ${user.cus_name}</h5>
//                 </div>
//             </div>
//             <hr style="margin-top: 20px;">
//             ${txnListHtml}
//             ${discount > 0 ? discountHtml : ""}
//             <hr>
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-total"><h5>ຊຳລະດ້ວຍ: ${currentPaymentCode}</h5></div>
//             </div>
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-total"><h5>ຮັບຊຳລະ: ${formatNumber(cashReceived)}</h5></div>
//             </div>
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-total"><h5>ເງິນທອນ: ${changes}</h5></div>
//             </div>
//             ${totalHtml}
//             <h2 style="text-align: center; margin-top: 50px;">THANK YOU</h2>
//         </body>
//     `;

//     const printWin = window.open("", "", "left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0");
//     printWin.document.open();
//     printWin.document.write(windowContent);

//     setTimeout(() => {
//         printWin.print();
//         printWin.close();
//     }, 1000);
// };

// export const customerTicket = (params) => {
//     const {
//         productCart,
//         findAllProduct,
//         formatNumber,
//         discount,
//         currencyList,
//         grandTotal,
//         companyLogo,
//         lastTransactionSaleHeaderId,
//         currentTerminal,
//         user,
//         ticketCommon,
//         currentPaymentCode,
//         cashReceived,
//         changes
//     } = params;

//     let txnListHtml = "";
//     for (const iterator of productCart) {
//         const product = findAllProduct.find((el) => el.id == iterator.id);
//         const quantity = iterator.qty;
//         const total = iterator.qty * iterator.localPrice;

//         txnListHtml += `
//             <div class="ticket">
//                 <div class="product-name">${product.pro_name}</div>
//                 <div class="price">${formatNumber(total)}</div>
//             </div>
//             <div class="product-name">${quantity} X ${formatNumber(iterator.localPrice)}</div>
//             <br>
//         `;
//     }

//     const discountHtml = `
//         <div class="ticket">
//             <div class="product-name">ສ່ວນຫລຸດ</div>
//             <div class="price"> - ${formatNumber(discount)}</div>
//         </div>
//     `;

//     const today = new Date();
//     let totalHtml = "";
//     for (const iterator of currencyList) {
//         totalHtml += `
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-footer">${iterator.code} ${formatNumber((grandTotal - discount) / iterator.rate)}</div>
//             </div>
//         `;
//     }

//     const windowContent = `
//         ${ticketCommon.header}
//         <body>
//             <h3>ໃບຮັບເງິນ / Receipt</h3>
//             <div style="display: flex; align-items: center; justify-content: space-between;">
//                 <div style="flex: 0 0 auto;">
//                     <img src="${companyLogo}" alt="Logo" width="100" height="100">
//                 </div>
//                 <div style="flex: 1; text-align: right;">
//                     <h5>ວັນທີ: ${today.toLocaleString()}</h5>
//                     <h5>ເລກທີ: ${lastTransactionSaleHeaderId}</h5>
//                     <h5>ເບີໂທຮ້ານ: ${currentTerminal.location.company.tel}</h5>
//                     <h5>ຜູ້ຂາຍ: ${user.cus_name}</h5>
//                 </div>
//             </div>
//             <hr style="margin-top: 20px;">
//             ${txnListHtml}
//             ${discount > 0 ? discountHtml : ""}
//             <hr>
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-total"><h5>ຊຳລະດ້ວຍ: ${currentPaymentCode}</h5></div>
//             </div>
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-total"><h5>ຮັບຊຳລະ: ${formatNumber(cashReceived)}</h5></div>
//             </div>
//             <div class="ticket">
//                 <div class="product-name"></div>
//                 <div class="price-total"><h5>ເງິນທອນ: ${changes}</h5></div>
//             </div>
//             ${totalHtml}
//             <h2 style="text-align: center; margin-top: 50px;">THANK YOU</h2>
//         </body>
//     `;

//     const printWin = window.open("", "", "left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0");
//     printWin.document.open();
//     printWin.document.write(windowContent);

//     setTimeout(() => {
//         printWin.print();
//         printWin.close();
//     }, 1000);
// };

/**
 * Ticket Generation Module
 * Contains functions for generating different types of receipts/tickets
 */

// ============================================================================
// SHARED UTILITY FUNCTIONS
// ============================================================================

/**
 * Formats date string to human-readable format
 * @param {string|Date} dateInput - Date string or Date object
 * @returns {string} Formatted date string
 */
const formatDate = (dateInput) => {
  try {
    const date = new Date(dateInput);

    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Date Error';
  }
};

/**
 * Validates required parameters for ticket generation
 * @param {Object} params - Parameters object
 * @param {Function} formatNumber - Number formatting function
 * @returns {boolean} True if valid, false otherwise
 */
const validateTicketParams = (params, formatNumber) => {
  if (!params) {
    console.error('Parameters object is required');
    return false;
  }

  if (typeof formatNumber !== 'function') {
    console.error('formatNumber function is required');
    return false;
  }

  return true;
};

/**
 * Generates transaction list HTML for regular tickets (defaultTicket, customerTicket)
 * @param {Array} productCart - Array of products in cart
 * @param {Array} findAllProduct - Array of all available products
 * @param {Function} formatNumber - Number formatting function
 * @returns {string} HTML string for transaction list
 */
const generateRegularTransactionList = (productCart, findAllProduct, formatNumber) => {
  if (!Array.isArray(productCart) || productCart.length === 0) {
    return '<div class="ticket"><div class="product-name">No items found</div></div>';
  }

  return productCart.map(item => {
    const product = findAllProduct.find(el => el.id === item.id);

    if (!product) {
      console.warn(`Product not found for ID: ${item.id}`);
      return '';
    }

    const quantity = item.qty || 0;
    const price = item.localPrice || 0;
    const total = quantity * price;

    return `
      <div class="ticket">
        <div class="product-name">${product.pro_name || 'Unknown Product'}</div>
        <div class="price">${formatNumber(total)}</div>
      </div>
      <div class="product-details">
        <div class="product-name">${quantity} X ${formatNumber(price)}</div>
      </div>
      <br>
    `;
  }).join('');
};

/**
 * Generates transaction list HTML for reprint tickets
 * @param {Array} productCart - Array of products in cart
 * @param {Array} findAllProduct - Array of all available products
 * @param {Function} formatNumber - Number formatting function
 * @returns {string} HTML string for transaction list
 */
const generateReprintTransactionList = (productCart, findAllProduct, formatNumber) => {
  if (!Array.isArray(productCart) || productCart.length === 0) {
    return '<div class="ticket"><div class="product-name">No items found</div></div>';
  }

  return productCart.map(item => {
    const product = findAllProduct.find(el => el.id === item.product?.id);

    if (!product) {
      console.warn(`Product not found for ID: ${item.product?.id}`);
      return '';
    }

    const quantity = item.quantity || 0;
    const price = item.price || 0;
    const total = quantity * price;

    return `
      <div class="ticket">
        <div class="product-name">${product.pro_name || 'Unknown Product'}</div>
        <div class="price">${formatNumber(total)}</div>
      </div>
      <div class="product-details">
        <div class="product-name">${quantity} X ${formatNumber(price)}</div>
      </div>
      <br>
    `;
  }).join('');
};

/**
 * Generates discount section HTML
 * @param {number} discount - Discount amount
 * @param {Function} formatNumber - Number formatting function
 * @returns {string} HTML string for discount section
 */
const generateDiscountSection = (discount, formatNumber) => {
  if (discount <= 0) return '';

  return `
    <div class="ticket">
      <div class="product-name">ສ່ວນຫລຸດ</div>
      <div class="price">- ${formatNumber(discount)}</div>
    </div>
  `;
};

/**
 * Generates total section HTML for different currencies
 * @param {Array} currencyList - Array of available currencies
 * @param {number} grandTotal - Grand total amount
 * @param {number} discount - Discount amount
 * @param {Function} formatNumber - Number formatting function
 * @returns {string} HTML string for total section
 */
const generateTotalSection = (currencyList, grandTotal, discount, formatNumber) => {
  if (!Array.isArray(currencyList) || currencyList.length === 0) {
    return '';
  }

  const finalTotal = grandTotal - discount;

  return currencyList.map(currency => {
    const rate = currency.rate || 1;
    const convertedAmount = finalTotal / rate;

    return `
      <div class="ticket">
        <div class="product-name"></div>
        <div class="price-footer">${currency.code || 'N/A'} ${formatNumber(convertedAmount)}</div>
      </div>
    `;
  }).join('');
};

/**
 * Generates header section HTML
 * @param {Object} headerData - Header data object
 * @param {string|Date} dateValue - Date value (current date or booking date)
 * @returns {string} HTML string for header section
 */
const generateHeaderSection = (headerData, dateValue) => {
  const {
    companyLogo,
    lastTransactionSaleHeaderId,
    currentTerminal,
    user
  } = headerData;

  const companyName = currentTerminal?.location?.company?.name || 'N/A';
  const companyTel = currentTerminal?.location?.company?.tel || 'N/A';
  const userName = user?.cus_name || 'N/A';

  return `
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <div style="flex: 0 0 auto;">
        ${companyLogo ? `<img src="${companyLogo}" alt="Logo" width="100" height="100">` : ''}
      </div>
      <div style="flex: 1; text-align: right;">
        <h5>ວັນທີ: ${formatDate(dateValue)}</h5>
        <h5>ເລກທີ: ${lastTransactionSaleHeaderId}</h5>
        <h5>ເບີໂທຮ້ານ: ${companyTel}</h5>
        <h5>ຜູ້ຂາຍ: ${userName}</h5>
      </div>
    </div>
    <hr style="margin-top: 20px;">
  `;
};

/**
 * Generates payment section HTML
 * @param {Object} paymentData - Payment data object
 * @param {Function} formatNumber - Number formatting function
 * @returns {string} HTML string for payment section
 */
const generatePaymentSection = (paymentData, formatNumber) => {
  const { currentPaymentCode, cashReceived, changes } = paymentData;
  console.info(`Changes in generatePaymentSection ${changes} ${JSON.stringify(paymentData)}`)
  return `
    <div class="payment-section">
      <div class="ticket">
        <div class="product-name"></div>
        <div class="price-total"><h5>ຊຳລະດ້ວຍ: ${currentPaymentCode}</h5></div>
      </div>
      <div class="ticket">
        <div class="product-name"></div>
        <div class="price-total"><h5>ຮັບຊຳລະ: ${formatNumber(cashReceived)}</h5></div>
      </div>
      <div class="ticket">
        <div class="product-name"></div>
        <div class="price-total"><h5>ເງິນທອນ: ${changes}</h5></div>
      </div>
    </div>
  `;
};

/**
 * Generates complete window content HTML
 * @param {Object} contentData - Content data object
 * @returns {string} Complete HTML string for printing
 */
const generateWindowContent = (contentData) => {
  const {
    ticketCommon,
    headerHtml,
    transactionListHtml,
    discountHtml,
    totalHtml,
    paymentSectionHtml
  } = contentData;

  return `
    ${ticketCommon?.header || ''}
    <body>
      <h3>ໃບຮັບເງິນ / Receipt</h3>
      ${headerHtml}
      ${transactionListHtml}
      ${discountHtml}
      <hr>
      ${paymentSectionHtml}
      ${totalHtml}
      <h2 style="text-align: center; margin-bottom: 50px;">THANK YOU</h2>
      <h2 style="text-align: center;">.</h2>
    </body>
  `;
};

/**
 * Opens print window and prints the ticket
 * @param {string} windowContent - HTML content to print
 * @returns {void}
 */
const printTicket = (windowContent) => {
  try {
    const printWin = window.open(
      '',
      '',
      'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0'
    );

    if (!printWin) {
      throw new Error('Unable to open print window. Please check popup blockers.');
    }

    printWin.document.open();
    printWin.document.write(windowContent);

    // Use a more reliable way to wait for content to load
    printWin.onload = () => {
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 500);
    };

    // Fallback timeout
    setTimeout(() => {
      if (!printWin.closed) {
        printWin.print();
        printWin.close();
      }
    }, 1000);

  } catch (error) {
    console.error('Error printing ticket:', error);
    alert('Error printing ticket. Please try again.');
  }
};

// ============================================================================
// MAIN TICKET FUNCTIONS
// ============================================================================

/**
 * Generates and prints a default ticket (new transaction)
 * @param {Object} params - Parameters object containing all required data
 * @returns {void}
 */
export const defaultTicket = (params) => {
  const {
    productCart = [],
    findAllProduct = [],
    formatNumber,
    discount = 0,
    currencyList = [],
    grandTotal = 0,
    companyLogo = '',
    lastTransactionSaleHeaderId = '',
    currentTerminal = {},
    user = {},
    ticketCommon = {},
    currentPaymentCode = '',
    cashReceived = 0,
    changes = 0
  } = params;

  console.info(`Changes in defaultTicket ${changes} ${JSON.stringify(params)}`)
  if (!validateTicketParams(params, formatNumber)) return;

  try {
    const currentDate = new Date();

    const transactionListHtml = generateRegularTransactionList(productCart, findAllProduct, formatNumber);
    const discountHtml = generateDiscountSection(discount, formatNumber);
    const totalHtml = generateTotalSection(currencyList, grandTotal, discount, formatNumber);
    const headerHtml = generateHeaderSection({
      companyLogo,
      lastTransactionSaleHeaderId,
      currentTerminal,
      user
    }, currentDate);
    const paymentSectionHtml = generatePaymentSection({
      currentPaymentCode,
      cashReceived,
      changes
    }, formatNumber);

    const windowContent = generateWindowContent({
      ticketCommon,
      headerHtml,
      transactionListHtml,
      discountHtml,
      totalHtml,
      paymentSectionHtml
    });

    printTicket(windowContent);

  } catch (error) {
    console.error('Error generating default ticket:', error);
  }
};

/**
 * Generates and prints a reprint ticket (existing transaction)
 * @param {Object} params - Parameters object containing all required data
 * @returns {void}
 */
export const defaultTicketReprint = (params) => {
  const {
    productCart = [],
    findAllProduct = [],
    formatNumber,
    discount = 0,
    currencyList = [],
    grandTotal = 0,
    companyLogo = '',
    lastTransactionSaleHeaderId = '',
    currentTerminal = {},
    user = {},
    ticketCommon = {},
    currentPaymentCode = '',
    cashReceived = 0,
    changes = 0,
    bookingDate = new Date().toISOString()
  } = params;

  if (!validateTicketParams(params, formatNumber)) return;

  try {
    const transactionListHtml = generateReprintTransactionList(productCart, findAllProduct, formatNumber);
    const discountHtml = generateDiscountSection(discount, formatNumber);
    const totalHtml = generateTotalSection(currencyList, grandTotal, discount, formatNumber);
    const headerHtml = generateHeaderSection({
      companyLogo,
      lastTransactionSaleHeaderId,
      currentTerminal,
      user
    }, bookingDate);
    const paymentSectionHtml = generatePaymentSection({
      currentPaymentCode,
      cashReceived,
      changes
    }, formatNumber);

    const windowContent = generateWindowContent({
      ticketCommon,
      headerHtml,
      transactionListHtml,
      discountHtml,
      totalHtml,
      paymentSectionHtml
    });

    printTicket(windowContent);

  } catch (error) {
    console.error('Error generating reprint ticket:', error);
  }
};

/**
 * Generates and prints a customer ticket
 * @param {Object} params - Parameters object containing all required data
 * @returns {void}
 */
export const customerTicket = (params) => {
  const {
    productCart = [],
    findAllProduct = [],
    formatNumber,
    discount = 0,
    currencyList = [],
    grandTotal = 0,
    companyLogo = '',
    lastTransactionSaleHeaderId = '',
    currentTerminal = {},
    user = {},
    ticketCommon = {},
    currentPaymentCode = '',
    cashReceived = 0,
    changes = 0
  } = params;
  console.info(`Changes in customerTicket ${changes} ${JSON.stringify(params)}`)
  if (!validateTicketParams(params, formatNumber)) return;

  try {
    const currentDate = new Date();

    const transactionListHtml = generateRegularTransactionList(productCart, findAllProduct, formatNumber);
    const discountHtml = generateDiscountSection(discount, formatNumber);
    const totalHtml = generateTotalSection(currencyList, grandTotal, discount, formatNumber);
    const headerHtml = generateHeaderSection({
      companyLogo,
      lastTransactionSaleHeaderId,
      currentTerminal,
      user
    }, currentDate);
    const paymentSectionHtml = generatePaymentSection({
      currentPaymentCode,
      cashReceived,
      changes
    }, formatNumber);

    const windowContent = generateWindowContent({
      ticketCommon,
      headerHtml,
      transactionListHtml,
      discountHtml,
      totalHtml,
      paymentSectionHtml
    });

    printTicket(windowContent);

  } catch (error) {
    console.error('Error generating customer ticket:', error);
  }
};