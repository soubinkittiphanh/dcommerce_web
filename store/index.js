// store/index.js
// All state variables [data]
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
    selectedPayment: 1,
    selectedLocation: null,
    currencyList: [],
    productList: [],
    paymentList: [],
    clientList: [],
    unitList: [],
    terminalList: [],
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
})

// Mutations with better error handling
export const mutations = {
    // Add loading state mutations
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
    },

    CLEAR_ERRORS(state) {
        state.errors = []
    },

    UPDATE_QTY(state, { productId, qty }) {
        console.info(`update qty ${qty} ${productId}`)
        try {
            console.log('Updating qty for productId:', productId)
            console.log('Current cart items:', JSON.stringify(state.cartOfproductSelected, null, 2))

            const product = state.cartOfproductSelected.find(p => p.id === productId)

            console.log('Item found:', JSON.stringify(product, null, 2))

            if (product && qty >= 0) {
                product.qty = qty
                console.log('Updated product:', JSON.stringify(product, null, 2))
            } else {
                console.warn(
                    'Product not found OR qty invalid:',
                    JSON.stringify({ product, qty }, null, 2)
                )
            }

            console.log('Cart after update:', JSON.stringify(state.cartOfproductSelected, null, 2))

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

    SetProductList(state, product) {
        state.productList = Array.isArray(product) ? product : []
    },

    SetClass(state, bodyClass) {
        state.bodyClass = bodyClass
    },

    SetSearchKeyword(state, value) {
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
        console.info(`🛒 [CART] Starting addProductToCart for product:`, JSON.stringify(product));

        try {
            // Input validation
            if (!product || !product.id) {
                console.warn(`⚠️ [CART] Invalid product - missing product or product.id`);
                return;
            }

            // Customer grade checking
            const customerGrade = state.selectedCustomer?.grade;
            console.info(`👤 [CUSTOMER] Selected customer:`, JSON.stringify(state.selectedCustomer));
            console.info(`🏷️ [GRADE] Customer grade: "${customerGrade}"`);

            let customerPrice = null;

            // Check if customer has a grade and productPriceList exists
            if (customerGrade && Array.isArray(state.productPriceList)) {
                console.info(`📊 [PRICELIST] ProductPriceList length: ${state.productPriceList.length}`);

                // Find the product in price list
                const productPrice = state.productPriceList.find(p => p.id === product.id);
                console.info(`🔍 [SEARCH] Found product in price list:`, productPrice ? 'YES' : 'NO');

                if (productPrice) {
                    console.info(`💰 [PRODUCT_PRICE] Product price data:`, JSON.stringify(productPrice));

                    if (Array.isArray(productPrice.priceLists)) {
                        console.info(`📋 [PRICELISTS] Available price lists count: ${productPrice.priceLists.length}`);
                        console.info(`📋 [PRICELISTS] Available grades:`, productPrice.priceLists.map(pl => pl.grade));

                        // Find price list for customer grade
                        const priceList = productPrice.priceLists.find(pl => pl.grade === customerGrade);
                        console.info(`🎯 [GRADE_MATCH] Found price for grade "${customerGrade}":`, priceList ? 'YES' : 'NO');
                        console.info(`🎯 [GRADE_MATCH] Found price for grade "${JSON.stringify(priceList)}'`);
                        if (priceList) {
                            product.priceListId = priceList.id;
                            customerPrice = priceList.amount;
                            console.info(`💵 [CUSTOMER_PRICE] Customer price found: ${customerPrice}`);
                        } else {
                            console.warn(`⚠️ [GRADE_MATCH] No price list found for customer grade "${customerGrade}"`);
                        }
                    } else {
                        console.warn(`⚠️ [PRICELISTS] productPrice.priceLists is not an array:`, typeof productPrice.priceLists);
                    }
                } else {
                    console.warn(`⚠️ [SEARCH] Product with ID ${product.id} not found in productPriceList`);
                }
            } else {
                if (!customerGrade) {
                    console.info(`ℹ️ [GRADE] No customer grade - using default price`);
                }
                if (!Array.isArray(state.productPriceList)) {
                    console.warn(`⚠️ [PRICELIST] productPriceList is not an array:`, typeof state.productPriceList);
                }
            }

            // Price calculation
            const originalProductLocalPrice = product.localPrice;
            product.localPrice = customerPrice ?? product.localPrice;
           

            console.info(`💰 [PRICING] Original price: ${originalProductLocalPrice}`);
            console.info(`💰 [PRICING] Customer price: ${customerPrice}`);
            console.info(`💰 [PRICING] Final price used: ${product.localPrice}`);
            console.info(`💰 [PRICING] Final price id used: ${product.priceListId}`);

            // Check for existing product in cart
            console.info(`🔍 [CART_SEARCH] lineUUIDCheck: ${product.lineUUIDCheck}`);

            const existingProductIndex = state.cartOfproductSelected.findIndex((item) => {
                if (!product.lineUUIDCheck) {
                    console.info(`🔍 [CART_SEARCH] Searching by ID only: ${item.id} === ${product.id}`);
                    return item.id === product.id;
                } else {
                    console.info(`🔍 [CART_SEARCH] Searching by ID and lineUUID: ${item.id} === ${product.id} && ${item.lineUUID} === ${product.lineUUID}`);
                    return item.id === product.id && item.lineUUID === product.lineUUID;
                }
            });

            console.info(`🔍 [CART_SEARCH] Existing product index: ${existingProductIndex}`);

            // Add or update cart
            if (existingProductIndex !== -1) {
                state.cartOfproductSelected[existingProductIndex].qty++;
                console.info(`➕ [CART_UPDATE] Increased quantity for existing product. New qty: ${state.cartOfproductSelected[existingProductIndex].qty}`);
            } else {
                state.cartOfproductSelected.push({ ...product, qty: 1 });
                console.info(`🆕 [CART_ADD] Added new product to cart. Cart length: ${state.cartOfproductSelected.length}`);
            }

            // Restore original price
            product.localPrice = originalProductLocalPrice;
            console.info(`🔄 [CLEANUP] Restored original product price: ${originalProductLocalPrice}`);

            console.info(`✅ [CART] Successfully completed addProductToCart. Final cart:`, JSON.stringify(state.cartOfproductSelected.map(item => ({
                id: item.id,
                name: item.pro_name,
                price: item.localPrice,
                qty: item.qty
            }))));

        } catch (error) {
            console.error(`❌ [ERROR] Error adding product to cart:`, error);
            console.error(`❌ [ERROR] Stack trace:`, error.stack);
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

        // 1. Find the target item in cart by lineUUID
        const index = state.cartOfproductSelected.findIndex(i => i.lineUUID === item.lineUUID)
        if (index === -1) return

        const cartItem = state.cartOfproductSelected[index]

        // CASE A — All quantity becomes gift
        if (isFullGift) {
            cartItem.isGift = true
            cartItem.qty = originalQuantity
            cartItem.localPrice = giftAmount // often 0
            cartItem.giftNote = giftNote
            return
        }

        // CASE B — Split line: some gift, some regular
        // Remove original line
        state.cartOfproductSelected.splice(index, 1)

        // Add regular part (if > 0)
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

        // Add gift part (if > 0)
        if (giftQuantity > 0) {
            state.cartOfproductSelected.push({
                ...cartItem,
                qty: giftQuantity,
                isGift: true,
                localPrice: giftAmount, // probably zero
                giftNote: giftNote,
                lineUUID: Date.now() + Math.random().toString(16)
            })
        }

        console.warn(`AFTER GIFT SET ${JSON.stringify(state.cartOfproductSelected)}`)
    },

    updateProductCart(state, productInfo) {
        try {
            if (!productInfo || !productInfo.productId) return
            console.info(`PRODUCT CART UPDATE ${JSON.stringify(productInfo)}`)
            const productId = productInfo.productId
            const price = productInfo.amount
            const productIdxFound = state.cartOfproductSelected.findIndex(el => el.id == productId)

            if (productIdxFound < 0) return

            let newPrice = 0
            const product = state.cartOfproductSelected[productIdxFound]

            if (productInfo.type !== 'Price') {
                newPrice = (product.localPrice * price / 100) * product.qty
                newPrice += product.localPrice
            } else {
                newPrice = price * product.qty
            }

            state.cartOfproductSelected[productIdxFound].localPrice = newPrice
            state.cartOfproductSelected[productIdxFound].priceListId = productInfo.id
            console.info(`Sale line updated ${JSON.stringify(state.cartOfproductSelected[productIdxFound])}`)
        } catch (error) {
            console.error('Error updating product cart:', error)
        }
    },

    removeProductFromCart(state, product) {
        console.info(`remove from cart ${JSON.stringify(product)}`)
        try {
            if (!product || !product.id) return

            const existingProduct = state.cartOfproductSelected.find(item => item.id === product.id && item.lineUUID === product.lineUUID)
            if (existingProduct) {
                if (existingProduct.qty > 1) {
                    existingProduct.qty--
                } else {
                    state.cartOfproductSelected = state.cartOfproductSelected.filter(
                        item => item.id !== product.id
                    )
                }
            }
        } catch (error) {
            console.error('Error removing product from cart:', error)
        }
    },

    clearProductFromCart(state, product) {
        if (product && product.id) {
            state.cartOfproductSelected = state.cartOfproductSelected.filter(
                // item => item.id !== product.id && item.lineUUID === product.lineUUID
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
        // Clear sensitive data on logout
        state.cartOfproductSelected = []
        state.selectedCustomer = null
    },

    setProductDetail(state, payload) {
        state.productDetail = payload
    },

    setCompanyList(state, payload) {
        state.companyList = Array.isArray(payload) ? payload : []
    },
}

// Improved getters with null safety
export const getters = {
    findCustomerForm: (state) => state.customerForm || {},
    findAllListOfConfirmStockIn: (state) => state.listOfConfirmStockInOrder || [],
    findAllListOfConfirmPayment: (state) => state.listOfConfirmPaymentOrder || [],
    findAllProduct: (state) => state.productList || [],
    findAllProductPriceListToCreate: (state) => state.productPriceListToCreate || [],
    findAllTerminal: (state) => state.terminalList || [],
    findAllLocation: (state) => state.locationList || [],
    findAllCompany: (state) => state.companyList || [],
    findAllPayment: (state) => state.paymentList || [],
    findAllClient: (state) => state.clientList || [],
    findAllCurrency: (state) => state.currencyList || [],
    findAllUnit: (state) => state.unitList || [],
    findSPF: (state) => state.SPF || [],
    isAuth: (state) => state.isAuth,
    findSelectedProductDetail: (state) => state.productDetail,
    findSelectedTerminal: (state) => state.selectedTerminal,
    searchKeyword: (state) => state.productSearchKeyboard || '',
    cartOfProduct: (state) => state.cartOfproductSelected || [],
    currenctSelectedCategoryId: (state) => state.selectedCategoryId || 9999,
    currentSelectedCustomer: (state) => state.selectedCustomer,
    currentSelectedPayment: (state) => state.selectedPayment || 1,
    currentSelectedLocation: (state) => state.selectedLocation,
    // Add loading state getters
    isLoading: (state) => state.isLoading,
    isDataInitialized: (state) => state.dataInitialized,
    getErrors: (state) => state.errors || [],
}

// Improved actions with better error handling
export const actions = {
    // Add error handling actions
    addError({ commit }, error) {
        commit('ADD_ERROR', error)
    },

    clearErrors({ commit }) {
        commit('CLEAR_ERRORS')
    },

    setLoading({ commit }, isLoading) {
        commit('SET_LOADING', isLoading)
    },

    // Existing actions with error handling
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

    addProduct({ commit }, product) {
        try {
            commit("addProductToCart", product)
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
                initLocation(dispatch, axios),
                initClient(dispatch, axios),
                initCurrency(dispatch, axios),
                initPayment(dispatch, axios),
                initSPF(dispatch, axios),
                initUnit(dispatch, axios),
                initCompanyData(dispatch, axios)
            ]

            // Add product initialization after other data is loaded
            await Promise.allSettled(initPromises)

            // Initialize products after locations are loaded
            await initProduct(dispatch, axios)
            await initProductPrices(dispatch, axios)

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

    // Add server-side initialization for Nuxt
    async nuxtServerInit({ dispatch }, { app, error }) {
        try {
            // Server-side initialization logic
            if (app.$axios) {
                // Only initialize essential data on server
                await dispatch('initiateDataCompany', app.$axios)
            }
        } catch (err) {
            console.error('Server init error:', err)
            // Don't crash the app on server init errors
        }
    }
}

// Helper functions with improved error handling
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
    console.info(`fetch product initize`)
    try {
        // Default to location ID 1 if no location is selected
        const response = await axios.get('product_f/1')
        console.info(`fetch product initize response ${JSON.stringify(response.data)}`)
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

        // Assuming the API returns { data: [...] } structure like your product API
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
        // Fetch all product price lists
        const response = await axios.get('api/product/find/active')
        console.info(`fetch priceList initialize response ${JSON.stringify(response.data)}`)
        await dispatch('initProductPrices', response.data.data.products)
    } catch (error) {
        console.error(`PriceList initialization failed: ${error.message || error}`)
        await dispatch('addError', `PriceList initialization failed: ${error.message || error}`)
        throw error
    }
}
const initCurrency = (dispatch, axios) =>
    fetchData('api/currency/find', 'initCurrency', dispatch, axios, 'Currency initialization failed')

const initLocation = (dispatch, axios) =>
    fetchData('api/location/find', 'initLocation', dispatch, axios, 'Location initialization failed')

const initTerminal = (dispatch, axios) =>
    fetchData('api/terminal/find', 'initTerminal', dispatch, axios, 'Terminal initialization failed')

const initUnit = (dispatch, axios) =>
    fetchData('api/unit/find', 'initUnit', dispatch, axios, 'Unit initialization failed')

const initCompanyData = (dispatch, axios) =>
    fetchData('api/public/company/findAll', 'initCompany', dispatch, axios, 'Company initialization failed')