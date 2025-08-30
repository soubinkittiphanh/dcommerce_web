exports.ids = [59];
exports.modules = {

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(392);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 392:
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

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(391);
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

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(673);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("aaa40026", content, true, context)
};

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_60d35f7d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(576);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_60d35f7d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_60d35f7d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_60d35f7d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_60d35f7d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".maintenance-dialog[data-v-60d35f7d]{display:flex;flex-direction:column;height:100vh}.dialog-toolbar[data-v-60d35f7d]{border-radius:0!important;flex-shrink:0}.toolbar-title[data-v-60d35f7d]{font-size:1.25rem;font-weight:500}.dialog-content[data-v-60d35f7d]{background-color:#fafafa;flex:1;overflow-y:auto}.form-container[data-v-60d35f7d]{background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.1);margin:0 auto;max-width:1200px;padding:32px!important}.section-header[data-v-60d35f7d]{align-items:center;border-bottom:2px solid #e3f2fd;display:flex;margin-bottom:20px;padding-bottom:12px}.section-icon[data-v-60d35f7d]{font-size:24px!important;margin-right:12px}.section-title[data-v-60d35f7d]{color:#1976d2;font-size:1.1rem;font-weight:600;margin:0}.dialog-actions[data-v-60d35f7d]{background:#fff;border-top:1px solid #e0e0e0;flex-shrink:0;padding:16px 0!important}.documents-list[data-v-60d35f7d]{background:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;min-height:60px;padding:12px}.v-select--outlined[data-v-60d35f7d] .v-input__control>.v-input__slot,.v-text-field--outlined[data-v-60d35f7d] .v-input__control>.v-input__slot{min-height:48px}@media (max-width:768px){.form-container[data-v-60d35f7d]{border-radius:8px;margin:0 8px;padding:20px!important}.section-header[data-v-60d35f7d]{align-items:flex-start;flex-direction:column;text-align:left}.section-icon[data-v-60d35f7d]{margin-bottom:4px;margin-right:8px}.toolbar-title[data-v-60d35f7d]{font-size:1.1rem}}.v-btn[data-v-60d35f7d]:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined):hover{box-shadow:0 4px 8px rgba(0,0,0,.2);transform:translateY(-1px)}.v-card[data-v-60d35f7d]{transition:all .3s ease}.v-chip.v-size--small[data-v-60d35f7d]{font-size:.75rem;height:24px}.v-select.v-select--is-loading[data-v-60d35f7d] .v-input__append-inner{animation:spin-60d35f7d 1s linear infinite}@keyframes spin-60d35f7d{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 863:
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
var VCol = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(414);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/job_fair/mou/maintain/index.vue?vue&type=template&id=60d35f7d&scoped=true&


















