// Enhanced API Configuration with Dynamic Logo Loading
// Fixed version without duplicate exports

/**
 * Get the base URL for API calls
 * @returns {string} The base URL for the application
 */
export const hostName = () => {
  // const baseURL = 'http://150.95.31.23:8003' // *** CHITHAN
  // const baseURL = 'http://150.95.31.23:8010' // *** THE PEEAIR
  // const baseURL = 'http://150.95.31.23:8015' // *** THE CORNERS
  const baseURL = 'http://150.95.31.23:8017' //  *** PHAIVANH PHARMACY
  // const baseURL = 'http://150.95.31.23:8018' //  *** BMART
  // const baseURL = 'http://150.95.31.23:8019' //  *** TP AUTO PART
  // const baseURL = 'http://150.95.31.23:8020' //  *** KSOUK
  // const baseURL = 'http://150.95.31.23:8021' //  *** carcare sokpaluang
  // const baseURL = 'http://150.95.31.23:8022' //  *** PM Jobfair ..
  // const baseURL = 'http://150.95.31.23:8023' //  *** BEST COFFEE
  // const baseURL = 'http://150.95.31.23:8024' //  *** DCOMMERCE
  // const baseURL = 'http://150.95.31.23:8025' //  *** DCOMMERCE MAIN
  // const baseURL = 'http://150.95.31.23:8026' //  *** DEV DEMO
  // const baseURL = 'http://150.95.31.23:8027' //  *** HAPPY BUN
  // const baseURL = 'http://150.95.31.23:8028' //  *** PHASOK MINIMART
  // const baseURL = 'http://150.95.31.23:8014' //  *** PWT YOTHA
  // const baseURL = 'http://150.95.31.23:8918' //  *** TAIPHUAN
  // const baseURL = 'http://localhost:8888' // ***Demo 1*** 
  
  console.info(`BASE_URL ${process.env.BASE_URL}`)
  // return process.env.BASE_URL || 'http://localhost:8888'
  return baseURL;
}

/**
 * Legacy company info function (V1) - uses store
 * @param {Object} store - Vuex store instance
 * @returns {Object} First company from store
 */
export const mainCompanyInfoV1 = (store) => {
  return store.getters.findAllCompany[0]
}

/**
 * Cache for API-loaded company information
 */
let apiCompanyCache = {
  data: null,
  loading: false,
  error: false,
  lastFetch: null,
  cacheExpiry: 5 * 60 * 1000, // 5 minutes cache
}

/**
 * Load company information from API
 * @param {Object} axios - Axios instance (optional)
 * @returns {Promise<Object|null>} Company data from API
 */
export const loadCompanyFromAPI = async (axios) => {
  // Check cache validity
  const now = Date.now();
  const cacheValid = apiCompanyCache.lastFetch && 
    (now - apiCompanyCache.lastFetch) < apiCompanyCache.cacheExpiry;

  if (cacheValid && apiCompanyCache.data) {
    console.info('Using cached company data from API');
    return apiCompanyCache.data;
  }

  // Prevent multiple simultaneous requests
  if (apiCompanyCache.loading) {
    console.info('Company API data already loading, waiting...');
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (!apiCompanyCache.loading) {
          clearInterval(checkInterval);
          resolve(apiCompanyCache.data);
        }
      }, 100);
    });
  }

  if (!axios) {
    console.warn('No axios instance provided, cannot load from API');
    return null;
  }

  apiCompanyCache.loading = true;
  apiCompanyCache.error = false;

  try {
    console.info('Loading company data from API...');
    
    const response = await axios.get('/api/public/company/findAll');
    const companies = Array.isArray(response.data) ? response.data : [];
    
    // Get the first active company
    const firstActiveCompany = companies.find(company => company.isActive === true);
    
    if (firstActiveCompany) {
      apiCompanyCache.data = firstActiveCompany;
      apiCompanyCache.lastFetch = now;
      
      console.info('Company data loaded from API:', {
        id: firstActiveCompany.id,
        name: firstActiveCompany.name,
        mnemonic: firstActiveCompany.mnemonic,
        hasLogo: !!firstActiveCompany.profile_image_path
      });
      
      return firstActiveCompany;
    } else {
      console.warn('No active company found in API response');
      apiCompanyCache.data = null;
      apiCompanyCache.lastFetch = now;
      return null;
    }

  } catch (error) {
    console.error('Error loading company data from API:', error);
    apiCompanyCache.error = true;
    apiCompanyCache.data = null;
    apiCompanyCache.lastFetch = now;
    return null;
  } finally {
    apiCompanyCache.loading = false;
  }
}

/**
 * Get static company information (fallback)
 * @returns {Object} Static company configuration
 */
export const getStaticCompanyInfo = () => {
  const info = {
    name: '',
    tel: '',
    whatsapp: '',
    imageUrl: '',
    imageName: '',
    address: '',
    ticketLogo: 'TTP_AUTO.jpeg',
    companyLogo: 'TTP_AUTO.jpeg',
    dcLogo: 'Dcommerce-Logo_DC.png',
    env: ''
  }

  return info;
}

/**
 * Enhanced company info function with API integration and fallbacks
 * This is the main function that replaces the original mainCompanyInfo
 * @param {Object} options - Configuration options
 * @returns {Object|Promise<Object>} Company information
 */
