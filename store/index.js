// store/index.js
import { isPackagingProduct } from '~/common'
// All state variables [data] with performance optimizations
export const state = () => ({
    user: '',
    isAuth: true,
    productDetail: null,
    productSearchKeyboard: '',
    isExactMatchSearch: false,
    productPriceList: [],
    productPriceListToCreate: [],
    cartOfproductSelected: [],
    packagingMode: 'SELL', // 'SELL' or 'BUY'
    parkedCarts: [],
    parkedCartCounter: 0,
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
    language: 'lo',

    // Performance optimization additions
    productBarcodeMap: new Map(),
    productCategoryMap: new Map(),
    productSearchCache: new Map(),
    lastCacheUpdate: null,
    productProcessed: false,
    productLocationId: null,
    hasPackagingProducts: false,

    // Performance metrics
    performanceMetrics: {
        lastProductLoadTime: 0,
        productProcessingTime: 0,
        searchPerformance: [],
        cacheHitRate: 0,
    },

    // Cache configuration
    cacheConfig: {
        maxSearchCacheSize: 25,
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

    SET_LANGUAGE(state, lang) {
        state.language = lang
        if (process.client) {
            localStorage.setItem('language', lang)
        }
    },

    SET_PRODUCT_LOCATION_ID(state, locationId) {
        state.productLocationId = locationId
    },

    // Enhanced product list mutation with performance optimization
    SetProductList(state, products) {
        const startTime = performance.now()
        console.log(`📦 Setting ${products?.length || 0} products`)

        if (!Array.isArray(products)) {
            state.productList = Object.freeze([])
            state.productBarcodeMap = new Map()
            state.productCategoryMap = new Map()
            state.productSearchCache.clear()
            state.productProcessed = false
            state.hasPackagingProducts = false
            return
        }

        try {
            const nowTs = Date.now()
            // Build O(1) unit lookup map once instead of calling .find() inside 7,000+ product loops
            const unitMap = new Map()
            if (Array.isArray(state.unitList)) {
                for (let i = 0; i < state.unitList.length; i++) {
                    const u = state.unitList[i]
                    if (u && u.id != null) {
                        unitMap.set(u.id, u)
                    }
                }
            }

            const barcodeMap = new Map()
            const categoryMap = new Map()
            const processedProducts = new Array(products.length)
            let hasPackaging = false

            // Single-pass pre-processing + indexing + deep Object.freeze to prevent Vue 2 Observer memory bloat
            for (let index = 0; index < products.length; index++) {
                const product = products[index]
                if (!product) continue

                const productName = product.pro_name || ''
                const barCode = product.barCode || ''
                const productCode = product.product_code || ''
                const productNameLower = productName.toLowerCase()
                const barCodeLower = barCode.toLowerCase()
                const productCodeLower = productCode.toLowerCase()

                // Freeze nested arrays/objects so Vue 2 never creates reactive Dep/Observer instances on 7,000+ items
                const frozenPriceLists = Array.isArray(product.priceLists)
                    ? Object.freeze(product.priceLists.map(pl => (pl && typeof pl === 'object' ? Object.freeze({ ...pl }) : pl)))
                    : Object.freeze([])

                const frozenProductUnits = Array.isArray(product.productUnits)
                    ? Object.freeze(product.productUnits.map(pu => {
                        if (!pu || typeof pu !== 'object') return pu
                        return Object.freeze({
                            ...pu,
                            unit: pu.unit && typeof pu.unit === 'object' ? Object.freeze({ ...pu.unit }) : pu.unit
                        })
                    }))
                    : Object.freeze([])

                const processed = Object.freeze({
                    ...product,
                    category: product.category && typeof product.category === 'object' ? Object.freeze({ ...product.category }) : product.category,
                    company: product.company && typeof product.company === 'object' ? Object.freeze({ ...product.company }) : product.company,
                    baseUnit: product.baseUnit && typeof product.baseUnit === 'object' ? Object.freeze({ ...product.baseUnit }) : product.baseUnit,
                    stockUnit: product.stockUnit && typeof product.stockUnit === 'object' ? Object.freeze({ ...product.stockUnit }) : product.stockUnit,
                    tax: product.tax && typeof product.tax === 'object' ? Object.freeze({ ...product.tax }) : product.tax,

                    // Ensure required fields
                    id: product.id || product.pro_id || index,
                    pro_price: Number(product.pro_price) || 0,
                    card_count: Number(product.card_count) || 0,
                    pro_category: Number(product.pro_category) || 0,

                    // Pre-computed search fields
                    pro_name_lower: productNameLower,
                    barCode_lower: barCodeLower,
                    product_code_lower: productCodeLower,
                    searchString: `${productNameLower} ${barCodeLower} ${productCodeLower} ${product.pro_id || ''} ${product.id || ''}`,

                    // Price-related
                    priceLists: frozenPriceLists,
                    productUnits: frozenProductUnits,
                    hasSpecialPrice: frozenPriceLists.length > 0,

                    // Stock status
                    isInStock: (Number(product.card_count) || 0) > 0,

                    // Processing metadata
                    _processed: true,
                    _processedAt: nowTs,
                })

                processedProducts[index] = processed

                if (!hasPackaging) {
                    if (
                        processed.isPackagingAsset === true ||
                        processed.isPackagingAsset === 1 ||
                        processed.categoryIsPackaging === true ||
                        processed.categoryIsPackaging === 1 ||
                        processed.category?.isPackaging === true ||
                        processed.category?.isPackaging === 1 ||
                        processed.isReturnablePackaging === true ||
                        processed.isReturnablePackaging === 1 ||
                        isPackagingProduct(processed)
                    ) {
                        hasPackaging = true
                    }
                }

                const stockUnitId = processed.stockUnitId || processed.baseUnitId
                const stockUnitModel = unitMap.get(stockUnitId) || null
                const stockRate = parseFloat(stockUnitModel?.conversionRate || 1.0)

                const baseUnitId = processed.baseUnitId || processed.stockUnitId
                const baseUnitModel = unitMap.get(baseUnitId) || null
                const baseRate = parseFloat(baseUnitModel?.conversionRate || 1.0)
                const baseRelRate = stockRate > 0 ? (baseRate / stockRate) : 1.0

                // Index all nested selling units barcodes FIRST (so specific unit barcodes take precedence)
                for (let uIdx = 0; uIdx < frozenProductUnits.length; uIdx++) {
                    const pu = frozenProductUnits[uIdx]
                    if (pu && pu.barCode) {
                        const unitModel = unitMap.get(pu.unitId || pu.unit?.id) || null
                        const targetUnit = pu.unit || unitModel
                        const targetRate = parseFloat(targetUnit?.conversionRate || 1.0)
                        const relRate = stockRate > 0 ? (targetRate / stockRate) : targetRate
                        const unitId = pu.unitId || targetUnit?.id || baseUnitId
                        const unitSymbol = targetUnit?.symbol || targetUnit?.name || 'pcs'
                        const unitName = targetUnit?.name || targetUnit?.symbol || 'Unit'

                        barcodeMap.set(pu.barCode.toLowerCase(), Object.freeze({
                            product: processed,
                            unit: Object.freeze({
                                id: unitId,
                                name: unitName,
                                symbol: unitSymbol,
                                conversionRate: relRate
                            }),
                            price: Number(pu.price) || processed.pro_price
                        }))
                    }
                }

                // Barcode map for primary product barCode (if not already mapped by a specific unit)
                if (barCodeLower && !barcodeMap.has(barCodeLower)) {
                    const baseUnit = processed.baseUnit || processed.stockUnit || baseUnitModel || stockUnitModel
                    barcodeMap.set(barCodeLower, Object.freeze({
                        product: processed,
                        unit: Object.freeze({
                            id: baseUnitId || stockUnitId || null,
                            name: baseUnit?.name || 'Unit',
                            symbol: baseUnit?.symbol || baseUnit?.name || 'pcs',
                            conversionRate: baseRelRate
                        }),
                        price: processed.pro_price
                    }))
                }

                // Category map for fast filtering
                const categoryId = processed.pro_category
                let catGroup = categoryMap.get(categoryId)
                if (!catGroup) {
                    catGroup = []
                    categoryMap.set(categoryId, catGroup)
                }
                catGroup.push(processed)
            }

            // Freeze category arrays for performance
            categoryMap.forEach((catProducts, categoryId) => {
                categoryMap.set(categoryId, Object.freeze(catProducts))
            })

            // Update state with optimized frozen structures
            state.productList = Object.freeze(processedProducts)
            state.productBarcodeMap = barcodeMap
            state.productCategoryMap = categoryMap
            state.hasPackagingProducts = hasPackaging
            state.productProcessed = true
            state.lastCacheUpdate = nowTs

            // Clear search cache when products are updated
            state.productSearchCache.clear()

            const processingTime = performance.now() - startTime
            state.performanceMetrics.lastProductLoadTime = nowTs
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

    SetExactMatchSearch(state, value) {
        console.log(`🎯 Setting exact match search: ${value}`)
        state.isExactMatchSearch = !!value
        if (state.productSearchCache) {
            state.productSearchCache.clear()
        }
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

    setPackagingMode(state, mode) {
        state.packagingMode = mode === 'BUY' ? 'BUY' : 'SELL'
        console.log(`📦 [VUEX:PACKAGING_MODE] Packaging mode updated to: ${state.packagingMode}`)
    },

    cartOfProduct(state, payload) {
        if (Array.isArray(payload)) {
            state.cartOfproductSelected = payload
        } else if (payload && typeof payload === 'object') {
            this.commit('addProductToCart', payload)
        }
    },

    addProductToCart(state, product) {
        try {
            if (!product || !product.id) {
                console.warn(`⚠️ [VUEX:CART] Invalid product - missing product or product.id:`, product)
                return
            }

            console.log(`📥 [VUEX:CART_START] addProductToCart called for product: "${product.pro_name || product.name}" (ID: ${product.id || product.pro_id}, QtyToAdd: ${product.qty || 1})`)

            // Determine target unit when adding to cart
            let targetUnitId = product.unitId
            let targetRate = product.unitRate
            let targetSymbol = product.unitSymbol
            let targetPrice = product.localPrice || product.pro_price

            if (!targetUnitId) {
                const stockUnitId = product.stockUnitId || product.baseUnitId
                const stockUnit = Array.isArray(state.unitList) ? state.unitList.find(u => u.id === stockUnitId) : null
                const stockRate = parseFloat(stockUnit?.conversionRate || 1.0)

                const baseUnitId = product.baseUnitId || product.stockUnitId
                const baseUnit = Array.isArray(state.unitList) ? state.unitList.find(u => u.id === baseUnitId) : null
                const baseRate = parseFloat(baseUnit?.conversionRate || 1.0)
                const baseSymbol = baseUnit?.symbol || baseUnit?.name || 'pcs'

                // 1. Look for a mapped unit in productUnits marked as isBaseUnit
                let matchedUnit = null
                if (Array.isArray(product.productUnits)) {
                    matchedUnit = product.productUnits.find(pu => pu.isBaseUnit === true || pu.isBaseUnit === 1)
                }

                if (matchedUnit) {
                    const unitModel = Array.isArray(state.unitList) ? state.unitList.find(u => u.id === matchedUnit.unitId) : null
                    const targetU = matchedUnit.unit || unitModel
                    const unitRateVal = parseFloat(targetU?.conversionRate || 1.0)
                    const relRate = stockRate > 0 ? (unitRateVal / stockRate) : unitRateVal

                    targetUnitId = matchedUnit.unitId || targetU?.id
                    targetRate = relRate
                    targetSymbol = targetU?.symbol || targetU?.name || 'pcs'
                    targetPrice = Number(matchedUnit.price) || product.pro_price
                } else {
                    // 2. Fall back to product base unit (rate relative to stock unit)
                    targetUnitId = baseUnitId
                    targetRate = stockRate > 0 ? (baseRate / stockRate) : 1.0
                    targetSymbol = baseSymbol
                    targetPrice = product.pro_price
                }
            }

            const isPkg = isPackagingProduct(product)
            const isBuyMode = state.packagingMode === 'BUY'
            const isReturnTarget = product.isReturn !== undefined
                ? (product.isReturn === true || product.packagingAction === 'RETURNED')
                : (isPkg ? isBuyMode : false)
            const targetProdId = String(product.id || product.pro_id || '')

            const existingProductIndex = state.cartOfproductSelected.findIndex((item) => {
                const itemIsReturn = item.isReturn === true || item.packagingAction === 'RETURNED'
                if (itemIsReturn !== isReturnTarget) return false

                const itemProdId = String(item.id || item.pro_id || '')
                const isSameProduct = targetProdId && itemProdId && (targetProdId === itemProdId)
                if (!isSameProduct) return false

                // If specific lineUUID is requested, match by lineUUID
                if (product.lineUUIDCheck && product.lineUUID) {
                    return item.lineUUID === product.lineUUID
                }

                // If variant (color/size), match id, color, size, unitId, and isGift
                if (product.colorId || product.sizeId) {
                    return item.colorId === product.colorId &&
                           item.sizeId === product.sizeId &&
                           (targetUnitId ? item.unitId === targetUnitId : true) &&
                           item.isGift === product.isGift
                }

                // Standard match: match id, unitId, and isGift
                return (targetUnitId ? item.unitId === targetUnitId : true) &&
                       !item.colorId &&
                       !item.sizeId &&
                       item.isGift === product.isGift
            })

            const addQty = product.qty || 1

            if (existingProductIndex !== -1) {
                state.cartOfproductSelected[existingProductIndex].qty += addQty
                const newQty = state.cartOfproductSelected[existingProductIndex].qty
                console.info(`➕ [VUEX:CART_UPDATE] Incremented quantity: "${product.pro_name || product.name}" -> NewQty: ${newQty} (Unit: ${state.cartOfproductSelected[existingProductIndex].unitSymbol})`)
            } else {
                const cartItem = {
                    ...product,
                    qty: addQty,
                    isReturn: isReturnTarget,
                    packagingAction: isPkg ? (product.packagingAction || (isReturnTarget ? 'RETURNED' : 'SOLD')) : 'NONE',
                    unitId: targetUnitId,
                    unitRate: targetRate || 1.0,
                    unitSymbol: targetSymbol,
                    localPrice: targetPrice,
                    lineUUID: product.lineUUID || (Date.now() + Math.random().toString(16))
                }
                state.cartOfproductSelected.push(cartItem)
                console.info(`🆕 [VUEX:CART_ADD] Added new item to cart: "${product.pro_name || product.name}" (Qty: ${addQty}, Unit: ${targetSymbol}, Price: ${targetPrice}, IsReturn: ${isReturnTarget}). Total cart lines: ${state.cartOfproductSelected.length}`)
            }

        } catch (error) {
            console.error(`❌ [VUEX:CART_ERROR] Error adding product to cart:`, error)
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

    updateCartItemUnit(state, { lineUUID, unitId, unitRate, unitSymbol, localPrice }) {
        const index = state.cartOfproductSelected.findIndex(i => i.lineUUID === lineUUID)
        if (index !== -1) {
            const item = state.cartOfproductSelected[index]
            item.unitId = unitId
            item.unitRate = unitRate
            item.unitSymbol = unitSymbol
            item.localPrice = localPrice
            
            state.cartOfproductSelected.splice(index, 1, { ...item })
            console.log(`Updated cart item ${item.pro_name} to unit ${unitSymbol} (Rate: ${unitRate}, Price: ${localPrice})`)
        }
    },

    TOGGLE_ITEM_RETURN(state, { lineUUID, id }) {
        const index = state.cartOfproductSelected.findIndex(i => 
            lineUUID ? i.lineUUID === lineUUID : i.id === id
        )
        if (index !== -1) {
            const item = state.cartOfproductSelected[index]
            const isCurrentlyReturn = item.isReturn === true || item.packagingAction === 'RETURNED'
            item.isReturn = !isCurrentlyReturn
            const isPkg = isPackagingProduct(item)
            item.packagingAction = isPkg ? (item.isReturn ? 'RETURNED' : 'SOLD') : 'NONE'
            state.cartOfproductSelected.splice(index, 1, { ...item })
            console.log(`[VUEX] Toggled item return: ${item.pro_name} -> isReturn: ${item.isReturn}, action: ${item.packagingAction}`)
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
        state.parkedCarts = []
        state.parkedCartCounter = 0
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

    // In-Memory Cart Parking Mutations
    PARK_CART(state, parkedTicket) {
        if (!Array.isArray(state.parkedCarts)) {
            state.parkedCarts = []
        }
        if (typeof state.parkedCartCounter !== 'number') {
            state.parkedCartCounter = 0
        }
        state.parkedCartCounter += 1
        const ticketWithNo = {
            ...parkedTicket,
            ticketNo: parkedTicket.ticketNo || state.parkedCartCounter,
        }
        state.parkedCarts.push(ticketWithNo)
        state.cartOfproductSelected = []
    },

    REMOVE_PARKED_CART(state, ticketId) {
        if (!Array.isArray(state.parkedCarts)) {
            state.parkedCarts = []
        }
        state.parkedCarts = state.parkedCarts.filter(t => t.id !== ticketId)
    },

    CLEAR_ALL_PARKED_CARTS(state) {
        state.parkedCarts = []
        state.parkedCartCounter = 0
    },

    RESTORE_CART(state, items) {
        state.cartOfproductSelected = JSON.parse(JSON.stringify(items || []))
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
    isExactMatchSearch: (state) => !!state.isExactMatchSearch,
    cartOfProduct: (state) => state.cartOfproductSelected || [],
    packagingMode: (state) => state.packagingMode || 'SELL',
    findAllParkedCarts: (state) => state.parkedCarts || [],
    parkedCartsCount: (state) => (state.parkedCarts || []).length,
    currenctSelectedCategoryId: (state) => state.selectedCategoryId || 9999,
    currentSelectedCustomer: (state) => state.selectedCustomer,
    currentSelectedPayment: (state) => state.selectedPayment || (state.paymentList && state.paymentList.length > 0 ? state.paymentList[0].id : null),
    currentSelectedLocation: (state) => state.selectedLocation,
    isLoading: (state) => state.isLoading,
    isDataInitialized: (state) => state.dataInitialized,
    hasPackagingProducts: (state) => !!state.hasPackagingProducts,
    getErrors: (state) => state.errors || [],

    // Variant Getters
    variantProduct: (state) => state.variantProduct,
    variantCards: (state) => state.variantCards,
    variantDialogOpen: (state) => state.variantDialogOpen,

    // Enhanced performance getters
    getProductByBarcode: (state) => (barcode) => {
        const mapped = state.productBarcodeMap.get(barcode?.toLowerCase())
        return mapped ? mapped.product : null
    },

    getProductsByCategory: (state) => (categoryId) => {
        if (categoryId === 9999) return state.productList
        return state.productCategoryMap.get(categoryId) || []
    },

    searchProducts: (state) => (keyword, categoryId, exactMatch = null) => {
        const isExact = exactMatch !== null ? exactMatch : !!state.isExactMatchSearch
        const cleanKeyword = keyword ? keyword.trim() : ''

        // Fast-path when no search keyword is entered: return frozen category or full list directly without cloning/caching
        if (!cleanKeyword) {
            if (categoryId && categoryId !== 9999) {
                return state.productCategoryMap.get(categoryId) || []
            }
            return state.productList || []
        }

        const cacheKey = `${cleanKeyword}_${categoryId || 9999}_${isExact ? 'exact' : 'fuzzy'}`

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

        const searchTerm = cleanKeyword.toLowerCase()
        if (isExact) {
            results = (categoryId && categoryId !== 9999 ? results : (state.productList || [])).filter(product =>
                product.product_code_lower === searchTerm ||
                product.barCode_lower === searchTerm
            )
        } else {
            results = results.filter(product =>
                product.searchString?.includes(searchTerm)
            )
        }

        const searchTime = performance.now() - startTime

        // Cache only non-empty keyword results (bounded to maxSearchCacheSize)
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

let _inFlightProductPromise = null
let _inFlightProductLocationId = null
let _inFlightInitiateDataPromise = null

// Enhanced actions with performance optimizations
export const actions = {
    // Error handling actions
    addError({ commit }, error) {
        commit('ADD_ERROR', error)
    },

    clearErrors({ commit }) {
        commit('CLEAR_ERRORS')
    },

    setPackagingMode({ commit }, mode) {
        commit('setPackagingMode', mode)
    },

    setLoading({ commit }, isLoading) {
        commit('SET_LOADING', isLoading)
    },

    // Enhanced product initialization with in-flight deduplication
    async initializeProductsByLocation({ state, commit, dispatch }, payload) {
        const isObj = payload && typeof payload === 'object'
        const locationId = (isObj ? payload.locationId : payload) || state.selectedLocation?.id || 1
        const force = isObj ? !!payload.force : false

        // If an identical location product fetch is already in flight, reuse it
        if (_inFlightProductPromise && String(_inFlightProductLocationId) === String(locationId)) {
            console.info(`⏳ Reusing in-flight product load for location ${locationId}`)
            return _inFlightProductPromise
        }

        // If products for this location were very recently loaded (< 5s ago) and not forced, skip duplicate reload
        if (
            !force &&
            state.productProcessed &&
            state.productList.length > 0 &&
            String(state.productLocationId) === String(locationId) &&
            state.lastCacheUpdate &&
            Date.now() - state.lastCacheUpdate < 5000
        ) {
            console.info(`⚡ Skipping duplicate product reload for location ${locationId} (${state.productList.length} products already fresh)`)
            return
        }

        commit('SET_LOADING', true)
        commit('CLEAR_ERRORS')

        _inFlightProductLocationId = locationId
        _inFlightProductPromise = (async () => {
            try {
                console.info(`🚀 Loading ALL products for location ${locationId}`)
                const startTime = performance.now()

                const response = await this.$axios.get(`product_f_v1/${locationId}?include=priceList`)

                const loadTime = performance.now() - startTime
                console.info(`📡 API call completed in ${loadTime.toFixed(2)}ms`)

                commit('SET_PRODUCT_LOCATION_ID', locationId)
                await dispatch('initProduct', response.data.data)

                const totalTime = performance.now() - startTime
                console.info(`✅ ALL products initialized in ${totalTime.toFixed(2)}ms`)

            } catch (error) {
                console.error(`Product initialization failed: ${error.message || error}`)
                commit('ADD_ERROR', error)
                throw error
            } finally {
                commit('SET_LOADING', false)
                _inFlightProductPromise = null
                _inFlightProductLocationId = null
            }
        })()

        return _inFlightProductPromise
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

    parkCurrentCart({ commit, state }, payload = {}) {
        try {
            if (!state.cartOfproductSelected || state.cartOfproductSelected.length === 0) {
                return { success: false, message: 'Cart is empty' }
            }

            const itemsClone = JSON.parse(JSON.stringify(state.cartOfproductSelected))
            const ticketId = 'park_' + Date.now() + '_' + Math.floor(Math.random() * 1000)
            const ticketNo = (state.parkedCartCounter || 0) + 1

            const totalItems = itemsClone.reduce((sum, item) => sum + (Number(item.qty) || 0), 0)

            const parkedTicket = {
                id: ticketId,
                ticketNo,
                parkedAt: new Date().toISOString(),
                note: payload.note || '',
                customer: payload.customer || state.selectedCustomer || null,
                customerForm: payload.customerForm ? JSON.parse(JSON.stringify(payload.customerForm)) : null,
                items: itemsClone,
                discount: payload.discount || 0,
                redeemedPoints: payload.redeemedPoints || 0,
                referenceNo: payload.referenceNo || '',
                totalAmount: payload.totalAmount || 0,
                totalItems,
            }

            commit('PARK_CART', parkedTicket)
            return { success: true, ticket: parkedTicket }
        } catch (error) {
            console.error('Error parking cart:', error)
            commit('ADD_ERROR', error)
            return { success: false, error }
        }
    },

    resumeParkedCart({ commit, state }, ticketId) {
        try {
            const ticket = (state.parkedCarts || []).find(t => t.id === ticketId)
            if (!ticket) {
                return { success: false, message: 'Parked ticket not found' }
            }

            commit('RESTORE_CART', ticket.items)
            if (ticket.customer) {
                commit('setSelectedCustomer', ticket.customer)
            }
            commit('REMOVE_PARKED_CART', ticketId)

            return { success: true, ticket }
        } catch (error) {
            console.error('Error resuming parked cart:', error)
            commit('ADD_ERROR', error)
            return { success: false, error }
        }
    },

    deleteParkedCart({ commit }, ticketId) {
        try {
            commit('REMOVE_PARKED_CART', ticketId)
            return { success: true }
        } catch (error) {
            console.error('Error deleting parked cart:', error)
            commit('ADD_ERROR', error)
            return { success: false, error }
        }
    },

    clearAllParkedCartsAction({ commit }) {
        try {
            commit('CLEAR_ALL_PARKED_CARTS')
            return { success: true }
        } catch (error) {
            console.error('Error clearing all parked carts:', error)
            commit('ADD_ERROR', error)
            return { success: false, error }
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
            console.log(`🎬 [VUEX:addProduct_ACTION] Dispatch received for: "${product?.pro_name || product?.name}" (ID: ${product?.id || product?.pro_id}, Qty: ${product?.qty || 1})`)

            const isPkg = isPackagingProduct(product)
            const isBuyMode = state.packagingMode === 'BUY'
            const isReturnTarget = product.isReturn !== undefined
                ? (product.isReturn === true || product.packagingAction === 'RETURNED')
                : (isPkg ? isBuyMode : false)

            // Check if STOCK.VAR is enabled
            const stockVarSpf = state.SPF.find(spf => spf.code === 'STOCK.VAR')
            const isStockVarEnabled = stockVarSpf?.value === 'Y'

            // If STOCK.VAR is not enabled, or product is a return/buy item, or the product has bypass flag, add directly.
            if (!isStockVarEnabled || product.hasVariantSelected || isReturnTarget) {
                console.log(`➡️ [VUEX:addProduct_ACTION] Adding directly to cart (STOCK.VAR=${isStockVarEnabled}, isReturnTarget=${isReturnTarget})`)
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

    changeItemUnit({ commit }, payload) {
        commit('updateCartItemUnit', payload)
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

    async initiateData({ state, commit, dispatch }, axios) {
        if (_inFlightInitiateDataPromise) {
            console.info('⏳ Reusing in-flight initiateData promise')
            return _inFlightInitiateDataPromise
        }

        const targetAxios = axios || this.$axios
        commit('SET_LOADING', true)
        commit('CLEAR_ERRORS')

        _inFlightInitiateDataPromise = (async () => {
            try {
                const initPromises = [
                    initTerminal(dispatch, targetAxios),
                    initPrinters(dispatch, targetAxios),
                    initLocation(dispatch, targetAxios),
                    initClient(dispatch, targetAxios),
                    initCurrency(dispatch, targetAxios),
                    initPayment(dispatch, targetAxios),
                    initSPF(dispatch, targetAxios),
                    initUnit(dispatch, targetAxios),
                    initCompanyData(dispatch, targetAxios)
                ]

                await Promise.allSettled(initPromises)
                const locationId = state.selectedLocation?.id || 1
                await initProduct(dispatch, targetAxios, locationId, commit)

                commit('SET_DATA_INITIALIZED', true)
            } catch (error) {
                console.error("Failed to initialize data:", error)
                commit('ADD_ERROR', error)
            } finally {
                commit('SET_LOADING', false)
                _inFlightInitiateDataPromise = null
            }
        })()

        return _inFlightInitiateDataPromise
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

const initProduct = async (dispatch, axios, locationId = 1, commit = null) => {
    if (_inFlightProductPromise && String(_inFlightProductLocationId) === String(locationId)) {
        return _inFlightProductPromise
    }

    console.info(`fetch product initialize for location ${locationId}`)
    _inFlightProductLocationId = locationId
    _inFlightProductPromise = (async () => {
        try {
            const response = await axios.get(`product_f_v1/${locationId}?include=priceList`)
            console.info(`fetch product product_f_v1 initialize response: ${response.data?.data?.length || 0} products`)
            if (commit) {
                commit('SET_PRODUCT_LOCATION_ID', locationId)
            }
            await dispatch('initProduct', response.data.data)
        } catch (error) {
            console.error(`Product initialization failed: ${error.message || error}`)
            await dispatch('addError', `Product initialization failed: ${error.message || error}`)
            throw error
        } finally {
            _inFlightProductPromise = null
            _inFlightProductLocationId = null
        }
    })()

    return _inFlightProductPromise
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