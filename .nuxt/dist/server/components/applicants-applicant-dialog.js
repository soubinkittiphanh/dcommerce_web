exports.ids = [18];
exports.modules = {

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(629);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1428a2f5", content, true, context)
};

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_227ba5fc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(541);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_227ba5fc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_227ba5fc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_227ba5fc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_227ba5fc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".applicant-form[data-v-227ba5fc]{background:#fff;display:flex;flex-direction:column;height:100vh}.form-header[data-v-227ba5fc]{background:#01532b;color:#fff;padding:16px 20px}.form-header[data-v-227ba5fc],.stepper[data-v-227ba5fc]{border-bottom:1px solid #e5e7eb;flex-shrink:0}.stepper[data-v-227ba5fc]{align-items:center;background:#f9fafb;display:flex;justify-content:center;padding:16px}.form-content[data-v-227ba5fc]{background:#fafafa;flex:1;overflow-y:auto;padding:20px}.form-footer[data-v-227ba5fc]{background:#fff;border-top:1px solid #e5e7eb;flex-shrink:0;padding:40px 20px}.form-title[data-v-227ba5fc]{font-size:18px;font-weight:600;gap:10px;margin:0}.form-title[data-v-227ba5fc],.step[data-v-227ba5fc]{align-items:center;display:flex}.step[data-v-227ba5fc]{border-radius:8px;cursor:pointer;gap:8px;padding:8px 16px;transition:all .2s}.step.active[data-v-227ba5fc]{background:rgba(1,83,43,.1);color:#01532b}.step.completed[data-v-227ba5fc]{color:#059669}.step[data-v-227ba5fc]:not(.available){cursor:not-allowed;opacity:.5}.step-number[data-v-227ba5fc]{align-items:center;background:#e5e7eb;border-radius:50%;display:flex;font-size:13px;font-weight:600;height:28px;justify-content:center;width:28px}.step.active .step-number[data-v-227ba5fc]{background:#01532b;color:#fff}.step.completed .step-number[data-v-227ba5fc]{background:#059669;color:#fff}.step-label[data-v-227ba5fc]{font-size:15px;font-weight:500}.step-line[data-v-227ba5fc]{background:#e5e7eb;height:2px;margin:0 16px;width:60px}.step-line.completed[data-v-227ba5fc]{background:#059669}.split-layout[data-v-227ba5fc]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 380px}.left-section[data-v-227ba5fc],.right-section[data-v-227ba5fc]{background:#fff;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);padding:20px}.photo-section[data-v-227ba5fc]{display:flex;flex-direction:column;gap:10px}.photo-section label[data-v-227ba5fc]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px}.photo-upload[data-v-227ba5fc]{align-items:center;background:#f9fafb;border:2px dashed #d1d5db;border-radius:8px;cursor:pointer;display:flex;height:240px;justify-content:center;overflow:hidden;transition:all .3s;width:100%}.photo-upload[data-v-227ba5fc]:hover{background:#f0fdf4;border-color:#01532b}.photo-upload img[data-v-227ba5fc]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.photo-placeholder[data-v-227ba5fc]{align-items:center;color:#6b7280;display:flex;flex-direction:column;font-size:14px;gap:10px}.photo-placeholder i[data-v-227ba5fc]{color:#9ca3af;font-size:40px}.btn-remove[data-v-227ba5fc]{align-items:center;background:#ef4444;border:none;border-radius:6px;color:#fff;cursor:pointer;display:flex;font-size:13px;gap:6px;justify-content:center;padding:8px 16px;transition:background .2s}.btn-remove[data-v-227ba5fc]:hover{background:#dc2626}.passport-photo-section[data-v-227ba5fc]{align-items:center;display:flex;gap:12px}.photo-upload-small[data-v-227ba5fc]{align-items:center;background:#f9fafb;border:2px dashed #d1d5db;border-radius:8px;cursor:pointer;display:flex;height:150px;justify-content:center;overflow:hidden;transition:all .3s;width:150px}.photo-upload-small[data-v-227ba5fc]:hover{background:#f0fdf4;border-color:#01532b}.photo-upload-small img[data-v-227ba5fc]{cursor:pointer;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.photo-placeholder-small[data-v-227ba5fc]{align-items:center;color:#6b7280;display:flex;flex-direction:column;font-size:13px;gap:8px}.photo-placeholder-small i[data-v-227ba5fc]{color:#9ca3af;font-size:32px}.btn-remove-small[data-v-227ba5fc]{align-items:center;background:#ef4444;border:none;border-radius:6px;color:#fff;cursor:pointer;display:flex;font-size:12px;gap:4px;padding:8px 12px;transition:background .2s}.btn-remove-small[data-v-227ba5fc]:hover{background:#dc2626}.batch-summary-card[data-v-227ba5fc]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,.1);grid-column:1/-1;margin-bottom:20px;overflow:hidden}.summary-header[data-v-227ba5fc]{align-items:center;background:hsla(0,0%,100%,.2);color:#fff;display:flex;font-size:15px;font-weight:600;gap:8px;padding:12px 16px}.summary-header i[data-v-227ba5fc]{font-size:18px}.summary-content[data-v-227ba5fc]{grid-gap:12px;background:#fff;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));padding:16px}.summary-row[data-v-227ba5fc]{display:flex;flex-direction:column;gap:4px}.summary-row strong[data-v-227ba5fc]{color:#6b7280;font-size:12px;font-weight:600}.summary-row span[data-v-227ba5fc]{color:#1f2937;font-size:14px;font-weight:500}.priority-low[data-v-227ba5fc]{color:#10b981;font-weight:600}.priority-medium[data-v-227ba5fc]{color:#f59e0b;font-weight:600}.priority-high[data-v-227ba5fc]{color:#ef4444;font-weight:600}.priority-urgent[data-v-227ba5fc]{animation:pulse-227ba5fc 2s infinite;color:#dc2626;font-weight:700}.status-draft[data-v-227ba5fc]{color:#6b7280;font-weight:600}.status-active[data-v-227ba5fc]{color:#10b981;font-weight:600}.status-completed[data-v-227ba5fc]{color:#3b82f6;font-weight:600}.status-cancelled[data-v-227ba5fc]{color:#ef4444;font-weight:600}@keyframes pulse-227ba5fc{0%,to{opacity:1}50%{opacity:.7}}.form-grid[data-v-227ba5fc]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(2,1fr)}.form-grid-step2[data-v-227ba5fc]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(3,1fr)}.form-group[data-v-227ba5fc]{display:flex;flex-direction:column}.form-group.full-width[data-v-227ba5fc],.form-group.passport-photo-group[data-v-227ba5fc]{grid-column:1/-1}.form-group label[data-v-227ba5fc]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:6px;margin-bottom:6px}.form-group label.required[data-v-227ba5fc]:after{color:#ef4444;content:\"*\";margin-left:2px}.form-group input[data-v-227ba5fc],.form-group select[data-v-227ba5fc],.form-group textarea[data-v-227ba5fc]{background:#fff;border:1px solid #d1d5db;border-radius:6px;font-size:14px;padding:10px 12px;transition:all .2s}.form-group input[data-v-227ba5fc]:focus,.form-group select[data-v-227ba5fc]:focus,.form-group textarea[data-v-227ba5fc]:focus{border-color:#01532b;box-shadow:0 0 0 3px rgba(1,83,43,.1);outline:none}.form-group input.error[data-v-227ba5fc],.form-group select.error[data-v-227ba5fc]{border-color:#ef4444}.form-group textarea[data-v-227ba5fc]{min-height:60px;resize:vertical}.radio-group[data-v-227ba5fc]{display:flex;gap:16px;margin-top:4px}.radio-group label[data-v-227ba5fc]{align-items:center;cursor:pointer;display:flex;font-weight:500;gap:6px;margin-bottom:0}.form-errors[data-v-227ba5fc]{background:#fef2f2;border:1px solid #fecaca;border-radius:6px;color:#dc2626;font-size:13px;margin-top:16px;padding:10px 14px}.actions[data-v-227ba5fc]{display:flex;gap:12px;justify-content:space-between}.btn[data-v-227ba5fc]{border:none;border-radius:6px;cursor:pointer;font-size:14px;font-weight:500;padding:10px 20px;transition:all .2s}.btn[data-v-227ba5fc]:disabled{cursor:not-allowed;opacity:.6}.btn.primary[data-v-227ba5fc]{background:#01532b;color:#fff}.btn.primary[data-v-227ba5fc]:hover:not(:disabled){background:#064e3b}.btn.secondary[data-v-227ba5fc]{background:#6b7280;color:#fff}.btn.secondary[data-v-227ba5fc]:hover:not(:disabled){background:#4b5563}.btn.outline[data-v-227ba5fc]{background:transparent;border:2px solid #01532b;color:#01532b}.btn.outline[data-v-227ba5fc]:hover:not(:disabled){background:#01532b;color:#fff}@media (max-width:1024px){.split-layout[data-v-227ba5fc]{grid-template-columns:1fr}.right-section[data-v-227ba5fc]{order:-1}.photo-upload[data-v-227ba5fc]{height:200px}.form-grid-step2[data-v-227ba5fc],.summary-content[data-v-227ba5fc]{grid-template-columns:repeat(2,1fr)}}@media (max-width:768px){.form-content[data-v-227ba5fc],.left-section[data-v-227ba5fc],.right-section[data-v-227ba5fc]{padding:16px}.form-grid[data-v-227ba5fc],.form-grid-step2[data-v-227ba5fc]{gap:12px;grid-template-columns:1fr}.stepper[data-v-227ba5fc]{padding:12px}.step-line[data-v-227ba5fc]{margin:0 12px;width:40px}.actions[data-v-227ba5fc]{flex-wrap:wrap}.btn[data-v-227ba5fc]{flex:1;min-width:120px}.photo-upload[data-v-227ba5fc]{height:180px}.summary-content[data-v-227ba5fc]{grid-template-columns:1fr}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=227ba5fc&scoped=true&


