exports.ids = [11,8,9];
exports.modules = {

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(458);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("355eff84", content, true, context)
};

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(448);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_749b7dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 458:
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

/***/ 462:
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
  
  var style0 = __webpack_require__(457)
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

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_accounting_ap_settlement_audit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(462);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SettlementAuditDialog',
  components: {
    SettlementAuditViewer: _components_accounting_ap_settlement_audit_view__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    settlementId: {
      type: [Number, String],
      default: null
    },
    settlementInfo: {
      type: Object,
      default: null
    }
  },
  emits: ['close'],
  data() {
    return {
      auditLogs: [],
      isExporting: false,
      showExportOptions: false
    };
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.handleClose();
    },
    onLogsLoaded(logs) {
      this.auditLogs = logs;
    },
    // Hide dropdown when clicking outside
    hideExportOptions() {
      this.showExportOptions = false;
    },
    handleOutsideClick(event) {
      var _this$$el;
      const exportDropdown = (_this$$el = this.$el) === null || _this$$el === void 0 ? void 0 : _this$$el.querySelector('.export-dropdown');
      if (exportDropdown && !exportDropdown.contains(event.target)) {
        this.showExportOptions = false;
      }
    },
    async exportAuditLog() {
      if (this.isExporting) return;
      try {
        var _this$$toast, _this$$toast2;
        this.isExporting = true;
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.info('ກຳລັງສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະ...');

        // Option 1: Try to use jsPDF if available
        try {
          await this.exportWithJsPDF();
        } catch (jsPDFError) {
          console.warn('jsPDF not available, using HTML print method:', jsPDFError);
          // Option 2: Fallback to HTML print method
          this.exportWithPrintJS();
        }
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.success('ສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະສຳເລັດ!');
      } catch (error) {
        var _this$$toast3;
        console.error('Error exporting settlement audit log:', error);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.error('ບໍ່ສາມາດສົ່ງອອກປະຫວັດການດຳເນີນງານການຊຳລະໄດ້');
      } finally {
        this.isExporting = false;
      }
    },
    async exportWithJsPDF() {
      var _this$settlementInfo;
      // Import jsPDF dynamically (requires: npm install jspdf)
      const {
        jsPDF
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 357, 7));

      // Create new PDF document
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('ປະຫວັດການດຳເນີນງານການຊຳລະ', 20, 20);

      // Add settlement info
      if (this.settlementInfo) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`ເລກທີການຊຳລະ: ${this.settlementInfo.settlementId}`, 20, 35);
        doc.text(`ຈຳນວນເງິນ: ${this.formatCurrency(this.settlementInfo.paymentAmount)}`, 20, 45);
        doc.text(`ວັນທີຊຳລະ: ${this.formatDate(this.settlementInfo.settlementDate)}`, 20, 55);
        if (this.settlementInfo.status) {
          doc.text(`ສະຖານະ: ${this.getStatusText(this.settlementInfo.status)}`, 20, 65);
        }
      }

      // Add generation timestamp
      doc.setFontSize(10);
      doc.text(`ສ້າງເມື່ອ: ${new Date().toLocaleString('lo-LA')}`, 20, 80);
      let yPosition = 95;

      // Add audit logs
      this.auditLogs.forEach((log, index) => {
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }

        // Log header
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(`${index + 1}. ${this.getActionText(log.action)}`, 20, yPosition);

        // User and timestamp
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        yPosition += 10;
        doc.text(`ຜູ້ດຳເນີນການ: ${this.getUserName(log)}`, 25, yPosition);
        yPosition += 8;
        doc.text(`ເວລາ: ${this.formatDateTime(log.auditDate)}`, 25, yPosition);

        // Reason if exists
        if (log.reason) {
          yPosition += 8;
          doc.text(`ເຫດຜົນ: ${log.reason}`, 25, yPosition);
        }

        // Settlement data summary
        if (log.recordData) {
          yPosition += 8;
          doc.text(`ຈຳນວນເງິນຊຳລະ: ${this.formatCurrency(log.recordData.paymentAmount)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ວັນທີຊຳລະ: ${this.formatDate(log.recordData.settlementDate)}`, 25, yPosition);
          yPosition += 8;
          doc.text(`ສະຖານະ: ${this.getStatusText(log.recordData.status)}`, 25, yPosition);
          if (log.recordData.reference) {
            yPosition += 8;
            doc.text(`ອ້າງອີງ: ${log.recordData.reference}`, 25, yPosition);
          }
        }
        yPosition += 15;
      });

      // Create filename
      const filename = `settlement-audit-log-${((_this$settlementInfo = this.settlementInfo) === null || _this$settlementInfo === void 0 ? void 0 : _this$settlementInfo.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.pdf`;

      // Download PDF
      doc.save(filename);
    },
    exportWithPrintJS() {
      // Create HTML content for export
      const htmlContent = this.generateHTMLContent();

      // Create a new window for printing
      const printWindow = window.open('', '_blank');
      printWindow.document.write(htmlContent);
      printWindow.document.close();

      // Wait for content to load then print
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    },
    generateHTMLContent() {
      const logs = this.auditLogs.map((log, index) => `
        <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
          <h4 style="margin: 0 0 10px 0; color: #333;">${index + 1}. ${this.getActionText(log.action)}</h4>
          <p style="margin: 5px 0;"><strong>ຜູ້ດຳເນີນການ:</strong> ${this.getUserName(log)}</p>
          <p style="margin: 5px 0;"><strong>ເວລາ:</strong> ${this.formatDateTime(log.auditDate)}</p>
          ${log.reason ? `<p style="margin: 5px 0;"><strong>ເຫດຜົນ:</strong> ${log.reason}</p>` : ''}
          ${log.recordData ? `
            <div style="margin-top: 10px; padding: 10px; background: #f8f9fa; border-radius: 3px;">
              <p style="margin: 3px 0;"><strong>ຈຳນວນເງິນຊຳລະ:</strong> ${this.formatCurrency(log.recordData.paymentAmount)}</p>
              <p style="margin: 3px 0;"><strong>ວັນທີຊຳລະ:</strong> ${this.formatDate(log.recordData.settlementDate)}</p>
              <p style="margin: 3px 0;"><strong>ສະຖານະ:</strong> ${this.getStatusText(log.recordData.status)}</p>
              ${log.recordData.reference ? `<p style="margin: 3px 0;"><strong>ອ້າງອີງ:</strong> ${log.recordData.reference}</p>` : ''}
              ${log.recordData.description ? `<p style="margin: 3px 0;"><strong>ລາຍລະອຽດ:</strong> ${log.recordData.description}</p>` : ''}
            </div>
          ` : ''}
        </div>
      `).join('');
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <title>ປະຫວັດການດຳເນີນງານການຊຳລະ</title>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
            .settlement-info { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
            .timestamp { text-align: right; color: #666; font-size: 12px; margin-bottom: 20px; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>ປະຫວັດການດຳເນີນງານການຊຳລະ</h1>
          
          ${this.settlementInfo ? `
            <div class="settlement-info">
              <p><strong>ເລກທີການຊຳລະ:</strong> ${this.settlementInfo.settlementId}</p>
              <p><strong>ຈຳນວນເງິນ:</strong> ${this.formatCurrency(this.settlementInfo.paymentAmount)}</p>
              <p><strong>ວັນທີຊຳລະ:</strong> ${this.formatDate(this.settlementInfo.settlementDate)}</p>
              ${this.settlementInfo.status ? `<p><strong>ສະຖານະ:</strong> ${this.getStatusText(this.settlementInfo.status)}</p>` : ''}
            </div>
          ` : ''}
          
          <div class="timestamp">ສ້າງເມື່ອ: ${new Date().toLocaleString('lo-LA')}</div>
          
          <div class="audit-logs">
            ${logs}
          </div>
        </body>
        </html>
      `;
    },
    exportAsJSON() {
      this.showExportOptions = false;
      try {
        var _this$settlementInfo2, _this$$toast4;
        const exportData = {
          settlementInfo: this.settlementInfo,
          exportDate: new Date().toISOString(),
          auditLogs: this.auditLogs.map(log => {
            var _log$recordData, _log$recordData2, _log$recordData3, _log$recordData4, _log$recordData5, _log$recordData6, _log$recordData7, _log$recordData8, _log$recordData8$paym, _log$recordData9, _log$recordData9$bank, _log$recordData10, _log$recordData10$inv;
            return {
              id: log.id,
              action: this.getActionText(log.action),
              user: this.getUserName(log),
              email: this.getUserEmail(log),
              timestamp: log.auditDate,
              reason: log.reason,
              settlementData: {
                settlementId: log.settlementId,
                paymentAmount: (_log$recordData = log.recordData) === null || _log$recordData === void 0 ? void 0 : _log$recordData.paymentAmount,
                baseAmount: (_log$recordData2 = log.recordData) === null || _log$recordData2 === void 0 ? void 0 : _log$recordData2.baseAmount,
                settlementDate: (_log$recordData3 = log.recordData) === null || _log$recordData3 === void 0 ? void 0 : _log$recordData3.settlementDate,
                status: this.getStatusText((_log$recordData4 = log.recordData) === null || _log$recordData4 === void 0 ? void 0 : _log$recordData4.status),
                reference: (_log$recordData5 = log.recordData) === null || _log$recordData5 === void 0 ? void 0 : _log$recordData5.reference,
                description: (_log$recordData6 = log.recordData) === null || _log$recordData6 === void 0 ? void 0 : _log$recordData6.description,
                note: (_log$recordData7 = log.recordData) === null || _log$recordData7 === void 0 ? void 0 : _log$recordData7.note,
                paymentMethod: (_log$recordData8 = log.recordData) === null || _log$recordData8 === void 0 ? void 0 : (_log$recordData8$paym = _log$recordData8.paymentMethod) === null || _log$recordData8$paym === void 0 ? void 0 : _log$recordData8$paym.name,
                bankAccount: (_log$recordData9 = log.recordData) === null || _log$recordData9 === void 0 ? void 0 : (_log$recordData9$bank = _log$recordData9.bankAccount) === null || _log$recordData9$bank === void 0 ? void 0 : _log$recordData9$bank.accountName,
                invoiceSettlements: ((_log$recordData10 = log.recordData) === null || _log$recordData10 === void 0 ? void 0 : (_log$recordData10$inv = _log$recordData10.invoiceSettlements) === null || _log$recordData10$inv === void 0 ? void 0 : _log$recordData10$inv.length) || 0
              }
            };
          })
        };
        const jsonString = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonString], {
          type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `settlement-audit-log-${((_this$settlementInfo2 = this.settlementInfo) === null || _this$settlementInfo2 === void 0 ? void 0 : _this$settlementInfo2.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        (_this$$toast4 = this.$toast) === null || _this$$toast4 === void 0 ? void 0 : _this$$toast4.success('ສົ່ງອອກ JSON ສຳເລັດ!');
      } catch (error) {
        var _this$$toast5;
        console.error('Error exporting JSON:', error);
        (_this$$toast5 = this.$toast) === null || _this$$toast5 === void 0 ? void 0 : _this$$toast5.error('ບໍ່ສາມາດສົ່ງອອກ JSON ໄດ້');
      }
    },
    exportAsCSV() {
      this.showExportOptions = false;
      try {
        var _this$settlementInfo3, _this$$toast6;
        const headers = ['ລຳດັບ', 'ການດຳເນີນງານ', 'ຜູ້ດຳເນີນການ', 'ອີເມວ', 'ເວລາ', 'ເຫດຜົນ', 'ເລກທີການຊຳລະ', 'ຈຳນວນເງິນຊຳລະ', 'ຈຳນວນເງິນພື້ນຖານ', 'ວັນທີຊຳລະ', 'ສະຖານະ', 'ອ້າງອີງ', 'ລາຍລະອຽດ', 'ໝາຍເຫດ', 'ວິທີການຊຳລະ', 'ບັນຊີທະນາຄານ', 'ຈຳນວນໃບແຈ້ງໜີ້'];
        const csvData = this.auditLogs.map((log, index) => {
          var _log$recordData11, _log$recordData12, _log$recordData13, _log$recordData14, _log$recordData15, _log$recordData16, _log$recordData17, _log$recordData18, _log$recordData18$pay, _log$recordData19, _log$recordData19$ban, _log$recordData20, _log$recordData20$inv;
          return [index + 1, this.getActionText(log.action), this.getUserName(log), this.getUserEmail(log), this.formatDateTime(log.auditDate), log.reason || '', log.settlementId || '', ((_log$recordData11 = log.recordData) === null || _log$recordData11 === void 0 ? void 0 : _log$recordData11.paymentAmount) || '', ((_log$recordData12 = log.recordData) === null || _log$recordData12 === void 0 ? void 0 : _log$recordData12.baseAmount) || '', this.formatDate((_log$recordData13 = log.recordData) === null || _log$recordData13 === void 0 ? void 0 : _log$recordData13.settlementDate) || '', this.getStatusText((_log$recordData14 = log.recordData) === null || _log$recordData14 === void 0 ? void 0 : _log$recordData14.status) || '', ((_log$recordData15 = log.recordData) === null || _log$recordData15 === void 0 ? void 0 : _log$recordData15.reference) || '', ((_log$recordData16 = log.recordData) === null || _log$recordData16 === void 0 ? void 0 : _log$recordData16.description) || '', ((_log$recordData17 = log.recordData) === null || _log$recordData17 === void 0 ? void 0 : _log$recordData17.note) || '', ((_log$recordData18 = log.recordData) === null || _log$recordData18 === void 0 ? void 0 : (_log$recordData18$pay = _log$recordData18.paymentMethod) === null || _log$recordData18$pay === void 0 ? void 0 : _log$recordData18$pay.name) || '', ((_log$recordData19 = log.recordData) === null || _log$recordData19 === void 0 ? void 0 : (_log$recordData19$ban = _log$recordData19.bankAccount) === null || _log$recordData19$ban === void 0 ? void 0 : _log$recordData19$ban.accountName) || '', ((_log$recordData20 = log.recordData) === null || _log$recordData20 === void 0 ? void 0 : (_log$recordData20$inv = _log$recordData20.invoiceSettlements) === null || _log$recordData20$inv === void 0 ? void 0 : _log$recordData20$inv.length) || 0];
        });
        const csvContent = [headers, ...csvData].map(row => row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')).join('\n');

        // Add BOM for proper UTF-8 encoding
        const bom = '\uFEFF';
        const blob = new Blob([bom + csvContent], {
          type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `settlement-audit-log-${((_this$settlementInfo3 = this.settlementInfo) === null || _this$settlementInfo3 === void 0 ? void 0 : _this$settlementInfo3.settlementId) || this.settlementId}-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        (_this$$toast6 = this.$toast) === null || _this$$toast6 === void 0 ? void 0 : _this$$toast6.success('ສົ່ງອອກ CSV ສຳເລັດ!');
      } catch (error) {
        var _this$$toast7;
        console.error('Error exporting CSV:', error);
        (_this$$toast7 = this.$toast) === null || _this$$toast7 === void 0 ? void 0 : _this$$toast7.error('ບໍ່ສາມາດສົ່ງອອກ CSV ໄດ້');
      }
    },
    getUserEmail(log) {
      var _log$recordData21, _log$recordData21$mak, _log$recordData22, _log$recordData22$che, _log$user;
      return ((_log$recordData21 = log.recordData) === null || _log$recordData21 === void 0 ? void 0 : (_log$recordData21$mak = _log$recordData21.maker) === null || _log$recordData21$mak === void 0 ? void 0 : _log$recordData21$mak.cus_email) || ((_log$recordData22 = log.recordData) === null || _log$recordData22 === void 0 ? void 0 : (_log$recordData22$che = _log$recordData22.checker) === null || _log$recordData22$che === void 0 ? void 0 : _log$recordData22$che.cus_email) || ((_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.email) || '';
    },
    // Helper methods for PDF generation
    getActionText(action) {
      const actionMap = {
        CREATE: 'ສ້າງການຊຳລະ',
        UPDATE: 'ອັບເດດການຊຳລະ',
        DELETE: 'ລຶບການຊຳລະ',
        APPROVE: 'ອະນຸມັດການຊຳລະ',
        REJECT: 'ປະຕິເສດການຊຳລະ',
        SUBMIT: 'ສົ່ງການຊຳລະ',
        CANCEL: 'ຍົກເລີກການຊຳລະ'
      };
      return actionMap[action] || action;
    },
    getStatusText(status) {
      const statusMap = {
        draft: 'ຮ່າງ',
        pending: 'ລໍຖ້າການອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        rejected: 'ປະຕິເສດ',
        paid: 'ຈ່າຍແລ້ວ',
        cancelled: 'ຍົກເລີກ',
        active: 'ໃຊ້ງານ',
        inactive: 'ບໍ່ໃຊ້ງານ'
      };
      return statusMap[status] || status;
    },
    getUserName(log) {
      var _log$recordData23, _log$recordData23$mak, _log$recordData24, _log$recordData24$che, _log$user2;
      return ((_log$recordData23 = log.recordData) === null || _log$recordData23 === void 0 ? void 0 : (_log$recordData23$mak = _log$recordData23.maker) === null || _log$recordData23$mak === void 0 ? void 0 : _log$recordData23$mak.cus_name) || ((_log$recordData24 = log.recordData) === null || _log$recordData24 === void 0 ? void 0 : (_log$recordData24$che = _log$recordData24.checker) === null || _log$recordData24$che === void 0 ? void 0 : _log$recordData24$che.cus_name) || ((_log$user2 = log.user) === null || _log$user2 === void 0 ? void 0 : _log$user2.name) || 'ບໍ່ຮູ້ຈັກ';
    },
    formatDateTime(date) {
      if (!date) return '-';
      return new Date(date).toLocaleString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    },
    formatCurrency(amount) {
      if (!amount) return '-';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(336)["URL"]))

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(554);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("af7c28a8", content, true, context)
};

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_afd3f404_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_afd3f404_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_afd3f404_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_afd3f404_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_afd3f404_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settlement-audit-dialog-overlay[data-v-afd3f404]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1060}.settlement-audit-dialog[data-v-afd3f404]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:95vh;max-width:1400px;overflow:hidden;width:100%}.settlement-audit-dialog-header[data-v-afd3f404]{align-items:center;background:linear-gradient(135deg,#28a745,#20c997);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:20px}.header-info h3[data-v-afd3f404]{align-items:center;display:flex;font-size:20px;font-weight:600;gap:10px;margin:0}.settlement-subtitle[data-v-afd3f404]{font-size:14px;margin:5px 0 0;opacity:.9}.close-btn[data-v-afd3f404]{align-items:center;background:none;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:20px;height:36px;justify-content:center;padding:8px;transition:background-color .2s;width:36px}.close-btn[data-v-afd3f404]:hover{background:hsla(0,0%,100%,.2)}.settlement-audit-dialog-body[data-v-afd3f404]{background:#f8f9fa;flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:0}.settlement-audit-dialog-body[data-v-afd3f404]::-webkit-scrollbar{width:8px}.settlement-audit-dialog-body[data-v-afd3f404]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.settlement-audit-dialog-body[data-v-afd3f404]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.settlement-audit-dialog-body[data-v-afd3f404]::-webkit-scrollbar-thumb:hover{background:#a1a1a1}.settlement-audit-dialog-footer[data-v-afd3f404]{background:#fff;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;padding:20px}.export-options[data-v-afd3f404]{align-items:center;display:flex;gap:0}.main-export-btn[data-v-afd3f404]{border-bottom-right-radius:0;border-top-right-radius:0}.export-dropdown[data-v-afd3f404]{position:relative}.dropdown-toggle[data-v-afd3f404]{border-bottom-left-radius:0;border-left:none;border-top-left-radius:0;padding:10px 8px}.dropdown-menu[data-v-afd3f404]{background:#fff;border:1px solid #ddd;border-radius:6px;bottom:100%;box-shadow:0 4px 6px rgba(0,0,0,.1);margin-bottom:5px;min-width:160px;position:absolute;right:0;z-index:1000}.dropdown-item[data-v-afd3f404]{align-items:center;background:none;border:none;cursor:pointer;display:flex;font-size:14px;gap:8px;padding:8px 12px;text-align:left;transition:background-color .2s;width:100%}.dropdown-item[data-v-afd3f404]:hover{background:#f8f9fa}.dropdown-item[data-v-afd3f404]:first-child{border-top-left-radius:6px;border-top-right-radius:6px}.dropdown-item[data-v-afd3f404]:last-child{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.btn[data-v-afd3f404]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-afd3f404]{background:#28a745;color:#fff}.btn-primary[data-v-afd3f404]:hover{background:#218838;transform:translateY(-1px)}.btn-outline-primary[data-v-afd3f404]{background:#fff;border:1px solid #28a745;color:#28a745}.btn-outline-primary[data-v-afd3f404]:hover{background:#28a745;color:#fff;transform:translateY(-1px)}.btn-secondary[data-v-afd3f404]{background:#6c757d;color:#fff}.btn-secondary[data-v-afd3f404]:hover{background:#5a6268;transform:translateY(-1px)}.btn[data-v-afd3f404]:disabled{cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.settlement-audit-dialog[data-v-afd3f404]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.settlement-audit-dialog-header[data-v-afd3f404]{padding:15px}.header-info h3[data-v-afd3f404]{font-size:18px}.settlement-audit-dialog-footer[data-v-afd3f404]{flex-direction:column;padding:15px}.btn[data-v-afd3f404],.export-options[data-v-afd3f404]{width:100%}.btn[data-v-afd3f404]{justify-content:center}.main-export-btn[data-v-afd3f404]{border-radius:6px;border-bottom-left-radius:0;border-bottom-right-radius:0}.dropdown-toggle[data-v-afd3f404]{border-left:1px solid #28a745;border-radius:6px;border-top-left-radius:0;border-top-right-radius:0}.dropdown-menu[data-v-afd3f404]{border:none;box-shadow:none;margin-bottom:0;position:static;width:100%}}@media (max-width:480px){.settlement-audit-dialog-overlay[data-v-afd3f404]{padding:0}.settlement-audit-dialog-header[data-v-afd3f404]{align-items:flex-start;flex-direction:column;gap:10px;position:relative}.close-btn[data-v-afd3f404]{position:absolute;right:15px;top:15px}.header-info h3[data-v-afd3f404]{font-size:16px}.settlement-subtitle[data-v-afd3f404]{font-size:12px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(645);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("77912c94", content, true, context)
};

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/index.vue?vue&type=template&id=afd3f404&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "settlement-audit-dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"settlement-audit-dialog\" data-v-afd3f404>", "</div>", [_vm._ssrNode("<div class=\"settlement-audit-dialog-header\" data-v-afd3f404><div class=\"header-info\" data-v-afd3f404><h3 data-v-afd3f404><i class=\"fas fa-history\" data-v-afd3f404></i>\n          ປະຫວັດການດຳເນີນງານການຊຳລະ\n        </h3> " + (_vm.settlementInfo ? "<p class=\"settlement-subtitle\" data-v-afd3f404>" + _vm._ssrEscape("\n          ການຊຳລະ: " + _vm._s(_vm.settlementInfo.settlementId) + " - \n          " + _vm._s(_vm.formatCurrency(_vm.settlementInfo.paymentAmount)) + " - \n          " + _vm._s(_vm.formatDate(_vm.settlementInfo.settlementDate)) + "\n        ") + "</p>" : "<!---->") + "</div> <button type=\"button\" class=\"close-btn\" data-v-afd3f404><i class=\"fas fa-times\" data-v-afd3f404></i></button></div> "), _vm._ssrNode("<div class=\"settlement-audit-dialog-body\" data-v-afd3f404>", "</div>", [_c('settlement-audit-viewer', {
    ref: "settlementAuditViewer",
    attrs: {
      "settlement-id": _vm.settlementId,
      "auto-load": _vm.visible
    },
    on: {
      "logs-loaded": _vm.onLogsLoaded
    }
  })], 1), _vm._ssrNode(" <div class=\"settlement-audit-dialog-footer\" data-v-afd3f404><button type=\"button\" class=\"btn btn-secondary\" data-v-afd3f404><i class=\"fas fa-times\" data-v-afd3f404></i>\n        ປິດ\n      </button> <div class=\"export-options\" data-v-afd3f404><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-primary main-export-btn\" data-v-afd3f404>" + (_vm.isExporting ? "<i class=\"fas fa-spinner fa-spin\" data-v-afd3f404></i>" : "<i class=\"fas fa-download\" data-v-afd3f404></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isExporting ? 'ກຳລັງສົ່ງອອກ...' : 'ສົ່ງອອກ PDF') + "\n        ") + "</button> <div class=\"export-dropdown\" data-v-afd3f404><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isExporting) + " class=\"btn btn-outline-primary dropdown-toggle\" data-v-afd3f404><i class=\"fas fa-caret-down\" data-v-afd3f404></i></button> " + (_vm.showExportOptions ? "<div class=\"dropdown-menu\" data-v-afd3f404><button class=\"dropdown-item\" data-v-afd3f404><i class=\"fas fa-code\" data-v-afd3f404></i>\n              ສົ່ງອອກ JSON\n            </button> <button class=\"dropdown-item\" data-v-afd3f404><i class=\"fas fa-table\" data-v-afd3f404></i>\n              ສົ່ງອອກ CSV\n            </button> <button class=\"dropdown-item\" data-v-afd3f404><i class=\"fas fa-print\" data-v-afd3f404></i>\n              ພິມ\n            </button></div>" : "<!---->") + "</div></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue?vue&type=template&id=afd3f404&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/audit/index.vue?vue&type=script&lang=js&
var auditvue_type_script_lang_js_ = __webpack_require__(473);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var invoice_auditvue_type_script_lang_js_ = (auditvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/audit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(553)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_auditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "afd3f404",
  "807c2816"
  
)

/* harmony default export */ var audit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1cbbe861_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(555);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1cbbe861_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1cbbe861_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1cbbe861_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1cbbe861_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-1cbbe861]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1050}.enhanced-dialog[data-v-1cbbe861]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:1200px;overflow:hidden;width:100%}.modal-header[data-v-1cbbe861]{background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;padding:20px}.modal-header[data-v-1cbbe861],.modal-title[data-v-1cbbe861]{align-items:center;display:flex}.modal-title[data-v-1cbbe861]{font-size:18px;font-weight:600;gap:10px;margin:0}.close-button[data-v-1cbbe861]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:20px;padding:5px;transition:background .2s}.close-button[data-v-1cbbe861]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-1cbbe861]{flex:1;overflow:hidden}.loading-state[data-v-1cbbe861],.modal-body[data-v-1cbbe861]{display:flex;flex-direction:column}.loading-state[data-v-1cbbe861]{align-items:center;color:#666;justify-content:center;padding:40px}.spinner[data-v-1cbbe861]{animation:spin-1cbbe861 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:40px;margin-bottom:15px;width:40px}@keyframes spin-1cbbe861{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.invoice-form[data-v-1cbbe861]{display:flex;flex:1;flex-direction:column;overflow:hidden}.tab-navigation[data-v-1cbbe861]{background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex}.tab-btn[data-v-1cbbe861]{align-items:center;background:none;border:none;color:#666;cursor:pointer;display:flex;flex:1;font-size:14px;font-weight:500;gap:8px;justify-content:center;padding:15px 20px;position:relative;transition:all .2s}.tab-btn[data-v-1cbbe861]:hover{background:rgba(102,126,234,.1);color:#667eea}.tab-btn.active[data-v-1cbbe861]{background:#fff;border-bottom:3px solid #667eea;color:#667eea}.line-count[data-v-1cbbe861]{background:#667eea;border-radius:12px;color:#fff;font-size:12px;min-width:20px;padding:2px 8px;text-align:center}.tab-content[data-v-1cbbe861]{flex:1;overflow-y:auto;padding:0}.form-section[data-v-1cbbe861]{border-bottom:1px solid #f0f0f0;padding:25px}.form-section[data-v-1cbbe861]:last-child{border-bottom:none}.section-title[data-v-1cbbe861]{align-items:center;border-bottom:2px solid #e9ecef;color:#333;display:flex;font-size:16px;font-weight:600;gap:10px;margin-bottom:20px;padding-bottom:10px}.section-title i[data-v-1cbbe861]{color:#667eea}.form-row[data-v-1cbbe861]{display:flex;flex-wrap:wrap;margin:-10px}.form-group[data-v-1cbbe861]{margin-bottom:20px;padding:10px}.col-md-6[data-v-1cbbe861]{flex:0 0 50%;max-width:50%}.form-group label[data-v-1cbbe861]{color:#333;display:block;font-size:14px;font-weight:500;margin-bottom:5px}.form-group label.required[data-v-1cbbe861]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-1cbbe861]{border:1px solid #ddd;border-radius:6px;font-size:14px;padding:10px 12px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-1cbbe861]:focus{border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-1cbbe861]{border-color:#e74c3c;box-shadow:0 0 0 3px rgba(231,76,60,.1)}.form-control-sm[data-v-1cbbe861]{font-size:13px;padding:6px 8px}.invalid-feedback[data-v-1cbbe861]{color:#e74c3c;display:block;font-size:12px;margin-top:5px;width:100%}.amount-summary[data-v-1cbbe861]{background:#f8f9fa;border-left:4px solid #667eea;border-radius:8px;margin:20px 25px;padding:20px}.totals-grid[data-v-1cbbe861]{grid-gap:15px;display:grid;gap:15px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.total-item[data-v-1cbbe861]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:8px 0}.total-item[data-v-1cbbe861]:last-child{border-bottom:none}.total-item.grand-total[data-v-1cbbe861]{border-top:2px solid #667eea;font-size:16px;font-weight:600;grid-column:1/-1;margin-top:8px;padding-top:12px}.total-item .amount[data-v-1cbbe861]{color:#333;font-weight:600}.line-items-section[data-v-1cbbe861]{padding:25px}.add-line-header[data-v-1cbbe861]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.add-line-actions[data-v-1cbbe861]{align-items:center;display:flex;gap:15px}.btn[data-v-1cbbe861]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-1cbbe861]{background:#007bff;color:#fff}.btn-secondary[data-v-1cbbe861]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-1cbbe861]{background:#fff;border:2px solid #667eea;color:#667eea}.btn-outline-secondary[data-v-1cbbe861]{background:#fff;border:1px solid #6c757d;color:#6c757d}.btn-danger[data-v-1cbbe861]{background:#dc3545;color:#fff}.btn[data-v-1cbbe861]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-1cbbe861]:disabled{cursor:not-allowed;opacity:.6;transform:none}.btn-add-line[data-v-1cbbe861]{font-size:16px;font-weight:600;padding:12px 24px}.btn-lg[data-v-1cbbe861]{font-size:16px;padding:12px 30px}.btn-sm[data-v-1cbbe861]{align-items:center;border-radius:50%;display:flex;font-size:11px;height:28px;justify-content:center;padding:0;width:28px}.line-count-info[data-v-1cbbe861]{background:#e9ecef;border-radius:20px;color:#666;font-size:12px;font-weight:500;padding:8px 12px}.empty-line-state[data-v-1cbbe861]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:8px;padding:60px 20px;text-align:center}.empty-content i[data-v-1cbbe861]{color:#dee2e6;font-size:64px;margin-bottom:20px}.empty-content h4[data-v-1cbbe861]{color:#666;margin-bottom:10px}.empty-content p[data-v-1cbbe861]{color:#999;margin-bottom:30px}.line-items-table-container[data-v-1cbbe861]{border:1px solid #e9ecef;border-radius:8px;margin-bottom:20px;overflow:hidden}.line-items-table .table[data-v-1cbbe861]{border-collapse:collapse;margin:0;width:100%}.line-items-table .table th[data-v-1cbbe861]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-size:13px;font-weight:600;padding:12px 8px;text-align:center}.line-items-table .table td[data-v-1cbbe861]{border-top:1px solid #dee2e6;font-size:13px;padding:8px;vertical-align:middle}.line-number[data-v-1cbbe861]{color:#666;font-weight:600;text-align:center}.line-total[data-v-1cbbe861],.tax-amount[data-v-1cbbe861]{color:#333;font-weight:600;text-align:right}.line-row[data-v-1cbbe861]{transition:background-color .2s}.line-row[data-v-1cbbe861]:hover{background-color:rgba(102,126,234,.05)}.add-more-lines[data-v-1cbbe861]{border-top:1px solid #e9ecef;padding:20px 0;text-align:center}.btn-add-more[data-v-1cbbe861]{margin-right:15px}.quick-add-buttons[data-v-1cbbe861]{display:inline-flex;gap:10px;margin-left:15px}.line-totals-summary[data-v-1cbbe861]{background:#f8f9fa;border-left:4px solid #667eea;border-radius:8px;margin-top:20px;padding:20px}.modal-footer[data-v-1cbbe861]{background:#f8f9fa;border-top:1px solid #e9ecef;padding:20px}.footer-actions[data-v-1cbbe861]{display:flex;gap:10px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-1cbbe861]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.totals-grid[data-v-1cbbe861]{grid-template-columns:1fr}.add-line-header[data-v-1cbbe861]{flex-direction:column;gap:15px}.line-items-table-container[data-v-1cbbe861]{overflow-x:auto}.line-items-table .table[data-v-1cbbe861]{min-width:800px}.footer-actions[data-v-1cbbe861]{flex-direction:column}.footer-actions .btn[data-v-1cbbe861]{justify-content:center;width:100%}.tab-btn[data-v-1cbbe861]{flex-direction:column;font-size:12px;gap:4px;padding:12px 8px}.quick-add-buttons[data-v-1cbbe861]{margin-left:0;margin-top:10px}.form-row[data-v-1cbbe861],.quick-add-buttons[data-v-1cbbe861]{flex-direction:column}.col-md-6[data-v-1cbbe861]{flex:1;max-width:100%}}@media (max-width:480px){.modal-header[data-v-1cbbe861]{padding:15px}.modal-title[data-v-1cbbe861]{font-size:16px}.form-section[data-v-1cbbe861]{padding:20px 15px}.section-title[data-v-1cbbe861]{font-size:14px}.modal-footer[data-v-1cbbe861]{padding:15px}.line-items-section[data-v-1cbbe861]{padding:20px 15px}.empty-line-state[data-v-1cbbe861]{padding:40px 15px}.empty-content i[data-v-1cbbe861]{font-size:48px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=1cbbe861&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-1cbbe861>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-1cbbe861><h4 class=\"modal-title\" data-v-1cbbe861><i class=\"fas fa-file-invoice\" data-v-1cbbe861></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່') + "\n      ") + "</h4> " + (_vm.isEdit ? "<button type=\"button\" title=\"ເບິ່ງປະຫວັດການດຳເນີນງານ\" class=\"audit-btn\" data-v-1cbbe861><i class=\"fas fa-history\" data-v-1cbbe861></i> <span class=\"audit-text\" data-v-1cbbe861>ປະຫວັດ</span></button>" : "<!---->") + " <button type=\"button\" class=\"close-button\" data-v-1cbbe861><i class=\"fas fa-times\" data-v-1cbbe861></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-1cbbe861>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-1cbbe861>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-1cbbe861></div> <p data-v-1cbbe861>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"invoice-form\" data-v-1cbbe861>", "</div>", [_vm._ssrNode("<div class=\"tab-navigation\" data-v-1cbbe861><button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'header'
  }]) + " data-v-1cbbe861><i class=\"fas fa-file-alt\" data-v-1cbbe861></i>\n            ຂໍ້ມູນໃບແຈ້ງໜີ້\n          </button> <button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'lines'
  }]) + " data-v-1cbbe861><i class=\"fas fa-list\" data-v-1cbbe861></i>\n            ລາຍການສິນຄ້າ\n            " + (_vm.lineItems.length > 0 ? "<span class=\"line-count\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length)) + "</span>" : "<!---->") + "</button></div> "), _vm._ssrNode("<div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'header' ? '' : 'none'
  }) + " data-v-1cbbe861>", "</div>", [_vm._ssrNode("<form data-v-1cbbe861>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-1cbbe861>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-1cbbe861><i class=\"fas fa-info-circle\" data-v-1cbbe861></i>\n                ຂໍ້ມູນພື້ນຖານ\n              </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-1cbbe861>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-1cbbe861><label for=\"invoiceNumber\" class=\"required\" data-v-1cbbe861>ເລກທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceNumber\" type=\"text\" placeholder=\"ເຊັ່ນ: INV-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.invoiceNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceNumber
  }) + " data-v-1cbbe861> " + (_vm.errors.invoiceNumber ? "<div class=\"invalid-feedback\" data-v-1cbbe861>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.invoiceNumber) + "\n                  ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-1cbbe861>", "</div>", [_vm._ssrNode("<label for=\"clientId\" class=\"required\" data-v-1cbbe861>ລູກຄ້າ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.clientId,
      expression: "form.clientId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.clientId
    },
    attrs: {
      "id": "clientId"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "clientId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onCustomerChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("\n                      ເລືອກລູກຄ້າ " + _vm._s(_vm.customers.length) + "\n                    ")]), _vm._v(" "), _vm._l(_vm.customers, function (customer) {
    return _c('option', {
      key: customer.id,
      domProps: {
        "value": customer.id
      }
    }, [_vm._v("\n                      " + _vm._s(customer.name) + " (" + _vm._s(customer.code || customer.email) + ")\n                    ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.clientId ? "<div class=\"invalid-feedback\" data-v-1cbbe861>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.clientId) + "\n                  ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-1cbbe861>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-1cbbe861>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" data-v-1cbbe861>ສະກຸນເງິນ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.currencyId,
      expression: "form.currencyId"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "currencyId"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onCurrencyChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະກຸນເງິນ")]), _vm._v(" "), _vm._l(_vm.currencies, function (currency) {
    return _c('option', {
      key: currency.id,
      domProps: {
        "value": currency.id
      }
    }, [_vm._v("\n                      " + _vm._s(currency.name) + " (" + _vm._s(currency.code) + ")\n                    ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group col-md-6\" data-v-1cbbe861><label for=\"exchangeRate\" data-v-1cbbe861>ອັດຕາແລກປ່ຽນ</label> <input id=\"exchangeRate\" type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + " class=\"form-control\" data-v-1cbbe861></div>")], 2)], 2), _vm._ssrNode(" <div class=\"form-section\" data-v-1cbbe861><h5 class=\"section-title\" data-v-1cbbe861><i class=\"fas fa-calendar-alt\" data-v-1cbbe861></i>\n                ວັນທີ\n              </h5> <div class=\"form-row\" data-v-1cbbe861><div class=\"form-group col-md-6\" data-v-1cbbe861><label for=\"invoiceDate\" class=\"required\" data-v-1cbbe861>ວັນທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.invoiceDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceDate
  }) + " data-v-1cbbe861> " + (_vm.errors.invoiceDate ? "<div class=\"invalid-feedback\" data-v-1cbbe861>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.invoiceDate) + "\n                  ") + "</div>" : "<!---->") + "</div> <div class=\"form-group col-md-6\" data-v-1cbbe861><label for=\"dueDate\" data-v-1cbbe861>ວັນທີຄົບກຳນົດ</label> <input id=\"dueDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.dueDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.dueDate
  }) + " data-v-1cbbe861> " + (_vm.errors.dueDate ? "<div class=\"invalid-feedback\" data-v-1cbbe861>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.dueDate) + "\n                  ") + "</div>" : "<!---->") + "</div></div></div> "), _vm._ssrNode("<div class=\"form-section\" data-v-1cbbe861>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-1cbbe861><i class=\"fas fa-info\" data-v-1cbbe861></i>\n                ສະຖານະ ແລະ ລາຍລະອຽດ\n              </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-1cbbe861>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-1cbbe861>", "</div>", [_vm._ssrNode("<label for=\"status\" data-v-1cbbe861>ສະຖານະ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "status"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "draft"
    }
  }, [_vm._v("ແບບຮ່າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sent"
    }
  }, [_vm._v("ສົ່ງແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("ຈ່າຍແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "overdue"
    }
  }, [_vm._v("ເກີນກຳນົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("ຍົກເລີກ")])])], 2)]), _vm._ssrNode(" <div class=\"form-group\" data-v-1cbbe861><label for=\"description\" data-v-1cbbe861>ລາຍລະອຽດ</label> <textarea id=\"description\" rows=\"3\" placeholder=\"ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້...\" class=\"form-control\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(_vm.form.description)) + "</textarea></div> " + (_vm.isEdit ? "<div class=\"form-group\" data-v-1cbbe861><label for=\"reason\" class=\"required\" data-v-1cbbe861>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-1cbbe861> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-1cbbe861>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.reason) + "\n                ") + "</div>" : "<!---->") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"amount-summary\" data-v-1cbbe861><div class=\"totals-grid\" data-v-1cbbe861><div class=\"total-item\" data-v-1cbbe861><label data-v-1cbbe861>ລວມຍ່ອຍ:</label> <span class=\"amount\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal))) + "</span></div> <div class=\"total-item\" data-v-1cbbe861><label data-v-1cbbe861>ພາສີລວມ:</label> <span class=\"amount\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTax))) + "</span></div> <div class=\"total-item\" data-v-1cbbe861><label data-v-1cbbe861>ຍອດສຸດທິ:</label> <span class=\"amount\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedNet))) + "</span></div> <div class=\"total-item grand-total\" data-v-1cbbe861><label data-v-1cbbe861>ລວມທັງໝົດ:</label> <span class=\"amount\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal))) + "</span></div></div></div>")], 2)]), _vm._ssrNode(" <div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'lines' ? '' : 'none'
  }) + " data-v-1cbbe861><div class=\"line-items-section\" data-v-1cbbe861><div class=\"add-line-header\" data-v-1cbbe861><h5 class=\"section-title\" data-v-1cbbe861><i class=\"fas fa-list\" data-v-1cbbe861></i>\n                ລາຍການສິນຄ້າ / ການບໍລິການ\n              </h5> <div class=\"add-line-actions\" data-v-1cbbe861><button type=\"button\" class=\"btn btn-primary btn-add-line\" data-v-1cbbe861><i class=\"fas fa-plus-circle\" data-v-1cbbe861></i>\n                  ເພີ່ມລາຍການສິນຄ້າ\n                </button> <span class=\"line-count-info\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length) + " ລາຍການ") + "</span></div></div> " + (_vm.lineItems.length === 0 ? "<div class=\"empty-line-state\" data-v-1cbbe861><div class=\"empty-content\" data-v-1cbbe861><i class=\"fas fa-shopping-cart\" data-v-1cbbe861></i> <h4 data-v-1cbbe861>ຍັງບໍ່ມີລາຍການສິນຄ້າ</h4> <p data-v-1cbbe861>ກະລຸນາເພີ່ມສິນຄ້າຫຼືການບໍລິການເພື່ອສ້າງໃບແຈ້ງໜີ້</p> <button type=\"button\" class=\"btn btn-lg btn-primary\" data-v-1cbbe861><i class=\"fas fa-plus-circle\" data-v-1cbbe861></i>\n                  ເພີ່ມລາຍການທຳອິດ\n                </button></div></div>" : "<div class=\"line-items-table-container\" data-v-1cbbe861><div class=\"line-items-table\" data-v-1cbbe861><table class=\"table\" data-v-1cbbe861><thead data-v-1cbbe861><tr data-v-1cbbe861><th style=\"width: 40px\" data-v-1cbbe861>#</th> <th style=\"width: 200px\" data-v-1cbbe861>ລາຍລະອຽດ *</th> <th style=\"width: 80px\" data-v-1cbbe861>ຈຳນວນ *</th> <th style=\"width: 100px\" data-v-1cbbe861>ລາຄາຕໍ່ຫົວ *</th> <th style=\"width: 80px\" data-v-1cbbe861>ພາສີ %</th> <th style=\"width: 100px\" data-v-1cbbe861>ຍອດພາສີ</th> <th style=\"width: 120px\" data-v-1cbbe861>ລວມຕໍ່ແຖວ</th> <th style=\"width: 60px\" data-v-1cbbe861>ລຶບ</th></tr></thead> <tbody data-v-1cbbe861>" + _vm._ssrList(_vm.lineItems, function (line, index) {
    return "<tr class=\"line-row\" data-v-1cbbe861><td class=\"line-number\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-1cbbe861><input type=\"text\" placeholder=\"ລາຍລະອຽດສິນຄ້າ/ການບໍລິການ...\"" + _vm._ssrAttr("value", line.description) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_description`]
    }) + " data-v-1cbbe861></td> <td data-v-1cbbe861><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.quantity) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_quantity`]
    }) + " data-v-1cbbe861></td> <td data-v-1cbbe861><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.unitPrice) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_unitPrice`]
    }) + " data-v-1cbbe861></td> <td data-v-1cbbe861><input type=\"number\" step=\"0.01\" min=\"0\" max=\"100\"" + _vm._ssrAttr("value", line.taxRate) + " class=\"form-control form-control-sm\" data-v-1cbbe861></td> <td class=\"tax-amount\" data-v-1cbbe861>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.taxAmount || 0)) + "\n                      ") + "</td> <td class=\"line-total\" data-v-1cbbe861>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.lineTotal || 0)) + "\n                      ") + "</td> <td data-v-1cbbe861><button type=\"button\" title=\"ລຶບລາຍການ\" class=\"btn btn-sm btn-danger\" data-v-1cbbe861><i class=\"fas fa-trash\" data-v-1cbbe861></i></button></td></tr>";
  }) + "</tbody></table></div> <div class=\"add-more-lines\" data-v-1cbbe861><button type=\"button\" class=\"btn btn-outline-primary btn-add-more\" data-v-1cbbe861><i class=\"fas fa-plus\" data-v-1cbbe861></i>\n                  ເພີ່ມລາຍການໃໝ່\n                </button> <div class=\"quick-add-buttons\" data-v-1cbbe861><button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-v-1cbbe861>\n                    ເພີ່ມ 3 ລາຍການ\n                  </button> <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-v-1cbbe861>\n                    ເພີ່ມ 5 ລາຍການ\n                  </button></div></div> <div class=\"line-totals-summary\" data-v-1cbbe861><div class=\"totals-grid\" data-v-1cbbe861><div class=\"total-item\" data-v-1cbbe861><label data-v-1cbbe861>ລວມຍ່ອຍ:</label> <span class=\"amount\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal))) + "</span></div> <div class=\"total-item\" data-v-1cbbe861><label data-v-1cbbe861>ພາສີລວມ:</label> <span class=\"amount\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTax))) + "</span></div> <div class=\"total-item\" data-v-1cbbe861><label data-v-1cbbe861>ຍອດສຸດທິ:</label> <span class=\"amount\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedNet))) + "</span></div> <div class=\"total-item grand-total\" data-v-1cbbe861><label data-v-1cbbe861>ລວມທັງໝົດ:</label> <span class=\"amount\" data-v-1cbbe861>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal))) + "</span></div></div></div></div>") + "</div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-1cbbe861><div class=\"footer-actions\" data-v-1cbbe861><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary\" data-v-1cbbe861><i class=\"fas fa-times\" data-v-1cbbe861></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-1cbbe861>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-1cbbe861></i>" : "<i class=\"fas fa-save\" data-v-1cbbe861></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div></div>")], 2), _vm._ssrNode(" "), _c('settlement-audit-dialog', {
    attrs: {
      "visible": _vm.showAuditDialog,
      "settlement-id": _vm.form.id,
      "settlement-info": _vm.settlementInfoForAudit
    },
    on: {
      "close": _vm.closeAuditDialog
    }
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=1cbbe861&scoped=true&

// EXTERNAL MODULE: ./components/accounting/ar/invoice/audit/index.vue + 3 modules
var audit = __webpack_require__(576);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/maintain/index.vue?vue&type=script&lang=js&

/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'InvoiceHeaderMaintain',
  components: {
    SettlementAuditDialog: audit["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    invoice: {
      type: Object,
      default: null
    },
    customers: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showAuditDialog: false,
      // Add audit dialog visibility state
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      lineItems: [],
      nextTempId: 1,
      selectedCustomer: null,
      selectedCurrency: null,
      form: {
        id: null,
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        clientId: '',
        currencyId: '',
        exchangeRate: 1.0,
        totalAmount: 0.0,
        taxAmount: 0.0,
        netAmount: 0.0,
        status: 'draft',
        description: '',
        reason: ''
      }
    };
  },
  computed: {
    isEdit() {
      return !!(this.invoice && this.invoice.id);
    },
    calculatedSubtotal() {
      return this.lineItems.reduce((sum, line) => {
        const subtotal = (parseFloat(line.quantity) || 0) * (parseFloat(line.unitPrice) || 0);
        return sum + subtotal;
      }, 0);
    },
    calculatedTax() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.taxAmount) || 0), 0);
    },
    calculatedNet() {
      return this.calculatedSubtotal;
    },
    calculatedTotal() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.lineTotal) || 0), 0);
    },
    isFormValid() {
      const hasValidHeader = this.form.invoiceNumber && this.form.invoiceDate && this.form.clientId && (!this.isEdit || this.form.reason);
      const hasValidLines = this.lineItems.length > 0 && this.lineItems.every(line => line.description && (parseFloat(line.quantity) || 0) > 0 && (parseFloat(line.unitPrice) || 0) >= 0);
      return hasValidHeader && hasValidLines;
    }
  },
  watch: {
    visible: {
      handler(newVal) {
        if (newVal) {
          this.initializeDialog();
        } else {
          this.resetDialog();
        }
      },
      immediate: true
    },
    invoice: {
      handler() {
        if (this.visible) {
          this.initializeDialog();
        }
      }
    }
  },
  methods: {
    openAuditDialog() {
      if (!this.isEditMode) {
        var _this$$toast;
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.warning('ບໍ່ສາມາດເບິ່ງປະຫວັດການດຳເນີນງານໄດ້ ເນື່ອງຈາກຍັງບໍ່ໄດ້ບັນທຶກການຊຳລະ');
        return;
      }
      this.showAuditDialog = true;
    },
    closeAuditDialog() {
      this.showAuditDialog = false;
    },
    async initializeDialog() {
      this.activeTab = 'header';
      this.clearErrors();
      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          invoiceDate: this.invoice.invoiceDate ? this.invoice.invoiceDate.split('T')[0] : '',
          dueDate: this.invoice.dueDate ? this.invoice.dueDate.split('T')[0] : '',
          clientId: this.invoice.clientId,
          currencyId: this.invoice.currencyId,
          exchangeRate: this.invoice.exchangeRate || 1.0,
          totalAmount: this.invoice.totalAmount || 0.0,
          taxAmount: this.invoice.taxAmount || 0.0,
          netAmount: this.invoice.netAmount || 0.0,
          status: this.invoice.status || 'draft',
          description: this.invoice.description || '',
          reason: ''
        };
        await this.loadLineItems(this.invoice.id);
      } else {
        this.resetForm();

        // Set default date to today
        this.form.invoiceDate = new Date().toISOString().split('T')[0];
        // Set default due date to 30 days from today
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 30);
        this.form.dueDate = dueDate.toISOString().split('T')[0];

        // Initialize with default currency
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'USD') || this.currencies[0];
          this.form.currencyId = defaultCurrency.id;
          this.selectedCurrency = defaultCurrency;
        }

        // Initialize with one empty line item
        this.lineItems = [this.createEmptyLine()];
      }
      this.updateSelectedCustomer();
      this.updateSelectedCurrency();
    },
    resetDialog() {
      this.resetForm();
      this.lineItems = [];
      this.selectedCustomer = null;
      this.selectedCurrency = null;
      this.clearErrors();
      this.activeTab = 'header';
      this.formLoading = false;
      this.saving = false;
    },
    async loadLineItems(invoiceId) {
      try {
        const {
          data
        } = await this.$axios.get(`/api/ar-invoice-lines/by-header/${invoiceId}`);
        this.lineItems = data.data || [this.createEmptyLine()];
        this.lineItems.forEach(line => {
          if (!line.tempId) {
            line.tempId = this.nextTempId++;
          }
        });
      } catch (error) {
        console.error('Error loading line items:', error);
        this.lineItems = [this.createEmptyLine()];
      }
    },
    createEmptyLine() {
      return {
        tempId: this.nextTempId++,
        lineNumber: this.lineItems.length + 1,
        description: '',
        quantity: 1,
        unitPrice: 0,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0
      };
    },
    addNewLine() {
      this.lineItems.push(this.createEmptyLine());
    },
    addMultipleLines(count) {
      for (let i = 0; i < count; i++) {
        this.lineItems.push(this.createEmptyLine());
      }
    },
    removeLine(index) {
      if (this.lineItems.length > 1) {
        this.lineItems.splice(index, 1);
        this.updateLineNumbers();
      }
    },
    updateLineNumbers() {
      this.lineItems.forEach((line, index) => {
        line.lineNumber = index + 1;
      });
    },
    calculateLineTotal(line) {
      const quantity = parseFloat(line.quantity) || 0;
      const unitPrice = parseFloat(line.unitPrice) || 0;
      const taxRate = parseFloat(line.taxRate) || 0;
      const subtotal = quantity * unitPrice;
      const taxAmount = subtotal * (taxRate / 100);
      line.taxAmount = taxAmount;
      line.lineTotal = subtotal + taxAmount;
    },
    updateSelectedCustomer() {
      if (this.form.clientId && this.customers.length > 0) {
        this.selectedCustomer = this.customers.find(c => c.id === this.form.clientId);
      } else {
        this.selectedCustomer = null;
      }
    },
    updateSelectedCurrency() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(c => c.id === this.form.currencyId);
      } else {
        this.selectedCurrency = null;
      }
    },
    onCustomerChange() {
      this.updateSelectedCustomer();
      this.calculateDueDate();
      this.clearFieldError('clientId');
    },
    onCurrencyChange() {
      this.updateSelectedCurrency();
      this.clearFieldError('currencyId');
    },
    calculateDueDate() {
      var _this$selectedCustome;
      if (this.form.invoiceDate && (_this$selectedCustome = this.selectedCustomer) !== null && _this$selectedCustome !== void 0 && _this$selectedCustome.paymentTerms) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(invoiceDate);
        dueDate.setDate(dueDate.getDate() + parseInt(this.selectedCustomer.paymentTerms));
        this.form.dueDate = dueDate.toISOString().split('T')[0];
      }
    },
    validateForm() {
      this.errors = {};

      // Header validation
      if (!this.form.invoiceNumber) {
        this.errors.invoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້';
      }
      if (!this.form.clientId) {
        this.errors.clientId = 'ກະລຸນາເລືອກລູກຄ້າ';
      }
      if (!this.form.invoiceDate) {
        this.errors.invoiceDate = 'ກະລຸນາໃສ່ວັນທີໃບແຈ້ງໜີ້';
      }

      // Date validation
      if (this.form.invoiceDate && this.form.dueDate) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(this.form.dueDate);
        if (dueDate <= invoiceDate) {
          this.errors.dueDate = 'ວັນທີຄົບກຳນົດຕ້ອງຫຼັງຈາກວັນທີໃບແຈ້ງໜີ້';
        }
      }

      // Line items validation
      if (this.lineItems.length === 0) {
        this.errors.lineItems = 'ກະລຸນາເພີ່ມລາຍການສິນຄ້າຢ່າງໜ້ອຍ 1 ລາຍການ';
      } else {
        for (let i = 0; i < this.lineItems.length; i++) {
          const line = this.lineItems[i];
          if (!line.description) {
            this.errors[`line_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດສິນຄ້າ';
          }
          if (!line.quantity || parseFloat(line.quantity) <= 0) {
            this.errors[`line_${i}_quantity`] = 'ຈຳນວນຕ້ອງຫຼາຍກວ່າ 0';
          }
          if (line.unitPrice === '' || parseFloat(line.unitPrice) < 0) {
            this.errors[`line_${i}_unitPrice`] = 'ລາຄາຕ້ອງເປັນຄ່າບວກ';
          }
        }
      }
      if (this.isEdit && !this.form.reason) {
        this.errors.reason = 'ກະລຸນາລະບຸເຫດຜົນຂອງການແກ້ໄຂ';
      }
      return Object.keys(this.errors).length === 0;
    },
    clearErrors() {
      this.errors = {};
    },
    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field);
      }
    },
    handleSubmit() {
      if (!this.validateForm()) {
        // Switch to appropriate tab if there are errors
        if (Object.keys(this.errors).some(key => key.startsWith('line_'))) {
          this.activeTab = 'lines';
        } else {
          this.activeTab = 'header';
        }
        return;
      }
      this.saving = true;
      const formData = {
        ...this.form,
        totalAmount: this.calculatedTotal,
        taxAmount: this.calculatedTax,
        netAmount: this.calculatedNet,
        exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
        lineItems: this.lineItems.map((line, index) => ({
          ...line,
          lineNumber: index + 1,
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          taxRate: parseFloat(line.taxRate) || 0
        }))
      };
      this.$emit('save', formData);
    },
    handleOverlayClick() {
      if (!this.saving) {
        this.handleClose();
      }
    },
    handleClose() {
      this.$emit('close');
    },
    resetForm() {
      this.form = {
        id: null,
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        clientId: '',
        currencyId: '',
        exchangeRate: 1.0,
        totalAmount: 0.0,
        taxAmount: 0.0,
        netAmount: 0.0,
        status: 'draft',
        description: '',
        reason: ''
      };
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`);
      if (this.$toast) {
        this.$toast[type](message);
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var invoice_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(644)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_maintainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1cbbe861",
  "6adf3fc7"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ar-invoice-maintain.js.map