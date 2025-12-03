exports.ids = [16];
exports.modules = {

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(600);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("10779ce4", content, true, context)
};

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3c6311c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(538);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3c6311c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3c6311c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3c6311c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3c6311c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-container[data-v-a3c6311c]{background:#fff;margin:0 auto;max-width:900px;padding:40px}.invoice-header[data-v-a3c6311c]{border-bottom:3px solid primary;margin-bottom:30px;padding-bottom:15px}.header-flex[data-v-a3c6311c]{align-items:center;display:flex;gap:20px;justify-content:space-between}.header-left[data-v-a3c6311c]{flex-shrink:0}.header-center[data-v-a3c6311c]{flex:1;text-align:left}.header-right[data-v-a3c6311c]{flex-shrink:0;text-align:right}.company-logo[data-v-a3c6311c]{border-radius:4px;display:block;height:auto;max-height:100px;-o-object-fit:contain;object-fit:contain;width:120px}.fallback-logo[data-v-a3c6311c]{opacity:.8}.company-name[data-v-a3c6311c]{color:primary;font-size:24px;font-weight:700;margin:0 0 8px}.company-address[data-v-a3c6311c],.company-contact[data-v-a3c6311c]{color:#666;font-size:13px;margin:5px 0}.invoice-title h3[data-v-a3c6311c]{color:#333;font-size:20px;margin:0 0 5px}.invoice-title h4[data-v-a3c6311c]{color:#666;font-size:16px;margin:0}.invoice-info-grid[data-v-a3c6311c]{display:grid;grid-template-columns:1fr 1fr;grid-gap:30px;background-color:#f9f9f9;border-radius:4px;gap:30px;margin:25px 0;padding:20px}.info-section h5[data-v-a3c6311c]{border-bottom:1px solid #ddd;color:#333;margin:0 0 10px;padding-bottom:5px}.client-name[data-v-a3c6311c],.info-section h5[data-v-a3c6311c]{font-size:14px;font-weight:600}.client-name[data-v-a3c6311c]{margin:5px 0}.client-details[data-v-a3c6311c]{color:#666;font-size:12px;margin:5px 0}.info-row[data-v-a3c6311c]{display:flex;font-size:12px;padding:5px 0}.label[data-v-a3c6311c]{color:#333;font-weight:600;min-width:100px}.value[data-v-a3c6311c]{color:#666}.status-badge[data-v-a3c6311c]{border-radius:12px;display:inline-block;font-size:11px;font-weight:600;padding:3px 10px}.status-badge.paid[data-v-a3c6311c]{background:#d4edda;color:#155724}.status-badge.sent[data-v-a3c6311c]{background:#d1ecf1;color:#0c5460}.status-badge.draft[data-v-a3c6311c]{background:#f8f9fa;color:#6c757d}.status-badge.overdue[data-v-a3c6311c]{background:#f8d7da;color:#721c24}.invoice-table[data-v-a3c6311c]{border-collapse:collapse;font-size:13px;margin:25px 0;width:100%}.invoice-table td[data-v-a3c6311c],.invoice-table th[data-v-a3c6311c]{border:1px solid #ddd;padding:10px}.invoice-table th[data-v-a3c6311c]{background-color:primary;color:#fff;font-weight:600;text-align:left}.invoice-table tbody tr[data-v-a3c6311c]:nth-child(2n){background-color:#f9f9f9}.invoice-table .text-center[data-v-a3c6311c]{text-align:center}.invoice-table .text-right[data-v-a3c6311c]{text-align:right}.subtotal-row td[data-v-a3c6311c],.tax-row td[data-v-a3c6311c]{background-color:#f8f9fa;font-weight:500}.total-row td[data-v-a3c6311c]{background-color:#e8f5e9;font-size:14px;font-weight:700}.amount-words[data-v-a3c6311c]{background-color:#f0f4ff;border-left:4px solid primary;font-size:14px;margin:20px 0;padding:15px}.invoice-notes[data-v-a3c6311c]{background-color:#fff9e6;border-radius:4px;font-size:13px;margin:20px 0;padding:15px}.invoice-footer[data-v-a3c6311c]{border-top:2px solid #ddd;display:flex;justify-content:space-between;margin-top:60px;padding-top:20px}.footer-section[data-v-a3c6311c]{font-size:12px}.footer-section p[data-v-a3c6311c]{margin:5px 0}.signature-area[data-v-a3c6311c]{text-align:center}.signature-line[data-v-a3c6311c]{border-top:2px solid #333;margin:80px 10px 15px;width:200px}.signature-label[data-v-a3c6311c]{color:#333;font-size:13px;font-weight:600;margin:8px 0}.signature-date[data-v-a3c6311c]{color:#666;font-size:12px}@media print{.invoice-container[data-v-a3c6311c]{padding:20px}.company-logo[data-v-a3c6311c]{max-height:80px;width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(397);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/voucher/index.vue?vue&type=template&id=a3c6311c&scoped=true










var vouchervue_type_template_id_a3c6311c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "persistent": "",
      "scrollable": "",
      "transition": "dialog-bottom-transition"
    },
    model: {
      value: _vm.visible,
      callback: function ($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  }, [_vm.hasValidData ? _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-3"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-printer")]), _vm._v(" "), _c('span', [_vm._v("ໃບແຈ້ງໜີ້ - Invoice")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "dark": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_c('div', {
    staticClass: "invoice-container",
    attrs: {
      "id": "invoice-print-area"
    }
  }, [_c('div', {
    staticClass: "invoice-header"
  }, [_c('div', {
    staticClass: "header-flex"
  }, [_c('div', {
    staticClass: "header-left"
  }, [_vm.companyLogoUrl ? _c('img', {
    staticClass: "company-logo",
    attrs: {
      "src": _vm.companyLogoUrl,
      "alt": "Company Logo"
    },
    on: {
      "error": _vm.onLogoError
    }
  }) : _c('img', {
    staticClass: "company-logo fallback-logo",
    attrs: {
      "src": _vm.fallbackLogoUrl,
      "alt": "Company Logo"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "header-center"
  }, [_c('h2', {
    staticClass: "company-name"
  }, [_vm._v(_vm._s(_vm.companyName))]), _vm._v(" "), _c('p', {
    staticClass: "company-address"
  }, [_vm._v(_vm._s(_vm.companyAddress))]), _vm._v(" "), _c('p', {
    staticClass: "company-contact"
  }, [_vm._v(_vm._s(_vm.companyContact))])]), _vm._v(" "), _c('div', {
    staticClass: "header-right"
  }, [_c('div', {
    staticClass: "invoice-title"
  }, [_c('h3', [_vm._v("INVOICE")]), _vm._v(" "), _c('h4', [_vm._v("ໃບແຈ້ງໜີ້")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "invoice-info-grid"
  }, [_c('div', {
    staticClass: "info-section"
  }, [_c('h5', [_vm._v("Bill To:")]), _vm._v(" "), _c('p', {
    staticClass: "client-name"
  }, [_vm._v(_vm._s(_vm.getClientName))]), _vm._v(" "), _c('p', {
    staticClass: "client-details"
  }, [_vm._v(_vm._s(_vm.getClientDetails))])]), _vm._v(" "), _c('div', {
    staticClass: "info-section"
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Invoice No:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.safeInvoiceData.invoiceNumber || '-'))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Invoice Date:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeInvoiceData.invoiceDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Due Date:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeInvoiceData.dueDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Status:")]), _vm._v(" "), _c('span', {
    class: ['status-badge', _vm.safeInvoiceData.status]
  }, [_vm._v("\n                " + _vm._s(_vm.getStatusLabel(_vm.safeInvoiceData.status)) + "\n              ")])])])]), _vm._v(" "), _c('table', {
    staticClass: "invoice-table"
  }, [_c('thead', [_c('tr', [_c('th', {
    attrs: {
      "width": "5%"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "40%"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("Quantity")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Unit Price")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("Tax")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "20%"
    }
  }, [_vm._v("Amount")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.safeLineItems, function (line, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(line.description || '-'))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatNumber(line.quantity)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(line.unitPrice)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(line.taxAmount)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(line.lineTotal)))])]);
  }), 0), _vm._v(" "), _c('tfoot', [_c('tr', {
    staticClass: "subtotal-row"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "5"
    }
  }, [_c('strong', [_vm._v("Subtotal:")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency(_vm.subtotal)))])])]), _vm._v(" "), _c('tr', {
    staticClass: "tax-row"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "5"
    }
  }, [_c('strong', [_vm._v("Total Tax:")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalTax)))])])]), _vm._v(" "), _c('tr', {
    staticClass: "total-row"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "5"
    }
  }, [_c('strong', [_vm._v("Total Amount:")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalAmount)))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "amount-words"
  }, [_c('strong', [_vm._v("Amount in Words:")]), _vm._v(" " + _vm._s(_vm.amountInWords) + "\n        ")]), _vm._v(" "), _vm.safeInvoiceData.description ? _c('div', {
    staticClass: "invoice-notes"
  }, [_c('strong', [_vm._v("Notes:")]), _vm._v(" " + _vm._s(_vm.safeInvoiceData.description) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "invoice-footer"
  }, [_c('div', {
    staticClass: "footer-section"
  }, [_c('p', [_c('strong', [_vm._v("Payment Terms:")]), _vm._v(" " + _vm._s(_vm.paymentTerms))]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("Currency:")]), _vm._v(" " + _vm._s(_vm.getCurrencyInfo))])]), _vm._v(" "), _c('div', {
    staticClass: "footer-section signature-area"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Authorized Signature")]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v("\n              Date: " + _vm._s(_vm.formatDate(_vm.safeInvoiceData.invoiceDate)) + "\n            ")])])])])]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n        ປິດ\n      ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.printInvoice
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n        ພິມ\n      ")], 1)], 1)], 1) : _c(VCard["a" /* default */], [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center pa-8"
  }, [_vm.visible ? _c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "color": "primary",
      "size": "64"
    }
  }) : _c(VIcon["a" /* default */], {
    attrs: {
      "size": "64",
      "color": "grey lighten-1"
    }
  }, [_vm._v("\n        mdi-file-document-outline\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "mt-4 grey--text"
  }, [_vm._v("\n        " + _vm._s(_vm.visible ? 'ກຳລັງໂຫຼດຂໍ້ມູນ...' : 'ບໍ່ມີຂໍ້ມູນສຳລັບພິມ') + "\n      ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_vm._v("ປິດ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/voucher/index.vue?vue&type=template&id=a3c6311c&scoped=true

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/voucher/index.vue?vue&type=script&lang=js

/* harmony default export */ var vouchervue_type_script_lang_js = ({
  name: 'ARInvoicePrinter',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    invoiceData: {
      type: Object,
      required: false,
      default: null
    },
    agencies: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      logoLoadError: false,
      companies: [] // Store companies list
    };
  },
  computed: {
    companyDataV1() {
      console.log(`**********COMPANY DATA V1 PDFINVOICE ${api["b" /* mainCompanyInfo */]}**********`);
      let comV1 = Object(api["c" /* mainCompanyInfoV1 */])(this.$store);
      console.info(`Company data fetch from api V1 ${comV1}`);
      return comV1;
    },
    hasValidData() {
      return this.invoiceData && this.invoiceData.id;
    },
    safeInvoiceData() {
      return this.invoiceData || {};
    },
    safeLineItems() {
      return this.safeInvoiceData.lineItems || [];
    },
    // Company Logo Logic
    firstCompanyWithImage() {
      return this.companies.find(company => company.profile_image_path && company.isActive);
    },
    companyLogoUrl() {
      if (this.logoLoadError) return null;
      const firstCompany = this.firstCompanyWithImage;
      if (firstCompany && firstCompany.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || '';
        return `${baseUrl}/${firstCompany.profile_image_path}`;
      }
      return null;
    },
    fallbackLogoUrl() {
      // Return your default logo
      return __webpack_require__(142);
    },
    // Company information
    companyName() {
      return this.companyDataV1.name;
    },
    companyAddress() {
      return this.companyDataV1.address;
    },
    companyContact() {
      var _this$companyDataV, _this$companyDataV2;
      const tel = ((_this$companyDataV = this.companyDataV1) === null || _this$companyDataV === void 0 ? void 0 : _this$companyDataV.tel) || '+856 20 XXXX XXXX';
      const email = ((_this$companyDataV2 = this.companyDataV1) === null || _this$companyDataV2 === void 0 ? void 0 : _this$companyDataV2.email) || 'info@company.com';
      return `Tel: ${tel} | Email: ${email}`;
    },
    getClientName() {
      const agencyId = this.safeInvoiceData.agencyId;
      if (!agencyId) return '-';
      const agency = this.agencies.find(a => a.id === agencyId);
      return (agency === null || agency === void 0 ? void 0 : agency.agencyName) || (agency === null || agency === void 0 ? void 0 : agency.name) || '-';
    },
    getClientDetails() {
      const agencyId = this.safeInvoiceData.agencyId;
      if (!agencyId) return '';
      const agency = this.agencies.find(a => a.id === agencyId);
      if (!agency) return '';
      const parts = [];
      if (agency.address) parts.push(agency.address);
      if (agency.phone) parts.push(`Tel: ${agency.phone}`);
      if (agency.email) parts.push(`Email: ${agency.email}`);
      return parts.join(' | ');
    },
    getCurrencyInfo() {
      const currencyId = this.safeInvoiceData.currencyId;
      if (!currencyId) return 'USD';
      const currency = this.currencies.find(c => c.id === currencyId);
      return currency ? `${currency.name} (${currency.code})` : 'USD';
    },
    paymentTerms() {
      const invoiceDate = new Date(this.safeInvoiceData.invoiceDate);
      const dueDate = new Date(this.safeInvoiceData.dueDate);
      if (!isNaN(invoiceDate) && !isNaN(dueDate)) {
        const days = Math.round((dueDate - invoiceDate) / (1000 * 60 * 60 * 24));
        return `Net ${days} days`;
      }
      return 'Net 30 days';
    },
    subtotal() {
      return this.safeLineItems.reduce((sum, line) => {
        const qty = parseFloat(line.quantity) || 0;
        const price = parseFloat(line.unitPrice) || 0;
        return sum + qty * price;
      }, 0);
    },
    totalTax() {
      return this.safeLineItems.reduce((sum, line) => sum + (parseFloat(line.taxAmount) || 0), 0);
    },
    totalAmount() {
      return this.safeLineItems.reduce((sum, line) => sum + (parseFloat(line.lineTotal) || 0), 0);
    },
    amountInWords() {
      // Implement your number-to-words conversion
      return this.numberToWords(this.totalAmount) + ' Only';
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.loadCompanies();
      }
    }
  },
  methods: {
    // Load companies to get the first one with image
    async loadCompanies() {
      try {
        const response = await this.$axios.get('/api/company/findAll');
        this.companies = Array.isArray(response.data) ? response.data : [];
        console.log('Companies loaded for invoice:', this.companies.length);
      } catch (error) {
        console.error('Error loading companies for invoice:', error);
        this.companies = [];
      }
    },
    onLogoError() {
      console.warn('Company logo failed to load, using fallback');
      this.logoLoadError = true;
    },
    getStatusLabel(status) {
      const labels = {
        draft: 'Draft',
        sent: 'Sent',
        paid: 'Paid',
        overdue: 'Overdue'
      };
      return labels[status] || status || 'Unknown';
    },
    formatDate(date) {
      if (!date) return '-';
      try {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      } catch {
        return '-';
      }
    },
    formatNumber(value) {
      if (!value && value !== 0) return '0';
      return parseFloat(value).toLocaleString();
    },
    formatCurrency(value) {
      if (!value && value !== 0) return '$0.00';
      return `${parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    },
    numberToWords(num) {
      // Simplified number to words - you can expand this
      if (num === 0) return 'Zero';
      if (num < 1000) return `${Math.floor(num)} ${this.getCurrencyInfo}`;
      if (num < 1000000) return `${Math.floor(num / 1000)} Thousand ${this.getCurrencyInfo}`;
      return `${Math.floor(num / 1000000)} Million ${this.getCurrencyInfo}`;
    },
    printInvoice() {
      const printContent = document.getElementById('invoice-print-area');
      if (!printContent) {
        this.$toast.error('Print content not found');
        return;
      }
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
        <head>
          <title>Invoice - ${this.safeInvoiceData.invoiceNumber}</title>
          <style>
            * { 
              margin: 0; 
              padding: 0; 
              box-sizing: border-box; 
            }
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.4; 
              color: #333; 
            }
            .invoice-container { 
              background: white; 
              padding: 20px; 
              max-width: 900px; 
              margin: 0 auto; 
            }
            .invoice-header { 
              margin-bottom: 20px; 
              border-bottom: 3px solid primary; 
              padding-bottom: 15px; 
            }
            .header-flex { 
              display: flex; 
              align-items: center; 
              justify-content: space-between; 
              gap: 20px; 
            }
            .header-left { 
              flex-shrink: 0; 
            }
            .header-center { 
              flex: 1; 
              text-align: left; 
            }
            .header-right { 
              flex-shrink: 0; 
              text-align: right; 
            }
            .company-logo { 
              width: 100px; 
              height: auto; 
              object-fit: contain; 
              display: block; 
              max-height: 80px; 
            }
            .company-name { 
              margin: 0 0 8px 0; 
              font-size: 20px; 
              font-weight: bold; 
              color: primary; 
            }
            .company-address, .company-contact { 
              margin: 3px 0; 
              font-size: 11px; 
              color: #666; 
            }
            .invoice-title h3 { 
              margin: 0 0 5px 0; 
              font-size: 18px; 
              color: #333; 
            }
            .invoice-title h4 { 
              margin: 0; 
              font-size: 14px; 
              color: #666; 
            }
            .invoice-info-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 20px; 
              margin: 20px 0; 
              padding: 15px; 
              background-color: #f9f9f9; 
              border-radius: 4px; 
            }
            .info-section h5 { 
              margin: 0 0 10px; 
              font-size: 12px; 
              font-weight: 600; 
              color: #333; 
              border-bottom: 1px solid #ddd; 
              padding-bottom: 5px; 
            }
            .client-name { 
              font-weight: 600; 
              font-size: 12px; 
              margin: 5px 0; 
            }
            .client-details { 
              font-size: 10px; 
              color: #666; 
              margin: 5px 0; 
            }
            .info-row { 
              display: flex; 
              padding: 3px 0; 
              font-size: 10px; 
            }
            .label { 
              font-weight: 600; 
              color: #333; 
              min-width: 80px; 
            }
            .value { 
              color: #666; 
            }
            .status-badge { 
              display: inline-block; 
              padding: 2px 8px; 
              border-radius: 10px; 
              font-size: 9px; 
              font-weight: 600; 
            }
            .status-badge.paid { 
              background: #d4edda; 
              color: #155724; 
            }
            .status-badge.sent { 
              background: #d1ecf1; 
              color: #0c5460; 
            }
            .status-badge.draft { 
              background: #f8f9fa; 
              color: #6c757d; 
            }
            .status-badge.overdue { 
              background: #f8d7da; 
              color: #721c24; 
            }
            .invoice-table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0; 
            }
            .invoice-table th, .invoice-table td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              font-size: 11px; 
            }
            .invoice-table th { 
              background-color: #f5f5f5; 
              font-weight: bold; 
              text-align: left; 
            }
            .invoice-table .text-center { 
              text-align: center; 
            }
            .invoice-table .text-right { 
              text-align: right; 
            }
            .subtotal-row td, .tax-row td, .total-row td { 
              background-color: #f9f9f9; 
              font-size: 12px; 
            }
            .amount-words { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #f9f9f9; 
              border-left: 3px solid primary; 
            }
            .invoice-notes { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #fff9e6; 
            }
            .invoice-footer { 
              display: flex; 
              justify-content: space-between; 
              margin-top: 40px; 
              padding-top: 20px; 
              border-top: 1px solid #ddd; 
            }
            .footer-section { 
              font-size: 12px; 
            }
            .signature-line { 
              border-top: 1px solid #000; 
              margin: 60px 20px 10px; 
              width: 200px; 
            }
            .signature-label { 
              font-weight: bold; 
              margin: 5px 0; 
            }
            .signature-date { 
              font-size: 11px; 
              color: #666; 
            }
          }
        </style>
      `);
      printWindow.document.write('</head><body>');
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/invoice/voucher/index.vue?vue&type=script&lang=js
 /* harmony default export */ var invoice_vouchervue_type_script_lang_js = (vouchervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/voucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(599)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_vouchervue_type_script_lang_js,
  vouchervue_type_template_id_a3c6311c_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "a3c6311c",
  "2f40ff48"
  
)

/* harmony default export */ var voucher = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ar-invoice-voucher.js.map