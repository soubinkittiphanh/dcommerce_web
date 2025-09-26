exports.ids = [266,26,48];
exports.modules = {

/***/ 1228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(389);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/fashion/index_20240429.vue?vue&type=template&id=653d1813&














var index_20240429vue_type_template_id_653d1813_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mr-16 ml-16"
  }, [_vm._ssrNode("<div class=\"brands mb-4 mt-2\">", "</div>", [_c('brands')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"discount-products mb-4\">", "</div>", [_c(VCard["a" /* default */], {
    staticClass: "pa-6 rounded-lg"
  }, [_c(VRow["a" /* default */], [_c(VList["a" /* default */], {
    staticStyle: {
      "margin-bottom": "-10px"
    }
  }, [_c(VListItem["a" /* default */], [_c(VAvatar["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "tile": "",
      "color": "green rounded-pill",
      "size": "40"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-cash-minus")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_c('h3', [_vm._v("ສິນຄ້າຫຼຸດລາຄາ")])]), _vm._v(" "), _c(VListItemIcon["a" /* default */])], 1)], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "green--text mt-3",
    attrs: {
      "text": "",
      "color": "green"
    },
    on: {
      "click": _vm.gotoProductDetail
    }
  }, [_vm._v("\n                    ເບິ່ງເພີ່ມເຕີມ\n                    "), _c(VIcon["a" /* default */], {
    attrs: {
      "right": "",
      "dark": ""
    }
  }, [_vm._v(" mdi-arrow-right-circle ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VDivider["a" /* default */], {
    staticClass: "mb-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, _vm._l(_vm.productList, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-12 col-md-2 col-sm-6 col-xs-6 text-center"
    }, [_c('discount-products-card', {
      attrs: {
        "product": item
      }
    })], 1);
  }), 0)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"banner-1 mb-4\">", "</div>", [_c(VCard["a" /* default */], {
    staticClass: "rounded-lg"
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "max-width": "100%",
      "src": _vm.Banner_1
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"hot-products mb-4\">", "</div>", [_c(VCard["a" /* default */], {
    staticClass: "pa-6 rounded-lg"
  }, [_c(VRow["a" /* default */], [_c(VList["a" /* default */], {
    staticStyle: {
      "margin-bottom": "-10px"
    }
  }, [_c(VListItem["a" /* default */], [_c(VAvatar["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "tile": "",
      "color": "red rounded-pill",
      "size": "40"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-fire")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_c('h3', [_vm._v("ສີນຄ້າຍອດນິຍົມ")])]), _vm._v(" "), _c(VListItemIcon["a" /* default */])], 1)], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "red--text mt-3",
    attrs: {
      "text": "",
      "color": "red"
    }
  }, [_vm._v("\n                    ເບິ່ງເພີ່ມເຕີມ\n                    "), _c(VIcon["a" /* default */], {
    attrs: {
      "right": "",
      "dark": ""
    }
  }, [_vm._v(" mdi-arrow-right-circle ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VDivider["a" /* default */], {
    staticClass: "mb-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"banner-2 mb-4\">", "</div>", [_c(VCard["a" /* default */], {
    staticClass: "rounded-lg"
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "max-width": "100%",
      "src": _vm.Banner_2
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"new-products mb-4\">", "</div>", [_c(VCard["a" /* default */], {
    staticClass: "pa-6 rounded-lg"
  }, [_c(VRow["a" /* default */], [_c(VList["a" /* default */], {
    staticStyle: {
      "margin-bottom": "-10px"
    }
  }, [_c(VListItem["a" /* default */], [_c(VAvatar["a" /* default */], {
    staticClass: "mr-2",
    attrs: {
      "tile": "",
      "color": "blue rounded-pill",
      "size": "40"
    }
  }, [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "white"
    }
  }, [_vm._v("mdi-new-box")])], 1), _vm._v(" "), _c(components_VList["c" /* VListItemTitle */], [_c('h3', [_vm._v("ສິນຄ້າໃໝ່")])]), _vm._v(" "), _c(VListItemIcon["a" /* default */])], 1)], 1), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VDivider["a" /* default */], {
    staticClass: "mb-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 col-md-12 col-sm-6 col-xs-6 text-center"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "blue white--text",
    attrs: {
      "outlined": ""
    }
  }, [_vm._v("\n                                ເບິ່ງເພີ່ມເຕີມ "), _c(VIcon["a" /* default */], [_vm._v("mdi-arrow-down")])], 1)], 1)])], 1)], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/fashion/index_20240429.vue?vue&type=template&id=653d1813&

// EXTERNAL MODULE: ./assets/img/banners/banner_1.png
var banner_1 = __webpack_require__(671);
var banner_1_default = /*#__PURE__*/__webpack_require__.n(banner_1);

// EXTERNAL MODULE: ./assets/img/banners/banner_2.png
var banner_2 = __webpack_require__(672);
var banner_2_default = /*#__PURE__*/__webpack_require__.n(banner_2);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/fashion/index_20240429.vue?vue&type=script&lang=js&




/* harmony default export */ var index_20240429vue_type_script_lang_js_ = ({
  layout: "web",
  data() {
    return {
      isLoading: false,
      Banner_1: banner_1_default.a,
      Banner_2: banner_2_default.a,
      productList: [],
      icons: ['mdi-facebook', 'mdi-whatsapp']
    };
  },
  computed: {
    host() {
      return Object(api["a" /* hostName */])();
    }
  },
  async created() {
    await this.loadProduct();
  },
  methods: {
    formatPrice(price) {
      console.log(`Price ${Object(common["e" /* getFormatNum */])(price)}`);
      return Object(common["e" /* getFormatNum */])(price);
    },
    gotoProductDetail(productId) {
      this.$router.push({
        name: 'product-details',
        params: {
          id: productId
        }
      });
    },
    async loadProduct() {
      this.isLoading = true;
      await this.$axios.get('product_mobile_f').then(res => {
        // console.log("DATA LENG: ",res.length());
        // return;
        this.productList = res.data.map(el => {
          return {
            card_count: el.card_count,
            categ_name: el.categ_name,
            cost_price: el.cost_price,
            id: el.id,
            img_name: el.img_name,
            img_path: el.img_path,
            outlet: el.outlet,
            outlet_name: el.outlet_name,
            pro_category: el.pro_category,
            pro_desc: el.pro_desc,
            pro_id: el.pro_id,
            pro_image_path: el.pro_image_path,
            pro_name: el.pro_name,
            pro_price: el.pro_price,
            pro_status: el.pro_status,
            retail_cost_percent: el.retail_cost_percent,
            sale_count: el.sale_count,
            stock_count: el.stock_count
          };
        });
        console.log("all data1: ", this.productList[0].img_path);
      }).catch(er => {
        console.log('Data: ' + er);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/fashion/index_20240429.vue?vue&type=script&lang=js&
 /* harmony default export */ var fashion_index_20240429vue_type_script_lang_js_ = (index_20240429vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/fashion/index_20240429.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  fashion_index_20240429vue_type_script_lang_js_,
  index_20240429vue_type_template_id_653d1813_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "bd805ee0"
  
)

/* harmony default export */ var index_20240429 = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Brands: __webpack_require__(875).default,DiscountProductsCard: __webpack_require__(614).default})


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

/***/ 614:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(394);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/discount-products-card.vue?vue&type=template&id=9e91c85c&








var discount_products_cardvue_type_template_id_9e91c85c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VHover["a" /* default */], {
    attrs: {
      "open-delay": "50"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        hover
      }) {
        return [_c(VCard["a" /* default */], {
          attrs: {
            "elevation": hover ? 8 : 0,
            "width": "220"
          },
          on: {
            "click": function ($event) {
              return _vm.gotoProductDetail(_vm.product.id);
            }
          }
        }, [_c(VCard["a" /* default */], {
          attrs: {
            "height": " 280"
          }
        }, [_vm.product['images'].length > 0 ? _c(VImg["a" /* default */], {
          staticClass: "pointer-cursor",
          attrs: {
            "max-width": "220",
            "src": _vm.host + '/' + _vm.product['images'][0]['img_path']
          }
        }) : _vm._e()], 1), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
          staticClass: "text-start"
        }, [_c('div', {
          staticClass: "font-weight-meduim black--text"
        }, [_vm._v(_vm._s(_vm.product.pro_name))]), _vm._v(" "), _c('div', {
          staticClass: "font-weight-meduim green--text"
        }, [_vm._v("\n          ລາຄາ: " + _vm._s(_vm.formatPrice(_vm.product.pro_price)) + "\n        ")]), _vm._v(" "), _c('div', {
          staticClass: "d-flex justify-space-between mt-2"
        }, [_c(VChip["a" /* default */], {
          staticClass: "ma-0 white--text",
          attrs: {
            "small": "",
            "label": "",
            "color": "white"
          }
        }, [_c(VBtn["a" /* default */], {
          attrs: {
            "icon": "",
            "color": "green"
          },
          on: {
            "click": function ($event) {
              _vm.whatsappProduct(_vm.product.pro_price);
            }
          }
        }, [_c(VIcon["a" /* default */], [_vm._v("mdi-whatsapp")])], 1)], 1), _vm._v(" "), _c(VChip["a" /* default */], {
          staticClass: "ma-0",
          attrs: {
            "small": "",
            "label": "",
            "outlined": "",
            "color": "primary"
          }
        }, [_vm._v("\n            " + _vm._s("ພ້ອມສົ່ງ") + "\n          ")])], 1)])], 1)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/discount-products-card.vue?vue&type=template&id=9e91c85c&

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./common/api.js
var api = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/discount-products-card.vue?vue&type=script&lang=js&


/* harmony default export */ var discount_products_cardvue_type_script_lang_js_ = ({
  name: 'discount-products-card',
  props: {
    product: {
      type: Object,
      require: true
    }
  },
  computed: {
    host() {
      return Object(api["a" /* hostName */])();
    }
  },
  data() {
    return {
      discountPrice: '119000 LAK',
      discountPercent: '-50%'
    };
  },
  methods: {
    gotoProductDetail(productId) {
      // this.$router.push({ name: 'product-details', params: { id: productId } });
      this.$router.push({
        path: `product/${productId}`
      });
    },
    formatPrice(price) {
      console.log(`Price ${Object(common["e" /* getFormatNum */])(price)}`);
      return Object(common["e" /* getFormatNum */])(price);
    },
    whatsappProduct(pro_price) {
      console.log(`Price ${this.formatPrice(pro_price)}`);
      // TODO: Get whatsapp function done
    }
  }
});
// CONCATENATED MODULE: ./components/discount-products-card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_discount_products_cardvue_type_script_lang_js_ = (discount_products_cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/discount-products-card.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_discount_products_cardvue_type_script_lang_js_,
  discount_products_cardvue_type_template_id_9e91c85c_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "bcaa0480"
  
)

/* harmony default export */ var discount_products_card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner_1.a8ec209.png";

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner_2.e1b3784.png";

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/xiaomi.db57d06.png";

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItem.js
// Mixins
 // Utilities


 // Types


/* @vue/component */

const BaseItem = external_vue_default.a.extend({
  props: {
    activeClass: String,
    value: {
      required: false
    }
  },
  data: () => ({
    isActive: false
  }),
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  render() {
    if (!this.$scopedSlots.default) {
      Object(console["c" /* consoleWarn */])('v-item is missing a default scopedSlot', this);
      return null;
    }
    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        active: this.isActive,
        toggle: this.toggle
      });
    }
    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }
    if (!element || Array.isArray(element) || !element.tag) {
      Object(console["c" /* consoleWarn */])('v-item should only contain a single element', this);
      return element;
    }
    element.data = this._b(element.data || {}, element.tag, {
      class: {
        [this.activeClass]: this.isActive
      }
    });
    return element;
  }
});
/* harmony default export */ var VItem = (Object(mixins["a" /* default */])(BaseItem, Object(groupable["a" /* factory */])('itemGroup', 'v-item', 'v-item-group')).extend({
  name: 'v-item'
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideItem.js
// Extensions
 // Mixins



/* harmony default export */ var VSlideItem = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(BaseItem, Object(groupable["a" /* factory */])('slideGroup')
/* @vue/component */).extend({
  name: 'v-slide-item'
}));

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
var VSlideGroup = __webpack_require__(520);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideItem.js + 1 modules
var VSlideItem = __webpack_require__(726);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/brands.vue?vue&type=template&id=53ec9e7e&







var brandsvue_type_template_id_53ec9e7e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VSheet["a" /* default */], {
    staticClass: "rounded-lg"
  }, [_c(VSlideGroup["b" /* default */], {
    attrs: {
      "show-arrows": "",
      "center-active": ""
    },
    scopedSlots: _vm._u([{
      key: "next",
      fn: function () {
        return [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "primary"
          }
        }, [_vm._v("mdi-arrow-right")])];
      },
      proxy: true
    }, {
      key: "prev",
      fn: function () {
        return [_c(VIcon["a" /* default */], {
          attrs: {
            "color": "primary"
          }
        }, [_vm._v("mdi-arrow-left")])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._v(" "), _vm._l(20, function (item, index) {
    return _c(VSlideItem["a" /* default */], {
      key: index
    }, [_c(VCard["a" /* default */], {
      staticClass: "ma-4",
      attrs: {
        "width": "100"
      }
    }, [_c(VImg["a" /* default */], {
      staticClass: "pointer-cursor hover",
      attrs: {
        "width": "100",
        "src": _vm.xiaomiImage
      }
    })], 1)], 1);
  })], 2)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/brands.vue?vue&type=template&id=53ec9e7e&

// EXTERNAL MODULE: ./assets/img/brands/xiaomi.png
var xiaomi = __webpack_require__(673);
var xiaomi_default = /*#__PURE__*/__webpack_require__.n(xiaomi);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/brands.vue?vue&type=script&lang=js&

/* harmony default export */ var brandsvue_type_script_lang_js_ = ({
  name: 'brands',
  data() {
    return {
      xiaomiImage: xiaomi_default.a
    };
  }
});
// CONCATENATED MODULE: ./components/brands.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_brandsvue_type_script_lang_js_ = (brandsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/brands.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_brandsvue_type_script_lang_js_,
  brandsvue_type_template_id_53ec9e7e_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "568437bf"
  
)

/* harmony default export */ var brands = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index_20240429.js.map