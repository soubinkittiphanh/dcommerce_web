exports.ids = [26];
exports.modules = {

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(106);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(107);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(109);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(112);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(114);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(115);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(102);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];
function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "G"])(val)] = def();
    return props;
  }, {});
}
const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);
const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);
const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);
const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return undefined;
  }
  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center

  className += `-${val}`;
  return className.toLowerCase();
}
const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },
  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';
    for (const prop in props) {
      cacheKey += String(props[prop]);
    }
    let classList = cache.get(cacheKey);
    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;
      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }
    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }
}));

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
// Directives
 // Types


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'rippleable',
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  methods: {
    genRipple(data = {}) {
      if (!this.ripple) return null;
      data.staticClass = 'v-input--selection-controls__ripple';
      data.directives = data.directives || [];
      data.directives.push({
        name: 'ripple',
        value: {
          center: true
        }
      });
      return this.$createElement('div', data);
    }
  }
}));

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(282);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e8a466fa", content, true)

/***/ }),

/***/ 282:
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

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_mixins_delayable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
/* @vue/component */).extend({
  name: 'v-hover',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    onMouseEnter() {
      this.runDelay('open');
    },
    onMouseLeave() {
      this.runDelay('close');
    }
  },
  render() {
    if (!this.$scopedSlots.default && this.value === undefined) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover is missing a default scopedSlot or bound value', this);
      return null;
    }
    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        hover: this.isActive
      });
    }
    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }
    if (!element || Array.isArray(element) || !element.tag) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover should only contain a single element', this);
      return element;
    }
    if (!this.disabled) {
      element.data = element.data || {};
      this._g(element.data, {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave
      });
    }
    return element;
  }
}));

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VRating_VRating_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _mixins_rippleable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(257);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(307);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js
var VRating = __webpack_require__(308);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(254);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=template&id=7f6db615&










var ProductCardvue_type_template_id_7f6db615_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VHover["a" /* default */], {
    attrs: {
      "open-delay": "400"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        hover
      }) {
        return [_c(VCard["a" /* default */], {
          staticClass: "mx-auto",
          class: {
            'on-hover': hover
          },
          attrs: {
            "elevation": hover ? 16 : 2,
            "max-width": "344"
          },
          on: {
            "click": _vm.productDetail
          }
        }, [_c(VImg["a" /* default */], {
          attrs: {
            "src": 'https://nodejsclusters-99563-0.cloudclusters.net/' + _vm.productItem.img_path,
            "height": "200px",
            "cover": ""
          }
        }), _vm._v(" "), _c(components_VCard["d" /* VCardTitle */], {
          staticClass: "subtitle-2"
        }, [_vm._v(_vm._s(_vm.productItem.title))]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VRow["a" /* default */], {
          staticClass: "mx-0",
          attrs: {
            "align": "center"
          }
        }, [_c(VRating["a" /* default */], {
          attrs: {
            "value": _vm.productItem.sale_count / 2,
            "color": "amber",
            "dense": "",
            "half-increments": "",
            "readonly": "",
            "size": "14"
          }
        })], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c('div', {
          staticClass: "grey--text ml-4"
        }, [_vm._v("\n                    " + _vm._s(10 * 10) + " % | " + _vm._s(_vm.productItem.pro_name) + "\n                ")])])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VBtn["a" /* default */], {
          attrs: {
            "color": "#FFA500"
          }
        }, [_vm._v("\n                Add to cart\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
          attrs: {
            "color": "#FFA500"
          }
        }, [_vm._v("\n                Explore\n            ")])], 1)], 1)];
      }
    }])
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=template&id=7f6db615&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  props: ["productItem"],
  data() {
    return {
      show: false
    };
  },
  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val);
    },
    productDetail() {
      // this.$router.push(`/admin/product/${idx.pro_id}`)
      this.$router.push(`/product/${this.productItem.pro_id}`);
      this.$store.dispatch('assignProductDetail', this.productItem);
    }
  }
});
// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// CONCATENATED MODULE: ./components/ProductCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductCardvue_type_script_lang_js_,
  ProductCardvue_type_template_id_7f6db615_render,
  staticRenderFns,
  false,
  null,
  null,
  "2ec073ab"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-card.js.map