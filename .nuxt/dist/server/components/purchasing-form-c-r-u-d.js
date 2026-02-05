exports.ids = [143];
exports.modules = {

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(458);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c54b7bb4", content, true)

/***/ }),

/***/ 458:
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

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  bind(el, binding, vnode) {
    el.addEventListener("input", function (event) {
      // Remove any non-numeric characters
      let value = event.target.value.replace(/[^0-9]/g, "");
      // Format the value with comma-separated thousands
      value = parseInt(value, 10).toLocaleString("en-US");
      // Update the input value
      if (value === 'NaN') value = '0';
      vnode.componentInstance.$emit("input", value);
    });
  }
});

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(479);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2f6b6adb", content, true)

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(457);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
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

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(478);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },
    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },
    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },
    styles() {
      if (this.absolute || !this.app) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application;
      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(bottom + footer + insetFooter),
        paddingLeft: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(left),
        paddingRight: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "h"])(bar + top)
      };
    }
  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },
  mounted() {
    if (this.isActive) this.setTimeout();
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq

    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },
  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "s"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "s"])(this)]);
    },
    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        style: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          pointerenter: () => window.clearTimeout(this.activeTimeout),
          pointerleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },
    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },
    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);
      if (!this.isActive ||
      // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }
      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }
}));

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(594);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2dce7e7a", content, true, context)
};

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 12 modules
var VDataTable = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(499);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(481);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PurchasingFormCRUD.vue?vue&type=template&id=2bb25126&scoped=true





















