exports.ids = [22];
exports.modules = {

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(621);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("760257fe", content, true, context)
};

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f6eb4c3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f6eb4c3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f6eb4c3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f6eb4c3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f6eb4c3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-5f6eb4c3]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.modal-container[data-v-5f6eb4c3]{animation:modalSlideIn-5f6eb4c3 .3s ease-out;background:#fff;border-radius:8px;box-shadow:0 10px 25px rgba(0,0,0,.2);max-height:90vh;max-width:700px;overflow-y:auto;width:100%}@keyframes modalSlideIn-5f6eb4c3{0%{opacity:0;transform:translateY(-30px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-5f6eb4c3]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #e9ecef;border-radius:8px 8px 0 0;display:flex;justify-content:space-between;padding:20px 20px 16px}.modal-title[data-v-5f6eb4c3]{color:#333;font-size:20px;font-weight:600;margin:0}.modal-close-btn[data-v-5f6eb4c3]{background:none;border:none;border-radius:4px;color:#666;cursor:pointer;font-size:18px;padding:4px 8px;transition:background-color .2s}.modal-close-btn[data-v-5f6eb4c3]:hover{background-color:#e9ecef;color:#333}.modal-body[data-v-5f6eb4c3]{padding:24px}.account-form[data-v-5f6eb4c3]{display:flex;flex-direction:column;gap:20px}.form-row[data-v-5f6eb4c3]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr}.form-group[data-v-5f6eb4c3]{display:flex;flex-direction:column;gap:8px}.form-label[data-v-5f6eb4c3]{color:#555;font-size:14px;font-weight:500}.form-label.required[data-v-5f6eb4c3]:after{color:#dc3545;content:\" *\"}.input-with-icon[data-v-5f6eb4c3]{position:relative}.input-icon[data-v-5f6eb4c3]{color:#666;font-size:14px;left:12px;position:absolute;top:50%;transform:translateY(-50%);z-index:1}.form-control[data-v-5f6eb4c3]{background-color:#fff;border:1px solid #ced4da;border-radius:6px;font-size:14px;padding:10px 12px 10px 40px;transition:all .2s}.form-control[data-v-5f6eb4c3]:focus{border-color:#007bff;box-shadow:0 0 0 3px rgba(0,123,255,.1);outline:none}.form-control.is-invalid[data-v-5f6eb4c3]{border-color:#dc3545}.invalid-feedback[data-v-5f6eb4c3]{color:#dc3545;font-size:12px;margin-top:4px}.status-toggle[data-v-5f6eb4c3]{align-items:center;display:flex;gap:12px}.toggle-switch[data-v-5f6eb4c3]{display:inline-block;height:24px;position:relative;width:48px}.toggle-input[data-v-5f6eb4c3]{height:0;opacity:0;width:0}.toggle-slider[data-v-5f6eb4c3]{background-color:#ccc;border-radius:24px;bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;transition:.4s}.toggle-slider[data-v-5f6eb4c3]:before{background-color:#fff;border-radius:50%;bottom:3px;content:\"\";height:18px;left:3px;position:absolute;transition:.4s;width:18px}.toggle-input:checked+.toggle-slider[data-v-5f6eb4c3]{background-color:#28a745}.toggle-input:checked+.toggle-slider[data-v-5f6eb4c3]:before{transform:translateX(24px)}.toggle-label[data-v-5f6eb4c3]{color:#555;font-weight:500}.modal-footer[data-v-5f6eb4c3]{display:flex;gap:12px;justify-content:flex-end;padding:16px 24px 24px}.btn[data-v-5f6eb4c3]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-5f6eb4c3]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-5f6eb4c3]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-5f6eb4c3]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-outline-secondary[data-v-5f6eb4c3]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-5f6eb4c3]:hover:not(:disabled){background-color:#6c757d;color:#fff}@media (max-width:768px){.modal-overlay[data-v-5f6eb4c3]{padding:10px}.modal-container[data-v-5f6eb4c3]{max-height:95vh}.modal-header[data-v-5f6eb4c3]{padding:16px}.modal-body[data-v-5f6eb4c3]{padding:20px 16px}.modal-footer[data-v-5f6eb4c3]{flex-direction:column-reverse;padding:12px 16px 16px}.form-row[data-v-5f6eb4c3]{gap:16px;grid-template-columns:1fr}.btn[data-v-5f6eb4c3]{justify-content:center;width:100%}}@media (max-width:480px){.modal-title[data-v-5f6eb4c3]{font-size:18px}.account-form[data-v-5f6eb4c3]{gap:16px}.form-group[data-v-5f6eb4c3]{gap:6px}.toggle-switch[data-v-5f6eb4c3]{height:20px;width:40px}.toggle-slider[data-v-5f6eb4c3]:before{bottom:2px;height:16px;left:2px;width:16px}.toggle-input:checked+.toggle-slider[data-v-5f6eb4c3]:before{transform:translateX(20px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/bank/bankAccount/index.vue?vue&type=template&id=5f6eb4c3&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.showModal ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<div class=\"modal-container\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-5f6eb4c3><h3 class=\"modal-title\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂບັນຊີທະນາຄານ' : 'ເພີ່ມບັນຊີທະນາຄານໃໝ່') + "\n        ") + "</h3> <button class=\"modal-close-btn\" data-v-5f6eb4c3><i class=\"fas fa-times\" data-v-5f6eb4c3></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<form class=\"account-form\" data-v-5f6eb4c3>", "</form>", [_vm._ssrNode("<div class=\"form-row\" data-v-5f6eb4c3><div class=\"form-group\" data-v-5f6eb4c3><label class=\"form-label required\" data-v-5f6eb4c3>ເລກບັນຊີ *</label> <div class=\"input-with-icon\" data-v-5f6eb4c3><i class=\"fas fa-credit-card input-icon\" data-v-5f6eb4c3></i> <input type=\"text\" placeholder=\"ໃສ່ເລກບັນຊີ\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.accountNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.accountNumber
  }) + " data-v-5f6eb4c3></div> " + (_vm.errors.accountNumber ? "<div class=\"invalid-feedback\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.accountNumber) + "\n              ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-5f6eb4c3><label class=\"form-label required\" data-v-5f6eb4c3>ຊື່ບັນຊີ *</label> <div class=\"input-with-icon\" data-v-5f6eb4c3><i class=\"fas fa-user input-icon\" data-v-5f6eb4c3></i> <input type=\"text\" placeholder=\"ໃສ່ຊື່ບັນຊີ\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.accountName) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.accountName
  }) + " data-v-5f6eb4c3></div> " + (_vm.errors.accountName ? "<div class=\"invalid-feedback\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.accountName) + "\n              ") + "</div>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"form-row\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-5f6eb4c3>ຊື່ທະນາຄານ *</label> "), _vm._ssrNode("<div class=\"input-with-icon\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<i class=\"fas fa-university input-icon\" data-v-5f6eb4c3></i> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bankName,
      expression: "form.bankName"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.bankName
    },
    attrs: {
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
        _vm.$set(_vm.form, "bankName", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກທະນາຄານ")]), _vm._v(" "), _vm._l(_vm.bankList, function (bank) {
    return _c('option', {
      key: bank.code,
      domProps: {
        "value": bank.name
      }
    }, [_vm._v("\n                    " + _vm._s(bank.name) + "\n                  ")]);
  })], 2)], 2), _vm._ssrNode(" " + (_vm.errors.bankName ? "<div class=\"invalid-feedback\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.bankName) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-5f6eb4c3><label class=\"form-label\" data-v-5f6eb4c3>ສາຂາ</label> <div class=\"input-with-icon\" data-v-5f6eb4c3><i class=\"fas fa-map-marker-alt input-icon\" data-v-5f6eb4c3></i> <input type=\"text\" placeholder=\"ໃສ່ຊື່ສາຂາ (ທາງເລືອກ)\"" + _vm._ssrAttr("value", _vm.form.bankBranch) + " class=\"form-control\" data-v-5f6eb4c3></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-5f6eb4c3>ປະເພດບັນຊີ *</label> "), _vm._ssrNode("<div class=\"input-with-icon\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<i class=\"fas fa-list input-icon\" data-v-5f6eb4c3></i> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.accountType,
      expression: "form.accountType"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.accountType
    },
    attrs: {
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
        _vm.$set(_vm.form, "accountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກປະເພດບັນຊີ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Saving"
    }
  }, [_vm._v("Saving Account")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Current"
    }
  }, [_vm._v("Current Account")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Fixed Deposit"
    }
  }, [_vm._v("Fixed Deposit")])])], 2), _vm._ssrNode(" " + (_vm.errors.accountType ? "<div class=\"invalid-feedback\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.accountType) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-5f6eb4c3>ສະກຸນເງິນ *</label> "), _vm._ssrNode("<div class=\"input-with-icon\" data-v-5f6eb4c3>", "</div>", [_vm._ssrNode("<i class=\"fas fa-dollar-sign input-icon\" data-v-5f6eb4c3></i> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.currency,
      expression: "form.currency"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.currency
    },
    attrs: {
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
        _vm.$set(_vm.form, "currency", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະກຸນເງິນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LAK"
    }
  }, [_vm._v("LAK - ກີບ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "USD"
    }
  }, [_vm._v("USD - ໂດລາ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "THB"
    }
  }, [_vm._v("THB - ບາດ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CNY"
    }
  }, [_vm._v("CNY - ຢວນ")])])], 2), _vm._ssrNode(" " + (_vm.errors.currency ? "<div class=\"invalid-feedback\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.currency) + "\n              ") + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-5f6eb4c3><label class=\"form-label\" data-v-5f6eb4c3>ສະຖານະ</label> <div class=\"status-toggle\" data-v-5f6eb4c3><label class=\"toggle-switch\" data-v-5f6eb4c3><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.form.isActive) ? _vm._i(_vm.form.isActive, null) > -1 : _vm.form.isActive) + " class=\"toggle-input\" data-v-5f6eb4c3> <span class=\"toggle-slider\" data-v-5f6eb4c3></span></label> <span class=\"toggle-label\" data-v-5f6eb4c3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.form.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ') + "\n              ") + "</span></div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-5f6eb4c3><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-outline-secondary\" data-v-5f6eb4c3><i class=\"fas fa-times\" data-v-5f6eb4c3></i>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-5f6eb4c3>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-5f6eb4c3></i>" : "<i class=\"fas fa-save\" data-v-5f6eb4c3></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div>")], 2)]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/bank/bankAccount/index.vue?vue&type=template&id=5f6eb4c3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/bank/bankAccount/index.vue?vue&type=script&lang=js&
