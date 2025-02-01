// all sate variable [data]
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
    }
})

// the function to update state variable should be called by setter [actions]
export const mutations = {

    initProductPriceList(state, productPrices) {
        state.productPriceList = productPrices;
    },
    addProductPriceListToCreate(state, productPrices) {
        state.productPriceListToCreate.push(productPrices);
    },
    deleteProductPriceListToCreate(state, index) {
        // Ensure index is valid before attempting to delete
        if (index >= 0 && index < state.productPriceListToCreate.length) {
            state.productPriceListToCreate.splice(index, 1);
        }
    },
    clearProductPriceListToCreate(state) {
        state.productPriceListToCreate = [];
    },
    removeFromStockConfirm(state, order) {
        state.listOfConfirmStockInOrder = state.listOfConfirmStockInOrder.filter(item => item.trackingNumber !== order.trackingNumber);

    },
    removeFromPaymentConfirm(state, order) {
        state.listOfConfirmPaymentOrder = state.listOfConfirmPaymentOrder.filter(item => item.trackingNumber !== order.trackingNumber);

    },
    clearConfirmPaymentList(state) {

        state.listOfConfirmPaymentOrder = [];
        console.log(`LIST OF PAYMENT HAS BEEN CLEARED`);
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
        console.log(`customer form has been cleared `);
    },
    setCustomerForm(state, payload) {
        console.log(`customer form has been assigned `);
        state.customerForm = payload
    },
    clearConfirmStockList(state) {

        state.listOfConfirmStockInOrder.length = 0
        console.log(`LIST OF STOCK HAS BEEN CLEARED ${state.listOfConfirmStockInOrder.length}`);
    },
    SetCurrencyList(state, currency) {
        state.currencyList = currency
    },
    SetUnitList(state, unit) {
        state.unitList = unit
    },
    SetTerminalList(state, terminal) {
        state.terminalList = terminal
    },
    SetLocationList(state, location) {
        state.locationList = location
    },
    SetClientList(state, client) {

        state.clientList = client.map(item => ({
            ...item,
            company: `${item.company} - ${item.name}`,
        }));
    },
    SetPaymentList(state, payment) {
        state.paymentList = payment
    },
    ChooseTerminal(state, terminalId) {
        state.selectedTerminal = terminalId
    },
    SetProductList(state, product) {
        state.productList = product
    },
    SetClass(state, bodyClass) {
        state.bodyClass = bodyClass
    },
    SetSearchKeyword(state, value) {
        state.productSearchKeyboard = value
    },
    setSelecteCategoryId(state, categoryId) {
        state.selectedCategoryId = categoryId
    },
    setSelectedCustomer(state, customer) {
        state.selectedCustomer = customer
    },
    setSelectedPayment(state, paymentId) {
        state.selectedPayment = paymentId
    },
    setSelectedLocation(state, location) {
        state.selectedLocation = location
    },

    addPaymentConfirmList(state, order) {
        if (!state.listOfConfirmPaymentOrder.some(item => item.trackingNumber === order.trackingNumber)) {
            state.listOfConfirmPaymentOrder.push(order);
        }
        console.log(`Order added to mutation payment. Total: ${state.listOfConfirmPaymentOrder.length}`);
    },
    addStockInConfirmList(state, order) {
        if (!state.listOfConfirmStockInOrder.some(item => item.trackingNumber === order.trackingNumber)) {
            state.listOfConfirmStockInOrder.push(order);
        }
        console.log(`Order added to mutation stock. Total: ${state.listOfConfirmStockInOrder.length}`);

    },
    addProductToCart(state, product) {
        const customerGrade = state.selectedCustomer.grade;

        // Find matching price for customer grade
        const customerPrice = state.productPriceList
            .find(p => p.id === product.id)
            ?.priceLists
            .find(pl => pl.grade === customerGrade)?.amount;

        // Set local price if found
        let originalProductLocalPrice = product.localPrice
        product.localPrice = customerPrice ?? product.localPrice; // Use default price if no match found

        const existingProductIndex = state.cartOfproductSelected.findIndex(
            item => item.id === product.id
        );
        console.warn(`customerGrate ${customerGrade}, customerPrice ${customerPrice}`)
        console.warn(`Product object ${JSON.stringify(product)}`)
        console.warn(`ProductPrice object ${JSON.stringify(state.productPriceList
            .find(p => p.id === product.id))}`)
        if (existingProductIndex !== -1) {
            // Increase quantity of existing product
            state.cartOfproductSelected[existingProductIndex].qty++;
        } else {
            // Add new product to cart
            state.cartOfproductSelected.push({ ...product, qty: 1 });
        }
        //  Restore price
        product.localPrice = originalProductLocalPrice
    },
    updateProductCart(state, productInfo) {
        const productId = productInfo['productId']
        const price = productInfo['amount']
        console.log(`PRODUCT MODEL ${JSON.stringify(state.cartOfproductSelected[0])}`);
        const productIdxFound = state.cartOfproductSelected.findIndex(el => el['id'] == productId)
        if (productIdxFound < 0) return
        console.log(`Found INDEX ${productIdxFound}`);
        let newPrice = 0;
        if (productInfo['type'] != 'Price') {
            newPrice = (state.cartOfproductSelected[productIdxFound]['localPrice'] * price / 100) * state.cartOfproductSelected[productIdxFound]['qty']
            newPrice += state.cartOfproductSelected[productIdxFound]['localPrice']
        } else {
            newPrice = price * state.cartOfproductSelected[productIdxFound]['qty']
        }
        console.log(`Found new price ${newPrice}`);
        state.cartOfproductSelected[productIdxFound]['localPrice'] = newPrice
    },
    removeProductFromCart(state, product) {
        const existingProduct = state.cartOfproductSelected.find(item => item.id === product.id);
        if (existingProduct) {
            if (existingProduct.qty > 1) {
                existingProduct.qty--;
            } else {
                state.cartOfproductSelected = state.cartOfproductSelected.filter(item => item.id !== product.id);
            }
        }
    },
    clearProductFromCart(state, product) {
        state.cartOfproductSelected = state.cartOfproductSelected.filter(item => item.id !== product.id);

    },
    clearAllProductFromCart(state,) {
        state.cartOfproductSelected = [];
    },


    setUser(state, payload) {
        console.log("setUser: " + payload.name);
        state.user = { "name": payload.name, "id": payload.id, "phone": payload.phone, "token": payload.token }
    },
    setLogin(state) {
        console.log("SET LOGIN");
        state.isAuth = true;
    },
    setLogout(state) {
        state.isAuth = false;
        state.user = '';
    },
    setProductDetail(state, payload) {
        state.productDetail = payload;
    },
    setCompanyList(state, payload) {
        state.companyList = payload;
    },


}
// Vuex Getters
export const getters = {
    findCustomerForm: (state) => state.customerForm,
    findAllListOfConfirmStockIn: (state) => state.listOfConfirmStockInOrder,
    findAllListOfConfirmPayment: (state) => state.listOfConfirmPaymentOrder,
    findAllProduct: (state) => state.productList,
    findAllProductPriceListToCreate: (state) => state.productPriceListToCreate,
    findAllTerminal: (state) => state.terminalList,
    findAllLocation: (state) => state.locationList,
    findAllCompany: (state) => state.companyList,
    findAllPayment: (state) => state.paymentList,
    findAllClient: (state) => state.clientList,
    findAllCurrency: (state) => state.currencyList,
    findAllUnit: (state) => state.unitList,
    isAuth: (state) => state.isAuth,
    findSelectedProductDetail: (state) => state.productDetail,
    findSelectedTerminal: (state) => state.selectedTerminal,
    isAuthenticated: (state) => state.auth.loggedIn,
    loggedInUser: (state) => state.auth.user,
    searchKeyword: (state) => state.productSearchKeyboard,
    cartOfProduct: (state) => state.cartOfproductSelected,
    currenctSelectedCategoryId: (state) => state.selectedCategoryId,
    currentSelectedCustomer: (state) => state.selectedCustomer,
    currentSelectedPayment: (state) => state.selectedPayment,
    currentSelectedLocation: (state) => state.selectedLocation,
};

