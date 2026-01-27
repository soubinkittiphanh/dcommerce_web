exports.ids = [333,135];
exports.modules = {

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(505);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductCardPos.vue?vue&type=template&id=38568bb3&scoped=true






var ProductCardPosvue_type_template_id_38568bb3_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VHover["a" /* default */], {
    attrs: {
      "open-delay": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        hover
      }) {
        var _vm$selectedCustomer, _vm$selectedCustomer2;
        return [_c(VCard["a" /* default */], {
          staticClass: "ma-0 text-center cursor-pointer product-card d-flex flex-column position-relative overflow-hidden",
          class: {
            'product-disabled': (!_vm.product.isActive || _vm.stock <= 0) && _vm.product.validateStockOnSale == 1,
            'promotion-eligible': _vm.isProductInPromotion(_vm.product),
            'customer-grade-pricing': _vm.getCustomerGradePrice(_vm.product)
          },
          attrs: {
            "elevation": hover ? 16 : 4,
            "hover": "",
            "outlined": "",
            "height": "220",
            "disabled": (!_vm.product.isActive || _vm.stock <= 0) && _vm.product.validateStockOnSale == 1
          },
          on: {
            "click": _vm.handleCardClick
          }
        }, [_c('div', {
          staticClass: "product-background ma-0",
          class: {
            'grayscale-filter': (!_vm.product.isActive || _vm.stock <= 0) && _vm.product.validateStockOnSale == 1
          },
          style: !_vm.imageError ? `background-image: url('${_vm.host}/uploads/${_vm.imagePath}')` : ''
        }), _vm._v(" "), _vm.imageError ? _c('div', {
          staticClass: "broken-image-background"
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "size": "48",
            "color": "grey lighten-2"
          }
        }, [_vm._v("mdi-image-broken-variant")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
          staticClass: "content-overlay d-flex flex-column justify-space-between fill-height"
        }, [_c('div', {
          staticClass: "top-section pa-2"
        }, [_vm.isProductInPromotion(_vm.product) ? _c(VIcon["a" /* default */], {
          staticClass: "promotion-badge",
          attrs: {
            "color": "success",
            "small": ""
          }
        }, [_vm._v("\n            mdi-tag\n          ")]) : _vm._e(), _vm._v(" "), _vm.getCustomerGradePrice(_vm.product) ? _c(VChip["a" /* default */], {
          staticClass: "grade-price-badge",
          attrs: {
            "x-small": "",
            "color": _vm.getGradeColor((_vm$selectedCustomer = _vm.selectedCustomer) === null || _vm$selectedCustomer === void 0 ? void 0 : _vm$selectedCustomer.grade),
            "text-color": "white"
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "x-small": "",
            "left": ""
          }
        }, [_vm._v("mdi-account-star")]), _vm._v("\n            Grade " + _vm._s((_vm$selectedCustomer2 = _vm.selectedCustomer) === null || _vm$selectedCustomer2 === void 0 ? void 0 : _vm$selectedCustomer2.grade) + "\n          ")], 1) : _vm.hasAvailablePriceLists(_vm.product) ? _c(VChip["a" /* default */], {
          staticClass: "price-list-badge",
          attrs: {
            "x-small": "",
            "color": "purple",
            "text-color": "white"
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "x-small": "",
            "left": ""
          }
        }, [_vm._v("mdi-tag-multiple")]), _vm._v("\n            " + _vm._s(_vm.getProductPriceLists(_vm.product).length) + " prices\n          ")], 1) : _vm._e(), _vm._v(" "), _c(VChip["a" /* default */], {
          staticClass: "stock-chip-overlay",
          attrs: {
            "color": _vm.getStockColor(_vm.stock),
            "text-color": "white",
            "x-small": ""
          }
        }, [_vm._v("\n            " + _vm._s(_vm.stock) + "\n          ")])], 1), _vm._v(" "), _c('div', {
          staticClass: "bottom-section-enhanced"
        }, [_c('div', {
          staticClass: "text-backdrop"
        }), _vm._v(" "), _c('div', {
          staticClass: "product-name-enhanced"
        }, [_c('div', {
          staticClass: "product-name-text enhanced-text"
        }, [_vm._v("\n              " + _vm._s(_vm.productName) + "\n            ")])]), _vm._v(" "), _c('div', {
          staticClass: "price-actions-enhanced"
        }, [_c('div', {
          staticClass: "price-section-enhanced"
        }, [_vm.getCustomerGradePrice(_vm.product) ? _c('div', {
          staticClass: "text-center"
        }, [_c('div', {
          staticClass: "caption text-decoration-line-through price-text enhanced-text",
          staticStyle: {
            "opacity": "0.85"
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(_vm.product.localPrice || _vm.product.pro_price)) + "  " + _vm._s(_vm.findCurrency(_vm.product.saleCurrencyId).code) + "\n                ")]), _vm._v(" "), _c('div', {
          staticClass: "subtitle-2 font-weight-bold price-text enhanced-text price-highlight"
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(_vm.getCustomerGradePrice(_vm.product))) + "\n                ")])]) : _c('div', [_c('div', {
          staticClass: "subtitle-2 font-weight-bold price-text enhanced-text price-highlight"
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(_vm.product.localPrice || _vm.product.pro_price)) + " " + _vm._s(_vm.findCurrency(_vm.product.saleCurrencyId).code) + "\n                ")]), _vm._v(" "), _vm.hasAvailablePriceLists(_vm.product) ? _c('div', {
          staticClass: "caption price-text enhanced-text",
          staticStyle: {
            "opacity": "0.85"
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.getPriceRangeText(_vm.product)) + "\n                ")]) : _vm._e()]), _vm._v(" "), _vm.hasAvailablePriceLists(_vm.product) || !_vm.getCustomerGradePrice(_vm.product) ? _c('div', {
          staticClass: "d-inline-block ml-2"
        }, [_c(VBtn["a" /* default */], {
          staticClass: "price-select-btn-enhanced",
          attrs: {
            "color": "primary",
            "outlined": "",
            "x-small": "",
            "icon": "",
            "disabled": (!_vm.product.isActive || _vm.stock <= 0) && _vm.product.validateStockOnSale == 1
          },
          on: {
            "click": function ($event) {
              $event.stopPropagation();
              return _vm.handlePriceSelection.apply(null, arguments);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "x-small": ""
          }
        }, [_vm._v("mdi-tag-multiple")])], 1)], 1) : _vm._e()]), _vm._v(" "), !_vm.product.isActive ? _c('div', {
          staticClass: "status-overlay-enhanced"
        }, [_c(VChip["a" /* default */], {
          staticClass: "status-chip-enhanced",
          attrs: {
            "x-small": "",
            "color": "error",
            "text-color": "white"
          }
        }, [_vm._v("\n                INACTIVE\n              ")])], 1) : _vm.stock <= 0 && _vm.product.validateStockOnSale == 1 ? _c('div', {
          staticClass: "status-overlay-enhanced"
        }, [_c(VChip["a" /* default */], {
          staticClass: "status-chip-enhanced",
          attrs: {
            "x-small": "",
            "color": "warning",
            "text-color": "white"
          }
        }, [_vm._v("\n                OUT OF STOCK\n              ")])], 1) : _vm._e()])])])])];
      }
    }])
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductCardPos.vue?vue&type=template&id=38568bb3&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductCardPos.vue?vue&type=script&lang=js



