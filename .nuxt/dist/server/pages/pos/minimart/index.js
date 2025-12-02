exports.ids = [319,129];
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductCardPos.vue?vue&type=template&id=6e0a0121&scoped=true






var ProductCardPosvue_type_template_id_6e0a0121_scoped_true_render = function render() {
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
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(_vm.product.localPrice || _vm.product.pro_price)) + "\n                ")]), _vm._v(" "), _c('div', {
          staticClass: "subtitle-2 font-weight-bold price-text enhanced-text price-highlight"
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(_vm.getCustomerGradePrice(_vm.product))) + "\n                ")])]) : _c('div', [_c('div', {
          staticClass: "subtitle-2 font-weight-bold price-text enhanced-text price-highlight"
        }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(_vm.product.localPrice || _vm.product.pro_price)) + "\n                ")]), _vm._v(" "), _vm.hasAvailablePriceLists(_vm.product) ? _c('div', {
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

// CONCATENATED MODULE: ./components/product/ProductCardPos.vue?vue&type=template&id=6e0a0121&scoped=true

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
  ProductCardPosvue_type_template_id_6e0a0121_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "6e0a0121",
  "3b8e0c30"
  
)

/* harmony default export */ var ProductCardPos = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8eaa615a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(927);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8eaa615a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8eaa615a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8eaa615a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8eaa615a_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card--reveal{align-items:center;bottom:0;justify-content:center;opacity:.5;position:absolute;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(415);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pos/minimart/index.vue?vue&type=template&id=8eaa615a





var minimartvue_type_template_id_8eaa615a_render = function render() {
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
      "cols": 12
    }
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l(_vm.filterProduct, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-12 col-md-3 col-sm-6 col-xs-6 text-center"
    }, [_c('product-card-pos', {
      attrs: {
        "product": item,
        "productName": item.pro_name,
        "imagePath": item.img_name,
        "stock": item.card_count
      }
    })], 1);
  }), 0)])], 1) : _c(VRow["a" /* default */], [_c('div', {
    staticClass: "error"
  }, [_vm._v("\n                ບໍ່ພົບຂໍ້ມູນ\n            ")])])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pos/minimart/index.vue?vue&type=template&id=8eaa615a

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pos/minimart/index.vue?vue&type=script&lang=js



