exports.ids = [217];
exports.modules = {

/***/ 1265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/quotation/index.vue?vue&type=template&id=c8376456&scoped=true&



var quotationvue_type_template_id_c8376456_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "body"
    }
  }, [_vm._ssrNode("<div size=\"A4\" class=\"wrapper page\" data-v-c8376456>", "</div>", [_vm._ssrNode("<div data-v-c8376456>", "</div>", [_vm._ssrNode("<p class=\"text-color\" style=\"font-size: 21pt; font-weight: bold; text-align: center\" data-v-c8376456>\n        ໃບສະເໜີລາຄາ\n      </p> "), _vm._ssrNode("<div style=\"padding-left: 1cm;padding-right: 1cm\" data-v-c8376456>", "</div>", [_vm._ssrNode("<div class=\"title-space\" data-v-c8376456>", "</div>", [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('b', {
    staticClass: "text-color heading-14"
  }, [_vm._v("1. ຂໍ້ມູນລູກຄ້າ:")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "cols": "6"
    }
  }, [_c('b', {
    staticClass: "text-color heading-14"
  }, [_vm._v("ຮ້ານ: ຈີທັ່ນ")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div data-v-c8376456>", "</div>", [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('table', {
    staticClass: "table-layout"
  }, [_c('tbody', [_c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v(" ຊື່: " + _vm._s(_vm.customer.name))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v(" ບໍລິສັດ: " + _vm._s(_vm.customer.company))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v(" ເບີໂທ: " + _vm._s(_vm.customer.telephone))])])])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "align-self": "end"
    }
  }, [_c('table', {
    staticClass: "table-layout"
  }, [_c('tbody', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v(" ເລກທີໃບສະເຫນີລາຄາ: " + _vm._s(_vm.quotationId))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v(" ວັນທີ: " + _vm._s(new Date().toDateString()))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v(" ໂທ: 071 999 999")])])])])])], 1)], 1), _vm._ssrNode(" <div class=\"title-space\" data-v-c8376456><b class=\"text-color heading-14\" data-v-c8376456>2. ລາຍການສິນຄ້າ</b></div> <div data-v-c8376456><table width=\"100%\" class=\"table table-layout\" style=\"border-collapse: collapse;\" data-v-c8376456><thead data-v-c8376456><tr data-v-c8376456><th style=\"width: 40px\" data-v-c8376456>ລ/ດ</th> <th style=\"width: 180px\" data-v-c8376456>ສິນຄ້າ</th> <th style=\"width: 80px\" data-v-c8376456>ຈຳນວນ</th> <th style=\"width: 100px\" data-v-c8376456>ລາຄາຕໍ່ຫນ່ວຍ</th> <th style=\"width: 70px\" data-v-c8376456>ລວມ</th></tr></thead> <tbody data-v-c8376456>" + (_vm.products && _vm.products.length > 0 ? "<div style=\"display: contents\" data-v-c8376456>" + _vm._ssrList(_vm.products, function (product, i) {
    return "<tr class=\"page-break\" data-v-c8376456><td class=\"text-center\" data-v-c8376456>" + _vm._ssrEscape(_vm._s(++i)) + "</td> <td data-v-c8376456>" + _vm._ssrEscape(_vm._s(product.pro_name)) + "</td> <td style=\"text-align: right;\" data-v-c8376456>" + _vm._ssrEscape(_vm._s(product.qty)) + "</td> <td style=\"text-align: right;\" data-v-c8376456>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(product.pro_price))) + "</td> <td style=\"text-align: right;\" data-v-c8376456>" + _vm._ssrEscape(_vm._s(_vm.formatNumber(product.pro_price * product.qty))) + "</td></tr>";
  }) + "</div>" : "<div style=\"display: contents\" data-v-c8376456><tr data-v-c8376456><td colspan=\"5\" data-v-c8376456>ບໍ່ມີຂໍ້ມູນ</td></tr></div>") + " <tr class=\"page-break\" data-v-c8376456><td colspan=\"4\" style=\"text-align: right; font-weight: bold;\" data-v-c8376456>ລາຄາລວມ </td> <td style=\"text-align: right; font-weight: bold;\" data-v-c8376456>" + _vm._ssrEscape(" " + _vm._s(_vm.formatNumber(_vm.grandTotal))) + "</td></tr></tbody></table></div> "), _c(VRow["a" /* default */], {
    staticClass: "title-space",
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], [_c('b', {
    staticClass: "text-color heading-14"
  }, [_vm._v("3. Term and condition")])])], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], [_c('div', [_vm._v("\n              This quotation is valid for 30 days\n              Delivery in maximum 15 days after confirmation of order\n            ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', [_vm._v("\n              Confirmed and Accepted by Customer\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "mt-10"
  }, [_vm._v("\n\n              -----------------------------------------------------------------------------\n\n            ")]), _vm._v(" "), _c('div', [_vm._v("\n              Name/signature/company stamp\n            ")])])], 1)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/quotation/index.vue?vue&type=template&id=c8376456&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/quotation/index.vue?vue&type=script&lang=js&
var quotationvue_type_script_lang_js_ = __webpack_require__(658);

// CONCATENATED MODULE: ./pages/admin/quotation/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_quotationvue_type_script_lang_js_ = (quotationvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/quotation/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(963)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_quotationvue_type_script_lang_js_,
  quotationvue_type_template_id_c8376456_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "c8376456",
  "2719da9e"
  
)