/* harmony default export */ var ProductCardPosvue_type_script_lang_js = ({
  name: 'ProductCardPosEnhanced',
  props: {
    imagePath: {
      type: String,
      default: 'default-product.png'
    },
    productName: {
      type: String,
      default: ''
    },
    product: {
      type: Object,
      default: () => ({})
    },
    stock: {
      type: Number,
      default: 0
    },
    selectedCustomer: {
      type: Object,
      default: null
    },
    promotions: {
      type: Array,
      default: () => []
    },
    priceLists: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      imageError: false,
      imageLoading: true
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['currentSelectedCustomer', 'cartOfProduct', 'findAllCurrency']),
    host() {
      return Object(api["a" /* hostName */])();
    },
    effectiveCustomer() {
      return this.selectedCustomer || this.currentSelectedCustomer;
    }
  },
  mounted() {
    this.checkImage();
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['addProduct']),
    findCurrency(currencyId) {
      return this.findAllCurrency.find(el => el.id == currencyId);
    },
    handleCardClick() {
      // Default card click behavior - could be quick add or open product details
      this.handleQuickAdd();
    },
    // Final improved methods to replace in your component

    handleQuickAdd(isGift = false) {
      console.info(`DATA ADD FROM PRODUCT CART ..... ${JSON.stringify(this.product)}`);
      if (!this.validateProductAvailability()) {
        return;
      }

      // Check card_count limit before adding to cart
      if (!this.validateCardCount()) {
        return;
      }

      // Use customer grade price if available, otherwise use default price
      const productToAdd = {
        ...this.product,
        localPrice: this.getCustomerGradePrice(this.product) || this.product.localPrice || this.product.pro_price,
        isGift: isGift,
        lineUUIDCheck: false,
        priceListId: this.getCustomerGradePriceListId(this.product),
        lineUUID: Date.now() + Math.random().toString(16)
      };
      console.info(`CART PRODUCT ${JSON.stringify(this.cartOfProduct)}`);
      this.addProduct(productToAdd);
      console.info(`EMIT CUSTOMER SCREEN `);
      // this.$emit('update-customer-screen')
      this.$root.$emit('update-cus-screen');
      // this.$emit('update-cus-screen')

      // Show success feedback with quantity info
      if (this.$toast) {
        const existingItem = this.cartOfProduct.find(item => item.pro_id === this.product.pro_id);
        const newQty = existingItem ? existingItem.qty + 1 : 1;
        const limit = this.product.card_count;
        if (limit && limit > 0) {
          const remaining = limit - newQty;
          this.$toast.success(`${this.productName} added to cart. ${remaining > 0 ? `${remaining} more allowed` : 'Limit reached'}`, {
            position: 'bottom-center'
          });
        } else {
          this.$toast.success(`${this.productName} added to cart`, {
            position: 'bottom-center'
          });
        }
      }
    },
    validateCardCount() {
      const cardCountLimit = this.product.card_count;
      console.info(`product det ${JSON.stringify(this.product)}`);
      // If card_count is not defined, null, or 0, don't allow any additions
      if ((!cardCountLimit || cardCountLimit <= 0) && this.product.validateStockOnSale == 1) {
        if (this.$toast) {
          this.$toast.error(`This product is not available for purchase`);
        }
        return false;
      }

      // Find if this product is already in the cart
      const existingCartItem = this.cartOfProduct.find(item => item.pro_id === this.product.pro_id);
      if (existingCartItem) {
        const currentQty = existingCartItem.qty;

        // Check if adding one more would exceed card_count
        if (currentQty >= cardCountLimit && this.product.validateStockOnSale == 1) {
          if (this.$toast) {
            this.$toast.error(`Cannot add more. You have ${currentQty}/${cardCountLimit} items for ${this.product.pro_name}`, {
              position: 'bottom-center'
            });
          }
          return false;
        }
      }
      return true;
    },
    handlePriceSelection() {
      if (!this.validateProductAvailability()) {
        return;
      }

      // Emit event for parent to handle price selection dialog
      this.$emit('open-price-selector', this.product);
    },
    validateProductAvailability() {
      if (!this.product.isActive) {
        this.showError('Product is inactive');
        return false;
      }
      if (this.stock <= 0 && this.product.validateStockOnSale == 1) {
        this.showError('Stock not enough');
        return false;
      }
      return true;
    },
    showError(message) {
      if (this.$toast) {
        this.$toast.error(message);
      } else if (this.$swal) {
        this.$swal.fire({
          icon: 'error',
          title: 'Error',
          text: message,
          timer: 2000
        });
      } else {
        alert(message);
      }
    },
    handleImageError() {
      this.imageError = true;
      this.imageLoading = false;
    },
    handleImageLoad() {
      this.imageError = false;
      this.imageLoading = false;
    },
    // Preload image to detect errors
    checkImage() {
      const img = new Image();
      img.onload = this.handleImageLoad;
      img.onerror = this.handleImageError;
      img.src = `${this.host}/uploads/${this.imagePath}`;
    },
    formatNumber(val) {
      return Object(common["e" /* getFormatNum */])(val);
    },
    // Promotion-related methods
    isProductInPromotion(product) {
      if (!this.promotions || this.promotions.length === 0) return false;
      return this.promotions.some(promo => promo.productId === product.id && promo.isActive && new Date() >= new Date(promo.startDate) && new Date() <= new Date(promo.endDate));
    },
    // Customer grade pricing methods
    // Customer grade pricing methods
    getCustomerGradePrice(product) {
      var _this$effectiveCustom, _product$priceLists;
      // Fast validation - early exit for performance
      if (!((_this$effectiveCustom = this.effectiveCustomer) !== null && _this$effectiveCustom !== void 0 && _this$effectiveCustom.grade) || !(product !== null && product !== void 0 && (_product$priceLists = product.priceLists) !== null && _product$priceLists !== void 0 && _product$priceLists.length)) {
        return null;
      }

      // Find matching grade in priceLists (not gradePricing)
      const gradePrice = product.priceLists.find(priceList => priceList.grade === this.effectiveCustomer.grade && priceList.isActive !== false && priceList.type === 'Price' // Ensure it's a price type, not discount
      );
      // console.info(`PriceList selected ${JSON.stringify(gradePrice)}`)

      return (gradePrice === null || gradePrice === void 0 ? void 0 : gradePrice.amount) || null;
    },
    getCustomerGradePriceListId(product) {
      var _this$effectiveCustom2, _product$priceLists2;
      // Fast validation - early exit for performance
      if (!((_this$effectiveCustom2 = this.effectiveCustomer) !== null && _this$effectiveCustom2 !== void 0 && _this$effectiveCustom2.grade) || !(product !== null && product !== void 0 && (_product$priceLists2 = product.priceLists) !== null && _product$priceLists2 !== void 0 && _product$priceLists2.length)) {
        return null;
      }
      const gradePrice = product.priceLists.find(priceList => priceList.grade === this.effectiveCustomer.grade && priceList.isActive !== false && priceList.type === 'Price');
      return (gradePrice === null || gradePrice === void 0 ? void 0 : gradePrice.id) || null;
    },
    getGradeColor(grade) {
      const gradeColors = {
        A: 'green',
        B: 'blue',
        C: 'orange',
        D: 'red'
      };
      return gradeColors[grade] || 'grey';
    },
    // Price list methods
    hasAvailablePriceLists(product) {
      if (!this.priceLists || this.priceLists.length === 0) return false;
      return this.priceLists.some(priceList => priceList.productId === product.id && priceList.isActive);
    },
    getProductPriceLists(product) {
      if (!this.priceLists) return [];
      return this.priceLists.filter(priceList => priceList.productId === product.id && priceList.isActive);
    },
    getPriceRangeText(product) {
      const priceLists = this.getProductPriceLists(product);
      if (priceLists.length === 0) return '';
      const prices = priceLists.map(pl => pl.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      if (minPrice === maxPrice) {
        return `Special: ${this.formatNumber(minPrice)}`;
      }
      return `${this.formatNumber(minPrice)} - ${this.formatNumber(maxPrice)}`;
    },
    // Stock color coding
    getStockColor(stockCount) {
      if (stockCount <= 0) return 'error';
      if (stockCount <= 5) return 'warning';
      if (stockCount <= 20) return 'orange';
      return 'success';
    }
  }
});
// CONCATENATED MODULE: ./components/product/ProductCardPos.vue?vue&type=script&lang=js
 /* harmony default export */ var product_ProductCardPosvue_type_script_lang_js = (ProductCardPosvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductCardPos.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(814)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductCardPosvue_type_script_lang_js,
  ProductCardPosvue_type_template_id_38568bb3_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "38568bb3",
  "3b8e0c30"
  
)

