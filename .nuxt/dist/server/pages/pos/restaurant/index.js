exports.ids = [274];
exports.modules = {

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_da4facc2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(782);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_da4facc2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_da4facc2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_da4facc2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_da4facc2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1022:
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

/***/ 1212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(341);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(383);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pos/restaurant/index.vue?vue&type=template&id=da4facc2&






var restaurantvue_type_template_id_da4facc2_render = function render() {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l(_vm.orderTableList, function (tb, i) {
    return _c('div', {
      key: i,
      staticClass: "col-12 col-md-3 col-sm-6 col-xs-6 text-center"
    }, [_c(VCard["a" /* default */], {
      staticClass: "mx-auto",
      attrs: {
        "max-width": "100",
        "height": "100",
        "image": "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "theme": "dark"
      }
    }, [_c(components_VCard["d" /* VCardTitle */], [_vm._v("\n                            " + _vm._s(tb['name']) + "\n                        ")])], 1)], 1);
  }), 0)])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pos/restaurant/index.vue?vue&type=template&id=da4facc2&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pos/restaurant/index.vue?vue&type=script&lang=js&


/* harmony default export */ var restaurantvue_type_script_lang_js_ = ({
  layout: "login",
  middleware: 'auths',
  data() {
    return {
      barcode: '',
      timer: null,
      tab: null,
      searh: '',
      orderTableList: [{
        id: 1,
        name: 'TB 1'
      }, {
        id: 2,
        name: 'TB 2'
      }, {
        id: 3,
        name: 'TB 3'
      }, {
        id: 4,
        name: 'TB 4'
      }, {
        id: 5,
        name: 'TB 5'
      }, {
        id: 6,
        name: 'TB 6'
      }],
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
    // await this.loadProduct()
    // await this.loadCategory()
    // await this.loadPayment()

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
      findAllCurrency: 'findAllCurrency'
    }),
    filterProduct() {
      if (!this.searchKeyword) {
        if (this.currenctSelectedCategoryId != 9999) {
          return this.productList.filter(item => item.pro_category === this.currenctSelectedCategoryId);
        }
        return this.productList;
      }
      // element.age > 25 || element.name.includes("a")
      if (this.currenctSelectedCategoryId == 9999) {
        return this.productList.filter(item => item.pro_name.toLowerCase().includes(this.searchKeyword));
      }
      return this.productList.filter(item => item.pro_category === this.currenctSelectedCategoryId && item.pro_name.toLowerCase().includes(this.searchKeyword));
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
          const currency = this.findCurrency(iterator['saleCurrencyId']);
          iterator['localPrice'] = iterator['pro_price'] * currency['rate'];
          this.productList.push(iterator);
        }
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
    },
    async loadPayment() {
      this.isloading = true;
      this.paymentList = [];
      await this.$axios.get('/api/paymentMethod/find').then(res => {
        for (const iterator of res.data) {
          this.paymentList.push(iterator);
        }
      }).catch(er => {
        Object(common["j" /* swalError2 */])(this.$swal, "Error", er);
      });
      this.isloading = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/pos/restaurant/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pos_restaurantvue_type_script_lang_js_ = (restaurantvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/pos/restaurant/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1021)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pos_restaurantvue_type_script_lang_js_,
  restaurantvue_type_template_id_da4facc2_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d2fa4f48"
  
)

/* harmony default export */ var restaurant = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1022);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0e73cf3c", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map