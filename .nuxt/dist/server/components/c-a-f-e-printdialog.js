exports.ids = [29];
exports.modules = {

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(562);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("129a2380", content, true, context)
};

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02cb606c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(507);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02cb606c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02cb606c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02cb606c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02cb606c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-overlay[data-v-02cb606c]{align-items:center;background:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.print-dialog-content[data-v-02cb606c]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:600px;overflow-y:auto;width:100%}.print-dialog-header[data-v-02cb606c]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:20px 24px}.print-dialog-header h2[data-v-02cb606c]{color:#333;font-size:20px;margin:0}.close-btn[data-v-02cb606c]{align-items:center;background:none;border:none;border-radius:50%;color:#6c757d;cursor:pointer;display:flex;font-size:28px;height:32px;justify-content:center;padding:0;transition:all .2s;width:32px}.close-btn[data-v-02cb606c]:hover{background:#e9ecef;color:#333}.print-preview[data-v-02cb606c]{background:#fff;color:#000;font-family:\"Courier New\",monospace;font-size:13px;line-height:1.4;padding:24px}.print-header[data-v-02cb606c]{margin-bottom:20px;text-align:center}.restaurant-name[data-v-02cb606c]{color:#333;font-size:24px;font-weight:700;margin:0 0 8px}.restaurant-address[data-v-02cb606c]{color:#666;font-size:14px;line-height:1.3;margin:0}.print-ticket-info[data-v-02cb606c]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr;margin-bottom:15px}.detail-row[data-v-02cb606c]{display:flex;font-size:13px;justify-content:space-between;margin-bottom:4px}.detail-label[data-v-02cb606c]{color:#333;font-weight:700}.detail-value[data-v-02cb606c]{color:#000}.print-divider[data-v-02cb606c]{border-top:2px dashed #333;margin:20px 0}.print-items[data-v-02cb606c]{margin-bottom:20px}.section-title[data-v-02cb606c]{color:#333;font-size:16px;font-weight:700;margin:0 0 15px;text-align:center}.print-item[data-v-02cb606c]{border-bottom:1px dotted #ccc;margin-bottom:12px;padding-bottom:8px}.print-item[data-v-02cb606c]:last-child{border-bottom:none}.item-line[data-v-02cb606c]{margin-bottom:4px}.item-main[data-v-02cb606c]{display:flex;font-weight:700;justify-content:space-between;margin-bottom:2px}.item-name[data-v-02cb606c]{color:#333}.item-price[data-v-02cb606c]{color:#000}.item-details[data-v-02cb606c]{color:#666;display:flex;font-size:12px;justify-content:space-between;margin-left:15px}.item-total[data-v-02cb606c]{color:#000;font-weight:700}.item-notes[data-v-02cb606c]{color:#888;font-size:11px;font-style:italic;margin-left:15px;margin-top:4px}.no-items-print[data-v-02cb606c]{color:#666;font-style:italic;padding:20px;text-align:center}.print-summary[data-v-02cb606c]{margin:20px 0}.summary-line[data-v-02cb606c]{display:flex;font-size:14px;justify-content:space-between;margin-bottom:4px}.summary-label[data-v-02cb606c]{color:#333}.summary-value[data-v-02cb606c]{color:#000;font-weight:700}.total-line[data-v-02cb606c]{border-top:2px solid #333;font-size:18px;font-weight:700;margin-top:12px;padding-top:8px}.total-line .summary-label[data-v-02cb606c],.total-line .summary-value[data-v-02cb606c]{color:#000}.print-payment[data-v-02cb606c]{margin:20px 0}.payment-status[data-v-02cb606c]{display:flex;font-size:14px;font-weight:700;justify-content:space-between;margin-bottom:8px}.payment-label[data-v-02cb606c]{color:#333}.payment-value.payment-pending[data-v-02cb606c]{color:#856404}.payment-value.payment-paid[data-v-02cb606c]{color:#155724}.payment-value.payment-refunded[data-v-02cb606c]{color:#721c24}.payment-details[data-v-02cb606c]{color:#666;font-size:12px}.payment-info[data-v-02cb606c]{display:flex;flex-direction:column;gap:4px}.print-notes[data-v-02cb606c]{margin:20px 0}.print-notes h4[data-v-02cb606c]{color:#333;font-size:14px;font-weight:700;margin:0 0 8px}.print-notes p[data-v-02cb606c]{background:#f8f9fa;border-left:4px solid #ffc107;border-radius:4px;color:#000;font-size:13px;margin:0;padding:10px}.print-custom-footer[data-v-02cb606c]{color:#666;font-size:12px;margin:20px 0;text-align:center}.print-footer[data-v-02cb606c]{margin-top:30px;text-align:center}.thank-you[data-v-02cb606c]{color:#333;font-size:16px;font-weight:700;margin:15px 0 10px}.print-time[data-v-02cb606c]{color:#888;font-size:11px;margin:0}.print-dialog-actions[data-v-02cb606c]{background:#f8f9fa;border-radius:0 0 12px 12px;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.print-btn[data-v-02cb606c]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:8px;padding:12px 24px;transition:all .2s}.print-primary[data-v-02cb606c]{background:#007bff;color:#fff}.print-primary[data-v-02cb606c]:disabled{background:#6c757d;cursor:not-allowed}.print-secondary[data-v-02cb606c]{background:#6c757d;color:#fff}.print-btn[data-v-02cb606c]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}@media (max-width:768px){.print-dialog-content[data-v-02cb606c]{margin:10px;max-height:95vh}.print-preview[data-v-02cb606c]{font-size:12px;padding:16px}.print-ticket-info[data-v-02cb606c]{gap:10px;grid-template-columns:1fr}.restaurant-name[data-v-02cb606c]{font-size:20px}.section-title[data-v-02cb606c]{font-size:14px}.total-line[data-v-02cb606c]{font-size:16px}.print-dialog-actions[data-v-02cb606c]{flex-direction:column}.print-btn[data-v-02cb606c]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/printdialog/index.vue?vue&type=template&id=02cb606c&scoped=true&
var render = function render() {
  var _vm$ticket$client, _vm$ticket$table, _vm$ticket$table2, _vm$ticket$client2;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "dialog-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"print-dialog-content\" data-v-02cb606c><div class=\"print-dialog-header\" data-v-02cb606c><h2 data-v-02cb606c>Print Ticket</h2> <button class=\"close-btn\" data-v-02cb606c>×</button></div> " + (_vm.ticket ? "<div class=\"print-preview\" data-v-02cb606c><div class=\"print-header\" data-v-02cb606c><div class=\"restaurant-info\" data-v-02cb606c><h1 class=\"restaurant-name\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.restaurantInfo.name)) + "</h1> <p class=\"restaurant-address\" data-v-02cb606c>" + _vm._s(_vm.restaurantInfo.address) + "</p></div></div> <div class=\"print-ticket-info\" data-v-02cb606c><div class=\"ticket-details\" data-v-02cb606c><div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Ticket #:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.ticket.id)) + "</span></div> <div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Date:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.formatPrintDate(_vm.ticket.createdAt))) + "</span></div> <div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Time:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.formatPrintTime(_vm.ticket.createdAt))) + "</span></div> <div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Status:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.formatStatus(_vm.ticket.status))) + "</span></div></div> <div class=\"customer-table-info\" data-v-02cb606c><div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Customer:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(((_vm$ticket$client = _vm.ticket.client) === null || _vm$ticket$client === void 0 ? void 0 : _vm$ticket$client.name) || 'Walk-in Customer')) + "</span></div> <div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Table:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(((_vm$ticket$table = _vm.ticket.table) === null || _vm$ticket$table === void 0 ? void 0 : _vm$ticket$table.number) || ((_vm$ticket$table2 = _vm.ticket.table) === null || _vm$ticket$table2 === void 0 ? void 0 : _vm$ticket$table2.name) || 'N/A')) + "</span></div> " + ((_vm$ticket$client2 = _vm.ticket.client) !== null && _vm$ticket$client2 !== void 0 && _vm$ticket$client2.phone ? "<div class=\"detail-row\" data-v-02cb606c><span class=\"detail-label\" data-v-02cb606c>Phone:</span> <span class=\"detail-value\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.ticket.client.phone)) + "</span></div>" : "<!---->") + "</div></div> <div class=\"print-divider\" data-v-02cb606c></div> <div class=\"print-items\" data-v-02cb606c><h3 class=\"section-title\" data-v-02cb606c>ORDER ITEMS</h3> " + (_vm.ticket.ticketLines && _vm.ticket.ticketLines.length > 0 ? "<div data-v-02cb606c>" + _vm._ssrList(_vm.ticket.ticketLines, function (line) {
    return "<div class=\"print-item\" data-v-02cb606c><div class=\"item-line\" data-v-02cb606c><div class=\"item-main\" data-v-02cb606c><span class=\"item-name\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.getItemName(line))) + "</span> <span class=\"item-price\" data-v-02cb606c>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(line.originalTicketLinePrice))) + "</span></div> <div class=\"item-details\" data-v-02cb606c><span class=\"item-qty\" data-v-02cb606c>" + _vm._ssrEscape("Qty: " + _vm._s(line.quantity)) + "</span> <span class=\"item-total\" data-v-02cb606c>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.getItemTotal(line)))) + "</span></div></div> " + (line.notes ? "<div class=\"item-notes\" data-v-02cb606c>" + _vm._ssrEscape("\n              Note: " + _vm._s(line.notes) + "\n            ") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"no-items-print\" data-v-02cb606c><p data-v-02cb606c>No items in this order</p></div>") + "</div> <div class=\"print-divider\" data-v-02cb606c></div> <div class=\"print-summary\" data-v-02cb606c><div class=\"summary-line\" data-v-02cb606c><span class=\"summary-label\" data-v-02cb606c>Subtotal:</span> <span class=\"summary-value\" data-v-02cb606c>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.ticket.subtotal))) + "</span></div> <div class=\"summary-line\" data-v-02cb606c><span class=\"summary-label\" data-v-02cb606c>Tax:</span> <span class=\"summary-value\" data-v-02cb606c>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.ticket.tax))) + "</span></div> <div class=\"summary-line total-line\" data-v-02cb606c><span class=\"summary-label\" data-v-02cb606c>TOTAL:</span> <span class=\"summary-value\" data-v-02cb606c>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.ticket.total))) + "</span></div></div> <div class=\"print-payment\" data-v-02cb606c><div class=\"payment-status\" data-v-02cb606c><span class=\"payment-label\" data-v-02cb606c>Payment Status:</span> <span" + _vm._ssrClass("payment-value", `payment-${_vm.ticket.paymentStatus}`) + " data-v-02cb606c>" + _vm._ssrEscape("\n            " + _vm._s(_vm.formatPaymentStatus(_vm.ticket.paymentStatus)) + "\n          ") + "</span></div> " + (_vm.ticket.payment && _vm.ticket.paymentStatus === 'paid' ? "<div class=\"payment-details\" data-v-02cb606c><div class=\"payment-info\" data-v-02cb606c><span data-v-02cb606c>" + _vm._ssrEscape("Method: " + _vm._s(_vm.ticket.payment.payment_code || 'N/A')) + "</span> " + (_vm.ticket.payment.id ? "<span data-v-02cb606c>" + _vm._ssrEscape("\n              Transaction: " + _vm._s(_vm.ticket.payment.payment_code) + "\n            ") + "</span>" : "<!---->") + "</div></div>" : "<!---->") + "</div> " + (_vm.ticket.notes ? "<div class=\"print-notes\" data-v-02cb606c><div class=\"print-divider\" data-v-02cb606c></div> <h4 data-v-02cb606c>NOTES:</h4> <p data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.ticket.notes)) + "</p></div>" : "<!---->") + " " + (_vm.customFooter ? "<div class=\"print-custom-footer\" data-v-02cb606c><div class=\"print-divider\" data-v-02cb606c></div> <div data-v-02cb606c>" + _vm._s(_vm.customFooter) + "</div></div>" : "<!---->") + " <div class=\"print-footer\" data-v-02cb606c><div class=\"print-divider\" data-v-02cb606c></div> <p class=\"thank-you\" data-v-02cb606c>" + _vm._ssrEscape(_vm._s(_vm.footerMessage)) + "</p> <p class=\"print-time\" data-v-02cb606c>" + _vm._ssrEscape("\n          Printed: " + _vm._s(_vm.formatPrintDateTime(new Date())) + "\n        ") + "</p></div></div>" : "<!---->") + " <div class=\"print-dialog-actions\" data-v-02cb606c><button" + _vm._ssrAttr("disabled", _vm.printing) + " class=\"print-btn print-primary\" data-v-02cb606c>" + (_vm.printing ? "<span data-v-02cb606c>Printing...</span>" : "<span data-v-02cb606c>🖨️ Print</span>") + "</button> <button class=\"print-btn print-secondary\" data-v-02cb606c>\n        Cancel\n      </button></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue?vue&type=template&id=02cb606c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/printdialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var printdialogvue_type_script_lang_js_ = ({
  name: 'PrintTicketDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ticket: {
      type: Object,
      default: null
    },
    restaurantInfo: {
      type: Object,
      default: () => ({
        name: 'Restaurant Name',
        address: '123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567'
      })
    },
    footerMessage: {
      type: String,
      default: 'Thank you for your visit!'
    },
    customFooter: {
      type: String,
      default: null
    },
    printTitle: {
      type: String,
      default: 'Print Ticket'
    }
  },
  data() {
    return {
      printing: false
    };
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    async printNow() {
      if (!this.ticket) return;
      this.printing = true;
      try {
        const printContent = document.querySelector('.print-preview').innerHTML;
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Ticket #${this.ticket.id}</title>
            <style>
              ${this.getPrintStyles()}
            </style>
          </head>
          <body>
            ${printContent}
          </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();

        // Wait a moment for content to load, then print
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
          this.printing = false;
          this.$emit('printed', this.ticket);
          this.closeDialog();
        }, 250);
      } catch (error) {
        console.error('Print error:', error);
        this.printing = false;
        this.$emit('print-error', error);
      }
    },
    getPrintStyles() {
      return `
        body {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.4;
          margin: 0;
          padding: 20px;
          color: #000;
        }
        .print-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .restaurant-name {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 8px 0;
        }
        .restaurant-address {
          font-size: 11px;
          margin: 0;
          line-height: 1.3;
        }
        .print-ticket-info {
          margin-bottom: 15px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3px;
        }
        .detail-label {
          font-weight: bold;
        }
        .print-divider {
          border-top: 1px dashed #000;
          margin: 15px 0;
        }
        .section-title {
          font-size: 14px;
          font-weight: bold;
          margin: 0 0 10px 0;
          text-align: center;
        }
        .print-item {
          margin-bottom: 8px;
        }
        .item-line {
          margin-bottom: 2px;
        }
        .item-main {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .item-details {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          margin-left: 10px;
        }
        .item-notes {
          font-size: 10px;
          font-style: italic;
          margin-left: 10px;
          color: #666;
        }
        .print-summary {
          margin: 15px 0;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3px;
        }
        .total-line {
          font-weight: bold;
          font-size: 14px;
          border-top: 1px solid #000;
          padding-top: 5px;
          margin-top: 8px;
        }
        .print-payment {
          margin: 15px 0;
        }
        .payment-status {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .payment-details {
          font-size: 11px;
          margin-top: 5px;
        }
        .payment-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .print-notes {
          margin: 15px 0;
        }
        .print-notes h4 {
          font-size: 12px;
          margin: 0 0 5px 0;
        }
        .print-notes p {
          margin: 0;
          font-size: 11px;
        }
        .print-custom-footer {
          margin: 15px 0;
          text-align: center;
        }
        .print-footer {
          text-align: center;
          margin-top: 20px;
        }
        .thank-you {
          font-weight: bold;
          margin: 10px 0 5px 0;
        }
        .print-time {
          font-size: 10px;
          margin: 0;
          color: #666;
        }
        .payment-pending { color: #856404; }
        .payment-paid { color: #155724; }
        .payment-refunded { color: #721c24; }
        .no-items-print {
          text-align: center;
          padding: 20px;
          color: #666;
          font-style: italic;
        }
        @media print {
          body { margin: 0; padding: 10px; }
        }
      `;
    },
    formatPrintDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString();
    },
    formatPrintTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatPrintDateTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString();
    },
    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Math.round(amount || 0));
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber;
    },
    formatStatus(status) {
      const statusMap = {
        pending: 'Pending',
        preparing: 'Preparing',
        ready: 'Ready',
        served: 'Served',
        paid: 'Paid'
      };
      return statusMap[status] || status;
    },
    formatPaymentStatus(status) {
      const statusMap = {
        pending: 'Unpaid',
        paid: 'Paid',
        refunded: 'Refunded'
      };
      return statusMap[status] || status;
    },
    getItemName(line) {
      console.info(`Line detail ${JSON.stringify(line)}`);
      // Handle different possible structures
      return line.pro_name || line.pro_desc || 'Unknown Item';
    },
    getItemTotal(line) {
      // Handle different possible structures
      return line.total || line.totalPrice || line.subtotal || line.quantity * line.originalTicketLinePrice || 0;
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var CAFE_printdialogvue_type_script_lang_js_ = (printdialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/printdialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(561)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_printdialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "02cb606c",
  "02b6a379"
  
)

/* harmony default export */ var printdialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=c-a-f-e-printdialog.js.map