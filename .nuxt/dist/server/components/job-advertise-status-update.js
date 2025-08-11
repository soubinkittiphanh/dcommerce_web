exports.ids = [54];
exports.modules = {

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(610);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1c6bbbfe", content, true, context)
};

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34b685fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(528);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34b685fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34b685fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34b685fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34b685fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-34b685fa]{align-items:center;animation:fadeIn-34b685fa .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-34b685fa{0%{opacity:0}to{opacity:1}}.status-dialog[data-v-34b685fa]{animation:slideIn-34b685fa .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:600px;overflow:hidden;width:95%}@keyframes slideIn-34b685fa{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-34b685fa]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-header.header-warning[data-v-34b685fa]{background:linear-gradient(135deg,#f59e0b,#d97706)}.modal-header.header-success[data-v-34b685fa]{background:linear-gradient(135deg,#10b981,#059669)}.modal-header.header-danger[data-v-34b685fa]{background:linear-gradient(135deg,#ef4444,#dc2626)}.modal-title-section[data-v-34b685fa]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-34b685fa]{font-size:20px;opacity:.9}.modal-title[data-v-34b685fa]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-34b685fa]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-34b685fa]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-34b685fa]{max-height:60vh;overflow-y:auto;padding:24px}.job-info[data-v-34b685fa]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:24px;padding:16px}.job-title[data-v-34b685fa]{align-items:center;color:#1f2937;display:flex;font-size:16px;gap:8px;margin-bottom:8px}.job-title i[data-v-34b685fa]{color:#667eea}.job-location[data-v-34b685fa]{align-items:center;color:#6b7280;display:flex;font-size:14px;gap:8px;margin-bottom:12px}.job-location i[data-v-34b685fa]{color:#9ca3af}.current-status[data-v-34b685fa]{align-items:center;display:flex;font-size:14px;gap:8px}.status-label[data-v-34b685fa]{color:#374151;font-weight:500}.status-badge[data-v-34b685fa]{align-items:center;border-radius:12px;display:inline-flex;font-size:12px;font-weight:600;gap:4px;padding:4px 12px;text-transform:uppercase}.status-badge.active[data-v-34b685fa]{background-color:#d1fae5;color:#065f46}.status-badge.inactive[data-v-34b685fa]{background-color:#fef3c7;color:#d97706}.status-badge.closed[data-v-34b685fa]{background-color:#fee2e2;color:#dc2626}.action-description[data-v-34b685fa]{align-items:flex-start;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:8px;display:flex;gap:16px;margin-bottom:24px;padding:20px}.action-description.description-warning[data-v-34b685fa]{background:#fef3c7;border-color:#fbbf24}.action-description.description-success[data-v-34b685fa]{background:#d1fae5;border-color:#34d399}.action-description.description-danger[data-v-34b685fa]{background:#fee2e2;border-color:#f87171}.action-icon[data-v-34b685fa]{align-items:center;background:#667eea;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:20px;height:48px;justify-content:center;width:48px}.description-warning .action-icon[data-v-34b685fa]{background:#f59e0b}.description-success .action-icon[data-v-34b685fa]{background:#10b981}.description-danger .action-icon[data-v-34b685fa]{background:#ef4444}.action-content h4[data-v-34b685fa]{color:#1f2937;font-size:16px;font-weight:600;margin:0 0 8px}.action-content p[data-v-34b685fa]{color:#4b5563;font-size:14px;line-height:1.5;margin:0 0 12px}.new-status[data-v-34b685fa]{align-items:center;display:flex;font-size:14px;gap:8px}.action-details[data-v-34b685fa]{background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:24px;padding:20px}.action-details h5[data-v-34b685fa]{align-items:center;color:#374151;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px}.pause-details h5 i[data-v-34b685fa]{color:#f59e0b}.close-details h5 i[data-v-34b685fa]{color:#ef4444}.reason-options[data-v-34b685fa]{display:flex;flex-direction:column;gap:12px;margin-bottom:16px}.radio-option[data-v-34b685fa]{align-items:center;border-radius:4px;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px;padding:8px;transition:background-color .2s}.radio-option[data-v-34b685fa]:hover{background:rgba(0,0,0,.02)}.radio-option input[type=radio][data-v-34b685fa]{margin:0}.radio-label[data-v-34b685fa]{font-weight:500}.activation-info[data-v-34b685fa]{display:flex;flex-direction:column;gap:12px}.info-item[data-v-34b685fa]{align-items:center;color:#374151;display:flex;font-size:14px;gap:12px}.info-item i[data-v-34b685fa]{color:#10b981;width:16px}.form-group[data-v-34b685fa]{margin-bottom:20px}.form-label[data-v-34b685fa]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label i[data-v-34b685fa]{color:#6b7280;font-size:12px}.form-control[data-v-34b685fa]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;resize:vertical;transition:all .2s ease;width:100%}.form-control[data-v-34b685fa]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.field-hint[data-v-34b685fa]{align-items:center;display:flex;font-size:12px;gap:6px;margin-top:6px}.field-hint.info[data-v-34b685fa]{color:#3b82f6}.field-hint.warning[data-v-34b685fa]{color:#f59e0b}.text-counter[data-v-34b685fa]{color:#9ca3af;font-size:11px;margin-left:auto}.confirmation-section[data-v-34b685fa]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-bottom:24px;padding:16px}.checkbox-group[data-v-34b685fa]{margin-top:8px}.checkbox-option[data-v-34b685fa]{align-items:flex-start;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px}.checkbox-option.danger[data-v-34b685fa]{color:#dc2626;font-weight:500}.checkbox-option input[type=checkbox][data-v-34b685fa]{margin:2px 0 0}.checkbox-label[data-v-34b685fa]{line-height:1.4}.impact-summary[data-v-34b685fa]{background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:20px;padding:16px}.impact-summary.impact-warning[data-v-34b685fa]{background:#fef3c7;border-color:#fbbf24}.impact-summary.impact-success[data-v-34b685fa]{background:#d1fae5;border-color:#34d399}.impact-summary.impact-danger[data-v-34b685fa]{background:#fee2e2;border-color:#f87171}.impact-summary h6[data-v-34b685fa]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px;margin:0 0 12px}.impact-items[data-v-34b685fa]{display:flex;flex-direction:column;gap:8px}.impact-item[data-v-34b685fa]{align-items:center;color:#4b5563;display:flex;font-size:13px;gap:8px}.impact-item i[data-v-34b685fa]{color:#6b7280;width:14px}.form-errors[data-v-34b685fa]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-bottom:20px;padding:16px}.form-errors h6[data-v-34b685fa]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-34b685fa]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.modal-footer[data-v-34b685fa]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-34b685fa]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-34b685fa]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-34b685fa]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.btn-secondary[data-v-34b685fa]{background:#6c757d;color:#fff}.btn-warning[data-v-34b685fa]{background:#f59e0b;color:#fff}.btn-success[data-v-34b685fa]{background:#10b981;color:#fff}.btn-danger[data-v-34b685fa]{background:#ef4444;color:#fff}.fa-spin[data-v-34b685fa]{animation:spin-34b685fa 1s linear infinite}@keyframes spin-34b685fa{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (max-width:768px){.status-dialog[data-v-34b685fa]{margin:10px;width:98%}.action-description[data-v-34b685fa]{flex-direction:column;gap:12px;text-align:center}.modal-body[data-v-34b685fa],.modal-header[data-v-34b685fa]{padding:16px}.modal-footer[data-v-34b685fa]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-34b685fa]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/statusUpdate/index.vue?vue&type=template&id=34b685fa&scoped=true&
var render = function render() {
  var _vm$notes, _vm$jobAdvertise$appl;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog status-dialog\" data-v-34b685fa><div" + _vm._ssrClass("modal-header", _vm.getHeaderClass()) + " data-v-34b685fa><div class=\"modal-title-section\" data-v-34b685fa><i" + _vm._ssrClass("modal-icon", _vm.getActionIcon()) + " data-v-34b685fa></i> <h5 class=\"modal-title\" data-v-34b685fa>" + _vm._ssrEscape("\n          " + _vm._s(_vm.getActionTitle()) + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-34b685fa><i class=\"fas fa-times\" data-v-34b685fa></i></button></div> <form data-v-34b685fa><div class=\"modal-body\" data-v-34b685fa>" + (_vm.jobAdvertise ? "<div class=\"status-update-content\" data-v-34b685fa><div class=\"job-info\" data-v-34b685fa><div class=\"job-title\" data-v-34b685fa><i class=\"fas fa-briefcase\" data-v-34b685fa></i> <strong data-v-34b685fa>" + _vm._ssrEscape(_vm._s(_vm.jobAdvertise.title)) + "</strong></div> <div class=\"job-location\" data-v-34b685fa><i class=\"fas fa-map-marker-alt\" data-v-34b685fa></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.jobAdvertise.country) + _vm._s(_vm.jobAdvertise.province ? `, ${_vm.jobAdvertise.province}` : '') + "\n            ") + "</div> <div class=\"current-status\" data-v-34b685fa><span class=\"status-label\" data-v-34b685fa>ສະຖານະປັດຈຸບັນ:</span> <span" + _vm._ssrClass(null, ['status-badge', _vm.jobAdvertise.status]) + " data-v-34b685fa><i" + _vm._ssrClass(null, _vm.getCurrentStatusIcon()) + " data-v-34b685fa></i>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatStatus(_vm.jobAdvertise.status)) + "\n              ") + "</span></div></div> <div" + _vm._ssrClass("action-description", _vm.getDescriptionClass()) + " data-v-34b685fa><div class=\"action-icon\" data-v-34b685fa><i" + _vm._ssrClass(null, _vm.getActionIcon()) + " data-v-34b685fa></i></div> <div class=\"action-content\" data-v-34b685fa><h4 data-v-34b685fa>" + _vm._ssrEscape(_vm._s(_vm.getActionTitle())) + "</h4> <p data-v-34b685fa>" + _vm._ssrEscape(_vm._s(_vm.getActionDescription())) + "</p> <div class=\"new-status\" data-v-34b685fa><span class=\"status-label\" data-v-34b685fa>ສະຖານະໃໝ່:</span> <span" + _vm._ssrClass(null, ['status-badge', _vm.getNewStatus()]) + " data-v-34b685fa><i" + _vm._ssrClass(null, _vm.getNewStatusIcon()) + " data-v-34b685fa></i>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatStatus(_vm.getNewStatus())) + "\n                ") + "</span></div></div></div> " + (_vm.action === 'pause' ? "<div class=\"action-details pause-details\" data-v-34b685fa><h5 data-v-34b685fa><i class=\"fas fa-pause-circle\" data-v-34b685fa></i>\n              ເຫດຜົນການຢຸດຊົ່ວຄາວ\n            </h5> <div class=\"reason-options\" data-v-34b685fa><label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"quota_reached\"" + _vm._ssrAttr("checked", _vm._q(_vm.pauseReason, "quota_reached")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ຈຳນວນຜູ້ສະໝັກເຕັມແລ້ວ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"review_applications\"" + _vm._ssrAttr("checked", _vm._q(_vm.pauseReason, "review_applications")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ຕ້ອງການທົບທວນຄຳສະໝັກ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"internal_review\"" + _vm._ssrAttr("checked", _vm._q(_vm.pauseReason, "internal_review")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ກວດສອບພາຍໃນ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"other\"" + _vm._ssrAttr("checked", _vm._q(_vm.pauseReason, "other")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ອື່ນໆ</span></label></div> <div class=\"field-hint info\" data-v-34b685fa><i class=\"fas fa-info-circle\" data-v-34b685fa></i>\n              ການຢຸດຊົ່ວຄາວສາມາດເປີດໃໝ່ໄດ້ໃນພາຍຫຼັງ\n            </div></div>" : "<!---->") + " " + (_vm.action === 'close' ? "<div class=\"action-details close-details\" data-v-34b685fa><h5 data-v-34b685fa><i class=\"fas fa-stop-circle\" data-v-34b685fa></i>\n              ເຫດຜົນການປິດ\n            </h5> <div class=\"reason-options\" data-v-34b685fa><label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"position_filled\"" + _vm._ssrAttr("checked", _vm._q(_vm.closeReason, "position_filled")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ຕຳແໜ່ງເຕັມແລ້ວ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"deadline_passed\"" + _vm._ssrAttr("checked", _vm._q(_vm.closeReason, "deadline_passed")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ໝົດກຳນົດເວລາ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"project_cancelled\"" + _vm._ssrAttr("checked", _vm._q(_vm.closeReason, "project_cancelled")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ໂຄງການຖືກຍົກເລີກ</span></label> <label class=\"radio-option\" data-v-34b685fa><input type=\"radio\" value=\"other\"" + _vm._ssrAttr("checked", _vm._q(_vm.closeReason, "other")) + " data-v-34b685fa> <span class=\"radio-label\" data-v-34b685fa>ອື່ນໆ</span></label></div> <div class=\"field-hint warning\" data-v-34b685fa><i class=\"fas fa-exclamation-triangle\" data-v-34b685fa></i>\n              ການປິດແລ້ວບໍ່ສາມາດເປີດໃໝ່ໄດ້\n            </div></div>" : "<!---->") + " " + (_vm.action === 'activate' ? "<div class=\"action-details activate-details\" data-v-34b685fa><div class=\"activation-info\" data-v-34b685fa><div class=\"info-item\" data-v-34b685fa><i class=\"fas fa-play-circle\" data-v-34b685fa></i> <span data-v-34b685fa>ການປະກາດຈະເປີດຮັບສະໝັກໃໝ່</span></div> <div class=\"info-item\" data-v-34b685fa><i class=\"fas fa-users\" data-v-34b685fa></i> <span data-v-34b685fa>ຜູ້ສະໝັກສາມາດສະໝັກໄດ້ທັນທີ</span></div> <div class=\"info-item\" data-v-34b685fa><i class=\"fas fa-eye\" data-v-34b685fa></i> <span data-v-34b685fa>ການປະກາດຈະສະແດງໃນລາຍການ</span></div></div></div>" : "<!---->") + " <div class=\"form-group\" data-v-34b685fa><label class=\"form-label\" data-v-34b685fa><i class=\"fas fa-sticky-note\" data-v-34b685fa></i>\n              ໝາຍເຫດເພີ່ມເຕີມ\n            </label> <textarea rows=\"3\"" + _vm._ssrAttr("placeholder", _vm.getNotesPlaceholder()) + " maxlength=\"300\" class=\"form-control\" data-v-34b685fa>" + _vm._ssrEscape(_vm._s(_vm.notes)) + "</textarea> <div class=\"field-hint\" data-v-34b685fa><span class=\"text-counter\" data-v-34b685fa>" + _vm._ssrEscape(_vm._s(((_vm$notes = _vm.notes) === null || _vm$notes === void 0 ? void 0 : _vm$notes.length) || 0) + "/300") + "</span></div></div> " + (_vm.action === 'close' ? "<div class=\"confirmation-section\" data-v-34b685fa><div class=\"checkbox-group\" data-v-34b685fa><label class=\"checkbox-option danger\" data-v-34b685fa><input type=\"checkbox\" required=\"required\"" + _vm._ssrAttr("checked", Array.isArray(_vm.confirmAction) ? _vm._i(_vm.confirmAction, null) > -1 : _vm.confirmAction) + " data-v-34b685fa> <span class=\"checkbox-label\" data-v-34b685fa>\n                  ຂ້ອຍເຂົ້າໃຈວ່າການປິດການປະກາດນີ້ບໍ່ສາມາດຍົກເລີກໄດ້\n                </span></label></div></div>" : "<!---->") + " <div" + _vm._ssrClass("impact-summary", _vm.getImpactClass()) + " data-v-34b685fa><h6 data-v-34b685fa><i class=\"fas fa-chart-line\" data-v-34b685fa></i>\n              ຜົນກະທົບ\n            </h6> <div class=\"impact-items\" data-v-34b685fa><div class=\"impact-item\" data-v-34b685fa><i class=\"fas fa-users\" data-v-34b685fa></i> <span data-v-34b685fa>" + _vm._ssrEscape("ຜູ້ສະໝັກປັດຈຸບັນ: " + _vm._s(((_vm$jobAdvertise$appl = _vm.jobAdvertise.applicants) === null || _vm$jobAdvertise$appl === void 0 ? void 0 : _vm$jobAdvertise$appl.length) || 0) + " ຄົນ") + "</span></div> <div class=\"impact-item\" data-v-34b685fa><i class=\"fas fa-clock\" data-v-34b685fa></i> <span data-v-34b685fa>" + _vm._ssrEscape(_vm._s(_vm.getImpactDescription())) + "</span></div> " + (_vm.jobAdvertise.maxApplicants ? "<div class=\"impact-item\" data-v-34b685fa><i class=\"fas fa-target\" data-v-34b685fa></i> <span data-v-34b685fa>" + _vm._ssrEscape("ເປົ້າໝາຍ: " + _vm._s(_vm.jobAdvertise.maxApplicants) + " ຄົນ") + "</span></div>" : "<!---->") + "</div></div></div>" : "<!---->") + " " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-34b685fa><h6 data-v-34b685fa><i class=\"fas fa-exclamation-circle\" data-v-34b685fa></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-34b685fa>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-34b685fa>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->") + "</div> <div class=\"modal-footer\" data-v-34b685fa><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-34b685fa><i class=\"fas fa-times\" data-v-34b685fa></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + _vm._ssrClass(null, ['btn', _vm.getConfirmButtonClass()]) + " data-v-34b685fa>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-34b685fa></i>" : "<i" + _vm._ssrClass(null, _vm.getActionIcon()) + " data-v-34b685fa></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'ກຳລັງປະມວນຜົນ...' : _vm.getConfirmButtonText()) + "\n        ") + "</button></div></form></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/jobAdvertise/statusUpdate/index.vue?vue&type=template&id=34b685fa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/statusUpdate/index.vue?vue&type=script&lang=js&
/* harmony default export */ var statusUpdatevue_type_script_lang_js_ = ({
  name: 'StatusUpdateDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    jobAdvertise: {
      type: Object,
      default: null
    },
    action: {
      type: String,
      default: '' // 'pause', 'activate', 'close'
    }
  },

  data() {
    return {
      loading: false,
      pauseReason: '',
      closeReason: '',
      notes: '',
      confirmAction: false,
      formErrors: []
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    isFormValid() {
      if (this.action === 'pause' && !this.pauseReason) {
        return false;
      }
      if (this.action === 'close' && (!this.closeReason || !this.confirmAction)) {
        return false;
      }
      return true;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.resetForm();
      }
    }
  },
  methods: {
    resetForm() {
      this.pauseReason = '';
      this.closeReason = '';
      this.notes = '';
      this.confirmAction = false;
      this.formErrors = [];
      this.loading = false;
    },
    closeDialog() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    async confirmAction() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        const statusData = {
          status: this.getNewStatus(),
          reason: this.action === 'pause' ? this.pauseReason : this.closeReason,
          notes: this.notes,
          actionType: this.action
        };
        console.log('📤 Submitting status update:', statusData);
        this.$emit('confirm', statusData);
      } catch (error) {
        console.error('Status update error:', error);
        this.formErrors.push('เกิดข้อผิดพลาดในการอัปเดตสถานะ');
      } finally {
        this.loading = false;
      }
    },
    validateForm() {
      this.formErrors = [];
      if (this.action === 'pause' && !this.pauseReason) {
        this.formErrors.push('ກະລຸນາເລືອກເຫດຜົນການຢຸດຊົ່ວຄາວ');
      }
      if (this.action === 'close') {
        if (!this.closeReason) {
          this.formErrors.push('ກະລຸນາເລືອກເຫດຜົນການປິດ');
        }
        if (!this.confirmAction) {
          this.formErrors.push('ກະລຸນາຢືນຢັນການປິດການປະກາດ');
        }
      }
      return this.formErrors.length === 0;
    },
    // Status and Action Methods
    getNewStatus() {
      var _this$jobAdvertise;
      const statusMap = {
        pause: 'inactive',
        activate: 'active',
        close: 'closed'
      };
      return statusMap[this.action] || ((_this$jobAdvertise = this.jobAdvertise) === null || _this$jobAdvertise === void 0 ? void 0 : _this$jobAdvertise.status);
    },
    getCurrentStatusIcon() {
      var _this$jobAdvertise2;
      const icons = {
        active: 'fas fa-play-circle',
        inactive: 'fas fa-pause-circle',
        closed: 'fas fa-stop-circle'
      };
      return icons[(_this$jobAdvertise2 = this.jobAdvertise) === null || _this$jobAdvertise2 === void 0 ? void 0 : _this$jobAdvertise2.status] || 'fas fa-question-circle';
    },
    getNewStatusIcon() {
      const icons = {
        active: 'fas fa-play-circle',
        inactive: 'fas fa-pause-circle',
        closed: 'fas fa-stop-circle'
      };
      return icons[this.getNewStatus()] || 'fas fa-question-circle';
    },
    getActionIcon() {
      const icons = {
        pause: 'fas fa-pause-circle',
        activate: 'fas fa-play-circle',
        close: 'fas fa-stop-circle'
      };
      return icons[this.action] || 'fas fa-question-circle';
    },
    getActionTitle() {
      const titles = {
        pause: 'ຢຸດການປະກາດຊົ່ວຄາວ',
        activate: 'ເປີດການປະກາດໃໝ່',
        close: 'ປິດການປະກາດ'
      };
      return titles[this.action] || 'ອັບເດດສະຖານະ';
    },
    getActionDescription() {
      const descriptions = {
        pause: 'ການປະກາດຈະຖືກຢຸດຊົ່ວຄາວ ແລະ ຜູ້ສະໝັກບໍ່ສາມາດສະໝັກໄດ້ຊົ່ວຄາວ',
        activate: 'ການປະກາດຈະເປີດຮັບສະໝັກໃໝ່ ແລະ ຜູ້ສະໝັກສາມາດສະໝັກໄດ້',
        close: 'ການປະກາດຈະຖືກປິດຖາວອນ ແລະ ບໍ່ສາມາດເປີດໃໝ່ໄດ້'
      };
      return descriptions[this.action] || '';
    },
    getConfirmButtonText() {
      const texts = {
        pause: 'ຢຸດຊົ່ວຄາວ',
        activate: 'ເປີດໃໝ່',
        close: 'ປິດການປະກາດ'
      };
      return texts[this.action] || 'ອັບເດດ';
    },
    getConfirmButtonClass() {
      const classes = {
        pause: 'btn-warning',
        activate: 'btn-success',
        close: 'btn-danger'
      };
      return classes[this.action] || 'btn-primary';
    },
    getHeaderClass() {
      const classes = {
        pause: 'header-warning',
        activate: 'header-success',
        close: 'header-danger'
      };
      return classes[this.action] || '';
    },
    getDescriptionClass() {
      const classes = {
        pause: 'description-warning',
        activate: 'description-success',
        close: 'description-danger'
      };
      return classes[this.action] || '';
    },
    getImpactClass() {
      const classes = {
        pause: 'impact-warning',
        activate: 'impact-success',
        close: 'impact-danger'
      };
      return classes[this.action] || '';
    },
    getNotesPlaceholder() {
      const placeholders = {
        pause: 'ລາຍລະອຽດເພີ່ມເຕີມກ່ຽວກັບການຢຸດຊົ່ວຄາວ...',
        activate: 'ລາຍລະອຽດການເປີດໃໝ່...',
        close: 'ເຫດຜົນລາຍລະອຽດການປິດການປະກາດ...'
      };
      return placeholders[this.action] || 'ໝາຍເຫດ...';
    },
    getImpactDescription() {
      const descriptions = {
        pause: 'ຜູ້ສະໝັກບໍ່ສາມາດສະໝັກໃໝ່ໄດ້ຊົ່ວຄາວ',
        activate: 'ຜູ້ສະໝັກສາມາດສະໝັກໄດ້ທັນທີ',
        close: 'ຜູ້ສະໝັກບໍ່ສາມາດສະໝັກໄດ້ອີກ'
      };
      return descriptions[this.action] || '';
    },
    formatStatus(status) {
      const statusLabels = {
        active: 'ເປີດຮັບສະໝັກ',
        inactive: 'ປິດຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ'
      };
      return statusLabels[status] || status;
    }
  }
});
// CONCATENATED MODULE: ./components/jobAdvertise/statusUpdate/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var jobAdvertise_statusUpdatevue_type_script_lang_js_ = (statusUpdatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/jobAdvertise/statusUpdate/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(609)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  jobAdvertise_statusUpdatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "34b685fa",
  "c272cb00"
  
)

/* harmony default export */ var statusUpdate = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=job-advertise-status-update.js.map