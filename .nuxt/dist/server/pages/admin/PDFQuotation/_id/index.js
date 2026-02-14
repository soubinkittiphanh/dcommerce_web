exports.ids = [181];
exports.modules = {

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1371);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2d464e74", content, true, context)
};

/***/ }),

/***/ 1370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_285dfd8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1021);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_285dfd8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_285dfd8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_285dfd8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_285dfd8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1371:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-285dfd8f]{font-family:\"Noto Sans Lao\"}#body[data-v-285dfd8f]{font-size:12px}.company-logo[data-v-285dfd8f]{border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);height:auto;max-width:200px;-o-object-fit:contain;object-fit:contain}.logo-placeholder[data-v-285dfd8f]{align-items:center;background-color:#fafafa;border:2px dashed #e0e0e0;border-radius:8px;display:flex;flex-direction:column;height:120px;justify-content:center;width:200px}.signature-section[data-v-285dfd8f]{margin-top:40px}.signature-box[data-v-285dfd8f]{padding:10px}.signature-label[data-v-285dfd8f]{color:#333;font-weight:700}.signature-note[data-v-285dfd8f]{color:#555;font-weight:700;margin-bottom:20px}.total-row[data-v-285dfd8f]{background-color:#f5f5f5;font-size:14pt}.title-space[data-v-285dfd8f]{margin:4px 0}.heading-14[data-v-285dfd8f]{font-size:16px}.text-color[data-v-285dfd8f]{color:#246ab2}.page-break[data-v-285dfd8f]{page-break-inside:avoid;page-break-after:auto}@media print{.page[data-v-285dfd8f],body[data-v-285dfd8f]{margin:0}table[data-v-285dfd8f]{page-break-inside:auto}td[data-v-285dfd8f],tr[data-v-285dfd8f]{page-break-inside:avoid;page-break-after:auto}thead[data-v-285dfd8f]{display:table-header-group}tfoot[data-v-285dfd8f]{display:table-footer-group}#page-break[data-v-285dfd8f]{clear:both;page-break-after:always}@page{margin:1cm 0 .2cm 0}.signature-section[data-v-285dfd8f]{page-break-inside:avoid}.company-logo[data-v-285dfd8f]{max-width:180px}}.page-footer[data-v-285dfd8f],.page-footer-space[data-v-285dfd8f]{height:100px}.page-footer[data-v-285dfd8f]{bottom:0;position:fixed;width:21cm}.table td[data-v-285dfd8f],th[data-v-285dfd8f]{border:1px solid #000;padding:8px;text-align:left}.table th[data-v-285dfd8f]{background-color:#f8f9fa;font-size:11pt;text-align:center}.table td[data-v-285dfd8f]{font-size:12pt}*[data-v-285dfd8f]{font-family:Phetsarath OT}#body[data-v-285dfd8f]{background:#ccc}.page[data-v-285dfd8f]{background:#fff;box-shadow:0 4px 8px rgba(0,0,0,.1);display:block;margin:0 auto .5cm}.page[size=A4][data-v-285dfd8f]{width:21cm}.page[size=A4][layout=landscape][data-v-285dfd8f]{height:21cm;width:29.7cm}.page[size=A3][data-v-285dfd8f]{height:42cm;width:29.7cm}.page[size=A3][layout=landscape][data-v-285dfd8f]{height:29.7cm;width:42cm}.page[size=A5][data-v-285dfd8f]{height:21cm;width:14.8cm}.page[size=A5][layout=landscape][data-v-285dfd8f]{height:14.8cm;width:21cm}.d-flex>p[data-v-285dfd8f]{margin-bottom:0}.table-layout[data-v-285dfd8f]{table-layout:fixed;width:100%}.table-layout>tbody>tr>td[data-v-285dfd8f]:first-child{width:130px}.table-layout>tbody>tr>td[data-v-285dfd8f]:nth-child(5){width:80px}.table-layout>tbody>tr>td[data-v-285dfd8f]:nth-child(6){width:150px}td[data-v-285dfd8f]{word-wrap:break-word;padding-left:2px;padding-right:2px;vertical-align:top}.v-divider[data-v-285dfd8f]{border-color:#246ab2;border-width:1px;margin:16px 0}.text-grey[data-v-285dfd8f]{color:#757575}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(439);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/PDFQuotation/_id/index.vue?vue&type=template&id=285dfd8f&scoped=true







var _idvue_type_template_id_285dfd8f_scoped_true_render = function render() {
  var _vm$companyDataV, _vm$companyDataV2, _vm$companyDataV3, _vm$companyDataV4, _vm$companyDataV5, _vm$header$client, _vm$header$client2, _vm$header$client3, _vm$header$client4, _vm$header$user;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "body"
    }
  }, [_vm._ssrNode("<div size=\"A4\" class=\"wrapper page\" data-v-285dfd8f>", "</div>", [_c(VContainer["a" /* default */], [_c('div', {
    staticStyle: {
      "display": "flex",
      "justify-content": "center"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_vm.companyLogoUrl ? _c('img', {
    staticClass: "company-logo",
    attrs: {
      "src": _vm.companyLogoUrl,
      "alt": ((_vm$companyDataV = _vm.companyDataV1) === null || _vm$companyDataV === void 0 ? void 0 : _vm$companyDataV.name) || 'Company Logo',
      "width": "200px"
    },
    on: {
      "error": _vm.handleLogoError
    }
  }) : !_vm.isLoading ? _c('div', {
    staticClass: "logo-placeholder"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "100",
      "color": "grey-lighten-2"
    }
  }, [_vm._v("mdi-domain")]), _vm._v(" "), _c('div', {
    staticClass: "text-caption text-grey"
  }, [_vm._v("No Logo Available")])], 1) : _vm._e()]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "align-self": "end"
    }
  }, [_c('table', {
    staticClass: "table-layout",
    staticStyle: {
      "font-size": "larger",
      "font-weight": "bold"
    }
  }, [_c('tbody', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v(_vm._s(((_vm$companyDataV2 = _vm.companyDataV1) === null || _vm$companyDataV2 === void 0 ? void 0 : _vm$companyDataV2.name) || 'N/A'))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v(_vm._s(((_vm$companyDataV3 = _vm.companyDataV1) === null || _vm$companyDataV3 === void 0 ? void 0 : _vm$companyDataV3.address) || 'N/A'))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v("Tel: " + _vm._s(((_vm$companyDataV4 = _vm.companyDataV1) === null || _vm$companyDataV4 === void 0 ? void 0 : _vm$companyDataV4.tel) || 'N/A'))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v("Email: " + _vm._s(((_vm$companyDataV5 = _vm.companyDataV1) === null || _vm$companyDataV5 === void 0 ? void 0 : _vm$companyDataV5.email) || 'N/A'))])])])])])], 1)], 1), _vm._v(" "), _c('p', {
    staticClass: "text-color",
    staticStyle: {
      "font-size": "21pt",
      "font-weight": "bold",
      "text-align": "center"
    }
  }, [_vm._v("\n        ໃບສະເໜີລາຄາ / QUOTATION\n      ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _vm.header ? _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('table', {
    staticClass: "table-layout",
    staticStyle: {
      "font-size": "12pt",
      "font-weight": "bold"
    }
  }, [_c('tbody', [_c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v("Customer ID: " + _vm._s(((_vm$header$client = _vm.header.client) === null || _vm$header$client === void 0 ? void 0 : _vm$header$client.id) || 'N/A'))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v("Customer Name: " + _vm._s(((_vm$header$client2 = _vm.header.client) === null || _vm$header$client2 === void 0 ? void 0 : _vm$header$client2.name) || 'N/A'))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v("Company: " + _vm._s(((_vm$header$client3 = _vm.header.client) === null || _vm$header$client3 === void 0 ? void 0 : _vm$header$client3.company) || 'N/A'))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v("ເບີໂທ: " + _vm._s(((_vm$header$client4 = _vm.header.client) === null || _vm$header$client4 === void 0 ? void 0 : _vm$header$client4.telephone) || 'N/A'))])])])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "align-self": "end"
    }
  }, [_c('table', {
    staticClass: "table-layout",
    staticStyle: {
      "font-size": "12pt",
      "font-weight": "bold"
    }
  }, [_c('tbody', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v("Quotation No: " + _vm._s(_vm.header.id || 'N/A'))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v("Date: " + _vm._s(_vm.formatDate(_vm.header.bookingDate) || 'N/A'))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "white-space": "nowrap"
    }
  }, [_c('td', [_vm._v("Prepare By: " + _vm._s(((_vm$header$user = _vm.header.user) === null || _vm$header$user === void 0 ? void 0 : _vm$header$user.cus_name) || 'N/A'))])])])])])], 1)], 1) : _vm._e(), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _vm.header ? _c('div', [_c('table', {
    staticClass: "table table-layout",
    staticStyle: {
      "border-collapse": "collapse"
    },
    attrs: {
      "width": "100%"
    }
  }, [_c('thead', [_c('tr', [_c('th', {
    staticStyle: {
      "width": "40px"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "180px"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "80px"
    }
  }, [_vm._v("Qty")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "80px"
    }
  }, [_vm._v("Unit")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "100px"
    }
  }, [_vm._v("Price")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "70px"
    }
  }, [_vm._v("Amount")])])]), _vm._v(" "), _c('tbody', [_vm.header.lines && _vm.header.lines.length > 0 ? _vm._l(_vm.header.lines, function (line, i) {
    var _line$product, _line$unit;
    return _c('tr', {
      key: line.id,
      staticClass: "page-break"
    }, [_c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(i + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(((_line$product = line.product) === null || _line$product === void 0 ? void 0 : _line$product.pro_name) || 'N/A'))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v(_vm._s(line.quantity || 0))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v(_vm._s(((_line$unit = line.unit) === null || _line$unit === void 0 ? void 0 : _line$unit.name) || 'N/A'))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v(_vm._s(_vm.formatNumber(line.price)))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v(_vm._s(_vm.formatNumber((line.total || 0) + (line.discount || 0))))])]);
  }) : [_c('tr', [_c('td', {
    staticClass: "text-center text-grey",
    attrs: {
      "colspan": "6"
    }
  }, [_vm._v("ບໍ່ມີຂໍ້ມູນ")])])], _vm._v(" "), _c('tr', {
    staticClass: "page-break"
  }, [_c('td', {
    staticStyle: {
      "text-align": "right",
      "font-weight": "bold"
    },
    attrs: {
      "colspan": "5"
    }
  }, [_vm._v("Discount")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "font-weight": "bold"
    }
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.totalDiscount)))])]), _vm._v(" "), _c('tr', {
    staticClass: "page-break total-row"
  }, [_c('td', {
    staticStyle: {
      "text-align": "right",
      "font-weight": "bold"
    },
    attrs: {
      "colspan": "5"
    }
  }, [_vm._v("ລາຄາລວມ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "font-weight": "bold"
    }
  }, [_vm._v(_vm._s(_vm.formatNumber((_vm.header.total || 0) - _vm.totalDiscount)))])])], 2)])]) : _vm._e(), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mt-4",
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], [_c('div', {
    staticClass: "signature-note"
  }, [_vm._v("\n            Name/signature/company stamp\n          ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "signature-section"
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "5",
      "align-self": "end"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "mx-auto ml-0 signature-box",
    attrs: {
      "height": "134",
      "width": "100%",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "signature-label"
  }, [_vm._v("Customer Acceptance (sign below):")])])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "5"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "mx-auto signature-box",
    attrs: {
      "height": "134",
      "width": "100%",
      "outlined": ""
    }
  }, [_c('div', {
    staticClass: "signature-label"
  }, [_vm._v("Approved By:")])])], 1)], 1)], 1)], 1)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/PDFQuotation/_id/index.vue?vue&type=template&id=285dfd8f&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/PDFQuotation/_id/index.vue?vue&type=script&lang=js



