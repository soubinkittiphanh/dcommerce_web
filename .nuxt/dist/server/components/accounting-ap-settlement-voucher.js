exports.ids = [11];
exports.modules = {

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(633);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("25918540", content, true, context)
};

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50e48902_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50e48902_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50e48902_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50e48902_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50e48902_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".voucher-container[data-v-50e48902]{background:#fff;margin:0 auto;max-width:900px;padding:40px}.voucher-header[data-v-50e48902]{border-bottom:3px solid #01532b;margin-bottom:30px;padding-bottom:15px}.header-flex[data-v-50e48902]{align-items:center;display:flex;gap:20px;justify-content:space-between}.header-left[data-v-50e48902]{flex-shrink:0}.header-center[data-v-50e48902]{flex:1;text-align:left}.header-right[data-v-50e48902]{flex-shrink:0;text-align:right}.company-logo[data-v-50e48902]{display:block;height:auto;-o-object-fit:contain;object-fit:contain;width:120px}.company-name[data-v-50e48902]{color:#01532b;font-size:24px;font-weight:700;margin:0 0 8px}.company-address[data-v-50e48902],.company-contact[data-v-50e48902]{color:#666;font-size:13px;margin:5px 0}.voucher-title h3[data-v-50e48902]{color:#333;font-size:20px;margin:0 0 5px}.voucher-title h4[data-v-50e48902]{color:#666;font-size:16px;margin:0}.voucher-info-grid[data-v-50e48902]{display:grid;grid-template-columns:1fr 1fr;grid-gap:15px;background-color:#f9f9f9;border-radius:4px;gap:15px;margin:25px 0;padding:15px}.info-row[data-v-50e48902]{display:flex;padding:5px 0}.label[data-v-50e48902]{color:#333;font-weight:600;min-width:130px}.value[data-v-50e48902]{color:#666}.voucher-table[data-v-50e48902]{border-collapse:collapse;font-size:13px;margin:25px 0;width:100%}.voucher-table td[data-v-50e48902],.voucher-table th[data-v-50e48902]{border:1px solid #ddd;padding:10px}.voucher-table th[data-v-50e48902]{background-color:#01532b;color:#fff;font-weight:600;text-align:left}.voucher-table tbody tr[data-v-50e48902]:nth-child(2n){background-color:#f9f9f9}.voucher-table .text-center[data-v-50e48902]{text-align:center}.voucher-table .text-right[data-v-50e48902]{text-align:right}.total-row td[data-v-50e48902]{background-color:#e8f5e9;font-size:14px;font-weight:700}.amount-words[data-v-50e48902]{background-color:#f0f4ff;border-left:4px solid #01532b;font-size:14px;margin:20px 0;padding:15px}.voucher-description[data-v-50e48902]{background-color:#fff9e6;border-radius:4px;font-size:13px;margin:20px 0;padding:15px}.signature-section[data-v-50e48902]{display:flex;gap:40px;justify-content:space-between;margin-top:60px}.signature-box[data-v-50e48902]{flex:1;text-align:center}.signature-line[data-v-50e48902]{border-top:2px solid #333;margin:80px 10px 15px}.signature-label[data-v-50e48902]{color:#333;font-size:13px;font-weight:600;margin:8px 0}.signature-name[data-v-50e48902]{font-size:14px;font-weight:500;margin:5px 0}.signature-date[data-v-50e48902]{color:#666;font-size:12px}@media print{.voucher-container[data-v-50e48902]{padding:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 664:
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
var VProgressCircular = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(391);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/voucher/index.vue?vue&type=template&id=50e48902&scoped=true










