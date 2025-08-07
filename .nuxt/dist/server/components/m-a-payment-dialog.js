exports.ids = [56];
exports.modules = {

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(599);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1716ccc8", content, true, context)
};

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51177b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(523);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51177b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51177b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51177b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51177b14_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-51177b14]{align-items:center;animation:fadeIn-51177b14 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}@keyframes fadeIn-51177b14{0%{opacity:0}to{opacity:1}}.enhanced-dialog[data-v-51177b14]{animation:slideIn-51177b14 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:700px;overflow:hidden;width:95%}@keyframes slideIn-51177b14{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-51177b14]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;justify-content:space-between;padding:24px}.modal-title-section[data-v-51177b14]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-51177b14]{font-size:20px;opacity:.9}.modal-title[data-v-51177b14]{font-size:20px;font-weight:600;margin:0}.close-btn[data-v-51177b14]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:18px;opacity:.8;padding:8px;transition:opacity .2s}.close-btn[data-v-51177b14]:hover{background:hsla(0,0%,100%,.1);opacity:1}.modal-body[data-v-51177b14]{max-height:60vh;overflow-y:auto;padding:24px}.form-loading[data-v-51177b14]{align-items:center;color:#666;display:flex;justify-content:center;padding:40px}.spinner-small[data-v-51177b14]{animation:spin-51177b14 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-51177b14{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.form-grid[data-v-51177b14]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-51177b14]{margin-bottom:0}.form-group.full-width[data-v-51177b14]{grid-column:1/-1}.form-label[data-v-51177b14]{align-items:center;color:#374151;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:8px}.form-label.required[data-v-51177b14]:after{color:#e74c3c;content:\"*\";margin-left:4px}.form-label i[data-v-51177b14]{color:#6b7280;font-size:12px}.form-control[data-v-51177b14]{background:#fafafa;border:2px solid #e5e7eb;border-radius:8px;box-sizing:border-box;font-size:14px;padding:12px 16px;transition:all .2s ease;width:100%}.form-control[data-v-51177b14]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1);outline:none}.input-group[data-v-51177b14]{border-radius:8px;display:flex;overflow:hidden}.input-group .form-control[data-v-51177b14]{border-radius:0;border-right:none}.input-group-append[data-v-51177b14]{display:flex}.input-group-text[data-v-51177b14]{background:#f8f9fa;border:2px solid #e5e7eb;border-left:none;color:#6b7280;font-size:14px;font-weight:600;padding:12px 16px}.custom-select-wrapper[data-v-51177b14]{position:relative}.custom-select[data-v-51177b14]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:40px}.select-icon[data-v-51177b14]{color:#6b7280;pointer-events:none;position:absolute;right:12px;top:50%;transform:translateY(-50%)}.field-hint[data-v-51177b14]{align-items:center;display:flex;font-size:12px;gap:6px;justify-content:space-between;margin-top:6px}.field-hint.error[data-v-51177b14]{color:#e74c3c}.field-hint.warning[data-v-51177b14]{color:#f39c12}.exchange-rate-info[data-v-51177b14]{align-items:center;color:#8e44ad;display:flex;font-size:11px;gap:4px}.exchange-rate-info i[data-v-51177b14]{color:#9b59b6}.text-counter[data-v-51177b14]{color:#9ca3af;font-size:11px;margin-left:auto}.ministry-info[data-v-51177b14]{background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;margin-top:12px;padding:12px}.ministry-details[data-v-51177b14]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:1fr}.ministry-detail-item[data-v-51177b14]{align-items:center;color:#075985;display:flex;font-size:12px;gap:8px}.ministry-detail-item i[data-v-51177b14]{color:#0ea5e9;flex-shrink:0;width:14px}.ministry-name[data-v-51177b14]{font-weight:600}.ministry-code[data-v-51177b14]{background:#e0f2fe;border-radius:4px;font-family:monospace;padding:2px 6px}.ministry-description[data-v-51177b14]{color:#0369a1;font-style:italic}.ministry-contact[data-v-51177b14]{font-family:monospace}.bank-account-info[data-v-51177b14]{background:#f8f9fa;border:1px solid #e9ecef;border-radius:8px;margin-top:12px;padding:12px}.bank-details[data-v-51177b14]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:1fr 1fr}.bank-detail-item[data-v-51177b14]{align-items:center;color:#6b7280;display:flex;font-size:12px;gap:6px}.bank-detail-item i[data-v-51177b14]{color:#667eea;width:12px}.bank-detail-item .branch[data-v-51177b14]{color:#9ca3af;font-style:italic}.form-errors[data-v-51177b14]{background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:20px;padding:16px}.form-errors h6[data-v-51177b14]{align-items:center;color:#dc2626;display:flex;font-size:14px;gap:6px;margin:0 0 10px}.form-errors ul[data-v-51177b14]{color:#dc2626;font-size:13px;margin:0;padding-left:20px}.enhanced-footer[data-v-51177b14]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-51177b14]{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:600;gap:8px;padding:12px 24px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-51177b14]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-51177b14]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-51177b14]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-51177b14]{background:#6c757d;color:#fff}.btn[data-v-51177b14]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-51177b14]{animation:spin-51177b14 1s linear infinite}@media (max-width:768px){.enhanced-dialog[data-v-51177b14]{margin:10px;width:98%}.bank-details[data-v-51177b14],.form-grid[data-v-51177b14],.ministry-details[data-v-51177b14]{grid-template-columns:1fr}.modal-body[data-v-51177b14],.modal-header[data-v-51177b14]{padding:16px}.enhanced-footer[data-v-51177b14]{flex-direction:column-reverse;padding:16px}.enhanced-footer .btn[data-v-51177b14]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDialog/index.vue?vue&type=template&id=51177b14&scoped=true&
var render = function render() {
  var _vm$localForm$purpose, _vm$localForm$note;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-51177b14>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-51177b14><div class=\"modal-title-section\" data-v-51177b14><i class=\"fas fa-money-bill-wave modal-icon\" data-v-51177b14></i> <h5 class=\"modal-title\" data-v-51177b14>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂລາຍຈ່າຍ' : 'ລົງບັນຊີລາຍຈ່າຍ') + "\n        ") + "</h5></div> <button class=\"close-btn\" data-v-51177b14><i class=\"fas fa-times\" data-v-51177b14></i></button></div> "), _vm._ssrNode("<form data-v-51177b14>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-51177b14>", "</div>", [_vm.formLoading ? _vm._ssrNode("<div class=\"form-loading\" data-v-51177b14>", "</div>", [_vm._ssrNode("<div class=\"spinner-small\" data-v-51177b14></div> <p data-v-51177b14>Loading form data...</p>")], 2) : _vm._ssrNode("<div class=\"form-grid\" data-v-51177b14>", "</div>", [_vm._ssrNode("<div class=\"form-group full-width\" data-v-51177b14><label class=\"form-label required\" data-v-51177b14><i class=\"fas fa-dollar-sign\" data-v-51177b14></i>\n              ຈຳນວນເງິນ\n            </label> <div class=\"input-group\" data-v-51177b14><input type=\"number\" step=\"0.01\" min=\"0\" placeholder=\"Enter amount\" required=\"required\"" + _vm._ssrAttr("value", _vm.localForm.amount) + " class=\"form-control\" data-v-51177b14> <div class=\"input-group-append\" data-v-51177b14><span class=\"input-group-text\" data-v-51177b14>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.selectedCurrencyCode) + "\n                ") + "</span></div></div></div> <div class=\"form-group\" data-v-51177b14><label class=\"form-label\" data-v-51177b14><i class=\"fas fa-exchange-alt\" data-v-51177b14></i>\n              ອັດຕາແລກປ່ຽນ\n            </label> <input type=\"number\" step=\"0.000001\" min=\"0\" placeholder=\"ອັດຕາແລກປ່ຽນ (ທາງເລືອກ)\"" + _vm._ssrAttr("value", _vm.localForm.exchangeRate) + " class=\"form-control\" data-v-51177b14> <div class=\"field-hint\" data-v-51177b14><span class=\"exchange-rate-info\" data-v-51177b14><i class=\"fas fa-info-circle\" data-v-51177b14></i>\n                ອັດຕາແລກປ່ຽນປະຈຳວັນ\n              </span></div></div> <div class=\"form-group\" data-v-51177b14><label class=\"form-label required\" data-v-51177b14><i class=\"fas fa-calendar\" data-v-51177b14></i>\n              Booking date\n            </label> <input type=\"date\"" + _vm._ssrAttr("max", _vm.today) + " required=\"required\"" + _vm._ssrAttr("value", _vm.localForm.bookingDate) + " class=\"form-control\" data-v-51177b14></div> "), _vm._ssrNode("<div class=\"form-group\" data-v-51177b14>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-51177b14><i class=\"fas fa-user\" data-v-51177b14></i>\n              ຜູ້ໃຊ້\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-51177b14>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.makerId,
      expression: "localForm.makerId"
    }],
    staticClass: "form-control custom-select",
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
        _vm.$set(_vm.localForm, "makerId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກຜູ້ລົງ")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c('option', {
      key: user.id,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n                  " + _vm._s(user.cus_name) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-51177b14><i class=\"fas fa-chevron-down\" data-v-51177b14></i></div>")], 2), _vm._ssrNode(" " + (_vm.users.length === 0 ? "<div class=\"field-hint error\" data-v-51177b14><i class=\"fas fa-exclamation-triangle\" data-v-51177b14></i>\n              No users available. Please contact administrator.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-51177b14>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-51177b14><i class=\"fas fa-building\" data-v-51177b14></i>\n              ກົມ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-51177b14>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.ministryId,
      expression: "localForm.ministryId"
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
        _vm.$set(_vm.localForm, "ministryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedMinistry]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກກົມ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.ministries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n                  " + _vm._s(ministry.ministryCode + ' ' + ministry.ministryName) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-51177b14><i class=\"fas fa-chevron-down\" data-v-51177b14></i></div>")], 2), _vm._ssrNode(" " + (_vm.selectedMinistry ? "<div class=\"ministry-info\" data-v-51177b14><div class=\"ministry-details\" data-v-51177b14><div class=\"ministry-detail-item\" data-v-51177b14><i class=\"fas fa-building\" data-v-51177b14></i> <span class=\"ministry-name\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryName)) + "</span></div> " + (_vm.selectedMinistry.ministryCode ? "<div class=\"ministry-detail-item\" data-v-51177b14><i class=\"fas fa-tag\" data-v-51177b14></i> <span class=\"ministry-code\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.ministryCode)) + "</span></div>" : "<!---->") + " " + (_vm.selectedMinistry.description ? "<div class=\"ministry-detail-item\" data-v-51177b14><i class=\"fas fa-info-circle\" data-v-51177b14></i> <span class=\"ministry-description\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.description)) + "</span></div>" : "<!---->") + " " + (_vm.selectedMinistry.email ? "<div class=\"ministry-detail-item\" data-v-51177b14><i class=\"fas fa-phone\" data-v-51177b14></i> <span class=\"ministry-contact\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedMinistry.email)) + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.ministries.length === 0 ? "<div class=\"field-hint warning\" data-v-51177b14><i class=\"fas fa-info-circle\" data-v-51177b14></i>\n              No ministries available. You can still create the advance\n              without selecting a ministry.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-51177b14>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-51177b14><i class=\"fas fa-coins\" data-v-51177b14></i>\n              ສະກຸນເງິນ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-51177b14>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.currencyId,
      expression: "localForm.currencyId"
    }],
    staticClass: "form-control custom-select",
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
        _vm.$set(_vm.localForm, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
    }, [_vm._v("\n                  " + _vm._s(currency.code) + " - " + _vm._s(currency.name) + "\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-51177b14><i class=\"fas fa-chevron-down\" data-v-51177b14></i></div>")], 2), _vm._ssrNode(" " + (_vm.currencies.length === 0 ? "<div class=\"field-hint error\" data-v-51177b14><i class=\"fas fa-exclamation-triangle\" data-v-51177b14></i>\n              No currencies available. Please contact administrator.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group full-width\" data-v-51177b14>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-51177b14><i class=\"fas fa-university\" data-v-51177b14></i>\n              ບັນຊີທະນາຄານ\n            </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-51177b14>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localForm.bankAccountId,
      expression: "localForm.bankAccountId"
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
        _vm.$set(_vm.localForm, "bankAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedBankAccount]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີທະນາຄານ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.filteredBankAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n                  " + _vm._s(account.bankName) + " - " + _vm._s(account.accountNumber) + " (" + _vm._s(account.accountName) + ")\n                ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-51177b14><i class=\"fas fa-chevron-down\" data-v-51177b14></i></div>")], 2), _vm._ssrNode(" " + (_vm.selectedBankAccount ? "<div class=\"bank-account-info\" data-v-51177b14><div class=\"bank-details\" data-v-51177b14><div class=\"bank-detail-item\" data-v-51177b14><i class=\"fas fa-building\" data-v-51177b14></i> <span data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.bankName)) + "</span> " + (_vm.selectedBankAccount.bankBranch ? "<span class=\"branch\" data-v-51177b14>" + _vm._ssrEscape("\n                    (" + _vm._s(_vm.selectedBankAccount.bankBranch) + ")\n                  ") + "</span>" : "<!---->") + "</div> <div class=\"bank-detail-item\" data-v-51177b14><i class=\"fas fa-credit-card\" data-v-51177b14></i> <span data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.accountNumber)) + "</span></div> <div class=\"bank-detail-item\" data-v-51177b14><i class=\"fas fa-tag\" data-v-51177b14></i> <span data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.accountType)) + "</span></div> <div class=\"bank-detail-item\" data-v-51177b14><i class=\"fas fa-coins\" data-v-51177b14></i> <span data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.selectedBankAccount.currency)) + "</span></div></div></div>" : "<!---->") + " " + (_vm.bankAccounts.length === 0 ? "<div class=\"field-hint warning\" data-v-51177b14><i class=\"fas fa-info-circle\" data-v-51177b14></i>\n              No bank accounts available. You can still create the advance\n              without selecting a bank account.\n            </div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-51177b14><label class=\"form-label\" data-v-51177b14><i class=\"fas fa-tag\" data-v-51177b14></i>\n              ຈຸດປະສົງ\n            </label> <input type=\"text\" placeholder=\"ເນື້ອໃນ ການອອກລາຍຈ່າຍ\" maxlength=\"255\"" + _vm._ssrAttr("value", _vm.localForm.purpose) + " class=\"form-control\" data-v-51177b14> <div class=\"field-hint\" data-v-51177b14><span class=\"text-counter\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(((_vm$localForm$purpose = _vm.localForm.purpose) === null || _vm$localForm$purpose === void 0 ? void 0 : _vm$localForm$purpose.length) || 0) + "/255") + "</span></div></div> <div class=\"form-group\" data-v-51177b14><label class=\"form-label\" data-v-51177b14><i class=\"fas fa-calendar-alt\" data-v-51177b14></i>\n              ວັນຄົບຮອບຄວນຊຳລະ\n            </label> <input type=\"date\"" + _vm._ssrAttr("min", _vm.today) + _vm._ssrAttr("value", _vm.localForm.dueDate) + " class=\"form-control\" data-v-51177b14></div> <div class=\"form-group full-width\" data-v-51177b14><label class=\"form-label\" data-v-51177b14><i class=\"fas fa-sticky-note\" data-v-51177b14></i>\n              ໂນ໊ດ\n            </label> <textarea rows=\"3\" placeholder=\"ລາຍລະອຽດເພີ່ມເຕີມ...\" maxlength=\"500\" class=\"form-control\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(_vm.localForm.note)) + "</textarea> <div class=\"field-hint\" data-v-51177b14><span class=\"text-counter\" data-v-51177b14>" + _vm._ssrEscape(_vm._s(((_vm$localForm$note = _vm.localForm.note) === null || _vm$localForm$note === void 0 ? void 0 : _vm$localForm$note.length) || 0) + "/500") + "</span></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors\" data-v-51177b14><h6 data-v-51177b14><i class=\"fas fa-exclamation-circle\" data-v-51177b14></i>\n            Please fix the following errors:\n          </h6> <ul data-v-51177b14>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-51177b14>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer\" data-v-51177b14><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.saving) + " class=\"btn btn-secondary\" data-v-51177b14><i class=\"fas fa-times\" data-v-51177b14></i>\n          ອອກ\n        </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.saving || _vm.formLoading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-51177b14>" + (_vm.saving ? "<i class=\"fas fa-spinner fa-spin\" data-v-51177b14></i>" : "<i" + _vm._ssrClass("fas", _vm.isEdit ? 'fa-save' : 'fa-plus') + " data-v-51177b14></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.saving ? 'Saving...' : _vm.isEdit ? 'ບັນທຶກ ການແກ້ໄຂ' : 'ບັນທຶກ') + "\n        ") + "</button></div>")], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue?vue&type=template&id=51177b14&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/paymentDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var paymentDialogvue_type_script_lang_js_ = ({
  name: 'MoneyAdvanceDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      default: () => ({
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        exchangeRate: ''
      })
    },
    users: {
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
    formLoading: {
      type: Boolean,
      default: false
    },
    saving: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.initForm();
  },
  data() {
    return {
      localForm: {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
        exchangeRate: ''
      },
      formErrors: []
    };
  },
  computed: {
    user() {
      return this.$auth.user || '';
    },
    selectedCurrencyCode() {
      if (!this.localForm.currencyId) return 'USD';
      const currency = this.currencies.find(c => c.id == this.localForm.currencyId);
      return currency ? currency.code : 'USD';
    },
    selectedBankAccount() {
      if (!this.localForm.bankAccountId) return null;
      return this.bankAccounts.find(account => account.id == this.localForm.bankAccountId);
    },
    selectedMinistry() {
      if (!this.localForm.ministryId) return null;
      return this.ministries.find(ministry => ministry.id == this.localForm.ministryId);
    },
    selectedCurrency() {
      if (!this.localForm.currencyId) return null;
      return this.currencies.find(currency => currency.id == this.localForm.currencyId);
    },
    // Filter bank accounts by selected currency if possible
    filteredBankAccounts() {
      if (!this.selectedCurrency || !this.bankAccounts.length) {
        return this.bankAccounts;
      }
      const currencyCode = this.selectedCurrency.code;
      const filtered = this.bankAccounts.filter(account => account.currency === currencyCode || !account.currency);

      // If no accounts match the currency, return all accounts
      return filtered.length > 0 ? filtered : this.bankAccounts;
    },
    today() {
      return new Date().toISOString().split('T')[0];
    },
    isFormValid() {
      // Debug each validation condition
      const validations = {
        'amount exists': !!this.localForm.amount,
        'amount > 0': this.localForm.amount && parseFloat(this.localForm.amount) > 0,
        'makerId exists': !!this.localForm.makerId,
        'currencyId exists': !!this.localForm.currencyId,
        'bookingDate exists': !!this.localForm.bookingDate,
        'users available': this.users.length > 0,
        'currencies available': this.currencies.length > 0,
        // ✅ NEW: Exchange rate validation (optional but must be valid if provided)
        'exchange rate valid': !this.localForm.exchangeRate || this.localForm.exchangeRate && !isNaN(parseFloat(this.localForm.exchangeRate)) && parseFloat(this.localForm.exchangeRate) > 0
      };

      // Log current form values for debugging
      console.group('🔍 Form Validation Debug');
      console.log('📋 Form Data:', {
        amount: this.localForm.amount,
        makerId: this.localForm.makerId,
        currencyId: this.localForm.currencyId,
        bookingDate: this.localForm.bookingDate,
        exchangeRate: this.localForm.exchangeRate,
        // ✅ NEW: Include exchange rate in debug
        usersCount: this.users.length,
        currenciesCount: this.currencies.length
      });

      // Check each validation and log failures
      const failedValidations = [];
      const passedValidations = [];
      Object.entries(validations).forEach(([key, isValid]) => {
        if (isValid) {
          passedValidations.push(key);
        } else {
          failedValidations.push(key);
        }
      });
      console.log('✅ Passed validations:', passedValidations);
      if (failedValidations.length > 0) {
        console.log('❌ Failed validations:', failedValidations);

        // ✅ NEW: Additional debug info for exchange rate
        if (failedValidations.includes('exchange rate valid')) {
          console.log('💱 Exchange Rate Debug:', {
            value: this.localForm.exchangeRate,
            type: typeof this.localForm.exchangeRate,
            parsed: parseFloat(this.localForm.exchangeRate),
            isNaN: isNaN(parseFloat(this.localForm.exchangeRate)),
            isPositive: parseFloat(this.localForm.exchangeRate) > 0
          });
        }
      }
      const isFormValid = Object.values(validations).every(Boolean);
      console.log(`📊 Overall form valid: ${isFormValid}`);
      console.groupEnd();
      return isFormValid;
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initForm();
      }
    },
    formData: {
      handler(newVal) {
        console.info(`Form data is changing...`);
        if (newVal) {
          this.localForm = {
            ...newVal
          };

          // ✅ Set booking date to today if it's empty and not in edit mode
          if (!this.isEdit && !this.localForm.bookingDate) {
            this.localForm.bookingDate = this.today;
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    initForm() {
      this.formErrors = [];
      console.info(`initiate form data called...`);
      if (this.isEdit && this.formData) {
        console.info(`formData is available...`);
        this.localForm = {
          ...this.formData
        };
      } else {
        this.resetForm();

        // Set default currency if available
        if (this.currencies.length > 0) {
          const defaultCurrency = this.currencies.find(c => c.code === 'LAK') || this.currencies[0];
          this.localForm.currencyId = defaultCurrency.id;
        }
      }
      if (!this.isEdit) {
        // Set default booking date to today for create mode
        this.localForm.makerId = this.user.id;
        this.localForm.bookingDate = this.today;
      }
    },
    resetForm() {
      this.localForm = {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: this.today,
        exchangeRate: ''
      };
    },
    validateForm() {
      this.formErrors = [];
      if (!this.localForm.amount || parseFloat(this.localForm.amount) <= 0) {
        this.formErrors.push('Amount is required and must be greater than 0');
      }
      if (!this.localForm.makerId) {
        this.formErrors.push('User selection is required');
      }
      if (!this.localForm.currencyId) {
        this.formErrors.push('Currency selection is required');
      }
      if (!this.localForm.bookingDate) {
        this.formErrors.push('Booking date is required');
      }
      if (this.localForm.purpose && this.localForm.purpose.length > 255) {
        this.formErrors.push('Purpose must not exceed 255 characters');
      }
      if (this.localForm.note && this.localForm.note.length > 500) {
        this.formErrors.push('Note must not exceed 500 characters');
      }
      if (this.localForm.exchangeRate && parseFloat(this.localForm.exchangeRate) <= 0) {
        this.formErrors.push('Exchange rate must be greater than 0 if provided');
      }
      if (this.users.length === 0) {
        this.formErrors.push('No users available. Please contact administrator.');
      }
      if (this.currencies.length === 0) {
        this.formErrors.push('No currencies available. Please contact administrator.');
      }
      return this.formErrors.length === 0;
    },
    updateSelectedCurrency() {
      // Reset bank account if currency changes and current bank account doesn't match
      console.info(`select currency: ${this.selectedCurrency.code} currency list ${JSON.stringify(this.currencies)}`);
      // reflect exchange rate in form (( update only it is in create mode))
      // if (!this.isEdit) {
      this.localForm.exchangeRate = this.currencies.find(currency => currency.code === this.selectedCurrency.code).rate || 1;
      // }

      if (this.selectedBankAccount && this.selectedCurrency) {
        const bankCurrency = this.selectedBankAccount.currency;
        const selectedCurrency = this.selectedCurrency.code;
        if (bankCurrency && bankCurrency !== selectedCurrency) {
          this.localForm.bankAccountId = '';
        }
      }
      this.$emit('currency-changed', this.localForm.currencyId);
    },
    updateSelectedBankAccount() {
      this.$emit('bank-account-changed', this.localForm.bankAccountId);
    },
    updateSelectedMinistry() {
      this.$emit('ministry-changed', this.localForm.ministryId);
    },
    closeDialog() {
      this.$emit('close');
    },
    saveAdvance() {
      if (!this.validateForm()) {
        this.$emit('validation-error', 'Please fix the form errors');
        return;
      }

      // Clean up empty values
      const formData = {
        ...this.localForm
      };
      if (!formData.ministryId) delete formData.ministryId;
      if (!formData.bankAccountId) delete formData.bankAccountId;
      if (!formData.dueDate) delete formData.dueDate;
      if (!formData.purpose) delete formData.purpose;
      if (!formData.note) delete formData.note;
      if (!formData.exchangeRate) delete formData.exchangeRate;
      this.$emit('save', formData);
    }
  }
});
// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_paymentDialogvue_type_script_lang_js_ = (paymentDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/paymentDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(598)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_paymentDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51177b14",
  "a055272e"
  
)

/* harmony default export */ var paymentDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-payment-dialog.js.map