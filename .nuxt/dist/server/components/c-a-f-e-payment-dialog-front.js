exports.ids = [34];
exports.modules = {

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export calculateUpdatedOffset */
/* unused harmony export calculateCenteredOffset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSlideGroup; });
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(507);
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _mixins_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(142);
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

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(508);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("d67becdc", content, true)

/***/ }),

/***/ 508:
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

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(530);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("44600667", content, true)

/***/ }),

/***/ 530:
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

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(585);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("49e755e5", content, true, context)
};

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VChipGroup_VChipGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);
/* harmony import */ var _src_components_VChipGroup_VChipGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VChipGroup_VChipGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSlideGroup_VSlideGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(506);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
// Styles
 // Extensions

 // Mixins

 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_VSlideGroup_VSlideGroup__WEBPACK_IMPORTED_MODULE_1__[/* BaseSlideGroup */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).extend({
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
        ..._VSlideGroup_VSlideGroup__WEBPACK_IMPORTED_MODULE_1__[/* BaseSlideGroup */ "a"].options.computed.classes.call(this),
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
        ..._VSlideGroup_VSlideGroup__WEBPACK_IMPORTED_MODULE_1__[/* BaseSlideGroup */ "a"].options.methods.genData.call(this)
      });
    }
  }
}));

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301a3b30_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(544);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301a3b30_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301a3b30_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301a3b30_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_301a3b30_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cursor-pointer[data-v-301a3b30]{cursor:pointer}.payment-card[data-v-301a3b30]{transition:all .2s ease}.payment-card[data-v-301a3b30]:hover{transform:translateY(-1px)}.text-none[data-v-301a3b30]{text-transform:none!important}.quick-cash-chips .v-chip[data-v-301a3b30]{margin:2px!important}.quick-cash-chips .v-chip[data-v-301a3b30]:hover{transform:scale(1.05);transition:transform .2s ease}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
var VAlert = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChipGroup/VChipGroup.js
var VChipGroup = __webpack_require__(578);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(443);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/paymentDialogFront/index.vue?vue&type=template&id=301a3b30&scoped=true


















