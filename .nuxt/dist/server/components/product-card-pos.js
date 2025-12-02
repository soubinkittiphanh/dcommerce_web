exports.ids = [129];
exports.modules = {

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(483);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductCardPos.vue?vue&type=template&id=0237b143&scoped=true






var ProductCardPosvue_type_template_id_0237b143_scoped_true_render = function render() {
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
          staticClass: "bottom-section"
        }, [_c('div', {
          staticClass: "product-name-overlay pa-2 mb-2"
        }, [_c('div', {
          staticClass: "font-weight-bold white--text"
        }, [_vm._v("\n              " + _vm._s(_vm.productName) + "\n            ")])]), _vm._v(" "), _c('div', {
          staticClass: "price-actions-overlay pa-2"
        }, [_c('div', {
          staticClass: "price-section mb-2"
        }, [_vm.getCustomerGradePrice(_vm.product) ? _c('div', {
          staticClass: "text-center"
        }, [_c('div', {
          staticClass: "caption white--text text-decoration-line-through",
          staticStyle: {
            "opacity": "0.75"
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(_vm.product.localPrice || _vm.product.pro_price)) + "\n                ")]), _vm._v(" "), _c('div', {
          staticClass: "subtitle-1 white--text font-weight-bold"
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(_vm.getCustomerGradePrice(_vm.product))) + "\n                ")])]) : _c('div', [_c('div', {
          staticClass: "subtitle-1 white--text font-weight-bold"
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(_vm.product.localPrice || _vm.product.pro_price)) + "\n                ")]), _vm._v(" "), _vm.hasAvailablePriceLists(_vm.product) ? _c('div', {
          staticClass: "caption white--text",
          staticStyle: {
            "opacity": "0.75"
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.getPriceRangeText(_vm.product)) + "\n                ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
          staticClass: "d-flex gap-1"
        }, [_vm.hasAvailablePriceLists(_vm.product) || !_vm.getCustomerGradePrice(_vm.product) ? _c(VBtn["a" /* default */], {
          staticClass: "price-select-btn",
          attrs: {
            "color": "white",
            "text-color": "primary",
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
            "x-small": "",
            "color": "primary"
          }
        }, [_vm._v("mdi-tag-multiple")])], 1) : _vm._e()], 1), _vm._v(" "), !_vm.product.isActive ? _c('div', {
          staticClass: "status-overlay mt-1"
        }, [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": "error",
            "text-color": "white"
          }
        }, [_vm._v("\n                INACTIVE\n              ")])], 1) : _vm.stock <= 0 && _vm.product.validateStockOnSale == 1 ? _c('div', {
          staticClass: "status-overlay mt-1"
        }, [_c(VChip["a" /* default */], {
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

// CONCATENATED MODULE: ./components/product/ProductCardPos.vue?vue&type=template&id=0237b143&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(41);

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
    ...Object(external_vuex_["mapGetters"])(['currentSelectedCustomer']),
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
    handleCardClick() {
      // Default card click behavior - could be quick add or open product details
      this.handleQuickAdd();
    },
    handleQuickAdd() {
      if (!this.validateProductAvailability()) {
        return;
      }

      // Use customer grade price if available, otherwise use default price
      const productToAdd = {
        ...this.product,
        localPrice: this.getCustomerGradePrice(this.product) || this.product.localPrice || this.product.pro_price
      };
      this.addProduct(productToAdd);
      this.$emit('update-cus-screen');

      // Show success feedback
      if (this.$toast) {
        this.$toast.success(`${this.productName} added to cart`);
      }
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
        this.showError("Product is inactive");
        return false;
      }
      if (this.stock <= 0 && this.product.validateStockOnSale == 1) {
        this.showError("Stock not enough");
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
    getCustomerGradePrice(product) {
      var _this$effectiveCustom;
      if (!((_this$effectiveCustom = this.effectiveCustomer) !== null && _this$effectiveCustom !== void 0 && _this$effectiveCustom.grade) || !product.gradePricing) return null;
      const gradePrice = product.gradePricing.find(pricing => pricing.grade === this.effectiveCustomer.grade);
      return gradePrice ? gradePrice.price : null;
    },
    getGradeColor(grade) {
      const gradeColors = {
        'A': 'green',
        'B': 'blue',
        'C': 'orange',
        'D': 'red'
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
  
  var style0 = __webpack_require__(785)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductCardPosvue_type_script_lang_js,
  ProductCardPosvue_type_template_id_0237b143_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "0237b143",
  "3b8e0c30"
  
)

/* harmony default export */ var ProductCardPos = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
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

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(786);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("607384e9", content, true, context)
};

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_0237b143_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(685);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_0237b143_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_0237b143_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_0237b143_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_0237b143_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-card[data-v-0237b143]{height:220px!important;overflow:hidden;position:relative;transition:all .3s ease}.product-card[data-v-0237b143]:hover{box-shadow:0 4px 15px rgba(0,0,0,.25)!important;transform:translateY(-2px)}.product-card:hover .content-overlay[data-v-0237b143]{background:linear-gradient(180deg,rgba(0,0,0,.1) 0,rgba(0,0,0,.2) 40%,rgba(0,0,0,.6))!important}.product-disabled[data-v-0237b143]{cursor:not-allowed!important;opacity:.6;pointer-events:none}.promotion-eligible[data-v-0237b143]{border:2px solid #4caf50!important}.customer-grade-pricing[data-v-0237b143]{border:2px solid #2196f3!important}.product-background[data-v-0237b143]{background-position:50%;background-repeat:no-repeat;background-size:cover}.broken-image-background[data-v-0237b143],.product-background[data-v-0237b143]{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}.broken-image-background[data-v-0237b143]{align-items:center;background-color:#f5f5f5;display:flex;justify-content:center}.content-overlay[data-v-0237b143]{background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.1) 30%,rgba(0,0,0,.4));transition:background .3s ease;z-index:2}.content-overlay[data-v-0237b143],.top-section[data-v-0237b143]{position:relative}.bottom-section[data-v-0237b143]{margin-top:auto}.product-name-overlay[data-v-0237b143]{backdrop-filter:blur(4px);background:rgba(0,0,0,.05);border-radius:8px}.price-actions-overlay[data-v-0237b143]{backdrop-filter:blur(6px);background:rgba(0,0,0,.05);border-radius:8px 8px 0 0}.promotion-badge[data-v-0237b143]{background:hsla(0,0%,100%,.9);border-radius:50%;padding:2px;position:absolute;right:8px;top:8px}.grade-price-badge[data-v-0237b143],.price-list-badge[data-v-0237b143]{left:8px;position:absolute;top:8px}.stock-chip-overlay[data-v-0237b143]{font-size:.7rem;height:20px;min-width:40px;position:absolute;right:8px;top:8px}.grayscale-filter[data-v-0237b143]{filter:grayscale(100%) brightness(.7)}.quick-add-btn[data-v-0237b143]{background:hsla(0,0%,100%,.95)!important;color:var(--v-primary-base)!important;font-size:.7rem;font-weight:700;height:24px}.price-select-btn[data-v-0237b143]{background:hsla(0,0%,100%,.9)!important;height:24px;min-width:24px;width:24px}.status-overlay[data-v-0237b143]{text-align:center}.product-card.adding[data-v-0237b143]{animation:pulse-green-0237b143 .6s ease-in-out}@keyframes pulse-green-0237b143{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}@media (max-width:600px){.product-card[data-v-0237b143]{height:200px!important}.quick-add-btn[data-v-0237b143]{font-size:.65rem;height:22px}.price-select-btn[data-v-0237b143]{height:22px;min-width:22px;width:22px}.price-actions-overlay[data-v-0237b143],.product-name-overlay[data-v-0237b143]{padding:8px!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=product-card-pos.js.map