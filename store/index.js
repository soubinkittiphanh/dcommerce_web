// store/index.js
// All state variables [data] with performance optimizations
export const state = () => ({
    user: '',
    isAuth: true,
    productDetail: null,
    productSearchKeyboard: '',
    productPriceList: [],
    productPriceListToCreate: [],
    cartOfproductSelected: [],
    listOfConfirmStockInOrder: [],
    listOfConfirmPaymentOrder: [],
    selectedCategoryId: 9999,
    selectedCustomer: null,
    selectedPayment: null,
    selectedLocation: null,
    currencyList: [],
    productList: [],
    paymentList: [],
    clientList: [],
    unitList: [],
    terminalList: [],
    printers: [],
    locationList: [],
    selectedTerminal: null,
    companyList: [],
    // Add loading states
    isLoading: false,
    dataInitialized: false,
    errors: [],
    customerForm: {
        name: '',
        tel: '',
        address: '',
        rider_fee: 0,
        txn_date: null,
        shipping_fee_by: 'destination',
        shippingId: 1,
        riderId: 1,
        geoId: 1,
        discount: 0,
    },
    SPF: [],

    // Performance optimization additions
    productBarcodeMap: new Map(),
    productCategoryMap: new Map(),
    productSearchCache: new Map(),
    lastCacheUpdate: null,
    productProcessed: false,

    // Performance metrics
    performanceMetrics: {
        lastProductLoadTime: 0,
        productProcessingTime: 0,
        searchPerformance: [],
        cacheHitRate: 0,
    },

    // Cache configuration
    cacheConfig: {
        maxSearchCacheSize: 100,
        cacheTimeout: 5 * 60 * 1000, // 5 minutes
    },

    // Feature flags
    featureFlags: {
        enableProductCaching: true,
        debugPerformance: process.env.NODE_ENV === 'development',
    },

    // Stock variant parameters
    variantProduct: null,
    variantCards: [],
    variantDialogOpen: false,
})

