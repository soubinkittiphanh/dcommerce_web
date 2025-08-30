exports.ids = [270,109];
exports.modules = {

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d18f151_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(776);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d18f151_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d18f151_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d18f151_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d18f151_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1012:
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

/***/ 1199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(382);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pos/minimart/index.vue?vue&type=template&id=3d18f151&





var minimartvue_type_template_id_3d18f151_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "pa-6"
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

// CONCATENATED MODULE: ./pages/pos/minimart/index.vue?vue&type=template&id=3d18f151&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pos/minimart/index.vue?vue&type=script&lang=js&



/* harmony default export */ var minimartvue_type_script_lang_js_ = ({
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
        for (const iterator of res.data) {
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
// CONCATENATED MODULE: ./pages/pos/minimart/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pos_minimartvue_type_script_lang_js_ = (minimartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/pos/minimart/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1011)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pos_minimartvue_type_script_lang_js_,
  minimartvue_type_template_id_3d18f151_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9d8eac68"
  
)

/* harmony default export */ var minimart = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default,ProductCardPos: __webpack_require__(853).default})


/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(661);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c8e393a4", content, true, context)
};

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_3474c9b9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(567);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_3474c9b9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_3474c9b9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_3474c9b9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardPos_vue_vue_type_style_index_0_id_3474c9b9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1012);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ef36eb9e", content, true, context)
};

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductCardPos.vue?vue&type=template&id=3474c9b9&scoped=true&





var ProductCardPosvue_type_template_id_3474c9b9_scoped_true_render = function render() {
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
        return [_c(VCard["a" /* default */], {
          attrs: {
            "elevation": hover ? 16 : 0,
            "outlined": ""
          },
          on: {
            "click": function ($event) {
              return _vm.addProduct(_vm.product);
            }
          }
        }, [_c(VImg["a" /* default */], {
          attrs: {
            "max-height": "200px",
            "src": `${_vm.host}/uploads/${_vm.imagePath}`,
            "lazy-src": `${_vm.host}/uploads/${_vm.imagePath}`
          }
        }), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
          staticClass: "text-start"
        }, [_c('div', {
          staticClass: "font-weight-meduim primary--text"
        }, [_vm._v("\n                    " + _vm._s(_vm.productName) + " \n                ")]), _vm._v(" "), _c('div', {
          staticClass: "font-weight-meduim primary--text"
        }, [_vm._v(" Stock: " + _vm._s(_vm.stock) + " ")]), _vm._v(" "), _c('div', {
          staticClass: "font-weight-meduim primary--text"
        }, [_vm._v(" ລາຄາ: " + _vm._s(_vm.formatNumber(_vm.product.localPrice)))])])], 1)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductCardPos.vue?vue&type=template&id=3474c9b9&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductCardPos.vue?vue&type=script&lang=js&



/* harmony default export */ var ProductCardPosvue_type_script_lang_js_ = ({
  name: 'product-card-pos',
  props: {
    imagePath: {
      type: String,
      default: ''
    },
    productName: {
      type: String,
      default: ''
    },
    product: {
      type: Object,
      default: null
    },
    stock: {
      type: Number,
      default: 0
    }
  },
  computed: {
    host() {
      return Object(api["a" /* hostName */])();
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['addProduct']),
    formatNumber(val) {
      return Object(common["e" /* getFormatNum */])(val);
    }
  }
});
// CONCATENATED MODULE: ./components/product/ProductCardPos.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductCardPosvue_type_script_lang_js_ = (ProductCardPosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductCardPos.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(660)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductCardPosvue_type_script_lang_js_,
  ProductCardPosvue_type_template_id_3474c9b9_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "3474c9b9",
  "3b8e0c30"
  
)

/* harmony default export */ var ProductCardPos = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map