var paymentDialogFrontvue_type_template_id_301a3b30_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "800",
      "persistent": ""
    },
    model: {
      value: _vm.showDialog,
      callback: function ($$v) {
        _vm.showDialog = $$v;
      },
      expression: "showDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "primary white--text py-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white",
      "size": "20"
    }
  }, [_vm._v("mdi-credit-card")]), _vm._v("\n        Payment - Table " + _vm._s(_vm.tableNumber) + " Ticket - ID " + _vm._s(_vm.ticketId) + "\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "text-h6 font-weight-bold"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.amount)))]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "icon": "",
      "color": "white",
      "disabled": _vm.actionLoading
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "20"
    }
  }, [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4"
  }, [_c(VRow["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "text-none",
    attrs: {
      "block": "",
      "color": _vm.isCustomerDisplayOpen() ? 'success' : 'primary'
    },
    on: {
      "click": function ($event) {
        return _vm.showQROnCustomerScreen('manual');
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "20"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.isCustomerDisplayOpen() ? 'mdi-monitor-eye' : 'mdi-monitor-multiple') + "\n              ")]), _vm._v("\n              " + _vm._s(_vm.isCustomerDisplayOpen() ? 'Update Display' : 'Open Display') + "\n            ")], 1)], 1), _vm._v(" "),  false ? undefined : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "text-none",
    attrs: {
      "block": "",
      "disabled": !_vm.isCustomerDisplayOpen(),
      "color": "grey"
    },
    on: {
      "click": _vm.closeCustomerDisplayWindow
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "20"
    }
  }, [_vm._v("mdi-monitor-off")]), _vm._v("\n              Close Display\n            ")], 1)], 1)], 1), _vm._v(" "), _vm.paymentLoading ? _c('div', {
    staticClass: "text-center py-2"
  }, [_c(VProgressCircular["a" /* default */], {
    attrs: {
      "size": "32",
      "color": "primary",
      "indeterminate": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "caption mt-1"
  }, [_vm._v("Loading...")])], 1) : _c('div', [_c('div', {
    staticClass: "subtitle-2 mb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "18"
    }
  }, [_vm._v("mdi-wallet")]), _vm._v("\n            Payment Method\n          ")], 1), _vm._v(" "), _vm.paymentMethods.length > 0 ? _c('div', [_c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, _vm._l(_vm.paymentMethods, function (payment) {
    var _vm$selectedPaymentMe, _vm$selectedPaymentMe2, _vm$selectedPaymentMe3;
    return _c(VCol["a" /* default */], {
      key: payment.id,
      staticClass: "pa-1",
      attrs: {
        "cols": "4"
      }
    }, [_c(VCard["a" /* default */], {
      class: ['payment-card cursor-pointer text-center', ((_vm$selectedPaymentMe = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe === void 0 ? void 0 : _vm$selectedPaymentMe.id) === payment.id ? 'white--text elevation-3' : 'elevation-1'],
      attrs: {
        "color": ((_vm$selectedPaymentMe2 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe2 === void 0 ? void 0 : _vm$selectedPaymentMe2.id) === payment.id ? _vm.getPaymentColor(payment.payment_code) : '',
        "hover": "",
        "height": "70"
      },
      on: {
        "click": function ($event) {
          return _vm.selectPaymentMethod(payment);
        }
      }
    }, [_c(components_VCard["c" /* VCardText */], {
      staticClass: "pa-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "color": ((_vm$selectedPaymentMe3 = _vm.selectedPaymentMethod) === null || _vm$selectedPaymentMe3 === void 0 ? void 0 : _vm$selectedPaymentMe3.id) === payment.id ? 'white' : _vm.getPaymentColor(payment.payment_code),
        "size": "24"
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.getPaymentIcon(payment.payment_code)) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "caption font-weight-medium mt-1"
    }, [_vm._v("\n                      " + _vm._s(payment.payment_name) + "\n                    ")])], 1)], 1)], 1);
  }), 1), _vm._v(" "), _c(transitions["a" /* VExpandTransition */], [_vm.isCashPayment ? _c('div', {
    staticClass: "mt-3"
  }, [_c(VDivider["a" /* default */], {
    staticClass: "mb-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "subtitle-2 mb-2"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "18",
      "color": "green"
    }
  }, [_vm._v("mdi-cash")]), _vm._v("\n                  Cash Payment Details\n                ")], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Cash Received",
      "suffix": '₭',
      "outlined": "",
      "dense": "",
      "rules": _vm.cashRules,
      "prepend-inner-icon": "mdi-cash-plus",
      "hint": "Enter amount received from customer",
      "persistent-hint": "",
      "placeholder": "0"
    },
    on: {
      "input": _vm.onCashInput,
      "blur": _vm.formatCashDisplay
    },
    model: {
      value: _vm.cashReceivedFormatted,
      callback: function ($$v) {
        _vm.cashReceivedFormatted = $$v;
      },
      expression: "cashReceivedFormatted"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-3 text-center white--text",
    attrs: {
      "color": _vm.changeAmount >= 0 ? 'success' : 'error',
      "elevation": _vm.changeAmount !== 0 ? 3 : 1
    }
  }, [_c('div', {
    staticClass: "caption"
  }, [_vm._v("CHANGE")]), _vm._v(" "), _c('div', {
    staticClass: "text-h6 font-weight-bold"
  }, [_vm._v("\n                        " + _vm._s(_vm.formatPrice(Math.abs(_vm.changeAmount))) + "\n                      ")]), _vm._v(" "), _vm.changeAmount < 0 ? _c('div', {
    staticClass: "caption"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "color": "white"
    }
  }, [_vm._v("mdi-alert")]), _vm._v("\n                        Insufficient\n                      ")], 1) : _vm.changeAmount > 0 ? _c('div', {
    staticClass: "caption"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "color": "white"
    }
  }, [_vm._v("mdi-arrow-up")]), _vm._v("\n                        To Return\n                      ")], 1) : _c('div', {
    staticClass: "caption"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "color": "white"
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n                        Exact Amount\n                      ")], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "mt-2"
  }, [_c('div', {
    staticClass: "caption mb-1 grey--text"
  }, [_vm._v("Quick amounts:")]), _vm._v(" "), _c(VChipGroup["a" /* default */], {
    staticClass: "quick-cash-chips"
  }, _vm._l(_vm.getQuickCashAmounts(), function (quickAmount) {
    return _c(VChip["a" /* default */], {
      key: quickAmount,
      staticClass: "ma-1",
      attrs: {
        "small": "",
        "outlined": "",
        "color": "success"
      },
      on: {
        "click": function ($event) {
          return _vm.setCashReceived(quickAmount);
        }
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.formatPrice(quickAmount, false)) + "₭\n                    ")]);
  }), 1)], 1)], 1) : _vm._e()])], 1) : _c('div', [_c(VAlert["a" /* default */], {
    staticClass: "ma-0",
    attrs: {
      "type": "warning",
      "dense": ""
    }
  }, [_vm._v("\n              No payment methods available\n              "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "x-small": "",
      "color": "warning"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('reload-payment-methods');
      }
    }
  }, [_vm._v("\n                Retry\n              ")])], 1)], 1)])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], {
    staticClass: "pa-3"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "text": "",
      "disabled": _vm.actionLoading
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "text-none",
    attrs: {
      "color": "success",
      "disabled": !_vm.isPaymentValid || _vm.actionLoading,
      "loading": _vm.actionLoading
    },
    on: {
      "click": _vm.confirmPayment
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "size": "18"
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n          Process Payment\n        ")], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "400",
      "persistent": ""
    },
    model: {
      value: _vm.showQRDialog,
      callback: function ($$v) {
        _vm.showQRDialog = $$v;
      },
      expression: "showQRDialog"
    }
  }, [_c(VCard["a" /* default */], [_c(components_VCard["d" /* VCardTitle */], {
    staticClass: "white--text py-2",
    staticStyle: {
      "background-color": "primary !important"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "left": "",
      "color": "white",
      "size": "20"
    }
  }, [_vm._v("mdi-qrcode")]), _vm._v("\n        QR Payment\n        "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c('div', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.amount)))]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "ml-2",
    attrs: {
      "icon": "",
      "color": "white"
    },
    on: {
      "click": function ($event) {
        _vm.showQRDialog = false;
      }
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "size": "20"
    }
  }, [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
    staticClass: "pa-4 text-center"
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-2 mb-3",
    staticStyle: {
      "border-color": "primary !important"
    },
    attrs: {
      "outlined": ""
    }
  }, [_c('img', {
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "display": "block",
      "margin": "0 auto"
    },
    attrs: {
      "src": _vm.qrCodeUrl,
      "alt": "QR Payment Code"
    },
    on: {
      "error": _vm.onQRError
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "caption grey--text mb-3"
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": "",
      "left": ""
    }
  }, [_vm._v("mdi-information")]), _vm._v("\n          Scan with mobile banking app\n        ")], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "dense": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticStyle: {
      "color": "primary !important"
    },
    attrs: {
      "small": "",
      "text": ""
    },
    on: {
      "click": _vm.downloadQR
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-download")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticStyle: {
      "color": "primary !important"
    },
    attrs: {
      "small": "",
      "text": ""
    },
    on: {
      "click": _vm.shareQR
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-share")])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VBtn["a" /* default */], {
    staticStyle: {
      "color": "primary !important"
    },
    attrs: {
      "small": "",
      "text": ""
    },
    on: {
      "click": _vm.copyQRString
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v(_vm._s(_vm.copied ? 'mdi-check' : 'mdi-content-copy'))])], 1)], 1)], 1)], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CAFE/paymentDialogFront/index.vue?vue&type=template&id=301a3b30&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CAFE/paymentDialogFront/index.vue?vue&type=script&lang=js