/* harmony default export */ var ProductCardPos = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e2b1afe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(967);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e2b1afe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e2b1afe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e2b1afe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e2b1afe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1268:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-item[data-v-2e2b1afe]{margin-bottom:16px;transition:transform .2s ease}.product-item[data-v-2e2b1afe]:hover{transform:translateY(-2px)}.v-card--reveal[data-v-2e2b1afe]{align-items:center;bottom:0;justify-content:center;opacity:.5;position:absolute;width:100%}.product-item[data-v-2e2b1afe]{contain:layout;will-change:transform}@media (max-width:768px){.product-item[data-v-2e2b1afe]{margin-bottom:12px}}.v-btn--loading[data-v-2e2b1afe]{pointer-events:none}.row[data-v-2e2b1afe]{margin:-8px}.row>[class*=col][data-v-2e2b1afe]{padding:8px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(436);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(411);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(435);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pos/minimart/index.vue?vue&type=template&id=2e2b1afe&scoped=true







var minimartvue_type_template_id_2e2b1afe_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "pa-0"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_vm.filterProduct.length > 0 ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l(_vm.displayedProducts, function (item) {
    return _c('div', {
      key: item.id,
      staticClass: "col-12 col-md-3 col-sm-6 col-xs-6 text-center product-item"
    }, [_c('product-card-pos', {
      attrs: {
        "product": item,
        "productName": item.pro_name,
        "imagePath": item.img_name,
        "stock": item.card_count
      }
    })], 1);
  }), 0), _vm._v(" "), _vm.hasMoreProducts ? _c('div', {
    staticClass: "text-center mt-4"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "loading": _vm.loadingMore,
      "color": "primary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": _vm.loadMoreProducts
    }
  }, [_vm._v("\n            ເບິ່ງເພີ່ມເຕີມ (" + _vm._s(_vm.filterProduct.length - _vm.displayLimit) + "\n            ຍັງເຫລືອ)\n          ")])], 1) : _vm._e()])], 1) : _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "text-center pa-8"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey lighten-2"
    }
  }, [_vm._v("mdi-package-variant")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-h6 grey--text"
  }, [_vm._v("ບໍ່ພົບຂໍ້ມູນ")]), _vm._v(" "), _c('div', {
    staticClass: "mt-2 text-body-2 grey--text"
  }, [_vm.isSearchActive ? _c('span', [_vm._v("ລອງຄົ້ນຫາດ້ວຍຄຳອື່ນ")]) : _vm.isCategoryFiltered ? _c('span', [_vm._v("ບໍ່ມີສິນຄ້າໃນປະເພດນີ້")]) : _c('span', [_vm._v("ບໍ່ມີສິນຄ້າ")])]), _vm._v(" "), _vm.isSearchActive || _vm.isCategoryFiltered ? _c(VBtn["a" /* default */], {
    staticClass: "mt-4",
    attrs: {
      "color": "primary",
      "outlined": ""
    },
    on: {
      "click": _vm.clearFilters
    }
  }, [_vm._v("\n            ລົບຕົວກອງ\n          ")]) : _vm._e()], 1)])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pos/minimart/index.vue?vue&type=template&id=2e2b1afe&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pos/minimart/index.vue?vue&type=script&lang=js