var maintainvue_type_template_id_60d35f7d_scoped_true_render = function render() {
  var _vm$selectedCurrency;
  var _vm = this,
    _c = _vm._self._c;
  return _c(VDialog["a" /* default */], {
    attrs: {
      "value": _vm.value,
      "fullscreen": "",
      "hide-overlay": "",
      "transition": "dialog-bottom-transition",
      "scrollable": ""
    },
    on: {
      "input": function ($event) {
        return _vm.$emit('input', $event);
      }
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "maintenance-dialog"
  }, [_c(VToolbar["a" /* default */], {
    staticClass: "dialog-toolbar",
    attrs: {
      "color": "primary",
      "dark": "",
      "flat": ""
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "close-btn",
    attrs: {
      "icon": ""
    },
    on: {
      "click": _vm.cancel
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1), _vm._v(" "), _c(components_VToolbar["a" /* VToolbarTitle */], {
    staticClass: "toolbar-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-file-document-edit")]), _vm._v("\n        " + _vm._s(_vm.isEditing ? 'ແກ້ໄຂ MOU' : 'ສ້າງ MOU ໃໝ່') + "\n      ")], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "save-btn",
    attrs: {
      "text": "",
      "loading": _vm.saving,
      "disabled": !_vm.isFormValid
    },
    on: {
      "click": _vm.save
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n        ບັນທຶກ\n      ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "dialog-content"
  }, [_c(VContainer["a" /* default */], {
    staticClass: "form-container",
    attrs: {
      "fluid": ""
    }
  }, [_c(VForm["a" /* default */], {
    ref: "form",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.isFormValid,
      callback: function ($$v) {
        _vm.isFormValid = $$v;
      },
      expression: "isFormValid"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "section-icon",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-information")]), _vm._v(" "), _c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ຂໍ້ມູນພື້ນຖານ")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ລະຫັດວຽກ *",
      "rules": [_vm.rules.required],
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-identifier",
      "disabled": _vm.isEditing,
      "hint": "ລະຫັດງານເອກະລັກສຳລັບ MOU ນີ້",
      "persistent-hint": ""
    },
    model: {
      value: _vm.form.jobCode,
      callback: function ($$v) {
        _vm.$set(_vm.form, "jobCode", $$v);
      },
      expression: "form.jobCode"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເລກທີ MOU",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-file-document",
      "hint": "ເລກທີເອກະສານ MOU ທາງການ",
      "persistent-hint": ""
    },
    model: {
      value: _vm.form.mouNumber,
      callback: function ($$v) {
        _vm.$set(_vm.form, "mouNumber", $$v);
      },
      expression: "form.mouNumber"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.statusOptions,
      "label": "ສະຖານະວຽກ *",
      "rules": [_vm.rules.required],
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-flag"
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "color": _vm.getStatusColor(item.value),
            "small": "",
            "text-color": "white"
          }
        }, [_vm._v("\n                    " + _vm._s(item.text) + "\n                  ")])];
      }
    }, {
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "color": _vm.getStatusColor(item.value),
            "small": "",
            "text-color": "white"
          }
        }, [_vm._v("\n                    " + _vm._s(item.text) + "\n                  ")])];
      }
    }]),
    model: {
      value: _vm.form.jobStatus,
      callback: function ($$v) {
        _vm.$set(_vm.form, "jobStatus", $$v);
      },
      expression: "form.jobStatus"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຫົວຂໍ້ວຽກ *",
      "rules": [_vm.rules.required],
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-briefcase",
      "hint": "ລາຍລະອຽດຂອງຕຳແໜ່ງວຽກ",
      "persistent-hint": ""
    },
    model: {
      value: _vm.form.jobTitle,
      callback: function ($$v) {
        _vm.$set(_vm.form, "jobTitle", $$v);
      },
      expression: "form.jobTitle"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pt-6",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "section-icon",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-domain")]), _vm._v(" "), _c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ບໍລິສັດ & ສະຖານທີ່")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ບໍລິສັດນາຍຈ້າງ",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-office-building",
      "hint": "ຊື່ບໍລິສັດທີ່ຈ້າງງານ",
      "persistent-hint": ""
    },
    model: {
      value: _vm.form.employerCompany,
      callback: function ($$v) {
        _vm.$set(_vm.form, "employerCompany", $$v);
      },
      expression: "form.employerCompany"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ສະຖານທີ່ເຮັດວຽກ",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-map-marker",
      "hint": "ບ່ອນທີ່ຈະປະຕິບັດວຽກ",
      "persistent-hint": ""
    },
    model: {
      value: _vm.form.workLocation,
      callback: function ($$v) {
        _vm.$set(_vm.form, "workLocation", $$v);
      },
      expression: "form.workLocation"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pt-6",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "section-icon",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-account-group")]), _vm._v(" "), _c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ຂໍ້ມູນແຮງງານ")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຈຳນວນແຮງງານ *",
      "rules": [_vm.rules.required, _vm.rules.positiveNumber],
      "outlined": "",
      "dense": "",
      "type": "number",
      "min": "1",
      "prepend-inner-icon": "mdi-counter"
    },
    model: {
      value: _vm.form.numberOfWorkers,
      callback: function ($$v) {
        _vm.$set(_vm.form, "numberOfWorkers", _vm._n($$v));
      },
      expression: "form.numberOfWorkers"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.workerTypeOptions,
      "label": "ປະເພດແຮງງານ *",
      "rules": [_vm.rules.required],
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-account"
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VIcon["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "small": "",
            "color": _vm.getWorkerTypeColor(item.value)
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.getWorkerTypeIcon(item.value)) + "\n                  ")]), _vm._v("\n                  " + _vm._s(item.text) + "\n                ")];
      }
    }, {
      key: "item",
      fn: function ({
        item
      }) {
        return [_c(VIcon["a" /* default */], {
          staticClass: "mr-3",
          attrs: {
            "small": "",
            "color": _vm.getWorkerTypeColor(item.value)
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.getWorkerTypeIcon(item.value)) + "\n                  ")]), _vm._v("\n                  " + _vm._s(item.text) + "\n                ")];
      }
    }]),
    model: {
      value: _vm.form.workerType,
      callback: function ($$v) {
        _vm.$set(_vm.form, "workerType", $$v);
      },
      expression: "form.workerType"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pt-6",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "section-icon",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-currency-usd")]), _vm._v(" "), _c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ຂໍ້ມູນການເງິນ")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຄ່າບໍລິຫານ PM",
      "outlined": "",
      "dense": "",
      "type": "number",
      "min": "0",
      "step": "0.01",
      "prepend-inner-icon": "mdi-cash",
      "suffix": ((_vm$selectedCurrency = _vm.selectedCurrency) === null || _vm$selectedCurrency === void 0 ? void 0 : _vm$selectedCurrency.code) || 'USD'
    },
    model: {
      value: _vm.form.pmCharge,
      callback: function ($$v) {
        _vm.$set(_vm.form, "pmCharge", _vm._n($$v));
      },
      expression: "form.pmCharge"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ອັດຕາແລກປ່ຽນ",
      "outlined": "",
      "dense": "",
      "type": "number",
      "min": "0",
      "step": "0.001",
      "prepend-inner-icon": "mdi-swap-horizontal",
      "hint": "ຄ່າເລີ່ມຕົ້ນ: 1.0",
      "persistent-hint": ""
    },
    model: {
      value: _vm.form.exchangeRate,
      callback: function ($$v) {
        _vm.$set(_vm.form, "exchangeRate", _vm._n($$v));
      },
      expression: "form.exchangeRate"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.currencies,
      "item-text": "name",
      "item-value": "id",
      "label": "ສະກຸນເງິນ",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-currency-usd",
      "loading": _vm.loadingCurrencies
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                  " + _vm._s(item.code) + " - " + _vm._s(item.name) + "\n                ")];
      }
    }, {
      key: "item",
      fn: function ({
        item
      }) {
        return [_c('strong', [_vm._v(_vm._s(item.code))]), _vm._v(" - " + _vm._s(item.name) + "\n                ")];
      }
    }]),
    model: {
      value: _vm.form.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "currencyId", $$v);
      },
      expression: "form.currencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pt-6",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "section-icon",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-account-tie")]), _vm._v(" "), _c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ຂໍ້ມູນຕົວແທນ")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.agencies,
      "item-text": "agencyName",
      "item-value": "id",
      "label": "ຕົວແທນ",
      "outlined": "",
      "dense": "",
      "prepend-inner-icon": "mdi-domain",
      "loading": _vm.loadingAgencies,
      "clearable": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_vm._v("\n                  " + _vm._s(item.agencyName) + "\n                  "), _c('small', {
          staticClass: "ml-2"
        }, [_vm._v("(" + _vm._s(item.agencyCode) + ")")])];
      }
    }, {
      key: "item",
      fn: function ({
        item
      }) {
        return [_c('div', [_c('div', {
          staticClass: "font-weight-medium"
        }, [_vm._v("\n                      " + _vm._s(item.agencyName) + "\n                    ")]), _vm._v(" "), _c('small', {
          staticClass: "text--secondary"
        }, [_vm._v(_vm._s(item.agencyCode) + " - " + _vm._s(item.address))])])];
      }
    }]),
    model: {
      value: _vm.form.agencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "agencyId", $$v);
      },
      expression: "form.agencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pt-6",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "section-icon",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-note-text")]), _vm._v(" "), _c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ຂໍ້ມູນເພີ່ມເຕີມ")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ໝາຍເຫດ",
      "outlined": "",
      "rows": "3",
      "prepend-inner-icon": "mdi-note",
      "hint": "ໝາຍເຫດ ຫຼື ຄຳອະທິບາຍເພີ່ມເຕີມກ່ຽວກັບ MOU ນີ້",
      "persistent-hint": ""
    },
    model: {
      value: _vm.form.notes,
      callback: function ($$v) {
        _vm.$set(_vm.form, "notes", $$v);
      },
      expression: "form.notes"
    }
  })], 1), _vm._v(" "), _vm.form.documents && _vm.form.documents.length > 0 ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "section-icon",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-paperclip")]), _vm._v(" "), _c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ເອກະສານແນບ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "documents-list"
  }, _vm._l(_vm.form.documents, function (doc, index) {
    return _c(VChip["a" /* default */], {
      key: index,
      staticClass: "ma-1",
      attrs: {
        "close": ""
      },
      on: {
        "click:close": function ($event) {
          return _vm.removeDocument(index);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "left": "",
        "small": ""
      }
    }, [_vm._v("mdi-file")]), _vm._v("\n                  " + _vm._s(doc.name) + "\n                ")], 1);
  }), 1)]) : _vm._e()], 1)], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "dialog-actions"
  }, [_c(VContainer["a" /* default */], {
    attrs: {
      "fluid": ""
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "justify": "end"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "auto"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "mr-3",
    attrs: {
      "text": "",
      "large": ""
    },
    on: {
      "click": _vm.cancel
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-cancel")]), _vm._v("\n              ຍົກເລີກ\n            ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "large": "",
      "loading": _vm.saving,
      "disabled": !_vm.isFormValid
    },
    on: {
      "click": _vm.save
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n              " + _vm._s(_vm.isEditing ? 'ອັບເດດ MOU' : 'ສ້າງ MOU') + "\n            ")], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/job_fair/mou/maintain/index.vue?vue&type=template&id=60d35f7d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/job_fair/mou/maintain/index.vue?vue&type=script&lang=js&
/* harmony default export */ var maintainvue_type_script_lang_js_ = ({
  name: 'MouMaintenanceDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    editingItem: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isFormValid: false,
      saving: false,
      loadingAgencies: false,
      loadingCurrencies: false,
      agencies: [],
      currencies: [],
      form: {
        jobCode: '',
        mouNumber: '',
        pmCharge: 0,
        exchangeRate: 1,
        agencyId: null,
        employerCompany: '',
        workLocation: '',
        jobTitle: '',
        numberOfWorkers: 1,
        workerType: 'Any',
        jobStatus: 'draft',
        documents: [],
        notes: '',
        currencyId: null
      },
      statusOptions: [{
        value: 'draft',
        text: 'ຮ່າງ'
      }, {
        value: 'open',
        text: 'ເປີດ'
      }, {
        value: 'in_progress',
        text: 'ກຳລັງດຳເນີນການ'
      }, {
        value: 'completed',
        text: 'ສຳເລັດແລ້ວ'
      }, {
        value: 'cancelled',
        text: 'ຍົກເລີກແລ້ວ'
      }],
      workerTypeOptions: [{
        value: 'Any',
        text: 'ເພດໃດກໍໄດ້'
      }, {
        value: 'Man',
        text: 'ຜູ້ຊາຍເທົ່ານັ້ນ'
      }, {
        value: 'Woman',
        text: 'ຜູ້ຍິງເທົ່ານັ້ນ'
      }, {
        value: 'Spous',
        text: 'ຄູ່ສົມລົດ'
      }],
      rules: {
        required: v => !!v || 'ຈຳເປັນຕ້ອງໃສ່ຂໍ້ມູນ',
        positiveNumber: v => v > 0 || 'ຕ້ອງໃຫ່ຍກວ່າ 0'
      }
    };
  },
  computed: {
    isEditing() {
      return !!this.editingItem;
    },
    selectedCurrency() {
      return this.currencies.find(c => c.id === this.form.currencyId);
    }
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.initForm();
        this.fetchDropdownData();
      }
    },
    editingItem: {
      handler() {
        if (this.editingItem) {
          this.populateForm();
        }
      },
      deep: true
    }
  },
  methods: {
    initForm() {
      if (this.isEditing) {
        this.populateForm();
      } else {
        this.resetForm();
      }
    },
    resetForm() {
      this.form = {
        jobCode: '',
        mouNumber: '',
        pmCharge: 0,
        exchangeRate: 1,
        agencyId: null,
        employerCompany: '',
        workLocation: '',
        jobTitle: '',
        numberOfWorkers: 1,
        workerType: 'Any',
        jobStatus: 'draft',
        documents: [],
        notes: '',
        currencyId: null
      };
      this.$nextTick(() => {
        var _this$$refs$form;
        (_this$$refs$form = this.$refs.form) === null || _this$$refs$form === void 0 ? void 0 : _this$$refs$form.resetValidation();
      });
    },
    populateForm() {
      if (this.editingItem) {
        var _this$editingItem$age, _this$editingItem$cur;
        this.form = {
          ...this.form,
          ...this.editingItem,
          agencyId: ((_this$editingItem$age = this.editingItem.agency) === null || _this$editingItem$age === void 0 ? void 0 : _this$editingItem$age.id) || null,
          currencyId: ((_this$editingItem$cur = this.editingItem.currency) === null || _this$editingItem$cur === void 0 ? void 0 : _this$editingItem$cur.id) || null,
          documents: this.editingItem.documents || []
        };
      }
    },
    async fetchDropdownData() {
      await Promise.all([this.fetchAgencies(), this.fetchCurrencies()]);
    },
    async fetchAgencies() {
      this.loadingAgencies = true;
      try {
        const response = await this.$axios.$get('/api/agency');
        console.info(`AGENCY ${JSON.stringify(response)}`);
        if (response.success && response.data && response.data.agencies) {
          // Handle nested response structure: response.data.data.agencies
          this.agencies = response.data.agencies;
        } else if (response.success && Array.isArray(response.data)) {
          // Handle direct array in response.data
          this.agencies = response.data;
        }
        console.log('Agencies loaded:', this.agencies);
      } catch (error) {
        console.error('Error fetching agencies:', error);
        this.$toast.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ');
      } finally {
        this.loadingAgencies = false;
      }
    },
    async fetchCurrencies() {
      this.loadingCurrencies = true;
      try {
        const response = await this.$axios.$get('/api/currency/find');

        // Handle direct array response (no wrapper object)
        if (Array.isArray(response)) {
          this.currencies = response;
        }
        // Handle wrapped response with success property
        else if (response.success && response.data) {
          this.currencies = response.data;
        }
        // Handle case where response might be the data directly
        else if (response && !response.success) {
          this.currencies = response;
        }
        console.log('Currencies loaded:', this.currencies);
      } catch (error) {
        console.error('Error fetching currencies:', error);
        this.$toast.error('ໂຫລດຂໍ້ມູນສະກຸນເງິນບໍ່ສຳເລັດ');
      } finally {
        this.loadingCurrencies = false;
      }
    },
    async save() {
      if (!this.$refs.form.validate()) {
        this.$toast.error('ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດໃນແບບຟອມກ່ອນບັນທຶກ');
        return;
      }
      this.saving = true;
      try {
        const payload = {
          ...this.form
        };

        // Clean up the payload
        if (!payload.pmCharge) payload.pmCharge = 0;
        if (!payload.exchangeRate) payload.exchangeRate = 1;
        if (!payload.numberOfWorkers) payload.numberOfWorkers = 1;
        let response;
        if (this.isEditing) {
          response = await this.$axios.$put(`/api/mous/${this.editingItem.id}`, payload);
        } else {
          response = await this.$axios.$post('/api/mous', payload);
        }
        if (response.success) {
          this.$toast.success(`MOU ${this.isEditing ? 'ອັບເດດ' : 'ສ້າງ'}ສຳເລັດແລ້ວ`);
          this.$emit('saved', response.data);
        }
      } catch (error) {
        var _error$response, _error$response$data;
        console.error('Error saving MOU:', error);
        const errorMessage = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ';
        this.$toast.error(errorMessage);
      } finally {
        this.saving = false;
      }
    },
    cancel() {
      this.$emit('cancelled');
    },
    removeDocument(index) {
      this.form.documents.splice(index, 1);
    },
    getStatusColor(status) {
      const colorMap = {
        draft: 'grey',
        open: 'blue',
        in_progress: 'orange',
        completed: 'green',
        cancelled: 'red'
      };
      return colorMap[status] || 'grey';
    },
    getWorkerTypeColor(type) {
      const colorMap = {
        Man: 'blue',
        Woman: 'pink',
        Spous: 'purple',
        Any: 'green'
      };
      return colorMap[type] || 'grey';
    },
    getWorkerTypeIcon(type) {
      const iconMap = {
        Man: 'mdi-account',
        Woman: 'mdi-account-outline',
        Spous: 'mdi-account-heart',
        Any: 'mdi-account-group'
      };
      return iconMap[type] || 'mdi-account';
    }
  }
});
// CONCATENATED MODULE: ./components/job_fair/mou/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var mou_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/job_fair/mou/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(672)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mou_maintainvue_type_script_lang_js_,
  maintainvue_type_template_id_60d35f7d_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "60d35f7d",
  "2ef59eb0"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=job-fair-mou-maintain.js.map