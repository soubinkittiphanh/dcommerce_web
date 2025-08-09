exports.ids = [13];
exports.modules = {

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(568);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1e35c214", content, true, context)
};

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13345444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13345444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13345444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13345444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13345444_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-13345444]{align-items:center;animation:fadeIn-13345444 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-13345444{0%{opacity:0}to{opacity:1}}.view-dialog[data-v-13345444]{animation:slideIn-13345444 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1000px;overflow:hidden;width:95%}@keyframes slideIn-13345444{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-13345444]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-13345444]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-13345444]{font-size:20px;opacity:.9}.modal-title[data-v-13345444]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-13345444]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-13345444]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-13345444]{max-height:70vh;overflow-y:auto;padding:24px}.empty-state[data-v-13345444]{align-items:center;color:#6b7280;display:flex;flex-direction:column;justify-content:center;padding:60px 40px}.empty-state i[data-v-13345444]{color:#d1d5db;font-size:48px;margin-bottom:16px}.empty-state p[data-v-13345444]{font-size:16px;margin:0}.applicant-header[data-v-13345444]{align-items:center;background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;display:flex;margin-bottom:24px;padding:24px}.applicant-avatar[data-v-13345444]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:40px;height:80px;justify-content:center;margin-right:24px;width:80px}.applicant-basic-info[data-v-13345444]{flex:1}.applicant-name[data-v-13345444]{color:#1e293b;font-size:24px;font-weight:700;margin:0 0 8px}.applicant-meta[data-v-13345444]{align-items:center;display:flex;gap:16px;margin-bottom:12px}.application-date[data-v-13345444]{color:#64748b;font-size:14px}.eligibility-status[data-v-13345444]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:20px;color:#dc2626;display:flex;font-size:14px;font-weight:600;gap:8px;padding:8px 16px}.eligibility-status.eligible[data-v-13345444]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.detail-sections[data-v-13345444]{display:flex;flex-direction:column;gap:24px}.detail-section[data-v-13345444]{background:#fff;border:2px solid #f1f5f9;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.1);padding:20px}.detail-section.eligibility-summary[data-v-13345444]{background:linear-gradient(135deg,#fef3c7,#fde68a);border-color:#f59e0b}.section-title[data-v-13345444]{align-items:center;border-bottom:2px solid #e5e7eb;color:#374151;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px;padding-bottom:8px}.section-title i[data-v-13345444]{color:#667eea}.detail-grid[data-v-13345444]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.detail-item[data-v-13345444]{display:flex;flex-direction:column;gap:6px}.detail-item.full-width[data-v-13345444]{grid-column:1/-1}.detail-label[data-v-13345444]{align-items:center;color:#6b7280;display:flex;font-size:12px;font-weight:600;gap:6px;letter-spacing:.5px;text-transform:uppercase}.detail-label i[data-v-13345444]{color:#9ca3af;width:12px}.detail-value[data-v-13345444]{color:#374151;font-size:14px;font-weight:500}.age-info[data-v-13345444]{color:#6b7280;font-size:13px}.email-link[data-v-13345444],.phone-link[data-v-13345444]{color:#3b82f6;-webkit-text-decoration:none;text-decoration:none;transition:color .2s}.email-link[data-v-13345444]:hover,.phone-link[data-v-13345444]:hover{color:#1d4ed8;-webkit-text-decoration:underline;text-decoration:underline}.qualifications-grid[data-v-13345444]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}.qualification-card[data-v-13345444]{align-items:center;background:rgba(239,68,68,.05);border:2px solid #fecaca;border-radius:10px;display:flex;padding:16px;transition:all .3s ease}.qualification-card.valid[data-v-13345444]{background:rgba(34,197,94,.05);border-color:#bbf7d0}.qualification-card.bonus[data-v-13345444]{background:rgba(251,191,36,.05);border-color:#fde68a}.qualification-icon[data-v-13345444]{align-items:center;background:rgba(239,68,68,.1);border-radius:50%;color:#dc2626;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;margin-right:12px;width:40px}.qualification-card.valid .qualification-icon[data-v-13345444]{background:rgba(34,197,94,.1);color:#15803d}.qualification-card.bonus .qualification-icon[data-v-13345444]{background:rgba(251,191,36,.1);color:#d97706}.qualification-content[data-v-13345444]{flex:1}.qualification-title[data-v-13345444]{color:#374151;font-size:14px;font-weight:600;margin-bottom:2px}.qualification-status[data-v-13345444]{color:#6b7280;font-size:12px}.qualification-check[data-v-13345444]{align-items:center;background:rgba(239,68,68,.1);border-radius:50%;color:#dc2626;display:flex;font-size:12px;height:24px;justify-content:center;width:24px}.qualification-card.valid .qualification-check[data-v-13345444]{background:rgba(34,197,94,.1);color:#15803d}.qualification-card.bonus .qualification-check[data-v-13345444]{background:rgba(251,191,36,.1);color:#d97706}.overall-eligibility[data-v-13345444]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:12px;display:flex;padding:20px}.overall-eligibility.eligible[data-v-13345444]{background:rgba(34,197,94,.1);border-color:#22c55e}.eligibility-icon[data-v-13345444]{align-items:center;background:rgba(239,68,68,.2);border-radius:50%;color:#dc2626;display:flex;font-size:24px;height:60px;justify-content:center;margin-right:20px;width:60px}.overall-eligibility.eligible .eligibility-icon[data-v-13345444]{background:rgba(34,197,94,.2);color:#15803d}.eligibility-content[data-v-13345444]{flex:1}.eligibility-title[data-v-13345444]{color:#dc2626;font-size:18px;font-weight:700;margin-bottom:4px}.overall-eligibility.eligible .eligibility-title[data-v-13345444]{color:#15803d}.eligibility-description[data-v-13345444]{color:#6b7280;font-size:14px;line-height:1.5}.bonus-note[data-v-13345444]{color:#d97706;font-weight:600}.status-badge[data-v-13345444]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 12px;text-transform:uppercase}.status-badge.pending[data-v-13345444]{background-color:#fef3c7;color:#d97706}.status-badge.approved[data-v-13345444]{background-color:#d1fae5;color:#065f46}.status-badge.rejected[data-v-13345444]{background-color:#fee2e2;color:#dc2626}.gender-badge[data-v-13345444]{border-radius:12px;font-size:12px;font-weight:600;padding:4px 8px;text-transform:uppercase}.gender-badge.male[data-v-13345444]{background-color:#dbeafe;color:#3b82f6}.gender-badge.female[data-v-13345444]{background-color:#fce7f3;color:#ec4899}.modal-footer[data-v-13345444]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-13345444]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-13345444]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn-primary[data-v-13345444]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-13345444]{background:#6c757d;color:#fff}@media (max-width:768px){.view-dialog[data-v-13345444]{margin:10px;width:98%}.applicant-header[data-v-13345444]{flex-direction:column;gap:16px;text-align:center}.applicant-avatar[data-v-13345444]{margin-right:0}.applicant-meta[data-v-13345444]{flex-wrap:wrap;justify-content:center}.detail-grid[data-v-13345444],.qualifications-grid[data-v-13345444]{grid-template-columns:1fr}.overall-eligibility[data-v-13345444]{flex-direction:column;gap:16px;text-align:center}.eligibility-icon[data-v-13345444]{margin-right:0}.modal-body[data-v-13345444],.modal-header[data-v-13345444]{padding:16px}.modal-footer[data-v-13345444]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-13345444]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantViewDialog/index.vue?vue&type=template&id=13345444&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog view-dialog\" data-v-13345444><div class=\"modal-header\" data-v-13345444><div class=\"modal-title-section\" data-v-13345444><i class=\"fas fa-user-circle modal-icon\" data-v-13345444></i> <h5 class=\"modal-title\" data-v-13345444>ລາຍລະອຽດຜູ້ສະໝັກ</h5></div> <button class=\"close-btn\" data-v-13345444><i class=\"fas fa-times\" data-v-13345444></i></button></div> <div class=\"modal-body\" data-v-13345444>" + (!_vm.applicant ? "<div class=\"empty-state\" data-v-13345444><i class=\"fas fa-user-slash\" data-v-13345444></i> <p data-v-13345444>ບໍ່ພົບຂໍ້ມູນຜູ້ສະໝັກ</p></div>" : "<div class=\"applicant-details\" data-v-13345444><div class=\"applicant-header\" data-v-13345444><div class=\"applicant-avatar\" data-v-13345444><i class=\"fas fa-user-circle\" data-v-13345444></i></div> <div class=\"applicant-basic-info\" data-v-13345444><h3 class=\"applicant-name\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.getFullName())) + "</h3> <div class=\"applicant-meta\" data-v-13345444><span" + _vm._ssrClass(null, ['status-badge', _vm.applicant.status]) + " data-v-13345444>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatStatus(_vm.applicant.status)) + "\n              ") + "</span> <span class=\"application-date\" data-v-13345444>" + _vm._ssrEscape("\n                ສະໝັກເມື່ອ " + _vm._s(_vm.formatDate(_vm.applicant.applicationDate)) + "\n              ") + "</span></div> <div" + _vm._ssrClass("eligibility-status", {
    'eligible': _vm.isEligible
  }) + " data-v-13345444><i" + _vm._ssrClass(null, _vm.isEligible ? 'fas fa-check-circle' : 'fas fa-times-circle') + " data-v-13345444></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.isEligible ? 'ມີຄຸນສົມບັດເໝາະສົມ' : 'ຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ') + "\n            ") + "</div></div></div> <div class=\"detail-sections\" data-v-13345444><div class=\"detail-section\" data-v-13345444><h4 class=\"section-title\" data-v-13345444><i class=\"fas fa-user\" data-v-13345444></i>\n              ຂໍ້ມູນສ່ວນຕົວ\n            </h4> <div class=\"detail-grid\" data-v-13345444><div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-user\" data-v-13345444></i>\n                  ຊື່ເຕັມ\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.getFullName())) + "</div></div> <div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-venus-mars\" data-v-13345444></i>\n                  ເພດ\n                </div> <div class=\"detail-value\" data-v-13345444><span" + _vm._ssrClass(null, ['gender-badge', _vm.applicant.gender]) + " data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatGender(_vm.applicant.gender)) + "\n                  ") + "</span></div></div> <div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-birthday-cake\" data-v-13345444></i>\n                  ວັນເກີດ / ອາຍຸ\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatDate(_vm.applicant.dateOfBirth)) + "\n                  ") + "<span class=\"age-info\" data-v-13345444>" + _vm._ssrEscape("(" + _vm._s(_vm.calculateAge()) + " ປີ)") + "</span></div></div></div></div> <div class=\"detail-section\" data-v-13345444><h4 class=\"section-title\" data-v-13345444><i class=\"fas fa-address-book\" data-v-13345444></i>\n              ຂໍ້ມູນການຕິດຕໍ່\n            </h4> <div class=\"detail-grid\" data-v-13345444><div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-phone\" data-v-13345444></i>\n                  ເບີໂທລະສັບ\n                </div> <div class=\"detail-value\" data-v-13345444><a" + _vm._ssrAttr("href", `tel:${_vm.applicant.phone}`) + " class=\"phone-link\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.phone) + "\n                  ") + "</a></div></div> " + (_vm.applicant.email ? "<div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-envelope\" data-v-13345444></i>\n                  ອີເມວ\n                </div> <div class=\"detail-value\" data-v-13345444><a" + _vm._ssrAttr("href", `mailto:${_vm.applicant.email}`) + " class=\"email-link\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.email) + "\n                  ") + "</a></div></div>" : "<!---->") + " " + (_vm.applicant.address ? "<div class=\"detail-item full-width\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-map-marker-alt\" data-v-13345444></i>\n                  ທີ່ຢູ່\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.applicant.address)) + "</div></div>" : "<!---->") + "</div></div> <div class=\"detail-section\" data-v-13345444><h4 class=\"section-title\" data-v-13345444><i class=\"fas fa-clipboard-check\" data-v-13345444></i>\n              ຄຸນສົມບັດ &amp; ເງື່ອນໄຂ\n            </h4> <div class=\"qualifications-grid\" data-v-13345444><div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.applicant.hasPassport
  }) + " data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-passport\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ໜັງສືເດີນທາງ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.hasPassport ? 'ມີ' : 'ບໍ່ມີ') + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i" + _vm._ssrClass(null, _vm.applicant.hasPassport ? 'fas fa-check' : 'fas fa-times') + " data-v-13345444></i></div></div> <div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.applicant.healthStatus === 'good'
  }) + " data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-heartbeat\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ສຸຂະພາບ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatHealthStatus(_vm.applicant.healthStatus)) + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i" + _vm._ssrClass(null, _vm.applicant.healthStatus === 'good' ? 'fas fa-check' : 'fas fa-times') + " data-v-13345444></i></div></div> <div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.applicant.eyesightGood
  }) + " data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-eye\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ສາຍຕາ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.eyesightGood ? 'ດີ' : 'ບໍ່ດີ') + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i" + _vm._ssrClass(null, _vm.applicant.eyesightGood ? 'fas fa-check' : 'fas fa-times') + " data-v-13345444></i></div></div> " + (_vm.hasChineseLanguageBonus ? "<div class=\"qualification-card bonus\" data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-language\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ພາສາຈີນ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatLanguageLevel(_vm.applicant.chineseLanguageLevel)) + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i class=\"fas fa-star\" data-v-13345444></i></div></div>" : "<!---->") + " <div" + _vm._ssrClass("qualification-card", {
    'valid': !_vm.applicant.hasVisibleTattoos
  }) + " data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-paint-brush\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ລາຍສັກ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.applicant.hasVisibleTattoos ? 'ມີລາຍສັກນອກເສື້ອຜ້າ' : 'ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ') + "\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i" + _vm._ssrClass(null, !_vm.applicant.hasVisibleTattoos ? 'fas fa-check' : 'fas fa-times') + " data-v-13345444></i></div></div> <div" + _vm._ssrClass("qualification-card", {
    'valid': _vm.isAgeValid
  }) + " data-v-13345444><div class=\"qualification-icon\" data-v-13345444><i class=\"fas fa-calendar\" data-v-13345444></i></div> <div class=\"qualification-content\" data-v-13345444><div class=\"qualification-title\" data-v-13345444>ອາຍຸ</div> <div class=\"qualification-status\" data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.calculateAge()) + " ປີ (" + _vm._s(_vm.isAgeValid ? 'ເໝາະສົມ' : 'ບໍ່ເໝາະສົມ') + ")\n                  ") + "</div></div> <div class=\"qualification-check\" data-v-13345444><i" + _vm._ssrClass(null, _vm.isAgeValid ? 'fas fa-check' : 'fas fa-times') + " data-v-13345444></i></div></div></div></div> <div class=\"detail-section\" data-v-13345444><h4 class=\"section-title\" data-v-13345444><i class=\"fas fa-file-alt\" data-v-13345444></i>\n              ຂໍ້ມູນການສະໝັກ\n            </h4> <div class=\"detail-grid\" data-v-13345444><div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-hashtag\" data-v-13345444></i>\n                  ID\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.applicant.id)) + "</div></div> <div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-calendar-plus\" data-v-13345444></i>\n                  ວັນທີສະໝັກ\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.applicant.applicationDate))) + "</div></div> <div class=\"detail-item\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-info-circle\" data-v-13345444></i>\n                  ສະຖານະ\n                </div> <div class=\"detail-value\" data-v-13345444><span" + _vm._ssrClass(null, ['status-badge', _vm.applicant.status]) + " data-v-13345444>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatStatus(_vm.applicant.status)) + "\n                  ") + "</span></div></div> " + (_vm.applicant.notes ? "<div class=\"detail-item full-width\" data-v-13345444><div class=\"detail-label\" data-v-13345444><i class=\"fas fa-sticky-note\" data-v-13345444></i>\n                  ໝາຍເຫດ\n                </div> <div class=\"detail-value\" data-v-13345444>" + _vm._ssrEscape(_vm._s(_vm.applicant.notes)) + "</div></div>" : "<!---->") + "</div></div> <div class=\"detail-section eligibility-summary\" data-v-13345444><h4 class=\"section-title\" data-v-13345444><i class=\"fas fa-award\" data-v-13345444></i>\n              ສະຫລຸບຄຸນສົມບັດລວມ\n            </h4> <div" + _vm._ssrClass("overall-eligibility", {
    'eligible': _vm.isEligible
  }) + " data-v-13345444><div class=\"eligibility-icon\" data-v-13345444><i" + _vm._ssrClass(null, _vm.isEligible ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down') + " data-v-13345444></i></div> <div class=\"eligibility-content\" data-v-13345444><div class=\"eligibility-title\" data-v-13345444>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.isEligible ? 'ຜ່ານເງື່ອນໄຂທັງໝົດ' : 'ຍັງບໍ່ຜ່ານເງື່ອນໄຂ') + "\n                ") + "</div> <div class=\"eligibility-description\" data-v-13345444>" + (_vm.isEligible ? "<span data-v-13345444>\n                    ຜູ້ສະໝັກຄົນນີ້ມີຄຸນສົມບັດຄົບຖ້ວນຕາມທີ່ກຳນົດ\n                    " + (_vm.hasChineseLanguageBonus ? "<span class=\"bonus-note\" data-v-13345444>\n                      + ໂບນັສພາສາຈີນ\n                    </span>" : "<!---->") + "</span>" : "<span data-v-13345444>\n                    ຜູ້ສະໝັກຄົນນີ້ຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ ກະລຸນາກວດສອບເງື່ອນໄຂຂ້າງເທິງ\n                  </span>") + "</div></div></div></div></div></div>") + "</div> <div class=\"modal-footer\" data-v-13345444><button type=\"button\" class=\"btn btn-secondary\" data-v-13345444><i class=\"fas fa-times\" data-v-13345444></i>\n        ປິດ\n      </button> " + (_vm.applicant && _vm.applicant.status === 'pending' ? "<button type=\"button\" class=\"btn btn-primary\" data-v-13345444><i class=\"fas fa-edit\" data-v-13345444></i>\n        ແກ້ໄຂ\n      </button>" : "<!---->") + "</div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantViewDialog/index.vue?vue&type=template&id=13345444&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantViewDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ApplicantViewDialogvue_type_script_lang_js_ = ({
  name: 'ApplicantViewDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    applicant: {
      type: Object,
      default: null
    }
  },
  computed: {
    // Age validation
    isAgeValid() {
      const age = this.calculateAge();
      return age >= 18 && age <= 32;
    },
    // Chinese language bonus
    hasChineseLanguageBonus() {
      return this.applicant && this.applicant.chineseLanguageLevel && !['none', 'basic'].includes(this.applicant.chineseLanguageLevel);
    },
    // Overall eligibility
    isEligible() {
      if (!this.applicant) return false;
      return this.isAgeValid && this.applicant.hasPassport && this.applicant.healthStatus === 'good' && this.applicant.eyesightGood && !this.applicant.hasVisibleTattoos;
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    editApplicant() {
      this.$emit('edit', this.applicant);
      this.closeDialog();
    },
    handleOverlayClick() {
      this.closeDialog();
    },
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
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
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
    formatHealthStatus(status) {
      const statusLabels = {
        good: 'ດີ',
        fair: 'ປານກາງ',
        poor: 'ບໍ່ດີ'
      };
      return statusLabels[status] || status;
    }
  }
});
// CONCATENATED MODULE: ./components/applicants/ApplicantViewDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var applicants_ApplicantViewDialogvue_type_script_lang_js_ = (ApplicantViewDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/applicants/ApplicantViewDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(567)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_ApplicantViewDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13345444",
  "43263967"
  
)

/* harmony default export */ var ApplicantViewDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=applicants-applicant-view-dialog.js.map