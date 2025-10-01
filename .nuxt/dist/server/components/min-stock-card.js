exports.ids = [87,45,46,110,113,114,217,282];
exports.modules = {

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(403);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 403:
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

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(407);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b5d4dc6", content, true)

/***/ }),

/***/ 407:
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

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(388);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34&








var DialogClassicMessagevue_type_template_id_3accbb34_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h5 grey lighten-2"
  }, [_vm._v(" ຂໍ້ຄວາມ ")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm._v("\n    " + _vm._s(_vm.message) + "\n  ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_vm._v(" ຕົກລົງ ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=template&id=3accbb34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DialogClassicMessage.vue?vue&type=script&lang=js&
/* harmony default export */ var DialogClassicMessagevue_type_script_lang_js_ = ({
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleDialog() {
      this.$emit('closedialog');
    }
  }
});
// CONCATENATED MODULE: ./components/DialogClassicMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DialogClassicMessagevue_type_script_lang_js_ = (DialogClassicMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DialogClassicMessage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DialogClassicMessagevue_type_script_lang_js_,
  DialogClassicMessagevue_type_template_id_3accbb34_render,
  staticRenderFns,
  false,
  null,
  null,
  "cf974660"
  
)

/* harmony default export */ var DialogClassicMessage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      imagesPreviewURL: [],
      files: []
    };
  },
  methods: {
    onFilesChange(payload) {
      const file = payload; // in case vuetify file input
      this.files = payload;
      if (file) {
        console.log('FILE LEN: ' + file.length);
        for (let i = 0; i < file.length; i++) {
          this.imagesPreviewURL.push({
            IMG_URL: URL.createObjectURL(file[i]),
            NAME: file[i].name,
            isvalid: this.sizeValidate(file[i].size)
          });
        }
        // URL.revokeObjectURL(file) // free memory
      } else {
        this.imagesPreviewURL = null;
      }
    },
    deleteFile(idx) {
      this.imagesPreviewURL.splice(idx, 1);
      this.files.splice(idx, 1);
    },
    sizeValidate(z) {
      console.log('SIZE' + z);
      const maxSize = 20000000;
      if (z > maxSize) {
        return `Max size is ${maxSize / 1000}Kb`;
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(346)["URL"]))

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(406);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
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

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(434);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("1c8f4490", content, true)

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:\"\";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-bottom-right-radius:inherit;border-top-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-bottom:8px;padding-top:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:\"\";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(436);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 436:
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

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(392);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(398);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(347);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(388);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PriceListForm.vue?vue&type=template&id=0f4cd630&



















var PriceListFormvue_type_template_id_0f4cd630_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_c(components_VCard["d" /* VCardTitle */], [_c(VChip["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "color": "primary",
      "label": "",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "start": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n        ຈັດການ ລາຍການລາຄາ\n      ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ລະຫັດສິນຄ້າ",
      "disabled": ""
    },
    model: {
      value: _vm.form.productId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "productId", $$v);
      },
      expression: "form.productId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* Name",
      "required": "",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.name,
      callback: function ($$v) {
        _vm.$set(_vm.form, "name", $$v);
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.grades,
      "label": "Grade *"
    },
    model: {
      value: _vm.form.grade,
      callback: function ($$v) {
        _vm.$set(_vm.form, "grade", $$v);
      },
      expression: "form.grade"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "* ລາຄາ",
      "required": "",
      "rules": _vm.nameRules
    },
    model: {
      value: _vm.form.amount,
      callback: function ($$v) {
        _vm.$set(_vm.form, "amount", $$v);
      },
      expression: "form.amount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency*"
    },
    model: {
      value: _vm.form.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "currencyId", $$v);
      },
      expression: "form.currencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.type,
      "label": "ຮູບແບບລາຄາ",
      "required": ""
    },
    model: {
      value: _vm.form.type,
      callback: function ($$v) {
        _vm.$set(_vm.form, "type", $$v);
      },
      expression: "form.type"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VCheckbox["a" /* default */], {
    attrs: {
      "label": "Is Active"
    },
    model: {
      value: _vm.form.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.form, "isActive", _vm._n($$v));
      },
      expression: "form.isActive"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": _vm.commitRecord
    }
  }, [_vm._v("\n              ເພີ່ມ\n            ")])], 1)], 1)], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")]), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.entries
    },
    scopedSlots: _vm._u([{
      key: `item.id`,
      fn: function ({
        item,
        index
      }) {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "warning",
            "text": ""
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item, index);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-trash"
        })])];
      }
    }, {
      key: `item.name`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n          " + _vm._s(item.name) + " [ " + _vm._s(item.grade) + " ]\n        ")];
      }
    }, {
      key: `item.amount`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n          " + _vm._s(_vm.formatNumber(item.amount)) + "\n        ")];
      }
    }], null, true)
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "rounded": "",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n        Close\n      ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PriceListForm.vue?vue&type=template&id=0f4cd630&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PriceListForm.vue?vue&type=script&lang=js&


/* harmony default export */ var PriceListFormvue_type_script_lang_js_ = ({
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
      grades: ['A', 'B', 'C', 'D', 'E', 'F'],
      search: '',
      form: {
        grade: '',
        productId: '',
        id: null,
        name: '',
        amount: 0,
        type: 'Price',
        currencyId: 1,
        isActive: true
      },
      type: ['Price', 'Percent'],
      entries: [],
      headers: [{
        text: 'Name',
        align: 'end',
        value: 'name',
        sortable: false
      }, {
        text: 'ລາຄາ',
        align: 'end',
        value: 'amount',
        sortable: false
      }, {
        text: 'ສູດຄິດໄລ່',
        align: 'end',
        value: 'type',
        sortable: false
      }, {
        text: 'ລົບ',
        align: 'end',
        value: 'id',
        sortable: false
      }],
      isloading: false,
      nameRules: [value => !!value || 'Name is required', value => value && value.length <= 150 || 'Name must be less than 20 characters']
    };
  },
  async created() {
    this.form.productId = this.recordId;
    this.loadEntry();
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['addProductPricesToCreate', 'deleteProductPricesToCreate']),
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        if (this.recordId == 0) {
          let localForm = {
            ...this.form
          };
          this.addProductPricesToCreate(localForm);
          console.log(`Item to create ${this.findAllProductPriceListToCreate.length}`);
          return;
        }
        this.isloading = true;
        let api = 'api/priceList/create';
        console.log('API => ', api);
        try {
          const response = await this.$axios.post(api, this.form);
          console.log(`Load data ${JSON.stringify(response)}`);
          await this.loadEntry();
          Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction completed');
        } catch (error) {
          return Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
        this.isloading = false;
      }
    },
    async deleteItem(item, idx) {
      if (this.recordId == 0) {
        this.deleteProductPricesToCreate(idx);
        return;
      }
      if (!this.isloading) {
        // Implement form submission logic here
        this.isloading = true;
        let api = `api/priceList/find/${item.id}`;
        console.log('API => ', api);
        try {
          const response = await this.$axios.delete(api);
          console.log(`Load data `);
          await this.loadEntry();
          Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'Your transaction has been deleted');
        } catch (error) {
          return Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        }
        this.isloading = false;
      }
    },
    async loadEntry() {
      console.log(`Loading data .... ${this.recordId}`);
      if (this.recordId == 0) {
        this.entries = this.findAllProductPriceListToCreate;
        return;
      }
      try {
        const response = await this.$axios.get(`api/priceList/findByProductId/${this.recordId}`);
        console.warn(`RESPONSE DATA ${JSON.stringify(response.data)}`);
        this.entries = response.data;
      } catch (error) {
        console.log('Cannot fetch data ' + error);
        return Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
      }
    },
    refreshData() {
      this.$emit('reload-data');
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllProductPriceListToCreate', 'findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency'])
  }
});
// CONCATENATED MODULE: ./components/PriceListForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PriceListFormvue_type_script_lang_js_ = (PriceListFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/PriceListForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PriceListFormvue_type_script_lang_js_,
  PriceListFormvue_type_template_id_0f4cd630_render,
  staticRenderFns,
  false,
  null,
  null,
  "23382228"
  
)

/* harmony default export */ var PriceListForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default})


/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(388);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=template&id=5419c5a1&






var DiaImagevue_type_template_id_5419c5a1_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], [_c(VImg["a" /* default */], {
    attrs: {
      "src": _vm.iUrl || 'No image'
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "variant": "text",
      "rounded": ""
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.$emit('closeDia');
      }
    }
  }, [_vm._v("\n      Close\n    ")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=template&id=5419c5a1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DiaImage.vue?vue&type=script&lang=js&
/* harmony default export */ var DiaImagevue_type_script_lang_js_ = ({
  props: ['iUrl']
});
// CONCATENATED MODULE: ./components/DiaImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DiaImagevue_type_script_lang_js_ = (DiaImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/DiaImage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DiaImagevue_type_script_lang_js_,
  DiaImagevue_type_template_id_5419c5a1_render,
  staticRenderFns,
  false,
  null,
  null,
  "f6f6a7dc"
  
)

/* harmony default export */ var DiaImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _pages_product_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(464);
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(365);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_4__);
// import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/util/myUtil'





