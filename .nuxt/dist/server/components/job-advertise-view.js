exports.ids = [55];
exports.modules = {

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(624);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ff869966", content, true, context)
};

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e698b21c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(543);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e698b21c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e698b21c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e698b21c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e698b21c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-e698b21c]{align-items:center;animation:fadeIn-e698b21c .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-e698b21c{0%{opacity:0}to{opacity:1}}.view-dialog[data-v-e698b21c]{animation:slideIn-e698b21c .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1200px;overflow:hidden;width:95%}@keyframes slideIn-e698b21c{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-e698b21c]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-e698b21c]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-e698b21c]{font-size:20px;opacity:.9}.modal-title[data-v-e698b21c]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-e698b21c]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-e698b21c]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-e698b21c]{max-height:70vh;overflow-y:auto;padding:24px}.job-header[data-v-e698b21c]{border-bottom:2px solid #e9ecef;margin-bottom:32px;padding-bottom:24px}.job-title-section[data-v-e698b21c]{align-items:flex-start;display:flex;gap:20px;justify-content:space-between;margin-bottom:16px}.job-title[data-v-e698b21c]{color:#1f2937;flex:1;font-size:24px;font-weight:700;margin:0}.status-badge[data-v-e698b21c]{align-items:center;border-radius:20px;display:inline-flex;flex-shrink:0;font-size:12px;font-weight:600;gap:6px;padding:6px 16px;text-transform:uppercase}.status-badge.large[data-v-e698b21c]{font-size:14px;padding:8px 20px}.status-badge.active[data-v-e698b21c]{background-color:#d1fae5;color:#065f46}.status-badge.inactive[data-v-e698b21c]{background-color:#fef3c7;color:#d97706}.status-badge.closed[data-v-e698b21c]{background-color:#fee2e2;color:#dc2626}.job-meta[data-v-e698b21c]{display:flex;flex-wrap:wrap;gap:24px}.meta-item[data-v-e698b21c]{align-items:center;color:#6b7280;display:flex;font-size:14px;gap:8px}.meta-item i[data-v-e698b21c]{color:#9ca3af}.info-section[data-v-e698b21c]{border-bottom:1px solid #f3f4f6;margin-bottom:32px;padding-bottom:24px}.info-section[data-v-e698b21c]:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}.info-section h4[data-v-e698b21c]{align-items:center;color:#374151;display:flex;font-size:18px;font-weight:600;gap:10px;margin:0 0 16px}.info-section h4 i[data-v-e698b21c]{color:#667eea;font-size:16px}.location-details[data-v-e698b21c]{display:flex;flex-direction:column;gap:12px}.location-primary[data-v-e698b21c]{align-items:center;color:#1f2937;display:flex;font-size:18px;gap:12px}.location-primary i[data-v-e698b21c]{color:#667eea;font-size:16px}.location-secondary[data-v-e698b21c]{align-items:center;color:#6b7280;display:flex;font-size:14px;gap:12px;margin-left:28px}.location-secondary i[data-v-e698b21c]{color:#9ca3af;font-size:12px}.description-content[data-v-e698b21c]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;color:#374151;font-size:14px;line-height:1.6;padding:16px}.work-conditions-grid[data-v-e698b21c]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.condition-item[data-v-e698b21c]{align-items:center;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;display:flex;gap:12px;padding:16px}.condition-icon[data-v-e698b21c]{align-items:center;background:#667eea;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.condition-content h6[data-v-e698b21c]{color:#6b7280;font-size:12px;font-weight:600;margin:0 0 4px;text-transform:uppercase}.condition-content p[data-v-e698b21c]{color:#374151;font-size:14px;font-weight:600;margin:0}.requirements-grid[data-v-e698b21c]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.requirement-card[data-v-e698b21c]{align-items:center;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;display:flex;gap:12px;padding:16px;transition:all .2s ease}.requirement-card.required[data-v-e698b21c]{background:rgba(34,197,94,.05);border-color:#10b981}.requirement-card.allowed[data-v-e698b21c]{background:rgba(59,130,246,.05);border-color:#3b82f6}.requirement-icon[data-v-e698b21c]{align-items:center;background:#f3f4f6;border-radius:50%;color:#6b7280;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.requirement-card.required .requirement-icon[data-v-e698b21c]{background:#dcfce7;color:#16a34a}.requirement-card.allowed .requirement-icon[data-v-e698b21c]{background:#dbeafe;color:#2563eb}.requirement-content[data-v-e698b21c]{flex:1;min-width:0}.requirement-content h6[data-v-e698b21c]{color:#374151;font-size:14px;font-weight:600;margin:0 0 4px}.requirement-content p[data-v-e698b21c]{color:#6b7280;font-size:12px;margin:0}.requirement-status[data-v-e698b21c]{flex-shrink:0;font-size:18px}.text-success[data-v-e698b21c]{color:#10b981}.text-muted[data-v-e698b21c]{color:#9ca3af}.text-info[data-v-e698b21c]{color:#3b82f6}.text-warning[data-v-e698b21c]{color:#f59e0b}.date-range[data-v-e698b21c]{display:flex;flex-direction:column;gap:12px}.date-item[data-v-e698b21c]{align-items:center;background:#f8fafc;border-radius:6px;display:flex;gap:12px;padding:12px}.date-item.duration[data-v-e698b21c]{background:#ede9fe;color:#7c3aed;font-weight:600}.date-item i[data-v-e698b21c]{color:#667eea;width:16px}.date-label[data-v-e698b21c]{color:#374151;font-weight:500;min-width:120px}.date-value[data-v-e698b21c]{color:#1f2937;font-weight:600}.applicants-stats[data-v-e698b21c]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}.stat-card[data-v-e698b21c]{align-items:center;border:1px solid #e5e7eb;border-radius:8px;display:flex;gap:12px;padding:16px}.stat-card.total[data-v-e698b21c]{background:linear-gradient(135deg,#667eea,#764ba2);border:none;color:#fff}.stat-card.pending[data-v-e698b21c]{background:#fef3c7;border-color:#f59e0b}.stat-card.approved[data-v-e698b21c]{background:#d1fae5;border-color:#10b981}.stat-card.rejected[data-v-e698b21c]{background:#fee2e2;border-color:#ef4444}.stat-icon[data-v-e698b21c]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.stat-card.total .stat-icon[data-v-e698b21c]{background:hsla(0,0%,100%,.2);color:#fff}.stat-card.pending .stat-icon[data-v-e698b21c]{background:#fbbf24;color:#fff}.stat-card.approved .stat-icon[data-v-e698b21c]{background:#10b981;color:#fff}.stat-card.rejected .stat-icon[data-v-e698b21c]{background:#ef4444;color:#fff}.stat-content h5[data-v-e698b21c]{font-size:20px;font-weight:700;margin:0 0 4px}.stat-content p[data-v-e698b21c]{font-size:12px;margin:0;opacity:.9}.benefits-list[data-v-e698b21c]{display:flex;flex-direction:column;gap:12px}.benefit-item[data-v-e698b21c]{align-items:flex-start;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;display:flex;gap:12px;padding:16px}.benefit-icon[data-v-e698b21c]{align-items:center;background:#667eea;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.benefit-content[data-v-e698b21c]{flex:1;min-width:0}.benefit-content h6[data-v-e698b21c]{color:#374151;font-size:14px;font-weight:600;margin:0 0 4px}.benefit-content p[data-v-e698b21c]{color:#6b7280;font-size:12px;line-height:1.4;margin:0 0 8px}.benefit-value[data-v-e698b21c]{color:#059669;font-size:14px;font-weight:600}.benefit-type[data-v-e698b21c]{flex-shrink:0}.benefit-badge[data-v-e698b21c]{border-radius:12px;font-size:10px;font-weight:600;padding:4px 8px;text-transform:uppercase}.benefit-badge.salary[data-v-e698b21c]{background:#d1fae5;color:#065f46}.benefit-badge.allowance[data-v-e698b21c]{background:#fef3c7;color:#d97706}.benefit-badge.insurance[data-v-e698b21c]{background:#dbeafe;color:#1d4ed8}.benefit-badge.accommodation[data-v-e698b21c]{background:#ede9fe;color:#7c3aed}.benefit-badge.transportation[data-v-e698b21c]{background:#f3e8ff;color:#a21caf}.benefit-badge.other[data-v-e698b21c]{background:#f1f5f9;color:#475569}.notes-content[data-v-e698b21c]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;color:#374151;font-size:14px;line-height:1.6;padding:16px}.update-history[data-v-e698b21c]{display:flex;flex-direction:column;gap:8px}.update-item[data-v-e698b21c]{align-items:center;color:#6b7280;display:flex;font-size:14px;gap:8px}.update-item i[data-v-e698b21c]{color:#9ca3af;width:16px}.modal-footer[data-v-e698b21c]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-e698b21c]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-e698b21c]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-e698b21c]{background:#6c757d;color:#fff}.btn-info[data-v-e698b21c]{background:#17a2b8;color:#fff}.btn[data-v-e698b21c]:hover{box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}@media (max-width:768px){.view-dialog[data-v-e698b21c]{margin:10px;width:98%}.job-title-section[data-v-e698b21c]{align-items:flex-start;flex-direction:column;gap:12px}.job-title[data-v-e698b21c]{font-size:20px}.job-meta[data-v-e698b21c]{flex-direction:column;gap:8px}.applicants-stats[data-v-e698b21c],.requirements-grid[data-v-e698b21c],.work-conditions-grid[data-v-e698b21c]{grid-template-columns:1fr}.date-range[data-v-e698b21c]{gap:8px}.date-item[data-v-e698b21c]{align-items:flex-start;flex-direction:column;gap:8px}.date-label[data-v-e698b21c]{min-width:auto}.modal-body[data-v-e698b21c],.modal-header[data-v-e698b21c]{padding:16px}.modal-footer[data-v-e698b21c]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-e698b21c]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/view/index.vue?vue&type=template&id=e698b21c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog view-dialog\" data-v-e698b21c><div class=\"modal-header\" data-v-e698b21c><div class=\"modal-title-section\" data-v-e698b21c><i class=\"fas fa-eye modal-icon\" data-v-e698b21c></i> <h5 class=\"modal-title\" data-v-e698b21c>ລາຍລະອຽດການປະກາດຫາງານ</h5></div> <button class=\"close-btn\" data-v-e698b21c><i class=\"fas fa-times\" data-v-e698b21c></i></button></div> <div class=\"modal-body\" data-v-e698b21c>" + (_vm.jobAdvertise ? "<div class=\"job-details\" data-v-e698b21c><div class=\"job-header\" data-v-e698b21c><div class=\"job-title-section\" data-v-e698b21c><h2 class=\"job-title\" data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.title)) + "</h2> <span" + _vm._ssrClass(null, ['status-badge', 'large', _vm.jobAdvertise.status]) + " data-v-e698b21c><i" + _vm._ssrClass(null, _vm.getStatusIcon()) + " data-v-e698b21c></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatStatus(_vm.jobAdvertise.status)) + "\n            ") + "</span></div> <div class=\"job-meta\" data-v-e698b21c><div class=\"meta-item\" data-v-e698b21c><i class=\"fas fa-calendar-plus\" data-v-e698b21c></i> <span data-v-e698b21c>" + _vm._ssrEscape("ສ້າງເມື່ອ: " + _vm._s(_vm.formatDate(_vm.jobAdvertise.createdAt))) + "</span></div> " + (_vm.jobAdvertise.maker ? "<div class=\"meta-item\" data-v-e698b21c><i class=\"fas fa-user\" data-v-e698b21c></i> <span data-v-e698b21c>" + _vm._ssrEscape("ສ້າງໂດຍ: " + _vm._s(_vm.jobAdvertise.maker.firstName) + " " + _vm._s(_vm.jobAdvertise.maker.lastName)) + "</span></div>" : "<!---->") + "</div></div> <div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-map-marker-alt\" data-v-e698b21c></i>\n            ສະຖານທີ່ເຮັດວຽກ\n          </h4> <div class=\"location-details\" data-v-e698b21c><div class=\"location-primary\" data-v-e698b21c><i class=\"fas fa-globe\" data-v-e698b21c></i> <strong data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.country)) + "</strong></div> " + (_vm.jobAdvertise.province ? "<div class=\"location-secondary\" data-v-e698b21c><i class=\"fas fa-map-pin\" data-v-e698b21c></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.jobAdvertise.province) + "\n            ") + "</div>" : "<!---->") + "</div></div> " + (_vm.jobAdvertise.jobDescription ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-align-left\" data-v-e698b21c></i>\n            ລາຍລະອຽດວຽກ\n          </h4> <div class=\"description-content\" data-v-e698b21c>" + _vm._ssrEscape("\n            " + _vm._s(_vm.jobAdvertise.jobDescription) + "\n          ") + "</div></div>" : "<!---->") + " <div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-briefcase\" data-v-e698b21c></i>\n            ເງື່ອນໄຂການເຮັດວຽກ\n          </h4> <div class=\"work-conditions-grid\" data-v-e698b21c><div class=\"condition-item\" data-v-e698b21c><div class=\"condition-icon\" data-v-e698b21c><i class=\"fas fa-clock\" data-v-e698b21c></i></div> <div class=\"condition-content\" data-v-e698b21c><h6 data-v-e698b21c>ຊົ່ວໂມງເຮັດວຽກ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.workingHours || '8 ຊົ່ວໂມງ/ວັນ')) + "</p></div></div> <div class=\"condition-item\" data-v-e698b21c><div class=\"condition-icon\" data-v-e698b21c><i class=\"fas fa-calendar-day\" data-v-e698b21c></i></div> <div class=\"condition-content\" data-v-e698b21c><h6 data-v-e698b21c>ວັນພັກ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.restDays || '1 ວັນ/ອາທິດ')) + "</p></div></div> " + (_vm.jobAdvertise.maxApplicants ? "<div class=\"condition-item\" data-v-e698b21c><div class=\"condition-icon\" data-v-e698b21c><i class=\"fas fa-users\" data-v-e698b21c></i></div> <div class=\"condition-content\" data-v-e698b21c><h6 data-v-e698b21c>ຈຳນວນຄົນຮັບ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.maxApplicants) + " ຄົນ") + "</p></div></div>" : "<!---->") + "</div></div> <div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-clipboard-check\" data-v-e698b21c></i>\n            ຄຸນສົມບັດຜູ້ສະໝັກ\n          </h4> <div class=\"requirements-grid\" data-v-e698b21c><div" + _vm._ssrClass("requirement-card", {
    'required': _vm.jobAdvertise.requiresPassport
  }) + " data-v-e698b21c><div class=\"requirement-icon\" data-v-e698b21c><i class=\"fas fa-passport\" data-v-e698b21c></i></div> <div class=\"requirement-content\" data-v-e698b21c><h6 data-v-e698b21c>ໜັງສືເດີນທາງ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.requiresPassport ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ')) + "</p></div> <div class=\"requirement-status\" data-v-e698b21c><i" + _vm._ssrClass(null, _vm.jobAdvertise.requiresPassport ? 'fas fa-check text-success' : 'fas fa-times text-muted') + " data-v-e698b21c></i></div></div> <div" + _vm._ssrClass("requirement-card", {
    'required': _vm.jobAdvertise.requiresGoodEyesight
  }) + " data-v-e698b21c><div class=\"requirement-icon\" data-v-e698b21c><i class=\"fas fa-eye\" data-v-e698b21c></i></div> <div class=\"requirement-content\" data-v-e698b21c><h6 data-v-e698b21c>ສາຍຕາດີ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.requiresGoodEyesight ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ')) + "</p></div> <div class=\"requirement-status\" data-v-e698b21c><i" + _vm._ssrClass(null, _vm.jobAdvertise.requiresGoodEyesight ? 'fas fa-check text-success' : 'fas fa-times text-muted') + " data-v-e698b21c></i></div></div> <div" + _vm._ssrClass("requirement-card", {
    'required': _vm.jobAdvertise.requiresLanguage && _vm.jobAdvertise.requiresLanguage !== 'none'
  }) + " data-v-e698b21c><div class=\"requirement-icon\" data-v-e698b21c><i class=\"fas fa-language\" data-v-e698b21c></i></div> <div class=\"requirement-content\" data-v-e698b21c><h6 data-v-e698b21c>ພາສາ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.formatLanguageLevel(_vm.jobAdvertise.requiresLanguage))) + "</p></div> <div class=\"requirement-status\" data-v-e698b21c><i" + _vm._ssrClass(null, _vm.jobAdvertise.requiresLanguage && _vm.jobAdvertise.requiresLanguage !== 'none' ? 'fas fa-check text-success' : 'fas fa-times text-muted') + " data-v-e698b21c></i></div></div> <div" + _vm._ssrClass("requirement-card", {
    'allowed': _vm.jobAdvertise.allowsTattoos
  }) + " data-v-e698b21c><div class=\"requirement-icon\" data-v-e698b21c><i class=\"fas fa-paint-brush\" data-v-e698b21c></i></div> <div class=\"requirement-content\" data-v-e698b21c><h6 data-v-e698b21c>ລາຍສັກ</h6> <p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.allowsTattoos ? 'ອະນຸຍາດ' : 'ບໍ່ອະນຸຍາດ')) + "</p></div> <div class=\"requirement-status\" data-v-e698b21c><i" + _vm._ssrClass(null, _vm.jobAdvertise.allowsTattoos ? 'fas fa-check text-info' : 'fas fa-ban text-warning') + " data-v-e698b21c></i></div></div></div></div> " + (_vm.jobAdvertise.startDate || _vm.jobAdvertise.endDate ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-calendar-alt\" data-v-e698b21c></i>\n            ໄລຍະເວລາຮັບສະໝັກ\n          </h4> <div class=\"date-range\" data-v-e698b21c>" + (_vm.jobAdvertise.startDate ? "<div class=\"date-item\" data-v-e698b21c><i class=\"fas fa-calendar-plus\" data-v-e698b21c></i> <span class=\"date-label\" data-v-e698b21c>ເລີ່ມຮັບສະໝັກ:</span> <span class=\"date-value\" data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.jobAdvertise.startDate))) + "</span></div>" : "<!---->") + " " + (_vm.jobAdvertise.endDate ? "<div class=\"date-item\" data-v-e698b21c><i class=\"fas fa-calendar-minus\" data-v-e698b21c></i> <span class=\"date-label\" data-v-e698b21c>ສິ້ນສຸດການຮັບສະໝັກ:</span> <span class=\"date-value\" data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.jobAdvertise.endDate))) + "</span></div>" : "<!---->") + " " + (_vm.jobAdvertise.startDate && _vm.jobAdvertise.endDate ? "<div class=\"date-item duration\" data-v-e698b21c><i class=\"fas fa-hourglass-half\" data-v-e698b21c></i> <span class=\"date-label\" data-v-e698b21c>ໄລຍະເວລາ:</span> <span class=\"date-value\" data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.calculateDuration()) + " ວັນ") + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.jobAdvertise.applicants ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-users\" data-v-e698b21c></i>\n            ສະຖິຕິຜູ້ສະໝັກ\n          </h4> <div class=\"applicants-stats\" data-v-e698b21c><div class=\"stat-card total\" data-v-e698b21c><div class=\"stat-icon\" data-v-e698b21c><i class=\"fas fa-users\" data-v-e698b21c></i></div> <div class=\"stat-content\" data-v-e698b21c><h5 data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.applicants.length)) + "</h5> <p data-v-e698b21c>ລວມຜູ້ສະໝັກ</p></div></div> <div class=\"stat-card pending\" data-v-e698b21c><div class=\"stat-icon\" data-v-e698b21c><i class=\"fas fa-clock\" data-v-e698b21c></i></div> <div class=\"stat-content\" data-v-e698b21c><h5 data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.getApplicantsByStatus('pending').length)) + "</h5> <p data-v-e698b21c>ລໍຖ້າອະນຸມັດ</p></div></div> <div class=\"stat-card approved\" data-v-e698b21c><div class=\"stat-icon\" data-v-e698b21c><i class=\"fas fa-check-circle\" data-v-e698b21c></i></div> <div class=\"stat-content\" data-v-e698b21c><h5 data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.getApplicantsByStatus('approved').length)) + "</h5> <p data-v-e698b21c>ອະນຸມັດແລ້ວ</p></div></div> <div class=\"stat-card rejected\" data-v-e698b21c><div class=\"stat-icon\" data-v-e698b21c><i class=\"fas fa-times-circle\" data-v-e698b21c></i></div> <div class=\"stat-content\" data-v-e698b21c><h5 data-v-e698b21c>" + _vm._ssrEscape(_vm._s(_vm.getApplicantsByStatus('rejected').length)) + "</h5> <p data-v-e698b21c>ປະຕິເສດ</p></div></div></div></div>" : "<!---->") + " " + (_vm.jobAdvertise.benefits && _vm.jobAdvertise.benefits.length > 0 ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-gift\" data-v-e698b21c></i>\n            ສະຫວັດດີການ\n          </h4> <div class=\"benefits-list\" data-v-e698b21c>" + _vm._ssrList(_vm.jobAdvertise.benefits, function (benefit) {
    return "<div class=\"benefit-item\" data-v-e698b21c><div class=\"benefit-icon\" data-v-e698b21c><i" + _vm._ssrClass(null, _vm.getBenefitIcon(benefit.type)) + " data-v-e698b21c></i></div> <div class=\"benefit-content\" data-v-e698b21c><h6 data-v-e698b21c>" + _vm._ssrEscape(_vm._s(benefit.name)) + "</h6> " + (benefit.description ? "<p data-v-e698b21c>" + _vm._ssrEscape(_vm._s(benefit.description)) + "</p>" : "<!---->") + " " + (benefit.value ? "<div class=\"benefit-value\" data-v-e698b21c>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrency(benefit.value, benefit.currency)) + "\n                ") + "</div>" : "<!---->") + "</div> <div class=\"benefit-type\" data-v-e698b21c><span" + _vm._ssrClass(null, ['benefit-badge', benefit.type]) + " data-v-e698b21c>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatBenefitType(benefit.type)) + "\n                ") + "</span></div></div>";
  }) + "</div></div>" : "<!---->") + " " + (_vm.jobAdvertise.notes ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-sticky-note\" data-v-e698b21c></i>\n            ໝາຍເຫດ\n          </h4> <div class=\"notes-content\" data-v-e698b21c>" + _vm._ssrEscape("\n            " + _vm._s(_vm.jobAdvertise.notes) + "\n          ") + "</div></div>" : "<!---->") + " " + (_vm.jobAdvertise.updateUser || _vm.jobAdvertise.updateTimestamp ? "<div class=\"info-section\" data-v-e698b21c><h4 data-v-e698b21c><i class=\"fas fa-history\" data-v-e698b21c></i>\n            ປະຫວັດການອັບເດດ\n          </h4> <div class=\"update-history\" data-v-e698b21c>" + (_vm.jobAdvertise.updateUser ? "<div class=\"update-item\" data-v-e698b21c><i class=\"fas fa-user-edit\" data-v-e698b21c></i> <span data-v-e698b21c>" + _vm._ssrEscape("ອັບເດດໂດຍ: " + _vm._s(_vm.jobAdvertise.updateUser.firstName) + " " + _vm._s(_vm.jobAdvertise.updateUser.lastName)) + "</span></div>" : "<!---->") + " " + (_vm.jobAdvertise.updateTimestamp ? "<div class=\"update-item\" data-v-e698b21c><i class=\"fas fa-clock\" data-v-e698b21c></i> <span data-v-e698b21c>" + _vm._ssrEscape("ອັບເດດລ່າສຸດ: " + _vm._s(_vm.formatDate(_vm.jobAdvertise.updateTimestamp))) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div> <div class=\"modal-footer\" data-v-e698b21c><button class=\"btn btn-secondary\" data-v-e698b21c><i class=\"fas fa-times\" data-v-e698b21c></i>\n        ປິດ\n      </button> " + (_vm.canEdit ? "<button class=\"btn btn-primary\" data-v-e698b21c><i class=\"fas fa-edit\" data-v-e698b21c></i>\n        ແກ້ໄຂ\n      </button>" : "<!---->") + " " + (_vm.canViewApplicants ? "<button class=\"btn btn-info\" data-v-e698b21c><i class=\"fas fa-users\" data-v-e698b21c></i>\n        ເບິ່ງຜູ້ສະໝັກ\n      </button>" : "<!---->") + "</div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/jobAdvertise/view/index.vue?vue&type=template&id=e698b21c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'JobViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    jobAdvertise: {
      type: Object,
      default: null
    }
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    canEdit() {
      // Add your edit permission logic here
      return true;
    },
    canViewApplicants() {
      var _this$jobAdvertise;
      return ((_this$jobAdvertise = this.jobAdvertise) === null || _this$jobAdvertise === void 0 ? void 0 : _this$jobAdvertise.applicants) && this.jobAdvertise.applicants.length > 0;
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    editJob() {
      this.$emit('edit', this.jobAdvertise);
      this.closeDialog();
    },
    viewApplicants() {
      this.$emit('view-applicants', this.jobAdvertise);
      this.closeDialog();
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    formatStatus(status) {
      const statusLabels = {
        active: 'ເປີດຮັບສະໝັກ',
        inactive: 'ປິດຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ'
      };
      return statusLabels[status] || status;
    },
    getStatusIcon() {
      var _this$jobAdvertise2;
      const icons = {
        active: 'fas fa-play-circle',
        inactive: 'fas fa-pause-circle',
        closed: 'fas fa-stop-circle'
      };
      return icons[(_this$jobAdvertise2 = this.jobAdvertise) === null || _this$jobAdvertise2 === void 0 ? void 0 : _this$jobAdvertise2.status] || 'fas fa-question-circle';
    },
    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ຕ້ອງການ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ'
      };
      return levelLabels[level] || level;
    },
    calculateDuration() {
      var _this$jobAdvertise3, _this$jobAdvertise4;
      if (!((_this$jobAdvertise3 = this.jobAdvertise) !== null && _this$jobAdvertise3 !== void 0 && _this$jobAdvertise3.startDate) || !((_this$jobAdvertise4 = this.jobAdvertise) !== null && _this$jobAdvertise4 !== void 0 && _this$jobAdvertise4.endDate)) return 0;
      const start = new Date(this.jobAdvertise.startDate);
      const end = new Date(this.jobAdvertise.endDate);
      const timeDiff = end.getTime() - start.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    },
    getApplicantsByStatus(status) {
      var _this$jobAdvertise5;
      if (!((_this$jobAdvertise5 = this.jobAdvertise) !== null && _this$jobAdvertise5 !== void 0 && _this$jobAdvertise5.applicants)) return [];
      return this.jobAdvertise.applicants.filter(applicant => applicant.status === status);
    },
    getBenefitIcon(type) {
      const icons = {
        salary: 'fas fa-money-bill-wave',
        allowance: 'fas fa-coins',
        insurance: 'fas fa-shield-alt',
        accommodation: 'fas fa-home',
        transportation: 'fas fa-bus',
        other: 'fas fa-gift'
      };
      return icons[type] || 'fas fa-gift';
    },
    formatBenefitType(type) {
      const typeLabels = {
        salary: 'ເງິນເດືອນ',
        allowance: 'ເງິນຊ່ວຍເຫລືອ',
        insurance: 'ປະກັນໄພ',
        accommodation: 'ທີ່ພັກ',
        transportation: 'ການເດີນທາງ',
        other: 'ອື່ນໆ'
      };
      return typeLabels[type] || type;
    },
    formatCurrency(value, currency = 'LAK') {
      if (!value) return '';
      return new Intl.NumberFormat('lo-LA').format(value) + ' ' + currency;
    }
  }
});
// CONCATENATED MODULE: ./components/jobAdvertise/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var jobAdvertise_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/jobAdvertise/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(623)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  jobAdvertise_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e698b21c",
  "fec5196c"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=job-advertise-view.js.map