exports.ids = [14];
exports.modules = {

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(656);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7069ae4f", content, true, context)
};

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_117ca84b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(569);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_117ca84b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_117ca84b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_117ca84b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_117ca84b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-117ca84b]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1050}.enhanced-dialog[data-v-117ca84b]{max-height:90vh;max-width:1200px}.enhanced-dialog[data-v-117ca84b],.invoice-browser-dialog[data-v-117ca84b]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;overflow:hidden;width:100%}.invoice-browser-dialog[data-v-117ca84b]{max-height:80vh;max-width:1000px}.modal-header[data-v-117ca84b]{background:linear-gradient(135deg,#28a745,#20c997);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;padding:20px}.modal-header[data-v-117ca84b],.modal-title[data-v-117ca84b]{align-items:center;display:flex}.modal-title[data-v-117ca84b]{font-size:18px;font-weight:600;gap:10px;margin:0}.close-button[data-v-117ca84b]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:20px;padding:5px;transition:background .2s}.close-button[data-v-117ca84b]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-117ca84b]{flex:1;overflow:hidden}.loading-state[data-v-117ca84b],.modal-body[data-v-117ca84b]{display:flex;flex-direction:column}.loading-state[data-v-117ca84b]{align-items:center;color:#666;justify-content:center;padding:40px}.spinner[data-v-117ca84b]{animation:spin-117ca84b 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#28a745;height:40px;margin-bottom:15px;width:40px}@keyframes spin-117ca84b{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.receipt-form[data-v-117ca84b]{display:flex;flex:1;flex-direction:column;overflow:hidden}.tab-navigation[data-v-117ca84b]{background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex}.tab-btn[data-v-117ca84b]{align-items:center;background:none;border:none;color:#666;cursor:pointer;display:flex;flex:1;font-size:14px;font-weight:500;gap:8px;justify-content:center;padding:15px 20px;position:relative;transition:all .2s}.tab-btn[data-v-117ca84b]:hover{background:rgba(40,167,69,.1);color:#28a745}.tab-btn.active[data-v-117ca84b]{background:#fff;border-bottom:3px solid #28a745;color:#28a745}.line-count[data-v-117ca84b]{background:#28a745;border-radius:12px;color:#fff;font-size:12px;min-width:20px;padding:2px 8px;text-align:center}.tab-content[data-v-117ca84b]{flex:1;overflow-y:auto;padding:0}.form-section[data-v-117ca84b]{border-bottom:1px solid #f0f0f0;padding:25px}.form-section[data-v-117ca84b]:last-child{border-bottom:none}.section-title[data-v-117ca84b]{align-items:center;border-bottom:2px solid #e9ecef;color:#333;display:flex;font-size:16px;font-weight:600;gap:10px;margin-bottom:20px;padding-bottom:10px}.section-title i[data-v-117ca84b]{color:#28a745}.form-row[data-v-117ca84b]{display:flex;flex-wrap:wrap;margin:-10px}.form-group[data-v-117ca84b]{margin-bottom:20px;padding:10px}.col-md-6[data-v-117ca84b]{flex:0 0 50%;max-width:50%}.form-group label[data-v-117ca84b]{color:#333;display:block;font-size:14px;font-weight:500;margin-bottom:5px}.form-group label.required[data-v-117ca84b]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-117ca84b]{border:1px solid #ddd;border-radius:6px;font-size:14px;padding:10px 12px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-117ca84b]:focus{border-color:#28a745;box-shadow:0 0 0 3px rgba(40,167,69,.1);outline:none}.form-control.is-invalid[data-v-117ca84b]{border-color:#e74c3c;box-shadow:0 0 0 3px rgba(231,76,60,.1)}.form-control-sm[data-v-117ca84b]{font-size:13px;padding:6px 8px}.invalid-feedback[data-v-117ca84b]{color:#e74c3c;display:block;font-size:12px;margin-top:5px;width:100%}.auto-calculated-field[data-v-117ca84b]{background-color:#f8f9fa!important;border-style:dashed!important;color:#495057!important;cursor:not-allowed;font-weight:600}.auto-calculated-field[data-v-117ca84b]:disabled{opacity:.8}.form-group label.auto-calculated[data-v-117ca84b]{align-items:center;color:#28a745;display:flex;font-weight:600;gap:8px}.form-text.text-muted[data-v-117ca84b]{align-items:center;color:#6c757d!important;display:flex;font-size:12px;gap:5px;margin-top:5px}.invoice-selector[data-v-117ca84b]{display:flex;gap:10px}.invoice-selector select[data-v-117ca84b]{flex:1}.btn-browse-invoice[data-v-117ca84b]{padding:10px 16px;white-space:nowrap}.allocation-summary[data-v-117ca84b],.amount-summary[data-v-117ca84b]{background:#f8f9fa;border-left:4px solid #28a745;border-radius:8px;margin:20px 25px;padding:20px}.totals-grid[data-v-117ca84b]{grid-gap:15px;display:grid;gap:15px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.total-item[data-v-117ca84b]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:8px 0}.total-item[data-v-117ca84b]:last-child{border-bottom:none}.total-item.balance-warning[data-v-117ca84b]{background:#fff3cd;border:1px solid #ffeaa7;border-radius:6px;display:none;padding:12px}.total-item .amount[data-v-117ca84b]{color:#333;font-weight:600}.total-item .amount.received[data-v-117ca84b]{color:#28a745}.total-item .amount.allocated[data-v-117ca84b]{color:#007bff}.total-item .amount.balance.negative[data-v-117ca84b]{color:#dc3545}.total-item .amount.balance.positive[data-v-117ca84b]{color:#ffc107}.success-balance[data-v-117ca84b]{background:#d4edda;border-radius:6px;padding:8px 12px}.amount.balanced[data-v-117ca84b]{color:#155724!important;font-weight:600;gap:5px}.amount.balanced[data-v-117ca84b],.balance-info[data-v-117ca84b]{align-items:center;display:flex}.balance-info[data-v-117ca84b]{background:#e7f3ff;border:1px solid #bee5eb;border-radius:6px;color:#0c5460;font-size:14px;gap:8px;margin-top:15px;padding:12px}.balance-message[data-v-117ca84b]{display:none}.allocation-section[data-v-117ca84b]{padding:25px}.allocation-header[data-v-117ca84b]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.allocation-info[data-v-117ca84b]{align-items:center;display:flex;gap:15px}.invoice-info[data-v-117ca84b]{color:#666;font-size:14px}.allocation-count-info[data-v-117ca84b]{background:#e9ecef;border-radius:20px;color:#666;font-size:12px;font-weight:500;padding:8px 12px}.no-invoice-state[data-v-117ca84b],.no-lines-state[data-v-117ca84b],.no-results-state[data-v-117ca84b]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:8px;padding:60px 20px;text-align:center}.empty-content i[data-v-117ca84b]{color:#dee2e6;font-size:64px;margin-bottom:20px}.empty-content h4[data-v-117ca84b]{color:#666;margin-bottom:10px}.empty-content p[data-v-117ca84b]{color:#999;margin-bottom:30px}.allocation-notice[data-v-117ca84b]{align-items:center;background:#e7f3ff;border-left:4px solid #007bff;border-radius:6px;color:#495057;display:flex;font-size:14px;gap:10px;margin-bottom:20px;padding:15px}.allocation-table-container[data-v-117ca84b]{border:1px solid #e9ecef;border-radius:8px;margin-bottom:20px;overflow:hidden}.allocation-table .table[data-v-117ca84b],.invoice-table-container .table[data-v-117ca84b]{border-collapse:collapse;margin:0;width:100%}.allocation-table .table th[data-v-117ca84b],.invoice-table-container .table th[data-v-117ca84b]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-size:13px;font-weight:600;padding:12px 8px;text-align:center}.allocation-table .table td[data-v-117ca84b],.invoice-table-container .table td[data-v-117ca84b]{border-top:1px solid #dee2e6;font-size:13px;padding:8px;vertical-align:middle}.line-number[data-v-117ca84b]{color:#666;font-weight:600;text-align:center}.invoice-line-display[data-v-117ca84b]{line-height:1.4}.line-description[data-v-117ca84b]{color:#333;font-weight:500;margin-bottom:4px}.line-details[data-v-117ca84b]{color:#666;font-size:12px}.invoice-line-total[data-v-117ca84b],.remaining-amount[data-v-117ca84b]{color:#28a745;font-weight:600;text-align:right}.over-allocated[data-v-117ca84b]{color:#dc3545!important}.fully-allocated[data-v-117ca84b]{color:#6c757d!important}.allocation-row[data-v-117ca84b],.invoice-row[data-v-117ca84b]{transition:background-color .2s}.allocation-row[data-v-117ca84b]:hover,.invoice-row[data-v-117ca84b]:hover{background-color:rgba(40,167,69,.05)}.quick-allocation-actions[data-v-117ca84b]{align-items:center;border-top:1px solid #e9ecef;display:flex;justify-content:space-between;margin-top:10px;padding:15px 0}.quick-actions-left[data-v-117ca84b]{display:flex;gap:10px}.allocation-helper[data-v-117ca84b]{align-items:center;color:#666;display:flex;font-size:12px;font-style:italic;gap:5px}.search-section[data-v-117ca84b]{background:#f8f9fa;border-bottom:1px solid #e9ecef;padding:20px}.search-input-group[data-v-117ca84b]{max-width:400px;position:relative}.search-icon[data-v-117ca84b]{color:#666;font-size:16px;left:12px;position:absolute;top:50%;transform:translateY(-50%)}.search-input[data-v-117ca84b]{border-radius:8px;font-size:16px;padding-left:40px}.invoice-list[data-v-117ca84b]{flex:1;max-height:500px;overflow-y:auto}.customer-info[data-v-117ca84b]{line-height:1.4}.customer-name[data-v-117ca84b]{color:#333;font-weight:500}.customer-email[data-v-117ca84b]{color:#666;font-size:12px}.amount-cell[data-v-117ca84b]{color:#28a745;font-weight:600;text-align:right}.status-badge[data-v-117ca84b]{border-radius:12px;font-size:11px;font-weight:500;padding:4px 8px;text-transform:uppercase}.status-draft[data-v-117ca84b]{background:#ffeaa7;color:#fdcb6e}.status-sent[data-v-117ca84b]{background:#74b9ff;color:#0984e3}.status-paid[data-v-117ca84b]{background:#00b894;color:#00a085}.status-overdue[data-v-117ca84b]{background:#ff7675;color:#d63031}.status-cancelled[data-v-117ca84b]{background:#636e72;color:#2d3436}.btn[data-v-117ca84b]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-primary[data-v-117ca84b]{background:#28a745;color:#fff}.btn-secondary[data-v-117ca84b]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-117ca84b]{background:#fff;border:2px solid #007bff;color:#007bff}.btn-outline-primary[data-v-117ca84b]:hover{background:#007bff;color:#fff}.btn-outline-success[data-v-117ca84b]{background:#fff;border:2px solid #28a745;color:#28a745}.btn-outline-info[data-v-117ca84b]{background:#fff;border:2px solid #17a2b8;color:#17a2b8}.btn-outline-warning[data-v-117ca84b]{background:#fff;border:2px solid #ffc107;color:#ffc107}.btn-danger[data-v-117ca84b]{background:#dc3545;color:#fff}.btn[data-v-117ca84b]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-117ca84b]:disabled{cursor:not-allowed;opacity:.6;transform:none}.btn-sm[data-v-117ca84b]{font-size:12px;padding:6px 12px}.btn-lg[data-v-117ca84b]{font-size:16px;padding:12px 30px}.modal-footer[data-v-117ca84b]{background:#f8f9fa;border-top:1px solid #e9ecef;justify-content:space-between;padding:20px}.footer-info[data-v-117ca84b],.modal-footer[data-v-117ca84b]{align-items:center;display:flex}.result-count[data-v-117ca84b]{color:#666;font-size:14px}.footer-actions[data-v-117ca84b]{display:flex;gap:10px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-117ca84b],.invoice-browser-dialog[data-v-117ca84b]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.totals-grid[data-v-117ca84b]{grid-template-columns:1fr}.allocation-header[data-v-117ca84b]{flex-direction:column;gap:15px}.allocation-info[data-v-117ca84b]{flex-direction:column;gap:10px}.allocation-table-container[data-v-117ca84b],.invoice-table-container[data-v-117ca84b]{overflow-x:auto}.allocation-table .table[data-v-117ca84b],.invoice-table-container .table[data-v-117ca84b]{min-width:900px}.footer-actions[data-v-117ca84b]{flex-direction:column}.footer-actions .btn[data-v-117ca84b]{justify-content:center;width:100%}.tab-btn[data-v-117ca84b]{font-size:12px;gap:4px;padding:12px 8px}.form-row[data-v-117ca84b],.tab-btn[data-v-117ca84b]{flex-direction:column}.col-md-6[data-v-117ca84b]{flex:1;max-width:100%}.invoice-selector[data-v-117ca84b]{flex-direction:column;gap:10px}.quick-allocation-actions[data-v-117ca84b]{flex-direction:column;gap:15px}.search-input-group[data-v-117ca84b]{max-width:100%}}@media (max-width:480px){.modal-header[data-v-117ca84b]{padding:15px}.modal-title[data-v-117ca84b]{font-size:16px}.form-section[data-v-117ca84b]{padding:20px 15px}.section-title[data-v-117ca84b]{font-size:14px}.modal-footer[data-v-117ca84b]{padding:15px}.allocation-section[data-v-117ca84b]{padding:20px 15px}.no-invoice-state[data-v-117ca84b],.no-lines-state[data-v-117ca84b],.no-results-state[data-v-117ca84b]{padding:40px 15px}.empty-content i[data-v-117ca84b]{font-size:48px}.allocation-summary[data-v-117ca84b],.amount-summary[data-v-117ca84b]{margin:20px 15px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/maintain/index.vue?vue&type=template&id=117ca84b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.visible ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-117ca84b><h4 class=\"modal-title\" data-v-117ca84b><i class=\"fas fa-receipt\" data-v-117ca84b></i>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂການຮັບຊຳລະ' : 'ເພີ່ມການຮັບຊຳລະໃໝ່') + "\n        ") + "</h4> <button type=\"button\" class=\"close-button\" data-v-117ca84b><i class=\"fas fa-times\" data-v-117ca84b></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-117ca84b>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-117ca84b></div> <p data-v-117ca84b>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"receipt-form\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<div class=\"tab-navigation\" data-v-117ca84b><button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'header'
  }]) + " data-v-117ca84b><i class=\"fas fa-file-alt\" data-v-117ca84b></i>\n              ຂໍ້ມູນການຮັບຊຳລະ\n            </button> <button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'allocations'
  }]) + " data-v-117ca84b><i class=\"fas fa-list\" data-v-117ca84b></i>\n              ການແບ່ງປັນຊຳລະ\n              " + (_vm.allocationLines.length > 0 ? "<span class=\"line-count\" data-v-117ca84b>" + _vm._ssrEscape(_vm._s(_vm.allocationLines.length)) + "</span>" : "<!---->") + "</button></div> "), _vm._ssrNode("<div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'header' ? '' : 'none'
  }) + " data-v-117ca84b>", "</div>", [_vm._ssrNode("<form data-v-117ca84b>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-117ca84b><i class=\"fas fa-info-circle\" data-v-117ca84b></i>\n                  ຂໍ້ມູນພື້ນຖານ\n                </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-117ca84b><label for=\"receiptNumber\" class=\"required\" data-v-117ca84b>ເລກທີໃບຮັບ</label> <input id=\"receiptNumber\" type=\"text\" placeholder=\"ເຊັ່ນ: RCP-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.receiptNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.receiptNumber
  }) + " data-v-117ca84b> " + (_vm.errors.receiptNumber ? "<div class=\"invalid-feedback\" data-v-117ca84b>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.receiptNumber) + "\n                    ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<label for=\"invoiceHeaderId\" class=\"required\" data-v-117ca84b>ໃບແຈ້ງໜີ້</label> "), _vm._ssrNode("<div class=\"invoice-selector\" data-v-117ca84b>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.invoiceHeaderId,
      expression: "form.invoiceHeaderId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.invoiceHeaderId
    },
    attrs: {
      "id": "invoiceHeaderId"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "invoiceHeaderId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onInvoiceChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກໃບແຈ້ງໜີ້")]), _vm._v(" "), _vm._l(_vm.invoices, function (invoice) {
    return _c('option', {
      key: invoice.id,
      domProps: {
        "value": invoice.id
      }
    }, [_vm._v("\n                          " + _vm._s(invoice.invoiceNumber) + " -\n                          " + _vm._s(invoice.customer ? invoice.customer.name : 'N/A') + "\n                          (" + _vm._s(_vm.formatCurrency(invoice.totalAmount)) + ")\n                        ")]);
  })], 2), _vm._ssrNode(" <button type=\"button\" title=\"ເລືອກໃບແຈ້ງໜີ້\" class=\"btn btn-outline-primary btn-browse-invoice\" data-v-117ca84b><i class=\"fas fa-search\" data-v-117ca84b></i>\n                        ຄົ້ນຫາ\n                      </button>")], 2), _vm._ssrNode(" " + (_vm.errors.invoiceHeaderId ? "<div class=\"invalid-feedback\" data-v-117ca84b>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.invoiceHeaderId) + "\n                    ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-117ca84b><label for=\"totalReceivedAmount\" class=\"auto-calculated\" data-v-117ca84b><i class=\"fas fa-calculator\" data-v-117ca84b></i>\n                      ຍອດເງິນທີ່ຮັບ (ຄຳນວນອັດຕະໂນມັດ)\n                    </label> <input id=\"totalReceivedAmount\" type=\"number\" step=\"0.01\" min=\"0\" placeholder=\"0.00\" readonly=\"readonly\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.form.totalReceivedAmount) + _vm._ssrClass("form-control auto-calculated-field", {
    'is-invalid': _vm.errors.totalReceivedAmount
  }) + " data-v-117ca84b> <small class=\"form-text text-muted\" data-v-117ca84b><i class=\"fas fa-info-circle\" data-v-117ca84b></i>\n                      ຍອດນີ້ຈະຖືກຄຳນວນອັດຕະໂນມັດຈາກການແບ່ງປັນ\n                    </small> " + (_vm.errors.totalReceivedAmount ? "<div class=\"invalid-feedback\" data-v-117ca84b>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.totalReceivedAmount) + "\n                    ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<label for=\"paymentMethod\" class=\"required\" data-v-117ca84b>ວິທີຈ່າຍ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentMethod,
      expression: "form.paymentMethod"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.paymentMethod
    },
    attrs: {
      "id": "paymentMethod"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "paymentMethod", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "cash"
    }
  }, [_vm._v("ເງິນສົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "check"
    }
  }, [_vm._v("ເຊັກ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v("ໂອນເງິນທະນາຄານ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "credit_card"
    }
  }, [_vm._v("ບັດເຄຣດິດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "other"
    }
  }, [_vm._v("ອື່ນໆ")])]), _vm._ssrNode(" " + (_vm.errors.paymentMethod ? "<div class=\"invalid-feedback\" data-v-117ca84b>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.paymentMethod) + "\n                    ") + "</div>" : "<!---->"))], 2)], 2)], 2), _vm._ssrNode(" <div class=\"form-section\" data-v-117ca84b><h5 class=\"section-title\" data-v-117ca84b><i class=\"fas fa-calendar-alt\" data-v-117ca84b></i>\n                  ວັນທີ\n                </h5> <div class=\"form-row\" data-v-117ca84b><div class=\"form-group col-md-6\" data-v-117ca84b><label for=\"bookingDate\" class=\"required\" data-v-117ca84b>ວັນທີບັນທຶກ</label> <input id=\"bookingDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.bookingDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.bookingDate
  }) + " data-v-117ca84b> " + (_vm.errors.bookingDate ? "<div class=\"invalid-feedback\" data-v-117ca84b>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.bookingDate) + "\n                    ") + "</div>" : "<!---->") + "</div> <div class=\"form-group col-md-6\" data-v-117ca84b><label for=\"receivedDate\" class=\"required\" data-v-117ca84b>ວັນທີຮັບເງິນ</label> <input id=\"receivedDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.receivedDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.receivedDate
  }) + " data-v-117ca84b> " + (_vm.errors.receivedDate ? "<div class=\"invalid-feedback\" data-v-117ca84b>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.errors.receivedDate) + "\n                    ") + "</div>" : "<!---->") + "</div></div></div> "), _vm._ssrNode("<div class=\"form-section\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-117ca84b><i class=\"fas fa-clipboard-list\" data-v-117ca84b></i>\n                  ຂໍ້ມູນເພີ່ມເຕີມ\n                </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-117ca84b><label for=\"referenceNumber\" data-v-117ca84b>ເລກອ້າງອີງ</label> <input id=\"referenceNumber\" type=\"text\" placeholder=\"ເລກອ້າງອີງ (ຖ້າມີ)...\"" + _vm._ssrAttr("value", _vm.form.referenceNumber) + " class=\"form-control\" data-v-117ca84b></div> "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-117ca84b>", "</div>", [_vm._ssrNode("<label for=\"inputterId\" data-v-117ca84b>ຜູ້ບັນທຶກ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.inputterId,
      expression: "form.inputterId"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "inputterId",
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
        _vm.$set(_vm.form, "inputterId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກຜູ້ບັນທຶກ")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c('option', {
      key: user.id,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n                        " + _vm._s(user.cus_name) + " - " + _vm._s(user.cus_email) + "\n                      ")]);
  })], 2)], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-117ca84b><label for=\"notes\" data-v-117ca84b>ໝາຍເຫດ</label> <textarea id=\"notes\" rows=\"3\" placeholder=\"ໝາຍເຫດກ່ຽວກັບການຮັບຊຳລະ...\" class=\"form-control\" data-v-117ca84b>" + _vm._ssrEscape(_vm._s(_vm.form.notes)) + "</textarea></div> " + (_vm.isEdit ? "<div class=\"form-group\" data-v-117ca84b><label for=\"reason\" class=\"required\" data-v-117ca84b>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-117ca84b> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-117ca84b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.reason) + "\n                  ") + "</div>" : "<!---->") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"amount-summary\" data-v-117ca84b><div class=\"totals-grid\" data-v-117ca84b><div class=\"total-item\" data-v-117ca84b><label data-v-117ca84b>ຍອດທີ່ຮັບ (ຄຳນວນອັດຕະໂນມັດ):</label> <span class=\"amount received\" data-v-117ca84b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.form.totalReceivedAmount))) + "</span></div> <div class=\"total-item\" data-v-117ca84b><label data-v-117ca84b>ລວມການແບ່ງປັນ:</label> <span class=\"amount allocated\" data-v-117ca84b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedAllocatedTotal))) + "</span></div> <div class=\"total-item success-balance\" data-v-117ca84b><label data-v-117ca84b>ສະຖານະ:</label> <span class=\"amount balance balanced\" data-v-117ca84b><i class=\"fas fa-check-circle\" data-v-117ca84b></i>\n                      ສົມດຸນ\n                    </span></div></div> <div class=\"balance-info\" data-v-117ca84b><i class=\"fas fa-lightbulb\" data-v-117ca84b></i> <span data-v-117ca84b>\n                    ກະລຸນາໄປທີ່ແຖບ &quot;ການແບ່ງປັນຊຳລະ&quot;\n                    ເພື່ອໃສ່ຍອດແບ່ງປັນສຳລັບແຕ່ລະລາຍການ\n                  </span></div></div>")], 2)]), _vm._ssrNode(" <div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'allocations' ? '' : 'none'
  }) + " data-v-117ca84b><div class=\"allocation-section\" data-v-117ca84b><div class=\"allocation-header\" data-v-117ca84b><h5 class=\"section-title\" data-v-117ca84b><i class=\"fas fa-list\" data-v-117ca84b></i>\n                  ການແບ່ງປັນການຮັບຊຳລະ\n                </h5> <div class=\"allocation-info\" data-v-117ca84b>" + (_vm.selectedInvoice ? "<span class=\"invoice-info\" data-v-117ca84b><strong data-v-117ca84b>" + _vm._ssrEscape(_vm._s(_vm.selectedInvoice.invoiceNumber)) + "</strong>" + _vm._ssrEscape(" -\n                    " + _vm._s(_vm.selectedInvoice.customer ? _vm.selectedInvoice.customer.name : 'N/A') + "\n                  ") + "</span>" : "<!---->") + " " + (_vm.allocationLines.length > 0 ? "<span class=\"allocation-count-info\" data-v-117ca84b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.allocationLines.length) + " ລາຍການ\n                  ") + "</span>" : "<!---->") + "</div></div> " + (!_vm.selectedInvoice ? "<div class=\"no-invoice-state\" data-v-117ca84b><div class=\"empty-content\" data-v-117ca84b><i class=\"fas fa-file-invoice\" data-v-117ca84b></i> <h4 data-v-117ca84b>ກະລຸນາເລືອກໃບແຈ້ງໜີ້ກ່ອນ</h4> <p data-v-117ca84b>\n                    ເພື່ອເຮັດການແບ່ງປັນການຮັບຊຳລະ\n                    ກະລຸນາເລືອກໃບແຈ້ງໜີ້ໃນແຖບຂໍ້ມູນການຮັບຊຳລະກ່ອນ\n                  </p> <button type=\"button\" class=\"btn btn-primary\" data-v-117ca84b><i class=\"fas fa-arrow-left\" data-v-117ca84b></i>\n                    ກັບໄປເລືອກໃບແຈ້ງໜີ້\n                  </button></div></div>" : _vm.allocationLines.length > 0 ? "<div class=\"allocation-table-container\" data-v-117ca84b><div class=\"allocation-notice\" data-v-117ca84b><i class=\"fas fa-info-circle\" data-v-117ca84b></i> <span data-v-117ca84b>ລາຍການດ້ານລຸ່ມແມ່ນມາຈາກໃບແຈ້ງໜີ້ທີ່ເລືອກ -\n                    ກະລຸນາໃສ່ຍອດແບ່ງປັນສຳລັບແຕ່ລະລາຍການ</span></div> <div class=\"allocation-table\" data-v-117ca84b><table class=\"table\" data-v-117ca84b><thead data-v-117ca84b><tr data-v-117ca84b><th style=\"width: 40px\" data-v-117ca84b>#</th> <th style=\"width: 250px\" data-v-117ca84b>ລາຍການໃບແຈ້ງໜີ້</th> <th style=\"width: 100px\" data-v-117ca84b>ຍອດໃບແຈ້ງໜີ້</th> <th style=\"width: 120px\" data-v-117ca84b>ຍອດແບ່ງປັນ *</th> <th style=\"width: 100px\" data-v-117ca84b>ວັນທີແບ່ງປັນ *</th> <th style=\"width: 120px\" data-v-117ca84b>ຍອດຄົງເຫຼືອ</th> <th style=\"width: 150px\" data-v-117ca84b>ໝາຍເຫດ</th></tr></thead> <tbody data-v-117ca84b>" + _vm._ssrList(_vm.allocationLines, function (allocation, index) {
    return "<tr class=\"allocation-row\" data-v-117ca84b><td class=\"line-number\" data-v-117ca84b>" + _vm._ssrEscape("\n                          " + _vm._s(allocation.lineNumber) + "\n                        ") + "</td> <td data-v-117ca84b><div class=\"invoice-line-display\" data-v-117ca84b><div class=\"line-description\" data-v-117ca84b><strong data-v-117ca84b>" + _vm._ssrEscape(_vm._s(allocation.invoiceLine.description)) + "</strong></div> <div class=\"line-details\" data-v-117ca84b>" + _vm._ssrEscape("\n                              ຈຳນວນ:\n                              " + _vm._s(_vm.formatNumber(allocation.invoiceLine.quantity)) + "\n                              ×\n                              " + _vm._s(_vm.formatCurrency(allocation.invoiceLine.unitPrice)) + "\n                              ") + (allocation.invoiceLine.taxRate > 0 ? "<span data-v-117ca84b>" + _vm._ssrEscape("\n                                + ພາສີ " + _vm._s(allocation.invoiceLine.taxRate) + "%\n                              ") + "</span>" : "<!---->") + "</div></div></td> <td class=\"invoice-line-total\" data-v-117ca84b>" + _vm._ssrEscape("\n                          " + _vm._s(_vm.formatCurrency(allocation.invoiceLine.lineTotal)) + "\n                        ") + "</td> <td data-v-117ca84b><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("max", allocation.invoiceLine.lineTotal) + " placeholder=\"0.00\"" + _vm._ssrAttr("value", allocation.allocatedAmount) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`allocation_${index}_allocatedAmount`]
    }) + " data-v-117ca84b> " + (_vm.errors[`allocation_${index}_allocatedAmount`] ? "<div class=\"invalid-feedback\" data-v-117ca84b>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.errors[`allocation_${index}_allocatedAmount`]) + "\n                          ") + "</div>" : "<!---->") + "</td> <td data-v-117ca84b><input type=\"date\"" + _vm._ssrAttr("value", allocation.allocationDate) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`allocation_${index}_allocationDate`]
    }) + " data-v-117ca84b></td> <td class=\"remaining-amount\" data-v-117ca84b><span" + _vm._ssrClass(null, {
      'over-allocated': _vm.isOverAllocated(allocation),
      'fully-allocated': _vm.isFullyAllocated(allocation)
    }) + " data-v-117ca84b>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.formatCurrency(_vm.getRemainingAmount(allocation))) + "\n                          ") + "</span></td> <td data-v-117ca84b><input type=\"text\" placeholder=\"ໝາຍເຫດ...\"" + _vm._ssrAttr("value", allocation.notes) + " class=\"form-control form-control-sm\" data-v-117ca84b></td></tr>";
  }) + "</tbody></table></div> <div class=\"quick-allocation-actions\" data-v-117ca84b><div class=\"quick-actions-left\" data-v-117ca84b><button type=\"button\" title=\"ແບ່ງປັນຍອດເຕັມຂອງໃບແຈ້ງໜີ້\" class=\"btn btn-outline-primary btn-sm\" data-v-117ca84b><i class=\"fas fa-file-invoice-dollar\" data-v-117ca84b></i>\n                      ຍອດເຕັມ\n                    </button> <button type=\"button\" title=\"ແບ່ງຍອດໃບແຈ້ງໜີ້ເທົ່າກັນ\" class=\"btn btn-outline-success btn-sm\" data-v-117ca84b><i class=\"fas fa-equals\" data-v-117ca84b></i>\n                      ແບ່ງເທົ່າກັນ\n                    </button> <button type=\"button\" title=\"ແບ່ງຕາມອັດຕາສ່ວນຂອງແຕ່ລະລາຍການ\" class=\"btn btn-outline-info btn-sm\" data-v-117ca84b><i class=\"fas fa-percentage\" data-v-117ca84b></i>\n                      ແບ່ງຕາມອັດຕາສ່ວນ\n                    </button> <button type=\"button\" class=\"btn btn-outline-warning btn-sm\" data-v-117ca84b><i class=\"fas fa-eraser\" data-v-117ca84b></i>\n                      ລົບລ້າງທັງໝົດ\n                    </button></div> <div class=\"quick-actions-right\" data-v-117ca84b><span class=\"allocation-helper\" data-v-117ca84b><i class=\"fas fa-lightbulb\" data-v-117ca84b></i>\n                      ໃຊ້ປຸ່ມດ້ານຊ້າຍເພື່ອແບ່ງປັນອັດຕະໂນມັດ\n                    </span></div></div> <div class=\"allocation-summary\" data-v-117ca84b><div class=\"totals-grid\" data-v-117ca84b><div class=\"total-item\" data-v-117ca84b><label data-v-117ca84b>ຍອດໃບແຈ້ງໜີ້:</label> <span class=\"amount\" data-v-117ca84b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.selectedInvoice.totalAmount))) + "</span></div> <div class=\"total-item\" data-v-117ca84b><label data-v-117ca84b>ຍອດທີ່ຮັບ (ຄຳນວນອັດຕະໂນມັດ):</label> <span class=\"amount received\" data-v-117ca84b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.form.totalReceivedAmount))) + "</span></div> <div class=\"total-item\" data-v-117ca84b><label data-v-117ca84b>ລວມການແບ່ງປັນ:</label> <span class=\"amount allocated\" data-v-117ca84b>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedAllocatedTotal))) + "</span></div> <div class=\"total-item success-balance\" data-v-117ca84b><label data-v-117ca84b>ສະຖານະ:</label> <span class=\"amount balance balanced\" data-v-117ca84b><i class=\"fas fa-check-circle\" data-v-117ca84b></i>\n                        ສົມດຸນ\n                      </span></div></div> <div class=\"balance-info\" data-v-117ca84b><i class=\"fas fa-info-circle\" data-v-117ca84b></i> <span data-v-117ca84b>\n                      ຍອດທີ່ຮັບຈະຖືກຄຳນວນອັດຕະໂນມັດຈາກລວມຍອດການແບ່ງປັນທັງໝົດ\n                    </span></div></div></div>" : "<div class=\"no-lines-state\" data-v-117ca84b><div class=\"empty-content\" data-v-117ca84b><i class=\"fas fa-list\" data-v-117ca84b></i> <h4 data-v-117ca84b>ໃບແຈ້ງໜີ້ນີ້ບໍ່ມີລາຍການ</h4> <p data-v-117ca84b>ໃບແຈ້ງໜີ້ທີ່ເລືອກບໍ່ມີລາຍການສິນຄ້າ/ການບໍລິການ</p></div></div>") + "</div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-117ca84b><div class=\"footer-actions\" data-v-117ca84b><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary\" data-v-117ca84b><i class=\"fas fa-times\" data-v-117ca84b></i>\n            ຍົກເລີກ\n          </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-117ca84b>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-117ca84b></i>" : "<i class=\"fas fa-save\" data-v-117ca84b></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n          ") + "</button></div></div>")], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.showInvoiceBrowser ? "<div class=\"modal-overlay\" data-v-117ca84b><div class=\"invoice-browser-dialog\" data-v-117ca84b><div class=\"modal-header\" data-v-117ca84b><h4 class=\"modal-title\" data-v-117ca84b><i class=\"fas fa-search\" data-v-117ca84b></i>\n          ເລືອກໃບແຈ້ງໜີ້\n        </h4> <button type=\"button\" class=\"close-button\" data-v-117ca84b><i class=\"fas fa-times\" data-v-117ca84b></i></button></div> <div class=\"modal-body\" data-v-117ca84b><div class=\"search-section\" data-v-117ca84b><div class=\"search-input-group\" data-v-117ca84b><i class=\"fas fa-search search-icon\" data-v-117ca84b></i> <input type=\"text\" placeholder=\"ຄົ້ນຫາເລກໃບແຈ້ງໜີ້, ຊື່ລູກຄ້າ, ຫຼື ລາຍລະອຽດ...\"" + _vm._ssrAttr("value", _vm.invoiceSearchQuery) + " class=\"form-control search-input\" data-v-117ca84b></div></div> " + (_vm.invoiceBrowserLoading ? "<div class=\"loading-state\" data-v-117ca84b><div class=\"spinner\" data-v-117ca84b></div> <p data-v-117ca84b>ກຳລັງໂຫຼດໃບແຈ້ງໜີ້...</p></div>" : _vm.searchFilteredInvoices.length > 0 ? "<div class=\"invoice-list\" data-v-117ca84b><div class=\"invoice-table-container\" data-v-117ca84b><table class=\"table\" data-v-117ca84b><thead data-v-117ca84b><tr data-v-117ca84b><th style=\"width: 120px\" data-v-117ca84b>ເລກໃບແຈ້ງໜີ້</th> <th style=\"width: 200px\" data-v-117ca84b>ລູກຄ້າ</th> <th style=\"width: 100px\" data-v-117ca84b>ວັນທີ</th> <th style=\"width: 100px\" data-v-117ca84b>ຄົບກຳໜົດ</th> <th style=\"width: 100px\" data-v-117ca84b>ຍອດເງິນ</th> <th style=\"width: 80px\" data-v-117ca84b>ສະຖານະ</th> <th style=\"width: 80px\" data-v-117ca84b>ເລືອກ</th></tr></thead> <tbody data-v-117ca84b>" + _vm._ssrList(_vm.searchFilteredInvoices, function (invoice) {
    return "<tr class=\"invoice-row\" data-v-117ca84b><td data-v-117ca84b><strong data-v-117ca84b>" + _vm._ssrEscape(_vm._s(invoice.invoiceNumber)) + "</strong></td> <td data-v-117ca84b><div class=\"customer-info\" data-v-117ca84b><div class=\"customer-name\" data-v-117ca84b>" + _vm._ssrEscape("\n                        " + _vm._s(invoice.customer ? invoice.customer.name : 'N/A') + "\n                      ") + "</div> " + (invoice.customer && invoice.customer.email ? "<div class=\"customer-email\" data-v-117ca84b>" + _vm._ssrEscape("\n                        " + _vm._s(invoice.customer.email) + "\n                      ") + "</div>" : "<!---->") + "</div></td> <td data-v-117ca84b>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.invoiceDate))) + "</td> <td data-v-117ca84b>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.dueDate))) + "</td> <td class=\"amount-cell\" data-v-117ca84b>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.formatCurrency(invoice.totalAmount)) + "\n                  ") + "</td> <td data-v-117ca84b><span" + _vm._ssrClass("status-badge", `status-${invoice.status}`) + " data-v-117ca84b>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.getStatusLabel(invoice.status)) + "\n                    ") + "</span></td> <td data-v-117ca84b><button type=\"button\"" + _vm._ssrAttr("disabled", invoice.id === _vm.form.invoiceHeaderId) + " class=\"btn btn-primary btn-sm\" data-v-117ca84b><i class=\"fas fa-check\" data-v-117ca84b></i>" + _vm._ssrEscape("\n                      " + _vm._s(invoice.id === _vm.form.invoiceHeaderId ? 'ເລືອກແລ້ວ' : 'ເລືອກ') + "\n                    ") + "</button></td></tr>";
  }) + "</tbody></table></div></div>" : "<div class=\"no-results-state\" data-v-117ca84b><div class=\"empty-content\" data-v-117ca84b><i class=\"fas fa-file-invoice\" data-v-117ca84b></i> <h4 data-v-117ca84b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.invoiceSearchQuery ? 'ບໍ່ພົບໃບແຈ້ງໜີ້' : 'ບໍ່ມີໃບແຈ້ງໜີ້') + "\n            ") + "</h4> <p data-v-117ca84b>" + _vm._ssrEscape("\n              " + _vm._s(_vm.invoiceSearchQuery ? `ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ຕົງກັບ "${_vm.invoiceSearchQuery}"` : 'ບໍ່ມີໃບແຈ້ງໜີ້ທີ່ສາມາດເລືອກໄດ້') + "\n            ") + "</p></div></div>") + "</div> <div class=\"modal-footer\" data-v-117ca84b><div class=\"footer-info\" data-v-117ca84b>" + (_vm.searchFilteredInvoices.length > 0 ? "<span class=\"result-count\" data-v-117ca84b>" + _vm._ssrEscape("\n            ພົບ " + _vm._s(_vm.searchFilteredInvoices.length) + " ໃບແຈ້ງໜີ້\n          ") + "</span>" : "<!---->") + "</div> <div class=\"footer-actions\" data-v-117ca84b><button type=\"button\" class=\"btn btn-secondary\" data-v-117ca84b><i class=\"fas fa-times\" data-v-117ca84b></i>\n            ປິດ\n          </button></div></div></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue?vue&type=template&id=117ca84b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/receive/maintain/index.vue?vue&type=script&lang=js&
