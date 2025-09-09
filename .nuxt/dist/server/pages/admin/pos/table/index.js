exports.ids = [211];
exports.modules = {

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1035);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("5cf0f782", content, true)

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-slider .v-slider__thumb,.theme--light.v-slider .v-slider__track-background,.theme--light.v-slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--dark.v-slider .v-slider__thumb,.theme--dark.v-slider .v-slider__track-background,.theme--dark.v-slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.v-slider{align-items:center;cursor:default;display:flex;flex:1;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-slider input{cursor:default;display:none;padding:0;width:100%}.v-slider__track-container{border-radius:0;position:absolute}.v-slider__thumb-container,.v-slider__track-background,.v-slider__track-fill{position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container{outline:none;top:50%}.v-slider__thumb-container:hover .v-slider__thumb:before{transform:scale(1)}.v-slider__thumb{height:12px;left:-6px;top:50%;transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;width:12px}.v-slider__thumb,.v-slider__thumb:before{border-radius:50%;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb:before{background:currentColor;color:inherit;content:\"\";height:36px;left:-12px;opacity:.3;pointer-events:none;top:-12px;transform:scale(.1);width:36px}.v-slider__thumb:after{content:\"\";height:42px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:42px}.v-slider__tick,.v-slider__ticks-container{position:absolute}.v-slider__tick{background-color:rgba(0,0,0,.5);border-radius:0;opacity:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__tick--filled{background-color:hsla(0,0%,100%,.5)}.v-application--is-ltr .v-slider__tick:first-child .v-slider__tick-label{transform:none}.v-application--is-rtl .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(100%)}.v-application--is-ltr .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider__tick:last-child .v-slider__tick-label{transform:none}.v-slider__tick-label{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.v-slider__thumb-label-container{top:0}.v-slider__thumb-label,.v-slider__thumb-label-container{left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{align-items:center;border-radius:50% 50% 0;bottom:100%;color:#fff;display:flex;font-size:.75rem;height:32px;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:32px}.v-slider--horizontal{margin-left:8px;margin-right:8px;min-height:32px}.v-slider--horizontal .v-slider__track-container{height:2px;left:0;top:50%;transform:translateY(-50%);width:100%}.v-slider--horizontal .v-slider__track-background,.v-slider--horizontal .v-slider__track-fill{height:100%}.v-slider--horizontal .v-slider__ticks-container{height:2px;left:0;width:100%}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(0)}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(100%)}.v-slider--horizontal .v-slider__tick .v-slider__tick-label{top:8px}.v-application--is-ltr .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(-50%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(50%)}.v-slider--horizontal .v-slider__thumb-label{transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)}.v-slider--horizontal .v-slider__thumb-label>*{transform:rotate(-45deg)}.v-slider--vertical{margin-bottom:12px;margin-top:12px;min-height:150px}.v-slider--vertical .v-slider__track-container{height:100%;left:50%;top:0;transform:translateX(-50%);width:2px}.v-slider--vertical .v-slider__track-background,.v-slider--vertical .v-slider__track-fill{width:100%}.v-slider--vertical .v-slider__thumb-container{left:50%}.v-slider--vertical .v-slider__ticks-container{height:100%;left:50%;top:0;transform:translateX(-50%);width:2px}.v-application--is-ltr .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{left:12px;transform:translateY(-50%)}.v-application--is-rtl .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{right:12px;transform:translateY(-50%)}.v-slider--vertical .v-slider__thumb-label>*{transform:rotate(-135deg)}.v-slider__thumb-container--focused .v-slider__thumb:before{transform:scale(1)}.v-slider--active .v-slider__tick{opacity:1}.v-slider__thumb-container--active .v-slider__thumb:before{transform:scale(1.5)!important}.v-slider--disabled{pointer-events:none}.v-slider--disabled .v-slider__thumb{height:8px;left:-4px;width:8px}.v-slider--disabled .v-slider__thumb:before{display:none}.v-slider__ticks-container--always-show .v-slider__tick{opacity:1}.v-input__slider.v-input--is-readonly>.v-input__control{pointer-events:none}.v-application--is-ltr .v-input__slider .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-application--is-ltr .v-input__slider--inverse-label .v-input__slot .v-label,.v-application--is-rtl .v-input__slider .v-input__slot .v-label{margin-left:12px;margin-right:0}.v-application--is-rtl .v-input__slider--inverse-label .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-input__slider--vertical{align-items:center}.v-application--is-ltr .v-input__slider--vertical{flex-direction:column-reverse}.v-application--is-rtl .v-input__slider--vertical{flex-direction:column}.v-input__slider--vertical .v-input__append-outer,.v-input__slider--vertical .v-input__prepend-outer,.v-input__slider--vertical .v-input__slot{margin:0}.v-input__slider--vertical .v-messages{display:none}.v-input--has-state .v-slider__track-background{opacity:.4}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c87d8da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(789);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c87d8da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c87d8da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c87d8da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c87d8da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".table-card[data-v-5c87d8da]{border-left:4px solid transparent;transition:all .3s ease}.table-card--available[data-v-5c87d8da]{border-left-color:#4caf50}.table-card--occupied[data-v-5c87d8da]{border-left-color:#f44336}.table-card--cleaning[data-v-5c87d8da]{border-left-color:#ff9800}.table-card--reserved[data-v-5c87d8da]{border-left-color:#2196f3}.table-card[data-v-5c87d8da]:hover{box-shadow:0 4px 12px rgba(0,0,0,.15)!important;transform:translateY(-2px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(381);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSlider/VSlider.sass
var VSlider = __webpack_require__(1034);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VInput/index.js + 3 modules
var VInput = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/loadable/index.js
var loadable = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var util_console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlider/VSlider.js
 // Components


 // Mixins


 // Directives

 // Helpers



/* harmony default export */ var VSlider_VSlider = (Object(mixins["a" /* default */])(VInput["a" /* default */], loadable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-slider',
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  mixins: [loadable["a" /* default */]],
  props: {
    disabled: Boolean,
    inverseLabel: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    min: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: [Number, String],
      default: 1
    },
    thumbColor: String,
    thumbLabel: {
      type: [Boolean, String],
      default: undefined,
      validator: v => typeof v === 'boolean' || v === 'always'
    },
    thumbSize: {
      type: [Number, String],
      default: 32
    },
    tickLabels: {
      type: Array,
      default: () => []
    },
    ticks: {
      type: [Boolean, String],
      default: false,
      validator: v => typeof v === 'boolean' || v === 'always'
    },
    tickSize: {
      type: [Number, String],
      default: 2
    },
    trackColor: String,
    trackFillColor: String,
    value: [Number, String],
    vertical: Boolean
  },
  data: () => ({
    app: null,
    oldValue: null,
    thumbPressed: false,
    mouseTimeout: -1,
    isFocused: false,
    isActive: false,
    noClick: false,
    startOffset: 0
  }),
  computed: {
    classes() {
      return {
        ...VInput["a" /* default */].options.computed.classes.call(this),
        'v-input__slider': true,
        'v-input__slider--vertical': this.vertical,
        'v-input__slider--inverse-label': this.inverseLabel
      };
    },
    internalValue: {
      get() {
        return this.lazyValue;
      },
      set(val) {
        val = isNaN(val) ? this.minValue : val; // Round value to ensure the
        // entire slider range can
        // be selected with step

        const value = this.roundValue(Math.min(Math.max(val, this.minValue), this.maxValue));
        if (value === this.lazyValue) return;
        this.lazyValue = value;
        this.$emit('input', value);
      }
    },
    trackTransition() {
      return this.thumbPressed ? this.showTicks || this.stepNumeric ? '0.1s cubic-bezier(0.25, 0.8, 0.5, 1)' : 'none' : '';
    },
    minValue() {
      return parseFloat(this.min);
    },
    maxValue() {
      return parseFloat(this.max);
    },
    stepNumeric() {
      return this.step > 0 ? parseFloat(this.step) : 0;
    },
    inputWidth() {
      const inputWidth = (this.roundValue(this.internalValue) - this.minValue) / (this.maxValue - this.minValue) * 100;
      return isNaN(inputWidth) ? 0 : inputWidth;
    },
    trackFillStyles() {
      const startDir = this.vertical ? 'bottom' : 'left';
      const endDir = this.vertical ? 'top' : 'right';
      const valueDir = this.vertical ? 'height' : 'width';
      const start = this.$vuetify.rtl ? 'auto' : '0';
      const end = this.$vuetify.rtl ? '0' : 'auto';
      const value = this.isDisabled ? `calc(${this.inputWidth}% - 10px)` : `${this.inputWidth}%`;
      return {
        transition: this.trackTransition,
        [startDir]: start,
        [endDir]: end,
        [valueDir]: value
      };
    },
    trackStyles() {
      const startDir = this.vertical ? this.$vuetify.rtl ? 'bottom' : 'top' : this.$vuetify.rtl ? 'left' : 'right';
      const endDir = this.vertical ? 'height' : 'width';
      const start = '0px';
      const end = this.isDisabled ? `calc(${100 - this.inputWidth}% - 10px)` : `calc(${100 - this.inputWidth}%)`;
      return {
        transition: this.trackTransition,
        [startDir]: start,
        [endDir]: end
      };
    },
    showTicks() {
      return this.tickLabels.length > 0 || !!(!this.isDisabled && this.stepNumeric && this.ticks);
    },
    numTicks() {
      return Math.ceil((this.maxValue - this.minValue) / this.stepNumeric);
    },
    showThumbLabel() {
      return !this.isDisabled && !!(this.thumbLabel || this.$scopedSlots['thumb-label']);
    },
    computedTrackColor() {
      if (this.isDisabled) return undefined;
      if (this.trackColor) return this.trackColor;
      if (this.isDark) return this.validationState;
      return this.validationState || 'primary lighten-3';
    },
    computedTrackFillColor() {
      if (this.isDisabled) return undefined;
      if (this.trackFillColor) return this.trackFillColor;
      return this.validationState || this.computedColor;
    },
    computedThumbColor() {
      if (this.thumbColor) return this.thumbColor;
      return this.validationState || this.computedColor;
    }
  },
  watch: {
    min(val) {
      const parsed = parseFloat(val);
      parsed > this.internalValue && this.$emit('input', parsed);
    },
    max(val) {
      const parsed = parseFloat(val);
      parsed < this.internalValue && this.$emit('input', parsed);
    },
    value: {
      handler(v) {
        this.internalValue = v;
      },
      immediate: true
    }
  },
  mounted() {
    // Without a v-app, iOS does not work with body selectors
    this.app = document.querySelector('[data-app]') || Object(util_console["c" /* consoleWarn */])('Missing v-app or a non-body wrapping element with the [data-app] attribute', this);
  },
  methods: {
    genDefaultSlot() {
      const children = [this.genLabel()];
      const slider = this.genSlider();
      this.inverseLabel ? children.unshift(slider) : children.push(slider);
      children.push(this.genProgress());
      return children;
    },
    genSlider() {
      return this.$createElement('div', {
        class: {
          'v-slider': true,
          'v-slider--horizontal': !this.vertical,
          'v-slider--vertical': this.vertical,
          'v-slider--focused': this.isFocused,
          'v-slider--active': this.isActive,
          'v-slider--disabled': this.isDisabled,
          'v-slider--readonly': this.isReadonly,
          ...this.themeClasses
        },
        directives: [{
          name: 'click-outside',
          value: this.onBlur
        }],
        on: {
          click: this.onSliderClick,
          mousedown: this.onSliderMouseDown,
          touchstart: this.onSliderMouseDown
        }
      }, this.genChildren());
    },
    genChildren() {
      return [this.genInput(), this.genTrackContainer(), this.genSteps(), this.genThumbContainer(this.internalValue, this.inputWidth, this.isActive, this.isFocused, this.onFocus, this.onBlur)];
    },
    genInput() {
      return this.$createElement('input', {
        attrs: {
          value: this.internalValue,
          id: this.computedId,
          disabled: true,
          readonly: true,
          tabindex: -1,
          ...this.$attrs
        } // on: this.genListeners(), // TODO: do we need to attach the listeners to input?
      });
    },

    genTrackContainer() {
      const children = [this.$createElement('div', this.setBackgroundColor(this.computedTrackColor, {
        staticClass: 'v-slider__track-background',
        style: this.trackStyles
      })), this.$createElement('div', this.setBackgroundColor(this.computedTrackFillColor, {
        staticClass: 'v-slider__track-fill',
        style: this.trackFillStyles
      }))];
      return this.$createElement('div', {
        staticClass: 'v-slider__track-container',
        ref: 'track'
      }, children);
    },
    genSteps() {
      if (!this.step || !this.showTicks) return null;
      const tickSize = parseFloat(this.tickSize);
      const range = Object(helpers["i" /* createRange */])(this.numTicks + 1);
      const direction = this.vertical ? 'bottom' : this.$vuetify.rtl ? 'right' : 'left';
      const offsetDirection = this.vertical ? this.$vuetify.rtl ? 'left' : 'right' : 'top';
      if (this.vertical) range.reverse();
      const ticks = range.map(index => {
        const children = [];
        if (this.tickLabels[index]) {
          children.push(this.$createElement('div', {
            staticClass: 'v-slider__tick-label'
          }, this.tickLabels[index]));
        }
        const width = index * (100 / this.numTicks);
        const filled = this.$vuetify.rtl ? 100 - this.inputWidth < width : width < this.inputWidth;
        return this.$createElement('span', {
          key: index,
          staticClass: 'v-slider__tick',
          class: {
            'v-slider__tick--filled': filled
          },
          style: {
            width: `${tickSize}px`,
            height: `${tickSize}px`,
            [direction]: `calc(${width}% - ${tickSize / 2}px)`,
            [offsetDirection]: `calc(50% - ${tickSize / 2}px)`
          }
        }, children);
      });
      return this.$createElement('div', {
        staticClass: 'v-slider__ticks-container',
        class: {
          'v-slider__ticks-container--always-show': this.ticks === 'always' || this.tickLabels.length > 0
        }
      }, ticks);
    },
    genThumbContainer(value, valueWidth, isActive, isFocused, onFocus, onBlur, ref = 'thumb') {
      const children = [this.genThumb()];
      const thumbLabelContent = this.genThumbLabelContent(value);
      this.showThumbLabel && children.push(this.genThumbLabel(thumbLabelContent));
      return this.$createElement('div', this.setTextColor(this.computedThumbColor, {
        ref,
        key: ref,
        staticClass: 'v-slider__thumb-container',
        class: {
          'v-slider__thumb-container--active': isActive,
          'v-slider__thumb-container--focused': isFocused,
          'v-slider__thumb-container--show-label': this.showThumbLabel
        },
        style: this.getThumbContainerStyles(valueWidth),
        attrs: {
          role: 'slider',
          tabindex: this.isDisabled ? -1 : this.$attrs.tabindex ? this.$attrs.tabindex : 0,
          'aria-label': this.$attrs['aria-label'] || this.label,
          'aria-valuemin': this.min,
          'aria-valuemax': this.max,
          'aria-valuenow': this.internalValue,
          'aria-readonly': String(this.isReadonly),
          'aria-orientation': this.vertical ? 'vertical' : 'horizontal'
        },
        on: {
          focus: onFocus,
          blur: onBlur,
          keydown: this.onKeyDown
        }
      }), children);
    },
    genThumbLabelContent(value) {
      return this.$scopedSlots['thumb-label'] ? this.$scopedSlots['thumb-label']({
        value
      }) : [this.$createElement('span', [String(value)])];
    },
    genThumbLabel(content) {
      const size = Object(helpers["h" /* convertToUnit */])(this.thumbSize);
      const transform = this.vertical ? `translateY(20%) translateY(${Number(this.thumbSize) / 3 - 1}px) translateX(55%) rotate(135deg)` : `translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)`;
      return this.$createElement(transitions["e" /* VScaleTransition */], {
        props: {
          origin: 'bottom center'
        }
      }, [this.$createElement('div', {
        staticClass: 'v-slider__thumb-label-container',
        directives: [{
          name: 'show',
          value: this.isFocused || this.isActive || this.thumbLabel === 'always'
        }]
      }, [this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb-label',
        style: {
          height: size,
          width: size,
          transform
        }
      }), [this.$createElement('div', content)])])]);
    },
    genThumb() {
      return this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb'
      }));
    },
    getThumbContainerStyles(width) {
      const direction = this.vertical ? 'top' : 'left';
      let value = this.$vuetify.rtl ? 100 - width : width;
      value = this.vertical ? 100 - value : value;
      return {
        transition: this.trackTransition,
        [direction]: `${value}%`
      };
    },
    onSliderMouseDown(e) {
      var _a;
      e.preventDefault();
      this.oldValue = this.internalValue;
      this.isActive = true;
      if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.matches('.v-slider__thumb-container, .v-slider__thumb-container *')) {
        this.thumbPressed = true;
        const domRect = e.target.getBoundingClientRect();
        const touch = 'touches' in e ? e.touches[0] : e;
        this.startOffset = this.vertical ? touch.clientY - (domRect.top + domRect.height / 2) : touch.clientX - (domRect.left + domRect.width / 2);
      } else {
        this.startOffset = 0;
        window.clearTimeout(this.mouseTimeout);
        this.mouseTimeout = window.setTimeout(() => {
          this.thumbPressed = true;
        }, 300);
      }
      const mouseUpOptions = helpers["C" /* passiveSupported */] ? {
        passive: true,
        capture: true
      } : true;
      const mouseMoveOptions = helpers["C" /* passiveSupported */] ? {
        passive: true
      } : false;
      const isTouchEvent = ('touches' in e);
      this.onMouseMove(e);
      this.app.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', this.onMouseMove, mouseMoveOptions);
      Object(helpers["a" /* addOnceEventListener */])(this.app, isTouchEvent ? 'touchend' : 'mouseup', this.onSliderMouseUp, mouseUpOptions);
      this.$emit('start', this.internalValue);
    },
    onSliderMouseUp(e) {
      e.stopPropagation();
      window.clearTimeout(this.mouseTimeout);
      this.thumbPressed = false;
      const mouseMoveOptions = helpers["C" /* passiveSupported */] ? {
        passive: true
      } : false;
      this.app.removeEventListener('touchmove', this.onMouseMove, mouseMoveOptions);
      this.app.removeEventListener('mousemove', this.onMouseMove, mouseMoveOptions);
      this.$emit('mouseup', e);
      this.$emit('end', this.internalValue);
      if (!Object(helpers["k" /* deepEqual */])(this.oldValue, this.internalValue)) {
        this.$emit('change', this.internalValue);
        this.noClick = true;
      }
      this.isActive = false;
    },
    onMouseMove(e) {
      if (e.type === 'mousemove') {
        this.thumbPressed = true;
      }
      this.internalValue = this.parseMouseMove(e);
    },
    onKeyDown(e) {
      if (!this.isInteractive) return;
      const value = this.parseKeyDown(e, this.internalValue);
      if (value == null || value < this.minValue || value > this.maxValue) return;
      this.internalValue = value;
      this.$emit('change', value);
    },
    onSliderClick(e) {
      if (this.noClick) {
        this.noClick = false;
        return;
      }
      const thumb = this.$refs.thumb;
      thumb.focus();
      this.onMouseMove(e);
      this.$emit('change', this.internalValue);
    },
    onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    parseMouseMove(e) {
      const start = this.vertical ? 'top' : 'left';
      const length = this.vertical ? 'height' : 'width';
      const click = this.vertical ? 'clientY' : 'clientX';
      const {
        [start]: trackStart,
        [length]: trackLength
      } = this.$refs.track.getBoundingClientRect();
      const clickOffset = 'touches' in e ? e.touches[0][click] : e[click]; // It is possible for left to be NaN, force to number

      let clickPos = Math.min(Math.max((clickOffset - trackStart - this.startOffset) / trackLength, 0), 1) || 0;
      if (this.vertical) clickPos = 1 - clickPos;
      if (this.$vuetify.rtl) clickPos = 1 - clickPos;
      return parseFloat(this.min) + clickPos * (this.maxValue - this.minValue);
    },
    parseKeyDown(e, value) {
      if (!this.isInteractive) return;
      const {
        pageup,
        pagedown,
        end,
        home,
        left,
        right,
        down,
        up
      } = helpers["y" /* keyCodes */];
      if (![pageup, pagedown, end, home, left, right, down, up].includes(e.keyCode)) return;
      e.preventDefault();
      const step = this.stepNumeric || 1;
      const steps = (this.maxValue - this.minValue) / step;
      if ([left, right, down, up].includes(e.keyCode)) {
        const increase = this.$vuetify.rtl ? [left, up] : [right, up];
        const direction = increase.includes(e.keyCode) ? 1 : -1;
        const multiplier = e.shiftKey ? 3 : e.ctrlKey ? 2 : 1;
        value = value + direction * step * multiplier;
      } else if (e.keyCode === home) {
        value = this.minValue;
      } else if (e.keyCode === end) {
        value = this.maxValue;
      } else {
        const direction = e.keyCode === pagedown ? 1 : -1;
        value = value - direction * step * (steps > 100 ? steps / 10 : 10);
      }
      return value;
    },
    roundValue(value) {
      if (!this.stepNumeric) return value; // Format input value using the same number
      // of decimals places as in the step prop

      const trimmedStep = this.step.toString().trim();
      const decimals = trimmedStep.indexOf('.') > -1 ? trimmedStep.length - trimmedStep.indexOf('.') - 1 : 0;
      const offset = this.minValue % this.stepNumeric;
      const newValue = Math.round((value - offset) / this.stepNumeric) * this.stepNumeric + offset;
      return parseFloat(Math.min(newValue, this.maxValue).toFixed(decimals));
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(544);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
var VTooltip = __webpack_require__(659);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/pos/table/index.vue?vue&type=template&id=5c87d8da&scoped=true&


























var tablevue_type_template_id_5c87d8da_scoped_true_render = function render() {
  var _setup$tableToDelete, _setup$tableToDelete2;
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c(VContainer["a" /* default */], {
    attrs: {
      "fluid": ""
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center mb-4"
  }, [_c('div', [_c('h1', {
    staticClass: "text-h4 font-weight-bold"
  }, [_vm._v("Table Management")]), _vm._v(" "), _c('p', {
    staticClass: "text-subtitle-1 text-medium-emphasis"
  }, [_vm._v("\n            Manage restaurant tables and their status\n          ")])]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "prepend-icon": "mdi-plus"
    },
    on: {
      "click": function ($event) {
        return _setup.openDialog();
      }
    }
  }, [_vm._v("\n          Add New Table\n        ")])], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-4"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "prepend-inner-icon": "mdi-magnify",
      "label": "Search tables...",
      "variant": "outlined",
      "density": "compact",
      "clearable": ""
    },
    model: {
      value: _setup.search,
      callback: function ($$v) {
        _setup.search = $$v;
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _setup.statusOptions,
      "item-text": "title",
      "item-value": "value",
      "label": "Filter by Status",
      "variant": "outlined",
      "prepend-inner-icon": "mdi-table-chair"
    },
    model: {
      value: _setup.statusFilter,
      callback: function ($$v) {
        _setup.statusFilter = $$v;
      },
      expression: "statusFilter"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _setup.capacityOptions,
      "item-text": "title",
      "item-value": "value",
      "label": "Filter by Capacity",
      "variant": "outlined",
      "prepend-inner-icon": "mdi-table-chair"
    },
    model: {
      value: _setup.capacityFilter,
      callback: function ($$v) {
        _setup.capacityFilter = $$v;
      },
      expression: "capacityFilter"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "variant": "outlined",
      "loading": _setup.loading,
      "block": ""
    },
    on: {
      "click": _setup.refreshTables
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-refresh")]), _vm._v("\n        Refresh\n      ")], 1)], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], _vm._l(_setup.filteredTables, function (table) {
    return _c(VCol["a" /* default */], {
      key: table.id,
      attrs: {
        "cols": "12",
        "sm": "6",
        "md": "4",
        "lg": "3"
      }
    }, [_c(VCard["a" /* default */], {
      staticClass: "table-card",
      class: _setup.getTableCardClass(table.status),
      attrs: {
        "elevation": "2",
        "hover": ""
      }
    }, [_c(components_VCard["d" /* VCardTitle */], {
      staticClass: "d-flex justify-space-between align-center"
    }, [_c('div', [_c('h3', [_vm._v(_vm._s(table.name || `Table ${table.number}`))]), _vm._v(" "), _c(VChip["a" /* default */], {
      attrs: {
        "color": _setup.getStatusColor(table.status),
        "size": "small",
        "variant": "flat"
      }
    }, [_vm._v("\n              " + _vm._s(table.status.toUpperCase()) + "\n            ")])], 1), _vm._v(" "), _c('div', {
      staticClass: "d-flex"
    }, [_c(VBtn["a" /* default */], {
      staticClass: "mr-1",
      attrs: {
        "icon": "",
        "variant": "text",
        "size": "small",
        "color": "primary"
      },
      on: {
        "click": function ($event) {
          return _setup.openDialog(table);
        }
      }
    }, [_c(VIcon["a" /* default */], [_vm._v("mdi-pencil")]), _vm._v(" "), _c(VTooltip["a" /* default */], {
      attrs: {
        "activator": "parent",
        "location": "top"
      }
    }, [_vm._v("\n                Edit Table Details\n              ")])], 1), _vm._v(" "), _c(VMenu["a" /* default */], {
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function ({
          props
        }) {
          return [_c(VBtn["a" /* default */], _vm._b({
            attrs: {
              "icon": "",
              "variant": "text",
              "size": "small"
            }
          }, 'v-btn', props, false), [_c(VIcon["a" /* default */], [_vm._v("mdi-dots-vertical")])], 1)];
        }
      }], null, true)
    }, [_vm._v(" "), _c(VList["a" /* default */], [_c(VListItem["a" /* default */], {
      on: {
        "click": function ($event) {
          return _setup.updateTableStatus(table);
        }
      }
    }, [_c(components_VList["c" /* VListItemTitle */], [_c(VIcon["a" /* default */], {
      attrs: {
        "start": ""
      }
    }, [_vm._v("mdi-update")]), _vm._v("\n                    Update Status Only\n                  ")], 1)], 1), _vm._v(" "), _c(VDivider["a" /* default */]), _vm._v(" "), _c(VListItem["a" /* default */], {
      staticClass: "text-error",
      on: {
        "click": function ($event) {
          return _setup.confirmDelete(table);
        }
      }
    }, [_c(components_VList["c" /* VListItemTitle */], [_c(VIcon["a" /* default */], {
      attrs: {
        "start": ""
      }
    }, [_vm._v("mdi-delete")]), _vm._v("\n                    Delete Table\n                  ")], 1)], 1)], 1)], 1)], 1)]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c('div', {
      staticClass: "d-flex align-center mb-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "start": "",
        "color": "primary"
      }
    }, [_vm._v("mdi-account-group")]), _vm._v(" "), _c('span', [_vm._v("Capacity: " + _vm._s(table.capacity) + " people")])], 1), _vm._v(" "), _c('div', {
      staticClass: "d-flex align-center mb-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "start": "",
        "color": "primary"
      }
    }, [_vm._v("mdi-tag")]), _vm._v(" "), _c('span', [_vm._v("Number: " + _vm._s(table.number))])], 1), _vm._v(" "), table.timeOccupied ? _c('div', {
      staticClass: "d-flex align-center mb-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "start": "",
        "color": "warning"
      }
    }, [_vm._v("mdi-clock")]), _vm._v(" "), _c('span', [_vm._v("Since: " + _vm._s(_setup.formatTime(table.timeOccupied)))])], 1) : _vm._e(), _vm._v(" "), table.currentOrderId ? _c('div', {
      staticClass: "d-flex align-center"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "start": "",
        "color": "success"
      }
    }, [_vm._v("mdi-receipt")]), _vm._v(" "), _c('span', [_vm._v("Order #" + _vm._s(table.currentOrderId))])], 1) : _vm._e()]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
      staticClass: "justify-space-between"
    }, [_c('div', [table.status === 'available' ? _c(VBtn["a" /* default */], {
      attrs: {
        "color": "success",
        "variant": "text",
        "size": "small"
      },
      on: {
        "click": function ($event) {
          return _setup.occupyTable(table);
        }
      }
    }, [_vm._v("\n              Mark Occupied\n            ")]) : _vm._e(), _vm._v(" "), table.status === 'occupied' ? _c(VBtn["a" /* default */], {
      attrs: {
        "color": "warning",
        "variant": "text",
        "size": "small"
      },
      on: {
        "click": function ($event) {
          return _setup.freeTable(table);
        }
      }
    }, [_vm._v("\n              Free Table\n            ")]) : _vm._e(), _vm._v(" "), table.status === 'cleaning' ? _c(VBtn["a" /* default */], {
      attrs: {
        "color": "primary",
        "variant": "text",
        "size": "small"
      },
      on: {
        "click": function ($event) {
          return _setup.markAvailable(table);
        }
      }
    }, [_vm._v("\n              Mark Available\n            ")]) : _vm._e()], 1), _vm._v(" "), _c(VBtn["a" /* default */], {
      attrs: {
        "color": "primary",
        "variant": "outlined",
        "size": "small",
        "prepend-icon": "mdi-pencil"
      },
      on: {
        "click": function ($event) {
          return _setup.openDialog(table);
        }
      }
    }, [_vm._v("\n            Edit\n          ")])], 1)], 1)], 1);
  }), 1), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "600px",
      "persistent": ""
    },
    model: {
      value: _setup.dialog,
      callback: function ($$v) {
        _setup.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-3",
    attrs: {
      "color": _setup.editingTable ? 'warning' : 'success'
    }
  }, [_vm._v("\n          " + _vm._s(_setup.editingTable ? 'mdi-pencil' : 'mdi-plus') + "\n        ")]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "text-h5"
  }, [_vm._v("\n            " + _vm._s(_setup.editingTable ? 'Edit Table' : 'Add New Table') + "\n          ")]), _vm._v(" "), _setup.editingTable ? _c('div', {
    staticClass: "text-caption text-medium-emphasis"
  }, [_vm._v("\n            Editing Table #" + _vm._s(_setup.editingTable.number) + "\n          ")]) : _vm._e()])], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VForm["a" /* default */], {
    ref: "form",
    model: {
      value: _setup.formValid,
      callback: function ($$v) {
        _setup.formValid = $$v;
      },
      expression: "formValid"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Table Name (Optional)",
      "variant": "outlined",
      "prepend-inner-icon": "mdi-table-furniture"
    },
    model: {
      value: _setup.formData.name,
      callback: function ($$v) {
        _vm.$set(_setup.formData, "name", $$v);
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
      "label": "Table Number",
      "variant": "outlined",
      "prepend-inner-icon": "mdi-numeric",
      "rules": _setup.numberRules,
      "required": ""
    },
    model: {
      value: _setup.formData.number,
      callback: function ($$v) {
        _vm.$set(_setup.formData, "number", $$v);
      },
      expression: "formData.number"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VSlider_VSlider, {
    attrs: {
      "label": "Capacity",
      "min": 1,
      "max": 20,
      "step": 1,
      "thumb-label": "always",
      "prepend-icon": "mdi-account-group"
    },
    model: {
      value: _setup.formData.capacity,
      callback: function ($$v) {
        _vm.$set(_setup.formData, "capacity", $$v);
      },
      expression: "formData.capacity"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _setup.statusItems,
      "item-text": "title",
      "item-value": "value",
      "label": "Status",
      "variant": "outlined",
      "prepend-inner-icon": "mdi-table-chair"
    },
    model: {
      value: _setup.formData.status,
      callback: function ($$v) {
        _vm.$set(_setup.formData, "status", $$v);
      },
      expression: "formData.status"
    }
  })], 1), _vm._v(" "), _setup.formData.status === 'occupied' ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Current Order ID (Optional)",
      "variant": "outlined",
      "type": "number",
      "prepend-inner-icon": "mdi-receipt"
    },
    model: {
      value: _setup.formData.currentOrderId,
      callback: function ($$v) {
        _vm.$set(_setup.formData, "currentOrderId", $$v);
      },
      expression: "formData.currentOrderId"
    }
  })], 1) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "grey-darken-1",
      "variant": "text"
    },
    on: {
      "click": _setup.closeDialog
    }
  }, [_vm._v("\n          Cancel\n        ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "variant": "flat",
      "loading": _setup.saving,
      "disabled": !_setup.formValid
    },
    on: {
      "click": _setup.saveTable
    }
  }, [_vm._v("\n          " + _vm._s(_setup.editingTable ? 'Update' : 'Create') + "\n        ")])], 1)], 1)], 1), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "400px"
    },
    model: {
      value: _setup.statusDialog,
      callback: function ($$v) {
        _setup.statusDialog = $$v;
      },
      expression: "statusDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], [_vm._v("Update Table Status")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _setup.statusItems,
      "item-text": "title",
      "item-value": "value",
      "label": "New Status",
      "variant": "outlined"
    },
    model: {
      value: _setup.newStatus,
      callback: function ($$v) {
        _setup.newStatus = $$v;
      },
      expression: "newStatus"
    }
  }), _vm._v(" "), _setup.newStatus === 'occupied' ? _c(VTextField["a" /* default */], {
    attrs: {
      "label": "Order ID (Optional)",
      "variant": "outlined",
      "type": "number"
    },
    model: {
      value: _setup.newOrderId,
      callback: function ($$v) {
        _setup.newOrderId = $$v;
      },
      expression: "newOrderId"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "variant": "text",
      "disabled": _setup.loading
    },
    on: {
      "click": function ($event) {
        _setup.statusDialog = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "primary",
      "loading": _setup.loading
    },
    on: {
      "click": _setup.confirmStatusUpdate
    }
  }, [_vm._v("\n          Update\n        ")])], 1)], 1)], 1), _vm._v(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "400px"
    },
    model: {
      value: _setup.deleteDialog,
      callback: function ($$v) {
        _setup.deleteDialog = $$v;
      },
      expression: "deleteDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "text-error"
  }, [_vm._v("Confirm Deletion")]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_vm._v("\n        Are you sure you want to delete \"" + _vm._s(((_setup$tableToDelete = _setup.tableToDelete) === null || _setup$tableToDelete === void 0 ? void 0 : _setup$tableToDelete.name) || `Table ${(_setup$tableToDelete2 = _setup.tableToDelete) === null || _setup$tableToDelete2 === void 0 ? void 0 : _setup$tableToDelete2.number}`) + "\"? This action cannot be undone.\n      ")]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        _setup.deleteDialog = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "error",
      "loading": _setup.deleting
    },
    on: {
      "click": _setup.deleteTable
    }
  }, [_vm._v("Delete")])], 1)], 1)], 1), _vm._v(" "), _c(VOverlay["a" /* default */], {
    staticClass: "align-center justify-center",
    model: {
      value: _setup.loading,
      callback: function ($$v) {
        _setup.loading = $$v;
      },
      expression: "loading"
    }
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "color": "primary",
      "indeterminate": "",
      "size": "64"
    }
  })], 1), _vm._v(" "), _c(VSnackbar["a" /* default */], {
    attrs: {
      "color": _setup.snackbar.color,
      "timeout": _setup.snackbar.timeout,
      "location": "top right",
      "variant": "elevated"
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function () {
        return [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "white",
            "variant": "text"
          },
          on: {
            "click": function ($event) {
              _setup.snackbar.show = false;
            }
          }
        }, [_vm._v("\n        Close\n      ")])];
      },
      proxy: true
    }]),
    model: {
      value: _setup.snackbar.show,
      callback: function ($$v) {
        _vm.$set(_setup.snackbar, "show", $$v);
      },
      expression: "snackbar.show"
    }
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-2"
  }, [_vm._v(_vm._s(_setup.snackbar.icon))]), _vm._v("\n      " + _vm._s(_setup.snackbar.message) + "\n    ")], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/pos/table/index.vue?vue&type=template&id=5c87d8da&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/pos/table/index.vue?vue&type=script&setup=true&lang=js&


