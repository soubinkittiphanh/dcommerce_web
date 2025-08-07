exports.ids = [55];
exports.modules = {

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(601);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5422c78c", content, true, context)
};

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(524);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0bf00b78_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-0bf00b78]{align-items:center;animation:fadeIn-0bf00b78 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-0bf00b78{0%{opacity:0}to{opacity:1}}.detail-dialog[data-v-0bf00b78]{animation:slideIn-0bf00b78 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:850px;overflow:hidden;width:95%}@keyframes slideIn-0bf00b78{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-0bf00b78]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-0bf00b78]{font-size:20px;opacity:.9}.modal-title[data-v-0bf00b78]{font-size:20px;font-weight:600;margin:0}.header-actions[data-v-0bf00b78]{align-items:center;display:flex;gap:8px}.btn-icon[data-v-0bf00b78]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;opacity:.8;padding:8px;transition:all .2s}.btn-icon[data-v-0bf00b78]:hover{background:hsla(0,0%,100%,.1);opacity:1}.close-btn[data-v-0bf00b78]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-0bf00b78]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-0bf00b78]{max-height:70vh;overflow-y:auto;padding:0}.detail-body[data-v-0bf00b78]{background:#f8f9fa}.detail-loading[data-v-0bf00b78]{align-items:center;background:#fff;border:2px solid #e9ecef;border-radius:8px;color:#666;display:flex;justify-content:center;margin:20px;padding:60px}.spinner-small[data-v-0bf00b78]{animation:spin-0bf00b78 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-0bf00b78{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.detail-content[data-v-0bf00b78]{display:flex;flex-direction:column;gap:20px;padding:24px}.detail-status[data-v-0bf00b78]{background:#fff;border:2px solid #e9ecef;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:0;padding:20px;text-align:center}.status-badge[data-v-0bf00b78]{align-items:center;border:2px solid transparent;border-radius:25px;display:inline-flex;font-size:16px;font-weight:600;gap:8px;letter-spacing:.5px;padding:12px 24px;text-transform:uppercase}.status-badge.status-pending[data-v-0bf00b78]{background:linear-gradient(135deg,#f39c12,#e67e22);border-color:#d68910;color:#fff}.status-badge.status-approved[data-v-0bf00b78]{background:linear-gradient(135deg,#27ae60,#229954);border-color:#1e8449;color:#fff}.status-badge.status-settled[data-v-0bf00b78]{background:linear-gradient(135deg,#3498db,#2980b9);border-color:#2471a3;color:#fff}.status-badge.status-rejected[data-v-0bf00b78]{background:linear-gradient(135deg,#e74c3c,#c0392b);border-color:#a93226;color:#fff}.status-badge.status-cancelled[data-v-0bf00b78]{background:linear-gradient(135deg,#95a5a6,#7f8c8d);border-color:#6c7b7d;color:#fff}.detail-section[data-v-0bf00b78]{background:#fff;border:2px solid #e9ecef;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:20px;padding:24px;transition:all .2s ease}.detail-section[data-v-0bf00b78]:hover{border-color:#dee2e6;box-shadow:0 4px 12px rgba(0,0,0,.12)}.detail-section[data-v-0bf00b78]:last-child{margin-bottom:0}.section-title[data-v-0bf00b78]{align-items:center;border-bottom:3px solid #ecf0f1;color:#2c3e50;display:flex;font-size:18px;font-weight:700;gap:12px;margin-bottom:20px;padding-bottom:12px}.section-title i[data-v-0bf00b78]{color:#3498db;font-size:16px}.detail-grid[data-v-0bf00b78]{grid-gap:24px;display:grid;gap:24px;grid-template-columns:1fr 1fr}.detail-item[data-v-0bf00b78]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:8px;display:flex;flex-direction:column;gap:8px;padding:16px;transition:all .2s ease}.detail-item[data-v-0bf00b78]:hover{background:#e8f4fd;border-color:#3498db}.detail-item.full-width[data-v-0bf00b78]{grid-column:1/-1}.detail-item label[data-v-0bf00b78]{color:#6c757d;font-size:12px;font-weight:700;letter-spacing:.8px;margin-bottom:4px;text-transform:uppercase}.detail-value[data-v-0bf00b78]{color:#2c3e50;font-size:16px;font-weight:600;word-break:break-word}.amount-display[data-v-0bf00b78]{background:linear-gradient(135deg,#d5f4e6,#fafafa);border:2px solid #a9dfbf;border-radius:8px;color:#27ae60;font-size:28px;font-weight:800;padding:8px;text-align:center}.amount-display small[data-v-0bf00b78]{color:#6c757d;font-size:16px;font-weight:500;margin-left:8px}.exchange-rate-display[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#f4ecf7,#fafafa);border:2px solid #d7bde2;border-radius:8px;color:#8e44ad;display:flex;font-size:18px;font-weight:700;gap:8px;justify-content:center;padding:12px;text-align:center}.exchange-rate-display i[data-v-0bf00b78]{color:#9b59b6;font-size:16px}.user-info[data-v-0bf00b78]{align-items:center;background:#e8f4fd;border:1px solid #85c1e9;border-radius:6px;display:flex;gap:10px;padding:8px 12px}.user-info i[data-v-0bf00b78]{color:#3498db;font-size:14px}.timeline[data-v-0bf00b78]{background:#fafafa;border:2px solid #e9ecef;border-radius:8px;padding:20px;position:relative}.timeline[data-v-0bf00b78]:before{background:linear-gradient(180deg,#3498db,#ecf0f1);border-radius:2px;bottom:20px;content:\"\";left:35px;position:absolute;top:20px;width:3px}.timeline-item[data-v-0bf00b78]{align-items:center;background:#fff;border:2px solid #ecf0f1;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);display:flex;margin-bottom:24px;margin-left:20px;padding:16px;position:relative}.timeline-item[data-v-0bf00b78]:last-child{margin-bottom:0}.timeline-icon[data-v-0bf00b78]{align-items:center;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.2);color:#fff;display:flex;font-size:16px;height:40px;justify-content:center;left:-36px;margin-right:20px;position:absolute;width:40px;z-index:1}.timeline-icon.created[data-v-0bf00b78]{background:linear-gradient(135deg,#3498db,#2980b9)}.timeline-icon.approved[data-v-0bf00b78]{background:linear-gradient(135deg,#27ae60,#229954)}.timeline-icon.due[data-v-0bf00b78]{background:linear-gradient(135deg,#f39c12,#e67e22)}.timeline-icon.due.overdue[data-v-0bf00b78]{animation:pulse-0bf00b78 2s infinite;background:linear-gradient(135deg,#e74c3c,#c0392b)}.timeline-icon.settled[data-v-0bf00b78]{background:linear-gradient(135deg,#9b59b6,#8e44ad)}@keyframes pulse-0bf00b78{0%{box-shadow:0 0 0 0 rgba(231,76,60,.7),0 2px 8px rgba(0,0,0,.2)}70%{box-shadow:0 0 0 12px rgba(231,76,60,0),0 2px 8px rgba(0,0,0,.2)}to{box-shadow:0 0 0 0 rgba(231,76,60,0),0 2px 8px rgba(0,0,0,.2)}}.timeline-content[data-v-0bf00b78]{flex:1;margin-left:20px}.timeline-content label[data-v-0bf00b78]{color:#6c757d;display:block;font-size:12px;font-weight:700;letter-spacing:.5px;margin-bottom:4px;text-transform:uppercase}.timeline-date[data-v-0bf00b78]{color:#2c3e50;font-size:15px;font-weight:600}.timeline-date.overdue[data-v-0bf00b78]{color:#e74c3c;font-weight:700}.overdue-badge[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#e74c3c,#c0392b);border:1px solid #a93226;border-radius:12px;color:#fff;display:inline-flex;font-size:11px;font-weight:600;gap:4px;margin-left:8px;padding:4px 8px}.notes-content[data-v-0bf00b78]{background:#fff9e6;border:2px solid #f7dc6f;border-left:6px solid #f1c40f;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.05);color:#2c3e50;font-size:15px;font-style:italic;line-height:1.8;padding:20px}.history-list[data-v-0bf00b78]{display:flex;flex-direction:column;gap:12px}.history-item[data-v-0bf00b78]{align-items:center;background:#fff;border:2px solid #ecf0f1;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.05);display:flex;gap:16px;padding:16px;transition:all .2s ease}.history-item[data-v-0bf00b78]:hover{background:#f8fcff;border-color:#3498db}.history-icon[data-v-0bf00b78]{align-items:center;background:linear-gradient(135deg,#3498db,#2980b9);border:2px solid #85c1e9;border-radius:50%;color:#fff;display:flex;flex-shrink:0;font-size:12px;height:32px;justify-content:center;width:32px}.history-content[data-v-0bf00b78]{display:flex;flex:1;flex-direction:column;gap:4px}.history-action[data-v-0bf00b78]{color:#2c3e50;font-size:15px;font-weight:700;text-transform:capitalize}.history-user[data-v-0bf00b78]{color:#6c757d;font-size:13px;font-weight:500}.history-date[data-v-0bf00b78]{color:#95a5a6;font-size:12px;font-weight:400}.detail-error[data-v-0bf00b78]{background:#fff;border:2px solid #fadbd8;border-radius:12px;color:#e74c3c;margin:20px;padding:60px 20px;text-align:center}.detail-error i[data-v-0bf00b78]{font-size:48px;margin-bottom:15px;opacity:.7}.detail-footer[data-v-0bf00b78]{align-items:center;background:#f8f9fa;border-top:2px solid #e9ecef;display:flex;justify-content:space-between;padding:16px 24px}.close-detail-btn[data-v-0bf00b78]{align-items:center;background:#6c757d;border:none;border-radius:6px;color:#fff;cursor:pointer;display:flex;font-weight:500;gap:6px;padding:8px 16px;transition:all .2s ease}.close-detail-btn[data-v-0bf00b78]:hover{background:#5a6268;transform:translateY(-1px)}.detail-actions[data-v-0bf00b78]{align-items:center;display:flex;gap:8px}.detail-actions .action-btn[data-v-0bf00b78]{align-items:center;border:none;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.1);cursor:pointer;display:flex;font-size:14px;height:36px;justify-content:center;padding:0;position:relative;transition:all .2s ease;width:36px}.detail-actions .action-btn[data-v-0bf00b78]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-2px)}.detail-actions .action-btn[data-v-0bf00b78]:active{box-shadow:0 1px 2px rgba(0,0,0,.1);transform:translateY(0)}.detail-actions .btn-warning[data-v-0bf00b78]{background:#ffc107;color:#212529}.detail-actions .btn-warning[data-v-0bf00b78]:hover{background:#e0a800}.detail-actions .btn-success[data-v-0bf00b78]{background:#28a745;color:#fff}.detail-actions .btn-success[data-v-0bf00b78]:hover{background:#218838}.detail-actions .btn-primary[data-v-0bf00b78]{background:#007bff;color:#fff}.detail-actions .btn-primary[data-v-0bf00b78]:hover{background:#0056b3}.btn[data-v-0bf00b78]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:6px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-0bf00b78]{background:#007bff;color:#fff}.btn-primary[data-v-0bf00b78]:hover{background:#0056b3}.btn-secondary[data-v-0bf00b78]{background:#6c757d;color:#fff}.btn-secondary[data-v-0bf00b78]:hover{background:#5a6268}.btn-sm[data-v-0bf00b78]{font-size:12px;padding:4px 8px}.detail-actions .action-btn[data-v-0bf00b78]:before{background:rgba(0,0,0,.8);border-radius:4px;bottom:-32px;color:#fff;content:attr(title);font-size:11px;left:50%;opacity:0;padding:4px 8px;pointer-events:none;position:absolute;transform:translateX(-50%);transition:opacity .2s ease;white-space:nowrap;z-index:10}.detail-actions .action-btn[data-v-0bf00b78]:hover:before{opacity:1}@media (max-width:768px){.detail-dialog[data-v-0bf00b78]{margin:10px;width:98%}.detail-grid[data-v-0bf00b78]{gap:16px;grid-template-columns:1fr}.detail-footer[data-v-0bf00b78]{align-items:center;flex-direction:row;justify-content:space-between;padding:12px 16px}.close-detail-btn[data-v-0bf00b78]{font-size:14px;padding:6px 12px}.detail-actions[data-v-0bf00b78]{gap:6px}.detail-actions .action-btn[data-v-0bf00b78]{font-size:12px;height:32px;width:32px}.detail-actions .action-btn[data-v-0bf00b78]:before{bottom:-28px;font-size:10px}.timeline[data-v-0bf00b78]{padding:16px}.timeline[data-v-0bf00b78]:before{left:25px}.timeline-item[data-v-0bf00b78]{margin-left:10px;padding:12px}.timeline-icon[data-v-0bf00b78]{font-size:12px;height:32px;left:-26px;width:32px}.amount-display[data-v-0bf00b78]{font-size:24px}.exchange-rate-display[data-v-0bf00b78]{font-size:16px}.detail-content[data-v-0bf00b78],.detail-section[data-v-0bf00b78],.modal-header[data-v-0bf00b78]{padding:16px}.section-title[data-v-0bf00b78]{font-size:16px}}@media (max-width:480px){.detail-content[data-v-0bf00b78],.detail-section[data-v-0bf00b78]{padding:12px}.section-title[data-v-0bf00b78]{font-size:14px}.amount-display[data-v-0bf00b78]{font-size:20px}.exchange-rate-display[data-v-0bf00b78]{font-size:14px}.timeline-content[data-v-0bf00b78]{margin-left:10px}}@media print{.modal-overlay[data-v-0bf00b78]{-webkit-backdrop-filter:none!important;backdrop-filter:none!important;background:none!important;position:static!important}.detail-dialog[data-v-0bf00b78]{box-shadow:none!important;margin:0!important;max-width:none!important;width:100%!important}.modal-footer[data-v-0bf00b78],.modal-header[data-v-0bf00b78]{display:none!important}.detail-body[data-v-0bf00b78]{background:#fff!important;max-height:none!important}.btn[data-v-0bf00b78],.header-actions[data-v-0bf00b78]{display:none!important}.detail-section[data-v-0bf00b78]{-moz-column-break-inside:avoid;border:2px solid #333!important;break-inside:avoid;margin-bottom:20px!important;page-break-inside:avoid}.section-title[data-v-0bf00b78]{border-bottom:2px solid #333!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDetailDialog/index.vue?vue&type=template&id=0bf00b78&scoped=true&
var render = function render() {
  var _vm$details$currency, _vm$details$maker, _vm$details$checker;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog detail-dialog\" data-v-0bf00b78><div class=\"modal-header\" data-v-0bf00b78><div class=\"modal-title-section\" data-v-0bf00b78><i class=\"fas fa-file-invoice-dollar modal-icon\" data-v-0bf00b78></i> <h5 class=\"modal-title\" data-v-0bf00b78>ລາຍລະອຽດການອອກລາຍຈ່າຍ</h5></div> <div class=\"header-actions\" data-v-0bf00b78><button title=\"Print\" class=\"btn-icon\" data-v-0bf00b78><i class=\"fas fa-print\" data-v-0bf00b78></i></button> <button title=\"Download\" class=\"btn-icon\" data-v-0bf00b78><i class=\"fas fa-download\" data-v-0bf00b78></i></button> <button class=\"close-btn\" data-v-0bf00b78><i class=\"fas fa-times\" data-v-0bf00b78></i></button></div></div> <div class=\"modal-body detail-body\" data-v-0bf00b78>" + (_vm.loading ? "<div class=\"detail-loading\" data-v-0bf00b78><div class=\"spinner-small\" data-v-0bf00b78></div> <p data-v-0bf00b78>Loading details...</p></div>" : _vm.details ? "<div class=\"detail-content\" data-v-0bf00b78><div class=\"detail-status\" data-v-0bf00b78><span" + _vm._ssrClass(null, ['status-badge', 'status-' + _vm.details.status]) + " data-v-0bf00b78><i" + _vm._ssrClass("fas", _vm.getStatusIcon(_vm.details.status)) + " data-v-0bf00b78></i>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getStatusInLao(_vm.details.status)) + "\n          ") + "</span></div> <div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-info-circle\" data-v-0bf00b78></i>\n            ຂໍ້ມູນເບື້ອງຕົ້ນ\n          </h6> <div class=\"detail-grid\" data-v-0bf00b78><div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ID</label> <span class=\"detail-value\" data-v-0bf00b78>" + _vm._ssrEscape("#" + _vm._s(_vm.details.id)) + "</span></div> <div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ຈຳນວນເງິນ</label> <span class=\"detail-value amount-display\" data-v-0bf00b78>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatCurrency(_vm.details.amount)) + "\n                ") + "<small data-v-0bf00b78>" + _vm._ssrEscape(_vm._s((_vm$details$currency = _vm.details.currency) === null || _vm$details$currency === void 0 ? void 0 : _vm$details$currency.code)) + "</small></span></div> " + (_vm.details.exchangeRate ? "<div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ອັດຕາແລກປ່ຽນ</label> <span class=\"detail-value exchange-rate-display\" data-v-0bf00b78><i class=\"fas fa-exchange-alt\" data-v-0bf00b78></i>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatExchangeRate(_vm.details.exchangeRate)) + "\n              ") + "</span></div>" : "<!---->") + " <div class=\"detail-item full-width\" data-v-0bf00b78><label data-v-0bf00b78>ຈຸດປະສົງ</label> <span class=\"detail-value\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.details.purpose || 'No purpose specified')) + "</span></div></div></div> <div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-users\" data-v-0bf00b78></i>\n            ຜູ້ໃຊ້ ທີ່ກ່ຽວຂ້ອງ\n          </h6> <div class=\"detail-grid\" data-v-0bf00b78><div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ຜູ້ລົງບັນຊີ</label> <span class=\"detail-value user-info\" data-v-0bf00b78><i class=\"fas fa-user\" data-v-0bf00b78></i>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$details$maker = _vm.details.maker) === null || _vm$details$maker === void 0 ? void 0 : _vm$details$maker.cus_name) || 'N/A') + "\n              ") + "</span></div> <div class=\"detail-item\" data-v-0bf00b78><label data-v-0bf00b78>ຜູ້ອະນຸມັດ</label> <span class=\"detail-value user-info\" data-v-0bf00b78><i class=\"fas fa-user-check\" data-v-0bf00b78></i>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$details$checker = _vm.details.checker) === null || _vm$details$checker === void 0 ? void 0 : _vm$details$checker.cus_name) || 'Not yet approved') + "\n              ") + "</span></div></div></div> <div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-calendar\" data-v-0bf00b78></i>\n            ການເຄື່ອນໄຫວລາຍການ\n          </h6> <div class=\"timeline\" data-v-0bf00b78><div class=\"timeline-item\" data-v-0bf00b78><div class=\"timeline-icon created\" data-v-0bf00b78><i class=\"fas fa-plus\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ລົງບັນຊີລາຍຈ່າຍ</label> <span class=\"timeline-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.details.createdAt))) + "</span></div></div> " + (_vm.details.approvedAt ? "<div class=\"timeline-item\" data-v-0bf00b78><div class=\"timeline-icon approved\" data-v-0bf00b78><i class=\"fas fa-check\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ອະນຸມັດແລ້ວ</label> <span class=\"timeline-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.details.approvedAt))) + "</span></div></div>" : "<!---->") + " " + (_vm.details.dueDate ? "<div class=\"timeline-item\" data-v-0bf00b78><div" + _vm._ssrClass("timeline-icon due", {
    overdue: _vm.isOverdue(_vm.details.dueDate)
  }) + " data-v-0bf00b78><i class=\"fas fa-clock\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ວັນຄົບຮອບຄວນຊຳລະ</label> <span" + _vm._ssrClass("timeline-date", {
    overdue: _vm.isOverdue(_vm.details.dueDate)
  }) + " data-v-0bf00b78>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.formatDateTime(_vm.details.dueDate)) + "\n                  ") + (_vm.isOverdue(_vm.details.dueDate) ? "<span class=\"overdue-badge\" data-v-0bf00b78><i class=\"fas fa-exclamation-triangle\" data-v-0bf00b78></i> Overdue\n                  </span>" : "<!---->") + "</span></div></div>" : "<!---->") + " " + (_vm.details.settledAt ? "<div class=\"timeline-item\" data-v-0bf00b78><div class=\"timeline-icon settled\" data-v-0bf00b78><i class=\"fas fa-money-bill\" data-v-0bf00b78></i></div> <div class=\"timeline-content\" data-v-0bf00b78><label data-v-0bf00b78>ຮັບຊຳລະ</label> <span class=\"timeline-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(_vm.details.settledAt))) + "</span></div></div>" : "<!---->") + "</div></div> " + (_vm.details.note ? "<div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-sticky-note\" data-v-0bf00b78></i>\n            Notes\n          </h6> <div class=\"notes-content\" data-v-0bf00b78>" + _vm._ssrEscape("\n            " + _vm._s(_vm.details.note) + "\n          ") + "</div></div>" : "<!---->") + " " + (_vm.details.history && _vm.details.history.length > 0 ? "<div class=\"detail-section\" data-v-0bf00b78><h6 class=\"section-title\" data-v-0bf00b78><i class=\"fas fa-history\" data-v-0bf00b78></i>\n            Action History\n          </h6> <div class=\"history-list\" data-v-0bf00b78>" + _vm._ssrList(_vm.details.history, function (history, index) {
    return "<div class=\"history-item\" data-v-0bf00b78><div class=\"history-icon\" data-v-0bf00b78><i" + _vm._ssrClass("fas", _vm.getHistoryIcon(history.action)) + " data-v-0bf00b78></i></div> <div class=\"history-content\" data-v-0bf00b78><span class=\"history-action\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(history.action)) + "</span> <span class=\"history-user\" data-v-0bf00b78>" + _vm._ssrEscape("by " + _vm._s(history.user)) + "</span> <span class=\"history-date\" data-v-0bf00b78>" + _vm._ssrEscape(_vm._s(_vm.formatDateTime(history.createdAt))) + "</span></div></div>";
  }) + "</div></div>" : "<!---->") + "</div>" : "<div class=\"detail-error\" data-v-0bf00b78><i class=\"fas fa-exclamation-triangle\" data-v-0bf00b78></i> <p data-v-0bf00b78>Failed to load advance details</p> <button class=\"btn btn-primary btn-sm\" data-v-0bf00b78><i class=\"fas fa-redo\" data-v-0bf00b78></i> Try Again\n        </button></div>") + "</div> <div class=\"modal-footer detail-footer\" data-v-0bf00b78><button class=\"btn btn-secondary close-detail-btn\" data-v-0bf00b78><i class=\"fas fa-times\" data-v-0bf00b78></i>\n        Close\n      </button> <div class=\"detail-actions\" data-v-0bf00b78>" + (_vm.details && _vm.details.status === 'pending' ? "<button title=\"Edit\" class=\"btn btn-warning action-btn\" data-v-0bf00b78><i class=\"fas fa-edit\" data-v-0bf00b78></i></button>" : "<!---->") + " " + (_vm.details && _vm.details.status === 'pending' ? "<button title=\"Approve\" class=\"btn btn-success action-btn\" data-v-0bf00b78><i class=\"fas fa-check\" data-v-0bf00b78></i></button>" : "<!---->") + " " + (_vm.details && _vm.details.status === 'approved' ? "<button title=\"Create Settlement\" class=\"btn btn-success action-btn\" data-v-0bf00b78><i class=\"fas fa-file-invoice-dollar\" data-v-0bf00b78></i></button>" : "<!---->") + "</div></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentDetailDialog/index.vue?vue&type=template&id=0bf00b78&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDetailDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentDetailDialogvue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceDetailDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    details: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    statusLabels: {
      type: Object,
      default: () => ({
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        settled: 'ຊຳລະແລ້ວ',
        rejected: 'ປະຕິເສດ',
        cancelled: 'ຍົກເລີກ'
      })
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    printDetails() {
      this.$emit('print');
    },
    downloadDetails() {
      this.$emit('download');
    },
    retryLoad() {
      this.$emit('retry-load');
    },
    editAdvance() {
      this.$emit('edit', this.details);
    },
    approveAdvance() {
      this.$emit('approve', this.details);
    },
    createSettlement() {
      this.$emit('create-settlement', this.details);
    },
    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase();
    },
    getStatusIcon(status) {
      const icons = {
        pending: 'fa-clock',
        approved: 'fa-check-circle',
        settled: 'fa-money-bill-wave',
        rejected: 'fa-times-circle',
        cancelled: 'fa-ban'
      };
      return icons[status] || 'fa-question-circle';
    },
    getHistoryIcon(action) {
      const icons = {
        created: 'fa-plus',
        updated: 'fa-edit',
        approved: 'fa-check',
        settled: 'fa-money-bill',
        deleted: 'fa-trash',
        rejected: 'fa-times',
        cancelled: 'fa-ban'
      };
      return icons[action] || 'fa-history';
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    formatExchangeRate(rate) {
      if (!rate) return 'N/A';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 6
      }).format(rate);
    },
    formatDateTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString();
    },
    isOverdue(dueDate) {
      if (!dueDate) return false;
      return new Date(dueDate) < new Date();
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentDetailDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentDetailDialogvue_type_script_lang_js_ = (paymentDetailDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentDetailDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(600)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentDetailDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0bf00b78",
  "abe22b4c"
  
)

/* harmony default export */ var paymentDetailDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-payment-detail-dialog.js.map