// import { Logger } from 'html2canvas/dist/types/core/logger'
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    headerId: {
      type: Number,
      default: null
    }
  },
  middleware: 'auths',
  mixins: [_pages_product_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]],
  computed: {
    // ✅ ADD: Tax rate options for dropdown
    taxRateOptions() {
      return this.taxRates.map(tax => ({
        id: tax.id,
        name: tax.name,
        code: tax.code,
        rate: tax.rate,
        displayRate: (parseFloat(tax.rate) * 100).toFixed(2) + '%',
        displayText: `${tax.name} (${(parseFloat(tax.rate) * 100).toFixed(2)}%)`,
        description: tax.description,
        isDefault: tax.isDefault,
        isActive: tax.isActive
      }));
    },
    // ✅ ADD: Get selected tax rate details
    selectedTaxRate() {
      return this.taxRates.find(tax => tax.id === this.formData.taxId);
    },
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit;
    },
    host() {
      return Object(_common_api__WEBPACK_IMPORTED_MODULE_2__[/* hostName */ "a"])();
    },
    barcode2by2cm() {
      const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <style>
        @font-face {
          font-family: 'DM Sans';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
        * {
          font-family: 'DM Sans';
        }
      </style>
    </head>
    <body>
      <div style="text-align: center;">
        <table style="width: 200px; text-align: center;">
          <tr>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${this.formatNumber(this.formData.pro_price)}
              <img src="${this.barcodeImage}">
            </td>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${this.formatNumber(this.formData.pro_price)}
              <img src="${this.barcodeImage}">
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `;
      return html;
    },
    barcode3by2cm() {
      const html = `
      <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
              <div style="text-align: center;">
      <table style="width: 200px; text-align: center;" >
  <tr>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
      <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
       
    </td>
  
  </tr>
</table>
</div>
</body>
            </html>
`;
      return html;
    },
    barcodeNormal() {
      const html = `
          <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
                <div style="text-align: center;">
                    <table style="width: 200px; text-align: center;" >
                        <tr>
                          <td style="width: 500px; height: 15px;font-size:8px;">
                            ລາຄາ:${this.formatNumber(this.formData.pro_price)}
                            </br>
                            <img src="${this.barcodeImage}">
                          </td>               
                        </tr>
                      </table>
                </div>
            </body>
            </html>
        `;
      return html;
    }
  },
  async mounted() {
    console.log('FORMDATA ID: ' + this.formData.pro_id);
    this.pro_id = this.headerId;
    this.formData.pro_id = this.headerId;
    console.log('Mounted: ');
    this.fetchProId(this.headerId);
    this.fetchCategory();
    this.fetchCompany();
    // ✅ ADD: Load tax rates
    await this.fetchTaxRates();
  },
  watch: {
    // ✅ ADD: Watch for tax rate changes
    'formData.taxId'(newTaxId) {
      this.onTaxRateChange();
    },
    // ✅ ADD: Watch for price changes to update tax calculations
    'formData.pro_price'() {
      // Tax calculations will automatically update due to computed properties
    }
  },
  validate(data) {
    // this.formData.pro_id = data.params.id
    console.log('MIXIN ID: ' + data.params.id);
    console.log('PRO DEFUALT ID: ' + this.pro_id);
    return /^\d+$/.test(data.params.id);
  },
  data() {
    return {
      priceListFormKey: 1,
      pricingRecordId: null,
      priceListDialog: false,
      threeColPaper: false,
      barcodeValue: '',
      imagesPreviewURL: [],
      files: null,
      IMG_URL: '',
      NAME: '',
      barcodeImage: '',
      rules: {
        taxRule: [v => !!v || 'ກະລຸນາເລືອກອັດຕາພາສີ (Please select tax rate)'],
        nameRule: [v => !!v || 'ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ ', v => v && v.length <= 150 || 'ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ'],
        priceRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        v => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວນ > 0', v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        minRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        // (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        costPrice: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາຕົ້ນທຶນ',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        retailRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ເປີເຊັນ ສ່ວນຫລຸດ ສຳລັບຂາຍສົ່ງ',
        v => +v >= 0 || 'ກະລຸນ ໃສ່ເປີເຊັນ > 0', v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        imageRule: [files => {
          let fileSize = 0;
          let totalSize = 0;
          if (files) {
            files.forEach(el => {
              fileSize += el.size;
              console.log('Size: ' + el.size);
            });
            totalSize = fileSize / files.length;
            console.log('File size: aaa' + files.length + ' Each: ' + totalSize || false);
          } else {
            console.log('File: ' + files);
          }
          console.log('Total: ' + totalSize);
          return totalSize < 2000000 || 'ຂະຫນາດເກີນ';
        }]
      },
      preview: false,
      previewSrc: null,
      title: 'ຈັດການສິນຄ້າ',
      valid: false,
      category: [],
      // ✅ ADD: Tax-related data
      taxRates: [],
      loadingTaxRates: false,
      // ✅ UPDATE: Add taxId to formData
      formData: {
        productId: null,
        pro_category: 1001,
        pro_id: null,
        pro_name: '',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: false,
        companyId: 2,
        pro_cost_price: 0,
        minStock: 0,
        barCode: '',
        receiveUnitId: 1,
        stockUnitId: 1,
        saleCurrencyId: 1,
        costCurrencyId: 1,
        isActive: true,
        vendorName: '',
        taxId: null // ✅ NEW: Tax ID field
      },

      companyList: [],
      isLoading: false,
      validLocal: true,
      diaMessageTitle: 'ຄຳເຕືອນ',
      diaMessageBody: 'ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ',
      pro_id: null,
      dia_confirm: false,
      tempImgId: null
      // formData: {}
    };
  },

  methods: {
    fetchData() {},
    triggerPriceListForm() {
      this.pricingRecordId = this.formData.productId;
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    formatNumber(val) {
      return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* getFormatNum */ "e"])(val);
    },
    generateBarcode() {
      // Generate a random 12-digit number as the barcode value
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 1000000000;
      // Use jsbarcode library to generate the barcode SVG image
      // Get the canvas element
      let canvas = document.createElement('canvas');
      // canvas.width = 20 // Approximation for 3cm at 96dpi
      // canvas.height = 20 // Approximation for 2cm at 96dpi
      jsbarcode__WEBPACK_IMPORTED_MODULE_4___default()(canvas, barcodeValue.toString(), {
        format: 'code128',
        displayValue: true,
        fontSize: 10
        // margin: 5,
        // width: 30, // Match canvas width
        // height: 20, // Match canvas height
      });

      this.formData.barCode = barcodeValue.toString();
      this.generateBarcodeImage(barcodeValue);
    },
    generateBarcodeImage(barcodeValue) {
      // Get the canvas element using the ref attribute
      if (!barcodeValue) return;
      let canvas = this.$refs.barcodeCanvas;
      console.log(`.....Canvas logger.....`);
      console.log(canvas);
      console.log(canvas.width, canvas.height);
      // Set the canvas width and height to match the paper size
      // canvas.width = 20
      // canvas.height = 10
      // Generate the barcode image using JsBarcode
      jsbarcode__WEBPACK_IMPORTED_MODULE_4___default()(canvas, barcodeValue, {
        format: 'code128',
        displayValue: true,
        fontSize: 12,
        // margin: 10
        width: 1,
        // Match canvas width
        height: 13 // Match canvas height 35
      });

      // Convert the canvas to a data URL and set it as the barcodeImage data property
      this.barcodeImage = canvas.toDataURL();
    },
    validateLocal() {
      console.log('VALIDATING...');
      this.$refs.formLocal.validate();
    },
    async fetchCategory() {
      this.isLoading = true;
      await this.$axios.get('category_f').then(res => {
        console.log('=>category' + res.data);
        this.category = res.data.map(el => {
          return {
            categ_id: el.categ_id,
            categ_name: el.categ_name,
            categ_desc: el.categ_desc
          };
        });
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isLoading = false;
    },
    async fetchCompany() {
      this.isLoading = true;
      await this.$axios.get('api/company/find').then(res => {
        console.log('=>Company' + res.data);
        this.companyList = res.data.map(el => {
          return {
            id: el.id,
            name: el.name
          };
        });
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isLoading = false;
    },
    previewImg(url) {
      console.warn(`image preview ${url}`);
      this.previewSrc = url;
      this.preview = true;
    },
    onFilesChange(payload) {
      const file = payload; // in case vuetify file input
      this.files = payload;
      if (file) {
        for (let i = 0; i < file.length; i++) {
          this.imagesPreviewURL.push({
            IMG_URL: URL.createObjectURL(file[i]),
            NAME: file[i].name,
            isvalid: this.sizeValidate(file[i].size)
          });
        }
        // URL.revokeObjectURL(file) // free memory
      } else {
        this.imagesPreviewURL = null;
      }
    },
    deleteFile(idx) {
      this.imagesPreviewURL.splice(idx, 1);
      this.files.splice(idx, 1);
      this.deleteFileFrServ(idx);
    },
    sizeValidate(z) {
      console.log('SIZE' + z);
      const maxSize = 20000000;
      if (z > maxSize) {
        return `Max size is ${maxSize / 1000}Kb`;
      }
    },
    async deleteFileFrServ(idx) {
      //   v && this.deleteFileFrServ'

      Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* confirmSwal */ "a"])(this.$swal, 'warning', async () => {
        console.log('Delete record function');
        this.isLoading = true;
        await this.$axios.post('/unlink_file', {
          img_name: this.formData.pro_image[idx].name
        }).then(res => {
          res.data === 'Transaction completed' && this.formData.pro_image.splice(idx, 1);
          // this.message = res.data
          Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "k"])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        }).catch(er => {
          this.message = er.error;
        });
        this.isLoading = false;
      });
    },
    printBarcode() {
      const windowContent = this.threeColPaper ? this.barcode2by2cm : this.barcodeNormal;
      const printWin = window.open('', '', 'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0');
      printWin.document.open();
      printWin.document.write(windowContent);
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 1000);
    },
    // ✅ ADD: Fetch tax rates from API
    async fetchTaxRates() {
      this.loadingTaxRates = true;
      try {
        const response = await this.$axios.get('/api/tax/active');
        this.taxRates = response.data.data || [];

        // Set default tax rate if no tax is selected and we have a default
        if (!this.formData.taxId) {
          const defaultTax = this.taxRates.find(tax => tax.isDefault);
          if (defaultTax) {
            this.formData.taxId = defaultTax.id;
          }
        }
        console.log('Tax rates loaded:', this.taxRates);
      } catch (error) {
        var _this$$toast, _this$$toast$error;
        console.error('Error loading tax rates:', error);
        // Show user-friendly error message
        ((_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : (_this$$toast$error = _this$$toast.error) === null || _this$$toast$error === void 0 ? void 0 : _this$$toast$error.call(_this$$toast, 'Failed to load tax rates')) || console.error('Failed to load tax rates');
      } finally {
        this.loadingTaxRates = false;
      }
    },
    // ✅ ADD: Calculate tax amount
    calculateTaxAmount() {
      if (!this.selectedTaxRate || !this.formData.pro_price) {
        return 0;
      }
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxRate = parseFloat(this.selectedTaxRate.rate) || 0;
      return basePrice * taxRate;
    },
    // ✅ ADD: Calculate total with tax
    calculateTotalWithTax() {
      const basePrice = parseFloat(this.formData.pro_price) || 0;
      const taxAmount = this.calculateTaxAmount();
      return basePrice + taxAmount;
    },
    // ✅ UPDATE: Modified fetchProId to include tax data
    async fetchProId(id) {
      this.isLoading = true;
      console.log('FECT ID:' + id);
      await this.$axios.post('/product_f_id', {
        proid: id
      }).then(res => {
        console.log('Product ID ' + res.data);
        const el = res.data[0];
        console.log('===> Min stock', el.minStock);
        const image = res.data[0].img_name == null ? [] : res.data.map(el => {
          return {
            name: el.img_name,
            path: el.img_path
          };
        });
        this.formData = {
          productId: el.id,
          pro_category: el.pro_category,
          pro_id: el.pro_id,
          pro_name: el.pro_name,
          pro_price: el.pro_price,
          pro_desc: el.pro_desc,
          pro_status: el.pro_status === 1 || false,
          pro_retail_price: el.retail_cost_percent,
          pro_cost_price: el.cost_price,
          companyId: el.companyId,
          minStock: el.minStock,
          barCode: el.barCode,
          receiveUnitId: el.receiveUnitId,
          stockUnitId: el.stockUnitId,
          costCurrencyId: el.costCurrencyId,
          saleCurrencyId: el.saleCurrencyId,
          pro_image: image,
          isActive: el.isActive,
          vendorName: el.vendorName,
          taxId: el.taxId || null // ✅ ADD: Load existing tax ID
        };

        // Set default tax if none is assigned
        if (!this.formData.taxId && this.taxRates.length > 0) {
          const defaultTax = this.taxRates.find(tax => tax.isDefault);
          if (defaultTax) {
            this.formData.taxId = defaultTax.id;
          }
        }
        if (!this.formData.barCode) {
          this.formData.barCode = '';
        }
        this.generateBarcodeImage(this.formData.barCode);
      }).catch(er => {
        console.log('Error: ' + er);
        this.message = er;
      });
      this.isLoading = false;
    },
    // ✅ UPDATE: Modified uploadFilesLocal to include tax data
    async uploadFilesLocal() {
      console.log('===> Upload data');
      if (!this.$refs.formLocal.validate()) {
        return;
      }

      // ✅ ADD: Validate tax selection
      // if (!this.formData.taxId) {
      //   this.$toast?.error?.('Please select a tax rate') ||
      //     console.error('Please select a tax rate')
      //   return
      // }

      this.isLoading = true;
      const formData = new FormData();

      // ✅ ADD: Include tax information in the form data
      const formDataWithTax = {
        ...this.formData,
        // Add tax calculation details for backend reference
        selectedTaxRate: this.selectedTaxRate ? {
          id: this.selectedTaxRate.id,
          name: this.selectedTaxRate.name,
          code: this.selectedTaxRate.code,
          rate: this.selectedTaxRate.rate
        } : null,
        calculatedTaxAmount: this.calculateTaxAmount(),
        totalWithTax: this.calculateTotalWithTax()
      };
      formData.append('FORM', JSON.stringify(formDataWithTax));
      if (this.files) {
        this.files.forEach(element => {
          formData.append('files', element);
        });
      }
      await this.$axios.post('uploadmulti_update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        this.$emit('close-dialog');
        this.$emit('refresh');
        Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalSuccess */ "k"])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
      }).catch(er => {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* swalError2 */ "j"])(this.$swal, 'Error', er.response.data);
      });
      this.isLoading = false;
    },
    // ✅ ADD: Helper method to refresh tax rates
    async refreshTaxRates() {
      await this.fetchTaxRates();
    },
    // ✅ ADD: Method to handle tax rate changes
    onTaxRateChange() {
      // You can add additional logic here when tax rate changes
      // For example, recalculate prices, validate, etc.
      console.log('Tax rate changed to:', this.selectedTaxRate);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(346)["URL"]))

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
// Extensions

/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].extend({
  name: 'button-group',
  provide() {
    return {
      btnToggle: this
    };
  },
  computed: {
    classes() {
      return _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].options.computed.classes.call(this);
    }
  },
  methods: {
    // Isn't being passed down through types
    genData: _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].options.methods.genData
  }
}));

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(444);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("735d40bc", content, true)

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;max-width:0;opacity:0;pointer-events:none;position:absolute;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(462);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("50dc497a", content, true, context)
};

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(466);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("40eaee43", content, true, context)
};

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(468);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("42f082f5", content, true, context)
};

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/mixins/ImagePreviewMixin.vue?vue&type=script&lang=js&
var ImagePreviewMixinvue_type_script_lang_js_ = __webpack_require__(429);

// CONCATENATED MODULE: ./pages/admin/product/mixins/ImagePreviewMixin.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_ImagePreviewMixinvue_type_script_lang_js_ = (ImagePreviewMixinvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/product/mixins/ImagePreviewMixin.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_ImagePreviewMixinvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1af9f9d8"
  
)

/* harmony default export */ var ImagePreviewMixin = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(454);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e8a466fa", content, true)

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{border-radius:50%;outline:none;padding:.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(456);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("09e1a384", content, true)

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-bottom-left-radius:inherit;border-top-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-bottom-right-radius:inherit;border-top-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-bottom-left-radius:inherit;border-top-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-height:0;min-width:48px}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(392);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js
var VBtnToggle = __webpack_require__(479);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(347);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(469);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(388);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(460);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=template&id=2f8e35d1&scoped=true&






















var ProductFormCreatevue_type_template_id_2f8e35d1_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "300px",
      "persistent": ""
    },
    model: {
      value: _vm.dialogMessage,
      callback: function ($$v) {
        _vm.dialogMessage = $$v;
      },
      expression: "dialogMessage"
    }
  }, [_c('dialog-classic-message', {
    attrs: {
      "message": _vm.message
    },
    on: {
      "closedialog": function ($event) {
        _vm.message = null;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
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
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "width": "400px"
    },
    model: {
      value: _vm.preview,
      callback: function ($$v) {
        _vm.preview = $$v;
      },
      expression: "preview"
    }
  }, [_c('dia-image', {
    attrs: {
      "i-url": _vm.previewSrc
    },
    on: {
      "closeDia": function ($event) {
        _vm.preview = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800px"
    },
    model: {
      value: _vm.priceListDialog,
      callback: function ($$v) {
        _vm.priceListDialog = $$v;
      },
      expression: "priceListDialog"
    }
  }, [_c('price-list-form', {
    key: _vm.priceListFormKey,
    attrs: {
      "record-id": _vm.pricingRecordId
    },
    on: {
      "close-dialog": function ($event) {
        _vm.priceListDialog = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n        " + _vm._s(_vm.title) + "\n      ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VForm["a" /* default */], {
    ref: "form",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.companyList,
      "label": "ຮ້ານ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.companyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "companyId", $$v);
      },
      expression: "formData.companyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "categ_name",
      "item-value": "categ_id",
      "items": _vm.category,
      "label": "ປະເພດສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_category", $$v);
      },
      expression: "formData.pro_category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "value": _vm.formData.pro_id || '1XXX',
      "label": "ໄອດີສິນຄ້າ",
      "disabled": "",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_name", $$v);
      },
      expression: "formData.pro_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.priceRule,
      "label": "ລາຄາ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_price", $$v);
      },
      expression: "formData.pro_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.priceRule,
      "label": "ຕົ້ນທຶນ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_cost_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_cost_price", $$v);
      },
      expression: "formData.pro_cost_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.saleCurrencyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "saleCurrencyId", $$v);
      },
      expression: "formData.saleCurrencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ລາຄາສົ່ງ %",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_retail_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_retail_price", $$v);
      },
      expression: "formData.pro_retail_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.minStock,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "minStock", $$v);
      },
      expression: "formData.minStock"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VFileInput["a" /* default */], {
    ref: "filesfield",
    attrs: {
      "multiple": "",
      "accept": "image/png, image/jpeg, image/bmp",
      "label": "ຮູບພາບ",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "prepend-icon": "",
      "prepend-inner-icon": "mdi-camera"
    },
    on: {
      "change": _vm.onFilesChange
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Barcode",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍຮັບ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.receiveUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "receiveUnitId", $$v);
      },
      expression: "formData.receiveUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍສາງ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.stockUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "stockUnitId", $$v);
      },
      expression: "formData.stockUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Vendor",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.vendorName,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "vendorName", $$v);
      },
      expression: "formData.vendorName"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ຄຳອະທິບາຍ",
      "rows": "2",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "no-resize": ""
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "dense": "",
      "hide-details": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "isActive", _vm._n($$v));
      },
      expression: "formData.isActive"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VBtn["a" /* default */], {
    staticStyle: {
      "margin-top": "8px"
    },
    attrs: {
      "small": "",
      "color": "primary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": _vm.triggerPriceListForm
    }
  }, [_vm._v("\n              ຈັດການລາຄາ\n            ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "outlined": ""
    }
  }, [_c('canvas', {
    ref: "barcodeCanvas",
    staticStyle: {
      "max-width": "100%",
      "height": "auto"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-center text-caption mt-1"
  }, [_vm._v("\n                ລາຄາ: " + _vm._s(_vm.formatNumber(_vm.formData.pro_price)) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "text-center mt-1"
  }, [_c(VBtnToggle["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length > 0,
      "color": "primary"
    },
    on: {
      "click": _vm.generateBarcode
    }
  }, [_vm._v("\n                    Generate\n                  ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length == 0,
      "color": "success"
    },
    on: {
      "click": _vm.printBarcode
    }
  }, [_vm._v("\n                    Print\n                  ")])], 1), _vm._v(" "), _c(VCheckbox["a" /* default */], {
    staticClass: "mt-1",
    attrs: {
      "label": "3Col",
      "dense": "",
      "hide-details": ""
    },
    model: {
      value: _vm.threeColPaper,
      callback: function ($$v) {
        _vm.threeColPaper = _vm._n($$v);
      },
      expression: "threeColPaper"
    }
  })], 1)])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticStyle: {
      "max-height": "150px",
      "overflow-y": "auto"
    }
  }, _vm._l(_vm.imagesPreviewURL, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "d-flex align-center mb-1"
    }, [_c(VAvatar["a" /* default */], {
      attrs: {
        "size": "30"
      },
      on: {
        "click": function ($event) {
          return _vm.previewImg(item.IMG_URL);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": item.IMG_URL
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "ml-2 flex-grow-1"
    }, [_c('div', {
      staticClass: "text-caption"
    }, [_vm._v(_vm._s(item.NAME))]), _vm._v(" "), item.isvalid ? _c('div', {
      staticClass: "text-caption error--text"
    }, [_vm._v(_vm._s(item.isvalid))]) : _vm._e()]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.deleteFile(index);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1);
  }), 0)])], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-3 pt-0"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "small": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n        Close\n      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "small": ""
    },
    on: {
      "click": _vm.uploadFiles
    }
  }, [_vm._v("\n        Save\n      ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=template&id=2f8e35d1&scoped=true&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./pages/admin/product/mixins/ImagePreviewMixin.vue + 1 modules
var ImagePreviewMixin = __webpack_require__(452);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductFormCreate.vue?vue&type=script&lang=js&
// import ImagePreviewMixin from '../m/mixins/ImagePreviewMixin.vue'
// import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/util/myUtil'



/* harmony default export */ var ProductFormCreatevue_type_script_lang_js_ = ({
  middleware: 'auths',
  mixins: [ImagePreviewMixin["default"]],
  data() {
    return {
      priceListFormKey: 1,
      pricingRecordId: null,
      priceListDialog: false,
      threeColPaper: false,
      preview: false,
      previewSrc: null,
      dialog: false,
      dialogMessage: false,
      message: '',
      isloading: false,
      valid: true,
      barcodeImage: '',
      name: '',
      title: 'ເພີ່ມສິນຄ້າ',
      rules: {
        nameRule: [v => !!v || 'ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ ', v => v && v.length <= 150 || 'ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ'],
        priceRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        v => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0', v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        minRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
        // (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        costPrice: [
        // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາຕົ້ນທຶນ',
        v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        retailRule: [
        // (v) => !!v || 'ກະລຸນາໃສ່ເປີເຊັນ ສ່ວນຫລຸດ ສຳລັບຂາຍສົ່ງ',
        v => +v >= 0 || 'ກະລຸນ ໃສ່ເປີເຊັນ > 0', v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ'],
        imageRule: [files => {
          let fileSize = 0;
          let totalSize = 0;
          if (files) {
            files.forEach(el => {
              fileSize += el.size;
              console.log('Size: ' + el.size);
            });
            totalSize = fileSize / files.length;
            console.log('File size: aaa' + files.length + ' Each: ' + totalSize || false);
          } else {
            console.log('File: ' + files);
          }
          console.log('Total: ' + totalSize);
          return totalSize < 2000000 || 'ຂະຫນາດເກີນ';
        }]
      },
      category: [],
      formData: {
        companyId: 1,
        pro_category: 1001,
        pro_id: null,
        pro_name: '',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: false,
        pro_cost_price: 0,
        createdAt: null,
        minStock: 0,
        barCode: '',
        receiveUnitId: 1,
        stockUnitId: 1,
        saleCurrencyId: 1,
        costCurrencyId: 1,
        isActive: true,
        vendorName: ''
      },
      companyList: []
    };
  },
  mounted() {
    this.fetchCategory();
    this.fetchCompany();
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true;
        return;
      }
      this.dialogMessage = false;
    },
    formData(obj) {
      console.log('Watch fromData' + obj);
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllProductPriceListToCreate', 'findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit;
    },
    barcode3by2cm() {
      const html = `
      <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
              <div style="text-align: center;">
      <table style="width: 200px; text-align: center;" >
  <tr>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
      <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
       
    </td>
  
  </tr>
</table>
</div>
</body>
            </html>
`;
      return html;
    },
    barcodeNormal() {
      const html = `
          <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
              <div style="text-align: center;">
                    <table style="width: 200px; text-align: center;" >
                        <tr>
                          <td style="width: 500px; height: 15px;font-size:8px;">
                            ລາຄາ:${this.formatNumber(this.formData.pro_price)}
                            </br>
                            <img src="${this.barcodeImage}">
                          </td>               
                        </tr>
                      </table>
                </div>
            </body>
            </html>
        `;
      return html;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['clearProductPricesToCreate', 'addProductPricesToCreate', 'deleteProductPricesToCreate']),
    fetchData() {},
    triggerPriceListForm() {
      this.pricingRecordId = this.headerId;
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    validate() {
      this.$refs.form.validate();
    },
    formatNumber(val) {
      return Object(common["e" /* getFormatNum */])(val);
    },
    generateBarcode() {
      // Generate a random 12-digit number as the barcode value
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 100000000000;
      const canvas = document.createElement('canvas');
      // Use jsbarcode library to generate the barcode SVG image
      JsBarcode(canvas, barcodeValue.toString(), {
        format: 'code128',
        displayValue: true,
        fontSize: 20,
        margin: 10
      });
      this.formData.barCode = barcodeValue.toString();
      this.generateBarcodeImage(barcodeValue);
    },
    generateBarcodeImage(barcode) {
      // Generate a random 12-digit number as the barcode value
      // Get the canvas element using the ref attribute
      const canvas = this.$refs.barcodeCanvas;
      console.log(`.....Canvas logger.....`);
      console.log(canvas);
      console.log(canvas.width, canvas.height);
      // Set the canvas width and height to match the paper size
      // canvas.width = 40
      // canvas.height = 20
      // Generate the barcode image using JsBarcode
      JsBarcode(canvas, barcode, {
        format: 'code128',
        displayValue: true,
        fontSize: 12,
        // margin: 10,
        width: 1,
        // Match canvas width
        height: 13 // Match canvas height 35
      });

      // Convert the canvas to a data URL and set it as the barcodeImage data property
      this.barcodeImage = canvas.toDataURL();
    },
    printBarcode() {
      const windowContent = this.threeColPaper ? this.barcode3by2cm : this.barcodeNormal;

      //*********** No story 20240502 ********* */
      // const windowContent = `
      //     <!DOCTYPE html>
      //     <html>
      //     <head
      //     <title></title>
      //     <style>

      //     @font-face {
      //       font-family: 'DM Sans';
      //       font-style: normal;
      //       font-weight: 400;
      //       font-display: swap;
      //       src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
      //   }
      //     *{
      //       font-family: 'DM Sans';
      //     }

      //   </style>
      //       </head>
      //       <body>

      //           <div style="text-align: center;">
      //             <div style="text-align: center;">
      //                   ລາຄາ:${this.formatNumber(this.formData.pro_price)}
      //                   </div>
      //               <img src="${this.barcodeImage}">

      //           </div>
      //       </body>
      //       </html>
      //   `

      const printWin = window.open('', '', 'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0');
      printWin.document.open();
      printWin.document.write(windowContent);
      setTimeout(() => {
        printWin.print();
        printWin.close();
      }, 1000);
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async fetchCategory() {
      this.isloading = true;
      await this.$axios.get('category_f').then(res => {
        console.log('=>category' + res.data);
        this.category = res.data.map(el => {
          return {
            categ_id: el.categ_id,
            categ_name: el.categ_name,
            categ_desc: el.categ_desc
          };
        });
        this.formData.pro_category = this.category[0]['categ_id'];
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isloading = false;
    },
    async fetchCompany() {
      this.isLoading = true;
      await this.$axios.get('api/company/find').then(res => {
        console.log('=>Company' + res.data);
        this.companyList = res.data.map(el => {
          return {
            id: el.id,
            name: el.name
          };
        });
        this.formData.companyId = this.companyList[0]['id']; // Auto assign default company
      }).catch(er => {
        console.log('error: ' + er.response.data);
      });
      this.isLoading = false;
    },
    async uploadFiles() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.isloading = true;
      const formData = new FormData();
      formData.append('FORM', JSON.stringify(this.formData));
      this.files.forEach(element => {
        formData.append('files', element);
      });
      try {
        const response = await this.$axios.post('uploadmulti', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const productIdCreated = response.data.split('|')[1];
        console.log(`Product ID created: ${productIdCreated}`);
        const commResponse = await this.commitPriceListRecord(productIdCreated);
        console.info(`Commit response ${commResponse}`);
        this.isloading = false;
        Object(common["k" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
        console.info(`Create product complete: response => ${JSON.stringify(response)}`);
        this.$emit('refresh');
        this.$emit('close-dialog');
      } catch (error) {
        this.isloading = false;
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', error);
        console.error('Error response:', error.response);
      }
    },
    async commitPriceListRecord(productId) {
      this.isloading = true;
      let api = 'api/priceList/create';
      console.log(`API => ProductId='${productId}'`, api);
      try {
        // Use Promise.all to handle multiple API calls concurrently
        const requests = this.findAllProductPriceListToCreate.map(item => {
          // item.productId = productId
          // Create a new object instead of modifying Vuex state directly
          const newItem = {
            ...item,
            productId
          };
          return this.$axios.post(api, newItem);
        });

        // Wait for all requests to complete
        const responses = await Promise.all(requests);

        // Log the responses
        responses.forEach(response => {
          console.log(`Load data: ${JSON.stringify(response)}`);
        });
        this.clearProductPricesToCreate();
        return responses;
      } catch (error) {
        Object(common["j" /* swalError2 */])(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ໃນການເພີ່ມ price list');
        console.error('Error during price list commit:', error);
        return null;
      }
    },
    previewImg(url) {
      this.previewSrc = url;
      this.preview = true;
    }
  }
});
// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductFormCreatevue_type_script_lang_js_ = (ProductFormCreatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductFormCreate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(467)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormCreatevue_type_script_lang_js_,
  ProductFormCreatevue_type_template_id_2f8e35d1_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "2f8e35d1",
  "45253468"
  
)

/* harmony default export */ var ProductFormCreate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DialogClassicMessage: __webpack_require__(421).default,LoadingIndicator: __webpack_require__(86).default,DiaImage: __webpack_require__(438).default,PriceListForm: __webpack_require__(437).default})


/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(459);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(392);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js
var VBtnToggle = __webpack_require__(479);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(347);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(469);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(388);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(460);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=template&id=cfacff92&scoped=true&























var ProductFormvue_type_template_id_cfacff92_scoped_true_render = function render() {
  var _vm$selectedTaxRate;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "full-height-dialog"
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isLoading,
      callback: function ($$v) {
        _vm.isLoading = $$v;
      },
      expression: "isLoading"
    }
  }, [_c('loading-indicator')], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "width": "400px"
    },
    model: {
      value: _vm.preview,
      callback: function ($$v) {
        _vm.preview = $$v;
      },
      expression: "preview"
    }
  }, [_c('dia-image', {
    attrs: {
      "i-url": _vm.previewSrc
    },
    on: {
      "closeDia": function ($event) {
        _vm.preview = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800px"
    },
    model: {
      value: _vm.priceListDialog,
      callback: function ($$v) {
        _vm.priceListDialog = $$v;
      },
      expression: "priceListDialog"
    }
  }, [_c('price-list-form', {
    key: _vm.priceListFormKey,
    attrs: {
      "record-id": _vm.pricingRecordId
    },
    on: {
      "close-dialog": function ($event) {
        _vm.priceListDialog = false;
      },
      "refresh": _vm.fetchData
    }
  })], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "py-2"
  }, [_c(VChip["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "text-color": "white"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-label")]), _vm._v("\n        " + _vm._s(_vm.title) + "\n      ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-3"
  }, [_c(VForm["a" /* default */], {
    ref: "formLocal",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.validLocal,
      callback: function ($$v) {
        _vm.validLocal = $$v;
      },
      expression: "validLocal"
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.companyList,
      "label": "ຮ້ານ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.companyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "companyId", $$v);
      },
      expression: "formData.companyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "categ_name",
      "item-value": "categ_id",
      "items": _vm.category,
      "label": "ປະເພດສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_category,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_category", $$v);
      },
      expression: "formData.pro_category"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "disabled": !!_vm.formData.pro_id,
      "label": "ໄອດີສິນຄ້າ",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_id,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_id", $$v);
      },
      expression: "formData.pro_id"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.nameRule,
      "label": "ຊື້ສິນຄ້າ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_name,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_name", $$v);
      },
      expression: "formData.pro_name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.priceRule,
      "label": "ລາຄາ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_price", $$v);
      },
      expression: "formData.pro_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "rules": _vm.rules.priceRule,
      "label": "ຕົ້ນທຶນ*",
      "type": "number",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_cost_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_cost_price", $$v);
      },
      expression: "formData.pro_cost_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "code",
      "item-value": "id",
      "items": _vm.findAllCurrency,
      "label": "Currency",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.saleCurrencyId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "saleCurrencyId", $$v);
      },
      expression: "formData.saleCurrencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "displayText",
      "item-value": "id",
      "items": _vm.taxRateOptions,
      "label": "Tax Rate",
      "loading": _vm.loadingTaxRates,
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "clearable": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "color": item.isDefault ? 'primary' : 'default'
          }
        }, [_vm._v("\n                  " + _vm._s(item.displayRate) + "\n                ")]), _vm._v(" "), _c('span', {
          staticClass: "ml-1 text-caption"
        }, [_vm._v(_vm._s(item.name))])];
      }
    }]),
    model: {
      value: _vm.formData.taxId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "taxId", $$v);
      },
      expression: "formData.taxId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍຮັບ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.receiveUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "receiveUnitId", $$v);
      },
      expression: "formData.receiveUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "item-text": "name",
      "item-value": "id",
      "items": _vm.unitList,
      "label": "ຫົວຫນ່ວຍສາງ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.stockUnitId,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "stockUnitId", $$v);
      },
      expression: "formData.stockUnitId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ລາຄາສົ່ງ %",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.pro_retail_price,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_retail_price", $$v);
      },
      expression: "formData.pro_retail_price"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "type": "number",
      "label": "ສຕັອກຂັ້ນຕ່ຳ*",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.minStock,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "minStock", $$v);
      },
      expression: "formData.minStock"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Barcode",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.barCode,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "barCode", $$v);
      },
      expression: "formData.barCode"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VFileInput["a" /* default */], {
    ref: "filesfield",
    attrs: {
      "multiple": "",
      "accept": "image/*",
      "label": "ຮູບພາບ",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "prepend-icon": "",
      "prepend-inner-icon": "mdi-camera"
    },
    on: {
      "change": _vm.onFilesChange
    }
  })], 1), _vm._v(" "), _vm.formData.taxId && _vm.formData.pro_price ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAlert["a" /* default */], {
    staticClass: "pa-2 mb-1",
    attrs: {
      "dense": "",
      "outlined": "",
      "color": "info"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between text-caption"
  }, [_c('span', [_vm._v("Base: " + _vm._s(_vm.formatNumber(_vm.formData.pro_price)))]), _vm._v(" "), _c('span', [_vm._v("Tax (" + _vm._s((_vm$selectedTaxRate = _vm.selectedTaxRate) === null || _vm$selectedTaxRate === void 0 ? void 0 : _vm$selectedTaxRate.displayRate) + "): " + _vm._s(_vm.formatNumber(_vm.calculateTaxAmount())))]), _vm._v(" "), _c('span', [_c('strong', [_vm._v("Total: " + _vm._s(_vm.formatNumber(_vm.calculateTotalWithTax())))])])])])], 1) : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "color": "primary",
      "outlined": "",
      "block": ""
    },
    on: {
      "click": function ($event) {
        return _vm.triggerPriceListForm();
      }
    }
  }, [_vm._v("\n              ຈັດການລາຄາ\n            ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Vendor name",
      "dense": "",
      "outlined": "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.formData.vendorName,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "vendorName", $$v);
      },
      expression: "formData.vendorName"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "dense": "",
      "hide-details": "",
      "color": "success"
    },
    model: {
      value: _vm.formData.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "isActive", _vm._n($$v));
      },
      expression: "formData.isActive"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ຄຳອະທິບາຍ",
      "rows": "2",
      "dense": "",
      "outlined": "",
      "hide-details": "auto",
      "no-resize": ""
    },
    model: {
      value: _vm.formData.pro_desc,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "pro_desc", $$v);
      },
      expression: "formData.pro_desc"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2",
    attrs: {
      "outlined": ""
    }
  }, [_c('canvas', {
    ref: "barcodeCanvas",
    staticStyle: {
      "max-width": "100%",
      "height": "auto"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-center mt-1"
  }, [_c(VBtnToggle["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length > 0,
      "color": "primary"
    },
    on: {
      "click": _vm.generateBarcode
    }
  }, [_vm._v("\n                    Generate\n                  ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "disabled": _vm.formData.barCode.length == 0,
      "color": "success"
    },
    on: {
      "click": _vm.printBarcode
    }
  }, [_vm._v("\n                    Print\n                  ")])], 1), _vm._v(" "), _c(VCheckbox["a" /* default */], {
    staticClass: "mt-1",
    attrs: {
      "label": "3Col",
      "dense": "",
      "hide-details": ""
    },
    model: {
      value: _vm.threeColPaper,
      callback: function ($$v) {
        _vm.threeColPaper = _vm._n($$v);
      },
      expression: "threeColPaper"
    }
  })], 1)])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticStyle: {
      "max-height": "150px",
      "overflow-y": "auto"
    }
  }, [_vm._l(_vm.formData.pro_image, function (img, idx) {
    return _c('div', {
      key: `existing-${idx}`,
      staticClass: "d-flex align-center mb-1"
    }, [_c(VAvatar["a" /* default */], {
      attrs: {
        "size": "30"
      },
      on: {
        "click": function ($event) {
          return _vm.previewImg(`${_vm.host}/uploads/${img.name}`);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": `${_vm.host}/uploads/${img.name}`
      }
    })], 1), _vm._v(" "), _c('span', {
      staticClass: "text-caption ml-2 flex-grow-1"
    }, [_vm._v(_vm._s(img.name))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.deleteFileFrServ(idx);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1);
  }), _vm._v(" "), _vm._l(_vm.imagesPreviewURL, function (item, index) {
    return _c('div', {
      key: `new-${index}`,
      staticClass: "d-flex align-center mb-1"
    }, [_c(VAvatar["a" /* default */], {
      attrs: {
        "size": "30"
      },
      on: {
        "click": function ($event) {
          return _vm.previewImg(item.IMG_URL);
        }
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": item.IMG_URL
      }
    })], 1), _vm._v(" "), _c('span', {
      staticClass: "text-caption ml-2 flex-grow-1"
    }, [_vm._v(_vm._s(item.NAME))]), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "icon": "",
        "x-small": "",
        "color": "error"
      },
      on: {
        "click": function ($event) {
          return _vm.deleteFile(index);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-delete")])], 1)], 1);
  })], 2)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "text-caption mt-2"
  }, [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ. ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-3 pt-0"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "small": ""
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n        Close\n      ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "small": ""
    },
    on: {
      "click": _vm.uploadFilesLocal
    }
  }, [_vm._v("\n        Save\n      ")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=template&id=cfacff92&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductForm.vue?vue&type=script&lang=js&
var ProductFormvue_type_script_lang_js_ = __webpack_require__(439);

// CONCATENATED MODULE: ./components/product/ProductForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductFormvue_type_script_lang_js_ = (ProductFormvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/product/ProductForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(465)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductFormvue_type_script_lang_js_,
  ProductFormvue_type_template_id_cfacff92_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "cfacff92",
  "51248ea0"
  
)