/* harmony default export */ var minimartvue_type_script_lang_js = ({
  layout: "pos",
  middleware: 'auths',
  data() {
    return {
      productPriceList: [],
      barcode: '',
      timer: null,
      tab: null,
      searh: '',
      productSelectedList: [],
      isloading: false,
      productList: [],
      categoryList: [],
      pageLine: 30,
      search: '',
      paymentList: [],
      productSelectedFromBarcode: null
    };
  },
  async mounted() {
    await this.loadProduct();
    await this.loadProductWithPriceList();
    await this.loadCategory();
    // await this.loadPayment()
    console.warn(`the company info is ${JSON.stringify(Object(api["c" /* mainCompanyInfoV1 */])(this.$store))}`);
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      searchKeyword: 'searchKeyword',
      currenctSelectedCategoryId: 'currenctSelectedCategoryId',
      currentSelectedLocation: 'currentSelectedLocation',
      findAllCurrency: 'findAllCurrency',
      findAllTerminal: 'findAllTerminal',
      findSelectedTerminal: 'findSelectedTerminal'
    }),
    currentTerminal() {
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
    },
    filterProduct() {
      console.log(`Category ${this.currenctSelectedCategoryId}`);
      let productByTerminalCompany = this.productList.filter(pro => pro.companyId === this.currentTerminal.location.companyId);
      if (!this.searchKeyword) {
        console.log(`Keywoard not available ...${this.searchKeyword}`);
        if (this.currenctSelectedCategoryId != 9999) {
          return productByTerminalCompany.filter(item => item.pro_category === this.currenctSelectedCategoryId);
        }
        // return this.productList; // Backup 20240111
        return this.productList; //.filter(pro=>pro.companyId === this.currentTerminal.location.companyId);
      }
      // element.age > 25 || element.name.includes("a")
      if (this.currenctSelectedCategoryId == 9999) {
        console.log(`CATEGORY SELECT ${this.currenctSelectedCategoryId}`);
        return this.productList.filter(item => item.pro_name.toLowerCase().includes(this.searchKeyword));
      }
      return productByTerminalCompany.filter(item => item.pro_category === this.currenctSelectedCategoryId && item.pro_name.toLowerCase().includes(this.searchKeyword));
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['addProduct']),
    findCurrency(currencyId) {
      return this.findAllCurrency.find(el => el.id == currencyId);
    },
    findProductFromBarcode(barcode) {
      this.productSelectedFromBarcode = this.productList.find(el => el.barCode == barcode);
      if (this.productSelectedFromBarcode) {
        this.addProduct(this.productSelectedFromBarcode);
        this.productSelectedFromBarcode = null;
      }
    },
    handleKeyDown(event) {
      if (this.timer) {
        clearInterval(this.timer);
      }
      if (event.key == 'Enter') {
        if (this.barcode) {
          // ************ Find product from this barcode and add to cart ************ //
          this.findProductFromBarcode(this.barcode);
        }
        this.barcode = '';
        return;
      }
      if (event.key != 'Shift') {
        this.barcode += event.key;
      }
      this.timer = setInterval(() => this.barcode = '', 20);
    },
    async loadProduct() {
      this.isloading = true;
      this.productList = [];
      await this.$axios.get(`product_f/${this.currentSelectedLocation['id']}`).then(res => {
        for (const iterator of res.data.data) {
          console.warn(`Currency id ${iterator['saleCurrencyId']}`);
          const currency = this.findCurrency(iterator['saleCurrencyId']);
          iterator['localPrice'] = iterator['pro_price'] * currency['rate'];
          this.productList.push(iterator);
        }
      }).catch(er => {
        this.message = er;
        Object(common["j" /* swalError2 */])(this.$swal, "Error 1111", er);
      });
      this.isloading = false;
    },
    async loadProductWithPriceList() {
      this.isloading = true;
      this.productPriceList = [];
      await this.$axios.get(`/api/product/find`).then(res => {
        this.productPriceList = res.data;
        // for (const iterator of res.data) {
        //     const currency = this.findCurrency(iterator['saleCurrencyId'])
        //     iterator['localPrice'] = iterator['pro_price'] * currency['rate']
        //     this.productList.push(iterator)
        // }
        console.info(`PRICE LIST ${JSON.stringify(this.productPriceList)}`);
      }).catch(er => {
        this.message = er;
        Object(common["j" /* swalError2 */])(this.$swal, "Error", er);
      });
      this.isloading = false;
    },
    async loadCategory() {
      this.isloading = true;
      this.categoryList = [];
      await this.$axios.get('/api/category/find').then(res => {
        for (const iterator of res.data) {
          this.categoryList.push(iterator);
        }
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, "Error", er);
      });
      this.isloading = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/pos/minimart/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pos_minimartvue_type_script_lang_js = (minimartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/pos/minimart/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1203)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pos_minimartvue_type_script_lang_js,
  minimartvue_type_template_id_8eaa615a_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9d8eac68"
  
)