/* harmony default export */ var minimartvue_type_script_lang_js = ({
  name: 'ProductList',
  layout: 'pos',
  middleware: 'auths',
  inject: ['sharedState'],
  data() {
    return {
      productPriceList: [],
      barcode: '',
      timer: null,
      tab: null,
      searh: '',
      productSelectedList: [],
      isloading: false,
      pageLine: 30,
      search: '',
      productSelectedFromBarcode: null,
      // Performance optimization properties
      debouncedKeyword: '',
      searchTimeout: null,
      displayLimit: 50,
      loadingMore: false,
      showDebugInfo: "production" === 'development'
    };
  },
  watch: {
    'sharedState.saleHeader'(newVal, oldVal) {
      console.log('Count changed:', newVal, oldVal);
      // ONLY reload if really necessary
      // if (this.findAllProduct.length === 0) {
      this.loadProduct();
      // }
    },
    searchKeyword: {
      handler(newVal) {
        console.log(`🔍 Store search keyword changed: "${newVal}"`);
        this.handleSearchKeywordChange(newVal);
        // NO PRODUCT RELOAD - just filter existing products
      },
      immediate: true
    },
    currenctSelectedCategoryId: {
      handler(newVal, oldVal) {
        console.log(`📁 Category changed from ${oldVal} to ${newVal}`);
        if (newVal !== oldVal) {
          this.resetDisplayLimit();
          // NO PRODUCT RELOAD - just filter existing products
        }
      }
    },
    // Watch for when products are loaded
    findAllProduct: {
      handler(newProducts, oldProducts) {
        if (newProducts && newProducts.length !== ((oldProducts === null || oldProducts === void 0 ? void 0 : oldProducts.length) || 0)) {
          console.log(`📦 Products changed: ${newProducts.length} products`);
          this.resetDisplayLimit();
          // NO RELOAD - just reset display
        }
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.handleStorageChange);
    window.removeEventListener('keydown', this.handleKeyDown);
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
  },
  async mounted() {
    const startTime = performance.now();
    await this.loadProduct();
    window.addEventListener('storage', this.handleStorageChange);
    window.addEventListener('keydown', this.handleKeyDown);
    const mountTime = performance.now() - startTime;
    console.warn(`Component mounted in ${mountTime.toFixed(2)}ms`);
    console.warn(`Company info:`, Object(api["c" /* mainCompanyInfoV1 */])(this.$store));
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      searchKeyword: 'searchKeyword',
      currenctSelectedCategoryId: 'currenctSelectedCategoryId',
      currentSelectedLocation: 'currentSelectedLocation',
      findAllCurrency: 'findAllCurrency',
      findAllTerminal: 'findAllTerminal',
      findAllProduct: 'findAllProduct',
      findSelectedTerminal: 'findSelectedTerminal',
      currentSelectedCustomer: 'currentSelectedCustomer'
    }),
    effectiveCustomer() {
      return this.currentSelectedCustomer;
    },
    currentTerminal() {
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
    },
    // FIXED: Proper filtering logic that handles all cases
    filterProduct() {
      const keyword = this.searchKeyword || '';
      const categoryId = this.currenctSelectedCategoryId;
      const allProducts = this.findAllProduct || [];
      console.log(`🔍 FILTERING DEBUG:`);
      console.log(`  - Total products: ${allProducts.length}`);
      console.log(`  - Search keyword: "${keyword}"`);
      console.log(`  - Category ID: ${categoryId}`);
      console.log(`  - Keyword length: ${keyword.length}`);
      console.log(`  - Is keyword empty: ${!keyword || keyword.trim().length === 0}`);

      // If no products loaded, return empty
      if (!allProducts || allProducts.length === 0) {
        console.log(`  - No products available`);
        return [];
      }
      let filteredProducts = [...allProducts]; // Start with all products

      // Apply category filter first (if not "All Categories")
      if (categoryId && categoryId !== 9999) {
        console.log(`  - Applying category filter: ${categoryId}`);
        filteredProducts = filteredProducts.filter(product => {
          const productCategory = product.pro_category;
          return productCategory === categoryId;
        });
        console.log(`  - After category filter: ${filteredProducts.length} products`);
      } else {
        console.log(`  - No category filter (showing all categories)`);
      }

      // Apply search filter (only if keyword exists and is not empty)
      if (keyword && keyword.trim().length > 0) {
        const searchTerm = keyword.trim().toLowerCase();
        console.log(`  - Applying search filter: "${searchTerm}"`);
        filteredProducts = filteredProducts.filter(product => {
          const productName = (product.pro_name || '').toLowerCase();
          const barcode = (product.barCode || '').toLowerCase();
          const nameMatch = productName.includes(searchTerm);
          const barcodeMatch = barcode.includes(searchTerm);
          return nameMatch || barcodeMatch;
        });
        console.log(`  - After search filter: ${filteredProducts.length} products`);
      } else {
        console.log(`  - No search filter (keyword empty or whitespace)`);
      }
      console.log(`  - FINAL RESULT: ${filteredProducts.length} products`);
      return filteredProducts;
    },
    displayedProducts() {
      return this.filterProduct.slice(0, this.displayLimit);
    },
    hasMoreProducts() {
      return this.filterProduct.length > this.displayLimit;
    },
    isSearchActive() {
      const keyword = this.searchKeyword || '';
      return keyword.trim().length > 0;
    },
    isCategoryFiltered() {
      return this.currenctSelectedCategoryId !== 9999;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['addProduct']),
    handleSearchKeywordChange(keyword) {
      // Clear any pending timeout
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      // Debounce the keyword update
      this.searchTimeout = setTimeout(() => {
        this.debouncedKeyword = keyword || '';
        this.resetDisplayLimit();
        console.log(`🔍 Debounced keyword updated: "${this.debouncedKeyword}"`);
      }, 300);
    },
    resetDisplayLimit() {
      this.displayLimit = 50;
    },
    loadMoreProducts() {
      this.loadingMore = true;
      setTimeout(() => {
        this.displayLimit = Math.min(this.displayLimit + 50, this.filterProduct.length);
        this.loadingMore = false;
      }, 100);
    },
    clearFilters() {
      console.log(`🧹 Clearing all filters`);
      this.$store.commit('SetSearchKeyword', '');
      this.$store.commit('setSelecteCategoryId', 9999);
      this.debouncedKeyword = '';
      this.resetDisplayLimit();
    },
    findCurrency(currencyId) {
      return this.findAllCurrency.find(el => el.id == currencyId);
    },
    async handleStorageChange(event) {
      if (event.key === 'saleHeader') {
        console.log('myValue changed:', event.newValue);
      }
    },
    findProductFromBarcode(barcode, isGift = false) {
      const startTime = performance.now();
      console.log(`🔍 Searching for barcode: ${barcode}`);
      console.log(`📦 Total products to search: ${this.findAllProduct.length}`);
      const foundProduct = this.findAllProduct.find(product => product.barCode === barcode);
      const searchTime = performance.now() - startTime;
      console.log(`⏱️ Barcode search took ${searchTime.toFixed(2)}ms`);
      if (foundProduct) {
        var _this$effectiveCustom, _foundProduct$priceLi;
        console.log(`✅ Found product: ${foundProduct.pro_name}`);
        let customerPrice = null;
        if ((_this$effectiveCustom = this.effectiveCustomer) !== null && _this$effectiveCustom !== void 0 && _this$effectiveCustom.grade && foundProduct !== null && foundProduct !== void 0 && (_foundProduct$priceLi = foundProduct.priceLists) !== null && _foundProduct$priceLi !== void 0 && _foundProduct$priceLi.length) {
          const gradePrice = foundProduct.priceLists.find(priceList => priceList.grade === this.effectiveCustomer.grade && priceList.isActive !== false && priceList.type === 'Price');
          customerPrice = (gradePrice === null || gradePrice === void 0 ? void 0 : gradePrice.amount) || null;
        }
        const cartItem = {
          ...foundProduct,
          localPrice: customerPrice || foundProduct.localPrice || foundProduct.pro_price,
          isGift: isGift,
          lineUUIDCheck: false,
          priceListId: null,
          lineUUID: Date.now() + Math.random().toString(16)
        };
        console.info(`🛒 Adding product to cart: ${foundProduct.pro_name}`);
        this.addProduct(cartItem);
        if (this.$swal) {
          this.$swal.fire({
            title: 'Product Added!',
            text: `${foundProduct.pro_name} added to cart`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          });
        }
      } else {
        console.warn(`❌ Product not found for barcode: ${barcode}`);
        if (this.$swal) {
          this.$swal.fire({
            title: 'Product Not Found',
            text: `No product found with barcode: ${barcode}`,
            icon: 'error',
            timer: 2000,
            showConfirmButton: false
          });
        }
      }
    },
    handleKeyDown(event) {
      if (this.timer) {
        clearInterval(this.timer);
      }
      if (event.key === 'Enter') {
        if (this.barcode) {
          this.findProductFromBarcode(this.barcode);
        }
        this.barcode = '';
        return;
      }
      if (event.key !== 'Shift') {
        this.barcode += event.key;
      }
      this.timer = setInterval(() => this.barcode = '', 20);
    },
    async loadProduct() {
      console.warn('PRODUCT is being reloaded...');
      this.isloading = true;
      try {
        await this.$store.dispatch('initializeProductsByLocation', this.currentSelectedLocation['id']);
        console.log(`✅ Products loaded: ${this.findAllProduct.length}`);
      } catch (error) {
        console.error('Error loading products:', error);
        Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'Failed to load products');
      } finally {
        this.isloading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/pos/minimart/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pos_minimartvue_type_script_lang_js = (minimartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/pos/minimart/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1267)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pos_minimartvue_type_script_lang_js,
  minimartvue_type_template_id_2e2b1afe_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "2e2b1afe",
  "9d8eac68"
  
)

/* harmony default export */ var minimart = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(70).default,ProductCardPos: __webpack_require__(1074).default})


