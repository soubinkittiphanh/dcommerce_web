exports.ids = [51];
exports.modules = {

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(461);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b5d4dc6", content, true)

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(460);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71);
// Styles

 // Components


 // Mixins


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].extend({
  name: 'v-checkbox',
  props: {
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    }
  },
  data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },
  computed: {
    classes() {
      return {
        ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls': true,
        'v-input--checkbox': true,
        'v-input--indeterminate': this.inputIndeterminate
      };
    },
    computedIcon() {
      if (this.inputIndeterminate) {
        return this.indeterminateIcon;
      } else if (this.isActive) {
        return this.onIcon;
      } else {
        return this.offIcon;
      }
    },
    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.isDisabled && !this.inputIndeterminate) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    }
  },
  watch: {
    indeterminate(val) {
      // https://github.com/vuetifyjs/vuetify/issues/8270
      this.$nextTick(() => this.inputIndeterminate = val);
    },
    inputIndeterminate(val) {
      this.$emit('update:indeterminate', val);
    },
    isActive() {
      if (!this.indeterminate) return;
      this.inputIndeterminate = false;
    }
  },
  methods: {
    genCheckbox() {
      const {
        title,
        ...checkboxAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.setTextColor(this.validationState, {
        props: {
          dense: this.dense,
          dark: this.dark,
          light: this.light
        }
      }), this.computedIcon), this.genInput('checkbox', {
        ...checkboxAttrs,
        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },
    genDefaultSlot() {
      return [this.genCheckbox(), this.genLabel()];
    }
  }
}));

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(699);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("61f94cf9", content, true, context)
};

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyForm_vue_vue_type_style_index_0_id_73a7d496_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(604);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyForm_vue_vue_type_style_index_0_id_73a7d496_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyForm_vue_vue_type_style_index_0_id_73a7d496_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyForm_vue_vue_type_style_index_0_id_73a7d496_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyForm_vue_vue_type_style_index_0_id_73a7d496_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".currency-form-card[data-v-73a7d496]{background-color:#fff!important;box-shadow:0 4px 12px rgba(0,0,0,.1)!important}.form-header[data-v-73a7d496]{background-color:#fff!important;border-bottom:1px solid rgba(0,0,0,.08)}.currency-chip[data-v-73a7d496]{font-weight:500;letter-spacing:.5px}.form-content[data-v-73a7d496]{background-color:#fff!important;min-height:400px;padding:20px 24px!important}.form-row[data-v-73a7d496]{margin-bottom:12px}.currency-input[data-v-73a7d496]{margin-bottom:8px}.currency-input[data-v-73a7d496] .v-field{background-color:#fff!important;border:1.5px solid #e0e0e0;border-radius:8px}.currency-input[data-v-73a7d496] .v-field--focused{background-color:#fff!important;border:2px solid #1976d2}.currency-input[data-v-73a7d496] .v-field__input{background-color:transparent!important}.currency-input[data-v-73a7d496] .v-field--disabled{background-color:#f5f5f5!important;opacity:.7}.local-currency-info[data-v-73a7d496]{background-color:rgba(33,150,243,.02);border-bottom:1px solid rgba(0,0,0,.08);border-radius:4px;padding:12px 8px}.local-currency-chip[data-v-73a7d496]{font-size:.75rem;font-weight:500}.checkbox-row[data-v-73a7d496]{background-color:rgba(248,249,250,.5);border-bottom:1px solid rgba(0,0,0,.08);border-radius:4px;margin-left:0;margin-right:0;padding:12px}.custom-checkbox[data-v-73a7d496]{margin:0}.checkbox-label[data-v-73a7d496]{color:#424242;font-size:.875rem;font-weight:500}.local-currency-checkbox[data-v-73a7d496] .v-selection-control--disabled{opacity:.6}.rate-direction-section[data-v-73a7d496]{background-color:rgba(33,150,243,.05)!important;border:1px solid rgba(33,150,243,.2);border-radius:8px;margin:20px 0;padding:16px}.rate-direction-label[data-v-73a7d496]{color:#1976d2;display:block;font-size:.875rem;font-weight:600;margin-bottom:12px}.rate-radio-group[data-v-73a7d496]{margin-bottom:0!important}.rate-radio[data-v-73a7d496]{margin-bottom:8px;margin-right:20px}.rate-radio[data-v-73a7d496] .v-label{color:#555;font-size:.8rem;font-weight:500}.rate-input-section[data-v-73a7d496]{margin:20px 0}.rate-input[data-v-73a7d496]{margin-bottom:0}.rate-input[data-v-73a7d496] .v-field{background-color:#fff!important;border:1.5px solid #e0e0e0;border-radius:8px}.rate-input[data-v-73a7d496] .v-field--focused{background-color:#fff!important;border:2px solid #4caf50}.rate-input[data-v-73a7d496] .v-field__input{background-color:transparent!important}.rate-input[data-v-73a7d496] .v-messages{background-color:rgba(76,175,80,.08)!important;border:1px solid rgba(76,175,80,.2);border-radius:0 0 8px 8px;border-top:none;color:#2e7d32;font-size:.75rem;font-weight:500;margin-top:-1px;padding:6px 12px}.form-actions[data-v-73a7d496]{background-color:rgba(248,249,250,.9)!important;border-top:1px solid rgba(0,0,0,.08);padding:16px 24px 20px!important}.required-text[data-v-73a7d496]{color:#666;font-style:italic}.cancel-btn[data-v-73a7d496]{color:#666;font-weight:500;text-transform:none}.cancel-btn[data-v-73a7d496]:hover{background-color:hsla(0,0%,62%,.1)!important}.save-btn[data-v-73a7d496]{box-shadow:0 2px 4px rgba(25,118,210,.3);font-weight:600;min-width:80px;text-transform:none}.save-btn[data-v-73a7d496]:hover{box-shadow:0 4px 8px rgba(25,118,210,.4);transform:translateY(-1px);transition:all .2s ease}[data-v-73a7d496] .custom-tooltip .v-tooltip__content{background-color:#424242!important;font-size:.75rem!important;max-width:200px}@media (max-width:600px){.form-content[data-v-73a7d496]{padding:16px!important}.rate-radio[data-v-73a7d496]{margin-bottom:8px;margin-right:12px}.rate-radio[data-v-73a7d496] .v-label{font-size:.75rem}.form-actions[data-v-73a7d496]{padding:12px 16px 16px!important}.checkbox-row[data-v-73a7d496]{padding-left:8px;padding-right:8px}}[data-v-73a7d496] .v-dialog .v-overlay__content{box-shadow:none}[data-v-73a7d496] .v-input--error .v-field{background-color:rgba(244,67,54,.05)!important;border-color:#f44336!important}[data-v-73a7d496] .v-messages--active{color:#f44336;font-weight:500}.currency-input[data-v-73a7d496]:focus-within,.rate-input[data-v-73a7d496]:focus-within{transform:translateY(-1px);transition:transform .2s ease}*[data-v-73a7d496]{background-color:inherit}[data-v-73a7d496] .v-card{background-color:#fff!important}[data-v-73a7d496] .v-card-title{background-color:#fff!important}[data-v-73a7d496] .v-card-text{background-color:#fff!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(484);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadio.js
var VRadio = __webpack_require__(437);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadioGroup.js
var VRadioGroup = __webpack_require__(436);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CurrencyForm.vue?vue&type=template&id=73a7d496&scoped=true

