var PurchasingFormCRUDvue_type_template_id_2bb25126_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "purchasing-form-container"
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
  }, [_c(VCard["a" /* default */], {
    staticClass: "loading-card",
    attrs: {
      "color": "primary",
      "dark": ""
    }
  }, [_c(components_VCard["c" /* VCardText */], {
    staticClass: "text-center"
  }, [_c(VProgressCircular["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "size": 70,
      "width": 7,
      "color": "white",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-h6"
  }, [_vm._v("Processing...")])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200",
      "persistent": ""
    },
    model: {
      value: _vm.supplierDialog,
      callback: function ($$v) {
        _vm.supplierDialog = $$v;
      },
      expression: "supplierDialog"
    }
  }, [_c('supplier-list', {
    on: {
      "close-dialog": function ($event) {
        _vm.supplierDialog = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1200",
      "persistent": ""
    },
    model: {
      value: _vm.receivingDialog,
      callback: function ($$v) {
        _vm.receivingDialog = $$v;
      },
      expression: "receivingDialog"
    }
  }, [_c('receiving-form', {
    attrs: {
      "po-id": _vm.headerId
    },
    on: {
      "refresh": function ($event) {
        return _vm.$emit('reload');
      },
      "close-dialog": function ($event) {
        _vm.receivingDialog = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800",
      "persistent": ""
    },
    model: {
      value: _vm.pricingDialog,
      callback: function ($$v) {
        _vm.pricingDialog = $$v;
      },
      expression: "pricingDialog"
    }
  }, [_c('pricing-option', {
    key: _vm.pricingDialogKey,
    attrs: {
      "isBackend": true,
      "record-id": _vm.productPricingSelected
    },
    on: {
      "new-price-update": _vm.updatePricing,
      "close-dialog": function ($event) {
        _vm.pricingDialog = false;
      }
    }
  })], 1), _vm._ssrNode(" "), _c(VSnackbar["a" /* default */], {
    attrs: {
      "timeout": 10000,
      "color": "error",
      "multi-line": "",
      "top": "",
      "right": ""
    },
    scopedSlots: _vm._u([{
      key: "action",
      fn: function ({
        attrs
      }) {
        return [_c(VBtn["a" /* default */], _vm._b({
          attrs: {
            "text": ""
          },
          on: {
            "click": function ($event) {
              _vm.errorSnackbar = false;
            }
          }
        }, 'v-btn', attrs, false), [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)];
      }
    }]),
    model: {
      value: _vm.errorSnackbar,
      callback: function ($$v) {
        _vm.errorSnackbar = $$v;
      },
      expression: "errorSnackbar"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.validateErrorMessage) + "\n    ")]), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    staticClass: "purchasing-form-card",
    attrs: {
      "elevation": "8"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "header-section primary white--text"
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center w-100"
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-3",
    attrs: {
      "large": "",
      "color": "white"
    }
  }, [_vm._v("\n            mdi-file-document-outline\n          ")]), _vm._v(" "), _c('div', [_c('h2', {
    staticClass: "text-h5 mb-0"
  }, [_vm._v("\n              Purchase Order\n              "), _c('span', {
    staticClass: "text-h6 opacity-80"
  }, [_vm._v("#" + _vm._s(_vm.transaction.id || 'New'))])]), _vm._v(" "), _c('div', {
    staticClass: "text-caption opacity-80"
  }, [_vm._v("\n              " + _vm._s(_vm.formattedDate) + "\n            ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-center gap-2"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "color": "success",
      "outlined": "",
      "disabled": !_vm.canReceive
    },
    on: {
      "click": _vm.postReceiving
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n            Receive Goods\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "warning",
      "outlined": "",
      "disabled": !_vm.canCancel
    },
    on: {
      "click": _vm.cancelOrder
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-cancel")]), _vm._v("\n            Cancel\n          ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "white",
      "outlined": "",
      "disabled": !_vm.headerId,
      "loading": _vm.isPrinting
    },
    on: {
      "click": _vm.printPurchaseOrderDirectly
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-printer")]), _vm._v("\n            Print PO\n          ")], 1)], 1)])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "form-content"
  }, [_c(VCard["a" /* default */], {
    class: ['transaction-header', {
      'header-error': _vm.headerError
    }],
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-h6 pb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-information")]), _vm._v("\n          Purchase Order Details\n        ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('div', {
    staticClass: "form-section"
  }, [_c('h4', {
    staticClass: "section-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-calendar")]), _vm._v("\n                  Date & Terms\n                ")], 1), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "Order Date",
      "outlined": "",
      "dense": "",
      "required": "",
      "rules": [_vm.rules.required]
    },
    model: {
      value: _vm.transaction.bookingDate,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "bookingDate", $$v);
      },
      expression: "transaction.bookingDate"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "type": "date",
      "label": "Expected Delivery",
      "outlined": "",
      "dense": ""
    },
    model: {
      value: _vm.transaction.expectedDeliveryDate,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "expectedDeliveryDate", $$v);
      },
      expression: "transaction.expectedDeliveryDate"
    }
  }), _vm._v(" "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.termsList,
      "item-text": "term_name",
      "item-value": "id",
      "label": "Payment Terms",
      "outlined": "",
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": "primary",
            "outlined": ""
          }
        }, [_vm._v("\n                      " + _vm._s(item.term_name) + "\n                    ")])];
      }
    }]),
    model: {
      value: _vm.transaction.termId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "termId", $$v);
      },
      expression: "transaction.termId"
    }
  }), _vm._v(" "), _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Header Discount",
      "outlined": "",
      "dense": "",
      "type": "number",
      "prefix": "$",
      "rules": [_vm.rules.positiveNumber]
    },
    model: {
      value: _vm.transaction.discount,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "discount", $$v);
      },
      expression: "transaction.discount"
    }
  })], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('div', {
    staticClass: "form-section"
  }, [_c('h4', {
    staticClass: "section-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-domain")]), _vm._v("\n                  Supplier & Currency\n                ")], 1), _vm._v(" "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.supplierList,
      "item-text": "name",
      "item-value": "id",
      "label": "Supplier",
      "outlined": "",
      "dense": "",
      "required": "",
      "rules": [_vm.rules.required]
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c('div', {
          staticClass: "d-flex align-center"
        }, [_c(VAvatar["a" /* default */], {
          staticClass: "mr-2",
          attrs: {
            "size": "24",
            "color": "primary"
          }
        }, [_c('span', {
          staticClass: "text-caption white--text"
        }, [_vm._v("\n                          " + _vm._s((item.name || item.company || '').charAt(0)) + "\n                        ")])]), _vm._v("\n                      " + _vm._s(item.name || item.company) + "\n                    ")], 1)];
      }
    }]),
    model: {
      value: _vm.transaction.supplierId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "supplierId", $$v);
      },
      expression: "transaction.supplierId"
    }
  }), _vm._v(" "), _c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.currencyList,
      "item-text": "code",
      "item-value": "id",
      "label": "Currency",
      "outlined": "",
      "dense": "",
      "required": "",
      "rules": [_vm.rules.required]
    },
    on: {
      "input": _vm.currencyChange
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": "secondary",
            "outlined": ""
          }
        }, [_vm._v("\n                      " + _vm._s(item.code) + "\n                    ")])];
      }
    }]),
    model: {
      value: _vm.transaction.currencyId,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "currencyId", $$v);
      },
      expression: "transaction.currencyId"
    }
  }), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-3",
    attrs: {
      "color": "grey lighten-4",
      "flat": ""
    }
  }, [_c('div', {
    staticClass: "text-subtitle-2"
  }, [_vm._v("Exchange Rate")]), _vm._v(" "), _c('div', {
    staticClass: "text-h6 primary--text"
  }, [_vm._v("\n                    " + _vm._s(_vm.formatNumber(_vm.transaction.exchangeRate)) + "\n                  ")])])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('div', {
    staticClass: "form-section"
  }, [_c('h4', {
    staticClass: "section-title"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "small": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-note-text")]), _vm._v("\n                  Notes & Status\n                ")], 1), _vm._v(" "), _c(VTextarea["a" /* default */], {
    attrs: {
      "label": "Order Notes",
      "outlined": "",
      "dense": "",
      "rows": "3",
      "auto-grow": ""
    },
    model: {
      value: _vm.transaction.notes,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "notes", $$v);
      },
      expression: "transaction.notes"
    }
  }), _vm._v(" "), _c(VSelect["a" /* default */], {
    attrs: {
      "items": _vm.statusOptions,
      "label": "Status",
      "outlined": "",
      "dense": ""
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function ({
        item
      }) {
        return [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": _vm.getStatusColor(item),
            "outlined": ""
          }
        }, [_vm._v("\n                      " + _vm._s(item) + "\n                    ")])];
      }
    }]),
    model: {
      value: _vm.transaction.status,
      callback: function ($$v) {
        _vm.$set(_vm.transaction, "status", $$v);
      },
      expression: "transaction.status"
    }
  }), _vm._v(" "), _vm.transaction.user ? _c('div', {
    staticClass: "user-info"
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-3",
    attrs: {
      "color": "grey lighten-5",
      "flat": ""
    }
  }, [_c('div', {
    staticClass: "text-caption"
  }, [_vm._v("Created by")]), _vm._v(" "), _c('div', {
    staticClass: "text-subtitle-2"
  }, [_vm._v("\n                      " + _vm._s(_vm.transaction.user.cus_name) + "\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "text-caption text--secondary"
  }, [_vm._v("\n                      ID: " + _vm._s(_vm.transaction.user.cus_id) + "\n                    ")])])], 1) : _vm._e(), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-3 mt-3",
    attrs: {
      "color": "success lighten-4",
      "flat": ""
    }
  }, [_c('div', {
    staticClass: "text-subtitle-2"
  }, [_vm._v("Total Amount")]), _vm._v(" "), _c('div', {
    staticClass: "text-h4 success--text font-weight-bold"
  }, [_vm._v("\n                    " + _vm._s(_vm.formatCurrency(_vm.grandTotal)) + "\n                  ")])])], 1)])], 1)], 1)], 1), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "line-items-card mt-6",
    attrs: {
      "elevation": "2"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "d-flex justify-space-between align-center"
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "primary"
    }
  }, [_vm._v("mdi-format-list-bulleted")]), _vm._v(" "), _c('span', [_vm._v("Order Items")]), _vm._v(" "), _c(VChip["a" /* default */], {
    staticClass: "ml-3",
    attrs: {
      "small": "",
      "color": "primary",
      "outlined": ""
    }
  }, [_vm._v("\n              " + _vm._s(_vm.transaction.lines.length) + " items\n            ")])], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "disabled": !_vm.transaction.isActive || !_vm.updateAllow
    },
    on: {
      "click": _vm.newRow
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n            Add Item\n          ")], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-0"
  }, [_vm.transaction.lines && _vm.transaction.lines.length > 0 ? _c(VDataTable["a" /* default */], {
    staticClass: "elevation-0 line-items-table",
    attrs: {
      "headers": _vm.enhancedHeaders,
      "items": _vm.transaction.lines,
      "search": _vm.search,
      "item-key": "id",
      "hide-default-footer": "",
      "items-per-page": -1
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function ({
        item,
        index
      }) {
        return [_c('tr', {
          class: ['line-item-row', {
            'error-row': _vm.errorLineNumber === index
          }]
        }, [_c('td', {
          staticClass: "text-center"
        }, [_c(VChip["a" /* default */], {
          attrs: {
            "small": "",
            "color": "grey lighten-2"
          }
        }, [_vm._v("\n                    " + _vm._s(index + 1) + "\n                  ")])], 1), _vm._v(" "), _c('td', {
          staticClass: "product-cell"
        }, [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "items": _vm.productList,
            "item-text": "pro_name",
            "item-value": "id",
            "label": "Select Product",
            "outlined": "",
            "dense": "",
            "hide-details": "",
            "rules": [_vm.rules.required]
          },
          on: {
            "input": function ($event) {
              return _vm.productChange(item);
            }
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function ({
              item: product
            }) {
              return [_c('div', {
                staticClass: "product-selection"
              }, [_c('div', {
                staticClass: "font-weight-medium"
              }, [_vm._v(_vm._s(product.pro_name))]), _vm._v(" "), _c('div', {
                staticClass: "text-caption text--secondary"
              }, [_vm._v("\n                          ID: " + _vm._s(product.id) + "\n                        ")])])];
            }
          }], null, true),
          model: {
            value: item.productId,
            callback: function ($$v) {
              _vm.$set(item, "productId", $$v);
            },
            expression: "item.productId"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticClass: "quantity-cell"
        }, [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "label": "Qty",
            "outlined": "",
            "dense": "",
            "hide-details": "",
            "rules": [_vm.rules.required, _vm.rules.positiveNumber]
          },
          on: {
            "input": function ($event) {
              return _vm.quantityChange(item);
            }
          },
          model: {
            value: item.quantity,
            callback: function ($$v) {
              _vm.$set(item, "quantity", $$v);
            },
            expression: "item.quantity"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticClass: "unit-cell"
        }, [_c(VAutocomplete["a" /* default */], {
          attrs: {
            "items": _vm.unitList,
            "item-text": "name",
            "item-value": "id",
            "label": "Unit",
            "outlined": "",
            "dense": "",
            "hide-details": ""
          },
          on: {
            "input": function ($event) {
              return _vm.unitChange(item);
            }
          },
          scopedSlots: _vm._u([{
            key: "selection",
            fn: function ({
              item: unit
            }) {
              return [_c(VChip["a" /* default */], {
                attrs: {
                  "small": "",
                  "color": "info",
                  "outlined": ""
                }
              }, [_vm._v("\n                        " + _vm._s(unit.name) + "\n                      ")])];
            }
          }], null, true),
          model: {
            value: item.unitId,
            callback: function ($$v) {
              _vm.$set(item, "unitId", $$v);
            },
            expression: "item.unitId"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticClass: "rate-cell"
        }, [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "label": "Rate",
            "outlined": "",
            "dense": "",
            "hide-details": "",
            "rules": [_vm.rules.positiveNumber]
          },
          on: {
            "input": function ($event) {
              return _vm.unitRateChange(item);
            }
          },
          model: {
            value: item.unitRate,
            callback: function ($$v) {
              _vm.$set(item, "unitRate", $$v);
            },
            expression: "item.unitRate"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticClass: "price-cell text-right"
        }, [_c(VChip["a" /* default */], {
          attrs: {
            "color": "warning",
            "outlined": "",
            "clickable": ""
          },
          on: {
            "click": function ($event) {
              return _vm.pricingLogig(item);
            }
          }
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "left": "",
            "small": ""
          }
        }, [_vm._v("mdi-currency-usd")]), _vm._v("\n                    " + _vm._s(_vm.formatCurrency(item.unitPrice)) + "\n                  ")], 1)], 1), _vm._v(" "), _c('td', {
          staticClass: "discount-cell"
        }, [_c(VTextField["a" /* default */], {
          attrs: {
            "type": "number",
            "label": "Discount",
            "outlined": "",
            "dense": "",
            "hide-details": "",
            "prefix": "$"
          },
          on: {
            "input": function ($event) {
              return _vm.discountChange(item);
            }
          },
          model: {
            value: item.discount,
            callback: function ($$v) {
              _vm.$set(item, "discount", $$v);
            },
            expression: "item.discount"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticClass: "total-cell text-right"
        }, [_c('div', {
          staticClass: "total-amount"
        }, [_c('span', {
          staticClass: "text-h6 font-weight-bold"
        }, [_vm._v("\n                      " + _vm._s(_vm.formatCurrency(item.total)) + "\n                    ")])])]), _vm._v(" "), _c('td', {
          staticClass: "action-cell text-center"
        }, [_c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "color": "error",
            "disabled": !_vm.transaction.isActive || !_vm.updateAllow
          },
          on: {
            "click": function ($event) {
              return _vm.deleteItem(item);
            }
          }
        }, [_c(VIcon["a" /* default */], [_vm._v("mdi-delete")])], 1)], 1)])];
      }
    }, {
      key: "no-data",
      fn: function () {
        return [_c('div', {
          staticClass: "text-center pa-8"
        }, [_c(VIcon["a" /* default */], {
          attrs: {
            "size": "64",
            "color": "grey lighten-2"
          }
        }, [_vm._v("mdi-package-variant")]), _vm._v(" "), _c('div', {
          staticClass: "text-h6 mt-4 grey--text"
        }, [_vm._v("No items added yet")]), _vm._v(" "), _c('div', {
          staticClass: "text-body-2 grey--text"
        }, [_vm._v("Click \"Add Item\" to get started")])], 1)];
      },
      proxy: true
    }], null, false, 2987891912)
  }) : _vm._e(), _vm._v(" "), !_vm.transaction.lines || _vm.transaction.lines.length === 0 ? _c('div', {
    staticClass: "empty-state"
  }, [_c(VCard["a" /* default */], {
    staticClass: "text-center pa-12",
    attrs: {
      "flat": "",
      "color": "grey lighten-5"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "80",
      "color": "grey lighten-1"
    }
  }, [_vm._v("mdi-package-variant-closed")]), _vm._v(" "), _c('h3', {
    staticClass: "text-h5 mt-4 grey--text"
  }, [_vm._v("No Items Added")]), _vm._v(" "), _c('p', {
    staticClass: "text-body-1 grey--text mb-6"
  }, [_vm._v("\n                Start by adding your first product to this purchase order\n              ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "large": "",
      "disabled": !_vm.transaction.isActive || !_vm.updateAllow
    },
    on: {
      "click": _vm.newRow
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-plus")]), _vm._v("\n                Add First Item\n              ")], 1)], 1)], 1) : _vm._e()], 1)], 1), _vm._v(" "), _vm.transaction.lines && _vm.transaction.lines.length > 0 ? _c(VCard["a" /* default */], {
    staticClass: "summary-card mt-6",
    attrs: {
      "elevation": "4"
    }
  }, [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "secondary white--text"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white"
    }
  }, [_vm._v("mdi-calculator")]), _vm._v("\n          Purchase Order Summary\n        ")], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "8"
    }
  }, [_c('div', {
    staticClass: "summary-details"
  }, [_c('div', {
    staticClass: "summary-row"
  }, [_c('span', [_vm._v("Subtotal (" + _vm._s(_vm.transaction.lines.length) + " items)")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-medium"
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.subtotal)))])]), _vm._v(" "), _c('div', {
    staticClass: "summary-row"
  }, [_c('span', [_vm._v("Header Discount")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-medium text-error"
  }, [_vm._v("\n                    -" + _vm._s(_vm.formatCurrency(_vm.headerDiscount)) + "\n                  ")])]), _vm._v(" "), _c(VDivider["a" /* default */], {
    staticClass: "my-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "summary-row total-row"
  }, [_c('span', {
    staticClass: "text-h6"
  }, [_vm._v("Grand Total")]), _vm._v(" "), _c('span', {
    staticClass: "text-h5 font-weight-bold primary--text"
  }, [_vm._v("\n                    " + _vm._s(_vm.formatCurrency(_vm.grandTotal)) + "\n                  ")])])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('div', {
    staticClass: "grand-total-display"
  }, [_c('div', {
    staticClass: "text-caption grey--text"
  }, [_vm._v("Total Amount")]), _vm._v(" "), _c('div', {
    staticClass: "text-h3 primary--text font-weight-bold"
  }, [_vm._v("\n                  " + _vm._s(_vm.formatCurrency(_vm.grandTotal)) + "\n                ")]), _vm._v(" "), _c(VChip["a" /* default */], {
    staticClass: "mt-2",
    attrs: {
      "color": "success",
      "outlined": "",
      "small": ""
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.selectedCurrencyCode) + "\n                ")])], 1)])], 1)], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "actions-footer pa-6"
  }, [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "large": "",
      "text": "",
      "color": "grey darken-1"
    },
    on: {
      "click": _vm.toggleDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n        Cancel\n      ")], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "large": "",
      "color": "primary",
      "disabled": !_vm.canSave,
      "loading": _vm.isloading
    },
    on: {
      "click": _vm.postTransaction
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": ""
    }
  }, [_vm._v("mdi-content-save")]), _vm._v("\n        " + _vm._s(_vm.isUpdate ? 'Update' : 'Create') + " Purchase Order\n      ")], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PurchasingFormCRUD.vue?vue&type=template&id=2bb25126&scoped=true

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(477);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: ./components/PricingOption.vue + 4 modules
var PricingOption = __webpack_require__(109);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PurchasingFormCRUD.vue?vue&type=script&lang=js




