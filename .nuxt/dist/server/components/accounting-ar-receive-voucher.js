exports.ids = [20];
exports.modules = {

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(625);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("56321195", content, true, context)
};

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_28a6a084_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_28a6a084_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_28a6a084_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_28a6a084_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_28a6a084_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".receipt-container[data-v-28a6a084]{background:#fff;margin:0 auto;max-width:900px;padding:40px}.receipt-header[data-v-28a6a084]{border-bottom:3px solid #a12f8d;margin-bottom:30px;padding-bottom:15px}.header-flex[data-v-28a6a084]{align-items:center;display:flex;gap:20px;justify-content:space-between}.header-left[data-v-28a6a084]{flex-shrink:0}.header-center[data-v-28a6a084]{flex:1;text-align:left}.header-right[data-v-28a6a084]{flex-shrink:0;text-align:right}.company-logo[data-v-28a6a084]{display:block;height:auto;-o-object-fit:contain;object-fit:contain;width:120px}.company-name[data-v-28a6a084]{color:#a12f8d;font-size:24px;font-weight:700;margin:0 0 8px}.company-address[data-v-28a6a084],.company-contact[data-v-28a6a084]{color:#666;font-size:13px;margin:5px 0}.receipt-title h3[data-v-28a6a084]{color:#333;font-size:20px;margin:0 0 5px}.receipt-title h4[data-v-28a6a084]{color:#666;font-size:16px;margin:0}.receipt-info-grid[data-v-28a6a084]{grid-gap:30px;background-color:#f9f9f9;border-radius:4px;display:grid;gap:30px;grid-template-columns:1fr 1fr;margin:25px 0;padding:20px}.info-section h5[data-v-28a6a084]{border-bottom:1px solid #ddd;color:#333;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:5px}.info-row[data-v-28a6a084]{display:flex;font-size:12px;padding:5px 0}.label[data-v-28a6a084]{color:#333;font-weight:600;min-width:120px}.value[data-v-28a6a084]{color:#666}.receipt-table[data-v-28a6a084]{border-collapse:collapse;font-size:13px;margin:25px 0;width:100%}.receipt-table td[data-v-28a6a084],.receipt-table th[data-v-28a6a084]{border:1px solid #ddd;padding:10px}.receipt-table th[data-v-28a6a084]{background-color:#a12f8d;color:#fff;font-weight:600;text-align:left}.receipt-table tbody tr[data-v-28a6a084]:nth-child(2n){background-color:#f9f9f9}.receipt-table .text-center[data-v-28a6a084]{text-align:center}.receipt-table .text-right[data-v-28a6a084]{text-align:right}.total-row td[data-v-28a6a084]{background-color:#e8f5e9;font-size:14px;font-weight:700}.amount-words[data-v-28a6a084]{background-color:#f0f4ff;border-left:4px solid #a12f8d;font-size:14px;margin:20px 0;padding:15px}.receipt-notes[data-v-28a6a084]{background-color:#fff9e6;border-radius:4px;font-size:13px;margin:20px 0;padding:15px}.signature-section[data-v-28a6a084]{display:flex;gap:40px;justify-content:space-between;margin-top:60px}.signature-box[data-v-28a6a084]{flex:1;text-align:center}.signature-line[data-v-28a6a084]{border-top:2px solid #333;margin:80px 10px 15px}.signature-label[data-v-28a6a084]{color:#333;font-size:13px;font-weight:600;margin:8px 0}.signature-name[data-v-28a6a084]{font-size:14px;font-weight:500;margin:5px 0}.signature-date[data-v-28a6a084]{color:#666;font-size:12px}@media print{.receipt-container[data-v-28a6a084]{padding:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(350);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(391);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/voucher/index.vue?vue&type=template&id=28a6a084&scoped=true&