export const actions = {
    clearCustomerFormAction({ commit }) {
        commit("clearCustomerForm");
    },

    assignCustomerFormAction({ commit }, payload) {
        commit("setCustomerForm", payload);
    },

    clearPaymentList({ commit }) {
        commit("clearConfirmPaymentList");
    },

    clearStockList({ commit }) {
        commit("clearConfirmStockList");
    },

    removeOrderFromStockConfirm({ commit }, order) {
        commit("removeFromStockConfirm", order);
    },

    removeOrderFromPaymentConfirm({ commit }, order) {
        commit("removeFromPaymentConfirm", order); // Fixed typo here
    },

    addOrderToConfirmPaymentList({ commit }, payload) {
        commit("addPaymentConfirmList", payload);
    },

    addOrderToConfirmStockInList({ commit }, payload) {
        console.log(`Order added to state: ${JSON.stringify(payload)}`);
        commit("addStockInConfirmList", payload);
    },

    login({ commit }, payload) {
        commit("setUser", payload);
        commit("setLogin");
    },

    logout({ commit }) {
        commit("setLogout");
    },

    clearCart({ commit }) {
        commit("clearAllProductFromCart");
    },

    assignProductDetail({ commit }, payload) {
        commit("setProductDetail", payload);
    },

    addProduct({ commit }, product) {
        commit("addProductToCart", product);
    },

    updateProduct({ commit }, product) {
        commit("updateProductCart", product);
    },

    setSelectedTerminal({ commit }, terminalId) {
        commit("ChooseTerminal", terminalId);
    },

    setSelectedLocation({ commit }, location) {
        commit("setSelectedLocation", location);
    },

    deleteProduct({ commit }, product) {
        commit("removeProductFromCart", product);
    },

    updateSelectedCategoryId({ commit }, categoryId) {
        commit("setSelecteCategoryId", categoryId);
    },

    deleteProductFromCart({ commit }, product) {
        commit("clearProductFromCart", product);
    },

    addCustomer({ commit }, customer) {
        commit("setSelectedCustomer", customer);
    },

    addSelectedPayment({ commit }, paymentId) {
        commit("setSelectedPayment", paymentId);
    },

    initProduct({ commit }, product) {
        commit("SetProductList", product);
    },

    initProductPrices({ commit }, product) {
        commit("initProductPriceList", product);
    },

    addProductPricesToCreate({ commit }, product) {
        commit("addProductPriceListToCreate", product);
    },
    deleteProductPricesToCreate({ commit }, product) {
        commit("deleteProductPriceListToCreate", product);
    },

    clearProductPricesToCreate({ commit }) {
        commit("clearProductPriceListToCreate");
    },

    initPayment({ commit }, payment) {
        commit("SetPaymentList", payment);
    },

    initCurrency({ commit }, currency) {
        commit("SetCurrencyList", currency);
    },

    initClient({ commit }, client) {
        commit("SetClientList", client);
    },

    initUnit({ commit }, unit) {
        commit("SetUnitList", unit);
    },

    initTerminal({ commit }, terminal) {
        commit("SetTerminalList", terminal);
    },

    initLocation({ commit }, location) {
        commit("SetLocationList", location);
    },

    initCompany({ commit }, company) {
        commit("setCompanyList", company);
    },

    async initiateData(state, axios) {
        try {
            await Promise.all([
                initTerminal(state, axios),
                initLocation(state, axios),
                initProduct(state, axios, getters), // Pass getters to initProduct
                initProductPrices(state, axios),
                initClient(state, axios),
                initCurrency(state, axios),
                initPayment(state, axios),
                initUnit(state, axios),
                initCompanyData(state, axios)
            ]);
        } catch (error) {
            console.error("Failed to initialize data:", error);
        }
    }

};

