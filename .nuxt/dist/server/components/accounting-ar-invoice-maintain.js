exports.ids = [5];
exports.modules = {

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(627);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3c5f953c", content, true, context)
};

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51576860_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51576860_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51576860_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51576860_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51576860_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-51576860]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;padding:20px;position:fixed;top:0;width:100%;z-index:1050}.enhanced-dialog[data-v-51576860]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;max-height:90vh;max-width:1200px;overflow:hidden;width:100%}.modal-header[data-v-51576860]{background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;justify-content:space-between;padding:20px}.modal-header[data-v-51576860],.modal-title[data-v-51576860]{align-items:center;display:flex}.modal-title[data-v-51576860]{font-size:18px;font-weight:600;gap:10px;margin:0}.close-button[data-v-51576860]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:20px;padding:5px;transition:background .2s}.close-button[data-v-51576860]:hover{background:hsla(0,0%,100%,.2)}.modal-body[data-v-51576860]{flex:1;overflow:hidden}.loading-state[data-v-51576860],.modal-body[data-v-51576860]{display:flex;flex-direction:column}.loading-state[data-v-51576860]{align-items:center;color:#666;justify-content:center;padding:40px}.spinner[data-v-51576860]{animation:spin-51576860 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:40px;margin-bottom:15px;width:40px}@keyframes spin-51576860{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.invoice-form[data-v-51576860]{display:flex;flex:1;flex-direction:column;overflow:hidden}.tab-navigation[data-v-51576860]{background:#f8f9fa;border-bottom:1px solid #e9ecef;display:flex}.tab-btn[data-v-51576860]{align-items:center;background:none;border:none;color:#666;cursor:pointer;display:flex;flex:1;font-size:14px;font-weight:500;gap:8px;justify-content:center;padding:15px 20px;position:relative;transition:all .2s}.tab-btn[data-v-51576860]:hover{background:rgba(102,126,234,.1);color:#667eea}.tab-btn.active[data-v-51576860]{background:#fff;border-bottom:3px solid #667eea;color:#667eea}.line-count[data-v-51576860]{background:#667eea;border-radius:12px;color:#fff;font-size:12px;min-width:20px;padding:2px 8px;text-align:center}.tab-content[data-v-51576860]{flex:1;overflow-y:auto;padding:0}.form-section[data-v-51576860]{border-bottom:1px solid #f0f0f0;padding:25px}.form-section[data-v-51576860]:last-child{border-bottom:none}.section-title[data-v-51576860]{align-items:center;border-bottom:2px solid #e9ecef;color:#333;display:flex;font-size:16px;font-weight:600;gap:10px;margin-bottom:20px;padding-bottom:10px}.section-title i[data-v-51576860]{color:#667eea}.form-row[data-v-51576860]{display:flex;flex-wrap:wrap;margin:-10px}.form-group[data-v-51576860]{margin-bottom:20px;padding:10px}.col-md-6[data-v-51576860]{flex:0 0 50%;max-width:50%}.form-group label[data-v-51576860]{color:#333;display:block;font-size:14px;font-weight:500;margin-bottom:5px}.form-group label.required[data-v-51576860]:after{color:#e74c3c;content:\" *\"}.form-control[data-v-51576860]{border:1px solid #ddd;border-radius:6px;font-size:14px;padding:10px 12px;transition:border-color .2s,box-shadow .2s;width:100%}.form-control[data-v-51576860]:focus{border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.form-control.is-invalid[data-v-51576860]{border-color:#e74c3c;box-shadow:0 0 0 3px rgba(231,76,60,.1)}.form-control-sm[data-v-51576860]{font-size:13px;padding:6px 8px}.invalid-feedback[data-v-51576860]{color:#e74c3c;display:block;font-size:12px;margin-top:5px;width:100%}.amount-summary[data-v-51576860]{background:#f8f9fa;border-left:4px solid #667eea;border-radius:8px;margin:20px 25px;padding:20px}.totals-grid[data-v-51576860]{grid-gap:15px;display:grid;gap:15px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.total-item[data-v-51576860]{align-items:center;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:8px 0}.total-item[data-v-51576860]:last-child{border-bottom:none}.total-item.grand-total[data-v-51576860]{border-top:2px solid #667eea;font-size:16px;font-weight:600;grid-column:1/-1;margin-top:8px;padding-top:12px}.total-item .amount[data-v-51576860]{color:#333;font-weight:600}.line-items-section[data-v-51576860]{padding:25px}.add-line-header[data-v-51576860]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.add-line-actions[data-v-51576860]{align-items:center;display:flex;gap:15px}.btn[data-v-51576860]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:8px 16px;transition:all .2s ease}.btn-primary[data-v-51576860]{background:#007bff;color:#fff}.btn-secondary[data-v-51576860]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-51576860]{background:#fff;border:2px solid #667eea;color:#667eea}.btn-outline-secondary[data-v-51576860]{background:#fff;border:1px solid #6c757d;color:#6c757d}.btn-danger[data-v-51576860]{background:#dc3545;color:#fff}.btn[data-v-51576860]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}.btn[data-v-51576860]:disabled{cursor:not-allowed;opacity:.6;transform:none}.btn-add-line[data-v-51576860]{font-size:16px;font-weight:600;padding:12px 24px}.btn-lg[data-v-51576860]{font-size:16px;padding:12px 30px}.btn-sm[data-v-51576860]{align-items:center;border-radius:50%;display:flex;font-size:11px;height:28px;justify-content:center;padding:0;width:28px}.line-count-info[data-v-51576860]{background:#e9ecef;border-radius:20px;color:#666;font-size:12px;font-weight:500;padding:8px 12px}.empty-line-state[data-v-51576860]{background:#f8f9fa;border:2px dashed #dee2e6;border-radius:8px;padding:60px 20px;text-align:center}.empty-content i[data-v-51576860]{color:#dee2e6;font-size:64px;margin-bottom:20px}.empty-content h4[data-v-51576860]{color:#666;margin-bottom:10px}.empty-content p[data-v-51576860]{color:#999;margin-bottom:30px}.line-items-table-container[data-v-51576860]{border:1px solid #e9ecef;border-radius:8px;margin-bottom:20px;overflow:hidden}.line-items-table .table[data-v-51576860]{border-collapse:collapse;margin:0;width:100%}.line-items-table .table th[data-v-51576860]{background:#f8f9fa;border-bottom:2px solid #dee2e6;font-size:13px;font-weight:600;padding:12px 8px;text-align:center}.line-items-table .table td[data-v-51576860]{border-top:1px solid #dee2e6;font-size:13px;padding:8px;vertical-align:middle}.line-number[data-v-51576860]{color:#666;font-weight:600;text-align:center}.line-total[data-v-51576860],.tax-amount[data-v-51576860]{color:#333;font-weight:600;text-align:right}.line-row[data-v-51576860]{transition:background-color .2s}.line-row[data-v-51576860]:hover{background-color:rgba(102,126,234,.05)}.add-more-lines[data-v-51576860]{border-top:1px solid #e9ecef;padding:20px 0;text-align:center}.btn-add-more[data-v-51576860]{margin-right:15px}.quick-add-buttons[data-v-51576860]{display:inline-flex;gap:10px;margin-left:15px}.line-totals-summary[data-v-51576860]{background:#f8f9fa;border-left:4px solid #667eea;border-radius:8px;margin-top:20px;padding:20px}.modal-footer[data-v-51576860]{background:#f8f9fa;border-top:1px solid #e9ecef;padding:20px}.footer-actions[data-v-51576860]{display:flex;gap:10px;justify-content:flex-end}@media (max-width:768px){.enhanced-dialog[data-v-51576860]{border-radius:0;height:100%;max-height:100vh;max-width:100%}.totals-grid[data-v-51576860]{grid-template-columns:1fr}.add-line-header[data-v-51576860]{flex-direction:column;gap:15px}.line-items-table-container[data-v-51576860]{overflow-x:auto}.line-items-table .table[data-v-51576860]{min-width:800px}.footer-actions[data-v-51576860]{flex-direction:column}.footer-actions .btn[data-v-51576860]{justify-content:center;width:100%}.tab-btn[data-v-51576860]{flex-direction:column;font-size:12px;gap:4px;padding:12px 8px}.quick-add-buttons[data-v-51576860]{margin-left:0;margin-top:10px}.form-row[data-v-51576860],.quick-add-buttons[data-v-51576860]{flex-direction:column}.col-md-6[data-v-51576860]{flex:1;max-width:100%}}@media (max-width:480px){.modal-header[data-v-51576860]{padding:15px}.modal-title[data-v-51576860]{font-size:16px}.form-section[data-v-51576860]{padding:20px 15px}.section-title[data-v-51576860]{font-size:14px}.modal-footer[data-v-51576860]{padding:15px}.line-items-section[data-v-51576860]{padding:20px 15px}.empty-line-state[data-v-51576860]{padding:40px 15px}.empty-content i[data-v-51576860]{font-size:48px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=51576860&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"enhanced-dialog\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-51576860><h4 class=\"modal-title\" data-v-51576860><i class=\"fas fa-file-invoice\" data-v-51576860></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່') + "\n      ") + "</h4> <button type=\"button\" class=\"close-button\" data-v-51576860><i class=\"fas fa-times\" data-v-51576860></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-51576860>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"loading-state\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"spinner\" data-v-51576860></div> <p data-v-51576860>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>")], 2) : _vm._ssrNode("<div class=\"invoice-form\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"tab-navigation\" data-v-51576860><button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'header'
  }]) + " data-v-51576860><i class=\"fas fa-file-alt\" data-v-51576860></i>\n            ຂໍ້ມູນໃບແຈ້ງໜີ້\n          </button> <button type=\"button\"" + _vm._ssrClass(null, ['tab-btn', {
    active: _vm.activeTab === 'lines'
  }]) + " data-v-51576860><i class=\"fas fa-list\" data-v-51576860></i>\n            ລາຍການສິນຄ້າ\n            " + (_vm.lineItems.length > 0 ? "<span class=\"line-count\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length)) + "</span>" : "<!---->") + "</button></div> "), _vm._ssrNode("<div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'header' ? '' : 'none'
  }) + " data-v-51576860>", "</div>", [_vm._ssrNode("<form data-v-51576860>", "</form>", [_vm._ssrNode("<div class=\"form-section\" data-v-51576860>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-51576860><i class=\"fas fa-info-circle\" data-v-51576860></i>\n                ຂໍ້ມູນພື້ນຖານ\n              </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-51576860><label for=\"invoiceNumber\" class=\"required\" data-v-51576860>ເລກທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceNumber\" type=\"text\" placeholder=\"ເຊັ່ນ: INV-2025-001\"" + _vm._ssrAttr("readonly", _vm.isEdit) + _vm._ssrAttr("value", _vm.form.invoiceNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceNumber
  }) + " data-v-51576860> " + (_vm.errors.invoiceNumber ? "<div class=\"invalid-feedback\" data-v-51576860>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.invoiceNumber) + "\n                  ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group col-md-6\" data-v-51576860>", "</div>", [_vm._ssrNode("<label for=\"customerId\" class=\"required\" data-v-51576860>ລູກຄ້າ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.customerId,
      expression: "form.customerId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.customerId
    },
    attrs: {
      "id": "customerId"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "customerId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onCustomerChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກລູກຄ້າ " + _vm._s(_vm.customers.length))]), _vm._v(" "), _vm._l(_vm.customers, function (customer) {
    return _c('option', {
      key: customer.id,
      domProps: {
        "value": customer.id
      }
    }, [_vm._v("\n                      " + _vm._s(customer.name) + " (" + _vm._s(customer.code || customer.email) + ")\n                    ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.customerId ? "<div class=\"invalid-feedback\" data-v-51576860>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.customerId) + "\n                  ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-51576860>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" data-v-51576860>ສະກຸນເງິນ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.currencyId,
      expression: "form.currencyId"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "currencyId"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onCurrencyChange]
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
    }, [_vm._v("\n                      " + _vm._s(currency.name) + " (" + _vm._s(currency.code) + ")\n                    ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group col-md-6\" data-v-51576860><label for=\"exchangeRate\" data-v-51576860>ອັດຕາແລກປ່ຽນ</label> <input id=\"exchangeRate\" type=\"number\" step=\"0.0001\" min=\"0\" placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + " class=\"form-control\" data-v-51576860></div>")], 2)], 2), _vm._ssrNode(" <div class=\"form-section\" data-v-51576860><h5 class=\"section-title\" data-v-51576860><i class=\"fas fa-calendar-alt\" data-v-51576860></i>\n                ວັນທີ\n              </h5> <div class=\"form-row\" data-v-51576860><div class=\"form-group col-md-6\" data-v-51576860><label for=\"invoiceDate\" class=\"required\" data-v-51576860>ວັນທີໃບແຈ້ງໜີ້</label> <input id=\"invoiceDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.invoiceDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.invoiceDate
  }) + " data-v-51576860> " + (_vm.errors.invoiceDate ? "<div class=\"invalid-feedback\" data-v-51576860>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.invoiceDate) + "\n                  ") + "</div>" : "<!---->") + "</div> <div class=\"form-group col-md-6\" data-v-51576860><label for=\"dueDate\" data-v-51576860>ວັນທີຄົບກຳນົດ</label> <input id=\"dueDate\" type=\"date\"" + _vm._ssrAttr("value", _vm.form.dueDate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.dueDate
  }) + " data-v-51576860> " + (_vm.errors.dueDate ? "<div class=\"invalid-feedback\" data-v-51576860>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.errors.dueDate) + "\n                  ") + "</div>" : "<!---->") + "</div></div></div> "), _vm._ssrNode("<div class=\"form-section\" data-v-51576860>", "</div>", [_vm._ssrNode("<h5 class=\"section-title\" data-v-51576860><i class=\"fas fa-info\" data-v-51576860></i>\n                ສະຖານະ ແລະ ລາຍລະອຽດ\n              </h5> "), _vm._ssrNode("<div class=\"form-row\" data-v-51576860>", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-6\" data-v-51576860>", "</div>", [_vm._ssrNode("<label for=\"status\" data-v-51576860>ສະຖານະ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "status"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "draft"
    }
  }, [_vm._v("ແບບຮ່າງ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sent"
    }
  }, [_vm._v("ສົ່ງແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("ຈ່າຍແລ້ວ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "overdue"
    }
  }, [_vm._v("ເກີນກຳນົດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancelled"
    }
  }, [_vm._v("ຍົກເລີກ")])])], 2)]), _vm._ssrNode(" <div class=\"form-group\" data-v-51576860><label for=\"description\" data-v-51576860>ລາຍລະອຽດ</label> <textarea id=\"description\" rows=\"3\" placeholder=\"ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້...\" class=\"form-control\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.form.description)) + "</textarea></div> " + (_vm.isEdit ? "<div class=\"form-group\" data-v-51576860><label for=\"reason\" class=\"required\" data-v-51576860>ເຫດຜົນຂອງການແກ້ໄຂ</label> <input id=\"reason\" type=\"text\" placeholder=\"ລະບຸເຫດຜົນຂອງການແກ້ໄຂ...\"" + _vm._ssrAttr("value", _vm.form.reason) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.reason
  }) + " data-v-51576860> " + (_vm.errors.reason ? "<div class=\"invalid-feedback\" data-v-51576860>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.errors.reason) + "\n                ") + "</div>" : "<!---->") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"amount-summary\" data-v-51576860><div class=\"totals-grid\" data-v-51576860><div class=\"total-item\" data-v-51576860><label data-v-51576860>ລວມຍ່ອຍ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal))) + "</span></div> <div class=\"total-item\" data-v-51576860><label data-v-51576860>ພາສີລວມ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTax))) + "</span></div> <div class=\"total-item\" data-v-51576860><label data-v-51576860>ຍອດສຸດທິ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedNet))) + "</span></div> <div class=\"total-item grand-total\" data-v-51576860><label data-v-51576860>ລວມທັງໝົດ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal))) + "</span></div></div></div>")], 2)]), _vm._ssrNode(" <div class=\"tab-content\"" + _vm._ssrStyle(null, null, {
    display: _vm.activeTab === 'lines' ? '' : 'none'
  }) + " data-v-51576860><div class=\"line-items-section\" data-v-51576860><div class=\"add-line-header\" data-v-51576860><h5 class=\"section-title\" data-v-51576860><i class=\"fas fa-list\" data-v-51576860></i>\n                ລາຍການສິນຄ້າ / ການບໍລິການ\n              </h5> <div class=\"add-line-actions\" data-v-51576860><button type=\"button\" class=\"btn btn-primary btn-add-line\" data-v-51576860><i class=\"fas fa-plus-circle\" data-v-51576860></i>\n                  ເພີ່ມລາຍການສິນຄ້າ\n                </button> <span class=\"line-count-info\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.lineItems.length) + " ລາຍການ") + "</span></div></div> " + (_vm.lineItems.length === 0 ? "<div class=\"empty-line-state\" data-v-51576860><div class=\"empty-content\" data-v-51576860><i class=\"fas fa-shopping-cart\" data-v-51576860></i> <h4 data-v-51576860>ຍັງບໍ່ມີລາຍການສິນຄ້າ</h4> <p data-v-51576860>ກະລຸນາເພີ່ມສິນຄ້າຫຼືການບໍລິການເພື່ອສ້າງໃບແຈ້ງໜີ້</p> <button type=\"button\" class=\"btn btn-lg btn-primary\" data-v-51576860><i class=\"fas fa-plus-circle\" data-v-51576860></i>\n                  ເພີ່ມລາຍການທຳອິດ\n                </button></div></div>" : "<div class=\"line-items-table-container\" data-v-51576860><div class=\"line-items-table\" data-v-51576860><table class=\"table\" data-v-51576860><thead data-v-51576860><tr data-v-51576860><th style=\"width: 40px;\" data-v-51576860>#</th> <th style=\"width: 200px;\" data-v-51576860>ລາຍລະອຽດ *</th> <th style=\"width: 80px;\" data-v-51576860>ຈຳນວນ *</th> <th style=\"width: 100px;\" data-v-51576860>ລາຄາຕໍ່ຫົວ *</th> <th style=\"width: 80px;\" data-v-51576860>ພາສີ %</th> <th style=\"width: 100px;\" data-v-51576860>ຍອດພາສີ</th> <th style=\"width: 120px;\" data-v-51576860>ລວມຕໍ່ແຖວ</th> <th style=\"width: 60px;\" data-v-51576860>ລຶບ</th></tr></thead> <tbody data-v-51576860>" + _vm._ssrList(_vm.lineItems, function (line, index) {
    return "<tr class=\"line-row\" data-v-51576860><td class=\"line-number\" data-v-51576860>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td data-v-51576860><input type=\"text\" placeholder=\"ລາຍລະອຽດສິນຄ້າ/ການບໍລິການ...\"" + _vm._ssrAttr("value", line.description) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_description`]
    }) + " data-v-51576860></td> <td data-v-51576860><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.quantity) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_quantity`]
    }) + " data-v-51576860></td> <td data-v-51576860><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("value", line.unitPrice) + _vm._ssrClass("form-control form-control-sm", {
      'is-invalid': _vm.errors[`line_${index}_unitPrice`]
    }) + " data-v-51576860></td> <td data-v-51576860><input type=\"number\" step=\"0.01\" min=\"0\" max=\"100\"" + _vm._ssrAttr("value", line.taxRate) + " class=\"form-control form-control-sm\" data-v-51576860></td> <td class=\"tax-amount\" data-v-51576860>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.taxAmount || 0)) + "\n                      ") + "</td> <td class=\"line-total\" data-v-51576860>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.formatCurrency(line.lineTotal || 0)) + "\n                      ") + "</td> <td data-v-51576860><button type=\"button\" title=\"ລຶບລາຍການ\" class=\"btn btn-sm btn-danger\" data-v-51576860><i class=\"fas fa-trash\" data-v-51576860></i></button></td></tr>";
  }) + "</tbody></table></div> <div class=\"add-more-lines\" data-v-51576860><button type=\"button\" class=\"btn btn-outline-primary btn-add-more\" data-v-51576860><i class=\"fas fa-plus\" data-v-51576860></i>\n                  ເພີ່ມລາຍການໃໝ່\n                </button> <div class=\"quick-add-buttons\" data-v-51576860><button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-v-51576860>\n                    ເພີ່ມ 3 ລາຍການ\n                  </button> <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-v-51576860>\n                    ເພີ່ມ 5 ລາຍການ\n                  </button></div></div> <div class=\"line-totals-summary\" data-v-51576860><div class=\"totals-grid\" data-v-51576860><div class=\"total-item\" data-v-51576860><label data-v-51576860>ລວມຍ່ອຍ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedSubtotal))) + "</span></div> <div class=\"total-item\" data-v-51576860><label data-v-51576860>ພາສີລວມ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTax))) + "</span></div> <div class=\"total-item\" data-v-51576860><label data-v-51576860>ຍອດສຸດທິ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedNet))) + "</span></div> <div class=\"total-item grand-total\" data-v-51576860><label data-v-51576860>ລວມທັງໝົດ:</label> <span class=\"amount\" data-v-51576860>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.calculatedTotal))) + "</span></div></div></div></div>") + "</div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-51576860><div class=\"footer-actions\" data-v-51576860><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary\" data-v-51576860><i class=\"fas fa-times\" data-v-51576860></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-51576860>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-51576860></i>" : "<i class=\"fas fa-save\" data-v-51576860></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.saving ? 'ກຳລັງບັນທຶກ...' : _vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue?vue&type=template&id=51576860&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/accounting/ar/invoice/maintain/index.vue?vue&type=script&lang=js&