/* harmony default export */ var ProductForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(86).default,DiaImage: __webpack_require__(438).default,PriceListForm: __webpack_require__(437).default})


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(433);
/* harmony import */ var _src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VAlert_VAlert_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _mixins_transitionable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(139);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
// Styles
 // Extensions

 // Components


 // Mixins



 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_transitionable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).extend({
  name: 'v-alert',
  props: {
    border: {
      type: String,
      validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }
    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    coloredBorder: Boolean,
    dense: Boolean,
    dismissible: Boolean,
    closeIcon: {
      type: String,
      default: '$cancel'
    },
    icon: {
      default: '',
      type: [Boolean, String],
      validator(val) {
        return typeof val === 'string' || val === false;
      }
    },
    outlined: Boolean,
    prominent: Boolean,
    text: Boolean,
    type: {
      type: String,
      validator(val) {
        return ['info', 'error', 'success', 'warning'].includes(val);
      }
    },
    value: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    __cachedBorder() {
      if (!this.border) return null;
      let data = {
        staticClass: 'v-alert__border',
        class: {
          [`v-alert__border--${this.border}`]: true
        }
      };
      if (this.coloredBorder) {
        data = this.setBackgroundColor(this.computedColor, data);
        data.class['v-alert__border--has-color'] = true;
      }
      return this.$createElement('div', data);
    },
    __cachedDismissible() {
      if (!this.dismissible) return null;
      const color = this.iconColor;
      return this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        staticClass: 'v-alert__dismissible',
        props: {
          color,
          icon: true,
          small: true
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: () => this.isActive = false
        }
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        props: {
          color
        }
      }, this.closeIcon)]);
    },
    __cachedIcon() {
      if (!this.computedIcon) return null;
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        staticClass: 'v-alert__icon',
        props: {
          color: this.iconColor
        }
      }, this.computedIcon);
    },
    classes() {
      const classes = {
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-alert--border': Boolean(this.border),
        'v-alert--dense': this.dense,
        'v-alert--outlined': this.outlined,
        'v-alert--prominent': this.prominent,
        'v-alert--text': this.text
      };
      if (this.border) {
        classes[`v-alert--border-${this.border}`] = true;
      }
      return classes;
    },
    computedColor() {
      return this.color || this.type;
    },
    computedIcon() {
      if (this.icon === false) return false;
      if (typeof this.icon === 'string' && this.icon) return this.icon;
      if (!['error', 'info', 'success', 'warning'].includes(this.type)) return false;
      return `$${this.type}`;
    },
    hasColoredIcon() {
      return this.hasText || Boolean(this.border) && this.coloredBorder;
    },
    hasText() {
      return this.text || this.outlined;
    },
    iconColor() {
      return this.hasColoredIcon ? this.computedColor : undefined;
    },
    isDark() {
      if (this.type && !this.coloredBorder && !this.outlined) return true;
      return _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].options.computed.isDark.call(this);
    }
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('outline')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* breaking */ "a"])('outline', 'outlined', this);
    }
  },
  methods: {
    genWrapper() {
      const children = [this.$slots.prepend || this.__cachedIcon, this.genContent(), this.__cachedBorder, this.$slots.append, this.$scopedSlots.close ? this.$scopedSlots.close({
        toggle: this.toggle
      }) : this.__cachedDismissible];
      const data = {
        staticClass: 'v-alert__wrapper'
      };
      return this.$createElement('div', data, children);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-alert__content'
      }, this.$slots.default);
    },
    genAlert() {
      let data = {
        staticClass: 'v-alert',
        attrs: {
          role: 'alert'
        },
        on: this.listeners$,
        class: this.classes,
        style: this.styles,
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      };
      if (!this.coloredBorder) {
        const setColor = this.hasText ? this.setTextColor : this.setBackgroundColor;
        data = setColor(this.computedColor, data);
      }
      return this.$createElement('div', data, [this.genWrapper()]);
    },
    /** @public */
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  render(h) {
    const render = this.genAlert();
    if (!this.transition) return render;
    return h('transition', {
      props: {
        name: this.transition,
        origin: this.origin,
        mode: this.mode
      }
    }, [render]);
  }
}));

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(435);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(135);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90);
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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(445);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1183dcac_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".iframe-container{overflow:hidden;padding-top:56.25%;position:relative}.iframe-container iframe{border:0;height:100%;left:0;position:absolute;top:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(347);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(393);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js
var VRating = __webpack_require__(478);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(388);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/index.vue?vue&type=template&id=1183dcac&
















