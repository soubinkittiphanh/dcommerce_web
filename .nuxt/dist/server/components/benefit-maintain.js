exports.ids = [24];
exports.modules = {

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(628);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("70c4c236", content, true, context)
};

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_207cf086_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(534);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_207cf086_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_207cf086_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_207cf086_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_207cf086_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-207cf086]{align-items:center;animation:fadeIn-207cf086 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-207cf086{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-207cf086]{animation:slideIn-207cf086 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:900px;overflow:hidden;width:95%}@keyframes slideIn-207cf086{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-207cf086]{align-items:center;background:linear-gradient(135deg,#8b5cf6,#a855f7);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-207cf086]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-207cf086]{font-size:20px;opacity:.9}.modal-title[data-v-207cf086]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-207cf086]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-207cf086]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-207cf086]{max-height:60vh;overflow-y:auto;padding:24px}.form-grid[data-v-207cf086]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-207cf086]{margin-bottom:0}.form-group.full-width[data-v-207cf086]{grid-column:1/-1}.section-header[data-v-207cf086]{border-bottom:2px solid #e9ecef;margin:24px 0 16px;padding-bottom:12px}.section-header h4[data-v-207cf086]{align-items:center;color:#495057;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0}.section-header i[data-v-207cf086]{color:#8b5cf6}.form-label[data-v-207cf086]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-207cf086]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-207cf086]{color:#6b7280;font-size:12px}.form-control[data-v-207cf086]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;transition:all .2s ease;width:100%}.form-control[data-v-207cf086]:focus{background:#fff;border-color:#8b5cf6;box-shadow:0 0 0 3px rgba(139,92,246,.1);outline:none}.form-control.is-invalid[data-v-207cf086]{border-color:#e74c3c}.invalid-feedback[data-v-207cf086]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.custom-select-wrapper[data-v-207cf086]{position:relative}.custom-select[data-v-207cf086]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:40px}.select-icon[data-v-207cf086]{color:#6b7280;pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.checkbox-group[data-v-207cf086]{margin-top:8px}.checkbox-option[data-v-207cf086]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px}.checkbox-option input[type=checkbox][data-v-207cf086]{height:18px;margin:0;width:18px}.checkbox-label[data-v-207cf086]{font-weight:500}.field-hint[data-v-207cf086]{align-items:center;display:flex;font-size:12px;gap:6px;margin-top:6px}.field-hint.error[data-v-207cf086]{color:#e74c3c}.field-hint.warning[data-v-207cf086]{color:#f39c12}.field-hint.info[data-v-207cf086]{color:#3b82f6}.field-hint.success[data-v-207cf086]{color:#28a745}.text-counter[data-v-207cf086]{color:#9ca3af;font-size:11px;margin-left:auto}.benefit-preview[data-v-207cf086]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;margin-top:16px;padding:20px}.benefit-preview h5[data-v-207cf086]{align-items:center;color:#1e293b;display:flex;font-size:16px;font-weight:600;gap:8px;margin:0 0 16px}.benefit-preview h5 i[data-v-207cf086]{color:#3b82f6}.preview-card[data-v-207cf086]{background:#fff;border:1px solid #e2e8f0;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);padding:16px}.preview-header[data-v-207cf086]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:12px}.preview-name[data-v-207cf086]{align-items:center;color:#374151;display:flex;font-size:16px;gap:8px}.preview-name strong[data-v-207cf086]{color:#111827}.preview-content[data-v-207cf086]{display:flex;flex-direction:column;gap:8px}.preview-description[data-v-207cf086],.preview-job[data-v-207cf086],.preview-type[data-v-207cf086],.preview-value[data-v-207cf086]{align-items:center;color:#6b7280;display:flex;font-size:14px;gap:8px}.preview-value .value-amount[data-v-207cf086]{color:#059669;font-weight:600}.type-badge[data-v-207cf086]{align-items:center;border-radius:12px;display:inline-flex;font-size:12px;font-weight:600;gap:4px;padding:4px 12px}.type-badge.salary[data-v-207cf086]{background-color:#dcfce7;color:#16a34a}.type-badge.allowance[data-v-207cf086]{background-color:#dbeafe;color:#2563eb}.type-badge.insurance[data-v-207cf086]{background-color:#f3e8ff;color:#9333ea}.type-badge.accommodation[data-v-207cf086]{background-color:#fef3c7;color:#d97706}.type-badge.transportation[data-v-207cf086]{background-color:#e0f2fe;color:#0891b2}.type-badge.other[data-v-207cf086]{background-color:#f1f5f9;color:#64748b}.status-badge[data-v-207cf086]{align-items:center;border-radius:12px;display:inline-flex;font-size:12px;font-weight:600;gap:4px;padding:4px 12px}.status-badge.active[data-v-207cf086]{background-color:#d1fae5;color:#065f46}.status-badge.inactive[data-v-207cf086]{background-color:#fee2e2;color:#dc2626}.form-errors[data-v-207cf086]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-207cf086]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-207cf086]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.enhanced-footer[data-v-207cf086]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-207cf086]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-207cf086]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-207cf086]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-207cf086]{background:linear-gradient(135deg,#8b5cf6,#a855f7);color:#fff}.btn-secondary[data-v-207cf086]{background:#6c757d;color:#fff}.btn[data-v-207cf086]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-207cf086]{animation:spin-207cf086 1s linear infinite}@keyframes spin-207cf086{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (max-width:768px){.enhanced-dialog[data-v-207cf086]{margin:10px;width:98%}.form-grid[data-v-207cf086]{grid-template-columns:1fr}.preview-header[data-v-207cf086]{align-items:flex-start;flex-direction:column;gap:12px}.modal-body[data-v-207cf086],.modal-header[data-v-207cf086]{padding:16px}.enhanced-footer[data-v-207cf086]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-207cf086]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/benefit/maintain/index.vue?vue&type=template&id=207cf086&scoped=true&
var render = function render() {
  var _vm$formData$descript, _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-207cf086>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-207cf086><div class=\"modal-title-section\" data-v-207cf086><i class=\"fas fa-gift modal-icon\" data-v-207cf086></i> <h5 class=\"modal-title\" data-v-207cf086>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂສະຫວັດດີການ' : 'ເພີ່ມສະຫວັດດີການໃໝ່') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-207cf086><i class=\"fas fa-times\" data-v-207cf086></i></button></div> "), _vm._ssrNode("<form data-v-207cf086>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-207cf086>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-207cf086>", "</div>", [_vm._ssrNode("<div class=\"section-header full-width\" data-v-207cf086><h4 data-v-207cf086><i class=\"fas fa-info-circle\" data-v-207cf086></i>\n              ຂໍ້ມູນພື້ນຖານ\n            </h4></div> <div class=\"form-group full-width\" data-v-207cf086><label class=\"form-label required\" data-v-207cf086><i class=\"fas fa-tag\" data-v-207cf086></i>\n              ຊື່ສະຫວັດດີການ\n            </label> <input type=\"text\" placeholder=\"ເຊັ່ນ: ເງິນເດືອນພື້ນຖານ, ເງິນເດີນທາງ, ປະກັນສຸຂະພາບ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.name) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.name
  }) + " data-v-207cf086> " + (_vm.errors.name ? "<div class=\"invalid-feedback\" data-v-207cf086>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.name) + "\n            ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-207cf086>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-207cf086><i class=\"fas fa-layer-group\" data-v-207cf086></i>\n              ປະເພດສະຫວັດດີການ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-207cf086>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.type,
      expression: "formData.type"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.type
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
        _vm.$set(_vm.formData, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກປະເພດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "salary"
    }
  }, [_vm._v("ເງິນເດືອນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "allowance"
    }
  }, [_vm._v("ເງິນອຸດໜູນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "insurance"
    }
  }, [_vm._v("ປະກັນໄພ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "accommodation"
    }
  }, [_vm._v("ທີ່ພັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "transportation"
    }
  }, [_vm._v("ການເດີນທາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "other"
    }
  }, [_vm._v("ອື່ນໆ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-207cf086><i class=\"fas fa-chevron-down\" data-v-207cf086></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.type ? "<div class=\"invalid-feedback\" data-v-207cf086>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.type) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint info\" data-v-207cf086><i class=\"fas fa-info-circle\" data-v-207cf086></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.getTypeDescription(_vm.formData.type)) + "\n            ") + "</div>")], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-207cf086><label class=\"form-label required\" data-v-207cf086><i class=\"fas fa-toggle-on\" data-v-207cf086></i>\n              ສະຖານະ\n            </label> <div class=\"checkbox-group\" data-v-207cf086><label class=\"checkbox-option\" data-v-207cf086><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.isActive) ? _vm._i(_vm.formData.isActive, null) > -1 : _vm.formData.isActive) + " data-v-207cf086> <span class=\"checkbox-label\" data-v-207cf086>ເປີດໃຊ້ງານ</span></label></div> <div" + _vm._ssrClass("field-hint", _vm.formData.isActive ? 'success' : 'warning') + " data-v-207cf086><i" + _vm._ssrClass(null, _vm.formData.isActive ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle') + " data-v-207cf086></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formData.isActive ? 'ສະຫວັດດີການນີ້ສາມາດໃຊ້ໄດ້' : 'ສະຫວັດດີການນີ້ຖືກປິດໃຊ້ງານ') + "\n            ") + "</div></div> <div class=\"section-header full-width\" data-v-207cf086><h4 data-v-207cf086><i class=\"fas fa-coins\" data-v-207cf086></i>\n              ຂໍ້ມູນການເງິນ\n            </h4></div> <div class=\"form-group\" data-v-207cf086><label class=\"form-label\" data-v-207cf086><i class=\"fas fa-money-bill-wave\" data-v-207cf086></i>\n              ມູນຄ່າ/ຈຳນວນເງິນ\n            </label> <input type=\"number\" step=\"0.01\" min=\"0\" max=\"999999999.99\" placeholder=\"0.00\"" + _vm._ssrAttr("value", _vm.formData.value) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.value
  }) + " data-v-207cf086> " + (_vm.errors.value ? "<div class=\"invalid-feedback\" data-v-207cf086>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.value) + "\n            ") + "</div>" : "<!---->") + " <div class=\"field-hint info\" data-v-207cf086><i class=\"fas fa-info-circle\" data-v-207cf086></i>\n              ໃສ່ຈຳນວນເງິນ ຫຼື ບໍ່ໃສ່ກໍໄດ້ຖ້າບໍ່ມີມູນຄ່າທີ່ແນ່ນອນ\n            </div></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-207cf086>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-207cf086><i class=\"fas fa-dollar-sign\" data-v-207cf086></i>\n              ສະກຸນເງິນ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-207cf086>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.currency,
      expression: "formData.currency"
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
        _vm.$set(_vm.formData, "currency", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "LAK"
    }
  }, [_vm._v("ກີບ ລາວ (LAK)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "THB"
    }
  }, [_vm._v("ບາດ ໄທ (THB)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "USD"
    }
  }, [_vm._v("ໂດລາ ສະຫະລັດ (USD)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KRW"
    }
  }, [_vm._v("ວອນ ເກົາຫຼີ (KRW)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "JPY"
    }
  }, [_vm._v("ເຢນ ຍີ່ປຸ່ນ (JPY)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MYR"
    }
  }, [_vm._v("ຣິງກິດ ມາເລເຊຍ (MYR)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SGD"
    }
  }, [_vm._v("ໂດລາ ສິງກະໂປ (SGD)")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-207cf086><i class=\"fas fa-chevron-down\" data-v-207cf086></i></div>")], 2), _vm._ssrNode(" <div class=\"field-hint success\" data-v-207cf086><i class=\"fas fa-star\" data-v-207cf086></i>\n              ເລືອກສະກຸນເງິນທີ່ກ່ຽວຂ້ອງກັບປະເທດປາຍທາງ\n            </div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group full-width\" data-v-207cf086>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-207cf086><i class=\"fas fa-briefcase\" data-v-207cf086></i>\n              ການປະກາດຫາງານທີ່ກ່ຽວຂ້ອງ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-207cf086>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.jobAdvertiseId,
      expression: "formData.jobAdvertiseId"
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
        _vm.$set(_vm.formData, "jobAdvertiseId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ບໍ່ກ່ຽວຂ້ອງກັບການປະກາດໃດ")]), _vm._v(" "), _vm._l(_vm.availableJobs, function (job) {
    return _c('option', {
      key: job.id,
      domProps: {
        "value": job.id
      }
    }, [_vm._v("\n                  " + _vm._s(job.title) + " - " + _vm._s(job.country) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-207cf086><i class=\"fas fa-chevron-down\" data-v-207cf086></i></div>")], 2), _vm._ssrNode(" <div class=\"field-hint info\" data-v-207cf086><i class=\"fas fa-info-circle\" data-v-207cf086></i>\n              ເລືອກການປະກາດຫາງານທີ່ສະຫວັດດີການນີ້ຈະຖືກນຳໃຊ້\n            </div>")], 2), _vm._ssrNode(" <div class=\"section-header full-width\" data-v-207cf086><h4 data-v-207cf086><i class=\"fas fa-align-left\" data-v-207cf086></i>\n              ລາຍລະອຽດ\n            </h4></div> <div class=\"form-group full-width\" data-v-207cf086><label class=\"form-label\" data-v-207cf086><i class=\"fas fa-file-text\" data-v-207cf086></i>\n              ຄຳອະທິບາຍສະຫວັດດີການ\n            </label> <textarea rows=\"4\" placeholder=\"ອະທິບາຍລາຍລະອຽດຂອງສະຫວັດດີການນີ້...\" maxlength=\"1000\" class=\"form-control\" data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.formData.description)) + "</textarea> <div class=\"field-hint\" data-v-207cf086><span class=\"text-counter\" data-v-207cf086>" + _vm._ssrEscape(_vm._s(((_vm$formData$descript = _vm.formData.description) === null || _vm$formData$descript === void 0 ? void 0 : _vm$formData$descript.length) || 0) + "/1000") + "</span></div></div> <div class=\"form-group full-width\" data-v-207cf086><label class=\"form-label\" data-v-207cf086><i class=\"fas fa-sticky-note\" data-v-207cf086></i>\n              ໝາຍເຫດ\n            </label> <textarea rows=\"3\" placeholder=\"ໝາຍເຫດເພີ່ມເຕີມ, ເງື່ອນໄຂພິເສດ...\" maxlength=\"500\" class=\"form-control\" data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> <div class=\"field-hint\" data-v-207cf086><span class=\"text-counter\" data-v-207cf086>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div> <div class=\"form-group full-width\" data-v-207cf086><div class=\"benefit-preview\" data-v-207cf086><h5 data-v-207cf086><i class=\"fas fa-eye\" data-v-207cf086></i>\n                ຕົວຢ່າງສະຫວັດດີການ\n              </h5> <div class=\"preview-card\" data-v-207cf086><div class=\"preview-header\" data-v-207cf086><div class=\"preview-name\" data-v-207cf086><i" + _vm._ssrClass(null, _vm.getTypeIcon(_vm.formData.type)) + " data-v-207cf086></i> <strong data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.formData.name || 'ຊື່ສະຫວັດດີການ')) + "</strong></div> <div class=\"preview-status\" data-v-207cf086><span" + _vm._ssrClass(null, ['status-badge', _vm.formData.isActive ? 'active' : 'inactive']) + " data-v-207cf086><i" + _vm._ssrClass(null, _vm.formData.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle') + " data-v-207cf086></i>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formData.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n                    ") + "</span></div></div> <div class=\"preview-content\" data-v-207cf086><div class=\"preview-type\" data-v-207cf086><span" + _vm._ssrClass(null, ['type-badge', _vm.formData.type]) + " data-v-207cf086><i" + _vm._ssrClass(null, _vm.getTypeIcon(_vm.formData.type)) + " data-v-207cf086></i>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatType(_vm.formData.type) || 'ເລືອກປະເພດ') + "\n                    ") + "</span></div> " + (_vm.formData.value ? "<div class=\"preview-value\" data-v-207cf086><i class=\"fas fa-coins\" data-v-207cf086></i> <span class=\"value-amount\" data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.formData.value, _vm.formData.currency))) + "</span></div>" : "<!---->") + " " + (_vm.formData.description ? "<div class=\"preview-description\" data-v-207cf086><i class=\"fas fa-file-text\" data-v-207cf086></i> <span data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.truncateText(_vm.formData.description, 100))) + "</span></div>" : "<!---->") + " " + (_vm.selectedJobTitle ? "<div class=\"preview-job\" data-v-207cf086><i class=\"fas fa-briefcase\" data-v-207cf086></i> <span data-v-207cf086>" + _vm._ssrEscape(_vm._s(_vm.selectedJobTitle)) + "</span></div>" : "<!---->") + "</div></div></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-207cf086><h6 data-v-207cf086><i class=\"fas fa-exclamation-circle\" data-v-207cf086></i>\n            ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:\n          </h6> <ul data-v-207cf086>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-207cf086>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-207cf086><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-207cf086><i class=\"fas fa-times\" data-v-207cf086></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-207cf086>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-207cf086></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-207cf086></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'Saving...' : _vm.isEditMode ? 'ອັບເດດ' : 'ສ້າງສະຫວັດດີການ') + "\n        ") + "</button></div>")], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/benefit/maintain/index.vue?vue&type=template&id=207cf086&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/benefit/maintain/index.vue?vue&type=script&lang=js&
/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'BenefitDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    benefit: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loading: false,
      availableJobs: [],
      // This would be fetched from API
      formData: {
        name: '',
        type: '',
        description: '',
        value: null,
        currency: 'LAK',
        isActive: true,
        notes: '',
        jobAdvertiseId: null
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.benefit && this.benefit.id;
    },
    user() {
      return this.$auth.user || '';
    },
    // Form validation
    isFormValid() {
      return this.formData.name.trim() && this.formData.type && this.formErrors.length === 0;
    },
    selectedJobTitle() {
      if (!this.formData.jobAdvertiseId) return null;
      const job = this.availableJobs.find(j => j.id == this.formData.jobAdvertiseId);
      return job ? `${job.title} - ${job.country}` : null;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm();
        this.fetchAvailableJobs();
      } else {
        this.resetForm();
      }
    },
    benefit: {
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
      if (this.benefit && this.benefit.id) {
        // Edit mode
        this.formData = {
          name: this.benefit.name || '',
          type: this.benefit.type || '',
          description: this.benefit.description || '',
          value: this.benefit.value || null,
          currency: this.benefit.currency || 'LAK',
          isActive: this.benefit.isActive !== undefined ? this.benefit.isActive : true,
          notes: this.benefit.notes || '',
          jobAdvertiseId: this.benefit.jobAdvertiseId || null
        };
      } else {
        // Create mode - set defaults
        this.formData = {
          name: '',
          type: '',
          description: '',
          value: null,
          currency: 'LAK',
          isActive: true,
          notes: '',
          jobAdvertiseId: null
        };
      }
      this.errors = {};
      this.formErrors = [];
    },
    resetForm() {
      this.formData = {
        name: '',
        type: '',
        description: '',
        value: null,
        currency: 'LAK',
        isActive: true,
        notes: '',
        jobAdvertiseId: null
      };
      this.errors = {};
      this.formErrors = [];
      this.loading = false;
    },
    async fetchAvailableJobs() {
      try {
        const {
          data
        } = await this.$axios.get('/api/job-advertises', {
          params: {
            status: 'active',
            limit: 100
          }
        });
        if (data && data.success) {
          this.availableJobs = data.data || [];
        }
      } catch (error) {
        console.error('Error fetching job advertisements:', error);
        this.availableJobs = [];
      }
    },
    validateForm() {
      this.errors = {};
      this.formErrors = [];

      // Required fields validation
      if (!this.formData.name.trim()) {
        this.errors.name = 'ກະລຸນາໃສ່ຊື່ສະຫວັດດີການ';
        this.formErrors.push('Benefit name is required');
      }
      if (!this.formData.type) {
        this.errors.type = 'ກະລຸນາເລືອກປະເພດສະຫວັດດີການ';
        this.formErrors.push('Benefit type selection is required');
      }

      // Value validation
      if (this.formData.value !== null && this.formData.value !== undefined) {
        if (this.formData.value < 0) {
          this.errors.value = 'ມູນຄ່າຕ້ອງເປັນຈຳນວນບວກ';
          this.formErrors.push('Value must be a positive number');
        }
        if (this.formData.value > 999999999.99) {
          this.errors.value = 'ມູນຄ່າສູງເກີນໄປ';
          this.formErrors.push('Value is too large');
        }
      }

      // Text length validation
      if (this.formData.description && this.formData.description.length > 1000) {
        this.formErrors.push('Description must not exceed 1000 characters');
      }
      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters');
      }
      return this.formErrors.length === 0;
    },
    async saveBenefit() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData,
          // Convert empty strings to null for optional fields
          value: this.formData.value || null,
          jobAdvertiseId: this.formData.jobAdvertiseId || null
        };
        console.log('📤 Submitting benefit data:', submitData);

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
    formatType(type) {
      const typeLabels = {
        salary: 'ເງິນເດືອນ',
        allowance: 'ເງິນອຸດໜູນ',
        insurance: 'ປະກັນໄພ',
        accommodation: 'ທີ່ພັກ',
        transportation: 'ການເດີນທາງ',
        other: 'ອື່ນໆ'
      };
      return typeLabels[type] || type;
    },
    getTypeIcon(type) {
      const typeIcons = {
        salary: 'fas fa-money-bill-wave',
        allowance: 'fas fa-hand-holding-usd',
        insurance: 'fas fa-shield-alt',
        accommodation: 'fas fa-home',
        transportation: 'fas fa-bus',
        other: 'fas fa-ellipsis-h'
      };
      return typeIcons[type] || 'fas fa-gift';
    },
    getTypeDescription(type) {
      const descriptions = {
        salary: 'ເງິນເດືອນປົກກະຕິ ຫຼື ເງິນພື້ນຖານ',
        allowance: 'ເງິນອຸດໜູນພິເສດ ເຊັ່ນ: ເງິນອາຫານ, ເງິນເດີນທາງ',
        insurance: 'ປະກັນສຸຂະພາບ, ປະກັນອຸບັດເຫດ',
        accommodation: 'ທີ່ພັກ, ຫ້ອງພັກ, ຄ່າເຊົ່າ',
        transportation: 'ຄ່າເດີນທາງ, ລົດຮັບສົ່ງ',
        other: 'ສະຫວັດດີການອື່ນໆ ທີ່ບໍ່ຢູ່ໃນປະເພດຂ້າງເທິງ'
      };
      return descriptions[type] || 'ເລືອກປະເພດເພື່ອເບິ່ງຄຳອະທິບາຍ';
    },
    formatCurrency(value, currency = 'LAK') {
      if (!value) return '-';
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
      try {
        return formatter.format(value);
      } catch (e) {
        return `${Number(value).toLocaleString()} ${currency}`;
      }
    },
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    }
  }
});
// CONCATENATED MODULE: ./components/benefit/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var benefit_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/benefit/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(627)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  benefit_maintainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "207cf086",
  "0e5aaab9"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=benefit-maintain.js.map