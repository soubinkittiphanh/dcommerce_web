exports.ids = [79];
exports.modules = {

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(668);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("f87d6c4e", content, true, context)
};

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1861f3a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(587);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1861f3a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1861f3a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1861f3a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1861f3a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog-overlay[data-v-1861f3a8]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.dialog-container[data-v-1861f3a8]{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);max-height:90vh;max-width:900px;overflow-y:auto;width:100%}.dialog-header[data-v-1861f3a8]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #e9ecef;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:20px 24px}.dialog-title[data-v-1861f3a8]{color:#333;font-size:20px;font-weight:600;margin:0}.dialog-close[data-v-1861f3a8]{background:none;border:none;border-radius:4px;color:#666;cursor:pointer;font-size:20px;padding:8px;transition:all .2s}.dialog-close[data-v-1861f3a8]:hover{background-color:#e9ecef;color:#333}.dialog-body[data-v-1861f3a8]{padding:24px}.form-row[data-v-1861f3a8]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr;margin-bottom:20px}.form-group[data-v-1861f3a8]{display:flex;flex-direction:column;gap:6px}.form-group label[data-v-1861f3a8]{color:#495057;font-size:14px;font-weight:500}.form-group label.required[data-v-1861f3a8]:after{color:#dc3545;content:\" *\"}.exchange-rate-info[data-v-1861f3a8]{color:#6c757d;font-size:12px;font-weight:400}.exchange-rate-wrapper[data-v-1861f3a8]{align-items:center;display:flex;gap:8px;position:relative}.btn-refresh-rate[data-v-1861f3a8]{align-items:center;background:#17a2b8;border:none;border-radius:4px;color:#fff;cursor:pointer;display:flex;justify-content:center;min-width:40px;padding:8px 12px;transition:all .2s}.btn-refresh-rate[data-v-1861f3a8]:hover:not(:disabled){background:#138496}.btn-refresh-rate[data-v-1861f3a8]:disabled{cursor:not-allowed;opacity:.6}.exchange-rate-updated[data-v-1861f3a8]{align-items:center;color:#28a745;display:flex;font-size:12px;gap:4px;margin-top:4px}.currency-rate[data-v-1861f3a8]{color:#6c757d;font-size:12px}.form-control[data-v-1861f3a8]{background-color:#fff;border:1px solid #ced4da;border-radius:6px;flex:1;font-size:14px;padding:10px 12px;transition:all .2s}.form-control[data-v-1861f3a8]:focus{border-color:#007bff;box-shadow:0 0 0 2px rgba(0,123,255,.25);outline:none}.form-control.is-invalid[data-v-1861f3a8]{border-color:#dc3545}.form-control.is-invalid[data-v-1861f3a8]:focus{box-shadow:0 0 0 2px rgba(220,53,69,.25)}.form-control[data-v-1861f3a8]:readonly{background-color:#e9ecef;opacity:1}.invalid-feedback[data-v-1861f3a8]{color:#dc3545;font-size:12px;margin-top:4px}.checkbox-wrapper[data-v-1861f3a8]{align-items:center;display:flex;gap:8px;margin-top:8px}.form-checkbox[data-v-1861f3a8]{cursor:pointer;height:18px;width:18px}.checkbox-label[data-v-1861f3a8]{cursor:pointer;font-weight:400;margin:0}.calculation-section[data-v-1861f3a8]{background-color:#f8f9fa;border-radius:8px;margin:20px 0;padding:16px}.calculation-section h4[data-v-1861f3a8]{color:#495057;font-size:16px;margin:0 0 12px}.calculation-grid[data-v-1861f3a8]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:1fr 1fr}.calculation-item[data-v-1861f3a8]{align-items:center;background-color:#fff;border:1px solid #e9ecef;border-radius:6px;display:flex;justify-content:space-between;padding:8px 12px}.calculation-item label[data-v-1861f3a8]{color:#666;font-size:13px;margin:0}.calculation-value[data-v-1861f3a8]{color:#28a745;font-size:14px;font-weight:600}.selected-info-section[data-v-1861f3a8]{background-color:#e7f3ff;border-left:4px solid #007bff;border-radius:8px;margin:20px 0;padding:16px}.selected-info-section h4[data-v-1861f3a8]{color:#0056b3;font-size:16px;margin:0 0 12px}.info-grid[data-v-1861f3a8]{display:flex;flex-direction:column;gap:12px}.info-item[data-v-1861f3a8]{align-items:center;background-color:#fff;border:1px solid #b3d7ff;border-radius:6px;display:flex;justify-content:space-between;padding:8px 12px}.info-item label[data-v-1861f3a8]{color:#0056b3;font-size:13px;font-weight:500;margin:0}.info-value[data-v-1861f3a8]{color:#333;font-size:14px;font-weight:600}.dialog-footer[data-v-1861f3a8]{background-color:#f8f9fa;border-radius:0 0 12px 12px;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.btn[data-v-1861f3a8]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;transition:all .2s}.btn[data-v-1861f3a8]:disabled{cursor:not-allowed;opacity:.6}.btn-primary[data-v-1861f3a8]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-1861f3a8]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-secondary[data-v-1861f3a8]{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-secondary[data-v-1861f3a8]:hover:not(:disabled){background-color:#5a6268;border-color:#5a6268}@media (max-width:768px){.dialog-overlay[data-v-1861f3a8]{padding:10px}.dialog-container[data-v-1861f3a8]{max-width:100%}.dialog-body[data-v-1861f3a8],.dialog-footer[data-v-1861f3a8],.dialog-header[data-v-1861f3a8]{padding:16px}.form-row[data-v-1861f3a8]{gap:16px;grid-template-columns:1fr}.calculation-grid[data-v-1861f3a8]{gap:12px;grid-template-columns:1fr}.calculation-item[data-v-1861f3a8],.info-item[data-v-1861f3a8]{align-items:flex-start;flex-direction:column;gap:4px}.dialog-footer[data-v-1861f3a8]{flex-direction:column-reverse;gap:8px}.btn[data-v-1861f3a8]{justify-content:center;width:100%}.exchange-rate-wrapper[data-v-1861f3a8]{align-items:stretch;flex-direction:column;gap:8px}.btn-refresh-rate[data-v-1861f3a8]{align-self:flex-end;width:auto}}@media (max-width:480px){.dialog-title[data-v-1861f3a8]{font-size:18px}.form-control[data-v-1861f3a8]{font-size:16px;padding:8px 10px}.calculation-section[data-v-1861f3a8],.selected-info-section[data-v-1861f3a8]{padding:12px}.calculation-item[data-v-1861f3a8],.info-item[data-v-1861f3a8]{padding:6px 8px}}.dialog-overlay[data-v-1861f3a8]{animation:fadeIn-1861f3a8 .3s ease}.dialog-container[data-v-1861f3a8]{animation:slideIn-1861f3a8 .3s ease}@keyframes fadeIn-1861f3a8{0%{opacity:0}to{opacity:1}}@keyframes slideIn-1861f3a8{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/revenueTargetDialog/index.vue?vue&type=template&id=1861f3a8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('div', {
    staticClass: "dialog-overlay",
    on: {
      "click": _vm.handleOverlayClick
    }
  }, [_vm._ssrNode("<div class=\"dialog-container\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<div class=\"dialog-header\" data-v-1861f3a8><h2 class=\"dialog-title\" data-v-1861f3a8>" + _vm._ssrEscape("\n        " + _vm._s(_vm.target ? 'ແກ້ໄຂເປົ້າໝາຍລາຍຮັບ' : 'ສ້າງເປົ້າໝາຍລາຍຮັບ') + "\n      ") + "</h2> <button class=\"dialog-close\" data-v-1861f3a8><i class=\"fas fa-times\" data-v-1861f3a8></i></button></div> "), _vm._ssrNode("<div class=\"dialog-body\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<form data-v-1861f3a8>", "</form>", [_vm._ssrNode("<div class=\"form-row\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-1861f3a8><label for=\"name\" class=\"required\" data-v-1861f3a8>ຊື່ເປົ້າໝາຍລາຍຮັບ</label> <input id=\"name\" type=\"text\" placeholder=\"ກະລຸນາໃສ່ຊື່ເປົ້າໝາຍ\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.name) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.name
  }) + " data-v-1861f3a8> " + (_vm.errors.name ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.name) + "\n            ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<label for=\"year\" class=\"required\" data-v-1861f3a8>ປີ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.year,
      expression: "form.year"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.year
    },
    attrs: {
      "id": "year",
      "required": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "year", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກປີ")]), _vm._v(" "), _vm._l(_vm.availableYears, function (year) {
    return _c('option', {
      key: year,
      domProps: {
        "value": year
      }
    }, [_vm._v("\n                " + _vm._s(year) + "\n              ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.year ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.year) + "\n            ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<label for=\"parentMinistryId\" class=\"required\" data-v-1861f3a8>ກະຊວງ/ຫົວໜ່ວຍງານ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.parentMinistryId,
      expression: "form.parentMinistryId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.parentMinistryId
    },
    attrs: {
      "id": "parentMinistryId",
      "required": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "parentMinistryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກກະຊວງ/ຫົວໜ່ວຍງານ")]), _vm._v(" "), _vm._l(_vm.ministries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n                " + _vm._s(ministry.ministryCode) + " (" + _vm._s(ministry.ministryName) + ")\n              ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.parentMinistryId ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.parentMinistryId) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<label for=\"chartAccountId\" class=\"required\" data-v-1861f3a8>ບັນຊີລາຍຮັບ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.chartAccountId,
      expression: "form.chartAccountId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.chartAccountId
    },
    attrs: {
      "id": "chartAccountId",
      "required": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "chartAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີລາຍຮັບ ")]), _vm._v(" "), _vm._l(_vm.chartAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n                " + _vm._s(account.accountNumber) + " - " + _vm._s(account.accountName) + "\n              ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.chartAccountId ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.chartAccountId) + "\n            ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-1861f3a8>", "</div>", [_vm._ssrNode("<label for=\"currencyId\" class=\"required\" data-v-1861f3a8>ສະກຸນເງິນ</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.currencyId,
      expression: "form.currencyId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.currencyId
    },
    attrs: {
      "id": "currencyId",
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
    }, [_vm._v("\n                " + _vm._s(currency.code) + " - " + _vm._s(currency.name) + "\n              ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.currencyId ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.currencyId) + "\n            ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-1861f3a8><label for=\"exchangeRate\" class=\"required\" data-v-1861f3a8>\n              ອັດຕາແລກປ່ຽນ\n              " + (_vm.selectedCurrency ? "<span class=\"exchange-rate-info\" data-v-1861f3a8>" + _vm._ssrEscape("\n                (" + _vm._s(_vm.selectedCurrency.code) + " to LAK)\n              ") + "</span>" : "<!---->") + "</label> <div class=\"exchange-rate-wrapper\" data-v-1861f3a8><input id=\"exchangeRate\" type=\"number\" step=\"0.01\" min=\"1\"" + _vm._ssrAttr("placeholder", _vm.selectedCurrency ? `Rate for ${_vm.selectedCurrency.code}` : '1.00') + _vm._ssrAttr("readonly", _vm.isExchangeRateReadonly) + " required=\"required\"" + _vm._ssrAttr("value", _vm.form.exchangeRate) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.exchangeRate
  }) + " data-v-1861f3a8> " + (_vm.selectedCurrency && _vm.selectedCurrency.code !== 'LAK' ? "<button type=\"button\"" + _vm._ssrAttr("disabled", _vm.refreshingRate) + _vm._ssrAttr("title", 'ອັບເດດອັດຕາແລກປ່ຽນ ' + _vm.selectedCurrency.code) + " class=\"btn-refresh-rate\" data-v-1861f3a8><i" + _vm._ssrClass(null, ['fas', _vm.refreshingRate ? 'fa-spinner fa-spin' : 'fa-sync-alt']) + " data-v-1861f3a8></i></button>" : "<!---->") + "</div> " + (_vm.errors.exchangeRate ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.exchangeRate) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.exchangeRateUpdated ? "<div class=\"exchange-rate-updated\" data-v-1861f3a8><i class=\"fas fa-check-circle\" data-v-1861f3a8></i>\n              ອັດຕາແລກປ່ຽນໄດ້ຮັບການອັບເດດ\n            </div>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" <div class=\"form-row\" data-v-1861f3a8><div class=\"form-group\" data-v-1861f3a8><label for=\"targetAmount\" class=\"required\" data-v-1861f3a8>ຈຳນວນເປົ້າໝາຍ</label> <input id=\"targetAmount\" type=\"number\" step=\"0.01\" min=\"0\" placeholder=\"0.00\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.targetAmount) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.targetAmount
  }) + " data-v-1861f3a8> " + (_vm.errors.targetAmount ? "<div class=\"invalid-feedback\" data-v-1861f3a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.errors.targetAmount) + "\n            ") + "</div>" : "<!---->") + "</div></div> <div class=\"form-group\" data-v-1861f3a8><label for=\"remark\" data-v-1861f3a8>ຫມາຍເຫດ</label> <textarea id=\"remark\" rows=\"3\" placeholder=\"ໃສ່ຫມາຍເຫດ (ຖ້າມີ)...\" class=\"form-control\" data-v-1861f3a8>" + _vm._ssrEscape(_vm._s(_vm.form.remark)) + "</textarea></div> " + (_vm.form.targetAmount && _vm.form.exchangeRate ? "<div class=\"calculation-section\" data-v-1861f3a8><h4 data-v-1861f3a8>ການຄິດໄລ່</h4> <div class=\"calculation-grid\" data-v-1861f3a8><div class=\"calculation-item\" data-v-1861f3a8><label data-v-1861f3a8>ຍອດເປົ້າໝາຍເປັນ LAK:</label> <span class=\"calculation-value\" data-v-1861f3a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatCurrency(_vm.calculateLAKAmount())) + "\n              ") + "</span></div> <div class=\"calculation-item\" data-v-1861f3a8><label data-v-1861f3a8>ຍອດເປົ້າໝາຍເປັນ USD:</label> <span class=\"calculation-value\" data-v-1861f3a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatUSD(_vm.calculateUSDAmount())) + "\n              ") + "</span></div></div></div>" : "<!---->") + " " + (_vm.selectedMinistry || _vm.selectedChartAccount || _vm.selectedCurrency ? "<div class=\"selected-info-section\" data-v-1861f3a8><h4 data-v-1861f3a8>ຂໍ້ມູນທີ່ເລືອກ</h4> <div class=\"info-grid\" data-v-1861f3a8>" + (_vm.selectedMinistry ? "<div class=\"info-item\" data-v-1861f3a8><label data-v-1861f3a8>ກະຊວງ/ຫົວໜ່ວຍງານ:</label> <span class=\"info-value\" data-v-1861f3a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.selectedMinistry.ministryCode) + " (" + _vm._s(_vm.selectedMinistry.ministryName) + ")\n              ") + "</span></div>" : "<!---->") + " " + (_vm.selectedChartAccount ? "<div class=\"info-item\" data-v-1861f3a8><label data-v-1861f3a8>ບັນຊີລາຍຮັບ:</label> <span class=\"info-value\" data-v-1861f3a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.selectedChartAccount.accountNumber) + " - " + _vm._s(_vm.selectedChartAccount.accountName) + "\n              ") + "</span></div>" : "<!---->") + " " + (_vm.selectedCurrency ? "<div class=\"info-item\" data-v-1861f3a8><label data-v-1861f3a8>ສະກຸນເງິນ:</label> <span class=\"info-value\" data-v-1861f3a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.selectedCurrency.code) + " - " + _vm._s(_vm.selectedCurrency.name) + "\n                ") + (_vm.selectedCurrency.rate ? "<span class=\"currency-rate\" data-v-1861f3a8>" + _vm._ssrEscape("\n                  (Rate: " + _vm._s(_vm.selectedCurrency.rate) + ")\n                ") + "</span>" : "<!---->") + "</span></div>" : "<!---->") + "</div></div>" : "<!---->") + " <div class=\"dialog-footer\" data-v-1861f3a8><button type=\"button\" class=\"btn btn-secondary\" data-v-1861f3a8>\n            ຍົກເລີກ\n          </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.formLoading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-1861f3a8>" + (_vm.formLoading ? "<i class=\"fas fa-spinner fa-spin\" data-v-1861f3a8></i>" : "<!---->") + _vm._ssrEscape("\n            " + _vm._s(_vm.target ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n          ") + "</button></div>")], 2)])], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/revenueTargetDialog/index.vue?vue&type=template&id=1861f3a8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/revenueTargetDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var revenueTargetDialogvue_type_script_lang_js_ = ({
  name: 'RevenueTargetDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    target: {
      type: Object,
      default: null
    },
    currencies: {
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
    formLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        name: '',
        year: '',
        targetAmount: '',
        exchangeRate: '',
        currencyId: '',
        parentMinistryId: '',
        chartAccountId: '',
        remark: '',
        isActive: true
      },
      errors: {},
      currentYear: new Date().getFullYear(),
      refreshingRate: false,
      exchangeRateUpdated: false,
      manualRateChange: false
    };
  },
  computed: {
    availableYears() {
      const years = [];
      for (let i = 0; i < 10; i++) {
        years.push(this.currentYear + i);
      }
      return years;
    },
    isFormValid() {
      return this.form.name && this.form.year && this.form.targetAmount && this.form.exchangeRate && this.form.currencyId && this.form.parentMinistryId && this.form.chartAccountId && parseFloat(this.form.targetAmount) >= 0 && parseFloat(this.form.exchangeRate) >= 1;
    },
    selectedMinistry() {
      return this.ministries.find(m => m.id === parseInt(this.form.parentMinistryId));
    },
    selectedChartAccount() {
      return this.chartAccounts.find(a => a.id === parseInt(this.form.chartAccountId));
    },
    selectedCurrency() {
      return this.currencies.find(c => c.id === parseInt(this.form.currencyId));
    },
    isExchangeRateReadonly() {
      // Make exchange rate readonly for LAK currency since it should always be 1
      return this.selectedCurrency && this.selectedCurrency.code === 'LAK';
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeForm();
      }
    },
    target: {
      handler() {
        if (this.show) {
          this.initializeForm();
        }
      },
      deep: true
    },
    'form.exchangeRate'() {
      // Reset the update indicator when user manually changes the rate
      if (!this.refreshingRate) {
        this.exchangeRateUpdated = false;
      }
    }
  },
  methods: {
    initializeForm() {
      if (this.target) {
        // Edit mode
        this.form = {
          name: this.target.name || '',
          year: this.target.year || '',
          targetAmount: this.target.targetAmount || '',
          exchangeRate: this.target.exchangeRate || '',
          currencyId: this.target.currencyId || '',
          parentMinistryId: this.target.parentMinistryId || '',
          chartAccountId: this.target.chartAccountId || '',
          remark: this.target.remark || '',
          isActive: this.target.isActive !== false
        };
        // Set initial exchange rate if currency is already selected
        this.$nextTick(() => {
          if (this.form.currencyId) {
            this.updateExchangeRateFromCurrency();
          }
        });
      } else {
        // Create mode
        this.form = {
          name: '',
          year: this.currentYear,
          targetAmount: '',
          exchangeRate: '',
          currencyId: '',
          parentMinistryId: '',
          chartAccountId: '',
          remark: '',
          isActive: true
        };
      }
      this.errors = {};
      this.exchangeRateUpdated = false;
      this.manualRateChange = false;
    },
    onCurrencyChange() {
      this.updateExchangeRateFromCurrency();
    },
    updateExchangeRateFromCurrency() {
      const currency = this.selectedCurrency;
      console.log(`currency ${JSON.stringify(this.currencies)}`);
      console.log(`Exchange rate ${currency.rate}`);
      if (currency) {
        if (currency.code === 'LAK') {
          // LAK to LAK rate is always 1
          this.form.exchangeRate = '1';
        } else if (currency.rate) {
          // Use the rate from currency object
          this.form.exchangeRate = currency.rate.toString();
        } else if (currency.exchangeRate) {
          // Alternative property name for exchange rate
          this.form.exchangeRate = currency.exchangeRate.toString();
        } else {
          // Default rates for common currencies if no rate is provided
          const defaultRates = {
            'USD': '21000',
            'EUR': '23000',
            'THB': '600',
            'CNY': '2900',
            'VND': '0.85'
          };
          this.form.exchangeRate = defaultRates[currency.code] || '1';
        }

        // Clear validation errors for exchange rate
        if (this.errors.exchangeRate) {
          delete this.errors.exchangeRate;
        }
      }
    },
    async refreshExchangeRate() {
      if (!this.selectedCurrency || this.selectedCurrency.code === 'LAK') return;
      this.refreshingRate = true;
      this.exchangeRateUpdated = false;
      try {
        // Emit event to parent to fetch latest exchange rate
        this.$emit('refresh-exchange-rate', {
          currencyId: this.selectedCurrency.id,
          currencyCode: this.selectedCurrency.code,
          callback: this.handleExchangeRateUpdate
        });
      } catch (error) {
        console.error('Error refreshing exchange rate:', error);
        this.$emit('show-error', 'ບໍ່ສາມາດອັບເດດອັດຕາແລກປ່ຽນໄດ້');
      } finally {
        this.refreshingRate = false;
      }
    },
    handleExchangeRateUpdate(newRate) {
      if (newRate && newRate > 0) {
        this.form.exchangeRate = newRate.toString();
        this.exchangeRateUpdated = true;

        // Hide the update indicator after 3 seconds
        setTimeout(() => {
          this.exchangeRateUpdated = false;
        }, 3000);
      }
      this.refreshingRate = false;
    },
    validateForm() {
      this.errors = {};
      if (!this.form.name || this.form.name.trim().length < 2) {
        this.errors.name = 'ຊື່ເປົ້າໝາຍຕ້ອງມີຢ່າງນ້ອຍ 2 ຕົວອັກສອນ';
      }
      if (!this.form.year) {
        this.errors.year = 'ກະລຸນາເລືອກປີ';
      }
      if (!this.form.targetAmount || parseFloat(this.form.targetAmount) < 0) {
        this.errors.targetAmount = 'ຈຳນວນເປົ້າໝາຍຕ້ອງເປັນຕົວເລກບວກ';
      }
      if (!this.form.exchangeRate || parseFloat(this.form.exchangeRate) < 1) {
        this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງເປັນຕົວເລກທີ່ມາກກວ່າ 1';
      }
      if (!this.form.currencyId) {
        this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ';
      }
      if (!this.form.parentMinistryId) {
        this.errors.parentMinistryId = 'ກະລຸນາເລືອກກະຊວງ/ຫົວໜ່ວຍງານ';
      }
      if (!this.form.chartAccountId) {
        this.errors.chartAccountId = 'ກະລຸນາເລືອກບັນຊີລາຍຮັບ';
      }
      return Object.keys(this.errors).length === 0;
    },
    async handleSubmit() {
      if (!this.validateForm()) {
        this.$emit('validation-error', 'ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດ');
        return;
      }
      const formData = {
        name: this.form.name.trim(),
        year: parseInt(this.form.year),
        targetAmount: parseFloat(this.form.targetAmount),
        exchangeRate: parseFloat(this.form.exchangeRate),
        currencyId: parseInt(this.form.currencyId),
        parentMinistryId: parseInt(this.form.parentMinistryId),
        chartAccountId: parseInt(this.form.chartAccountId),
        remark: this.form.remark.trim(),
        isActive: this.form.isActive
      };
      this.$emit('save', formData);
    },
    handleOverlayClick() {
      this.closeDialog();
    },
    closeDialog() {
      this.$emit('close');
    },
    calculateLAKAmount() {
      const amount = parseFloat(this.form.targetAmount) || 0;
      const rate = parseFloat(this.form.exchangeRate) || 1;
      return amount * rate;
    },
    calculateUSDAmount() {
      const amount = parseFloat(this.form.targetAmount) || 0;
      const rate = parseFloat(this.form.exchangeRate) || 1;

      // If the selected currency is USD, return the original amount
      if (this.selectedCurrency && this.selectedCurrency.code === 'USD') {
        return amount;
      }

      // Convert to USD (assuming USD rate is around 21000 LAK)
      const usdRate = 21000;
      const lakAmount = amount * rate;
      return lakAmount / usdRate;
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('lo-LA', {
        style: 'currency',
        currency: 'LAK',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount || 0);
    },
    formatUSD(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount || 0);
    }
  }
});
// CONCATENATED MODULE: ./components/MA/revenueTargetDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_revenueTargetDialogvue_type_script_lang_js_ = (revenueTargetDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/revenueTargetDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(667)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_revenueTargetDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1861f3a8",
  "3c76fda0"
  
)

/* harmony default export */ var revenueTargetDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-revenue-target-dialog.js.map