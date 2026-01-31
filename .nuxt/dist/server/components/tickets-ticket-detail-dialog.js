exports.ids = [163];
exports.modules = {

/***/ 1084:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tickets/TicketDetailDialog.vue?vue&type=template&id=8946fa6a&scoped=true
var render = function render() {
  var _vm$ticket, _vm$ticket$client, _vm$ticket$table, _vm$ticket$table2, _vm$ticket2, _vm$ticket3, _vm$ticket4, _vm$ticket5, _vm$ticket6;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dialog-overlay",
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_vm._ssrNode("<div class=\"dialog-content\" data-v-8946fa6a><div class=\"dialog-header\" data-v-8946fa6a><h2 data-v-8946fa6a>" + _vm._ssrEscape("Ticket #" + _vm._s((_vm$ticket = _vm.ticket) === null || _vm$ticket === void 0 ? void 0 : _vm$ticket.id) + " Details") + "</h2> <button class=\"close-btn\" data-v-8946fa6a>×</button></div> " + (_vm.ticket ? "<div class=\"dialog-body\" data-v-8946fa6a><div class=\"dialog-section\" data-v-8946fa6a><div class=\"section-header\" data-v-8946fa6a><h3 data-v-8946fa6a>Ticket Information</h3> <div class=\"ticket-status-badges\" data-v-8946fa6a><span" + _vm._ssrClass(null, ['status-badge', `status-${_vm.ticket.status}`]) + " data-v-8946fa6a>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatStatus(_vm.ticket.status)) + "\n            ") + "</span> <span" + _vm._ssrClass(null, ['payment-badge', `payment-${_vm.ticket.paymentStatus}`]) + " data-v-8946fa6a>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatPaymentStatus(_vm.ticket.paymentStatus)) + "\n            ") + "</span></div></div> <div class=\"info-grid\" data-v-8946fa6a><div class=\"info-item\" data-v-8946fa6a><strong data-v-8946fa6a>Created:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formatDate(_vm.ticket.createdAt)) + "\n          ") + "</div> <div class=\"info-item\" data-v-8946fa6a><strong data-v-8946fa6a>Last Updated:</strong>" + _vm._ssrEscape("\n            " + _vm._s(_vm.formatDate(_vm.ticket.updateTimestamp)) + "\n          ") + "</div> <div class=\"info-item\" data-v-8946fa6a><strong data-v-8946fa6a>Customer:</strong>" + _vm._ssrEscape(" " + _vm._s(((_vm$ticket$client = _vm.ticket.client) === null || _vm$ticket$client === void 0 ? void 0 : _vm$ticket$client.name) || 'Walk-in') + "\n          ") + "</div> <div class=\"info-item\" data-v-8946fa6a><strong data-v-8946fa6a>Table:</strong>" + _vm._ssrEscape("\n            " + _vm._s(((_vm$ticket$table = _vm.ticket.table) === null || _vm$ticket$table === void 0 ? void 0 : _vm$ticket$table.number) || ((_vm$ticket$table2 = _vm.ticket.table) === null || _vm$ticket$table2 === void 0 ? void 0 : _vm$ticket$table2.name) || 'N/A') + "\n          ") + "</div></div></div> " + (_vm.ticket.client ? "<div class=\"dialog-section\" data-v-8946fa6a><h3 data-v-8946fa6a>Customer Details</h3> <div class=\"info-grid\" data-v-8946fa6a><div class=\"info-item\" data-v-8946fa6a><strong data-v-8946fa6a>Name:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.ticket.client.name) + "\n          ") + "</div> " + (_vm.ticket.client.email ? "<div class=\"info-item\" data-v-8946fa6a><strong data-v-8946fa6a>Email:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.ticket.client.email) + "\n          ") + "</div>" : "<!---->") + " " + (_vm.ticket.client.phone ? "<div class=\"info-item\" data-v-8946fa6a><strong data-v-8946fa6a>Phone:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.ticket.client.phone) + "\n          ") + "</div>" : "<!---->") + "</div></div>" : "<!---->") + " <div class=\"dialog-section\" data-v-8946fa6a><h3 data-v-8946fa6a>Order Items</h3> " + (_vm.ticket.ticketLines && _vm.ticket.ticketLines.length > 0 ? "<div class=\"items-table\" data-v-8946fa6a><div class=\"table-header\" data-v-8946fa6a><div class=\"col-item\" data-v-8946fa6a>Item</div> <div class=\"col-qty\" data-v-8946fa6a>Qty</div> <div class=\"col-price\" data-v-8946fa6a>Price</div> <div class=\"col-total\" data-v-8946fa6a>Total</div></div> " + _vm._ssrList(_vm.ticket.ticketLines, function (line) {
    return "<div class=\"table-row\" data-v-8946fa6a><div class=\"col-item\" data-v-8946fa6a><div class=\"item-name\" data-v-8946fa6a>" + _vm._ssrEscape("\n                " + _vm._s(line.product.pro_name || 'Unknown Item') + "\n              ") + "</div> " + (line.notes ? "<div class=\"item-notes\" data-v-8946fa6a>" + _vm._ssrEscape("\n                " + _vm._s(line.notes) + "\n              ") + "</div>" : "<!---->") + "</div> <div class=\"col-qty\" data-v-8946fa6a>" + _vm._ssrEscape(_vm._s(line.quantity)) + "</div> <div class=\"col-price\" data-v-8946fa6a>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(line.unitPrice))) + "</div> <div class=\"col-total\" data-v-8946fa6a>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatPrice(line.total || line.quantity * line.unitPrice)) + "\n            ") + "</div></div>";
  }) + "</div>" : "<div class=\"no-items\" data-v-8946fa6a><p data-v-8946fa6a>No items in this order</p></div>") + "</div> <div class=\"dialog-section\" data-v-8946fa6a><h3 data-v-8946fa6a>Order Summary</h3> <div class=\"summary-table\" data-v-8946fa6a><div class=\"summary-row\" data-v-8946fa6a><span data-v-8946fa6a>Subtotal:</span> <span data-v-8946fa6a>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.ticket.subtotal))) + "</span></div> <div class=\"summary-row\" data-v-8946fa6a><span data-v-8946fa6a>Tax:</span> <span data-v-8946fa6a>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.ticket.tax))) + "</span></div> <div class=\"summary-row total-row\" data-v-8946fa6a><span data-v-8946fa6a><strong data-v-8946fa6a>Total:</strong></span> <span data-v-8946fa6a><strong data-v-8946fa6a>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.ticket.total))) + "</strong></span></div></div></div> " + (_vm.ticket.payment ? "<div class=\"dialog-section\" data-v-8946fa6a><h3 data-v-8946fa6a>Payment Information</h3> <div class=\"info-grid\" data-v-8946fa6a><div class=\"info-item\" data-v-8946fa6a><strong data-v-8946fa6a>Method:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.ticket.payment.method || 'N/A') + "\n          ") + "</div> <div class=\"info-item\" data-v-8946fa6a><strong data-v-8946fa6a>Amount:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formatPrice(_vm.ticket.payment.amount)) + "\n          ") + "</div> <div class=\"info-item\" data-v-8946fa6a><strong data-v-8946fa6a>Status:</strong>" + _vm._ssrEscape("\n            " + _vm._s(_vm.formatPaymentStatus(_vm.ticket.paymentStatus)) + "\n          ") + "</div> " + (_vm.ticket.payment.transactionId ? "<div class=\"info-item\" data-v-8946fa6a><strong data-v-8946fa6a>Transaction ID:</strong>" + _vm._ssrEscape("\n            " + _vm._s(_vm.ticket.payment.transactionId) + "\n          ") + "</div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.ticket.notes ? "<div class=\"dialog-section\" data-v-8946fa6a><h3 data-v-8946fa6a>Notes</h3> <div class=\"notes-content\" data-v-8946fa6a>" + _vm._ssrEscape("\n          " + _vm._s(_vm.ticket.notes) + "\n        ") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + " <div class=\"dialog-footer\" data-v-8946fa6a><div class=\"dialog-actions\" data-v-8946fa6a>" + (((_vm$ticket2 = _vm.ticket) === null || _vm$ticket2 === void 0 ? void 0 : _vm$ticket2.status) === 'pending' ? "<button class=\"dialog-btn btn-preparing\" data-v-8946fa6a>\n          Start Preparing\n        </button>" : "<!---->") + " " + (((_vm$ticket3 = _vm.ticket) === null || _vm$ticket3 === void 0 ? void 0 : _vm$ticket3.status) === 'preparing' ? "<button class=\"dialog-btn btn-ready\" data-v-8946fa6a>\n          Mark Ready\n        </button>" : "<!---->") + " " + (((_vm$ticket4 = _vm.ticket) === null || _vm$ticket4 === void 0 ? void 0 : _vm$ticket4.status) === 'ready' ? "<button class=\"dialog-btn btn-served\" data-v-8946fa6a>\n          Mark Served\n        </button>" : "<!---->") + " " + (((_vm$ticket5 = _vm.ticket) === null || _vm$ticket5 === void 0 ? void 0 : _vm$ticket5.status) === 'served' && ((_vm$ticket6 = _vm.ticket) === null || _vm$ticket6 === void 0 ? void 0 : _vm$ticket6.paymentStatus) === 'pending' ? "<button class=\"dialog-btn btn-payment\" data-v-8946fa6a>\n          Process Payment\n        </button>" : "<!---->") + " <button class=\"dialog-btn btn-print\" data-v-8946fa6a>\n          Print Ticket\n        </button> <button class=\"dialog-btn btn-close\" data-v-8946fa6a>\n          Close\n        </button></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/tickets/TicketDetailDialog.vue?vue&type=template&id=8946fa6a&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tickets/TicketDetailDialog.vue?vue&type=script&lang=js
/* harmony default export */ var TicketDetailDialogvue_type_script_lang_js = ({
  name: 'TicketDetailDialog',
  props: {
    ticket: {
      type: Object,
      default: null
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString();
    },
    formatPrice(amount) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Math.round(amount || 0));
      return `${formattedNumber} ₭`;
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
    }
  }
});
// CONCATENATED MODULE: ./components/tickets/TicketDetailDialog.vue?vue&type=script&lang=js
 /* harmony default export */ var tickets_TicketDetailDialogvue_type_script_lang_js = (TicketDetailDialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/tickets/TicketDetailDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(818)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tickets_TicketDetailDialogvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8946fa6a",
  "e2d95740"
  
)

/* harmony default export */ var TicketDetailDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(819);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("8045c8b4", content, true, context)
};

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetailDialog_vue_vue_type_style_index_0_id_8946fa6a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(719);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetailDialog_vue_vue_type_style_index_0_id_8946fa6a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetailDialog_vue_vue_type_style_index_0_id_8946fa6a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetailDialog_vue_vue_type_style_index_0_id_8946fa6a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetailDialog_vue_vue_type_style_index_0_id_8946fa6a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-overlay[data-v-8946fa6a]{align-items:center;backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.dialog-content[data-v-8946fa6a]{background:#fff;border-radius:16px;box-shadow:0 25px 50px -12px rgba(0,0,0,.25);max-height:90vh;max-width:900px;overflow-y:auto;width:100%}.dialog-header[data-v-8946fa6a]{align-items:center;background:#f7fafc;border-bottom:1px solid #e2e8f0;border-radius:16px 16px 0 0;display:flex;justify-content:space-between;padding:24px 32px;position:sticky;top:0;z-index:10}.dialog-header h2[data-v-8946fa6a]{color:#1a202c;font-size:24px;font-weight:700;margin:0}.close-btn[data-v-8946fa6a]{align-items:center;background:none;border:none;border-radius:50%;color:#718096;cursor:pointer;display:flex;font-size:32px;height:40px;justify-content:center;line-height:1;padding:0;transition:all .2s;width:40px}.close-btn[data-v-8946fa6a]:hover{background:#e2e8f0;color:#2d3748}.dialog-body[data-v-8946fa6a]{padding:32px}.dialog-section[data-v-8946fa6a]{margin-bottom:32px}.dialog-section[data-v-8946fa6a]:last-child{margin-bottom:0}.section-header[data-v-8946fa6a]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.dialog-section h3[data-v-8946fa6a]{border-bottom:2px solid #e2e8f0;color:#2d3748;font-size:18px;font-weight:700;margin:0 0 20px;padding-bottom:10px}.ticket-status-badges[data-v-8946fa6a]{display:flex;gap:8px}.payment-badge[data-v-8946fa6a],.status-badge[data-v-8946fa6a]{border-radius:16px;font-size:11px;font-weight:700;letter-spacing:.5px;padding:6px 12px;text-transform:uppercase}.status-pending[data-v-8946fa6a]{background:#fef5e7;color:#b7791f}.status-preparing[data-v-8946fa6a]{background:#ebf8ff;color:#2c5282}.status-ready[data-v-8946fa6a]{background:#f0fff4;color:#22543d}.status-served[data-v-8946fa6a]{background:#edf2f7;color:#2d3748}.status-paid[data-v-8946fa6a]{background:#f0fff4;color:#22543d}.payment-pending[data-v-8946fa6a]{background:#fef5e7;color:#b7791f}.payment-paid[data-v-8946fa6a]{background:#f0fff4;color:#22543d}.payment-refunded[data-v-8946fa6a]{background:#fff5f5;color:#c53030}.info-grid[data-v-8946fa6a]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));grid-gap:16px;gap:16px}.info-item[data-v-8946fa6a]{background:#f7fafc;border-left:3px solid #4299e1;border-radius:8px;font-size:14px;padding:16px}.info-item strong[data-v-8946fa6a]{color:#2d3748;font-weight:600;margin-right:8px}.items-table[data-v-8946fa6a]{border:1px solid #e2e8f0;border-radius:12px;overflow:hidden}.table-header[data-v-8946fa6a]{background:#f7fafc;border-bottom:2px solid #e2e8f0;color:#2d3748;font-weight:700}.table-header[data-v-8946fa6a],.table-row[data-v-8946fa6a]{display:grid;grid-template-columns:2fr 100px 120px 120px;grid-gap:16px;gap:16px;padding:16px 20px}.table-row[data-v-8946fa6a]{align-items:center;border-bottom:1px solid #f1f3f5;transition:background .2s}.table-row[data-v-8946fa6a]:hover{background:#f7fafc}.table-row[data-v-8946fa6a]:last-child{border-bottom:none}.col-item[data-v-8946fa6a]{display:flex;flex-direction:column}.item-name[data-v-8946fa6a]{color:#1a202c;font-weight:600;margin-bottom:4px}.item-notes[data-v-8946fa6a]{color:#718096;font-size:12px;font-style:italic}.col-price[data-v-8946fa6a],.col-qty[data-v-8946fa6a],.col-total[data-v-8946fa6a]{color:#2d3748;font-weight:600;text-align:right}.no-items[data-v-8946fa6a]{color:#a0aec0;font-style:italic;padding:48px;text-align:center}.summary-table[data-v-8946fa6a]{background:#f7fafc;border:1px solid #e2e8f0;border-radius:12px;padding:24px}.summary-row[data-v-8946fa6a]{border-bottom:1px solid #e2e8f0;display:flex;font-size:15px;justify-content:space-between;padding:10px 0}.summary-row[data-v-8946fa6a]:last-child{border-bottom:none}.total-row[data-v-8946fa6a]{border-top:2px solid #cbd5e0;color:#1a202c;font-size:20px;font-weight:700;margin-top:8px;padding-top:16px}.notes-content[data-v-8946fa6a]{background:#fffaf0;border-left:4px solid #ed8936;border-radius:12px;color:#744210;font-style:italic;line-height:1.6;padding:20px}.dialog-footer[data-v-8946fa6a]{background:#f7fafc;border-radius:0 0 16px 16px;border-top:1px solid #e2e8f0;bottom:0;padding:24px 32px;position:sticky}.dialog-actions[data-v-8946fa6a]{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}.dialog-btn[data-v-8946fa6a]{border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600;padding:12px 24px;transition:all .2s}.dialog-btn.btn-preparing[data-v-8946fa6a]{background:#4299e1;color:#fff}.dialog-btn.btn-preparing[data-v-8946fa6a]:hover{background:#3182ce}.dialog-btn.btn-ready[data-v-8946fa6a]{background:#48bb78;color:#fff}.dialog-btn.btn-ready[data-v-8946fa6a]:hover{background:#38a169}.dialog-btn.btn-served[data-v-8946fa6a]{background:#9f7aea;color:#fff}.dialog-btn.btn-served[data-v-8946fa6a]:hover{background:#805ad5}.dialog-btn.btn-payment[data-v-8946fa6a]{background:#ed8936;color:#fff}.dialog-btn.btn-payment[data-v-8946fa6a]:hover{background:#dd6b20}.dialog-btn.btn-print[data-v-8946fa6a]{background:#718096;color:#fff}.dialog-btn.btn-print[data-v-8946fa6a]:hover{background:#4a5568}.dialog-btn.btn-close[data-v-8946fa6a]{background:#e2e8f0;color:#2d3748}.dialog-btn.btn-close[data-v-8946fa6a]:hover{background:#cbd5e0}.dialog-btn[data-v-8946fa6a]:hover{box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}@media (max-width:768px){.dialog-overlay[data-v-8946fa6a]{padding:10px}.dialog-content[data-v-8946fa6a]{border-radius:12px;max-height:95vh}.dialog-body[data-v-8946fa6a],.dialog-footer[data-v-8946fa6a],.dialog-header[data-v-8946fa6a]{padding:20px}.dialog-header h2[data-v-8946fa6a]{font-size:20px}.info-grid[data-v-8946fa6a]{grid-template-columns:1fr}.table-header[data-v-8946fa6a]{display:none}.table-row[data-v-8946fa6a]{gap:8px;grid-template-columns:1fr;padding:16px}.col-price[data-v-8946fa6a],.col-qty[data-v-8946fa6a],.col-total[data-v-8946fa6a]{text-align:left}.col-qty[data-v-8946fa6a]:before{color:#718096;content:\"Qty: \";font-weight:700}.col-price[data-v-8946fa6a]:before{color:#718096;content:\"Price: \";font-weight:700}.col-total[data-v-8946fa6a]:before{color:#718096;content:\"Total: \";font-weight:700}.dialog-actions[data-v-8946fa6a]{flex-direction:column}.dialog-btn[data-v-8946fa6a]{width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=tickets-ticket-detail-dialog.js.map