/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'ReceiveHeaderMaintain',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    receipt: {
      type: Object,
      default: null
    },
    invoices: {
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
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      allocationLines: [],
      nextTempId: 1,
      selectedInvoice: null,
      // Invoice Browser
      showInvoiceBrowser: false,
      invoiceBrowserLoading: false,
      filteredInvoices: [],
      invoiceSearchQuery: '',
      form: {
        id: null,
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        totalReceivedAmount: 0.0,
        paymentMethod: 'cash',
        referenceNumber: '',
        notes: '',
        inputterId: '',
        reason: ''
      }
    };
  },
  computed: {
    isEdit() {
      return !!(this.receipt && this.receipt.id);
    },
    user() {
      return this.$auth.user || {};
    },
    calculatedAllocatedTotal() {
      return this.allocationLines.reduce((sum, allocation) => {
        return sum + (parseFloat(allocation.allocatedAmount) || 0);
      }, 0);
    },
    allocationBalance() {
      return 0; // Always 0 since totalReceivedAmount = calculatedAllocatedTotal
    },

    autoCalculatedTotal() {
      return this.calculatedAllocatedTotal;
    },
    availableInvoiceLines() {
      return this.selectedInvoice ? this.selectedInvoice.invoiceLines || [] : [];
    },
    isFormValid() {
      const hasValidHeader = this.form.receiptNumber && this.form.bookingDate && this.form.receivedDate && this.form.invoiceHeaderId && this.form.paymentMethod && (!this.isEdit || this.form.reason);
      const hasValidAllocations = this.allocationLines.length > 0 && this.allocationLines.some(allocation => allocation.invoiceLineId && (parseFloat(allocation.allocatedAmount) || 0) > 0 && allocation.allocationDate) && (parseFloat(this.form.totalReceivedAmount) || 0) > 0;
      return hasValidHeader && hasValidAllocations;
    },
    searchFilteredInvoices() {
      if (!this.invoiceSearchQuery) {
        return this.filteredInvoices;
      }
      const query = this.invoiceSearchQuery.toLowerCase();
      return this.filteredInvoices.filter(invoice => invoice.invoiceNumber.toLowerCase().includes(query) || invoice.client && invoice.client.name.toLowerCase().includes(query) || invoice.description && invoice.description.toLowerCase().includes(query));
    }
  },
  watch: {
    visible: {
      handler(newVal) {
        if (newVal) {
          this.initializeDialog();
        } else {
          this.resetDialog();
        }
      },
      immediate: true
    },
    receipt: {
      handler() {
        if (this.visible) {
          this.initializeDialog();
        }
      }
    },
    // Auto-update totalReceivedAmount when allocation lines change
    calculatedAllocatedTotal: {
      handler(newTotal) {
        this.form.totalReceivedAmount = newTotal;
      },
      immediate: true
    },
    // Update allocation dates when received date changes
    'form.receivedDate': {
      handler(newDate) {
        if (newDate && this.allocationLines.length > 0) {
          this.allocationLines.forEach(allocation => {
            if (!allocation.allocationDate || allocation.allocationDate === '') {
              allocation.allocationDate = newDate;
            }
          });
        }
      }
    }
  },
  methods: {
    // 🔧 FIXED: Enhanced updateSelectedInvoice method with better debugging
    async updateSelectedInvoice() {
      var _this$selectedInvoice;
      console.log('🔍 updateSelectedInvoice called');
      console.log('📝 Current form.invoiceHeaderId:', this.form.invoiceHeaderId);
      console.log('📋 Available invoices:', this.invoices.length);

      // Clear previous selection
      this.selectedInvoice = null;
      if (!this.form.invoiceHeaderId) {
        console.log('❌ No invoice selected');
        if (!this.isEdit) {
          this.allocationLines = [];
        }
        return;
      }

      // 🔧 FIXED: Better ID comparison handling both string and number
      const invoiceId = parseInt(this.form.invoiceHeaderId);
      console.log('🔍 Looking for invoice ID:', invoiceId);

      // Find the selected invoice
      this.selectedInvoice = this.invoices.find(inv => {
        console.log('🔍 Comparing:', inv.id, 'with', invoiceId);
        return inv.id === invoiceId;
      });
      if (!this.selectedInvoice) {
        console.log('❌ Invoice not found in main invoices array, trying to load from API...');
        await this.loadInvoiceById(invoiceId);
      }
      if (!this.selectedInvoice) {
        console.log('❌ Could not find or load selected invoice');
        this.showToast('ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ເລືອກ', 'error');
        return;
      }
      console.log('✅ Selected invoice found:', this.selectedInvoice.invoiceNumber);
      console.log('📄 Invoice lines:', ((_this$selectedInvoice = this.selectedInvoice.invoiceLines) === null || _this$selectedInvoice === void 0 ? void 0 : _this$selectedInvoice.length) || 0);

      // 🔧 FIXED: Check if invoice lines exist and load if needed
      if (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0) {
        console.log('🔄 Loading invoice lines...');
        await this.loadSelectedInvoiceLines();
      }

      // 🔧 FIXED: Create allocation lines for new records only
      if (this.selectedInvoice.invoiceLines && this.selectedInvoice.invoiceLines.length > 0) {
        console.log('✅ Creating allocation lines from', this.selectedInvoice.invoiceLines.length, 'invoice lines');

        // Only auto-create allocation lines for new records
        if (!this.isEdit) {
          this.createAllocationLinesFromInvoice();
        } else {
          console.log('ℹ️ Edit mode - not auto-creating allocation lines');
        }
      } else {
        console.log('❌ No invoice lines available');
        this.showToast('ໃບແຈ້ງໜີ້ນີ້ບໍ່ມີລາຍການສິນຄ້າ', 'warning');
      }
      console.log('📊 Final allocation lines count:', this.allocationLines.length);
    },
    // 🔧 NEW: Method to load invoice by ID if not found in main array
    async loadInvoiceById(invoiceId) {
      try {
        console.log('🔄 Loading invoice by ID:', invoiceId);
        const {
          data
        } = await this.$axios.get(`/api/ar-invoices/${invoiceId}`, {
          params: {
            include: ['client', 'currency', 'invoiceLines']
          }
        });
        console.log('📥 API response for single invoice:', data);
        if (data.success && data.data) {
          this.selectedInvoice = data.data;
          console.log('✅ Invoice loaded successfully:', this.selectedInvoice.invoiceNumber);
        } else if (data.invoiceNumber) {
          // Handle case where response structure is different
          this.selectedInvoice = data;
          console.log('✅ Invoice loaded (alt structure):', this.selectedInvoice.invoiceNumber);
        }
      } catch (error) {
        console.error('❌ Error loading invoice by ID:', error);
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error');
      }
    },
    // 🔧 ENHANCED: Better invoice lines loading with debugging
    async loadSelectedInvoiceLines() {
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice to load lines for');
        return;
      }
      try {
        console.log('🔄 Loading invoice lines for:', this.selectedInvoice.invoiceNumber);
        const {
          data
        } = await this.$axios.get(`/api/ar-invoice-lines/by-header/${this.selectedInvoice.id}`);
        console.log('📥 Invoice lines API response:', data);

        // Handle different possible response structures
        if (data.success && data.data && Array.isArray(data.data)) {
          this.selectedInvoice.invoiceLines = data.data;
          console.log('✅ Invoice lines loaded:', data.data.length);
        } else if (Array.isArray(data)) {
          this.selectedInvoice.invoiceLines = data;
          console.log('✅ Invoice lines loaded (alt structure):', data.length);
        } else {
          console.warn('❓ Unexpected response structure:', data);
          this.selectedInvoice.invoiceLines = [];
        }
      } catch (error) {
        console.error('❌ Error loading invoice lines:', error);
        this.selectedInvoice.invoiceLines = [];
        this.showToast('ມີປັນຫາໃນການໂຫຼດລາຍການໃບແຈ້ງໜີ້', 'error');
      }
    },
    // 🔧 ENHANCED: Better allocation lines creation with debugging
    createAllocationLinesFromInvoice() {
      console.log('🔧 createAllocationLinesFromInvoice called');
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice');
        return;
      }
      if (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0) {
        console.log('❌ No invoice lines available');
        this.allocationLines = [];
        return;
      }
      console.log('✅ Creating allocation lines from', this.selectedInvoice.invoiceLines.length, 'invoice lines');
      this.allocationLines = this.selectedInvoice.invoiceLines.map((line, index) => {
        const allocation = {
          tempId: this.nextTempId++,
          lineNumber: index + 1,
          invoiceLineId: line.id,
          invoiceLine: line,
          // Store the full line object for display
          allocatedAmount: 0,
          // Default to 0, user will fill this
          allocationDate: this.form.receivedDate || new Date().toISOString().split('T')[0],
          notes: ''
        };
        console.log(`📝 Created allocation ${index + 1}:`, {
          lineNumber: allocation.lineNumber,
          invoiceLineId: allocation.invoiceLineId,
          description: line.description,
          lineTotal: line.lineTotal
        });
        return allocation;
      });
      console.log('🎉 Successfully created', this.allocationLines.length, 'allocation lines');

      // Force reactivity update
      this.$forceUpdate();
    },
    // 🔧 ENHANCED: Better invoice change handler
    async onInvoiceChange() {
      console.log('🔄 onInvoiceChange triggered');
      await this.updateSelectedInvoice();
      this.clearFieldError('invoiceHeaderId');

      // Switch to allocations tab if lines were created
      if (this.allocationLines.length > 0) {
        console.log('🔄 Switching to allocations tab');
        this.$nextTick(() => {
          this.activeTab = 'allocations';
        });
      }
    },
    // 🔧 ENHANCED: Better invoice browser with full data loading
    async openInvoiceBrowser() {
      console.log('🔄 Opening invoice browser');
      this.showInvoiceBrowser = true;
      this.invoiceBrowserLoading = true;
      this.invoiceSearchQuery = '';
      try {
        const {
          data
        } = await this.$axios.get('/api/ar-invoices', {
          params: {
            status: ['draft', 'sent'],
            include: ['client', 'currency', 'invoiceLines'],
            // Include all needed data
            limit: 100 // Increase limit to see more invoices
          }
        });

        console.log('📥 Invoice browser API response:', data);

        // 🔧 FIXED: Handle the nested structure in your data
        if (data.success && data.data && data.data.invoices && Array.isArray(data.data.invoices)) {
          this.filteredInvoices = data.data.invoices;
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices for browser');
        } else if (data.success && data.data && Array.isArray(data.data)) {
          this.filteredInvoices = data.data;
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices (alt structure)');
        } else if (Array.isArray(data)) {
          this.filteredInvoices = data;
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices (direct array)');
        } else {
          console.warn('❓ Unexpected response structure:', data);
          this.filteredInvoices = [];
        }
      } catch (error) {
        console.error('❌ Error loading invoices for browser:', error);
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error');
        this.filteredInvoices = [];
      } finally {
        this.invoiceBrowserLoading = false;
      }
    },
    // 🔧 ENHANCED: Better invoice selection from browser
    async selectInvoiceFromBrowser(invoice) {
      console.log('🎯 Selecting invoice from browser:', invoice.invoiceNumber);

      // Set the form value
      this.form.invoiceHeaderId = invoice.id;

      // Add the invoice to main invoices array if not present
      const existingIndex = this.invoices.findIndex(inv => inv.id === invoice.id);
      if (existingIndex === -1) {
        console.log('➕ Adding invoice to main array');
        this.invoices.push(invoice);
      } else {
        console.log('🔄 Updating existing invoice in main array');
        this.invoices[existingIndex] = invoice;
      }

      // Close browser and trigger change
      this.closeInvoiceBrowser();
      await this.onInvoiceChange();
      this.clearFieldError('invoiceHeaderId');
    },
    // Rest of your existing methods remain the same...
    async initializeDialog() {
      this.activeTab = 'header';
      this.clearErrors();
      if (this.receipt) {
        this.form = {
          id: this.receipt.id,
          receiptNumber: this.receipt.receiptNumber,
          bookingDate: this.receipt.bookingDate ? this.receipt.bookingDate.split('T')[0] : '',
          receivedDate: this.receipt.receivedDate ? this.receipt.receivedDate.split('T')[0] : '',
          invoiceHeaderId: this.receipt.invoiceHeaderId,
          totalReceivedAmount: this.receipt.totalReceivedAmount || 0.0,
          paymentMethod: this.receipt.paymentMethod || 'cash',
          referenceNumber: this.receipt.referenceNumber || '',
          notes: this.receipt.notes || '',
          inputterId: this.receipt.inputterId || '',
          reason: ''
        };
        await this.loadAllocationLines(this.receipt.id);
        await this.updateSelectedInvoice();
      } else {
        this.resetForm();

        // Set default dates to today
        const today = new Date().toISOString().split('T')[0];
        this.form.bookingDate = today;
        this.form.receivedDate = today;

        // Initialize with empty allocation lines
        this.allocationLines = [];

        // Set default user
        if (this.user && this.user.id) {
          this.form.inputterId = this.user.id;
        }
      }
    },
    resetDialog() {
      this.resetForm();
      this.allocationLines = [];
      this.selectedInvoice = null;
      this.clearErrors();
      this.activeTab = 'header';
      this.formLoading = false;
      this.saving = false;
      this.showInvoiceBrowser = false;
      this.filteredInvoices = [];
      this.invoiceSearchQuery = '';
    },
    async loadAllocationLines(receiptId) {
      try {
        const {
          data
        } = await this.$axios.get(`/api/ar-receive-lines/by-header/${receiptId}`);
        this.allocationLines = data.data || [];
        this.allocationLines.forEach(allocation => {
          if (!allocation.tempId) {
            allocation.tempId = this.nextTempId++;
          }
          if (allocation.allocationDate) {
            allocation.allocationDate = allocation.allocationDate.split('T')[0];
          }
        });
      } catch (error) {
        console.error('Error loading allocation lines:', error);
        this.allocationLines = [];
      }
    },
    closeInvoiceBrowser() {
      this.showInvoiceBrowser = false;
      this.filteredInvoices = [];
      this.invoiceSearchQuery = '';
    },
    // Allocation Helper Methods
    allocateFullAmount() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return;
      this.allocationLines.forEach(allocation => {
        if (allocation.invoiceLine) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0;
          allocation.allocatedAmount = lineTotal.toFixed(2);
        }
      });
    },
    allocateEqually() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return;
      const totalInvoice = parseFloat(this.selectedInvoice.totalAmount) || 0;
      const amountPerLine = totalInvoice / this.allocationLines.length;
      this.allocationLines.forEach(allocation => {
        allocation.allocatedAmount = amountPerLine.toFixed(2);
      });
    },
    allocateProportionally() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return;
      this.allocationLines.forEach(allocation => {
        if (allocation.invoiceLine) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0;
          allocation.allocatedAmount = lineTotal.toFixed(2);
        }
      });
    },
    clearAllAllocations() {
      this.allocationLines.forEach(allocation => {
        allocation.allocatedAmount = 0;
      });
    },
    getRemainingAmount(allocation) {
      if (!allocation.invoiceLine) return 0;
      const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0;
      const allocated = parseFloat(allocation.allocatedAmount) || 0;
      return lineTotal - allocated;
    },
    isFullyAllocated(allocation) {
      return this.getRemainingAmount(allocation) === 0;
    },
    isOverAllocated(allocation) {
      return this.getRemainingAmount(allocation) < 0;
    },
    validateAllocation(allocation, index) {
      const amount = parseFloat(allocation.allocatedAmount) || 0;
      const maxAllowed = parseFloat(allocation.invoiceLine.lineTotal) || 0;
      if (amount > maxAllowed) {
        this.errors[`allocation_${index}_allocatedAmount`] = `ຈຳນວນເກີນກວ່າທີ່ເຫຼືອ (ສູງສຸດ: ${this.formatCurrency(maxAllowed)})`;
      } else {
        this.clearFieldError(`allocation_${index}_allocatedAmount`);
      }
    },
    validateForm() {
      this.errors = {};

      // Header validation
      if (!this.form.receiptNumber) {
        this.errors.receiptNumber = 'ກະລຸນາໃສ່ເລກທີໃບຮັບ';
      }
      if (!this.form.invoiceHeaderId) {
        this.errors.invoiceHeaderId = 'ກະລຸນາເລືອກໃບແຈ້ງໜີ້';
      }
      if (!this.form.bookingDate) {
        this.errors.bookingDate = 'ກະລຸນາໃສ່ວັນທີບັນທຶກ';
      }
      if (!this.form.receivedDate) {
        this.errors.receivedDate = 'ກະລຸນາໃສ່ວັນທີຮັບເງິນ';
      }
      if (!this.form.paymentMethod) {
        this.errors.paymentMethod = 'ກະລຸນາເລືອກວິທີຈ່າຍ';
      }

      // Date validation
      if (this.form.bookingDate && this.form.receivedDate) {
        const bookingDate = new Date(this.form.bookingDate);
        const receivedDate = new Date(this.form.receivedDate);
        if (receivedDate < bookingDate) {
          this.errors.receivedDate = 'ວັນທີຮັບເງິນຕ້ອງບໍ່ກ່ອນວັນທີບັນທຶກ';
        }
      }

      // Allocation validation
      if (this.allocationLines.length === 0) {
        this.errors.allocations = 'ກະລຸນາເພີ່ມການແບ່ງປັນຢ່າງໜ້ອຍ 1 ລາຍການ';
      } else {
        let hasValidAllocation = false;
        let totalAllocated = 0;
        for (let i = 0; i < this.allocationLines.length; i++) {
          const allocation = this.allocationLines[i];
          if (!allocation.invoiceLineId) {
            this.errors[`allocation_${i}_invoiceLineId`] = 'ກະລຸນາເລືອກລາຍການໃບແຈ້ງໜີ້';
          }
          const allocatedAmount = parseFloat(allocation.allocatedAmount) || 0;
          if (allocatedAmount <= 0) {
            this.errors[`allocation_${i}_allocatedAmount`] = 'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0';
          } else {
            hasValidAllocation = true;
            totalAllocated += allocatedAmount;
          }
          if (!allocation.allocationDate) {
            this.errors[`allocation_${i}_allocationDate`] = 'ກະລຸນາໃສ່ວັນທີແບ່ງປັນ';
          }
          if (this.isOverAllocated(allocation)) {
            this.errors[`allocation_${i}_allocatedAmount`] = 'ຍອດແບ່ງປັນເກີນກວ່າທີ່ເຫຼືອ';
          }
        }
        if (!hasValidAllocation) {
          this.errors.allocations = 'ຢ່າງໜ້ອຍຕ້ອງມີ 1 ລາຍການທີ່ມີຍອດແບ່ງປັນ';
        }
        if (totalAllocated <= 0) {
          this.errors.totalReceivedAmount = 'ຍອດລວມການແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0';
        }
      }
      if (this.isEdit && !this.form.reason) {
        this.errors.reason = 'ກະລຸນາລະບຸເຫດຜົນຂອງການແກ້ໄຂ';
      }
      return Object.keys(this.errors).length === 0;
    },
    clearErrors() {
      this.errors = {};
    },
    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field);
      }
    },
    handleSubmit() {
      if (!this.validateForm()) {
        if (Object.keys(this.errors).some(key => key.startsWith('allocation_'))) {
          this.activeTab = 'allocations';
        } else {
          this.activeTab = 'header';
        }
        return;
      }
      this.saving = true;
      const validAllocationLines = this.allocationLines.filter(allocation => {
        const amount = parseFloat(allocation.allocatedAmount) || 0;
        return amount > 0 && allocation.invoiceLineId;
      });
      if (this.isEdit) {
        this.form.updateUserId = this.user.id;
      } else {
        this.form.inputterId = this.user.id;
      }
      const formData = {
        ...this.form,
        totalReceivedAmount: parseFloat(this.form.totalReceivedAmount) || 0,
        allocationLines: validAllocationLines.map((allocation, index) => ({
          tempId: allocation.tempId,
          lineNumber: index + 1,
          invoiceLineId: allocation.invoiceLineId,
          allocatedAmount: parseFloat(allocation.allocatedAmount) || 0,
          allocationDate: allocation.allocationDate,
          notes: allocation.notes || ''
        }))
      };
      this.$emit('save', formData);
    },
    handleOverlayClick() {
      if (!this.saving) {
        this.handleClose();
      }
    },
    handleClose() {
      this.$emit('close');
    },
    resetForm() {
      var _this$user;
      this.form = {
        id: null,
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        totalReceivedAmount: 0.0,
        paymentMethod: 'cash',
        referenceNumber: '',
        notes: '',
        inputterId: ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.id) || '',
        reason: ''
      };
    },
    // Utility Methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    formatNumber(number) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(number || 0);
    },
    formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },
    getStatusLabel(status) {
      const statusLabels = {
        draft: 'ຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳໜົດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
    },
    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`);
      if (this.$toast) {
        if (typeof this.$toast[type] === 'function') {
          this.$toast[type](message);
        } else {
          console.log(message);
        }
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`);
        }
      }
    },
    // 🔧 NEW: Debug method to manually test allocation creation
    debugCreateAllocations() {
      var _this$selectedInvoice2;
      console.log('🔧 DEBUG: Manually creating allocations');
      console.log('Selected invoice:', this.selectedInvoice);
      console.log('Invoice lines:', (_this$selectedInvoice2 = this.selectedInvoice) === null || _this$selectedInvoice2 === void 0 ? void 0 : _this$selectedInvoice2.invoiceLines);
      if (this.selectedInvoice && this.selectedInvoice.invoiceLines) {
        this.createAllocationLinesFromInvoice();
        this.showToast(`Debug: Created ${this.allocationLines.length} allocations`, 'info');
      } else {
        this.showToast('Debug: No invoice or invoice lines found', 'error');
      }
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var receive_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/receive/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(655)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  receive_maintainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "117ca84b",
  "2b1d1851"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ar-receive-maintain.js.map