var vouchervue_type_template_id_50e48902_scoped_true_render = function render() {
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
  }, [_vm._v("mdi-printer")]), _vm._v(" "), _c('span', [_vm._v("ໃບຄຳສັ່ງຈ່າຍ - Payment Voucher")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
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
    staticClass: "voucher-container",
    attrs: {
      "id": "voucher-print-area"
    }
  }, [_c('div', {
    staticClass: "voucher-header"
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
    staticClass: "voucher-title"
  }, [_c('h3', [_vm._v("PAYMENT VOUCHER")]), _vm._v(" "), _c('h4', [_vm._v("ໃບຄຳສັ່ງຈ່າຍ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "voucher-info-grid"
  }, [_c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Voucher No:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.safeVoucherData.reference || '-'))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Date:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.safeVoucherData.settlementDate)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Payment Method:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.getPaymentMethodName(_vm.safeVoucherData.paymentMethodId)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-row"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("Bank Account:")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.getBankAccountInfo(_vm.safeVoucherData.bankAccountId)))])])]), _vm._v(" "), _c('table', {
    staticClass: "voucher-table"
  }, [_c('thead', [_c('tr', [_c('th', {
    attrs: {
      "width": "5%"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Invoice No")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Agency")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("Txn Code")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "30%"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("DR")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "10%"
    }
  }, [_vm._v("CR")]), _vm._v(" "), _c('th', {
    staticClass: "text-right",
    attrs: {
      "width": "15%"
    }
  }, [_vm._v("Amount")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.safeSettlementLines, function (line, index) {
    var _line$agency;
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(line.invoiceNumber || '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(line.agencyName || ((_line$agency = line.agency) === null || _line$agency === void 0 ? void 0 : _line$agency.agencyName) || '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTransactionCode(line.txnId)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(line.description || '-'))]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v("\n                " + _vm._s(_vm.getGLAccount(line.DRglAccountId)) + "\n              ")]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v("\n                " + _vm._s(_vm.getGLAccount(line.CRglAccountId)) + "\n              ")]), _vm._v(" "), _c('td', {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatCurrency(line.amount)))])]);
  }), 0), _vm._v(" "), _c('tfoot', [_c('tr', {
    staticClass: "total-row"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "7"
    }
  }, [_c('strong', [_vm._v("Total Amount:")])]), _vm._v(" "), _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalAmount)))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "amount-words"
  }, [_c('strong', [_vm._v("Amount in Words:")]), _vm._v(" " + _vm._s(_vm.amountInWords) + "\n        ")]), _vm._v(" "), _vm.safeVoucherData.description ? _c('div', {
    staticClass: "voucher-description"
  }, [_c('strong', [_vm._v("Description:")]), _vm._v(" " + _vm._s(_vm.safeVoucherData.description) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "signature-section"
  }, [_c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Prepared By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v(_vm._s(_vm.makerName))]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v("\n              " + _vm._s(_vm.formatDate(_vm.safeVoucherData.createdAt)) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Approved By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v(_vm._s(_vm.checkerName))]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v("\n              " + _vm._s(_vm.safeVoucherData.approvedDate ? _vm.formatDate(_vm.safeVoucherData.approvedDate) : '') + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "signature-box"
  }, [_c('div', {
    staticClass: "signature-line"
  }), _vm._v(" "), _c('p', {
    staticClass: "signature-label"
  }, [_vm._v("Received By")]), _vm._v(" "), _c('p', {
    staticClass: "signature-name"
  }, [_vm._v("_________________")]), _vm._v(" "), _c('p', {
    staticClass: "signature-date"
  }, [_vm._v("Date: ___________")])])])])]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
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
      "click": _vm.printVoucher
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

// CONCATENATED MODULE: ./components/accounting/ap/settlement/voucher/index.vue?vue&type=template&id=50e48902&scoped=true

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/voucher/index.vue?vue&type=script&lang=js