// Reactive data

/* harmony default export */ var tablevue_type_script_setup_true_lang_js_ = ({
  __name: 'index',
  setup(__props) {
    const tables = Object(external_vue_["ref"])([]);
    const dialog = Object(external_vue_["ref"])(false);
    const statusDialog = Object(external_vue_["ref"])(false);
    const deleteDialog = Object(external_vue_["ref"])(false);
    const loading = Object(external_vue_["ref"])(false);
    const saving = Object(external_vue_["ref"])(false);
    const deleting = Object(external_vue_["ref"])(false);
    const formValid = Object(external_vue_["ref"])(false);
    const search = Object(external_vue_["ref"])('');
    const statusFilter = Object(external_vue_["ref"])('');
    const capacityFilter = Object(external_vue_["ref"])('');

    // Snackbar for notifications
    const snackbar = Object(external_vue_["ref"])({
      show: false,
      message: '',
      color: 'success',
      icon: 'mdi-check-circle',
      timeout: 4000
    });

    // Form data
    const formData = Object(external_vue_["ref"])({
      name: '',
      number: '',
      capacity: 4,
      status: 'available',
      currentOrderId: null
    });

    // Editing states
    const editingTable = Object(external_vue_["ref"])(null);
    const tableToDelete = Object(external_vue_["ref"])(null);
    const tableToUpdate = Object(external_vue_["ref"])(null);
    const newStatus = Object(external_vue_["ref"])('');
    const newOrderId = Object(external_vue_["ref"])('');

    // Form validation rules
    const numberRules = [v => !!v || 'Table number is required', v => /^\d+$/.test(v) || 'Table number must be numeric'];

    // Options for dropdowns
    const statusItems = [{
      title: 'Available',
      value: 'available'
    }, {
      title: 'Occupied',
      value: 'occupied'
    }, {
      title: 'Cleaning',
      value: 'cleaning'
    }, {
      title: 'Reserved',
      value: 'reserved'
    }];
    const statusOptions = [{
      title: 'Available',
      value: 'available'
    }, {
      title: 'Occupied',
      value: 'occupied'
    }, {
      title: 'Cleaning',
      value: 'cleaning'
    }, {
      title: 'Reserved',
      value: 'reserved'
    }];
    const capacityOptions = [{
      title: '1-2 people',
      value: '1-2'
    }, {
      title: '3-4 people',
      value: '3-4'
    }, {
      title: '5-8 people',
      value: '5-8'
    }, {
      title: '9+ people',
      value: '9+'
    }];

    // Computed properties
    const filteredTables = Object(external_vue_["computed"])(() => {
      let filtered = tables.value;

      // Search filter
      if (search.value) {
        const searchTerm = search.value.toLowerCase();
        filtered = filtered.filter(table => table.name && table.name.toLowerCase().includes(searchTerm) || table.number.toString().includes(searchTerm));
      }

      // Status filter
      if (statusFilter.value && statusFilter.value) {
        filtered = filtered.filter(table => table.status === statusFilter.value);
      }

      // Capacity filter
      if (capacityFilter.value) {
        const [min, max] = capacityFilter.value.split('-').map(n => n.replace('+', ''));
        filtered = filtered.filter(table => {
          if (capacityFilter.value === '9+') {
            return table.capacity >= 9;
          }
          return table.capacity >= parseInt(min) && table.capacity <= parseInt(max || min);
        });
      }
      return filtered.sort((a, b) => parseInt(a.number) - parseInt(b.number));
    });

    // Methods
    const showMessage = (message, color = 'success', icon = 'mdi-check-circle') => {
      snackbar.value = {
        show: true,
        message,
        color,
        icon,
        timeout: 4000
      };
    };
    const fetchTables = async () => {
      loading.value = true;
      await $nuxt.$axios.get('api/tables').then(res => {
        console.log('=>tables: ' + JSON.stringify(res.data));

        // 🔧 FIX: Extract the actual array from the nested response
        const tableData = res.data.data; // Get the array from res.data.data

        tables.value = tableData.map(el => {
          return {
            id: el.id,
            name: el.name,
            number: el.number,
            capacity: el.capacity,
            status: el.status,
            timeOccupied: el.timeOccupied,
            currentOrderId: el.currentOrderId,
            createdAt: el.createdAt,
            updateTimestamp: el.updateTimestamp
          };
        });
      }).catch(er => {
        var _er$response;
        console.log('error fetching tables: ' + ((_er$response = er.response) === null || _er$response === void 0 ? void 0 : _er$response.data));
        showMessage('Failed to load tables. Using demo data.', 'warning', 'mdi-alert');
        // Mock data for demonstration when API fails
        tables.value = [{
          id: 1,
          name: 'VIP Table',
          number: '1',
          capacity: 8,
          status: 'occupied',
          timeOccupied: new Date('2025-06-23T12:00:00'),
          currentOrderId: 123
        }, {
          id: 2,
          name: null,
          number: '2',
          capacity: 4,
          status: 'available',
          timeOccupied: null,
          currentOrderId: null
        }, {
          id: 3,
          name: 'Corner Table',
          number: '3',
          capacity: 2,
          status: 'cleaning',
          timeOccupied: null,
          currentOrderId: null
        }];
      }).finally(() => {
        loading.value = false;
      });
    };
    const refreshTables = () => {
      fetchTables();
    };
    const openDialog = (table = null) => {
      if (table) {
        editingTable.value = table;
        formData.value = {
          name: table.name || '',
          number: table.number,
          capacity: table.capacity,
          status: table.status,
          // This will be a string like 'available'
          currentOrderId: table.currentOrderId
        };
      } else {
        editingTable.value = null;
        formData.value = {
          name: '',
          number: '',
          capacity: 4,
          status: 'available',
          // This is a string, which is correct
          currentOrderId: null
        };
      }
      dialog.value = true;
    };
    const closeDialog = () => {
      dialog.value = false;
      editingTable.value = null;
    };
    const saveTable = async () => {
      saving.value = true;
      const payload = {
        ...formData.value,
        timeOccupied: formData.value.status === 'occupied' ? new Date() : null
      };
      if (editingTable.value) {
        // Update existing table
        await $nuxt.$axios.put(`/api/tables/${editingTable.value.id}`, payload).then(res => {
          console.log('=>table updated: ' + JSON.stringify(res.data));
          fetchTables();
          closeDialog();
        }).catch(er => {
          var _er$response2;
          console.log('error updating table: ' + ((_er$response2 = er.response) === null || _er$response2 === void 0 ? void 0 : _er$response2.data));
          // Handle error (show notification, etc.)
        }).finally(() => {
          saving.value = false;
        });
      } else {
        // Create new table
        await $nuxt.$axios.post('/api/tables', payload).then(res => {
          console.log('=>table created: ' + JSON.stringify(res.data));
          fetchTables();
          closeDialog();
        }).catch(er => {
          var _er$response3;
          console.log('error creating table: ' + ((_er$response3 = er.response) === null || _er$response3 === void 0 ? void 0 : _er$response3.data));
          // Handle error (show notification, etc.)
        }).finally(() => {
          saving.value = false;
        });
      }
    };
    const updateTableStatus = table => {
      tableToUpdate.value = table;
      newStatus.value = table.status;
      newOrderId.value = table.currentOrderId || '';
      statusDialog.value = true;
    };
    const confirmStatusUpdate = async () => {
      const payload = {
        status: newStatus.value,
        timeOccupied: newStatus.value === 'occupied' ? new Date() : null,
        currentOrderId: newStatus.value === 'occupied' ? newOrderId.value : null
      };
      await $nuxt.$axios.patch(`tables/${tableToUpdate.value.id}`, payload).then(res => {
        console.log('=>table status updated: ' + JSON.stringify(res.data));
        fetchTables();
        statusDialog.value = false;
      }).catch(er => {
        var _er$response4;
        console.log('error updating table status: ' + ((_er$response4 = er.response) === null || _er$response4 === void 0 ? void 0 : _er$response4.data));
      });
    };
    const occupyTable = async table => {
      await updateTableStatusQuick(table.id, 'occupied');
    };
    const freeTable = async table => {
      await updateTableStatusQuick(table.id, 'cleaning');
    };
    const markAvailable = async table => {
      await updateTableStatusQuick(table.id, 'available');
    };
    const updateTableStatusQuick = async (tableId, status) => {
      const payload = {
        status,
        timeOccupied: status === 'occupied' ? new Date() : null,
        currentOrderId: status === 'occupied' ? null : null
      };
      await $nuxt.$axios.patch(`tables/${tableId}`, payload).then(res => {
        console.log('=>table status updated quickly: ' + JSON.stringify(res.data));
        fetchTables();
      }).catch(er => {
        var _er$response5;
        console.log('error updating table status quickly: ' + ((_er$response5 = er.response) === null || _er$response5 === void 0 ? void 0 : _er$response5.data));
      });
    };
    const confirmDelete = table => {
      tableToDelete.value = table;
      deleteDialog.value = true;
    };
    const deleteTable = async () => {
      deleting.value = true;
      await $nuxt.$axios.delete(`tables/${tableToDelete.value.id}`).then(res => {
        console.log('=>table deleted: ' + JSON.stringify(res.data));
        fetchTables();
        deleteDialog.value = false;
        tableToDelete.value = null;
      }).catch(er => {
        var _er$response6;
        console.log('error deleting table: ' + ((_er$response6 = er.response) === null || _er$response6 === void 0 ? void 0 : _er$response6.data));
      }).finally(() => {
        deleting.value = false;
      });
    };
    const getStatusColor = status => {
      const colors = {
        available: 'success',
        occupied: 'error',
        cleaning: 'warning',
        reserved: 'info'
      };
      return colors[status] || 'grey';
    };
    const getTableCardClass = status => {
      return `table-card--${status}`;
    };
    const formatTime = date => {
      if (!date) return '';
      return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(new Date(date));
    };

    // Lifecycle
    Object(external_vue_["onMounted"])(() => {
      fetchTables();
    });
    return {
      __sfc: true,
      tables,
      dialog,
      statusDialog,
      deleteDialog,
      loading,
      saving,
      deleting,
      formValid,
      search,
      statusFilter,
      capacityFilter,
      snackbar,
      formData,
      editingTable,
      tableToDelete,
      tableToUpdate,
      newStatus,
      newOrderId,
      numberRules,
      statusItems,
      statusOptions,
      capacityOptions,
      filteredTables,
      showMessage,
      fetchTables,
      refreshTables,
      openDialog,
      closeDialog,
      saveTable,
      updateTableStatus,
      confirmStatusUpdate,
      occupyTable,
      freeTable,
      markAvailable,
      updateTableStatusQuick,
      confirmDelete,
      deleteTable,
      getStatusColor,
      getTableCardClass,
      formatTime
    };
  }
});
// CONCATENATED MODULE: ./pages/admin/pos/table/index.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var pos_tablevue_type_script_setup_true_lang_js_ = (tablevue_type_script_setup_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/pos/table/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1036)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pos_tablevue_type_script_setup_true_lang_js_,
  tablevue_type_template_id_5c87d8da_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "5c87d8da",
  "43795ca5"
  
)