// this.$actions.assignProductDetail', payload)       => this to set sate
// this.$store.getters.findSelectedProductDetail         => get data from sate


// Other initialization functions remain the same, ensuring axios and state are passed correctly.
const initProduct = async (state, axios, getters) => {
    try {
        // Safely access findAllLocation or fallback to a default value
        const locationId = getters?.findAllLocation?.id || 1; // Default to 1 if undefined
        const response = await axios.get(`product_f/${locationId}`);
        actions.initProduct(state, response.data);
        console.log(`Product initialization completed.`);
    } catch (error) {
        console.error(`Product initialization failed: ${error}`);
    }
};

// Other initialization functions remain the same, ensuring axios and state are passed correctly.

const fetchData = async (url, action, state, axios, errorMessage) => {
    try {
        const response = await axios.get(url);
        actions[action](state, response.data);
        console.log(`${action} completed successfully.`);
    } catch (error) {
        console.error(`${errorMessage}: ${error}`);
    }
};

const initClient = (state, axios) => fetchData('api/client/find', 'initClient', state, axios, 'Client initialization failed');
const initPayment = (state, axios) => fetchData('api/paymentMethod/find', 'initPayment', state, axios, 'Payment initialization failed');
const initProductPrices = (state, axios) => fetchData('api/product/find', 'initProductPrices', state, axios, 'Product price initialization failed');
const initCurrency = (state, axios) => fetchData('api/currency/find', 'initCurrency', state, axios, 'Currency initialization failed');
const initLocation = (state, axios) => fetchData('api/location/find', 'initLocation', state, axios, 'Location initialization failed');
const initTerminal = (state, axios) => fetchData('api/terminal/find', 'initTerminal', state, axios, 'Terminal initialization failed');
const initUnit = (state, axios) => fetchData('api/unit/find', 'initUnit', state, axios, 'Unit initialization failed');
const initCompanyData = (state, axios) => fetchData('api/company/find', 'initCompany', state, axios, 'Company initialization failed');
