exports.ids = [126];
exports.modules = {

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(414);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 414:
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

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(413);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
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

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(440);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(439);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(136);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
// Styles

 // Mixins


 // Directives

 // Components


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].extend({
  name: 'v-switch',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },
  props: {
    inset: Boolean,
    loading: {
      type: [Boolean, String],
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls v-input--switch': true,
        'v-input--switch--flat': this.flat,
        'v-input--switch--inset': this.inset
      };
    },
    attrs() {
      return {
        'aria-checked': String(this.isActive),
        'aria-disabled': String(this.isDisabled),
        role: 'switch'
      };
    },
    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    },
    switchData() {
      return this.setTextColor(this.loading ? undefined : this.validationState, {
        class: this.themeClasses
      });
    }
  },
  methods: {
    genDefaultSlot() {
      return [this.genSwitch(), this.genLabel()];
    },
    genSwitch() {
      const {
        title,
        ...switchAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.genInput('checkbox', {
        ...this.attrs,
        ...switchAttrs
      }), this.genRipple(this.setTextColor(this.validationState, {
        directives: [{
          name: 'touch',
          value: {
            left: this.onSwipeLeft,
            right: this.onSwipeRight
          }
        }]
      })), this.$createElement('div', {
        staticClass: 'v-input--switch__track',
        ...this.switchData
      }), this.$createElement('div', {
        staticClass: 'v-input--switch__thumb',
        ...this.switchData
      }, [this.genProgress()])]);
    },
    genProgress() {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_5__[/* VFabTransition */ "c"], {}, [this.loading === false ? null : this.$slots.progress || this.$createElement(_VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        props: {
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          size: 16,
          width: 2,
          indeterminate: true
        }
      })]);
    },
    onSwipeLeft() {
      if (this.isActive) this.onChange();
    },
    onSwipeRight() {
      if (!this.isActive) this.onChange();
    },
    onKeydown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].left && this.isActive || e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].right && !this.isActive) this.onChange();
    }
  }
}));

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(734);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("62d16c15", content, true, context)
};

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromotionDialog_vue_vue_type_style_index_0_id_2e2539ed_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromotionDialog_vue_vue_type_style_index_0_id_2e2539ed_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromotionDialog_vue_vue_type_style_index_0_id_2e2539ed_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromotionDialog_vue_vue_type_style_index_0_id_2e2539ed_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PromotionDialog_vue_vue_type_style_index_0_id_2e2539ed_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".section-header[data-v-2e2539ed]{align-items:center;color:#2d3748;display:flex;font-size:16px;font-weight:600;margin:24px 0 16px}.section-header[data-v-2e2539ed]:first-child{margin-top:0}.promotion-preview[data-v-2e2539ed]{margin-top:16px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(399);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(396);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(398);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(459);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(434);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/promotions/PromotionDialog.vue?vue&type=template&id=2e2539ed&scoped=true

