var productvue_type_template_id_1183dcac_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4"
    }
  }, [_c(VHover["a" /* default */], {
    attrs: {
      "open-delay": "200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        hover
      }) {
        return [_c(VCard["a" /* default */], {
          class: {
            'on-hover': hover
          },
          attrs: {
            "elevation": hover ? 16 : 2
          }
        }, [_c('router-link', {
          attrs: {
            "to": `/movie/${_vm.movie.id}`
          }
        }, [_c(VImg["a" /* default */], {
          attrs: {
            "src": _vm.posterPath,
            "alt": ""
          }
        })], 1)], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "8"
    }
  }, [_c('h1', {
    staticClass: "grey--text text-darken-3 mt-5"
  }, [_vm._v(_vm._s(this.movie.title))]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "2"
    }
  }, [_c(VRating["a" /* default */], {
    attrs: {
      "value": _vm.movie.vote_average / 2,
      "color": "amber",
      "dense": "",
      "half-increments": "",
      "readonly": "",
      "size": "14"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "3"
    }
  }, [_c('span', {
    staticClass: "gray--text ml-n7"
  }, [_vm._v("\n                        " + _vm._s(_vm.movie.vote_average * 10) + "% | " + _vm._s(_vm.movie.release_date) + "\n                    ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "7"
    }
  }, [_c('div', {
    staticClass: "subtitle-2 grey--text ml-n16"
  }, _vm._l(_vm.movie.genres, function (item, index) {
    return _c('span', {
      key: index,
      staticClass: "ml-1"
    }, [_vm._v("\n                            " + _vm._s(item.name) + "\n                            "), _vm.movie.genres.length - 1 != index ? _c('span', [_vm._v(",")]) : _vm._e()]);
  }), 0)])], 1), _vm._v(" "), _c('p', {
    staticClass: "mt-5 grey--text text--darken-3 subheader"
  }, [_vm._v(_vm._s(this.movie.overview))]), _vm._v(" "), _c('div', {
    staticClass: "mt-5"
  }, [_c('h2', {
    staticClass: "mt-5 grey--text text--darken-3"
  }, [_vm._v("Featured Cast")]), _vm._v(" "), _vm._l(_vm.movie.credits.crew, function (crew, index) {
    return _c('div', {
      key: index,
      staticClass: "mt-5"
    }, [index < 2 ? _c('div', {}, [_c('h3', [_vm._v(_vm._s(crew.name))]), _vm._v(" "), _c('span', {
      staticClass: "grey--text"
    }, [_vm._v(_vm._s(crew.job))])]) : _vm._e()]);
  })], 2), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "persistent": "",
      "max-width": "800px"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
          attrs: {
            "tile": "",
            "color": "error"
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return _vm.openYouTubeModel.apply(null, arguments);
            }
          }
        }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], {
          attrs: {
            "left": ""
          }
        }, [_vm._v("mdi-play")]), _vm._v("Play\n                    ")], 1)];
      }
    }]),
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_vm._v(" "), _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "headline"
  }, [_vm._v(_vm._s(this.movie.title))])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": ""
    }
  }, [_c('div', {
    staticClass: "iframe-container"
  }, [!_vm.isVideo ? _c('img', {
    attrs: {
      "src": _vm.mediaURL
    }
  }) : _vm._e(), _vm._v(" "), _vm.isVideo ? _c('iframe', {
    attrs: {
      "allowfullscreen": "",
      "src": _vm.mediaURL
    }
  }) : _vm._e()])])], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "error",
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.dialog = _vm.flase;
      }
    }
  }, [_vm._v("Close")])], 1)], 1)], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "tile": "",
      "color": "error"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-heart")]), _vm._v("Favorite\n            ")], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDivider["a" /* default */], {
    staticClass: "mt-2"
  }), _vm._ssrNode(" "), _c('Cast', {
    attrs: {
      "casts": _vm.movie.credits.cast
    }
  }), _vm._ssrNode(" "), _c(VDivider["a" /* default */], {
    staticClass: "mt-2"
  }), _vm._ssrNode(" "), _c('Images', {
    attrs: {
      "images": _vm.movie.images.backdrops
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/product/index.vue?vue&type=template&id=1183dcac&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/product/index.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(461)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  productvue_type_template_id_1183dcac_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "30570ffe"
  
)

/* harmony default export */ var product = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_cfacff92_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(448);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_cfacff92_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_cfacff92_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_cfacff92_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_style_index_0_id_cfacff92_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".my-forn[data-v-cfacff92]{font-weight:700}.full-height-dialog[data-v-cfacff92]{display:flex;flex-direction:column;height:100vh!important;min-height:100vh!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_2f8e35d1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(449);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_2f8e35d1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_2f8e35d1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_2f8e35d1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFormCreate_vue_vue_type_style_index_0_id_2f8e35d1_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".grey[data-v-2f8e35d1],.text-h5[data-v-2f8e35d1]{font-family:\"Noto Sans Lao\"}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(443);
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
// Styles
 // Extensions

 // Components

 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-file-input',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    chips: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    counterSizeString: {
      type: String,
      default: '$vuetify.fileInput.counterSize'
    },
    counterString: {
      type: String,
      default: '$vuetify.fileInput.counter'
    },
    hideInput: Boolean,
    multiple: Boolean,
    placeholder: String,
    prependIcon: {
      type: String,
      default: '$file'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showSize: {
      type: [Boolean, Number],
      default: false,
      validator: v => {
        return typeof v === 'boolean' || [1000, 1024].includes(v);
      }
    },
    smallChips: Boolean,
    truncateLength: {
      type: [Number, String],
      default: 22
    },
    type: {
      type: String,
      default: 'file'
    },
    value: {
      default: undefined,
      validator: val => {
        return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "I"])(val).every(v => v != null && typeof v === 'object');
      }
    }
  },
  computed: {
    classes() {
      return {
        ..._VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-file-input': true
      };
    },
    computedCounterValue() {
      const fileCount = this.multiple && this.lazyValue ? this.lazyValue.length : this.lazyValue instanceof File ? 1 : 0;
      if (!this.showSize) return this.$vuetify.lang.t(this.counterString, fileCount);
      const bytes = this.internalArrayValue.reduce((bytes, {
        size = 0
      }) => {
        return bytes + size;
      }, 0);
      return this.$vuetify.lang.t(this.counterSizeString, fileCount, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(bytes, this.base === 1024));
    },
    internalArrayValue() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* wrapInArray */ "I"])(this.internalValue);
    },
    internalValue: {
      get() {
        return this.lazyValue;
      },
      set(val) {
        this.lazyValue = val;
        this.$emit('change', this.lazyValue);
      }
    },
    isDirty() {
      return this.internalArrayValue.length > 0;
    },
    isLabelActive() {
      return this.isDirty;
    },
    text() {
      if (!this.isDirty && (this.persistentPlaceholder || this.isFocused || !this.hasLabel)) return [this.placeholder];
      return this.internalArrayValue.map(file => {
        const {
          name = '',
          size = 0
        } = file;
        const truncatedText = this.truncateText(name);
        return !this.showSize ? truncatedText : `${truncatedText} (${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* humanReadableFileSize */ "w"])(size, this.base === 1024)})`;
      });
    },
    base() {
      return typeof this.showSize !== 'boolean' ? this.showSize : undefined;
    },
    hasChips() {
      return this.chips || this.smallChips;
    }
  },
  watch: {
    readonly: {
      handler(v) {
        if (v === true) Object(_util_console__WEBPACK_IMPORTED_MODULE_4__[/* consoleError */ "b"])('readonly is not supported on <v-file-input>', this);
      },
      immediate: true
    },
    value(v) {
      const value = this.multiple ? v : v ? [v] : [];
      if (!Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* deepEqual */ "k"])(value, this.$refs.input.files)) {
        // When the input value is changed programatically, clear the
        // internal input's value so that the `onInput` handler
        // can be triggered again if the user re-selects the exact
        // same file(s). Ideally, `input.files` should be
        // manipulated directly but that property is readonly.
        this.$refs.input.value = '';
      }
    }
  },
  methods: {
    clearableCallback() {
      this.internalValue = this.multiple ? [] : null;
      this.$refs.input.value = '';
    },
    genChips() {
      if (!this.isDirty) return [];
      return this.text.map((text, index) => this.$createElement(_VChip__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          small: this.smallChips
        },
        on: {
          'click:close': () => {
            const internalValue = this.internalValue;
            internalValue.splice(index, 1);
            this.internalValue = internalValue; // Trigger the watcher
          }
        }
      }, [text]));
    },
    genControl() {
      const render = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genControl.call(this);
      if (this.hideInput) {
        render.data.style = Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_5__[/* mergeStyles */ "d"])(render.data.style, {
          display: 'none'
        });
      }
      return render;
    },
    genInput() {
      const input = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.data.attrs.multiple = this.multiple; // We should not be setting value
      // programmatically on the input
      // when it is using type="file"

      delete input.data.domProps.value; // This solves an issue in Safari where
      // nothing happens when adding a file
      // due to the input event not firing
      // https://github.com/vuetifyjs/vuetify/issues/7941

      delete input.data.on.input;
      input.data.on.change = this.onInput;
      return [this.genSelections(), input];
    },
    genPrependSlot() {
      if (!this.prependIcon) return null;
      const icon = this.genIcon('prepend', () => {
        this.$refs.input.click();
      });
      return this.genSlot('prepend', 'outer', [icon]);
    },
    genSelectionText() {
      const length = this.text.length;
      if (length < 2) return this.text;
      if (this.showSize && !this.counter) return [this.computedCounterValue];
      return [this.$vuetify.lang.t(this.counterString, length)];
    },
    genSelections() {
      const children = [];
      if (this.isDirty && this.$scopedSlots.selection) {
        this.internalArrayValue.forEach((file, index) => {
          if (!this.$scopedSlots.selection) return;
          children.push(this.$scopedSlots.selection({
            text: this.text[index],
            file,
            index
          }));
        });
      } else {
        children.push(this.hasChips && this.isDirty ? this.genChips() : this.genSelectionText());
      }
      return this.$createElement('div', {
        staticClass: 'v-file-input__text',
        class: {
          'v-file-input__text--placeholder': this.placeholder && !this.isDirty,
          'v-file-input__text--chips': this.hasChips && !this.$scopedSlots.selection
        }
      }, children);
    },
    genTextFieldSlot() {
      const node = _VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genTextFieldSlot.call(this);
      node.data.on = {
        ...(node.data.on || {}),
        click: e => {
          // Clicking the label already delegates to input element, so we shouldn't click it twice
          if (e.target && e.target.nodeName === 'LABEL') return;
          this.$refs.input.click();
        }
      };
      return node;
    },
    onInput(e) {
      const files = [...(e.target.files || [])];
      this.internalValue = this.multiple ? files : files[0]; // Set initialValue here otherwise isFocused
      // watcher in VTextField will emit a change
      // event whenever the component is blurred

      this.initialValue = this.internalValue;
    },
    onKeyDown(e) {
      this.$emit('keydown', e);
    },
    truncateText(str) {
      if (str.length < Number(this.truncateLength)) return str;
      const charsKeepOneSide = Math.floor((Number(this.truncateLength) - 1) / 2);
      return `${str.slice(0, charsKeepOneSide)}…${str.slice(str.length - charsKeepOneSide)}`;
    }
  }
}));

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(453);
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52);
/* harmony import */ var _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
// Styles
 // Components

 // Mixins





 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).extend({
  name: 'v-rating',
  props: {
    backgroundColor: {
      type: String,
      default: 'accent'
    },
    color: {
      type: String,
      default: 'primary'
    },
    clearable: Boolean,
    dense: Boolean,
    emptyIcon: {
      type: String,
      default: '$ratingEmpty'
    },
    fullIcon: {
      type: String,
      default: '$ratingFull'
    },
    halfIcon: {
      type: String,
      default: '$ratingHalf'
    },
    halfIncrements: Boolean,
    hover: Boolean,
    length: {
      type: [Number, String],
      default: 5
    },
    readonly: Boolean,
    size: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    iconLabel: {
      type: String,
      default: '$vuetify.rating.ariaLabel.icon'
    }
  },
  data() {
    return {
      hoverIndex: -1,
      internalValue: this.value
    };
  },
  computed: {
    directives() {
      if (this.readonly || !this.ripple) return [];
      return [{
        name: 'ripple',
        value: {
          circle: true
        }
      }];
    },
    iconProps() {
      const {
        dark,
        large,
        light,
        medium,
        small,
        size,
        xLarge,
        xSmall
      } = this.$props;
      return {
        dark,
        large,
        light,
        medium,
        size,
        small,
        xLarge,
        xSmall
      };
    },
    isHovering() {
      return this.hover && this.hoverIndex >= 0;
    }
  },
  watch: {
    internalValue(val) {
      val !== this.value && this.$emit('input', val);
    },
    value(val) {
      this.internalValue = val;
    }
  },
  methods: {
    createClickFn(i) {
      return e => {
        if (this.readonly) return;
        const newValue = this.genHoverIndex(e, i);
        if (this.clearable && this.internalValue === newValue) {
          this.internalValue = 0;
        } else {
          this.internalValue = newValue;
        }
      };
    },
    createProps(i) {
      const props = {
        index: i,
        value: this.internalValue,
        click: this.createClickFn(i),
        isFilled: Math.floor(this.internalValue) > i,
        isHovered: Math.floor(this.hoverIndex) > i
      };
      if (this.halfIncrements) {
        props.isHalfHovered = !props.isHovered && (this.hoverIndex - i) % 1 > 0;
        props.isHalfFilled = !props.isFilled && (this.internalValue - i) % 1 > 0;
      }
      return props;
    },
    genHoverIndex(e, i) {
      let isHalf = this.isHalfEvent(e);
      if (this.halfIncrements && this.$vuetify.rtl) {
        isHalf = !isHalf;
      }
      return i + (isHalf ? 0.5 : 1);
    },
    getIconName(props) {
      const isFull = this.isHovering ? props.isHovered : props.isFilled;
      const isHalf = this.isHovering ? props.isHalfHovered : props.isHalfFilled;
      return isFull ? this.fullIcon : isHalf ? this.halfIcon : this.emptyIcon;
    },
    getColor(props) {
      if (this.isHovering) {
        if (props.isHovered || props.isHalfHovered) return this.color;
      } else {
        if (props.isFilled || props.isHalfFilled) return this.color;
      }
      return this.backgroundColor;
    },
    isHalfEvent(e) {
      if (this.halfIncrements) {
        const rect = e.target && e.target.getBoundingClientRect();
        if (rect && e.pageX - rect.left < rect.width / 2) return true;
      }
      return false;
    },
    onMouseEnter(e, i) {
      this.runDelay('open', () => {
        this.hoverIndex = this.genHoverIndex(e, i);
      });
    },
    onMouseLeave() {
      this.runDelay('close', () => this.hoverIndex = -1);
    },
    genItem(i) {
      const props = this.createProps(i);
      if (this.$scopedSlots.item) return this.$scopedSlots.item(props);
      const listeners = {
        click: props.click
      };
      if (this.hover) {
        listeners.mouseenter = e => this.onMouseEnter(e, i);
        listeners.mouseleave = this.onMouseLeave;
        if (this.halfIncrements) {
          listeners.mousemove = e => this.onMouseEnter(e, i);
        }
      }
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], this.setTextColor(this.getColor(props), {
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.iconLabel, i + 1, Number(this.length))
        },
        directives: this.directives,
        props: this.iconProps,
        on: listeners
      }), [this.getIconName(props)]);
    }
  },
  render(h) {
    const children = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* createRange */ "i"])(Number(this.length)).map(i => this.genItem(i));
    return h('div', {
      staticClass: 'v-rating',
      class: {
        'v-rating--readonly': this.readonly,
        'v-rating--dense': this.dense
      }
    }, children);
  }
}));

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VBtnToggle_VBtnToggle_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(455);
/* harmony import */ var _src_components_VBtnToggle_VBtnToggle_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VBtnToggle_VBtnToggle_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(441);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
// Styles
 // Mixins


 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_mixins_button_group__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).extend({
  name: 'v-btn-toggle',
  props: {
    backgroundColor: String,
    borderless: Boolean,
    dense: Boolean,
    group: Boolean,
    rounded: Boolean,
    shaped: Boolean,
    tile: Boolean
  },
  computed: {
    classes() {
      return {
        ..._mixins_button_group__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-btn-toggle': true,
        'v-btn-toggle--borderless': this.borderless,
        'v-btn-toggle--dense': this.dense,
        'v-btn-toggle--group': this.group,
        'v-btn-toggle--rounded': this.rounded,
        'v-btn-toggle--shaped': this.shaped,
        'v-btn-toggle--tile': this.tile,
        ...this.themeClasses
      };
    }
  },
  methods: {
    genData() {
      const data = this.setTextColor(this.color, {
        ..._mixins_button_group__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genData.call(this)
      });
      if (this.group) return data;
      return this.setBackgroundColor(this.backgroundColor, data);
    }
  }
}));

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(398);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/minStockCard/index.vue?vue&type=template&id=1e5ea2ac&





