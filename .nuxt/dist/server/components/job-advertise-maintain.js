exports.ids = [53];
exports.modules = {

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(648);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0ba0925a", content, true, context)
};

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_89608314_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(563);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_89608314_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_89608314_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_89608314_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_89608314_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-89608314]{align-items:center;animation:fadeIn-89608314 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-89608314{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-89608314]{animation:slideIn-89608314 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:1000px;overflow:hidden;width:95%}@keyframes slideIn-89608314{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-89608314]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-89608314]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-89608314]{font-size:20px;opacity:.9}.modal-title[data-v-89608314]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-89608314]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-89608314]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-89608314]{max-height:60vh;overflow-y:auto;padding:24px}.form-grid[data-v-89608314]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-89608314]{margin-bottom:0}.form-group.full-width[data-v-89608314]{grid-column:1/-1}.section-header[data-v-89608314]{border-bottom:2px solid #e9ecef;margin:24px 0 16px;padding-bottom:12px}.section-header h4[data-v-89608314]{align-items:center;color:#495057;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0}.section-header i[data-v-89608314]{color:#667eea}.form-label[data-v-89608314]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-89608314]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-89608314]{color:#6b7280;font-size:12px}.form-control[data-v-89608314]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;transition:all .2s ease;width:100%}.form-control[data-v-89608314]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-89608314]{border-color:#e74c3c}.invalid-feedback[data-v-89608314]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.custom-select-wrapper[data-v-89608314]{position:relative}.custom-select[data-v-89608314]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:40px}.select-icon[data-v-89608314]{color:#6b7280;pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.checkbox-group[data-v-89608314]{margin-top:8px}.checkbox-option[data-v-89608314]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px}.checkbox-option input[type=checkbox][data-v-89608314]{margin:0}.checkbox-label[data-v-89608314]{font-weight:500}.field-hint[data-v-89608314]{align-items:center;display:flex;font-size:12px;gap:6px;margin-top:6px}.field-hint.error[data-v-89608314]{color:#e74c3c}.field-hint.warning[data-v-89608314]{color:#f39c12}.field-hint.info[data-v-89608314]{color:#3b82f6}.field-hint.success[data-v-89608314]{color:#28a745}.text-counter[data-v-89608314]{color:#9ca3af;font-size:11px;margin-left:auto}.requirements-summary[data-v-89608314]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;margin-top:16px;padding:20px}.requirements-summary h5[data-v-89608314]{align-items:center;color:#1e293b;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px}.requirements-summary h5 i[data-v-89608314]{color:#3b82f6}.requirements-grid[data-v-89608314]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:16px}.requirement-card[data-v-89608314]{align-items:center;background:hsla(0,0%,100%,.7);border:1px solid #e2e8f0;border-radius:8px;display:flex;gap:12px;padding:12px;transition:all .2s ease}.requirement-card.required[data-v-89608314]{background:rgba(34,197,94,.1);border-color:#22c55e}.requirement-card.allowed[data-v-89608314]{background:rgba(59,130,246,.1);border-color:#3b82f6}.requirement-icon[data-v-89608314]{align-items:center;background:#f1f5f9;border-radius:50%;color:#64748b;display:flex;flex-shrink:0;font-size:16px;height:40px;justify-content:center;width:40px}.requirement-card.required .requirement-icon[data-v-89608314]{background:#dcfce7;color:#16a34a}.requirement-card.allowed .requirement-icon[data-v-89608314]{background:#dbeafe;color:#2563eb}.requirement-content[data-v-89608314]{flex:1;min-width:0}.requirement-content h6[data-v-89608314]{color:#374151;font-size:13px;font-weight:600;margin:0 0 4px}.requirement-content p[data-v-89608314]{color:#64748b;font-size:12px;margin:0}.requirement-card.required .requirement-content h6[data-v-89608314],.requirement-card.required .requirement-content p[data-v-89608314]{color:#15803d}.requirement-card.allowed .requirement-content h6[data-v-89608314],.requirement-card.allowed .requirement-content p[data-v-89608314]{color:#1d4ed8}.job-summary[data-v-89608314]{align-items:center;background:hsla(220,9%,46%,.1);border:2px solid #9ca3af;border-radius:8px;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;justify-content:center;padding:12px 16px;text-align:center}.job-summary.active[data-v-89608314]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.job-summary i[data-v-89608314]{font-size:16px}.form-errors[data-v-89608314]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-89608314]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-89608314]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.enhanced-footer[data-v-89608314]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-89608314]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-89608314]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-89608314]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-89608314]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-89608314]{background:#6c757d;color:#fff}.btn[data-v-89608314]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-89608314]{animation:spin-89608314 1s linear infinite}@keyframes spin-89608314{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.text-success[data-v-89608314]{color:#22c55e!important}.text-warning[data-v-89608314]{color:#f59e0b!important}.text-danger[data-v-89608314]{color:#ef4444!important}@media (max-width:768px){.enhanced-dialog[data-v-89608314]{margin:10px;width:98%}.form-grid[data-v-89608314],.requirements-grid[data-v-89608314]{grid-template-columns:1fr}.modal-body[data-v-89608314],.modal-header[data-v-89608314]{padding:16px}.enhanced-footer[data-v-89608314]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-89608314]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/maintain/index.vue?vue&type=template&id=89608314&scoped=true&
var render = function render() {
  var _vm$formData$jobDescr, _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-89608314>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-89608314><div class=\"modal-title-section\" data-v-89608314><i class=\"fas fa-briefcase modal-icon\" data-v-89608314></i> <h5 class=\"modal-title\" data-v-89608314>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂການປະກາດຫາງານ' : 'ເພີ່ມການປະກາດຫາງານໃໝ່') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-89608314><i class=\"fas fa-times\" data-v-89608314></i></button></div> "), _vm._ssrNode("<form data-v-89608314>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-89608314>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-89608314>", "</div>", [_vm._ssrNode("<div class=\"section-header full-width\" data-v-89608314><h4 data-v-89608314><i class=\"fas fa-briefcase\" data-v-89608314></i>\n              ຂໍ້ມູນງານ\n            </h4></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label required\" data-v-89608314><i class=\"fas fa-tag\" data-v-89608314></i>\n              ຊື່ວຽກ\n            </label> <input type=\"text\" placeholder=\"ເຊັ່ນ: ພະນັກງານໂຮງງານ - ເອເລັກໂທນິກ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.title) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.title
  }) + " data-v-89608314> " + (_vm.errors.title ? "<div class=\"invalid-feedback\" data-v-89608314>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.title) + "\n            ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-89608314>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-89608314><i class=\"fas fa-globe\" data-v-89608314></i>\n              ປະເທດ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-89608314>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.country,
      expression: "formData.country"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.country
    },
    attrs: {
      "required": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "country", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກປະເທດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Thailand"
    }
  }, [_vm._v("ປະເທດໄທ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "South Korea"
    }
  }, [_vm._v("ເກົາຫຼີໃຕ້")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Japan"
    }
  }, [_vm._v("ຍີ່ປຸ່ນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Taiwan"
    }
  }, [_vm._v("ໄຕ້ຫວັນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Malaysia"
    }
  }, [_vm._v("ມາເລເຊຍ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Singapore"
    }
  }, [_vm._v("ສິງກະໂປ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-89608314><i class=\"fas fa-chevron-down\" data-v-89608314></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.country ? "<div class=\"invalid-feedback\" data-v-89608314>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.country) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-map-marker-alt\" data-v-89608314></i>\n              ແຂວງ/ເມືອງ\n            </label> <input type=\"text\" placeholder=\"ເຊັ່ນ: ສະລະບູລີ, ບາງກອກ\"" + _vm._ssrAttr("value", _vm.formData.province) + " class=\"form-control\" data-v-89608314></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-clock\" data-v-89608314></i>\n              ຊົ່ວໂມງເຮັດວຽກ\n            </label> <input type=\"text\" placeholder=\"ເຊັ່ນ: 8 ຊົ່ວໂມງ/ວັນ, 1 ກະ\"" + _vm._ssrAttr("value", _vm.formData.workingHours) + " class=\"form-control\" data-v-89608314> <div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>\n              ລະບຸຊົ່ວໂມງເຮັດວຽກຕໍ່ວັນ ແລະ ຈຳນວນກະ\n            </div></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-calendar-day\" data-v-89608314></i>\n              ວັນພັກ\n            </label> <input type=\"text\" placeholder=\"ເຊັ່ນ: 1 ວັນ/ອາທິດ\"" + _vm._ssrAttr("value", _vm.formData.restDays) + " class=\"form-control\" data-v-89608314> <div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>\n              ລະບຸວັນພັກຕໍ່ອາທິດ ຫຼື ຕໍ່ເດືອນ\n            </div></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-users\" data-v-89608314></i>\n              ຈຳນວນຄົນຮັບສະໝັກ\n            </label> <input type=\"number\" min=\"1\" max=\"500\" placeholder=\"ເຊັ່ນ: 100\"" + _vm._ssrAttr("value", _vm.formData.maxApplicants) + " class=\"form-control\" data-v-89608314> <div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>\n              ຈຳນວນຄົນສູງສຸດທີ່ຮັບສະໝັກ\n            </div></div> <div class=\"form-group full-width\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-align-left\" data-v-89608314></i>\n              ລາຍລະອຽດວຽກ\n            </label> <textarea rows=\"4\" placeholder=\"ອະທິບາຍລາຍລະອຽດວຽກ, ສະພາບແວດລ້ອມການເຮັດວຽກ...\" maxlength=\"1000\" class=\"form-control\" data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formData.jobDescription)) + "</textarea> <div class=\"field-hint\" data-v-89608314><span class=\"text-counter\" data-v-89608314>" + _vm._ssrEscape(_vm._s(((_vm$formData$jobDescr = _vm.formData.jobDescription) === null || _vm$formData$jobDescr === void 0 ? void 0 : _vm$formData$jobDescr.length) || 0) + "/1000") + "</span></div></div> <div class=\"section-header full-width\" data-v-89608314><h4 data-v-89608314><i class=\"fas fa-clipboard-check\" data-v-89608314></i>\n              ຄຸນສົມບັດຜູ້ສະໝັກ\n            </h4></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-passport\" data-v-89608314></i>\n              ໜັງສືເດີນທາງ\n            </label> <div class=\"checkbox-group\" data-v-89608314><label class=\"checkbox-option\" data-v-89608314><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.requiresPassport) ? _vm._i(_vm.formData.requiresPassport, null) > -1 : _vm.formData.requiresPassport) + " data-v-89608314> <span class=\"checkbox-label\" data-v-89608314>ຕ້ອງມີໜັງສືເດີນທາງ</span></label></div> <div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>\n              ຈຳເປັນສຳລັບການເດີນທາງໄປເຮັດວຽກຕ່າງປະເທດ\n            </div></div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-eye\" data-v-89608314></i>\n              ສາຍຕາ\n            </label> <div class=\"checkbox-group\" data-v-89608314><label class=\"checkbox-option\" data-v-89608314><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.requiresGoodEyesight) ? _vm._i(_vm.formData.requiresGoodEyesight, null) > -1 : _vm.formData.requiresGoodEyesight) + " data-v-89608314> <span class=\"checkbox-label\" data-v-89608314>ຕ້ອງມີສາຍຕາດີ</span></label></div> <div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>\n              ສຳລັບວຽກທີ່ຕ້ອງການຄວາມລະອຽດ\n            </div></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-89608314>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-89608314><i class=\"fas fa-language\" data-v-89608314></i>\n              ລະດັບພາສາທີ່ຕ້ອງການ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-89608314>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.requiresLanguage,
      expression: "formData.requiresLanguage"
    }],
    staticClass: "form-control custom-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "requiresLanguage", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "none"
    }
  }, [_vm._v("ບໍ່ຕ້ອງການ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "basic"
    }
  }, [_vm._v("ພື້ນຖານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "intermediate"
    }
  }, [_vm._v("ປານກາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "advanced"
    }
  }, [_vm._v("ສູງ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-89608314><i class=\"fas fa-chevron-down\" data-v-89608314></i></div>")], 2), _vm._ssrNode(" <div class=\"field-hint success\" data-v-89608314><i class=\"fas fa-star\" data-v-89608314></i>\n              ພາສາທ້ອງຖິ່ນຂອງປະເທດປາຍທາງ\n            </div>")], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-paint-brush\" data-v-89608314></i>\n              ນະໂຍບາຍລາຍສັກ\n            </label> <div class=\"checkbox-group\" data-v-89608314><label class=\"checkbox-option\" data-v-89608314><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.allowsTattoos) ? _vm._i(_vm.formData.allowsTattoos, null) > -1 : _vm.formData.allowsTattoos) + " data-v-89608314> <span class=\"checkbox-label\" data-v-89608314>ອະນຸຍາດໃຫ້ມີລາຍສັກ</span></label></div> <div class=\"field-hint warning\" data-v-89608314><i class=\"fas fa-exclamation-triangle\" data-v-89608314></i>\n              ສ່ວນໃຫຍ່ບໍ່ອະນຸຍາດລາຍສັກນອກເສື້ອຜ້າ\n            </div></div> <div class=\"section-header full-width\" data-v-89608314><h4 data-v-89608314><i class=\"fas fa-cogs\" data-v-89608314></i>\n              ການຈັດການງານ\n            </h4></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-89608314>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-89608314><i class=\"fas fa-toggle-on\" data-v-89608314></i>\n              ສະຖານະ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-89608314>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.status,
      expression: "formData.status"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.status
    },
    attrs: {
      "required": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະຖານະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "active"
    }
  }, [_vm._v("ເປີດຮັບສະໝັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "inactive"
    }
  }, [_vm._v("ປິດຊົ່ວຄາວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "closed"
    }
  }, [_vm._v("ປິດແລ້ວ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-89608314><i class=\"fas fa-chevron-down\" data-v-89608314></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.status ? "<div class=\"invalid-feedback\" data-v-89608314>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.status) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-calendar-plus\" data-v-89608314></i>\n              ວັນເລີ່ມຮັບສະໝັກ\n            </label> <input type=\"date\"" + _vm._ssrAttr("min", _vm.todayDate) + _vm._ssrAttr("value", _vm.formData.startDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.startDate
  }) + " data-v-89608314> " + (_vm.errors.startDate ? "<div class=\"invalid-feedback\" data-v-89608314>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.startDate) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-calendar-minus\" data-v-89608314></i>\n              ວັນສິ້ນສຸດຮັບສະໝັກ\n            </label> <input type=\"date\"" + _vm._ssrAttr("min", _vm.formData.startDate || _vm.todayDate) + _vm._ssrAttr("value", _vm.formData.endDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.endDate
  }) + " data-v-89608314> " + (_vm.errors.endDate ? "<div class=\"invalid-feedback\" data-v-89608314>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.endDate) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.formData.startDate && _vm.formData.endDate ? "<div class=\"field-hint info\" data-v-89608314><i class=\"fas fa-info-circle\" data-v-89608314></i>" + _vm._ssrEscape("\n              ໄລຍະເວລາ: " + _vm._s(_vm.calculateDuration()) + " ວັນ\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group full-width\" data-v-89608314><label class=\"form-label\" data-v-89608314><i class=\"fas fa-sticky-note\" data-v-89608314></i>\n              ໝາຍເຫດ\n            </label> <textarea rows=\"3\" placeholder=\"ຂໍ້ມູນເພີ່ມເຕີມ, ເງື່ອນໄຂພິເສດ...\" maxlength=\"500\" class=\"form-control\" data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> <div class=\"field-hint\" data-v-89608314><span class=\"text-counter\" data-v-89608314>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div> <div class=\"form-group full-width\" data-v-89608314><div class=\"requirements-summary\" data-v-89608314><h5 data-v-89608314><i class=\"fas fa-clipboard-list\" data-v-89608314></i>\n                ສະຫລຸບຄຸນສົມບັດຜູ້ສະໝັກ\n              </h5> <div class=\"requirements-grid\" data-v-89608314><div" + _vm._ssrClass("requirement-card", {
    'required': _vm.formData.requiresPassport
  }) + " data-v-89608314><div class=\"requirement-icon\" data-v-89608314><i class=\"fas fa-passport\" data-v-89608314></i></div> <div class=\"requirement-content\" data-v-89608314><h6 data-v-89608314>ໜັງສືເດີນທາງ</h6> <p data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formData.requiresPassport ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ')) + "</p></div></div> <div" + _vm._ssrClass("requirement-card", {
    'required': _vm.formData.requiresGoodEyesight
  }) + " data-v-89608314><div class=\"requirement-icon\" data-v-89608314><i class=\"fas fa-eye\" data-v-89608314></i></div> <div class=\"requirement-content\" data-v-89608314><h6 data-v-89608314>ສາຍຕາດີ</h6> <p data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formData.requiresGoodEyesight ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ')) + "</p></div></div> <div" + _vm._ssrClass("requirement-card", {
    'required': _vm.formData.requiresLanguage !== 'none'
  }) + " data-v-89608314><div class=\"requirement-icon\" data-v-89608314><i class=\"fas fa-language\" data-v-89608314></i></div> <div class=\"requirement-content\" data-v-89608314><h6 data-v-89608314>ພາສາ</h6> <p data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formatLanguageLevel(_vm.formData.requiresLanguage))) + "</p></div></div> <div" + _vm._ssrClass("requirement-card", {
    'allowed': _vm.formData.allowsTattoos
  }) + " data-v-89608314><div class=\"requirement-icon\" data-v-89608314><i class=\"fas fa-paint-brush\" data-v-89608314></i></div> <div class=\"requirement-content\" data-v-89608314><h6 data-v-89608314>ລາຍສັກ</h6> <p data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.formData.allowsTattoos ? 'ອະນຸຍາດ' : 'ບໍ່ອະນຸຍາດ')) + "</p></div></div></div> <div" + _vm._ssrClass("job-summary", {
    'active': _vm.formData.status === 'active'
  }) + " data-v-89608314><i" + _vm._ssrClass(null, _vm.getStatusIcon()) + " data-v-89608314></i> <span data-v-89608314>" + _vm._ssrEscape(_vm._s(_vm.getJobSummaryText())) + "</span></div></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-89608314><h6 data-v-89608314><i class=\"fas fa-exclamation-circle\" data-v-89608314></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-89608314>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-89608314>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-89608314><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-89608314><i class=\"fas fa-times\" data-v-89608314></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-89608314>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-89608314></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-89608314></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'Saving...' : _vm.isEditMode ? 'ອັບເດດ' : 'ສ້າງການປະກາດ') + "\n        ") + "</button></div>")], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/jobAdvertise/maintain/index.vue?vue&type=template&id=89608314&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/jobAdvertise/maintain/index.vue?vue&type=script&lang=js&