/* harmony default export */ var pos_table = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(476);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2f6b6adb", content, true)

/***/ }),

/***/ 476:
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

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(507);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("53887fd2", content, true)

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);border-radius:4px;color:#fff;display:inline-block;font-size:14px;line-height:22px;opacity:0;padding:5px 16px;pointer-events:none;position:absolute;text-transform:none;width:auto}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(475);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
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

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(506);
/* harmony import */ var _src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_activatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _mixins_menuable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(106);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
 // Mixins





 // Helpers




/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_menuable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).extend({
  name: 'v-tooltip',
  props: {
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    openDelay: {
      type: [Number, String],
      default: 0
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    openOnFocus: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    transition: String
  },
  data: () => ({
    calculatedMinWidth: 0,
    closeDependents: false
  }),
  computed: {
    calculatedLeft() {
      const {
        activator,
        content
      } = this.dimensions;
      const unknown = !this.bottom && !this.left && !this.top && !this.right;
      const activatorLeft = this.attach !== false ? activator.offsetLeft : activator.left;
      let left = 0;
      if (this.top || this.bottom || unknown) {
        left = activatorLeft + activator.width / 2 - content.width / 2;
      } else if (this.left || this.right) {
        left = activatorLeft + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
      }
      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return `${this.calcXOverflow(left, this.dimensions.content.width)}px`;
    },
    calculatedTop() {
      const {
        activator,
        content
      } = this.dimensions;
      const activatorTop = this.attach !== false ? activator.offsetTop : activator.top;
      let top = 0;
      if (this.top || this.bottom) {
        top = activatorTop + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
      } else if (this.left || this.right) {
        top = activatorTop + activator.height / 2 - content.height / 2;
      }
      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      if (this.attach === false) top += this.pageYOffset;
      return `${this.calcYOverflow(top)}px`;
    },
    classes() {
      return {
        'v-tooltip--top': this.top,
        'v-tooltip--right': this.right,
        'v-tooltip--bottom': this.bottom,
        'v-tooltip--left': this.left,
        'v-tooltip--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      };
    },
    computedTransition() {
      if (this.transition) return this.transition;
      return this.isActive ? 'scale-transition' : 'fade-transition';
    },
    offsetY() {
      return this.top || this.bottom;
    },
    offsetX() {
      return this.left || this.right;
    },
    styles() {
      return {
        left: this.calculatedLeft,
        maxWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "h"])(this.maxWidth),
        minWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "h"])(this.minWidth),
        top: this.calculatedTop,
        zIndex: this.zIndex || this.activeZIndex
      };
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      this.value && this.callActivate();
    });
  },
  mounted() {
    if (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* getSlotType */ "t"])(this, 'activator', true) === 'v-slot') {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_7__[/* consoleError */ "b"])(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`, this);
    }
  },
  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(this.startTransition);
    },
    deactivate() {
      this.runDelay('close');
    },
    genActivatorListeners() {
      const listeners = _mixins_activatable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genActivatorListeners.call(this);
      if (this.openOnFocus) {
        listeners.focus = e => {
          this.getActivator(e);
          this.runDelay('open');
        };
        listeners.blur = e => {
          this.getActivator(e);
          this.runDelay('close');
        };
      }
      listeners.keydown = e => {
        if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* keyCodes */ "y"].esc) {
          this.getActivator(e);
          this.runDelay('close');
        }
      };
      return listeners;
    },
    genActivatorAttributes() {
      return {
        'aria-haspopup': true,
        'aria-expanded': String(this.isActive)
      };
    },
    genTransition() {
      const content = this.genContent();
      if (!this.computedTransition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [content]);
    },
    genContent() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-tooltip__content',
        class: {
          [this.contentClass]: true,
          menuable__content__active: this.isActive,
          'v-tooltip__content--fixed': this.activatorFixed
        },
        style: this.styles,
        attrs: this.getScopeIdAttrs(),
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content'
      }), this.getContentSlot());
    }
  },
  render(h) {
    return h(this.tag, {
      staticClass: 'v-tooltip',
      class: this.classes
    }, [this.showLazyContent(() => [this.genTransition()]), this.genActivator()]);
  }
}));

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1037);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("39105c71", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map