/* harmony default export */ var bankAccountvue_type_script_lang_js_ = ({
  name: 'BankAccountDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    account: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showModal: false,
      loading: false,
      form: {
        accountNumber: '',
        accountName: '',
        bankName: '',
        bankBranch: '',
        accountType: '',
        currency: 'LAK',
        isActive: true
      },
      errors: {},
      // Bank list for dropdown
      bankList: [{
        code: 'BCEL',
        name: 'ທະນາຄານການຄ້າຕ່າງປະເທດລາວ (BCEL)'
      }, {
        code: 'LDB',
        name: 'ທະນາຄານພັດທະນາລາວ (LDB)'
      }, {
        code: 'APB',
        name: 'ທະນາຄານກະເສດຊາວກະສິກອນ (APB)'
      }, {
        code: 'JDB',
        name: 'ທະນາຄານຮ່ວມພັດທະນາລາວ-ຫວຽດ (JDB)'
      }, {
        code: 'LVB',
        name: 'ທະນາຄານລາວ-ຫວຽດ (LVB)'
      }, {
        code: 'IBL',
        name: 'ທະນາຄານອຸດສາຫະກຳ (IBL)'
      }, {
        code: 'STB',
        name: 'ທະນາຄານເສດຖະກິດລາວ (STB)'
      }, {
        code: 'MPB',
        name: 'ທະນາຄານມະຫາຊົນ (MPB)'
      }, {
        code: 'LXB',
        name: 'ທະນາຄານລາວ-ຈີນ (LXB)'
      }, {
        code: 'BMB',
        name: 'ທະນາຄານເມືອງເຮືອງ (BMB)'
      }, {
        code: 'KKB',
        name: 'ທະນາຄານຂົງໄຂ (KKB)'
      }, {
        code: 'SACOM',
        name: 'ທະນາຄານສະຫະກອນ (SACOM)'
      }, {
        code: 'OTHER',
        name: 'ອື່ນໆ'
      }]
    };
  },
  computed: {
    isEdit() {
      return !!this.account && !!this.account.id;
    },
    isFormValid() {
      return this.form.accountNumber && this.form.accountName && this.form.bankName && this.form.accountType && this.form.currency && Object.keys(this.errors).length === 0;
    }
  },
  watch: {
    show(newVal) {
      this.showModal = newVal;
      if (newVal) {
        this.initializeForm();
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
      } else {
        // Restore body scroll when modal is closed
        document.body.style.overflow = '';
      }
    },
    // Watch form fields for validation
    'form.accountNumber'() {
      this.validateAccountNumber();
    },
    'form.accountName'() {
      this.validateAccountName();
    },
    'form.bankName'() {
      this.validateBankName();
    },
    'form.accountType'() {
      this.validateAccountType();
    },
    'form.currency'() {
      this.validateCurrency();
    }
  },
  beforeDestroy() {
    // Ensure body scroll is restored when component is destroyed
    document.body.style.overflow = '';
  },
  methods: {
    initializeForm() {
      this.errors = {};
      if (this.isEdit) {
        // Pre-populate form with existing account data
        this.form = {
          accountNumber: this.account.accountNumber || '',
          accountName: this.account.accountName || '',
          bankName: this.account.bankName || '',
          bankBranch: this.account.bankBranch || '',
          accountType: this.account.accountType || '',
          currency: this.account.currency || 'LAK',
          isActive: this.account.isActive !== undefined ? this.account.isActive : true
        };
      } else {
        // Reset form for new account
        this.form = {
          accountNumber: '',
          accountName: '',
          bankName: '',
          bankBranch: '',
          accountType: '',
          currency: 'LAK',
          isActive: true
        };
      }
    },
    // Validation methods
    validateAccountNumber() {
      if (!this.form.accountNumber) {
        this.$set(this.errors, 'accountNumber', 'ກະລຸນາໃສ່ເລກບັນຊີ');
      } else if (this.form.accountNumber.length < 5) {
        this.$set(this.errors, 'accountNumber', 'ເລກບັນຊີຕ້ອງມີຢ່າງນ້ອຍ 5 ຫຼັກ');
      } else if (!/^[0-9\-]+$/.test(this.form.accountNumber)) {
        this.$set(this.errors, 'accountNumber', 'ເລກບັນຊີຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ');
      } else {
        this.$delete(this.errors, 'accountNumber');
      }
    },
    validateAccountName() {
      if (!this.form.accountName) {
        this.$set(this.errors, 'accountName', 'ກະລຸນາໃສ່ຊື່ບັນຊີ');
      } else if (this.form.accountName.length < 2) {
        this.$set(this.errors, 'accountName', 'ຊື່ບັນຊີຕ້ອງມີຢ່າງນ້ອຍ 2 ຕົວອັກສອນ');
      } else {
        this.$delete(this.errors, 'accountName');
      }
    },
    validateBankName() {
      if (!this.form.bankName) {
        this.$set(this.errors, 'bankName', 'ກະລຸນາເລືອກທະນາຄານ');
      } else {
        this.$delete(this.errors, 'bankName');
      }
    },
    validateAccountType() {
      if (!this.form.accountType) {
        this.$set(this.errors, 'accountType', 'ກະລຸນາເລືອກປະເພດບັນຊີ');
      } else {
        this.$delete(this.errors, 'accountType');
      }
    },
    validateCurrency() {
      if (!this.form.currency) {
        this.$set(this.errors, 'currency', 'ກະລຸນາເລືອກສະກຸນເງິນ');
      } else {
        this.$delete(this.errors, 'currency');
      }
    },
    validateForm() {
      this.validateAccountNumber();
      this.validateAccountName();
      this.validateBankName();
      this.validateAccountType();
      this.validateCurrency();
      return Object.keys(this.errors).length === 0;
    },
    async saveAccount() {
      if (!this.validateForm()) {
        this.showToast('ກະລຸນາກວດສອບຂໍ້ມູນທີ່ໃສ່ອີກຄັ້ງ', 'error');
        return;
      }
      try {
        this.loading = true;
        const accountData = {
          accountNumber: this.form.accountNumber.trim(),
          accountName: this.form.accountName.trim(),
          bankName: this.form.bankName,
          bankBranch: this.form.bankBranch ? this.form.bankBranch.trim() : null,
          accountType: this.form.accountType,
          currency: this.form.currency,
          isActive: this.form.isActive
        };
        let response;
        if (this.isEdit) {
          // Update existing account
          response = await this.$axios.put(`/api/bank_account/update/${this.account.id}`, accountData);
        } else {
          // Create new account
          response = await this.$axios.post('/api/bank_account/create', accountData);
        }

        // Check if response indicates success
        if (response.data && response.data.success !== false) {
          // Success case
          const successMessage = this.isEdit ? 'ອັບເດດຂໍ້ມູນສຳເລັດແລ້ວ' : 'ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ';
          this.showToast(successMessage, 'success');

          // Emit saved event and close modal
          this.$emit('saved', response.data);
          this.closeModal();
        } else {
          // Handle API error response (when success: false)
          const errorMessage = response.data.message || 'ມີຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ';
          this.showToast(errorMessage, 'error');
        }
      } catch (error) {
        console.error('Error saving bank account:', error);

        // Handle different types of errors
        let errorMessage = 'ມີຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ';
        if (error.response) {
          // Server responded with error status
          if (error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
          } else if (error.response.status === 404) {
            errorMessage = 'ບໍ່ພົບຂໍ້ມູນທີ່ຕ້ອງການ';
          } else if (error.response.status === 403) {
            errorMessage = 'ບໍ່ມີສິດໃນການດຳເນີນການນີ້';
          } else if (error.response.status === 500) {
            errorMessage = 'ມີຂໍ້ຜິດພາດຈາກເຊີເວີ ກະລຸນາລອງໃໝ່ໃນພາຍຫຼັງ';
          } else if (error.response.status === 409) {
            errorMessage = 'ເລກບັນຊີນີ້ມີໃນລະບົບແລ້ວ';
          }
        } else if (error.request) {
          // Network error
          errorMessage = 'ບໍ່ສາມາດເຊື່ອມຕໍ່ກັບເຊີເວີໄດ້ ກະລຸນາກວດສອບການເຊື່ອມຕໍ່ອິນເຕີເນັດ';
        }
        this.showToast(errorMessage, 'error');
      } finally {
        this.loading = false;
      }
    },
    closeModal() {
      this.showModal = false;
      this.$emit('close');

      // Reset form after modal closes
      setTimeout(() => {
        this.initializeForm();
      }, 300);
    },
    showToast(message, type = 'info') {
      if (this.$swal) {
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: type === 'error' ? 5000 : 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer);
            toast.addEventListener('mouseleave', this.$swal.resumeTimer);
          }
        });
        const iconMap = {
          success: 'success',
          error: 'error',
          warning: 'warning',
          info: 'info'
        };
        Toast.fire({
          icon: iconMap[type] || 'info',
          title: message
        });
      } else {
        console.log(`${type}: ${message}`);
        alert(`${type.toUpperCase()}: ${message}`);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/bank/bankAccount/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var bank_bankAccountvue_type_script_lang_js_ = (bankAccountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/bank/bankAccount/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(620)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bank_bankAccountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f6eb4c3",
  "004819f4"
  
)

/* harmony default export */ var bankAccount = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=bank-bank-account.js.map