exports.ids = [25];
exports.modules = {

/***/ 509:
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
  add("443288a6", content, true, context)
};

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24889058_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(509);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24889058_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24889058_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24889058_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24889058_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-24889058]{align-items:center;animation:fadeIn-24889058 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-24889058{0%{opacity:0}to{opacity:1}}.view-dialog[data-v-24889058]{animation:slideIn-24889058 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow:hidden;width:95%}@keyframes slideIn-24889058{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-24889058]{align-items:center;background:linear-gradient(135deg,#8b5cf6,#a855f7);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-24889058]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-24889058]{font-size:20px;opacity:.9}.modal-title[data-v-24889058]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-24889058]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-24889058]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-24889058]{max-height:60vh;overflow-y:auto;padding:24px}.status-header[data-v-24889058]{align-items:center;background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;display:flex;justify-content:space-between;margin-bottom:24px;padding:16px 20px}.status-info[data-v-24889058]{flex:1}.benefit-id[data-v-24889058]{align-items:center;color:#64748b;display:flex;font-weight:600;gap:8px}.id-label[data-v-24889058]{font-size:14px}.id-value[data-v-24889058]{background:#fff;border:1px solid #e2e8f0;border-radius:6px;color:#334155;font-size:16px;padding:4px 12px}.status-badge[data-v-24889058]{align-items:center;border-radius:12px;display:inline-flex;font-size:12px;font-weight:600;gap:6px;padding:6px 16px}.status-badge.large[data-v-24889058]{font-size:14px;padding:8px 20px}.status-badge.small[data-v-24889058]{font-size:11px;padding:3px 8px}.status-badge.inactive[data-v-24889058]{background-color:#fee2e2;color:#dc2626}.info-section[data-v-24889058]{margin-bottom:32px}.section-header[data-v-24889058]{border-bottom:2px solid #e9ecef;margin-bottom:20px;padding-bottom:12px}.section-header h4[data-v-24889058]{align-items:center;color:#374151;display:flex;font-size:18px;font-weight:600;gap:10px;margin:0}.section-header i[data-v-24889058]{color:#8b5cf6;font-size:16px}.info-grid[data-v-24889058]{grid-gap:24px;display:grid;gap:24px;grid-template-columns:1fr 1fr}.info-item[data-v-24889058]{margin-bottom:0}.info-item.full-width[data-v-24889058]{grid-column:1/-1}.info-label[data-v-24889058]{align-items:center;color:#4b5563;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:10px}.info-label i[data-v-24889058]{color:#9ca3af;font-size:12px;width:14px}.info-value[data-v-24889058]{background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;min-height:20px;padding:12px 16px}.benefit-name[data-v-24889058]{color:#111827;font-size:24px;font-weight:700;line-height:1.2;margin:0}.type-badge[data-v-24889058]{align-items:center;border-radius:12px;display:inline-flex;font-size:12px;font-weight:600;gap:6px;padding:6px 16px}.type-badge.large[data-v-24889058]{font-size:14px;padding:8px 20px}.type-badge.salary[data-v-24889058]{background-color:#dcfce7;color:#16a34a}.type-badge.allowance[data-v-24889058]{background-color:#dbeafe;color:#2563eb}.type-badge.insurance[data-v-24889058]{background-color:#f3e8ff;color:#9333ea}.type-badge.accommodation[data-v-24889058]{background-color:#fef3c7;color:#d97706}.type-badge.transportation[data-v-24889058]{background-color:#e0f2fe;color:#0891b2}.type-badge.other[data-v-24889058]{background-color:#f1f5f9;color:#64748b}.value-display[data-v-24889058]{text-align:center}.value-amount[data-v-24889058]{color:#059669;display:block;font-size:20px;font-weight:700}.no-value[data-v-24889058]{align-items:center;color:#9ca3af;display:flex;font-style:italic;gap:8px;justify-content:center}.currency-display[data-v-24889058]{color:#374151;display:block;font-weight:600;text-align:center}.description-text[data-v-24889058],.notes-text[data-v-24889058]{color:#374151;line-height:1.6;white-space:pre-wrap;word-break:break-word}.notes-text[data-v-24889058]{background:#fffbeb;border-left:4px solid #f59e0b;border-radius:4px;margin:-12px -16px;padding:12px 16px}.job-info-card[data-v-24889058]{background:#fafafa;border:2px solid #e5e7eb;border-radius:12px;padding:20px}.job-header[data-v-24889058]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:16px}.job-title[data-v-24889058]{align-items:center;color:#374151;display:flex;font-size:16px;gap:8px}.job-title i[data-v-24889058]{color:#3b82f6}.job-details[data-v-24889058]{display:flex;flex-direction:column;gap:12px}.job-description[data-v-24889058],.job-location[data-v-24889058]{align-items:flex-start;color:#6b7280;display:flex;font-size:14px;gap:8px;line-height:1.5}.job-description i[data-v-24889058],.job-location i[data-v-24889058]{color:#9ca3af;flex-shrink:0;margin-top:2px}.date-info[data-v-24889058],.user-info[data-v-24889058]{align-items:center;color:#374151;display:flex;gap:8px}.date-info i[data-v-24889058],.user-info i[data-v-24889058]{color:#9ca3af;font-size:12px}.no-user[data-v-24889058]{align-items:center;color:#9ca3af;display:flex;font-style:italic;gap:8px}.benefit-summary[data-v-24889058]{background:linear-gradient(135deg,#f0f9ff,#ecfdf5);border:2px solid #bfdbfe;border-radius:12px;margin-top:24px;padding:20px}.summary-header[data-v-24889058]{align-items:center;color:#1e40af;display:flex;gap:10px;margin-bottom:16px}.summary-header i[data-v-24889058]{font-size:18px}.summary-header h5[data-v-24889058]{font-size:16px;font-weight:600;margin:0}.summary-content[data-v-24889058]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.summary-item[data-v-24889058]{align-items:center;background:hsla(0,0%,100%,.8);border-radius:6px;display:flex;font-size:14px;justify-content:space-between;padding:8px 12px}.summary-label[data-v-24889058]{color:#374151;font-weight:500}.summary-value[data-v-24889058]{color:#111827;font-weight:600}.summary-value.active[data-v-24889058]{color:#059669}.summary-value.inactive[data-v-24889058]{color:#dc2626}.no-data[data-v-24889058]{color:#9ca3af;padding:60px 20px;text-align:center}.no-data i[data-v-24889058]{color:#d1d5db;font-size:48px;margin-bottom:16px}.no-data p[data-v-24889058]{font-size:16px;margin:0}.modal-footer[data-v-24889058]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-24889058]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-24889058]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-24889058]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-24889058]{background:linear-gradient(135deg,#8b5cf6,#a855f7);color:#fff}.btn-secondary[data-v-24889058]{background:#6c757d;color:#fff}.status-badge.active[data-v-24889058]{background-color:#d1fae5;color:#065f46}.status-badge.inactive[data-v-24889058]{background-color:#fef3c7;color:#d97706}.status-badge.closed[data-v-24889058]{background-color:#fee2e2;color:#dc2626}@media (max-width:768px){.view-dialog[data-v-24889058]{margin:10px;width:98%}.info-grid[data-v-24889058]{gap:20px;grid-template-columns:1fr}.status-header[data-v-24889058]{gap:16px}.job-header[data-v-24889058],.status-header[data-v-24889058]{align-items:flex-start;flex-direction:column}.job-header[data-v-24889058]{gap:12px}.summary-content[data-v-24889058]{grid-template-columns:1fr}.summary-item[data-v-24889058]{align-items:flex-start;flex-direction:column;gap:4px}.modal-body[data-v-24889058],.modal-header[data-v-24889058]{padding:16px}.modal-footer[data-v-24889058]{flex-direction:column-reverse;padding:16px}.modal-footer .btn[data-v-24889058]{justify-content:center;width:100%}}@media (max-width:576px){.benefit-name[data-v-24889058]{font-size:20px}.value-amount[data-v-24889058]{font-size:18px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/benefit/view/index.vue?vue&type=template&id=24889058&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog view-dialog\" data-v-24889058><div class=\"modal-header\" data-v-24889058><div class=\"modal-title-section\" data-v-24889058><i class=\"fas fa-gift modal-icon\" data-v-24889058></i> <h5 class=\"modal-title\" data-v-24889058>ລາຍລະອຽດສະຫວັດດີການ</h5></div> <button class=\"close-btn\" data-v-24889058><i class=\"fas fa-times\" data-v-24889058></i></button></div> <div class=\"modal-body\" data-v-24889058>" + (_vm.benefit ? "<div class=\"benefit-details\" data-v-24889058><div class=\"status-header\" data-v-24889058><div class=\"status-info\" data-v-24889058><span" + _vm._ssrClass(null, ['status-badge', 'large', _vm.benefit.isActive ? 'active' : 'inactive']) + " data-v-24889058><i" + _vm._ssrClass(null, _vm.benefit.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle') + " data-v-24889058></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.benefit.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n            ") + "</span></div> <div class=\"benefit-id\" data-v-24889058><span class=\"id-label\" data-v-24889058>ID:</span> <span class=\"id-value\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.id)) + "</span></div></div> <div class=\"info-section\" data-v-24889058><div class=\"section-header\" data-v-24889058><h4 data-v-24889058><i class=\"fas fa-info-circle\" data-v-24889058></i>\n              ຂໍ້ມູນພື້ນຖານ\n            </h4></div> <div class=\"info-grid\" data-v-24889058><div class=\"info-item full-width\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-tag\" data-v-24889058></i>\n                ຊື່ສະຫວັດດີການ\n              </label> <div class=\"info-value\" data-v-24889058><h3 class=\"benefit-name\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.name)) + "</h3></div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-layer-group\" data-v-24889058></i>\n                ປະເພດ\n              </label> <div class=\"info-value\" data-v-24889058><span" + _vm._ssrClass(null, ['type-badge', 'large', _vm.benefit.type]) + " data-v-24889058><i" + _vm._ssrClass(null, _vm.getTypeIcon(_vm.benefit.type)) + " data-v-24889058></i>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatType(_vm.benefit.type)) + "\n                ") + "</span></div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-coins\" data-v-24889058></i>\n                ມູນຄ່າ\n              </label> <div class=\"info-value\" data-v-24889058>" + (_vm.benefit.value ? "<div class=\"value-display\" data-v-24889058><span class=\"value-amount\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.benefit.value, _vm.benefit.currency))) + "</span></div>" : "<div class=\"no-value\" data-v-24889058><i class=\"fas fa-minus\" data-v-24889058></i>\n                  ບໍ່ລະບຸມູນຄ່າ\n                </div>") + "</div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-money-bill-wave\" data-v-24889058></i>\n                ສະກຸນເງິນ\n              </label> <div class=\"info-value\" data-v-24889058><span class=\"currency-display\" data-v-24889058>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatCurrencyName(_vm.benefit.currency)) + "\n                ") + "</span></div></div> " + (_vm.benefit.description ? "<div class=\"info-item full-width\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-align-left\" data-v-24889058></i>\n                ຄຳອະທິບາຍ\n              </label> <div class=\"info-value\" data-v-24889058><div class=\"description-text\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.description)) + "</div></div></div>" : "<!---->") + " " + (_vm.benefit.notes ? "<div class=\"info-item full-width\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-sticky-note\" data-v-24889058></i>\n                ໝາຍເຫດ\n              </label> <div class=\"info-value\" data-v-24889058><div class=\"notes-text\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.notes)) + "</div></div></div>" : "<!---->") + "</div></div> " + (_vm.benefit.jobAdvertise ? "<div class=\"info-section\" data-v-24889058><div class=\"section-header\" data-v-24889058><h4 data-v-24889058><i class=\"fas fa-briefcase\" data-v-24889058></i>\n              ການປະກາດຫາງານທີ່ກ່ຽວຂ້ອງ\n            </h4></div> <div class=\"job-info-card\" data-v-24889058><div class=\"job-header\" data-v-24889058><div class=\"job-title\" data-v-24889058><i class=\"fas fa-briefcase\" data-v-24889058></i> <strong data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.jobAdvertise.title)) + "</strong></div> <div class=\"job-status\" data-v-24889058><span" + _vm._ssrClass(null, ['status-badge', 'small', _vm.benefit.jobAdvertise.status]) + " data-v-24889058>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatJobStatus(_vm.benefit.jobAdvertise.status)) + "\n                ") + "</span></div></div> <div class=\"job-details\" data-v-24889058><div class=\"job-location\" data-v-24889058><i class=\"fas fa-map-marker-alt\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.jobAdvertise.country)) + "</span> " + (_vm.benefit.jobAdvertise.province ? "<span data-v-24889058>" + _vm._ssrEscape("\n                  - " + _vm._s(_vm.benefit.jobAdvertise.province) + "\n                ") + "</span>" : "<!---->") + "</div> " + (_vm.benefit.jobAdvertise.jobDescription ? "<div class=\"job-description\" data-v-24889058><i class=\"fas fa-file-text\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.truncateText(_vm.benefit.jobAdvertise.jobDescription, 150))) + "</span></div>" : "<!---->") + "</div></div></div>" : "<!---->") + " <div class=\"info-section\" data-v-24889058><div class=\"section-header\" data-v-24889058><h4 data-v-24889058><i class=\"fas fa-cog\" data-v-24889058></i>\n              ຂໍ້ມູນລະບົບ\n            </h4></div> <div class=\"info-grid\" data-v-24889058><div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-user-plus\" data-v-24889058></i>\n                ຜູ້ສ້າງ\n              </label> <div class=\"info-value\" data-v-24889058>" + (_vm.benefit.maker ? "<div class=\"user-info\" data-v-24889058><i class=\"fas fa-user\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.maker.firstName) + " " + _vm._s(_vm.benefit.maker.lastName)) + "</span></div>" : "<div class=\"no-user\" data-v-24889058><i class=\"fas fa-minus\" data-v-24889058></i>\n                  ບໍ່ລະບຸ\n                </div>") + "</div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-user-edit\" data-v-24889058></i>\n                ຜູ້ອັບເດດ\n              </label> <div class=\"info-value\" data-v-24889058>" + (_vm.benefit.updateUser ? "<div class=\"user-info\" data-v-24889058><i class=\"fas fa-user\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.updateUser.firstName) + " " + _vm._s(_vm.benefit.updateUser.lastName)) + "</span></div>" : "<div class=\"no-user\" data-v-24889058><i class=\"fas fa-minus\" data-v-24889058></i>\n                  ຍັງບໍ່ມີການອັບເດດ\n                </div>") + "</div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-calendar-plus\" data-v-24889058></i>\n                ວັນທີສ້າງ\n              </label> <div class=\"info-value\" data-v-24889058><div class=\"date-info\" data-v-24889058><i class=\"fas fa-clock\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.benefit.createdAt))) + "</span></div></div></div> <div class=\"info-item\" data-v-24889058><label class=\"info-label\" data-v-24889058><i class=\"fas fa-calendar-edit\" data-v-24889058></i>\n                ວັນທີອັບເດດ\n              </label> <div class=\"info-value\" data-v-24889058><div class=\"date-info\" data-v-24889058><i class=\"fas fa-clock\" data-v-24889058></i> <span data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.benefit.updateTimestamp))) + "</span></div></div></div></div></div> <div class=\"benefit-summary\" data-v-24889058><div class=\"summary-header\" data-v-24889058><i class=\"fas fa-clipboard-list\" data-v-24889058></i> <h5 data-v-24889058>ສະຫລຸບສະຫວັດດີການ</h5></div> <div class=\"summary-content\" data-v-24889058><div class=\"summary-item\" data-v-24889058><span class=\"summary-label\" data-v-24889058>ປະເພດ:</span> <span class=\"summary-value\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.formatType(_vm.benefit.type))) + "</span></div> " + (_vm.benefit.value ? "<div class=\"summary-item\" data-v-24889058><span class=\"summary-label\" data-v-24889058>ມູນຄ່າ:</span> <span class=\"summary-value\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.benefit.value, _vm.benefit.currency))) + "</span></div>" : "<!---->") + " <div class=\"summary-item\" data-v-24889058><span class=\"summary-label\" data-v-24889058>ສະຖານະ:</span> <span" + _vm._ssrClass(null, ['summary-value', _vm.benefit.isActive ? 'active' : 'inactive']) + " data-v-24889058>" + _vm._ssrEscape("\n                " + _vm._s(_vm.benefit.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n              ") + "</span></div> " + (_vm.benefit.jobAdvertise ? "<div class=\"summary-item\" data-v-24889058><span class=\"summary-label\" data-v-24889058>ການປະກາດຫາງານ:</span> <span class=\"summary-value\" data-v-24889058>" + _vm._ssrEscape(_vm._s(_vm.benefit.jobAdvertise.title)) + "</span></div>" : "<!---->") + "</div></div></div>" : "<div class=\"no-data\" data-v-24889058><i class=\"fas fa-exclamation-triangle\" data-v-24889058></i> <p data-v-24889058>ບໍ່ພົບຂໍ້ມູນສະຫວັດດີການ</p></div>") + "</div> <div class=\"modal-footer\" data-v-24889058><button class=\"btn btn-secondary\" data-v-24889058><i class=\"fas fa-times\" data-v-24889058></i>\n        ປິດ\n      </button> " + (_vm.benefit ? "<button class=\"btn btn-primary\" data-v-24889058><i class=\"fas fa-edit\" data-v-24889058></i>\n        ແກ້ໄຂ\n      </button>" : "<!---->") + "</div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/benefit/view/index.vue?vue&type=template&id=24889058&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/benefit/view/index.vue?vue&type=script&lang=js&
/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'BenefitViewDialog',
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
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    editBenefit() {
      this.$emit('edit', this.benefit);
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
    formatCurrencyName(currency) {
      const currencyNames = {
        LAK: 'ກີບ ລາວ (LAK)',
        THB: 'ບາດ ໄທ (THB)',
        USD: 'ໂດລາ ສະຫະລັດ (USD)',
        KRW: 'ວອນ ເກົາຫຼີ (KRW)',
        JPY: 'ເຢນ ຍີ່ປຸ່ນ (JPY)',
        MYR: 'ຣິງກິດ ມາເລເຊຍ (MYR)',
        SGD: 'ໂດລາ ສິງກະໂປ (SGD)'
      };
      return currencyNames[currency] || currency;
    },
    formatJobStatus(status) {
      const statusLabels = {
        active: 'ເປີດຮັບສະໝັກ',
        inactive: 'ປິດຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ'
      };
      return statusLabels[status] || status;
    },
    formatDateTime(dateTime) {
      if (!dateTime) return '-';
      return new Date(dateTime).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    truncateText(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    }
  }
});
// CONCATENATED MODULE: ./components/benefit/view/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var benefit_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/benefit/view/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(599)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  benefit_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "24889058",
  "5842f8d3"
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=benefit-view.js.map