/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'JobAdvertiseDialog',
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
  data() {
    return {
      loading: false,
      formData: {
        title: '',
        country: '',
        province: '',
        jobDescription: '',
        workingHours: '8 ຊົ່ວໂມງ/ວັນ',
        restDays: '1 ວັນ/ອາທິດ',
        requiresPassport: true,
        requiresGoodEyesight: false,
        requiresLanguage: 'none',
        allowsTattoos: false,
        status: 'active',
        startDate: '',
        endDate: '',
        maxApplicants: null,
        notes: ''
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.jobAdvertise && this.jobAdvertise.id;
    },
    user() {
      return this.$auth.user || '';
    },
    todayDate() {
      return new Date().toISOString().split('T')[0];
    },
    // Form validation
    isFormValid() {
      return this.formData.title.trim() && this.formData.country && this.formData.status && this.formErrors.length === 0;
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
    jobAdvertise: {
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
      if (this.jobAdvertise && this.jobAdvertise.id) {
        // Edit mode
        this.formData = {
          title: this.jobAdvertise.title || '',
          country: this.jobAdvertise.country || '',
          province: this.jobAdvertise.province || '',
          jobDescription: this.jobAdvertise.jobDescription || '',
          workingHours: this.jobAdvertise.workingHours || '8 ຊົ່ວໂມງ/ວັນ',
          restDays: this.jobAdvertise.restDays || '1 ວັນ/ອາທິດ',
          requiresPassport: this.jobAdvertise.requiresPassport || false,
          requiresGoodEyesight: this.jobAdvertise.requiresGoodEyesight || false,
          requiresLanguage: this.jobAdvertise.requiresLanguage || 'none',
          allowsTattoos: this.jobAdvertise.allowsTattoos || false,
          status: this.jobAdvertise.status || 'active',
          startDate: this.jobAdvertise.startDate ? this.jobAdvertise.startDate.split('T')[0] : '',
          endDate: this.jobAdvertise.endDate ? this.jobAdvertise.endDate.split('T')[0] : '',
          maxApplicants: this.jobAdvertise.maxApplicants || null,
          notes: this.jobAdvertise.notes || ''
        };
      } else {
        // Create mode - set defaults
        this.formData = {
          title: '',
          country: '',
          province: '',
          jobDescription: '',
          workingHours: '8 ຊົ່ວໂມງ/ວັນ',
          restDays: '1 ວັນ/ອາທິດ',
          requiresPassport: true,
          requiresGoodEyesight: false,
          requiresLanguage: 'none',
          allowsTattoos: false,
          status: 'active',
          startDate: '',
          endDate: '',
          maxApplicants: null,
          notes: ''
        };
      }
      this.errors = {};
      this.formErrors = [];
    },
    resetForm() {
      this.formData = {
        title: '',
        country: '',
        province: '',
        jobDescription: '',
        workingHours: '8 ຊົ່ວໂມງ/ວັນ',
        restDays: '1 ວັນ/ອາທິດ',
        requiresPassport: true,
        requiresGoodEyesight: false,
        requiresLanguage: 'none',
        allowsTattoos: false,
        status: 'active',
        startDate: '',
        endDate: '',
        maxApplicants: null,
        notes: ''
      };
      this.errors = {};
      this.formErrors = [];
      this.loading = false;
    },
    validateForm() {
      this.errors = {};
      this.formErrors = [];

      // Required fields validation
      if (!this.formData.title.trim()) {
        this.errors.title = 'ກະລຸນາໃສ່ຊື່ວຽກ';
        this.formErrors.push('Job title is required');
      }
      if (!this.formData.country) {
        this.errors.country = 'ກະລຸນາເລືອກປະເທດ';
        this.formErrors.push('Country selection is required');
      }
      if (!this.formData.status) {
        this.errors.status = 'ກະລຸນາເລືອກສະຖານະ';
        this.formErrors.push('Status selection is required');
      }

      // Date validation
      if (this.formData.startDate && this.formData.endDate) {
        const startDate = new Date(this.formData.startDate);
        const endDate = new Date(this.formData.endDate);
        if (startDate >= endDate) {
          this.errors.endDate = 'ວັນສິ້ນສຸດຕ້ອງຫຼັງຈາກວັນເລີ່ມຕົ້ນ';
          this.formErrors.push('End date must be after start date');
        }
      }

      // Max applicants validation
      if (this.formData.maxApplicants && (this.formData.maxApplicants < 1 || this.formData.maxApplicants > 500)) {
        this.formErrors.push('Maximum applicants must be between 1 and 500');
      }

      // Text length validation
      if (this.formData.jobDescription && this.formData.jobDescription.length > 1000) {
        this.formErrors.push('Job description must not exceed 1000 characters');
      }
      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters');
      }
      return this.formErrors.length === 0;
    },
    async saveJobAdvertise() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData
        };
        console.log('📤 Submitting job advertise data:', submitData);

        // Emit save event to parent
        this.$emit('save', submitData);
      } catch (error) {
        console.error('Form submission error:', error);
        this.formErrors.push('An error occurred while saving. Please try again.');
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
    calculateDuration() {
      if (!this.formData.startDate || !this.formData.endDate) return 0;
      const start = new Date(this.formData.startDate);
      const end = new Date(this.formData.endDate);
      const timeDiff = end.getTime() - start.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
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
    getStatusIcon() {
      const icons = {
        active: 'fas fa-play-circle text-success',
        inactive: 'fas fa-pause-circle text-warning',
        closed: 'fas fa-stop-circle text-danger'
      };
      return icons[this.formData.status] || 'fas fa-question-circle';
    },
    getJobSummaryText() {
      const summaries = {
        active: 'ພ້ອມເປີດຮັບສະໝັກ - ຜູ້ສະໝັກສາມາດສະໝັກໄດ້',
        inactive: 'ປິດຊົ່ວຄາວ - ຢຸດຮັບສະໝັກຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ - ບໍ່ຮັບສະໝັກອີກແລ້ວ'
      };
      return summaries[this.formData.status] || 'ສະຖານະບໍ່ຊັດເຈນ';
    }
  }
});
// CONCATENATED MODULE: ./components/jobAdvertise/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var jobAdvertise_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/jobAdvertise/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(647)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  jobAdvertise_maintainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "89608314",
  "377511b0"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=job-advertise-maintain.js.map