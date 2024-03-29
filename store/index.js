// all sate variable [data]
export const state = () => ({
    user: '',
    isAuth: true,
    productDetail: null,
    productSearchKeyboard: '',
    cartOfproductSelected: [],
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
})

// the function to update state variable should be called by setter [actions]
export const mutations = {
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
        for (const iterator of client) {
            iterator['company'] += ' - ' + iterator['name']
        }
        state.clientList = client
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
    addProductToCart(state, product) {
        let found = false;
        state.cartOfproductSelected.forEach(item => {
            if (item.id === product.id) {
                item.qty++;
                found = true;
            }
        });
        if (!found) {
            // state.cart.push({ ...product, qty: 1 });
            state.cartOfproductSelected.push({ ...product, qty: 1 })
        }
    },
    removeProductFromCart(state, product) {
        let found = false;
        state.cartOfproductSelected.forEach(item => {
            if (item.id === product.id) {
                if (!(item.qty == 1)) {
                    item.qty--;
                } else {
                    const index = state.cartOfproductSelected.indexOf(product);
                    if (index !== -1) {
                        state.cartOfproductSelected.splice(index, 1);
                    }
                }
            }
        });
    },
    clearProductFromCart(state, product) {
        const index = state.cartOfproductSelected.indexOf(product);
        state.cartOfproductSelected.splice(index, 1);
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


}
// action to get sate
export const getters = {

    findAllProduct(state) {
        return state.productList
    },
    findAllTerminal(state) {
        return state.terminalList
    },
    findAllLocation(state) {
        return state.locationList
    },
    findAllPayment(state) {
        return state.paymentList
    },
    findAllClient(state) {
        return state.clientList
    },
    findAllCurrency(state) {
        return state.currencyList
    },
    findAllUnit(state) {
        return state.unitList
    },
    isAuth(state) {
        return state.isAuth
    },
    findSelectedProductDetail(state) {
        return state.productDetail
    },
    findSelectedTerminal(state) {
        return state.selectedTerminal
    },

    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    loggedInUser(state) {
        return state.auth.user
    },
    searchKeyword(state) {
        return state.productSearchKeyboard
    },
    cartOfProduct(state) {
        return state.cartOfproductSelected
    },
    currenctSelectedCategoryId(state) {
        return state.selectedCategoryId
    },
    currentSelectedCustomer(state) {
        return state.selectedCustomer
    },
    currentSelectedPayment(state) {
        return state.selectedPayment
    },
    currentSelectedLocation(state) {
        return state.selectedLocation
    }

}
// action to set sate
export const actions = {
    login(state, payload) {
        state.commit("setUser", payload)
        state.commit("setLogin")
    },
    logout(state) {
        state.commit("setLogout");
    },
    clearCart(state) {
        state.commit("clearAllProductFromCart");
    },
    assignProductDetail(state, payload) {
        state.commit("setProductDetail", payload)
    },
    addProduct(state, product) {
        state.commit("addProductToCart", product)
    },
    setSelectedTerminal(state, terminalId) {
        state.commit("ChooseTerminal", terminalId)
    },

    setSelectedLocation(state, location) {
        state.commit("setSelectedLocation", location)
    },

    deleteProduct(state, product) {
        state.commit("removeProductFromCart", product)
    },
    updateSelectedCategoryId(state, categoryId) {
        state.commit("setSelecteCategoryId", categoryId)
    },
    deleteProductFromCart(state, product) {
        state.commit("clearProductFromCart", product)
    },
    addCustomer(state, customer) {
        state.commit("setSelectedCustomer", customer)
    },
    addSelectedPayment(state, paymentId) {
        state.commit("setSelectedPayment", paymentId)
    },
    initProduct(state, product) {
        state.commit("SetProductList", product)
    },
    initPayment(state, payment) {
        state.commit("SetPaymentList", payment)
    },
    initCurrency(state, currency) {
        state.commit("SetCurrencyList", currency)
    },
    initClient(state, client) {
        state.commit("SetClientList", client)
    },
    initUnit(state, unit) {
        state.commit("SetUnitList", unit)
    },
    initTerminal(state, terminal) {
        state.commit("SetTerminalList", terminal)
    },
    initLocation(state, location) {
        state.commit("SetLocationList", location)
    },
    async initiateData(state, axios) {
        initTerminal(state, axios);
        initLocation(state, axios);
        initProduct(state, axios);
        initClient(state, axios);
        initCurrency(state, axios);
        initPayment(state, axios);
        initUnit(state, axios);
    }

}
// this.$actions.assignProductDetail', payload)       => this to set sate
// this.$store.getters.findSelectedProductDetail         => get data from sate



//************************* All the function to get data and init to common variable centally **************************/

const initClient = async (state, axios) => {
    console.log(`Data client initialize ===>`);
    await axios
        .get('api/client/find')
        .then((res) => {
            actions.initClient(state, res.data)
        })
        .catch((er) => {
            console.error('Client initiate fail ' + er)
        })
}
const initPayment = async (state, axios) => {
    await axios
        .get('api/paymentMethod/find')
        .then((res) => {
            actions.initPayment(state, res.data)
        })
        .catch((er) => {
            console.error('Payment initiate fail ' + er)
        })
}
const initProduct = async (state, axios) => {
    await axios
        .get(`product_f/${getters.findAllLocation['id'] || 1}`)
        .then((res) => {
            actions.initProduct(state, res.data)
        })
        .catch((er) => {
            console.log('Data: ' + er)
        })
}
const initCurrency = async (state, axios) => {
    await axios
        .get('api/currency/find')
        .then((res) => {
            actions.initCurrency(state, res.data)
        })
        .catch((er) => {
            console.error('Currency initiate fail ' + er)
        })
}
const initLocation = async (state, axios) => {
    await axios
        .get(`api/location/find`)
        .then((res) => {
            actions.initLocation(state, res.data)
        })
        .catch((er) => {
            console.error(' Location initiate data fail ' + er)
        })
}
const initTerminal = async (state, axios) => {
    await axios
        .get('api/terminal/find')
        .then((res) => {
            actions.initTerminal(state, res.data)
        })
        .catch((er) => {
            console.error('Terminal initiate fail ' + er)
        })
}
const initUnit = async (state, axios) => {
    await axios
        .get('api/unit/find')
        .then((res) => {
            actions.initUnit(state, res.data)
        })
        .catch((er) => {
            console.error('Unit initiate data fail ' + er)
        })
}

