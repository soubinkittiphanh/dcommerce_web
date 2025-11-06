exports.ids = [146];
exports.modules = {

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(735);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6b191b82", content, true, context)
};

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCard_vue_vue_type_style_index_0_id_65711714_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(647);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCard_vue_vue_type_style_index_0_id_65711714_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCard_vue_vue_type_style_index_0_id_65711714_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCard_vue_vue_type_style_index_0_id_65711714_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketCard_vue_vue_type_style_index_0_id_65711714_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ticket-card[data-v-65711714]{background:#fff;border-left:4px solid #e0e0e0;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;margin-bottom:12px;padding:16px;transition:all .2s ease}.ticket-card[data-v-65711714]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.ticket-card.urgent[data-v-65711714]{background:linear-gradient(135deg,#fff8e1,#fff);border-left-color:#ff9800}.card-header[data-v-65711714]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:12px}.ticket-number[data-v-65711714]{display:flex;flex-direction:column}.ticket-id[data-v-65711714]{color:#1976d2;font-size:1.1rem;font-weight:700}.ticket-time[data-v-65711714]{color:#666;font-size:.875rem;margin-top:2px}.ticket-badges[data-v-65711714]{align-items:flex-end;display:flex;flex-direction:column;gap:6px}.payment-badge[data-v-65711714],.status-badge[data-v-65711714]{border-radius:12px;font-size:.75rem;font-weight:500;letter-spacing:.5px;padding:4px 8px;text-transform:uppercase}.status-pending[data-v-65711714]{background:#fff3e0;color:#f57c00}.status-preparing[data-v-65711714]{background:#e3f2fd;color:#1976d2}.status-ready[data-v-65711714]{background:#e8f5e8;color:#388e3c}.status-served[data-v-65711714]{background:#f3e5f5;color:#7b1fa2}.status-paid[data-v-65711714]{background:#e8f5e8;color:#2e7d32}.status-cancel[data-v-65711714]{background:#ffebee;color:#d32f2f}.payment-pending[data-v-65711714]{background:#fff3e0;color:#f57c00}.payment-paid[data-v-65711714]{background:#e8f5e8;color:#2e7d32}.payment-refunded[data-v-65711714]{background:#f3e5f5;color:#7b1fa2}.card-info[data-v-65711714]{margin-bottom:12px}.info-row[data-v-65711714]{display:flex;font-size:.875rem;justify-content:space-between;margin-bottom:4px}.info-label[data-v-65711714]{color:#666;font-weight:500}.info-value[data-v-65711714]{color:#333;font-weight:600}.text-error[data-v-65711714]{color:#d32f2f!important}.text-muted[data-v-65711714]{color:#9e9e9e!important;font-weight:400!important}.card-summary[data-v-65711714]{border-top:1px solid #f0f0f0;margin-bottom:12px;padding-top:8px}.summary-total[data-v-65711714]{align-items:center;display:flex;justify-content:space-between;margin-bottom:8px}.total-label[data-v-65711714]{color:#666;font-weight:500}.total-amount[data-v-65711714]{color:#1976d2;font-size:1.2rem;font-weight:700}.ticket-notes-preview[data-v-65711714]{align-items:center;background:#f8f9fa;border-left:3px solid #2196f3;border-radius:6px;display:flex;margin-top:8px;padding:8px}.notes-icon[data-v-65711714]{margin-right:8px}.notes-text[data-v-65711714]{color:#555;flex:1;font-size:.875rem;line-height:1.4}.notes-edit-btn[data-v-65711714]{background:none;border:none;border-radius:4px;cursor:pointer;margin-left:8px;padding:4px;transition:background-color .2s}.notes-edit-btn[data-v-65711714]:hover{background-color:#e3f2fd}.ticket-notes-empty[data-v-65711714]{margin-top:8px}.add-notes-btn[data-v-65711714]{align-items:center;background:#f5f5f5;border:1px dashed #ccc;border-radius:6px;color:#666;cursor:pointer;display:flex;font-size:.875rem;justify-content:center;padding:6px 12px;transition:all .2s;width:100%}.add-notes-btn[data-v-65711714]:hover{background:#e3f2fd;border-color:#2196f3;color:#1976d2}.btn-icon[data-v-65711714]{margin-right:6px}.card-actions[data-v-65711714]{display:flex;flex-wrap:wrap;gap:6px}.action-btn[data-v-65711714]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:flex;font-size:.75rem;font-weight:500;letter-spacing:.5px;padding:6px 12px;text-transform:uppercase;transition:all .2s}.btn-served[data-v-65711714]{background:#4caf50;color:#fff}.btn-served[data-v-65711714]:hover{background:#388e3c}.btn-payment[data-v-65711714]{background:#2196f3;color:#fff}.btn-payment[data-v-65711714]:hover{background:#1976d2}.btn-notes[data-v-65711714]{background:#ff9800;color:#fff}.btn-notes[data-v-65711714]:hover{background:#f57c00}.btn-notes.has-notes[data-v-65711714]{background:#4caf50}.btn-notes.has-notes[data-v-65711714]:hover{background:#388e3c}.btn-print-bar[data-v-65711714]{background:#9c27b0;color:#fff}.btn-print-bar[data-v-65711714]:hover{background:#7b1fa2}.btn-print[data-v-65711714]{background:#607d8b;color:#fff}.btn-print[data-v-65711714]:hover{background:#546e7a}.btn-cancel[data-v-65711714]{background:#f44336;color:#fff}.btn-cancel[data-v-65711714]:hover{background:#d32f2f}.btn-add-item[data-v-65711714]{background:#4caf50;color:#fff}.btn-add-item[data-v-65711714]:hover:not(:disabled){background:#388e3c}.btn-add-item[data-v-65711714]:disabled{background:#ccc;color:#666;cursor:not-allowed}.urgency-indicator[data-v-65711714]{align-items:center;background:#fff3e0;border-left:3px solid #ff9800;border-radius:6px;display:flex;margin-top:8px;padding:6px 8px}.urgency-icon[data-v-65711714]{margin-right:6px}.urgency-text[data-v-65711714]{color:#e65100;font-size:.75rem;font-weight:500}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tickets/TicketCard.vue?vue&type=template&id=65711714&scoped=true
var render = function render() {
  var _vm$ticket$client, _vm$ticket$table, _vm$ticket$table2, _vm$ticket$ticketLine, _vm$ticket$createUser, _vm$ticket$createUser2, _vm$ticket$cancelUser, _vm$ticket$cancelUser2, _vm$ticket$updateUser, _vm$ticket$updateUser2;
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
  }, [_vm._ssrNode("<div class=\"card-header\" data-v-65711714><div class=\"ticket-number\" data-v-65711714><span class=\"ticket-id\" data-v-65711714>" + _vm._ssrEscape("Q" + _vm._s(_vm.getQueNo(_vm.ticket.ticketNumber)) + " #" + _vm._s(_vm.ticket.ticketNumber || _vm.ticket.id)) + "</span> <span class=\"ticket-time\" data-v-65711714>" + _vm._ssrEscape(_vm._s(_vm.formatTime(_vm.ticket.createdAt))) + "</span></div> <div class=\"ticket-badges\" data-v-65711714><span" + _vm._ssrClass(null, ['status-badge', `status-${_vm.ticket.status}`]) + " data-v-65711714>" + _vm._ssrEscape("\n        " + _vm._s(_vm.formatStatus(_vm.ticket.status)) + "\n      ") + "</span> <span" + _vm._ssrClass(null, ['payment-badge', `payment-${_vm.ticket.paymentStatus}`]) + " data-v-65711714>" + _vm._ssrEscape("\n        " + _vm._s(_vm.formatPaymentStatus(_vm.ticket.paymentStatus)) + "\n      ") + "</span></div></div> <div class=\"card-info\" data-v-65711714><div class=\"info-row\" data-v-65711714><span class=\"info-label\" data-v-65711714>Customer:</span> <span class=\"info-value\" data-v-65711714>" + _vm._ssrEscape(_vm._s(((_vm$ticket$client = _vm.ticket.client) === null || _vm$ticket$client === void 0 ? void 0 : _vm$ticket$client.name) || 'Walk-in')) + "</span></div> <div class=\"info-row\" data-v-65711714><span class=\"info-label\" data-v-65711714>Table:</span> <span class=\"info-value\" data-v-65711714>" + _vm._ssrEscape(_vm._s(((_vm$ticket$table = _vm.ticket.table) === null || _vm$ticket$table === void 0 ? void 0 : _vm$ticket$table.number) || ((_vm$ticket$table2 = _vm.ticket.table) === null || _vm$ticket$table2 === void 0 ? void 0 : _vm$ticket$table2.name) || 'N/A')) + "</span></div> <div class=\"info-row\" data-v-65711714><span class=\"info-label\" data-v-65711714>Items:</span> <span class=\"info-value\" data-v-65711714>" + _vm._ssrEscape(_vm._s(((_vm$ticket$ticketLine = _vm.ticket.ticketLines) === null || _vm$ticket$ticketLine === void 0 ? void 0 : _vm$ticket$ticketLine.length) || 0) + " items") + "</span></div> " + (_vm.ticket.createUser ? "<div class=\"info-row\" data-v-65711714><span class=\"info-label\" data-v-65711714>Created by:</span> <span class=\"info-value\" data-v-65711714>" + _vm._ssrEscape(_vm._s(((_vm$ticket$createUser = _vm.ticket.createUser) === null || _vm$ticket$createUser === void 0 ? void 0 : _vm$ticket$createUser.cus_name) || ((_vm$ticket$createUser2 = _vm.ticket.createUser) === null || _vm$ticket$createUser2 === void 0 ? void 0 : _vm$ticket$createUser2.name) || 'N/A')) + "</span></div>" : "<!---->") + " " + (_vm.ticket.cancelUser ? "<div class=\"info-row\" data-v-65711714><span class=\"info-label\" data-v-65711714>Cancelled by:</span> <span class=\"info-value text-error\" data-v-65711714>" + _vm._ssrEscape(_vm._s(((_vm$ticket$cancelUser = _vm.ticket.cancelUser) === null || _vm$ticket$cancelUser === void 0 ? void 0 : _vm$ticket$cancelUser.cus_name) || ((_vm$ticket$cancelUser2 = _vm.ticket.cancelUser) === null || _vm$ticket$cancelUser2 === void 0 ? void 0 : _vm$ticket$cancelUser2.name) || 'N/A')) + "</span></div>" : "<!---->") + " " + (_vm.ticket.updateUser && _vm.ticket.status !== 'pending' ? "<div class=\"info-row\" data-v-65711714><span class=\"info-label\" data-v-65711714>Updated by:</span> <span class=\"info-value text-muted\" data-v-65711714>" + _vm._ssrEscape(_vm._s(((_vm$ticket$updateUser = _vm.ticket.updateUser) === null || _vm$ticket$updateUser === void 0 ? void 0 : _vm$ticket$updateUser.cus_name) || ((_vm$ticket$updateUser2 = _vm.ticket.updateUser) === null || _vm$ticket$updateUser2 === void 0 ? void 0 : _vm$ticket$updateUser2.name) || 'N/A')) + "</span></div>" : "<!---->") + "</div> <div class=\"card-summary\" data-v-65711714><div class=\"summary-total\" data-v-65711714><span class=\"total-label\" data-v-65711714>Total:</span> <span class=\"total-amount\" data-v-65711714>" + _vm._ssrEscape(_vm._s(_vm.formatPrice(_vm.ticket.total))) + "</span></div> " + (_vm.ticket.notes ? "<div class=\"ticket-notes-preview\" data-v-65711714><span class=\"notes-icon\" data-v-65711714>📝</span> <span class=\"notes-text\" data-v-65711714>" + _vm._ssrEscape(_vm._s(_vm.truncateNotes(_vm.ticket.notes))) + "</span> <button title=\"Edit notes\" class=\"notes-edit-btn\" data-v-65711714>\n        ✏️\n      </button></div>" : "<div class=\"ticket-notes-empty\" data-v-65711714><button class=\"add-notes-btn\" data-v-65711714><span class=\"btn-icon\" data-v-65711714>📝</span> <span data-v-65711714>Add Notes</span></button></div>") + "</div> <div class=\"card-actions\" data-v-65711714>" + (_vm.ticket.status === 'ready' ? "<button class=\"action-btn btn-served\" data-v-65711714>\n      Mark Served\n    </button>" : "<!---->") + " " + (_vm.ticket.status === 'served' && _vm.ticket.paymentStatus === 'pending' ? "<button class=\"action-btn btn-payment\" data-v-65711714>\n      Process Payment\n    </button>" : "<!---->") + " <button" + _vm._ssrClass("action-btn btn-notes", {
    'has-notes': _vm.ticket.notes
  }) + " data-v-65711714><span class=\"btn-icon\" data-v-65711714>📝</span>" + _vm._ssrEscape("\n      " + _vm._s(_vm.ticket.notes ? 'Edit Notes' : 'Add Notes') + "\n    ") + "</button> " + (!['paid', 'refunded', 'cancel'].includes(_vm.ticket.status) ? "<button title=\"Print Bar/Kitchen Ticket\" class=\"action-btn btn-print-bar\" data-v-65711714><span class=\"btn-icon\" data-v-65711714>🍹</span>\n      Print Bar\n    </button>" : "<!---->") + " <button class=\"action-btn btn-print\" data-v-65711714><span class=\"btn-icon\" data-v-65711714>🖨️</span>\n      Print\n    </button> " + (_vm.ticket.status !== 'cancel' ? "<button class=\"action-btn btn-cancel\" data-v-65711714>\n      Cancel\n    </button>" : "<!---->") + " " + (!['paid', 'cancel', 'void'].includes(_vm.ticket.status) ? "<button" + _vm._ssrAttr("disabled", ['paid', 'cancel', 'void'].includes(_vm.ticket.status)) + " class=\"action-btn btn-add-item\" data-v-65711714><span class=\"btn-icon\" data-v-65711714>➕</span>\n      Add Item\n    </button>" : "<!---->") + "</div> " + (_vm.isUrgent ? "<div class=\"urgency-indicator\" data-v-65711714><span class=\"urgency-icon\" data-v-65711714>⚠️</span> <span class=\"urgency-text\" data-v-65711714>" + _vm._ssrEscape(_vm._s(_vm.urgencyReason)) + "</span></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/tickets/TicketCard.vue?vue&type=template&id=65711714&scoped=true

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
    getQueNo(ticketNumber) {
      var _ticketNumber$split$;
      const parts = ticketNumber === null || ticketNumber === void 0 ? void 0 : (_ticketNumber$split$ = ticketNumber.split('-')[0]) === null || _ticketNumber$split$ === void 0 ? void 0 : _ticketNumber$split$.split('/');
      return (parts === null || parts === void 0 ? void 0 : parts.length) === 2 ? (parseInt(parts[0]) * parseInt(parts[1])).toString() : '';
    },
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
  
  var style0 = __webpack_require__(734)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tickets_TicketCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "65711714",
  "e0a22c12"
  
)

/* harmony default export */ var TicketCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tickets-ticket-card.js.map