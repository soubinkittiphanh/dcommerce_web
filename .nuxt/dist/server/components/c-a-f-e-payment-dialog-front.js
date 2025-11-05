exports.ids = [34];
exports.modules = {

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(528);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5023796a", content, true, context)
};

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_05249aae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(494);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_05249aae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_05249aae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_05249aae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_05249aae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cursor-pointer[data-v-05249aae]{cursor:pointer}.payment-card[data-v-05249aae]{transition:all .2s ease}.payment-card[data-v-05249aae]:hover{transform:translateY(-1px)}.text-none[data-v-05249aae]{text-transform:none!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(400);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(399);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(356);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(398);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(401);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/paymentDialogFront/index.vue?vue&type=template&id=05249aae&scoped=true













var paymentDialogFrontvue_type_template_id_05249aae_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800",
      "persistent": ""
    },
    model: {
      value: _vm.showDialog,
      callback: function ($$v) {
        _vm.showDialog = $$v;
      },
      expression: "showDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white",
      "size": "20"
    }
  }, [_vm._v("mdi-credit-card")]), _vm._v("\n        Payment - Table " + _vm._s(_vm.tableNumber) + " Ticket - ID " + _vm._s(_vm.ticketId) + "\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "text-h6 font-weight-bold"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.amount)))]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "icon": "",
      "color": "white",
      "disabled": _vm.actionLoading
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "20"
    }
  }, [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VRow["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "text-none",
    staticStyle: {
      "background-color": "#01532B !important",
      "color": "white !important"
    },
    attrs: {
      "block": ""
    },
    on: {
      "click": _vm.showQROnCustomerScreen
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "20"
    }
  }, [_vm._v("mdi-monitor-multiple")]), _vm._v("\n              Customer Screen\n            ")], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "text-none",
    attrs: {
      "block": "",
      "color": "deep-purple"
    },
    on: {
      "click": function ($event) {
        _vm.showQRDialog = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "20"
    }
  }, [_vm._v("mdi-qrcode")]), _vm._v("\n              Local QR\n            ")], 1)], 1)], 1), _vm._v(" "), _vm.paymentLoading ? _c('div', {
    staticClass: "text-center py-2"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "size": "32",
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "caption mt-1"
  }, [_vm._v("Loading...")])], 1) : _c('div', [_c('div', {
    staticClass: "subtitle-2 mb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "18"
    }
  }, [_vm._v("mdi-wallet")]), _vm._v("\n            Payment Method\n          ")], 1), _vm._v(" "), _vm.paymentMethods.length > 0 ? _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, _vm._l(_vm.paymentMethods, function (payment) {
    var _vm$selectedPaymentMe, _vm$selectedPaymentMe2, _vm$selectedPaymentMe3;
    return _c(VCol["a" /* default */], {
      key: payment.id,
      staticClass: "pa-1",
      attrs: {
        "cols": "4"
      }
    }, [_c(VCard["a" /* default */], {
      class: ['payment-card cursor-pointer text-center', ((_vm$selectedPaymentMe = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe === void 0 ? void 0 : _vm$selectedPaymentMe.id) === payment.id ? 'white--text elevation-3' : 'elevation-1'],
      attrs: {
        "color": ((_vm$selectedPaymentMe2 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe2 === void 0 ? void 0 : _vm$selectedPaymentMe2.id) === payment.id ? _vm.getPaymentColor(payment.payment_code) : '',
        "hover": "",
        "height": "70"
      },
      on: {
        "click": function ($event) {
          _vm.selectedPaymentMethod = payment;
        }
      }
    }, [_c(components_VCard["c" /* VCardText */], {
      staticClass: "pa-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "color": ((_vm$selectedPaymentMe3 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe3 === void 0 ? void 0 : _vm$selectedPaymentMe3.id) === payment.id ? 'white' : _vm.getPaymentColor(payment.payment_code),
        "size": "24"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.getPaymentIcon(payment.payment_code)) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "caption font-weight-medium mt-1"
    }, [_vm._v("\n                    " + _vm._s(payment.payment_name) + "\n                  ")])], 1)], 1)], 1);
  }), 1) : _c(VAlert["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "type": "warning",
      "dense": ""
    }
  }, [_vm._v("\n            No payment methods available\n            "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "x-small": "",
      "color": "warning"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('reload-payment-methods');
      }
    }
  }, [_vm._v("\n              Retry\n            ")])], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-3"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "disabled": _vm.actionLoading
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "text-none",
    attrs: {
      "color": "success",
      "disabled": !_vm.selectedPaymentMethod || _vm.actionLoading,
      "loading": _vm.actionLoading
    },
    on: {
      "click": _vm.confirmPayment
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "18"
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n          Process Payment\n        ")], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "400",
      "persistent": ""
    },
    model: {
      value: _vm.showQRDialog,
      callback: function ($$v) {
        _vm.showQRDialog = $$v;
      },
      expression: "showQRDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "white--text py-2",
    staticStyle: {
      "background-color": "#01532B !important"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white",
      "size": "20"
    }
  }, [_vm._v("mdi-qrcode")]), _vm._v("\n        QR Payment\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.amount)))]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": function ($event) {
        _vm.showQRDialog = false;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "20"
    }
  }, [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4 text-center"
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2 mb-3",
    staticStyle: {
      "border-color": "#01532B !important"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c('img', {
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "display": "block",
      "margin": "0 auto"
    },
    attrs: {
      "src": _vm.qrCodeUrl,
      "alt": "QR Payment Code"
    },
    on: {
      "error": _vm.onQRError
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "caption grey--text mb-3"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-information")]), _vm._v("\n          Scan with mobile banking app\n        ")], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticStyle: {
      "color": "#01532B !important"
    },
    attrs: {
      "small": "",
      "text": ""
    },
    on: {
      "click": _vm.downloadQR
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-download")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticStyle: {
      "color": "#01532B !important"
    },
    attrs: {
      "small": "",
      "text": ""
    },
    on: {
      "click": _vm.shareQR
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-share")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticStyle: {
      "color": "#01532B !important"
    },
    attrs: {
      "small": "",
      "text": ""
    },
    on: {
      "click": _vm.copyQRString
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v(_vm._s(_vm.copied ? 'mdi-check' : 'mdi-content-copy'))])], 1)], 1)], 1)], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/paymentDialogFront/index.vue?vue&type=template&id=05249aae&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/paymentDialogFront/index.vue?vue&type=script&lang=js
/* harmony default export */ var paymentDialogFrontvue_type_script_lang_js = ({
  name: 'PaymentDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    amount: {
      type: Number,
      default: 0
    },
    ticketId: {
      type: Number,
      default: 0
    },
    tableNumber: {
      type: [String, Number],
      default: ''
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    paymentLoading: {
      type: Boolean,
      default: false
    },
    actionLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      qrRefreshInterval: null,
      // store interval id so we can clear later
      selectedPaymentMethod: null,
      showQRDialog: false,
      copied: false,
      qrString: '00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405100005802LA5907KHAMMAO6260011713a321asS321as2250302120713te rminal000010812test remarks63041c9f'
    };
  },
  computed: {
    showDialog: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) this.closeDialog();
      }
    },
    qrCodeUrl() {
      const encodedString = encodeURIComponent(this.currentQRString.replace(/\s/g, ''));
      return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodedString}&format=png&margin=10&color=01532B&bgcolor=ffffff`;
    },
    currentQRString() {
      return this.generateQRString();
    }
  },
  watch: {
    // Watch for dialog opening/closing
    show: {
      handler(newVal, oldVal) {
        if (newVal && !oldVal) {
          // Dialog just opened
          this.onDialogOpened();
        } else if (!newVal && oldVal) {
          // Dialog just closed
          this.onDialogClosed();
        }
      },
      immediate: false
    },
    // Also watch for changes in amount, tableNumber, or ticketId while dialog is open
    amount: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen();
        }
      }
    },
    tableNumber: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen();
        }
      }
    },
    ticketId: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen();
        }
      }
    }
  },
  mounted() {
    // Only update customer screen if dialog is already open when component mounts
    if (this.show) {
      this.onDialogOpened();
    }
  },
  beforeDestroy() {
    // Clean up intervals and hide QR from customer screen
    this.cleanup();
  },
  methods: {
    onDialogOpened() {
      console.log('Payment dialog opened - updating customer screen');

      // Immediately show QR on customer screen
      this.showQROnCustomerScreen();

      // Optional: Set up auto-refresh interval
      this.startAutoRefresh();

      // Emit event for parent component if needed
      this.$emit('dialog-opened');
    },
    onDialogClosed() {
      console.log('Payment dialog closed - cleaning up');
      this.cleanup();
      this.resetComponent();
    },
    startAutoRefresh() {
      // Clear any existing interval
      if (this.qrRefreshInterval) {
        clearInterval(this.qrRefreshInterval);
      }

      // Set up auto-refresh every 30 seconds (adjust as needed)
      this.qrRefreshInterval = setInterval(() => {
        if (this.show) {
          console.log('Auto-refreshing customer screen QR');
          this.showQROnCustomerScreen();
        }
      }, 30000); // 30 seconds
    },
    cleanup() {
      // Clear auto-refresh interval
      if (this.qrRefreshInterval) {
        clearInterval(this.qrRefreshInterval);
        this.qrRefreshInterval = null;
      }

      // Hide QR from customer screen
      this.hideQRFromCustomerScreen();
    },
    updateCustomerScreen() {
      // Debounced update to avoid too many rapid updates
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
      }
      this.updateTimeout = setTimeout(() => {
        if (this.show) {
          console.log('Updating customer screen due to data change');
          this.showQROnCustomerScreen();
        }
      }, 500); // 500ms debounce
    },
    showQROnCustomerScreen() {
      const qrData = {
        amount: this.amount,
        tableNumber: this.tableNumber,
        ticketId: this.ticketId,
        qrString: this.generateQRString(),
        timestamp: Date.now()
      };
      localStorage.setItem('customerDisplay', JSON.stringify({
        type: 'SHOW_QR_PAYMENT',
        data: qrData
      }));
      window.dispatchEvent(new Event('storage'));

      // Only show success message if manually clicked (not auto-update)
      if (arguments.length > 0 && arguments[0] === 'manual') {
        this.$emit('show-message', `QR displayed on customer screen`, 'success', 'mdi-qrcode');
      }
    },
    hideQRFromCustomerScreen() {
      localStorage.setItem('customerDisplay', JSON.stringify({
        type: 'HIDE_QR_PAYMENT',
        timestamp: Date.now()
      }));
      window.dispatchEvent(new Event('storage'));
    },
    showPaymentSuccessOnCustomerScreen() {
      localStorage.setItem('customerDisplay', JSON.stringify({
        type: 'PAYMENT_SUCCESS',
        data: {
          amount: this.amount,
          tableNumber: this.tableNumber
        },
        timestamp: Date.now()
      }));
      window.dispatchEvent(new Event('storage'));
    },
    generateQRString() {
      if (!this.amount || !this.tableNumber) return this.qrString;
      const amountStr = Math.round(this.amount).toString().padStart(6, '0');
      const tableStr = this.tableNumber.toString().padStart(6, '0');
      return `00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405${amountStr}05802LA5907KHAMMAO6260011713a321asS321as2250302120713terminal${tableStr}0812Table ${this.tableNumber} payment63041c9f`;
    },
    closeDialog() {
      this.cleanup();
      this.resetComponent();
      this.$emit('close');
    },
    resetComponent() {
      this.selectedPaymentMethod = null;
      this.showQRDialog = false;
      this.copied = false;

      // Clear any pending timeouts
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = null;
      }
    },
    confirmPayment() {
      if (!this.selectedPaymentMethod) {
        this.$emit('show-message', 'Please select a payment method', 'warning', 'mdi-alert');
        return;
      }
      this.showPaymentSuccessOnCustomerScreen();
      this.$emit('confirm-payment', this.selectedPaymentMethod);
    },
    async copyQRString() {
      try {
        const stringToCopy = this.currentQRString;
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(stringToCopy);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = stringToCopy;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy QR string:', err);
      }
    },
    downloadQR() {
      const link = document.createElement('a');
      link.href = this.qrCodeUrl;
      link.download = `qr-payment-table-${this.tableNumber}-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    shareQR() {
      if (navigator.share) {
        navigator.share({
          title: `Payment QR - Table ${this.tableNumber}`,
          text: `Payment QR Code for ${this.formatPrice(this.amount)}`,
          url: this.qrCodeUrl
        }).catch(err => console.log('Error sharing:', err));
      } else {
        this.copyQRString();
        this.$emit('show-message', 'QR code details copied!', 'success', 'mdi-check');
      }
    },
    onQRError() {
      this.$emit('show-message', 'Failed to load QR code', 'error', 'mdi-alert');
    },
    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Math.round(amount || 0));
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber;
    },
    getPaymentIcon(paymentCode) {
      const icons = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        CREDIT: 'mdi-credit-card-outline',
        DEBIT: 'mdi-credit-card',
        MOBILE: 'mdi-cellphone',
        DIGITAL: 'mdi-wallet',
        BANK: 'mdi-bank',
        CHECK: 'mdi-checkbook'
      };
      return icons[paymentCode] || 'mdi-currency-usd';
    },
    getPaymentColor(paymentCode) {
      const colors = {
        CASH: 'green',
        CARD: 'blue',
        CREDIT: 'purple',
        DEBIT: 'indigo',
        MOBILE: 'orange',
        DIGITAL: 'teal',
        BANK: 'brown',
        CHECK: 'grey'
      };
      return colors[paymentCode] || 'primary';
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/paymentDialogFront/index.vue?vue&type=script&lang=js
 /* harmony default export */ var CAFE_paymentDialogFrontvue_type_script_lang_js = (paymentDialogFrontvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/paymentDialogFront/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(527)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_paymentDialogFrontvue_type_script_lang_js,
  paymentDialogFrontvue_type_template_id_05249aae_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "05249aae",
  "07a78cad"
  
)

/* harmony default export */ var paymentDialogFront = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=c-a-f-e-payment-dialog-front.js.map