// Enhanced mutations with performance optimizations
export const mutations = {
    // Loading state mutations
    SET_LOADING(state, isLoading) {
        state.isLoading = isLoading
    },

    SET_DATA_INITIALIZED(state, initialized) {
        state.dataInitialized = initialized
    },

    ADD_ERROR(state, error) {
        state.errors.push({
            message: error.message || error,
            timestamp: new Date().toISOString()
        })
        // Keep only last 50 errors
        if (state.errors.length > 50) {
            state.errors = state.errors.slice(-50)
        }
    },

    CLEAR_ERRORS(state) {
        state.errors = []
    },

    // Enhanced product list mutation with performance optimization
    SetProductList(state, products) {
        const startTime = performance.now()
        console.log(`📦 Setting ${products?.length || 0} products`)

        if (!Array.isArray(products)) {
            state.productList = []
            state.productBarcodeMap.clear()
            state.productCategoryMap.clear()
            state.productProcessed = false
            return
        }

        try {
            // Pre-process products for optimal performance
            const processedProducts = products.map((product, index) => {
                const productName = product.pro_name || ''
                const barCode = product.barCode || ''

                return {
                    ...product,
                    // Ensure required fields
                    id: product.id || product.pro_id || index,
                    pro_price: Number(product.pro_price) || 0,
                    card_count: Number(product.card_count) || 0,
                    pro_category: Number(product.pro_category) || 0,

                    // Pre-computed search fields
                    pro_name_lower: productName.toLowerCase(),
                    barCode_lower: barCode.toLowerCase(),
                    searchString: `${productName} ${barCode}`.toLowerCase(),

                    // Price-related
                    priceLists: Array.isArray(product.priceLists) ? product.priceLists : [],
                    hasSpecialPrice: Array.isArray(product.priceLists) && product.priceLists.length > 0,

                    // Stock status
                    isInStock: (Number(product.card_count) || 0) > 0,

                    // Processing metadata
                    _processed: true,
                    _processedAt: Date.now(),
                }
            })

            // Build lookup maps for O(1) access
            const barcodeMap = new Map()
            const categoryMap = new Map()

            processedProducts.forEach(product => {
                // Barcode map for instant lookup
                if (product.barCode) {
                    barcodeMap.set(product.barCode, product)
                }

                // Category map for fast filtering
                const categoryId = product.pro_category
                if (!categoryMap.has(categoryId)) {
                    categoryMap.set(categoryId, [])
                }
                categoryMap.get(categoryId).push(product)
            })

            // Freeze category arrays for performance
            categoryMap.forEach((products, categoryId) => {
                categoryMap.set(categoryId, Object.freeze(products))
            })

            // Update state with optimized structures
            state.productList = Object.freeze(processedProducts)
            state.productBarcodeMap = barcodeMap
            state.productCategoryMap = categoryMap
            state.productProcessed = true
            state.lastCacheUpdate = Date.now()

            // Clear search cache when products are updated
            state.productSearchCache.clear()

            const processingTime = performance.now() - startTime
            state.performanceMetrics.lastProductLoadTime = Date.now()
            state.performanceMetrics.productProcessingTime = processingTime

            console.log(`✅ Products processed in ${processingTime.toFixed(2)}ms`)
            console.log(`🗺️ Created ${barcodeMap.size} barcode mappings`)
            console.log(`📁 Created ${categoryMap.size} category groups`)

        } catch (error) {
            console.error('🚨 Error processing products:', error)
            state.productProcessed = false
            throw error
        }
    },

    // Cache management mutations
    SET_PRODUCT_SEARCH_CACHE(state, { key, result, searchTime }) {
        if (!state.featureFlags.enableProductCaching) return

        // Implement LRU cache behavior
        if (state.productSearchCache.size >= state.cacheConfig.maxSearchCacheSize) {
            const firstKey = state.productSearchCache.keys().next().value
            state.productSearchCache.delete(firstKey)
        }

        state.productSearchCache.set(key, {
            result: Object.freeze(result),
            timestamp: Date.now(),
            searchTime
        })
    },

    CLEAR_PRODUCT_CACHES(state) {
        state.productSearchCache.clear()
    },

    // Existing mutations (keeping them exactly as they are)
    UPDATE_QTY(state, { productId, qty }) {
        console.info(`update qty ${qty} ${productId}`)
        try {
            const product = state.cartOfproductSelected.find(p => p.id === productId)
            if (product && qty >= 0) {
                product.qty = qty
            } else {
                console.warn('Product not found OR qty invalid:', { productId, qty })
            }
        } catch (error) {
            console.error('Error updating quantity:', error)
        }
    },

    initProductPriceList(state, productPrices) {
        state.productPriceList = Array.isArray(productPrices) ? productPrices : []
    },

    addProductPriceListToCreate(state, productPrices) {
        if (productPrices) {
            state.productPriceListToCreate.push(productPrices)
        }
    },

    deleteProductPriceListToCreate(state, index) {
        if (index >= 0 && index < state.productPriceListToCreate.length) {
            state.productPriceListToCreate.splice(index, 1)
        }
    },

    clearProductPriceListToCreate(state) {
        state.productPriceListToCreate = []
    },

    removeFromStockConfirm(state, order) {
        if (order && order.trackingNumber) {
            state.listOfConfirmStockInOrder = state.listOfConfirmStockInOrder.filter(
                item => item.trackingNumber !== order.trackingNumber
            )
        }
    },

    removeFromPaymentConfirm(state, order) {
        if (order && order.trackingNumber) {
            state.listOfConfirmPaymentOrder = state.listOfConfirmPaymentOrder.filter(
                item => item.trackingNumber !== order.trackingNumber
            )
        }
    },

    clearConfirmPaymentList(state) {
        state.listOfConfirmPaymentOrder = []
    },

    setSPF(state, spfList) {
        state.SPF = [...spfList]
    },

    clearCustomerForm(state) {
        state.customerForm = {
            name: '',
            tel: '',
            address: '',
            rider_fee: 0,
            txn_date: null,
            shipping_fee_by: 'destination',
            shippingId: 1,
            riderId: 1,
            geoId: 1,
            discount: 0,
        }
    },

    setCustomerForm(state, payload) {
        if (payload && typeof payload === 'object') {
            state.customerForm = { ...state.customerForm, ...payload }
        }
    },

    clearConfirmStockList(state) {
        state.listOfConfirmStockInOrder = []
    },

    SetCurrencyList(state, currency) {
        state.currencyList = Array.isArray(currency) ? currency : []
    },

    SetUnitList(state, unit) {
        state.unitList = Array.isArray(unit) ? unit : []
    },

    SetTerminalList(state, terminal) {
        state.terminalList = Array.isArray(terminal) ? terminal : []
    },
    SetPrintersList(state, printers) {
        state.printers = Array.isArray(printers) ? printers : []
    },

    SetLocationList(state, location) {
        state.locationList = Array.isArray(location) ? location : []
    },

    SetClientList(state, client) {
        if (Array.isArray(client)) {
            state.clientList = client.map(item => ({
                ...item,
                company: item.company && item.name ? `${item.company} - ${item.name}` : item.company || item.name || 'Unknown',
            }))
        } else {
            state.clientList = []
        }
    },

    SetPaymentList(state, payment) {
        state.paymentList = Array.isArray(payment) ? payment : []
    },

    ChooseTerminal(state, terminalId) {
        if (terminalId !== null && terminalId !== undefined) {
            state.selectedTerminal = terminalId
        }
    },

    SetClass(state, bodyClass) {
        state.bodyClass = bodyClass
    },

    SetSearchKeyword(state, value) {
        console.log(`🔍 Setting search keyword: "${value}"`) // Debug log
        state.productSearchKeyboard = value || ''
    },

    setSelecteCategoryId(state, categoryId) {
        state.selectedCategoryId = categoryId || 9999
    },

    setSelectedCustomer(state, customer) {
        state.selectedCustomer = customer
    },

    setSelectedPayment(state, paymentId) {
        state.selectedPayment = paymentId || 1
    },

    setSelectedLocation(state, location) {
        state.selectedLocation = location
    },

    addPaymentConfirmList(state, order) {
        if (order && order.trackingNumber &&
            !state.listOfConfirmPaymentOrder.some(item => item.trackingNumber === order.trackingNumber)) {
            state.listOfConfirmPaymentOrder.push(order)
        }
    },

    addStockInConfirmList(state, order) {
        if (order && order.trackingNumber &&
            !state.listOfConfirmStockInOrder.some(item => item.trackingNumber === order.trackingNumber)) {
            state.listOfConfirmStockInOrder.push(order)
        }
    },

    addProductToCart(state, product) {
        try {
            if (!product || !product.id) {
                console.warn(`⚠️ [CART] Invalid product - missing product or product.id`)
                return
            }

            const existingProductIndex = state.cartOfproductSelected.findIndex((item) => {
                // If it's a variant, match product ID and specific color and size (and gift status)
                if (product.colorId || product.sizeId) {
                    return item.id === product.id &&
                           item.colorId === product.colorId &&
                           item.sizeId === product.sizeId &&
                           item.isGift === product.isGift
                }
                if (!product.lineUUIDCheck) {
                    return item.id === product.id && !item.colorId && !item.sizeId && item.isGift === product.isGift
                } else {
                    return item.id === product.id && item.lineUUID === product.lineUUID
                }
            })

            const addQty = product.qty || 1

            if (existingProductIndex !== -1) {
                state.cartOfproductSelected[existingProductIndex].qty += addQty
                console.info(`➕ [CART_UPDATE] Increased quantity by ${addQty} for existing product`)
            } else {
                const cartItem = {
                    ...product,
                    qty: addQty,
                    lineUUID: product.lineUUID || (Date.now() + Math.random().toString(16))
                }
                state.cartOfproductSelected.push(cartItem)
                console.info(`🆕 [CART_ADD] Added new product to cart with quantity ${addQty}`)
            }

        } catch (error) {
            console.error(`❌ [ERROR] Error adding product to cart:`, error)
        }
    },

    setGiftForCartItem(state, { item, giftConfig }) {
        const {
            isFullGift,
            originalQuantity,
            giftQuantity,
            regularQuantity,
            giftAmount,
            giftNote,
            originalPrice
        } = giftConfig

        const index = state.cartOfproductSelected.findIndex(i => i.lineUUID === item.lineUUID)
        if (index === -1) return

        const cartItem = state.cartOfproductSelected[index]
        console.info(`item ${JSON.stringify(item)}`)
        console.info(`giftConfig ${JSON.stringify(giftConfig)}`)
        console.info(`cart existed item ${JSON.stringify(cartItem)}`)
        if (isFullGift) {
            cartItem.isGift = true
            cartItem.qty = originalQuantity
            cartItem.localPrice = giftAmount
            cartItem.giftNote = giftNote
            cartItem.priceListId = null //SET TO NULL

            return
        }

        state.cartOfproductSelected.splice(index, 1)
        // TODO: UPDATE PRICILST NULL HERE
        if (regularQuantity > 0) {
            state.cartOfproductSelected.push({
                ...cartItem,
                qty: regularQuantity,
                isGift: false,
                localPrice: originalPrice,
                giftNote: null,
                lineUUID: Date.now() + Math.random().toString(16)
            })
        }

        if (giftQuantity > 0) {
            cartItem.priceListId = null //SET TO NULL
            state.cartOfproductSelected.push({
                ...cartItem,
                qty: giftQuantity,
                isGift: true,
                localPrice: giftAmount,
                giftNote: giftNote,
                lineUUID: Date.now() + Math.random().toString(16)
            })
        }
    },

    // updateProductCartV1(state, productInfo) {
    //     try {
    //         if (!productInfo || !productInfo.productId) return

    //         const productId = productInfo.productId
    //         const price = productInfo.amount
    //         const productIdxFound = state.cartOfproductSelected.findIndex(el => el.id == productId)

    //         if (productIdxFound < 0) return

    //         let newPrice = 0
    //         const product = state.cartOfproductSelected[productIdxFound]

    //         if (productInfo.type !== 'Price') {
    //             newPrice = (product.localPrice * price / 100) * product.qty
    //             newPrice += product.localPrice
    //         } else {
    //             newPrice = price * product.qty
    //         }

    //         state.cartOfproductSelected[productIdxFound].localPrice = newPrice
    //         state.cartOfproductSelected[productIdxFound].priceListId = productInfo.id
    //     } catch (error) {
    //         console.error('Error updating product cart:', error)
    //     }
    // },
    // ✅ FIXED: Vuex store mutation for updating product cart
    // ✅ FIXED: Vuex store mutation for updating product cart
    // updateProductCartV2(state, productInfo) {
    //     try {
    //         console.info(`Product info ${JSON.stringify(productInfo)}`);

    //         // ✅ FIXED: Check for productId properly
    //         if (!productInfo) {
    //             console.error('No productInfo provided');
    //             return;
    //         }

    //         const productId = productInfo.productId;
    //         if (!productId) {
    //             console.error('No productId provided in productInfo');
    //             return;
    //         }

    //         const productIdxFound = state.cartOfproductSelected.findIndex(el => el.id == productId);

    //         if (productIdxFound < 0) {
    //             console.error(`Product with id ${productId} not found in cart`);
    //             return;
    //         }

    //         const product = state.cartOfproductSelected[productIdxFound];
    //         let newLocalPrice = 0;

    //         console.log(`Processing product: ${product.pro_name}, current localPrice: ${product.localPrice}, qty: ${product.qty}`);

    //         if (productInfo.type !== 'Price') {
    //             // ✅ PERCENTAGE/DISCOUNT: Apply percentage to current localPrice
    //             const currentUnitPrice = product.localPrice / product.qty;
    //             const discountAmount = (currentUnitPrice * productInfo.amount / 100);

    //             if (productInfo.type === 'Discount') {
    //                 newLocalPrice = currentUnitPrice - discountAmount;
    //             } else {
    //                 newLocalPrice = currentUnitPrice + discountAmount;
    //             }

    //             newLocalPrice = Math.max(0, newLocalPrice);

    //         } else {
    //             // ✅ FIXED PRICE: Use the converted local amount from component
    //             if (productInfo.localAmount !== undefined) {
    //                 newLocalPrice = productInfo.localAmount; // This should already be the unit price
    //                 console.log(`Using localAmount: ${productInfo.localAmount}`);
    //             } else {
    //                 // Fallback: use original amount (assume it's already in local currency)
    //                 newLocalPrice = productInfo.amount;
    //                 console.log(`Using original amount as fallback: ${productInfo.amount}`);
    //             }
    //         }

    //         // Update the product in cart
    //         state.cartOfproductSelected[productIdxFound].localPrice = newLocalPrice;
    //         state.cartOfproductSelected[productIdxFound].priceListId = productInfo.id;

    //         // ✅ NEW: Store original currency info for reference
    //         if (productInfo.currencyId) {
    //             state.cartOfproductSelected[productIdxFound].saleCurrencyId = productInfo.currencyId;
    //             state.cartOfproductSelected[productIdxFound].originalPrice = productInfo.amount;
    //         }

    //         console.log(`Updated product ${productId}: localPrice=${newLocalPrice}, total=${newLocalPrice * product.qty}`);

    //     } catch (error) {
    //         console.error('Error updating product cart:', error);
    //     }
    // },
    // ✅ FIXED: Vuex store mutation - handle original price info without conversion
    updateProductCart(state, productInfo) {
        try {
            console.info(`Product info ${JSON.stringify(productInfo)}`);

            if (!productInfo) {
                console.error('No productInfo provided');
                return;
            }

            const productId = productInfo.productId;
            if (!productId) {
                console.error('No productId provided in productInfo');
                return;
            }

            const productIdxFound = state.cartOfproductSelected.findIndex(el => el.id == productId);

            if (productIdxFound < 0) {
                console.error(`Product with id ${productId} not found in cart`);
                return;
            }

            const product = state.cartOfproductSelected[productIdxFound];
            let newLocalPrice = 0;

            console.log(`Processing product: ${product.pro_name}, current localPrice: ${product.localPrice}, qty: ${product.qty}`);

            if (productInfo.type !== 'Price') {
                // ✅ PERCENTAGE/DISCOUNT: Apply percentage to current localPrice
                const currentUnitPrice = product.localPrice / product.qty;
                const discountAmount = (currentUnitPrice * productInfo.amount / 100);

                if (productInfo.type === 'Discount') {
                    newLocalPrice = currentUnitPrice - discountAmount;
                } else {
                    newLocalPrice = currentUnitPrice + discountAmount;
                }

                newLocalPrice = Math.max(0, newLocalPrice);

            } else {
                // ✅ FIXED PRICE: Use original amount directly (no conversion here)
                // The conversion will be handled by the cart footer component
                newLocalPrice = productInfo.amount;
                console.log(`Using original amount directly: ${productInfo.amount}`);
            }

            // Update the product in cart
            state.cartOfproductSelected[productIdxFound].localPrice = newLocalPrice;
            state.cartOfproductSelected[productIdxFound].priceListId = productInfo.id;

            // ✅ Store original currency info for reference
            if (productInfo.currencyId) {
                state.cartOfproductSelected[productIdxFound].saleCurrencyId = productInfo.currencyId;
                state.cartOfproductSelected[productIdxFound].originalPrice = productInfo.amount;
            }

            console.log(`Updated product ${productId}: localPrice=${newLocalPrice}, total=${newLocalPrice * product.qty}`);

        } catch (error) {
            console.error('Error updating product cart:', error);
        }
    },
    removeProductFromCart(state, product) {
        try {
            if (!product || !product.id) return

            const existingProduct = state.cartOfproductSelected.find(item =>
                item.id === product.id && item.lineUUID === product.lineUUID
            )

            if (existingProduct) {
                if (existingProduct.qty > 1) {
                    existingProduct.qty--
                } else {
                    state.cartOfproductSelected = state.cartOfproductSelected.filter(
                        item => item.lineUUID !== product.lineUUID
                    )
                }
            }
        } catch (error) {
            console.error('Error removing product from cart:', error)
        }
    },

    clearProductFromCart(state, product) {
        if (product && product.lineUUID) {
            state.cartOfproductSelected = state.cartOfproductSelected.filter(
                item => item.lineUUID !== product.lineUUID
            )
        }
    },

    clearAllProductFromCart(state) {
        state.cartOfproductSelected = []
    },

    setUser(state, payload) {
        if (payload) {
            state.user = {
                name: payload.name || '',
                id: payload.id || '',
                phone: payload.phone || '',
                token: payload.token || ''
            }
        }
    },

    setLogin(state) {
        state.isAuth = true
    },

    setLogout(state) {
        state.isAuth = false
        state.user = ''
        state.cartOfproductSelected = []
        state.selectedCustomer = null
        // Clear caches on logout
        state.productSearchCache.clear()
    },

    setProductDetail(state, payload) {
        state.productDetail = payload
    },

    setCompanyList(state, payload) {
        state.companyList = Array.isArray(payload) ? payload : []
    },

    SET_VARIANT_DATA(state, { product, cards }) {
        state.variantProduct = product
        state.variantCards = cards
    },

    SET_VARIANT_DIALOG(state, isOpen) {
        state.variantDialogOpen = isOpen
    },

    CLEAR_VARIANT_DATA(state) {
        state.variantProduct = null
        state.variantCards = []
        state.variantDialogOpen = false
    },
}

