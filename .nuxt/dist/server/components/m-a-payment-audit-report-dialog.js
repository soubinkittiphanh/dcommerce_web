exports.ids = [63];
exports.modules = {

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(583);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("9673ac5e", content, true, context)
};

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(514);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7e1ed358_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-7e1ed358]{align-items:center;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.reports-dialog[data-v-7e1ed358]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1200px;overflow:hidden;width:95%}.modal-header[data-v-7e1ed358]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-7e1ed358]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-7e1ed358]{font-size:20px}.modal-title[data-v-7e1ed358]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-7e1ed358]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-7e1ed358]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-7e1ed358]{max-height:70vh;overflow-y:auto;padding:0}.tabs-container[data-v-7e1ed358]{background:#f8f9fa;border-bottom:1px solid #e9ecef}.tabs[data-v-7e1ed358]{display:flex;padding:0 24px}.tab-btn[data-v-7e1ed358]{align-items:center;background:none;border:none;border-bottom:3px solid transparent;color:#6c757d;cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:8px;padding:16px 24px;transition:all .2s ease}.tab-btn[data-v-7e1ed358]:hover{background:hsla(0,0%,100%,.5);color:#495057}.tab-btn.active[data-v-7e1ed358]{background:#fff;border-bottom-color:#667eea;color:#667eea}.report-content[data-v-7e1ed358]{padding:24px}.report-header[data-v-7e1ed358]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;margin-bottom:24px;padding-bottom:16px}.report-header h6[data-v-7e1ed358]{color:#2c3e50;font-size:16px;gap:8px;margin:0}.date-filter[data-v-7e1ed358],.report-header h6[data-v-7e1ed358]{align-items:center;display:flex}.date-filter[data-v-7e1ed358]{gap:12px}.date-filter span[data-v-7e1ed358]{color:#6c757d;font-size:14px}.form-control[data-v-7e1ed358]{border:1px solid #ddd;border-radius:4px;font-size:14px;padding:8px 12px}.loading-state[data-v-7e1ed358]{align-items:center;color:#6c757d;display:flex;gap:12px;justify-content:center;padding:60px}.spinner-sm[data-v-7e1ed358]{animation:spin-7e1ed358 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#667eea;height:20px;width:20px}.activity-summary[data-v-7e1ed358]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:24px}.summary-card[data-v-7e1ed358]{background:#fff;border:1px solid #e9ecef;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);gap:12px;padding:16px}.summary-card[data-v-7e1ed358],.summary-icon[data-v-7e1ed358]{align-items:center;display:flex}.summary-icon[data-v-7e1ed358]{background:#667eea;border-radius:50%;color:#fff;font-size:16px;height:40px;justify-content:center;width:40px}.summary-number[data-v-7e1ed358]{color:#2c3e50;font-size:20px;font-weight:700}.summary-text[data-v-7e1ed358]{color:#2c3e50;font-size:14px;font-weight:600}.summary-label[data-v-7e1ed358]{color:#7f8c8d;font-size:11px;margin-top:4px}.activity-table[data-v-7e1ed358]{border:1px solid #e9ecef;border-radius:8px;overflow:hidden}.table[data-v-7e1ed358]{border-collapse:collapse;margin:0;width:100%}.table th[data-v-7e1ed358]{background:#f8f9fa;border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;text-align:left}.table td[data-v-7e1ed358],.table th[data-v-7e1ed358]{font-size:13px;padding:12px}.table td[data-v-7e1ed358]{border-bottom:1px solid #f1f3f4}.user-info[data-v-7e1ed358]{display:flex;flex-direction:column;gap:2px}.user-name[data-v-7e1ed358]{color:#2c3e50;font-weight:600}.user-id[data-v-7e1ed358]{color:#7f8c8d;font-size:11px}.activity-count[data-v-7e1ed358]{border-radius:12px;display:inline-block;font-size:11px;font-weight:600;min-width:24px;padding:4px 8px;text-align:center}.activity-count.create[data-v-7e1ed358]{background:#d4edda;color:#155724}.activity-count.update[data-v-7e1ed358]{background:#fff3cd;color:#856404}.activity-count.approve[data-v-7e1ed358]{background:#cce5ff;color:#004085}.activity-count.settle[data-v-7e1ed358]{background:#e2e3e5;color:#495057}.activity-count.delete[data-v-7e1ed358]{background:#f8d7da;color:#721c24}.total-count[data-v-7e1ed358]{color:#2c3e50;font-weight:700}.chart-container[data-v-7e1ed358]{margin-bottom:32px}.chart-container h6[data-v-7e1ed358]{color:#2c3e50;margin-bottom:16px}.chart-placeholder[data-v-7e1ed358]{background:#f8f9fa;border-radius:8px;min-height:200px;padding:20px}.chart-bars[data-v-7e1ed358]{align-items:end;display:flex;gap:4px;height:150px;margin-bottom:8px}.chart-bar[data-v-7e1ed358]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:4px 4px 0 0;cursor:pointer;flex:1;min-height:8px;position:relative;transition:all .2s ease}.chart-bar[data-v-7e1ed358]:hover{opacity:.8}.bar-value[data-v-7e1ed358]{color:#495057;font-size:10px;font-weight:600;left:50%;position:absolute;top:-20px;transform:translateX(-50%)}.chart-labels[data-v-7e1ed358]{display:flex;gap:4px}.chart-label[data-v-7e1ed358]{color:#6c757d;flex:1;font-size:10px;text-align:center}.breakdown-grid[data-v-7e1ed358]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:32px}.breakdown-item[data-v-7e1ed358]{align-items:center;background:#f8f9fa;border-radius:8px;display:flex;gap:12px;padding:16px}.breakdown-icon[data-v-7e1ed358]{align-items:center;border-radius:50%;color:#fff;display:flex;font-size:14px;height:32px;justify-content:center;width:32px}.breakdown-icon.create[data-v-7e1ed358]{background:#28a745}.breakdown-icon.update[data-v-7e1ed358]{background:#ffc107;color:#212529}.breakdown-icon.approve[data-v-7e1ed358]{background:#17a2b8}.breakdown-icon.settle[data-v-7e1ed358]{background:#6c757d}.breakdown-icon.delete[data-v-7e1ed358]{background:#dc3545}.breakdown-label[data-v-7e1ed358]{color:#2c3e50;font-size:12px;font-weight:600}.breakdown-count[data-v-7e1ed358]{color:#495057;font-size:18px;font-weight:700}.breakdown-percentage[data-v-7e1ed358]{color:#7f8c8d;font-size:11px}.changes-timeline[data-v-7e1ed358]{display:flex;flex-direction:column;gap:12px}.change-item[data-v-7e1ed358]{background:#f8f9fa;border-radius:6px;gap:12px;padding:12px}.change-icon[data-v-7e1ed358],.change-item[data-v-7e1ed358]{align-items:center;display:flex}.change-icon[data-v-7e1ed358]{border-radius:50%;color:#fff;font-size:10px;height:24px;justify-content:center;width:24px}.change-content[data-v-7e1ed358]{flex:1}.change-text[data-v-7e1ed358]{color:#495057;font-size:13px;margin-bottom:2px}.change-time[data-v-7e1ed358]{color:#7f8c8d;font-size:11px}.export-options[data-v-7e1ed358]{display:flex;flex-direction:column;gap:24px}.export-option[data-v-7e1ed358]{border:1px solid #e9ecef;border-radius:8px;padding:20px}.option-header[data-v-7e1ed358]{align-items:center;display:flex;gap:12px;margin-bottom:12px}.option-header i[data-v-7e1ed358]{color:#667eea;font-size:18px}.option-header h6[data-v-7e1ed358]{color:#2c3e50;margin:0}.export-controls[data-v-7e1ed358]{gap:12px;margin-top:16px}.date-range[data-v-7e1ed358],.export-controls[data-v-7e1ed358]{align-items:center;display:flex}.date-range[data-v-7e1ed358]{gap:8px}.backup-info[data-v-7e1ed358]{color:#6c757d}.btn[data-v-7e1ed358]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:8px 16px;transition:all .2s ease}.btn[data-v-7e1ed358]:hover:not(:disabled){transform:translateY(-1px)}.btn[data-v-7e1ed358]:disabled{cursor:not-allowed;opacity:.6;transform:none!important}.btn-primary[data-v-7e1ed358]{background:#667eea;color:#fff}.btn-secondary[data-v-7e1ed358]{background:#6c757d;color:#fff}.btn-warning[data-v-7e1ed358]{background:#ffc107;color:#212529}.btn-outline[data-v-7e1ed358]{background:#fff;border:2px solid #667eea;color:#667eea}.btn-outline[data-v-7e1ed358]:hover:not(:disabled){background:#667eea;color:#fff}.btn-sm[data-v-7e1ed358]{font-size:12px;padding:6px 12px}.modal-footer[data-v-7e1ed358]{align-items:center;background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;padding:20px 24px}.no-data[data-v-7e1ed358]{color:#6c757d;padding:60px 20px;text-align:center}.no-data i[data-v-7e1ed358]{font-size:48px;margin-bottom:16px;opacity:.5}@media (max-width:768px){.reports-dialog[data-v-7e1ed358]{margin:10px;width:98%}.tabs[data-v-7e1ed358]{overflow-x:auto;padding:0 16px}.tab-btn[data-v-7e1ed358]{padding:12px 16px;white-space:nowrap}.report-content[data-v-7e1ed358]{padding:16px}.report-header[data-v-7e1ed358]{align-items:stretch;flex-direction:column;gap:16px}.date-filter[data-v-7e1ed358]{flex-wrap:wrap}.activity-summary[data-v-7e1ed358],.breakdown-grid[data-v-7e1ed358]{grid-template-columns:1fr}.export-controls[data-v-7e1ed358]{align-items:stretch;flex-direction:column}.date-range[data-v-7e1ed358]{justify-content:center}}@keyframes spin-7e1ed358{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditReportDialog/index.vue?vue&type=template&id=7e1ed358&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog reports-dialog\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-7e1ed358><div class=\"modal-title-section\" data-v-7e1ed358><i class=\"fas fa-chart-line modal-icon\" data-v-7e1ed358></i> <h5 class=\"modal-title\" data-v-7e1ed358>ລາຍງານປະຫວັດການປ່ຽນແປງ</h5></div> <button class=\"close-btn\" data-v-7e1ed358><i class=\"fas fa-times\" data-v-7e1ed358></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"tabs-container\" data-v-7e1ed358><div class=\"tabs\" data-v-7e1ed358>" + _vm._ssrList(_vm.reportTabs, function (tab) {
    return "<button" + _vm._ssrClass(null, ['tab-btn', {
      active: _vm.activeTab === tab.id
    }]) + " data-v-7e1ed358><i" + _vm._ssrClass(null, tab.icon) + " data-v-7e1ed358></i>" + _vm._ssrEscape("\n            " + _vm._s(tab.label) + "\n          ") + "</button>";
  }) + "</div></div> " + (_vm.activeTab === 'user-activity' ? "<div class=\"report-content\" data-v-7e1ed358><div class=\"report-header\" data-v-7e1ed358><h6 data-v-7e1ed358><i class=\"fas fa-users\" data-v-7e1ed358></i>\n            ລາຍງານກິດຈະກຳຜູ້ໃຊ້\n          </h6> <div class=\"date-filter\" data-v-7e1ed358><input type=\"date\"" + _vm._ssrAttr("value", _vm.userActivityFilter.startDate) + " class=\"form-control\" data-v-7e1ed358> <span data-v-7e1ed358>ຫາ</span> <input type=\"date\"" + _vm._ssrAttr("value", _vm.userActivityFilter.endDate) + " class=\"form-control\" data-v-7e1ed358> <button class=\"btn btn-primary btn-sm\" data-v-7e1ed358><i class=\"fas fa-search\" data-v-7e1ed358></i>\n              ຄົ້ນຫາ\n            </button></div></div> " + (_vm.userActivityLoading ? "<div class=\"loading-state\" data-v-7e1ed358><div class=\"spinner-sm\" data-v-7e1ed358></div> <span data-v-7e1ed358>ກຳລັງໂຫຼດຂໍ້ມູນ...</span></div>" : _vm.userActivityData.length > 0 ? "<div class=\"user-activity-content\" data-v-7e1ed358><div class=\"activity-summary\" data-v-7e1ed358><div class=\"summary-card\" data-v-7e1ed358><div class=\"summary-icon\" data-v-7e1ed358><i class=\"fas fa-user-friends\" data-v-7e1ed358></i></div> <div class=\"summary-info\" data-v-7e1ed358><div class=\"summary-number\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.uniqueActiveUsers)) + "</div> <div class=\"summary-label\" data-v-7e1ed358>ຜູ້ໃຊ້ທີ່ມີກິດຈະກຳ</div></div></div> <div class=\"summary-card\" data-v-7e1ed358><div class=\"summary-icon\" data-v-7e1ed358><i class=\"fas fa-edit\" data-v-7e1ed358></i></div> <div class=\"summary-info\" data-v-7e1ed358><div class=\"summary-number\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.totalActivities)) + "</div> <div class=\"summary-label\" data-v-7e1ed358>ລວມກິດຈະກຳ</div></div></div> <div class=\"summary-card\" data-v-7e1ed358><div class=\"summary-icon\" data-v-7e1ed358><i class=\"fas fa-crown\" data-v-7e1ed358></i></div> <div class=\"summary-info\" data-v-7e1ed358><div class=\"summary-text\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.mostActiveUser)) + "</div> <div class=\"summary-label\" data-v-7e1ed358>ຜູ້ໃຊ້ທີ່ມີກິດຈະກຳສູງສຸດ</div></div></div></div> <div class=\"activity-table\" data-v-7e1ed358><table class=\"table\" data-v-7e1ed358><thead data-v-7e1ed358><tr data-v-7e1ed358><th data-v-7e1ed358>ຜູ້ໃຊ້</th> <th data-v-7e1ed358>ສ້າງ</th> <th data-v-7e1ed358>ແກ້ໄຂ</th> <th data-v-7e1ed358>ອະນຸມັດ</th> <th data-v-7e1ed358>ຊຳລະ</th> <th data-v-7e1ed358>ລົບ</th> <th data-v-7e1ed358>ລວມ</th> <th data-v-7e1ed358>ກິດຈະກຳຫຼ້າສຸດ</th></tr></thead> <tbody data-v-7e1ed358>" + _vm._ssrList(_vm.userActivityData, function (user) {
    return "<tr data-v-7e1ed358><td data-v-7e1ed358><div class=\"user-info\" data-v-7e1ed358><div class=\"user-name\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.userName)) + "</div> <div class=\"user-id\" data-v-7e1ed358>" + _vm._ssrEscape("ID: " + _vm._s(user.userId)) + "</div></div></td> <td data-v-7e1ed358><span class=\"activity-count create\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.CREATE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count update\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.UPDATE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count approve\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.APPROVE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count settle\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.SETTLE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"activity-count delete\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.activities.DELETE || 0)) + "</span></td> <td data-v-7e1ed358><span class=\"total-count\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(user.totalActivities)) + "</span></td> <td data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(user.lastActivity))) + "</td></tr>";
  }) + "</tbody></table></div></div>" : "<div class=\"no-data\" data-v-7e1ed358><i class=\"fas fa-chart-bar\" data-v-7e1ed358></i> <p data-v-7e1ed358>ບໍ່ມີຂໍ້ມູນກິດຈະກຳໃນຊ່ວງເວລານີ້</p></div>") + "</div>" : "<!---->") + " "), _vm.activeTab === 'system-activity' ? _vm._ssrNode("<div class=\"report-content\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"report-header\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<h6 data-v-7e1ed358><i class=\"fas fa-server\" data-v-7e1ed358></i>\n            ລາຍງານກິດຈະກຳລະບົບ\n          </h6> "), _vm._ssrNode("<div class=\"date-filter\" data-v-7e1ed358>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.systemActivityFilter.period,
      expression: "systemActivityFilter.period"
    }],
    staticClass: "form-control",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.systemActivityFilter, "period", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.fetchSystemActivity]
    }
  }, [_c('option', {
    attrs: {
      "value": "7"
    }
  }, [_vm._v("7 ວັນຜ່ານມາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "30"
    }
  }, [_vm._v("30 ວັນຜ່ານມາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "90"
    }
  }, [_vm._v("90 ວັນຜ່ານມາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "365"
    }
  }, [_vm._v("1 ປີຜ່ານມາ")])]), _vm._ssrNode(" <button class=\"btn btn-primary btn-sm\" data-v-7e1ed358><i class=\"fas fa-sync\" data-v-7e1ed358></i>\n              ອັບເດດ\n            </button>")], 2)], 2), _vm._ssrNode(" " + (_vm.systemActivityLoading ? "<div class=\"loading-state\" data-v-7e1ed358><div class=\"spinner-sm\" data-v-7e1ed358></div> <span data-v-7e1ed358>ກຳລັງໂຫຼດຂໍ້ມູນ...</span></div>" : _vm.systemActivityData ? "<div class=\"system-activity-content\" data-v-7e1ed358><div class=\"chart-container\" data-v-7e1ed358><h6 data-v-7e1ed358>ກິດຈະກຳລາຍວັນ</h6> <div class=\"chart-placeholder\" data-v-7e1ed358><div class=\"chart-bars\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.dailyStats, function (day, index) {
    return "<div" + _vm._ssrAttr("title", `${day.date}: ${day.count} ກິດຈະກຳ`) + " class=\"chart-bar\"" + _vm._ssrStyle(null, {
      height: day.count / _vm.maxDailyActivity * 100 + '%'
    }, null) + " data-v-7e1ed358><div class=\"bar-value\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(day.count)) + "</div></div>";
  }) + "</div> <div class=\"chart-labels\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.dailyStats, function (day, index) {
    return "<span class=\"chart-label\" data-v-7e1ed358>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatShortDate(day.date)) + "\n                ") + "</span>";
  }) + "</div></div></div> <div class=\"activity-breakdown\" data-v-7e1ed358><h6 data-v-7e1ed358>ການແບ່ງປະເພດກິດຈະກຳ</h6> <div class=\"breakdown-grid\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.activityBreakdown, function (activity) {
    return "<div class=\"breakdown-item\" data-v-7e1ed358><div" + _vm._ssrClass("breakdown-icon", activity.action.toLowerCase()) + " data-v-7e1ed358><i" + _vm._ssrClass(null, _vm.getActivityIcon(activity.action)) + " data-v-7e1ed358></i></div> <div class=\"breakdown-info\" data-v-7e1ed358><div class=\"breakdown-label\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.getActivityLabel(activity.action))) + "</div> <div class=\"breakdown-count\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(activity.count)) + "</div> <div class=\"breakdown-percentage\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(activity.percentage) + "%") + "</div></div></div>";
  }) + "</div></div> <div class=\"recent-changes\" data-v-7e1ed358><h6 data-v-7e1ed358>ການປ່ຽນແປງຫຼ້າສຸດ</h6> <div class=\"changes-timeline\" data-v-7e1ed358>" + _vm._ssrList(_vm.systemActivityData.recentChanges, function (change) {
    return "<div class=\"change-item\" data-v-7e1ed358><div" + _vm._ssrClass("change-icon", change.action.toLowerCase()) + " data-v-7e1ed358><i" + _vm._ssrClass(null, _vm.getActivityIcon(change.action)) + " data-v-7e1ed358></i></div> <div class=\"change-content\" data-v-7e1ed358><div class=\"change-text\" data-v-7e1ed358><strong data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(change.user)) + "</strong>" + _vm._ssrEscape(" \n                    " + _vm._s(_vm.getActivityLabel(change.action)) + " \n                    ") + "<em data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(change.recordPurpose || `Record #${change.recordId}`)) + "</em></div> <div class=\"change-time\" data-v-7e1ed358>" + _vm._ssrEscape(_vm._s(_vm.formatRelativeTime(change.changedAt))) + "</div></div></div>";
  }) + "</div></div></div>" : "<div class=\"no-data\" data-v-7e1ed358><i class=\"fas fa-server\" data-v-7e1ed358></i> <p data-v-7e1ed358>ບໍ່ມີຂໍ້ມູນກິດຈະກຳລະບົບ</p></div>"))], 2) : _vm._e(), _vm._ssrNode(" "), _vm.activeTab === 'export' ? _vm._ssrNode("<div class=\"report-content\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"export-content\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<h6 data-v-7e1ed358><i class=\"fas fa-download\" data-v-7e1ed358></i>\n            ສົ່ງອອກລາຍງານ\n          </h6> "), _vm._ssrNode("<div class=\"export-options\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"export-option\" data-v-7e1ed358><div class=\"option-header\" data-v-7e1ed358><i class=\"fas fa-file-csv\" data-v-7e1ed358></i> <h6 data-v-7e1ed358>ສົ່ງອອກຂໍ້ມູນ CSV</h6></div> <p data-v-7e1ed358>ສົ່ງອອກຂໍ້ມູນປະຫວັດການປ່ຽນແປງໃນຮູບແບບ CSV ສຳລັບການວິເຄາະ</p> <div class=\"export-controls\" data-v-7e1ed358><div class=\"date-range\" data-v-7e1ed358><input type=\"date\"" + _vm._ssrAttr("value", _vm.exportFilter.startDate) + " class=\"form-control\" data-v-7e1ed358> <span data-v-7e1ed358>ຫາ</span> <input type=\"date\"" + _vm._ssrAttr("value", _vm.exportFilter.endDate) + " class=\"form-control\" data-v-7e1ed358></div> <button" + _vm._ssrAttr("disabled", _vm.exportLoading) + " class=\"btn btn-secondary\" data-v-7e1ed358>" + (_vm.exportLoading ? "<i class=\"fas fa-spinner fa-spin\" data-v-7e1ed358></i>" : "<i class=\"fas fa-download\" data-v-7e1ed358></i>") + "\n                  ສົ່ງອອກ CSV\n                </button></div></div> "), _vm._ssrNode("<div class=\"export-option\" data-v-7e1ed358>", "</div>", [_vm._ssrNode("<div class=\"option-header\" data-v-7e1ed358><i class=\"fas fa-chart-pie\" data-v-7e1ed358></i> <h6 data-v-7e1ed358>ລາຍງານສະຫຼຸບ</h6></div> <p data-v-7e1ed358>ສົ່ງອອກລາຍງານສະຫຼຸບດ້ວຍກາຟິກແລະການວິເຄາະ</p> "), _vm._ssrNode("<div class=\"export-controls\" data-v-7e1ed358>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.exportFilter.reportType,
      expression: "exportFilter.reportType"
    }],
    staticClass: "form-control",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.exportFilter, "reportType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "summary"
    }
  }, [_vm._v("ສະຫຼຸບທົ່ວໄປ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "user-activity"
    }
  }, [_vm._v("ກິດຈະກຳຜູ້ໃຊ້")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "trend-analysis"
    }
  }, [_vm._v("ການວິເຄາະແນວໂນ້ມ")])]), _vm._ssrNode(" <button" + _vm._ssrAttr("disabled", _vm.exportLoading) + " class=\"btn btn-primary\" data-v-7e1ed358>" + (_vm.exportLoading ? "<i class=\"fas fa-spinner fa-spin\" data-v-7e1ed358></i>" : "<i class=\"fas fa-file-pdf\" data-v-7e1ed358></i>") + "\n                  ສ້າງລາຍງານ\n                </button>")], 2)], 2), _vm._ssrNode(" <div class=\"export-option\" data-v-7e1ed358><div class=\"option-header\" data-v-7e1ed358><i class=\"fas fa-database\" data-v-7e1ed358></i> <h6 data-v-7e1ed358>ສໍາລອງຂໍ້ມູນ</h6></div> <p data-v-7e1ed358>ສໍາລອງຂໍ້ມູນປະຫວັດການປ່ຽນແປງທັງໝົດ</p> <div class=\"export-controls\" data-v-7e1ed358><div class=\"backup-info\" data-v-7e1ed358><small data-v-7e1ed358>ຂໍ້ມູນທັງໝົດຈະຖືກສໍາລອງໃນຮູບແບບ JSON</small></div> <button" + _vm._ssrAttr("disabled", _vm.exportLoading) + " class=\"btn btn-warning\" data-v-7e1ed358>" + (_vm.exportLoading ? "<i class=\"fas fa-spinner fa-spin\" data-v-7e1ed358></i>" : "<i class=\"fas fa-archive\" data-v-7e1ed358></i>") + "\n                  ສໍາລອງຂໍ້ມູນ\n                </button></div></div>")], 2)], 2)]) : _vm._e()], 2), _vm._ssrNode(" <div class=\"modal-footer\" data-v-7e1ed358><button" + _vm._ssrAttr("disabled", _vm.isLoading) + " class=\"btn btn-outline\" data-v-7e1ed358><i class=\"fas fa-sync\" data-v-7e1ed358></i>\n        ອັບເດດ\n      </button> <button class=\"btn btn-primary\" data-v-7e1ed358><i class=\"fas fa-times\" data-v-7e1ed358></i>\n        ປິດ\n      </button></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentAuditReportDialog/index.vue?vue&type=template&id=7e1ed358&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentAuditReportDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentAuditReportDialogvue_type_script_lang_js_ = ({
  name: 'AuditReportsDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeTab: 'user-activity',
      reportTabs: [{
        id: 'user-activity',
        label: 'ກິດຈະກຳຜູ້ໃຊ້',
        icon: 'fas fa-users'
      }, {
        id: 'system-activity',
        label: 'ກິດຈະກຳລະບົບ',
        icon: 'fas fa-server'
      }, {
        id: 'export',
        label: 'ສົ່ງອອກ',
        icon: 'fas fa-download'
      }],
      // User Activity
      userActivityLoading: false,
      userActivityData: [],
      userActivityFilter: {
        startDate: this.getDateDaysAgo(30),
        endDate: this.getTodayDate()
      },
      // System Activity
      systemActivityLoading: false,
      systemActivityData: null,
      systemActivityFilter: {
        period: '30'
      },
      // Export
      exportLoading: false,
      exportFilter: {
        startDate: this.getDateDaysAgo(30),
        endDate: this.getTodayDate(),
        reportType: 'summary'
      },
      actionLabels: {
        CREATE: 'ສ້າງ',
        UPDATE: 'ແກ້ໄຂ',
        APPROVE: 'ອະນຸມັດ',
        SETTLE: 'ຊຳລະ',
        DELETE: 'ລົບ'
      }
    };
  },
  computed: {
    isLoading() {
      return this.userActivityLoading || this.systemActivityLoading || this.exportLoading;
    },
    uniqueActiveUsers() {
      return this.userActivityData.length;
    },
    totalActivities() {
      return this.userActivityData.reduce((sum, user) => sum + user.totalActivities, 0);
    },
    mostActiveUser() {
      if (this.userActivityData.length === 0) return 'N/A';
      const topUser = this.userActivityData.reduce((max, user) => user.totalActivities > max.totalActivities ? user : max);
      return topUser.userName;
    },
    maxDailyActivity() {
      var _this$systemActivityD;
      if (!((_this$systemActivityD = this.systemActivityData) !== null && _this$systemActivityD !== void 0 && _this$systemActivityD.dailyStats)) return 1;
      return Math.max(...this.systemActivityData.dailyStats.map(day => day.count));
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeReports();
      }
    }
  },
  methods: {
    async initializeReports() {
      await this.fetchUserActivity();
      await this.fetchSystemActivity();
    },
    async fetchUserActivity() {
      this.userActivityLoading = true;
      try {
        const params = {
          startDate: this.userActivityFilter.startDate,
          endDate: this.userActivityFilter.endDate
        };
        const {
          data
        } = await this.$axios.get('/api/money-advances/audit/date-range', {
          params
        });

        // Process the audit data to group by user
        const userActivities = {};
        data.data.forEach(auditEntry => {
          var _auditEntry$changedBy;
          const userId = auditEntry.changedBy;
          const userName = ((_auditEntry$changedBy = auditEntry.changedByUser) === null || _auditEntry$changedBy === void 0 ? void 0 : _auditEntry$changedBy.cus_name) || 'Unknown User';
          if (!userActivities[userId]) {
            userActivities[userId] = {
              userId,
              userName,
              activities: {},
              totalActivities: 0,
              lastActivity: auditEntry.changedAt
            };
          }
          if (!userActivities[userId].activities[auditEntry.action]) {
            userActivities[userId].activities[auditEntry.action] = 0;
          }
          userActivities[userId].activities[auditEntry.action]++;
          userActivities[userId].totalActivities++;
          if (new Date(auditEntry.changedAt) > new Date(userActivities[userId].lastActivity)) {
            userActivities[userId].lastActivity = auditEntry.changedAt;
          }
        });
        this.userActivityData = Object.values(userActivities).sort((a, b) => b.totalActivities - a.totalActivities);
      } catch (error) {
        console.error('Error fetching user activity:', error);
        this.userActivityData = [];
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນກິດຈະກຳຜູ້ໃຊ້');
      } finally {
        this.userActivityLoading = false;
      }
    },
    async fetchSystemActivity() {
      this.systemActivityLoading = true;
      try {
        const days = parseInt(this.systemActivityFilter.period);
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const params = {
          startDate: startDate.toISOString().split('T')[0],
          endDate: endDate.toISOString().split('T')[0],
          limit: 500
        };
        const {
          data
        } = await this.$axios.get('/api/money-advances/audit/date-range', {
          params
        });

        // Process daily statistics
        const dailyStats = {};
        const activityBreakdown = {};
        let totalActivities = 0;
        data.data.forEach(auditEntry => {
          const date = auditEntry.changedAt.split('T')[0];

          // Daily stats
          if (!dailyStats[date]) {
            dailyStats[date] = {
              date,
              count: 0
            };
          }
          dailyStats[date].count++;

          // Activity breakdown
          if (!activityBreakdown[auditEntry.action]) {
            activityBreakdown[auditEntry.action] = 0;
          }
          activityBreakdown[auditEntry.action]++;
          totalActivities++;
        });

        // Fill missing dates with 0
        for (let i = 0; i < days; i++) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];
          if (!dailyStats[dateStr]) {
            dailyStats[dateStr] = {
              date: dateStr,
              count: 0
            };
          }
        }
        this.systemActivityData = {
          dailyStats: Object.values(dailyStats).sort((a, b) => new Date(a.date) - new Date(b.date)),
          activityBreakdown: Object.entries(activityBreakdown).map(([action, count]) => ({
            action,
            count,
            percentage: (count / totalActivities * 100).toFixed(1)
          })).sort((a, b) => b.count - a.count),
          recentChanges: data.data.sort((a, b) => new Date(b.changedAt) - new Date(a.changedAt)).slice(0, 10).map(entry => {
            var _entry$changedByUser, _entry$record;
            return {
              id: entry.id,
              action: entry.action,
              user: ((_entry$changedByUser = entry.changedByUser) === null || _entry$changedByUser === void 0 ? void 0 : _entry$changedByUser.cus_name) || 'Unknown',
              recordId: entry.recordId,
              recordPurpose: (_entry$record = entry.record) === null || _entry$record === void 0 ? void 0 : _entry$record.purpose,
              changedAt: entry.changedAt
            };
          })
        };
      } catch (error) {
        console.error('Error fetching system activity:', error);
        this.systemActivityData = null;
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນກິດຈະກຳລະບົບ');
      } finally {
        this.systemActivityLoading = false;
      }
    },
    async exportCSV() {
      this.exportLoading = true;
      try {
        const params = {
          startDate: this.exportFilter.startDate,
          endDate: this.exportFilter.endDate,
          format: 'csv'
        };
        const response = await this.$axios.get('/api/money-advances/audit/export', {
          params,
          responseType: 'blob'
        });
        const blob = new Blob([response.data], {
          type: 'text/csv'
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `audit-report-${params.startDate}-to-${params.endDate}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        this.$emit('success', 'ສົ່ງອອກ CSV ສຳເລັດ');
      } catch (error) {
        console.error('Export error:', error);
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ CSV');
      } finally {
        this.exportLoading = false;
      }
    },
    async generateReport() {
      this.exportLoading = true;
      try {
        // This would generate a PDF report
        this.$emit('success', 'ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ');
      } catch (error) {
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສ້າງລາຍງານ');
      } finally {
        this.exportLoading = false;
      }
    },
    async backupData() {
      this.exportLoading = true;
      try {
        // This would create a full backup
        this.$emit('success', 'ຟັງຊັ່ນນີ້ຈະຖືກພັດທະນາໃນອະນາຄົດ');
      } catch (error) {
        this.$emit('error', 'ເກີດຂໍ້ຜິດພາດໃນການສໍາລອງຂໍ້ມູນ');
      } finally {
        this.exportLoading = false;
      }
    },
    refreshCurrentReport() {
      if (this.activeTab === 'user-activity') {
        this.fetchUserActivity();
      } else if (this.activeTab === 'system-activity') {
        this.fetchSystemActivity();
      }
    },
    getActivityIcon(action) {
      const icons = {
        CREATE: 'fas fa-plus-circle',
        UPDATE: 'fas fa-edit',
        APPROVE: 'fas fa-check-circle',
        SETTLE: 'fas fa-money-bill-wave',
        DELETE: 'fas fa-trash-alt'
      };
      return icons[action] || 'fas fa-question-circle';
    },
    getActivityLabel(action) {
      return this.actionLabels[action] || action;
    },
    formatDateTime(dateTime) {
      if (!dateTime) return 'N/A';
      return new Date(dateTime).toLocaleString('lo-LA');
    },
    formatShortDate(date) {
      return new Date(date).toLocaleDateString('lo-LA', {
        month: 'short',
        day: 'numeric'
      });
    },
    formatRelativeTime(dateTime) {
      const now = new Date();
      const date = new Date(dateTime);
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);
      if (diffMins < 1) return 'ຫຼ້າສຸດ';
      if (diffMins < 60) return `${diffMins} ນາທີຜ່ານມາ`;
      if (diffHours < 24) return `${diffHours} ຊົ່ວໂມງຜ່ານມາ`;
      return `${diffDays} ມື້ຜ່ານມາ`;
    },
    getDateDaysAgo(days) {
      const date = new Date();
      date.setDate(date.getDate() - days);
      return date.toISOString().split('T')[0];
    },
    getTodayDate() {
      return new Date().toISOString().split('T')[0];
    },
    closeDialog() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentAuditReportDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentAuditReportDialogvue_type_script_lang_js_ = (paymentAuditReportDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentAuditReportDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(582)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentAuditReportDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7e1ed358",
  "2d1edbac"
  
)

/* harmony default export */ var paymentAuditReportDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-payment-audit-report-dialog.js.map