/* harmony default export */ var vouchervue_type_script_lang_js = ({
  name: 'PaymentVoucherPrinter',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    voucherData: {
      type: Object,
      required: false,
      default: null
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    bankAccounts: {
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
    }
  },
  computed: {
    companyDataV1() {
      console.log(`**********COMPANY DATA V1 PDFINVOICE ${api["b" /* mainCompanyInfo */]}**********`);
      let comV1 = Object(api["c" /* mainCompanyInfoV1 */])(this.$store);
      console.info(`Company data fetch from api V1 ${comV1}`);
      return comV1;
    },
    // Check if we have valid data
    hasValidData() {
      return this.voucherData && this.voucherData.id;
    },
    // Safe accessor for voucher data
    safeVoucherData() {
      return this.voucherData || {};
    },
    // Safe accessor for settlement lines
    safeSettlementLines() {
      return this.safeVoucherData.settlementLines || [];
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
    // Maker information
    makerName() {
      var _this$safeVoucherData;
      return ((_this$safeVoucherData = this.safeVoucherData.maker) === null || _this$safeVoucherData === void 0 ? void 0 : _this$safeVoucherData.cus_name) || '-';
    },
    // Checker information
    checkerName() {
      var _this$safeVoucherData2;
      return ((_this$safeVoucherData2 = this.safeVoucherData.checker) === null || _this$safeVoucherData2 === void 0 ? void 0 : _this$safeVoucherData2.cus_name) || '-';
    },
    // Calculate total amount
    totalAmount() {
      return this.safeSettlementLines.reduce((sum, line) => sum + (parseFloat(line.amount) || 0), 0);
    },
    // Amount in words
    amountInWords() {
      if (this.totalAmount === 0) return 'Zero Kip Only';
      return `${this.formatCurrency(this.totalAmount)} Kip Only`;
    }
  },
  methods: {
    // Format date
    formatDate(date) {
      if (!date) return '-';
      try {
        return new Date(date).toLocaleDateString('en-GB');
      } catch (e) {
        return '-';
      }
    },
    // Format currency
    formatCurrency(amount) {
      if (!amount && amount !== 0) return '0.00';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount);
    },
    // Get payment method name
    getPaymentMethodName(id) {
      if (!id) return '-';
      const method = this.paymentMethods.find(m => m.id === id);
      return (method === null || method === void 0 ? void 0 : method.payment_name) || '-';
    },
    // Get bank account info
    getBankAccountInfo(id) {
      if (!id) return '-';
      const account = this.bankAccounts.find(a => a.id === id);
      return account ? `${account.accountNumber} - ${account.bankName}` : '-';
    },
    // Get transaction code
    getTransactionCode(id) {
      if (!id) return '-';
      const txn = this.transactionCodes.find(t => t.id === id);
      return (txn === null || txn === void 0 ? void 0 : txn.code) || '-';
    },
    // Get GL account
    getGLAccount(id) {
      if (!id) return '-';
      const account = this.glAccounts.find(a => a.id === id);
      return (account === null || account === void 0 ? void 0 : account.accountNumber) || '-';
    },
    // Print voucher
    printVoucher() {
      if (!this.hasValidData) {
        var _this$$toast;
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('ບໍ່ມີຂໍ້ມູນສຳລັບພິມ');
        return;
      }
      const printContent = document.getElementById('voucher-print-area');
      if (!printContent) {
        var _this$$toast2;
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.error('ບໍ່ພົບເນື້ອຫາສຳລັບພິມ');
        return;
      }
      const printWindow = window.open('', '', 'height=600,width=800');
      printWindow.document.write('<html><head><title>Payment Voucher</title>');
      printWindow.document.write(`
        <style>
          @media print {
            body { 
              margin: 0; 
              padding: 20px; 
              font-family: Arial, sans-serif; 
            }
            .voucher-container { 
              max-width: 100%; 
            }
            .voucher-header { 
              margin-bottom: 20px; 
              border-bottom: 2px solid #01532B; 
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
              color: #01532B;
            }
            .company-address, .company-contact { 
              margin: 3px 0; 
              font-size: 11px;
              color: #666;
            }
            .voucher-title h3 { 
              margin: 0 0 5px 0; 
              font-size: 18px;
              color: #333;
            }
            .voucher-title h4 { 
              margin: 0; 
              font-size: 14px; 
              color: #666; 
            }
            .voucher-info-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 10px; 
              margin: 20px 0; 
            }
            .info-row { 
              padding: 5px 0; 
            }
            .label { 
              font-weight: bold; 
              margin-right: 10px; 
            }
            .voucher-table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0; 
            }
            .voucher-table th, .voucher-table td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              font-size: 11px; 
            }
            .voucher-table th { 
              background-color: #f5f5f5; 
              font-weight: bold; 
              text-align: left; 
            }
            .voucher-table .text-center { 
              text-align: center; 
            }
            .voucher-table .text-right { 
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
              border-left: 3px solid #01532B; 
            }
            .voucher-description { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #f9f9f9; 
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
// CONCATENATED MODULE: ./components/accounting/ap/settlement/voucher/index.vue?vue&type=script&lang=js
 /* harmony default export */ var settlement_vouchervue_type_script_lang_js = (vouchervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/voucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(632)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settlement_vouchervue_type_script_lang_js,
  vouchervue_type_template_id_50e48902_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "50e48902",
  "1d8f96b8"
  
)

/* harmony default export */ var voucher = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ap-settlement-voucher.js.map