// Enhanced getters with performance optimizations
export const getters = {
    findCustomerForm: (state) => state.customerForm || {},
    findAllListOfConfirmStockIn: (state) => state.listOfConfirmStockInOrder || [],
    findAllListOfConfirmPayment: (state) => state.listOfConfirmPaymentOrder || [],
    findAllProduct: (state) => state.productList || [],
    findAllProductPriceListToCreate: (state) => state.productPriceListToCreate || [],
    findAllTerminal: (state) => state.terminalList || [],
    findAllprinters: (state) => state.printers || [],
    findAllLocation: (state) => state.locationList || [],
    findAllCompany: (state) => state.companyList || [],
    findAllPayment: (state) => state.paymentList || [],
    findAllClient: (state) => state.clientList || [],
    findAllCurrency: (state) => state.currencyList || [],
    findLocalCurrency: (state) => {
        return (state.currencyList || []).find(currency => currency.isLocalCCY);
    },
    findAllUnit: (state) => state.unitList || [],
    findSPF: (state) => state.SPF || [],
    isAuth: (state) => state.isAuth,
    findSelectedProductDetail: (state) => state.productDetail,
    findSelectedTerminal: (state) => state.selectedTerminal,
    searchKeyword: (state) => state.productSearchKeyboard || '',
    cartOfProduct: (state) => state.cartOfproductSelected || [],
    currenctSelectedCategoryId: (state) => state.selectedCategoryId || 9999,
    currentSelectedCustomer: (state) => state.selectedCustomer,
    currentSelectedPayment: (state) => state.selectedPayment || (state.paymentList && state.paymentList.length > 0 ? state.paymentList[0].id : null),
    currentSelectedLocation: (state) => state.selectedLocation,
    isLoading: (state) => state.isLoading,
    isDataInitialized: (state) => state.dataInitialized,
    getErrors: (state) => state.errors || [],

    // Variant Getters
    variantProduct: (state) => state.variantProduct,
    variantCards: (state) => state.variantCards,
    variantDialogOpen: (state) => state.variantDialogOpen,

    // Enhanced performance getters
    getProductByBarcode: (state) => (barcode) => {
        return state.productBarcodeMap.get(barcode) || null
    },

    getProductsByCategory: (state) => (categoryId) => {
        if (categoryId === 9999) return state.productList
        return state.productCategoryMap.get(categoryId) || []
    },

    searchProducts: (state) => (keyword, categoryId) => {
        const cacheKey = `${keyword || ''}_${categoryId || 9999}`

        // Check cache first
        if (state.productSearchCache.has(cacheKey)) {
            return state.productSearchCache.get(cacheKey).result
        }

        const startTime = performance.now()
        let results = state.productList || []

        // Apply category filter first
        if (categoryId && categoryId !== 9999) {
            results = state.productCategoryMap.get(categoryId) || []
        }

        // Apply search filter
        if (keyword && keyword.length > 0) {
            const searchTerm = keyword.toLowerCase()
            results = results.filter(product =>
                product.searchString.includes(searchTerm) ||
                product.pro_name_lower.includes(searchTerm) ||
                product.barCode_lower.includes(searchTerm)
            )
        }

        const searchTime = performance.now() - startTime

        // Cache the result
        if (state.featureFlags.enableProductCaching) {
            if (state.productSearchCache.size >= state.cacheConfig.maxSearchCacheSize) {
                const firstKey = state.productSearchCache.keys().next().value
                state.productSearchCache.delete(firstKey)
            }

            state.productSearchCache.set(cacheKey, {
                result: Object.freeze(results),
                timestamp: Date.now(),
                searchTime
            })
        }

        return results
    },

    // Performance metrics
    getProductStats: (state) => ({
        totalProducts: state.productList.length,
        categoriesCount: state.productCategoryMap.size,
        barcodeMapSize: state.productBarcodeMap.size,
        cacheSize: state.productSearchCache.size,
        isProcessed: state.productProcessed,
        lastCacheUpdate: state.lastCacheUpdate,
    }),
}