var minStockCardvue_type_template_id_1e5ea2ac_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("\n      ສິ້ນຄ້າໃກ້ໝົດ\n    ")]), _vm._v(" "), _vm.loaddata ? _c(VDataTable["a" /* default */], {
    attrs: {
      "headers": _vm.headers,
      "search": _vm.search,
      "items": _vm.loaddata,
      "items-per-page": _vm.pageLine
    },
    scopedSlots: _vm._u([{
      key: `item.pro_cost_price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatNumber(item.pro_cost_price)) + "\n\n      ")];
      }
    }, {
      key: `item.pro_price`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatNumber(item.pro_price)) + "\n\n      ")];
      }
    }, {
      key: `item.pro_card_count`,
      fn: function ({
        item
      }) {
        return [_vm._v("\n        " + _vm._s(_vm.formatNumber(item.pro_card_count)) + "\n\n      ")];
      }
    }, {
      key: `item.status`,
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          staticClass: "ma-2",
          attrs: {
            "color": _vm.verifyStockStatus(item.minStock, item.pro_card_count).includes(`In`) ? `green` : _vm.verifyStockStatus(item.minStock, item.pro_card_count).includes(`Out`) ? `red` : `orange`,
            "text-color": "white"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.verifyStockStatus(item.minStock, item.pro_card_count)) + "\n        ")])];
      }
    }], null, true)
  }) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/minStockCard/index.vue?vue&type=template&id=1e5ea2ac&

// EXTERNAL MODULE: ./components/product/ProductForm.vue + 3 modules
var ProductForm = __webpack_require__(458);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./components/product/ProductFormCreate.vue + 4 modules
var ProductFormCreate = __webpack_require__(457);

// EXTERNAL MODULE: ./util/myUtil.js
var myUtil = __webpack_require__(138);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/minStockCard/index.vue?vue&type=script&lang=js&





/* harmony default export */ var minStockCardvue_type_script_lang_js_ = ({
  components: {
    ProductForm: ProductForm["default"],
    ProductFormCreate: ProductFormCreate["default"]
  },
  middleware: 'auths',
  data() {
    return {
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      selectedProductId: '',
      selectedProductCost: 0,
      selectedProductName: '',
      isloading: false,
      dialogMessage: false,
      message: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      pageLine: 30,
      search: '',
      editProductForm: false,
      selectedProductId: null,
      stockFormKey: 1,
      headers: [{
        text: 'ໄອດີ',
        align: 'center',
        value: 'pro_id'
      }, {
        text: 'ຊື່ສິນຄ້າ',
        align: 'center',
        value: 'pro_name'
      }, {
        text: 'ຮ້ານ',
        align: 'center',
        value: 'pro_outlet_name'
      }, {
        text: 'ຫມວດສິນຄ້າ',
        align: 'center',
        value: 'pro_category_desc'
      }, {
        text: 'ລາຄາ',
        align: 'center',
        value: 'pro_price'
      },
      // { text: 'ສະຖານະ', align: 'center', value: 'pro_status' },
      {
        text: 'ສະຕັອກຂັ້ນຕ່ຳ',
        align: 'center',
        value: 'minStock'
      }, {
        text: 'Stock',
        align: 'center',
        value: 'pro_card_count'
      }, {
        text: 'Status',
        align: 'center',
        value: 'status'
      }, {
        text: 'cost',
        align: 'center',
        value: 'pro_cost_price'
      }, {
        text: 'Vendor',
        align: 'center',
        value: 'vendorName'
      }
      // {
      //   text: 'ສະຕັອກ',
      //   align: 'center',
      //   value: 'functionStock',
      //   sortable: false,
      // },
      // {
      //   text: 'ເບິ່ງສະຕັອກ',
      //   align: 'center',
      //   value: 'functionStockView',
      //   sortable: false,
      // },
      // {
      //   text: 'ແກ້ໄຂ',
      //   align: 'center',
      //   value: 'functionEdit',
      //   sortable: false,
      // },
      ]
    };
  },

  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllTerminal', 'findSelectedTerminal', 'currentSelectedLocation', 'findAllLocation'])
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true;
        return;
      }
      this.dialogMessage = false;
    }
  },
  async mounted() {
    await this.fetchData();
    await this.loadCardCategory();
  },
  methods: {
    formatNumber(value) {
      return Object(common["e" /* getFormatNum */])(value);
    },
    verifyStockStatus(minStock, CurStock) {
      let statusStock = '';
      CurStock == 0 ? statusStock = 'Out of stock' : minStock < CurStock ? statusStock = 'In stock' : statusStock = 'Low stock';
      return statusStock;
    },
    triggerCardForm(payload) {
      this.stockFormKey += 1;
      this.selectedProductId = payload.pro_id;
      this.selectedProductCost = payload.pro_cost_price;
      this.selectedProductName = payload.pro_name;
      this.isstock = true;
    },
    async fetchData() {
      console.log(`CARD SELECTE ${this.currentSelectedLocation['id']}`);
      this.isloading = true;
      await this.$axios.get(`product_f/${this.currentSelectedLocation['id']}`).then(res => {
        this.loaddata = [];
        for (const iterator of res.data) {
          if (iterator['minStock'] > iterator['card_count']) {
            this.loaddata.push({
              pro_id: iterator.pro_id,
              pro_name: iterator.pro_name,
              pro_price: iterator.pro_price,
              pro_desc: iterator.pro_desc,
              pro_status: iterator.pro_status,
              pro_category: iterator.pro_category,
              pro_category_desc: iterator.pro_category + ' - ' + iterator.categ_name,
              pro_card_count: iterator.card_count,
              pro_cost_price: iterator.cost_price,
              pro_outlet: iterator.outlet,
              pro_outlet_name: iterator.outlet_name,
              minStock: iterator.minStock,
              vendorName: iterator.vendorName,
              // function: iterator.pro_id,
              functionEdit: iterator.pro_id,
              functionStock: iterator.pro_id,
              functionStockView: iterator.pro_id,
              status: iterator.pro_id
            });
          }
        }
      }).catch(er => {
        this.message = er;
        console.log('Error: ' + er);
      });
      this.isloading = false;
    },
    editItem(item) {
      this.productFormKey += 1;
      this.selectedProductId = item.pro_id;
      this.editProductForm = true;
      // const obj=JSON.stringify(idx)
      // this.$router.push(`/admin/product/${idx.pro_id}`)
    },

    editStock(idx) {
      console.log('ID ' + idx.pro_id);
      console.log('NAME ' + idx.pro_name);
      console.log('OBJ ' + Object.keys(idx));
      // const obj=JSON.stringify(idx)
      this.$router.push(`/admin/stock/${idx.pro_id}`);
    },
    attachFile(payload) {
      this.carddata.length = 0;
      const file = payload; // in case vuetify file input
      // this.files = payload
      const reader = new FileReader();
      if (file) {
        console.log('FILE LEN: ' + file);
        reader.onload = res => {
          this.content = res.target.result;
          console.log('Data content => : ' + this.content);
          const arr = this.content.replace(/\r\n/g, '\n').split('\n'); // filter text line by line
          const tempCardData = arr.filter(el => el !== '' && el.length >= 10); // filter only useable value and trim out null line
          let i = 0;
          tempCardData.forEach(element => {
            // loop and push to real datacart
            i++;
            console.log(`Data loop ${i} ${element}`);
            this.carddata.push(element.replace('	', '|').replace('	', '|').split("'").pop()); // filter only valid number after ' and push to cartdata
            console.log(element.split("'").pop());
          });
          console.log('CARD DATA: ' + this.carddata);
        };
        reader.onerror = err => console.log(err);
        reader.readAsText(file);
        // URL.revokeObjectURL(file) // free memory
      }
      // var file = FileReader.FileReader()
    },

    loadCardCategory() {
      this.isloading = true;
      this.$axios.get('stockcate_f').then(res => {
        this.cardType = res.data.map(el => {
          return {
            card_type_code: el.card_type_code,
            card_type_name: el.card_type_name
          };
        });
        this.selectedCardType = this.cardType[0].card_type_code;
        console.log('CARD LEN: ' + this.cardType.length);
        console.log('CARD LEN: ' + this.cardType[0].card_type_code);
        this.isloading = false;
      }).catch(er => {
        console.log('Error: ' + er);
        this.isloading = false;
      });
    },
    async rebuildStock() {
      if (!this.isloading) {
        this.isloading = true;
        await this.$axios.post("/api/card/rebuildStock").then(response => {
          Object(myUtil["c" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          this.fetchData();
        }).catch(error => {
          Object(myUtil["b" /* swalError2 */])(this.$swal, "Error", error.response.data);
        });
        this.isloading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/minStockCard/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_minStockCardvue_type_script_lang_js_ = (minStockCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/minStockCard/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_minStockCardvue_type_script_lang_js_,
  minStockCardvue_type_template_id_1e5ea2ac_render,
  staticRenderFns,
  false,
  null,
  null,
  "78e2740a"
  
)

/* harmony default export */ var minStockCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=min-stock-card.js.map