// store/orders.js
// Orders module - handles order confirmations, stock management, and product pricing

export const state = () => ({
    productPriceList: [],
    productPriceListToCreate: [],
    listOfConfirmStockInOrder: [],
    listOfConfirmPaymentOrder: []
})

export const mutations = {
    // Product price list mutations
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

    // Stock confirmation mutations
    removeFromStockConfirm(state, order) {
        if (order && order.trackingNumber) {
            state.listOfConfirmStockInOrder = state.listOfConfirmStockInOrder.filter(
                item => item.trackingNumber !== order.trackingNumber
            )
        }
    },

    addStockInConfirmList(state, order) {
        if (order && order.trackingNumber &&
            !state.listOfConfirmStockInOrder.some(item => item.trackingNumber === order.trackingNumber)) {
            state.listOfConfirmStockInOrder.push(order)
        }
    },

    clearConfirmStockList(state) {
        state.listOfConfirmStockInOrder = []
    },

    // Payment confirmation mutations
    removeFromPaymentConfirm(state, order) {
        if (order && order.trackingNumber) {
            state.listOfConfirmPaymentOrder = state.listOfConfirmPaymentOrder.filter(
                item => item.trackingNumber !== order.trackingNumber
            )
        }
    },

    addPaymentConfirmList(state, order) {
        if (order && order.trackingNumber &&
            !state.listOfConfirmPaymentOrder.some(item => item.trackingNumber === order.trackingNumber)) {
            state.listOfConfirmPaymentOrder.push(order)
        }
    },

    clearConfirmPaymentList(state) {
        state.listOfConfirmPaymentOrder = []
    }
}

export const getters = {
    // Product price list getters
    findAllProductPriceListToCreate: (state) => state.productPriceListToCreate || [],
    getProductPriceList: (state) => state.productPriceList || [],
    
    // Get customer pricing for a product
    getCustomerPriceForProduct: (state) => (productId, customerGrade) => {
        if (!customerGrade || !Array.isArray(state.productPriceList)) return null
        
        const productPrice = state.productPriceList.find(p => p.id === productId)
        if (productPrice && Array.isArray(productPrice.priceLists)) {
            const priceList = productPrice.priceLists.find(pl => pl.grade === customerGrade)
            return priceList?.amount
        }
        return null
    },

    // Stock confirmation getters
    findAllListOfConfirmStockIn: (state) => state.listOfConfirmStockInOrder || [],
    getStockConfirmByTracking: (state) => (trackingNumber) => {
        return state.listOfConfirmStockInOrder.find(
            order => order.trackingNumber === trackingNumber
        )
    },

    // Payment confirmation getters
    findAllListOfConfirmPayment: (state) => state.listOfConfirmPaymentOrder || [],
    getPaymentConfirmByTracking: (state) => (trackingNumber) => {
        return state.listOfConfirmPaymentOrder.find(
            order => order.trackingNumber === trackingNumber
        )
    },

    // Order statistics
    totalPendingStockConfirms: (state) => state.listOfConfirmStockInOrder.length,
    totalPendingPaymentConfirms: (state) => state.listOfConfirmPaymentOrder.length
}

export const actions = {
    // Product pricing actions
    initProductPrices({ commit }, product) {
        try {
            commit("initProductPriceList", product)
        } catch (error) {
            console.error('Error initializing product prices:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    addProductPricesToCreate({ commit }, product) {
        try {
            commit("addProductPriceListToCreate", product)
        } catch (error) {
            console.error('Error adding product prices to create:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    deleteProductPricesToCreate({ commit }, index) {
        try {
            commit("deleteProductPriceListToCreate", index)
        } catch (error) {
            console.error('Error deleting product prices to create:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    clearProductPricesToCreate({ commit }) {
        try {
            commit("clearProductPriceListToCreate")
        } catch (error) {
            console.error('Error clearing product prices to create:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    // Stock confirmation actions
    clearStockList({ commit }) {
        try {
            commit("clearConfirmStockList")
        } catch (error) {
            console.error('Error clearing stock list:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    removeOrderFromStockConfirm({ commit }, order) {
        try {
            commit("removeFromStockConfirm", order)
        } catch (error) {
            console.error('Error removing order from stock confirm:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    addOrderToConfirmStockInList({ commit }, payload) {
        try {
            commit("addStockInConfirmList", payload)
        } catch (error) {
            console.error('Error adding order to stock list:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    // Payment confirmation actions
    clearPaymentList({ commit }) {
        try {
            commit("clearConfirmPaymentList")
        } catch (error) {
            console.error('Error clearing payment list:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    removeOrderFromPaymentConfirm({ commit }, order) {
        try {
            commit("removeFromPaymentConfirm", order)
        } catch (error) {
            console.error('Error removing order from payment confirm:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    addOrderToConfirmPaymentList({ commit }, payload) {
        try {
            commit("addPaymentConfirmList", payload)
        } catch (error) {
            console.error('Error adding order to payment list:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    }
}