/**
 * Enhanced Ticket Generation Module
 * Contains functions for generating different types of receipts/tickets with dynamic logo loading
 */

// ============================================================================
// API INTEGRATION & LOGO MANAGEMENT
// ============================================================================

/**
 * Company logo cache to avoid repeated API calls
 */
let companyLogoCache = {
  url: null,
  company: null,
  loading: false,
  error: false,
  lastFetch: null,
  cacheExpiry: 5 * 60 * 1000, // 5 minutes cache
};

/**
 * Loads company logo from API with caching
 * @param {Object} axios - Axios instance from Vue component
 * @returns {Promise<string|null>} Company logo URL or null
 */
const loadCompanyLogoFromAPI = async (axios) => {
  // Check cache validity
  const now = Date.now();
  const cacheValid = companyLogoCache.lastFetch && 
    (now - companyLogoCache.lastFetch) < companyLogoCache.cacheExpiry;

  if (cacheValid && companyLogoCache.url) {
    console.info('Using cached company logo');
    return companyLogoCache.url;
  }

  // Prevent multiple simultaneous requests
  if (companyLogoCache.loading) {
    console.info('Company logo already loading, waiting...');
    // Wait for current request to complete
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
    console.info('Fetching company logo from API...');
    
    // Get companies with active status
    const response = await axios.get('/api/public/company/findAll');
    const companies = Array.isArray(response.data) ? response.data : [];
    
    console.info(`Found ${companies.length} companies from API`);
    console.info(`Found ${JSON.stringify(companies)} companies from API`);

    // Take the FIRST company with isActive: true and valid profile_image_path
    const firstActiveCompany = companies.find(company =>
      company.isActive === true && 
      company.profile_image_path && 
      company.profile_image_path.trim() !== '' &&
      company.profile_image_path !== null
    );

    if (firstActiveCompany) {
      companyLogoCache.company = firstActiveCompany;
      
      // Build the full URL for your specific path format
      let baseUrl = '';
      
      // Get base URL from axios defaults
      if (axios.defaults.baseURL) {
        baseUrl = axios.defaults.baseURL.replace(/\/$/, ''); // Remove trailing slash
      } else {
        // Fallback to current origin if no baseURL set
        baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      }
      
      // Ensure the path starts with / for proper URL construction
      const logoPath = firstActiveCompany.profile_image_path.startsWith('/') 
        ? firstActiveCompany.profile_image_path 
        : `/${firstActiveCompany.profile_image_path}`;
      
      // Construct the full URL: baseURL + /uploads/company-profiles/company_1_1764563357188.png
      companyLogoCache.url = baseUrl ? `${baseUrl}${logoPath}` : logoPath;
      companyLogoCache.lastFetch = now;
      
      console.info('Company logo loaded successfully:', {
        company: firstActiveCompany.name,
        mnemonic: firstActiveCompany.mnemonic,
        logoPath: firstActiveCompany.profile_image_path,
        fullUrl: companyLogoCache.url,
        baseUrl: baseUrl
      });
      
      return companyLogoCache.url;
    } else {
      console.warn('No active company with valid logo found in API response');
      
      // Debug: Log what we found for troubleshooting
      console.info('Available companies debug:', companies.map(c => ({
        id: c.id,
        name: c.name,
        mnemonic: c.mnemonic,
        isActive: c.isActive,
        hasLogo: !!c.profile_image_path,
        logoPath: c.profile_image_path
      })));
      
      companyLogoCache.url = null;
      companyLogoCache.lastFetch = now;
      return null;
    }

  } catch (error) {
    console.error('Error loading company logo from API:', error);
    companyLogoCache.error = true;
    companyLogoCache.url = null;
    companyLogoCache.lastFetch = now;
    return null;
  } finally {
    companyLogoCache.loading = false;
  }
};

/**
 * Gets company logo with multiple fallback options (matching navigation layout pattern)
 * @param {Object} params - Parameters containing axios and fallback options
 * @returns {Promise<string>} Logo URL (API, static, or default)
 */