/* harmony default export */ var paymentDialogFrontvue_type_script_lang_js = ({
  name: 'PaymentDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    amount: {
      type: Number,
      default: 0
    },
    ticketId: {
      type: Number,
      default: 0
    },
    tableNumber: {
      type: [String, Number],
      default: ''
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    paymentLoading: {
      type: Boolean,
      default: false
    },
    actionLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      qrRefreshInterval: null,
      // store interval id so we can clear later
      selectedPaymentMethod: null,
      showQRDialog: false,
      copied: false,
      qrString: '00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405100005802LA5907KHAMMAO6260011713a321asS321as2250302120713te rminal000010812test remarks63041c9f',
      // Cash payment fields
      cashReceived: 0,
      cashReceivedFormatted: '',
      changeAmount: 0,
      cashRules: [v => !!this.cashReceived || 'Cash received amount is required', v => this.cashReceived >= 0 || 'Amount must be positive', v => this.cashReceived >= this.amount || `Insufficient amount (minimum: ${this.formatPrice(this.amount)})`],
      // Customer display window reference
      customerDisplayWindow: null
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      searchKeyword: 'searchKeyword',
      currenctSelectedCategoryId: 'currenctSelectedCategoryId',
      currentSelectedLocation: 'currentSelectedLocation',
      findAllCurrency: 'findAllCurrency',
      findAllTerminal: 'findAllTerminal',
      findSelectedTerminal: 'findSelectedTerminal'
    }),
    currentTerminal() {
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
    },
    companyInfo() {
      var _this$currentTerminal, _this$currentTerminal2;
      const company = (_this$currentTerminal = this.currentTerminal) === null || _this$currentTerminal === void 0 ? void 0 : (_this$currentTerminal2 = _this$currentTerminal.location) === null || _this$currentTerminal2 === void 0 ? void 0 : _this$currentTerminal2.company;
      if (!company) {
        return {
          name: 'Restaurant Name',
          address: '123 Main Street<br>City, State 12345',
          tel: '',
          email: '',
          bank: '',
          accountName: '',
          accounts: '',
          remark: ''
        };
      }
      let formattedAddress = '';
      if (company.address) formattedAddress += company.address;
      if (company.village) formattedAddress += `<br>${company.village}`;
      if (company.district) formattedAddress += `, ${company.district}`;
      if (company.province) formattedAddress += `, ${company.province}`;
      return {
        name: company.name || 'Restaurant Name',
        address: formattedAddress || company.address || '',
        tel: company.tel || '',
        email: company.email || '',
        bank: company.bank || '',
        accountName: company.accountName || '',
        accounts: company.accounts || '',
        remark: company.remark || ''
      };
    },
    showDialog: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) this.closeDialog();
      }
    },
    qrCodeUrl() {
      const encodedString = encodeURIComponent(this.currentQRString.replace(/\s/g, ''));
      return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodedString}&format=png&margin=10&color=01532B&bgcolor=ffffff`;
    },
    currentQRString() {
      return this.generateQRString();
    },
    // Check if selected payment method is cash
    isCashPayment() {
      var _this$selectedPayment;
      return this.selectedPaymentMethod && (this.selectedPaymentMethod.payment_code === 'CASH' || ((_this$selectedPayment = this.selectedPaymentMethod.payment_name) === null || _this$selectedPayment === void 0 ? void 0 : _this$selectedPayment.toLowerCase().includes('cash')));
    },
    // Validate payment based on method type
    isPaymentValid() {
      if (!this.selectedPaymentMethod) return false;
      if (this.isCashPayment) {
        return this.cashReceived && this.cashReceived >= this.amount && this.changeAmount >= 0;
      }
      return true; // Non-cash payments are valid once method is selected
    }
  },
  watch: {
    // Watch for dialog opening/closing
    show: {
      handler(newVal, oldVal) {
        if (newVal && !oldVal) {
          // Dialog just opened
          this.onDialogOpened();
        } else if (!newVal && oldVal) {
          // Dialog just closed
          this.onDialogClosed();
        }
      },
      immediate: false
    },
    // Also watch for changes in amount, tableNumber, or ticketId while dialog is open
    amount: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen();
          this.calculateChange(); // Recalculate change when amount changes
        }
      }
    },
    tableNumber: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen();
        }
      }
    },
    ticketId: {
      handler(newVal, oldVal) {
        if (this.show && newVal !== oldVal) {
          this.updateCustomerScreen();
        }
      }
    },
    // Watch for payment method changes
    selectedPaymentMethod: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          // Reset cash fields when switching payment methods
          if (!this.isCashPayment) {
            this.cashReceived = 0;
            this.cashReceivedFormatted = '';
            this.changeAmount = 0;
          } else {
            // Auto-fill exact amount for cash payments
            this.setCashReceived(this.amount);
          }
        }
      }
    }
  },
  mounted() {
    // Only update customer screen if dialog is already open when component mounts
    if (this.show) {
      this.onDialogOpened();
    }
  },
  beforeDestroy() {
    // Clean up intervals and hide QR from customer screen
    this.cleanup();
  },
  methods: {
    onDialogOpened() {
      console.log('Payment dialog opened - updating customer screen');

      // Immediately show QR on customer screen
      this.showQROnCustomerScreen();

      // Optional: Set up auto-refresh interval
      this.startAutoRefresh();

      // Emit event for parent component if needed
      this.$emit('dialog-opened');
    },
    onDialogClosed() {
      console.log('Payment dialog closed - cleaning up');
      this.cleanup();
      this.resetComponent();
    },
    startAutoRefresh() {
      // Clear any existing interval
      if (this.qrRefreshInterval) {
        clearInterval(this.qrRefreshInterval);
      }

      // Set up auto-refresh every 30 seconds (adjust as needed)
      this.qrRefreshInterval = setInterval(() => {
        if (this.show) {
          console.log('Auto-refreshing customer screen QR');
          this.showQROnCustomerScreen();
        }
      }, 30000); // 30 seconds
    },
    cleanup() {
      // Clear auto-refresh interval
      if (this.qrRefreshInterval) {
        clearInterval(this.qrRefreshInterval);
        this.qrRefreshInterval = null;
      }

      // Hide QR from customer screen but keep window open
      this.hideQRFromCustomerScreen();

      // Note: We deliberately do NOT close the customer display window here
      // so it can be reused for subsequent payments
      console.log('Payment dialog cleanup - keeping customer display window open');
    },
    updateCustomerScreen() {
      // Debounced update to avoid too many rapid updates
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
      }
      this.updateTimeout = setTimeout(() => {
        if (this.show) {
          console.log('Updating customer screen due to data change');
          this.showQROnCustomerScreen();
        }
      }, 500); // 500ms debounce
    },
    // Updated method to handle payment method selection
    selectPaymentMethod(payment) {
      this.selectedPaymentMethod = payment;
    },
    // Calculate change amount
    calculateChange() {
      this.changeAmount = this.cashReceived - this.amount;
    },
    // Handle cash input with real-time formatting
    onCashInput(value) {
      // Remove all non-numeric characters except decimal point
      const numericValue = value.replace(/[^\d.]/g, '');

      // Convert to number and update the actual value
      this.cashReceived = parseFloat(numericValue) || 0;

      // Format for display with thousand separators
      this.cashReceivedFormatted = this.formatNumberWithCommas(numericValue);

      // Calculate change
      this.calculateChange();
    },
    // Format display when field loses focus
    formatCashDisplay() {
      if (this.cashReceived > 0) {
        this.cashReceivedFormatted = this.formatNumberWithCommas(this.cashReceived.toString());
      }
    },
    // Format number with thousand separators
    formatNumberWithCommas(value) {
      if (!value) return '';

      // Handle decimal numbers
      const parts = value.toString().split('.');
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      // Return with decimal part if it exists
      return parts[1] !== undefined ? `${integerPart}.${parts[1]}` : integerPart;
    },
    // Set cash received amount from quick buttons
    setCashReceived(amount) {
      this.cashReceived = amount;
      this.cashReceivedFormatted = this.formatNumberWithCommas(amount.toString());
      this.calculateChange();
    },
    // Generate quick cash amount suggestions
    getQuickCashAmounts() {
      const ticketAmount = this.amount;
      const amounts = [];

      // Add exact amount
      amounts.push(ticketAmount);

      // Add common bill denominations above the ticket amount
      const commonBills = [20000, 50000, 100000, 200000, 500000];
      commonBills.forEach(bill => {
        if (bill > ticketAmount && !amounts.includes(bill)) {
          amounts.push(bill);
        }
      });

      // Add rounded amounts
      const roundedUp = Math.ceil(ticketAmount / 10000) * 10000;
      if (roundedUp > ticketAmount && !amounts.includes(roundedUp)) {
        amounts.push(roundedUp);
      }
      return amounts.slice(0, 4); // Limit to 4 suggestions
    },
    showQROnCustomerScreen() {
      const qrData = {
        amount: this.amount,
        tableNumber: this.tableNumber,
        ticketId: this.ticketId,
        qrString: this.generateQRString(),
        timestamp: Date.now()
      };

      // Try to open customer display window on second monitor
      this.openCustomerDisplayWindow(qrData);

      // Fallback: Use localStorage for existing customer display windows
      localStorage.setItem('customerDisplay', JSON.stringify({
        type: 'SHOW_QR_PAYMENT',
        data: qrData
      }));
      window.dispatchEvent(new Event('storage'));

      // Only show success message if manually clicked (not auto-update)
      if (arguments.length > 0 && arguments[0] === 'manual') {
        this.$emit('show-message', `QR displayed on customer screen`, 'success', 'mdi-qrcode');
      }
    },
    async openCustomerDisplayWindow(qrData) {
      try {
        // Check if customer display window already exists and is still open
        if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
          console.log('Customer display window already open, updating content');
          this.updateExistingCustomerWindow(qrData);
          return;
        }

        // Check if there's a global reference to the customer display window
        if (window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed) {
          console.log('Using existing global customer display window');
          this.customerDisplayWindow = window.globalCustomerDisplayWindow;
          this.updateExistingCustomerWindow(qrData);
          return;
        }
        console.log('Opening new customer display window...');

        // Get available screens/monitors
        const screens = await this.getAvailableScreens();

        // Determine target screen (second monitor if available)
        const targetScreen = screens.length > 1 ? screens[1] : screens[0];

        // Calculate window position and size for target screen
        const windowFeatures = this.calculateWindowFeatures(targetScreen);

        // Open new customer display window
        this.customerDisplayWindow = window.open(this.getCustomerDisplayURL(), 'customerDisplay', windowFeatures);
        if (this.customerDisplayWindow) {
          // Store global reference so other components can reuse it
          window.globalCustomerDisplayWindow = this.customerDisplayWindow;

          // Set up window event handlers
          this.setupCustomerWindowHandlers();

          // Wait for window to load then send data
          this.customerDisplayWindow.addEventListener('load', () => {
            this.sendDataToCustomerWindow(qrData);
          });

          // Focus the new window
          this.customerDisplayWindow.focus();
          console.log('Customer display window opened successfully');
        } else {
          throw new Error('Failed to open customer display window - popup blocked?');
        }
      } catch (error) {
        console.warn('Failed to open customer display window:', error);
        this.$emit('show-message', 'Could not open customer display. Please check popup settings.', 'warning', 'mdi-alert');
      }
    },
    setupCustomerWindowHandlers() {
      if (!this.customerDisplayWindow) return;

      // Handle window close event
      this.customerDisplayWindow.addEventListener('beforeunload', () => {
        console.log('Customer display window is closing');
        // Clear global reference when window closes
        window.globalCustomerDisplayWindow = null;
        this.customerDisplayWindow = null;
      });

      // Handle window focus/blur for better UX
      this.customerDisplayWindow.addEventListener('blur', () => {
        // Window lost focus - could add logging here
      });
    },
    async getAvailableScreens() {
      try {
        // Use Screen Management API if available (Chrome 93+)
        if ('getScreenDetails' in window) {
          const screenDetails = await window.getScreenDetails();
          return screenDetails.screens;
        } else {
          // Fallback: Use basic screen info
          return [{
            left: 0,
            top: 0,
            width: window.screen.width,
            height: window.screen.height,
            availWidth: window.screen.availWidth,
            availHeight: window.screen.availHeight
          }];
        }
      } catch (error) {
        console.warn('Screen detection failed:', error);
        // Return primary screen info as fallback
        return [{
          left: 0,
          top: 0,
          width: window.screen.width,
          height: window.screen.height,
          availWidth: window.screen.availWidth,
          availHeight: window.screen.availHeight
        }];
      }
    },
    calculateWindowFeatures(screen) {
      // Make window fullscreen on target screen
      const windowWidth = screen.availWidth; // Use full available width
      const windowHeight = screen.availHeight; // Use full available height

      // Position at top-left of target screen
      const left = screen.left;
      const top = screen.top;
      return [`width=${windowWidth}`, `height=${windowHeight}`, `left=${left}`, `top=${top}`, 'toolbar=no', 'menubar=no', 'scrollbars=no',
      // No scrollbars for fullscreen
      'resizable=no',
      // Prevent resizing
      'location=no', 'directories=no', 'status=no', 'fullscreen=yes' // Request fullscreen if supported
      ].join(',');
    },
    //   getCustomerDisplayURL() {
    //     // You can customize this URL based on your setup
    //     const baseUrl = window.location.origin
    //     const customerDisplayPath = '/admin/cafeTable/customer' // Adjust this path as needed
    // return `${baseUrl}${customerDisplayPath}?tableId=${tableId}&orderId=${orderId}`
    //     // return `${baseUrl}${customerDisplayPath}`
    //   },
    getCustomerDisplayURL() {
      const baseUrl = window.location.origin;
      const customerDisplayPath = '/admin/cafeTable/customer';

      // Serialize company info
      const companyData = encodeURIComponent(JSON.stringify(this.companyInfo));
      return `${baseUrl}${customerDisplayPath}?company=${companyData}`;
    },
    updateExistingCustomerWindow(qrData) {
      try {
        // Send data to existing window
        this.sendDataToCustomerWindow(qrData);

        // Bring window to front
        this.customerDisplayWindow.focus();
      } catch (error) {
        console.warn('Failed to update existing customer window:', error);
        // Try to reopen window
        this.customerDisplayWindow = null;
        this.openCustomerDisplayWindow(qrData);
      }
    },
    sendDataToCustomerWindow(qrData) {
      console.info(`sendDataToCustomerWindow==> ${JSON.stringify(qrData)}`);
      console.info(`sendDataToCustomerWindow AAA==> ${JSON.stringify(this.customerDisplayWindow)}`);
      if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
        // Send data via postMessage
        this.customerDisplayWindow.postMessage({
          type: 'SHOW_QR_PAYMENT',
          data: qrData
        }, '*');

        // Also set localStorage in the new window for compatibility
        try {
          this.customerDisplayWindow.localStorage.setItem('customerDisplay', JSON.stringify({
            type: 'SHOW_QR_PAYMENT',
            data: qrData
          }));
        } catch (error) {
          console.warn('Could not access customer window localStorage:', error);
        }
      }
    },
    hideQRFromCustomerScreen() {
      const hideMessage = {
        type: 'HIDE_QR_PAYMENT',
        timestamp: Date.now()
      };

      // Send hide message to customer display window if it exists
      if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
        this.customerDisplayWindow.postMessage(hideMessage, '*');
      }

      // Also check global reference
      if (window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed) {
        window.globalCustomerDisplayWindow.postMessage(hideMessage, '*');
      }

      // Fallback: use localStorage for compatibility
      localStorage.setItem('customerDisplay', JSON.stringify(hideMessage));
      window.dispatchEvent(new Event('storage'));
    },
    // Method to manually close customer display window if needed
    closeCustomerDisplayWindow() {
      try {
        if (this.customerDisplayWindow && !this.customerDisplayWindow.closed) {
          this.customerDisplayWindow.close();
          console.log('Customer display window closed manually');
        }
        if (window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed) {
          window.globalCustomerDisplayWindow.close();
          console.log('Global customer display window closed manually');
        }

        // Clear references
        this.customerDisplayWindow = null;
        window.globalCustomerDisplayWindow = null;
        this.$emit('show-message', 'Customer display window closed', 'info', 'mdi-monitor-off');
      } catch (error) {
        console.warn('Error closing customer display window:', error);
      }
    },
    // Method to check if customer display is available
    isCustomerDisplayOpen() {
      return this.customerDisplayWindow && !this.customerDisplayWindow.closed || window.globalCustomerDisplayWindow && !window.globalCustomerDisplayWindow.closed;
    },
    showPaymentSuccessOnCustomerScreen() {
      localStorage.setItem('customerDisplay', JSON.stringify({
        type: 'PAYMENT_SUCCESS',
        data: {
          amount: this.amount,
          tableNumber: this.tableNumber
        },
        timestamp: Date.now()
      }));
      window.dispatchEvent(new Event('storage'));
    },
    generateQRString() {
      if (!this.amount || !this.tableNumber) return this.qrString;
      const amountStr = Math.round(this.amount).toString().padStart(6, '0');
      const tableStr = this.tableNumber.toString().padStart(6, '0');
      return `00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405${amountStr}05802LA5907KHAMMAO6260011713a321asS321as2250302120713terminal${tableStr}0812Table ${this.tableNumber} payment63041c9f`;
    },
    closeDialog() {
      this.cleanup();
      this.resetComponent();
      this.$emit('close');
    },
    resetComponent() {
      this.selectedPaymentMethod = null;
      this.showQRDialog = false;
      this.copied = false;
      this.cashReceived = 0;
      this.cashReceivedFormatted = '';
      this.changeAmount = 0;

      // Clear any pending timeouts
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = null;
      }
    },
    confirmPayment() {
      if (!this.selectedPaymentMethod) {
        this.$emit('show-message', 'Please select a payment method', 'warning', 'mdi-alert');
        return;
      }

      // Validate cash payment
      if (this.isCashPayment) {
        if (!this.cashReceived || this.cashReceived < this.amount) {
          this.$emit('show-message', 'Please enter a valid cash amount', 'warning', 'mdi-alert');
          return;
        }
      }
      this.showPaymentSuccessOnCustomerScreen();

      // Include cash details in payment data for cash payments
      const paymentData = {
        ...this.selectedPaymentMethod,
        ...(this.isCashPayment && {
          cashReceived: this.cashReceived,
          changeAmount: this.changeAmount
        })
      };
      this.$emit('confirm-payment', paymentData);
    },
    async copyQRString() {
      try {
        const stringToCopy = this.currentQRString;
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(stringToCopy);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = stringToCopy;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy QR string:', err);
      }
    },
    downloadQR() {
      const link = document.createElement('a');
      link.href = this.qrCodeUrl;
      link.download = `qr-payment-table-${this.tableNumber}-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    shareQR() {
      if (navigator.share) {
        navigator.share({
          title: `Payment QR - Table ${this.tableNumber}`,
          text: `Payment QR Code for ${this.formatPrice(this.amount)}`,
          url: this.qrCodeUrl
        }).catch(err => console.log('Error sharing:', err));
      } else {
        this.copyQRString();
        this.$emit('show-message', 'QR code details copied!', 'success', 'mdi-check');
      }
    },
    onQRError() {
      this.$emit('show-message', 'Failed to load QR code', 'error', 'mdi-alert');
    },
    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Math.round(amount || 0));
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber;
    },
    getPaymentIcon(paymentCode) {
      const icons = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        CREDIT: 'mdi-credit-card-outline',
        DEBIT: 'mdi-credit-card',
        MOBILE: 'mdi-cellphone',
        DIGITAL: 'mdi-wallet',
        BANK: 'mdi-bank',
        CHECK: 'mdi-checkbook'
      };
      return icons[paymentCode] || 'mdi-currency-usd';
    },
    getPaymentColor(paymentCode) {
      const colors = {
        CASH: 'green',
        CARD: 'blue',
        CREDIT: 'purple',
        DEBIT: 'indigo',
        MOBILE: 'orange',
        DIGITAL: 'teal',
        BANK: 'brown',
        CHECK: 'grey'
      };
      return colors[paymentCode] || 'primary';
    }
  }
});
// CONCATENATED MODULE: ./components/CAFE/paymentDialogFront/index.vue?vue&type=script&lang=js
 /* harmony default export */ var CAFE_paymentDialogFrontvue_type_script_lang_js = (paymentDialogFrontvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CAFE/paymentDialogFront/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(584)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CAFE_paymentDialogFrontvue_type_script_lang_js,
  paymentDialogFrontvue_type_template_id_301a3b30_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "301a3b30",
  "07a78cad"
  
)

/* harmony default export */ var paymentDialogFront = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=c-a-f-e-payment-dialog-front.js.map