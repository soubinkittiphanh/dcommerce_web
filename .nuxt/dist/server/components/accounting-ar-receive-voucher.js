exports.ids = [20];
exports.modules = {

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// mixins/companyLogoMixin.js
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      companyLogo: {
        url: null,
        company: null,
        loading: false,
        error: null,
        fallbackUrl: null
      }
    };
  },
  computed: {
    // Get the final logo URL (with fallback)
    finalLogoUrl() {
      return this.companyLogo.url || this.companyLogo.fallbackUrl || this.getDefaultLogo();
    },
    // Check if logo is available
    hasCompanyLogo() {
      return !!this.companyLogo.url;
    },
    // Get company name from logo data
    logoCompanyName() {
      var _this$companyLogo$com;
      return ((_this$companyLogo$com = this.companyLogo.company) === null || _this$companyLogo$com === void 0 ? void 0 : _this$companyLogo$com.name) || 'Company Name';
    }
  },
  methods: {
    // Load first company logo
    async loadFirstCompanyLogo() {
      this.companyLogo.loading = true;
      this.companyLogo.error = null;
      try {
        const response = await this.$axios.get('/api/company/findAll', {
          params: {
            isActive: true
          }
        });
        const companies = Array.isArray(response.data) ? response.data : [];
        const companyWithImage = companies.find(company => company.profile_image_path && company.isActive);
        if (companyWithImage) {
          this.companyLogo.company = companyWithImage;
          this.companyLogo.url = this.buildImageUrl(companyWithImage.profile_image_path);
        }
        this.companyLogo.fallbackUrl = this.getDefaultLogo();
      } catch (error) {
        console.error('Error loading company logo:', error);
        this.companyLogo.error = error.message;
        this.companyLogo.fallbackUrl = this.getDefaultLogo();
      } finally {
        this.companyLogo.loading = false;
      }
    },
    // Load specific company logo
    async loadCompanyLogo(companyId) {
      this.companyLogo.loading = true;
      this.companyLogo.error = null;
      try {
        const response = await this.$axios.get(`/api/company/find/${companyId}`);
        const company = response.data;
        this.companyLogo.company = company;
        if (company.profile_image_path) {
          this.companyLogo.url = this.buildImageUrl(company.profile_image_path);
        } else {
          this.companyLogo.url = null;
        }
        this.companyLogo.fallbackUrl = this.getDefaultLogo();
      } catch (error) {
        console.error('Error loading specific company logo:', error);
        this.companyLogo.error = error.message;
        this.companyLogo.fallbackUrl = this.getDefaultLogo();
      } finally {
        this.companyLogo.loading = false;
      }
    },
    // Build image URL
    buildImageUrl(imagePath) {
      if (!imagePath) return null;
      const baseUrl = this.$axios.defaults.baseURL || '';
      return `${baseUrl}/${imagePath}`;
    },
    // Get default/fallback logo
    getDefaultLogo() {
      try {
        return __webpack_require__(140);
      } catch {
        return '/static/images/default-logo.png';
      }
    },
    // Handle logo load error
    onLogoError() {
      console.warn('Company logo failed to load');
      this.companyLogo.url = null;
    },
    // Reset logo data
    resetCompanyLogo() {
      this.companyLogo = {
        url: null,
        company: null,
        loading: false,
        error: null,
        fallbackUrl: null
      };
    }
  }
});

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(653);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ef73fef8", content, true, context)
};

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_30b7183e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(550);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_30b7183e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_30b7183e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_30b7183e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_30b7183e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".receipt-container[data-v-30b7183e]{background:#fff;margin:0 auto;max-width:900px;padding:40px}.receipt-header[data-v-30b7183e]{border-bottom:3px solid #01532b;margin-bottom:30px;padding-bottom:15px}.header-flex[data-v-30b7183e]{align-items:center;display:flex;gap:20px;justify-content:space-between}.header-left[data-v-30b7183e]{flex-shrink:0}.header-center[data-v-30b7183e]{flex:1;text-align:left}.header-right[data-v-30b7183e]{flex-shrink:0;text-align:right}.logo-placeholder[data-v-30b7183e]{align-items:center;border:2px dashed #ddd;border-radius:4px;display:flex;height:100px;justify-content:center;width:120px}.company-logo[data-v-30b7183e]{border-radius:4px;display:block;height:auto;max-height:100px;-o-object-fit:contain;object-fit:contain;width:120px}.company-name[data-v-30b7183e]{color:#01532b;font-size:24px;font-weight:700;margin:0 0 8px}.company-address[data-v-30b7183e],.company-contact[data-v-30b7183e]{color:#666;font-size:13px;margin:5px 0}.receipt-title h3[data-v-30b7183e]{color:#333;font-size:20px;margin:0 0 5px}.receipt-title h4[data-v-30b7183e]{color:#666;font-size:16px;margin:0}.receipt-info-grid[data-v-30b7183e]{display:grid;grid-template-columns:1fr 1fr;grid-gap:30px;background-color:#f9f9f9;border-radius:4px;gap:30px;margin:25px 0;padding:20px}.info-section h5[data-v-30b7183e]{border-bottom:1px solid #ddd;color:#333;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:5px}.info-row[data-v-30b7183e]{display:flex;font-size:12px;padding:5px 0}.label[data-v-30b7183e]{color:#333;font-weight:600;min-width:120px}.value[data-v-30b7183e]{color:#666}.receipt-table[data-v-30b7183e]{border-collapse:collapse;font-size:13px;margin:25px 0;width:100%}.receipt-table td[data-v-30b7183e],.receipt-table th[data-v-30b7183e]{border:1px solid #ddd;padding:10px}.receipt-table th[data-v-30b7183e]{background-color:#01532b;color:#fff;font-weight:600;text-align:left}.receipt-table tbody tr[data-v-30b7183e]:nth-child(2n){background-color:#f9f9f9}.receipt-table .text-center[data-v-30b7183e]{text-align:center}.receipt-table .text-right[data-v-30b7183e]{text-align:right}.total-row td[data-v-30b7183e]{background-color:#e8f5e9;font-size:14px;font-weight:700}.amount-words[data-v-30b7183e]{background-color:#f0f4ff;border-left:4px solid #01532b;font-size:14px;margin:20px 0;padding:15px}.receipt-notes[data-v-30b7183e]{background-color:#fff9e6;border-radius:4px;font-size:13px;margin:20px 0;padding:15px}.signature-section[data-v-30b7183e]{display:flex;gap:40px;justify-content:space-between;margin-top:60px}.signature-box[data-v-30b7183e]{flex:1;text-align:center}.signature-line[data-v-30b7183e]{border-top:2px solid #333;margin:80px 10px 15px}.signature-label[data-v-30b7183e]{color:#333;font-size:13px;font-weight:600;margin:8px 0}.signature-name[data-v-30b7183e]{font-size:14px;font-weight:500;margin:5px 0}.signature-date[data-v-30b7183e]{color:#666;font-size:12px}@media print{.receipt-container[data-v-30b7183e]{padding:20px}.company-logo[data-v-30b7183e]{max-height:80px;width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(356);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(401);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/voucher/index.vue?vue&type=template&id=30b7183e&scoped=true










