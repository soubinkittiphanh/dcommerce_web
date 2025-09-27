exports.ids = [59];
exports.modules = {

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(404);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 404:
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

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
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

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(445);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("735d40bc", content, true)

/***/ }),

/***/ 445:
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

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VFileInput_VFileInput_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
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

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(489);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("d67becdc", content, true)

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export calculateUpdatedOffset */
/* unused harmony export calculateCenteredOffset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSlideGroup; });
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _mixins_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56);
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(135);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
// Styles
 // Components


 // Extensions

 // Mixins

 // Directives


 // Utilities



function bias(val) {
  const c = 0.501;
  const x = Math.abs(val);
  return Math.sign(val) * (x / ((1 / c - 2) * (1 - x) + 1));
}
function calculateUpdatedOffset(selectedElement, widths, rtl, currentScrollOffset) {
  const clientWidth = selectedElement.clientWidth;
  const offsetLeft = rtl ? widths.content - selectedElement.offsetLeft - clientWidth : selectedElement.offsetLeft;
  if (rtl) {
    currentScrollOffset = -currentScrollOffset;
  }
  const totalWidth = widths.wrapper + currentScrollOffset;
  const itemOffset = clientWidth + offsetLeft;
  const additionalOffset = clientWidth * 0.4;
  if (offsetLeft <= currentScrollOffset) {
    currentScrollOffset = Math.max(offsetLeft - additionalOffset, 0);
  } else if (totalWidth <= itemOffset) {
    currentScrollOffset = Math.min(currentScrollOffset - (totalWidth - itemOffset - additionalOffset), widths.content - widths.wrapper);
  }
  return rtl ? -currentScrollOffset : currentScrollOffset;
}
function calculateCenteredOffset(selectedElement, widths, rtl) {
  const {
    offsetLeft,
    clientWidth
  } = selectedElement;
  if (rtl) {
    const offsetCentered = widths.content - offsetLeft - clientWidth / 2 - widths.wrapper / 2;
    return -Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  } else {
    const offsetCentered = offsetLeft + clientWidth / 2 - widths.wrapper / 2;
    return Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  }
}
const BaseSlideGroup = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__[/* BaseItemGroup */ "a"], _mixins_mobile__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]).extend({
  name: 'base-slide-group',
  directives: {
    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-slide-item--active'
    },
    centerActive: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    showArrows: {
      type: [Boolean, String],
      validator: v => typeof v === 'boolean' || ['always', 'desktop', 'mobile'].includes(v)
    }
  },
  data: () => ({
    isOverflowing: false,
    resizeTimeout: 0,
    startX: 0,
    isSwipingHorizontal: false,
    isSwiping: false,
    scrollOffset: 0,
    widths: {
      content: 0,
      wrapper: 0
    }
  }),
  computed: {
    canTouch() {
      return typeof window !== 'undefined';
    },
    __cachedNext() {
      return this.genTransition('next');
    },
    __cachedPrev() {
      return this.genTransition('prev');
    },
    classes() {
      return {
        ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__[/* BaseItemGroup */ "a"].options.computed.classes.call(this),
        'v-slide-group': true,
        'v-slide-group--has-affixes': this.hasAffixes,
        'v-slide-group--is-overflowing': this.isOverflowing
      };
    },
    hasAffixes() {
      switch (this.showArrows) {
        // Always show arrows on desktop & mobile
        case 'always':
          return true;
        // Always show arrows on desktop

        case 'desktop':
          return !this.isMobile;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior

        case true:
          return this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // Always show on mobile

        case 'mobile':
          return this.isMobile || this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop

        default:
          return !this.isMobile && (this.isOverflowing || Math.abs(this.scrollOffset) > 0);
      }
    },
    hasNext() {
      if (!this.hasAffixes) return false;
      const {
        content,
        wrapper
      } = this.widths; // Check one scroll ahead to know the width of right-most item

      return content > Math.abs(this.scrollOffset) + wrapper;
    },
    hasPrev() {
      return this.hasAffixes && this.scrollOffset !== 0;
    }
  },
  watch: {
    internalValue: 'setWidths',
    // When overflow changes, the arrows alter
    // the widths of the content and wrapper
    // and need to be recalculated
    isOverflowing: 'setWidths',
    scrollOffset(val) {
      if (this.$vuetify.rtl) val = -val;
      let scroll = val <= 0 ? bias(-val) : val > this.widths.content - this.widths.wrapper ? -(this.widths.content - this.widths.wrapper) + bias(this.widths.content - this.widths.wrapper - val) : -val;
      if (this.$vuetify.rtl) scroll = -scroll;
      this.$refs.content.style.transform = `translateX(${scroll}px)`;
    }
  },
  mounted() {
    if (typeof ResizeObserver !== 'undefined') {
      const obs = new ResizeObserver(() => {
        this.onResize();
      });
      obs.observe(this.$el);
      obs.observe(this.$refs.content);
      this.$on('hook:destroyed', () => {
        obs.disconnect();
      });
    } else {
      let itemsLength = 0;
      this.$on('hook:beforeUpdate', () => {
        var _a;
        itemsLength = (((_a = this.$refs.content) === null || _a === void 0 ? void 0 : _a.children) || []).length;
      });
      this.$on('hook:updated', () => {
        var _a;
        if (itemsLength === (((_a = this.$refs.content) === null || _a === void 0 ? void 0 : _a.children) || []).length) return;
        this.setWidths();
      });
    }
  },
  methods: {
    onScroll() {
      this.$refs.wrapper.scrollLeft = 0;
    },
    onFocusin(e) {
      if (!this.isOverflowing) return; // Focused element is likely to be the root of an item, so a
      // breadth-first search will probably find it in the first iteration

      for (const el of Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__[/* composedPath */ "g"])(e)) {
        for (const vm of this.items) {
          if (vm.$el === el) {
            this.scrollOffset = calculateUpdatedOffset(vm.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
            return;
          }
        }
      }
    },
    // Always generate next for scrollable hint
    genNext() {
      const slot = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__next',
        class: {
          'v-slide-group__next--disabled': !this.hasNext
        },
        on: {
          click: () => this.onAffixClick('next')
        },
        key: 'next'
      }, [slot]);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__content',
        ref: 'content',
        on: {
          focusin: this.onFocusin
        }
      }, this.$slots.default);
    },
    genData() {
      return {
        class: this.classes,
        directives: [{
          name: 'resize',
          value: this.onResize
        }]
      };
    },
    genIcon(location) {
      let icon = location;
      if (this.$vuetify.rtl && location === 'prev') {
        icon = 'next';
      } else if (this.$vuetify.rtl && location === 'next') {
        icon = 'prev';
      }
      const upperLocation = `${location[0].toUpperCase()}${location.slice(1)}`;
      const hasAffix = this[`has${upperLocation}`];
      if (!this.showArrows && !hasAffix) return null;
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        props: {
          disabled: !hasAffix
        }
      }, this[`${icon}Icon`]);
    },
    // Always generate prev for scrollable hint
    genPrev() {
      const slot = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__prev',
        class: {
          'v-slide-group__prev--disabled': !this.hasPrev
        },
        on: {
          click: () => this.onAffixClick('prev')
        },
        key: 'prev'
      }, [slot]);
    },
    genTransition(location) {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__[/* VFadeTransition */ "d"], [this.genIcon(location)]);
    },
    genWrapper() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__wrapper',
        directives: [{
          name: 'touch',
          value: {
            start: e => this.overflowCheck(e, this.onTouchStart),
            move: e => this.overflowCheck(e, this.onTouchMove),
            end: e => this.overflowCheck(e, this.onTouchEnd)
          }
        }],
        ref: 'wrapper',
        on: {
          scroll: this.onScroll
        }
      }, [this.genContent()]);
    },
    calculateNewOffset(direction, widths, rtl, currentScrollOffset) {
      const sign = rtl ? -1 : 1;
      const newAbosluteOffset = sign * currentScrollOffset + (direction === 'prev' ? -1 : 1) * widths.wrapper;
      return sign * Math.max(Math.min(newAbosluteOffset, widths.content - widths.wrapper), 0);
    },
    onAffixClick(location) {
      this.$emit(`click:${location}`);
      this.scrollTo(location);
    },
    onResize() {
      /* istanbul ignore next */
      if (this._isDestroyed) return;
      this.setWidths();
    },
    onTouchStart(e) {
      const {
        content
      } = this.$refs;
      this.startX = this.scrollOffset + e.touchstartX;
      content.style.setProperty('transition', 'none');
      content.style.setProperty('willChange', 'transform');
    },
    onTouchMove(e) {
      if (!this.canTouch) return;
      if (!this.isSwiping) {
        // only calculate disableSwipeHorizontal during the first onTouchMove invoke
        // in order to ensure disableSwipeHorizontal value is consistent between onTouchStart and onTouchEnd
        const diffX = e.touchmoveX - e.touchstartX;
        const diffY = e.touchmoveY - e.touchstartY;
        this.isSwipingHorizontal = Math.abs(diffX) > Math.abs(diffY);
        this.isSwiping = true;
      }
      if (this.isSwipingHorizontal) {
        // sliding horizontally
        this.scrollOffset = this.startX - e.touchmoveX; // temporarily disable window vertical scrolling

        document.documentElement.style.overflowY = 'hidden';
      }
    },
    onTouchEnd() {
      if (!this.canTouch) return;
      const {
        content,
        wrapper
      } = this.$refs;
      const maxScrollOffset = content.clientWidth - wrapper.clientWidth;
      content.style.setProperty('transition', null);
      content.style.setProperty('willChange', null);
      if (this.$vuetify.rtl) {
        /* istanbul ignore else */
        if (this.scrollOffset > 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset <= -maxScrollOffset) {
          this.scrollOffset = -maxScrollOffset;
        }
      } else {
        /* istanbul ignore else */
        if (this.scrollOffset < 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset >= maxScrollOffset) {
          this.scrollOffset = maxScrollOffset;
        }
      }
      this.isSwiping = false; // rollback whole page scrolling to default

      document.documentElement.style.removeProperty('overflow-y');
    },
    overflowCheck(e, fn) {
      e.stopPropagation();
      this.isOverflowing && fn(e);
    },
    scrollIntoView
    /* istanbul ignore next */() {
      if (!this.selectedItem && this.items.length) {
        const lastItemPosition = this.items[this.items.length - 1].$el.getBoundingClientRect();
        const wrapperPosition = this.$refs.wrapper.getBoundingClientRect();
        if (this.$vuetify.rtl && wrapperPosition.right < lastItemPosition.right || !this.$vuetify.rtl && wrapperPosition.left > lastItemPosition.left) {
          this.scrollTo('prev');
        }
      }
      if (!this.selectedItem) {
        return;
      }
      if (this.selectedIndex === 0 || !this.centerActive && !this.isOverflowing) {
        this.scrollOffset = 0;
      } else if (this.centerActive) {
        this.scrollOffset = calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl);
      } else if (this.isOverflowing) {
        this.scrollOffset = calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
      }
    },
    scrollTo
    /* istanbul ignore next */(location) {
      this.scrollOffset = this.calculateNewOffset(location, {
        // Force reflow
        content: this.$refs.content ? this.$refs.content.clientWidth : 0,
        wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0
      }, this.$vuetify.rtl, this.scrollOffset);
    },
    setWidths() {
      window.requestAnimationFrame(() => {
        if (this._isDestroyed) return;
        const {
          content,
          wrapper
        } = this.$refs;
        this.widths = {
          content: content ? content.clientWidth : 0,
          wrapper: wrapper ? wrapper.clientWidth : 0
        }; // https://github.com/vuetifyjs/vuetify/issues/13212
        // We add +1 to the wrappers width to prevent an issue where the `clientWidth`
        // gets calculated wrongly by the browser if using a different zoom-level.

        this.isOverflowing = this.widths.wrapper + 1 < this.widths.content;
        this.scrollIntoView();
      });
    }
  },
  render(h) {
    return h('div', this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()]);
  }
});
/* harmony default export */ __webpack_exports__["b"] = (BaseSlideGroup.extend({
  name: 'v-slide-group',
  provide() {
    return {
      slideGroup: this
    };
  }
}));

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
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
      processingFiles: false,
      fileProgress: {
        current: 0,
        total: 0
      },
      agencies: [],
      currencies: [],
      selectedImages: [],
      selectedDocuments: [],
      imagePreviewDialog: false,
      previewImage: null,
      previewImageIndex: null,
      pdfViewerDialog: false,
      currentPdfUrl: null,
      currentPdfName: null,
      form: {
        jobCode: '',
        mouNumber: '',
        pmCharge: 0,
        projectAmount: 0,
        exchangeRate: 1,
        agencyId: null,
        employerCompany: '',
        workLocation: '',
        jobTitle: '',
        numberOfWorkers: 1,
        workerType: 'Any',
        jobStatus: 'draft',
        documents: [],
        images: [],
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
        projectAmount: 0,
        exchangeRate: 1,
        agencyId: null,
        employerCompany: '',
        workLocation: '',
        jobTitle: '',
        numberOfWorkers: 1,
        workerType: 'Any',
        jobStatus: 'draft',
        documents: [],
        images: [],
        notes: '',
        currencyId: null
      };
      this.selectedImages = [];
      this.selectedDocuments = [];
      this.$nextTick(() => {
        var _this$$refs$form;
        (_this$$refs$form = this.$refs.form) === null || _this$$refs$form === void 0 ? void 0 : _this$$refs$form.resetValidation();
      });
    },
    populateForm() {
      if (this.editingItem) {
        var _this$editingItem$age, _this$editingItem$cur;
        const transformedImages = (this.editingItem.images || []).map(img => ({
          id: img.id,
          name: img.orgName || img.img_path,
          size: img.imageSize || img.size,
          type: img.imageMimeType || img.type,
          url: this.getFileUrl('images', img.img_name || img.img_path),
          preview: this.getFileUrl('images', img.img_name || img.img_path),
          isExisting: true
        }));
        const transformedDocuments = (this.editingItem.documents || []).map((doc, index) => ({
          id: doc.id || index,
          name: doc.name,
          size: doc.size,
          type: doc.mimetype || doc.type,
          url: doc.path ? this.getDocumentDownloadUrl(this.editingItem.id, index) : null,
          path: doc.path,
          filename: doc.filename,
          isExisting: true
        }));
        this.form = {
          ...this.form,
          ...this.editingItem,
          agencyId: ((_this$editingItem$age = this.editingItem.agency) === null || _this$editingItem$age === void 0 ? void 0 : _this$editingItem$age.id) || null,
          currencyId: ((_this$editingItem$cur = this.editingItem.currency) === null || _this$editingItem$cur === void 0 ? void 0 : _this$editingItem$cur.id) || null,
          documents: transformedDocuments,
          images: transformedImages
        };
      }
    },
    async handleImageSelection(files) {
      if (!files || files.length === 0) return;
      const maxSize = 5 * 1024 * 1024;
      const validFiles = Array.from(files).filter(file => {
        if (!file.type.startsWith('image/')) {
          this.$toast.error(`${file.name} ບໍ່ແມ່ນໄຟລ໌ຮູບພາບ`);
          return false;
        }
        if (file.size > maxSize) {
          this.$toast.error(`${file.name} ມີຂະໜາດໃຫຍ່ເກີນ 5MB`);
          return false;
        }
        return true;
      });
      if (validFiles.length === 0) {
        this.selectedImages = [];
        return;
      }
      this.processingFiles = true;
      this.fileProgress = {
        current: 0,
        total: validFiles.length
      };
      try {
        for (let i = 0; i < validFiles.length; i++) {
          const file = validFiles[i];
          this.fileProgress.current = i;
          try {
            const preview = await this.readFileAsDataURL(file);
            this.form.images.push({
              name: file.name,
              size: file.size,
              type: file.type,
              file: file,
              preview: preview,
              isNew: true
            });
            await this.delay(10);
          } catch (error) {
            console.error(`Error processing image ${file.name}:`, error);
            this.$toast.error(`ໂຫລດຮູບພາບ ${file.name} ບໍ່ສຳເລັດ`);
          }
        }
        this.fileProgress.current = validFiles.length;
        this.$toast.success(`ໂຫລດຮູບພາບ ${validFiles.length} ໄຟລ໌ສຳເລັດ`);
      } catch (error) {
        console.error('Error in handleImageSelection:', error);
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫລດຮູບພາບ');
      } finally {
        this.processingFiles = false;
        this.fileProgress = {
          current: 0,
          total: 0
        };
        this.selectedImages = [];
        this.$nextTick(() => {
          if (this.$refs.imageInput) {
            this.$refs.imageInput.reset();
          }
        });
      }
    },
    async handleDocumentSelection(files) {
      if (!files || files.length === 0) return;
      const maxSize = 10 * 1024 * 1024;
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/plain'];
      const validFiles = Array.from(files).filter(file => {
        if (!allowedTypes.includes(file.type) && !this.isValidDocumentExtension(file.name)) {
          this.$toast.error(`${file.name} ບໍ່ແມ່ນໄຟລ໌ເອກະສານທີ່ຮອງຮັບ`);
          return false;
        }
        if (file.size > maxSize) {
          this.$toast.error(`${file.name} ມີຂະໜາດໃຫຍ່ເກີນ 10MB`);
          return false;
        }
        return true;
      });
      if (validFiles.length === 0) {
        this.selectedDocuments = [];
        return;
      }
      this.processingFiles = true;
      this.fileProgress = {
        current: 0,
        total: validFiles.length
      };
      try {
        for (let i = 0; i < validFiles.length; i++) {
          const file = validFiles[i];
          this.fileProgress.current = i + 1;
          this.form.documents.push({
            name: file.name,
            size: file.size,
            type: file.type,
            file: file,
            isNew: true
          });
          await this.delay(5);
        }
        this.$toast.success(`ໂຫລດເອກະສານ ${validFiles.length} ໄຟລ໌ສຳເລັດ`);
      } catch (error) {
        console.error('Error in handleDocumentSelection:', error);
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫລດເອກະສານ');
      } finally {
        this.processingFiles = false;
        this.fileProgress = {
          current: 0,
          total: 0
        };
        this.selectedDocuments = [];
        this.$nextTick(() => {
          if (this.$refs.documentInput) {
            this.$refs.documentInput.reset();
          }
        });
      }
    },
    readFileAsDataURL(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = e => reject(new Error('Failed to read file'));
        reader.onabort = e => reject(new Error('File reading aborted'));
        if (file.size > 1024 * 1024) {
          this.createImageThumbnail(file, 300, 300).then(resolve).catch(() => {
            reader.readAsDataURL(file);
          });
        } else {
          reader.readAsDataURL(file);
        }
      });
    },
    createImageThumbnail(file, maxWidth, maxHeight) {
      return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
          let {
            width,
            height
          } = img;
          if (width > height) {
            if (width > maxWidth) {
              height = height * maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = width * maxHeight / height;
              height = maxHeight;
            }
          }
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.8));
        };
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
      });
    },
    isValidDocumentExtension(filename) {
      const validExtensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.txt'];
      const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'));
      return validExtensions.includes(ext);
    },
    isPdfFile(filename) {
      if (!filename) return false;
      const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'));
      return ext === '.pdf';
    },
    async viewPdf(doc) {
      try {
        this.currentPdfName = doc.name;
        if (doc.isExisting && doc.url) {
          const response = await this.$axios({
            method: 'GET',
            url: doc.url,
            responseType: 'blob'
          });
          const blob = new Blob([response.data], {
            type: 'application/pdf'
          });
          this.currentPdfUrl = window.URL.createObjectURL(blob);
        } else if (doc.file && doc.isNew) {
          this.currentPdfUrl = URL.createObjectURL(doc.file);
        }
        this.pdfViewerDialog = true;
      } catch (error) {
        console.error('Error viewing PDF:', error);
        this.$toast.error('ເປີດ PDF ບໍ່ສຳເລັດ');
      }
    },
    async downloadCurrentPdf() {
      if (this.currentPdfUrl && this.currentPdfName) {
        try {
          const link = document.createElement('a');
          link.href = this.currentPdfUrl;
          link.download = this.currentPdfName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          this.$toast.success('ດາວໂຫລດ PDF ສຳເລັດ');
        } catch (error) {
          console.error('Error downloading PDF:', error);
          this.$toast.error('ດາວໂຫລດ PDF ບໍ່ສຳເລັດ');
        }
      }
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    removeImage(index) {
      const imageToRemove = this.form.images[index];
      if (imageToRemove.isExisting && imageToRemove.id) {
        this.deleteExistingImage(imageToRemove.id);
      }
      this.form.images.splice(index, 1);
    },
    async removeDocument(index) {
      var _this$editingItem;
      const docToRemove = this.form.documents[index];
      if (docToRemove.isExisting && (_this$editingItem = this.editingItem) !== null && _this$editingItem !== void 0 && _this$editingItem.id) {
        await this.deleteExistingDocument(this.editingItem.id, index);
      }
      this.form.documents.splice(index, 1);
    },
    openImagePreview(image, index) {
      this.previewImage = image;
      this.previewImageIndex = index;
      this.imagePreviewDialog = true;
    },
    removeImageFromPreview() {
      if (this.previewImageIndex !== null) {
        this.removeImage(this.previewImageIndex);
        this.imagePreviewDialog = false;
        this.previewImage = null;
        this.previewImageIndex = null;
      }
    },
    async downloadDocument(doc) {
      if (doc.url) {
        try {
          const response = await this.$axios({
            method: 'GET',
            url: doc.url,
            responseType: 'blob'
          });
          const blob = new Blob([response.data]);
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = doc.name || 'document';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          this.$toast.success('ດາວໂຫລດເອກະສານສຳເລັດ');
        } catch (error) {
          console.error('Download error:', error);
          this.$toast.error('ດາວໂຫລດເອກະສານບໍ່ສຳເລັດ');
        }
      } else {
        this.$toast.warning('ເອກະສານຍັງບໍ່ໄດ້ຖືກບັນທຶກ');
      }
    },
    async downloadImage(image) {
      if (image.url) {
        try {
          const response = await this.$axios({
            method: 'GET',
            url: image.url,
            responseType: 'blob'
          });
          const blob = new Blob([response.data]);
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = image.name || 'image';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          this.$toast.success('ດາວໂຫລດຮູບພາບສຳເລັດ');
        } catch (error) {
          console.error('Download error:', error);
          this.$toast.error('ດາວໂຫລດຮູບພາບບໍ່ສຳເລັດ');
        }
      } else if (image.preview) {
        this.downloadDataURL(image.preview, image.name);
        this.$toast.success('ດາວໂຫລດຮູບພາບສຳເລັດ');
      }
    },
    downloadDataURL(dataURL, filename) {
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    async deleteExistingImage(imageId) {
      try {
        const response = await this.$axios.$delete(`/api/mous/image/${imageId}`);
        if (response.success) {
          this.$toast.success('ລຶບຮູບພາບສຳເລັດແລ້ວ');
        }
      } catch (error) {
        console.error('Error deleting image:', error);
        this.$toast.error('ລຶບຮູບພາບບໍ່ສຳເລັດ');
      }
    },
    async deleteExistingDocument(mouId, documentIndex) {
      try {
        const response = await this.$axios.$delete(`/api/mous/${mouId}/document/${documentIndex}`);
        if (response.success) {
          this.$toast.success('ລຶບເອກະສານສຳເລັດແລ້ວ');
        }
      } catch (error) {
        console.error('Error deleting document:', error);
        this.$toast.error('ລຶບເອກະສານບໍ່ສຳເລັດ');
      }
    },
    getFileUrl(type, filename) {
      if (!filename) return '';
      const baseUrl = this.$axios.defaults.baseURL || '';
      return `${baseUrl}/uploads/${type}/${filename}`.replace(/\/+/g, '/').replace(':/', '://');
    },
    getDocumentDownloadUrl(mouId, documentIndex) {
      const baseUrl = this.$axios.defaults.baseURL || '';
      return `${baseUrl}/api/mous/download/document/${mouId}/${documentIndex}`.replace(/\/+/g, '/').replace(':/', '://');
    },
    getImageDownloadUrl(imageId) {
      const baseUrl = this.$axios.defaults.baseURL || '';
      return `${baseUrl}/api/mous/download/image/${imageId}`.replace(/\/+/g, '/').replace(':/', '://');
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },
    getDocumentTypeIcon(filename) {
      const ext = filename.split('.').pop().toLowerCase();
      const iconMap = {
        pdf: 'mdi-file-pdf-box',
        doc: 'mdi-file-word-box',
        docx: 'mdi-file-word-box',
        xls: 'mdi-file-excel-box',
        xlsx: 'mdi-file-excel-box',
        txt: 'mdi-file-document-outline',
        default: 'mdi-file-document'
      };
      return iconMap[ext] || iconMap.default;
    },
    getDocumentTypeColor(filename) {
      const ext = filename.split('.').pop().toLowerCase();
      const colorMap = {
        pdf: 'red',
        doc: 'blue',
        docx: 'blue',
        xls: 'green',
        xlsx: 'green',
        txt: 'grey',
        default: 'primary'
      };
      return colorMap[ext] || colorMap.default;
    },
    async fetchDropdownData() {
      await Promise.all([this.fetchAgencies(), this.fetchCurrencies()]);
    },
    async fetchAgencies() {
      this.loadingAgencies = true;
      try {
        const response = await this.$axios.$get('/api/agency');
        if (response.success && response.data && response.data.agencies) {
          this.agencies = response.data.agencies;
        } else if (response.success && Array.isArray(response.data)) {
          this.agencies = response.data;
        }
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
        if (Array.isArray(response)) {
          this.currencies = response;
        } else if (response.success && response.data) {
          this.currencies = response.data;
        } else if (response && !response.success) {
          this.currencies = response;
        }
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
        if (!payload.pmCharge) payload.pmCharge = 0;
        if (!payload.exchangeRate) payload.exchangeRate = 1;
        if (!payload.numberOfWorkers) payload.numberOfWorkers = 1;
        const formData = new FormData();
        Object.keys(payload).forEach(key => {
          if (key !== 'images' && key !== 'documents') {
            formData.append(key, payload[key]);
          }
        });
        payload.images.forEach(image => {
          if (image.isNew && image.file) {
            formData.append(`images`, image.file);
          }
        });
        payload.documents.forEach(doc => {
          if (doc.isNew && doc.file) {
            formData.append(`documents`, doc.file);
          }
        });
        let response;
        if (this.isEditing) {
          response = await this.$axios.$put(`/api/mous/${this.editingItem.id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        } else {
          response = await this.$axios.$post('/api/mous', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(347)["URL"]))

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(682);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2fe449f6", content, true, context)
};

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(680);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("44600667", content, true)

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip--active{color:inherit}.v-chip-group .v-chip--active.v-chip--no-color:after{opacity:.22}.v-chip-group .v-chip--active.v-chip--no-color:focus:after{opacity:.32}.v-chip-group .v-slide-group__content{padding:4px 0}.v-chip-group--column .v-slide-group__content{flex-wrap:wrap;max-width:100%;white-space:normal}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_670d6a32_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(588);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_670d6a32_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_670d6a32_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_670d6a32_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_670d6a32_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".maintenance-dialog[data-v-670d6a32]{display:flex;flex-direction:column;height:100vh}.dialog-toolbar[data-v-670d6a32]{border-radius:0!important;flex-shrink:0;min-height:56px!important}.toolbar-title[data-v-670d6a32]{font-size:1.1rem;font-weight:500}.dialog-content[data-v-670d6a32]{background-color:#fafafa;flex:1;overflow-y:auto;padding:12px 8px!important}.form-container[data-v-670d6a32]{background:#fff;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.1);margin:0 auto;max-width:1400px;padding:16px!important}.section-header[data-v-670d6a32]{align-items:center;border-bottom:1px solid #e3f2fd;display:flex;margin-bottom:12px;padding-bottom:8px}.section-header.compact[data-v-670d6a32]{margin-bottom:8px;padding-bottom:4px}.section-title[data-v-670d6a32]{color:#1976d2;font-size:.95rem;font-weight:600;margin:0}.dialog-actions[data-v-670d6a32]{background:#fff;border-top:1px solid #e0e0e0;flex-shrink:0}.v-select--outlined[data-v-670d6a32] .v-input__control>.v-input__slot,.v-text-field--outlined[data-v-670d6a32] .v-input__control>.v-input__slot,.v-textarea[data-v-670d6a32] .v-input__control>.v-input__slot{min-height:40px!important}.v-text-field.v-text-field--enclosed[data-v-670d6a32]:not(.v-text-field--rounded) .v-input__prepend-inner{margin-top:8px!important}.v-expansion-panel-header[data-v-670d6a32]{min-height:40px!important}.v-expansion-panel-content[data-v-670d6a32] .v-expansion-panel-content__wrap,.v-expansion-panel-header[data-v-670d6a32]{padding:8px 16px!important}.v-chip-group[data-v-670d6a32]{gap:4px}.v-chip.v-size--small[data-v-670d6a32]{font-size:.75rem;height:24px!important}.v-chip.v-size--x-small[data-v-670d6a32]{font-size:.7rem;height:20px!important}.pdf-viewer-content[data-v-670d6a32]{height:calc(100vh - 64px)}.pdf-container[data-v-670d6a32]{background:#f5f5f5;height:100%;position:relative;width:100%}.pdf-iframe[data-v-670d6a32]{background:#fff;border:none;height:100%;width:100%}.pdf-error[data-v-670d6a32],.pdf-loading[data-v-670d6a32]{align-items:center;color:#666;display:flex;flex-direction:column;font-size:14px;height:100%;justify-content:center}@media (max-width:768px){.form-container[data-v-670d6a32]{border-radius:6px;margin:0 4px;padding:12px!important}.toolbar-title[data-v-670d6a32]{font-size:1rem}.pdf-viewer-content[data-v-670d6a32]{height:calc(100vh - 56px)}}.v-input--dense[data-v-670d6a32] .v-messages{min-height:0!important}.v-text-field[data-v-670d6a32] .v-text-field__details{margin-bottom:0!important;padding-top:2px!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (_VTextField__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 876:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VChipGroup/VChipGroup.sass
var VChipGroup = __webpack_require__(679);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
var VSlideGroup = __webpack_require__(520);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VChipGroup/VChipGroup.js
// Styles
 // Extensions

 // Mixins

 // Utilities


/* @vue/component */

/* harmony default export */ var VChipGroup_VChipGroup = (Object(mixins["a" /* default */])(VSlideGroup["a" /* BaseSlideGroup */], colorable["a" /* default */]).extend({
  name: 'v-chip-group',
  provide() {
    return {
      chipGroup: this
    };
  },
  props: {
    column: Boolean
  },
  computed: {
    classes() {
      return {
        ...VSlideGroup["a" /* BaseSlideGroup */].options.computed.classes.call(this),
        'v-chip-group': true,
        'v-chip-group--column': this.column
      };
    }
  },
  watch: {
    column(val) {
      if (val) this.scrollOffset = 0;
      this.$nextTick(this.onResize);
    }
  },
  methods: {
    genData() {
      return this.setTextColor(this.color, {
        ...VSlideGroup["a" /* BaseSlideGroup */].options.methods.genData.call(this)
      });
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(348);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js
var VExpansionPanel = __webpack_require__(396);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js
var VExpansionPanelContent = __webpack_require__(398);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js
var VExpansionPanelHeader = __webpack_require__(397);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js
var VExpansionPanels = __webpack_require__(395);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/VFileInput.js
var VFileInput = __webpack_require__(470);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(392);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/job_fair/mou/maintain/index.vue?vue&type=template&id=670d6a32&scoped=true&




























var maintainvue_type_template_id_670d6a32_scoped_true_render = function render() {
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
    staticClass: "dialog-content pa-0"
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
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "pb-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header compact"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary",
      "small": ""
    }
  }, [_vm._v("mdi-information")]), _vm._v(" "), _c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ຂໍ້ມູນພື້ນຖານ")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ລະຫັດວຽກ *",
      "rules": [_vm.rules.required],
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-identifier",
      "disabled": _vm.isEditing
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
      "sm": "4",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "MOU / Order",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-file-document"
    },
    model: {
      value: _vm.form.projectAmount,
      callback: function ($$v) {
        _vm.$set(_vm.form, "projectAmount", $$v);
      },
      expression: "form.projectAmount"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "4",
      "md": "3"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.statusOptions,
      "label": "ສະຖານະວຽກ *",
      "rules": [_vm.rules.required],
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
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
            "x-small": "",
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
      "cols": "12",
      "md": "3"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ໜ້າວຽກ *",
      "rules": [_vm.rules.required],
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-briefcase"
    },
    model: {
      value: _vm.form.jobTitle,
      callback: function ($$v) {
        _vm.$set(_vm.form, "jobTitle", $$v);
      },
      expression: "form.jobTitle"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pb-0 pt-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header compact"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary",
      "small": ""
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
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-office-building"
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
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-map-marker"
    },
    model: {
      value: _vm.form.workLocation,
      callback: function ($$v) {
        _vm.$set(_vm.form, "workLocation", $$v);
      },
      expression: "form.workLocation"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pb-0 pt-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header compact"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary",
      "small": ""
    }
  }, [_vm._v("mdi-account-group")]), _vm._v(" "), _c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ແຮງງານ & ການເງິນ")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3",
      "md": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຈຳນວນແຮງງານ *",
      "rules": [_vm.rules.required, _vm.rules.positiveNumber],
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
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
      "cols": "6",
      "sm": "3",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.workerTypeOptions,
      "label": "ປະເພດແຮງງານ *",
      "rules": [_vm.rules.required],
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-account"
    },
    model: {
      value: _vm.form.workerType,
      callback: function ($$v) {
        _vm.$set(_vm.form, "workerType", $$v);
      },
      expression: "form.workerType"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6",
      "sm": "3",
      "md": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຄ່າບໍລິຫານ PM",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
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
      "cols": "6",
      "sm": "3",
      "md": "2"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ອັດຕາແລກປ່ຽນ",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "type": "number",
      "min": "0",
      "step": "0.001",
      "prepend-inner-icon": "mdi-swap-horizontal"
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
      "cols": "6",
      "sm": "4",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.currencies,
      "item-text": "code",
      "item-value": "id",
      "label": "ສະກຸນເງິນ",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-currency-usd",
      "loading": _vm.loadingCurrencies
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
      "cols": "6",
      "sm": "8",
      "md": "2"
    }
  }, [_c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.agencies,
      "item-text": "agencyName",
      "item-value": "id",
      "label": "ຕົວແທນ",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-domain",
      "loading": _vm.loadingAgencies,
      "clearable": ""
    },
    model: {
      value: _vm.form.agencyId,
      callback: function ($$v) {
        _vm.$set(_vm.form, "agencyId", $$v);
      },
      expression: "form.agencyId"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pb-0 pt-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header compact"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary",
      "small": ""
    }
  }, [_vm._v("mdi-note-text")]), _vm._v(" "), _c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ໝາຍເຫດ")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextarea["a" /* default */], {
    attrs: {
      "label": "ໝາຍເຫດ",
      "outlined": "",
      "dense": "",
      "rows": "2",
      "hide-details": "auto",
      "prepend-inner-icon": "mdi-note"
    },
    model: {
      value: _vm.form.notes,
      callback: function ($$v) {
        _vm.$set(_vm.form, "notes", $$v);
      },
      expression: "form.notes"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pb-0 pt-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "section-header compact"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "color": "primary",
      "small": ""
    }
  }, [_vm._v("mdi-file-multiple")]), _vm._v(" "), _c('h3', {
    staticClass: "section-title"
  }, [_vm._v("ໄຟລ໌ແນບ")])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VFileInput["a" /* default */], {
    ref: "imageInput",
    attrs: {
      "label": "ຮູບພາບ (5MB)",
      "multiple": "",
      "accept": "image/*",
      "prepend-icon": "mdi-camera",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "clearable": false,
      "disabled": _vm.processingFiles
    },
    on: {
      "change": _vm.handleImageSelection
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        text
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "label": "",
            "color": "primary"
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.selectedImages ? _vm.selectedImages.length : 0) + " ຮູບ\n                  ")])];
      }
    }]),
    model: {
      value: _vm.selectedImages,
      callback: function ($$v) {
        _vm.selectedImages = $$v;
      },
      expression: "selectedImages"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VFileInput["a" /* default */], {
    ref: "documentInput",
    attrs: {
      "label": "ເອກະສານ (10MB)",
      "multiple": "",
      "accept": ".pdf,.doc,.docx,.xls,.xlsx,.txt",
      "prepend-icon": "mdi-file-document",
      "outlined": "",
      "dense": "",
      "hide-details": "auto",
      "clearable": false,
      "disabled": _vm.processingFiles
    },
    on: {
      "change": _vm.handleDocumentSelection
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        text
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "x-small": "",
            "label": "",
            "color": "primary"
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.selectedDocuments ? _vm.selectedDocuments.length : 0) + " ເອກະສານ\n                  ")])];
      }
    }]),
    model: {
      value: _vm.selectedDocuments,
      callback: function ($$v) {
        _vm.selectedDocuments = $$v;
      },
      expression: "selectedDocuments"
    }
  })], 1), _vm._v(" "), _vm.processingFiles && _vm.fileProgress.total > 0 ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VProgressLinear["a" /* default */], {
    attrs: {
      "value": _vm.fileProgress.current / _vm.fileProgress.total * 100,
      "color": "primary",
      "height": "3"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function () {
        return [_c('small', [_vm._v(_vm._s(_vm.fileProgress.current) + "/" + _vm._s(_vm.fileProgress.total))])];
      },
      proxy: true
    }], null, false, 245601818)
  })], 1) : _vm._e(), _vm._v(" "), _vm.form.images && _vm.form.images.length > 0 || _vm.form.documents && _vm.form.documents.length > 0 ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VExpansionPanels["a" /* default */], {
    attrs: {
      "flat": ""
    }
  }, [_c(VExpansionPanel["a" /* default */], [_c(VExpansionPanelHeader["a" /* default */], {
    staticClass: "pa-2"
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-paperclip")]), _vm._v(" "), _c('span', {
    staticClass: "text-caption"
  }, [_vm._v("\n                        " + _vm._s(_vm.form.images.length) + " ຮູບພາບ, " + _vm._s(_vm.form.documents.length) + " ເອກະສານ\n                      ")])], 1)]), _vm._v(" "), _c(VExpansionPanelContent["a" /* default */], [_vm.form.images.length > 0 ? _c('div', {
    staticClass: "mb-2"
  }, [_c(VChipGroup_VChipGroup, {
    attrs: {
      "column": ""
    }
  }, _vm._l(_vm.form.images, function (image, index) {
    return _c(VChip["a" /* default */], {
      key: `img-${index}`,
      attrs: {
        "small": "",
        "close": ""
      },
      on: {
        "click:close": function ($event) {
          return _vm.removeImage(index);
        },
        "click": function ($event) {
          return _vm.openImagePreview(image, index);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "small": "",
        "left": ""
      }
    }, [_vm._v("mdi-image")]), _vm._v("\n                          " + _vm._s(image.name) + "\n                        ")], 1);
  }), 1)], 1) : _vm._e(), _vm._v(" "), _vm.form.documents.length > 0 ? _c('div', [_c(VChipGroup_VChipGroup, {
    attrs: {
      "column": ""
    }
  }, _vm._l(_vm.form.documents, function (doc, index) {
    return _c(VChip["a" /* default */], {
      key: `doc-${index}`,
      attrs: {
        "small": "",
        "close": ""
      },
      on: {
        "click:close": function ($event) {
          return _vm.removeDocument(index);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "small": "",
        "left": "",
        "color": _vm.getDocumentTypeColor(doc.name)
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.getDocumentTypeIcon(doc.name)) + "\n                          ")]), _vm._v("\n                          " + _vm._s(doc.name) + "\n                          "), _vm.isPdfFile(doc.name) && doc.url ? _c(VBtn["a" /* default */], {
      staticClass: "ml-1",
      attrs: {
        "icon": "",
        "x-small": ""
      },
      on: {
        "click": function ($event) {
          $event.stopPropagation();
          return _vm.viewPdf(doc);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-eye")])], 1) : _vm._e(), _vm._v(" "), doc.url ? _c(VBtn["a" /* default */], {
      staticClass: "ml-1",
      attrs: {
        "icon": "",
        "x-small": ""
      },
      on: {
        "click": function ($event) {
          $event.stopPropagation();
          return _vm.downloadDocument(doc);
        }
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "x-small": ""
      }
    }, [_vm._v("mdi-download")])], 1) : _vm._e()], 1);
  }), 1)], 1) : _vm._e()])], 1)], 1)], 1) : _vm._e()], 1)], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "dialog-actions pa-3"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.cancel
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-cancel")]), _vm._v("\n        ຍົກເລີກ\n      ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": _vm.saving,
      "disabled": !_vm.isFormValid
    },
    on: {
      "click": _vm.save
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "small": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n        " + _vm._s(_vm.isEditing ? 'ອັບເດດ' : 'ສ້າງ') + "\n      ")], 1)], 1)], 1), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "90vw"
    },
    model: {
      value: _vm.imagePreviewDialog,
      callback: function ($$v) {
        _vm.imagePreviewDialog = $$v;
      },
      expression: "imagePreviewDialog"
    }
  }, [_vm.previewImage ? _c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "d-flex justify-space-between align-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.previewImage.name))]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": ""
    },
    on: {
      "click": function ($event) {
        _vm.imagePreviewDialog = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": _vm.previewImage.preview || _vm.previewImage.url,
      "contain": "",
      "max-height": "70vh"
    }
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _vm.previewImage.url ? _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "text": ""
    },
    on: {
      "click": function ($event) {
        return _vm.downloadImage(_vm.previewImage);
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-download")]), _vm._v("\n          ດາວໂຫລດ\n        ")], 1) : _vm._e(), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "red",
      "text": ""
    },
    on: {
      "click": _vm.removeImageFromPreview
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-delete")]), _vm._v("\n          ລຶບ\n        ")], 1)], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "fullscreen": "",
      "hide-overlay": "",
      "transition": "dialog-bottom-transition",
      "scrollable": ""
    },
    model: {
      value: _vm.pdfViewerDialog,
      callback: function ($$v) {
        _vm.pdfViewerDialog = $$v;
      },
      expression: "pdfViewerDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(VToolbar["a" /* default */], {
    attrs: {
      "dark": "",
      "color": "primary"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "icon": ""
    },
    on: {
      "click": function ($event) {
        _vm.pdfViewerDialog = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1), _vm._v(" "), _c(components_VToolbar["a" /* VToolbarTitle */], [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-file-pdf-box")]), _vm._v("\n          " + _vm._s(_vm.currentPdfName) + "\n        ")], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _vm.currentPdfUrl ? _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.downloadCurrentPdf
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-download")]), _vm._v("\n          ດາວໂຫລດ\n        ")], 1) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0 pdf-viewer-content"
  }, [_c('div', {
    staticClass: "pdf-container"
  }, [_vm.currentPdfUrl ? _c('iframe', {
    staticClass: "pdf-iframe",
    attrs: {
      "src": _vm.currentPdfUrl + '#toolbar=1&navpanes=1&scrollbar=1',
      "width": "100%",
      "height": "100%",
      "frameborder": "0"
    }
  }, [_c('p', [_vm._v("Your browser does not support iframes.")])]) : _c('div', {
    staticClass: "pdf-loading"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "indeterminate": "",
      "size": "64",
      "color": "primary"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-4"
  }, [_vm._v("ກຳລັງໂຫລດ PDF...")])], 1)])])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/job_fair/mou/maintain/index.vue?vue&type=template&id=670d6a32&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/job_fair/mou/maintain/index.vue?vue&type=script&lang=js&
var maintainvue_type_script_lang_js_ = __webpack_require__(525);

// CONCATENATED MODULE: ./components/job_fair/mou/maintain/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var mou_maintainvue_type_script_lang_js_ = (maintainvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/job_fair/mou/maintain/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(681)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mou_maintainvue_type_script_lang_js_,
  maintainvue_type_template_id_670d6a32_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "670d6a32",
  "2ef59eb0"
  
)

/* harmony default export */ var maintain = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=job-fair-mou-maintain.js.map