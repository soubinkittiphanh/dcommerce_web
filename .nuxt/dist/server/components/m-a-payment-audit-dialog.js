exports.ids = [62];
exports.modules = {

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(652);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("683701e4", content, true, context)
};

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c476a8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".audit-dialog[data-v-5c476a8a]{max-height:90vh;max-width:900px;width:95%}.audit-header[data-v-5c476a8a]{background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff}.audit-content[data-v-5c476a8a]{max-height:70vh;overflow-y:auto}.error-container[data-v-5c476a8a],.loading-container[data-v-5c476a8a],.no-data-container[data-v-5c476a8a]{color:#666;padding:40px 20px;text-align:center}.spinner[data-v-5c476a8a]{animation:spin-5c476a8a 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#4f46e5;height:40px;margin:0 auto 20px;width:40px}@keyframes spin-5c476a8a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.error-icon[data-v-5c476a8a],.no-data-icon[data-v-5c476a8a]{font-size:48px;margin-bottom:15px;opacity:.5}.audit-summary[data-v-5c476a8a]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:24px}.summary-card[data-v-5c476a8a]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;gap:12px;padding:16px}.summary-card[data-v-5c476a8a],.summary-icon[data-v-5c476a8a]{align-items:center;display:flex}.summary-icon[data-v-5c476a8a]{background:#4f46e5;border-radius:50%;color:#fff;font-size:18px;height:40px;justify-content:center;width:40px}.summary-info[data-v-5c476a8a]{flex:1}.summary-label[data-v-5c476a8a]{color:#64748b;font-size:12px;margin-bottom:4px}.summary-value[data-v-5c476a8a]{color:#1e293b;font-size:16px;font-weight:600}.audit-controls[data-v-5c476a8a]{margin-bottom:24px}.filter-controls[data-v-5c476a8a]{align-items:center;display:flex;gap:12px}.filter-select[data-v-5c476a8a]{border:1px solid #d1d5db;border-radius:6px;font-size:14px;max-width:200px;padding:8px 12px}.audit-timeline[data-v-5c476a8a]{position:relative}.audit-timeline[data-v-5c476a8a]:before{background:#e2e8f0;bottom:0;content:\"\";left:20px;position:absolute;top:0;width:2px}.timeline-item[data-v-5c476a8a]{margin-bottom:24px;margin-left:40px;position:relative}.timeline-item.expandable .timeline-header[data-v-5c476a8a]{cursor:pointer}.timeline-item.expandable .timeline-header[data-v-5c476a8a]:hover{background:#f8fafc}.timeline-marker[data-v-5c476a8a]{align-items:center;background:#fff;border:2px solid #e2e8f0;border-radius:50%;display:flex;font-size:16px;height:40px;justify-content:center;left:-60px;position:absolute;top:8px;width:40px}.timeline-content[data-v-5c476a8a]{background:#fff;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden}.timeline-header[data-v-5c476a8a]{align-items:center;border-radius:8px;display:flex;justify-content:space-between;padding:16px;transition:background-color .2s}.timeline-main-info[data-v-5c476a8a]{flex:1}.timeline-action[data-v-5c476a8a]{align-items:center;display:flex;gap:12px;margin-bottom:4px}.action-badge[data-v-5c476a8a]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 8px;text-transform:uppercase}.action-badge.create[data-v-5c476a8a]{background:#dcfce7;color:#166534}.action-badge.update[data-v-5c476a8a]{background:#fef3c7;color:#92400e}.action-badge.approve[data-v-5c476a8a]{background:#dcfce7;color:#166534}.action-badge.settle[data-v-5c476a8a]{background:#dbeafe;color:#1e40af}.action-badge.delete[data-v-5c476a8a]{background:#fee2e2;color:#dc2626}.timeline-time[data-v-5c476a8a]{color:#64748b;font-size:12px}.timeline-user[data-v-5c476a8a]{align-items:center;color:#475569;display:flex;font-size:14px;gap:6px}.timeline-toggle[data-v-5c476a8a]{align-items:center;color:#64748b;display:flex;gap:8px}.changes-count[data-v-5c476a8a],.toggle-icon[data-v-5c476a8a]{font-size:12px}.toggle-icon[data-v-5c476a8a]{transition:transform .2s}.timeline-reason[data-v-5c476a8a]{align-items:center;background:#f1f5f9;border-top:1px solid #e2e8f0;color:#475569;display:flex;font-size:14px;font-style:italic;gap:8px;padding:8px 16px}.timeline-details[data-v-5c476a8a]{background:#fafbfc;border-top:1px solid #e2e8f0;padding:16px}.changes-list h6[data-v-5c476a8a]{color:#374151;font-size:14px;margin:0 0 12px}.change-item[data-v-5c476a8a]{background:#fff;border:1px solid #e2e8f0;border-radius:6px;margin-bottom:12px;padding:12px}.change-field[data-v-5c476a8a]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.change-values[data-v-5c476a8a]{grid-gap:12px;align-items:center;display:grid;gap:12px;grid-template-columns:1fr auto 1fr}.new-value[data-v-5c476a8a],.old-value[data-v-5c476a8a]{display:flex;flex-direction:column;gap:4px}.value-label[data-v-5c476a8a]{color:#64748b;font-size:12px;font-weight:500}.value[data-v-5c476a8a]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;color:#1e293b;font-size:14px;padding:6px 8px}.old-value .value[data-v-5c476a8a]{background:#fef2f2;border-color:#fecaca;color:#991b1b}.new-value .value[data-v-5c476a8a]{background:#f0fdf4;border-color:#bbf7d0;color:#166534}.arrow[data-v-5c476a8a]{color:#64748b;font-size:14px}.view-full-details[data-v-5c476a8a]{margin-top:12px;text-align:center}.load-more-container[data-v-5c476a8a]{border-top:1px solid #e2e8f0;margin-top:24px;padding-top:24px;text-align:center}.btn[data-v-5c476a8a]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;transition:all .2s}.btn[data-v-5c476a8a]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn-primary[data-v-5c476a8a]{background:#4f46e5;color:#fff}.btn-secondary[data-v-5c476a8a]{background:#6b7280;color:#fff}.btn-info[data-v-5c476a8a]{background:#0ea5e9;color:#fff}.btn-link[data-v-5c476a8a]{background:none;border:1px solid transparent;color:#4f46e5;-webkit-text-decoration:none;text-decoration:none}.btn-link[data-v-5c476a8a]:hover{background:#f0f9ff;border-color:#bae6fd}.btn-sm[data-v-5c476a8a]{font-size:12px;padding:6px 12px}.btn[data-v-5c476a8a]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.audit-footer[data-v-5c476a8a]{background:#f8fafc;border-top:1px solid #e2e8f0;display:flex;gap:12px;justify-content:flex-end}@media (max-width:768px){.audit-dialog[data-v-5c476a8a]{margin:10px;width:98%}.audit-summary[data-v-5c476a8a]{grid-template-columns:1fr}.filter-controls[data-v-5c476a8a]{align-items:stretch;flex-direction:column}.filter-select[data-v-5c476a8a]{max-width:none}.timeline-item[data-v-5c476a8a]{margin-left:20px}.timeline-marker[data-v-5c476a8a]{font-size:14px;height:30px;left:-40px;width:30px}.change-values[data-v-5c476a8a]{gap:8px;grid-template-columns:1fr}.arrow[data-v-5c476a8a]{text-align:center;transform:rotate(90deg)}.audit-footer[data-v-5c476a8a]{flex-direction:column-reverse}.audit-footer .btn[data-v-5c476a8a]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditDialog/index.vue?vue&type=template&id=5c476a8a&scoped=true&
var render = function render() {
  var _vm$auditTrail$, _vm$auditTrail$2;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog audit-dialog\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"modal-header audit-header\" data-v-5c476a8a><div class=\"modal-title-section\" data-v-5c476a8a><i class=\"fas fa-history modal-icon\" data-v-5c476a8a></i> <h5 class=\"modal-title\" data-v-5c476a8a>" + _vm._ssrEscape("\n          ປະຫວັດການປ່ຽນແປງ - " + _vm._s(_vm.recordTitle) + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-5c476a8a><i class=\"fas fa-times\" data-v-5c476a8a></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-5c476a8a>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-container\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-5c476a8a></div> <p data-v-5c476a8a>ກຳລັງໂຫຼດປະຫວັດການປ່ຽນແປງ...</p>")], 2) : _vm.error ? _vm._ssrNode("<div class=\"error-container\" data-v-5c476a8a><div class=\"error-icon\" data-v-5c476a8a><i class=\"fas fa-exclamation-triangle\" data-v-5c476a8a></i></div> <h4 data-v-5c476a8a>ເກີດຂໍ້ຜິດພາດ</h4> <p data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.error)) + "</p> <button class=\"btn btn-primary btn-sm\" data-v-5c476a8a><i class=\"fas fa-redo\" data-v-5c476a8a></i>\n          ລອງໃໝ່\n        </button></div>") : _vm.auditTrail.length === 0 ? _vm._ssrNode("<div class=\"no-data-container\" data-v-5c476a8a><div class=\"no-data-icon\" data-v-5c476a8a><i class=\"fas fa-history\" data-v-5c476a8a></i></div> <h4 data-v-5c476a8a>ບໍ່ມີປະຫວັດການປ່ຽນແປງ</h4> <p data-v-5c476a8a>ບໍ່ພົບປະຫວັດການປ່ຽນແປງສຳລັບບັນຊີນີ້</p></div>") : _vm._ssrNode("<div class=\"audit-content\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"audit-summary\" data-v-5c476a8a><div class=\"summary-card\" data-v-5c476a8a><div class=\"summary-icon\" data-v-5c476a8a><i class=\"fas fa-list\" data-v-5c476a8a></i></div> <div class=\"summary-info\" data-v-5c476a8a><div class=\"summary-label\" data-v-5c476a8a>ລວມການປ່ຽນແປງ</div> <div class=\"summary-value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.auditTrail.length)) + "</div></div></div> <div class=\"summary-card\" data-v-5c476a8a><div class=\"summary-icon\" data-v-5c476a8a><i class=\"fas fa-clock\" data-v-5c476a8a></i></div> <div class=\"summary-info\" data-v-5c476a8a><div class=\"summary-label\" data-v-5c476a8a>ການປ່ຽນແປງລ່າສຸດ</div> <div class=\"summary-value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime((_vm$auditTrail$ = _vm.auditTrail[0]) === null || _vm$auditTrail$ === void 0 ? void 0 : _vm$auditTrail$.changedAt))) + "</div></div></div> <div class=\"summary-card\" data-v-5c476a8a><div class=\"summary-icon\" data-v-5c476a8a><i class=\"fas fa-user\" data-v-5c476a8a></i></div> <div class=\"summary-info\" data-v-5c476a8a><div class=\"summary-label\" data-v-5c476a8a>ຜູ້ປ່ຽນແປງລ່າສຸດ</div> <div class=\"summary-value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(((_vm$auditTrail$2 = _vm.auditTrail[0]) === null || _vm$auditTrail$2 === void 0 ? void 0 : _vm$auditTrail$2.changedBy) || 'ລະບົບ')) + "</div></div></div></div> "), _vm._ssrNode("<div class=\"audit-controls\" data-v-5c476a8a>", "</div>", [_vm._ssrNode("<div class=\"filter-controls\" data-v-5c476a8a>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.actionFilter,
      expression: "actionFilter"
    }],
    staticClass: "form-control filter-select",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.actionFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.filterAuditTrail]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທຸກການດຳເນີນການ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CREATE"
    }
  }, [_vm._v("ສ້າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UPDATE"
    }
  }, [_vm._v("ແກ້ໄຂ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "APPROVE"
    }
  }, [_vm._v("ອະນຸມັດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SETTLE"
    }
  }, [_vm._v("ຊຳລະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DELETE"
    }
  }, [_vm._v("ລົບ")])]), _vm._ssrNode(" <button class=\"btn btn-secondary btn-sm\" data-v-5c476a8a><i class=\"fas fa-download\" data-v-5c476a8a></i>\n              ສົ່ງອອກ\n            </button>")], 2)]), _vm._ssrNode(" <div class=\"audit-timeline\" data-v-5c476a8a>" + _vm._ssrList(_vm.filteredAuditTrail, function (item, index) {
    return "<div" + _vm._ssrClass("timeline-item", {
      'expandable': item.totalChanges > 0
    }) + " data-v-5c476a8a><div class=\"timeline-marker\" data-v-5c476a8a><i" + _vm._ssrClass(null, _vm.getActionIcon(item.action)) + " data-v-5c476a8a></i></div> <div class=\"timeline-content\" data-v-5c476a8a><div class=\"timeline-header\" data-v-5c476a8a><div class=\"timeline-main-info\" data-v-5c476a8a><div class=\"timeline-action\" data-v-5c476a8a><span" + _vm._ssrClass(null, ['action-badge', item.action.toLowerCase()]) + " data-v-5c476a8a>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getActionInLao(item.action)) + "\n                    ") + "</span> <span class=\"timeline-time\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(item.changedAt))) + "</span></div> <div class=\"timeline-user\" data-v-5c476a8a><i class=\"fas fa-user-circle\" data-v-5c476a8a></i>" + _vm._ssrEscape("\n                    " + _vm._s(item.changedBy || 'ລະບົບ') + "\n                  ") + "</div></div> " + (item.totalChanges > 0 ? "<div class=\"timeline-toggle\" data-v-5c476a8a><span class=\"changes-count\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(item.totalChanges) + " ການປ່ຽນແປງ") + "</span> <i" + _vm._ssrClass("toggle-icon", ['fas', item.expanded ? 'fa-chevron-up' : 'fa-chevron-down']) + " data-v-5c476a8a></i></div>" : "<!---->") + "</div> " + (item.reason ? "<div class=\"timeline-reason\" data-v-5c476a8a><i class=\"fas fa-comment\" data-v-5c476a8a></i> <span data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(item.reason)) + "</span></div>" : "<!---->") + " " + (item.expanded && item.keyChanges && item.keyChanges.length > 0 ? "<div class=\"timeline-details\" data-v-5c476a8a><div class=\"changes-list\" data-v-5c476a8a><h6 data-v-5c476a8a>ລາຍລະອຽດການປ່ຽນແປງ:</h6> " + _vm._ssrList(item.keyChanges, function (change) {
      return "<div class=\"change-item\" data-v-5c476a8a><div class=\"change-field\" data-v-5c476a8a><i" + _vm._ssrClass(null, _vm.getFieldIcon(change.field)) + " data-v-5c476a8a></i>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getFieldNameInLao(change.field)) + "\n                    ") + "</div> <div class=\"change-values\" data-v-5c476a8a><div class=\"old-value\" data-v-5c476a8a><span class=\"value-label\" data-v-5c476a8a>ເກົ່າ:</span> <span class=\"value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatValue(change.field, change.oldValue))) + "</span></div> <div class=\"arrow\" data-v-5c476a8a><i class=\"fas fa-arrow-right\" data-v-5c476a8a></i></div> <div class=\"new-value\" data-v-5c476a8a><span class=\"value-label\" data-v-5c476a8a>ໃໝ່:</span> <span class=\"value\" data-v-5c476a8a>" + _vm._ssrEscape(_vm._s(_vm.formatValue(change.field, change.newValue))) + "</span></div></div></div>";
    }) + "</div></div>" : "<!---->") + " " + (item.totalChanges > 3 && item.expanded ? "<div class=\"view-full-details\" data-v-5c476a8a><button class=\"btn btn-link btn-sm\" data-v-5c476a8a><i class=\"fas fa-eye\" data-v-5c476a8a></i>" + _vm._ssrEscape("\n                  ເບິ່ງລາຍລະອຽດທັງໝົດ (" + _vm._s(item.totalChanges) + " ການປ່ຽນແປງ)\n                ") + "</button></div>" : "<!---->") + "</div></div>";
  }) + "</div> " + (_vm.hasMoreData ? "<div class=\"load-more-container\" data-v-5c476a8a><button" + _vm._ssrAttr("disabled", _vm.loadingMore) + " class=\"btn btn-secondary\" data-v-5c476a8a>" + (_vm.loadingMore ? "<i class=\"fas fa-spinner fa-spin\" data-v-5c476a8a></i>" : "<i class=\"fas fa-plus\" data-v-5c476a8a></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.loadingMore ? 'ກຳລັງໂຫຼດ...' : 'ໂຫຼດເພີ່ມ') + "\n          ") + "</button></div>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"modal-footer audit-footer\" data-v-5c476a8a><button" + _vm._ssrAttr("disabled", _vm.auditTrail.length < 2) + " class=\"btn btn-info\" data-v-5c476a8a><i class=\"fas fa-balance-scale\" data-v-5c476a8a></i>\n        ປຽບທຽບເວີຊັ່ນ\n      </button> <button class=\"btn btn-secondary\" data-v-5c476a8a><i class=\"fas fa-times\" data-v-5c476a8a></i>\n        ປິດ\n      </button></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentAuditDialog/index.vue?vue&type=template&id=5c476a8a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentAuditDialogvue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceAuditDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    recordId: {
      type: [Number, String],
      required: true
    },
    recordTitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      auditTrail: [],
      filteredAuditTrail: [],
      loading: false,
      loadingMore: false,
      error: null,
      actionFilter: '',
      currentPage: 1,
      hasMoreData: false,
      // Lao translations
      actionLabels: {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ',
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      },
      fieldLabels: {
        amount: 'ຈຳນວນເງິນ',
        purpose: 'ຈຸດປະສົງ',
        status: 'ສະຖານະ',
        note: 'ໂນ໊ດ',
        dueDate: 'ວັນຄົບຮອບ',
        bookingDate: 'ວັນທີບັນຊີ',
        makerId: 'ຜູ້ລົງບັນຊີ',
        checkerId: 'ຜູ້ກວດ',
        currencyId: 'ສະກຸນເງິນ',
        bankAccountId: 'ບັນຊີທະນາຄານ',
        ministryId: 'ກະຊວງ',
        exchangeRate: 'ອັດຕາແລກປ່ຽນ',
        approvedAt: 'ວັນທີອະນຸມັດ'
      }
    };
  },
  watch: {
    show(newVal) {
      if (newVal && this.recordId) {
        this.loadAuditTrail();
      }
    },
    recordId(newVal) {
      if (newVal && this.show) {
        this.loadAuditTrail();
      }
    }
  },
  methods: {
    async loadAuditTrail() {
      this.loading = true;
      this.error = null;
      this.currentPage = 1;
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 20,
            offset: 0
          }
        });
        this.auditTrail = response.data.data.map(item => ({
          ...item,
          expanded: false
        }));
        this.hasMoreData = response.data.data.length === 20;
        this.filterAuditTrail();
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error loading audit trail:', error);
        this.error = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ';
      } finally {
        this.loading = false;
      }
    },
    async loadMoreAuditTrail() {
      this.loadingMore = true;
      this.currentPage++;
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 20,
            offset: (this.currentPage - 1) * 20
          }
        });
        const newItems = response.data.data.map(item => ({
          ...item,
          expanded: false
        }));
        this.auditTrail.push(...newItems);
        this.hasMoreData = newItems.length === 20;
        this.filterAuditTrail();
      } catch (error) {
        console.error('Error loading more audit trail:', error);
        this.currentPage--; // Revert page increment on error
      } finally {
        this.loadingMore = false;
      }
    },
    filterAuditTrail() {
      if (this.actionFilter) {
        this.filteredAuditTrail = this.auditTrail.filter(item => item.action === this.actionFilter);
      } else {
        this.filteredAuditTrail = [...this.auditTrail];
      }
    },
    toggleExpand(item) {
      if (item.totalChanges > 0) {
        this.$set(item, 'expanded', !item.expanded);
      }
    },
    getActionInLao(action) {
      return this.actionLabels[action] || action;
    },
    getFieldNameInLao(field) {
      return this.fieldLabels[field] || field;
    },
    getActionIcon(action) {
      const icons = {
        CREATE: 'fas fa-plus text-success',
        UPDATE: 'fas fa-edit text-warning',
        APPROVE: 'fas fa-check text-success',
        SETTLE: 'fas fa-money-bill text-info',
        DELETE: 'fas fa-trash text-danger'
      };
      return icons[action] || 'fas fa-circle';
    },
    getFieldIcon(field) {
      const icons = {
        amount: 'fas fa-dollar-sign',
        purpose: 'fas fa-tag',
        status: 'fas fa-flag',
        note: 'fas fa-sticky-note',
        dueDate: 'fas fa-calendar',
        bookingDate: 'fas fa-calendar-alt',
        makerId: 'fas fa-user',
        checkerId: 'fas fa-user-check',
        currencyId: 'fas fa-coins',
        bankAccountId: 'fas fa-university',
        ministryId: 'fas fa-building',
        exchangeRate: 'fas fa-exchange-alt',
        approvedAt: 'fas fa-check-circle'
      };
      return icons[field] || 'fas fa-info-circle';
    },
    formatValue(field, value) {
      if (value === null || value === undefined) {
        return 'ບໍ່ມີ';
      }
      if (field === 'amount') {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(value);
      }
      if (field.includes('Date') || field.includes('At')) {
        return this.formatDate(value);
      }
      if (field === 'status') {
        const statusLabels = {
          pending: 'ຄ້າງອະນຸມັດ',
          approved: 'ອະນຸມັດແລ້ວ',
          settled: 'ຊຳລະແລ້ວ'
        };
        return statusLabels[value] || value;
      }
      return value.toString();
    },
    formatDateTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString('lo-LA');
    },
    async exportAuditTrail() {
      try {
        const response = await this.$axios.get(`/api/money-advances/${this.recordId}/audit`, {
          params: {
            limit: 1000,
            offset: 0,
            format: 'csv'
          },
          responseType: 'blob'
        });
        const blob = new Blob([response.data], {
          type: 'text/csv'
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `audit-trail-${this.recordId}-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Export error:', error);
        this.$emit('show-toast', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກຂໍ້ມູນ', 'error');
      }
    },
    compareVersions() {
      this.$emit('compare-versions', this.recordId);
    },
    viewFullDetails(item) {
      this.$emit('view-full-details', item);
    },
    closeDialog() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentAuditDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentAuditDialogvue_type_script_lang_js_ = (paymentAuditDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentAuditDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(651)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentAuditDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c476a8a",
  "2eaf8618"
  
)

/* harmony default export */ var paymentAuditDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-payment-audit-dialog.js.map