const getBaseURL = ()=>{
        let baseUrl = '';
      
      // Get base URL from axios defaults
      if (axios.defaults.baseURL) {
        baseUrl = axios.defaults.baseURL.replace(/\/$/, ''); // Remove trailing slash
      } else {
        // Fallback to current origin if no baseURL set
        baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      }
      return baseUrl;
}
const getCompanyLogo = async (params) => {
  const { 
    axios, 
    staticLogoPath = null, 
    companyData = null,
    fallbackLogo = '/static/images/default-logo.png'
  } = params;

  try {
    // 1. Try to get logo from API first (primary method)
    if (axios) {
      const apiLogo = await loadCompanyLogoFromAPI(axios);
      if (apiLogo) {
        console.info('Using API logo for ticket:', apiLogo);
        // Test if the URL is accessible
        try {
          const testResponse = await fetch(apiLogo, { method: 'HEAD' });
          if (testResponse.ok) {
            return apiLogo;
          } else {
            console.warn('API logo URL not accessible, status:', testResponse.status);
          }
        } catch (fetchError) {
          console.warn('API logo URL fetch test failed:', fetchError.message);
        }
      }
    }

    // 2. Try static logo path from params (existing company logo)
    if (staticLogoPath) {
      console.info('Using static logo for ticket:', staticLogoPath);
      // For static paths, we trust they exist (like in navigation)
      return staticLogoPath;
    }

    // 3. Try company data logo (from mainCompanyInfo - like navigation fallback)
    if (companyData?.dcLogo) {
      try {
        // This matches the navigation pattern: require(`~/assets/image/${this.companyData.dcLogo}`)
        const companyLogoPath = `/assets/image/${companyData.dcLogo}`;
        console.info('Using company data logo for ticket:', companyLogoPath);
        return companyLogoPath;
      } catch (error) {
        console.warn('Company data logo not accessible:', companyData.dcLogo);
      }
    }

    // 4. Try the default navigation fallback
    try {
      // This matches your navigation: require('~/assets/image/MPWT/PWT.png')
      const navigationFallback = '/assets/image/MPWT/PWT.png';
      console.info('Using navigation fallback logo for ticket:', navigationFallback);
      return navigationFallback;
    } catch (error) {
      console.warn('Navigation fallback logo not found');
    }

    // 5. Final fallback logo
    console.info('Using final fallback logo for ticket:', fallbackLogo);
    return fallbackLogo;

  } catch (error) {
    console.error('Error in getCompanyLogo:', error);
    return fallbackLogo;
  }
};

/**
 * Clears the logo cache (useful for forcing refresh)
 */
const clearLogoCache = () => {
  companyLogoCache = {
    url: null,
    company: null,
    loading: false,
    error: false,
    lastFetch: null,
    cacheExpiry: 5 * 60 * 1000,
  };
};

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
 * Generates enhanced header section HTML with dynamic logo
 * @param {Object} headerData - Header data object
 * @param {string|Date} dateValue - Date value (current date or booking date)
 * @param {string} logoUrl - Dynamic logo URL from API
 * @returns {string} HTML string for header section
 */
const generateHeaderSection = (headerData, dateValue, logoUrl) => {
  const {
    lastTransactionSaleHeaderId,
    currentTerminal,
    user
  } = headerData;
  console.info(`LOGO paSSING TO HEADER ${logoUrl}`)
  // Get company information with fallbacks
  const companyName = currentTerminal?.location?.company?.name || 
                     companyLogoCache.company?.name || 
                     'Dcommerce';
  const companyTel = currentTerminal?.location?.company?.tel || 
                    companyLogoCache.company?.tel || 
                    'N/A';
  const companyLogoUrl = currentTerminal?.location?.company?.profile_image_path || 
                    companyLogoCache.company?.profile_image_path || 
                    'N/A';
  const userName = user?.cus_name || 'N/A';
  console.info(`real image path ${companyLogoUrl}`)
  // Create logo HTML with error handling
  const baseURL = window.location.origin; 
  console.warn(`base url ${currentTerminal.baseURL}`)
  const logoHtml = logoUrl ? 
    `<img src="${currentTerminal.baseURL}/${companyLogoUrl}" alt="Company Logo" width="100" height="100" 
          style="max-width: 100px; max-height: 100px; object-fit: contain;" 
          onerror="this.style.display='none';">` : 
    `<div style="width: 100px; height: 100px; background: #f0f0f0; 
                 display: flex; align-items: center; justify-content: center; 
                 border-radius: 8px; font-size: 12px; text-align: center;">
       ${companyName.substring(0, 2).toUpperCase()}
     </div>`;

  return `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
      <div style="flex: 0 0 auto;">
        ${logoHtml}
      </div>
      <div style="flex: 1; text-align: right; margin-left: 20px;">
        <h4 style="margin: 0; color: #333;">${companyName}</h4>
        <p style="margin: 5px 0; color: #666; font-size: 12px;">ເບີໂທ: ${companyTel}</p>
        <hr style="margin: 10px 0;">
        <h5 style="margin: 5px 0;">ວັນທີ: ${formatDate(dateValue)}</h5>
        <h5 style="margin: 5px 0;">ເລກທີ: ${lastTransactionSaleHeaderId}</h5>
        <h5 style="margin: 5px 0;">ຜູ້ຂາຍ: ${userName}</h5>
      </div>
    </div>
    <hr style="margin: 20px 0; border: 1px solid #ccc;">
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
        <div class="price-total"><h5>ເງິນທອນ: ${formatNumber(changes)}</h5></div>
      </div>
    </div>
  `;
};

