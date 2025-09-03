exports.ids = [4];
exports.modules = {

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(510);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("14cc85f4", content, true, context)
};

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(478);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_074f3214_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".audit-log-viewer[data-v-074f3214]{background:#fafafa;display:flex;flex-direction:column;height:100%}.filters[data-v-074f3214]{background:#fff;border-bottom:1px solid #e5e5e5;padding:16px}.filter-group[data-v-074f3214]{align-items:center;display:flex;gap:8px}.filter-input[data-v-074f3214]{background:#fff;border:1px solid #ddd;border-radius:6px;font-size:14px;padding:8px 12px}.filter-input[data-v-074f3214]:focus{border-color:#007bff;outline:none}.btn-clear[data-v-074f3214],.btn-search[data-v-074f3214]{border:none;border-radius:6px;cursor:pointer;font-size:14px;padding:8px 12px}.btn-search[data-v-074f3214]{background:#007bff;color:#fff}.btn-clear[data-v-074f3214]{background:#6c757d;color:#fff}.loading[data-v-074f3214]{align-items:center;color:#666;display:flex;font-size:16px;gap:12px;justify-content:center;padding:48px}.timeline[data-v-074f3214]{flex:1;overflow-y:auto;padding:20px;position:relative}.timeline-item[data-v-074f3214]{align-items:flex-start;display:flex;gap:16px;margin-bottom:20px;position:relative}.timeline-item[data-v-074f3214]:not(:last-child):before{background:#e5e5e5;bottom:-20px;content:\"\";left:19px;position:absolute;top:40px;width:2px}.timeline-dot[data-v-074f3214]{align-items:center;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:14px;height:38px;justify-content:center;position:relative;width:38px;z-index:1}.dot-create[data-v-074f3214]{background:#28a745}.dot-update[data-v-074f3214]{background:#007bff}.dot-delete[data-v-074f3214]{background:#dc3545}.dot-approve[data-v-074f3214]{background:#28a745}.dot-reject[data-v-074f3214]{background:#dc3545}.timeline-content[data-v-074f3214]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;flex:1;padding:16px;position:relative;transition:all .2s ease}.timeline-content[data-v-074f3214]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.timeline-item.expanded .timeline-content[data-v-074f3214]{border-bottom-left-radius:0;border-bottom-right-radius:0}.content-header[data-v-074f3214]{justify-content:space-between;margin-bottom:12px}.action-info[data-v-074f3214],.content-header[data-v-074f3214]{align-items:center;display:flex}.action-info[data-v-074f3214]{gap:12px}.action-badge[data-v-074f3214]{border-radius:4px;font-size:12px;font-weight:600;padding:4px 8px}.badge-create[data-v-074f3214]{background:#d4edda;color:#155724}.badge-update[data-v-074f3214]{background:#cce7ff;color:#004085}.badge-delete[data-v-074f3214]{background:#f8d7da;color:#721c24}.badge-approve[data-v-074f3214]{background:#d4edda;color:#155724}.badge-reject[data-v-074f3214]{background:#f8d7da;color:#721c24}.amount-change[data-v-074f3214]{background:#fff3cd;border-radius:4px;color:#856404;font-size:12px;font-weight:600;padding:2px 6px}.timestamp[data-v-074f3214]{color:#666;font-size:12px;font-weight:500}.content-main[data-v-074f3214]{justify-content:space-between;margin-bottom:8px}.content-main[data-v-074f3214],.user-info[data-v-074f3214]{align-items:center;display:flex}.user-info[data-v-074f3214]{color:#333;font-size:14px;font-weight:500;gap:6px}.user-info i[data-v-074f3214]{color:#666;font-size:12px}.invoice-info[data-v-074f3214]{align-items:center;display:flex;font-size:14px;gap:12px}.invoice-number[data-v-074f3214]{color:#007bff;font-weight:600}.vendor-name[data-v-074f3214]{color:#666}.content-reason[data-v-074f3214]{align-items:center;color:#666;display:flex;font-size:13px;font-style:italic;gap:6px;margin-bottom:8px}.content-reason i[data-v-074f3214]{font-size:11px}.expand-indicator[data-v-074f3214]{color:#666;font-size:12px;position:absolute;right:16px;top:16px}.expanded-details[data-v-074f3214]{background:#fff;border:1px solid #e5e5e5;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:none;margin-left:54px;padding:16px}.details-grid[data-v-074f3214]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:16px}.detail-item[data-v-074f3214]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.detail-item label[data-v-074f3214]{color:#666;font-size:12px;font-weight:500}.detail-item span[data-v-074f3214]{color:#333;font-size:13px}.amount[data-v-074f3214]{color:#28a745;font-weight:600}.status[data-v-074f3214]{border-radius:4px;font-size:11px;font-weight:500;padding:2px 6px}.status-draft[data-v-074f3214]{background:#e9ecef;color:#495057}.status-pending[data-v-074f3214]{background:#fff3cd;color:#856404}.status-approved[data-v-074f3214]{background:#d4edda;color:#155724}.status-paid[data-v-074f3214]{background:#cce7ff;color:#004085}.line-items-summary h4[data-v-074f3214]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.line-items[data-v-074f3214]{display:flex;flex-direction:column;gap:4px}.line-item[data-v-074f3214]{align-items:center;display:flex;font-size:12px;justify-content:space-between;padding:4px 0}.item-desc[data-v-074f3214]{color:#333}.item-amount[data-v-074f3214]{color:#666;font-weight:500}.more-items[data-v-074f3214]{background:#f8f9fa;border-radius:4px;font-size:11px;padding:4px}.empty-state[data-v-074f3214],.more-items[data-v-074f3214]{color:#666;text-align:center}.empty-state[data-v-074f3214]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:48px 20px}.empty-state i[data-v-074f3214]{color:#ddd;font-size:48px;margin-bottom:16px}.empty-state h3[data-v-074f3214]{font-size:18px;margin:0 0 8px}.empty-state p[data-v-074f3214]{font-size:14px;margin:0}.pagination[data-v-074f3214]{border-top:1px solid #e5e5e5;gap:16px;padding:16px}.page-btn[data-v-074f3214],.pagination[data-v-074f3214]{align-items:center;background:#fff;display:flex;justify-content:center}.page-btn[data-v-074f3214]{border:1px solid #ddd;border-radius:6px;cursor:pointer;height:32px;transition:all .2s;width:32px}.page-btn[data-v-074f3214]:hover:not(:disabled){background:#f8f9fa;border-color:#007bff}.page-btn[data-v-074f3214]:disabled{cursor:not-allowed;opacity:.5}.page-info[data-v-074f3214]{color:#666;font-size:14px;font-weight:500}@media (max-width:768px){.timeline[data-v-074f3214]{padding:16px}.content-main[data-v-074f3214]{align-items:flex-start;flex-direction:column;gap:8px}.details-grid[data-v-074f3214]{grid-template-columns:1fr}.expanded-details[data-v-074f3214]{margin-left:0}.timeline-item[data-v-074f3214]:not(:last-child):before{display:none}.filter-group[data-v-074f3214]{flex-wrap:wrap}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/view/index.vue?vue&type=template&id=074f3214&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "audit-log-viewer"
  }, [_vm.showFilters ? _vm._ssrNode("<div class=\"filters\" data-v-074f3214>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-074f3214>", "</div>", [_vm._ssrNode("<input type=\"date\" placeholder=\"From date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"filter-input\" data-v-074f3214> <input type=\"date\" placeholder=\"To date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"filter-input\" data-v-074f3214> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.action,
      expression: "filters.action"
    }],
    staticClass: "filter-input",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "action", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Actions")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CREATE"
    }
  }, [_vm._v("Created")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UPDATE"
    }
  }, [_vm._v("Updated")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DELETE"
    }
  }, [_vm._v("Deleted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "APPROVE"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "REJECT"
    }
  }, [_vm._v("Rejected")])]), _vm._ssrNode(" <button class=\"btn-search\" data-v-074f3214><i class=\"fas fa-search\" data-v-074f3214></i></button> <button class=\"btn-clear\" data-v-074f3214><i class=\"fas fa-times\" data-v-074f3214></i></button>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading\" data-v-074f3214><i class=\"fas fa-spinner fa-spin\" data-v-074f3214></i>\n    Loading...\n  </div>" : _vm.auditLogs.length > 0 ? "<div class=\"timeline\" data-v-074f3214>" + _vm._ssrList(_vm.auditLogs, function (log, index) {
    var _log$recordData, _log$recordData2, _log$recordData2$vend, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData9$curr, _log$recordData10, _log$recordData10$lin;
    return "<div" + _vm._ssrClass("timeline-item", {
      'expanded': _vm.expandedId === log.id
    }) + " data-v-074f3214><div" + _vm._ssrClass("timeline-dot", `dot-${log.action.toLowerCase()}`) + " data-v-074f3214><i" + _vm._ssrClass(null, _vm.getActionIcon(log.action)) + " data-v-074f3214></i></div> <div class=\"timeline-content\" data-v-074f3214><div class=\"content-header\" data-v-074f3214><div class=\"action-info\" data-v-074f3214><span" + _vm._ssrClass("action-badge", `badge-${log.action.toLowerCase()}`) + " data-v-074f3214>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getActionText(log.action)) + "\n            ") + "</span> " + (_vm.showAmountChange(log, index) ? "<span class=\"amount-change\" data-v-074f3214>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getAmountChange(log, index)) + "\n            ") + "</span>" : "<!---->") + "</div> <span class=\"timestamp\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatTime(log.auditDate))) + "</span></div> <div class=\"content-main\" data-v-074f3214><div class=\"user-info\" data-v-074f3214><i class=\"fas fa-user\" data-v-074f3214></i> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.getUserName(log))) + "</span></div> <div class=\"invoice-info\" data-v-074f3214><span class=\"invoice-number\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.invoiceNumber) || '-')) + "</span> <span class=\"vendor-name\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : (_log$recordData2$vend = _log$recordData2.vendor) === null || _log$recordData2$vend === void 0 ? void 0 : _log$recordData2$vend.name) || '-')) + "</span></div></div> " + (log.reason ? "<div class=\"content-reason\" data-v-074f3214><i class=\"fas fa-comment-alt\" data-v-074f3214></i>" + _vm._ssrEscape("\n          " + _vm._s(log.reason) + "\n        ") + "</div>" : "<!---->") + " <div class=\"expand-indicator\" data-v-074f3214><i" + _vm._ssrClass("fas", _vm.expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down') + " data-v-074f3214></i></div></div> " + (_vm.expandedId === log.id ? "<div class=\"expanded-details\" data-v-074f3214><div class=\"details-grid\" data-v-074f3214><div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Invoice #:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.invoiceNumber) || '-')) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Vendor Invoice #:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.vendorInvoiceNumber) || '-')) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Amount:</label> <span class=\"amount\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.totalAmount))) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Status:</label> <span" + _vm._ssrClass("status", `status-${(_log$recordData6 = log.recordData) === null || _log$recordData6 === void 0 ? void 0 : _log$recordData6.status}`) + " data-v-074f3214>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusText((_log$recordData7 = log.recordData) === null || _log$recordData7 === void 0 ? void 0 : _log$recordData7.status)) + "\n            ") + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Due Date:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.dueDate))) + "</span></div> <div class=\"detail-item\" data-v-074f3214><label data-v-074f3214>Currency:</label> <span data-v-074f3214>" + _vm._ssrEscape(_vm._s(((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : (_log$recordData9$curr = _log$recordData9.currency) === null || _log$recordData9$curr === void 0 ? void 0 : _log$recordData9$curr.code) || '-')) + "</span></div></div> " + ((_log$recordData10 = log.recordData) !== null && _log$recordData10 !== void 0 && (_log$recordData10$lin = _log$recordData10.lineItems) !== null && _log$recordData10$lin !== void 0 && _log$recordData10$lin.length ? "<div class=\"line-items-summary\" data-v-074f3214><h4 data-v-074f3214>" + _vm._ssrEscape("Line Items (" + _vm._s(log.recordData.lineItems.length) + ")") + "</h4> <div class=\"line-items\" data-v-074f3214>" + _vm._ssrList(log.recordData.lineItems.slice(0, 3), function (item) {
      return "<div class=\"line-item\" data-v-074f3214><span class=\"item-desc\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(item.description)) + "</span> <span class=\"item-amount\" data-v-074f3214>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(item.lineTotal))) + "</span></div>";
    }) + " " + (log.recordData.lineItems.length > 3 ? "<div class=\"more-items\" data-v-074f3214>" + _vm._ssrEscape("\n              +" + _vm._s(log.recordData.lineItems.length - 3) + " more items\n            ") + "</div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"empty-state\" data-v-074f3214><i class=\"fas fa-history\" data-v-074f3214></i> <h3 data-v-074f3214>No audit records found</h3> <p data-v-074f3214>No changes have been recorded for this invoice yet</p></div>") + " " + (_vm.pagination.pages > 1 ? "<div class=\"pagination\" data-v-074f3214><button" + _vm._ssrAttr("disabled", _vm.pagination.page <= 1) + " class=\"page-btn\" data-v-074f3214><i class=\"fas fa-chevron-left\" data-v-074f3214></i></button> <span class=\"page-info\" data-v-074f3214>" + _vm._ssrEscape("\n      " + _vm._s(_vm.pagination.page) + " / " + _vm._s(_vm.pagination.pages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.page >= _vm.pagination.pages) + " class=\"page-btn\" data-v-074f3214><i class=\"fas fa-chevron-right\" data-v-074f3214></i></button></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/view/index.vue?vue&type=template&id=074f3214&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/invoice/audit/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'AuditLogViewer',
  props: {
    invoiceId: {
      type: [Number, String],
      default: null
    },
    autoLoad: {
      type: Boolean,
      default: true
    },
    showFilters: {
      type: Boolean,
      default: true
    }
  },
  emits: ['logs-loaded'],
  data() {
    return {
      loading: false,
      auditLogs: [],
      expandedId: null,
      filters: {
        dateFrom: '',
        dateTo: '',
        action: ''
      },
      pagination: {
        page: 1,
        limit: 10,
        total: 0,
        pages: 0
      }
    };
  },
  mounted() {
    if (this.autoLoad) {
      this.loadAuditLogs();
    }
  },
  watch: {
    invoiceId() {
      if (this.autoLoad) {
        this.loadAuditLogs();
      }
    }
  },
  methods: {
    async loadAuditLogs(page = 1) {
      this.loading = true;
      try {
        // Simulate API call - replace with actual endpoint
        const response = await this.$axios.get(`/api/ap-invoices/audit/${this.invoiceId}`, {
          params: {
            page,
            limit: this.pagination.limit,
            ...this.filters
          }
        });
        if (response.data.success) {
          this.auditLogs = this.processAuditLogs(response.data.data);
          this.pagination = response.data.pagination || {
            page: 1,
            limit: 10,
            total: this.auditLogs.length,
            pages: Math.ceil(this.auditLogs.length / 10)
          };
          this.$emit('logs-loaded', this.auditLogs);
        }
      } catch (error) {
        var _this$$toast;
        console.error('Error loading audit logs:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load audit logs');
      } finally {
        this.loading = false;
      }
    },
    processAuditLogs(logs) {
      return logs.map(log => {
        if (typeof log.recordData === 'string') {
          try {
            log.recordData = JSON.parse(log.recordData);
          } catch (e) {
            console.warn('Failed to parse recordData:', e);
          }
        }
        return log;
      }).sort((a, b) => new Date(b.auditDate) - new Date(a.auditDate));
    },
    toggleExpand(logId) {
      this.expandedId = this.expandedId === logId ? null : logId;
    },
    changePage(page) {
      if (page >= 1 && page <= this.pagination.pages) {
        this.loadAuditLogs(page);
      }
    },
    clearFilters() {
      this.filters = {
        dateFrom: '',
        dateTo: '',
        action: ''
      };
      this.loadAuditLogs();
    },
    showAmountChange(log, index) {
      var _prevLog$recordData, _log$recordData;
      if (log.action !== 'UPDATE' || index === this.auditLogs.length - 1) return false;
      const prevLog = this.auditLogs[index + 1];
      if (!prevLog || !((_prevLog$recordData = prevLog.recordData) !== null && _prevLog$recordData !== void 0 && _prevLog$recordData.totalAmount) || !((_log$recordData = log.recordData) !== null && _log$recordData !== void 0 && _log$recordData.totalAmount)) return false;
      return prevLog.recordData.totalAmount !== log.recordData.totalAmount;
    },
    getAmountChange(log, index) {
      var _log$recordData2, _prevLog$recordData2;
      const prevLog = this.auditLogs[index + 1];
      const current = ((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.totalAmount) || 0;
      const previous = (prevLog === null || prevLog === void 0 ? void 0 : (_prevLog$recordData2 = prevLog.recordData) === null || _prevLog$recordData2 === void 0 ? void 0 : _prevLog$recordData2.totalAmount) || 0;
      const diff = current - previous;
      if (diff > 0) return `+${this.formatCurrency(diff)}`;
      if (diff < 0) return `-${this.formatCurrency(Math.abs(diff))}`;
      return '';
    },
    getActionIcon(action) {
      const icons = {
        'CREATE': 'fas fa-plus',
        'UPDATE': 'fas fa-edit',
        'DELETE': 'fas fa-trash',
        'APPROVE': 'fas fa-check',
        'REJECT': 'fas fa-times'
      };
      return icons[action] || 'fas fa-circle';
    },
    getActionText(action) {
      const actions = {
        'CREATE': 'Created',
        'UPDATE': 'Updated',
        'DELETE': 'Deleted',
        'APPROVE': 'Approved',
        'REJECT': 'Rejected'
      };
      return actions[action] || action;
    },
    getStatusText(status) {
      const statuses = {
        'draft': 'Draft',
        'pending': 'Pending',
        'approved': 'Approved',
        'rejected': 'Rejected',
        'paid': 'Paid',
        'cancelled': 'Cancelled'
      };
      return statuses[status] || status;
    },
    getUserName(log) {
      var _log$recordData3, _log$recordData3$make, _log$user;
      return ((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : (_log$recordData3$make = _log$recordData3.maker) === null || _log$recordData3$make === void 0 ? void 0 : _log$recordData3$make.cus_name) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.name) || 'Unknown';
    },
    formatTime(date) {
      if (!date) return '-';
      const now = new Date();
      const logDate = new Date(date);
      const diffHours = Math.abs(now - logDate) / (1000 * 60 * 60);
      if (diffHours < 24) {
        return logDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        });
      } else {
        return logDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        });
      }
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US');
    },
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var audit_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/invoice/audit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(509)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  audit_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "074f3214",
  "a9c014d2"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ap-invoice-audit-view.js.map