/* harmony default export */ var _idvue_type_script_lang_js = ({
  name: 'Quotation',
  layout: 'login',
  data() {
    return {
      id: null,
      header: null,
      isLoading: true,
      logoLoadError: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['currentSelectedLocation']),
    companyData() {
      console.log(`**********COMPANY DATA ${api["a" /* mainCompanyInfo */]}**********`);
      return Object(api["a" /* mainCompanyInfo */])();
    },
    companyDataV1() {
      try {
        let comV1 = Object(api["b" /* mainCompanyInfoV1 */])(this.$store);
        console.log('Company Data V1:', comV1);
        return comV1 || {};
      } catch (error) {
        console.error('Error loading company data:', error);
        return {};
      }
    },
    // New computed property for API-based logo
    companyLogoUrl() {
      try {
        var _this$currentSelected, _this$currentSelected2, _this$companyDataV, _this$companyData;
        // First try to get from current selected location company data
        if ((_this$currentSelected = this.currentSelectedLocation) !== null && _this$currentSelected !== void 0 && (_this$currentSelected2 = _this$currentSelected.company) !== null && _this$currentSelected2 !== void 0 && _this$currentSelected2.profile_image_path) {
          const imagePath = this.currentSelectedLocation.company.profile_image_path;
          // Convert relative path to full URL
          return this.buildImageUrl(imagePath);
        }

        // Fallback to companyDataV1 if available
        if ((_this$companyDataV = this.companyDataV1) !== null && _this$companyDataV !== void 0 && _this$companyDataV.profile_image_path) {
          const imagePath = this.companyDataV1.profile_image_path;
          return this.buildImageUrl(imagePath);
        }

        // Final fallback to assets (original behavior)
        const logoName = (_this$companyData = this.companyData) === null || _this$companyData === void 0 ? void 0 : _this$companyData.companyLogo;
        if (logoName && !this.logoLoadError) {
          return __webpack_require__(201)(`./${logoName}`);
        }
        return null;
      } catch (error) {
        console.error('Error loading company logo:', error);
        this.logoLoadError = true;
        return null;
      }
    },
    totalDiscount() {
      if (!this.header || !this.header.lines) return 0;
      let totalDiscount = 0;
      for (const iterator of this.header.lines) {
        totalDiscount += iterator.discount || 0;
      }
      totalDiscount += this.header.discount || 0;
      return totalDiscount;
    }
  },
  async created() {
    try {
      await this.initiateDataCompany(this.$axios);
      this.id = this.$route.params.id;
      if (this.id) {
        await this.loadQuotationData();
      }
    } catch (error) {
      console.error('Error in created hook:', error);
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['initiateDataCompany', 'setSelectedTerminal', 'setSelectedLocation']),
    buildImageUrl(imagePath) {
      if (!imagePath) return null;

      // Remove any leading slashes to avoid double slashes
      const cleanPath = imagePath.replace(/^\/+/, '');

      // Build the full URL based on your API base URL
      // Adjust this URL pattern to match your backend setup
      const baseUrl = process.env.API_BASE_URL || this.$axios.defaults.baseURL || '';

      // Remove '/api' if it exists in baseURL for file serving
      const fileBaseUrl = baseUrl.replace('/api', '');
      return `${fileBaseUrl}/${cleanPath}`;
    },
    async loadQuotationData() {
      try {
        const response = await this.$axios.get(`api/quotation/find/${this.id}`);
        this.header = response.data;
        console.log('Quotation data loaded:', this.header);
      } catch (error) {
        console.error('Error loading quotation data:', error);
        this.$toast.error('Failed to load quotation data');
      }
    },
    handleLogoError(event) {
      console.error('Logo failed to load:', event.target.src);
      this.logoLoadError = true;

      // Optionally try to load from a different source or show placeholder
      event.target.style.display = 'none';
    },
    formatNumber(val) {
      if (val === null || val === undefined || isNaN(val)) return '0';
      return Object(common["e" /* getFormatNum */])(val);
    },
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB'); // DD/MM/YYYY format
      } catch (error) {
        console.error('Error formatting date:', error);
        return dateString;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/PDFQuotation/_id/index.vue?vue&type=script&lang=js
 /* harmony default export */ var PDFQuotation_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/PDFQuotation/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1370)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PDFQuotation_idvue_type_script_lang_js,
  _idvue_type_template_id_285dfd8f_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "285dfd8f",
  "3b413309"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map