var CurrencyFormvue_type_template_id_73a7d496_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    staticClass: "currency-form-card"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._v(" "), _c(components_VCard["d" /* VCardTitle */], {
    staticClass: "pb-2"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "color": "primary",
      "label": "",
      "small": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-currency-usd")]), _vm._v("\n      " + _vm._s(_vm.isCreate ? 'Add Currency' : 'Edit Currency') + "\n    ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pt-2"
  }, [_c(VForm["a" /* default */], {
    ref: "currencyForm"
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": !_vm.isCreate,
      "label": "* Code",
      "outlined": "",
      "dense": "",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.code,
      callback: function ($$v) {
        _vm.$set(_vm.form, "code", $$v);
      },
      expression: "form.code"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* Name",
      "outlined": "",
      "dense": "",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.name,
      callback: function ($$v) {
        _vm.$set(_vm.form, "name", $$v);
      },
      expression: "form.name"
    }
  })], 1)], 1), _vm._v(" "), _vm.localCurrency ? _c('div', {
    staticClass: "mb-4 pa-2 blue lighten-5 rounded"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": "info",
      "outlined": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-home")]), _vm._v("\n          Current Local: " + _vm._s(_vm.localCurrency.code) + "\n        ")], 1)], 1) : _vm._e(), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-3 grey lighten-4 rounded pa-1",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "Active",
      "dense": "",
      "hide-details": ""
    },
    model: {
      value: _vm.form.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.form, "isActive", $$v);
      },
      expression: "form.isActive"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_c(VCheckbox["a" /* default */], {
    attrs: {
      "disabled": _vm.hasExistingLocalCurrency && !_vm.form.isLocalCCY,
      "dense": "",
      "hide-details": ""
    },
    scopedSlots: _vm._u([{
      key: "label",
      fn: function () {
        return [_c('span', {
          staticClass: "caption"
        }, [_vm._v("Set as Local Currency")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.form.isLocalCCY,
      callback: function ($$v) {
        _vm.$set(_vm.form, "isLocalCCY", $$v);
      },
      expression: "form.isLocalCCY"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "pa-3 blue lighten-5 rounded mb-4",
    staticStyle: {
      "border-left": "4px solid #2196F3"
    }
  }, [_c('span', {
    staticClass: "caption font-weight-bold primary--text d-block mb-1"
  }, [_vm._v("Rate Direction:")]), _vm._v(" "), _c(VRadioGroup["a" /* default */], {
    attrs: {
      "row": "",
      "dense": "",
      "hide-details": ""
    },
    model: {
      value: _vm.exchangeDirection,
      callback: function ($$v) {
        _vm.exchangeDirection = $$v;
      },
      expression: "exchangeDirection"
    }
  }, [_c(VRadio["a" /* default */], {
    attrs: {
      "label": `${_vm.currentLocalCurrency} → ${_vm.form.code || 'Foreign'}`,
      "value": "local_to_foreign"
    }
  }), _vm._v(" "), _c(VRadio["a" /* default */], {
    attrs: {
      "label": `${_vm.form.code || 'Foreign'} → ${_vm.currentLocalCurrency}`,
      "value": "foreign_to_local"
    }
  })], 1)], 1), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": _vm.rateLabel,
      "outlined": "",
      "dense": "",
      "type": "number",
      "rules": _vm.rateRules,
      "hint": _vm.form.rate && _vm.form.code ? _vm.conversionPreview : '',
      "persistent-hint": ""
    },
    model: {
      value: _vm.form.rate,
      callback: function ($$v) {
        _vm.$set(_vm.form, "rate", $$v);
      },
      expression: "form.rate"
    }
  })], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "grey lighten-3 pa-3"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": _vm.isloading
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("Save")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CurrencyForm.vue?vue&type=template&id=73a7d496&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CurrencyForm.vue?vue&type=script&lang=js


/* harmony default export */ var CurrencyFormvue_type_script_lang_js = ({
  props: {
    isCreate: {
      type: Boolean,
      default: true
    },
    recordId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      form: {
        code: '',
        name: '',
        rate: 1,
        isActive: true,
        isLocalCCY: false,
        exchangeDirection: 'local_to_foreign'
      },
      exchangeDirection: 'local_to_foreign',
      localCurrency: null,
      isloading: false,
      nameRules: [v => !!v || 'Required', v => v && v.length <= 20 || 'Max 20 chars'],
      rateRules: [v => !!v || 'Required', v => v && parseFloat(v) > 0 || 'Positive number required']
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllCurrency']),
    currentLocalCurrency() {
      var _this$localCurrency;
      return this.form.isLocalCCY && this.form.code ? this.form.code : ((_this$localCurrency = this.localCurrency) === null || _this$localCurrency === void 0 ? void 0 : _this$localCurrency.code) || 'LAK';
    },
    hasExistingLocalCurrency() {
      return !!(this.localCurrency && this.localCurrency.id);
    },
    rateLabel() {
      return this.exchangeDirection === 'local_to_foreign' ? `Rate (1 ${this.currentLocalCurrency} = ? ${this.form.code || 'XXX'})` : `Rate (1 ${this.form.code || 'XXX'} = ? ${this.currentLocalCurrency})`;
    },
    conversionPreview() {
      if (!this.form.rate || !this.form.code) return '';
      const rate = parseFloat(this.form.rate);
      return this.exchangeDirection === 'local_to_foreign' ? `1 ${this.currentLocalCurrency} = ${rate.toFixed(4)} ${this.form.code}` : `1 ${this.form.code} = ${rate.toFixed(4)} ${this.currentLocalCurrency}`;
    }
  },
  watch: {
    exchangeDirection(val) {
      this.form.exchangeDirection = val;
    }
  },
  async created() {
    await this.loadLocalCurrency();
    await this.loadCurrency();
  },
  methods: {
    async loadLocalCurrency() {
      try {
        const res = await this.$axios.get('api/currency/findLocalCurrency');
        this.localCurrency = res.data;
      } catch (e) {
        this.localCurrency = null;
      }
    },
    async loadCurrency() {
      if (this.recordId && !this.isCreate) {
        try {
          const res = await this.$axios.get(`api/currency/find/${this.recordId}`);
          Object.assign(this.form, res.data);
          this.exchangeDirection = res.data.exchangeDirection || 'local_to_foreign';
        } catch (e) {
          console.error(e);
        }
      }
    },
    async commitRecord() {
      if (this.$refs.currencyForm && this.$refs.currencyForm.validate()) {
        this.isloading = true;
        this.form.exchangeDirection = this.exchangeDirection;
        const api = this.isCreate ? 'api/currency/create' : `api/currency/update/${this.recordId}`;
        try {
          if (this.isCreate) await this.$axios.post(api, this.form);else await this.$axios.put(api, this.form);
          Object(common["l" /* swalSuccess */])(this.$swal, 'Success', 'Data Saved');
          this.$emit('reload-data');
          this.$emit('close-dialog');
        } catch (e) {
          Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'Failed to save data');
        } finally {
          this.isloading = false;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/CurrencyForm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CurrencyFormvue_type_script_lang_js = (CurrencyFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CurrencyForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(698)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CurrencyFormvue_type_script_lang_js,
  CurrencyFormvue_type_template_id_73a7d496_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "73a7d496",
  "0193ac70"
  
)

/* harmony default export */ var CurrencyForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(70).default})


/***/ })

};;
//# sourceMappingURL=currency-form.js.map