/* harmony default export */ var PurchasingFormCRUDvue_type_script_lang_js = ({
  name: 'EnhancedPurchasingFormWithPrint',
  components: {
    PricingOption: PricingOption["default"]
  },
  props: {
    headerId: {
      type: Number,
      default: 0
    },
    isUpdate: {
      type: Boolean,
      default: false
    },
    updateAllow: {
      type: Boolean,
      default: true
    }
  },
  directives: {
    commaThousand: comma_thousand["a" /* default */]
  },
  async created() {
    await this.initializeForm();
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),
    supplierList() {
      return this.findAllClient || [];
    },
    productList() {
      return this.findAllProduct || [];
    },
    unitList() {
      return this.findAllUnit || [];
    },
    currencyList() {
      return this.findAllCurrency || [];
    },
    termsList() {
      return [{
        id: 1,
        term_name: 'Net 30'
      }, {
        id: 2,
        term_name: 'Net 60'
      }, {
        id: 3,
        term_name: 'COD'
      }, {
        id: 4,
        term_name: 'Prepaid'
      }];
    },
    statusOptions() {
      return ['Draft', 'Pending Approval', 'Approved', 'Sent to Supplier', 'Partially Received', 'Fully Received', 'Cancelled'];
    },
    currentTerminal() {
      var _this$findAllTerminal;
      return ((_this$findAllTerminal = this.findAllTerminal) === null || _this$findAllTerminal === void 0 ? void 0 : _this$findAllTerminal.find(el => el.id === this.findSelectedTerminal)) || {};
    },
    user() {
      return this.$auth.user || {};
    },
    formattedDate() {
      return this.transaction.bookingDate ? new Date(this.transaction.bookingDate).toLocaleDateString() : 'Today';
    },
    selectedCurrencyCode() {
      const currency = this.currencyList.find(c => c.id === this.transaction.currencyId);
      return (currency === null || currency === void 0 ? void 0 : currency.code) || 'USD';
    },
    canSave() {
      var _this$transaction$lin;
      return this.transaction.isActive && this.updateAllow && ((_this$transaction$lin = this.transaction.lines) === null || _this$transaction$lin === void 0 ? void 0 : _this$transaction$lin.length) > 0 && !this.isloading;
    },
    canCancel() {
      return this.isUpdate && this.transaction.isActive;
    },
    canReceive() {
      return this.isUpdate && this.transaction.status && ['Approved', 'Sent to Supplier', 'Partially Received'].includes(this.transaction.status);
    },
    subtotal() {
      var _this$transaction$lin2;
      return ((_this$transaction$lin2 = this.transaction.lines) === null || _this$transaction$lin2 === void 0 ? void 0 : _this$transaction$lin2.reduce((total, item) => {
        return total + (item.total || 0);
      }, 0)) || 0;
    },
    headerDiscount() {
      const discount = parseFloat(this.transaction.discount || 0);
      return isNaN(discount) ? 0 : discount;
    },
    grandTotal() {
      return Math.max(0, this.subtotal - this.headerDiscount);
    },
    enhancedHeaders() {
      return [{
        text: '#',
        value: 'index',
        sortable: false,
        width: 80,
        align: 'center'
      }, {
        text: 'Product',
        value: 'productId',
        sortable: false,
        width: 250
      }, {
        text: 'Quantity',
        value: 'quantity',
        sortable: false,
        width: 120,
        align: 'center'
      }, {
        text: 'Unit',
        value: 'unitId',
        sortable: false,
        width: 120,
        align: 'center'
      }, {
        text: 'Rate',
        value: 'unitRate',
        sortable: false,
        width: 100,
        align: 'center'
      }, {
        text: 'Unit Price',
        value: 'unitPrice',
        sortable: false,
        width: 120,
        align: 'right'
      }, {
        text: 'Discount',
        value: 'discount',
        sortable: false,
        width: 120,
        align: 'center'
      }, {
        text: 'Total',
        value: 'total',
        sortable: false,
        width: 150,
        align: 'right'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        width: 100,
        align: 'center'
      }];
    },
    rules() {
      return {
        required: value => !!value || 'This field is required',
        positiveNumber: value => {
          if (!value) return true;
          const num = parseFloat(value);
          return !isNaN(num) && num >= 0 || 'Must be a positive number';
        },
        nonZeroNumber: value => {
          if (!value) return 'This field is required';
          const num = parseFloat(value);
          return !isNaN(num) && num > 0 || 'Must be greater than 0';
        }
      };
    }
  },
  data() {
    return {
      isloading: false,
      errorSnackbar: false,
      supplierDialog: false,
      receivingDialog: false,
      pricingDialog: false,
      pricingDialogKey: 1,
      isPrinting: false,
      search: '',
      headerError: false,
      validateErrorMessage: '',
      errorLineNumber: null,
      transaction: {
        isActive: true,
        exchangeRate: 1,
        lines: [],
        bookingDate: new Date().toISOString().substr(0, 10),
        discount: 0,
        status: 'Draft'
      },
      productPricingSelected: null
    };
  },
  methods: {
    async initializeForm() {
      this.isloading = true;
      try {
        if (this.isUpdate) {
          await this.loadTransaction();
        } else {
          this.initializeNewTransaction();
        }
      } catch (error) {
        this.showError('Failed to initialize form', error);
      } finally {
        this.isloading = false;
      }
    },
    initializeNewTransaction() {
      const today = new Date().toISOString().substr(0, 10);
      this.transaction = {
        ...this.transaction,
        bookingDate: today,
        supplierId: null,
        currencyId: 1,
        discount: 0,
        status: 'Draft'
      };
      this.newRow();
    },
    async printPurchaseOrderDirectly() {
      if (!this.headerId) {
        this.showError('Please save the purchase order first before printing');
        return;
      }
      this.isPrinting = true;
      try {
        const response = await this.$axios.get(`api/purchasing/find/${this.headerId}`);
        const poData = response.data;
        this.createAndPrintPurchaseOrder(poData);
      } catch (error) {
        console.error('Error fetching PO data:', error);
        this.showError('Failed to load purchase order data for printing');
      } finally {
        this.isPrinting = false;
      }
    },
    createAndPrintPurchaseOrder(poData) {
      try {
        const poHTML = this.generatePurchaseOrderHTML(poData);
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        if (!printWindow) {
          this.showError('Unable to open print window. Please check popup blocker settings.');
          return;
        }
        printWindow.document.open();
        printWindow.document.write(poHTML);
        printWindow.document.close();
        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print();
              setTimeout(() => {
                printWindow.close();
              }, 100);
            } catch (e) {
              console.error('Print error:', e);
              printWindow.close();
            }
          }, 500);
        };
      } catch (error) {
        console.error('Error creating print PO:', error);
        this.showError('Failed to generate purchase order for printing');
      }
    },
    generatePurchaseOrderHTML(header) {
      var _this$$store$getters$, _header$lines, _header$supplier, _header$supplier2, _header$supplier3, _header$supplier4, _header$supplier5, _header$user, _header$currency, _header$currency2, _header$currency3, _header$user2;
      const totalDiscount = this.calculateTotalDiscount(header);
      const companyDataV1 = ((_this$$store$getters$ = this.$store.getters.findAllCompany) === null || _this$$store$getters$ === void 0 ? void 0 : _this$$store$getters$[0]) || {};
      const formatDate = dateString => {
        if (!dateString) return 'N/A';
        try {
          const date = new Date(dateString);
          return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });
        } catch (error) {
          return dateString;
        }
      };
      const formatNumber = val => {
        return new Intl.NumberFormat().format(val || 0);
      };
      const linesHTML = ((_header$lines = header.lines) === null || _header$lines === void 0 ? void 0 : _header$lines.map((line, index) => {
        var _line$product, _line$product2, _line$unit;
        return `
        <tr>
          <td style="text-align: center;">${index + 1}</td>
          <td>
            <strong>${((_line$product = line.product) === null || _line$product === void 0 ? void 0 : _line$product.pro_name) || 'Unknown Product'}</strong><br>
            <small>ID: ${((_line$product2 = line.product) === null || _line$product2 === void 0 ? void 0 : _line$product2.pro_id) || line.productId}</small>
          </td>
          <td style="text-align: center;">${formatNumber(line.quantity)}</td>
          <td style="text-align: center;">${((_line$unit = line.unit) === null || _line$unit === void 0 ? void 0 : _line$unit.name) || 'ຊີ້ນ'}</td>
          <td style="text-align: right;">${formatNumber(line.unitPrice || line.price)}</td>
          <td style="text-align: right;">${formatNumber(line.discount)}</td>
          <td style="text-align: right;"><strong>${formatNumber(line.total)}</strong></td>
        </tr>
      `;
      }).join('')) || '<tr><td colspan="7" style="text-align: center; padding: 40px;">No items</td></tr>';
      return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Purchase Order #${header.id}</title>
    <style>
        * { font-family: 'Arial', sans-serif; margin: 0; padding: 0; box-sizing: border-box; }
        body { padding: 20px; background: white; color: #333; line-height: 1.4; }
        .company-header { display: flex; justify-content: space-between; margin-bottom: 30px; padding-bottom: 15px; border-bottom: 3px solid #1976d2; }
        .company-info h2 { color: #1976d2; font-size: 24px; margin-bottom: 8px; font-weight: bold; }
        .company-info p { margin: 4px 0; color: #555; }
        .po-title { text-align: center; margin: 20px 0 30px 0; }
        .po-title h1 { color: #1976d2; font-size: 28px; font-weight: bold; }
        .info-section { display: flex; gap: 30px; margin-bottom: 30px; }
        .info-card { flex: 1; background: #f8f9fa; padding: 20px; border-radius: 8px; }
        .info-header { color: #1976d2; font-size: 16px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #1976d2; padding-bottom: 8px; }
        .info-row { margin-bottom: 8px; }
        .info-row strong { display: inline-block; min-width: 120px; color: #495057; }
        .products-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        .products-table th { background: #1976d2; color: white; padding: 12px 8px; text-align: center; font-weight: bold; border: 1px solid #1976d2; font-size: 11px; }
        .products-table td { padding: 10px 8px; border: 1px solid #ddd; vertical-align: top; font-size: 12px; }
        .products-table tr:nth-child(even) { background: #f9f9f9; }
        .summary-section { float: right; width: 300px; margin-bottom: 30px; }
        .summary-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #ddd; }
        .total-row { display: flex; justify-content: space-between; padding: 12px 0; margin-top: 10px; border-top: 2px solid #1976d2; font-weight: bold; font-size: 16px; color: #1976d2; }
        .terms-section { clear: both; margin-top: 40px; padding: 20px; background: #f8f9fa; border-radius: 8px; }
        .terms-header { color: #1976d2; font-weight: bold; margin-bottom: 10px; }
        .signature-section { display: flex; justify-content: space-between; margin-top: 50px; }
        .signature-box { text-align: center; width: 200px; }
        .signature-line { border-bottom: 1px solid #333; height: 50px; margin-bottom: 10px; }
        .footer-section { margin-top: 40px; text-align: center; padding-top: 20px; border-top: 1px solid #ddd; }
        @media print { body { margin: 0; } @page { margin: 1cm; size: A4; } }
    </style>
</head>
<body>
    <div class="company-header">
        <div class="company-info">
            <h2>${companyDataV1.name || 'Company Name'}</h2>
            <p>${companyDataV1.address || 'Company Address'}</p>
            <p>Tel: ${companyDataV1.tel || 'Phone Number'}</p>
        </div>
        <div class="po-info">
            <p><strong>Date:</strong> ${formatDate(new Date())}</p>
            <p><strong>PO #:</strong> ${header.id}</p>
        </div>
    </div>
    
    <div class="po-title">
        <h1>ໃບສັ່ງຊື້ / PURCHASE ORDER</h1>
    </div>
    
    <div class="info-section">
        <div class="info-card">
            <div class="info-header">ຂໍ້ມູນຜູ້ຂາຍ / Supplier Information</div>
            <div class="info-row"><strong>Supplier ID:</strong> ${((_header$supplier = header.supplier) === null || _header$supplier === void 0 ? void 0 : _header$supplier.id) || ''}</div>
            <div class="info-row"><strong>Company:</strong> ${((_header$supplier2 = header.supplier) === null || _header$supplier2 === void 0 ? void 0 : _header$supplier2.company) || ''}</div>
            <div class="info-row"><strong>Contact:</strong> ${((_header$supplier3 = header.supplier) === null || _header$supplier3 === void 0 ? void 0 : _header$supplier3.contact) || ''}</div>
            <div class="info-row"><strong>Phone:</strong> ${((_header$supplier4 = header.supplier) === null || _header$supplier4 === void 0 ? void 0 : _header$supplier4.telephone) || ''}</div>
            <div class="info-row"><strong>Address:</strong> ${((_header$supplier5 = header.supplier) === null || _header$supplier5 === void 0 ? void 0 : _header$supplier5.address) || ''}</div>
        </div>
        
        <div class="info-card">
            <div class="info-header">ລາຍລະອຽດການສັ່ງຊື້ / Order Details</div>
            <div class="info-row"><strong>PO Number:</strong> ${header.id}</div>
            <div class="info-row"><strong>Order Date:</strong> ${formatDate(header.bookingDate)}</div>
            <div class="info-row"><strong>Prepared By:</strong> ${((_header$user = header.user) === null || _header$user === void 0 ? void 0 : _header$user.cus_name) || 'N/A'}</div>
            <div class="info-row"><strong>Currency:</strong> ${((_header$currency = header.currency) === null || _header$currency === void 0 ? void 0 : _header$currency.code) || 'LAK'}</div>
            <div class="info-row"><strong>Status:</strong> ${header.status || 'Draft'}</div>
        </div>
    </div>
    
    <table class="products-table">
        <thead>
            <tr>
                <th>ລດ / No.</th>
                <th>ລາຍລະອຽດ / Description</th>
                <th>ຈຳນວນ / Qty</th>
                <th>ຫົວໜ່ວຍ / Unit</th>
                <th>ລາຄາຕໍ່ຫົວໜ່ວຍ / Unit Price</th>
                <th>ສ່ວນຫຼຸດ / Discount</th>
                <th>ຈຳນວນເງິນ / Amount</th>
            </tr>
        </thead>
        <tbody>
            ${linesHTML}
        </tbody>
    </table>
    
    <div class="summary-section">
        <div class="summary-row">
            <span>ລວມຍ່ອຍ / Subtotal:</span>
            <span>${formatNumber(header.total + totalDiscount)}</span>
        </div>
        <div class="summary-row">
            <span>ສ່ວນຫຼຸດລວມ / Total Discount:</span>
            <span>-${formatNumber(totalDiscount)}</span>
        </div>
        <div class="total-row">
            <span>ລວມທັງໝົດ / TOTAL:</span>
            <span>${formatNumber(header.total)} ${((_header$currency2 = header.currency) === null || _header$currency2 === void 0 ? void 0 : _header$currency2.code) || 'LAK'}</span>
        </div>
    </div>
    
    <div class="terms-section">
        <div class="terms-header">Terms & Conditions / ເງື່ອນໄຂ</div>
        <p>1. All prices are in ${((_header$currency3 = header.currency) === null || _header$currency3 === void 0 ? void 0 : _header$currency3.code) || 'LAK'} and exclude applicable taxes unless stated otherwise.</p>
        <p>2. Payment terms: Net 30 days from invoice date.</p>
        <p>3. Goods must be delivered in good condition and according to specifications.</p>
        ${header.notes ? `<p><strong>Special Instructions:</strong> ${header.notes}</p>` : ''}
    </div>
    
    <div class="signature-section">
        <div class="signature-box">
            <div class="signature-line"></div>
            <p><strong>Prepared By</strong></p>
            <p>${((_header$user2 = header.user) === null || _header$user2 === void 0 ? void 0 : _header$user2.cus_name) || 'N/A'}</p>
            <p>Date: ${formatDate(new Date())}</p>
        </div>
        <div class="signature-box">
            <div class="signature-line"></div>
            <p><strong>Approved By</strong></p>
            <p>________________________</p>
            <p>Date: _______________</p>
        </div>
    </div>
    
    <div class="footer-section">
        <p><strong>Thank you for your business / ຂອບໃຈທີ່ໃຫ້ການສະໜັບສະໜູນ</strong></p>
    </div>
</body>
</html>
      `;
    },
    calculateTotalDiscount(header) {
      if (!header || !header.lines) return 0;
      let totalDiscount = 0;
      for (const line of header.lines) {
        totalDiscount += line.discount || 0;
      }
      totalDiscount += header.discount || 0;
      return totalDiscount;
    },
    currencyChange() {
      const currency = this.currencyList.find(el => el.id === this.transaction.currencyId);
      if (currency) {
        this.transaction.exchangeRate = currency.rate || 1;
      }
    },
    findCurrency(currencyId) {
      var _this$findAllCurrency;
      return ((_this$findAllCurrency = this.findAllCurrency) === null || _this$findAllCurrency === void 0 ? void 0 : _this$findAllCurrency.find(el => el.id === currencyId)) || {};
    },
    productChange(item) {
      const product = this.productList.find(el => el.id === item.productId);
      if (!product) return;
      const currency = this.findCurrency(product.purchaseCurrencyId || product.saleCurrencyId);
      const localPrice = (product.pro_purchase_price || product.pro_price || 0) * (currency.rate || 1);
      this.$set(item, 'unitPrice', localPrice);
      if (product.stockUnitId) {
        this.$set(item, 'unitId', product.stockUnitId);
        const unit = this.unitList.find(el => el.id === product.stockUnitId);
        if (unit !== null && unit !== void 0 && unit.unitRate) {
          this.$set(item, 'unitRate', unit.unitRate);
        } else {
          this.$set(item, 'unitRate', 1);
        }
      } else {
        this.$set(item, 'unitId', null);
        this.$set(item, 'unitRate', 1);
      }
      this.calculateLineTotal(item);
    },
    unitChange(item) {
      const unit = this.unitList.find(el => el.id === item.unitId);
      if (unit) {
        this.$set(item, 'unitRate', unit.unitRate || 1);
        this.calculateLineTotal(item);
      }
    },
    quantityChange(item) {
      this.calculateLineTotal(item);
    },
    unitRateChange(item) {
      this.calculateLineTotal(item);
    },
    discountChange(item) {
      this.calculateLineTotal(item);
    },
    calculateLineTotal(item) {
      const qty = parseFloat(item.quantity) || 0;
      const unitRate = parseFloat(item.unitRate) || 1;
      const unitPrice = parseFloat(item.unitPrice) || 0;
      const discount = parseFloat(item.discount) || 0;
      const total = Math.max(0, qty * unitRate * unitPrice - discount);
      this.$set(item, 'total', total);
    },
    newRow() {
      const defaultLine = {
        quantity: 1,
        unitRate: 1,
        unitPrice: 0,
        discount: 0,
        total: 0,
        isActive: true,
        productId: null,
        unitId: null
      };
      this.transaction.lines.push(defaultLine);
    },
    async deleteItem(item) {
      try {
        this.isloading = true;
        if (item.id) {
          await this.$axios.delete(`api/purchasingLine/find/${item.id}`);
        }
        const index = this.transaction.lines.indexOf(item);
        if (index > -1) {
          this.transaction.lines.splice(index, 1);
        }
      } catch (error) {
        this.showError('Failed to delete item', error);
      } finally {
        this.isloading = false;
      }
    },
    getStatusColor(status) {
      const colorMap = {
        'Draft': 'grey',
        'Pending Approval': 'orange',
        'Approved': 'green',
        'Sent to Supplier': 'blue',
        'Partially Received': 'purple',
        'Fully Received': 'success',
        'Cancelled': 'error'
      };
      return colorMap[status] || 'grey';
    },
    postReceiving() {
      this.receivingDialog = true;
    },
    cancelOrder() {
      Object(common["a" /* confirmSwal */])(this.$swal, 'Cancel Order', 'Are you sure you want to cancel this purchase order?', () => {
        this.transaction.status = 'Cancelled';
        this.postTransaction();
      });
    },
    updatePricing(priceInfo) {
      const index = this.transaction.lines.findIndex(line => line.productId === this.productPricingSelected);
      if (index < 0) return;
      const line = this.transaction.lines[index];
      const newPrice = parseFloat(priceInfo.amount) || 0;
      if (priceInfo.type === 'Price') {
        this.$set(line, 'unitPrice', newPrice);
      } else {
        const currentPrice = parseFloat(line.unitPrice) || 0;
        const updatedPrice = currentPrice * (1 + newPrice / 100);
        this.$set(line, 'unitPrice', updatedPrice);
      }
      this.calculateLineTotal(line);
    },
    async loadTransaction() {
      try {
        const response = await this.$axios.get(`api/purchasing/find/${this.headerId}`);
        this.transaction = response.data;
      } catch (error) {
        this.showError('Failed to load purchase order', error);
        throw error;
      }
    },
    async postTransaction() {
      if (!this.validateHeader() || !this.validateAllLines()) {
        return;
      }
      this.isloading = true;
      try {
        this.prepareTransactionForSubmit();
        const url = this.isUpdate ? `api/purchasing/update/${this.headerId}` : `api/purchasing/create`;
        const method = this.isUpdate ? 'put' : 'post';
        const response = await this.$axios[method](url, this.transaction);
        this.$emit('reload');
        Object(common["m" /* swalSuccess */])(this.$swal, 'Success', 'Purchase order saved successfully');
      } catch (error) {
        this.handleSubmitError(error);
      } finally {
        this.isloading = false;
      }
    },
    prepareTransactionForSubmit() {
      this.transaction.lines.forEach(line => {
        line.quantity = parseFloat(line.quantity) || 0;
        line.unitRate = parseFloat(line.unitRate) || 1;
        line.unitPrice = parseFloat(line.unitPrice) || 0;
        line.discount = parseFloat(line.discount) || 0;
        line.total = parseFloat(line.total) || 0;
      });
      this.transaction.userId = this.user.id;
      this.transaction.total = this.grandTotal;
      this.transaction.discount = this.headerDiscount;
      this.transaction.locationId = this.currentTerminal.locationId;
    },
    handleSubmitError(error) {
      console.error('Submit error:', error);
      this.showError('Failed to save purchase order', error);
    },
    validateHeader() {
      this.headerError = false;
      const errors = [];
      if (!this.transaction.currencyId) {
        errors.push('Currency is required');
      }
      if (!this.transaction.supplierId) {
        errors.push('Supplier is required');
      }
      if (!this.transaction.lines || this.transaction.lines.length === 0) {
        errors.push('At least one line item is required');
      }
      if (errors.length > 0) {
        this.headerError = true;
        this.showError(errors.join(', '));
        return false;
      }
      return true;
    },
    validateLine(item, lineNumber) {
      const errors = [];
      if (!item.productId) {
        errors.push(`Line ${lineNumber}: Product is required`);
      }
      const quantity = parseFloat(item.quantity);
      if (!quantity || quantity <= 0) {
        errors.push(`Line ${lineNumber}: Quantity must be greater than 0`);
      }
      if (errors.length > 0) {
        this.errorLineNumber = lineNumber - 1;
        this.showError(errors.join(', '));
        return false;
      }
      return true;
    },
    validateAllLines() {
      for (let i = 0; i < this.transaction.lines.length; i++) {
        if (!this.validateLine(this.transaction.lines[i], i + 1)) {
          return false;
        }
      }
      this.errorLineNumber = null;
      return true;
    },
    pricingLogig(item) {
      this.productPricingSelected = item.productId;
      this.pricingDialogKey += 1;
      this.pricingDialog = true;
    },
    toggleDialog() {
      this.$emit('close-dialog');
    },
    formatCurrency(amount) {
      const num = parseFloat(amount) || 0;
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.selectedCurrencyCode,
        minimumFractionDigits: 2
      }).format(num);
    },
    getFormatNum(val) {
      return Object(common["e" /* getFormatNum */])(val);
    },
    formatNumber(val) {
      return new Intl.NumberFormat().format(val || 0);
    },
    showError(message, error = null) {
      this.validateErrorMessage = message;
      this.errorSnackbar = true;
      if (error) {
        console.error('Error details:', error);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/PurchasingFormCRUD.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PurchasingFormCRUDvue_type_script_lang_js = (PurchasingFormCRUDvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/PurchasingFormCRUD.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(593)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PurchasingFormCRUDvue_type_script_lang_js,
  PurchasingFormCRUDvue_type_template_id_2bb25126_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "2bb25126",
  "b9d1a59a"
  
)

/* harmony default export */ var PurchasingFormCRUD = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PricingOption: __webpack_require__(109).default})


/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchasingFormCRUD_vue_vue_type_style_index_0_id_2bb25126_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(548);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchasingFormCRUD_vue_vue_type_style_index_0_id_2bb25126_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchasingFormCRUD_vue_vue_type_style_index_0_id_2bb25126_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchasingFormCRUD_vue_vue_type_style_index_0_id_2bb25126_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchasingFormCRUD_vue_vue_type_style_index_0_id_2bb25126_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".purchasing-form-container[data-v-2bb25126]{background:linear-gradient(135deg,#f5f7fa,#c3cfe2);min-height:100vh;padding:20px}.purchasing-form-card[data-v-2bb25126]{border-radius:16px!important;margin:0 auto;max-width:1400px;overflow:hidden}.header-section[data-v-2bb25126]{background:linear-gradient(135deg,var(--v-primary-base) 0,var(--v-primary-darken2) 100%);border-radius:0!important;padding:24px!important}.loading-card[data-v-2bb25126]{border-radius:16px!important}.form-content[data-v-2bb25126]{padding:32px!important}.transaction-header[data-v-2bb25126]{border-radius:12px!important;transition:all .3s ease}.transaction-header.header-error[data-v-2bb25126]{border:2px solid var(--v-error-base)!important;box-shadow:0 0 0 3px rgba(var(--v-error-base),.1)}.section-title[data-v-2bb25126]{align-items:center;color:var(--v-primary-base);display:flex;font-size:.95rem;font-weight:600;margin-bottom:16px}.form-section[data-v-2bb25126]{padding:8px 0}.user-info[data-v-2bb25126]{margin-top:16px}.line-items-card[data-v-2bb25126]{border-radius:12px!important}.line-items-table[data-v-2bb25126]{border-radius:0 0 12px 12px!important}.line-item-row[data-v-2bb25126]{transition:all .2s ease}.line-item-row[data-v-2bb25126]:hover{background-color:rgba(var(--v-primary-base),.04)!important}.error-row[data-v-2bb25126]{background-color:rgba(var(--v-error-base),.1)!important;border-left:4px solid var(--v-error-base)!important}.product-cell[data-v-2bb25126]{min-width:250px}.product-selection[data-v-2bb25126]{max-width:200px;overflow:hidden}.discount-cell[data-v-2bb25126],.quantity-cell[data-v-2bb25126],.rate-cell[data-v-2bb25126],.unit-cell[data-v-2bb25126]{min-width:120px}.price-cell[data-v-2bb25126],.total-cell[data-v-2bb25126]{min-width:140px}.action-cell[data-v-2bb25126]{min-width:80px}.total-amount[data-v-2bb25126]{background:linear-gradient(135deg,rgba(var(--v-success-base),.1) 0,rgba(var(--v-success-base),.05) 100%);border-left:4px solid var(--v-success-base);border-radius:8px;font-family:\"Roboto Mono\",monospace;padding:8px 12px}.summary-card[data-v-2bb25126]{border:1px solid rgba(var(--v-primary-base),.1);border-radius:12px!important}.summary-details[data-v-2bb25126]{font-family:\"Roboto\",sans-serif}.summary-row[data-v-2bb25126]{align-items:center;border-bottom:1px solid rgba(0,0,0,.05);display:flex;justify-content:space-between;padding:12px 0}.summary-row[data-v-2bb25126]:last-child{border-bottom:none}.total-row[data-v-2bb25126]{background:linear-gradient(135deg,rgba(var(--v-primary-base),.08) 0,rgba(var(--v-primary-base),.04) 100%);border-radius:8px;margin:12px -20px;padding:16px 20px}.grand-total-display[data-v-2bb25126]{background:linear-gradient(135deg,rgba(var(--v-primary-base),.05) 0,rgba(var(--v-secondary-base),.05) 100%);border:2px dashed rgba(var(--v-primary-base),.2);border-radius:16px;padding:24px}.actions-footer[data-v-2bb25126]{background:linear-gradient(135deg,#f8f9fa,#e9ecef);border-top:1px solid rgba(0,0,0,.08)}.empty-state[data-v-2bb25126]{margin:32px 0}.gap-2>*+*[data-v-2bb25126]{margin-left:8px}.line-item-row[data-v-2bb25126]{animation:slideInFromLeft-2bb25126 .3s ease-out}@keyframes slideInFromLeft-2bb25126{0%{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}.purchasing-form-card[data-v-2bb25126]{animation:fadeInUp-2bb25126 .5s ease-out}@keyframes fadeInUp-2bb25126{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@media (max-width:768px){.purchasing-form-container[data-v-2bb25126]{padding:12px}.form-content[data-v-2bb25126],.header-section[data-v-2bb25126]{padding:16px!important}.header-section .d-flex[data-v-2bb25126]{flex-direction:column;gap:16px}.product-cell[data-v-2bb25126]{min-width:200px}.discount-cell[data-v-2bb25126],.quantity-cell[data-v-2bb25126],.rate-cell[data-v-2bb25126],.unit-cell[data-v-2bb25126]{min-width:100px}}@media (max-width:480px){.line-items-table[data-v-2bb25126]{font-size:.875rem}.total-amount[data-v-2bb25126]{font-size:.8rem;padding:6px 8px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=purchasing-form-c-r-u-d.js.map