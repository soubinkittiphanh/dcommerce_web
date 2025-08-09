exports.ids = [21];
exports.modules = {

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },
    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }
  },
  watch: {
    autoGrow(val) {
      this.$nextTick(() => {
        var _a;
        val ? this.calculateInputHeight() : (_a = this.$refs.input) === null || _a === void 0 ? void 0 : _a.style.removeProperty('height');
      });
    },
    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },
    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }
  },
  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },
  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },
    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },
    onInput(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },
    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }
      this.$emit('keydown', e);
    }
  }
}));

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(508);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3c2be8fc", content, true, context)
};

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f437f1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(471);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f437f1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f437f1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f437f1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f437f1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cursor-pointer[data-v-73f437f1]{cursor:pointer}.customer-card[data-v-73f437f1]{border:2px solid transparent;transition:all .3s ease}.customer-card[data-v-73f437f1]:hover{border-color:rgba(25,118,210,.3);transform:translateY(-1px)}.selected-customer[data-v-73f437f1]{background-color:rgba(25,118,210,.1);border-color:#1976d2!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(412);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/customerDialog/index.vue?vue&type=template&id=73f437f1&scoped=true&

















var customerDialogvue_type_template_id_73f437f1_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800",
      "persistent": ""
    },
    model: {
      value: _vm.dialogVisible,
      callback: function ($$v) {
        _vm.dialogVisible = $$v;
      },
      expression: "dialogVisible"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-account-search")]), _vm._v("\n        Select Customer\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VTextField["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "prepend-inner-icon": "mdi-magnify",
      "label": "Search customers by name, company, phone...",
      "variant": "outlined",
      "density": "compact",
      "clearable": ""
    },
    model: {
      value: _vm.customerSearchQuery,
      callback: function ($$v) {
        _vm.customerSearchQuery = $$v;
      },
      expression: "customerSearchQuery"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "success"
    },
    on: {
      "click": function ($event) {
        _vm.showAddCustomerForm = true;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-account-plus")]), _vm._v("\n            Add New Customer\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "info",
      "outlined": ""
    },
    on: {
      "click": _vm.selectWalkInCustomer
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-walk")]), _vm._v("\n            Walk-in Customer\n          ")], 1)], 1), _vm._v(" "), _vm.loadingCustomers ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v("Loading customers...")])], 1) : _c('div', {
    staticStyle: {
      "max-height": "400px",
      "overflow-y": "auto"
    }
  }, [_vm._l(_vm.filteredCustomers, function (customer) {
    var _vm$tempSelectedCusto;
    return _c(VCard["a" /* default */], {
      key: customer.id,
      staticClass: "mb-2 cursor-pointer customer-card",
      class: {
        'selected-customer': ((_vm$tempSelectedCusto = _vm.tempSelectedCustomer) === null || _vm$tempSelectedCusto === void 0 ? void 0 : _vm$tempSelectedCusto.id) === customer.id
      },
      attrs: {
        "outlined": "",
        "hover": ""
      },
      on: {
        "click": function ($event) {
          return _vm.selectCustomer(customer);
        }
      }
    }, [_c(components_VCard["c" /* VCardText */], {
      staticClass: "pa-3"
    }, [_c('div', {
      staticClass: "d-flex justify-space-between align-center"
    }, [_c('div', [_c('div', {
      staticClass: "font-weight-bold text-subtitle-1"
    }, [_vm._v("\n                    " + _vm._s(customer.name) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "text-body-2 grey--text"
    }, [_vm._v("\n                    " + _vm._s(customer.company || 'No company') + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "caption mt-1"
    }, [customer.email ? _c('span', [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-email")]), _vm._v("\n                      " + _vm._s(customer.email) + "\n                    ")], 1) : _vm._e(), _vm._v(" "), customer.telephone ? _c('span', {
      staticClass: "ml-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-phone")]), _vm._v("\n                      " + _vm._s(customer.telephone) + "\n                    ")], 1) : _vm._e()])]), _vm._v(" "), _c('div', {
      staticClass: "text-right"
    }, [_c(VChip["a" /* default */], {
      staticClass: "mb-1",
      attrs: {
        "color": _vm.getGradeColor(customer.grade),
        "text-color": "white",
        "small": ""
      }
    }, [_vm._v("\n                    Grade " + _vm._s(customer.grade) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "caption"
    }, [_vm._v("\n                    Credit: " + _vm._s(customer.credit) + " days\n                  ")]), _vm._v(" "), !customer.isActive ? _c(VChip["a" /* default */], {
      attrs: {
        "color": "error",
        "text-color": "white",
        "x-small": ""
      }
    }, [_vm._v("\n                    Inactive\n                  ")]) : _vm._e()], 1)])])], 1);
  }), _vm._v(" "), _vm.filteredCustomers.length === 0 ? _c('div', {
    staticClass: "text-center pa-4"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "48",
      "color": "grey"
    }
  }, [_vm._v("mdi-account-search")]), _vm._v(" "), _c('p', {
    staticClass: "mt-2 grey--text"
  }, [_vm._v("No customers found")])], 1) : _vm._e()], 2)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v(" Cancel ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.tempSelectedCustomer
    },
    on: {
      "click": _vm.confirmCustomerSelection
    }
  }, [_vm._v("\n          Select Customer\n        ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600",
      "persistent": ""
    },
    model: {
      value: _vm.showAddCustomerForm,
      callback: function ($$v) {
        _vm.showAddCustomerForm = $$v;
      },
      expression: "showAddCustomerForm"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "success white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-account-plus")]), _vm._v("\n        Add New Customer\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": _vm.closeAddCustomerForm
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VForm["a" /* default */], {
    ref: "customerForm",
    model: {
      value: _vm.customerFormValid,
      callback: function ($$v) {
        _vm.customerFormValid = $$v;
      },
      expression: "customerFormValid"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Customer Name *",
      "variant": "outlined",
      "rules": [_vm.rules.required],
      "required": ""
    },
    model: {
      value: _vm.newCustomer.name,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "name", $$v);
      },
      expression: "newCustomer.name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Company",
      "variant": "outlined"
    },
    model: {
      value: _vm.newCustomer.company,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "company", $$v);
      },
      expression: "newCustomer.company"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Email",
      "variant": "outlined",
      "rules": [_vm.rules.email]
    },
    model: {
      value: _vm.newCustomer.email,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "email", $$v);
      },
      expression: "newCustomer.email"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Phone",
      "variant": "outlined"
    },
    model: {
      value: _vm.newCustomer.telephone,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "telephone", $$v);
      },
      expression: "newCustomer.telephone"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Address",
      "variant": "outlined",
      "rows": "2"
    },
    model: {
      value: _vm.newCustomer.address,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "address", $$v);
      },
      expression: "newCustomer.address"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.gradeOptions,
      "label": "Grade",
      "variant": "outlined"
    },
    model: {
      value: _vm.newCustomer.grade,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "grade", $$v);
      },
      expression: "newCustomer.grade"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Credit Days",
      "type": "number",
      "variant": "outlined"
    },
    model: {
      value: _vm.newCustomer.credit,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "credit", $$v);
      },
      expression: "newCustomer.credit"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Late Charge %",
      "type": "number",
      "variant": "outlined"
    },
    model: {
      value: _vm.newCustomer.lateChargePercent,
      callback: function ($$v) {
        _vm.$set(_vm.newCustomer, "lateChargePercent", $$v);
      },
      expression: "newCustomer.lateChargePercent"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": _vm.closeAddCustomerForm
    }
  }, [_vm._v("\n          Cancel\n        ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "success",
      "disabled": !_vm.customerFormValid,
      "loading": _vm.savingCustomer
    },
    on: {
      "click": _vm.saveNewCustomer
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n          Save Customer\n        ")], 1)], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/customerDialog/index.vue?vue&type=template&id=73f437f1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/customerDialog/index.vue?vue&type=script&lang=js&
/* harmony default export */ var customerDialogvue_type_script_lang_js_ = ({
  name: 'CustomerDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    customers: {
      type: Array,
      default: () => []
    },
    selectedCustomer: {
      type: Object,
      default: null
    },
    loadingCustomers: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tempSelectedCustomer: null,
      customerSearchQuery: '',
      showAddCustomerForm: false,
      savingCustomer: false,
      customerFormValid: false,
      newCustomer: {
        name: '',
        company: '',
        email: '',
        address: '',
        telephone: '',
        credit: 30,
        lateChargePercent: 0,
        grade: 'A',
        isActive: true
      },
      rules: {
        required: value => !!value || 'This field is required',
        email: value => {
          if (!value) return true;
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(value) || 'Invalid email format';
        }
      },
      gradeOptions: ['A', 'B', 'C', 'D', 'E', 'F']
    };
  },
  computed: {
    dialogVisible: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) {
          this.closeDialog();
        }
      }
    },
    filteredCustomers() {
      if (!this.customerSearchQuery) {
        return this.customers.filter(customer => customer.isActive);
      }
      const searchTerm = this.customerSearchQuery.toLowerCase();
      return this.customers.filter(customer => {
        var _customer$company, _customer$email, _customer$telephone;
        return customer.isActive && (customer.name.toLowerCase().includes(searchTerm) || ((_customer$company = customer.company) === null || _customer$company === void 0 ? void 0 : _customer$company.toLowerCase().includes(searchTerm)) || ((_customer$email = customer.email) === null || _customer$email === void 0 ? void 0 : _customer$email.toLowerCase().includes(searchTerm)) || ((_customer$telephone = customer.telephone) === null || _customer$telephone === void 0 ? void 0 : _customer$telephone.includes(searchTerm)));
      });
    }
  },
  watch: {
    show(newVal) {
      if (!newVal) {
        this.tempSelectedCustomer = null;
        this.customerSearchQuery = '';
      }
    }
  },
  methods: {
    selectCustomer(customer) {
      this.tempSelectedCustomer = customer;
    },
    confirmCustomerSelection() {
      this.$emit('customer-selected', this.tempSelectedCustomer);
      this.closeDialog();
    },
    selectWalkInCustomer() {
      this.$emit('walk-in-selected');
      this.closeDialog();
    },
    closeDialog() {
      this.tempSelectedCustomer = null;
      this.customerSearchQuery = '';
      this.$emit('close');
    },
    closeAddCustomerForm() {
      this.showAddCustomerForm = false;
      this.resetNewCustomerForm();
    },
    resetNewCustomerForm() {
      this.newCustomer = {
        name: '',
        company: '',
        email: '',
        address: '',
        telephone: '',
        credit: 30,
        lateChargePercent: 0,
        grade: 'A',
        isActive: true
      };
      this.customerFormValid = false;
      if (this.$refs.customerForm) {
        this.$refs.customerForm.resetValidation();
      }
    },
    async saveNewCustomer() {
      var _this$newCustomer$com, _this$newCustomer$ema, _this$newCustomer$add, _this$newCustomer$tel;
      if (!this.customerFormValid) {
        this.$emit('show-message', 'Please fill in all required fields', 'warning', 'mdi-alert');
        return;
      }
      this.savingCustomer = true;
      const customerData = {
        name: this.newCustomer.name.trim(),
        company: ((_this$newCustomer$com = this.newCustomer.company) === null || _this$newCustomer$com === void 0 ? void 0 : _this$newCustomer$com.trim()) || null,
        email: ((_this$newCustomer$ema = this.newCustomer.email) === null || _this$newCustomer$ema === void 0 ? void 0 : _this$newCustomer$ema.trim()) || null,
        address: ((_this$newCustomer$add = this.newCustomer.address) === null || _this$newCustomer$add === void 0 ? void 0 : _this$newCustomer$add.trim()) || null,
        telephone: ((_this$newCustomer$tel = this.newCustomer.telephone) === null || _this$newCustomer$tel === void 0 ? void 0 : _this$newCustomer$tel.trim()) || null,
        credit: parseInt(this.newCustomer.credit) || 30,
        lateChargePercent: parseFloat(this.newCustomer.lateChargePercent) || 0,
        grade: this.newCustomer.grade,
        isActive: true
      };
      try {
        this.$emit('save-customer', customerData);
      } finally {
        this.savingCustomer = false;
      }
    },
    onCustomerSaved() {
      this.closeAddCustomerForm();
      this.closeDialog();
    },
    getGradeColor(grade) {
      const colors = {
        A: 'success',
        B: 'info',
        C: 'warning',
        D: 'orange',
        E: 'deep-orange',
        F: 'error'
      };
      return colors[grade] || 'grey';
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/customerDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var CAFE_customerDialogvue_type_script_lang_js_ = (customerDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/customerDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(507)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_customerDialogvue_type_script_lang_js_,
  customerDialogvue_type_template_id_73f437f1_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "73f437f1",
  "67afed58"
  
)

/* harmony default export */ var customerDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=c-a-f-e-customer-dialog.js.map