/**
 * Generates complete window content HTML with enhanced styling
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
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Receipt</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 20px;
          font-size: 14px;
          line-height: 1.4;
          color: #333;
        }
        .ticket {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          padding: 4px 0;
        }
        .product-name {
          flex: 1;
          font-weight: 500;
        }
        .product-details {
          margin-left: 20px;
          font-size: 12px;
          color: #666;
        }
        .price {
          font-weight: 600;
          text-align: right;
          min-width: 80px;
        }
        .price-footer, .price-total {
          font-weight: 700;
          text-align: right;
          min-width: 80px;
          font-size: 16px;
        }
        .payment-section {
          margin-top: 20px;
          padding-top: 15px;
          border-top: 2px solid #333;
        }
        hr {
          border: none;
          border-top: 1px solid #ddd;
          margin: 15px 0;
        }
        h3 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 18px;
          font-weight: 700;
        }
        h4, h5 {
          margin: 5px 0;
          font-weight: 600;
        }
        @media print {
          body { margin: 0; padding: 10px; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <h3>ໃບຮັບເງິນ / Receipt</h3>
      ${headerHtml}
      <div style="margin: 20px 0;">
        ${transactionListHtml}
      </div>
      ${discountHtml}
      <hr>
      ${paymentSectionHtml}
      <div style="margin-top: 15px;">
        ${totalHtml}
      </div>
      <div style="text-align: center; margin-top: 30px;">
        <h4>THANK YOU</h4>
        <p style="font-size: 12px; color: #666;">ຂໍຂອບໃຈທີ່ໃຊ້ບໍລິການ</p>
      </div>
    </body>
    </html>
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
      'left=0,top=0,width=800,height=1000,toolbar=0,scrollbars=1,status=0'
    );

    if (!printWin) {
      throw new Error('Unable to open print window. Please check popup blockers.');
    }

    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();

    // Wait for images and content to load
    printWin.onload = () => {
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 800);
    };

    // Fallback timeout
    setTimeout(() => {
      if (!printWin.closed) {
        printWin.print();
        printWin.close();
      }
    }, 2000);

  } catch (error) {
    console.error('Error printing ticket:', error);
    alert('Error printing ticket. Please try again.');
  }
};

// ============================================================================
// MAIN TICKET FUNCTIONS
// ============================================================================

/**
 * Generates and prints a default ticket (new transaction) with dynamic logo
 * @param {Object} params - Parameters object containing all required data
 * @returns {Promise<void>}
 */