/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_mixins_delayable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
/* @vue/component */).extend({
  name: 'v-hover',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    onMouseEnter() {
      this.runDelay('open');
    },
    onMouseLeave() {
      this.runDelay('close');
    }
  },
  render() {
    if (!this.$scopedSlots.default && this.value === undefined) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover is missing a default scopedSlot or bound value', this);
      return null;
    }
    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        hover: this.isActive
      });
    }
    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }
    if (!element || Array.isArray(element) || !element.tag) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover should only contain a single element', this);
      return element;
    }
    if (!this.disabled) {
      element.data = element.data || {};
      this._g(element.data, {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave
      });
    }
    return element;
  }
}));

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(815);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2cf978f6", content, true, context)
};

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_38568bb3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(712);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_38568bb3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_38568bb3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_38568bb3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_38568bb3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-card[data-v-38568bb3]{height:220px!important;overflow:hidden;position:relative;transition:all .3s ease}.product-card[data-v-38568bb3]:hover{box-shadow:0 4px 15px rgba(0,0,0,.25)!important;transform:translateY(-2px)}.product-card:hover .content-overlay[data-v-38568bb3]{background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.05) 70%,rgba(0,0,0,.4))!important}.product-card:hover .text-backdrop[data-v-38568bb3]{background:linear-gradient(0deg,rgba(0,0,0,.7) 0,rgba(0,0,0,.3) 50%,transparent)!important}.product-disabled[data-v-38568bb3]{cursor:not-allowed!important;opacity:.6;pointer-events:none}.promotion-eligible[data-v-38568bb3]{border:2px solid #4caf50!important}.customer-grade-pricing[data-v-38568bb3]{border:2px solid #2196f3!important}.product-background[data-v-38568bb3]{background-position:50%;background-repeat:no-repeat;background-size:cover}.broken-image-background[data-v-38568bb3],.product-background[data-v-38568bb3]{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}.broken-image-background[data-v-38568bb3]{align-items:center;background-color:#f5f5f5;display:flex;justify-content:center}.content-overlay[data-v-38568bb3]{background:linear-gradient(180deg,transparent 0,transparent 75%,rgba(0,0,0,.3));position:relative;transition:background .3s ease;z-index:2}.bottom-section-enhanced[data-v-38568bb3]{margin-top:auto;padding:6px;position:relative}.text-backdrop[data-v-38568bb3]{background:linear-gradient(0deg,rgba(0,0,0,.5) 0,rgba(0,0,0,.2) 60%,transparent);bottom:0;height:100%;left:0;position:absolute;right:0;transition:background .3s ease;z-index:1}.enhanced-text[data-v-38568bb3]{color:#fff!important;font-weight:700;position:relative;text-shadow:0 0 3px #000,0 0 6px rgba(0,0,0,.8),1px 1px 2px rgba(0,0,0,.9),-1px -1px 2px rgba(0,0,0,.9),1px -1px 2px rgba(0,0,0,.9),-1px 1px 2px rgba(0,0,0,.9);z-index:2}.product-name-enhanced[data-v-38568bb3]{margin-bottom:4px;position:relative;z-index:2}.product-name-text[data-v-38568bb3]{background:rgba(0,0,0,.4);border:1px solid hsla(0,0%,100%,.2);border-radius:4px;display:inline-block;font-size:.85rem!important;line-height:1.1;max-width:100%;padding:4px 8px;word-wrap:break-word;backdrop-filter:blur(2px)}.price-actions-enhanced[data-v-38568bb3]{position:relative;z-index:2}.price-actions-enhanced[data-v-38568bb3],.price-section-enhanced[data-v-38568bb3]{align-items:center;display:flex;flex-wrap:wrap;justify-content:center}.price-text[data-v-38568bb3]{backdrop-filter:blur(2px);background:rgba(0,0,0,.4);border:1px solid hsla(0,0%,100%,.2);border-radius:4px;display:inline-block;margin:2px;padding:3px 8px}.price-highlight[data-v-38568bb3]{background:rgba(0,0,0,.6)!important;border:1px solid hsla(0,0%,100%,.3)!important}.price-select-btn-enhanced[data-v-38568bb3]{background:hsla(0,0%,100%,.95)!important;border:2px solid var(--v-primary-base)!important;height:24px!important;margin-left:4px;min-width:24px!important;width:24px!important}.status-overlay-enhanced[data-v-38568bb3]{margin-top:4px;position:relative;text-align:center;z-index:2}.status-chip-enhanced[data-v-38568bb3]{backdrop-filter:blur(2px);border:1px solid hsla(0,0%,100%,.3);font-size:.65rem!important;height:18px!important}.promotion-badge[data-v-38568bb3]{background:hsla(0,0%,100%,.95);border:1px solid rgba(0,0,0,.1);border-radius:50%;padding:2px;position:absolute;right:40px;top:8px}.grade-price-badge[data-v-38568bb3],.price-list-badge[data-v-38568bb3]{left:8px;position:absolute;top:8px}.stock-chip-overlay[data-v-38568bb3]{border:1px solid hsla(0,0%,100%,.3);font-size:.7rem;height:20px;min-width:40px;position:absolute;right:8px;top:8px}.grayscale-filter[data-v-38568bb3]{filter:grayscale(100%) brightness(.7)}.product-card.adding[data-v-38568bb3]{animation:pulse-green-38568bb3 .6s ease-in-out}@keyframes pulse-green-38568bb3{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}@media (max-width:600px){.product-card[data-v-38568bb3]{height:200px!important}.product-name-text[data-v-38568bb3]{font-size:.8rem!important;padding:3px 6px}.price-text[data-v-38568bb3]{font-size:.75rem!important;padding:2px 6px}.price-select-btn-enhanced[data-v-38568bb3]{height:20px!important;min-width:20px!important;width:20px!important}.bottom-section-enhanced[data-v-38568bb3]{padding:4px}}@media (prefers-color-scheme:dark){.enhanced-text[data-v-38568bb3]{color:#000!important;text-shadow:0 0 3px hsla(0,0%,100%,.8),0 0 6px hsla(0,0%,100%,.6),1px 1px 2px hsla(0,0%,100%,.7),-1px -1px 2px hsla(0,0%,100%,.7),1px -1px 2px hsla(0,0%,100%,.7),-1px 1px 2px hsla(0,0%,100%,.7)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1268);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7c29cfea", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map