// Enhanced actions with performance optimizations
export const actions = {
    // Error handling actions
    addError({ commit }, error) {
        commit('ADD_ERROR', error)
    },

    clearErrors({ commit }) {
        commit('CLEAR_ERRORS')
    },

    setLoading({ commit }, isLoading) {
        commit('SET_LOADING', isLoading)
    },

    // Enhanced product initialization
    async initializeProductsByLocation({ commit, dispatch }, locationId) {
        commit('SET_LOADING', true)
        commit('CLEAR_ERRORS')

        try {
            console.info(`🚀 Loading ALL products for location ${locationId}`)
            const startTime = performance.now()

            const response = await this.$axios.get(`product_f_v1/${locationId}?include=priceList`)

            const loadTime = performance.now() - startTime
            console.info(`📡 API call completed in ${loadTime.toFixed(2)}ms`)

            await dispatch('initProduct', response.data.data)

            const totalTime = performance.now() - startTime
            console.info(`✅ ALL products initialized in ${totalTime.toFixed(2)}ms`)

        } catch (error) {
            console.error(`Product initialization failed: ${error.message || error}`)
            commit('ADD_ERROR', error)
            throw error
        } finally {
            commit('SET_LOADING', false)
        }
    },

    // Cache management
    clearProductCaches({ commit }) {
        commit('CLEAR_PRODUCT_CACHES')
    },

    // All existing actions (keeping them exactly as they are)
    clearCustomerFormAction({ commit }) {
        try {
            commit("clearCustomerForm")
        } catch (error) {
            console.error('Error clearing customer form:', error)
            commit('ADD_ERROR', error)
        }
    },

    assignCustomerFormAction({ commit }, payload) {
        try {
            commit("setCustomerForm", payload)
        } catch (error) {
            console.error('Error assigning customer form:', error)
            commit('ADD_ERROR', error)
        }
    },

    clearPaymentList({ commit }) {
        try {
            commit("clearConfirmPaymentList")
        } catch (error) {
            console.error('Error clearing payment list:', error)
            commit('ADD_ERROR', error)
        }
    },

    clearStockList({ commit }) {
        try {
            commit("clearConfirmStockList")
        } catch (error) {
            console.error('Error clearing stock list:', error)
            commit('ADD_ERROR', error)
        }
    },

    removeOrderFromStockConfirm({ commit }, order) {
        try {
            commit("removeFromStockConfirm", order)
        } catch (error) {
            console.error('Error removing order from stock confirm:', error)
            commit('ADD_ERROR', error)
        }
    },

    removeOrderFromPaymentConfirm({ commit }, order) {
        try {
            commit("removeFromPaymentConfirm", order)
        } catch (error) {
            console.error('Error removing order from payment confirm:', error)
            commit('ADD_ERROR', error)
        }
    },

    addOrderToConfirmPaymentList({ commit }, payload) {
        try {
            commit("addPaymentConfirmList", payload)
        } catch (error) {
            console.error('Error adding order to payment list:', error)
            commit('ADD_ERROR', error)
        }
    },

    addOrderToConfirmStockInList({ commit }, payload) {
        try {
            commit("addStockInConfirmList", payload)
        } catch (error) {
            console.error('Error adding order to stock list:', error)
            commit('ADD_ERROR', error)
        }
    },

    login({ commit }, payload) {
        try {
            commit("setUser", payload)
            commit("setLogin")
        } catch (error) {
            console.error('Error during login:', error)
            commit('ADD_ERROR', error)
        }
    },

    logout({ commit }) {
        try {
            commit("setLogout")
        } catch (error) {
            console.error('Error during logout:', error)
            commit('ADD_ERROR', error)
        }
    },

    clearCart({ commit }) {
        try {
            commit("clearAllProductFromCart")
        } catch (error) {
            console.error('Error clearing cart:', error)
            commit('ADD_ERROR', error)
        }
    },

    assignProductDetail({ commit }, payload) {
        try {
            commit("setProductDetail", payload)
        } catch (error) {
            console.error('Error assigning product detail:', error)
            commit('ADD_ERROR', error)
        }
    },

    async addProduct({ state, commit, dispatch }, product) {
        try {
            // Check if STOCK.VAR is enabled
            const stockVarSpf = state.SPF.find(spf => spf.code === 'STOCK.VAR')
            const isStockVarEnabled = stockVarSpf?.value === 'Y'

            // If STOCK.VAR is not enabled, or the product has bypass flag, add directly.
            if (!isStockVarEnabled || product.hasVariantSelected) {
                commit("addProductToCart", product)
                return
            }

            // Fetch cards for this product to check if it has variants in stock
            const locationId = state.selectedLocation?.id || 
                             (state.selectedTerminal && state.terminalList?.find(t => t.id == state.selectedTerminal)?.locationId) || 
                             1;

            commit('SET_LOADING', true)
            try {
                const response = await this.$axios.get(`api/card_f?pro_id=${product.pro_id}&includeColorSize=true`)
                commit('SET_LOADING', false)

                const cards = response.data?.data || response.data || []
                // Filter for available cards (card_isused === 0) at the selected location
                const availableCards = cards.filter(c => c.card_isused === 0 && c.locationId === locationId)

                // If specific variant details are already provided (e.g. from cart adjustment)
                if (product.colorId || product.sizeId) {
                    const variantCards = availableCards.filter(c => 
                        (!product.colorId || c.colorId === product.colorId) &&
                        (!product.sizeId || c.sizeId === product.sizeId)
                    )
                    const stockLimit = variantCards.length
                    
                    const existingInCart = state.cartOfproductSelected.find(item => 
                        item.id === product.id && 
                        item.colorId === product.colorId && 
                        item.sizeId === product.sizeId &&
                        item.isGift === product.isGift
                    )
                    const currentQty = existingInCart ? existingInCart.qty : 0
                    const addQty = product.qty || 1

                    if (currentQty + addQty > stockLimit && product.validateStockOnSale == 1) {
                        const errorMsg = `ຈຳນວນໃນກະຕ່າ (${currentQty + addQty}) ເກີນຈຳນວນສິນຄ້າໃນສາງ (${stockLimit})`
                        const toast = this.$toast || (this._vm && this._vm.$toast)
                        if (toast) {
                            toast.error(errorMsg)
                        }
                        return
                    }

                    commit("addProductToCart", product)
                    return
                }

                // Check if any of the available cards have colorId or sizeId
                const hasVariants = availableCards.some(c => c.colorId || c.sizeId)

                if (hasVariants) {
                    // It has variants! Open the dialog
                    commit('SET_VARIANT_DATA', { product, cards: availableCards })
                    commit('SET_VARIANT_DIALOG', true)
                } else {
                    // Check generic stock limit
                    const stockLimit = availableCards.length
                    const existingInCart = state.cartOfproductSelected.filter(item => item.id === product.id)
                    const currentQty = existingInCart.reduce((sum, item) => sum + item.qty, 0)
                    const addQty = product.qty || 1

                    if (currentQty + addQty > stockLimit && product.validateStockOnSale == 1) {
                        const errorMsg = `ຈຳນວນໃນກະຕ່າ (${currentQty + addQty}) ເກີນຈຳນວນສິນຄ້າໃນສາງ (${stockLimit})`
                        const toast = this.$toast || (this._vm && this._vm.$toast)
                        if (toast) {
                            toast.error(errorMsg)
                        }
                        return
                    }

                    commit("addProductToCart", product)
                }
            } catch (apiError) {
                console.error('API call failed during variant check, falling back to direct add:', apiError)
                commit('SET_LOADING', false)
                commit("addProductToCart", product)
            }
        } catch (error) {
            console.error('Error adding product:', error)
            commit('ADD_ERROR', error)
        }
    },

    initSPF({ commit }, spfList) {
        try {
            commit("setSPF", spfList)
        } catch (error) {
            console.error('Error adding SPF:', error)
            commit('ADD_ERROR', error)
        }
    },

    updateProduct({ commit }, product) {
        try {
            commit("updateProductCart", product)
        } catch (error) {
            console.error('Error updating product:', error)
            commit('ADD_ERROR', error)
        }
    },

    setSelectedTerminal({ commit }, terminalId) {
        try {
            commit("ChooseTerminal", terminalId)
        } catch (error) {
            console.error('Error setting selected terminal:', error)
            commit('ADD_ERROR', error)
        }
    },

    setSelectedLocation({ commit }, location) {
        try {
            commit("setSelectedLocation", location)
        } catch (error) {
            console.error('Error setting selected location:', error)
            commit('ADD_ERROR', error)
        }
    },

    deleteProduct({ commit }, product) {
        try {
            commit("removeProductFromCart", product)
        } catch (error) {
            console.error('Error deleting product:', error)
            commit('ADD_ERROR', error)
        }
    },

    updateSelectedCategoryId({ commit }, categoryId) {
        try {
            commit("setSelecteCategoryId", categoryId)
        } catch (error) {
            console.error('Error updating selected category:', error)
            commit('ADD_ERROR', error)
        }
    },

    deleteProductFromCart({ commit }, product) {
        try {
            commit("clearProductFromCart", product)
        } catch (error) {
            console.error('Error deleting product from cart:', error)
            commit('ADD_ERROR', error)
        }
    },

    addCustomer({ commit }, customer) {
        try {
            commit("setSelectedCustomer", customer)
        } catch (error) {
            console.error('Error adding customer:', error)
            commit('ADD_ERROR', error)
        }
    },

    addSelectedPayment({ commit }, paymentId) {
        try {
            commit("setSelectedPayment", paymentId)
        } catch (error) {
            console.error('Error adding selected payment:', error)
            commit('ADD_ERROR', error)
        }
    },

    initProduct({ commit }, product) {
        try {
            commit("SetProductList", product)
        } catch (error) {
            console.error('Error initializing products:', error)
            commit('ADD_ERROR', error)
        }
    },

    initProductPrices({ commit }, product) {
        try {
            commit("initProductPriceList", product)
        } catch (error) {
            console.error('Error initializing product prices:', error)
            commit('ADD_ERROR', error)
        }
    },

    addProductPricesToCreate({ commit }, product) {
        try {
            commit("addProductPriceListToCreate", product)
        } catch (error) {
            console.error('Error adding product prices to create:', error)
            commit('ADD_ERROR', error)
        }
    },

    deleteProductPricesToCreate({ commit }, index) {
        try {
            commit("deleteProductPriceListToCreate", index)
        } catch (error) {
            console.error('Error deleting product prices to create:', error)
            commit('ADD_ERROR', error)
        }
    },

    clearProductPricesToCreate({ commit }) {
        try {
            commit("clearProductPriceListToCreate")
        } catch (error) {
            console.error('Error clearing product prices to create:', error)
            commit('ADD_ERROR', error)
        }
    },

    initPayment({ commit }, payment) {
        try {
            commit("SetPaymentList", payment)
        } catch (error) {
            console.error('Error initializing payments:', error)
            commit('ADD_ERROR', error)
        }
    },

    initCurrency({ commit }, currency) {
        try {
            commit("SetCurrencyList", currency)
        } catch (error) {
            console.error('Error initializing currencies:', error)
            commit('ADD_ERROR', error)
        }
    },

    initClient({ commit }, client) {
        try {
            commit("SetClientList", client)
        } catch (error) {
            console.error('Error initializing clients:', error)
            commit('ADD_ERROR', error)
        }
    },

    initUnit({ commit }, unit) {
        try {
            commit("SetUnitList", unit)
        } catch (error) {
            console.error('Error initializing units:', error)
            commit('ADD_ERROR', error)
        }
    },

    initTerminal({ commit }, terminal) {
        try {
            commit("SetTerminalList", terminal)
        } catch (error) {
            console.error('Error initializing terminals:', error)
            commit('ADD_ERROR', error)
        }
    },
    initPrinters({ commit }, printers) {
        console.info(`initial printers`)
        try {
            commit("SetPrintersList", printers)
        } catch (error) {
            console.error('Error initializing printers:', error)
            commit('ADD_ERROR', error)
        }
    },

    async refreshPrintersAction({ dispatch }) {
        console.info(`Refreshing printers from API...`)
        try {
            await initPrinters(dispatch, this.$axios)
        } catch (error) {
            console.error('Error refreshing printers:', error)
        }
    },

    initLocation({ commit }, location) {
        try {
            commit("SetLocationList", location)
        } catch (error) {
            console.error('Error initializing locations:', error)
            commit('ADD_ERROR', error)
        }
    },

    initCompany({ commit }, company) {
        try {
            commit("setCompanyList", company)
        } catch (error) {
            console.error('Error initializing companies:', error)
            commit('ADD_ERROR', error)
        }
    },

    async initiateData({ commit, dispatch }, axios) {
        commit('SET_LOADING', true)
        commit('CLEAR_ERRORS')

        try {
            const initPromises = [
                initTerminal(dispatch, axios),
                initPrinters(dispatch, axios),
                initLocation(dispatch, axios),
                initClient(dispatch, axios),
                initCurrency(dispatch, axios),
                initPayment(dispatch, axios),
                initSPF(dispatch, axios),
                initUnit(dispatch, axios),
                initCompanyData(dispatch, axios)
            ]

            await Promise.allSettled(initPromises)
            await initProduct(dispatch, axios)

            commit('SET_DATA_INITIALIZED', true)
        } catch (error) {
            console.error("Failed to initialize data:", error)
            commit('ADD_ERROR', error)
        } finally {
            commit('SET_LOADING', false)
        }
    },

    async initiateDataCompany({ commit, dispatch }, axios) {
        commit('SET_LOADING', true)
        try {
            await initCompanyData(dispatch, axios)
        } catch (error) {
            console.error("Failed to initialize company data:", error)
            commit('ADD_ERROR', error)
        } finally {
            commit('SET_LOADING', false)
        }
    },

    async nuxtServerInit({ dispatch }, { app, error }) {
        try {
            if (app.$axios) {
                await dispatch('initiateDataCompany', app.$axios)
            }
        } catch (err) {
            console.error('Server init error:', err)
        }
    }
}

