exports.ids = [18];
exports.modules = {

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(620);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6e64637f", content, true, context)
};

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3688e510_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3688e510_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3688e510_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3688e510_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3688e510_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".full-modal[data-v-3688e510]{background:#fff;height:100vh;margin:0;padding:0;width:100vw;z-index:9999}.full-modal[data-v-3688e510],.modal-overlay[data-v-3688e510]{left:0;position:fixed;top:0}.modal-overlay[data-v-3688e510]{align-items:center;background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;right:0;z-index:1000}.modal-dialog[data-v-3688e510]{background:#fff;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:800px;overflow:hidden;width:95%}.modal-header[data-v-3688e510]{background:#01532b;border-bottom:1px solid #e5e7eb;color:#fff;justify-content:space-between;padding:16px 20px}.modal-header[data-v-3688e510],.modal-title[data-v-3688e510]{align-items:center;display:flex}.modal-title[data-v-3688e510]{font-size:16px;font-weight:600;gap:8px;margin:0}.close-btn[data-v-3688e510]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;opacity:.8;padding:4px}.close-btn[data-v-3688e510]:hover{background:hsla(0,0%,100%,.1);opacity:1}.stepper[data-v-3688e510]{background:#f9fafb;border-bottom:1px solid #e5e7eb;justify-content:center;padding:16px}.step[data-v-3688e510],.stepper[data-v-3688e510]{align-items:center;display:flex}.step[data-v-3688e510]{border-radius:6px;cursor:pointer;gap:8px;padding:8px 12px;transition:all .2s}.step.active[data-v-3688e510]{background:rgba(1,83,43,.1);color:#01532b}.step.completed[data-v-3688e510]{color:#059669}.step[data-v-3688e510]:not(.available){cursor:not-allowed;opacity:.5}.step-number[data-v-3688e510]{align-items:center;background:#e5e7eb;border-radius:50%;display:flex;font-size:12px;font-weight:600;height:24px;justify-content:center;width:24px}.step.active .step-number[data-v-3688e510]{background:#01532b;color:#fff}.step.completed .step-number[data-v-3688e510]{background:#059669;color:#fff}.step-label[data-v-3688e510]{font-size:14px;font-weight:500}.step-line[data-v-3688e510]{background:#e5e7eb;height:2px;margin:0 16px;width:60px}.step-line.completed[data-v-3688e510]{background:#059669}.modal-body[data-v-3688e510]{flex:1;max-height:60vh;overflow-y:auto;padding:20px}.form-grid[data-v-3688e510]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.form-group[data-v-3688e510]{display:flex;flex-direction:column}.form-group.full-width[data-v-3688e510]{grid-column:1/-1}.form-group label[data-v-3688e510]{align-items:center;color:#374151;display:flex;font-size:13px;font-weight:600;gap:6px;margin-bottom:6px}.form-group label.required[data-v-3688e510]:after{color:#ef4444;content:\"*\"}.form-group input[data-v-3688e510],.form-group select[data-v-3688e510],.form-group textarea[data-v-3688e510]{background:#fafafa;border:1px solid #d1d5db;border-radius:6px;font-size:14px;padding:8px 12px;transition:all .2s}.form-group input[data-v-3688e510]:focus,.form-group select[data-v-3688e510]:focus,.form-group textarea[data-v-3688e510]:focus{background:#fff;border-color:#01532b;box-shadow:0 0 0 2px rgba(1,83,43,.1);outline:none}.form-group input.error[data-v-3688e510],.form-group select.error[data-v-3688e510]{border-color:#ef4444}.form-group textarea[data-v-3688e510]{min-height:60px;resize:vertical}.radio-group[data-v-3688e510]{display:flex;gap:16px;margin-top:4px}.radio-group label[data-v-3688e510]{align-items:center;cursor:pointer;display:flex;font-weight:500;gap:6px;margin-bottom:0}.date-group[data-v-3688e510],.location-group[data-v-3688e510],.passport-group[data-v-3688e510]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(100px,1fr))}.photo-upload-container[data-v-3688e510]{align-items:flex-start;display:flex;gap:8px}.photo-upload[data-v-3688e510]{align-items:center;border:2px dashed #d1d5db;border-radius:8px;cursor:pointer;display:flex;height:80px;justify-content:center;overflow:hidden;position:relative;transition:border-color .2s;width:80px}.photo-upload[data-v-3688e510]:hover{border-color:#01532b}.photo-upload img[data-v-3688e510]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.photo-placeholder[data-v-3688e510]{align-items:center;color:#6b7280;display:flex;flex-direction:column;font-size:12px;gap:4px}.photo-placeholder i[data-v-3688e510]{font-size:18px}.photo-actions[data-v-3688e510]{display:flex;flex-direction:column;gap:4px}.btn-remove-photo[data-v-3688e510]{background:#ef4444;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:12px;padding:6px 8px;transition:background .2s}.btn-remove-photo[data-v-3688e510]:hover{background:#dc2626}.form-errors[data-v-3688e510]{background:#fef2f2;border:1px solid #fecaca;border-radius:6px;color:#dc2626;font-size:13px;margin-top:16px;padding:8px 12px}.modal-footer[data-v-3688e510]{background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 20px}.actions[data-v-3688e510]{display:flex;gap:12px;justify-content:space-between}.btn[data-v-3688e510]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:6px;padding:8px 16px;transition:all .2s}.btn[data-v-3688e510]:disabled{cursor:not-allowed;opacity:.6}.btn.primary[data-v-3688e510]{background:#01532b;color:#fff}.btn.primary[data-v-3688e510]:hover:not(:disabled){background:#064e3b}.btn.secondary[data-v-3688e510]{background:#6b7280;color:#fff}.btn.secondary[data-v-3688e510]:hover:not(:disabled){background:#4b5563}.btn.outline[data-v-3688e510]{background:transparent;border:1px solid #01532b;color:#01532b}.btn.outline[data-v-3688e510]:hover:not(:disabled){background:#01532b;color:#fff}@media (max-width:768px){.modal-dialog[data-v-3688e510]{max-height:95vh;width:98%}.form-grid[data-v-3688e510]{gap:12px;grid-template-columns:1fr}.stepper[data-v-3688e510]{padding:12px}.step-line[data-v-3688e510]{margin:0 12px;width:40px}.modal-body[data-v-3688e510]{padding:16px}.date-group[data-v-3688e510],.location-group[data-v-3688e510],.passport-group[data-v-3688e510]{grid-template-columns:1fr}.actions[data-v-3688e510]{flex-wrap:wrap}.btn[data-v-3688e510]{flex:1;min-width:120px}.photo-upload-container[data-v-3688e510]{align-items:flex-start;flex-direction:column}.photo-actions[data-v-3688e510]{flex-direction:row}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=3688e510&scoped=true&









