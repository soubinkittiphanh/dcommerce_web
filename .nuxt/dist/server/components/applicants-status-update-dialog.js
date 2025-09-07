exports.ids = [20];
exports.modules = {

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(622);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6760c6ae", content, true, context)
};

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6bdd0ec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(531);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6bdd0ec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6bdd0ec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6bdd0ec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f6bdd0ec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-f6bdd0ec]{align-items:center;animation:fadeIn-f6bdd0ec .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-f6bdd0ec{0%{opacity:0}to{opacity:1}}.status-dialog[data-v-f6bdd0ec]{animation:slideIn-f6bdd0ec .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:700px;overflow:hidden;width:95%}@keyframes slideIn-f6bdd0ec{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-f6bdd0ec]{align-items:center;border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-header.approve-header[data-v-f6bdd0ec]{background:linear-gradient(135deg,#01532b,#337555)}.modal-header.reject-header[data-v-f6bdd0ec]{background:linear-gradient(135deg,#ef4444,#dc2626)}.modal-title-section[data-v-f6bdd0ec]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-f6bdd0ec]{font-size:20px;opacity:.9}.modal-title[data-v-f6bdd0ec]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-f6bdd0ec]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-f6bdd0ec]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-f6bdd0ec]{max-height:60vh;overflow-y:auto;padding:24px}.empty-state[data-v-f6bdd0ec]{align-items:center;color:#6b7280;display:flex;flex-direction:column;justify-content:center;padding:60px 40px}.empty-state i[data-v-f6bdd0ec]{color:#d1d5db;font-size:48px;margin-bottom:16px}.empty-state p[data-v-f6bdd0ec]{font-size:16px;margin:0}.applicant-summary[data-v-f6bdd0ec]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;margin-bottom:24px;padding:20px}.applicant-info[data-v-f6bdd0ec]{align-items:center;display:flex;gap:16px}.applicant-avatar[data-v-f6bdd0ec]{align-items:center;background:linear-gradient(135deg,#01532b,#337555);border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:30px;height:60px;justify-content:center;width:60px}.applicant-details[data-v-f6bdd0ec]{flex:1}.applicant-name[data-v-f6bdd0ec]{color:#1e293b;font-size:18px;font-weight:700;margin:0 0 8px}.applicant-meta[data-v-f6bdd0ec]{display:flex;flex-wrap:wrap;gap:16px;margin-bottom:8px}.meta-item[data-v-f6bdd0ec]{align-items:center;color:#64748b;display:flex;font-size:13px;gap:4px}.meta-item i[data-v-f6bdd0ec]{color:#94a3b8;width:12px}.current-status[data-v-f6bdd0ec]{color:#475569;font-size:14px;font-weight:500}.action-description[data-v-f6bdd0ec]{align-items:center;border:2px solid;border-radius:12px;display:flex;margin-bottom:24px;padding:20px}.action-description.approve-action[data-v-f6bdd0ec]{background:rgba(16,185,129,.1);border-color:#10b981}.action-description.reject-action[data-v-f6bdd0ec]{background:rgba(239,68,68,.1);border-color:#ef4444}.action-icon[data-v-f6bdd0ec]{align-items:center;border-radius:50%;display:flex;flex-shrink:0;font-size:20px;height:50px;justify-content:center;margin-right:16px;width:50px}.approve-action .action-icon[data-v-f6bdd0ec]{background:rgba(16,185,129,.2);color:#059669}.reject-action .action-icon[data-v-f6bdd0ec]{background:rgba(239,68,68,.2);color:#dc2626}.action-content[data-v-f6bdd0ec]{flex:1}.action-title[data-v-f6bdd0ec]{color:#374151;font-size:16px;font-weight:600;margin:0 0 4px}.action-message[data-v-f6bdd0ec]{color:#6b7280;font-size:14px;line-height:1.4;margin:0}.eligibility-check[data-v-f6bdd0ec]{background:#fff;border:2px solid #e5e7eb;border-radius:12px;margin-bottom:24px;padding:20px}.eligibility-title[data-v-f6bdd0ec]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px;margin:0 0 16px}.eligibility-title i[data-v-f6bdd0ec]{color:#3b82f6}.eligibility-items[data-v-f6bdd0ec]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));margin-bottom:16px}.eligibility-item[data-v-f6bdd0ec]{align-items:center;background:rgba(239,68,68,.05);border:1px solid #fecaca;border-radius:6px;color:#374151;display:flex;font-size:13px;gap:8px;padding:8px 12px}.eligibility-item.valid[data-v-f6bdd0ec]{background:rgba(34,197,94,.05);border-color:#bbf7d0}.eligibility-item.bonus[data-v-f6bdd0ec]{background:rgba(251,191,36,.05);border-color:#fde68a}.eligibility-item i[data-v-f6bdd0ec]{color:#ef4444;flex-shrink:0;width:16px}.eligibility-item.valid i[data-v-f6bdd0ec]{color:#22c55e}.eligibility-item.bonus i[data-v-f6bdd0ec]{color:#f59e0b}.eligibility-result[data-v-f6bdd0ec]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:8px;color:#dc2626;display:flex;font-size:14px;font-weight:600;gap:8px;justify-content:center;padding:12px 16px;text-align:center}.eligibility-result.eligible[data-v-f6bdd0ec]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.quota-check[data-v-f6bdd0ec]{background:#fff;border:2px solid #e5e7eb;border-radius:12px;margin-bottom:24px;padding:20px}.quota-title[data-v-f6bdd0ec]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px;margin:0 0 16px}.quota-title i[data-v-f6bdd0ec]{color:#8b5cf6}.quota-item[data-v-f6bdd0ec]{align-items:center;background:rgba(139,92,246,.05);border:2px solid #ede9fe;border-radius:10px;display:flex;padding:16px}.quota-item.quota-full[data-v-f6bdd0ec]{background:rgba(239,68,68,.05);border-color:#fecaca}.quota-icon[data-v-f6bdd0ec]{align-items:center;background:rgba(139,92,246,.1);border-radius:50%;color:#8b5cf6;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;margin-right:16px;width:40px}.quota-item.quota-full .quota-icon[data-v-f6bdd0ec]{background:rgba(239,68,68,.1);color:#dc2626}.quota-content[data-v-f6bdd0ec]{flex:1}.quota-text[data-v-f6bdd0ec]{color:#374151;font-size:14px;font-weight:600;margin-bottom:4px}.quota-numbers[data-v-f6bdd0ec]{color:#8b5cf6;font-family:monospace}.quota-item.quota-full .quota-numbers[data-v-f6bdd0ec]{color:#dc2626}.quota-status[data-v-f6bdd0ec]{font-size:12px;font-weight:500}.quota-status.quota-ok[data-v-f6bdd0ec]{color:#059669}.quota-status.quota-exceeded[data-v-f6bdd0ec]{color:#dc2626}.notes-section[data-v-f6bdd0ec]{margin-bottom:24px}.form-label[data-v-f6bdd0ec]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-f6bdd0ec]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-f6bdd0ec]{color:#6b7280;font-size:12px}.required-note[data-v-f6bdd0ec]{color:#dc2626;font-size:12px;font-style:italic;font-weight:400}.form-control[data-v-f6bdd0ec]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;resize:vertical;transition:all .2s ease;width:100%}.form-control[data-v-f6bdd0ec]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-f6bdd0ec]{border-color:#e74c3c}.invalid-feedback[data-v-f6bdd0ec]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.field-hint[data-v-f6bdd0ec]{display:flex;font-size:12px;justify-content:flex-end;margin-top:6px}.text-counter[data-v-f6bdd0ec]{color:#9ca3af;font-size:11px}.warning-section[data-v-f6bdd0ec]{background:rgba(251,191,36,.1);border:2px solid #fbbf24;border-radius:12px;margin-bottom:24px;padding:16px}.warning-content[data-v-f6bdd0ec]{align-items:flex-start;color:#92400e;display:flex;gap:12px}.warning-content i[data-v-f6bdd0ec]{color:#f59e0b;flex-shrink:0;font-size:18px;margin-top:2px}.confirmation-section[data-v-f6bdd0ec]{background:rgba(239,68,68,.05);border:2px solid #fecaca;border-radius:12px;margin-bottom:24px;padding:16px}.confirmation-checkbox[data-v-f6bdd0ec]{align-items:flex-start;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:12px;line-height:1.4}.confirmation-checkbox input[type=checkbox][data-v-f6bdd0ec]{flex-shrink:0;margin:2px 0 0}.checkbox-label[data-v-f6bdd0ec]{font-weight:500}.status-badge[data-v-f6bdd0ec]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.pending[data-v-f6bdd0ec]{background-color:#fef3c7;color:#d97706}.status-badge.approved[data-v-f6bdd0ec]{background-color:#d1fae5;color:#065f46}.status-badge.rejected[data-v-f6bdd0ec]{background-color:#fee2e2;color:#dc2626}.form-errors[data-v-f6bdd0ec]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-f6bdd0ec]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-f6bdd0ec]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.modal-footer[data-v-f6bdd0ec]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-f6bdd0ec]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-f6bdd0ec]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn-secondary[data-v-f6bdd0ec]{background:#6c757d;color:#fff}.btn-success[data-v-f6bdd0ec]{background:linear-gradient(135deg,#10b981,#059669);color:#fff}.btn-danger[data-v-f6bdd0ec]{background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff}.btn[data-v-f6bdd0ec]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-f6bdd0ec]{animation:spin-f6bdd0ec 1s linear infinite}@keyframes spin-f6bdd0ec{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (max-width:768px){.status-dialog[data-v-f6bdd0ec]{margin:10px;width:98%}.applicant-info[data-v-f6bdd0ec]{flex-direction:column;gap:12px;text-align:center}.applicant-meta[data-v-f6bdd0ec]{flex-wrap:wrap;justify-content:center}.action-description[data-v-f6bdd0ec]{flex-direction:column;gap:16px;text-align:center}.action-icon[data-v-f6bdd0ec]{margin-right:0}.eligibility-items[data-v-f6bdd0ec]{grid-template-columns:1fr}.modal-body[data-v-f6bdd0ec],.modal-header[data-v-f6bdd0ec]{padding:16px}.modal-footer[data-v-f6bdd0ec]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-f6bdd0ec]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/StatusUpdateDialog/index.vue?vue&type=template&id=f6bdd0ec&scoped=true&
var render = function render() {
  var _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog status-dialog\" data-v-f6bdd0ec><div" + _vm._ssrClass("modal-header", _vm.headerClass) + " data-v-f6bdd0ec><div class=\"modal-title-section\" data-v-f6bdd0ec><i" + _vm._ssrClass("modal-icon", _vm.headerIcon) + " data-v-f6bdd0ec></i> <h5 class=\"modal-title\" data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(_vm.modalTitle)) + "</h5></div> <button class=\"close-btn\" data-v-f6bdd0ec><i class=\"fas fa-times\" data-v-f6bdd0ec></i></button></div> <form data-v-f6bdd0ec><div class=\"modal-body\" data-v-f6bdd0ec>" + (!_vm.applicant ? "<div class=\"empty-state\" data-v-f6bdd0ec><i class=\"fas fa-user-slash\" data-v-f6bdd0ec></i> <p data-v-f6bdd0ec>ບໍ່ພົບຂໍ້ມູນຜູ້ສະໝັກ</p></div>" : "<div class=\"status-update-content\" data-v-f6bdd0ec><div class=\"applicant-summary\" data-v-f6bdd0ec><div class=\"applicant-info\" data-v-f6bdd0ec><div class=\"applicant-avatar\" data-v-f6bdd0ec><i class=\"fas fa-user-circle\" data-v-f6bdd0ec></i></div> <div class=\"applicant-details\" data-v-f6bdd0ec><h4 class=\"applicant-name\" data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(_vm.getFullName())) + "</h4> <div class=\"applicant-meta\" data-v-f6bdd0ec><span class=\"meta-item\" data-v-f6bdd0ec><i class=\"fas fa-venus-mars\" data-v-f6bdd0ec></i>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatGender(_vm.applicant.gender)) + "\n                  ") + "</span> <span class=\"meta-item\" data-v-f6bdd0ec><i class=\"fas fa-birthday-cake\" data-v-f6bdd0ec></i>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.calculateAge()) + " ປີ\n                  ") + "</span> <span class=\"meta-item\" data-v-f6bdd0ec><i class=\"fas fa-phone\" data-v-f6bdd0ec></i>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.phone) + "\n                  ") + "</span></div> <div class=\"current-status\" data-v-f6bdd0ec>\n                  ສະຖານະປັດຈຸບັນ: \n                  <span" + _vm._ssrClass(null, ['status-badge', _vm.applicant.status]) + " data-v-f6bdd0ec>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatStatus(_vm.applicant.status)) + "\n                  ") + "</span></div></div></div></div> <div" + _vm._ssrClass("action-description", _vm.actionClass) + " data-v-f6bdd0ec><div class=\"action-icon\" data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.actionIcon) + " data-v-f6bdd0ec></i></div> <div class=\"action-content\" data-v-f6bdd0ec><h5 class=\"action-title\" data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(_vm.actionTitle)) + "</h5> <p class=\"action-message\" data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(_vm.actionMessage)) + "</p></div></div> " + (_vm.action === 'approve' ? "<div class=\"eligibility-check\" data-v-f6bdd0ec><h6 class=\"eligibility-title\" data-v-f6bdd0ec><i class=\"fas fa-clipboard-check\" data-v-f6bdd0ec></i>\n              ການກວດສອບຄຸນສົມບັດ\n            </h6> <div class=\"eligibility-items\" data-v-f6bdd0ec><div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.isAgeValid
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.isAgeValid ? 'fas fa-check' : 'fas fa-times') + " data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>" + _vm._ssrEscape("ອາຍຸ 18-32 ປີ (" + _vm._s(_vm.calculateAge()) + " ປີ)") + "</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.applicant.hasPassport
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.applicant.hasPassport ? 'fas fa-check' : 'fas fa-times') + " data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>ມີໜັງສືເດີນທາງ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.applicant.healthStatus === 'good'
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.applicant.healthStatus === 'good' ? 'fas fa-check' : 'fas fa-times') + " data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>ສຸຂະພາບດີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.applicant.eyesightGood
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.applicant.eyesightGood ? 'fas fa-check' : 'fas fa-times') + " data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>ສາຍຕາດີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': !_vm.applicant.hasVisibleTattoos
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, !_vm.applicant.hasVisibleTattoos ? 'fas fa-check' : 'fas fa-times') + " data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ</span></div> " + (_vm.hasChineseLanguageBonus ? "<div class=\"eligibility-item bonus\" data-v-f6bdd0ec><i class=\"fas fa-star\" data-v-f6bdd0ec></i> <span data-v-f6bdd0ec>" + _vm._ssrEscape("ໂບນັສພາສາຈີນ (" + _vm._s(_vm.formatLanguageLevel(_vm.applicant.chineseLanguageLevel)) + ")") + "</span></div>" : "<!---->") + "</div> <div" + _vm._ssrClass("eligibility-result", {
    'eligible': _vm.isEligible
  }) + " data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.isEligible ? 'fas fa-thumbs-up' : 'fas fa-exclamation-triangle') + " data-v-f6bdd0ec></i> " + (_vm.isEligible ? "<span data-v-f6bdd0ec>\n                ຜູ້ສະໝັກມີຄຸນສົມບັດຄົບຖ້ວນ\n              </span>" : "<span data-v-f6bdd0ec>\n                ⚠️ ຜູ້ສະໝັກຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ\n              </span>") + "</div></div>" : "<!---->") + " " + (_vm.action === 'approve' ? "<div class=\"quota-check\" data-v-f6bdd0ec><h6 class=\"quota-title\" data-v-f6bdd0ec><i class=\"fas fa-users\" data-v-f6bdd0ec></i>\n              ການກວດສອບໂຄຕ້າ\n            </h6> <div class=\"quota-info\" data-v-f6bdd0ec><div" + _vm._ssrClass("quota-item", _vm.genderQuotaClass) + " data-v-f6bdd0ec><div class=\"quota-icon\" data-v-f6bdd0ec><i" + _vm._ssrClass(null, _vm.applicant.gender === 'male' ? 'fas fa-male' : 'fas fa-female') + " data-v-f6bdd0ec></i></div> <div class=\"quota-content\" data-v-f6bdd0ec><div class=\"quota-text\" data-v-f6bdd0ec>" + _vm._ssrEscape("\n                    ໂຄຕ້າ" + _vm._s(_vm.formatGender(_vm.applicant.gender)) + ": \n                    ") + "<span class=\"quota-numbers\" data-v-f6bdd0ec>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getCurrentGenderCount()) + "/" + _vm._s(_vm.getMaxGenderQuota()) + "\n                    ") + "</span></div> <div" + _vm._ssrClass("quota-status", _vm.quotaStatusClass) + " data-v-f6bdd0ec>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.quotaStatusMessage) + "\n                  ") + "</div></div></div></div></div>" : "<!---->") + " <div class=\"notes-section\" data-v-f6bdd0ec><label" + _vm._ssrClass("form-label", {
    'required': _vm.action === 'reject'
  }) + " data-v-f6bdd0ec><i class=\"fas fa-sticky-note\" data-v-f6bdd0ec></i>\n              ໝາຍເຫດ\n              " + (_vm.action === 'reject' ? "<span class=\"required-note\" data-v-f6bdd0ec>(ຈຳເປັນສຳລັບການປະຕິເສດ)</span>" : "<!---->") + "</label> <textarea rows=\"4\"" + _vm._ssrAttr("placeholder", _vm.notesPlaceholder) + " maxlength=\"500\"" + _vm._ssrAttr("required", _vm.action === 'reject') + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.notes
  }) + " data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> " + (_vm.errors.notes ? "<div class=\"invalid-feedback\" data-v-f6bdd0ec>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.notes) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint\" data-v-f6bdd0ec><span class=\"text-counter\" data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div> " + (_vm.action === 'reject' ? "<div class=\"warning-section\" data-v-f6bdd0ec><div class=\"warning-content\" data-v-f6bdd0ec><i class=\"fas fa-exclamation-triangle\" data-v-f6bdd0ec></i> <div data-v-f6bdd0ec><strong data-v-f6bdd0ec>ຄຳເຕືອນ:</strong> \n                ການປະຕິເສດຜູ້ສະໝັກບໍ່ສາມາດຍົກເລີກໄດ້. \n                ກະລຸນາໃສ່ເຫດຜົນທີ່ຊັດເຈນໃນໝາຍເຫດ.\n              </div></div></div>" : "<!---->") + " " + (_vm.action === 'approve' && !_vm.isEligible ? "<div class=\"confirmation-section\" data-v-f6bdd0ec><label class=\"confirmation-checkbox\" data-v-f6bdd0ec><input type=\"checkbox\"" + _vm._ssrAttr("required", _vm.action === 'approve' && !_vm.isEligible) + _vm._ssrAttr("checked", Array.isArray(_vm.formData.forceApprove) ? _vm._i(_vm.formData.forceApprove, null) > -1 : _vm.formData.forceApprove) + " data-v-f6bdd0ec> <span class=\"checkbox-label\" data-v-f6bdd0ec>\n                ຂ້ອຍຢືນຢັນວ່າຕ້ອງການອະນຸມັດຜູ້ສະໝັກຄົນນີ້ ເຖິງແມ່ນວ່າຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ\n              </span></label></div>" : "<!---->") + "</div>") + " " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-f6bdd0ec><h6 data-v-f6bdd0ec><i class=\"fas fa-exclamation-circle\" data-v-f6bdd0ec></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-f6bdd0ec>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-f6bdd0ec>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->") + "</div> <div class=\"modal-footer\" data-v-f6bdd0ec><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-f6bdd0ec><i class=\"fas fa-times\" data-v-f6bdd0ec></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + _vm._ssrClass(null, ['btn', _vm.confirmButtonClass]) + " data-v-f6bdd0ec>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-f6bdd0ec></i>" : "<i" + _vm._ssrClass(null, _vm.confirmButtonIcon) + " data-v-f6bdd0ec></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'ກຳລັງດຳເນີນການ...' : _vm.confirmButtonText) + "\n        ") + "</button></div></form></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/StatusUpdateDialog/index.vue?vue&type=template&id=f6bdd0ec&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/StatusUpdateDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var StatusUpdateDialogvue_type_script_lang_js_ = ({
  name: 'StatusUpdateDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    applicant: {
      type: Object,
      default: null
    },
    action: {
      type: String,
      default: '' // 'approve' or 'reject'
    }
  },

  data() {
    return {
      loading: false,
      formData: {
        notes: '',
        forceApprove: false
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    // Modal styling based on action
    headerClass() {
      return this.action === 'approve' ? 'approve-header' : 'reject-header';
    },
    headerIcon() {
      return this.action === 'approve' ? 'fas fa-check-circle' : 'fas fa-times-circle';
    },
    modalTitle() {
      return this.action === 'approve' ? 'ອະນຸມັດຜູ້ສະໝັກ' : 'ປະຕິເສດຜູ້ສະໝັກ';
    },
    actionClass() {
      return this.action === 'approve' ? 'approve-action' : 'reject-action';
    },
    actionIcon() {
      return this.action === 'approve' ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down';
    },
    actionTitle() {
      return this.action === 'approve' ? 'ອະນຸມັດການສະໝັກ' : 'ປະຕິເສດການສະໝັກ';
    },
    actionMessage() {
      if (this.action === 'approve') {
        return 'ທ່ານກຳລັງຈະອະນຸມັດຜູ້ສະໝັກຄົນນີ້. ກະລຸນາກວດສອບຄຸນສົມບັດກ່ອນດຳເນີນການ.';
      } else {
        return 'ທ່ານກຳລັງຈະປະຕິເສດຜູ້ສະໝັກຄົນນີ້. ການກະທຳນີ້ບໍ່ສາມາດຍົກເລີກໄດ້.';
      }
    },
    notesPlaceholder() {
      if (this.action === 'approve') {
        return 'ໝາຍເຫດສຳລັບການອະນຸມັດ (ທາງເລືອກ)...';
      } else {
        return 'ເຫດຜົນໃນການປະຕິເສດ (ຈຳເປັນ)...';
      }
    },
    confirmButtonClass() {
      return this.action === 'approve' ? 'btn-success' : 'btn-danger';
    },
    confirmButtonIcon() {
      return this.action === 'approve' ? 'fas fa-check' : 'fas fa-times';
    },
    confirmButtonText() {
      return this.action === 'approve' ? 'ອະນຸມັດ' : 'ປະຕິເສດ';
    },
    // Eligibility checks
    isAgeValid() {
      const age = this.calculateAge();
      return age >= 18 && age <= 32;
    },
    hasChineseLanguageBonus() {
      return this.applicant && this.applicant.chineseLanguageLevel && !['none', 'basic'].includes(this.applicant.chineseLanguageLevel);
    },
    isEligible() {
      if (!this.applicant) return false;
      return this.isAgeValid && this.applicant.hasPassport && this.applicant.healthStatus === 'good' && this.applicant.eyesightGood && !this.applicant.hasVisibleTattoos;
    },
    // Gender quota checks
    genderQuotaClass() {
      const currentCount = this.getCurrentGenderCount();
      const maxQuota = this.getMaxGenderQuota();
      return currentCount >= maxQuota ? 'quota-full' : 'quota-available';
    },
    quotaStatusClass() {
      const currentCount = this.getCurrentGenderCount();
      const maxQuota = this.getMaxGenderQuota();
      return currentCount >= maxQuota ? 'quota-exceeded' : 'quota-ok';
    },
    quotaStatusMessage() {
      const currentCount = this.getCurrentGenderCount();
      const maxQuota = this.getMaxGenderQuota();
      if (currentCount >= maxQuota) {
        return '⚠️ ໂຄຕ້າເຕັມແລ້ວ';
      } else {
        return `✓ ຍັງມີບ່ອນວ່າງ ${maxQuota - currentCount} ບ່ອນ`;
      }
    },
    // Form validation
    isFormValid() {
      if (this.action === 'reject' && !this.formData.notes.trim()) {
        return false;
      }
      if (this.action === 'approve' && !this.isEligible && !this.formData.forceApprove) {
        return false;
      }
      return this.formErrors.length === 0;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm();
      } else {
        this.resetForm();
      }
    },
    applicant: {
      handler(newVal, oldVal) {
        if (this.visible && newVal !== oldVal) {
          this.$nextTick(() => {
            this.initializeForm();
          });
        }
      },
      deep: true
    }
  },
  methods: {
    initializeForm() {
      this.formData = {
        notes: '',
        forceApprove: false
      };
      this.errors = {};
      this.formErrors = [];
    },
    resetForm() {
      this.formData = {
        notes: '',
        forceApprove: false
      };
      this.errors = {};
      this.formErrors = [];
      this.loading = false;
    },
    validateForm() {
      this.errors = {};
      this.formErrors = [];

      // Notes validation for rejection
      if (this.action === 'reject' && !this.formData.notes.trim()) {
        this.errors.notes = 'ກະລຸນາໃສ່ເຫດຜົນໃນການປະຕິເສດ';
        this.formErrors.push('Rejection reason is required');
      }

      // Notes length validation
      if (this.formData.notes && this.formData.notes.length > 500) {
        this.errors.notes = 'ໝາຍເຫດບໍ່ຄວນເກີນ 500 ຕົວອັກສອນ';
        this.formErrors.push('Notes must not exceed 500 characters');
      }

      // Force approve validation
      if (this.action === 'approve' && !this.isEligible && !this.formData.forceApprove) {
        this.formErrors.push('Please confirm approval for applicant without full qualifications');
      }
      return this.formErrors.length === 0;
    },
    async confirmAction() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        const statusData = {
          status: this.action === 'approve' ? 'approved' : 'rejected',
          notes: this.formData.notes.trim()
        };
        console.log('📤 Updating status:', statusData);

        // Emit confirm event to parent
        this.$emit('confirm', statusData);
      } catch (error) {
        console.error('Status update error:', error);
        this.formErrors.push('An error occurred while updating status. Please try again.');
      } finally {
        this.loading = false;
      }
    },
    closeDialog() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    // Utility methods
    getFullName() {
      if (!this.applicant) return '';
      return `${this.applicant.firstName} ${this.applicant.lastName}`;
    },
    calculateAge() {
      if (!this.applicant || !this.applicant.dateOfBirth) return 0;
      const today = new Date();
      const birthDate = new Date(this.applicant.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }
      return age;
    },
    formatGender(gender) {
      return gender === 'male' ? 'ຊາຍ' : 'ຍິງ';
    },
    formatStatus(status) {
      const statusLabels = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        rejected: 'ປະຕິເສດ'
      };
      return statusLabels[status] || status;
    },
    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ມີ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ'
      };
      return levelLabels[level] || level;
    },
    // Mock gender quota methods - replace with actual data
    getCurrentGenderCount() {
      var _this$applicant;
      // This should come from props or API call in real implementation
      return ((_this$applicant = this.applicant) === null || _this$applicant === void 0 ? void 0 : _this$applicant.gender) === 'male' ? 15 : 45;
    },
    getMaxGenderQuota() {
      var _this$applicant2;
      return ((_this$applicant2 = this.applicant) === null || _this$applicant2 === void 0 ? void 0 : _this$applicant2.gender) === 'male' ? 30 : 70;
    }
  }
});
// CONCATENATED MODULE: ./components/applicants/StatusUpdateDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var applicants_StatusUpdateDialogvue_type_script_lang_js_ = (StatusUpdateDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/applicants/StatusUpdateDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(621)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_StatusUpdateDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f6bdd0ec",
  "429f5c21"
  
)

/* harmony default export */ var StatusUpdateDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=applicants-status-update-dialog.js.map