// Helper functions (keeping them exactly as they are)
const fetchData = async (url, action, dispatch, axios, errorMessage) => {
    try {
        const response = await axios.get(url)
        await dispatch(action, response.data?.data ?? response.data)
    } catch (error) {
        console.error(`${errorMessage}: ${error.message || error}`)
        await dispatch('addError', `${errorMessage}: ${error.message || error}`)
        throw error
    }
}

const initProduct = async (dispatch, axios) => {
    console.info(`fetch product initialize`)
    try {
        const response = await axios.get('product_f_v1/1?include=priceList')
        console.info(`fetch product product_f_v1 initialize response: ${response.data?.data?.length || 0} products`)
        await dispatch('initProduct', response.data.data)
    } catch (error) {
        console.error(`Product initialization failed: ${error.message || error}`)
        await dispatch('addError', `Product initialization failed: ${error.message || error}`)
        throw error
    }
}

const initClient = (dispatch, axios) =>
    fetchData('api/client/find', 'initClient', dispatch, axios, 'Client initialization failed')

const initPayment = (dispatch, axios) =>
    fetchData('api/paymentMethod/find', 'initPayment', dispatch, axios, 'Payment initialization failed')

const initSPF = async (dispatch, axios) => {
    try {
        const response = await axios.get('api/SPF/find')
        console.info(`SPF initialization response: ${JSON.stringify(response.data)}`)
        const spfData = response.data.data || response.data
        await dispatch('initSPF', spfData)
    } catch (error) {
        console.error(`SPF initialization failed: ${error.message || error}`)
        await dispatch('addError', `SPF initialization failed: ${error.message || error}`)
        throw error
    }
}

