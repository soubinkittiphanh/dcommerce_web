exports.ids = [18];
exports.modules = {

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(618);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4ead85aa", content, true, context)
};

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bfbb814_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bfbb814_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bfbb814_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bfbb814_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bfbb814_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-0bfbb814]{align-items:center;animation:fadeIn-0bfbb814 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-0bfbb814{0%{opacity:0}to{opacity:1}}.fullscreen-dialog[data-v-0bfbb814]{border-radius:0!important;height:100vh!important;margin:0!important;max-height:100vh!important;max-width:100vw!important;width:100vw!important}.enhanced-dialog[data-v-0bfbb814]{animation:slideIn-0bfbb814 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:900px;overflow:hidden;width:95%}@keyframes slideIn-0bfbb814{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-0bfbb814]{align-items:center;background:linear-gradient(135deg,#01532b,#337555);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-0bfbb814]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-0bfbb814]{font-size:20px;opacity:.9}.modal-title[data-v-0bfbb814]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-0bfbb814]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-0bfbb814]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-0bfbb814]{max-height:75vh;overflow-y:auto;padding:16px}.form-grid[data-v-0bfbb814]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:1fr 1fr}.form-group[data-v-0bfbb814]{margin-bottom:0}.form-group.full-width[data-v-0bfbb814]{grid-column:1/-1}.form-label[data-v-0bfbb814]{align-items:center;color:#374151;display:flex;font-size:12px;font-weight:600;gap:6px;margin-bottom:4px}.form-label.required[data-v-0bfbb814]:after{color:#e74c3c;content:\"*\";margin-left:2px}.form-label i[data-v-0bfbb814]{color:#6b7280;font-size:10px}.form-control[data-v-0bfbb814]{background:#fafafa;border:1px solid #e5e7eb;border-radius:6px;box-sizing:border-box;font-size:13px;padding:8px 12px;transition:all .2s ease;width:100%}.form-control.compact[data-v-0bfbb814]{font-size:12px;padding:6px 10px}.form-control[data-v-0bfbb814]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 2px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-0bfbb814]{border-color:#e74c3c}.form-control[data-v-0bfbb814]:disabled{background:#f8f9fa;color:#6c757d;opacity:.7}.invalid-feedback[data-v-0bfbb814]{color:#e74c3c;display:block;font-size:10px;margin-top:2px}.custom-select[data-v-0bfbb814]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:30px}.select-icon[data-v-0bfbb814]{color:#6b7280;font-size:10px;pointer-events:none;position:absolute;right:8px;top:50%;transform:translateY(-50%)}.gender-options.compact[data-v-0bfbb814]{display:flex;gap:16px;margin-top:4px}.checkbox-option[data-v-0bfbb814],.radio-option[data-v-0bfbb814]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:12px;gap:6px}.checkbox-option input[type=checkbox][data-v-0bfbb814],.radio-option input[type=radio][data-v-0bfbb814]{margin:0;transform:scale(.9)}.checkbox-label[data-v-0bfbb814],.radio-label[data-v-0bfbb814]{font-weight:500}.checkbox-group.compact[data-v-0bfbb814]{margin-top:4px}.field-hint.compact[data-v-0bfbb814]{align-items:center;display:flex;font-size:10px;gap:4px;margin-top:3px}.field-hint.error[data-v-0bfbb814]{color:#e74c3c}.field-hint.warning[data-v-0bfbb814]{color:#f39c12}.field-hint.info[data-v-0bfbb814]{color:#3b82f6}.field-hint.success[data-v-0bfbb814]{color:#28a745}.application-summary.compact[data-v-0bfbb814]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:1px solid #e2e8f0;border-radius:8px;margin-top:8px;padding:12px}.application-summary.compact h6[data-v-0bfbb814]{align-items:center;color:#1e293b;display:flex;font-size:13px;font-weight:600;gap:6px;margin:0 0 8px}.application-summary.compact h6 i[data-v-0bfbb814]{color:#3b82f6;font-size:12px}.summary-items.compact[data-v-0bfbb814]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.summary-item.compact[data-v-0bfbb814]{align-items:center;background:hsla(0,0%,100%,.7);border:1px solid #e2e8f0;border-radius:4px;color:#64748b;display:flex;font-size:11px;gap:4px;padding:4px 8px;transition:all .2s ease}.summary-item.compact.complete[data-v-0bfbb814]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.summary-item.compact.complete i[data-v-0bfbb814]{color:#22c55e}.summary-item.compact:not(.complete) i[data-v-0bfbb814]{color:#ef4444}.summary-item.compact.bonus[data-v-0bfbb814]{background:rgba(251,191,36,.1);border-color:#fbbf24;color:#d97706}.summary-item.compact.bonus i[data-v-0bfbb814]{color:#fbbf24}.summary-result.compact[data-v-0bfbb814]{align-items:center;background:rgba(239,68,68,.1);border:1px solid #ef4444;border-radius:6px;color:#dc2626;display:flex;font-size:12px;font-weight:600;gap:6px;justify-content:center;padding:8px 12px;text-align:center}.summary-result.compact.ready[data-v-0bfbb814]{background:rgba(34,197,94,.1);border-color:#22c55e;color:#15803d}.summary-result.compact i[data-v-0bfbb814]{font-size:12px}.form-errors.compact[data-v-0bfbb814]{background:#fef2f2;border:1px solid #fecaca;border-radius:6px;margin-top:12px;padding:12px}.form-errors.compact h6[data-v-0bfbb814]{align-items:center;color:#dc2626;display:flex;font-size:12px;gap:4px;margin:0 0 6px}.form-errors.compact ul[data-v-0bfbb814]{color:#dc2626;font-size:11px;margin:0;padding-left:16px}.modal-footer.compact[data-v-0bfbb814]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:8px;justify-content:flex-end;padding:12px 16px}.btn.compact[data-v-0bfbb814]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:12px;font-weight:600;gap:6px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-0bfbb814]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-0bfbb814]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-0bfbb814]{background:linear-gradient(135deg,#01532b,#337555);color:#fff}.btn-secondary[data-v-0bfbb814]{background:#6c757d;color:#fff}.btn[data-v-0bfbb814]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-0bfbb814]{animation:spin-0bfbb814 1s linear infinite}@keyframes spin-0bfbb814{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (max-width:768px){.enhanced-dialog[data-v-0bfbb814]{margin:10px;width:98%}.form-grid[data-v-0bfbb814]{grid-template-columns:1fr}.gender-options[data-v-0bfbb814]{flex-direction:column;gap:12px}.summary-items[data-v-0bfbb814]{grid-template-columns:1fr}.modal-body[data-v-0bfbb814],.modal-header[data-v-0bfbb814]{padding:16px}.enhanced-footer[data-v-0bfbb814]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-0bfbb814]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=0bfbb814&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div" + _vm._ssrClass("modal-dialog enhanced-dialog", {
    'fullscreen-dialog': _vm.fullscreen
  }) + " data-v-0bfbb814>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-0bfbb814><div class=\"modal-title-section\" data-v-0bfbb814><i class=\"fas fa-user-plus modal-icon\" data-v-0bfbb814></i> <h5 class=\"modal-title\" data-v-0bfbb814>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂຂໍ້ມູນຜູ້ສະໝັກ' : 'ເພີ່ມຜູ້ສະໝັກໃໝ່') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-0bfbb814><i class=\"fas fa-times\" data-v-0bfbb814></i></button></div> "), _vm._ssrNode("<form data-v-0bfbb814>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-0bfbb814>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-0bfbb814>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-0bfbb814>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-briefcase\" data-v-0bfbb814></i>\n              Job Batch\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-0bfbb814>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.jobBatchId,
      expression: "formData.jobBatchId"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.jobBatchId
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "jobBatchId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກ Job Batch")]), _vm._v(" "), _vm._l(_vm.jobBatches, function (batch) {
    return _c('option', {
      key: batch.id,
      domProps: {
        "value": batch.id
      }
    }, [_vm._v("\n                  " + _vm._s(batch.batchName) + _vm._s(batch.workPlace ? ` - ${batch.workPlace}` : '') + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-0bfbb814><i class=\"fas fa-chevron-down\" data-v-0bfbb814></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.jobBatchId ? "<div class=\"invalid-feedback\" data-v-0bfbb814>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.jobBatchId) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-0bfbb814>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-flag\" data-v-0bfbb814></i>\n              ສະຖານະ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-0bfbb814>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.status,
      expression: "formData.status"
    }],
    staticClass: "form-control custom-select compact",
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
      "value": "INTERVIEW"
    }
  }, [_vm._v("ສໍາພາດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "REGISTER"
    }
  }, [_vm._v("ລົງທະບຽນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rejected"
    }
  }, [_vm._v("ປະຕິເສດ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-0bfbb814><i class=\"fas fa-chevron-down\" data-v-0bfbb814></i></div>")], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label required\" data-v-0bfbb814><i class=\"fas fa-user\" data-v-0bfbb814></i>\n              ຊື່\n            </label> <input type=\"text\" placeholder=\"ຊື່ຕົວຈິງ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.firstName) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.firstName
  }) + " data-v-0bfbb814> " + (_vm.errors.firstName ? "<div class=\"invalid-feedback\" data-v-0bfbb814>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.firstName) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label required\" data-v-0bfbb814><i class=\"fas fa-user\" data-v-0bfbb814></i>\n              ນາມສະກຸນ\n            </label> <input type=\"text\" placeholder=\"ນາມສະກຸນ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.lastName) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.lastName
  }) + " data-v-0bfbb814> " + (_vm.errors.lastName ? "<div class=\"invalid-feedback\" data-v-0bfbb814>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.lastName) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label required\" data-v-0bfbb814><i class=\"fas fa-phone\" data-v-0bfbb814></i>\n              ເບີໂທ\n            </label> <input type=\"tel\" placeholder=\"+856 20 12345678\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.phone) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.phone
  }) + " data-v-0bfbb814> " + (_vm.errors.phone ? "<div class=\"invalid-feedback\" data-v-0bfbb814>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.phone) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-exclamation-triangle\" data-v-0bfbb814></i>\n              ເບີສຸກເສີນ\n            </label> <input type=\"tel\" placeholder=\"+856 20 87654321\"" + _vm._ssrAttr("value", _vm.formData.emergencyContactNo) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label required\" data-v-0bfbb814><i class=\"fas fa-venus-mars\" data-v-0bfbb814></i>\n              ເພດ\n            </label> <div class=\"gender-options compact\" data-v-0bfbb814><label class=\"radio-option\" data-v-0bfbb814><input type=\"radio\" value=\"male\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "male")) + " data-v-0bfbb814> <span class=\"radio-label\" data-v-0bfbb814>ຊາຍ</span></label> <label class=\"radio-option\" data-v-0bfbb814><input type=\"radio\" value=\"female\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "female")) + " data-v-0bfbb814> <span class=\"radio-label\" data-v-0bfbb814>ຍິງ</span></label></div> " + (_vm.errors.gender ? "<div class=\"invalid-feedback\" data-v-0bfbb814>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.gender) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-calendar\" data-v-0bfbb814></i>\n              ອາຍຸ\n            </label> <input type=\"number\" min=\"18\" max=\"32\" placeholder=\"ອາຍຸ\"" + _vm._ssrAttr("value", _vm.formData.age) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.age
  }) + " data-v-0bfbb814> " + (_vm.errors.age ? "<div class=\"invalid-feedback\" data-v-0bfbb814>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.age) + "\n            ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-0bfbb814>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-heart\" data-v-0bfbb814></i>\n              ສະຖານະ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-0bfbb814>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.maritalStatus,
      expression: "formData.maritalStatus"
    }],
    staticClass: "form-control custom-select compact",
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
  }, [_vm._v("ເປັນເມ່າຍ")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-0bfbb814><i class=\"fas fa-chevron-down\" data-v-0bfbb814></i></div>")], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-building\" data-v-0bfbb814></i>\n              ສະຖານທີ່ເຮັດວຽກ\n            </label> <input type=\"text\" placeholder=\"ບໍລິສັດ / ໂຮງງານ\"" + _vm._ssrAttr("value", _vm.formData.workPlace) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group full-width\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-home\" data-v-0bfbb814></i>\n              ທີ່ຢູ່\n            </label> <textarea rows=\"2\" placeholder=\"ທີ່ຢູ່ລະອຽດ...\" class=\"form-control compact\" data-v-0bfbb814>" + _vm._ssrEscape(_vm._s(_vm.formData.address)) + "</textarea></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-home\" data-v-0bfbb814></i>\n              ບ້ານ\n            </label> <input type=\"text\" placeholder=\"ຊື່ບ້ານ\"" + _vm._ssrAttr("value", _vm.formData.village) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-city\" data-v-0bfbb814></i>\n              ເມືອງ\n            </label> <input type=\"text\" placeholder=\"ຊື່ເມືອງ\"" + _vm._ssrAttr("value", _vm.formData.city) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-map\" data-v-0bfbb814></i>\n              ແຂວງ\n            </label> <input type=\"text\" placeholder=\"ຊື່ແຂວງ\"" + _vm._ssrAttr("value", _vm.formData.district) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-passport\" data-v-0bfbb814></i>\n              ໜັງສືເດີນທາງ\n            </label> <div class=\"checkbox-group compact\" data-v-0bfbb814><label class=\"checkbox-option\" data-v-0bfbb814><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.passportAvailability) ? _vm._i(_vm.formData.passportAvailability, null) > -1 : _vm.formData.passportAvailability) + " data-v-0bfbb814> <span class=\"checkbox-label\" data-v-0bfbb814>ມີໜັງສືເດີນທາງ</span></label></div></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-id-card\" data-v-0bfbb814></i>\n              ເລກໜັງສື\n            </label> <input type=\"text\"" + _vm._ssrAttr("disabled", !_vm.formData.passportAvailability) + " placeholder=\"PA1234567\"" + _vm._ssrAttr("value", _vm.formData.passportNo) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-calendar-times\" data-v-0bfbb814></i>\n              ໝົດອາຍຸ\n            </label> <input type=\"date\"" + _vm._ssrAttr("disabled", !_vm.formData.passportAvailability) + _vm._ssrAttr("min", _vm.today) + _vm._ssrAttr("value", _vm.formData.passportExpiredDate) + " class=\"form-control compact\" data-v-0bfbb814> " + (_vm.formData.passportExpiredDate ? "<div" + _vm._ssrClass("field-hint compact", _vm.isPassportExpired ? 'error' : 'success') + " data-v-0bfbb814><i" + _vm._ssrClass(null, _vm.isPassportExpired ? 'fas fa-exclamation-triangle' : 'fas fa-check-circle') + " data-v-0bfbb814></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.isPassportExpired ? 'ໝົດອາຍຸແລ້ວ!' : 'ຍັງໃຊ້ໄດ້') + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-calendar-plus\" data-v-0bfbb814></i>\n              ເລີ່ມສັນຍາ\n            </label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.formData.contactStartDate) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-calendar-minus\" data-v-0bfbb814></i>\n              ສິ້ນສຸດສັນຍາ\n            </label> <input type=\"date\"" + _vm._ssrAttr("min", _vm.formData.contactStartDate) + _vm._ssrAttr("value", _vm.formData.contactEndDate) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-calendar-plus\" data-v-0bfbb814></i>\n              ລົງທະບຽນ\n            </label> <input type=\"datetime-local\"" + _vm._ssrAttr("value", _vm.formData.registertDate) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-comments\" data-v-0bfbb814></i>\n              ວັນສໍາພາດ\n            </label> <input type=\"datetime-local\"" + _vm._ssrAttr("value", _vm.formData.interviewExamDate) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-id-badge\" data-v-0bfbb814></i>\n              ຮູບໜັງສື\n            </label> <input type=\"text\" placeholder=\"URL ຮູບໜັງສືເດີນທາງ\"" + _vm._ssrAttr("value", _vm.formData.passportPhoto) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group\" data-v-0bfbb814><label class=\"form-label\" data-v-0bfbb814><i class=\"fas fa-user-circle\" data-v-0bfbb814></i>\n              ຮູບຜູ້ສະໝັກ\n            </label> <input type=\"text\" placeholder=\"URL ຮູບຜູ້ສະໝັກ\"" + _vm._ssrAttr("value", _vm.formData.applicantPhoto) + " class=\"form-control compact\" data-v-0bfbb814></div> <div class=\"form-group full-width\" data-v-0bfbb814><div class=\"application-summary compact\" data-v-0bfbb814><h6 data-v-0bfbb814><i class=\"fas fa-clipboard-check\" data-v-0bfbb814></i>\n                ສະຫລຸບ\n              </h6> <div class=\"summary-items compact\" data-v-0bfbb814><div" + _vm._ssrClass("summary-item compact", {
    complete: _vm.formData.firstName && _vm.formData.lastName
  }) + " data-v-0bfbb814><i" + _vm._ssrClass(null, _vm.formData.firstName && _vm.formData.lastName ? 'fas fa-check' : 'fas fa-times') + " data-v-0bfbb814></i> <span data-v-0bfbb814>ຊື່-ນາມສະກຸນ</span></div> <div" + _vm._ssrClass("summary-item compact", {
    complete: _vm.formData.gender
  }) + " data-v-0bfbb814><i" + _vm._ssrClass(null, _vm.formData.gender ? 'fas fa-check' : 'fas fa-times') + " data-v-0bfbb814></i> <span data-v-0bfbb814>ເພດ</span></div> <div" + _vm._ssrClass("summary-item compact", {
    complete: _vm.formData.phone
  }) + " data-v-0bfbb814><i" + _vm._ssrClass(null, _vm.formData.phone ? 'fas fa-check' : 'fas fa-times') + " data-v-0bfbb814></i> <span data-v-0bfbb814>ເບີໂທ</span></div> <div" + _vm._ssrClass("summary-item compact", {
    complete: _vm.formData.passportAvailability
  }) + " data-v-0bfbb814><i" + _vm._ssrClass(null, _vm.formData.passportAvailability ? 'fas fa-check' : 'fas fa-times') + " data-v-0bfbb814></i> <span data-v-0bfbb814>ໜັງສື</span></div> <div" + _vm._ssrClass("summary-item bonus compact", {
    complete: _vm.formData.jobBatchId
  }) + " data-v-0bfbb814><i" + _vm._ssrClass(null, _vm.formData.jobBatchId ? 'fas fa-check' : 'fas fa-layer-group') + " data-v-0bfbb814></i> <span data-v-0bfbb814>Job Batch</span></div></div> <div" + _vm._ssrClass("summary-result compact", {
    ready: _vm.isFormValid
  }) + " data-v-0bfbb814><i" + _vm._ssrClass(null, _vm.isFormValid ? 'fas fa-thumbs-up' : 'fas fa-exclamation-triangle') + " data-v-0bfbb814></i>" + _vm._ssrEscape("\n                " + _vm._s(_vm.isFormValid ? 'ພ້ອມບັນທຶກ' : 'ຂໍ້ມູນບໍ່ຄົບ') + "\n              ") + "</div></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors compact\" data-v-0bfbb814><h6 data-v-0bfbb814><i class=\"fas fa-exclamation-circle\" data-v-0bfbb814></i>\n            ແກ້ໄຂຂໍ້ຜິດພາດ:\n          </h6> <ul data-v-0bfbb814>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-0bfbb814>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer compact\" data-v-0bfbb814><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary compact\" data-v-0bfbb814><i class=\"fas fa-times\" data-v-0bfbb814></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary compact\" data-v-0bfbb814>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-0bfbb814></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-0bfbb814></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div>")], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=0bfbb814&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ApplicantDialogvue_type_script_lang_js_ = ({
  name: 'ApplicantDialog',
  props: {
    visible: Boolean,
    applicant: Object,
    fullscreen: {
      type: Boolean,
      default: false
    },
    // NEW: Job batches data
    jobBatches: {
      type: Array,
      default: () => []
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
        applicantPhoto: '',
        jobBatchId: null,
        status: 'INTERVIEW' // NEW: Default status
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
    // NEW: Get selected job batch details
    selectedJobBatch() {
      if (!this.formData.jobBatchId || !this.jobBatches.length) return null;
      return this.jobBatches.find(batch => batch.id == this.formData.jobBatchId);
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
        this.loadJobBatches(); // NEW: Load job batches when dialog opens
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
    },
    // NEW: Auto-populate workplace when job batch changes
    'formData.jobBatchId'(newVal) {
      if (newVal && this.selectedJobBatch && this.selectedJobBatch.workPlace) {
        if (!this.formData.workPlace) {
          this.formData.workPlace = this.selectedJobBatch.workPlace;
        }
      }
    }
  },
  methods: {
    // NEW: Load job batches
    async loadJobBatches() {
      // If parent doesn't provide job batches, emit event to request them
      if (!this.jobBatches || this.jobBatches.length === 0) {
        this.$emit('load-job-batches');
      }
    },
    // NEW: Format date for display
    formatDate(dateString) {
      if (!dateString) return '';
      try {
        return new Date(dateString).toLocaleDateString('lo-LA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } catch (error) {
        return dateString;
      }
    },
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
          applicantPhoto: this.applicant.applicantPhoto || '',
          jobBatchId: this.applicant.jobBatchId || null,
          status: this.applicant.status || 'INTERVIEW'
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
        applicantPhoto: '',
        jobBatchId: null,
        status: 'INTERVIEW'
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

      // NEW: Job batch validation (optional but can be added)
      // if (!this.formData.jobBatchId) {
      //   this.errors.jobBatchId = 'ກະລຸນາເລືອກ Job Batch'
      //   this.formErrors.push('Job batch selection is required')
      // }

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
  
  var style0 = __webpack_require__(617)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_ApplicantDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0bfbb814",
  "519f9c22"
  
)

/* harmony default export */ var ApplicantDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=applicants-applicant-dialog.js.map