export const defaultTicket = async (params) => {
  const {
    productCart = [],
    findAllProduct = [],
    formatNumber,
    discount = 0,
    currencyList = [],
    grandTotal = 0,
    companyLogo = '', // Static fallback
    lastTransactionSaleHeaderId = '',
    currentTerminal = {},
    user = {},
    ticketCommon = {},
    currentPaymentCode = '',
    cashReceived = 0,
    changes = 0,
    axios = null, // Vue axios instance
    companyData = null // Company data from mainCompanyInfo
  } = params;

  if (!validateTicketParams(params, formatNumber)) return;

  try {
    const currentDate = new Date();
    console.info(`COMPANY PASSING ${JSON.stringify(companyData)}`)
    console.info(`COMPANY PASSING IMAGE ${JSON.stringify(companyData.ticketLogo)}`)
    

    // Get dynamic logo with fallbacks
    const logoUrl = await getCompanyLogo({
      axios,
      staticLogoPath: companyLogo,
      companyData,
      fallbackLogo: '/static/images/default-logo.png'
    });

    const transactionListHtml = generateRegularTransactionList(productCart, findAllProduct, formatNumber);
    const discountHtml = generateDiscountSection(discount, formatNumber);
    const totalHtml = generateTotalSection(currencyList, grandTotal, discount, formatNumber);
    const headerHtml = generateHeaderSection({
      lastTransactionSaleHeaderId,
      currentTerminal,
      user
    }, currentDate, logoUrl);
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
 * Generates and prints a reprint ticket (existing transaction) with dynamic logo
 * @param {Object} params - Parameters object containing all required data
 * @returns {Promise<void>}
 */
export const defaultTicketReprint = async (params) => {
  const {
    productCart = [],
    findAllProduct = [],
    formatNumber,
    discount = 0,
    currencyList = [],
    grandTotal = 0,
    companyLogo = '', // Static fallback
    lastTransactionSaleHeaderId = '',
    currentTerminal = {},
    user = {},
    ticketCommon = {},
    currentPaymentCode = '',
    cashReceived = 0,
    changes = 0,
    bookingDate = new Date().toISOString(),
    axios = null, // Vue axios instance
    companyData = null // Company data from mainCompanyInfo
  } = params;

  if (!validateTicketParams(params, formatNumber)) return;

  try {
    // Get dynamic logo with fallbacks
    const logoUrl = await getCompanyLogo({
      axios,
      staticLogoPath: companyLogo,
      companyData,
      fallbackLogo: '/static/images/default-logo.png'
    });

    const transactionListHtml = generateReprintTransactionList(productCart, findAllProduct, formatNumber);
    const discountHtml = generateDiscountSection(discount, formatNumber);
    const totalHtml = generateTotalSection(currencyList, grandTotal, discount, formatNumber);
    const headerHtml = generateHeaderSection({
      lastTransactionSaleHeaderId,
      currentTerminal,
      user
    }, bookingDate, logoUrl);
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
 * Generates and prints a customer ticket with dynamic logo
 * @param {Object} params - Parameters object containing all required data
 * @returns {Promise<void>}
 */
export const customerTicket = async (params) => {
  const {
    productCart = [],
    findAllProduct = [],
    formatNumber,
    discount = 0,
    currencyList = [],
    grandTotal = 0,
    companyLogo = '', // Static fallback
    lastTransactionSaleHeaderId = '',
    currentTerminal = {},
    user = {},
    ticketCommon = {},
    currentPaymentCode = '',
    cashReceived = 0,
    changes = 0,
    axios = null, // Vue axios instance
    companyData = null // Company data from mainCompanyInfo
  } = params;

  if (!validateTicketParams(params, formatNumber)) return;

  try {
    const currentDate = new Date();

    // Get dynamic logo with fallbacks
    const logoUrl = await getCompanyLogo({
      axios,
      staticLogoPath: companyLogo,
      companyData,
      fallbackLogo: '/static/images/default-logo.png'
    });

    const transactionListHtml = generateRegularTransactionList(productCart, findAllProduct, formatNumber);
    const discountHtml = generateDiscountSection(discount, formatNumber);
    const totalHtml = generateTotalSection(currencyList, grandTotal, discount, formatNumber);
    const headerHtml = generateHeaderSection({
      lastTransactionSaleHeaderId,
      currentTerminal,
      user
    }, currentDate, logoUrl);
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

// ============================================================================
// UTILITY EXPORTS
// ============================================================================

/**
 * Utility function to refresh logo cache
 * @param {Object} axios - Axios instance
 * @returns {Promise<string|null>} Updated logo URL
 */
export const refreshCompanyLogo = async (axios) => {
  clearLogoCache();
  return await loadCompanyLogoFromAPI(axios);
};

/**
 * Get current cached logo info
 * @returns {Object} Logo cache object
 */
export const getLogoCacheInfo = () => {
  return { ...companyLogoCache };
};

/**
 * Preload company logo (useful for app initialization)
 * @param {Object} axios - Axios instance
 * @returns {Promise<void>}
 */
export const preloadCompanyLogo = async (axios) => {
  try {
    await loadCompanyLogoFromAPI(axios);
    console.info('Company logo preloaded successfully');
  } catch (error) {
    console.warn('Failed to preload company logo:', error);
  }
};