const initProductPrices = async (dispatch, axios) => {
    console.info(`fetch priceList initialize`)
    try {
        const response = await axios.get('api/product/find/active')
        console.info(`fetch priceList initialize response ${JSON.stringify(response.data)}`)
        await dispatch('initProductPrices', response.data.data.products)
    } catch (error) {
        console.error(`PriceList initialization failed: ${error.message || error}`)
        await dispatch('addError', `PriceList initialization failed: ${error.message || error}`)
        throw error
    }
}

const initCurrency = async (dispatch, axios) => {
    try {
        const response = await axios.get('api/currency/findAll')
        let data = response.data?.data ?? response.data
        if (Array.isArray(data)) {
            data = data.filter(c => c.isActive === true || c.isActive === 1)
        }
        await dispatch('initCurrency', data)
    } catch (error) {
        console.error(`Currency initialization failed: ${error.message || error}`)
        await dispatch('addError', `Currency initialization failed: ${error.message || error}`)
        throw error
    }
}
const initLocation = (dispatch, axios) =>
    fetchData('api/location/find', 'initLocation', dispatch, axios, 'Location initialization failed')

const initTerminal = (dispatch, axios) =>
    fetchData('api/terminal/find', 'initTerminal', dispatch, axios, 'Terminal initialization failed')

const initPrinters = (dispatch, axios) =>
    fetchData('api/printers', 'initPrinters', dispatch, axios, 'Printer initialization failed')

const initUnit = (dispatch, axios) =>
    fetchData('api/unit/find', 'initUnit', dispatch, axios, 'Unit initialization failed')

const initCompanyData = (dispatch, axios) =>
    fetchData('api/public/company/findAll', 'initCompany', dispatch, axios, 'Company initialization failed')