var vouchervue_type_template_id_28a6a084_scoped_true_render = function render() {
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
  }, [_vm.hasValidData ? _c(VCard["a" /* default */], {
    staticClass: "d-flex flex-column",
    staticStyle: {
      "height": "100vh"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-3 flex-shrink-0"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-printer")]), _vm._v(" "), _c('span', [_vm._v("ໃບຮັບເງິນ - Payment Receipt")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
    staticClass: "pa-0 flex-grow-1 overflow-y-auto"
  }, [_c('div', {
    staticClass: "receipt-container",
    attrs: {
      "id": "receipt-print-area"
    }
  }, [_c('div', {
    staticClass: "receipt-header"
  }, [_c('div', {
    staticClass: "header-flex"
  }, [_c('div', {
    staticClass: "header-left"
  }, [_c('img', {
    staticClass: "company-logo",
    attrs: {
      "src": __webpack_require__(167),
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
    staticClass: "receipt-title"
  }, [_c('h3', [_vm._v("PAYMENT RECEIPT")]), _vm._v(" "), _c('h4', [_vm._v("ໃບຮັບເງິນ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "receipt-info-grid"
  }, [_c('div', {
    staticClass: "info-section"
  }, [_c('h5', [_vm._v("Receipt Details:")]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Receipt No:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.safeReceiptData.receiptNumber || '-'))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Booking Date:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeReceiptData.bookingDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Received Date:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeReceiptData.receivedDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Reference No:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.safeReceiptData.referenceNumber || '-'))])])]), _vm._v(" "), _c('div', {
    staticClass: "info-section"
  }, [_c('h5', [_vm._v("Payment Information:")]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Payment Method:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.getPaymentMethodName(_vm.safeReceiptData.paymentId)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Currency:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.getCurrencyInfo))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Exchange Rate:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.safeReceiptData.exchangeRate)))])]), _vm._v(" "), _vm.safeReceiptData.invoiceHeaderId ? _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Invoice Ref:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.getInvoiceNumber))])]) : _vm._e()])]), _vm._v(" "), _c('table', {
    staticClass: "receipt-table"
  }, [_c('thead', [_c('tr', [_c('th', {
    attrs: {
      "width": "5%"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "35%"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Transaction Code")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("DR Account")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("CR Account")]), _vm._v(" "), _c('th', {
    staticClass: "text-center",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("Date")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Amount")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.safeAllocationLines, function (line, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(line.description || '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTransactionCode(line.txnId)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.getGLAccount(line.DRglAccountId)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.getGLAccount(line.CRglAccountId)))]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(_vm.formatDate(line.allocationDate)))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(line.allocatedAmount)))])]);
  }), 0), _vm._v(" "), _c('tfoot', [_c('tr', {
    staticClass: "total-row"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "6"
    }
  }, [_c('strong', [_vm._v("Total Amount Received:")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalAmount)))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "amount-words"
  }, [_c('strong', [_vm._v("Amount in Words:")]), _vm._v(" " + _vm._s(_vm.amountInWords) + "\n        ")]), _vm._v(" "), _vm.safeReceiptData.notes ? _c('div', {
    staticClass: "receipt-notes"
  }, [_c('strong', [_vm._v("Notes:")]), _vm._v(" " + _vm._s(_vm.safeReceiptData.notes) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "signature-section"
  }, [_c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Received By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v(_vm._s(_vm.receivedBy))]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeReceiptData.receivedDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Prepared By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v(_vm._s(_vm.preparedBy))]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeReceiptData.bookingDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Authorized By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v("_________________")]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v("Date: ___________")])])])])]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4 flex-shrink-0"
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
      "click": _vm.printReceipt
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n        ພິມ\n      ")], 1)], 1)], 1) : _c(VCard["a" /* default */], {
    staticClass: "d-flex flex-column",
    staticStyle: {
      "height": "100vh"
    }
  }, [_c(components_VCard["c" /* VCardText */], {
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

// CONCATENATED MODULE: ./components/accounting/ar/receive/voucher/index.vue?vue&type=template&id=28a6a084&scoped=true&

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/voucher/index.vue?vue&type=script&lang=js&

/* harmony default export */ var vouchervue_type_script_lang_js_ = ({
  name: 'ARReceivePrinter',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    receiptData: {
      type: Object,
      required: false,
      default: null
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    transactionCodes: {
      type: Array,
      default: () => []
    },
    glAccounts: {
      type: Array,
      default: () => []
    },
    invoices: {
      type: Array,
      default: () => []
    },
    companyDataV1: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    companyDataV1() {
      console.log(`**********COMPANY DATA V1 PDFINVOICE ${api["b" /* mainCompanyInfo */]}**********`);
      let comV1 = Object(api["c" /* mainCompanyInfoV1 */])(this.$store);
      console.info(`Company data fetch from api V1 ${comV1}`);
      return comV1;
    },
    hasValidData() {
      return this.receiptData && this.receiptData.id;
    },
    safeReceiptData() {
      return this.receiptData || {};
    },
    safeAllocationLines() {
      return this.safeReceiptData.allocationLines || [];
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
    receivedBy() {
      var _this$safeReceiptData, _this$safeReceiptData2;
      return ((_this$safeReceiptData = this.safeReceiptData.receivedBy) === null || _this$safeReceiptData === void 0 ? void 0 : _this$safeReceiptData.cus_name) || ((_this$safeReceiptData2 = this.safeReceiptData.inputter) === null || _this$safeReceiptData2 === void 0 ? void 0 : _this$safeReceiptData2.cus_name) || '-';
    },
    preparedBy() {
      var _this$safeReceiptData3, _this$safeReceiptData4;
      return ((_this$safeReceiptData3 = this.safeReceiptData.inputter) === null || _this$safeReceiptData3 === void 0 ? void 0 : _this$safeReceiptData3.cus_name) || ((_this$safeReceiptData4 = this.safeReceiptData.preparedBy) === null || _this$safeReceiptData4 === void 0 ? void 0 : _this$safeReceiptData4.cus_name) || '-';
    },
    getCurrencyInfo() {
      const currencyId = this.safeReceiptData.currencyId;
      if (!currencyId) return 'USD';
      const currency = this.currencies.find(c => c.id === currencyId);
      return currency ? `${currency.name} (${currency.code})` : 'USD';
    },
    getInvoiceNumber() {
      const invoiceId = this.safeReceiptData.invoiceHeaderId;
      if (!invoiceId) return '-';
      const invoice = this.invoices.find(inv => inv.id === invoiceId);
      return (invoice === null || invoice === void 0 ? void 0 : invoice.invoiceNumber) || '-';
    },
    totalAmount() {
      return this.safeAllocationLines.reduce((sum, line) => sum + (parseFloat(line.allocatedAmount) || 0), 0);
    },
    amountInWords() {
      if (this.totalAmount === 0) return 'Zero Only';
      return `${this.formatCurrency(this.totalAmount)} Only`;
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return '-';
      try {
        return new Date(date).toLocaleDateString('en-GB');
      } catch (e) {
        return '-';
      }
    },
    formatCurrency(amount) {
      if (!amount && amount !== 0) return '0.00';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount);
    },
    formatNumber(num) {
      if (!num && num !== 0) return '1.0000';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
      }).format(num);
    },
    getPaymentMethodName(id) {
      if (!id) return '-';
      const method = this.paymentMethods.find(m => m.id === id);
      return (method === null || method === void 0 ? void 0 : method.payment_name) || '-';
    },
    getTransactionCode(id) {
      if (!id) return '-';
      const txn = this.transactionCodes.find(t => t.id === id);
      return txn ? `${txn.code}` : '-';
    },
    getGLAccount(id) {
      if (!id) return '-';
      const account = this.glAccounts.find(a => a.id === id);
      return (account === null || account === void 0 ? void 0 : account.accountNumber) || '-';
    },
    printReceipt() {
      if (!this.hasValidData) {
        var _this$$toast;
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('ບໍ່ມີຂໍ້ມູນສຳລັບພິມ');
        return;
      }
      const printContent = document.getElementById('receipt-print-area');
      if (!printContent) {
        var _this$$toast2;
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.error('ບໍ່ພົບເນື້ອຫາສຳລັບພິມ');
        return;
      }
      const printWindow = window.open('', '', 'height=600,width=800');
      printWindow.document.write('<html><head><title>Payment Receipt</title>');
      printWindow.document.write(`
        <style>
          @media print {
            body { 
              margin: 0; 
              padding: 20px; 
              font-family: Arial, sans-serif; 
            }
            .receipt-container { 
              max-width: 100%; 
            }
            .receipt-header { 
              margin-bottom: 20px; 
              border-bottom: 2px solid #A12F8D; 
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
            }
            .company-name { 
              margin: 0 0 5px 0; 
              font-size: 22px; 
              font-weight: bold;
              color: #A12F8D;
            }
            .company-address, .company-contact { 
              margin: 3px 0; 
              font-size: 11px;
              color: #666;
            }
            .receipt-title h3 { 
              margin: 0 0 5px 0; 
              font-size: 18px;
              color: #333;
            }
            .receipt-title h4 { 
              margin: 0; 
              font-size: 14px; 
              color: #666; 
            }
            .receipt-info-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 20px; 
              margin: 20px 0; 
            }
            .info-section h5 { 
              margin: 0 0 10px; 
              font-size: 14px; 
              font-weight: bold; 
              border-bottom: 1px solid #ddd; 
              padding-bottom: 5px; 
            }
            .info-row { 
              padding: 3px 0; 
              font-size: 12px; 
            }
            .label { 
              font-weight: bold; 
              margin-right: 10px; 
            }
            .receipt-table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0; 
            }
            .receipt-table th, .receipt-table td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              font-size: 11px; 
            }
            .receipt-table th { 
              background-color: #f5f5f5; 
              font-weight: bold; 
              text-align: left; 
            }
            .receipt-table .text-center { 
              text-align: center; 
            }
            .receipt-table .text-right { 
              text-align: right; 
            }
            .total-row td { 
              background-color: #f9f9f9; 
              font-size: 12px; 
            }
            .amount-words { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #f9f9f9; 
              border-left: 3px solid #A12F8D; 
            }
            .receipt-notes { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #fff9e6; 
            }
            .signature-section { 
              display: flex; 
              justify-content: space-between; 
              margin-top: 40px; 
              page-break-inside: avoid; 
            }
            .signature-box { 
              text-align: center; 
              flex: 1; 
            }
            .signature-line { 
              border-top: 1px solid #000; 
              margin: 60px 20px 10px; 
            }
            .signature-label { 
              font-weight: bold; 
              margin: 5px 0; 
            }
            .signature-name { 
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
// CONCATENATED MODULE: ./components/accounting/ar/receive/voucher/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var receive_vouchervue_type_script_lang_js_ = (vouchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/receive/voucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(624)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  receive_vouchervue_type_script_lang_js_,
  vouchervue_type_template_id_28a6a084_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "28a6a084",
  "6700ed7e"
  
)

/* harmony default export */ var voucher = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ar-receive-voucher.js.map