export const mainCompanyInfo = (options) => {
  // Legacy usage (backward compatibility) - return sync version
  if (!options || options.getters) {
    // If cached API data is available, use it
    if (apiCompanyCache.data) {
      return {
        name: apiCompanyCache.data.name || '',
        tel: apiCompanyCache.data.tel || '',
        whatsapp: apiCompanyCache.data.tel ? `+856${apiCompanyCache.data.tel.replace(/^0/, '')}` : '',
        imageUrl: apiCompanyCache.data.profile_image_path || '',
        imageName: apiCompanyCache.data.profile_image_path ? apiCompanyCache.data.profile_image_path.split('/').pop() : '',
        address: apiCompanyCache.data.address || '',
        ticketLogo: apiCompanyCache.data.profile_image_path ? apiCompanyCache.data.profile_image_path.split('/').pop() : 'TTP_AUTO.jpeg',
        companyLogo: apiCompanyCache.data.profile_image_path ? apiCompanyCache.data.profile_image_path.split('/').pop() : 'TTP_AUTO.jpeg',
        dcLogo: 'Dcommerce-Logo_DC.png',
        env: '',
        apiData: apiCompanyCache.data,
        mnemonic: apiCompanyCache.data.mnemonic || '',
        id: apiCompanyCache.data.id || null,
      }
    }

    // If options is a store (legacy usage)
    if (options && options.getters && options.getters.findAllCompany) {
      const storeCompany = options.getters.findAllCompany[0];
      if (storeCompany) {
        return storeCompany;
      }
    }

    // Fallback to static configuration
    return getStaticCompanyInfo();
  }

  // Enhanced usage with options
  const { axios, useAPI = true, store } = options;

  // If API usage is requested and axios is available
  if (useAPI && axios) {
    return loadCompanyFromAPI(axios).then(apiData => {
      if (apiData) {
        // Transform API data to match expected format
        return {
          name: apiData.name || '',
          tel: apiData.tel || '',
          whatsapp: apiData.tel ? `+856${apiData.tel.replace(/^0/, '')}` : '',
          imageUrl: apiData.profile_image_path || '',
          imageName: apiData.profile_image_path ? apiData.profile_image_path.split('/').pop() : '',
          address: apiData.address || '',
          ticketLogo: apiData.profile_image_path ? apiData.profile_image_path.split('/').pop() : 'TTP_AUTO.jpeg',
          companyLogo: apiData.profile_image_path ? apiData.profile_image_path.split('/').pop() : 'TTP_AUTO.jpeg',
          dcLogo: 'Dcommerce-Logo_DC.png',
          env: '',
          apiData: apiData,
          mnemonic: apiData.mnemonic || '',
          id: apiData.id || null,
        }
      } else {
        // Fallback to static info if API fails
        return getStaticCompanyInfo();
      }
    }).catch(error => {
      console.error('Error in enhanced mainCompanyInfo:', error);
      return getStaticCompanyInfo();
    });
  }

  // If store is provided, try store first
  if (store && store.getters && store.getters.findAllCompany) {
    const storeCompany = store.getters.findAllCompany[0];
    if (storeCompany) {
      return storeCompany;
    }
  }

  // Default fallback
  return getStaticCompanyInfo();
}

/**
 * Enhanced version for explicit async usage
 * @param {Object} options - Configuration options
 * @returns {Promise<Object>} Company information
 */
export const mainCompanyInfoAsync = async (options = {}) => {
  const { axios, useAPI = true, store } = options;

  // If API usage is requested and axios is available
  if (useAPI && axios) {
    try {
      const apiData = await loadCompanyFromAPI(axios);
      if (apiData) {
        return {
          name: apiData.name || '',
          tel: apiData.tel || '',
          whatsapp: apiData.tel ? `+856${apiData.tel.replace(/^0/, '')}` : '',
          imageUrl: apiData.profile_image_path || '',
          imageName: apiData.profile_image_path ? apiData.profile_image_path.split('/').pop() : '',
          address: apiData.address || '',
          ticketLogo: apiData.profile_image_path ? apiData.profile_image_path.split('/').pop() : 'TTP_AUTO.jpeg',
          companyLogo: apiData.profile_image_path ? apiData.profile_image_path.split('/').pop() : 'TTP_AUTO.jpeg',
          dcLogo: 'Dcommerce-Logo_DC.png',
          env: '',
          apiData: apiData,
          mnemonic: apiData.mnemonic || '',
          id: apiData.id || null,
        }
      }
    } catch (error) {
      console.error('Error loading company data from API:', error);
    }
  }

  // Fallback to static info
  return getStaticCompanyInfo();
}

/**
 * Clear company cache (useful for forcing refresh)
 */
export const clearCompanyCache = () => {
  apiCompanyCache = {
    data: null,
    loading: false,
    error: false,
    lastFetch: null,
    cacheExpiry: 5 * 60 * 1000,
  }
}

/**
 * Preload company data (useful for app initialization)
 * @param {Object} axios - Axios instance
 * @returns {Promise<void>}
 */
export const preloadCompanyData = async (axios) => {
  try {
    await loadCompanyFromAPI(axios);
    console.info('Company data preloaded successfully');
  } catch (error) {
    console.warn('Failed to preload company data:', error);
  }
}

/**
 * Get current cached company info
 * @returns {Object} Company cache object
 */
export const getCompanyCacheInfo = () => {
  return { ...apiCompanyCache };
}