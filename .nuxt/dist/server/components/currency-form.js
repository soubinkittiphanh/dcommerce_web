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

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(460);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(200);
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

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(701);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("147bc7b1", content, true, context)
};

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyForm_vue_vue_type_style_index_0_id_af8abd18_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyForm_vue_vue_type_style_index_0_id_af8abd18_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyForm_vue_vue_type_style_index_0_id_af8abd18_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyForm_vue_vue_type_style_index_0_id_af8abd18_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyForm_vue_vue_type_style_index_0_id_af8abd18_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".currency-form-card[data-v-af8abd18]{background-color:#fff!important;box-shadow:0 4px 12px rgba(0,0,0,.1)!important}.form-header[data-v-af8abd18]{background-color:#fff!important;border-bottom:1px solid rgba(0,0,0,.08)}.currency-chip[data-v-af8abd18]{font-weight:500;letter-spacing:.5px}.form-content[data-v-af8abd18]{background-color:#fff!important;min-height:400px;padding:20px 24px!important}.form-row[data-v-af8abd18]{margin-bottom:12px}.currency-input[data-v-af8abd18]{margin-bottom:8px}.currency-input[data-v-af8abd18] .v-field{background-color:#fff!important;border:1.5px solid #e0e0e0;border-radius:8px}.currency-input[data-v-af8abd18] .v-field--focused{background-color:#fff!important;border:2px solid #1976d2}.currency-input[data-v-af8abd18] .v-field__input{background-color:transparent!important}.currency-input[data-v-af8abd18] .v-field--disabled{background-color:#f5f5f5!important;opacity:.7}.local-currency-info[data-v-af8abd18]{background-color:rgba(33,150,243,.02);border-bottom:1px solid rgba(0,0,0,.08);border-radius:4px;padding:12px 8px}.local-currency-chip[data-v-af8abd18]{font-size:.75rem;font-weight:500}.checkbox-row[data-v-af8abd18]{background-color:rgba(248,249,250,.5);border-bottom:1px solid rgba(0,0,0,.08);border-radius:4px;margin-left:0;margin-right:0;padding:12px}.custom-checkbox[data-v-af8abd18]{margin:0}.checkbox-label[data-v-af8abd18]{color:#424242;font-size:.875rem;font-weight:500}.local-currency-checkbox[data-v-af8abd18] .v-selection-control--disabled{opacity:.6}.rate-direction-section[data-v-af8abd18]{background-color:rgba(33,150,243,.05)!important;border:1px solid rgba(33,150,243,.2);border-radius:8px;margin:20px 0;padding:16px}.rate-direction-label[data-v-af8abd18]{color:#1976d2;display:block;font-size:.875rem;font-weight:600;margin-bottom:12px}.rate-radio-group[data-v-af8abd18]{margin-bottom:0!important}.rate-radio[data-v-af8abd18]{margin-bottom:8px;margin-right:20px}.rate-radio[data-v-af8abd18] .v-label{color:#555;font-size:.8rem;font-weight:500}.rate-input-section[data-v-af8abd18]{margin:20px 0}.rate-input[data-v-af8abd18]{margin-bottom:0}.rate-input[data-v-af8abd18] .v-field{background-color:#fff!important;border:1.5px solid #e0e0e0;border-radius:8px}.rate-input[data-v-af8abd18] .v-field--focused{background-color:#fff!important;border:2px solid #4caf50}.rate-input[data-v-af8abd18] .v-field__input{background-color:transparent!important}.rate-input[data-v-af8abd18] .v-messages{background-color:rgba(76,175,80,.08)!important;border:1px solid rgba(76,175,80,.2);border-radius:0 0 8px 8px;border-top:none;color:#2e7d32;font-size:.75rem;font-weight:500;margin-top:-1px;padding:6px 12px}.form-actions[data-v-af8abd18]{background-color:rgba(248,249,250,.9)!important;border-top:1px solid rgba(0,0,0,.08);padding:16px 24px 20px!important}.required-text[data-v-af8abd18]{color:#666;font-style:italic}.cancel-btn[data-v-af8abd18]{color:#666;font-weight:500;text-transform:none}.cancel-btn[data-v-af8abd18]:hover{background-color:hsla(0,0%,62%,.1)!important}.save-btn[data-v-af8abd18]{box-shadow:0 2px 4px rgba(25,118,210,.3);font-weight:600;min-width:80px;text-transform:none}.save-btn[data-v-af8abd18]:hover{box-shadow:0 4px 8px rgba(25,118,210,.4);transform:translateY(-1px);transition:all .2s ease}[data-v-af8abd18] .custom-tooltip .v-tooltip__content{background-color:#424242!important;font-size:.75rem!important;max-width:200px}@media (max-width:600px){.form-content[data-v-af8abd18]{padding:16px!important}.rate-radio[data-v-af8abd18]{margin-bottom:8px;margin-right:12px}.rate-radio[data-v-af8abd18] .v-label{font-size:.75rem}.form-actions[data-v-af8abd18]{padding:12px 16px 16px!important}.checkbox-row[data-v-af8abd18]{padding-left:8px;padding-right:8px}}[data-v-af8abd18] .v-dialog .v-overlay__content{box-shadow:none}[data-v-af8abd18] .v-input--error .v-field{background-color:rgba(244,67,54,.05)!important;border-color:#f44336!important}[data-v-af8abd18] .v-messages--active{color:#f44336;font-weight:500}.currency-input[data-v-af8abd18]:focus-within,.rate-input[data-v-af8abd18]:focus-within{transform:translateY(-1px);transition:transform .2s ease}*[data-v-af8abd18]{background-color:inherit}[data-v-af8abd18] .v-card{background-color:#fff!important}[data-v-af8abd18] .v-card-title{background-color:#fff!important}[data-v-af8abd18] .v-card-text{background-color:#fff!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 752:
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
var VCheckbox = __webpack_require__(485);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(447);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CurrencyForm.vue?vue&type=template&id=af8abd18&scoped=true


