/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'InvoiceHeaderMaintain',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    invoice: {
      type: Object,
      default: null
    },
    customers: {
      type: Array,
      default: () => []
    },
    currencies: {
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
      lineItems: [],
      nextTempId: 1,
      selectedCustomer: null,
      selectedCurrency: null,
      form: {
        id: null,
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        customerId: '',
        currencyId: '',
        exchangeRate: 1.0000,
        totalAmount: 0.00,
        taxAmount: 0.00,
        netAmount: 0.00,
        status: 'draft',
        description: '',
        reason: ''
      }
    };
  },
  computed: {
    isEdit() {
      return !!(this.invoice && this.invoice.id);
    },
    calculatedSubtotal() {
      return this.lineItems.reduce((sum, line) => {
        const subtotal = (parseFloat(line.quantity) || 0) * (parseFloat(line.unitPrice) || 0);
        return sum + subtotal;
      }, 0);
    },
    calculatedTax() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.taxAmount) || 0), 0);
    },
    calculatedNet() {
      return this.calculatedSubtotal;
    },
    calculatedTotal() {
      return this.lineItems.reduce((sum, line) => sum + (parseFloat(line.lineTotal) || 0), 0);
    },
    isFormValid() {
      const hasValidHeader = this.form.invoiceNumber && this.form.invoiceDate && this.form.customerId && (!this.isEdit || this.form.reason);
      const hasValidLines = this.lineItems.length > 0 && this.lineItems.every(line => line.description && (parseFloat(line.quantity) || 0) > 0 && (parseFloat(line.unitPrice) || 0) >= 0);
      return hasValidHeader && hasValidLines;
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
    invoice: {
      handler() {
        if (this.visible) {
          this.initializeDialog();
        }
      }
    }
  },
  methods: {
    async initializeDialog() {
      this.activeTab = 'header';
      this.clearErrors();
      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          invoiceDate: this.invoice.invoiceDate ? this.invoice.invoiceDate.split('T')[0] : '',
          dueDate: this.invoice.dueDate ? this.invoice.dueDate.split('T')[0] : '',
          customerId: this.invoice.customerId,
          currencyId: this.invoice.currencyId,
          exchangeRate: this.invoice.exchangeRate || 1.0000,
          totalAmount: this.invoice.totalAmount || 0.00,
          taxAmount: this.invoice.taxAmount || 0.00,
          netAmount: this.invoice.netAmount || 0.00,
          status: this.invoice.status || 'draft',
          description: this.invoice.description || '',
          reason: ''
        };
        await this.loadLineItems(this.invoice.id);
      } else {
        this.resetForm();

        // Set default date to today
        this.form.invoiceDate = new Date().toISOString().split('T')[0];
        // Set default due date to 30 days from today
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 30);
        this.form.dueDate = dueDate.toISOString().split('T')[0];

        // Initialize with default currency
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'USD') || this.currencies[0];
          this.form.currencyId = defaultCurrency.id;
          this.selectedCurrency = defaultCurrency;
        }

        // Initialize with one empty line item
        this.lineItems = [this.createEmptyLine()];
      }
      this.updateSelectedCustomer();
      this.updateSelectedCurrency();
    },
    resetDialog() {
      this.resetForm();
      this.lineItems = [];
      this.selectedCustomer = null;
      this.selectedCurrency = null;
      this.clearErrors();
      this.activeTab = 'header';
      this.formLoading = false;
      this.saving = false;
    },
    async loadLineItems(invoiceId) {
      try {
        const {
          data
        } = await this.$axios.get(`/api/ar-invoice-lines/by-header/${invoiceId}`);
        this.lineItems = data.data || [this.createEmptyLine()];
        this.lineItems.forEach(line => {
          if (!line.tempId) {
            line.tempId = this.nextTempId++;
          }
        });
      } catch (error) {
        console.error('Error loading line items:', error);
        this.lineItems = [this.createEmptyLine()];
      }
    },
    createEmptyLine() {
      return {
        tempId: this.nextTempId++,
        lineNumber: this.lineItems.length + 1,
        description: '',
        quantity: 1,
        unitPrice: 0,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0
      };
    },
    addNewLine() {
      this.lineItems.push(this.createEmptyLine());
    },
    addMultipleLines(count) {
      for (let i = 0; i < count; i++) {
        this.lineItems.push(this.createEmptyLine());
      }
    },
    removeLine(index) {
      if (this.lineItems.length > 1) {
        this.lineItems.splice(index, 1);
        this.updateLineNumbers();
      }
    },
    updateLineNumbers() {
      this.lineItems.forEach((line, index) => {
        line.lineNumber = index + 1;
      });
    },
    calculateLineTotal(line) {
      const quantity = parseFloat(line.quantity) || 0;
      const unitPrice = parseFloat(line.unitPrice) || 0;
      const taxRate = parseFloat(line.taxRate) || 0;
      const subtotal = quantity * unitPrice;
      const taxAmount = subtotal * (taxRate / 100);
      line.taxAmount = taxAmount;
      line.lineTotal = subtotal + taxAmount;
    },
    updateSelectedCustomer() {
      if (this.form.customerId && this.customers.length > 0) {
        this.selectedCustomer = this.customers.find(c => c.id === this.form.customerId);
      } else {
        this.selectedCustomer = null;
      }
    },
    updateSelectedCurrency() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(c => c.id === this.form.currencyId);
      } else {
        this.selectedCurrency = null;
      }
    },
    onCustomerChange() {
      this.updateSelectedCustomer();
      this.calculateDueDate();
      this.clearFieldError('customerId');
    },
    onCurrencyChange() {
      this.updateSelectedCurrency();
      this.clearFieldError('currencyId');
    },
    calculateDueDate() {
      var _this$selectedCustome;
      if (this.form.invoiceDate && (_this$selectedCustome = this.selectedCustomer) !== null && _this$selectedCustome !== void 0 && _this$selectedCustome.paymentTerms) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(invoiceDate);
        dueDate.setDate(dueDate.getDate() + parseInt(this.selectedCustomer.paymentTerms));
        this.form.dueDate = dueDate.toISOString().split('T')[0];
      }
    },
    validateForm() {
      this.errors = {};

      // Header validation
      if (!this.form.invoiceNumber) {
        this.errors.invoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້';
      }
      if (!this.form.customerId) {
        this.errors.customerId = 'ກະລຸນາເລືອກລູກຄ້າ';
      }
      if (!this.form.invoiceDate) {
        this.errors.invoiceDate = 'ກະລຸນາໃສ່ວັນທີໃບແຈ້ງໜີ້';
      }

      // Date validation
      if (this.form.invoiceDate && this.form.dueDate) {
        const invoiceDate = new Date(this.form.invoiceDate);
        const dueDate = new Date(this.form.dueDate);
        if (dueDate <= invoiceDate) {
          this.errors.dueDate = 'ວັນທີຄົບກຳນົດຕ້ອງຫຼັງຈາກວັນທີໃບແຈ້ງໜີ້';
        }
      }

      // Line items validation
      if (this.lineItems.length === 0) {
        this.errors.lineItems = 'ກະລຸນາເພີ່ມລາຍການສິນຄ້າຢ່າງໜ້ອຍ 1 ລາຍການ';
      } else {
        for (let i = 0; i < this.lineItems.length; i++) {
          const line = this.lineItems[i];
          if (!line.description) {
            this.errors[`line_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດສິນຄ້າ';
          }
          if (!line.quantity || parseFloat(line.quantity) <= 0) {
            this.errors[`line_${i}_quantity`] = 'ຈຳນວນຕ້ອງຫຼາຍກວ່າ 0';
          }
          if (line.unitPrice === '' || parseFloat(line.unitPrice) < 0) {
            this.errors[`line_${i}_unitPrice`] = 'ລາຄາຕ້ອງເປັນຄ່າບວກ';
          }
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
        // Switch to appropriate tab if there are errors
        if (Object.keys(this.errors).some(key => key.startsWith('line_'))) {
          this.activeTab = 'lines';
        } else {
          this.activeTab = 'header';
        }
        return;
      }
      this.saving = true;
      const formData = {
        ...this.form,
        totalAmount: this.calculatedTotal,
        taxAmount: this.calculatedTax,
        netAmount: this.calculatedNet,
        exchangeRate: parseFloat(this.form.exchangeRate) || 1.0000,
        lineItems: this.lineItems.map((line, index) => ({
          ...line,
          lineNumber: index + 1,
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          taxRate: parseFloat(line.taxRate) || 0
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
      this.form = {
        id: null,
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        customerId: '',
        currencyId: '',
        exchangeRate: 1.0000,
        totalAmount: 0.00,
        taxAmount: 0.00,
        netAmount: 0.00,
        status: 'draft',
        description: '',
        reason: ''
      };
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    },
    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`);
      if (this.$toast) {
        this.$toast[type](message);
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var invoice_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/accounting/ar/invoice/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(626)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoice_maintainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51576860",
  "6adf3fc7"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=accounting-ar-invoice-maintain.js.map