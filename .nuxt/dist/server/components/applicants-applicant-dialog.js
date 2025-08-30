exports.ids = [18];
exports.modules = {

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(615);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("411790b4", content, true, context)
};

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4595bff0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(527);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4595bff0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4595bff0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4595bff0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4595bff0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-4595bff0]{align-items:center;animation:fadeIn-4595bff0 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-4595bff0{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-4595bff0]{animation:slideIn-4595bff0 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:900px;overflow:hidden;width:95%}@keyframes slideIn-4595bff0{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-4595bff0]{align-items:center;background:linear-gradient(135deg,#01532b,#337555);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-4595bff0]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-4595bff0]{font-size:20px;opacity:.9}.modal-title[data-v-4595bff0]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-4595bff0]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-4595bff0]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-4595bff0]{max-height:60vh;overflow-y:auto;padding:24px}.form-grid[data-v-4595bff0]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-4595bff0]{margin-bottom:0}.form-group.full-width[data-v-4595bff0]{grid-column:1/-1}.section-header[data-v-4595bff0]{border-bottom:2px solid #e9ecef;margin:24px 0 16px;padding-bottom:12px}.section-header h4[data-v-4595bff0]{align-items:center;color:#495057;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0}.section-header i[data-v-4595bff0]{color:#667eea}.form-label[data-v-4595bff0]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-4595bff0]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-4595bff0]{color:#6b7280;font-size:12px}.form-control[data-v-4595bff0]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;transition:all .2s ease;width:100%}.form-control[data-v-4595bff0]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-4595bff0]{border-color:#e74c3c}.form-control[data-v-4595bff0]:disabled{background:#f8f9fa;color:#6c757d;opacity:.7}.invalid-feedback[data-v-4595bff0]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.custom-select-wrapper[data-v-4595bff0]{position:relative}.custom-select[data-v-4595bff0]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:40px}.select-icon[data-v-4595bff0]{color:#6b7280;pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.gender-options[data-v-4595bff0]{display:flex;gap:20px;margin-top:8px}.checkbox-option[data-v-4595bff0],.radio-option[data-v-4595bff0]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px}.checkbox-option input[type=checkbox][data-v-4595bff0],.radio-option input[type=radio][data-v-4595bff0]{margin:0}.checkbox-label[data-v-4595bff0],.radio-label[data-v-4595bff0]{font-weight:500}.checkbox-group[data-v-4595bff0]{margin-top:8px}.field-hint[data-v-4595bff0]{align-items:center;display:flex;font-size:12px;gap:6px;margin-top:6px}.field-hint.error[data-v-4595bff0]{color:#e74c3c}.field-hint.warning[data-v-4595bff0]{color:#f39c12}.field-hint.info[data-v-4595bff0]{color:#3b82f6}.field-hint.success[data-v-4595bff0]{color:#28a745}.application-summary[data-v-4595bff0]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;margin-top:16px;padding:20px}.application-summary h5[data-v-4595bff0]{align-items:center;color:#1e293b;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px}.application-summary h5 i[data-v-4595bff0]{color:#3b82f6}.summary-items[data-v-4595bff0]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:16px}.summary-item[data-v-4595bff0]{align-items:center;background:hsla(0,0%,100%,.7);border:1px solid #e2e8f0;border-radius:6px;color:#64748b;display:flex;font-size:13px;gap:8px;padding:8px 12px;transition:all .2s ease}.summary-item.complete[data-v-4595bff0]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.summary-item.complete i[data-v-4595bff0]{color:#22c55e}.summary-item:not(.complete) i[data-v-4595bff0]{color:#ef4444}.summary-item.bonus[data-v-4595bff0]{background:rgba(251,191,36,.1);border-color:#fbbf24;color:#d97706}.summary-item.bonus i[data-v-4595bff0]{color:#fbbf24}.summary-result[data-v-4595bff0]{align-items:center;background:rgba(239,68,68,.1);border:2px solid #ef4444;border-radius:8px;color:#dc2626;display:flex;font-size:14px;font-weight:600;gap:8px;justify-content:center;padding:12px 16px;text-align:center}.summary-result.ready[data-v-4595bff0]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.summary-result i[data-v-4595bff0]{font-size:16px}.form-errors[data-v-4595bff0]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-4595bff0]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-4595bff0]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.enhanced-footer[data-v-4595bff0]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-4595bff0]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-4595bff0]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-4595bff0]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-4595bff0]{background:linear-gradient(135deg,#01532b,#337555);color:#fff}.btn-secondary[data-v-4595bff0]{background:#6c757d;color:#fff}.btn[data-v-4595bff0]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-4595bff0]{animation:spin-4595bff0 1s linear infinite}@keyframes spin-4595bff0{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (max-width:768px){.enhanced-dialog[data-v-4595bff0]{margin:10px;width:98%}.form-grid[data-v-4595bff0]{grid-template-columns:1fr}.gender-options[data-v-4595bff0]{flex-direction:column;gap:12px}.summary-items[data-v-4595bff0]{grid-template-columns:1fr}.modal-body[data-v-4595bff0],.modal-header[data-v-4595bff0]{padding:16px}.enhanced-footer[data-v-4595bff0]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-4595bff0]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=4595bff0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-4595bff0>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-4595bff0><div class=\"modal-title-section\" data-v-4595bff0><i class=\"fas fa-user-plus modal-icon\" data-v-4595bff0></i> <h5 class=\"modal-title\" data-v-4595bff0>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂຂໍ້ມູນຜູ້ສະໝັກ' : 'ເພີ່ມຜູ້ສະໝັກໃໝ່') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-4595bff0><i class=\"fas fa-times\" data-v-4595bff0></i></button></div> "), _vm._ssrNode("<form data-v-4595bff0>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-4595bff0>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-4595bff0>", "</div>", [_vm._ssrNode("<div class=\"section-header full-width\" data-v-4595bff0><h4 data-v-4595bff0><i class=\"fas fa-user\" data-v-4595bff0></i>\n              ຂໍ້ມູນສ່ວນຕົວ\n            </h4></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label required\" data-v-4595bff0><i class=\"fas fa-user\" data-v-4595bff0></i>\n              ຊື່\n            </label> <input type=\"text\" placeholder=\"ຊື່ຕົວຈິງ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.firstName) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.firstName
  }) + " data-v-4595bff0> " + (_vm.errors.firstName ? "<div class=\"invalid-feedback\" data-v-4595bff0>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.firstName) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label required\" data-v-4595bff0><i class=\"fas fa-user\" data-v-4595bff0></i>\n              ນາມສະກຸນ\n            </label> <input type=\"text\" placeholder=\"ນາມສະກຸນ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.lastName) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.lastName
  }) + " data-v-4595bff0> " + (_vm.errors.lastName ? "<div class=\"invalid-feedback\" data-v-4595bff0>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.lastName) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label required\" data-v-4595bff0><i class=\"fas fa-venus-mars\" data-v-4595bff0></i>\n              ເພດ\n            </label> <div class=\"gender-options\" data-v-4595bff0><label class=\"radio-option\" data-v-4595bff0><input type=\"radio\" value=\"male\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "male")) + " data-v-4595bff0> <span class=\"radio-label\" data-v-4595bff0>ຊາຍ</span></label> <label class=\"radio-option\" data-v-4595bff0><input type=\"radio\" value=\"female\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "female")) + " data-v-4595bff0> <span class=\"radio-label\" data-v-4595bff0>ຍິງ</span></label></div> " + (_vm.errors.gender ? "<div class=\"invalid-feedback\" data-v-4595bff0>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.gender) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-calendar\" data-v-4595bff0></i>\n              ອາຍຸ\n            </label> <input type=\"number\" min=\"18\" max=\"32\" placeholder=\"ອາຍຸ\"" + _vm._ssrAttr("value", _vm.formData.age) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.age
  }) + " data-v-4595bff0> " + (_vm.errors.age ? "<div class=\"invalid-feedback\" data-v-4595bff0>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.age) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint info\" data-v-4595bff0><i class=\"fas fa-info-circle\" data-v-4595bff0></i>\n              ອາຍຸທີ່ເໝາະສົມ: 18-32 ປີ\n            </div></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-4595bff0>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-heart\" data-v-4595bff0></i>\n              ສະຖານະການແຕ່ງງານ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-4595bff0>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.maritalStatus,
      expression: "formData.maritalStatus"
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
        _vm.$set(_vm.formData, "maritalStatus", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະຖານະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "single"
    }
  }, [_vm._v("ໂສດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "married"
    }
  }, [_vm._v("ແຕ່ງງານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "divorced"
    }
  }, [_vm._v("ຢ່າຮ້າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "widowed"
    }
  }, [_vm._v("ເປັນເມ່າຍ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-4595bff0><i class=\"fas fa-chevron-down\" data-v-4595bff0></i></div>")], 2)], 2), _vm._ssrNode(" <div class=\"section-header full-width\" data-v-4595bff0><h4 data-v-4595bff0><i class=\"fas fa-address-book\" data-v-4595bff0></i>\n              ຂໍ້ມູນການຕິດຕໍ່\n            </h4></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label required\" data-v-4595bff0><i class=\"fas fa-phone\" data-v-4595bff0></i>\n              ເບີໂທລະສັບ\n            </label> <input type=\"tel\" placeholder=\"+856 20 12345678\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.phone) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.phone
  }) + " data-v-4595bff0> " + (_vm.errors.phone ? "<div class=\"invalid-feedback\" data-v-4595bff0>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.phone) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-exclamation-triangle\" data-v-4595bff0></i>\n              ເບີໂທສຸກເສີນ\n            </label> <input type=\"tel\" placeholder=\"+856 20 87654321\"" + _vm._ssrAttr("value", _vm.formData.emergencyContactNo) + " class=\"form-control\" data-v-4595bff0> <div class=\"field-hint info\" data-v-4595bff0><i class=\"fas fa-info-circle\" data-v-4595bff0></i>\n              ເບີໂທຄອບຄົວ ຫຼື ຄົນໃກ້ຊິດ\n            </div></div> <div class=\"section-header full-width\" data-v-4595bff0><h4 data-v-4595bff0><i class=\"fas fa-map-marker-alt\" data-v-4595bff0></i>\n              ຂໍ້ມູນທີ່ຢູ່\n            </h4></div> <div class=\"form-group full-width\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-home\" data-v-4595bff0></i>\n              ທີ່ຢູ່ລະອຽດ\n            </label> <textarea rows=\"2\" placeholder=\"ທີ່ຢູ່ລະອຽດ...\" class=\"form-control\" data-v-4595bff0>" + _vm._ssrEscape(_vm._s(_vm.formData.address)) + "</textarea></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-home\" data-v-4595bff0></i>\n              ບ້ານ\n            </label> <input type=\"text\" placeholder=\"ຊື່ບ້ານ\"" + _vm._ssrAttr("value", _vm.formData.village) + " class=\"form-control\" data-v-4595bff0></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-city\" data-v-4595bff0></i>\n              ເມືອງ\n            </label> <input type=\"text\" placeholder=\"ຊື່ເມືອງ\"" + _vm._ssrAttr("value", _vm.formData.city) + " class=\"form-control\" data-v-4595bff0></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-map\" data-v-4595bff0></i>\n              ແຂວງ\n            </label> <input type=\"text\" placeholder=\"ຊື່ແຂວງ\"" + _vm._ssrAttr("value", _vm.formData.district) + " class=\"form-control\" data-v-4595bff0></div> <div class=\"section-header full-width\" data-v-4595bff0><h4 data-v-4595bff0><i class=\"fas fa-passport\" data-v-4595bff0></i>\n              ຂໍ້ມູນໜັງສືເດີນທາງ\n            </h4></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label required\" data-v-4595bff0><i class=\"fas fa-passport\" data-v-4595bff0></i>\n              ມີໜັງສືເດີນທາງ\n            </label> <div class=\"checkbox-group\" data-v-4595bff0><label class=\"checkbox-option\" data-v-4595bff0><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.passportAvailability) ? _vm._i(_vm.formData.passportAvailability, null) > -1 : _vm.formData.passportAvailability) + " data-v-4595bff0> <span class=\"checkbox-label\" data-v-4595bff0>ມີໜັງສືເດີນທາງ</span></label></div> <div class=\"field-hint info\" data-v-4595bff0><i class=\"fas fa-info-circle\" data-v-4595bff0></i>\n              ຈຳເປັນຕ້ອງມີໜັງສືເດີນທາງ\n            </div></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-id-card\" data-v-4595bff0></i>\n              ເລກໜັງສືເດີນທາງ\n            </label> <input type=\"text\"" + _vm._ssrAttr("disabled", !_vm.formData.passportAvailability) + " placeholder=\"PA1234567\"" + _vm._ssrAttr("value", _vm.formData.passportNo) + " class=\"form-control\" data-v-4595bff0> <div class=\"field-hint info\" data-v-4595bff0><i class=\"fas fa-info-circle\" data-v-4595bff0></i>\n              ໃສ່ຖ້າມີໜັງສືເດີນທາງ\n            </div></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-calendar-times\" data-v-4595bff0></i>\n              ວັນໝົດອາຍຸໜັງສືເດີນທາງ\n            </label> <input type=\"date\"" + _vm._ssrAttr("disabled", !_vm.formData.passportAvailability) + _vm._ssrAttr("min", _vm.today) + _vm._ssrAttr("value", _vm.formData.passportExpiredDate) + " class=\"form-control\" data-v-4595bff0> " + (_vm.formData.passportExpiredDate ? "<div" + _vm._ssrClass("field-hint", _vm.isPassportExpired ? 'error' : 'success') + " data-v-4595bff0><i" + _vm._ssrClass(null, _vm.isPassportExpired ? 'fas fa-exclamation-triangle' : 'fas fa-check-circle') + " data-v-4595bff0></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.isPassportExpired ? 'ໜັງສືເດີນທາງໝົດອາຍຸແລ້ວ!' : 'ໜັງສືເດີນທາງຍັງໃຊ້ໄດ້') + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"section-header full-width\" data-v-4595bff0><h4 data-v-4595bff0><i class=\"fas fa-briefcase\" data-v-4595bff0></i>\n              ຂໍ້ມູນການເຮັດວຽກ\n            </h4></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-building\" data-v-4595bff0></i>\n              ສະຖານທີ່ເຮັດວຽກ\n            </label> <input type=\"text\" placeholder=\"ບໍລິສັດ / ໂຮງງານ\"" + _vm._ssrAttr("value", _vm.formData.workPlace) + " class=\"form-control\" data-v-4595bff0></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-calendar-plus\" data-v-4595bff0></i>\n              ວັນເລີ່ມສັນຍາ\n            </label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.formData.contactStartDate) + " class=\"form-control\" data-v-4595bff0></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-calendar-minus\" data-v-4595bff0></i>\n              ວັນສິ້ນສຸດສັນຍາ\n            </label> <input type=\"date\"" + _vm._ssrAttr("min", _vm.formData.contactStartDate) + _vm._ssrAttr("value", _vm.formData.contactEndDate) + " class=\"form-control\" data-v-4595bff0> " + (_vm.contractDuration ? "<div class=\"field-hint info\" data-v-4595bff0><i class=\"fas fa-info-circle\" data-v-4595bff0></i>" + _vm._ssrEscape("\n              ໄລຍະສັນຍາ: " + _vm._s(_vm.contractDuration) + " ເດືອນ\n            ") + "</div>" : "<!---->") + "</div> <div class=\"section-header full-width\" data-v-4595bff0><h4 data-v-4595bff0><i class=\"fas fa-calendar-check\" data-v-4595bff0></i>\n              ວັນທີສຳຄັນ\n            </h4></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-calendar-plus\" data-v-4595bff0></i>\n              ວັນທີລົງທະບຽນ\n            </label> <input type=\"datetime-local\"" + _vm._ssrAttr("value", _vm.formData.registertDate) + " class=\"form-control\" data-v-4595bff0></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-comments\" data-v-4595bff0></i>\n              ວັນທີສໍາພາດ\n            </label> <input type=\"datetime-local\"" + _vm._ssrAttr("value", _vm.formData.interviewExamDate) + " class=\"form-control\" data-v-4595bff0></div> <div class=\"section-header full-width\" data-v-4595bff0><h4 data-v-4595bff0><i class=\"fas fa-camera\" data-v-4595bff0></i>\n              ຮູບຖ່າຍ\n            </h4></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-id-badge\" data-v-4595bff0></i>\n              ຮູບໜັງສືເດີນທາງ\n            </label> <input type=\"text\" placeholder=\"URL ຫຼື path ຂອງຮູບໜັງສືເດີນທາງ\"" + _vm._ssrAttr("value", _vm.formData.passportPhoto) + " class=\"form-control\" data-v-4595bff0> <div class=\"field-hint info\" data-v-4595bff0><i class=\"fas fa-info-circle\" data-v-4595bff0></i>\n              ຮູບຖ່າຍຂະໜາດ passport\n            </div></div> <div class=\"form-group\" data-v-4595bff0><label class=\"form-label\" data-v-4595bff0><i class=\"fas fa-user-circle\" data-v-4595bff0></i>\n              ຮູບຜູ້ສະໝັກ\n            </label> <input type=\"text\" placeholder=\"URL ຫຼື path ຂອງຮູບຜູ້ສະໝັກ\"" + _vm._ssrAttr("value", _vm.formData.applicantPhoto) + " class=\"form-control\" data-v-4595bff0> <div class=\"field-hint info\" data-v-4595bff0><i class=\"fas fa-info-circle\" data-v-4595bff0></i>\n              ຮູບຖ່າຍຕົວຈິງຂອງຜູ້ສະໝັກ\n            </div></div> <div class=\"form-group full-width\" data-v-4595bff0><div class=\"application-summary\" data-v-4595bff0><h5 data-v-4595bff0><i class=\"fas fa-clipboard-check\" data-v-4595bff0></i>\n                ສະຫລຸບຂໍ້ມູນ\n              </h5> <div class=\"summary-items\" data-v-4595bff0><div" + _vm._ssrClass("summary-item", {
    'complete': _vm.formData.firstName && _vm.formData.lastName
  }) + " data-v-4595bff0><i" + _vm._ssrClass(null, _vm.formData.firstName && _vm.formData.lastName ? 'fas fa-check' : 'fas fa-times') + " data-v-4595bff0></i> <span data-v-4595bff0>ຊື່ ແລະ ນາມສະກຸນ</span></div> <div" + _vm._ssrClass("summary-item", {
    'complete': _vm.formData.gender
  }) + " data-v-4595bff0><i" + _vm._ssrClass(null, _vm.formData.gender ? 'fas fa-check' : 'fas fa-times') + " data-v-4595bff0></i> <span data-v-4595bff0>ເພດ</span></div> <div" + _vm._ssrClass("summary-item", {
    'complete': _vm.formData.phone
  }) + " data-v-4595bff0><i" + _vm._ssrClass(null, _vm.formData.phone ? 'fas fa-check' : 'fas fa-times') + " data-v-4595bff0></i> <span data-v-4595bff0>ເບີໂທລະສັບ</span></div> <div" + _vm._ssrClass("summary-item", {
    'complete': _vm.formData.passportAvailability
  }) + " data-v-4595bff0><i" + _vm._ssrClass(null, _vm.formData.passportAvailability ? 'fas fa-check' : 'fas fa-times') + " data-v-4595bff0></i> <span data-v-4595bff0>ໜັງສືເດີນທາງ</span></div> " + (_vm.formData.passportAvailability && _vm.formData.passportNo ? "<div class=\"summary-item bonus\" data-v-4595bff0><i class=\"fas fa-star\" data-v-4595bff0></i> <span data-v-4595bff0>ລະບຸເລກໜັງສືເດີນທາງ</span></div>" : "<!---->") + " " + (_vm.formData.workPlace ? "<div class=\"summary-item bonus\" data-v-4595bff0><i class=\"fas fa-briefcase\" data-v-4595bff0></i> <span data-v-4595bff0>ມີສະຖານທີ່ເຮັດວຽກ</span></div>" : "<!---->") + "</div> <div" + _vm._ssrClass("summary-result", {
    'ready': _vm.isFormValid
  }) + " data-v-4595bff0><i" + _vm._ssrClass(null, _vm.isFormValid ? 'fas fa-thumbs-up' : 'fas fa-exclamation-triangle') + " data-v-4595bff0></i>" + _vm._ssrEscape("\n                " + _vm._s(_vm.isFormValid ? 'ຂໍ້ມູນພ້ອມສຳລັບບັນທຶກ' : 'ກະລຸນາຕື່ມຂໍ້ມູນຂ້ັນຕຳ') + "\n              ") + "</div></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-4595bff0><h6 data-v-4595bff0><i class=\"fas fa-exclamation-circle\" data-v-4595bff0></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-4595bff0>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-4595bff0>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-4595bff0><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-4595bff0><i class=\"fas fa-times\" data-v-4595bff0></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-4595bff0>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-4595bff0></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-4595bff0></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div>")], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=4595bff0&scoped=true&

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
        age: null,
        maritalStatus: '',
        phone: '',
        emergencyContactNo: '',
        address: '',
        village: '',
        city: '',
        district: '',
        passportAvailability: false,
        passportNo: '',
        passportExpiredDate: '',
        workPlace: '',
        contactStartDate: '',
        contactEndDate: '',
        registertDate: '',
        interviewExamDate: '',
        passportPhoto: '',
        applicantPhoto: ''
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
    today() {
      return new Date().toISOString().split('T')[0];
    },
    // Passport expiry validation
    isPassportExpired() {
      if (!this.formData.passportExpiredDate) return false;
      const today = new Date();
      const expiryDate = new Date(this.formData.passportExpiredDate);
      return expiryDate <= today;
    },
    // Contract duration calculation
    contractDuration() {
      if (!this.formData.contactStartDate || !this.formData.contactEndDate) return null;
      const startDate = new Date(this.formData.contactStartDate);
      const endDate = new Date(this.formData.contactEndDate);
      const diffTime = Math.abs(endDate - startDate);
      const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
      return diffMonths;
    },
    // Form validation
    isFormValid() {
      return this.formData.firstName.trim() && this.formData.lastName.trim() && this.formData.gender && this.formData.phone.trim() && this.formErrors.length === 0;
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
    },
    // Auto-clear passport fields when availability is false
    'formData.passportAvailability'(newVal) {
      if (!newVal) {
        this.formData.passportNo = '';
        this.formData.passportExpiredDate = '';
        this.formData.passportPhoto = '';
      }
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
          age: this.applicant.age || null,
          maritalStatus: this.applicant.maritalStatus || '',
          phone: this.applicant.phone || '',
          emergencyContactNo: this.applicant.emergencyContactNo || '',
          address: this.applicant.address || '',
          village: this.applicant.village || '',
          city: this.applicant.city || '',
          district: this.applicant.district || '',
          passportAvailability: this.applicant.passportAvailability || false,
          passportNo: this.applicant.passportNo || '',
          passportExpiredDate: this.applicant.passportExpiredDate ? this.applicant.passportExpiredDate.split('T')[0] : '',
          workPlace: this.applicant.workPlace || '',
          contactStartDate: this.applicant.contactStartDate ? this.applicant.contactStartDate.split('T')[0] : '',
          contactEndDate: this.applicant.contactEndDate ? this.applicant.contactEndDate.split('T')[0] : '',
          registertDate: this.applicant.registertDate ? this.applicant.registertDate.slice(0, 16) : '',
          interviewExamDate: this.applicant.interviewExamDate ? this.applicant.interviewExamDate.slice(0, 16) : '',
          passportPhoto: this.applicant.passportPhoto || '',
          applicantPhoto: this.applicant.applicantPhoto || ''
        };
      } else {
        // Create mode - set defaults
        this.resetFormData();
      }
      this.errors = {};
      this.formErrors = [];
    },
    resetFormData() {
      this.formData = {
        firstName: '',
        lastName: '',
        gender: '',
        age: null,
        maritalStatus: '',
        phone: '',
        emergencyContactNo: '',
        address: '',
        village: '',
        city: '',
        district: '',
        passportAvailability: false,
        passportNo: '',
        passportExpiredDate: '',
        workPlace: '',
        contactStartDate: '',
        contactEndDate: '',
        registertDate: '',
        interviewExamDate: '',
        passportPhoto: '',
        applicantPhoto: ''
      };
    },
    resetForm() {
      this.resetFormData();
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
      if (!this.formData.phone.trim()) {
        this.errors.phone = 'ກະລຸນາໃສ່ເບີໂທລະສັບ';
        this.formErrors.push('Phone number is required');
      }

      // Age validation
      if (this.formData.age && (this.formData.age < 18 || this.formData.age > 32)) {
        this.errors.age = 'ອາຍຸຕ້ອງຢູ່ລະຫວ່າງ 18-32 ປີ';
        this.formErrors.push('Age must be between 18-32 years');
      }

      // Contract date validation
      if (this.formData.contactStartDate && this.formData.contactEndDate) {
        const startDate = new Date(this.formData.contactStartDate);
        const endDate = new Date(this.formData.contactEndDate);
        if (endDate <= startDate) {
          this.formErrors.push('Contract end date must be after start date');
        }
      }

      // Passport validation
      if (this.formData.passportAvailability && this.formData.passportExpiredDate) {
        if (this.isPassportExpired) {
          this.formErrors.push('Passport is expired');
        }
      }
      return this.formErrors.length === 0;
    },
    async saveApplicant() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        // Prepare data for submission - clean up empty strings and nulls
        const submitData = Object.keys(this.formData).reduce((acc, key) => {
          const value = this.formData[key];
          if (value !== '' && value !== null) {
            acc[key] = value;
          }
          return acc;
        }, {});
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
  
  var style0 = __webpack_require__(614)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_ApplicantDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4595bff0",
  "519f9c22"
  
)

/* harmony default export */ var ApplicantDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=applicants-applicant-dialog.js.map