var vouchervue_type_template_id_30b7183e_scoped_true_render = function render() {
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
  }, [_vm.companyLogo.loading ? _c('div', {
    staticClass: "logo-placeholder"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "size": "24",
      "color": "primary"
    }
  })], 1) : _c('img', {
    staticClass: "company-logo",
    attrs: {
      "src": _vm.finalLogoUrl,
      "alt": "Company Logo"
    },
    on: {
      "error": _vm.onLogoError
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

// CONCATENATED MODULE: ./components/accounting/ar/receive/voucher/index.vue?vue&type=template&id=30b7183e&scoped=true

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(37);

// EXTERNAL MODULE: ./mixins/companyLogoMixin.js
var companyLogoMixin = __webpack_require__(500);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/voucher/index.vue?vue&type=script&lang=js


/* harmony default export */ var vouchervue_type_script_lang_js = ({
  name: 'ARReceivePrinterWithLogo',
  mixins: [companyLogoMixin["a" /* default */]],
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
      return this.safeReceiptData.allocationLines || this.safeReceiptData.receiveLines || [];
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
      return this.safeAllocationLines.reduce((sum, line) => {
        return sum + (parseFloat(line.allocatedAmount) || 0);
      }, 0);
    },
    amountInWords() {
      return this.numberToWords(this.totalAmount) + ' Only';
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        // Load the first company logo when dialog opens
        this.loadFirstCompanyLogo();
      }
    }
  },
  methods: {
    getPaymentMethodName(paymentId) {
      if (!paymentId) return '-';
      const method = this.paymentMethods.find(m => m.id === paymentId);
      return (method === null || method === void 0 ? void 0 : method.name) || (method === null || method === void 0 ? void 0 : method.methodName) || '-';
    },
    getTransactionCode(txnId) {
      if (!txnId) return '-';
      const txn = this.transactionCodes.find(t => t.id === txnId);
      return (txn === null || txn === void 0 ? void 0 : txn.code) || (txn === null || txn === void 0 ? void 0 : txn.transactionCode) || '-';
    },
    getGLAccount(accountId) {
      if (!accountId) return '-';
      const account = this.glAccounts.find(a => a.id === accountId);
      return (account === null || account === void 0 ? void 0 : account.accountCode) || (account === null || account === void 0 ? void 0 : account.code) || '-';
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
      return `$${parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    },
    numberToWords(num) {
      // Simplified number to words conversion
      if (num === 0) return 'Zero';
      if (num < 1000) return `${Math.floor(num)} Dollars`;
      if (num < 1000000) return `${Math.floor(num / 1000)} Thousand Dollars`;
      return `${Math.floor(num / 1000000)} Million Dollars`;
    },
    printReceipt() {
      const printContent = document.getElementById('receipt-print-area');
      if (!printContent) {
        this.$toast.error('Print content not found');
        return;
      }
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
        <head>
          <title>Payment Receipt - ${this.safeReceiptData.receiptNumber}</title>
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
            .receipt-container { 
              background: white; 
              padding: 20px; 
              max-width: 900px; 
              margin: 0 auto; 
            }
            .receipt-header { 
              margin-bottom: 20px; 
              border-bottom: 3px solid #01532B; 
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
              color: #01532B; 
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
              border-left: 3px solid #01532B; 
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
// CONCATENATED MODULE: ./components/accounting/ar/receive/voucher/index.vue?vue&type=script&lang=js
 /* harmony default export */ var receive_vouchervue_type_script_lang_js = (vouchervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/receive/voucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(652)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  receive_vouchervue_type_script_lang_js,
  vouchervue_type_template_id_30b7183e_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "30b7183e",
  "6700ed7e"
  
)

/* harmony default export */ var voucher = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ar-receive-voucher.js.map