var CurrencyFormvue_type_template_id_af8abd18_scoped_true_render = function render() {
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
    staticClass: "pb-2 form-header"
  }, [_c(VChip["a" /* default */], {
    staticClass: "currency-chip",
    attrs: {
      "color": "primary",
      "size": "small",
      "label": ""
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": "",
      "size": "small"
    }
  }, [_vm._v("mdi-currency-usd")]), _vm._v("\n      " + _vm._s(_vm.isCreate ? 'Add Currency' : 'Edit Currency') + "\n    ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pt-2 form-content"
  }, [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VRow["a" /* default */], {
    staticClass: "form-row",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    staticClass: "currency-input",
    attrs: {
      "disabled": !_vm.isCreate,
      "label": "* Code",
      "variant": "outlined",
      "density": "compact",
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
    staticClass: "currency-input",
    attrs: {
      "label": "* Name",
      "variant": "outlined",
      "density": "compact",
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
    staticClass: "mb-4 local-currency-info"
  }, [_c(VChip["a" /* default */], {
    staticClass: "local-currency-chip",
    attrs: {
      "size": "small",
      "color": "info",
      "variant": "tonal"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": "",
      "size": "small"
    }
  }, [_vm._v("mdi-home")]), _vm._v("\n          Current Local: " + _vm._s(_vm.localCurrency.code) + "\n        ")], 1)], 1) : _vm._e(), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-3 checkbox-row",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VCheckbox["a" /* default */], {
    staticClass: "custom-checkbox",
    attrs: {
      "label": "Active",
      "density": "compact",
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
    staticClass: "custom-checkbox local-currency-checkbox",
    attrs: {
      "disabled": _vm.hasExistingLocalCurrency && !_vm.form.isLocalCCY,
      "density": "compact",
      "hide-details": ""
    },
    scopedSlots: _vm._u([{
      key: "label",
      fn: function () {
        var _vm$localCurrency;
        return [_c('span', {
          staticClass: "checkbox-label"
        }, [_vm._v("\n                Set as Local Currency\n                "), _c(VTooltip["a" /* default */], {
          staticClass: "custom-tooltip",
          attrs: {
            "activator": "parent",
            "location": "top"
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.hasExistingLocalCurrency && !_vm.form.isLocalCCY ? `${(_vm$localCurrency = _vm.localCurrency) === null || _vm$localCurrency === void 0 ? void 0 : _vm$localCurrency.name} is currently local` : 'Make this the base currency') + "\n                ")])], 1)];
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
    staticClass: "rate-direction-section"
  }, [_c(VRadioGroup["a" /* default */], {
    staticClass: "mb-3 rate-radio-group",
    attrs: {
      "inline": "",
      "density": "compact"
    },
    scopedSlots: _vm._u([{
      key: "label",
      fn: function () {
        return [_c('span', {
          staticClass: "rate-direction-label"
        }, [_vm._v("Rate Direction:")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.exchangeDirection,
      callback: function ($$v) {
        _vm.exchangeDirection = $$v;
      },
      expression: "exchangeDirection"
    }
  }, [_vm._v(" "), _c(VRadio["a" /* default */], {
    staticClass: "rate-radio",
    attrs: {
      "label": `${_vm.currentLocalCurrency} → ${_vm.form.code || 'Foreign'}`,
      "value": "local_to_foreign",
      "density": "compact"
    }
  }), _vm._v(" "), _c(VRadio["a" /* default */], {
    staticClass: "rate-radio",
    attrs: {
      "label": `${_vm.form.code || 'Foreign'} → ${_vm.currentLocalCurrency}`,
      "value": "foreign_to_local",
      "density": "compact"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "rate-input-section"
  }, [_c(VTextField["a" /* default */], {
    staticClass: "rate-input",
    attrs: {
      "label": _vm.rateLabel,
      "variant": "outlined",
      "density": "compact",
      "type": "number",
      "step": "any",
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
  })], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pt-0 form-actions"
  }, [_c('small', {
    staticClass: "text-caption text-grey required-text"
  }, [_vm._v("* Required fields")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "cancel-btn",
    attrs: {
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n      Cancel\n    ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "save-btn",
    attrs: {
      "color": "primary",
      "variant": "flat",
      "loading": _vm.isloading
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n      Save\n    ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CurrencyForm.vue?vue&type=template&id=af8abd18&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CurrencyForm.vue?vue&type=script&lang=js


/* harmony default export */ var CurrencyFormvue_type_script_lang_js = ({
  props: {
    isCreate: {
      type: Boolean,
      require: true,
      default: true
    },
    recordId: {
      type: Number,
      require: false,
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
      nameRules: [value => !!value || 'Required', value => value && value.length <= 20 || 'Max 20 characters'],
      rateRules: [value => !!value || 'Required', value => value && parseFloat(value) > 0 || 'Must be positive']
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['currentSelectedCustomer', 'cartOfProduct', 'findAllCurrency']),
    currentLocalCurrency() {
      var _this$localCurrency;
      if (this.form.isLocalCCY && this.form.code) {
        return this.form.code;
      }
      return ((_this$localCurrency = this.localCurrency) === null || _this$localCurrency === void 0 ? void 0 : _this$localCurrency.code) || 'LAK';
    },
    hasExistingLocalCurrency() {
      return this.localCurrency && this.localCurrency.id;
    },
    rateLabel() {
      if (this.exchangeDirection === 'local_to_foreign') {
        return `* Rate (1 ${this.currentLocalCurrency} = ? ${this.form.code || 'XXX'})`;
      } else {
        return `* Rate (1 ${this.form.code || 'XXX'} = ? ${this.currentLocalCurrency})`;
      }
    },
    conversionPreview() {
      if (!this.form.rate || !this.form.code) return '';
      const rate = parseFloat(this.form.rate);
      if (this.exchangeDirection === 'local_to_foreign') {
        return `1 ${this.currentLocalCurrency} = ${rate.toFixed(4)} ${this.form.code} | 1 ${this.form.code} = ${(1 / rate).toFixed(4)} ${this.currentLocalCurrency}`;
      } else {
        return `1 ${this.form.code} = ${rate.toFixed(4)} ${this.currentLocalCurrency} | 1 ${this.currentLocalCurrency} = ${(1 / rate).toFixed(6)} ${this.form.code}`;
      }
    }
  },
  watch: {
    exchangeDirection(newVal) {
      this.form.exchangeDirection = newVal;
    }
  },
  async created() {
    await this.loadLocalCurrency();
    await this.loadCurrency();
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['initiateData', 'setSelectedTerminal', 'setSelectedLocation']),
    initData() {
      this.initiateData(this.$axios);
    },
    async loadLocalCurrency() {
      try {
        const response = await this.$axios.get('api/currency/findLocalCurrency');
        this.localCurrency = response.data;
      } catch (error) {
        console.log('No local currency found:', error);
        this.localCurrency = null;
      }
    },
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        this.isloading = true;
        const formData = {
          ...this.form,
          exchangeDirection: this.exchangeDirection
        };
        let api = this.isCreate ? 'api/currency/create' : `api/currency/update/${this.recordId}`;
        try {
          if (this.isCreate) {
            await this.$axios.post(api, formData);
          } else {
            await this.$axios.put(api, formData);
          }
          this.refreshData();
          Object(common["l" /* swalSuccess */])(this.$swal, 'Success', 'Currency saved successfully');
        } catch (error) {
          var _error$response, _error$response$data, _error$response$data$;
          console.log('Error: ', error);
          if ((_error$response = error.response) !== null && _error$response !== void 0 && (_error$response$data = _error$response.data) !== null && _error$response$data !== void 0 && (_error$response$data$ = _error$response$data.error) !== null && _error$response$data$ !== void 0 && _error$response$data$.includes('local currency already exists')) {
            Object(common["k" /* swalError2 */])(this.$swal, 'Error', error.response.data.error);
          } else {
            Object(common["k" /* swalError2 */])(this.$swal, 'Error', 'Failed to save currency');
          }
        }
        this.isloading = false;
      }
    },
    async loadCurrency() {
      if (this.recordId && !this.isCreate) {
        try {
          const response = await this.$axios.get(`api/currency/find/${this.recordId}`);
          const data = response.data;
          this.form.name = data.name;
          this.form.code = data.code;
          this.form.rate = data.rate;
          this.form.isActive = data.isActive;
          this.form.isLocalCCY = data.isLocalCCY;
          this.exchangeDirection = data.exchangeDirection || 'local_to_foreign';
          this.form.exchangeDirection = this.exchangeDirection;
        } catch (error) {
          console.log('Cannot fetch data:', error);
        }
      }
    },
    refreshData() {
      this.initData();
      this.$emit('reload-data');
    }
  }
});
// CONCATENATED MODULE: ./components/CurrencyForm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CurrencyFormvue_type_script_lang_js = (CurrencyFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CurrencyForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(700)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CurrencyFormvue_type_script_lang_js,
  CurrencyFormvue_type_template_id_af8abd18_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "af8abd18",
  "0193ac70"
  
)

/* harmony default export */ var CurrencyForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(70).default})


/***/ })

};;
//# sourceMappingURL=currency-form.js.map