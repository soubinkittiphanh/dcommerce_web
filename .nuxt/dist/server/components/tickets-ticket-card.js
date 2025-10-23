exports.ids = [139];
exports.modules = {

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(703);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ac2172e0", content, true, context)
};

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCard_vue_vue_type_style_index_0_id_1f00ec88_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(622);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCard_vue_vue_type_style_index_0_id_1f00ec88_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCard_vue_vue_type_style_index_0_id_1f00ec88_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCard_vue_vue_type_style_index_0_id_1f00ec88_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCard_vue_vue_type_style_index_0_id_1f00ec88_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-add-item[data-v-1f00ec88]{align-items:center;background:#805ad5;color:#fff;display:flex;gap:6px}.btn-add-item[data-v-1f00ec88]:hover:not(:disabled){background:#6b46c1}.btn-add-item[data-v-1f00ec88]:disabled{background:#cbd5e0;cursor:not-allowed;opacity:.6}.btn-notes[data-v-1f00ec88]{align-items:center;background:#f6ad55;color:#fff;display:flex;gap:6px}.btn-notes[data-v-1f00ec88]:hover{background:#ed8936}.btn-notes.has-notes[data-v-1f00ec88]{background:#dd6b20}.btn-notes.has-notes[data-v-1f00ec88]:hover{background:#c05621}.ticket-notes-preview[data-v-1f00ec88]{align-items:center;background:#fffaf0;border:1px solid #f6ad55;border-radius:8px;color:#718096;display:flex;font-size:13px;gap:8px;margin-top:12px;padding:10px 12px;position:relative}.notes-icon[data-v-1f00ec88]{flex-shrink:0;font-size:18px}.notes-text[data-v-1f00ec88]{color:#2d3748;flex:1;font-size:12px;font-style:italic;line-height:1.4}.notes-edit-btn[data-v-1f00ec88]{background:transparent;border:none;border-radius:4px;cursor:pointer;flex-shrink:0;font-size:16px;padding:4px 8px;transition:all .2s}.notes-edit-btn[data-v-1f00ec88]:hover{background:rgba(237,137,54,.1);transform:scale(1.1)}.ticket-notes-empty[data-v-1f00ec88]{margin-top:12px}.add-notes-btn[data-v-1f00ec88]{align-items:center;background:#fff;border:2px dashed #cbd5e0;border-radius:8px;color:#718096;cursor:pointer;display:flex;font-size:13px;font-weight:600;gap:6px;justify-content:center;padding:10px 12px;transition:all .2s;width:100%}.add-notes-btn[data-v-1f00ec88]:hover{background:#fffaf0;border-color:#f6ad55;color:#ed8936}.btn-icon[data-v-1f00ec88]{font-size:14px}.btn-cancel[data-v-1f00ec88]{background:#fc8181;color:#fff}.btn-cancel[data-v-1f00ec88]:hover{background:#f56565}.ticket-card[data-v-1f00ec88]{background:#fff;border:2px solid #e2e8f0;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.1);cursor:pointer;padding:20px;position:relative;transition:all .3s ease}.ticket-card[data-v-1f00ec88]:hover{border-color:#4299e1;box-shadow:0 8px 24px rgba(0,0,0,.15);transform:translateY(-4px)}.ticket-card.urgent[data-v-1f00ec88]{background:#fffaf0;border-color:#ed8936}.card-header[data-v-1f00ec88]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:16px}.ticket-number[data-v-1f00ec88]{display:flex;flex-direction:column;gap:4px}.ticket-id[data-v-1f00ec88]{color:#1a202c;font-size:20px;font-weight:700}.ticket-time[data-v-1f00ec88]{color:#718096;font-size:12px;font-weight:500}.ticket-badges[data-v-1f00ec88]{align-items:flex-end;display:flex;flex-direction:column;gap:6px}.payment-badge[data-v-1f00ec88],.status-badge[data-v-1f00ec88]{border-radius:16px;font-size:11px;font-weight:700;letter-spacing:.5px;padding:5px 10px;text-transform:uppercase;white-space:nowrap}.status-pending[data-v-1f00ec88]{background:#fef5e7;color:#b7791f}.status-preparing[data-v-1f00ec88]{background:#ebf8ff;color:#2c5282}.status-ready[data-v-1f00ec88]{background:#f0fff4;color:#22543d}.status-served[data-v-1f00ec88]{background:#edf2f7;color:#2d3748}.status-paid[data-v-1f00ec88]{background:#f0fff4;color:#22543d}.status-cancel[data-v-1f00ec88]{background:#fff5f5;color:#c53030}.payment-pending[data-v-1f00ec88]{background:#fef5e7;color:#b7791f}.payment-paid[data-v-1f00ec88]{background:#f0fff4;color:#22543d}.payment-refunded[data-v-1f00ec88]{background:#fff5f5;color:#c53030}.card-info[data-v-1f00ec88]{margin-bottom:16px}.info-row[data-v-1f00ec88]{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.info-row[data-v-1f00ec88]:last-child{margin-bottom:0}.info-label[data-v-1f00ec88]{color:#718096;font-size:14px;font-weight:500}.info-value[data-v-1f00ec88]{color:#2d3748;font-size:14px;font-weight:600}.card-summary[data-v-1f00ec88]{border-top:1px solid #e2e8f0;margin-bottom:16px;padding-top:16px}.summary-total[data-v-1f00ec88]{align-items:center;display:flex;justify-content:space-between;margin-bottom:12px}.total-label[data-v-1f00ec88]{color:#4a5568;font-size:15px;font-weight:600}.total-amount[data-v-1f00ec88]{color:#38a169;font-size:22px;font-weight:700}.card-actions[data-v-1f00ec88]{display:flex;flex-wrap:wrap;gap:8px}.action-btn[data-v-1f00ec88]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:flex;font-size:13px;font-weight:600;gap:4px;padding:8px 14px;transition:all .2s;white-space:nowrap}.btn-preparing[data-v-1f00ec88]{background:#4299e1;color:#fff}.btn-preparing[data-v-1f00ec88]:hover{background:#3182ce}.btn-ready[data-v-1f00ec88]{background:#48bb78;color:#fff}.btn-ready[data-v-1f00ec88]:hover{background:#38a169}.btn-served[data-v-1f00ec88]{background:#9f7aea;color:#fff}.btn-served[data-v-1f00ec88]:hover{background:#805ad5}.btn-payment[data-v-1f00ec88]{background:#ed8936;color:#fff}.btn-payment[data-v-1f00ec88]:hover{background:#dd6b20}.btn-print[data-v-1f00ec88]{background:#718096;color:#fff}.btn-print[data-v-1f00ec88]:hover{background:#4a5568}.action-btn[data-v-1f00ec88]:hover{box-shadow:0 2px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.urgency-indicator[data-v-1f00ec88]{align-items:center;animation:pulse-1f00ec88 2s infinite;background:#ed8936;border-radius:16px;box-shadow:0 2px 8px rgba(237,137,54,.4);color:#fff;display:flex;font-size:11px;font-weight:700;gap:4px;padding:6px 12px;position:absolute;right:-8px;top:-8px}@keyframes pulse-1f00ec88{0%,to{transform:scale(1)}50%{transform:scale(1.05)}}.urgency-icon[data-v-1f00ec88]{font-size:14px}.urgency-text[data-v-1f00ec88]{font-size:11px}@media (max-width:768px){.ticket-card[data-v-1f00ec88]{padding:16px}.card-actions[data-v-1f00ec88]{flex-direction:column}.action-btn[data-v-1f00ec88]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tickets/TicketCard.vue?vue&type=template&id=1f00ec88&scoped=true
var render = function render() {
  var _vm$ticket$client, _vm$ticket$table, _vm$ticket$table2, _vm$ticket$ticketLine;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ticket-card",
    class: {
      urgent: _vm.isUrgent
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', _vm.ticket);
      }
    }
  }, [_vm._ssrNode("<div class=\"card-header\" data-v-1f00ec88><div class=\"ticket-number\" data-v-1f00ec88><span class=\"ticket-id\" data-v-1f00ec88>" + _vm._ssrEscape("#" + _vm._s(_vm.ticket.ticketNumber || _vm.ticket.id)) + "</span> <span class=\"ticket-time\" data-v-1f00ec88>" + _vm._ssrEscape(_vm._s(_vm.formatTime(_vm.ticket.createdAt))) + "</span></div> <div class=\"ticket-badges\" data-v-1f00ec88><span" + _vm._ssrClass(null, ['status-badge', `status-${_vm.ticket.status}`]) + " data-v-1f00ec88>" + _vm._ssrEscape("\n        " + _vm._s(_vm.formatStatus(_vm.ticket.status)) + "\n      ") + "</span> <span" + _vm._ssrClass(null, ['payment-badge', `payment-${_vm.ticket.paymentStatus}`]) + " data-v-1f00ec88>" + _vm._ssrEscape("\n        " + _vm._s(_vm.formatPaymentStatus(_vm.ticket.paymentStatus)) + "\n      ") + "</span></div></div> <div class=\"card-info\" data-v-1f00ec88><div class=\"info-row\" data-v-1f00ec88><span class=\"info-label\" data-v-1f00ec88>Customer:</span> <span class=\"info-value\" data-v-1f00ec88>" + _vm._ssrEscape(_vm._s(((_vm$ticket$client = _vm.ticket.client) === null || _vm$ticket$client === void 0 ? void 0 : _vm$ticket$client.name) || 'Walk-in')) + "</span></div> <div class=\"info-row\" data-v-1f00ec88><span class=\"info-label\" data-v-1f00ec88>Table:</span> <span class=\"info-value\" data-v-1f00ec88>" + _vm._ssrEscape(_vm._s(((_vm$ticket$table = _vm.ticket.table) === null || _vm$ticket$table === void 0 ? void 0 : _vm$ticket$table.number) || ((_vm$ticket$table2 = _vm.ticket.table) === null || _vm$ticket$table2 === void 0 ? void 0 : _vm$ticket$table2.name) || 'N/A')) + "</span></div> <div class=\"info-row\" data-v-1f00ec88><span class=\"info-label\" data-v-1f00ec88>Items:</span> <span class=\"info-value\" data-v-1f00ec88>" + _vm._ssrEscape(_vm._s(((_vm$ticket$ticketLine = _vm.ticket.ticketLines) === null || _vm$ticket$ticketLine === void 0 ? void 0 : _vm$ticket$ticketLine.length) || 0) + " items") + "</span></div></div> <div class=\"card-summary\" data-v-1f00ec88><div class=\"summary-total\" data-v-1f00ec88><span class=\"total-label\" data-v-1f00ec88>Total:</span> <span class=\"total-amount\" data-v-1f00ec88>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.ticket.total))) + "</span></div> " + (_vm.ticket.notes ? "<div class=\"ticket-notes-preview\" data-v-1f00ec88><span class=\"notes-icon\" data-v-1f00ec88>📝</span> <span class=\"notes-text\" data-v-1f00ec88>" + _vm._ssrEscape(_vm._s(_vm.truncateNotes(_vm.ticket.notes))) + "</span> <button title=\"Edit notes\" class=\"notes-edit-btn\" data-v-1f00ec88>\n        ✏️\n      </button></div>" : "<div class=\"ticket-notes-empty\" data-v-1f00ec88><button class=\"add-notes-btn\" data-v-1f00ec88><span class=\"btn-icon\" data-v-1f00ec88>📝</span> <span data-v-1f00ec88>Add Notes</span></button></div>") + "</div> <div class=\"card-actions\" data-v-1f00ec88>" + (_vm.ticket.status === 'ready' ? "<button class=\"action-btn btn-served\" data-v-1f00ec88>\n      Mark Served\n    </button>" : "<!---->") + " " + (_vm.ticket.status === 'served' && _vm.ticket.paymentStatus === 'pending' ? "<button class=\"action-btn btn-payment\" data-v-1f00ec88>\n      Process Payment\n    </button>" : "<!---->") + " <button" + _vm._ssrClass("action-btn btn-notes", {
    'has-notes': _vm.ticket.notes
  }) + " data-v-1f00ec88><span class=\"btn-icon\" data-v-1f00ec88>📝</span>" + _vm._ssrEscape("\n      " + _vm._s(_vm.ticket.notes ? 'Edit Notes' : 'Add Notes') + "\n    ") + "</button> <button class=\"action-btn btn-print\" data-v-1f00ec88>\n      Print\n    </button> " + (_vm.ticket.status !== 'cancel' ? "<button class=\"action-btn btn-cancel\" data-v-1f00ec88>\n      Cancel\n    </button>" : "<!---->") + " " + (!['paid', 'cancel', 'void'].includes(_vm.ticket.status) ? "<button" + _vm._ssrAttr("disabled", ['paid', 'cancel', 'void'].includes(_vm.ticket.status)) + " class=\"action-btn btn-add-item\" data-v-1f00ec88><span class=\"btn-icon\" data-v-1f00ec88>➕</span>\n      Add Item\n    </button>" : "<!---->") + "</div> " + (_vm.isUrgent ? "<div class=\"urgency-indicator\" data-v-1f00ec88><span class=\"urgency-icon\" data-v-1f00ec88>⚠️</span> <span class=\"urgency-text\" data-v-1f00ec88>" + _vm._ssrEscape(_vm._s(_vm.urgencyReason)) + "</span></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/tickets/TicketCard.vue?vue&type=template&id=1f00ec88&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tickets/TicketCard.vue?vue&type=script&lang=js
/* harmony default export */ var TicketCardvue_type_script_lang_js = ({
  name: 'TicketCard',
  props: {
    ticket: {
      type: Object,
      required: true
    }
  },
  computed: {
    isUrgent() {
      const now = new Date();
      const createdAt = new Date(this.ticket.createdAt);
      const minutesAgo = (now - createdAt) / (1000 * 60);
      return this.ticket.status === 'preparing' && minutesAgo > 15 || this.ticket.status === 'ready' && minutesAgo > 5;
    },
    urgencyReason() {
      const now = new Date();
      const createdAt = new Date(this.ticket.createdAt);
      const minutesAgo = Math.floor((now - createdAt) / (1000 * 60));
      if (this.ticket.status === 'preparing') {
        return `Preparing for ${minutesAgo} minutes`;
      } else if (this.ticket.status === 'ready') {
        return `Ready for ${minutesAgo} minutes`;
      }
      return '';
    }
  },
  methods: {
    handleAddItem() {
      var _this$ticket$table;
      this.$emit('add-item', {
        ticketId: this.ticket.id,
        tableId: this.ticket.tableId || ((_this$ticket$table = this.ticket.table) === null || _this$ticket$table === void 0 ? void 0 : _this$ticket$table.id) || null,
        ticket: this.ticket
      });
    },
    formatTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
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
        paid: 'Paid',
        cancel: 'Cancelled'
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
    truncateNotes(notes) {
      if (!notes) return '';
      return notes.length > 60 ? notes.substring(0, 60) + '...' : notes;
    }
  }
});
// CONCATENATED MODULE: ./components/tickets/TicketCard.vue?vue&type=script&lang=js
 /* harmony default export */ var tickets_TicketCardvue_type_script_lang_js = (TicketCardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/tickets/TicketCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(702)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tickets_TicketCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f00ec88",
  "e0a22c12"
  
)

/* harmony default export */ var TicketCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tickets-ticket-card.js.map