exports.ids = [27];
exports.modules = {

/***/ 1070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/bank/bankAccount/index.vue?vue&type=template&id=41f75863&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.showModal ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-41f75863>", "</div>", [_vm._ssrNode("<div class=\"modal-container\" data-v-41f75863>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-41f75863><h3 class=\"modal-title\" data-v-41f75863>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ແກ້ໄຂບັນຊີທະນາຄານ' : 'ເພີ່ມບັນຊີທະນາຄານໃໝ່') + "\n        ") + "</h3> <button class=\"modal-close-btn\" data-v-41f75863><i class=\"fas fa-times\" data-v-41f75863></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-41f75863>", "</div>", [_vm._ssrNode("<form class=\"account-form\" data-v-41f75863>", "</form>", [_vm._ssrNode("<div class=\"form-row\" data-v-41f75863><div class=\"form-group\" data-v-41f75863><label class=\"form-label required\" data-v-41f75863>ເລກບັນຊີ *</label> <div class=\"input-with-icon\" data-v-41f75863><i class=\"fas fa-credit-card input-icon\" data-v-41f75863></i> <input type=\"text\" placeholder=\"ໃສ່ເລກບັນຊີ\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.accountNumber) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.accountNumber
  }) + " data-v-41f75863></div> " + (_vm.errors.accountNumber ? "<div class=\"invalid-feedback\" data-v-41f75863>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.accountNumber) + "\n              ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-41f75863><label class=\"form-label required\" data-v-41f75863>ຊື່ບັນຊີ *</label> <div class=\"input-with-icon\" data-v-41f75863><i class=\"fas fa-user input-icon\" data-v-41f75863></i> <input type=\"text\" placeholder=\"ໃສ່ຊື່ບັນຊີ\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.accountName) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.accountName
  }) + " data-v-41f75863></div> " + (_vm.errors.accountName ? "<div class=\"invalid-feedback\" data-v-41f75863>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.accountName) + "\n              ") + "</div>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"form-row\" data-v-41f75863>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-41f75863>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-41f75863>ຊື່ທະນາຄານ *</label> "), _vm._ssrNode("<div class=\"input-with-icon\" data-v-41f75863>", "</div>", [_vm._ssrNode("<i class=\"fas fa-university input-icon\" data-v-41f75863></i> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bankId,
      expression: "form.bankId"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.errors.bankId
    },
    attrs: {
      "disabled": _vm.bankLoading,
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
        _vm.$set(_vm.form, "bankId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.bankLoading ? 'ກຳລັງໂຫຼດ...' : 'ເລືອກທະນາຄານ') + "\n                  ")]), _vm._v(" "), _vm._l(_vm.bankList, function (bank) {
    return _c('option', {
      key: bank.id,
      domProps: {
        "value": bank.id
      }
    }, [_vm._v("\n                    " + _vm._s(bank.bank_name) + " (" + _vm._s(bank.code) + ")\n                  ")]);
  })], 2)], 2), _vm._ssrNode(" " + (_vm.errors.bankId ? "<div class=\"invalid-feedback\" data-v-41f75863>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.bankId) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-41f75863><label class=\"form-label\" data-v-41f75863>ສາຂາ</label> <div class=\"input-with-icon\" data-v-41f75863><i class=\"fas fa-map-marker-alt input-icon\" data-v-41f75863></i> <input type=\"text\" placeholder=\"ໃສ່ຊື່ສາຂາ (ທາງເລືອກ)\"" + _vm._ssrAttr("value", _vm.form.bankBranch) + " class=\"form-control\" data-v-41f75863></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-row\" data-v-41f75863>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-41f75863>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-41f75863>ປະເພດບັນຊີ *</label> "), _vm._ssrNode("<div class=\"input-with-icon\" data-v-41f75863>", "</div>", [_vm._ssrNode("<i class=\"fas fa-list input-icon\" data-v-41f75863></i> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.accountType,
      expression: "form.accountType"
    }],
    staticClass: "form-control",
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
  }, [_vm._v("Fixed Deposit")])])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-41f75863>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-41f75863>ສະກຸນເງິນ *</label> "), _vm._ssrNode("<div class=\"input-with-icon\" data-v-41f75863>", "</div>", [_vm._ssrNode("<i class=\"fas fa-dollar-sign input-icon\" data-v-41f75863></i> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.currency,
      expression: "form.currency"
    }],
    staticClass: "form-control",
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
  }, [_vm._v("CNY - ຢວນ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EUR"
    }
  }, [_vm._v("EUR - ຢູໂລ")])])], 2)], 2)], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-41f75863><label class=\"form-label\" data-v-41f75863>ສະຖານະ</label> <div class=\"status-toggle\" data-v-41f75863><label class=\"toggle-switch\" data-v-41f75863><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.form.isActive) ? _vm._i(_vm.form.isActive, null) > -1 : _vm.form.isActive) + " class=\"toggle-input\" data-v-41f75863> <span class=\"toggle-slider\" data-v-41f75863></span></label> <span class=\"toggle-label\" data-v-41f75863>" + _vm._ssrEscape(_vm._s(_vm.form.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ')) + "</span></div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-41f75863><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-outline-secondary\" data-v-41f75863>\n          ຍົກເລີກ\n        </button> <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.loading || !_vm.isFormValid) + " class=\"btn btn-primary\" data-v-41f75863>" + (_vm.loading ? "<i class=\"fas fa-spinner fa-spin\" data-v-41f75863></i>" : "<i class=\"fas fa-save\" data-v-41f75863></i>") + _vm._ssrEscape("\n          " + _vm._s(_vm.isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n        ") + "</button></div>")], 2)]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/bank/bankAccount/index.vue?vue&type=template&id=41f75863&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/bank/bankAccount/index.vue?vue&type=script&lang=js
/* harmony default export */ var bankAccountvue_type_script_lang_js = ({
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
      bankLoading: false,
      form: {
        accountNumber: '',
        accountName: '',
        bankId: '',
        bankBranch: '',
        accountType: '',
        currency: 'LAK',
        isActive: true
      },
      errors: {},
      bankList: [] // Now dynamically fetched
    };
  },
  computed: {
    isEdit() {
      return !!this.account && !!this.account.id;
    },
    isFormValid() {
      return this.form.accountNumber && this.form.accountName && this.form.bankId && this.form.accountType && Object.keys(this.errors).length === 0;
    }
  },
  watch: {
    show(newVal) {
      this.showModal = newVal;
      if (newVal) {
        this.fetchBanks();
        this.initializeForm();
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    'form.accountNumber'() {
      this.validateAccountNumber();
    },
    'form.accountName'() {
      this.validateAccountName();
    },
    'form.bankId'() {
      this.validateBankId();
    }
  },
  methods: {
    async fetchBanks() {
      this.bankLoading = true;
      try {
        const res = await this.$axios.get('/api/bank/find');
        this.bankList = res.data;
      } catch (err) {
        this.showToast('ບໍ່ສາມາດໂຫຼດລາຍຊື່ທະນາຄານໄດ້', 'error');
      } finally {
        this.bankLoading = false;
      }
    },
    initializeForm() {
      this.errors = {};
      if (this.isEdit) {
        this.form = {
          accountNumber: this.account.accountNumber || '',
          accountName: this.account.accountName || '',
          bankId: this.account.bankId || '',
          // Note: using bankId from DB
          bankBranch: this.account.bankBranch || '',
          accountType: this.account.accountType || '',
          currency: this.account.currency || 'LAK',
          isActive: this.account.isActive !== undefined ? this.account.isActive : true
        };
      } else {
        this.form = {
          accountNumber: '',
          accountName: '',
          bankId: '',
          bankBranch: '',
          accountType: '',
          currency: 'LAK',
          isActive: true
        };
      }
    },
    validateAccountNumber() {
      if (!this.form.accountNumber) this.$set(this.errors, 'accountNumber', 'ກະລຸນາໃສ່ເລກບັນຊີ');else if (!/^[0-9\-]+$/.test(this.form.accountNumber)) this.$set(this.errors, 'accountNumber', 'ເລກບັນຊີຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ');else this.$delete(this.errors, 'accountNumber');
    },
    validateAccountName() {
      if (!this.form.accountName) this.$set(this.errors, 'accountName', 'ກະລຸນາໃສ່ຊື່ບັນຊີ');else this.$delete(this.errors, 'accountName');
    },
    validateBankId() {
      if (!this.form.bankId) this.$set(this.errors, 'bankId', 'ກະລຸນາເລືອກທະນາຄານ');else this.$delete(this.errors, 'bankId');
    },
    async saveAccount() {
      if (!this.form.bankId) {
        this.showToast('ກະລຸນາເລືອກທະນາຄານ', 'error');
        return;
      }
      this.loading = true;
      try {
        const payload = {
          accountNumber: this.form.accountNumber.trim(),
          accountName: this.form.accountName.trim(),
          bankId: this.form.bankId,
          // Mapping to backend key
          bankBranch: this.form.bankBranch,
          accountType: this.form.accountType,
          currency: this.form.currency,
          isActive: this.form.isActive
        };

        // Inside saveAccount() method in BankAccountDialog.vue
        const method = this.isEdit ? 'put' : 'post';
        const url = this.isEdit ? `/api/bank_account/update/${this.account.id}` : '/api/bank_account/create';
        const res = await this.$axios[method](url, payload);
        if (res.data && res.data.success !== false) {
          this.showToast('ບັນທຶກສຳເລັດ', 'success');
          this.$emit('saved');
          this.closeModal();
        }
      } catch (error) {
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ', 'error');
      } finally {
        this.loading = false;
      }
    },
    closeModal() {
      this.showModal = false;
      this.$emit('close');
      setTimeout(() => this.initializeForm(), 300);
    },
    showToast(message, type = 'info') {
      if (this.$swal) {
        this.$swal.fire({
          toast: true,
          position: 'top-end',
          icon: type,
          title: message,
          showConfirmButton: false,
          timer: 3000
        });
      } else {
        alert(message);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/bank/bankAccount/index.vue?vue&type=script&lang=js
 /* harmony default export */ var bank_bankAccountvue_type_script_lang_js = (bankAccountvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/bank/bankAccount/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(782)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bank_bankAccountvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "41f75863",
  "004819f4"
  
)

/* harmony default export */ var bankAccount = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(783);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("714b955e", content, true, context)
};

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f75863_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(670);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f75863_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f75863_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f75863_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41f75863_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-overlay[data-v-41f75863]{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.modal-container[data-v-41f75863]{animation:modalSlideIn-41f75863 .3s ease-out;background:#fff;border-radius:8px;box-shadow:0 10px 25px rgba(0,0,0,.2);max-height:90vh;max-width:700px;overflow-y:auto;width:100%}@keyframes modalSlideIn-41f75863{0%{opacity:0;transform:translateY(-30px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}.modal-header[data-v-41f75863]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #e9ecef;border-radius:8px 8px 0 0;display:flex;justify-content:space-between;padding:20px 20px 16px}.modal-title[data-v-41f75863]{color:#333;font-size:20px;font-weight:600;margin:0}.modal-close-btn[data-v-41f75863]{background:none;border:none;border-radius:4px;color:#666;cursor:pointer;font-size:18px;padding:4px 8px;transition:background-color .2s}.modal-close-btn[data-v-41f75863]:hover{background-color:#e9ecef;color:#333}.modal-body[data-v-41f75863]{padding:24px}.account-form[data-v-41f75863]{display:flex;flex-direction:column;gap:20px}.form-row[data-v-41f75863]{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;gap:20px}.form-group[data-v-41f75863]{display:flex;flex-direction:column;gap:8px}.form-label[data-v-41f75863]{color:#555;font-size:14px;font-weight:500}.form-label.required[data-v-41f75863]:after{color:#dc3545;content:\" *\"}.input-with-icon[data-v-41f75863]{position:relative}.input-icon[data-v-41f75863]{color:#666;font-size:14px;left:12px;position:absolute;top:50%;transform:translateY(-50%);z-index:1}.form-control[data-v-41f75863]{background-color:#fff;border:1px solid #ced4da;border-radius:6px;font-size:14px;padding:10px 12px 10px 40px;transition:all .2s}.form-control[data-v-41f75863]:focus{border-color:#007bff;box-shadow:0 0 0 3px rgba(0,123,255,.1);outline:none}.form-control.is-invalid[data-v-41f75863]{border-color:#dc3545}.invalid-feedback[data-v-41f75863]{color:#dc3545;font-size:12px;margin-top:4px}.status-toggle[data-v-41f75863]{align-items:center;display:flex;gap:12px}.toggle-switch[data-v-41f75863]{display:inline-block;height:24px;position:relative;width:48px}.toggle-input[data-v-41f75863]{height:0;opacity:0;width:0}.toggle-slider[data-v-41f75863]{background-color:#ccc;border-radius:24px;bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;transition:.4s}.toggle-slider[data-v-41f75863]:before{background-color:#fff;border-radius:50%;bottom:3px;content:\"\";height:18px;left:3px;position:absolute;transition:.4s;width:18px}.toggle-input:checked+.toggle-slider[data-v-41f75863]{background-color:#28a745}.toggle-input:checked+.toggle-slider[data-v-41f75863]:before{transform:translateX(24px)}.toggle-label[data-v-41f75863]{color:#555;font-weight:500}.modal-footer[data-v-41f75863]{display:flex;gap:12px;justify-content:flex-end;padding:16px 24px 24px}.btn[data-v-41f75863]{align-items:center;border:1px solid transparent;border-radius:6px;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:8px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.btn[data-v-41f75863]:disabled{cursor:not-allowed;opacity:.5}.btn-primary[data-v-41f75863]{background-color:#007bff;border-color:#007bff;color:#fff}.btn-primary[data-v-41f75863]:hover:not(:disabled){background-color:#0056b3;border-color:#0056b3}.btn-outline-secondary[data-v-41f75863]{background-color:transparent;border-color:#6c757d;color:#6c757d}.btn-outline-secondary[data-v-41f75863]:hover:not(:disabled){background-color:#6c757d;color:#fff}@media (max-width:768px){.modal-overlay[data-v-41f75863]{padding:10px}.modal-container[data-v-41f75863]{max-height:95vh}.modal-header[data-v-41f75863]{padding:16px}.modal-body[data-v-41f75863]{padding:20px 16px}.modal-footer[data-v-41f75863]{flex-direction:column-reverse;padding:12px 16px 16px}.form-row[data-v-41f75863]{gap:16px;grid-template-columns:1fr}.btn[data-v-41f75863]{justify-content:center;width:100%}}@media (max-width:480px){.modal-title[data-v-41f75863]{font-size:18px}.account-form[data-v-41f75863]{gap:16px}.form-group[data-v-41f75863]{gap:6px}.toggle-switch[data-v-41f75863]{height:20px;width:40px}.toggle-slider[data-v-41f75863]:before{bottom:2px;height:16px;left:2px;width:16px}.toggle-input:checked+.toggle-slider[data-v-41f75863]:before{transform:translateX(20px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=bank-bank-account.js.map