/* harmony default export */ var minimart = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(67).default,ProductCardPos: __webpack_require__(1025).default})


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
  add("4222b4d6", content, true, context)
};

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_6e0a0121_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(685);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_6e0a0121_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_6e0a0121_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_6e0a0121_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_6e0a0121_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-card[data-v-6e0a0121]{height:220px!important;overflow:hidden;position:relative;transition:all .3s ease}.product-card[data-v-6e0a0121]:hover{box-shadow:0 4px 15px rgba(0,0,0,.25)!important;transform:translateY(-2px)}.product-card:hover .content-overlay[data-v-6e0a0121]{background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.05) 70%,rgba(0,0,0,.4))!important}.product-card:hover .text-backdrop[data-v-6e0a0121]{background:linear-gradient(0deg,rgba(0,0,0,.7) 0,rgba(0,0,0,.3) 50%,transparent)!important}.product-disabled[data-v-6e0a0121]{cursor:not-allowed!important;opacity:.6;pointer-events:none}.promotion-eligible[data-v-6e0a0121]{border:2px solid #4caf50!important}.customer-grade-pricing[data-v-6e0a0121]{border:2px solid #2196f3!important}.product-background[data-v-6e0a0121]{background-position:50%;background-repeat:no-repeat;background-size:cover}.broken-image-background[data-v-6e0a0121],.product-background[data-v-6e0a0121]{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}.broken-image-background[data-v-6e0a0121]{align-items:center;background-color:#f5f5f5;display:flex;justify-content:center}.content-overlay[data-v-6e0a0121]{background:linear-gradient(180deg,transparent 0,transparent 75%,rgba(0,0,0,.3));position:relative;transition:background .3s ease;z-index:2}.bottom-section-enhanced[data-v-6e0a0121]{margin-top:auto;padding:6px;position:relative}.text-backdrop[data-v-6e0a0121]{background:linear-gradient(0deg,rgba(0,0,0,.5) 0,rgba(0,0,0,.2) 60%,transparent);bottom:0;height:100%;left:0;position:absolute;right:0;transition:background .3s ease;z-index:1}.enhanced-text[data-v-6e0a0121]{color:#fff!important;font-weight:700;position:relative;text-shadow:0 0 3px #000,0 0 6px rgba(0,0,0,.8),1px 1px 2px rgba(0,0,0,.9),-1px -1px 2px rgba(0,0,0,.9),1px -1px 2px rgba(0,0,0,.9),-1px 1px 2px rgba(0,0,0,.9);z-index:2}.product-name-enhanced[data-v-6e0a0121]{margin-bottom:4px;position:relative;z-index:2}.product-name-text[data-v-6e0a0121]{background:rgba(0,0,0,.4);border:1px solid hsla(0,0%,100%,.2);border-radius:4px;display:inline-block;font-size:.85rem!important;line-height:1.1;max-width:100%;padding:4px 8px;word-wrap:break-word;backdrop-filter:blur(2px)}.price-actions-enhanced[data-v-6e0a0121]{position:relative;z-index:2}.price-actions-enhanced[data-v-6e0a0121],.price-section-enhanced[data-v-6e0a0121]{align-items:center;display:flex;flex-wrap:wrap;justify-content:center}.price-text[data-v-6e0a0121]{backdrop-filter:blur(2px);background:rgba(0,0,0,.4);border:1px solid hsla(0,0%,100%,.2);border-radius:4px;display:inline-block;margin:2px;padding:3px 8px}.price-highlight[data-v-6e0a0121]{background:rgba(0,0,0,.6)!important;border:1px solid hsla(0,0%,100%,.3)!important}.price-select-btn-enhanced[data-v-6e0a0121]{background:hsla(0,0%,100%,.95)!important;border:2px solid var(--v-primary-base)!important;height:24px!important;margin-left:4px;min-width:24px!important;width:24px!important}.status-overlay-enhanced[data-v-6e0a0121]{margin-top:4px;position:relative;text-align:center;z-index:2}.status-chip-enhanced[data-v-6e0a0121]{backdrop-filter:blur(2px);border:1px solid hsla(0,0%,100%,.3);font-size:.65rem!important;height:18px!important}.promotion-badge[data-v-6e0a0121]{background:hsla(0,0%,100%,.95);border:1px solid rgba(0,0,0,.1);border-radius:50%;padding:2px;position:absolute;right:40px;top:8px}.grade-price-badge[data-v-6e0a0121],.price-list-badge[data-v-6e0a0121]{left:8px;position:absolute;top:8px}.stock-chip-overlay[data-v-6e0a0121]{border:1px solid hsla(0,0%,100%,.3);font-size:.7rem;height:20px;min-width:40px;position:absolute;right:8px;top:8px}.grayscale-filter[data-v-6e0a0121]{filter:grayscale(100%) brightness(.7)}.product-card.adding[data-v-6e0a0121]{animation:pulse-green-6e0a0121 .6s ease-in-out}@keyframes pulse-green-6e0a0121{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}@media (max-width:600px){.product-card[data-v-6e0a0121]{height:200px!important}.product-name-text[data-v-6e0a0121]{font-size:.8rem!important;padding:3px 6px}.price-text[data-v-6e0a0121]{font-size:.75rem!important;padding:2px 6px}.price-select-btn-enhanced[data-v-6e0a0121]{height:20px!important;min-width:20px!important;width:20px!important}.bottom-section-enhanced[data-v-6e0a0121]{padding:4px}}@media (prefers-color-scheme:dark){.enhanced-text[data-v-6e0a0121]{color:#000!important;text-shadow:0 0 3px hsla(0,0%,100%,.8),0 0 6px hsla(0,0%,100%,.6),1px 1px 2px hsla(0,0%,100%,.7),-1px -1px 2px hsla(0,0%,100%,.7),1px -1px 2px hsla(0,0%,100%,.7),-1px 1px 2px hsla(0,0%,100%,.7)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1204);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("73856454", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map