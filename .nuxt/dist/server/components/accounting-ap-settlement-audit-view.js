exports.ids = [8];
exports.modules = {

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(497);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("355eff84", content, true, context)
};

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(470);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-audit-viewer[data-v-749b7dea]{background:#fafafa;display:flex;flex-direction:column;height:100%}.filters[data-v-749b7dea]{background:#fff;border-bottom:1px solid #e5e5e5;padding:16px}.filter-group[data-v-749b7dea]{align-items:center;display:flex;gap:8px}.filter-input[data-v-749b7dea]{background:#fff;border:1px solid #ddd;border-radius:6px;font-size:14px;min-width:120px;padding:8px 12px}.filter-input[data-v-749b7dea]:focus{border-color:#007bff;outline:none}.btn-clear[data-v-749b7dea],.btn-search[data-v-749b7dea]{border:none;border-radius:6px;cursor:pointer;font-size:14px;padding:8px 12px}.btn-search[data-v-749b7dea]{background:#007bff;color:#fff}.btn-clear[data-v-749b7dea]{background:#6c757d;color:#fff}.loading[data-v-749b7dea]{align-items:center;color:#666;display:flex;font-size:16px;gap:12px;justify-content:center;padding:48px}.timeline[data-v-749b7dea]{flex:1;overflow-y:auto;padding:20px;position:relative}.timeline-item[data-v-749b7dea]{align-items:flex-start;display:flex;gap:16px;margin-bottom:20px;position:relative}.timeline-item[data-v-749b7dea]:not(:last-child):before{background:#e5e5e5;bottom:-20px;content:\"\";left:19px;position:absolute;top:40px;width:2px}.timeline-dot[data-v-749b7dea]{align-items:center;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:14px;height:38px;justify-content:center;position:relative;width:38px;z-index:1}.dot-create[data-v-749b7dea]{background:#28a745}.dot-update[data-v-749b7dea]{background:#007bff}.dot-delete[data-v-749b7dea]{background:#dc3545}.dot-approve[data-v-749b7dea]{background:#28a745}.dot-reject[data-v-749b7dea]{background:#dc3545}.dot-submit[data-v-749b7dea]{background:#17a2b8}.dot-cancel[data-v-749b7dea]{background:#ffc107}.timeline-content[data-v-749b7dea]{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;flex:1;padding:16px;position:relative;transition:all .2s ease}.timeline-content[data-v-749b7dea]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-1px)}.timeline-item.expanded .timeline-content[data-v-749b7dea]{border-bottom-left-radius:0;border-bottom-right-radius:0}.content-header[data-v-749b7dea]{justify-content:space-between;margin-bottom:12px}.action-info[data-v-749b7dea],.content-header[data-v-749b7dea]{align-items:center;display:flex}.action-info[data-v-749b7dea]{gap:12px}.action-badge[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:600;padding:4px 8px}.badge-create[data-v-749b7dea]{background:#d4edda;color:#155724}.badge-update[data-v-749b7dea]{background:#cce7ff;color:#004085}.badge-delete[data-v-749b7dea]{background:#f8d7da;color:#721c24}.badge-approve[data-v-749b7dea]{background:#d4edda;color:#155724}.badge-reject[data-v-749b7dea]{background:#f8d7da;color:#721c24}.badge-submit[data-v-749b7dea]{background:#d1ecf1;color:#0c5460}.amount-change[data-v-749b7dea],.badge-cancel[data-v-749b7dea]{background:#fff3cd;color:#856404}.amount-change[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:600;padding:2px 6px}.timestamp[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.content-main[data-v-749b7dea]{justify-content:space-between;margin-bottom:8px}.content-main[data-v-749b7dea],.user-info[data-v-749b7dea]{align-items:center;display:flex}.user-info[data-v-749b7dea]{color:#333;font-size:14px;font-weight:500;gap:6px}.user-info i[data-v-749b7dea]{color:#666;font-size:12px}.settlement-info[data-v-749b7dea]{align-items:center;display:flex;font-size:14px;gap:12px}.settlement-amount[data-v-749b7dea]{font-size:15px}.settlement-date[data-v-749b7dea]{color:#666;font-size:13px}.content-status[data-v-749b7dea]{justify-content:space-between;margin-bottom:8px}.content-status[data-v-749b7dea],.status-badge[data-v-749b7dea]{align-items:center;display:flex}.status-badge[data-v-749b7dea]{border-radius:4px;font-size:12px;font-weight:500;gap:4px;padding:3px 8px}.status-badge i[data-v-749b7dea]{font-size:8px}.status-draft[data-v-749b7dea]{background:#e9ecef;color:#495057}.status-pending[data-v-749b7dea]{background:#fff3cd;color:#856404}.status-approved[data-v-749b7dea]{background:#d4edda;color:#155724}.status-rejected[data-v-749b7dea]{background:#f8d7da;color:#721c24}.status-paid[data-v-749b7dea]{background:#cce7ff;color:#004085}.status-active[data-v-749b7dea]{background:#d1ecf1;color:#0c5460}.settlements-count[data-v-749b7dea]{background:#f8f9fa;border-radius:3px;color:#666;font-size:12px;padding:2px 6px}.content-preview[data-v-749b7dea]{display:flex;font-size:13px;gap:12px;margin-bottom:8px}.reference[data-v-749b7dea]{color:#007bff;font-weight:500}.description[data-v-749b7dea]{color:#666}.content-reason[data-v-749b7dea]{align-items:center;color:#666;display:flex;font-size:13px;font-style:italic;gap:6px;margin-bottom:8px}.content-reason i[data-v-749b7dea]{font-size:11px}.expand-indicator[data-v-749b7dea]{color:#666;font-size:12px;position:absolute;right:16px;top:16px}.expanded-details[data-v-749b7dea]{background:#fff;border:1px solid #e5e5e5;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top:none;margin-left:54px;padding:16px}.details-grid[data-v-749b7dea]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-bottom:16px}.detail-item[data-v-749b7dea]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.detail-item label[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.detail-item span[data-v-749b7dea]{color:#333;font-size:13px}.amount[data-v-749b7dea]{color:#28a745;font-weight:600}.status[data-v-749b7dea]{border-radius:4px;font-size:11px;font-weight:500;padding:2px 6px}.description-section[data-v-749b7dea],.note-section[data-v-749b7dea]{margin-bottom:16px}.description-section h4[data-v-749b7dea],.note-section h4[data-v-749b7dea]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.description-section p[data-v-749b7dea],.note-section p[data-v-749b7dea]{color:#666;font-size:13px;line-height:1.4;margin:0}.settlements-section h4[data-v-749b7dea]{align-items:center;border-bottom:1px solid #e5e5e5;color:#333;display:flex;font-size:14px;justify-content:space-between;margin:0 0 12px;padding-bottom:4px}.total-amount[data-v-749b7dea]{color:#28a745;font-size:13px;font-weight:600}.settlements-list[data-v-749b7dea]{display:flex;flex-direction:column;gap:8px}.settlement-item[data-v-749b7dea]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;padding:12px}.settlement-header[data-v-749b7dea]{align-items:center;display:flex;justify-content:space-between;margin-bottom:6px}.settlement-id[data-v-749b7dea]{color:#333;font-size:13px;font-weight:600}.settlement-amount[data-v-749b7dea]{color:#28a745;font-size:14px;font-weight:600}.settlement-details[data-v-749b7dea]{align-items:center;display:flex;font-size:12px;gap:12px}.line-item[data-v-749b7dea]{color:#666}.settlement-status[data-v-749b7dea]{border-radius:3px;font-weight:500;padding:2px 6px}.settlement-date[data-v-749b7dea]{color:#999}.approval-section h4[data-v-749b7dea]{border-bottom:1px solid #e5e5e5;color:#333;font-size:14px;margin:0 0 8px;padding-bottom:4px}.approval-grid[data-v-749b7dea]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.approval-item[data-v-749b7dea]{align-items:center;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;padding:8px 0}.approval-item label[data-v-749b7dea]{color:#666;font-size:12px;font-weight:500}.approval-item span[data-v-749b7dea]{color:#333;font-size:13px}.empty-state[data-v-749b7dea]{align-items:center;color:#666;display:flex;flex-direction:column;justify-content:center;padding:48px 20px;text-align:center}.empty-state i[data-v-749b7dea]{color:#ddd;font-size:48px;margin-bottom:16px}.empty-state h3[data-v-749b7dea]{font-size:18px;margin:0 0 8px}.empty-state p[data-v-749b7dea]{font-size:14px;margin:0}.pagination[data-v-749b7dea]{border-top:1px solid #e5e5e5;gap:16px;padding:16px}.page-btn[data-v-749b7dea],.pagination[data-v-749b7dea]{align-items:center;background:#fff;display:flex;justify-content:center}.page-btn[data-v-749b7dea]{border:1px solid #ddd;border-radius:6px;cursor:pointer;height:32px;transition:all .2s;width:32px}.page-btn[data-v-749b7dea]:hover:not(:disabled){background:#f8f9fa;border-color:#007bff}.page-btn[data-v-749b7dea]:disabled{cursor:not-allowed;opacity:.5}.page-info[data-v-749b7dea]{color:#666;font-size:14px;font-weight:500}@media (max-width:768px){.timeline[data-v-749b7dea]{padding:16px}.content-main[data-v-749b7dea]{gap:8px}.content-main[data-v-749b7dea],.content-status[data-v-749b7dea]{align-items:flex-start;flex-direction:column}.content-status[data-v-749b7dea]{gap:6px}.approval-grid[data-v-749b7dea],.details-grid[data-v-749b7dea]{grid-template-columns:1fr}.expanded-details[data-v-749b7dea]{margin-left:0}.timeline-item[data-v-749b7dea]:not(:last-child):before{display:none}.filter-group[data-v-749b7dea]{flex-wrap:wrap}.settlement-header[data-v-749b7dea],.settlements-section h4[data-v-749b7dea]{align-items:flex-start;flex-direction:column;gap:4px}.settlement-details[data-v-749b7dea]{flex-wrap:wrap}}@media (max-width:480px){.settlement-info[data-v-749b7dea]{align-items:flex-start}.content-preview[data-v-749b7dea],.settlement-info[data-v-749b7dea]{flex-direction:column;gap:4px}.filter-input[data-v-749b7dea]{min-width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/view/index.vue?vue&type=template&id=749b7dea&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "settlement-audit-viewer"
  }, [_vm.showFilters ? _vm._ssrNode("<div class=\"filters\" data-v-749b7dea>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-749b7dea>", "</div>", [_vm._ssrNode("<input type=\"date\" placeholder=\"From date\"" + _vm._ssrAttr("value", _vm.filters.dateFrom) + " class=\"filter-input\" data-v-749b7dea> <input type=\"date\" placeholder=\"To date\"" + _vm._ssrAttr("value", _vm.filters.dateTo) + " class=\"filter-input\" data-v-749b7dea> "), _c('select', {
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
      "value": "pending"
    }
  }, [_vm._v("Pending")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rejected"
    }
  }, [_vm._v("Rejected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("Paid")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("Cancelled")])]), _vm._ssrNode(" <button class=\"btn-search\" data-v-749b7dea><i class=\"fas fa-search\" data-v-749b7dea></i></button> <button class=\"btn-clear\" data-v-749b7dea><i class=\"fas fa-times\" data-v-749b7dea></i></button>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.loading ? "<div class=\"loading\" data-v-749b7dea><i class=\"fas fa-spinner fa-spin\" data-v-749b7dea></i>\n    Loading settlement history...\n  </div>" : _vm.auditLogs.length > 0 ? "<div class=\"timeline\" data-v-749b7dea>" + _vm._ssrList(_vm.auditLogs, function (log, index) {
    var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData5$invo, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData9, _log$recordData10, _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData14$pay, _log$recordData15, _log$recordData15$ban, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData19, _log$recordData20, _log$recordData20$inv, _log$recordData21, _log$recordData22;
    return "<div" + _vm._ssrClass("timeline-item", {
      'expanded': _vm.expandedId === log.id
    }) + " data-v-749b7dea><div" + _vm._ssrClass("timeline-dot", `dot-${log.action.toLowerCase()}`) + " data-v-749b7dea><i" + _vm._ssrClass(null, _vm.getActionIcon(log.action)) + " data-v-749b7dea></i></div> <div class=\"timeline-content\" data-v-749b7dea><div class=\"content-header\" data-v-749b7dea><div class=\"action-info\" data-v-749b7dea><span" + _vm._ssrClass("action-badge", `badge-${log.action.toLowerCase()}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getActionText(log.action)) + "\n            ") + "</span> " + (_vm.showAmountChange(log, index) ? "<span class=\"amount-change\" data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getAmountChange(log, index)) + "\n            ") + "</span>" : "<!---->") + "</div> <span class=\"timestamp\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatTime(log.auditDate))) + "</span></div> <div class=\"content-main\" data-v-749b7dea><div class=\"user-info\" data-v-749b7dea><i class=\"fas fa-user\" data-v-749b7dea></i> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.getUserName(log))) + "</span></div> <div class=\"settlement-info\" data-v-749b7dea><span class=\"settlement-amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.paymentAmount))) + "</span> <span class=\"settlement-date\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.settlementDate))) + "</span></div></div> <div class=\"content-status\" data-v-749b7dea><span" + _vm._ssrClass("status-badge", `status-${(_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.status}`) + " data-v-749b7dea><i class=\"fas fa-circle\" data-v-749b7dea></i>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getStatusText((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status)) + "\n          ") + "</span> " + ((_log$recordData5 = log.recordData) !== null && _log$recordData5 !== void 0 && (_log$recordData5$invo = _log$recordData5.invoiceSettlements) !== null && _log$recordData5$invo !== void 0 && _log$recordData5$invo.length ? "<span class=\"settlements-count\" data-v-749b7dea>" + _vm._ssrEscape("\n            " + _vm._s(log.recordData.invoiceSettlements.length) + " invoice" + _vm._s(log.recordData.invoiceSettlements.length > 1 ? 's' : '') + "\n          ") + "</span>" : "<!---->") + "</div> " + (log.reason ? "<div class=\"content-reason\" data-v-749b7dea><i class=\"fas fa-comment-alt\" data-v-749b7dea></i>" + _vm._ssrEscape("\n          " + _vm._s(log.reason) + "\n        ") + "</div>" : "<!---->") + " " + ((_log$recordData6 = log.recordData) !== null && _log$recordData6 !== void 0 && _log$recordData6.reference || (_log$recordData7 = log.recordData) !== null && _log$recordData7 !== void 0 && _log$recordData7.description ? "<div class=\"content-preview\" data-v-749b7dea>" + (log.recordData.reference ? "<span class=\"reference\" data-v-749b7dea>" + _vm._ssrEscape("\n            Ref: " + _vm._s(log.recordData.reference) + "\n          ") + "</span>" : "<!---->") + " " + (log.recordData.description ? "<span class=\"description\" data-v-749b7dea>" + _vm._ssrEscape("\n            " + _vm._s(_vm.truncateText(log.recordData.description, 50)) + "\n          ") + "</span>" : "<!---->") + "</div>" : "<!---->") + " <div class=\"expand-indicator\" data-v-749b7dea><i" + _vm._ssrClass("fas", _vm.expandedId === log.id ? 'fa-chevron-up' : 'fa-chevron-down') + " data-v-749b7dea></i></div></div> " + (_vm.expandedId === log.id ? "<div class=\"expanded-details\" data-v-749b7dea><div class=\"details-grid\" data-v-749b7dea><div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Settlement ID:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.settlementId || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Settlement Date:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDate((_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : _log$recordData8.settlementDate))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Payment Amount:</label> <span class=\"amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : _log$recordData9.paymentAmount))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Base Amount:</label> <span class=\"amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : _log$recordData10.baseAmount))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Status:</label> <span" + _vm._ssrClass("status", `status-${(_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.status}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getStatusText((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.status)) + "\n            ") + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Reference:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.reference) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Payment Method:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : (_log$recordData14$pay = _log$recordData14.paymentMethod) === null || _log$recordData14$pay === void 0 ? void 0 : _log$recordData14$pay.name) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Bank Account:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : (_log$recordData15$ban = _log$recordData15.bankAccount) === null || _log$recordData15$ban === void 0 ? void 0 : _log$recordData15$ban.accountName) || '-')) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Created:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.createdAt))) + "</span></div> <div class=\"detail-item\" data-v-749b7dea><label data-v-749b7dea>Last Updated:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.updateTimestamp))) + "</span></div></div> " + ((_log$recordData18 = log.recordData) !== null && _log$recordData18 !== void 0 && _log$recordData18.description ? "<div class=\"description-section\" data-v-749b7dea><h4 data-v-749b7dea>Description</h4> <p data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.description)) + "</p></div>" : "<!---->") + " " + ((_log$recordData19 = log.recordData) !== null && _log$recordData19 !== void 0 && _log$recordData19.note ? "<div class=\"note-section\" data-v-749b7dea><h4 data-v-749b7dea>Note</h4> <p data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.note)) + "</p></div>" : "<!---->") + " " + ((_log$recordData20 = log.recordData) !== null && _log$recordData20 !== void 0 && (_log$recordData20$inv = _log$recordData20.invoiceSettlements) !== null && _log$recordData20$inv !== void 0 && _log$recordData20$inv.length ? "<div class=\"settlements-section\" data-v-749b7dea><h4 data-v-749b7dea>" + _vm._ssrEscape("\n            Invoice Settlements (" + _vm._s(log.recordData.invoiceSettlements.length) + ")\n            ") + "<span class=\"total-amount\" data-v-749b7dea>" + _vm._ssrEscape("\n              Total: " + _vm._s(_vm.formatCurrency(_vm.getTotalSettlementAmount(log.recordData.invoiceSettlements))) + "\n            ") + "</span></h4> <div class=\"settlements-list\" data-v-749b7dea>" + _vm._ssrList(log.recordData.invoiceSettlements, function (settlement) {
      return "<div class=\"settlement-item\" data-v-749b7dea><div class=\"settlement-header\" data-v-749b7dea><span class=\"settlement-id\" data-v-749b7dea>" + _vm._ssrEscape("Settlement #" + _vm._s(settlement.id)) + "</span> <span class=\"settlement-amount\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(settlement.amount))) + "</span></div> <div class=\"settlement-details\" data-v-749b7dea><span class=\"line-item\" data-v-749b7dea>" + _vm._ssrEscape("Line Item #" + _vm._s(settlement.invoiceLineItemId)) + "</span> <span" + _vm._ssrClass("settlement-status", `status-${settlement.status}`) + " data-v-749b7dea>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.getStatusText(settlement.status)) + "\n                ") + "</span> <span class=\"settlement-date\" data-v-749b7dea>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(settlement.createdAt))) + "</span></div></div>";
    }) + "</div></div>" : "<!---->") + " " + ((_log$recordData21 = log.recordData) !== null && _log$recordData21 !== void 0 && _log$recordData21.maker || (_log$recordData22 = log.recordData) !== null && _log$recordData22 !== void 0 && _log$recordData22.checker ? "<div class=\"approval-section\" data-v-749b7dea><h4 data-v-749b7dea>Approval Information</h4> <div class=\"approval-grid\" data-v-749b7dea>" + (log.recordData.maker ? "<div class=\"approval-item\" data-v-749b7dea><label data-v-749b7dea>Maker:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.maker.cus_name || log.recordData.maker.name || '-')) + "</span></div>" : "<!---->") + " " + (log.recordData.checker ? "<div class=\"approval-item\" data-v-749b7dea><label data-v-749b7dea>Checker:</label> <span data-v-749b7dea>" + _vm._ssrEscape(_vm._s(log.recordData.checker.cus_name || log.recordData.checker.name || '-')) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"empty-state\" data-v-749b7dea><i class=\"fas fa-history\" data-v-749b7dea></i> <h3 data-v-749b7dea>No settlement audit records found</h3> <p data-v-749b7dea>No changes have been recorded for this settlement yet</p></div>") + " " + (_vm.pagination.pages > 1 ? "<div class=\"pagination\" data-v-749b7dea><button" + _vm._ssrAttr("disabled", _vm.pagination.page <= 1) + " class=\"page-btn\" data-v-749b7dea><i class=\"fas fa-chevron-left\" data-v-749b7dea></i></button> <span class=\"page-info\" data-v-749b7dea>" + _vm._ssrEscape("\n      " + _vm._s(_vm.pagination.page) + " / " + _vm._s(_vm.pagination.pages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.page >= _vm.pagination.pages) + " class=\"page-btn\" data-v-749b7dea><i class=\"fas fa-chevron-right\" data-v-749b7dea></i></button></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue?vue&type=template&id=749b7dea&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ap/settlement/audit/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'SettlementAuditViewer',
  props: {
    settlementId: {
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
    settlementId() {
      if (this.autoLoad) {
        this.loadAuditLogs();
      }
    }
  },
  methods: {
    async loadAuditLogs(page = 1) {
      this.loading = true;
      try {
        // API call for settlement audit logs
        const response = await this.$axios.get(`/api/ap-invoices-settlement/audit/${this.settlementId}`, {
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
        console.error('Error loading settlement audit logs:', error);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.error('Failed to load settlement audit logs');
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
      if (!prevLog || !((_prevLog$recordData = prevLog.recordData) !== null && _prevLog$recordData !== void 0 && _prevLog$recordData.paymentAmount) || !((_log$recordData = log.recordData) !== null && _log$recordData !== void 0 && _log$recordData.paymentAmount)) return false;
      return prevLog.recordData.paymentAmount !== log.recordData.paymentAmount;
    },
    getAmountChange(log, index) {
      var _log$recordData2, _prevLog$recordData2;
      const prevLog = this.auditLogs[index + 1];
      const current = ((_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.paymentAmount) || 0;
      const previous = (prevLog === null || prevLog === void 0 ? void 0 : (_prevLog$recordData2 = prevLog.recordData) === null || _prevLog$recordData2 === void 0 ? void 0 : _prevLog$recordData2.paymentAmount) || 0;
      const diff = current - previous;
      if (diff > 0) return `+${this.formatCurrency(diff)}`;
      if (diff < 0) return `-${this.formatCurrency(Math.abs(diff))}`;
      return '';
    },
    getTotalSettlementAmount(settlements) {
      return settlements.reduce((total, settlement) => total + (settlement.amount || 0), 0);
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
        'pending': 'Pending Approval',
        'approved': 'Approved',
        'rejected': 'Rejected',
        'paid': 'Paid',
        'cancelled': 'Cancelled',
        'active': 'Active',
        'inactive': 'Inactive'
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
// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var audit_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ap/settlement/audit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(496)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  audit_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "749b7dea",
  "a9386c0e"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ap-settlement-audit-view.js.map