var PromotionDialogvue_type_template_id_2e2539ed_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "d-flex align-center justify-space-between"
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-tag-plus")]), _vm._v("\n      " + _vm._s(_vm.mode === 'create' ? 'Create New Promotion' : 'Edit Promotion') + "\n    ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.handleClose
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-6"
  }, [_c(VForm["a" /* default */], {
    ref: "form",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.handleSave.apply(null, arguments);
      }
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-information")]), _vm._v("\n        Basic Information\n      ")], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Promotion Name *",
      "rules": _vm.nameRules,
      "outlined": "",
      "placeholder": "e.g., Buy 2 Get 1 Free Coffee"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('name', _vm.formData.name);
      }
    },
    model: {
      value: _vm.formData.name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "name", $$v);
      },
      expression: "formData.name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Promotion Code *",
      "rules": _vm.codeRules,
      "outlined": "",
      "placeholder": "e.g., B2G1COFFEE"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('code', _vm.formData.code);
      }
    },
    model: {
      value: _vm.formData.code,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "code", $$v);
      },
      expression: "formData.code"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Description",
      "outlined": "",
      "rows": "3",
      "placeholder": "Describe the promotion details..."
    },
    model: {
      value: _vm.formData.description,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "description", $$v);
      },
      expression: "formData.description"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-tag")]), _vm._v("\n        Promotion Type\n      ")], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "label": "Promotion Type *",
      "items": _vm.promotionTypes,
      "item-text": "title",
      "item-value": "value",
      "rules": _vm.typeRules,
      "outlined": "",
      "clearable": ""
    },
    on: {
      "input": _vm.onTypeChange,
      "blur": function ($event) {
        return _vm.debugFieldValidation('type', _vm.formData.type);
      }
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VIcon["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "color": item.color
          }
        }, [_vm._v(_vm._s(item.icon))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.title))])], 1)];
      }
    }]),
    model: {
      value: _vm.formData.type,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "type", $$v);
      },
      expression: "formData.type"
    }
  })], 1)], 1), _vm._v(" "), _vm.formData.type ? _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-cog")]), _vm._v("\n        Configuration\n      ")], 1) : _vm._e(), _vm._v(" "), _vm.formData.type === 'buy_x_get_y' ? _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Buy Quantity *",
      "type": "number",
      "rules": _vm.buyQuantityRules,
      "outlined": "",
      "min": "1"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('buy_quantity', _vm.formData.conditions.buy_quantity);
      }
    },
    model: {
      value: _vm.formData.conditions.buy_quantity,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "buy_quantity", _vm._n($$v));
      },
      expression: "formData.conditions.buy_quantity"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Get Quantity *",
      "type": "number",
      "rules": _vm.getQuantityRules,
      "outlined": "",
      "min": "1"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('get_quantity', _vm.formData.conditions.get_quantity);
      }
    },
    model: {
      value: _vm.formData.conditions.get_quantity,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "get_quantity", _vm._n($$v));
      },
      expression: "formData.conditions.get_quantity"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Max Free Items",
      "type": "number",
      "outlined": "",
      "min": "0",
      "placeholder": "Unlimited"
    },
    model: {
      value: _vm.formData.conditions.max_free_items,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "max_free_items", _vm._n($$v));
      },
      expression: "formData.conditions.max_free_items"
    }
  })], 1)], 1)], 1) : _vm.formData.type === 'percentage' ? _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Discount Percentage *",
      "type": "number",
      "rules": _vm.discountPercentageRules,
      "outlined": "",
      "min": "1",
      "max": "100",
      "suffix": "%"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('discount_percentage', _vm.formData.conditions.discount_percentage);
      }
    },
    model: {
      value: _vm.formData.conditions.discount_percentage,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "discount_percentage", _vm._n($$v));
      },
      expression: "formData.conditions.discount_percentage"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Max Discount Amount",
      "type": "number",
      "outlined": "",
      "min": "0",
      "prefix": "$",
      "placeholder": "No limit"
    },
    model: {
      value: _vm.formData.conditions.max_discount_amount,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "max_discount_amount", _vm._n($$v));
      },
      expression: "formData.conditions.max_discount_amount"
    }
  })], 1)], 1)], 1) : _vm.formData.type === 'fixed_amount' ? _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Discount Amount *",
      "type": "number",
      "rules": _vm.discountAmountRules,
      "outlined": "",
      "min": "0.01",
      "step": "0.01",
      "prefix": "$"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('discount_amount', _vm.formData.conditions.discount_amount);
      }
    },
    model: {
      value: _vm.formData.conditions.discount_amount,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "discount_amount", _vm._n($$v));
      },
      expression: "formData.conditions.discount_amount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Minimum Order Amount",
      "type": "number",
      "outlined": "",
      "min": "0",
      "step": "0.01",
      "prefix": "$",
      "placeholder": "No minimum"
    },
    model: {
      value: _vm.formData.conditions.minimum_order,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "minimum_order", _vm._n($$v));
      },
      expression: "formData.conditions.minimum_order"
    }
  })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.formData.type ? _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-package-variant")]), _vm._v("\n        Applicable Items\n      ")], 1) : _vm._e(), _vm._v(" "), _vm.formData.type ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "label": "Categories",
      "items": _vm.categories,
      "item-text": "categ_name",
      "item-value": "categ_id",
      "outlined": "",
      "multiple": "",
      "chips": "",
      "deletable-chips": "",
      "placeholder": "Select categories...",
      "loading": _vm.loadingCategories
    },
    model: {
      value: _vm.formData.conditions.applicable_categories,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "applicable_categories", $$v);
      },
      expression: "formData.conditions.applicable_categories"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "label": "Specific Products",
      "items": _vm.products,
      "item-text": "pro_name",
      "item-value": "id",
      "outlined": "",
      "multiple": "",
      "chips": "",
      "deletable-chips": "",
      "placeholder": "Select products...",
      "loading": _vm.loadingProducts
    },
    model: {
      value: _vm.formData.conditions.applicable_products,
      callback: function ($$v) {
        _vm.$set(_vm.formData.conditions, "applicable_products", $$v);
      },
      expression: "formData.conditions.applicable_products"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-calendar-range")]), _vm._v("\n        Validity Period\n      ")], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Start Date *",
      "type": "datetime-local",
      "rules": _vm.startDateRules,
      "outlined": ""
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('start_date', _vm.formData.start_date);
      }
    },
    model: {
      value: _vm.formData.start_date,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "start_date", $$v);
      },
      expression: "formData.start_date"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "End Date *",
      "type": "datetime-local",
      "rules": _vm.endDateRules,
      "outlined": ""
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('end_date', _vm.formData.end_date);
      }
    },
    model: {
      value: _vm.formData.end_date,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "end_date", $$v);
      },
      expression: "formData.end_date"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-counter")]), _vm._v("\n        Usage Limits\n      ")], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Maximum Uses",
      "type": "number",
      "outlined": "",
      "min": "1",
      "placeholder": "Unlimited"
    },
    model: {
      value: _vm.formData.max_uses,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "max_uses", _vm._n($$v));
      },
      expression: "formData.max_uses"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Priority",
      "type": "number",
      "rules": _vm.priorityRules,
      "outlined": "",
      "min": "1",
      "max": "100",
      "hint": "Higher priority promotions are applied first"
    },
    on: {
      "blur": function ($event) {
        return _vm.debugFieldValidation('priority', _vm.formData.priority);
      }
    },
    model: {
      value: _vm.formData.priority,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "priority", _vm._n($$v));
      },
      expression: "formData.priority"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-tune")]), _vm._v("\n        Additional Settings\n      ")], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "color": "primary",
      "hide-details": ""
    },
    model: {
      value: _vm.formData.is_active,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "is_active", $$v);
      },
      expression: "formData.is_active"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-caption text--secondary mt-1"
  }, [_vm._v("\n            Only active promotions can be applied to orders\n          ")])], 1)], 1), _vm._v(" "), _vm.formData.type ? _c('div', {
    staticClass: "section-header"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("mdi-eye")]), _vm._v("\n        Preview\n      ")], 1) : _vm._e(), _vm._v(" "), _vm.formData.type ? _c(VCard["a" /* default */], {
    staticClass: "promotion-preview",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], [_c('div', {
    staticClass: "d-flex align-center mb-2"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": _vm.getTypeColor(_vm.formData.type)
    }
  }, [_vm._v("\n              " + _vm._s(_vm.getTypeIcon(_vm.formData.type)) + "\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v(_vm._s(_vm.formData.name || 'Promotion Name'))]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VChip["a" /* default */], {
    attrs: {
      "color": _vm.formData.is_active ? 'success' : 'error',
      "small": "",
      "label": ""
    }
  }, [_vm._v("\n              " + _vm._s(_vm.formData.is_active ? 'Active' : 'Inactive') + "\n            ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "body-2 mb-2"
  }, [_vm._v(_vm._s(_vm.getPromotionDescription()))]), _vm._v(" "), _c('div', {
    staticClass: "caption text--secondary"
  }, [_vm._v("\n            Valid: " + _vm._s(_vm.formatDate(_vm.formData.start_date)) + " -\n            " + _vm._s(_vm.formatDate(_vm.formData.end_date)) + "\n          ")]), _vm._v(" "), _vm.selectedCategoriesNames.length > 0 ? _c('div', {
    staticClass: "mt-2"
  }, [_c('div', {
    staticClass: "caption font-weight-medium"
  }, [_vm._v("Categories:")]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v("\n              " + _vm._s(_vm.selectedCategoriesNames.join(', ')) + "\n            ")])]) : _vm._e(), _vm._v(" "), _vm.selectedProductsNames.length > 0 ? _c('div', {
    staticClass: "mt-2"
  }, [_c('div', {
    staticClass: "caption font-weight-medium"
  }, [_vm._v("Products:")]), _vm._v(" "), _c('div', {
    staticClass: "caption"
  }, [_vm._v(_vm._s(_vm.selectedProductsNames.join(', ')))])]) : _vm._e()])], 1) : _vm._e(), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "mt-4",
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h6"
  }, [_vm._v("Debug Information")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c('div', [_c('strong', [_vm._v("Form Valid:")]), _vm._v(" " + _vm._s(_vm.valid))]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("Form Data:")])]), _vm._v(" "), _c('pre', [_vm._v(_vm._s(JSON.stringify(_vm.formData, null, 2)))]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("Validation Errors:")])]), _vm._v(" "), _vm._l(_vm.validationErrors, function (error) {
    return _c('div', {
      key: error.field
    }, [_vm._v("\n            " + _vm._s(error.field) + ": " + _vm._s(error.message) + "\n          ")]);
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-4"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey",
      "text": ""
    },
    on: {
      "click": _vm.handleClose
    }
  }, [_vm._v(" Cancel ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": _vm.saving,
      "disabled": !_vm.valid
    },
    on: {
      "click": _vm.handleSave
    }
  }, [_vm._v("\n      " + _vm._s(_vm.mode === 'create' ? 'Create Promotion' : 'Save Changes') + "\n    ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/promotions/PromotionDialog.vue?vue&type=template&id=2e2539ed&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/promotions/PromotionDialog.vue?vue&type=script&lang=js
/* harmony default export */ var PromotionDialogvue_type_script_lang_js = ({
  name: 'PromotionDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    promotion: {
      type: Object,
      default: null
    },
    mode: {
      type: String,
      default: 'create'
    }
  },
  data() {
    return {
      valid: false,
      saving: false,
      categories: [],
      products: [],
      loadingCategories: false,
      loadingProducts: false,
      validationErrors: [],
      formData: {
        name: '',
        code: '',
        type: '',
        description: '',
        start_date: '',
        end_date: '',
        is_active: true,
        priority: 1,
        max_uses: null,
        conditions: {}
      },
      promotionTypes: [{
        title: 'Buy X Get Y',
        value: 'buy_x_get_y',
        description: 'Customer gets free items when buying specified quantity',
        icon: 'mdi-gift',
        color: 'success'
      }, {
        title: 'Percentage Discount',
        value: 'percentage',
        description: 'Percentage discount on applicable items',
        icon: 'mdi-percent',
        color: 'primary'
      }, {
        title: 'Fixed Amount',
        value: 'fixed_amount',
        description: 'Fixed dollar amount discount',
        icon: 'mdi-currency-usd',
        color: 'warning'
      }, {
        title: 'Combo Deal',
        value: 'combo_deal',
        description: 'Special price for item combinations',
        icon: 'mdi-package-variant',
        color: 'info'
      }],
      nameRules: [v => !!v || 'Promotion name is required', v => v && v.length <= 255 || 'Name must be less than 255 characters'],
      codeRules: [v => !!v || 'Promotion code is required', v => v && v.length <= 50 || 'Code must be less than 50 characters', v => /^[A-Z0-9_-]+$/.test(v) || 'Code can only contain uppercase letters, numbers, underscores, and hyphens'],
      typeRules: [v => !!v || 'Promotion type is required'],
      startDateRules: [v => !!v || 'Start date is required'],
      priorityRules: [v => v >= 1 || 'Priority must be at least 1'],
      buyQuantityRules: [v => v > 0 || 'Must be greater than 0'],
      getQuantityRules: [v => v > 0 || 'Must be greater than 0'],
      discountPercentageRules: [v => v > 0 && v <= 100 || 'Must be between 1-100'],
      discountAmountRules: [v => v > 0 || 'Must be greater than 0']
    };
  },
  computed: {
    endDateRules() {
      return [v => !!v || 'End date is required', v => !this.formData.start_date || new Date(v) > new Date(this.formData.start_date) || 'End date must be after start date'];
    },
    selectedCategoriesNames() {
      var _this$formData$condit;
      if (!((_this$formData$condit = this.formData.conditions) !== null && _this$formData$condit !== void 0 && _this$formData$condit.applicable_categories) || !this.categories.length) return [];
      return this.categories.filter(cat => this.formData.conditions.applicable_categories.includes(cat.categ_id)).map(cat => cat.categ_name);
    },
    selectedProductsNames() {
      var _this$formData$condit2;
      if (!((_this$formData$condit2 = this.formData.conditions) !== null && _this$formData$condit2 !== void 0 && _this$formData$condit2.applicable_products) || !this.products.length) return [];
      return this.products.filter(prod => this.formData.conditions.applicable_products.includes(prod.id)).map(prod => prod.pro_name);
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        console.log('Dialog is showing, initializing form...');
        this.initializeForm();
        this.loadData();
      }
    },
    'formData.code'(newVal) {
      if (newVal) {
        this.formData.code = newVal.toUpperCase();
      }
    },
    valid(newVal) {
      console.log('Form validation changed:', newVal);
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    debugFieldValidation(fieldName, value) {
      console.log(`Field ${fieldName} validation:`, {
        value,
        valid: this.valid,
        formData: this.formData
      });
    },
    initializeForm() {
      console.log('Initializing form with mode:', this.mode);
      console.log('Promotion data:', this.promotion);
      if (this.mode === 'edit' && this.promotion) {
        this.formData = {
          ...this.promotion,
          start_date: this.formatDateTimeLocal(this.promotion.start_date),
          end_date: this.formatDateTimeLocal(this.promotion.end_date),
          conditions: {
            ...this.promotion.conditions
          }
        };
      } else {
        this.formData = {
          name: '',
          code: '',
          type: '',
          description: '',
          start_date: this.getDefaultStartDate(),
          end_date: this.getDefaultEndDate(),
          is_active: true,
          priority: 1,
          max_uses: null,
          conditions: {}
        };
      }
      console.log('Form initialized with data:', this.formData);
    },
    getDefaultStartDate() {
      const now = new Date();
      return now.toISOString().slice(0, 16);
    },
    getDefaultEndDate() {
      const future = new Date();
      future.setMonth(future.getMonth() + 1);
      return future.toISOString().slice(0, 16);
    },
    async loadData() {
      await Promise.all([this.loadCategories(), this.loadProducts()]);
    },
    async loadCategories() {
      this.loadingCategories = true;
      try {
        const response = await this.$axios.get('/api/category/find');
        this.categories = (response.data || []).filter(cat => cat.isActive);
        console.log('Categories loaded for promotion:', this.categories.length);
      } catch (error) {
        console.warn('Could not fetch categories for promotion:', error);
        this.categories = [];
      } finally {
        this.loadingCategories = false;
      }
    },
    async loadProducts() {
      this.loadingProducts = true;
      try {
        const response = await this.$axios.get('/api/product/find');
        const productData = response.data.data || response.data;
        this.products = productData.filter(product => product.isActive).map(product => ({
          ...product,
          id: product.id
        }));
        console.log('Products loaded for promotion:', this.products.length);
      } catch (error) {
        console.warn('Could not fetch products for promotion:', error);
        this.products = [];
      } finally {
        this.loadingProducts = false;
      }
    },
    onTypeChange(type) {
      console.log('Type changed to:', type);
      if (type === 'buy_x_get_y') {
        this.formData.conditions = {
          buy_quantity: 2,
          get_quantity: 1,
          applicable_categories: [],
          applicable_products: [],
          max_free_items: null
        };
      } else if (type === 'percentage') {
        this.formData.conditions = {
          discount_percentage: 10,
          max_discount_amount: null,
          minimum_order: null,
          applicable_categories: [],
          applicable_products: []
        };
      } else if (type === 'fixed_amount') {
        this.formData.conditions = {
          discount_amount: 5,
          minimum_order: null,
          applicable_categories: [],
          applicable_products: []
        };
      } else if (type === 'combo_deal') {
        this.formData.conditions = {
          required_items: [],
          combo_price: null,
          applicable_categories: [],
          applicable_products: []
        };
      }
      console.log('Conditions set to:', this.formData.conditions);
    },
    getPromotionDescription() {
      if (!this.formData.type || !this.formData.conditions) return '';
      const conditions = this.formData.conditions;
      switch (this.formData.type) {
        case 'buy_x_get_y':
          return `Buy ${conditions.buy_quantity || 0}, get ${conditions.get_quantity || 0} free`;
        case 'percentage':
          return `${conditions.discount_percentage || 0}% discount${conditions.max_discount_amount ? ` (max $${conditions.max_discount_amount})` : ''}`;
        case 'fixed_amount':
          return `$${conditions.discount_amount || 0} off${conditions.minimum_order ? ` on orders over $${conditions.minimum_order}` : ''}`;
        case 'combo_deal':
          return 'Special combo pricing';
        default:
          return '';
      }
    },
    getTypeIcon(type) {
      const typeObj = this.promotionTypes.find(t => t.value === type);
      return typeObj ? typeObj.icon : 'mdi-tag';
    },
    getTypeColor(type) {
      const typeObj = this.promotionTypes.find(t => t.value === type);
      return typeObj ? typeObj.color : 'grey';
    },
    formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString();
    },
    formatDateTimeLocal(date) {
      if (!date) return '';
      const d = new Date(date);
      return d.toISOString().slice(0, 16);
    },
    async handleSave() {
      console.log('=== SAVE BUTTON CLICKED ===');
      console.log('Current form valid state:', this.valid);
      console.log('Current form data:', JSON.stringify(this.formData, null, 2));

      // Manual validation check
      console.log('Running manual validation...');
      const validationResults = await this.validateForm();
      console.log('Manual validation results:', validationResults);

      // Try the form validation
      console.log('Running form.validate()...');
      try {
        if (this.$refs.form && this.$refs.form.validate) {
          const formValidation = await this.$refs.form.validate();
          console.log('Form validation result:', formValidation);

          // Fix: Check the validation result properly
          // In Vuetify 2, validate() returns a boolean
          // In Vuetify 3, validate() returns an object with { valid: boolean }
          let isValid = false;
          if (typeof formValidation === 'boolean') {
            isValid = formValidation;
          } else if (formValidation && typeof formValidation.valid === 'boolean') {
            isValid = formValidation.valid;
          }
          console.log('Processed validation result:', isValid);
          if (!isValid) {
            console.log('Form is not valid, stopping save');
            return;
          }
        } else {
          console.warn('Form ref not available or validate method missing');
          // Fallback to manual validation
          if (!validationResults.valid) {
            console.log('Manual validation failed, stopping save');
            return;
          }
        }
      } catch (error) {
        console.error('Error during form validation:', error);
        return;
      }
      this.saving = true;
      console.log('Proceeding with save...');
      try {
        const saveData = {
          ...this.formData,
          start_date: new Date(this.formData.start_date).toISOString(),
          end_date: new Date(this.formData.end_date).toISOString()
        };
        console.log('Save data prepared:', JSON.stringify(saveData, null, 2));
        this.$emit('save', saveData);
      } catch (error) {
        console.error('Error saving promotion:', error);
      } finally {
        this.saving = false;
      }
    },
    async validateForm() {
      const errors = [];

      // Check required fields
      if (!this.formData.name) {
        errors.push({
          field: 'name',
          message: 'Name is required'
        });
      }
      if (!this.formData.code) {
        errors.push({
          field: 'code',
          message: 'Code is required'
        });
      }
      if (!this.formData.type) {
        errors.push({
          field: 'type',
          message: 'Type is required'
        });
      }
      if (!this.formData.start_date) {
        errors.push({
          field: 'start_date',
          message: 'Start date is required'
        });
      }
      if (!this.formData.end_date) {
        errors.push({
          field: 'end_date',
          message: 'End date is required'
        });
      }

      // Type-specific validation
      if (this.formData.type === 'buy_x_get_y') {
        if (!this.formData.conditions.buy_quantity || this.formData.conditions.buy_quantity <= 0) {
          errors.push({
            field: 'buy_quantity',
            message: 'Buy quantity must be greater than 0'
          });
        }
        if (!this.formData.conditions.get_quantity || this.formData.conditions.get_quantity <= 0) {
          errors.push({
            field: 'get_quantity',
            message: 'Get quantity must be greater than 0'
          });
        }
      }
      if (this.formData.type === 'percentage') {
        if (!this.formData.conditions.discount_percentage || this.formData.conditions.discount_percentage <= 0 || this.formData.conditions.discount_percentage > 100) {
          errors.push({
            field: 'discount_percentage',
            message: 'Discount percentage must be between 1-100'
          });
        }
      }
      if (this.formData.type === 'fixed_amount') {
        if (!this.formData.conditions.discount_amount || this.formData.conditions.discount_amount <= 0) {
          errors.push({
            field: 'discount_amount',
            message: 'Discount amount must be greater than 0'
          });
        }
      }
      this.validationErrors = errors;
      return {
        valid: errors.length === 0,
        errors
      };
    },
    handleClose() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/promotions/PromotionDialog.vue?vue&type=script&lang=js
 /* harmony default export */ var promotions_PromotionDialogvue_type_script_lang_js = (PromotionDialogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/promotions/PromotionDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(733)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  promotions_PromotionDialogvue_type_script_lang_js,
  PromotionDialogvue_type_template_id_2e2539ed_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "2e2539ed",
  "788bbb82"
  
)

/* harmony default export */ var PromotionDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=promotions-promotion-dialog.js.map