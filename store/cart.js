// store/cart.js
// Cart module - handles cart operations and product management

export const state = () => ({
    cartOfproductSelected: []
})

export const mutations = {
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

    addProductToCart(state, product) {
        try {
            if (!product || !product.id) return

            // Get customer grade from root state
            const rootState = this.state
            const customerGrade = rootState?.selectedCustomer?.grade
            let customerPrice = null

            if (customerGrade && Array.isArray(rootState.orders?.productPriceList)) {
                const productPrice = rootState.orders.productPriceList.find(p => p.id === product.id)
                if (productPrice && Array.isArray(productPrice.priceLists)) {
                    const priceList = productPrice.priceLists.find(pl => pl.grade === customerGrade)
                    customerPrice = priceList?.amount
                }
            }

            const originalProductLocalPrice = product.localPrice
            product.localPrice = customerPrice ?? product.localPrice

            const existingProductIndex = state.cartOfproductSelected.findIndex(
                item => item.id === product.id
            )

            if (existingProductIndex !== -1) {
                state.cartOfproductSelected[existingProductIndex].qty++
            } else {
                state.cartOfproductSelected.push({ ...product, qty: 1 })
            }

            // Restore original price
            product.localPrice = originalProductLocalPrice
        } catch (error) {
            console.error('Error adding product to cart:', error)
        }
    },

    updateProductCart(state, productInfo) {
        try {
            if (!productInfo || !productInfo.productId) return

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
        } catch (error) {
            console.error('Error updating product cart:', error)
        }
    },

    removeProductFromCart(state, product) {
        try {
            if (!product || !product.id) return

            const existingProduct = state.cartOfproductSelected.find(item => item.id === product.id)
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
                item => item.id !== product.id
            )
        }
    },

    clearAllProductFromCart(state) {
        state.cartOfproductSelected = []
    }
}

export const getters = {
    cartOfProduct: (state) => state.cartOfproductSelected || [],
    
    // Cart totals
    cartTotal: (state) => {
        return state.cartOfproductSelected.reduce((total, item) => {
            return total + (item.qty * item.localPrice)
        }, 0)
    },
    
    // Cart item count
    cartItemCount: (state) => {
        return state.cartOfproductSelected.reduce((count, item) => count + item.qty, 0)
    },
    
    // Check if cart is empty
    isCartEmpty: (state) => state.cartOfproductSelected.length === 0,
    
    // Get specific product in cart
    getCartItem: (state) => (productId) => {
        return state.cartOfproductSelected.find(item => item.id === productId)
    }
}

export const actions = {
    clearCart({ commit }) {
        try {
            commit("clearAllProductFromCart")
        } catch (error) {
            console.error('Error clearing cart:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    addProduct({ commit }, product) {
        try {
            commit("addProductToCart", product)
        } catch (error) {
            console.error('Error adding product:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    updateProduct({ commit }, product) {
        try {
            commit("updateProductCart", product)
        } catch (error) {
            console.error('Error updating product:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    deleteProduct({ commit }, product) {
        try {
            commit("removeProductFromCart", product)
        } catch (error) {
            console.error('Error deleting product:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    deleteProductFromCart({ commit }, product) {
        try {
            commit("clearProductFromCart", product)
        } catch (error) {
            console.error('Error deleting product from cart:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    },

    updateQty({ commit }, { productId, qty }) {
        try {
            commit("UPDATE_QTY", { productId, qty })
        } catch (error) {
            console.error('Error updating quantity:', error)
            commit('ADD_ERROR', error, { root: true })
        }
    }
}