/* harmony default export */ var quotation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);

// import { _getMonthDiff, _calculateAge } from '@/helper/Utils'

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Quotation',
  layout: 'login',
  // middleware: ['roles/admin_mange_users'],

  data() {
    return {
      // header: require('assets/img/header_report.jpg'),
      id: null,
      age: 0,
      discount: 0,
      customer: {},
      products: [],
      quotationId: 0
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['cartOfProduct', 'currenctSelectedCategoryId', 'currentSelectedCustomer', 'currentSelectedPayment']),
    // currenctCustomer() {
    //   // return this.currentSelectedCustomer

    //   // return this.$route.query.customer.cus
    //   // const customer = this.$route.query.customer
    //   const myObjectString = localStorage.getItem('quotation');
    //   const myObject = JSON.parse(myObjectString);
    //   return myObject.customer
    // },
    // productCart() {
    //   // return this.cartOfProduct
    //   // console.log("===> data ", this.$route.query.cartOfProduct);
    //   // const product = this.$route.query.product
    //   const myObjectString = localStorage.getItem('quotation');
    //   const myObject = JSON.parse(myObjectString);
    //   return myObject.product
    //   // return product
    //   // return this.$route.query.cartOfProduct
    // },
    grandTotal() {
      const totalPrice = this.products.reduce((total, item) => {
        return total + item.qty * item.pro_price;
      }, 0);
      return totalPrice;
    }
  },
  mounted() {
    console.log("this is mounted ===> ");
    const myObjectString = localStorage.getItem('customer');
    const quotationId = localStorage.getItem('quotationId');
    this.quotationId = quotationId;
    console.log("CUSTOMER===> ", myObjectString);
    const myObject = JSON.parse(myObjectString);
    this.customer = myObject;
    const myObjectProductString = localStorage.getItem('product');
    const myProductObject = JSON.parse(myObjectProductString);
    this.products = myProductObject;
  },
  async created() {
    this.id = parseInt(this.$route.query.id);
    if (this.id) {
      const empId = Number.isInteger(this.id) ? this.id : null;
      if (empId) {
        try {
          let res = await this.$axios.get(`${process.env.url}/get/img/${empId}`, {
            responseType: 'blob'
          });
          if (res.data && res.data.size > 0) this.image = URL.createObjectURL(res.data);
        } catch (e) {
          console.log(e);
        }
        await this.getAllEmpInfo(empId);
      }
    }
  },
  methods: {
    formatNumber(val) {
      return Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* getFormatNum */ "e"])(val);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(341)["URL"]))

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(964);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7b46c096", content, true, context)
};

/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c8376456_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(756);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c8376456_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c8376456_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c8376456_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c8376456_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#body[data-v-c8376456]{font-size:12px}.title-space[data-v-c8376456]{margin:4px 0}.heading-14[data-v-c8376456]{font-size:16px}.text-color[data-v-c8376456]{color:#246ab2}.page-break[data-v-c8376456]{page-break-after:auto;page-break-inside:avoid}@media print{.page[data-v-c8376456],body[data-v-c8376456]{margin:0}table[data-v-c8376456]{page-break-inside:auto}td[data-v-c8376456],tr[data-v-c8376456]{page-break-after:auto;page-break-inside:avoid}thead[data-v-c8376456]{display:table-header-group}tfoot[data-v-c8376456]{display:table-footer-group}#page-break[data-v-c8376456]{clear:both;page-break-after:always}@page{margin:1cm 0 .2cm 0}}.page-footer[data-v-c8376456],.page-footer-space[data-v-c8376456]{height:100px}.page-footer[data-v-c8376456]{bottom:0;position:fixed;width:21cm}.table td[data-v-c8376456],th[data-v-c8376456]{border:1px solid #000;padding:8px;text-align:left}.table th[data-v-c8376456]{font-size:11pt;text-align:center}.table td[data-v-c8376456]{font-size:8pt}*[data-v-c8376456]{font-family:Phetsarath OT}#body[data-v-c8376456]{background:#ccc}.page[data-v-c8376456]{background:#fff;display:block;margin:0 auto .5cm}.page[size=A4][data-v-c8376456]{width:21cm}.page[size=A4][layout=landscape][data-v-c8376456]{height:21cm;width:29.7cm}.page[size=A3][data-v-c8376456]{height:42cm;width:29.7cm}.page[size=A3][layout=landscape][data-v-c8376456]{height:29.7cm;width:42cm}.page[size=A5][data-v-c8376456]{height:21cm;width:14.8cm}.page[size=A5][layout=landscape][data-v-c8376456]{height:14.8cm;width:21cm}.d-flex>p[data-v-c8376456]{margin-bottom:0}.table-layout[data-v-c8376456]{table-layout:fixed;width:100%}.table-layout>tbody>tr>td[data-v-c8376456]:first-child{width:130px}.table-layout>tbody>tr>td[data-v-c8376456]:nth-child(5){width:80px}.table-layout>tbody>tr>td[data-v-c8376456]:nth-child(6){width:150px}td[data-v-c8376456]{word-wrap:break-word;padding-left:2px;padding-right:2px;vertical-align:top}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map