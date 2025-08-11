exports.ids = [65];
exports.modules = {

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(538);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0f3044aa", content, true, context)
};

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_284f8c8b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-284f8c8b]{align-items:center;animation:fadeIn-284f8c8b .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-284f8c8b{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-284f8c8b]{animation:slideIn-284f8c8b .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow:hidden;width:95%}@keyframes slideIn-284f8c8b{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-284f8c8b]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-284f8c8b]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-284f8c8b]{font-size:20px;opacity:.9}.modal-title[data-v-284f8c8b]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-284f8c8b]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-284f8c8b]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-284f8c8b]{max-height:60vh;overflow-y:auto;padding:24px}.form-loading[data-v-284f8c8b]{align-items:center;color:#666;display:flex;justify-content:center;padding:40px}.spinner-small[data-v-284f8c8b]{animation:spin-284f8c8b 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-284f8c8b{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.form-grid[data-v-284f8c8b]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-284f8c8b]{margin-bottom:0}.form-group.full-width[data-v-284f8c8b]{grid-column:1/-1}.form-label[data-v-284f8c8b]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-284f8c8b]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-284f8c8b]{color:#6b7280;font-size:12px}.currency-note[data-v-284f8c8b]{color:#6b7280}.currency-note[data-v-284f8c8b],.exchange-rate-note[data-v-284f8c8b]{font-size:11px;font-style:italic;font-weight:400}.exchange-rate-note[data-v-284f8c8b]{color:#059669}.form-control[data-v-284f8c8b]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;transition:all .2s ease;width:100%}.form-control[data-v-284f8c8b]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control[data-v-284f8c8b]:disabled{background-color:#f3f4f6;border-color:#d1d5db;color:#6b7280;cursor:not-allowed}.form-control.is-invalid[data-v-284f8c8b]{border-color:#e74c3c}.invalid-feedback[data-v-284f8c8b]{color:#e74c3c;display:block;font-size:12px;margin-top:4px}.input-group[data-v-284f8c8b]{border-radius:8px;display:flex;overflow:hidden}.input-group .form-control[data-v-284f8c8b]{border-radius:0;border-right:none}.input-group-append[data-v-284f8c8b]{display:flex}.input-group-text[data-v-284f8c8b]{background:#f8f9fa;border:2px solid #e5e7eb;border-left:none;color:#6b7280;font-size:14px;font-weight:600;padding:12px 16px}.custom-select-wrapper[data-v-284f8c8b]{position:relative}.custom-select[data-v-284f8c8b]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:40px}.select-icon[data-v-284f8c8b]{color:#6b7280;pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.custom-select:disabled+.select-icon[data-v-284f8c8b]{color:#9ca3af}.custom-select-wrapper[data-v-284f8c8b]:has(.form-control:disabled){opacity:.7}.link-advance-options[data-v-284f8c8b]{display:flex;gap:20px;margin-top:8px}.radio-option[data-v-284f8c8b]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:14px;gap:8px}.radio-option input[type=radio][data-v-284f8c8b]{margin:0}.radio-label[data-v-284f8c8b]{font-weight:500}.form-group.full-width[data-v-284f8c8b]:has([v-if*=\"formData.linkToAdvance === 'true'\"]){background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.05);margin:16px 0;padding:20px;transition:all .3s ease}.money-advance-section[data-v-284f8c8b]{animation:slideInUp-284f8c8b .4s ease-out;background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:2px solid #e2e8f0;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.05);margin:16px 0;padding:20px;position:relative;transition:all .3s ease}@keyframes slideInUp-284f8c8b{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.money-advance-section[data-v-284f8c8b]:before{background:linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6);border-radius:12px 12px 0 0;content:\"\";height:4px;left:0;position:absolute;right:0;top:0}.money-advance-section[data-v-284f8c8b]:hover{border-color:#cbd5e1;box-shadow:0 4px 12px rgba(0,0,0,.08);transform:translateY(-1px)}.money-advance-section .form-label[data-v-284f8c8b]{color:#1e293b;font-size:15px;font-weight:700;margin-bottom:16px}.money-advance-section .form-label i[data-v-284f8c8b]{color:#3b82f6;font-size:14px;margin-right:10px}.money-advance-section .btn-outline-primary[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f8fafc);border:2px solid #3b82f6;box-shadow:0 2px 4px rgba(59,130,246,.1);color:#1e40af;font-weight:600;transition:all .2s ease}.money-advance-section .btn-outline-primary[data-v-284f8c8b]:hover{background:linear-gradient(135deg,#3b82f6,#6366f1);box-shadow:0 4px 8px rgba(59,130,246,.3);color:#fff;transform:translateY(-1px)}.money-advance-section .btn-outline-primary[data-v-284f8c8b]:disabled{background:#f1f5f9;border-color:#cbd5e1;box-shadow:none;color:#94a3b8;transform:none}.advance-selection-container[data-v-284f8c8b]{align-items:flex-start;display:flex;gap:12px;margin-bottom:16px}.advance-selection-container .custom-select-wrapper[data-v-284f8c8b]{flex:1}.money-advance-section .custom-select[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f8fafc);border:2px solid #cbd5e1;box-shadow:0 2px 4px rgba(0,0,0,.05);color:#1e293b;font-weight:500}.money-advance-section .custom-select[data-v-284f8c8b]:focus{background:#fff;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.1)}.money-advance-section .select-icon[data-v-284f8c8b]{color:#3b82f6}.money-advance-section .advance-info[data-v-284f8c8b]{background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #bfdbfe;border-radius:10px;box-shadow:0 2px 4px rgba(59,130,246,.1);margin-top:16px;padding:16px}.money-advance-section .advance-details[data-v-284f8c8b]{grid-gap:12px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.money-advance-section .advance-detail-item[data-v-284f8c8b]{align-items:center;background:hsla(0,0%,100%,.7);border:1px solid rgba(191,219,254,.5);border-radius:6px;color:#1e40af;display:flex;font-size:13px;gap:8px;padding:8px 12px}.money-advance-section .advance-detail-item i[data-v-284f8c8b]{color:#3b82f6;flex-shrink:0;font-size:12px;width:16px}.money-advance-section .advance-label[data-v-284f8c8b]{color:#1e40af;font-weight:600;min-width:60px}.money-advance-section .advance-value[data-v-284f8c8b]{color:#1e293b;font-weight:700}.money-advance-section .advance-value.amount[data-v-284f8c8b]{color:#059669;font-size:15px;font-weight:800}.money-advance-section .field-hint.warning[data-v-284f8c8b]{background:linear-gradient(135deg,#fef3c7,#fde68a);border:1px solid #f59e0b;border-radius:8px;color:#92400e;font-weight:600;margin-top:16px;padding:12px 16px}.money-advance-section .field-hint.warning i[data-v-284f8c8b]{color:#f59e0b}.advance-info[data-v-284f8c8b]{background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;margin-top:12px;padding:12px}.advance-details[data-v-284f8c8b]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.advance-detail-item[data-v-284f8c8b]{align-items:center;color:#075985;display:flex;font-size:12px;gap:8px}.advance-detail-item i[data-v-284f8c8b]{color:#0ea5e9;flex-shrink:0;width:14px}.advance-label[data-v-284f8c8b]{font-weight:500;min-width:60px}.advance-value[data-v-284f8c8b]{font-weight:600}.advance-value.amount[data-v-284f8c8b]{color:#059669;font-size:14px}.status-badge[data-v-284f8c8b]{border-radius:12px;font-size:10px;font-weight:600;letter-spacing:.5px;padding:4px 8px;text-transform:uppercase}.status-badge.pending[data-v-284f8c8b]{background:#fef3c7;color:#92400e}.status-badge.approved[data-v-284f8c8b]{background:#d1fae5;color:#065f46}.status-badge.settled[data-v-284f8c8b]{background:#dbeafe;color:#1e40af}.ministry-info[data-v-284f8c8b]{background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;margin-top:12px;padding:12px}.ministry-details[data-v-284f8c8b]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:1fr}.ministry-detail-item[data-v-284f8c8b]{align-items:center;color:#075985;display:flex;font-size:12px;gap:8px}.ministry-detail-item i[data-v-284f8c8b]{color:#0ea5e9;flex-shrink:0;width:14px}.ministry-name[data-v-284f8c8b]{font-weight:600}.ministry-code[data-v-284f8c8b]{background:#e0f2fe;border-radius:4px;font-family:monospace;padding:2px 6px}.bank-account-info[data-v-284f8c8b]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:8px;margin-top:12px;padding:12px}.bank-details[data-v-284f8c8b]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:1fr 1fr}.bank-detail-item[data-v-284f8c8b]{align-items:center;color:#6b7280;display:flex;font-size:12px;gap:6px}.bank-detail-item i[data-v-284f8c8b]{color:#667eea;width:12px}.bank-detail-item .branch[data-v-284f8c8b]{color:#9ca3af;font-style:italic}.invoice-list[data-v-284f8c8b]{border:1px solid #e9ecef;border-radius:4px;max-height:200px;overflow-y:auto;padding:8px}.invoice-item[data-v-284f8c8b]{margin-bottom:8px}.invoice-item[data-v-284f8c8b]:last-child{margin-bottom:0}.invoice-checkbox[data-v-284f8c8b]{align-items:flex-start;border-radius:4px;cursor:pointer;display:flex;padding:8px;transition:background-color .2s}.invoice-checkbox[data-v-284f8c8b]:hover{background-color:#f8f9fa}.invoice-checkbox input[type=checkbox][data-v-284f8c8b]{margin-right:12px;margin-top:4px}.invoice-details[data-v-284f8c8b]{flex:1}.invoice-number[data-v-284f8c8b]{color:#333;font-size:14px;font-weight:600}.invoice-vendor[data-v-284f8c8b]{color:#666;font-size:13px;margin-top:2px}.invoice-amount[data-v-284f8c8b]{color:#28a745;font-size:13px;font-weight:600;margin-top:2px}.invoice-due[data-v-284f8c8b]{color:#666;font-size:12px;margin-top:2px}.selected-summary[data-v-284f8c8b]{background-color:#e7f3ff;border-radius:4px;color:#06c;font-size:14px;font-weight:600;margin-top:12px;padding:8px 12px}.field-hint[data-v-284f8c8b]{align-items:center;display:flex;font-size:12px;gap:6px;justify-content:space-between;margin-top:6px}.field-hint.error[data-v-284f8c8b]{color:#e74c3c}.field-hint.warning[data-v-284f8c8b]{color:#f39c12}.field-hint.info[data-v-284f8c8b]{background-color:#dbeafe;border-left:4px solid #3b82f6;border-radius:4px;color:#1e40af;padding:8px 12px}.text-counter[data-v-284f8c8b]{color:#9ca3af;font-size:11px;margin-left:auto}.form-errors[data-v-284f8c8b]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-284f8c8b]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-284f8c8b]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.enhanced-footer[data-v-284f8c8b],.modal-footer[data-v-284f8c8b]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-284f8c8b]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-284f8c8b]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-284f8c8b]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-284f8c8b]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-284f8c8b]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-284f8c8b]{background:transparent;border:2px solid #667eea;color:#667eea}.btn-outline-primary[data-v-284f8c8b]:hover{background:#667eea;color:#fff}.btn-sm[data-v-284f8c8b]{font-size:12px;padding:8px 16px}.btn[data-v-284f8c8b]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-284f8c8b]{animation:spin-284f8c8b 1s linear infinite}.browser-overlay[data-v-284f8c8b]{z-index:1100!important}.advance-browser-dialog[data-v-284f8c8b]{max-height:80vh;max-width:900px;z-index:1101!important}.advance-browser-dialog .modal-body[data-v-284f8c8b]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border-radius:0 0 12px 12px;padding:24px;position:relative}.advance-browser-dialog .modal-body[data-v-284f8c8b]:before{background:radial-gradient(circle at 20% 80%,rgba(120,119,198,.03) 0,transparent 50%),radial-gradient(circle at 80% 20%,rgba(255,119,198,.03) 0,transparent 50%),radial-gradient(circle at 40% 40%,rgba(120,200,255,.03) 0,transparent 50%);border-radius:0 0 12px 12px;bottom:0;content:\"\";left:0;pointer-events:none;position:absolute;right:0;top:0}.advance-browser-dialog .modal-header[data-v-284f8c8b]{background:linear-gradient(135deg,#667eea,#764ba2);overflow:hidden;position:relative}.advance-browser-dialog .modal-header[data-v-284f8c8b]:before{background:radial-gradient(circle at 20% 20%,hsla(0,0%,100%,.1) 0,transparent 50%),radial-gradient(circle at 80% 80%,hsla(0,0%,100%,.1) 0,transparent 50%);bottom:0;content:\"\";left:0;pointer-events:none;position:absolute;right:0;top:0}.advance-filters[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f8fafc);border:2px solid #e2e8f0;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.05);margin-bottom:20px;padding:20px;position:relative}.advance-filters[data-v-284f8c8b]:before{background:linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6);border-radius:12px 12px 0 0;content:\"\";height:4px;left:0;position:absolute;right:0;top:0}.filter-row[data-v-284f8c8b]{grid-gap:16px;align-items:center;display:grid;gap:16px;grid-template-columns:1fr auto}.filter-group[data-v-284f8c8b]{margin:0}.filter-group label[data-v-284f8c8b]{color:#374151;display:block;font-size:14px;font-weight:600;margin-bottom:8px}.advance-filters .form-control[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f9fafb);border:2px solid #d1d5db;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);color:#374151;font-size:14px;font-weight:500;padding:12px 16px;transition:all .2s ease}.advance-filters .form-control[data-v-284f8c8b]:focus{background:#fff;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.1);outline:none}.advance-filters .form-control[data-v-284f8c8b]::-moz-placeholder{color:#9ca3af;font-style:italic}.advance-filters .form-control[data-v-284f8c8b]::placeholder{color:#9ca3af;font-style:italic}.advances-list[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f8fafc);border:2px solid #e2e8f0;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,.08);max-height:400px;overflow-y:auto;position:relative}.advances-list[data-v-284f8c8b]:before{background:linear-gradient(90deg,#10b981,#3b82f6,#8b5cf6);border-radius:12px 12px 0 0;content:\"\";height:3px;left:0;position:absolute;right:0;top:0;z-index:1}.empty-state[data-v-284f8c8b],.loading-state[data-v-284f8c8b]{align-items:center;background:linear-gradient(135deg,#f9fafb,#f3f4f6);border-radius:10px;color:#6b7280;display:flex;flex-direction:column;justify-content:center;margin:16px;padding:60px 40px}.loading-state[data-v-284f8c8b]{background:linear-gradient(135deg,#eff6ff,#dbeafe);color:#1e40af}.empty-state[data-v-284f8c8b]{background:linear-gradient(135deg,#fef3c7,#fde68a);color:#92400e}.empty-state i[data-v-284f8c8b]{color:#d97706;font-size:48px;margin-bottom:16px}.empty-state p[data-v-284f8c8b],.loading-state p[data-v-284f8c8b]{font-size:16px;font-weight:600;margin:8px 0 0}.advance-items[data-v-284f8c8b]{display:flex;flex-direction:column;padding:8px}.advance-item[data-v-284f8c8b]{background:linear-gradient(135deg,#fff,#f9fafb);border:2px solid #e5e7eb;border-radius:10px;box-shadow:0 2px 4px rgba(0,0,0,.05);cursor:pointer;margin-bottom:12px;overflow:hidden;padding:18px;position:relative;transition:all .3s ease}.advance-item[data-v-284f8c8b]:before{background:linear-gradient(180deg,#e5e7eb,#d1d5db);bottom:0;content:\"\";left:0;position:absolute;top:0;transition:all .3s ease;width:4px}.advance-item[data-v-284f8c8b]:hover{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border-color:#60a5fa;box-shadow:0 8px 20px rgba(96,165,250,.15);transform:translateY(-2px)}.advance-item[data-v-284f8c8b]:hover:before{background:linear-gradient(180deg,#3b82f6,#1d4ed8);width:6px}.advance-item.selected[data-v-284f8c8b]{background:linear-gradient(135deg,#dbeafe,#bfdbfe);border-color:#3b82f6;box-shadow:0 6px 16px rgba(59,130,246,.2);transform:translateY(-1px)}.advance-item.selected[data-v-284f8c8b]:before{background:linear-gradient(180deg,#1d4ed8,#1e40af);width:6px}.advance-item[data-v-284f8c8b]:last-child{margin-bottom:8px}.advance-item-content[data-v-284f8c8b]{display:flex;flex-direction:column;gap:12px}.advance-item-header[data-v-284f8c8b]{align-items:center;display:flex;justify-content:space-between;margin-bottom:8px}.advance-id[data-v-284f8c8b]{background:linear-gradient(135deg,#f1f5f9,#e2e8f0);border:1px solid #cbd5e1;border-radius:6px;color:#1e293b;font-family:\"Courier New\",monospace;font-size:14px;font-weight:700;padding:6px 12px}.advance-item.selected .advance-id[data-v-284f8c8b]{background:linear-gradient(135deg,#1e40af,#1d4ed8);border-color:#1e40af;color:#fff}.advance-item-body[data-v-284f8c8b]{grid-gap:12px;background:hsla(0,0%,100%,.7);border:1px solid rgba(229,231,235,.8);border-radius:8px;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));padding:16px}.advance-item.selected .advance-item-body[data-v-284f8c8b]{background:hsla(0,0%,100%,.9);border-color:rgba(59,130,246,.3)}.advance-amount[data-v-284f8c8b]{background:linear-gradient(135deg,#d1fae5,#a7f3d0);border:1px solid #34d399;border-radius:6px;color:#059669;font-size:16px;font-weight:800;padding:8px 12px;text-align:center}.advance-date[data-v-284f8c8b]{background:linear-gradient(135deg,#f3f4f6,#e5e7eb);border:1px solid #d1d5db;border-radius:6px;color:#6b7280;font-size:13px;font-weight:600;padding:6px 10px}.advance-purpose[data-v-284f8c8b]{background:linear-gradient(135deg,#fef3c7,#fde68a);border:1px solid #f59e0b;border-radius:6px;color:#374151;font-size:13px;font-style:italic;font-weight:500;padding:8px 12px}.advance-maker[data-v-284f8c8b]{background:linear-gradient(135deg,#ede9fe,#ddd6fe);border:1px solid #a78bfa;border-radius:6px;color:#6b7280;font-size:13px;font-weight:600;padding:6px 10px}.advance-item .status-badge[data-v-284f8c8b]{border:2px solid;border-radius:20px;box-shadow:0 2px 4px rgba(0,0,0,.1);font-size:11px;font-weight:700;letter-spacing:.5px;padding:6px 12px;text-transform:uppercase}.advance-item .status-badge.pending[data-v-284f8c8b]{background:linear-gradient(135deg,#fef3c7,#fde68a);border-color:#f59e0b;color:#92400e}.advance-item .status-badge.approved[data-v-284f8c8b]{background:linear-gradient(135deg,#d1fae5,#a7f3d0);border-color:#10b981;color:#065f46}.advances-list[data-v-284f8c8b]::-webkit-scrollbar{width:8px}.advances-list[data-v-284f8c8b]::-webkit-scrollbar-track{background:linear-gradient(135deg,#f1f5f9,#e2e8f0);border-radius:10px}.advances-list[data-v-284f8c8b]::-webkit-scrollbar-thumb{background:linear-gradient(135deg,#94a3b8,#64748b);background-clip:content-box;border:2px solid transparent;border-radius:10px}.advances-list[data-v-284f8c8b]::-webkit-scrollbar-thumb:hover{background:linear-gradient(135deg,#64748b,#475569);background-clip:content-box}.loading-state .spinner-small[data-v-284f8c8b]{animation:spin-284f8c8b 1s linear infinite;border:3px solid #dbeafe;border-radius:50%;border-top-color:#3b82f6;height:32px;margin:0 auto 16px;width:32px}.advance-filters .filter-group[data-v-284f8c8b]:first-child:before{color:#6b7280;content:\"🔍 ຄົ້ນຫາ\";display:block;font-size:12px;font-weight:600;margin-bottom:6px}.advance-filters .filter-group[data-v-284f8c8b]:last-child:before{color:#6b7280;content:\"📊 ສະຖານະ\";display:block;font-size:12px;font-weight:600;margin-bottom:6px}.advance-browser-dialog .modal-footer[data-v-284f8c8b]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border-radius:0 0 12px 12px;border-top:2px solid #e2e8f0;padding:20px 24px}.advance-browser-dialog .modal-footer .btn[data-v-284f8c8b]{border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);font-size:14px;font-weight:600;min-width:120px;padding:12px 24px;transition:all .2s ease}.advance-browser-dialog .modal-footer .btn-secondary[data-v-284f8c8b]{background:linear-gradient(135deg,#6b7280,#4b5563);border:2px solid #6b7280;color:#fff}.advance-browser-dialog .modal-footer .btn-secondary[data-v-284f8c8b]:hover{background:linear-gradient(135deg,#4b5563,#374151);box-shadow:0 4px 8px hsla(220,9%,46%,.3);transform:translateY(-1px)}.advance-browser-dialog .modal-footer .btn-primary[data-v-284f8c8b]{background:linear-gradient(135deg,#3b82f6,#1d4ed8);border:2px solid #3b82f6;color:#fff}.advance-browser-dialog .modal-footer .btn-primary[data-v-284f8c8b]:hover:not(:disabled){background:linear-gradient(135deg,#1d4ed8,#1e40af);box-shadow:0 4px 12px rgba(59,130,246,.4);transform:translateY(-1px)}.advance-browser-dialog .modal-footer .btn-primary[data-v-284f8c8b]:disabled{background:linear-gradient(135deg,#9ca3af,#6b7280);border-color:#9ca3af;box-shadow:none;cursor:not-allowed;transform:none}.advance-browser-dialog[data-v-284f8c8b]{animation:modalSlideIn-284f8c8b .4s ease-out}@keyframes modalSlideIn-284f8c8b{0%{opacity:0;transform:translateY(-30px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}.advance-item[data-v-284f8c8b]{animation:itemFadeIn-284f8c8b .3s ease-out forwards;opacity:0}.advance-item[data-v-284f8c8b]:first-child{animation-delay:.1s}.advance-item[data-v-284f8c8b]:nth-child(2){animation-delay:.15s}.advance-item[data-v-284f8c8b]:nth-child(3){animation-delay:.2s}.advance-item[data-v-284f8c8b]:nth-child(4){animation-delay:.25s}.advance-item[data-v-284f8c8b]:nth-child(5){animation-delay:.3s}.advance-item[data-v-284f8c8b]:nth-child(n+6){animation-delay:.35s}@keyframes itemFadeIn-284f8c8b{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.advance-item.selected[data-v-284f8c8b]{animation:selectedPulse-284f8c8b 2s ease-in-out infinite alternate}@keyframes selectedPulse-284f8c8b{0%{box-shadow:0 6px 16px rgba(59,130,246,.2)}to{box-shadow:0 8px 20px rgba(59,130,246,.3)}}@media (max-width:768px){.enhanced-dialog[data-v-284f8c8b]{margin:10px;width:98%}.advance-details[data-v-284f8c8b],.bank-details[data-v-284f8c8b],.form-grid[data-v-284f8c8b],.ministry-details[data-v-284f8c8b]{grid-template-columns:1fr}.modal-body[data-v-284f8c8b],.modal-header[data-v-284f8c8b]{padding:16px}.enhanced-footer[data-v-284f8c8b],.modal-footer[data-v-284f8c8b]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-284f8c8b],.modal-footer .btn[data-v-284f8c8b]{justify-content:center;width:100%}.link-advance-options[data-v-284f8c8b]{flex-direction:column;gap:12px}.advance-selection-container[data-v-284f8c8b]{flex-direction:column}.advance-item-body[data-v-284f8c8b]{gap:8px}.advance-filters[data-v-284f8c8b]{padding:16px}.advance-filters[data-v-284f8c8b]:before{height:3px}.filter-row[data-v-284f8c8b]{gap:12px;grid-template-columns:1fr}.advance-item[data-v-284f8c8b]{margin-bottom:8px;padding:16px 12px}.advance-item-body[data-v-284f8c8b]{grid-template-columns:1fr;padding:12px}.advance-amount[data-v-284f8c8b]{font-size:15px}.advance-id[data-v-284f8c8b]{font-size:13px;padding:4px 8px}.empty-state[data-v-284f8c8b],.loading-state[data-v-284f8c8b]{padding:40px 20px}.advances-list[data-v-284f8c8b]{max-height:300px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementDialog/index.vue?vue&type=template&id=284f8c8b&scoped=true&
var render = function render() {
  var _vm$user, _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-284f8c8b><div class=\"modal-title-section\" data-v-284f8c8b><i class=\"fas fa-money-bill-wave modal-icon\" data-v-284f8c8b></i> <h5 class=\"modal-title\" data-v-284f8c8b>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ລົງລາຍຮັບ ການຊຳລະ') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-284f8c8b><i class=\"fas fa-times\" data-v-284f8c8b></i></button></div> "), _vm._ssrNode("<form data-v-284f8c8b>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-284f8c8b>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"form-loading\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"spinner-small\" data-v-284f8c8b></div> <p data-v-284f8c8b>Loading form data...</p>")], 2) : _vm._ssrNode("<div class=\"form-grid\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b><label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-calendar\" data-v-284f8c8b></i>\n              ວັນທີລົງຊຳລະ\n            </label> <input type=\"date\"" + _vm._ssrAttr("max", _vm.today) + " required=\"required\"" + _vm._ssrAttr("value", _vm.formData.settlementDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.settlementDate
  }) + " data-v-284f8c8b> " + (_vm.errors.settlementDate ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.settlementDate) + "\n            ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-credit-card\" data-v-284f8c8b></i>\n              ວິທີການຊຳລະ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.method,
      expression: "formData.method"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.method
    },
    attrs: {
      "required": ""
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "method", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleMethodChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກວິທີການຊຳລະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cash"
    }
  }, [_vm._v("ເງິນສົດ (Cash)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v("\n                  ໂອນຜ່ານທະນາຄານ (Bank Transfer)\n                ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "deduction"
    }
  }, [_vm._v("ຫັກລົບ (Deduction)")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.method ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.method) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-284f8c8b><label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-link\" data-v-284f8c8b></i>\n              ເຊື່ອມຕໍ່ກັບລາຍຈ່າຍລ່ວງໜ້າ\n            </label> <div class=\"link-advance-options\" data-v-284f8c8b><label class=\"radio-option\" data-v-284f8c8b><input type=\"radio\" value=\"false\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.linkToAdvance, "false")) + " data-v-284f8c8b> <span class=\"radio-label\" data-v-284f8c8b>ບໍ່ເຊື່ອມຕໍ່</span></label> <label class=\"radio-option\" data-v-284f8c8b><input type=\"radio\" value=\"true\"" + _vm._ssrAttr("checked", _vm._q(_vm.formData.linkToAdvance, "true")) + " data-v-284f8c8b> <span class=\"radio-label\" data-v-284f8c8b>ເຊື່ອມຕໍ່ກັບລາຍຈ່າຍລ່ວງໜ້າ</span></label></div></div> "), _vm.formData.linkToAdvance === 'true' ? _vm._ssrNode("<div class=\"form-group full-width money-advance-section\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-search\" data-v-284f8c8b></i>\n              ເລືອກລາຍຈ່າຍລ່ວງໜ້າ\n            </label> "), _vm._ssrNode("<div class=\"advance-selection-container\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.moneyAdvanceId,
      expression: "formData.moneyAdvanceId"
    }],
    staticClass: "form-control custom-select",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "moneyAdvanceId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedAdvance]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກລາຍຈ່າຍລ່ວງໜ້າ")]), _vm._v(" "), _vm._l(_vm.availableAdvances, function (advance) {
    return _c('option', {
      key: advance.id,
      domProps: {
        "value": advance.id
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatAdvanceOption(advance)) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loadingAdvances) + " class=\"btn btn-outline-primary btn-sm\" data-v-284f8c8b>" + (_vm.loadingAdvances ? "<i class=\"fas fa-spinner fa-spin\" data-v-284f8c8b></i>" : "<i class=\"fas fa-search\" data-v-284f8c8b></i>") + "\n                ເລືອກ\n              </button>")], 2), _vm._ssrNode(" " + (_vm.selectedAdvance ? "<div class=\"advance-info\" data-v-284f8c8b><div class=\"advance-details\" data-v-284f8c8b><div class=\"advance-detail-item\" data-v-284f8c8b><i class=\"fas fa-hashtag\" data-v-284f8c8b></i> <span class=\"advance-label\" data-v-284f8c8b>ລະຫັດ:</span> <span class=\"advance-value\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedAdvance.id)) + "</span></div> <div class=\"advance-detail-item\" data-v-284f8c8b><i class=\"fas fa-calendar\" data-v-284f8c8b></i> <span class=\"advance-label\" data-v-284f8c8b>ວັນທີ:</span> <span class=\"advance-value\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.selectedAdvance.bookingDate))) + "</span></div> <div class=\"advance-detail-item\" data-v-284f8c8b><i class=\"fas fa-dollar-sign\" data-v-284f8c8b></i> <span class=\"advance-label\" data-v-284f8c8b>ຈຳນວນ:</span> <span class=\"advance-value amount\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.selectedAdvance.amount, _vm.selectedAdvance.currency.code))) + "</span></div> " + (_vm.selectedAdvance.purpose ? "<div class=\"advance-detail-item\" data-v-284f8c8b><i class=\"fas fa-tag\" data-v-284f8c8b></i> <span class=\"advance-label\" data-v-284f8c8b>ຈຸດປະສົງ:</span> <span class=\"advance-value\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedAdvance.purpose)) + "</span></div>" : "<!---->") + " <div class=\"advance-detail-item\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i> <span class=\"advance-label\" data-v-284f8c8b>ສະຖານະ:</span> <span" + _vm._ssrClass(null, ['status-badge', _vm.selectedAdvance.status]) + " data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatStatus(_vm.selectedAdvance.status)) + "\n                  ") + "</span></div></div></div>" : "<!---->") + " " + (_vm.availableAdvances.length === 0 && !_vm.loadingAdvances ? "<div class=\"field-hint warning\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              ບໍ່ມີລາຍຈ່າຍລ່ວງໜ້າທີ່ສາມາດເຊື່ອມຕໍ່ໄດ້\n            </div>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" <div class=\"form-group\" data-v-284f8c8b><label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-dollar-sign\" data-v-284f8c8b></i>\n              ຈຳນວນເງິນ\n            </label> <div class=\"input-group\" data-v-284f8c8b><input type=\"number\" step=\"0.01\" min=\"0\" placeholder=\"0.00\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.amount) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.amount
  }) + " data-v-284f8c8b> <div class=\"input-group-append\" data-v-284f8c8b><span class=\"input-group-text\" data-v-284f8c8b>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.selectedCurrencyCode) + "\n                ") + "</span></div></div> " + (_vm.errors.amount ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.amount) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.isLinkedToAdvance && _vm.selectedAdvance ? "<div class=\"field-hint info\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              ຈຳນວນເງິນຖືກກຳນົດໂດຍອັດຕະໂນມັດຕາມລາຍຈ່າຍລ່ວງໜ້າ\n            </div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-coins\" data-v-284f8c8b></i>\n              ສະກຸນເງິນ\n              " + (_vm.isLinkedToAdvance ? "<span class=\"currency-note\" data-v-284f8c8b>\n                (ຕາມລາຍຈ່າຍລ່ວງໜ້າ)\n              </span>" : "<!---->") + "</label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.currencyId,
      expression: "formData.currencyId"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.currencyId
    },
    attrs: {
      "required": "",
      "disabled": _vm.isLinkedToAdvance
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedCurrency]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະກຸນເງິນ")]), _vm._v(" "), _vm._l(_vm.currencies, function (currency) {
    return _c('option', {
      key: currency.id,
      domProps: {
        "value": currency.id
      }
    }, [_vm._v("\n                  " + _vm._s(currency.code || currency.currencyCode) + " -\n                  " + _vm._s(currency.name || currency.currencyName) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.currencyId ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.currencyId) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.isLinkedToAdvance && _vm.selectedAdvance ? "<div class=\"field-hint info\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              ສະກຸນເງິນຖືກກຳນົດໂດຍອັດຕະໂນມັດຕາມລາຍຈ່າຍລ່ວງໜ້າ\n            </div>" : "<!---->") + " " + (_vm.currencies.length === 0 ? "<div class=\"field-hint error\" data-v-284f8c8b><i class=\"fas fa-exclamation-triangle\" data-v-284f8c8b></i>\n              No currencies available. Please contact administrator.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-284f8c8b><label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-exchange-alt\" data-v-284f8c8b></i>\n              ອັດຕາແລກປ່ຽນ\n              <span class=\"exchange-rate-note\" data-v-284f8c8b>" + _vm._ssrEscape("\n                (" + _vm._s(_vm.selectedCurrencyCode) + " ຕໍ່ LAK)\n              ") + "</span></label> <div class=\"input-group\" data-v-284f8c8b><input type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.formData.exchangeRate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.exchangeRate
  }) + " data-v-284f8c8b> <div class=\"input-group-append\" data-v-284f8c8b><span class=\"input-group-text\" data-v-284f8c8b><i class=\"fas fa-calculator\" data-v-284f8c8b></i></span></div></div> " + (_vm.errors.exchangeRate ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.exchangeRate) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.showEquivalentAmount ? "<div class=\"field-hint info\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>" + _vm._ssrEscape("\n              ເທົ່າກັບ " + _vm._s(_vm.formatCurrency(_vm.equivalentAmountLAK)) + " LAK\n            ") + "</div>" : "<!---->") + " " + (_vm.isBaseCurrency ? "<div class=\"field-hint info\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              ສະກຸນເງິນພື້ນຖານ (LAK) - ອັດຕາແລກປ່ຽນ = 1\n            </div>" : "<!---->") + "</div> "), _vm.formData.method === 'bank_transfer' ? _vm._ssrNode("<div class=\"form-group full-width\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-university\" data-v-284f8c8b></i>\n              ບັນຊີທະນາຄານ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.bankAccountId,
      expression: "formData.bankAccountId"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.bankAccountId
    },
    attrs: {
      "required": _vm.formData.method === 'bank_transfer'
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "bankAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedBankAccount]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີທະນາຄານ")]), _vm._v(" "), _vm._l(_vm.filteredBankAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n                  " + _vm._s(account.bankName) + " - " + _vm._s(account.accountNumber) + " (" + _vm._s(account.accountName) + ")\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.bankAccountId ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.bankAccountId) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.selectedBankAccount ? "<div class=\"bank-account-info\" data-v-284f8c8b><div class=\"bank-details\" data-v-284f8c8b><div class=\"bank-detail-item\" data-v-284f8c8b><i class=\"fas fa-building\" data-v-284f8c8b></i> <span data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.bankName)) + "</span> " + (_vm.selectedBankAccount.bankBranch ? "<span class=\"branch\" data-v-284f8c8b>" + _vm._ssrEscape("\n                    (" + _vm._s(_vm.selectedBankAccount.bankBranch) + ")\n                  ") + "</span>" : "<!---->") + "</div> <div class=\"bank-detail-item\" data-v-284f8c8b><i class=\"fas fa-credit-card\" data-v-284f8c8b></i> <span data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.accountNumber)) + "</span></div> <div class=\"bank-detail-item\" data-v-284f8c8b><i class=\"fas fa-tag\" data-v-284f8c8b></i> <span data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.accountType || _vm.selectedBankAccount.accountName)) + "</span></div> <div class=\"bank-detail-item\" data-v-284f8c8b><i class=\"fas fa-coins\" data-v-284f8c8b></i> <span data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.currency)) + "</span></div></div></div>" : "<!---->") + " " + (_vm.bankAccounts.length === 0 ? "<div class=\"field-hint warning\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              No bank accounts available. You can still create the settlement\n              without selecting a bank account.\n            </div>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-building\" data-v-284f8c8b></i>\n              ກະຊວງ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.ministryId,
      expression: "formData.ministryId"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.ministryId
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "ministryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedMinistry]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກກະຊວງ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.ministries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n                  " + _vm._s(ministry.ministryCode) + " - " + _vm._s(ministry.ministryName) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.ministryId ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.ministryId) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.selectedMinistry ? "<div class=\"ministry-info\" data-v-284f8c8b><div class=\"ministry-details\" data-v-284f8c8b><div class=\"ministry-detail-item\" data-v-284f8c8b><i class=\"fas fa-building\" data-v-284f8c8b></i> <span class=\"ministry-name\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryName)) + "</span></div> <div class=\"ministry-detail-item\" data-v-284f8c8b><i class=\"fas fa-tag\" data-v-284f8c8b></i> <span class=\"ministry-code\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryCode)) + "</span></div></div></div>" : "<!---->") + " " + (_vm.ministries.length === 0 ? "<div class=\"field-hint warning\" data-v-284f8c8b><i class=\"fas fa-info-circle\" data-v-284f8c8b></i>\n              No ministries available. You can still create the settlement\n              without selecting a ministry.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-chart-line\" data-v-284f8c8b></i>\n              ບັນຊີລວມ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.chartAccountId,
      expression: "formData.chartAccountId"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.chartAccountId
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "chartAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີລວມ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.chartAccounts, function (chartAccount) {
    return _c('option', {
      key: chartAccount.id,
      domProps: {
        "value": chartAccount.id
      }
    }, [_vm._v("\n                  " + _vm._s(chartAccount.accountNumber) + " -\n                  " + _vm._s(chartAccount.accountName) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.chartAccountId ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.chartAccountId) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" " + (_vm.formData.method === 'deduction' ? "<div class=\"form-group full-width\" data-v-284f8c8b><label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-file-invoice\" data-v-284f8c8b></i>\n              ໃບແຈ້ງໜີ້ທີ່ຄ້າງຊຳລະ\n            </label> <div class=\"invoice-list\" data-v-284f8c8b>" + _vm._ssrList(_vm.outstandingInvoices, function (invoice) {
    var _invoice$vendor;
    return "<div class=\"invoice-item\" data-v-284f8c8b><label class=\"invoice-checkbox\" data-v-284f8c8b><input type=\"checkbox\"" + _vm._ssrAttr("value", invoice.id) + _vm._ssrAttr("checked", Array.isArray(_vm.formData.selectedInvoices) ? _vm._i(_vm.formData.selectedInvoices, invoice.id) > -1 : _vm.formData.selectedInvoices) + " data-v-284f8c8b> <div class=\"invoice-details\" data-v-284f8c8b><div class=\"invoice-number\" data-v-284f8c8b>" + _vm._ssrEscape("\n                      " + _vm._s(invoice.invoiceNumber) + "\n                    ") + "</div> <div class=\"invoice-vendor\" data-v-284f8c8b>" + _vm._ssrEscape("\n                      " + _vm._s((_invoice$vendor = invoice.vendor) === null || _invoice$vendor === void 0 ? void 0 : _invoice$vendor.name) + "\n                    ") + "</div> <div class=\"invoice-amount\" data-v-284f8c8b>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatCurrency(invoice.outstandingAmount, invoice.currency.code)) + "\n                    ") + "</div> <div class=\"invoice-due\" data-v-284f8c8b>" + _vm._ssrEscape("\n                      ຄົບກຳຫນົດ: " + _vm._s(_vm.formatDate(invoice.dueDate)) + "\n                    ") + "</div></div></label></div>";
  }) + "</div> " + (_vm.formData.selectedInvoices.length > 0 ? "<div class=\"selected-summary\" data-v-284f8c8b>" + _vm._ssrEscape("\n              ຈຳນວນທີ່ເລືອກ: " + _vm._s(_vm.formatCurrency(_vm.selectedInvoicesTotal)) + "\n            ") + "</div>" : "<!---->") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"form-group\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-284f8c8b><i class=\"fas fa-user\" data-v-284f8c8b></i>\n              ຜູ້ລົງບັນຊີ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.userId,
      expression: "formData.userId"
    }],
    staticClass: "form-control custom-select",
    class: {
      'is-invalid': _vm.errors.userId
    },
    attrs: {
      "required": "",
      "disabled": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "userId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກຜູ້ລົງບັນຊີ")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c('option', {
      key: user.id,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n                  " + _vm._s(user.cus_name || user.name || user.username) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-284f8c8b><i class=\"fas fa-chevron-down\" data-v-284f8c8b></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.userId ? "<div class=\"invalid-feedback\" data-v-284f8c8b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.userId) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.users.length === 0 ? "<div class=\"field-hint error\" data-v-284f8c8b><i class=\"fas fa-exclamation-triangle\" data-v-284f8c8b></i>\n              No users available. Please contact administrator.\n            </div>" : "<!---->") + " <div class=\"field-hint info\" style=\"margin-top: 4px\" data-v-284f8c8b><small data-v-284f8c8b>" + _vm._ssrEscape("Selected: " + _vm._s(_vm.formData.userId || 'None') + " | Current User:\n                " + _vm._s(((_vm$user = _vm.user) === null || _vm$user === void 0 ? void 0 : _vm$user.id) || 'None')) + "</small></div>")], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-284f8c8b><label class=\"form-label\" data-v-284f8c8b><i class=\"fas fa-sticky-note\" data-v-284f8c8b></i>\n              ໝາຍເຫດ\n            </label> <textarea rows=\"3\" placeholder=\"ລາຍລະອຽດເພີ່ມເຕີມ...\" maxlength=\"500\" class=\"form-control\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> <div class=\"field-hint\" data-v-284f8c8b><span class=\"text-counter\" data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-284f8c8b><h6 data-v-284f8c8b><i class=\"fas fa-exclamation-circle\" data-v-284f8c8b></i>\n            Please fix the following errors:\n          </h6> <ul data-v-284f8c8b>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-284f8c8b>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-284f8c8b><button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" style=\"margin-right: auto\" data-v-284f8c8b><i class=\"fas fa-bug\" data-v-284f8c8b></i>\n          Debug\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-secondary\" data-v-284f8c8b><i class=\"fas fa-times\" data-v-284f8c8b></i>\n          ຍົກເລີກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-284f8c8b>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-284f8c8b></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-284f8c8b></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? 'Saving...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div>")], 2)], 2), _vm._ssrNode(" "), _vm.showAdvanceBrowser ? _vm._ssrNode("<div class=\"modal-overlay browser-overlay\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog advance-browser-dialog\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-284f8c8b><div class=\"modal-title-section\" data-v-284f8c8b><i class=\"fas fa-search modal-icon\" data-v-284f8c8b></i> <h5 class=\"modal-title\" data-v-284f8c8b>ເລືອກລາຍຈ່າຍລ່ວງໜ້າ</h5></div> <button class=\"close-btn\" data-v-284f8c8b><i class=\"fas fa-times\" data-v-284f8c8b></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"advance-filters\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"filter-row\" data-v-284f8c8b>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-284f8c8b><input type=\"text\" placeholder=\"ຄົ້ນຫາຕາມຈຸດປະສົງ, ໝາຍເຫດ...\"" + _vm._ssrAttr("value", _vm.advanceSearch.query) + " class=\"form-control\" data-v-284f8c8b></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-284f8c8b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.advanceSearch.status,
      expression: "advanceSearch.status"
    }],
    staticClass: "form-control",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.advanceSearch, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.filterAdvances]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທຸກສະຖານະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pending"
    }
  }, [_vm._v("ລໍຖ້າ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("ອະນຸມັດ")])])])], 2)]), _vm._ssrNode(" <div class=\"advances-list\" data-v-284f8c8b>" + (_vm.loadingAdvances ? "<div class=\"loading-state\" data-v-284f8c8b><div class=\"spinner-small\" data-v-284f8c8b></div> <p data-v-284f8c8b>Loading advances...</p></div>" : _vm.filteredAdvances.length === 0 ? "<div class=\"empty-state\" data-v-284f8c8b><i class=\"fas fa-inbox\" data-v-284f8c8b></i> <p data-v-284f8c8b>ບໍ່ພົບລາຍຈ່າຍລ່ວງໜ້າ</p></div>" : "<div class=\"advance-items\" data-v-284f8c8b>" + _vm._ssrList(_vm.filteredAdvances, function (advance) {
    var _vm$selectedAdvanceFo;
    return "<div" + _vm._ssrClass("advance-item", {
      selected: ((_vm$selectedAdvanceFo = _vm.selectedAdvanceForBrowser) === null || _vm$selectedAdvanceFo === void 0 ? void 0 : _vm$selectedAdvanceFo.id) === advance.id
    }) + " data-v-284f8c8b><div class=\"advance-item-content\" data-v-284f8c8b><div class=\"advance-item-header\" data-v-284f8c8b><span class=\"advance-id\" data-v-284f8c8b>" + _vm._ssrEscape("#" + _vm._s(advance.id)) + "</span> <span" + _vm._ssrClass(null, ['status-badge', advance.status]) + " data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatStatus(advance.status)) + "\n                  ") + "</span></div> <div class=\"advance-item-body\" data-v-284f8c8b><div class=\"advance-amount\" data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatCurrency(advance.amount, advance.currency.code)) + "\n                  ") + "</div> <div class=\"advance-date\" data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatDate(advance.bookingDate)) + "\n                  ") + "</div> " + (advance.purpose ? "<div class=\"advance-purpose\" data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(advance.purpose) + "\n                  ") + "</div>" : "<!---->") + " " + (advance.maker ? "<div class=\"advance-maker\" data-v-284f8c8b>" + _vm._ssrEscape("\n                    " + _vm._s(advance.maker.cus_name) + "\n                  ") + "</div>" : "<!---->") + "</div></div></div>";
  }) + "</div>") + "</div>")], 2), _vm._ssrNode(" <div class=\"modal-footer\" data-v-284f8c8b><button type=\"button\" class=\"btn btn-secondary\" data-v-284f8c8b><i class=\"fas fa-times\" data-v-284f8c8b></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.selectedAdvanceForBrowser) + " class=\"btn btn-primary\" data-v-284f8c8b><i class=\"fas fa-check\" data-v-284f8c8b></i>\n          ເລືອກ\n        </button></div>")], 2)]) : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue?vue&type=template&id=284f8c8b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var settlementDialogvue_type_script_lang_js_ = ({
  name: 'SettlementDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    settlement: {
      type: Object,
      default: null
    },
    outstandingInvoices: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    bankAccounts: {
      type: Array,
      default: () => []
    },
    ministries: {
      type: Array,
      default: () => []
    },
    chartAccounts: {
      type: Array,
      default: () => []
    },
    users: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      loading: false,
      loadingAdvances: false,
      showAdvanceBrowser: false,
      selectedAdvanceForBrowser: null,
      availableAdvances: [],
      filteredAdvances: [],
      advanceSearch: {
        query: '',
        status: ''
      },
      formData: {
        settlementDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1,
        // New field
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: '',
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: ''
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.settlement && this.settlement.id;
    },
    // New computed property for checking if linked to advance
    isLinkedToAdvance() {
      return this.formData.linkToAdvance === 'true' && this.formData.moneyAdvanceId;
    },
    // New computed properties for exchange rate functionality
    isBaseCurrency() {
      return this.selectedCurrencyCode === 'LAK';
    },
    showEquivalentAmount() {
      return !this.isBaseCurrency && this.formData.amount > 0 && this.formData.exchangeRate > 0;
    },
    equivalentAmountLAK() {
      if (!this.showEquivalentAmount) return 0;
      return this.formData.amount * this.formData.exchangeRate;
    },
    selectedInvoicesTotal() {
      return this.outstandingInvoices.filter(invoice => this.formData.selectedInvoices.includes(invoice.id)).reduce((total, invoice) => total + (invoice.outstandingAmount || 0), 0);
    },
    selectedCurrencyCode() {
      if (!this.formData.currencyId) return 'LAK';
      const currency = this.currencies.find(c => c.id == this.formData.currencyId);
      if (!this._isInitializing) this.formData.exchangeRate = currency.rate || 1;
      return currency ? currency.code || currency.currencyCode : 'LAK';
    },
    selectedBankAccount() {
      if (!this.formData.bankAccountId) return null;
      return this.bankAccounts.find(account => account.id == this.formData.bankAccountId);
    },
    selectedMinistry() {
      if (!this.formData.ministryId) return null;
      return this.ministries.find(ministry => ministry.id == this.formData.ministryId);
    },
    selectedCurrency() {
      if (!this.formData.currencyId) return null;
      return this.currencies.find(currency => currency.id == this.formData.currencyId);
    },
    selectedAdvance() {
      if (!this.formData.moneyAdvanceId) return null;
      return this.availableAdvances.find(advance => advance.id == this.formData.moneyAdvanceId);
    },
    user() {
      return this.$auth.user || '';
    },
    // Filter bank accounts by selected currency if possible
    filteredBankAccounts() {
      if (!this.selectedCurrency || !this.bankAccounts.length) {
        return this.bankAccounts.filter(account => account.isActive !== false);
      }
      const currencyCode = this.selectedCurrency.code || this.selectedCurrency.currencyCode;
      const filtered = this.bankAccounts.filter(account => (account.currency === currencyCode || !account.currency) && account.isActive !== false);
      return filtered.length > 0 ? filtered : this.bankAccounts.filter(account => account.isActive !== false);
    },
    today() {
      return new Date().toISOString().split('T')[0];
    },
    isFormValid() {
      // 🐛 DEBUG: Let's check each validation condition
      const validations = {
        hasAmount: !!(this.formData.amount && parseFloat(this.formData.amount) > 0),
        hasCurrency: !!this.formData.currencyId,
        hasUser: !!this.formData.userId,
        // Check if user is selected
        hasSettlementDate: !!this.formData.settlementDate,
        hasMethod: !!this.formData.method,
        hasUsers: this.users.length > 0,
        hasCurrencies: this.currencies.length > 0,
        // 🆕 FIX: Correct operator precedence - was: (!this.formData.method === 'bank_transfer' || this.formData.bankAccountId)
        bankAccountValid: this.formData.method !== 'bank_transfer' || !!this.formData.bankAccountId,
        // New exchange rate validation
        exchangeRateValid: !this.formData.exchangeRate || this.formData.exchangeRate > 0
      };

      // 🐛 DEBUG: Log current form state
      console.log('🔍 Form Validation Debug:', {
        formData: {
          amount: this.formData.amount,
          currencyId: this.formData.currencyId,
          exchangeRate: this.formData.exchangeRate,
          userId: this.formData.userId,
          settlementDate: this.formData.settlementDate,
          method: this.formData.method,
          bankAccountId: this.formData.bankAccountId
        },
        validations,
        usersLength: this.users.length,
        currenciesLength: this.currencies.length,
        finalValid: Object.values(validations).every(v => v === true)
      });

      // Return true only if ALL conditions are met
      return Object.values(validations).every(v => v === true);
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm();
        this.loadMoneyAdvances();
      } else {
        this.resetForm();
      }
    },
    'formData.currencyId'(newVal, oldVal) {
      if (newVal !== oldVal) {
        // Don't override exchange rate during initialization in edit mode
        if (!this._isInitializing || !this.isEditMode) {
          this.handleCurrencyChange();
        }
      }
    },
    settlement: {
      handler(newVal, oldVal) {
        if (this.visible && newVal !== oldVal) {
          this.$nextTick(() => {
            this.initializeForm();
          });
        }
      },
      deep: true
    },
    // Watch for currency changes to auto-set exchange rate
    'formData.currencyId'(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.handleCurrencyChange();
      }
    },
    // Watch for money advance changes
    'formData.moneyAdvanceId'(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$nextTick(() => {
          this.syncCurrencyFromAdvance();
          this.syncAmountFromAdvance();
        });
      }
    },
    // Watch for link to advance changes
    'formData.linkToAdvance'(newVal, oldVal) {
      if (newVal === 'false' && oldVal === 'true') {
        this.clearAdvanceSelection();
      }
    },
    // 🆕 NEW: Watch for available advances to load and auto-sync
    availableAdvances: {
      handler(newAdvances) {
        if (newAdvances.length > 0 && this.formData.moneyAdvanceId && this.formData.linkToAdvance === 'true') {
          console.log('🔄 Advances loaded, triggering auto-sync...');
          this.$nextTick(() => {
            this.syncCurrencyFromAdvance();
            this.syncAmountFromAdvance();
          });
        }
      },
      immediate: false
    }
  },
  beforeDestroy() {
    // Cleanup: ensure body scroll is restored when component is destroyed
    document.body.style.overflow = 'auto';
  },
  methods: {
    initializeForm() {
      console.warn(`initiate data ${JSON.stringify(this.settlement)}`);
      console.warn(`initiate user ${JSON.stringify(this.user)}`);
      if (this.settlement && (this.settlement.id || this.settlement.moneyAdvanceId)) {
        // Edit mode OR new settlement with money advance link
        const hasMoneyAdvance = this.settlement.moneyAdvanceId && this.settlement.moneyAdvanceId !== null && this.settlement.moneyAdvanceId !== '' && this.settlement.moneyAdvanceId !== '0' && this.settlement.moneyAdvanceId !== 0;
        console.log('🔍 Settlement initialization:', {
          isEdit: !!this.settlement.id,
          hasMoneyAdvance,
          moneyAdvanceId: this.settlement.moneyAdvanceId,
          linkToAdvanceFromProp: this.settlement.linkToAdvance,
          originalExchangeRate: this.settlement.exchangeRate // ✅ Log original value
        });

        this.formData = {
          settlementDate: this.settlement.settlementDate ? this.settlement.settlementDate.split('T')[0] : '',
          method: this.settlement.method || '',
          amount: this.settlement.amount || null,
          currencyId: this.settlement.currencyId || '',
          // ✅ FIX 1: Properly handle exchange rate - check for undefined/null, not falsy
          exchangeRate: this.settlement.exchangeRate !== undefined && this.settlement.exchangeRate !== null ? this.settlement.exchangeRate : 1,
          bankAccountId: this.settlement.bankAccountId || '',
          ministryId: this.settlement.ministryId || '',
          chartAccountId: this.settlement.chartAccountId || '',
          userId: this.settlement.userId || '',
          notes: this.settlement.notes || '',
          selectedInvoices: [],
          linkToAdvance: hasMoneyAdvance || this.settlement.linkToAdvance === 'true' ? 'true' : 'false',
          moneyAdvanceId: hasMoneyAdvance ? this.settlement.moneyAdvanceId.toString() : ''
        };
        console.log('✅ Form data initialized:', {
          linkToAdvance: this.formData.linkToAdvance,
          moneyAdvanceId: this.formData.moneyAdvanceId,
          exchangeRate: this.formData.exchangeRate // ✅ Log the set value
        });

        // ✅ FIX 2: Add initialization flag to prevent watchers from overriding during init
        this._isInitializing = true;

        // If linked to advance, ensure currency sync after money advances are loaded
        if (this.formData.linkToAdvance === 'true') {
          this.$nextTick(() => {
            this.waitForAdvancesAndSync();
            // Clear initialization flag after sync
            this._isInitializing = false;
          });
        } else {
          // Clear initialization flag
          this.$nextTick(() => {
            this._isInitializing = false;
          });
        }
      } else {
        // Create mode - set defaults
        this.formData = {
          settlementDate: this.today,
          method: '',
          amount: null,
          currencyId: '',
          exchangeRate: 1,
          // Default to 1
          bankAccountId: '',
          ministryId: '',
          chartAccountId: '',
          userId: this.user.id,
          notes: '',
          selectedInvoices: [],
          linkToAdvance: 'false',
          moneyAdvanceId: ''
        };
        this._isInitializing = true;

        // Set default currency if available
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => (c.code || c.currencyCode) === 'LAK') || this.currencies[0];
          this.formData.currencyId = defaultCurrency.id;
        }
        this.$nextTick(() => {
          this._isInitializing = false;
        });
      }
      this.errors = {};
      this.formErrors = [];
    },
    // Helper method to wait for advances to load and then sync
    waitForAdvancesAndSync() {
      console.log('🔄 Waiting for advances to load and sync...');
      const checkAndSync = () => {
        console.log('🔍 Check and sync - Available advances:', this.availableAdvances.length, 'Loading:', this.loadingAdvances);
        if (this.availableAdvances.length > 0 && this.formData.moneyAdvanceId) {
          console.log('✅ Found advances, looking for advance ID:', this.formData.moneyAdvanceId);

          // Find the specific advance
          const foundAdvance = this.availableAdvances.find(advance => advance.id.toString() === this.formData.moneyAdvanceId.toString());
          if (foundAdvance) {
            console.log('🎯 Found matching advance:', foundAdvance);
            this.syncCurrencyFromAdvance();
            this.syncAmountFromAdvance();
          } else {
            console.warn('⚠️ Advance not found in available advances list. Available IDs:', this.availableAdvances.map(a => a.id));
          }
        } else if (!this.loadingAdvances) {
          console.log('🔄 No advances loaded yet and not loading, retrying...');
          // If not loading and no advances, try again after a short delay
          setTimeout(checkAndSync, 200);
        }
      };

      // Start checking
      checkAndSync();
    },
    resetForm() {
      this.formData = {
        settlementDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1,
        // Reset to default
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: this.user.id,
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: ''
      };
      this.errors = {};
      this.formErrors = [];
      this.loading = false;

      // Ensure browser dialog is closed and body scroll is restored
      if (this.showAdvanceBrowser) {
        this.showAdvanceBrowser = false;
        this.selectedAdvanceForBrowser = null;
        document.body.style.overflow = 'auto';
      }
    },
    // New method to handle currency changes
    // Fix 3: Update handleCurrencyChange to be more careful about overriding
    handleCurrencyChange() {
      console.log('🔄 Currency change detected:', {
        isInitializing: this._isInitializing,
        isEditMode: this.isEditMode,
        isBaseCurrency: this.isBaseCurrency,
        currentExchangeRate: this.formData.exchangeRate
      });
      if (this.isBaseCurrency) {
        // ✅ FIX 4: Only auto-set to 1 if not in edit mode or if rate is null/undefined
        if (!this.isEditMode || this.formData.exchangeRate === null || this.formData.exchangeRate === undefined) {
          this.formData.exchangeRate = 1;
          console.log('✅ Set exchange rate to 1 for base currency');
        } else {
          console.log('⚠️ Preserving existing exchange rate in edit mode:', this.formData.exchangeRate);
        }
      } else if (!this.formData.exchangeRate || this.formData.exchangeRate === 1) {
        // You could potentially fetch exchange rate from an API here
        // For now, just ensure it's not 1 for non-base currencies
        if (!this.isEditMode) {
          this.formData.exchangeRate = null;
        }
      }
    },
    // New method to calculate equivalent amount
    calculateEquivalentAmount() {
      // This method can be used to trigger reactivity or perform additional calculations
      // The computed property `equivalentAmountLAK` handles the actual calculation
    },
    async loadMoneyAdvances() {
      this.loadingAdvances = true;
      console.log('📥 Loading money advances...');
      try {
        // Load available money advances that can be linked
        const params = {
          status: ['pending', 'approved'],
          available_for_settlement: true
        };

        // If we have a specific money advance ID, make sure to include it
        if (this.formData.moneyAdvanceId) {
          params.include_advance_id = this.formData.moneyAdvanceId;
          console.log('🎯 Including specific advance ID:', this.formData.moneyAdvanceId);
        }
        const {
          data
        } = await this.$axios.get('/api/money-advances', {
          params
        });
        if (data && data.success) {
          this.availableAdvances = data.data || [];
          console.log('✅ Loaded advances:', this.availableAdvances.length, 'advances');

          // If we have a specific advance ID, make sure it's in the list
          if (this.formData.moneyAdvanceId) {
            const foundAdvance = this.availableAdvances.find(advance => advance.id.toString() === this.formData.moneyAdvanceId.toString());
            if (!foundAdvance) {
              console.warn('⚠️ Specific advance not found in list, fetching individually...');
              // Try to fetch the specific advance
              try {
                const {
                  data: advanceData
                } = await this.$axios.get(`/api/money-advances/${this.formData.moneyAdvanceId}`);
                if (advanceData && advanceData.success) {
                  console.log('✅ Found individual advance, adding to list');
                  this.availableAdvances.unshift(advanceData.data);
                }
              } catch (error) {
                console.error('❌ Error fetching individual advance:', error);
              }
            } else {
              console.log('✅ Found advance in list:', foundAdvance.id);
            }
          }
        } else {
          this.availableAdvances = [];
          console.warn('⚠️ No data returned from money advances API');
        }
        this.filteredAdvances = [...this.availableAdvances];
        console.log('📋 Final available advances:', this.availableAdvances.map(a => ({
          id: a.id,
          status: a.status
        })));
      } catch (error) {
        console.error('❌ Error loading money advances:', error);
        this.availableAdvances = [];
        this.filteredAdvances = [];
      } finally {
        this.loadingAdvances = false;
      }
    },
    handleMethodChange() {
      // Reset bank account when method changes
      if (this.formData.method !== 'bank_transfer') {
        this.formData.bankAccountId = '';
      }
      // Reset selected invoices when method changes
      if (this.formData.method !== 'deduction') {
        this.formData.selectedInvoices = [];
      }
      // Clear validation errors
      this.clearFieldError('bankAccountId');
    },
    updateSelectedInvoicesAmount() {
      // Automatically update amount based on selected invoices
      if (this.formData.method === 'deduction') {
        this.formData.amount = this.selectedInvoicesTotal;
      }
    },
    updateSelectedCurrency() {
      // Reset bank account if currency changes and current bank account doesn't match
      if (this.selectedBankAccount && this.selectedCurrency) {
        const bankCurrency = this.selectedBankAccount.currency;
        const selectedCurrency = this.selectedCurrency.code || this.selectedCurrency.currencyCode;
        if (bankCurrency && bankCurrency !== selectedCurrency) {
          this.formData.bankAccountId = '';
        }
      }
    },
    updateSelectedBankAccount() {
      // Any additional logic when bank account changes
    },
    updateSelectedMinistry() {
      // Any additional logic when ministry changes
    },
    clearAdvanceSelection() {
      this.formData.moneyAdvanceId = '';
      this.formData.linkToAdvance = 'false';

      // Reset currency to default when unlinking
      if (this.currencies.length > 0) {
        const defaultCurrency = this.currencies.find(c => (c.code || c.currencyCode) === 'LAK') || this.currencies[0];
        this.formData.currencyId = defaultCurrency.id;
        this.formData.exchangeRate = 1; // Reset exchange rate
      }

      // Reset amount
      this.formData.amount = null;
    },
    updateSelectedAdvance() {
      console.info(`ອິນວອຍຖືກເລືອກ ${JSON.stringify(this.selectedAdvance)}`);
      if (this.selectedAdvance) {
        console.info(`Logging sync currency...`);
        this.syncCurrencyFromAdvance();
        this.syncAmountFromAdvance();
      }
    },
    // New method to sync currency from money advance

    // Fix 4: Update syncCurrencyFromAdvance to preserve existing rates
    syncCurrencyFromAdvance() {
      if (!this.selectedAdvance) return;
      const advanceCurrency = this.getAdvanceCurrency();
      if (advanceCurrency) {
        const selectedCurrency = this.currencies.find(c => c.id == advanceCurrency.id) || this.currencies[0];
        this.formData.currencyId = advanceCurrency.id;
        // this.formData.exchangeRate = selectedCurrency.rate
        // ✅ FIX 5: Better logic for syncing exchange rate
        if (this.selectedAdvance.exchangeRate && this.selectedAdvance.exchangeRate !== null) {
          this.formData.exchangeRate = this.selectedAdvance.exchangeRate;
          console.log('✅ Synced exchange rate from advance:', this.selectedAdvance.exchangeRate);
        } else {
          // Only set to 1 if we don't have an existing rate and it's base currency
          if (this.isBaseCurrency && (this.formData.exchangeRate === null || this.formData.exchangeRate === undefined)) {
            this.formData.exchangeRate = 1;
            console.log('✅ Set default exchange rate for base currency');
          }
          // For non-base currencies, preserve existing rate or leave as is
          console.log('⚠️ No exchange rate in advance, preserving current:', this.formData.exchangeRate);
        }
        console.log('Auto-selected currency:', advanceCurrency.id, 'from money advance');
      } else {
        console.warn('Could not determine currency from money advance:', this.selectedAdvance);
      }
    },
    // Fix 5: Add method to debug exchange rate issues
    debugExchangeRate() {
      var _this$settlement, _this$settlement2, _this$settlement3;
      console.clear();
      console.log('🔍 === EXCHANGE RATE DEBUG ===');
      console.log('Settlement data:', {
        exchangeRate: (_this$settlement = this.settlement) === null || _this$settlement === void 0 ? void 0 : _this$settlement.exchangeRate,
        currencyId: (_this$settlement2 = this.settlement) === null || _this$settlement2 === void 0 ? void 0 : _this$settlement2.currencyId,
        method: (_this$settlement3 = this.settlement) === null || _this$settlement3 === void 0 ? void 0 : _this$settlement3.method
      });
      console.log('Form data:', {
        exchangeRate: this.formData.exchangeRate,
        currencyId: this.formData.currencyId
      });
      console.log('Computed values:', {
        selectedCurrencyCode: this.selectedCurrencyCode,
        isBaseCurrency: this.isBaseCurrency,
        isEditMode: this.isEditMode,
        isInitializing: this._isInitializing
      });
      console.log('🔍 === END DEBUG ===');
    },
    // New method to sync amount from money advance
    syncAmountFromAdvance() {
      if (this.selectedAdvance && this.selectedAdvance.amount) {
        this.formData.amount = this.selectedAdvance.amount;
        console.log('Auto-filled amount:', this.selectedAdvance.amount, 'from money advance');
      }
    },
    // Helper method to get advance currency
    getAdvanceCurrency() {
      if (!this.selectedAdvance) return null;

      // Try different ways to get currency from advance
      if (this.selectedAdvance.currencyId) {
        return this.currencies.find(c => c.id == this.selectedAdvance.currencyId);
      }
      if (this.selectedAdvance.currencyCode) {
        return this.currencies.find(c => (c.code || c.currencyCode) === this.selectedAdvance.currencyCode);
      }
      if (this.selectedAdvance.currency) {
        if (typeof this.selectedAdvance.currency === 'object') {
          return this.currencies.find(c => c.id == this.selectedAdvance.currency.id);
        } else {
          return this.currencies.find(c => (c.code || c.currencyCode) === this.selectedAdvance.currency);
        }
      }
      return null;
    },
    browseMoneyAdvances() {
      this.showAdvanceBrowser = true;
      this.selectedAdvanceForBrowser = this.selectedAdvance;
      // Prevent body scrolling when browser modal is open
      document.body.style.overflow = 'hidden';
    },
    closeAdvanceBrowser() {
      this.showAdvanceBrowser = false;
      this.selectedAdvanceForBrowser = null;
      this.advanceSearch.query = '';
      this.advanceSearch.status = '';
      this.filteredAdvances = [...this.availableAdvances];
      // Restore body scrolling
      document.body.style.overflow = 'auto';
    },
    handleAdvanceBrowserOverlayClick(event) {
      // Only close if clicking directly on the overlay, not on child elements
      if (event.target === event.currentTarget) {
        this.closeAdvanceBrowser();
      }
    },
    selectAdvanceFromBrowser(advance) {
      this.selectedAdvanceForBrowser = advance;
    },
    confirmAdvanceSelection() {
      if (this.selectedAdvanceForBrowser) {
        this.formData.moneyAdvanceId = this.selectedAdvanceForBrowser.id;
        this.closeAdvanceBrowser();

        // Sync currency and amount after selection
        this.$nextTick(() => {
          this.syncCurrencyFromAdvance();
          this.syncAmountFromAdvance();
        });
      }
    },
    searchAdvances() {
      this.filterAdvances();
    },
    filterAdvances() {
      let filtered = [...this.availableAdvances];

      // Filter by status
      if (this.advanceSearch.status) {
        filtered = filtered.filter(advance => advance.status === this.advanceSearch.status);
      }

      // Filter by search query
      if (this.advanceSearch.query) {
        const query = this.advanceSearch.query.toLowerCase();
        filtered = filtered.filter(advance => advance.purpose && advance.purpose.toLowerCase().includes(query) || advance.note && advance.note.toLowerCase().includes(query) || advance.id.toString().includes(query));
      }
      this.filteredAdvances = filtered;
    },
    validateForm() {
      this.errors = {};
      this.formErrors = [];

      // Required fields validation
      if (!this.formData.settlementDate) {
        this.errors.settlementDate = 'ກະລຸນາເລືອກວັນທີ';
        this.formErrors.push('Settlement date is required');
      }
      if (!this.formData.method) {
        this.errors.method = 'ກະລຸນາເລືອກວິທີການຊຳລະ';
        this.formErrors.push('Payment method is required');
      }
      if (!this.formData.amount || this.formData.amount <= 0) {
        this.errors.amount = 'ກະລຸນາໃສ່ຈຳນວນເງິນທີ່ຖືກຕ້ອງ';
        this.formErrors.push('Amount is required and must be greater than 0');
      }
      if (!this.formData.currencyId) {
        this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ';
        this.formErrors.push('Currency selection is required');
      }

      // New exchange rate validation
      if (this.formData.exchangeRate && this.formData.exchangeRate <= 0) {
        this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0';
        this.formErrors.push('Exchange rate must be greater than 0');
      }
      if (!this.formData.userId) {
        this.errors.userId = 'ກະລຸນາເລືອກຜູ້ລົງບັນຊີ';
        this.formErrors.push('User selection is required');
      }

      // Conditional validation
      if (this.formData.method === 'bank_transfer' && !this.formData.bankAccountId) {
        this.errors.bankAccountId = 'ກະລຸນາເລືອກບັນຊີທະນາຄານ';
        this.formErrors.push('Bank account is required for bank transfer');
      }

      // Special validation for linked advances
      if (this.isLinkedToAdvance && this.selectedAdvance) {
        const advanceCurrency = this.getAdvanceCurrency();
        if (advanceCurrency && this.formData.currencyId != advanceCurrency.id) {
          this.errors.currencyId = 'ສະກຸນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າ';
          this.formErrors.push('Currency must match the selected money advance');
        }
      }
      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters');
      }
      if (this.users.length === 0) {
        this.formErrors.push('No users available. Please contact administrator.');
      }
      if (this.currencies.length === 0) {
        this.formErrors.push('No currencies available. Please contact administrator.');
      }
      return this.formErrors.length === 0;
    },
    clearFieldError(fieldName) {
      if (this.errors[fieldName]) {
        this.$delete(this.errors, fieldName);
      }
    },
    async saveSettlement() {
      if (!this.validateForm()) {
        return;
      }
      this.loading = true;
      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData,
          selectedInvoices: this.formData.method === 'deduction' ? this.formData.selectedInvoices : [],
          // 🆕 FIX: Add missing bookingDate field using settlementDate
          bookingDate: this.formData.settlementDate
        };

        // Remove empty values and unused fields
        Object.keys(submitData).forEach(key => {
          if (submitData[key] === '' || submitData[key] === null) {
            delete submitData[key];
          }
        });

        // Remove advance-related fields if not linking
        if (submitData.linkToAdvance !== 'true') {
          delete submitData.moneyAdvanceId;
        }
        delete submitData.linkToAdvance;
        console.log('📤 Submitting settlement data:', submitData);

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
    formatCurrency(amount, currency = 'LAK', locale = 'en-US', options = {}) {
      // Validate inputs
      if (typeof amount !== 'number' && amount !== null && amount !== undefined) {
        console.warn('formatCurrency: amount should be a number');
        amount = 0;
      }

      // Default formatting options
      const defaultOptions = {
        style: 'currency',
        currency: currency.toUpperCase(),
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
        ...options
      };
      try {
        return new Intl.NumberFormat(locale, defaultOptions).format(amount || 0);
      } catch (error) {
        console.error('Currency formatting error:', error);
        // Fallback to simple formatting
        return `${currency.toUpperCase()} ${(amount || 0).toLocaleString()}`;
      }
    },
    formatDate(date) {
      if (!date) return 'ບໍ່ລະບຸ';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatAdvanceOption(advance) {
      return `#${advance.id} - ${this.formatCurrency(advance.amount, advance.currency.code)} - ${advance.purpose || 'No purpose'}`;
    },
    formatStatus(status) {
      const statusLabels = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        settled: 'ສຳເລັດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
    },
    // Debug method (remove in production)
    debugCurrencySync() {
      console.log('--- Currency Sync Debug ---');
      console.log('Is linked to advance:', this.isLinkedToAdvance);
      console.log('Selected advance:', this.selectedAdvance);
      console.log('Current currency ID:', this.formData.currencyId);
      console.log('Available currencies:', this.currencies.map(c => ({
        id: c.id,
        code: c.code || c.currencyCode,
        name: c.name || c.currencyName
      })));
      if (this.selectedAdvance) {
        console.log('Advance currency info:', {
          currencyId: this.selectedAdvance.currencyId,
          currencyCode: this.selectedAdvance.currencyCode,
          currency: this.selectedAdvance.currency
        });
        const advanceCurrency = this.getAdvanceCurrency();
        console.log('Resolved advance currency:', advanceCurrency);
      }
    },
    // 🐛 DEBUG: Form validation debug method
    debugFormValidation() {
      console.clear();
      console.log('🔍 === FORM VALIDATION DEBUG ===');

      // Call isFormValid to see the debug output
      const isValid = this.isFormValid;

      // Show what will be submitted
      const submitData = {
        ...this.formData,
        bookingDate: this.formData.settlementDate,
        // Show the bookingDate that will be added
        selectedInvoices: this.formData.method === 'deduction' ? this.formData.selectedInvoices : []
      };
      console.log('📋 Current Form Data:', JSON.stringify(this.formData, null, 2));
      console.log('📤 Data That Will Be Submitted:', JSON.stringify(submitData, null, 2));
      console.log('👥 Available Users:', this.users.length, this.users.map(u => ({
        id: u.id,
        name: u.cus_name || u.name
      })));
      console.log('💱 Available Currencies:', this.currencies.length, this.currencies.map(c => ({
        id: c.id,
        code: c.code || c.currencyCode
      })));
      console.log('🏦 Available Bank Accounts:', this.bankAccounts.length);
      console.log('🏛️ Available Ministries:', this.ministries.length);
      console.log('✅ Form Valid:', isValid);
      console.log('🔄 Loading:', this.loading);
      console.log('🚫 Button Disabled:', this.loading || !isValid);

      // Check specific issues
      if (!this.formData.userId) {
        console.warn('⚠️ ISSUE: No user selected');
      }
      if (!this.formData.method) {
        console.warn('⚠️ ISSUE: No payment method selected');
      }
      if (!this.formData.amount || parseFloat(this.formData.amount) <= 0) {
        console.warn('⚠️ ISSUE: Invalid amount');
      }
      if (!this.formData.currencyId) {
        console.warn('⚠️ ISSUE: No currency selected');
      }
      if (!this.formData.settlementDate) {
        console.warn('⚠️ ISSUE: No settlement date');
      }
      if (this.formData.exchangeRate && this.formData.exchangeRate <= 0) {
        console.warn('⚠️ ISSUE: Invalid exchange rate');
      }
      console.log('🔍 === END DEBUG ===');

      // Show alert with summary
      alert(`Form Valid: ${isValid}\nButton Disabled: ${this.loading || !isValid}\n\nCheck console for detailed debug info.\n\n✅ bookingDate will be set to: ${this.formData.settlementDate}\n💱 Exchange Rate: ${this.formData.exchangeRate}`);
    }
  }
});
// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementDialogvue_type_script_lang_js_ = (settlementDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(537)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "284f8c8b",
  "6aebe1cc"
  
)

/* harmony default export */ var settlementDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-settlement-dialog.js.map