var ApplicantDialogvue_type_template_id_3688e510_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.previewDialog.visible,
      callback: function ($$v) {
        _vm.$set(_vm.previewDialog, "visible", $$v);
      },
      expression: "previewDialog.visible"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "headline"
  }, [_vm._v("\n        " + _vm._s(_vm.previewDialog.title) + "\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": ""
    },
    on: {
      "click": function ($event) {
        _vm.previewDialog.visible = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "d-flex justify-center"
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": _vm.previewDialog.image,
      "max-height": "500",
      "contain": ""
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modal-dialog\" data-v-3688e510>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-3688e510><h5 class=\"modal-title\" data-v-3688e510><i class=\"fas fa-user-plus\" data-v-3688e510></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂຜູ້ສະໝັກ' : 'ເພີ່ມຜູ້ສະໝັກ') + "\n      ") + "</h5> <button class=\"close-btn\" data-v-3688e510><i class=\"fas fa-times\" data-v-3688e510></i></button></div> <div class=\"stepper\" data-v-3688e510><div" + _vm._ssrClass("step", {
    active: _vm.currentStep === 1,
    completed: _vm.currentStep > 1
  }) + " data-v-3688e510><span class=\"step-number\" data-v-3688e510>" + _vm._ssrEscape(_vm._s(_vm.currentStep > 1 ? '✓' : '1')) + "</span> <span class=\"step-label\" data-v-3688e510>ພື້ນຖານ</span></div> <div" + _vm._ssrClass("step-line", {
    completed: _vm.currentStep > 1
  }) + " data-v-3688e510></div> <div" + _vm._ssrClass("step", {
    active: _vm.currentStep === 2,
    available: _vm.step1Valid
  }) + " data-v-3688e510><span class=\"step-number\" data-v-3688e510>2</span> <span class=\"step-label\" data-v-3688e510>ລາຍລະອຽດ</span></div></div> "), _vm._ssrNode("<form data-v-3688e510>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-3688e510>", "</div>", [_vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
    display: _vm.currentStep === 1 ? '' : 'none'
  }) + " data-v-3688e510>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-3688e510>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-3688e510>", "</div>", [_vm._ssrNode("<label data-v-3688e510><i class=\"fas fa-briefcase\" data-v-3688e510></i>\n                Job Batch\n              </label> "), _c('select', {
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
    }, [_vm._v("\n                  " + _vm._s(batch.batchName) + _vm._s(batch.workPlace ? ` - ${batch.workPlace}` : '') + "\n                ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-3688e510><label class=\"required\" data-v-3688e510><i class=\"fas fa-user\" data-v-3688e510></i>\n                ຊື່\n              </label> <input type=\"text\" placeholder=\"ຊື່ຕົວຈິງ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.firstName) + _vm._ssrClass(null, {
    error: _vm.errors.firstName
  }) + " data-v-3688e510></div> <div class=\"form-group\" data-v-3688e510><label class=\"required\" data-v-3688e510><i class=\"fas fa-user\" data-v-3688e510></i>\n                ນາມສະກຸນ\n              </label> <input type=\"text\" placeholder=\"ນາມສະກຸນ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.lastName) + _vm._ssrClass(null, {
    error: _vm.errors.lastName
  }) + " data-v-3688e510></div> <div class=\"form-group\" data-v-3688e510><label class=\"required\" data-v-3688e510><i class=\"fas fa-venus-mars\" data-v-3688e510></i>\n                ເພດ\n              </label> <div class=\"radio-group\" data-v-3688e510><label data-v-3688e510><input type=\"radio\" value=\"male\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "male")) + " data-v-3688e510>\n                  ຊາຍ</label> <label data-v-3688e510><input type=\"radio\" value=\"female\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "female")) + " data-v-3688e510>\n                  ຍິງ</label></div></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-calendar\" data-v-3688e510></i>\n                ອາຍຸ\n              </label> <input type=\"number\" min=\"18\" max=\"32\" placeholder=\"ອາຍຸ\"" + _vm._ssrAttr("value", _vm.formData.age) + " data-v-3688e510></div> <div class=\"form-group full-width\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-home\" data-v-3688e510></i>\n                ທີ່ຢູ່\n              </label> <textarea rows=\"2\" placeholder=\"ທີ່ຢູ່ລະອຽດ...\" data-v-3688e510>" + _vm._ssrEscape(_vm._s(_vm.formData.address)) + "</textarea></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-passport\" data-v-3688e510></i> <input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.passportAvailability) ? _vm._i(_vm.formData.passportAvailability, null) > -1 : _vm.formData.passportAvailability) + " data-v-3688e510>\n                ມີໜັງສືເດີນທາງ\n              </label></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-camera\" data-v-3688e510></i>\n                ຮູບຜູ້ສະໝັກ\n              </label> <div class=\"photo-upload-container\" data-v-3688e510><div class=\"photo-upload\" data-v-3688e510>" + (_vm.applicantPhotoPreview || _vm.formData.applicantPhoto ? "<img" + _vm._ssrAttr("src", _vm.applicantPhotoPreview || _vm.getImageUrl(_vm.formData.applicantPhoto)) + " alt=\"Applicant\" style=\"cursor: pointer\" data-v-3688e510>" : "<div class=\"photo-placeholder\" data-v-3688e510><i class=\"fas fa-plus\" data-v-3688e510></i> <span data-v-3688e510>ເພີ່ມຮູບ</span></div>") + "</div> " + (_vm.applicantPhotoFile || _vm.formData.applicantPhoto ? "<div class=\"photo-actions\" data-v-3688e510><button type=\"button\" title=\"ລຶບຮູບ\" class=\"btn-remove-photo\" data-v-3688e510><i class=\"fas fa-trash\" data-v-3688e510></i></button></div>" : "<!---->") + "</div> <input type=\"file\" accept=\"image/*\" style=\"display: none\" data-v-3688e510></div> " + (_vm.formData.passportAvailability ? "<div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-id-badge\" data-v-3688e510></i>\n                ຮູບໜັງສື\n              </label> <div class=\"photo-upload-container\" data-v-3688e510><div class=\"photo-upload\" data-v-3688e510>" + (_vm.passportPhotoPreview || _vm.formData.passportPhoto ? "<img" + _vm._ssrAttr("src", _vm.passportPhotoPreview || _vm.getImageUrl(_vm.formData.passportPhoto)) + " alt=\"Passport\" style=\"cursor: pointer\" data-v-3688e510>" : "<div class=\"photo-placeholder\" data-v-3688e510><i class=\"fas fa-plus\" data-v-3688e510></i> <span data-v-3688e510>ເພີ່ມຮູບ</span></div>") + "</div> " + (_vm.passportPhotoFile || _vm.formData.passportPhoto ? "<div class=\"photo-actions\" data-v-3688e510><button type=\"button\" title=\"ລຶບຮູບ\" class=\"btn-remove-photo\" data-v-3688e510><i class=\"fas fa-trash\" data-v-3688e510></i></button></div>" : "<!---->") + "</div> <input type=\"file\" accept=\"image/*\" style=\"display: none\" data-v-3688e510></div>" : "<!---->"))], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
    display: _vm.currentStep === 2 ? '' : 'none'
  }) + " data-v-3688e510>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-3688e510>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-3688e510>", "</div>", [_vm._ssrNode("<label data-v-3688e510><i class=\"fas fa-flag\" data-v-3688e510></i>\n                ສະຖານະ\n              </label> "), _c('select', {
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
      "value": "rejected"
    }
  }, [_vm._v("Rejected")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-3688e510><label class=\"required\" data-v-3688e510><i class=\"fas fa-phone\" data-v-3688e510></i>\n                ເບີໂທ\n              </label> <input type=\"tel\" placeholder=\"+856 20 12345678\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.phone) + _vm._ssrClass(null, {
    error: _vm.errors.phone
  }) + " data-v-3688e510></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-exclamation-triangle\" data-v-3688e510></i>\n                ເບີສຸກເສີນ\n              </label> <input type=\"tel\" placeholder=\"+856 20 87654321\"" + _vm._ssrAttr("value", _vm.formData.emergencyContactNo) + " data-v-3688e510></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-3688e510>", "</div>", [_vm._ssrNode("<label data-v-3688e510><i class=\"fas fa-heart\" data-v-3688e510></i>\n                ສະຖານະການແຕ່ງງານ\n              </label> "), _c('select', {
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
  }, [_vm._v("ເປັນເມ່າຍ")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-building\" data-v-3688e510></i>\n                ສະຖານທີ່ເຮັດວຽກ\n              </label> <input type=\"text\" placeholder=\"ບໍລິສັດ / ໂຮງງານ\"" + _vm._ssrAttr("value", _vm.formData.workPlace) + " data-v-3688e510></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-map-marker-alt\" data-v-3688e510></i>\n                ບ້ານ/ເມືອງ/ແຂວງ\n              </label> <div class=\"location-group\" data-v-3688e510><input type=\"text\" placeholder=\"ບ້ານ\"" + _vm._ssrAttr("value", _vm.formData.village) + " data-v-3688e510> <input type=\"text\" placeholder=\"ເມືອງ\"" + _vm._ssrAttr("value", _vm.formData.city) + " data-v-3688e510> <input type=\"text\" placeholder=\"ແຂວງ\"" + _vm._ssrAttr("value", _vm.formData.district) + " data-v-3688e510></div></div> " + (_vm.formData.passportAvailability ? "<div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-id-card\" data-v-3688e510></i>\n                ເລກ/ໝົດອາຍຸ\n              </label> <div class=\"passport-group\" data-v-3688e510><input type=\"text\" placeholder=\"PA1234567\"" + _vm._ssrAttr("value", _vm.formData.passportNo) + " data-v-3688e510> <input type=\"date\"" + _vm._ssrAttr("min", _vm.today) + _vm._ssrAttr("value", _vm.formData.passportExpiredDate) + " data-v-3688e510></div></div>" : "<!---->") + " <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-calendar\" data-v-3688e510></i>\n                ວັນທີສໍາຄັນ\n              </label> <div class=\"date-group\" data-v-3688e510><input type=\"date\" placeholder=\"ເລີ່ມສັນຍາ\"" + _vm._ssrAttr("value", _vm.formData.contactStartDate) + " data-v-3688e510> <input type=\"date\" placeholder=\"ສິ້ນສຸດສັນຍາ\"" + _vm._ssrAttr("value", _vm.formData.contactEndDate) + " data-v-3688e510></div></div> <div class=\"form-group\" data-v-3688e510><label data-v-3688e510><i class=\"fas fa-clock\" data-v-3688e510></i>\n                ເວລາ\n              </label> <div class=\"date-group\" data-v-3688e510><input type=\"datetime-local\" placeholder=\"ລົງທະບຽນ\"" + _vm._ssrAttr("value", _vm.formData.registertDate) + " data-v-3688e510> <input type=\"datetime-local\" placeholder=\"ສໍາພາດ\"" + _vm._ssrAttr("value", _vm.formData.interviewExamDate) + " data-v-3688e510></div></div>")], 2)]), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-3688e510><strong data-v-3688e510>ແກ້ໄຂ:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formErrors.join(', ')) + "\n        ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer\" data-v-3688e510>" + (_vm.currentStep === 1 ? "<div class=\"actions\" data-v-3688e510><button type=\"button\" class=\"btn secondary\" data-v-3688e510>\n            ຍົກເລີກ\n          </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.step1Valid || _vm.loading) + " class=\"btn outline\" data-v-3688e510>" + _vm._ssrEscape("\n            " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : 'ບັນທຶກ') + "\n          ") + "</button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.step1Valid) + " class=\"btn primary\" data-v-3688e510>\n            ສືບຕໍ່\n          </button></div>" : "<!---->") + " " + (_vm.currentStep === 2 ? "<div class=\"actions\" data-v-3688e510><button type=\"button\" class=\"btn secondary\" data-v-3688e510>\n            ກັບຄືນ\n          </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", !_vm.isFormValid || _vm.loading) + " class=\"btn primary\" data-v-3688e510>" + _vm._ssrEscape("\n            " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n          ") + "</button></div>" : "<!---->") + "</div>")], 2)], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=3688e510&scoped=true&

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
    // apiBaseUrl: {
    //   type: String,
    //   default: this.$axios.defaults.baseURL || '',
    // },
  },

  data() {
    return {
      previewDialog: {
        visible: false,
        title: '',
        image: ''
      },
      loading: false,
      currentStep: 1,
      applicantPhotoPreview: null,
      passportPhotoPreview: null,
      applicantPhotoFile: null,
      passportPhotoFile: null,
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
        this.passportPhotoFile = null;
      }
    }
  },
  methods: {
    openPreview(title, image) {
      this.previewDialog.title = title;
      this.previewDialog.image = image;
      this.previewDialog.visible = true;
    },
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
        const formData = this.createFormData(true); // partial save flag
        this.$emit('save', formData, true); // emit with partial flag
      } catch (error) {
        this.formErrors.push('An error occurred while saving');
        console.error('Save error:', error);
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

        // Reset file previews when editing
        this.applicantPhotoPreview = null;
        this.passportPhotoPreview = null;
        this.applicantPhotoFile = null;
        this.passportPhotoFile = null;
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
      this.applicantPhotoFile = null;
      this.passportPhotoFile = null;
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
    createFormData(isPartial = false) {
      const formData = new FormData();

      // Add text fields
      const fieldsToInclude = isPartial ? ['firstName', 'lastName', 'gender', 'age', 'address', 'passportAvailability', 'jobBatchId', 'status'] : Object.keys(this.formData);
      fieldsToInclude.forEach(key => {
        const value = this.formData[key];
        // Skip photo path fields as we'll handle files separately
        if (key !== 'passportPhoto' && key !== 'applicantPhoto') {
          if (value !== '' && value !== null) {
            formData.append(key, value);
          }
        }
      });

      // ✅ Applicant Photo: file → path → empty
      if (this.applicantPhotoFile) {
        formData.append('applicantPhoto', this.applicantPhotoFile);
      } else if (this.formData.applicantPhoto) {
        formData.append('applicantPhoto', this.formData.applicantPhoto);
      } else {
        formData.append('applicantPhoto', '');
      }

      // ✅ Passport Photo: only if passport is available
      if (this.formData.passportAvailability) {
        if (this.passportPhotoFile) {
          formData.append('passportPhoto', this.passportPhotoFile);
        } else if (this.formData.passportPhoto) {
          formData.append('passportPhoto', this.formData.passportPhoto);
        } else {
          formData.append('passportPhoto', '');
        }
      }
      return formData;
    },
    async saveApplicant() {
      if (!this.validateForm()) return;
      this.loading = true;
      try {
        const formData = this.createFormData();
        this.$emit('save', formData, false);
      } catch (error) {
        this.formErrors.push('Error saving');
        console.error('Save error:', error);
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

      // Clear previous errors
      this.formErrors = this.formErrors.filter(err => !err.includes('ຮູບ'));
      if (!file.type.startsWith('image/')) {
        this.formErrors.push('ເລືອກຮູບພາບເທົ່ານັ້ນ');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        this.formErrors.push('ຮູບໃຫຍ່ເກີນ 5MB');
        return;
      }

      // Store the file
      if (type === 'applicant') {
        this.applicantPhotoFile = file;
      } else if (type === 'passport') {
        this.passportPhotoFile = file;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = e => {
        if (type === 'applicant') {
          this.applicantPhotoPreview = e.target.result;
        } else if (type === 'passport') {
          this.passportPhotoPreview = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    },
    removePhoto(type) {
      if (type === 'applicant') {
        this.applicantPhotoFile = null;
        this.applicantPhotoPreview = null;
        this.formData.applicantPhoto = '';
        if (this.$refs.applicantFileInput) {
          this.$refs.applicantFileInput.value = '';
        }
      } else if (type === 'passport') {
        this.passportPhotoFile = null;
        this.passportPhotoPreview = null;
        this.formData.passportPhoto = '';
        if (this.$refs.passportFileInput) {
          this.$refs.passportFileInput.value = '';
        }
      }
    },
    getImageUrl(path) {
      if (!path) return null;
      // If path is already a full URL, return it
      if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
      }
      // Otherwise, prepend the API base URL
      return `${this.$axios.defaults.baseURL}${path}`;
    }
  }
});
// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var applicants_ApplicantDialogvue_type_script_lang_js_ = (ApplicantDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(619)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_ApplicantDialogvue_type_script_lang_js_,
  ApplicantDialogvue_type_template_id_3688e510_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "3688e510",
  "519f9c22"
  
)

/* harmony default export */ var ApplicantDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=applicants-applicant-dialog.js.map