var ApplicantDialogvue_type_template_id_227ba5fc_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "applicant-form"
  }, [_vm._ssrNode("<div class=\"form-header\" data-v-227ba5fc><h5 class=\"form-title\" data-v-227ba5fc><i class=\"fas fa-user-plus\" data-v-227ba5fc></i>" + _vm._ssrEscape("\n      " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂຜູ້ສະໝັກ' : 'ເພີ່ມຜູ້ສະໝັກ') + "\n    ") + "</h5></div> <div class=\"stepper\" data-v-227ba5fc><div" + _vm._ssrClass("step", {
    active: _vm.currentStep === 1,
    completed: _vm.currentStep > 1
  }) + " data-v-227ba5fc><span class=\"step-number\" data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.currentStep > 1 ? '✓' : '1')) + "</span> <span class=\"step-label\" data-v-227ba5fc>ຮັບສະໝັກ</span></div> <div" + _vm._ssrClass("step-line", {
    completed: _vm.currentStep > 1
  }) + " data-v-227ba5fc></div> <div" + _vm._ssrClass("step", {
    active: _vm.currentStep === 2,
    available: _vm.step1Valid
  }) + " data-v-227ba5fc><span class=\"step-number\" data-v-227ba5fc>2</span> <span class=\"step-label\" data-v-227ba5fc> ລົງທະບຽນ</span></div></div> "), _vm._ssrNode("<div class=\"form-content\" data-v-227ba5fc>", "</div>", [_vm._ssrNode("<form data-v-227ba5fc>", "</form>", [_vm._ssrNode("<div class=\"split-layout\"" + _vm._ssrStyle(null, null, {
    display: _vm.currentStep === 1 ? '' : 'none'
  }) + " data-v-227ba5fc>", "</div>", [_vm._ssrNode("<div class=\"left-section\" data-v-227ba5fc>", "</div>", [_vm._ssrNode("<div class=\"form-grid\" data-v-227ba5fc>", "</div>", [_vm._ssrNode("<div class=\"form-group full-width\" data-v-227ba5fc>", "</div>", [_vm._ssrNode("<label data-v-227ba5fc><i class=\"fas fa-briefcase\" data-v-227ba5fc></i> Job Batch</label> "), _c('select', {
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
    }, [_vm._v("\n                  " + _vm._s(batch.mou.jobCode) + " - " + _vm._s(batch.mou.jobTitle) + " -\n                  " + _vm._s(batch.mou.workLocation) + "\n                ")]);
  })], 2)], 2), _vm._ssrNode(" " + (_vm.selectedBatch ? "<div class=\"batch-summary-card\" data-v-227ba5fc><div class=\"summary-header\" data-v-227ba5fc><i class=\"fas fa-info-circle\" data-v-227ba5fc></i> <span data-v-227ba5fc>ຂໍ້ມູນ Job Batch ທີ່ເລືອກ</span></div> <div class=\"summary-content\" data-v-227ba5fc><div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ຮອບ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.runningNo || _vm.selectedBatch.batchName)) + "</span></div> " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>Job Code:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.jobCode)) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ບໍລິສັດ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.employerCompany || '-')) + "</span></div>" : "<!---->") + " <div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ວຽກທີ່ສະໝັກ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.jobTitle || 0) + " ຄົນ") + "</span></div> " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ສະຖານທີ່ເຮັດວຽກ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.workLocation || '-')) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.batchStartDate ? "<div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ວັນທີ່ເລີມຕົ້ນສັນຍາ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.selectedBatch.batchStartDate))) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.batchEndDate ? "<div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ວັນທີ່ສິນສຸດສັນຍາ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.selectedBatch.batchEndDate))) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " <div class=\"form-group\" data-v-227ba5fc><label class=\"required\" data-v-227ba5fc><i class=\"fas fa-user\" data-v-227ba5fc></i> ຊື່</label> <input type=\"text\" placeholder=\"ຊື່ຕົວຈິງ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.firstName) + _vm._ssrClass(null, {
    error: _vm.errors.firstName
  }) + " data-v-227ba5fc></div> <div class=\"form-group\" data-v-227ba5fc><label class=\"required\" data-v-227ba5fc><i class=\"fas fa-user\" data-v-227ba5fc></i> ນາມສະກຸນ</label> <input type=\"text\" placeholder=\"ນາມສະກຸນ\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.lastName) + _vm._ssrClass(null, {
    error: _vm.errors.lastName
  }) + " data-v-227ba5fc></div> <div class=\"form-group\" data-v-227ba5fc><label class=\"required\" data-v-227ba5fc><i class=\"fas fa-venus-mars\" data-v-227ba5fc></i> ເພດ</label> <div class=\"radio-group\" data-v-227ba5fc><label data-v-227ba5fc><input type=\"radio\" value=\"male\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "male")) + " data-v-227ba5fc>\n                  ຊາຍ</label> <label data-v-227ba5fc><input type=\"radio\" value=\"female\" required=\"required\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.gender, "female")) + " data-v-227ba5fc>\n                  ຍິງ</label></div></div> <div class=\"form-group\" data-v-227ba5fc><label data-v-227ba5fc><i class=\"fas fa-calendar\" data-v-227ba5fc></i> ອາຍຸ</label> <input type=\"number\" min=\"18\" max=\"32\" placeholder=\"ອາຍຸ\"" + _vm._ssrAttr("value", _vm.formData.age) + " data-v-227ba5fc></div> <div class=\"form-group full-width\" data-v-227ba5fc><label data-v-227ba5fc><i class=\"fas fa-home\" data-v-227ba5fc></i> ທີ່ຢູ່</label> <textarea rows=\"2\" placeholder=\"ທີ່ຢູ່ລະອຽດ...\" data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.formData.address)) + "</textarea></div> <div class=\"form-group\" data-v-227ba5fc><label data-v-227ba5fc><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.formData.passportAvailability) ? _vm._i(_vm.formData.passportAvailability, null) > -1 : _vm.formData.passportAvailability) + " data-v-227ba5fc> <i class=\"fas fa-passport\" data-v-227ba5fc></i> ມີໜັງສືເດີນທາງ\n              </label></div>")], 2)]), _vm._ssrNode(" <div class=\"right-section\" data-v-227ba5fc><div class=\"photo-section\" data-v-227ba5fc><label data-v-227ba5fc><i class=\"fas fa-camera\" data-v-227ba5fc></i> ຮູບຜູ້ສະໝັກ</label> <div class=\"photo-upload\" data-v-227ba5fc>" + (_vm.applicantPhotoPreview || _vm.formData.applicantPhoto ? "<img" + _vm._ssrAttr("src", _vm.applicantPhotoPreview || _vm.getImageUrl(_vm.formData.applicantPhoto)) + " alt=\"Applicant\" data-v-227ba5fc>" : "<div class=\"photo-placeholder\" data-v-227ba5fc><i class=\"fas fa-camera\" data-v-227ba5fc></i> <span data-v-227ba5fc>ເພີ່ມຮູບຜູ້ສະໝັກ</span></div>") + "</div> " + (_vm.applicantPhotoFile || _vm.formData.applicantPhoto ? "<button type=\"button\" class=\"btn-remove\" data-v-227ba5fc><i class=\"fas fa-trash\" data-v-227ba5fc></i> ລຶບຮູບ\n            </button>" : "<!---->") + " <input type=\"file\" accept=\"image/*\" hidden=\"hidden\" data-v-227ba5fc></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
    display: _vm.currentStep === 2 ? '' : 'none'
  }) + " data-v-227ba5fc>", "</div>", [_vm._ssrNode((_vm.selectedBatch ? "<div class=\"batch-summary-card\" data-v-227ba5fc><div class=\"summary-header\" data-v-227ba5fc><i class=\"fas fa-info-circle\" data-v-227ba5fc></i> <span data-v-227ba5fc>ຂໍ້ມູນ Job Batch ທີ່ເລືອກ</span></div> <div class=\"summary-content\" data-v-227ba5fc><div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ຮອບ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.runningNo || _vm.selectedBatch.batchName)) + "</span></div> " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>Job Code:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.jobCode)) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ບໍລິສັດ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.employerCompany || '-')) + "</span></div>" : "<!---->") + " <div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ວຽກທີ່ສະໝັກ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.jobTitle || 0) + " ຄົນ") + "</span></div> " + (_vm.selectedBatch.mou ? "<div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ສະຖານທີ່ເຮັດວຽກ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.selectedBatch.mou.workLocation || '-')) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.batchStartDate ? "<div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ວັນທີ່ເລີມຕົ້ນສັນຍາ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.selectedBatch.batchStartDate))) + "</span></div>" : "<!---->") + " " + (_vm.selectedBatch.batchEndDate ? "<div class=\"summary-row\" data-v-227ba5fc><strong data-v-227ba5fc>ວັນທີ່ສິນສຸດສັນຍາ:</strong> <span data-v-227ba5fc>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.selectedBatch.batchEndDate))) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"form-grid-step2\" data-v-227ba5fc>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-227ba5fc>", "</div>", [_vm._ssrNode("<label data-v-227ba5fc><i class=\"fas fa-flag\" data-v-227ba5fc></i> ສະຖານະ</label> "), _c('select', {
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
  }, [_vm._v("ສະໝັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "REGISTER"
    }
  }, [_vm._v("ລົງທະບຽນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CONFIRM"
    }
  }, [_vm._v("ພ້ອມເດີນທາງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SUBMITED"
    }
  }, [_vm._v("ເດີນທາງແລ້ວ")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-227ba5fc><label class=\"required\" data-v-227ba5fc><i class=\"fas fa-phone\" data-v-227ba5fc></i> ເບີໂທ</label> <input type=\"tel\" placeholder=\"+856 20 12345678\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.phone) + _vm._ssrClass(null, {
    error: _vm.errors.phone
  }) + " data-v-227ba5fc></div> <div class=\"form-group\" data-v-227ba5fc><label data-v-227ba5fc><i class=\"fas fa-exclamation-triangle\" data-v-227ba5fc></i> ເບີສຸກເສີນ</label> <input type=\"tel\" placeholder=\"+856 20 87654321\"" + _vm._ssrAttr("value", _vm.formData.emergencyContactNo) + " data-v-227ba5fc></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-227ba5fc>", "</div>", [_vm._ssrNode("<label data-v-227ba5fc><i class=\"fas fa-heart\" data-v-227ba5fc></i> ສະຖານະການແຕ່ງງານ</label> "), _c('select', {
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
  }, [_vm._v("ເປັນເມ່າຍ")])])], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-227ba5fc><label data-v-227ba5fc><i class=\"fas fa-map-marker-alt\" data-v-227ba5fc></i> ບ້ານ</label> <input type=\"text\" placeholder=\"ບ້ານ\"" + _vm._ssrAttr("value", _vm.formData.village) + " data-v-227ba5fc></div> <div class=\"form-group\" data-v-227ba5fc><label data-v-227ba5fc><i class=\"fas fa-map-marker-alt\" data-v-227ba5fc></i> ເມືອງ</label> <input type=\"text\" placeholder=\"ເມືອງ\"" + _vm._ssrAttr("value", _vm.formData.city) + " data-v-227ba5fc></div> <div class=\"form-group\" data-v-227ba5fc><label data-v-227ba5fc><i class=\"fas fa-map-marker-alt\" data-v-227ba5fc></i> ແຂວງ</label> <input type=\"text\" placeholder=\"ແຂວງ\"" + _vm._ssrAttr("value", _vm.formData.district) + " data-v-227ba5fc></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-227ba5fc>", "</div>", [_vm._ssrNode("<label data-v-227ba5fc><i class=\"fas fa-building\" data-v-227ba5fc></i> ຕົວແທນສັນຫາ</label> "), _c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.agencies,
      "item-text": "agencyName",
      "item-value": "id",
      "label": "ຕົວແທນ",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-domain",
      "loading": _vm.loadingAgencies,
      "clearable": ""
    },
    model: {
      value: _vm.formData.agencyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "agencyId", $$v);
      },
      expression: "formData.agencyId"
    }
  })], 2), _vm._ssrNode(" " + (_vm.formData.passportAvailability ? "<div class=\"form-group passport-photo-group\" data-v-227ba5fc><label data-v-227ba5fc><i class=\"fas fa-id-badge\" data-v-227ba5fc></i> ຮູບໜັງສື</label> <div class=\"passport-photo-section\" data-v-227ba5fc><div class=\"photo-upload-small\" data-v-227ba5fc>" + (_vm.passportPhotoPreview || _vm.formData.passportPhoto ? "<img" + _vm._ssrAttr("src", _vm.passportPhotoPreview || _vm.getImageUrl(_vm.formData.passportPhoto)) + " alt=\"Passport\" data-v-227ba5fc>" : "<div class=\"photo-placeholder-small\" data-v-227ba5fc><i class=\"fas fa-id-badge\" data-v-227ba5fc></i> <span data-v-227ba5fc>ເພີ່ມຮູບໜັງສື</span></div>") + "</div> " + (_vm.passportPhotoFile || _vm.formData.passportPhoto ? "<button type=\"button\" class=\"btn-remove-small\" data-v-227ba5fc><i class=\"fas fa-trash\" data-v-227ba5fc></i> ລຶບ\n              </button>" : "<!---->") + "</div> <input type=\"file\" accept=\"image/*\" hidden=\"hidden\" data-v-227ba5fc></div>" : "<!---->") + " " + (_vm.formData.passportAvailability ? "<div class=\"form-group\" data-v-227ba5fc><label data-v-227ba5fc><i class=\"fas fa-id-card\" data-v-227ba5fc></i> ເລກໜັງສື</label> <input type=\"text\" placeholder=\"PA1234567\"" + _vm._ssrAttr("value", _vm.formData.passportNo) + " data-v-227ba5fc></div>" : "<!---->") + " " + (_vm.formData.passportAvailability ? "<div class=\"form-group\" data-v-227ba5fc><label data-v-227ba5fc><i class=\"fas fa-calendar-times\" data-v-227ba5fc></i> ອອກວັນທີ</label> <input type=\"date\"" + _vm._ssrAttr("value", _vm.formData.passportIssueDate) + " data-v-227ba5fc></div>" : "<!---->") + " " + (_vm.formData.passportAvailability ? "<div class=\"form-group\" data-v-227ba5fc><label data-v-227ba5fc><i class=\"fas fa-calendar-times\" data-v-227ba5fc></i> ຫມົດອາຍຸວັນທີ</label> <input type=\"date\"" + _vm._ssrAttr("min", _vm.today) + _vm._ssrAttr("value", _vm.formData.passportExpiredDate) + " data-v-227ba5fc></div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" " + (_vm.formErrors.length ? "<div class=\"form-errors\" data-v-227ba5fc><strong data-v-227ba5fc>ແກ້ໄຂ:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formErrors.join(', ')) + "\n      ") + "</div>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"form-footer\" data-v-227ba5fc>" + (_vm.currentStep === 1 ? "<div class=\"actions\" data-v-227ba5fc><button type=\"button\" class=\"btn secondary\" data-v-227ba5fc>\n        ຍົກເລີກ\n      </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.step1Valid || _vm.loading) + " class=\"btn outline\" data-v-227ba5fc>" + _vm._ssrEscape("\n        " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : 'ບັນທຶກ') + "\n      ") + "</button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.step1Valid) + " class=\"btn primary\" data-v-227ba5fc>\n        ລົງທະບຽນ\n      </button></div>" : "<!---->") + " " + (_vm.currentStep === 2 ? "<div class=\"actions\" data-v-227ba5fc><button type=\"button\" class=\"btn secondary\" data-v-227ba5fc>\n        ກັບຄືນ\n      </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.isFormValid || _vm.loading) + " class=\"btn primary\" data-v-227ba5fc>" + _vm._ssrEscape("\n        " + _vm._s(_vm.loading ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n      ") + "</button></div>" : "<!---->") + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/applicants/ApplicantDialog/index.vue?vue&type=template&id=227ba5fc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/applicants/ApplicantDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ApplicantDialogvue_type_script_lang_js_ = ({
  name: 'ApplicantForm',
  props: {
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
      agencies: [],
      loadingAgencies: false,
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
        passportIssueDate: '',
        workPlace: '',
        contactStartDate: '',
        contactEndDate: '',
        registertDate: '',
        interviewExamDate: '',
        passportPhoto: '',
        applicantPhoto: '',
        jobBatchId: null,
        agencyId: null,
        status: 'INTERVIEW'
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      var _this$applicant;
      return (_this$applicant = this.applicant) === null || _this$applicant === void 0 ? void 0 : _this$applicant.id;
    },
    selectedBatch() {
      if (!this.formData.jobBatchId) return null;
      return this.jobBatches.find(batch => batch.id === this.formData.jobBatchId);
    },
    today() {
      return new Date().toISOString().split('T')[0];
    },
    step1Valid() {
      return this.formData.firstName.trim() && this.formData.lastName.trim() && this.formData.gender;
    },
    isFormValid() {
      var _this$formData$phone;
      const step2Valid = this.currentStep === 2 ? (_this$formData$phone = this.formData.phone) === null || _this$formData$phone === void 0 ? void 0 : _this$formData$phone.trim() : true;
      return this.step1Valid && step2Valid && !this.formErrors.length;
    }
  },
  watch: {
    applicant: {
      handler() {
        this.initializeForm();
      },
      immediate: true,
      deep: true
    },
    'formData.passportAvailability'(val) {
      if (!val) {
        this.formData.passportNo = this.formData.passportExpiredDate = this.formData.passportIssueDate = this.formData.passportPhoto = '';
        this.passportPhotoPreview = this.passportPhotoFile = null;
      }
    }
  },
  mounted() {
    var _this$jobBatches;
    if (!((_this$jobBatches = this.jobBatches) !== null && _this$jobBatches !== void 0 && _this$jobBatches.length)) this.$emit('load-job-batches');
    this.fetchAgencies();
  },
  methods: {
    async fetchAgencies() {
      this.loadingAgencies = true;
      try {
        const response = await this.$axios.$get('/api/agency');
        if (response.success && response.data && response.data.agencies) {
          this.agencies = response.data.agencies;
        } else if (response.success && Array.isArray(response.data)) {
          this.agencies = response.data;
        }
      } catch (error) {
        console.error('Error fetching agencies:', error);
        this.$toast.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ');
      } finally {
        this.loadingAgencies = false;
      }
    },
    formatDate(dateString) {
      if (!dateString) return '-';
      const date = new Date(dateString);
      return date.toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    formatCurrency(amount, currency) {
      if (!amount) return '-';
      const currencySymbol = (currency === null || currency === void 0 ? void 0 : currency.symbol) || (currency === null || currency === void 0 ? void 0 : currency.code) || '';
      return `${amount.toLocaleString()} ${currencySymbol}`;
    },
    getPriorityText(priority) {
      const priorities = {
        low: 'ຕໍ່າ',
        medium: 'ປານກາງ',
        high: 'ສູງ',
        urgent: 'ຮີບດ່ວນ'
      };
      return priorities[priority] || priority;
    },
    getStatusText(status) {
      const statuses = {
        draft: 'ຮ່າງ',
        active: 'ເປີດໃຊ້ງານ',
        completed: 'ສຳເລັດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statuses[status] || status;
    },
    goToStep(step) {
      if (step === 1 || step === 2 && this.step1Valid) {
        this.currentStep = step;
        this.errors = {};
        this.formErrors = [];
      }
    },
    continueToStep2() {
      if (this.step1Valid) this.currentStep = 2;
    },
    async saveStep1Only() {
      if (!this.step1Valid) return;
      this.loading = true;
      try {
        this.$emit('save', this.createFormData(true), true);
      } catch (error) {
        this.formErrors.push('An error occurred');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    initializeForm() {
      var _this$applicant2;
      if ((_this$applicant2 = this.applicant) !== null && _this$applicant2 !== void 0 && _this$applicant2.id) {
        var _a$passportExpiredDat, _a$passportIssueDate, _a$contactStartDate, _a$contactEndDate, _a$registertDate, _a$interviewExamDate;
        const a = this.applicant;
        this.formData = {
          firstName: a.firstName || '',
          lastName: a.lastName || '',
          gender: a.gender || '',
          age: a.age || null,
          maritalStatus: a.maritalStatus || '',
          phone: a.phone || '',
          emergencyContactNo: a.emergencyContactNo || '',
          address: a.address || '',
          village: a.village || '',
          city: a.city || '',
          district: a.district || '',
          passportAvailability: a.passportAvailability || false,
          passportNo: a.passportNo || '',
          passportExpiredDate: ((_a$passportExpiredDat = a.passportExpiredDate) === null || _a$passportExpiredDat === void 0 ? void 0 : _a$passportExpiredDat.split('T')[0]) || '',
          passportIssueDate: ((_a$passportIssueDate = a.passportIssueDate) === null || _a$passportIssueDate === void 0 ? void 0 : _a$passportIssueDate.split('T')[0]) || '',
          workPlace: a.workPlace || '',
          contactStartDate: ((_a$contactStartDate = a.contactStartDate) === null || _a$contactStartDate === void 0 ? void 0 : _a$contactStartDate.split('T')[0]) || '',
          contactEndDate: ((_a$contactEndDate = a.contactEndDate) === null || _a$contactEndDate === void 0 ? void 0 : _a$contactEndDate.split('T')[0]) || '',
          registertDate: ((_a$registertDate = a.registertDate) === null || _a$registertDate === void 0 ? void 0 : _a$registertDate.slice(0, 16)) || '',
          interviewExamDate: ((_a$interviewExamDate = a.interviewExamDate) === null || _a$interviewExamDate === void 0 ? void 0 : _a$interviewExamDate.slice(0, 16)) || '',
          passportPhoto: a.passportPhoto || '',
          applicantPhoto: a.applicantPhoto || '',
          jobBatchId: a.jobBatchId || null,
          agencyId: a.agencyId || null,
          status: a.status || 'INTERVIEW'
        };
        this.applicantPhotoPreview = this.passportPhotoPreview = this.applicantPhotoFile = this.passportPhotoFile = null;
        if (a.phone) this.currentStep = 2;
      }
      this.errors = {};
      this.formErrors = [];
    },
    createFormData(isPartial = false) {
      const fd = new FormData();
      const fields = isPartial ? ['firstName', 'lastName', 'gender', 'age', 'address', 'passportAvailability', 'jobBatchId', 'status'] : Object.keys(this.formData);
      fields.forEach(key => {
        if (key !== 'passportPhoto' && key !== 'applicantPhoto') {
          const val = this.formData[key];
          if (val !== '' && val !== null) fd.append(key, val);
        }
      });
      fd.append('applicantPhoto', this.applicantPhotoFile || this.formData.applicantPhoto || '');
      if (this.formData.passportAvailability) {
        fd.append('passportPhoto', this.passportPhotoFile || this.formData.passportPhoto || '');
      }
      return fd;
    },
    async saveApplicant() {
      if (!this.isFormValid) return;
      this.loading = true;
      try {
        this.$emit('save', this.createFormData(), false);
      } catch (error) {
        this.formErrors.push('Error saving');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    triggerFileInput(type) {
      this.$refs[`${type}FileInput`].click();
    },
    handleFileSelect(event, type) {
      const file = event.target.files[0];
      if (!file) return;
      this.formErrors = this.formErrors.filter(e => !e.includes('ຮູບ'));
      if (!file.type.startsWith('image/')) {
        this.formErrors.push('ເລືອກຮູບພາບເທົ່ານັ້ນ');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        this.formErrors.push('ຮູບໃຫຍ່ເກີນ 5MB');
        return;
      }
      if (type === 'applicant') this.applicantPhotoFile = file;else this.passportPhotoFile = file;
      const reader = new FileReader();
      reader.onload = e => {
        if (type === 'applicant') this.applicantPhotoPreview = e.target.result;else this.passportPhotoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removePhoto(type) {
      if (type === 'applicant') {
        this.applicantPhotoFile = this.applicantPhotoPreview = this.formData.applicantPhoto = null;
        if (this.$refs.applicantFileInput) this.$refs.applicantFileInput.value = '';
      } else {
        this.passportPhotoFile = this.passportPhotoPreview = this.formData.passportPhoto = null;
        if (this.$refs.passportFileInput) this.$refs.passportFileInput.value = '';
      }
    },
    getImageUrl(path) {
      if (!path) return null;
      if (path.startsWith('http')) return path;
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
  
  var style0 = __webpack_require__(628)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  applicants_ApplicantDialogvue_type_script_lang_js_,
  ApplicantDialogvue_type_template_id_227ba5fc_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "227ba5fc",
  "519f9c22"
  
)

/* harmony default export */ var ApplicantDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=applicants-applicant-dialog.js.map