exports.ids = [10];
exports.modules = {

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(506);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("11c73693", content, true, context)
};

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e17086e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invoice-audit-viewer[data-v-6e17086e]{background:#fafafa;display:flex;flex-direction:column;height:100%}.filters[data-v-6e17086e]{background:#fff;border-bottom:1px solid #e5e5e5;padding:16px}.filter-group[data-v-6e17086e]{align-items:center;display:flex;gap:8px}.filter-input[data-v-6e17086e]{background:#fff;border:1px solid #ddd;border-radius:6px;font-size:14px;min-width:120px;padding:8px 12px}.filter-input[data-v-6e17086e]:focus{border-color:#667eea;outline:none}.btn-clear[data-v-6e17086e],.btn-search[data-v-6e17086e]{border:none;border-radius:6px;cursor:pointer;font-size:14px;padding:8px 12px}.btn-search[data-v-6e17086e]{background:#667eea;color:#fff}.btn-clear[data-v-6e17086e]{background:#6c757d;color:#fff}.loading[data-v-6e17086e]{align-items:center;color:#666;display:flex;font-size:16px;gap:12px;justify-content:center;padding:48px}.timeline[data-v-6e17086e]{flex:1;overflow-y:auto;padding:20px;position:relative}.timeline-item[data-v-6e17086e]{align-items:flex-start;display:flex;gap:16px;margin-bottom:20px;position:relative}.timeline-item[data-v-6e17086e]:not(:last-child):before{background:#e5e5e5;bottom:-20px;content:\"\";left:19px;position:absolute;top:40px;width:2px}.timeline-dot[data-v-6e17086e]{align-items:center;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:14px;height:38px;justify-content:center;position:relative;width:38px;z-index:1}.dot-create[data-v-6e17086e]{background:#28a745}.dot-update[data-v-6e17086e]{background:#667eea}.dot-delete[data-v-6e17086e]{background:#dc3545}.dot-approve[data-v-6e17086e]{background:#28a745}.dot-reject[data-v-6e17086e]{background:#dc3545}.dot-submit[data-v-6e17086e]{background:#17a2b8}.dot-cancel[data-v-6e17086e]{background:#ffc107}.timeline-content[data-v-6e17086e]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;flex:1;padding:16px;position:relative;transition:all .2s ease}.timeline-content[data-v-6e17086e]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.timeline-item.expanded .timeline-content[data-v-6e17086e]{border-bottom-left-radius:0;border-bottom-right-radius:0}.content-header[data-v-6e17086e]{justify-content:space-between;margin-bottom:12px}.action-info[data-v-6e17086e],.content-header[data-v-6e17086e]{align-items:center;display:flex}.action-info[data-v-6e17086e]{gap:12px}.action-badge[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:600;padding:4px 8px}.badge-create[data-v-6e17086e]{background:#d4edda;color:#155724}.badge-update[data-v-6e17086e]{background:#e6efff;color:#004085}.badge-delete[data-v-6e17086e]{background:#f8d7da;color:#721c24}.badge-approve[data-v-6e17086e]{background:#d4edda;color:#155724}.badge-reject[data-v-6e17086e]{background:#f8d7da;color:#721c24}.badge-submit[data-v-6e17086e]{background:#d1ecf1;color:#0c5460}.amount-change[data-v-6e17086e],.badge-cancel[data-v-6e17086e]{background:#fff3cd;color:#856404}.amount-change[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:600;padding:2px 6px}.timestamp[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.content-main[data-v-6e17086e]{justify-content:space-between;margin-bottom:8px}.content-main[data-v-6e17086e],.user-info[data-v-6e17086e]{align-items:center;display:flex}.user-info[data-v-6e17086e]{color:#333;font-size:14px;font-weight:500;gap:6px}.user-info i[data-v-6e17086e]{color:#666;font-size:12px}.invoice-info[data-v-6e17086e]{align-items:center;display:flex;font-size:14px;gap:12px}.invoice-number[data-v-6e17086e]{color:#667eea;font-size:15px;font-weight:600}.invoice-amount[data-v-6e17086e]{color:#28a745;font-size:15px;font-weight:600}.invoice-date[data-v-6e17086e]{color:#666;font-size:13px}.content-status[data-v-6e17086e]{justify-content:space-between;margin-bottom:8px}.content-status[data-v-6e17086e],.status-badge[data-v-6e17086e]{align-items:center;display:flex}.status-badge[data-v-6e17086e]{border-radius:4px;font-size:12px;font-weight:500;gap:4px;padding:3px 8px}.status-badge i[data-v-6e17086e]{font-size:8px}.status-draft[data-v-6e17086e]{background:#e9ecef;color:#495057}.status-sent[data-v-6e17086e]{background:#d1ecf1;color:#0c5460}.status-paid[data-v-6e17086e]{background:#d4edda;color:#155724}.status-overdue[data-v-6e17086e]{background:#f8d7da;color:#721c24}.status-cancelled[data-v-6e17086e]{background:#e2e3e5;color:#383d41}.status-pending[data-v-6e17086e]{background:#fff3cd;color:#856404}.status-approved[data-v-6e17086e]{background:#d4edda;color:#155724}.status-rejected[data-v-6e17086e]{background:#f8d7da;color:#721c24}.line-items-count[data-v-6e17086e]{background:#f8f9fa;border-radius:3px;color:#666;font-size:12px;padding:2px 6px}.content-preview[data-v-6e17086e]{display:flex;font-size:13px;gap:12px;margin-bottom:8px}.description[data-v-6e17086e]{color:#666}.content-reason[data-v-6e17086e]{align-items:center;color:#666;display:flex;font-size:13px;font-style:italic;gap:6px;margin-bottom:8px}.content-reason i[data-v-6e17086e]{font-size:11px}.expand-indicator[data-v-6e17086e]{color:#666;font-size:12px;position:absolute;right:16px;top:16px}.expanded-details[data-v-6e17086e]{background:#fff;border:1px solid #e5e5e5;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:none;margin-left:54px;padding:16px}.details-grid[data-v-6e17086e]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-bottom:16px}.detail-item[data-v-6e17086e]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.detail-item label[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.detail-item span[data-v-6e17086e]{color:#333;font-size:13px}.amount[data-v-6e17086e]{color:#28a745;font-weight:600}.status[data-v-6e17086e]{border-radius:4px;font-size:11px;font-weight:500;padding:2px 6px}.description-section[data-v-6e17086e]{margin-bottom:16px}.description-section h4[data-v-6e17086e]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.description-section p[data-v-6e17086e]{color:#666;font-size:13px;line-height:1.4;margin:0}.line-items-section h4[data-v-6e17086e]{align-items:center;border-bottom:1px solid #e5e5e5;color:#333;display:flex;font-size:14px;justify-content:space-between;margin:0 0 12px;padding-bottom:4px}.total-amount[data-v-6e17086e]{color:#28a745;font-size:13px;font-weight:600}.line-items-list[data-v-6e17086e]{display:flex;flex-direction:column;gap:8px}.line-item[data-v-6e17086e]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;padding:12px}.line-item-header[data-v-6e17086e]{align-items:center;display:flex;justify-content:space-between;margin-bottom:6px}.line-number[data-v-6e17086e]{color:#333;font-size:13px;font-weight:600}.line-total[data-v-6e17086e]{color:#28a745;font-size:14px;font-weight:600}.line-item-details[data-v-6e17086e]{display:flex;flex-direction:column;gap:6px}.line-description[data-v-6e17086e]{color:#333;font-size:13px;font-weight:500}.line-quantities[data-v-6e17086e]{color:#666;display:flex;font-size:12px;gap:12px}.quantity[data-v-6e17086e],.tax-rate[data-v-6e17086e],.unit-price[data-v-6e17086e]{background:#e9ecef;border-radius:3px;padding:2px 6px}.approval-section h4[data-v-6e17086e]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.approval-grid[data-v-6e17086e]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.approval-item[data-v-6e17086e]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.approval-item label[data-v-6e17086e]{color:#666;font-size:12px;font-weight:500}.approval-item span[data-v-6e17086e]{color:#333;font-size:13px}.empty-state[data-v-6e17086e]{align-items:center;color:#666;display:flex;flex-direction:column;justify-content:center;padding:48px 20px;text-align:center}.empty-state i[data-v-6e17086e]{color:#ddd;font-size:48px;margin-bottom:16px}.empty-state h3[data-v-6e17086e]{font-size:18px;margin:0 0 8px}.empty-state p[data-v-6e17086e]{font-size:14px;margin:0}.pagination[data-v-6e17086e]{border-top:1px solid #e5e5e5;gap:16px;padding:16px}.page-btn[data-v-6e17086e],.pagination[data-v-6e17086e]{align-items:center;background:#fff;display:flex;justify-content:center}.page-btn[data-v-6e17086e]{border:1px solid #ddd;border-radius:6px;cursor:pointer;height:32px;transition:all .2s;width:32px}.page-btn[data-v-6e17086e]:hover:not(:disabled){background:#f8f9fa;border-color:#667eea}.page-btn[data-v-6e17086e]:disabled{cursor:not-allowed;opacity:.5}.page-info[data-v-6e17086e]{color:#666;font-size:14px;font-weight:500}@media (max-width:768px){.timeline[data-v-6e17086e]{padding:16px}.content-main[data-v-6e17086e]{gap:8px}.content-main[data-v-6e17086e],.content-status[data-v-6e17086e]{align-items:flex-start;flex-direction:column}.content-status[data-v-6e17086e]{gap:6px}.approval-grid[data-v-6e17086e],.details-grid[data-v-6e17086e]{grid-template-columns:1fr}.expanded-details[data-v-6e17086e]{margin-left:0}.timeline-item[data-v-6e17086e]:not(:last-child):before{display:none}.filter-group[data-v-6e17086e]{flex-wrap:wrap}.line-item-header[data-v-6e17086e],.line-items-section h4[data-v-6e17086e]{align-items:flex-start;flex-direction:column;gap:4px}.line-quantities[data-v-6e17086e]{flex-wrap:wrap}}@media (max-width:480px){.invoice-info[data-v-6e17086e]{align-items:flex-start}.content-preview[data-v-6e17086e],.invoice-info[data-v-6e17086e]{flex-direction:column;gap:4px}.filter-input[data-v-6e17086e]{min-width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/view/index.vue?vue&type=template&id=6e17086e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "invoice-audit-viewer"
  }, [_vm.showFilters ? _vm._ssrNode("<div class=\"filters\" data-v-6e17086e>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-6e17086e>", "</div>", [_vm._ssrNode("<input type=\"date\" placeholder=\"From date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"filter-input\" data-v-6e17086e> <input type=\"date\" placeholder=\"To date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"filter-input\" data-v-6e17086e> "), _c('select', {
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
  }, [_vm._v("Rejected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SUBMIT"
    }
  }, [_vm._v("Submitted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CANCEL"
    }
  }, [_vm._v("Cancelled")])]), _vm._ssrNode(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.status,
      expression: "filters.status"
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
        _vm.$set(_vm.filters, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "draft"
    }
  }, [_vm._v("Draft")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sent"
    }
  }, [_vm._v("Sent")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("Paid")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "overdue"
    }
  }, [_vm._v("Overdue")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("Cancelled")])]), _vm._ssrNode(" <button class=\"btn-search\" data-v-6e17086e><i class=\"fas fa-search\" data-v-6e17086e></i></button> <button class=\"btn-clear\" data-v-6e17086e><i class=\"fas fa-times\" data-v-6e17086e></i></button>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading\" data-v-6e17086e><i class=\"fas fa-spinner fa-spin\" data-v-6e17086e></i>\n    Loading invoice history...\n  </div>" : _vm.auditLogs.length > 0 ? "<div class=\"timeline\" data-v-6e17086e>" + _vm._ssrList(_vm.auditLogs, function (log, index) {
    var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData6$line, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData10, _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData19, _log$recordData20, _log$recordData21, _log$recordData22, _log$recordData22$lin, _log$recordData23, _log$recordData24;
    return "<div" + _vm._ssrClass("timeline-item", {
      'expanded': _vm.expandedId === log.id
    }) + " data-v-6e17086e><div" + _vm._ssrClass("timeline-dot", `dot-${log.action.toLowerCase()}`) + " data-v-6e17086e><i" + _vm._ssrClass(null, _vm.getActionIcon(log.action)) + " data-v-6e17086e></i></div> <div class=\"timeline-content\" data-v-6e17086e><div class=\"content-header\" data-v-6e17086e><div class=\"action-info\" data-v-6e17086e><span" + _vm._ssrClass("action-badge", `badge-${log.action.toLowerCase()}`) + " data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getActionText(log.action)) + "\n            ") + "</span> " + (_vm.showAmountChange(log, index) ? "<span class=\"amount-change\" data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getAmountChange(log, index)) + "\n            ") + "</span>" : "<!---->") + "</div> <span class=\"timestamp\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatTime(log.auditDate))) + "</span></div> <div class=\"content-main\" data-v-6e17086e><div class=\"user-info\" data-v-6e17086e><i class=\"fas fa-user\" data-v-6e17086e></i> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.getUserName(log))) + "</span></div> <div class=\"invoice-info\" data-v-6e17086e><span class=\"invoice-number\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.invoiceNumber) || 'N/A')) + "</span> <span class=\"invoice-amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.totalAmount))) + "</span> <span class=\"invoice-date\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.invoiceDate))) + "</span></div></div> <div class=\"content-status\" data-v-6e17086e><span" + _vm._ssrClass("status-badge", `status-${(_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status}`) + " data-v-6e17086e><i class=\"fas fa-circle\" data-v-6e17086e></i>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getStatusText((_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.status)) + "\n          ") + "</span> " + ((_log$recordData6 = log.recordData) !== null && _log$recordData6 !== void 0 && (_log$recordData6$line = _log$recordData6.lineItems) !== null && _log$recordData6$line !== void 0 && _log$recordData6$line.length ? "<span class=\"line-items-count\" data-v-6e17086e>" + _vm._ssrEscape("\n            " + _vm._s(log.recordData.lineItems.length) + " line item" + _vm._s(log.recordData.lineItems.length > 1 ? 's' : '') + "\n          ") + "</span>" : "<!---->") + "</div> " + (log.reason ? "<div class=\"content-reason\" data-v-6e17086e><i class=\"fas fa-comment-alt\" data-v-6e17086e></i>" + _vm._ssrEscape("\n          " + _vm._s(log.reason) + "\n        ") + "</div>" : "<!---->") + " " + ((_log$recordData7 = log.recordData) !== null && _log$recordData7 !== void 0 && _log$recordData7.description ? "<div class=\"content-preview\" data-v-6e17086e><span class=\"description\" data-v-6e17086e>" + _vm._ssrEscape("\n            " + _vm._s(_vm.truncateText(log.recordData.description, 50)) + "\n          ") + "</span></div>" : "<!---->") + " <div class=\"expand-indicator\" data-v-6e17086e><i" + _vm._ssrClass("fas", _vm.expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down') + " data-v-6e17086e></i></div></div> " + (_vm.expandedId === log.id ? "<div class=\"expanded-details\" data-v-6e17086e><div class=\"details-grid\" data-v-6e17086e><div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.invoiceId || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice Number:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.invoiceNumber) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Invoice Date:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.invoiceDate))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Due Date:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.dueDate))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Total Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.totalAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Tax Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.taxAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Net Amount:</label> <span class=\"amount\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.netAmount))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Status:</label> <span" + _vm._ssrClass("status", `status-${(_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.status}`) + " data-v-6e17086e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusText((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.status)) + "\n            ") + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Client ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.clientId) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Currency ID:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.currencyId) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Exchange Rate:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(((_log$recordData18 = log.recordData) === null || _log$recordData18 === void 0 ? void 0 : _log$recordData18.exchangeRate) || '-')) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Created:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData19 = log.recordData) === null || _log$recordData19 === void 0 ? void 0 : _log$recordData19.createdAt))) + "</span></div> <div class=\"detail-item\" data-v-6e17086e><label data-v-6e17086e>Last Updated:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData20 = log.recordData) === null || _log$recordData20 === void 0 ? void 0 : _log$recordData20.updateTimestamp))) + "</span></div></div> " + ((_log$recordData21 = log.recordData) !== null && _log$recordData21 !== void 0 && _log$recordData21.description ? "<div class=\"description-section\" data-v-6e17086e><h4 data-v-6e17086e>Description</h4> <p data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.description)) + "</p></div>" : "<!---->") + " " + ((_log$recordData22 = log.recordData) !== null && _log$recordData22 !== void 0 && (_log$recordData22$lin = _log$recordData22.lineItems) !== null && _log$recordData22$lin !== void 0 && _log$recordData22$lin.length ? "<div class=\"line-items-section\" data-v-6e17086e><h4 data-v-6e17086e>" + _vm._ssrEscape("\n            Line Items (" + _vm._s(log.recordData.lineItems.length) + ")\n            ") + "<span class=\"total-amount\" data-v-6e17086e>" + _vm._ssrEscape("\n              Total: " + _vm._s(_vm.formatCurrency(_vm.getTotalLineItemsAmount(log.recordData.lineItems))) + "\n            ") + "</span></h4> <div class=\"line-items-list\" data-v-6e17086e>" + _vm._ssrList(log.recordData.lineItems, function (lineItem) {
      return "<div class=\"line-item\" data-v-6e17086e><div class=\"line-item-header\" data-v-6e17086e><span class=\"line-number\" data-v-6e17086e>" + _vm._ssrEscape("Line #" + _vm._s(lineItem.lineNumber)) + "</span> <span class=\"line-total\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(lineItem.lineTotal))) + "</span></div> <div class=\"line-item-details\" data-v-6e17086e><div class=\"line-description\" data-v-6e17086e>" + _vm._ssrEscape(_vm._s(lineItem.description || 'No description')) + "</div> <div class=\"line-quantities\" data-v-6e17086e><span class=\"quantity\" data-v-6e17086e>" + _vm._ssrEscape("Qty: " + _vm._s(lineItem.quantity)) + "</span> <span class=\"unit-price\" data-v-6e17086e>" + _vm._ssrEscape("Unit Price: " + _vm._s(_vm.formatCurrency(lineItem.unitPrice))) + "</span> <span class=\"tax-rate\" data-v-6e17086e>" + _vm._ssrEscape("Tax: " + _vm._s(lineItem.taxRate) + "%") + "</span></div></div></div>";
    }) + "</div></div>" : "<!---->") + " " + ((_log$recordData23 = log.recordData) !== null && _log$recordData23 !== void 0 && _log$recordData23.maker || (_log$recordData24 = log.recordData) !== null && _log$recordData24 !== void 0 && _log$recordData24.checker ? "<div class=\"approval-section\" data-v-6e17086e><h4 data-v-6e17086e>Approval Information</h4> <div class=\"approval-grid\" data-v-6e17086e>" + (log.recordData.maker ? "<div class=\"approval-item\" data-v-6e17086e><label data-v-6e17086e>Maker:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.maker.cus_name || log.recordData.maker.name || '-')) + "</span></div>" : "<!---->") + " " + (log.recordData.checker ? "<div class=\"approval-item\" data-v-6e17086e><label data-v-6e17086e>Checker:</label> <span data-v-6e17086e>" + _vm._ssrEscape(_vm._s(log.recordData.checker.cus_name || log.recordData.checker.name || '-')) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"empty-state\" data-v-6e17086e><i class=\"fas fa-history\" data-v-6e17086e></i> <h3 data-v-6e17086e>No invoice audit records found</h3> <p data-v-6e17086e>No changes have been recorded for this invoice yet</p></div>") + " " + (_vm.pagination.pages > 1 ? "<div class=\"pagination\" data-v-6e17086e><button" + _vm._ssrAttr("disabled", _vm.pagination.page <= 1) + " class=\"page-btn\" data-v-6e17086e><i class=\"fas fa-chevron-left\" data-v-6e17086e></i></button> <span class=\"page-info\" data-v-6e17086e>" + _vm._ssrEscape("\n      " + _vm._s(_vm.pagination.page) + " / " + _vm._s(_vm.pagination.pages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.page >= _vm.pagination.pages) + " class=\"page-btn\" data-v-6e17086e><i class=\"fas fa-chevron-right\" data-v-6e17086e></i></button></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue?vue&type=template&id=6e17086e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'InvoiceAuditViewer',
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
        action: '',
        status: ''
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
        // API call for invoice audit logs
        const response = await this.$axios.get(`/api/ar-invoices/audit/${this.invoiceId}`);
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
        console.error('Error loading invoice audit logs:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load invoice audit logs');
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
        action: '',
        status: ''
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
    getTotalLineItemsAmount(lineItems) {
      return lineItems.reduce((total, item) => total + (item.lineTotal || 0), 0);
    },
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    getActionIcon(action) {
      const icons = {
        'CREATE': 'fas fa-plus',
        'UPDATE': 'fas fa-edit',
        'DELETE': 'fas fa-trash',
        'APPROVE': 'fas fa-check',
        'REJECT': 'fas fa-times',
        'SUBMIT': 'fas fa-paper-plane',
        'CANCEL': 'fas fa-ban'
      };
      return icons[action] || 'fas fa-circle';
    },
    getActionText(action) {
      const actions = {
        'CREATE': 'Created',
        'UPDATE': 'Updated',
        'DELETE': 'Deleted',
        'APPROVE': 'Approved',
        'REJECT': 'Rejected',
        'SUBMIT': 'Submitted',
        'CANCEL': 'Cancelled'
      };
      return actions[action] || action;
    },
    getStatusText(status) {
      const statuses = {
        'draft': 'Draft',
        'sent': 'Sent',
        'paid': 'Paid',
        'overdue': 'Overdue',
        'cancelled': 'Cancelled',
        'pending': 'Pending Approval',
        'approved': 'Approved',
        'rejected': 'Rejected'
      };
      return statuses[status] || status;
    },
    getUserName(log) {
      var _log$recordData3, _log$recordData3$make, _log$recordData4, _log$recordData4$chec, _log$user;
      return ((_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : (_log$recordData3$make = _log$recordData3.maker) === null || _log$recordData3$make === void 0 ? void 0 : _log$recordData3$make.cus_name) || ((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : (_log$recordData4$chec = _log$recordData4.checker) === null || _log$recordData4$chec === void 0 ? void 0 : _log$recordData4$chec.cus_name) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.name) || 'Unknown User';
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
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatDateTime(date) {
      if (!date) return '-';
      return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(amount);
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var audit_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(505)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  audit_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e17086e",
  "a70d6656"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ar-invoice-audit-view.js.map