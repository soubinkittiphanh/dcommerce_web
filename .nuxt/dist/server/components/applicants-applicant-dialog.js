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
  add("1730318a", content, true, context)
};

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90ece5ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90ece5ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90ece5ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90ece5ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90ece5ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".full-modal[data-v-90ece5ce]{background:#fff;height:100vh;margin:0;padding:0;width:100vw;z-index:9999}.full-modal[data-v-90ece5ce],.modal-overlay[data-v-90ece5ce]{left:0;position:fixed;top:0}.modal-overlay[data-v-90ece5ce]{align-items:center;background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;right:0;z-index:1000}.modal-dialog[data-v-90ece5ce]{background:#fff;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:800px;overflow:hidden;width:95%}.modal-header[data-v-90ece5ce]{background:#01532b;border-bottom:1px solid #e5e7eb;color:#fff;justify-content:space-between;padding:16px 20px}.modal-header[data-v-90ece5ce],.modal-title[data-v-90ece5ce]{align-items:center;display:flex}.modal-title[data-v-90ece5ce]{font-size:16px;font-weight:600;gap:8px;margin:0}.close-btn[data-v-90ece5ce]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;opacity:.8;padding:4px}.close-btn[data-v-90ece5ce]:hover{background:hsla(0,0%,100%,.1);opacity:1}.stepper[data-v-90ece5ce]{background:#f9fafb;border-bottom:1px solid #e5e7eb;justify-content:center;padding:16px}.step[data-v-90ece5ce],.stepper[data-v-90ece5ce]{align-items:center;display:flex}.step[data-v-90ece5ce]{border-radius:6px;cursor:pointer;gap:8px;padding:8px 12px;transition:all .2s}.step.active[data-v-90ece5ce]{background:rgba(1,83,43,.1);color:#01532b}.step.completed[data-v-90ece5ce]{color:#059669}.step[data-v-90ece5ce]:not(.available){cursor:not-allowed;opacity:.5}.step-number[data-v-90ece5ce]{align-items:center;background:#e5e7eb;border-radius:50%;display:flex;font-size:12px;font-weight:600;height:24px;justify-content:center;width:24px}.step.active .step-number[data-v-90ece5ce]{background:#01532b;color:#fff}.step.completed .step-number[data-v-90ece5ce]{background:#059669;color:#fff}.step-label[data-v-90ece5ce]{font-size:14px;font-weight:500}.step-line[data-v-90ece5ce]{background:#e5e7eb;height:2px;margin:0 16px;width:60px}.step-line.completed[data-v-90ece5ce]{background:#059669}.modal-body[data-v-90ece5ce]{flex:1;max-height:60vh;overflow-y:auto;padding:20px}.form-grid[data-v-90ece5ce]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.form-group[data-v-90ece5ce]{display:flex;flex-direction:column}.form-group.full-width[data-v-90ece5ce]{grid-column:1/-1}.form-group label[data-v-90ece5ce]{align-items:center;color:#374151;display:flex;font-size:13px;font-weight:600;gap:6px;margin-bottom:6px}.form-group label.required[data-v-90ece5ce]:after{color:#ef4444;content:\"*\"}.form-group input[data-v-90ece5ce],.form-group select[data-v-90ece5ce],.form-group textarea[data-v-90ece5ce]{background:#fafafa;border:1px solid #d1d5db;border-radius:6px;font-size:14px;padding:8px 12px;transition:all .2s}.form-group input[data-v-90ece5ce]:focus,.form-group select[data-v-90ece5ce]:focus,.form-group textarea[data-v-90ece5ce]:focus{background:#fff;border-color:#01532b;box-shadow:0 0 0 2px rgba(1,83,43,.1);outline:none}.form-group input.error[data-v-90ece5ce],.form-group select.error[data-v-90ece5ce]{border-color:#ef4444}.form-group textarea[data-v-90ece5ce]{min-height:60px;resize:vertical}.radio-group[data-v-90ece5ce]{display:flex;gap:16px;margin-top:4px}.radio-group label[data-v-90ece5ce]{align-items:center;cursor:pointer;display:flex;font-weight:500;gap:6px;margin-bottom:0}.date-group[data-v-90ece5ce],.location-group[data-v-90ece5ce],.passport-group[data-v-90ece5ce]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(100px,1fr))}.photo-upload[data-v-90ece5ce]{align-items:center;border:2px dashed #d1d5db;border-radius:8px;cursor:pointer;display:flex;height:80px;justify-content:center;overflow:hidden;transition:border-color .2s;width:80px}.photo-upload[data-v-90ece5ce]:hover{border-color:#01532b}.photo-upload img[data-v-90ece5ce]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.photo-placeholder[data-v-90ece5ce]{align-items:center;color:#6b7280;display:flex;flex-direction:column;font-size:12px;gap:4px}.photo-placeholder i[data-v-90ece5ce]{font-size:18px}.form-errors[data-v-90ece5ce]{background:#fef2f2;border:1px solid #fecaca;border-radius:6px;color:#dc2626;font-size:13px;margin-top:16px;padding:8px 12px}.modal-footer[data-v-90ece5ce]{background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 20px}.actions[data-v-90ece5ce]{display:flex;gap:12px;justify-content:space-between}.btn[data-v-90ece5ce]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:6px;padding:8px 16px;transition:all .2s}.btn[data-v-90ece5ce]:disabled{cursor:not-allowed;opacity:.6}.btn.primary[data-v-90ece5ce]{background:#01532b;color:#fff}.btn.primary[data-v-90ece5ce]:hover:not(:disabled){background:#064e3b}.btn.secondary[data-v-90ece5ce]{background:#6b7280;color:#fff}.btn.outline[data-v-90ece5ce]{background:transparent;border:1px solid #01532b;color:#01532b}.btn.outline[data-v-90ece5ce]:hover:not(:disabled){background:#01532b;color:#fff}@media (max-width:768px){.modal-dialog[data-v-90ece5ce]{max-height:95vh;width:98%}.form-grid[data-v-90ece5ce]{gap:12px;grid-template-columns:1fr}.stepper[data-v-90ece5ce]{padding:12px}.step-line[data-v-90ece5ce]{margin:0 12px;width:40px}.modal-body[data-v-90ece5ce]{padding:16px}.date-group[data-v-90ece5ce],.location-group[data-v-90ece5ce],.passport-group[data-v-90ece5ce]{grid-template-columns:1fr}.actions[data-v-90ece5ce]{flex-wrap:wrap}.btn[data-v-90ece5ce]{flex:1;min-width:120px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=90ece5ce&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog\" data-v-90ece5ce>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-90ece5ce><h5 class=\"modal-title\" data-v-90ece5ce><i class=\"fas fa-user-plus\" data-v-90ece5ce></i>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂຜູ້ສະໝັກ' : 'ເພີ່ມຜູ້ສະໝັກ') + "\n        ") + "</h5> <button class=\"close-btn\" data-v-90ece5ce><i class=\"fas fa-times\" data-v-90ece5ce></i></button></div> <div class=\"stepper\" data-v-90ece5ce><div" + _vm._ssrClass("step", {
    active: _vm.currentStep === 1,
    completed: _vm.currentStep > 1
  }) + " data-v-90ece5ce><span class=\"step-number\" data-v-90ece5ce>" + _vm._ssrEscape(_vm._s(_vm.currentStep > 1 ? '✓' : '1')) + "</span> <span class=\"step-label\" data-v-90ece5ce>ພື້ນຖານ</span></div> <div" + _vm._ssrClass("step-line", {
    completed: _vm.currentStep > 1
  }) + " data-v-90ece5ce></div> <div" + _vm._ssrClass("step", {
    active: _vm.currentStep === 2,
    available: _vm.step1Valid
  }) + " data-v-90ece5ce><span class=\"step-number\" data-v-90ece5ce>2</span> <span class=\"step-label\" data-v-90ece5ce>ລາຍລະອຽດ</span></div></div> "), _vm._ssrNode("<form data-v-90ece5ce>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-90ece5ce>", "</div>", [_vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
    display: _vm.currentStep === 1 ? '' : 'none'
  }) + " data-v-90ece5ce>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-90ece5ce>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-90ece5ce>", "</div>", [_vm._ssrNode("<label data-v-90ece5ce><i class=\"fas fa-briefcase\" data-v-90ece5ce></i>\n                  Job Batch\n                </label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.jobBatchId,
      expression: "formData.jobBatchId"
    }],
    class: {
      error: _vm.errors.jobBatchId
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
    }, [_vm._v("\n                    " + _vm._s(batch.batchName) + _vm._s(batch.workPlace ? ` - ${batch.workPlace}` : '') + "\n                  ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-90ece5ce><label class=\"required\" data-v-90ece5ce><i class=\"fas fa-user\" data-v-90ece5ce></i>\n                  ຊື່\n                </label> <input type=\"text\" placeholder=\"ຊື່ຕົວຈິງ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.firstName) + _vm._ssrClass(null, {
    error: _vm.errors.firstName
  }) + " data-v-90ece5ce></div> <div class=\"form-group\" data-v-90ece5ce><label class=\"required\" data-v-90ece5ce><i class=\"fas fa-user\" data-v-90ece5ce></i>\n                  ນາມສະກຸນ\n                </label> <input type=\"text\" placeholder=\"ນາມສະກຸນ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.lastName) + _vm._ssrClass(null, {
    error: _vm.errors.lastName
  }) + " data-v-90ece5ce></div> <div class=\"form-group\" data-v-90ece5ce><label class=\"required\" data-v-90ece5ce><i class=\"fas fa-venus-mars\" data-v-90ece5ce></i>\n                  ເພດ\n                </label> <div class=\"radio-group\" data-v-90ece5ce><label data-v-90ece5ce><input type=\"radio\" value=\"male\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "male")) + " data-v-90ece5ce>\n                    ຊາຍ</label> <label data-v-90ece5ce><input type=\"radio\" value=\"female\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "female")) + " data-v-90ece5ce>\n                    ຍິງ</label></div></div> <div class=\"form-group\" data-v-90ece5ce><label data-v-90ece5ce><i class=\"fas fa-calendar\" data-v-90ece5ce></i>\n                  ອາຍຸ\n                </label> <input type=\"number\" min=\"18\" max=\"32\" placeholder=\"ອາຍຸ\"" + _vm._ssrAttr("value", _vm.formData.age) + " data-v-90ece5ce></div> <div class=\"form-group full-width\" data-v-90ece5ce><label data-v-90ece5ce><i class=\"fas fa-home\" data-v-90ece5ce></i>\n                  ທີ່ຢູ່\n                </label> <textarea rows=\"2\" placeholder=\"ທີ່ຢູ່ລະອຽດ...\" data-v-90ece5ce>" + _vm._ssrEscape(_vm._s(_vm.formData.address)) + "</textarea></div> <div class=\"form-group\" data-v-90ece5ce><label data-v-90ece5ce><i class=\"fas fa-passport\" data-v-90ece5ce></i> <input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.passportAvailability) ? _vm._i(_vm.formData.passportAvailability, null) > -1 : _vm.formData.passportAvailability) + " data-v-90ece5ce>\n                  ມີໜັງສືເດີນທາງ\n                </label></div> <div class=\"form-group\" data-v-90ece5ce><label data-v-90ece5ce><i class=\"fas fa-camera\" data-v-90ece5ce></i>\n                  ຮູບຜູ້ສະໝັກ\n                </label> <div class=\"photo-upload\" data-v-90ece5ce>" + (_vm.formData.applicantPhoto || _vm.applicantPhotoPreview ? "<img" + _vm._ssrAttr("src", _vm.applicantPhotoPreview || _vm.formData.applicantPhoto) + " alt=\"Applicant\" data-v-90ece5ce>" : "<div class=\"photo-placeholder\" data-v-90ece5ce><i class=\"fas fa-plus\" data-v-90ece5ce></i> <span data-v-90ece5ce>ເພີ່ມຮູບ</span></div>") + "</div> <input type=\"file\" accept=\"image/*\" style=\"display: none\" data-v-90ece5ce></div> " + (_vm.formData.passportAvailability ? "<div class=\"form-group\" data-v-90ece5ce><label data-v-90ece5ce><i class=\"fas fa-id-badge\" data-v-90ece5ce></i>\n                  ຮູບໜັງສື\n                </label> <div class=\"photo-upload\" data-v-90ece5ce>" + (_vm.formData.passportPhoto || _vm.passportPhotoPreview ? "<img" + _vm._ssrAttr("src", _vm.passportPhotoPreview || _vm.formData.passportPhoto) + " alt=\"Passport\" data-v-90ece5ce>" : "<div class=\"photo-placeholder\" data-v-90ece5ce><i class=\"fas fa-plus\" data-v-90ece5ce></i> <span data-v-90ece5ce>ເພີ່ມຮູບ</span></div>") + "</div> <input type=\"file\" accept=\"image/*\" style=\"display: none\" data-v-90ece5ce></div>" : "<!---->"))], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
    display: _vm.currentStep === 2 ? '' : 'none'
  }) + " data-v-90ece5ce>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-90ece5ce>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-90ece5ce>", "</div>", [_vm._ssrNode("<label data-v-90ece5ce><i class=\"fas fa-flag\" data-v-90ece5ce></i>\n                  ສະຖານະ\n                </label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.status,
      expression: "formData.status"
    }],
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
  }, [_vm._v("Apply")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "REGISTER"
    }
  }, [_vm._v("Register")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CONFIRM"
    }
  }, [_vm._v("Confirm")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-90ece5ce><label class=\"required\" data-v-90ece5ce><i class=\"fas fa-phone\" data-v-90ece5ce></i>\n                  ເບີໂທ\n                </label> <input type=\"tel\" placeholder=\"+856 20 12345678\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.phone) + _vm._ssrClass(null, {
    error: _vm.errors.phone
  }) + " data-v-90ece5ce></div> <div class=\"form-group\" data-v-90ece5ce><label data-v-90ece5ce><i class=\"fas fa-exclamation-triangle\" data-v-90ece5ce></i>\n                  ເບີສຸກເສີນ\n                </label> <input type=\"tel\" placeholder=\"+856 20 87654321\"" + _vm._ssrAttr("value", _vm.formData.emergencyContactNo) + " data-v-90ece5ce></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-90ece5ce>", "</div>", [_vm._ssrNode("<label data-v-90ece5ce><i class=\"fas fa-heart\" data-v-90ece5ce></i>\n                  ສະຖານະການແຕ່ງງານ\n                </label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.maritalStatus,
      expression: "formData.maritalStatus"
    }],
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
  }, [_vm._v("ເລືອກ")]), _vm._v(" "), _c('option', {
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
  }, [_vm._v("ເປັນເມ່າຍ")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-90ece5ce><label data-v-90ece5ce><i class=\"fas fa-building\" data-v-90ece5ce></i>\n                  ສະຖານທີ່ເຮັດວຽກ\n                </label> <input type=\"text\" placeholder=\"ບໍລິສັດ / ໂຮງງານ\"" + _vm._ssrAttr("value", _vm.formData.workPlace) + " data-v-90ece5ce></div> <div class=\"form-group\" data-v-90ece5ce><label data-v-90ece5ce><i class=\"fas fa-map-marker-alt\" data-v-90ece5ce></i>\n                  ບ້ານ/ເມືອງ/ແຂວງ\n                </label> <div class=\"location-group\" data-v-90ece5ce><input type=\"text\" placeholder=\"ບ້ານ\"" + _vm._ssrAttr("value", _vm.formData.village) + " data-v-90ece5ce> <input type=\"text\" placeholder=\"ເມືອງ\"" + _vm._ssrAttr("value", _vm.formData.city) + " data-v-90ece5ce> <input type=\"text\" placeholder=\"ແຂວງ\"" + _vm._ssrAttr("value", _vm.formData.district) + " data-v-90ece5ce></div></div> " + (_vm.formData.passportAvailability ? "<div class=\"form-group\" data-v-90ece5ce><label data-v-90ece5ce><i class=\"fas fa-id-card\" data-v-90ece5ce></i>\n                  ເລກ/ໝົດອາຍຸ\n                </label> <div class=\"passport-group\" data-v-90ece5ce><input type=\"text\" placeholder=\"PA1234567\"" + _vm._ssrAttr("value", _vm.formData.passportNo) + " data-v-90ece5ce> <input type=\"date\"" + _vm._ssrAttr("min", _vm.today) + _vm._ssrAttr("value", _vm.formData.passportExpiredDate) + " data-v-90ece5ce></div></div>" : "<!---->") + " <div class=\"form-group\" data-v-90ece5ce><label data-v-90ece5ce><i class=\"fas fa-calendar\" data-v-90ece5ce></i>\n                  ວັນທີສໍາຄັນ\n                </label> <div class=\"date-group\" data-v-90ece5ce><input type=\"date\" placeholder=\"ເລີ່ມສັນຍາ\"" + _vm._ssrAttr("value", _vm.formData.contactStartDate) + " data-v-90ece5ce> <input type=\"date\" placeholder=\"ສິ້ນສຸດສັນຍາ\"" + _vm._ssrAttr("value", _vm.formData.contactEndDate) + " data-v-90ece5ce></div></div> <div class=\"form-group\" data-v-90ece5ce><label data-v-90ece5ce><i class=\"fas fa-clock\" data-v-90ece5ce></i>\n                  ເວລາ\n                </label> <div class=\"date-group\" data-v-90ece5ce><input type=\"datetime-local\" placeholder=\"ລົງທະບຽນ\"" + _vm._ssrAttr("value", _vm.formData.registertDate) + " data-v-90ece5ce> <input type=\"datetime-local\" placeholder=\"ສໍາພາດ\"" + _vm._ssrAttr("value", _vm.formData.interviewExamDate) + " data-v-90ece5ce></div></div>")], 2)]), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-90ece5ce><strong data-v-90ece5ce>ແກ້ໄຂ:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formErrors.join(', ')) + "\n          ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer\" data-v-90ece5ce>" + (_vm.currentStep === 1 ? "<div class=\"actions\" data-v-90ece5ce><button type=\"button\" class=\"btn secondary\" data-v-90ece5ce>\n              ຍົກເລີກ\n            </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.step1Valid || _vm.loading) + " class=\"btn outline\" data-v-90ece5ce>" + _vm._ssrEscape("\n              " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : 'ບັນທຶກ') + "\n            ") + "</button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.step1Valid) + " class=\"btn primary\" data-v-90ece5ce>\n              ສືບຕໍ່\n            </button></div>" : "<!---->") + " " + (_vm.currentStep === 2 ? "<div class=\"actions\" data-v-90ece5ce><button type=\"button\" class=\"btn secondary\" data-v-90ece5ce>\n              ກັບຄືນ\n            </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", !_vm.isFormValid || _vm.loading) + " class=\"btn primary\" data-v-90ece5ce>" + _vm._ssrEscape("\n              " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n            ") + "</button></div>" : "<!---->") + "</div>")], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=90ece5ce&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ApplicantDialogvue_type_script_lang_js_ = ({
  name: 'ApplicantDialog',
  props: {
    visible: Boolean,
    applicant: Object,
    jobBatches: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      loading: false,
      currentStep: 1,
      applicantPhotoPreview: null,
      passportPhotoPreview: null,
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
        status: 'INTERVIEW'
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.applicant && this.applicant.id;
    },
    today() {
      return new Date().toISOString().split('T')[0];
    },
    step1Valid() {
      return this.formData.firstName.trim() && this.formData.lastName.trim() && this.formData.gender;
    },
    isFormValid() {
      const step2Valid = this.currentStep === 2 ? this.formData.phone && this.formData.phone.trim() : true;
      return this.step1Valid && step2Valid && this.formErrors.length === 0;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm();
        this.loadJobBatches();
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
    'formData.passportAvailability'(newVal) {
      if (!newVal) {
        this.formData.passportNo = '';
        this.formData.passportExpiredDate = '';
        this.formData.passportPhoto = '';
        this.passportPhotoPreview = null;
      }
    }
  },
  methods: {
    async loadJobBatches() {
      if (!this.jobBatches || this.jobBatches.length === 0) {
        this.$emit('load-job-batches');
      }
    },
    goToStep(step) {
      if (step === 1 || step === 2 && this.step1Valid) {
        this.currentStep = step;
        this.errors = {};
        this.formErrors = [];
      }
    },
    continueToStep2() {
      if (this.step1Valid) {
        this.currentStep = 2;
      }
    },
    async saveStep1Only() {
      if (!this.validateStep1()) return;
      this.loading = true;
      try {
        const submitData = {
          firstName: this.formData.firstName.trim(),
          lastName: this.formData.lastName.trim(),
          gender: this.formData.gender,
          age: this.formData.age || null,
          address: this.formData.address ? this.formData.address.trim() : '',
          passportAvailability: this.formData.passportAvailability,
          jobBatchId: this.formData.jobBatchId,
          status: 'INTERVIEW'
        };
        this.$emit('save', submitData);
      } catch (error) {
        this.formErrors.push('An error occurred while saving');
      } finally {
        this.loading = false;
      }
    },
    initializeForm() {
      if (this.applicant && this.applicant.id) {
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
        if (this.applicant.phone) {
          this.currentStep = 2;
        }
      } else {
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
      this.applicantPhotoPreview = null;
      this.passportPhotoPreview = null;
    },
    resetForm() {
      this.resetFormData();
      this.errors = {};
      this.formErrors = [];
      this.loading = false;
      this.currentStep = 1;
    },
    validateStep1() {
      this.errors = {};
      this.formErrors = [];
      if (!this.formData.firstName.trim()) {
        this.errors.firstName = true;
        this.formErrors.push('ຊື່ຈຳເປັນ');
      }
      if (!this.formData.lastName.trim()) {
        this.errors.lastName = true;
        this.formErrors.push('ນາມສະກຸນຈຳເປັນ');
      }
      if (!this.formData.gender) {
        this.errors.gender = true;
        this.formErrors.push('ເລືອກເພດ');
      }
      if (this.formData.age && (this.formData.age < 18 || this.formData.age > 32)) {
        this.formErrors.push('ອາຍຸ 18-32 ປີ');
      }
      return this.formErrors.length === 0;
    },
    validateForm() {
      if (!this.validateStep1()) return false;
      if (this.currentStep === 2) {
        if (!this.formData.phone.trim()) {
          this.errors.phone = true;
          this.formErrors.push('ເບີໂທຈຳເປັນ');
        }
      }
      return this.formErrors.length === 0;
    },
    async saveApplicant() {
      if (!this.validateForm()) return;
      this.loading = true;
      try {
        const submitData = Object.keys(this.formData).reduce((acc, key) => {
          const value = this.formData[key];
          if (value !== '' && value !== null) {
            acc[key] = value;
          }
          return acc;
        }, {});
        this.$emit('save', submitData);
      } catch (error) {
        this.formErrors.push('Error saving');
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
    triggerFileInput(type) {
      if (type === 'applicant') {
        this.$refs.applicantFileInput.click();
      } else if (type === 'passport') {
        this.$refs.passportFileInput.click();
      }
    },
    handleFileSelect(event, type) {
      const file = event.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        this.formErrors.push('ເລືອກຮູບພາບ');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        this.formErrors.push('ຮູບໃຫຍ່ເກີນ 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = e => {
        if (type === 'applicant') {
          this.applicantPhotoPreview = e.target.result;
        } else if (type === 'passport') {
          this.passportPhotoPreview = e.target.result;
        }
      };
      reader.readAsDataURL(file);
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
  "90ece5ce",
  "519f9c22"
  
)

/* harmony default export */ var ApplicantDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=applicants-applicant-dialog.js.map