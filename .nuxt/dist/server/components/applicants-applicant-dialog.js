exports.ids = [18];
exports.modules = {

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(600);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("703fe354", content, true, context)
};

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_239655dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_239655dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_239655dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_239655dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_239655dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-239655dc]{align-items:center;animation:fadeIn-239655dc .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-239655dc{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-239655dc]{animation:slideIn-239655dc .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:900px;overflow:hidden;width:95%}@keyframes slideIn-239655dc{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-239655dc]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-239655dc]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-239655dc]{font-size:20px;opacity:.9}.modal-title[data-v-239655dc]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-239655dc]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-239655dc]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-239655dc]{max-height:60vh;overflow-y:auto;padding:24px}.form-grid[data-v-239655dc]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-239655dc]{margin-bottom:0}.form-group.full-width[data-v-239655dc]{grid-column:1/-1}.section-header[data-v-239655dc]{border-bottom:2px solid #e9ecef;margin:24px 0 16px;padding-bottom:12px}.section-header h4[data-v-239655dc]{align-items:center;color:#495057;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0}.section-header i[data-v-239655dc]{color:#667eea}.form-label[data-v-239655dc]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-239655dc]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-239655dc]{color:#6b7280;font-size:12px}.form-control[data-v-239655dc]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;transition:all .2s ease;width:100%}.form-control[data-v-239655dc]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-239655dc]{border-color:#e74c3c}.invalid-feedback[data-v-239655dc]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.custom-select-wrapper[data-v-239655dc]{position:relative}.custom-select[data-v-239655dc]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:40px}.select-icon[data-v-239655dc]{color:#6b7280;pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.gender-options[data-v-239655dc]{display:flex;gap:20px;margin-top:8px}.checkbox-option[data-v-239655dc],.radio-option[data-v-239655dc]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px}.checkbox-option input[type=checkbox][data-v-239655dc],.radio-option input[type=radio][data-v-239655dc]{margin:0}.checkbox-label[data-v-239655dc],.radio-label[data-v-239655dc]{font-weight:500}.checkbox-group[data-v-239655dc]{margin-top:8px}.field-hint[data-v-239655dc]{align-items:center;display:flex;font-size:12px;gap:6px;margin-top:6px}.field-hint.error[data-v-239655dc]{color:#e74c3c}.field-hint.warning[data-v-239655dc]{color:#f39c12}.field-hint.info[data-v-239655dc]{color:#3b82f6}.field-hint.success[data-v-239655dc]{color:#28a745}.text-counter[data-v-239655dc]{color:#9ca3af;font-size:11px;margin-left:auto}.eligibility-summary[data-v-239655dc]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;margin-top:16px;padding:20px}.eligibility-summary h5[data-v-239655dc]{align-items:center;color:#1e293b;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px}.eligibility-summary h5 i[data-v-239655dc]{color:#3b82f6}.eligibility-items[data-v-239655dc]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:16px}.eligibility-item[data-v-239655dc]{align-items:center;background:hsla(0,0%,100%,.7);border:1px solid #e2e8f0;border-radius:6px;color:#64748b;display:flex;font-size:13px;gap:8px;padding:8px 12px;transition:all .2s ease}.eligibility-item.valid[data-v-239655dc]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.eligibility-item.valid i[data-v-239655dc]{color:#22c55e}.eligibility-item:not(.valid) i[data-v-239655dc]{color:#ef4444}.eligibility-item.bonus[data-v-239655dc]{background:rgba(251,191,36,.1);border-color:#fbbf24;color:#d97706}.eligibility-item.bonus i[data-v-239655dc]{color:#fbbf24}.eligibility-result[data-v-239655dc]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:8px;color:#dc2626;display:flex;font-size:14px;font-weight:600;gap:8px;justify-content:center;padding:12px 16px;text-align:center}.eligibility-result.eligible[data-v-239655dc]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.eligibility-result i[data-v-239655dc]{font-size:16px}.form-errors[data-v-239655dc]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-239655dc]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-239655dc]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.enhanced-footer[data-v-239655dc]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-239655dc]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-239655dc]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-239655dc]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-239655dc]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-239655dc]{background:#6c757d;color:#fff}.btn[data-v-239655dc]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-239655dc]{animation:spin-239655dc 1s linear infinite}@keyframes spin-239655dc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (max-width:768px){.enhanced-dialog[data-v-239655dc]{margin:10px;width:98%}.form-grid[data-v-239655dc]{grid-template-columns:1fr}.gender-options[data-v-239655dc]{flex-direction:column;gap:12px}.eligibility-items[data-v-239655dc]{grid-template-columns:1fr}.modal-body[data-v-239655dc],.modal-header[data-v-239655dc]{padding:16px}.enhanced-footer[data-v-239655dc]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-239655dc]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=239655dc&scoped=true&
var render = function render() {
  var _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-239655dc>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-239655dc><div class=\"modal-title-section\" data-v-239655dc><i class=\"fas fa-user-plus modal-icon\" data-v-239655dc></i> <h5 class=\"modal-title\" data-v-239655dc>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂຂໍ້ມູນຜູ້ສະໝັກ' : 'ເພີ່ມຜູ້ສະໝັກໃໝ່') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-239655dc><i class=\"fas fa-times\" data-v-239655dc></i></button></div> "), _vm._ssrNode("<form data-v-239655dc>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-239655dc>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-239655dc>", "</div>", [_vm._ssrNode("<div class=\"section-header full-width\" data-v-239655dc><h4 data-v-239655dc><i class=\"fas fa-user\" data-v-239655dc></i>\n              ຂໍ້ມູນສ່ວນຕົວ\n            </h4></div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-user\" data-v-239655dc></i>\n              ຊື່\n            </label> <input type=\"text\" placeholder=\"ຊື່ຕົວຈິງ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.firstName) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.firstName
  }) + " data-v-239655dc> " + (_vm.errors.firstName ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.firstName) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-user\" data-v-239655dc></i>\n              ນາມສະກຸນ\n            </label> <input type=\"text\" placeholder=\"ນາມສະກຸນ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.lastName) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.lastName
  }) + " data-v-239655dc> " + (_vm.errors.lastName ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.lastName) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-venus-mars\" data-v-239655dc></i>\n              ເພດ\n            </label> <div class=\"gender-options\" data-v-239655dc><label class=\"radio-option\" data-v-239655dc><input type=\"radio\" value=\"male\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "male")) + " data-v-239655dc> <span class=\"radio-label\" data-v-239655dc>ຊາຍ</span></label> <label class=\"radio-option\" data-v-239655dc><input type=\"radio\" value=\"female\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "female")) + " data-v-239655dc> <span class=\"radio-label\" data-v-239655dc>ຍິງ</span></label></div> " + (_vm.errors.gender ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.gender) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint info\" data-v-239655dc><i class=\"fas fa-info-circle\" data-v-239655dc></i>\n              ໂຄຕ້າ: ຊາຍ 30 ຄົນ, ຍິງ 70 ຄົນ\n            </div></div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-calendar\" data-v-239655dc></i>\n              ວັນເດືອນປີເກີດ\n            </label> <input type=\"date\"" + _vm._ssrAttr("max", _vm.maxBirthDate) + _vm._ssrAttr("min", _vm.minBirthDate) + " required=\"required\"" + _vm._ssrAttr("value", _vm.formData.dateOfBirth) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.dateOfBirth
  }) + " data-v-239655dc> " + (_vm.errors.dateOfBirth ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.dateOfBirth) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.formData.dateOfBirth ? "<div class=\"field-hint info\" data-v-239655dc><i class=\"fas fa-info-circle\" data-v-239655dc></i>" + _vm._ssrEscape("\n              ອາຍຸ: " + _vm._s(_vm.calculatedAge) + " ປີ\n              " + _vm._s(_vm.calculatedAge >= 18 && _vm.calculatedAge <= 32 ? '✓ ອາຍຸເໝາະສົມ' : '⚠️ ອາຍຸບໍ່ຖືກຕ້ອງ (18-32 ປີ)') + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"section-header full-width\" data-v-239655dc><h4 data-v-239655dc><i class=\"fas fa-address-book\" data-v-239655dc></i>\n              ຂໍ້ມູນການຕິດຕໍ່\n            </h4></div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-phone\" data-v-239655dc></i>\n              ເບີໂທລະສັບ\n            </label> <input type=\"tel\" placeholder=\"+856 20 12345678\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.phone) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.phone
  }) + " data-v-239655dc> " + (_vm.errors.phone ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.phone) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label\" data-v-239655dc><i class=\"fas fa-envelope\" data-v-239655dc></i>\n              ອີເມວ\n            </label> <input type=\"email\" placeholder=\"example@email.com\"" + _vm._ssrAttr("value", _vm.formData.email) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.email
  }) + " data-v-239655dc> " + (_vm.errors.email ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.email) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group full-width\" data-v-239655dc><label class=\"form-label\" data-v-239655dc><i class=\"fas fa-map-marker-alt\" data-v-239655dc></i>\n              ທີ່ຢູ່\n            </label> <textarea rows=\"2\" placeholder=\"ບ້ານ, ເມືອງ, ແຂວງ...\" class=\"form-control\" data-v-239655dc>" + _vm._ssrEscape(_vm._s(_vm.formData.address)) + "</textarea></div> <div class=\"section-header full-width\" data-v-239655dc><h4 data-v-239655dc><i class=\"fas fa-clipboard-check\" data-v-239655dc></i>\n              ເງື່ອນໄຂຄຸນສົມບັດ\n            </h4></div> <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-passport\" data-v-239655dc></i>\n              ມີໜັງສືເດີນທາງ\n            </label> <div class=\"checkbox-group\" data-v-239655dc><label class=\"checkbox-option\" data-v-239655dc><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.hasPassport) ? _vm._i(_vm.formData.hasPassport, null) > -1 : _vm.formData.hasPassport) + " data-v-239655dc> <span class=\"checkbox-label\" data-v-239655dc>ມີໜັງສືເດີນທາງ</span></label></div> <div class=\"field-hint info\" data-v-239655dc><i class=\"fas fa-info-circle\" data-v-239655dc></i>\n              ຈຳເປັນຕ້ອງມີໜັງສືເດີນທາງ\n            </div></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-239655dc>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-heartbeat\" data-v-239655dc></i>\n              ສະຖານະສຸຂະພາບ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-239655dc>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.healthStatus,
      expression: "formData.healthStatus"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.healthStatus
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
        _vm.$set(_vm.formData, "healthStatus", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະຖານະສຸຂະພາບ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "good"
    }
  }, [_vm._v("ດີ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fair"
    }
  }, [_vm._v("ປານກາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "poor"
    }
  }, [_vm._v("ບໍ່ດີ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-239655dc><i class=\"fas fa-chevron-down\" data-v-239655dc></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.healthStatus ? "<div class=\"invalid-feedback\" data-v-239655dc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.healthStatus) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint info\" data-v-239655dc><i class=\"fas fa-info-circle\" data-v-239655dc></i>\n              ສຸຂະພາບແຂງແຮງ ບໍ່ຕຸຍເກີນໄປ\n            </div>")], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-eye\" data-v-239655dc></i>\n              ສາຍຕາ\n            </label> <div class=\"checkbox-group\" data-v-239655dc><label class=\"checkbox-option\" data-v-239655dc><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.eyesightGood) ? _vm._i(_vm.formData.eyesightGood, null) > -1 : _vm.formData.eyesightGood) + " data-v-239655dc> <span class=\"checkbox-label\" data-v-239655dc>ສາຍຕາດີ</span></label></div> <div class=\"field-hint info\" data-v-239655dc><i class=\"fas fa-info-circle\" data-v-239655dc></i>\n              ຈະມີການກວດສາຍຕາກ່ອນ\n            </div></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-239655dc>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-239655dc><i class=\"fas fa-language\" data-v-239655dc></i>\n              ລະດັບພາສາຈີນ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-239655dc>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.chineseLanguageLevel,
      expression: "formData.chineseLanguageLevel"
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
        _vm.$set(_vm.formData, "chineseLanguageLevel", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "none"
    }
  }, [_vm._v("ບໍ່ມີ")]), _vm._v(" "), _c('option', {
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
  }, [_vm._v("ສູງ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-239655dc><i class=\"fas fa-chevron-down\" data-v-239655dc></i></div>")], 2), _vm._ssrNode(" <div class=\"field-hint success\" data-v-239655dc><i class=\"fas fa-star\" data-v-239655dc></i>\n              ຖ້າສາມາດສື່ສານພາສາຈີນໄດ້ພິຈາລະນາພິເສດ\n            </div>")], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-239655dc><label class=\"form-label required\" data-v-239655dc><i class=\"fas fa-paint-brush\" data-v-239655dc></i>\n              ລາຍສັກ\n            </label> <div class=\"checkbox-group\" data-v-239655dc><label class=\"checkbox-option\" data-v-239655dc><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.hasVisibleTattoos) ? _vm._i(_vm.formData.hasVisibleTattoos, null) > -1 : _vm.formData.hasVisibleTattoos) + " data-v-239655dc> <span class=\"checkbox-label\" data-v-239655dc>ມີລາຍສັກນອກເສື້ອຜ້າ</span></label></div> <div class=\"field-hint warning\" data-v-239655dc><i class=\"fas fa-exclamation-triangle\" data-v-239655dc></i>\n              ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ\n            </div></div> <div class=\"form-group full-width\" data-v-239655dc><label class=\"form-label\" data-v-239655dc><i class=\"fas fa-sticky-note\" data-v-239655dc></i>\n              ໝາຍເຫດ\n            </label> <textarea rows=\"3\" placeholder=\"ລາຍລະອຽດເພີ່ມເຕີມ...\" maxlength=\"500\" class=\"form-control\" data-v-239655dc>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> <div class=\"field-hint\" data-v-239655dc><span class=\"text-counter\" data-v-239655dc>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div> <div class=\"form-group full-width\" data-v-239655dc><div class=\"eligibility-summary\" data-v-239655dc><h5 data-v-239655dc><i class=\"fas fa-clipboard-check\" data-v-239655dc></i>\n                ສະຫລຸບຄຸນສົມບັດ\n              </h5> <div class=\"eligibility-items\" data-v-239655dc><div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.isAgeValid
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, _vm.isAgeValid ? 'fas fa-check' : 'fas fa-times') + " data-v-239655dc></i> <span data-v-239655dc>ອາຍຸ 18-32 ປີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.formData.hasPassport
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, _vm.formData.hasPassport ? 'fas fa-check' : 'fas fa-times') + " data-v-239655dc></i> <span data-v-239655dc>ມີໜັງສືເດີນທາງ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.formData.healthStatus === 'good'
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, _vm.formData.healthStatus === 'good' ? 'fas fa-check' : 'fas fa-times') + " data-v-239655dc></i> <span data-v-239655dc>ສຸຂະພາບດີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': _vm.formData.eyesightGood
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, _vm.formData.eyesightGood ? 'fas fa-check' : 'fas fa-times') + " data-v-239655dc></i> <span data-v-239655dc>ສາຍຕາດີ</span></div> <div" + _vm._ssrClass("eligibility-item", {
    'valid': !_vm.formData.hasVisibleTattoos
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, !_vm.formData.hasVisibleTattoos ? 'fas fa-check' : 'fas fa-times') + " data-v-239655dc></i> <span data-v-239655dc>ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ</span></div> " + (_vm.hasChineseLanguageBonus ? "<div class=\"eligibility-item bonus\" data-v-239655dc><i class=\"fas fa-star\" data-v-239655dc></i> <span data-v-239655dc>ໂບນັສພາສາຈີນ</span></div>" : "<!---->") + "</div> <div" + _vm._ssrClass("eligibility-result", {
    'eligible': _vm.isEligible
  }) + " data-v-239655dc><i" + _vm._ssrClass(null, _vm.isEligible ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down') + " data-v-239655dc></i>" + _vm._ssrEscape("\n                " + _vm._s(_vm.isEligible ? 'ມີຄຸນສົມບັດເໝາະສົມ' : 'ຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ') + "\n              ") + "</div></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-239655dc><h6 data-v-239655dc><i class=\"fas fa-exclamation-circle\" data-v-239655dc></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-239655dc>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-239655dc>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-239655dc><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-239655dc><i class=\"fas fa-times\" data-v-239655dc></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-239655dc>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-239655dc></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-239655dc></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'Saving...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div>")], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=239655dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ApplicantDialogvue_type_script_lang_js_ = ({
  name: 'ApplicantDialog',
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
  data() {
    return {
      loading: false,
      formData: {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        address: '',
        hasPassport: false,
        healthStatus: 'good',
        eyesightGood: true,
        chineseLanguageLevel: 'none',
        hasVisibleTattoos: false,
        notes: ''
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.applicant && this.applicant.id;
    },
    user() {
      return this.$auth.user || '';
    },
    // Age validation
    calculatedAge() {
      if (!this.formData.dateOfBirth) return 0;
      const today = new Date();
      const birthDate = new Date(this.formData.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }
      return age;
    },
    isAgeValid() {
      return this.calculatedAge >= 18 && this.calculatedAge <= 32;
    },
    // Date range for age validation
    maxBirthDate() {
      // 18 years ago
      const date = new Date();
      date.setFullYear(date.getFullYear() - 18);
      return date.toISOString().split('T')[0];
    },
    minBirthDate() {
      // 32 years ago
      const date = new Date();
      date.setFullYear(date.getFullYear() - 32);
      return date.toISOString().split('T')[0];
    },
    // Eligibility checks
    hasChineseLanguageBonus() {
      return this.formData.chineseLanguageLevel && !['none', 'basic'].includes(this.formData.chineseLanguageLevel);
    },
    isEligible() {
      return this.isAgeValid && this.formData.hasPassport && this.formData.healthStatus === 'good' && this.formData.eyesightGood && !this.formData.hasVisibleTattoos;
    },
    // Form validation
    isFormValid() {
      return this.formData.firstName.trim() && this.formData.lastName.trim() && this.formData.gender && this.formData.dateOfBirth && this.isAgeValid && this.formData.phone.trim() && this.formData.healthStatus && this.formErrors.length === 0;
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
      if (this.applicant && this.applicant.id) {
        // Edit mode
        this.formData = {
          firstName: this.applicant.firstName || '',
          lastName: this.applicant.lastName || '',
          gender: this.applicant.gender || '',
          dateOfBirth: this.applicant.dateOfBirth ? this.applicant.dateOfBirth.split('T')[0] : '',
          phone: this.applicant.phone || '',
          email: this.applicant.email || '',
          address: this.applicant.address || '',
          hasPassport: this.applicant.hasPassport || false,
          healthStatus: this.applicant.healthStatus || 'good',
          eyesightGood: this.applicant.eyesightGood || false,
          chineseLanguageLevel: this.applicant.chineseLanguageLevel || 'none',
          hasVisibleTattoos: this.applicant.hasVisibleTattoos || false,
          notes: this.applicant.notes || ''
        };
      } else {
        // Create mode - set defaults
        this.formData = {
          firstName: '',
          lastName: '',
          gender: '',
          dateOfBirth: '',
          phone: '',
          email: '',
          address: '',
          hasPassport: false,
          healthStatus: 'good',
          eyesightGood: true,
          chineseLanguageLevel: 'none',
          hasVisibleTattoos: false,
          notes: ''
        };
      }
      this.errors = {};
      this.formErrors = [];
    },
    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        address: '',
        hasPassport: false,
        healthStatus: 'good',
        eyesightGood: true,
        chineseLanguageLevel: 'none',
        hasVisibleTattoos: false,
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
      if (!this.formData.firstName.trim()) {
        this.errors.firstName = 'ກະລຸນາໃສ່ຊື່';
        this.formErrors.push('First name is required');
      }
      if (!this.formData.lastName.trim()) {
        this.errors.lastName = 'ກະລຸນາໃສ່ນາມສະກຸນ';
        this.formErrors.push('Last name is required');
      }
      if (!this.formData.gender) {
        this.errors.gender = 'ກະລຸນາເລືອກເພດ';
        this.formErrors.push('Gender selection is required');
      }
      if (!this.formData.dateOfBirth) {
        this.errors.dateOfBirth = 'ກະລຸນາເລືອກວັນເກີດ';
        this.formErrors.push('Date of birth is required');
      } else if (!this.isAgeValid) {
        this.errors.dateOfBirth = 'ອາຍຸຕ້ອງຢູ່ລະຫວ່າງ 18-32 ປີ';
        this.formErrors.push('Age must be between 18-32 years');
      }
      if (!this.formData.phone.trim()) {
        this.errors.phone = 'ກະລຸນາໃສ່ເບີໂທລະສັບ';
        this.formErrors.push('Phone number is required');
      }
      if (this.formData.email && !this.isValidEmail(this.formData.email)) {
        this.errors.email = 'ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ';
        this.formErrors.push('Invalid email format');
      }
      if (!this.formData.healthStatus) {
        this.errors.healthStatus = 'ກະລຸນາເລືອກສະຖານະສຸຂະພາບ';
        this.formErrors.push('Health status is required');
      }
      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters');
      }
      return this.formErrors.length === 0;
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    async saveApplicant() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData,
          applicationDate: this.isEditMode ? this.applicant.applicationDate : new Date().toISOString().split('T')[0]
        };
        console.log('📤 Submitting applicant data:', submitData);

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
    }
  }
});
// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var applicants_ApplicantDialogvue_type_script_lang_js_ = (ApplicantDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(599)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_ApplicantDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "239655dc",
  "519f9c22"
  
)

/* harmony default export */ var ApplicantDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=applicants-applicant-dialog.js.map